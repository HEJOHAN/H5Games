! function(t, i, e) {
    e.un, e.uns;
    var s = e.static,
        h = e.class,
        n = e.getset,
        o = (e.__newvec, laya.display.Animation),
        r = (laya.utils.Browser, laya.utils.ClassUtils),
        l = laya.filters.ColorFilter,
        a = laya.utils.Ease,
        c = laya.events.Event,
        u = (laya.events.EventDispatcher, laya.display.css.Font),
        _ = laya.display.FrameAnimation,
        d = laya.display.Graphics,
        f = laya.utils.Handler,
        p = laya.display.Input,
        g = laya.net.Loader,
        m = (laya.display.Node, laya.maths.Point),
        y = laya.maths.Rectangle,
        v = laya.renders.Render,
        C = laya.display.Sprite,
        b = laya.display.Text,
        S = laya.resource.Texture,
        w = laya.utils.Tween,
        x = laya.utils.Utils,
        B = laya.utils.WeakObject;
    e.interface("laya.ui.IItem"), e.interface("laya.ui.ISelect"), e.interface("laya.ui.IRender"), e.interface("laya.ui.IComponent"), e.interface("laya.ui.IBox", "IComponent");
    var k = function() {
            function t() {
                this.enable = !1, this.top = NaN, this.bottom = NaN, this.left = NaN, this.right = NaN, this.centerX = NaN, this.centerY = NaN, this.anchorX = NaN, this.anchorY = NaN
            }
            return h(t, "laya.ui.LayoutStyle"), s(t, ["EMPTY", function() {
                return this.EMPTY = new t
            }]), t
        }(),
        I = function() {
            function t() {}
            return h(t, "laya.ui.Styles"), t.labelColor = "#000000", t.buttonStateNum = 3, t.scrollBarMinNum = 15, t.scrollBarDelayTime = 500, s(t, ["defaultSizeGrid", function() {
                return this.defaultSizeGrid = [4, 4, 4, 4, 0]
            }, "labelPadding", function() {
                return this.labelPadding = [2, 2, 2, 2]
            }, "inputLabelPadding", function() {
                return this.inputLabelPadding = [1, 1, 1, 3]
            }, "buttonLabelColors", function() {
                return this.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"]
            }, "comboBoxItemColors", function() {
                return this.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"]
            }]), t
        }(),
        L = function() {
            function t() {}
            return h(t, "laya.ui.UIUtils"), t.fillArray = function(t, i, e) {
                var s = t.concat();
                if (i)
                    for (var h = i.split(","), n = 0, o = Math.min(s.length, h.length); n < o; n++) {
                        var r = h[n];
                        s[n] = "true" == r || "false" != r && r, null != e && (s[n] = e(r))
                    }
                return s
            }, t.toColor = function(t) {
                return x.toHexColor(t)
            }, t.gray = function(i, e) {
                void 0 === e && (e = !0), e ? t.addFilter(i, t.grayFilter) : t.clearFilter(i, l)
            }, t.addFilter = function(t, i) {
                var e = t.filters || [];
                e.push(i), t.filters = e
            }, t.clearFilter = function(t, i) {
                var s = t.filters;
                if (null != s && s.length > 0) {
                    for (var h = s.length - 1; h > -1; h--) {
                        var n = s[h];
                        e.__typeof(n, i) && s.splice(h, 1)
                    }
                    t.filters = s
                }
            }, t._getReplaceStr = function(i) {
                return t.escapeSequence[i]
            }, t.adptString = function(i) {
                return i.replace(/\\(\w)/g, t._getReplaceStr)
            }, t.getBindFun = function(i) {
                var s = t._funMap.get(i);
                if (null == s) {
                    var h = '"' + i + '"',
                        n = "(function(data){if(data==null)return;with(data){try{\nreturn " + (h = h.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    s = e._runScript(n), t._funMap.set(i, s)
                }
                return s
            }, s(t, ["grayFilter", function() {
                return this.grayFilter = new l([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0])
            }, "escapeSequence", function() {
                return this.escapeSequence = {
                    "\\n": "\n",
                    "\\t": "\t"
                }
            }, "_funMap", function() {
                return this._funMap = new B
            }]), t
        }(),
        M = function() {
            function t() {}
            return h(t, "UIConfig"), t.touchScrollEnable = !0, t.mouseWheelEnable = !0, t.showButtons = !0, t.popupBgColor = "#000000", t.popupBgAlpha = .5, t.closeDialogOnSide = !0, t
        }(),
        z = function(t) {
            function i() {
                this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null, this._sizeGrid = null, this._isChanged = !1, this._offset = null, i.__super.call(this)
            }
            h(i, "laya.ui.AutoBitmap", t);
            var s = i.prototype;
            return s.destroy = function() {
                t.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null
            }, s._setChanged = function() {
                this._isChanged || (this._isChanged = !0, e.timer.callLater(this, this.changeSource))
            }, s.changeSource = function() {
                this._isChanged = !1;
                var t = this._source;
                if (t && t.bitmap) {
                    var e = this.width,
                        s = this.height,
                        h = this._sizeGrid,
                        n = t.sourceWidth,
                        o = t.sourceHeight;
                    if (!h || n === e && o === s) this.cleanByTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, e, s);
                    else {
                        t.$_GID || (t.$_GID = x.getGID());
                        var r = t.$_GID + "." + e + "." + s + "." + h.join(".");
                        if (x.isOKCmdList(B.I.get(r))) return void(this.cmds = B.I.get(r));
                        this.clear();
                        var l = h[0],
                            a = h[1],
                            c = h[2],
                            u = h[3],
                            _ = h[4],
                            d = !1;
                        if (e == n && (u = a = 0), s == o && (l = c = 0), u + a > e) {
                            var f = e;
                            d = !0, e = u + a, this.save(), this.clipRect(0, 0, f, s)
                        }
                        u && l && this.drawTexture(i.getTexture(t, 0, 0, u, l), 0, 0, u, l), a && l && this.drawTexture(i.getTexture(t, n - a, 0, a, l), e - a, 0, a, l), u && c && this.drawTexture(i.getTexture(t, 0, o - c, u, c), 0, s - c, u, c), a && c && this.drawTexture(i.getTexture(t, n - a, o - c, a, c), e - a, s - c, a, c), l && this.drawBitmap(_, i.getTexture(t, u, 0, n - u - a, l), u, 0, e - u - a, l), c && this.drawBitmap(_, i.getTexture(t, u, o - c, n - u - a, c), u, s - c, e - u - a, c), u && this.drawBitmap(_, i.getTexture(t, 0, l, u, o - l - c), 0, l, u, s - l - c), a && this.drawBitmap(_, i.getTexture(t, n - a, l, a, o - l - c), e - a, l, a, s - l - c), this.drawBitmap(_, i.getTexture(t, u, l, n - u - a, o - l - c), u, l, e - u - a, s - l - c), d && this.restore(), this.autoCacheCmd && !v.isConchApp && B.I.set(r, this.cmds)
                    }
                    this._repaint()
                }
            }, s.drawBitmap = function(t, i, e, s, h, n) {
                void 0 === h && (h = 0), void 0 === n && (n = 0), h < .1 || n < .1 || (!t || i.width == h && i.height == n ? this.drawTexture(i, e, s, h, n) : this.fillTexture(i, e, s, h, n))
            }, s.clear = function(i) {
                void 0 === i && (i = !0), t.prototype.clear.call(this, !1)
            }, n(0, s, "sizeGrid", function() {
                return this._sizeGrid
            }, function(t) {
                this._sizeGrid = t, this._setChanged()
            }), n(0, s, "width", function() {
                return this._width ? this._width : this._source ? this._source.sourceWidth : 0
            }, function(t) {
                this._width != t && (this._width = t, this._setChanged())
            }), n(0, s, "height", function() {
                return this._height ? this._height : this._source ? this._source.sourceHeight : 0
            }, function(t) {
                this._height != t && (this._height = t, this._setChanged())
            }), n(0, s, "source", function() {
                return this._source
            }, function(t) {
                t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear())
            }), i.getTexture = function(t, i, e, s, h) {
                s <= 0 && (s = 1), h <= 0 && (h = 1), t.$_GID || (t.$_GID = x.getGID());
                var n = t.$_GID + "." + i + "." + e + "." + s + "." + h,
                    o = B.I.get(n);
                return o && o.source || (o = S.createFromTexture(t, i, e, s, h), B.I.set(n, o)), o
            }, i
        }(d),
        T = (function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.UIEvent", c), i.SHOW_TIP = "showtip", i.HIDE_TIP = "hidetip"
        }(), function(t) {
            function i() {
                this._comXml = null, this._dataSource = null, this._toolTip = null, this._tag = null, this._disabled = !1, this._gray = !1, this.layoutEnabled = !0, i.__super.call(this), this._layout = k.EMPTY, this.preinitialize(), this.createChildren(), this.initialize()
            }
            h(i, "laya.ui.Component", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IComponent": !0
            }), s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._dataSource = this._layout = null, this._tag = null, this._toolTip = null
            }, s.preinitialize = function() {}, s.createChildren = function() {}, s.initialize = function() {}, s.callLater = function(t, i) {
                e.timer.callLater(this, t, i)
            }, s.runCallLater = function(t) {
                e.timer.runCallLater(this, t)
            }, s.commitMeasure = function() {}, s.changeSize = function() {
                this.event("resize")
            }, s.getLayout = function() {
                return this._layout === k.EMPTY && (this._layout = new k), this._layout
            }, s._setLayoutEnabled = function(t) {
                this._layout && this._layout.enable != t && (this._layout.enable = t, this.on("added", this, this.onAdded), this.on("removed", this, this.onRemoved), this.parent && this.onAdded())
            }, s.onRemoved = function() {
                this.parent.off("resize", this, this.onCompResize)
            }, s.onAdded = function() {
                this.parent.on("resize", this, this.onCompResize), this.resetLayoutX(), this.resetLayoutY()
            }, s.onCompResize = function() {
                this._layout && this._layout.enable && (this.resetLayoutX(), this.resetLayoutY())
            }, s.resetLayoutX = function() {
                var t = this._layout;
                if (isNaN(t.anchorX) || (this.pivotX = t.anchorX * this.width), this.layoutEnabled) {
                    var i = this.parent;
                    i && (isNaN(t.centerX) ? isNaN(t.left) ? isNaN(t.right) || (this.x = Math.round(i.width - this.displayWidth - t.right + this.pivotX * this.scaleX)) : (this.x = Math.round(t.left + this.pivotX * this.scaleX), isNaN(t.right) || (this.width = (i._width - t.left - t.right) / (this.scaleX || .01))) : this.x = Math.round(.5 * (i.width - this.displayWidth) + t.centerX + this.pivotX * this.scaleX))
                }
            }, s.resetLayoutY = function() {
                var t = this._layout;
                if (isNaN(t.anchorY) || (this.pivotY = t.anchorY * this.height), this.layoutEnabled) {
                    var i = this.parent;
                    i && (isNaN(t.centerY) ? isNaN(t.top) ? isNaN(t.bottom) || (this.y = Math.round(i.height - this.displayHeight - t.bottom + this.pivotY * this.scaleY)) : (this.y = Math.round(t.top + this.pivotY * this.scaleY), isNaN(t.bottom) || (this.height = (i._height - t.top - t.bottom) / (this.scaleY || .01))) : this.y = Math.round(.5 * (i.height - this.displayHeight) + t.centerY + this.pivotY * this.scaleY))
                }
            }, s.onMouseOver = function(t) {
                e.stage.event("showtip", this._toolTip)
            }, s.onMouseOut = function(t) {
                e.stage.event("hidetip", this._toolTip)
            }, n(0, s, "displayWidth", function() {
                return this.width * this.scaleX
            }), n(0, s, "width", function() {
                return this._width ? this._width : this.measureWidth
            }, function(t) {
                this._width != t && (this._width = t, this.conchModel && this.conchModel.size(this._width, this._height), this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerX) && isNaN(this._layout.right) && isNaN(this._layout.anchorX) || this.resetLayoutX())
            }), n(0, s, "measureWidth", function() {
                var t = 0;
                this.commitMeasure();
                for (var i = this.numChildren - 1; i > -1; i--) {
                    var e = this.getChildAt(i);
                    e.visible && (t = Math.max(e.x + e.width * e.scaleX, t))
                }
                return t
            }), n(0, s, "displayHeight", function() {
                return this.height * this.scaleY
            }), n(0, s, "height", function() {
                return this._height ? this._height : this.measureHeight
            }, function(t) {
                this._height != t && (this._height = t, this.conchModel && this.conchModel.size(this._width, this._height), this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerY) && isNaN(this._layout.bottom) && isNaN(this._layout.anchorY) || this.resetLayoutY())
            }), n(0, s, "dataSource", function() {
                return this._dataSource
            }, function(t) {
                this._dataSource = t;
                for (var i in this._dataSource) this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = this._dataSource[i])
            }), n(0, s, "scaleY", t.prototype._$get_scaleY, function(t) {
                e.superGet(C, this, "scaleY") != t && (e.superSet(C, this, "scaleY", t), this.callLater(this.changeSize), this._layout.enable && this.resetLayoutY())
            }), n(0, s, "measureHeight", function() {
                var t = 0;
                this.commitMeasure();
                for (var i = this.numChildren - 1; i > -1; i--) {
                    var e = this.getChildAt(i);
                    e.visible && (t = Math.max(e.y + e.height * e.scaleY, t))
                }
                return t
            }), n(0, s, "scaleX", t.prototype._$get_scaleX, function(t) {
                e.superGet(C, this, "scaleX") != t && (e.superSet(C, this, "scaleX", t), this.callLater(this.changeSize), this._layout.enable && this.resetLayoutX())
            }), n(0, s, "top", function() {
                return this._layout.top
            }, function(t) {
                t != this._layout.top && (this.getLayout().top = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
            }), n(0, s, "bottom", function() {
                return this._layout.bottom
            }, function(t) {
                t != this._layout.bottom && (this.getLayout().bottom = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
            }), n(0, s, "left", function() {
                return this._layout.left
            }, function(t) {
                t != this._layout.left && (this.getLayout().left = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
            }), n(0, s, "right", function() {
                return this._layout.right
            }, function(t) {
                t != this._layout.right && (this.getLayout().right = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
            }), n(0, s, "centerX", function() {
                return this._layout.centerX
            }, function(t) {
                t != this._layout.centerX && (this.getLayout().centerX = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
            }), n(0, s, "centerY", function() {
                return this._layout.centerY
            }, function(t) {
                t != this._layout.centerY && (this.getLayout().centerY = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
            }), n(0, s, "anchorX", function() {
                return this._layout.anchorX
            }, function(t) {
                t != this._layout.anchorX && (this.getLayout().anchorX = t, this._setLayoutEnabled(!0)), this.resetLayoutX()
            }), n(0, s, "anchorY", function() {
                return this._layout.anchorY
            }, function(t) {
                t != this._layout.anchorY && (this.getLayout().anchorY = t, this._setLayoutEnabled(!0)), this.resetLayoutY()
            }), n(0, s, "tag", function() {
                return this._tag
            }, function(t) {
                this._tag = t
            }), n(0, s, "toolTip", function() {
                return this._toolTip
            }, function(t) {
                this._toolTip != t && (this._toolTip = t, null != t ? (this.on("mouseover", this, this.onMouseOver), this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver), this.off("mouseout", this, this.onMouseOut)))
            }), n(0, s, "comXml", function() {
                return this._comXml
            }, function(t) {
                this._comXml = t
            }), n(0, s, "gray", function() {
                return this._gray
            }, function(t) {
                t !== this._gray && (this._gray = t, L.gray(this, t))
            }), n(0, s, "disabled", function() {
                return this._disabled
            }, function(t) {
                t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t)
            }), i
        }(C)),
        P = function(t) {
            function i() {
                this.lockLayer = null, this.popupEffect = function(t) {
                    t.scale(1, 1), w.from(t, {
                        x: e.stage.width / 2,
                        y: e.stage.height / 2,
                        scaleX: 0,
                        scaleY: 0
                    }, 300, a.backOut, f.create(this, this.doOpen, [t]))
                }, this.closeEffect = function(t, i) {
                    w.to(t, {
                        x: e.stage.width / 2,
                        y: e.stage.height / 2,
                        scaleX: 0,
                        scaleY: 0
                    }, 300, a.strongOut, f.create(this, this.doClose, [t, i]))
                }, i.__super.call(this), this.maskLayer = new C, this.popupEffectHandler = new f(this, this.popupEffect), this.closeEffectHandler = new f(this, this.closeEffect), this.mouseEnabled = this.maskLayer.mouseEnabled = !0, this.zOrder = 1e3, e.stage.addChild(this), e.stage.on("resize", this, this._onResize), M.closeDialogOnSide && this.maskLayer.on("click", this, this._closeOnSide), this._onResize(null)
            }
            h(i, "laya.ui.DialogManager", C);
            var s = i.prototype;
            return s._closeOnSide = function() {
                var t = this.getChildAt(this.numChildren - 1);
                t instanceof laya.ui.Dialog && t.close("side")
            }, s.setLockView = function(t) {
                this.lockLayer || (this.lockLayer = new H, this.lockLayer.mouseEnabled = !0, this.lockLayer.size(e.stage.width, e.stage.height)), this.lockLayer.removeChildren(), t && (t.centerX = t.centerY = 0, this.lockLayer.addChild(t))
            }, s._onResize = function(t) {
                var i = this.maskLayer.width = e.stage.width,
                    s = this.maskLayer.height = e.stage.height;
                this.lockLayer && this.lockLayer.size(i, s), this.maskLayer.graphics.clear(), this.maskLayer.graphics.drawRect(0, 0, i, s, M.popupBgColor), this.maskLayer.alpha = M.popupBgAlpha;
                for (var h = this.numChildren - 1; h > -1; h--) {
                    var n = this.getChildAt(h);
                    n.popupCenter && this._centerDialog(n)
                }
            }, s._centerDialog = function(t) {
                t.x = Math.round((e.stage.width - t.width >> 1) + t.pivotX), t.y = Math.round((e.stage.height - t.height >> 1) + t.pivotY)
            }, s.open = function(t, i, e) {
                void 0 === i && (i = !1), void 0 === e && (e = !1), i && this._closeAll(), t.popupCenter && this._centerDialog(t), this.addChild(t), (t.isModal || this._$P.hasZorder) && this.timer.callLater(this, this._checkMask), e && null != t.popupEffect ? t.popupEffect.runWith(t) : this.doOpen(t), this.event("open")
            }, s.doOpen = function(t) {
                t.onOpened()
            }, s.lock = function(t) {
                this.lockLayer && (t ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf())
            }, s.close = function(t, i, e) {
                void 0 === e && (e = !1), e && null != t.closeEffect ? t.closeEffect.runWith([t, i]) : this.doClose(t, i), this.event("close")
            }, s.doClose = function(t, i) {
                t.removeSelf(), t.isModal && this._checkMask(), t.closeHandler && t.closeHandler.runWith(i), t.onClosed(i)
            }, s.closeAll = function() {
                this._closeAll(), this.event("close")
            }, s._closeAll = function() {
                for (var t = this.numChildren - 1; t > -1; t--) {
                    var i = this.getChildAt(t);
                    i && null != i.close && this.doClose(i)
                }
            }, s.getDialogsByGroup = function(t) {
                for (var i = [], e = this.numChildren - 1; e > -1; e--) {
                    var s = this.getChildAt(e);
                    s && s.group === t && i.push(s)
                }
                return i
            }, s.closeByGroup = function(t) {
                for (var i = [], e = this.numChildren - 1; e > -1; e--) {
                    var s = this.getChildAt(e);
                    s && s.group === t && (s.close(), i.push(s))
                }
                return i
            }, s._checkMask = function() {
                this.maskLayer.removeSelf();
                for (var t = this.numChildren - 1; t > -1; t--) {
                    var i = this.getChildAt(t);
                    if (i && i.isModal) return void this.addChildAt(this.maskLayer, t)
                }
            }, i
        }(),
        H = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.Box", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IBox": !0
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t;
                for (var i in t) {
                    var e = this.getChildByName(i);
                    e ? e.dataSource = t[i] : this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = t[i])
                }
            }), i
        }(T),
        N = function(t) {
            function i(t, e) {
                this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null, this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null, this._clickHandler = null, this._stateChanged = !1, i.__super.call(this), this._labelColors = I.buttonLabelColors, this._stateNum = I.buttonStateNum, void 0 === e && (e = ""), this.skin = t, this.label = e
            }
            h(i, "laya.ui.Button", t);
            var o = i.prototype;
            return e.imps(o, {
                "laya.ui.ISelect": !0
            }), o.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bitmap && this._bitmap.destroy(), this._text && this._text.destroy(i), this._bitmap = null, this._text = null, this._clickHandler = null, this._labelColors = this._sources = this._strokeColors = null
            }, o.createChildren = function() {
                this.graphics = this._bitmap = new z
            }, o.createText = function() {
                this._text || (this._text = new b, this._text.overflow = b.HIDDEN, this._text.align = "center", this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height)
            }, o.initialize = function() {
                1 !== this._mouseEnableState && (this.mouseEnabled = !0, this._setBit(2, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1), this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1), this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1)
            }, o.onMouse = function(t) {
                if (!1 !== this.toggle || !this._selected) return "click" === t.type ? (this.toggle && (this.selected = !this._selected), void(this._clickHandler && this._clickHandler.run())) : void(!this._selected && (this.state = i.stateMap[t.type]))
            }, o.changeClips = function() {
                var t = g.getRes(this._skin);
                if (t) {
                    var i = t.sourceWidth,
                        e = t.sourceHeight / this._stateNum;
                    t.$_GID || (t.$_GID = x.getGID());
                    var s = t.$_GID + "-" + this._stateNum,
                        h = B.I.get(s);
                    if (x.isOkTextureList(h) || (h = null), h) this._sources = h;
                    else {
                        if (this._sources = [], 1 === this._stateNum) this._sources.push(t);
                        else
                            for (var n = 0; n < this._stateNum; n++) this._sources.push(S.createFromTexture(t, 0, e * n, i, e));
                        B.I.set(s, this._sources)
                    }
                    this._autoSize ? (this._bitmap.width = this._width || i, this._bitmap.height = this._height || e, this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = i)
                } else console.log("lose skin", this._skin)
            }, o.changeState = function() {
                this._stateChanged = !1, this.runCallLater(this.changeClips);
                var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
                this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t], this._strokeColors && (this._text.strokeColor = this._strokeColors[t]))
            }, o._setStateChanged = function() {
                this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState))
            }, n(0, o, "labelStrokeColor", function() {
                return this.createText(), this._text.strokeColor
            }, function(t) {
                this.createText(), this._text.strokeColor = t
            }), n(0, o, "measureHeight", function() {
                return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height
            }), n(0, o, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, this.callLater(this.changeClips), this._setStateChanged())
            }), n(0, o, "state", function() {
                return this._state
            }, function(t) {
                this._state != t && (this._state = t, this._setStateChanged())
            }), n(0, o, "text", function() {
                return this.createText(), this._text
            }), n(0, o, "stateNum", function() {
                return this._stateNum
            }, function(t) {
                "string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = t < 1 ? 1 : t > 3 ? 3 : t, this.callLater(this.changeClips))
            }), n(0, o, "strokeColors", function() {
                return this._strokeColors ? this._strokeColors.join(",") : ""
            }, function(t) {
                this._strokeColors = L.fillArray(I.buttonLabelColors, t, String), this._setStateChanged()
            }), n(0, o, "labelColors", function() {
                return this._labelColors.join(",")
            }, function(t) {
                this._labelColors = L.fillArray(I.buttonLabelColors, t, String), this._setStateChanged()
            }), n(0, o, "measureWidth", function() {
                return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState), this._bitmap.width + (this._text ? this._text.width : 0))
            }), n(0, o, "label", function() {
                return this._text ? this._text.text : null
            }, function(t) {
                (this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text), this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()))
            }), n(0, o, "selected", function() {
                return this._selected
            }, function(t) {
                this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0, this.event("change"))
            }), n(0, o, "labelPadding", function() {
                return this.createText(), this._text.padding.join(",")
            }, function(t) {
                this.createText(), this._text.padding = L.fillArray(I.labelPadding, t, Number)
            }), n(0, o, "labelSize", function() {
                return this.createText(), this._text.fontSize
            }, function(t) {
                this.createText(), this._text.fontSize = t
            }), n(0, o, "labelStroke", function() {
                return this.createText(), this._text.stroke
            }, function(t) {
                this.createText(), this._text.stroke = t
            }), n(0, o, "labelBold", function() {
                return this.createText(), this._text.bold
            }, function(t) {
                this.createText(), this._text.bold = t
            }), n(0, o, "labelFont", function() {
                return this.createText(), this._text.font
            }, function(t) {
                this.createText(), this._text.font = t
            }), n(0, o, "labelAlign", function() {
                return this.createText(), this._text.align
            }, function(t) {
                this.createText(), this._text.align = t
            }), n(0, o, "clickHandler", function() {
                return this._clickHandler
            }, function(t) {
                this._clickHandler = t
            }), n(0, o, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
            }, function(t) {
                this._bitmap.sizeGrid = L.fillArray(I.defaultSizeGrid, t, Number)
            }), n(0, o, "width", t.prototype._$get_width, function(t) {
                e.superSet(T, this, "width", t), this._autoSize && (this._bitmap.width = t, this._text && (this._text.width = t))
            }), n(0, o, "height", t.prototype._$get_height, function(t) {
                e.superSet(T, this, "height", t), this._autoSize && (this._bitmap.height = t, this._text && (this._text.height = t))
            }), n(0, o, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.label = t + "" : e.superSet(T, this, "dataSource", t)
            }), n(0, o, "iconOffset", function() {
                return this._bitmap._offset ? this._bitmap._offset.join(",") : null
            }, function(t) {
                this._bitmap._offset = t ? L.fillArray([1, 1], t, Number) : []
            }), s(i, ["stateMap", function() {
                return this.stateMap = {
                    mouseup: 0,
                    mouseover: 1,
                    mousedown: 2,
                    mouseout: 0
                }
            }]), i
        }(T),
        O = function(t) {
            function i(t, e, s) {
                this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1, this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50, this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1, this._group = null, this._toIndex = -1, i.__super.call(this), void 0 === e && (e = 1), void 0 === s && (s = 1), this._clipX = e, this._clipY = s, this.skin = t
            }
            h(i, "laya.ui.Clip", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null, this._sources = null
            }, s.dispose = function() {
                this.destroy(!0), e.loader.clearRes(this._skin)
            }, s.createChildren = function() {
                this.graphics = this._bitmap = new z
            }, s._onDisplay = function(t) {
                this._isPlaying ? this._displayedInStage ? this.play() : this.stop() : this._autoPlay && this.play()
            }, s.changeClip = function() {
                if (this._clipChanged = !1, this._skin) {
                    var t = g.getRes(this._skin);
                    t ? this.loadComplete(this._skin, t) : e.loader.load(this._skin, f.create(this, this.loadComplete, [this._skin]))
                }
            }, s.loadComplete = function(t, i) {
                if (t === this._skin && i) {
                    var e = this._clipWidth || Math.ceil(i.sourceWidth / this._clipX),
                        s = this._clipHeight || Math.ceil(i.sourceHeight / this._clipY),
                        h = this._skin + e + s,
                        n = B.I.get(h);
                    if (x.isOkTextureList(n) || (n = null), n) this._sources = n;
                    else {
                        this._sources = [];
                        for (var o = 0; o < this._clipY; o++)
                            for (var r = 0; r < this._clipX; r++) this._sources.push(S.createFromTexture(i, e * r, s * o, e, s));
                        B.I.set(h, this._sources)
                    }
                    this.index = this._index, this.event("loaded"), this.onCompResize()
                }
            }, s.play = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = -1), this._isPlaying = !0, this.index = t, this._toIndex = i, this._index++, e.timer.loop(this.interval, this, this._loop), this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay)
            }, s._loop = function() {
                this._style.visible && this._sources && (this._index++, this._toIndex > -1 && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0), this.index = this._index)
            }, s.stop = function() {
                this._isPlaying = !1, e.timer.clear(this, this._loop), this.event("complete")
            }, s._setClipChanged = function() {
                this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip))
            }, n(0, s, "interval", function() {
                return this._interval
            }, function(t) {
                this._interval != t && (this._interval = t, this._isPlaying && this.play())
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, t ? this._setClipChanged() : this._bitmap.source = null)
            }), n(0, s, "sources", function() {
                return this._sources
            }, function(t) {
                this._sources = t, this.index = this._index, this.event("loaded")
            }), n(0, s, "clipX", function() {
                return this._clipX
            }, function(t) {
                this._clipX = t || 1, this._setClipChanged()
            }), n(0, s, "clipY", function() {
                return this._clipY
            }, function(t) {
                this._clipY = t || 1, this._setClipChanged()
            }), n(0, s, "total", function() {
                return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0
            }), n(0, s, "clipWidth", function() {
                return this._clipWidth
            }, function(t) {
                this._clipWidth = t, this._setClipChanged()
            }), n(0, s, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
            }, function(t) {
                this._bitmap.sizeGrid = L.fillArray(I.defaultSizeGrid, t, Number)
            }), n(0, s, "group", function() {
                return this._group
            }, function(t) {
                t && this._skin && g.setGroup(this._skin, t), this._group = t
            }), n(0, s, "clipHeight", function() {
                return this._clipHeight
            }, function(t) {
                this._clipHeight = t, this._setClipChanged()
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(T, this, "width", t), this._bitmap.width = t
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(T, this, "height", t), this._bitmap.height = t
            }), n(0, s, "measureWidth", function() {
                return this.runCallLater(this.changeClip), this._bitmap.width
            }), n(0, s, "measureHeight", function() {
                return this.runCallLater(this.changeClip), this._bitmap.height
            }), n(0, s, "index", function() {
                return this._index
            }, function(t) {
                this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]), this.event("change")
            }), n(0, s, "autoPlay", function() {
                return this._autoPlay
            }, function(t) {
                this._autoPlay != t && (this._autoPlay = t, t ? this.play() : this.stop())
            }), n(0, s, "isPlaying", function() {
                return this._isPlaying
            }, function(t) {
                this._isPlaying = t
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.index = parseInt(t) : e.superSet(T, this, "dataSource", t)
            }), n(0, s, "bitmap", function() {
                return this._bitmap
            }), i
        }(T),
        A = function(t) {
            function i() {
                this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000", this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, i.__super.call(this)
            }
            h(i, "laya.ui.ColorPicker", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._colorPanel && this._colorPanel.destroy(i), this._colorButton && this._colorButton.destroy(i), this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null, this.changeHandler = null
            }, s.createChildren = function() {
                this.addChild(this._colorButton = new N), this._colorPanel = new H, this._colorPanel.size(230, 166), this._colorPanel.addChild(this._colorTiles = new C), this._colorPanel.addChild(this._colorBlock = new C), this._colorPanel.addChild(this._colorInput = new p)
            }, s.initialize = function() {
                this._colorButton.on("click", this, this.onColorButtonClick), this._colorBlock.pos(5, 5), this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on("change", this, this.onColorInputChange), this._colorInput.on("keydown", this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30), this._colorTiles.on("mousemove", this, this.onColorTilesMouseMove), this._colorTiles.on("click", this, this.onColorTilesClick), this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on("mousedown", this, this.onPanelMouseDown), this.bgColor = this._bgColor
            }, s.onPanelMouseDown = function(t) {
                t.stopPropagation()
            }, s.changePanel = function() {
                this._panelChanged = !1;
                var t = this._colorPanel.graphics;
                t.clear(), t.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor), this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor, this._colorInput.color = this._inputColor, (t = this._colorTiles.graphics).clear();
                for (var i = [0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935], e = 0; e < 12; e++)
                    for (var s = 0; s < 20; s++) {
                        var h = 0;
                        h = 0 === s ? i[e] : 1 === s ? 0 : 51 * (((3 * e + s / 6) % 3 << 0) + 3 * (e / 6 << 0)) << 16 | s % 6 * 51 << 8 | (e << 0) % 6 * 51;
                        var n = L.toColor(h);
                        this._colors.push(n);
                        var o = s * this._gridSize,
                            r = e * this._gridSize;
                        t.drawRect(o, r, this._gridSize, this._gridSize, n, "#000000")
                    }
            }, s.onColorButtonClick = function(t) {
                this._colorPanel.parent ? this.close() : this.open()
            }, s.open = function() {
                var t = this.localToGlobal(new m),
                    i = t.x + this._colorPanel.width <= e.stage.width ? t.x : e.stage.width - this._colorPanel.width,
                    s = t.y + this._colorButton.height;
                s = s + this._colorPanel.height <= e.stage.height ? s : t.y - this._colorPanel.height, this._colorPanel.pos(i, s), this._colorPanel.zOrder = 1001, e._currentStage.addChild(this._colorPanel), e.stage.on("mousedown", this, this.removeColorBox)
            }, s.close = function() {
                e.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf()
            }, s.removeColorBox = function(t) {
                this.close()
            }, s.onColorFieldKeyDown = function(t) {
                13 == t.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null, this.close(), t.stopPropagation())
            }, s.onColorInputChange = function(t) {
                this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF")
            }, s.onColorTilesClick = function(t) {
                this.selectedColor = this.getColorByMouse(), this.close()
            }, s.onColorTilesMouseMove = function(t) {
                this._colorInput.focus = !1;
                var i = this.getColorByMouse();
                this._colorInput.text = i, this.drawBlock(i)
            }, s.getColorByMouse = function() {
                var t = this._colorTiles.getMousePoint(),
                    i = Math.floor(t.x / this._gridSize),
                    e = Math.floor(t.y / this._gridSize);
                return this._colors[20 * e + i]
            }, s.drawBlock = function(t) {
                var i = this._colorBlock.graphics;
                i.clear();
                var e = t || "#ffffff";
                i.drawRect(0, 0, 50, 20, e, this._borderColor), t || i.drawLine(0, 0, 50, 20, "#ff0000")
            }, s.changeColor = function() {
                var t = this.graphics;
                t.clear();
                var i = this._selectedColor || "#000000";
                t.drawRect(0, 0, this._colorButton.width, this._colorButton.height, i)
            }, s._setPanelChanged = function() {
                this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel))
            }, n(0, s, "inputBgColor", function() {
                return this._inputBgColor
            }, function(t) {
                this._inputBgColor = t, this._setPanelChanged()
            }), n(0, s, "selectedColor", function() {
                return this._selectedColor
            }, function(t) {
                this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t), this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor), this.event("change", c.EMPTY.setTo("change", this, this)))
            }), n(0, s, "skin", function() {
                return this._colorButton.skin
            }, function(t) {
                this._colorButton.skin = t, this.changeColor()
            }), n(0, s, "bgColor", function() {
                return this._bgColor
            }, function(t) {
                this._bgColor = t, this._setPanelChanged()
            }), n(0, s, "borderColor", function() {
                return this._borderColor
            }, function(t) {
                this._borderColor = t, this._setPanelChanged()
            }), n(0, s, "inputColor", function() {
                return this._inputColor
            }, function(t) {
                this._inputColor = t, this._setPanelChanged()
            }), i
        }(T),
        Y = function(t) {
            function i(t, e) {
                this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1, this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null, this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1, this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, i.__super.call(this), this._itemColors = I.comboBoxItemColors, this.skin = t, this.labels = e
            }
            h(i, "laya.ui.ComboBox", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._button && this._button.destroy(i), this._list && this._list.destroy(i), this._button = null, this._list = null, this._itemColors = null, this._labels = null, this._selectHandler = null
            }, s.createChildren = function() {
                this.addChild(this._button = new N), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5", this._button.on("mousedown", this, this.onButtonMouseDown)
            }, s._createList = function() {
                this._list = new U, this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin), this._setListEvent(this._list)
            }, s._setListEvent = function(t) {
                this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown), this._list.mouseHandler = f.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown)
            }, s.onListDown = function(t) {
                t.stopPropagation()
            }, s.onScrollBarDown = function(t) {
                t.stopPropagation()
            }, s.onButtonMouseDown = function(t) {
                this.callLater(this.switchTo, [!this._isOpen])
            }, s.changeList = function() {
                this._listChanged = !1;
                var t = this.width - 2,
                    i = this._itemColors[2];
                this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                    type: "Box",
                    child: [{
                        type: "Label",
                        props: {
                            name: "label",
                            x: 1,
                            padding: "3,3,3,3",
                            width: t,
                            height: this._itemHeight,
                            fontSize: this._itemSize,
                            color: i
                        }
                    }]
                }, this._list.repeatY = this._visibleNum, this._list.refresh()
            }, s.onlistItemMouse = function(t, i) {
                var e = t.type;
                if ("mouseover" === e || "mouseout" === e) {
                    if (this._isCustomList) return;
                    var s = this._list.getCell(i);
                    if (!s) return;
                    var h = s.getChildByName("label");
                    h && ("mouseover" === e ? (h.bgColor = this._itemColors[0], h.color = this._itemColors[1]) : (h.bgColor = null, h.color = this._itemColors[2]))
                } else "click" === e && (this.selectedIndex = i, this.isOpen = !1)
            }, s.switchTo = function(t) {
                this.isOpen = t
            }, s.changeOpen = function() {
                this.isOpen = !this._isOpen
            }, s.changeItem = function() {
                if (this._itemChanged = !1, this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, !this._isCustomList) {
                    var t = this._list.graphics;
                    t.clear(), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3])
                }
                var i = this._list.array || [];
                i.length = 0;
                for (var e = 0, s = this._labels.length; e < s; e++) i.push({
                    label: this._labels[e]
                });
                this._list.height = this._listHeight, this._list.array = i
            }, s.changeSelected = function() {
                this._button.label = this.selectedLabel
            }, s._onStageMouseWheel = function(t) {
                this._list && !this._list.contains(t.target) && this.removeList(null)
            }, s.removeList = function(t) {
                e.stage.off("mousedown", this, this.removeList), e.stage.off("mousewheel", this, this._onStageMouseWheel), this.isOpen = !1
            }, n(0, s, "selectedIndex", function() {
                return this._selectedIndex
            }, function(t) {
                this._selectedIndex != t && (this._selectedIndex = t, this._labels.length > 0 ? this.changeSelected() : this.callLater(this.changeSelected), this.event("change", [c.EMPTY.setTo("change", this, this)]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex))
            }), n(0, s, "measureHeight", function() {
                return this._button.height
            }), n(0, s, "skin", function() {
                return this._button.skin
            }, function(t) {
                this._button.skin != t && (this._button.skin = t, this._listChanged = !0)
            }), n(0, s, "measureWidth", function() {
                return this._button.width
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(T, this, "width", t), this._button.width = this._width, this._itemChanged = !0, this._listChanged = !0
            }), n(0, s, "selectedLabel", function() {
                return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null
            }, function(t) {
                this.selectedIndex = this._labels.indexOf(t)
            }), n(0, s, "labels", function() {
                return this._labels.join(",")
            }, function(t) {
                this._labels.length > 0 && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0, this._itemChanged = !0
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(T, this, "height", t), this._button.height = this._height
            }), n(0, s, "selectHandler", function() {
                return this._selectHandler
            }, function(t) {
                this._selectHandler = t
            }), n(0, s, "visibleNum", function() {
                return this._visibleNum
            }, function(t) {
                this._visibleNum = t, this._listChanged = !0
            }), n(0, s, "labelBold", function() {
                return this._button.text.bold
            }, function(t) {
                this._button.text.bold = t
            }), n(0, s, "itemColors", function() {
                return String(this._itemColors)
            }, function(t) {
                this._itemColors = L.fillArray(this._itemColors, t, String), this._listChanged = !0
            }), n(0, s, "itemSize", function() {
                return this._itemSize
            }, function(t) {
                this._itemSize = t, this._listChanged = !0
            }), n(0, s, "scrollBar", function() {
                return this.list.scrollBar
            }), n(0, s, "isOpen", function() {
                return this._isOpen
            }, function(t) {
                if (this._isOpen != t)
                    if (this._isOpen = t, this._button.selected = this._isOpen, this._isOpen) {
                        this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(), this._itemChanged && this.changeItem();
                        var i = this.localToGlobal(m.TEMP.setTo(0, 0)),
                            s = i.y + this._button.height;
                        s = s + this._listHeight <= e.stage.height ? s : i.y - this._listHeight, this._list.pos(i.x, s), this._list.zOrder = 1001, e._currentStage.addChild(this._list), e.stage.once("mousedown", this, this.removeList), e.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex
                    } else this._list && this._list.removeSelf()
            }), n(0, s, "scrollBarSkin", function() {
                return this._scrollBarSkin
            }, function(t) {
                this._scrollBarSkin = t
            }), n(0, s, "sizeGrid", function() {
                return this._button.sizeGrid
            }, function(t) {
                this._button.sizeGrid = t
            }), n(0, s, "button", function() {
                return this._button
            }), n(0, s, "list", function() {
                return this._list || this._createList(), this._list
            }, function(t) {
                t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t), this._itemHeight = t.getCell(0).height + t.spaceY)
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : e.superSet(T, this, "dataSource", t)
            }), n(0, s, "labelColors", function() {
                return this._button.labelColors
            }, function(t) {
                this._button.labelColors != t && (this._button.labelColors = t)
            }), n(0, s, "labelPadding", function() {
                return this._button.text.padding.join(",")
            }, function(t) {
                this._button.text.padding = L.fillArray(I.labelPadding, t, Number)
            }), n(0, s, "labelSize", function() {
                return this._button.text.fontSize
            }, function(t) {
                this._button.text.fontSize = t
            }), n(0, s, "labelFont", function() {
                return this._button.text.font
            }, function(t) {
                this._button.text.font = t
            }), n(0, s, "stateNum", function() {
                return this._button.stateNum
            }, function(t) {
                this._button.stateNum = t
            }), i
        }(T),
        X = function(t) {
            function i(t) {
                this.rollRatio = .95, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1, this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null, this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1, this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1, this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0, this._offsets = null, i.__super.call(this), this._showButtons = M.showButtons, this._touchScrollEnable = M.touchScrollEnable, this._mouseWheelEnable = M.mouseWheelEnable, this.skin = t, this.max = 1
            }
            h(i, "laya.ui.ScrollBar", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), this.stopScroll(), this.target = null, t.prototype.destroy.call(this, i), this.upButton && this.upButton.destroy(i), this.downButton && this.downButton.destroy(i), this.slider && this.slider.destroy(i), this.upButton = this.downButton = null, this.slider = null, this.changeHandler = null, this._offsets = null
            }, s.createChildren = function() {
                this.addChild(this.slider = new E), this.addChild(this.upButton = new N), this.addChild(this.downButton = new N)
            }, s.initialize = function() {
                this.slider.showLabel = !1, this.slider.on("change", this, this.onSliderChange), this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown), this.downButton.on("mousedown", this, this.onButtonMouseDown)
            }, s.onSliderChange = function() {
                this._value != this.slider.value && (this.value = this.slider.value)
            }, s.onButtonMouseDown = function(t) {
                var i = t.currentTarget === this.upButton;
                this.slide(i), e.timer.once(I.scrollBarDelayTime, this, this.startLoop, [i]), e.stage.once("mouseup", this, this.onStageMouseUp)
            }, s.startLoop = function(t) {
                e.timer.frameLoop(1, this, this.slide, [t])
            }, s.slide = function(t) {
                t ? this.value -= this._scrollSize : this.value += this._scrollSize
            }, s.onStageMouseUp = function(t) {
                e.timer.clear(this, this.startLoop), e.timer.clear(this, this.slide)
            }, s.changeScrollBar = function() {
                this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons, this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"), this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0, this.resetPositions(), this.repaint()
            }, s.changeSize = function() {
                t.prototype.changeSize.call(this), this.repaint(), this.resetPositions(), this.event("change"), this.changeHandler && this.changeHandler.runWith(this.value)
            }, s.resetPositions = function() {
                this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0), this.resetButtonPosition()
            }, s.resetButtonPosition = function() {
                this.slider.isVertical ? this.downButton.y = this.slider.y + this.slider.height : this.downButton.x = this.slider.x + this.slider.width
            }, s.setScroll = function(t, i, e) {
                this.runCallLater(this.changeSize), this.slider.setSlider(t, i, e), this.slider.bar.visible = i > 0, !this._hide && this.autoHide && (this.visible = !1)
            }, s.onTargetMouseWheel = function(t) {
                this.value -= t.delta * this._scrollSize, this.target = this._target
            }, s.onTargetMouseDown = function(t) {
                this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new m), this._lastPoint.setTo(e.stage.mouseX, e.stage.mouseY), e.timer.clear(this, this.tweenMove), w.clearTween(this), e.stage.once("mouseup", this, this.onStageMouseUp2), e.stage.once("mouseout", this, this.onStageMouseUp2), e.timer.frameLoop(1, this, this.loop)
            }, s.loop = function() {
                var t = e.stage.mouseY,
                    i = e.stage.mouseX;
                if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : i - this._lastPoint.x, this._clickOnly) {
                    if (!(Math.abs(this._lastOffset * (this.isVertical ? e.stage._canvasTransform.getScaleY() : e.stage._canvasTransform.getScaleX())) > 1)) return;
                    this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event("start")
                }
                this._offsets.push(this._lastOffset), this._lastPoint.x = i, this._lastPoint.y = t, 0 !== this._lastOffset && (this._checkElastic || (this.elasticDistance > 0 ? this._checkElastic || 0 == this._lastOffset || (this._lastOffset > 0 && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0, this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : this._value >= this.max && (this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance)) : this.value -= this._lastOffset)
            }, s.onStageMouseUp2 = function(t) {
                if (e.stage.off("mouseup", this, this.onStageMouseUp2), e.stage.off("mouseout", this, this.onStageMouseUp2), e.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max))
                    if (this._target.mouseEnabled = !0, this._isElastic) this._value < this.min ? w.to(this, {
                        value: this.min
                    }, this.elasticBackTime, a.sineOut, f.create(this, this.elasticOver)) : this._value > this.max && w.to(this, {
                        value: this.max
                    }, this.elasticBackTime, a.sineOut, f.create(this, this.elasticOver));
                    else {
                        if (!this._offsets) return;
                        this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? e.stage.mouseY - this._lastPoint.y : e.stage.mouseX - this._lastPoint.x);
                        for (var i = 0, s = Math.min(this._offsets.length, 3), h = 0; h < s; h++) i += this._offsets[this._offsets.length - 1 - h];
                        if (this._lastOffset = i / s, (i = Math.abs(this._lastOffset)) < 2) return void this.event("end");
                        i > 60 && (this._lastOffset = this._lastOffset > 0 ? 60 : -60);
                        var n = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 240)));
                        e.timer.frameLoop(1, this, this.tweenMove, [n])
                    }
            }, s.elasticOver = function() {
                this._isElastic = !1, !this.hide && this.autoHide && w.to(this, {
                    alpha: 0
                }, 500), this.event("end")
            }, s.tweenMove = function(t) {
                this._lastOffset *= this.rollRatio;
                var i = NaN;
                if (t > 0 && (this._lastOffset > 0 && this.value <= this.min ? (this._isElastic = !0, i = .5 * -(this.min - t - this.value), this._lastOffset > i && (this._lastOffset = i)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0, i = .5 * -(this.max + t - this.value), this._lastOffset < i && (this._lastOffset = i))), this.value -= this._lastOffset, Math.abs(this._lastOffset) < 1) {
                    if (e.timer.clear(this, this.tweenMove), this._isElastic) return void(this._value < this.min ? w.to(this, {
                        value: this.min
                    }, this.elasticBackTime, a.sineOut, f.create(this, this.elasticOver)) : this._value > this.max ? w.to(this, {
                        value: this.max
                    }, this.elasticBackTime, a.sineOut, f.create(this, this.elasticOver)) : this.elasticOver());
                    this.event("end"), !this.hide && this.autoHide && w.to(this, {
                        alpha: 0
                    }, 500)
                }
            }, s.stopScroll = function() {
                this.onStageMouseUp2(null), e.timer.clear(this, this.tweenMove), w.clearTween(this)
            }, n(0, s, "measureHeight", function() {
                return this.slider.isVertical ? 100 : this.slider.height
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, this.slider.skin = this._skin, this.callLater(this.changeScrollBar))
            }), n(0, s, "max", function() {
                return this.slider.max
            }, function(t) {
                this.slider.max = t
            }), n(0, s, "showButtons", function() {
                return this._showButtons
            }, function(t) {
                this._showButtons = t, this.callLater(this.changeScrollBar)
            }), n(0, s, "measureWidth", function() {
                return this.slider.isVertical ? this.slider.width : 100
            }), n(0, s, "min", function() {
                return this.slider.min
            }, function(t) {
                this.slider.min = t
            }), n(0, s, "value", function() {
                return this._value
            }, function(t) {
                t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t, this.slider.changeValue()), this._value = this.slider._value), this.event("change"), this.changeHandler && this.changeHandler.runWith(this._value))
            }), n(0, s, "isVertical", function() {
                return this.slider.isVertical
            }, function(t) {
                this.slider.isVertical = t
            }), n(0, s, "sizeGrid", function() {
                return this.slider.sizeGrid
            }, function(t) {
                this.slider.sizeGrid = t
            }), n(0, s, "scrollSize", function() {
                return this._scrollSize
            }, function(t) {
                this._scrollSize = t
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : e.superSet(T, this, "dataSource", t)
            }), n(0, s, "thumbPercent", function() {
                return this._thumbPercent
            }, function(t) {
                this.runCallLater(this.changeScrollBar), this.runCallLater(this.changeSize), t = t >= 1 ? .99 : t, this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, I.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, I.scrollBarMinNum))
            }), n(0, s, "target", function() {
                return this._target
            }, function(t) {
                this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel), this._target.off("mousedown", this, this.onTargetMouseDown)), this._target = t, t && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel), this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown))
            }), n(0, s, "hide", function() {
                return this._hide
            }, function(t) {
                this._hide = t, this.visible = !t
            }), n(0, s, "touchScrollEnable", function() {
                return this._touchScrollEnable
            }, function(t) {
                this._touchScrollEnable = t, this.target = this._target
            }), n(0, s, "mouseWheelEnable", function() {
                return this._mouseWheelEnable
            }, function(t) {
                this._mouseWheelEnable = t
            }), n(0, s, "tick", function() {
                return this.slider.tick
            }, function(t) {
                this.slider.tick = t
            }), i
        }(T),
        E = function(t) {
            function i(t) {
                this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1, this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null, this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN, this._maxMove = NaN, this._globalSacle = null, i.__super.call(this), this.skin = t
            }
            h(i, "laya.ui.Slider", t);
            var o = i.prototype;
            return o.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(i), this._bar && this._bar.destroy(i), this._progress && this._progress.destroy(i), this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null
            }, o.createChildren = function() {
                this.addChild(this._bg = new V), this.addChild(this._bar = new N)
            }, o.initialize = function() {
                this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0", this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0
            }, o.onBarMouseDown = function(t) {
                this._globalSacle || (this._globalSacle = new m), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01), this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width, this._tx = e.stage.mouseX, this._ty = e.stage.mouseY, e.stage.on("mousemove", this, this.mouseMove), e.stage.once("mouseup", this, this.mouseUp), e.stage.once("mouseout", this, this.mouseUp), this.showValueText()
            }, o.showValueText = function() {
                if (this.showLabel) {
                    var t = laya.ui.Slider.label;
                    this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar.x + 20, t.y = .5 * (this._bar.height - t.height) + this._bar.y) : (t.y = this._bar.y - 20, t.x = .5 * (this._bar.width - t.width) + this._bar.x)
                }
            }, o.hideValueText = function() {
                laya.ui.Slider.label && laya.ui.Slider.label.removeSelf()
            }, o.mouseUp = function(t) {
                e.stage.off("mousemove", this, this.mouseMove), e.stage.off("mouseup", this, this.mouseUp), e.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText()
            }, o.mouseMove = function(t) {
                var i = this._value;
                this.isVertical ? (this._bar.y += (e.stage.mouseY - this._ty) / this._globalSacle.y, this._bar.y > this._maxMove ? this._bar.y = this._maxMove : this._bar.y < 0 && (this._bar.y = 0), this._value = this._bar.y / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x += (e.stage.mouseX - this._tx) / this._globalSacle.x, this._bar.x > this._maxMove ? this._bar.x = this._maxMove : this._bar.x < 0 && (this._bar.x = 0), this._value = this._bar.x / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width)), this._tx = e.stage.mouseX, this._ty = e.stage.mouseY;
                var s = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * s) / s, this._value != i && this.sendChangeEvent(), this.showValueText()
            }, o.sendChangeEvent = function(t) {
                void 0 === t && (t = "change"), this.event(t), this.changeHandler && this.changeHandler.runWith(this._value)
            }, o.setBarPoint = function() {
                this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height))
            }, o.changeSize = function() {
                t.prototype.changeSize.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width, this.setBarPoint(), this.changeValue()
            }, o.setSlider = function(t, i, e) {
                this._value = -1, this._min = t, this._max = i > t ? i : t, this.value = e < t ? t : e > i ? i : e
            }, o.changeValue = function() {
                var t = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t, this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
                var i = this._max - this._min;
                0 === i && (i = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / i * (this.height - this._bar.height), this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / i * (this.width - this._bar.width), this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width))
            }, o.onBgMouseDown = function(t) {
                var i = this._bg.getMousePoint();
                this.isVertical ? this.value = i.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = i.x / (this.width - this._bar.width) * (this._max - this._min) + this._min
            }, n(0, o, "measureHeight", function() {
                return Math.max(this._bg.height, this._bar.height)
            }), n(0, o, "skin", function() {
                return this._skin
            }, function(t) {
                if (this._skin != t) {
                    this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
                    var i = this._skin.replace(".png", "$progress.png");
                    g.getRes(i) && (this._progress || (this.addChild(this._progress = new V), this._progress.sizeGrid = this._bar.sizeGrid, this.setChildIndex(this._progress, 1)), this._progress.skin = i), this.setBarPoint(), this.callLater(this.changeValue)
                }
            }), n(0, o, "allowClickBack", function() {
                return this._allowClickBack
            }, function(t) {
                this._allowClickBack != t && (this._allowClickBack = t, t ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown))
            }), n(0, o, "max", function() {
                return this._max
            }, function(t) {
                this._max != t && (this._max = t, this.callLater(this.changeValue))
            }), n(0, o, "measureWidth", function() {
                return Math.max(this._bg.width, this._bar.width)
            }), n(0, o, "tick", function() {
                return this._tick
            }, function(t) {
                this._tick != t && (this._tick = t, this.callLater(this.changeValue))
            }), n(0, o, "sizeGrid", function() {
                return this._bg.sizeGrid
            }, function(t) {
                this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid)
            }), n(0, o, "min", function() {
                return this._min
            }, function(t) {
                this._min != t && (this._min = t, this.callLater(this.changeValue))
            }), n(0, o, "value", function() {
                return this._value
            }, function(t) {
                if (this._value != t) {
                    var i = this._value;
                    this._value = t, this.changeValue(), this._value != i && this.sendChangeEvent()
                }
            }), n(0, o, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : e.superSet(T, this, "dataSource", t)
            }), n(0, o, "bar", function() {
                return this._bar
            }), s(i, ["label", function() {
                return this.label = new D
            }]), i
        }(T),
        V = function(t) {
            function i(t) {
                this._bitmap = null, this._skin = null, this._group = null, i.__super.call(this), this.skin = t
            }
            h(i, "laya.ui.Image", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null
            }, s.dispose = function() {
                this.destroy(!0), e.loader.clearRes(this._skin)
            }, s.createChildren = function() {
                this.graphics = this._bitmap = new z, this._bitmap.autoCacheCmd = !1
            }, s.setSource = function(t, i) {
                t === this._skin && i && (this.source = i, this.onCompResize())
            }, n(0, s, "source", function() {
                return this._bitmap.source
            }, function(t) {
                this._bitmap && (this._bitmap.source = t, this.event("loaded"), this.repaint())
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "string" == typeof t ? this.skin = t : e.superSet(T, this, "dataSource", t)
            }), n(0, s, "measureHeight", function() {
                return this._bitmap.height
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                if (this._skin != t)
                    if (this._skin = t, t) {
                        var i = g.getRes(t);
                        i ? (this.source = i, this.onCompResize()) : e.loader.load(this._skin, f.create(this, this.setSource, [this._skin]), null, "image", 1, !0, this._group)
                    } else this.source = null
            }), n(0, s, "group", function() {
                return this._group
            }, function(t) {
                t && this._skin && g.setGroup(this._skin, t), this._group = t
            }), n(0, s, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
            }, function(t) {
                this._bitmap.sizeGrid = L.fillArray(I.defaultSizeGrid, t, Number)
            }), n(0, s, "measureWidth", function() {
                return this._bitmap.width
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(T, this, "width", t), this._bitmap.width = 0 == t ? 1e-7 : t
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(T, this, "height", t), this._bitmap.height = 0 == t ? 1e-7 : t
            }), i
        }(T),
        D = function(t) {
            function i(t) {
                this._tf = null, i.__super.call(this), void 0 === t && (t = ""), u.defaultColor = I.labelColor, this.text = t
            }
            h(i, "laya.ui.Label", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._tf = null
            }, s.createChildren = function() {
                this.addChild(this._tf = new b)
            }, s.changeText = function(t) {
                this._tf.changeText(t)
            }, n(0, s, "padding", function() {
                return this._tf.padding.join(",")
            }, function(t) {
                this._tf.padding = L.fillArray(I.labelPadding, t, Number)
            }), n(0, s, "bold", function() {
                return this._tf.bold
            }, function(t) {
                this._tf.bold = t
            }), n(0, s, "align", function() {
                return this._tf.align
            }, function(t) {
                this._tf.align = t
            }), n(0, s, "text", function() {
                return this._tf.text
            }, function(t) {
                this._tf.text != t && (t && (t = L.adptString(t + "")), this._tf.text = t, this.event("change"), this._width && this._height || this.onCompResize())
            }), n(0, s, "italic", function() {
                return this._tf.italic
            }, function(t) {
                this._tf.italic = t
            }), n(0, s, "wordWrap", function() {
                return this._tf.wordWrap
            }, function(t) {
                this._tf.wordWrap = t
            }), n(0, s, "font", function() {
                return this._tf.font
            }, function(t) {
                this._tf.font = t
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.text = t + "" : e.superSet(T, this, "dataSource", t)
            }), n(0, s, "color", function() {
                return this._tf.color
            }, function(t) {
                this._tf.color = t
            }), n(0, s, "valign", function() {
                return this._tf.valign
            }, function(t) {
                this._tf.valign = t
            }), n(0, s, "leading", function() {
                return this._tf.leading
            }, function(t) {
                this._tf.leading = t
            }), n(0, s, "fontSize", function() {
                return this._tf.fontSize
            }, function(t) {
                this._tf.fontSize = t
            }), n(0, s, "bgColor", function() {
                return this._tf.bgColor
            }, function(t) {
                this._tf.bgColor = t
            }), n(0, s, "borderColor", function() {
                return this._tf.borderColor
            }, function(t) {
                this._tf.borderColor = t
            }), n(0, s, "stroke", function() {
                return this._tf.stroke
            }, function(t) {
                this._tf.stroke = t
            }), n(0, s, "strokeColor", function() {
                return this._tf.strokeColor
            }, function(t) {
                this._tf.strokeColor = t
            }), n(0, s, "textField", function() {
                return this._tf
            }), n(0, s, "measureWidth", function() {
                return this._tf.width
            }), n(0, s, "measureHeight", function() {
                return this._tf.height
            }), n(0, s, "width", function() {
                return this._width || this._tf.text ? e.superGet(T, this, "width") : 0
            }, function(t) {
                e.superSet(T, this, "width", t), this._tf.width = t
            }), n(0, s, "height", function() {
                return this._height || this._tf.text ? e.superGet(T, this, "height") : 0
            }, function(t) {
                e.superSet(T, this, "height", t), this._tf.height = t
            }), n(0, s, "overflow", function() {
                return this._tf.overflow
            }, function(t) {
                this._tf.overflow = t
            }), n(0, s, "underline", function() {
                return this._tf.underline
            }, function(t) {
                this._tf.underline = t
            }), n(0, s, "underlineColor", function() {
                return this._tf.underlineColor
            }, function(t) {
                this._tf.underlineColor = t
            }), i
        }(T),
        G = function(t) {
            function i(t) {
                this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null, this._value = .5, i.__super.call(this), this.skin = t
            }
            h(i, "laya.ui.ProgressBar", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(i), this._bar && this._bar.destroy(i), this._bg = this._bar = null, this.changeHandler = null
            }, s.createChildren = function() {
                this.addChild(this._bg = new V), this.addChild(this._bar = new V), this._bar._bitmap.autoCacheCmd = !1
            }, s.changeValue = function() {
                if (this.sizeGrid) {
                    var t = this.sizeGrid.split(","),
                        i = Number(t[3]),
                        e = Number(t[1]),
                        s = (this.width - i - e) * this._value;
                    this._bar.width = i + e + s, this._bar.visible = this._bar.width > i + e
                } else this._bar.width = this.width * this._value
            }, n(0, s, "measureHeight", function() {
                return this._bg.height
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"), this.callLater(this.changeValue))
            }), n(0, s, "measureWidth", function() {
                return this._bg.width
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(T, this, "height", t), this._bg.height = this._height, this._bar.height = this._height
            }), n(0, s, "bar", function() {
                return this._bar
            }), n(0, s, "value", function() {
                return this._value
            }, function(t) {
                this._value != t && (t = t > 1 ? 1 : t < 0 ? 0 : t, this._value = t, this.callLater(this.changeValue), this.event("change"), this.changeHandler && this.changeHandler.runWith(t))
            }), n(0, s, "bg", function() {
                return this._bg
            }), n(0, s, "sizeGrid", function() {
                return this._bg.sizeGrid
            }, function(t) {
                this._bg.sizeGrid = this._bar.sizeGrid = t
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(T, this, "width", t), this._bg.width = this._width, this.callLater(this.changeValue)
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : e.superSet(T, this, "dataSource", t)
            }), i
        }(T),
        R = (function(t) {
            function i() {
                this._tipBox = null, this._tipText = null, this._defaultTipHandler = null, i.__super.call(this), this._tipBox = new T, this._tipBox.addChild(this._tipText = new b), this._tipText.x = this._tipText.y = 5, this._tipText.color = i.tipTextColor, this._defaultTipHandler = this._showDefaultTip, e.stage.on("showtip", this, this._onStageShowTip), e.stage.on("hidetip", this, this._onStageHideTip), this.zOrder = 1100
            }
            h(i, "laya.ui.TipManager", T);
            var s = i.prototype;
            s._onStageHideTip = function(t) {
                e.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf()
            }, s._onStageShowTip = function(t) {
                e.timer.once(i.tipDelay, this, this._showTip, [t], !0)
            }, s._showTip = function(t) {
                if ("string" == typeof t) {
                    var i = String(t);
                    Boolean(i) && this._defaultTipHandler(i)
                } else t instanceof laya.utils.Handler ? t.run() : "function" == typeof t && t.apply();
                e.stage.on("mousemove", this, this._onStageMouseMove), e.stage.on("mousedown", this, this._onStageMouseDown), this._onStageMouseMove(null)
            }, s._onStageMouseDown = function(t) {
                this.closeAll()
            }, s._onStageMouseMove = function(t) {
                this._showToStage(this, i.offsetX, i.offsetY)
            }, s._showToStage = function(t, i, s) {
                void 0 === i && (i = 0), void 0 === s && (s = 0);
                var h = t.getBounds();
                t.x = e.stage.mouseX + i, t.y = e.stage.mouseY + s, t.x + h.width > e.stage.width && (t.x -= h.width + i), t.y + h.height > e.stage.height && (t.y -= h.height + s)
            }, s.closeAll = function() {
                e.timer.clear(this, this._showTip), e.stage.off("mousemove", this, this._onStageMouseMove), e.stage.off("mousedown", this, this._onStageMouseDown), this.removeChildren()
            }, s.showDislayTip = function(t) {
                this.addChild(t), this._showToStage(this), e._currentStage.addChild(this)
            }, s._showDefaultTip = function(t) {
                this._tipText.text = t;
                var s = this._tipBox.graphics;
                s.clear(), s.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, i.tipBackColor), this.addChild(this._tipBox), this._showToStage(this), e._currentStage.addChild(this)
            }, n(0, s, "defaultTipHandler", function() {
                return this._defaultTipHandler
            }, function(t) {
                this._defaultTipHandler = t
            }), i.offsetX = 10, i.offsetY = 15, i.tipTextColor = "#ffffff", i.tipBackColor = "#111111", i.tipDelay = 200
        }(), function(t) {
            function i() {
                this._idMap = null, this._aniList = null, this._watchMap = {}, i.__super.call(this)
            }
            var n;
            h(i, "laya.ui.View", H);
            var l = i.prototype;
            return l.createView = function(t) {
                if (t.animations && !this._idMap && (this._idMap = {}), i.createComp(t, this, this), t.animations) {
                    var e, s, h = [],
                        n = t.animations,
                        o = 0,
                        r = n.length;
                    for (o = 0; o < r; o++) {
                        switch (e = new _, s = n[o], e._setUp(this._idMap, s), this[s.name] = e, e._setControlNode(this), s.action) {
                            case 1:
                                e.play(0, !1);
                                break;
                            case 2:
                                e.play(0, !0)
                        }
                        h.push(e)
                    }
                    this._aniList = h
                }
                this._width > 0 && null == t.props.hitTestPrior && !this.mouseThrough && (this.hitTestPrior = !0)
            }, l.onEvent = function(t, i) {}, l.loadUI = function(t) {
                var e = i.uiMap[t];
                e && this.createView(e)
            }, l.destroy = function(t) {
                void 0 === t && (t = !0), this._aniList && (this._aniList.length = 0), this._idMap = null, this._aniList = null, this._watchMap = null, laya.ui.Component.prototype.destroy.call(this, t)
            }, l.changeData = function(t) {
                var i = this._watchMap[t];
                if (i) {
                    console.log("change", t);
                    for (var e = 0, s = i.length; e < s; e++) {
                        i[e].exe(this)
                    }
                }
            }, i._regs = function() {
                for (var t in i.uiClassMap) r.regClass(t, i.uiClassMap[t])
            }, i.createComp = function(t, s, h, n) {
                if (!(s = s || i.getCompInstance(t))) return console.warn("can not create:" + t.type), null;
                var o = t.child;
                if (o)
                    for (var l = s instanceof laya.ui.List, a = 0, c = o.length; a < c; a++) {
                        var u = o[a];
                        if (!s.hasOwnProperty("itemRender") || "render" != u.props.name && "render" !== u.props.renderType)
                            if ("Graphic" == u.type) r.addGraphicsToSprite(u, s);
                            else if (r.isDrawType(u.type)) r.addGraphicToSprite(u, s, !0);
                        else {
                            if (l) {
                                var _ = [],
                                    d = i.createComp(u, null, h, _);
                                _.length && (d._$bindData = _)
                            } else d = i.createComp(u, null, h, n);
                            "Script" == u.type ? "owner" in d ? d.owner = s : "target" in d && (d.target = s) : "mask" == u.props.renderType || "mask" == u.props.name ? s.mask = d : d instanceof laya.display.Sprite && s.addChild(d)
                        } else s.itemRender = u
                    }
                var f = t.props;
                for (var p in f) {
                    var g = f[p];
                    i.eventDic[p] ? g && h && s.on(p, h, h.onEvent, [g]) : i.setCompValue(s, p, g, h, n)
                }
                return e.__typeof(s, "laya.ui.IItem") && s.initItems(), t.compId && h && h._idMap && (h._idMap[t.compId] = s), s
            }, i.setCompValue = function(t, s, h, o, l) {
                if ("string" == typeof h && h.indexOf("${") > -1) {
                    if (i._sheet || (i._sheet = r.getClass("laya.data.Table")), !i._sheet) return void console.warn("Can not find class Sheet");
                    if (l) l.push(t, s, h);
                    else if (o) {
                        -1 == h.indexOf("].") && (h = h.replace(".", "[0]."));
                        var a = new n(t, s, h);
                        a.exe(o);
                        for (var c, u, _ = h.replace(/\[.*?\]\./g, "."); null != (c = i._parseWatchData.exec(_));) {
                            for (var d = c[1]; null != (u = i._parseKeyWord.exec(d));) {
                                var f = u[0],
                                    p = o._watchMap[f] || (o._watchMap[f] = []);
                                p.push(a), i._sheet.I.notifer.on(f, o, o.changeData, [f])
                            }(p = o._watchMap[d] || (o._watchMap[d] = [])).push(a), i._sheet.I.notifer.on(d, o, o.changeData, [d])
                        }
                    }
                } else if ("var" === s && o) o[h] = t;
                else if ("onClick" == s) {
                    var g = e._runScript("(function(){" + h + "})");
                    t.on("click", o, g)
                } else t[s] = "true" === h || "false" !== h && h
            }, i.getCompInstance = function(t) {
                var s, h = t.props ? t.props.runtime : null;
                return s = h ? i.viewClassMap[h] || i.uiClassMap[h] || e.__classmap[h] : i.uiClassMap[t.type], t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? s.instance : s ? new s : null
            }, i.regComponent = function(t, e) {
                i.uiClassMap[t] = e, r.regClass(t, e)
            }, i.regViewRuntime = function(t, e) {
                i.viewClassMap[t] = e
            }, i.uiMap = {}, i.viewClassMap = {}, i._sheet = null, s(i, ["uiClassMap", function() {
                return this.uiClassMap = {
                    ViewStack: tt,
                    LinkButton: N,
                    TextArea: at,
                    ColorPicker: A,
                    Box: H,
                    Button: N,
                    CheckBox: W,
                    Clip: O,
                    ComboBox: Y,
                    Component: T,
                    HScrollBar: j,
                    HSlider: Z,
                    Image: V,
                    Label: D,
                    List: U,
                    Panel: K,
                    ProgressBar: G,
                    Radio: J,
                    RadioGroup: rt,
                    ScrollBar: X,
                    Slider: E,
                    Tab: lt,
                    TextInput: et,
                    View: i,
                    VScrollBar: it,
                    VSlider: st,
                    Tree: Q,
                    HBox: nt,
                    VBox: ot,
                    Sprite: C,
                    Animation: o,
                    Text: b,
                    FontClip: F
                }
            }, "eventDic", function() {
                return this.eventDic = {
                    mousedown: !0,
                    mouseup: !0,
                    mousemove: !0,
                    mouseover: !0,
                    mouseout: !0,
                    click: !0,
                    doubleclick: !0,
                    rightmousedown: !0,
                    rightmouseup: !0,
                    rightclick: !0
                }
            }, "_parseWatchData", function() {
                return this._parseWatchData = /\${(.*?)}/g
            }, "_parseKeyWord", function() {
                return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g
            }]), i.__init$ = function() {
                i._regs(), n = function() {
                    function t(t, i, e) {
                        this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = i, this.value = e
                    }
                    h(t, "");
                    return t.prototype.exe = function(t) {
                        var i = L.getBindFun(this.value);
                        this.comp[this.prop] = i.call(this, t)
                    }, t
                }()
            }, i
        }()),
        W = function(t) {
            function i(t, e) {
                void 0 === e && (e = ""), i.__super.call(this, t, e)
            }
            h(i, "laya.ui.CheckBox", t);
            var s = i.prototype;
            return s.preinitialize = function() {
                laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1
            }, s.initialize = function() {
                t.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0
            }, n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "boolean" == typeof t ? this.selected = t : "string" == typeof t ? this.selected = "true" === t : e.superSet(N, this, "dataSource", t)
            }), i
        }(N),
        $ = function(t) {
            function i() {
                this._space = 0, this._align = "none", this._itemChanged = !1, i.__super.call(this)
            }
            h(i, "laya.ui.LayoutBox", H);
            var e = i.prototype;
            return e.addChild = function(t) {
                return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChild.call(this, t)
            }, e.onResize = function(t) {
                this._setItemChanged()
            }, e.addChildAt = function(t, i) {
                return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChildAt.call(this, t, i)
            }, e.removeChild = function(t) {
                return t.off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChild.call(this, t)
            }, e.removeChildAt = function(t) {
                return this.getChildAt(t).off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChildAt.call(this, t)
            }, e.refresh = function() {
                this._setItemChanged()
            }, e.changeItems = function() {
                this._itemChanged = !1
            }, e.sortItem = function(t) {
                t && t.sort(function(t, i) {
                    return t.y - i.y
                })
            }, e._setItemChanged = function() {
                this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems))
            }, n(0, e, "space", function() {
                return this._space
            }, function(t) {
                this._space = t, this._setItemChanged()
            }), n(0, e, "align", function() {
                return this._align
            }, function(t) {
                this._align = t, this._setItemChanged()
            }), i
        }(),
        F = function(t) {
            function i(t, e) {
                this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal", this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0, i.__super.call(this), t && (this.skin = t), e && (this.sheet = e)
            }
            h(i, "laya.ui.FontClip", t);
            var s = i.prototype;
            return s.createChildren = function() {
                this._bitmap = new z, this.on("loaded", this, this._onClipLoaded)
            }, s._onClipLoaded = function() {
                this.callLater(this.changeValue)
            }, s.changeValue = function() {
                if (this._sources && this._valueArr) {
                    this.graphics.clear(!0);
                    var t;
                    if (t = this._sources[0]) {
                        var i = "horizontal" === this._direction;
                        i ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX), this._wordsH = t.sourceHeight) : (this._wordsW = t.sourceWidth, this._wordsH = (t.sourceHeight + this.spaceY) * this._valueArr.length);
                        var e = 0;
                        if (this._width) switch (this._align) {
                            case "center":
                                e = .5 * (this._width - this._wordsW);
                                break;
                            case "right":
                                e = this._width - this._wordsW;
                                break;
                            default:
                                e = 0
                        }
                        for (var s = 0, h = this._valueArr.length; s < h; s++) {
                            var n = this._indexMap[this._valueArr.charAt(s)];
                            this.sources[n] && (t = this.sources[n], i ? this.graphics.drawTexture(t, e + s * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawTexture(t, 0 + e, s * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight))
                        }
                        this._width || (this.resetLayoutX(), this.callLater(this.changeSize)), this._height || (this.resetLayoutY(), this.callLater(this.changeSize))
                    }
                }
            }, s.destroy = function(i) {
                void 0 === i && (i = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), this.removeSelf(), this.off("loaded", this, this._onClipLoaded), t.prototype.destroy.call(this, i)
            }, n(0, s, "sheet", function() {
                return this._sheet
            }, function(t) {
                t += "", this._sheet = t;
                var i = t.split(" ");
                this._clipX = String(i[0]).length, this.clipY = i.length, this._indexMap = {};
                for (var e = 0; e < this._clipY; e++)
                    for (var s = i[e].split(""), h = 0, n = s.length; h < n; h++) this._indexMap[s[h]] = e * this._clipX + h
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(O, this, "height", t), this.callLater(this.changeValue)
            }), n(0, s, "direction", function() {
                return this._direction
            }, function(t) {
                this._direction = t, this.callLater(this.changeValue)
            }), n(0, s, "value", function() {
                return this._valueArr ? this._valueArr : ""
            }, function(t) {
                t += "", this._valueArr = t, this.callLater(this.changeValue)
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(O, this, "width", t), this.callLater(this.changeValue)
            }), n(0, s, "spaceX", function() {
                return this._spaceX
            }, function(t) {
                this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue)
            }), n(0, s, "spaceY", function() {
                return this._spaceY
            }, function(t) {
                this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue)
            }), n(0, s, "align", function() {
                return this._align
            }, function(t) {
                this._align = t, this.callLater(this.changeValue)
            }), n(0, s, "measureWidth", function() {
                return this._wordsW
            }), n(0, s, "measureHeight", function() {
                return this._wordsH
            }), i
        }(O),
        U = function(t) {
            function i() {
                this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null, this.selectEnable = !1, this.totalPage = 0, this._content = null, this._scrollBar = null, this._itemRender = null, this._repeatX = 0, this._repeatY = 0, this._repeatX2 = 0, this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null, this._startIndex = 0, this._selectedIndex = -1, this._page = 0, this._isVertical = !0, this._cellSize = 20, this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1, this._createdLine = 0, this._cellChanged = !1, i.__super.call(this), this._cells = [], this._offset = new m
            }
            h(i, "laya.ui.List", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IRender": !0,
                "laya.ui.IItem": !0
            }), s.destroy = function(t) {
                void 0 === t && (t = !0), this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t), laya.ui.Component.prototype.destroy.call(this, t), this._content = null, this._scrollBar = null, this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null
            }, s.createChildren = function() {
                this.addChild(this._content = new H)
            }, s.onScrollStart = function() {
                this._$P.cacheAs || (this._$P.cacheAs = e.superGet(H, this, "cacheAs")), e.superSet(H, this, "cacheAs", "none"), this._scrollBar.once("end", this, this.onScrollEnd)
            }, s.onScrollEnd = function() {
                e.superSet(H, this, "cacheAs", this._$P.cacheAs)
            }, s._removePreScrollBar = function() {
                var t = this.removeChildByName("scrollBar");
                t && t.destroy(!0)
            }, s.changeCells = function() {
                if (this._cellChanged = !1, this._itemRender) {
                    this.scrollBar = this.getChildByName("scrollBar");
                    var t = this._getOneCell(),
                        i = t.width + this._spaceX || 1,
                        e = t.height + this._spaceY || 1;
                    this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / i) : Math.ceil(this._width / i)), this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / e) : Math.round(this._height / e));
                    var s = this._width ? this._width : i * this.repeatX - this._spaceX,
                        h = this._height ? this._height : e * this.repeatY - this._spaceY;
                    this._cellSize = this._isVertical ? e : i, this._cellOffset = this._isVertical ? e * Math.max(this._repeatY2, this._repeatY) - h - this._spaceY : i * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX, this._isVertical && this._scrollBar ? this._scrollBar.height = h : !this._isVertical && this._scrollBar && (this._scrollBar.width = s), this.setContentSize(s, h);
                    var n = this._isVertical ? this.repeatX : this.repeatY,
                        o = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                    this._createItems(0, n, o), this._createdLine = o, this._array && (this.array = this._array, this.runCallLater(this.renderItems))
                }
            }, s._getOneCell = function() {
                if (0 === this._cells.length) {
                    var t = this.createItem();
                    if (this._offset.setTo(t.x, t.y), this.cacheContent) return t;
                    this._cells.push(t)
                }
                return this._cells[0]
            }, s._createItems = function(t, i, e) {
                var s = this._content,
                    h = this._getOneCell(),
                    n = h.width + this._spaceX,
                    o = h.height + this._spaceY;
                if (this.cacheContent) {
                    var r = new H;
                    r.cacheAsBitmap = !0, r.pos((this._isVertical ? 0 : t) * n, (this._isVertical ? t : 0) * o), this._content.addChild(r), this._content.optimizeScrollRect = !0, s = r
                } else {
                    for (var l = [], a = this._cells.length - 1; a > -1; a--) {
                        var c = this._cells[a];
                        c.removeSelf(), l.push(c)
                    }
                    this._cells.length = 0
                }
                for (var u = t; u < e; u++)
                    for (var _ = 0; _ < i; _++)(h = l && l.length ? l.pop() : this.createItem()).x = (this._isVertical ? _ : u) * n - s.x, h.y = (this._isVertical ? u : _) * o - s.y, h.name = "item" + (u * i + _), s.addChild(h), this.addCell(h)
            }, s.createItem = function() {
                var t = [];
                if ("function" == typeof this._itemRender) var i = new this._itemRender;
                else i = R.createComp(this._itemRender, null, null, t);
                if (0 == t.length && i._watchMap) {
                    var e = i._watchMap;
                    for (var s in e)
                        for (var h = e[s], n = 0; n < h.length; n++) {
                            var o = h[n];
                            t.push(o.comp, o.prop, o.value)
                        }
                }
                return t.length && (i._$bindData = t), i
            }, s.addCell = function(t) {
                t.on("click", this, this.onCellMouse), t.on("rightclick", this, this.onCellMouse), t.on("mouseover", this, this.onCellMouse), t.on("mouseout", this, this.onCellMouse), t.on("mousedown", this, this.onCellMouse), t.on("mouseup", this, this.onCellMouse), this._cells.push(t)
            }, s.initItems = function() {
                if (!this._itemRender && null != this.getChildByName("item0")) {
                    this.repeatX = 1;
                    var t = 0;
                    t = 0;
                    for (var i = 0; i < 1e4; i++) {
                        var e = this.getChildByName("item" + i); {
                            if (!e) break;
                            this.addCell(e), t++
                        }
                    }
                    this.repeatY = t
                }
            }, s.setContentSize = function(t, i) {
                this._content.width = t, this._content.height = i, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content.scrollRect || (this._content.scrollRect = new y), this._content.scrollRect.setTo(-this._offset.x, -this._offset.y, t, i), this._content.scrollRect = this._content.scrollRect), this.event("resize")
            }, s.onCellMouse = function(t) {
                "mousedown" === t.type && (this._isMoved = !1);
                var i = t.currentTarget,
                    e = this._startIndex + this._cells.indexOf(i);
                e < 0 || ("click" === t.type || "rightclick" === t.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = e : this.changeCellState(i, !0, 0) : "mouseover" !== t.type && "mouseout" !== t.type || this._selectedIndex === e || this.changeCellState(i, "mouseover" === t.type, 0), this.mouseHandler && this.mouseHandler.runWith([t, e]))
            }, s.changeCellState = function(t, i, e) {
                var s = t.getChildByName("selectBox");
                s && (this.selectEnable = !0, s.visible = i, s.index = e)
            }, s.changeSize = function() {
                laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this.width, this.height), this._scrollBar && this.callLater(this.onScrollBarChange)
            }, s.onScrollBarChange = function(t) {
                this.runCallLater(this.changeCells);
                var i = this._scrollBar.value,
                    e = this._isVertical ? this.repeatX : this.repeatY,
                    s = this._isVertical ? this.repeatY : this.repeatX,
                    h = Math.floor(i / this._cellSize);
                if (this.cacheContent) o = s + 1, this._createdLine - h < o && (this._createItems(this._createdLine, e, this._createdLine + o), this.renderItems(this._createdLine * e, 0), this._createdLine += o);
                else {
                    var n = h * e,
                        o = 0;
                    if (n > this._startIndex) {
                        o = n - this._startIndex;
                        var r = !0,
                            l = this._startIndex + e * (s + 1);
                        this._isMoved = !0
                    } else n < this._startIndex && (o = this._startIndex - n, r = !1, l = this._startIndex - 1, this._isMoved = !0);
                    for (var a = 0; a < o; a++) {
                        if (r) {
                            var c = this._cells.shift();
                            this._cells[this._cells.length] = c;
                            var u = l + a
                        } else c = this._cells.pop(), this._cells.unshift(c), u = l - a;
                        var _ = Math.floor(u / e) * this._cellSize;
                        this._isVertical ? c.y = _ : c.x = _, this.renderItem(c, u)
                    }
                    this._startIndex = n, this.changeSelectStatus()
                }
                var d = this._content.scrollRect;
                this._isVertical ? (d.y = i - this._offset.y, d.x = -this._offset.x) : (d.y = -this._offset.y, d.x = i - this._offset.x), this._content.scrollRect = d
            }, s.posCell = function(t, i) {
                if (this._scrollBar) {
                    var e = this._isVertical ? this.repeatX : this.repeatY,
                        s = (this._isVertical ? this.repeatY : this.repeatX, Math.floor(i / e) * this._cellSize);
                    this._isVertical ? t.y = s : t.x = s
                }
            }, s.changeSelectStatus = function() {
                for (var t = 0, i = this._cells.length; t < i; t++) this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1)
            }, s.renderItems = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = 0);
                for (var e = t, s = i || this._cells.length; e < s; e++) this.renderItem(this._cells[e], this._startIndex + e);
                this.changeSelectStatus()
            }, s.renderItem = function(t, i) {
                this._array && i >= 0 && i < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[i], this._bindData(t, this._array[i])) : t.dataSource = this._array[i], this.cacheContent || this.posCell(t, i), this.hasListener("render") && this.event("render", [t, i]), this.renderHandler && this.renderHandler.runWith([t, i])) : (t.visible = !1, t.dataSource = null)
            }, s._bindData = function(t, i) {
                for (var e = t._$bindData, s = 0, h = e.length; s < h; s++) {
                    var n = e[s++],
                        o = e[s++],
                        r = e[s],
                        l = L.getBindFun(r);
                    n[o] = l.call(this, i)
                }
            }, s.refresh = function() {
                this.array = this._array
            }, s.getItem = function(t) {
                return t > -1 && t < this._array.length ? this._array[t] : null
            }, s.changeItem = function(t, i) {
                t > -1 && t < this._array.length && (this._array[t] = i, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t))
            }, s.setItem = function(t, i) {
                this.changeItem(t, i)
            }, s.addItem = function(t) {
                this._array.push(t), this.array = this._array
            }, s.addItemAt = function(t, i) {
                this._array.splice(i, 0, t), this.array = this._array
            }, s.deleteItem = function(t) {
                this._array.splice(t, 1), this.array = this._array
            }, s.getCell = function(t) {
                return this.runCallLater(this.changeCells), t > -1 && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null
            }, s.scrollTo = function(t) {
                if (this._scrollBar) {
                    var i = this._isVertical ? this.repeatX : this.repeatY;
                    this._scrollBar.value = Math.floor(t / i) * this._cellSize
                } else this.startIndex = t
            }, s.tweenTo = function(t, i, e) {
                if (void 0 === i && (i = 200), this._scrollBar) {
                    var s = this._isVertical ? this.repeatX : this.repeatY;
                    w.to(this._scrollBar, {
                        value: Math.floor(t / s) * this._cellSize
                    }, i, null, e, 0, !0)
                } else this.startIndex = t, e && e.run()
            }, s._setCellChanged = function() {
                this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells))
            }, s.commitMeasure = function() {
                this.runCallLater(this.changeCells)
            }, n(0, s, "cacheAs", t.prototype._$get_cacheAs, function(t) {
                e.superSet(H, this, "cacheAs", t), this._scrollBar && (this._$P.cacheAs = null, "none" !== t ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart))
            }), n(0, s, "content", function() {
                return this._content
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                t != this._height && (e.superSet(H, this, "height", t), this._setCellChanged())
            }), n(0, s, "itemRender", function() {
                return this._itemRender
            }, function(t) {
                if (this._itemRender != t) {
                    this._itemRender = t;
                    for (var i = this._cells.length - 1; i > -1; i--) this._cells[i].destroy();
                    this._cells.length = 0, this._setCellChanged()
                }
            }), n(0, s, "vScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null
            }, function(t) {
                this._removePreScrollBar();
                var i = new it;
                i.name = "scrollBar", i.right = 0, t && " " != t && (i.skin = t), this.scrollBar = i, this.addChild(i), this._setCellChanged()
            }), n(0, s, "page", function() {
                return this._page
            }, function(t) {
                this._page = t, this._array && (this._page = t > 0 ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1, this.startIndex = this._page * this.repeatX * this.repeatY)
            }), n(0, s, "hScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null
            }, function(t) {
                this._removePreScrollBar();
                var i = new j;
                i.name = "scrollBar", i.bottom = 0, t && " " != t && (i.skin = t), this.scrollBar = i, this.addChild(i), this._setCellChanged()
            }), n(0, s, "repeatX", function() {
                return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1
            }, function(t) {
                this._repeatX = t, this._setCellChanged()
            }), n(0, s, "scrollBar", function() {
                return this._scrollBar
            }, function(t) {
                this._scrollBar != t && (this._scrollBar = t, t && (this._isVertical = this._scrollBar.isVertical, this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange)))
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                t != this._width && (e.superSet(H, this, "width", t), this._setCellChanged())
            }), n(0, s, "repeatY", function() {
                return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1
            }, function(t) {
                this._repeatY = t, this._setCellChanged()
            }), n(0, s, "spaceX", function() {
                return this._spaceX
            }, function(t) {
                this._spaceX = t, this._setCellChanged()
            }), n(0, s, "spaceY", function() {
                return this._spaceY
            }, function(t) {
                this._spaceY = t, this._setCellChanged()
            }), n(0, s, "selectedIndex", function() {
                return this._selectedIndex
            }, function(t) {
                this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(), this.event("change"), this.selectHandler && this.selectHandler.runWith(t), this.startIndex = this._startIndex)
            }), n(0, s, "selectedItem", function() {
                return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null
            }, function(t) {
                this.selectedIndex = this._array.indexOf(t)
            }), n(0, s, "length", function() {
                return this._array ? this._array.length : 0
            }), n(0, s, "selection", function() {
                return this.getCell(this._selectedIndex)
            }, function(t) {
                this.selectedIndex = this._startIndex + this._cells.indexOf(t)
            }), n(0, s, "startIndex", function() {
                return this._startIndex
            }, function(t) {
                this._startIndex = t > 0 ? t : 0, this.callLater(this.renderItems)
            }), n(0, s, "array", function() {
                return this._array
            }, function(t) {
                this.runCallLater(this.changeCells), this._array = t || [];
                var i = this._array.length;
                if (this.totalPage = Math.ceil(i / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < i ? this._selectedIndex : i - 1, this.startIndex = this._startIndex, this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var e = this._isVertical ? this.repeatX : this.repeatY,
                        s = this._isVertical ? this.repeatY : this.repeatX,
                        h = Math.ceil(i / e);
                    (this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 ? (this._scrollBar.scrollSize = this._cellSize, this._scrollBar.thumbPercent = s / h, this._scrollBar.setScroll(0, (h - s) * this._cellSize + this._cellOffset, this._scrollBar.value), this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content)
                }
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : e.superSet(H, this, "dataSource", t)
            }), n(0, s, "cells", function() {
                return this.runCallLater(this.changeCells), this._cells
            }), i
        }(H),
        j = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.HScrollBar", t);
            return i.prototype.initialize = function() {
                t.prototype.initialize.call(this), this.slider.isVertical = !1
            }, i
        }(X),
        K = function(t) {
            function i() {
                this._content = null, this._vScrollBar = null, this._hScrollBar = null, this._scrollChanged = !1, i.__super.call(this), this.width = this.height = 100
            }
            h(i, "laya.ui.Panel", t);
            var s = i.prototype;
            return s.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._content && this._content.destroy(t), this._vScrollBar && this._vScrollBar.destroy(t), this._hScrollBar && this._hScrollBar.destroy(t), this._vScrollBar = null, this._hScrollBar = null, this._content = null
            }, s.destroyChildren = function() {
                this._content.destroyChildren()
            }, s.createChildren = function() {
                laya.display.Node.prototype.addChild.call(this, this._content = new H)
            }, s.addChild = function(t) {
                return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChild(t)
            }, s.onResize = function() {
                this._setScrollChanged()
            }, s.addChildAt = function(t, i) {
                return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChildAt(t, i)
            }, s.removeChild = function(t) {
                return t.off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChild(t)
            }, s.removeChildAt = function(t) {
                return this.getChildAt(t).off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChildAt(t)
            }, s.removeChildren = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = 2147483647);
                for (var e = this._content.numChildren - 1; e > -1; e--) this._content.removeChildAt(e);
                return this._setScrollChanged(), this
            }, s.getChildAt = function(t) {
                return this._content.getChildAt(t)
            }, s.getChildByName = function(t) {
                return this._content.getChildByName(t)
            }, s.getChildIndex = function(t) {
                return this._content.getChildIndex(t)
            }, s.changeScroll = function() {
                this._scrollChanged = !1;
                var t = this.contentWidth || 1,
                    i = this.contentHeight || 1,
                    e = this._vScrollBar,
                    s = this._hScrollBar,
                    h = e && i > this._height,
                    n = s && t > this._width,
                    o = h ? this._width - e.width : this._width,
                    r = n ? this._height - s.height : this._height;
                e && (e.x = this._width - e.width, e.y = 0, e.height = this._height - (n ? s.height : 0), e.scrollSize = Math.max(.033 * this._height, 1), e.thumbPercent = r / i, e.setScroll(0, i - r, e.value)), s && (s.x = 0, s.y = this._height - s.height, s.width = this._width - (h ? e.width : 0), s.scrollSize = Math.max(.033 * this._width, 1), s.thumbPercent = o / t, s.setScroll(0, t - o, s.value))
            }, s.changeSize = function() {
                laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this._width, this._height)
            }, s.setContentSize = function(t, i) {
                var e = this._content;
                e.width = t, e.height = i, e.scrollRect || (e.scrollRect = new y), e.scrollRect.setTo(0, 0, t, i), e.scrollRect = e.scrollRect
            }, s.onScrollBarChange = function(t) {
                var i = this._content.scrollRect;
                if (i) {
                    var e = Math.round(t.value);
                    t.isVertical ? i.y = e : i.x = e, this._content.scrollRect = i
                }
            }, s.scrollTo = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = 0), this.vScrollBar && (this.vScrollBar.value = i), this.hScrollBar && (this.hScrollBar.value = t)
            }, s.refresh = function() {
                this.changeScroll()
            }, s.onScrollStart = function() {
                this._$P.cacheAs || (this._$P.cacheAs = e.superGet(H, this, "cacheAs")), e.superSet(H, this, "cacheAs", "none"), this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd)
            }, s.onScrollEnd = function() {
                e.superSet(H, this, "cacheAs", this._$P.cacheAs)
            }, s._setScrollChanged = function() {
                this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll))
            }, n(0, s, "numChildren", function() {
                return this._content.numChildren
            }), n(0, s, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null
            }, function(t) {
                null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new j), this._hScrollBar.on("change", this, this.onScrollBarChange, [this._hScrollBar]), this._hScrollBar.target = this._content, this._setScrollChanged()), this._hScrollBar.skin = t
            }), n(0, s, "contentWidth", function() {
                for (var t = 0, i = this._content.numChildren - 1; i > -1; i--) {
                    var e = this._content.getChildAt(i);
                    t = Math.max(e.x + e.width * e.scaleX, t)
                }
                return t
            }), n(0, s, "contentHeight", function() {
                for (var t = 0, i = this._content.numChildren - 1; i > -1; i--) {
                    var e = this._content.getChildAt(i);
                    t = Math.max(e.y + e.height * e.scaleY, t)
                }
                return t
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(H, this, "width", t), this._setScrollChanged()
            }), n(0, s, "hScrollBar", function() {
                return this._hScrollBar
            }), n(0, s, "content", function() {
                return this._content
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(H, this, "height", t), this._setScrollChanged()
            }), n(0, s, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null
            }, function(t) {
                null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new it), this._vScrollBar.on("change", this, this.onScrollBarChange, [this._vScrollBar]), this._vScrollBar.target = this._content, this._setScrollChanged()), this._vScrollBar.skin = t
            }), n(0, s, "vScrollBar", function() {
                return this._vScrollBar
            }), n(0, s, "cacheAs", t.prototype._$get_cacheAs, function(t) {
                e.superSet(H, this, "cacheAs", t), this._$P.cacheAs = null, "none" !== t ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart))
            }), i
        }(H),
        Z = function(t) {
            function i(t) {
                i.__super.call(this, t), this.isVertical = !1
            }
            return h(i, "laya.ui.HSlider", E), i
        }(),
        q = function(t) {
            function i(t, e) {
                this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null, this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null, this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null, this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null, this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, i.__super.call(this), this.skin = e, this.labels = t
            }
            h(i, "laya.ui.UIGroup", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IItem": !0
            }), s.preinitialize = function() {
                this.mouseEnabled = !0
            }, s.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._items && (this._items.length = 0), this._items = null, this.selectHandler = null
            }, s.addItem = function(t, i) {
                void 0 === i && (i = !0);
                var e = t,
                    s = this._items.length;
                if (e.name = "item" + s, this.addChild(e), this.initItems(), i && s > 0) {
                    var h = this._items[s - 1];
                    "horizontal" == this._direction ? e.x = h.x + h.width + this._space : e.y = h.y + h.height + this._space
                } else i && (e.x = 0, e.y = 0);
                return s
            }, s.delItem = function(t, i) {
                void 0 === i && (i = !0);
                var e = this._items.indexOf(t);
                if (-1 != e) {
                    var s = t;
                    this.removeChild(s);
                    for (var h = e + 1, n = this._items.length; h < n; h++) {
                        var o = this._items[h];
                        o.name = "item" + (h - 1), i && ("horizontal" == this._direction ? o.x -= s.width + this._space : o.y -= s.height + this._space)
                    }
                    if (this.initItems(), this._selectedIndex > -1) {
                        var r = 0;
                        r = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1, this._selectedIndex = -1, this.selectedIndex = r
                    }
                }
            }, s.initItems = function() {
                this._items || (this._items = []), this._items.length = 0;
                for (var t = 0; t < 1e4; t++) {
                    var i = this.getChildByName("item" + t);
                    if (null == i) break;
                    this._items.push(i), i.selected = t === this._selectedIndex, i.clickHandler = f.create(this, this.itemClick, [t], !1)
                }
            }, s.itemClick = function(t) {
                this.selectedIndex = t
            }, s.setSelect = function(t, i) {
                this._items && t > -1 && t < this._items.length && (this._items[t].selected = i)
            }, s.createItem = function(t, i) {
                return null
            }, s.changeLabels = function() {
                if (this._labelChanged = !1, this._items)
                    for (var t = 0, i = 0, e = this._items.length; i < e; i++) {
                        var s = this._items[i];
                        this._skin && (s.skin = this._skin), this._labelColors && (s.labelColors = this._labelColors), this._labelSize && (s.labelSize = this._labelSize), this._labelStroke && (s.labelStroke = this._labelStroke), this._labelStrokeColor && (s.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (s.strokeColors = this._strokeColors), this._labelBold && (s.labelBold = this._labelBold), this._labelPadding && (s.labelPadding = this._labelPadding), this._labelAlign && (s.labelAlign = this._labelAlign), this._stateNum && (s.stateNum = this._stateNum), this._labelFont && (s.labelFont = this._labelFont), "horizontal" === this._direction ? (s.y = 0, s.x = t, t += s.width + this._space) : (s.x = 0, s.y = t, t += s.height + this._space)
                    }
                this.changeSize()
            }, s.commitMeasure = function() {
                this.runCallLater(this.changeLabels)
            }, s._setLabelChanged = function() {
                this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels))
            }, n(0, s, "labelStrokeColor", function() {
                return this._labelStrokeColor
            }, function(t) {
                this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged())
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, this._setLabelChanged())
            }), n(0, s, "selectedIndex", function() {
                return this._selectedIndex
            }, function(t) {
                this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, this.setSelect(t, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex))
            }), n(0, s, "labels", function() {
                return this._labels
            }, function(t) {
                if (this._labels != t) {
                    if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels)
                        for (var i = this._labels.split(","), e = 0, s = i.length; e < s; e++) {
                            var h = this.createItem(this._skin, i[e]);
                            h.name = "item" + e, this.addChild(h)
                        }
                    this.initItems()
                }
            }), n(0, s, "strokeColors", function() {
                return this._strokeColors
            }, function(t) {
                this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged())
            }), n(0, s, "labelColors", function() {
                return this._labelColors
            }, function(t) {
                this._labelColors != t && (this._labelColors = t, this._setLabelChanged())
            }), n(0, s, "labelStroke", function() {
                return this._labelStroke
            }, function(t) {
                this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged())
            }), n(0, s, "labelSize", function() {
                return this._labelSize
            }, function(t) {
                this._labelSize != t && (this._labelSize = t, this._setLabelChanged())
            }), n(0, s, "stateNum", function() {
                return this._stateNum
            }, function(t) {
                this._stateNum != t && (this._stateNum = t, this._setLabelChanged())
            }), n(0, s, "labelBold", function() {
                return this._labelBold
            }, function(t) {
                this._labelBold != t && (this._labelBold = t, this._setLabelChanged())
            }), n(0, s, "labelFont", function() {
                return this._labelFont
            }, function(t) {
                this._labelFont != t && (this._labelFont = t, this._setLabelChanged())
            }), n(0, s, "labelPadding", function() {
                return this._labelPadding
            }, function(t) {
                this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged())
            }), n(0, s, "direction", function() {
                return this._direction
            }, function(t) {
                this._direction = t, this._setLabelChanged()
            }), n(0, s, "space", function() {
                return this._space
            }, function(t) {
                this._space = t, this._setLabelChanged()
            }), n(0, s, "items", function() {
                return this._items
            }), n(0, s, "selection", function() {
                return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null
            }, function(t) {
                this.selectedIndex = this._items.indexOf(t)
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : e.superSet(H, this, "dataSource", t)
            }), i
        }(H),
        J = function(t) {
            function i(t, e) {
                this._value = null, void 0 === e && (e = ""), i.__super.call(this, t, e)
            }
            h(i, "laya.ui.Radio", t);
            var e = i.prototype;
            return e.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._value = null
            }, e.preinitialize = function() {
                laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1
            }, e.initialize = function() {
                t.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick)
            }, e.onClick = function(t) {
                this.selected = !0
            }, n(0, e, "value", function() {
                return null != this._value ? this._value : this.label
            }, function(t) {
                this._value = t
            }), i
        }(N),
        Q = function(t) {
            function i() {
                this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10, this._spaceBottom = 0, this._keepStatus = !0, i.__super.call(this), this.width = this.height = 200
            }
            h(i, "laya.ui.Tree", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IRender": !0
            }), s.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._list && this._list.destroy(t), this._list = null, this._source = null, this._renderHandler = null
            }, s.createChildren = function() {
                this.addChild(this._list = new U), this._list.renderHandler = f.create(this, this.renderItem, null, !1), this._list.repeatX = 1, this._list.on("change", this, this.onListChange)
            }, s.onListChange = function(t) {
                this.event("change")
            }, s.getArray = function() {
                var t, i = [];
                for (var e in this._source) t = this._source[e], this.getParentOpenStatus(t) && (t.x = this._spaceLeft * this.getDepth(t), i.push(t));
                return i
            }, s.getDepth = function(t, i) {
                return void 0 === i && (i = 0), null == t.nodeParent ? i : this.getDepth(t.nodeParent, i + 1)
            }, s.getParentOpenStatus = function(t) {
                var i = t.nodeParent;
                return null == i || !!i.isOpen && (null == i.nodeParent || this.getParentOpenStatus(i))
            }, s.renderItem = function(t, i) {
                var e = t.dataSource;
                if (e) {
                    t.left = e.x;
                    var s = t.getChildByName("arrow");
                    s && (e.hasChild ? (s.visible = !0, s.index = e.isOpen ? 1 : 0, s.tag = i, s.off("click", this, this.onArrowClick), s.on("click", this, this.onArrowClick)) : s.visible = !1);
                    var h = t.getChildByName("folder");
                    h && (2 == h.clipY ? h.index = e.isDirectory ? 0 : 1 : h.index = e.isDirectory ? e.isOpen ? 1 : 0 : 2), this._renderHandler && this._renderHandler.runWith([t, i])
                }
            }, s.onArrowClick = function(t) {
                var i = t.currentTarget.tag;
                this._list.array[i].isOpen = !this._list.array[i].isOpen, this.event("open"), this._list.array = this.getArray()
            }, s.setItemState = function(t, i) {
                this._list.array[t] && (this._list.array[t].isOpen = i, this._list.array = this.getArray())
            }, s.fresh = function() {
                this._list.array = this.getArray(), this.repaint()
            }, s.parseXml = function(t, i, e, s) {
                var h, n = t.childNodes,
                    o = n.length;
                if (!s) {
                    h = {};
                    var r, l = t.attributes;
                    for (var a in l) {
                        var c = (r = l[a]).nodeName,
                            u = r.nodeValue;
                        h[c] = "true" == u || "false" != u && u
                    }
                    h.nodeParent = e, o > 0 && (h.isDirectory = !0), h.hasChild = o > 0, i.push(h)
                }
                for (var _ = 0; _ < o; _++) {
                    var d = n[_];
                    this.parseXml(d, i, h, !1)
                }
            }, s.parseOpenStatus = function(t, i) {
                for (var e = 0, s = i.length; e < s; e++) {
                    var h = i[e];
                    if (h.isDirectory)
                        for (var n = 0, o = t.length; n < o; n++) {
                            var r = t[n];
                            if (r.isDirectory && this.isSameParent(r, h) && h.label == r.label) {
                                h.isOpen = r.isOpen;
                                break
                            }
                        }
                }
            }, s.isSameParent = function(t, i) {
                return null == t.nodeParent && null == i.nodeParent || null != t.nodeParent && null != i.nodeParent && (t.nodeParent.label == i.nodeParent.label && this.isSameParent(t.nodeParent, i.nodeParent))
            }, s.filter = function(t) {
                if (Boolean(t)) {
                    var i = [];
                    this.getFilterSource(this._source, i, t), this._list.array = i
                } else this._list.array = this.getArray()
            }, s.getFilterSource = function(t, i, e) {
                e = e.toLocaleLowerCase();
                var s;
                for (var h in t) !(s = t[h]).isDirectory && String(s.label).toLowerCase().indexOf(e) > -1 && (s.x = 0, i.push(s)), s.child && s.child.length > 0 && this.getFilterSource(s.child, i, e)
            }, n(0, s, "spaceBottom", function() {
                return this._list.spaceY
            }, function(t) {
                this._list.spaceY = t
            }), n(0, s, "keepStatus", function() {
                return this._keepStatus
            }, function(t) {
                this._keepStatus = t
            }), n(0, s, "itemRender", function() {
                return this._list.itemRender
            }, function(t) {
                this._list.itemRender = t
            }), n(0, s, "array", function() {
                return this._list.array
            }, function(t) {
                this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t), this._source = t, this._list.array = this.getArray()
            }), n(0, s, "mouseHandler", function() {
                return this._list.mouseHandler
            }, function(t) {
                this._list.mouseHandler = t
            }), n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, e.superSet(H, this, "dataSource", t)
            }), n(0, s, "source", function() {
                return this._source
            }), n(0, s, "scrollBar", function() {
                return this._list.scrollBar
            }), n(0, s, "list", function() {
                return this._list
            }), n(0, s, "scrollBarSkin", function() {
                return this._list.vScrollBarSkin
            }, function(t) {
                this._list.vScrollBarSkin = t
            }), n(0, s, "renderHandler", function() {
                return this._renderHandler
            }, function(t) {
                this._renderHandler = t
            }), n(0, s, "selectedIndex", function() {
                return this._list.selectedIndex
            }, function(t) {
                this._list.selectedIndex = t
            }), n(0, s, "spaceLeft", function() {
                return this._spaceLeft
            }, function(t) {
                this._spaceLeft = t
            }), n(0, s, "selectedItem", function() {
                return this._list.selectedItem
            }, function(t) {
                this._list.selectedItem = t
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(H, this, "width", t), this._list.width = t
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(H, this, "height", t), this._list.height = t
            }), n(0, s, "xml", null, function(t) {
                var i = [];
                this.parseXml(t.childNodes[0], i, null, !0), this.array = i
            }), n(0, s, "selectedPath", function() {
                return this._list.selectedItem ? this._list.selectedItem.path : null
            }), i
        }(H),
        tt = function(t) {
            function i() {
                this._items = null, this._selectedIndex = 0, i.__super.call(this), this._setIndexHandler = f.create(this, this.setIndex, null, !1)
            }
            h(i, "laya.ui.ViewStack", t);
            var s = i.prototype;
            return e.imps(s, {
                "laya.ui.IItem": !0
            }), s.setItems = function(t) {
                this.removeChildren();
                for (var i = 0, e = 0, s = t.length; e < s; e++) {
                    var h = t[e];
                    h && (h.name = "item" + i, this.addChild(h), i++)
                }
                this.initItems()
            }, s.addItem = function(t) {
                t.name = "item" + this._items.length, this.addChild(t), this.initItems()
            }, s.initItems = function() {
                this._items = [];
                for (var t = 0; t < 1e4; t++) {
                    var i = this.getChildByName("item" + t);
                    if (null == i) break;
                    this._items.push(i), i.visible = t == this._selectedIndex
                }
            }, s.setSelect = function(t, i) {
                this._items && t > -1 && t < this._items.length && (this._items[t].visible = i)
            }, s.setIndex = function(t) {
                this.selectedIndex = t
            }, n(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
                if (this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t) this.selectedIndex = parseInt(t);
                else
                    for (var i in this._dataSource) this.hasOwnProperty(i) && (this[i] = this._dataSource[i])
            }), n(0, s, "selectedIndex", function() {
                return this._selectedIndex
            }, function(t) {
                this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, this.setSelect(this._selectedIndex, !0))
            }), n(0, s, "selection", function() {
                return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null
            }, function(t) {
                this.selectedIndex = this._items.indexOf(t)
            }), n(0, s, "items", function() {
                return this._items
            }), n(0, s, "setIndexHandler", function() {
                return this._setIndexHandler
            }, function(t) {
                this._setIndexHandler = t
            }), i
        }(H),
        it = function(t) {
            function i() {
                i.__super.call(this)
            }
            return h(i, "laya.ui.VScrollBar", X), i
        }(),
        et = function(t) {
            function i(t) {
                this._bg = null, this._skin = null, i.__super.call(this), void 0 === t && (t = ""), this.text = t, this.skin = this.skin
            }
            h(i, "laya.ui.TextInput", t);
            var s = i.prototype;
            return s.preinitialize = function() {
                this.mouseEnabled = !0
            }, s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(), this._bg = null
            }, s.createChildren = function() {
                this.addChild(this._tf = new p), this._tf.padding = I.inputLabelPadding, this._tf.on("input", this, this._onInput), this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur), this._tf.on("focus", this, this._onFocus)
            }, s._onFocus = function() {
                this.event("focus", this)
            }, s._onBlur = function() {
                this.event("blur", this)
            }, s._onInput = function() {
                this.event("input", this)
            }, s._onEnter = function() {
                this.event("enter", this)
            }, s.initialize = function() {
                this.width = 128, this.height = 22
            }, s.select = function() {
                this._tf.select()
            }, s.setSelection = function(t, i) {
                this._tf.setSelection(t, i)
            }, n(0, s, "text", t.prototype._$get_text, function(t) {
                this._tf.text != t && (t += "", this._tf.text = t, this.event("change"))
            }), n(0, s, "bg", function() {
                return this._bg
            }, function(t) {
                this.graphics = this._bg = t
            }), n(0, s, "inputElementYAdjuster", function() {
                return this._tf.inputElementYAdjuster
            }, function(t) {
                this._tf.inputElementYAdjuster = t
            }), n(0, s, "multiline", function() {
                return this._tf.multiline
            }, function(t) {
                this._tf.multiline = t
            }), n(0, s, "skin", function() {
                return this._skin
            }, function(t) {
                this._skin != t && (this._skin = t, this._bg || (this.graphics = this._bg = new z), this._bg.source = g.getRes(this._skin), this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height))
            }), n(0, s, "sizeGrid", function() {
                return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null
            }, function(t) {
                this._bg || (this.graphics = this._bg = new z), this._bg.sizeGrid = L.fillArray(I.defaultSizeGrid, t, Number)
            }), n(0, s, "inputElementXAdjuster", function() {
                return this._tf.inputElementXAdjuster
            }, function(t) {
                this._tf.inputElementXAdjuster = t
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(D, this, "width", t), this._bg && (this._bg.width = t)
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(D, this, "height", t), this._bg && (this._bg.height = t)
            }), n(0, s, "editable", function() {
                return this._tf.editable
            }, function(t) {
                this._tf.editable = t
            }), n(0, s, "restrict", function() {
                return this._tf.restrict
            }, function(t) {
                this._tf.restrict = t
            }), n(0, s, "prompt", function() {
                return this._tf.prompt
            }, function(t) {
                this._tf.prompt = t
            }), n(0, s, "promptColor", function() {
                return this._tf.promptColor
            }, function(t) {
                this._tf.promptColor = t
            }), n(0, s, "maxChars", function() {
                return this._tf.maxChars
            }, function(t) {
                this._tf.maxChars = t
            }), n(0, s, "focus", function() {
                return this._tf.focus
            }, function(t) {
                this._tf.focus = t
            }), n(0, s, "type", function() {
                return this._tf.type
            }, function(t) {
                this._tf.type = t
            }), n(0, s, "asPassword", function() {
                return this._tf.asPassword
            }, function(t) {
                this._tf.asPassword = t
            }), i
        }(D),
        st = function(t) {
            function i() {
                i.__super.call(this)
            }
            return h(i, "laya.ui.VSlider", E), i
        }(),
        ht = function(t) {
            function i() {
                this.popupCenter = !0, this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this.group = null, this.isModal = !1, this._dragArea = null, i.__super.call(this)
            }
            h(i, "laya.ui.Dialog", t);
            var s = i.prototype;
            return s.initialize = function() {
                this.popupEffect = i.manager.popupEffectHandler, this.closeEffect = i.manager.closeEffectHandler, this._dealDragArea(), this.on("click", this, this._onClick)
            }, s._dealDragArea = function() {
                var t = this.getChildByName("drag");
                t && (this.dragArea = t.x + "," + t.y + "," + t.width + "," + t.height, t.removeSelf())
            }, s._onClick = function(t) {
                var i = t.target;
                if (i) switch (i.name) {
                    case "close":
                    case "cancel":
                    case "sure":
                    case "no":
                    case "ok":
                    case "yes":
                        this.close(i.name)
                }
            }, s.show = function(t, i) {
                void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!1, t, i)
            }, s.popup = function(t, i) {
                void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!0, t, i)
            }, s._open = function(t, e, s) {
                i.manager.lock(!1), this.isModal = t, i.manager.open(this, e, s)
            }, s.onOpened = function() {}, s.close = function(t, e) {
                void 0 === e && (e = !0), i.manager.close(this, t, e)
            }, s.onClosed = function(t) {}, s._onMouseDown = function(t) {
                var i = this.getMousePoint();
                this._dragArea.contains(i.x, i.y) ? this.startDrag() : this.stopDrag()
            }, n(0, s, "dragArea", function() {
                return this._dragArea ? this._dragArea.toString() : null
            }, function(t) {
                if (t) {
                    var i = L.fillArray([0, 0, 0, 0], t, Number);
                    this._dragArea = new y(i[0], i[1], i[2], i[3]), this.on("mousedown", this, this._onMouseDown)
                } else this._dragArea = null, this.off("mousedown", this, this._onMouseDown)
            }), n(0, s, "isPopup", function() {
                return null != this.parent
            }), n(0, s, "zOrder", t.prototype._$get_zOrder, function(t) {
                e.superSet(R, this, "zOrder", t), i.manager._checkMask()
            }), n(1, i, "manager", function() {
                return i._manager = i._manager || new P
            }, function(t) {
                i._manager = t
            }), i.setLockView = function(t) {
                i.manager.setLockView(t)
            }, i.lock = function(t) {
                i.manager.lock(t)
            }, i.closeAll = function() {
                i.manager.closeAll()
            }, i.getDialogsByGroup = function(t) {
                return i.manager.getDialogsByGroup(t)
            }, i.closeByGroup = function(t) {
                return i.manager.closeByGroup(t)
            }, i.CLOSE = "close", i.CANCEL = "cancel", i.SURE = "sure", i.NO = "no", i.OK = "ok", i.YES = "yes", i._manager = null, i
        }(R),
        nt = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.HBox", t);
            var s = i.prototype;
            return s.sortItem = function(t) {
                t && t.sort(function(t, i) {
                    return t.x - i.x
                })
            }, s.changeItems = function() {
                this._itemChanged = !1;
                for (var t = [], i = 0, e = 0, s = this.numChildren; e < s; e++) {
                    var h = this.getChildAt(e);
                    h && h.layoutEnabled && (t.push(h), i = this._height ? this._height : Math.max(i, h.height * h.scaleY))
                }
                this.sortItem(t);
                var n = 0;
                for (e = 0, s = t.length; e < s; e++)(h = t[e]).x = n, n += h.width * h.scaleX + this._space, "top" == this._align ? h.y = 0 : "middle" == this._align ? h.y = .5 * (i - h.height * h.scaleY) : "bottom" == this._align && (h.y = i - h.height * h.scaleY);
                this.changeSize()
            }, n(0, s, "height", t.prototype._$get_height, function(t) {
                this._height != t && (e.superSet($, this, "height", t), this.callLater(this.changeItems))
            }), i.NONE = "none", i.TOP = "top", i.MIDDLE = "middle", i.BOTTOM = "bottom", i
        }($),
        ot = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.VBox", t);
            var s = i.prototype;
            return s.changeItems = function() {
                this._itemChanged = !1;
                for (var t = [], i = 0, e = 0, s = this.numChildren; e < s; e++) {
                    var h = this.getChildAt(e);
                    h && h.layoutEnabled && (t.push(h), i = this._width ? this._width : Math.max(i, h.width * h.scaleX))
                }
                this.sortItem(t);
                var n = 0;
                for (e = 0, s = t.length; e < s; e++)(h = t[e]).y = n, n += h.height * h.scaleY + this._space, "left" == this._align ? h.x = 0 : "center" == this._align ? h.x = .5 * (i - h.width * h.scaleX) : "right" == this._align && (h.x = i - h.width * h.scaleX);
                this.changeSize()
            }, n(0, s, "width", t.prototype._$get_width, function(t) {
                this._width != t && (e.superSet($, this, "width", t), this.callLater(this.changeItems))
            }), i.NONE = "none", i.LEFT = "left", i.CENTER = "center", i.RIGHT = "right", i
        }($),
        rt = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.RadioGroup", q);
            return i.prototype.createItem = function(t, i) {
                return new J(t, i)
            }, i
        }(),
        lt = function(t) {
            function i() {
                i.__super.call(this)
            }
            h(i, "laya.ui.Tab", q);
            return i.prototype.createItem = function(t, i) {
                return new N(t, i)
            }, i
        }(),
        at = function(t) {
            function i(t) {
                this._vScrollBar = null, this._hScrollBar = null, void 0 === t && (t = ""), i.__super.call(this, t)
            }
            h(i, "laya.ui.TextArea", t);
            var s = i.prototype;
            return s.destroy = function(i) {
                void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._vScrollBar && this._vScrollBar.destroy(), this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null
            }, s.initialize = function() {
                this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0
            }, s.onVBarChanged = function(t) {
                this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value)
            }, s.onHBarChanged = function(t) {
                this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value)
            }, s.changeScroll = function() {
                var t = this._vScrollBar && this._tf.maxScrollY > 0,
                    i = this._hScrollBar && this._tf.maxScrollX > 0,
                    e = t ? this._width - this._vScrollBar.width : this._width,
                    s = i ? this._height - this._hScrollBar.height : this._height,
                    h = this._tf.padding || I.labelPadding;
                this._tf.width = e, this._tf.height = s, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - h[2], this._vScrollBar.y = h[1], this._vScrollBar.height = this._height - (i ? this._hScrollBar.height : 0) - h[1] - h[3], this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = s / Math.max(this._tf.textHeight, s), this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t), this._hScrollBar && (this._hScrollBar.x = h[0], this._hScrollBar.y = this._height - this._hScrollBar.height - h[3], this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - h[0] - h[2], this._hScrollBar.scrollSize = Math.max(.033 * e, 1), this._hScrollBar.thumbPercent = e / Math.max(this._tf.textWidth, e), this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = i)
            }, s.scrollTo = function(t) {
                this.commitMeasure(), this._tf.scrollY = t
            }, n(0, s, "scrollY", function() {
                return this._tf.scrollY
            }), n(0, s, "width", t.prototype._$get_width, function(t) {
                e.superSet(et, this, "width", t), this.callLater(this.changeScroll)
            }), n(0, s, "hScrollBar", function() {
                return this._hScrollBar
            }), n(0, s, "height", t.prototype._$get_height, function(t) {
                e.superSet(et, this, "height", t), this.callLater(this.changeScroll)
            }), n(0, s, "maxScrollX", function() {
                return this._tf.maxScrollX
            }), n(0, s, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null
            }, function(t) {
                null == this._vScrollBar && (this.addChild(this._vScrollBar = new it), this._vScrollBar.on("change", this, this.onVBarChanged), this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t
            }), n(0, s, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null
            }, function(t) {
                null == this._hScrollBar && (this.addChild(this._hScrollBar = new j), this._hScrollBar.on("change", this, this.onHBarChanged), this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._hScrollBar.skin = t
            }), n(0, s, "vScrollBar", function() {
                return this._vScrollBar
            }), n(0, s, "maxScrollY", function() {
                return this._tf.maxScrollY
            }), n(0, s, "scrollX", function() {
                return this._tf.scrollX
            }), i
        }(et);
    ! function(t) {
        function i() {
            this._uiView = null, this.isCloseOther = !1, i.__super.call(this)
        }
        h(i, "laya.ui.AsynDialog", ht);
        var e = i.prototype;
        e.createView = function(t) {
            this._uiView = t
        }, e._open = function(t, i, e) {
            this.isModal = t, this.isCloseOther = i, ht.manager.lock(!0), this._uiView ? this.onCreated() : this.onOpen()
        }, e.onCreated = function() {
            this.createUI(), this.onOpen()
        }, e.createUI = function() {
            laya.ui.View.prototype.createView.call(this, this._uiView), this._uiView = null, this._dealDragArea()
        }, e.onOpen = function() {
            ht.manager.open(this, this.isCloseOther), ht.manager.lock(!1)
        }, e.close = function(t, i) {
            void 0 === i && (i = !0), ht.manager.close(this), this.onClose()
        }, e.onClose = function() {}, e.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.View.prototype.destroy.call(this, t), this._uiView = null, this.onDestroy()
        }, e.onDestroy = function() {}
    }();
    e.__init([R])
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    for (var e in Laya) {
        var s = Laya[e];
        s && s.__isclass && (i[e] = s)
    }
});