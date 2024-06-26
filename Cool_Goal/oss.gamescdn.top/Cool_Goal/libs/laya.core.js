var Laya = window.Laya = function(l, t) {
    var u = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, e) {
            return 1 == arguments.length ? u.__presubstr.call(this, t) : u.__presubstr.call(this, t, 0 < e ? e : this.length + e);
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$();
            });
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array);
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var n = 0; n < t; n++) i[n] = e;
            return i;
        },
        __extend: function(t, e) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = Object.getOwnPropertyDescriptor(e, i),
                        s = n.get,
                        r = n.set;
                    s || r ? s && r ? Object.defineProperty(t, i, n) : (s && Object.defineProperty(t, i, s), r && Object.defineProperty(t, i, r)) : t[i] = e[i];
                }

            function o() {
                u.un(this, "constructor", t);
            }
            o.prototype = e.prototype, t.prototype = new o(), u.un(t.prototype, "__imps", u.__copy({}, e.prototype.__imps));
        },
        __copy: function(t, e) {
            if (!e) return null;
            for (var i in t = t || {}, e) t[i] = e[i];
            return t;
        },
        __package: function(t, e) {
            if (!u.__packages[t]) {
                u.__packages[t] = !0;
                var i = l,
                    n = t.split(".");
                if (1 < n.length)
                    for (var s = 0, r = n.length - 1; s < r; s++) {
                        var o = i[n[s]];
                        i = o || (i[n[s]] = {});
                    }
                i[n[n.length - 1]] || (i[n[n.length - 1]] = e || {});
            }
        },
        __hasOwnProperty: function(t, e) {
            return e = e || this, Object.hasOwnProperty.call(e, t) || function t(e, i) {
                if (Object.hasOwnProperty.call(i.prototype, e)) return !0;
                var n = i.prototype.__super;
                return null == n ? null : t(e, n);
            }(t, e.__class);
        },
        __typeof: function(t, e) {
            if (!t || !e) return !1;
            if (e === String) return "string" == typeof t;
            if (e === Number) return "number" == typeof t;
            if (e.__interface__) e = e.__interface__;
            else if ("string" != typeof e) return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e;
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null;
        },
        __int: function(t) {
            return t ? parseInt(t) : 0;
        },
        interface: function(t, e) {
            u.__package(t, {});
            var i = u.__internals,
                n = i[t] = i[t] || {
                    self: t
                };
            if (e) {
                var s = e.split(",");
                n.extend = [];
                for (var r = 0; r < s.length; r++) {
                    var o = s[r];
                    i[o] = i[o] || {
                        self: o
                    }, n.extend.push(i[o]);
                }
            }
            var a = l,
                h = t.split(".");
            for (r = 0; r < h.length - 1; r++) a = a[h[r]];
            a[h[h.length - 1]] = {
                __interface__: t
            };
        },
        class: function(t, e, i, n) {
            if (i && u.__extend(t, i), e)
                if (u.__package(e, t), u.__classmap[e] = t, 0 < e.indexOf(".")) {
                    if (0 == e.indexOf("laya.")) {
                        var s = e.split(".");
                        n = n || s[s.length - 1], u[n] && console.log("Warning!,this class[" + n + "] already exist:", u[n]), u[n] = t;
                    }
                } else "Main" == e ? l.Main = t : (u[e] && console.log("Error!,this class[" + e + "] already exist:", u[e]), u[e] = t);
            var r = u.un,
                o = t.prototype;
            r(o, "hasOwnProperty", u.__hasOwnProperty), r(o, "__class", t), r(o, "__super", i), r(o, "__className", e), r(t, "__super", i), r(t, "__className", e), r(t, "__isclass", !0), r(t, "super", function(t) {
                this.__super.call(t);
            });
        },
        imps: function(t, e) {
            if (!e) return null;
            var s = t.__imps || u.un(t, "__imps", {});

            function r(t) {
                var e, i;
                if ((e = u.__internals[t]) && (s[t] = !0, i = e.extend))
                    for (var n = 0; n < i.length; n++) r(i[n].self);
            }
            for (var i in e) r(i);
        },
        superSet: function(t, e, i, n) {
            var s = t.prototype["_$set_" + i];
            s && s.call(e, n);
        },
        superGet: function(t, e, i) {
            var n = t.prototype["_$get_" + i];
            return n ? n.call(e) : null;
        },
        getset: function(t, e, i, n, s) {
            t ? (n && (e["_$GET_" + i] = n), s && (e["_$SET_" + i] = s)) : (n && u.un(e, "_$get_" + i, n), s && u.un(e, "_$set_" + i, s)), n && s ? Object.defineProperty(e, i, {
                get: n,
                set: s,
                enumerable: !1,
                configurable: !0
            }) : (n && Object.defineProperty(e, i, {
                get: n,
                enumerable: !1,
                configurable: !0
            }), s && Object.defineProperty(e, i, {
                set: s,
                enumerable: !1,
                configurable: !0
            }));
        },
        static: function(i, n) {
            for (var s = 0, t = n.length; s < t; s += 2)
                if ("length" == n[s]) i.length = n[s + 1].call(i);
                else {
                    function e() {
                        var e = n[s],
                            t = n[s + 1];
                        Object.defineProperty(i, e, {
                            get: function() {
                                return delete this[e], this[e] = t.call(this);
                            },
                            set: function(t) {
                                delete this[e], this[e] = t;
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                    }
                    e();
                }
        },
        un: function(t, e, i) {
            return i || (i = t[e]), u.__propun.value = i, Object.defineProperty(t, e, u.__propun), i;
        },
        uns: function(e, t) {
            t.forEach(function(t) {
                u.un(e, t);
            });
        }
    };
    return l.console = l.console || {
        log: function() {}
    }, l.trace = l.console.log, Error.prototype.throwError = function() {
        throw arguments;
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), u;
}(window, document);
! function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec;
}(window, document, Laya),
function(g, t, v) {
    v.un, v.uns;
    var i = v.static,
        y = v.class,
        f = v.getset;
    v.__newvec;
    v.interface("laya.runtime.IMarket"), v.interface("laya.filters.IFilter"), v.interface("laya.resource.IDispose"), v.interface("laya.runtime.IPlatform"), v.interface("laya.resource.IDestroy"), v.interface("laya.runtime.ICPlatformClass"), v.interface("laya.resource.ICreateResource"), v.interface("laya.runtime.IConchRenderObject"), v.interface("laya.resource.ISingletonElement"), v.interface("laya.runtime.IPlatformClass", "laya.runtime.IPlatform");
    f(1, v, "alertGlobalError", null, function(t) {
        var r = 0;
        rt.window.onerror = t ? function(t, e, i, n, s) {
            r++ < 5 && s && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + s.stack);
        } : null;
    }), v.init = function(t, e, i) {
        for (var n = [], s = 2, r = arguments.length; s < r; s++) n.push(arguments[s]);
        if (!v._isinit) {
            v._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = v._arrayBufferSlice), rt.__init__(), it.isConchApp || V.__init__(), v.systemTimer = new k(!1), v.startTimer = new k(!1), v.physicsTimer = new k(!1), v.updateTimer = new k(!1), v.lateTimer = new k(!1), v.timer = new k(!1), v.loader = new Yt(), tt.__init__();
            for (var o = !1, a = (s = 0, n.length); s < a; s++) n[s] && n[s].enable && (n[s].enable(), "WebGL" == typeof n[s] && (o = !0));
            return it.isConchApp && (o || laya.webgl.WebGL.enable(), bt.enableNative()), F.beginCheck(), v._currentStage = v.stage = new te(), B.rootPath = B._basePath = v._getUrlPath(), v.render = new it(0, 0), v.stage.size(t, e), g.stage = v.stage, T.__init__(), $.__init__(), d.instance.__init__(v.stage, it.canvas), ne.__init__(), Lt.autoStopMusic = !0, it.canvas;
        }
    }, v._getUrlPath = function() {
        var t = rt.window.location,
            e = t.pathname;
        return e = ":" == e.charAt(2) ? e.substring(1) : e, B.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
    }, v._arrayBufferSlice = function(t, e) {
        var i = new Uint8Array(this, t, e - t),
            n = new Uint8Array(i.length);
        return n.set(i), n.buffer;
    }, v._runScript = function(t) {
        return rt.window[v._evcode](t);
    }, v.enableDebugPanel = function(t) {
        if (void 0 === t && (t = "libs/laya.debugtool.js"), v.DebugPanel) v.DebugPanel.enable();
        else {
            var e = rt.createElement("script");
            e.onload = function() {
                v.DebugPanel.enable();
            }, e.src = t, rt.document.body.appendChild(e);
        }
    }, v.stage = null, v.systemTimer = null, v.startTimer = null, v.physicsTimer = null, v.updateTimer = null, v.lateTimer = null, v.timer = null, v.loader = null, v.version = "2.0.2", v.render = null, v._currentStage = null, v._isinit = !1, v.isWXOpenDataContext = !1, v.isWXPosMsg = !1, i(v, ["conchMarket", function() {
        return this.conchMarket = g.conch ? conchMarket : null;
    }, "PlatformClass", function() {
        return this.PlatformClass = g.PlatformClass;
    }, "_evcode", function() {
        return this._evcode = "eval";
    }]);
    var n = function() {
            function m() {}
            return y(m, "laya.renders.LayaGLQuickRunner"), m.__init__ = function() {
                m.map[515] = m.alpha_transform_drawLayaGL, m.map[513] = m.alpha_drawLayaGL, m.map[514] = m.transform_drawLayaGL, m.map[8194] = m.transform_drawNodes, m.map[259] = m.alpha_transform_drawTexture, m.map[257] = m.alpha_drawTexture, m.map[258] = m.transform_drawTexture, m.map[8704] = m.drawLayaGL_drawNodes;
            }, m.transform_drawTexture = function(t, e, i, n) {
                t._style;
                var s = t.texture;
                e.saveTransform(m.curMat), e.transformByMatrix(t.transform, i, n), e.drawTexture(s, -t.pivotX, -t.pivotY, t._width || s.width, t._height || s.height), e.restoreTransform(m.curMat);
            }, m.alpha_drawTexture = function(t, e, i, n) {
                var s, r = t._style,
                    o = t.texture;
                if (.01 < (s = r.alpha) || t._needRepaint()) {
                    var a = e.globalAlpha;
                    e.globalAlpha *= s, e.drawTexture(o, i - r.pivotX + o.offsetX, n - r.pivotY + o.offsetY, t._width || o.width, t._height || o.height), e.globalAlpha = a;
                }
            }, m.alpha_transform_drawTexture = function(t, e, i, n) {
                var s, r = t._style,
                    o = t.texture;
                if (.01 < (s = r.alpha) || t._needRepaint()) {
                    var a = e.globalAlpha;
                    e.globalAlpha *= s, e.saveTransform(m.curMat), e.transformByMatrix(t.transform, i, n), e.drawTexture(o, -r.pivotX + o.offsetX, -r.pivotY + o.offsetY, t._width || o.width, t._height || o.height), e.restoreTransform(m.curMat), e.globalAlpha = a;
                }
            }, m.alpha_transform_drawLayaGL = function(t, e, i, n) {
                var s, r = t._style;
                if (.01 < (s = r.alpha) || t._needRepaint()) {
                    var o = e.globalAlpha;
                    e.globalAlpha *= s, e.saveTransform(m.curMat), e.transformByMatrix(t.transform, i, n), t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY), e.restoreTransform(m.curMat), e.globalAlpha = o;
                }
            }, m.alpha_drawLayaGL = function(t, e, i, n) {
                var s, r = t._style;
                if (.01 < (s = r.alpha) || t._needRepaint()) {
                    var o = e.globalAlpha;
                    e.globalAlpha *= s, t._graphics && t._graphics._render(t, e, i - r.pivotX, n - r.pivotY), e.globalAlpha = o;
                }
            }, m.transform_drawLayaGL = function(t, e, i, n) {
                var s = t._style;
                e.saveTransform(m.curMat), e.transformByMatrix(t.transform, i, n), t._graphics && t._graphics._render(t, e, -s.pivotX, -s.pivotY), e.restoreTransform(m.curMat);
            }, m.transform_drawNodes = function(t, e, i, n) {
                var s = t._getBit(256) && e.drawCallOptimize(!0),
                    r = t._style;
                e.saveTransform(m.curMat), e.transformByMatrix(t.transform, i, n), i = -r.pivotX, n = -r.pivotY;
                var o, a = t._children,
                    h = a.length;
                if (r.viewport) {
                    var l = r.viewport,
                        u = l.x,
                        c = l.y,
                        _ = l.right,
                        d = l.bottom,
                        f = NaN,
                        p = NaN;
                    for (g = 0; g < h; ++g)(o = a[g])._visible && (f = o._x) < _ && f + o.width > u && (p = o._y) < d && p + o.height > c && o.render(e, i, n);
                } else
                    for (var g = 0; g < h; ++g)(o = a[g])._visible && o.render(e, i, n);
                e.restoreTransform(m.curMat), s && e.drawCallOptimize(!1);
            }, m.drawLayaGL_drawNodes = function(t, e, i, n) {
                var s = t._getBit(256) && e.drawCallOptimize(!0),
                    r = t._style;
                i -= r.pivotX, n -= r.pivotY, t._graphics && t._graphics._render(t, e, i, n);
                var o, a = t._children,
                    h = a.length;
                if (r.viewport) {
                    var l = r.viewport,
                        u = l.x,
                        c = l.y,
                        _ = l.right,
                        d = l.bottom,
                        f = NaN,
                        p = NaN;
                    for (g = 0; g < h; ++g)(o = a[g])._visible && (f = o._x) < _ && f + o.width > u && (p = o._y) < d && p + o.height > c && o.render(e, i, n);
                } else
                    for (var g = 0; g < h; ++g)(o = a[g])._visible && o.render(e, i, n);
                s && e.drawCallOptimize(!1);
            }, m.map = {}, i(m, ["curMat", function() {
                return this.curMat = new G();
            }]), m;
        }(),
        m = function() {
            function h(t) {
                if (this.arrColor = [], null == t) return this.strColor = "#00000000", this.numColor = 0, void(this.arrColor = [0, 0, 0, 0]);
                var e = 0,
                    i = 0,
                    n = 0;
                if ("string" == typeof t)
                    if (0 <= t.indexOf("rgba(") || 0 <= t.indexOf("rgb(")) {
                        var s, r, o = t;
                        for (s = o.indexOf("("), r = o.indexOf(")"), o = o.substring(s + 1, r), this.arrColor = o.split(","), i = this.arrColor.length, e = 0; e < i; e++) this.arrColor[e] = parseFloat(this.arrColor[e]), e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                        n = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], this.strColor = t;
                    } else {
                        if ("#" === (this.strColor = t).charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                            var a = "";
                            for (e = 0; e < i; e++) a += t[e] + t[e];
                            t = a;
                        }
                        n = parseInt(t, 16);
                    }
                else n = t, this.strColor = yt.toHexColor(n);
                0 <= this.strColor.indexOf("rgba") || 9 === this.strColor.length ? (this.arrColor = [((4278190080 & n) >>> 24) / 255, ((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255], this.numColor = (4278190080 & n) >>> 24 | (16711680 & n) >> 8 | (65280 & n) << 8 | (255 & n) << 24) : (this.arrColor = [((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255, 1], this.numColor = 4278190080 | (16711680 & n) >> 16 | 65280 & n | (255 & n) << 16), this.arrColor.__id = ++h._COLODID;
            }
            return y(h, "laya.utils.ColorUtils"), h._initDefault = function() {
                for (var t in h._DEFAULT = {}, h._COLOR_MAP) h._SAVE[t] = h._DEFAULT[t] = new h(h._COLOR_MAP[t]);
                return h._DEFAULT;
            }, h._initSaveMap = function() {
                for (var t in h._SAVE_SIZE = 0, h._SAVE = {}, h._DEFAULT) h._SAVE[t] = h._DEFAULT[t];
            }, h.create = function(t) {
                var e = t + "",
                    i = h._SAVE[e];
                return null != i ? i : (h._SAVE_SIZE < 1e3 && h._initSaveMap(), h._SAVE[e] = new h(t));
            }, h._SAVE = {}, h._SAVE_SIZE = 0, h._COLOR_MAP = {
                purple: "#800080",
                orange: "#ffa500",
                white: "#FFFFFF",
                red: "#FF0000",
                green: "#00FF00",
                blue: "#0000FF",
                black: "#000000",
                yellow: "#FFFF00",
                gray: "#808080"
            }, h._DEFAULT = h._initDefault(), h._COLODID = 1, h;
        }(),
        a = function() {
            function l() {}
            y(l, "laya.display.cmd.FillTextureCmd");
            var t = l.prototype;
            return t.recover = function() {
                this.texture = null, this.offset = null, this.other = null, I.recover("FillTextureCmd", this);
            }, t.run = function(t, e, i) {
                t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
            }, f(0, t, "cmdID", function() {
                return "FillTexture";
            }), l.create = function(t, e, i, n, s, r, o, a) {
                var h = I.getItemByClass("FillTextureCmd", l);
                return h.texture = t, h.x = e, h.y = i, h.width = n, h.height = s, h.type = r, h.offset = o, h.other = a, h;
            }, l.ID = "FillTexture", l;
        }(),
        r = function() {
            function t() {
                this._action = null, this._glRender = null;
            }
            y(t, "laya.filters.Filter");
            var e = t.prototype;
            return v.imps(e, {
                "laya.filters.IFilter": !0
            }), f(0, e, "type", function() {
                return -1;
            }), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filter = null, t._recycleScope = null, t;
        }(),
        h = (function() {
            function e() {}
            y(e, "laya.utils.Log"), e.enable = function() {
                e._logdiv || ((e._logdiv = rt.createElement("div")).style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", rt.document.body.appendChild(e._logdiv), (e._btn = rt.createElement("button")).innerText = "Hide", e._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", e._btn.onclick = e.toggle, rt.document.body.appendChild(e._btn));
            }, e.toggle = function() {
                var t = e._logdiv.style;
                "" === t.display ? (e._btn.innerText = "Show", t.display = "none") : (e._btn.innerText = "Hide", t.display = "");
            }, e.print = function(t) {
                e._logdiv && (e.maxCount <= e._count && e.clear(), e._count++, e._logdiv.innerText += t + "\n", e.autoScrollToBottom && e._logdiv.scrollHeight - e._logdiv.scrollTop - e._logdiv.clientHeight < 50 && (e._logdiv.scrollTop = e._logdiv.scrollHeight));
            }, e.clear = function() {
                e._logdiv.innerText = "", e._count = 0;
            }, e._logdiv = null, e._btn = null, e._count = 0, e.maxCount = 50, e.autoScrollToBottom = !0;
        }(), function() {
            function f() {
                this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._lastClickTime = 0, this._event = new e();
            }
            y(f, "laya.events.TouchManager");
            var t = f.prototype;
            return t._clearTempArrs = function() {
                f._oldArr.length = 0, f._newArr.length = 0, f._tEleArr.length = 0;
            }, t.getTouchFromArr = function(t, e) {
                var i, n, s = 0;
                for (i = e.length, s = 0; s < i; s++)
                    if ((n = e[s]).id == t) return n;
                return null;
            }, t.removeTouchFromArr = function(t, e) {
                var i = 0;
                for (i = e.length - 1; 0 <= i; i--) e[i].id == t && e.splice(i, 1);
            }, t.createTouchO = function(t, e) {
                var i;
                return (i = I.getItem("TouchData") || {}).id = e, i.tar = t, i;
            }, t.onMouseDown = function(t, e, i) {
                var n, s, r, o;
                (void 0 === i && (i = !1), this.enable) && (n = this.getTouchFromArr(e, this.preOvers), r = this.getEles(t, null, f._tEleArr), n ? n.tar = t : (s = this.createTouchO(t, e), this.preOvers.push(s)), rt.onMobile && this.sendEvents(r, "mouseover"), o = i ? this.preDowns : this.preRightDowns, (n = this.getTouchFromArr(e, o)) ? n.tar = t : (s = this.createTouchO(t, e), o.push(s)), this.sendEvents(r, i ? "mousedown" : "rightmousedown"), this._clearTempArrs());
            }, t.sendEvents = function(t, e) {
                var i, n, s, r = 0;
                for (i = t.length, this._event._stoped = !1, n = t[0], r = 0; r < i; r++) {
                    if ((s = t[r]).destroyed) return;
                    if (s.event(e, this._event.setTo(e, s, n)), this._event._stoped) break;
                }
            }, t.getEles = function(t, e, i) {
                for (i ? i.length = 0 : i = []; t && t != e;) i.push(t), t = t.parent;
                return i;
            }, t.checkMouseOutAndOverOfMove = function(t, e, i) {
                if (void 0 === i && (i = 0), e != t) {
                    var n, s, r = 0,
                        o = 0;
                    if (e.contains(t)) s = this.getEles(t, e, f._tEleArr), this.sendEvents(s, "mouseover");
                    else if (t.contains(e)) s = this.getEles(e, t, f._tEleArr), this.sendEvents(s, "mouseout");
                    else {
                        var a, h;
                        (s = f._tEleArr).length = 0, a = this.getEles(e, null, f._oldArr), h = this.getEles(t, null, f._newArr), o = a.length;
                        var l = 0;
                        for (r = 0; r < o; r++) {
                            if (n = a[r], 0 <= (l = h.indexOf(n))) {
                                h.splice(l, h.length - l);
                                break;
                            }
                            s.push(n);
                        }
                        0 < s.length && this.sendEvents(s, "mouseout"), 0 < h.length && this.sendEvents(h, "mouseover");
                    }
                }
            }, t.onMouseMove = function(t, e) {
                var i, n;
                this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar), i.tar = t, n = this.getEles(t, null, f._tEleArr)) : (n = this.getEles(t, null, f._tEleArr), this.sendEvents(n, "mouseover"), this.preOvers.push(this.createTouchO(t, e))), this.sendEvents(n, "mousemove"), this._clearTempArrs());
            }, t.getLastOvers = function() {
                return (f._tEleArr.length = 0) < this.preOvers.length && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, f._tEleArr) : (f._tEleArr.push(v.stage), f._tEleArr);
            }, t.stageMouseOut = function() {
                var t;
                t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout");
            }, t.onMouseUp = function(t, e, i) {
                if (void 0 === i && (i = !1), this.enable) {
                    var n, s, r, o, a, h, l = 0,
                        u = 0,
                        c = rt.onMobile;
                    if (s = this.getEles(t, null, f._tEleArr), this.sendEvents(s, i ? "mouseup" : "rightmouseup"), h = i ? this.preDowns : this.preRightDowns, n = this.getTouchFromArr(e, h)) {
                        var _, d = rt.now();
                        if (_ = d - this._lastClickTime < 300, this._lastClickTime = d, t == n.tar) a = s;
                        else
                            for (r = this.getEles(n.tar, null, f._oldArr), (a = f._newArr).length = 0, u = r.length, l = 0; l < u; l++) o = r[l], 0 <= s.indexOf(o) && a.push(o);
                        0 < a.length && this.sendEvents(a, i ? "click" : "rightclick"), i && _ && this.sendEvents(a, "doubleclick"), this.removeTouchFromArr(e, h), n.tar = null, I.recover("TouchData", n);
                    } else;
                    (n = this.getTouchFromArr(e, this.preOvers)) && c && ((a = this.getEles(n.tar, null, a)) && 0 < a.length && this.sendEvents(a, "mouseout"), this.removeTouchFromArr(e, this.preOvers), n.tar = null, I.recover("TouchData", n)), this._clearTempArrs();
                }
            }, f._oldArr = [], f._newArr = [], f._tEleArr = [], i(f, ["I", function() {
                return this.I = new f();
            }]), f;
        }()),
        l = function() {
            function o() {}
            y(o, "laya.display.cmd.DrawImageCmd");
            var t = o.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, I.recover("DrawImageCmd", this);
            }, t.run = function(t, e, i) {
                t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
            }, f(0, t, "cmdID", function() {
                return "DrawImage";
            }), o.create = function(t, e, i, n, s) {
                var r = I.getItemByClass("DrawImageCmd", o);
                return (r.texture = t)._addReference(), r.x = e, r.y = i, r.width = n, r.height = s, r;
            }, o.ID = "DrawImage", o;
        }(),
        s = function() {
            function t() {
                this._id = yt.getGID(), this._resetComp();
            }
            y(t, "laya.components.Component");
            var e = t.prototype;
            return v.imps(e, {
                "laya.resource.ISingletonElement": !0,
                "laya.resource.IDestroy": !0
            }), e._isScript = function() {
                return !1;
            }, e._resetComp = function() {
                this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
            }, e._getIndexInList = function() {
                return this._indexInList;
            }, e._setIndexInList = function(t) {
                this._indexInList = t;
            }, e._onAdded = function() {}, e._onAwake = function() {}, e._onEnable = function() {}, e._onDisable = function() {}, e._onEnableInScene = function() {}, e._onDisableInScene = function() {}, e._onDestroy = function() {}, e.onReset = function() {}, e._parse = function(t) {}, e._cloneTo = function(t) {}, e._setActive = function(t) {
                t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
            }, e._setActiveInScene = function(t) {
                t ? this._onEnableInScene() : this._onDisableInScene();
            }, e.destroy = function() {
                this.owner && this.owner._destroyComponent(this);
            }, e._destroy = function() {
                this.owner.activeInHierarchy && this._enabled && (this._setActive(!1), this._isScript() && this.onDisable()), this.owner._scene && this._setActiveInScene(!1), this._onDestroy(), this._destroyed = !0, this.onReset !== laya.components.Component.prototype.onReset ? (this.onReset(), this._resetComp(), I.recoverByClass(this)) : this._resetComp();
            }, f(0, e, "id", function() {
                return this._id;
            }), f(0, e, "enabled", function() {
                return this._enabled;
            }, function(t) {
                this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable());
            }), f(0, e, "isSingleton", function() {
                return !0;
            }), f(0, e, "destroyed", function() {
                return this._destroyed;
            }), t;
        }(),
        u = function() {
            var h;

            function e() {
                this._$0__events = null;
            }
            y(e, "laya.events.EventDispatcher");
            var t = e.prototype;
            return t.hasListener = function(t) {
                return !!(this._$0__events && this._$0__events[t]);
            }, t.event = function(t, e) {
                if (!this._$0__events || !this._$0__events[t]) return !1;
                var i = this._$0__events[t];
                if (i.run) i.once && delete this._$0__events[t], null != e ? i.runWith(e) : i.run();
                else {
                    for (var n = 0, s = i.length; n < s; n++) {
                        var r = i[n];
                        r && (null != e ? r.runWith(e) : r.run()), r && !r.once || (i.splice(n, 1), n--, s--);
                    }
                    0 === i.length && this._$0__events && delete this._$0__events[t];
                }
                return !0;
            }, t.on = function(t, e, i, n) {
                return this._createListener(t, e, i, n, !1);
            }, t.once = function(t, e, i, n) {
                return this._createListener(t, e, i, n, !0);
            }, t._createListener = function(t, e, i, n, s, r) {
                void 0 === r && (r = !0), r && this.off(t, e, i, s);
                var o = h.create(e || this, i, n, s);
                this._$0__events || (this._$0__events = {});
                var a = this._$0__events;
                return a[t] ? a[t].run ? a[t] = [a[t], o] : a[t].push(o) : a[t] = o, this;
            }, t.off = function(t, e, i, n) {
                if (void 0 === n && (n = !1), !this._$0__events || !this._$0__events[t]) return this;
                var s = this._$0__events[t];
                if (null != s)
                    if (s.run) e && s.caller !== e || null != i && s.method !== i || n && !s.once || (delete this._$0__events[t], s.recover());
                    else {
                        for (var r = 0, o = 0, a = s.length; o < a; o++) {
                            var h = s[o];
                            h ? !h || e && h.caller !== e || null != i && h.method !== i || n && !h.once || (r++, s[o] = null, h.recover()) : r++;
                        }
                        r === a && delete this._$0__events[t];
                    }
                return this;
            }, t.offAll = function(t) {
                var e = this._$0__events;
                if (!e) return this;
                if (t) this._recoverHandlers(e[t]), delete e[t];
                else {
                    for (var i in e) this._recoverHandlers(e[i]);
                    this._$0__events = null;
                }
                return this;
            }, t.offAllCaller = function(t) {
                if (t && this._$0__events)
                    for (var e in this._$0__events) this.off(e, t, null);
                return this;
            }, t._recoverHandlers = function(t) {
                if (t)
                    if (t.run) t.recover();
                    else
                        for (var e = t.length - 1; - 1 < e; e--) t[e] && (t[e].recover(), t[e] = null);
            }, t.isMouseEvent = function(t) {
                return e.MOUSE_EVENTS[t] || !1;
            }, e.MOUSE_EVENTS = {
                rightmousedown: !0,
                rightmouseup: !0,
                rightclick: !0,
                mousedown: !0,
                mouseup: !0,
                mousemove: !0,
                mouseover: !0,
                mouseout: !0,
                click: !0,
                doubleclick: !0
            }, e.__init$ = function() {
                Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                    enumerable: !1,
                    writable: !0
                }), h = function(t) {
                    function s(t, e, i, n) {
                        s.__super.call(this, t, e, i, n);
                    }
                    return y(s, "", x), s.prototype.recover = function() {
                        0 < this._id && (this._id = 0, s._pool.push(this.clear()));
                    }, s.create = function(t, e, i, n) {
                        return void 0 === n && (n = !0), s._pool.length ? s._pool.pop().setTo(t, e, i, n) : new s(t, e, i, n);
                    }, s._pool = [], s;
                }();
            }, e;
        }(),
        x = function() {
            function s(t, e, i, n) {
                this.once = !1, void(this._id = 0) === n && (n = !1), this.setTo(t, e, i, n);
            }
            y(s, "laya.utils.Handler");
            var t = s.prototype;
            return t.setTo = function(t, e, i, n) {
                return this._id = s._gid++, this.caller = t, this.method = e, this.args = i, this.once = n, this;
            }, t.run = function() {
                if (null == this.method) return null;
                var t = this._id,
                    e = this.method.apply(this.caller, this.args);
                return this._id === t && this.once && this.recover(), e;
            }, t.runWith = function(t) {
                if (null == this.method) return null;
                var e = this._id;
                if (null == t) var i = this.method.apply(this.caller, this.args);
                else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
                return this._id === e && this.once && this.recover(), i;
            }, t.clear = function() {
                return this.caller = null, this.method = null, this.args = null, this;
            }, t.recover = function() {
                0 < this._id && (this._id = 0, s._pool.push(this.clear()));
            }, s.create = function(t, e, i, n) {
                return void 0 === n && (n = !0), s._pool.length ? s._pool.pop().setTo(t, e, i, n) : new s(t, e, i, n);
            }, s._pool = [], s._gid = 1, s;
        }(),
        c = function() {
            function _() {}
            y(_, "laya.display.cmd.DrawTrianglesCmd");
            var t = _.prototype;
            return t.recover = function() {
                this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, this.matrix = null, I.recover("DrawTrianglesCmd", this);
            }, t.run = function(t, e, i) {
                t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode);
            }, f(0, t, "cmdID", function() {
                return "DrawTriangles";
            }), _.create = function(t, e, i, n, s, r, o, a, h, l) {
                var u = I.getItemByClass("DrawTrianglesCmd", _);
                if (u.texture = t, u.x = e, u.y = i, u.vertices = n, u.uvs = s, u.indices = r, u.matrix = o, u.alpha = a, h) {
                    u.color = new Et();
                    var c = m.create(h).arrColor;
                    u.color.color(255 * c[0], 255 * c[1], 255 * c[2], 255 * c[3]);
                }
                return u.blendMode = l, u;
            }, _.ID = "DrawTriangles", _;
        }(),
        _ = function() {
            function u() {}
            y(u, "laya.display.cmd.DrawPieCmd");
            var t = u.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, I.recover("DrawPieCmd", this);
            }, t.run = function(t, e, i) {
                t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }, f(0, t, "startAngle", function() {
                return 180 * this._startAngle / Math.PI;
            }, function(t) {
                this._startAngle = t * Math.PI / 180;
            }), f(0, t, "cmdID", function() {
                return "DrawPie";
            }), f(0, t, "endAngle", function() {
                return 180 * this._endAngle / Math.PI;
            }, function(t) {
                this._endAngle = t * Math.PI / 180;
            }), u.create = function(t, e, i, n, s, r, o, a, h) {
                var l = I.getItemByClass("DrawPieCmd", u);
                return l.x = t, l.y = e, l.radius = i, l._startAngle = n, l._endAngle = s, l.fillColor = r, l.lineColor = o, l.lineWidth = a, l.vid = h, l;
            }, u.ID = "DrawPie", u;
        }(),
        M = function() {
            function t() {
                this.id = NaN, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null, this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1;
            }
            y(t, "laya.utils.WordText");
            var e = t.prototype;
            return e.setText = function(t) {
                this.changed = !0, this._text = t, this.width = -1, this.pageChars = [];
            }, e.toString = function() {
                return this._text;
            }, e.charCodeAt = function(t) {
                return this._text ? this._text.charCodeAt(t) : NaN;
            }, e.charAt = function(t) {
                return this._text ? this._text.charAt(t) : null;
            }, e.cleanCache = function() {
                this.pageChars = [], this.startID = 0;
            }, f(0, e, "length", function() {
                return this._text ? this._text.length : 0;
            }), t;
        }(),
        e = function() {
            function t() {}
            y(t, "laya.events.Event");
            var e = t.prototype;
            return e.setTo = function(t, e, i) {
                return this.type = t, this.currentTarget = e, this.target = i, this;
            }, e.stopPropagation = function() {
                this._stoped = !0;
            }, f(0, e, "stageY", function() {
                return v.stage.mouseY;
            }), f(0, e, "charCode", function() {
                return this.nativeEvent.charCode;
            }), f(0, e, "touches", function() {
                if (!this.nativeEvent) return null;
                var t = this.nativeEvent.touches;
                if (t)
                    for (var e = v.stage, i = 0, n = t.length; i < n; i++) {
                        var s = t[i],
                            r = ct.TEMP;
                        r.setTo(s.clientX, s.clientY), e._canvasTransform.invertTransformPoint(r), e.transform.invertTransformPoint(r), s.stageX = r.x, s.stageY = r.y;
                    }
                return t;
            }), f(0, e, "keyLocation", function() {
                return this.nativeEvent.location || this.nativeEvent.keyLocation;
            }), f(0, e, "ctrlKey", function() {
                return this.nativeEvent.ctrlKey;
            }), f(0, e, "altKey", function() {
                return this.nativeEvent.altKey;
            }), f(0, e, "shiftKey", function() {
                return this.nativeEvent.shiftKey;
            }), f(0, e, "stageX", function() {
                return v.stage.mouseX;
            }), t.EMPTY = new t(), t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.READY = "ready", t.PROGRESS = "progress", t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", t.MESSAGE = "message", t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", t.KEY_UP = "keyup", t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", t.DRAG_END = "dragend", t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", t.FOCUS_CHANGE = "focuschange", t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", t.START = "start", t.END = "end", t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", t.DEVICE_LOST = "devicelost", t.TRANSFORM_CHANGED = "transformchanged", t.ANIMATION_CHANGED = "animationchanged", t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", t.TRIGGER_EXIT = "triggerexit", t;
        }(),
        w = function() {
            function h() {}
            return y(h, "laya.utils.Stat"), f(1, h, "onclick", null, function(t) {
                h._sp && h._sp.on("click", h._sp, t), h._canvas && (h._canvas.source.onclick = t, h._canvas.source.style.pointerEvents = "");
            }), h.show = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), rt.onMiniGame || rt.onLimixiu || it.isConchApp || rt.onBDMiniGame || rt.onKGMiniGame || rt.onQGMiniGame || (h._useCanvas = !0), h._show = !0, h._fpsData.length = 60, h._view[0] = {
                    title: "FPS(Canvas)",
                    value: "_fpsStr",
                    color: "yellow",
                    units: "int"
                }, h._view[1] = {
                    title: "Sprite",
                    value: "_spriteStr",
                    color: "white",
                    units: "int"
                }, h._view[2] = {
                    title: "RenderBatches",
                    value: "renderBatches",
                    color: "white",
                    units: "int"
                }, h._view[3] = {
                    title: "SavedRenderBatches",
                    value: "savedRenderBatches",
                    color: "white",
                    units: "int"
                }, h._view[4] = {
                    title: "CPUMemory",
                    value: "cpuMemory",
                    color: "yellow",
                    units: "M"
                }, h._view[5] = {
                    title: "GPUMemory",
                    value: "gpuMemory",
                    color: "yellow",
                    units: "M"
                }, it.isWebGL && (h._view[6] = {
                    title: "Shader",
                    value: "shaderCall",
                    color: "white",
                    units: "int"
                }, it.is3DMode ? (h._view[0].title = "FPS(3D)", h._view[7] = {
                    title: "TriFaces",
                    value: "trianglesFaces",
                    color: "white",
                    units: "int"
                }, h._view[8] = {
                    title: "FrustumCulling",
                    value: "frustumCulling",
                    color: "white",
                    units: "int"
                }, h._view[9] = {
                    title: "OctreeNodeCulling",
                    value: "octreeNodeCulling",
                    color: "white",
                    units: "int"
                }) : (h._view[0].title = "FPS(WebGL)", h._view[7] = {
                    title: "Canvas",
                    value: "_canvasStr",
                    color: "white",
                    units: "int"
                })), h._useCanvas ? h.createUIPre(t, e) : h.createUI(t, e), h.enable();
            }, h.createUIPre = function(t, e) {
                var i = rt.pixelRatio;
                h._width = 180 * i, h._vx = 120 * i, h._height = i * (12 * h._view.length + 3 * i) + 4, h._fontSize = 12 * i;
                for (var n = 0; n < h._view.length; n++) h._view[n].x = 4, h._view[n].y = n * h._fontSize + 2 * i;
                h._canvas || ((h._canvas = new Jt(!0)).size(h._width, h._height), (h._ctx = h._canvas.getContext("2d")).textBaseline = "top", h._ctx.font = h._fontSize + "px Arial", h._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + h._width / i + "px;height:" + h._height / i + "px;"), rt.onKGMiniGame || rt.container.appendChild(h._canvas.source), h._first = !0, h.loop(), h._first = !1;
            }, h.createUI = function(t, e) {
                var i = h._sp,
                    n = rt.pixelRatio;
                i || (i = new Vt(), (h._leftText = new qt()).pos(5, 5), h._leftText.color = "#ffffff", i.addChild(h._leftText), (h._txt = new qt()).pos(80 * n, 5), h._txt.color = "#ffffff", i.addChild(h._txt), h._sp = i), i.pos(t, e);
                for (var s = "", r = 0; r < h._view.length; r++) {
                    s += h._view[r].title + "\n";
                }
                h._leftText.text = s;
                var o = 138 * n,
                    a = n * (12 * h._view.length + 3 * n) + 4;
                h._txt.fontSize = h._fontSize * n, h._leftText.fontSize = h._fontSize * n, i.size(o, a), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, o, a, "#999999"), i.graphics.alpha(2), h.loop();
            }, h.enable = function() {
                v.systemTimer.frameLoop(1, h, h.loop);
            }, h.hide = function() {
                h._show = !1, v.systemTimer.clear(h, h.loop), h._canvas && rt.removeElement(h._canvas.source);
            }, h.clear = function() {
                h.trianglesFaces = h.renderBatches = h.savedRenderBatches = h.shaderCall = h.spriteRenderUseCacheCount = h.frustumCulling = h.octreeNodeCulling = h.canvasNormal = h.canvasBitmap = h.canvasReCache = 0;
            }, h.loop = function() {
                h._count++;
                var t = rt.now();
                if (!(t - h._timer < 1e3)) {
                    var e = h._count;
                    if (h.FPS = Math.round(1e3 * e / (t - h._timer)), h._show) {
                        h.trianglesFaces = Math.round(h.trianglesFaces / e), h.renderBatches = h._useCanvas ? Math.round(h.renderBatches / e) : Math.round(h.renderBatches / e) - 1, h.savedRenderBatches = Math.round(h.savedRenderBatches / e), h.shaderCall = Math.round(h.shaderCall / e), h.spriteRenderUseCacheCount = Math.round(h.spriteRenderUseCacheCount / e), h.canvasNormal = Math.round(h.canvasNormal / e), h.canvasBitmap = Math.round(h.canvasBitmap / e), h.canvasReCache = Math.ceil(h.canvasReCache / e), h.frustumCulling = Math.round(h.frustumCulling / e), h.octreeNodeCulling = Math.round(h.octreeNodeCulling / e);
                        var i = 0 < h.FPS ? Math.floor(1e3 / h.FPS).toString() : " ";
                        h._fpsStr = h.FPS + (h.renderSlow ? " slow" : "") + " " + i, h._spriteStr = h._useCanvas ? h.spriteCount - 1 + (h.spriteRenderUseCacheCount ? "/" + h.spriteRenderUseCacheCount : "") : h.spriteCount - 4 + (h.spriteRenderUseCacheCount ? "/" + h.spriteRenderUseCacheCount : ""), h._canvasStr = h.canvasReCache + "/" + h.canvasNormal + "/" + h.canvasBitmap, h.cpuMemory = Ot.cpuMemory, h.gpuMemory = Ot.gpuMemory, h._useCanvas ? h.renderInfoPre() : h.renderInfo(), h.clear();
                    }
                    h._count = 0, h._timer = t;
                }
            }, h.renderInfoPre = function() {
                var t, e, i = 0;
                if (h._canvas) {
                    var n = h._ctx;
                    for (n.clearRect(h._first ? 0 : h._vx, 0, h._width, h._height), i = 0; i < h._view.length; i++) t = h._view[i], h._first && (n.fillStyle = "white", n.fillText(t.title, t.x, t.y)), n.fillStyle = t.color, e = h[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"), n.fillText(e + "", t.x + h._vx, t.y);
                }
            }, h.renderInfo = function() {
                for (var t = "", e = 0; e < h._view.length; e++) {
                    var i = h._view[e],
                        n = h[i.value];
                    "M" == i.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == i.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), t += n + "\n";
                }
                h._txt.text = t;
            }, h.FPS = 0, h.loopCount = 0, h.shaderCall = 0, h.renderBatches = 0, h.savedRenderBatches = 0, h.trianglesFaces = 0, h.spriteCount = 0, h.spriteRenderUseCacheCount = 0, h.frustumCulling = 0, h.octreeNodeCulling = 0, h.canvasNormal = 0, h.canvasBitmap = 0, h.canvasReCache = 0, h.renderSlow = !1, h.gpuMemory = 0, h.cpuMemory = 0, h._fpsStr = null, h._canvasStr = null, h._spriteStr = null, h._fpsData = [], h._timer = 0, h._count = 0, h._view = [], h._fontSize = 12, h._txt = null, h._leftText = null, h._sp = null, h._titleSp = null, h._bgSp = null, h._show = !1, h._useCanvas = !1, h._canvas = null, h._ctx = null, h._first = !1, h._vx = NaN, h._width = 0, h._height = 100, h;
        }(),
        d = function() {
            function a() {
                this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._stage = null, this._captureSp = null, this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new e(), this._captureChain = [], this._matrix = new G(), this._point = new ct(), this._rect = new K(), this._prePoint = new ct(), this._curTouchID = NaN;
            }
            y(a, "laya.events.MouseManager");
            var t = a.prototype;
            return t.__init__ = function(t, e) {
                var i = this;
                this._stage = t;
                var n = this;
                e.oncontextmenu = function(t) {
                    if (a.enabled) return !1;
                }, e.addEventListener("mousedown", function(t) {
                    a.enabled && (rt.onIE || t.preventDefault(), n.mouseDownTime = rt.now(), i.runEvent(t));
                }), e.addEventListener("mouseup", function(t) {
                    a.enabled && (t.preventDefault(), n.mouseDownTime = -rt.now(), i.runEvent(t));
                }, !0), e.addEventListener("mousemove", function(t) {
                    if (a.enabled) {
                        t.preventDefault();
                        var e = rt.now();
                        if (e - n._lastMoveTimer < 10) return;
                        n._lastMoveTimer = e, i.runEvent(t);
                    }
                }, !0), e.addEventListener("mouseout", function(t) {
                    a.enabled && i.runEvent(t);
                }), e.addEventListener("mouseover", function(t) {
                    a.enabled && i.runEvent(t);
                }), e.addEventListener("touchstart", function(t) {
                    a.enabled && (a._isFirstTouch || ne.isInputting || t.preventDefault(), n.mouseDownTime = rt.now(), i.runEvent(t));
                }), e.addEventListener("touchend", function(t) {
                    a.enabled ? (a._isFirstTouch || ne.isInputting || t.preventDefault(), a._isFirstTouch = !1, n.mouseDownTime = -rt.now(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("touchmove", function(t) {
                    a.enabled && (t.preventDefault(), i.runEvent(t));
                }, !0), e.addEventListener("touchcancel", function(t) {
                    a.enabled ? (t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("mousewheel", function(t) {
                    a.enabled && i.runEvent(t);
                }), e.addEventListener("DOMMouseScroll", function(t) {
                    a.enabled && i.runEvent(t);
                });
            }, t.initEvent = function(t, e) {
                var i, n = this;
                n._event._stoped = !1, n._event.nativeEvent = e || t, n._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), n.mouseX = this._point.x, n.mouseY = this._point.y), n._event.touchId = t.identifier || 0, this._tTouchID = n._event.touchId, (i = h.I._event)._stoped = !1, i.nativeEvent = n._event.nativeEvent, i.touchId = n._event.touchId;
            }, t.checkMouseWheel = function(t) {
                this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
                for (var e = h.I.getLastOvers(), i = 0, n = e.length; i < n; i++) {
                    var s = e[i];
                    s.event("mousewheel", this._event.setTo("mousewheel", s, this._target));
                }
            }, t.onMouseMove = function(t) {
                h.I.onMouseMove(t, this._tTouchID);
            }, t.onMouseDown = function(t) {
                if (ne.isInputting && v.stage.focus && v.stage.focus.focus && !v.stage.focus.contains(this._target)) {
                    var e = v.stage.focus._tf || v.stage.focus,
                        i = t._tf || t;
                    i instanceof laya.display.Input && i.multiline == e.multiline ? e._focusOut() : e.focus = !1;
                }
                h.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
            }, t.onMouseUp = function(t) {
                h.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
            }, t.check = function(t, e, i, n) {
                this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
                var s = t._style.scrollRect;
                if (s && (this._rect.setTo(s.x, s.y, s.width, s.height), !this._rect.contains(e, i))) return !1;
                if (!this.disableMouseEvent) {
                    if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                    for (var r = t._children.length - 1; - 1 < r; r--) {
                        var o = t._children[r];
                        if (!o.destroyed && 1 < o._mouseState && o._visible && this.check(o, e, i, n)) return !0;
                    }
                    for (r = t._extUIChild.length - 1; 0 <= r; r--) {
                        var a = t._extUIChild[r];
                        if (!a.destroyed && 1 < a._mouseState && a._visible && this.check(a, e, i, n)) return !0;
                    }
                }
                var h = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
                return h ? (this._target = t, n.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : n === this.onMouseUp && t === this._stage && (this._target = this._stage, n.call(this, this._target)), h;
            }, t.hitTest = function(t, e, i) {
                var n = !1;
                t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
                var s = t._style.hitArea;
                return s && s._hit ? s.contains(e, i) : ((0 < t.width && 0 < t.height || t.mouseThrough || s) && (n = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (s || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), n);
            }, t._checkAllBaseUI = function(t, e, i) {
                var n = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
                return !!n || (n = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || n);
            }, t.check3DUI = function(t, e, i) {
                for (var n = this._stage._3dUI, s = 0, r = !1; s < n.length; s++) {
                    var o = n[s];
                    !(this._stage._curUIBase = o).destroyed && 1 < o._mouseState && o._visible && (r = r || this.check(o, this.mouseX, this.mouseY, i));
                }
                return this._stage._curUIBase = this._stage, r;
            }, t.handleExclusiveCapture = function(t, e, i) {
                if (this._captureExlusiveMode && this._captureSp && 0 < this._captureChain.length) {
                    var n;
                    this._point.setTo(t, e);
                    for (var s = 0; s < this._captureChain.length; s++)(n = this._captureChain[s]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0;
                }
                return !1;
            }, t.handleCapture = function(t, e, i) {
                if (!this._hitCaputreSp && this._captureSp && 0 < this._captureChain.length) {
                    var n;
                    this._point.setTo(t, e);
                    for (var s = 0; s < this._captureChain.length; s++)(n = this._captureChain[s]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0;
                }
                return !1;
            }, t.runEvent = function(t) {
                var e, i = 0,
                    n = 0;
                switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6), t.type) {
                    case "mousedown":
                        this._touchIDs[0] = this._id++, a._isTouchRespond ? a._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "mouseup":
                        this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                        break;
                    case "mousemove":
                        Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX, this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "touchstart":
                        a._isTouchRespond = !0, this._isLeftMouse = !0;
                        var s = t.changedTouches;
                        for (i = 0, n = s.length; i < n; i++) e = s[i], (a.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = e.identifier, this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[e.identifier] = this._id++, this.initEvent(e, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "touchend":
                    case "touchcancel":
                        a._isTouchRespond = !0, this._isLeftMouse = !0;
                        var r = t.changedTouches;
                        for (i = 0, n = r.length; i < n; i++)
                            if (e = r[i], a.multiTouchEnabled || e.identifier == this._curTouchID) {
                                this._curTouchID = NaN, this.initEvent(e, t);
                                this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null);
                            }
                        break;
                    case "touchmove":
                        var o = t.changedTouches;
                        for (i = 0, n = o.length; i < n; i++) e = o[i], (a.multiTouchEnabled || e.identifier == this._curTouchID) && (this.initEvent(e, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "wheel":
                    case "mousewheel":
                    case "DOMMouseScroll":
                        this.checkMouseWheel(t);
                        break;
                    case "mouseout":
                        h.I.stageMouseOut();
                        break;
                    case "mouseover":
                        this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage));
                }
            }, t.setCapture = function(t, e) {
                void 0 === e && (e = !1), this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, this._captureChain.push(t);
                for (var i = t; i != v.stage && i != v.stage._curUIBase && (i = i.parent);) this._captureChain.splice(0, 0, i);
            }, t.releaseCapture = function() {
                console.log("release capture"), this._captureSp = null;
            }, a.enabled = !0, a.multiTouchEnabled = !0, a._isTouchRespond = !1, a._isFirstTouch = !0, i(a, ["instance", function() {
                return this.instance = new a();
            }]), a;
        }(),
        p = function() {
            function t() {
                this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], it.isWebGL && F.regCacheByFunction(yt.bind(this.startDispose, this), yt.bind(this.getCacheList, this));
            }
            y(t, "laya.utils.VectorGraphManager");
            var e = t.prototype;
            return e.getId = function() {
                return this._id++;
            }, e.addShape = function(t, e) {
                this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
            }, e.addLine = function(t, e) {
                this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
            }, e.getShape = function(t) {
                this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
            }, e.deleteShape = function(t) {
                this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
            }, e.getCacheList = function() {
                var t, e = [];
                for (t in this.shapeDic) e.push(this.shapeDic[t]);
                for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
                return e;
            }, e.startDispose = function(t) {
                var e;
                for (e in this.useDic) this.useDic[e] = !1;
                this._checkKey = !0;
            }, e.endDispose = function() {
                if (this._checkKey) {
                    var t;
                    for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                    this._checkKey = !1;
                }
            }, t.getInstance = function() {
                return t.instance = t.instance || new t();
            }, t.instance = null, t;
        }(),
        o = function() {
            function s() {}
            return y(s, "laya.maths.MathUtil"), s.subtractVector3 = function(t, e, i) {
                i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
            }, s.lerp = function(t, e, i) {
                return t * (1 - i) + e * i;
            }, s.scaleVector3 = function(t, e, i) {
                i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
            }, s.lerpVector3 = function(t, e, i, n) {
                var s = t[0],
                    r = t[1],
                    o = t[2];
                n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o);
            }, s.lerpVector4 = function(t, e, i, n) {
                var s = t[0],
                    r = t[1],
                    o = t[2],
                    a = t[3];
                n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o), n[3] = a + i * (e[3] - a);
            }, s.slerpQuaternionArray = function(t, e, i, n, s, r, o) {
                var a, h, l, u, c, _ = t[e + 0],
                    d = t[e + 1],
                    f = t[e + 2],
                    p = t[e + 3],
                    g = i[n + 0],
                    m = i[n + 1],
                    v = i[n + 2],
                    y = i[n + 3];
                return (h = _ * g + d * m + f * v + p * y) < 0 && (h = -h, g = -g, m = -m, v = -v, y = -y), c = 1e-6 < 1 - h ? (a = Math.acos(h), l = Math.sin(a), u = Math.sin((1 - s) * a) / l, Math.sin(s * a) / l) : (u = 1 - s, s), r[o + 0] = u * _ + c * g, r[o + 1] = u * d + c * m, r[o + 2] = u * f + c * v, r[o + 3] = u * p + c * y, r;
            }, s.getRotation = function(t, e, i, n) {
                return Math.atan2(n - e, i - t) / Math.PI * 180;
            }, s.sortBigFirst = function(t, e) {
                return t == e ? 0 : t < e ? 1 : -1;
            }, s.sortSmallFirst = function(t, e) {
                return t == e ? 0 : t < e ? -1 : 1;
            }, s.sortNumBigFirst = function(t, e) {
                return parseFloat(e) - parseFloat(t);
            }, s.sortNumSmallFirst = function(t, e) {
                return parseFloat(t) - parseFloat(e);
            }, s.sortByKey = function(i, t, e) {
                var n;
                return void 0 === t && (t = !1), void 0 === e && (e = !0), n = t ? e ? s.sortNumBigFirst : s.sortBigFirst : e ? s.sortNumSmallFirst : s.sortSmallFirst,
                    function(t, e) {
                        return n(t[i], e[i]);
                    };
            }, s;
        }(),
        T = function() {
            function a(t, e) {
                if (n.map[t]) return this._fun = n.map[t], void(this._next = a.NORENDER);
                switch (this._next = e || a.NORENDER, t) {
                    case 0:
                        return void(this._fun = this._no);
                    case 1:
                        return void(this._fun = this._alpha);
                    case 2:
                        return void(this._fun = this._transform);
                    case 4:
                        return void(this._fun = this._blend);
                    case 8:
                        return void(this._fun = this._canvas);
                    case 32:
                        return void(this._fun = this._mask);
                    case 64:
                        return void(this._fun = this._clip);
                    case 128:
                        return void(this._fun = this._style);
                    case 512:
                        return void(this._fun = this._graphics);
                    case 8192:
                        return void(this._fun = this._children);
                    case 2048:
                        return void(this._fun = this._custom);
                    case 256:
                        return void(this._fun = this._texture);
                    case 16:
                        return void(this._fun = r._filter);
                    case 69905:
                        return void(this._fun = a._initRenderFun);
                }
                this.onCreate(t);
            }
            y(a, "laya.renders.RenderSprite");
            var t = a.prototype;
            return t.onCreate = function(t) {}, t._style = function(t, e, i, n) {
                var s = t._style;
                null != s.render && s.render(t, e, i, n);
                var r = this._next;
                r._fun.call(r, t, e, i, n);
            }, t._no = function(t, e, i, n) {}, t._custom = function(t, e, i, n) {
                t.customRender(e, i, n), this._next._fun.call(this._next, t, e, i - t.pivotX, n - t.pivotY);
            }, t._clip = function(t, e, i, n) {
                var s = this._next;
                if (s != a.NORENDER) {
                    var r = t._style.scrollRect;
                    e.save(), e.clipRect(i, n, r.width, r.height), s._fun.call(s, t, e, i - r.x, n - r.y), e.restore();
                }
            }, t._blend = function(t, e, i, n) {
                var s = t._style;
                s.blendMode && (e.globalCompositeOperation = s.blendMode);
                var r = this._next;
                r._fun.call(r, t, e, i, n), e.globalCompositeOperation = "source-over";
            }, t._mask = function(t, e, i, n) {
                var s = this._next;
                s._fun.call(s, t, e, i, n);
                var r = t.mask;
                r && (e.globalCompositeOperation = "destination-in", (0 < r.numChildren || !r.graphics._isOnlyOne()) && (r.cacheAs = "bitmap"), r.render(e, i - t._style.pivotX, n - t._style.pivotY)), e.globalCompositeOperation = "source-over";
            }, t._texture = function(t, e, i, n) {
                var s = t.texture;
                s._getSource() && e.drawTexture(s, i - t.pivotX + s.offsetX, n - t.pivotY + s.offsetY, t._width || s.width, t._height || s.height);
                var r = this._next;
                r != a.NORENDER && r._fun.call(r, t, e, i, n);
            }, t._graphics = function(t, e, i, n) {
                var s = t._style,
                    r = t._graphics;
                r && r._render(t, e, i - s.pivotX, n - s.pivotY);
                var o = this._next;
                o != a.NORENDER && o._fun.call(o, t, e, i, n);
            }, t._image = function(t, e, i, n) {
                var s = t._style;
                e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one);
            }, t._image2 = function(t, e, i, n) {
                var s = t._style;
                e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one);
            }, t._alpha = function(t, e, i, n) {
                var s;
                if (.01 < (s = t._style.alpha) || t._needRepaint()) {
                    var r = e.globalAlpha;
                    e.globalAlpha *= s;
                    var o = this._next;
                    o._fun.call(o, t, e, i, n), e.globalAlpha = r;
                }
            }, t._transform = function(t, e, i, n) {
                var s = t.transform,
                    r = this._next;
                t._style;
                s && r != a.NORENDER ? (e.save(), e.transform(s.a, s.b, s.c, s.d, s.tx + i, s.ty + n), r._fun.call(r, t, e, 0, 0), e.restore()) : r != a.NORENDER && r._fun.call(r, t, e, i, n);
            }, t._children = function(t, e, i, n) {
                var s, r = t._style,
                    o = t._children,
                    a = o.length;
                i -= t.pivotX, n -= t.pivotY;
                var h = t._getBit(256) && e.drawCallOptimize(!0);
                if (r.viewport) {
                    var l = r.viewport,
                        u = l.x,
                        c = l.y,
                        _ = l.right,
                        d = l.bottom,
                        f = NaN,
                        p = NaN;
                    for (g = 0; g < a; ++g)(s = o[g])._visible && (f = s._x) < _ && f + s.width > u && (p = s._y) < d && p + s.height > c && s.render(e, i, n);
                } else
                    for (var g = 0; g < a; ++g)(s = o[g])._visible && s.render(e, i, n);
                h && e.drawCallOptimize(!1);
            }, t._canvas = function(t, e, i, n) {
                var s = t._cacheStyle,
                    r = this._next;
                if (s.enableCanvasRender) {
                    "bitmap" === s.cacheAs ? w.canvasBitmap++ : w.canvasNormal++;
                    var o = !1,
                        a = !1;
                    if (it.isWebGL && s.canvas) {
                        var h = s.canvas,
                            l = (h.context, h.touches);
                        if (l)
                            for (var u = 0; u < l.length; u++)
                                if (l[u].deleted) {
                                    a = !0;
                                    break;
                                }
                        o = h.isCacheValid && !h.isCacheValid();
                    }
                    if (t._needRepaint() || !s.canvas || a || o || v.stage.isGlobalRepaint())
                        if (it.isWebGL && "normal" === s.cacheAs) {
                            if (e._targets) return void r._fun.call(r, t, e, i, n);
                            this._canvas_webgl_normal_repaint(t, e);
                        } else this._canvas_repaint(t, e, i, n);
                    var c = s.cacheRect;
                    e.drawCanvas(s.canvas, i + c.x, n + c.y, c.width, c.height);
                } else r._fun.call(r, t, e, i, n);
            }, t._canvas_repaint = function(t, e, i, n) {
                var s, r, o, a, h, l, u, c, _, d = t._cacheStyle,
                    f = this._next,
                    p = d.canvas,
                    g = d.cacheAs;
                if (u = (_ = d._calculateCacheRect(t, g, i, n)).x, c = _.y, h = (a = d.cacheRect).width * u, l = a.height * c, r = a.x, o = a.y, it.isWebGL && "bitmap" === g && (2048 < h || 2048 < l)) return console.warn("cache bitmap size larger than 2048,cache ignored"), d.releaseContext(), void f._fun.call(f, t, e, i, n);
                if (p || (d.createContext(), p = d.canvas), (s = p.context).sprite = t, (p.width != h || p.height != l) && p.size(h, l), "bitmap" === g ? s.asBitmap = !0 : "normal" === g && (s.asBitmap = !1), s.clear(), 1 != u || 1 != c) {
                    var m = s;
                    m.save(), m.scale(u, c), f._fun.call(f, t, s, -r, -o), m.restore(), t._applyFilters();
                } else m = s, f._fun.call(f, t, s, -r, -o), t._applyFilters();
                d.staticCache && (d.reCache = !1), w.canvasReCache++;
            }, t._canvas_webgl_normal_repaint = function(t, e) {
                var i = t._cacheStyle,
                    n = this._next,
                    s = i.canvas,
                    r = i.cacheAs;
                i._calculateCacheRect(t, r, 0, 0);
                s || (s = i.canvas = new v.WebGLCacheAsNormalCanvas(e, t));
                var o = s.context;
                s.startRec(), n._fun.call(n, t, o, t.pivotX, t.pivotY), t._applyFilters(), w.canvasReCache++, s.endRec();
            }, a.__init__ = function() {
                n.__init__();
                var t, e, i = 0;
                for (e = bt.createRenderSprite(69905, null), t = a.renders.length = 16384, i = 0; i < t; i++) a.renders[i] = e;
                a.renders[0] = bt.createRenderSprite(0, null);
            }, a._initRenderFun = function(t, e, i, n) {
                var s = t._renderType;
                (a.renders[s] = a._getTypeRender(s))._fun(t, e, i, n);
            }, a._getTypeRender = function(t) {
                if (n.map[t]) return bt.createRenderSprite(t, null);
                for (var e = null, i = 8192; 0 < i;) i & t && (e = bt.createRenderSprite(i, e)), i >>= 1;
                return e;
            }, a.INIT = 69905, a.renders = [], a.NORENDER = new a(0, null), a;
        }(),
        C = (function() {
            function t() {}
            y(t, "laya.events.Keyboard"), t.NUMBER_0 = 48, t.NUMBER_1 = 49, t.NUMBER_2 = 50, t.NUMBER_3 = 51, t.NUMBER_4 = 52, t.NUMBER_5 = 53, t.NUMBER_6 = 54, t.NUMBER_7 = 55, t.NUMBER_8 = 56, t.NUMBER_9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.F1 = 112, t.F2 = 113, t.F3 = 114, t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t.F9 = 120, t.F10 = 121, t.F11 = 122, t.F12 = 123, t.F13 = 124, t.F14 = 125, t.F15 = 126, t.NUMPAD = 21, t.NUMPAD_0 = 96, t.NUMPAD_1 = 97, t.NUMPAD_2 = 98, t.NUMPAD_3 = 99, t.NUMPAD_4 = 100, t.NUMPAD_5 = 101, t.NUMPAD_6 = 102, t.NUMPAD_7 = 103, t.NUMPAD_8 = 104, t.NUMPAD_9 = 105, t.NUMPAD_ADD = 107, t.NUMPAD_DECIMAL = 110, t.NUMPAD_DIVIDE = 111, t.NUMPAD_ENTER = 108, t.NUMPAD_MULTIPLY = 106, t.NUMPAD_SUBTRACT = 109, t.SEMICOLON = 186, t.EQUAL = 187, t.COMMA = 188, t.MINUS = 189, t.PERIOD = 190, t.SLASH = 191, t.BACKQUOTE = 192, t.LEFTBRACKET = 219, t.BACKSLASH = 220, t.RIGHTBRACKET = 221, t.QUOTE = 222, t.ALTERNATE = 18, t.BACKSPACE = 8, t.CAPS_LOCK = 20, t.COMMAND = 15, t.CONTROL = 17, t.DELETE = 46, t.ENTER = 13, t.ESCAPE = 27, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.END = 35, t.HOME = 36, t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, t.INSERT = 45;
        }(), function() {
            function t() {}
            y(t, "laya.display.cmd.RestoreCmd");
            var e = t.prototype;
            return e.recover = function() {
                I.recover("RestoreCmd", this);
            }, e.run = function(t, e, i) {
                t.restore();
            }, f(0, e, "cmdID", function() {
                return "Restore";
            }), t.create = function() {
                return I.getItemByClass("RestoreCmd", t);
            }, t.ID = "Restore", t;
        }()),
        A = function() {
            function t() {
                this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
            }
            y(t, "laya.display.BitmapFont");
            var e = t.prototype;
            return e.loadFont = function(t, e) {
                this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? v.loader.load([{
                    url: t,
                    type: "xml"
                }, {
                    url: t.replace(".fnt", ".png"),
                    type: "image"
                }], x.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file');
            }, e._onLoaded = function() {
                this.parseFont(Ut.getRes(this._path), Ut.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.run();
            }, e.parseFont = function(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                    this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                    var n, s = i[0].getAttributeNode("padding").nodeValue.split(",");
                    this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])], n = t.getElementsByTagName("char");
                    var r = 0;
                    for (r = 0; r < n.length; r++) {
                        var o = n[r],
                            a = parseInt(o.getAttributeNode("id").nodeValue),
                            h = parseInt(o.getAttributeNode("xoffset").nodeValue) / 1,
                            l = parseInt(o.getAttributeNode("yoffset").nodeValue) / 1,
                            u = parseInt(o.getAttributeNode("xadvance").nodeValue) / 1,
                            c = new K();
                        c.x = parseInt(o.getAttributeNode("x").nodeValue), c.y = parseInt(o.getAttributeNode("y").nodeValue), c.width = parseInt(o.getAttributeNode("width").nodeValue), c.height = parseInt(o.getAttributeNode("height").nodeValue);
                        var _ = Nt.create(e, c.x, c.y, c.width, c.height, h, l);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[a] = _, this._fontWidthMap[a] = u;
                    }
                }
            }, e.parseFont2 = function(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                    var n = i[0].attributes.padding.nodeValue.split(",");
                    this._padding = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])];
                    var s = t.getElementsByTagName("char"),
                        r = 0;
                    for (r = 0; r < s.length; r++) {
                        var o = s[r].attributes,
                            a = parseInt(o.id.nodeValue),
                            h = parseInt(o.xoffset.nodeValue) / 1,
                            l = parseInt(o.yoffset.nodeValue) / 1,
                            u = parseInt(o.xadvance.nodeValue) / 1,
                            c = new K();
                        c.x = parseInt(o.x.nodeValue), c.y = parseInt(o.y.nodeValue), c.width = parseInt(o.width.nodeValue), c.height = parseInt(o.height.nodeValue);
                        var _ = Nt.create(e, c.x, c.y, c.width, c.height, h, l);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[a] = _, this._fontWidthMap[a] = u;
                    }
                }
            }, e.getCharTexture = function(t) {
                return this._fontCharDic[t.charCodeAt(0)];
            }, e.destroy = function() {
                if (this._texture) {
                    for (var t in this._fontCharDic) {
                        var e = this._fontCharDic[t];
                        e && e.destroy();
                    }
                    this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, this._complete = null, this._padding = null;
                }
            }, e.setSpaceWidth = function(t) {
                this._spaceWidth = t;
            }, e.getCharWidth = function(t) {
                var e = t.charCodeAt(0);
                return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
            }, e.getTextWidth = function(t) {
                for (var e = 0, i = 0, n = t.length; i < n; i++) e += this.getCharWidth(t.charAt(i));
                return e;
            }, e.getMaxWidth = function() {
                return this._maxWidth;
            }, e.getMaxHeight = function() {
                return this.fontSize;
            }, e._drawText = function(t, e, i, n, s, r) {
                var o, a = this.getTextWidth(t),
                    h = 0;
                "center" === s && (h = (r - a) / 2), "right" === s && (h = r - a);
                for (var l = 0, u = 0, c = t.length; u < c; u++)(o = this.getCharTexture(t.charAt(u))) && (e.graphics.drawImage(o, i + l + h, n), l += this.getCharWidth(t.charAt(u)));
            }, t;
        }(),
        b = function() {
            function r() {}
            y(r, "laya.display.cmd.ClipRectCmd");
            var t = r.prototype;
            return t.recover = function() {
                I.recover("ClipRectCmd", this);
            }, t.run = function(t, e, i) {
                t.clipRect(this.x + e, this.y + i, this.width, this.height);
            }, f(0, t, "cmdID", function() {
                return "ClipRect";
            }), r.create = function(t, e, i, n) {
                var s = I.getItemByClass("ClipRectCmd", r);
                return s.x = t, s.y = e, s.width = i, s.height = n, s;
            }, r.ID = "ClipRect", r;
        }(),
        S = function() {
            function l() {}
            y(l, "laya.display.cmd.DrawPolyCmd");
            var t = l.prototype;
            return t.recover = function() {
                this.points = null, this.fillColor = null, this.lineColor = null, I.recover("DrawPolyCmd", this);
            }, t.run = function(t, e, i) {
                t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
            }, f(0, t, "cmdID", function() {
                return "DrawPoly";
            }), l.create = function(t, e, i, n, s, r, o, a) {
                var h = I.getItemByClass("DrawPolyCmd", l);
                return h.x = t, h.y = e, h.points = i, h.fillColor = n, h.lineColor = s, h.lineWidth = r, h.isConvexPolygon = o, h.vid = a, h;
            }, l.ID = "DrawPoly", l;
        }(),
        D = function() {
            function t() {
                this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, this._url = null, this._div = null, this._txtWidth = NaN, this._http = null;
            }
            y(t, "laya.net.TTFLoader");
            var e = t.prototype;
            return e.load = function(t) {
                var e = (this._url = t).split(".ttf")[0].split("/");
                this.fontName = e[e.length - 1], it.isConchApp ? this._loadConch() : rt.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
            }, e._loadConch = function() {
                this._http = new Wt(), this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), this._http.send(this._url, null, "get", "arraybuffer");
            }, e._onHttpLoaded = function(t) {
                rt.window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), this._complete();
            }, e._clearHttp = function() {
                this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), this._http = null);
            }, e._onErr = function() {
                this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
            }, e._complete = function() {
                v.systemTimer.clear(this, this._complete), v.systemTimer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
            }, e._checkComplete = function() {
                bt.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete();
            }, e._loadWithFontFace = function() {
                var t = new rt.window.FontFace(this.fontName, "url('" + this._url + "')");
                rt.window.document.fonts.add(t);
                var e = this;
                t.loaded.then(function() {
                    e._complete();
                }), t.load();
            }, e._createDiv = function() {
                this._div = rt.createElement("div"), this._div.innerHTML = "laya";
                var t = this._div.style;
                t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", rt.document.body.appendChild(this._div);
            }, e._loadWithCSS = function() {
                var t = this,
                    e = rt.createElement("style");
                e.type = "text/css", rt.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = bt.measureText("LayaTTFFont", this._fontTxt).width;
                var i = this;
                e.onload = function() {
                    v.systemTimer.once(1e4, i, t._complete);
                }, v.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
            }, t._testString = "LayaTTFFont", t;
        }(),
        I = (function() {
            function t() {
                this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this.texture = null, this.x = NaN, this.y = NaN, this.width = NaN, this.height = NaN;
            }
            y(t, "laya.display.cmd.DrawCanvasCmd");
            var e = t.prototype;
            e.recover = function() {
                this._graphicsCmdEncoder = null, I.recover("DrawCanvasCmd", this);
            }, f(0, e, "cmdID", function() {
                return "DrawCanvasCmd";
            }), t.create = function(t, e, i, n, s) {
                return null;
            }, t.ID = "DrawCanvasCmd", t._DRAW_IMAGE_CMD_ENCODER_ = null, t._PARAM_TEXTURE_POS_ = 2, t._PARAM_VB_POS_ = 5;
        }(), function() {
            function r() {}
            return y(r, "laya.utils.Pool"), r.getPoolBySign = function(t) {
                return r._poolDic[t] || (r._poolDic[t] = []);
            }, r.clearBySign = function(t) {
                r._poolDic[t] && (r._poolDic[t].length = 0);
            }, r.recover = function(t, e) {
                e.__InPool || (e.__InPool = !0, r.getPoolBySign(t).push(e));
            }, r.recoverByClass = function(t) {
                if (t) {
                    var e = t.__className || t.constructor._$gid;
                    e && r.recover(e, t);
                }
            }, r._getClassSign = function(t) {
                var e = t.__className || t._$gid;
                return e || (t._$gid = e = yt.getGID() + ""), e;
            }, r.createByClass = function(t) {
                return r.getItemByClass(r._getClassSign(t), t);
            }, r.getItemByClass = function(t, e) {
                if (!r._poolDic[t]) return new e();
                var i = r.getPoolBySign(t);
                if (i.length) {
                    var n = i.pop();
                    n.__InPool = !1;
                } else n = new e();
                return n;
            }, r.getItemByCreateFun = function(t, e, i) {
                var n = r.getPoolBySign(t),
                    s = n.length ? n.pop() : e.call(i);
                return s.__InPool = !1, s;
            }, r.getItem = function(t) {
                var e = r.getPoolBySign(t),
                    i = e.length ? e.pop() : null;
                return i && (i.__InPool = !1), i;
            }, r.POOLSIGN = "__InPool", r._poolDic = {}, r;
        }()),
        P = (function() {
            function t() {}
            y(t, "laya.display.SpriteConst"), t.POSRENDERTYPE = 0, t.POSBUFFERBEGIN = 1, t.POSBUFFEREND = 2, t.POSFRAMECOUNT = 3, t.POSREPAINT = 4, t.POSVISIBLE_NATIVE = 5, t.POSX = 6, t.POSY = 7, t.POSPIVOTX = 8, t.POSPIVOTY = 9, t.POSSCALEX = 10, t.POSSCALEY = 11, t.POSSKEWX = 12, t.POSSKEWY = 13, t.POSROTATION = 14, t.POSTRANSFORM_FLAG = 15, t.POSMATRIX = 16, t.POSCOLOR = 22, t.POSGRAPICS = 23, t.POSSIM_TEXTURE_ID = 24, t.POSSIM_TEXTURE_DATA = 25, t.POSLAYAGL3D = 26, t.POSCUSTOM = 27, t.POSCLIP = 28, t.POSCLIP_NEG_POS = 32, t.POSCOLORFILTER_COLOR = 34, t.POSCOLORFILTER_ALPHA = 50, t.POSCALLBACK_OBJ_ID = 54, t.POSCUSTOM_CALLBACK_FUN_ID = 55, t.POSCANVAS_CALLBACK_FUN_ID = 56, t.POSCANVAS_CALLBACK_END_FUN_ID = 57, t.POSCANVAS_BEGIN_CMD_ID = 58, t.POSCANVAS_END_CMD_ID = 59, t.POSCANVAS_DRAW_TARGET_CMD_ID = 60, t.POSCANVAS_DRAW_TARGET_PARAM_ID = 61, t.POSLAYA3D_FUN_ID = 62, t.POSCACHE_CANVAS_SKIP_PAINT_FLAG = 63, t.POSFILTER_BEGIN_CMD_ID = 64, t.POSFILTER_CALLBACK_FUN_ID = 65, t.POSFILTER_END_CMD_ID = 66, t.POSFILTER_END_CALLBACK_FUN_ID = 67, t.POSGRAPHICS_CALLBACK_FUN_ID = 68, t.POSMASK_CALLBACK_FUN_ID = 69, t.POSMASK_CMD_ID = 70, t.POSBLEND_SRC = 71, t.POSBLEND_DEST = 72, t.POSSIM_RECT_FILL_CMD = 73, t.POSSIM_RECT_FILL_DATA = 74, t.POSSIM_RECT_STROKE_CMD = 75, t.POSSIM_RECT_STROKE_DATA = 76, t.POSSIZE = 77, t.ALPHA = 1, t.TRANSFORM = 2, t.BLEND = 4, t.CANVAS = 8, t.FILTERS = 16, t.MASK = 32, t.CLIP = 64, t.STYLE = 128, t.TEXTURE = 256, t.GRAPHICS = 512, t.LAYAGL3D = 1024, t.CUSTOM = 2048, t.ONECHILD = 4096, t.CHILDS = 8192, t.REPAINT_NONE = 0, t.REPAINT_NODE = 1, t.REPAINT_CACHE = 2, t.REPAINT_ALL = 3;
        }(), function() {
            function u() {
                this.colorFlt = null;
            }
            y(u, "laya.display.cmd.DrawTextureCmd");
            var t = u.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, this.matrix = null, I.recover("DrawTextureCmd", this);
            }, t.run = function(t, e, i) {
                t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt);
            }, f(0, t, "cmdID", function() {
                return "DrawTexture";
            }), u.create = function(t, e, i, n, s, r, o, a, h) {
                var l = I.getItemByClass("DrawTextureCmd", u);
                return (l.texture = t)._addReference(), l.x = e, l.y = i, l.width = n, l.height = s, l.matrix = r, l.alpha = o, l.color = a, l.blendMode = h, a && (l.colorFlt = new Et(), l.colorFlt.setColor(a)), l;
            }, u.ID = "DrawTexture", u;
        }()),
        L = function() {
            function l() {}
            return y(l, "laya.maths.GrahamScan"), l.multiply = function(t, e, i) {
                return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
            }, l.dis = function(t, e) {
                return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
            }, l._getPoints = function(t, e, i) {
                for (void 0 === e && (e = !1), l._mPointList || (l._mPointList = []); l._mPointList.length < t;) l._mPointList.push(new ct());
                return i || (i = []), i.length = 0, e ? l.getFrom(i, l._mPointList, t) : l.getFromR(i, l._mPointList, t), i;
            }, l.getFrom = function(t, e, i) {
                var n = 0;
                for (n = 0; n < i; n++) t.push(e[n]);
                return t;
            }, l.getFromR = function(t, e, i) {
                var n = 0;
                for (n = 0; n < i; n++) t.push(e.pop());
                return t;
            }, l.pListToPointList = function(t, e) {
                void 0 === e && (e = !1);
                var i = 0,
                    n = t.length / 2,
                    s = l._getPoints(n, e, l._tempPointList);
                for (i = 0; i < n; i++) s[i].setTo(t[i + i], t[i + i + 1]);
                return s;
            }, l.pointListToPlist = function(t) {
                var e, i = 0,
                    n = t.length,
                    s = l._temPList;
                for (i = s.length = 0; i < n; i++) e = t[i], s.push(e.x, e.y);
                return s;
            }, l.scanPList = function(t) {
                return yt.copyArray(t, l.pointListToPlist(l.scan(l.pListToPointList(t, !0))));
            }, l.scan = function(t) {
                var e, i, n, s = 0,
                    r = 0,
                    o = 0,
                    a = t.length,
                    h = {};
                for ((i = l._temArr).length = 0, s = (a = t.length) - 1; 0 <= s; s--) n = (e = t[s]).x + "_" + e.y, h.hasOwnProperty(n) || (h[n] = !0, i.push(e));
                for (a = i.length, yt.copyArray(t, i), s = 1; s < a; s++)(t[s].y < t[o].y || t[s].y == t[o].y && t[s].x < t[o].x) && (o = s);
                for (e = t[0], t[0] = t[o], t[o] = e, s = 1; s < a - 1; s++) {
                    for (r = (o = s) + 1; r < a; r++)(0 < l.multiply(t[r], t[o], t[0]) || 0 == l.multiply(t[r], t[o], t[0]) && l.dis(t[0], t[r]) < l.dis(t[0], t[o])) && (o = r);
                    e = t[s], t[s] = t[o], t[o] = e;
                }
                if ((i = l._temArr).length = 0, t.length < 3) return yt.copyArray(i, t);
                for (i.push(t[0], t[1], t[2]), s = 3; s < a; s++) {
                    for (; 2 <= i.length && 0 <= l.multiply(t[s], i[i.length - 1], i[i.length - 2]);) i.pop();
                    t[s] && i.push(t[s]);
                }
                return i;
            }, l._mPointList = null, l._tempPointList = [], l._temPList = [], l._temArr = [], l;
        }(),
        E = function() {
            function c() {
                this.gid = 0, this.repeat = 1, this._count = 0;
            }
            y(c, "laya.utils.Tween");
            var t = c.prototype;
            return t.to = function(t, e, i, n, s, r, o) {
                return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !0, !1, !0);
            }, t.from = function(t, e, i, n, s, r, o) {
                return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !1, !1, !0);
            }, t._create = function(t, e, i, n, s, r, o, a, h, l) {
                if (!t) throw new Error("Tween:target is null");
                this._target = t, this._duration = i, this._ease = n || e.ease || c.easeNone, this._complete = s || e.complete, this._delay = r, this._props = [], this._usedTimer = 0, this._startTimer = rt.now(), this._usedPool = h, this._delayParam = null, this.update = e.update;
                var u = t.$_GID || (t.$_GID = yt.getGID());
                return c.tweenMap[u] ? (o && c.clearTween(t), c.tweenMap[u].push(this)) : c.tweenMap[u] = [this], l ? r <= 0 ? this.firstStart(t, e, a) : (this._delayParam = [t, e, a], v.timer.once(r, this, this.firstStart, this._delayParam)) : this._initProps(t, e, a), this;
            }, t.firstStart = function(t, e, i) {
                this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), this._beginLoop());
            }, t._initProps = function(t, e, i) {
                for (var n in e)
                    if ("number" == typeof t[n]) {
                        var s = i ? t[n] : e[n],
                            r = i ? e[n] : t[n];
                        this._props.push([n, s, r - s]), i || (t[n] = s);
                    }
            }, t._beginLoop = function() {
                v.timer.frameLoop(1, this, this._doEase);
            }, t._doEase = function() {
                this._updateEase(rt.now());
            }, t._updateEase = function(t) {
                var e = this._target;
                if (e) {
                    if (e.destroyed) return c.clearTween(e);
                    var i = this._usedTimer = t - this._startTimer - this._delay;
                    if (!(i < 0)) {
                        if (i >= this._duration) return this.complete();
                        for (var n = 0 < i ? this._ease(i, 0, 1, this._duration) : 0, s = this._props, r = 0, o = s.length; r < o; r++) {
                            var a = s[r];
                            e[a[0]] = a[1] + n * a[2];
                        }
                        this.update && this.update.run();
                    }
                }
            }, t.complete = function() {
                if (this._target) {
                    v.timer.runTimer(this, this.firstStart);
                    for (var t = this._target, e = this._props, i = this._complete, n = 0, s = e.length; n < s; n++) {
                        var r = e[n];
                        t[r[0]] = r[1] + r[2];
                    }
                    this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), i && i.run()) : this.restart();
                }
            }, t.pause = function() {
                v.timer.clear(this, this._beginLoop), v.timer.clear(this, this._doEase), v.timer.clear(this, this.firstStart);
                var t;
                (t = rt.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
            }, t.setStartTime = function(t) {
                this._startTimer = t;
            }, t.clear = function() {
                this._target && (this._remove(), this._clear());
            }, t._clear = function() {
                this.pause(), v.timer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, I.recover("tween", this));
            }, t.recover = function() {
                this._usedPool = !0, this._clear();
            }, t._remove = function() {
                var t = c.tweenMap[this._target.$_GID];
                if (t)
                    for (var e = 0, i = t.length; e < i; e++)
                        if (t[e] === this) {
                            t.splice(e, 1);
                            break;
                        }
            }, t.restart = function() {
                if (this.pause(), this._usedTimer = 0, this._startTimer = rt.now(), this._delayParam) v.timer.once(this._delay, this, this.firstStart, this._delayParam);
                else {
                    for (var t = this._props, e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        this._target[n[0]] = n[1];
                    }
                    v.timer.once(this._delay, this, this._beginLoop);
                }
            }, t.resume = function() {
                this._usedTimer >= this._duration || (this._startTimer = rt.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? v.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
            }, f(0, t, "progress", null, function(t) {
                var e = t * this._duration;
                this._startTimer = rt.now() - this._delay - e;
            }), c.to = function(t, e, i, n, s, r, o, a) {
                return void 0 === r && (r = 0), void 0 === o && (o = !1), void 0 === a && (a = !0), I.getItemByClass("tween", c)._create(t, e, i, n, s, r, o, !0, a, !0);
            }, c.from = function(t, e, i, n, s, r, o, a) {
                return void 0 === r && (r = 0), void 0 === o && (o = !1), void 0 === a && (a = !0), I.getItemByClass("tween", c)._create(t, e, i, n, s, r, o, !1, a, !0);
            }, c.clearAll = function(t) {
                if (t && t.$_GID) {
                    var e = c.tweenMap[t.$_GID];
                    if (e) {
                        for (var i = 0, n = e.length; i < n; i++) e[i]._clear();
                        e.length = 0;
                    }
                }
            }, c.clear = function(t) {
                t.clear();
            }, c.clearTween = function(t) {
                c.clearAll(t);
            }, c.easeNone = function(t, e, i, n) {
                return i * t / n + e;
            }, c.tweenMap = [], c;
        }(),
        R = function() {
            function h() {}
            y(h, "laya.display.cmd.DrawRectCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, I.recover("DrawRectCmd", this);
            }, t.run = function(t, e, i) {
                t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
            }, f(0, t, "cmdID", function() {
                return "DrawRect";
            }), h.create = function(t, e, i, n, s, r, o) {
                var a = I.getItemByClass("DrawRectCmd", h);
                return a.x = t, a.y = e, a.width = i, a.height = n, a.fillColor = s, a.lineColor = r, a.lineWidth = o, a;
            }, h.ID = "DrawRect", h;
        }(),
        B = function() {
            function s(t) {
                this._url = null, this._path = null, this._url = s.formatURL(t), this._path = s.getPath(t);
            }
            y(s, "laya.net.URL");
            var t = s.prototype;
            return f(0, t, "path", function() {
                return this._path;
            }), f(0, t, "url", function() {
                return this._url;
            }), f(1, s, "basePath", function() {
                return s._basePath;
            }, function(t) {
                s._basePath = v._getUrlPath(), s._basePath = s.formatURL(t);
            }), s.formatURL = function(t) {
                if (!t) return "null path";
                if (0 < t.indexOf(":")) return t;
                if (null != s.customFormat && (t = s.customFormat(t)), 0 < t.indexOf(":")) return t;
                var e = t.charAt(0);
                if ("." === e) return s._formatRelativePath(s._basePath + t);
                if ("~" === e) return s.rootPath + t.substring(1);
                if ("d" === e) {
                    if (0 === t.indexOf("data:image")) return t;
                } else if ("/" === e) return t;
                return s._basePath + t;
            }, s._formatRelativePath = function(t) {
                for (var e = t.split("/"), i = 0, n = e.length; i < n; i++) ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
                return e.join("/");
            }, s.getPath = function(t) {
                var e = t.lastIndexOf("/");
                return 0 < e ? t.substr(0, e + 1) : "";
            }, s.getFileName = function(t) {
                var e = t.lastIndexOf("/");
                return 0 < e ? t.substr(e + 1) : t;
            }, s.getAdptedFilePath = function(t) {
                if (!s.exportSceneToJson || !t) return t;
                var e, i, n = 0;
                for (e = s._adpteTypeList.length, n = 0; n < e; n++) i = s._adpteTypeList[n], t = t.replace(i[0], i[1]);
                return t;
            }, s.version = {}, s.exportSceneToJson = !1, s._basePath = "", s.rootPath = "", s.customFormat = function(t) {
                var e = s.version[t];
                return !it.isConchApp && e && (t += "?v=" + e), t;
            }, i(s, ["_adpteTypeList", function() {
                return this._adpteTypeList = [
                    [".scene3d", ".json"],
                    [".scene", ".json"],
                    [".taa", ".json"],
                    [".prefab", ".json"]
                ];
            }]), s;
        }(),
        F = function() {
            function s() {}
            return y(s, "laya.utils.CacheManger"), s.regCacheByFunction = function(t, e) {
                var i;
                s.unRegCacheByFunction(t, e), i = {
                    tryDispose: t,
                    getCacheList: e
                }, s._cacheList.push(i);
            }, s.unRegCacheByFunction = function(t, e) {
                var i, n = 0;
                for (i = s._cacheList.length, n = 0; n < i; n++)
                    if (s._cacheList[n].tryDispose == t && s._cacheList[n].getCacheList == e) return void s._cacheList.splice(n, 1);
            }, s.forceDispose = function() {
                var t = 0,
                    e = s._cacheList.length;
                for (t = 0; t < e; t++) s._cacheList[t].tryDispose(!0);
            }, s.beginCheck = function(t) {
                void 0 === t && (t = 15e3), v.systemTimer.loop(t, null, s._checkLoop);
            }, s.stopCheck = function() {
                v.systemTimer.clear(null, s._checkLoop);
            }, s._checkLoop = function() {
                var t = s._cacheList;
                if (!(t.length < 1)) {
                    var e, i = rt.now(),
                        n = 0;
                    for (e = n = t.length; 0 < n && (t[s._index = ++s._index % e].tryDispose(!1), !(rt.now() - i > s.loopTimeLimit));) n--;
                }
            }, s.loopTimeLimit = 2, s._cacheList = [], s._index = 0, s;
        }(),
        O = function() {
            function t() {
                this.reset();
            }
            y(t, "laya.display.css.SpriteStyle");
            var e = t.prototype;
            return e.reset = function() {
                return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, this.dragging = null, this.blendMode = null, this;
            }, e.recover = function() {
                this !== t.EMPTY && I.recover("SpriteStyle", this.reset());
            }, t.create = function() {
                return I.getItemByClass("SpriteStyle", t);
            }, t.EMPTY = new t(), t;
        }(),
        k = function() {
            var h;

            function l(t) {
                this.scale = 1, this.currFrame = 0, this._delta = 0, this._map = [], this._handlers = [], this._temp = [], this._count = 0, this.currTimer = rt.now(), this._lastTimer = rt.now(), void 0 === t && (t = !0), t && v.systemTimer && v.systemTimer.frameLoop(1, this, this._update);
            }
            y(l, "laya.utils.Timer");
            var t = l.prototype;
            return t._update = function() {
                if (this.scale <= 0) this._lastTimer = rt.now();
                else {
                    var t = this.currFrame = this.currFrame + this.scale,
                        e = rt.now();
                    this._delta = (e - this._lastTimer) * this.scale;
                    var i = this.currTimer = this.currTimer + this._delta;
                    this._lastTimer = e;
                    for (var n = this._handlers, s = this._count = 0, r = n.length; s < r; s++) {
                        var o = n[s];
                        if (null !== o.method) {
                            var a = o.userFrame ? t : i;
                            if (a >= o.exeTime)
                                if (o.repeat)
                                    if (o.jumpFrame)
                                        for (; a >= o.exeTime;) o.exeTime += o.delay, o.run(!1);
                                    else o.exeTime += o.delay, o.run(!1), a > o.exeTime && (o.exeTime += Math.ceil((a - o.exeTime) / o.delay) * o.delay);
                            else o.run(!0);
                        } else this._count++;
                    }
                    (30 < this._count || t % 200 == 0) && this._clearHandlers();
                }
            }, t._clearHandlers = function() {
                for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                    var n = t[e];
                    null !== n.method ? this._temp.push(n) : this._recoverHandler(n);
                }
                this._handlers = this._temp, t.length = 0, this._temp = t;
            }, t._recoverHandler = function(t) {
                this._map[t.key] == t && (this._map[t.key] = null), t.clear(), l._pool.push(t);
            }, t._create = function(t, e, i, n, s, r, o) {
                if (!i) return s.apply(n, r), null;
                if (o) {
                    var a = this._getHandler(n, s);
                    if (a) return a.repeat = e, a.userFrame = t, a.delay = i, a.caller = n, a.method = s, a.args = r, a.exeTime = i + (t ? this.currFrame : this.currTimer + rt.now() - this._lastTimer), a;
                }
                return (a = 0 < l._pool.length ? l._pool.pop() : new h()).repeat = e, a.userFrame = t, a.delay = i, a.caller = n, a.method = s, a.args = r, a.exeTime = i + (t ? this.currFrame : this.currTimer + rt.now() - this._lastTimer), this._indexHandler(a), this._handlers.push(a), a;
            }, t._indexHandler = function(t) {
                var e = t.caller,
                    i = t.method,
                    n = e ? e.$_GID || (e.$_GID = yt.getGID()) : 0,
                    s = i.$_TID || (i.$_TID = 1e5 * l._mid++);
                t.key = n + s, this._map[t.key] = t;
            }, t.once = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!1, !1, t, e, i, n, s);
            }, t.loop = function(t, e, i, n, s, r) {
                void 0 === s && (s = !0), void 0 === r && (r = !1);
                var o = this._create(!1, !0, t, e, i, n, s);
                o && (o.jumpFrame = r);
            }, t.frameOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!0, !1, t, e, i, n, s);
            }, t.frameLoop = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!0, !0, t, e, i, n, s);
            }, t.toString = function() {
                return " handlers:" + this._handlers.length + " pool:" + l._pool.length;
            }, t.clear = function(t, e) {
                var i = this._getHandler(t, e);
                i && (this._map[i.key] = null, i.key = 0, i.clear());
            }, t.clearAll = function(t) {
                if (t)
                    for (var e = 0, i = this._handlers.length; e < i; e++) {
                        var n = this._handlers[e];
                        n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear());
                    }
            }, t._getHandler = function(t, e) {
                var i = t ? t.$_GID || (t.$_GID = yt.getGID()) : 0,
                    n = e.$_TID || (e.$_TID = 1e5 * l._mid++);
                return this._map[i + n];
            }, t.callLater = function(t, e, i) {
                pt.I.callLater(t, e, i);
            }, t.runCallLater = function(t, e) {
                pt.I.runCallLater(t, e);
            }, t.runTimer = function(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(!0));
            }, t.pause = function() {
                this.scale = 0;
            }, t.resume = function() {
                this.scale = 1;
            }, f(0, t, "delta", function() {
                return this._delta;
            }), l._pool = [], l._mid = 1, l.__init$ = function() {
                h = function() {
                    function t() {
                        this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1;
                    }
                    y(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.caller = null, this.method = null, this.args = null;
                    }, e.run = function(t) {
                        var e = this.caller;
                        if (e && e.destroyed) return this.clear();
                        var i = this.method,
                            n = this.args;
                        t && this.clear(), null != i && (n ? i.apply(e, n) : i.call(e));
                    }, t;
                }();
            }, l;
        }(),
        N = function() {
            function d() {
                this.reset();
            }
            y(d, "laya.display.css.CacheStyle");
            var t = d.prototype;
            return t.needBitmapCache = function() {
                return this.cacheForFilters || !!this.mask;
            }, t.needEnableCanvasRender = function() {
                return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
            }, t.releaseContext = function() {
                this.canvas && this.canvas.size && (I.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0)), this.canvas = null;
            }, t.createContext = function() {
                if (!this.canvas) {
                    this.canvas = I.getItem("CacheCanvas") || new Jt(!it.isWebGL);
                    var t = this.canvas.context;
                    t || (t = this.canvas.getContext("2d"));
                }
            }, t.releaseFilterCache = function() {
                var t = this.filterCache;
                t && (t.destroy(), t.recycle(), this.filterCache = null);
            }, t.recover = function() {
                this !== d.EMPTY && I.recover("SpriteCache", this.reset());
            }, t.reset = function() {
                return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), this.cacheRect = null, this;
            }, t._calculateCacheRect = function(t, e, i, n) {
                var s = !1;
                it.isWebGL && (s = !0);
                var r, o = t._cacheStyle;
                o.cacheRect || (o.cacheRect = K.create()), s && "bitmap" !== e ? o.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1) : ((r = t.getSelfBounds()).width = r.width + 32, r.height = r.height + 32, r.x = r.x - t.pivotX, r.y = r.y - t.pivotY, r.x = r.x - 16, r.y = r.y - 16, r.x = Math.floor(r.x + i) - i, r.y = Math.floor(r.y + n) - n, r.width = Math.floor(r.width), r.height = Math.floor(r.height), o.cacheRect.copyFrom(r)), r = o.cacheRect;
                var a = s ? 1 : rt.pixelRatio * v.stage.clientScaleX,
                    h = s ? 1 : rt.pixelRatio * v.stage.clientScaleY;
                if (!s) {
                    var l, u = 1,
                        c = 1;
                    for (l = t; l && l != v.stage;) u *= l.scaleX, c *= l.scaleY, l = l.parent;
                    1 < u && (a *= u), 1 < c && (h *= c);
                }
                if (t._style.scrollRect) {
                    var _ = t._style.scrollRect;
                    r.x -= _.x, r.y -= _.y;
                }
                return d._scaleInfo.setTo(a, h), d._scaleInfo;
            }, d.create = function() {
                return I.getItemByClass("SpriteCache", d);
            }, d.EMPTY = new d(), d.CANVAS_EXTEND_EDGE = 16, i(d, ["_scaleInfo", function() {
                return this._scaleInfo = new ct();
            }]), d;
        }(),
        W = function() {
            function h() {}
            y(h, "laya.display.cmd.DrawLineCmd");
            var t = h.prototype;
            return t.recover = function() {
                I.recover("DrawLineCmd", this);
            }, t.run = function(t, e, i) {
                t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
            }, f(0, t, "cmdID", function() {
                return "DrawLine";
            }), h.create = function(t, e, i, n, s, r, o) {
                var a = I.getItemByClass("DrawLineCmd", h);
                return a.fromX = t, a.fromY = e, a.toX = i, a.toY = n, a.lineColor = s, a.lineWidth = r, a.vid = o, a;
            }, h.ID = "DrawLine", h;
        }(),
        U = (function() {
            function n() {}
            y(n, "laya.net.ResourceVersion"), n.enable = function(t, e, i) {
                void 0 === i && (i = 2), laya.net.ResourceVersion.type = i, v.loader.load(t, x.create(null, n.onManifestLoaded, [e]), null, "json"), B.customFormat = n.addVersionPrefix;
            }, n.onManifestLoaded = function(t, e) {
                n.manifest = e, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
            }, n.addVersionPrefix = function(t) {
                return t = B.getAdptedFilePath(t), n.manifest && n.manifest[t] ? 2 == n.type ? n.manifest[t] : n.manifest[t] + "/" + t : t;
            }, n.FOLDER_VERSION = 1, n.FILENAME_VERSION = 2, n.manifest = null, n.type = 1;
        }(), function() {
            function o() {}
            y(o, "laya.display.cmd.FillWordsCmd");
            var t = o.prototype;
            return t.recover = function() {
                this.words = null, I.recover("FillWordsCmd", this);
            }, t.run = function(t, e, i) {
                t.fillWords(this.words, this.x + e, this.y + i, this.font, this.color);
            }, f(0, t, "cmdID", function() {
                return "FillWords";
            }), o.create = function(t, e, i, n, s) {
                var r = I.getItemByClass("FillWordsCmd", o);
                return r.words = t, r.x = e, r.y = i, r.font = n, r.color = s, r;
            }, o.ID = "FillWords", o;
        }()),
        G = function() {
            function a(t, e, i, n, s, r, o) {
                if (this._bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === s && (s = 0), void 0 === r && (r = 0), void 0 === o && (o = 0), null != a._createFun) return a._createFun(t, e, i, n, s, r, o);
                this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this._checkTransform();
            }
            y(a, "laya.maths.Matrix");
            var t = a.prototype;
            return t.identity = function() {
                return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, this;
            }, t._checkTransform = function() {
                return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
            }, t.setTranslate = function(t, e) {
                return this.tx = t, this.ty = e, this;
            }, t.translate = function(t, e) {
                return this.tx += t, this.ty += e, this;
            }, t.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this._bTransform = !0, this;
            }, t.rotate = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    n = this.a,
                    s = this.c,
                    r = this.tx;
                return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, this._bTransform = !0, this;
            }, t.skew = function(t, e) {
                var i = Math.tan(t),
                    n = Math.tan(e),
                    s = this.a,
                    r = this.b;
                return this.a += n * this.c, this.b += n * this.d, this.c += i * s, this.d += i * r, this;
            }, t.invertTransformPoint = function(t) {
                var e = this.a,
                    i = this.b,
                    n = this.c,
                    s = this.d,
                    r = this.tx,
                    o = e * s - i * n,
                    a = s / o,
                    h = -i / o,
                    l = -n / o,
                    u = e / o,
                    c = (n * this.ty - s * r) / o,
                    _ = -(e * this.ty - i * r) / o;
                return t.setTo(a * t.x + l * t.y + c, h * t.x + u * t.y + _);
            }, t.transformPoint = function(t) {
                return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
            }, t.transformPointN = function(t) {
                return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
            }, t.getScaleX = function() {
                return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
            }, t.getScaleY = function() {
                return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
            }, t.invert = function() {
                var t = this.a,
                    e = this.b,
                    i = this.c,
                    n = this.d,
                    s = this.tx,
                    r = t * n - e * i;
                return this.a = n / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - n * s) / r, this.ty = -(t * this.ty - e * s) / r, this;
            }, t.setTo = function(t, e, i, n, s, r) {
                return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this;
            }, t.concat = function(t) {
                var e = this.a,
                    i = this.c,
                    n = this.tx;
                return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d, this.tx = n * t.a + this.ty * t.c + t.tx, this.ty = n * t.b + this.ty * t.d + t.ty, this;
            }, t.scaleEx = function(t, e) {
                var i = this.a,
                    n = this.b,
                    s = this.c,
                    r = this.d;
                this.d = (this.c = 0 !== n || 0 !== s ? (this.a = t * i, this.b = t * n, e * s) : (this.a = t * i, this.b = 0 * r, 0 * i), e * r), this._bTransform = !0;
            }, t.rotateEx = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    n = this.a,
                    s = this.b,
                    r = this.c,
                    o = this.d;
                this.d = 0 !== s || 0 !== r ? (this.a = e * n + i * r, this.b = e * s + i * o, this.c = -i * n + e * r, -i * s + e * o) : (this.a = e * n, this.b = i * o, this.c = -i * n, e * o), this._bTransform = !0;
            }, t.clone = function() {
                var t = a.create();
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t;
            }, t.copyTo = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t;
            }, t.toString = function() {
                return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
            }, t.destroy = function() {
                this.recover();
            }, t.recover = function() {
                I.recover("Matrix", this.identity());
            }, a.mul = function(t, e, i) {
                var n = t.a,
                    s = t.b,
                    r = t.c,
                    o = t.d,
                    a = t.tx,
                    h = t.ty,
                    l = e.a,
                    u = e.b,
                    c = e.c,
                    _ = e.d,
                    d = e.tx,
                    f = e.ty;
                return i.ty = 0 !== u || 0 !== c ? (i.a = n * l + s * c, i.b = n * u + s * _, i.c = r * l + o * c, i.d = r * u + o * _, i.tx = l * a + c * h + d, u * a + _ * h + f) : (i.a = n * l, i.b = s * _, i.c = r * l, i.d = o * _, i.tx = l * a + d, _ * h + f), i;
            }, a.mul16 = function(t, e, i) {
                var n = t.a,
                    s = t.b,
                    r = t.c,
                    o = t.d,
                    a = t.tx,
                    h = t.ty,
                    l = e.a,
                    u = e.b,
                    c = e.c,
                    _ = e.d,
                    d = e.tx,
                    f = e.ty;
                return i[13] = 0 !== u || 0 !== c ? (i[0] = n * l + s * c, i[1] = n * u + s * _, i[4] = r * l + o * c, i[5] = r * u + o * _, i[12] = l * a + c * h + d, u * a + _ * h + f) : (i[0] = n * l, i[1] = s * _, i[4] = r * l, i[5] = o * _, i[12] = l * a + d, _ * h + f), i;
            }, a.create = function() {
                return I.getItemByClass("Matrix", a);
            }, a.EMPTY = new a(), a.TEMP = new a(), a._createFun = null, a;
        }(),
        Y = function() {
            function t(t, e, i, n) {
                this.id = 0, this.name = null, this.color = 0, this.scale = 1, this.datapos = 0, this.datas = new Array(ee.DATANUM), this.id = t, this.color = e, this.name = i, this.scale = n;
            }
            return y(t, "laya.utils.PerfData"), t.prototype.addData = function(t) {
                this.datas[this.datapos] = t, this.datapos++, this.datapos %= ee.DATANUM;
            }, t;
        }(),
        H = function() {
            function s() {}
            y(s, "laya.display.cmd.TransformCmd");
            var t = s.prototype;
            return t.recover = function() {
                this.matrix = null, I.recover("TransformCmd", this);
            }, t.run = function(t, e, i) {
                t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
            }, f(0, t, "cmdID", function() {
                return "Transform";
            }), s.create = function(t, e, i) {
                var n = I.getItemByClass("TransformCmd", s);
                return n.matrix = t, n.pivotX = e, n.pivotY = i, n;
            }, s.ID = "Transform", s;
        }(),
        X = function() {
            function n() {}
            y(n, "laya.display.cmd.DrawTexturesCmd");
            var t = n.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, this.pos = null, I.recover("DrawTexturesCmd", this);
            }, t.run = function(t, e, i) {
                t.drawTextures(this.texture, this.pos, e, i);
            }, f(0, t, "cmdID", function() {
                return "DrawTextures";
            }), n.create = function(t, e) {
                var i = I.getItemByClass("DrawTexturesCmd", n);
                return (i.texture = t)._addReference(), i.pos = e, i;
            }, n.ID = "DrawTextures", n;
        }(),
        z = function() {
            function h() {}
            y(h, "laya.display.cmd.DrawCircleCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, I.recover("DrawCircleCmd", this);
            }, t.run = function(t, e, i) {
                t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }, f(0, t, "cmdID", function() {
                return "DrawCircle";
            }), h.create = function(t, e, i, n, s, r, o) {
                var a = I.getItemByClass("DrawCircleCmd", h);
                return a.x = t, a.y = e, a.radius = i, a.fillColor = n, a.lineColor = s, a.lineWidth = r, a.vid = o, a;
            }, h.ID = "DrawCircle", h;
        }(),
        V = function() {
            function a() {}
            y(a, "laya.resource.Context");
            var t = a.prototype;
            return t.drawCanvas = function(t, e, i, n, s) {
                w.renderBatches++, this.drawImage(t._source, e, i, n, s);
            }, t._drawRect = function(t, e, i, n, s) {
                w.renderBatches++, s && (this.fillStyle = s), this.fillRect(t, e, i, n);
            }, t.drawText = function(t, e, i, n, s, r) {
                w.renderBatches++, 3 < arguments.length && null != n && (this.font = n, this.fillStyle = s, this.textAlign = r, this.textBaseline = "top"), this.fillText(t, e, i);
            }, t.fillBorderText = function(t, e, i, n, s, r, o, a) {
                w.renderBatches++, this.font = n, this.fillStyle = s, this.textBaseline = "top", this.strokeStyle = r, this.lineWidth = o, this.textAlign = a, this.strokeText(t, e, i), this.fillText(t, e, i);
            }, t.fillWords = function(t, e, i, n, s) {
                n && (this.font = n), s && (this.fillStyle = s), this.textBaseline = "top", this.textAlign = "left";
                for (var r = 0, o = t.length; r < o; r++) {
                    var a = t[r];
                    this.fillText(a.char, a.x + e, a.y + i);
                }
            }, t.fillBorderWords = function(t, e, i, n, s, r, o) {
                n && (this.font = n), s && (this.fillStyle = s), this.textBaseline = "top", this.lineWidth = o, this.textAlign = "left", this.strokeStyle = r;
                for (var a = 0, h = t.length; a < h; a++) {
                    var l = t[a];
                    this.strokeText(l.char, l.x + e, l.y + i), this.fillText(l.char, l.x + e, l.y + i);
                }
            }, t.strokeWord = function(t, e, i, n, s, r, o) {
                w.renderBatches++, 3 < arguments.length && null != n && (this.font = n, this.strokeStyle = s, this.lineWidth = r, this.textAlign = o, this.textBaseline = "top"), this.strokeText(t, e, i);
            }, t.setTransformByMatrix = function(t) {
                this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
            }, t.clipRect = function(t, e, i, n) {
                w.renderBatches++, this.beginPath(), this.rect(t, e, i, n), this.clip();
            }, t.drawTextureWithTransform = function(t, e, i, n, s, r, o, a, h, l, u) {
                if (t._getSource()) {
                    w.renderBatches++;
                    var c = 1 !== h;
                    if (c) {
                        var _ = this.globalAlpha;
                        this.globalAlpha *= h;
                    }
                    l && (this.globalCompositeOperation = l);
                    var d = t.uv,
                        f = t.bitmap._width,
                        p = t.bitmap._height;
                    r ? (this.save(), this.transform(r.a, r.b, r.c, r.d, r.tx + o, r.ty + a), this.drawImage(t.bitmap._source, d[0] * f, d[1] * p, (d[2] - d[0]) * f, (d[5] - d[3]) * p, e, i, n, s), this.restore()) : this.drawImage(t.bitmap._source, d[0] * f, d[1] * p, (d[2] - d[0]) * f, (d[5] - d[3]) * p, o + e, a + i, n, s), c && (this.globalAlpha = _), l && (this.globalCompositeOperation = "source-over");
                }
            }, t.drawTextureWithSizeGrid = function(t, e, i, n, s, r, o, a) {
                if (t._getSource()) {
                    w.renderBatches++, e += o, i += a;
                    t.uv;
                    var h = t.bitmap._width,
                        l = t.bitmap._height,
                        u = r[0],
                        c = r[1],
                        _ = r[2],
                        d = r[3],
                        f = (r[4], !1);
                    if (n == h && (d = c = 0), s == l && (u = _ = 0), n < d + c) {
                        var p = n;
                        f = !0, n = d + c, this.save(), this.clipRect(0 + e, 0 + i, p, s);
                    }
                    d && u && this.drawRect(0 + e, 0 + i, d, u, "#ff0000", null, 0), c && u && this.drawRect(n - c + e, 0 + i, c, u, "#ff0000", null, 0), d && _ && this.drawRect(0 + e, s - _ + i, d, _, "#ff0000", null, 0), c && _ && this.drawRect(n - c + e, s - _ + i, c, _, "#ff0000", null, 0), u && this.drawRect(d + e, 0 + i, n - d - c, u, "#ffff00", null, 0), _ && this.drawRect(d + e, s - _ + i, n - d - c, _, "#ffff00", null, 0), d && this.drawRect(0 + e, u + i, d, s - u - _, "#ffff00", null, 0), c && this.drawRect(n - c + e, u + i, c, s - u - _, "#ffff00", null, 0), this.drawRect(d + e, u + i, n - d - c, s - u - _, "#ff00ff", null, 0), f && this.restore();
                }
            }, t.drawTexture2 = function(t, e, i, n, s, r) {
                var o = r[0];
                w.renderBatches++;
                var a = o.uv,
                    h = o.bitmap._width,
                    l = o.bitmap._height;
                s ? (this.save(), this.transform(s.a, s.b, s.c, s.d, s.tx + t, s.ty + e), this.drawImage(o.bitmap._source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, r[1] - i, r[2] - n, r[3], r[4]), this.restore()) : this.drawImage(o.bitmap._source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, r[1] - i + t, r[2] - n + e, r[3], r[4]);
            }, t.fillTexture = function(t, e, i, n, s, r, o, a) {
                if (!a.pat) {
                    if (t.uv != Nt.DEF_UV) {
                        var h = new Jt();
                        h.getContext("2d"), h.size(t.width, t.height), h.context.drawTexture(t, 0, 0, t.width, t.height), t = new Nt(h);
                    }
                    a.pat = this.createPattern(t.bitmap._source, r);
                }
                var l = e,
                    u = i,
                    c = 0,
                    _ = 0;
                o && (l += o.x % t.width, u += o.y % t.height, c -= o.x % t.width, _ -= o.y % t.height), this.translate(l, u), this._drawRect(c, _, n, s, a.pat), this.translate(-l, -u);
            }, t.flush = function() {
                return 0;
            }, t.destroy = function() {
                this.canvas.width = this.canvas.height = 0;
            }, t.clear = function() {
                this.clearRect(0, 0, it._mainCanvas.width, it._mainCanvas.height);
            }, t.drawTriangle = function(t, e, i, n, s, r, o, a) {
                var h = t.bitmap,
                    l = h._getSource(),
                    u = t.width,
                    c = t.height,
                    _ = h.width,
                    d = h.height,
                    f = i[n] * _,
                    p = i[s] * _,
                    g = i[r] * _,
                    m = i[n + 1] * d,
                    v = i[s + 1] * d,
                    y = i[r + 1] * d,
                    x = e[n],
                    w = e[s],
                    T = e[r],
                    C = e[n + 1],
                    b = e[s + 1],
                    S = e[r + 1];
                if (a) {
                    var I = (x + w + T) / 3,
                        M = (C + b + S) / 3,
                        A = x - I,
                        D = C - M,
                        P = Math.sqrt(A * A + D * D);
                    x = I + A / P * (P + 1), C = M + D / P * (P + 1), D = b - M, w = I + (A = w - I) / (P = Math.sqrt(A * A + D * D)) * (P + 1), b = M + D / P * (P + 1), D = S - M, T = I + (A = T - I) / (P = Math.sqrt(A * A + D * D)) * (P + 1), S = M + D / P * (P + 1);
                }
                this.save(), o && this.transform(o.a, o.b, o.c, o.d, o.tx, o.ty), this.beginPath(), this.moveTo(x, C), this.lineTo(w, b), this.lineTo(T, S), this.closePath(), this.clip();
                var L = 1 / (f * v + m * g + p * y - v * g - m * p - f * y),
                    E = x * v + m * T + w * y - v * T - m * w - x * y,
                    R = f * w + x * g + p * T - w * g - x * p - f * T,
                    B = f * v * T + m * w * g + x * p * y - x * v * g - m * p * T - f * w * y,
                    F = C * v + m * S + b * y - v * S - m * b - C * y,
                    O = f * b + C * g + p * S - b * g - C * p - f * S,
                    k = f * v * S + m * b * g + C * p * y - C * v * g - m * p * S - f * b * y;
                this.transform(E * L, F * L, R * L, O * L, B * L, k * L), this.drawImage(l, t.uv[0] * _, t.uv[1] * d, u, c, t.uv[0] * _, t.uv[1] * d, u, c), this.restore();
            }, t.transformByMatrix = function(t, e, i) {
                this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
            }, t.saveTransform = function(t) {
                this.save();
            }, t.restoreTransform = function(t) {
                this.restore();
            }, t.drawRect = function(t, e, i, n, s, r, o) {
                var a = this;
                null != s && (a.fillStyle = s, a.fillRect(t, e, i, n)), null != r && (a.strokeStyle = r, a.lineWidth = o, a.strokeRect(t, e, i, n));
            }, t.drawTexture = function(t, e, i, n, s) {
                var r = t._getSource();
                if (r) {
                    w.renderBatches++;
                    var o = t.uv,
                        a = t.bitmap.width,
                        h = t.bitmap.height;
                    this.drawImage(r, o[0] * a, o[1] * h, (o[2] - o[0]) * a, (o[5] - o[3]) * h, e, i, n, s);
                }
            }, t.drawTextures = function(t, e, i, n) {
                w.renderBatches += e.length / 2;
                for (var s = t.width, r = t.height, o = 0, a = e.length; o < a; o += 2) this.drawTexture(t, e[o] + i, e[o + 1] + n, s, r);
            }, t.drawTriangles = function(t, e, i, n, s, r, o, a, h, l) {
                var u = 0,
                    c = r.length;
                for (this.translate(e, i), u = 0; u < c; u += 3) {
                    var _ = 2 * r[u],
                        d = 2 * r[u + 1],
                        f = 2 * r[u + 2];
                    this.drawTriangle(t, n, s, _, d, f, o, !0);
                }
                this.translate(-e, -i);
            }, t.alpha = function(t) {
                this.globalAlpha *= t;
            }, t._transform = function(t, e, i) {
                this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
            }, t._rotate = function(t, e, i) {
                this.translate(e, i), this.rotate(t), this.translate(-e, -i);
            }, t._scale = function(t, e, i, n) {
                this.translate(i, n), this.scale(t, e), this.translate(-i, -n);
            }, t._drawLine = function(t, e, i, n, s, r, o, a, h) {
                this.beginPath(), this.strokeStyle = o, this.lineWidth = a, this.moveTo(t + i, e + n), this.lineTo(t + s, e + r), this.stroke();
            }, t._drawLines = function(t, e, i, n, s, r) {
                it.isWebGL && this.setPathId(r), this.beginPath(), this.strokeStyle = n, this.lineWidth = s;
                var o = 2,
                    a = i.length;
                if (it.isWebGL) this.addPath(i.slice(), !1, !1, t, e);
                else
                    for (this.moveTo(t + i[0], e + i[1]); o < a;) this.lineTo(t + i[o++], e + i[o++]);
                this.stroke();
            }, t.drawCurves = function(t, e, i, n, s) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = s, this.moveTo(t + i[0], e + i[1]);
                for (var r = 2, o = i.length; r < o;) this.quadraticCurveTo(t + i[r++], e + i[r++], t + i[r++], e + i[r++]);
                this.stroke();
            }, t._fillAndStroke = function(t, e, i, n) {
                void 0 === n && (n = !1), null != t && (this.fillStyle = t, this.fill()), null != e && 0 < i && (this.strokeStyle = e, this.lineWidth = i, this.stroke());
            }, t._drawCircle = function(t, e, i, n, s, r, o) {
                w.renderBatches++, it.isWebGL ? this.beginPath(!0) : this.beginPath(), this.arc(t, e, i, 0, a.PI2), this.closePath(), this._fillAndStroke(n, s, r);
            }, t._drawPie = function(t, e, i, n, s, r, o, a, h) {
                this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, n, s), this.closePath(), this._fillAndStroke(r, o, a);
            }, t._drawPoly = function(t, e, i, n, s, r, o, a) {
                var h = 2,
                    l = i.length;
                if (this.beginPath(), it.isWebGL) this.setPathId(a), this.addPath(i.slice(), !0, o, t, e);
                else
                    for (this.moveTo(t + i[0], e + i[1]); h < l;) this.lineTo(t + i[h++], e + i[h++]);
                this.closePath(), this._fillAndStroke(n, s, r, o);
            }, t._drawPath = function(t, e, i, n, s) {
                this.beginPath();
                for (var r = 0, o = i.length; r < o; r++) {
                    var a = i[r];
                    switch (a[0]) {
                        case "moveTo":
                            this.moveTo(t + a[1], e + a[2]);
                            break;
                        case "lineTo":
                            this.lineTo(t + a[1], e + a[2]);
                            break;
                        case "arcTo":
                            this.arcTo(t + a[1], e + a[2], t + a[3], e + a[4], a[5]);
                            break;
                        case "closePath":
                            this.closePath();
                    }
                }
                null != n && (this.fillStyle = n.fillStyle, this.fill()), null != s && (this.strokeStyle = s.strokeStyle, this.lineWidth = s.lineWidth || 1, this.lineJoin = s.lineJoin, this.lineCap = s.lineCap, this.miterLimit = s.miterLimit, this.stroke());
            }, t.drawParticle = function(t, e, i) {}, a.__init__ = function(e) {
                var i = laya.resource.Context.prototype;
                if (!(e = e || CanvasRenderingContext2D.prototype).init2d) {
                    e.init2d = !0;
                    ["saveTransform", "restoreTransform", "transformByMatrix", "drawTriangles", "drawTriangle", "drawTextures", "fillWords", "fillBorderWords", "drawRect", "strokeWord", "drawText", "fillTexture", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "drawTextureWithSizeGrid", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves", "_drawRect", "alpha", "_transform", "_rotate", "_scale", "_drawLine", "_drawLines", "_drawCircle", "_fillAndStroke", "_drawPie", "_drawPoly", "_drawPath", "drawTextureWithTransform"].forEach(function(t) {
                        e[t] = i[t];
                    });
                }
            }, a.ENUM_TEXTALIGN_DEFAULT = 0, a.ENUM_TEXTALIGN_CENTER = 1, a.ENUM_TEXTALIGN_RIGHT = 2, a.PI2 = 2 * Math.PI, a;
        }(),
        j = function() {
            var _, l;

            function m() {}
            return y(m, "laya.utils.SceneUtils"), m.getBindFun = function(t) {
                var e = m._funMap.get(t);
                if (null == e) {
                    var i = '"' + t + '"',
                        n = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    e = v._runScript(n), m._funMap.set(t, e);
                }
                return e;
            }, m.createByData = function(t, e) {
                var i = l.create();
                if ((t = m.createComp(e, t, t, null, i))._setBit(8, !0), t.hasOwnProperty("_idMap") && (t._idMap = i._idMap), e.animations) {
                    var n, s, r = [],
                        o = e.animations,
                        a = 0,
                        h = o.length;
                    for (a = 0; a < h; a++) {
                        switch (n = new se(), s = o[a], n._setUp(i._idMap, s), (t[s.name] = n)._setControlNode(t), s.action) {
                            case 1:
                                n.play(0, !1);
                                break;
                            case 2:
                                n.play(0, !0);
                        }
                        r.push(n);
                    }
                    t._aniList = r;
                }
                return "Scene" === t._$componentType && 0 < t._width && null == e.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0), i.beginLoad(t), t;
            }, m.createInitTool = function() {
                return l.create();
            }, m.createComp = function(t, e, i, n, s) {
                if ("Scene3D" == t.type || "Sprite3D" == t.type) {
                    var r = [],
                        o = v.Utils3D._createSceneByJsonForMaker(t, r, s);
                    return "Sprite3D" == t.type ? v.StaticBatchManager.combine(o, r) : v.StaticBatchManager.combine(null, r), o;
                }
                if (!(e = e || m.getCompInstance(t))) return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type), null;
                var a = t.child;
                if (a)
                    for (var h = "List" == e._$componentType, l = 0, u = a.length; l < u; l++) {
                        var c = a[l];
                        if (!e.hasOwnProperty("itemRender") || "render" != c.props.name && "render" !== c.props.renderType)
                            if ("Graphic" == c.type) nt._addGraphicsToSprite(c, e);
                            else if (nt._isDrawType(c.type)) nt._addGraphicToSprite(c, e, !0);
                        else {
                            if (h) {
                                var _ = [],
                                    d = m.createComp(c, null, i, _, s);
                                _.length && (d._$bindData = _);
                            } else d = m.createComp(c, null, i, n, s);
                            "Script" == c.type ? d instanceof laya.components.Component ? e._addComponentInstance(d) : "owner" in d ? d.owner = e : "target" in d && (d.target = e) : "mask" == c.props.renderType || "mask" == c.props.name ? e.mask = d : d instanceof laya.display.Node && e.addChild(d);
                        } else e.itemRender = c;
                    }
                var f = t.props;
                for (var p in f) {
                    var g = f[p];
                    "string" == typeof g && (0 <= g.indexOf("@node:") || 0 <= g.indexOf("@Prefab:")) ? s && s.addNodeRef(e, p, g) : m.setCompValue(e, p, g, i, n);
                }
                return e._afterInited && e._afterInited(), t.compId && s && s._idMap && (s._idMap[t.compId] = e), e;
            }, m.setCompValue = function(t, e, i, n, s) {
                if ("string" == typeof i && -1 < i.indexOf("${")) {
                    if (m._sheet || (m._sheet = nt.getClass("laya.data.Table")), !m._sheet) return void console.warn("Can not find class Sheet");
                    if (s) s.push(t, e, i);
                    else if (n) {
                        -1 == i.indexOf("].") && (i = i.replace(".", "[0]."));
                        var r, o, a = new _(t, e, i);
                        a.exe(n);
                        for (var h = i.replace(/\[.*?\]\./g, "."); null != (r = m._parseWatchData.exec(h));) {
                            for (var l = r[1]; null != (o = m._parseKeyWord.exec(l));) {
                                var u = o[0],
                                    c = n._watchMap[u] || (n._watchMap[u] = []);
                                c.push(a), m._sheet.I.notifer.on(u, n, n.changeData, [u]);
                            }
                            (c = n._watchMap[l] || (n._watchMap[l] = [])).push(a), m._sheet.I.notifer.on(l, n, n.changeData, [l]);
                        }
                    }
                } else "var" === e && n ? n[i] = t : t[e] = "true" === i || "false" !== i && i;
            }, m.getCompInstance = function(t) {
                if ("UIView" == t.type && t.props && t.props.pageData) return m.createByData(null, t.props.pageData);
                var e = t.props && t.props.runtime || t.type,
                    i = nt.getClass(e);
                if (!i) throw "Can not find class " + e;
                if ("Script" === t.type && i.prototype._doAwake) {
                    var n = I.createByClass(i);
                    return n._destroyed = !1, n;
                }
                return t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? (i.instance || (i.instance = new i()), i.instance) : new i();
            }, m._sheet = null, i(m, ["_funMap", function() {
                return this._funMap = new tt();
            }, "_parseWatchData", function() {
                return this._parseWatchData = /\${(.*?)}/g;
            }, "_parseKeyWord", function() {
                return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
            }]), m.__init$ = function() {
                _ = function() {
                    function t(t, e, i) {
                        this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, this.value = i;
                    }
                    return y(t, ""), t.prototype.exe = function(t) {
                        var e = m.getBindFun(this.value);
                        this.comp[this.prop] = e.call(this, t);
                    }, t;
                }(), l = function() {
                    function e() {
                        this._nodeRefList = null, this._initList = null, this._loadList = null, this._idMap = null, this._scene = null;
                    }
                    y(e, "");
                    var t = e.prototype;
                    return t.reset = function() {
                        this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, this._scene = null;
                    }, t.recover = function() {
                        this.reset(), I.recover("InitTool", this);
                    }, t.addLoadRes = function(t, e) {
                        this._loadList || (this._loadList = []), e ? this._loadList.push({
                            url: t,
                            type: e
                        }) : this._loadList.push(t);
                    }, t.addNodeRef = function(t, e, i) {
                        this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([t, e, i]), 0 <= i.indexOf("@Prefab:") && this.addLoadRes(i.replace("@Prefab:", ""), "prefab");
                    }, t.setNodeRef = function() {
                        if (this._nodeRefList)
                            if (this._idMap) {
                                var t, e, i = 0;
                                for (t = this._nodeRefList.length, i = 0; i < t; i++)(e = this._nodeRefList[i])[0][e[1]] = this.getReferData(e[2]);
                                this._nodeRefList = null;
                            } else this._nodeRefList = null;
                    }, t.getReferData = function(t) {
                        if (0 <= t.indexOf("@Prefab:")) return Ut.getRes(t.replace("@Prefab:", ""));
                        if (0 <= t.indexOf("@arr:")) {
                            var e, i, n, s = 0;
                            for (i = (e = (t = t.replace("@arr:", "")).split(",")).length, s = 0; s < i; s++) n = e[s], e[s] = n ? this._idMap[n.replace("@node:", "")] : null;
                            return e;
                        }
                        return this._idMap[t.replace("@node:", "")];
                    }, t.addInitItem = function(t) {
                        this._initList || (this._initList = []), this._initList.push(t);
                    }, t.doInits = function() {
                        this._initList && (this._initList = null);
                    }, t.finish = function() {
                        this.setNodeRef(), this.doInits(), this._scene._setBit(8, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), this._scene.event("onViewCreated"), this.recover();
                    }, t.beginLoad = function(t) {
                        this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : v.loader.load(this._loadList, x.create(this, this.finish));
                    }, e.create = function() {
                        var t = I.getItemByClass("InitTool", e);
                        return t._idMap = [], t;
                    }, e;
                }();
            }, m;
        }(),
        K = function() {
            function l(t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.x = t, this.y = e, this.width = i, this.height = n;
            }
            y(l, "laya.maths.Rectangle");
            var t = l.prototype;
            return t.setTo = function(t, e, i, n) {
                return this.x = t, this.y = e, this.width = i, this.height = n, this;
            }, t.reset = function() {
                return this.x = this.y = this.width = this.height = 0, this;
            }, t.recover = function() {
                this != l.TEMP && this != l.EMPTY ? I.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this);
            }, t.copyFrom = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
            }, t.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom);
            }, t.intersects = function(t) {
                return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
            }, t.intersection = function(t, e) {
                return this.intersects(t) ? (e || (e = new l()), e.x = Math.max(this.x, t.x), e.y = Math.max(this.y, t.y), e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y, e) : null;
            }, t.union = function(t, e) {
                return e || (e = new l()), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y), e.addPoint(t.right, t.bottom), this);
            }, t.clone = function(t) {
                return t || (t = new l()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
            }, t.toString = function() {
                return this.x + "," + this.y + "," + this.width + "," + this.height;
            }, t.equals = function(t) {
                return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
            }, t.addPoint = function(t, e) {
                return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), this;
            }, t._getBoundPoints = function() {
                var t = l._temB;
                return (t.length = 0) == this.width || 0 == this.height || t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), t;
            }, t.isEmpty = function() {
                return this.width <= 0 || this.height <= 0;
            }, f(0, t, "right", function() {
                return this.x + this.width;
            }), f(0, t, "bottom", function() {
                return this.y + this.height;
            }), l.create = function() {
                return I.getItemByClass("Rectangle", l);
            }, l._getBoundPointS = function(t, e, i, n) {
                var s = l._temA;
                return (s.length = 0) == i || 0 == n || s.push(t, e, t + i, e, t, e + n, t + i, e + n), s;
            }, l._getWrapRec = function(t, e) {
                if (!t || t.length < 1) return e ? e.setTo(0, 0, 0, 0) : l.TEMP.setTo(0, 0, 0, 0);
                e = e || laya.maths.Rectangle.create();
                var i, n, s, r, o, a = t.length,
                    h = ct.TEMP;
                for (s = o = -(n = r = 99999), i = 0; i < a; i += 2) h.x = t[i], h.y = t[i + 1], n = n < h.x ? n : h.x, r = r < h.y ? r : h.y, s = s > h.x ? s : h.x, o = o > h.y ? o : h.y;
                return e.setTo(n, r, s - n, o - r);
            }, l.EMPTY = new l(), l.TEMP = new l(), l._temB = [], l._temA = [], l;
        }(),
        $ = function() {
            function s() {}
            return y(s, "laya.events.KeyBoardManager"), s.__init__ = function() {
                s._addEvent("keydown"), s._addEvent("keypress"), s._addEvent("keyup");
            }, s._addEvent = function(e) {
                rt.document.addEventListener(e, function(t) {
                    laya.events.KeyBoardManager._dispatch(t, e);
                }, !0);
            }, s._dispatch = function(t, e) {
                if (s.enabled) {
                    s._event._stoped = !1, s._event.nativeEvent = t, s._event.keyCode = t.keyCode || t.which || t.charCode, "keydown" === e ? s._pressKeys[s._event.keyCode] = !0 : "keyup" === e && (s._pressKeys[s._event.keyCode] = null);
                    for (var i = v.stage.focus && null != v.stage.focus.event && v.stage.focus.displayedInStage ? v.stage.focus : v.stage, n = i; n;) n.event(e, s._event.setTo(e, n, i)), n = n.parent;
                }
            }, s.hasKeyDown = function(t) {
                return s._pressKeys[t];
            }, s._pressKeys = {}, s.enabled = !0, i(s, ["_event", function() {
                return this._event = new e();
            }]), s;
        }(),
        q = function() {
            function o() {}
            y(o, "laya.display.cmd.DrawPathCmd");
            var t = o.prototype;
            return t.recover = function() {
                this.paths = null, this.brush = null, this.pen = null, I.recover("DrawPathCmd", this);
            }, t.run = function(t, e, i) {
                t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
            }, f(0, t, "cmdID", function() {
                return "DrawPath";
            }), o.create = function(t, e, i, n, s) {
                var r = I.getItemByClass("DrawPathCmd", o);
                return r.x = t, r.y = e, r.paths = i, r.brush = n, r.pen = s, r;
            }, o.ID = "DrawPath", o;
        }(),
        Q = function() {
            function t() {}
            y(t, "laya.display.cmd.SaveCmd");
            var e = t.prototype;
            return e.recover = function() {
                I.recover("SaveCmd", this);
            }, e.run = function(t, e, i) {
                t.save();
            }, f(0, e, "cmdID", function() {
                return "Save";
            }), t.create = function() {
                return I.getItemByClass("SaveCmd", t);
            }, t.ID = "Save", t;
        }(),
        J = function() {
            var t;

            function i() {}
            return y(i, "laya.net.LocalStorage"), i.__init__ = function() {
                return i._baseClass || (i._baseClass = t).init(), i.items = i._baseClass.items, i.support = i._baseClass.support;
            }, i.setItem = function(t, e) {
                i._baseClass.setItem(t, e);
            }, i.getItem = function(t) {
                return i._baseClass.getItem(t);
            }, i.setJSON = function(t, e) {
                i._baseClass.setJSON(t, e);
            }, i.getJSON = function(t) {
                return i._baseClass.getJSON(t);
            }, i.removeItem = function(t) {
                i._baseClass.removeItem(t);
            }, i.clear = function() {
                i._baseClass.clear();
            }, i._baseClass = null, i.items = null, i.support = !1, i.__init$ = function() {
                t = function() {
                    function i() {}
                    return y(i, ""), i.init = function() {
                        try {
                            i.support = !0, i.items = g.localStorage, i.setItem("laya", "1"), i.removeItem("laya");
                        } catch (t) {
                            i.support = !1;
                        }
                        i.support || console.log("LocalStorage is not supprot or browser is private mode.");
                    }, i.setItem = function(t, e) {
                        try {
                            i.support && i.items.setItem(t, e);
                        } catch (t) {
                            console.warn("set localStorage failed", t);
                        }
                    }, i.getItem = function(t) {
                        return i.support ? i.items.getItem(t) : null;
                    }, i.setJSON = function(t, e) {
                        try {
                            i.support && i.items.setItem(t, JSON.stringify(e));
                        } catch (t) {
                            console.warn("set localStorage failed", t);
                        }
                    }, i.getJSON = function(t) {
                        return JSON.parse(i.support ? i.items.getItem(t) : null);
                    }, i.removeItem = function(t) {
                        i.support && i.items.removeItem(t);
                    }, i.clear = function() {
                        i.support && i.items.clear();
                    }, i.items = null, i.support = !1, i;
                }();
            }, i;
        }(),
        Z = function() {
            function t() {
                this.data = null;
            }
            y(t, "laya.filters.ColorFilterAction");
            var e = t.prototype;
            return e.apply = function(t) {
                var e = t.canvas,
                    i = e.context;
                if (0 == e.width || 0 == e.height) return e;
                for (var n, s = i.getImageData(0, 0, e.width, e.height), r = s.data, o = 0, a = r.length; o < a; o += 4) n = this.getColor(r[o], r[o + 1], r[o + 2], r[o + 3]), 0 != r[o + 3] && (r[o] = n[0], r[o + 1] = n[1], r[o + 2] = n[2], r[o + 3] = n[3]);
                return i.putImageData(s, 0, 0), t;
            }, e.getColor = function(t, e, i, n) {
                var s = [];
                if (this.data._mat && this.data._alpha) {
                    var r = this.data._mat,
                        o = this.data._alpha;
                    s[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * n + o[0], s[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * n + o[1], s[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * n + o[2], s[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * n + o[3];
                }
                return s;
            }, t;
        }(),
        tt = function() {
            function n() {
                this._obj = null, this._obj = n.supportWeakMap ? new rt.window.WeakMap() : {}, n.supportWeakMap || n._maps.push(this);
            }
            y(n, "laya.utils.WeakObject");
            var t = n.prototype;
            return t.set = function(t, e) {
                if (null != t)
                    if (n.supportWeakMap) {
                        var i = t;
                        "string" != typeof t && "number" != typeof t || (i = n._keys[t]) || (i = n._keys[t] = {
                            k: t
                        }), this._obj.set(i, e);
                    } else "string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = yt.getGID()), this._obj[t.$_GID] = e);
            }, t.get = function(t) {
                if (null == t) return null;
                if (n.supportWeakMap) {
                    var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                    return e ? this._obj.get(e) : null;
                }
                return "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID];
            }, t.del = function(t) {
                if (null != t)
                    if (n.supportWeakMap) {
                        var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                        if (!e) return;
                        this._obj.delete(e);
                    } else "string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID];
            }, t.has = function(t) {
                if (null == t) return !1;
                if (n.supportWeakMap) {
                    var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                    return this._obj.has(e);
                }
                return "string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID];
            }, n.__init__ = function() {
                (n.supportWeakMap = null != rt.window.WeakMap) || v.systemTimer.loop(n.delInterval, null, n.clearCache);
            }, n.clearCache = function() {
                for (var t = 0, e = n._maps.length; t < e; t++) {
                    n._maps[t]._obj = {};
                }
            }, n.supportWeakMap = !1, n.delInterval = 6e5, n._keys = {}, n._maps = [], i(n, ["I", function() {
                return this.I = new n();
            }]), n;
        }(),
        et = function() {
            function t() {}
            y(t, "laya.display.css.BoundsStyle");
            var e = t.prototype;
            return e.reset = function() {
                return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), this.bounds = null, this.userBounds = null, this.temBM = null, this;
            }, e.recover = function() {
                I.recover("BoundsStyle", this.reset());
            }, t.create = function() {
                return I.getItemByClass("BoundsStyle", t);
            }, t;
        }(),
        it = (function() {
            function t() {}
            y(t, "laya.system.System"), t.changeDefinition = function(t, e) {
                v[t] = e;
                var i = t + "=classObj";
                v._runScript(i);
            }, t.__init__ = function() {};
        }(), function() {
            function i() {}
            y(i, "laya.display.cmd.DrawParticleCmd");
            var t = i.prototype;
            t.recover = function() {
                this._templ = null, I.recover("DrawParticleCmd", this);
            }, t.run = function(t, e, i) {
                t.drawParticle(e, i, this._templ);
            }, f(0, t, "cmdID", function() {
                return "DrawParticleCmd";
            }), i.create = function(t) {
                var e = I.getItemByClass("DrawParticleCmd", i);
                return e._templ = t, e;
            }, i.ID = "DrawParticleCmd";
        }(), function() {
            function i(t, e) {
                this._timeId = 0, i._mainCanvas.source.id = "layaCanvas", i._mainCanvas.source.width = t, i._mainCanvas.source.height = e, laya.renders.Render.isConchApp ? rt.document.body.appendChild(i._mainCanvas.source) : rt.onKGMiniGame || rt.container.appendChild(i._mainCanvas.source), bt.initRender(i._mainCanvas, t, e), rt.window.requestAnimationFrame(function t(e) {
                    v.stage._loop();
                    rt.window.requestAnimationFrame(t);
                }), v.stage.on("visibilitychange", this, this._onVisibilitychange);
            }
            y(i, "laya.renders.Render");
            var t = i.prototype;
            return t._onVisibilitychange = function() {
                v.stage.isVisibility ? 0 != this._timeId && rt.window.clearInterval(this._timeId) : this._timeId = rt.window.setInterval(this._enterFrame, 1e3);
            }, t._enterFrame = function(t) {
                v.stage._loop();
            }, f(1, i, "context", function() {
                return i._context;
            }), f(1, i, "canvas", function() {
                return i._mainCanvas.source;
            }), i._context = null, i._mainCanvas = null, i.supportWebGLPlusCulling = !1, i.supportWebGLPlusAnimation = !1, i.supportWebGLPlusRendering = !1, i.isConchApp = !1, i.isWebGL = !1, i.is3DMode = !1, i.__init$ = function() {
                (i.isConchApp = null != g.conch) && (i.supportWebGLPlusCulling = !0, i.supportWebGLPlusAnimation = !0, i.supportWebGLPlusRendering = !0);
            }, i;
        }()),
        nt = function() {
            function d() {}
            return y(d, "laya.utils.ClassUtils"), d.regClass = function(t, e) {
                d._classMap[t] = e;
            }, d.regShortClassName = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = i.name;
                    d._classMap[n] = i;
                }
            }, d.getRegClass = function(t) {
                return d._classMap[t];
            }, d.getClass = function(t) {
                var e = d._classMap[t] || t;
                return "string" == typeof e ? v.__classmap[e] || v[t] : e;
            }, d.getInstance = function(t) {
                var e = d.getClass(t);
                return e ? new e() : (console.warn("[error] Undefined class:", t), null);
            }, d.createByJson = function(t, e, i, n, s) {
                "string" == typeof t && (t = JSON.parse(t));
                var r = t.props;
                if (!e && !(e = s ? s.runWith(t) : d.getInstance(r.runtime || t.type))) return null;
                var o = t.child;
                if (o)
                    for (var a = 0, h = o.length; a < h; a++) {
                        var l = o[a];
                        if ("render" !== l.props.name && "render" !== l.props.renderType || !e._$set_itemRender)
                            if ("Graphic" == l.type) d._addGraphicsToSprite(l, e);
                            else if (d._isDrawType(l.type)) d._addGraphicToSprite(l, e, !0);
                        else {
                            var u = d.createByJson(l, null, i, n, s);
                            "Script" === l.type ? u.hasOwnProperty("owner") ? u.owner = e : u.hasOwnProperty("target") && (u.target = e) : "mask" == l.props.renderType ? e.mask = u : e.addChild(u);
                        } else e.itemRender = l;
                    }
                if (r)
                    for (var c in r) {
                        var _ = r[c];
                        "var" === c && i ? i[_] = e : _ instanceof Array && "function" == typeof e[c] ? e[c].apply(e, _) : e[c] = _;
                    }
                return n && t.customProps && n.runWith([e, t]), e.created && e.created(), e;
            }, d._addGraphicsToSprite = function(t, e) {
                var i = t.child;
                if (i && !(i.length < 1)) {
                    var n = d._getGraphicsFromSprite(t, e),
                        s = 0,
                        r = 0;
                    t.props && (s = d._getObjVar(t.props, "x", 0), r = d._getObjVar(t.props, "y", 0)), 0 != s && 0 != r && n.translate(s, r);
                    var o, a = 0;
                    for (o = i.length, a = 0; a < o; a++) d._addGraphicToGraphics(i[a], n);
                    0 != s && 0 != r && n.translate(-s, -r);
                }
            }, d._addGraphicToSprite = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = i ? d._getGraphicsFromSprite(t, e) : e.graphics;
                d._addGraphicToGraphics(t, n);
            }, d._getGraphicsFromSprite = function(t, e) {
                if (!t || !t.props) return e.graphics;
                var i = t.props.renderType;
                if ("hit" === i || "unHit" === i) {
                    var n = e._style.hitArea || (e.hitArea = new Pt());
                    n[i] || (n[i] = new gt());
                    var s = n[i];
                }
                return s || (s = e.graphics), s;
            }, d._getTransformData = function(t) {
                var e;
                (t.hasOwnProperty("pivotX") || t.hasOwnProperty("pivotY")) && (e = e || new G()).translate(-d._getObjVar(t, "pivotX", 0), -d._getObjVar(t, "pivotY", 0));
                var i = d._getObjVar(t, "scaleX", 1),
                    n = d._getObjVar(t, "scaleY", 1),
                    s = d._getObjVar(t, "rotation", 0);
                d._getObjVar(t, "skewX", 0), d._getObjVar(t, "skewY", 0);
                return 1 == i && 1 == n && 0 == s || ((e = e || new G()).scale(i, n), e.rotate(.0174532922222222 * s)), e;
            }, d._addGraphicToGraphics = function(t, e) {
                var i, n;
                if ((i = t.props) && (n = d.DrawTypeDic[t.type])) {
                    var s = e,
                        r = d._getParams(i, n[1], n[2], n[3]),
                        o = d._tM;
                    (o || 1 != d._alpha) && (s.save(), o && s.transform(o), 1 != d._alpha && s.alpha(d._alpha)), s[n[0]].apply(s, r), (o || 1 != d._alpha) && s.restore();
                }
            }, d._adptLineData = function(t) {
                return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), t;
            }, d._adptTextureData = function(t) {
                return t[0] = Ut.getRes(t[0]), t;
            }, d._adptLinesData = function(t) {
                return t[2] = d._getPointListByStr(t[2]), t;
            }, d._isDrawType = function(t) {
                return "Image" !== t && d.DrawTypeDic.hasOwnProperty(t);
            }, d._getParams = function(t, e, i, n) {
                void 0 === i && (i = 0);
                var s = d._temParam;
                s.length = e.length;
                var r, o, a = 0;
                for (r = e.length, a = 0; a < r; a++) s[a] = d._getObjVar(t, e[a][0], e[a][1]);
                return d._alpha = d._getObjVar(t, "alpha", 1), o = d._getTransformData(t), d._tM = o ? (i || (i = 0), o.translate(s[i], s[i + 1]), s[i] = s[i + 1] = 0, o) : null, n && d[n] && (s = d[n](s)), s;
            }, d._getPointListByStr = function(t) {
                var e, i = t.split(","),
                    n = 0;
                for (e = i.length, n = 0; n < e; n++) i[n] = parseFloat(i[n]);
                return i;
            }, d._getObjVar = function(t, e, i) {
                return t.hasOwnProperty(e) ? t[e] : i;
            }, d._temParam = [], d._classMap = {
                Sprite: Vt,
                Scene: ie,
                Text: qt,
                Animation: "laya.display.Animation",
                Skeleton: "laya.ani.bone.Skeleton",
                Particle2D: "laya.particle.Particle2D",
                div: "laya.html.dom.HTMLDivParser",
                p: "laya.html.dom.HTMLElement",
                img: "laya.html.dom.HTMLImageElement",
                span: "laya.html.dom.HTMLElement",
                br: "laya.html.dom.HTMLBrElement",
                style: "laya.html.dom.HTMLStyleElement",
                font: "laya.html.dom.HTMLElement",
                a: "laya.html.dom.HTMLElement",
                "#text": "laya.html.dom.HTMLElement",
                link: "laya.html.dom.HTMLLinkElement"
            }, d._tM = null, d._alpha = NaN, i(d, ["DrawTypeDic", function() {
                return this.DrawTypeDic = {
                    Rect: ["drawRect", [
                        ["x", 0],
                        ["y", 0],
                        ["width", 0],
                        ["height", 0],
                        ["fillColor", null],
                        ["lineColor", null],
                        ["lineWidth", 1]
                    ]],
                    Circle: ["drawCircle", [
                        ["x", 0],
                        ["y", 0],
                        ["radius", 0],
                        ["fillColor", null],
                        ["lineColor", null],
                        ["lineWidth", 1]
                    ]],
                    Pie: ["drawPie", [
                        ["x", 0],
                        ["y", 0],
                        ["radius", 0],
                        ["startAngle", 0],
                        ["endAngle", 0],
                        ["fillColor", null],
                        ["lineColor", null],
                        ["lineWidth", 1]
                    ]],
                    Image: ["drawTexture", [
                        ["x", 0],
                        ["y", 0],
                        ["width", 0],
                        ["height", 0]
                    ]],
                    Texture: ["drawTexture", [
                        ["skin", null],
                        ["x", 0],
                        ["y", 0],
                        ["width", 0],
                        ["height", 0]
                    ], 1, "_adptTextureData"],
                    FillTexture: ["fillTexture", [
                        ["skin", null],
                        ["x", 0],
                        ["y", 0],
                        ["width", 0],
                        ["height", 0],
                        ["repeat", null]
                    ], 1, "_adptTextureData"],
                    FillText: ["fillText", [
                        ["text", ""],
                        ["x", 0],
                        ["y", 0],
                        ["font", null],
                        ["color", null],
                        ["textAlign", null]
                    ], 1],
                    Line: ["drawLine", [
                        ["x", 0],
                        ["y", 0],
                        ["toX", 0],
                        ["toY", 0],
                        ["lineColor", null],
                        ["lineWidth", 0]
                    ], 0, "_adptLineData"],
                    Lines: ["drawLines", [
                        ["x", 0],
                        ["y", 0],
                        ["points", ""],
                        ["lineColor", null],
                        ["lineWidth", 0]
                    ], 0, "_adptLinesData"],
                    Curves: ["drawCurves", [
                        ["x", 0],
                        ["y", 0],
                        ["points", ""],
                        ["lineColor", null],
                        ["lineWidth", 0]
                    ], 0, "_adptLinesData"],
                    Poly: ["drawPoly", [
                        ["x", 0],
                        ["y", 0],
                        ["points", ""],
                        ["fillColor", null],
                        ["lineColor", null],
                        ["lineWidth", 1]
                    ], 0, "_adptLinesData"]
                };
            }]), d;
        }(),
        st = function() {
            function v() {
                this._cacheBoundsType = !1;
            }
            y(v, "laya.display.GraphicsBounds");
            var t = v.prototype;
            return t.destroy = function() {
                this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), this._bounds = null, I.recover("GraphicsBounds", this);
            }, t.reset = function() {
                this._temp && (this._temp.length = 0);
            }, t.getBounds = function(t) {
                return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = K._getWrapRec(this.getBoundPoints(t), this._bounds)), this._cacheBoundsType = t, this._bounds;
            }, t.getBoundPoints = function(t) {
                return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), this._cacheBoundsType = t, this._rstBoundPoints = yt.copyArray(this._rstBoundPoints, this._temp);
            }, t._getCmdPoints = function(t) {
                void 0 === t && (t = !1);
                it._context;
                var e, i = this._graphics.cmds;
                if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (v._tempCmds.length = 0, v._tempCmds.push(this._graphics._one), i = v._tempCmds), !i) return e;
                var n = v._tempMatrixArrays;
                n.length = 0;
                var s = v._initMatrix;
                s.identity();
                for (var r, o, a = v._tempMatrix, h = 0, l = i.length; h < l; h++) switch ((r = i[h]).cmdID) {
                    case "Alpha":
                        n.push(s), s = s.clone();
                        break;
                    case "Restore":
                        s = n.pop();
                        break;
                    case "Scale":
                        a.identity(), a.translate(-r.pivotX, -r.pivotY), a.scale(r.scaleX, r.scaleY), a.translate(r.pivotX, r.pivotY), this._switchMatrix(s, a);
                        break;
                    case "Rotate":
                        a.identity(), a.translate(-r.pivotX, -r.pivotY), a.rotate(r.angle), a.translate(r.pivotX, r.pivotY), this._switchMatrix(s, a);
                        break;
                    case "Translate":
                        a.identity(), a.translate(r.tx, r.ty), this._switchMatrix(s, a);
                        break;
                    case "Transform":
                        a.identity(), a.translate(-r.pivotX, -r.pivotY), a.concat(r.matrix), a.translate(r.pivotX, r.pivotY), this._switchMatrix(s, a);
                        break;
                    case "DrawImage":
                    case "FillTexture":
                        v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), s);
                        break;
                    case "DrawTexture":
                        s.copyTo(a), r.matrix && a.concat(r.matrix), v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), a);
                        break;
                    case "DrawImage":
                        if (o = r.texture, t) r.width && r.height ? v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), s) : v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, o.width, o.height), s);
                        else {
                            var u = (r.width || o.sourceWidth) / o.width,
                                c = (r.height || o.sourceHeight) / o.height,
                                _ = u * o.sourceWidth,
                                d = c * o.sourceHeight,
                                f = 0 < o.offsetX ? o.offsetX : 0,
                                p = 0 < o.offsetY ? o.offsetY : 0;
                            f *= u, p *= c, v._addPointArrToRst(e, K._getBoundPointS(r.x - f, r.y - p, _, d), s);
                        }
                        break;
                    case "FillTexture":
                        r.width && r.height ? v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), s) : (o = r.texture, v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, o.width, o.height), s));
                        break;
                    case "DrawTexture":
                        var g;
                        g = r.matrix ? (s.copyTo(a), a.concat(r.matrix), a) : s, t ? r.width && r.height ? v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), g) : (o = r.texture, v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, o.width, o.height), g)) : (o = r.texture, u = (r.width || o.sourceWidth) / o.width, c = (r.height || o.sourceHeight) / o.height, _ = u * o.sourceWidth, d = c * o.sourceHeight, f = 0 < o.offsetX ? o.offsetX : 0, p = 0 < o.offsetY ? o.offsetY : 0, f *= u, p *= c, v._addPointArrToRst(e, K._getBoundPointS(r.x - f, r.y - p, _, d), g));
                        break;
                    case "DrawRect":
                        v._addPointArrToRst(e, K._getBoundPointS(r.x, r.y, r.width, r.height), s);
                        break;
                    case "DrawCircle":
                        v._addPointArrToRst(e, K._getBoundPointS(r.x - r.radius, r.y - r.radius, r.radius + r.radius, r.radius + r.radius), s);
                        break;
                    case "DrawLine":
                        v._tempPoints.length = 0;
                        var m;
                        m = .5 * r.lineWidth, r.fromX == r.toX ? v._tempPoints.push(r.fromX + m, r.fromY, r.toX + m, r.toY, r.fromX - m, r.fromY, r.toX - m, r.toY) : r.fromY == r.toY ? v._tempPoints.push(r.fromX, r.fromY + m, r.toX, r.toY + m, r.fromX, r.fromY - m, r.toX, r.toY - m) : v._tempPoints.push(r.fromX, r.fromY, r.toX, r.toY), v._addPointArrToRst(e, v._tempPoints, s);
                        break;
                    case "DrawCurves":
                        v._addPointArrToRst(e, at.I.getBezierPoints(r.points), s, r.x, r.y);
                        break;
                    case "DrawLines":
                    case "DrawPoly":
                        v._addPointArrToRst(e, r.points, s, r.x, r.y);
                        break;
                    case "DrawPath":
                        v._addPointArrToRst(e, this._getPathPoints(r.paths), s, r.x, r.y);
                        break;
                    case "DrawPie":
                        v._addPointArrToRst(e, this._getPiePoints(r.x, r.y, r.radius, r.startAngle, r.endAngle), s);
                }
                return 200 < e.length ? e = yt.copyArray(e, K._getWrapRec(e)._getBoundPoints()) : 8 < e.length && (e = L.scanPList(e)), e;
            }, t._switchMatrix = function(t, e) {
                e.concat(t), e.copyTo(t);
            }, t._getPiePoints = function(t, e, i, n, s) {
                var r = v._tempPoints;
                v._tempPoints.length = 0, r.push(t, e);
                var o = (s - n) % 360;
                o < 0 && (o += 360);
                var a = o / 32,
                    h = NaN,
                    l = n;
                for (h = 0; h <= 32; h++) r.push(t + i * Math.cos(l), e + i * Math.sin(l)), l += a;
                return r;
            }, t._getPathPoints = function(t) {
                var e, i, n = 0,
                    s = v._tempPoints;
                for (s.length = 0, e = t.length, n = 0; n < e; n++) 1 < (i = t[n]).length && (s.push(i[1], i[2]), 3 < i.length && s.push(i[3], i[4]));
                return s;
            }, v.create = function() {
                return I.getItemByClass("GraphicsBounds", v);
            }, v._addPointArrToRst = function(t, e, i, n, s) {
                void 0 === n && (n = 0), void 0 === s && (s = 0);
                var r, o = 0;
                for (r = e.length, o = 0; o < r; o += 2) v._addPointToRst(t, e[o] + n, e[o + 1] + s, i);
            }, v._addPointToRst = function(t, e, i, n) {
                var s = ct.TEMP;
                s.setTo(e || 0, i || 0), n.transformPoint(s), t.push(s.x, s.y);
            }, v._tempPoints = [], v._tempMatrixArrays = [], v._tempCmds = [], i(v, ["_tempMatrix", function() {
                return this._tempMatrix = new G();
            }, "_initMatrix", function() {
                return this._initMatrix = new G();
            }]), v;
        }(),
        rt = function() {
            function p() {}
            return y(p, "laya.utils.Browser"), f(1, p, "pixelRatio", function() {
                if (p._pixelRatio < 0)
                    if (p.__init__(), -1 < p.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")) p._pixelRatio = 2;
                    else {
                        var t = p.context,
                            e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                        (p._pixelRatio = (p._window.devicePixelRatio || 1) / e) < 1 && (p._pixelRatio = 1);
                    }
                return p._pixelRatio;
            }), f(1, p, "height", function() {
                return p.__init__(), (v.stage && v.stage.canvasRotation ? p.clientWidth : p.clientHeight) * p.pixelRatio;
            }), f(1, p, "clientWidth", function() {
                return p.__init__(), p._window.innerWidth || p._document.body.clientWidth;
            }), f(1, p, "window", function() {
                return p._window || p.__init__();
            }), f(1, p, "clientHeight", function() {
                return p.__init__(), p._window.innerHeight || p._document.body.clientHeight || p._document.documentElement.clientHeight;
            }), f(1, p, "width", function() {
                return p.__init__(), (v.stage && v.stage.canvasRotation ? p.clientHeight : p.clientWidth) * p.pixelRatio;
            }), f(1, p, "container", function() {
                return p._container || (p.__init__(), (p._container = p.createElement("div")).id = "layaContainer", p._document.body.appendChild(p._container)), p._container;
            }, function(t) {
                p._container = t;
            }), f(1, p, "document", function() {
                return p.__init__(), p._document;
            }), p.__init__ = function() {
                if (p._window) return p._window;
                var e = p._window = g,
                    t = p._document = e.document,
                    i = p.userAgent = e.navigator.userAgent,
                    n = e._layalibs;
                if (n) {
                    n.sort(function(t, e) {
                        return t.i > e.i;
                    });
                    for (var s = 0; s < n.length; s++) n[s].f(e, t, v);
                } -
                1 < i.indexOf("MiniGame") && p.window.hasOwnProperty("wx") && (v.MiniAdpter ? v.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), -1 < i.indexOf("SwanGame") && (v.BMiniAdapter ? v.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), "function" == typeof getApp && (v.KGMiniAdapter ? v.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), -1 < i.indexOf("QGGame") && (v.QGMiniAdapter ? v.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), e.trace = console.log, e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60);
                };
                var r = t.body.style;
                r.margin = 0, r.overflow = "hidden", r["-webkit-user-select"] = "none", r["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
                for (var o = t.getElementsByTagName("meta"), a = 0, h = !1, l = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; a < o.length;) {
                    var u = o[a];
                    if ("viewport" == u.name) {
                        u.content = l, h = !0;
                        break;
                    }
                    a++;
                }
                h || ((u = t.createElement("meta")).name = "viewport", u.content = l, t.getElementsByTagName("head")[0].appendChild(u)), p.onMobile = !!g.isConchApp || -1 < i.indexOf("Mobile"), p.onIOS = !!i.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), p.onIPhone = -1 < i.indexOf("iPhone"), p.onMac = -1 < i.indexOf("Mac OS X"), p.onIPad = -1 < i.indexOf("iPad"), p.onAndroid = -1 < i.indexOf("Android") || -1 < i.indexOf("Adr"), p.onWP = -1 < i.indexOf("Windows Phone"), p.onQQBrowser = -1 < i.indexOf("QQBrowser"), p.onMQQBrowser = -1 < i.indexOf("MQQBrowser") || -1 < i.indexOf("Mobile") && -1 < i.indexOf("QQ"), p.onIE = !!e.ActiveXObject || "ActiveXObject" in e, p.onWeiXin = -1 < i.indexOf("MicroMessenger"), p.onSafari = -1 < i.indexOf("Safari"), p.onPC = !p.onMobile, p.onMiniGame = -1 < i.indexOf("MiniGame"), p.onBDMiniGame = -1 < i.indexOf("SwanGame"), -1 < i.indexOf("OPPO") && -1 < i.indexOf("MiniGame") && (p.onQGMiniGame = !0, p.onMiniGame = !1), p.onLimixiu = -1 < i.indexOf("limixiu"), p.onKGMiniGame = -1 < i.indexOf("QuickGame"), p.supportLocalStorage = J.__init__(), p.supportWebAudio = Lt.__init__(), it._mainCanvas = new Jt(!0);
                var c = it._mainCanvas.source.style;
                c.position = "absolute", c.top = c.left = "0px", c.background = "#000000", p.canvas = new Jt(!0), p.context = p.canvas.getContext("2d");
                var _ = new Jt(!0);
                laya.utils.Browser.onQGMiniGame && (_ = it._mainCanvas);
                var d = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
                    f = null;
                for (a = 0; a < d.length; a++) {
                    try {
                        f = _.source.getContext(d[a]);
                    } catch (t) {}
                    if (f) {
                        p._supportWebGL = !0;
                        break;
                    }
                }
                return e;
            }, p.createElement = function(t) {
                return p.__init__(), p._document.createElement(t);
            }, p.getElementById = function(t) {
                return p.__init__(), p._document.getElementById(t);
            }, p.removeElement = function(t) {
                t && t.parentNode && t.parentNode.removeChild(t);
            }, p.now = function() {
                return Date.now();
            }, p.userAgent = null, p.onMobile = !1, p.onIOS = !1, p.onMac = !1, p.onIPhone = !1, p.onIPad = !1, p.onAndroid = !1, p.onWP = !1, p.onQQBrowser = !1, p.onMQQBrowser = !1, p.onSafari = !1, p.onIE = !1, p.onWeiXin = !1, p.onPC = !1, p.onMiniGame = !1, p.onBDMiniGame = !1, p.onKGMiniGame = !1, p.onQGMiniGame = !1, p.onLimixiu = !1, p.onFirefox = !1, p.onEdge = !1, p.supportWebAudio = !1, p.supportLocalStorage = !1, p.canvas = null, p.context = null, p._window = null, p._document = null, p._container = null, p._pixelRatio = -1, p._supportWebGL = !1, p;
        }(),
        ot = function() {
            function l() {}
            y(l, "laya.display.cmd.FillBorderTextCmd");
            var t = l.prototype;
            return t.recover = function() {
                I.recover("FillBorderTextCmd", this);
            }, t.run = function(t, e, i) {
                t.fillBorderText(this.text, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth, this.textAlign);
            }, f(0, t, "cmdID", function() {
                return "FillBorderText";
            }), l.create = function(t, e, i, n, s, r, o, a) {
                var h = I.getItemByClass("FillBorderTextCmd", l);
                return h.text = t, h.x = e, h.y = i, h.font = n, h.fillColor = s, h.borderColor = r, h.lineWidth = o, h.textAlign = a, h;
            }, l.ID = "FillBorderText", l;
        }(),
        at = function() {
            function t() {
                this._controlPoints = [new ct(), new ct(), new ct()], this._calFun = this.getPoint2;
            }
            y(t, "laya.maths.Bezier");
            var e = t.prototype;
            return e._switchPoint = function(t, e) {
                var i = this._controlPoints.shift();
                i.setTo(t, e), this._controlPoints.push(i);
            }, e.getPoint2 = function(t, e) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    s = this._controlPoints[2],
                    r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * s.x,
                    o = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * s.y;
                e.push(r, o);
            }, e.getPoint3 = function(t, e) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    s = this._controlPoints[2],
                    r = this._controlPoints[3],
                    o = Math.pow(1 - t, 3) * i.x + 3 * n.x * t * (1 - t) * (1 - t) + 3 * s.x * t * t * (1 - t) + r.x * Math.pow(t, 3),
                    a = Math.pow(1 - t, 3) * i.y + 3 * n.y * t * (1 - t) * (1 - t) + 3 * s.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
                e.push(o, a);
            }, e.insertPoints = function(t, e) {
                var i, n = NaN;
                for (i = 1 / (t = 0 < t ? t : 5), n = 0; n <= 1; n += i) this._calFun(n, e);
            }, e.getBezierPoints = function(t, e, i) {
                void 0 === e && (e = 5), void 0 === i && (i = 2);
                var n, s = 0;
                if ((n = t.length) < 2 * (i + 1)) return [];
                var r = [];
                switch (i) {
                    case 2:
                        this._calFun = this.getPoint2;
                        break;
                    case 3:
                        this._calFun = this.getPoint3;
                        break;
                    default:
                        return [];
                }
                for (; this._controlPoints.length <= i;) this._controlPoints.push(ct.create());
                for (s = 0; s < 2 * i; s += 2) this._switchPoint(t[s], t[s + 1]);
                for (s = 2 * i; s < n; s += 2) this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, r);
                return r;
            }, i(t, ["I", function() {
                return this.I = new t();
            }]), t;
        }(),
        ht = function() {
            function a() {}
            y(a, "laya.display.cmd.Draw9GridTexture");
            var t = a.prototype;
            return t.recover = function() {
                this.texture._removeReference(), I.recover("Draw9GridTexture", this);
            }, t.run = function(t, e, i) {
                t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
            }, f(0, t, "cmdID", function() {
                return "Draw9GridTexture";
            }), a.create = function(t, e, i, n, s, r) {
                var o = I.getItemByClass("Draw9GridTexture", a);
                return (o.texture = t)._addReference(), o.x = e, o.y = i, o.width = n, o.height = s, o.sizeGrid = r, o;
            }, a.ID = "Draw9GridTexture", a;
        }(),
        lt = (function() {
            function t() {
                this._strsToID = {}, this._idToStrs = [], this._length = 0;
            }
            y(t, "laya.utils.StringKey");
            var e = t.prototype;
            e.add = function(t) {
                var e = this._strsToID[t];
                return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
            }, e.getID = function(t) {
                var e = this._strsToID[t];
                return null == e ? -1 : e;
            }, e.getName = function(t) {
                var e = this._idToStrs[t];
                return null == e ? void 0 : e;
            };
        }(), function() {
            function t() {
                this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
            }
            y(t, "laya.utils.Dragging");
            var e = t.prototype;
            return e.start = function(t, e, i, n, s, r, o, a) {
                void 0 === a && (a = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = i, this.elasticDistance = e ? n : 0, this.elasticBackTime = s, this.data = r, this._disableMouseEvent = o, this.ratio = a, this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, v.stage.on("mouseup", this, this.onStageMouseUp), v.stage.on("mouseout", this, this.onStageMouseUp), v.systemTimer.frameLoop(1, this, this.loop);
            }, e.clearTimer = function() {
                v.systemTimer.clear(this, this.loop), v.systemTimer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null);
            }, e.stop = function() {
                this._dragging && (d.instance.disableMouseEvent = !1, v.stage.off("mouseup", this, this.onStageMouseUp), v.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear());
            }, e.loop = function() {
                var t = this._parent.getMousePoint(),
                    e = t.x,
                    i = t.y,
                    n = e - this._lastX,
                    s = i - this._lastY;
                if (this._clickOnly) {
                    if (!(1 < Math.abs(n * v.stage._canvasTransform.getScaleX()) || 1 < Math.abs(s * v.stage._canvasTransform.getScaleY()))) return;
                    this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event("dragstart", this.data), d.instance.disableMouseEvent = this._disableMouseEvent;
                } else this._offsets.push(n, s);
                0 === n && 0 === s || (this._lastX = e, this._lastY = i, this.target.x += n * this._elasticRateX, this.target.y += s * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data));
            }, e.checkArea = function() {
                if (this.elasticDistance <= 0) this.backToArea();
                else {
                    if (this.target._x < this.area.x) var t = this.area.x - this.target._x;
                    else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                    if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y;
                    else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                    this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
                }
            }, e.backToArea = function() {
                this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
            }, e.onStageMouseUp = function(t) {
                if (d.instance.disableMouseEvent = !1, v.stage.off("mouseup", this, this.onStageMouseUp), v.stage.off("mouseout", this, this.onStageMouseUp), v.systemTimer.clear(this, this.loop), !this._clickOnly && this.target)
                    if (this.hasInertia) {
                        this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
                        for (var e = this._offsets.length, i = Math.min(e, 6), n = this._offsets.length - i, s = e - 1; n < s; s--) this._offsetY += this._offsets[s--], this._offsetX += this._offsets[s];
                        this._offsetX = this._offsetX / i * 2, this._offsetY = this._offsetY / i * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = 0 < this._offsetX ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = 0 < this._offsetY ? this.maxOffset : -this.maxOffset), v.systemTimer.frameLoop(1, this, this.tweenMove);
                    } else 0 < this.elasticDistance ? this.checkElastic() : this.clear();
            }, e.checkElastic = function() {
                var t = NaN,
                    e = NaN;
                if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), isNaN(t) && isNaN(e)) this.clear();
                else {
                    var i = {};
                    isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = E.to(this.target, i, this.elasticBackTime, vt.sineOut, x.create(this, this.clear), 0, !1, !1);
                }
            }, e.tweenMove = function() {
                this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (v.systemTimer.clear(this, this.tweenMove), 0 < this.elasticDistance ? this.checkElastic() : this.clear());
            }, e.clear = function() {
                if (this.target) {
                    this.clearTimer();
                    var t = this.target;
                    this.target = null, this._parent = null, t.event("dragend", this.data);
                }
            }, t;
        }()),
        ut = function() {
            function n() {}
            y(n, "laya.display.cmd.TranslateCmd");
            var t = n.prototype;
            return t.recover = function() {
                I.recover("TranslateCmd", this);
            }, t.run = function(t, e, i) {
                t.translate(this.tx, this.ty);
            }, f(0, t, "cmdID", function() {
                return "Translate";
            }), n.create = function(t, e) {
                var i = I.getItemByClass("TranslateCmd", n);
                return i.tx = t, i.ty = e, i;
            }, n.ID = "Translate", n;
        }(),
        ct = function() {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
            }
            y(t, "laya.maths.Point");
            var e = t.prototype;
            return e.setTo = function(t, e) {
                return this.x = t, this.y = e, this;
            }, e.reset = function() {
                return this.x = this.y = 0, this;
            }, e.recover = function() {
                I.recover("Point", this.reset());
            }, e.distance = function(t, e) {
                return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
            }, e.toString = function() {
                return this.x + "," + this.y;
            }, e.normalize = function() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y);
                if (0 < t) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e;
                }
            }, e.copy = function(t) {
                return this.setTo(t.x, t.y);
            }, t.create = function() {
                return I.getItemByClass("Point", t);
            }, t.TEMP = new t(), t.EMPTY = new t(), t;
        }(),
        _t = (function() {
            function t() {}
            y(t, "laya.Const"), t.NOT_ACTIVE = 1, t.ACTIVE_INHIERARCHY = 2, t.AWAKED = 4, t.NOT_READY = 8, t.DISPLAY = 16, t.HAS_ZORDER = 32, t.HAS_MOUSE = 64, t.DISPLAYED_INSTAGE = 128, t.DRAWCALL_OPTIMIZE = 256;
        }(), function() {
            function r() {}
            y(r, "laya.display.cmd.ScaleCmd");
            var t = r.prototype;
            return t.recover = function() {
                I.recover("ScaleCmd", this);
            }, t.run = function(t, e, i) {
                t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
            }, f(0, t, "cmdID", function() {
                return "Scale";
            }), r.create = function(t, e, i, n) {
                var s = I.getItemByClass("ScaleCmd", r);
                return s.scaleX = t, s.scaleY = e, s.pivotX = i, s.pivotY = n, s;
            }, r.ID = "Scale", r;
        }()),
        dt = function() {
            function i() {}
            y(i, "laya.display.cmd.AlphaCmd");
            var t = i.prototype;
            return t.recover = function() {
                I.recover("AlphaCmd", this);
            }, t.run = function(t, e, i) {
                t.alpha(this.alpha);
            }, f(0, t, "cmdID", function() {
                return "Alpha";
            }), i.create = function(t) {
                var e = I.getItemByClass("AlphaCmd", i);
                return e.alpha = t, e;
            }, i.ID = "Alpha", i;
        }(),
        ft = function() {
            function e(t) {
                this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
            }
            y(e, "laya.utils.Byte");
            var t = e.prototype;
            return t._resizeBuffer = function(e) {
                try {
                    var t = new Uint8Array(e);
                    null != this._u8d_ && (this._u8d_.length <= e ? t.set(this._u8d_) : t.set(this._u8d_.subarray(0, e))), this._u8d_ = t, this._d_ = new DataView(t.buffer);
                } catch (t) {
                    throw "Invalid typed array length:" + e;
                }
            }, t.getString = function() {
                return this.readString();
            }, t.readString = function() {
                return this._rUTF(this.getUint16());
            }, t.getFloat32Array = function(t, e) {
                return this.readFloat32Array(t, e);
            }, t.readFloat32Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Float32Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n;
            }, t.getUint8Array = function(t, e) {
                return this.readUint8Array(t, e);
            }, t.readUint8Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Uint8Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n;
            }, t.getInt16Array = function(t, e) {
                return this.readInt16Array(t, e);
            }, t.readInt16Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Int16Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n;
            }, t.getFloat32 = function() {
                return this.readFloat32();
            }, t.readFloat32 = function() {
                if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
                var t = this._d_.getFloat32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }, t.getFloat64 = function() {
                return this.readFloat64();
            }, t.readFloat64 = function() {
                if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
                var t = this._d_.getFloat64(this._pos_, this._xd_);
                return this._pos_ += 8, t;
            }, t.writeFloat32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), this._pos_ += 4;
            }, t.writeFloat64 = function(t) {
                this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), this._pos_ += 8;
            }, t.getInt32 = function() {
                return this.readInt32();
            }, t.readInt32 = function() {
                if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
                var t = this._d_.getInt32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }, t.getUint32 = function() {
                return this.readUint32();
            }, t.readUint32 = function() {
                if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
                var t = this._d_.getUint32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }, t.writeInt32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), this._pos_ += 4;
            }, t.writeUint32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), this._pos_ += 4;
            }, t.getInt16 = function() {
                return this.readInt16();
            }, t.readInt16 = function() {
                if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
                var t = this._d_.getInt16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }, t.getUint16 = function() {
                return this.readUint16();
            }, t.readUint16 = function() {
                if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
                var t = this._d_.getUint16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }, t.writeUint16 = function(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), this._pos_ += 2;
            }, t.writeInt16 = function(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), this._pos_ += 2;
            }, t.getUint8 = function() {
                return this.readUint8();
            }, t.readUint8 = function() {
                if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
                return this._u8d_[this._pos_++];
            }, t.writeUint8 = function(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
            }, t._getUInt8 = function(t) {
                return this._readUInt8(t);
            }, t._readUInt8 = function(t) {
                return this._d_.getUint8(t);
            }, t._getUint16 = function(t) {
                return this._readUint16(t);
            }, t._readUint16 = function(t) {
                return this._d_.getUint16(t, this._xd_);
            }, t._getMatrix = function() {
                return this._readMatrix();
            }, t._readMatrix = function() {
                return new G(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            }, t._rUTF = function(t) {
                for (var e = "", i = this._pos_ + t, n = 0, s = String.fromCharCode, r = this._u8d_; this._pos_ < i;)(n = r[this._pos_++]) < 128 ? 0 != n && (e += s(n)) : e += s(n < 224 ? (63 & n) << 6 | 127 & r[this._pos_++] : n < 240 ? (31 & n) << 12 | (127 & r[this._pos_++]) << 6 | 127 & r[this._pos_++] : (15 & n) << 18 | (127 & r[this._pos_++]) << 12 | r[this._pos_++] << 6 & 127 | 127 & r[this._pos_++]), 0;
                return e;
            }, t.getCustomString = function(t) {
                return this.readCustomString(t);
            }, t.readCustomString = function(t) {
                for (var e = "", i = 0, n = 0, s = String.fromCharCode, r = this._u8d_; 0 < t;)
                    if ((n = r[this._pos_]) < 128) e += s(n), this._pos_++, t--;
                    else
                        for (i = n - 128, this._pos_++, t -= i; 0 < i;) n = r[this._pos_++], e += s(r[this._pos_++] << 8 | n), i--;
                return e;
            }, t.clear = function() {
                this._pos_ = 0, this.length = 0;
            }, t.__getBuffer = function() {
                return this._d_.buffer;
            }, t.writeUTFBytes = function(t) {
                for (var e = 0, i = (t += "").length; e < i; e++) {
                    var n = t.charCodeAt(e);
                    n <= 127 ? this.writeByte(n) : n <= 2047 ? (this._ensureWrite(this._pos_ + 2), this._u8d_.set([192 | n >> 6, 128 | 63 & n], this._pos_), this._pos_ += 2) : n <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 4);
                }
            }, t.writeUTFString = function(t) {
                var e = this.pos;
                this.writeUint16(1), this.writeUTFBytes(t);
                var i = this.pos - e - 2;
                this._d_.setUint16(e, i, this._xd_);
            }, t.readUTFString = function() {
                return this.readUTFBytes(this.getUint16());
            }, t.getUTFString = function() {
                return this.readUTFString();
            }, t.readUTFBytes = function(t) {
                if (void 0 === t && (t = -1), 0 === t) return "";
                var e = this.bytesAvailable;
                if (e < t) throw "readUTFBytes error - Out of bounds";
                return t = 0 < t ? t : e, this._rUTF(t);
            }, t.getUTFBytes = function(t) {
                return void 0 === t && (t = -1), this.readUTFBytes(t);
            }, t.writeByte = function(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
            }, t.readByte = function() {
                if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
                return this._d_.getInt8(this._pos_++);
            }, t.getByte = function() {
                return this.readByte();
            }, t._ensureWrite = function(t) {
                this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
            }, t.writeArrayBuffer = function(t, e, i) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
                0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
                var n = new Uint8Array(t);
                this._u8d_.set(n.subarray(e, e + i), this._pos_), this._pos_ += i;
            }, t.readArrayBuffer = function(t) {
                var e;
                return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, e;
            }, f(0, t, "buffer", function() {
                var t = this._d_.buffer;
                return t.byteLength === this._length ? t : t.slice(0, this._length);
            }), f(0, t, "endian", function() {
                return this._xd_ ? "littleEndian" : "bigEndian";
            }, function(t) {
                this._xd_ = "littleEndian" === t;
            }), f(0, t, "length", function() {
                return this._length;
            }, function(t) {
                this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), this._length = t;
            }), f(0, t, "pos", function() {
                return this._pos_;
            }, function(t) {
                this._pos_ = t;
            }), f(0, t, "bytesAvailable", function() {
                return this._length - this._pos_;
            }), e.getSystemEndian = function() {
                if (!e._sysEndian) {
                    var t = new ArrayBuffer(2);
                    new DataView(t).setInt16(0, 256, !0), e._sysEndian = 256 === new Int16Array(t)[0] ? "littleEndian" : "bigEndian";
                }
                return e._sysEndian;
            }, e.BIG_ENDIAN = "bigEndian", e.LITTLE_ENDIAN = "littleEndian", e._sysEndian = null, e;
        }(),
        pt = function() {
            var o;

            function t() {
                this._pool = [], this._map = [], this._laters = [];
            }
            y(t, "laya.utils.CallLater");
            var e = t.prototype;
            return e._update = function() {
                var t = this._laters,
                    e = t.length;
                if (0 < e) {
                    for (var i = 0, n = e - 1; i <= n; i++) {
                        var s = t[i];
                        (this._map[s.key] = null) !== s.method && (s.run(), s.clear()), this._pool.push(s), i === n && (n = t.length - 1);
                    }
                    t.length = 0;
                }
            }, e._getHandler = function(t, e) {
                var i = t ? t.$_GID || (t.$_GID = yt.getGID()) : 0,
                    n = e.$_TID || (e.$_TID = 1e5 * k._mid++);
                return this._map[i + n];
            }, e.callLater = function(t, e, i) {
                if (null == this._getHandler(t, e)) {
                    if (this._pool.length) var n = this._pool.pop();
                    else n = new o();
                    n.caller = t, n.method = e, n.args = i;
                    var s = t ? t.$_GID : 0,
                        r = e.$_TID;
                    n.key = s + r, this._map[n.key] = n, this._laters.push(n);
                }
            }, e.runCallLater = function(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
            }, t.I = new t(), t.__init$ = function() {
                o = function() {
                    function t() {
                        this.key = 0, this.caller = null, this.method = null, this.args = null;
                    }
                    y(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.caller = null, this.method = null, this.args = null;
                    }, e.run = function() {
                        var t = this.caller;
                        if (t && t.destroyed) return this.clear();
                        var e = this.method,
                            i = this.args;
                        null != e && (i ? e.apply(t, i) : e.call(t));
                    }, t;
                }();
            }, t;
        }(),
        gt = function() {
            function t() {
                this._sp = null, this._one = null, this._cmds = null, this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1, this._render = this._renderEmpty, this._createData();
            }
            y(t, "laya.display.Graphics");
            var e = t.prototype;
            return e._createData = function() {}, e._clearData = function() {}, e._destroyData = function() {}, e.destroy = function() {
                this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), this._sp = null), this._destroyData();
            }, e.clear = function(t) {
                if (void 0 === t && (t = !0), t) {
                    var e = this._one;
                    if (this._cmds) {
                        var i = 0,
                            n = this._cmds.length;
                        for (i = 0; i < n; i++)(e = this._cmds[i]).recover();
                        this._cmds.length = 0;
                    } else e && e.recover();
                } else this._cmds = null;
                if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= -513, this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                    for (i = 0, n = this._vectorgraphArray.length; i < n; i++) p.getInstance().deleteShape(this._vectorgraphArray[i]);
                    this._vectorgraphArray.length = 0;
                }
            }, e._clearBoundsCache = function() {
                this._graphicBounds && this._graphicBounds.reset();
            }, e._initGraphicBounds = function() {
                this._graphicBounds || (this._graphicBounds = st.create(), this._graphicBounds._graphics = this);
            }, e._repaint = function() {
                this._clearBoundsCache(), this._sp && this._sp.repaint();
            }, e._isOnlyOne = function() {
                return !this._cmds || 0 === this._cmds.length;
            }, e.getBounds = function(t) {
                return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t);
            }, e.getBoundPoints = function(t) {
                return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
            }, e.drawImage = function(t, e, i, n, s) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), !t) return null;
                if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                    var r = n / t.sourceWidth,
                        o = s / t.sourceHeight;
                    if (n = t.width * r, s = t.height * o, n <= 0 || s <= 0) return null;
                    e += t.offsetX * r, i += t.offsetY * o;
                }
                this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
                var a = l.create.call(this, t, e, i, n, s);
                return null == this._one ? (this._one = a, this._render = this._renderOneImg) : this._saveToCmd(null, a), this._repaint(), a;
            }, e.drawTexture = function(t, e, i, n, s, r, o, a, h) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === o && (o = 1), !t || o < .01) return null;
                if (!t.getIsReady()) return null;
                if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                    var l = !it.isWebGL && (rt.onFirefox || rt.onEdge || rt.onIE || rt.onSafari) ? .5 : 0,
                        u = n / t.sourceWidth,
                        c = s / t.sourceHeight;
                    if (n = t.width * u, s = t.height * c, n <= 0 || s <= 0) return null;
                    e += t.offsetX * u, i += t.offsetY * c, e -= l, i -= l, n += 2 * l, s += 2 * l;
                }
                if (this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), !it.isWebGL && (h || a)) {
                    var _ = new Jt();
                    if (_.size(n, s), _.getContext("2d").drawTexture(t, 0, 0, n, s), t = new Nt(_), a) {
                        var d = new Z(),
                            f = m.create(a).arrColor;
                        d.data = new Et().color(255 * f[0], 255 * f[1], 255 * f[2]), d.apply({
                            canvas: _
                        });
                    }
                }
                var p = P.create.call(this, t, e, i, n, s, r, o, a, h);
                return this._repaint(), this._saveToCmd(null, p);
            }, e.drawTextures = function(t, e) {
                return t ? this._saveToCmd(it._context._drawTextures, X.create.call(this, t, e)) : null;
            }, e.drawTriangles = function(t, e, i, n, s, r, o, a, h, l) {
                return void 0 === a && (a = 1), this._saveToCmd(it._context.drawTriangles, c.create.call(this, t, e, i, n, s, r, o, a, h, l));
            }, e.fillTexture = function(t, e, i, n, s, r, o) {
                return void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = "repeat"), t && t.getIsReady() ? this._saveToCmd(it._context._fillTexture, a.create.call(this, t, e, i, n, s, r, o || ct.EMPTY, {})) : null;
            }, e._saveToCmd = function(t, e) {
                return this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), this._repaint(), e;
            }, e.clipRect = function(t, e, i, n) {
                return this._saveToCmd(it._context._clipRect, b.create.call(this, t, e, i, n));
            }, e.fillText = function(t, e, i, n, s, r) {
                return this._saveToCmd(it._context._fillText, Ct.create.call(this, t, e, i, n || qt.defaultFontStr(), s, r));
            }, e.fillBorderText = function(t, e, i, n, s, r, o, a) {
                return this._saveToCmd(it._context._fillBorderText, ot.create.call(this, t, e, i, n || qt.defaultFontStr(), s, r, o, a));
            }, e.fillWords = function(t, e, i, n, s) {
                return this._saveToCmd(it._context._fillWords, U.create.call(this, t, e, i, n || qt.defaultFontStr(), s));
            }, e.fillBorderWords = function(t, e, i, n, s, r, o) {
                return this._saveToCmd(it._context._fillBorderWords, Dt.create.call(this, t, e, i, n || qt.defaultFontStr(), s, r, o));
            }, e.strokeText = function(t, e, i, n, s, r, o) {
                return this._saveToCmd(it._context._strokeText, mt.create.call(this, t, e, i, n || qt.defaultFontStr(), s, r, o));
            }, e.alpha = function(t) {
                return this._saveToCmd(it._context._alpha, dt.create.call(this, t));
            }, e.transform = function(t, e, i) {
                return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(it._context._transform, H.create.call(this, t, e, i));
            }, e.rotate = function(t, e, i) {
                return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(it._context._rotate, It.create.call(this, t, e, i));
            }, e.scale = function(t, e, i, n) {
                return void 0 === i && (i = 0), void 0 === n && (n = 0), this._saveToCmd(it._context._scale, _t.create.call(this, t, e, i, n));
            }, e.translate = function(t, e) {
                return this._saveToCmd(it._context._translate, ut.create.call(this, t, e));
            }, e.save = function() {
                return this._saveToCmd(it._context._save, Q.create.call(this));
            }, e.restore = function() {
                return this._saveToCmd(it._context._restore, C.create.call(this));
            }, e.replaceText = function(t) {
                this._repaint();
                var e = this._cmds;
                if (e) {
                    for (var i = e.length - 1; - 1 < i; i--)
                        if (this._isTextCmd(e[i])) return e[i].text = t, !0;
                } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
                return !1;
            }, e._isTextCmd = function(t) {
                var e = t.cmdID;
                return "FillText" == e || "StrokeText" == e || "FillBorderText" == e;
            }, e.replaceTextColor = function(t) {
                this._repaint();
                var e = this._cmds;
                if (e)
                    for (var i = e.length - 1; - 1 < i; i--) this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t);
                else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
            }, e._setTextCmdColor = function(t, e) {
                switch (t.cmdID) {
                    case "FillText":
                    case "StrokeText":
                        t.color = e;
                        break;
                    case "FillBorderText":
                    case "FillBorderWords":
                    case "FillBorderText":
                        t.fillColor = e;
                }
            }, e.loadImage = function(t, e, i, n, s, r) {
                void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0);
                var o = Ut.getRes(t);
                o ? o.getIsReady() ? this.drawImage(o, e, i, n, s) : o.once("ready", this, this.drawImage, [o, e, i, n, s]) : ((o = new Nt()).load(t), Ut.cacheRes(t, o), o.once("ready", this, this.drawImage, [o, e, i, n, s])), null != r && (o.getIsReady() ? r.call(this._sp) : o.on("ready", this._sp, r));
            }, e._renderEmpty = function(t, e, i, n) {}, e._renderAll = function(t, e, i, n) {
                for (var s = this._cmds, r = 0, o = s.length; r < o; r++) s[r].run(e, i, n);
            }, e._renderOne = function(t, e, i, n) {
                this._one.run(e, i, n);
            }, e._renderOneImg = function(t, e, i, n) {
                this._one.run(e, i, n);
            }, e.drawLine = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var o = 0;
                it.isWebGL && (o = p.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o));
                var a = r < 1 || r % 2 == 0 ? 0 : .5;
                return this._saveToCmd(it._context._drawLine, W.create.call(this, t + a, e + a, i + a, n + a, s, r, o));
            }, e.drawLines = function(t, e, i, n, s) {
                void 0 === s && (s = 1);
                var r = 0;
                if (!i || i.length < 4) return null;
                it.isWebGL && (r = p.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(r));
                var o = s < 1 || s % 2 == 0 ? 0 : .5;
                return this._saveToCmd(it._context._drawLines, xt.create.call(this, t + o, e + o, i, n, s, r));
            }, e.drawCurves = function(t, e, i, n, s) {
                return void 0 === s && (s = 1), this._saveToCmd(it._context._drawCurves, Tt.create.call(this, t, e, i, n, s));
            }, e.drawRect = function(t, e, i, n, s, r, o) {
                void 0 === o && (o = 1);
                var a = 1 <= o && r ? o / 2 : 0,
                    h = r ? o : 0;
                return this._saveToCmd(it._context.drawRect, R.create.call(this, t + a, e + a, i - h, n - h, s, r, o));
            }, e.drawCircle = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var o = 1 <= r && s ? r / 2 : 0,
                    a = 0;
                return it.isWebGL && (a = p.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(a)), this._saveToCmd(it._context._drawCircle, z.create.call(this, t, e, i - o, n, s, r, a));
            }, e.drawPie = function(t, e, i, n, s, r, o, a) {
                void 0 === a && (a = 1);
                var h = 1 <= a && o ? a / 2 : 0,
                    l = o ? a : 0,
                    u = 0;
                return it.isWebGL && (u = p.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(u)), this._saveToCmd(it._context._drawPie, _.create.call(this, t + h, e + h, i - l, yt.toRadian(n), yt.toRadian(s), r, o, a, u));
            }, e.drawPoly = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var o = 0;
                if (it.isWebGL) {
                    o = p.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o);
                    var a = !1;
                    a = !(6 < i.length);
                }
                var h = 1 <= r && s ? r % 2 == 0 ? 0 : .5 : 0;
                return this._saveToCmd(it._context._drawPoly, S.create.call(this, t + h, e + h, i, n, s, r, a, o));
            }, e.drawPath = function(t, e, i, n, s) {
                return this._saveToCmd(it._context._drawPath, q.create.call(this, t, e, i, n, s));
            }, e.draw9Grid = function(t, e, i, n, s, r) {
                void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), this._saveToCmd(null, ht.create(t, e, i, n, s, r));
            }, f(0, e, "cmds", function() {
                return this._cmds;
            }, function(t) {
                this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), this._cmds = t, this._render = this._renderAll, this._repaint();
            }), t;
        }(),
        mt = (function() {
            function s() {
                this.reset();
            }
            y(s, "laya.utils.HTMLChar");
            var t = s.prototype;
            t.setData = function(t, e, i, n) {
                return this.char = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e, this.height = i, this.style = n, this.isWord = !s._isWordRegExp.test(t), this;
            }, t.reset = function() {
                return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, this.charNum = 0, this.style = null, this;
            }, t.recover = function() {
                I.recover("HTMLChar", this.reset());
            }, t._isChar = function() {
                return !0;
            }, t._getCSSStyle = function() {
                return this.style;
            }, s.create = function() {
                return I.getItemByClass("HTMLChar", s);
            }, s._isWordRegExp = new RegExp("[\\w.]", "");
        }(), function() {
            function h() {}
            y(h, "laya.display.cmd.StrokeTextCmd");
            var t = h.prototype;
            return t.recover = function() {
                I.recover("StrokeTextCmd", this);
            }, t.run = function(t, e, i) {
                t.strokeWord(this.text, this.x + e, this.y + i, this.font, this.color, this.lineWidth, this.textAlign);
            }, f(0, t, "cmdID", function() {
                return "StrokeText";
            }), h.create = function(t, e, i, n, s, r, o) {
                var a = I.getItemByClass("StrokeTextCmd", h);
                return a.text = t, a.x = e, a.y = i, a.font = n, a.color = s, a.lineWidth = r, a.textAlign = o, a;
            }, h.ID = "StrokeText", h;
        }()),
        vt = function() {
            function a() {}
            return y(a, "laya.utils.Ease"), a.linearNone = function(t, e, i, n) {
                return i * t / n + e;
            }, a.linearIn = function(t, e, i, n) {
                return i * t / n + e;
            }, a.linearInOut = function(t, e, i, n) {
                return i * t / n + e;
            }, a.linearOut = function(t, e, i, n) {
                return i * t / n + e;
            }, a.bounceIn = function(t, e, i, n) {
                return i - a.bounceOut(n - t, 0, i, n) + e;
            }, a.bounceInOut = function(t, e, i, n) {
                return t < .5 * n ? .5 * a.bounceIn(2 * t, 0, i, n) + e : .5 * a.bounceOut(2 * t - n, 0, i, n) + .5 * i + e;
            }, a.bounceOut = function(t, e, i, n) {
                return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
            }, a.backIn = function(t, e, i, n, s) {
                return void 0 === s && (s = 1.70158), i * (t /= n) * t * ((s + 1) * t - s) + e;
            }, a.backInOut = function(t, e, i, n, s) {
                return void 0 === s && (s = 1.70158), (t /= .5 * n) < 1 ? .5 * i * (t * t * ((1 + (s *= 1.525)) * t - s)) + e : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + e;
            }, a.backOut = function(t, e, i, n, s) {
                return void 0 === s && (s = 1.70158), i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + e;
            }, a.elasticIn = function(t, e, i, n, s, r) {
                var o;
                return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (r || (r = .3 * n), o = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / a.PI2 * Math.asin(i / s), -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * a.PI2 / r) + e);
            }, a.elasticInOut = function(t, e, i, n, s, r) {
                var o;
                return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 2 == (t /= .5 * n) ? e + i : (r || (r = n * (.3 * 1.5)), o = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / a.PI2 * Math.asin(i / s), t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * a.PI2 / r) * -.5 + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - o) * a.PI2 / r) * .5 + i + e);
            }, a.elasticOut = function(t, e, i, n, s, r) {
                var o;
                return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (r || (r = .3 * n), o = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / a.PI2 * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin((t * n - o) * a.PI2 / r) + i + e);
            }, a.strongIn = function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e;
            }, a.strongInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }, a.strongOut = function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
            }, a.sineInOut = function(t, e, i, n) {
                return .5 * -i * (Math.cos(Math.PI * t / n) - 1) + e;
            }, a.sineIn = function(t, e, i, n) {
                return -i * Math.cos(t / n * a.HALF_PI) + i + e;
            }, a.sineOut = function(t, e, i, n) {
                return i * Math.sin(t / n * a.HALF_PI) + e;
            }, a.quintIn = function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e;
            }, a.quintInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }, a.quintOut = function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
            }, a.quartIn = function(t, e, i, n) {
                return i * (t /= n) * t * t * t + e;
            }, a.quartInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
            }, a.quartOut = function(t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e;
            }, a.cubicIn = function(t, e, i, n) {
                return i * (t /= n) * t * t + e;
            }, a.cubicInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
            }, a.cubicOut = function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e;
            }, a.quadIn = function(t, e, i, n) {
                return i * (t /= n) * t + e;
            }, a.quadInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
            }, a.quadOut = function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e;
            }, a.expoIn = function(t, e, i, n) {
                return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i;
            }, a.expoInOut = function(t, e, i, n) {
                return 0 == t ? e : t == n ? e + i : (t /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
            }, a.expoOut = function(t, e, i, n) {
                return t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
            }, a.circIn = function(t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
            }, a.circInOut = function(t, e, i, n) {
                return (t /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            }, a.circOut = function(t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
            }, a.HALF_PI = .5 * Math.PI, a.PI2 = 2 * Math.PI, a;
        }(),
        yt = (function() {
            function n() {
                this.sign = null, this.maxCount = 1e3;
            }
            y(n, "laya.utils.PoolCache");
            var t = n.prototype;
            t.getCacheList = function() {
                return I.getPoolBySign(this.sign);
            }, t.tryDispose = function(t) {
                var e;
                (e = I.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
            }, n.addPoolCacheManager = function(t, e) {
                var i;
                void 0 === e && (e = 100), (i = new n()).sign = t, i.maxCount = e, F.regCacheByFunction(yt.bind(i.tryDispose, i), yt.bind(i.getCacheList, i));
            };
        }(), function() {
            function e() {}
            y(e, "laya.utils.Mouse"), f(1, e, "cursor", function() {
                return e._style.cursor;
            }, function(t) {
                e._style.cursor = t;
            }), e.hide = function() {
                "none" != e.cursor && (e._preCursor = e.cursor, e.cursor = "none");
            }, e.show = function() {
                "none" == e.cursor && (e.cursor = e._preCursor ? e._preCursor : "auto");
            }, e._preCursor = null, i(e, ["_style", function() {
                return this._style = rt.document.body.style;
            }]);
        }(), function() {
            function a() {}
            return y(a, "laya.utils.Utils"), a.toRadian = function(t) {
                return t * a._pi2;
            }, a.toAngle = function(t) {
                return t * a._pi;
            }, a.toHexColor = function(t) {
                if (t < 0 || isNaN(t)) return null;
                for (var e = t.toString(16); e.length < 6;) e = "0" + e;
                return "#" + e;
            }, a.getGID = function() {
                return a._gid++;
            }, a.concatArray = function(t, e) {
                if (!e) return t;
                if (!t) return e;
                var i = 0,
                    n = e.length;
                for (i = 0; i < n; i++) t.push(e[i]);
                return t;
            }, a.clearArray = function(t) {
                return t && (t.length = 0), t;
            }, a.copyArray = function(t, e) {
                if (t || (t = []), !e) return t;
                t.length = e.length;
                var i = 0,
                    n = e.length;
                for (i = 0; i < n; i++) t[i] = e[i];
                return t;
            }, a.getGlobalRecByPoints = function(t, e, i, n, s) {
                var r, o;
                r = ct.create().setTo(e, i), r = t.localToGlobal(r), o = ct.create().setTo(n, s), o = t.localToGlobal(o);
                var a = K._getWrapRec([r.x, r.y, o.x, o.y]);
                return r.recover(), o.recover(), a;
            }, a.getGlobalPosAndScale = function(t) {
                return a.getGlobalRecByPoints(t, 0, 0, 1, 1);
            }, a.bind = function(t, e) {
                return t.bind(e);
            }, a.measureText = function(t, e) {
                return bt.measureText(t, e);
            }, a.updateOrder = function(t) {
                if (!t || t.length < 2) return !1;
                for (var e, i = 1, n = 0, s = t.length, r = NaN; i < s;) {
                    for (e = t[n = i], r = t[n]._zOrder; - 1 < --n && t[n]._zOrder > r;) t[n + 1] = t[n];
                    t[n + 1] = e, i++;
                }
                return !0;
            }, a.transPointList = function(t, e, i) {
                var n = 0,
                    s = t.length;
                for (n = 0; n < s; n += 2) t[n] += e, t[n + 1] += i;
            }, a.parseInt = function(t, e) {
                void 0 === e && (e = 0);
                var i = rt.window.parseInt(t, e);
                return isNaN(i) ? 0 : i;
            }, a.getFileExtension = function(t) {
                a._extReg.lastIndex = t.lastIndexOf(".");
                var e = a._extReg.exec(t);
                return e && 1 < e.length ? e[1].toLowerCase() : null;
            }, a.getTransformRelativeToWindow = function(t, e, i) {
                var n = v.stage,
                    s = laya.utils.Utils.getGlobalPosAndScale(t),
                    r = n._canvasTransform.clone(),
                    o = r.tx,
                    a = r.ty;
                r.rotate(-Math.PI / 180 * v.stage.canvasDegree), r.scale(v.stage.clientScaleX, v.stage.clientScaleY);
                var h = v.stage.canvasDegree % 180 != 0,
                    l = NaN,
                    u = NaN;
                h ? (l = i + s.y, u = e + s.x, l *= r.d, u *= r.a, 90 == v.stage.canvasDegree ? (l = o - l, u += a) : (l += o, u = a - u)) : (l = e + s.x, u = i + s.y, l *= r.a, u *= r.d, l += o, u += a), u += v.stage._safariOffsetY;
                var c = NaN,
                    _ = NaN;
                return _ = h ? (c = r.d * s.height, r.a * s.width) : (c = r.a * s.width, r.d * s.height), {
                    x: l,
                    y: u,
                    scaleX: c,
                    scaleY: _
                };
            }, a.fitDOMElementInArea = function(t, e, i, n, s, r) {
                t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", t.style.position = "absolute");
                var o = a.getTransformRelativeToWindow(e, i, n);
                t.style.transform = t.style.webkitTransform = "scale(" + o.scaleX + "," + o.scaleY + ") rotate(" + v.stage.canvasDegree + "deg)", t.style.width = s + "px", t.style.height = r + "px", t.style.left = o.x + "px", t.style.top = o.y + "px";
            }, a.isOkTextureList = function(t) {
                if (!t) return !1;
                var e, i = 0,
                    n = t.length;
                for (i = 0; i < n; i++)
                    if (!(e = t[i]) || !e._getSource()) return !1;
                return !0;
            }, a.isOKCmdList = function(t) {
                if (!t) return !1;
                var e = 0,
                    i = t.length;
                for (e = 0; e < i; e++) t[e];
                return !0;
            }, a.getQueryString = function(t) {
                if (rt.onMiniGame) return null;
                if (!g.location || !g.location.search) return null;
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                    i = g.location.search.substr(1).match(e);
                return null != i ? unescape(i[2]) : null;
            }, a._gid = 1, a._pi = 180 / Math.PI, a._pi2 = Math.PI / 180, a._extReg = /\.(\w+)\??/g, a.parseXMLFromString = function(t) {
                var e;
                if (t = t.replace(/>\s+</g, "><"), -1 < (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors")) throw new Error(e.firstChild.firstChild.textContent);
                return e;
            }, a;
        }()),
        xt = function() {
            function a() {}
            y(a, "laya.display.cmd.DrawLinesCmd");
            var t = a.prototype;
            return t.recover = function() {
                this.points = null, this.lineColor = null, I.recover("DrawLinesCmd", this);
            }, t.run = function(t, e, i) {
                t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
            }, f(0, t, "cmdID", function() {
                return "DrawLines";
            }), a.create = function(t, e, i, n, s, r) {
                var o = I.getItemByClass("DrawLinesCmd", a);
                return o.x = t, o.y = e, o.points = i, o.lineColor = n, o.lineWidth = s, o.vid = r, o;
            }, a.ID = "DrawLines", a;
        }(),
        wt = function() {
            function t() {}
            return y(t, "Config"), t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, t.premultipliedAlpha = !0, t.isStencil = !0, t.preserveDrawingBuffer = !1, t.webGL2D_MeshAllocMaxMem = !0, t.is2DPixelArtGame = !1, t.useWebGL2 = !1, t.useRetinalCanvas = !1, t;
        }(),
        Tt = function() {
            function o() {}
            y(o, "laya.display.cmd.DrawCurvesCmd");
            var t = o.prototype;
            return t.recover = function() {
                this.points = null, this.lineColor = null, I.recover("DrawCurvesCmd", this);
            }, t.run = function(t, e, i) {
                t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
            }, f(0, t, "cmdID", function() {
                return "DrawCurves";
            }), o.create = function(t, e, i, n, s) {
                var r = I.getItemByClass("DrawCurvesCmd", o);
                return r.x = t, r.y = e, r.points = i, r.lineColor = n, r.lineWidth = s, r;
            }, o.ID = "DrawCurves", o;
        }(),
        Ct = function() {
            function a() {
                this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, this._nTexAlign = 0, this._fontObj = a._defFontObj;
            }
            y(a, "laya.display.cmd.FillTextCmd");
            var t = a.prototype;
            return t.recover = function() {
                I.recover("FillTextCmd", this);
            }, t.run = function(t, e, i) {
                v.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._textIsWorldText && t._fast_filltext ? t._fast_filltext(this._text, this.x + e, this.y + i, this._fontObj, this._color, null, 0, this._nTexAlign, 0) : t.drawText(this._text, this.x + e, this.y + i, this._font, this._color, this._textAlign);
            }, f(0, t, "text", function() {
                return this._text;
            }, function(t) {
                this._text = t, this._textIsWorldText = t instanceof laya.utils.WordText, this._textIsWorldText && this._text.cleanCache();
            }), f(0, t, "cmdID", function() {
                return "FillText";
            }), f(0, t, "color", function() {
                return this._color;
            }, function(t) {
                this._color = t, this._fontColor = m.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
            }), f(0, t, "font", function() {
                return this._font;
            }, function(t) {
                this._font = t, it.isWebGL && (this._fontObj = Mt.Parse(t)), this._textIsWorldText && this._text.cleanCache();
            }), f(0, t, "textAlign", function() {
                return this._textAlign;
            }, function(t) {
                switch (this._textAlign = t) {
                    case "center":
                        this._nTexAlign = V.ENUM_TEXTALIGN_CENTER;
                        break;
                    case "right":
                        this._nTexAlign = V.ENUM_TEXTALIGN_RIGHT;
                        break;
                    default:
                        this._nTexAlign = V.ENUM_TEXTALIGN_DEFAULT;
                }
                this._textIsWorldText && this._text.cleanCache();
            }), a.create = function(t, e, i, n, s, r) {
                var o = I.getItemByClass("FillTextCmd", a);
                return o.text = t, o._textIsWorldText = t instanceof laya.utils.WordText, o.x = e, o.y = i, o.font = n, o.color = s, o.textAlign = r, o;
            }, a.ID = "FillText", i(a, ["_defFontObj", function() {
                return this._defFontObj = new Mt(null);
            }]), a;
        }(),
        bt = (function() {
            function t() {}
            y(t, "laya.events.KeyLocation"), t.STANDARD = 0, t.LEFT = 1, t.RIGHT = 2, t.NUM_PAD = 3;
        }(), function() {
            function r() {}
            return y(r, "laya.utils.RunDriver"), r.getIncludeStr = function(t) {
                return null;
            }, r.createShaderCondition = function(t) {
                var e = "(function() {return " + t + ";})";
                return v._runScript(e);
            }, r.fontMap = [], r.measureText = function(t, e) {
                var i = r.hanzi.test(t);
                if (i && r.fontMap[e]) return r.fontMap[e];
                var n = rt.context;
                n.font = e;
                var s = n.measureText(t);
                return i && (r.fontMap[e] = s), s;
            }, r.drawToCanvas = function(t, e, i, n, s, r) {
                i |= 0, n |= 0, s |= 0, r |= 0;
                var o = new Jt(),
                    a = o.getContext("2d");
                return o.size(i, n), T.renders[e]._fun(t, a, s, r), o;
            }, r.initRender = function(t, e, i) {
                return it._context = t.getContext("2d"), t.size(e, i), !0;
            }, r.createParticleTemplate2D = null, r.changeWebGLSize = function(t, e) {}, r.createRenderSprite = function(t, e) {
                return new T(t, e);
            }, r.clear = function(t) {
                it._context.clear();
            }, r.getTexturePixels = function(t, e, i, n, s) {
                return null;
            }, r.skinAniSprite = function() {
                return null;
            }, r.cancelLoadByUrl = function(t) {}, r.enableNative = null, i(r, ["hanzi", function() {
                return this.hanzi = new RegExp("^[一-龥]$");
            }]), r;
        }()),
        St = function() {
            function a() {}
            return y(a, "laya.net.AtlasInfoManager"), a.enable = function(t, e) {
                v.loader.load(t, x.create(null, a._onInfoLoaded, [e]), null, "json");
            }, a._onInfoLoaded = function(t, e) {
                var i, n, s, r = 0,
                    o = 0;
                for (i in e)
                    for (n = (s = e[i])[0], o = (s = s[1]).length, r = 0; r < o; r++) a._fileLoadDic[n + s[r]] = i;
                t && t.run();
            }, a.getFileLoadPath = function(t) {
                return a._fileLoadDic[t] || t;
            }, a._fileLoadDic = {}, a;
        }(),
        It = function() {
            function s() {}
            y(s, "laya.display.cmd.RotateCmd");
            var t = s.prototype;
            return t.recover = function() {
                I.recover("RotateCmd", this);
            }, t.run = function(t, e, i) {
                t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
            }, f(0, t, "cmdID", function() {
                return "Rotate";
            }), s.create = function(t, e, i) {
                var n = I.getItemByClass("RotateCmd", s);
                return n.angle = t, n.pivotX = e, n.pivotY = i, n;
            }, s.ID = "Rotate", s;
        }(),
        Mt = function() {
            function i(t) {
                this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, this._bold = !1, this._id = i._gfontID++, this.setFont(t || this._font);
            }
            return y(i, "laya.utils.FontInfo"), i.prototype.setFont = function(t) {
                var e = (this._font = t).split(" "),
                    i = e.length;
                if (i < 2) 1 == i && 0 < e[0].indexOf("px") && (this._size = parseInt(e[0]));
                else {
                    for (var n = -1, s = 0; s < i; s++)
                        if (0 < e[s].indexOf("px") || 0 < e[s].indexOf("pt")) {
                            n = s, this._size = parseInt(e[s]), this._size <= 0 && (console.error("font parse error:" + t), this._size = 14);
                            break;
                        }
                    var r = n + 1,
                        o = e[r];
                    for (r++; r < i; r++) o += " " + e[r];
                    this._family = o.split(",")[0], this._italic = 0 <= e.indexOf("italic"), this._bold = 0 <= e.indexOf("bold");
                }
            }, i.Parse = function(t) {
                if (t === i._lastFont) return i._lastFontInfo;
                var e = i._cache[t];
                return e || (e = i._cache[t] = new i(t)), i._lastFont = t, i._lastFontInfo = e;
            }, i.EMPTY = new i(null), i._cache = {}, i._gfontID = 0, i._lastFont = "", i._lastFontInfo = null, i;
        }(),
        At = function() {
            function t() {
                this.json = null;
            }
            return y(t, "laya.components.Prefab"), t.prototype.create = function() {
                return this.json ? j.createByData(null, this.json) : null;
            }, t;
        }(),
        Dt = function() {
            function h() {}
            y(h, "laya.display.cmd.FillBorderWordsCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.words = null, I.recover("FillBorderWordsCmd", this);
            }, t.run = function(t, e, i) {
                t.fillBorderWords(this.words, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth);
            }, f(0, t, "cmdID", function() {
                return "FillBorderWords";
            }), h.create = function(t, e, i, n, s, r, o) {
                var a = I.getItemByClass("FillBorderWordsCmd", h);
                return a.words = t, a.x = e, a.y = i, a.font = n, a.fillColor = s, a.borderColor = r, a.lineWidth = o, a;
            }, h.ID = "FillBorderWords", h;
        }(),
        Pt = function() {
            function c() {
                this._hit = null, this._unHit = null;
            }
            y(c, "laya.utils.HitArea");
            var t = c.prototype;
            return t.contains = function(t, e) {
                return !!c._isHitGraphic(t, e, this.hit) && !c._isHitGraphic(t, e, this.unHit);
            }, f(0, t, "hit", function() {
                return this._hit || (this._hit = new gt()), this._hit;
            }, function(t) {
                this._hit = t;
            }), f(0, t, "unHit", function() {
                return this._unHit || (this._unHit = new gt()), this._unHit;
            }, function(t) {
                this._unHit = t;
            }), c._isHitGraphic = function(t, e, i) {
                if (!i) return !1;
                var n = i.cmds;
                if (!n && i._one && ((n = c._cmds).length = 1, n[0] = i._one), !n) return !1;
                var s, r, o = 0;
                for (s = n.length, o = 0; o < s; o++)
                    if (r = n[o]) {
                        switch (r.cmdID) {
                            case "Translate":
                                t -= r.tx, e -= r.ty;
                        }
                        if (c._isHitCmd(t, e, r)) return !0;
                    }
                return !1;
            }, c._isHitCmd = function(t, e, i) {
                if (!i) return !1;
                var n = !1;
                switch (i.cmdID) {
                    case "DrawRect":
                        c._rect.setTo(i.x, i.y, i.width, i.height), n = c._rect.contains(t, e);
                        break;
                    case "DrawCircle":
                        n = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                        break;
                    case "DrawPoly":
                        t -= i.x, e -= i.y, n = c._ptInPolygon(t, e, i.points);
                }
                return n;
            }, c._ptInPolygon = function(t, e, i) {
                var n = c._ptPoint;
                n.setTo(t, e);
                var s, r = 0,
                    o = NaN,
                    a = NaN,
                    h = NaN,
                    l = NaN;
                s = i.length;
                for (var u = 0; u < s; u += 2) {
                    if (o = i[u], a = i[u + 1], h = i[(u + 2) % s], a != (l = i[(u + 3) % s]))
                        if (!(n.y < Math.min(a, l)))
                            if (!(n.y >= Math.max(a, l)))(n.y - a) * (h - o) / (l - a) + o > n.x && r++;
                }
                return r % 2 == 1;
            }, c._cmds = [], i(c, ["_rect", function() {
                return this._rect = new K();
            }, "_ptPoint", function() {
                return this._ptPoint = new ct();
            }]), c;
        }(),
        Lt = function() {
            function h() {}
            return y(h, "laya.media.SoundManager"), f(1, h, "useAudioMusic", function() {
                return h._useAudioMusic;
            }, function(t) {
                h._useAudioMusic = t, h._musicClass = t ? Rt : null;
            }), f(1, h, "autoStopMusic", function() {
                return h._autoStopMusic;
            }, function(t) {
                v.stage.off("blur", null, h._stageOnBlur), v.stage.off("focus", null, h._stageOnFocus), v.stage.off("visibilitychange", null, h._visibilityChange), (h._autoStopMusic = t) && (v.stage.on("blur", null, h._stageOnBlur), v.stage.on("focus", null, h._stageOnFocus), v.stage.on("visibilitychange", null, h._visibilityChange));
            }), f(1, h, "muted", function() {
                return h._muted;
            }, function(t) {
                t != h._muted && (t && h.stopAllSound(), h.musicMuted = t, h._muted = t);
            }), f(1, h, "musicMuted", function() {
                return h._musicMuted;
            }, function(t) {
                t != h._musicMuted && (t ? (h._bgMusic && h._musicChannel && !h._musicChannel.isStopped ? it.isConchApp ? h._musicChannel._audio && (h._musicChannel._audio.muted = !0) : h._musicChannel.pause() : h._musicChannel = null, h._musicMuted = t) : (h._musicMuted = t, h._bgMusic && h._musicChannel && (it.isConchApp ? h._musicChannel._audio && (h._musicChannel._audio.muted = !1) : h._musicChannel.resume())));
            }), f(1, h, "soundMuted", function() {
                return h._soundMuted;
            }, function(t) {
                h._soundMuted = t;
            }), h.__init__ = function() {
                var t = rt.window,
                    e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
                return e && Gt.initWebAudio(), h._soundClass = e ? Gt : Rt, Rt._initMusicAudio(), h._musicClass = Rt, e;
            }, h.addChannel = function(t) {
                0 <= h._channels.indexOf(t) || h._channels.push(t);
            }, h.removeChannel = function(t) {
                var e = 0;
                for (e = h._channels.length - 1; 0 <= e; e--) h._channels[e] == t && h._channels.splice(e, 1);
            }, h.disposeSoundLater = function(t) {
                h._lastSoundUsedTimeDic[t] = rt.now(), h._isCheckingDispose || (h._isCheckingDispose = !0, v.timer.loop(5e3, null, h._checkDisposeSound));
            }, h._checkDisposeSound = function() {
                var t, e = rt.now(),
                    i = !1;
                for (t in h._lastSoundUsedTimeDic) 3e4 < e - h._lastSoundUsedTimeDic[t] ? (delete h._lastSoundUsedTimeDic[t], h.disposeSoundIfNotUsed(t)) : i = !0;
                i || (h._isCheckingDispose = !1, v.timer.clear(null, h._checkDisposeSound));
            }, h.disposeSoundIfNotUsed = function(t) {
                var e = 0;
                for (e = h._channels.length - 1; 0 <= e; e--)
                    if (h._channels[e].url == t) return;
                h.destroySound(t);
            }, h._visibilityChange = function() {
                v.stage.isVisibility ? h._stageOnFocus() : h._stageOnBlur();
            }, h._stageOnBlur = function() {
                h._isActive = !1, h._musicChannel && (h._musicChannel.isStopped || (h._blurPaused = !0, h._musicChannel.pause())), h.stopAllSound(), v.stage.once("mousedown", null, h._stageOnFocus);
            }, h._recoverWebAudio = function() {
                Gt.ctx && "running" != Gt.ctx.state && Gt.ctx.resume && Gt.ctx.resume();
            }, h._stageOnFocus = function() {
                h._isActive = !0, h._recoverWebAudio(), v.stage.off("mousedown", null, h._stageOnFocus), h._blurPaused && h._musicChannel && h._musicChannel.isStopped && (h._blurPaused = !1, h._musicChannel.resume());
            }, h.playSound = function(t, e, i, n, s) {
                if (void 0 === e && (e = 1), void 0 === s && (s = 0), !h._isActive || !t) return null;
                if (h._muted) return null;
                if (h._recoverWebAudio(), (t = B.formatURL(t)) == h._bgMusic) {
                    if (h._musicMuted) return null;
                } else {
                    if (it.isConchApp) {
                        var r = yt.getFileExtension(t);
                        if ("wav" != r && "ogg" != r) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null;
                    }
                    if (h._soundMuted) return null;
                }
                var o, a;
                return rt.onMiniGame || (o = v.loader.getRes(t)), n || (n = h._soundClass), o || ((o = new n()).load(t), rt.onMiniGame || Ut.cacheRes(t, o)), (a = o.play(s, e)) ? (a.url = t, a.volume = t == h._bgMusic ? h.musicVolume : h.soundVolume, a.completeHandler = i, a) : null;
            }, h.destroySound = function(t) {
                var e = v.loader.getRes(t);
                e && (Ut.clearRes(t), e.dispose());
            }, h.playMusic = function(t, e, i, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = 0), t = B.formatURL(t), h._bgMusic = t, h._musicChannel && h._musicChannel.stop(), h._musicChannel = h.playSound(t, e, i, h._musicClass, n);
            }, h.stopSound = function(t) {
                t = B.formatURL(t);
                var e, i = 0;
                for (i = h._channels.length - 1; 0 <= i; i--)(e = h._channels[i]).url == t && e.stop();
            }, h.stopAll = function() {
                h._bgMusic = null;
                var t = 0;
                for (t = h._channels.length - 1; 0 <= t; t--) h._channels[t].stop();
            }, h.stopAllSound = function() {
                var t, e = 0;
                for (e = h._channels.length - 1; 0 <= e; e--)(t = h._channels[e]).url != h._bgMusic && t.stop();
            }, h.stopMusic = function() {
                h._musicChannel && h._musicChannel.stop(), h._bgMusic = null;
            }, h.setSoundVolume = function(t, e) {
                if (e) e = B.formatURL(e), h._setVolume(e, t);
                else {
                    h.soundVolume = t;
                    var i, n = 0;
                    for (n = h._channels.length - 1; 0 <= n; n--)(i = h._channels[n]).url != h._bgMusic && (i.volume = t);
                }
            }, h.setMusicVolume = function(t) {
                h.musicVolume = t, h._setVolume(h._bgMusic, t);
            }, h._setVolume = function(t, e) {
                t = B.formatURL(t);
                var i, n = 0;
                for (n = h._channels.length - 1; 0 <= n; n--)(i = h._channels[n]).url == t && (i.volume = e);
            }, h.musicVolume = 1, h.soundVolume = 1, h.playbackRate = 1, h._useAudioMusic = !0, h._muted = !1, h._soundMuted = !1, h._musicMuted = !1, h._bgMusic = null, h._musicChannel = null, h._channels = [], h._autoStopMusic = !1, h._blurPaused = !1, h._isActive = !0, h._soundClass = null, h._musicClass = null, h._lastSoundUsedTimeDic = {}, h._isCheckingDispose = !1, h.autoReleaseSound = !0, h;
        }(),
        Et = function(t) {
            function s(t) {
                s.__super.call(this), t || (t = this._copyMatrix(s.IDENTITY_MATRIX)), this._mat = new Float32Array(16), this._alpha = new Float32Array(4), this.setByMatrix(t), this._action = new Z(), this._action.data = this;
            }
            y(s, "laya.filters.ColorFilter", r);
            var e = s.prototype;
            return v.imps(e, {
                "laya.filters.IFilter": !0
            }), e.gray = function() {
                return this.setByMatrix(s.GRAY_MATRIX);
            }, e.color = function(t, e, i, n) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), this.setByMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, n]);
            }, e.setColor = function(t) {
                var e = m.create(t).arrColor,
                    i = [0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0];
                return this.setByMatrix(i);
            }, e.setByMatrix = function(t) {
                this._matrix != t && this._copyMatrix(t);
                for (var e = 0, i = 0, n = 0; n < 20; n++) n % 5 != 4 ? this._mat[e++] = t[n] : this._alpha[i++] = t[n];
                return this;
            }, e.adjustColor = function(t, e, i, n) {
                return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), this;
            }, e.adjustBrightness = function(t) {
                return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }, e.adjustContrast = function(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e = NaN,
                    i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? s.DELTA_INDEX[t] : s.DELTA_INDEX[t << 0] * (1 - e) + s.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127,
                    n = .5 * (127 - e);
                return this._multiplyMatrix([i, 0, 0, 0, n, 0, i, 0, 0, n, 0, 0, i, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }, e.adjustSaturation = function(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e = 1 + (0 < t ? 3 * t / 100 : t / 100),
                    i = 1 - e,
                    n = .3086 * i,
                    s = .6094 * i,
                    r = .082 * i;
                return this._multiplyMatrix([n + e, s, r, 0, 0, n, s + e, r, 0, 0, n, s, r + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }, e.adjustHue = function(t) {
                if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t)) return this;
                var e = Math.cos(t),
                    i = Math.sin(t),
                    n = .213,
                    s = .715,
                    r = .072;
                return this._multiplyMatrix([n + .787 * e + i * -n, s + e * -s + i * -s, r + e * -r + .928 * i, 0, 0, n + e * -n + .143 * i, s + e * (1 - s) + .14 * i, r + e * -r + -.283 * i, 0, 0, n + e * -n + -.787 * i, s + e * -s + i * s, r + .928 * e + i * r, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
            }, e.reset = function() {
                return this.setByMatrix(this._copyMatrix(s.IDENTITY_MATRIX));
            }, e._multiplyMatrix = function(t) {
                var e = [];
                this._matrix = this._fixMatrix(this._matrix);
                for (var i = 0; i < 5; i++) {
                    for (var n = 0; n < 5; n++) e[n] = this._matrix[n + 5 * i];
                    for (n = 0; n < 5; n++) {
                        for (var s = 0, r = 0; r < 5; r++) s += t[n + 5 * r] * e[r];
                        this._matrix[n + 5 * i] = s;
                    }
                }
                return this.setByMatrix(this._matrix);
            }, e._clampValue = function(t, e) {
                return Math.min(e, Math.max(-e, t));
            }, e._fixMatrix = function(t) {
                return null == t ? s.IDENTITY_MATRIX : (t.length < 25 ? t = t.slice(0, t.length).concat(s.IDENTITY_MATRIX.slice(t.length, 25)) : 25 < t.length && (t = t.slice(0, 25)), t);
            }, e._copyMatrix = function(t) {
                this._matrix || (this._matrix = []);
                for (var e = 0; e < 25; e++) this._matrix[e] = t[e];
                return this._matrix;
            }, f(0, e, "type", function() {
                return 32;
            }), s.LENGTH = 25, i(s, ["DELTA_INDEX", function() {
                return this.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
            }, "GRAY_MATRIX", function() {
                return this.GRAY_MATRIX = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0];
            }, "IDENTITY_MATRIX", function() {
                return this.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            }]), s;
        }(),
        Rt = (function(t) {
            function e() {
                e.__super.call(this);
            }
            y(e, "laya.components.Script", s);
            var i = e.prototype;
            i._onAwake = function() {
                this.onAwake(), this.onStart !== laya.components.Script.prototype.onStart && v.startTimer.callLater(this, this.onStart);
            }, i._onEnable = function() {
                var t = laya.components.Script.prototype;
                this.onTriggerEnter !== t.onTriggerEnter && this.owner.on("triggerenter", this, this.onTriggerEnter), this.onTriggerStay !== t.onTriggerStay && this.owner.on("triggerstay", this, this.onTriggerStay), this.onTriggerExit !== t.onTriggerExit && this.owner.on("triggerexit", this, this.onTriggerExit), this.onMouseDown !== t.onMouseDown && this.owner.on("mousedown", this, this.onMouseDown), this.onMouseUp !== t.onMouseUp && this.owner.on("mouseup", this, this.onMouseUp), this.onClick !== t.onClick && this.owner.on("click", this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && v.stage.on("mousedown", this, this.onStageMouseDown), this.onStageMouseUp !== t.onStageMouseUp && v.stage.on("mouseup", this, this.onStageMouseUp), this.onStageClick !== t.onStageClick && v.stage.on("click", this, this.onStageClick), this.onStageMouseMove !== t.onStageMouseMove && v.stage.on("mousemove", this, this.onStageMouseMove), this.onDoubleClick !== t.onDoubleClick && this.owner.on("doubleclick", this, this.onDoubleClick), this.onRightClick !== t.onRightClick && this.owner.on("rightclick", this, this.onRightClick), this.onMouseMove !== t.onMouseMove && this.owner.on("mousemove", this, this.onMouseMove), this.onMouseOver !== t.onMouseOver && this.owner.on("mouseover", this, this.onMouseOver), this.onMouseOut !== t.onMouseOut && this.owner.on("mouseout", this, this.onMouseOut), this.onKeyDown !== t.onKeyDown && v.stage.on("keydown", this, this.onKeyDown), this.onKeyPress !== t.onKeyPress && v.stage.on("keypress", this, this.onKeyPress), this.onKeyUp !== t.onKeyUp && v.stage.on("keyup", this, this.onKeyUp), this.onUpdate !== t.onUpdate && v.updateTimer.frameLoop(1, this, this.onUpdate), this.onLateUpdate !== t.onLateUpdate && v.lateTimer.frameLoop(1, this, this.onLateUpdate), this.onPreRender !== t.onPreRender && v.lateTimer.frameLoop(1, this, this.onPreRender);
            }, i._onDisable = function() {
                this.owner.offAllCaller(this), v.stage.offAllCaller(this), v.startTimer.clearAll(this), v.updateTimer.clearAll(this), v.lateTimer.clearAll(this);
            }, i._isScript = function() {
                return !0;
            }, i._onDestroy = function() {
                this.onDestroy();
            }, i.onAwake = function() {}, i.onEnable = function() {}, i.onStart = function() {}, i.onTriggerEnter = function(t, e, i) {}, i.onTriggerStay = function(t, e, i) {}, i.onTriggerExit = function(t, e, i) {}, i.onMouseDown = function(t) {}, i.onMouseUp = function(t) {}, i.onClick = function(t) {}, i.onStageMouseDown = function(t) {}, i.onStageMouseUp = function(t) {}, i.onStageClick = function(t) {}, i.onStageMouseMove = function(t) {}, i.onDoubleClick = function(t) {}, i.onRightClick = function(t) {}, i.onMouseMove = function(t) {}, i.onMouseOver = function(t) {}, i.onMouseOut = function(t) {}, i.onKeyDown = function(t) {}, i.onKeyPress = function(t) {}, i.onKeyUp = function(t) {}, i.onUpdate = function() {}, i.onLateUpdate = function() {}, i.onPreRender = function() {}, i.onPostRender = function() {}, i.onDisable = function() {}, i.onDestroy = function() {}, f(0, i, "isSingleton", function() {
                return !1;
            });
        }(), function(t) {
            function o() {
                this.url = null, this.audio = null, this.loaded = !1, o.__super.call(this);
            }
            y(o, "laya.media.h5audio.AudioSound", u);
            var e = o.prototype;
            return e.dispose = function() {
                var t = o._audioCache[this.url];
                I.clearBySign("audio:" + this.url), t && (it.isConchApp || (t.src = ""), delete o._audioCache[this.url]);
            }, e.load = function(t) {
                var e;
                if (t = B.formatURL(t), (this.url = t) == Lt._bgMusic ? (o._initMusicAudio(), (e = o._musicAudio).src != t && (o._audioCache[e.src] = null, e = null)) : e = o._audioCache[t], e && 2 <= e.readyState) this.event("complete");
                else {
                    e || (e = t == Lt._bgMusic ? (o._initMusicAudio(), o._musicAudio) : rt.createElement("audio"), (o._audioCache[t] = e).src = t), e.addEventListener("canplaythrough", n), e.addEventListener("error", s);
                    var i = this;
                    (this.audio = e).load ? e.load() : s();
                }

                function n() {
                    r(), i.loaded = !0, i.event("complete");
                }

                function s() {
                    e.load = null, r(), i.event("error");
                }

                function r() {
                    e.removeEventListener("canplaythrough", n), e.removeEventListener("error", s);
                }
            }, e.play = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), !this.url) return null;
                var i, n;
                if (!(i = this.url == Lt._bgMusic ? o._musicAudio : o._audioCache[this.url])) return null;
                n = I.getItem("audio:" + this.url), it.isConchApp ? n || ((n = rt.createElement("audio")).src = this.url) : this.url == Lt._bgMusic ? (o._initMusicAudio(), (n = o._musicAudio).src = this.url) : n = n || i.cloneNode(!0);
                var s = new $t(n);
                return s.url = this.url, s.loops = e, s.startTime = t, s.play(), Lt.addChannel(s), s;
            }, f(0, e, "duration", function() {
                var t;
                return (t = o._audioCache[this.url]) ? t.duration : 0;
            }), o._initMusicAudio = function() {
                o._musicAudio || (o._musicAudio || (o._musicAudio = rt.createElement("audio")), it.isConchApp || rt.document.addEventListener("mousedown", o._makeMusicOK));
            }, o._makeMusicOK = function() {
                rt.document.removeEventListener("mousedown", o._makeMusicOK), o._musicAudio.src ? o._musicAudio.play() : (o._musicAudio.src = "", o._musicAudio.load());
            }, o._audioCache = {}, o._musicAudio = null, o;
        }()),
        Bt = (function(t) {
            function e() {
                e.__super.call(this);
            }
            y(e, "laya.media.Sound", u);
            var i = e.prototype;
            i.load = function(t) {}, i.play = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), null;
            }, i.dispose = function() {}, f(0, i, "duration", function() {
                return 0;
            });
        }(), function(t) {
            function o() {
                this._bits = 0, this._parent = null, this.name = "", this.destroyed = !1, this._conchData = null, this._components = null, this._activeChangeScripts = null, this._scene = null, o.__super.call(this), this._children = o.ARRAY_EMPTY, this._extUIChild = o.ARRAY_EMPTY, this.createGLBuffer();
            }
            y(o, "laya.display.Node", u);
            var e = o.prototype;
            return e.createGLBuffer = function() {}, e._setBit = function(t, e) {
                16 === t && (this._getBit(t) != e && this._updateDisplayedInstage());
                e ? this._bits |= t : this._bits &= ~t;
            }, e._getBit = function(t) {
                return 0 != (this._bits & t);
            }, e._setUpNoticeChain = function() {
                this._getBit(16) && this._setBitUp(16);
            }, e._setBitUp = function(t) {
                var e = this;
                for (e._setBit(t, !0), e = e._parent; e;) {
                    if (e._getBit(t)) return;
                    e._setBit(t, !0), e = e._parent;
                }
            }, e.on = function(t, e, i, n) {
                return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), this._createListener(t, e, i, n, !1);
            }, e.once = function(t, e, i, n) {
                return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), this._createListener(t, e, i, n, !0);
            }, e.destroy = function(t) {
                void 0 === t && (t = !0), this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), this._children = null, this.offAll();
            }, e.onDestroy = function() {}, e.destroyChildren = function() {
                if (this._children)
                    for (var t = 0, e = this._children.length; t < e; t++) this._children[0].destroy(!0);
            }, e.addChild = function(t) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(32, !0), t._parent === this) {
                    var e = this.getChildIndex(t);
                    e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t), this._childChanged());
                } else t._parent && t._parent.removeChild(t), this._children === o.ARRAY_EMPTY && (this._children = []), this._children.push(t), t._setParent(this), this._childChanged();
                return t;
            }, e.addInputChild = function(t) {
                if (this._extUIChild == o.ARRAY_EMPTY) this._extUIChild = [t];
                else {
                    if (0 <= this._extUIChild.indexOf(t)) return null;
                    this._extUIChild.push(t);
                }
                return null;
            }, e.removeInputChild = function(t) {
                var e = this._extUIChild.indexOf(t);
                0 <= e && this._extUIChild.splice(e, 1);
            }, e.addChildren = function(t) {
                for (var e = arguments, i = 0, n = e.length; i < n;) this.addChild(e[i++]);
            }, e.addChildAt = function(t, e) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(32, !0), 0 <= e && e <= this._children.length) {
                    if (t._parent === this) {
                        var i = this.getChildIndex(t);
                        this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged();
                    } else t._parent && t._parent.removeChild(t), this._children === o.ARRAY_EMPTY && (this._children = []), this._children.splice(e, 0, t), t._setParent(this);
                    return t;
                }
                throw new Error("appendChildAt:The index is out of bounds");
            }, e.getChildIndex = function(t) {
                return this._children.indexOf(t);
            }, e.getChildByName = function(t) {
                var e = this._children;
                if (e)
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i];
                        if (s.name === t) return s;
                    }
                return null;
            }, e.getChildAt = function(t) {
                return this._children[t] || null;
            }, e.setChildIndex = function(t, e) {
                var i = this._children;
                if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
                var n = this.getChildIndex(t);
                if (n < 0) throw new Error("setChildIndex:node is must child of this object.");
                return i.splice(n, 1), i.splice(e, 0, t), this._childChanged(), t;
            }, e._childChanged = function(t) {}, e.removeChild = function(t) {
                if (!this._children) return t;
                var e = this._children.indexOf(t);
                return this.removeChildAt(e);
            }, e.removeSelf = function() {
                return this._parent && this._parent.removeChild(this), this;
            }, e.removeChildByName = function(t) {
                var e = this.getChildByName(t);
                return e && this.removeChild(e), e;
            }, e.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e && (this._children.splice(t, 1), e._setParent(null)), e;
            }, e.removeChildren = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 2147483647), this._children && 0 < this._children.length) {
                    var i = this._children;
                    if (0 === t && e >= i.length - 1) {
                        var n = i;
                        this._children = o.ARRAY_EMPTY;
                    } else n = i.splice(t, e - t);
                    for (var s = 0, r = n.length; s < r; s++) n[s]._setParent(null);
                }
                return this;
            }, e.replaceChild = function(t, e) {
                var i = this._children.indexOf(e);
                return -1 < i ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), t) : null;
            }, e._setParent = function(t) {
                this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event("added"), this._getBit(16) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this._onRemoved(), this.event("removed"), this._parent._childChanged(), this._getBit(16) && this._displayChild(this, !1), this._parent = t));
            }, e._updateDisplayedInstage = function() {
                var t;
                t = this;
                for (var e = v.stage, i = !1; t;) {
                    if (t._getBit(16)) {
                        i = t._getBit(128);
                        break;
                    }
                    if (t === e || t._getBit(128)) {
                        i = !0;
                        break;
                    }
                    t = t._parent;
                }
                this._setBit(128, i);
            }, e._setDisplay = function(t) {
                this._getBit(128) !== t && (this._setBit(128, t), t ? this.event("display") : this.event("undisplay"));
            }, e._displayChild = function(t, e) {
                var i = t._children;
                if (i)
                    for (var n = 0, s = i.length; n < s; n++) {
                        var r = i[n];
                        r._getBit(16) && (0 < r._children.length ? this._displayChild(r, e) : r._setDisplay(e));
                    }
                t._setDisplay(e);
            }, e.contains = function(t) {
                if (t === this) return !0;
                for (; t;) {
                    if (t._parent === this) return !0;
                    t = t._parent;
                }
                return !1;
            }, e.timerLoop = function(t, e, i, n, s, r) {
                void 0 === s && (s = !0), void 0 === r && (r = !1), (this.scene ? this.scene.timer : v.timer).loop(t, e, i, n, s, r);
            }, e.timerOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : v.timer)._create(!1, !1, t, e, i, n, s);
            }, e.frameLoop = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : v.timer)._create(!0, !0, t, e, i, n, s);
            }, e.frameOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : v.timer)._create(!0, !1, t, e, i, n, s);
            }, e.clearTimer = function(t, e) {
                (this.scene ? this.scene.timer : v.timer).clear(t, e);
            }, e.callLater = function(t, e) {
                (this.scene ? this.scene.timer : v.timer).callLater(this, t, e);
            }, e.runCallLater = function(t) {
                (this.scene ? this.scene.timer : v.timer).runCallLater(this, t);
            }, e._onActive = function() {
                w.spriteCount++;
            }, e._onInActive = function() {
                w.spriteCount--;
            }, e._onActiveInScene = function() {}, e._onInActiveInScene = function() {}, e._parse = function(t) {}, e._setBelongScene = function(t) {
                if (!this._scene) {
                    if (this._scene = t, this._components)
                        for (var e = 0, i = this._components.length; e < i; e++) this._components[e]._setActiveInScene(!0);
                    for (this._onActiveInScene(), e = 0, i = this._children.length; e < i; e++) this._children[e]._setBelongScene(t);
                }
            }, e._setUnBelongScene = function() {
                if (this._scene !== this) {
                    if (this._onInActiveInScene(), this._components)
                        for (var t = 0, e = this._components.length; t < e; t++) this._components[t]._setActiveInScene(!1);
                    for (this._scene = null, t = 0, e = this._children.length; t < e; t++) this._children[t]._setUnBelongScene();
                }
            }, e.onAwake = function() {}, e.onEnable = function() {}, e._processActive = function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), this._activeScripts();
            }, e._activeHierarchy = function(t) {
                if (this._setBit(2, !0), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        n._setActive(!0), n._isScript() && n._enabled && t.push(n);
                    }
                for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                    var s = this._children[e];
                    !s._getBit(1) && s._activeHierarchy(t);
                }
                this._getBit(4) || (this._setBit(4, !0), this.onAwake()), this.onEnable();
            }, e._activeScripts = function() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onEnable();
                this._activeChangeScripts.length = 0;
            }, e._processInActive = function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), this._inActiveScripts();
            }, e._inActiveHierarchy = function(t) {
                if (this._onInActive(), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        n._setActive(!1), n._isScript() && n._enabled && t.push(n);
                    }
                for (this._setBit(2, !1), e = 0, i = this._children.length; e < i; e++) {
                    var s = this._children[e];
                    s && !s._getBit(1) && s._inActiveHierarchy(t);
                }
                this.onDisable();
            }, e._inActiveScripts = function() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onDisable();
                this._activeChangeScripts.length = 0;
            }, e.onDisable = function() {}, e._onAdded = function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
                var t = this._parent.scene;
                t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
            }, e._onRemoved = function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
            }, e._addComponentInstance = function(t) {
                this._components = this._components || [], this._components.push(t), t.owner = this, t._onAdded(), this.activeInHierarchy && (t._setActive(!0), t._isScript() && t._enabled && t.onEnable()), this._scene && t._setActiveInScene(!0);
            }, e._destroyComponent = function(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        if (n === t) {
                            n._destroy(), this._components.splice(e, 1);
                            break;
                        }
                    }
            }, e._destroyAllComponent = function() {
                if (this._components) {
                    for (var t = 0, e = this._components.length; t < e; t++) {
                        this._components[t]._destroy();
                    }
                    this._components.length = 0;
                }
            }, e._cloneTo = function(t) {
                var e = t;
                if (this._components)
                    for (var i = 0, n = this._components.length; i < n; i++) {
                        var s = e.addComponent(this._components[i].constructor);
                        this._components[i]._cloneTo(s);
                    }
            }, e.addComponentIntance = function(t) {
                if (t.owner) throw "Node:the component has belong to other node.";
                if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
                return this._addComponentInstance(t), t;
            }, e.addComponent = function(t) {
                var e = I.createByClass(t);
                if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
                return this._addComponentInstance(e), e;
            }, e.getComponent = function(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        if (v.__typeof(n, t)) return n;
                    }
                return null;
            }, e.getComponents = function(t) {
                var e;
                if (this._components)
                    for (var i = 0, n = this._components.length; i < n; i++) {
                        var s = this._components[i];
                        v.__typeof(s, t) && (e = e || []).push(s);
                    }
                return e;
            }, f(0, e, "numChildren", function() {
                return this._children.length;
            }), f(0, e, "parent", function() {
                return this._parent;
            }), f(0, e, "activeInHierarchy", function() {
                return this._getBit(2);
            }), f(0, e, "active", function() {
                return !this._getBit(8) && !this._getBit(1);
            }, function(t) {
                if (t = !!t, !this._getBit(1) !== t) {
                    if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                    this._setBit(1, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
                }
            }), f(0, e, "displayedInStage", function() {
                return this._getBit(16) || this._setBitUp(16), this._getBit(128);
            }), f(0, e, "scene", function() {
                return this._scene;
            }), f(0, e, "timer", function() {
                return this.scene ? this.scene.timer : v.timer;
            }), o.ARRAY_EMPTY = [], o;
        }()),
        Ft = function(t) {
            function e() {
                this.url = null, this.loops = 0, this.startTime = NaN, this.isStopped = !1, this.completeHandler = null, e.__super.call(this);
            }
            y(e, "laya.media.SoundChannel", u);
            var i = e.prototype;
            return i.play = function() {}, i.stop = function() {
                this.completeHandler && this.completeHandler.run(), this.completeHandler = null;
            }, i.pause = function() {}, i.resume = function() {}, i.__runComplete = function(t) {
                t && t.run();
            }, f(0, i, "volume", function() {
                return 1;
            }, function(t) {}), f(0, i, "position", function() {
                return 0;
            }), f(0, i, "duration", function() {
                return 0;
            }), e;
        }(),
        Ot = function(t) {
            function i() {
                this._id = 0, this._url = null, this._cpuMemory = 0, this._gpuMemory = 0, this._destroyed = !1, this._referenceCount = 0, this.lock = !1, this.name = null, i.__super.call(this), this._id = ++i._uniqueIDCounter, this._destroyed = !1, this._referenceCount = 0, (i._idResourcesMap[this.id] = this).lock = !1;
            }
            y(i, "laya.resource.Resource", u);
            var e = i.prototype;
            return v.imps(e, {
                "laya.resource.ICreateResource": !0,
                "laya.resource.IDestroy": !0
            }), e._setCPUMemory = function(t) {
                var e = t - this._cpuMemory;
                this._cpuMemory = t, i._addCPUMemory(e);
            }, e._setGPUMemory = function(t) {
                var e = t - this._gpuMemory;
                this._gpuMemory = t, i._addGPUMemory(e);
            }, e._setCreateURL = function(t) {
                var e;
                (t = B.formatURL(t), this._url !== t) && (this._url && ((e = i._urlResourcesMap[this._url]).splice(e.indexOf(this), 1), 0 === e.length && delete i._urlResourcesMap[this._url]), t && ((e = i._urlResourcesMap[t]) || (i._urlResourcesMap[t] = e = []), e.push(this)), this._url = t);
            }, e._addReference = function(t) {
                void 0 === t && (t = 1), this._referenceCount += t;
            }, e._removeReference = function(t) {
                void 0 === t && (t = 1), this._referenceCount -= t;
            }, e._clearReference = function() {
                this._referenceCount = 0;
            }, e._recoverResource = function() {}, e._disposeResource = function() {}, e._activeResource = function() {}, e.destroy = function() {
                var t;
                this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), delete i._idResourcesMap[this.id], this._url && ((t = i._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 0 === t.length && delete i._urlResourcesMap[this._url]), Ut.getRes(this._url) == this && delete Ut.loadedMap[this._url]));
            }, f(0, e, "id", function() {
                return this._id;
            }), f(0, e, "gpuMemory", function() {
                return this._gpuMemory;
            }), f(0, e, "url", function() {
                return this._url;
            }), f(0, e, "cpuMemory", function() {
                return this._cpuMemory;
            }), f(0, e, "destroyed", function() {
                return this._destroyed;
            }), f(0, e, "referenceCount", function() {
                return this._referenceCount;
            }), f(1, i, "cpuMemory", function() {
                return this._cpuMemory;
            }, laya.events.EventDispatcher._$SET_cpuMemory), f(1, i, "gpuMemory", function() {
                return this._gpuMemory;
            }, laya.events.EventDispatcher._$SET_gpuMemory), i._addCPUMemory = function(t) {
                this._cpuMemory += t;
            }, i._addGPUMemory = function(t) {
                this._gpuMemory += t;
            }, i._addMemory = function(t, e) {
                this._cpuMemory += t, this._gpuMemory += e;
            }, i.getResourceByID = function(t) {
                return i._idResourcesMap[t];
            }, i.getResourceByURL = function(t, e) {
                return void 0 === e && (e = 0), i._urlResourcesMap[t][e];
            }, i.destroyUnusedResources = function() {
                for (var t in i._idResourcesMap) {
                    var e = i._idResourcesMap[t];
                    e.lock || 0 !== e._referenceCount || e.destroy();
                }
            }, i._uniqueIDCounter = 0, i._idResourcesMap = {}, i._urlResourcesMap = {}, i._cpuMemory = 0, i._gpuMemory = 0, i;
        }(),
        kt = function(t) {
            var a;

            function r() {
                this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, r.__super.call(this);
            }
            y(r, "laya.utils.TimeLine", u);
            var e = r.prototype;
            return e.to = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), this._create(t, e, i, n, s, !0);
            }, e.from = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), this._create(t, e, i, n, s, !1);
            }, e._create = function(t, e, i, n, s, r) {
                var o = I.getItemByClass("tweenData", a);
                return o.isTo = r, o.type = 0, o.target = t, o.duration = i, o.data = e, o.startTime = this._startTime + s, o.endTime = o.startTime + o.duration, o.ease = n, this._startTime = Math.max(o.endTime, this._startTime), this._tweenDataList.push(o), this._startTimeSort = !0, this._endTimeSort = !0, this;
            }, e.addLabel = function(t, e) {
                var i = I.getItemByClass("tweenData", a);
                return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), this._labelDic[t] = i, this._tweenDataList.push(i), this;
            }, e.removeLabel = function(t) {
                if (this._labelDic && this._labelDic[t]) {
                    var e = this._labelDic[t];
                    if (e) {
                        var i = this._tweenDataList.indexOf(e); - 1 < i && this._tweenDataList.splice(i, 1);
                    }
                    delete this._labelDic[t];
                }
            }, e.gotoTime = function(t) {
                if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                    var e, i, n, s;
                    for (var r in this._firstTweenDic)
                        if (i = this._firstTweenDic[r])
                            for (var o in i) i.diyTarget.hasOwnProperty(o) && (i.diyTarget[o] = i[o]);
                    for (r in this._tweenDic)(e = this._tweenDic[r]).clear(), delete this._tweenDic[r];
                    if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = rt.now(), null == this._endTweenDataList || this._endTimeSort) {
                        this._endTimeSort = !1, this._endTweenDataList = n = this._tweenDataList.concat(), n.sort(function(t, e) {
                            return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                        });
                    } else n = this._endTweenDataList;
                    for (var a = 0, h = n.length; a < h; a++)
                        if (0 == (s = n[a]).type) {
                            if (!(t >= s.endTime)) break;
                            this._index = Math.max(this._index, a + 1);
                            var l = s.data;
                            if (s.isTo)
                                for (var u in l) s.target[u] = l[u];
                        }
                    for (a = 0, h = this._tweenDataList.length; a < h; a++) 0 == (s = this._tweenDataList[a]).type && t >= s.startTime && t < s.endTime && (this._index = Math.max(this._index, a + 1), this._gidIndex++, (e = I.getItemByClass("tween", E))._create(s.target, s.data, s.duration, s.ease, x.create(this, this._animComplete, [this._gidIndex]), 0, !1, s.isTo, !0, !1), e.setStartTime(this._currTime - (t - s.startTime)), e._updateEase(this._currTime), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
                }
            }, e.gotoLabel = function(t) {
                if (null != this._labelDic) {
                    var e = this._labelDic[t];
                    e && this.gotoTime(e.startTime);
                }
            }, e.pause = function() {
                v.timer.clear(this, this._update);
            }, e.resume = function() {
                this.play(this._currTime, this._loopKey);
            }, e.play = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                    if (this._startTimeSort) {
                        this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                            return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                        });
                        for (var i = 0, n = this._tweenDataList.length; i < n; i++) {
                            var s = this._tweenDataList[i];
                            if (null != s && 0 == s.type) {
                                var r = s.target,
                                    o = r.$_GID || (r.$_GID = yt.getGID()),
                                    a = null;
                                for (var h in null == this._firstTweenDic[o] ? ((a = {}).diyTarget = r, this._firstTweenDic[o] = a) : a = this._firstTweenDic[o], s.data) null == a[h] && (a[h] = r[h]);
                            }
                        }
                    }
                    "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, this._lastTime = rt.now(), v.timer.frameLoop(1, this, this._update);
                }
            }, e._update = function() {
                if (this._currTime >= this._startTime) {
                    if (!this._loopKey) {
                        for (var t in this._tweenDic)(e = this._tweenDic[t]).complete();
                        return this._complete(), void this.pause();
                    }
                    if (this._complete(), !this._tweenDataList) return;
                    this.gotoTime(0);
                }
                var e, i = rt.now(),
                    n = i - this._lastTime,
                    s = this._currTime += n * this.scale;
                for (t in this._lastTime = i, this._tweenDic)(e = this._tweenDic[t])._updateEase(s);
                if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                    var r = this._tweenDataList[this._index];
                    s >= r.startTime && (this._index++, 0 == r.type ? (this._gidIndex++, (e = I.getItemByClass("tween", E))._create(r.target, r.data, r.duration, r.ease, x.create(this, this._animComplete, [this._gidIndex]), 0, !1, r.isTo, !0, !1), e.setStartTime(s), e.gid = this._gidIndex, (this._tweenDic[this._gidIndex] = e)._updateEase(s)) : this.event("label", r.data));
                }
            }, e._animComplete = function(t) {
                this._tweenDic[t] && delete this._tweenDic[t];
            }, e._complete = function() {
                this.event("complete");
            }, e.reset = function() {
                var t;
                if (this._labelDic)
                    for (t in this._labelDic) delete this._labelDic[t];
                for (t in this._tweenDic) this._tweenDic[t].clear(), delete this._tweenDic[t];
                for (t in this._firstTweenDic) delete this._firstTweenDic[t];
                if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                    var e, i = 0;
                    for (e = this._tweenDataList.length, i = 0; i < e; i++) this._tweenDataList[i] && this._tweenDataList[i].destroy();
                }
                this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this.scale = 1, v.timer.clear(this, this._update);
            }, e.destroy = function() {
                this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, this._firstTweenDic = null;
            }, f(0, e, "index", function() {
                return this._frameIndex;
            }, function(t) {
                this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
            }), f(0, e, "total", function() {
                return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
            }), r.to = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), new r().to(t, e, i, n, s);
            }, r.from = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), new r().from(t, e, i, n, s);
            }, r.__init$ = function() {
                a = function() {
                    function t() {
                        this.type = 0, this.isTo = !0, this.startTime = NaN, this.endTime = NaN, this.target = null, this.duration = NaN, this.ease = null, this.data = null;
                    }
                    return y(t, ""), t.prototype.destroy = function() {
                        this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, I.recover("tweenData", this);
                    }, t;
                }();
            }, r;
        }(),
        Nt = function(t) {
            function b(t, e, i, n) {
                this.uvrect = [0, 0, 1, 1], this._w = 0, this._h = 0, this._destroyed = !1, this._referenceCount = 0, this.$_GID = 0, this.offsetX = 0, this.offsetY = 0, this.sourceWidth = 0, this.sourceHeight = 0, this.url = null, this.scaleRate = 1, b.__super.call(this), void 0 === i && (i = 0), void 0 === n && (n = 0), this.setTo(t, e, i, n);
            }
            y(b, "laya.resource.Texture", u);
            var e = b.prototype;
            return e._addReference = function() {
                this._bitmap && this._bitmap._addReference(), this._referenceCount++;
            }, e._removeReference = function() {
                this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
            }, e._getSource = function() {
                return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(), this._bitmap.destroyed ? null : this.bitmap._getSource());
            }, e._onLoaded = function(t, e) {
                if (e)
                    if (e == this);
                    else if (e instanceof laya.resource.Texture) {
                    var i = e;
                    b._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this);
                } else this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height;
                else;
                t && t.run(), this.event("ready", this);
            }, e.getIsReady = function() {
                return !this._destroyed && !!this._bitmap;
            }, e.setTo = function(t, e, i, n) {
                if (void 0 === i && (i = 0), void 0 === n && (n = 0), this.bitmap = t, this.sourceWidth = i, this.sourceHeight = n, t) {
                    this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || this._w, this.sourceHeight = this.sourceHeight || this._h;
                }
                this.uv = e || b.DEF_UV;
            }, e.load = function(t, e) {
                this._destroyed || v.loader.load(t, x.create(this, this._onLoaded, [e]), null, "htmlimage", 1, !1, null, !0);
            }, e.getPixels = function(t, e, i, n) {
                if (it.isWebGL) return bt.getTexturePixels(this, t, e, i, n);
                if (it.isConchApp) return this._nativeObj.getImageData(t, e, i, n);
                var s = this.width,
                    r = this.height;
                return s < t + i && (i -= t + i - s), r < e + n && (n -= e + n - r), i <= 0 || n <= 0 ? null : (rt.canvas.size(i, n), rt.canvas.clear(), rt.context.drawImage(this.bitmap._source, t, e, i, n, 0, 0, i, n), rt.context.getImageData(0, 0, i, n).data);
            }, e.recoverBitmap = function() {
                var e = this,
                    t = this._bitmap.url;
                this._destroyed || this._bitmap && !this._bitmap.destroyed || !t || v.loader.load(t, x.create(this, function(t) {
                    e.bitmap = t;
                }), null, "htmlimage", 1, !1, null, !0);
            }, e.disposeBitmap = function() {
                !this._destroyed && this._bitmap && this._bitmap.destroy();
            }, e.destroy = function(t) {
                if (void 0 === t && (t = !1), !this._destroyed) {
                    this._destroyed = !0;
                    var e = this._bitmap;
                    e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(), e = null), this.url && this === v.loader.getRes(this.url) && v.loader.clearRes(this.url);
                }
            }, f(0, e, "height", function() {
                return this._h ? this._h : this.bitmap ? this.uv && this.uv !== b.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
            }, function(t) {
                this._h = t, this.sourceHeight || (this.sourceHeight = t);
            }), f(0, e, "uv", function() {
                return this._uv;
            }, function(t) {
                this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], this._uv = t;
            }), f(0, e, "width", function() {
                return this._w ? this._w : this.bitmap ? this.uv && this.uv !== b.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
            }, function(t) {
                this._w = t, this.sourceWidth || (this.sourceWidth = t);
            }), f(0, e, "bitmap", function() {
                return this._bitmap;
            }, function(t) {
                this._bitmap && this._bitmap._removeReference(this._referenceCount), (this._bitmap = t) && t._addReference(this._referenceCount);
            }), f(0, e, "destroyed", function() {
                return this._destroyed;
            }), b.moveUV = function(t, e, i) {
                for (var n = 0; n < 8; n += 2) i[n] += t, i[n + 1] += e;
                return i;
            }, b.create = function(t, e, i, n, s, r, o, a, h) {
                return void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), b._create(t, e, i, n, s, r, o, a, h);
            }, b._create = function(t, e, i, n, s, r, o, a, h, l) {
                void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === h && (h = 0);
                var u, c = t instanceof laya.resource.Texture,
                    _ = c ? t.uv : b.DEF_UV,
                    d = c ? t.bitmap : t;
                d.width && e + n > d.width && (n = d.width - e), d.height && i + s > d.height && (s = d.height - i), l ? (u = l).setTo(d, null, a || n, h || s) : u = new b(d, null, a || n, h || s), u.width = n, u.height = s, u.offsetX = r, u.offsetY = o;
                var f = 1 / d.width,
                    p = 1 / d.height;
                e *= f, i *= p, n *= f, s *= p;
                var g = u.uv[0],
                    m = u.uv[1],
                    v = u.uv[4],
                    y = u.uv[5],
                    x = v - g,
                    w = y - m,
                    T = b.moveUV(_[0], _[1], [e, i, e + n, i, e + n, i + s, e, i + s]);
                u.uv = new Float32Array([g + T[0] * x, m + T[1] * w, v - (1 - T[2]) * x, m + T[3] * w, v - (1 - T[4]) * x, y - (1 - T[5]) * w, g + T[6] * x, y - (1 - T[7]) * w]);
                var C = d.scaleRate;
                return u.scaleRate = C && 1 != C ? (u.sourceWidth /= C, u.sourceHeight /= C, u.width /= C, u.height /= C, C) : 1, u;
            }, b.createFromTexture = function(t, e, i, n, s) {
                var r = t.scaleRate;
                1 != r && (e *= r, i *= r, n *= r, s *= r);
                var o = K.TEMP.setTo(e - t.offsetX, i - t.offsetY, n, s),
                    a = o.intersection(b._rect1.setTo(0, 0, t.width, t.height), b._rect2);
                return a ? b.create(t, a.x, a.y, a.width, a.height, a.x - o.x, a.y - o.y, n, s) : null;
            }, b.DEF_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), b.NO_UV = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]), b.INV_UV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), b._rect1 = new K(), b._rect2 = new K(), b;
        }(),
        Wt = function(t) {
            function e() {
                this._responseType = null, this._data = null, this._url = null, e.__super.call(this), this._http = new rt.window.XMLHttpRequest();
            }
            y(e, "laya.net.HttpRequest", u);
            var i = e.prototype;
            return i.send = function(t, e, i, n, s) {
                void 0 === i && (i = "get"), void 0 === n && (n = "text"), this._responseType = n, this._data = null, this._url = t;
                var r = this,
                    o = this._http;
                if (t = B.getAdptedFilePath(t), o.open(i, t, !0), s)
                    for (var a = 0; a < s.length; a++) o.setRequestHeader(s[a++], s[a]);
                else it.isConchApp || (e && "string" != typeof e ? o.setRequestHeader("Content-Type", "application/json") : o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                o.responseType = "arraybuffer" !== n ? "text" : "arraybuffer", o.onerror = function(t) {
                    r._onError(t);
                }, o.onabort = function(t) {
                    r._onAbort(t);
                }, o.onprogress = function(t) {
                    r._onProgress(t);
                }, o.onload = function(t) {
                    r._onLoad(t);
                }, o.send(e);
            }, i._onProgress = function(t) {
                t && t.lengthComputable && this.event("progress", t.loaded / t.total);
            }, i._onAbort = function(t) {
                this.error("Request was aborted by user");
            }, i._onError = function(t) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            }, i._onLoad = function(t) {
                var e = this._http,
                    i = void 0 !== e.status ? e.status : 200;
                200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
            }, i.error = function(t) {
                this.clear(), console.warn(this.url, t), this.event("error", t);
            }, i.complete = function() {
                this.clear();
                var e = !0;
                try {
                    "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = yt.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
                } catch (t) {
                    e = !1, this.error(t.message);
                }
                e && this.event("complete", this._data instanceof Array ? [this._data] : this._data);
            }, i.clear = function() {
                var t = this._http;
                t.onerror = t.onabort = t.onprogress = t.onload = null;
            }, f(0, i, "url", function() {
                return this._url;
            }), f(0, i, "http", function() {
                return this._http;
            }), f(0, i, "data", function() {
                return this._data;
            }), e;
        }(),
        Ut = function(t) {
            function I() {
                this._data = null, this._url = null, this._type = null, this._cache = !1, this._http = null, this._useWorkerLoader = !1, this._customParse = !1, this._constructParams = null, this._propertyParams = null, this._createCache = !1, I.__super.call(this);
            }
            y(I, "laya.net.Loader", u);
            var e = I.prototype;
            return e.load = function(t, e, i, n, s, r) {
                if (void 0 === i && (i = !0), void 0 === s && (s = !1), void 0 === r && (r = !1), t) {
                    if (I.setGroup(t, "666"), 0 === (this._url = t).indexOf("data:image") ? e = "image" : t = B.formatURL(t), this._type = e || (e = I.getTypeFromUrl(this._url)), this._cache = i, this._useWorkerLoader = r, this._data = null, r && zt.enableWorkerLoader(), !s && I.loadedMap[t]) return this._data = I.loadedMap[t], this.event("progress", 1), void this.event("complete", this._data);
                    if (n && I.setGroup(t, n), null != I.parserMap[e]) return this._customParse = !0, void(I.parserMap[e] instanceof laya.utils.Handler ? I.parserMap[e].runWith(this) : I.parserMap[e].call(null, this));
                    if ("image" === e || "htmlimage" === e || "nativeimage" === e) return this._loadImage(t);
                    if ("sound" === e) return this._loadSound(t);
                    if ("ttf" === e) return this._loadTTF(t);
                    if (typeof loadRuntime !== 'undefined' && !t.startsWith("http")) {
                        let that = this
                        setTimeout(() => {
                            if (t.startsWith('file://'))
                                t = t.substr('file://'.length);
                            var rt = loadRuntime();
                            var response;
                            var type = e;
                            t = B.getAdptedFilePath(t);
                            if (type == 'pkm' || type === "arraybuffer") {
                                response = rt.getFileSystemManager().readFileSync(t);
                            } else {
                                response = rt.getFileSystemManager().readFileSync(t, "utf8");
                                if ((type == 'atlas' || type == 'json' || type == 'prefab') && typeof response !== "undefined") {
                                    response = JSON.parse(response);
                                }
                            }
                            that.onLoaded(response);
                        }, 0);
                        return;
                    }
                    var o;
                    switch (e) {
                        case "atlas":
                        case "prefab":
                        case "plf":
                            o = "json";
                            break;
                        case "font":
                            o = "xml";
                            break;
                        case "plfb":
                            o = "arraybuffer";
                            break;
                        default:
                            o = e;
                    }
                    I.preLoadedMap[t] ? this.onLoaded(I.preLoadedMap[t]) : (this._http || (this._http = new Wt(), this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", o));
                } else this.onLoaded(null);
            }, e._loadTTF = function(t) {
                t = B.formatURL(t);
                var e = new D();
                e.complete = x.create(this, this.onLoaded), e.load(t);
            }, e._loadImage = function(i) {
                i = B.formatURL(i);
                var n, s = this;

                function r() {
                    var t = n;
                    t && (t.onload = null, t.onerror = null, delete I._imgCache[i]);
                }
                var t = function() {
                    r(), s.event("error", "Load image failed");
                };
                if ("nativeimage" === this._type) {
                    var e = function() {
                        r(), s.onLoaded(n);
                    };
                    (n = new rt.window.Image()).crossOrigin = "", n.onload = e, n.onerror = t, n.src = i, I._imgCache[i] = n;
                } else {
                    var o = yt.getFileExtension(i);
                    if ("ktx" === o || "pvr" === o) {
                        var a;
                        e = function(t) {
                            var e = 0;
                            switch (o) {
                                case "ktx":
                                    e = 5;
                                    break;
                                case "pvr":
                                    e = 12;
                            }
                            (n = Zt.create(0, 0, e)).setCompressData(t), n._setCreateURL(i), r(), s.onLoaded(n);
                        }, (a = new Wt()).on("error", null, t), a.on("complete", null, e), a.send(i, null, "get", "arraybuffer");
                    } else {
                        var h = new rt.window.Image();
                        e = function() {
                            (n = Zt.create(h.width, h.height, 1)).loadImageSource(h, !0), n._setCreateURL(i), r(), s.onLoaded(n);
                        }, h.crossOrigin = "", h.onload = e, h.onerror = t, h.src = i, n = h, I._imgCache[i] = h;
                    }
                }
            }, e._loadSound = function(t) {
                var e = new Lt._soundClass(),
                    i = this;

                function n() {
                    e.offAll();
                }
                e.on("complete", this, function() {
                    n(), i.onLoaded(e);
                }), e.on("error", this, function() {
                    n(), e.dispose(), i.event("error", "Load sound failed");
                }), e.load(t);
            }, e.onProgress = function(t) {
                "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t);
            }, e.onError = function(t) {
                this.event("error", t);
            }, e.onLoaded = function(t) {
                var e = this._type;
                if ("plfb" == e) this.parsePLFBData(t), this.complete(t);
                else if ("plf" == e) this.parsePLFData(t), this.complete(t);
                else if ("image" === e) {
                    var i = new Nt(t);
                    i.url = this._url, this.complete(i);
                } else if ("sound" === e || "htmlimage" === e || "nativeimage" === e) this.complete(t);
                else if ("atlas" === e) {
                    if (!t.url && !t._setContext) {
                        if (!this._data) {
                            if ((this._data = t).meta && t.meta.image) {
                                var n, s = t.meta.image.split(","),
                                    r = 0 <= this._url.indexOf("/") ? "/" : "\\",
                                    o = this._url.lastIndexOf(r),
                                    a = 0 <= o ? this._url.substr(0, o + 1) : "";
                                rt.onAndroid && t.meta.compressTextureAndroid && (n = ".ktx"), rt.onIOS && t.meta.compressTextureIOS && (n = ".pvr");
                                for (var h = 0, l = s.length; h < l; h++) s[h] = n ? a + s[h].replace(".png", n) : a + s[h];
                            } else s = [this._url.replace(".json", ".png")];
                            s.reverse(), t.toLoads = s, t.pics = [];
                        }
                        return this.event("progress", .3 + 1 / s.length * .6), this._loadImage(s.pop());
                    }
                    if (this._data.pics.push(t), 0 < this._data.toLoads.length) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), this._loadImage(this._data.toLoads.pop());
                    var u = this._data.frames,
                        c = this._url.split("?")[0],
                        _ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/",
                        d = this._data.pics,
                        f = B.formatURL(this._url),
                        p = I.atlasMap[f] || (I.atlasMap[f] = []);
                    p.dir = _;
                    var g = 1;
                    if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                        for (var m in g = parseFloat(this._data.meta.scale), u) {
                            var v, y = u[m],
                                x = d[y.frame.idx ? y.frame.idx : 0],
                                w = B.formatURL(_ + m);
                            x.scaleRate = g, v = Nt._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(w)), I.cacheRes(w, v), v.url = w, p.push(w);
                        } else
                            for (m in u) x = d[(y = u[m]).frame.idx ? y.frame.idx : 0], w = B.formatURL(_ + m), v = Nt._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(w)), I.cacheRes(w, v), v.url = w, p.push(w);
                    delete this._data.pics, this.complete(this._data);
                } else if ("font" === e) {
                    if (!t._source) return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                    var T = new A();
                    T.parseFont(this._data, new Nt(t));
                    var C = this._url.split(".fnt")[0].split("/"),
                        b = C[C.length - 1];
                    qt.registerBitmapFont(b, T), this._data = T, this.complete(this._data);
                } else if ("prefab" === e) {
                    var S = new At();
                    S.json = t, this.complete(S);
                } else this.complete(t);
            }, e.parsePLFData = function(t) {
                var e, i, n;
                for (e in t) switch (n = t[e], e) {
                    case "json":
                    case "text":
                        for (i in n) I.preLoadedMap[B.formatURL(i)] = n[i];
                        break;
                    default:
                        for (i in n) I.preLoadedMap[B.formatURL(i)] = n[i];
                }
            }, e.parsePLFBData = function(t) {
                var e, i, n = 0;
                for (i = (e = new ft(t)).getInt32(), n = 0; n < i; n++) this.parseOnePLFBFile(e);
            }, e.parseOnePLFBFile = function(t) {
                var e, i, n;
                i = t.getUTFString(), e = t.getInt32(), n = t.readArrayBuffer(e), I.preLoadedMap[B.formatURL(i)] = n;
            }, e.complete = function(t) {
                this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [t] : t) : (I._loaders.push(this), I._isWorking || I.checkNext());
            }, e.endLoad = function(t) {
                t && (this._data = t), this._cache && I.cacheRes(this._url, this._data), this.event("progress", 1), this.event("complete", this.data instanceof Array ? [this.data] : this.data);
            }, f(0, e, "url", function() {
                return this._url;
            }), f(0, e, "data", function() {
                return this._data;
            }), f(0, e, "cache", function() {
                return this._cache;
            }), f(0, e, "type", function() {
                return this._type;
            }), I.getTypeFromUrl = function(t) {
                var e = yt.getFileExtension(t);
                return e ? I.typeMap[e] : (console.warn("Not recognize the resources suffix", t), "text");
            }, I.checkNext = function() {
                I._isWorking = !0;
                for (var t = rt.now(); I._startIndex < I._loaders.length;)
                    if (rt.now(), I._loaders[I._startIndex].endLoad(), I._startIndex++, rt.now() - t > I.maxTimeOut) return console.warn("loader callback cost a long time:" + (rt.now() - t) + " url=" + I._loaders[I._startIndex - 1].url), void v.systemTimer.frameOnce(1, null, I.checkNext);
                I._loaders.length = 0, I._startIndex = 0, I._isWorking = !1;
            }, I.clearRes = function(t) {
                t = B.formatURL(t);
                var e = I.getAtlas(t);
                if (e) {
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i],
                            r = I.getRes(s);
                        delete I.loadedMap[s], r && r.destroy();
                    }
                    e.length = 0, delete I.atlasMap[t], delete I.loadedMap[t];
                } else {
                    var o = I.loadedMap[t];
                    o && (delete I.loadedMap[t], o instanceof laya.resource.Texture && o.bitmap && o.destroy());
                }
            }, I.clearTextureRes = function(t) {
                t = B.formatURL(t);
                var e = laya.net.Loader.getAtlas(t),
                    i = e && 0 < e.length ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
                i instanceof laya.resource.Texture && i.disposeBitmap();
            }, I.getRes = function(t) {
                return I.loadedMap[B.formatURL(t)];
            }, I.getAtlas = function(t) {
                return I.atlasMap[B.formatURL(t)];
            }, I.cacheRes = function(t, e) {
                t = B.formatURL(t), null != I.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : I.loadedMap[t] = e;
            }, I.setGroup = function(t, e) {
                I.groupMap[e] || (I.groupMap[e] = []), I.groupMap[e].push(t);
            }, I.clearResByGroup = function(t) {
                if (I.groupMap[t]) {
                    var e = I.groupMap[t],
                        i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++) I.clearRes(e[i]);
                    e.length = 0;
                }
            }, I.TEXT = "text", I.JSON = "json", I.PREFAB = "prefab", I.XML = "xml", I.BUFFER = "arraybuffer", I.IMAGE = "image", I.SOUND = "sound", I.ATLAS = "atlas", I.FONT = "font", I.TTF = "ttf", I.PLF = "plf", I.PLFB = "plfb", I.HIERARCHY = "HIERARCHY", I.MESH = "MESH", I.MATERIAL = "MATERIAL", I.TEXTURE2D = "TEXTURE2D", I.TEXTURECUBE = "TEXTURECUBE", I.ANIMATIONCLIP = "ANIMATIONCLIP", I.AVATAR = "AVATAR", I.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", I.TERRAINRES = "TERRAIN", I.typeMap = {
                ttf: "ttf",
                png: "image",
                jpg: "image",
                jpeg: "image",
                ktx: "image",
                pvr: "image",
                txt: "text",
                json: "json",
                prefab: "prefab",
                xml: "xml",
                als: "atlas",
                atlas: "atlas",
                mp3: "sound",
                ogg: "sound",
                wav: "sound",
                part: "json",
                fnt: "font",
                plf: "plf",
                plfb: "plfb",
                scene: "json",
                ani: "json",
                sk: "arraybuffer"
            }, I.parserMap = {}, I.maxTimeOut = 100, I.groupMap = {}, I.loadedMap = {}, I.atlasMap = {}, I.preLoadedMap = {}, I._imgCache = {}, I._loaders = [], I._isWorking = !1, I._startIndex = 0, I;
        }(),
        Gt = function(t) {
            function n() {
                this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, this._disposed = !1, n.__super.call(this);
            }
            y(n, "laya.media.webaudio.WebAudioSound", u);
            var e = n.prototype;
            return e.load = function(t) {
                var e = this;
                if (t = B.formatURL(t), this.url = t, this.audioBuffer = n._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer);
                else if (n.e.on("loaded:" + t, this, this._loaded), n.e.on("err:" + t, this, this._err), !n.__loadingSound[t]) {
                    n.__loadingSound[t] = !0;
                    var i = new rt.window.XMLHttpRequest();
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        e._disposed ? e._removeLoadEvents() : (e.data = i.response, n.buffs.push({
                            buffer: e.data,
                            url: e.url
                        }), n.decode());
                    }, i.onerror = function(t) {
                        e._err();
                    }, i.send();
                }
            }, e._err = function() {
                this._removeLoadEvents(), n.__loadingSound[this.url] = !1, this.event("error");
            }, e._loaded = function(t) {
                this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, n._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event("complete"));
            }, e._removeLoadEvents = function() {
                n.e.off("loaded:" + this.url, this, this._loaded), n.e.off("err:" + this.url, this, this._err);
            }, e.__playAfterLoaded = function() {
                if (this.__toPlays) {
                    var t, e, i, n = 0;
                    for (t = (e = this.__toPlays).length, n = 0; n < t; n++)(i = e[n])[2] && !i[2].isStopped && this.play(i[0], i[1], i[2]);
                    this.__toPlays.length = 0;
                }
            }, e.play = function(t, e, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i || new Kt(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([t, e, i]), this.once("complete", this, this.__playAfterLoaded), this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, i.startTime = t, i.play(), Lt.addChannel(i), i;
            }, e.dispose = function() {
                this._disposed = !0, delete n._dataCache[this.url], delete n.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = [];
            }, f(0, e, "duration", function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }), n.decode = function() {
                n.buffs.length <= 0 || n.isDecoding || (n.isDecoding = !0, n.tInfo = n.buffs.shift(), n.ctx.decodeAudioData(n.tInfo.buffer, n._done, n._fail));
            }, n._done = function(t) {
                n.e.event("loaded:" + n.tInfo.url, t), n.isDecoding = !1, n.decode();
            }, n._fail = function() {
                n.e.event("err:" + n.tInfo.url, null), n.isDecoding = !1, n.decode();
            }, n._playEmptySound = function() {
                if (null != n.ctx) {
                    var t = n.ctx.createBufferSource();
                    t.buffer = n._miniBuffer, t.connect(n.ctx.destination), t.start(0, 0, 0);
                }
            }, n._unlock = function() {
                n._unlocked || (n._playEmptySound(), "running" == n.ctx.state && (rt.document.removeEventListener("mousedown", n._unlock, !0), rt.document.removeEventListener("touchend", n._unlock, !0), rt.document.removeEventListener("touchstart", n._unlock, !0), n._unlocked = !0));
            }, n.initWebAudio = function() {
                "running" != n.ctx.state && (n._unlock(), rt.document.addEventListener("mousedown", n._unlock, !0), rt.document.addEventListener("touchend", n._unlock, !0), rt.document.addEventListener("touchstart", n._unlock, !0));
            }, n._dataCache = {}, n.buffs = [], n.isDecoding = !1, n._unlocked = !1, n.tInfo = null, n.__loadingSound = {}, i(n, ["window", function() {
                return this.window = rt.window;
            }, "webAudioEnabled", function() {
                return this.webAudioEnabled = n.window.AudioContext || n.window.webkitAudioContext || n.window.mozAudioContext;
            }, "ctx", function() {
                return this.ctx = n.webAudioEnabled ? new(n.window.AudioContext || n.window.webkitAudioContext || n.window.mozAudioContext)() : void 0;
            }, "_miniBuffer", function() {
                return this._miniBuffer = n.ctx.createBuffer(1, 1, 22050);
            }, "e", function() {
                return this.e = new u();
            }]), n;
        }(),
        Yt = (function(t) {
            function s(t, e, i, n) {
                this._endian = null, this._socket = null, this._connected = !1, this._addInputPosition = 0, this._input = null, this._output = null, this.disableInput = !1, this._byteClass = null, this.protocols = [], s.__super.call(this), void 0 === e && (e = 0), this._byteClass = i || ft, this.protocols = n, this.endian = "bigEndian", t && 0 < e && e < 65535 && this.connect(t, e);
            }
            y(s, "laya.net.Socket", u);
            var e = s.prototype;
            e.connect = function(t, e) {
                var i = "ws://" + t + ":" + e;
                this.connectByUrl(i);
            }, e.connectByUrl = function(t) {
                var e = this;
                null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new rt.window.WebSocket(t, this.protocols) : this._socket = new rt.window.WebSocket(t), this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, this._socket.onopen = function(t) {
                    e._onOpen(t);
                }, this._socket.onmessage = function(t) {
                    e._onMessage(t);
                }, this._socket.onclose = function(t) {
                    e._onClose(t);
                }, this._socket.onerror = function(t) {
                    e._onError(t);
                };
            }, e.cleanSocket = function() {
                this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
            }, e.close = function() {
                if (null != this._socket) try {
                    this._socket.close();
                } catch (t) {}
            }, e._onOpen = function(t) {
                this._connected = !0, this.event("open", t);
            }, e._onMessage = function(t) {
                if (t && t.data) {
                    var e = t.data;
                    if (this.disableInput && e) this.event("message", e);
                    else {
                        0 < this._input.length && this._input.bytesAvailable < 1 && (this._input.clear(), this._addInputPosition = 0);
                        var i = this._input.pos;
                        !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e);
                    }
                }
            }, e._onClose = function(t) {
                this._connected = !1, this.event("close", t);
            }, e._onError = function(t) {
                this.event("error", t);
            }, e.send = function(t) {
                this._socket.send(t);
            }, e.flush = function() {
                if (this._output && 0 < this._output.length) {
                    var e;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                    } catch (t) {
                        e = t;
                    }
                    this._output.endian = this.endian, this._output.clear(), e && this.event("error", e);
                }
            }, f(0, e, "input", function() {
                return this._input;
            }), f(0, e, "output", function() {
                return this._output;
            }), f(0, e, "connected", function() {
                return this._connected;
            }), f(0, e, "endian", function() {
                return this._endian;
            }, function(t) {
                this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
            }), s.LITTLE_ENDIAN = "littleEndian", s.BIG_ENDIAN = "bigEndian";
        }(), function(t) {
            function e() {
                e.__super.call(this);
            }
            y(e, "laya.components.CommonScript", s);
            var i = e.prototype;
            i.onAwake = function() {}, i.onEnable = function() {}, i.onStart = function() {}, i.onUpdate = function() {}, i.onLateUpdate = function() {}, i.onDisable = function() {}, i.onDestroy = function() {}, f(0, i, "isSingleton", function() {
                return !1;
            });
        }(), function(t) {
            var d;

            function f() {
                this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, this._failRes = {}, this._statInfo = {
                    count: 1,
                    loaded: 1
                }, f.__super.call(this);
                for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = [];
            }
            y(f, "laya.net.LoaderManager", u);
            var e = f.prototype;
            return e.getProgress = function() {
                return this._statInfo.loaded / this._statInfo.count;
            }, e.resetProgress = function() {
                this._statInfo.count = this._statInfo.loaded = 1;
            }, e.create = function(t, e, i, n, s, r, o, a) {
                void 0 === o && (o = 1), void 0 === a && (a = !0), this._create(t, !0, e, i, n, s, r, o, a);
            }, e._create = function(t, e, i, n, s, r, o, a, h) {
                if (void 0 === a && (a = 1), void 0 === h && (h = !0), t instanceof Array) {
                    var l = !0,
                        u = t,
                        c = u.length,
                        _ = 0;
                    if (n) var d = x.create(n.caller, n.method, n.args, !1);
                    for (var f = 0; f < c; f++) {
                        var p = u[f];
                        "string" == typeof p && (p = u[f] = {
                            url: p
                        }), p.progress = 0;
                    }
                    for (f = 0; f < c; f++) {
                        p = u[f];
                        var g = n ? x.create(null, y, [p], !1) : null,
                            m = n || i ? x.create(null, v, [p]) : null;
                        this._createOne(p.url, e, m, g, p.type || s, p.constructParams || r, p.propertyParams || o, p.priority || a, h);
                    }

                    function v(t, e) {
                        _++, t.progress = 1, e || (l = !1), _ === c && i && i.runWith(l);
                    }

                    function y(t, e) {
                        t.progress = e;
                        for (var i = 0, n = 0; n < c; n++) {
                            i += u[n].progress;
                        }
                        var s = i / c;
                        d.runWith(s);
                    }
                } else this._createOne(t, e, i, n, s, r, o, a, h);
            }, e._createOne = function(e, i, n, t, s, r, o, a, h) {
                void 0 === a && (a = 1), void 0 === h && (h = !0);
                var l = this.getRes(e);
                if (l) !i && l instanceof laya.resource.Resource && l._addReference(), t && t.runWith(1), n && n.runWith(l);
                else {
                    var u = yt.getFileExtension(e);
                    if (s || (s = f.createMap[u] ? f.createMap[u][0] : null), !s) return void this.load(e, n, t, s, a, h);
                    if (!Ut.parserMap[s]) return void this.load(e, n, t, s, a, h);
                    this._createLoad(e, x.create(null, function(t) {
                        t && (!i && t instanceof laya.resource.Resource && t._addReference(), t._setCreateURL(e));
                        n && n.runWith(t), v.loader.event(e);
                    }), t, s, r, o, a, h, !0);
                }
            }, e.load = function(t, e, i, n, s, r, o, a, h) {
                var l = this;
                if (void 0 === s && (s = 1), void 0 === r && (r = !0), void 0 === a && (a = !1), void 0 === h && (h = !1), t instanceof Array) return this._loadAssets(t, e, i, n, s, r, o);
                var u = Ut.getRes(t);
                if (a || null == u) {
                    var c;
                    c = t, (t = St.getFileLoadPath(t)) != c && "nativeimage" !== n ? n = "atlas" : c = null;
                    var _ = f._resMap[t];
                    _ ? (e && (c ? e && _._createListener("complete", this, this._resInfoLoaded, [c, e], !1, !1) : e && _._createListener("complete", e.caller, e.method, e.args, !1, !1)), i && _._createListener("progress", i.caller, i.method, i.args, !1, !1)) : ((_ = this._infoPool.length ? this._infoPool.pop() : new d()).url = t, _.type = n, _.cache = r, _.group = o, _.ignoreCache = a, _.useWorkerLoader = h, _.originalUrl = c, e && _.on("complete", e.caller, e.method, e.args), i && _.on("progress", i.caller, i.method, i.args), f._resMap[t] = _, s = s < this._maxPriority ? s : this._maxPriority - 1, this._resInfos[s].push(_), this._statInfo.count++, this.event("progress", this.getProgress()), this._next());
                } else v.systemTimer.frameOnce(1, null, function() {
                    i && i.runWith(1), e && e.runWith(u instanceof Array ? [u] : u), l._loaderCount || l.event("complete");
                });
                return this;
            }, e._resInfoLoaded = function(t, e) {
                e.runWith(Ut.getRes(t));
            }, e._createLoad = function(t, e, i, n, s, r, o, a, h) {
                var l = this;
                if (void 0 === o && (o = 1), void 0 === a && (a = !0), void 0 === h && (h = !1), t instanceof Array) return this._loadAssets(t, e, i, n, o, a);
                var u = Ut.getRes(t);
                if (null != u) v.systemTimer.frameOnce(1, null, function() {
                    i && i.runWith(1), e && e.runWith(u), l._loaderCount || l.event("complete");
                });
                else {
                    var c = f._resMap[t];
                    c ? (e && c._createListener("complete", e.caller, e.method, e.args, !1, !1), i && c._createListener("progress", i.caller, i.method, i.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new d()).url = t, c.type = n, c.cache = !1, c.ignoreCache = h, c.originalUrl = null, c.createCache = a, c.createConstructParams = s, c.createPropertyParams = r, e && c.on("complete", e.caller, e.method, e.args), i && c.on("progress", i.caller, i.method, i.args), f._resMap[t] = c, o = o < this._maxPriority ? o : this._maxPriority - 1, this._resInfos[o].push(c), this._statInfo.count++, this.event("progress", this.getProgress()), this._next());
                }
                return this;
            }, e._next = function() {
                if (!(this._loaderCount >= this.maxLoader)) {
                    for (var t = 0; t < this._maxPriority; t++)
                        for (var e = this._resInfos[t]; 0 < e.length;) {
                            var i = e.shift();
                            if (i) return this._doLoad(i);
                        }
                    this._loaderCount || this.event("complete");
                }
            }, e._doLoad = function(e) {
                this._loaderCount++;
                var i = this._loaders.length ? this._loaders.pop() : new Ut();
                i.on("complete", null, s), i.on("progress", null, function(t) {
                    e.event("progress", t);
                }), i.on("error", null, function(t) {
                    s(null);
                });
                var n = this;

                function s(t) {
                    i.offAll(), i._data = null, i._customParse = !1, n._loaders.push(i), n._endLoad(e, t instanceof Array ? [t] : t), n._loaderCount--, n._next();
                }
                i._constructParams = e.createConstructParams, i._propertyParams = e.createPropertyParams, i._createCache = e.createCache, i.load(e.url, e.type, e.cache, e.group, e.ignoreCache, e.useWorkerLoader);
            }, e._endLoad = function(t, e) {
                var i = t.url;
                if (null == e) {
                    var n = this._failRes[i] || 0;
                    if (n < this.retryNum) return console.warn("[warn]Retry to load:", i), this._failRes[i] = n + 1, void v.systemTimer.once(this.retryDelay, this, this._addReTry, [t], !1);
                    Ut.clearRes(i), console.warn("[error]Failed to load:", i), this.event("error", i);
                }
                this._failRes[i] && (this._failRes[i] = 0), delete f._resMap[i], t.originalUrl && (e = Ut.getRes(t.originalUrl)), t.event("complete", e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, this.event("progress", this.getProgress());
            }, e._addReTry = function(t) {
                this._resInfos[this._maxPriority - 1].push(t), this._next();
            }, e.clearRes = function(t) {
                Ut.clearRes(t);
            }, e.clearTextureRes = function(t) {
                Ut.clearTextureRes(t);
            }, e.getRes = function(t) {
                return Ut.getRes(t);
            }, e.cacheRes = function(t, e) {
                Ut.cacheRes(t, e);
            }, e.setGroup = function(t, e) {
                Ut.setGroup(t, e);
            }, e.clearResByGroup = function(t) {
                Ut.clearResByGroup(t);
            }, e.clearUnLoaded = function() {
                for (var t = 0; t < this._maxPriority; t++) {
                    for (var e = this._resInfos[t], i = e.length - 1; - 1 < i; i--) {
                        var n = e[i];
                        n && (n.offAll(), this._infoPool.push(n));
                    }
                    e.length = 0;
                }
                this._loaderCount = 0, f._resMap = {};
            }, e.cancelLoadByUrls = function(t) {
                if (t)
                    for (var e = 0, i = t.length; e < i; e++) this.cancelLoadByUrl(t[e]);
            }, e.cancelLoadByUrl = function(t) {
                for (var e = 0; e < this._maxPriority; e++)
                    for (var i = this._resInfos[e], n = i.length - 1; - 1 < n; n--) {
                        var s = i[n];
                        s && s.url === t && (i[n] = null, s.offAll(), this._infoPool.push(s));
                    }
                f._resMap[t] && delete f._resMap[t];
            }, e._loadAssets = function(t, i, o, e, n, s, r) {
                void 0 === n && (n = 1), void 0 === s && (s = !0);
                for (var a = t.length, h = 0, l = 0, u = [], c = !0, _ = 0; _ < a; _++) {
                    var d = t[_];
                    "string" == typeof d && (d = {
                        url: d,
                        type: e,
                        size: 1,
                        priority: n
                    }), d.size || (d.size = 1), d.progress = 0, l += d.size, u.push(d);
                    var f = o ? x.create(null, m, [d], !1) : null,
                        p = i || o ? x.create(null, g, [d]) : null;
                    this.load(d.url, p, f, d.type, d.priority || 1, s, d.group || r, !1, d.useWorkerLoader);
                }

                function g(t, e) {
                    h++, t.progress = 1, e || (c = !1), h === a && i && i.runWith(c);
                }

                function m(t, e) {
                    if (null != o) {
                        t.progress = e;
                        for (var i = 0, n = 0; n < u.length; n++) {
                            var s = u[n];
                            i += s.size * s.progress;
                        }
                        var r = i / l;
                        o.runWith(r);
                    }
                }
                return this;
            }, e.decodeBitmaps = function(t) {
                var e, i = 0,
                    n = t.length;
                for (e = it._context, i = 0; i < n; i++) {
                    var s, r;
                    if (s = Ut.getAtlas(t[i])) this._decodeTexture(s[0], e);
                    else(r = this.getRes(t[i])) && r instanceof laya.resource.Texture && this._decodeTexture(r, e);
                }
            }, e._decodeTexture = function(t, e) {
                var i = t.bitmap;
                if (t && i) {
                    var n = i.source || i.image;
                    if (n && v.__typeof(n, rt.window.HTMLImageElement)) {
                        e.drawImage(n, 0, 0, 1, 1);
                        e.getImageData(0, 0, 1, 1);
                    }
                }
            }, f.cacheRes = function(t, e) {
                Ut.cacheRes(t, e);
            }, f._resMap = {}, i(f, ["createMap", function() {
                return this.createMap = {
                    atlas: [null, "atlas"]
                };
            }]), f.__init$ = function() {
                d = function(t) {
                    function e() {
                        this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, this.useWorkerLoader = !1, this.originalUrl = null, this.createCache = !1, this.createConstructParams = null, this.createPropertyParams = null, e.__super.call(this);
                    }
                    return y(e, "", u), e;
                }();
            }, f;
        }()),
        Ht = function(t) {
            function e() {
                this.italic = !1, e.__super.call(this);
            }
            y(e, "laya.display.css.TextStyle", t);
            var i = e.prototype;
            return i.reset = function() {
                return t.prototype.reset.call(this), this.italic = !1, this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [0, 0, 0, 0], this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this;
            }, i.recover = function() {
                this !== e.EMPTY && I.recover("TextStyle", this.reset());
            }, i.render = function(t, e, i, n) {
                (this.bgColor || this.borderColor) && e.drawRect(i, n, t.width, t.height, this.bgColor, this.borderColor, 1);
            }, e.create = function() {
                return I.getItemByClass("TextStyle", e);
            }, e.EMPTY = new e(), e;
        }(O),
        Xt = function(t) {
            function n() {
                this.totalCount = 0, this._completeHandler = null, this._toLoadList = null, this._isLoading = !1, this._curUrl = null, n.__super.call(this), this._completeHandler = new x(this, this.onOneLoadComplete), this.reset();
            }
            y(n, "laya.net.SceneLoader", u);
            var e = n.prototype;
            return e.reset = function() {
                this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
            }, e.load = function(t, e, i) {
                if (void 0 === e && (e = !1), void 0 === i && (i = !0), t instanceof Array) {
                    var n, s = 0;
                    for (n = t.length, s = 0; s < n; s++) this._addToLoadList(t[s], e);
                } else this._addToLoadList(t, e);
                i && this._checkNext();
            }, e._addToLoadList = function(t, e) {
                void 0 === e && (e = !1), 0 <= this._toLoadList.indexOf(t) || Ut.getRes(t) || (e ? this._toLoadList.push({
                    url: t
                }) : this._toLoadList.push(t), this.totalCount++);
            }, e._checkNext = function() {
                if (!this._isLoading) {
                    if (0 == this._toLoadList.length) return void this.event("complete");
                    var t;
                    "string" == typeof(t = this._toLoadList.pop()) ? this.loadOne(t): this.loadOne(t.url, !0);
                }
            }, e.loadOne = function(t, e) {
                void 0 === e && (e = !1), this._curUrl = t;
                var i = yt.getFileExtension(this._curUrl);
                e ? v.loader.create(t, this._completeHandler) : n.LoadableExtensions[i] ? v.loader.load(t, this._completeHandler, null, n.LoadableExtensions[i]) : t != St.getFileLoadPath(t) || n.No3dLoadTypes[i] || !Yt.createMap[i] ? v.loader.load(t, this._completeHandler) : v.loader.create(t, this._completeHandler);
            }, e.onOneLoadComplete = function() {
                this._isLoading = !1, Ut.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
                var t, e = yt.getFileExtension(this._curUrl);
                n.LoadableExtensions[e] && ((t = Ut.getRes(this._curUrl)) && t instanceof laya.components.Prefab && (t = t.json), t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
                "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event("progress", this.getProgress()), this._checkNext();
            }, e.getProgress = function() {
                return this.loadedCount / this.totalCount;
            }, f(0, e, "loadedCount", function() {
                return this.totalCount - this.leftCount;
            }), f(0, e, "leftCount", function() {
                return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
            }), i(n, ["LoadableExtensions", function() {
                return this.LoadableExtensions = {
                    scene: "json",
                    scene3d: "json",
                    ani: "json",
                    ui: "json",
                    prefab: "prefab"
                };
            }, "No3dLoadTypes", function() {
                return this.No3dLoadTypes = {
                    png: !0,
                    jpg: !0,
                    txt: !0
                };
            }]), n;
        }(),
        zt = function(t) {
            function s() {
                this.worker = null, this._useWorkerLoader = !1, s.__super.call(this);
                var e = this;
                this.worker = new rt.window.Worker(s.workerPath), this.worker.onmessage = function(t) {
                    e.workerMessage(t.data);
                };
            }
            y(s, "laya.net.WorkerLoader", u);
            var e = s.prototype;
            return e.workerMessage = function(t) {
                if (t) switch (t.type) {
                    case "Image":
                        this.imageLoaded(t);
                        break;
                    case "Disable":
                        s.enable = !1;
                }
            }, e.imageLoaded = function(t) {
                if (t.dataType && "imageBitmap" == t.dataType) {
                    var e = new Jt(!0),
                        i = e.source.getContext("2d");
                    switch (t.dataType) {
                        case "imageBitmap":
                            var n = t.imageBitmap;
                            e.size(n.width, n.height), i.drawImage(n, 0, 0);
                    }
                    if (console.log("load:", t.url), it.isWebGL) {
                        e._setGPUMemory(0);
                        var s = new laya.webgl.resource.Texture2D();
                        s.loadImageSource(e), e = s;
                    }
                    this.event(t.url, e);
                } else this.event(t.url, null);
            }, e.loadImage = function(t) {
                this.worker.postMessage(t);
            }, e._loadImage = function(e) {
                var i = this;
                if (this._useWorkerLoader && s._enable) {
                    e = B.formatURL(e);
                    var n = function(t) {
                        laya.net.WorkerLoader.I.off(e, i, n), t ? i.onLoaded(t) : s._preLoadFun.call(i, e);
                    };
                    laya.net.WorkerLoader.I.on(e, i, n), laya.net.WorkerLoader.I.loadImage(e);
                } else s._preLoadFun.call(i, e);
            }, f(1, s, "enable", function() {
                return s._enable;
            }, function(t) {
                s._enable != t && (s._enable = t) && null == s._preLoadFun && (s._enable = s.__init__());
            }), s.__init__ = function() {
                return null == s._preLoadFun && (!!rt.window.Worker && (s._preLoadFun = Ut.prototype._loadImage, Ut.prototype._loadImage = s.prototype._loadImage, s.I || (s.I = new s()), !0));
            }, s.workerSupported = function() {
                return !!rt.window.Worker;
            }, s.enableWorkerLoader = function() {
                s._tryEnabled || (s.enable = !0, s._tryEnabled = !0);
            }, s.I = null, s.workerPath = "libs/workerloader.js", s._preLoadFun = null, s._enable = !1, s._tryEnabled = !1, s;
        }(),
        Vt = function(s) {
            function e() {
                this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._visible = !0, this._mouseState = 0, this._zOrder = 0, this._renderType = 0, this._transform = null, this._tfChanged = !1, this._texture = null, this._boundStyle = null, this._graphics = null, this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, e.__super.call(this), this._repaint = 0, this._style = O.EMPTY, this._cacheStyle = N.EMPTY;
            }
            y(e, "laya.display.Sprite", s);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), s.prototype.destroy.call(this, t), this._style && this._style.recover(), this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, this.texture = null;
            }, t.updateZOrder = function() {
                yt.updateOrder(this._children) && this.repaint();
            }, t._getBoundsStyle = function() {
                return this._boundStyle || (this._boundStyle = et.create()), this._boundStyle;
            }, t._setCustomRender = function() {}, t._setCacheAs = function(t) {}, t._checkCanvasEnable = function() {
                var t = this._cacheStyle.needEnableCanvasRender();
                (this._getCacheStyle().enableCanvasRender = t) ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, this._cacheStyle.reCache = !0, this._renderType |= 8) : (this._cacheStyle.cacheAs = "none", this._cacheStyle.releaseContext(), this._renderType &= -9), this._setCacheAs(this._cacheStyle.cacheAs), this._setRenderType(this._renderType);
            }, t.reCache = function() {
                this._cacheStyle.reCache = !0, this._repaint |= 2;
            }, t.getRepaint = function() {
                return this._repaint;
            }, t._setX = function(t) {
                this._x = t;
            }, t._setY = function(t) {
                this._y = t;
            }, t._setWidth = function(t, e) {}, t._setHeight = function(t, e) {}, t.setSelfBounds = function(t) {
                this._getBoundsStyle().userBounds = t;
            }, t.getBounds = function() {
                return this._getBoundsStyle().bounds = K._getWrapRec(this._boundPointsToParent());
            }, t.getSelfBounds = function() {
                return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = K._getWrapRec(this._getBoundPointsM(!1)) : K.TEMP.setTo(0, 0, 0, 0);
            }, t._boundPointsToParent = function(t) {
                void 0 === t && (t = !1);
                var e = 0,
                    i = 0;
                this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
                var n = this._getBoundPointsM(t);
                if (!n || n.length < 1) return n;
                if (8 != n.length && (n = t ? L.scanPList(n) : K._getWrapRec(n, K.TEMP)._getBoundPoints()), !this.transform) return yt.transPointList(n, this._x - e, this._y - i), n;
                var s = ct.TEMP,
                    r = 0,
                    o = n.length;
                for (r = 0; r < o; r += 2) s.x = n[r], s.y = n[r + 1], this.toParentPoint(s), n[r] = s.x, n[r + 1] = s.y;
                return n;
            }, t.getGraphicBounds = function(t) {
                return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : K.TEMP.setTo(0, 0, 0, 0);
            }, t._getBoundPointsM = function(t) {
                if (void 0 === t && (t = !1), this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
                if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), this._style.scrollRect) {
                    var e = yt.clearArray(this._boundStyle.temBM),
                        i = K.TEMP;
                    return i.copyFrom(this._style.scrollRect), yt.concatArray(e, i._getBoundPoints()), e;
                }
                var n, s, r, o;
                this._graphics ? n = this._graphics.getBoundPoints() : (n = yt.clearArray(this._boundStyle.temBM), this._texture && ((i = K.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), yt.concatArray(n, i._getBoundPoints())));
                for (var a = 0, h = (o = this._children).length; a < h; a++)(s = o[a]) instanceof laya.display.Sprite && !0 === s._visible && (r = s._boundPointsToParent(t)) && (n = n ? yt.concatArray(n, r) : r);
                return n;
            }, t._getCacheStyle = function() {
                return this._cacheStyle === N.EMPTY && (this._cacheStyle = N.create()), this._cacheStyle;
            }, t.getStyle = function() {
                return this._style === O.EMPTY && (this._style = O.create()), this._style;
            }, t.setStyle = function(t) {
                this._style = t;
            }, t._setScaleX = function(t) {
                this._style.scaleX = t;
            }, t._setScaleY = function(t) {
                this._style.scaleY = t;
            }, t._setRotation = function(t) {
                this._style.rotation = t;
            }, t._setSkewX = function(t) {
                this._style.skewX = t;
            }, t._setSkewY = function(t) {
                this._style.skewY = t;
            }, t._createTransform = function() {
                return G.create();
            }, t._adjustTransform = function() {
                this._tfChanged = !1;
                var t = this._style,
                    e = t.scaleX,
                    i = t.scaleY,
                    n = t.skewX,
                    s = t.skewY,
                    r = t.rotation,
                    o = this._transform || (this._transform = this._createTransform());
                if (r || 1 !== e || 1 !== i || 0 !== n || 0 !== s) {
                    o._bTransform = !0;
                    var a = .0174532922222222 * (r - n),
                        h = .0174532922222222 * (r + s),
                        l = Math.cos(h),
                        u = Math.sin(h),
                        c = Math.sin(a),
                        _ = Math.cos(a);
                    o.a = e * l, o.b = e * u, o.c = -i * c, o.d = i * _, o.tx = o.ty = 0;
                } else o.identity(), this._renderType &= -3, this._setRenderType(this._renderType);
                return o;
            }, t._setTransform = function(t) {}, t._setPivotX = function(t) {
                this.getStyle().pivotX = t;
            }, t._getPivotX = function() {
                return this._style.pivotX;
            }, t._setPivotY = function(t) {
                this.getStyle().pivotY = t;
            }, t._getPivotY = function() {
                return this._style.pivotY;
            }, t._setAlpha = function(t) {
                this._style.alpha !== t && (1 !== (this.getStyle().alpha = t) ? this._renderType |= 1 : this._renderType &= -2, this._setRenderType(this._renderType), this.parentRepaint());
            }, t._getAlpha = function() {
                return this._style.alpha;
            }, t._setBlendMode = function(t) {}, t._setGraphics = function(t) {}, t._setGraphicsCallBack = function() {}, t._setScrollRect = function(t) {}, t.pos = function(t, e, i) {
                if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                    if (this.destroyed) return this;
                    if (i) {
                        this._setX(t), this._setY(e), this.parentRepaint(2);
                        var n = this._cacheStyle.maskParent;
                        n && n.repaint(2);
                    } else this.x = t, this.y = e;
                }
                return this;
            }, t.pivot = function(t, e) {
                return this.pivotX = t, this.pivotY = e, this;
            }, t.size = function(t, e) {
                return this.width = t, this.height = e, this;
            }, t.scale = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = this.getStyle();
                if (n.scaleX != t || n.scaleY != e) {
                    if (this.destroyed) return this;
                    i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, this.scaleY = e);
                }
                return this;
            }, t.skew = function(t, e) {
                return this.skewX = t, this.skewY = e, this;
            }, t.render = function(t, e, i) {
                T.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
            }, t.drawToCanvas = function(t, e, i, n) {
                return bt.drawToCanvas(this, this._renderType, t, e, i, n);
            }, t.customRender = function(t, e, i) {
                this._repaint = 3;
            }, t._applyFilters = function() {
                var t;
                if (!it.isWebGL && ((t = this._cacheStyle.filters) && !(t.length < 1)))
                    for (var e = 0, i = t.length; e < i; e++) t[e]._action && t[e]._action.apply(this._cacheStyle);
            }, t._setColorFilter = function(t) {}, t._isHaveGlowFilter = function() {
                var t, e = 0;
                if (this.filters)
                    for (e = 0; e < this.filters.length; e++)
                        if (8 == this.filters[e].type) return !0;
                for (e = 0, t = this._children.length; e < t; e++)
                    if (this._children[e]._isHaveGlowFilter()) return !0;
                return !1;
            }, t.localToGlobal = function(t, e, i) {
                void 0 === e && (e = !1), !0 === e && (t = new ct(t.x, t.y));
                var n = this;
                for (i = i || v.stage; n && !n.destroyed && n != i;) t = n.toParentPoint(t), n = n.parent;
                return t;
            }, t.globalToLocal = function(t, e, i) {
                void 0 === e && (e = !1), e && (t = new ct(t.x, t.y));
                var n = this,
                    s = [];
                for (i = i || v.stage; n && !n.destroyed && n != i;) s.push(n), n = n.parent;
                for (var r = s.length - 1; 0 <= r;) t = (n = s[r]).fromParentPoint(t), r--;
                return t;
            }, t.toParentPoint = function(t) {
                if (!t) return t;
                t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), t.x += this._x, t.y += this._y;
                var e = this._style.scrollRect;
                return e && (t.x -= e.x, t.y -= e.y), t;
            }, t.fromParentPoint = function(t) {
                if (!t) return t;
                t.x -= this._x, t.y -= this._y;
                var e = this._style.scrollRect;
                return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), t.x += this.pivotX, t.y += this.pivotY, t;
            }, t.fromStagePoint = function(t) {
                return t;
            }, t.on = function(t, e, i, n) {
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(t, e, i, n, !1)) : s.prototype.on.call(this, t, e, i, n);
            }, t.once = function(t, e, i, n) {
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(t, e, i, n, !0)) : s.prototype.once.call(this, t, e, i, n);
            }, t._$2__onDisplay = function() {
                if (1 !== this._mouseState) {
                    var t = this;
                    for (t = t.parent; t && 1 !== t._mouseState && !t._getBit(64);) t.mouseEnabled = !0, t._setBit(64, !0), t = t.parent;
                }
            }, t._setParent = function(t) {
                s.prototype._setParent.call(this, t), t && this._getBit(64) && this._$2__onDisplay();
            }, t.loadImage = function(t, e) {
                var i = this;
                if (null == t) this.texture = null, s();
                else {
                    var n = Ut.getRes(t);
                    n || ((n = new Nt()).load(t), Ut.cacheRes(t, n)), (this.texture = n).getIsReady() ? s() : n.once("ready", null, s);
                }

                function s() {
                    i.repaint(3), e && e.run();
                }
                return this;
            }, t.repaint = function(t) {
                void 0 === t && (t = 2), this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
            }, t._needRepaint = function() {
                return 2 & this._repaint && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
            }, t._childChanged = function(t) {
                this._children.length ? this._renderType |= 8192 : this._renderType &= -8193, this._setRenderType(this._renderType), t && this._getBit(32) && v.systemTimer.callLater(this, this.updateZOrder), this.repaint(3);
            }, t.parentRepaint = function(t) {
                void 0 === t && (t = 2);
                var e = this._parent;
                !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
            }, t._setMask = function(t) {}, t.startDrag = function(t, e, i, n, s, r, o) {
                void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === n && (n = 300), void 0 === r && (r = !1), void 0 === o && (o = .92), this._style.dragging || (this.getStyle().dragging = new lt()), this._style.dragging.start(this, t, e, i, n, s, r, o);
            }, t.stopDrag = function() {
                this._style.dragging && this._style.dragging.stop();
            }, t._setDisplay = function(t) {
                t || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), s.prototype._setDisplay.call(this, t);
            }, t.hitTestPoint = function(t, e) {
                var i = this.globalToLocal(ct.TEMP.setTo(t, e));
                return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : 0 < this._width && 0 < this._height ? K.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
            }, t.getMousePoint = function() {
                return this.globalToLocal(ct.TEMP.setTo(v.stage.mouseX, v.stage.mouseY));
            }, t._setTexture = function(t) {}, t._setRenderType = function(t) {}, t._setTranformChange = function() {
                this._tfChanged = !0, this._renderType |= 2, this.parentRepaint(2);
            }, t._setBgStyleColor = function(t, e, i, n, s) {}, t._setBorderStyleColor = function(t, e, i, n, s, r) {}, t.captureMouseEvent = function(t) {
                d.instance.setCapture(this, t);
            }, t.releaseMouseEvent = function() {
                d.instance.releaseCapture();
            }, f(0, t, "customRenderEnable", null, function(t) {
                t && (this._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender());
            }), f(0, t, "cacheAs", function() {
                return this._cacheStyle.cacheAs;
            }, function(t) {
                t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
            }), f(0, t, "globalScaleY", function() {
                for (var t = 1, e = this; e && e !== v.stage;) t *= e.scaleY, e = e.parent;
                return t;
            }), f(0, t, "hitArea", function() {
                return this._style.hitArea;
            }, function(t) {
                this.getStyle().hitArea = t;
            }), f(0, t, "staticCache", function() {
                return this._cacheStyle.staticCache;
            }, function(t) {
                (this._getCacheStyle().staticCache = t) || this.reCache();
            }), f(0, t, "displayWidth", function() {
                return this.width * this.scaleX;
            }), f(0, t, "zOrder", function() {
                return this._zOrder;
            }, function(t) {
                this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(32, !0), v.systemTimer.callLater(this._parent, this.updateZOrder)));
            }), f(0, t, "rotation", function() {
                return this._style.rotation;
            }, function(t) {
                this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange());
            }), f(0, t, "width", function() {
                return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
            }, function(t) {
                this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
            }), f(0, t, "x", function() {
                return this._x;
            }, function(t) {
                if (!this.destroyed && this._x !== t) {
                    this._setX(t), this.parentRepaint(2);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(2);
                }
            }), f(0, t, "drawCallOptimize", function() {
                return this._getBit(256);
            }, function(t) {
                this._setBit(256, t);
            }), f(0, t, "texture", function() {
                return this._texture;
            }, function(t) {
                "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), (this._texture = t) && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), this._setHeight(this._texture, this.height), t ? this._renderType |= 256 : this._renderType &= -257, this._setRenderType(this._renderType), this.repaint());
            }), f(0, t, "globalRotation", function() {
                for (var t = 0, e = this; e && e !== v.stage;) t += e.rotation, e = e.parent;
                return t;
            }), f(0, t, "y", function() {
                return this._y;
            }, function(t) {
                if (!this.destroyed && this._y !== t) {
                    this._setY(t), this.parentRepaint(2);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(2);
                }
            }), f(0, t, "displayHeight", function() {
                return this.height * this.scaleY;
            }), f(0, t, "height", function() {
                return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
            }, function(t) {
                this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
            }), f(0, t, "blendMode", function() {
                return this._style.blendMode;
            }, function(t) {
                this._setBlendMode(t), (this.getStyle().blendMode = t) && "source-over" != t ? this._renderType |= 4 : this._renderType &= -5, this._setRenderType(this._renderType), this.parentRepaint();
            }), f(0, t, "scaleX", function() {
                return this._style.scaleX;
            }, function(t) {
                this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange());
            }), f(0, t, "scaleY", function() {
                return this._style.scaleY;
            }, function(t) {
                this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange());
            }), f(0, t, "stage", function() {
                return v.stage;
            }), f(0, t, "skewX", function() {
                return this._style.skewX;
            }, function(t) {
                this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange());
            }), f(0, t, "scrollRect", function() {
                return this._style.scrollRect;
            }, function(t) {
                this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= 64 : this._renderType &= -65, this._setRenderType(this._renderType);
            }), f(0, t, "skewY", function() {
                return this._style.skewY;
            }, function(t) {
                this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange());
            }), f(0, t, "transform", function() {
                return this._tfChanged ? this._adjustTransform() : this._transform;
            }, function(t) {
                this._tfChanged = !1;
                var e = this._transform || (this._transform = this._createTransform());
                t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), t ? this._renderType |= 2 : this._renderType &= -3, this._setRenderType(this._renderType), this.parentRepaint();
            }), f(0, t, "pivotX", function() {
                return this._getPivotX();
            }, function(t) {
                this._setPivotX(t), this.repaint();
            }), f(0, t, "pivotY", function() {
                return this._getPivotY();
            }, function(t) {
                this._setPivotY(t), this.repaint();
            }), f(0, t, "alpha", function() {
                return this._getAlpha();
            }, function(t) {
                t = t < 0 ? 0 : 1 < t ? 1 : t, this._setAlpha(t);
            }), f(0, t, "visible", function() {
                return this._visible;
            }, function(t) {
                this._visible !== t && (this._visible = t, this.parentRepaint(3));
            }), f(0, t, "graphics", function() {
                return this._graphics || (this.graphics = new gt(), this._graphics.autoDestroy = !0), this._graphics;
            }, function(t) {
                this._graphics && (this._graphics._sp = null), (this._graphics = t) ? (this._setGraphics(t), this._renderType |= 512, t._sp = this) : this._renderType &= -513, this._setRenderType(this._renderType), this.repaint();
            }), f(0, t, "filters", function() {
                return this._cacheStyle.filters;
            }, function(t) {
                t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, it.isWebGL && (t && t.length ? (this._setColorFilter(t[0]), this._renderType |= 16) : (this._setColorFilter(null), this._renderType &= -17), this._setRenderType(this._renderType)), t && 0 < t.length ? (this._getBit(16) || this._setBitUp(16), it.isWebGL && 1 == t.length && t[0] instanceof laya.filters.ColorFilter || (this._getCacheStyle().cacheForFilters = !0, this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), this.repaint());
            }), f(0, t, "mask", function() {
                return this._cacheStyle.mask;
            }, function(t) {
                t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), this._renderType |= 32, this._setRenderType(this._renderType), this.parentRepaint(3));
            }), f(0, t, "mouseEnabled", function() {
                return 1 < this._mouseState;
            }, function(t) {
                this._mouseState = t ? 2 : 1;
            }), f(0, t, "globalScaleX", function() {
                for (var t = 1, e = this; e && e !== v.stage;) t *= e.scaleX, e = e.parent;
                return t;
            }), f(0, t, "mouseX", function() {
                return this.getMousePoint().x;
            }), f(0, t, "mouseY", function() {
                return this.getMousePoint().y;
            }), f(0, t, "viewport", function() {
                return this._style.viewport;
            }, function(t) {
                var e;
                "string" == typeof t && (3 < (e = t.split(",")).length && (t = new K(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]))));
                this.getStyle().viewport = t;
            }), e.fromImage = function(t) {
                return new e().loadImage(t);
            }, e;
        }(Bt),
        jt = function(t) {
            function e() {
                e.__super.call(this), this._width = -1, this._height = -1;
            }
            y(e, "laya.resource.Bitmap", Ot);
            var i = e.prototype;
            return i._getSource = function() {
                throw "Bitmap: must override it.";
            }, f(0, i, "width", function() {
                return this._width;
            }), f(0, i, "height", function() {
                return this._height;
            }), e;
        }(),
        Kt = function(t) {
            function e() {
                this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, this.context = Gt.ctx, e.__super.call(this), this._onPlayEnd = yt.bind(this.__onPlayEnd, this), this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode();
            }
            y(e, "laya.media.webaudio.WebAudioSoundChannel", t);
            var i = e.prototype;
            return i.play = function() {
                if (Lt.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                    var t = this.context,
                        e = this.gain,
                        i = t.createBufferSource();
                    (this.bufferSource = i).buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), this._startTime = rt.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .001) : this.gain.gain.value = this._volume, 0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(Lt.playbackRate, this.context.currentTime, .001) : i.playbackRate.value = Lt.playbackRate, i.start(0, this.startTime), this._currentTime = 0;
                }
            }, i.__onPlayEnd = function() {
                if (1 == this.loops) return this.completeHandler && (v.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
                0 < this.loops && this.loops--, this.startTime = 0, this.play();
            }, i._clearBufferSource = function() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), this.bufferSource = null;
                }
            }, i._tryClearBuffer = function(t) {
                if (rt.onMac) try {
                    t.buffer = Gt._miniBuffer;
                } catch (t) {
                    e._tryCleanFailed = !0;
                } else try {
                    t.buffer = null;
                } catch (t) {
                    e._tryCleanFailed = !0;
                }
            }, i.stop = function() {
                t.prototype.stop.call(this), this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, Lt.removeChannel(this), this.completeHandler = null, Lt.autoReleaseSound && Lt.disposeSoundLater(this.url);
            }, i.pause = function() {
                this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, Lt.removeChannel(this), Lt.autoReleaseSound && Lt.disposeSoundLater(this.url);
            }, i.resume = function() {
                this.startTime = this._pauseTime, this.play();
            }, f(0, i, "position", function() {
                return this.bufferSource ? (rt.now() - this._startTime) / 1e3 + this.startTime : 0;
            }), f(0, i, "duration", function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }), f(0, i, "volume", function() {
                return this._volume;
            }, function(t) {
                this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .001) : this.gain.gain.value = t);
            }), e._tryCleanFailed = !1, e.SetTargetDelay = .001, e;
        }(Ft),
        $t = function(t) {
            function e(t) {
                this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), this._onEnd = yt.bind(this.__onEnd, this), this._resumePlay = yt.bind(this.__resumePlay, this), t.addEventListener("ended", this._onEnd), this._audio = t;
            }
            y(e, "laya.media.h5audio.AudioSoundChannel", t);
            var i = e.prototype;
            return i.__onEnd = function() {
                if (1 == this.loops) return this.completeHandler && (v.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
                0 < this.loops && this.loops--, this.startTime = 0, this.play();
            }, i.__resumePlay = function() {
                if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), !this.isStopped) try {
                    this._audio.currentTime = this.startTime, rt.container.appendChild(this._audio), this._audio.play();
                } catch (t) {
                    this.event("error");
                }
            }, i.play = function() {
                this.isStopped = !1;
                try {
                    this._audio.playbackRate = Lt.playbackRate, this._audio.currentTime = this.startTime;
                } catch (t) {
                    return void this._audio.addEventListener("canplay", this._resumePlay);
                }
                Lt.addChannel(this), rt.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
            }, i.stop = function() {
                t.prototype.stop.call(this), this.isStopped = !0, Lt.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && it.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), rt.onIE || this._audio != Rt._musicAudio && I.recover("audio:" + this.url, this._audio), rt.removeElement(this._audio), this._audio = null);
            }, i.pause = function() {
                this.isStopped = !0, Lt.removeChannel(this), "pause" in this._audio && this._audio.pause();
            }, i.resume = function() {
                this._audio && (this.isStopped = !1, Lt.addChannel(this), "play" in this._audio && this._audio.play());
            }, f(0, i, "position", function() {
                return this._audio ? this._audio.currentTime : 0;
            }), f(0, i, "duration", function() {
                return this._audio ? this._audio.duration : 0;
            }), f(0, i, "volume", function() {
                return this._audio ? this._audio.volume : 1;
            }, function(t) {
                this._audio && (this._audio.volume = t);
            }), e;
        }(Ft),
        qt = function(e) {
            function d() {
                this._clipPoint = null, this._text = null, this._isChanged = !1, this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0, this._startY = 0, this._words = null, this._charSize = {}, this._valign = "top", this._color = "#000000", this._singleCharRender = !1, d.__super.call(this), this._fontSize = d.defaultFontSize, this._font = d.defaultFont, this.overflow = "visible", this._style = Ht.EMPTY;
            }
            y(d, "laya.display.Text", e);
            var t = d.prototype;
            return t.getStyle = function() {
                return this._style === Ht.EMPTY && (this._style = Ht.create()), this._style;
            }, t._getTextStyle = function() {
                return this._style === Ht.EMPTY && (this._style = Ht.create()), this._style;
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), e.prototype.destroy.call(this, t), this._clipPoint = null, this._lines = null, this._lineWidths = null, this._words = null, this._charSize = null;
            }, t._getBoundPointsM = function(t) {
                void 0 === t && (t = !1);
                var e = K.TEMP;
                return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
            }, t.getGraphicBounds = function(t) {
                void 0 === t && (t = !1);
                var e = K.TEMP;
                return e.setTo(0, 0, this.width, this.height), e;
            }, t._getCSSStyle = function() {
                return this._style;
            }, t.lang = function(t, e, i, n, s, r, o, a, h, l, u) {
                if (t = d.langPacks && d.langPacks[t] ? d.langPacks[t] : t, arguments.length < 2) this._text = t;
                else {
                    for (var c = 0, _ = arguments.length; c < _; c++) t = t.replace("{" + c + "}", arguments[c + 1]);
                    this._text = t;
                }
            }, t._getContextFont = function() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (rt.onIPhone && laya.display.Text.fontFamilyMap[this.font] || this.font);
            }, t._isPassWordMode = function() {
                var t = this._style.asPassword;
                return "prompt" in this && this.prompt == this._text && (t = !1), t;
            }, t._getPassWordTxt = function(t) {
                var e;
                e = "";
                for (var i = t.length; 0 < i; i--) e += "●";
                return e;
            }, t._renderText = function() {
                var t = this.padding,
                    e = this._lines.length;
                "visible" != this.overflow && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
                var i = this.scrollY / (this._charSize.height + this.leading) | 0,
                    n = this.graphics;
                n.clear(!0);
                var s = this._getContextFont();
                rt.context.font = s;
                var r = t[3],
                    o = "left",
                    a = this._lines,
                    h = this.leading + this._charSize.height,
                    l = this._style.currBitmapFont;
                l && (h = this.leading + l.getMaxHeight());
                var u = t[0];
                if (!l && 0 < this._width && this._textWidth <= this._width && ("right" == this.align ? (o = "right", r = this._width - t[1]) : "center" == this.align && (o = "center", r = .5 * this._width + t[3] - t[1])), 0 < this._height) {
                    var c = this._textHeight > this._height ? "top" : this.valign;
                    "middle" === c ? u = .5 * (this._height - e * h) + t[0] - t[2] : "bottom" === c && (u = this._height - e * h - t[2]);
                }
                var _ = this._style;
                if (l && l.autoScaleSize) var d = l.fontSize / this.fontSize;
                if (this._clipPoint) {
                    if (n.save(), l && l.autoScaleSize) {
                        var f = 0,
                            p = 0;
                        f = this._width ? this._width - t[3] - t[1] : this._textWidth, p = this._height ? this._height - t[0] - t[2] : this._textHeight, f *= d, p *= d, n.clipRect(t[3], t[0], f, p);
                    } else n.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                    this.repaint();
                }
                var g = _.asPassword;
                "prompt" in this && this.prompt == this._text && (g = !1);
                for (var m = 0, v = 0, y = Math.min(this._lines.length, e + i) || 1, x = i; x < y; x++) {
                    var w, T = a[x];
                    if (g) {
                        var C = T.length;
                        T = "";
                        for (var b = C; 0 < b; b--) T += "●";
                    }
                    if (null == T && (T = ""), m = r - (this._clipPoint ? this._clipPoint.x : 0), v = u + h * x - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this._drawUnderline(o, m, v, x), l) {
                        var S = this.width;
                        l.autoScaleSize && (S = this.width * d), l._drawText(T, this, m, v, this.align, S);
                    } else it.isWebGL ? (this._words || (this._words = []), (w = this._words.length > x - i ? this._words[x - i] : new M()).setText(T), w.splitRender = this._singleCharRender) : w = T, _.stroke ? n.fillBorderText(w, m, v, s, this.color, _.strokeColor, _.stroke, o) : n.fillText(w, m, v, s, this.color, o);
                }
                if (l && l.autoScaleSize) {
                    var I = 1 / d;
                    this.scale(I, I);
                }
                this._clipPoint && n.restore(), this._startX = r, this._startY = u;
            }, t._drawUnderline = function(t, e, i, n) {
                var s = this._lineWidths[n];
                switch (t) {
                    case "center":
                        e -= s / 2;
                        break;
                    case "right":
                        e -= s;
                }
                i += this._charSize.height, this._graphics.drawLine(e, i, e + s, i, this.underlineColor || this.color, 1);
            }, t.typeset = function() {
                if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, void this.graphics.clear(!0);
                it.isConchApp ? g.conchTextCanvas.font = this._getContextFont() : rt.context.font = this._getContextFont(), this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new ct(0, 0)) : this._clipPoint = null, this._renderText();
            }, t._evalTextSize = function() {
                var t, e = NaN;
                t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e);
            }, t._checkEnabledViewportOrNot = function() {
                return "scroll" == this.overflow && (0 < this._width && this._textWidth > this._width || 0 < this._height && this._textHeight > this._height);
            }, t.changeText = function(t) {
                this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
            }, t._parseLines = function(t) {
                var e = this.wordWrap || "hidden" == this.overflow;
                if (e) var i = this._getWordWrapWidth();
                var n = this._style.currBitmapFont;
                if (n) this._charSize.width = n.getMaxWidth(), this._charSize.height = n.getMaxHeight();
                else {
                    var s = null;
                    (s = it.isConchApp ? g.conchTextCanvas.measureText(this._testWord) : rt.context.measureText(d._testWord)) || (s = {
                        width: 100
                    }), this._charSize.width = s.width, this._charSize.height = s.height || this.fontSize;
                }
                for (var r = t.replace(/\r\n/g, "\n").split("\n"), o = 0, a = r.length; o < a; o++) {
                    var h = r[o];
                    e ? this._parseLine(h, i) : (this._lineWidths.push(this._getTextWidth(h)), this._lines.push(h));
                }
            }, t._parseLine = function(t, e) {
                rt.context;
                var i, n = this._lines,
                    s = 0,
                    r = NaN,
                    o = NaN,
                    a = 0;
                if ((r = this._getTextWidth(t)) <= e) return n.push(t), void this._lineWidths.push(r);
                r = this._charSize.width, 0 == (s = Math.floor(e / r)) && (s = 1), o = r = this._getTextWidth(t.substring(0, s));
                for (var h = s, l = t.length; h < l; h++)
                    if (e < (o += r = this._getTextWidth(t.charAt(h))))
                        if (this.wordWrap) {
                            var u = t.substring(a, h);
                            if (u.charCodeAt(u.length - 1) < 255 && (i = /(?:\w|-)+$/.exec(u)) && (h = i.index + a, 0 == i.index ? h += u.length : u = t.substring(a, h)), n.push(u), this._lineWidths.push(o - r), !((a = h) + s < l)) {
                                n.push(t.substring(a, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])), a = -1;
                                break;
                            }
                            h += s, o = r = this._getTextWidth(t.substring(a, h)), h--;
                        } else if ("hidden" == this.overflow) return n.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(n[n.length - 1]));
                this.wordWrap && -1 != a && (n.push(t.substring(a, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])));
            }, t._getTextWidth = function(t) {
                var e = this._style.currBitmapFont;
                return e ? e.getTextWidth(t) : it.isConchApp ? g.conchTextCanvas.measureText(t).width : rt.context.measureText(t).width;
            }, t._getWordWrapWidth = function() {
                var t = this.padding,
                    e = NaN,
                    i = this._style.currBitmapFont;
                return (e = i && i.autoScaleSize ? this._width * (i.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : rt.width), e <= 0 && (e = 100), e - t[3] - t[1];
            }, t.getCharPoint = function(t, e) {
                this._isChanged && v.systemTimer.runCallLater(this, this.typeset);
                for (var i = 0, n = this._lines, s = 0, r = 0, o = n.length; r < o; r++) {
                    if (t < (i += n[r].length)) {
                        var a = r;
                        break;
                    }
                    s = i;
                }
                var h = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                rt.context.font = h;
                var l = this._getTextWidth(this._text.substring(s, t));
                return (e || new ct()).setTo(this._startX + l - (this._clipPoint ? this._clipPoint.x : 0), this._startY + a * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
            }, f(0, t, "width", function() {
                return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
            }, function(t) {
                t != this._width && (v.superSet(Vt, this, "width", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }), f(0, t, "textWidth", function() {
                return this._isChanged && v.systemTimer.runCallLater(this, this.typeset), this._textWidth;
            }), f(0, t, "height", function() {
                return this._height ? this._height : this.textHeight;
            }, function(t) {
                t != this._height && (v.superSet(Vt, this, "height", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }), f(0, t, "textHeight", function() {
                return this._isChanged && v.systemTimer.runCallLater(this, this.typeset), this._textHeight;
            }), f(0, t, "padding", function() {
                return this._style.padding;
            }, function(t) {
                if ("string" == typeof t) {
                    var e, i, n = 0;
                    for (i = (e = t.split(",")).length; e.length < 4;) e.push(0);
                    for (n = 0; n < i; n++) e[n] = parseFloat(e[n]) || 0;
                    t = e;
                }
                this._getTextStyle().padding = t, this.isChanged = !0;
            }), f(0, t, "bold", function() {
                return this._style.bold;
            }, function(t) {
                this._getTextStyle().bold = t, this.isChanged = !0;
            }), f(0, t, "text", function() {
                return this._text || "";
            }, function(t) {
                this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"), this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }), f(0, t, "color", function() {
                return this._color;
            }, function(t) {
                this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
            }), f(0, t, "font", function() {
                return this._font;
            }, function(t) {
                this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), d._bitmapFonts && d._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = d._bitmapFonts[t]), this._font = t, this.isChanged = !0;
            }), f(0, t, "fontSize", function() {
                return this._fontSize;
            }, function(t) {
                this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
            }), f(0, t, "italic", function() {
                return this._style.italic;
            }, function(t) {
                this._getTextStyle().italic = t, this.isChanged = !0;
            }), f(0, t, "align", function() {
                return this._style.align;
            }, function(t) {
                this._getTextStyle().align = t, this.isChanged = !0;
            }), f(0, t, "valign", function() {
                return this._valign;
            }, function(t) {
                this._valign = t, this.isChanged = !0;
            }), f(0, t, "wordWrap", function() {
                return this._style.wordWrap;
            }, function(t) {
                this._getTextStyle().wordWrap = t, this.isChanged = !0;
            }), f(0, t, "singleCharRender", function() {
                return this._singleCharRender;
            }, function(t) {
                this._singleCharRender = t;
            }), f(0, t, "leading", function() {
                return this._style.leading;
            }, function(t) {
                this._getTextStyle().leading = t, this.isChanged = !0;
            }), f(0, t, "bgColor", function() {
                return this._style.bgColor;
            }, function(t) {
                this._getTextStyle().bgColor = t, this._renderType |= 128, this._setBgStyleColor(0, 0, this.width, this.height, t), this._setRenderType(this._renderType), this.isChanged = !0;
            }), f(0, t, "borderColor", function() {
                return this._style.borderColor;
            }, function(t) {
                this._getTextStyle().borderColor = t, this._renderType |= 128, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), this._setRenderType(this._renderType), this.isChanged = !0;
            }), f(0, t, "stroke", function() {
                return this._style.stroke;
            }, function(t) {
                this._getTextStyle().stroke = t, this.isChanged = !0;
            }), f(0, t, "strokeColor", function() {
                return this._style.strokeColor;
            }, function(t) {
                this._getTextStyle().strokeColor = t, this.isChanged = !0;
            }), f(0, t, "isChanged", null, function(t) {
                this._isChanged !== t && (this._isChanged = t) && v.systemTimer.callLater(this, this.typeset);
            }), f(0, t, "scrollX", function() {
                return this._clipPoint ? this._clipPoint.x : 0;
            }, function(t) {
                if (!("scroll" != this.overflow || this.textWidth < this._width) && this._clipPoint) {
                    t = t < this.padding[3] ? this.padding[3] : t;
                    var e = this._textWidth - this._width;
                    t = e < t ? e : t, this._clipPoint.x = t, this._renderText();
                }
            }), f(0, t, "scrollY", function() {
                return this._clipPoint ? this._clipPoint.y : 0;
            }, function(t) {
                if (!("scroll" != this.overflow || this.textHeight < this._height) && this._clipPoint) {
                    t = t < this.padding[0] ? this.padding[0] : t;
                    var e = this._textHeight - this._height;
                    t = e < t ? e : t, this._clipPoint.y = t, this._renderText();
                }
            }), f(0, t, "maxScrollX", function() {
                return this.textWidth < this._width ? 0 : this._textWidth - this._width;
            }), f(0, t, "maxScrollY", function() {
                return this.textHeight < this._height ? 0 : this._textHeight - this._height;
            }), f(0, t, "lines", function() {
                return this._isChanged && this.typeset(), this._lines;
            }), f(0, t, "underlineColor", function() {
                return this._style.underlineColor;
            }, function(t) {
                this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
            }), f(0, t, "underline", function() {
                return this._style.underline;
            }, function(t) {
                this._getTextStyle().underline = t;
            }), d.defaultFontStr = function() {
                return d.defaultFontSize + "px " + d.defaultFont;
            }, d.registerBitmapFont = function(t, e) {
                d._bitmapFonts || (d._bitmapFonts = {}), d._bitmapFonts[t] = e;
            }, d.unregisterBitmapFont = function(t, e) {
                if (void 0 === e && (e = !0), d._bitmapFonts && d._bitmapFonts[t]) {
                    var i = d._bitmapFonts[t];
                    e && i.destroy(), delete d._bitmapFonts[t];
                }
            }, d.VISIBLE = "visible", d.SCROLL = "scroll", d.HIDDEN = "hidden", d.defaultFontSize = 12, d.defaultFont = "Arial", d.langPacks = null, d.isComplexText = !1, d._testWord = "游", d._bitmapFonts = null, d.CharacterCache = !0, d.RightToLeft = !1, i(d, ["fontFamilyMap", function() {
                return this.fontFamilyMap = {
                    "报隶": "报隶-简",
                    "黑体": "黑体-简",
                    "楷体": "楷体-简",
                    "兰亭黑": "兰亭黑-简",
                    "隶变": "隶变-简",
                    "凌慧体": "凌慧体-简",
                    "翩翩体": "翩翩体-简",
                    "苹方": "苹方-简",
                    "手札体": "手札体-简",
                    "宋体": "宋体-简",
                    "娃娃体": "娃娃体-简",
                    "魏碑": "魏碑-简",
                    "行楷": "行楷-简",
                    "雅痞": "雅痞-简",
                    "圆体": "圆体-简"
                };
            }]), d;
        }(Vt),
        Qt = function(e) {
            function t() {
                this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._actionName = null, this._controlNode = null, t.__super.call(this), this._interval = wt.animationInterval, this._setBitUp(16);
            }
            y(t, "laya.display.AnimationBase", e);
            var i = t.prototype;
            return i.play = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._isReverse = 1 === this.wrapMode, 0 == this.index && this._isReverse && (this.index = this.count - 1), 0 < this.interval && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
            }, i._getFrameByLabel = function(t) {
                for (var e = 0; e < this._count; e++) {
                    var i = this._labels[e];
                    if (i && -1 < i.indexOf(t)) return e;
                }
                return 0;
            }, i._frameLoop = function() {
                if (this._isReverse) {
                    if (this._index--, this._index < 0) {
                        if (!this.loop) return this._index = 0, this.stop(), void this.event("complete");
                        2 == this.wrapMode ? (this._index = 0 < this._count ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event("complete");
                    }
                } else if (this._index++, this._index >= this._count) {
                    if (!this.loop) return this._index--, this.stop(), void this.event("complete");
                    2 == this.wrapMode ? (this._index = 0 <= this._count - 2 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event("complete");
                }
                this.index = this._index;
            }, i._setControlNode = function(t) {
                this._controlNode && (this._controlNode.off("display", this, this._resumePlay), this._controlNode.off("undisplay", this, this._resumePlay)), (this._controlNode = t) && t != this && (t.on("display", this, this._resumePlay), t.on("undisplay", this, this._resumePlay));
            }, i._setDisplay = function(t) {
                e.prototype._setDisplay.call(this, t), this._resumePlay();
            }, i._resumePlay = function() {
                this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
            }, i.stop = function() {
                this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
            }, i.addLabel = function(t, e) {
                this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), this._labels[e].push(t);
            }, i.removeLabel = function(t) {
                if (t) {
                    if (this._labels)
                        for (var e in this._labels) this._removeLabelFromList(this._labels[e], t);
                } else this._labels = null;
            }, i._removeLabelFromList = function(t, e) {
                if (t)
                    for (var i = t.length - 1; 0 <= i; i--) t[i] == e && t.splice(i, 1);
            }, i.gotoAndStop = function(t) {
                this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
            }, i._displayToIndex = function(t) {}, i.clear = function() {
                return this.stop(), this._labels = null, this;
            }, f(0, i, "interval", function() {
                return this._interval;
            }, function(t) {
                this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && 0 < t && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
            }), f(0, i, "isPlaying", function() {
                return this._isPlaying;
            }), f(0, i, "index", function() {
                return this._index;
            }, function(t) {
                if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
                    for (var e = this._labels[t], i = 0, n = e.length; i < n; i++) this.event("label", e[i]);
            }), f(0, i, "count", function() {
                return this._count;
            }), t.WRAP_POSITIVE = 0, t.WRAP_REVERSE = 1, t.WRAP_PINGPONG = 2, t;
        }(Vt),
        Jt = (function(t) {
            function e() {
                this.url = null, this._channel = null, this._tar = null, this._playEvents = null, this._stopEvents = null, e.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), this.on("removed", this, this._onParentChange);
            }
            y(e, "laya.media.SoundNode", Vt);
            var i = e.prototype;
            i._onParentChange = function() {
                this.target = this.parent;
            }, i.play = function(t, e) {
                void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = Lt.playSound(this.url, t, e));
            }, i.stop = function() {
                this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
            }, i._setPlayAction = function(t, e, i, n) {
                void 0 === n && (n = !0), this[i] && t && (n ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
            }, i._setPlayActions = function(t, e, i, n) {
                if (void 0 === n && (n = !0), t && e) {
                    var s, r = e.split(","),
                        o = 0;
                    for (s = r.length, o = 0; o < s; o++) this._setPlayAction(t, r[o], i, n);
                }
            }, f(0, i, "playEvent", null, function(t) {
                (this._playEvents = t) && this._tar && this._setPlayActions(this._tar, t, "play");
            }), f(0, i, "target", null, function(t) {
                this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
            }), f(0, i, "stopEvent", null, function(t) {
                (this._stopEvents = t) && this._tar && this._setPlayActions(this._tar, t, "stop");
            });
        }(), function(t) {
            function e(t) {
                e.__super.call(this), void 0 === t && (t = !1), t || !it.isWebGL ? this._source = rt.createElement("canvas") : this._source = this, this.lock = !0;
            }
            y(e, "laya.resource.HTMLCanvas", jt);
            var i = e.prototype;
            return i._getSource = function() {
                return this._source;
            }, i.clear = function() {
                this._ctx && this._ctx.clear(), this._texture && (this._texture.destroy(), this._texture = null);
            }, i.destroy = function() {
                laya.resource.Resource.prototype.destroy.call(this), this._setCPUMemory(0), this._ctx && this._ctx.destroy(), this._ctx = null;
            }, i.release = function() {}, i._setContext = function(t) {
                this._ctx = t;
            }, i.getContext = function(t, e) {
                return this.context;
            }, i.getMemSize = function() {
                return 0;
            }, i.size = function(t, e) {
                (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t, this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), this._texture = null));
            }, i.getTexture = function() {
                return this._texture || (this._texture = new Nt(this, Nt.DEF_UV)), this._texture;
            }, i.toBase64 = function(t, e) {
                if (this._source) {
                    if (it.isConchApp) {
                        if (2 == conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                        var i = this._ctx._targets.sourceWidth,
                            n = this._ctx._targets.sourceHeight,
                            s = this._ctx._targets.getData(0, 0, i, n);
                        return conchToBase64(t, e, s.buffer, i, n);
                    }
                    return this._source.toDataURL(t, e);
                }
                return null;
            }, i.toBase64Async = function(i, n, s) {
                var r = this._ctx._targets.sourceWidth,
                    o = this._ctx._targets.sourceHeight;
                this._ctx._targets.getDataAsync(0, 0, r, o, function(t) {
                    var e = conchToBase64(i, n, t.buffer, r, o);
                    s(e);
                });
            }, f(0, i, "source", function() {
                return this._source;
            }), f(0, i, "context", function() {
                return this._ctx ? this._ctx : (it.isWebGL && this._source == this ? this._ctx = new laya.webgl.canvas.WebGLContext2D() : this._ctx = this._source.getContext(it.isConchApp ? "layagl" : "2d"), (this._ctx._canvas = this)._ctx);
            }), e;
        }()),
        Zt = function(t) {
            function n() {
                n.__super.call(this);
            }
            y(n, "laya.resource.HTMLImage", jt);
            var e = n.prototype;
            return e.loadImageSource = function(t) {
                var e = t.width,
                    i = t.height;
                if (e <= 0 || i <= 0) throw new Error("HTMLImage:width or height must large than 0.");
                this._width = e, this._height = i, this._source = t, this._setGPUMemory(e * i * 4), this._activeResource();
            }, e._disposeResource = function() {
                this._source && (this._source = null, this._setGPUMemory(0));
            }, e._getSource = function() {
                return this._source;
            }, n.create = function(t, e, i) {
                return new n();
            }, n;
        }(),
        te = function(h) {
            function l() {
                this.focus = null, this._frameRate = "fast", this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._safariOffsetY = 0, this._frameStartTime = 0, this._isFocused = !1, this._isVisibility = !1, this._wgColor = [0, 0, 0, 1], this._scene3Ds = [], this._globalRepaintSet = !1, this._globalRepaintGet = !1, this._curUIBase = null, this.useRetinalCanvas = !1, l.__super.call(this), this.offset = new ct(), this._canvasTransform = new G(), this._previousOrientation = rt.window.orientation, this._3dUI = [];
                var e = this;
                this.transform = G.create(), this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, this._setBit(128, !0), this._setBit(2, !0), this._isFocused = !0, this._isVisibility = !0, this.useRetinalCanvas = wt.useRetinalCanvas;
                var t = rt.window,
                    i = this;
                t.addEventListener("focus", function() {
                    e._isFocused = !0, i.event("focus"), i.event("focuschange");
                }), t.addEventListener("blur", function() {
                    e._isFocused = !1, i.event("blur"), i.event("focuschange"), i._isInputting() && (ne.inputElement.target.focus = !1);
                });
                var n = "visibilityState",
                    s = "visibilitychange",
                    r = t.document;
                void 0 !== r.hidden ? (s = "visibilitychange", n = "visibilityState") : void 0 !== r.mozHidden ? (s = "mozvisibilitychange", n = "mozVisibilityState") : void 0 !== r.msHidden ? (s = "msvisibilitychange", n = "msVisibilityState") : void 0 !== r.webkitHidden && (s = "webkitvisibilitychange", n = "webkitVisibilityState"), t.document.addEventListener(s, function() {
                    "hidden" == rt.document[n] ? (e._isVisibility = !1, i._isInputting() && (ne.inputElement.target.focus = !1)) : e._isVisibility = !0;
                    e.renderingEnabled = e._isVisibility, i.event("visibilitychange");
                }), t.addEventListener("resize", function() {
                    var t = rt.window.orientation;
                    null != t && t != e._previousOrientation && i._isInputting() && (ne.inputElement.target.focus = !1), e._previousOrientation = t, i._isInputting() || (rt.onSafari && (i._safariOffsetY = (rt.window.__innerHeight || rt.document.body.clientHeight || rt.document.documentElement.clientHeight) - rt.window.innerHeight), i._resetCanvas());
                }), t.addEventListener("orientationchange", function(t) {
                    i._resetCanvas();
                }), this.on("mousemove", this, this._onmouseMove), rt.onMobile && this.on("mousedown", this, this._onmouseMove);
            }
            y(l, "laya.display.Stage", h);
            var t = l.prototype;
            return t._isInputting = function() {
                return rt.onMobile && ne.isInputting;
            }, t._changeCanvasSize = function() {
                this.setScreenSize(rt.clientWidth * rt.pixelRatio, rt.clientHeight * rt.pixelRatio);
            }, t._resetCanvas = function() {
                this.screenAdaptationEnabled && this._changeCanvasSize();
            }, t.setScreenSize = function(t, e) {
                var i = !1;
                if ("none" !== this._screenMode && (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode)) {
                    var n = e;
                    e = t, t = n;
                }
                this.canvasRotation = i;
                var s = it._mainCanvas,
                    r = s.source.style,
                    o = this._canvasTransform.identity(),
                    a = this._scaleMode,
                    h = t / this.designWidth,
                    l = e / this.designHeight,
                    u = this.useRetinalCanvas ? t : this.designWidth,
                    c = this.useRetinalCanvas ? e : this.designHeight,
                    _ = t,
                    d = e,
                    f = rt.pixelRatio;
                switch (this._width = this.designWidth, this._height = this.designHeight, a) {
                    case "noscale":
                        h = l = 1, _ = this.designWidth, d = this.designHeight;
                        break;
                    case "showall":
                        h = l = Math.min(h, l), u = _ = Math.round(this.designWidth * h), c = d = Math.round(this.designHeight * l);
                        break;
                    case "noborder":
                        h = l = Math.max(h, l), _ = Math.round(this.designWidth * h), d = Math.round(this.designHeight * l);
                        break;
                    case "full":
                        h = l = 1, this._width = u = t, this._height = c = e;
                        break;
                    case "fixedwidth":
                        l = h, this._height = c = Math.round(e / h);
                        break;
                    case "fixedheight":
                        h = l, this._width = u = Math.round(t / l);
                        break;
                    case "fixedauto":
                        t / e < this.designWidth / this.designHeight ? (l = h, this._height = c = Math.round(e / h)) : (h = l, this._width = u = Math.round(t / l));
                }
                this.useRetinalCanvas && (u = t, c = e), h *= this.scaleX, l *= this.scaleY, 1 === h && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(h / (_ / u)), this.transform.d = this._formatData(l / (d / c))), s.size(u, c), bt.changeWebGLSize(u, c), o.scale(_ / u / f, d / c / f), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = t - _ : this.offset.x = .5 * (t - _) / f, "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / f, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), o.translate(this.offset.x, this.offset.y), this._safariOffsetY && o.translate(0, this._safariOffsetY), this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (o.rotate(Math.PI / 2), o.translate(e / f, 0), this.canvasDegree = 90) : (o.rotate(-Math.PI / 2), o.translate(0, t / f), this.canvasDegree = -90)), o.a = this._formatData(o.a), o.d = this._formatData(o.d), o.tx = this._formatData(o.tx), o.ty = this._formatData(o.ty), this.transform = this.transform, r.transformOrigin = r.webkitTransformOrigin = r.msTransformOrigin = r.mozTransformOrigin = r.oTransformOrigin = "0px 0px 0px", r.transform = r.webkitTransform = r.msTransform = r.mozTransform = r.oTransform = "matrix(" + o.toString() + ")", this._safariOffsetY && o.translate(0, -this._safariOffsetY), o.translate(parseInt(r.left) || 0, parseInt(r.top) || 0), this.visible = !0, this._repaint |= 2, this.event("resize");
            }, t._formatData = function(t) {
                return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? 0 < t ? 1 : -1 : t;
            }, t.getMousePoint = function() {
                return ct.TEMP.setTo(this.mouseX, this.mouseY);
            }, t.repaint = function(t) {
                void 0 === t && (t = 2), this._repaint |= t;
            }, t.parentRepaint = function(t) {
                void 0 === t && (t = 2);
            }, t._loop = function() {
                return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, this.render(it._context, 0, 0), !0;
            }, t.getFrameTm = function() {
                return this._frameStartTime;
            }, t._onmouseMove = function(t) {
                this._mouseMoveTime = rt.now();
            }, t.getTimeFromFrameStart = function() {
                return rt.now() - this._frameStartTime;
            }, t.render = function(t, e, i) {
                if (l._dbgSprite.graphics.clear(), "sleep" === this._frameRate) {
                    var n = rt.now();
                    if (!(1e3 <= n - this._frameStartTime)) return;
                    this._frameStartTime = n;
                } else {
                    if (!this._visible) return this._renderCount++, void(this._renderCount % 5 == 0 && (pt.I._update(), w.loopCount++, this._updateTimers()));
                    this._frameStartTime = rt.now();
                }
                this._renderCount++;
                var s = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate),
                    r = this._renderCount % 2 == 0;
                if (w.renderSlow = !s, (s || r) && (pt.I._update(), w.loopCount++, it.isWebGL && this.renderingEnabled)) {
                    for (var o = 0, a = this._scene3Ds.length; o < a; o++) this._scene3Ds[o]._update();
                    t.clear(), h.prototype.render.call(this, t, e, i), w._show && w._sp && w._sp.render(t, e, i);
                }
                l._dbgSprite.render(t, 0, 0), !s && r || (this.renderingEnabled && (it.isWebGL ? (bt.clear(this._bgColor), t.flush(), p.instance && p.getInstance().endDispose()) : (bt.clear(this._bgColor), h.prototype.render.call(this, t, e, i), w._show && w._sp && w._sp.render(t, e, i))), this._updateTimers());
            }, t.renderToNative = function(t, e, i) {
                if (this._renderCount++, this._visible) {
                    if (pt.I._update(), w.loopCount++, it.isWebGL && this.renderingEnabled) {
                        for (var n = 0, s = this._scene3Ds.length; n < s; n++) this._scene3Ds[n]._update();
                        t.clear(), h.prototype.render.call(this, t, e, i), w._show && w._sp && w._sp.render(t, e, i);
                    }
                    this.renderingEnabled && (bt.clear(this._bgColor), t.flush(), p.instance && p.getInstance().endDispose()), this._updateTimers();
                } else this._renderCount % 5 == 0 && (pt.I._update(), w.loopCount++, this._updateTimers());
            }, t._updateTimers = function() {
                v.systemTimer._update(), v.startTimer._update(), v.physicsTimer._update(), v.updateTimer._update(), v.lateTimer._update(), v.timer._update();
            }, t._requestFullscreen = function() {
                var t = rt.document.documentElement;
                t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
            }, t._fullScreenChanged = function() {
                v.stage.event("fullscreenchange");
            }, t.exitFullscreen = function() {
                var t = rt.document;
                t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
            }, t.isGlobalRepaint = function() {
                return this._globalRepaintGet;
            }, t.setGlobalRepaint = function() {
                this._globalRepaintSet = !0;
            }, t.add3DUI = function(t) {
                var e = t.rootView;
                0 <= this._3dUI.indexOf(e) || this._3dUI.push(e);
            }, t.remove3DUI = function(t) {
                var e = t.rootView,
                    i = this._3dUI.indexOf(e);
                return 0 <= i && (this._3dUI.splice(i, 1), !0);
            }, f(0, t, "clientScaleY", function() {
                return this._transform ? this._transform.getScaleY() : 1;
            }), f(0, t, "width", h.prototype._$get_width, function(t) {
                this.designWidth = t, v.superSet(Vt, this, "width", t), v.systemTimer.callLater(this, this._changeCanvasSize);
            }), f(0, t, "isFocused", function() {
                return this._isFocused;
            }), f(0, t, "alignH", function() {
                return this._alignH;
            }, function(t) {
                this._alignH = t, v.systemTimer.callLater(this, this._changeCanvasSize);
            }), f(0, t, "height", h.prototype._$get_height, function(t) {
                this.designHeight = t, v.superSet(Vt, this, "height", t), v.systemTimer.callLater(this, this._changeCanvasSize);
            }), f(0, t, "transform", function() {
                return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
            }, h.prototype._$set_transform), f(0, t, "isVisibility", function() {
                return this._isVisibility;
            }), f(0, t, "scaleMode", function() {
                return this._scaleMode;
            }, function(t) {
                this._scaleMode = t, v.systemTimer.callLater(this, this._changeCanvasSize);
            }), f(0, t, "alignV", function() {
                return this._alignV;
            }, function(t) {
                this._alignV = t, v.systemTimer.callLater(this, this._changeCanvasSize);
            }), f(0, t, "bgColor", function() {
                return this._bgColor;
            }, function(t) {
                this._bgColor = t, it.isWebGL && (this._wgColor = t ? m.create(t).arrColor : null), rt.onLimixiu ? this._wgColor = m.create(t).arrColor : it.canvas.style.background = t || "none";
            }), f(0, t, "mouseX", function() {
                return Math.round(d.instance.mouseX / this.clientScaleX);
            }), f(0, t, "mouseY", function() {
                return Math.round(d.instance.mouseY / this.clientScaleY);
            }), f(0, t, "clientScaleX", function() {
                return this._transform ? this._transform.getScaleX() : 1;
            }), f(0, t, "screenMode", function() {
                return this._screenMode;
            }, function(t) {
                this._screenMode = t;
            }), f(0, t, "visible", h.prototype._$get_visible, function(t) {
                this.visible !== t && (v.superSet(Vt, this, "visible", t), it._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
            }), f(0, t, "fullScreenEnabled", null, function(t) {
                var e = rt.document,
                    i = it.canvas;
                t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
            }), f(0, t, "frameRate", function() {
                return it.isConchApp ? this._frameRateNative : this._frameRate;
            }, function(t) {
                if (it.isConchApp) {
                    switch (t) {
                        case "fast":
                            g.conch.config.setLimitFPS(60);
                            break;
                        case "mouse":
                            g.conch.config.setMouseFrame(2e3);
                            break;
                        case "slow":
                            g.conch.config.setSlowFrame(!0);
                            break;
                        case "sleep":
                            g.conch.config.setLimitFPS(1);
                    }
                    this._frameRateNative = t;
                } else this._frameRate = t;
            }), l.SCALE_NOSCALE = "noscale", l.SCALE_EXACTFIT = "exactfit", l.SCALE_SHOWALL = "showall", l.SCALE_NOBORDER = "noborder", l.SCALE_FULL = "full", l.SCALE_FIXED_WIDTH = "fixedwidth", l.SCALE_FIXED_HEIGHT = "fixedheight", l.SCALE_FIXED_AUTO = "fixedauto", l.ALIGN_LEFT = "left", l.ALIGN_RIGHT = "right", l.ALIGN_CENTER = "center", l.ALIGN_TOP = "top", l.ALIGN_MIDDLE = "middle", l.ALIGN_BOTTOM = "bottom", l.SCREEN_NONE = "none", l.SCREEN_HORIZONTAL = "horizontal", l.SCREEN_VERTICAL = "vertical", l.FRAME_FAST = "fast", l.FRAME_SLOW = "slow", l.FRAME_MOUSE = "mouse", l.FRAME_SLEEP = "sleep", i(l, ["_dbgSprite", function() {
                return this._dbgSprite = new Vt();
            }]), l;
        }(Vt),
        ee = function(t) {
            function d() {
                this.datas = [], this.hud_width = 800, this.hud_height = 200, this.gMinV = 0, this.gMaxV = 100, this.textSpace = 40, this._now = null, this.sttm = 0, d.__super.call(this), this.xdata = new Array(d.DATANUM), this.ydata = new Array(d.DATANUM), (d.inst = this)._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender(), this.addDataDef(0, 16777215, "frame", 1), this.addDataDef(1, 65280, "update", 1), this.addDataDef(2, 16711680, "flush", 1), this._now = performance ? performance.now.bind(performance) : Date.now;
            }
            y(d, "laya.utils.PerfHUD", Vt);
            var e = d.prototype;
            return e.now = function() {
                return this._now();
            }, e.start = function() {
                this.sttm = this._now();
            }, e.end = function(t) {
                var e = this._now() - this.sttm;
                this.updateValue(t, e);
            }, e.config = function(t, e) {
                this.hud_width = t, this.hud_height = e;
            }, e.addDataDef = function(t, e, i, n) {
                this.datas[t] = new Y(t, e, i, n);
            }, e.updateValue = function(t, e) {
                this.datas[t].addData(e);
            }, e.v2y = function(t) {
                this._y, this.hud_height, this.gMinV, this.gMaxV;
                return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
            }, e.drawHLine = function(t, e, i, n) {
                var s = this._x,
                    r = (this._x, this.hud_width, this.v2y(e));
                t.fillText(n, s, r - 6, null, "green"), s += this.textSpace, t.fillStyle = i, t.fillRect(s, r, this._x + this.hud_width, 1);
            }, e.customRender = function(t, e, i) {
                var n = performance.now();
                d._lastTm <= 0 && (d._lastTm = n), this.updateValue(0, n - d._lastTm), d._lastTm = n, t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), this.drawHLine(t, 100, "green", "10|100");
                for (var s = 0, r = this.datas.length; s < r; s++) {
                    var o = this.datas[s];
                    if (o) {
                        var a = o.datas.length,
                            h = (this.hud_width - this.textSpace) / a,
                            l = o.datapos,
                            u = this._x + this.textSpace;
                        t.fillStyle = o.color;
                        for (var c = a; l < c; l++) {
                            var _ = this.v2y(o.datas[l] * o.scale);
                            t.fillRect(u, _, h, this.hud_height + this._y - _), u += h;
                        }
                        for (l = 0; l < o.datapos; l++) _ = this.v2y(o.datas[l] * o.scale), t.fillRect(u, _, h, this.hud_height + this._y - _), u += h;
                    }
                }
                t.restore();
            }, d._lastTm = 0, d._now = 0, d.DATANUM = 300, d.inst = null, d.drawTexTm = 0, d;
        }(),
        ie = function(n) {
            function h() {
                this.autoDestroyAtClosed = !1, this.url = null, this._timer = null, this._viewCreated = !1, this._idMap = null, this._$componentType = "Scene", h.__super.call(this), this._setBit(8, !0), h.unDestroyedScenes.push(this), (this._scene = this).createChildren();
            }
            y(h, "laya.display.Scene", n);
            var t = h.prototype;
            return t.createChildren = function() {}, t.loadScene = function(t) {
                var e = -1 < t.indexOf(".") ? t : t + ".scene",
                    i = v.loader.getRes(e);
                if (i) this.createView(i);
                else {
                    v.loader.resetProgress();
                    var n = new Xt();
                    n.on("complete", this, this._onSceneLoaded, [e]), n.load(e);
                }
            }, t._onSceneLoaded = function(t) {
                this.createView(Ut.getRes(t));
            }, t.createView = function(t) {
                t && !this._viewCreated && (this._viewCreated = !0, j.createByData(this, t));
            }, t.getNodeByID = function(t) {
                return this._idMap ? this._idMap[t] : null;
            }, t.open = function(t, e) {
                void 0 === t && (t = !0), t && h.closeAll(), h.root.addChild(this), this.onOpened(e);
            }, t.onOpened = function(t) {}, t.close = function(t) {
                this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
            }, t.onClosed = function(t) {}, t.destroy = function(t) {
                void 0 === t && (t = !0), this._idMap = null, n.prototype.destroy.call(this, t);
                for (var e = laya.display.Scene.unDestroyedScenes, i = e.length - 1; - 1 < i; i--)
                    if (e[i] === this) return void e.splice(i, 1);
            }, t._sizeChanged = function() {
                this.event("resize");
            }, f(0, t, "scaleX", n.prototype._$get_scaleX, function(t) {
                v.superGet(Vt, this, "scaleX") != t && (v.superSet(Vt, this, "scaleX", t), this.event("resize"));
            }), f(0, t, "scaleY", n.prototype._$get_scaleY, function(t) {
                v.superGet(Vt, this, "scaleY") != t && (v.superSet(Vt, this, "scaleY", t), this.event("resize"));
            }), f(0, t, "width", function() {
                if (this._width) return this._width;
                for (var t = 0, e = this.numChildren - 1; - 1 < e; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
                }
                return t;
            }, function(t) {
                v.superGet(Vt, this, "width") != t && (v.superSet(Vt, this, "width", t), this.callLater(this._sizeChanged));
            }), f(0, t, "timer", function() {
                return this._timer || v.timer;
            }, function(t) {
                this._timer = t;
            }), f(0, t, "height", function() {
                if (this._height) return this._height;
                for (var t = 0, e = this.numChildren - 1; - 1 < e; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
                }
                return t;
            }, function(t) {
                v.superGet(Vt, this, "height") != t && (v.superSet(Vt, this, "height", t), this.callLater(this._sizeChanged));
            }), f(1, h, "root", function() {
                if (!h._root) {
                    function t() {
                        h._root.size(v.stage.width, v.stage.height), h._root.event("resize");
                    }
                    (h._root = v.stage.addChild(new Vt())).name = "root", v.stage.on("resize", null, t), t();
                }
                return h._root;
            }, laya.display.Sprite._$SET_root), h.load = function(s, r, e) {
                v.loader.resetProgress();
                var o = new Xt();

                function a(t) {
                    h._loadPage && h._loadPage.event("progress", t), e && e.runWith(t);
                }
                o.on("progress", null, a), o.once("complete", null, function() {
                    o.off("progress", null, a);
                    var t = Ut.getRes(s);
                    if (!t) throw "Can not find scene:" + s;
                    if (!t.props) throw "Scene data is error:" + s;
                    var e = t.props.runtime ? t.props.runtime : t.type,
                        i = nt.getClass(e);
                    if ("instance" == t.props.renderType) var n = i.instance || (i.instance = new i());
                    else n = new i(); {
                        if (!(n && n instanceof laya.display.Node)) throw "Can not find scene:" + e;
                        n.url = s, n._getBit(8) ? (n.on("onViewCreated", null, function() {
                            r && r.runWith(n);
                        }), n.createView(t)) : r && r.runWith(n), h.hideLoadingPage();
                    }
                }), o.load(s);
            }, h.open = function(t, e, i, n, s) {
                if (void 0 === e && (e = !0), i instanceof laya.utils.Handler) {
                    var r = n;
                    n = i, i = r;
                }
                h.showLoadingPage(), h.load(t, x.create(null, this._onSceneLoaded, [e, n, i]), s);
            }, h._onSceneLoaded = function(t, e, i, n) {
                n.open(t, i), e && e.runWith(n);
            }, h.close = function(t, e) {
                void 0 === e && (e = "");
                for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; s < r; s++) {
                    var o = n[s];
                    o && o.parent && o.url === t && o.name == e && (o.close(), i = !0);
                }
                return i;
            }, h.closeAll = function() {
                for (var t = laya.display.Scene.root, e = 0, i = t.numChildren; e < i; e++) {
                    var n = t.getChildAt(0);
                    n instanceof laya.display.Scene ? n.close() : n.removeSelf();
                }
            }, h.destroy = function(t, e) {
                void 0 === e && (e = "");
                for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; s < r; s++) {
                    var o = n[s];
                    o.url === t && o.name == e && (o.destroy(), i = !0);
                }
                return i;
            }, h.gc = function() {
                Ot.destroyUnusedResources();
            }, h.setLoadingPage = function(t) {
                h._loadPage != t && (h._loadPage = t);
            }, h.showLoadingPage = function(t, e) {
                void 0 === e && (e = 500), h._loadPage && (v.systemTimer.clear(null, h._showLoading), v.systemTimer.clear(null, h._hideLoading), v.systemTimer.once(e, null, h._showLoading, [t], !1));
            }, h._showLoading = function(t) {
                v.stage.addChild(h._loadPage), h._loadPage.onOpened(t);
            }, h._hideLoading = function() {
                h._loadPage.close();
            }, h.hideLoadingPage = function(t) {
                void 0 === t && (t = 500), h._loadPage && (v.systemTimer.clear(null, h._showLoading), v.systemTimer.clear(null, h._hideLoading), v.systemTimer.once(t, null, h._hideLoading));
            }, h.unDestroyedScenes = [], h._root = null, h._loadPage = null, h;
        }(Vt),
        ne = function(e) {
            function s() {
                this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", this._content = "", s.__super.call(this), this._maxChars = 1e5, this._width = 100, this._height = 20, this.multiline = !1, this.overflow = "scroll", this.on("mousedown", this, this._onMouseDown), this.on("undisplay", this, this._onUnDisplay);
            }
            y(s, "laya.display.Input", e);
            var t = s.prototype;
            return t.setSelection = function(t, e) {
                this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e;
            }, t._onUnDisplay = function(t) {
                this.focus = !1;
            }, t._onMouseDown = function(t) {
                this.focus = !0;
            }, t._syncInputTransform = function() {
                var t = this.nativeInput,
                    e = yt.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                    i = this._width - this.padding[1] - this.padding[3],
                    n = this._height - this.padding[0] - this.padding[2];
                it.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(i, n), t.setPos(e.x, e.y)) : (s.inputContainer.style.transform = s.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + v.stage.canvasDegree + "deg)", t.style.width = i + "px", t.style.height = n + "px", s.inputContainer.style.left = e.x + "px", s.inputContainer.style.top = e.y + "px");
            }, t.select = function() {
                this.nativeInput.select();
            }, t._setInputMethod = function() {
                s.input.parentElement && s.inputContainer.removeChild(s.input), s.area.parentElement && s.inputContainer.removeChild(s.area), s.inputElement = this._multiline ? s.area : s.input, s.inputContainer.appendChild(s.inputElement), qt.RightToLeft && (s.inputElement.style.direction = "rtl");
            }, t._focusIn = function() {
                laya.display.Input.isInputting = !0;
                var t = this.nativeInput;
                this._focus = !0;
                var e = t.style;
                e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, it.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
                this.padding;
                if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, v.stage.off("keydown", this, this._onKeyDown), v.stage.on("keydown", this, this._onKeyDown), (v.stage.focus = this).event("focus"), rt.onPC && t.focus(), !(rt.onMiniGame || rt.onBDMiniGame || rt.onQGMiniGame || rt.onKGMiniGame)) {
                    this._text;
                    this._text = null;
                }
                this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(rt.onIPhone && qt.fontFamilyMap[this.font] || this.font), it.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !it.isConchApp && rt.onPC && v.systemTimer.frameLoop(1, this, this._syncInputTransform);
            }, t._setPromptColor = function() {
                (s.promptStyleDOM = rt.getElementById("promptStyle")) || ((s.promptStyleDOM = rt.createElement("style")).setAttribute("id", "promptStyle"), rt.document.head.appendChild(s.promptStyleDOM)), s.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
            }, t._focusOut = function() {
                laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (v.superSet(qt, this, "text", this._content), v.superSet(qt, this, "color", this._originColor)) : (v.superSet(qt, this, "text", this._prompt), v.superSet(qt, this, "color", this._promptColor)), v.stage.off("keydown", this, this._onKeyDown), v.stage.focus = null, this.event("blur"), this.event("change"), it.isConchApp && this.nativeInput.blur(), rt.onPC && v.systemTimer.clear(this, this._syncInputTransform);
            }, t._onKeyDown = function(t) {
                13 === t.keyCode && (rt.onMobile && !this._multiline && (this.focus = !1), this.event("enter"));
            }, t.changeText = function(t) {
                this._content = t, this._focus ? (this.nativeInput.value = t || "", this.event("change")) : e.prototype.changeText.call(this, t);
            }, f(0, t, "color", e.prototype._$get_color, function(t) {
                this._focus && this.nativeInput.setColor(t), v.superSet(qt, this, "color", this._content ? t : this._promptColor), this._originColor = t;
            }), f(0, t, "multiline", function() {
                return this._multiline;
            }, function(t) {
                this._multiline = t, this.valign = t ? "top" : "middle";
            }), f(0, t, "maxChars", function() {
                return this._maxChars;
            }, function(t) {
                t <= 0 && (t = 1e5), this._maxChars = t;
            }), f(0, t, "text", function() {
                return this._focus ? this.nativeInput.value : this._content || "";
            }, function(t) {
                v.superSet(qt, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), (this._content = t) ? v.superSet(qt, this, "text", t) : (v.superSet(qt, this, "text", this._prompt), v.superSet(qt, this, "color", this.promptColor)));
            }), f(0, t, "nativeInput", function() {
                return this._multiline ? s.area : s.input;
            }), f(0, t, "focus", function() {
                return this._focus;
            }, function(t) {
                var e = this.nativeInput;
                this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(), (e.target = this)._focusIn()) : (e.target = null, this._focusOut(), rt.document.body.scrollTop = 0, e.blur(), it.isConchApp ? e.setPos(-1e4, -1e4) : s.inputContainer.contains(e) && s.inputContainer.removeChild(e)));
            }), f(0, t, "editable", function() {
                return this._editable;
            }, function(t) {
                this._editable = t, it.isConchApp && s.input.setForbidEdit(!t);
            }), f(0, t, "bgColor", e.prototype._$get_bgColor, function(t) {
                v.superSet(qt, this, "bgColor", t), it.isConchApp && this.nativeInput.setBgColor(t);
            }), f(0, t, "restrict", function() {
                return this._restrictPattern ? this._restrictPattern.source : "";
            }, function(t) {
                this._restrictPattern = t ? (-1 < (t = "[^" + t + "]").indexOf("^^") && (t = t.replace("^^", "")), new RegExp(t, "g")) : null;
            }), f(0, t, "prompt", function() {
                return this._prompt;
            }, function(t) {
                !this._text && t && v.superSet(qt, this, "color", this._promptColor), this.promptColor = this._promptColor, this._text ? v.superSet(qt, this, "text", this._text == this._prompt ? t : this._text) : v.superSet(qt, this, "text", t), this._prompt = qt.langPacks && qt.langPacks[t] ? qt.langPacks[t] : t;
            }), f(0, t, "promptColor", function() {
                return this._promptColor;
            }, function(t) {
                this._promptColor = t, this._content || v.superSet(qt, this, "color", t);
            }), f(0, t, "type", function() {
                return this._type;
            }, function(t) {
                this._getTextStyle().asPassword = "password" === t, this._type = t;
            }), s.__init__ = function() {
                if (s._createInputElement(), rt.onMobile) {
                    var t = !1;
                    (rt.onMiniGame || rt.onBDMiniGame || rt.onQGMiniGame || rt.onKGMiniGame) && (t = !0), it.canvas.addEventListener(s.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", s._popupInputMethod);
                }
            }, s._popupInputMethod = function(t) {
                laya.display.Input.isInputting && laya.display.Input.inputElement.focus();
            }, s._createInputElement = function() {
                s._initInput(s.area = rt.createElement("textarea")), s._initInput(s.input = rt.createElement("input")), (s.inputContainer = rt.createElement("div")).style.position = "absolute", s.inputContainer.style.zIndex = 1e5, rt.container.appendChild(s.inputContainer), s.inputContainer.setPos = function(t, e) {
                    s.inputContainer.style.left = t + "px", s.inputContainer.style.top = e + "px";
                };
            }, s._initInput = function(e) {
                var t = e.style;
                t.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", t.resize = "none", t.backgroundColor = "transparent", t.border = "none", t.outline = "none", t.zIndex = 1, e.addEventListener("input", s._processInputting), e.addEventListener("mousemove", s._stopEvent), e.addEventListener("mousedown", s._stopEvent), e.addEventListener("touchmove", s._stopEvent), e.setFontFace = function(t) {
                    e.style.fontFamily = t;
                }, it.isConchApp || (e.setColor = function(t) {
                    e.style.color = t;
                }, e.setFontSize = function(t) {
                    e.style.fontSize = t + "px";
                });
            }, s._processInputting = function(t) {
                var e = laya.display.Input.inputElement.target;
                if (e) {
                    var i = laya.display.Input.inputElement.value;
                    e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), laya.display.Input.inputElement.value = i)), e._text = i, e.event("input");
                }
            }, s._stopEvent = function(t) {
                "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
            }, s.TYPE_TEXT = "text", s.TYPE_PASSWORD = "password", s.TYPE_EMAIL = "email", s.TYPE_URL = "url", s.TYPE_NUMBER = "number", s.TYPE_RANGE = "range", s.TYPE_DATE = "date", s.TYPE_MONTH = "month", s.TYPE_WEEK = "week", s.TYPE_TIME = "time", s.TYPE_DATE_TIME = "datetime", s.TYPE_DATE_TIME_LOCAL = "datetime-local", s.TYPE_SEARCH = "search", s.input = null, s.area = null, s.inputElement = null, s.inputContainer = null, s.confirmButton = null, s.promptStyleDOM = null, s.inputHeight = 45, s.isInputting = !1, s.stageMatrix = null, i(s, ["IOS_IFRAME", function() {
                return this.IOS_IFRAME = rt.onIOS && rt.window.top != rt.window.self;
            }]), s;
        }(qt),
        se = (function(n) {
            function c() {
                this._frames = null, this._url = null, c.__super.call(this), this._setControlNode(this);
            }
            y(c, "laya.display.Animation", n);
            var t = c.prototype;
            t.destroy = function(t) {
                void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), this._frames = null, this._labels = null;
            }, t.play = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), i && this._setFramesFromCache(i, !0), n.prototype.play.call(this, t, e, i);
            }, t._setFramesFromCache = function(t, e) {
                if (void 0 === e && (e = !1), this._url && (t = this._url + "#" + t), t && c.framesMap[t]) {
                    var i = c.framesMap[t];
                    return i instanceof Array ? (this._frames = c.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (c.framesMap[t] = re.parseAnimationByData(i), i = c.framesMap[t]), this._frames = i.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), !0;
                }
                return e && console.log("ani not found:", t), !1;
            }, t._copyLabels = function(t) {
                if (!t) return null;
                var e, i;
                for (i in e = {}, t) e[i] = yt.copyArray([], t[i]);
                return e;
            }, t._frameLoop = function() {
                this._visible && .01 < this._style.alpha && this._frames && n.prototype._frameLoop.call(this);
            }, t._displayToIndex = function(t) {
                this._frames && (this.graphics = this._frames[t]);
            }, t.clear = function() {
                return n.prototype.clear.call(this), this.stop(), this.graphics = null, this._frames = null, this._labels = null, this;
            }, t.loadImages = function(t, e) {
                return void 0 === e && (e = ""), this._url = "", this._setFramesFromCache(e) || (this.frames = c.framesMap[e] ? c.framesMap[e] : c.createFrames(t, e)), this;
            }, t.loadAtlas = function(e, i, n) {
                void 0 === n && (n = ""), this._url = "";
                var s = this;
                if (!s._setFramesFromCache(n)) {
                    function t(t) {
                        e === t && (s.frames = c.framesMap[n] ? c.framesMap[n] : c.createFrames(e, n), i && i.run());
                    }
                    Ut.getAtlas(e) ? t(e) : v.loader.load(e, x.create(null, t, [e]), null, "atlas");
                }
                return this;
            }, t.loadAnimation = function(t, e, i) {
                this._url = t;
                return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0), this.index = 0, e && e.run()) : !i || Ut.getAtlas(i) ? this._loadAnimationData(t, e, i) : v.loader.load(i, x.create(this, this._loadAnimationData, [t, e, i]), null, "atlas"), this;
            }, t._loadAnimationData = function(a, h, t) {
                var l = this;
                if (!t || Ut.getAtlas(t)) {
                    var u = this;
                    Ut.getRes(a) ? e(a) : v.loader.load(a, x.create(null, e, [a]), null, "json");
                } else console.warn("atlas load fail:" + t);

                function e(t) {
                    if (Ut.getRes(t)) {
                        if (a === t) {
                            var e;
                            if (c.framesMap[a + "#"]) u._setFramesFromCache(l._actionName, !0), l.index = 0, l._resumePlay();
                            else {
                                var i = re.parseAnimationData(Ut.getRes(a));
                                if (!i) return;
                                var n, s = i.animationList,
                                    r = 0,
                                    o = s.length;
                                for (r = 0; r < o; r++) e = s[r], c.framesMap[a + "#" + e.name] = e, n || (n = e);
                                n && (c.framesMap[a + "#"] = n, u._setFramesFromCache(l._actionName, !0), l.index = 0), l._resumePlay();
                            }
                            h && h.run();
                        }
                        Ut.clearRes(a);
                    }
                }
            }, f(0, t, "frames", function() {
                return this._frames;
            }, function(t) {
                (this._frames = t) && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), this.index = this._index);
            }), f(0, t, "autoPlay", null, function(t) {
                t ? this.play() : this.stop();
            }), f(0, t, "source", null, function(t) {
                -1 < t.indexOf(".ani") ? this.loadAnimation(t) : -1 < t.indexOf(".json") || -1 < t.indexOf("als") || -1 < t.indexOf("atlas") ? this.loadAtlas(t) : this.loadImages(t.split(","));
            }), f(0, t, "autoAnimation", null, function(t) {
                this.play(0, !0, t);
            }), c.createFrames = function(t, e) {
                var i;
                if ("string" == typeof t) {
                    var n = Ut.getAtlas(t);
                    if (n && n.length) {
                        i = [];
                        for (var s = 0, r = n.length; s < r; s++) {
                            var o = new gt();
                            o.drawImage(Ut.getRes(n[s]), 0, 0), i.push(o);
                        }
                    }
                } else if (t instanceof Array)
                    for (i = [], s = 0, r = t.length; s < r; s++)(o = new gt()).loadImage(t[s], 0, 0), i.push(o);
                return e && (c.framesMap[e] = i), i;
            }, c.clearCache = function(t) {
                var e, i = c.framesMap,
                    n = t + "#";
                for (e in i) e !== t && 0 !== e.indexOf(n) || delete c.framesMap[e];
            }, c.framesMap = {};
        }(Qt), function(t) {
            function l() {
                this._targetDic = null, this._animationData = null, this._usedFrames = null, l.__super.call(this), null === l._sortIndexFun && (l._sortIndexFun = o.sortByKey("index", !1, !0));
            }
            y(l, "laya.display.FrameAnimation", t);
            var e = l.prototype;
            return e._setUp = function(t, e) {
                this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, e.animationNewFrames = this._usedFrames);
            }, e.clear = function() {
                return t.prototype.clear.call(this), this._targetDic = null, this._animationData = null, this;
            }, e._displayToIndex = function(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e = this._animationData.nodes,
                        i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++) this._displayNodeToFrame(e[i], t);
                }
            }, e._displayNodeToFrame = function(t, e, i) {
                i || (i = this._targetDic);
                var n = i[t.target];
                if (n) {
                    var s, r, o, a = t.frames,
                        h = t.keys,
                        l = 0,
                        u = h.length;
                    for (l = 0; l < u; l++) o = (r = a[s = h[l]]).length > e ? r[e] : r[r.length - 1], n[s] = o;
                    var c, _ = t.funkeys;
                    if (0 != (u = _.length))
                        for (l = 0; l < u; l++) void 0 !== (c = a[s = _[l]])[e] && n[s] && n[s].apply(n, c[e]);
                }
            }, e._calculateDatas = function() {
                if (this._animationData) {
                    var t, e = this._animationData.nodes,
                        i = 0,
                        n = e.length;
                    for (i = this._count = 0; i < n; i++) t = e[i], this._calculateKeyFrames(t);
                    this._count += 1;
                }
            }, e._calculateKeyFrames = function(t) {
                var e, i, n = t.keyframes,
                    s = t.target;
                for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}), n) {
                    var r = -1 != e.indexOf("()");
                    if (i = n[e], r && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []), r) {
                        t.funkeys.push(e);
                        for (var o = t.frames[e], a = 0; a < i.length; a++) {
                            var h = i[a];
                            o[h.index] = h.value, h.index > this._count && (this._count = h.index);
                        }
                    } else this._targetDic && this._targetDic[s] && (t.initValues[e] = this._targetDic[s][e]), i.sort(l._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, s);
                }
            }, e.resetNodes = function() {
                if (this._targetDic && this._animationData) {
                    var t, e, i = this._animationData.nodes,
                        n = 0,
                        s = i.length;
                    for (n = 0; n < s; n++)
                        if (e = (t = i[n]).initValues) {
                            var r, o = this._targetDic[t.target];
                            if (o)
                                for (r in e) o[r] = e[r];
                        }
                }
            }, e._calculateNodePropFrames = function(t, e, i, n) {
                var s = 0,
                    r = t.length - 1;
                for (e.length = t[r].index + 1, s = 0; s < r; s++) this._dealKeyFrame(t[s]), this._calculateFrameValues(t[s], t[s + 1], e);
                0 == r && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), this._dealKeyFrame(t[s]);
            }, e._dealKeyFrame = function(t) {
                t.label && "" != t.label && this.addLabel(t.label, t.index);
            }, e._calculateFrameValues = function(t, e, i) {
                var n, s = 0,
                    r = t.index,
                    o = e.index,
                    a = t.value,
                    h = e.value - t.value,
                    l = o - r,
                    u = this._usedFrames;
                if (o > this._count && (this._count = o), t.tween)
                    for (null == (n = vt[t.tweenMethod]) && (n = vt.linearNone), s = r; s < o; s++) i[s] = n(s - r, a, h, l), u && (u[s] = !0);
                else
                    for (s = r; s < o; s++) i[s] = a;
                u && (u[t.index] = !0, u[e.index] = !0), i[e.index] = e.value;
            }, l._sortIndexFun = null, l;
        }(Qt)),
        re = function(e) {
            var M;

            function A() {
                this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, A.__super.call(this);
            }
            y(A, "laya.utils.GraphicAnimation", e);
            var t = A.prototype;
            return t._parseNodeList = function(t) {
                this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, t.compId && this._nodeList.push(t.compId);
                var e = t.child;
                if (e) {
                    var i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++) this._parseNodeList(e[i]);
                }
            }, t._calGraphicData = function(t) {
                var e;
                if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic)
                    for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null;
            }, t._createGraphicData = function() {
                var t, e = [],
                    i = 0,
                    n = this.count,
                    s = this._usedFrames;
                for (s || (s = []), i = 0; i < n; i++) !s[i] && t || (t = this._createFrameGraphic(i)), e.push(t);
                this._gList = e;
            }, t._createFrameGraphic = function(t) {
                var e = new gt();
                return A._rootMatrix || (A._rootMatrix = new G()), this._updateNodeGraphic(this._rootNode, t, A._rootMatrix, e), e;
            }, t._updateNodeGraphic = function(t, e, i, n, s) {
                var r, o, a;
                void 0 === s && (s = 1), (r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (r.resultTransform = new G()), o = r.resultTransform, G.mul(r.transform, i, o);
                var h = r.alpha * s;
                if (!(h < .01)) {
                    r.skin && (a = this._getTextureByUrl(r.skin)) && (o._checkTransform() ? (n.drawTexture(a, 0, 0, r.width, r.height, o, h), r.resultTransform = null) : n.drawTexture(a, o.tx, o.ty, r.width, r.height, null, h));
                    var l = t.child;
                    if (l) {
                        var u, c = 0;
                        for (u = l.length, c = 0; c < u; c++) this._updateNodeGraphic(l[c], e, o, n, h);
                    }
                }
            }, t._updateNoChilds = function(t, e) {
                if (t.skin) {
                    var i = this._getTextureByUrl(t.skin);
                    if (i) {
                        var n = t.transform;
                        n._checkTransform();
                        !n._bTransform ? e.drawTexture(i, n.tx, n.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, n.clone(), t.alpha);
                    }
                }
            }, t._updateNodeGraphic2 = function(t, e, i) {
                var n;
                if (n = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), t.child) {
                    var s = n.transform;
                    s._checkTransform();
                    var r, o;
                    o = (r = !s._bTransform) && (0 != s.tx || 0 != s.ty);
                    var a;
                    (a = s._bTransform || 1 != n.alpha) && i.save(), 1 != n.alpha && i.alpha(n.alpha), r ? o && i.translate(s.tx, s.ty) : i.transform(s.clone());
                    var h, l = t.child;
                    if (n.skin && (h = this._getTextureByUrl(n.skin)) && i.drawImage(h, 0, 0, n.width, n.height), l) {
                        var u, c = 0;
                        for (u = l.length, c = 0; c < u; c++) this._updateNodeGraphic2(l[c], e, i);
                    }
                    a ? i.restore() : r ? o && i.translate(-s.tx, -s.ty) : i.transform(s.clone().invert());
                } else this._updateNoChilds(n, i);
            }, t._calculateKeyFrames = function(t) {
                e.prototype._calculateKeyFrames.call(this, t), this._nodeIDAniDic[t.target] = t;
            }, t.getNodeDataByID = function(t) {
                return this._nodeIDAniDic[t];
            }, t._getParams = function(t, e, i, n) {
                var s = A._temParam;
                s.length = e.length;
                var r = 0,
                    o = e.length;
                for (r = 0; r < o; r++) s[r] = this._getObjVar(t, e[r][0], i, e[r][1], n);
                return s;
            }, t._getObjVar = function(t, e, i, n, s) {
                if (t.hasOwnProperty(e)) {
                    var r = t[e];
                    return i >= r.length && (i = r.length - 1), t[e][i];
                }
                return s.hasOwnProperty(e) ? s[e] : n;
            }, t._getNodeGraphicData = function(t, e, i) {
                i || (i = new M()), i.transform ? i.transform.identity() : i.transform = new G();
                var n = this.getNodeDataByID(t);
                if (!n) return i;
                var s, r = n.frames,
                    o = this._getParams(r, A._drawTextureCmd, e, this._nodeDefaultProps[t]),
                    a = o[0],
                    h = NaN,
                    l = NaN,
                    u = o[5],
                    c = o[6],
                    _ = o[13],
                    d = o[14],
                    f = o[7],
                    p = o[8],
                    g = o[9],
                    m = o[11],
                    v = o[12];
                h = o[3], l = o[4], 0 != h && 0 != l || (a = null), -1 == h && (h = 0), -1 == l && (l = 0), i.skin = a, i.width = h, i.height = l, a && ((s = this._getTextureByUrl(a)) ? (h || (h = s.sourceWidth), l || (l = s.sourceHeight)) : console.warn("lost skin:", a, ",you may load pics first")), i.alpha = o[10];
                var y = i.transform;
                0 != _ && (u = _ * h), 0 != d && (c = d * l), 0 == u && 0 == c || y.translate(-u, -c);
                var x = null;
                if (g || 1 !== f || 1 !== p || m || v) {
                    (x = A._tempMt).identity(), x._bTransform = !0;
                    var w = .0174532922222222 * (g - m),
                        T = .0174532922222222 * (g + v),
                        C = Math.cos(T),
                        b = Math.sin(T),
                        S = Math.sin(w),
                        I = Math.cos(w);
                    x.a = f * C, x.b = f * b, x.c = -p * S, x.d = p * I, x.tx = x.ty = 0;
                }
                return x && (y = G.mul(y, x, y)), y.translate(o[1], o[2]), i;
            }, t._getTextureByUrl = function(t) {
                return Ut.getRes(t);
            }, t.setAniData = function(t, e) {
                if (t.animations) {
                    this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t);
                    var i, n = {},
                        s = [],
                        r = t.animations,
                        o = 0,
                        a = r.length;
                    for (o = 0; o < a; o++)
                        if (i = r[o], this._labels = null, (!e || e == i.name) && i) {
                            try {
                                this._calGraphicData(i);
                            } catch (t) {
                                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
                            }
                            var h = {};
                            h.interval = 1e3 / i.frameRate, h.frames = this._gList, h.labels = this._labels, h.name = i.name, s.push(h), n[i.name] = h;
                        }
                    this.animationList = s, this.animationDic = n;
                }
                A._temParam.length = 0;
            }, t.parseByData = function(t) {
                var e, i;
                e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e), this._labels = null;
                try {
                    this._calGraphicData(i);
                } catch (t) {
                    console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
                }
                var n = t;
                return n.interval = 1e3 / i.frameRate, n.frames = this._gList, n.labels = this._labels, n.name = i.name, n;
            }, t.setUpAniData = function(t) {
                if (t.animations) {
                    var e, i = {},
                        n = [],
                        s = t.animations,
                        r = 0,
                        o = s.length;
                    for (r = 0; r < o; r++)
                        if (e = s[r]) {
                            var a = {};
                            a.name = e.name, a.aniO = e, a.nodeRoot = t, n.push(a), i[e.name] = a;
                        }
                    this.animationList = n, this.animationDic = i;
                }
            }, t._clear = function() {
                this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
            }, A.parseAnimationByData = function(t) {
                var e;
                return A._I || (A._I = new A()), e = A._I.parseByData(t), A._I._clear(), e;
            }, A.parseAnimationData = function(t) {
                var e;
                return A._I || (A._I = new A()), A._I.setUpAniData(t), (e = {}).animationList = A._I.animationList, e.animationDic = A._I.animationDic, A._I._clear(), e;
            }, A._temParam = [], A._I = null, A._rootMatrix = null, i(A, ["_drawTextureCmd", function() {
                return this._drawTextureCmd = [
                    ["skin", null],
                    ["x", 0],
                    ["y", 0],
                    ["width", -1],
                    ["height", -1],
                    ["pivotX", 0],
                    ["pivotY", 0],
                    ["scaleX", 1],
                    ["scaleY", 1],
                    ["rotation", 0],
                    ["alpha", 1],
                    ["skewX", 0],
                    ["skewY", 0],
                    ["anchorX", 0],
                    ["anchorY", 0]
                ];
            }, "_tempMt", function() {
                return this._tempMt = new G();
            }]), A.__init$ = function() {
                M = function() {
                    function t() {
                        this.skin = null, this.transform = null, this.resultTransform = null, this.width = NaN, this.height = NaN, this.alpha = 1;
                    }
                    return y(t, ""), t;
                }();
            }, A;
        }(se);
    ! function(r) {
        function t() {
            this._target = null, this._playEvent = null, this._initData = {}, this._aniKeys = null, this._effectClass = null, t.__super.call(this);
        }
        y(t, "laya.display.EffectAnimation", r);
        var e = t.prototype;
        e._onOtherBegin = function(t) {
            t !== this && this.stop();
        }, e._addEvent = function() {
            this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
        }, e._onPlayAction = function() {
            this.play(0, !1);
        }, e.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._target && (this._target.event("effectbegin", [this]), this._recordInitData(), laya.display.AnimationBase.prototype.play.call(this, t, e, i));
        }, e._recordInitData = function() {
            if (this._aniKeys) {
                var t, e, i = 0;
                for (t = this._aniKeys.length, i = 0; i < t; i++) e = this._aniKeys[i], this._initData[e] = this._target[e];
            }
        }, e._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes,
                    i = 0,
                    n = e.length;
                for (n = 1 < n ? 1 : n, i = 0; i < n; i++) this._displayNodeToFrame(e[i], t);
            }
        }, e._displayNodeToFrame = function(t, e, i) {
            if (this._target) {
                var n, s, r, o, a, h, l, u = this._target,
                    c = t.frames,
                    _ = t.keys,
                    d = 0,
                    f = _.length,
                    p = t.secondFrames,
                    g = 0;
                for (d = 0; d < f; d++) s = c[n = _[d]], r = -1 == (g = p[n]) ? this._initData[n] : e < g ? (h = (a = t.keyframes[n])[0]).tween ? (null == (o = vt[h.tweenMethod]) && (o = vt.linearNone), l = a[1], o(e, this._initData[n], l.value - this._initData[n], l.index)) : this._initData[n] : s.length > e ? s[e] : s[s.length - 1], u[n] = r;
            }
        }, e._calculateKeyFrames = function(t) {
            r.prototype._calculateKeyFrames.call(this, t);
            var e, i, n = t.keyframes,
                s = (t.target, {});
            for (e in t.secondFrames = s, n)(i = n[e]).length <= 1 ? s[e] = -1 : s[e] = i[1].index;
        }, f(0, e, "target", function() {
            return this._target;
        }, function(t) {
            this._target && this._target.off("effectbegin", this, this._onOtherBegin), this._target = t, this._target && this._target.on("effectbegin", this, this._onOtherBegin), this._addEvent();
        }), f(0, e, "playEvent", null, function(t) {
            (this._playEvent = t) && this._addEvent();
        }), f(0, e, "effectData", null, function(t) {
            if (t) {
                var e = t.animations;
                if (e && e[0]) {
                    var i = e[0];
                    this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                }
            }
        }), f(0, e, "effectClass", null, function(t) {
            if (this._effectClass = nt.getClass(t), this._effectClass) {
                var e = this._effectClass.uiView;
                if (e) {
                    var i = e.animations;
                    if (i && i[0]) {
                        var n = i[0];
                        this._setUp({}, n), n.nodes && n.nodes[0] && (this._aniKeys = n.nodes[0].keys);
                    }
                }
            }
        }), t.EFFECT_BEGIN = "effectbegin";
    }(se);
    v.__init([u, Yt, re, j, it, k, pt, J, kt]);
}(window, document, Laya),
function(t, e, i) {
    i.un, i.uns, i.static;
    var n = i.class;
    i.getset, i.__newvec;
    new(function() {
        function t() {}
        return n(t, "LayaMain"), t;
    }())();
}(window, document, Laya);