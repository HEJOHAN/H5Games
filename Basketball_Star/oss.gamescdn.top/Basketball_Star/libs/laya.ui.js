! function(T, B, q) {
    q.un, q.uns;
    var J = q.static,
        I = q.class,
        u = q.getset,
        A = (q.__newvec, laya.display.Animation),
        i = laya.utils.Browser,
        E = laya.utils.ClassUtils,
        k = laya.filters.ColorFilter,
        G = laya.components.Component,
        x = (laya.Const, laya.utils.Ease),
        P = laya.events.Event,
        e = laya.display.Graphics,
        C = laya.utils.Handler,
        v = laya.net.HttpRequest,
        j = laya.display.Input,
        a = laya.net.Loader,
        Y = laya.net.LocalStorage,
        F = laya.maths.Matrix,
        t = (laya.display.Node, laya.maths.Point),
        r = laya.maths.Rectangle,
        O = (laya.renders.Render, laya.display.Scene),
        z = laya.utils.SceneUtils,
        K = laya.display.Sprite,
        Z = (laya.display.Stage, laya.display.Text),
        D = laya.resource.Texture,
        n = laya.utils.TimeLine,
        M = laya.utils.Tween,
        _ = laya.utils.Utils,
        W = laya.utils.WeakObject;
    q.interface("laya.ui.IBox"), q.interface("laya.ui.IItem"), q.interface("laya.ui.ISelect"), q.interface("laya.ui.IRender");
    var o = function() {
            function e() {}
            return I(e, "UIConfig"), e.touchScrollEnable = !0, e.mouseWheelEnable = !0, e.showButtons = !0, e.popupBgColor = "#000000", e.popupBgAlpha = .5, e.closeDialogOnSide = !0, e;
        }(),
        f = function() {
            function e() {}
            return I(e, "laya.ui.Styles"), e.labelColor = "#000000", e.buttonStateNum = 3, e.scrollBarMinNum = 15, e.scrollBarDelayTime = 500, J(e, ["defaultSizeGrid", function() {
                return this.defaultSizeGrid = [4, 4, 4, 4, 0];
            }, "labelPadding", function() {
                return this.labelPadding = [2, 2, 2, 2];
            }, "inputLabelPadding", function() {
                return this.inputLabelPadding = [1, 1, 1, 3];
            }, "buttonLabelColors", function() {
                return this.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"];
            }, "comboBoxItemColors", function() {
                return this.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"];
            }]), e;
        }(),
        s = function() {
            function u() {}
            return I(u, "laya.ui.UIUtils"), u.fillArray = function(e, O, k) {
                var T = e.concat();
                if (O)
                    for (var u = O.split(","), J = 0, A = Math.min(T.length, u.length); J < A; J++) {
                        var B = u[J];
                        T[J] = "true" == B || "false" != B && B, null != k && (T[J] = k(B));
                    }
                return T;
            }, u.toColor = function(e) {
                return _.toHexColor(e);
            }, u.gray = function(e, O) {
                void 0 === O && (O = !0), O ? u.addFilter(e, u.grayFilter) : u.clearFilter(e, k);
            }, u.addFilter = function(e, O) {
                var k = e.filters || [];
                k.push(O), e.filters = k;
            }, u.clearFilter = function(e, O) {
                var k = e.filters;
                if (null != k && 0 < k.length) {
                    for (var T = k.length - 1; - 1 < T; T--) {
                        var u = k[T];
                        q.__typeof(u, O) && k.splice(T, 1);
                    }
                    e.filters = k;
                }
            }, u._getReplaceStr = function(e) {
                return u.escapeSequence[e];
            }, u.adptString = function(e) {
                return e.replace(/\\(\w)/g, u._getReplaceStr);
            }, u.getBindFun = function(e) {
                var O = u._funMap.get(e);
                if (null == O) {
                    var k = '"' + e + '"',
                        T = "(function(data){if(data==null)return;with(data){try{\nreturn " + (k = k.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    O = q._runScript(T), u._funMap.set(e, O);
                }
                return O;
            }, J(u, ["grayFilter", function() {
                return this.grayFilter = new k([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]);
            }, "escapeSequence", function() {
                return this.escapeSequence = {
                    "\\n": "\n",
                    "\\t": "\t"
                };
            }, "_funMap", function() {
                return this._funMap = new W();
            }]), u;
        }(),
        Q = function(e) {
            function O() {
                O.__super.call(this), this._top = NaN, this._bottom = NaN, this._left = NaN, this._right = NaN, this._centerX = NaN, this._centerY = NaN;
            }
            I(O, "laya.ui.Widget", G);
            var k = O.prototype;
            return k.onReset = function() {
                this._top = this._bottom = this._left = this._right = this._centerX = this._centerY = NaN;
            }, k._onEnable = function() {
                this.owner.parent ? this._onAdded() : this.owner.once("added", this, this._onAdded);
            }, k._onDisable = function() {
                this.owner.off("added", this, this._onAdded), this.owner.parent && this.owner.parent.off("resize", this, this._onParentResize);
            }, k._onAdded = function() {
                this.owner.parent && this.owner.parent.on("resize", this, this._onParentResize), this.resetLayoutX(), this.resetLayoutY();
            }, k._onParentResize = function() {
                (this.resetLayoutX() || this.resetLayoutY()) && this.owner.event("resize");
            }, k.resetLayoutX = function() {
                var e = this.owner;
                if (!e) return !1;
                var O = e.parent;
                if (O)
                    if (isNaN(this.centerX)) {
                        if (isNaN(this.left)) isNaN(this.right) || (e.x = Math.round(O.width - e.displayWidth - this.right + e.pivotX * e.scaleX));
                        else if (e.x = Math.round(this.left + e.pivotX * e.scaleX), !isNaN(this.right)) {
                            var k = (O._width - this.left - this.right) / (e.scaleX || .01);
                            if (k != e.width) return e.width = k, !0;
                        }
                    } else e.x = Math.round(.5 * (O.width - e.displayWidth) + this.centerX + e.pivotX * e.scaleX);
                return !1;
            }, k.resetLayoutY = function() {
                var e = this.owner;
                if (!e) return !1;
                var O = e.parent;
                if (O)
                    if (isNaN(this.centerY)) {
                        if (isNaN(this.top)) isNaN(this.bottom) || (e.y = Math.round(O.height - e.displayHeight - this.bottom + e.pivotY * e.scaleY));
                        else if (e.y = Math.round(this.top + e.pivotY * e.scaleY), !isNaN(this.bottom)) {
                            var k = (O._height - this.top - this.bottom) / (e.scaleY || .01);
                            if (k != e.height) return e.height = k, !0;
                        }
                    } else e.y = Math.round(.5 * (O.height - e.displayHeight) + this.centerY + e.pivotY * e.scaleY);
                return !1;
            }, k.resetLayout = function() {
                this.owner && (this.resetLayoutX(), this.resetLayoutY());
            }, u(0, k, "centerX", function() {
                return this._centerX;
            }, function(e) {
                this._centerX != e && (this._centerX = e, this.resetLayoutX());
            }), u(0, k, "top", function() {
                return this._top;
            }, function(e) {
                this._top != e && (this._top = e, this.resetLayoutY());
            }), u(0, k, "bottom", function() {
                return this._bottom;
            }, function(e) {
                this._bottom != e && (this._bottom = e, this.resetLayoutY());
            }), u(0, k, "left", function() {
                return this._left;
            }, function(e) {
                this._left != e && (this._left = e, this.resetLayoutX());
            }), u(0, k, "right", function() {
                return this._right;
            }, function(e) {
                this._right != e && (this._right = e, this.resetLayoutX());
            }), u(0, k, "centerY", function() {
                return this._centerY;
            }, function(e) {
                this._centerY != e && (this._centerY = e, this.resetLayoutY());
            }), J(O, ["EMPTY", function() {
                return this.EMPTY = new O();
            }]), O;
        }(),
        V = (function(e) {
            function O() {
                O.__super.call(this);
            }
            I(O, "laya.ui.UIEvent", P), O.SHOW_TIP = "showtip", O.HIDE_TIP = "hidetip";
        }(), function(e) {
            function x() {
                this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null, this._sizeGrid = null, this._isChanged = !1, this._offset = null, x.__super.call(this);
            }
            I(x, "laya.ui.AutoBitmap", e);
            var O = x.prototype;
            return O.destroy = function() {
                e.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null;
            }, O._setChanged = function() {
                this._isChanged || (this._isChanged = !0, q.timer.callLater(this, this.changeSource));
            }, O.changeSource = function() {
                this._isChanged = !1;
                var e = this._source;
                if (e && e.bitmap) {
                    var O = this.width,
                        k = this.height,
                        T = this._sizeGrid,
                        u = e.sourceWidth,
                        J = e.sourceHeight;
                    if (!T || u === O && J === k) this.clear(), this.drawTexture(e, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, O, k);
                    else {
                        this.clear();
                        var A = T[0],
                            B = T[1],
                            I = T[2],
                            i = T[3],
                            E = T[4],
                            G = !1;
                        if (O == u && (i = B = 0), k == J && (A = I = 0), O < i + B) {
                            var q = O;
                            G = !0, O = i + B, this.save(), this.clipRect(0, 0, q, k);
                        }
                        i && A && this.drawImage(x.getTexture(e, 0, 0, i, A), 0, 0, i, A), B && A && this.drawImage(x.getTexture(e, u - B, 0, B, A), O - B, 0, B, A), i && I && this.drawImage(x.getTexture(e, 0, J - I, i, I), 0, k - I, i, I), B && I && this.drawImage(x.getTexture(e, u - B, J - I, B, I), O - B, k - I, B, I), A && this.drawBitmap(E, x.getTexture(e, i, 0, u - i - B, A), i, 0, O - i - B, A), I && this.drawBitmap(E, x.getTexture(e, i, J - I, u - i - B, I), i, k - I, O - i - B, I), i && this.drawBitmap(E, x.getTexture(e, 0, A, i, J - A - I), 0, A, i, k - A - I), B && this.drawBitmap(E, x.getTexture(e, u - B, A, B, J - A - I), O - B, A, B, k - A - I), this.drawBitmap(E, x.getTexture(e, i, A, u - i - B, J - A - I), i, A, O - i - B, k - A - I), G && this.restore();
                    }
                    this._repaint();
                }
            }, O.drawBitmap = function(e, O, k, T, u, J) {
                void 0 === u && (u = 0), void 0 === J && (J = 0), u < .1 || J < .1 || (!e || O.width == u && O.height == J ? this.drawImage(O, k, T, u, J) : this.fillTexture(O, k, T, u, J));
            }, u(0, O, "sizeGrid", function() {
                return this._sizeGrid;
            }, function(e) {
                this._sizeGrid = e, this._setChanged();
            }), u(0, O, "width", function() {
                return this._width ? this._width : this._source ? this._source.sourceWidth : 0;
            }, function(e) {
                this._width != e && (this._width = e, this._setChanged());
            }), u(0, O, "height", function() {
                return this._height ? this._height : this._source ? this._source.sourceHeight : 0;
            }, function(e) {
                this._height != e && (this._height = e, this._setChanged());
            }), u(0, O, "source", function() {
                return this._source;
            }, function(e) {
                e ? (this._source = e, this._setChanged()) : (this._source = null, this.clear());
            }), x.getTexture = function(e, O, k, T, u) {
                var J;
                return T <= 0 && (T = 1), u <= 0 && (u = 1), e.$_GID || (e.$_GID = _.getGID()), J && J._getSource() || (J = D.createFromTexture(e, O, k, T, u)), J;
            }, x;
        }(e)),
        m = function(O) {
            function e() {
                this._dataSource = null, this._toolTip = null, this._tag = null, this._disabled = !1, this._gray = !1, e.__super.call(this), this._anchorX = NaN, this._anchorY = NaN, this._widget = Q.EMPTY, this.preinitialize(), this.createChildren(), this.initialize();
            }
            I(e, "laya.ui.UIComponent", O);
            var k = e.prototype;
            return k.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._dataSource = null, this._tag = null, this._toolTip = null;
            }, k.preinitialize = function() {}, k.createChildren = function() {}, k.initialize = function() {}, k.measureWidth = function() {
                var e = 0;
                this.commitMeasure();
                for (var O = this.numChildren - 1; - 1 < O; O--) {
                    var k = this.getChildAt(O);
                    k._visible && (e = Math.max(k._x + k.width * k.scaleX, e));
                }
                return e;
            }, k.commitMeasure = function() {}, k.measureHeight = function() {
                var e = 0;
                this.commitMeasure();
                for (var O = this.numChildren - 1; - 1 < O; O--) {
                    var k = this.getChildAt(O);
                    k._visible && (e = Math.max(k._y + k.height * k.scaleY, e));
                }
                return e;
            }, k._sizeChanged = function() {
                isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height), this.event("resize"), this._widget !== Q.EMPTY && this._widget.resetLayout();
            }, k.onMouseOver = function(e) {
                q.stage.event("showtip", this._toolTip);
            }, k.onMouseOut = function(e) {
                q.stage.event("hidetip", this._toolTip);
            }, k._getWidget = function() {
                return this._widget === Q.EMPTY && (this._widget = this.addComponent(Q)), this._widget;
            }, k.onCompResize = function() {
                this._sizeChanged();
            }, k._childChanged = function(e) {
                this.callLater(this._sizeChanged), O.prototype._childChanged.call(this, e);
            }, u(0, k, "centerY", function() {
                return this._widget.centerY;
            }, function(e) {
                e != this._widget.centerY && (this._getWidget().centerY = e);
            }), u(0, k, "width", function() {
                return this._width ? this._width : this.measureWidth();
            }, function(e) {
                q.superGet(K, this, "width") != e && (q.superSet(K, this, "width", e), this.callLater(this._sizeChanged));
            }), u(0, k, "bottom", function() {
                return this._widget.bottom;
            }, function(e) {
                e != this._widget.bottom && (this._getWidget().bottom = e);
            }), u(0, k, "height", function() {
                return this._height ? this._height : this.measureHeight();
            }, function(e) {
                q.superGet(K, this, "height") != e && (q.superSet(K, this, "height", e), this.callLater(this._sizeChanged));
            }), u(0, k, "left", function() {
                return this._widget.left;
            }, function(e) {
                e != this._widget.left && (this._getWidget().left = e);
            }), u(0, k, "dataSource", function() {
                return this._dataSource;
            }, function(e) {
                for (var O in this._dataSource = e, this._dataSource) this.hasOwnProperty(O) && "function" != typeof this[O] && (this[O] = this._dataSource[O]);
            }), u(0, k, "centerX", function() {
                return this._widget.centerX;
            }, function(e) {
                e != this._widget.centerX && (this._getWidget().centerX = e);
            }), u(0, k, "top", function() {
                return this._widget.top;
            }, function(e) {
                e != this._widget.top && (this._getWidget().top = e);
            }), u(0, k, "right", function() {
                return this._widget.right;
            }, function(e) {
                e != this._widget.right && (this._getWidget().right = e);
            }), u(0, k, "tag", function() {
                return this._tag;
            }, function(e) {
                this._tag = e;
            }), u(0, k, "toolTip", function() {
                return this._toolTip;
            }, function(e) {
                this._toolTip != e && (null != (this._toolTip = e) ? (this.on("mouseover", this, this.onMouseOver), this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver), this.off("mouseout", this, this.onMouseOut)));
            }), u(0, k, "gray", function() {
                return this._gray;
            }, function(e) {
                e !== this._gray && (this._gray = e, s.gray(this, e));
            }), u(0, k, "disabled", function() {
                return this._disabled;
            }, function(e) {
                e !== this._disabled && (this.gray = this._disabled = e, this.mouseEnabled = !e);
            }), u(0, k, "scaleX", O.prototype._$get_scaleX, function(e) {
                q.superGet(K, this, "scaleX") != e && (q.superSet(K, this, "scaleX", e), this.event("resize"));
            }), u(0, k, "scaleY", O.prototype._$get_scaleY, function(e) {
                q.superGet(K, this, "scaleY") != e && (q.superSet(K, this, "scaleY", e), this.event("resize"));
            }), u(0, k, "anchorX", function() {
                return this._anchorX;
            }, function(e) {
                this._anchorX != e && (this._anchorX = e, this.callLater(this._sizeChanged));
            }), u(0, k, "anchorY", function() {
                return this._anchorY;
            }, function(e) {
                this._anchorY != e && (this._anchorY = e, this.callLater(this._sizeChanged));
            }), e;
        }(K),
        X = function(e) {
            function O() {
                this.lockLayer = null, this.popupEffect = function(e) {
                    e.scale(1, 1), e._effectTween = M.from(e, {
                        x: q.stage.width / 2,
                        y: q.stage.height / 2,
                        scaleX: 0,
                        scaleY: 0
                    }, 300, x.backOut, C.create(this, this.doOpen, [e]), 0, !1, !1);
                }, this.closeEffect = function(e) {
                    e._effectTween = M.to(e, {
                        x: q.stage.width / 2,
                        y: q.stage.height / 2,
                        scaleX: 0,
                        scaleY: 0
                    }, 300, x.strongOut, C.create(this, this.doClose, [e]), 0, !1, !1);
                }, O.__super.call(this), this.maskLayer = new K(), this.popupEffectHandler = new C(this, this.popupEffect), this.closeEffectHandler = new C(this, this.closeEffect), this.mouseEnabled = this.maskLayer.mouseEnabled = !0, this.zOrder = 1e3, q.stage.addChild(this), q.stage.on("resize", this, this._onResize), o.closeDialogOnSide && this.maskLayer.on("click", this, this._closeOnSide), this._onResize(null);
            }
            I(O, "laya.ui.DialogManager", K);
            var k = O.prototype;
            return k._closeOnSide = function() {
                var e = this.getChildAt(this.numChildren - 1);
                e instanceof laya.ui.Dialog && e.close();
            }, k.setLockView = function(e) {
                this.lockLayer || (this.lockLayer = new y(), this.lockLayer.mouseEnabled = !0, this.lockLayer.size(q.stage.width, q.stage.height)), this.lockLayer.removeChildren(), e && (e.centerX = e.centerY = 0, this.lockLayer.addChild(e));
            }, k._onResize = function(e) {
                var O = this.maskLayer.width = q.stage.width,
                    k = this.maskLayer.height = q.stage.height;
                this.lockLayer && this.lockLayer.size(O, k), this.maskLayer.graphics.clear(!0), this.maskLayer.graphics.drawRect(0, 0, O, k, o.popupBgColor), this.maskLayer.alpha = o.popupBgAlpha;
                for (var T = this.numChildren - 1; - 1 < T; T--) {
                    var u = this.getChildAt(T);
                    u.isPopupCenter && this._centerDialog(u);
                }
            }, k._centerDialog = function(e) {
                e.x = Math.round((q.stage.width - e.width >> 1) + e.pivotX), e.y = Math.round((q.stage.height - e.height >> 1) + e.pivotY);
            }, k.open = function(e, O, k) {
                void 0 === O && (O = !1), void 0 === k && (k = !1), O && this._closeAll(), this._clearDialogEffect(e), e.isPopupCenter && this._centerDialog(e), this.addChild(e), (e.isModal || this._getBit(32)) && q.timer.callLater(this, this._checkMask), k && null != e.popupEffect ? e.popupEffect.runWith(e) : this.doOpen(e), this.event("open");
            }, k._clearDialogEffect = function(e) {
                e._effectTween && (M.clear(e._effectTween), e._effectTween = null);
            }, k.doOpen = function(e) {
                e.onOpened(e._param);
            }, k.lock = function(e) {
                this.lockLayer && (e ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf());
            }, k.close = function(e) {
                this._clearDialogEffect(e), e.isShowEffect && null != e.closeEffect ? e.closeEffect.runWith([e]) : this.doClose(e), this.event("close");
            }, k.doClose = function(e) {
                e.removeSelf(), e.isModal && this._checkMask(), e.closeHandler && e.closeHandler.runWith(e.closeType), e.onClosed(e.closeType), e.autoDestroyAtClosed && e.destroy();
            }, k.closeAll = function() {
                this._closeAll(), this.event("close");
            }, k._closeAll = function() {
                for (var e = this.numChildren - 1; - 1 < e; e--) {
                    var O = this.getChildAt(e);
                    O && null != O.close && this.doClose(O);
                }
            }, k.getDialogsByGroup = function(e) {
                for (var O = [], k = this.numChildren - 1; - 1 < k; k--) {
                    var T = this.getChildAt(k);
                    T && T.group === e && O.push(T);
                }
                return O;
            }, k.closeByGroup = function(e) {
                for (var O = [], k = this.numChildren - 1; - 1 < k; k--) {
                    var T = this.getChildAt(k);
                    T && T.group === e && (T.close(), O.push(T));
                }
                return O;
            }, k._checkMask = function() {
                this.maskLayer.removeSelf();
                for (var e = this.numChildren - 1; - 1 < e; e--) {
                    var O = this.getChildAt(e);
                    if (O && O.isModal) return void this.addChildAt(this.maskLayer, e);
                }
            }, O;
        }(),
        $ = function(O) {
            function k() {
                this._watchMap = {}, this._widget = null, this._dataSource = null, this._anchorX = NaN, this._anchorY = NaN, this._widget = Q.EMPTY, k.__super.call(this);
            }
            I(k, "laya.ui.View", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), this._watchMap = null, O.prototype.destroy.call(this, e);
            }, e.changeData = function(e) {
                var O = this._watchMap[e];
                if (O)
                    for (var k = 0, T = O.length; k < T; k++) {
                        O[k].exe(this);
                    }
            }, e._sizeChanged = function() {
                isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height), this.event("resize");
            }, e._getWidget = function() {
                return this._widget === Q.EMPTY && (this._widget = this.addComponent(Q)), this._widget;
            }, e.loadUI = function(e) {
                var O = k.uiMap[e];
                k.uiMap && this.createView(O);
            }, u(0, e, "anchorX", function() {
                return this._anchorX;
            }, function(e) {
                this._anchorX != e && (this._anchorX = e, this.callLater(this._sizeChanged));
            }), u(0, e, "centerX", function() {
                return this._widget.centerX;
            }, function(e) {
                e != this._widget.centerX && (this._getWidget().centerX = e);
            }), u(0, e, "top", function() {
                return this._widget.top;
            }, function(e) {
                e != this._widget.top && (this._getWidget().top = e);
            }), u(0, e, "bottom", function() {
                return this._widget.bottom;
            }, function(e) {
                e != this._widget.bottom && (this._getWidget().bottom = e);
            }), u(0, e, "dataSource", function() {
                return this._dataSource;
            }, function(e) {
                for (var O in this._dataSource = e) {
                    var k = this.getChildByName(O);
                    k instanceof laya.ui.UIComponent ? k.dataSource = e[O] : this.hasOwnProperty(O) && "function" != typeof this[O] && (this[O] = e[O]);
                }
            }), u(0, e, "left", function() {
                return this._widget.left;
            }, function(e) {
                e != this._widget.left && (this._getWidget().left = e);
            }), u(0, e, "right", function() {
                return this._widget.right;
            }, function(e) {
                e != this._widget.right && (this._getWidget().right = e);
            }), u(0, e, "anchorY", function() {
                return this._anchorY;
            }, function(e) {
                this._anchorY != e && (this._anchorY = e, this.callLater(this._sizeChanged));
            }), u(0, e, "centerY", function() {
                return this._widget.centerY;
            }, function(e) {
                e != this._widget.centerY && (this._getWidget().centerY = e);
            }), k.regComponent = function(e, O) {
                E.regClass(e, O);
            }, k.regViewRuntime = function(e, O) {
                E.regClass(e, O);
            }, k.regUI = function(e, O) {
                q.loader.cacheRes(e, O);
            }, k.uiMap = {}, k.__init$ = function() {
                E.regShortClassName([p, l, Ce, S, y, Je, l, ee, c, h, m, Ee, Ge, R, w, Te, ke, H, Ae, xe, b, L, ve, ue, k, U, Ie, ie, Oe, qe, Pe, K, A, Z, Be]);
            }, k;
        }(O),
        y = (function(e) {
            function O() {
                this._$4__texture = null, O.__super.call(this), this._width = this._height = 200;
                var e = new D();
                if (!q.Texture2D) throw new Error("WXOpenDataViewer:webgl not found!");
                e.bitmap = new q.Texture2D(), this.texture = e;
            }
            I(O, "laya.ui.WXOpenDataViewer", e);
            var k = O.prototype;
            k.onEnable = function() {
                this.postMsg({
                    type: "display",
                    rate: q.stage.frameRate
                }), T.wx && T.sharedCanvas && q.timer.frameLoop(1, this, this._onLoop);
            }, k.onDisable = function() {
                this.postMsg({
                    type: "undisplay"
                }), q.timer.clear(this, this._onLoop);
            }, k._onLoop = function() {
                this.texture.bitmap.loadImageSource(T.sharedCanvas);
            }, k._postMsg = function() {
                var e = new F();
                e.translate(this.x, this.y);
                var O = q.stage;
                e.scale(O._canvasTransform.getScaleX() * this.globalScaleX * O.transform.getScaleX(), O._canvasTransform.getScaleY() * this.globalScaleY * O.transform.getScaleY()), this.postMsg({
                    type: "changeMatrix",
                    a: e.a,
                    b: e.b,
                    c: e.c,
                    d: e.d,
                    tx: e.tx,
                    ty: e.ty,
                    w: this.width,
                    h: this.height
                });
            }, k.postMsg = function(e) {
                T.wx && T.wx.getOpenDataContext && T.wx.getOpenDataContext().postMessage(e);
            }, u(0, k, "x", e.prototype._$get_x, function(e) {
                q.superSet(m, this, "x", e), this.callLater(this._postMsg);
            }), u(0, k, "width", e.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), T.sharedCanvas && (T.sharedCanvas.width = e), this.callLater(this._postMsg);
            }), u(0, k, "height", e.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), T.sharedCanvas && (T.sharedCanvas.height = e), this.callLater(this._postMsg);
            }), u(0, k, "y", e.prototype._$get_y, function(e) {
                q.superSet(m, this, "y", e), this.callLater(this._postMsg);
            });
        }(m), function(e) {
            function O() {
                this._bgColor = null, O.__super.call(this);
            }
            I(O, "laya.ui.Box", e);
            var k = O.prototype;
            return q.imps(k, {
                "laya.ui.IBox": !0
            }), k._onResize = function(e) {
                this.graphics.clear(), this.graphics.drawRect(0, 0, this.width, this.height, this._bgColor);
            }, u(0, k, "dataSource", e.prototype._$get_dataSource, function(e) {
                for (var O in this._dataSource = e) {
                    var k = this.getChildByName(O);
                    k ? k.dataSource = e[O] : this.hasOwnProperty(O) && "function" != typeof this[O] && (this[O] = e[O]);
                }
            }), u(0, k, "bgColor", function() {
                return this._bgColor;
            }, function(e) {
                (this._bgColor = e) ? (this._onResize(null), this.on("resize", this, this._onResize)) : (this.graphics.clear(), this.off("resize", this, this._onResize));
            }), O;
        }(m)),
        l = function(O) {
            function k(e, O) {
                this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null, this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null, this._clickHandler = null, this._stateChanged = !1, k.__super.call(this), this._labelColors = f.buttonLabelColors, this._stateNum = f.buttonStateNum, void 0 === O && (O = ""), this.skin = e, this.label = O;
            }
            I(k, "laya.ui.Button", O);
            var e = k.prototype;
            return q.imps(e, {
                "laya.ui.ISelect": !0
            }), e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._bitmap && this._bitmap.destroy(), this._text && this._text.destroy(e), this._bitmap = null, this._text = null, this._clickHandler = null, this._labelColors = this._sources = this._strokeColors = null;
            }, e.createChildren = function() {
                this.graphics = this._bitmap = new V();
            }, e.createText = function() {
                this._text || (this._text = new Z(), this._text.overflow = "hidden", this._text.align = "center", this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height);
            }, e.initialize = function() {
                1 !== this._mouseState && (this.mouseEnabled = !0, this._setBit(64, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1), this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1), this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1);
            }, e.onMouse = function(e) {
                if (!1 !== this.toggle || !this._selected) return "click" === e.type ? (this.toggle && (this.selected = !this._selected), void(this._clickHandler && this._clickHandler.run())) : void(!this._selected && (this.state = k.stateMap[e.type]));
            }, e._skinLoaded = function() {
                this.callLater(this.changeClips), this._setStateChanged(), this._sizeChanged(), this.event("loaded");
            }, e.changeClips = function() {
                var e = a.getRes(this._skin);
                if (e) {
                    var O = e.sourceWidth,
                        k = e.sourceHeight / this._stateNum;
                    e.$_GID || (e.$_GID = _.getGID());
                    var T = e.$_GID + "-" + this._stateNum,
                        u = W.I.get(T);
                    if (_.isOkTextureList(u) || (u = null), u) this._sources = u;
                    else {
                        if (this._sources = [], 1 === this._stateNum) this._sources.push(e);
                        else
                            for (var J = 0; J < this._stateNum; J++) this._sources.push(D.createFromTexture(e, 0, k * J, O, k));
                        W.I.set(T, this._sources);
                    }
                    this._autoSize ? (this._bitmap.width = this._width || O, this._bitmap.height = this._height || k, this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = O);
                } else console.log("lose skin", this._skin);
            }, e.measureWidth = function() {
                return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState), this._bitmap.width + (this._text ? this._text.width : 0));
            }, e.measureHeight = function() {
                return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height;
            }, e.changeState = function() {
                this._stateChanged = !1, this.runCallLater(this.changeClips);
                var e = this._state < this._stateNum ? this._state : this._stateNum - 1;
                this._sources && (this._bitmap.source = this._sources[e]), this.label && (this._text.color = this._labelColors[e], this._strokeColors && (this._text.strokeColor = this._strokeColors[e]));
            }, e._setStateChanged = function() {
                this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState));
            }, u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && ((this._skin = e) ? a.getRes(e) ? this._skinLoaded() : q.loader.load(this._skin, C.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), u(0, e, "labelPadding", function() {
                return this.createText(), this._text.padding.join(",");
            }, function(e) {
                this.createText(), this._text.padding = s.fillArray(f.labelPadding, e, Number);
            }), u(0, e, "state", function() {
                return this._state;
            }, function(e) {
                this._state != e && (this._state = e, this._setStateChanged());
            }), u(0, e, "text", function() {
                return this.createText(), this._text;
            }), u(0, e, "stateNum", function() {
                return this._stateNum;
            }, function(e) {
                "string" == typeof e && (e = parseInt(e)), this._stateNum != e && (this._stateNum = e < 1 ? 1 : 3 < e ? 3 : e, this.callLater(this.changeClips));
            }), u(0, e, "label", function() {
                return this._text ? this._text.text : null;
            }, function(e) {
                (this._text || e) && (this.createText(), this._text.text != e && (e && !this._text.parent && this.addChild(this._text), this._text.text = (e + "").replace(/\\n/g, "\n"), this._setStateChanged()));
            }), u(0, e, "labelSize", function() {
                return this.createText(), this._text.fontSize;
            }, function(e) {
                this.createText(), this._text.fontSize = e;
            }), u(0, e, "selected", function() {
                return this._selected;
            }, function(e) {
                this._selected != e && (this._selected = e, this.state = this._selected ? 2 : 0, this.event("change"));
            }), u(0, e, "strokeColors", function() {
                return this._strokeColors ? this._strokeColors.join(",") : "";
            }, function(e) {
                this._strokeColors = s.fillArray(f.buttonLabelColors, e, String), this._setStateChanged();
            }), u(0, e, "labelColors", function() {
                return this._labelColors.join(",");
            }, function(e) {
                this._labelColors = s.fillArray(f.buttonLabelColors, e, String), this._setStateChanged();
            }), u(0, e, "labelStroke", function() {
                return this.createText(), this._text.stroke;
            }, function(e) {
                this.createText(), this._text.stroke = e;
            }), u(0, e, "labelStrokeColor", function() {
                return this.createText(), this._text.strokeColor;
            }, function(e) {
                this.createText(), this._text.strokeColor = e;
            }), u(0, e, "labelBold", function() {
                return this.createText(), this._text.bold;
            }, function(e) {
                this.createText(), this._text.bold = e;
            }), u(0, e, "labelFont", function() {
                return this.createText(), this._text.font;
            }, function(e) {
                this.createText(), this._text.font = e;
            }), u(0, e, "labelAlign", function() {
                return this.createText(), this._text.align;
            }, function(e) {
                this.createText(), this._text.align = e;
            }), u(0, e, "clickHandler", function() {
                return this._clickHandler;
            }, function(e) {
                this._clickHandler = e;
            }), u(0, e, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(e) {
                this._bitmap.sizeGrid = s.fillArray(f.defaultSizeGrid, e, Number);
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), this._autoSize && (this._bitmap.width = e, this._text && (this._text.width = e));
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), this._autoSize && (this._bitmap.height = e, this._text && (this._text.height = e));
            }), u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) || "string" == typeof e ? this.label = e + "" : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "iconOffset", function() {
                return this._bitmap._offset ? this._bitmap._offset.join(",") : null;
            }, function(e) {
                this._bitmap._offset = e ? s.fillArray([1, 1], e, Number) : [];
            }), J(k, ["stateMap", function() {
                return this.stateMap = {
                    mouseup: 0,
                    mouseover: 1,
                    mousedown: 2,
                    mouseout: 0
                };
            }]), k;
        }(m),
        R = function(O) {
            function k(e) {
                this._bitmap = null, this._skin = null, this._group = null, k.__super.call(this), this.skin = e;
            }
            I(k, "laya.ui.Image", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null;
            }, e.dispose = function() {
                this.destroy(!0), q.loader.clearRes(this._skin);
            }, e.createChildren = function() {
                this.graphics = this._bitmap = new V(), this._bitmap.autoCacheCmd = !1;
            }, e.setSource = function(e, O) {
                this.destroyed || e === this._skin && O && (this.source = O, this.onCompResize());
            }, e.measureWidth = function() {
                return this._bitmap.width;
            }, e.measureHeight = function() {
                return this._bitmap.height;
            }, u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "string" == typeof(this._dataSource = e) ? this.skin = e: q.superSet(m, this, "dataSource", e);
            }), u(0, e, "source", function() {
                return this._bitmap.source;
            }, function(e) {
                this._bitmap && (this._bitmap.source = e, this.event("loaded"), this.repaint());
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                if (this._skin != e)
                    if (this._skin = e) {
                        var O = a.getRes(e);
                        O ? (this.source = O, this.onCompResize()) : q.loader.load(this._skin, C.create(this, this.setSource, [this._skin]), null, "image", 1, !0, this._group);
                    } else this.source = null;
            }), u(0, e, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(e) {
                this._bitmap.sizeGrid = s.fillArray(f.defaultSizeGrid, e, Number);
            }), u(0, e, "group", function() {
                return this._group;
            }, function(e) {
                e && this._skin && a.setGroup(this._skin, e), this._group = e;
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), this._bitmap.width = 0 == e ? 1e-7 : e;
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), this._bitmap.height = 0 == e ? 1e-7 : e;
            }), k;
        }(m),
        w = function(O) {
            function k(e) {
                this._tf = null, k.__super.call(this), void 0 === e && (e = ""), this.text = e;
            }
            I(k, "laya.ui.Label", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._tf = null;
            }, e.createChildren = function() {
                this.addChild(this._tf = new Z());
            }, e.changeText = function(e) {
                this._tf.changeText(e);
            }, e.measureWidth = function() {
                return this._tf.width;
            }, e.measureHeight = function() {
                return this._tf.height;
            }, u(0, e, "padding", function() {
                return this._tf.padding.join(",");
            }, function(e) {
                this._tf.padding = s.fillArray(f.labelPadding, e, Number);
            }), u(0, e, "bold", function() {
                return this._tf.bold;
            }, function(e) {
                this._tf.bold = e;
            }), u(0, e, "align", function() {
                return this._tf.align;
            }, function(e) {
                this._tf.align = e;
            }), u(0, e, "text", function() {
                return this._tf.text;
            }, function(e) {
                this._tf.text != e && (e && (e = s.adptString(e + "")), this._tf.text = e, this.event("change"), this._width && this._height || this.onCompResize());
            }), u(0, e, "italic", function() {
                return this._tf.italic;
            }, function(e) {
                this._tf.italic = e;
            }), u(0, e, "wordWrap", function() {
                return this._tf.wordWrap;
            }, function(e) {
                this._tf.wordWrap = e;
            }), u(0, e, "font", function() {
                return this._tf.font;
            }, function(e) {
                this._tf.font = e;
            }), u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) || "string" == typeof e ? this.text = e + "" : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "color", function() {
                return this._tf.color;
            }, function(e) {
                this._tf.color = e;
            }), u(0, e, "valign", function() {
                return this._tf.valign;
            }, function(e) {
                this._tf.valign = e;
            }), u(0, e, "leading", function() {
                return this._tf.leading;
            }, function(e) {
                this._tf.leading = e;
            }), u(0, e, "fontSize", function() {
                return this._tf.fontSize;
            }, function(e) {
                this._tf.fontSize = e;
            }), u(0, e, "bgColor", function() {
                return this._tf.bgColor;
            }, function(e) {
                this._tf.bgColor = e;
            }), u(0, e, "borderColor", function() {
                return this._tf.borderColor;
            }, function(e) {
                this._tf.borderColor = e;
            }), u(0, e, "stroke", function() {
                return this._tf.stroke;
            }, function(e) {
                this._tf.stroke = e;
            }), u(0, e, "strokeColor", function() {
                return this._tf.strokeColor;
            }, function(e) {
                this._tf.strokeColor = e;
            }), u(0, e, "textField", function() {
                return this._tf;
            }), u(0, e, "width", function() {
                return this._width || this._tf.text ? q.superGet(m, this, "width") : 0;
            }, function(e) {
                q.superSet(m, this, "width", e), this._tf.width = e;
            }), u(0, e, "height", function() {
                return this._height || this._tf.text ? q.superGet(m, this, "height") : 0;
            }, function(e) {
                q.superSet(m, this, "height", e), this._tf.height = e;
            }), u(0, e, "overflow", function() {
                return this._tf.overflow;
            }, function(e) {
                this._tf.overflow = e;
            }), u(0, e, "underline", function() {
                return this._tf.underline;
            }, function(e) {
                this._tf.underline = e;
            }), u(0, e, "underlineColor", function() {
                return this._tf.underlineColor;
            }, function(e) {
                this._tf.underlineColor = e;
            }), k;
        }(m),
        h = function(O) {
            function k(e, O) {
                this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1, this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null, this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1, this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, k.__super.call(this), this._itemColors = f.comboBoxItemColors, this.skin = e, this.labels = O;
            }
            I(k, "laya.ui.ComboBox", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._button && this._button.destroy(e), this._list && this._list.destroy(e), this._button = null, this._list = null, this._itemColors = null, this._labels = null, this._selectHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._button = new l()), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5", this._button.on("mousedown", this, this.onButtonMouseDown);
            }, e._createList = function() {
                this._list = new Te(), this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin), this._setListEvent(this._list);
            }, e._setListEvent = function(e) {
                this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown), this._list.mouseHandler = C.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown);
            }, e.onListDown = function(e) {
                e.stopPropagation();
            }, e.onScrollBarDown = function(e) {
                e.stopPropagation();
            }, e.onButtonMouseDown = function(e) {
                this.callLater(this.switchTo, [!this._isOpen]);
            }, e.measureWidth = function() {
                return this._button.width;
            }, e.measureHeight = function() {
                return this._button.height;
            }, e.changeList = function() {
                this._listChanged = !1;
                var e = this.width - 2,
                    O = this._itemColors[2];
                this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                    type: "Box",
                    child: [{
                        type: "Label",
                        props: {
                            name: "label",
                            x: 1,
                            padding: "3,3,3,3",
                            width: e,
                            height: this._itemHeight,
                            fontSize: this._itemSize,
                            color: O
                        }
                    }]
                }, this._list.repeatY = this._visibleNum, this._list.refresh();
            }, e.onlistItemMouse = function(e, O) {
                var k = e.type;
                if ("mouseover" === k || "mouseout" === k) {
                    if (this._isCustomList) return;
                    var T = this._list.getCell(O);
                    if (!T) return;
                    var u = T.getChildByName("label");
                    u && (u.color = "mouseover" === k ? (u.bgColor = this._itemColors[0], this._itemColors[1]) : (u.bgColor = null, this._itemColors[2]));
                } else "click" === k && (this.selectedIndex = O, this.isOpen = !1);
            }, e.switchTo = function(e) {
                this.isOpen = e;
            }, e.changeOpen = function() {
                this.isOpen = !this._isOpen;
            }, e.changeItem = function() {
                if (this._itemChanged = !1, this._listHeight = 0 < this._labels.length ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, !this._isCustomList) {
                    var e = this._list.graphics;
                    e.clear(!0), e.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
                }
                for (var O = this._list.array || [], k = O.length = 0, T = this._labels.length; k < T; k++) O.push({
                    label: this._labels[k]
                });
                this._list.height = this._listHeight, this._list.array = O;
            }, e.changeSelected = function() {
                this._button.label = this.selectedLabel;
            }, e._onStageMouseWheel = function(e) {
                this._list && !this._list.contains(e.target) && this.removeList(null);
            }, e.removeList = function(e) {
                q.stage.off("mousedown", this, this.removeList), q.stage.off("mousewheel", this, this._onStageMouseWheel), this.isOpen = !1;
            }, u(0, e, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this._selectedIndex = e, 0 < this._labels.length ? this.changeSelected() : this.callLater(this.changeSelected), this.event("change", [P.EMPTY.setTo("change", this, this)]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex));
            }), u(0, e, "skin", function() {
                return this._button.skin;
            }, function(e) {
                this._button.skin != e && (this._button.skin = e, this._listChanged = !0);
            }), u(0, e, "visibleNum", function() {
                return this._visibleNum;
            }, function(e) {
                this._visibleNum = e, this._listChanged = !0;
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), this._button.width = this._width, this._itemChanged = !0, this._listChanged = !0;
            }), u(0, e, "selectedLabel", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null;
            }, function(e) {
                this.selectedIndex = this._labels.indexOf(e);
            }), u(0, e, "labels", function() {
                return this._labels.join(",");
            }, function(e) {
                0 < this._labels.length && (this.selectedIndex = -1), e ? this._labels = e.split(",") : this._labels.length = 0, this._itemChanged = !0;
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), this._button.height = this._height;
            }), u(0, e, "selectHandler", function() {
                return this._selectHandler;
            }, function(e) {
                this._selectHandler = e;
            }), u(0, e, "labelBold", function() {
                return this._button.text.bold;
            }, function(e) {
                this._button.text.bold = e;
            }), u(0, e, "itemColors", function() {
                return String(this._itemColors);
            }, function(e) {
                this._itemColors = s.fillArray(this._itemColors, e, String), this._listChanged = !0;
            }), u(0, e, "itemSize", function() {
                return this._itemSize;
            }, function(e) {
                this._itemSize = e, this._listChanged = !0;
            }), u(0, e, "scrollBar", function() {
                return this.list.scrollBar;
            }), u(0, e, "isOpen", function() {
                return this._isOpen;
            }, function(e) {
                if (this._isOpen != e)
                    if (this._isOpen = e, this._button.selected = this._isOpen, this._isOpen) {
                        this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(), this._itemChanged && this.changeItem();
                        var O = this.localToGlobal(t.TEMP.setTo(0, 0)),
                            k = O.y + this._button.height;
                        k = k + this._listHeight <= q.stage.height ? k : O.y - this._listHeight, this._list.pos(O.x, k), this._list.zOrder = 1001, q._currentStage.addChild(this._list), q.stage.once("mousedown", this, this.removeList), q.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex;
                    } else this._list && this._list.removeSelf();
            }), u(0, e, "scrollBarSkin", function() {
                return this._scrollBarSkin;
            }, function(e) {
                this._scrollBarSkin = e;
            }), u(0, e, "sizeGrid", function() {
                return this._button.sizeGrid;
            }, function(e) {
                this._button.sizeGrid = e;
            }), u(0, e, "button", function() {
                return this._button;
            }), u(0, e, "list", function() {
                return this._list || this._createList(), this._list;
            }, function(e) {
                e && (e.removeSelf(), this._isCustomList = !0, this._list = e, this._setListEvent(e), this._itemHeight = e.getCell(0).height + e.spaceY);
            }), u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) && Math.floor(e) == e || "string" == typeof e ? this.selectedIndex = parseInt(e) : e instanceof Array ? this.labels = e.join(",") : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "labelColors", function() {
                return this._button.labelColors;
            }, function(e) {
                this._button.labelColors != e && (this._button.labelColors = e);
            }), u(0, e, "labelPadding", function() {
                return this._button.text.padding.join(",");
            }, function(e) {
                this._button.text.padding = s.fillArray(f.labelPadding, e, Number);
            }), u(0, e, "labelSize", function() {
                return this._button.text.fontSize;
            }, function(e) {
                this._button.text.fontSize = e;
            }), u(0, e, "labelFont", function() {
                return this._button.text.font;
            }, function(e) {
                this._button.text.font = e;
            }), u(0, e, "stateNum", function() {
                return this._button.stateNum;
            }, function(e) {
                this._button.stateNum = e;
            }), k;
        }(m),
        c = (function(e) {
            function k() {
                this._tipBox = null, this._tipText = null, this._defaultTipHandler = null, k.__super.call(this), this._tipBox = new m(), this._tipBox.addChild(this._tipText = new Z()), this._tipText.x = this._tipText.y = 5, this._tipText.color = k.tipTextColor, this._defaultTipHandler = this._showDefaultTip, q.stage.on("showtip", this, this._onStageShowTip), q.stage.on("hidetip", this, this._onStageHideTip), this.zOrder = 1100;
            }
            I(k, "laya.ui.TipManager", m);
            var O = k.prototype;
            O._onStageHideTip = function(e) {
                q.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf();
            }, O._onStageShowTip = function(e) {
                q.timer.once(k.tipDelay, this, this._showTip, [e], !0);
            }, O._showTip = function(e) {
                if ("string" == typeof e) {
                    var O = String(e);
                    Boolean(O) && this._defaultTipHandler(O);
                } else e instanceof laya.utils.Handler ? e.run() : "function" == typeof e && e.apply();
                q.stage.on("mousemove", this, this._onStageMouseMove), q.stage.on("mousedown", this, this._onStageMouseDown), this._onStageMouseMove(null);
            }, O._onStageMouseDown = function(e) {
                this.closeAll();
            }, O._onStageMouseMove = function(e) {
                this._showToStage(this, k.offsetX, k.offsetY);
            }, O._showToStage = function(e, O, k) {
                void 0 === O && (O = 0), void 0 === k && (k = 0);
                var T = e.getBounds();
                e.x = q.stage.mouseX + O, e.y = q.stage.mouseY + k, e._x + T.width > q.stage.width && (e.x -= T.width + O), e._y + T.height > q.stage.height && (e.y -= T.height + k);
            }, O.closeAll = function() {
                q.timer.clear(this, this._showTip), q.stage.off("mousemove", this, this._onStageMouseMove), q.stage.off("mousedown", this, this._onStageMouseDown), this.removeChildren();
            }, O.showDislayTip = function(e) {
                this.addChild(e), this._showToStage(this), q._currentStage.addChild(this);
            }, O._showDefaultTip = function(e) {
                this._tipText.text = e;
                var O = this._tipBox.graphics;
                O.clear(!0), O.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, k.tipBackColor), this.addChild(this._tipBox), this._showToStage(this), q._currentStage.addChild(this);
            }, u(0, O, "defaultTipHandler", function() {
                return this._defaultTipHandler;
            }, function(e) {
                this._defaultTipHandler = e;
            }), k.offsetX = 10, k.offsetY = 15, k.tipTextColor = "#ffffff", k.tipBackColor = "#111111", k.tipDelay = 200;
        }(), function(O) {
            function T(e, O, k) {
                this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1, this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50, this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1, this._group = null, this._toIndex = -1, T.__super.call(this), void 0 === O && (O = 1), void 0 === k && (k = 1), this._clipX = O, this._clipY = k, this.skin = e;
            }
            I(T, "laya.ui.Clip", O);
            var e = T.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), this._bitmap = null, this._sources = null;
            }, e.dispose = function() {
                this.destroy(!0), q.loader.clearRes(this._skin);
            }, e.createChildren = function() {
                this.graphics = this._bitmap = new V();
            }, e._onDisplay = function(e) {
                this._isPlaying ? this._getBit(128) ? this.play() : this.stop() : this._autoPlay && this.play();
            }, e._skinLoaded = function() {
                this._setClipChanged(), this._sizeChanged(), this.event("loaded");
            }, e.changeClip = function() {
                if (this._clipChanged = !1, this._skin) {
                    var e = a.getRes(this._skin);
                    e ? this.loadComplete(this._skin, e) : q.loader.load(this._skin, C.create(this, this.loadComplete, [this._skin]));
                }
            }, e.loadComplete = function(e, O) {
                if (e === this._skin && O) {
                    var k = this._clipWidth || Math.ceil(O.sourceWidth / this._clipX),
                        T = this._clipHeight || Math.ceil(O.sourceHeight / this._clipY),
                        u = this._skin + k + T,
                        J = W.I.get(u);
                    if (_.isOkTextureList(J) || (J = null), J) this._sources = J;
                    else {
                        this._sources = [];
                        for (var A = 0; A < this._clipY; A++)
                            for (var B = 0; B < this._clipX; B++) this._sources.push(D.createFromTexture(O, k * B, T * A, k, T));
                        W.I.set(u, this._sources);
                    }
                    this.index = this._index, this.event("loaded"), this.onCompResize();
                }
            }, e.measureWidth = function() {
                return this.runCallLater(this.changeClip), this._bitmap.width;
            }, e.measureHeight = function() {
                return this.runCallLater(this.changeClip), this._bitmap.height;
            }, e.play = function(e, O) {
                void 0 === e && (e = 0), void 0 === O && (O = -1), this._isPlaying = !0, this.index = e, this._toIndex = O, this._index++, q.timer.loop(this.interval, this, this._loop), this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay);
            }, e._loop = function() {
                this._visible && this._sources && (this._index++, -1 < this._toIndex && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0), this.index = this._index);
            }, e.stop = function() {
                this._isPlaying = !1, q.timer.clear(this, this._loop), this.event("complete");
            }, e._setClipChanged = function() {
                this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip));
            }, u(0, e, "interval", function() {
                return this._interval;
            }, function(e) {
                this._interval != e && (this._interval = e, this._isPlaying && this.play());
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && ((this._skin = e) ? a.getRes(e) ? this._skinLoaded() : q.loader.load(this._skin, C.create(this, this._skinLoaded), null, "image", 1) : this._bitmap.source = null);
            }), u(0, e, "sources", function() {
                return this._sources;
            }, function(e) {
                this._sources = e, this.index = this._index, this.event("loaded");
            }), u(0, e, "clipX", function() {
                return this._clipX;
            }, function(e) {
                this._clipX = e || 1, this._setClipChanged();
            }), u(0, e, "clipY", function() {
                return this._clipY;
            }, function(e) {
                this._clipY = e || 1, this._setClipChanged();
            }), u(0, e, "total", function() {
                return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0;
            }), u(0, e, "clipWidth", function() {
                return this._clipWidth;
            }, function(e) {
                this._clipWidth = e, this._setClipChanged();
            }), u(0, e, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(e) {
                this._bitmap.sizeGrid = s.fillArray(f.defaultSizeGrid, e, Number);
            }), u(0, e, "group", function() {
                return this._group;
            }, function(e) {
                e && this._skin && a.setGroup(this._skin, e), this._group = e;
            }), u(0, e, "clipHeight", function() {
                return this._clipHeight;
            }, function(e) {
                this._clipHeight = e, this._setClipChanged();
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), this._bitmap.width = e;
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), this._bitmap.height = e;
            }), u(0, e, "index", function() {
                return this._index;
            }, function(e) {
                this._index = e, this._bitmap && this._sources && (this._bitmap.source = this._sources[e]), this.event("change");
            }), u(0, e, "autoPlay", function() {
                return this._autoPlay;
            }, function(e) {
                this._autoPlay != e && ((this._autoPlay = e) ? this.play() : this.stop());
            }), u(0, e, "isPlaying", function() {
                return this._isPlaying;
            }, function(e) {
                this._isPlaying = e;
            }), u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) && Math.floor(e) == e || "string" == typeof e ? this.index = parseInt(e) : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "bitmap", function() {
                return this._bitmap;
            }), T;
        }(m)),
        S = function(O) {
            function e() {
                this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000", this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, e.__super.call(this);
            }
            I(e, "laya.ui.ColorPicker", O);
            var k = e.prototype;
            return k.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._colorPanel && this._colorPanel.destroy(e), this._colorButton && this._colorButton.destroy(e), this._colorPanel = null, this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null, this.changeHandler = null;
            }, k.createChildren = function() {
                this.addChild(this._colorButton = new l()), this._colorPanel = new y(), this._colorPanel.size(230, 166), this._colorPanel.addChild(this._colorTiles = new K()), this._colorPanel.addChild(this._colorBlock = new K()), this._colorPanel.addChild(this._colorInput = new j());
            }, k.initialize = function() {
                this._colorButton.on("click", this, this.onColorButtonClick), this._colorBlock.pos(5, 5), this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on("change", this, this.onColorInputChange), this._colorInput.on("keydown", this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30), this._colorTiles.on("mousemove", this, this.onColorTilesMouseMove), this._colorTiles.on("click", this, this.onColorTilesClick), this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on("mousedown", this, this.onPanelMouseDown), this.bgColor = this._bgColor;
            }, k.onPanelMouseDown = function(e) {
                e.stopPropagation();
            }, k.changePanel = function() {
                this._panelChanged = !1;
                var e = this._colorPanel.graphics;
                e.clear(!0), e.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor), this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor, this._colorInput.color = this._inputColor, (e = this._colorTiles.graphics).clear(!0);
                for (var O = [0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935], k = 0; k < 12; k++)
                    for (var T = 0; T < 20; T++) {
                        var u = 0;
                        u = 0 === T ? O[k] : 1 === T ? 0 : 51 * (((3 * k + T / 6) % 3 << 0) + 3 * (k / 6 << 0)) << 16 | T % 6 * 51 << 8 | (k << 0) % 6 * 51;
                        var J = s.toColor(u);
                        this._colors.push(J);
                        var A = T * this._gridSize,
                            B = k * this._gridSize;
                        e.drawRect(A, B, this._gridSize, this._gridSize, J, "#000000");
                    }
            }, k.onColorButtonClick = function(e) {
                this._colorPanel.parent ? this.close() : this.open();
            }, k.open = function() {
                var e = this.localToGlobal(new t()),
                    O = e.x + this._colorPanel.width <= q.stage.width ? e.x : q.stage.width - this._colorPanel.width,
                    k = e.y + this._colorButton.height;
                k = k + this._colorPanel.height <= q.stage.height ? k : e.y - this._colorPanel.height, this._colorPanel.pos(O, k), this._colorPanel.zOrder = 1001, q._currentStage.addChild(this._colorPanel), q.stage.on("mousedown", this, this.removeColorBox);
            }, k.close = function() {
                q.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf();
            }, k.removeColorBox = function(e) {
                this.close();
            }, k.onColorFieldKeyDown = function(e) {
                13 == e.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null, this.close(), e.stopPropagation());
            }, k.onColorInputChange = function(e) {
                this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF");
            }, k.onColorTilesClick = function(e) {
                this.selectedColor = this.getColorByMouse(), this.close();
            }, k.onColorTilesMouseMove = function(e) {
                this._colorInput.focus = !1;
                var O = this.getColorByMouse();
                this._colorInput.text = O, this.drawBlock(O);
            }, k.getColorByMouse = function() {
                var e = this._colorTiles.getMousePoint(),
                    O = Math.floor(e.x / this._gridSize),
                    k = Math.floor(e.y / this._gridSize);
                return this._colors[20 * k + O];
            }, k.drawBlock = function(e) {
                var O = this._colorBlock.graphics;
                O.clear(!0);
                var k = e || "#ffffff";
                O.drawRect(0, 0, 50, 20, k, this._borderColor), e || O.drawLine(0, 0, 50, 20, "#ff0000");
            }, k.changeColor = function() {
                var e = this.graphics;
                e.clear(!0);
                var O = this._selectedColor || "#000000";
                e.drawRect(0, 0, this._colorButton.width, this._colorButton.height, O);
            }, k._setPanelChanged = function() {
                this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel));
            }, u(0, k, "inputBgColor", function() {
                return this._inputBgColor;
            }, function(e) {
                this._inputBgColor = e, this._setPanelChanged();
            }), u(0, k, "selectedColor", function() {
                return this._selectedColor;
            }, function(e) {
                this._selectedColor != e && (this._selectedColor = this._colorInput.text = e, this.drawBlock(e), this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor), this.event("change", P.EMPTY.setTo("change", this, this)));
            }), u(0, k, "skin", function() {
                return this._colorButton.skin;
            }, function(e) {
                this._colorButton.once("loaded", this, this.changeColor), this._colorButton.skin = e;
            }), u(0, k, "bgColor", function() {
                return this._bgColor;
            }, function(e) {
                this._bgColor = e, this._setPanelChanged();
            }), u(0, k, "borderColor", function() {
                return this._borderColor;
            }, function(e) {
                this._borderColor = e, this._setPanelChanged();
            }), u(0, k, "inputColor", function() {
                return this._inputColor;
            }, function(e) {
                this._inputColor = e, this._setPanelChanged();
            }), e;
        }(m),
        H = function(O) {
            function k(e) {
                this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null, this._value = .5, k.__super.call(this), this.skin = e;
            }
            I(k, "laya.ui.ProgressBar", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), this._bar && this._bar.destroy(e), this._bg = this._bar = null, this.changeHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._bg = new R()), this.addChild(this._bar = new R()), this._bar._bitmap.autoCacheCmd = !1;
            }, e._skinLoaded = function() {
                this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"), this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
            }, e.measureWidth = function() {
                return this._bg.width;
            }, e.measureHeight = function() {
                return this._bg.height;
            }, e.changeValue = function() {
                if (this.sizeGrid) {
                    var e = this.sizeGrid.split(","),
                        O = Number(e[3]),
                        k = Number(e[1]),
                        T = (this.width - O - k) * this._value;
                    this._bar.width = O + k + T, this._bar.visible = this._bar.width > O + k;
                } else this._bar.width = this.width * this._value;
            }, u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) || "string" == typeof e ? this.value = Number(e) : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && (this._skin = e, this._skin && !a.getRes(this._skin) ? q.loader.load(this._skin, C.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(m, this, "height", e), this._bg.height = this._height, this._bar.height = this._height;
            }), u(0, e, "bar", function() {
                return this._bar;
            }), u(0, e, "value", function() {
                return this._value;
            }, function(e) {
                this._value != e && (e = 1 < e ? 1 : e < 0 ? 0 : e, this._value = e, this.callLater(this.changeValue), this.event("change"), this.changeHandler && this.changeHandler.runWith(e));
            }), u(0, e, "bg", function() {
                return this._bg;
            }), u(0, e, "sizeGrid", function() {
                return this._bg.sizeGrid;
            }, function(e) {
                this._bg.sizeGrid = this._bar.sizeGrid = e;
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(m, this, "width", e), this._bg.width = this._width, this.callLater(this.changeValue);
            }), k;
        }(m),
        b = function(O) {
            function k(e) {
                this.rollRatio = .97, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1, this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null, this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1, this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1, this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0, this._offsets = null, this.isLockedFun = null, this.triggerDownDragLimit = null, this.triggerUpDragLimit = null, k.__super.call(this), this._showButtons = o.showButtons, this._touchScrollEnable = o.touchScrollEnable, this._mouseWheelEnable = o.mouseWheelEnable, this.skin = e, this.max = 1;
            }
            I(k, "laya.ui.ScrollBar", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), this.stopScroll(), this.target = null, O.prototype.destroy.call(this, e), this.upButton && this.upButton.destroy(e), this.downButton && this.downButton.destroy(e), this.slider && this.slider.destroy(e), this.upButton = this.downButton = null, this.slider = null, this.changeHandler = null, this._offsets = null;
            }, e.createChildren = function() {
                this.addChild(this.slider = new L()), this.addChild(this.upButton = new l()), this.addChild(this.downButton = new l());
            }, e.initialize = function() {
                this.slider.showLabel = !1, this.slider.tick = 0, this.slider.on("change", this, this.onSliderChange), this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown), this.downButton.on("mousedown", this, this.onButtonMouseDown);
            }, e.onSliderChange = function() {
                this._value != this.slider.value && (this.value = this.slider.value);
            }, e.onButtonMouseDown = function(e) {
                var O = e.currentTarget === this.upButton;
                this.slide(O), q.timer.once(f.scrollBarDelayTime, this, this.startLoop, [O]), q.stage.once("mouseup", this, this.onStageMouseUp);
            }, e.startLoop = function(e) {
                q.timer.frameLoop(1, this, this.slide, [e]);
            }, e.slide = function(e) {
                e ? this.value -= this._scrollSize : this.value += this._scrollSize;
            }, e.onStageMouseUp = function(e) {
                q.timer.clear(this, this.startLoop), q.timer.clear(this, this.slide);
            }, e._skinLoaded = function() {
                this.slider.skin = this._skin, this.callLater(this.changeScrollBar), this._sizeChanged(), this.event("loaded");
            }, e.changeScrollBar = function() {
                this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons, this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"), this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0, this.resetPositions(), this.repaint();
            }, e._sizeChanged = function() {
                O.prototype._sizeChanged.call(this), this.repaint(), this.resetPositions(), this.event("change"), this.changeHandler && this.changeHandler.runWith(this.value);
            }, e.resetPositions = function() {
                this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0), this.resetButtonPosition();
            }, e.resetButtonPosition = function() {
                this.slider.isVertical ? this.downButton.y = this.slider._y + this.slider.height : this.downButton.x = this.slider._x + this.slider.width;
            }, e.measureWidth = function() {
                return this.slider.isVertical ? this.slider.width : 100;
            }, e.measureHeight = function() {
                return this.slider.isVertical ? 100 : this.slider.height;
            }, e.setScroll = function(e, O, k) {
                this.runCallLater(this._sizeChanged), this.slider.setSlider(e, O, k), this.slider.bar.visible = 0 < O, !this._hide && this.autoHide && (this.visible = !1);
            }, e.onTargetMouseWheel = function(e) {
                this.value -= e.delta * this._scrollSize, this.target = this._target;
            }, e.onTargetMouseDown = function(e) {
                this.isLockedFun && !this.isLockedFun(e) || (this.event("end"), this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new t()), this._lastPoint.setTo(q.stage.mouseX, q.stage.mouseY), q.timer.clear(this, this.tweenMove), M.clearTween(this), q.stage.once("mouseup", this, this.onStageMouseUp2), q.stage.once("mouseout", this, this.onStageMouseUp2), q.timer.frameLoop(1, this, this.loop));
            }, e.startDragForce = function() {
                this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new t()), this._lastPoint.setTo(q.stage.mouseX, q.stage.mouseY), q.timer.clear(this, this.tweenMove), M.clearTween(this), q.stage.once("mouseup", this, this.onStageMouseUp2), q.stage.once("mouseout", this, this.onStageMouseUp2), q.timer.frameLoop(1, this, this.loop);
            }, e.cancelDragOp = function() {
                q.stage.off("mouseup", this, this.onStageMouseUp2), q.stage.off("mouseout", this, this.onStageMouseUp2), q.timer.clear(this, this.tweenMove), q.timer.clear(this, this.loop), this._target.mouseEnabled = !0;
            }, e.checkTriggers = function(e) {
                return void 0 === e && (e = !1), 0 <= this.value && this.value - this._lastOffset <= 0 && this.triggerDownDragLimit && this.triggerDownDragLimit(e) ? (this.cancelDragOp(), !(this.value = 0)) : !!(this.value <= this.max && this.value - this._lastOffset >= this.max && this.triggerUpDragLimit && this.triggerUpDragLimit(e)) && (this.cancelDragOp(), this.value = this.max, !0);
            }, e.startTweenMoveForce = function(e) {
                this._lastOffset = e, q.timer.frameLoop(1, this, this.tweenMove, [200]);
            }, e.loop = function() {
                var e = q.stage.mouseY,
                    O = q.stage.mouseX;
                if (this._lastOffset = this.isVertical ? e - this._lastPoint.y : O - this._lastPoint.x, this._clickOnly) {
                    if (!(1 < Math.abs(this._lastOffset * (this.isVertical ? q.stage._canvasTransform.getScaleY() : q.stage._canvasTransform.getScaleX())))) return;
                    if (this._clickOnly = !1, this.checkTriggers()) return;
                    this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event("start");
                } else if (this.checkTriggers()) return;
                this._offsets.push(this._lastOffset), this._lastPoint.x = O, this._lastPoint.y = e, 0 !== this._lastOffset && (this._checkElastic || (0 < this.elasticDistance ? this._checkElastic || 0 == this._lastOffset || (0 < this._lastOffset && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0, this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? 0 < this._lastOffset ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : (this.value -= .5 * this._lastOffset, this._value >= this.min && (this._checkElastic = !1)) : this._value >= this.max && (this._lastOffset < 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance) : (this.value -= .5 * this._lastOffset, this._value <= this.max && (this._checkElastic = !1))) : this.value -= this._lastOffset);
            }, e.onStageMouseUp2 = function(e) {
                if (q.stage.off("mouseup", this, this.onStageMouseUp2), q.stage.off("mouseout", this, this.onStageMouseUp2), q.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max))
                    if (this._target.mouseEnabled = !0, this._isElastic) this._value < this.min ? M.to(this, {
                        value: this.min
                    }, this.elasticBackTime, x.sineOut, C.create(this, this.elasticOver)) : this._value > this.max && M.to(this, {
                        value: this.max
                    }, this.elasticBackTime, x.sineOut, C.create(this, this.elasticOver));
                    else {
                        if (!this._offsets) return;
                        this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? q.stage.mouseY - this._lastPoint.y : q.stage.mouseX - this._lastPoint.x);
                        for (var O = 0, k = Math.min(this._offsets.length, 3), T = 0; T < k; T++) O += this._offsets[this._offsets.length - 1 - T];
                        if (this._lastOffset = O / k, (O = Math.abs(this._lastOffset)) < 2) return void this.event("end");
                        250 < O && (this._lastOffset = 0 < this._lastOffset ? 250 : -250);
                        var u = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 150)));
                        q.timer.frameLoop(1, this, this.tweenMove, [u]);
                    }
            }, e.elasticOver = function() {
                this._isElastic = !1, !this.hide && this.autoHide && M.to(this, {
                    alpha: 0
                }, 500), this.event("end");
            }, e.tweenMove = function(e) {
                if (this._lastOffset *= this.rollRatio, !this.checkTriggers(!0)) {
                    var O = NaN;
                    if (0 < e && (0 < this._lastOffset && this.value <= this.min ? (this._isElastic = !0, O = .5 * -(this.min - e - this.value), this._lastOffset > O && (this._lastOffset = O)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0, O = .5 * -(this.max + e - this.value), this._lastOffset < O && (this._lastOffset = O))), this.value -= this._lastOffset, Math.abs(this._lastOffset) < .1) {
                        if (q.timer.clear(this, this.tweenMove), this._isElastic) return void(this._value < this.min ? M.to(this, {
                            value: this.min
                        }, this.elasticBackTime, x.sineOut, C.create(this, this.elasticOver)) : this._value > this.max ? M.to(this, {
                            value: this.max
                        }, this.elasticBackTime, x.sineOut, C.create(this, this.elasticOver)) : this.elasticOver());
                        this.event("end"), !this.hide && this.autoHide && M.to(this, {
                            alpha: 0
                        }, 500);
                    }
                }
            }, e.stopScroll = function() {
                this.onStageMouseUp2(null), q.timer.clear(this, this.tweenMove), M.clearTween(this);
            }, u(0, e, "thumbPercent", function() {
                return this._thumbPercent;
            }, function(e) {
                this.runCallLater(this.changeScrollBar), this.runCallLater(this._sizeChanged), e = 1 <= e ? .99 : e, this._thumbPercent = e, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * e, f.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * e, f.scrollBarMinNum));
            }), u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) || "string" == typeof e ? this.value = Number(e) : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                " " != e && this._skin != e && (this._skin = e, this._skin && !a.getRes(this._skin) ? q.loader.load([this._skin, this._skin.replace(".png", "$up.png"), this._skin.replace(".png", "$down.png"), this._skin.replace(".png", "$bar.png")], C.create(this, this._skinLoaded)) : this._skinLoaded());
            }), u(0, e, "max", function() {
                return this.slider.max;
            }, function(e) {
                this.slider.max = e;
            }), u(0, e, "min", function() {
                return this.slider.min;
            }, function(e) {
                this.slider.min = e;
            }), u(0, e, "value", function() {
                return this._value;
            }, function(e) {
                e !== this._value && (this._value = e, this._isElastic || (this.slider._value != e && (this.slider._value = e, this.slider.changeValue()), this._value = this.slider._value), this.event("change"), this.changeHandler && this.changeHandler.runWith(this._value));
            }), u(0, e, "isVertical", function() {
                return this.slider.isVertical;
            }, function(e) {
                this.slider.isVertical = e;
            }), u(0, e, "sizeGrid", function() {
                return this.slider.sizeGrid;
            }, function(e) {
                this.slider.sizeGrid = e;
            }), u(0, e, "scrollSize", function() {
                return this._scrollSize;
            }, function(e) {
                this._scrollSize = e;
            }), u(0, e, "target", function() {
                return this._target;
            }, function(e) {
                this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel), this._target.off("mousedown", this, this.onTargetMouseDown)), (this._target = e) && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel), this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown));
            }), u(0, e, "hide", function() {
                return this._hide;
            }, function(e) {
                this._hide = e, this.visible = !e;
            }), u(0, e, "showButtons", function() {
                return this._showButtons;
            }, function(e) {
                this._showButtons = e, this.callLater(this.changeScrollBar);
            }), u(0, e, "touchScrollEnable", function() {
                return this._touchScrollEnable;
            }, function(e) {
                this._touchScrollEnable = e, this.target = this._target;
            }), u(0, e, "mouseWheelEnable", function() {
                return this._mouseWheelEnable;
            }, function(e) {
                this._mouseWheelEnable = e, this.target = this._target;
            }), u(0, e, "lastOffset", function() {
                return this._lastOffset;
            }), u(0, e, "tick", function() {
                return this.slider.tick;
            }, function(e) {
                this.slider.tick = e;
            }), k;
        }(m),
        L = function(O) {
            function k(e) {
                this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1, this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null, this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN, this._maxMove = NaN, this._globalSacle = null, k.__super.call(this), this.skin = e;
            }
            I(k, "laya.ui.Slider", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), this._bar && this._bar.destroy(e), this._progress && this._progress.destroy(e), this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._bg = new R()), this.addChild(this._bar = new l());
            }, e.initialize = function() {
                this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0", this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0;
            }, e.onBarMouseDown = function(e) {
                this._globalSacle || (this._globalSacle = new t()), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01), this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width, this._tx = q.stage.mouseX, this._ty = q.stage.mouseY, q.stage.on("mousemove", this, this.mouseMove), q.stage.once("mouseup", this, this.mouseUp), q.stage.once("mouseout", this, this.mouseUp), this.showValueText();
            }, e.showValueText = function() {
                if (this.showLabel) {
                    var e = laya.ui.Slider.label;
                    this.addChild(e), e.textField.changeText(this._value + ""), this.isVertical ? (e.x = this._bar._x + 20, e.y = .5 * (this._bar.height - e.height) + this._bar._y) : (e.y = this._bar._y - 20, e.x = .5 * (this._bar.width - e.width) + this._bar._x);
                }
            }, e.hideValueText = function() {
                laya.ui.Slider.label && laya.ui.Slider.label.removeSelf();
            }, e.mouseUp = function(e) {
                q.stage.off("mousemove", this, this.mouseMove), q.stage.off("mouseup", this, this.mouseUp), q.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText();
            }, e.mouseMove = function(e) {
                var O = this._value;
                if (this.isVertical ? (this._bar.y += (q.stage.mouseY - this._ty) / this._globalSacle.y, this._bar._y > this._maxMove ? this._bar.y = this._maxMove : this._bar._y < 0 && (this._bar.y = 0), this._value = this._bar._y / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x += (q.stage.mouseX - this._tx) / this._globalSacle.x, this._bar._x > this._maxMove ? this._bar.x = this._maxMove : this._bar._x < 0 && (this._bar.x = 0), this._value = this._bar._x / this._maxMove * (this._max - this._min) + this._min, this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width)), this._tx = q.stage.mouseX, this._ty = q.stage.mouseY, 0 != this._tick) {
                    var k = Math.pow(10, (this._tick + "").length - 1);
                    this._value = Math.round(Math.round(this._value / this._tick) * this._tick * k) / k;
                }
                this._value != O && this.sendChangeEvent(), this.showValueText();
            }, e.sendChangeEvent = function(e) {
                void 0 === e && (e = "change"), this.event(e), this.changeHandler && this.changeHandler.runWith(this._value);
            }, e._skinLoaded = function() {
                this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
                var e = this._skin.replace(".png", "$progress.png");
                a.getRes(e) && (this._progress || (this.addChild(this._progress = new R()), this._progress.sizeGrid = this._bar.sizeGrid, this.setChildIndex(this._progress, 1)), this._progress.skin = e), this.setBarPoint(), this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
            }, e.setBarPoint = function() {
                this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height));
            }, e.measureWidth = function() {
                return Math.max(this._bg.width, this._bar.width);
            }, e.measureHeight = function() {
                return Math.max(this._bg.height, this._bar.height);
            }, e._sizeChanged = function() {
                O.prototype._sizeChanged.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width, this.setBarPoint(), this.changeValue();
            }, e.setSlider = function(e, O, k) {
                this._value = -1, this._min = e, this._max = e < O ? O : e, this.value = k < e ? e : O < k ? O : k;
            }, e.changeValue = function() {
                if (0 != this.tick) {
                    var e = Math.pow(10, (this._tick + "").length - 1);
                    this._value = Math.round(Math.round(this._value / this._tick) * this._tick * e) / e;
                }
                this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
                var O = this._max - this._min;
                0 === O && (O = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / O * (this.height - this._bar.height), this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / O * (this.width - this._bar.width), this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width));
            }, e.onBgMouseDown = function(e) {
                var O = this._bg.getMousePoint();
                this.isVertical ? this.value = O.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = O.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
            }, u(0, e, "dataSource", O.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) || "string" == typeof e ? this.value = Number(e) : q.superSet(m, this, "dataSource", e);
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && (this._skin = e, this._skin && !a.getRes(this._skin) ? q.loader.load([this._skin, this._skin.replace(".png", "$bar.png")], C.create(this, this._skinLoaded)) : this._skinLoaded());
            }), u(0, e, "tick", function() {
                return this._tick;
            }, function(e) {
                this._tick != e && (this._tick = e, this.callLater(this.changeValue));
            }), u(0, e, "sizeGrid", function() {
                return this._bg.sizeGrid;
            }, function(e) {
                this._bg.sizeGrid = e, this._bar.sizeGrid = e, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid);
            }), u(0, e, "allowClickBack", function() {
                return this._allowClickBack;
            }, function(e) {
                this._allowClickBack != e && ((this._allowClickBack = e) ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown));
            }), u(0, e, "max", function() {
                return this._max;
            }, function(e) {
                this._max != e && (this._max = e, this.callLater(this.changeValue));
            }), u(0, e, "min", function() {
                return this._min;
            }, function(e) {
                this._min != e && (this._min = e, this.callLater(this.changeValue));
            }), u(0, e, "bar", function() {
                return this._bar;
            }), u(0, e, "value", function() {
                return this._value;
            }, function(e) {
                if (this._value != e) {
                    var O = this._value;
                    this._value = e, this.changeValue(), this._value != O && this.sendChangeEvent();
                }
            }), J(k, ["label", function() {
                return this.label = new w();
            }]), k;
        }(m),
        N = function(e) {
            var E, A;

            function G(e) {
                this.gameStopHD = !1, this.iconImgTl = null, this._iconImage = null, this._moreBox = null, this._gameBox = null, this.screenType = 0, this._moreGameDataUrl = "https://abc.layabox.com/public/more/gamelist2.json", this._iconImageObj = null, this.clickCallBack = null, this.closeCallBack = null, this.isShow = !1, this.dinfo = null, this.ErrorUrlHttps = "https://elastic.layabox.com/", this.tongjiType = "bdm", void 0 === e && (e = 0), G.__super.call(this), this.screenType = e, this.init();
            }
            I(G, "laya.ui.MoreGame", $);
            var O = G.prototype;
            return O.getLocalDateString = function(e) {
                void 0 === e && (e = 0);
                var O = this.getDateByTimestamp(e).toLocaleDateString();
                if (i.onLimixiu || i.onMiniGame) {
                    var k = new Date();
                    O = G.toLocaleDateString(k.getTime());
                }
                var T = new RegExp("/", "g");
                return O = O.replace(T, "-");
            }, O.getDateByTimestamp = function(e) {
                return void 0 === e && (e = 0), e && "" != e ? new Date(e) : new Date();
            }, O.reportError = function(e, O, k) {
                void 0 === O && (O = ""), k = k || {};
                var T = Date.now(),
                    u = new Date(T + 0);
                k.date = u.toLocaleString(), "error" != (k.etype = e) && "statistics" != e && (e = "statistics"), k.version = "V0.0.1", k.gameId = 10100, k.dinfo = this.dinfo, k.channel = -1e3, k.msg = O, k["@timestamp"] = u.toISOString(), k.user = this.getUserId(), k.openid = this.getOpenId();
                var J = G.getDay(u);
                k.rdate = J, k.day = u.getDate() + "", k.hour = u.getHours() + "", k.minute = u.getMinutes() + "", k.gameurl = B.baseURI, k.regTime = 0, "error" == e ? this.sendLog(k, this.tongjiType + "error-" + J.substring(0, 6) + "/" + e + "/", e) : this.sendLog(k, this.tongjiType + "-" + J.substring(0, 6) + "/" + e + "/", e);
            }, O.getUserId = function() {
                var e = parseInt(Y.getItem("layauserid") + "") || -1;
                return -1 == e && (e = this.randRange(0, 1e9), Y.setItem("layauserid", e + "")), e;
            }, O.getOpenId = function() {
                var e = Y.getItem("openid");
                if (null == e || "" == e) {
                    e = "";
                    for (var O = 0; O < 32; O++) {
                        var k = this.randRange(0, 62);
                        e += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(k);
                    }
                    Y.setItem("openid", e);
                }
                return e;
            }, O.sendLog = function(e, O, k) {
                var T = this,
                    u = new v();
                u.on("error", this, function(e, O, k) {
                    k && -1 != k.indexOf("[404]") && new v().send(T.ErrorUrlHttps + "garbage/" + O + "/", JSON.stringify(e), "post", "text", ["Content-Type", "application/json"]);
                }, [e, k]), i.onBDMiniGame && (e.gameurl = ""), u.send(this.ErrorUrlHttps + O, JSON.stringify(e), "post", "text", ["Content-Type", "application/json"]);
            }, O.initEvent = function() {
                this.on("click", this, this.onIconClick);
            }, O.onStageResize = function() {
                var e = Math.min(q.stage.width / q.stage.designWidth, q.stage.height / q.stage.designHeight);
                q.stage.width < 720 && (e = .9), this._moreBox && this._moreBox.scale(e, e), this._gameBox && this._gameBox.scale(e, e);
            }, O.tada = function(e, O, k, T) {
                void 0 === k && (k = 1.1), void 0 === T && (T = 1);
                var u = new n();
                return u.reset(), u.to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: 3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: -3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: 3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: -3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: 3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: -3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: 3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: -3
                }, .1 * O).to(e, {
                    scaleX: k,
                    scaleY: k,
                    rotation: 3
                }, .1 * O).to(e, {
                    scaleX: T,
                    scaleY: T,
                    rotation: 0
                }, .1 * O), u.play(0), u;
            }, O.dispose = function() {
                this.removeEvent(), this.gameStopHD = !0, G._moreGameData = null, this._iconImageObj = null, this.clickCallBack = null, this.closeCallBack = null, this.iconImgTl && (this.iconImgTl.offAll("complete"), this.iconImgTl = null), this._moreBox && (this._moreBox.removeChildren(), this._moreBox = null), this._gameBox && (this._gameBox.removeChildren(), this._gameBox = null), this._iconImage && (this._iconImage.removeSelf(), this._iconImage = null);
            }, O.onSetIconType = function(e) {
                this.gameStopHD = !e, this.visible = e;
            }, O.checkIconImgHD = function() {
                this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl = this.tada(this._iconImage, 1200, 1.1, .9), this.iconImgTl.on("complete", this, this.onTlComplete);
            }, O.onTlComplete = function() {
                if (this.parent) {
                    if (this._iconImage.scale(.9, .9), this._iconImage.rotation = 0, this.gameStopHD && this.iconImgTl) return this.iconImgTl.offAll("complete"), void(this.iconImgTl = null);
                    q.timer.once(1e3, this, this.onYanChiPlay);
                } else this.iconImgTl && (this.iconImgTl.offAll(), this.iconImgTl = null);
            }, O.onYanChiPlay = function() {
                this.parent && this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl && (this.iconImgTl.offAll("complete"), this.iconImgTl = null);
            }, O.removeEvent = function() {
                this.off("click", this, this.onIconClick);
            }, O.onIconClick = function() {
                this.isShow = !0, null != this.clickCallBack && this.clickCallBack.run();
                var e = Y.getItem("currentTime"),
                    O = this.getLocalDateString();
                e != O ? (Y.setItem("currentTime", O), this.reportError(G._moreGameData.statid1)) : this.reportError(G._moreGameData.statid2), this.onResLoaded();
            }, O.onResLoaded = function() {
                if (this._moreBox) this._moreBox.visible = !0;
                else {
                    this._moreBox = new y(), q.stage.addChild(this._moreBox), this._moreBox.zOrder = 99999, this._moreBox.left = this._moreBox.right = this._moreBox.top = this._moreBox.bottom = 0;
                    var e = this.onCreateImage(G.onGetAtlasDanImgUrl("img_white_bg"), this._moreBox);
                    e.top = e.left = e.right = e.bottom = 0, e.sizeGrid = "1,1,1,1,1";
                    var O = this.onCreateImage(G.onGetAtlasDanImgUrl("hengfengexian"), this._moreBox);
                    O.left = O.right = 0, O.y = 132, O.alpha = .2;
                    var k = this.onCreateImage(G.onGetAtlasDanImgUrl("img_font_jingcai"), this._moreBox);
                    k.on("click", this, this.onJiantouImgClick), this.isQMP() && this.screenType ? k.pos(15, 70) : k.pos(15, 45);
                    var T = new Te();
                    this._moreBox.addChild(T), T.itemRender = E, T.selectEnable = !0, T.vScrollBarSkin = "", T.scrollBar.autoHide = !0, T.scrollBar.elasticDistance = 250, T.renderHandler = new C(this, this.onGameListRender);
                    var u = G._moreGameData.marvellousGame.gameList,
                        J = [];
                    J.push(u[0]), J.push(u[1]);
                    var A = this.RandomNumBoth(J.length, u.length - J.length, u.length);
                    if (!A) return void(this.visible = !1);
                    try {
                        for (var B = 0, I = A.length; B < I; B++) {
                            var i = A[B];
                            J.push(u[i]);
                        }
                        G._moreGameData.marvellousGame.gameList = [], G._moreGameData.marvellousGame.gameList = J, T.array = G._moreGameData.marvellousGame.gameList;
                    } catch (e) {
                        T.array = G._moreGameData.marvellousGame.gameList;
                    }
                    this.screenType && (T.spaceY = 10, T.width = 690, this.isQMP() ? T.height = q.stage.height + 130 : T.height = 1139, T.y = 139, T.centerX = 0), this.onStageResize();
                }
            }, O.RandomNumBoth = function(e, O, k) {
                for (var T = [], u = e; u < k; u++) T.push(u);
                var J = [],
                    A = T.length;
                for (u = 0; u < A; u++) {
                    T.length;
                    var B = Math.floor(Math.random() * T.length);
                    if (J.push(T[B]), T.splice(B, 1), T.length <= A - O) return J;
                }
                return null;
            }, O.isQMP = function() {
                var e = !1,
                    O = 0;
                if (O = "horizontal" == q.stage.screenMode ? i.height % 9 : i.width % 9, i.onAndroid && 0 == O) {
                    var k = 0;
                    k = "horizontal" == q.stage.screenMode ? i.width : i.height, -1 != [2280, 2160, 2244, 3120, 2248, 2340, 2310].indexOf(k) && (e = !0);
                }
                var T = /iPhone/gi.test(i.window.navigator.userAgent) && 375 == Math.min(i.clientHeight, i.clientWidth) && 812 == Math.max(i.clientHeight, i.clientWidth),
                    u = 414 == Math.min(i.clientHeight, i.clientWidth) && 896 == Math.max(i.clientHeight, i.clientWidth);
                return !i.onMiniGame && !i.onBDMiniGame || i.onAndroid || !T && !u || (e = !0), e;
            }, O.onDrawShapes = function(e, O, k, T) {
                void 0 === k && (k = 5), void 0 === T && (T = !1);
                var u = k;
                T && (u = 0);
                var J = new K();
                return J.graphics.drawPath(0, 0, [
                    ["moveTo", k, 0],
                    ["lineTo", 105, 0],
                    ["arcTo", e, 0, e, k, k],
                    ["lineTo", e, O],
                    ["arcTo", e, O + k, 105, O + k, u],
                    ["lineTo", k, O + k],
                    ["arcTo", 0, O + k, 0, O, u],
                    ["lineTo", 0, k],
                    ["arcTo", 0, 0, k, 0, k],
                    ["closePath"]
                ], {
                    fillStyle: "#ff0000"
                }), J;
            }, O.onCreateMaskImg = function(e, O) {
                var k = this.onCreateImage(G.onGetAtlasDanImgUrl("dayuan"), O),
                    T = this.onCreateImage(e, k);
                T.pos(11, 10);
                var u = new K();
                return u.graphics.drawCircle(71, 74, 68, "#ff0000"), T.mask = u, k.scale(.7, .7), k;
            }, O.onGameListRender = function(e, O) {
                var k = G._moreGameData.marvellousGame.gameList;
                if (!(O < 0 || O > k.length - 1)) {
                    var T = k[O];
                    e.init(T, this.screenType, new C(this, this.onItemClickCallBack));
                }
            }, O.onItemClickCallBack = function(O) {
                var k = this;
                if (swan.navigateToMiniProgram) {
                    var e = O.appKey,
                        T = O.path,
                        u = O.extendInfo;
                    swan.navigateToMiniProgram({
                        appKey: e,
                        path: T,
                        extraData: u,
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {
                            k.reportError(O.statid);
                        }.bind(this)
                    });
                }
            }, O.onJiantouImgClick = function(e) {
                this.isShow = !1, this._moreBox && (this._moreBox.visible = !1), null != this.closeCallBack && this.closeCallBack.run();
            }, O.onCreateLabel = function(e, O, k, T, u, J, A) {
                void 0 === k && (k = 24), void 0 === T && (T = "#000000"), void 0 === u && (u = !1), void 0 === J && (J = "center"), void 0 === A && (A = 10);
                var B = new w();
                return B.text = e, B.font = "Microsoft YaHei", B.fontSize = k, B.color = T, B.bold = !0, B.leading = A, B.valign = "middle", B.align = J, B.wordWrap = u, O.addChild(B), B;
            }, O.onCreateImage = function(e, O) {
                var k = new R();
                return k.skin = e, O.addChild(k), k;
            }, O.init = function() {
                var e = -1 < i.window.navigator.userAgent.indexOf("SwanGame");
                this.visible = !1, e && (this.dinfo = JSON.stringify(laya.bd.mini.BMiniAdapter.systemInfo), this.onGetAdvsListData());
            }, O.randRange = function(e, O) {
                return Math.floor(Math.random() * (O - e + 1)) + e;
            }, O.onGetAdvsListData = function() {
                var O = this,
                    e = this.randRange(1e4, 1e6),
                    k = this._moreGameDataUrl + "?" + e;
                G._http.open("get", k, !0), G._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), G._http.responseType = "text", G._http.onerror = function(e) {
                    O._onError(e);
                }, G._http.onload = function(e) {
                    O._onLoad(e);
                }, G._http.send(null);
            }, O._onError = function(e) {
                this.error("Request failed Status:" + G._http.status + " text:" + G._http.statusText);
            }, O._onLoad = function(e) {
                var O = G._http,
                    k = void 0 !== O.status ? O.status : 200;
                200 === k || 204 === k || 0 === k ? this.complete() : this.error("[" + O.status + "]" + O.statusText + ":" + O.responseURL);
            }, O.error = function(e) {
                this.event("error", e);
            }, O.complete = function() {
                try {
                    var e = G._http.response || G._http.responseText;
                    G._moreGameData = JSON.parse(e), this.initUI();
                } catch (e) {
                    !1, this.error(e.message);
                }
            }, O.initUI = function() {
                G._moreGameData.isOpen && this.screenType ? (this._iconImage || (this._iconImage = new R(), this.addChild(this._iconImage)), this._iconImage.skin = G.onGetImgSkinUrl(G._moreGameData.icon), this._iconImageObj && (this._iconImage.size(this._iconImageObj.width, this._iconImageObj.height), this._iconImage.pivot(this._iconImageObj.width / 2, this._iconImageObj.height / 2), this._iconImage.pos(this._iconImageObj.width / 2, this._iconImageObj.height / 2)), this.visible = !0, this.initEvent(), this.gameStopHD = !1, this.checkIconImgHD()) : this.visible = !1;
            }, O.setIconSize = function(e, O) {
                this._iconImage && (this._iconImage.size(e, O), this._iconImage.pivot(e / 2, O / 2), this._iconImage.pos(e / 2, O / 2)), this._iconImageObj = {
                    width: e,
                    height: O
                };
            }, G.toLocaleDateString = function(e) {
                return G.getDateFormatStr(e, "/");
            }, G.getDateFormatStr = function(e, O) {
                void 0 === O && (O = "yynndd");
                var k = new Date(e),
                    T = k.getFullYear(),
                    u = k.getMonth() + 1,
                    J = k.getDate(),
                    A = k.getHours(),
                    B = k.getMinutes(),
                    I = k.getSeconds();
                switch (O) {
                    case "yynndd":
                        return T.toString() + "年" + u.toString() + "月" + J.toString() + "日";
                    case "/":
                        return T.toString() + "/" + u.toString() + "/" + J.toString();
                }
                return T.toString() + "年" + u.toString() + "月" + J.toString() + "日" + A.toString() + "时" + B.toString() + "分" + I.toString() + "秒";
            }, G.getDay = function(e) {
                var O = e.getMonth() + 1,
                    k = e.getDate();
                return e.getFullYear() + "" + (O < 10 ? "0" + O : O) + (k < 10 ? "0" + k : k);
            }, G.onGetAtlasDanImgUrl = function(e) {
                return G._moreGameData.imgPath + G._moreGameData.atlas + e + ".png";
            }, G.onGetImgSkinUrl = function(e) {
                return G._moreGameData.imgPath + e;
            }, G.onGetIconImgSkinUrl = function(e) {
                return G._moreGameData.iconPath + e;
            }, G._moreGameData = null, J(G, ["_http", function() {
                return this._http = new i.window.XMLHttpRequest();
            }]), G.__init$ = function() {
                E = function(e) {
                    function O() {
                        this.titleLabel = null, this.gameListBox = null, O.__super.call(this);
                    }
                    I(O, "", y);
                    var k = O.prototype;
                    return k.init = function(e, O, k) {
                        if (this.titleLabel ? this.titleLabel.text = e.title : (this.titleLabel = this.onCreateLabel(e.title, this, 32, "#3d3939"), this.titleLabel.pos(8, 0), this.titleLabel.size(162, 50)), this.gameListBox)
                            for (T = 0, u = this.gameListBox._children.length; T < u; T++)(J = this.gameListBox._children[T]).init(e.gameList[T], O, k);
                        else {
                            this.gameListBox = new y(), this.addChild(this.gameListBox);
                            for (var T = 0, u = e.gameList.length; T < u; T++) {
                                var J = new A();
                                J.init(e.gameList[T], O, k), J.x = 0 + 175 * T, J.y = 65, this.gameListBox.addChild(J);
                            }
                        }
                        this.size(695, 340);
                    }, k.onCreateLabel = function(e, O, k, T, u) {
                        void 0 === k && (k = 26), void 0 === T && (T = "#000000"), void 0 === u && (u = !0);
                        var J = new w();
                        return J.text = e, J.font = "Microsoft YaHei", J.fontSize = k, J.color = T, J.bold = u, J.leading = 10, J.valign = "middle", J.align = "center", J.overflow = "hidden", O.addChild(J), J;
                    }, O;
                }(), A = function(e) {
                    function O() {
                        this.kuangImg = null, this.iconNameLabel = null, this.iconImg = null, this.playImg = null, this.itemData = null, this.callBackHandler = null, O.__super.call(this);
                    }
                    I(O, "", y);
                    var k = O.prototype;
                    return k.MoveGameItem = function() {}, k.initEvent = function() {
                        this.on("click", this, this.onItemClick);
                    }, k.onItemClick = function() {
                        null != this.callBackHandler && this.callBackHandler.runWith([this.itemData]);
                    }, k.init = function(e, O, k) {
                        if (this.itemData = e, this.callBackHandler = k, this.kuangImg ? this.kuangImg.skin = G.onGetAtlasDanImgUrl("dayuan") : this.kuangImg = this.onCreateImage(G.onGetAtlasDanImgUrl("dayuan"), this), this.iconImg) this.iconImg.skin = G.onGetIconImgSkinUrl(e.icon);
                        else {
                            this.iconImg = this.onCreateImage(G.onGetIconImgSkinUrl(e.icon), this);
                            var T = new K();
                            T.graphics.drawCircle(71, 74, 68, "#ff0000"), this.iconImg.mask = T, this.iconImg.pos(13, 10);
                        }
                        this.iconNameLabel ? this.iconNameLabel.text = e.name : (this.iconNameLabel = this.onCreateLabel(e.name, this, 28, "#3d3939"), this.iconNameLabel.pos(7, 165)), this.playImg ? this.playImg.skin = G.onGetAtlasDanImgUrl("img_play") : (this.playImg = this.onCreateImage(G.onGetAtlasDanImgUrl("img_play"), this), this.playImg.pos(12, 210)), this.size(165, 270), this.initEvent();
                    }, k.onCreateLabel = function(e, O, k, T, u) {
                        void 0 === k && (k = 24), void 0 === T && (T = "#000000"), void 0 === u && (u = !1);
                        var J = new w();
                        return J.text = e, J.font = "Microsoft YaHei", J.fontSize = k, J.color = T, J.bold = u, J.leading = 10, J.valign = "middle", J.align = "center", J.size(152, 44), J.overflow = "hidden", O.addChild(J), J;
                    }, k.onCreateImage = function(e, O) {
                        var k = new R();
                        return k.skin = e, O.addChild(k), k;
                    }, O;
                }();
            }, G;
        }(),
        U = function(O) {
            function T() {
                this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this.group = null, this.isModal = !1, this.isShowEffect = !0, this.isPopupCenter = !0, this.closeType = null, this._dragArea = null, this._param = null, this._effectTween = null, T.__super.call(this), this.popupEffect = T.manager.popupEffectHandler, this.closeEffect = T.manager.closeEffectHandler, this._dealDragArea(), this.on("click", this, this._onClick);
            }
            I(T, "laya.ui.Dialog", O);
            var e = T.prototype;
            return e._dealDragArea = function() {
                var e = this.getChildByName("drag");
                e && (this.dragArea = e._x + "," + e._y + "," + e.width + "," + e.height, e.removeSelf());
            }, e._onMouseDown = function(e) {
                var O = this.getMousePoint();
                this._dragArea.contains(O.x, O.y) ? this.startDrag() : this.stopDrag();
            }, e._onClick = function(e) {
                var O = e.target;
                if (O) switch (O.name) {
                    case "close":
                    case "cancel":
                    case "sure":
                    case "no":
                    case "ok":
                    case "yes":
                        return void this.close(O.name);
                }
            }, e.open = function(e, O) {
                void 0 === e && (e = !0), this._dealDragArea(), this._param = O, T.manager.open(this, e, this.isShowEffect), T.manager.lock(!1);
            }, e.close = function(e) {
                this.closeType = e, T.manager.close(this);
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this._dragArea = null, O.prototype.destroy.call(this, e);
            }, e.show = function(e, O) {
                void 0 === e && (e = !1), void 0 === O && (O = !0), this._open(!1, e, O);
            }, e.popup = function(e, O) {
                void 0 === e && (e = !1), void 0 === O && (O = !0), this._open(!0, e, O);
            }, e._open = function(e, O, k) {
                this.isModal = e, this.isShowEffect = k, T.manager.lock(!0), this.open(O);
            }, u(0, e, "dragArea", function() {
                return this._dragArea ? this._dragArea.toString() : null;
            }, function(e) {
                if (e) {
                    var O = s.fillArray([0, 0, 0, 0], e, Number);
                    this._dragArea = new r(O[0], O[1], O[2], O[3]), this.on("mousedown", this, this._onMouseDown);
                } else this._dragArea = null, this.off("mousedown", this, this._onMouseDown);
            }), u(0, e, "isPopup", function() {
                return null != this.parent;
            }), u(0, e, "zOrder", O.prototype._$get_zOrder, function(e) {
                q.superSet($, this, "zOrder", e), T.manager._checkMask();
            }), u(1, T, "manager", function() {
                return T._manager = T._manager || new X();
            }, function(e) {
                T._manager = e;
            }), T.setLockView = function(e) {
                T.manager.setLockView(e);
            }, T.lock = function(e) {
                T.manager.lock(e);
            }, T.closeAll = function() {
                T.manager.closeAll();
            }, T.getDialogsByGroup = function(e) {
                return T.manager.getDialogsByGroup(e);
            }, T.closeByGroup = function(e) {
                return T.manager.closeByGroup(e);
            }, T.CLOSE = "close", T.CANCEL = "cancel", T.SURE = "sure", T.NO = "no", T.YES = "yes", T.OK = "ok", T._manager = null, T;
        }($),
        p = function(e) {
            function O() {
                this._items = null, this._selectedIndex = 0, O.__super.call(this), this._setIndexHandler = C.create(this, this.setIndex, null, !1);
            }
            I(O, "laya.ui.ViewStack", e);
            var k = O.prototype;
            return q.imps(k, {
                "laya.ui.IItem": !0
            }), k.setItems = function(e) {
                this.removeChildren();
                for (var O = 0, k = 0, T = e.length; k < T; k++) {
                    var u = e[k];
                    u && (u.name = "item" + O, this.addChild(u), O++);
                }
                this.initItems();
            }, k.addItem = function(e) {
                e.name = "item" + this._items.length, this.addChild(e), this.initItems();
            }, k._afterInited = function() {
                this.initItems();
            }, k.initItems = function() {
                this._items = [];
                for (var e = 0; e < 1e4; e++) {
                    var O = this.getChildByName("item" + e);
                    if (null == O) break;
                    this._items.push(O), O.visible = e == this._selectedIndex;
                }
            }, k.setSelect = function(e, O) {
                this._items && -1 < e && e < this._items.length && (this._items[e].visible = O);
            }, k.setIndex = function(e) {
                this.selectedIndex = e;
            }, u(0, k, "dataSource", e.prototype._$get_dataSource, function(e) {
                if ("number" == typeof(this._dataSource = e) && Math.floor(e) == e || "string" == typeof e) this.selectedIndex = parseInt(e);
                else
                    for (var O in this._dataSource) this.hasOwnProperty(O) && (this[O] = this._dataSource[O]);
            }), u(0, k, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = e, this.setSelect(this._selectedIndex, !0));
            }), u(0, k, "selection", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
            }, function(e) {
                this.selectedIndex = this._items.indexOf(e);
            }), u(0, k, "items", function() {
                return this._items;
            }), u(0, k, "setIndexHandler", function() {
                return this._setIndexHandler;
            }, function(e) {
                this._setIndexHandler = e;
            }), O;
        }(y),
        g = function(e) {
            function O() {
                this._space = 0, this._align = "none", this._itemChanged = !1, O.__super.call(this);
            }
            I(O, "laya.ui.LayoutBox", y);
            var k = O.prototype;
            return k.addChild = function(e) {
                return e.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChild.call(this, e);
            }, k.onResize = function(e) {
                this._setItemChanged();
            }, k.addChildAt = function(e, O) {
                return e.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChildAt.call(this, e, O);
            }, k.removeChildAt = function(e) {
                return this.getChildAt(e).off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChildAt.call(this, e);
            }, k.refresh = function() {
                this._setItemChanged();
            }, k.changeItems = function() {
                this._itemChanged = !1;
            }, k.sortItem = function(e) {
                e && e.sort(function(e, O) {
                    return e.y - O.y;
                });
            }, k._setItemChanged = function() {
                this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems));
            }, u(0, k, "space", function() {
                return this._space;
            }, function(e) {
                this._space = e, this._setItemChanged();
            }), u(0, k, "align", function() {
                return this._align;
            }, function(e) {
                this._align = e, this._setItemChanged();
            }), O;
        }(),
        d = function(e) {
            function k(e, O) {
                this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null, this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null, this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null, this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null, this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, k.__super.call(this), this.skin = O, this.labels = e;
            }
            I(k, "laya.ui.UIGroup", e);
            var O = k.prototype;
            return q.imps(O, {
                "laya.ui.IItem": !0
            }), O.preinitialize = function() {
                this.mouseEnabled = !0;
            }, O.destroy = function(e) {
                void 0 === e && (e = !0), laya.ui.UIComponent.prototype.destroy.call(this, e), this._items && (this._items.length = 0), this._items = null, this.selectHandler = null;
            }, O.addItem = function(e, O) {
                void 0 === O && (O = !0);
                var k = e,
                    T = this._items.length;
                if (k.name = "item" + T, this.addChild(k), this.initItems(), O && 0 < T) {
                    var u = this._items[T - 1];
                    "horizontal" == this._direction ? k.x = u._x + u.width + this._space : k.y = u._y + u.height + this._space;
                } else O && (k.x = 0, k.y = 0);
                return T;
            }, O.delItem = function(e, O) {
                void 0 === O && (O = !0);
                var k = this._items.indexOf(e);
                if (-1 != k) {
                    var T = e;
                    this.removeChild(T);
                    for (var u = k + 1, J = this._items.length; u < J; u++) {
                        var A = this._items[u];
                        A.name = "item" + (u - 1), O && ("horizontal" == this._direction ? A.x -= T.width + this._space : A.y -= T.height + this._space);
                    }
                    if (this.initItems(), -1 < this._selectedIndex) {
                        var B;
                        B = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1, this._selectedIndex = -1, this.selectedIndex = B;
                    }
                }
            }, O._afterInited = function() {
                this.initItems();
            }, O.initItems = function() {
                this._items || (this._items = []);
                for (var e = this._items.length = 0; e < 1e4; e++) {
                    var O = this.getChildByName("item" + e);
                    if (null == O) break;
                    this._items.push(O), O.selected = e === this._selectedIndex, O.clickHandler = C.create(this, this.itemClick, [e], !1);
                }
            }, O.itemClick = function(e) {
                this.selectedIndex = e;
            }, O.setSelect = function(e, O) {
                this._items && -1 < e && e < this._items.length && (this._items[e].selected = O);
            }, O._skinLoaded = function() {
                this._setLabelChanged(), this.event("loaded");
            }, O.createItem = function(e, O) {
                return null;
            }, O.changeLabels = function() {
                if (this._labelChanged = !1, this._items)
                    for (var e = 0, O = 0, k = this._items.length; O < k; O++) {
                        var T = this._items[O];
                        this._skin && (T.skin = this._skin), this._labelColors && (T.labelColors = this._labelColors), this._labelSize && (T.labelSize = this._labelSize), this._labelStroke && (T.labelStroke = this._labelStroke), this._labelStrokeColor && (T.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (T.strokeColors = this._strokeColors), this._labelBold && (T.labelBold = this._labelBold), this._labelPadding && (T.labelPadding = this._labelPadding), this._labelAlign && (T.labelAlign = this._labelAlign), this._stateNum && (T.stateNum = this._stateNum), this._labelFont && (T.labelFont = this._labelFont), "horizontal" === this._direction ? (T.y = 0, T.x = e, e += T.width + this._space) : (T.x = 0, T.y = e, e += T.height + this._space);
                    }
                this._sizeChanged();
            }, O.commitMeasure = function() {
                this.runCallLater(this.changeLabels);
            }, O._setLabelChanged = function() {
                this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels));
            }, u(0, O, "labelStrokeColor", function() {
                return this._labelStrokeColor;
            }, function(e) {
                this._labelStrokeColor != e && (this._labelStrokeColor = e, this._setLabelChanged());
            }), u(0, O, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && (this._skin = e, this._skin && !a.getRes(this._skin) ? q.loader.load(this._skin, C.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), u(0, O, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = e, this.setSelect(e, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex));
            }), u(0, O, "labels", function() {
                return this._labels;
            }, function(e) {
                if (this._labels != e) {
                    if (this._labels = e, this.removeChildren(), this._setLabelChanged(), this._labels)
                        for (var O = this._labels.split(","), k = 0, T = O.length; k < T; k++) {
                            var u = this.createItem(this._skin, O[k]);
                            u.name = "item" + k, this.addChild(u);
                        }
                    this.initItems();
                }
            }), u(0, O, "strokeColors", function() {
                return this._strokeColors;
            }, function(e) {
                this._strokeColors != e && (this._strokeColors = e, this._setLabelChanged());
            }), u(0, O, "labelColors", function() {
                return this._labelColors;
            }, function(e) {
                this._labelColors != e && (this._labelColors = e, this._setLabelChanged());
            }), u(0, O, "labelStroke", function() {
                return this._labelStroke;
            }, function(e) {
                this._labelStroke != e && (this._labelStroke = e, this._setLabelChanged());
            }), u(0, O, "labelSize", function() {
                return this._labelSize;
            }, function(e) {
                this._labelSize != e && (this._labelSize = e, this._setLabelChanged());
            }), u(0, O, "stateNum", function() {
                return this._stateNum;
            }, function(e) {
                this._stateNum != e && (this._stateNum = e, this._setLabelChanged());
            }), u(0, O, "labelBold", function() {
                return this._labelBold;
            }, function(e) {
                this._labelBold != e && (this._labelBold = e, this._setLabelChanged());
            }), u(0, O, "labelFont", function() {
                return this._labelFont;
            }, function(e) {
                this._labelFont != e && (this._labelFont = e, this._setLabelChanged());
            }), u(0, O, "labelPadding", function() {
                return this._labelPadding;
            }, function(e) {
                this._labelPadding != e && (this._labelPadding = e, this._setLabelChanged());
            }), u(0, O, "direction", function() {
                return this._direction;
            }, function(e) {
                this._direction = e, this._setLabelChanged();
            }), u(0, O, "space", function() {
                return this._space;
            }, function(e) {
                this._space = e, this._setLabelChanged();
            }), u(0, O, "items", function() {
                return this._items;
            }), u(0, O, "selection", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
            }, function(e) {
                this.selectedIndex = this._items.indexOf(e);
            }), u(0, O, "dataSource", e.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) && Math.floor(e) == e || "string" == typeof e ? this.selectedIndex = parseInt(e) : e instanceof Array ? this.labels = e.join(",") : q.superSet(y, this, "dataSource", e);
            }), k;
        }(y),
        ee = function(e) {
            function k(e, O) {
                void 0 === O && (O = ""), k.__super.call(this, e, O);
            }
            I(k, "laya.ui.CheckBox", e);
            var O = k.prototype;
            return O.preinitialize = function() {
                laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1;
            }, O.initialize = function() {
                e.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0;
            }, u(0, O, "dataSource", e.prototype._$get_dataSource, function(e) {
                "boolean" == typeof(this._dataSource = e) ? this.selected = e: "string" == typeof e ? this.selected = "true" === e : q.superSet(l, this, "dataSource", e);
            }), k;
        }(l),
        Oe = function(e) {
            function O() {
                this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10, this._spaceBottom = 0, this._keepStatus = !0, O.__super.call(this), this.width = this.height = 200;
            }
            I(O, "laya.ui.Tree", e);
            var k = O.prototype;
            return q.imps(k, {
                "laya.ui.IRender": !0
            }), k.destroy = function(e) {
                void 0 === e && (e = !0), laya.ui.UIComponent.prototype.destroy.call(this, e), this._list && this._list.destroy(e), this._list = null, this._source = null, this._renderHandler = null;
            }, k.createChildren = function() {
                this.addChild(this._list = new Te()), this._list.renderHandler = C.create(this, this.renderItem, null, !1), this._list.repeatX = 1, this._list.on("change", this, this.onListChange);
            }, k.onListChange = function(e) {
                this.event("change");
            }, k.getArray = function() {
                var e, O = [];
                for (var k in this._source) e = this._source[k], this.getParentOpenStatus(e) && (e.x = this._spaceLeft * this.getDepth(e), O.push(e));
                return O;
            }, k.getDepth = function(e, O) {
                return void 0 === O && (O = 0), null == e.nodeParent ? O : this.getDepth(e.nodeParent, O + 1);
            }, k.getParentOpenStatus = function(e) {
                var O = e.nodeParent;
                return null == O || !!O.isOpen && (null == O.nodeParent || this.getParentOpenStatus(O));
            }, k.renderItem = function(e, O) {
                var k = e.dataSource;
                if (k) {
                    e.left = k.x;
                    var T = e.getChildByName("arrow");
                    T && (k.hasChild ? (T.visible = !0, T.index = k.isOpen ? 1 : 0, T.tag = O, T.off("click", this, this.onArrowClick), T.on("click", this, this.onArrowClick)) : T.visible = !1);
                    var u = e.getChildByName("folder");
                    u && (2 == u.clipY ? u.index = k.isDirectory ? 0 : 1 : u.index = k.isDirectory ? k.isOpen ? 1 : 0 : 2), this._renderHandler && this._renderHandler.runWith([e, O]);
                }
            }, k.onArrowClick = function(e) {
                var O = e.currentTarget.tag;
                this._list.array[O].isOpen = !this._list.array[O].isOpen, this.event("open"), this._list.array = this.getArray();
            }, k.setItemState = function(e, O) {
                this._list.array[e] && (this._list.array[e].isOpen = O, this._list.array = this.getArray());
            }, k.fresh = function() {
                this._list.array = this.getArray(), this.repaint();
            }, k.parseXml = function(e, O, k, T) {
                var u, J = e.childNodes,
                    A = J.length;
                if (!T) {
                    u = {};
                    var B, I = e.attributes;
                    for (var i in I) {
                        var E = (B = I[i]).nodeName,
                            G = B.nodeValue;
                        u[E] = "true" == G || "false" != G && G;
                    }
                    u.nodeParent = k, 0 < A && (u.isDirectory = !0), u.hasChild = 0 < A, O.push(u);
                }
                for (var q = 0; q < A; q++) {
                    var x = J[q];
                    this.parseXml(x, O, u, !1);
                }
            }, k.parseOpenStatus = function(e, O) {
                for (var k = 0, T = O.length; k < T; k++) {
                    var u = O[k];
                    if (u.isDirectory)
                        for (var J = 0, A = e.length; J < A; J++) {
                            var B = e[J];
                            if (B.isDirectory && this.isSameParent(B, u) && u.label == B.label) {
                                u.isOpen = B.isOpen;
                                break;
                            }
                        }
                }
            }, k.isSameParent = function(e, O) {
                return null == e.nodeParent && null == O.nodeParent || null != e.nodeParent && null != O.nodeParent && (e.nodeParent.label == O.nodeParent.label && this.isSameParent(e.nodeParent, O.nodeParent));
            }, k.filter = function(e) {
                if (Boolean(e)) {
                    var O = [];
                    this.getFilterSource(this._source, O, e), this._list.array = O;
                } else this._list.array = this.getArray();
            }, k.getFilterSource = function(e, O, k) {
                var T;
                for (var u in k = k.toLocaleLowerCase(), e) !(T = e[u]).isDirectory && -1 < String(T.label).toLowerCase().indexOf(k) && (T.x = 0, O.push(T)), T.child && 0 < T.child.length && this.getFilterSource(T.child, O, k);
            }, u(0, k, "spaceBottom", function() {
                return this._list.spaceY;
            }, function(e) {
                this._list.spaceY = e;
            }), u(0, k, "keepStatus", function() {
                return this._keepStatus;
            }, function(e) {
                this._keepStatus = e;
            }), u(0, k, "itemRender", function() {
                return this._list.itemRender;
            }, function(e) {
                this._list.itemRender = e;
            }), u(0, k, "array", function() {
                return this._list.array;
            }, function(e) {
                this._keepStatus && this._list.array && e && this.parseOpenStatus(this._list.array, e), this._source = e, this._list.array = this.getArray();
            }), u(0, k, "mouseHandler", function() {
                return this._list.mouseHandler;
            }, function(e) {
                this._list.mouseHandler = e;
            }), u(0, k, "dataSource", e.prototype._$get_dataSource, function(e) {
                this._dataSource = e, q.superSet(y, this, "dataSource", e);
            }), u(0, k, "source", function() {
                return this._source;
            }), u(0, k, "scrollBar", function() {
                return this._list.scrollBar;
            }), u(0, k, "list", function() {
                return this._list;
            }), u(0, k, "scrollBarSkin", function() {
                return this._list.vScrollBarSkin;
            }, function(e) {
                this._list.vScrollBarSkin = e;
            }), u(0, k, "renderHandler", function() {
                return this._renderHandler;
            }, function(e) {
                this._renderHandler = e;
            }), u(0, k, "selectedIndex", function() {
                return this._list.selectedIndex;
            }, function(e) {
                this._list.selectedIndex = e;
            }), u(0, k, "spaceLeft", function() {
                return this._spaceLeft;
            }, function(e) {
                this._spaceLeft = e;
            }), u(0, k, "selectedItem", function() {
                return this._list.selectedItem;
            }, function(e) {
                this._list.selectedItem = e;
            }), u(0, k, "width", e.prototype._$get_width, function(e) {
                q.superSet(y, this, "width", e), this._list.width = e;
            }), u(0, k, "height", e.prototype._$get_height, function(e) {
                q.superSet(y, this, "height", e), this._list.height = e;
            }), u(0, k, "xml", null, function(e) {
                var O = [];
                this.parseXml(e.childNodes[0], O, null, !0), this.array = O;
            }), u(0, k, "selectedPath", function() {
                return this._list.selectedItem ? this._list.selectedItem.path : null;
            }), O;
        }(y),
        ke = function(e) {
            function O() {
                this._content = null, this._vScrollBar = null, this._hScrollBar = null, this._scrollChanged = !1, this._usedCache = null, this._elasticEnabled = !1, O.__super.call(this), this.width = this.height = 100;
            }
            I(O, "laya.ui.Panel", e);
            var k = O.prototype;
            return k.destroy = function(e) {
                void 0 === e && (e = !0), laya.ui.UIComponent.prototype.destroy.call(this, e), this._content && this._content.destroy(e), this._vScrollBar && this._vScrollBar.destroy(e), this._hScrollBar && this._hScrollBar.destroy(e), this._vScrollBar = null, this._hScrollBar = null, this._content = null;
            }, k.destroyChildren = function() {
                this._content.destroyChildren();
            }, k.createChildren = function() {
                laya.display.Node.prototype.addChild.call(this, this._content = new y());
            }, k.addChild = function(e) {
                return e.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChild(e);
            }, k.onResize = function() {
                this._setScrollChanged();
            }, k.addChildAt = function(e, O) {
                return e.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChildAt(e, O);
            }, k.removeChild = function(e) {
                return e.off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChild(e);
            }, k.removeChildAt = function(e) {
                return this.getChildAt(e).off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChildAt(e);
            }, k.removeChildren = function(e, O) {
                return void 0 === e && (e = 0), void 0 === O && (O = 2147483647), this._content.removeChildren(e, O), this._setScrollChanged(), this;
            }, k.getChildAt = function(e) {
                return this._content.getChildAt(e);
            }, k.getChildByName = function(e) {
                return this._content.getChildByName(e);
            }, k.getChildIndex = function(e) {
                return this._content.getChildIndex(e);
            }, k.changeScroll = function() {
                this._scrollChanged = !1;
                var e = this.contentWidth || 1,
                    O = this.contentHeight || 1,
                    k = this._vScrollBar,
                    T = this._hScrollBar,
                    u = k && O > this._height,
                    J = T && e > this._width,
                    A = u ? this._width - k.width : this._width,
                    B = J ? this._height - T.height : this._height;
                k && (k.x = this._width - k.width, k.y = 0, k.height = this._height - (J ? T.height : 0), k.scrollSize = Math.max(.033 * this._height, 1), k.thumbPercent = B / O, k.setScroll(0, O - B, k.value)), T && (T.x = 0, T.y = this._height - T.height, T.width = this._width - (u ? k.width : 0), T.scrollSize = Math.max(.033 * this._width, 1), T.thumbPercent = A / e, T.setScroll(0, e - A, T.value));
            }, k._sizeChanged = function() {
                laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this._width, this._height);
            }, k.setContentSize = function(e, O) {
                var k = this._content;
                k.width = e, k.height = O, k._style.scrollRect || (k.scrollRect = r.create()), k._style.scrollRect.setTo(0, 0, e, O), k.scrollRect = k.scrollRect;
            }, k.onScrollBarChange = function(e) {
                var O = this._content._style.scrollRect;
                if (O) {
                    var k = Math.round(e.value);
                    e.isVertical ? O.y = k : O.x = k, this._content.scrollRect = O;
                }
            }, k.scrollTo = function(e, O) {
                void 0 === e && (e = 0), void 0 === O && (O = 0), this.vScrollBar && (this.vScrollBar.value = O), this.hScrollBar && (this.hScrollBar.value = e);
            }, k.refresh = function() {
                this.changeScroll();
            }, k.onScrollStart = function() {
                this._usedCache || (this._usedCache = q.superGet(y, this, "cacheAs")), q.superSet(y, this, "cacheAs", "none"), this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd);
            }, k.onScrollEnd = function() {
                q.superSet(y, this, "cacheAs", this._usedCache);
            }, k._setScrollChanged = function() {
                this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll));
            }, u(0, k, "numChildren", function() {
                return this._content.numChildren;
            }), u(0, k, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null;
            }, function(e) {
                null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new Ee()), this._hScrollBar.on("change", this, this.onScrollBarChange, [this._hScrollBar]), this._hScrollBar.target = this._content, this._hScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0, this._setScrollChanged()), this._hScrollBar.skin = e;
            }), u(0, k, "contentWidth", function() {
                for (var e = 0, O = this._content.numChildren - 1; - 1 < O; O--) {
                    var k = this._content.getChildAt(O);
                    e = Math.max(k._x + k.width * k.scaleX - k.pivotX, e);
                }
                return e;
            }), u(0, k, "contentHeight", function() {
                for (var e = 0, O = this._content.numChildren - 1; - 1 < O; O--) {
                    var k = this._content.getChildAt(O);
                    e = Math.max(k._y + k.height * k.scaleY - k.pivotY, e);
                }
                return e;
            }), u(0, k, "width", e.prototype._$get_width, function(e) {
                q.superSet(y, this, "width", e), this._setScrollChanged();
            }), u(0, k, "hScrollBar", function() {
                return this._hScrollBar;
            }), u(0, k, "content", function() {
                return this._content;
            }), u(0, k, "height", e.prototype._$get_height, function(e) {
                q.superSet(y, this, "height", e), this._setScrollChanged();
            }), u(0, k, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null;
            }, function(e) {
                null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new Ie()), this._vScrollBar.on("change", this, this.onScrollBarChange, [this._vScrollBar]), this._vScrollBar.target = this._content, this._vScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0, this._setScrollChanged()), this._vScrollBar.skin = e;
            }), u(0, k, "vScrollBar", function() {
                return this._vScrollBar;
            }), u(0, k, "cacheAs", e.prototype._$get_cacheAs, function(e) {
                q.superSet(y, this, "cacheAs", e), this._usedCache = null, "none" !== e ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart), this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart));
            }), u(0, k, "elasticEnabled", function() {
                return this._elasticEnabled;
            }, function(e) {
                this._elasticEnabled = e, this._vScrollBar && (this._vScrollBar.elasticDistance = e ? 200 : 0), this._hScrollBar && (this._hScrollBar.elasticDistance = e ? 200 : 0);
            }), O;
        }(y),
        Te = function(e) {
            function O() {
                this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null, this.selectEnable = !1, this.totalPage = 0, this._$componentType = "List", this._content = null, this._scrollBar = null, this._itemRender = null, this._repeatX = 0, this._repeatY = 0, this._repeatX2 = 0, this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null, this._startIndex = 0, this._selectedIndex = -1, this._page = 0, this._isVertical = !0, this._cellSize = 20, this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1, this._createdLine = 0, this._cellChanged = !1, this._usedCache = null, this._elasticEnabled = !1, this._preLen = 0, O.__super.call(this), this._cells = [], this._offset = new t();
            }
            I(O, "laya.ui.List", e);
            var k = O.prototype;
            return q.imps(k, {
                "laya.ui.IRender": !0,
                "laya.ui.IItem": !0
            }), k.destroy = function(e) {
                void 0 === e && (e = !0), this._content && this._content.destroy(e), this._scrollBar && this._scrollBar.destroy(e), laya.ui.UIComponent.prototype.destroy.call(this, e), this._content = null, this._scrollBar = null, this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null;
            }, k.createChildren = function() {
                this.addChild(this._content = new y());
            }, k.onScrollStart = function() {
                this._usedCache || (this._usedCache = q.superGet(y, this, "cacheAs")), q.superSet(y, this, "cacheAs", "none"), this._scrollBar.once("end", this, this.onScrollEnd);
            }, k.onScrollEnd = function() {
                q.superSet(y, this, "cacheAs", this._usedCache);
            }, k._removePreScrollBar = function() {
                var e = this.removeChildByName("scrollBar");
                e && e.destroy(!0);
            }, k.changeCells = function() {
                if (this._cellChanged = !1, this._itemRender) {
                    this.scrollBar = this.getChildByName("scrollBar");
                    var e = this._getOneCell(),
                        O = e.width + this._spaceX || 1,
                        k = e.height + this._spaceY || 1;
                    0 < this._width && (this._repeatX2 = this._isVertical ? Math.round(this._width / O) : Math.ceil(this._width / O)), 0 < this._height && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / k) : Math.round(this._height / k));
                    var T = this._width ? this._width : O * this.repeatX - this._spaceX,
                        u = this._height ? this._height : k * this.repeatY - this._spaceY;
                    this._cellSize = this._isVertical ? k : O, this._cellOffset = this._isVertical ? k * Math.max(this._repeatY2, this._repeatY) - u - this._spaceY : O * Math.max(this._repeatX2, this._repeatX) - T - this._spaceX, this._isVertical && this.vScrollBarSkin ? this._scrollBar.height = u : !this._isVertical && this.hScrollBarSkin && (this._scrollBar.width = T), this.setContentSize(T, u);
                    var J = this._isVertical ? this.repeatX : this.repeatY,
                        A = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                    this._createItems(0, J, A), this._createdLine = A, this._array && (this.array = this._array, this.runCallLater(this.renderItems));
                }
            }, k._getOneCell = function() {
                if (0 === this._cells.length) {
                    var e = this.createItem();
                    if (this._offset.setTo(e._x, e._y), this.cacheContent) return e;
                    this._cells.push(e);
                }
                return this._cells[0];
            }, k._createItems = function(e, O, k) {
                var T = this._content,
                    u = this._getOneCell(),
                    J = u.width + this._spaceX,
                    A = u.height + this._spaceY;
                if (this.cacheContent) {
                    var B = new y();
                    B.cacheAs = "normal", B.pos((this._isVertical ? 0 : e) * J, (this._isVertical ? e : 0) * A), this._content.addChild(B), T = B;
                } else {
                    for (var I = [], i = this._cells.length - 1; - 1 < i; i--) {
                        var E = this._cells[i];
                        E.removeSelf(), I.push(E);
                    }
                    this._cells.length = 0;
                }
                for (var G = e; G < k; G++)
                    for (var q = 0; q < O; q++)(u = I && I.length ? I.pop() : this.createItem()).x = (this._isVertical ? q : G) * J - T._x, u.y = (this._isVertical ? G : q) * A - T._y, u.name = "item" + (G * O + q), T.addChild(u), this.addCell(u);
            }, k.createItem = function() {
                var e = [];
                if ("function" == typeof this._itemRender) var O = new this._itemRender();
                else O = z.createComp(this._itemRender, null, null, e);
                if (0 == e.length && O._watchMap) {
                    var k = O._watchMap;
                    for (var T in k)
                        for (var u = k[T], J = 0; J < u.length; J++) {
                            var A = u[J];
                            e.push(A.comp, A.prop, A.value);
                        }
                }
                return e.length && (O._$bindData = e), O;
            }, k.addCell = function(e) {
                e.on("click", this, this.onCellMouse), e.on("rightclick", this, this.onCellMouse), e.on("mouseover", this, this.onCellMouse), e.on("mouseout", this, this.onCellMouse), e.on("mousedown", this, this.onCellMouse), e.on("mouseup", this, this.onCellMouse), this._cells.push(e);
            }, k._afterInited = function() {
                this.initItems();
            }, k.initItems = function() {
                if (!this._itemRender && null != this.getChildByName("item0")) {
                    this.repeatX = 1;
                    for (var e = 0, O = e = 0; O < 1e4; O++) {
                        var k = this.getChildByName("item" + O);
                        if (!k) break;
                        this.addCell(k), e++;
                    }
                    this.repeatY = e;
                }
            }, k.setContentSize = function(e, O) {
                this._content.width = e, this._content.height = O, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content._style.scrollRect || (this._content.scrollRect = r.create()), this._content._style.scrollRect.setTo(-this._offset.x, -this._offset.y, e, O), this._content.scrollRect = this._content.scrollRect), this.event("resize");
            }, k.onCellMouse = function(e) {
                "mousedown" === e.type && (this._isMoved = !1);
                var O = e.currentTarget,
                    k = this._startIndex + this._cells.indexOf(O);
                k < 0 || ("click" === e.type || "rightclick" === e.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = k : this.changeCellState(O, !0, 0) : "mouseover" !== e.type && "mouseout" !== e.type || this._selectedIndex === k || this.changeCellState(O, "mouseover" === e.type, 0), this.mouseHandler && this.mouseHandler.runWith([e, k]));
            }, k.changeCellState = function(e, O, k) {
                var T = e.getChildByName("selectBox");
                T && (this.selectEnable = !0, T.visible = O, T.index = k);
            }, k._sizeChanged = function() {
                laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this.width, this.height), this._scrollBar && this.callLater(this.onScrollBarChange);
            }, k.onScrollBarChange = function(e) {
                this.runCallLater(this.changeCells);
                var O = this._scrollBar.value,
                    k = this._isVertical ? this.repeatX : this.repeatY,
                    T = this._isVertical ? this.repeatY : this.repeatX,
                    u = Math.floor(O / this._cellSize);
                if (this.cacheContent) A = T + 1, this._createdLine - u < A && (this._createItems(this._createdLine, k, this._createdLine + A), this.renderItems(this._createdLine * k, 0), this._createdLine += A);
                else {
                    var J = u * k,
                        A = 0;
                    if (J > this._startIndex) {
                        A = J - this._startIndex;
                        var B = !0,
                            I = this._startIndex + k * (T + 1);
                        this._isMoved = !0;
                    } else J < this._startIndex && (A = this._startIndex - J, B = !1, I = this._startIndex - 1, this._isMoved = !0);
                    for (var i = 0; i < A; i++) {
                        if (B) {
                            var E = this._cells.shift();
                            this._cells[this._cells.length] = E;
                            var G = I + i;
                        } else E = this._cells.pop(), this._cells.unshift(E), G = I - i;
                        var q = Math.floor(G / k) * this._cellSize;
                        this._isVertical ? E.y = q : E.x = q, this.renderItem(E, G);
                    }
                    this._startIndex = J, this.changeSelectStatus();
                }
                var x = this._content._style.scrollRect;
                this._isVertical ? (x.y = O - this._offset.y, x.x = -this._offset.x) : (x.y = -this._offset.y, x.x = O - this._offset.x), this._content.scrollRect = x;
            }, k.posCell = function(e, O) {
                if (this._scrollBar) {
                    var k = this._isVertical ? this.repeatX : this.repeatY,
                        T = (this._isVertical ? this.repeatY : this.repeatX, Math.floor(O / k) * this._cellSize);
                    this._isVertical ? e._y = T : e.x = T;
                }
            }, k.changeSelectStatus = function() {
                for (var e = 0, O = this._cells.length; e < O; e++) this.changeCellState(this._cells[e], this._selectedIndex === this._startIndex + e, 1);
            }, k.renderItems = function(e, O) {
                void 0 === e && (e = 0), void 0 === O && (O = 0);
                for (var k = e, T = O || this._cells.length; k < T; k++) this.renderItem(this._cells[k], this._startIndex + k);
                this.changeSelectStatus();
            }, k.renderItem = function(e, O) {
                this._array && 0 <= O && O < this._array.length ? (e.visible = !0, e._$bindData ? (e._dataSource = this._array[O], this._bindData(e, this._array[O])) : e.dataSource = this._array[O], this.cacheContent || this.posCell(e, O), this.hasListener("render") && this.event("render", [e, O]), this.renderHandler && this.renderHandler.runWith([e, O])) : (e.visible = !1, e.dataSource = null);
            }, k._bindData = function(e, O) {
                for (var k = e._$bindData, T = 0, u = k.length; T < u; T++) {
                    var J = k[T++],
                        A = k[T++],
                        B = k[T],
                        I = s.getBindFun(B);
                    J[A] = I.call(this, O);
                }
            }, k.updateArray = function(e) {
                this._array = e;
                var O = 0;
                if (this._array && (0 <= (O = this._preLen - this._startIndex) && this.renderItems(O), this._preLen = this._array.length), this._scrollBar) {
                    var k = e.length,
                        T = this._isVertical ? this.repeatX : this.repeatY,
                        u = this._isVertical ? this.repeatY : this.repeatX,
                        J = Math.ceil(k / T);
                    u <= J && (this._scrollBar.thumbPercent = u / J, this._scrollBar.slider._max = (J - u) * this._cellSize + this._cellOffset);
                }
            }, k.refresh = function() {
                this.array = this._array;
            }, k.getItem = function(e) {
                return -1 < e && e < this._array.length ? this._array[e] : null;
            }, k.changeItem = function(e, O) {
                -1 < e && e < this._array.length && (this._array[e] = O, e >= this._startIndex && e < this._startIndex + this._cells.length && this.renderItem(this.getCell(e), e));
            }, k.setItem = function(e, O) {
                this.changeItem(e, O);
            }, k.addItem = function(e) {
                this._array.push(e), this.array = this._array;
            }, k.addItemAt = function(e, O) {
                this._array.splice(O, 0, e), this.array = this._array;
            }, k.deleteItem = function(e) {
                this._array.splice(e, 1), this.array = this._array;
            }, k.getCell = function(e) {
                return this.runCallLater(this.changeCells), -1 < e && this._cells ? this._cells[(e - this._startIndex) % this._cells.length] : null;
            }, k.scrollTo = function(e) {
                if (this._scrollBar) {
                    var O = this._isVertical ? this.repeatX : this.repeatY;
                    this._scrollBar.value = Math.floor(e / O) * this._cellSize;
                } else this.startIndex = e;
            }, k.tweenTo = function(e, O, k) {
                if (void 0 === O && (O = 200), this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var T = this._isVertical ? this.repeatX : this.repeatY;
                    M.to(this._scrollBar, {
                        value: Math.floor(e / T) * this._cellSize
                    }, O, null, k, 0, !0);
                } else this.startIndex = e, k && k.run();
            }, k._setCellChanged = function() {
                this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells));
            }, k.commitMeasure = function() {
                this.runCallLater(this.changeCells);
            }, u(0, k, "cacheAs", e.prototype._$get_cacheAs, function(e) {
                q.superSet(y, this, "cacheAs", e), this._scrollBar && (this._usedCache = null, "none" !== e ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart));
            }), u(0, k, "content", function() {
                return this._content;
            }), u(0, k, "height", e.prototype._$get_height, function(e) {
                e != this._height && (q.superSet(y, this, "height", e), this._setCellChanged());
            }), u(0, k, "itemRender", function() {
                return this._itemRender;
            }, function(e) {
                if (this._itemRender != e) {
                    this._itemRender = e;
                    for (var O = this._cells.length - 1; - 1 < O; O--) this._cells[O].destroy();
                    this._cells.length = 0, this._setCellChanged();
                }
            }), u(0, k, "vScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null;
            }, function(e) {
                this._removePreScrollBar();
                var O = new Ie();
                O.name = "scrollBar", O.right = 0, O.skin = e, O.elasticDistance = this._elasticEnabled ? 200 : 0, this.scrollBar = O, this.addChild(O), this._setCellChanged();
            }), u(0, k, "page", function() {
                return this._page;
            }, function(e) {
                this._page = e, this._array && (this._page = 0 < e ? e : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1, this.startIndex = this._page * this.repeatX * this.repeatY);
            }), u(0, k, "hScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null;
            }, function(e) {
                this._removePreScrollBar();
                var O = new Ee();
                O.name = "scrollBar", O.bottom = 0, O.skin = e, O.elasticDistance = this._elasticEnabled ? 200 : 0, this.scrollBar = O, this.addChild(O), this._setCellChanged();
            }), u(0, k, "repeatX", function() {
                return 0 < this._repeatX ? this._repeatX : 0 < this._repeatX2 ? this._repeatX2 : 1;
            }, function(e) {
                this._repeatX = e, this._setCellChanged();
            }), u(0, k, "scrollBar", function() {
                return this._scrollBar;
            }, function(e) {
                this._scrollBar != e && (this._scrollBar = e) && (this._isVertical = this._scrollBar.isVertical, this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange));
            }), u(0, k, "width", e.prototype._$get_width, function(e) {
                e != this._width && (q.superSet(y, this, "width", e), this._setCellChanged());
            }), u(0, k, "repeatY", function() {
                return 0 < this._repeatY ? this._repeatY : 0 < this._repeatY2 ? this._repeatY2 : 1;
            }, function(e) {
                this._repeatY = e, this._setCellChanged();
            }), u(0, k, "spaceX", function() {
                return this._spaceX;
            }, function(e) {
                this._spaceX = e, this._setCellChanged();
            }), u(0, k, "spaceY", function() {
                return this._spaceY;
            }, function(e) {
                this._spaceY = e, this._setCellChanged();
            }), u(0, k, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(e) {
                this._selectedIndex != e && (this._selectedIndex = e, this.changeSelectStatus(), this.event("change"), this.selectHandler && this.selectHandler.runWith(e), this.startIndex = this._startIndex);
            }), u(0, k, "selectedItem", function() {
                return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null;
            }, function(e) {
                this.selectedIndex = this._array.indexOf(e);
            }), u(0, k, "length", function() {
                return this._array ? this._array.length : 0;
            }), u(0, k, "selection", function() {
                return this.getCell(this._selectedIndex);
            }, function(e) {
                this.selectedIndex = this._startIndex + this._cells.indexOf(e);
            }), u(0, k, "startIndex", function() {
                return this._startIndex;
            }, function(e) {
                this._startIndex = 0 < e ? e : 0, this.callLater(this.renderItems);
            }), u(0, k, "array", function() {
                return this._array;
            }, function(e) {
                this.runCallLater(this.changeCells), this._array = e || [], this._preLen = this._array.length;
                var O = this._array.length;
                if (this.totalPage = Math.ceil(O / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < O ? this._selectedIndex : O - 1, this.startIndex = this._startIndex, this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var k = this._isVertical ? this.repeatX : this.repeatY,
                        T = this._isVertical ? this.repeatY : this.repeatX,
                        u = Math.ceil(O / k),
                        J = 0 < this._cellOffset ? this.totalPage + 1 : this.totalPage;
                    this._scrollBar.target = (1 < J && T <= u ? (this._scrollBar.scrollSize = this._cellSize, this._scrollBar.thumbPercent = T / u, this._scrollBar.setScroll(0, (u - T) * this._cellSize + this._cellOffset, this._scrollBar.value)) : this._scrollBar.setScroll(0, 0, 0), this._content);
                }
            }), u(0, k, "dataSource", e.prototype._$get_dataSource, function(e) {
                "number" == typeof(this._dataSource = e) && Math.floor(e) == e || "string" == typeof e ? this.selectedIndex = parseInt(e) : e instanceof Array ? this.array = e : q.superSet(y, this, "dataSource", e);
            }), u(0, k, "cells", function() {
                return this.runCallLater(this.changeCells), this._cells;
            }), u(0, k, "elasticEnabled", function() {
                return this._elasticEnabled;
            }, function(e) {
                this._elasticEnabled = e, this._scrollBar && (this._scrollBar.elasticDistance = e ? 200 : 0);
            }), O;
        }(y),
        ue = function(O) {
            function k(e) {
                this._bg = null, this._skin = null, k.__super.call(this), void 0 === e && (e = ""), this.text = e, this.skin = this.skin;
            }
            I(k, "laya.ui.TextInput", O);
            var e = k.prototype;
            return e.preinitialize = function() {
                this.mouseEnabled = !0;
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._bg && this._bg.destroy(), this._bg = null;
            }, e.createChildren = function() {
                this.addChild(this._tf = new j()), this._tf.padding = f.inputLabelPadding, this._tf.on("input", this, this._onInput), this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur), this._tf.on("focus", this, this._onFocus);
            }, e._onFocus = function() {
                this.event("focus", this);
            }, e._onBlur = function() {
                this.event("blur", this);
            }, e._onInput = function() {
                this.event("input", this);
            }, e._onEnter = function() {
                this.event("enter", this);
            }, e.initialize = function() {
                this.width = 128, this.height = 22;
            }, e._skinLoaded = function() {
                this._bg || (this.graphics = this._bg = new V()), this._bg.source = a.getRes(this._skin), this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height), this._sizeChanged(), this.event("loaded");
            }, e.select = function() {
                this._tf.select();
            }, e.setSelection = function(e, O) {
                this._tf.setSelection(e, O);
            }, u(0, e, "text", O.prototype._$get_text, function(e) {
                this._tf.text != e && (e += "", this._tf.text = e, this.event("change"));
            }), u(0, e, "bg", function() {
                return this._bg;
            }, function(e) {
                this.graphics = this._bg = e;
            }), u(0, e, "multiline", function() {
                return this._tf.multiline;
            }, function(e) {
                this._tf.multiline = e;
            }), u(0, e, "skin", function() {
                return this._skin;
            }, function(e) {
                this._skin != e && (this._skin = e, this._skin && !a.getRes(this._skin) ? q.loader.load(this._skin, C.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), u(0, e, "sizeGrid", function() {
                return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null;
            }, function(e) {
                this._bg || (this.graphics = this._bg = new V()), this._bg.sizeGrid = s.fillArray(f.defaultSizeGrid, e, Number);
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(w, this, "width", e), this._bg && (this._bg.width = e);
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(w, this, "height", e), this._bg && (this._bg.height = e);
            }), u(0, e, "editable", function() {
                return this._tf.editable;
            }, function(e) {
                this._tf.editable = e;
            }), u(0, e, "restrict", function() {
                return this._tf.restrict;
            }, function(e) {
                this._tf.restrict = e;
            }), u(0, e, "prompt", function() {
                return this._tf.prompt;
            }, function(e) {
                this._tf.prompt = e;
            }), u(0, e, "promptColor", function() {
                return this._tf.promptColor;
            }, function(e) {
                this._tf.promptColor = e;
            }), u(0, e, "maxChars", function() {
                return this._tf.maxChars;
            }, function(e) {
                this._tf.maxChars = e;
            }), u(0, e, "focus", function() {
                return this._tf.focus;
            }, function(e) {
                this._tf.focus = e;
            }), u(0, e, "type", function() {
                return this._tf.type;
            }, function(e) {
                this._tf.type = e;
            }), k;
        }(w),
        Je = function(e) {
            function O() {
                this._oldW = 0, this._oldH = 0, O.__super.call(this);
            }
            I(O, "laya.ui.ScaleBox", e);
            var k = O.prototype;
            return k.onEnable = function() {
                q.stage.on("resize", this, this.onResize), this.onResize();
            }, k.onDisable = function() {
                q.stage.off("resize", this, this.onResize);
            }, k.onResize = function() {
                if (0 < this.width && 0 < this.height) {
                    var e = Math.min(q.stage.width / this._oldW, q.stage.height / this._oldH);
                    q.superSet(y, this, "width", q.stage.width), q.superSet(y, this, "height", q.stage.height), this.scale(e, e);
                }
            }, u(0, k, "width", e.prototype._$get_width, function(e) {
                q.superSet(y, this, "width", e), this._oldW = e;
            }), u(0, k, "height", e.prototype._$get_height, function(e) {
                q.superSet(y, this, "height", e), this._oldH = e;
            }), O;
        }(y),
        Ae = function(O) {
            function k(e, O) {
                this._value = null, void 0 === O && (O = ""), k.__super.call(this, e, O);
            }
            I(k, "laya.ui.Radio", O);
            var e = k.prototype;
            return e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._value = null;
            }, e.preinitialize = function() {
                laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1;
            }, e.initialize = function() {
                O.prototype.initialize.call(this), this.createText(), this._text.align = "left", this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick);
            }, e.onClick = function(e) {
                this.selected = !0;
            }, u(0, e, "value", function() {
                return null != this._value ? this._value : this.label;
            }, function(e) {
                this._value = e;
            }), k;
        }(l),
        Be = function(O) {
            function k(e, O) {
                this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal", this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0, k.__super.call(this), e && (this.skin = e), O && (this.sheet = O);
            }
            I(k, "laya.ui.FontClip", O);
            var e = k.prototype;
            return e.createChildren = function() {
                this._bitmap = new V(), this.on("loaded", this, this._onClipLoaded);
            }, e._onClipLoaded = function() {
                this.callLater(this.changeValue);
            }, e.changeValue = function() {
                var e;
                if (this._sources && (this._valueArr && (this.graphics.clear(!0), e = this._sources[0]))) {
                    var O = "horizontal" === this._direction;
                    this._wordsH = O ? (this._wordsW = this._valueArr.length * (e.sourceWidth + this.spaceX), e.sourceHeight) : (this._wordsW = e.sourceWidth, (e.sourceHeight + this.spaceY) * this._valueArr.length);
                    var k = 0;
                    if (this._width) switch (this._align) {
                        case "center":
                            k = .5 * (this._width - this._wordsW);
                            break;
                        case "right":
                            k = this._width - this._wordsW;
                            break;
                        default:
                            k = 0;
                    }
                    for (var T = 0, u = this._valueArr.length; T < u; T++) {
                        var J = this._indexMap[this._valueArr.charAt(T)];
                        this.sources[J] && (e = this.sources[J], O ? this.graphics.drawImage(e, k + T * (e.sourceWidth + this.spaceX), 0, e.sourceWidth, e.sourceHeight) : this.graphics.drawImage(e, 0 + k, T * (e.sourceHeight + this.spaceY), e.sourceWidth, e.sourceHeight));
                    }
                    this._width || (this._widget.resetLayoutX(), this.callLater(this._sizeChanged)), this._height || (this._widget.resetLayoutY(), this.callLater(this._sizeChanged));
                }
            }, e.measureWidth = function() {
                return this._wordsW;
            }, e.measureHeight = function() {
                return this._wordsH;
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), this.removeSelf(), this.off("loaded", this, this._onClipLoaded), O.prototype.destroy.call(this, e);
            }, u(0, e, "sheet", function() {
                return this._sheet;
            }, function(e) {
                e += "";
                var O = (this._sheet = e).split(" ");
                this._clipX = String(O[0]).length, this.clipY = O.length, this._indexMap = {};
                for (var k = 0; k < this._clipY; k++)
                    for (var T = O[k].split(""), u = 0, J = T.length; u < J; u++) this._indexMap[T[u]] = k * this._clipX + u;
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(c, this, "height", e), this.callLater(this.changeValue);
            }), u(0, e, "direction", function() {
                return this._direction;
            }, function(e) {
                this._direction = e, this.callLater(this.changeValue);
            }), u(0, e, "value", function() {
                return this._valueArr ? this._valueArr : "";
            }, function(e) {
                e += "", this._valueArr = e, this.callLater(this.changeValue);
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(c, this, "width", e), this.callLater(this.changeValue);
            }), u(0, e, "spaceX", function() {
                return this._spaceX;
            }, function(e) {
                this._spaceX = e, "horizontal" === this._direction && this.callLater(this.changeValue);
            }), u(0, e, "spaceY", function() {
                return this._spaceY;
            }, function(e) {
                this._spaceY = e, "horizontal" !== this._direction && this.callLater(this.changeValue);
            }), u(0, e, "align", function() {
                return this._align;
            }, function(e) {
                this._align = e, this.callLater(this.changeValue);
            }), k;
        }(c),
        Ie = (function(O) {
            function T(e) {
                this.advsListArr = [], this.resUrl = "https://unioncdn.layabox.com/config/iconlist.json", this._data = [], this._resquestTime = 36e4, this._appid = null, this._playIndex = 0, this._lunboTime = 5e3, T.__super.call(this), this._http = new i.window.XMLHttpRequest(), this.skin = e, this.setLoadUrl(), this.init(), this.size(120, 120);
            }
            I(T, "laya.ui.AdvImage", O);
            var e = T.prototype;
            e.setLoadUrl = function() {
                i.onLimixiu && (this.resUrl = "https://abc.layabox.com/public/wyw/gconfig.json");
            }, e.init = function() {
                this.isSupportJump() ? ((i.onMiniGame || i.onBDMiniGame) && q.timer.loop(this._resquestTime, this, this.onGetAdvsListData), this.onGetAdvsListData(), this.initEvent()) : this.visible = !1;
            }, e.initEvent = function() {
                this.on("click", this, this.onAdvsImgClick);
            }, e.onAdvsImgClick = function() {
                this.getCurrentAppidObj() && this.jumptoGame();
            }, e.revertAdvsData = function() {
                if (this.advsListArr[this._playIndex])
                    if (this.visible = !0, i.onLimixiu) {
                        this.visible = !0;
                        var e = this.advsListArr[this._playIndex];
                        e && (i.onLimixiu && GameStatusInfo.gameId == e.gameid ? this.onLunbo() : (this.skin = "https://abc.layabox.com/public/icon/" + e.iconUrl, this.size(103, 126)));
                    } else this.skin = this.advsListArr[this._playIndex];
            }, e.isSupportJump = function() {
                if (i.onMiniGame) return "function" == typeof wx.navigateToMiniProgram;
                if (i.onLimixiu) {
                    if (BK.QQ.skipGame) return !0;
                } else if (i.onBDMiniGame) return !0;
                return !1;
            }, e.jumptoGame = function() {
                var e = this,
                    O = this.advsListArr[this._playIndex],
                    k = parseInt(O.gameid),
                    T = O.extendInfo;
                O.path;
                if (i.onLimixiu) {
                    if (!O.isLunBo && !O.isLunBo) {
                        var u = Y.getJSON("gameObj");
                        u || (u = {}), u[O.gameid] || (u[O.gameid] = {}), u[O.gameid] = {
                            isclick: !0
                        }, Y.setJSON("gameObj", u), this.advsListArr.splice(this._playIndex, 1);
                    }
                    BK.QQ.skipGame(k, T), this.updateAdvsInfo();
                } else i.onMiniGame ? this.isSupportJump() && wx.navigateToMiniProgram({
                    appId: this._appid,
                    path: "",
                    extraData: "",
                    envVersion: "release",
                    success: function() {
                        console.log("-------------跳转成功--------------");
                    },
                    fail: function() {
                        console.log("-------------跳转失败--------------");
                    },
                    complete: function() {
                        console.log("-------------跳转接口调用成功--------------"), e.updateAdvsInfo();
                    }.bind(this)
                }) : i.onBDMiniGame || (this.visible = !1);
            }, e.updateAdvsInfo = function() {
                this.visible = !1, this.onLunbo(), q.timer.loop(this._lunboTime, this, this.onLunbo);
            }, e.onLunbo = function() {
                this._playIndex >= this.advsListArr.length - 1 ? this._playIndex = 0 : this._playIndex += 1, this.visible = !0, this.revertAdvsData();
            }, e.getCurrentAppidObj = function() {
                return this.advsListArr[this._playIndex];
            }, e.onGetAdvsListData = function() {
                var O = this,
                    e = T.randRange(1e4, 1e6),
                    k = this.resUrl + "?" + e;
                this._http.open("get", k, !0), this._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), this._http.responseType = "text", this._http.onerror = function(e) {
                    O._onError(e);
                }, this._http.onload = function(e) {
                    O._onLoad(e);
                }, this._http.send(null);
            }, e._onError = function(e) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            }, e._onLoad = function(e) {
                var O = this._http,
                    k = void 0 !== O.status ? O.status : 200;
                200 === k || 204 === k || 0 === k ? this.complete() : this.error("[" + O.status + "]" + O.statusText + ":" + O.responseURL);
            }, e.error = function(e) {
                this.event("error", e);
            }, e.complete = function() {
                try {
                    this._data = this._http.response || this._http.responseText, this._data = JSON.parse(this._data), i.onLimixiu ? (this.advsListArr = this.getAdvsQArr(this._data), this.advsListArr.length ? (this.updateAdvsInfo(), this.revertAdvsData()) : this.visible = !1) : (this.advsListArr = this._data.list, this._appid = this._data.appid, this.updateAdvsInfo(), this.revertAdvsData());
                } catch (e) {
                    !1, this.error(e.message);
                }
            }, e.getAdvsQArr = function(e) {
                var O = [],
                    k = Y.getJSON("gameObj");
                for (var T in e) {
                    var u = e[T];
                    k && k[u.gameid] && !u.isQiangZhi || O.push(u);
                }
                return O;
            }, e.clear = function() {
                var e = this._http;
                e.onerror = e.onabort = e.onprogress = e.onload = null;
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), q.timer.clear(this, this.onLunbo), O.prototype.destroy.call(this, !0), this.clear(), q.timer.clear(this, this.onGetAdvsListData);
            }, T.randRange = function(e, O) {
                return Math.floor(Math.random() * (O - e + 1)) + e;
            };
        }(R), function(e) {
            function O() {
                O.__super.call(this);
            }
            return I(O, "laya.ui.VScrollBar", b), O;
        }()),
        ie = function(e) {
            function O() {
                O.__super.call(this);
            }
            return I(O, "laya.ui.VSlider", L), O;
        }(),
        Ee = function(e) {
            function O() {
                O.__super.call(this);
            }
            return I(O, "laya.ui.HScrollBar", e), O.prototype.initialize = function() {
                e.prototype.initialize.call(this), this.slider.isVertical = !1;
            }, O;
        }(b),
        Ge = function(e) {
            function O(e) {
                O.__super.call(this, e), this.isVertical = !1;
            }
            return I(O, "laya.ui.HSlider", L), O;
        }(),
        qe = function(e) {
            function O() {
                O.__super.call(this);
            }
            I(O, "laya.ui.HBox", e);
            var k = O.prototype;
            return k.sortItem = function(e) {
                e && e.sort(function(e, O) {
                    return e.x - O.x;
                });
            }, k.changeItems = function() {
                this._itemChanged = !1;
                for (var e = [], O = 0, k = 0, T = this.numChildren; k < T; k++) {
                    var u = this.getChildAt(k);
                    u && (e.push(u), O = this._height ? this._height : Math.max(O, u.height * u.scaleY));
                }
                this.sortItem(e);
                var J = 0;
                for (k = 0, T = e.length; k < T; k++)(u = e[k]).x = J, J += u.width * u.scaleX + this._space, "top" == this._align ? u.y = 0 : "middle" == this._align ? u.y = .5 * (O - u.height * u.scaleY) : "bottom" == this._align && (u.y = O - u.height * u.scaleY);
                this._sizeChanged();
            }, u(0, k, "height", e.prototype._$get_height, function(e) {
                this._height != e && (q.superSet(g, this, "height", e), this.callLater(this.changeItems));
            }), O.NONE = "none", O.TOP = "top", O.MIDDLE = "middle", O.BOTTOM = "bottom", O;
        }(g),
        xe = function(e) {
            function O() {
                O.__super.call(this);
            }
            return I(O, "laya.ui.RadioGroup", d), O.prototype.createItem = function(e, O) {
                return new Ae(e, O);
            }, O;
        }(),
        Pe = function(e) {
            function O() {
                O.__super.call(this);
            }
            I(O, "laya.ui.VBox", e);
            var k = O.prototype;
            return k.changeItems = function() {
                this._itemChanged = !1;
                for (var e = [], O = 0, k = 0, T = this.numChildren; k < T; k++) {
                    var u = this.getChildAt(k);
                    u && (e.push(u), O = this._width ? this._width : Math.max(O, u.width * u.scaleX));
                }
                this.sortItem(e);
                var J = 0;
                for (k = 0, T = e.length; k < T; k++)(u = e[k]).y = J, J += u.height * u.scaleY + this._space, "left" == this._align ? u.x = 0 : "center" == this._align ? u.x = .5 * (O - u.width * u.scaleX) : "right" == this._align && (u.x = O - u.width * u.scaleX);
                this._sizeChanged();
            }, u(0, k, "width", e.prototype._$get_width, function(e) {
                this._width != e && (q.superSet(g, this, "width", e), this.callLater(this.changeItems));
            }), O.NONE = "none", O.LEFT = "left", O.CENTER = "center", O.RIGHT = "right", O;
        }(g),
        Ce = function(O) {
            function k(e) {
                this._vScrollBar = null, this._hScrollBar = null, void 0 === e && (e = ""), k.__super.call(this, e), this.on("change", this, this._onTextChange);
            }
            I(k, "laya.ui.TextArea", O);
            var e = k.prototype;
            return e._onTextChange = function() {
                this.callLater(this.changeScroll);
            }, e.destroy = function(e) {
                void 0 === e && (e = !0), O.prototype.destroy.call(this, e), this._vScrollBar && this._vScrollBar.destroy(), this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null;
            }, e.initialize = function() {
                this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0;
            }, e.onVBarChanged = function(e) {
                this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value);
            }, e.onHBarChanged = function(e) {
                this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value);
            }, e.changeScroll = function() {
                var e = this._vScrollBar && 0 < this._tf.maxScrollY,
                    O = this._hScrollBar && 0 < this._tf.maxScrollX,
                    k = e ? this._width - this._vScrollBar.width : this._width,
                    T = O ? this._height - this._hScrollBar.height : this._height,
                    u = this._tf.padding || f.labelPadding;
                this._tf.width = k, this._tf.height = T, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - u[2], this._vScrollBar.y = u[1], this._vScrollBar.height = this._height - (O ? this._hScrollBar.height : 0) - u[1] - u[3], this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = T / Math.max(this._tf.textHeight, T), this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = e), this._hScrollBar && (this._hScrollBar.x = u[0], this._hScrollBar.y = this._height - this._hScrollBar.height - u[3], this._hScrollBar.width = this._width - (e ? this._vScrollBar.width : 0) - u[0] - u[2], this._hScrollBar.scrollSize = Math.max(.033 * k, 1), this._hScrollBar.thumbPercent = k / Math.max(this._tf.textWidth, k), this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = O);
            }, e.scrollTo = function(e) {
                this.commitMeasure(), this._tf.scrollY = e;
            }, u(0, e, "scrollY", function() {
                return this._tf.scrollY;
            }), u(0, e, "width", O.prototype._$get_width, function(e) {
                q.superSet(ue, this, "width", e), this.callLater(this.changeScroll);
            }), u(0, e, "hScrollBar", function() {
                return this._hScrollBar;
            }), u(0, e, "height", O.prototype._$get_height, function(e) {
                q.superSet(ue, this, "height", e), this.callLater(this.changeScroll);
            }), u(0, e, "maxScrollX", function() {
                return this._tf.maxScrollX;
            }), u(0, e, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null;
            }, function(e) {
                null == this._vScrollBar && (this.addChild(this._vScrollBar = new Ie()), this._vScrollBar.on("change", this, this.onVBarChanged), this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = e;
            }), u(0, e, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null;
            }, function(e) {
                null == this._hScrollBar && (this.addChild(this._hScrollBar = new Ee()), this._hScrollBar.on("change", this, this.onHBarChanged), this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._hScrollBar.skin = e;
            }), u(0, e, "vScrollBar", function() {
                return this._vScrollBar;
            }), u(0, e, "maxScrollY", function() {
                return this._tf.maxScrollY;
            }), u(0, e, "scrollX", function() {
                return this._tf.scrollX;
            }), k;
        }(ue),
        ve = function(e) {
            function O() {
                O.__super.call(this);
            }
            return I(O, "laya.ui.Tab", d), O.prototype.createItem = function(e, O) {
                return new l(e, O);
            }, O;
        }();
    q.__init([N, $]);
}(window, document, Laya);