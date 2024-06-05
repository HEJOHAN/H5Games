var Laya = window.Laya = function(l) {
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
            return 1 == arguments.length ? u.__presubstr.call(this, t) : u.__presubstr.call(this, t, 0 < e ? e : this.length + e)
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$()
            })
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array)
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var n = 0; n < t; n++)
                i[n] = e;
            return i
        },
        __extend: function(t, e) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = Object.getOwnPropertyDescriptor(e, i),
                        s = n.get,
                        r = n.set;
                    s || r ? s && r ? Object.defineProperty(t, i, n) : (s && Object.defineProperty(t, i, s), r && Object.defineProperty(t, i, r)) : t[i] = e[i]
                }

            function a() {
                u.un(this, "constructor", t)
            }
            a.prototype = e.prototype, t.prototype = new a, u.un(t.prototype, "__imps", u.__copy({}, e.prototype.__imps))
        },
        __copy: function(t, e) {
            if (!e)
                return null;
            for (var i in t = t || {}, e)
                t[i] = e[i];
            return t
        },
        __package: function(t, e) {
            if (!u.__packages[t]) {
                u.__packages[t] = !0;
                var i = l,
                    n = t.split(".");
                if (1 < n.length)
                    for (var s = 0, r = n.length - 1; s < r; s++) {
                        var a = i[n[s]];
                        i = a || (i[n[s]] = {})
                    }
                i[n[n.length - 1]] || (i[n[n.length - 1]] = e || {})
            }
        },
        __hasOwnProperty: function(t, e) {
            return e = e || this, Object.hasOwnProperty.call(e, t) || function t(e, i) {
                if (Object.hasOwnProperty.call(i.prototype, e))
                    return !0;
                var n = i.prototype.__super;
                return null == n ? null : t(e, n)
            }(t, e.__class)
        },
        __typeof: function(t, e) {
            if (!t || !e)
                return !1;
            if (e === String)
                return "string" == typeof t;
            if (e === Number)
                return "number" == typeof t;
            if (e.__interface__)
                e = e.__interface__;
            else if ("string" != typeof e)
                return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null
        },
        __int: function(t) {
            return t ? parseInt(t) : 0
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
                    var a = s[r];
                    i[a] = i[a] || {
                        self: a
                    }, n.extend.push(i[a])
                }
            }
            var o = l,
                h = t.split(".");
            for (r = 0; r < h.length - 1; r++)
                o = o[h[r]];
            o[h[h.length - 1]] = {
                __interface__: t
            }
        },
        class: function(t, e, i, n) {
            if (i && u.__extend(t, i), e)
                if (u.__package(e, t), u.__classmap[e] = t, 0 < e.indexOf(".")) {
                    if (0 == e.indexOf("laya.")) {
                        var s = e.split(".");
                        n = n || s[s.length - 1], u[n] = t
                    }
                } else
                    "Main" == e ? l.Main = t : (u[e] && console.log("Error!,this class[" + e + "] already exist:", u[e]), u[e] = t);
            var r = u.un,
                a = t.prototype;
            r(a, "hasOwnProperty", u.__hasOwnProperty), r(a, "__class", t), r(a, "__super", i), r(a, "__className", e), r(t, "__super", i), r(t, "__className", e), r(t, "__isclass", !0), r(t, "super", function(t) {
                this.__super.call(t)
            })
        },
        imps: function(t, e) {
            if (!e)
                return null;
            var s = t.__imps || u.un(t, "__imps", {});

            function r(t) {
                var e, i;
                if ((e = u.__internals[t]) && (s[t] = !0, i = e.extend))
                    for (var n = 0; n < i.length; n++)
                        r(i[n].self)
            }
            for (var i in e)
                r(i)
        },
        superSet: function(t, e, i, n) {
            var s = t.prototype["_$set_" + i];
            s && s.call(e, n)
        },
        superGet: function(t, e, i) {
            var n = t.prototype["_$get_" + i];
            return n ? n.call(e) : null
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
            }))
        },
        static: function(i, n) {
            for (var s = 0, t = n.length; s < t; s += 2)
                if ("length" == n[s])
                    i.length = n[s + 1].call(i);
                else {
                    function e() {
                        var e = n[s],
                            t = n[s + 1];
                        Object.defineProperty(i, e, {
                            get: function() {
                                return delete this[e], this[e] = t.call(this)
                            },
                            set: function(t) {
                                delete this[e], this[e] = t
                            },
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                    e()
                }
        },
        un: function(t, e, i) {
            return i || (i = t[e]), u.__propun.value = i, Object.defineProperty(t, e, u.__propun), i
        },
        uns: function(e, t) {
            t.forEach(function(t) {
                u.un(e, t)
            })
        }
    };
    return l.console = l.console || {
        log: function() {}
    }, l.trace = l.console.log, Error.prototype.throwError = function() {
        throw arguments
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), u
}(window, document);
! function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec
}(window, document, Laya),
function(p, r, y) {
    y.un, y.uns;
    var a = y.static,
        m = y.class,
        f = y.getset;
    y.__newvec;
    y.interface("laya.filters.IFilter"), y.interface("laya.resource.IDispose"), y.interface("laya.resource.IDestroy"), y.interface("laya.webgl.submit.ISubmit"), y.interface("laya.resource.ICreateResource"), y.interface("laya.webgl.canvas.save.ISaveData"), y.interface("laya.resource.ISingletonElement");
    f(1, y, "alertGlobalError", null, function(t) {
        var r = 0;
        re.window.onerror = t ? function(t, e, i, n, s) {
            r++ < 5 && s && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + s.stack)
        } : null
    }), y.init = function(t, e, i) {
        for (var n = [], s = 2, r = arguments.length; s < r; s++)
            n.push(arguments[s]);
        if (!y._isinit) {
            y._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = y._arrayBufferSlice), re.__init__(), y.systemTimer = new ct(!1), y.startTimer = new ct(!1), y.physicsTimer = new ct(!1), y.updateTimer = new ct(!1), y.lateTimer = new ct(!1), y.timer = new ct(!1), y.loader = new Pi, $t.__init__(), jt.inner_enable(), s = 0;
            for (var a = n.length; s < a; s++)
                n[s] && n[s].enable && n[s].enable();
            return te.isConchApp && qe.enableNative(), ht.beginCheck(), y._currentStage = y.stage = new an, ot.rootPath = ot._basePath = y._getUrlPath(), y.render = new te(0, 0), y.stage.size(t, e), p.stage = y.stage, O.__init__(), Nt.__init__(), D.instance.__init__(y.stage, te.canvas), ln.__init__(), ui.autoStopMusic = !0, te.canvas
        }
    }, y._getUrlPath = function() {
        var t = re.window.location,
            e = t.pathname;
        return e = ":" == e.charAt(2) ? e.substring(1) : e, ot.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname)
    }, y._arrayBufferSlice = function(t, e) {
        var i = new Uint8Array(this, t, e - t),
            n = new Uint8Array(i.length);
        return n.set(i), n.buffer
    }, y._runScript = function(t) {
        return re.window[y._evcode](t)
    }, y.enableDebugPanel = function(t) {
        if (void 0 === t && (t = "libs/laya.debugtool.js"), y.DebugPanel)
            y.DebugPanel.enable();
        else {
            var e = re.createElement("script");
            e.onload = function() {
                y.DebugPanel.enable()
            }, e.src = t, re.document.body.appendChild(e)
        }
    }, y.stage = null, y.systemTimer = null, y.startTimer = null, y.physicsTimer = null, y.updateTimer = null, y.lateTimer = null, y.timer = null, y.loader = null, y.version = "2.1.0beta", y.render = null, y._currentStage = null, y._isinit = !1, y.isWXOpenDataContext = !1, y.isWXPosMsg = !1, a(y, ["_evcode", function() {
        return this._evcode = "eval"
    }]);
    var n = (m(g, "laya.renders.LayaGLQuickRunner"), g.__init__ = function() {
        g.map[515] = g.alpha_transform_drawLayaGL, g.map[513] = g.alpha_drawLayaGL, g.map[514] = g.transform_drawLayaGL, g.map[8194] = g.transform_drawNodes, g.map[259] = g.alpha_transform_drawTexture, g.map[257] = g.alpha_drawTexture, g.map[258] = g.transform_drawTexture, g.map[8704] = g.drawLayaGL_drawNodes
    }, g.transform_drawTexture = function(t, e, i, n) {
        t._style;
        var s = t.texture;
        e.saveTransform(g.curMat), e.transformByMatrix(t.transform, i, n), e.drawTexture(s, -t.pivotX, -t.pivotY, t._width || s.width, t._height || s.height), e.restoreTransform(g.curMat)
    }, g.alpha_drawTexture = function(t, e, i, n) {
        var s, r = t._style,
            a = t.texture;
        if (.01 < (s = r.alpha) || t._needRepaint()) {
            var o = e.globalAlpha;
            e.globalAlpha *= s, e.drawTexture(a, i - r.pivotX + a.offsetX, n - r.pivotY + a.offsetY, t._width || a.width, t._height || a.height), e.globalAlpha = o
        }
    }, g.alpha_transform_drawTexture = function(t, e, i, n) {
        var s, r = t._style,
            a = t.texture;
        if (.01 < (s = r.alpha) || t._needRepaint()) {
            var o = e.globalAlpha;
            e.globalAlpha *= s, e.saveTransform(g.curMat), e.transformByMatrix(t.transform, i, n), e.drawTexture(a, -r.pivotX + a.offsetX, -r.pivotY + a.offsetY, t._width || a.width, t._height || a.height), e.restoreTransform(g.curMat), e.globalAlpha = o
        }
    }, g.alpha_transform_drawLayaGL = function(t, e, i, n) {
        var s, r = t._style;
        if (.01 < (s = r.alpha) || t._needRepaint()) {
            var a = e.globalAlpha;
            e.globalAlpha *= s, e.saveTransform(g.curMat), e.transformByMatrix(t.transform, i, n), t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY), e.restoreTransform(g.curMat), e.globalAlpha = a
        }
    }, g.alpha_drawLayaGL = function(t, e, i, n) {
        var s, r = t._style;
        if (.01 < (s = r.alpha) || t._needRepaint()) {
            var a = e.globalAlpha;
            e.globalAlpha *= s, t._graphics && t._graphics._render(t, e, i - r.pivotX, n - r.pivotY), e.globalAlpha = a
        }
    }, g.transform_drawLayaGL = function(t, e, i, n) {
        var s = t._style;
        e.saveTransform(g.curMat), e.transformByMatrix(t.transform, i, n), t._graphics && t._graphics._render(t, e, -s.pivotX, -s.pivotY), e.restoreTransform(g.curMat)
    }, g.transform_drawNodes = function(t, e, i, n) {
        var s = t._getBit(256) && e.drawCallOptimize(!0),
            r = t._style;
        e.saveTransform(g.curMat), e.transformByMatrix(t.transform, i, n), i = -r.pivotX, n = -r.pivotY;
        var a, o = t._children,
            h = o.length;
        if (r.viewport) {
            var l = r.viewport,
                u = l.x,
                c = l.y,
                _ = l.right,
                d = l.bottom,
                f = NaN,
                p = NaN;
            for (m = 0; m < h; ++m)
                (a = o[m])._visible && (f = a._x) < _ && f + a.width > u && (p = a._y) < d && p + a.height > c && a.render(e, i, n)
        } else
            for (var m = 0; m < h; ++m)
                (a = o[m])._visible && a.render(e, i, n);
        e.restoreTransform(g.curMat), s && e.drawCallOptimize(!1)
    }, g.drawLayaGL_drawNodes = function(t, e, i, n) {
        var s = t._getBit(256) && e.drawCallOptimize(!0),
            r = t._style;
        i -= r.pivotX, n -= r.pivotY, t._graphics && t._graphics._render(t, e, i, n);
        var a, o = t._children,
            h = o.length;
        if (r.viewport) {
            var l = r.viewport,
                u = l.x,
                c = l.y,
                _ = l.right,
                d = l.bottom,
                f = NaN,
                p = NaN;
            for (m = 0; m < h; ++m)
                (a = o[m])._visible && (f = a._x) < _ && f + a.width > u && (p = a._y) < d && p + a.height > c && a.render(e, i, n)
        } else
            for (var m = 0; m < h; ++m)
                (a = o[m])._visible && a.render(e, i, n);
        s && e.drawCallOptimize(!1)
    }, g.map = {}, a(g, ["curMat", function() {
        return this.curMat = new vt
    }]), g);

    function g() {}
    var v = (m(h, "laya.utils.ColorUtils"), h._initDefault = function() {
        for (var t in h._DEFAULT = {}, h._COLOR_MAP)
            h._SAVE[t] = h._DEFAULT[t] = new h(h._COLOR_MAP[t]);
        return h._DEFAULT
    }, h._initSaveMap = function() {
        for (var t in h._SAVE_SIZE = 0, h._SAVE = {}, h._DEFAULT)
            h._SAVE[t] = h._DEFAULT[t]
    }, h.create = function(t) {
        var e = t + "",
            i = h._SAVE[e];
        return null != i ? i : (h._SAVE_SIZE < 1e3 && h._initSaveMap(), h._SAVE[e] = new h(t))
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
    }, h._DEFAULT = h._initDefault(), h._COLODID = 1, h);

    function h(t) {
        if (this.arrColor = [], null == t)
            return this.strColor = "#00000000", this.numColor = 0, void(this.arrColor = [0, 0, 0, 0]);
        var e = 0,
            i = 0,
            n = 0;
        if ("string" == typeof t)
            if (0 <= t.indexOf("rgba(") || 0 <= t.indexOf("rgb(")) {
                var s, r, a = t;
                for (s = a.indexOf("("), r = a.indexOf(")"), a = a.substring(s + 1, r), this.arrColor = a.split(","), i = this.arrColor.length, e = 0; e < i; e++)
                    this.arrColor[e] = parseFloat(this.arrColor[e]), e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                n = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], this.strColor = t
            } else {
                if ("#" === (this.strColor = t).charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                    var o = "";
                    for (e = 0; e < i; e++)
                        o += t[e] + t[e];
                    t = o
                }
                n = parseInt(t, 16)
            }
        else
            n = t, this.strColor = ke.toHexColor(n);
        0 <= this.strColor.indexOf("rgba") || 9 === this.strColor.length ? (this.arrColor = [((4278190080 & n) >>> 24) / 255, ((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255], this.numColor = (4278190080 & n) >>> 24 | (16711680 & n) >> 8 | (65280 & n) << 8 | (255 & n) << 24) : (this.arrColor = [((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255, 1], this.numColor = 4278190080 | (16711680 & n) >> 16 | 65280 & n | (255 & n) << 16), this.arrColor.__id = ++h._COLODID
    }
    var o = function() {
            function o() {}
            m(o, "laya.webgl.canvas.save.SaveBase");
            var t = o.prototype;
            return y.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1
            }, t.restore = function(t) {
                this._dataObj[this._valueName] = this._value, (o.POOL[o.POOL._length++] = this)._newSubmit && (t._curSubmit = x.RENDERBASE)
            }, o._createArray = function() {
                var t = [];
                return t._length = 0, t
            }, o._init = function() {
                var t = o._namemap = {};
                return t[1] = "ALPHA", t[2] = "fillStyle", t[8] = "font", t[256] = "lineWidth", t[512] = "strokeStyle", t[8192] = "_mergeID", t[1024] = t[2048] = t[4096] = [], t[16384] = "textBaseline", t[32768] = "textAlign", t[65536] = "_nBlendType", t[1048576] = "shader", t[2097152] = "filters", t[8388608] = "_colorFiler", t
            }, o.save = function(t, e, i, n) {
                if ((t._saveMark._saveuse & e) !== e) {
                    t._saveMark._saveuse |= e;
                    var s = o.POOL,
                        r = 0 < s._length ? s[--s._length] : new o;
                    r._value = i[r._valueName = o._namemap[e]], r._dataObj = i, r._newSubmit = n;
                    var a = t._save;
                    a[a._length++] = r
                }
            }, o.POOL = laya.webgl.canvas.save.SaveBase._createArray(), o._namemap = o._init(), o
        }(),
        x = function() {
            function a(t) {
                this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, this._parent = null, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, this._key = new H, void 0 === t && (t = 1e4), this._renderType = t, this._id = ++a.ID
            }
            m(a, "laya.webgl.submit.Submit");
            var t = a.prototype;
            return y.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.getID = function() {
                return this._id
            }, t.releaseRender = function() {
                a.RENDERBASE != this && --this._ref < 1 && ((a.POOL[a._poolSize++] = this).shaderValue.release(), this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }, t.getRenderType = function() {
                return this._renderType
            }, t.renderSubmit = function() {
                if (0 === this._numEle || !this._mesh || 0 == this._numEle)
                    return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t._getSource();
                    if (!e)
                        return 1;
                    this.shaderValue.texture = e
                }
                var i = jt.mainContext;
                return this._mesh.useMesh(i), this.shaderValue.upload(), ti.activeBlendFunction !== this._blendFn && (pt.setBlend(i, !0), this._blendFn(i), ti.activeBlendFunction = this._blendFn), i.drawElements(4, this._numEle, 5123, this._startIdx), R.renderBatches++, R.trianglesFaces += this._numEle / 3, 1
            }, t._cloneInit = function(t, e, i, n) {
                t._ref = 1, t._mesh = i, t._id = this._id, t._key.copyFrom(this._key), t._parent = this, t._blendFn = this._blendFn, t._renderType = this._renderType, t._startIdx = n * Et.BYTES_PIDX, t._numEle = this._numEle, t.shaderValue = this.shaderValue, this.shaderValue.ref++, this._ref++
            }, t.clone = function(t, e, i) {
                return null
            }, t.reUse = function(t, e) {
                return 0
            }, t.toString = function() {
                return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key
            }, a.__init__ = function() {
                var t = a.RENDERBASE = new a(-1);
                t.shaderValue = new Z(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295
            }, a.create = function(t, e, i) {
                var n = a._poolSize ? a.POOL[--a._poolSize] : new a;
                n._ref = 1, n._mesh = e, n._key.clear(), n._startIdx = e.indexNum * Et.BYTES_PIDX, n._numEle = 0;
                var s = t._nBlendType;
                n._blendFn = t._targets ? ti.targetFns[s] : ti.fns[s], n.shaderValue = i, n.shaderValue.setValue(t._shader2D);
                var r = t._shader2D.filters;
                return r && n.shaderValue.setFilters(r), n
            }, a.createShape = function(t, e, i, n) {
                var s = a._poolSize ? a.POOL[--a._poolSize] : new a;
                s._mesh = e, s._numEle = i, s._startIdx = 2 * e.indexNum, s._ref = 1, s.shaderValue = n, s.shaderValue.setValue(t._shader2D);
                var r = t._nBlendType;
                return s._key.blendShader = r, s._blendFn = t._targets ? ti.targetFns[r] : ti.fns[r], s
            }, a.TYPE_2D = 1e4, a.TYPE_CANVAS = 10003, a.TYPE_CMDSETRT = 10004, a.TYPE_CUSTOM = 10005, a.TYPE_BLURRT = 10006, a.TYPE_CMDDESTORYPRERT = 10007, a.TYPE_DISABLESTENCIL = 10008, a.TYPE_OTHERIBVB = 10009, a.TYPE_PRIMITIVE = 10010, a.TYPE_RT = 10011, a.TYPE_BLUR_RT = 10012, a.TYPE_TARGET = 10013, a.TYPE_CHANGE_VALUE = 10014, a.TYPE_SHAPE = 10015, a.TYPE_TEXTURE = 10016, a.TYPE_FILLTEXTURE = 10017, a.KEY_ONCE = -1, a.KEY_FILLRECT = 1, a.KEY_DRAWTEXTURE = 2, a.KEY_VG = 3, a.KEY_TRIANGLES = 4, a.RENDERBASE = null, a.ID = 1, a.preRender = null, a._poolSize = 0, a.POOL = [], a
        }(),
        l = function() {
            function l() {}
            m(l, "laya.display.cmd.FillTextureCmd");
            var t = l.prototype;
            return t.recover = function() {
                this.texture = null, this.offset = null, this.other = null, z.recover("FillTextureCmd", this)
            }, t.run = function(t, e, i) {
                t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other)
            }, f(0, t, "cmdID", function() {
                return "FillTexture"
            }), l.create = function(t, e, i, n, s, r, a, o) {
                var h = z.getItemByClass("FillTextureCmd", l);
                return h.texture = t, h.x = e, h.y = i, h.width = n, h.height = s, h.type = r, h.offset = a, h.other = o, h
            }, l.ID = "FillTexture", l
        }(),
        i = function() {
            function t() {
                this._glRender = null
            }
            m(t, "laya.filters.Filter");
            var e = t.prototype;
            return y.imps(e, {
                "laya.filters.IFilter": !0
            }), f(0, e, "type", function() {
                return -1
            }), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filter = function(t, e, i, n) {
                var s = e,
                    r = this._next;
                if (r) {
                    var a = t.filters,
                        o = a.length;
                    if (1 == o && 32 == a[0].type)
                        return e.save(), e.setColorFilter(a[0]), r._fun.call(r, t, e, i, n), void e.restore();
                    var h, l = Z.create(1, 0),
                        u = ye.TEMP,
                        c = s._curMat,
                        _ = vt.create();
                    c.copyTo(_);
                    var d = 0,
                        f = 0,
                        p = null,
                        m = t._cacheStyle.filterCache || null;
                    if (m && 0 == t.getRepaint()) {
                        if ((t._cacheStyle.hasGlowFilter || !1) && (d = 50, f = 25), (h = t.getBounds()).width <= 0 || h.height <= 0)
                            return;
                        h.width += d, h.height += d, u.x = h.x * _.a + h.y * _.c, u.y = h.y * _.d + h.x * _.b, h.x = u.x, h.y = u.y, u.x = h.width * _.a + h.height * _.c, u.y = h.height * _.d + h.width * _.b, h.width = u.x, h.height = u.y
                    } else {
                        t._isHaveGlowFilter() && (d = 50, f = 25), (h = new Ot).copyFrom(t.getSelfBounds()), h.x += t.x, h.y += t.y, h.x -= t.pivotX + 4, h.y -= t.pivotY + 4;
                        var g = h.x,
                            v = h.y;
                        if (h.width += d + 8, h.height += d + 8, u.x = h.x * _.a + h.y * _.c, u.y = h.y * _.d + h.x * _.b, h.x = u.x, h.y = u.y, u.x = h.width * _.a + h.height * _.c, u.y = h.height * _.d + h.width * _.b, h.width = u.x, h.height = u.y, h.width <= 0 || h.height <= 0)
                            return;
                        m && Oe.releaseRT(m), p = Oe.getRT(h.width, h.height);
                        var y = m = Oe.getRT(h.width, h.height);
                        t._getCacheStyle().filterCache = m, s.pushRT(), s.useRT(p);
                        var x = t.x - g + f,
                            T = t.y - v + f;
                        r._fun.call(r, t, e, x, T), s.useRT(y);
                        for (var b = 0; b < o; b++) {
                            0 != b && (s.useRT(p), s.drawTarget(y, 0, 0, h.width, h.height, vt.TEMP.identity(), l, null, ti.TOINT.overlay), s.useRT(y));
                            var w = a[b];
                            switch (w.type) {
                                case 16:
                                case 8:
                                    w._glRender && w._glRender.render(p, e, h.width, h.height, w);
                                    break;
                                case 32:
                                    s.setColorFilter(w), s.drawTarget(p, 0, 0, h.width, h.height, vt.EMPTY.identity(), Z.create(1, 0)), s.setColorFilter(null)
                            }
                        }
                        s.popRT()
                    }
                    if (i = i - f - t.x, n = n - f - t.y, u.setTo(i, n), _.transformPoint(u), i = u.x + h.x, n = u.y + h.y, s._drawRenderTexture(m, i, n, h.width, h.height, vt.TEMP.identity(), 1, dn.defuv), p) {
                        var C = at.create([p], function(t) {
                            t.destroy()
                        }, this);
                        p = null, e.addRenderObject(C)
                    }
                    _.destroy()
                }
            }, t
        }();
    m(e, "laya.utils.Log"), e.enable = function() {
        e._logdiv || ((e._logdiv = re.createElement("div")).style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", re.document.body.appendChild(e._logdiv), (e._btn = re.createElement("button")).innerText = "Hide", e._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", e._btn.onclick = e.toggle, re.document.body.appendChild(e._btn))
    }, e.toggle = function() {
        var t = e._logdiv.style;
        "" === t.display ? (e._btn.innerText = "Show", t.display = "none") : (e._btn.innerText = "Hide", t.display = "")
    }, e.print = function(t) {
        e._logdiv && (e.maxCount <= e._count && e.clear(), e._count++, e._logdiv.innerText += t + "\n", e.autoScrollToBottom && e._logdiv.scrollHeight - e._logdiv.scrollTop - e._logdiv.clientHeight < 50 && (e._logdiv.scrollTop = e._logdiv.scrollHeight))
    }, e.clear = function() {
        e._logdiv.innerText = "", e._count = 0
    }, e._logdiv = null, e._btn = null, e._count = 0, e.maxCount = 50, e.autoScrollToBottom = !0;

    function e() {}
    var u = function() {
            function f() {
                this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._lastClickTime = 0, this._event = new E
            }
            m(f, "laya.events.TouchManager");
            var t = f.prototype;
            return t._clearTempArrs = function() {
                f._oldArr.length = 0, f._newArr.length = 0, f._tEleArr.length = 0
            }, t.getTouchFromArr = function(t, e) {
                var i, n, s = 0;
                for (i = e.length, s = 0; s < i; s++)
                    if ((n = e[s]).id == t)
                        return n;
                return null
            }, t.removeTouchFromArr = function(t, e) {
                var i = 0;
                for (i = e.length - 1; 0 <= i; i--)
                    e[i].id == t && e.splice(i, 1)
            }, t.createTouchO = function(t, e) {
                var i;
                return (i = z.getItem("TouchData") || {}).id = e, i.tar = t, i
            }, t.onMouseDown = function(t, e, i) {
                var n, s, r, a;
                void 0 === i && (i = !1), this.enable && (n = this.getTouchFromArr(e, this.preOvers), r = this.getEles(t, null, f._tEleArr), n ? n.tar = t : (s = this.createTouchO(t, e), this.preOvers.push(s)), re.onMobile && this.sendEvents(r, "mouseover"), a = i ? this.preDowns : this.preRightDowns, (n = this.getTouchFromArr(e, a)) ? n.tar = t : (s = this.createTouchO(t, e), a.push(s)), this.sendEvents(r, i ? "mousedown" : "rightmousedown"), this._clearTempArrs())
            }, t.sendEvents = function(t, e) {
                var i, n, s, r = 0;
                for (i = t.length, this._event._stoped = !1, n = t[0], r = 0; r < i; r++) {
                    if ((s = t[r]).destroyed)
                        return;
                    if (s.event(e, this._event.setTo(e, s, n)), this._event._stoped)
                        break
                }
            }, t.getEles = function(t, e, i) {
                for (i ? i.length = 0 : i = []; t && t != e;)
                    i.push(t), t = t.parent;
                return i
            }, t.checkMouseOutAndOverOfMove = function(t, e, i) {
                if (void 0 === i && (i = 0), e != t) {
                    var n, s, r = 0,
                        a = 0;
                    if (e.contains(t))
                        s = this.getEles(t, e, f._tEleArr), this.sendEvents(s, "mouseover");
                    else if (t.contains(e))
                        s = this.getEles(e, t, f._tEleArr), this.sendEvents(s, "mouseout");
                    else {
                        var o, h;
                        (s = f._tEleArr).length = 0, o = this.getEles(e, null, f._oldArr), h = this.getEles(t, null, f._newArr), a = o.length;
                        var l = 0;
                        for (r = 0; r < a; r++) {
                            if (n = o[r], 0 <= (l = h.indexOf(n))) {
                                h.splice(l, h.length - l);
                                break
                            }
                            s.push(n)
                        }
                        0 < s.length && this.sendEvents(s, "mouseout"), 0 < h.length && this.sendEvents(h, "mouseover")
                    }
                }
            }, t.onMouseMove = function(t, e) {
                var i, n;
                this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar), i.tar = t, n = this.getEles(t, null, f._tEleArr)) : (n = this.getEles(t, null, f._tEleArr), this.sendEvents(n, "mouseover"), this.preOvers.push(this.createTouchO(t, e))), this.sendEvents(n, "mousemove"), this._clearTempArrs())
            }, t.getLastOvers = function() {
                return (f._tEleArr.length = 0) < this.preOvers.length && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, f._tEleArr) : (f._tEleArr.push(y.stage), f._tEleArr)
            }, t.stageMouseOut = function() {
                var t;
                t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout")
            }, t.onMouseUp = function(t, e, i) {
                if (void 0 === i && (i = !1), this.enable) {
                    var n, s, r, a, o, h, l = 0,
                        u = 0,
                        c = re.onMobile;
                    if (s = this.getEles(t, null, f._tEleArr), this.sendEvents(s, i ? "mouseup" : "rightmouseup"), h = i ? this.preDowns : this.preRightDowns, n = this.getTouchFromArr(e, h)) {
                        var _, d = re.now();
                        if (_ = d - this._lastClickTime < 300, this._lastClickTime = d, t == n.tar)
                            o = s;
                        else
                            for (r = this.getEles(n.tar, null, f._oldArr), (o = f._newArr).length = 0, u = r.length, l = 0; l < u; l++)
                                a = r[l], 0 <= s.indexOf(a) && o.push(a);
                        0 < o.length && this.sendEvents(o, i ? "click" : "rightclick"), i && _ && this.sendEvents(o, "doubleclick"), this.removeTouchFromArr(e, h), n.tar = null, z.recover("TouchData", n)
                    } else;
                    (n = this.getTouchFromArr(e, this.preOvers)) && c && ((o = this.getEles(n.tar, null, o)) && 0 < o.length && this.sendEvents(o, "mouseout"), this.removeTouchFromArr(e, this.preOvers), n.tar = null, z.recover("TouchData", n)), this._clearTempArrs()
                }
            }, f._oldArr = [], f._newArr = [], f._tEleArr = [], a(f, ["I", function() {
                return this.I = new f
            }]), f
        }(),
        c = function() {
            function a() {
                this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new H
            }
            m(a, "laya.webgl.submit.SubmitTarget");
            var t = a.prototype;
            return y.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.renderSubmit = function() {
                var t = jt.mainContext;
                this._mesh.useMesh(t);
                var e = this.srcRT;
                return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), this.blend(), R.renderBatches++, R.trianglesFaces += this._numEle / 3, jt.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 1
            }, t.blend = function() {
                if (ti.activeBlendFunction !== ti.fns[this.blendType]) {
                    var t = jt.mainContext;
                    t.enable(3042), ti.fns[this.blendType](t), ti.activeBlendFunction = ti.fns[this.blendType]
                }
            }, t.getRenderType = function() {
                return 0
            }, t.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = a.POOL;
                    t[t._length++] = this
                }
            }, t.reUse = function(t, e) {
                return this._startIdx = e, this._ref++, e
            }, a.create = function(t, e, i, n) {
                var s = a.POOL._length ? a.POOL[--a.POOL._length] : new a;
                if (s._mesh = e, s.srcRT = n, s._startIdx = e.indexNum * Et.BYTES_PIDX, s._ref = 1, s._key.clear(), s._numEle = 0, s.blendType = t._nBlendType, s._key.blendShader = s.blendType, s.shaderValue = i, s.shaderValue.setValue(t._shader2D), t._colorFiler) {
                    var r = t._colorFiler;
                    i.defines.add(r.type), i.colorMat = r._mat, i.colorAlpha = r._alpha
                }
                return s
            }, a.POOL = [], a.__init$ = function() {
                a.POOL._length = 0
            }, a
        }(),
        _ = function() {
            function a() {}
            m(a, "laya.display.cmd.DrawImageCmd");
            var t = a.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, z.recover("DrawImageCmd", this)
            }, t.run = function(t, e, i) {
                t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height)
            }, f(0, t, "cmdID", function() {
                return "DrawImage"
            }), a.create = function(t, e, i, n, s) {
                var r = z.getItemByClass("DrawImageCmd", a);
                return (r.texture = t)._addReference(), r.x = e, r.y = i, r.width = n, r.height = s, r
            }, a.ID = "DrawImage", a
        }(),
        s = function() {
            function t() {
                this._id = ke.getGID(), this._resetComp()
            }
            m(t, "laya.components.Component");
            var e = t.prototype;
            return y.imps(e, {
                "laya.resource.ISingletonElement": !0,
                "laya.resource.IDestroy": !0
            }), e._isScript = function() {
                return !1
            }, e._resetComp = function() {
                this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null
            }, e._getIndexInList = function() {
                return this._indexInList
            }, e._setIndexInList = function(t) {
                this._indexInList = t
            }, e._onAdded = function() {}, e._onAwake = function() {}, e._onEnable = function() {}, e._onDisable = function() {}, e._onEnableInScene = function() {}, e._onDisableInScene = function() {}, e._onDestroy = function() {}, e.onReset = function() {}, e._parse = function(t) {}, e._cloneTo = function(t) {}, e._setActive = function(t) {
                t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable()
            }, e._setActiveInScene = function(t) {
                t ? this._onEnableInScene() : this._onDisableInScene()
            }, e.destroy = function() {
                this.owner && this.owner._destroyComponent(this)
            }, e._destroy = function() {
                this.owner.activeInHierarchy && this._enabled && (this._setActive(!1), this._isScript() && this.onDisable()), this.owner._scene && this._setActiveInScene(!1), this._onDestroy(), this._destroyed = !0, this.onReset !== laya.components.Component.prototype.onReset ? (this.onReset(), this._resetComp(), z.recoverByClass(this)) : this._resetComp()
            }, f(0, e, "id", function() {
                return this._id
            }), f(0, e, "enabled", function() {
                return this._enabled
            }, function(t) {
                this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable())
            }), f(0, e, "isSingleton", function() {
                return !0
            }), f(0, e, "destroyed", function() {
                return this._destroyed
            }), t
        }(),
        T = function() {
            var h;

            function e() {
                this._$0__events = null
            }
            m(e, "laya.events.EventDispatcher");
            var t = e.prototype;
            return t.hasListener = function(t) {
                return !!(this._$0__events && this._$0__events[t])
            }, t.event = function(t, e) {
                if (!this._$0__events || !this._$0__events[t])
                    return !1;
                var i = this._$0__events[t];
                if (i.run)
                    i.once && delete this._$0__events[t], null != e ? i.runWith(e) : i.run();
                else {
                    for (var n = 0, s = i.length; n < s; n++) {
                        var r = i[n];
                        r && (null != e ? r.runWith(e) : r.run()), r && !r.once || (i.splice(n, 1), n--, s--)
                    }
                    0 === i.length && this._$0__events && delete this._$0__events[t]
                }
                return !0
            }, t.on = function(t, e, i, n) {
                return this._createListener(t, e, i, n, !1)
            }, t.once = function(t, e, i, n) {
                return this._createListener(t, e, i, n, !0)
            }, t._createListener = function(t, e, i, n, s, r) {
                void 0 === r && (r = !0), r && this.off(t, e, i, s);
                var a = h.create(e || this, i, n, s);
                this._$0__events || (this._$0__events = {});
                var o = this._$0__events;
                return o[t] ? o[t].run ? o[t] = [o[t], a] : o[t].push(a) : o[t] = a, this
            }, t.off = function(t, e, i, n) {
                if (void 0 === n && (n = !1), !this._$0__events || !this._$0__events[t])
                    return this;
                var s = this._$0__events[t];
                if (null != s)
                    if (s.run)
                        e && s.caller !== e || null != i && s.method !== i || n && !s.once || (delete this._$0__events[t], s.recover());
                    else {
                        for (var r = 0, a = 0, o = s.length; a < o; a++) {
                            var h = s[a];
                            h ? !h || e && h.caller !== e || null != i && h.method !== i || n && !h.once || (r++, s[a] = null, h.recover()) : r++
                        }
                        r === o && delete this._$0__events[t]
                    }
                return this
            }, t.offAll = function(t) {
                var e = this._$0__events;
                if (!e)
                    return this;
                if (t)
                    this._recoverHandlers(e[t]), delete e[t];
                else {
                    for (var i in e)
                        this._recoverHandlers(e[i]);
                    this._$0__events = null
                }
                return this
            }, t.offAllCaller = function(t) {
                if (t && this._$0__events)
                    for (var e in this._$0__events)
                        this.off(e, t, null);
                return this
            }, t._recoverHandlers = function(t) {
                if (t)
                    if (t.run)
                        t.recover();
                    else
                        for (var e = t.length - 1; - 1 < e; e--)
                            t[e] && (t[e].recover(), t[e] = null)
            }, t.isMouseEvent = function(t) {
                return e.MOUSE_EVENTS[t] || !1
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
                function s(t, e, i, n) {
                    s.__super.call(this, t, e, i, n)
                }
                Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                    enumerable: !1,
                    writable: !0
                }), m(s, "", b), s.prototype.recover = function() {
                    0 < this._id && (this._id = 0, s._pool.push(this.clear()))
                }, s.create = function(t, e, i, n) {
                    return void 0 === n && (n = !0), s._pool.length ? s._pool.pop().setTo(t, e, i, n) : new s(t, e, i, n)
                }, s._pool = [], h = s
            }, e
        }(),
        b = function() {
            function s(t, e, i, n) {
                this.once = !1, void(this._id = 0) === n && (n = !1), this.setTo(t, e, i, n)
            }
            m(s, "laya.utils.Handler");
            var t = s.prototype;
            return t.setTo = function(t, e, i, n) {
                return this._id = s._gid++, this.caller = t, this.method = e, this.args = i, this.once = n, this
            }, t.run = function() {
                if (null == this.method)
                    return null;
                var t = this._id,
                    e = this.method.apply(this.caller, this.args);
                return this._id === t && this.once && this.recover(), e
            }, t.runWith = function(t) {
                if (null == this.method)
                    return null;
                var e = this._id;
                if (null == t)
                    var i = this.method.apply(this.caller, this.args);
                else
                    i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
                return this._id === e && this.once && this.recover(), i
            }, t.clear = function() {
                return this.caller = null, this.method = null, this.args = null, this
            }, t.recover = function() {
                0 < this._id && (this._id = 0, s._pool.push(this.clear()))
            }, s.create = function(t, e, i, n) {
                return void 0 === n && (n = !0), s._pool.length ? s._pool.pop().setTo(t, e, i, n) : new s(t, e, i, n)
            }, s._pool = [], s._gid = 1, s
        }(),
        d = function() {
            function t() {
                this.ib = null, this.vb = null;
                jt.mainContext;
                this.ib = $i.create(35048), this.vb = Zi.create(8)
            }
            m(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
            var e = t.prototype;
            return e.addSkinMesh = function(t) {
                t.getData2(this.vb, this.ib, this.vb._byteLength / 32)
            }, e.reset = function() {
                this.vb.clear(), this.ib.clear()
            }, t.getInstance = function() {
                return t.instance = t.instance || new t
            }, t.instance = null, t
        }(),
        w = function() {
            function _() {}
            m(_, "laya.display.cmd.DrawTrianglesCmd");
            var t = _.prototype;
            return t.recover = function() {
                this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, this.matrix = null, z.recover("DrawTrianglesCmd", this)
            }, t.run = function(t, e, i) {
                t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode)
            }, f(0, t, "cmdID", function() {
                return "DrawTriangles"
            }), _.create = function(t, e, i, n, s, r, a, o, h, l) {
                var u = z.getItemByClass("DrawTrianglesCmd", _);
                if (u.texture = t, u.x = e, u.y = i, u.vertices = n, u.uvs = s, u.indices = r, u.matrix = a, u.alpha = o, h) {
                    u.color = new di;
                    var c = v.create(h).arrColor;
                    u.color.color(255 * c[0], 255 * c[1], 255 * c[2], 255 * c[3])
                }
                return u.blendMode = l, u
            }, _.ID = "DrawTriangles", _
        }(),
        C = function() {
            function u() {}
            m(u, "laya.display.cmd.DrawPieCmd");
            var t = u.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, z.recover("DrawPieCmd", this)
            }, t.run = function(t, e, i) {
                t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid)
            }, f(0, t, "startAngle", function() {
                return 180 * this._startAngle / Math.PI
            }, function(t) {
                this._startAngle = t * Math.PI / 180
            }), f(0, t, "cmdID", function() {
                return "DrawPie"
            }), f(0, t, "endAngle", function() {
                return 180 * this._endAngle / Math.PI
            }, function(t) {
                this._endAngle = t * Math.PI / 180
            }), u.create = function(t, e, i, n, s, r, a, o, h) {
                var l = z.getItemByClass("DrawPieCmd", u);
                return l.x = t, l.y = e, l.radius = i, l._startAngle = n, l._endAngle = s, l.fillColor = r, l.lineColor = a, l.lineWidth = o, l.vid = h, l
            }, u.ID = "DrawPie", u
        }(),
        S = function() {
            function t() {
                this.id = NaN, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null, this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1
            }
            m(t, "laya.utils.WordText");
            var e = t.prototype;
            return e.setText = function(t) {
                this.changed = !0, this._text = t, this.width = -1, this.cleanCache()
            }, e.toString = function() {
                return this._text
            }, e.charCodeAt = function(t) {
                return this._text ? this._text.charCodeAt(t) : NaN
            }, e.charAt = function(t) {
                return this._text ? this._text.charAt(t) : null
            }, e.cleanCache = function() {
                this.pageChars.forEach(function(t) {
                    var e = t.tex;
                    t.words;
                    1 == t.words.length && e && e.ri && e.destroy()
                }), this.pageChars = [], this.startID = 0
            }, f(0, e, "length", function() {
                return this._text ? this._text.length : 0
            }), t
        }(),
        A = function() {
            function e(t, e, i) {
                this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, this._stride = t, this._vb = new Zi(t, 35048), e ? this._vb._resizeBuffer(e, !1) : Ge.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), this._ib = new $i, i && this._ib._resizeBuffer(i, !1)
            }
            m(e, "laya.webgl.utils.Mesh2D");
            var t = e.prototype;
            return t.cloneWithNewVB = function() {
                var t = new e(this._stride, 0, 0);
                return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo, t
            }, t.cloneWithNewVBIB = function() {
                var t = new e(this._stride, 0, 0);
                return t._attribInfo = this._attribInfo, t
            }, t.getVBW = function() {
                return this._vb.setNeedUpload(), this._vb
            }, t.getVBR = function() {
                return this._vb
            }, t.getIBR = function() {
                return this._ib
            }, t.getIBW = function() {
                return this._ib.setNeedUpload(), this._ib
            }, t.createQuadIB = function(t) {
                this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var e = this._ib.getUint16Array(), i = 0, n = 0, s = 0; s < t; s++)
                    e[i++] = n, e[i++] = n + 2, e[i++] = n + 1, e[i++] = n, e[i++] = n + 3, e[i++] = n + 2, n += 4;
                this._ib.setNeedUpload()
            }, t.setAttributes = function(t) {
                if (this._attribInfo = t, this._attribInfo.length % 3 != 0)
                    throw "Mesh2D setAttributes error!"
            }, t.configVAO = function(t) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new Oi), this._vao.bind(), this._vb._bindForVAO(), this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var e = this._attribInfo.length / 3, i = 0, n = 0; n < e; n++) {
                        var s = this._attribInfo[i + 1],
                            r = this._attribInfo[i],
                            a = this._attribInfo[i + 2];
                        t.enableVertexAttribArray(n), t.vertexAttribPointer(n, s, r, !1, this._stride, a), i += 3
                    }
                    this._vao.unBind()
                }
            }, t.useMesh = function(t) {
                this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), this._vb._bind_upload() || this._vb.bind()
            }, t.getEleNum = function() {
                return this._ib.getBuffer().byteLength / 2
            }, t.releaseMesh = function() {}, t.destroy = function() {}, t.clearVB = function() {
                this._vb.clear()
            }, e._gvaoid = 0, e
        }(),
        E = function() {
            function t() {}
            m(t, "laya.events.Event");
            var e = t.prototype;
            return e.setTo = function(t, e, i) {
                return this.type = t, this.currentTarget = e, this.target = i, this
            }, e.stopPropagation = function() {
                this._stoped = !0
            }, f(0, e, "stageY", function() {
                return y.stage.mouseY
            }), f(0, e, "charCode", function() {
                return this.nativeEvent.charCode
            }), f(0, e, "touches", function() {
                if (!this.nativeEvent)
                    return null;
                var t = this.nativeEvent.touches;
                if (t)
                    for (var e = y.stage, i = 0, n = t.length; i < n; i++) {
                        var s = t[i],
                            r = ye.TEMP;
                        r.setTo(s.clientX, s.clientY), e._canvasTransform.invertTransformPoint(r), e.transform.invertTransformPoint(r), s.stageX = r.x, s.stageY = r.y
                    }
                return t
            }), f(0, e, "keyLocation", function() {
                return this.nativeEvent.location || this.nativeEvent.keyLocation
            }), f(0, e, "ctrlKey", function() {
                return this.nativeEvent.ctrlKey
            }), f(0, e, "altKey", function() {
                return this.nativeEvent.altKey
            }), f(0, e, "shiftKey", function() {
                return this.nativeEvent.shiftKey
            }), f(0, e, "stageX", function() {
                return y.stage.mouseX
            }), t.EMPTY = new t, t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.READY = "ready", t.PROGRESS = "progress", t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", t.MESSAGE = "message", t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", t.KEY_UP = "keyup", t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", t.DRAG_END = "dragend", t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", t.FOCUS_CHANGE = "focuschange", t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", t.START = "start", t.END = "end", t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", t.DEVICE_LOST = "devicelost", t.TRANSFORM_CHANGED = "transformchanged", t.ANIMATION_CHANGED = "animationchanged", t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", t.TRIGGER_EXIT = "triggerexit", t
        }(),
        M = function() {
            function M() {
                this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0, this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [], this.tmpAtlasPos = new ye;
                var t = !1,
                    e = y.MiniAdpter;
                e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()), re.onMiniGame && !t && (M.isWan1Wan = !0), re.onLimixiu && (M.isWan1Wan = !0), this.charRender = te.isConchApp ? new Xi : new Gi(M.atlasWidth, M.atlasWidth, M.scaleFontWithCtx, !M.isWan1Wan, !1), M.textRenderInst = this, y.textRender = this, M.atlasWidth2 = M.atlasWidth * M.atlasWidth
            }
            m(M, "laya.webgl.text.TextRender");
            var t = M.prototype;
            return t.setFont = function(t) {
                if (this.lastFont != t) {
                    this.lastFont = t;
                    var e = this.getFontSizeInfo(t._family),
                        i = e >> 24,
                        n = e >> 16 & 255,
                        s = e >> 8 & 255,
                        r = 255 & e,
                        a = t._size / M.standardFontSize;
                    this.fontSizeOffX = Math.ceil(i * a), this.fontSizeOffY = Math.ceil(n * a), this.fontSizeW = Math.ceil(s * a), this.fontSizeH = Math.ceil(r * a), 0 <= t._font.indexOf("italic") ? this.fontStr = t._font.replace("italic", "") : this.fontStr = t._font
                }
            }, t.getNextChar = function(t) {
                var e = t.length,
                    i = this._curStrPos;
                if (e <= i)
                    return null;
                for (var n = i, s = 0; n < e; n++) {
                    var r = t.charCodeAt(n);
                    if (r >>> 11 == 27) {
                        if (1 == s)
                            break;
                        s = 1, n++
                    } else if (65038 === r || 65039 === r);
                    else if (8205 == r)
                        s = 2;
                    else if (0 == s)
                        s = 1;
                    else if (1 == s)
                        break
                }
                return this._curStrPos = n, t.substring(i, n)
            }, t.filltext = function(t, e, i, n, s, r, a, o, h, l) {
                if (void 0 === l && (l = 0), !(e.length <= 0)) {
                    var u = ni.Parse(s),
                        c = 0;
                    switch (h) {
                        case "center":
                            c = Ct.ENUM_TEXTALIGN_CENTER;
                            break;
                        case "right":
                            c = Ct.ENUM_TEXTALIGN_RIGHT
                    }
                    this._fast_filltext(t, e, null, i, n, u, r, a, o, c, l)
                }
            }, t.fillWords = function(t, e, i, n, s, r, a, o) {
                if (e && !(e.length <= 0)) {
                    var h = ni.Parse(s);
                    this._fast_filltext(t, null, e, i, n, h, r, a, o, 0, 0)
                }
            }, t._fast_filltext = function(t, e, i, n, s, r, a, o, h, l, u) {
                if (void 0 === u && (u = 0), !(e && e.length < 1 || i && i.length < 1)) {
                    if (h < 0 && (h = 0), this.setFont(r), this.fontScaleX = this.fontScaleY = 1, !te.isConchApp && M.scaleFontWithCtx) {
                        var c = 1,
                            _ = 1;
                        if (_ = te.isConchApp ? (c = t._curMat.getScaleX(), t._curMat.getScaleY()) : (c = t.getMatScaleX(), t.getMatScaleY()), c < 1e-4 || _ < .1)
                            return;
                        1 < c && (this.fontScaleX = c), 1 < _ && (this.fontScaleY = _)
                    }
                    r._italic && (t._italicDeg = 13);
                    var d = e,
                        f = !i && e instanceof laya.utils.WordText,
                        p = e,
                        m = !!i,
                        g = f ? d.pageChars : [],
                        v = 0;
                    switch (f ? (p = d._text, (v = d.width) < 0 && (v = d.width = this.charRender.getWidth(this.fontStr, p))) : v = p ? this.charRender.getWidth(this.fontStr, p) : 0, l) {
                        case Ct.ENUM_TEXTALIGN_CENTER:
                            n -= v / 2;
                            break;
                        case Ct.ENUM_TEXTALIGN_RIGHT:
                            n -= v
                    }
                    d && g && this.hasFreedText(g) && (g = d.pageChars = []);
                    var y = null,
                        x = this.renderPerChar = !f || M.forceSplitRender || m || f && d.splitRender;
                    if (!g || g.length < 1)
                        if (x) {
                            var T, b = 0,
                                w = 0;
                            for (this._curStrPos = 0;;) {
                                if (m) {
                                    var C = i[this._curStrPos++];
                                    C ? (T = C.char, b = C.x, w = C.y) : T = null
                                } else
                                    T = this.getNextChar(p);
                                if (!T)
                                    break;
                                if (!(y = this.getCharRenderInfo(T, r, a, o, h, !1)))
                                    break;
                                if (y.isSpace);
                                else {
                                    var A = g[y.tex.id];
                                    if (A)
                                        A = A.words;
                                    else {
                                        var E = {
                                            texgen: y.tex.genID,
                                            tex: y.tex,
                                            words: []
                                        };
                                        A = (g[y.tex.id] = E).words
                                    }
                                    te.isConchApp ? A.push({
                                        ri: y,
                                        x: b,
                                        y: w,
                                        w: y.bmpWidth / this.fontScaleX,
                                        h: y.bmpHeight / this.fontScaleY
                                    }) : A.push({
                                        ri: y,
                                        x: b + 1 / this.fontScaleX,
                                        y: w,
                                        w: (y.bmpWidth - 2) / this.fontScaleX,
                                        h: (y.bmpHeight - 1) / this.fontScaleY
                                    }), b += y.width
                                }
                            }
                        } else {
                            var S = M.noAtlas || v * this.fontScaleX > M.atlasWidth;
                            y = this.getCharRenderInfo(p, r, a, o, h, S), te.isConchApp ? g[0] = {
                                texgen: y.tex.genID,
                                tex: y.tex,
                                words: [{
                                    ri: y,
                                    x: 0,
                                    y: 0,
                                    w: y.bmpWidth / this.fontScaleX,
                                    h: y.bmpHeight / this.fontScaleY
                                }]
                            } : g[0] = {
                                texgen: y.tex.genID,
                                tex: y.tex,
                                words: [{
                                    ri: y,
                                    x: 1 / this.fontScaleX,
                                    y: 0 / this.fontScaleY,
                                    w: (y.bmpWidth - 2) / this.fontScaleX,
                                    h: (y.bmpHeight - 1) / this.fontScaleY
                                }]
                            }
                        }
                    this._drawResortedWords(t, n, s, g), t._italicDeg = 0
                }
            }, t._drawResortedWords = function(t, e, i, n) {
                for (var s = t._charSubmitCache && t._charSubmitCache._enbale, r = t._curMat, a = n.length, o = 0; o < a; o++) {
                    var h = n[o];
                    if (h) {
                        var l = h.words,
                            u = l.length;
                        if (!(u <= 0))
                            for (var c = n[o].tex, _ = 0; _ < u; _++) {
                                var d = l[_],
                                    f = d.ri;
                                f.isSpace || (f.touch(), t.drawTexAlign = !0, te.isConchApp ? t._drawTextureM(c.texture, e + d.x - f.orix, i + d.y - f.oriy, d.w, d.h, null, 1, f.uv) : t._inner_drawTexture(c.texture, c.texture.bitmap.id, e + d.x - f.orix, i + d.y - f.oriy, d.w, d.h, r, f.uv, 1, s), t.touches && t.touches.push(f))
                            }
                    }
                }
            }, t.hasFreedText = function(t) {
                for (var e = t.length, i = 0; i < e; i++) {
                    var n = t[i];
                    if (n) {
                        var s = n.tex;
                        if (s.__destroyed || s.genID != n.texgen)
                            return !0
                    }
                }
                return !1
            }, t.getCharRenderInfo = function(t, e, i, n, s, r) {
                void 0 === r && (r = !1);
                var a = this.mapFont[e._family];
                null == a && (this.mapFont[e._family] = a = this.fontID++);
                var o = t + "_" + a + "_" + e._size + "_" + i;
                0 < s && (o += "_" + n + s), e._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                var h = 0,
                    l = this.textAtlases.length,
                    u = null,
                    c = null;
                if (!r)
                    for (h = 0; h < l; h++)
                        if (u = (c = this.textAtlases[h]).charMaps[o])
                            return u.touch(), u;
                u = new Mt, this.charRender.scale(this.fontScaleX, this.fontScaleY), u.char = t, u.height = e._size;
                var _ = e._size / 3 | 0,
                    d = null,
                    f = Math.ceil(this.charRender.getWidth(this.fontStr, t) * this.fontScaleX);
                if (f > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, f + 2 * _)), r) {
                    d = this.charRender.getCharBmp(t, this.fontStr, s, i, n, u, _, _, _, _, null);
                    var p = Ki.getTextTexture(d.width, d.height);
                    p.addChar(d, 0, 0, u.uv), u.tex = p, u.orix = _, u.oriy = _, p.ri = u, this.isoTextures.push(p)
                } else {
                    var m = t.length,
                        g = 1 * s,
                        v = Math.ceil((this.fontSizeW + 2 * g) * this.fontScaleX),
                        y = Math.ceil((this.fontSizeH + 2 * g) * this.fontScaleY);
                    M.imgdtRect[0] = (_ - this.fontSizeOffX - g) * this.fontScaleX | 0, M.imgdtRect[1] = (_ - this.fontSizeOffY - g) * this.fontScaleY | 0, this.renderPerChar || 1 == m ? (M.imgdtRect[2] = Math.max(f, v), M.imgdtRect[3] = Math.max(f, y)) : (M.imgdtRect[2] = -1, M.imgdtRect[3] = y), d = this.charRender.getCharBmp(t, this.fontStr, s, i, n, u, _, _, _, _, M.imgdtRect), c = this.addBmpData(d, u), M.isWan1Wan ? (u.orix = _, u.oriy = _) : (u.orix = this.fontSizeOffX + g, u.oriy = this.fontSizeOffY + g), c.charMaps[o] = u
                }
                return u
            }, t.addBmpData = function(t, e) {
                for (var i = t.width, n = t.height, s = this.textAtlases.length, r = null, a = !1, o = 0; o < s && !(a = (r = this.textAtlases[o]).getAEmpty(i, n, this.tmpAtlasPos)); o++);
                if (!a) {
                    if (r = new _e, this.textAtlases.push(r), !(a = r.getAEmpty(i, n, this.tmpAtlasPos)))
                        throw "err1";
                    this.cleanAtlases()
                }
                return a && (r.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), e.tex = r.texture), r
            }, t.GC = function() {
                for (var t = 0, e = this.textAtlases.length, i = 0, n = M.destroyAtlasDt, s = 0, r = R.loopCount, a = -1, o = 0, h = null, l = null; t < e; t++) {
                    if (h = (l = this.textAtlases[t]).texture) {
                        h.curUsedCovRate, s += h.curUsedCovRateAtlas;
                        var u = l.usedRate - h.curUsedCovRateAtlas;
                        o < u && (o = u, a = t)
                    }
                    n < (i = r - l.texture.lastTouchTm) && (M.showLog && console.log(l.texture.id), l.destroy(), this.textAtlases[t] = this.textAtlases[e - 1], e--, t--, a = -1)
                }
                for (this.textAtlases.length = e, e = this.isoTextures.length, t = 0; t < e; t++)
                    i = r - (h = this.isoTextures[t]).lastTouchTm, M.destroyUnusedTextureDt < i && (h.ri.deleted = !0, h.ri.tex = null, h.destroy(), this.isoTextures[t] = this.isoTextures[e - 1], e--, t--);
                this.isoTextures.length = e;
                var c = 1 < this.textAtlases.length && 2 <= this.textAtlases.length - s;
                (M.atlasWidth * M.atlasWidth * 4 * this.textAtlases.length > M.cleanMem || c || M.simClean) && (M.simClean = !1, M.showLog && console.log("清理使用率低的贴图。总使用率:", s, ":", this.textAtlases.length, "最差贴图:" + a), 0 <= a && ((l = this.textAtlases[a]).destroy(), this.textAtlases[a] = this.textAtlases[this.textAtlases.length - 1], this.textAtlases.length = this.textAtlases.length - 1)), Ki.clean()
            }, t.cleanAtlases = function() {}, t.getCharBmp = function(t) {}, t.checkBmpLine = function(t, e, i, n) {
                this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
                for (var s = t.width * e + i, r = i; r < n; r++)
                    if (0 != this.bmpData32[s++])
                        return !0;
                return !1
            }, t.updateBbx = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = t.width,
                    s = t.height,
                    r = 0,
                    a = e[1],
                    o = 0,
                    h = a;
                if (this.checkBmpLine(t, a, 0, n))
                    for (;;) {
                        if (a <= (h = (a + o) / 2 | 0) + 1) {
                            e[1] = h;
                            break
                        }
                        this.checkBmpLine(t, h, 0, n) ? a = h : o = h
                    }
                if (e[3] > s)
                    e[3] = s;
                else if (h = a = e[3], o = s, this.checkBmpLine(t, a, 0, n))
                    for (;;) {
                        if ((h = (a + o) / 2 | 0) - 1 <= a) {
                            e[3] = h;
                            break
                        }
                        this.checkBmpLine(t, h, 0, n) ? a = h : o = h
                    }
                if (!i) {
                    var l = e[0],
                        u = n * e[1];
                    for (h = e[1]; h < e[3]; h++) {
                        for (r = 0; r < l; r++)
                            if (0 != this.bmpData32[u + r]) {
                                l = r;
                                break
                            }
                        u += n
                    }
                    e[0] = l;
                    var c = e[2];
                    for (u = n * e[1], h = e[1]; h < e[3]; h++) {
                        for (r = c; r < n; r++)
                            if (0 != this.bmpData32[u + r]) {
                                c = r;
                                break
                            }
                        u += n
                    }
                    e[2] = c
                }
            }, t.getFontSizeInfo = function(t) {
                var e = this.fontSizeInfo[t];
                if (null != e)
                    return e;
                var i = "bold " + M.standardFontSize + "px " + t;
                if (M.isWan1Wan) {
                    this.fontSizeW = 1.5 * this.charRender.getWidth(i, "有"), this.fontSizeH = 1.5 * M.standardFontSize;
                    var n = this.fontSizeW << 8 | this.fontSizeH;
                    return this.fontSizeInfo[t] = n
                }
                M.pixelBBX[0] = M.standardFontSize / 2, M.pixelBBX[1] = M.standardFontSize / 2, M.pixelBBX[2] = M.standardFontSize, M.pixelBBX[3] = M.standardFontSize;
                var s = 16,
                    r = 16;
                this.charRender.scale(1, 1), M.tmpRI.height = M.standardFontSize;
                var a = this.charRender.getCharBmp("g", i, 0, "red", null, M.tmpRI, s, r, 16, 16);
                te.isConchApp && (a.data = new Uint8ClampedArray(a.data)), this.bmpData32 = new Uint32Array(a.data.buffer), this.updateBbx(a, M.pixelBBX, !1), a = this.charRender.getCharBmp("有", i, 0, "red", null, M.tmpRI, r, r, 16, 16), te.isConchApp && (a.data = new Uint8ClampedArray(a.data)), this.bmpData32 = new Uint32Array(a.data.buffer), M.pixelBBX[2] < s + M.tmpRI.width && (M.pixelBBX[2] = s + M.tmpRI.width), this.updateBbx(a, M.pixelBBX, !1), te.isConchApp && (r = s = 0);
                var o = Math.max(s - M.pixelBBX[0], 0) << 24 | Math.max(r - M.pixelBBX[1], 0) << 16 | M.pixelBBX[2] - M.pixelBBX[0] << 8 | M.pixelBBX[3] - M.pixelBBX[1] + 1;
                return this.fontSizeInfo[t] = o
            }, t.printDbgInfo = function() {
                for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + M.atlasWidth + "x" + M.atlasWidth, " 用canvas:", M.isWan1Wan), console.log("图集占用空间:" + M.atlasWidth * M.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), console.log("缓存用到的字体:"), this.mapFont) {
                    var e = this.getFontSizeInfo(t),
                        i = e >> 24,
                        n = e >> 16 & 255,
                        s = e >> 8 & 255,
                        r = 255 & e;
                    console.log("    " + t, " off:", i, n, " size:", s, r)
                }
                var a = 0;
                console.log("缓存数据:");
                var o = 0,
                    h = 0;
                this.textAtlases.forEach(function(t) {
                    var e = t.texture.id,
                        i = R.loopCount - t.texture.lastTouchTm,
                        n = 0 < i ? i + "帧以前" : "当前帧";
                    for (var s in o += t.texture.curUsedCovRate, h += t.texture.curUsedCovRateAtlas, console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + n + ")--:"), t.charMaps) {
                        var r = t.charMaps[s];
                        console.log("     off:", r.orix, r.oriy, " bmp宽高:", r.bmpWidth, r.bmpHeight, "无效:", r.deleted, "touchdt:", R.loopCount - r.touchTick, "位置:", r.uv[0] * M.atlasWidth | 0, r.uv[1] * M.atlasWidth | 0, "字符:", r.char, "key:", s), a++
                    }
                }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                    console.log("    size:", t._texW, t._texH, "touch间隔:", R.loopCount - t.lastTouchTm, "char:", t.ri.char)
                }), console.log("总缓存:", a, "总使用率:", o, "总当前图集使用率:", h)
            }, t.showAtlas = function(t, i, e, n, s, r) {
                if (!this.textAtlases[t])
                    return console.log("没有这个图集"), null;
                var a = new Yi,
                    o = this.textAtlases[t].texture,
                    h = {
                        width: M.atlasWidth,
                        height: M.atlasWidth,
                        sourceWidth: M.atlasWidth,
                        sourceHeight: M.atlasWidth,
                        offsetX: 0,
                        offsetY: 0,
                        getIsReady: function() {
                            return !0
                        },
                        _addReference: function() {},
                        _removeReference: function() {},
                        _getSource: function() {
                            return o._getSource()
                        },
                        bitmap: {
                            id: o.id
                        },
                        _uv: wi.DEF_UV
                    };
                return a.size = function(t, e) {
                    return this.width = t, this.height = e, a.graphics.clear(), a.graphics.drawRect(0, 0, a.width, a.height, i), a.graphics.drawTexture(h, 0, 0, a.width, a.height), this
                }, a.graphics.drawRect(0, 0, s, r, i), a.graphics.drawTexture(h, 0, 0, s, r), a.pos(e, n), y.stage.addChild(a), a
            }, t.filltext_native = function(t, e, i, n, s, r, a, o, h, l, u) {
                if (void 0 === u && (u = 0), !(e && e.length <= 0 || i && i.length < 1)) {
                    var c = ni.Parse(r),
                        _ = 0;
                    switch (l) {
                        case "center":
                            _ = Ct.ENUM_TEXTALIGN_CENTER;
                            break;
                        case "right":
                            _ = Ct.ENUM_TEXTALIGN_RIGHT
                    }
                    return this._fast_filltext(t, e, i, n, s, c, a, o, h, _, u)
                }
            }, M.useOldCharBook = !1, M.atlasWidth = 2048, M.noAtlas = !1, M.forceSplitRender = !1, M.forceWholeRender = !1, M.scaleFontWithCtx = !0, M.standardFontSize = 32, M.destroyAtlasDt = 10, M.checkCleanTextureDt = 2e3, M.destroyUnusedTextureDt = 3e3, M.cleanMem = 104857600, M.isWan1Wan = !1, M.showLog = !1, M.debugUV = !1, M.atlasWidth2 = 4194304, M.textRenderInst = null, M.simClean = !1, a(M, ["tmpRI", function() {
                return this.tmpRI = new Mt
            }, "pixelBBX", function() {
                return this.pixelBBX = [0, 0, 0, 0]
            }, "imgdtRect", function() {
                return this.imgdtRect = [0, 0, 0, 0]
            }]), M
        }(),
        R = (m(I, "laya.utils.Stat"), f(1, I, "onclick", null, function(t) {
            I._sp && I._sp.on("click", I._sp, t), I._canvas && (I._canvas.source.onclick = t, I._canvas.source.style.pointerEvents = "")
        }), I.show = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), re.onMiniGame || re.onLimixiu || te.isConchApp || re.onBDMiniGame || re.onKGMiniGame || re.onQGMiniGame || (I._useCanvas = !0), I._show = !0, I._fpsData.length = 60, I._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            }, I._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "white",
                units: "int"
            }, I._view[2] = {
                title: "RenderBatches",
                value: "renderBatches",
                color: "white",
                units: "int"
            }, I._view[3] = {
                title: "SavedRenderBatches",
                value: "savedRenderBatches",
                color: "white",
                units: "int"
            }, I._view[4] = {
                title: "CPUMemory",
                value: "cpuMemory",
                color: "yellow",
                units: "M"
            }, I._view[5] = {
                title: "GPUMemory",
                value: "gpuMemory",
                color: "yellow",
                units: "M"
            }, I._view[6] = {
                title: "Shader",
                value: "shaderCall",
                color: "white",
                units: "int"
            }, te.is3DMode ? (I._view[0].title = "FPS(3D)", I._view[7] = {
                title: "TriFaces",
                value: "trianglesFaces",
                color: "white",
                units: "int"
            }, I._view[8] = {
                title: "FrustumCulling",
                value: "frustumCulling",
                color: "white",
                units: "int"
            }, I._view[9] = {
                title: "OctreeNodeCulling",
                value: "octreeNodeCulling",
                color: "white",
                units: "int"
            }) : (I._view[0].title = "FPS(WebGL)", I._view[7] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            }), I._useCanvas ? I.createUIPre(t, e) : I.createUI(t, e), I.enable()
        }, I.createUIPre = function(t, e) {
            var i = re.pixelRatio;
            I._width = 180 * i, I._vx = 120 * i, I._height = i * (12 * I._view.length + 3 * i) + 4, I._fontSize = 12 * i;
            for (var n = 0; n < I._view.length; n++)
                I._view[n].x = 4, I._view[n].y = n * I._fontSize + 2 * i;
            I._canvas || ((I._canvas = new sn(!0)).size(I._width, I._height), (I._ctx = I._canvas.getContext("2d")).textBaseline = "top", I._ctx.font = I._fontSize + "px Arial", I._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + I._width / i + "px;height:" + I._height / i + "px;"), re.onKGMiniGame || re.container.appendChild(I._canvas.source), I._first = !0, I.loop(), I._first = !1
        }, I.createUI = function(t, e) {
            var i = I._sp,
                n = re.pixelRatio;
            i || (i = new Yi, (I._leftText = new Ji).pos(5, 5), I._leftText.color = "#ffffff", i.addChild(I._leftText), (I._txt = new Ji).pos(80 * n, 5), I._txt.color = "#ffffff", i.addChild(I._txt), I._sp = i), i.pos(t, e);
            for (var s = "", r = 0; r < I._view.length; r++)
                s += I._view[r].title + "\n";
            I._leftText.text = s;
            var a = 138 * n,
                o = n * (12 * I._view.length + 3 * n) + 4;
            I._txt.fontSize = I._fontSize * n, I._leftText.fontSize = I._fontSize * n, i.size(a, o), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, a, o, "#999999"), i.graphics.alpha(2), I.loop()
        }, I.enable = function() {
            y.systemTimer.frameLoop(1, I, I.loop)
        }, I.hide = function() {
            I._show = !1, y.systemTimer.clear(I, I.loop), I._canvas && re.removeElement(I._canvas.source)
        }, I.clear = function() {
            I.trianglesFaces = I.renderBatches = I.savedRenderBatches = I.shaderCall = I.spriteRenderUseCacheCount = I.frustumCulling = I.octreeNodeCulling = I.canvasNormal = I.canvasBitmap = I.canvasReCache = 0
        }, I.loop = function() {
            I._count++;
            var t = re.now();
            if (!(t - I._timer < 1e3)) {
                var e = I._count;
                if (I.FPS = Math.round(1e3 * e / (t - I._timer)), I._show) {
                    I.trianglesFaces = Math.round(I.trianglesFaces / e), I.renderBatches = I._useCanvas ? Math.round(I.renderBatches / e) : Math.round(I.renderBatches / e) - 1, I.savedRenderBatches = Math.round(I.savedRenderBatches / e), I.shaderCall = Math.round(I.shaderCall / e), I.spriteRenderUseCacheCount = Math.round(I.spriteRenderUseCacheCount / e), I.canvasNormal = Math.round(I.canvasNormal / e), I.canvasBitmap = Math.round(I.canvasBitmap / e), I.canvasReCache = Math.ceil(I.canvasReCache / e), I.frustumCulling = Math.round(I.frustumCulling / e), I.octreeNodeCulling = Math.round(I.octreeNodeCulling / e);
                    var i = 0 < I.FPS ? Math.floor(1e3 / I.FPS).toString() : " ";
                    I._fpsStr = I.FPS + (I.renderSlow ? " slow" : "") + " " + i, I._spriteStr = I._useCanvas ? I.spriteCount - 1 + (I.spriteRenderUseCacheCount ? "/" + I.spriteRenderUseCacheCount : "") : I.spriteCount - 4 + (I.spriteRenderUseCacheCount ? "/" + I.spriteRenderUseCacheCount : ""), I._canvasStr = I.canvasReCache + "/" + I.canvasNormal + "/" + I.canvasBitmap, I.cpuMemory = vi.cpuMemory, I.gpuMemory = vi.gpuMemory, I._useCanvas ? I.renderInfoPre() : I.renderInfo(), I.clear()
                }
                I._count = 0, I._timer = t
            }
        }, I.renderInfoPre = function() {
            var t, e, i = 0;
            if (I._canvas) {
                var n = I._ctx;
                for (n.clearRect(I._first ? 0 : I._vx, 0, I._width, I._height), i = 0; i < I._view.length; i++)
                    t = I._view[i], I._first && (n.fillStyle = "white", n.fillText(t.title, t.x, t.y)), n.fillStyle = t.color, e = I[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"), n.fillText(e + "", t.x + I._vx, t.y)
            }
        }, I.renderInfo = function() {
            for (var t = "", e = 0; e < I._view.length; e++) {
                var i = I._view[e],
                    n = I[i.value];
                "M" == i.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == i.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), t += n + "\n"
            }
            I._txt.text = t
        }, I.FPS = 0, I.loopCount = 0, I.shaderCall = 0, I.renderBatches = 0, I.savedRenderBatches = 0, I.trianglesFaces = 0, I.spriteCount = 0, I.spriteRenderUseCacheCount = 0, I.frustumCulling = 0, I.octreeNodeCulling = 0, I.canvasNormal = 0, I.canvasBitmap = 0, I.canvasReCache = 0, I.renderSlow = !1, I.gpuMemory = 0, I.cpuMemory = 0, I._fpsStr = null, I._canvasStr = null, I._spriteStr = null, I._fpsData = [], I._timer = 0, I._count = 0, I._view = [], I._fontSize = 12, I._txt = null, I._leftText = null, I._sp = null, I._titleSp = null, I._bgSp = null, I._show = !1, I._useCanvas = !1, I._canvas = null, I._ctx = null, I._first = !1, I._vx = NaN, I._width = 0, I._height = 100, I);

    function I() {}
    var P = function() {
            var n;

            function t() {
                this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null
            }
            m(t, "laya.webgl.canvas.Path");
            var e = t.prototype;
            return e.beginPath = function(t) {
                this.paths.length = 1, this._curPath = this.paths[0] = new n, this._curPath.convex = t
            }, e.closePath = function() {
                this._curPath.loop = !0
            }, e.newPath = function() {
                this._curPath = new n, this.paths.push(this._curPath)
            }, e.addPoint = function(t, e) {
                this._curPath.path.push(t, e)
            }, e.push = function(t, e) {
                this._curPath ? 0 < this._curPath.path.length && (this._curPath = new n, this.paths.push(this._curPath)) : (this._curPath = new n, this.paths.push(this._curPath));
                var i = this._curPath;
                i.path = t.slice(), i.convex = e
            }, e.reset = function() {
                this.paths.length = 0
            }, t.__init$ = function() {
                function t() {
                    this.path = [], this.loop = !1, this.convex = !1
                }
                m(t, ""), n = t
            }, t
        }(),
        D = function() {
            function o() {
                this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._stage = null, this._captureSp = null, this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new E, this._captureChain = [], this._matrix = new vt, this._point = new ye, this._rect = new Ot, this._prePoint = new ye, this._curTouchID = NaN
            }
            m(o, "laya.events.MouseManager");
            var t = o.prototype;
            return t.__init__ = function(t, e) {
                var i = this;
                this._stage = t;
                var n = this;
                e.oncontextmenu = function(t) {
                    if (o.enabled)
                        return !1
                }, e.addEventListener("mousedown", function(t) {
                    o.enabled && (re.onIE || t.preventDefault(), n.mouseDownTime = re.now(), i.runEvent(t))
                }), e.addEventListener("mouseup", function(t) {
                    o.enabled && (t.preventDefault(), n.mouseDownTime = -re.now(), i.runEvent(t))
                }, !0), e.addEventListener("mousemove", function(t) {
                    if (o.enabled) {
                        t.preventDefault();
                        var e = re.now();
                        if (e - n._lastMoveTimer < 10)
                            return;
                        n._lastMoveTimer = e, i.runEvent(t)
                    }
                }, !0), e.addEventListener("mouseout", function(t) {
                    o.enabled && i.runEvent(t)
                }), e.addEventListener("mouseover", function(t) {
                    o.enabled && i.runEvent(t)
                }), e.addEventListener("touchstart", function(t) {
                    o.enabled && (o._isFirstTouch || ln.isInputting || t.preventDefault(), n.mouseDownTime = re.now(), i.runEvent(t))
                }), e.addEventListener("touchend", function(t) {
                    o.enabled ? (o._isFirstTouch || ln.isInputting || t.preventDefault(), o._isFirstTouch = !1, n.mouseDownTime = -re.now(), i.runEvent(t)) : i._curTouchID = NaN
                }, !0), e.addEventListener("touchmove", function(t) {
                    o.enabled && (t.preventDefault(), i.runEvent(t))
                }, !0), e.addEventListener("touchcancel", function(t) {
                    o.enabled ? (t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN
                }, !0), e.addEventListener("mousewheel", function(t) {
                    o.enabled && i.runEvent(t)
                }), e.addEventListener("DOMMouseScroll", function(t) {
                    o.enabled && i.runEvent(t)
                })
            }, t.initEvent = function(t, e) {
                var i, n = this;
                n._event._stoped = !1, n._event.nativeEvent = e || t, n._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), n.mouseX = this._point.x, n.mouseY = this._point.y), n._event.touchId = t.identifier || 0, this._tTouchID = n._event.touchId, (i = u.I._event)._stoped = !1, i.nativeEvent = n._event.nativeEvent, i.touchId = n._event.touchId
            }, t.checkMouseWheel = function(t) {
                this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
                for (var e = u.I.getLastOvers(), i = 0, n = e.length; i < n; i++) {
                    var s = e[i];
                    s.event("mousewheel", this._event.setTo("mousewheel", s, this._target))
                }
            }, t.onMouseMove = function(t) {
                u.I.onMouseMove(t, this._tTouchID)
            }, t.onMouseDown = function(t) {
                if (ln.isInputting && y.stage.focus && y.stage.focus.focus && !y.stage.focus.contains(this._target)) {
                    var e = y.stage.focus._tf || y.stage.focus,
                        i = t._tf || t;
                    i instanceof laya.display.Input && i.multiline == e.multiline ? e._focusOut() : e.focus = !1
                }
                u.I.onMouseDown(t, this._tTouchID, this._isLeftMouse)
            }, t.onMouseUp = function(t) {
                u.I.onMouseUp(t, this._tTouchID, this._isLeftMouse)
            }, t.check = function(t, e, i, n) {
                this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
                var s = t._style.scrollRect;
                if (s && (this._rect.setTo(s.x, s.y, s.width, s.height), !this._rect.contains(e, i)))
                    return !1;
                if (!this.disableMouseEvent) {
                    if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i))
                        return !1;
                    for (var r = t._children.length - 1; - 1 < r; r--) {
                        var a = t._children[r];
                        if (!a.destroyed && 1 < a._mouseState && a._visible && this.check(a, e, i, n))
                            return !0
                    }
                    for (r = t._extUIChild.length - 1; 0 <= r; r--) {
                        var o = t._extUIChild[r];
                        if (!o.destroyed && 1 < o._mouseState && o._visible && this.check(o, e, i, n))
                            return !0
                    }
                }
                var h = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
                return h ? (this._target = t, n.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : n === this.onMouseUp && t === this._stage && (this._target = this._stage, n.call(this, this._target)), h
            }, t.hitTest = function(t, e, i) {
                var n = !1;
                t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
                var s = t._style.hitArea;
                return s && s._hit ? s.contains(e, i) : ((0 < t.width && 0 < t.height || t.mouseThrough || s) && (n = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (s || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), n)
            }, t._checkAllBaseUI = function(t, e, i) {
                var n = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
                return !!n || (n = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || n)
            }, t.check3DUI = function(t, e, i) {
                for (var n = this._stage._3dUI, s = 0, r = !1; s < n.length; s++) {
                    var a = n[s];
                    !(this._stage._curUIBase = a).destroyed && 1 < a._mouseState && a._visible && (r = r || this.check(a, this.mouseX, this.mouseY, i))
                }
                return this._stage._curUIBase = this._stage, r
            }, t.handleExclusiveCapture = function(t, e, i) {
                if (this._captureExlusiveMode && this._captureSp && 0 < this._captureChain.length) {
                    var n;
                    this._point.setTo(t, e);
                    for (var s = 0; s < this._captureChain.length; s++)
                        (n = this._captureChain[s]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0
                }
                return !1
            }, t.handleCapture = function(t, e, i) {
                if (!this._hitCaputreSp && this._captureSp && 0 < this._captureChain.length) {
                    var n;
                    this._point.setTo(t, e);
                    for (var s = 0; s < this._captureChain.length; s++)
                        (n = this._captureChain[s]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0
                }
                return !1
            }, t.runEvent = function(t) {
                var e, i = 0,
                    n = 0;
                switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6), t.type) {
                    case "mousedown":
                        this._touchIDs[0] = this._id++, o._isTouchRespond ? o._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "mouseup":
                        this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                        break;
                    case "mousemove":
                        Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX, this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "touchstart":
                        o._isTouchRespond = !0, this._isLeftMouse = !0;
                        var s = t.changedTouches;
                        for (i = 0, n = s.length; i < n; i++)
                            e = s[i], (o.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = e.identifier, this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[e.identifier] = this._id++, this.initEvent(e, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "touchend":
                    case "touchcancel":
                        o._isTouchRespond = !0, this._isLeftMouse = !0;
                        var r = t.changedTouches;
                        for (i = 0, n = r.length; i < n; i++)
                            if (e = r[i], o.multiTouchEnabled || e.identifier == this._curTouchID) {
                                this._curTouchID = NaN, this.initEvent(e, t);
                                this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null)
                            }
                        break;
                    case "touchmove":
                        var a = t.changedTouches;
                        for (i = 0, n = a.length; i < n; i++)
                            e = a[i], !o.multiTouchEnabled && e.identifier != this._curTouchID || (this.initEvent(e, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "wheel":
                    case "mousewheel":
                    case "DOMMouseScroll":
                        this.checkMouseWheel(t);
                        break;
                    case "mouseout":
                        u.I.stageMouseOut();
                        break;
                    case "mouseover":
                        this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage))
                }
            }, t.setCapture = function(t, e) {
                void 0 === e && (e = !1), this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, this._captureChain.push(t);
                for (var i = t; i != y.stage && i != y.stage._curUIBase && (i = i.parent);)
                    this._captureChain.splice(0, 0, i)
            }, t.releaseCapture = function() {
                console.log("release capture"), this._captureSp = null
            }, o.enabled = !0, o.multiTouchEnabled = !0, o._isTouchRespond = !1, o._isFirstTouch = !0, a(o, ["instance", function() {
                return this.instance = new o
            }]), o
        }(),
        L = function() {
            function t() {
                this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], ht.regCacheByFunction(ke.bind(this.startDispose, this), ke.bind(this.getCacheList, this))
            }
            m(t, "laya.utils.VectorGraphManager");
            var e = t.prototype;
            return e.getId = function() {
                return this._id++
            }, e.addShape = function(t, e) {
                this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0)
            }, e.addLine = function(t, e) {
                this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0)
            }, e.getShape = function(t) {
                this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0)
            }, e.deleteShape = function(t) {
                this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t]
            }, e.getCacheList = function() {
                var t, e = [];
                for (t in this.shapeDic)
                    e.push(this.shapeDic[t]);
                for (t in this.shapeLineDic)
                    e.push(this.shapeLineDic[t]);
                return e
            }, e.startDispose = function(t) {
                var e;
                for (e in this.useDic)
                    this.useDic[e] = !1;
                this._checkKey = !0
            }, e.endDispose = function() {
                if (this._checkKey) {
                    var t;
                    for (t in this.useDic)
                        this.useDic[t] || this.deleteShape(t);
                    this._checkKey = !1
                }
            }, t.getInstance = function() {
                return t.instance = t.instance || new t
            }, t.instance = null, t
        }(),
        B = (m(F, "laya.maths.MathUtil"), F.subtractVector3 = function(t, e, i) {
            i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2]
        }, F.lerp = function(t, e, i) {
            return t * (1 - i) + e * i
        }, F.scaleVector3 = function(t, e, i) {
            i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e
        }, F.lerpVector3 = function(t, e, i, n) {
            var s = t[0],
                r = t[1],
                a = t[2];
            n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = a + i * (e[2] - a)
        }, F.lerpVector4 = function(t, e, i, n) {
            var s = t[0],
                r = t[1],
                a = t[2],
                o = t[3];
            n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = a + i * (e[2] - a), n[3] = o + i * (e[3] - o)
        }, F.slerpQuaternionArray = function(t, e, i, n, s, r, a) {
            var o, h, l, u, c, _ = t[e + 0],
                d = t[e + 1],
                f = t[e + 2],
                p = t[e + 3],
                m = i[n + 0],
                g = i[n + 1],
                v = i[n + 2],
                y = i[n + 3];
            return (h = _ * m + d * g + f * v + p * y) < 0 && (h = -h, m = -m, g = -g, v = -v, y = -y), c = 1e-6 < 1 - h ? (o = Math.acos(h), l = Math.sin(o), u = Math.sin((1 - s) * o) / l, Math.sin(s * o) / l) : (u = 1 - s, s), r[a + 0] = u * _ + c * m, r[a + 1] = u * d + c * g, r[a + 2] = u * f + c * v, r[a + 3] = u * p + c * y, r
        }, F.getRotation = function(t, e, i, n) {
            return Math.atan2(n - e, i - t) / Math.PI * 180
        }, F.sortBigFirst = function(t, e) {
            return t == e ? 0 : t < e ? 1 : -1
        }, F.sortSmallFirst = function(t, e) {
            return t == e ? 0 : t < e ? -1 : 1
        }, F.sortNumBigFirst = function(t, e) {
            return parseFloat(e) - parseFloat(t)
        }, F.sortNumSmallFirst = function(t, e) {
            return parseFloat(t) - parseFloat(e)
        }, F.sortByKey = function(i, t, e) {
            var n;
            return void 0 === t && (t = !1), void 0 === e && (e = !0), n = t ? e ? F.sortNumBigFirst : F.sortBigFirst : e ? F.sortNumSmallFirst : F.sortSmallFirst,
                function(t, e) {
                    return n(t[i], e[i])
                }
        }, F);

    function F() {}
    var O = function() {
        function f(t, e) {
            if (n.map[t])
                return this._fun = n.map[t], void(this._next = f.NORENDER);
            switch (this._next = e || f.NORENDER, t) {
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
                    return void(this._fun = i._filter);
                case 69905:
                    return void(this._fun = f._initRenderFun)
            }
            this.onCreate(t)
        }
        m(f, "laya.renders.RenderSprite");
        var t = f.prototype;
        return t.onCreate = function(t) {}, t._style = function(t, e, i, n) {
            var s = t._style;
            null != s.render && s.render(t, e, i, n);
            var r = this._next;
            r._fun.call(r, t, e, i, n)
        }, t._no = function(t, e, i, n) {}, t._custom = function(t, e, i, n) {
            t.customRender(e, i, n), this._next._fun.call(this._next, t, e, i - t.pivotX, n - t.pivotY)
        }, t._clip = function(t, e, i, n) {
            var s = this._next;
            if (s != f.NORENDER) {
                var r = t._style.scrollRect;
                e.save(), e.clipRect(i, n, r.width, r.height), s._fun.call(s, t, e, i - r.x, n - r.y), e.restore()
            }
        }, t._texture = function(t, e, i, n) {
            var s = t.texture;
            s._getSource() && e.drawTexture(s, i - t.pivotX + s.offsetX, n - t.pivotY + s.offsetY, t._width || s.width, t._height || s.height);
            var r = this._next;
            r != f.NORENDER && r._fun.call(r, t, e, i, n)
        }, t._graphics = function(t, e, i, n) {
            var s = t._style,
                r = t._graphics;
            r && r._render(t, e, i - s.pivotX, n - s.pivotY);
            var a = this._next;
            a != f.NORENDER && a._fun.call(a, t, e, i, n)
        }, t._image = function(t, e, i, n) {
            var s = t._style;
            e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one)
        }, t._image2 = function(t, e, i, n) {
            var s = t._style;
            e.drawTexture2(i, n, s.pivotX, s.pivotY, t.transform, t._graphics._one)
        }, t._alpha = function(t, e, i, n) {
            var s;
            if (.01 < (s = t._style.alpha) || t._needRepaint()) {
                var r = e.globalAlpha;
                e.globalAlpha *= s;
                var a = this._next;
                a._fun.call(a, t, e, i, n), e.globalAlpha = r
            }
        }, t._transform = function(t, e, i, n) {
            var s = t.transform,
                r = this._next;
            t._style;
            s && r != f.NORENDER ? (e.save(), e.transform(s.a, s.b, s.c, s.d, s.tx + i, s.ty + n), r._fun.call(r, t, e, 0, 0), e.restore()) : r != f.NORENDER && r._fun.call(r, t, e, i, n)
        }, t._children = function(t, e, i, n) {
            var s, r = t._style,
                a = t._children,
                o = a.length;
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
                for (m = 0; m < o; ++m)
                    (s = a[m])._visible && (f = s._x) < _ && f + s.width > u && (p = s._y) < d && p + s.height > c && s.render(e, i, n)
            } else
                for (var m = 0; m < o; ++m)
                    (s = a[m])._visible && s.render(e, i, n);
            h && e.drawCallOptimize(!1)
        }, t._canvas = function(t, e, i, n) {
            var s = t._cacheStyle,
                r = this._next;
            if (s.enableCanvasRender) {
                "bitmap" === s.cacheAs ? R.canvasBitmap++ : R.canvasNormal++;
                var a = !1,
                    o = !1;
                if (s.canvas) {
                    var h = s.canvas,
                        l = (h.context, h.touches);
                    if (l)
                        for (var u = 0; u < l.length; u++)
                            if (l[u].deleted) {
                                o = !0;
                                break
                            }
                    a = h.isCacheValid && !h.isCacheValid()
                }
                if (t._needRepaint() || !s.canvas || o || a || y.stage.isGlobalRepaint())
                    if ("normal" === s.cacheAs) {
                        if (e._targets)
                            return void r._fun.call(r, t, e, i, n);
                        this._canvas_webgl_normal_repaint(t, e)
                    } else
                        this._canvas_repaint(t, e, i, n);
                var c = s.cacheRect;
                e.drawCanvas(s.canvas, i + c.x, n + c.y, c.width, c.height)
            } else
                r._fun.call(r, t, e, i, n)
        }, t._canvas_repaint = function(t, e, i, n) {
            var s, r, a, o, h, l, u, c, _, d = t._cacheStyle,
                f = this._next,
                p = d.canvas,
                m = d.cacheAs;
            if (u = (_ = d._calculateCacheRect(t, m, i, n)).x, c = _.y, h = (o = d.cacheRect).width * u, l = o.height * c, r = o.x, a = o.y, "bitmap" === m && (2048 < h || 2048 < l))
                return console.warn("cache bitmap size larger than 2048,cache ignored"), d.releaseContext(), void f._fun.call(f, t, e, i, n);
            if (p || (d.createContext(), p = d.canvas), (s = p.context).sprite = t, p.width == h && p.height == l || p.size(h, l), "bitmap" === m ? s.asBitmap = !0 : "normal" === m && (s.asBitmap = !1), s.clear(), 1 != u || 1 != c) {
                var g = s;
                g.save(), g.scale(u, c), f._fun.call(f, t, s, -r, -a), g.restore(), t._applyFilters()
            } else
                g = s, f._fun.call(f, t, s, -r, -a), t._applyFilters();
            d.staticCache && (d.reCache = !1), R.canvasReCache++
        }, t._canvas_webgl_normal_repaint = function(t, e) {
            var i = t._cacheStyle,
                n = this._next,
                s = i.canvas,
                r = i.cacheAs;
            i._calculateCacheRect(t, r, 0, 0);
            s || (s = i.canvas = new y.WebGLCacheAsNormalCanvas(e, t));
            var a = s.context;
            s.startRec(), n._fun.call(n, t, a, t.pivotX, t.pivotY), t._applyFilters(), R.canvasReCache++, s.endRec()
        }, t._blend = function(t, e, i, n) {
            var s = t._style,
                r = this._next;
            s.blendMode ? (e.save(), e.globalCompositeOperation = s.blendMode, r._fun.call(r, t, e, i, n), e.restore()) : r._fun.call(r, t, e, i, n)
        }, t._mask = function(t, e, i, n) {
            var s = this._next,
                r = t.mask,
                a = e;
            if (r) {
                a.save();
                var o = a.globalCompositeOperation,
                    h = new Ot;
                if (h.copyFrom(r.getBounds()), h.width = Math.round(h.width), h.height = Math.round(h.height), h.x = Math.round(h.x), h.y = Math.round(h.y), 0 < h.width && 0 < h.height) {
                    var l = h.width,
                        u = h.height,
                        c = Oe.getRT(l, u);
                    a.breakNextMerge(), a.pushRT(), a.addRenderObject(at.create([a, c, l, u], f.tmpTarget, this)), r.render(a, -h.x, -h.y), a.breakNextMerge(), a.popRT(), a.save(), a.clipRect(i + h.x - t.getStyle().pivotX, n + h.y - t.getStyle().pivotY, l, u), s._fun.call(s, t, a, i, n), a.restore(), o = a.globalCompositeOperation, a.addRenderObject(at.create(["mask"], f.setBlendMode, this));
                    var _ = Z.create(1, 0),
                        d = wi.INV_UV;
                    a.drawTarget(c, i + h.x - t.getStyle().pivotX, n + h.y - t.getStyle().pivotY, l, u, vt.TEMP.identity(), _, d, 6), a.addRenderObject(at.create([c], f.recycleTarget, this)), a.addRenderObject(at.create([o], f.setBlendMode, this))
                }
                a.restore()
            } else
                s._fun.call(s, t, e, i, n)
        }, f.__init__ = function() {
            n.__init__();
            var t, e, i = 0;
            for (e = new f(69905, null), t = f.renders.length = 16384, i = 0; i < t; i++)
                f.renders[i] = e;
            f.renders[0] = new f(0, null)
        }, f._initRenderFun = function(t, e, i, n) {
            var s = t._renderType;
            (f.renders[s] = f._getTypeRender(s))._fun(t, e, i, n)
        }, f._getTypeRender = function(t) {
            if (n.map[t])
                return new f(t, null);
            for (var e = null, i = 8192; 0 < i;)
                i & t && (e = new f(i, e)), i >>= 1;
            return e
        }, f.tmpTarget = function(t, e, i, n) {
            e.start(), e.clear(0, 0, 0, 0)
        }, f.recycleTarget = function(t) {
            Oe.releaseRT(t)
        }, f.setBlendMode = function(t) {
            var e = jt.mainContext;
            ti.targetFns[ti.TOINT[t]](e)
        }, f.INIT = 69905, f.renders = [], f.NORENDER = new f(0, null), a(f, ["tempUV", function() {
            return this.tempUV = new Array(8)
        }]), f
    }();
    m(t, "laya.events.Keyboard"), t.NUMBER_0 = 48, t.NUMBER_1 = 49, t.NUMBER_2 = 50, t.NUMBER_3 = 51, t.NUMBER_4 = 52, t.NUMBER_5 = 53, t.NUMBER_6 = 54, t.NUMBER_7 = 55, t.NUMBER_8 = 56, t.NUMBER_9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.F1 = 112, t.F2 = 113, t.F3 = 114, t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t.F9 = 120, t.F10 = 121, t.F11 = 122, t.F12 = 123, t.F13 = 124, t.F14 = 125, t.F15 = 126, t.NUMPAD = 21, t.NUMPAD_0 = 96, t.NUMPAD_1 = 97, t.NUMPAD_2 = 98, t.NUMPAD_3 = 99, t.NUMPAD_4 = 100, t.NUMPAD_5 = 101, t.NUMPAD_6 = 102, t.NUMPAD_7 = 103, t.NUMPAD_8 = 104, t.NUMPAD_9 = 105, t.NUMPAD_ADD = 107, t.NUMPAD_DECIMAL = 110, t.NUMPAD_DIVIDE = 111, t.NUMPAD_ENTER = 108, t.NUMPAD_MULTIPLY = 106, t.NUMPAD_SUBTRACT = 109, t.SEMICOLON = 186, t.EQUAL = 187, t.COMMA = 188, t.MINUS = 189, t.PERIOD = 190, t.SLASH = 191, t.BACKQUOTE = 192, t.LEFTBRACKET = 219, t.BACKSLASH = 220, t.RIGHTBRACKET = 221, t.QUOTE = 222, t.ALTERNATE = 18, t.BACKSPACE = 8, t.CAPS_LOCK = 20, t.COMMAND = 15, t.CONTROL = 17, t.DELETE = 46, t.ENTER = 13, t.ESCAPE = 27, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.END = 35, t.HOME = 36, t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, t.INSERT = 45;

    function t() {}
    var N = function() {
            function t() {}
            m(t, "laya.display.cmd.RestoreCmd");
            var e = t.prototype;
            return e.recover = function() {
                z.recover("RestoreCmd", this)
            }, e.run = function(t, e, i) {
                t.restore()
            }, f(0, e, "cmdID", function() {
                return "Restore"
            }), t.create = function() {
                return z.getItemByClass("RestoreCmd", t)
            }, t.ID = "Restore", t
        }(),
        k = function() {
            function e(t, e, i) {
                this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i
            }
            m(e, "laya.webgl.shader.ShaderDefinesBase");
            var t = e.prototype;
            return t.add = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value
            }, t.addInt = function(t) {
                return this._value |= t, this._value
            }, t.remove = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value
            }, t.isDefine = function(t) {
                return (this._value & t) === t
            }, t.getValue = function() {
                return this._value
            }, t.setValue = function(t) {
                this._value = t
            }, t.toNameDic = function() {
                var t = this._int2nameMap[this._value];
                return t || e._toText(this._value, this._int2name, this._int2nameMap)
            }, e._reg = function(t, e, i, n) {
                n[i[t] = e] = t
            }, e._toText = function(t, e, i) {
                var n = i[t];
                if (n)
                    return n;
                for (var s = {}, r = 1, a = 0; a < 32 && !(t < (r = 1 << a)); a++)
                    if (t & r) {
                        var o = e[r];
                        o && (s[o] = "")
                    }
                return i[t] = s
            }, e._toInt = function(t, e) {
                for (var i = t.split("."), n = 0, s = 0, r = i.length; s < r; s++) {
                    var a = e[i[s]];
                    if (!a)
                        throw new Error("Defines to int err:" + t + "/" + i[s]);
                    n |= a
                }
                return n
            }, e
        }(),
        U = function() {
            function t() {
                this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0
            }
            m(t, "laya.display.BitmapFont");
            var e = t.prototype;
            return e.loadFont = function(t, e) {
                this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? y.loader.load([{
                    url: t,
                    type: "xml"
                }, {
                    url: t.replace(".fnt", ".png"),
                    type: "image"
                }], b.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file')
            }, e._onLoaded = function() {
                this.parseFont(Ai.getRes(this._path), Ai.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.run()
            }, e.parseFont = function(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    if (!i[0].getAttributeNode)
                        return this.parseFont2(t, e);
                    this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                    var n, s = i[0].getAttributeNode("padding").nodeValue.split(",");
                    this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])], n = t.getElementsByTagName("char");
                    var r = 0;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r],
                            o = parseInt(a.getAttributeNode("id").nodeValue),
                            h = parseInt(a.getAttributeNode("xoffset").nodeValue) / 1,
                            l = parseInt(a.getAttributeNode("yoffset").nodeValue) / 1,
                            u = parseInt(a.getAttributeNode("xadvance").nodeValue) / 1,
                            c = new Ot;
                        c.x = parseInt(a.getAttributeNode("x").nodeValue), c.y = parseInt(a.getAttributeNode("y").nodeValue), c.width = parseInt(a.getAttributeNode("width").nodeValue), c.height = parseInt(a.getAttributeNode("height").nodeValue);
                        var _ = wi.create(e, c.x, c.y, c.width, c.height, h, l);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, this._fontWidthMap[o] = u
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
                        var a = s[r].attributes,
                            o = parseInt(a.id.nodeValue),
                            h = parseInt(a.xoffset.nodeValue) / 1,
                            l = parseInt(a.yoffset.nodeValue) / 1,
                            u = parseInt(a.xadvance.nodeValue) / 1,
                            c = new Ot;
                        c.x = parseInt(a.x.nodeValue), c.y = parseInt(a.y.nodeValue), c.width = parseInt(a.width.nodeValue), c.height = parseInt(a.height.nodeValue);
                        var _ = wi.create(e, c.x, c.y, c.width, c.height, h, l);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, this._fontWidthMap[o] = u
                    }
                }
            }, e.getCharTexture = function(t) {
                return this._fontCharDic[t.charCodeAt(0)]
            }, e.destroy = function() {
                if (this._texture) {
                    for (var t in this._fontCharDic) {
                        var e = this._fontCharDic[t];
                        e && e.destroy()
                    }
                    this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, this._complete = null, this._padding = null
                }
            }, e.setSpaceWidth = function(t) {
                this._spaceWidth = t
            }, e.getCharWidth = function(t) {
                var e = t.charCodeAt(0);
                return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0
            }, e.getTextWidth = function(t) {
                for (var e = 0, i = 0, n = t.length; i < n; i++)
                    e += this.getCharWidth(t.charAt(i));
                return e
            }, e.getMaxWidth = function() {
                return this._maxWidth
            }, e.getMaxHeight = function() {
                return this.fontSize
            }, e._drawText = function(t, e, i, n, s, r) {
                var a, o = this.getTextWidth(t),
                    h = 0;
                "center" === s && (h = (r - o) / 2), "right" === s && (h = r - o);
                for (var l = 0, u = 0, c = t.length; u < c; u++)
                    (a = this.getCharTexture(t.charAt(u))) && (e.graphics.drawImage(a, i + l + h, n), l += this.getCharWidth(t.charAt(u)))
            }, t
        }(),
        W = function() {
            function r() {}
            m(r, "laya.display.cmd.ClipRectCmd");
            var t = r.prototype;
            return t.recover = function() {
                z.recover("ClipRectCmd", this)
            }, t.run = function(t, e, i) {
                t.clipRect(this.x + e, this.y + i, this.width, this.height)
            }, f(0, t, "cmdID", function() {
                return "ClipRect"
            }), r.create = function(t, e, i, n) {
                var s = z.getItemByClass("ClipRectCmd", r);
                return s.x = t, s.y = e, s.width = i, s.height = n, s
            }, r.ID = "ClipRect", r
        }(),
        V = (m(G, "laya.webgl.shader.d2.Shader2D"), G.prototype.destroy = function() {
            this.defines = null, this.filters = null
        }, G.__init__ = function() {
            var t, e;
            t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", e = "/*\n\ttexture和fillrect使用的。\n*/\n#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE\t\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", en.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", e = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", en.preCompile2D(0, 4, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", en.preCompile2D(0, 512, t, e, null)
        }, G);

    function G() {
        this.ALPHA = 1, this.shaderType = 0, this.defines = new Ti, this.fillStyle = Qt.DEFAULT, this.strokeStyle = Qt.DEFAULT
    }
    var X = function() {
            function l() {}
            m(l, "laya.display.cmd.DrawPolyCmd");
            var t = l.prototype;
            return t.recover = function() {
                this.points = null, this.fillColor = null, this.lineColor = null, z.recover("DrawPolyCmd", this)
            }, t.run = function(t, e, i) {
                t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid)
            }, f(0, t, "cmdID", function() {
                return "DrawPoly"
            }), l.create = function(t, e, i, n, s, r, a, o) {
                var h = z.getItemByClass("DrawPolyCmd", l);
                return h.x = t, h.y = e, h.points = i, h.fillColor = n, h.lineColor = s, h.lineWidth = r, h.isConvexPolygon = a, h.vid = o, h
            }, l.ID = "DrawPoly", l
        }(),
        Y = function() {
            function t() {
                this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, this._url = null, this._div = null, this._txtWidth = NaN, this._http = null
            }
            m(t, "laya.net.TTFLoader");
            var e = t.prototype;
            return e.load = function(t) {
                var e = (this._url = t).split(".ttf")[0].split("/");
                this.fontName = e[e.length - 1], te.isConchApp ? this._loadConch() : re.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS()
            }, e._loadConch = function() {
                this._http = new Ci, this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), this._http.send(this._url, null, "get", "arraybuffer")
            }, e._onHttpLoaded = function(t) {
                re.window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), this._complete()
            }, e._clearHttp = function() {
                this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), this._http = null)
            }, e._onErr = function() {
                this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null)
            }, e._complete = function() {
                y.systemTimer.clear(this, this._complete), y.systemTimer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null)
            }, e._checkComplete = function() {
                qe.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete()
            }, e._loadWithFontFace = function() {
                var t = new re.window.FontFace(this.fontName, "url('" + this._url + "')");
                re.window.document.fonts.add(t);
                var e = this;
                t.loaded.then(function() {
                    e._complete()
                }), t.load()
            }, e._createDiv = function() {
                this._div = re.createElement("div"), this._div.innerHTML = "laya";
                var t = this._div.style;
                t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", re.document.body.appendChild(this._div)
            }, e._loadWithCSS = function() {
                var t = this,
                    e = re.createElement("style");
                e.type = "text/css", re.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = qe.measureText("LayaTTFFont", this._fontTxt).width;
                var i = this;
                e.onload = function() {
                    y.systemTimer.once(1e4, i, t._complete)
                }, y.systemTimer.loop(20, this, this._checkComplete), this._createDiv()
            }, t._testString = "LayaTTFFont", t
        }(),
        H = function() {
            function t() {
                this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear()
            }
            m(t, "laya.webgl.submit.SubmitKey");
            var e = t.prototype;
            return e.clear = function() {
                this.submitType = -1, this.blendShader = this.other = 0
            }, e.copyFrom = function(t) {
                this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType
            }, e.copyFrom2 = function(t, e, i) {
                this.other = i, this.submitType = e
            }, e.equal3_2 = function(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader
            }, e.equal4_2 = function(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader
            }, e.equal_3 = function(t) {
                return this.submitType === t.submitType && this.blendShader === t.blendShader
            }, e.equal = function(t) {
                return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader
            }, t
        }(),
        z = (function() {
            function t() {
                this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this.texture = null, this.x = NaN, this.y = NaN, this.width = NaN, this.height = NaN
            }
            m(t, "laya.display.cmd.DrawCanvasCmd");
            var e = t.prototype;
            e.recover = function() {
                this._graphicsCmdEncoder = null, z.recover("DrawCanvasCmd", this)
            }, f(0, e, "cmdID", function() {
                return "DrawCanvasCmd"
            }), t.create = function(t, e, i, n, s) {
                return null
            }, t.ID = "DrawCanvasCmd", t._DRAW_IMAGE_CMD_ENCODER_ = null, t._PARAM_TEXTURE_POS_ = 2, t._PARAM_VB_POS_ = 5
        }(), m(j, "laya.utils.Pool"), j.getPoolBySign = function(t) {
            return j._poolDic[t] || (j._poolDic[t] = [])
        }, j.clearBySign = function(t) {
            j._poolDic[t] && (j._poolDic[t].length = 0)
        }, j.recover = function(t, e) {
            e.__InPool || (e.__InPool = !0, j.getPoolBySign(t).push(e))
        }, j.recoverByClass = function(t) {
            if (t) {
                var e = t.__className || t.constructor._$gid;
                e && j.recover(e, t)
            }
        }, j._getClassSign = function(t) {
            var e = t.__className || t._$gid;
            return e || (t._$gid = e = ke.getGID() + ""), e
        }, j.createByClass = function(t) {
            return j.getItemByClass(j._getClassSign(t), t)
        }, j.getItemByClass = function(t, e) {
            if (!j._poolDic[t])
                return new e;
            var i = j.getPoolBySign(t);
            if (i.length) {
                var n = i.pop();
                n.__InPool = !1
            } else
                n = new e;
            return n
        }, j.getItemByCreateFun = function(t, e, i) {
            var n = j.getPoolBySign(t),
                s = n.length ? n.pop() : e.call(i);
            return s.__InPool = !1, s
        }, j.getItem = function(t) {
            var e = j.getPoolBySign(t),
                i = e.length ? e.pop() : null;
            return i && (i.__InPool = !1), i
        }, j.POOLSIGN = "__InPool", j._poolDic = {}, j);

    function j() {}
    var K = function() {
        function t(t) {
            this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = t;
            for (var e = 0, i = 0, n = 0; !((e = t.indexOf("#begin", e)) < 0);) {
                for (n = e + 5; !((n = t.indexOf("#end", n)) < 0) && "i" === t.charAt(n + 4);)
                    n += 5;
                if (n < 0)
                    throw "add include err,no #end:" + t;
                i = t.indexOf("\n", e);
                var s = ri.splitToWords(t.substr(e, i - e), null);
                "code" == s[1] ? this.codes[s[2]] = t.substr(i + 1, n - i - 1) : "function" == s[1] && (i = t.indexOf("function", e), i += "function".length, this.funs[s[3]] = t.substr(i + 1, n - i - 1), this.funnames += s[3] + ";"), e = n + 1
            }
        }
        m(t, "laya.webgl.utils.InlcudeFile");
        var e = t.prototype;
        return e.getWith = function(t) {
            var e = t ? this.codes[t] : this.script;
            if (!e)
                throw "get with error:" + t;
            return e
        }, e.getFunsScript = function(t) {
            var e = "";
            for (var i in this.funs)
                0 <= t.indexOf(i + ";") && (e += this.funs[i]);
            return e
        }, t
    }();
    m($, "laya.display.SpriteConst"), $.ALPHA = 1, $.TRANSFORM = 2, $.BLEND = 4, $.CANVAS = 8, $.FILTERS = 16, $.MASK = 32, $.CLIP = 64, $.STYLE = 128, $.TEXTURE = 256, $.GRAPHICS = 512, $.LAYAGL3D = 1024, $.CUSTOM = 2048, $.ONECHILD = 4096, $.CHILDS = 8192, $.REPAINT_NONE = 0, $.REPAINT_NODE = 1, $.REPAINT_CACHE = 2, $.REPAINT_ALL = 3;

    function $() {}
    var q = function() {
            function t() {
                this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, this._byteLength = 0, this._glBuffer = se.instance.createBuffer()
            }
            m(t, "laya.webgl.utils.Buffer");
            var e = t.prototype;
            return e._bindForVAO = function() {}, e.bind = function() {
                return !1
            }, e.destroy = function() {
                this._glBuffer && (se.instance.deleteBuffer(this._glBuffer), this._glBuffer = null)
            }, f(0, e, "bufferUsage", function() {
                return this._bufferUsage
            }), t._bindedVertexBuffer = null, t._bindedIndexBuffer = null, t
        }(),
        Q = function() {
            function u() {
                this.colorFlt = null
            }
            m(u, "laya.display.cmd.DrawTextureCmd");
            var t = u.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, this.matrix = null, z.recover("DrawTextureCmd", this)
            }, t.run = function(t, e, i) {
                t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt)
            }, f(0, t, "cmdID", function() {
                return "DrawTexture"
            }), u.create = function(t, e, i, n, s, r, a, o, h) {
                var l = z.getItemByClass("DrawTextureCmd", u);
                return (l.texture = t)._addReference(), l.x = e, l.y = i, l.width = n, l.height = s, l.matrix = r, l.alpha = a, l.color = o, l.blendMode = h, o && (l.colorFlt = new di, l.colorFlt.setColor(o)), l
            }, u.ID = "DrawTexture", u
        }(),
        Z = function() {
            function n(t, e) {
                this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, this._cacheID = 0, this.clipMatDir = [99999999, 0, 0, 99999999], this.clipMatPos = [0, 0], this.clipOff = [0, 0], this.defines = new Ti, this.mainID = t, this.subID = e, this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = n._cache[this._cacheID], 0 < t && !this._inClassCache && (this._inClassCache = n._cache[this._cacheID] = [], this._inClassCache._length = 0), this.clear()
            }
            m(n, "laya.webgl.shader.d2.value.Value2D");
            var t = n.prototype;
            return t.setValue = function(t) {}, t._ShaderWithCompile = function() {
                return en.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, un.create, this._attribLocation)
            }, t.upload = function() {
                var t = It;
                It.worldMatrix4 === It.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = t.worldMatrix4, It.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = It.matWVP.elements);
                var e = en.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2())
            }, t.setFilters = function(t) {
                if (this.filters = t)
                    for (var e, i = t.length, n = 0; n < i; n++)
                        (e = t[n]) && (this.defines.add(e.type), e.action.setValue(this))
            }, t.clear = function() {
                this.defines._value = this.subID + (jt.shaderHighPrecision ? 1024 : 0), this.clipOff[0] = 0
            }, t.release = function() {
                --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0)
            }, n._initone = function(t, e) {
                n._typeClass[t] = e, n._cache[t] = [], n._cache[t]._length = 0
            }, n.__init__ = function() {
                n._initone(4, ki), n._initone(512, Wi), n._initone(1, Ri), n._initone(9, Ri)
            }, n.create = function(t, e) {
                var i = n._cache[t | e];
                return i._length ? i[--i._length] : new n._typeClass[t | e](e)
            }, n._cache = [], n._typeClass = [], n.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], n
        }(),
        J = (m(tt, "laya.maths.GrahamScan"), tt.multiply = function(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
        }, tt.dis = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
        }, tt._getPoints = function(t, e, i) {
            for (void 0 === e && (e = !1), tt._mPointList || (tt._mPointList = []); tt._mPointList.length < t;)
                tt._mPointList.push(new ye);
            return i || (i = []), i.length = 0, e ? tt.getFrom(i, tt._mPointList, t) : tt.getFromR(i, tt._mPointList, t), i
        }, tt.getFrom = function(t, e, i) {
            var n = 0;
            for (n = 0; n < i; n++)
                t.push(e[n]);
            return t
        }, tt.getFromR = function(t, e, i) {
            var n = 0;
            for (n = 0; n < i; n++)
                t.push(e.pop());
            return t
        }, tt.pListToPointList = function(t, e) {
            void 0 === e && (e = !1);
            var i = 0,
                n = t.length / 2,
                s = tt._getPoints(n, e, tt._tempPointList);
            for (i = 0; i < n; i++)
                s[i].setTo(t[i + i], t[i + i + 1]);
            return s
        }, tt.pointListToPlist = function(t) {
            var e, i = 0,
                n = t.length,
                s = tt._temPList;
            for (i = s.length = 0; i < n; i++)
                e = t[i], s.push(e.x, e.y);
            return s
        }, tt.scanPList = function(t) {
            return ke.copyArray(t, tt.pointListToPlist(tt.scan(tt.pListToPointList(t, !0))))
        }, tt.scan = function(t) {
            var e, i, n, s = 0,
                r = 0,
                a = 0,
                o = t.length,
                h = {};
            for ((i = tt._temArr).length = 0, s = (o = t.length) - 1; 0 <= s; s--)
                n = (e = t[s]).x + "_" + e.y, h.hasOwnProperty(n) || (h[n] = !0, i.push(e));
            for (o = i.length, ke.copyArray(t, i), s = 1; s < o; s++)
                (t[s].y < t[a].y || t[s].y == t[a].y && t[s].x < t[a].x) && (a = s);
            for (e = t[0], t[0] = t[a], t[a] = e, s = 1; s < o - 1; s++) {
                for (r = (a = s) + 1; r < o; r++)
                    (0 < tt.multiply(t[r], t[a], t[0]) || 0 == tt.multiply(t[r], t[a], t[0]) && tt.dis(t[0], t[r]) < tt.dis(t[0], t[a])) && (a = r);
                e = t[s], t[s] = t[a], t[a] = e
            }
            if ((i = tt._temArr).length = 0, t.length < 3)
                return ke.copyArray(i, t);
            for (i.push(t[0], t[1], t[2]), s = 3; s < o; s++) {
                for (; 2 <= i.length && 0 <= tt.multiply(t[s], i[i.length - 1], i[i.length - 2]);)
                    i.pop();
                t[s] && i.push(t[s])
            }
            return i
        }, tt._mPointList = null, tt._tempPointList = [], tt._temPList = [], tt._temArr = [], tt);

    function tt() {}
    var et = function() {
            function n() {
                this._saveuse = 0
            }
            m(n, "laya.webgl.canvas.save.SaveMark");
            var t = n.prototype;
            return y.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !0
            }, t.restore = function(t) {
                t._saveMark = this._preSaveMark, n.POOL[n.POOL._length++] = this
            }, n.Create = function(t) {
                var e = n.POOL,
                    i = 0 < e._length ? e[--e._length] : new n;
                return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i
            }, n.POOL = o._createArray(), n
        }(),
        it = function() {
            function c() {
                this.gid = 0, this.repeat = 1, this._count = 0
            }
            m(c, "laya.utils.Tween");
            var t = c.prototype;
            return t.to = function(t, e, i, n, s, r, a) {
                return void 0 === r && (r = 0), void 0 === a && (a = !1), this._create(t, e, i, n, s, r, a, !0, !1, !0)
            }, t.from = function(t, e, i, n, s, r, a) {
                return void 0 === r && (r = 0), void 0 === a && (a = !1), this._create(t, e, i, n, s, r, a, !1, !1, !0)
            }, t._create = function(t, e, i, n, s, r, a, o, h, l) {
                if (!t)
                    throw new Error("Tween:target is null");
                this._target = t, this._duration = i, this._ease = n || e.ease || c.easeNone, this._complete = s || e.complete, this._delay = r, this._props = [], this._usedTimer = 0, this._startTimer = re.now(), this._usedPool = h, this._delayParam = null, this.update = e.update;
                var u = t.$_GID || (t.$_GID = ke.getGID());
                return c.tweenMap[u] ? (a && c.clearTween(t), c.tweenMap[u].push(this)) : c.tweenMap[u] = [this], l ? r <= 0 ? this.firstStart(t, e, o) : (this._delayParam = [t, e, o], y.timer.once(r, this, this.firstStart, this._delayParam)) : this._initProps(t, e, o), this
            }, t.firstStart = function(t, e, i) {
                this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), this._beginLoop())
            }, t._initProps = function(t, e, i) {
                for (var n in e)
                    if ("number" == typeof t[n]) {
                        var s = i ? t[n] : e[n],
                            r = i ? e[n] : t[n];
                        this._props.push([n, s, r - s]), i || (t[n] = s)
                    }
            }, t._beginLoop = function() {
                y.timer.frameLoop(1, this, this._doEase)
            }, t._doEase = function() {
                this._updateEase(re.now())
            }, t._updateEase = function(t) {
                var e = this._target;
                if (e) {
                    if (e.destroyed)
                        return c.clearTween(e);
                    var i = this._usedTimer = t - this._startTimer - this._delay;
                    if (!(i < 0)) {
                        if (i >= this._duration)
                            return this.complete();
                        for (var n = 0 < i ? this._ease(i, 0, 1, this._duration) : 0, s = this._props, r = 0, a = s.length; r < a; r++) {
                            var o = s[r];
                            e[o[0]] = o[1] + n * o[2]
                        }
                        this.update && this.update.run()
                    }
                }
            }, t.complete = function() {
                if (this._target) {
                    y.timer.runTimer(this, this.firstStart);
                    for (var t = this._target, e = this._props, i = this._complete, n = 0, s = e.length; n < s; n++) {
                        var r = e[n];
                        t[r[0]] = r[1] + r[2]
                    }
                    this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), i && i.run()) : this.restart()
                }
            }, t.pause = function() {
                y.timer.clear(this, this._beginLoop), y.timer.clear(this, this._doEase), y.timer.clear(this, this.firstStart);
                var t;
                (t = re.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t)
            }, t.setStartTime = function(t) {
                this._startTimer = t
            }, t.clear = function() {
                this._target && (this._remove(), this._clear())
            }, t._clear = function() {
                this.pause(), y.timer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, z.recover("tween", this))
            }, t.recover = function() {
                this._usedPool = !0, this._clear()
            }, t._remove = function() {
                var t = c.tweenMap[this._target.$_GID];
                if (t)
                    for (var e = 0, i = t.length; e < i; e++)
                        if (t[e] === this) {
                            t.splice(e, 1);
                            break
                        }
            }, t.restart = function() {
                if (this.pause(), this._usedTimer = 0, this._startTimer = re.now(), this._delayParam)
                    y.timer.once(this._delay, this, this.firstStart, this._delayParam);
                else {
                    for (var t = this._props, e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        this._target[n[0]] = n[1]
                    }
                    y.timer.once(this._delay, this, this._beginLoop)
                }
            }, t.resume = function() {
                this._usedTimer >= this._duration || (this._startTimer = re.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? y.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop())
            }, f(0, t, "progress", null, function(t) {
                var e = t * this._duration;
                this._startTimer = re.now() - this._delay - e
            }), c.to = function(t, e, i, n, s, r, a, o) {
                return void 0 === r && (r = 0), void 0 === a && (a = !1), void 0 === o && (o = !0), z.getItemByClass("tween", c)._create(t, e, i, n, s, r, a, !0, o, !0)
            }, c.from = function(t, e, i, n, s, r, a, o) {
                return void 0 === r && (r = 0), void 0 === a && (a = !1), void 0 === o && (o = !0), z.getItemByClass("tween", c)._create(t, e, i, n, s, r, a, !1, o, !0)
            }, c.clearAll = function(t) {
                if (t && t.$_GID) {
                    var e = c.tweenMap[t.$_GID];
                    if (e) {
                        for (var i = 0, n = e.length; i < n; i++)
                            e[i]._clear();
                        e.length = 0
                    }
                }
            }, c.clear = function(t) {
                t.clear()
            }, c.clearTween = function(t) {
                c.clearAll(t)
            }, c.easeNone = function(t, e, i, n) {
                return i * t / n + e
            }, c.tweenMap = [], c
        }(),
        nt = function() {
            function h() {}
            m(h, "laya.display.cmd.DrawRectCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, z.recover("DrawRectCmd", this)
            }, t.run = function(t, e, i) {
                t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth)
            }, f(0, t, "cmdID", function() {
                return "DrawRect"
            }), h.create = function(t, e, i, n, s, r, a) {
                var o = z.getItemByClass("DrawRectCmd", h);
                return o.x = t, o.y = e, o.width = i, o.height = n, o.fillColor = s, o.lineColor = r, o.lineWidth = a, o
            }, h.ID = "DrawRect", h
        }(),
        st = (m(rt, "laya.webgl.shapes.EarcutNode"), rt);

    function rt(t, e, i) {
        this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    var at = function() {
            function s() {
                this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new H
            }
            m(s, "laya.webgl.submit.SubmitCMD");
            var t = s.prototype;
            return y.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.renderSubmit = function() {
                return this.fun.apply(this._this, this.args), 1
            }, t.getRenderType = function() {
                return 0
            }, t.reUse = function(t, e) {
                return this._ref++, e
            }, t.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = s.POOL;
                    t[t._length++] = this
                }
            }, t.clone = function(t, e, i) {
                return null
            }, s.create = function(t, e, i) {
                var n = s.POOL._length ? s.POOL[--s.POOL._length] : new s;
                return n.fun = e, n.args = t, n._this = i, n._ref = 1, n._key.clear(), n
            }, s.POOL = [], s.__init$ = function() {
                s.POOL._length = 0
            }, s
        }(),
        ot = function() {
            function s(t) {
                this._url = null, this._path = null, this._url = s.formatURL(t), this._path = s.getPath(t)
            }
            m(s, "laya.net.URL");
            var t = s.prototype;
            return f(0, t, "path", function() {
                return this._path
            }), f(0, t, "url", function() {
                return this._url
            }), f(1, s, "basePath", function() {
                return s._basePath
            }, function(t) {
                s._basePath = y._getUrlPath(), s._basePath = s.formatURL(t)
            }), s.formatURL = function(t) {
                if (!t)
                    return "null path";
                if (0 < t.indexOf(":"))
                    return t;
                if (null != s.customFormat && (t = s.customFormat(t)), 0 < t.indexOf(":"))
                    return t;
                var e = t.charAt(0);
                if ("." === e)
                    return s._formatRelativePath(s._basePath + t);
                if ("~" === e)
                    return s.rootPath + t.substring(1);
                if ("d" === e) {
                    if (0 === t.indexOf("data:image"))
                        return t
                } else if ("/" === e)
                    return t;
                return s._basePath + t
            }, s._formatRelativePath = function(t) {
                for (var e = t.split("/"), i = 0, n = e.length; i < n; i++)
                    ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
                return e.join("/")
            }, s.getPath = function(t) {
                var e = t.lastIndexOf("/");
                return 0 < e ? t.substr(0, e + 1) : ""
            }, s.getFileName = function(t) {
                var e = t.lastIndexOf("/");
                return 0 < e ? t.substr(e + 1) : t
            }, s.getAdptedFilePath = function(t) {
                if (!s.exportSceneToJson || !t)
                    return t;
                var e, i, n = 0;
                for (e = s._adpteTypeList.length, n = 0; n < e; n++)
                    i = s._adpteTypeList[n], t = t.replace(i[0], i[1]);
                return t
            }, s.version = {}, s.exportSceneToJson = !1, s._basePath = "", s.rootPath = "", s.customFormat = function(t) {
                var e = s.version[t];
                return !te.isConchApp && e && (t += "?v=" + e), t
            }, a(s, ["_adpteTypeList", function() {
                return this._adpteTypeList = [
                    [".scene3d", ".json"],
                    [".scene", ".json"],
                    [".taa", ".json"],
                    [".prefab", ".json"]
                ]
            }]), s
        }(),
        ht = (m(lt, "laya.utils.CacheManger"), lt.regCacheByFunction = function(t, e) {
            var i;
            lt.unRegCacheByFunction(t, e), i = {
                tryDispose: t,
                getCacheList: e
            }, lt._cacheList.push(i)
        }, lt.unRegCacheByFunction = function(t, e) {
            var i, n = 0;
            for (i = lt._cacheList.length, n = 0; n < i; n++)
                if (lt._cacheList[n].tryDispose == t && lt._cacheList[n].getCacheList == e)
                    return void lt._cacheList.splice(n, 1)
        }, lt.forceDispose = function() {
            var t = 0,
                e = lt._cacheList.length;
            for (t = 0; t < e; t++)
                lt._cacheList[t].tryDispose(!0)
        }, lt.beginCheck = function(t) {
            void 0 === t && (t = 15e3), y.systemTimer.loop(t, null, lt._checkLoop)
        }, lt.stopCheck = function() {
            y.systemTimer.clear(null, lt._checkLoop)
        }, lt._checkLoop = function() {
            var t = lt._cacheList;
            if (!(t.length < 1)) {
                var e, i = re.now(),
                    n = 0;
                for (e = n = t.length; 0 < n && (t[lt._index = ++lt._index % e].tryDispose(!1), !(re.now() - i > lt.loopTimeLimit));)
                    n--
            }
        }, lt.loopTimeLimit = 2, lt._cacheList = [], lt._index = 0, lt);

    function lt() {}
    var ut = function() {
            function t() {
                this.reset()
            }
            m(t, "laya.display.css.SpriteStyle");
            var e = t.prototype;
            return e.reset = function() {
                return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, this.dragging = null, this.blendMode = null, this
            }, e.recover = function() {
                this !== t.EMPTY && z.recover("SpriteStyle", this.reset())
            }, t.create = function() {
                return z.getItemByClass("SpriteStyle", t)
            }, t.EMPTY = new t, t
        }(),
        ct = (function() {
            function t(t, e) {
                this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null, this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0, this.cachedClipInfo = new vt, this.invMat = new vt, this.context = t, this.sprite = e, t._globalClipMatrix.copyTo(this.cachedClipInfo)
            }
            m(t, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
            var e = t.prototype;
            e.startRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), this.submits.length = 0, this.submitStartPos = this.context._submits._length;
                for (var t = 0, e = this.meshlist.length; t < e; t++) {
                    var i = this.meshlist[t];
                    i.canReuse ? i.releaseMesh() : i.destroy()
                }
                this.meshlist.length = 0, this._mesh = Si.getAMesh(!1), this._pathMesh = yi.getAMesh(!1), this._triangleMesh = Di.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), this.meshlist.push(this._triangleMesh), this.context._curSubmit = x.RENDERBASE, this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), this.invMat.invert()
            }, e.endRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context));
                var t = this.context._submits;
                this.submitEndPos = t._length;
                for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++)
                    this.submits.push(t[this.submitStartPos + i]);
                t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, this.context._curSubmit = x.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, this.context.touches = null, this.context._incache = !1
            }, e.isCacheValid = function() {
                var t = this.context._globalClipMatrix;
                return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty
            }, e.flushsubmit = function() {
                var e = x.RENDERBASE;
                this.submits.forEach(function(t) {
                    t != x.RENDERBASE && (x.preRender = e, (e = t).renderSubmit())
                })
            }, e.releaseMem = function() {}, a(t, ["matI", function() {
                return this.matI = new vt
            }])
        }(), function() {
            var h;

            function l(t) {
                this.scale = 1, this.currFrame = 0, this._delta = 0, this._map = [], this._handlers = [], this._temp = [], this._count = 0, this.currTimer = re.now(), this._lastTimer = re.now(), void 0 === t && (t = !0), t && y.systemTimer && y.systemTimer.frameLoop(1, this, this._update)
            }
            m(l, "laya.utils.Timer");
            var t = l.prototype;
            return t._update = function() {
                if (this.scale <= 0)
                    this._lastTimer = re.now();
                else {
                    var t = this.currFrame = this.currFrame + this.scale,
                        e = re.now();
                    this._delta = (e - this._lastTimer) * this.scale;
                    var i = this.currTimer = this.currTimer + this._delta;
                    this._lastTimer = e;
                    for (var n = this._handlers, s = this._count = 0, r = n.length; s < r; s++) {
                        var a = n[s];
                        if (null !== a.method) {
                            var o = a.userFrame ? t : i;
                            if (o >= a.exeTime)
                                if (a.repeat)
                                    if (a.jumpFrame)
                                        for (; o >= a.exeTime;)
                                            a.exeTime += a.delay, a.run(!1);
                                    else
                                        a.exeTime += a.delay, a.run(!1), o > a.exeTime && (a.exeTime += Math.ceil((o - a.exeTime) / a.delay) * a.delay);
                            else
                                a.run(!0)
                        } else
                            this._count++
                    }
                    (30 < this._count || t % 200 == 0) && this._clearHandlers()
                }
            }, t._clearHandlers = function() {
                for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                    var n = t[e];
                    null !== n.method ? this._temp.push(n) : this._recoverHandler(n)
                }
                this._handlers = this._temp, t.length = 0, this._temp = t
            }, t._recoverHandler = function(t) {
                this._map[t.key] == t && (this._map[t.key] = null), t.clear(), l._pool.push(t)
            }, t._create = function(t, e, i, n, s, r, a) {
                if (!i)
                    return s.apply(n, r), null;
                if (a) {
                    var o = this._getHandler(n, s);
                    if (o)
                        return o.repeat = e, o.userFrame = t, o.delay = i, o.caller = n, o.method = s, o.args = r, o.exeTime = i + (t ? this.currFrame : this.currTimer + re.now() - this._lastTimer), o
                }
                return (o = 0 < l._pool.length ? l._pool.pop() : new h).repeat = e, o.userFrame = t, o.delay = i, o.caller = n, o.method = s, o.args = r, o.exeTime = i + (t ? this.currFrame : this.currTimer + re.now() - this._lastTimer), this._indexHandler(o), this._handlers.push(o), o
            }, t._indexHandler = function(t) {
                var e = t.caller,
                    i = t.method,
                    n = e ? e.$_GID || (e.$_GID = ke.getGID()) : 0,
                    s = i.$_TID || (i.$_TID = 1e5 * l._mid++);
                t.key = n + s, this._map[t.key] = t
            }, t.once = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!1, !1, t, e, i, n, s)
            }, t.loop = function(t, e, i, n, s, r) {
                void 0 === s && (s = !0), void 0 === r && (r = !1);
                var a = this._create(!1, !0, t, e, i, n, s);
                a && (a.jumpFrame = r)
            }, t.frameOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!0, !1, t, e, i, n, s)
            }, t.frameLoop = function(t, e, i, n, s) {
                void 0 === s && (s = !0), this._create(!0, !0, t, e, i, n, s)
            }, t.toString = function() {
                return " handlers:" + this._handlers.length + " pool:" + l._pool.length
            }, t.clear = function(t, e) {
                var i = this._getHandler(t, e);
                i && (this._map[i.key] = null, i.key = 0, i.clear())
            }, t.clearAll = function(t) {
                if (t)
                    for (var e = 0, i = this._handlers.length; e < i; e++) {
                        var n = this._handlers[e];
                        n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear())
                    }
            }, t._getHandler = function(t, e) {
                var i = t ? t.$_GID || (t.$_GID = ke.getGID()) : 0,
                    n = e.$_TID || (e.$_TID = 1e5 * l._mid++);
                return this._map[i + n]
            }, t.callLater = function(t, e, i) {
                Ee.I.callLater(t, e, i)
            }, t.runCallLater = function(t, e) {
                Ee.I.runCallLater(t, e)
            }, t.runTimer = function(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(!0))
            }, t.pause = function() {
                this.scale = 0
            }, t.resume = function() {
                this.scale = 1
            }, f(0, t, "delta", function() {
                return this._delta
            }), l._pool = [], l._mid = 1, l.__init$ = function() {
                h = function() {
                    function t() {
                        this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1
                    }
                    m(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.caller = null, this.method = null, this.args = null
                    }, e.run = function(t) {
                        var e = this.caller;
                        if (e && e.destroyed)
                            return this.clear();
                        var i = this.method,
                            n = this.args;
                        t && this.clear(), null != i && (n ? i.apply(e, n) : i.call(e))
                    }, t
                }()
            }, l
        }()),
        _t = function() {
            function o() {
                this.reset()
            }
            m(o, "laya.display.css.CacheStyle");
            var t = o.prototype;
            return t.needBitmapCache = function() {
                return this.cacheForFilters || !!this.mask
            }, t.needEnableCanvasRender = function() {
                return "none" != this.userSetCache || this.cacheForFilters || !!this.mask
            }, t.releaseContext = function() {
                this.canvas && this.canvas.size && (z.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0), this.canvas.width = 0, this.canvas.height = 0), this.canvas = null
            }, t.createContext = function() {
                if (!this.canvas) {
                    this.canvas = z.getItem("CacheCanvas") || new sn(!1);
                    var t = this.canvas.context;
                    t || (t = this.canvas.getContext("2d"))
                }
            }, t.releaseFilterCache = function() {
                var t = this.filterCache;
                t && (t.destroy(), t.recycle(), this.filterCache = null)
            }, t.recover = function() {
                this !== o.EMPTY && z.recover("SpriteCache", this.reset())
            }, t.reset = function() {
                return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), this.cacheRect = null, this
            }, t._calculateCacheRect = function(t, e, i, n) {
                var s, r = t._cacheStyle;
                if (r.cacheRect || (r.cacheRect = Ot.create()), "bitmap" === e ? ((s = t.getSelfBounds()).width = s.width + 32, s.height = s.height + 32, s.x = s.x - t.pivotX, s.y = s.y - t.pivotY, s.x = s.x - 16, s.y = s.y - 16, s.x = Math.floor(s.x + i) - i, s.y = Math.floor(s.y + n) - n, s.width = Math.floor(s.width), s.height = Math.floor(s.height), r.cacheRect.copyFrom(s)) : r.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1), s = r.cacheRect, t._style.scrollRect) {
                    var a = t._style.scrollRect;
                    s.x -= a.x, s.y -= a.y
                }
                return o._scaleInfo.setTo(1, 1), o._scaleInfo
            }, o.create = function() {
                return z.getItemByClass("SpriteCache", o)
            }, o.EMPTY = new o, o.CANVAS_EXTEND_EDGE = 16, a(o, ["_scaleInfo", function() {
                return this._scaleInfo = new ye
            }]), o
        }(),
        dt = function() {
            function s() {
                this._mat = new vt
            }
            m(s, "laya.webgl.canvas.save.SaveTranslate");
            var t = s.prototype;
            return y.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1
            }, t.restore = function(t) {
                this._mat.copyTo(t._curMat), s.POOL[s.POOL._length++] = this
            }, s.save = function(t) {
                var e = s.POOL,
                    i = 0 < e._length ? e[--e._length] : new s;
                t._curMat.copyTo(i._mat);
                var n = t._save;
                n[n._length++] = i
            }, s.POOL = o._createArray(), s
        }(),
        ft = function() {
            function h() {}
            m(h, "laya.display.cmd.DrawLineCmd");
            var t = h.prototype;
            return t.recover = function() {
                z.recover("DrawLineCmd", this)
            }, t.run = function(t, e, i) {
                t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid)
            }, f(0, t, "cmdID", function() {
                return "DrawLine"
            }), h.create = function(t, e, i, n, s, r, a) {
                var o = z.getItemByClass("DrawLineCmd", h);
                return o.fromX = t, o.fromY = e, o.toX = i, o.toY = n, o.lineColor = s, o.lineWidth = r, o.vid = a, o
            }, h.ID = "DrawLine", h
        }(),
        pt = function() {
            function r() {}
            m(r, "laya.webgl.WebGLContext");
            var t = r.prototype;
            return t.getContextAttributes = function() {
                return null
            }, t.isContextLost = function() {}, t.getSupportedExtensions = function() {
                return null
            }, t.getExtension = function(t) {
                return null
            }, t.activeTexture = function(t) {}, t.attachShader = function(t, e) {}, t.bindAttribLocation = function(t, e, i) {}, t.bindBuffer = function(t, e) {}, t.bindFramebuffer = function(t, e) {}, t.bindRenderbuffer = function(t, e) {}, t.bindTexture = function(t, e) {}, t.useTexture = function(t) {}, t.blendColor = function(t, e, i, n) {}, t.blendEquation = function(t) {}, t.blendEquationSeparate = function(t, e) {}, t.blendFunc = function(t, e) {}, t.blendFuncSeparate = function(t, e, i, n) {}, t.bufferData = function(t, e, i) {}, t.bufferSubData = function(t, e, i) {}, t.checkFramebufferStatus = function(t) {
                return null
            }, t.clear = function(t) {}, t.clearColor = function(t, e, i, n) {}, t.clearDepth = function(t) {}, t.clearStencil = function(t) {}, t.colorMask = function(t, e, i, n) {}, t.compileShader = function(t) {}, t.copyTexImage2D = function(t, e, i, n, s, r, a, o) {}, t.copyTexSubImage2D = function(t, e, i, n, s, r, a, o) {}, t.createBuffer = function() {}, t.createFramebuffer = function() {}, t.createProgram = function() {}, t.createRenderbuffer = function() {}, t.createShader = function(t) {}, t.createTexture = function() {
                return null
            }, t.cullFace = function(t) {}, t.deleteBuffer = function(t) {}, t.deleteFramebuffer = function(t) {}, t.deleteProgram = function(t) {}, t.deleteRenderbuffer = function(t) {}, t.deleteShader = function(t) {}, t.deleteTexture = function(t) {}, t.depthFunc = function(t) {}, t.depthMask = function(t) {}, t.depthRange = function(t, e) {}, t.detachShader = function(t, e) {}, t.disable = function(t) {}, t.disableVertexAttribArray = function(t) {}, t.drawArrays = function(t, e, i) {}, t.drawElements = function(t, e, i, n) {}, t.enable = function(t) {}, t.enableVertexAttribArray = function(t) {}, t.finish = function() {}, t.flush = function() {}, t.framebufferRenderbuffer = function(t, e, i, n) {}, t.framebufferTexture2D = function(t, e, i, n, s) {}, t.frontFace = function(t) {
                return null
            }, t.generateMipmap = function(t) {
                return null
            }, t.getActiveAttrib = function(t, e) {
                return null
            }, t.getActiveUniform = function(t, e) {
                return null
            }, t.getAttribLocation = function(t, e) {
                return 0
            }, t.getParameter = function(t) {
                return null
            }, t.getBufferParameter = function(t, e) {
                return null
            }, t.getError = function() {
                return null
            }, t.getFramebufferAttachmentParameter = function(t, e, i) {}, t.getProgramParameter = function(t, e) {
                return 0
            }, t.getProgramInfoLog = function(t) {
                return null
            }, t.getRenderbufferParameter = function(t, e) {
                return null
            }, t.getShaderPrecisionFormat = function(t) {
                return null
            }, t.getShaderParameter = function(t, e) {}, t.getShaderInfoLog = function(t) {
                return null
            }, t.getShaderSource = function(t) {
                return null
            }, t.getTexParameter = function(t, e) {}, t.getUniform = function(t, e) {}, t.getUniformLocation = function(t, e) {
                return null
            }, t.getVertexAttrib = function(t, e) {
                return null
            }, t.getVertexAttribOffset = function(t, e) {
                return null
            }, t.hint = function(t, e) {}, t.isBuffer = function(t) {}, t.isEnabled = function(t) {}, t.isFramebuffer = function(t) {}, t.isProgram = function(t) {}, t.isRenderbuffer = function(t) {}, t.isShader = function(t) {}, t.isTexture = function(t) {}, t.lineWidth = function(t) {}, t.linkProgram = function(t) {}, t.pixelStorei = function(t, e) {}, t.polygonOffset = function(t, e) {}, t.readPixels = function(t, e, i, n, s, r, a) {}, t.renderbufferStorage = function(t, e, i, n) {}, t.sampleCoverage = function(t, e) {}, t.scissor = function(t, e, i, n) {}, t.shaderSource = function(t, e) {}, t.stencilFunc = function(t, e, i) {}, t.stencilFuncSeparate = function(t, e, i, n) {}, t.stencilMask = function(t) {}, t.stencilMaskSeparate = function(t, e) {}, t.stencilOp = function(t, e, i) {}, t.stencilOpSeparate = function(t, e, i, n) {}, t.texImage2D = function(t) {}, t.texParameterf = function(t, e, i) {}, t.texParameteri = function(t, e, i) {}, t.texSubImage2D = function(t) {}, t.uniform1f = function(t, e) {}, t.uniform1fv = function(t, e) {}, t.uniform1i = function(t, e) {}, t.uniform1iv = function(t, e) {}, t.uniform2f = function(t, e, i) {}, t.uniform2fv = function(t, e) {}, t.uniform2i = function(t, e, i) {}, t.uniform2iv = function(t, e) {}, t.uniform3f = function(t, e, i, n) {}, t.uniform3fv = function(t, e) {}, t.uniform3i = function(t, e, i, n) {}, t.uniform3iv = function(t, e) {}, t.uniform4f = function(t, e, i, n, s) {}, t.uniform4fv = function(t, e) {}, t.uniform4i = function(t, e, i, n, s) {}, t.uniform4iv = function(t, e) {}, t.uniformMatrix2fv = function(t, e, i) {}, t.uniformMatrix3fv = function(t, e, i) {}, t.uniformMatrix4fv = function(t, e, i) {}, t.useProgram = function(t) {}, t.validateProgram = function(t) {}, t.vertexAttrib1f = function(t, e) {}, t.vertexAttrib1fv = function(t, e) {}, t.vertexAttrib2f = function(t, e, i) {}, t.vertexAttrib2fv = function(t, e) {}, t.vertexAttrib3f = function(t, e, i, n) {}, t.vertexAttrib3fv = function(t, e) {}, t.vertexAttrib4f = function(t, e, i, n, s) {}, t.vertexAttrib4fv = function(t, e) {}, t.vertexAttribPointer = function(t, e, i, n, s, r) {}, t.viewport = function(t, e, i, n) {}, t.configureBackBuffer = function(t, e, i, n, s) {
                void 0 === n && (n = !0), void 0 === s && (s = !1)
            }, t.compressedTexImage2D = function(t) {}, t.createVertexArray = function() {
                throw "not implemented"
            }, t.bindVertexArray = function(t) {
                throw "not implemented"
            }, t.deleteVertexArray = function(t) {
                throw "not implemented"
            }, t.isVertexArray = function(t) {
                throw "not implemented"
            }, r._forceSupportVAOPlatform = function() {
                return re.onMiniGame && re.onIOS || re.onBDMiniGame || re.onQGMiniGame
            }, r.__init__ = function(t) {
                if (laya.webgl.WebGLContext._checkExtensions(t), !jt._isWebGL2 && !te.isConchApp) {
                    p._setupVertexArrayObject && (r._forceSupportVAOPlatform() ? p._forceSetupVertexArrayObject(t) : p._setupVertexArrayObject(t));
                    var e = (t.rawgl || t).getExtension("OES_vertex_array_object");
                    if (e) {
                        var i = t;
                        i.createVertexArray = function() {
                            return e.createVertexArrayOES()
                        }, i.bindVertexArray = function(t) {
                            e.bindVertexArrayOES(t)
                        }, i.deleteVertexArray = function(t) {
                            e.deleteVertexArrayOES(t)
                        }, i.isVertexArray = function(t) {
                            e.isVertexArrayOES(t)
                        }
                    }
                }
            }, r._getExtension = function(t, e) {
                var i = r._extentionVendorPrefixes;
                for (var n in i) {
                    var s = t.getExtension(i[n] + e);
                    if (s)
                        return s
                }
                return null
            }, r._checkExtensions = function(t) {
                r._extTextureFilterAnisotropic = r._getExtension(t, "EXT_texture_filter_anisotropic"), r._compressedTextureS3tc = r._getExtension(t, "WEBGL_compressed_texture_s3tc"), r._compressedTexturePvrtc = r._getExtension(t, "WEBGL_compressed_texture_pvrtc"), r._compressedTextureEtc1 = r._getExtension(t, "WEBGL_compressed_texture_etc1"), r._forceSupportVAOPlatform() || (r._angleInstancedArrays = r._getExtension(t, "ANGLE_instanced_arrays"))
            }, r.__init_native = function() {
                if (te.supportWebGLPlusRendering) {
                    var t = r;
                    t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative
                }
            }, r.useProgram = function(t, e) {
                return r._useProgram !== e && (t.useProgram(e), r._useProgram = e, !0)
            }, r.setDepthTest = function(t, e) {
                e !== r._depthTest && ((r._depthTest = e) ? t.enable(2929) : t.disable(2929))
            }, r.setDepthMask = function(t, e) {
                e !== r._depthMask && (r._depthMask = e, t.depthMask(e))
            }, r.setDepthFunc = function(t, e) {
                e !== r._depthFunc && (r._depthFunc = e, t.depthFunc(e))
            }, r.setBlend = function(t, e) {
                e !== r._blend && ((r._blend = e) ? t.enable(3042) : t.disable(3042))
            }, r.setBlendFunc = function(t, e, i) {
                e === r._sFactor && i === r._dFactor || (r._sFactor = r._srcAlpha = e, r._dFactor = r._dstAlpha = i, t.blendFunc(e, i))
            }, r.setBlendFuncSeperate = function(t, e, i, n, s) {
                e === r._sFactor && i === r._dFactor && n === r._srcAlpha && s === r._dstAlpha || (r._sFactor = e, r._dFactor = i, r._srcAlpha = n, r._dstAlpha = s, t.blendFuncSeparate(e, i, n, s))
            }, r.setCullFace = function(t, e) {
                e !== r._cullFace && ((r._cullFace = e) ? t.enable(2884) : t.disable(2884))
            }, r.setFrontFace = function(t, e) {
                e !== r._frontFace && (r._frontFace = e, t.frontFace(e))
            }, r.activeTexture = function(t, e) {
                r._activedTextureID !== e && (t.activeTexture(e), r._activedTextureID = e)
            }, r.bindTexture = function(t, e, i) {
                r._activeTextures[r._activedTextureID - 33984] !== i && (t.bindTexture(e, i), r._activeTextures[r._activedTextureID - 33984] = i)
            }, r.useProgramForNative = function(t, e) {
                return t.useProgram(e), !0
            }, r.setDepthTestForNative = function(t, e) {
                e ? t.enable(2929) : t.disable(2929)
            }, r.setDepthMaskForNative = function(t, e) {
                t.depthMask(e)
            }, r.setDepthFuncForNative = function(t, e) {
                t.depthFunc(e)
            }, r.setBlendForNative = function(t, e) {
                e ? t.enable(3042) : t.disable(3042)
            }, r.setBlendFuncForNative = function(t, e, i) {
                t.blendFunc(e, i)
            }, r.setCullFaceForNative = function(t, e) {
                e ? t.enable(2884) : t.disable(2884)
            }, r.setFrontFaceForNative = function(t, e) {
                t.frontFace(e)
            }, r.activeTextureForNative = function(t, e) {
                t.activeTexture(e)
            }, r.bindTextureForNative = function(t, e, i) {
                t.bindTexture(e, i)
            }, r.bindVertexArrayForNative = function(t, e) {
                t.bindVertexArray(e)
            }, r.DEPTH_BUFFER_BIT = 256, r.STENCIL_BUFFER_BIT = 1024, r.COLOR_BUFFER_BIT = 16384, r.POINTS = 0, r.LINES = 1, r.LINE_LOOP = 2, r.LINE_STRIP = 3, r.TRIANGLES = 4, r.TRIANGLE_STRIP = 5, r.TRIANGLE_FAN = 6, r.ZERO = 0, r.ONE = 1, r.SRC_COLOR = 768, r.ONE_MINUS_SRC_COLOR = 769, r.SRC_ALPHA = 770, r.ONE_MINUS_SRC_ALPHA = 771, r.DST_ALPHA = 772, r.ONE_MINUS_DST_ALPHA = 773, r.DST_COLOR = 774, r.ONE_MINUS_DST_COLOR = 775, r.SRC_ALPHA_SATURATE = 776, r.FUNC_ADD = 32774, r.BLEND_EQUATION = 32777, r.BLEND_EQUATION_RGB = 32777, r.BLEND_EQUATION_ALPHA = 34877, r.FUNC_SUBTRACT = 32778, r.FUNC_REVERSE_SUBTRACT = 32779, r.BLEND_DST_RGB = 32968, r.BLEND_SRC_RGB = 32969, r.BLEND_DST_ALPHA = 32970, r.BLEND_SRC_ALPHA = 32971, r.CONSTANT_COLOR = 32769, r.ONE_MINUS_CONSTANT_COLOR = 32770, r.CONSTANT_ALPHA = 32771, r.ONE_MINUS_CONSTANT_ALPHA = 32772, r.BLEND_COLOR = 32773, r.ARRAY_BUFFER = 34962, r.ELEMENT_ARRAY_BUFFER = 34963, r.ARRAY_BUFFER_BINDING = 34964, r.ELEMENT_ARRAY_BUFFER_BINDING = 34965, r.STREAM_DRAW = 35040, r.STATIC_DRAW = 35044, r.DYNAMIC_DRAW = 35048, r.BUFFER_SIZE = 34660, r.BUFFER_USAGE = 34661, r.CURRENT_VERTEX_ATTRIB = 34342, r.FRONT = 1028, r.BACK = 1029, r.CULL_FACE = 2884, r.FRONT_AND_BACK = 1032, r.BLEND = 3042, r.DITHER = 3024, r.STENCIL_TEST = 2960, r.DEPTH_TEST = 2929, r.SCISSOR_TEST = 3089, r.POLYGON_OFFSET_FILL = 32823, r.SAMPLE_ALPHA_TO_COVERAGE = 32926, r.SAMPLE_COVERAGE = 32928, r.NO_ERROR = 0, r.INVALID_ENUM = 1280, r.INVALID_VALUE = 1281, r.INVALID_OPERATION = 1282, r.OUT_OF_MEMORY = 1285, r.CW = 2304, r.CCW = 2305, r.LINE_WIDTH = 2849, r.ALIASED_POINT_SIZE_RANGE = 33901, r.ALIASED_LINE_WIDTH_RANGE = 33902, r.CULL_FACE_MODE = 2885, r.FRONT_FACE = 2886, r.DEPTH_RANGE = 2928, r.DEPTH_WRITEMASK = 2930, r.DEPTH_CLEAR_VALUE = 2931, r.DEPTH_FUNC = 2932, r.STENCIL_CLEAR_VALUE = 2961, r.STENCIL_FUNC = 2962, r.STENCIL_FAIL = 2964, r.STENCIL_PASS_DEPTH_FAIL = 2965, r.STENCIL_PASS_DEPTH_PASS = 2966, r.STENCIL_REF = 2967, r.STENCIL_VALUE_MASK = 2963, r.STENCIL_WRITEMASK = 2968, r.STENCIL_BACK_FUNC = 34816, r.STENCIL_BACK_FAIL = 34817, r.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, r.STENCIL_BACK_PASS_DEPTH_PASS = 34819, r.STENCIL_BACK_REF = 36003, r.STENCIL_BACK_VALUE_MASK = 36004, r.STENCIL_BACK_WRITEMASK = 36005, r.VIEWPORT = 2978, r.SCISSOR_BOX = 3088, r.COLOR_CLEAR_VALUE = 3106, r.COLOR_WRITEMASK = 3107, r.UNPACK_ALIGNMENT = 3317, r.PACK_ALIGNMENT = 3333, r.MAX_TEXTURE_SIZE = 3379, r.MAX_VIEWPORT_DIMS = 3386, r.SUBPIXEL_BITS = 3408, r.RED_BITS = 3410, r.GREEN_BITS = 3411, r.BLUE_BITS = 3412, r.ALPHA_BITS = 3413, r.DEPTH_BITS = 3414, r.STENCIL_BITS = 3415, r.POLYGON_OFFSET_UNITS = 10752, r.POLYGON_OFFSET_FACTOR = 32824, r.TEXTURE_BINDING_2D = 32873, r.SAMPLE_BUFFERS = 32936, r.SAMPLES = 32937, r.SAMPLE_COVERAGE_VALUE = 32938, r.SAMPLE_COVERAGE_INVERT = 32939, r.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, r.COMPRESSED_TEXTURE_FORMATS = 34467, r.DONT_CARE = 4352, r.FASTEST = 4353, r.NICEST = 4354, r.GENERATE_MIPMAP_HINT = 33170, r.BYTE = 5120, r.UNSIGNED_BYTE = 5121, r.SHORT = 5122, r.UNSIGNED_SHORT = 5123, r.INT = 5124, r.UNSIGNED_INT = 5125, r.FLOAT = 5126, r.DEPTH_COMPONENT = 6402, r.ALPHA = 6406, r.RGB = 6407, r.RGBA = 6408, r.LUMINANCE = 6409, r.LUMINANCE_ALPHA = 6410, r.UNSIGNED_SHORT_4_4_4_4 = 32819, r.UNSIGNED_SHORT_5_5_5_1 = 32820, r.UNSIGNED_SHORT_5_6_5 = 33635, r.FRAGMENT_SHADER = 35632, r.VERTEX_SHADER = 35633, r.MAX_VERTEX_ATTRIBS = 34921, r.MAX_VERTEX_UNIFORM_VECTORS = 36347, r.MAX_VARYING_VECTORS = 36348, r.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, r.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, r.MAX_TEXTURE_IMAGE_UNITS = 34930, r.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, r.SHADER_TYPE = 35663, r.DELETE_STATUS = 35712, r.LINK_STATUS = 35714, r.VALIDATE_STATUS = 35715, r.ATTACHED_SHADERS = 35717, r.ACTIVE_UNIFORMS = 35718, r.ACTIVE_ATTRIBUTES = 35721, r.SHADING_LANGUAGE_VERSION = 35724, r.CURRENT_PROGRAM = 35725, r.NEVER = 512, r.LESS = 513, r.EQUAL = 514, r.LEQUAL = 515, r.GREATER = 516, r.NOTEQUAL = 517, r.GEQUAL = 518, r.ALWAYS = 519, r.KEEP = 7680, r.REPLACE = 7681, r.INCR = 7682, r.DECR = 7683, r.INVERT = 5386, r.INCR_WRAP = 34055, r.DECR_WRAP = 34056, r.VENDOR = 7936, r.RENDERER = 7937, r.VERSION = 7938, r.NEAREST = 9728, r.LINEAR = 9729, r.NEAREST_MIPMAP_NEAREST = 9984, r.LINEAR_MIPMAP_NEAREST = 9985, r.NEAREST_MIPMAP_LINEAR = 9986, r.LINEAR_MIPMAP_LINEAR = 9987, r.TEXTURE_MAG_FILTER = 10240, r.TEXTURE_MIN_FILTER = 10241, r.TEXTURE_WRAP_S = 10242, r.TEXTURE_WRAP_T = 10243, r.TEXTURE_2D = 3553, r.TEXTURE_3D = 32879, r.TEXTURE = 5890, r.TEXTURE_CUBE_MAP = 34067, r.TEXTURE_BINDING_CUBE_MAP = 34068, r.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, r.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, r.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, r.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, r.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, r.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, r.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, r.TEXTURE0 = 33984, r.TEXTURE1 = 33985, r.TEXTURE2 = 33986, r.TEXTURE3 = 33987, r.TEXTURE4 = 33988, r.TEXTURE5 = 33989, r.TEXTURE6 = 33990, r.TEXTURE7 = 33991, r.TEXTURE8 = 33992, r.TEXTURE9 = 33993, r.TEXTURE10 = 33994, r.TEXTURE11 = 33995, r.TEXTURE12 = 33996, r.TEXTURE13 = 33997, r.TEXTURE14 = 33998, r.TEXTURE15 = 33999, r.TEXTURE16 = 34e3, r.TEXTURE17 = 34001, r.TEXTURE18 = 34002, r.TEXTURE19 = 34003, r.TEXTURE20 = 34004, r.TEXTURE21 = 34005, r.TEXTURE22 = 34006, r.TEXTURE23 = 34007, r.TEXTURE24 = 34008, r.TEXTURE25 = 34009, r.TEXTURE26 = 34010, r.TEXTURE27 = 34011, r.TEXTURE28 = 34012, r.TEXTURE29 = 34013, r.TEXTURE30 = 34014, r.TEXTURE31 = 34015, r.ACTIVE_TEXTURE = 34016, r.REPEAT = 10497, r.CLAMP_TO_EDGE = 33071, r.MIRRORED_REPEAT = 33648, r.FLOAT_VEC2 = 35664, r.FLOAT_VEC3 = 35665, r.FLOAT_VEC4 = 35666, r.INT_VEC2 = 35667, r.INT_VEC3 = 35668, r.INT_VEC4 = 35669, r.BOOL = 35670, r.BOOL_VEC2 = 35671, r.BOOL_VEC3 = 35672, r.BOOL_VEC4 = 35673, r.FLOAT_MAT2 = 35674, r.FLOAT_MAT3 = 35675, r.FLOAT_MAT4 = 35676, r.SAMPLER_2D = 35678, r.SAMPLER_CUBE = 35680, r.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, r.VERTEX_ATTRIB_ARRAY_SIZE = 34339, r.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, r.VERTEX_ATTRIB_ARRAY_TYPE = 34341, r.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, r.VERTEX_ATTRIB_ARRAY_POINTER = 34373, r.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, r.COMPILE_STATUS = 35713, r.LOW_FLOAT = 36336, r.MEDIUM_FLOAT = 36337, r.HIGH_FLOAT = 36338, r.LOW_INT = 36339, r.MEDIUM_INT = 36340, r.HIGH_INT = 36341, r.FRAMEBUFFER = 36160, r.RENDERBUFFER = 36161, r.RGBA4 = 32854, r.RGB5_A1 = 32855, r.RGB565 = 36194, r.DEPTH_COMPONENT16 = 33189, r.STENCIL_INDEX = 6401, r.STENCIL_INDEX8 = 36168, r.DEPTH_STENCIL = 34041, r.RENDERBUFFER_WIDTH = 36162, r.RENDERBUFFER_HEIGHT = 36163, r.RENDERBUFFER_INTERNAL_FORMAT = 36164, r.RENDERBUFFER_RED_SIZE = 36176, r.RENDERBUFFER_GREEN_SIZE = 36177, r.RENDERBUFFER_BLUE_SIZE = 36178, r.RENDERBUFFER_ALPHA_SIZE = 36179, r.RENDERBUFFER_DEPTH_SIZE = 36180, r.RENDERBUFFER_STENCIL_SIZE = 36181, r.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, r.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, r.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, r.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, r.COLOR_ATTACHMENT0 = 36064, r.DEPTH_ATTACHMENT = 36096, r.STENCIL_ATTACHMENT = 36128, r.DEPTH_STENCIL_ATTACHMENT = 33306, r.NONE = 0, r.FRAMEBUFFER_COMPLETE = 36053, r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, r.FRAMEBUFFER_UNSUPPORTED = 36061, r.FRAMEBUFFER_BINDING = 36006, r.RENDERBUFFER_BINDING = 36007, r.MAX_RENDERBUFFER_SIZE = 34024, r.INVALID_FRAMEBUFFER_OPERATION = 1286, r.UNPACK_FLIP_Y_WEBGL = 37440, r.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, r.CONTEXT_LOST_WEBGL = 37442, r.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, r.BROWSER_DEFAULT_WEBGL = 37444, r._extTextureFilterAnisotropic = null, r._compressedTextureS3tc = null, r._compressedTexturePvrtc = null, r._compressedTextureEtc1 = null, r._angleInstancedArrays = null, r._glTextureIDs = [33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991], r._useProgram = null, r._depthTest = !0, r._depthMask = !0, r._blend = !1, r._cullFace = !1, r._activedTextureID = 33984, a(r, ["_extentionVendorPrefixes", function() {
                return this._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"]
            }, "_activeTextures", function() {
                return this._activeTextures = new Array(8)
            }, "_depthFunc", function() {
                return this._depthFunc = 513
            }, "_sFactor", function() {
                return this._sFactor = 1
            }, "_dFactor", function() {
                return this._dFactor = 0
            }, "_srcAlpha", function() {
                return this._srcAlpha = 1
            }, "_dstAlpha", function() {
                return this._dstAlpha = 0
            }, "_frontFace", function() {
                return this._frontFace = 2305
            }]), r
        }();
    m(mt, "laya.net.ResourceVersion"), mt.enable = function(t, e, i) {
        void 0 === i && (i = 2), laya.net.ResourceVersion.type = i, y.loader.load(t, b.create(null, mt.onManifestLoaded, [e]), null, "json"), ot.customFormat = mt.addVersionPrefix
    }, mt.onManifestLoaded = function(t, e) {
        mt.manifest = e, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")
    }, mt.addVersionPrefix = function(t) {
        return t = ot.getAdptedFilePath(t), mt.manifest && mt.manifest[t] ? 2 == mt.type ? mt.manifest[t] : mt.manifest[t] + "/" + t : t
    }, mt.FOLDER_VERSION = 1, mt.FILENAME_VERSION = 2, mt.manifest = null, mt.type = 1;

    function mt() {}
    var gt = function() {
            function a() {}
            m(a, "laya.display.cmd.FillWordsCmd");
            var t = a.prototype;
            return t.recover = function() {
                this.words = null, z.recover("FillWordsCmd", this)
            }, t.run = function(t, e, i) {
                t.fillWords(this.words, this.x + e, this.y + i, this.font, this.color)
            }, f(0, t, "cmdID", function() {
                return "FillWords"
            }), a.create = function(t, e, i, n, s) {
                var r = z.getItemByClass("FillWordsCmd", a);
                return r.words = t, r.x = e, r.y = i, r.font = n, r.color = s, r
            }, a.ID = "FillWords", a
        }(),
        vt = function() {
            function o(t, e, i, n, s, r, a) {
                if (this._bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === s && (s = 0), void 0 === r && (r = 0), void 0 === a && (a = 0), null != o._createFun)
                    return o._createFun(t, e, i, n, s, r, a);
                this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this._checkTransform()
            }
            m(o, "laya.maths.Matrix");
            var t = o.prototype;
            return t.identity = function() {
                return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, this
            }, t._checkTransform = function() {
                return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d
            }, t.setTranslate = function(t, e) {
                return this.tx = t, this.ty = e, this
            }, t.translate = function(t, e) {
                return this.tx += t, this.ty += e, this
            }, t.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this._bTransform = !0, this
            }, t.rotate = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    n = this.a,
                    s = this.c,
                    r = this.tx;
                return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, this._bTransform = !0, this
            }, t.skew = function(t, e) {
                var i = Math.tan(t),
                    n = Math.tan(e),
                    s = this.a,
                    r = this.b;
                return this.a += n * this.c, this.b += n * this.d, this.c += i * s, this.d += i * r, this
            }, t.invertTransformPoint = function(t) {
                var e = this.a,
                    i = this.b,
                    n = this.c,
                    s = this.d,
                    r = this.tx,
                    a = e * s - i * n,
                    o = s / a,
                    h = -i / a,
                    l = -n / a,
                    u = e / a,
                    c = (n * this.ty - s * r) / a,
                    _ = -(e * this.ty - i * r) / a;
                return t.setTo(o * t.x + l * t.y + c, h * t.x + u * t.y + _)
            }, t.transformPoint = function(t) {
                return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty)
            }, t.transformPointN = function(t) {
                return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y)
            }, t.getScaleX = function() {
                return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b)
            }, t.getScaleY = function() {
                return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d)
            }, t.invert = function() {
                var t = this.a,
                    e = this.b,
                    i = this.c,
                    n = this.d,
                    s = this.tx,
                    r = t * n - e * i;
                return this.a = n / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - n * s) / r, this.ty = -(t * this.ty - e * s) / r, this
            }, t.setTo = function(t, e, i, n, s, r) {
                return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this
            }, t.concat = function(t) {
                var e = this.a,
                    i = this.c,
                    n = this.tx;
                return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d, this.tx = n * t.a + this.ty * t.c + t.tx, this.ty = n * t.b + this.ty * t.d + t.ty, this
            }, t.scaleEx = function(t, e) {
                var i = this.a,
                    n = this.b,
                    s = this.c,
                    r = this.d;
                0 !== n || 0 !== s ? (this.a = t * i, this.b = t * n, this.c = e * s) : (this.a = t * i, this.b = 0 * r, this.c = 0 * i), this.d = e * r, this._bTransform = !0
            }, t.rotateEx = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    n = this.a,
                    s = this.b,
                    r = this.c,
                    a = this.d;
                0 !== s || 0 !== r ? (this.a = e * n + i * r, this.b = e * s + i * a, this.c = -i * n + e * r, this.d = -i * s + e * a) : (this.a = e * n, this.b = i * a, this.c = -i * n, this.d = e * a), this._bTransform = !0
            }, t.clone = function() {
                var t = o.create();
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t
            }, t.copyTo = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t._bTransform = this._bTransform, t
            }, t.toString = function() {
                return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty
            }, t.destroy = function() {
                this.recover()
            }, t.recover = function() {
                z.recover("Matrix", this.identity())
            }, o.mul = function(t, e, i) {
                var n = t.a,
                    s = t.b,
                    r = t.c,
                    a = t.d,
                    o = t.tx,
                    h = t.ty,
                    l = e.a,
                    u = e.b,
                    c = e.c,
                    _ = e.d,
                    d = e.tx,
                    f = e.ty;
                return 0 !== u || 0 !== c ? (i.a = n * l + s * c, i.b = n * u + s * _, i.c = r * l + a * c, i.d = r * u + a * _, i.tx = l * o + c * h + d, i.ty = u * o + _ * h + f) : (i.a = n * l, i.b = s * _, i.c = r * l, i.d = a * _, i.tx = l * o + d, i.ty = _ * h + f), i
            }, o.mul16 = function(t, e, i) {
                var n = t.a,
                    s = t.b,
                    r = t.c,
                    a = t.d,
                    o = t.tx,
                    h = t.ty,
                    l = e.a,
                    u = e.b,
                    c = e.c,
                    _ = e.d,
                    d = e.tx,
                    f = e.ty;
                return 0 !== u || 0 !== c ? (i[0] = n * l + s * c, i[1] = n * u + s * _, i[4] = r * l + a * c, i[5] = r * u + a * _, i[12] = l * o + c * h + d, i[13] = u * o + _ * h + f) : (i[0] = n * l, i[1] = s * _, i[4] = r * l, i[5] = a * _, i[12] = l * o + d, i[13] = _ * h + f), i
            }, o.create = function() {
                return z.getItemByClass("Matrix", o)
            }, o.EMPTY = new o, o.TEMP = new o, o._createFun = null, o
        }(),
        yt = (m(xt, "laya.utils.PerfData"), xt.prototype.addData = function(t) {
            this.datas[this.datapos] = t, this.datapos++, this.datapos %= on.DATANUM
        }, xt);

    function xt(t, e, i, n) {
        this.id = 0, this.name = null, this.color = 0, this.scale = 1, this.datapos = 0, this.datas = new Array(on.DATANUM), this.id = t, this.color = e, this.name = i, this.scale = n
    }
    var Tt = function() {
            function s() {}
            m(s, "laya.display.cmd.TransformCmd");
            var t = s.prototype;
            return t.recover = function() {
                this.matrix = null, z.recover("TransformCmd", this)
            }, t.run = function(t, e, i) {
                t._transform(this.matrix, this.pivotX + e, this.pivotY + i)
            }, f(0, t, "cmdID", function() {
                return "Transform"
            }), s.create = function(t, e, i) {
                var n = z.getItemByClass("TransformCmd", s);
                return n.matrix = t, n.pivotX = e, n.pivotY = i, n
            }, s.ID = "Transform", s
        }(),
        bt = function() {
            function n() {}
            m(n, "laya.display.cmd.DrawTexturesCmd");
            var t = n.prototype;
            return t.recover = function() {
                this.texture._removeReference(), this.texture = null, this.pos = null, z.recover("DrawTexturesCmd", this)
            }, t.run = function(t, e, i) {
                t.drawTextures(this.texture, this.pos, e, i)
            }, f(0, t, "cmdID", function() {
                return "DrawTextures"
            }), n.create = function(t, e) {
                var i = z.getItemByClass("DrawTexturesCmd", n);
                return (i.texture = t)._addReference(), i.pos = e, i
            }, n.ID = "DrawTextures", n
        }(),
        wt = function() {
            function h() {}
            m(h, "laya.display.cmd.DrawCircleCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.fillColor = null, this.lineColor = null, z.recover("DrawCircleCmd", this)
            }, t.run = function(t, e, i) {
                t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid)
            }, f(0, t, "cmdID", function() {
                return "DrawCircle"
            }), h.create = function(t, e, i, n, s, r, a) {
                var o = z.getItemByClass("DrawCircleCmd", h);
                return o.x = t, o.y = e, o.radius = i, o.fillColor = n, o.lineColor = s, o.lineWidth = r, o.vid = a, o
            }, h.ID = "DrawCircle", h
        }(),
        Ct = function() {
            var i;

            function G() {
                if (this._drawTriUseAbsMatrix = !1, this._id = ++G._COUNT, this._other = null, this._renderNextSubmitIndex = 0, this._path = null, this._drawCount = 1, this._renderCount = 0, this._isConvexCmd = !0, this._submits = null, this._curSubmit = null, this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._clipInCache = !1, this._clipInfoID = 0, this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null, this.sprite = null, this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, this.defTexture = null, this._colorFiler = null, this.drawTexAlign = !1, this._incache = !1, this.isMain = !1, this._tmpMatrix = new vt, this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]), this._tempUV = new Float32Array(8), this._width = 99999999, this._height = 99999999, this._submitKey = new H, this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = G.MAXCLIPRECT, this._globalClipMatrix = new vt(99999999, 0, 0, 99999999, 0, 0), this._shader2D = new V, G._contextcount++, !this.defTexture) {
                    var t = new _n(2, 2);
                    t.setPixels(new Uint8Array(16)), t.lock = !0, this.defTexture = new wi(t)
                }
                this._lastTex = this.defTexture, this.clear()
            }
            m(G, "laya.resource.Context");
            var t = G.prototype;
            return t.drawImage = function(t) {}, t.getImageData = function(t) {}, t.measureText = function(t) {
                return null
            }, t.setTransform = function(t) {}, t.$transform = function(t, e, i, n, s, r) {}, t.clearRect = function(t, e, i, n) {}, t._drawRect = function(t, e, i, n, s) {
                R.renderBatches++, s && (this.fillStyle = s), this.fillRect(t, e, i, n)
            }, t.drawTexture2 = function(t, e, i, n, s, r) {}, t.transformByMatrix = function(t, e, i) {
                this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i)
            }, t.saveTransform = function(t) {
                this.save()
            }, t.restoreTransform = function(t) {
                this.restore()
            }, t.drawRect = function(t, e, i, n, s, r, a) {
                var o = this;
                null != s && (o.fillStyle = s, o.fillRect(t, e, i, n)), null != r && (o.strokeStyle = r, o.lineWidth = a, o.strokeRect(t, e, i, n))
            }, t.alpha = function(t) {
                this.globalAlpha *= t
            }, t._transform = function(t, e, i) {
                this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i)
            }, t._rotate = function(t, e, i) {
                this.translate(e, i), this.rotate(t), this.translate(-e, -i)
            }, t._scale = function(t, e, i, n) {
                this.translate(i, n), this.scale(t, e), this.translate(-i, -n)
            }, t._drawLine = function(t, e, i, n, s, r, a, o, h) {
                this.beginPath(), this.strokeStyle = a, this.lineWidth = o, this.moveTo(t + i, e + n), this.lineTo(t + s, e + r), this.stroke()
            }, t._drawLines = function(t, e, i, n, s, r) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = s;
                i.length;
                this.addPath(i.slice(), !1, !1, t, e), this.stroke()
            }, t.drawCurves = function(t, e, i, n, s) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = s, this.moveTo(t + i[0], e + i[1]);
                for (var r = 2, a = i.length; r < a;)
                    this.quadraticCurveTo(t + i[r++], e + i[r++], t + i[r++], e + i[r++]);
                this.stroke()
            }, t._fillAndStroke = function(t, e, i, n) {
                void 0 === n && (n = !1), null != t && (this.fillStyle = t, this.fill()), null != e && 0 < i && (this.strokeStyle = e, this.lineWidth = i, this.stroke())
            }, t._drawCircle = function(t, e, i, n, s, r, a) {
                R.renderBatches++, this.beginPath(!0), this.arc(t, e, i, 0, G.PI2), this.closePath(), this._fillAndStroke(n, s, r)
            }, t._drawPie = function(t, e, i, n, s, r, a, o, h) {
                this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, n, s), this.closePath(), this._fillAndStroke(r, a, o)
            }, t._drawPoly = function(t, e, i, n, s, r, a, o) {
                i.length;
                this.beginPath(), this.addPath(i.slice(), !0, a, t, e), this.closePath(), this._fillAndStroke(n, s, r, a)
            }, t._drawPath = function(t, e, i, n, s) {
                this.beginPath();
                for (var r = 0, a = i.length; r < a; r++) {
                    var o = i[r];
                    switch (o[0]) {
                        case "moveTo":
                            this.moveTo(t + o[1], e + o[2]);
                            break;
                        case "lineTo":
                            this.lineTo(t + o[1], e + o[2]);
                            break;
                        case "arcTo":
                            this.arcTo(t + o[1], e + o[2], t + o[3], e + o[4], o[5]);
                            break;
                        case "closePath":
                            this.closePath()
                    }
                }
                null != n && (this.fillStyle = n.fillStyle, this.fill()), null != s && (this.strokeStyle = s.strokeStyle, this.lineWidth = s.lineWidth || 1, this.lineJoin = s.lineJoin, this.lineCap = s.lineCap, this.miterLimit = s.miterLimit, this.stroke())
            }, t.clearBG = function(t, e, i, n) {
                var s = jt.mainContext;
                s.clearColor(t, e, i, n), s.clear(16384)
            }, t._getSubmits = function() {
                return this._submits
            }, t._releaseMem = function(t) {
                if (void 0 === t && (t = !1), this._submits) {
                    this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, this._charSubmitCache.clear();
                    for (var e = 0, i = this._submits._length; e < i; e++)
                        this._submits[e].releaseRender();
                    this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, this._path = null, this._save = null;
                    var n;
                    for (e = 0, n = this.meshlist.length; e < n; e++) {
                        this.meshlist[e].destroy()
                    }
                    this.meshlist.length = 0, this.sprite = null, t || (this._targets && this._targets.destroy(), this._targets = null)
                }
            }, t.destroy = function(t) {
                void 0 === t && (t = !1), --G._contextcount, this.sprite = null, this._releaseMem(t), this._charSubmitCache.destroy(), this._mesh.destroy(), t || (this._targets && this._targets.destroy(), this._targets = null)
            }, t.clear = function() {
                this._submits || (this._other = i.DEFAULT, this._curMat = vt.create(), this._charSubmitCache = new Ve, this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = yi.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._triangleMesh = Di.getAMesh(this.isMain), this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [et.Create(this)], this._save.length = 10, this._shader2D = new V), this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1, this._other = i.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, this._clipRect = G.MAXCLIPRECT, this._curSubmit = x.RENDERBASE, x.RENDERBASE._ref = 16777215, x.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = Qt.DEFAULT;
                for (var t = 0, e = this._submits._length; t < e; t++)
                    this._submits[t].releaseRender();
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], this._save._length = 1
            }, t.size = function(t, e) {
                this._width == t && this._height == e || (this._width = t, this._height = e, this._targets && (this._targets.destroy(), this._targets = new dn(t, e, 1, -1)), te._context == this && (jt.mainContext.viewport(0, 0, t, e), It.width = t, It.height = e)), 0 === t && 0 === e && this._releaseMem()
            }, t.getMatScaleX = function() {
                return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b || (this._lastMatScaleX = this._curMat.getScaleX(), this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b), this._lastMatScaleX
            }, t.getMatScaleY = function() {
                return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d || (this._lastMatScaleY = this._curMat.getScaleY(), this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d), this._lastMatScaleY
            }, t.setFillColor = function(t) {
                this._fillColor = t
            }, t.getFillColor = function() {
                return this._fillColor
            }, t.translate = function(t, e) {
                0 === t && 0 === e || (dt.save(this), this._curMat._bTransform ? (oe.save(this), this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, this._curMat.ty = e))
            }, t.save = function() {
                this._save[this._save._length++] = et.Create(this)
            }, t.restore = function() {
                var t = this._save._length,
                    e = this._nBlendType;
                if (!(t < 1)) {
                    for (var i = t - 1; 0 <= i; i--) {
                        var n = this._save[i];
                        if (n.restore(this), n.isSaveMark())
                            return void(this._save._length = i)
                    }
                    e != this._nBlendType && (this._curSubmit = x.RENDERBASE)
                }
            }, t.fillText = function(t, e, i, n, s, r) {
                this._fillText(t, null, e, i, n, s, null, 0, null)
            }, t._fillText = function(t, e, i, n, s, r, a, o, h, l) {
                void 0 === l && (l = 0), t ? G._textRender.filltext(this, t, i, n, s, r, a, o, h, l) : e && G._textRender.fillWords(this, e, i, n, s, r, a, o)
            }, t._fast_filltext = function(t, e, i, n, s, r, a, o, h) {
                void 0 === h && (h = 0), G._textRender._fast_filltext(this, t, null, e, i, n, s, r, a, o, h)
            }, t.fillWords = function(t, e, i, n, s) {
                this._fillText(null, t, e, i, n, s, null, -1, null, 0)
            }, t.fillBorderWords = function(t, e, i, n, s, r, a) {
                this._fillBorderText(null, t, e, i, n, s, r, a, null)
            }, t.drawText = function(t, e, i, n, s, r) {
                this._fillText(t, null, e, i, n, v.create(s).strColor, null, -1, r)
            }, t.strokeWord = function(t, e, i, n, s, r, a) {
                this._fillText(t, null, e, i, n, null, v.create(s).strColor, r || 1, a)
            }, t.fillBorderText = function(t, e, i, n, s, r, a, o) {
                this._fillBorderText(t, null, e, i, n, v.create(s).strColor, v.create(r).strColor, a, o)
            }, t._fillBorderText = function(t, e, i, n, s, r, a, o, h) {
                this._fillText(t, e, i, n, s, r, a, o || 1, h)
            }, t._fillRect = function(t, e, i, n, s) {
                var r = this._curSubmit,
                    a = r && 2 === r._key.submitType && r._key.blendShader === this._nBlendType;
                65535 < this._mesh.vertNum + 4 && (this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(this._mesh), a = !1), a && (a = a && this.isSameClipInfo(r)), this.transformQuad(t, e, i, n, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, wi.NO_UV, s, !1), a || (r = this._curSubmit = _i.create(this, this._mesh, Z.create(1, 0)), this._submits[this._submits._length++] = r, this._copyClipInfo(r, this._globalClipMatrix), r.shaderValue.textureHost = this._lastTex, r._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, r._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }, t.fillRect = function(t, e, i, n, s) {
                var r = s ? Qt.create(s) : this._shader2D.fillStyle,
                    a = this.mixRGBandAlpha(r.toInt());
                this._fillRect(t, e, i, n, a)
            }, t.fillTexture = function(t, e, i, n, s, r, a, o) {
                t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, i, n, s, r, a.x, a.y) : this.sprite && y.systemTimer.callLater(this, this._repaintSprite)
            }, t._fillTexture = function(t, e, i, n, s, r, a, o, h, l, u) {
                var c = this._curSubmit;
                65535 < this._mesh.vertNum + 4 && (this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(this._mesh));
                var _ = !0,
                    d = !0;
                switch (h) {
                    case "repeat":
                        break;
                    case "repeat-x":
                        d = !1;
                        break;
                    case "repeat-y":
                        _ = !1;
                        break;
                    case "no-repeat":
                        _ = d = !1
                }
                var f = this._temp4Points,
                    p = 0,
                    m = 0,
                    g = 0,
                    v = 0,
                    y = 0,
                    x = 0;
                if (l < 0 ? (g = s, p = -l % e / e) : g = s + l, u < 0 ? (v = r, m = -u % i / i) : v = r + u, y = s + a, x = r + o, _ || (y = Math.min(y, s + l + e)), d || (x = Math.min(x, r + u + i)), !(y < s || x < r || y < g || x < v)) {
                    var T = (y - s - l) / e,
                        b = (x - r - u) / i;
                    if (this.transformQuad(g, v, y - g, x - v, 0, this._curMat, this._transedPoints), f[0] = p, f[1] = m, f[2] = T, f[3] = m, f[4] = T, f[5] = b, f[6] = p, f[7] = b, !this.clipedOff(this._transedPoints)) {
                        var w = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, f, w, !0);
                        var C = Z.create(1, 0);
                        C.defines.add(256), C.u_TexRange = n, c = this._curSubmit = _i.create(this, this._mesh, C), this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix), c.shaderValue.textureHost = t, c._renderType = 10016, this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4
                    }
                    this.breakNextMerge()
                }
            }, t.setColorFilter = function(t) {
                o.save(this, 8388608, this, !0), this._colorFiler = t, this._curSubmit = x.RENDERBASE
            }, t.drawTexture = function(t, e, i, n, s) {
                this._drawTextureM(t, e, i, n, s, null, 1, null)
            }, t.drawTextures = function(t, e, i, n) {
                if (t._getSource())
                    for (var s = e.length / 2, r = 0, a = t.bitmap.id, o = 0; o < s; o++)
                        this._inner_drawTexture(t, a, e[r++] + i, e[r++] + n, 0, 0, null, null, 1, !1);
                else
                    this.sprite && y.systemTimer.callLater(this, this._repaintSprite)
            }, t._drawTextureAddSubmit = function(t, e) {
                var i = null;
                i = _i.create(this, this._mesh, Z.create(1, 0)), (this._submits[this._submits._length++] = i).shaderValue.textureHost = e, i._key.other = t, i._renderType = 10016, this._curSubmit = i
            }, t._drawTextureM = function(t, e, i, n, s, r, a, o) {
                var h = this.sprite;
                return !!t._getSource(function() {
                    h && h.repaint()
                }) && this._inner_drawTexture(t, t.bitmap.id, e, i, n, s, r, o, a, !1)
            }, t._drawRenderTexture = function(t, e, i, n, s, r, a, o) {
                return this._inner_drawTexture(t, -1, e, i, n, s, r, o, 1, !1)
            }, t.submitDebugger = function() {
                this._submits[this._submits._length++] = at.create([], function() {}, this)
            }, t._copyClipInfo = function(t, e) {
                var i = t.shaderValue.clipMatDir;
                i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
                var n = t.shaderValue.clipMatPos;
                n[0] = e.tx, n[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1)
            }, t.isSameClipInfo = function(t) {
                return t.clipInfoID === this._clipInfoID
            }, t._useNewTex2DSubmit = function(t, e) {
                65535 < this._mesh.vertNum + e && (this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(this._mesh));
                var i = _i.create(this, this._mesh, Z.create(1, 0));
                this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, this._copyClipInfo(i, this._globalClipMatrix)
            }, t._drawTexRect = function(t, e, i, n, s) {
                this.transformQuad(t, e, i, n, this._italicDeg, this._curMat, this._transedPoints);
                var r = this._transedPoints;
                r[0] = r[0] + .5 | 0, r[1] = r[1] + .5 | 0, r[2] = r[2] + .5 | 0, r[3] = r[3] + .5 | 0, r[4] = r[4] + .5 | 0, r[5] = r[5] + .5 | 0, r[6] = r[6] + .5 | 0, r[7] = r[7] + .5 | 0, this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, s, this._fillColor, !0), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }, t.drawCallOptimize = function(t) {
                return this._charSubmitCache.enable(t, this), t
            }, t._inner_drawTexture = function(t, e, i, n, s, r, a, o, h, l) {
                var u = this._curSubmit._key;
                if (o = o || t._uv, 4 === u.submitType && u.other === e) {
                    var c = this._drawTexToDrawTri_Vert;
                    c[0] = i, c[1] = n, c[2] = i + s, c[3] = n, c[4] = i + s, c[5] = n + r, c[6] = i, c[7] = n + r, this._drawTriUseAbsMatrix = !0;
                    var _ = this._tempUV;
                    return _[0] = o[0], _[1] = o[1], _[2] = o[2], _[3] = o[3], _[4] = o[4], _[5] = o[5], _[6] = o[6], _[7] = o[7], this.drawTriangles(t, 0, 0, c, _, this._drawTexToDrawTri_Index, a, h, null, null), !(this._drawTriUseAbsMatrix = !1)
                }
                var d = this._mesh,
                    f = this._curSubmit,
                    p = l ? this._charSubmitCache.getPos() : this._transedPoints;
                if (this.transformQuad(i, n, s || t.width, r || t.height, this._italicDeg, a || this._curMat, p), this.drawTexAlign) {
                    var m = Math.round;
                    p[0] = m(p[0]), p[1] = m(p[1]), p[2] = m(p[2]), p[3] = m(p[3]), p[4] = m(p[4]), p[5] = m(p[5]), p[6] = m(p[6]), p[7] = m(p[7]), this.drawTexAlign = !1
                }
                var g = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h);
                if (l)
                    return this._charSubmitCache.add(this, t, e, p, o, g), !0;
                this._drawCount++;
                var v = 0 <= e && 2 === u.submitType && u.other === e;
                return v && (v = v && this.isSameClipInfo(f)), this._lastTex = t, 65535 < d.vertNum + 4 && (d = this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(d), v = !1), d.addQuad(p, o, g, !0), v || (this._submits[this._submits._length++] = this._curSubmit = f = _i.create(this, d, Z.create(1, 0)), f.shaderValue.textureHost = t, f._key.other = e, this._copyClipInfo(f, this._globalClipMatrix)), f._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0
            }, t.transform4Points = function(t, e, i) {
                var n = e.tx,
                    s = e.ty,
                    r = e.a,
                    a = e.b,
                    o = e.c,
                    h = e.d,
                    l = t[0],
                    u = t[1],
                    c = t[2],
                    _ = t[3],
                    d = t[4],
                    f = t[5],
                    p = t[6],
                    m = t[7];
                e._bTransform ? (i[0] = l * r + u * o + n, i[1] = l * a + u * h + s, i[2] = c * r + _ * o + n, i[3] = c * a + _ * h + s, i[4] = d * r + f * o + n, i[5] = d * a + f * h + s, i[6] = p * r + m * o + n, i[7] = p * a + m * h + s) : (i[0] = l + n, i[1] = u + s, i[2] = c + n, i[3] = _ + s, i[4] = d + n, i[5] = f + s, i[6] = p + n, i[7] = m + s)
            }, t.clipedOff = function(t) {
                return this._clipRect.width <= 0 || this._clipRect.height <= 0
            }, t.transformQuad = function(t, e, i, n, s, r, a) {
                var o = 0;
                0 != s && (o = Math.tan(s * Math.PI / 180) * n);
                var h = t + i,
                    l = e + n,
                    u = r.tx,
                    c = r.ty,
                    _ = r.a,
                    d = r.b,
                    f = r.c,
                    p = r.d,
                    m = t + o,
                    g = e,
                    v = h + o,
                    y = e,
                    x = h,
                    T = l,
                    b = t,
                    w = l;
                r._bTransform ? (a[0] = m * _ + g * f + u, a[1] = m * d + g * p + c, a[2] = v * _ + y * f + u, a[3] = v * d + y * p + c, a[4] = x * _ + T * f + u, a[5] = x * d + T * p + c, a[6] = b * _ + w * f + u, a[7] = b * d + w * p + c) : (a[0] = m + u, a[1] = g + c, a[2] = v + u, a[3] = y + c, a[4] = x + u, a[5] = T + c, a[6] = b + u, a[7] = w + c)
            }, t.pushRT = function() {
                this.addRenderObject(at.create(null, dn.pushRT, this))
            }, t.popRT = function() {
                this.addRenderObject(at.create(null, dn.popRT, this)), this.breakNextMerge()
            }, t.useRT = function(t) {
                this.addRenderObject(at.create([t], function(t) {
                    if (!t)
                        throw "error useRT";
                    t.start(), t.clear(0, 0, 0, 0)
                }, this)), this.breakNextMerge()
            }, t.RTRestore = function(t) {
                this.addRenderObject(at.create([t], function(t) {
                    t.restore()
                }, this)), this.breakNextMerge()
            }, t.breakNextMerge = function() {
                this._curSubmit = x.RENDERBASE
            }, t._repaintSprite = function() {
                this.sprite && this.sprite.repaint()
            }, t.drawTextureWithTransform = function(t, e, i, n, s, r, a, o, h, l, u) {
                var c = null,
                    _ = this._curMat;
                l && (c = this.globalCompositeOperation, this.globalCompositeOperation = l);
                var d = this._colorFiler;
                if (u && this.setColorFilter(u), !r)
                    return this._drawTextureM(t, e + a, i + o, n, s, _, h, null), l && (this.globalCompositeOperation = c), void(u && this.setColorFilter(d));
                var f = this._tmpMatrix;
                f.a = r.a, f.b = r.b, f.c = r.c, f.d = r.d, f.tx = r.tx + a, f.ty = r.ty + o, f._bTransform = r._bTransform, r && _._bTransform ? (vt.mul(f, _, f), (r = f)._bTransform = !0) : (f.tx += _.tx, f.ty += _.ty, r = f), this._drawTextureM(t, e, i, n, s, r, h, null), l && (this.globalCompositeOperation = c), u && this.setColorFilter(d)
            }, t._flushToTarget = function(t, e) {
                It.worldScissorTest = !1, jt.mainContext.disable(3089);
                var i = It.worldAlpha,
                    n = It.worldMatrix4,
                    s = It.worldMatrix;
                It.worldShaderDefines;
                It.worldMatrix = vt.EMPTY, It.restoreTempArray(), It.worldMatrix4 = It.TEMPMAT4_ARRAY, It.worldAlpha = 1, Hi.activeShader = null, e.start(), 0 < t._submits._length && e.clear(0, 0, 0, 0), t._curSubmit = x.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = x.RENDERBASE, Hi.activeShader = null, It.worldAlpha = i, It.worldMatrix4 = n, It.worldMatrix = s
            }, t.drawCanvas = function(t, e, i, n, s) {
                if (t) {
                    var r, a = t.context;
                    if (a._targets)
                        0 < a._submits._length && (r = at.create([a, a._targets], this._flushToTarget, this), this._submits[this._submits._length++] = r), this._drawRenderTexture(a._targets, e, i, n, s, null, 1, dn.flipyuv), this._curSubmit = x.RENDERBASE;
                    else {
                        var o = t;
                        o.touches && o.touches.forEach(function(t) {
                            t.touch()
                        }), r = fi.create(t, this._shader2D.ALPHA, this._shader2D.filters), (this._submits[this._submits._length++] = r)._key.clear();
                        var h = r._matrix;
                        this._curMat.copyTo(h);
                        var l = h.tx,
                            u = h.ty;
                        h.tx = h.ty = 0, h.transformPoint(ye.TEMP.setTo(e, i)), h.translate(ye.TEMP.x + l, ye.TEMP.y + u), vt.mul(o.invMat, h, h), this._curSubmit = x.RENDERBASE
                    }
                }
            }, t.drawTarget = function(t, e, i, n, s, r, a, o, h) {
                void 0 === h && (h = -1), this._drawCount++;
                if (65535 < this._mesh.vertNum + 4 && (this._mesh = Si.getAMesh(this.isMain), this.meshlist.push(this._mesh)), this.transformQuad(e, i, n, s, 0, r || this._curMat, this._transedPoints), this.clipedOff(this._transedPoints))
                    return this._curSubmit = x.RENDERBASE, !1;
                this._mesh.addQuad(this._transedPoints, o || wi.DEF_UV, 4294967295, !0);
                var l = this._curSubmit = c.create(this, this._mesh, a, t);
                return l.blendType = -1 == h ? this._nBlendType : h, this._copyClipInfo(l, this._globalClipMatrix), l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l, this._curSubmit = x.RENDERBASE, !0
            }, t.drawTriangles = function(t, e, i, n, s, r, a, o, h, l) {
                if (t._getSource()) {
                    this._drawCount++;
                    var u = this._tmpMatrix,
                        c = this._triangleMesh,
                        _ = null,
                        d = !1;
                    h && (_ = this._colorFiler, this._colorFiler = h, this._curSubmit = x.RENDERBASE, d = _ != h);
                    var f = t.bitmap,
                        p = this._curSubmit._key,
                        m = 4 === p.submitType && p.other === f.id && p.blendShader == this._nBlendType;
                    if (65535 < c.vertNum + n.length / 2 && (c = this._triangleMesh = Di.getAMesh(this.isMain), this.meshlist.push(c), m = !1), !m) {
                        var g = this._curSubmit = _i.create(this, c, Z.create(1, 0));
                        g.shaderValue.textureHost = t, g._renderType = 10016, g._key.submitType = 4, g._key.other = f.id, this._copyClipInfo(g, this._globalClipMatrix), this._submits[this._submits._length++] = g
                    }
                    var v = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
                    this._drawTriUseAbsMatrix ? c.addData(n, s, r, a, v) : (a ? (u.a = a.a, u.b = a.b, u.c = a.c, u.d = a.d, u.tx = a.tx + e, u.ty = a.ty + i) : (u.a = 1, u.b = 0, u.c = 0, u.d = 1, u.tx = e, u.ty = i), vt.mul(u, this._curMat, u), c.addData(n, s, r, u, v)), this._curSubmit._numEle += r.length, d && (this._colorFiler = _, this._curSubmit = x.RENDERBASE)
                } else
                    this.sprite && y.systemTimer.callLater(this, this._repaintSprite)
            }, t.transform = function(t, e, i, n, s, r) {
                oe.save(this), vt.mul(vt.TEMP.setTo(t, e, i, n, s, r), this._curMat, this._curMat), this._curMat._checkTransform()
            }, t._transformByMatrix = function(t, e, i) {
                t.setTranslate(e, i), vt.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), this._curMat._bTransform = !0
            }, t.setTransformByMatrix = function(t) {
                t.copyTo(this._curMat)
            }, t.rotate = function(t) {
                oe.save(this), this._curMat.rotateEx(t)
            }, t.scale = function(t, e) {
                oe.save(this), this._curMat.scaleEx(t, e)
            }, t.clipRect = function(t, e, i, n) {
                Ke.save(this), this._clipRect == G.MAXCLIPRECT ? this._clipRect = new Ot(t, e, i, n) : (this._clipRect.width = i, this._clipRect.height = n, this._clipRect.x = t, this._clipRect.y = e), G._clipID_Gen++, G._clipID_Gen %= 1e4, this._clipInfoID = G._clipID_Gen;
                var s = this._globalClipMatrix,
                    r = s.tx,
                    a = s.ty,
                    o = r + s.a,
                    h = a + s.d;
                if (99999999 <= this._clipRect.width ? (s.a = s.d = 99999999, s.b = s.c = s.tx = s.ty = 0) : (this._curMat._bTransform ? (s.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, s.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, s.a = this._clipRect.width * this._curMat.a, s.b = this._clipRect.width * this._curMat.b, s.c = this._clipRect.height * this._curMat.c, s.d = this._clipRect.height * this._curMat.d) : (s.tx = this._clipRect.x + this._curMat.tx, s.ty = this._clipRect.y + this._curMat.ty, s.a = this._clipRect.width, s.b = s.c = 0, s.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), 0 < s.a && 0 < s.d) {
                    var l = s.tx + s.a,
                        u = s.ty + s.d;
                    l <= r || u <= a || s.tx >= o || s.ty >= h ? (s.a = -.1, s.d = -.1) : (s.tx < r && (s.a -= r - s.tx, s.tx = r), o < l && (s.a -= l - o), s.ty < a && (s.d -= a - s.ty, s.ty = a), h < u && (s.d -= u - h), s.a <= 0 && (s.a = -.1), s.d <= 0 && (s.d = -.1))
                }
            }, t.drawMesh = function(t, e, i, n, s, r, a, o, h) {
                void 0 === h && (h = 0)
            }, t.addRenderObject = function(t) {
                this._submits[this._submits._length++] = t
            }, t.submitElement = function(t, e) {
                te._context;
                var i = this._submits,
                    n = i._length;
                e < 0 && (e = i._length);
                for (var s = x.RENDERBASE; t < e;)
                    this._renderNextSubmitIndex = t + 1, i[t] !== x.RENDERBASE ? (x.preRender = s, t += (s = i[t]).renderSubmit()) : t++;
                return n
            }, t.flush = function() {
                var t = this.submitElement(0, this._submits._length);
                this._path && this._path.reset(), d.instance && d.getInstance().reset(), this._curSubmit = x.RENDERBASE;
                for (var e = 0, i = this.meshlist.length; e < i; e++) {
                    var n = this.meshlist[e];
                    n.canReuse ? n.releaseMesh() : n.destroy()
                }
                return this.meshlist.length = 0, this._mesh = Si.getAMesh(this.isMain), this._pathMesh = yi.getAMesh(this.isMain), this._triangleMesh = Di.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), this._flushCnt++, this._flushCnt % 60 == 0 && te._context == this && M.textRenderInst && M.textRenderInst.GC(), t
            }, t.beginPath = function(t) {
                void 0 === t && (t = !1), this._getPath().beginPath(t)
            }, t.closePath = function() {
                this._path.closePath()
            }, t.addPath = function(t, e, i, n, s) {
                for (var r = 0, a = 0, o = t.length / 2; a < o; a++) {
                    var h = t[r] + n,
                        l = t[r + 1] + s;
                    t[r] = h, t[r + 1] = l, r += 2
                }
                this._getPath().push(t, i)
            }, t.fill = function() {
                var t = this._curMat,
                    e = this._getPath(),
                    i = this._curSubmit,
                    n = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var s, r = this.mixRGBandAlpha(this.fillStyle.toInt()), a = 0, o = 0, h = e.paths.length; o < h; o++) {
                    var l = e.paths[o],
                        u = l.path.length / 2;
                    if (!(u < 3 || 3 == u && !l.convex)) {
                        var c = l.path.concat(),
                            _ = 0,
                            d = 0,
                            f = 0,
                            p = NaN,
                            m = NaN;
                        if (t._bTransform)
                            for (_ = 0; _ < u; _++)
                                f = (d = _ << 1) + 1, p = c[d], m = c[f], c[d] = t.a * p + t.c * m + t.tx, c[f] = t.b * p + t.d * m + t.ty;
                        else
                            for (_ = 0; _ < u; _++)
                                f = (d = _ << 1) + 1, p = c[d], m = c[f], c[d] = p + t.tx, c[f] = m + t.ty;
                        65535 < this._pathMesh.vertNum + u && (this._curSubmit._numEle += a, a = 0, this._pathMesh = yi.getAMesh(this.isMain), this._curSubmit = this.addVGSubmit(this._pathMesh));
                        var g = this._pathMesh.vertNum;
                        if (l.convex) {
                            var v = u - 2;
                            s = new Array(3 * v);
                            for (var y = 0, x = 0; x < v; x++)
                                s[y++] = g, s[y++] = x + 1 + g, s[y++] = x + 2 + g
                        } else if (s = pe.earcut(c, null, 2), 0 < g)
                            for (var T = 0; T < s.length; T++)
                                s[T] += g;
                        this._pathMesh.addVertAndIBToMesh(this, c, r, s), a += s.length
                    }
                }
                this._curSubmit._numEle += a
            }, t.addVGSubmit = function(t) {
                var e = x.createShape(this, t, 0, Z.create(4, 0));
                return e._key.submitType = 3, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix), e
            }, t.stroke = function() {
                if (0 < this.lineWidth) {
                    var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        e = this._getPath(),
                        i = this._curSubmit,
                        n = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                    n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var s = 0, r = 0, a = e.paths.length; r < a; r++) {
                        var o = e.paths[r];
                        if (!(o.path.length <= 0)) {
                            var h = [],
                                l = [],
                                u = 2 * o.path.length;
                            if (!(u < 2)) {
                                65535 < this._pathMesh.vertNum + u && (this._curSubmit._numEle += s, s = 0, this._pathMesh = yi.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), Te.createLine2(o.path, h, this.lineWidth, this._pathMesh.vertNum, l, o.loop);
                                var c = l.length / 2,
                                    _ = this._curMat,
                                    d = 0,
                                    f = 0,
                                    p = 0,
                                    m = NaN,
                                    g = NaN;
                                if (_._bTransform)
                                    for (d = 0; d < c; d++)
                                        p = (f = d << 1) + 1, m = l[f], g = l[p], l[f] = _.a * m + _.c * g + _.tx, l[p] = _.b * m + _.d * g + _.ty;
                                else
                                    for (d = 0; d < c; d++)
                                        p = (f = d << 1) + 1, m = l[f], g = l[p], l[f] = m + _.tx, l[p] = g + _.ty;
                                this._pathMesh.addVertAndIBToMesh(this, l, t, h), s += h.length
                            }
                        }
                    }
                    this._curSubmit._numEle += s
                }
            }, t.moveTo = function(t, e) {
                var i = this._getPath();
                i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e)
            }, t.lineTo = function(t, e) {
                var i = this._getPath();
                Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e))
            }, t.arcTo = function(t, e, i, n, s) {
                var r = 0,
                    a = 0,
                    o = 0,
                    h = this._path._lastOriX - t,
                    l = this._path._lastOriY - e,
                    u = Math.sqrt(h * h + l * l);
                if (!(u <= 1e-6)) {
                    var c = h / u,
                        _ = l / u,
                        d = i - t,
                        f = n - e,
                        p = d * d + f * f,
                        m = Math.sqrt(p);
                    if (!(m <= 1e-6)) {
                        var g = d / m,
                            v = f / m,
                            y = c + g,
                            x = _ + v,
                            T = Math.sqrt(y * y + x * x);
                        if (!(T <= 1e-6)) {
                            var b = y / T,
                                w = x / T,
                                C = Math.acos(b * c + w * _),
                                A = Math.PI / 2 - C,
                                E = (u = s / Math.tan(A)) * c + t,
                                S = u * _ + e,
                                M = Math.sqrt(u * u + s * s),
                                R = t + b * M,
                                I = e + w * M,
                                P = 0,
                                D = 0;
                            if (0 <= c * v - _ * g) {
                                var L = 2 * A / G.SEGNUM;
                                P = Math.sin(L), D = Math.cos(L)
                            } else
                                L = 2 * -A / G.SEGNUM, P = Math.sin(L), D = Math.cos(L);
                            var B = this._path._lastOriX,
                                F = this._path._lastOriY,
                                O = E,
                                N = S;
                            (.1 < Math.abs(O - this._path._lastOriX) || .1 < Math.abs(N - this._path._lastOriY)) && (B = a = O, F = o = N, this._path.addPoint(a, o));
                            var k = E - R,
                                U = S - I;
                            for (r = 0; r < G.SEGNUM; r++) {
                                var W = k * D + U * P,
                                    V = -k * P + U * D;
                                a = W + R, o = V + I, (.1 < Math.abs(B - a) || .1 < Math.abs(F - o)) && (this._path.addPoint(a, o), B = a, F = o), k = W, U = V
                            }
                        }
                    }
                }
            }, t.arc = function(t, e, i, n, s, r, a) {
                void 0 === r && (r = !1), void 0 === a && (a = !0);
                var o, h, l = 0,
                    u = 0,
                    c = 0,
                    _ = 0,
                    d = 0,
                    f = 0,
                    p = 0;
                if (u = s - n, r)
                    if (Math.abs(u) >= 2 * Math.PI)
                        u = 2 * -Math.PI;
                    else
                        for (; 0 < u;)
                            u -= 2 * Math.PI;
                else if (Math.abs(u) >= 2 * Math.PI)
                    u = 2 * Math.PI;
                else
                    for (; u < 0;)
                        u += 2 * Math.PI;
                var m = this.getMatScaleX(),
                    g = this.getMatScaleY(),
                    v = i * (g < m ? m : g),
                    y = 2 * Math.PI * v;
                o = u / (h = 0 | Math.max(y / 10, 10)) / 2, c = Math.abs(4 / 3 * (1 - Math.cos(o)) / Math.sin(o)), r && (c = -c);
                var x = this._getPath();
                for (p = 0; p <= h; p++)
                    l = n + u * (p / h), _ = Math.cos(l), f = e + Math.sin(l) * i, (d = t + _ * i) == this._path._lastOriX && f == this._path._lastOriY || x.addPoint(d, f);
                _ = Math.cos(s), f = e + Math.sin(s) * i, (d = t + _ * i) == this._path._lastOriX && f == this._path._lastOriY || x.addPoint(d, f)
            }, t.quadraticCurveTo = function(t, e, i, n) {
                for (var s = ue.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, t, e, i, n], 30, 2), r = 0, a = s.length / 2; r < a; r++)
                    this.lineTo(s[2 * r], s[2 * r + 1]);
                this.lineTo(i, n)
            }, t.mixRGBandAlpha = function(t) {
                return this._mixRGBandAlpha(t, this._shader2D.ALPHA)
            }, t._mixRGBandAlpha = function(t, e) {
                if (1 <= e)
                    return t;
                var i = (4278190080 & t) >>> 24;
                return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24
            }, t.strokeRect = function(t, e, i, n, s) {
                if (0 < this.lineWidth) {
                    var r = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        a = this.lineWidth / 2;
                    this._fillRect(t - a, e - a, i + this.lineWidth, this.lineWidth, r), this._fillRect(t - a, e - a + n, i + this.lineWidth, this.lineWidth, r), this._fillRect(t - a, e + a, this.lineWidth, n - this.lineWidth, r), this._fillRect(t - a + i, e + a, this.lineWidth, n - this.lineWidth, r)
                }
            }, t.clip = function() {}, t.drawParticle = function(t, e, i) {
                i.x = t, i.y = e, this._submits[this._submits._length++] = i
            }, t._getPath = function() {
                return this._path || (this._path = new P)
            }, t._fillTexture_h = function(t, e, i, n, s, r, a, o) {
                for (var h = r, l = Math.floor(o / n), u = o % n, c = 0; c < l; c++)
                    this._inner_drawTexture(t, e, h, a, n, s, this._curMat, i, 1, !1), h += n;
                if (0 < u) {
                    var _ = i[2] - i[0],
                        d = i[0] + u / n * _,
                        f = G.tmpuv1;
                    f[0] = i[0], f[1] = i[1], f[2] = d, f[3] = i[3], f[4] = d, f[5] = i[5], f[6] = i[6], f[7] = i[7], this._inner_drawTexture(t, e, h, a, u, s, this._curMat, f, 1, !1)
                }
            }, t._fillTexture_v = function(t, e, i, n, s, r, a, o) {
                for (var h = a, l = Math.floor(o / s), u = o % s, c = 0; c < l; c++)
                    this._inner_drawTexture(t, e, r, h, n, s, this._curMat, i, 1, !1), h += s;
                if (0 < u) {
                    var _ = i[7] - i[1],
                        d = i[1] + u / s * _,
                        f = G.tmpuv1;
                    f[0] = i[0], f[1] = i[1], f[2] = i[2], f[3] = i[3], f[4] = i[4], f[5] = d, f[6] = i[6], f[7] = d, this._inner_drawTexture(t, e, r, h, n, u, this._curMat, f, 1, !1)
                }
            }, t.drawTextureWithSizeGrid = function(t, e, i, n, s, r, a, o) {
                if (t._getSource()) {
                    e += a, i += o;
                    var h = t.uv,
                        l = t.bitmap.width,
                        u = t.bitmap.height,
                        c = r[0],
                        _ = r[3],
                        d = c / u,
                        f = _ / l,
                        p = r[1],
                        m = r[2],
                        g = p / l,
                        v = m / u,
                        y = r[4],
                        x = !1;
                    if (n == l && (_ = p = 0), s == u && (c = m = 0), n < _ + p) {
                        var T = n;
                        x = !0, n = _ + p, this.save(), this.clipRect(0 + e, 0 + i, T, s)
                    }
                    var b = t.bitmap.id,
                        w = this._curMat,
                        C = this._tempUV,
                        A = h[0],
                        E = h[1],
                        S = h[4],
                        M = h[5],
                        R = A,
                        I = E,
                        P = S,
                        D = M;
                    if (_ && c && (P = A + f, D = E + d, C[0] = A, C[1] = E, C[2] = P, C[3] = E, C[4] = P, C[5] = D, C[6] = A, C[7] = D, this._inner_drawTexture(t, b, e, i, _, c, w, C, 1, !1)), p && c && (R = S - g, P = S, D = (I = E) + d, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, this._inner_drawTexture(t, b, n - p + e, 0 + i, p, c, w, C, 1, !1)), _ && m && (I = M - v, P = (R = A) + f, D = M, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, this._inner_drawTexture(t, b, 0 + e, s - m + i, _, m, w, C, 1, !1)), p && m && (R = S - g, I = M - v, P = S, D = M, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, this._inner_drawTexture(t, b, n - p + e, s - m + i, p, m, w, C, 1, !1)), c && (R = A + f, P = S - g, D = (I = E) + d, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, y ? this._fillTexture_h(t, b, C, t.width - _ - p, c, _ + e, i, n - _ - p) : this._inner_drawTexture(t, b, _ + e, i, n - _ - p, c, w, C, 1, !1)), m && (R = A + f, I = M - v, P = S - g, D = M, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, y ? this._fillTexture_h(t, b, C, t.width - _ - p, m, _ + e, s - m + i, n - _ - p) : this._inner_drawTexture(t, b, _ + e, s - m + i, n - _ - p, m, w, C, 1, !1)), _ && (I = E + d, P = (R = A) + f, D = M - v, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, y ? this._fillTexture_v(t, b, C, _, t.height - c - m, e, c + i, s - c - m) : this._inner_drawTexture(t, b, e, c + i, _, s - c - m, w, C, 1, !1)), p && (R = S - g, I = E + d, P = S, D = M - v, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, y ? this._fillTexture_v(t, b, C, p, t.height - c - m, n - p + e, c + i, s - c - m) : this._inner_drawTexture(t, b, n - p + e, c + i, p, s - c - m, w, C, 1, !1)), R = A + f, I = E + d, P = S - g, D = M - v, C[0] = R, C[1] = I, C[2] = P, C[3] = I, C[4] = P, C[5] = D, C[6] = R, C[7] = D, y) {
                        var L = G.tmpUVRect;
                        L[0] = R, L[1] = I, L[2] = P - R, L[3] = D - I, this._fillTexture(t, t.width - _ - p, t.height - c - m, L, _ + e, c + i, n - _ - p, s - c - m, "repeat", 0, 0)
                    } else
                        this._inner_drawTexture(t, b, _ + e, c + i, n - _ - p, s - c - m, w, C, 1, !1);
                    x && this.restore()
                }
            }, f(0, t, "textAlign", function() {
                return this._other.textAlign
            }, function(t) {
                this._other.textAlign === t || (this._other = this._other.make(), o.save(this, 32768, this._other, !1), this._other.textAlign = t)
            }), f(0, t, "lineJoin", function() {
                return null
            }, function(t) {}), f(0, t, "fillStyle", function() {
                return this._shader2D.fillStyle
            }, function(t) {
                this._shader2D.fillStyle.equal(t) || (o.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = Qt.create(t), this._submitKey.other = -this._shader2D.fillStyle.toInt())
            }), f(0, t, "lineCap", function() {
                return null
            }, function(t) {}), f(0, t, "miterLimit", function() {
                return null
            }, function(t) {}), f(0, t, "strokeStyle", function() {
                return this._shader2D.strokeStyle
            }, function(t) {
                this._shader2D.strokeStyle.equal(t) || (o.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = Qt.create(t), this._submitKey.other = -this._shader2D.strokeStyle.toInt())
            }), f(0, t, "globalCompositeOperation", function() {
                return ti.NAMES[this._nBlendType]
            }, function(t) {
                var e = ti.TOINT[t];
                null == e || this._nBlendType === e || (o.save(this, 65536, this, !0), this._curSubmit = x.RENDERBASE, this._nBlendType = e)
            }), f(0, t, "globalAlpha", function() {
                return this._shader2D.ALPHA
            }, function(t) {
                (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (o.save(this, 1, this._shader2D, !1), this._shader2D.ALPHA = t)
            }), f(0, t, "asBitmap", null, function(t) {
                if (t) {
                    if (this._targets || (this._targets = new dn(this._width, this._height, 1, -1)), !this._width || !this._height)
                        throw Error("asBitmap no size!")
                } else
                    this._targets && this._targets.destroy(), this._targets = null
            }), f(0, t, "textBaseline", function() {
                return this._other.textBaseline
            }, function(t) {
                this._other.textBaseline === t || (this._other = this._other.make(), o.save(this, 16384, this._other, !1), this._other.textBaseline = t)
            }), f(0, t, "lineWidth", function() {
                return this._other.lineWidth
            }, function(t) {
                this._other.lineWidth === t || (this._other = this._other.make(), o.save(this, 256, this._other, !1), this._other.lineWidth = t)
            }), f(0, t, "font", null, function(t) {
                this._other = this._other.make(), o.save(this, 8, this._other, !1)
            }), f(0, t, "canvas", function() {
                return this._canvas
            }), G.__init__ = function() {
                G.MAXCLIPRECT = new Ot(0, 0, 99999999, 99999999), i.DEFAULT = new i
            }, G.set2DRenderConfig = function() {
                var t = se.instance;
                pt.setBlend(t, !0), pt.setBlendFunc(t, 1, 771), pt.setDepthTest(t, !1), pt.setCullFace(t, !1), pt.setDepthMask(t, !0), pt.setFrontFace(t, 2305), t.viewport(0, 0, It.width, It.height)
            }, G.ENUM_TEXTALIGN_DEFAULT = 0, G.ENUM_TEXTALIGN_CENTER = 1, G.ENUM_TEXTALIGN_RIGHT = 2, G._SUBMITVBSIZE = 32e3, G._MAXSIZE = 99999999, G._MAXVERTNUM = 65535, G.MAXCLIPRECT = null, G._COUNT = 0, G.SEGNUM = 32, G._contextcount = 0, G.PI2 = 2 * Math.PI, G._clipID_Gen = 0, a(G, ["_textRender", function() {
                return this._textRender = new M
            }, "tmpuv1", function() {
                return this.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0]
            }, "tmpUV", function() {
                return this.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0]
            }, "tmpUVRect", function() {
                return this.tmpUVRect = [0, 0, 0, 0]
            }]), G.__init$ = function() {
                i = function() {
                    function t() {
                        this.lineWidth = 1, this.textAlign = null, this.textBaseline = null
                    }
                    m(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.lineWidth = 1, this.textAlign = this.textBaseline = null
                    }, e.make = function() {
                        return this === t.DEFAULT ? new t : this
                    }, t.DEFAULT = null, t
                }()
            }, G
        }(),
        At = function() {
            function o() {}
            m(o, "laya.filters.BlurFilterGLRender");
            var t = o.prototype;
            return t.render = function(t, e, i, n, s) {
                var r = Z.create(1, 0);
                this.setShaderInfo(r, s, t.width, t.height), e.drawTarget(t, 0, 0, i, n, vt.EMPTY.identity(), r)
            }, t.setShaderInfo = function(t, e, i, n) {
                t.defines.add(16);
                var s = t;
                o.blurinfo[0] = i, o.blurinfo[1] = n, s.blurInfo = o.blurinfo;
                var r = e.strength / 3,
                    a = r * r;
                e.strength_sig2_2sig2_gauss1[0] = e.strength, e.strength_sig2_2sig2_gauss1[1] = a, e.strength_sig2_2sig2_gauss1[2] = 2 * a, e.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * a), s.strength_sig2_2sig2_gauss1 = e.strength_sig2_2sig2_gauss1
            }, a(o, ["blurinfo", function() {
                return this.blurinfo = new Array(2)
            }]), o
        }(),
        Et = (m(St, "laya.webgl.utils.CONST3D2D"), St.BYTES_PE = 4, St.BYTES_PIDX = 2, St.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], St.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], St.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], St._TMPARRAY = [], St._OFFSETX = 0, St._OFFSETY = 0, St);

    function St() {}
    var Mt = (m(Rt, "laya.webgl.text.CharRenderInfo"), Rt.prototype.touch = function() {
        var t = R.loopCount;
        this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t
    }, Rt);

    function Rt() {
        this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0, this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0, this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8)
    }! function() {
        function s() {
            this._renderType = 0, this._repaint = 0, this._x = NaN, this._y = NaN
        }
        m(s, "laya.layagl.QuickTestTool");
        var t = s.prototype;
        t.render = function(t, e, i) {
            s._addType(this._renderType), s.showRenderTypeInfo(this._renderType), O.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0
        }, t._stageRender = function(t, e, i) {
            s._countStart(), s._PreStageRender.call(y.stage, t, e, i), s._countEnd()
        }, s.getMCDName = function(t) {
            return s._typeToNameDic[t]
        }, s.showRenderTypeInfo = function(t, e) {
            if (void 0 === e && (e = !1), e || !s.showedDic[t]) {
                if (s.showedDic[t] = !0, !s._rendertypeToStrDic[t]) {
                    var i = [],
                        n = 0;
                    for (n = 1; n <= t;)
                        n & t && i.push(s.getMCDName(n & t)), n <<= 1;
                    s._rendertypeToStrDic[t] = i.join(",")
                }
                console.log("cmd:", s._rendertypeToStrDic[t])
            }
        }, s.__init__ = function() {
            s._typeToNameDic[1] = "ALPHA", s._typeToNameDic[2] = "TRANSFORM", s._typeToNameDic[256] = "TEXTURE", s._typeToNameDic[512] = "GRAPHICS", s._typeToNameDic[4096] = "ONECHILD", s._typeToNameDic[8192] = "CHILDS", s._typeToNameDic[3] = "TRANSFORM|ALPHA", s._typeToNameDic[8] = "CANVAS", s._typeToNameDic[4] = "BLEND", s._typeToNameDic[16] = "FILTERS", s._typeToNameDic[32] = "MASK", s._typeToNameDic[64] = "CLIP", s._typeToNameDic[1024] = "LAYAGL3D"
        }, s._countStart = function() {
            var t;
            for (t in s._countDic)
                s._countDic[t] = 0
        }, s._countEnd = function() {
            60 < ++s._i && (s.showCountInfo(), s._i = 0)
        }, s._addType = function(t) {
            s._countDic[t] ? s._countDic[t] += 1 : s._countDic[t] = 1
        }, s.showCountInfo = function() {
            var t;
            for (t in console.log("==================="), s._countDic)
                console.log("count:" + s._countDic[t]), s.showRenderTypeInfo(t, !0)
        }, s.enableQuickTest = function() {
            s.__init__(), Yi.prototype.render = s.prototype.render, s._PreStageRender = an.prototype.render, an.prototype.render = s.prototype._stageRender
        }, s.showedDic = {}, s._rendertypeToStrDic = {}, s._typeToNameDic = {}, s._PreStageRender = null, s._countDic = {}, s._i = 0
    }();
    var It = (m(Pt, "laya.webgl.utils.RenderState2D"), Pt.mat2MatArray = function(t, e) {
        var i = t,
            n = e;
        return n[0] = i.a, n[1] = i.b, n[2] = Pt.EMPTYMAT4_ARRAY[2], n[3] = Pt.EMPTYMAT4_ARRAY[3], n[4] = i.c, n[5] = i.d, n[6] = Pt.EMPTYMAT4_ARRAY[6], n[7] = Pt.EMPTYMAT4_ARRAY[7], n[8] = Pt.EMPTYMAT4_ARRAY[8], n[9] = Pt.EMPTYMAT4_ARRAY[9], n[10] = Pt.EMPTYMAT4_ARRAY[10], n[11] = Pt.EMPTYMAT4_ARRAY[11], n[12] = i.tx, n[13] = i.ty, n[14] = Pt.EMPTYMAT4_ARRAY[14], n[15] = Pt.EMPTYMAT4_ARRAY[15], e
    }, Pt.restoreTempArray = function() {
        Pt.TEMPMAT4_ARRAY[0] = 1, Pt.TEMPMAT4_ARRAY[1] = 0, Pt.TEMPMAT4_ARRAY[4] = 0, Pt.TEMPMAT4_ARRAY[5] = 1, Pt.TEMPMAT4_ARRAY[12] = 0, Pt.TEMPMAT4_ARRAY[13] = 0
    }, Pt.clear = function() {
        Pt.worldScissorTest = !1, Pt.worldAlpha = 1
    }, Pt._MAXSIZE = 99999999, Pt.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Pt.worldMatrix4 = Pt.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Pt.matWVP = null, Pt.worldAlpha = 1, Pt.worldScissorTest = !1, Pt.worldShaderDefines = null, Pt.worldFilters = null, Pt.width = 0, Pt.height = 0, a(Pt, ["worldMatrix", function() {
        return this.worldMatrix = new vt
    }]), Pt);

    function Pt() {}
    var Dt, Lt, Bt = (m(Ft, "laya.utils.SceneUtils"), Ft.getBindFun = function(t) {
        var e = Ft._funMap.get(t);
        if (null == e) {
            var i = '"' + t + '"',
                n = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
            e = y._runScript(n), Ft._funMap.set(t, e)
        }
        return e
    }, Ft.createByData = function(t, e) {
        var i = Lt.create();
        if ((t = Ft.createComp(e, t, t, null, i))._setBit(8, !0), t.hasOwnProperty("_idMap") && (t._idMap = i._idMap), e.animations) {
            var n, s, r = [],
                a = e.animations,
                o = 0,
                h = a.length;
            for (o = 0; o < h; o++) {
                switch (n = new cn, s = a[o], n._setUp(i._idMap, s), (t[s.name] = n)._setControlNode(t), s.action) {
                    case 1:
                        n.play(0, !1);
                        break;
                    case 2:
                        n.play(0, !0)
                }
                r.push(n)
            }
            t._aniList = r
        }
        return "Scene" === t._$componentType && 0 < t._width && null == e.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0), i.beginLoad(t), t
    }, Ft.createInitTool = function() {
        return Lt.create()
    }, Ft.createComp = function(t, e, i, n, s) {
        if ("Scene3D" == t.type || "Sprite3D" == t.type) {
            var r = [],
                a = y.Utils3D._createSceneByJsonForMaker(t, r, s);
            return "Sprite3D" == t.type ? y.StaticBatchManager.combine(a, r) : y.StaticBatchManager.combine(null, r), a
        }
        if (!(e = e || Ft.getCompInstance(t)))
            return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type), null;
        var o = t.child;
        if (o)
            for (var h = "List" == e._$componentType, l = 0, u = o.length; l < u; l++) {
                var c = o[l];
                if (!e.hasOwnProperty("itemRender") || "render" != c.props.name && "render" !== c.props.renderType)
                    if ("Graphic" == c.type)
                        ee._addGraphicsToSprite(c, e);
                    else if (ee._isDrawType(c.type))
                    ee._addGraphicToSprite(c, e, !0);
                else {
                    if (h) {
                        var _ = [],
                            d = Ft.createComp(c, null, i, _, s);
                        _.length && (d._$bindData = _)
                    } else
                        d = Ft.createComp(c, null, i, n, s);
                    "Script" == c.type ? d instanceof laya.components.Component ? e._addComponentInstance(d) : "owner" in d ? d.owner = e : "target" in d && (d.target = e) : "mask" == c.props.renderType || "mask" == c.props.name ? e.mask = d : d instanceof laya.display.Node && e.addChild(d)
                } else
                    e.itemRender = c
            }
        var f = t.props;
        for (var p in f) {
            var m = f[p];
            "string" == typeof m && (0 <= m.indexOf("@node:") || 0 <= m.indexOf("@Prefab:")) ? s && s.addNodeRef(e, p, m) : Ft.setCompValue(e, p, m, i, n)
        }
        return e._afterInited && e._afterInited(), t.compId && s && s._idMap && (s._idMap[t.compId] = e), e
    }, Ft.setCompValue = function(t, e, i, n, s) {
        if ("string" == typeof i && -1 < i.indexOf("${")) {
            if (Ft._sheet || (Ft._sheet = ee.getClass("laya.data.Table")), !Ft._sheet)
                return void console.warn("Can not find class Sheet");
            if (s)
                s.push(t, e, i);
            else if (n) {
                -1 == i.indexOf("].") && (i = i.replace(".", "[0]."));
                var r, a, o = new Dt(t, e, i);
                o.exe(n);
                for (var h = i.replace(/\[.*?\]\./g, "."); null != (r = Ft._parseWatchData.exec(h));) {
                    for (var l = r[1]; null != (a = Ft._parseKeyWord.exec(l));) {
                        var u = a[0],
                            c = n._watchMap[u] || (n._watchMap[u] = []);
                        c.push(o), Ft._sheet.I.notifer.on(u, n, n.changeData, [u])
                    }
                    (c = n._watchMap[l] || (n._watchMap[l] = [])).push(o), Ft._sheet.I.notifer.on(l, n, n.changeData, [l])
                }
            }
        } else
            "var" === e && n ? n[i] = t : t[e] = "true" === i || "false" !== i && i
    }, Ft.getCompInstance = function(t) {
        if ("UIView" == t.type && t.props && t.props.pageData)
            return Ft.createByData(null, t.props.pageData);
        var e = t.props && t.props.runtime || t.type,
            i = ee.getClass(e);
        if (!i)
            throw "Can not find class " + e;
        if ("Script" === t.type && i.prototype._doAwake) {
            var n = z.createByClass(i);
            return n._destroyed = !1, n
        }
        return t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? (i.instance || (i.instance = new i), i.instance) : new i
    }, Ft._sheet = null, a(Ft, ["_funMap", function() {
        return this._funMap = new $t
    }, "_parseWatchData", function() {
        return this._parseWatchData = /\${(.*?)}/g
    }, "_parseKeyWord", function() {
        return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g
    }]), Ft.__init$ = function() {
        function t(t, e, i) {
            this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, this.value = i
        }
        m(t, ""), t.prototype.exe = function(t) {
            var e = Ft.getBindFun(this.value);
            this.comp[this.prop] = e.call(this, t)
        }, Dt = t, Lt = function() {
            function e() {
                this._nodeRefList = null, this._initList = null, this._loadList = null, this._idMap = null, this._scene = null
            }
            m(e, "");
            var t = e.prototype;
            return t.reset = function() {
                this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, this._scene = null
            }, t.recover = function() {
                this.reset(), z.recover("InitTool", this)
            }, t.addLoadRes = function(t, e) {
                this._loadList || (this._loadList = []), e ? this._loadList.push({
                    url: t,
                    type: e
                }) : this._loadList.push(t)
            }, t.addNodeRef = function(t, e, i) {
                this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([t, e, i]), 0 <= i.indexOf("@Prefab:") && this.addLoadRes(i.replace("@Prefab:", ""), "prefab")
            }, t.setNodeRef = function() {
                if (this._nodeRefList)
                    if (this._idMap) {
                        var t, e, i = 0;
                        for (t = this._nodeRefList.length, i = 0; i < t; i++)
                            (e = this._nodeRefList[i])[0][e[1]] = this.getReferData(e[2]);
                        this._nodeRefList = null
                    } else
                        this._nodeRefList = null
            }, t.getReferData = function(t) {
                if (0 <= t.indexOf("@Prefab:"))
                    return Ai.getRes(t.replace("@Prefab:", ""));
                if (0 <= t.indexOf("@arr:")) {
                    var e, i, n, s = 0;
                    for (i = (e = (t = t.replace("@arr:", "")).split(",")).length, s = 0; s < i; s++)
                        n = e[s], e[s] = n ? this._idMap[n.replace("@node:", "")] : null;
                    return e
                }
                return this._idMap[t.replace("@node:", "")]
            }, t.addInitItem = function(t) {
                this._initList || (this._initList = []), this._initList.push(t)
            }, t.doInits = function() {
                this._initList && (this._initList = null)
            }, t.finish = function() {
                this.setNodeRef(), this.doInits(), this._scene._setBit(8, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), this._scene.event("onViewCreated"), this.recover()
            }, t.beginLoad = function(t) {
                this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : y.loader.load(this._loadList, b.create(this, this.finish))
            }, e.create = function() {
                var t = z.getItemByClass("InitTool", e);
                return t._idMap = [], t
            }, e
        }()
    }, Ft);

    function Ft() {}
    var Ot = function() {
            function l(t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.x = t, this.y = e, this.width = i, this.height = n
            }
            m(l, "laya.maths.Rectangle");
            var t = l.prototype;
            return t.setTo = function(t, e, i, n) {
                return this.x = t, this.y = e, this.width = i, this.height = n, this
            }, t.reset = function() {
                return this.x = this.y = this.width = this.height = 0, this
            }, t.recover = function() {
                this != l.TEMP && this != l.EMPTY ? z.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this)
            }, t.copyFrom = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, t.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom)
            }, t.intersects = function(t) {
                return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y)
            }, t.intersection = function(t, e) {
                return this.intersects(t) ? (e || (e = new l), e.x = Math.max(this.x, t.x), e.y = Math.max(this.y, t.y), e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y, e) : null
            }, t.union = function(t, e) {
                return e || (e = new l), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y), e.addPoint(t.right, t.bottom), this)
            }, t.clone = function(t) {
                return t || (t = new l), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
            }, t.toString = function() {
                return this.x + "," + this.y + "," + this.width + "," + this.height
            }, t.equals = function(t) {
                return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height)
            }, t.addPoint = function(t, e) {
                return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), this
            }, t._getBoundPoints = function() {
                var t = l._temB;
                return (t.length = 0) == this.width || 0 == this.height || t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), t
            }, t.isEmpty = function() {
                return this.width <= 0 || this.height <= 0
            }, f(0, t, "right", function() {
                return this.x + this.width
            }), f(0, t, "bottom", function() {
                return this.y + this.height
            }), l.create = function() {
                return z.getItemByClass("Rectangle", l)
            }, l._getBoundPointS = function(t, e, i, n) {
                var s = l._temA;
                return (s.length = 0) == i || 0 == n || s.push(t, e, t + i, e, t, e + n, t + i, e + n), s
            }, l._getWrapRec = function(t, e) {
                if (!t || t.length < 1)
                    return e ? e.setTo(0, 0, 0, 0) : l.TEMP.setTo(0, 0, 0, 0);
                e = e || laya.maths.Rectangle.create();
                var i, n, s, r, a, o = t.length,
                    h = ye.TEMP;
                for (s = a = -(n = r = 99999), i = 0; i < o; i += 2)
                    h.x = t[i], h.y = t[i + 1], n = n < h.x ? n : h.x, r = r < h.y ? r : h.y, s = s > h.x ? s : h.x, a = a > h.y ? a : h.y;
                return e.setTo(n, r, s - n, a - r)
            }, l.EMPTY = new l, l.TEMP = new l, l._temB = [], l._temA = [], l
        }(),
        Nt = (m(kt, "laya.events.KeyBoardManager"), kt.__init__ = function() {
            kt._addEvent("keydown"), kt._addEvent("keypress"), kt._addEvent("keyup")
        }, kt._addEvent = function(e) {
            re.document.addEventListener(e, function(t) {
                laya.events.KeyBoardManager._dispatch(t, e)
            }, !0)
        }, kt._dispatch = function(t, e) {
            if (kt.enabled) {
                kt._event._stoped = !1, kt._event.nativeEvent = t, kt._event.keyCode = t.keyCode || t.which || t.charCode, "keydown" === e ? kt._pressKeys[kt._event.keyCode] = !0 : "keyup" === e && (kt._pressKeys[kt._event.keyCode] = null);
                for (var i = y.stage.focus && null != y.stage.focus.event && y.stage.focus.displayedInStage ? y.stage.focus : y.stage, n = i; n;)
                    n.event(e, kt._event.setTo(e, n, i)), n = n.parent
            }
        }, kt.hasKeyDown = function(t) {
            return kt._pressKeys[t]
        }, kt._pressKeys = {}, kt.enabled = !0, a(kt, ["_event", function() {
            return this._event = new E
        }]), kt);

    function kt() {}
    var Ut = (m(Wt, "laya.layagl.LayaGLRunner"), Wt.uploadShaderUniforms = function(t, e, i, n) {
        for (var s = i._data, r = e.getArrayData(), a = 0, o = 0, h = r.length; o < h; o++) {
            var l = r[o];
            if (n || -1 !== l.textureID) {
                var u = s[l.dataOffset];
                null != u && (a += l.fun.call(l.caller, l, u))
            }
        }
        return a
    }, Wt.uploadCustomUniform = function(t, e, i, n) {
        var s = 0,
            r = e[i];
        return r && null != n && (s += r.fun.call(r.caller, r, n)), s
    }, Wt.uploadShaderUniformsForNative = function(t, e, i) {
        var n = 0;
        0 < i._runtimeCopyValues.length && (n = 1);
        var s = i._data;
        return t.uploadShaderUniforms(e, s, n)
    }, Wt);

    function Wt() {}
    var Vt, Gt = function() {
            function a() {}
            m(a, "laya.display.cmd.DrawPathCmd");
            var t = a.prototype;
            return t.recover = function() {
                this.paths = null, this.brush = null, this.pen = null, z.recover("DrawPathCmd", this)
            }, t.run = function(t, e, i) {
                t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen)
            }, f(0, t, "cmdID", function() {
                return "DrawPath"
            }), a.create = function(t, e, i, n, s) {
                var r = z.getItemByClass("DrawPathCmd", a);
                return r.x = t, r.y = e, r.paths = i, r.brush = n, r.pen = s, r
            }, a.ID = "DrawPath", a
        }(),
        Xt = function() {
            function t() {
                this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = se.instance.createVertexArray()
            }
            m(t, "laya.webgl.BufferStateBase");
            var e = t.prototype;
            return e.bind = function() {
                t._curBindedBufferState !== this && (se.instance.bindVertexArray(this._nativeVertexArrayObject), t._curBindedBufferState = this)
            }, e.unBind = function() {
                if (t._curBindedBufferState !== this)
                    throw "BufferState: must call bind() function first.";
                se.instance.bindVertexArray(null), t._curBindedBufferState = null
            }, e.bindForNative = function() {
                se.instance.bindVertexArray(this._nativeVertexArrayObject), t._curBindedBufferState = this
            }, e.unBindForNative = function() {
                se.instance.bindVertexArray(null), t._curBindedBufferState = null
            }, e.destroy = function() {
                se.instance.deleteVertexArray(this._nativeVertexArrayObject)
            }, t._curBindedBufferState = null, t
        }(),
        Yt = function() {
            function t() {}
            m(t, "laya.display.cmd.SaveCmd");
            var e = t.prototype;
            return e.recover = function() {
                z.recover("SaveCmd", this)
            }, e.run = function(t, e, i) {
                t.save()
            }, f(0, e, "cmdID", function() {
                return "Save"
            }), t.create = function() {
                return z.getItemByClass("SaveCmd", t)
            }, t.ID = "Save", t
        }(),
        Ht = (m(zt, "laya.net.LocalStorage"), zt.__init__ = function() {
            return zt._baseClass || (zt._baseClass = Vt).init(), zt.items = zt._baseClass.items, zt.support = zt._baseClass.support
        }, zt.setItem = function(t, e) {
            zt._baseClass.setItem(t, e)
        }, zt.getItem = function(t) {
            return zt._baseClass.getItem(t)
        }, zt.setJSON = function(t, e) {
            zt._baseClass.setJSON(t, e)
        }, zt.getJSON = function(t) {
            return zt._baseClass.getJSON(t)
        }, zt.removeItem = function(t) {
            zt._baseClass.removeItem(t)
        }, zt.clear = function() {
            zt._baseClass.clear()
        }, zt._baseClass = null, zt.items = null, zt.support = !1, zt.__init$ = function() {
            function i() {}
            m(i, ""), i.init = function() {
                try {
                    i.support = !0, i.items = p.localStorage, i.setItem("laya", "1"), i.removeItem("laya")
                } catch (t) {
                    i.support = !1
                }
                i.support || console.log("LocalStorage is not supprot or browser is private mode.")
            }, i.setItem = function(t, e) {
                try {
                    i.support && i.items.setItem(t, e)
                } catch (t) {
                    console.warn("set localStorage failed", t)
                }
            }, i.getItem = function(t) {
                return i.support ? i.items.getItem(t) : null
            }, i.setJSON = function(t, e) {
                try {
                    i.support && i.items.setItem(t, JSON.stringify(e))
                } catch (t) {
                    console.warn("set localStorage failed", t)
                }
            }, i.getJSON = function(t) {
                return JSON.parse(i.support ? i.items.getItem(t) : null)
            }, i.removeItem = function(t) {
                i.support && i.items.removeItem(t)
            }, i.clear = function() {
                i.support && i.items.clear()
            }, i.items = null, i.support = !1, Vt = i
        }, zt);

    function zt() {}
    var jt = (m(Kt, "laya.webgl.WebGL"), Kt._uint8ArraySlice = function() {
        for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++)
            e[i] = this[i];
        return e
    }, Kt._float32ArraySlice = function() {
        for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++)
            e[i] = this[i];
        return e
    }, Kt._uint16ArraySlice = function(t) {
        var e, i = arguments,
            n = 0,
            s = 0;
        if (0 === i.length)
            for (n = this.length, e = new Uint16Array(n), s = 0; s < n; s++)
                e[s] = this[s];
        else if (2 === i.length) {
            var r = i[0],
                a = i[1];
            if (r < a)
                for (n = a - r, e = new Uint16Array(n), s = r; s < a; s++)
                    e[s - r] = this[s];
            else
                e = new Uint16Array(0)
        }
        return e
    }, Kt._nativeRender_enable = function() {
        Kt.isNativeRender_enable || (Kt.isNativeRender_enable = !0, pt.__init_native(), en.prototype.uploadTexture2D = function(t) {
            var e = pt;
            e.bindTexture(laya.webgl.WebGL.mainContext, e.TEXTURE_2D, t)
        }, It.width = re.window.innerWidth, It.height = re.window.innerHeight, qe.measureText = function(t, e) {
            return p.conchTextCanvas.font = e, p.conchTextCanvas.measureText(t)
        }, qe.enableNative = function() {
            te.supportWebGLPlusRendering && (Ut.uploadShaderUniforms = Ut.uploadShaderUniformsForNative, he = p.GLCommandEncoder, se = p.LayaGLContext);
            var t = an;
            t.prototype.render = t.prototype.renderToNative
        }, qe.clear = function(t) {
            Ct.set2DRenderConfig();
            var e = v.create(t).arrColor,
                i = se.instance;
            e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(17664), It.clear()
        }, qe.drawToCanvas = qe.drawToTexture = function(t, e, i, n, s, r) {
            s -= t.x, r -= t.y, s |= 0, r |= 0, i |= 0, n |= 0;
            var a = new sn(!1),
                o = a.getContext("2d");
            return a.size(i, n), o.asBitmap = !0, o._targets.start(), O.renders[e]._fun(t, o, s, r), o.flush(), o._targets.end(), o._targets.restore(), a
        }, dn.prototype._uv = dn.flipyuv, Object.defineProperty(dn.prototype, "uv", {
            get: function() {
                return this._uv
            },
            set: function(t) {
                this._uv = t
            }
        }), sn.prototype.getTexture = function() {
            return this._texture || (this._texture = this.context._targets, this._texture.uv = dn.flipyuv, this._texture.bitmap = this._texture), this._texture
        })
    }, Kt.enable = function() {
        return !0
    }, Kt.inner_enable = function() {
        return Float32Array.prototype.slice || (Float32Array.prototype.slice = Kt._float32ArraySlice), Uint16Array.prototype.slice || (Uint16Array.prototype.slice = Kt._uint16ArraySlice), Uint8Array.prototype.slice || (Uint8Array.prototype.slice = Kt._uint8ArraySlice), te.isConchApp && Kt._nativeRender_enable(), !0
    }, Kt.onStageResize = function(t, e) {
        null != Kt.mainContext && (Kt.mainContext.viewport(0, 0, t, e), It.width = t, It.height = e)
    }, Kt.mainContext = null, Kt.shaderHighPrecision = !1, Kt._isWebGL2 = !1, Kt.isNativeRender_enable = !1, Kt);

    function Kt() {}
    var $t = function() {
            function n() {
                this._obj = null, this._obj = n.supportWeakMap ? new re.window.WeakMap : {}, n.supportWeakMap || n._maps.push(this)
            }
            m(n, "laya.utils.WeakObject");
            var t = n.prototype;
            return t.set = function(t, e) {
                if (null != t)
                    if (n.supportWeakMap) {
                        var i = t;
                        "string" != typeof t && "number" != typeof t || (i = n._keys[t]) || (i = n._keys[t] = {
                            k: t
                        }), this._obj.set(i, e)
                    } else
                        "string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = ke.getGID()), this._obj[t.$_GID] = e)
            }, t.get = function(t) {
                if (null == t)
                    return null;
                if (n.supportWeakMap) {
                    var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                    return e ? this._obj.get(e) : null
                }
                return "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID]
            }, t.del = function(t) {
                if (null != t)
                    if (n.supportWeakMap) {
                        var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                        if (!e)
                            return;
                        this._obj.delete(e)
                    } else
                        "string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID]
            }, t.has = function(t) {
                if (null == t)
                    return !1;
                if (n.supportWeakMap) {
                    var e = "string" == typeof t || "number" == typeof t ? n._keys[t] : t;
                    return this._obj.has(e)
                }
                return "string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID]
            }, n.__init__ = function() {
                (n.supportWeakMap = null != re.window.WeakMap) || y.systemTimer.loop(n.delInterval, null, n.clearCache)
            }, n.clearCache = function() {
                for (var t = 0, e = n._maps.length; t < e; t++) {
                    n._maps[t]._obj = {}
                }
            }, n.supportWeakMap = !1, n.delInterval = 6e5, n._keys = {}, n._maps = [], a(n, ["I", function() {
                return this.I = new n
            }]), n
        }(),
        qt = function() {
            function t() {}
            m(t, "laya.display.css.BoundsStyle");
            var e = t.prototype;
            return e.reset = function() {
                return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), this.bounds = null, this.userBounds = null, this.temBM = null, this
            }, e.recover = function() {
                z.recover("BoundsStyle", this.reset())
            }, t.create = function() {
                return z.getItemByClass("BoundsStyle", t)
            }, t
        }(),
        Qt = function() {
            function i(t) {
                this._color = null, this.setValue(t)
            }
            m(i, "laya.webgl.canvas.DrawStyle");
            var t = i.prototype;
            return t.setValue = function(t) {
                this._color = t ? t instanceof laya.utils.ColorUtils ? t : v.create(t) : v.create("#000000")
            }, t.reset = function() {
                this._color = v.create("#000000")
            }, t.toInt = function() {
                return this._color.numColor
            }, t.equal = function(t) {
                return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.ColorUtils && this._color.numColor === t.numColor
            }, t.toColorStr = function() {
                return this._color.strColor
            }, i.create = function(t) {
                if (t) {
                    var e = t instanceof laya.utils.ColorUtils ? t : v.create(t);
                    return e._drawStyle || (e._drawStyle = new i(t))
                }
                return i.DEFAULT
            }, a(i, ["DEFAULT", function() {
                return this.DEFAULT = new i("#000000")
            }]), i
        }(),
        Zt = (m(Jt, "laya.system.System"), Jt.changeDefinition = function(t, e) {
            y[t] = e;
            var i = t + "=classObj";
            y._runScript(i)
        }, Jt.__init__ = function() {}, Jt);

    function Jt() {}! function() {
        function i() {}
        m(i, "laya.display.cmd.DrawParticleCmd");
        var t = i.prototype;
        t.recover = function() {
            this._templ = null, z.recover("DrawParticleCmd", this)
        }, t.run = function(t, e, i) {
            t.drawParticle(e, i, this._templ)
        }, f(0, t, "cmdID", function() {
            return "DrawParticleCmd"
        }), i.create = function(t) {
            var e = z.getItemByClass("DrawParticleCmd", i);
            return e._templ = t, e
        }, i.ID = "DrawParticleCmd"
    }();
    var te = function() {
            function i(t, e) {
                this._timeId = 0, i._mainCanvas.source.id = "layaCanvas", i._mainCanvas.source.width = t, i._mainCanvas.source.height = e, laya.renders.Render.isConchApp ? re.document.body.appendChild(i._mainCanvas.source) : re.onKGMiniGame || re.container.appendChild(i._mainCanvas.source), this.initRender(i._mainCanvas, t, e), re.window.requestAnimationFrame(function t(e) {
                    y.stage._loop();
                    re.window.requestAnimationFrame(t)
                }), y.stage.on("visibilitychange", this, this._onVisibilitychange)
            }
            m(i, "laya.renders.Render");
            var t = i.prototype;
            return t._onVisibilitychange = function() {
                y.stage.isVisibility ? 0 != this._timeId && re.window.clearInterval(this._timeId) : this._timeId = re.window.setInterval(this._enterFrame, 1e3)
            }, t.initRender = function(t, e, i) {
                var n = se.instance = jt.mainContext = function(t) {
                    var e, i = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                    Ge.useWebGL2 || i.shift();
                    for (var n = 0; n < i.length; n++) {
                        try {
                            e = t.getContext(i[n], {
                                stencil: Ge.isStencil,
                                alpha: Ge.isAlpha,
                                antialias: Ge.isAntialias,
                                premultipliedAlpha: Ge.premultipliedAlpha,
                                preserveDrawingBuffer: Ge.preserveDrawingBuffer
                            })
                        } catch (t) {}
                        if (e)
                            return "webgl2" === i[n] && (jt._isWebGL2 = !0), new se, e
                    }
                    return null
                }(laya.renders.Render._mainCanvas.source);
                if (!n)
                    return !1;
                t.size(e, i), pt.__init__(n), Ct.__init__(), x.__init__();
                var s = new Ct;
                s.isMain = !0, laya.renders.Render._context = s, t._setContext(s), jt.shaderHighPrecision = !1;
                try {
                    n.getShaderPrecisionFormat(35632, 36338).precision ? jt.shaderHighPrecision = !0 : jt.shaderHighPrecision = !1
                } catch (t) {}
                return se.instance = n, Zt.__init__(), Ti.__init__(), Z.__init__(), V.__init__(), Ei.__int__(n), ti._init_(n), !0
            }, t._enterFrame = function(t) {
                y.stage._loop()
            }, f(1, i, "context", function() {
                return i._context
            }), f(1, i, "canvas", function() {
                return i._mainCanvas.source
            }), i._context = null, i._mainCanvas = null, i.supportWebGLPlusCulling = !1, i.supportWebGLPlusAnimation = !1, i.supportWebGLPlusRendering = !1, i.isConchApp = !1, i.is3DMode = !1, i.__init$ = function() {
                (i.isConchApp = null != p.conch) && (i.supportWebGLPlusCulling = !0, i.supportWebGLPlusAnimation = !0, i.supportWebGLPlusRendering = !0)
            }, i
        }(),
        ee = (m(ie, "laya.utils.ClassUtils"), ie.regClass = function(t, e) {
            ie._classMap[t] = e
        }, ie.regShortClassName = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e],
                    n = i.name;
                ie._classMap[n] = i
            }
        }, ie.getRegClass = function(t) {
            return ie._classMap[t]
        }, ie.getClass = function(t) {
            var e = ie._classMap[t] || t;
            return "string" == typeof e ? y.__classmap[e] || y[t] : e
        }, ie.getInstance = function(t) {
            var e = ie.getClass(t);
            return e ? new e : (console.warn("[error] Undefined class:", t), null)
        }, ie.createByJson = function(t, e, i, n, s) {
            "string" == typeof t && (t = JSON.parse(t));
            var r = t.props;
            if (!e && !(e = s ? s.runWith(t) : ie.getInstance(r.runtime || t.type)))
                return null;
            var a = t.child;
            if (a)
                for (var o = 0, h = a.length; o < h; o++) {
                    var l = a[o];
                    if ("render" !== l.props.name && "render" !== l.props.renderType || !e._$set_itemRender)
                        if ("Graphic" == l.type)
                            ie._addGraphicsToSprite(l, e);
                        else if (ie._isDrawType(l.type))
                        ie._addGraphicToSprite(l, e, !0);
                    else {
                        var u = ie.createByJson(l, null, i, n, s);
                        "Script" === l.type ? u.hasOwnProperty("owner") ? u.owner = e : u.hasOwnProperty("target") && (u.target = e) : "mask" == l.props.renderType ? e.mask = u : e.addChild(u)
                    } else
                        e.itemRender = l
                }
            if (r)
                for (var c in r) {
                    var _ = r[c];
                    "var" === c && i ? i[_] = e : _ instanceof Array && "function" == typeof e[c] ? e[c].apply(e, _) : e[c] = _
                }
            return n && t.customProps && n.runWith([e, t]), e.created && e.created(), e
        }, ie._addGraphicsToSprite = function(t, e) {
            var i = t.child;
            if (i && !(i.length < 1)) {
                var n = ie._getGraphicsFromSprite(t, e),
                    s = 0,
                    r = 0;
                t.props && (s = ie._getObjVar(t.props, "x", 0), r = ie._getObjVar(t.props, "y", 0)), 0 != s && 0 != r && n.translate(s, r);
                var a, o = 0;
                for (a = i.length, o = 0; o < a; o++)
                    ie._addGraphicToGraphics(i[o], n);
                0 != s && 0 != r && n.translate(-s, -r)
            }
        }, ie._addGraphicToSprite = function(t, e, i) {
            void 0 === i && (i = !1);
            var n = i ? ie._getGraphicsFromSprite(t, e) : e.graphics;
            ie._addGraphicToGraphics(t, n)
        }, ie._getGraphicsFromSprite = function(t, e) {
            if (!t || !t.props)
                return e.graphics;
            var i = t.props.renderType;
            if ("hit" === i || "unHit" === i) {
                var n = e._style.hitArea || (e.hitArea = new li);
                n[i] || (n[i] = new Se);
                var s = n[i]
            }
            return s || (s = e.graphics), s
        }, ie._getTransformData = function(t) {
            var e;
            (t.hasOwnProperty("pivotX") || t.hasOwnProperty("pivotY")) && (e = e || new vt).translate(-ie._getObjVar(t, "pivotX", 0), -ie._getObjVar(t, "pivotY", 0));
            var i = ie._getObjVar(t, "scaleX", 1),
                n = ie._getObjVar(t, "scaleY", 1),
                s = ie._getObjVar(t, "rotation", 0);
            return ie._getObjVar(t, "skewX", 0), ie._getObjVar(t, "skewY", 0), 1 == i && 1 == n && 0 == s || ((e = e || new vt).scale(i, n), e.rotate(.0174532922222222 * s)), e
        }, ie._addGraphicToGraphics = function(t, e) {
            var i, n;
            if ((i = t.props) && (n = ie.DrawTypeDic[t.type])) {
                var s = e,
                    r = ie._getParams(i, n[1], n[2], n[3]),
                    a = ie._tM;
                !a && 1 == ie._alpha || (s.save(), a && s.transform(a), 1 != ie._alpha && s.alpha(ie._alpha)), s[n[0]].apply(s, r), !a && 1 == ie._alpha || s.restore()
            }
        }, ie._adptLineData = function(t) {
            return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), t
        }, ie._adptTextureData = function(t) {
            return t[0] = Ai.getRes(t[0]), t
        }, ie._adptLinesData = function(t) {
            return t[2] = ie._getPointListByStr(t[2]), t
        }, ie._isDrawType = function(t) {
            return "Image" !== t && ie.DrawTypeDic.hasOwnProperty(t)
        }, ie._getParams = function(t, e, i, n) {
            void 0 === i && (i = 0);
            var s = ie._temParam;
            s.length = e.length;
            var r, a, o = 0;
            for (r = e.length, o = 0; o < r; o++)
                s[o] = ie._getObjVar(t, e[o][0], e[o][1]);
            return ie._alpha = ie._getObjVar(t, "alpha", 1), a = ie._getTransformData(t), ie._tM = a ? (i || (i = 0), a.translate(s[i], s[i + 1]), s[i] = s[i + 1] = 0, a) : null, n && ie[n] && (s = ie[n](s)), s
        }, ie._getPointListByStr = function(t) {
            var e, i = t.split(","),
                n = 0;
            for (e = i.length, n = 0; n < e; n++)
                i[n] = parseFloat(i[n]);
            return i
        }, ie._getObjVar = function(t, e, i) {
            return t.hasOwnProperty(e) ? t[e] : i
        }, ie._temParam = [], ie._classMap = {
            Sprite: Yi,
            Scene: hn,
            Text: Ji,
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
        }, ie._tM = null, ie._alpha = NaN, a(ie, ["DrawTypeDic", function() {
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
            }
        }]), ie);

    function ie() {}
    var ne = function() {
            function v() {
                this._cacheBoundsType = !1
            }
            m(v, "laya.display.GraphicsBounds");
            var t = v.prototype;
            return t.destroy = function() {
                this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), this._bounds = null, z.recover("GraphicsBounds", this)
            }, t.reset = function() {
                this._temp && (this._temp.length = 0)
            }, t.getBounds = function(t) {
                return void 0 === t && (t = !1), this._bounds && this._temp && !(this._temp.length < 1) && t == this._cacheBoundsType || (this._bounds = Ot._getWrapRec(this.getBoundPoints(t), this._bounds)), this._cacheBoundsType = t, this._bounds
            }, t.getBoundPoints = function(t) {
                return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), this._cacheBoundsType = t, this._rstBoundPoints = ke.copyArray(this._rstBoundPoints, this._temp)
            }, t._getCmdPoints = function(t) {
                void 0 === t && (t = !1);
                te._context;
                var e, i = this._graphics.cmds;
                if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (v._tempCmds.length = 0, v._tempCmds.push(this._graphics._one), i = v._tempCmds), !i)
                    return e;
                var n = v._tempMatrixArrays;
                n.length = 0;
                var s = v._initMatrix;
                s.identity();
                for (var r, a, o = v._tempMatrix, h = 0, l = i.length; h < l; h++)
                    switch ((r = i[h]).cmdID) {
                        case "Alpha":
                            n.push(s), s = s.clone();
                            break;
                        case "Restore":
                            s = n.pop();
                            break;
                        case "Scale":
                            o.identity(), o.translate(-r.pivotX, -r.pivotY), o.scale(r.scaleX, r.scaleY), o.translate(r.pivotX, r.pivotY), this._switchMatrix(s, o);
                            break;
                        case "Rotate":
                            o.identity(), o.translate(-r.pivotX, -r.pivotY), o.rotate(r.angle), o.translate(r.pivotX, r.pivotY), this._switchMatrix(s, o);
                            break;
                        case "Translate":
                            o.identity(), o.translate(r.tx, r.ty), this._switchMatrix(s, o);
                            break;
                        case "Transform":
                            o.identity(), o.translate(-r.pivotX, -r.pivotY), o.concat(r.matrix), o.translate(r.pivotX, r.pivotY), this._switchMatrix(s, o);
                            break;
                        case "DrawImage":
                        case "FillTexture":
                            v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), s);
                            break;
                        case "DrawTexture":
                            s.copyTo(o), r.matrix && o.concat(r.matrix), v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), o);
                            break;
                        case "DrawImage":
                            if (a = r.texture, t)
                                r.width && r.height ? v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), s) : v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, a.width, a.height), s);
                            else {
                                var u = (r.width || a.sourceWidth) / a.width,
                                    c = (r.height || a.sourceHeight) / a.height,
                                    _ = u * a.sourceWidth,
                                    d = c * a.sourceHeight,
                                    f = 0 < a.offsetX ? a.offsetX : 0,
                                    p = 0 < a.offsetY ? a.offsetY : 0;
                                f *= u, p *= c, v._addPointArrToRst(e, Ot._getBoundPointS(r.x - f, r.y - p, _, d), s)
                            }
                            break;
                        case "FillTexture":
                            r.width && r.height ? v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), s) : (a = r.texture, v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, a.width, a.height), s));
                            break;
                        case "DrawTexture":
                            var m;
                            m = r.matrix ? (s.copyTo(o), o.concat(r.matrix), o) : s, t ? r.width && r.height ? v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), m) : (a = r.texture, v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, a.width, a.height), m)) : (a = r.texture, u = (r.width || a.sourceWidth) / a.width, c = (r.height || a.sourceHeight) / a.height, _ = u * a.sourceWidth, d = c * a.sourceHeight, f = 0 < a.offsetX ? a.offsetX : 0, p = 0 < a.offsetY ? a.offsetY : 0, f *= u, p *= c, v._addPointArrToRst(e, Ot._getBoundPointS(r.x - f, r.y - p, _, d), m));
                            break;
                        case "DrawRect":
                            v._addPointArrToRst(e, Ot._getBoundPointS(r.x, r.y, r.width, r.height), s);
                            break;
                        case "DrawCircle":
                            v._addPointArrToRst(e, Ot._getBoundPointS(r.x - r.radius, r.y - r.radius, r.radius + r.radius, r.radius + r.radius), s);
                            break;
                        case "DrawLine":
                            v._tempPoints.length = 0;
                            var g;
                            g = .5 * r.lineWidth, r.fromX == r.toX ? v._tempPoints.push(r.fromX + g, r.fromY, r.toX + g, r.toY, r.fromX - g, r.fromY, r.toX - g, r.toY) : r.fromY == r.toY ? v._tempPoints.push(r.fromX, r.fromY + g, r.toX, r.toY + g, r.fromX, r.fromY - g, r.toX, r.toY - g) : v._tempPoints.push(r.fromX, r.fromY, r.toX, r.toY), v._addPointArrToRst(e, v._tempPoints, s);
                            break;
                        case "DrawCurves":
                            v._addPointArrToRst(e, ue.I.getBezierPoints(r.points), s, r.x, r.y);
                            break;
                        case "DrawLines":
                        case "DrawPoly":
                            v._addPointArrToRst(e, r.points, s, r.x, r.y);
                            break;
                        case "DrawPath":
                            v._addPointArrToRst(e, this._getPathPoints(r.paths), s, r.x, r.y);
                            break;
                        case "DrawPie":
                            v._addPointArrToRst(e, this._getPiePoints(r.x, r.y, r.radius, r.startAngle, r.endAngle), s)
                    }
                return 200 < e.length ? e = ke.copyArray(e, Ot._getWrapRec(e)._getBoundPoints()) : 8 < e.length && (e = J.scanPList(e)), e
            }, t._switchMatrix = function(t, e) {
                e.concat(t), e.copyTo(t)
            }, t._getPiePoints = function(t, e, i, n, s) {
                var r = v._tempPoints;
                v._tempPoints.length = 0;
                var a = Math.PI / 180,
                    o = s - n;
                if (360 <= o || o <= -360)
                    return r.push(t - i, e - i), r.push(t + i, e - i), r.push(t + i, e + i), r.push(t - i, e + i), r;
                r.push(t, e);
                var h = o % 360;
                h < 0 && (h += 360);
                var l = n + h,
                    u = n * a,
                    c = l * a;
                r.push(t + i * Math.cos(u), e + i * Math.sin(u)), r.push(t + i * Math.cos(c), e + i * Math.sin(c));
                for (var _ = 90 * Math.ceil(n / 90), d = 90 * Math.floor(l / 90), f = _; f <= d; f += 90) {
                    var p = f * a;
                    r.push(t + i * Math.cos(p), e + i * Math.sin(p))
                }
                return r
            }, t._getPathPoints = function(t) {
                var e, i, n = 0,
                    s = v._tempPoints;
                for (s.length = 0, e = t.length, n = 0; n < e; n++)
                    1 < (i = t[n]).length && (s.push(i[1], i[2]), 3 < i.length && s.push(i[3], i[4]));
                return s
            }, v.create = function() {
                return z.getItemByClass("GraphicsBounds", v)
            }, v._addPointArrToRst = function(t, e, i, n, s) {
                void 0 === n && (n = 0), void 0 === s && (s = 0);
                var r, a = 0;
                for (r = e.length, a = 0; a < r; a += 2)
                    v._addPointToRst(t, e[a] + n, e[a + 1] + s, i)
            }, v._addPointToRst = function(t, e, i, n) {
                var s = ye.TEMP;
                s.setTo(e || 0, i || 0), n.transformPoint(s), t.push(s.x, s.y)
            }, v._tempPoints = [], v._tempMatrixArrays = [], v._tempCmds = [], a(v, ["_tempMatrix", function() {
                return this._tempMatrix = new vt
            }, "_initMatrix", function() {
                return this._initMatrix = new vt
            }]), v
        }(),
        se = function() {
            function t() {}
            m(t, "laya.layagl.LayaGL");
            var e = t.prototype;
            return e.createCommandEncoder = function(t, e, i) {
                return void 0 === t && (t = 128), void 0 === e && (e = 64), void 0 === i && (i = !1), new he(this, t, e, i)
            }, e.beginCommandEncoding = function(t) {}, e.endCommandEncoding = function() {}, e.matrix4x4Multiply = function(t, e, i) {}, e.evaluateClipDatasRealTime = function(t, e, i, n) {}, t.getFrameCount = function() {
                return 0
            }, t.syncBufferToRenderThread = function(t, e) {
                void 0 === e && (e = 0)
            }, t.createArrayBufferRef = function(t, e, i) {}, t.createArrayBufferRefs = function(t, e, i, n) {}, t.EXECUTE_JS_THREAD_BUFFER = 0, t.EXECUTE_RENDER_THREAD_BUFFER = 1, t.EXECUTE_COPY_TO_RENDER = 2, t.EXECUTE_COPY_TO_RENDER3D = 3, t.ARRAY_BUFFER_TYPE_DATA = 0, t.ARRAY_BUFFER_TYPE_CMD = 1, t.ARRAY_BUFFER_REF_REFERENCE = 0, t.ARRAY_BUFFER_REF_COPY = 1, t.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, t.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, t.instance = null, t
        }(),
        re = (m(ae, "laya.utils.Browser"), f(1, ae, "pixelRatio", function() {
            if (ae._pixelRatio < 0)
                if (ae.__init__(), -1 < ae.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)"))
                    ae._pixelRatio = 2;
                else {
                    var t = ae.context,
                        e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                    (ae._pixelRatio = (ae._window.devicePixelRatio || 1) / e) < 1 && (ae._pixelRatio = 1)
                }
            return ae._pixelRatio
        }), f(1, ae, "height", function() {
            return ae.__init__(), (y.stage && y.stage.canvasRotation ? ae.clientWidth : ae.clientHeight) * ae.pixelRatio
        }), f(1, ae, "clientWidth", function() {
            return ae.__init__(), ae._window.innerWidth || ae._document.body.clientWidth
        }), f(1, ae, "window", function() {
            return ae._window || ae.__init__()
        }), f(1, ae, "clientHeight", function() {
            return ae.__init__(), ae._window.innerHeight || ae._document.body.clientHeight || ae._document.documentElement.clientHeight
        }), f(1, ae, "width", function() {
            return ae.__init__(), (y.stage && y.stage.canvasRotation ? ae.clientHeight : ae.clientWidth) * ae.pixelRatio
        }), f(1, ae, "container", function() {
            return ae._container || (ae.__init__(), (ae._container = ae.createElement("div")).id = "layaContainer", ae._document.body.appendChild(ae._container)), ae._container
        }, function(t) {
            ae._container = t
        }), f(1, ae, "document", function() {
            return ae.__init__(), ae._document
        }), ae.__init__ = function() {
            if (ae._window)
                return ae._window;
            var e = ae._window = p,
                t = ae._document = e.document,
                i = ae.userAgent = e.navigator.userAgent,
                n = e._layalibs;
            if (n) {
                n.sort(function(t, e) {
                    return t.i - e.i
                });
                for (var s = 0; s < n.length; s++)
                    n[s].f(e, t, y)
            } -
            1 < i.indexOf("MiniGame") && ae.window.hasOwnProperty("wx") && (y.MiniAdpter ? y.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), -1 < i.indexOf("SwanGame") && (y.BMiniAdapter ? y.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), "function" == typeof getApp && (y.KGMiniAdapter ? y.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), -1 < i.indexOf("OPPO") && -1 < i.indexOf("MiniGame") && (y.QGMiniAdapter ? y.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), e.trace = console.log, e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            };
            var r = t.body.style;
            r.margin = 0, r.overflow = "hidden", r["-webkit-user-select"] = "none", r["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
            for (var a = t.getElementsByTagName("meta"), o = 0, h = !1, l = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; o < a.length;) {
                var u = a[o];
                if ("viewport" == u.name) {
                    u.content = l, h = !0;
                    break
                }
                o++
            }
            h || ((u = t.createElement("meta")).name = "viewport", u.content = l, t.getElementsByTagName("head")[0].appendChild(u)), ae.onMobile = !!p.isConchApp || -1 < i.indexOf("Mobile"), ae.onIOS = !!i.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), ae.onIPhone = -1 < i.indexOf("iPhone"), ae.onMac = -1 < i.indexOf("Mac OS X"), ae.onIPad = -1 < i.indexOf("iPad"), ae.onAndroid = -1 < i.indexOf("Android") || -1 < i.indexOf("Adr"), ae.onWP = -1 < i.indexOf("Windows Phone"), ae.onQQBrowser = -1 < i.indexOf("QQBrowser"), ae.onMQQBrowser = -1 < i.indexOf("MQQBrowser") || -1 < i.indexOf("Mobile") && -1 < i.indexOf("QQ"), ae.onIE = !!e.ActiveXObject || "ActiveXObject" in e, ae.onWeiXin = -1 < i.indexOf("MicroMessenger"), ae.onSafari = -1 < i.indexOf("Safari"), ae.onPC = !ae.onMobile, ae.onMiniGame = -1 < i.indexOf("MiniGame"), ae.onBDMiniGame = -1 < i.indexOf("SwanGame"), -1 < i.indexOf("OPPO") && -1 < i.indexOf("MiniGame") && (ae.onQGMiniGame = !0, ae.onMiniGame = !1), ae.onLimixiu = -1 < i.indexOf("limixiu"), ae.onKGMiniGame = -1 < i.indexOf("QuickGame"), ae.supportLocalStorage = Ht.__init__(), ae.supportWebAudio = ui.__init__(), te._mainCanvas = new sn(!0);
            var c = te._mainCanvas.source.style;
            c.position = "absolute", c.top = c.left = "0px", c.background = "#000000", ae.canvas = new sn(!0), ae.context = ae.canvas.getContext("2d");
            var _ = new sn(!0);
            laya.utils.Browser.onQGMiniGame && (_ = te._mainCanvas);
            var d = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
                f = null;
            for (o = 0; o < d.length; o++) {
                try {
                    f = _.source.getContext(d[o])
                } catch (t) {}
                if (f) {
                    ae._supportWebGL = !0;
                    break
                }
            }
            return e
        }, ae.createElement = function(t) {
            return ae.__init__(), ae._document.createElement(t)
        }, ae.getElementById = function(t) {
            return ae.__init__(), ae._document.getElementById(t)
        }, ae.removeElement = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }, ae.now = function() {
            return Date.now()
        }, ae.userAgent = null, ae.onMobile = !1, ae.onIOS = !1, ae.onMac = !1, ae.onIPhone = !1, ae.onIPad = !1, ae.onAndroid = !1, ae.onWP = !1, ae.onQQBrowser = !1, ae.onMQQBrowser = !1, ae.onSafari = !1, ae.onIE = !1, ae.onWeiXin = !1, ae.onPC = !1, ae.onMiniGame = !1, ae.onBDMiniGame = !1, ae.onKGMiniGame = !1, ae.onQGMiniGame = !1, ae.onLimixiu = !1, ae.onFirefox = !1, ae.onEdge = !1, ae.supportWebAudio = !1, ae.supportLocalStorage = !1, ae.canvas = null, ae.context = null, ae._window = null, ae._document = null, ae._container = null, ae._pixelRatio = -1, ae._supportWebGL = !1, ae);

    function ae() {}
    var oe = function() {
            function r() {
                this._matrix = new vt
            }
            m(r, "laya.webgl.canvas.save.SaveTransform");
            var t = r.prototype;
            return y.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1
            }, t.restore = function(t) {
                t._curMat = this._savematrix, r.POOL[r.POOL._length++] = this
            }, r.save = function(t) {
                var e = t._saveMark;
                if (2048 != (2048 & e._saveuse)) {
                    e._saveuse |= 2048;
                    var i = r.POOL,
                        n = 0 < i._length ? i[--i._length] : new r;
                    n._savematrix = t._curMat, t._curMat = t._curMat.copyTo(n._matrix);
                    var s = t._save;
                    s[s._length++] = n
                }
            }, r.POOL = o._createArray(), r
        }(),
        he = function() {
            function t(t, e, i, n) {
                this._idata = []
            }
            m(t, "laya.layagl.CommandEncoder");
            var e = t.prototype;
            return e.getArrayData = function() {
                return this._idata
            }, e.getPtrID = function() {
                return 0
            }, e.beginEncoding = function() {}, e.endEncoding = function() {}, e.clearEncoding = function() {
                this._idata.length = 0
            }, e.getCount = function() {
                return this._idata.length
            }, e.add_ShaderValue = function(t) {
                this._idata.push(t)
            }, e.addShaderUniform = function(t) {
                this.add_ShaderValue(t)
            }, t
        }(),
        le = function() {
            function l() {}
            m(l, "laya.display.cmd.FillBorderTextCmd");
            var t = l.prototype;
            return t.recover = function() {
                z.recover("FillBorderTextCmd", this)
            }, t.run = function(t, e, i) {
                t.fillBorderText(this.text, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth, this.textAlign)
            }, f(0, t, "cmdID", function() {
                return "FillBorderText"
            }), l.create = function(t, e, i, n, s, r, a, o) {
                var h = z.getItemByClass("FillBorderTextCmd", l);
                return h.text = t, h.x = e, h.y = i, h.font = n, h.fillColor = s, h.borderColor = r, h.lineWidth = a, h.textAlign = o, h
            }, l.ID = "FillBorderText", l
        }(),
        ue = function() {
            function t() {
                this._controlPoints = [new ye, new ye, new ye], this._calFun = this.getPoint2
            }
            m(t, "laya.maths.Bezier");
            var e = t.prototype;
            return e._switchPoint = function(t, e) {
                var i = this._controlPoints.shift();
                i.setTo(t, e), this._controlPoints.push(i)
            }, e.getPoint2 = function(t, e) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    s = this._controlPoints[2],
                    r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * s.x,
                    a = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * s.y;
                e.push(r, a)
            }, e.getPoint3 = function(t, e) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    s = this._controlPoints[2],
                    r = this._controlPoints[3],
                    a = Math.pow(1 - t, 3) * i.x + 3 * n.x * t * (1 - t) * (1 - t) + 3 * s.x * t * t * (1 - t) + r.x * Math.pow(t, 3),
                    o = Math.pow(1 - t, 3) * i.y + 3 * n.y * t * (1 - t) * (1 - t) + 3 * s.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
                e.push(a, o)
            }, e.insertPoints = function(t, e) {
                var i, n = NaN;
                for (i = 1 / (t = 0 < t ? t : 5), n = 0; n <= 1; n += i)
                    this._calFun(n, e)
            }, e.getBezierPoints = function(t, e, i) {
                void 0 === e && (e = 5), void 0 === i && (i = 2);
                var n, s = 0;
                if ((n = t.length) < 2 * (i + 1))
                    return [];
                var r = [];
                switch (i) {
                    case 2:
                        this._calFun = this.getPoint2;
                        break;
                    case 3:
                        this._calFun = this.getPoint3;
                        break;
                    default:
                        return []
                }
                for (; this._controlPoints.length <= i;)
                    this._controlPoints.push(ye.create());
                for (s = 0; s < 2 * i; s += 2)
                    this._switchPoint(t[s], t[s + 1]);
                for (s = 2 * i; s < n; s += 2)
                    this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, r);
                return r
            }, a(t, ["I", function() {
                return this.I = new t
            }]), t
        }(),
        ce = function() {
            function o() {}
            m(o, "laya.display.cmd.Draw9GridTexture");
            var t = o.prototype;
            return t.recover = function() {
                this.texture._removeReference(), z.recover("Draw9GridTexture", this)
            }, t.run = function(t, e, i) {
                t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i)
            }, f(0, t, "cmdID", function() {
                return "Draw9GridTexture"
            }), o.create = function(t, e, i, n, s, r) {
                var a = z.getItemByClass("Draw9GridTexture", o);
                return (a.texture = t)._addReference(), a.x = e, a.y = i, a.width = n, a.height = s, a.sizeGrid = r, a
            }, o.ID = "Draw9GridTexture", o
        }(),
        _e = function() {
            function s() {
                this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1, this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = M.atlasWidth, this.texture = Ki.getTextTexture(this.texWidth, this.texHeight), 256 < this.texWidth / s.atlasGridW && (s.atlasGridW = Math.ceil(this.texWidth / 256)), this.atlasgrid = new Me(this.texWidth / s.atlasGridW, this.texHeight / s.atlasGridW, this.texture.id)
            }
            m(s, "laya.webgl.text.TextAtlas");
            var t = s.prototype;
            return t.setProtecteDist = function(t) {
                this.protectDist = t
            }, t.getAEmpty = function(t, e, i) {
                var n = this.atlasgrid.addRect(1, Math.ceil(t / s.atlasGridW), Math.ceil(e / s.atlasGridW), i);
                return n && (i.x *= s.atlasGridW, i.y *= s.atlasGridW), n
            }, t.destroy = function() {
                for (var t in this.charMaps) {
                    this.charMaps[t].deleted = !0
                }
                this.texture.discard()
            }, t.printDebugInfo = function() {}, f(0, t, "usedRate", function() {
                return this.atlasgrid._used
            }), s.atlasGridW = 16, s
        }(),
        de = function() {
            function t() {
                this._strsToID = {}, this._idToStrs = [], this._length = 0
            }
            m(t, "laya.utils.StringKey");
            var e = t.prototype;
            return e.add = function(t) {
                var e = this._strsToID[t];
                return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++)
            }, e.getID = function(t) {
                var e = this._strsToID[t];
                return null == e ? -1 : e
            }, e.getName = function(t) {
                var e = this._idToStrs[t];
                return null == e ? void 0 : e
            }, t
        }(),
        fe = function() {
            function t() {
                this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0
            }
            m(t, "laya.utils.Dragging");
            var e = t.prototype;
            return e.start = function(t, e, i, n, s, r, a, o) {
                void 0 === o && (o = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = i, this.elasticDistance = e ? n : 0, this.elasticBackTime = s, this.data = r, this._disableMouseEvent = a, this.ratio = o, this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, y.stage.on("mouseup", this, this.onStageMouseUp), y.stage.on("mouseout", this, this.onStageMouseUp), y.systemTimer.frameLoop(1, this, this.loop)
            }, e.clearTimer = function() {
                y.systemTimer.clear(this, this.loop), y.systemTimer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null)
            }, e.stop = function() {
                this._dragging && (D.instance.disableMouseEvent = !1, y.stage.off("mouseup", this, this.onStageMouseUp), y.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear())
            }, e.loop = function() {
                var t = this._parent.getMousePoint(),
                    e = t.x,
                    i = t.y,
                    n = e - this._lastX,
                    s = i - this._lastY;
                if (this._clickOnly) {
                    if (!(1 < Math.abs(n * y.stage._canvasTransform.getScaleX()) || 1 < Math.abs(s * y.stage._canvasTransform.getScaleY())))
                        return;
                    this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event("dragstart", this.data), D.instance.disableMouseEvent = this._disableMouseEvent
                } else
                    this._offsets.push(n, s);
                0 == n && 0 == s || (this._lastX = e, this._lastY = i, this.target.x += n * this._elasticRateX, this.target.y += s * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data))
            }, e.checkArea = function() {
                if (this.elasticDistance <= 0)
                    this.backToArea();
                else {
                    if (this.target._x < this.area.x)
                        var t = this.area.x - this.target._x;
                    else
                        t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                    if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y)
                        var e = this.area.y - this.target.y;
                    else
                        e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                    this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance)
                }
            }, e.backToArea = function() {
                this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height)
            }, e.onStageMouseUp = function(t) {
                if (D.instance.disableMouseEvent = !1, y.stage.off("mouseup", this, this.onStageMouseUp), y.stage.off("mouseout", this, this.onStageMouseUp), y.systemTimer.clear(this, this.loop), !this._clickOnly && this.target)
                    if (this.hasInertia) {
                        this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
                        for (var e = this._offsets.length, i = Math.min(e, 6), n = this._offsets.length - i, s = e - 1; n < s; s--)
                            this._offsetY += this._offsets[s--], this._offsetX += this._offsets[s];
                        this._offsetX = this._offsetX / i * 2, this._offsetY = this._offsetY / i * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = 0 < this._offsetX ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = 0 < this._offsetY ? this.maxOffset : -this.maxOffset), y.systemTimer.frameLoop(1, this, this.tweenMove)
                    } else
                        0 < this.elasticDistance ? this.checkElastic() : this.clear()
            }, e.checkElastic = function() {
                var t = NaN,
                    e = NaN;
                if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), isNaN(t) && isNaN(e))
                    this.clear();
                else {
                    var i = {};
                    isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = it.to(this.target, i, this.elasticBackTime, Pe.sineOut, b.create(this, this.clear), 0, !1, !1)
                }
            }, e.tweenMove = function() {
                this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (y.systemTimer.clear(this, this.tweenMove), 0 < this.elasticDistance ? this.checkElastic() : this.clear())
            }, e.clear = function() {
                if (this.target) {
                    this.clearTimer();
                    var t = this.target;
                    this.target = null, this._parent = null, t.event("dragend", this.data)
                }
            }, t
        }(),
        pe = (m(me, "laya.webgl.shapes.Earcut"), me.earcut = function(t, e, i) {
            i = i || 2;
            var n, s, r, a, o, h, l, u = e && e.length,
                c = u ? e[0] * i : t.length,
                _ = me.linkedList(t, 0, c, i, !0),
                d = [];
            if (!_)
                return d;
            if (u && (_ = me.eliminateHoles(t, e, _, i)), t.length > 80 * i) {
                n = r = t[0], s = a = t[1];
                for (var f = i; f < c; f += i)
                    (o = t[f]) < n && (n = o), (h = t[f + 1]) < s && (s = h), r < o && (r = o), a < h && (a = h);
                l = 0 !== (l = Math.max(r - n, a - s)) ? 1 / l : 0
            }
            return me.earcutLinked(_, d, i, n, s, l), d
        }, me.linkedList = function(t, e, i, n, s) {
            var r, a;
            if (s === 0 < me.signedArea(t, e, i, n))
                for (r = e; r < i; r += n)
                    a = me.insertNode(r, t[r], t[r + 1], a);
            else
                for (r = i - n; e <= r; r -= n)
                    a = me.insertNode(r, t[r], t[r + 1], a);
            return a && me.equals(a, a.next) && (me.removeNode(a), a = a.next), a
        }, me.filterPoints = function(t, e) {
            if (!t)
                return t;
            e || (e = t);
            var i, n = t;
            do {
                if (i = !1, n.steiner || !me.equals(n, n.next) && 0 !== me.area(n.prev, n, n.next))
                    n = n.next;
                else {
                    if (me.removeNode(n), (n = e = n.prev) === n.next)
                        break;
                    i = !0
                }
            } while (i || n !== e);
            return e
        }, me.earcutLinked = function(t, e, i, n, s, r, a) {
            if (t) {
                !a && r && me.indexCurve(t, n, s, r);
                for (var o, h, l = t; t.prev !== t.next;)
                    if (o = t.prev, h = t.next, r ? me.isEarHashed(t, n, s, r) : me.isEar(t))
                        e.push(o.i / i), e.push(t.i / i), e.push(h.i / i), me.removeNode(t), t = h.next, l = h.next;
                    else if ((t = h) === l) {
                    a ? 1 === a ? (t = me.cureLocalIntersections(t, e, i), me.earcutLinked(t, e, i, n, s, r, 2)) : 2 === a && me.splitEarcut(t, e, i, n, s, r) : me.earcutLinked(me.filterPoints(t, null), e, i, n, s, r, 1);
                    break
                }
            }
        }, me.isEar = function(t) {
            var e = t.prev,
                i = t,
                n = t.next;
            if (0 <= me.area(e, i, n))
                return !1;
            for (var s = t.next.next; s !== t.prev;) {
                if (me.pointInTriangle(e.x, e.y, i.x, i.y, n.x, n.y, s.x, s.y) && 0 <= me.area(s.prev, s, s.next))
                    return !1;
                s = s.next
            }
            return !0
        }, me.isEarHashed = function(t, e, i, n) {
            var s = t.prev,
                r = t,
                a = t.next;
            if (0 <= me.area(s, r, a))
                return !1;
            for (var o = s.x < r.x ? s.x < a.x ? s.x : a.x : r.x < a.x ? r.x : a.x, h = s.y < r.y ? s.y < a.y ? s.y : a.y : r.y < a.y ? r.y : a.y, l = s.x > r.x ? s.x > a.x ? s.x : a.x : r.x > a.x ? r.x : a.x, u = s.y > r.y ? s.y > a.y ? s.y : a.y : r.y > a.y ? r.y : a.y, c = me.zOrder(o, h, e, i, n), _ = me.zOrder(l, u, e, i, n), d = t.nextZ; d && d.z <= _;) {
                if (d !== t.prev && d !== t.next && me.pointInTriangle(s.x, s.y, r.x, r.y, a.x, a.y, d.x, d.y) && 0 <= me.area(d.prev, d, d.next))
                    return !1;
                d = d.nextZ
            }
            for (d = t.prevZ; d && d.z >= c;) {
                if (d !== t.prev && d !== t.next && me.pointInTriangle(s.x, s.y, r.x, r.y, a.x, a.y, d.x, d.y) && 0 <= me.area(d.prev, d, d.next))
                    return !1;
                d = d.prevZ
            }
            return !0
        }, me.cureLocalIntersections = function(t, e, i) {
            var n = t;
            do {
                var s = n.prev,
                    r = n.next.next;
                !me.equals(s, r) && me.intersects(s, n, n.next, r) && me.locallyInside(s, r) && me.locallyInside(r, s) && (e.push(s.i / i), e.push(n.i / i), e.push(r.i / i), me.removeNode(n), me.removeNode(n.next), n = t = r), n = n.next
            } while (n !== t);
            return n
        }, me.splitEarcut = function(t, e, i, n, s, r) {
            var a = t;
            do {
                for (var o = a.next.next; o !== a.prev;) {
                    if (a.i !== o.i && me.isValidDiagonal(a, o)) {
                        var h = me.splitPolygon(a, o);
                        return a = me.filterPoints(a, a.next), h = me.filterPoints(h, h.next), me.earcutLinked(a, e, i, n, s, r), void me.earcutLinked(h, e, i, n, s, r)
                    }
                    o = o.next
                }
                a = a.next
            } while (a !== t)
        }, me.eliminateHoles = function(t, e, i, n) {
            var s, r, a, o, h, l = [];
            for (s = 0, r = e.length; s < r; s++)
                a = e[s] * n, o = s < r - 1 ? e[s + 1] * n : t.length, (h = me.linkedList(t, a, o, n, !1)) === h.next && (h.steiner = !0), l.push(me.getLeftmost(h));
            for (l.sort(me.compareX), s = 0; s < l.length; s++)
                me.eliminateHole(l[s], i), i = me.filterPoints(i, i.next);
            return i
        }, me.compareX = function(t, e) {
            return t.x - e.x
        }, me.eliminateHole = function(t, e) {
            if (e = me.findHoleBridge(t, e)) {
                var i = me.splitPolygon(e, t);
                me.filterPoints(i, i.next)
            }
        }, me.findHoleBridge = function(t, e) {
            var i, n = e,
                s = t.x,
                r = t.y,
                a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    var o = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (o <= s && a < o) {
                        if ((a = o) === s) {
                            if (r === n.y)
                                return n;
                            if (r === n.next.y)
                                return n.next
                        }
                        i = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== e);
            if (!i)
                return null;
            if (s === a)
                return i.prev;
            var h, l = i,
                u = i.x,
                c = i.y,
                _ = 1 / 0;
            for (n = i.next; n !== l;)
                s >= n.x && n.x >= u && s !== n.x && me.pointInTriangle(r < c ? s : a, r, u, c, r < c ? a : s, r, n.x, n.y) && ((h = Math.abs(r - n.y) / (s - n.x)) < _ || h === _ && n.x > i.x) && me.locallyInside(n, t) && (i = n, _ = h), n = n.next;
            return i
        }, me.indexCurve = function(t, e, i, n) {
            for (var s = t; null === s.z && (s.z = me.zOrder(s.x, s.y, e, i, n)), s.prevZ = s.prev, s.nextZ = s.next, (s = s.next) !== t;);
            s.prevZ.nextZ = null, s.prevZ = null, me.sortLinked(s)
        }, me.sortLinked = function(t) {
            var e, i, n, s, r, a, o, h, l = 1;
            do {
                for (i = t, r = t = null, a = 0; i;) {
                    for (a++, n = i, e = o = 0; e < l && (o++, n = n.nextZ); e++);
                    for (h = l; 0 < o || 0 < h && n;)
                        0 !== o && (0 === h || !n || i.z <= n.z) ? (i = (s = i).nextZ, o--) : (n = (s = n).nextZ, h--), r ? r.nextZ = s : t = s, s.prevZ = r, r = s;
                    i = n
                }
                r.nextZ = null, l *= 2
            } while (1 < a);
            return t
        }, me.zOrder = function(t, e, i, n, s) {
            return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * s) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * s) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
        }, me.getLeftmost = function(t) {
            for (var e = t, i = t; e.x < i.x && (i = e), (e = e.next) !== t;);
            return i
        }, me.pointInTriangle = function(t, e, i, n, s, r, a, o) {
            return 0 <= (s - a) * (e - o) - (t - a) * (r - o) && 0 <= (t - a) * (n - o) - (i - a) * (e - o) && 0 <= (i - a) * (r - o) - (s - a) * (n - o)
        }, me.isValidDiagonal = function(t, e) {
            return t.next.i !== e.i && t.prev.i !== e.i && !me.intersectsPolygon(t, e) && me.locallyInside(t, e) && me.locallyInside(e, t) && me.middleInside(t, e)
        }, me.area = function(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
        }, me.equals = function(t, e) {
            return t.x === e.x && t.y === e.y
        }, me.intersects = function(t, e, i, n) {
            return !!(me.equals(t, e) && me.equals(i, n) || me.equals(t, n) && me.equals(i, e)) || 0 < me.area(t, e, i) != 0 < me.area(t, e, n) && 0 < me.area(i, n, t) != 0 < me.area(i, n, e)
        }, me.intersectsPolygon = function(t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && me.intersects(i, i.next, t, e))
                    return !0;
                i = i.next
            } while (i !== t);
            return !1
        }, me.locallyInside = function(t, e) {
            return me.area(t.prev, t, t.next) < 0 ? 0 <= me.area(t, e, t.next) && 0 <= me.area(t, t.prev, e) : me.area(t, e, t.prev) < 0 || me.area(t, t.next, e) < 0
        }, me.middleInside = function(t, e) {
            for (var i = t, n = !1, s = (t.x + e.x) / 2, r = (t.y + e.y) / 2; i.y > r != i.next.y > r && i.next.y !== i.y && s < (i.next.x - i.x) * (r - i.y) / (i.next.y - i.y) + i.x && (n = !n), (i = i.next) !== t;);
            return n
        }, me.splitPolygon = function(t, e) {
            var i = new st(t.i, t.x, t.y),
                n = new st(e.i, e.x, e.y),
                s = t.next,
                r = e.prev;
            return (t.next = e).prev = t, (i.next = s).prev = i, (n.next = i).prev = n, (r.next = n).prev = r, n
        }, me.insertNode = function(t, e, i, n) {
            var s = new st(t, e, i);
            return n ? (s.next = n.next, (s.prev = n).next.prev = s, n.next = s) : (s.prev = s).next = s, s
        }, me.removeNode = function(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
        }, me.signedArea = function(t, e, i, n) {
            for (var s = 0, r = e, a = i - n; r < i; r += n)
                s += (t[a] - t[r]) * (t[r + 1] + t[a + 1]), a = r;
            return s
        }, me);

    function me() {}
    var ge = function() {
            function i(t) {
                this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", this.z = 0, this.src = null, this.includefiles = t
            }
            m(i, "laya.webgl.utils.ShaderNode");
            var t = i.prototype;
            return t.setParent = function(t) {
                t.childs.push(this), this.z = t.z + 1, this.parent = t
            }, t.setCondition = function(t, e) {
                t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                    return this[t]
                }, this.condition.__condition = t)
            }, t.toscript = function(t, e) {
                return this._toscript(t, e, ++i.__id)
            }, t._toscript = function(n, s, r) {
                if (this.childs.length < 1 && !this.text)
                    return s;
                s.length;
                if (this.condition) {
                    var t = !!this.condition.call(n);
                    if (2 === this.conditionType && (t = !t), !t)
                        return s
                }
                if (this.text && s.push(this.text), 0 < this.childs.length && this.childs.forEach(function(t, e, i) {
                        t._toscript(n, s, r)
                    }), 0 < this.includefiles.length && 0 < this.useFuns.length)
                    for (var e, i = 0, a = this.includefiles.length; i < a; i++)
                        this.includefiles[i].curUseID != r && 0 < (e = this.includefiles[i].file.getFunsScript(this.useFuns)).length && (this.includefiles[i].curUseID = r, s[0] = e + s[0]);
                return s
            }, i.__id = 1, i
        }(),
        ve = function() {
            function n() {}
            m(n, "laya.display.cmd.TranslateCmd");
            var t = n.prototype;
            return t.recover = function() {
                z.recover("TranslateCmd", this)
            }, t.run = function(t, e, i) {
                t.translate(this.tx, this.ty)
            }, f(0, t, "cmdID", function() {
                return "Translate"
            }), n.create = function(t, e) {
                var i = z.getItemByClass("TranslateCmd", n);
                return i.tx = t, i.ty = e, i
            }, n.ID = "Translate", n
        }(),
        ye = function() {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
            }
            m(t, "laya.maths.Point");
            var e = t.prototype;
            return e.setTo = function(t, e) {
                return this.x = t, this.y = e, this
            }, e.reset = function() {
                return this.x = this.y = 0, this
            }, e.recover = function() {
                z.recover("Point", this.reset())
            }, e.distance = function(t, e) {
                return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e))
            }, e.toString = function() {
                return this.x + "," + this.y
            }, e.normalize = function() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y);
                if (0 < t) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e
                }
            }, e.copy = function(t) {
                return this.setTo(t.x, t.y)
            }, t.create = function() {
                return z.getItemByClass("Point", t)
            }, t.TEMP = new t, t.EMPTY = new t, t
        }();
    m(xe, "laya.Const"), xe.NOT_ACTIVE = 1, xe.ACTIVE_INHIERARCHY = 2, xe.AWAKED = 4, xe.NOT_READY = 8, xe.DISPLAY = 16, xe.HAS_ZORDER = 32, xe.HAS_MOUSE = 64, xe.DISPLAYED_INSTAGE = 128, xe.DRAWCALL_OPTIMIZE = 256;

    function xe() {}
    var Te = (m(be, "laya.webgl.shapes.BasePoly"), be.createLine2 = function(t, e, i, n, s, r) {
        if (t.length < 4)
            return null;
        var a = be.tempData.length > t.length + 2 ? be.tempData : new Array(t.length + 2);
        a[0] = t[0], a[1] = t[1];
        var o = 2,
            h = 0,
            l = t.length;
        for (h = 2; h < l; h += 2)
            .01 < Math.abs(t[h] - t[h - 2]) + Math.abs(t[h + 1] - t[h - 1]) && (a[o++] = t[h], a[o++] = t[h + 1]);
        r && .01 < Math.abs(t[0] - a[o - 2]) + Math.abs(t[1] - a[o - 1]) && (a[o++] = t[0], a[o++] = t[1]);
        var u = s;
        l = o / 2;
        var c, _, d, f, p, m, g, v, y, x, T, b, w, C, A, E, S, M, R, I, P = i / 2;
        for (d = a[0], f = a[1], x = d - (p = a[2]), y = (y = -(f - (m = a[3]))) / (I = Math.sqrt(y * y + x * x)) * P, x = x / I * P, u.push(d - y, f - x, d + y, f + x), h = 1; h < l - 1; h++)
            d = a[2 * (h - 1)], f = a[2 * (h - 1) + 1], p = a[2 * h], m = a[2 * h + 1], g = a[2 * (h + 1)], v = a[2 * (h + 1) + 1], x = d - p, b = p - g, A = (-(y = (y = -(f - m)) / (I = Math.sqrt(y * y + x * x)) * P) + d) * (-(x = x / I * P) + m) - (-y + p) * (-x + f), M = (-(T = (T = -(m - v)) / (I = Math.sqrt(T * T + b * b)) * P) + g) * (-(b = b / I * P) + m) - (-T + p) * (-b + v), R = (w = -x + f - (-x + m)) * (S = -T + p - (-T + g)) - (E = -b + v - (-b + m)) * (C = -y + p - (-y + d)), Math.abs(R) < .1 ? (R += 10.1, u.push(p - y, m - x, p + y, m + x)) : (c = (C * M - S * A) / R, _ = (E * A - w * M) / R, u.push(c, _, p - (c - p), m - (_ - m)));
        for (d = a[o - 4], f = a[o - 3], x = d - (p = a[o - 2]), y = (y = -(f - (m = a[o - 1]))) / (I = Math.sqrt(y * y + x * x)) * P, x = x / I * P, u.push(p - y, m - x, p + y, m + x), h = 1; h < l; h++)
            e.push(n + 2 * (h - 1), n + 2 * (h - 1) + 1, n + 2 * h + 1, n + 2 * h + 1, n + 2 * h, n + 2 * (h - 1));
        return u
    }, be.createLineTriangle = function(t, e, i, n, s, r, a) {
        var o = t.slice(),
            h = o.length,
            l = o[0],
            u = o[1],
            c = o[2],
            _ = (o[2], 0),
            d = 0,
            f = 0,
            p = 0,
            m = h / 2;
        if (!(m <= 1) && 2 != m) {
            for (var g = new Array(4 * m), v = 0, y = 0, x = 0; x < m - 1; x++)
                l = o[y++], u = o[y++], c = o[y++], p = o[y++] - u, 0 != (f = c - l) && 0 != p && .001 < (_ = Math.sqrt(f * f + p * p)) && (g[d = 4 * v] = l, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = p / _, v++);
            for (n ? (l = o[h - 2], u = o[h - 1], c = o[0], p = o[1] - u, 0 != (f = c - l) && 0 != p && .001 < (_ = Math.sqrt(f * f + p * p)) && (g[d = 4 * v] = l, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = p / _, v++)) : (g[d = 4 * v] = l, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = p / _, v++), x = y = 0; x < m; x++)
                l = o[y], u = o[y + 1], c = o[y + 2], o[y + 3], o[y + 4], o[y + 5]
        }
    }, a(be, ["tempData", function() {
        return this.tempData = new Array(256)
    }]), be);

    function be() {}
    var we = function() {
            function r() {}
            m(r, "laya.display.cmd.ScaleCmd");
            var t = r.prototype;
            return t.recover = function() {
                z.recover("ScaleCmd", this)
            }, t.run = function(t, e, i) {
                t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i)
            }, f(0, t, "cmdID", function() {
                return "Scale"
            }), r.create = function(t, e, i, n) {
                var s = z.getItemByClass("ScaleCmd", r);
                return s.scaleX = t, s.scaleY = e, s.pivotX = i, s.pivotY = n, s
            }, r.ID = "Scale", r
        }(),
        Ce = function() {
            function i() {}
            m(i, "laya.display.cmd.AlphaCmd");
            var t = i.prototype;
            return t.recover = function() {
                z.recover("AlphaCmd", this)
            }, t.run = function(t, e, i) {
                t.alpha(this.alpha)
            }, f(0, t, "cmdID", function() {
                return "Alpha"
            }), i.create = function(t) {
                var e = z.getItemByClass("AlphaCmd", i);
                return e.alpha = t, e
            }, i.ID = "Alpha", i
        }(),
        Ae = function() {
            function e(t) {
                this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_)
            }
            m(e, "laya.utils.Byte");
            var t = e.prototype;
            return t._resizeBuffer = function(e) {
                try {
                    var t = new Uint8Array(e);
                    null != this._u8d_ && (this._u8d_.length <= e ? t.set(this._u8d_) : t.set(this._u8d_.subarray(0, e))), this._u8d_ = t, this._d_ = new DataView(t.buffer)
                } catch (t) {
                    throw "Invalid typed array length:" + e
                }
            }, t.getString = function() {
                return this.readString()
            }, t.readString = function() {
                return this._rUTF(this.getUint16())
            }, t.getFloat32Array = function(t, e) {
                return this.readFloat32Array(t, e)
            }, t.readFloat32Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Float32Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n
            }, t.getUint8Array = function(t, e) {
                return this.readUint8Array(t, e)
            }, t.readUint8Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Uint8Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n
            }, t.getInt16Array = function(t, e) {
                return this.readInt16Array(t, e)
            }, t.readInt16Array = function(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var n = new Int16Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, n
            }, t.getFloat32 = function() {
                return this.readFloat32()
            }, t.readFloat32 = function() {
                if (this._pos_ + 4 > this._length)
                    throw "getFloat32 error - Out of bounds";
                var t = this._d_.getFloat32(this._pos_, this._xd_);
                return this._pos_ += 4, t
            }, t.getFloat64 = function() {
                return this.readFloat64()
            }, t.readFloat64 = function() {
                if (this._pos_ + 8 > this._length)
                    throw "getFloat64 error - Out of bounds";
                var t = this._d_.getFloat64(this._pos_, this._xd_);
                return this._pos_ += 8, t
            }, t.writeFloat32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), this._pos_ += 4
            }, t.writeFloat64 = function(t) {
                this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), this._pos_ += 8
            }, t.getInt32 = function() {
                return this.readInt32()
            }, t.readInt32 = function() {
                if (this._pos_ + 4 > this._length)
                    throw "getInt32 error - Out of bounds";
                var t = this._d_.getInt32(this._pos_, this._xd_);
                return this._pos_ += 4, t
            }, t.getUint32 = function() {
                return this.readUint32()
            }, t.readUint32 = function() {
                if (this._pos_ + 4 > this._length)
                    throw "getUint32 error - Out of bounds";
                var t = this._d_.getUint32(this._pos_, this._xd_);
                return this._pos_ += 4, t
            }, t.writeInt32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), this._pos_ += 4
            }, t.writeUint32 = function(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), this._pos_ += 4
            }, t.getInt16 = function() {
                return this.readInt16()
            }, t.readInt16 = function() {
                if (this._pos_ + 2 > this._length)
                    throw "getInt16 error - Out of bounds";
                var t = this._d_.getInt16(this._pos_, this._xd_);
                return this._pos_ += 2, t
            }, t.getUint16 = function() {
                return this.readUint16()
            }, t.readUint16 = function() {
                if (this._pos_ + 2 > this._length)
                    throw "getUint16 error - Out of bounds";
                var t = this._d_.getUint16(this._pos_, this._xd_);
                return this._pos_ += 2, t
            }, t.writeUint16 = function(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), this._pos_ += 2
            }, t.writeInt16 = function(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), this._pos_ += 2
            }, t.getUint8 = function() {
                return this.readUint8()
            }, t.readUint8 = function() {
                if (this._pos_ + 1 > this._length)
                    throw "getUint8 error - Out of bounds";
                return this._u8d_[this._pos_++]
            }, t.writeUint8 = function(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++
            }, t._getUInt8 = function(t) {
                return this._readUInt8(t)
            }, t._readUInt8 = function(t) {
                return this._d_.getUint8(t)
            }, t._getUint16 = function(t) {
                return this._readUint16(t)
            }, t._readUint16 = function(t) {
                return this._d_.getUint16(t, this._xd_)
            }, t._getMatrix = function() {
                return this._readMatrix()
            }, t._readMatrix = function() {
                return new vt(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32())
            }, t._rUTF = function(t) {
                var e = this._pos_ + t,
                    i = 0,
                    n = 0,
                    s = 0,
                    r = String.fromCharCode,
                    a = this._u8d_,
                    o = [],
                    h = 0;
                for (o.length = 1e3; this._pos_ < e;)
                    (i = a[this._pos_++]) < 128 ? 0 != i && (o[h++] = r(i)) : i < 224 ? o[h++] = r((63 & i) << 6 | 127 & a[this._pos_++]) : i < 240 ? (n = a[this._pos_++], o[h++] = r((31 & i) << 12 | (127 & n) << 6 | 127 & a[this._pos_++])) : (n = a[this._pos_++], s = a[this._pos_++], o[h++] = r((15 & i) << 18 | (127 & n) << 12 | s << 6 & 127 | 127 & a[this._pos_++])), 0;
                return o.length = h, o.join("")
            }, t.getCustomString = function(t) {
                return this.readCustomString(t)
            }, t.readCustomString = function(t) {
                for (var e = "", i = 0, n = 0, s = String.fromCharCode, r = this._u8d_; 0 < t;)
                    if ((n = r[this._pos_]) < 128)
                        e += s(n), this._pos_++, t--;
                    else
                        for (i = n - 128, this._pos_++, t -= i; 0 < i;)
                            n = r[this._pos_++], e += s(r[this._pos_++] << 8 | n), i--;
                return e
            }, t.clear = function() {
                this._pos_ = 0, this.length = 0
            }, t.__getBuffer = function() {
                return this._d_.buffer
            }, t.writeUTFBytes = function(t) {
                for (var e = 0, i = (t += "").length; e < i; e++) {
                    var n = t.charCodeAt(e);
                    n <= 127 ? this.writeByte(n) : n <= 2047 ? (this._ensureWrite(this._pos_ + 2), this._u8d_.set([192 | n >> 6, 128 | 63 & n], this._pos_), this._pos_ += 2) : n <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 4)
                }
            }, t.writeUTFString = function(t) {
                var e = this.pos;
                this.writeUint16(1), this.writeUTFBytes(t);
                var i = this.pos - e - 2;
                this._d_.setUint16(e, i, this._xd_)
            }, t.readUTFString = function() {
                return this.readUTFBytes(this.getUint16())
            }, t.getUTFString = function() {
                return this.readUTFString()
            }, t.readUTFBytes = function(t) {
                if (void 0 === t && (t = -1), 0 === t)
                    return "";
                var e = this.bytesAvailable;
                if (e < t)
                    throw "readUTFBytes error - Out of bounds";
                return t = 0 < t ? t : e, this._rUTF(t)
            }, t.getUTFBytes = function(t) {
                return void 0 === t && (t = -1), this.readUTFBytes(t)
            }, t.writeByte = function(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1
            }, t.readByte = function() {
                if (this._pos_ + 1 > this._length)
                    throw "readByte error - Out of bounds";
                return this._d_.getInt8(this._pos_++)
            }, t.getByte = function() {
                return this.readByte()
            }, t._ensureWrite = function(t) {
                this._length < t && (this._length = t), this._allocated_ < t && (this.length = t)
            }, t.writeArrayBuffer = function(t, e, i) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), e < 0 || i < 0)
                    throw "writeArrayBuffer error - Out of bounds";
                0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
                var n = new Uint8Array(t);
                this._u8d_.set(n.subarray(e, e + i), this._pos_), this._pos_ += i
            }, t.readArrayBuffer = function(t) {
                var e;
                return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, e
            }, f(0, t, "buffer", function() {
                var t = this._d_.buffer;
                return t.byteLength === this._length ? t : t.slice(0, this._length)
            }), f(0, t, "endian", function() {
                return this._xd_ ? "littleEndian" : "bigEndian"
            }, function(t) {
                this._xd_ = "littleEndian" === t
            }), f(0, t, "length", function() {
                return this._length
            }, function(t) {
                this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), this._length = t
            }), f(0, t, "pos", function() {
                return this._pos_
            }, function(t) {
                this._pos_ = t
            }), f(0, t, "bytesAvailable", function() {
                return this._length - this._pos_
            }), e.getSystemEndian = function() {
                if (!e._sysEndian) {
                    var t = new ArrayBuffer(2);
                    new DataView(t).setInt16(0, 256, !0), e._sysEndian = 256 === new Int16Array(t)[0] ? "littleEndian" : "bigEndian"
                }
                return e._sysEndian
            }, e.BIG_ENDIAN = "bigEndian", e.LITTLE_ENDIAN = "littleEndian", e._sysEndian = null, e
        }(),
        Ee = function() {
            var a;

            function t() {
                this._pool = [], this._map = [], this._laters = []
            }
            m(t, "laya.utils.CallLater");
            var e = t.prototype;
            return e._update = function() {
                var t = this._laters,
                    e = t.length;
                if (0 < e) {
                    for (var i = 0, n = e - 1; i <= n; i++) {
                        var s = t[i];
                        (this._map[s.key] = null) !== s.method && (s.run(), s.clear()), this._pool.push(s), i === n && (n = t.length - 1)
                    }
                    t.length = 0
                }
            }, e._getHandler = function(t, e) {
                var i = t ? t.$_GID || (t.$_GID = ke.getGID()) : 0,
                    n = e.$_TID || (e.$_TID = 1e5 * ct._mid++);
                return this._map[i + n]
            }, e.callLater = function(t, e, i) {
                if (null == this._getHandler(t, e)) {
                    if (this._pool.length)
                        var n = this._pool.pop();
                    else
                        n = new a;
                    n.caller = t, n.method = e, n.args = i;
                    var s = t ? t.$_GID : 0,
                        r = e.$_TID;
                    n.key = s + r, this._map[n.key] = n, this._laters.push(n)
                }
            }, e.runCallLater = function(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(), i.clear())
            }, t.I = new t, t.__init$ = function() {
                a = function() {
                    function t() {
                        this.key = 0, this.caller = null, this.method = null, this.args = null
                    }
                    m(t, "");
                    var e = t.prototype;
                    return e.clear = function() {
                        this.caller = null, this.method = null, this.args = null
                    }, e.run = function() {
                        var t = this.caller;
                        if (t && t.destroyed)
                            return this.clear();
                        var e = this.method,
                            i = this.args;
                        null != e && (i ? e.apply(t, i) : e.call(t))
                    }, t
                }()
            }, t
        }(),
        Se = function() {
            function t() {
                this._sp = null, this._one = null, this._cmds = null, this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1, this._render = this._renderEmpty, this._createData()
            }
            m(t, "laya.display.Graphics");
            var e = t.prototype;
            return e._createData = function() {}, e._clearData = function() {}, e._destroyData = function() {}, e.destroy = function() {
                this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), this._sp = null), this._destroyData()
            }, e.clear = function(t) {
                if (void 0 === t && (t = !0), t) {
                    var e = this._one;
                    if (this._cmds) {
                        var i = 0,
                            n = this._cmds.length;
                        for (i = 0; i < n; i++)
                            (e = this._cmds[i]).recover();
                        this._cmds.length = 0
                    } else
                        e && e.recover()
                } else
                    this._cmds = null;
                if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= -513, this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                    for (i = 0, n = this._vectorgraphArray.length; i < n; i++)
                        L.getInstance().deleteShape(this._vectorgraphArray[i]);
                    this._vectorgraphArray.length = 0
                }
            }, e._clearBoundsCache = function() {
                this._graphicBounds && this._graphicBounds.reset()
            }, e._initGraphicBounds = function() {
                this._graphicBounds || (this._graphicBounds = ne.create(), this._graphicBounds._graphics = this)
            }, e._repaint = function() {
                this._clearBoundsCache(), this._sp && this._sp.repaint()
            }, e._isOnlyOne = function() {
                return !this._cmds || 0 === this._cmds.length
            }, e.getBounds = function(t) {
                return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t)
            }, e.getBoundPoints = function(t) {
                return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t)
            }, e.drawImage = function(t, e, i, n, s) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), !t)
                    return null;
                if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                    var r = n / t.sourceWidth,
                        a = s / t.sourceHeight;
                    if (n = t.width * r, s = t.height * a, n <= 0 || s <= 0)
                        return null;
                    e += t.offsetX * r, i += t.offsetY * a
                }
                this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
                var o = _.create.call(this, t, e, i, n, s);
                return null == this._one ? (this._one = o, this._render = this._renderOneImg) : this._saveToCmd(null, o), this._repaint(), o
            }, e.drawTexture = function(t, e, i, n, s, r, a, o, h) {
                if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === a && (a = 1), !t || a < .01)
                    return null;
                if (!t.getIsReady())
                    return null;
                if (n || (n = t.sourceWidth), s || (s = t.sourceHeight), t.getIsReady()) {
                    var l = n / t.sourceWidth,
                        u = s / t.sourceHeight;
                    if (n = t.width * l, s = t.height * u, n <= 0 || s <= 0)
                        return null;
                    e += t.offsetX * l, i += t.offsetY * u
                }
                this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
                var c = Q.create.call(this, t, e, i, n, s, r, a, o, h);
                return this._repaint(), this._saveToCmd(null, c)
            }, e.drawTextures = function(t, e) {
                return t ? this._saveToCmd(te._context.drawTextures, bt.create.call(this, t, e)) : null
            }, e.drawTriangles = function(t, e, i, n, s, r, a, o, h, l) {
                return void 0 === o && (o = 1), this._saveToCmd(te._context.drawTriangles, w.create.call(this, t, e, i, n, s, r, a, o, h, l))
            }, e.fillTexture = function(t, e, i, n, s, r, a) {
                return void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = "repeat"), t && t.getIsReady() ? this._saveToCmd(te._context._fillTexture, l.create.call(this, t, e, i, n, s, r, a || ye.EMPTY, {})) : null
            }, e._saveToCmd = function(t, e) {
                return this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), this._repaint(), e
            }, e.clipRect = function(t, e, i, n) {
                return this._saveToCmd(te._context.clipRect, W.create.call(this, t, e, i, n))
            }, e.fillText = function(t, e, i, n, s, r) {
                return this._saveToCmd(te._context.fillText, He.create.call(this, t, e, i, n || Ji.defaultFontStr(), s, r))
            }, e.fillBorderText = function(t, e, i, n, s, r, a, o) {
                return this._saveToCmd(te._context.fillBorderText, le.create.call(this, t, e, i, n || Ji.defaultFontStr(), s, r, a, o))
            }, e.fillWords = function(t, e, i, n, s) {
                return this._saveToCmd(te._context.fillWords, gt.create.call(this, t, e, i, n || Ji.defaultFontStr(), s))
            }, e.fillBorderWords = function(t, e, i, n, s, r, a) {
                return this._saveToCmd(te._context.fillBorderWords, hi.create.call(this, t, e, i, n || Ji.defaultFontStr(), s, r, a))
            }, e.strokeText = function(t, e, i, n, s, r, a) {
                return this._saveToCmd(te._context.fillBorderText, Re.create.call(this, t, e, i, n || Ji.defaultFontStr(), null, s, r, a))
            }, e.alpha = function(t) {
                return this._saveToCmd(te._context.alpha, Ce.create.call(this, t))
            }, e.transform = function(t, e, i) {
                return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(te._context._transform, Tt.create.call(this, t, e, i))
            }, e.rotate = function(t, e, i) {
                return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(te._context._rotate, ii.create.call(this, t, e, i))
            }, e.scale = function(t, e, i, n) {
                return void 0 === i && (i = 0), void 0 === n && (n = 0), this._saveToCmd(te._context._scale, we.create.call(this, t, e, i, n))
            }, e.translate = function(t, e) {
                return this._saveToCmd(te._context.translate, ve.create.call(this, t, e))
            }, e.save = function() {
                return this._saveToCmd(te._context._save, Yt.create.call(this))
            }, e.restore = function() {
                return this._saveToCmd(te._context.restore, N.create.call(this))
            }, e.replaceText = function(t) {
                this._repaint();
                var e = this._cmds;
                if (e) {
                    for (var i = e.length - 1; - 1 < i; i--)
                        if (this._isTextCmd(e[i]))
                            return e[i].text = t, !0
                } else if (this._one && this._isTextCmd(this._one))
                    return this._one.text = t, !0;
                return !1
            }, e._isTextCmd = function(t) {
                var e = t.cmdID;
                return "FillText" == e || "StrokeText" == e || "FillBorderText" == e
            }, e.replaceTextColor = function(t) {
                this._repaint();
                var e = this._cmds;
                if (e)
                    for (var i = e.length - 1; - 1 < i; i--)
                        this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t);
                else
                    this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t)
            }, e._setTextCmdColor = function(t, e) {
                switch (t.cmdID) {
                    case "FillText":
                    case "StrokeText":
                        t.color = e;
                        break;
                    case "FillBorderText":
                    case "FillBorderWords":
                    case "FillBorderText":
                        t.fillColor = e
                }
            }, e.loadImage = function(t, e, i, n, s, r) {
                void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0);
                var a = Ai.getRes(t);
                a ? a.getIsReady() ? this.drawImage(a, e, i, n, s) : a.once("ready", this, this.drawImage, [a, e, i, n, s]) : ((a = new wi).load(t), Ai.cacheRes(t, a), a.once("ready", this, this.drawImage, [a, e, i, n, s])), null != r && (a.getIsReady() ? r.call(this._sp) : a.on("ready", this._sp, r))
            }, e._renderEmpty = function(t, e, i, n) {}, e._renderAll = function(t, e, i, n) {
                for (var s = this._cmds, r = 0, a = s.length; r < a; r++)
                    s[r].run(e, i, n)
            }, e._renderOne = function(t, e, i, n) {
                e.sprite = t, this._one.run(e, i, n)
            }, e._renderOneImg = function(t, e, i, n) {
                e.sprite = t, this._one.run(e, i, n)
            }, e.drawLine = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var a = r < 1 || r % 2 == 0 ? 0 : .5;
                return this._saveToCmd(te._context._drawLine, ft.create.call(this, t + a, e + a, i + a, n + a, s, r, 0))
            }, e.drawLines = function(t, e, i, n, s) {
                if (void 0 === s && (s = 1), !i || i.length < 4)
                    return null;
                var r = s < 1 || s % 2 == 0 ? 0 : .5;
                return this._saveToCmd(te._context._drawLines, We.create.call(this, t + r, e + r, i, n, s, 0))
            }, e.drawCurves = function(t, e, i, n, s) {
                return void 0 === s && (s = 1), this._saveToCmd(te._context.drawCurves, Ye.create.call(this, t, e, i, n, s))
            }, e.drawRect = function(t, e, i, n, s, r, a) {
                void 0 === a && (a = 1);
                var o = 1 <= a && r ? a / 2 : 0,
                    h = r ? a : 0;
                return this._saveToCmd(te._context.drawRect, nt.create.call(this, t + o, e + o, i - h, n - h, s, r, a))
            }, e.drawCircle = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var a = 1 <= r && s ? r / 2 : 0;
                return this._saveToCmd(te._context._drawCircle, wt.create.call(this, t, e, i - a, n, s, r, 0))
            }, e.drawPie = function(t, e, i, n, s, r, a, o) {
                void 0 === o && (o = 1);
                var h = 1 <= o && a ? o / 2 : 0,
                    l = a ? o : 0;
                return this._saveToCmd(te._context._drawPie, C.create.call(this, t + h, e + h, i - l, ke.toRadian(n), ke.toRadian(s), r, a, o, 0))
            }, e.drawPoly = function(t, e, i, n, s, r) {
                void 0 === r && (r = 1);
                var a = !1;
                a = !(6 < i.length);
                var o = 1 <= r && s ? r % 2 == 0 ? 0 : .5 : 0;
                return this._saveToCmd(te._context._drawPoly, X.create.call(this, t + o, e + o, i, n, s, r, a, 0))
            }, e.drawPath = function(t, e, i, n, s) {
                return this._saveToCmd(te._context._drawPath, Gt.create.call(this, t, e, i, n, s))
            }, e.draw9Grid = function(t, e, i, n, s, r) {
                void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), this._saveToCmd(null, ce.create(t, e, i, n, s, r))
            }, f(0, e, "cmds", function() {
                return this._cmds
            }, function(t) {
                this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), this._cmds = t, this._render = this._renderAll, this._repaint()
            }), t
        }(),
        Me = (function() {
            function s() {
                this.reset()
            }
            m(s, "laya.utils.HTMLChar");
            var t = s.prototype;
            t.setData = function(t, e, i, n) {
                return this.char = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e, this.height = i, this.style = n, this.isWord = !s._isWordRegExp.test(t), this
            }, t.reset = function() {
                return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, this.charNum = 0, this.style = null, this
            }, t.recover = function() {
                z.recover("HTMLChar", this.reset())
            }, t._isChar = function() {
                return !0
            }, t._getCSSStyle = function() {
                return this.style
            }, s.create = function() {
                return z.getItemByClass("HTMLChar", s)
            }, s._isWordRegExp = new RegExp("[\\w.]", "")
        }(), function() {
            function t(t, e, i) {
                this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, this._cells = null, void(this._used = 0) === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._cells = null, this._rowInfo = null, this.atlasID = i, this._init(t, e)
            }
            m(t, "laya.webgl.text.AtlasGrid");
            var e = t.prototype;
            return e.addRect = function(t, e, i, n) {
                return !!this._get(e, i, n) && (this._fill(n.x, n.y, e, i, t), this._texCount++, !0)
            }, e._release = function() {
                this._cells = null, this._rowInfo = null
            }, e._init = function(t, e) {
                return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0)
            }, e._get = function(t, e, i) {
                if (t > this._width || e > this._height)
                    return !1;
                for (var n = -1, s = -1, r = this._width, a = this._height, o = this._cells, h = 0; h < a; h++)
                    if (!(this._rowInfo[h] < t))
                        for (var l = 0; l < r;) {
                            var u = 3 * (h * r + l);
                            if (0 != o[u] || o[1 + u] < t || o[2 + u] < e)
                                l += o[1 + u];
                            else {
                                n = l, s = h;
                                for (var c = 0; c < t; c++)
                                    if (o[3 * c + u + 2] < e) {
                                        n = -1;
                                        break
                                    }
                                if (!(n < 0))
                                    return i.x = n, i.y = s, !0;
                                l += o[1 + u]
                            }
                        }
                return !1
            }, e._fill = function(t, e, i, n, s) {
                var r = this._width,
                    a = this._height;
                this._check(t + i <= r && e + n <= a);
                for (var o = e; o < n + e; ++o) {
                    this._check(this._rowInfo[o] >= i), this._rowInfo[o] -= i;
                    for (var h = 0; h < i; h++) {
                        var l = 3 * (t + o * r + h);
                        this._check(0 == this._cells[l]), this._cells[l] = s, this._cells[1 + l] = i, this._cells[2 + l] = n
                    }
                }
                if (0 < t)
                    for (o = 0; o < n; ++o) {
                        var u = 0;
                        for (h = t - 1; 0 <= h && 0 == this._cells[3 * ((e + o) * r + h)]; --h, ++u);
                        for (h = u; 0 < h; --h)
                            this._cells[3 * ((e + o) * r + t - h) + 1] = h, this._check(0 < h)
                    }
                if (0 < e)
                    for (h = t; h < t + i; ++h) {
                        for (u = 0, o = e - 1; 0 <= o && 0 == this._cells[3 * (h + o * r)]; --o, u++);
                        for (o = u; 0 < o; --o)
                            this._cells[3 * (h + (e - o) * r) + 2] = o, this._check(0 < o)
                    }
                this._used += i * n / (this._width * this._height)
            }, e._check = function(t) {
                0 == t && console.log("xtexMerger 错误啦")
            }, e._clear = function() {
                for (var t = this._texCount = 0; t < this._height; t++)
                    this._rowInfo[t] = this._width;
                for (var e = 0; e < this._height; e++)
                    for (var i = 0; i < this._width; i++) {
                        var n = 3 * (e * this._width + i);
                        this._cells[n] = 0, this._cells[1 + n] = this._width - i, this._cells[2 + n] = this._width - e
                    }
            }, t
        }()),
        Re = function() {
            function h() {}
            m(h, "laya.display.cmd.StrokeTextCmd");
            var t = h.prototype;
            return t.recover = function() {
                z.recover("StrokeTextCmd", this)
            }, t.run = function(t, e, i) {
                t.strokeWord(this.text, this.x + e, this.y + i, this.font, this.color, this.lineWidth, this.textAlign)
            }, f(0, t, "cmdID", function() {
                return "StrokeText"
            }), h.create = function(t, e, i, n, s, r, a) {
                var o = z.getItemByClass("StrokeTextCmd", h);
                return o.text = t, o.x = e, o.y = i, o.font = n, o.color = s, o.lineWidth = r, o.textAlign = a, o
            }, h.ID = "StrokeText", h
        }(),
        Ie = function() {
            function t() {}
            m(t, "laya.webgl.text.ICharRender");
            var e = t.prototype;
            return e.getWidth = function(t, e) {
                return 0
            }, e.scale = function(t, e) {}, e.getCharBmp = function(t, e, i, n, s, r, a, o, h, l, u) {
                return null
            }, f(0, e, "canvasWidth", function() {
                return 0
            }, function(t) {}), t
        }(),
        Pe = (m(De, "laya.utils.Ease"), De.linearNone = function(t, e, i, n) {
            return i * t / n + e
        }, De.linearIn = function(t, e, i, n) {
            return i * t / n + e
        }, De.linearInOut = function(t, e, i, n) {
            return i * t / n + e
        }, De.linearOut = function(t, e, i, n) {
            return i * t / n + e
        }, De.bounceIn = function(t, e, i, n) {
            return i - De.bounceOut(n - t, 0, i, n) + e
        }, De.bounceInOut = function(t, e, i, n) {
            return t < .5 * n ? .5 * De.bounceIn(2 * t, 0, i, n) + e : .5 * De.bounceOut(2 * t - n, 0, i, n) + .5 * i + e
        }, De.bounceOut = function(t, e, i, n) {
            return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
        }, De.backIn = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), i * (t /= n) * t * ((s + 1) * t - s) + e
        }, De.backInOut = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), (t /= .5 * n) < 1 ? .5 * i * (t * t * ((1 + (s *= 1.525)) * t - s)) + e : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + e
        }, De.backOut = function(t, e, i, n, s) {
            return void 0 === s && (s = 1.70158), i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + e
        }, De.elasticIn = function(t, e, i, n, s, r) {
            var a;
            return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (r || (r = .3 * n), a = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / De.PI2 * Math.asin(i / s), -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * De.PI2 / r) + e)
        }, De.elasticInOut = function(t, e, i, n, s, r) {
            var a;
            return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 2 == (t /= .5 * n) ? e + i : (r || (r = n * (.3 * 1.5)), a = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / De.PI2 * Math.asin(i / s), t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * De.PI2 / r) * -.5 + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - a) * De.PI2 / r) * .5 + i + e)
        }, De.elasticOut = function(t, e, i, n, s, r) {
            var a;
            return void 0 === s && (s = 0), void 0 === r && (r = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (r || (r = .3 * n), a = !s || 0 < i && s < i || i < 0 && s < -i ? (s = i, r / 4) : r / De.PI2 * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin((t * n - a) * De.PI2 / r) + i + e)
        }, De.strongIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e
        }, De.strongInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
        }, De.strongOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e
        }, De.sineInOut = function(t, e, i, n) {
            return .5 * -i * (Math.cos(Math.PI * t / n) - 1) + e
        }, De.sineIn = function(t, e, i, n) {
            return -i * Math.cos(t / n * De.HALF_PI) + i + e
        }, De.sineOut = function(t, e, i, n) {
            return i * Math.sin(t / n * De.HALF_PI) + e
        }, De.quintIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e
        }, De.quintInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
        }, De.quintOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e
        }, De.quartIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t + e
        }, De.quartInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e
        }, De.quartOut = function(t, e, i, n) {
            return -i * ((t = t / n - 1) * t * t * t - 1) + e
        }, De.cubicIn = function(t, e, i, n) {
            return i * (t /= n) * t * t + e
        }, De.cubicInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e
        }, De.cubicOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t + 1) + e
        }, De.quadIn = function(t, e, i, n) {
            return i * (t /= n) * t + e
        }, De.quadInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e
        }, De.quadOut = function(t, e, i, n) {
            return -i * (t /= n) * (t - 2) + e
        }, De.expoIn = function(t, e, i, n) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i
        }, De.expoInOut = function(t, e, i, n) {
            return 0 == t ? e : t == n ? e + i : (t /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e
        }, De.expoOut = function(t, e, i, n) {
            return t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e
        }, De.circIn = function(t, e, i, n) {
            return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
        }, De.circInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }, De.circOut = function(t, e, i, n) {
            return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
        }, De.HALF_PI = .5 * Math.PI, De.PI2 = 2 * Math.PI, De);

    function De() {}
    (function() {
        function n() {
            this.sign = null, this.maxCount = 1e3
        }
        m(n, "laya.utils.PoolCache");
        var t = n.prototype;
        t.getCacheList = function() {
            return z.getPoolBySign(this.sign)
        }, t.tryDispose = function(t) {
            var e;
            (e = z.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount)
        }, n.addPoolCacheManager = function(t, e) {
            var i;
            void 0 === e && (e = 100), (i = new n).sign = t, i.maxCount = e, ht.regCacheByFunction(ke.bind(i.tryDispose, i), ke.bind(i.getCacheList, i))
        }
    })(), m(Le, "laya.webgl.utils.MatirxArray"), Le.ArrayMul = function(t, e, i) {
        if (t)
            if (e)
                for (var n = NaN, s = NaN, r = NaN, a = NaN, o = 0; o < 4; o++)
                    n = t[o], s = t[o + 4], r = t[o + 8], a = t[o + 12], i[o] = n * e[0] + s * e[1] + r * e[2] + a * e[3], i[o + 4] = n * e[4] + s * e[5] + r * e[6] + a * e[7], i[o + 8] = n * e[8] + s * e[9] + r * e[10] + a * e[11], i[o + 12] = n * e[12] + s * e[13] + r * e[14] + a * e[15];
            else
                Le.copyArray(t, i);
        else
            Le.copyArray(e, i)
    }, Le.copyArray = function(t, e) {
        if (t && e)
            for (var i = 0; i < t.length; i++)
                e[i] = t[i]
    };

    function Le() {}
    m(Be, "laya.utils.Mouse"), f(1, Be, "cursor", function() {
        return Be._style.cursor
    }, function(t) {
        Be._style.cursor = t
    }), Be.hide = function() {
        "none" != Be.cursor && (Be._preCursor = Be.cursor, Be.cursor = "none")
    }, Be.show = function() {
        "none" == Be.cursor && (Be.cursor = Be._preCursor ? Be._preCursor : "auto")
    }, Be._preCursor = null, a(Be, ["_style", function() {
        return this._style = re.document.body.style
    }]);

    function Be() {}
    m(Fe, "laya.webgl.VertexArrayObject"),
        function() {
            var s = {};

            function c(t, e) {
                s[t] = !0, void 0 !== e && function(t) {
                    p.console && p.console.error && p.console.error(t)
                }(e)
            }

            function r(t) {
                var e = t.gl;
                this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, this.attribs = new Array(t.maxVertexAttribs);
                for (var i = 0; i < this.attribs.length; i++) {
                    var n = new r.VertexAttrib(e);
                    this.attribs[i] = n
                }
                this.maxAttrib = 0
            }
            (r.VertexAttrib = function(t) {
                this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, this.stride = 16, this.offset = 0, this.cached = "", this.recache()
            }).prototype.recache = function() {
                this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":")
            };

            function n(n) {
                var h = this;
                ! function(e) {
                    var i = e.getError;
                    e.getError = function() {
                        for (;
                            (t = i.apply(e)) != e.NO_ERROR && (s[t] = !0), t != e.NO_ERROR;);
                        for (var t in s)
                            if (s[t])
                                return delete s[t], parseInt(t);
                        return e.NO_ERROR
                    }
                }(this.gl = n);
                var l = this.original = {
                    getParameter: n.getParameter,
                    enableVertexAttribArray: n.enableVertexAttribArray,
                    disableVertexAttribArray: n.disableVertexAttribArray,
                    bindBuffer: n.bindBuffer,
                    getVertexAttrib: n.getVertexAttrib,
                    vertexAttribPointer: n.vertexAttribPointer
                };
                n.getParameter = function(t) {
                    return t == h.VERTEX_ARRAY_BINDING_OES ? h.currentVertexArrayObject == h.defaultVertexArrayObject ? null : h.currentVertexArrayObject : l.getParameter.apply(this, arguments)
                }, n.enableVertexAttribArray = function(t) {
                    var e = h.currentVertexArrayObject;
                    return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, l.enableVertexAttribArray.apply(this, arguments)
                }, n.disableVertexAttribArray = function(t) {
                    var e = h.currentVertexArrayObject;
                    return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, l.disableVertexAttribArray.apply(this, arguments)
                }, n.bindBuffer = function(t, e) {
                    switch (t) {
                        case n.ARRAY_BUFFER:
                            h.currentArrayBuffer = e;
                            break;
                        case n.ELEMENT_ARRAY_BUFFER:
                            h.currentVertexArrayObject.elementArrayBuffer = e
                    }
                    return l.bindBuffer.apply(this, arguments)
                }, n.getVertexAttrib = function(t, e) {
                    var i = h.currentVertexArrayObject.attribs[t];
                    switch (e) {
                        case n.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                            return i.buffer;
                        case n.VERTEX_ATTRIB_ARRAY_ENABLED:
                            return i.enabled;
                        case n.VERTEX_ATTRIB_ARRAY_SIZE:
                            return i.size;
                        case n.VERTEX_ATTRIB_ARRAY_STRIDE:
                            return i.stride;
                        case n.VERTEX_ATTRIB_ARRAY_TYPE:
                            return i.type;
                        case n.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                            return i.normalized;
                        default:
                            return l.getVertexAttrib.apply(this, arguments)
                    }
                }, n.vertexAttribPointer = function(t, e, i, n, s, r) {
                    var a = h.currentVertexArrayObject;
                    a.maxAttrib = Math.max(a.maxAttrib, t);
                    var o = a.attribs[t];
                    return o.buffer = h.currentArrayBuffer, o.size = e, o.type = i, o.normalized = n, o.stride = s, o.offset = r, o.recache(), l.vertexAttribPointer.apply(this, arguments)
                }, n.instrumentExtension && n.instrumentExtension(this, "OES_vertex_array_object"), n.canvas && n.canvas.addEventListener && n.canvas.addEventListener("webglcontextrestored", function() {
                    ! function(t) {
                        p.console && p.console.log && p.console.log(t)
                    }("OESVertexArrayObject emulation library context restored"), h.reset_()
                }, !0), this.reset_()
            }
            n.prototype.VERTEX_ARRAY_BINDING_OES = 34229, n.prototype.reset_ = function() {
                if (void 0 !== this.vertexArrayObjects)
                    for (var t = 0; t < this.vertexArrayObjects.length; ++t)
                        this.vertexArrayObjects.isAlive = !1;
                var e = this.gl;
                this.maxVertexAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new r(this), this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject], this.bindVertexArrayOES(null)
            }, n.prototype.createVertexArrayOES = function() {
                var t = new r(this);
                return this.vertexArrayObjects.push(t), t
            }, n.prototype.deleteVertexArrayOES = function(t) {
                t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), this.currentVertexArrayObject == t && this.bindVertexArrayOES(null)
            }, n.prototype.isVertexArrayOES = function(t) {
                return !!(t && t instanceof r && t.hasBeenBound && t.ext == this)
            }, n.prototype.bindVertexArrayOES = function(t) {
                var e = this.gl;
                if (!t || t.isAlive) {
                    var i = this.original,
                        n = this.currentVertexArrayObject;
                    this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                    var s = this.currentVertexArrayObject;
                    if (n != s) {
                        n && s.elementArrayBuffer == n.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, s.elementArrayBuffer);
                        for (var r = this.currentArrayBuffer, a = Math.max(n ? n.maxAttrib : 0, s.maxAttrib), o = 0; o <= a; o++) {
                            var h = s.attribs[o],
                                l = n ? n.attribs[o] : null;
                            if (n && h.enabled == l.enabled || (h.enabled ? i.enableVertexAttribArray.call(e, o) : i.disableVertexAttribArray.call(e, o)), h.enabled) {
                                var u = !1;
                                n && h.buffer == l.buffer || (r != h.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, h.buffer), r = h.buffer), u = !0), !u && h.cached == l.cached || i.vertexAttribPointer.call(e, o, h.size, h.type, h.normalized, h.stride, h.offset)
                            }
                        }
                        this.currentArrayBuffer != r && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer)
                    }
                } else
                    c(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject")
            }, p._setupVertexArrayObject = function(t) {
                var e = t.getSupportedExtensions;
                t.getSupportedExtensions = function() {
                    var t = e.call(this) || [];
                    return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), t
                };
                var i = t.getExtension;
                t.getExtension = function(t) {
                    var e = i.call(this, t);
                    return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new n(this)), this.__OESVertexArrayObject))
                }
            }, p._forceSetupVertexArrayObject = function(t) {
                var e = t.getSupportedExtensions;
                t.getSupportedExtensions = function() {
                    var t = e.call(this) || [];
                    return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), t
                };
                var i = t.getExtension;
                t.getExtension = function(t) {
                    if ("OES_vertex_array_object" === t)
                        return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new n(this)), this.__OESVertexArrayObject;
                    var e = i.call(this, t);
                    return e || null
                }
            }
        }();

    function Fe() {}
    var Oe = (m(Ne, "laya.resource.WebGLRTMgr"), Ne.getRT = function(t, e) {
        e |= 0, 1e4 <= (t |= 0) && console.error("getRT error! w too big");
        var i, n = 1e4 * e + t,
            s = Ne.dict[n];
        return s && 0 < s.length ? (i = s.pop())._mgrKey = n : (i = new dn(t, e, 1, -1))._mgrKey = n, i
    }, Ne.releaseRT = function(t) {
        if (!(t._mgrKey <= 0)) {
            var e = Ne.dict[t._mgrKey];
            e || (e = [], Ne.dict[t._mgrKey] = e), t._mgrKey = 0, e.push(t)
        }
    }, Ne.dict = {}, Ne);

    function Ne() {}
    var ke = (m(Ue, "laya.utils.Utils"), Ue.toRadian = function(t) {
        return t * Ue._pi2
    }, Ue.toAngle = function(t) {
        return t * Ue._pi
    }, Ue.toHexColor = function(t) {
        if (t < 0 || isNaN(t))
            return null;
        for (var e = t.toString(16); e.length < 6;)
            e = "0" + e;
        return "#" + e
    }, Ue.getGID = function() {
        return Ue._gid++
    }, Ue.concatArray = function(t, e) {
        if (!e)
            return t;
        if (!t)
            return e;
        var i = 0,
            n = e.length;
        for (i = 0; i < n; i++)
            t.push(e[i]);
        return t
    }, Ue.clearArray = function(t) {
        return t && (t.length = 0), t
    }, Ue.copyArray = function(t, e) {
        if (t || (t = []), !e)
            return t;
        t.length = e.length;
        var i = 0,
            n = e.length;
        for (i = 0; i < n; i++)
            t[i] = e[i];
        return t
    }, Ue.getGlobalRecByPoints = function(t, e, i, n, s) {
        var r, a;
        r = ye.create().setTo(e, i), r = t.localToGlobal(r), a = ye.create().setTo(n, s), a = t.localToGlobal(a);
        var o = Ot._getWrapRec([r.x, r.y, a.x, a.y]);
        return r.recover(), a.recover(), o
    }, Ue.getGlobalPosAndScale = function(t) {
        return Ue.getGlobalRecByPoints(t, 0, 0, 1, 1)
    }, Ue.bind = function(t, e) {
        return t.bind(e)
    }, Ue.measureText = function(t, e) {
        return qe.measureText(t, e)
    }, Ue.updateOrder = function(t) {
        if (!t || t.length < 2)
            return !1;
        for (var e, i = 1, n = 0, s = t.length, r = NaN; i < s;) {
            for (e = t[n = i], r = t[n]._zOrder; - 1 < --n && t[n]._zOrder > r;)
                t[n + 1] = t[n];
            t[n + 1] = e, i++
        }
        return !0
    }, Ue.transPointList = function(t, e, i) {
        var n = 0,
            s = t.length;
        for (n = 0; n < s; n += 2)
            t[n] += e, t[n + 1] += i
    }, Ue.parseInt = function(t, e) {
        void 0 === e && (e = 0);
        var i = re.window.parseInt(t, e);
        return isNaN(i) ? 0 : i
    }, Ue.getFileExtension = function(t) {
        Ue._extReg.lastIndex = t.lastIndexOf(".");
        var e = Ue._extReg.exec(t);
        return e && 1 < e.length ? e[1].toLowerCase() : null
    }, Ue.getTransformRelativeToWindow = function(t, e, i) {
        var n = y.stage,
            s = laya.utils.Utils.getGlobalPosAndScale(t),
            r = n._canvasTransform.clone(),
            a = r.tx,
            o = r.ty;
        r.rotate(-Math.PI / 180 * y.stage.canvasDegree), r.scale(y.stage.clientScaleX, y.stage.clientScaleY);
        var h = y.stage.canvasDegree % 180 != 0,
            l = NaN,
            u = NaN;
        h ? (l = i + s.y, u = e + s.x, l *= r.d, u *= r.a, 90 == y.stage.canvasDegree ? (l = a - l, u += o) : (l += a, u = o - u)) : (l = e + s.x, u = i + s.y, l *= r.a, u *= r.d, l += a, u += o), u += y.stage._safariOffsetY;
        var c = NaN,
            _ = NaN;
        return _ = h ? (c = r.d * s.height, r.a * s.width) : (c = r.a * s.width, r.d * s.height), {
            x: l,
            y: u,
            scaleX: c,
            scaleY: _
        }
    }, Ue.fitDOMElementInArea = function(t, e, i, n, s, r) {
        t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", t.style.position = "absolute");
        var a = Ue.getTransformRelativeToWindow(e, i, n);
        t.style.transform = t.style.webkitTransform = "scale(" + a.scaleX + "," + a.scaleY + ") rotate(" + y.stage.canvasDegree + "deg)", t.style.width = s + "px", t.style.height = r + "px", t.style.left = a.x + "px", t.style.top = a.y + "px"
    }, Ue.isOkTextureList = function(t) {
        if (!t)
            return !1;
        var e, i = 0,
            n = t.length;
        for (i = 0; i < n; i++)
            if (!(e = t[i]) || !e._getSource())
                return !1;
        return !0
    }, Ue.isOKCmdList = function(t) {
        if (!t)
            return !1;
        var e = 0,
            i = t.length;
        for (e = 0; e < i; e++)
            t[e];
        return !0
    }, Ue.getQueryString = function(t) {
        if (re.onMiniGame)
            return null;
        if (!p.location || !p.location.search)
            return null;
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
            i = p.location.search.substr(1).match(e);
        return null != i ? unescape(i[2]) : null
    }, Ue._gid = 1, Ue._pi = 180 / Math.PI, Ue._pi2 = Math.PI / 180, Ue._extReg = /\.(\w+)\??/g, Ue.parseXMLFromString = function(t) {
        var e;
        if (t = t.replace(/>\s+</g, "><"), -1 < (e = (new DOMParser).parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors"))
            throw new Error(e.firstChild.firstChild.textContent);
        return e
    }, Ue);

    function Ue() {}! function() {
        function n() {}
        m(n, "laya.webgl.text.ArabicReshaper");
        var t = n.prototype;
        t.characterMapContains = function(t) {
            for (var e = 0; e < n.charsMap.length; ++e)
                if (n.charsMap[e][0] === t)
                    return !0;
            return !1
        }, t.getCharRep = function(t) {
            for (var e = 0; e < n.charsMap.length; ++e)
                if (n.charsMap[e][0] === t)
                    return n.charsMap[e];
            return !1
        }, t.getCombCharRep = function(t, e) {
            for (var i = 0; i < n.combCharsMap.length; ++i)
                if (n.combCharsMap[i][0][0] === t && n.combCharsMap[i][0][1] === e)
                    return n.combCharsMap[i];
            return !1
        }, t.isTransparent = function(t) {
            for (var e = 0; e < n.transChars.length; ++e)
                if (n.transChars[e] === t)
                    return !0;
            return !1
        }, t.getOriginalCharsFromCode = function(t) {
            var e = 0;
            for (e = 0; e < n.charsMap.length; ++e)
                if (-1 < n.charsMap[e].indexOf(t))
                    return String.fromCharCode(n.charsMap[e][0]);
            for (e = 0; e < n.combCharsMap.length; ++e)
                if (-1 < n.combCharsMap[e].indexOf(t))
                    return String.fromCharCode(n.combCharsMap[e][0][0]) + String.fromCharCode(n.combCharsMap[e][0][1]);
            return String.fromCharCode(t)
        }, t.convertArabic = function(t) {
            for (var e, i, n = "", s = 0; s < t.length; ++s) {
                var r = t.charCodeAt(s);
                if (this.characterMapContains(r)) {
                    for (var a = null, o = null, h = s - 1, l = s + 1; 0 <= h && this.isTransparent(t.charCodeAt(h)); --h);
                    for ((e = !!(a = 0 <= h ? t.charCodeAt(h) : null) && this.getCharRep(a)) && (null != e[2] || null != e[3]) || (a = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l);
                    if ((e = !!(o = l < t.length ? t.charCodeAt(l) : null) && this.getCharRep(o)) && (null != e[3] || null != e[4]) || (o = null), 1604 === r && null != o && (1570 === o || 1571 === o || 1573 === o || 1575 === o)) {
                        i = this.getCombCharRep(r, o), n += null != a ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), ++s;
                        continue
                    }
                    if (e = this.getCharRep(r), null != a && null != o && null != e[3]) {
                        n += String.fromCharCode(e[3]);
                        continue
                    }
                    if (null != a && null != e[4]) {
                        n += String.fromCharCode(e[4]);
                        continue
                    }
                    if (null != o && null != e[2]) {
                        n += String.fromCharCode(e[2]);
                        continue
                    }
                    n += String.fromCharCode(e[1])
                } else
                    n += String.fromCharCode(r)
            }
            return n
        }, t.convertArabicBack = function(t) {
            var e = "",
                i = 0,
                n = 0;
            for (n = 0; n < t.length; ++n)
                i = t.charCodeAt(n), e += this.getOriginalCharsFromCode(i);
            return e
        }, a(n, ["charsMap", function() {
            return this.charsMap = [
                [1569, 65152, null, null, null],
                [1570, 65153, null, null, 65154],
                [1571, 65155, null, null, 65156],
                [1572, 65157, null, null, 65158],
                [1573, 65159, null, null, 65160],
                [1574, 65161, 65163, 65164, 65162],
                [1575, 65165, null, null, 65166],
                [1576, 65167, 65169, 65170, 65168],
                [1577, 65171, null, null, 65172],
                [1578, 65173, 65175, 65176, 65174],
                [1579, 65177, 65179, 65180, 65178],
                [1580, 65181, 65183, 65184, 65182],
                [1581, 65185, 65187, 65188, 65186],
                [1582, 65189, 65191, 65192, 65190],
                [1583, 65193, null, null, 65194],
                [1584, 65195, null, null, 65196],
                [1585, 65197, null, null, 65198],
                [1586, 65199, null, null, 65200],
                [1587, 65201, 65203, 65204, 65202],
                [1588, 65205, 65207, 65208, 65206],
                [1589, 65209, 65211, 65212, 65210],
                [1590, 65213, 65215, 65216, 65214],
                [1591, 65217, 65219, 65220, 65218],
                [1592, 65221, 65223, 65224, 65222],
                [1593, 65225, 65227, 65228, 65226],
                [1594, 65229, 65231, 65232, 65230],
                [1600, 1600, 1600, 1600, 1600],
                [1601, 65233, 65235, 65236, 65234],
                [1602, 65237, 65239, 65240, 65238],
                [1603, 65241, 65243, 65244, 65242],
                [1604, 65245, 65247, 65248, 65246],
                [1605, 65249, 65251, 65252, 65250],
                [1606, 65253, 65255, 65256, 65254],
                [1607, 65257, 65259, 65260, 65258],
                [1608, 65261, null, null, 65262],
                [1609, 65263, null, null, 65264],
                [1610, 65265, 65267, 65268, 65266],
                [1662, 64342, 64344, 64345, 64343],
                [1740, 64508, 64510, 64511, 64509],
                [1670, 64378, 64380, 64381, 64379],
                [1705, 64398, 64400, 64401, 64399],
                [1711, 64402, 64404, 64405, 64403],
                [1688, 64394, null, null, 64395]
            ]
        }, "combCharsMap", function() {
            return this.combCharsMap = [
                [
                    [1604, 1570], 65269, null, null, 65270
                ],
                [
                    [1604, 1571], 65271, null, null, 65272
                ],
                [
                    [1604, 1573], 65273, null, null, 65274
                ],
                [
                    [1604, 1575], 65275, null, null, 65276
                ]
            ]
        }, "transChars", function() {
            return this.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773]
        }])
    }();
    var We = function() {
            function o() {}
            m(o, "laya.display.cmd.DrawLinesCmd");
            var t = o.prototype;
            return t.recover = function() {
                this.points = null, this.lineColor = null, z.recover("DrawLinesCmd", this)
            }, t.run = function(t, e, i) {
                t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid)
            }, f(0, t, "cmdID", function() {
                return "DrawLines"
            }), o.create = function(t, e, i, n, s, r) {
                var a = z.getItemByClass("DrawLinesCmd", o);
                return a.x = t, a.y = e, a.points = i, a.lineColor = n, a.lineWidth = s, a.vid = r, a
            }, o.ID = "DrawLines", o
        }(),
        Ve = function() {
            function a() {
                this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1, this._enbale = !1, this._colorFiler = null, this._clipMatrix = new vt
            }
            m(a, "laya.webgl.text.CharSubmitCache");
            var t = a.prototype;
            return t.clear = function() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null
            }, t.destroy = function() {
                this.clear(), this._data.length = 0, this._data = null
            }, t.add = function(t, e, i, n, s, r) {
                0 < this._ndata && (this._tex != e || this._imgId != i || 0 <= this._clipid && this._clipid != t._clipInfoID) && this.submit(t), this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = n, this._data[this._ndata + 1] = s, this._data[this._ndata + 2] = r, this._ndata += 3
            }, t.getPos = function() {
                return 0 == a.__nPosPool ? new Array(8) : a.__posPool[--a.__nPosPool]
            }, t.enable = function(t, e) {
                t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e))
            }, t.submit = function(t) {
                var e = this._ndata;
                if (e) {
                    var i = t._mesh,
                        n = t._colorFiler;
                    t._colorFiler = this._colorFiler;
                    var s = _i.create(t, i, Z.create(1, 0));
                    t._submits[t._submits._length++] = t._curSubmit = s, s.shaderValue.textureHost = this._tex, s._key.other = this._imgId, t._colorFiler = n, t._copyClipInfo(s, this._clipMatrix), s.clipInfoID = this._clipid;
                    for (var r = 0; r < e; r += 3)
                        i.addQuad(this._data[r], this._data[r + 1], this._data[r + 2], !0), a.__posPool[a.__nPosPool++] = this._data[r];
                    e /= 3, s._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e, this._ndata = 0, R.loopCount % 100 == 0 && (this._data.length = 0)
                }
            }, a.__posPool = [], a.__nPosPool = 0, a
        }(),
        Ge = (m(Xe, "Config"), Xe.animationInterval = 50, Xe.isAntialias = !1, Xe.isAlpha = !1, Xe.premultipliedAlpha = !0, Xe.isStencil = !0, Xe.preserveDrawingBuffer = !1, Xe.webGL2D_MeshAllocMaxMem = !0, Xe.is2DPixelArtGame = !1, Xe.useWebGL2 = !1, Xe.useRetinalCanvas = !1, Xe);

    function Xe() {}
    var Ye = function() {
            function a() {}
            m(a, "laya.display.cmd.DrawCurvesCmd");
            var t = a.prototype;
            return t.recover = function() {
                this.points = null, this.lineColor = null, z.recover("DrawCurvesCmd", this)
            }, t.run = function(t, e, i) {
                t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth)
            }, f(0, t, "cmdID", function() {
                return "DrawCurves"
            }), a.create = function(t, e, i, n, s) {
                var r = z.getItemByClass("DrawCurvesCmd", a);
                return r.x = t, r.y = e, r.points = i, r.lineColor = n, r.lineWidth = s, r
            }, a.ID = "DrawCurves", a
        }(),
        He = function() {
            function o() {
                this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, this._nTexAlign = 0, this._fontObj = o._defFontObj
            }
            m(o, "laya.display.cmd.FillTextCmd");
            var t = o.prototype;
            return t.recover = function() {
                z.recover("FillTextCmd", this)
            }, t.run = function(t, e, i) {
                y.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._textIsWorldText ? t._fast_filltext(this._text, this.x + e, this.y + i, this._fontObj, this._color, null, 0, this._nTexAlign, 0) : t.drawText(this._text, this.x + e, this.y + i, this._font, this._color, this._textAlign)
            }, f(0, t, "text", function() {
                return this._text
            }, function(t) {
                this._text = t, this._textIsWorldText = t instanceof laya.utils.WordText, this._textIsWorldText && this._text.cleanCache()
            }), f(0, t, "cmdID", function() {
                return "FillText"
            }), f(0, t, "color", function() {
                return this._color
            }, function(t) {
                this._color = t, this._fontColor = v.create(t).numColor, this._textIsWorldText && this._text.cleanCache()
            }), f(0, t, "font", function() {
                return this._font
            }, function(t) {
                this._font = t, this._fontObj = ni.Parse(t), this._textIsWorldText && this._text.cleanCache()
            }), f(0, t, "textAlign", function() {
                return this._textAlign
            }, function(t) {
                switch (this._textAlign = t) {
                    case "center":
                        this._nTexAlign = Ct.ENUM_TEXTALIGN_CENTER;
                        break;
                    case "right":
                        this._nTexAlign = Ct.ENUM_TEXTALIGN_RIGHT;
                        break;
                    default:
                        this._nTexAlign = Ct.ENUM_TEXTALIGN_DEFAULT
                }
                this._textIsWorldText && this._text.cleanCache()
            }), o.create = function(t, e, i, n, s, r) {
                var a = z.getItemByClass("FillTextCmd", o);
                return a.text = t, a._textIsWorldText = t instanceof laya.utils.WordText, a.x = e, a.y = i, a.font = n, a.color = s, a.textAlign = r, a
            }, o.ID = "FillText", a(o, ["_defFontObj", function() {
                return this._defFontObj = new ni(null)
            }]), o
        }();
    m(ze, "laya.webgl.shader.ShaderValue");

    function ze() {}
    m(je, "laya.events.KeyLocation"), je.STANDARD = 0, je.LEFT = 1, je.RIGHT = 2, je.NUM_PAD = 3;

    function je() {}
    var Ke = function() {
            function s() {
                this._clipInfoID = -1, this.incache = !1, this._globalClipMatrix = new vt, this._clipRect = new Ot
            }
            m(s, "laya.webgl.canvas.save.SaveClipRect");
            var t = s.prototype;
            return y.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1
            }, t.restore = function(t) {
                this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect), t._clipInfoID = this._clipInfoID, s.POOL[s.POOL._length++] = this, t._clipInCache = this.incache
            }, s.save = function(t) {
                if (131072 != (131072 & t._saveMark._saveuse)) {
                    t._saveMark._saveuse |= 131072;
                    var e = s.POOL,
                        i = 0 < e._length ? e[--e._length] : new s;
                    t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect), i._clipInfoID = t._clipInfoID, i.incache = t._clipInCache;
                    var n = t._save;
                    n[n._length++] = i
                }
            }, s.POOL = o._createArray(), s
        }(),
        $e = function() {
            function t() {}
            m(t, "laya.filters.GlowFilterGLRender");
            var e = t.prototype;
            return e.setShaderInfo = function(t, e, i, n) {
                t.defines.add(n.type);
                var s = t;
                s.u_blurInfo1 = n._sv_blurInfo1;
                var r = n._sv_blurInfo2;
                r[0] = e, r[1] = i, s.u_blurInfo2 = r, s.u_color = n.getColor()
            }, e.render = function(t, e, i, n, s) {
                var r = i,
                    a = n,
                    o = Z.create(1, 0);
                this.setShaderInfo(o, r, a, s);
                var h = Z.create(1, 0),
                    l = vt.TEMP.identity();
                e.drawTarget(t, 0, 0, r, a, l, o), e.drawTarget(t, 0, 0, r, a, l, h)
            }, t
        }(),
        qe = (m(Qe, "laya.utils.RunDriver"), Qe.createShaderCondition = function(t) {
            var e = "(function() {return " + t + ";})";
            return y._runScript(e)
        }, Qe.fontMap = [], Qe.measureText = function(t, e) {
            var i = Qe.hanzi.test(t);
            if (i && Qe.fontMap[e])
                return Qe.fontMap[e];
            var n = re.context;
            n.font = e;
            var s = n.measureText(t);
            return i && (Qe.fontMap[e] = s), s
        }, Qe.drawToCanvas = function(t, e, i, n, s, r) {
            s -= t.x, r -= t.y, s |= 0, r |= 0, i |= 0, n |= 0;
            var a = new Ct;
            a.size(i, n), a.asBitmap = !0, a._targets.start(), O.renders[e]._fun(t, a, s, r), a.flush(), a._targets.end(), a._targets.restore();
            var o = a._targets.getData(0, 0, i, n);
            a.destroy();
            for (var h = new ImageData(i, n), l = 4 * i, u = (new Uint8Array(l), h.data), c = n - 1, _ = c * l, d = 0; 0 <= c; c--)
                u.set(o.subarray(d, d + l), _), _ -= l, d += l;
            var f = new sn(!0);
            return f.size(i, n), f.getContext("2d").putImageData(h, 0, 0), f
        }, Qe.drawToTexture = function(t, e, i, n, s, r) {
            s -= t.x, r -= t.y, s |= 0, r |= 0, i |= 0, n |= 0;
            var a = new Ct;
            a.size(i, n), a.asBitmap = !0, a._targets.start(), O.renders[e]._fun(t, a, s, r), a.flush(), a._targets.end(), a._targets.restore();
            var o = new wi(a._targets, wi.INV_UV);
            return a.destroy(!0), o
        }, Qe.changeWebGLSize = function(t, e) {
            jt.onStageResize(t, e)
        }, Qe.clear = function(t) {
            Ct.set2DRenderConfig(), It.worldScissorTest && jt.mainContext.disable(3089);
            var e = te.context,
                i = 0 == e._submits._length || Ge.preserveDrawingBuffer ? v.create(t).arrColor : y.stage._wgColor;
            i ? e.clearBG(i[0], i[1], i[2], i[3]) : e.clearBG(0, 0, 0, 0), It.clear()
        }, Qe.enableNative = null, a(Qe, ["hanzi", function() {
            return this.hanzi = new RegExp("^[一-龥]$")
        }]), Qe);

    function Qe() {}
    var Ze = (m(Je, "laya.net.AtlasInfoManager"), Je.enable = function(t, e) {
        y.loader.load(t, b.create(null, Je._onInfoLoaded, [e]), null, "json")
    }, Je._onInfoLoaded = function(t, e) {
        var i, n, s, r = 0,
            a = 0;
        for (i in e)
            for (n = (s = e[i])[0], a = (s = s[1]).length, r = 0; r < a; r++)
                Je._fileLoadDic[n + s[r]] = i;
        t && t.run()
    }, Je.getFileLoadPath = function(t) {
        return Je._fileLoadDic[t] || t
    }, Je._fileLoadDic = {}, Je);

    function Je() {}
    var ti = (m(ei, "laya.webgl.canvas.BlendMode"), ei._init_ = function(t) {
        ei.fns = [ei.BlendNormal, ei.BlendAdd, ei.BlendMultiply, ei.BlendScreen, ei.BlendOverlay, ei.BlendLight, ei.BlendMask, ei.BlendDestinationOut], ei.targetFns = [ei.BlendNormalTarget, ei.BlendAddTarget, ei.BlendMultiplyTarget, ei.BlendScreenTarget, ei.BlendOverlayTarget, ei.BlendLightTarget, ei.BlendMask, ei.BlendDestinationOut]
    }, ei.BlendNormal = function(t) {
        pt.setBlendFunc(t, 1, 771)
    }, ei.BlendAdd = function(t) {
        pt.setBlendFunc(t, 1, 772)
    }, ei.BlendMultiply = function(t) {
        pt.setBlendFunc(t, 774, 771)
    }, ei.BlendScreen = function(t) {
        pt.setBlendFunc(t, 1, 1)
    }, ei.BlendOverlay = function(t) {
        pt.setBlendFunc(t, 1, 769)
    }, ei.BlendLight = function(t) {
        pt.setBlendFunc(t, 1, 1)
    }, ei.BlendNormalTarget = function(t) {
        pt.setBlendFunc(t, 1, 771)
    }, ei.BlendAddTarget = function(t) {
        pt.setBlendFunc(t, 1, 772)
    }, ei.BlendMultiplyTarget = function(t) {
        pt.setBlendFunc(t, 774, 771)
    }, ei.BlendScreenTarget = function(t) {
        pt.setBlendFunc(t, 1, 1)
    }, ei.BlendOverlayTarget = function(t) {
        pt.setBlendFunc(t, 1, 769)
    }, ei.BlendLightTarget = function(t) {
        pt.setBlendFunc(t, 1, 1)
    }, ei.BlendMask = function(t) {
        pt.setBlendFunc(t, 0, 770)
    }, ei.BlendDestinationOut = function(t) {
        pt.setBlendFunc(t, 0, 0)
    }, ei.activeBlendFunction = null, ei.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"], ei.TOINT = {
        normal: 0,
        add: 1,
        multiply: 2,
        screen: 3,
        overlay: 4,
        light: 5,
        mask: 6,
        "destination-out": 7,
        lighter: 1
    }, ei.NORMAL = "normal", ei.ADD = "add", ei.MULTIPLY = "multiply", ei.SCREEN = "screen", ei.OVERLAY = "overlay", ei.LIGHT = "light", ei.MASK = "mask", ei.DESTINATIONOUT = "destination-out", ei.LIGHTER = "lighter", ei.fns = [], ei.targetFns = [], ei);

    function ei() {}
    var ii = function() {
            function s() {}
            m(s, "laya.display.cmd.RotateCmd");
            var t = s.prototype;
            return t.recover = function() {
                z.recover("RotateCmd", this)
            }, t.run = function(t, e, i) {
                t._rotate(this.angle, this.pivotX + e, this.pivotY + i)
            }, f(0, t, "cmdID", function() {
                return "Rotate"
            }), s.create = function(t, e, i) {
                var n = z.getItemByClass("RotateCmd", s);
                return n.angle = t, n.pivotX = e, n.pivotY = i, n
            }, s.ID = "Rotate", s
        }(),
        ni = (m(si, "laya.utils.FontInfo"), si.prototype.setFont = function(t) {
            var e = (this._font = t).split(" "),
                i = e.length;
            if (i < 2)
                1 == i && 0 < e[0].indexOf("px") && (this._size = parseInt(e[0]));
            else {
                for (var n = -1, s = 0; s < i; s++)
                    if (0 < e[s].indexOf("px") || 0 < e[s].indexOf("pt")) {
                        n = s, this._size = parseInt(e[s]), this._size <= 0 && (console.error("font parse error:" + t), this._size = 14);
                        break
                    }
                var r = n + 1,
                    a = e[r];
                for (r++; r < i; r++)
                    a += " " + e[r];
                this._family = a.split(",")[0], this._italic = 0 <= e.indexOf("italic"), this._bold = 0 <= e.indexOf("bold")
            }
        }, si.Parse = function(t) {
            if (t === si._lastFont)
                return si._lastFontInfo;
            var e = si._cache[t];
            return e || (e = si._cache[t] = new si(t)), si._lastFont = t, si._lastFontInfo = e
        }, si.EMPTY = new si(null), si._cache = {}, si._gfontID = 0, si._lastFont = "", si._lastFontInfo = null, si);

    function si(t) {
        this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, this._bold = !1, this._id = si._gfontID++, this.setFont(t || this._font)
    }
    var ri = function() {
            function v(t, e, i, n) {
                this._clearCR = new RegExp("\r", "g");
                var s = this;

                function r(t) {
                    t = t.replace(s._clearCR, "");
                    var e = [],
                        i = new ge(e);
                    return s._compileToTree(i, t.split("\n"), 0, e, n), i
                }
                var a = re.now();
                this._VS = r(t), this._PS = r(e), this._nameMap = i, 2 < re.now() - a && console.log("ShaderCompile use time:" + (re.now() - a) + "  size:" + t.length + "/" + e.length)
            }
            m(v, "laya.webgl.utils.ShaderCompile");
            var t = v.prototype;
            return t._compileToTree = function(t, e, i, n, s) {
                var r, a, o, h, l, u, c, _ = 0,
                    d = 0,
                    f = 0,
                    p = 0;
                for (d = i; d < e.length; d++)
                    if (!((o = e[d]).length < 1) && 0 !== (_ = o.indexOf("//"))) {
                        if (0 <= _ && (o = o.substr(0, _)), r = c || new ge(n), c = null, r.text = o, r.noCompile = !0, 0 <= (_ = o.indexOf("#"))) {
                            for (h = "#", p = _ + 1, f = o.length; p < f; p++) {
                                var m = o.charAt(p);
                                if (" " === m || "\t" === m || "?" === m)
                                    break;
                                h += m
                            }
                            switch (r.name = h) {
                                case "#ifdef":
                                case "#ifndef":
                                    if (r.src = o, r.noCompile = null != o.match(/[!&|()=<>]/), r.noCompile ? console.log("function():Boolean{return " + o.substr(_ + r.name.length) + "}") : (u = o.replace(/^\s*/, "").split(/\s+/), r.setCondition(u[1], "#ifdef" === h ? 1 : 2), r.text = "//" + r.text), r.setParent(t), t = r, s)
                                        for (u = o.substr(p).split(v._splitToWordExps3), p = 0; p < u.length; p++)
                                            (o = u[p]).length && (s[o] = !0);
                                    continue;
                                case "#if":
                                    if (r.src = o, r.noCompile = !0, r.setParent(t), t = r, s)
                                        for (u = o.substr(p).split(v._splitToWordExps3), p = 0; p < u.length; p++)
                                            (o = u[p]).length && "defined" != o && (s[o] = !0);
                                    continue;
                                case "#else":
                                    r.src = o, a = (t = t.parent).childs[t.childs.length - 1], r.noCompile = a.noCompile, r.noCompile || (r.condition = a.condition, r.conditionType = 1 == a.conditionType ? 2 : 1, r.text = "//" + r.text + " " + a.text + " " + r.conditionType), r.setParent(t), t = r;
                                    continue;
                                case "#endif":
                                    a = (t = t.parent).childs[t.childs.length - 1], r.noCompile = a.noCompile, r.noCompile || (r.text = "//" + r.text), r.setParent(t);
                                    continue;
                                case "#include":
                                    u = v.splitToWords(o, null);
                                    var g = v.includes[u[1]];
                                    if (!g)
                                        throw "ShaderCompile error no this include file:" + u[1];
                                    if ((_ = u[0].indexOf("?")) < 0) {
                                        r.setParent(t), o = g.getWith("with" == u[2] ? u[3] : null), this._compileToTree(r, o.split("\n"), 0, n, s), r.text = "";
                                        continue
                                    }
                                    r.setCondition(u[0].substr(_ + 1), 1), r.text = g.getWith("with" == u[2] ? u[3] : null);
                                    break;
                                case "#import":
                                    l = (u = v.splitToWords(o, null))[1], n.push({
                                        node: r,
                                        file: v.includes[l],
                                        ofs: r.text.length
                                    });
                                    continue
                            }
                        } else {
                            if ((a = t.childs[t.childs.length - 1]) && !a.name) {
                                0 < n.length && v.splitToWords(o, a), c = r, a.text += "\n" + o;
                                continue
                            }
                            0 < n.length && v.splitToWords(o, r)
                        }
                        r.setParent(t)
                    }
            }, t.createShader = function(t, e, i, n) {
                var s = {},
                    r = "";
                if (t)
                    for (var a in t)
                        r += "#define " + a + "\n", s[a] = !0;
                var o = this._VS.toscript(s, []),
                    h = this._PS.toscript(s, []);
                return (i || en.create)(r + o.join("\n"), r + h.join("\n"), e, this._nameMap, n)
            }, v._parseOne = function(t, e, i, n, s, r) {
                var a = {
                    type: v.shaderParamsMap[i[n + 1]],
                    name: i[n + 2],
                    size: isNaN(parseInt(i[n + 3])) ? 1 : parseInt(i[n + 3])
                };
                return r && ("attribute" == s ? t.push(a) : e.push(a)), ":" == i[n + 3] && (a.type = i[n + 4], n += 2), n += 2
            }, v.addInclude = function(t, e) {
                if (!e || 0 === e.length)
                    throw new Error("add shader include file err:" + t);
                if (v.includes[t])
                    throw new Error("add shader include file err, has add:" + t);
                v.includes[t] = new K(e)
            }, v.preGetParams = function(t, e) {
                var i = [t, e],
                    n = {},
                    s = [],
                    r = [],
                    a = {},
                    o = [];
                n.attributes = s, n.uniforms = r, n.defines = a;
                for (var h = 0, l = 0, u = 0; u < 2; u++) {
                    i[u] = i[u].replace(v._removeAnnotation, "");
                    var c, _ = i[u].match(v._reg);
                    for (h = 0, l = _.length; h < l; h++) {
                        var d = _[h];
                        if ("attribute" == d || "uniform" == d)
                            h = v._parseOne(s, r, _, h, d, !0);
                        else {
                            if ("#define" == d) {
                                o[d = _[++h]] = 1;
                                continue
                            }
                            if ("#ifdef" == d) {
                                a[c = _[++h]] = a[c] || [];
                                for (h++; h < l; h++)
                                    if ("attribute" == (d = _[h]) || "uniform" == d)
                                        h = v._parseOne(s, r, _, h, d, o[c]);
                                    else if ("#else" == d)
                                    for (h++; h < l; h++)
                                        if ("attribute" == (d = _[h]) || "uniform" == d)
                                            h = v._parseOne(s, r, _, h, d, !o[c]);
                                        else if ("#endif" == d)
                                    break
                            }
                        }
                    }
                }
                return n
            }, v.splitToWords = function(t, e) {
                for (var i, n, s = [], r = -1, a = 0, o = t.length; a < o; a++)
                    if (i = t.charAt(a), 0 <= " \t=+-*/&%!<>()'\",;".indexOf(i)) {
                        if (0 <= r && 1 < a - r && (n = t.substr(r, a - r), s.push(n)), '"' == i || "'" == i) {
                            var h = t.indexOf(i, a + 1);
                            if (h < 0)
                                throw "Sharder err:" + t;
                            s.push(t.substr(a + 1, h - a - 1)), a = h, r = -1;
                            continue
                        }
                        "(" == i && e && 0 < s.length && (n = s[s.length - 1] + ";", "vec4;main;".indexOf(n) < 0 && (e.useFuns += n)), r = -1
                    } else
                        r < 0 && (r = a);
                return r < o && 1 < o - r && (n = t.substr(r, o - r), s.push(n)), s
            }, v.IFDEF_NO = 0, v.IFDEF_YES = 1, v.IFDEF_ELSE = 2, v.IFDEF_PARENT = 3, v._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), v._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), v._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), v.includes = {}, a(v, ["shaderParamsMap", function() {
                return this.shaderParamsMap = {
                    float: 5126,
                    int: 5124,
                    bool: 35670,
                    vec2: 35664,
                    vec3: 35665,
                    vec4: 35666,
                    ivec2: 35667,
                    ivec3: 35668,
                    ivec4: 35669,
                    bvec2: 35671,
                    bvec3: 35672,
                    bvec4: 35673,
                    mat2: 35674,
                    mat3: 35675,
                    mat4: 35676,
                    sampler2D: 35678,
                    samplerCube: 35680
                }
            }, "_splitToWordExps3", function() {
                return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g")
            }]), v
        }(),
        ai = (m(oi, "laya.components.Prefab"), oi.prototype.create = function() {
            return this.json ? Bt.createByData(null, this.json) : null
        }, oi);

    function oi() {
        this.json = null
    }
    var hi = function() {
            function h() {}
            m(h, "laya.display.cmd.FillBorderWordsCmd");
            var t = h.prototype;
            return t.recover = function() {
                this.words = null, z.recover("FillBorderWordsCmd", this)
            }, t.run = function(t, e, i) {
                t.fillBorderWords(this.words, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth)
            }, f(0, t, "cmdID", function() {
                return "FillBorderWords"
            }), h.create = function(t, e, i, n, s, r, a) {
                var o = z.getItemByClass("FillBorderWordsCmd", h);
                return o.words = t, o.x = e, o.y = i, o.font = n, o.fillColor = s, o.borderColor = r, o.lineWidth = a, o
            }, h.ID = "FillBorderWords", h
        }(),
        li = function() {
            function c() {
                this._hit = null, this._unHit = null
            }
            m(c, "laya.utils.HitArea");
            var t = c.prototype;
            return t.contains = function(t, e) {
                return !!c._isHitGraphic(t, e, this.hit) && !c._isHitGraphic(t, e, this.unHit)
            }, f(0, t, "hit", function() {
                return this._hit || (this._hit = new Se), this._hit
            }, function(t) {
                this._hit = t
            }), f(0, t, "unHit", function() {
                return this._unHit || (this._unHit = new Se), this._unHit
            }, function(t) {
                this._unHit = t
            }), c._isHitGraphic = function(t, e, i) {
                if (!i)
                    return !1;
                var n = i.cmds;
                if (!n && i._one && ((n = c._cmds).length = 1, n[0] = i._one), !n)
                    return !1;
                var s, r, a = 0;
                for (s = n.length, a = 0; a < s; a++)
                    if (r = n[a]) {
                        switch (r.cmdID) {
                            case "Translate":
                                t -= r.tx, e -= r.ty
                        }
                        if (c._isHitCmd(t, e, r))
                            return !0
                    }
                return !1
            }, c._isHitCmd = function(t, e, i) {
                if (!i)
                    return !1;
                var n = !1;
                switch (i.cmdID) {
                    case "DrawRect":
                        c._rect.setTo(i.x, i.y, i.width, i.height), n = c._rect.contains(t, e);
                        break;
                    case "DrawCircle":
                        n = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                        break;
                    case "DrawPoly":
                        t -= i.x, e -= i.y, n = c._ptInPolygon(t, e, i.points)
                }
                return n
            }, c._ptInPolygon = function(t, e, i) {
                var n = c._ptPoint;
                n.setTo(t, e);
                var s, r = 0,
                    a = NaN,
                    o = NaN,
                    h = NaN,
                    l = NaN;
                s = i.length;
                for (var u = 0; u < s; u += 2) {
                    if (a = i[u], o = i[u + 1], h = i[(u + 2) % s], o != (l = i[(u + 3) % s]))
                        if (!(n.y < Math.min(o, l)))
                            if (!(n.y >= Math.max(o, l)))
                                (n.y - o) * (h - a) / (l - o) + a > n.x && r++
                }
                return r % 2 == 1
            }, c._cmds = [], a(c, ["_rect", function() {
                return this._rect = new Ot
            }, "_ptPoint", function() {
                return this._ptPoint = new ye
            }]), c
        }(),
        ui = (m(ci, "laya.media.SoundManager"), f(1, ci, "useAudioMusic", function() {
            return ci._useAudioMusic
        }, function(t) {
            ci._useAudioMusic = t, ci._musicClass = t ? pi : null
        }), f(1, ci, "autoStopMusic", function() {
            return ci._autoStopMusic
        }, function(t) {
            y.stage.off("blur", null, ci._stageOnBlur), y.stage.off("focus", null, ci._stageOnFocus), y.stage.off("visibilitychange", null, ci._visibilityChange), (ci._autoStopMusic = t) && (y.stage.on("blur", null, ci._stageOnBlur), y.stage.on("focus", null, ci._stageOnFocus), y.stage.on("visibilitychange", null, ci._visibilityChange))
        }), f(1, ci, "muted", function() {
            return ci._muted
        }, function(t) {
            t != ci._muted && (t && ci.stopAllSound(), ci.musicMuted = t, ci._muted = t)
        }), f(1, ci, "musicMuted", function() {
            return ci._musicMuted
        }, function(t) {
            t != ci._musicMuted && (t ? (ci._bgMusic && ci._musicChannel && !ci._musicChannel.isStopped ? te.isConchApp ? ci._musicChannel._audio && (ci._musicChannel._audio.muted = !0) : ci._musicChannel.pause() : ci._musicChannel = null, ci._musicMuted = t) : (ci._musicMuted = t, ci._bgMusic && ci._musicChannel && (te.isConchApp ? ci._musicChannel._audio && (ci._musicChannel._audio.muted = !1) : ci._musicChannel.resume())))
        }), f(1, ci, "soundMuted", function() {
            return ci._soundMuted
        }, function(t) {
            ci._soundMuted = t
        }), ci.__init__ = function() {
            var t = re.window,
                e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
            return e && Mi.initWebAudio(), ci._soundClass = e ? Mi : pi, pi._initMusicAudio(), ci._musicClass = pi, e
        }, ci.addChannel = function(t) {
            0 <= ci._channels.indexOf(t) || ci._channels.push(t)
        }, ci.removeChannel = function(t) {
            var e = 0;
            for (e = ci._channels.length - 1; 0 <= e; e--)
                ci._channels[e] == t && ci._channels.splice(e, 1)
        }, ci.disposeSoundLater = function(t) {
            ci._lastSoundUsedTimeDic[t] = re.now(), ci._isCheckingDispose || (ci._isCheckingDispose = !0, y.timer.loop(5e3, null, ci._checkDisposeSound))
        }, ci._checkDisposeSound = function() {
            var t, e = re.now(),
                i = !1;
            for (t in ci._lastSoundUsedTimeDic)
                3e4 < e - ci._lastSoundUsedTimeDic[t] ? (delete ci._lastSoundUsedTimeDic[t], ci.disposeSoundIfNotUsed(t)) : i = !0;
            i || (ci._isCheckingDispose = !1, y.timer.clear(null, ci._checkDisposeSound))
        }, ci.disposeSoundIfNotUsed = function(t) {
            var e = 0;
            for (e = ci._channels.length - 1; 0 <= e; e--)
                if (ci._channels[e].url == t)
                    return;
            ci.destroySound(t)
        }, ci._visibilityChange = function() {
            y.stage.isVisibility ? ci._stageOnFocus() : ci._stageOnBlur()
        }, ci._stageOnBlur = function() {
            ci._isActive = !1, ci._musicChannel && (ci._musicChannel.isStopped || (ci._blurPaused = !0, ci._musicChannel.pause())), ci.stopAllSound(), y.stage.once("mousedown", null, ci._stageOnFocus)
        }, ci._recoverWebAudio = function() {
            Mi.ctx && "running" != Mi.ctx.state && Mi.ctx.resume && Mi.ctx.resume()
        }, ci._stageOnFocus = function() {
            ci._isActive = !0, ci._recoverWebAudio(), y.stage.off("mousedown", null, ci._stageOnFocus), ci._blurPaused && ci._musicChannel && ci._musicChannel.isStopped && (ci._blurPaused = !1, ci._musicChannel.resume())
        }, ci.playSound = function(t, e, i, n, s) {
            if (void 0 === e && (e = 1), void 0 === s && (s = 0), !ci._isActive || !t)
                return null;
            if (ci._muted)
                return null;
            if (ci._recoverWebAudio(), (t = ot.formatURL(t)) == ci._bgMusic) {
                if (ci._musicMuted)
                    return null
            } else {
                if (te.isConchApp) {
                    var r = ke.getFileExtension(t);
                    if ("wav" != r && "ogg" != r)
                        return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null
                }
                if (ci._soundMuted)
                    return null
            }
            var a, o;
            return re.onMiniGame || (a = y.loader.getRes(t)), n || (n = ci._soundClass), a || ((a = new n).load(t), re.onMiniGame || Ai.cacheRes(t, a)), (o = a.play(s, e)) ? (o.url = t, o.volume = t == ci._bgMusic ? ci.musicVolume : ci.soundVolume, o.completeHandler = i, o) : null
        }, ci.destroySound = function(t) {
            var e = y.loader.getRes(t);
            e && (Ai.clearRes(t), e.dispose())
        }, ci.playMusic = function(t, e, i, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 0), t = ot.formatURL(t), ci._bgMusic = t, ci._musicChannel && ci._musicChannel.stop(), ci._musicChannel = ci.playSound(t, e, i, ci._musicClass, n)
        }, ci.stopSound = function(t) {
            t = ot.formatURL(t);
            var e, i = 0;
            for (i = ci._channels.length - 1; 0 <= i; i--)
                (e = ci._channels[i]).url == t && e.stop()
        }, ci.stopAll = function() {
            ci._bgMusic = null;
            var t = 0;
            for (t = ci._channels.length - 1; 0 <= t; t--)
                ci._channels[t].stop()
        }, ci.stopAllSound = function() {
            var t, e = 0;
            for (e = ci._channels.length - 1; 0 <= e; e--)
                (t = ci._channels[e]).url != ci._bgMusic && t.stop()
        }, ci.stopMusic = function() {
            ci._musicChannel && ci._musicChannel.stop(), ci._bgMusic = null
        }, ci.setSoundVolume = function(t, e) {
            if (e)
                e = ot.formatURL(e), ci._setVolume(e, t);
            else {
                ci.soundVolume = t;
                var i, n = 0;
                for (n = ci._channels.length - 1; 0 <= n; n--)
                    (i = ci._channels[n]).url != ci._bgMusic && (i.volume = t)
            }
        }, ci.setMusicVolume = function(t) {
            ci.musicVolume = t, ci._setVolume(ci._bgMusic, t)
        }, ci._setVolume = function(t, e) {
            t = ot.formatURL(t);
            var i, n = 0;
            for (n = ci._channels.length - 1; 0 <= n; n--)
                (i = ci._channels[n]).url == t && (i.volume = e)
        }, ci.musicVolume = 1, ci.soundVolume = 1, ci.playbackRate = 1, ci._useAudioMusic = !0, ci._muted = !1, ci._soundMuted = !1, ci._musicMuted = !1, ci._bgMusic = null, ci._musicChannel = null, ci._channels = [], ci._autoStopMusic = !1, ci._blurPaused = !1, ci._isActive = !0, ci._soundClass = null, ci._musicClass = null, ci._lastSoundUsedTimeDic = {}, ci._isCheckingDispose = !1, ci.autoReleaseSound = !0, ci);

    function ci() {}
    var _i = function() {
            function a(t) {
                void 0 === t && (t = 1e4), a.__super.call(this, t)
            }
            m(a, "laya.webgl.submit.SubmitTexture", x);
            var t = a.prototype;
            return t.clone = function(t, e, i) {
                var n = a._poolSize ? a.POOL[--a._poolSize] : new a;
                return this._cloneInit(n, t, e, i), n
            }, t.releaseRender = function() {
                --this._ref < 1 && ((a.POOL[a._poolSize++] = this).shaderValue.release(), this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }, t.renderSubmit = function() {
                if (0 === this._numEle)
                    return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t ? t._getSource() : null;
                    if (!e)
                        return 1
                }
                var i = jt.mainContext;
                this._mesh.useMesh(i);
                var n = x.preRender,
                    s = x.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === s.submitType && this._key.blendShader === s.blendShader && Hi.activeShader && x.preRender.clipInfoID == this.clipInfoID && n.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & Ti.NOOPTMASK) ? Hi.activeShader.uploadTexture2D(e) : (ti.activeBlendFunction !== this._blendFn && (pt.setBlend(i, !0), this._blendFn(i), ti.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, this.shaderValue.upload()), i.drawElements(4, this._numEle, 5123, this._startIdx), R.renderBatches++, R.trianglesFaces += this._numEle / 3, 1
            }, a.create = function(t, e, i) {
                var n = a._poolSize ? a.POOL[--a._poolSize] : new a(10016);
                n._mesh = e, n._key.clear(), n._key.submitType = 2, n._ref = 1, n._startIdx = e.indexNum * Et.BYTES_PIDX, n._numEle = 0;
                var s = t._nBlendType;
                if (n._key.blendShader = s, n._blendFn = t._targets ? ti.targetFns[s] : ti.fns[s], n.shaderValue = i, t._colorFiler) {
                    var r = t._colorFiler;
                    i.defines.add(r.type), i.colorMat = r._mat, i.colorAlpha = r._alpha
                }
                return n
            }, a._poolSize = 0, a.POOL = [], a
        }(),
        di = function() {
            function s(t) {
                s.__super.call(this), t || (t = this._copyMatrix(s.IDENTITY_MATRIX)), this._mat = new Float32Array(16), this._alpha = new Float32Array(4), this.setByMatrix(t)
            }
            m(s, "laya.filters.ColorFilter", i);
            var t = s.prototype;
            return y.imps(t, {
                "laya.filters.IFilter": !0
            }), t.gray = function() {
                return this.setByMatrix(s.GRAY_MATRIX)
            }, t.color = function(t, e, i, n) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), this.setByMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, n])
            }, t.setColor = function(t) {
                var e = v.create(t).arrColor,
                    i = [0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0];
                return this.setByMatrix(i)
            }, t.setByMatrix = function(t) {
                this._matrix != t && this._copyMatrix(t);
                for (var e = 0, i = 0, n = 0; n < 20; n++)
                    n % 5 != 4 ? this._mat[e++] = t[n] : this._alpha[i++] = t[n];
                return this
            }, t.adjustColor = function(t, e, i, n) {
                return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), this
            }, t.adjustBrightness = function(t) {
                return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }, t.adjustContrast = function(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t))
                    return this;
                var e = NaN,
                    i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? s.DELTA_INDEX[t] : s.DELTA_INDEX[t << 0] * (1 - e) + s.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127,
                    n = .5 * (127 - e);
                return this._multiplyMatrix([i, 0, 0, 0, n, 0, i, 0, 0, n, 0, 0, i, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }, t.adjustSaturation = function(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t))
                    return this;
                var e = 1 + (0 < t ? 3 * t / 100 : t / 100),
                    i = 1 - e,
                    n = .3086 * i,
                    s = .6094 * i,
                    r = .082 * i;
                return this._multiplyMatrix([n + e, s, r, 0, 0, n, s + e, r, 0, 0, n, s, r + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }, t.adjustHue = function(t) {
                if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t))
                    return this;
                var e = Math.cos(t),
                    i = Math.sin(t);
                return this._multiplyMatrix([.213 + .787 * e + -.213 * i, .715 + -.715 * e + -.715 * i, .072 + -.072 * e + .928 * i, 0, 0, .213 + -.213 * e + .143 * i, .715 + e * (1 - .715) + .14 * i, .072 + -.072 * e + -.283 * i, 0, 0, .213 + -.213 * e + -.787 * i, .715 + -.715 * e + .715 * i, .072 + .928 * e + .072 * i, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }, t.reset = function() {
                return this.setByMatrix(this._copyMatrix(s.IDENTITY_MATRIX))
            }, t._multiplyMatrix = function(t) {
                var e = [];
                this._matrix = this._fixMatrix(this._matrix);
                for (var i = 0; i < 5; i++) {
                    for (var n = 0; n < 5; n++)
                        e[n] = this._matrix[n + 5 * i];
                    for (n = 0; n < 5; n++) {
                        for (var s = 0, r = 0; r < 5; r++)
                            s += t[n + 5 * r] * e[r];
                        this._matrix[n + 5 * i] = s
                    }
                }
                return this.setByMatrix(this._matrix)
            }, t._clampValue = function(t, e) {
                return Math.min(e, Math.max(-e, t))
            }, t._fixMatrix = function(t) {
                return null == t ? s.IDENTITY_MATRIX : (t.length < 25 ? t = t.slice(0, t.length).concat(s.IDENTITY_MATRIX.slice(t.length, 25)) : 25 < t.length && (t = t.slice(0, 25)), t)
            }, t._copyMatrix = function(t) {
                this._matrix || (this._matrix = []);
                for (var e = 0; e < 25; e++)
                    this._matrix[e] = t[e];
                return this._matrix
            }, f(0, t, "type", function() {
                return 32
            }), s.LENGTH = 25, a(s, ["DELTA_INDEX", function() {
                return this.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10]
            }, "GRAY_MATRIX", function() {
                return this.GRAY_MATRIX = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]
            }, "IDENTITY_MATRIX", function() {
                return this.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
            }]), s
        }(),
        fi = function() {
            function r() {
                this._matrix = new vt, this._matrix4 = Et.defaultMatrix4.concat(), r.__super.call(this, 1e4), this.shaderValue = new Z(0, 0)
            }
            m(r, "laya.webgl.submit.SubmitCanvas", x);
            var t = r.prototype;
            return t.renderSubmit = function() {
                var t = It.worldAlpha,
                    e = It.worldMatrix4,
                    i = It.worldMatrix,
                    n = It.worldFilters,
                    s = It.worldShaderDefines,
                    r = this.shaderValue,
                    a = this._matrix,
                    o = this._matrix4,
                    h = vt.TEMP;
                return vt.mul(a, i, h), o[0] = h.a, o[1] = h.b, o[4] = h.c, o[5] = h.d, o[12] = h.tx, o[13] = h.ty, It.worldMatrix = h.clone(), It.worldMatrix4 = o, It.worldAlpha = It.worldAlpha * r.alpha, r.filters && r.filters.length && (It.worldFilters = r.filters, It.worldShaderDefines = r.defines), this.canv.flushsubmit(), It.worldAlpha = t, It.worldMatrix4 = e, It.worldMatrix.destroy(), It.worldMatrix = i, It.worldFilters = n, It.worldShaderDefines = s, 1
            }, t.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = r.POOL;
                    this._mesh = null, t[t._length++] = this
                }
            }, t.clone = function(t, e, i) {
                return null
            }, t.getRenderType = function() {
                return 10003
            }, r.create = function(t, e, i) {
                var n = r.POOL._length ? r.POOL[--r.POOL._length] : new r;
                n.canv = t, n._ref = 1, n._numEle = 0;
                var s = n.shaderValue;
                return s.alpha = e, s.defines.setValue(0), i && i.length && s.setFilters(i), n
            }, r.POOL = [], r.__init$ = function() {
                r.POOL._length = 0
            }, r
        }(),
        pi = (function() {
            function t() {
                t.__super.call(this)
            }
            m(t, "laya.components.Script", s);
            var e = t.prototype;
            e._onAwake = function() {
                this.onAwake(), this.onStart !== laya.components.Script.prototype.onStart && y.startTimer.callLater(this, this.onStart)
            }, e._onEnable = function() {
                var t = laya.components.Script.prototype;
                this.onTriggerEnter !== t.onTriggerEnter && this.owner.on("triggerenter", this, this.onTriggerEnter), this.onTriggerStay !== t.onTriggerStay && this.owner.on("triggerstay", this, this.onTriggerStay), this.onTriggerExit !== t.onTriggerExit && this.owner.on("triggerexit", this, this.onTriggerExit), this.onMouseDown !== t.onMouseDown && this.owner.on("mousedown", this, this.onMouseDown), this.onMouseUp !== t.onMouseUp && this.owner.on("mouseup", this, this.onMouseUp), this.onClick !== t.onClick && this.owner.on("click", this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && y.stage.on("mousedown", this, this.onStageMouseDown), this.onStageMouseUp !== t.onStageMouseUp && y.stage.on("mouseup", this, this.onStageMouseUp), this.onStageClick !== t.onStageClick && y.stage.on("click", this, this.onStageClick), this.onStageMouseMove !== t.onStageMouseMove && y.stage.on("mousemove", this, this.onStageMouseMove), this.onDoubleClick !== t.onDoubleClick && this.owner.on("doubleclick", this, this.onDoubleClick), this.onRightClick !== t.onRightClick && this.owner.on("rightclick", this, this.onRightClick), this.onMouseMove !== t.onMouseMove && this.owner.on("mousemove", this, this.onMouseMove), this.onMouseOver !== t.onMouseOver && this.owner.on("mouseover", this, this.onMouseOver), this.onMouseOut !== t.onMouseOut && this.owner.on("mouseout", this, this.onMouseOut), this.onKeyDown !== t.onKeyDown && y.stage.on("keydown", this, this.onKeyDown), this.onKeyPress !== t.onKeyPress && y.stage.on("keypress", this, this.onKeyPress), this.onKeyUp !== t.onKeyUp && y.stage.on("keyup", this, this.onKeyUp), this.onUpdate !== t.onUpdate && y.updateTimer.frameLoop(1, this, this.onUpdate), this.onLateUpdate !== t.onLateUpdate && y.lateTimer.frameLoop(1, this, this.onLateUpdate), this.onPreRender !== t.onPreRender && y.lateTimer.frameLoop(1, this, this.onPreRender)
            }, e._onDisable = function() {
                this.owner.offAllCaller(this), y.stage.offAllCaller(this), y.startTimer.clearAll(this), y.updateTimer.clearAll(this), y.lateTimer.clearAll(this)
            }, e._isScript = function() {
                return !0
            }, e._onDestroy = function() {
                this.onDestroy()
            }, e.onAwake = function() {}, e.onEnable = function() {}, e.onStart = function() {}, e.onTriggerEnter = function(t, e, i) {}, e.onTriggerStay = function(t, e, i) {}, e.onTriggerExit = function(t, e, i) {}, e.onMouseDown = function(t) {}, e.onMouseUp = function(t) {}, e.onClick = function(t) {}, e.onStageMouseDown = function(t) {}, e.onStageMouseUp = function(t) {}, e.onStageClick = function(t) {}, e.onStageMouseMove = function(t) {}, e.onDoubleClick = function(t) {}, e.onRightClick = function(t) {}, e.onMouseMove = function(t) {}, e.onMouseOver = function(t) {}, e.onMouseOut = function(t) {}, e.onKeyDown = function(t) {}, e.onKeyPress = function(t) {}, e.onKeyUp = function(t) {}, e.onUpdate = function() {}, e.onLateUpdate = function() {}, e.onPreRender = function() {}, e.onPostRender = function() {}, e.onDisable = function() {}, e.onDestroy = function() {}, f(0, e, "isSingleton", function() {
                return !1
            })
        }(), function() {
            function a() {
                this.url = null, this.audio = null, this.loaded = !1, a.__super.call(this)
            }
            m(a, "laya.media.h5audio.AudioSound", T);
            var t = a.prototype;
            return t.dispose = function() {
                var t = a._audioCache[this.url];
                z.clearBySign("audio:" + this.url), t && (te.isConchApp || (t.src = ""), delete a._audioCache[this.url])
            }, t.load = function(t) {
                var e;
                if (t = ot.formatURL(t), (this.url = t) == ui._bgMusic ? (a._initMusicAudio(), (e = a._musicAudio).src != t && (a._audioCache[e.src] = null, e = null)) : e = a._audioCache[t], e && 2 <= e.readyState)
                    this.event("complete");
                else {
                    e || (e = t == ui._bgMusic ? (a._initMusicAudio(), a._musicAudio) : re.createElement("audio"), (a._audioCache[t] = e).src = t), e.addEventListener("canplaythrough", n), e.addEventListener("error", s);
                    var i = this;
                    (this.audio = e).load ? e.load() : s()
                }

                function n() {
                    r(), i.loaded = !0, i.event("complete")
                }

                function s() {
                    e.load = null, r(), i.event("error")
                }

                function r() {
                    e.removeEventListener("canplaythrough", n), e.removeEventListener("error", s)
                }
            }, t.play = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), !this.url)
                    return null;
                var i, n;
                if (!(i = this.url == ui._bgMusic ? a._musicAudio : a._audioCache[this.url]))
                    return null;
                n = z.getItem("audio:" + this.url), te.isConchApp ? n || ((n = re.createElement("audio")).src = this.url) : this.url == ui._bgMusic ? (a._initMusicAudio(), (n = a._musicAudio).src = this.url) : n = n || i.cloneNode(!0);
                var s = new Qi(n);
                return s.url = this.url, s.loops = e, s.startTime = t, s.play(), ui.addChannel(s), s
            }, f(0, t, "duration", function() {
                var t;
                return (t = a._audioCache[this.url]) ? t.duration : 0
            }), a._initMusicAudio = function() {
                a._musicAudio || (a._musicAudio || (a._musicAudio = re.createElement("audio")), te.isConchApp || re.document.addEventListener("mousedown", a._makeMusicOK))
            }, a._makeMusicOK = function() {
                re.document.removeEventListener("mousedown", a._makeMusicOK), a._musicAudio.src ? a._musicAudio.play() : (a._musicAudio.src = "", a._musicAudio.load())
            }, a._audioCache = {}, a._musicAudio = null, a
        }()),
        mi = (function() {
            function t() {
                t.__super.call(this)
            }
            m(t, "laya.media.Sound", T);
            var e = t.prototype;
            e.load = function(t) {}, e.play = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), null
            }, e.dispose = function() {}, f(0, e, "duration", function() {
                return 0
            })
        }(), function() {
            function i(t) {
                i.__super.call(this, 116, 4 * t * 116, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo), this.createQuadIB(t), this._quadNum = t
            }
            m(i, "laya.webgl.utils.MeshParticle2D", A);
            var t = i.prototype;
            t.setMaxParticleNum = function(t) {
                this._vb._resizeBuffer(4 * t * 116, !1), this.createQuadIB(t)
            }, t.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this)
            }, t.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer()
            }, i.getAMesh = function(t) {
                if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                    var e = laya.webgl.utils.MeshParticle2D._POOL.pop();
                    return e.setMaxParticleNum(t), e
                }
                return new i(t)
            }, i.const_stride = 116, i._POOL = [], a(i, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112]
            }])
        }(), function() {
            function a() {
                this._bits = 0, this._parent = null, this.name = "", this.destroyed = !1, this._conchData = null, this._components = null, this._activeChangeScripts = null, this._scene = null, a.__super.call(this), this._children = a.ARRAY_EMPTY, this._extUIChild = a.ARRAY_EMPTY, this.createGLBuffer()
            }
            m(a, "laya.display.Node", T);
            var t = a.prototype;
            return t.createGLBuffer = function() {}, t._setBit = function(t, e) {
                16 === t && this._getBit(t) != e && this._updateDisplayedInstage();
                e ? this._bits |= t : this._bits &= ~t
            }, t._getBit = function(t) {
                return 0 != (this._bits & t)
            }, t._setUpNoticeChain = function() {
                this._getBit(16) && this._setBitUp(16)
            }, t._setBitUp = function(t) {
                var e = this;
                for (e._setBit(t, !0), e = e._parent; e;) {
                    if (e._getBit(t))
                        return;
                    e._setBit(t, !0), e = e._parent
                }
            }, t.on = function(t, e, i, n) {
                return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), this._createListener(t, e, i, n, !1)
            }, t.once = function(t, e, i, n) {
                return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), this._createListener(t, e, i, n, !0)
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), this._children = null, this.offAll()
            }, t.onDestroy = function() {}, t.destroyChildren = function() {
                if (this._children)
                    for (var t = 0, e = this._children.length; t < e; t++)
                        this._children[0].destroy(!0)
            }, t.addChild = function(t) {
                if (!t || this.destroyed || t === this)
                    return t;
                if (t._zOrder && this._setBit(32, !0), t._parent === this) {
                    var e = this.getChildIndex(t);
                    e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t), this._childChanged())
                } else
                    t._parent && t._parent.removeChild(t), this._children === a.ARRAY_EMPTY && (this._children = []), this._children.push(t), t._setParent(this), this._childChanged();
                return t
            }, t.addInputChild = function(t) {
                if (this._extUIChild == a.ARRAY_EMPTY)
                    this._extUIChild = [t];
                else {
                    if (0 <= this._extUIChild.indexOf(t))
                        return null;
                    this._extUIChild.push(t)
                }
                return null
            }, t.removeInputChild = function(t) {
                var e = this._extUIChild.indexOf(t);
                0 <= e && this._extUIChild.splice(e, 1)
            }, t.addChildren = function(t) {
                for (var e = arguments, i = 0, n = e.length; i < n;)
                    this.addChild(e[i++])
            }, t.addChildAt = function(t, e) {
                if (!t || this.destroyed || t === this)
                    return t;
                if (t._zOrder && this._setBit(32, !0), 0 <= e && e <= this._children.length) {
                    if (t._parent === this) {
                        var i = this.getChildIndex(t);
                        this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged()
                    } else
                        t._parent && t._parent.removeChild(t), this._children === a.ARRAY_EMPTY && (this._children = []), this._children.splice(e, 0, t), t._setParent(this);
                    return t
                }
                throw new Error("appendChildAt:The index is out of bounds")
            }, t.getChildIndex = function(t) {
                return this._children.indexOf(t)
            }, t.getChildByName = function(t) {
                var e = this._children;
                if (e)
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i];
                        if (s.name === t)
                            return s
                    }
                return null
            }, t.getChildAt = function(t) {
                return this._children[t] || null
            }, t.setChildIndex = function(t, e) {
                var i = this._children;
                if (e < 0 || e >= i.length)
                    throw new Error("setChildIndex:The index is out of bounds.");
                var n = this.getChildIndex(t);
                if (n < 0)
                    throw new Error("setChildIndex:node is must child of this object.");
                return i.splice(n, 1), i.splice(e, 0, t), this._childChanged(), t
            }, t._childChanged = function(t) {}, t.removeChild = function(t) {
                if (!this._children)
                    return t;
                var e = this._children.indexOf(t);
                return this.removeChildAt(e)
            }, t.removeSelf = function() {
                return this._parent && this._parent.removeChild(this), this
            }, t.removeChildByName = function(t) {
                var e = this.getChildByName(t);
                return e && this.removeChild(e), e
            }, t.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e && (this._children.splice(t, 1), e._setParent(null)), e
            }, t.removeChildren = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 2147483647), this._children && 0 < this._children.length) {
                    var i = this._children;
                    if (0 === t && e >= i.length - 1) {
                        var n = i;
                        this._children = a.ARRAY_EMPTY
                    } else
                        n = i.splice(t, e - t);
                    for (var s = 0, r = n.length; s < r; s++)
                        n[s]._setParent(null)
                }
                return this
            }, t.replaceChild = function(t, e) {
                var i = this._children.indexOf(e);
                return -1 < i ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), t) : null
            }, t._setParent = function(t) {
                this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event("added"), this._getBit(16) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this._onRemoved(), this.event("removed"), this._parent._childChanged(), this._getBit(16) && this._displayChild(this, !1), this._parent = t))
            }, t._updateDisplayedInstage = function() {
                var t;
                t = this;
                for (var e = y.stage, i = !1; t;) {
                    if (t._getBit(16)) {
                        i = t._getBit(128);
                        break
                    }
                    if (t === e || t._getBit(128)) {
                        i = !0;
                        break
                    }
                    t = t._parent
                }
                this._setBit(128, i)
            }, t._setDisplay = function(t) {
                this._getBit(128) !== t && (this._setBit(128, t), t ? this.event("display") : this.event("undisplay"))
            }, t._displayChild = function(t, e) {
                var i = t._children;
                if (i)
                    for (var n = 0, s = i.length; n < s; n++) {
                        var r = i[n];
                        r._getBit(16) && (0 < r._children.length ? this._displayChild(r, e) : r._setDisplay(e))
                    }
                t._setDisplay(e)
            }, t.contains = function(t) {
                if (t === this)
                    return !0;
                for (; t;) {
                    if (t._parent === this)
                        return !0;
                    t = t._parent
                }
                return !1
            }, t.timerLoop = function(t, e, i, n, s, r) {
                void 0 === s && (s = !0), void 0 === r && (r = !1), (this.scene ? this.scene.timer : y.timer).loop(t, e, i, n, s, r)
            }, t.timerOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : y.timer)._create(!1, !1, t, e, i, n, s)
            }, t.frameLoop = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : y.timer)._create(!0, !0, t, e, i, n, s)
            }, t.frameOnce = function(t, e, i, n, s) {
                void 0 === s && (s = !0), (this.scene ? this.scene.timer : y.timer)._create(!0, !1, t, e, i, n, s)
            }, t.clearTimer = function(t, e) {
                (this.scene ? this.scene.timer : y.timer).clear(t, e)
            }, t.callLater = function(t, e) {
                (this.scene ? this.scene.timer : y.timer).callLater(this, t, e)
            }, t.runCallLater = function(t) {
                (this.scene ? this.scene.timer : y.timer).runCallLater(this, t)
            }, t._onActive = function() {
                R.spriteCount++
            }, t._onInActive = function() {
                R.spriteCount--
            }, t._onActiveInScene = function() {}, t._onInActiveInScene = function() {}, t._parse = function(t, e) {}, t._setBelongScene = function(t) {
                if (!this._scene) {
                    if (this._scene = t, this._components)
                        for (var e = 0, i = this._components.length; e < i; e++)
                            this._components[e]._setActiveInScene(!0);
                    for (this._onActiveInScene(), e = 0, i = this._children.length; e < i; e++)
                        this._children[e]._setBelongScene(t)
                }
            }, t._setUnBelongScene = function() {
                if (this._scene !== this) {
                    if (this._onInActiveInScene(), this._components)
                        for (var t = 0, e = this._components.length; t < e; t++)
                            this._components[t]._setActiveInScene(!1);
                    for (this._scene = null, t = 0, e = this._children.length; t < e; t++)
                        this._children[t]._setUnBelongScene()
                }
            }, t.onAwake = function() {}, t.onEnable = function() {}, t._processActive = function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), this._activeScripts()
            }, t._activeHierarchy = function(t) {
                if (this._setBit(2, !0), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        n._setActive(!0), n._isScript() && n._enabled && t.push(n)
                    }
                for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                    var s = this._children[e];
                    s._getBit(1) || s._activeHierarchy(t)
                }
                this._getBit(4) || (this._setBit(4, !0), this.onAwake()), this.onEnable()
            }, t._activeScripts = function() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++)
                    this._activeChangeScripts[t].onEnable();
                this._activeChangeScripts.length = 0
            }, t._processInActive = function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), this._inActiveScripts()
            }, t._inActiveHierarchy = function(t) {
                if (this._onInActive(), this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        n._setActive(!1), n._isScript() && n._enabled && t.push(n)
                    }
                for (this._setBit(2, !1), e = 0, i = this._children.length; e < i; e++) {
                    var s = this._children[e];
                    s && !s._getBit(1) && s._inActiveHierarchy(t)
                }
                this.onDisable()
            }, t._inActiveScripts = function() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++)
                    this._activeChangeScripts[t].onDisable();
                this._activeChangeScripts.length = 0
            }, t.onDisable = function() {}, t._onAdded = function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                    throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
                var t = this._parent.scene;
                t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive()
            }, t._onRemoved = function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                    throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene()
            }, t._addComponentInstance = function(t) {
                this._components = this._components || [], this._components.push(t), t.owner = this, t._onAdded(), this.activeInHierarchy && (t._setActive(!0), t._isScript() && t._enabled && t.onEnable()), this._scene && t._setActiveInScene(!0)
            }, t._destroyComponent = function(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        if (n === t) {
                            n._destroy(), this._components.splice(e, 1);
                            break
                        }
                    }
            }, t._destroyAllComponent = function() {
                if (this._components) {
                    for (var t = 0, e = this._components.length; t < e; t++) {
                        this._components[t]._destroy()
                    }
                    this._components.length = 0
                }
            }, t._cloneTo = function(t, e, i) {
                var n = t;
                if (this._components)
                    for (var s = 0, r = this._components.length; s < r; s++) {
                        var a = n.addComponent(this._components[s].constructor);
                        this._components[s]._cloneTo(a)
                    }
            }, t.addComponentIntance = function(t) {
                if (t.owner)
                    throw "Node:the component has belong to other node.";
                if (t.isSingleton && this.getComponent(t.constructor))
                    throw "Node:the component is singleton,can't add the second one.";
                return this._addComponentInstance(t), t
            }, t.addComponent = function(t) {
                var e = z.createByClass(t);
                if (e._destroyed = !1, e.isSingleton && this.getComponent(t))
                    throw "无法实例" + t + "组件，" + t + "组件已存在！";
                return this._addComponentInstance(e), e
            }, t.getComponent = function(t) {
                if (this._components)
                    for (var e = 0, i = this._components.length; e < i; e++) {
                        var n = this._components[e];
                        if (y.__typeof(n, t))
                            return n
                    }
                return null
            }, t.getComponents = function(t) {
                var e;
                if (this._components)
                    for (var i = 0, n = this._components.length; i < n; i++) {
                        var s = this._components[i];
                        y.__typeof(s, t) && (e = e || []).push(s)
                    }
                return e
            }, f(0, t, "numChildren", function() {
                return this._children.length
            }), f(0, t, "parent", function() {
                return this._parent
            }), f(0, t, "activeInHierarchy", function() {
                return this._getBit(2)
            }), f(0, t, "active", function() {
                return !this._getBit(8) && !this._getBit(1)
            }, function(t) {
                if (t = !!t, !this._getBit(1) !== t) {
                    if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                        throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                    this._setBit(1, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive())
                }
            }), f(0, t, "displayedInStage", function() {
                return this._getBit(16) || this._setBitUp(16), this._getBit(128)
            }), f(0, t, "scene", function() {
                return this._scene
            }), f(0, t, "timer", function() {
                return this.scene ? this.scene.timer : y.timer
            }), a.ARRAY_EMPTY = [], a
        }()),
        gi = function() {
            function t() {
                this.url = null, this.loops = 0, this.startTime = NaN, this.isStopped = !1, this.completeHandler = null, t.__super.call(this)
            }
            m(t, "laya.media.SoundChannel", T);
            var e = t.prototype;
            return e.play = function() {}, e.stop = function() {
                this.completeHandler && this.completeHandler.run()
            }, e.pause = function() {}, e.resume = function() {}, e.__runComplete = function(t) {
                t && t.run()
            }, f(0, e, "volume", function() {
                return 1
            }, function(t) {}), f(0, e, "position", function() {
                return 0
            }), f(0, e, "duration", function() {
                return 0
            }), t
        }(),
        vi = function() {
            function i() {
                this._id = 0, this._url = null, this._cpuMemory = 0, this._gpuMemory = 0, this._destroyed = !1, this._referenceCount = 0, this.lock = !1, this.name = null, i.__super.call(this), this._id = ++i._uniqueIDCounter, this._destroyed = !1, this._referenceCount = 0, (i._idResourcesMap[this.id] = this).lock = !1
            }
            m(i, "laya.resource.Resource", T);
            var t = i.prototype;
            return y.imps(t, {
                "laya.resource.ICreateResource": !0,
                "laya.resource.IDestroy": !0
            }), t._setCPUMemory = function(t) {
                var e = t - this._cpuMemory;
                this._cpuMemory = t, i._addCPUMemory(e)
            }, t._setGPUMemory = function(t) {
                var e = t - this._gpuMemory;
                this._gpuMemory = t, i._addGPUMemory(e)
            }, t._setCreateURL = function(t) {
                var e;
                t = ot.formatURL(t), this._url !== t && (this._url && ((e = i._urlResourcesMap[this._url]).splice(e.indexOf(this), 1), 0 === e.length && delete i._urlResourcesMap[this._url]), t && ((e = i._urlResourcesMap[t]) || (i._urlResourcesMap[t] = e = []), e.push(this)), this._url = t)
            }, t._addReference = function(t) {
                void 0 === t && (t = 1), this._referenceCount += t
            }, t._removeReference = function(t) {
                void 0 === t && (t = 1), this._referenceCount -= t
            }, t._clearReference = function() {
                this._referenceCount = 0
            }, t._recoverResource = function() {}, t._disposeResource = function() {}, t._activeResource = function() {}, t.destroy = function() {
                var t;
                this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), delete i._idResourcesMap[this.id], this._url && ((t = i._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 0 === t.length && delete i._urlResourcesMap[this._url]), Ai.getRes(this._url) == this && delete Ai.loadedMap[this._url]))
            }, f(0, t, "id", function() {
                return this._id
            }), f(0, t, "gpuMemory", function() {
                return this._gpuMemory
            }), f(0, t, "url", function() {
                return this._url
            }), f(0, t, "cpuMemory", function() {
                return this._cpuMemory
            }), f(0, t, "destroyed", function() {
                return this._destroyed
            }), f(0, t, "referenceCount", function() {
                return this._referenceCount
            }), f(1, i, "cpuMemory", function() {
                return this._cpuMemory
            }, laya.events.EventDispatcher._$SET_cpuMemory), f(1, i, "gpuMemory", function() {
                return this._gpuMemory
            }, laya.events.EventDispatcher._$SET_gpuMemory), i._addCPUMemory = function(t) {
                this._cpuMemory += t
            }, i._addGPUMemory = function(t) {
                this._gpuMemory += t
            }, i._addMemory = function(t, e) {
                this._cpuMemory += t, this._gpuMemory += e
            }, i.getResourceByID = function(t) {
                return i._idResourcesMap[t]
            }, i.getResourceByURL = function(t, e) {
                return void 0 === e && (e = 0), i._urlResourcesMap[t][e]
            }, i.destroyUnusedResources = function() {
                for (var t in i._idResourcesMap) {
                    var e = i._idResourcesMap[t];
                    e.lock || 0 !== e._referenceCount || e.destroy()
                }
            }, i._uniqueIDCounter = 0, i._idResourcesMap = {}, i._urlResourcesMap = {}, i._cpuMemory = 0, i._gpuMemory = 0, i
        }(),
        yi = function() {
            function i() {
                i.__super.call(this, 12, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo)
            }
            m(i, "laya.webgl.utils.MeshVG", A);
            var t = i.prototype;
            return t.addVertAndIBToMesh = function(t, e, i, n) {
                for (var s = this._vb.needSize(e.length / 2 * 12) >> 2, r = this._vb._floatArray32 || this._vb.getFloat32Array(), a = this._vb._uint32Array, o = 0, h = e.length / 2, l = 0; l < h; l++)
                    r[s++] = e[o], r[s++] = e[o + 1], o += 2, a[s++] = i;
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(n)), this._ib.setNeedUpload(), this.vertNum += h, this.indexNum += n.length
            }, t.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshVG._POOL.push(this)
            }, t.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }, i.getAMesh = function(t) {
                var e;
                return e = laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new i, t && e._vb._resizeBuffer(786432, !1), e
            }, i.const_stride = 12, i._POOL = [], a(i, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 2, 0, 5121, 4, 8]
            }]), i
        }(),
        xi = function() {
            var o;

            function r() {
                this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, r.__super.call(this)
            }
            m(r, "laya.utils.TimeLine", T);
            var t = r.prototype;
            return t.to = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), this._create(t, e, i, n, s, !0)
            }, t.from = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), this._create(t, e, i, n, s, !1)
            }, t._create = function(t, e, i, n, s, r) {
                var a = z.getItemByClass("tweenData", o);
                return a.isTo = r, a.type = 0, a.target = t, a.duration = i, a.data = e, a.startTime = this._startTime + s, a.endTime = a.startTime + a.duration, a.ease = n, this._startTime = Math.max(a.endTime, this._startTime), this._tweenDataList.push(a), this._startTimeSort = !0, this._endTimeSort = !0, this
            }, t.addLabel = function(t, e) {
                var i = z.getItemByClass("tweenData", o);
                return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), this._labelDic[t] = i, this._tweenDataList.push(i), this
            }, t.removeLabel = function(t) {
                if (this._labelDic && this._labelDic[t]) {
                    var e = this._labelDic[t];
                    if (e) {
                        var i = this._tweenDataList.indexOf(e); - 1 < i && this._tweenDataList.splice(i, 1)
                    }
                    delete this._labelDic[t]
                }
            }, t.gotoTime = function(t) {
                if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                    var e, i, n, s;
                    for (var r in this._firstTweenDic)
                        if (i = this._firstTweenDic[r])
                            for (var a in i)
                                i.diyTarget.hasOwnProperty(a) && (i.diyTarget[a] = i[a]);
                    for (r in this._tweenDic)
                        (e = this._tweenDic[r]).clear(), delete this._tweenDic[r];
                    if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = re.now(), null == this._endTweenDataList || this._endTimeSort) {
                        this._endTimeSort = !1, this._endTweenDataList = n = this._tweenDataList.concat(), n.sort(function(t, e) {
                            return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0
                        })
                    } else
                        n = this._endTweenDataList;
                    for (var o = 0, h = n.length; o < h; o++)
                        if (0 == (s = n[o]).type) {
                            if (!(t >= s.endTime))
                                break;
                            this._index = Math.max(this._index, o + 1);
                            var l = s.data;
                            if (s.isTo)
                                for (var u in l)
                                    s.target[u] = l[u]
                        }
                    for (o = 0, h = this._tweenDataList.length; o < h; o++)
                        0 == (s = this._tweenDataList[o]).type && t >= s.startTime && t < s.endTime && (this._index = Math.max(this._index, o + 1), this._gidIndex++, (e = z.getItemByClass("tween", it))._create(s.target, s.data, s.duration, s.ease, b.create(this, this._animComplete, [this._gidIndex]), 0, !1, s.isTo, !0, !1), e.setStartTime(this._currTime - (t - s.startTime)), e._updateEase(this._currTime), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e)
                }
            }, t.gotoLabel = function(t) {
                if (null != this._labelDic) {
                    var e = this._labelDic[t];
                    e && this.gotoTime(e.startTime)
                }
            }, t.pause = function() {
                y.timer.clear(this, this._update)
            }, t.resume = function() {
                this.play(this._currTime, this._loopKey)
            }, t.play = function(t, e) {
                if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                    if (this._startTimeSort) {
                        this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                            return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0
                        });
                        for (var i = 0, n = this._tweenDataList.length; i < n; i++) {
                            var s = this._tweenDataList[i];
                            if (null != s && 0 == s.type) {
                                var r = s.target,
                                    a = r.$_GID || (r.$_GID = ke.getGID()),
                                    o = null;
                                for (var h in null == this._firstTweenDic[a] ? ((o = {}).diyTarget = r, this._firstTweenDic[a] = o) : o = this._firstTweenDic[a], s.data)
                                    null == o[h] && (o[h] = r[h])
                            }
                        }
                    }
                    "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, this._lastTime = re.now(), y.timer.frameLoop(1, this, this._update)
                }
            }, t._update = function() {
                if (this._currTime >= this._startTime) {
                    if (!this._loopKey) {
                        for (var t in this._tweenDic)
                            (e = this._tweenDic[t]).complete();
                        return this._complete(), void this.pause()
                    }
                    if (this._complete(), !this._tweenDataList)
                        return;
                    this.gotoTime(0)
                }
                var e, i = re.now(),
                    n = i - this._lastTime,
                    s = this._currTime += n * this.scale;
                for (t in this._lastTime = i, this._tweenDic)
                    (e = this._tweenDic[t])._updateEase(s);
                if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                    var r = this._tweenDataList[this._index];
                    s >= r.startTime && (this._index++, 0 == r.type ? (this._gidIndex++, (e = z.getItemByClass("tween", it))._create(r.target, r.data, r.duration, r.ease, b.create(this, this._animComplete, [this._gidIndex]), 0, !1, r.isTo, !0, !1), e.setStartTime(s), e.gid = this._gidIndex, (this._tweenDic[this._gidIndex] = e)._updateEase(s)) : this.event("label", r.data))
                }
            }, t._animComplete = function(t) {
                this._tweenDic[t] && delete this._tweenDic[t]
            }, t._complete = function() {
                this.event("complete")
            }, t.reset = function() {
                var t;
                if (this._labelDic)
                    for (t in this._labelDic)
                        delete this._labelDic[t];
                for (t in this._tweenDic)
                    this._tweenDic[t].clear(), delete this._tweenDic[t];
                for (t in this._firstTweenDic)
                    delete this._firstTweenDic[t];
                if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                    var e, i = 0;
                    for (e = this._tweenDataList.length, i = 0; i < e; i++)
                        this._tweenDataList[i] && this._tweenDataList[i].destroy()
                }
                this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this.scale = 1, y.timer.clear(this, this._update)
            }, t.destroy = function() {
                this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, this._firstTweenDic = null
            }, f(0, t, "index", function() {
                return this._frameIndex
            }, function(t) {
                this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3)
            }), f(0, t, "total", function() {
                return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total
            }), r.to = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), (new r).to(t, e, i, n, s)
            }, r.from = function(t, e, i, n, s) {
                return void 0 === s && (s = 0), (new r).from(t, e, i, n, s)
            }, r.__init$ = function() {
                function t() {
                    this.type = 0, this.isTo = !0, this.startTime = NaN, this.endTime = NaN, this.target = null, this.duration = NaN, this.ease = null, this.data = null
                }
                m(t, ""), t.prototype.destroy = function() {
                    this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, z.recover("tweenData", this)
                }, o = t
            }, r
        }(),
        Ti = (m(bi, "laya.webgl.shader.d2.ShaderDefines2D", k), bi.__init__ = function() {
            bi.reg("TEXTURE2D", 1), bi.reg("PRIMITIVE", 4), bi.reg("GLOW_FILTER", 8), bi.reg("BLUR_FILTER", 16), bi.reg("COLOR_FILTER", 32), bi.reg("COLOR_ADD", 64), bi.reg("WORLDMAT", 128), bi.reg("FILLTEXTURE", 256), bi.reg("FSHIGHPRECISION", 1024), bi.reg("MVP3D", 2048)
        }, bi.reg = function(t, e) {
            k._reg(t, e, bi.__name2int, bi.__int2name)
        }, bi.toText = function(t, e, i) {
            return k._toText(t, e, i)
        }, bi.toInt = function(t) {
            return k._toInt(t, bi.__name2int)
        }, bi.TEXTURE2D = 1, bi.PRIMITIVE = 4, bi.FILTERGLOW = 8, bi.FILTERBLUR = 16, bi.FILTERCOLOR = 32, bi.COLORADD = 64, bi.WORLDMAT = 128, bi.FILLTEXTURE = 256, bi.SKINMESH = 512, bi.SHADERDEFINE_FSHIGHPRECISION = 1024, bi.MVP3D = 2048, bi.NOOPTMASK = 312, bi.__name2int = {}, bi.__int2name = [], bi.__int2nameMap = [], bi);

    function bi() {
        bi.__super.call(this, bi.__name2int, bi.__int2name, bi.__int2nameMap)
    }
    var wi = function() {
            function C(t, e, i, n) {
                this.uvrect = [0, 0, 1, 1], this._destroyed = !1, this._referenceCount = 0, this.$_GID = 0, this.offsetX = 0, this.offsetY = 0, this._w = 0, this._h = 0, this.sourceWidth = 0, this.sourceHeight = 0, this.url = null, this.scaleRate = 1, C.__super.call(this), void 0 === i && (i = 0), void 0 === n && (n = 0), this.setTo(t, e, i, n)
            }
            m(C, "laya.resource.Texture", T);
            var t = C.prototype;
            return t._addReference = function() {
                this._bitmap && this._bitmap._addReference(), this._referenceCount++
            }, t._removeReference = function() {
                this._bitmap && this._bitmap._removeReference(), this._referenceCount--
            }, t._getSource = function(t) {
                return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(t), this._bitmap.destroyed ? null : this.bitmap._getSource())
            }, t._onLoaded = function(t, e) {
                if (e)
                    if (e == this);
                    else if (e instanceof laya.resource.Texture) {
                    var i = e;
                    C._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this)
                } else
                    this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height;
                else;
                t && t.run(), this.event("ready", this)
            }, t.getIsReady = function() {
                return !this._destroyed && !!this._bitmap
            }, t.setTo = function(t, e, i, n) {
                void 0 === i && (i = 0), void 0 === n && (n = 0), this.bitmap = t, this.sourceWidth = i, this.sourceHeight = n, t && (this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || t.width, this.sourceHeight = this.sourceHeight || t.height), this.uv = e || C.DEF_UV
            }, t.load = function(t, e) {
                this._destroyed || y.loader.load(t, b.create(this, this._onLoaded, [e]), null, "htmlimage", 1, !1, null, !0)
            }, t.getTexturePixels = function(t, e, i, n) {
                var s = 0,
                    r = 0,
                    a = 0,
                    o = this.bitmap,
                    h = o.width,
                    l = o.height;
                if (h < t + i && (i -= t + i - h), l < e + n && (n -= e + n - l), i <= 0 || n <= 0)
                    return null;
                var u = 4 * i,
                    c = null;
                try {
                    c = o.getPixels()
                } catch (t) {}
                if (c) {
                    if (0 == t && 0 == e && i == h && n == l)
                        return c;
                    var _ = new Uint8Array(i * n * 4);
                    for (r = (e + n - 1) * (u = 4 * h) + (s = 4 * t), a = n - 1; 0 <= a; a--)
                        _.set(y.slice(r, r + 4 * i), s), s += u, r -= u;
                    return _
                }
                var d = new Ct;
                d.size(i, n), d.asBitmap = !0;
                var f = null;
                if (0 != t || 0 != e || i != h || n != l) {
                    var p = (f = f.concat())[0],
                        m = f[1],
                        g = (f[2] - p) / h,
                        v = (f[7] - m) / l;
                    f = [p + t * g, m + e * v, p + (t + i) * g, m + e * v, p + (t + i) * g, m + (e + n) * v, p + t * g, m + (e + n) * v]
                }
                d._drawTextureM(this, 0, 0, i, n, null, 1, f), d._targets.start(), d.flush(), d._targets.end(), d._targets.restore();
                var y = d._targets.getData(0, 0, i, n);
                for (d.destroy(), _ = new Uint8Array(i * n * 4), s = 0, r = (n - 1) * u, a = n - 1; 0 <= a; a--)
                    _.set(y.slice(r, r + u), s), s += u, r -= u;
                return _
            }, t.getPixels = function(t, e, i, n) {
                return te.isConchApp ? this._nativeObj.getImageData(t, e, i, n) : this.getTexturePixels(t, e, i, n)
            }, t.recoverBitmap = function(e) {
                var i = this,
                    t = this._bitmap.url;
                this._destroyed || this._bitmap && !this._bitmap.destroyed || !t || y.loader.load(t, b.create(this, function(t) {
                    i.bitmap = t, e && e()
                }), null, "htmlimage", 1, !1, null, !0)
            }, t.disposeBitmap = function() {
                !this._destroyed && this._bitmap && this._bitmap.destroy()
            }, t.destroy = function(t) {
                if (void 0 === t && (t = !1), !this._destroyed) {
                    this._destroyed = !0;
                    var e = this._bitmap;
                    e && (e._removeReference(this._referenceCount), 0 !== e.referenceCount && !t || e.destroy(), e = null), this.url && this === y.loader.getRes(this.url) && y.loader.clearRes(this.url)
                }
            }, f(0, t, "height", function() {
                return this._h ? this._h : this.bitmap ? this.uv && this.uv !== C.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0
            }, function(t) {
                this._h = t, this.sourceHeight || (this.sourceHeight = t)
            }), f(0, t, "uv", function() {
                return this._uv
            }, function(t) {
                this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], this._uv = t
            }), f(0, t, "width", function() {
                return this._w ? this._w : this.bitmap ? this.uv && this.uv !== C.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0
            }, function(t) {
                this._w = t, this.sourceWidth || (this.sourceWidth = t)
            }), f(0, t, "bitmap", function() {
                return this._bitmap
            }, function(t) {
                this._bitmap && this._bitmap._removeReference(this._referenceCount), (this._bitmap = t) && t._addReference(this._referenceCount)
            }), f(0, t, "destroyed", function() {
                return this._destroyed
            }), C.moveUV = function(t, e, i) {
                for (var n = 0; n < 8; n += 2)
                    i[n] += t, i[n + 1] += e;
                return i
            }, C.create = function(t, e, i, n, s, r, a, o, h) {
                return void 0 === r && (r = 0), void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === h && (h = 0), C._create(t, e, i, n, s, r, a, o, h)
            }, C._create = function(t, e, i, n, s, r, a, o, h, l) {
                void 0 === r && (r = 0), void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === h && (h = 0);
                var u, c = t instanceof laya.resource.Texture,
                    _ = c ? t.uv : C.DEF_UV,
                    d = c ? t.bitmap : t;
                d.width && e + n > d.width && (n = d.width - e), d.height && i + s > d.height && (s = d.height - i), l ? (u = l).setTo(d, null, o || n, h || s) : u = new C(d, null, o || n, h || s), u.width = n, u.height = s, u.offsetX = r, u.offsetY = a;
                var f = 1 / d.width,
                    p = 1 / d.height;
                e *= f, i *= p, n *= f, s *= p;
                var m = u.uv[0],
                    g = u.uv[1],
                    v = u.uv[4],
                    y = u.uv[5],
                    x = v - m,
                    T = y - g,
                    b = C.moveUV(_[0], _[1], [e, i, e + n, i, e + n, i + s, e, i + s]);
                u.uv = new Float32Array([m + b[0] * x, g + b[1] * T, v - (1 - b[2]) * x, g + b[3] * T, v - (1 - b[4]) * x, y - (1 - b[5]) * T, m + b[6] * x, y - (1 - b[7]) * T]);
                var w = d.scaleRate;
                return w && 1 != w ? (u.sourceWidth /= w, u.sourceHeight /= w, u.width /= w, u.height /= w, u.scaleRate = w) : u.scaleRate = 1, u
            }, C.createFromTexture = function(t, e, i, n, s) {
                var r = t.scaleRate;
                1 != r && (e *= r, i *= r, n *= r, s *= r);
                var a = Ot.TEMP.setTo(e - t.offsetX, i - t.offsetY, n, s),
                    o = a.intersection(C._rect1.setTo(0, 0, t.width, t.height), C._rect2);
                return o ? C.create(t, o.x, o.y, o.width, o.height, o.x - a.x, o.y - a.y, n, s) : null
            }, C.DEF_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), C.NO_UV = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]), C.INV_UV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), C._rect1 = new Ot, C._rect2 = new Ot, C
        }(),
        Ci = function() {
            function t() {
                this._responseType = null, this._data = null, this._url = null, t.__super.call(this), this._http = new re.window.XMLHttpRequest
            }
            m(t, "laya.net.HttpRequest", T);
            var e = t.prototype;
            return e.send = function(t, e, i, n, s) {
                void 0 === i && (i = "get"), void 0 === n && (n = "text"), this._responseType = n, this._data = null, this._url = t;
                var r = this,
                    a = this._http;
                if (t = ot.getAdptedFilePath(t), a.open(i, t, !0), s)
                    for (var o = 0; o < s.length; o++)
                        a.setRequestHeader(s[o++], s[o]);
                else
                    te.isConchApp || (e && "string" != typeof e ? a.setRequestHeader("Content-Type", "application/json") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                a.responseType = "arraybuffer" !== n ? "text" : "arraybuffer", a.onerror = function(t) {
                    r._onError(t)
                }, a.onabort = function(t) {
                    r._onAbort(t)
                }, a.onprogress = function(t) {
                    r._onProgress(t)
                }, a.onload = function(t) {
                    r._onLoad(t)
                }, a.send(e)
            }, e._onProgress = function(t) {
                t && t.lengthComputable && this.event("progress", t.loaded / t.total)
            }, e._onAbort = function(t) {
                this.error("Request was aborted by user")
            }, e._onError = function(t) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText)
            }, e._onLoad = function(t) {
                var e = this._http,
                    i = void 0 !== e.status ? e.status : 200;
                200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL)
            }, e.error = function(t) {
                this.clear(), console.warn(this.url, t), this.event("error", t)
            }, e.complete = function() {
                this.clear();
                var e = !0;
                try {
                    "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = ke.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText
                } catch (t) {
                    e = !1, this.error(t.message)
                }
                e && this.event("complete", this._data instanceof Array ? [this._data] : this._data)
            }, e.clear = function() {
                var t = this._http;
                t.onerror = t.onabort = t.onprogress = t.onload = null
            }, f(0, e, "url", function() {
                return this._url
            }), f(0, e, "http", function() {
                return this._http
            }), f(0, e, "data", function() {
                return this._data
            }), t
        }(),
        Ai = function() {
            function E() {
                this._data = null, this._url = null, this._type = null, this._cache = !1, this._http = null, this._useWorkerLoader = !1, this._customParse = !1, this._constructParams = null, this._propertyParams = null, this._createCache = !1, E.__super.call(this)
            }
            m(E, "laya.net.Loader", T);
            var t = E.prototype;
            return t.load = function(t, e, i, n, s, r) {
                if (void 0 === i && (i = !0), void 0 === s && (s = !1), void 0 === r && (r = !1), t) {
                    if (E.setGroup(t, "666"), 0 === (this._url = t).indexOf("data:image") ? e = "image" : t = ot.formatURL(t), this._type = e || (e = E.getTypeFromUrl(this._url)), this._cache = i, this._useWorkerLoader = r, this._data = null, r && Fi.enableWorkerLoader(), !s && E.loadedMap[t])
                        return this._data = E.loadedMap[t], this.event("progress", 1), void this.event("complete", this._data);
                    if (n && E.setGroup(t, n), null != E.parserMap[e])
                        return this._customParse = !0, void(E.parserMap[e] instanceof laya.utils.Handler ? E.parserMap[e].runWith(this) : E.parserMap[e].call(null, this));
                    if ("image" === e || "htmlimage" === e || "nativeimage" === e)
                        return this._loadImage(t);
                    if ("sound" === e)
                        return this._loadSound(t);
                    if ("ttf" === e)
                        return this._loadTTF(t);
                    if (typeof loadRuntime !== 'undefined' && !t.startsWith("http")) {
                        let that = this
                        setTimeout(() => {
                            if (t.startsWith('file://'))
                                t = t.substr('file://'.length);
                            var rt = loadRuntime();
                            var response;
                            var type = e;
                            t = ot.getAdptedFilePath(t);
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
                    var a;
                    switch (e) {
                        case "atlas":
                        case "prefab":
                        case "plf":
                            a = "json";
                            break;
                        case "font":
                            a = "xml";
                            break;
                        case "plfb":
                            a = "arraybuffer";
                            break;
                        default:
                            a = e
                    }
                    E.preLoadedMap[t] ? this.onLoaded(E.preLoadedMap[t]) : (this._http || (this._http = new Ci, this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", a))
                } else
                    this.onLoaded(null)
            }, t._loadTTF = function(t) {
                t = ot.formatURL(t);
                var e = new Y;
                e.complete = b.create(this, this.onLoaded), e.load(t)
            }, t._loadImage = function(i) {
                i = ot.formatURL(i);
                var n, s = this;

                function r() {
                    var t = n;
                    t && (t.onload = null, t.onerror = null, delete E._imgCache[i])
                }

                function t() {
                    r(), s.event("error", "Load image failed")
                }
                if ("nativeimage" === this._type) {
                    var e = function() {
                        r(), s.onLoaded(n)
                    };
                    (n = new re.window.Image).crossOrigin = "", n.onload = e, n.onerror = t, n.src = i, E._imgCache[i] = n
                } else {
                    var a = ke.getFileExtension(i);
                    if ("ktx" === a || "pvr" === a) {
                        var o;
                        e = function(t) {
                            var e = 0;
                            switch (a) {
                                case "ktx":
                                    e = 5;
                                    break;
                                case "pvr":
                                    e = 12
                            }
                            (n = new _n(0, 0, e, !1, !1)).wrapModeU = 1, n.wrapModeV = 1, n.setCompressData(t), n._setCreateURL(i), r(), s.onLoaded(n)
                        }, (o = new Ci).on("error", null, t), o.on("complete", null, e), o.send(i, null, "get", "arraybuffer")
                    } else {
                        var h = new re.window.Image;
                        e = function() {
                            var t = new _n(h.width, h.height, 1, !1, !1);
                            t.wrapModeU = 1, t.wrapModeV = 1, t.loadImageSource(h, !0), t._setCreateURL(i), r(), s.onLoaded(t)
                        }, h.crossOrigin = "", h.onload = e, h.onerror = t, h.src = i, E._imgCache[i] = h
                    }
                }
            }, t._loadSound = function(t) {
                var e = new ui._soundClass,
                    i = this;

                function n() {
                    e.offAll()
                }
                e.on("complete", this, function() {
                    n(), i.onLoaded(e)
                }), e.on("error", this, function() {
                    n(), e.dispose(), i.event("error", "Load sound failed")
                }), e.load(t)
            }, t.onProgress = function(t) {
                "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t)
            }, t.onError = function(t) {
                this.event("error", t)
            }, t.onLoaded = function(t) {
                var e = this._type;
                if ("plfb" == e)
                    this.parsePLFBData(t), this.complete(t);
                else if ("plf" == e)
                    this.parsePLFData(t), this.complete(t);
                else if ("image" === e) {
                    var i = new wi(t);
                    i.url = this._url, this.complete(i)
                } else if ("sound" === e || "htmlimage" === e || "nativeimage" === e)
                    this.complete(t);
                else if ("atlas" === e) {
                    if (!t.url && !t._setContext) {
                        if (!this._data) {
                            if ((this._data = t).meta && t.meta.image) {
                                var n, s = t.meta.image.split(","),
                                    r = 0 <= this._url.indexOf("/") ? "/" : "\\",
                                    a = this._url.lastIndexOf(r),
                                    o = 0 <= a ? this._url.substr(0, a + 1) : "";
                                re.onAndroid && t.meta.compressTextureAndroid && (n = ".ktx"), re.onIOS && t.meta.compressTextureIOS && (n = ".pvr");
                                for (var h = 0, l = s.length; h < l; h++)
                                    s[h] = n ? o + s[h].replace(".png", n) : o + s[h]
                            } else
                                s = [this._url.replace(".json", ".png")];
                            s.reverse(), t.toLoads = s, t.pics = []
                        }
                        return this.event("progress", .3 + 1 / s.length * .6), this._loadImage(s.pop())
                    }
                    if (this._data.pics.push(t), 0 < this._data.toLoads.length)
                        return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), this._loadImage(this._data.toLoads.pop());
                    var u = this._data.frames,
                        c = this._url.split("?")[0],
                        _ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/",
                        d = this._data.pics,
                        f = ot.formatURL(this._url),
                        p = E.atlasMap[f] || (E.atlasMap[f] = []);
                    p.dir = _;
                    var m = 1;
                    if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                        for (var g in m = parseFloat(this._data.meta.scale), u) {
                            var v, y = u[g],
                                x = d[y.frame.idx ? y.frame.idx : 0],
                                T = ot.formatURL(_ + g);
                            x.scaleRate = m, v = wi._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(T)), E.cacheRes(T, v), v.url = T, p.push(T)
                        }
                    else
                        for (g in u)
                            x = d[(y = u[g]).frame.idx ? y.frame.idx : 0], T = ot.formatURL(_ + g), v = wi._create(x, y.frame.x, y.frame.y, y.frame.w, y.frame.h, y.spriteSourceSize.x, y.spriteSourceSize.y, y.sourceSize.w, y.sourceSize.h, laya.net.Loader.getRes(T)), E.cacheRes(T, v), v.url = T, p.push(T);
                    delete this._data.pics, this.complete(this._data)
                } else if ("font" === e) {
                    if (!t._source)
                        return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                    var b = new U;
                    b.parseFont(this._data, new wi(t));
                    var w = this._url.split(".fnt")[0].split("/"),
                        C = w[w.length - 1];
                    Ji.registerBitmapFont(C, b), this._data = b, this.complete(this._data)
                } else if ("prefab" === e) {
                    var A = new ai;
                    A.json = t, this.complete(A)
                } else
                    this.complete(t)
            }, t.parsePLFData = function(t) {
                var e, i, n;
                for (e in t)
                    switch (n = t[e], e) {
                        case "json":
                        case "text":
                            for (i in n)
                                E.preLoadedMap[ot.formatURL(i)] = n[i];
                            break;
                        default:
                            for (i in n)
                                E.preLoadedMap[ot.formatURL(i)] = n[i]
                    }
            }, t.parsePLFBData = function(t) {
                var e, i, n = 0;
                for (i = (e = new Ae(t)).getInt32(), n = 0; n < i; n++)
                    this.parseOnePLFBFile(e)
            }, t.parseOnePLFBFile = function(t) {
                var e, i, n;
                i = t.getUTFString(), e = t.getInt32(), n = t.readArrayBuffer(e), E.preLoadedMap[ot.formatURL(i)] = n
            }, t.complete = function(t) {
                this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [t] : t) : (E._loaders.push(this), E._isWorking || E.checkNext())
            }, t.endLoad = function(t) {
                t && (this._data = t), this._cache && E.cacheRes(this._url, this._data), this.event("progress", 1), this.event("complete", this.data instanceof Array ? [this.data] : this.data)
            }, f(0, t, "url", function() {
                return this._url
            }), f(0, t, "data", function() {
                return this._data
            }), f(0, t, "cache", function() {
                return this._cache
            }), f(0, t, "type", function() {
                return this._type
            }), E.getTypeFromUrl = function(t) {
                var e = ke.getFileExtension(t);
                return e ? E.typeMap[e] : (console.warn("Not recognize the resources suffix", t), "text")
            }, E.checkNext = function() {
                E._isWorking = !0;
                for (var t = re.now(); E._startIndex < E._loaders.length;)
                    if (re.now(), E._loaders[E._startIndex].endLoad(), E._startIndex++, re.now() - t > E.maxTimeOut)
                        return console.warn("loader callback cost a long time:" + (re.now() - t) + " url=" + E._loaders[E._startIndex - 1].url), void y.systemTimer.frameOnce(1, null, E.checkNext);
                E._loaders.length = 0, E._startIndex = 0, E._isWorking = !1
            }, E.clearRes = function(t) {
                t = ot.formatURL(t);
                var e = E.getAtlas(t);
                if (e) {
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i],
                            r = E.getRes(s);
                        delete E.loadedMap[s], r && r.destroy()
                    }
                    e.length = 0, delete E.atlasMap[t], delete E.loadedMap[t]
                } else {
                    var a = E.loadedMap[t];
                    a && (delete E.loadedMap[t], a instanceof laya.resource.Texture && a.bitmap && a.destroy())
                }
            }, E.clearTextureRes = function(t) {
                t = ot.formatURL(t);
                var e = laya.net.Loader.getAtlas(t),
                    i = e && 0 < e.length ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
                i instanceof laya.resource.Texture && i.disposeBitmap()
            }, E.getRes = function(t) {
                return E.loadedMap[ot.formatURL(t)]
            }, E.getAtlas = function(t) {
                return E.atlasMap[ot.formatURL(t)]
            }, E.cacheRes = function(t, e) {
                t = ot.formatURL(t), null != E.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : E.loadedMap[t] = e
            }, E.setGroup = function(t, e) {
                E.groupMap[e] || (E.groupMap[e] = []), E.groupMap[e].push(t)
            }, E.clearResByGroup = function(t) {
                if (E.groupMap[t]) {
                    var e = E.groupMap[t],
                        i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        E.clearRes(e[i]);
                    e.length = 0
                }
            }, E.TEXT = "text", E.JSON = "json", E.PREFAB = "prefab", E.XML = "xml", E.BUFFER = "arraybuffer", E.IMAGE = "image", E.SOUND = "sound", E.ATLAS = "atlas", E.FONT = "font", E.TTF = "ttf", E.PLF = "plf", E.PLFB = "plfb", E.HIERARCHY = "HIERARCHY", E.MESH = "MESH", E.MATERIAL = "MATERIAL", E.TEXTURE2D = "TEXTURE2D", E.TEXTURECUBE = "TEXTURECUBE", E.ANIMATIONCLIP = "ANIMATIONCLIP", E.AVATAR = "AVATAR", E.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", E.TERRAINRES = "TERRAIN", E.typeMap = {
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
            }, E.parserMap = {}, E.maxTimeOut = 100, E.groupMap = {}, E.loadedMap = {}, E.atlasMap = {}, E.preLoadedMap = {}, E._imgCache = {}, E._loaders = [], E._isWorking = !1, E._startIndex = 0, E
        }(),
        Ei = (function() {
            function e(t) {
                this.strength = NaN, this.strength_sig2_2sig2_gauss1 = [], this.strength_sig2_native = null, this.renderFunc = null, e.__super.call(this), void 0 === t && (t = 4), this.strength = t, this._glRender = new At
            }
            m(e, "laya.filters.BlurFilter", i);
            var t = e.prototype;
            t.getStrenth_sig2_2sig2_native = function() {
                this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
                var t = this.strength / 3,
                    e = t * t;
                return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = e, this.strength_sig2_native[2] = 2 * e, this.strength_sig2_native[3] = 1 / (2 * Math.PI * e), this.strength_sig2_native
            }, f(0, t, "type", function() {
                return 16
            })
        }(), function() {
            function t() {
                this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, this._u8Array = null, t.__super.call(this)
            }
            m(t, "laya.webgl.utils.Buffer2D", q);
            var e = t.prototype;
            return e.setByteLength = function(t) {
                this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), this._byteLength = t)
            }, e.needSize = function(t) {
                var e = this._byteLength;
                if (t) {
                    var i = this._byteLength + t;
                    i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i
                }
                return e
            }, e._bufferData = function() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), R.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, se.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), se.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength))
            }, e._bufferSubData = function(t, e, i) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), R.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, se.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                    var n = this._buffer.slice(e, i);
                    se.instance.bufferSubData(this._bufferType, t, n)
                } else
                    se.instance.bufferSubData(this._bufferType, t, this._buffer)
            }, e._checkArrayUse = function() {}, e._bind_uploadForVAO = function() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0)
            }, e._bind_upload = function() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0)
            }, e._bind_subUpload = function(t, e, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), !0)
            }, e._resizeBuffer = function(t, e) {
                var i = this._buffer;
                if (t <= i.byteLength)
                    return this;
                var n = this._u8Array;
                if (e && i && 0 < i.byteLength) {
                    var s = new ArrayBuffer(t),
                        r = n && n.buffer == i ? n : new Uint8Array(i);
                    (n = this._u8Array = new Uint8Array(s)).set(r, 0), i = this._buffer = s
                } else
                    i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, this
            }, e.append = function(t) {
                this._upload = !0;
                var e, i;
                e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0), i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0), i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0), i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e, this._checkArrayUse()
            }, e.appendU16Array = function(t, e) {
                this._resizeBuffer(this._byteLength + 2 * e, !0);
                var i = new Uint16Array(this._buffer, this._byteLength, e);
                if (6 == e)
                    i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5];
                else if (100 <= e)
                    i.set(new Uint16Array(t.buffer, 0, e));
                else
                    for (var n = 0; n < e; n++)
                        i[n] = t[n];
                this._byteLength += 2 * e, this._checkArrayUse()
            }, e.appendEx = function(t, e) {
                this._upload = !0;
                var i;
                i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0), this._byteLength += i, this._checkArrayUse()
            }, e.appendEx2 = function(t, e, i, n) {
                void 0 === n && (n = 1), this._upload = !0;
                var s, r;
                s = i * n, this._resizeBuffer(this._byteLength + s, !0), r = new e(this._buffer, this._byteLength);
                var a = 0;
                for (a = 0; a < i; a++)
                    r[a] = t[a];
                this._byteLength += s, this._checkArrayUse()
            }, e.getBuffer = function() {
                return this._buffer
            }, e.setNeedUpload = function() {
                this._upload = !0
            }, e.getNeedUpload = function() {
                return this._upload
            }, e.upload = function() {
                var t = this._bind_upload();
                return se.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (q._bindedVertexBuffer = null), 34963 == this._bufferType && (q._bindedIndexBuffer = null), Hi.activeShader = null, t
            }, e.subUpload = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
                var n = this._bind_subUpload();
                return se.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (q._bindedVertexBuffer = null), 34963 == this._bufferType && (q._bindedIndexBuffer = null), Hi.activeShader = null, n
            }, e._disposeResource = function() {
                this._upload = !0, this._uploadSize = 0
            }, e.clear = function() {
                this._byteLength = 0, this._upload = !0
            }, f(0, e, "bufferLength", function() {
                return this._buffer.byteLength
            }), f(0, e, "byteLength", null, function(t) {
                this.setByteLength(t)
            }), t.__int__ = function(t) {}, t.FLOAT32 = 4, t.SHORT = 2, t
        }()),
        Si = (function() {
            function s(t, e, i, n) {
                this._sv_blurInfo2 = [0, 0, 1, 0], this._color = null, this._color_native = null, this._blurInof1_native = null, this._blurInof2_native = null, s.__super.call(this), this._elements = new Float32Array(9), this._sv_blurInfo1 = new Array(4), void 0 === e && (e = 4), void 0 === i && (i = 6), void 0 === n && (n = 6), this._color = new v(t), this.blur = Math.min(e, 20), this.offX = i, this.offY = n, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = this.blur, this._sv_blurInfo1[2] = i, this._sv_blurInfo1[3] = -n, this._glRender = new $e
            }
            m(s, "laya.filters.GlowFilter", i);
            var t = s.prototype;
            t.getColor = function() {
                return this._color.arrColor
            }, t.getColorNative = function() {
                this._color_native || (this._color_native = new Float32Array(4));
                var t = this.getColor();
                return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2], this._color_native[3] = t[3], this._color_native
            }, t.getBlurInfo1Native = function() {
                return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, this._blurInof1_native[3] = this.offY, this._blurInof1_native
            }, t.getBlurInfo2Native = function() {
                return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), this._blurInof2_native[2] = 1, this._blurInof2_native
            }, f(0, t, "type", function() {
                return 8
            }), f(0, t, "offY", function() {
                return this._elements[6]
            }, function(t) {
                this._elements[6] = t, this._sv_blurInfo1[3] = -t
            }), f(0, t, "offX", function() {
                return this._elements[5]
            }, function(t) {
                this._elements[5] = t, this._sv_blurInfo1[2] = t
            }), f(0, t, "blur", function() {
                return this._elements[4]
            }, function(t) {
                this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t
            })
        }(), function() {
            function i() {
                i.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo), laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib, this._quadNum = i._maxIB) : (this.createQuadIB(i._maxIB), laya.webgl.utils.MeshQuadTexture._fixib = this._ib)
            }
            m(i, "laya.webgl.utils.MeshQuadTexture", A);
            var t = i.prototype;
            return t.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this)
            }, t.destroy = function() {
                this._vb.destroy(), this._vb.deleteBuffer()
            }, t.addQuad = function(t, e, i, n) {
                var s = this._vb,
                    r = s._byteLength >> 2;
                s.setByteLength(24 + r << 2);
                var a = s._floatArray32 || s.getFloat32Array(),
                    o = s._uint32Array,
                    h = r,
                    l = n ? 255 : 0;
                a[h++] = t[0], a[h++] = t[1], a[h++] = e[0], a[h++] = e[1], o[h++] = i, o[h++] = l, a[h++] = t[2], a[h++] = t[3], a[h++] = e[2], a[h++] = e[3], o[h++] = i, o[h++] = l, a[h++] = t[4], a[h++] = t[5], a[h++] = e[4], a[h++] = e[5], o[h++] = i, o[h++] = l, a[h++] = t[6], a[h++] = t[7], a[h++] = e[6], a[h++] = e[7], o[h++] = i, o[h++] = l, s._upload = !0
            }, i.getAMesh = function(t) {
                var e = null;
                return e = laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new i, t && e._vb._resizeBuffer(1572864, !1), e
            }, i.const_stride = 24, i._fixib = null, i._maxIB = 16384, i._POOL = [], a(i, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }]), i
        }()),
        Mi = function() {
            function n() {
                this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, this._disposed = !1, n.__super.call(this)
            }
            m(n, "laya.media.webaudio.WebAudioSound", T);
            var t = n.prototype;
            return t.load = function(t) {
                var e = this;
                if (t = ot.formatURL(t), this.url = t, this.audioBuffer = n._dataCache[t], this.audioBuffer)
                    this._loaded(this.audioBuffer);
                else if (n.e.on("loaded:" + t, this, this._loaded), n.e.on("err:" + t, this, this._err), !n.__loadingSound[t]) {
                    n.__loadingSound[t] = !0;
                    var i = new re.window.XMLHttpRequest;
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        e._disposed ? e._removeLoadEvents() : (e.data = i.response, n.buffs.push({
                            buffer: e.data,
                            url: e.url
                        }), n.decode())
                    }, i.onerror = function(t) {
                        e._err()
                    }, i.send()
                }
            }, t._err = function() {
                this._removeLoadEvents(), n.__loadingSound[this.url] = !1, this.event("error")
            }, t._loaded = function(t) {
                this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, n._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event("complete"))
            }, t._removeLoadEvents = function() {
                n.e.off("loaded:" + this.url, this, this._loaded), n.e.off("err:" + this.url, this, this._err)
            }, t.__playAfterLoaded = function() {
                if (this.__toPlays) {
                    var t, e, i, n = 0;
                    for (t = (e = this.__toPlays).length, n = 0; n < t; n++)
                        (i = e[n])[2] && !i[2].isStopped && this.play(i[0], i[1], i[2]);
                    this.__toPlays.length = 0
                }
            }, t.play = function(t, e, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i || new qi, this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([t, e, i]), this.once("complete", this, this.__playAfterLoaded), this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, i.startTime = t, i.play(), ui.addChannel(i), i
            }, t.dispose = function() {
                this._disposed = !0, delete n._dataCache[this.url], delete n.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = []
            }, f(0, t, "duration", function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0
            }), n.decode = function() {
                n.buffs.length <= 0 || n.isDecoding || (n.isDecoding = !0, n.tInfo = n.buffs.shift(), n.ctx.decodeAudioData(n.tInfo.buffer, n._done, n._fail))
            }, n._done = function(t) {
                n.e.event("loaded:" + n.tInfo.url, t), n.isDecoding = !1, n.decode()
            }, n._fail = function() {
                n.e.event("err:" + n.tInfo.url, null), n.isDecoding = !1, n.decode()
            }, n._playEmptySound = function() {
                if (null != n.ctx) {
                    var t = n.ctx.createBufferSource();
                    t.buffer = n._miniBuffer, t.connect(n.ctx.destination), t.start(0, 0, 0)
                }
            }, n._unlock = function() {
                n._unlocked || (n._playEmptySound(), "running" == n.ctx.state && (re.document.removeEventListener("mousedown", n._unlock, !0), re.document.removeEventListener("touchend", n._unlock, !0), re.document.removeEventListener("touchstart", n._unlock, !0), n._unlocked = !0))
            }, n.initWebAudio = function() {
                "running" != n.ctx.state && (n._unlock(), re.document.addEventListener("mousedown", n._unlock, !0), re.document.addEventListener("touchend", n._unlock, !0), re.document.addEventListener("touchstart", n._unlock, !0))
            }, n._dataCache = {}, n.buffs = [], n.isDecoding = !1, n._unlocked = !1, n.tInfo = null, n.__loadingSound = {}, a(n, ["window", function() {
                return this.window = re.window
            }, "webAudioEnabled", function() {
                return this.webAudioEnabled = n.window.AudioContext || n.window.webkitAudioContext || n.window.mozAudioContext
            }, "ctx", function() {
                return this.ctx = n.webAudioEnabled ? new(n.window.AudioContext || n.window.webkitAudioContext || n.window.mozAudioContext) : void 0
            }, "_miniBuffer", function() {
                return this._miniBuffer = n.ctx.createBuffer(1, 1, 22050)
            }, "e", function() {
                return this.e = new T
            }]), n
        }(),
        Ri = (function() {
            function s(t, e, i, n) {
                this._endian = null, this._socket = null, this._connected = !1, this._addInputPosition = 0, this._input = null, this._output = null, this.disableInput = !1, this._byteClass = null, this.protocols = [], s.__super.call(this), void 0 === e && (e = 0), this._byteClass = i || Ae, this.protocols = n, this.endian = "bigEndian", t && 0 < e && e < 65535 && this.connect(t, e)
            }
            m(s, "laya.net.Socket", T);
            var t = s.prototype;
            t.connect = function(t, e) {
                var i = "ws://" + t + ":" + e;
                this.connectByUrl(i)
            }, t.connectByUrl = function(t) {
                var e = this;
                null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new re.window.WebSocket(t, this.protocols) : this._socket = new re.window.WebSocket(t), this._socket.binaryType = "arraybuffer", this._output = new this._byteClass, this._output.endian = this.endian, this._input = new this._byteClass, this._input.endian = this.endian, this._addInputPosition = 0, this._socket.onopen = function(t) {
                    e._onOpen(t)
                }, this._socket.onmessage = function(t) {
                    e._onMessage(t)
                }, this._socket.onclose = function(t) {
                    e._onClose(t)
                }, this._socket.onerror = function(t) {
                    e._onError(t)
                }
            }, t.cleanSocket = function() {
                this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null, this._socket = null
            }, t.close = function() {
                if (null != this._socket)
                    try {
                        this._socket.close()
                    } catch (t) {}
            }, t._onOpen = function(t) {
                this._connected = !0, this.event("open", t)
            }, t._onMessage = function(t) {
                if (t && t.data) {
                    var e = t.data;
                    if (this.disableInput && e)
                        this.event("message", e);
                    else {
                        0 < this._input.length && this._input.bytesAvailable < 1 && (this._input.clear(), this._addInputPosition = 0);
                        var i = this._input.pos;
                        this._addInputPosition || (this._addInputPosition = 0), this._input.pos = this._addInputPosition, e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e)
                    }
                }
            }, t._onClose = function(t) {
                this._connected = !1, this.event("close", t)
            }, t._onError = function(t) {
                this.event("error", t)
            }, t.send = function(t) {
                this._socket.send(t)
            }, t.flush = function() {
                if (this._output && 0 < this._output.length) {
                    var e;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length))
                    } catch (t) {
                        e = t
                    }
                    this._output.endian = this.endian, this._output.clear(), e && this.event("error", e)
                }
            }, f(0, t, "input", function() {
                return this._input
            }), f(0, t, "output", function() {
                return this._output
            }), f(0, t, "connected", function() {
                return this._connected
            }), f(0, t, "endian", function() {
                return this._endian
            }, function(t) {
                this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t)
            }), s.LITTLE_ENDIAN = "littleEndian", s.BIG_ENDIAN = "bigEndian"
        }(), m(Ii, "laya.webgl.shader.d2.value.TextureSV", Z), Ii.prototype.clear = function() {
            this.texture = null, this.shader = null, this.defines._value = this.subID + (jt.shaderHighPrecision ? 1024 : 0)
        }, Ii);

    function Ii(t) {
        this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, this.colorAlpha = null, void 0 === t && (t = 0), Ii.__super.call(this, 1, t), this._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2]
    }! function() {
        function t() {
            t.__super.call(this)
        }
        m(t, "laya.components.CommonScript", s);
        var e = t.prototype;
        e.onAwake = function() {}, e.onEnable = function() {}, e.onStart = function() {}, e.onUpdate = function() {}, e.onLateUpdate = function() {}, e.onDisable = function() {}, e.onDestroy = function() {}, f(0, e, "isSingleton", function() {
            return !1
        })
    }();
    var Pi = function() {
            var d;

            function f() {
                this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, this._failRes = {}, this._statInfo = {
                    count: 1,
                    loaded: 1
                }, f.__super.call(this);
                for (var t = 0; t < this._maxPriority; t++)
                    this._resInfos[t] = []
            }
            m(f, "laya.net.LoaderManager", T);
            var t = f.prototype;
            return t.getProgress = function() {
                return this._statInfo.loaded / this._statInfo.count
            }, t.resetProgress = function() {
                this._statInfo.count = this._statInfo.loaded = 1
            }, t.create = function(t, e, i, n, s, r, a, o) {
                void 0 === a && (a = 1), void 0 === o && (o = !0), this._create(t, !0, e, i, n, s, r, a, o)
            }, t._create = function(t, e, i, n, s, r, a, o, h) {
                if (void 0 === o && (o = 1), void 0 === h && (h = !0), t instanceof Array) {
                    var l = !0,
                        u = t,
                        c = u.length,
                        _ = 0;
                    if (n)
                        var d = b.create(n.caller, n.method, n.args, !1);
                    for (var f = 0; f < c; f++) {
                        var p = u[f];
                        "string" == typeof p && (p = u[f] = {
                            url: p
                        }), p.progress = 0
                    }
                    for (f = 0; f < c; f++) {
                        p = u[f];
                        var m = n ? b.create(null, y, [p], !1) : null,
                            g = n || i ? b.create(null, v, [p]) : null;
                        this._createOne(p.url, e, g, m, p.type || s, p.constructParams || r, p.propertyParams || a, p.priority || o, h)
                    }

                    function v(t, e) {
                        _++, t.progress = 1, e || (l = !1), _ === c && i && i.runWith(l)
                    }

                    function y(t, e) {
                        t.progress = e;
                        for (var i = 0, n = 0; n < c; n++) {
                            i += u[n].progress
                        }
                        var s = i / c;
                        d.runWith(s)
                    }
                } else
                    this._createOne(t, e, i, n, s, r, a, o, h)
            }, t._createOne = function(e, i, n, t, s, r, a, o, h) {
                void 0 === o && (o = 1), void 0 === h && (h = !0);
                var l = this.getRes(e);
                if (l)
                    !i && l instanceof laya.resource.Resource && l._addReference(), t && t.runWith(1), n && n.runWith(l);
                else {
                    var u = ke.getFileExtension(e);
                    if (s || (s = f.createMap[u] ? f.createMap[u][0] : null), !s)
                        return void this.load(e, n, t, s, o, h);
                    if (!Ai.parserMap[s])
                        return void this.load(e, n, t, s, o, h);
                    this._createLoad(e, b.create(null, function(t) {
                        t && (!i && t instanceof laya.resource.Resource && t._addReference(), t._setCreateURL(e));
                        n && n.runWith(t), y.loader.event(e)
                    }), t, s, r, a, o, h, !0)
                }
            }, t.load = function(t, e, i, n, s, r, a, o, h) {
                var l = this;
                if (void 0 === s && (s = 1), void 0 === r && (r = !0), void 0 === o && (o = !1), void 0 === h && (h = !1), t instanceof Array)
                    return this._loadAssets(t, e, i, n, s, r, a);
                var u = Ai.getRes(t);
                if (o || null == u) {
                    var c;
                    c = t, (t = Ze.getFileLoadPath(t)) != c && "nativeimage" !== n ? n = "atlas" : c = null;
                    var _ = f._resMap[t];
                    _ ? (e && (c ? e && _._createListener("complete", this, this._resInfoLoaded, [c, e], !1, !1) : e && _._createListener("complete", e.caller, e.method, e.args, !1, !1)), i && _._createListener("progress", i.caller, i.method, i.args, !1, !1)) : ((_ = this._infoPool.length ? this._infoPool.pop() : new d).url = t, _.type = n, _.cache = r, _.group = a, _.ignoreCache = o, _.useWorkerLoader = h, _.originalUrl = c, e && _.on("complete", e.caller, e.method, e.args), i && _.on("progress", i.caller, i.method, i.args), f._resMap[t] = _, s = s < this._maxPriority ? s : this._maxPriority - 1, this._resInfos[s].push(_), this._statInfo.count++, this.event("progress", this.getProgress()), this._next())
                } else
                    y.systemTimer.frameOnce(1, null, function() {
                        i && i.runWith(1), e && e.runWith(u instanceof Array ? [u] : u), l._loaderCount || l.event("complete")
                    });
                return this
            }, t._resInfoLoaded = function(t, e) {
                e.runWith(Ai.getRes(t))
            }, t._createLoad = function(t, e, i, n, s, r, a, o, h) {
                var l = this;
                if (void 0 === a && (a = 1), void 0 === o && (o = !0), void 0 === h && (h = !1), t instanceof Array)
                    return this._loadAssets(t, e, i, n, a, o);
                var u = Ai.getRes(t);
                if (null != u)
                    y.systemTimer.frameOnce(1, null, function() {
                        i && i.runWith(1), e && e.runWith(u), l._loaderCount || l.event("complete")
                    });
                else {
                    var c = f._resMap[t];
                    c ? (e && c._createListener("complete", e.caller, e.method, e.args, !1, !1), i && c._createListener("progress", i.caller, i.method, i.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new d).url = t, c.type = n, c.cache = !1, c.ignoreCache = h, c.originalUrl = null, c.createCache = o, c.createConstructParams = s, c.createPropertyParams = r, e && c.on("complete", e.caller, e.method, e.args), i && c.on("progress", i.caller, i.method, i.args), f._resMap[t] = c, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(c), this._statInfo.count++, this.event("progress", this.getProgress()), this._next())
                }
                return this
            }, t._next = function() {
                if (!(this._loaderCount >= this.maxLoader)) {
                    for (var t = 0; t < this._maxPriority; t++)
                        for (var e = this._resInfos[t]; 0 < e.length;) {
                            var i = e.shift();
                            if (i)
                                return this._doLoad(i)
                        }
                    this._loaderCount || this.event("complete")
                }
            }, t._doLoad = function(e) {
                this._loaderCount++;
                var i = this._loaders.length ? this._loaders.pop() : new Ai;
                i.on("complete", null, s), i.on("progress", null, function(t) {
                    e.event("progress", t)
                }), i.on("error", null, function(t) {
                    s(null)
                });
                var n = this;

                function s(t) {
                    i.offAll(), i._data = null, i._customParse = !1, n._loaders.push(i), n._endLoad(e, t instanceof Array ? [t] : t), n._loaderCount--, n._next()
                }
                i._constructParams = e.createConstructParams, i._propertyParams = e.createPropertyParams, i._createCache = e.createCache, i.load(e.url, e.type, e.cache, e.group, e.ignoreCache, e.useWorkerLoader)
            }, t._endLoad = function(t, e) {
                var i = t.url;
                if (null == e) {
                    var n = this._failRes[i] || 0;
                    if (n < this.retryNum)
                        return console.warn("[warn]Retry to load:", i), this._failRes[i] = n + 1, void y.systemTimer.once(this.retryDelay, this, this._addReTry, [t], !1);
                    Ai.clearRes(i), console.warn("[error]Failed to load:", i), this.event("error", i)
                }
                this._failRes[i] && (this._failRes[i] = 0), delete f._resMap[i], t.originalUrl && (e = Ai.getRes(t.originalUrl)), t.event("complete", e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, this.event("progress", this.getProgress())
            }, t._addReTry = function(t) {
                this._resInfos[this._maxPriority - 1].push(t), this._next()
            }, t.clearRes = function(t) {
                Ai.clearRes(t)
            }, t.clearTextureRes = function(t) {
                Ai.clearTextureRes(t)
            }, t.getRes = function(t) {
                return Ai.getRes(t)
            }, t.cacheRes = function(t, e) {
                Ai.cacheRes(t, e)
            }, t.setGroup = function(t, e) {
                Ai.setGroup(t, e)
            }, t.clearResByGroup = function(t) {
                Ai.clearResByGroup(t)
            }, t.clearUnLoaded = function() {
                for (var t = 0; t < this._maxPriority; t++) {
                    for (var e = this._resInfos[t], i = e.length - 1; - 1 < i; i--) {
                        var n = e[i];
                        n && (n.offAll(), this._infoPool.push(n))
                    }
                    e.length = 0
                }
                this._loaderCount = 0, f._resMap = {}
            }, t.cancelLoadByUrls = function(t) {
                if (t)
                    for (var e = 0, i = t.length; e < i; e++)
                        this.cancelLoadByUrl(t[e])
            }, t.cancelLoadByUrl = function(t) {
                for (var e = 0; e < this._maxPriority; e++)
                    for (var i = this._resInfos[e], n = i.length - 1; - 1 < n; n--) {
                        var s = i[n];
                        s && s.url === t && (i[n] = null, s.offAll(), this._infoPool.push(s))
                    }
                f._resMap[t] && delete f._resMap[t]
            }, t._loadAssets = function(t, i, a, e, n, s, r) {
                void 0 === n && (n = 1), void 0 === s && (s = !0);
                for (var o = t.length, h = 0, l = 0, u = [], c = !0, _ = 0; _ < o; _++) {
                    var d = t[_];
                    "string" == typeof d && (d = {
                        url: d,
                        type: e,
                        size: 1,
                        priority: n
                    }), d.size || (d.size = 1), d.progress = 0, l += d.size, u.push(d);
                    var f = a ? b.create(null, g, [d], !1) : null,
                        p = i || a ? b.create(null, m, [d]) : null;
                    this.load(d.url, p, f, d.type, d.priority || 1, s, d.group || r, !1, d.useWorkerLoader)
                }

                function m(t, e) {
                    h++, t.progress = 1, e || (c = !1), h === o && i && i.runWith(c)
                }

                function g(t, e) {
                    if (null != a) {
                        t.progress = e;
                        for (var i = 0, n = 0; n < u.length; n++) {
                            var s = u[n];
                            i += s.size * s.progress
                        }
                        var r = i / l;
                        a.runWith(r)
                    }
                }
                return this
            }, t.decodeBitmaps = function(t) {
                var e, i = 0,
                    n = t.length;
                for (e = te._context, i = 0; i < n; i++) {
                    var s, r;
                    if (s = Ai.getAtlas(t[i]))
                        this._decodeTexture(s[0], e);
                    else
                        (r = this.getRes(t[i])) && r instanceof laya.resource.Texture && this._decodeTexture(r, e)
                }
            }, t._decodeTexture = function(t, e) {
                var i = t.bitmap;
                if (t && i) {
                    var n = i.source || i.image;
                    if (n && y.__typeof(n, re.window.HTMLImageElement)) {
                        e.drawImage(n, 0, 0, 1, 1);
                        e.getImageData(0, 0, 1, 1)
                    }
                }
            }, f.cacheRes = function(t, e) {
                Ai.cacheRes(t, e)
            }, f._resMap = {}, a(f, ["createMap", function() {
                return this.createMap = {
                    atlas: [null, "atlas"]
                }
            }]), f.__init$ = function() {
                function t() {
                    this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, this.useWorkerLoader = !1, this.originalUrl = null, this.createCache = !1, this.createConstructParams = null, this.createPropertyParams = null, t.__super.call(this)
                }
                m(t, "", T), d = t
            }, f
        }(),
        Di = function() {
            function i() {
                i.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)
            }
            m(i, "laya.webgl.utils.MeshTexture", A);
            var t = i.prototype;
            return t.addData = function(t, e, i, n, s) {
                var r = this._vb,
                    a = this._ib,
                    o = t.length >> 1,
                    h = r.needSize(24 * o) >> 2,
                    l = r._floatArray32 || r.getFloat32Array(),
                    u = r._uint32Array,
                    c = 0,
                    _ = n.a,
                    d = n.b,
                    f = n.c,
                    p = n.d,
                    m = n.tx,
                    g = n.ty,
                    v = 0;
                for (v = 0; v < o; v++) {
                    var y = t[c],
                        x = t[c + 1];
                    l[h] = y * _ + x * f + m, l[h + 1] = y * d + x * p + g, l[h + 2] = e[c], l[h + 3] = e[c + 1], u[h + 4] = s, u[h + 5] = 255, h += 6, c += 2
                }
                r.setNeedUpload();
                var T = this.vertNum,
                    b = i.length,
                    w = a.needSize(i.byteLength),
                    C = a.getUint16Array(),
                    A = w >> 1;
                if (0 < T) {
                    var E = A + b,
                        S = 0;
                    for (v = A; v < E; v++, S++)
                        C[v] = i[S] + T
                } else
                    C.set(i, A);
                a.setNeedUpload(), this.vertNum += o, this.indexNum += i.length
            }, t.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshTexture._POOL.push(this)
            }, t.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }, i.getAMesh = function(t) {
                var e;
                return e = laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new i, t && e._vb._resizeBuffer(1572864, !1), e
            }, i.const_stride = 24, i._POOL = [], a(i, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }]), i
        }(),
        Li = function() {
            function n() {
                this.totalCount = 0, this._completeHandler = null, this._toLoadList = null, this._isLoading = !1, this._curUrl = null, n.__super.call(this), this._completeHandler = new b(this, this.onOneLoadComplete), this.reset()
            }
            m(n, "laya.net.SceneLoader", T);
            var t = n.prototype;
            return t.reset = function() {
                this._toLoadList = [], this._isLoading = !1, this.totalCount = 0
            }, t.load = function(t, e, i) {
                if (void 0 === e && (e = !1), void 0 === i && (i = !0), t instanceof Array) {
                    var n, s = 0;
                    for (n = t.length, s = 0; s < n; s++)
                        this._addToLoadList(t[s], e)
                } else
                    this._addToLoadList(t, e);
                i && this._checkNext()
            }, t._addToLoadList = function(t, e) {
                void 0 === e && (e = !1), 0 <= this._toLoadList.indexOf(t) || Ai.getRes(t) || (e ? this._toLoadList.push({
                    url: t
                }) : this._toLoadList.push(t), this.totalCount++)
            }, t._checkNext = function() {
                if (!this._isLoading) {
                    if (0 == this._toLoadList.length)
                        return void this.event("complete");
                    var t;
                    "string" == typeof(t = this._toLoadList.pop()) ? this.loadOne(t): this.loadOne(t.url, !0)
                }
            }, t.loadOne = function(t, e) {
                void 0 === e && (e = !1), this._curUrl = t;
                var i = ke.getFileExtension(this._curUrl);
                e ? y.loader.create(t, this._completeHandler) : n.LoadableExtensions[i] ? y.loader.load(t, this._completeHandler, null, n.LoadableExtensions[i]) : t != Ze.getFileLoadPath(t) || n.No3dLoadTypes[i] || !Pi.createMap[i] ? y.loader.load(t, this._completeHandler) : y.loader.create(t, this._completeHandler)
            }, t.onOneLoadComplete = function() {
                this._isLoading = !1, Ai.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
                var t, e = ke.getFileExtension(this._curUrl);
                n.LoadableExtensions[e] && ((t = Ai.getRes(this._curUrl)) && t instanceof laya.components.Prefab && (t = t.json), t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
                "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event("progress", this.getProgress()), this._checkNext()
            }, t.getProgress = function() {
                return this.loadedCount / this.totalCount
            }, f(0, t, "loadedCount", function() {
                return this.totalCount - this.leftCount
            }), f(0, t, "leftCount", function() {
                return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length
            }), a(n, ["LoadableExtensions", function() {
                return this.LoadableExtensions = {
                    scene: "json",
                    scene3d: "json",
                    ani: "json",
                    ui: "json",
                    prefab: "prefab"
                }
            }, "No3dLoadTypes", function() {
                return this.No3dLoadTypes = {
                    png: !0,
                    jpg: !0,
                    txt: !0
                }
            }]), n
        }(),
        Bi = function(t) {
            function e() {
                this.italic = !1, e.__super.call(this)
            }
            m(e, "laya.display.css.TextStyle", t);
            var i = e.prototype;
            return i.reset = function() {
                return t.prototype.reset.call(this), this.italic = !1, this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [0, 0, 0, 0], this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this
            }, i.recover = function() {
                this !== e.EMPTY && z.recover("TextStyle", this.reset())
            }, i.render = function(t, e, i, n) {
                (this.bgColor || this.borderColor) && e.drawRect(i, n, t.width, t.height, this.bgColor, this.borderColor, 1)
            }, e.create = function() {
                return z.getItemByClass("TextStyle", e)
            }, e.EMPTY = new e, e
        }(ut),
        Fi = function() {
            function s() {
                this.worker = null, this._useWorkerLoader = !1, s.__super.call(this);
                var e = this;
                this.worker = new Worker(s.workerPath), this.worker.onmessage = function(t) {
                    e.workerMessage(t.data)
                }
            }
            m(s, "laya.net.WorkerLoader", T);
            var t = s.prototype;
            return t.workerMessage = function(t) {
                if (t)
                    switch (t.type) {
                        case "Image":
                            this.imageLoaded(t);
                            break;
                        case "Disable":
                            s.enable = !1
                    }
            }, t.imageLoaded = function(t) {
                if (t.dataType && "imageBitmap" == t.dataType) {
                    var e = new sn(!0),
                        i = e.source.getContext("2d");
                    switch (t.dataType) {
                        case "imageBitmap":
                            var n = t.imageBitmap;
                            e.size(n.width, n.height), i.drawImage(n, 0, 0)
                    }
                    console.log("load:", t.url), e._setGPUMemory(0);
                    var s = new _n;
                    s.loadImageSource(e.source), this.event(t.url, s)
                } else
                    this.event(t.url, null)
            }, t.loadImage = function(t) {
                this.worker.postMessage(t)
            }, t._loadImage = function(e) {
                var i = this;
                if (this._useWorkerLoader && s._enable) {
                    e = ot.formatURL(e);
                    var n = function(t) {
                        laya.net.WorkerLoader.I.off(e, i, n), t ? i.onLoaded(t) : s._preLoadFun.call(i, e)
                    };
                    laya.net.WorkerLoader.I.on(e, i, n), laya.net.WorkerLoader.I.loadImage(e)
                } else
                    s._preLoadFun.call(i, e)
            }, f(1, s, "enable", function() {
                return s._enable
            }, function(t) {
                s._enable != t && (s._enable = t) && null == s._preLoadFun && (s._enable = s.__init__())
            }), s.__init__ = function() {
                return null == s._preLoadFun && (!!Worker && (s._preLoadFun = Ai.prototype._loadImage, Ai.prototype._loadImage = s.prototype._loadImage, s.I || (s.I = new s), !0))
            }, s.workerSupported = function() {
                return !!Worker
            }, s.enableWorkerLoader = function() {
                s._tryEnabled || (s.enable = !0, s._tryEnabled = !0)
            }, s.I = null, s.workerPath = "libs/workerloader.js", s._preLoadFun = null, s._enable = !1, s._tryEnabled = !1, s
        }(),
        Oi = (m(Ni, "laya.webgl.BufferState2D", Xt), Ni);

    function Ni() {
        Ni.__super.call(this)
    }
    var ki = (m(Ui, "laya.webgl.shader.d2.value.PrimitiveSV", Z), Ui);

    function Ui(t) {
        Ui.__super.call(this, 4, 0), this._attribLocation = ["position", 0, "attribColor", 1]
    }
    var Wi = (m(Vi, "laya.webgl.shader.d2.skinAnishader.SkinSV", Z), Vi);

    function Vi(t) {
        this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0, Vi.__super.call(this, 512, 0);
        var e = 8 * Et.BYTES_PE;
        this.position = [2, 5126, !1, e, 0], this.texcoord = [2, 5126, !1, e, 2 * Et.BYTES_PE], this.color = [4, 5126, !1, e, 4 * Et.BYTES_PE]
    }
    var Gi = function() {
            function d(t, e, i, n, s) {
                this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, this.supportImageData = !0, d.__super.call(this), void 0 === i && (i = !0), void 0 === n && (n = !0), void 0 === s && (s = !1), this.maxTexW = t, this.maxTexH = e, this.scaleFontSize = i, this.supportImageData = n, this.showDbgInfo = s, d.canvas || ((d.canvas = p.document.createElement("canvas")).width = 1024, d.canvas.height = 512, d.canvas.style.left = "-10000px", d.canvas.style.position = "absolute", r.body.appendChild(d.canvas), this.ctx = d.canvas.getContext("2d"))
            }
            m(d, "laya.webgl.text.CharRender_Canvas", Ie);
            var t = d.prototype;
            return t.getWidth = function(t, e) {
                return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t), this.ctx.measureText(e).width) : 0
            }, t.scale = function(t, e) {
                if (!this.supportImageData)
                    return this.lastScaleX = t, void(this.lastScaleY = e);
                this.lastScaleX == t && this.lastScaleY == e || (this.ctx.setTransform(t, 0, 0, e, 0, 0), this.lastScaleX = t, this.lastScaleY = e)
            }, t.getCharBmp = function(t, e, i, n, s, r, a, o, h, l, u) {
                if (!this.supportImageData)
                    return this.getCharCanvas(t, e, i, n, s, r, a, o, h, l);
                var c = this.ctx;
                c.font != e && (c.font = e, c._lastFont = e), r.width = c.measureText(t).width;
                var _ = r.width * this.lastScaleX,
                    d = r.height * this.lastScaleY;
                _ += (a + h) * this.lastScaleX, d += (o + l) * this.lastScaleY, _ = Math.ceil(_), d = Math.ceil(d);
                var f = (_ = Math.min(_, laya.webgl.text.CharRender_Canvas.canvas.width)) + 2 * i + 1,
                    p = (d = Math.min(d, laya.webgl.text.CharRender_Canvas.canvas.height)) + 2 * i + 1;
                u && (f = Math.max(f, u[0] + u[2] + 1), p = Math.max(p, u[1] + u[3] + 1)), c.clearRect(0, 0, f, p), c.save(), c.textBaseline = "top", 0 < i && (c.strokeStyle = s, c.lineWidth = i, c.strokeText(t, a, o)), c.fillStyle = n, c.fillText(t, a, o), this.showDbgInfo && (c.strokeStyle = "#ff0000", c.strokeRect(0, 0, _, d), c.strokeStyle = "#00ff00", c.strokeRect(a, o, r.width, r.height)), u && -1 == u[2] && (u[2] = Math.ceil((r.width + 2 * i) * this.lastScaleX));
                var m = u ? c.getImageData(u[0], u[1], u[2], u[3]) : c.getImageData(0, 0, _, d);
                return c.restore(), r.bmpWidth = m.width, r.bmpHeight = m.height, m
            }, t.getCharCanvas = function(t, e, i, n, s, r, a, o, h, l) {
                var u = this.ctx;
                u.font != e && (u.font = e, u._lastFont = e), r.width = u.measureText(t).width;
                var c = r.width * this.lastScaleX,
                    _ = r.height * this.lastScaleY;
                return c += (a + h) * this.lastScaleX, _ += (o + l) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW), _ = Math.min(_, this.maxTexH), d.canvas.width = Math.min(c + 1, this.maxTexW), d.canvas.height = Math.min(_ + 1, this.maxTexH), u.font = e, u.clearRect(0, 0, c + 1 + i, _ + 1 + i), u.setTransform(1, 0, 0, 1, 0, 0), u.save(), this.scaleFontSize && u.scale(this.lastScaleX, this.lastScaleY), u.translate(a, o), u.textAlign = "left", u.textBaseline = "top", 0 < i ? (u.strokeStyle = s, u.fillStyle = n, u.lineWidth = i, u.fillAndStrokeText ? u.fillAndStrokeText(t, 0, 0) : (u.strokeText(t, 0, 0), u.fillText(t, 0, 0))) : (u.fillStyle = n, u.fillText(t, 0, 0)), this.showDbgInfo && (u.strokeStyle = "#ff0000", u.strokeRect(0, 0, c, _), u.strokeStyle = "#00ff00", u.strokeRect(0, 0, r.width, r.height)), u.restore(), r.bmpWidth = d.canvas.width, r.bmpHeight = d.canvas.height, d.canvas
            }, f(0, t, "canvasWidth", function() {
                return d.canvas.width
            }, function(t) {
                d.canvas.width != t && (2048 < (d.canvas.width = t) && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY))
            }), d.canvas = null, d
        }(),
        Xi = function() {
            function t() {
                this.lastFont = "", t.__super.call(this)
            }
            m(t, "laya.webgl.text.CharRender_Native", Ie);
            var e = t.prototype;
            return e.getWidth = function(t, e) {
                return p.conchTextCanvas ? (p.conchTextCanvas.font = t, this.lastFont = t, p.conchTextCanvas.measureText(e).width) : 0
            }, e.scale = function(t, e) {}, e.getCharBmp = function(t, e, i, n, s, r, a, o, h, l, u) {
                if (!p.conchTextCanvas)
                    return null;
                p.conchTextCanvas.font = e, this.lastFont = e;
                r.width = p.conchTextCanvas.measureText(t).width, r.height;
                var c = v.create(s).numColor,
                    _ = v.create(n).numColor,
                    d = p.conchTextCanvas.getTextBitmapData(t, _, 2 < i ? 2 : i, c);
                return r.bmpWidth = d.width, r.bmpHeight = d.height, d
            }, t
        }(),
        Yi = function(s) {
            function e() {
                this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._visible = !0, this._mouseState = 0, this._zOrder = 0, this._renderType = 0, this._transform = null, this._tfChanged = !1, this._texture = null, this._boundStyle = null, this._graphics = null, this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, e.__super.call(this), this._repaint = 0, this._style = ut.EMPTY, this._cacheStyle = _t.EMPTY
            }
            m(e, "laya.display.Sprite", s);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), s.prototype.destroy.call(this, t), this._style && this._style.recover(), this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, this.texture = null
            }, t.updateZOrder = function() {
                ke.updateOrder(this._children) && this.repaint()
            }, t._getBoundsStyle = function() {
                return this._boundStyle || (this._boundStyle = qt.create()), this._boundStyle
            }, t._setCustomRender = function() {}, t._setCacheAs = function(t) {}, t._checkCanvasEnable = function() {
                var t = this._cacheStyle.needEnableCanvasRender();
                (this._getCacheStyle().enableCanvasRender = t) ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, this._cacheStyle.reCache = !0, this._renderType |= 8) : (this._cacheStyle.cacheAs = "none", this._cacheStyle.releaseContext(), this._renderType &= -9), this._setCacheAs(this._cacheStyle.cacheAs), this._setRenderType(this._renderType)
            }, t.reCache = function() {
                this._cacheStyle.reCache = !0, this._repaint |= 2
            }, t.getRepaint = function() {
                return this._repaint
            }, t._setX = function(t) {
                this._x = t
            }, t._setY = function(t) {
                this._y = t
            }, t._setWidth = function(t, e) {}, t._setHeight = function(t, e) {}, t.setSelfBounds = function(t) {
                this._getBoundsStyle().userBounds = t
            }, t.getBounds = function() {
                return this._getBoundsStyle().bounds = Ot._getWrapRec(this._boundPointsToParent())
            }, t.getSelfBounds = function() {
                return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = Ot._getWrapRec(this._getBoundPointsM(!1)) : Ot.TEMP.setTo(0, 0, 0, 0)
            }, t._boundPointsToParent = function(t) {
                void 0 === t && (t = !1);
                var e = 0,
                    i = 0;
                this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
                var n = this._getBoundPointsM(t);
                if (!n || n.length < 1)
                    return n;
                if (8 != n.length && (n = t ? J.scanPList(n) : Ot._getWrapRec(n, Ot.TEMP)._getBoundPoints()), !this.transform)
                    return ke.transPointList(n, this._x - e, this._y - i), n;
                var s = ye.TEMP,
                    r = 0,
                    a = n.length;
                for (r = 0; r < a; r += 2)
                    s.x = n[r], s.y = n[r + 1], this.toParentPoint(s), n[r] = s.x, n[r + 1] = s.y;
                return n
            }, t.getGraphicBounds = function(t) {
                return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : Ot.TEMP.setTo(0, 0, 0, 0)
            }, t._getBoundPointsM = function(t) {
                if (void 0 === t && (t = !1), this._boundStyle && this._boundStyle.userBounds)
                    return this._boundStyle.userBounds._getBoundPoints();
                if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), this._style.scrollRect) {
                    var e = ke.clearArray(this._boundStyle.temBM),
                        i = Ot.TEMP;
                    return i.copyFrom(this._style.scrollRect), ke.concatArray(e, i._getBoundPoints()), e
                }
                var n, s, r, a;
                this._graphics ? n = this._graphics.getBoundPoints() : (n = ke.clearArray(this._boundStyle.temBM), this._texture && ((i = Ot.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), ke.concatArray(n, i._getBoundPoints())));
                for (var o = 0, h = (a = this._children).length; o < h; o++)
                    (s = a[o]) instanceof laya.display.Sprite && !0 === s._visible && (r = s._boundPointsToParent(t)) && (n = n ? ke.concatArray(n, r) : r);
                return n
            }, t._getCacheStyle = function() {
                return this._cacheStyle === _t.EMPTY && (this._cacheStyle = _t.create()), this._cacheStyle
            }, t.getStyle = function() {
                return this._style === ut.EMPTY && (this._style = ut.create()), this._style
            }, t.setStyle = function(t) {
                this._style = t
            }, t._setScaleX = function(t) {
                this._style.scaleX = t
            }, t._setScaleY = function(t) {
                this._style.scaleY = t
            }, t._setRotation = function(t) {
                this._style.rotation = t
            }, t._setSkewX = function(t) {
                this._style.skewX = t
            }, t._setSkewY = function(t) {
                this._style.skewY = t
            }, t._createTransform = function() {
                return vt.create()
            }, t._adjustTransform = function() {
                this._tfChanged = !1;
                var t = this._style,
                    e = t.scaleX,
                    i = t.scaleY,
                    n = t.skewX,
                    s = t.skewY,
                    r = t.rotation,
                    a = this._transform || (this._transform = this._createTransform());
                if (r || 1 !== e || 1 !== i || 0 !== n || 0 !== s) {
                    a._bTransform = !0;
                    var o = .0174532922222222 * (r - n),
                        h = .0174532922222222 * (r + s),
                        l = Math.cos(h),
                        u = Math.sin(h),
                        c = Math.sin(o),
                        _ = Math.cos(o);
                    a.a = e * l, a.b = e * u, a.c = -i * c, a.d = i * _, a.tx = a.ty = 0
                } else
                    a.identity(), this._renderType &= -3, this._setRenderType(this._renderType);
                return a
            }, t._setTransform = function(t) {}, t._setPivotX = function(t) {
                this.getStyle().pivotX = t
            }, t._getPivotX = function() {
                return this._style.pivotX
            }, t._setPivotY = function(t) {
                this.getStyle().pivotY = t
            }, t._getPivotY = function() {
                return this._style.pivotY
            }, t._setAlpha = function(t) {
                this._style.alpha !== t && (1 !== (this.getStyle().alpha = t) ? this._renderType |= 1 : this._renderType &= -2, this._setRenderType(this._renderType), this.parentRepaint())
            }, t._getAlpha = function() {
                return this._style.alpha
            }, t._setBlendMode = function(t) {}, t._setGraphics = function(t) {}, t._setGraphicsCallBack = function() {}, t._setScrollRect = function(t) {}, t.pos = function(t, e, i) {
                if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                    if (this.destroyed)
                        return this;
                    if (i) {
                        this._setX(t), this._setY(e), this.parentRepaint(2);
                        var n = this._cacheStyle.maskParent;
                        n && n.repaint(2)
                    } else
                        this.x = t, this.y = e
                }
                return this
            }, t.pivot = function(t, e) {
                return this.pivotX = t, this.pivotY = e, this
            }, t.size = function(t, e) {
                return this.width = t, this.height = e, this
            }, t.scale = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = this.getStyle();
                if (n.scaleX != t || n.scaleY != e) {
                    if (this.destroyed)
                        return this;
                    i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, this.scaleY = e)
                }
                return this
            }, t.skew = function(t, e) {
                return this.skewX = t, this.skewY = e, this
            }, t.render = function(t, e, i) {
                O.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0
            }, t.drawToCanvas = function(t, e, i, n) {
                return qe.drawToCanvas(this, this._renderType, t, e, i, n)
            }, t.drawToTexture = function(t, e, i, n) {
                return qe.drawToTexture(this, this._renderType, t, e, i, n)
            }, t.customRender = function(t, e, i) {
                this._repaint = 3
            }, t._applyFilters = function() {}, t._setColorFilter = function(t) {}, t._isHaveGlowFilter = function() {
                var t, e = 0;
                if (this.filters)
                    for (e = 0; e < this.filters.length; e++)
                        if (8 == this.filters[e].type)
                            return !0;
                for (e = 0, t = this._children.length; e < t; e++)
                    if (this._children[e]._isHaveGlowFilter())
                        return !0;
                return !1
            }, t.localToGlobal = function(t, e, i) {
                void 0 === e && (e = !1), !0 === e && (t = new ye(t.x, t.y));
                var n = this;
                for (i = i || y.stage; n && !n.destroyed && n != i;)
                    t = n.toParentPoint(t), n = n.parent;
                return t
            }, t.globalToLocal = function(t, e, i) {
                void 0 === e && (e = !1), e && (t = new ye(t.x, t.y));
                var n = this,
                    s = [];
                for (i = i || y.stage; n && !n.destroyed && n != i;)
                    s.push(n), n = n.parent;
                for (var r = s.length - 1; 0 <= r;)
                    t = (n = s[r]).fromParentPoint(t), r--;
                return t
            }, t.toParentPoint = function(t) {
                if (!t)
                    return t;
                t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), t.x += this._x, t.y += this._y;
                var e = this._style.scrollRect;
                return e && (t.x -= e.x, t.y -= e.y), t
            }, t.fromParentPoint = function(t) {
                if (!t)
                    return t;
                t.x -= this._x, t.y -= this._y;
                var e = this._style.scrollRect;
                return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), t.x += this.pivotX, t.y += this.pivotY, t
            }, t.fromStagePoint = function(t) {
                return t
            }, t.on = function(t, e, i, n) {
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(t, e, i, n, !1)) : s.prototype.on.call(this, t, e, i, n)
            }, t.once = function(t, e, i, n) {
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(t, e, i, n, !0)) : s.prototype.once.call(this, t, e, i, n)
            }, t._$2__onDisplay = function() {
                if (1 !== this._mouseState) {
                    var t = this;
                    for (t = t.parent; t && 1 !== t._mouseState && !t._getBit(64);)
                        t.mouseEnabled = !0, t._setBit(64, !0), t = t.parent
                }
            }, t._setParent = function(t) {
                s.prototype._setParent.call(this, t), t && this._getBit(64) && this._$2__onDisplay()
            }, t.loadImage = function(t, e) {
                var i = this;
                if (null == t)
                    this.texture = null, s();
                else {
                    var n = Ai.getRes(t);
                    n || ((n = new wi).load(t), Ai.cacheRes(t, n)), (this.texture = n).getIsReady() ? s() : n.once("ready", null, s)
                }

                function s() {
                    i.repaint(3), e && e.run()
                }
                return this
            }, t.repaint = function(t) {
                void 0 === t && (t = 2), this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t)
            }, t._needRepaint = function() {
                return 2 & this._repaint && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache
            }, t._childChanged = function(t) {
                this._children.length ? this._renderType |= 8192 : this._renderType &= -8193, this._setRenderType(this._renderType), t && this._getBit(32) && y.systemTimer.callLater(this, this.updateZOrder), this.repaint(3)
            }, t.parentRepaint = function(t) {
                void 0 === t && (t = 2);
                var e = this._parent;
                !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t))
            }, t._setMask = function(t) {}, t.startDrag = function(t, e, i, n, s, r, a) {
                void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === n && (n = 300), void 0 === r && (r = !1), void 0 === a && (a = .92), this._style.dragging || (this.getStyle().dragging = new fe), this._style.dragging.start(this, t, e, i, n, s, r, a)
            }, t.stopDrag = function() {
                this._style.dragging && this._style.dragging.stop()
            }, t._setDisplay = function(t) {
                t || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), s.prototype._setDisplay.call(this, t)
            }, t.hitTestPoint = function(t, e) {
                var i = this.globalToLocal(ye.TEMP.setTo(t, e));
                return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : 0 < this._width && 0 < this._height ? Ot.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e)
            }, t.getMousePoint = function() {
                return this.globalToLocal(ye.TEMP.setTo(y.stage.mouseX, y.stage.mouseY))
            }, t._setTexture = function(t) {}, t._setRenderType = function(t) {}, t._setTranformChange = function() {
                this._tfChanged = !0, this._renderType |= 2, this.parentRepaint(2)
            }, t._setBgStyleColor = function(t, e, i, n, s) {}, t._setBorderStyleColor = function(t, e, i, n, s, r) {}, t.captureMouseEvent = function(t) {
                D.instance.setCapture(this, t)
            }, t.releaseMouseEvent = function() {
                D.instance.releaseCapture()
            }, f(0, t, "customRenderEnable", null, function(t) {
                t && (this._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender())
            }), f(0, t, "cacheAs", function() {
                return this._cacheStyle.cacheAs
            }, function(t) {
                t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()))
            }), f(0, t, "globalScaleY", function() {
                for (var t = 1, e = this; e && e !== y.stage;)
                    t *= e.scaleY, e = e.parent;
                return t
            }), f(0, t, "hitArea", function() {
                return this._style.hitArea
            }, function(t) {
                this.getStyle().hitArea = t
            }), f(0, t, "staticCache", function() {
                return this._cacheStyle.staticCache
            }, function(t) {
                (this._getCacheStyle().staticCache = t) || this.reCache()
            }), f(0, t, "displayWidth", function() {
                return this.width * this.scaleX
            }), f(0, t, "zOrder", function() {
                return this._zOrder
            }, function(t) {
                this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(32, !0), y.systemTimer.callLater(this._parent, this.updateZOrder)))
            }), f(0, t, "rotation", function() {
                return this._style.rotation
            }, function(t) {
                this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange())
            }), f(0, t, "width", function() {
                return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0)
            }, function(t) {
                this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange())
            }), f(0, t, "x", function() {
                return this._x
            }, function(t) {
                if (!this.destroyed && this._x !== t) {
                    this._setX(t), this.parentRepaint(2);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(2)
                }
            }), f(0, t, "drawCallOptimize", function() {
                return this._getBit(256)
            }, function(t) {
                this._setBit(256, t)
            }), f(0, t, "texture", function() {
                return this._texture
            }, function(t) {
                "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), (this._texture = t) && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), this._setHeight(this._texture, this.height), t ? this._renderType |= 256 : this._renderType &= -257, this._setRenderType(this._renderType), this.repaint())
            }), f(0, t, "globalRotation", function() {
                for (var t = 0, e = this; e && e !== y.stage;)
                    t += e.rotation, e = e.parent;
                return t
            }), f(0, t, "y", function() {
                return this._y
            }, function(t) {
                if (!this.destroyed && this._y !== t) {
                    this._setY(t), this.parentRepaint(2);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(2)
                }
            }), f(0, t, "displayHeight", function() {
                return this.height * this.scaleY
            }), f(0, t, "height", function() {
                return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0)
            }, function(t) {
                this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange())
            }), f(0, t, "blendMode", function() {
                return this._style.blendMode
            }, function(t) {
                this._setBlendMode(t), (this.getStyle().blendMode = t) && "source-over" != t ? this._renderType |= 4 : this._renderType &= -5, this._setRenderType(this._renderType), this.parentRepaint()
            }), f(0, t, "scaleX", function() {
                return this._style.scaleX
            }, function(t) {
                this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange())
            }), f(0, t, "scaleY", function() {
                return this._style.scaleY
            }, function(t) {
                this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange())
            }), f(0, t, "stage", function() {
                return y.stage
            }), f(0, t, "skewX", function() {
                return this._style.skewX
            }, function(t) {
                this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange())
            }), f(0, t, "scrollRect", function() {
                return this._style.scrollRect
            }, function(t) {
                this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= 64 : this._renderType &= -65, this._setRenderType(this._renderType)
            }), f(0, t, "skewY", function() {
                return this._style.skewY
            }, function(t) {
                this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange())
            }), f(0, t, "transform", function() {
                return this._tfChanged ? this._adjustTransform() : this._transform
            }, function(t) {
                this._tfChanged = !1;
                var e = this._transform || (this._transform = this._createTransform());
                t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), t ? this._renderType |= 2 : this._renderType &= -3, this._setRenderType(this._renderType), this.parentRepaint()
            }), f(0, t, "pivotX", function() {
                return this._getPivotX()
            }, function(t) {
                this._setPivotX(t), this.repaint()
            }), f(0, t, "pivotY", function() {
                return this._getPivotY()
            }, function(t) {
                this._setPivotY(t), this.repaint()
            }), f(0, t, "alpha", function() {
                return this._getAlpha()
            }, function(t) {
                t = t < 0 ? 0 : 1 < t ? 1 : t, this._setAlpha(t)
            }), f(0, t, "visible", function() {
                return this._visible
            }, function(t) {
                this._visible !== t && (this._visible = t, this.parentRepaint(3))
            }), f(0, t, "graphics", function() {
                return this._graphics || (this.graphics = new Se, this._graphics.autoDestroy = !0), this._graphics
            }, function(t) {
                this._graphics && (this._graphics._sp = null), (this._graphics = t) ? (this._setGraphics(t), this._renderType |= 512, t._sp = this) : this._renderType &= -513, this._setRenderType(this._renderType), this.repaint()
            }), f(0, t, "filters", function() {
                return this._cacheStyle.filters
            }, function(t) {
                t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, t && t.length ? (this._setColorFilter(t[0]), this._renderType |= 16) : (this._setColorFilter(null), this._renderType &= -17), this._setRenderType(this._renderType), t && 0 < t.length ? (this._getBit(16) || this._setBitUp(16), 1 == t.length && t[0] instanceof laya.filters.ColorFilter || (this._getCacheStyle().cacheForFilters = !0, this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), this.repaint())
            }), f(0, t, "mask", function() {
                return this._cacheStyle.mask
            }, function(t) {
                t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), this._renderType |= 32, this._setRenderType(this._renderType), this.parentRepaint(3))
            }), f(0, t, "mouseEnabled", function() {
                return 1 < this._mouseState
            }, function(t) {
                this._mouseState = t ? 2 : 1
            }), f(0, t, "globalScaleX", function() {
                for (var t = 1, e = this; e && e !== y.stage;)
                    t *= e.scaleX, e = e.parent;
                return t
            }), f(0, t, "mouseX", function() {
                return this.getMousePoint().x
            }), f(0, t, "mouseY", function() {
                return this.getMousePoint().y
            }), f(0, t, "viewport", function() {
                return this._style.viewport
            }, function(t) {
                var e;
                "string" == typeof t && 3 < (e = t.split(",")).length && (t = new Ot(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])));
                this.getStyle().viewport = t
            }), e.fromImage = function(t) {
                return (new e).loadImage(t)
            }, e
        }(mi),
        Hi = (m(zi, "laya.webgl.shader.BaseShader", vi), zi.activeShader = null, zi.bindShader = null, zi);

    function zi() {
        zi.__super.call(this)
    }
    var ji = function() {
            function t() {
                t.__super.call(this), this._width = -1, this._height = -1
            }
            m(t, "laya.resource.Bitmap", vi);
            var e = t.prototype;
            return e._getSource = function() {
                throw "Bitmap: must override it."
            }, f(0, e, "width", function() {
                return this._width
            }), f(0, e, "height", function() {
                return this._height
            }), t
        }(),
        Ki = function() {
            function n(t, e) {
                this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, this.genID = 0, this.bitmap = {
                    id: 0,
                    _glTexture: null
                }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, this.ri = null, n.__super.call(this), this._texW = t || M.atlasWidth, this._texH = e || M.atlasWidth, this.bitmap.id = this.id, this.lock = !0
            }
            m(n, "laya.webgl.text.TextTexture", vi);
            var t = n.prototype;
            return t.recreateResource = function() {
                if (!this._source) {
                    var t = te.isConchApp ? se.instance.getDefaultCommandEncoder() : jt.mainContext,
                        e = this._source = t.createTexture();
                    this.bitmap._glTexture = e, pt.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071), M.debugUV && this.fillWhite()
                }
            }, t.addChar = function(t, e, i, n) {
                if (M.isWan1Wan)
                    return this.addCharCanvas(t, e, i, n);
                this._source || this.recreateResource();
                var s = te.isConchApp ? se.instance.getDefaultCommandEncoder() : jt.mainContext;
                pt.bindTexture(s, 3553, this._source), te.isConchApp || s.pixelStorei(37441, !0);
                var r = t.data;
                t.data instanceof Uint8ClampedArray && (r = new Uint8Array(r.buffer)), s.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, r), te.isConchApp || s.pixelStorei(37441, !1);
                var a = NaN,
                    o = NaN,
                    h = NaN,
                    l = NaN;
                return l = te.isConchApp ? (a = e / this._texW, o = i / this._texH, h = (e + t.width) / this._texW, (i + t.height) / this._texH) : (a = (e + 1) / this._texW, o = i / this._texH, h = (e + t.width - 1) / this._texW, (i + t.height - 1) / this._texH), (n = n || new Array(8))[0] = a, n[1] = o, n[2] = h, n[3] = o, n[4] = h, n[5] = l, n[6] = a, n[7] = l, n
            }, t.addCharCanvas = function(t, e, i, n) {
                this._source || this.recreateResource();
                var s = te.isConchApp ? se.instance.getDefaultCommandEncoder() : jt.mainContext;
                pt.bindTexture(s, 3553, this._source), te.isConchApp || s.pixelStorei(37441, !0), s.texSubImage2D(3553, 0, e, i, 6408, 5121, t), te.isConchApp || s.pixelStorei(37441, !1);
                var r = NaN,
                    a = NaN,
                    o = NaN,
                    h = NaN;
                return h = te.isConchApp ? (r = e / this._texW, a = i / this._texH, o = (e + t.width) / this._texW, (i + t.height) / this._texH) : (r = (e + 1) / this._texW, a = (i + 1) / this._texH, o = (e + t.width - 1) / this._texW, (i + t.height - 1) / this._texH), (n = n || new Array(8))[0] = r, n[1] = a, n[2] = o, n[3] = a, n[4] = o, n[5] = h, n[6] = r, n[7] = h, n
            }, t.fillWhite = function() {
                this._source || this.recreateResource();
                var t = te.isConchApp ? se.instance.getDefaultCommandEncoder() : jt.mainContext,
                    e = new Uint8Array(this._texW * this._texH * 4);
                e.fill(255), t.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, e)
            }, t.discard = function() {
                this._texW == M.atlasWidth && this._texH == M.atlasWidth ? (this.genID++, n.poolLen >= n.pool.length && (n.pool = n.pool.concat(new Array(10))), this._discardTm = y.stage.getFrameTm(), n.pool[n.poolLen++] = this) : this.destroy()
            }, t.destroy = function() {
                this.__destroyed = !0;
                var t = te.isConchApp ? se.instance.getDefaultCommandEncoder() : jt.mainContext;
                this._source && t.deleteTexture(this._source), this._source = null
            }, t.touchRect = function(t, e) {
                this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = e);
                var i = M.atlasWidth * M.atlasWidth,
                    n = _e.atlasGridW * _e.atlasGridW;
                this.curUsedCovRate += t.bmpWidth * t.bmpHeight / i, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / _e.atlasGridW) * Math.ceil(t.bmpHeight / _e.atlasGridW) / (i / n)
            }, t._getSource = function() {
                return this._source
            }, t.drawOnScreen = function(t, e) {}, f(0, t, "texture", function() {
                return this
            }), n.getTextTexture = function(t, e) {
                if (t != M.atlasWidth || t != M.atlasWidth)
                    return new n(t, e);
                if (0 < n.poolLen) {
                    var i = n.pool[--n.poolLen];
                    return 0 < n.poolLen && n.clean(), i
                }
                return new n(t, e)
            }, n.clean = function() {
                var t = y.stage.getFrameTm();
                if (0 === n.cleanTm && (n.cleanTm = t), t - n.cleanTm >= M.checkCleanTextureDt) {
                    for (var e = 0; e < n.poolLen; e++) {
                        var i = n.pool[e];
                        t - i._discardTm >= M.destroyUnusedTextureDt && (i.destroy(), n.pool[e] = n.pool[n.poolLen - 1], n.poolLen--, e--)
                    }
                    n.cleanTm = t
                }
            }, n.poolLen = 0, n.cleanTm = 0, a(n, ["pool", function() {
                return this.pool = new Array(10)
            }]), n
        }(),
        $i = function() {
            function e(t) {
                this._uint16Array = null, void 0 === t && (t = 35044), e.__super.call(this), this._bufferUsage = t, this._bufferType = 34963, this._buffer = new ArrayBuffer(8)
            }
            m(e, "laya.webgl.utils.IndexBuffer2D", Ei);
            var t = e.prototype;
            return t._checkArrayUse = function() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer))
            }, t.getUint16Array = function() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer))
            }, t._bindForVAO = function() {
                se.instance.bindBuffer(34963, this._glBuffer)
            }, t.bind = function() {
                return q._bindedIndexBuffer !== this._glBuffer && (se.instance.bindBuffer(34963, this._glBuffer), q._bindedIndexBuffer = this._glBuffer, !0)
            }, t.destory = function() {
                this._uint16Array = null, this._buffer = null
            }, t.disposeResource = function() {
                this._disposeResource()
            }, e.create = function(t) {
                return void 0 === t && (t = 35044), new e(t)
            }, e
        }(),
        qi = function(t) {
            function e() {
                this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, this.context = Mi.ctx, e.__super.call(this), this._onPlayEnd = ke.bind(this.__onPlayEnd, this), this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode()
            }
            m(e, "laya.media.webaudio.WebAudioSoundChannel", t);
            var i = e.prototype;
            return i.play = function() {
                if (ui.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                    var t = this.context,
                        e = this.gain,
                        i = t.createBufferSource();
                    (this.bufferSource = i).buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), this._startTime = re.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .001) : this.gain.gain.value = this._volume, 0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(ui.playbackRate, this.context.currentTime, .001) : i.playbackRate.value = ui.playbackRate, i.start(0, this.startTime), this._currentTime = 0
                }
            }, i.__onPlayEnd = function() {
                if (1 == this.loops)
                    return this.completeHandler && (y.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
                0 < this.loops && this.loops--, this.startTime = 0, this.play()
            }, i._clearBufferSource = function() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), this.bufferSource = null
                }
            }, i._tryClearBuffer = function(t) {
                if (re.onMac)
                    try {
                        t.buffer = Mi._miniBuffer
                    } catch (t) {
                        e._tryCleanFailed = !0
                    }
                else
                    try {
                        t.buffer = null
                    } catch (t) {
                        e._tryCleanFailed = !0
                    }
            }, i.stop = function() {
                t.prototype.stop.call(this), this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, ui.removeChannel(this), this.completeHandler = null, ui.autoReleaseSound && ui.disposeSoundLater(this.url)
            }, i.pause = function() {
                this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, ui.removeChannel(this), ui.autoReleaseSound && ui.disposeSoundLater(this.url)
            }, i.resume = function() {
                this.startTime = this._pauseTime, this.play()
            }, f(0, i, "position", function() {
                return this.bufferSource ? (re.now() - this._startTime) / 1e3 + this.startTime : 0
            }), f(0, i, "duration", function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0
            }), f(0, i, "volume", function() {
                return this._volume
            }, function(t) {
                this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .001) : this.gain.gain.value = t)
            }), e._tryCleanFailed = !1, e.SetTargetDelay = .001, e
        }(gi),
        Qi = function(t) {
            function e(t) {
                this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), this._onEnd = ke.bind(this.__onEnd, this), this._resumePlay = ke.bind(this.__resumePlay, this), t.addEventListener("ended", this._onEnd), this._audio = t
            }
            m(e, "laya.media.h5audio.AudioSoundChannel", t);
            var i = e.prototype;
            return i.__onEnd = function() {
                if (1 == this.loops)
                    return this.completeHandler && (y.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
                0 < this.loops && this.loops--, this.startTime = 0, this.play()
            }, i.__resumePlay = function() {
                if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), !this.isStopped)
                    try {
                        this._audio.currentTime = this.startTime, re.container.appendChild(this._audio), this._audio.play()
                    } catch (t) {
                        this.event("error")
                    }
            }, i.play = function() {
                this.isStopped = !1;
                try {
                    this._audio.playbackRate = ui.playbackRate, this._audio.currentTime = this.startTime
                } catch (t) {
                    return void this._audio.addEventListener("canplay", this._resumePlay)
                }
                ui.addChannel(this), re.container.appendChild(this._audio), "play" in this._audio && this._audio.play()
            }, i.stop = function() {
                t.prototype.stop.call(this), this.isStopped = !0, ui.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && te.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), re.onIE || this._audio != pi._musicAudio && z.recover("audio:" + this.url, this._audio), re.removeElement(this._audio), this._audio = null)
            }, i.pause = function() {
                this.isStopped = !0, ui.removeChannel(this), "pause" in this._audio && this._audio.pause()
            }, i.resume = function() {
                this._audio && (this.isStopped = !1, ui.addChannel(this), "play" in this._audio && this._audio.play())
            }, f(0, i, "position", function() {
                return this._audio ? this._audio.currentTime : 0
            }), f(0, i, "duration", function() {
                return this._audio ? this._audio.duration : 0
            }), f(0, i, "volume", function() {
                return this._audio ? this._audio.volume : 1
            }, function(t) {
                this._audio && (this._audio.volume = t)
            }), e
        }(gi),
        Zi = function() {
            function i(t, e) {
                this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, i.__super.call(this), this._vertexStride = t, this._bufferUsage = e, this._bufferType = 34962, this._buffer = new ArrayBuffer(8), this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer)
            }
            m(i, "laya.webgl.utils.VertexBuffer2D", Ei);
            var t = i.prototype;
            return t.getFloat32Array = function() {
                return this._floatArray32
            }, t.appendArray = function(t) {
                var e = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e), this._upload = !0
            }, t._checkArrayUse = function() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer))
            }, t.deleteBuffer = function() {
                this._disposeResource()
            }, t._bindForVAO = function() {
                se.instance.bindBuffer(34962, this._glBuffer)
            }, t.bind = function() {
                return q._bindedVertexBuffer !== this._glBuffer && (se.instance.bindBuffer(34962, this._glBuffer), q._bindedVertexBuffer = this._glBuffer, !0)
            }, t.destroy = function() {
                laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null
            }, f(0, t, "vertexStride", function() {
                return this._vertexStride
            }), i.create = function(t, e) {
                return void 0 === e && (e = 35048), new i(t, e)
            }, i
        }(),
        Ji = function(e) {
            function d() {
                this._clipPoint = null, this._text = null, this._isChanged = !1, this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0, this._startY = 0, this._words = null, this._charSize = {}, this._valign = "top", this._color = "#000000", this._singleCharRender = !1, d.__super.call(this), this._fontSize = d.defaultFontSize, this._font = d.defaultFont, this.overflow = "visible", this._style = Bi.EMPTY
            }
            m(d, "laya.display.Text", e);
            var t = d.prototype;
            return t.getStyle = function() {
                return this._style === Bi.EMPTY && (this._style = Bi.create()), this._style
            }, t._getTextStyle = function() {
                return this._style === Bi.EMPTY && (this._style = Bi.create()), this._style
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), e.prototype.destroy.call(this, t), this._clipPoint = null, this._lines = null, this._lineWidths = null, this._words && this._words.forEach(function(t) {
                    t.cleanCache()
                }), this._words = null, this._charSize = null
            }, t._getBoundPointsM = function(t) {
                void 0 === t && (t = !1);
                var e = Ot.TEMP;
                return e.setTo(0, 0, this.width, this.height), e._getBoundPoints()
            }, t.getGraphicBounds = function(t) {
                void 0 === t && (t = !1);
                var e = Ot.TEMP;
                return e.setTo(0, 0, this.width, this.height), e
            }, t._getCSSStyle = function() {
                return this._style
            }, t.lang = function(t, e, i, n, s, r, a, o, h, l, u) {
                if (t = d.langPacks && d.langPacks[t] ? d.langPacks[t] : t, arguments.length < 2)
                    this._text = t;
                else {
                    for (var c = 0, _ = arguments.length; c < _; c++)
                        t = t.replace("{" + c + "}", arguments[c + 1]);
                    this._text = t
                }
            }, t._getContextFont = function() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (re.onIPhone && laya.display.Text.fontFamilyMap[this.font] || this.font)
            }, t._isPassWordMode = function() {
                var t = this._style.asPassword;
                return "prompt" in this && this.prompt == this._text && (t = !1), t
            }, t._getPassWordTxt = function(t) {
                var e;
                e = "";
                for (var i = t.length; 0 < i; i--)
                    e += "●";
                return e
            }, t._renderText = function() {
                var t = this.padding,
                    e = this._lines.length;
                "visible" != this.overflow && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
                var i = this.scrollY / (this._charSize.height + this.leading) | 0,
                    n = this.graphics;
                n.clear(!0);
                var s = this._getContextFont();
                re.context.font = s;
                var r = t[3],
                    a = "left",
                    o = this._lines,
                    h = this.leading + this._charSize.height,
                    l = this._style.currBitmapFont;
                l && (h = this.leading + l.getMaxHeight());
                var u = t[0];
                if (!l && 0 < this._width && this._textWidth <= this._width && ("right" == this.align ? (a = "right", r = this._width - t[1]) : "center" == this.align && (a = "center", r = .5 * this._width + t[3] - t[1])), 0 < this._height) {
                    var c = this._textHeight > this._height ? "top" : this.valign;
                    "middle" === c ? u = .5 * (this._height - e * h) + t[0] - t[2] : "bottom" === c && (u = this._height - e * h - t[2])
                }
                var _ = this._style;
                if (l && l.autoScaleSize)
                    var d = l.fontSize / this.fontSize;
                if (this._clipPoint) {
                    if (n.save(), l && l.autoScaleSize) {
                        var f = 0,
                            p = 0;
                        f = this._width ? this._width - t[3] - t[1] : this._textWidth, p = this._height ? this._height - t[0] - t[2] : this._textHeight, f *= d, p *= d, n.clipRect(t[3], t[0], f, p)
                    } else
                        n.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                    this.repaint()
                }
                var m = _.asPassword;
                "prompt" in this && this.prompt == this._text && (m = !1);
                for (var g = 0, v = 0, y = Math.min(this._lines.length, e + i) || 1, x = i; x < y; x++) {
                    var T, b = o[x];
                    if (m) {
                        var w = b.length;
                        b = "";
                        for (var C = w; 0 < C; C--)
                            b += "●"
                    }
                    if (null == b && (b = ""), g = r - (this._clipPoint ? this._clipPoint.x : 0), v = u + h * x - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this._drawUnderline(a, g, v, x), l) {
                        var A = this.width;
                        l.autoScaleSize && (A = this.width * d), l._drawText(b, this, g, v, this.align, A)
                    } else
                        this._words || (this._words = []), this._words.length > x - i ? T = this._words[x - i] : (T = new S, this._words.push(T)), T.setText(b), T.splitRender = this._singleCharRender, _.stroke ? n.fillBorderText(T, g, v, s, this.color, _.strokeColor, _.stroke, a) : n.fillText(T, g, v, s, this.color, a)
                }
                if (l && l.autoScaleSize) {
                    var E = 1 / d;
                    this.scale(E, E)
                }
                this._clipPoint && n.restore(), this._startX = r, this._startY = u
            }, t._drawUnderline = function(t, e, i, n) {
                var s = this._lineWidths[n];
                switch (t) {
                    case "center":
                        e -= s / 2;
                        break;
                    case "right":
                        e -= s
                }
                i += this._charSize.height, this._graphics.drawLine(e, i, e + s, i, this.underlineColor || this.color, 1)
            }, t.typeset = function() {
                if (this._isChanged = !1, !this._text)
                    return this._clipPoint = null, this._textWidth = this._textHeight = 0, void this.graphics.clear(!0);
                te.isConchApp ? p.conchTextCanvas.font = this._getContextFont() : re.context.font = this._getContextFont(), this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new ye(0, 0)) : this._clipPoint = null, this._renderText()
            }, t._evalTextSize = function() {
                var t, e = NaN;
                t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e)
            }, t._checkEnabledViewportOrNot = function() {
                return "scroll" == this.overflow && (0 < this._width && this._textWidth > this._width || 0 < this._height && this._textHeight > this._height)
            }, t.changeText = function(t) {
                this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset())
            }, t._parseLines = function(t) {
                var e = this.wordWrap || "hidden" == this.overflow;
                if (e)
                    var i = this._getWordWrapWidth();
                var n = this._style.currBitmapFont;
                if (n)
                    this._charSize.width = n.getMaxWidth(), this._charSize.height = n.getMaxHeight();
                else {
                    var s = null;
                    (s = te.isConchApp ? p.conchTextCanvas.measureText(this._testWord) : re.context.measureText(d._testWord)) || (s = {
                        width: 100
                    }), this._charSize.width = s.width, this._charSize.height = s.height || this.fontSize
                }
                for (var r = t.replace(/\r\n/g, "\n").split("\n"), a = 0, o = r.length; a < o; a++) {
                    var h = r[a];
                    e ? this._parseLine(h, i) : (this._lineWidths.push(this._getTextWidth(h)), this._lines.push(h))
                }
            }, t._parseLine = function(t, e) {
                re.context;
                var i, n = this._lines,
                    s = 0,
                    r = NaN,
                    a = NaN,
                    o = 0;
                if ((r = this._getTextWidth(t)) <= e)
                    return n.push(t), void this._lineWidths.push(r);
                r = this._charSize.width, 0 == (s = Math.floor(e / r)) && (s = 1), a = r = this._getTextWidth(t.substring(0, s));
                for (var h = s, l = t.length; h < l; h++)
                    if (e < (a += r = this._getTextWidth(t.charAt(h))))
                        if (this.wordWrap) {
                            var u = t.substring(o, h);
                            if (u.charCodeAt(u.length - 1) < 255 && (i = /(?:\w|-)+$/.exec(u)) && (h = i.index + o, 0 == i.index ? h += u.length : u = t.substring(o, h)), n.push(u), this._lineWidths.push(a - r), !((o = h) + s < l)) {
                                n.push(t.substring(o, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])), o = -1;
                                break
                            }
                            h += s, a = r = this._getTextWidth(t.substring(o, h)), h--
                        } else if ("hidden" == this.overflow)
                    return n.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(n[n.length - 1]));
                this.wordWrap && -1 != o && (n.push(t.substring(o, l)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])))
            }, t._getTextWidth = function(t) {
                var e = this._style.currBitmapFont;
                return e ? e.getTextWidth(t) : te.isConchApp ? p.conchTextCanvas.measureText(t).width : re.context.measureText(t).width
            }, t._getWordWrapWidth = function() {
                var t = this.padding,
                    e = NaN,
                    i = this._style.currBitmapFont;
                return (e = i && i.autoScaleSize ? this._width * (i.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : re.width), e <= 0 && (e = 100), e - t[3] - t[1]
            }, t.getCharPoint = function(t, e) {
                this._isChanged && y.systemTimer.runCallLater(this, this.typeset);
                for (var i = 0, n = this._lines, s = 0, r = 0, a = n.length; r < a; r++) {
                    if (t < (i += n[r].length)) {
                        var o = r;
                        break
                    }
                    s = i
                }
                var h = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                re.context.font = h;
                var l = this._getTextWidth(this._text.substring(s, t));
                return (e || new ye).setTo(this._startX + l - (this._clipPoint ? this._clipPoint.x : 0), this._startY + o * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0))
            }, f(0, t, "width", function() {
                return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3]
            }, function(t) {
                t != this._width && (y.superSet(Yi, this, "width", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }), f(0, t, "textWidth", function() {
                return this._isChanged && y.systemTimer.runCallLater(this, this.typeset), this._textWidth
            }), f(0, t, "height", function() {
                return this._height ? this._height : this.textHeight
            }, function(t) {
                t != this._height && (y.superSet(Yi, this, "height", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }), f(0, t, "textHeight", function() {
                return this._isChanged && y.systemTimer.runCallLater(this, this.typeset), this._textHeight
            }), f(0, t, "padding", function() {
                return this._style.padding
            }, function(t) {
                if ("string" == typeof t) {
                    var e, i, n = 0;
                    for (i = (e = t.split(",")).length; e.length < 4;)
                        e.push(0);
                    for (n = 0; n < i; n++)
                        e[n] = parseFloat(e[n]) || 0;
                    t = e
                }
                this._getTextStyle().padding = t, this.isChanged = !0
            }), f(0, t, "bold", function() {
                return this._style.bold
            }, function(t) {
                this._getTextStyle().bold = t, this.isChanged = !0
            }), f(0, t, "text", function() {
                return this._text || ""
            }, function(t) {
                this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"), this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }), f(0, t, "color", function() {
                return this._color
            }, function(t) {
                this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0)
            }), f(0, t, "font", function() {
                return this._font
            }, function(t) {
                this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), d._bitmapFonts && d._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = d._bitmapFonts[t]), this._font = t, this.isChanged = !0
            }), f(0, t, "fontSize", function() {
                return this._fontSize
            }, function(t) {
                this._fontSize != t && (this._fontSize = t, this.isChanged = !0)
            }), f(0, t, "italic", function() {
                return this._style.italic
            }, function(t) {
                this._getTextStyle().italic = t, this.isChanged = !0
            }), f(0, t, "align", function() {
                return this._style.align
            }, function(t) {
                this._getTextStyle().align = t, this.isChanged = !0
            }), f(0, t, "valign", function() {
                return this._valign
            }, function(t) {
                this._valign = t, this.isChanged = !0
            }), f(0, t, "wordWrap", function() {
                return this._style.wordWrap
            }, function(t) {
                this._getTextStyle().wordWrap = t, this.isChanged = !0
            }), f(0, t, "singleCharRender", function() {
                return this._singleCharRender
            }, function(t) {
                this._singleCharRender = t
            }), f(0, t, "leading", function() {
                return this._style.leading
            }, function(t) {
                this._getTextStyle().leading = t, this.isChanged = !0
            }), f(0, t, "bgColor", function() {
                return this._style.bgColor
            }, function(t) {
                this._getTextStyle().bgColor = t, this._renderType |= 128, this._setBgStyleColor(0, 0, this.width, this.height, t), this._setRenderType(this._renderType), this.isChanged = !0
            }), f(0, t, "borderColor", function() {
                return this._style.borderColor
            }, function(t) {
                this._getTextStyle().borderColor = t, this._renderType |= 128, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), this._setRenderType(this._renderType), this.isChanged = !0
            }), f(0, t, "stroke", function() {
                return this._style.stroke
            }, function(t) {
                this._getTextStyle().stroke = t, this.isChanged = !0
            }), f(0, t, "strokeColor", function() {
                return this._style.strokeColor
            }, function(t) {
                this._getTextStyle().strokeColor = t, this.isChanged = !0
            }), f(0, t, "isChanged", null, function(t) {
                this._isChanged !== t && (this._isChanged = t) && y.systemTimer.callLater(this, this.typeset)
            }), f(0, t, "scrollX", function() {
                return this._clipPoint ? this._clipPoint.x : 0
            }, function(t) {
                if (!("scroll" != this.overflow || this.textWidth < this._width) && this._clipPoint) {
                    t = t < this.padding[3] ? this.padding[3] : t;
                    var e = this._textWidth - this._width;
                    t = e < t ? e : t, this._clipPoint.x = t, this._renderText()
                }
            }), f(0, t, "scrollY", function() {
                return this._clipPoint ? this._clipPoint.y : 0
            }, function(t) {
                if (!("scroll" != this.overflow || this.textHeight < this._height) && this._clipPoint) {
                    t = t < this.padding[0] ? this.padding[0] : t;
                    var e = this._textHeight - this._height;
                    t = e < t ? e : t, this._clipPoint.y = t, this._renderText()
                }
            }), f(0, t, "maxScrollX", function() {
                return this.textWidth < this._width ? 0 : this._textWidth - this._width
            }), f(0, t, "maxScrollY", function() {
                return this.textHeight < this._height ? 0 : this._textHeight - this._height
            }), f(0, t, "lines", function() {
                return this._isChanged && this.typeset(), this._lines
            }), f(0, t, "underlineColor", function() {
                return this._style.underlineColor
            }, function(t) {
                this._getTextStyle().underlineColor = t, this._isChanged || this._renderText()
            }), f(0, t, "underline", function() {
                return this._style.underline
            }, function(t) {
                this._getTextStyle().underline = t
            }), d.defaultFontStr = function() {
                return d.defaultFontSize + "px " + d.defaultFont
            }, d.registerBitmapFont = function(t, e) {
                d._bitmapFonts || (d._bitmapFonts = {}), d._bitmapFonts[t] = e
            }, d.unregisterBitmapFont = function(t, e) {
                if (void 0 === e && (e = !0), d._bitmapFonts && d._bitmapFonts[t]) {
                    var i = d._bitmapFonts[t];
                    e && i.destroy(), delete d._bitmapFonts[t]
                }
            }, d.VISIBLE = "visible", d.SCROLL = "scroll", d.HIDDEN = "hidden", d.defaultFontSize = 12, d.defaultFont = "Arial", d.langPacks = null, d.isComplexText = !1, d._testWord = "游", d._bitmapFonts = null, d.CharacterCache = !0, d.RightToLeft = !1, a(d, ["fontFamilyMap", function() {
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
                }
            }]), d
        }(Yi),
        tn = function(e) {
            function t() {
                this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._actionName = null, this._controlNode = null, t.__super.call(this), this._interval = Ge.animationInterval, this._setBitUp(16)
            }
            m(t, "laya.display.AnimationBase", e);
            var i = t.prototype;
            return i.play = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._isReverse = 1 === this.wrapMode, 0 == this.index && this._isReverse && (this.index = this.count - 1), 0 < this.interval && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
            }, i._getFrameByLabel = function(t) {
                for (var e = 0; e < this._count; e++) {
                    var i = this._labels[e];
                    if (i && -1 < i.indexOf(t))
                        return e
                }
                return 0
            }, i._frameLoop = function() {
                if (this._isReverse) {
                    if (this._index--, this._index < 0) {
                        if (!this.loop)
                            return this._index = 0, this.stop(), void this.event("complete");
                        2 == this.wrapMode ? (this._index = 0 < this._count ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event("complete")
                    }
                } else if (this._index++, this._index >= this._count) {
                    if (!this.loop)
                        return this._index--, this.stop(), void this.event("complete");
                    2 == this.wrapMode ? (this._index = 0 <= this._count - 2 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event("complete")
                }
                this.index = this._index
            }, i._setControlNode = function(t) {
                this._controlNode && (this._controlNode.off("display", this, this._resumePlay), this._controlNode.off("undisplay", this, this._resumePlay)), (this._controlNode = t) && t != this && (t.on("display", this, this._resumePlay), t.on("undisplay", this, this._resumePlay))
            }, i._setDisplay = function(t) {
                e.prototype._setDisplay.call(this, t), this._resumePlay()
            }, i._resumePlay = function() {
                this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop))
            }, i.stop = function() {
                this._isPlaying = !1, this.clearTimer(this, this._frameLoop)
            }, i.addLabel = function(t, e) {
                this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), this._labels[e].push(t)
            }, i.removeLabel = function(t) {
                if (t) {
                    if (this._labels)
                        for (var e in this._labels)
                            this._removeLabelFromList(this._labels[e], t)
                } else
                    this._labels = null
            }, i._removeLabelFromList = function(t, e) {
                if (t)
                    for (var i = t.length - 1; 0 <= i; i--)
                        t[i] == e && t.splice(i, 1)
            }, i.gotoAndStop = function(t) {
                this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop()
            }, i._displayToIndex = function(t) {}, i.clear = function() {
                return this.stop(), this._labels = null, this
            }, f(0, i, "interval", function() {
                return this._interval
            }, function(t) {
                this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && 0 < t && this.timerLoop(t, this, this._frameLoop, null, !0, !0))
            }), f(0, i, "isPlaying", function() {
                return this._isPlaying
            }), f(0, i, "index", function() {
                return this._index
            }, function(t) {
                if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
                    for (var e = this._labels[t], i = 0, n = e.length; i < n; i++)
                        this.event("label", e[i])
            }), f(0, i, "count", function() {
                return this._count
            }), t.WRAP_POSITIVE = 0, t.WRAP_REVERSE = 1, t.WRAP_PINGPONG = 2, t
        }(Yi),
        en = function() {
            function h(t, e, i, n, s) {
                if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, h.__super.call(this), !t || !e)
                    throw "Shader Error";
                this._attribInfo = s, this._id = ++h._count, this._vs = t, this._ps = e, this._nameMap = n || {}, null != i && (h.sharders[i] = this), this.recreateResource(), this.lock = !0
            }
            m(h, "laya.webgl.shader.Shader", Hi);
            var t = h.prototype;
            return t.recreateResource = function() {
                this._compile(), this._setGPUMemory(0)
            }, t._disposeResource = function() {
                jt.mainContext.deleteShader(this._vshader), jt.mainContext.deleteShader(this._pshader), jt.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0
            }, t._compile = function() {
                if (this._vs && this._ps && !this._params) {
                    var t;
                    this._reCompile = !0, this._params = [], this.customCompile && (t = ri.preGetParams(this._vs, this._ps));
                    var e = jt.mainContext;
                    this._program = e.createProgram(), this._vshader = h._createShader(e, this._vs, 35633), this._pshader = h._createShader(e, this._ps, 35632), e.attachShader(this._program, this._vshader), e.attachShader(this._program, this._pshader);
                    var i, n, s = 0,
                        r = this._attribInfo ? this._attribInfo.length : 0;
                    for (s = 0; s < r; s += 2)
                        e.bindAttribLocation(this._program, this._attribInfo[s + 1], this._attribInfo[s]);
                    if (e.linkProgram(this._program), !this.customCompile && !e.getProgramParameter(this._program, 35714))
                        throw e.getProgramInfoLog(this._program);
                    var a = this.customCompile ? t.uniforms.length : e.getProgramParameter(this._program, 35718);
                    for (s = 0; s < a; s++) {
                        var o = this.customCompile ? t.uniforms[s] : e.getActiveUniform(this._program, s);
                        0 < (i = {
                            vartype: "uniform",
                            glfun: null,
                            ivartype: 1,
                            location: e.getUniformLocation(this._program, o.name),
                            name: o.name,
                            type: o.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }).name.indexOf("[0]") && (i.name = i.name.substr(0, i.name.length - 3), i.isArray = !0, i.location = e.getUniformLocation(this._program, i.name)), this._params.push(i)
                    }
                    for (s = 0, n = this._params.length; s < n; s++)
                        switch ((i = this._params[s]).indexOfParams = s, i.index = 1, i.value = [i.location, null], i.codename = i.name, i.name = this._nameMap[i.codename] ? this._nameMap[i.codename] : i.codename, (this._paramsMap[i.name] = i)._this = this, i.uploadedValue = [], i.type) {
                            case 5124:
                                i.fun = i.isArray ? this._uniform1iv : this._uniform1i;
                                break;
                            case 5126:
                                i.fun = i.isArray ? this._uniform1fv : this._uniform1f;
                                break;
                            case 35664:
                                i.fun = i.isArray ? this._uniform_vec2v : this._uniform_vec2;
                                break;
                            case 35665:
                                i.fun = i.isArray ? this._uniform_vec3v : this._uniform_vec3;
                                break;
                            case 35666:
                                i.fun = i.isArray ? this._uniform_vec4v : this._uniform_vec4;
                                break;
                            case 35678:
                                i.fun = this._uniform_sampler2D;
                                break;
                            case 35680:
                                i.fun = this._uniform_samplerCube;
                                break;
                            case 35676:
                                i.glfun = e.uniformMatrix4fv, i.fun = this._uniformMatrix4fv;
                                break;
                            case 35670:
                                i.fun = this._uniform1i;
                                break;
                            case 35674:
                            case 35675:
                            default:
                                throw new Error("compile shader err!")
                        }
                }
            }, t.getUniform = function(t) {
                return this._paramsMap[t]
            }, t._uniform1f = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (jt.mainContext.uniform1f(t.location, i[0] = e), 1) : 0
            }, t._uniform1fv = function(t, e) {
                if (e.length < 4) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (jt.mainContext.uniform1fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0
                }
                return jt.mainContext.uniform1fv(t.location, e), 1
            }, t._uniform_vec2 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (jt.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0
            }, t._uniform_vec2v = function(t, e) {
                if (e.length < 2) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (jt.mainContext.uniform2fv(t.location, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0
                }
                return jt.mainContext.uniform2fv(t.location, e), 1
            }, t._uniform_vec3 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (jt.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0
            }, t._uniform_vec3v = function(t, e) {
                return jt.mainContext.uniform3fv(t.location, e), 1
            }, t._uniform_vec4 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (jt.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0
            }, t._uniform_vec4v = function(t, e) {
                return jt.mainContext.uniform4fv(t.location, e), 1
            }, t._uniformMatrix2fv = function(t, e) {
                return jt.mainContext.uniformMatrix2fv(t.location, !1, e), 1
            }, t._uniformMatrix3fv = function(t, e) {
                return jt.mainContext.uniformMatrix3fv(t.location, !1, e), 1
            }, t._uniformMatrix4fv = function(t, e) {
                return jt.mainContext.uniformMatrix4fv(t.location, !1, e), 1
            }, t._uniform1i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (jt.mainContext.uniform1i(t.location, i[0] = e), 1) : 0
            }, t._uniform1iv = function(t, e) {
                return jt.mainContext.uniform1iv(t.location, e), 1
            }, t._uniform_ivec2 = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (jt.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 1) : 0
            }, t._uniform_ivec2v = function(t, e) {
                return jt.mainContext.uniform2iv(t.location, e), 1
            }, t._uniform_vec3i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (jt.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 1) : 0
            }, t._uniform_vec3vi = function(t, e) {
                return jt.mainContext.uniform3iv(t.location, e), 1
            }, t._uniform_vec4i = function(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (jt.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 1) : 0
            }, t._uniform_vec4vi = function(t, e) {
                return jt.mainContext.uniform4iv(t.location, e), 1
            }, t._uniform_sampler2D = function(t, e) {
                var i = jt.mainContext,
                    n = t.uploadedValue;
                return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), pt.activeTexture(i, 33984 + this._curActTexIndex), pt.bindTexture(i, 3553, e), this._curActTexIndex++, 1) : (pt.activeTexture(i, 33984 + n[0]), pt.bindTexture(i, 3553, e), 0)
            }, t._uniform_samplerCube = function(t, e) {
                var i = jt.mainContext,
                    n = t.uploadedValue;
                return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), pt.activeTexture(i, 33984 + this._curActTexIndex), pt.bindTexture(i, 34067, e), this._curActTexIndex++, 1) : (pt.activeTexture(i, 33984 + n[0]), pt.bindTexture(i, 34067, e), 0)
            }, t._noSetValue = function(t) {
                console.log("no....:" + t.name)
            }, t.uploadOne = function(t, e) {
                pt.useProgram(jt.mainContext, this._program);
                var i = this._paramsMap[t];
                i.fun.call(this, i, e)
            }, t.uploadTexture2D = function(t) {
                var e = pt;
                e._activeTextures[0] !== t && (e.bindTexture(jt.mainContext, e.TEXTURE_2D, t), e._activeTextures[0] = t)
            }, t.upload = function(t, e) {
                Hi.activeShader = Hi.bindShader = this;
                var i = jt.mainContext;
                pt.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
                for (var n, s, r = e.length, a = 0, o = 0; o < r; o++)
                    null !== (s = t[(n = e[o]).name]) && (a += n.fun.call(this, n, s));
                R.shaderCall += a
            }, t.uploadArray = function(t, e, i) {
                Hi.activeShader = this, Hi.bindShader = this, pt.useProgram(jt.mainContext, this._program);
                this._params;
                for (var n, s, r = 0, a = e - 2; 0 <= a; a -= 2)
                    (s = this._paramsMap[t[a]]) && null != (n = t[a + 1]) && (i && i[s.name] && i[s.name].bind(), r += s.fun.call(this, s, n));
                R.shaderCall += r
            }, t.getParams = function() {
                return this._params
            }, t.setAttributesLocation = function(t) {
                this._attribInfo = t
            }, h.getShader = function(t) {
                return h.sharders[t]
            }, h.create = function(t, e, i, n, s) {
                return new h(t, e, i, n, s)
            }, h.withCompile = function(t, e, i, n) {
                if (i && h.sharders[i])
                    return h.sharders[i];
                var s = h._preCompileShader[2e-4 * t];
                if (!s)
                    throw new Error("withCompile shader err!" + t);
                return s.createShader(e, i, n, null)
            }, h.withCompile2D = function(t, e, i, n, s, r) {
                if (n && h.sharders[n])
                    return h.sharders[n];
                var a = h._preCompileShader[2e-4 * t + e];
                if (!a)
                    throw new Error("withCompile shader err!" + t + " " + e);
                return a.createShader(i, n, s, r)
            }, h.addInclude = function(t, e) {
                ri.addInclude(t, e)
            }, h.preCompile = function(t, e, i, n) {
                h._preCompileShader[2e-4 * t] = new ri(e, i, n)
            }, h.preCompile2D = function(t, e, i, n, s) {
                h._preCompileShader[2e-4 * t + e] = new ri(i, n, s)
            }, h._createShader = function(t, e, i) {
                var n = t.createShader(i);
                return t.shaderSource(n, e), t.compileShader(n), t.getShaderParameter(n, 35713) ? n : (console.log(t.getShaderInfoLog(n)), null)
            }, h._count = 0, h._preCompileShader = {}, h.SHADERNAME2ID = 2e-4, h.sharders = new Array(32), a(h, ["nameKey", function() {
                return this.nameKey = new de
            }]), h
        }(),
        nn = (function() {
            function t() {
                this.url = null, this._channel = null, this._tar = null, this._playEvents = null, this._stopEvents = null, t.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), this.on("removed", this, this._onParentChange)
            }
            m(t, "laya.media.SoundNode", Yi);
            var e = t.prototype;
            e._onParentChange = function() {
                this.target = this.parent
            }, e.play = function(t, e) {
                void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = ui.playSound(this.url, t, e))
            }, e.stop = function() {
                this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null
            }, e._setPlayAction = function(t, e, i, n) {
                void 0 === n && (n = !0), this[i] && t && (n ? t.on(e, this, this[i]) : t.off(e, this, this[i]))
            }, e._setPlayActions = function(t, e, i, n) {
                if (void 0 === n && (n = !0), t && e) {
                    var s, r = e.split(","),
                        a = 0;
                    for (s = r.length, a = 0; a < s; a++)
                        this._setPlayAction(t, r[a], i, n)
                }
            }, f(0, e, "playEvent", null, function(t) {
                (this._playEvents = t) && this._tar && this._setPlayActions(this._tar, t, "play")
            }), f(0, e, "target", null, function(t) {
                this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), this._setPlayActions(this._tar, this._stopEvents, "stop", !0))
            }), f(0, e, "stopEvent", null, function(t) {
                (this._stopEvents = t) && this._tar && this._setPlayActions(this._tar, t, "stop")
            })
        }(), function() {
            function i(t, e) {
                i.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1, this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = e, this._anisoLevel = 1, this._glTexture = se.instance.createTexture()
            }
            m(i, "laya.resource.BaseTexture", ji);
            var t = i.prototype;
            return t._isPot = function(t) {
                return 0 == (t & t - 1)
            }, t._getGLFormat = function() {
                var t = 0;
                switch (this._format) {
                    case 0:
                        t = 6407;
                        break;
                    case 1:
                        t = 6408;
                        break;
                    case 2:
                        t = 6406;
                        break;
                    case 3:
                        if (!pt._compressedTextureS3tc)
                            throw "BaseTexture: not support DXT1 format.";
                        t = pt._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        break;
                    case 4:
                        if (!pt._compressedTextureS3tc)
                            throw "BaseTexture: not support DXT5 format.";
                        t = pt._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;
                    case 5:
                        if (!pt._compressedTextureEtc1)
                            throw "BaseTexture: not support ETC1RGB format.";
                        t = pt._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                        break;
                    case 9:
                        if (!pt._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                        t = pt._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        break;
                    case 10:
                        if (!pt._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                        t = pt._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                        break;
                    case 11:
                        if (!pt._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                        t = pt._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        break;
                    case 12:
                        if (!pt._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                        t = pt._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        break;
                    default:
                        throw "BaseTexture: unknown texture format."
                }
                return t
            }, t._setFilterMode = function(t) {
                var e = se.instance;
                switch (pt.bindTexture(e, this._glTextureType, this._glTexture), t) {
                    case 0:
                        this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9984) : e.texParameteri(this._glTextureType, 10241, 9728), e.texParameteri(this._glTextureType, 10240, 9728);
                        break;
                    case 1:
                        this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9985) : e.texParameteri(this._glTextureType, 10241, 9729), e.texParameteri(this._glTextureType, 10240, 9729);
                        break;
                    case 2:
                        this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9987) : e.texParameteri(this._glTextureType, 10241, 9729), e.texParameteri(this._glTextureType, 10240, 9729);
                        break;
                    default:
                        throw new Error("BaseTexture:unknown filterMode value.")
                }
            }, t._setWarpMode = function(t, e) {
                var i = se.instance;
                if (pt.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height))
                    switch (e) {
                        case 0:
                            i.texParameteri(this._glTextureType, t, 10497);
                            break;
                        case 1:
                            i.texParameteri(this._glTextureType, t, 33071)
                    }
                else
                    i.texParameteri(this._glTextureType, t, 33071)
            }, t._setAnisotropy = function(t) {
                var e = pt._extTextureFilterAnisotropic;
                if (e && !re.onLimixiu) {
                    t = Math.max(t, 1);
                    var i = se.instance;
                    pt.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t)
                }
            }, t._disposeResource = function() {
                this._glTexture && (se.instance.deleteTexture(this._glTexture), this._glTexture = null, this._setGPUMemory(0))
            }, t._getSource = function() {
                return this._readyed ? this._glTexture : null
            }, t.generateMipmap = function() {
                this._isPot(this.width) && this._isPot(this.height) && se.instance.generateMipmap(this._glTextureType)
            }, f(0, t, "wrapModeU", function() {
                return this._wrapModeU
            }, function(t) {
                this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(10242, t))
            }), f(0, t, "mipmap", function() {
                return this._mipmap
            }), f(0, t, "format", function() {
                return this._format
            }), f(0, t, "wrapModeV", function() {
                return this._wrapModeV
            }, function(t) {
                this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(10243, t))
            }), f(0, t, "defaulteTexture", function() {
                throw "BaseTexture:must override it."
            }), f(0, t, "filterMode", function() {
                return this._filterMode
            }, function(t) {
                t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t))
            }), f(0, t, "anisoLevel", function() {
                return this._anisoLevel
            }, function(t) {
                t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t))
            }), i.WARPMODE_REPEAT = 0, i.WARPMODE_CLAMP = 1, i.FILTERMODE_POINT = 0, i.FILTERMODE_BILINEAR = 1, i.FILTERMODE_TRILINEAR = 2, i.FORMAT_R8G8B8 = 0, i.FORMAT_R8G8B8A8 = 1, i.FORMAT_ALPHA8 = 2, i.FORMAT_DXT1 = 3, i.FORMAT_DXT5 = 4, i.FORMAT_ETC1RGB = 5, i.FORMAT_PVRTCRGB_2BPPV = 9, i.FORMAT_PVRTCRGBA_2BPPV = 10, i.FORMAT_PVRTCRGB_4BPPV = 11, i.FORMAT_PVRTCRGBA_4BPPV = 12, i.FORMAT_DEPTH_16 = 0, i.FORMAT_STENCIL_8 = 1, i.FORMAT_DEPTHSTENCIL_16_8 = 2, i.FORMAT_DEPTHSTENCIL_NONE = 3, i
        }()),
        sn = function() {
            function e(t) {
                e.__super.call(this), void 0 === t && (t = !1), this._source = t ? re.createElement("canvas") : this, this.lock = !0
            }
            m(e, "laya.resource.HTMLCanvas", ji);
            var t = e.prototype;
            return t._getSource = function() {
                return this._source
            }, t.clear = function() {
                this._ctx && this._ctx.clear && this._ctx.clear(), this._texture && (this._texture.destroy(), this._texture = null)
            }, t.destroy = function() {
                laya.resource.Resource.prototype.destroy.call(this), this._setCPUMemory(0), this._ctx && this._ctx.destroy(), this._ctx = null
            }, t.release = function() {}, t._setContext = function(t) {
                this._ctx = t
            }, t.getContext = function(t, e) {
                return this.context
            }, t.getMemSize = function() {
                return 0
            }, t.size = function(t, e) {
                this._width == t && this._height == e && (!this._source || this._source.width == t && this._source.height == e) || (this._width = t, this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), this._texture = null))
            }, t.getTexture = function() {
                if (!this._texture) {
                    var t = new _n;
                    t.loadImageSource(this.source), this._texture = new wi(t)
                }
                return this._texture
            }, t.toBase64 = function(t, e) {
                if (this._source) {
                    if (te.isConchApp) {
                        if (2 == conchConfig.threadMode)
                            throw "native 2 thread mode use toBase64Async";
                        var i = this._ctx._targets.sourceWidth,
                            n = this._ctx._targets.sourceHeight,
                            s = this._ctx._targets.getData(0, 0, i, n);
                        return conchToBase64FlipY ? conchToBase64FlipY(t, e, s.buffer, i, n) : conchToBase64(t, e, s.buffer, i, n)
                    }
                    return this._source.toDataURL(t, e)
                }
                return null
            }, t.toBase64Async = function(i, n, s) {
                var r = this._ctx._targets.sourceWidth,
                    a = this._ctx._targets.sourceHeight;
                this._ctx._targets.getDataAsync(0, 0, r, a, function(t) {
                    var e = conchToBase64FlipY ? conchToBase64FlipY(i, n, t.buffer, r, a) : conchToBase64(i, n, t.buffer, r, a);
                    s(e)
                })
            }, f(0, t, "source", function() {
                return this._source
            }), f(0, t, "context", function() {
                return this._ctx ? this._ctx : (this._source == this ? this._ctx = new Ct : this._ctx = this._source.getContext(te.isConchApp ? "layagl" : "2d"), (this._ctx._canvas = this)._ctx)
            }), e
        }();
    m(rn, "laya.resource.HTMLImage", ji), rn.create = function(t, e, i) {
        var n = new _n(t, e, i, !1, !1);
        return n.wrapModeU = 1, n.wrapModeV = 1, n
    };

    function rn() {
        rn.__super.call(this)
    }
    var an = function(h) {
            function l() {
                this.focus = null, this._frameRate = "fast", this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._safariOffsetY = 0, this._frameStartTime = 0, this._isFocused = !1, this._isVisibility = !1, this._wgColor = [0, 0, 0, 1], this._scene3Ds = [], this._globalRepaintSet = !1, this._globalRepaintGet = !1, this._curUIBase = null, this.useRetinalCanvas = !1, l.__super.call(this), this.offset = new ye, this._canvasTransform = new vt, this._previousOrientation = re.window.orientation, this._3dUI = [];
                var e = this;
                this.transform = this._createTransform(), this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, this._setBit(128, !0), this._setBit(2, !0), this._isFocused = !0, this._isVisibility = !0, this.useRetinalCanvas = Ge.useRetinalCanvas;
                var t = re.window,
                    i = this;
                t.addEventListener("focus", function() {
                    e._isFocused = !0, i.event("focus"), i.event("focuschange")
                }), t.addEventListener("blur", function() {
                    e._isFocused = !1, i.event("blur"), i.event("focuschange"), i._isInputting() && (ln.inputElement.target.focus = !1)
                });
                var n = "visibilityState",
                    s = "visibilitychange",
                    r = t.document;
                void 0 !== r.hidden ? (s = "visibilitychange", n = "visibilityState") : void 0 !== r.mozHidden ? (s = "mozvisibilitychange", n = "mozVisibilityState") : void 0 !== r.msHidden ? (s = "msvisibilitychange", n = "msVisibilityState") : void 0 !== r.webkitHidden && (s = "webkitvisibilitychange", n = "webkitVisibilityState"), t.document.addEventListener(s, function() {
                    "hidden" == re.document[n] ? (e._isVisibility = !1, i._isInputting() && (ln.inputElement.target.focus = !1)) : e._isVisibility = !0;
                    e.renderingEnabled = e._isVisibility, i.event("visibilitychange")
                }), t.addEventListener("resize", function() {
                    var t = re.window.orientation;
                    null != t && t != e._previousOrientation && i._isInputting() && (ln.inputElement.target.focus = !1), e._previousOrientation = t, i._isInputting() || (re.onSafari && (i._safariOffsetY = (re.window.__innerHeight || re.document.body.clientHeight || re.document.documentElement.clientHeight) - re.window.innerHeight), i._resetCanvas())
                }), t.addEventListener("orientationchange", function(t) {
                    i._resetCanvas()
                }), this.on("mousemove", this, this._onmouseMove), re.onMobile && this.on("mousedown", this, this._onmouseMove)
            }
            m(l, "laya.display.Stage", h);
            var t = l.prototype;
            return t._isInputting = function() {
                return re.onMobile && ln.isInputting
            }, t._changeCanvasSize = function() {
                this.setScreenSize(re.clientWidth * re.pixelRatio, re.clientHeight * re.pixelRatio)
            }, t._resetCanvas = function() {
                this.screenAdaptationEnabled && this._changeCanvasSize()
            }, t.setScreenSize = function(t, e) {
                var i = !1;
                if ("none" !== this._screenMode && (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode)) {
                    var n = e;
                    e = t, t = n
                }
                this.canvasRotation = i;
                var s = te._mainCanvas,
                    r = s.source.style,
                    a = this._canvasTransform.identity(),
                    o = this._scaleMode,
                    h = t / this.designWidth,
                    l = e / this.designHeight,
                    u = this.useRetinalCanvas ? t : this.designWidth,
                    c = this.useRetinalCanvas ? e : this.designHeight,
                    _ = t,
                    d = e,
                    f = re.pixelRatio;
                switch (this._width = this.designWidth, this._height = this.designHeight, o) {
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
                        t / e < this.designWidth / this.designHeight ? (l = h, this._height = c = Math.round(e / h)) : (h = l, this._width = u = Math.round(t / l))
                }
                this.useRetinalCanvas && (u = t, c = e), h *= this.scaleX, l *= this.scaleY, 1 === h && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(h / (_ / u)), this.transform.d = this._formatData(l / (d / c))), s.size(u, c), qe.changeWebGLSize(u, c), a.scale(_ / u / f, d / c / f), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = t - _ : this.offset.x = .5 * (t - _) / f, "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / f, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), a.translate(this.offset.x, this.offset.y), this._safariOffsetY && a.translate(0, this._safariOffsetY), this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2), a.translate(e / f, 0), this.canvasDegree = 90) : (a.rotate(-Math.PI / 2), a.translate(0, t / f), this.canvasDegree = -90)), a.a = this._formatData(a.a), a.d = this._formatData(a.d), a.tx = this._formatData(a.tx), a.ty = this._formatData(a.ty), this.transform = this.transform, r.transformOrigin = r.webkitTransformOrigin = r.msTransformOrigin = r.mozTransformOrigin = r.oTransformOrigin = "0px 0px 0px", r.transform = r.webkitTransform = r.msTransform = r.mozTransform = r.oTransform = "matrix(" + a.toString() + ")", this._safariOffsetY && a.translate(0, -this._safariOffsetY), a.translate(parseInt(r.left) || 0, parseInt(r.top) || 0), this.visible = !0, this._repaint |= 2, this.event("resize")
            }, t._formatData = function(t) {
                return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? 0 < t ? 1 : -1 : t
            }, t.getMousePoint = function() {
                return ye.TEMP.setTo(this.mouseX, this.mouseY)
            }, t.repaint = function(t) {
                void 0 === t && (t = 2), this._repaint |= t
            }, t.parentRepaint = function(t) {
                void 0 === t && (t = 2)
            }, t._loop = function() {
                return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, this.render(te._context, 0, 0), !0
            }, t.getFrameTm = function() {
                return this._frameStartTime
            }, t._onmouseMove = function(t) {
                this._mouseMoveTime = re.now()
            }, t.getTimeFromFrameStart = function() {
                return re.now() - this._frameStartTime
            }, t.render = function(t, e, i) {
                if (l._dbgSprite.graphics.clear(), "sleep" === this._frameRate) {
                    var n = re.now();
                    if (!(1e3 <= n - this._frameStartTime))
                        return;
                    this._frameStartTime = n
                } else {
                    if (!this._visible)
                        return this._renderCount++, void(this._renderCount % 5 == 0 && (Ee.I._update(), R.loopCount++, this._updateTimers()));
                    this._frameStartTime = re.now()
                }
                this._renderCount++;
                var s = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate),
                    r = this._renderCount % 2 == 0;
                if (R.renderSlow = !s, (s || r) && (Ee.I._update(), R.loopCount++, this.renderingEnabled)) {
                    for (var a = 0, o = this._scene3Ds.length; a < o; a++)
                        this._scene3Ds[a]._update();
                    t.clear(), h.prototype.render.call(this, t, e, i), R._show && R._sp && R._sp.render(t, e, i)
                }
                l._dbgSprite.render(t, 0, 0), !s && r || (this.renderingEnabled && (qe.clear(this._bgColor), t.flush(), L.instance && L.getInstance().endDispose()), this._updateTimers())
            }, t.renderToNative = function(t, e, i) {
                if (this._renderCount++, this._visible) {
                    if (Ee.I._update(), R.loopCount++, this.renderingEnabled) {
                        for (var n = 0, s = this._scene3Ds.length; n < s; n++)
                            this._scene3Ds[n]._update();
                        t.clear(), h.prototype.render.call(this, t, e, i), R._show && R._sp && R._sp.render(t, e, i)
                    }
                    this.renderingEnabled && (qe.clear(this._bgColor), t.flush(), L.instance && L.getInstance().endDispose()), this._updateTimers()
                } else
                    this._renderCount % 5 == 0 && (Ee.I._update(), R.loopCount++, this._updateTimers())
            }, t._updateTimers = function() {
                y.systemTimer._update(), y.startTimer._update(), y.physicsTimer._update(), y.updateTimer._update(), y.lateTimer._update(), y.timer._update()
            }, t._requestFullscreen = function() {
                var t = re.document.documentElement;
                t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
            }, t._fullScreenChanged = function() {
                y.stage.event("fullscreenchange")
            }, t.exitFullscreen = function() {
                var t = re.document;
                t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
            }, t.isGlobalRepaint = function() {
                return this._globalRepaintGet
            }, t.setGlobalRepaint = function() {
                this._globalRepaintSet = !0
            }, t.add3DUI = function(t) {
                var e = t.rootView;
                0 <= this._3dUI.indexOf(e) || this._3dUI.push(e)
            }, t.remove3DUI = function(t) {
                var e = t.rootView,
                    i = this._3dUI.indexOf(e);
                return 0 <= i && (this._3dUI.splice(i, 1), !0)
            }, f(0, t, "clientScaleY", function() {
                return this._transform ? this._transform.getScaleY() : 1
            }), f(0, t, "width", h.prototype._$get_width, function(t) {
                this.designWidth = t, y.superSet(Yi, this, "width", t), y.systemTimer.callLater(this, this._changeCanvasSize)
            }), f(0, t, "isFocused", function() {
                return this._isFocused
            }), f(0, t, "alignH", function() {
                return this._alignH
            }, function(t) {
                this._alignH = t, y.systemTimer.callLater(this, this._changeCanvasSize)
            }), f(0, t, "height", h.prototype._$get_height, function(t) {
                this.designHeight = t, y.superSet(Yi, this, "height", t), y.systemTimer.callLater(this, this._changeCanvasSize)
            }), f(0, t, "transform", function() {
                return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform()
            }, h.prototype._$set_transform), f(0, t, "isVisibility", function() {
                return this._isVisibility
            }), f(0, t, "scaleMode", function() {
                return this._scaleMode
            }, function(t) {
                this._scaleMode = t, y.systemTimer.callLater(this, this._changeCanvasSize)
            }), f(0, t, "alignV", function() {
                return this._alignV
            }, function(t) {
                this._alignV = t, y.systemTimer.callLater(this, this._changeCanvasSize)
            }), f(0, t, "bgColor", function() {
                return this._bgColor
            }, function(t) {
                this._bgColor = t, this._wgColor = t ? v.create(t).arrColor : null, re.onLimixiu ? this._wgColor = v.create(t).arrColor : te.canvas.style.background = t || "none"
            }), f(0, t, "mouseX", function() {
                return Math.round(D.instance.mouseX / this.clientScaleX)
            }), f(0, t, "mouseY", function() {
                return Math.round(D.instance.mouseY / this.clientScaleY)
            }), f(0, t, "clientScaleX", function() {
                return this._transform ? this._transform.getScaleX() : 1
            }), f(0, t, "screenMode", function() {
                return this._screenMode
            }, function(t) {
                this._screenMode = t
            }), f(0, t, "visible", h.prototype._$get_visible, function(t) {
                this.visible !== t && (y.superSet(Yi, this, "visible", t), te._mainCanvas.source.style.visibility = t ? "visible" : "hidden")
            }), f(0, t, "fullScreenEnabled", null, function(t) {
                var e = re.document,
                    i = te.canvas;
                t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), e.removeEventListener("msfullscreenchange", this._fullScreenChanged))
            }), f(0, t, "frameRate", function() {
                return te.isConchApp ? this._frameRateNative : this._frameRate
            }, function(t) {
                if (te.isConchApp) {
                    switch (t) {
                        case "fast":
                            p.conch.config.setLimitFPS(60);
                            break;
                        case "mouse":
                            p.conch.config.setMouseFrame(2e3);
                            break;
                        case "slow":
                            p.conch.config.setSlowFrame(!0);
                            break;
                        case "sleep":
                            p.conch.config.setLimitFPS(1)
                    }
                    this._frameRateNative = t
                } else
                    this._frameRate = t
            }), l.SCALE_NOSCALE = "noscale", l.SCALE_EXACTFIT = "exactfit", l.SCALE_SHOWALL = "showall", l.SCALE_NOBORDER = "noborder", l.SCALE_FULL = "full", l.SCALE_FIXED_WIDTH = "fixedwidth", l.SCALE_FIXED_HEIGHT = "fixedheight", l.SCALE_FIXED_AUTO = "fixedauto", l.ALIGN_LEFT = "left", l.ALIGN_RIGHT = "right", l.ALIGN_CENTER = "center", l.ALIGN_TOP = "top", l.ALIGN_MIDDLE = "middle", l.ALIGN_BOTTOM = "bottom", l.SCREEN_NONE = "none", l.SCREEN_HORIZONTAL = "horizontal", l.SCREEN_VERTICAL = "vertical", l.FRAME_FAST = "fast", l.FRAME_SLOW = "slow", l.FRAME_MOUSE = "mouse", l.FRAME_SLEEP = "sleep", a(l, ["_dbgSprite", function() {
                return this._dbgSprite = new Yi
            }]), l
        }(Yi),
        on = function() {
            function d() {
                this.datas = [], this.hud_width = 800, this.hud_height = 200, this.gMinV = 0, this.gMaxV = 100, this.textSpace = 40, this._now = null, this.sttm = 0, d.__super.call(this), this.xdata = new Array(d.DATANUM), this.ydata = new Array(d.DATANUM), (d.inst = this)._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender(), this.addDataDef(0, 16777215, "frame", 1), this.addDataDef(1, 65280, "update", 1), this.addDataDef(2, 16711680, "flush", 1), this._now = performance ? performance.now.bind(performance) : Date.now
            }
            m(d, "laya.utils.PerfHUD", Yi);
            var t = d.prototype;
            return t.now = function() {
                return this._now()
            }, t.start = function() {
                this.sttm = this._now()
            }, t.end = function(t) {
                var e = this._now() - this.sttm;
                this.updateValue(t, e)
            }, t.config = function(t, e) {
                this.hud_width = t, this.hud_height = e
            }, t.addDataDef = function(t, e, i, n) {
                this.datas[t] = new yt(t, e, i, n)
            }, t.updateValue = function(t, e) {
                this.datas[t].addData(e)
            }, t.v2y = function(t) {
                this._y, this.hud_height, this.gMinV, this.gMaxV;
                return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV)
            }, t.drawHLine = function(t, e, i, n) {
                var s = this._x,
                    r = (this._x, this.hud_width, this.v2y(e));
                t.fillText(n, s, r - 6, null, "green", null), s += this.textSpace, t.fillStyle = i, t.fillRect(s, r, this._x + this.hud_width, 1, null)
            }, t.customRender = function(t, e, i) {
                var n = performance.now();
                d._lastTm <= 0 && (d._lastTm = n), this.updateValue(0, n - d._lastTm), d._lastTm = n, t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), this.drawHLine(t, 100, "green", "10|100");
                for (var s = 0, r = this.datas.length; s < r; s++) {
                    var a = this.datas[s];
                    if (a) {
                        var o = a.datas.length,
                            h = (this.hud_width - this.textSpace) / o,
                            l = a.datapos,
                            u = this._x + this.textSpace;
                        t.fillStyle = a.color;
                        for (var c = o; l < c; l++) {
                            var _ = this.v2y(a.datas[l] * a.scale);
                            t.fillRect(u, _, h, this.hud_height + this._y - _, null), u += h
                        }
                        for (l = 0; l < a.datapos; l++)
                            _ = this.v2y(a.datas[l] * a.scale), t.fillRect(u, _, h, this.hud_height + this._y - _, null), u += h
                    }
                }
                t.restore()
            }, d._lastTm = 0, d._now = 0, d.DATANUM = 300, d.inst = null, d.drawTexTm = 0, d
        }(),
        hn = function(n) {
            function h() {
                this.autoDestroyAtClosed = !1, this.url = null, this._timer = null, this._viewCreated = !1, this._idMap = null, this._$componentType = "Scene", h.__super.call(this), this._setBit(8, !0), h.unDestroyedScenes.push(this), (this._scene = this).createChildren()
            }
            m(h, "laya.display.Scene", n);
            var t = h.prototype;
            return t.createChildren = function() {}, t.loadScene = function(t) {
                var e = -1 < t.indexOf(".") ? t : t + ".scene",
                    i = y.loader.getRes(e);
                if (i)
                    this.createView(i);
                else {
                    y.loader.resetProgress();
                    var n = new Li;
                    n.on("complete", this, this._onSceneLoaded, [e]), n.load(e)
                }
            }, t._onSceneLoaded = function(t) {
                this.createView(Ai.getRes(t))
            }, t.createView = function(t) {
                t && !this._viewCreated && (this._viewCreated = !0, Bt.createByData(this, t))
            }, t.getNodeByID = function(t) {
                return this._idMap ? this._idMap[t] : null
            }, t.open = function(t, e) {
                void 0 === t && (t = !0), t && h.closeAll(), h.root.addChild(this), this.onOpened(e)
            }, t.onOpened = function(t) {}, t.close = function(t) {
                this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf()
            }, t.onClosed = function(t) {}, t.destroy = function(t) {
                void 0 === t && (t = !0), this._idMap = null, n.prototype.destroy.call(this, t);
                for (var e = laya.display.Scene.unDestroyedScenes, i = e.length - 1; - 1 < i; i--)
                    if (e[i] === this)
                        return void e.splice(i, 1)
            }, t._sizeChanged = function() {
                this.event("resize")
            }, f(0, t, "scaleX", n.prototype._$get_scaleX, function(t) {
                y.superGet(Yi, this, "scaleX") != t && (y.superSet(Yi, this, "scaleX", t), this.event("resize"))
            }), f(0, t, "scaleY", n.prototype._$get_scaleY, function(t) {
                y.superGet(Yi, this, "scaleY") != t && (y.superSet(Yi, this, "scaleY", t), this.event("resize"))
            }), f(0, t, "width", function() {
                if (this._width)
                    return this._width;
                for (var t = 0, e = this.numChildren - 1; - 1 < e; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._x + i.width * i.scaleX, t))
                }
                return t
            }, function(t) {
                y.superGet(Yi, this, "width") != t && (y.superSet(Yi, this, "width", t), this.callLater(this._sizeChanged))
            }), f(0, t, "timer", function() {
                return this._timer || y.timer
            }, function(t) {
                this._timer = t
            }), f(0, t, "height", function() {
                if (this._height)
                    return this._height;
                for (var t = 0, e = this.numChildren - 1; - 1 < e; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._y + i.height * i.scaleY, t))
                }
                return t
            }, function(t) {
                y.superGet(Yi, this, "height") != t && (y.superSet(Yi, this, "height", t), this.callLater(this._sizeChanged))
            }), f(1, h, "root", function() {
                if (!h._root) {
                    function t() {
                        h._root.size(y.stage.width, y.stage.height), h._root.event("resize")
                    }
                    (h._root = y.stage.addChild(new Yi)).name = "root", y.stage.on("resize", null, t), t()
                }
                return h._root
            }, laya.display.Sprite._$SET_root), h.load = function(s, r, e) {
                y.loader.resetProgress();
                var a = new Li;

                function o(t) {
                    h._loadPage && h._loadPage.event("progress", t), e && e.runWith(t)
                }
                a.on("progress", null, o), a.once("complete", null, function() {
                    a.off("progress", null, o);
                    var t = Ai.getRes(s);
                    if (!t)
                        throw "Can not find scene:" + s;
                    if (!t.props)
                        throw "Scene data is error:" + s;
                    var e = t.props.runtime ? t.props.runtime : t.type,
                        i = ee.getClass(e);
                    if ("instance" == t.props.renderType)
                        var n = i.instance || (i.instance = new i);
                    else
                        n = new i; {
                        if (!(n && n instanceof laya.display.Node))
                            throw "Can not find scene:" + e;
                        n.url = s, n._getBit(8) ? (n.on("onViewCreated", null, function() {
                            r && r.runWith(n)
                        }), n.createView(t)) : r && r.runWith(n), h.hideLoadingPage()
                    }
                }), a.load(s)
            }, h.open = function(t, e, i, n, s) {
                if (void 0 === e && (e = !0), i instanceof laya.utils.Handler) {
                    var r = n;
                    n = i, i = r
                }
                h.showLoadingPage(), h.load(t, b.create(null, this._onSceneLoaded, [e, n, i]), s)
            }, h._onSceneLoaded = function(t, e, i, n) {
                n.open(t, i), e && e.runWith(n)
            }, h.close = function(t, e) {
                void 0 === e && (e = "");
                for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; s < r; s++) {
                    var a = n[s];
                    a && a.parent && a.url === t && a.name == e && (a.close(), i = !0)
                }
                return i
            }, h.closeAll = function() {
                for (var t = laya.display.Scene.root, e = 0, i = t.numChildren; e < i; e++) {
                    var n = t.getChildAt(0);
                    n instanceof laya.display.Scene ? n.close() : n.removeSelf()
                }
            }, h.destroy = function(t, e) {
                void 0 === e && (e = "");
                for (var i = !1, n = laya.display.Scene.unDestroyedScenes, s = 0, r = n.length; s < r; s++) {
                    var a = n[s];
                    a.url === t && a.name == e && (a.destroy(), i = !0)
                }
                return i
            }, h.gc = function() {
                vi.destroyUnusedResources()
            }, h.setLoadingPage = function(t) {
                h._loadPage != t && (h._loadPage = t)
            }, h.showLoadingPage = function(t, e) {
                void 0 === e && (e = 500), h._loadPage && (y.systemTimer.clear(null, h._showLoading), y.systemTimer.clear(null, h._hideLoading), y.systemTimer.once(e, null, h._showLoading, [t], !1))
            }, h._showLoading = function(t) {
                y.stage.addChild(h._loadPage), h._loadPage.onOpened(t)
            }, h._hideLoading = function() {
                h._loadPage.close()
            }, h.hideLoadingPage = function(t) {
                void 0 === t && (t = 500), h._loadPage && (y.systemTimer.clear(null, h._showLoading), y.systemTimer.clear(null, h._hideLoading), y.systemTimer.once(t, null, h._hideLoading))
            }, h.unDestroyedScenes = [], h._root = null, h._loadPage = null, h
        }(Yi),
        ln = function(e) {
            function s() {
                this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", this._content = "", s.__super.call(this), this._maxChars = 1e5, this._width = 100, this._height = 20, this.multiline = !1, this.overflow = "scroll", this.on("mousedown", this, this._onMouseDown), this.on("undisplay", this, this._onUnDisplay)
            }
            m(s, "laya.display.Input", e);
            var t = s.prototype;
            return t.setSelection = function(t, e) {
                this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e
            }, t._onUnDisplay = function(t) {
                this.focus = !1
            }, t._onMouseDown = function(t) {
                this.focus = !0
            }, t._syncInputTransform = function() {
                var t = this.nativeInput,
                    e = ke.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                    i = this._width - this.padding[1] - this.padding[3],
                    n = this._height - this.padding[0] - this.padding[2];
                te.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(i, n), t.setPos(e.x, e.y)) : (s.inputContainer.style.transform = s.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + y.stage.canvasDegree + "deg)", t.style.width = i + "px", t.style.height = n + "px", s.inputContainer.style.left = e.x + "px", s.inputContainer.style.top = e.y + "px")
            }, t.select = function() {
                this.nativeInput.select()
            }, t._setInputMethod = function() {
                s.input.parentElement && s.inputContainer.removeChild(s.input), s.area.parentElement && s.inputContainer.removeChild(s.area), s.inputElement = this._multiline ? s.area : s.input, s.inputContainer.appendChild(s.inputElement), Ji.RightToLeft && (s.inputElement.style.direction = "rtl")
            }, t._focusIn = function() {
                laya.display.Input.isInputting = !0;
                var t = this.nativeInput;
                this._focus = !0;
                var e = t.style;
                e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, te.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
                this.padding;
                if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, y.stage.off("keydown", this, this._onKeyDown), y.stage.on("keydown", this, this._onKeyDown), (y.stage.focus = this).event("focus"), re.onPC && t.focus(), !(re.onMiniGame || re.onBDMiniGame || re.onQGMiniGame || re.onKGMiniGame)) {
                    this._text;
                    this._text = null
                }
                this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(re.onIPhone && Ji.fontFamilyMap[this.font] || this.font), te.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !te.isConchApp && re.onPC && y.systemTimer.frameLoop(1, this, this._syncInputTransform)
            }, t._setPromptColor = function() {
                (s.promptStyleDOM = re.getElementById("promptStyle")) || ((s.promptStyleDOM = re.createElement("style")).setAttribute("id", "promptStyle"), re.document.head.appendChild(s.promptStyleDOM)), s.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}"
            }, t._focusOut = function() {
                laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (y.superSet(Ji, this, "text", this._content), y.superSet(Ji, this, "color", this._originColor)) : (y.superSet(Ji, this, "text", this._prompt), y.superSet(Ji, this, "color", this._promptColor)), y.stage.off("keydown", this, this._onKeyDown), y.stage.focus = null, this.event("blur"), this.event("change"), te.isConchApp && this.nativeInput.blur(), re.onPC && y.systemTimer.clear(this, this._syncInputTransform)
            }, t._onKeyDown = function(t) {
                13 === t.keyCode && (re.onMobile && !this._multiline && (this.focus = !1), this.event("enter"))
            }, t.changeText = function(t) {
                this._content = t, this._focus ? (this.nativeInput.value = t || "", this.event("change")) : e.prototype.changeText.call(this, t)
            }, f(0, t, "color", e.prototype._$get_color, function(t) {
                this._focus && this.nativeInput.setColor(t), y.superSet(Ji, this, "color", this._content ? t : this._promptColor), this._originColor = t
            }), f(0, t, "multiline", function() {
                return this._multiline
            }, function(t) {
                this._multiline = t, this.valign = t ? "top" : "middle"
            }), f(0, t, "maxChars", function() {
                return this._maxChars
            }, function(t) {
                t <= 0 && (t = 1e5), this._maxChars = t
            }), f(0, t, "text", function() {
                return this._focus ? this.nativeInput.value : this._content || ""
            }, function(t) {
                y.superSet(Ji, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), (this._content = t) ? y.superSet(Ji, this, "text", t) : (y.superSet(Ji, this, "text", this._prompt), y.superSet(Ji, this, "color", this.promptColor)))
            }), f(0, t, "nativeInput", function() {
                return this._multiline ? s.area : s.input
            }), f(0, t, "focus", function() {
                return this._focus
            }, function(t) {
                var e = this.nativeInput;
                this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(), (e.target = this)._focusIn()) : (e.target = null, this._focusOut(), re.document.body.scrollTop = 0, e.blur(), te.isConchApp ? e.setPos(-1e4, -1e4) : s.inputContainer.contains(e) && s.inputContainer.removeChild(e)))
            }), f(0, t, "editable", function() {
                return this._editable
            }, function(t) {
                this._editable = t, te.isConchApp && s.input.setForbidEdit(!t)
            }), f(0, t, "bgColor", e.prototype._$get_bgColor, function(t) {
                y.superSet(Ji, this, "bgColor", t), te.isConchApp && this.nativeInput.setBgColor(t)
            }), f(0, t, "restrict", function() {
                return this._restrictPattern ? this._restrictPattern.source : ""
            }, function(t) {
                t ? (-1 < (t = "[^" + t + "]").indexOf("^^") && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null
            }), f(0, t, "prompt", function() {
                return this._prompt
            }, function(t) {
                !this._text && t && y.superSet(Ji, this, "color", this._promptColor), this.promptColor = this._promptColor, this._text ? y.superSet(Ji, this, "text", this._text == this._prompt ? t : this._text) : y.superSet(Ji, this, "text", t), this._prompt = Ji.langPacks && Ji.langPacks[t] ? Ji.langPacks[t] : t
            }), f(0, t, "promptColor", function() {
                return this._promptColor
            }, function(t) {
                this._promptColor = t, this._content || y.superSet(Ji, this, "color", t)
            }), f(0, t, "type", function() {
                return this._type
            }, function(t) {
                this._getTextStyle().asPassword = "password" === t, this._type = t
            }), s.__init__ = function() {
                if (s._createInputElement(), re.onMobile) {
                    var t = !1;
                    (re.onMiniGame || re.onBDMiniGame || re.onQGMiniGame || re.onKGMiniGame) && (t = !0), te.canvas.addEventListener(s.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", s._popupInputMethod)
                }
            }, s._popupInputMethod = function(t) {
                laya.display.Input.isInputting && laya.display.Input.inputElement.focus()
            }, s._createInputElement = function() {
                s._initInput(s.area = re.createElement("textarea")), s._initInput(s.input = re.createElement("input")), (s.inputContainer = re.createElement("div")).style.position = "absolute", s.inputContainer.style.zIndex = 1e5, re.container.appendChild(s.inputContainer), s.inputContainer.setPos = function(t, e) {
                    s.inputContainer.style.left = t + "px", s.inputContainer.style.top = e + "px"
                }
            }, s._initInput = function(e) {
                var t = e.style;
                t.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", t.resize = "none", t.backgroundColor = "transparent", t.border = "none", t.outline = "none", t.zIndex = 1, e.addEventListener("input", s._processInputting), e.addEventListener("mousemove", s._stopEvent), e.addEventListener("mousedown", s._stopEvent), e.addEventListener("touchmove", s._stopEvent), e.setFontFace = function(t) {
                    e.style.fontFamily = t
                }, te.isConchApp || (e.setColor = function(t) {
                    e.style.color = t
                }, e.setFontSize = function(t) {
                    e.style.fontSize = t + "px"
                })
            }, s._processInputting = function(t) {
                var e = laya.display.Input.inputElement.target;
                if (e) {
                    var i = laya.display.Input.inputElement.value;
                    e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), laya.display.Input.inputElement.value = i)), e._text = i, e.event("input")
                }
            }, s._stopEvent = function(t) {
                "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation()
            }, s.TYPE_TEXT = "text", s.TYPE_PASSWORD = "password", s.TYPE_EMAIL = "email", s.TYPE_URL = "url", s.TYPE_NUMBER = "number", s.TYPE_RANGE = "range", s.TYPE_DATE = "date", s.TYPE_MONTH = "month", s.TYPE_WEEK = "week", s.TYPE_TIME = "time", s.TYPE_DATE_TIME = "datetime", s.TYPE_DATE_TIME_LOCAL = "datetime-local", s.TYPE_SEARCH = "search", s.input = null, s.area = null, s.inputElement = null, s.inputContainer = null, s.confirmButton = null, s.promptStyleDOM = null, s.inputHeight = 45, s.isInputting = !1, s.stageMatrix = null, a(s, ["IOS_IFRAME", function() {
                return this.IOS_IFRAME = re.onIOS && re.window.top != re.window.self
            }]), s
        }(Ji),
        un = (function(n) {
            function c() {
                this._frames = null, this._url = null, c.__super.call(this), this._setControlNode(this)
            }
            m(c, "laya.display.Animation", n);
            var t = c.prototype;
            t.destroy = function(t) {
                void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), this._frames = null, this._labels = null
            }, t.play = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), i && this._setFramesFromCache(i, !0), n.prototype.play.call(this, t, e, i)
            }, t._setFramesFromCache = function(t, e) {
                if (void 0 === e && (e = !1), this._url && (t = this._url + "#" + t), t && c.framesMap[t]) {
                    var i = c.framesMap[t];
                    return i instanceof Array ? (this._frames = c.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (c.framesMap[t] = fn.parseAnimationByData(i), i = c.framesMap[t]), this._frames = i.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), !0
                }
                return e && console.log("ani not found:", t), !1
            }, t._copyLabels = function(t) {
                if (!t)
                    return null;
                var e, i;
                for (i in e = {}, t)
                    e[i] = ke.copyArray([], t[i]);
                return e
            }, t._frameLoop = function() {
                this._visible && .01 < this._style.alpha && this._frames && n.prototype._frameLoop.call(this)
            }, t._displayToIndex = function(t) {
                this._frames && (this.graphics = this._frames[t])
            }, t.clear = function() {
                return n.prototype.clear.call(this), this.stop(), this.graphics = null, this._frames = null, this._labels = null, this
            }, t.loadImages = function(t, e) {
                return void 0 === e && (e = ""), this._url = "", this._setFramesFromCache(e) || (this.frames = c.framesMap[e] ? c.framesMap[e] : c.createFrames(t, e)), this
            }, t.loadAtlas = function(e, i, n) {
                void 0 === n && (n = ""), this._url = "";
                var s = this;
                if (!s._setFramesFromCache(n)) {
                    function t(t) {
                        e === t && (s.frames = c.framesMap[n] ? c.framesMap[n] : c.createFrames(e, n), i && i.run())
                    }
                    Ai.getAtlas(e) ? t(e) : y.loader.load(e, b.create(null, t, [e]), null, "atlas")
                }
                return this
            }, t.loadAnimation = function(t, e, i) {
                this._url = t;
                return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0), this.index = 0, e && e.run()) : !i || Ai.getAtlas(i) ? this._loadAnimationData(t, e, i) : y.loader.load(i, b.create(this, this._loadAnimationData, [t, e, i]), null, "atlas"), this
            }, t._loadAnimationData = function(o, h, t) {
                var l = this;
                if (!t || Ai.getAtlas(t)) {
                    var u = this;
                    Ai.getRes(o) ? e(o) : y.loader.load(o, b.create(null, e, [o]), null, "json")
                } else
                    console.warn("atlas load fail:" + t);

                function e(t) {
                    if (Ai.getRes(t)) {
                        if (o === t) {
                            var e;
                            if (c.framesMap[o + "#"])
                                u._setFramesFromCache(l._actionName, !0), l.index = 0, l._resumePlay();
                            else {
                                var i = fn.parseAnimationData(Ai.getRes(o));
                                if (!i)
                                    return;
                                var n, s = i.animationList,
                                    r = 0,
                                    a = s.length;
                                for (r = 0; r < a; r++)
                                    e = s[r], c.framesMap[o + "#" + e.name] = e, n || (n = e);
                                n && (c.framesMap[o + "#"] = n, u._setFramesFromCache(l._actionName, !0), l.index = 0), l._resumePlay()
                            }
                            h && h.run()
                        }
                        Ai.clearRes(o)
                    } else
                        c.framesMap[o + "#"] && (u._setFramesFromCache(l._actionName, !0), l.index = 0, l._resumePlay(), h && h.run())
                }
            }, f(0, t, "frames", function() {
                return this._frames
            }, function(t) {
                (this._frames = t) && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), this.index = this._index)
            }), f(0, t, "autoPlay", null, function(t) {
                t ? this.play() : this.stop()
            }), f(0, t, "source", null, function(t) {
                -1 < t.indexOf(".ani") ? this.loadAnimation(t) : -1 < t.indexOf(".json") || -1 < t.indexOf("als") || -1 < t.indexOf("atlas") ? this.loadAtlas(t) : this.loadImages(t.split(","))
            }), f(0, t, "autoAnimation", null, function(t) {
                this.play(0, !0, t)
            }), c.createFrames = function(t, e) {
                var i;
                if ("string" == typeof t) {
                    var n = Ai.getAtlas(t);
                    if (n && n.length) {
                        i = [];
                        for (var s = 0, r = n.length; s < r; s++) {
                            var a = new Se;
                            a.drawImage(Ai.getRes(n[s]), 0, 0), i.push(a)
                        }
                    }
                } else if (t instanceof Array)
                    for (i = [], s = 0, r = t.length; s < r; s++)
                        (a = new Se).loadImage(t[s], 0, 0), i.push(a);
                return e && (c.framesMap[e] = i), i
            }, c.clearCache = function(t) {
                var e, i = c.framesMap,
                    n = t + "#";
                for (e in i)
                    e !== t && 0 !== e.indexOf(n) || delete c.framesMap[e]
            }, c.framesMap = {}
        }(tn), function(t) {
            function r(t, e, i, n, s) {
                this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0, r.__super.call(this, t, e, i, n, s)
            }
            m(r, "laya.webgl.shader.d2.Shader2X", t);
            var e = r.prototype;
            return e._disposeResource = function() {
                t.prototype._disposeResource.call(this), this._params2dQuick2 = null
            }, e.upload2dQuick2 = function(t) {
                this.upload(t, this._params2dQuick2 || this._make2dQuick2())
            }, e._make2dQuick2 = function() {
                if (!this._params2dQuick2) {
                    this._params2dQuick2 = [];
                    for (var t, e = this._params, i = 0, n = e.length; i < n; i++)
                        "size" !== (t = e[i]).name && this._params2dQuick2.push(t)
                }
                return this._params2dQuick2
            }, r.create = function(t, e, i, n, s) {
                return new r(t, e, i, n, s)
            }, r
        }(en)),
        cn = function(t) {
            function l() {
                this._targetDic = null, this._animationData = null, this._usedFrames = null, l.__super.call(this), null === l._sortIndexFun && (l._sortIndexFun = B.sortByKey("index", !1, !0))
            }
            m(l, "laya.display.FrameAnimation", t);
            var e = l.prototype;
            return e._setUp = function(t, e) {
                this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, e.animationNewFrames = this._usedFrames)
            }, e.clear = function() {
                return t.prototype.clear.call(this), this._targetDic = null, this._animationData = null, this
            }, e._displayToIndex = function(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e = this._animationData.nodes,
                        i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        this._displayNodeToFrame(e[i], t)
                }
            }, e._displayNodeToFrame = function(t, e, i) {
                i || (i = this._targetDic);
                var n = i[t.target];
                if (n) {
                    var s, r, a, o = t.frames,
                        h = t.keys,
                        l = 0,
                        u = h.length;
                    for (l = 0; l < u; l++)
                        a = (r = o[s = h[l]]).length > e ? r[e] : r[r.length - 1], n[s] = a;
                    var c, _ = t.funkeys;
                    if (0 != (u = _.length))
                        for (l = 0; l < u; l++)
                            void 0 !== (c = o[s = _[l]])[e] && n[s] && n[s].apply(n, c[e])
                }
            }, e._calculateDatas = function() {
                if (this._animationData) {
                    var t, e = this._animationData.nodes,
                        i = 0,
                        n = e.length;
                    for (i = this._count = 0; i < n; i++)
                        t = e[i], this._calculateKeyFrames(t);
                    this._count += 1
                }
            }, e._calculateKeyFrames = function(t) {
                var e, i, n = t.keyframes,
                    s = t.target;
                for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}), n) {
                    var r = -1 != e.indexOf("()");
                    if (i = n[e], r && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []), r) {
                        t.funkeys.push(e);
                        for (var a = t.frames[e], o = 0; o < i.length; o++) {
                            var h = i[o];
                            a[h.index] = h.value, h.index > this._count && (this._count = h.index)
                        }
                    } else
                        this._targetDic && this._targetDic[s] && (t.initValues[e] = this._targetDic[s][e]), i.sort(l._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, s)
                }
            }, e.resetNodes = function() {
                if (this._targetDic && this._animationData) {
                    var t, e, i = this._animationData.nodes,
                        n = 0,
                        s = i.length;
                    for (n = 0; n < s; n++)
                        if (e = (t = i[n]).initValues) {
                            var r, a = this._targetDic[t.target];
                            if (a)
                                for (r in e)
                                    a[r] = e[r]
                        }
                }
            }, e._calculateNodePropFrames = function(t, e, i, n) {
                var s = 0,
                    r = t.length - 1;
                for (e.length = t[r].index + 1, s = 0; s < r; s++)
                    this._dealKeyFrame(t[s]), this._calculateFrameValues(t[s], t[s + 1], e);
                0 == r && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), this._dealKeyFrame(t[s])
            }, e._dealKeyFrame = function(t) {
                t.label && "" != t.label && this.addLabel(t.label, t.index)
            }, e._calculateFrameValues = function(t, e, i) {
                var n, s = 0,
                    r = t.index,
                    a = e.index,
                    o = t.value,
                    h = e.value - t.value,
                    l = a - r,
                    u = this._usedFrames;
                if (a > this._count && (this._count = a), t.tween)
                    for (null == (n = Pe[t.tweenMethod]) && (n = Pe.linearNone), s = r; s < a; s++)
                        i[s] = n(s - r, o, h, l), u && (u[s] = !0);
                else
                    for (s = r; s < a; s++)
                        i[s] = o;
                u && (u[t.index] = !0, u[e.index] = !0), i[e.index] = e.value
            }, l._sortIndexFun = null, l
        }(tn),
        _n = function() {
            function a(t, e, i, n, s) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === n && (n = !0), void 0 === s && (s = !1), a.__super.call(this, i, n), this._glTextureType = 3553, this._width = t, this._height = e, this._canRead = s, this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._mipmap) {
                    this._mipmapCount = Math.max(Math.ceil(Math.log2(t)) + 1, Math.ceil(Math.log2(2)) + 1);
                    for (var r = 0; r < this._mipmapCount; r++)
                        this._setPixels(null, r, Math.max(t >> r, 1), Math.max(e >> r, 1));
                    this._setGPUMemory(t * e * 4 * (1 + 1 / 3))
                } else
                    this._mipmapCount = 1, this._setGPUMemory(t * e * 4)
            }
            m(a, "laya.resource.Texture2D", nn);
            var t = a.prototype;
            return t._getFormatByteCount = function() {
                switch (this._format) {
                    case 0:
                        return 3;
                    case 1:
                        return 4;
                    case 2:
                        return 1;
                    default:
                        throw "Texture2D: unknown format."
                }
            }, t._setPixels = function(t, e, i, n) {
                var s = se.instance,
                    r = this._glTextureType,
                    a = this._getGLFormat();
                pt.bindTexture(s, r, this._glTexture), 0 === this.format ? (s.pixelStorei(3317, 1), s.texImage2D(r, e, a, i, n, 0, a, 5121, t), s.pixelStorei(3317, 4)) : s.texImage2D(r, e, a, i, n, 0, a, 5121, t)
            }, t._calcualatesCompressedDataSize = function(t, e, i) {
                switch (t) {
                    case 3:
                    case 5:
                        return (e + 3 >> 2) * (i + 3 >> 2) * 8;
                    case 4:
                        return (e + 3 >> 2) * (i + 3 >> 2) * 16;
                    case 11:
                    case 12:
                        return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);
                    case 9:
                    case 10:
                        return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);
                    default:
                        return 0
                }
            }, t._pharseDDS = function(t) {
                var e = new Int32Array(t, 0, 31);
                if (542327876 != e[0])
                    throw "Invalid magic number in DDS header";
                if (!(4 & e[20]))
                    throw "Unsupported format, must contain a FourCC code";
                var i = e[21];
                switch (this._format) {
                    case 3:
                        if (827611204 !== i)
                            throw "the FourCC code is not same with texture format.";
                        break;
                    case 4:
                        if (894720068 !== i)
                            throw "the FourCC code is not same with texture format.";
                        break;
                    default:
                        throw "unknown texture format."
                }
                var n = 1;
                if (131072 & e[2]) {
                    if (n = Math.max(1, e[7]), !this._mipmap)
                        throw "the mipmap is not same with Texture2D."
                } else if (this._mipmap)
                    throw "the mipmap is not same with Texture2D.";
                var s = e[4],
                    r = e[3];
                this._width = s, this._height = r;
                var a = e[1] + 4;
                this._upLoadCompressedTexImage2D(t, s, r, n, a, 0)
            }, t._pharseKTX = function(t) {
                var e = new Uint8Array(t, 0, 12);
                if (171 != e[0] || 75 != e[1] || 84 != e[2] || 88 != e[3] || 32 != e[4] || 49 != e[5] || 49 != e[6] || 187 != e[7] || 13 != e[8] || 10 != e[9] || 26 != e[10] || 10 != e[11])
                    throw "Invalid fileIdentifier in KTX header";
                var i = new Int32Array(e.buffer, e.length, 13);
                switch (i[4]) {
                    case pt._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        this._format = 5;
                        break;
                    default:
                        throw "unknown texture format."
                }
                var n = i[11],
                    s = i[6],
                    r = i[7];
                this._width = s, this._height = r;
                var a = 64 + i[12];
                this._upLoadCompressedTexImage2D(t, s, r, n, a, 4)
            }, t._pharsePVR = function(t) {
                var e = new Int32Array(t, 0, 13);
                if (55727696 != e[0])
                    throw "Invalid magic number in PVR header";
                switch (e[2]) {
                    case 0:
                        this._format = 9;
                        break;
                    case 2:
                        this._format = 11;
                        break;
                    case 1:
                        this._format = 10;
                        break;
                    case 3:
                        this._format = 12;
                        break;
                    default:
                        throw "Texture2D:unknown PVR format."
                }
                var i = e[11],
                    n = e[7],
                    s = e[6];
                this._width = n, this._height = s;
                var r = e[12] + 52;
                this._upLoadCompressedTexImage2D(t, n, s, i, r, 0)
            }, t._upLoadCompressedTexImage2D = function(t, e, i, n, s, r) {
                var a = se.instance,
                    o = this._glTextureType;
                pt.bindTexture(a, o, this._glTexture);
                for (var h = this._getGLFormat(), l = s, u = 0; u < n; u++) {
                    l += r;
                    var c = this._calcualatesCompressedDataSize(this._format, e, i),
                        _ = new Uint8Array(t, l, c);
                    a.compressedTexImage2D(o, u, h, e, i, 0, _), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), l += c
                }
                var d = l;
                this._setGPUMemory(d), this._readyed = !0, this._activeResource()
            }, t.loadImageSource = function(t, e) {
                void 0 === e && (e = !1);
                var i = t.width,
                    n = t.height;
                this._width = i, this._height = n, this._isPot(i) && this._isPot(n) || (this._mipmap = !1), this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode);
                var s = se.instance;
                pt.bindTexture(s, this._glTextureType, this._glTexture);
                var r = this._getGLFormat();
                te.isConchApp ? (t instanceof laya.resource.HTMLCanvas || t.setPremultiplyAlpha(e), s.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t)) : (e && s.pixelStorei(37441, !0), s.texImage2D(this._glTextureType, 0, r, r, 5121, t), e && s.pixelStorei(37441, !1)), this._mipmap ? (s.generateMipmap(this._glTextureType), this._setGPUMemory(i * n * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * n * 4), this._canRead && (te.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, i, n)) : (re.canvas.size(i, n), re.canvas.clear(), re.context.drawImage(t, 0, 0, i, n), this._pixels = new Uint8Array(re.context.getImageData(0, 0, i, n).data.buffer))), this._readyed = !0, this._activeResource()
            }, t.setPixels = function(t, e) {
                if (void 0 === e && (e = 0), !t)
                    throw "Texture2D:pixels can't be null.";
                var i = Math.max(this._width >> e, 1),
                    n = Math.max(this._height >> e, 1),
                    s = i * n * this._getFormatByteCount();
                if (t.length < s)
                    throw "Texture2D:pixels length should at least " + s + ".";
                this._setPixels(t, e, i, n), this._canRead && (this._pixels = t), this._readyed = !0, this._activeResource()
            }, t.setSubPixels = function(t, e, i, n, s, r) {
                if (void 0 === r && (r = 0), !s)
                    throw "Texture2D:pixels can't be null.";
                var a = se.instance,
                    o = this._glTextureType;
                pt.bindTexture(a, o, this._glTexture);
                var h = this._getGLFormat();
                0 === this._format ? (a.pixelStorei(3317, 1), a.texSubImage2D(o, r, t, e, i, n, h, 5121, s), a.pixelStorei(3317, 4)) : a.texSubImage2D(o, r, t, e, i, n, h, 5121, s), this._readyed = !0, this._activeResource()
            }, t.setCompressData = function(t) {
                switch (this._format) {
                    case 3:
                    case 4:
                        this._pharseDDS(t);
                        break;
                    case 5:
                        this._pharseKTX(t);
                        break;
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        this._pharsePVR(t);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
            }, t._recoverResource = function() {}, t.getPixels = function() {
                if (this._canRead)
                    return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.")
            }, f(0, t, "mipmapCount", function() {
                return this._mipmapCount
            }), f(0, t, "defaulteTexture", function() {
                return laya.resource.Texture2D.grayTexture
            }), a.__init__ = function() {
                var t = new Uint8Array(3);
                t[0] = 128, t[1] = 128, t[2] = 128, (a.grayTexture = new a(1, 1, 0, !1, !1)).setPixels(t), a.grayTexture.lock = !0, t[0] = 255, t[1] = 255, t[2] = 255, (a.whiteTexture = new a(1, 1, 0, !1, !1)).setPixels(t), a.whiteTexture.lock = !0, t[0] = 0, t[1] = 0, t[2] = 0, (a.blackTexture = new a(1, 1, 0, !1, !1)).setPixels(t), a.blackTexture.lock = !0
            }, a._parse = function(t, e, i) {
                var n = i ? new a(i[0], i[1], i[2], i[3], i[4]) : new a(0, 0);
                switch (e && (n.wrapModeU = e.wrapModeU, n.wrapModeV = e.wrapModeV, n.filterMode = e.filterMode, n.anisoLevel = e.anisoLevel), n._format) {
                    case 0:
                    case 1:
                        n.loadImageSource(t);
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        n.setCompressData(t);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
                return n
            }, a.load = function(t, e) {
                y.loader.create(t, e, null, "TEXTURE2D")
            }, a.grayTexture = null, a.whiteTexture = null, a.blackTexture = null, a
        }(),
        dn = function() {
            function s(t, e, i, n) {
                void(this._mgrKey = 0) === i && (i = 0), void 0 === n && (n = 0), s.__super.call(this, i, !1), this._glTextureType = 3553, this._width = t, this._height = e, this._depthStencilFormat = n, this._create(t, e), this.lock = !0
            }
            m(s, "laya.resource.RenderTexture2D", nn);
            var t = s.prototype;
            return t.getIsReady = function() {
                return !0
            }, t._create = function(t, e) {
                var i = se.instance;
                this._frameBuffer = i.createFramebuffer(), pt.bindTexture(i, this._glTextureType, this._glTexture);
                var n = this._getGLFormat();
                if (i.texImage2D(this._glTextureType, 0, n, t, e, 0, n, 5121, null), this._setGPUMemory(t * e * 4), i.bindFramebuffer(36160, this._frameBuffer), i.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0), 3 !== this._depthStencilFormat)
                    switch (this._depthStencilBuffer = i.createRenderbuffer(), i.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
                        case 0:
                            i.renderbufferStorage(36161, 33189, t, e), i.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                            break;
                        case 1:
                            i.renderbufferStorage(36161, 36168, t, e), i.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                            break;
                        case 2:
                            i.renderbufferStorage(36161, 34041, t, e), i.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer)
                    }
                i.bindFramebuffer(36160, null), i.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource()
            }, t.generateMipmap = function() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, se.instance.generateMipmap(this._glTextureType), this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, this._setGPUMemory(this.width * this.height * 4))
            }, t.start = function() {
                var t = se.instance;
                se.instance.bindFramebuffer(36160, this._frameBuffer), this._lastRT = s._currentActive, (s._currentActive = this)._readyed = !0, t.viewport(0, 0, this._width, this._height), this._lastWidth = It.width, this._lastHeight = It.height, It.width = this._width, It.height = this._height, Hi.activeShader = null
            }, t.end = function() {
                se.instance.bindFramebuffer(36160, null), s._currentActive = null, this._readyed = !0
            }, t.restore = function() {
                var t = se.instance;
                this._lastRT != s._currentActive && (se.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null), s._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), It.width = this._lastWidth, It.height = this._lastHeight, Hi.activeShader = null
            }, t.clear = function(t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1);
                var s = se.instance;
                s.clearColor(t, e, i, n);
                var r = 16384;
                switch (this._depthStencilFormat) {
                    case 33189:
                        r |= 256;
                        break;
                    case 36168:
                        r |= 1024;
                        break;
                    case 34041:
                        r |= 256, r |= 1024
                }
                s.clear(r)
            }, t.getData = function(t, e, i, n) {
                if (te.isConchApp && 2 == conchConfig.threadMode)
                    throw "native 2 thread mode use getDataAsync";
                var s = se.instance;
                if (s.bindFramebuffer(36160, this._frameBuffer), !(36053 === s.checkFramebufferStatus(36160)))
                    return s.bindFramebuffer(36160, null), null;
                var r = new Uint8Array(this._width * this._height * 4),
                    a = this._getGLFormat();
                return s.readPixels(t, e, i, n, a, 5121, r), s.bindFramebuffer(36160, null), r
            }, t.getDataAsync = function(t, e, i, n, s) {
                var r = se.instance;
                r.bindFramebuffer(36160, this._frameBuffer), r.readPixelsAsync(t, e, i, n, 6408, 5121, function(t) {
                    s(new Uint8Array(t))
                }), r.bindFramebuffer(36160, null)
            }, t.recycle = function() {}, t._disposeResource = function() {
                if (this._frameBuffer) {
                    var t = se.instance;
                    t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, this._setGPUMemory(0)
                }
            }, f(0, t, "depthStencilFormat", function() {
                return this._depthStencilFormat
            }), f(0, t, "defaulteTexture", function() {
                return _n.grayTexture
            }), f(0, t, "sourceWidth", function() {
                return this._width
            }), f(0, t, "sourceHeight", function() {
                return this._height
            }), f(0, t, "offsetX", function() {
                return 0
            }), f(0, t, "offsetY", function() {
                return 0
            }), f(1, s, "currentActive", function() {
                return s._currentActive
            }, laya.resource.BaseTexture._$SET_currentActive), s.pushRT = function() {
                s.rtStack.push({
                    rt: s._currentActive,
                    w: It.width,
                    h: It.height
                })
            }, s.popRT = function() {
                var t = se.instance,
                    e = s.rtStack.pop();
                e && (s._currentActive != e.rt && (se.instance.bindFramebuffer(36160, e.rt ? e.rt._frameBuffer : null), s._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), It.width = e.w, It.height = e.h)
            }, s._currentActive = null, s.rtStack = [], a(s, ["defuv", function() {
                return this.defuv = [0, 0, 1, 0, 1, 1, 0, 1]
            }, "flipyuv", function() {
                return this.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0]
            }]), s
        }(),
        fn = function(e) {
            var S;

            function M() {
                this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, M.__super.call(this)
            }
            m(M, "laya.utils.GraphicAnimation", e);
            var t = M.prototype;
            return t._parseNodeList = function(t) {
                this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, t.compId && this._nodeList.push(t.compId);
                var e = t.child;
                if (e) {
                    var i = 0,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        this._parseNodeList(e[i])
                }
            }, t._calGraphicData = function(t) {
                var e;
                if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic)
                    for (e in this._nodeIDAniDic)
                        this._nodeIDAniDic[e] = null
            }, t._createGraphicData = function() {
                var t, e = [],
                    i = 0,
                    n = this.count,
                    s = this._usedFrames;
                for (s || (s = []), i = 0; i < n; i++)
                    !s[i] && t || (t = this._createFrameGraphic(i)), e.push(t);
                this._gList = e
            }, t._createFrameGraphic = function(t) {
                var e = new Se;
                return M._rootMatrix || (M._rootMatrix = new vt), this._updateNodeGraphic(this._rootNode, t, M._rootMatrix, e), e
            }, t._updateNodeGraphic = function(t, e, i, n, s) {
                var r, a, o;
                void 0 === s && (s = 1), (r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (r.resultTransform = new vt), a = r.resultTransform, vt.mul(r.transform, i, a);
                var h = r.alpha * s;
                if (!(h < .01)) {
                    r.skin && (o = this._getTextureByUrl(r.skin)) && (a._checkTransform() ? (n.drawTexture(o, 0, 0, r.width, r.height, a, h), r.resultTransform = null) : n.drawTexture(o, a.tx, a.ty, r.width, r.height, null, h));
                    var l = t.child;
                    if (l) {
                        var u, c = 0;
                        for (u = l.length, c = 0; c < u; c++)
                            this._updateNodeGraphic(l[c], e, a, n, h)
                    }
                }
            }, t._updateNoChilds = function(t, e) {
                if (t.skin) {
                    var i = this._getTextureByUrl(t.skin);
                    if (i) {
                        var n = t.transform;
                        n._checkTransform();
                        !n._bTransform ? e.drawTexture(i, n.tx, n.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, n.clone(), t.alpha)
                    }
                }
            }, t._updateNodeGraphic2 = function(t, e, i) {
                var n;
                if (n = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), t.child) {
                    var s = n.transform;
                    s._checkTransform();
                    var r, a;
                    a = (r = !s._bTransform) && (0 != s.tx || 0 != s.ty);
                    var o;
                    (o = s._bTransform || 1 != n.alpha) && i.save(), 1 != n.alpha && i.alpha(n.alpha), r ? a && i.translate(s.tx, s.ty) : i.transform(s.clone());
                    var h, l = t.child;
                    if (n.skin && (h = this._getTextureByUrl(n.skin)) && i.drawImage(h, 0, 0, n.width, n.height), l) {
                        var u, c = 0;
                        for (u = l.length, c = 0; c < u; c++)
                            this._updateNodeGraphic2(l[c], e, i)
                    }
                    o ? i.restore() : r ? a && i.translate(-s.tx, -s.ty) : i.transform(s.clone().invert())
                } else
                    this._updateNoChilds(n, i)
            }, t._calculateKeyFrames = function(t) {
                e.prototype._calculateKeyFrames.call(this, t), this._nodeIDAniDic[t.target] = t
            }, t.getNodeDataByID = function(t) {
                return this._nodeIDAniDic[t]
            }, t._getParams = function(t, e, i, n) {
                var s = M._temParam;
                s.length = e.length;
                var r = 0,
                    a = e.length;
                for (r = 0; r < a; r++)
                    s[r] = this._getObjVar(t, e[r][0], i, e[r][1], n);
                return s
            }, t._getObjVar = function(t, e, i, n, s) {
                if (t.hasOwnProperty(e)) {
                    var r = t[e];
                    return i >= r.length && (i = r.length - 1), t[e][i]
                }
                return s.hasOwnProperty(e) ? s[e] : n
            }, t._getNodeGraphicData = function(t, e, i) {
                i || (i = new S), i.transform ? i.transform.identity() : i.transform = new vt;
                var n = this.getNodeDataByID(t);
                if (!n)
                    return i;
                var s, r = n.frames,
                    a = this._getParams(r, M._drawTextureCmd, e, this._nodeDefaultProps[t]),
                    o = a[0],
                    h = NaN,
                    l = NaN,
                    u = a[5],
                    c = a[6],
                    _ = a[13],
                    d = a[14],
                    f = a[7],
                    p = a[8],
                    m = a[9],
                    g = a[11],
                    v = a[12];
                h = a[3], l = a[4], 0 != h && 0 != l || (o = null), -1 == h && (h = 0), -1 == l && (l = 0), i.skin = o, i.width = h, i.height = l, o && ((s = this._getTextureByUrl(o)) ? (h || (h = s.sourceWidth), l || (l = s.sourceHeight)) : console.warn("lost skin:", o, ",you may load pics first")), i.alpha = a[10];
                var y = i.transform;
                0 != _ && (u = _ * h), 0 != d && (c = d * l), 0 == u && 0 == c || y.translate(-u, -c);
                var x = null;
                if (m || 1 !== f || 1 !== p || g || v) {
                    (x = M._tempMt).identity(), x._bTransform = !0;
                    var T = .0174532922222222 * (m - g),
                        b = .0174532922222222 * (m + v),
                        w = Math.cos(b),
                        C = Math.sin(b),
                        A = Math.sin(T),
                        E = Math.cos(T);
                    x.a = f * w, x.b = f * C, x.c = -p * A, x.d = p * E, x.tx = x.ty = 0
                }
                return x && (y = vt.mul(y, x, y)), y.translate(a[1], a[2]), i
            }, t._getTextureByUrl = function(t) {
                return Ai.getRes(t)
            }, t.setAniData = function(t, e) {
                if (t.animations) {
                    this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t);
                    var i, n = {},
                        s = [],
                        r = t.animations,
                        a = 0,
                        o = r.length;
                    for (a = 0; a < o; a++)
                        if (i = r[a], this._labels = null, (!e || e == i.name) && i) {
                            try {
                                this._calGraphicData(i)
                            } catch (t) {
                                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = []
                            }
                            var h = {};
                            h.interval = 1e3 / i.frameRate, h.frames = this._gList, h.labels = this._labels, h.name = i.name, s.push(h), n[i.name] = h
                        }
                    this.animationList = s, this.animationDic = n
                }
                M._temParam.length = 0
            }, t.parseByData = function(t) {
                var e, i;
                e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e), this._labels = null;
                try {
                    this._calGraphicData(i)
                } catch (t) {
                    console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = []
                }
                var n = t;
                return n.interval = 1e3 / i.frameRate, n.frames = this._gList, n.labels = this._labels, n.name = i.name, n
            }, t.setUpAniData = function(t) {
                if (t.animations) {
                    var e, i = {},
                        n = [],
                        s = t.animations,
                        r = 0,
                        a = s.length;
                    for (r = 0; r < a; r++)
                        if (e = s[r]) {
                            var o = {};
                            o.name = e.name, o.aniO = e, o.nodeRoot = t, n.push(o), i[e.name] = o
                        }
                    this.animationList = n, this.animationDic = i
                }
            }, t._clear = function() {
                this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null
            }, M.parseAnimationByData = function(t) {
                var e;
                return M._I || (M._I = new M), e = M._I.parseByData(t), M._I._clear(), e
            }, M.parseAnimationData = function(t) {
                var e;
                return M._I || (M._I = new M), M._I.setUpAniData(t), (e = {}).animationList = M._I.animationList, e.animationDic = M._I.animationDic, M._I._clear(), e
            }, M._temParam = [], M._I = null, M._rootMatrix = null, a(M, ["_drawTextureCmd", function() {
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
                ]
            }, "_tempMt", function() {
                return this._tempMt = new vt
            }]), M.__init$ = function() {
                function t() {
                    this.skin = null, this.transform = null, this.resultTransform = null, this.width = NaN, this.height = NaN, this.alpha = 1
                }
                m(t, ""), S = t
            }, M
        }(cn);
    ! function(r) {
        function t() {
            this._target = null, this._playEvent = null, this._initData = {}, this._aniKeys = null, this._effectClass = null, t.__super.call(this)
        }
        m(t, "laya.display.EffectAnimation", r);
        var e = t.prototype;
        e._onOtherBegin = function(t) {
            t !== this && this.stop()
        }, e._addEvent = function() {
            this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction))
        }, e._onPlayAction = function() {
            this.play(0, !1)
        }, e.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._target && (this._target.event("effectbegin", [this]), this._recordInitData(), laya.display.AnimationBase.prototype.play.call(this, t, e, i))
        }, e._recordInitData = function() {
            if (this._aniKeys) {
                var t, e, i = 0;
                for (t = this._aniKeys.length, i = 0; i < t; i++)
                    e = this._aniKeys[i], this._initData[e] = this._target[e]
            }
        }, e._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes,
                    i = 0,
                    n = e.length;
                for (n = 1 < n ? 1 : n, i = 0; i < n; i++)
                    this._displayNodeToFrame(e[i], t)
            }
        }, e._displayNodeToFrame = function(t, e, i) {
            if (this._target) {
                var n, s, r, a, o, h, l, u = this._target,
                    c = t.frames,
                    _ = t.keys,
                    d = 0,
                    f = _.length,
                    p = t.secondFrames,
                    m = 0;
                for (d = 0; d < f; d++)
                    s = c[n = _[d]], r = -1 == (m = p[n]) ? this._initData[n] : e < m ? (h = (o = t.keyframes[n])[0]).tween ? (null == (a = Pe[h.tweenMethod]) && (a = Pe.linearNone), l = o[1], a(e, this._initData[n], l.value - this._initData[n], l.index)) : this._initData[n] : s.length > e ? s[e] : s[s.length - 1], u[n] = r
            }
        }, e._calculateKeyFrames = function(t) {
            r.prototype._calculateKeyFrames.call(this, t);
            var e, i, n = t.keyframes,
                s = (t.target, {});
            for (e in t.secondFrames = s, n)
                (i = n[e]).length <= 1 ? s[e] = -1 : s[e] = i[1].index
        }, f(0, e, "target", function() {
            return this._target
        }, function(t) {
            this._target && this._target.off("effectbegin", this, this._onOtherBegin), this._target = t, this._target && this._target.on("effectbegin", this, this._onOtherBegin), this._addEvent()
        }), f(0, e, "playEvent", null, function(t) {
            (this._playEvent = t) && this._addEvent()
        }), f(0, e, "effectData", null, function(t) {
            if (t) {
                var e = t.animations;
                if (e && e[0]) {
                    var i = e[0];
                    this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys)
                }
            }
        }), f(0, e, "effectClass", null, function(t) {
            if (this._effectClass = ee.getClass(t), this._effectClass) {
                var e = this._effectClass.uiView;
                if (e) {
                    var i = e.animations;
                    if (i && i[0]) {
                        var n = i[0];
                        this._setUp({}, n), n.nodes && n.nodes[0] && (this._aniKeys = n.nodes[0].keys)
                    }
                }
            }
        }), t.EFFECT_BEGIN = "effectbegin"
    }(cn);
    y.__init([T, Ct, Pi, P, fn, Bt, te, at, ct, Ee, Ht, fi, c, xi])
}(window, document, Laya),
function(t, e, i) {
    i.un, i.uns, i.static;
    var n = i.class;
    i.getset, i.__newvec;

    function s() {}
    new(n(s, "LayaMain"), s)
}(window, document, Laya);