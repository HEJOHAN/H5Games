"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _get(e, t, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var n = _superPropBase(e, t);
        if (n) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            return r.get ? r.get.call(i) : r.value
        }
    })(e, t, i || e)
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
    return e
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
window.Laya = function(e) {
    var t = function Config() {
        _classCallCheck(this, Config)
    };
    t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, t.premultipliedAlpha = !0, t.isStencil = !0, t.preserveDrawingBuffer = !1, t.webGL2D_MeshAllocMaxMem = !0, t.is2DPixelArtGame = !1, t.useWebGL2 = !0, t.allowGPUInstanceDynamicBatch = !0, t.useRetinalCanvas = !1, window.Config = t;
    var i = function() {
        function ILaya() {
            _classCallCheck(this, ILaya)
        }
        return _createClass(ILaya, null, [{
            key: "regClass",
            value: function(e) {
                ILaya.__classMap[e.name] = e
            }
        }]), ILaya
    }();
    i.Laya = null, i.Timer = null, i.WorkerLoader = null, i.Dragging = null, i.GraphicsBounds = null, i.Sprite = null, i.TextRender = null, i.TextAtlas = null, i.timer = null, i.systemTimer = null, i.startTimer = null, i.updateTimer = null, i.lateTimer = null, i.physicsTimer = null, i.stage = null, i.Loader = null, i.loader = null, i.TTFLoader = null, i.SoundManager = null, i.WebAudioSound = null, i.AudioSound = null, i.ShaderCompile = null, i.ClassUtils = null, i.SceneUtils = null, i.Context = null, i.Render = null, i.MouseManager = null, i.Text = null, i.Browser = null, i.WebGL = null, i.Pool = null, i.Utils = null, i.Graphics = null, i.Submit = null, i.Stage = null, i.Resource = null, i.__classMap = {};
    var n = function() {
        function Pool() {
            _classCallCheck(this, Pool)
        }
        return _createClass(Pool, null, [{
            key: "getPoolBySign",
            value: function(e) {
                return Pool._poolDic[e] || (Pool._poolDic[e] = [])
            }
        }, {
            key: "clearBySign",
            value: function(e) {
                Pool._poolDic[e] && (Pool._poolDic[e].length = 0)
            }
        }, {
            key: "recover",
            value: function(e, t) {
                t[Pool.POOLSIGN] || (t[Pool.POOLSIGN] = !0, Pool.getPoolBySign(e).push(t))
            }
        }, {
            key: "recoverByClass",
            value: function(e) {
                if (e) {
                    var t = e.__className || e.constructor._$gid;
                    t && Pool.recover(t, e)
                }
            }
        }, {
            key: "_getClassSign",
            value: function(e) {
                var t = e.__className || e._$gid;
                return t || (e._$gid = t = Pool._CLSID + "", Pool._CLSID++), t
            }
        }, {
            key: "createByClass",
            value: function(e) {
                return Pool.getItemByClass(Pool._getClassSign(e), e)
            }
        }, {
            key: "getItemByClass",
            value: function(e, t) {
                if (!Pool._poolDic[e])
                    return new t;
                var i = Pool.getPoolBySign(e);
                if (i.length) {
                    var n = i.pop();
                    n[Pool.POOLSIGN] = !1
                } else
                    n = new t;
                return n
            }
        }, {
            key: "getItemByCreateFun",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = Pool.getPoolBySign(e),
                    r = n.length ? n.pop() : t.call(i);
                return r[Pool.POOLSIGN] = !1, r
            }
        }, {
            key: "getItem",
            value: function(e) {
                var t = Pool.getPoolBySign(e),
                    i = t.length ? t.pop() : null;
                return i && (i[Pool.POOLSIGN] = !1), i
            }
        }]), Pool
    }();
    n._CLSID = 0, n.POOLSIGN = "__InPool", n._poolDic = {};
    var r = function() {
        function AlphaCmd() {
            _classCallCheck(this, AlphaCmd)
        }
        return _createClass(AlphaCmd, [{
            key: "recover",
            value: function() {
                n.recover("AlphaCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.alpha(this.alpha)
            }
        }, {
            key: "cmdID",
            get: function() {
                return AlphaCmd.ID
            }
        }], [{
            key: "create",
            value: function(e) {
                var t = n.getItemByClass("AlphaCmd", AlphaCmd);
                return t.alpha = e, t
            }
        }]), AlphaCmd
    }();
    r.ID = "Alpha";
    var a = function() {
        function DrawCircleCmd() {
            _classCallCheck(this, DrawCircleCmd)
        }
        return _createClass(DrawCircleCmd, [{
            key: "recover",
            value: function() {
                this.fillColor = null, this.lineColor = null, n.recover("DrawCircleCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._drawCircle(this.x + t, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawCircleCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o) {
                var l = n.getItemByClass("DrawCircleCmd", DrawCircleCmd);
                return l.x = e, l.y = t, l.radius = i, l.fillColor = r, l.lineColor = a, l.lineWidth = s, l.vid = o, l
            }
        }]), DrawCircleCmd
    }();
    a.ID = "DrawCircle";
    var s = function() {
        function DrawCurvesCmd() {
            _classCallCheck(this, DrawCurvesCmd)
        }
        return _createClass(DrawCurvesCmd, [{
            key: "recover",
            value: function() {
                this.points = null, this.lineColor = null, n.recover("DrawCurvesCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.points && e.drawCurves(this.x + t, this.y + i, this.points, this.lineColor, this.lineWidth)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawCurvesCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a) {
                var s = n.getItemByClass("DrawCurvesCmd", DrawCurvesCmd);
                return s.x = e, s.y = t, s.points = i, s.lineColor = r, s.lineWidth = a, s
            }
        }]), DrawCurvesCmd
    }();
    s.ID = "DrawCurves";
    var o = function() {
        function DrawImageCmd() {
            _classCallCheck(this, DrawImageCmd)
        }
        return _createClass(DrawImageCmd, [{
            key: "recover",
            value: function() {
                this.texture && this.texture._removeReference(), this.texture = null, n.recover("DrawImageCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.texture && e.drawTexture(this.texture, this.x + t, this.y + i, this.width, this.height)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawImageCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a) {
                var s = n.getItemByClass("DrawImageCmd", DrawImageCmd);
                return s.texture = e, e._addReference(), s.x = t, s.y = i, s.width = r, s.height = a, s
            }
        }]), DrawImageCmd
    }();
    o.ID = "DrawImage";
    var l = function() {
        function DrawLineCmd() {
            _classCallCheck(this, DrawLineCmd)
        }
        return _createClass(DrawLineCmd, [{
            key: "recover",
            value: function() {
                n.recover("DrawLineCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._drawLine(t, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawLineCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o) {
                var l = n.getItemByClass("DrawLineCmd", DrawLineCmd);
                return l.fromX = e, l.fromY = t, l.toX = i, l.toY = r, l.lineColor = a, l.lineWidth = s, l.vid = o, l
            }
        }]), DrawLineCmd
    }();
    l.ID = "DrawLine";
    var h = function() {
        function DrawLinesCmd() {
            _classCallCheck(this, DrawLinesCmd)
        }
        return _createClass(DrawLinesCmd, [{
            key: "recover",
            value: function() {
                this.points = null, this.lineColor = null, n.recover("DrawLinesCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.points && e._drawLines(this.x + t, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawLinesCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s) {
                var o = n.getItemByClass("DrawLinesCmd", DrawLinesCmd);
                return o.x = e, o.y = t, o.points = i, o.lineColor = r, o.lineWidth = a, o.vid = s, o
            }
        }]), DrawLinesCmd
    }();
    h.ID = "DrawLines";
    var u = function() {
        function DrawPathCmd() {
            _classCallCheck(this, DrawPathCmd)
        }
        return _createClass(DrawPathCmd, [{
            key: "recover",
            value: function() {
                this.paths = null, this.brush = null, this.pen = null, n.recover("DrawPathCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.paths && e._drawPath(this.x + t, this.y + i, this.paths, this.brush, this.pen)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawPathCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a) {
                var s = n.getItemByClass("DrawPathCmd", DrawPathCmd);
                return s.x = e, s.y = t, s.paths = i, s.brush = r, s.pen = a, s
            }
        }]), DrawPathCmd
    }();
    u.ID = "DrawPath";
    var c = function() {
        function DrawPieCmd() {
            _classCallCheck(this, DrawPieCmd)
        }
        return _createClass(DrawPieCmd, [{
            key: "recover",
            value: function() {
                this.fillColor = null, this.lineColor = null, n.recover("DrawPieCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._drawPie(this.x + t, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawPieCmd.ID
            }
        }, {
            key: "startAngle",
            get: function() {
                return 180 * this._startAngle / Math.PI
            },
            set: function(e) {
                this._startAngle = e * Math.PI / 180
            }
        }, {
            key: "endAngle",
            get: function() {
                return 180 * this._endAngle / Math.PI
            },
            set: function(e) {
                this._endAngle = e * Math.PI / 180
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l, h) {
                var u = n.getItemByClass("DrawPieCmd", DrawPieCmd);
                return u.x = e, u.y = t, u.radius = i, u._startAngle = r, u._endAngle = a, u.fillColor = s, u.lineColor = o, u.lineWidth = l, u.vid = h, u
            }
        }]), DrawPieCmd
    }();
    c.ID = "DrawPie";
    var _ = function() {
        function DrawPolyCmd() {
            _classCallCheck(this, DrawPolyCmd)
        }
        return _createClass(DrawPolyCmd, [{
            key: "recover",
            value: function() {
                this.points = null, this.fillColor = null, this.lineColor = null, n.recover("DrawPolyCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.points && e._drawPoly(this.x + t, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawPolyCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l) {
                var h = n.getItemByClass("DrawPolyCmd", DrawPolyCmd);
                return h.x = e, h.y = t, h.points = i, h.fillColor = r, h.lineColor = a, h.lineWidth = s, h.isConvexPolygon = o, h.vid = l, h
            }
        }]), DrawPolyCmd
    }();
    _.ID = "DrawPoly";
    var d = function() {
        function DrawRectCmd() {
            _classCallCheck(this, DrawRectCmd)
        }
        return _createClass(DrawRectCmd, [{
            key: "recover",
            value: function() {
                this.fillColor = null, this.lineColor = null, n.recover("DrawRectCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.drawRect(this.x + t, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawRectCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o) {
                var l = n.getItemByClass("DrawRectCmd", DrawRectCmd);
                return l.x = e, l.y = t, l.width = i, l.height = r, l.fillColor = a, l.lineColor = s, l.lineWidth = o, l
            }
        }]), DrawRectCmd
    }();
    d.ID = "DrawRect";
    var f = function() {
        function Matrix() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
            if (_classCallCheck(this, Matrix), this._bTransform = !1, null != Matrix._createFun)
                return Matrix._createFun(e, t, i, n, r, a, s);
            this.a = e, this.b = t, this.c = i, this.d = n, this.tx = r, this.ty = a, this._checkTransform()
        }
        return _createClass(Matrix, [{
            key: "identity",
            value: function() {
                return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, this
            }
        }, {
            key: "_checkTransform",
            value: function() {
                return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d
            }
        }, {
            key: "setTranslate",
            value: function(e, t) {
                return this.tx = e, this.ty = t, this
            }
        }, {
            key: "translate",
            value: function(e, t) {
                return this.tx += e, this.ty += t, this
            }
        }, {
            key: "scale",
            value: function(e, t) {
                return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this._bTransform = !0, this
            }
        }, {
            key: "rotate",
            value: function(e) {
                var t = Math.cos(e),
                    i = Math.sin(e),
                    n = this.a,
                    r = this.c,
                    a = this.tx;
                return this.a = n * t - this.b * i, this.b = n * i + this.b * t, this.c = r * t - this.d * i, this.d = r * i + this.d * t, this.tx = a * t - this.ty * i, this.ty = a * i + this.ty * t, this._bTransform = !0, this
            }
        }, {
            key: "skew",
            value: function(e, t) {
                var i = Math.tan(e),
                    n = Math.tan(t),
                    r = this.a,
                    a = this.b;
                return this.a += n * this.c, this.b += n * this.d, this.c += i * r, this.d += i * a, this
            }
        }, {
            key: "invertTransformPoint",
            value: function(e) {
                var t = this.a,
                    i = this.b,
                    n = this.c,
                    r = this.d,
                    a = this.tx,
                    s = t * r - i * n,
                    o = r / s,
                    l = -i / s,
                    h = -n / s,
                    u = t / s,
                    c = (n * this.ty - r * a) / s,
                    _ = -(t * this.ty - i * a) / s;
                return e.setTo(o * e.x + h * e.y + c, l * e.x + u * e.y + _)
            }
        }, {
            key: "transformPoint",
            value: function(e) {
                return e.setTo(this.a * e.x + this.c * e.y + this.tx, this.b * e.x + this.d * e.y + this.ty)
            }
        }, {
            key: "transformPointN",
            value: function(e) {
                return e.setTo(this.a * e.x + this.c * e.y, this.b * e.x + this.d * e.y)
            }
        }, {
            key: "getScaleX",
            value: function() {
                return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b)
            }
        }, {
            key: "getScaleY",
            value: function() {
                return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d)
            }
        }, {
            key: "invert",
            value: function() {
                var e = this.a,
                    t = this.b,
                    i = this.c,
                    n = this.d,
                    r = this.tx,
                    a = e * n - t * i;
                return this.a = n / a, this.b = -t / a, this.c = -i / a, this.d = e / a, this.tx = (i * this.ty - n * r) / a, this.ty = -(e * this.ty - t * r) / a, this
            }
        }, {
            key: "setTo",
            value: function(e, t, i, n, r, a) {
                return this.a = e, this.b = t, this.c = i, this.d = n, this.tx = r, this.ty = a, this
            }
        }, {
            key: "concat",
            value: function(e) {
                var t = this.a,
                    i = this.c,
                    n = this.tx;
                return this.a = t * e.a + this.b * e.c, this.b = t * e.b + this.b * e.d, this.c = i * e.a + this.d * e.c, this.d = i * e.b + this.d * e.d, this.tx = n * e.a + this.ty * e.c + e.tx, this.ty = n * e.b + this.ty * e.d + e.ty, this
            }
        }, {
            key: "scaleEx",
            value: function(e, t) {
                var i = this.a,
                    n = this.b,
                    r = this.c,
                    a = this.d;
                0 !== n || 0 !== r ? (this.a = e * i, this.b = e * n, this.c = t * r, this.d = t * a) : (this.a = e * i, this.b = 0 * a, this.c = 0 * i, this.d = t * a), this._bTransform = !0
            }
        }, {
            key: "rotateEx",
            value: function(e) {
                var t = Math.cos(e),
                    i = Math.sin(e),
                    n = this.a,
                    r = this.b,
                    a = this.c,
                    s = this.d;
                0 !== r || 0 !== a ? (this.a = t * n + i * a, this.b = t * r + i * s, this.c = -i * n + t * a, this.d = -i * r + t * s) : (this.a = t * n, this.b = i * s, this.c = -i * n, this.d = t * s), this._bTransform = !0
            }
        }, {
            key: "clone",
            value: function() {
                var e = Matrix.create();
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e._bTransform = this._bTransform, e
            }
        }, {
            key: "copyTo",
            value: function(e) {
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e._bTransform = this._bTransform, e
            }
        }, {
            key: "toString",
            value: function() {
                return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty
            }
        }, {
            key: "destroy",
            value: function() {
                this.recover()
            }
        }, {
            key: "recover",
            value: function() {
                n.recover("Matrix", this.identity())
            }
        }], [{
            key: "mul",
            value: function(e, t, i) {
                var n = e.a,
                    r = e.b,
                    a = e.c,
                    s = e.d,
                    o = e.tx,
                    l = e.ty,
                    h = t.a,
                    u = t.b,
                    c = t.c,
                    _ = t.d,
                    d = t.tx,
                    f = t.ty;
                return 0 !== u || 0 !== c ? (i.a = n * h + r * c, i.b = n * u + r * _, i.c = a * h + s * c, i.d = a * u + s * _, i.tx = h * o + c * l + d, i.ty = u * o + _ * l + f) : (i.a = n * h, i.b = r * _, i.c = a * h, i.d = s * _, i.tx = h * o + d, i.ty = _ * l + f), i
            }
        }, {
            key: "mul16",
            value: function(e, t, i) {
                var n = e.a,
                    r = e.b,
                    a = e.c,
                    s = e.d,
                    o = e.tx,
                    l = e.ty,
                    h = t.a,
                    u = t.b,
                    c = t.c,
                    _ = t.d,
                    d = t.tx,
                    f = t.ty;
                return 0 !== u || 0 !== c ? (i[0] = n * h + r * c, i[1] = n * u + r * _, i[4] = a * h + s * c, i[5] = a * u + s * _, i[12] = h * o + c * l + d, i[13] = u * o + _ * l + f) : (i[0] = n * h, i[1] = r * _, i[4] = a * h, i[5] = s * _, i[12] = h * o + d, i[13] = _ * l + f), i
            }
        }, {
            key: "create",
            value: function() {
                return n.getItemByClass("Matrix", Matrix)
            }
        }]), Matrix
    }();
    f.EMPTY = new f, f.TEMP = new f, f._createFun = null;
    var v = function() {
        function Point() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            _classCallCheck(this, Point), this.x = e, this.y = t
        }
        return _createClass(Point, [{
            key: "setTo",
            value: function(e, t) {
                return this.x = e, this.y = t, this
            }
        }, {
            key: "reset",
            value: function() {
                return this.x = this.y = 0, this
            }
        }, {
            key: "recover",
            value: function() {
                n.recover("Point", this.reset())
            }
        }, {
            key: "distance",
            value: function(e, t) {
                return Math.sqrt((this.x - e) * (this.x - e) + (this.y - t) * (this.y - t))
            }
        }, {
            key: "toString",
            value: function() {
                return this.x + "," + this.y
            }
        }, {
            key: "normalize",
            value: function() {
                var e = Math.sqrt(this.x * this.x + this.y * this.y);
                if (e > 0) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t
                }
            }
        }, {
            key: "copy",
            value: function(e) {
                return this.setTo(e.x, e.y)
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("Point", Point)
            }
        }]), Point
    }();
    v.TEMP = new v, v.EMPTY = new v;
    var p = function() {
        function Rectangle() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            _classCallCheck(this, Rectangle), this.x = e, this.y = t, this.width = i, this.height = n
        }
        return _createClass(Rectangle, [{
            key: "setTo",
            value: function(e, t, i, n) {
                return this.x = e, this.y = t, this.width = i, this.height = n, this
            }
        }, {
            key: "reset",
            value: function() {
                return this.x = this.y = this.width = this.height = 0, this
            }
        }, {
            key: "recover",
            value: function() {
                this != Rectangle.TEMP && this != Rectangle.EMPTY ? n.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this)
            }
        }, {
            key: "copyFrom",
            value: function(e) {
                return this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, this
            }
        }, {
            key: "contains",
            value: function(e, t) {
                return !(this.width <= 0 || this.height <= 0) && (e >= this.x && e < this.right && t >= this.y && t < this.bottom)
            }
        }, {
            key: "intersects",
            value: function(e) {
                return !(e.x > this.x + this.width || e.x + e.width < this.x || e.y > this.y + this.height || e.y + e.height < this.y)
            }
        }, {
            key: "intersection",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return this.intersects(e) ? (t || (t = new Rectangle), t.x = Math.max(this.x, e.x), t.y = Math.max(this.y, e.y), t.width = Math.min(this.right, e.right) - t.x, t.height = Math.min(this.bottom, e.bottom) - t.y, t) : null
            }
        }, {
            key: "union",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return t || (t = new Rectangle), this.clone(t), e.width <= 0 || e.height <= 0 ? t : (t.addPoint(e.x, e.y), t.addPoint(e.right, e.bottom), this)
            }
        }, {
            key: "clone",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e || (e = new Rectangle), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e
            }
        }, {
            key: "toString",
            value: function() {
                return this.x + "," + this.y + "," + this.width + "," + this.height
            }
        }, {
            key: "equals",
            value: function(e) {
                return !(!e || e.x !== this.x || e.y !== this.y || e.width !== this.width || e.height !== this.height)
            }
        }, {
            key: "addPoint",
            value: function(e, t) {
                return this.x > e && (this.width += this.x - e, this.x = e), this.y > t && (this.height += this.y - t, this.y = t), this.width < e - this.x && (this.width = e - this.x), this.height < t - this.y && (this.height = t - this.y), this
            }
        }, {
            key: "_getBoundPoints",
            value: function() {
                var e = Rectangle._temB;
                return e.length = 0, 0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), e)
            }
        }, {
            key: "isEmpty",
            value: function() {
                return this.width <= 0 || this.height <= 0
            }
        }, {
            key: "right",
            get: function() {
                return this.x + this.width
            }
        }, {
            key: "bottom",
            get: function() {
                return this.y + this.height
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("Rectangle", Rectangle)
            }
        }, {
            key: "_getBoundPointS",
            value: function(e, t, i, n) {
                var r = Rectangle._temA;
                return r.length = 0, 0 == i || 0 == n ? r : (r.push(e, t, e + i, t, e, t + n, e + i, t + n), r)
            }
        }, {
            key: "_getWrapRec",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!e || e.length < 1)
                    return t ? t.setTo(0, 0, 0, 0) : Rectangle.TEMP.setTo(0, 0, 0, 0);
                t = t || Rectangle.create();
                var i, n, r, a, s, o = e.length,
                    l = v.TEMP;
                for (r = s = -(n = a = 99999), i = 0; i < o; i += 2)
                    l.x = e[i], l.y = e[i + 1], n = n < l.x ? n : l.x, a = a < l.y ? a : l.y, r = r > l.x ? r : l.x, s = s > l.y ? s : l.y;
                return t.setTo(n, a, r - n, s - a)
            }
        }]), Rectangle
    }();
    p.EMPTY = new p, p.TEMP = new p, p._temB = [], p._temA = [];
    var g = function LayaGL() {
        _classCallCheck(this, LayaGL)
    };
    g.ARRAY_BUFFER_TYPE_DATA = 0, g.ARRAY_BUFFER_TYPE_CMD = 1, g.ARRAY_BUFFER_REF_REFERENCE = 0, g.ARRAY_BUFFER_REF_COPY = 1, g.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, g.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1;
    var y = function() {
        function WebGLContext() {
            _classCallCheck(this, WebGLContext)
        }
        return _createClass(WebGLContext, null, [{
            key: "__init__",
            value: function() {
                var e = g.instance;
                WebGLContext._depthFunc = e.LESS, WebGLContext._blendEquation = e.FUNC_ADD, WebGLContext._blendEquationRGB = e.FUNC_ADD, WebGLContext._blendEquationAlpha = e.FUNC_ADD, WebGLContext._sFactor = e.ONE, WebGLContext._dFactor = e.ZERO, WebGLContext._sFactorAlpha = e.ONE, WebGLContext._dFactorAlpha = e.ZERO, WebGLContext._activedTextureID = e.TEXTURE0, WebGLContext._glTextureIDs = [e.TEXTURE0, e.TEXTURE1, e.TEXTURE2, e.TEXTURE3, e.TEXTURE4, e.TEXTURE5, e.TEXTURE6, e.TEXTURE7]
            }
        }, {
            key: "useProgram",
            value: function(e, t) {
                return WebGLContext._useProgram !== t && (e.useProgram(t), WebGLContext._useProgram = t, !0)
            }
        }, {
            key: "setDepthTest",
            value: function(e, t) {
                t !== WebGLContext._depthTest && (WebGLContext._depthTest = t, t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST))
            }
        }, {
            key: "setDepthMask",
            value: function(e, t) {
                t !== WebGLContext._depthMask && (WebGLContext._depthMask = t, e.depthMask(t))
            }
        }, {
            key: "setDepthFunc",
            value: function(e, t) {
                t !== WebGLContext._depthFunc && (WebGLContext._depthFunc = t, e.depthFunc(t))
            }
        }, {
            key: "setBlend",
            value: function(e, t) {
                t !== WebGLContext._blend && (WebGLContext._blend = t, t ? e.enable(e.BLEND) : e.disable(e.BLEND))
            }
        }, {
            key: "setBlendEquation",
            value: function(e, t) {
                t !== WebGLContext._blendEquation && (WebGLContext._blendEquation = t, WebGLContext._blendEquationRGB = WebGLContext._blendEquationAlpha = null, e.blendEquation(t))
            }
        }, {
            key: "setBlendEquationSeparate",
            value: function(e, t, i) {
                t === WebGLContext._blendEquationRGB && i === WebGLContext._blendEquationAlpha || (WebGLContext._blendEquationRGB = t, WebGLContext._blendEquationAlpha = i, WebGLContext._blendEquation = null, e.blendEquationSeparate(t, i))
            }
        }, {
            key: "setBlendFunc",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                (n || t !== WebGLContext._sFactor || i !== WebGLContext._dFactor) && (WebGLContext._sFactor = t, WebGLContext._dFactor = i, WebGLContext._sFactorRGB = null, WebGLContext._dFactorRGB = null, WebGLContext._sFactorAlpha = null, WebGLContext._dFactorAlpha = null, e.blendFunc(t, i))
            }
        }, {
            key: "setBlendFuncSeperate",
            value: function(e, t, i, n, r) {
                t === WebGLContext._sFactorRGB && i === WebGLContext._dFactorRGB && n === WebGLContext._sFactorAlpha && r === WebGLContext._dFactorAlpha || (WebGLContext._sFactorRGB = t, WebGLContext._dFactorRGB = i, WebGLContext._sFactorAlpha = n, WebGLContext._dFactorAlpha = r, WebGLContext._sFactor = null, WebGLContext._dFactor = null, e.blendFuncSeparate(t, i, n, r))
            }
        }, {
            key: "setCullFace",
            value: function(e, t) {
                t !== WebGLContext._cullFace && (WebGLContext._cullFace = t, t ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE))
            }
        }, {
            key: "setFrontFace",
            value: function(e, t) {
                t !== WebGLContext._frontFace && (WebGLContext._frontFace = t, e.frontFace(t))
            }
        }, {
            key: "activeTexture",
            value: function(e, t) {
                WebGLContext._activedTextureID !== t && (e.activeTexture(t), WebGLContext._activedTextureID = t)
            }
        }, {
            key: "bindTexture",
            value: function(e, t, i) {
                WebGLContext._activeTextures[WebGLContext._activedTextureID - e.TEXTURE0] !== i && (e.bindTexture(t, i), WebGLContext._activeTextures[WebGLContext._activedTextureID - e.TEXTURE0] = i)
            }
        }, {
            key: "__init_native",
            value: function() {
                if (i.Render.supportWebGLPlusRendering) {
                    var e = WebGLContext;
                    e.activeTexture = e.activeTextureForNative, e.bindTexture = e.bindTextureForNative
                }
            }
        }, {
            key: "useProgramForNative",
            value: function(e, t) {
                return e.useProgram(t), !0
            }
        }, {
            key: "setDepthTestForNative",
            value: function(e, t) {
                t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)
            }
        }, {
            key: "setDepthMaskForNative",
            value: function(e, t) {
                e.depthMask(t)
            }
        }, {
            key: "setDepthFuncForNative",
            value: function(e, t) {
                e.depthFunc(t)
            }
        }, {
            key: "setBlendForNative",
            value: function(e, t) {
                t ? e.enable(e.BLEND) : e.disable(e.BLEND)
            }
        }, {
            key: "setBlendFuncForNative",
            value: function(e, t, i) {
                e.blendFunc(t, i)
            }
        }, {
            key: "setCullFaceForNative",
            value: function(e, t) {
                t ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE)
            }
        }, {
            key: "setFrontFaceForNative",
            value: function(e, t) {
                e.frontFace(t)
            }
        }, {
            key: "activeTextureForNative",
            value: function(e, t) {
                e.activeTexture(t)
            }
        }, {
            key: "bindTextureForNative",
            value: function(e, t, i) {
                e.bindTexture(t, i)
            }
        }, {
            key: "bindVertexArrayForNative",
            value: function(e, t) {
                e.bindVertexArray(t)
            }
        }]), WebGLContext
    }();
    y._activeTextures = new Array(8), y._useProgram = null, y._depthTest = !0, y._depthMask = !0, y._blend = !1, y._cullFace = !1, y.mainContext = null;
    var m = function() {
        function Handler() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            _classCallCheck(this, Handler), this.once = !1, this._id = 0, this.setTo(e, t, i, n)
        }
        return _createClass(Handler, [{
            key: "setTo",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return this._id = Handler._gid++, this.caller = e, this.method = t, this.args = i, this.once = n, this
            }
        }, {
            key: "run",
            value: function() {
                if (null == this.method)
                    return null;
                var e = this._id,
                    t = this.method.apply(this.caller, this.args);
                return this._id === e && this.once && this.recover(), t
            }
        }, {
            key: "runWith",
            value: function(e) {
                if (null == this.method)
                    return null;
                var t = this._id;
                if (null == e)
                    var i = this.method.apply(this.caller, this.args);
                else
                    i = this.args || e.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(e)) : this.method.apply(this.caller, e) : this.method.call(this.caller, e);
                return this._id === t && this.once && this.recover(), i
            }
        }, {
            key: "clear",
            value: function() {
                return this.caller = null, this.method = null, this.args = null, this
            }
        }, {
            key: "recover",
            value: function() {
                this._id > 0 && (this._id = 0, Handler._pool.push(this.clear()))
            }
        }], [{
            key: "create",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return Handler._pool.length ? Handler._pool.pop().setTo(e, t, i, n) : new Handler(e, t, i, n)
            }
        }]), Handler
    }();
    m._pool = [], m._gid = 1;
    var T = function() {
        function EventDispatcher() {
            _classCallCheck(this, EventDispatcher)
        }
        return _createClass(EventDispatcher, [{
            key: "hasListener",
            value: function(e) {
                return !!(this._events && this._events[e])
            }
        }, {
            key: "event",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!this._events || !this._events[e])
                    return !1;
                var i = this._events[e];
                if (i.run)
                    i.once && delete this._events[e], null != t ? i.runWith(t) : i.run();
                else {
                    for (var n = 0, r = i.length; n < r; n++) {
                        var a = i[n];
                        a && (null != t ? a.runWith(t) : a.run()), a && !a.once || (i.splice(n, 1), n--, r--)
                    }
                    0 === i.length && this._events && delete this._events[e]
                }
                return !0
            }
        }, {
            key: "on",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return this._createListener(e, t, i, n, !1)
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return this._createListener(e, t, i, n, !0)
            }
        }, {
            key: "_createListener",
            value: function(e, t, i, n, r) {
                var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                a && this.off(e, t, i, r);
                var s = C.create(t || this, i, n, r);
                this._events || (this._events = {});
                var o = this._events;
                return o[e] ? o[e].run ? o[e] = [o[e], s] : o[e].push(s) : o[e] = s, this
            }
        }, {
            key: "off",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!this._events || !this._events[e])
                    return this;
                var r = this._events[e];
                if (null != r)
                    if (r.run)
                        t && r.caller !== t || null != i && r.method !== i || n && !r.once || (delete this._events[e], r.recover());
                    else {
                        for (var a = 0, s = 0, o = r.length; s < o; s++) {
                            var l = r[s];
                            l ? !l || t && l.caller !== t || null != i && l.method !== i || n && !l.once || (a++, r[s] = null, l.recover()) : a++
                        }
                        a === o && delete this._events[e]
                    }
                return this
            }
        }, {
            key: "offAll",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this._events;
                if (!t)
                    return this;
                if (e)
                    this._recoverHandlers(t[e]), delete t[e];
                else {
                    for (var i in t)
                        this._recoverHandlers(t[i]);
                    this._events = null
                }
                return this
            }
        }, {
            key: "offAllCaller",
            value: function(e) {
                if (e && this._events)
                    for (var t in this._events)
                        this.off(t, e, null);
                return this
            }
        }, {
            key: "_recoverHandlers",
            value: function(e) {
                if (e)
                    if (e.run)
                        e.recover();
                    else
                        for (var t = e.length - 1; t > -1; t--)
                            e[t] && (e[t].recover(), e[t] = null)
            }
        }, {
            key: "isMouseEvent",
            value: function(e) {
                return EventDispatcher.MOUSE_EVENTS[e] || !1
            }
        }]), EventDispatcher
    }();
    T.MOUSE_EVENTS = {
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
    };
    var C = function(e) {
        function EventHandler(e, t, i, n) {
            return _classCallCheck(this, EventHandler), _possibleConstructorReturn(this, _getPrototypeOf(EventHandler).call(this, e, t, i, n))
        }
        return _inherits(EventHandler, e), _createClass(EventHandler, [{
            key: "recover",
            value: function() {
                this._id > 0 && (this._id = 0, EventHandler._pool.push(this.clear()))
            }
        }], [{
            key: "create",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return EventHandler._pool.length ? EventHandler._pool.pop().setTo(e, t, i, n) : new EventHandler(e, t, i, n)
            }
        }]), EventHandler
    }(m);
    C._pool = [];
    var x = function() {
        function URL(e) {
            _classCallCheck(this, URL), this._url = URL.formatURL(e), this._path = URL.getPath(e)
        }
        return _createClass(URL, [{
            key: "url",
            get: function() {
                return this._url
            }
        }, {
            key: "path",
            get: function() {
                return this._path
            }
        }], [{
            key: "formatURL",
            value: function(e) {
                if (!e)
                    return "null path";
                if (e.indexOf(":") > 0)
                    return e;
                if (null != URL.customFormat && (e = URL.customFormat(e)), e.indexOf(":") > 0)
                    return e;
                var t = e.charAt(0);
                if ("." === t)
                    return URL._formatRelativePath(URL._basePath + e);
                if ("~" === t)
                    return URL.rootPath + e.substring(1);
                if ("d" === t) {
                    if (0 === e.indexOf("data:image"))
                        return e
                } else if ("/" === t)
                    return e;
                return URL._basePath + e
            }
        }, {
            key: "_formatRelativePath",
            value: function(e) {
                for (var t = e.split("/"), i = 0, n = t.length; i < n; i++)
                    ".." == t[i] && (t.splice(i - 1, 2), i -= 2);
                return t.join("/")
            }
        }, {
            key: "getPath",
            value: function(e) {
                var t = e.lastIndexOf("/");
                return t > 0 ? e.substr(0, t + 1) : ""
            }
        }, {
            key: "getFileName",
            value: function(e) {
                var t = e.lastIndexOf("/");
                return t > 0 ? e.substr(t + 1) : e
            }
        }, {
            key: "getAdptedFilePath",
            value: function(e) {
                if (!URL.exportSceneToJson || !e)
                    return e;
                var t, i, n;
                for (i = URL._adpteTypeList.length, t = 0; t < i; t++)
                    n = URL._adpteTypeList[t], e = e.replace(n[0], n[1]);
                return e
            }
        }, {
            key: "basePath",
            set: function(e) {
                URL._basePath = i.Laya._getUrlPath(), URL._basePath = URL.formatURL(e)
            },
            get: function() {
                return URL._basePath
            }
        }]), URL
    }();
    x.version = {}, x.exportSceneToJson = !1, x._basePath = "", x.rootPath = "", x.customFormat = function(e) {
        var t = x.version[e];
        return !window.conch && t && (e += "?v=" + t), e
    }, x._adpteTypeList = [
        [".scene3d", ".json"],
        [".scene", ".json"],
        [".taa", ".json"],
        [".prefab", ".json"]
    ];
    var k = function(e) {
        function Resource() {
            var e;
            return _classCallCheck(this, Resource), (e = _possibleConstructorReturn(this, _getPrototypeOf(Resource).call(this)))._id = 0, e._url = null, e._cpuMemory = 0, e._gpuMemory = 0, e._destroyed = !1, e._referenceCount = 0, e.lock = !1, e.name = null, e._id = ++Resource._uniqueIDCounter, e._destroyed = !1, e._referenceCount = 0, Resource._idResourcesMap[e.id] = _assertThisInitialized(e), e.lock = !1, e
        }
        return _inherits(Resource, e), _createClass(Resource, [{
            key: "_setCPUMemory",
            value: function(e) {
                var t = e - this._cpuMemory;
                this._cpuMemory = e, Resource._addCPUMemory(t)
            }
        }, {
            key: "_setGPUMemory",
            value: function(e) {
                var t = e - this._gpuMemory;
                this._gpuMemory = e, Resource._addGPUMemory(t)
            }
        }, {
            key: "_setCreateURL",
            value: function(e) {
                var t;
                (e = x.formatURL(e), this._url !== e) && (this._url && ((t = Resource._urlResourcesMap[this._url]).splice(t.indexOf(this), 1), 0 === t.length && delete Resource._urlResourcesMap[this._url]), e && ((t = Resource._urlResourcesMap[e]) || (Resource._urlResourcesMap[e] = t = []), t.push(this)), this._url = e)
            }
        }, {
            key: "_addReference",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this._referenceCount += e
            }
        }, {
            key: "_removeReference",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this._referenceCount -= e
            }
        }, {
            key: "_clearReference",
            value: function() {
                this._referenceCount = 0
            }
        }, {
            key: "_recoverResource",
            value: function() {}
        }, {
            key: "_disposeResource",
            value: function() {}
        }, {
            key: "_activeResource",
            value: function() {}
        }, {
            key: "destroy",
            value: function() {
                var e;
                this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), delete Resource._idResourcesMap[this.id], this._url && ((e = Resource._urlResourcesMap[this._url]) && (e.splice(e.indexOf(this), 1), 0 === e.length && delete Resource._urlResourcesMap[this._url]), i.Loader.loadedMap[this._url] == this && delete i.Loader.loadedMap[this._url]))
            }
        }, {
            key: "id",
            get: function() {
                return this._id
            }
        }, {
            key: "url",
            get: function() {
                return this._url
            }
        }, {
            key: "cpuMemory",
            get: function() {
                return this._cpuMemory
            }
        }, {
            key: "gpuMemory",
            get: function() {
                return this._gpuMemory
            }
        }, {
            key: "destroyed",
            get: function() {
                return this._destroyed
            }
        }, {
            key: "referenceCount",
            get: function() {
                return this._referenceCount
            }
        }], [{
            key: "_addCPUMemory",
            value: function(e) {
                Resource._cpuMemory += e
            }
        }, {
            key: "_addGPUMemory",
            value: function(e) {
                Resource._gpuMemory += e
            }
        }, {
            key: "_addMemory",
            value: function(e, t) {
                Resource._cpuMemory += e, Resource._gpuMemory += t
            }
        }, {
            key: "getResourceByID",
            value: function(e) {
                return Resource._idResourcesMap[e]
            }
        }, {
            key: "getResourceByURL",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return Resource._urlResourcesMap[e][t]
            }
        }, {
            key: "destroyUnusedResources",
            value: function() {
                for (var e in Resource._idResourcesMap) {
                    var t = Resource._idResourcesMap[e];
                    t.lock || 0 !== t._referenceCount || t.destroy()
                }
            }
        }, {
            key: "cpuMemory",
            get: function() {
                return Resource._cpuMemory
            }
        }, {
            key: "gpuMemory",
            get: function() {
                return Resource._gpuMemory
            }
        }]), Resource
    }(T);
    k._uniqueIDCounter = 0, k._idResourcesMap = {}, k._urlResourcesMap = {}, k._cpuMemory = 0, k._gpuMemory = 0;
    var S, R, b, E = function(e) {
        function Bitmap() {
            var e;
            return _classCallCheck(this, Bitmap), (e = _possibleConstructorReturn(this, _getPrototypeOf(Bitmap).call(this)))._width = -1, e._height = -1, e
        }
        return _inherits(Bitmap, e), _createClass(Bitmap, [{
            key: "width",
            get: function() {
                return this._width
            },
            set: function(e) {
                this._width = e
            }
        }, {
            key: "height",
            get: function() {
                return this._height
            },
            set: function(e) {
                this._height = e
            }
        }]), _createClass(Bitmap, [{
            key: "_getSource",
            value: function() {
                throw "Bitmap: must override it."
            }
        }]), Bitmap
    }(k);
    (S = e.FilterMode || (e.FilterMode = {}))[S.Point = 0] = "Point", S[S.Bilinear = 1] = "Bilinear", S[S.Trilinear = 2] = "Trilinear", (R = e.TextureFormat || (e.TextureFormat = {}))[R.R8G8B8 = 0] = "R8G8B8", R[R.R8G8B8A8 = 1] = "R8G8B8A8", R[R.R5G6B5 = 16] = "R5G6B5", R[R.Alpha8 = 2] = "Alpha8", R[R.DXT1 = 3] = "DXT1", R[R.DXT5 = 4] = "DXT5", R[R.ETC1RGB = 5] = "ETC1RGB", R[R.PVRTCRGB_2BPPV = 9] = "PVRTCRGB_2BPPV", R[R.PVRTCRGBA_2BPPV = 10] = "PVRTCRGBA_2BPPV", R[R.PVRTCRGB_4BPPV = 11] = "PVRTCRGB_4BPPV", R[R.PVRTCRGBA_4BPPV = 12] = "PVRTCRGBA_4BPPV", R[R.R32G32B32A32 = 15] = "R32G32B32A32", (b = e.WarpMode || (e.WarpMode = {}))[b.Repeat = 0] = "Repeat", b[b.Clamp = 1] = "Clamp";
    var A = function(t) {
        function BaseTexture(t, i) {
            var n;
            return _classCallCheck(this, BaseTexture), (n = _possibleConstructorReturn(this, _getPrototypeOf(BaseTexture).call(this)))._wrapModeU = e.WarpMode.Repeat, n._wrapModeV = e.WarpMode.Repeat, n._filterMode = e.FilterMode.Bilinear, n._readyed = !1, n._width = -1, n._height = -1, n._format = t, n._mipmap = i, n._anisoLevel = 1, n._glTexture = g.instance.createTexture(), n
        }
        return _inherits(BaseTexture, t), _createClass(BaseTexture, [{
            key: "_getFormatByteCount",
            value: function() {
                switch (this._format) {
                    case e.TextureFormat.R8G8B8:
                        return 3;
                    case e.TextureFormat.R8G8B8A8:
                        return 4;
                    case e.TextureFormat.R5G6B5:
                    case e.TextureFormat.Alpha8:
                        return 1;
                    case e.TextureFormat.R32G32B32A32:
                        return 4;
                    default:
                        throw "Texture2D: unknown format."
                }
            }
        }, {
            key: "_isPot",
            value: function(e) {
                return 0 == (e & e - 1)
            }
        }, {
            key: "_getGLFormat",
            value: function() {
                var t, i = g.instance,
                    n = g.layaGPUInstance;
                switch (this._format) {
                    case e.TextureFormat.R8G8B8:
                    case e.TextureFormat.R5G6B5:
                        t = i.RGB;
                        break;
                    case e.TextureFormat.R8G8B8A8:
                        t = i.RGBA;
                        break;
                    case e.TextureFormat.Alpha8:
                        t = i.ALPHA;
                        break;
                    case e.TextureFormat.R32G32B32A32:
                        t = i.RGBA;
                        break;
                    case e.TextureFormat.DXT1:
                        if (!n._compressedTextureS3tc)
                            throw "BaseTexture: not support DXT1 format.";
                        t = n._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        break;
                    case e.TextureFormat.DXT5:
                        if (!n._compressedTextureS3tc)
                            throw "BaseTexture: not support DXT5 format.";
                        t = n._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;
                    case e.TextureFormat.ETC1RGB:
                        if (!n._compressedTextureEtc1)
                            throw "BaseTexture: not support ETC1RGB format.";
                        t = n._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                        break;
                    case e.TextureFormat.PVRTCRGB_2BPPV:
                        if (!n._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                        t = n._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        break;
                    case e.TextureFormat.PVRTCRGBA_2BPPV:
                        if (!n._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                        t = n._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                        break;
                    case e.TextureFormat.PVRTCRGB_4BPPV:
                        if (!n._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                        t = n._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        break;
                    case e.TextureFormat.PVRTCRGBA_4BPPV:
                        if (!n._compressedTexturePvrtc)
                            throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                        t = n._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        break;
                    default:
                        throw "BaseTexture: unknown texture format."
                }
                return t
            }
        }, {
            key: "_setFilterMode",
            value: function(t) {
                var i = g.instance;
                switch (y.bindTexture(i, this._glTextureType, this._glTexture), t) {
                    case e.FilterMode.Point:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.NEAREST);
                        break;
                    case e.FilterMode.Bilinear:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                        break;
                    case e.FilterMode.Trilinear:
                        this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                        break;
                    default:
                        throw new Error("BaseTexture:unknown filterMode value.")
                }
            }
        }, {
            key: "_setWarpMode",
            value: function(t, i) {
                var n = g.instance;
                if (y.bindTexture(n, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height))
                    switch (i) {
                        case e.WarpMode.Repeat:
                            n.texParameteri(this._glTextureType, t, n.REPEAT);
                            break;
                        case e.WarpMode.Clamp:
                            n.texParameteri(this._glTextureType, t, n.CLAMP_TO_EDGE)
                    }
                else
                    n.texParameteri(this._glTextureType, t, n.CLAMP_TO_EDGE)
            }
        }, {
            key: "_setAnisotropy",
            value: function(e) {
                var t = g.layaGPUInstance._extTextureFilterAnisotropic;
                if (t) {
                    e = Math.max(e, 1);
                    var i = g.instance;
                    y.bindTexture(i, this._glTextureType, this._glTexture), e = Math.min(i.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT), e), i.texParameterf(this._glTextureType, t.TEXTURE_MAX_ANISOTROPY_EXT, e)
                }
            }
        }, {
            key: "_disposeResource",
            value: function() {
                this._glTexture && (g.instance.deleteTexture(this._glTexture), this._glTexture = null, this._setGPUMemory(0))
            }
        }, {
            key: "_getSource",
            value: function() {
                return this._readyed ? this._glTexture : null
            }
        }, {
            key: "generateMipmap",
            value: function() {
                this._isPot(this.width) && this._isPot(this.height) && g.instance.generateMipmap(this._glTextureType)
            }
        }, {
            key: "mipmap",
            get: function() {
                return this._mipmap
            }
        }, {
            key: "format",
            get: function() {
                return this._format
            }
        }, {
            key: "wrapModeU",
            get: function() {
                return this._wrapModeU
            },
            set: function(e) {
                this._wrapModeU !== e && (this._wrapModeU = e, -1 !== this._width && this._setWarpMode(g.instance.TEXTURE_WRAP_S, e))
            }
        }, {
            key: "wrapModeV",
            get: function() {
                return this._wrapModeV
            },
            set: function(e) {
                this._wrapModeV !== e && (this._wrapModeV = e, -1 !== this._height && this._setWarpMode(g.instance.TEXTURE_WRAP_T, e))
            }
        }, {
            key: "filterMode",
            get: function() {
                return this._filterMode
            },
            set: function(e) {
                e !== this._filterMode && (this._filterMode = e, -1 !== this._width && -1 !== this._height && this._setFilterMode(e))
            }
        }, {
            key: "anisoLevel",
            get: function() {
                return this._anisoLevel
            },
            set: function(e) {
                e !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, e)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(e))
            }
        }, {
            key: "mipmapCount",
            get: function() {
                return this._mipmapCount
            }
        }, {
            key: "defaulteTexture",
            get: function() {
                throw "BaseTexture:must override it."
            }
        }]), BaseTexture
    }(E);
    A._rgbmRange = 5, A.FORMAT_R8G8B8 = 0, A.FORMAT_R8G8B8A8 = 1, A.FORMAT_ALPHA8 = 2, A.FORMAT_DXT1 = 3, A.FORMAT_DXT5 = 4, A.FORMAT_ETC1RGB = 5, A.FORMAT_PVRTCRGB_2BPPV = 9, A.FORMAT_PVRTCRGBA_2BPPV = 10, A.FORMAT_PVRTCRGB_4BPPV = 11, A.FORMAT_PVRTCRGBA_4BPPV = 12, A.RENDERTEXTURE_FORMAT_RGBA_HALF_FLOAT = 14, A.FORMAT_R32G32B32A32 = 15, A.FORMAT_DEPTH_16 = 0, A.FORMAT_STENCIL_8 = 1, A.FORMAT_DEPTHSTENCIL_16_8 = 2, A.FORMAT_DEPTHSTENCIL_NONE = 3, A.FILTERMODE_POINT = 0, A.FILTERMODE_BILINEAR = 1, A.FILTERMODE_TRILINEAR = 2, A.WARPMODE_REPEAT = 0, A.WARPMODE_CLAMP = 1;
    var M = function(t) {
        function Texture2D() {
            var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.TextureFormat.R8G8B8A8,
                a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            _classCallCheck(this, Texture2D), t = _possibleConstructorReturn(this, _getPrototypeOf(Texture2D).call(this, r, a));
            var o = g.instance;
            t._glTextureType = o.TEXTURE_2D, t._width = i, t._height = n, t._canRead = s, t._setWarpMode(o.TEXTURE_WRAP_S, t._wrapModeU), t._setWarpMode(o.TEXTURE_WRAP_T, t._wrapModeV), t._setFilterMode(t._filterMode), t._setAnisotropy(t._anisoLevel);
            var l = t._gpuCompressFormat();
            if (a) {
                var h = Math.max(Math.ceil(Math.log2(i)) + 1, Math.ceil(Math.log2(n)) + 1);
                if (!l)
                    for (var u = 0; u < h; u++)
                        t._setPixels(null, u, Math.max(i >> u, 1), Math.max(n >> u, 1));
                t._mipmapCount = h, t._setGPUMemory(i * n * 4 * (1 + 1 / 3))
            } else
                l || t._setPixels(null, 0, i, n), t._mipmapCount = 1, t._setGPUMemory(i * n * 4);
            return t
        }
        return _inherits(Texture2D, t), _createClass(Texture2D, [{
            key: "_gpuCompressFormat",
            value: function() {
                return this._format == e.TextureFormat.DXT1 || this._format == e.TextureFormat.DXT5 || this._format == e.TextureFormat.ETC1RGB || this._format == e.TextureFormat.PVRTCRGB_2BPPV || this._format == e.TextureFormat.PVRTCRGBA_2BPPV || this._format == e.TextureFormat.PVRTCRGB_4BPPV || this._format == e.TextureFormat.PVRTCRGBA_4BPPV
            }
        }, {
            key: "_setPixels",
            value: function(t, i, n, r) {
                var a = g.instance,
                    s = this._glTextureType,
                    o = this._getGLFormat();
                switch (y.bindTexture(a, s, this._glTexture), this.format) {
                    case e.TextureFormat.R8G8B8:
                        a.pixelStorei(a.UNPACK_ALIGNMENT, 1), a.texImage2D(s, i, o, n, r, 0, o, a.UNSIGNED_BYTE, t), a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                        break;
                    case e.TextureFormat.R5G6B5:
                        a.pixelStorei(a.UNPACK_ALIGNMENT, 2), a.texImage2D(s, i, o, n, r, 0, o, a.UNSIGNED_SHORT_5_6_5, t), a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                        break;
                    case e.TextureFormat.R32G32B32A32:
                        g.layaGPUInstance._isWebGL2 ? a.texImage2D(s, i, a.RGBA32F, n, r, 0, o, a.FLOAT, t) : a.texImage2D(s, i, a.RGBA, n, r, 0, o, a.FLOAT, t);
                        break;
                    default:
                        a.texImage2D(s, i, o, n, r, 0, o, a.UNSIGNED_BYTE, t)
                }
            }
        }, {
            key: "_calcualatesCompressedDataSize",
            value: function(t, i, n) {
                switch (t) {
                    case e.TextureFormat.DXT1:
                    case e.TextureFormat.ETC1RGB:
                        return (i + 3 >> 2) * (n + 3 >> 2) * 8;
                    case e.TextureFormat.DXT5:
                        return (i + 3 >> 2) * (n + 3 >> 2) * 16;
                    case e.TextureFormat.PVRTCRGB_4BPPV:
                    case e.TextureFormat.PVRTCRGBA_4BPPV:
                        return Math.floor((Math.max(i, 8) * Math.max(n, 8) * 4 + 7) / 8);
                    case e.TextureFormat.PVRTCRGB_2BPPV:
                    case e.TextureFormat.PVRTCRGBA_2BPPV:
                        return Math.floor((Math.max(i, 16) * Math.max(n, 8) * 2 + 7) / 8);
                    default:
                        return 0
                }
            }
        }, {
            key: "_pharseDDS",
            value: function(t) {
                var i = new Int32Array(t, 0, 31);
                if (542327876 != i[0])
                    throw "Invalid magic number in DDS header";
                if (!(4 & i[20]))
                    throw "Unsupported format, must contain a FourCC code";
                var n = i[21];
                switch (this._format) {
                    case e.TextureFormat.DXT1:
                        if (827611204 !== n)
                            throw "the FourCC code is not same with texture format.";
                        break;
                    case e.TextureFormat.DXT5:
                        if (894720068 !== n)
                            throw "the FourCC code is not same with texture format.";
                        break;
                    default:
                        throw "unknown texture format."
                }
                var r = 1;
                if (131072 & i[2]) {
                    if (r = Math.max(1, i[7]), !this._mipmap)
                        throw "the mipmap is not same with Texture2D."
                } else if (this._mipmap)
                    throw "the mipmap is not same with Texture2D.";
                var a = i[4],
                    s = i[3];
                this._width = a, this._height = s;
                var o = i[1] + 4;
                this._upLoadCompressedTexImage2D(t, a, s, r, o, 0)
            }
        }, {
            key: "_pharseKTX",
            value: function(t) {
                var i = new Uint8Array(t, 0, 12);
                if (171 != i[0] || 75 != i[1] || 84 != i[2] || 88 != i[3] || 32 != i[4] || 49 != i[5] || 49 != i[6] || 187 != i[7] || 13 != i[8] || 10 != i[9] || 26 != i[10] || 10 != i[11])
                    throw "Invalid fileIdentifier in KTX header";
                var n = new Int32Array(i.buffer, i.length, 13);
                switch (n[4]) {
                    case g.layaGPUInstance._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        this._format = e.TextureFormat.ETC1RGB;
                        break;
                    default:
                        throw "unknown texture format."
                }
                var r = n[11],
                    a = n[6],
                    s = n[7];
                this._width = a, this._height = s;
                var o = 64 + n[12];
                this._upLoadCompressedTexImage2D(t, a, s, r, o, 4)
            }
        }, {
            key: "_pharsePVR",
            value: function(t) {
                var i = new Int32Array(t, 0, 13);
                if (55727696 != i[0])
                    throw "Invalid magic number in PVR header";
                switch (i[2]) {
                    case 0:
                        this._format = e.TextureFormat.PVRTCRGB_2BPPV;
                        break;
                    case 2:
                        this._format = e.TextureFormat.PVRTCRGB_4BPPV;
                        break;
                    case 1:
                        this._format = e.TextureFormat.PVRTCRGBA_2BPPV;
                        break;
                    case 3:
                        this._format = e.TextureFormat.PVRTCRGBA_4BPPV;
                        break;
                    default:
                        throw "Texture2D:unknown PVR format."
                }
                var n = i[11],
                    r = i[7],
                    a = i[6];
                this._width = r, this._height = a;
                var s = i[12] + 52;
                this._upLoadCompressedTexImage2D(t, r, a, n, s, 0)
            }
        }, {
            key: "_upLoadCompressedTexImage2D",
            value: function(e, t, i, n, r, a) {
                var s = g.instance,
                    o = this._glTextureType;
                y.bindTexture(s, o, this._glTexture);
                for (var l = this._getGLFormat(), h = r, u = 0; u < n; u++) {
                    h += a;
                    var c = this._calcualatesCompressedDataSize(this._format, t, i),
                        _ = new Uint8Array(e, h, c);
                    s.compressedTexImage2D(o, u, l, t, i, 0, _), t = Math.max(t >> 1, 1), i = Math.max(i >> 1, 1), h += c
                }
                var d = h;
                this._setGPUMemory(d), this._readyed = !0, this._activeResource()
            }
        }, {
            key: "loadImageSource",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = g.instance,
                    a = t.width,
                    s = t.height;
                this._width = a, this._height = s, this._isPot(a) && this._isPot(s) || (this._mipmap = !1), this._setWarpMode(r.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(r.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), y.bindTexture(r, this._glTextureType, this._glTexture);
                var o = this._getGLFormat();
                i.Render.isConchApp ? (t.setPremultiplyAlpha && t.setPremultiplyAlpha(n), r.texImage2D(this._glTextureType, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t)) : (n && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), this.format == e.TextureFormat.R5G6B5 ? r.texImage2D(this._glTextureType, 0, r.RGB, r.RGB, r.UNSIGNED_SHORT_5_6_5, t) : r.texImage2D(this._glTextureType, 0, o, o, r.UNSIGNED_BYTE, t), n && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)), this._mipmap ? (r.generateMipmap(this._glTextureType), this._setGPUMemory(a * s * 4 * (1 + 1 / 3))) : this._setGPUMemory(a * s * 4), this._canRead && (i.Render.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, a, s)) : (i.Browser.canvas.size(a, s), i.Browser.canvas.clear(), i.Browser.context.drawImage(t, 0, 0, a, s), this._pixels = new Uint8Array(i.Browser.context.getImageData(0, 0, a, s).data.buffer))), this._readyed = !0, this._activeResource()
            }
        }, {
            key: "setPixels",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (this._gpuCompressFormat())
                    throw "Texture2D:the format is GPU compression format.";
                if (!e)
                    throw "Texture2D:pixels can't be null.";
                var i = Math.max(this._width >> t, 1),
                    n = Math.max(this._height >> t, 1),
                    r = i * n * this._getFormatByteCount();
                if (e.length < r)
                    throw "Texture2D:pixels length should at least " + r + ".";
                this._setPixels(e, t, i, n), this._canRead && (this._pixels = e), this._readyed = !0, this._activeResource()
            }
        }, {
            key: "setSubPixels",
            value: function(t, i, n, r, a) {
                var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (this._gpuCompressFormat())
                    throw "Texture2D:the format is GPU compression format.";
                if (!a)
                    throw "Texture2D:pixels can't be null.";
                var o = g.instance,
                    l = this._glTextureType;
                y.bindTexture(o, l, this._glTexture);
                var h = this._getGLFormat();
                switch (this.format) {
                    case e.TextureFormat.R8G8B8:
                        o.pixelStorei(o.UNPACK_ALIGNMENT, 1), o.texSubImage2D(l, s, t, i, n, r, h, o.UNSIGNED_BYTE, a), o.pixelStorei(o.UNPACK_ALIGNMENT, 4);
                        break;
                    case e.TextureFormat.R5G6B5:
                        o.pixelStorei(o.UNPACK_ALIGNMENT, 2), o.texSubImage2D(l, s, t, i, n, r, h, o.UNSIGNED_SHORT_5_6_5, a), o.pixelStorei(o.UNPACK_ALIGNMENT, 4);
                        break;
                    case e.TextureFormat.R32G32B32A32:
                        o.texSubImage2D(l, s, t, i, n, r, h, o.FLOAT, a);
                        break;
                    default:
                        o.texSubImage2D(l, s, t, i, n, r, h, o.UNSIGNED_BYTE, a)
                }
                this._readyed = !0, this._activeResource()
            }
        }, {
            key: "setCompressData",
            value: function(t) {
                switch (this._format) {
                    case e.TextureFormat.DXT1:
                    case e.TextureFormat.DXT5:
                        this._pharseDDS(t);
                        break;
                    case e.TextureFormat.ETC1RGB:
                        this._pharseKTX(t);
                        break;
                    case e.TextureFormat.PVRTCRGB_2BPPV:
                    case e.TextureFormat.PVRTCRGBA_2BPPV:
                    case e.TextureFormat.PVRTCRGB_4BPPV:
                    case e.TextureFormat.PVRTCRGBA_4BPPV:
                        this._pharsePVR(t);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
            }
        }, {
            key: "getPixels",
            value: function() {
                if (this._canRead)
                    return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.")
            }
        }, {
            key: "defaulteTexture",
            get: function() {
                return Texture2D.grayTexture
            }
        }], [{
            key: "__init__",
            value: function() {
                var t = new Uint8Array(3);
                t[0] = 128, t[1] = 128, t[2] = 128, Texture2D.grayTexture = new Texture2D(1, 1, e.TextureFormat.R8G8B8, !1, !1), Texture2D.grayTexture.setPixels(t), Texture2D.grayTexture.lock = !0, t[0] = 255, t[1] = 255, t[2] = 255, Texture2D.whiteTexture = new Texture2D(1, 1, e.TextureFormat.R8G8B8, !1, !1), Texture2D.whiteTexture.setPixels(t), Texture2D.whiteTexture.lock = !0, t[0] = 0, t[1] = 0, t[2] = 0, Texture2D.blackTexture = new Texture2D(1, 1, e.TextureFormat.R8G8B8, !1, !1), Texture2D.blackTexture.setPixels(t), Texture2D.blackTexture.lock = !0
            }
        }, {
            key: "_parse",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = n ? new Texture2D(n[0], n[1], n[2], n[3], n[4]) : new Texture2D(0, 0);
                switch (i && (r.wrapModeU = i.wrapModeU, r.wrapModeV = i.wrapModeV, r.filterMode = i.filterMode, r.anisoLevel = i.anisoLevel), r._format) {
                    case e.TextureFormat.R8G8B8:
                    case e.TextureFormat.R8G8B8A8:
                        r.loadImageSource(t);
                        break;
                    case e.TextureFormat.DXT1:
                    case e.TextureFormat.DXT5:
                    case e.TextureFormat.ETC1RGB:
                    case e.TextureFormat.PVRTCRGB_2BPPV:
                    case e.TextureFormat.PVRTCRGBA_2BPPV:
                    case e.TextureFormat.PVRTCRGB_4BPPV:
                    case e.TextureFormat.PVRTCRGBA_4BPPV:
                        r.setCompressData(t);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
                return r
            }
        }, {
            key: "load",
            value: function(e, t) {
                i.loader.create(e, t, null, i.Loader.TEXTURE2D)
            }
        }]), Texture2D
    }(A);
    M.TEXTURE2D = "TEXTURE2D", M.grayTexture = null, M.whiteTexture = null, M.blackTexture = null;
    var w, L, I = function(e) {
            function BaseShader() {
                return _classCallCheck(this, BaseShader), _possibleConstructorReturn(this, _getPrototypeOf(BaseShader).call(this))
            }
            return _inherits(BaseShader, e), BaseShader
        }(k),
        P = function() {
            function RenderState2D() {
                _classCallCheck(this, RenderState2D)
            }
            return _createClass(RenderState2D, null, [{
                key: "mat2MatArray",
                value: function(e, t) {
                    var i = e,
                        n = t;
                    return n[0] = i.a, n[1] = i.b, n[2] = RenderState2D.EMPTYMAT4_ARRAY[2], n[3] = RenderState2D.EMPTYMAT4_ARRAY[3], n[4] = i.c, n[5] = i.d, n[6] = RenderState2D.EMPTYMAT4_ARRAY[6], n[7] = RenderState2D.EMPTYMAT4_ARRAY[7], n[8] = RenderState2D.EMPTYMAT4_ARRAY[8], n[9] = RenderState2D.EMPTYMAT4_ARRAY[9], n[10] = RenderState2D.EMPTYMAT4_ARRAY[10], n[11] = RenderState2D.EMPTYMAT4_ARRAY[11], n[12] = i.tx, n[13] = i.ty, n[14] = RenderState2D.EMPTYMAT4_ARRAY[14], n[15] = RenderState2D.EMPTYMAT4_ARRAY[15], t
                }
            }, {
                key: "restoreTempArray",
                value: function() {
                    RenderState2D.TEMPMAT4_ARRAY[0] = 1, RenderState2D.TEMPMAT4_ARRAY[1] = 0, RenderState2D.TEMPMAT4_ARRAY[4] = 0, RenderState2D.TEMPMAT4_ARRAY[5] = 1, RenderState2D.TEMPMAT4_ARRAY[12] = 0, RenderState2D.TEMPMAT4_ARRAY[13] = 0
                }
            }, {
                key: "clear",
                value: function() {
                    RenderState2D.worldScissorTest = !1, RenderState2D.worldAlpha = 1
                }
            }]), RenderState2D
        }();
    P._MAXSIZE = 99999999, P.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], P.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], P.worldMatrix4 = P.TEMPMAT4_ARRAY, P.worldMatrix = new f, P.matWVP = null, P.worldAlpha = 1, P.worldScissorTest = !1, P.width = 0, P.height = 0, (w = e.RenderTextureFormat || (e.RenderTextureFormat = {}))[w.R8G8B8 = 0] = "R8G8B8", w[w.R8G8B8A8 = 1] = "R8G8B8A8", w[w.Alpha8 = 2] = "Alpha8", w[w.R16G16B16A16 = 14] = "R16G16B16A16", w[w.Depth = 15] = "Depth", w[w.ShadowMap = 16] = "ShadowMap", (L = e.RenderTextureDepthFormat || (e.RenderTextureDepthFormat = {}))[L.DEPTH_16 = 0] = "DEPTH_16", L[L.STENCIL_8 = 1] = "STENCIL_8", L[L.DEPTHSTENCIL_24_8 = 2] = "DEPTHSTENCIL_24_8", L[L.DEPTHSTENCIL_NONE = 3] = "DEPTHSTENCIL_NONE", L[L.DEPTHSTENCIL_16_8 = 2] = "DEPTHSTENCIL_16_8";
    var D = function(t) {
        function RenderTexture2D(t, i) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.RenderTextureFormat.R8G8B8,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.RenderTextureDepthFormat.DEPTH_16;
            return _classCallCheck(this, RenderTexture2D), (n = _possibleConstructorReturn(this, _getPrototypeOf(RenderTexture2D).call(this, r, !1)))._mgrKey = 0, n._glTextureType = g.instance.TEXTURE_2D, n._width = t, n._height = i, n._depthStencilFormat = a, n._create(t, i), n.lock = !0, n
        }
        return _inherits(RenderTexture2D, t), _createClass(RenderTexture2D, [{
            key: "getIsReady",
            value: function() {
                return !0
            }
        }, {
            key: "_create",
            value: function(t, i) {
                var n = g.instance;
                this._frameBuffer = n.createFramebuffer(), y.bindTexture(n, this._glTextureType, this._glTexture);
                var r = this._getGLFormat();
                if (n.texImage2D(this._glTextureType, 0, r, t, i, 0, r, n.UNSIGNED_BYTE, null), this._setGPUMemory(t * i * 4), n.bindFramebuffer(n.FRAMEBUFFER, this._frameBuffer), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this._glTexture, 0), this._depthStencilFormat !== e.RenderTextureDepthFormat.DEPTHSTENCIL_NONE)
                    switch (this._depthStencilBuffer = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, this._depthStencilBuffer), this._depthStencilFormat) {
                        case e.RenderTextureDepthFormat.DEPTH_16:
                            n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, t, i), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, this._depthStencilBuffer);
                            break;
                        case e.RenderTextureDepthFormat.STENCIL_8:
                            n.renderbufferStorage(n.RENDERBUFFER, n.STENCIL_INDEX8, t, i), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.STENCIL_ATTACHMENT, n.RENDERBUFFER, this._depthStencilBuffer);
                            break;
                        case e.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                            n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, t, i), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, this._depthStencilBuffer)
                    }
                n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindRenderbuffer(n.RENDERBUFFER, null), this._setWarpMode(n.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(n.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource()
            }
        }, {
            key: "generateMipmap",
            value: function() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, g.instance.generateMipmap(this._glTextureType), this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, this._setGPUMemory(this.width * this.height * 4))
            }
        }, {
            key: "start",
            value: function() {
                var e = g.instance;
                g.instance.bindFramebuffer(e.FRAMEBUFFER, this._frameBuffer), this._lastRT = RenderTexture2D._currentActive, RenderTexture2D._currentActive = this, this._readyed = !0, e.viewport(0, 0, this._width, this._height), this._lastWidth = P.width, this._lastHeight = P.height, P.width = this._width, P.height = this._height, I.activeShader = null
            }
        }, {
            key: "end",
            value: function() {
                var e = g.instance;
                e.bindFramebuffer(e.FRAMEBUFFER, null), RenderTexture2D._currentActive = null, this._readyed = !0
            }
        }, {
            key: "restore",
            value: function() {
                var e = g.instance;
                this._lastRT != RenderTexture2D._currentActive && (g.instance.bindFramebuffer(e.FRAMEBUFFER, this._lastRT ? this._lastRT._frameBuffer : null), RenderTexture2D._currentActive = this._lastRT), this._readyed = !0, e.viewport(0, 0, this._lastWidth, this._lastHeight), P.width = this._lastWidth, P.height = this._lastHeight, I.activeShader = null
            }
        }, {
            key: "clear",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = g.instance;
                r.clearColor(e, t, i, n);
                var a = r.COLOR_BUFFER_BIT;
                switch (this._depthStencilFormat) {
                    case r.DEPTH_COMPONENT16:
                        a |= r.DEPTH_BUFFER_BIT;
                        break;
                    case r.STENCIL_INDEX8:
                        a |= r.STENCIL_BUFFER_BIT;
                        break;
                    case r.DEPTH_STENCIL:
                        a |= r.DEPTH_BUFFER_BIT, a |= r.STENCIL_BUFFER_BIT
                }
                r.clear(a)
            }
        }, {
            key: "getData",
            value: function(e, t, n, r) {
                if (i.Render.isConchApp && 2 == window.conchConfig.threadMode)
                    throw "native 2 thread mode use getDataAsync";
                var a = g.instance;
                if (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), !(a.checkFramebufferStatus(a.FRAMEBUFFER) === a.FRAMEBUFFER_COMPLETE))
                    return a.bindFramebuffer(a.FRAMEBUFFER, null), null;
                var s = new Uint8Array(this._width * this._height * 4),
                    o = this._getGLFormat();
                return a.readPixels(e, t, n, r, o, a.UNSIGNED_BYTE, s), a.bindFramebuffer(a.FRAMEBUFFER, null), s
            }
        }, {
            key: "getDataAsync",
            value: function(e, t, i, n, r) {
                var a = g.instance;
                a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), a.readPixelsAsync(e, t, i, n, a.RGBA, a.UNSIGNED_BYTE, (function(e) {
                    r(new Uint8Array(e))
                })), a.bindFramebuffer(a.FRAMEBUFFER, null)
            }
        }, {
            key: "recycle",
            value: function() {}
        }, {
            key: "_disposeResource",
            value: function() {
                if (this._frameBuffer) {
                    var e = g.instance;
                    e.deleteTexture(this._glTexture), e.deleteFramebuffer(this._frameBuffer), e.deleteRenderbuffer(this._depthStencilBuffer), this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, this._setGPUMemory(0)
                }
            }
        }, {
            key: "depthStencilFormat",
            get: function() {
                return this._depthStencilFormat
            }
        }, {
            key: "defaulteTexture",
            get: function() {
                return M.grayTexture
            }
        }, {
            key: "sourceWidth",
            get: function() {
                return this._width
            }
        }, {
            key: "sourceHeight",
            get: function() {
                return this._height
            }
        }, {
            key: "offsetX",
            get: function() {
                return 0
            }
        }, {
            key: "offsetY",
            get: function() {
                return 0
            }
        }], [{
            key: "pushRT",
            value: function() {
                RenderTexture2D.rtStack.push({
                    rt: RenderTexture2D._currentActive,
                    w: P.width,
                    h: P.height
                })
            }
        }, {
            key: "popRT",
            value: function() {
                var e = g.instance,
                    t = RenderTexture2D.rtStack.pop();
                t && (RenderTexture2D._currentActive != t.rt && (g.instance.bindFramebuffer(e.FRAMEBUFFER, t.rt ? t.rt._frameBuffer : null), RenderTexture2D._currentActive = t.rt), e.viewport(0, 0, t.w, t.h), P.width = t.w, P.height = t.h)
            }
        }, {
            key: "currentActive",
            get: function() {
                return RenderTexture2D._currentActive
            }
        }]), RenderTexture2D
    }(A);
    D.rtStack = [], D.defuv = [0, 0, 1, 0, 1, 1, 0, 1], D.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0];
    var B = function() {
        function WebGLRTMgr() {
            _classCallCheck(this, WebGLRTMgr)
        }
        return _createClass(WebGLRTMgr, null, [{
            key: "getRT",
            value: function(t, i) {
                return i |= 0, (t |= 0) >= 1e4 && console.error("getRT error! w too big"), new D(t, i, e.RenderTextureFormat.R8G8B8A8, -1)
            }
        }, {
            key: "releaseRT",
            value: function(e) {
                e.destroy()
            }
        }]), WebGLRTMgr
    }();
    B.dict = {};
    var O = function() {
        function BlendMode() {
            _classCallCheck(this, BlendMode)
        }
        return _createClass(BlendMode, null, [{
            key: "_init_",
            value: function(e) {
                BlendMode.fns = [BlendMode.BlendNormal, BlendMode.BlendAdd, BlendMode.BlendMultiply, BlendMode.BlendScreen, BlendMode.BlendOverlay, BlendMode.BlendLight, BlendMode.BlendMask, BlendMode.BlendDestinationOut], BlendMode.targetFns = [BlendMode.BlendNormalTarget, BlendMode.BlendAddTarget, BlendMode.BlendMultiplyTarget, BlendMode.BlendScreenTarget, BlendMode.BlendOverlayTarget, BlendMode.BlendLightTarget, BlendMode.BlendMask, BlendMode.BlendDestinationOut]
            }
        }, {
            key: "BlendNormal",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE_MINUS_SRC_ALPHA, !0)
            }
        }, {
            key: "BlendAdd",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.DST_ALPHA, !0)
            }
        }, {
            key: "BlendMultiply",
            value: function(e) {
                y.setBlendFunc(e, e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, !0)
            }
        }, {
            key: "BlendScreen",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE, !0)
            }
        }, {
            key: "BlendOverlay",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE_MINUS_SRC_COLOR, !0)
            }
        }, {
            key: "BlendLight",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE, !0)
            }
        }, {
            key: "BlendNormalTarget",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE_MINUS_SRC_ALPHA, !0)
            }
        }, {
            key: "BlendAddTarget",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.DST_ALPHA, !0)
            }
        }, {
            key: "BlendMultiplyTarget",
            value: function(e) {
                y.setBlendFunc(e, e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, !0)
            }
        }, {
            key: "BlendScreenTarget",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE, !0)
            }
        }, {
            key: "BlendOverlayTarget",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE_MINUS_SRC_COLOR, !0)
            }
        }, {
            key: "BlendLightTarget",
            value: function(e) {
                y.setBlendFunc(e, e.ONE, e.ONE, !0)
            }
        }, {
            key: "BlendMask",
            value: function(e) {
                y.setBlendFunc(e, e.ZERO, e.SRC_ALPHA, !0)
            }
        }, {
            key: "BlendDestinationOut",
            value: function(e) {
                y.setBlendFunc(e, e.ZERO, e.ZERO, !0)
            }
        }]), BlendMode
    }();
    O.activeBlendFunction = null, O.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"], O.TOINT = {
        normal: 0,
        add: 1,
        multiply: 2,
        screen: 3,
        overlay: 4,
        light: 5,
        mask: 6,
        "destination-out": 7,
        lighter: 1
    }, O.NORMAL = "normal", O.ADD = "add", O.MULTIPLY = "multiply", O.SCREEN = "screen", O.OVERLAY = "overlay", O.LIGHT = "light", O.MASK = "mask", O.DESTINATIONOUT = "destination-out", O.LIGHTER = "lighter", O.fns = [], O.targetFns = [];
    var F = function() {
            function ShaderDefinesBase(e, t, i) {
                _classCallCheck(this, ShaderDefinesBase), this._value = 0, this._name2int = e, this._int2name = t, this._int2nameMap = i
            }
            return _createClass(ShaderDefinesBase, [{
                key: "add",
                value: function(e) {
                    return this._value |= "string" == typeof e ? this._name2int[e] : e, this._value
                }
            }, {
                key: "addInt",
                value: function(e) {
                    return this._value |= e, this._value
                }
            }, {
                key: "remove",
                value: function(e) {
                    return this._value &= "string" == typeof e ? ~this._name2int[e] : ~e, this._value
                }
            }, {
                key: "isDefine",
                value: function(e) {
                    return (this._value & e) === e
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this._value = e
                }
            }, {
                key: "toNameDic",
                value: function() {
                    var e = this._int2nameMap[this._value];
                    return e || ShaderDefinesBase._toText(this._value, this._int2name, this._int2nameMap)
                }
            }], [{
                key: "_reg",
                value: function(e, t, i, n) {
                    i[e] = t, n[t] = e
                }
            }, {
                key: "_toText",
                value: function(e, t, i) {
                    var n = i[e];
                    if (n)
                        return n;
                    for (var r = {}, a = 1, s = 0; s < 32 && !((a = 1 << s) > e); s++)
                        if (e & a) {
                            var o = t[a];
                            o && (r[o] = "")
                        }
                    return i[e] = r, r
                }
            }, {
                key: "_toInt",
                value: function(e, t) {
                    for (var i = e.split("."), n = 0, r = 0, a = i.length; r < a; r++) {
                        var s = t[i[r]];
                        if (!s)
                            throw new Error("Defines to int err:" + e + "/" + i[r]);
                        n |= s
                    }
                    return n
                }
            }]), ShaderDefinesBase
        }(),
        N = function(e) {
            function ShaderDefines2D() {
                return _classCallCheck(this, ShaderDefines2D), _possibleConstructorReturn(this, _getPrototypeOf(ShaderDefines2D).call(this, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name, ShaderDefines2D.__int2nameMap))
            }
            return _inherits(ShaderDefines2D, e), _createClass(ShaderDefines2D, null, [{
                key: "__init__",
                value: function() {
                    ShaderDefines2D.reg("TEXTURE2D", ShaderDefines2D.TEXTURE2D), ShaderDefines2D.reg("PRIMITIVE", ShaderDefines2D.PRIMITIVE), ShaderDefines2D.reg("GLOW_FILTER", ShaderDefines2D.FILTERGLOW), ShaderDefines2D.reg("BLUR_FILTER", ShaderDefines2D.FILTERBLUR), ShaderDefines2D.reg("COLOR_FILTER", ShaderDefines2D.FILTERCOLOR), ShaderDefines2D.reg("COLOR_ADD", ShaderDefines2D.COLORADD), ShaderDefines2D.reg("WORLDMAT", ShaderDefines2D.WORLDMAT), ShaderDefines2D.reg("FILLTEXTURE", ShaderDefines2D.FILLTEXTURE), ShaderDefines2D.reg("MVP3D", ShaderDefines2D.MVP3D)
                }
            }, {
                key: "reg",
                value: function(e, t) {
                    this._reg(e, t, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name)
                }
            }, {
                key: "toText",
                value: function(e, t, i) {
                    return this._toText(e, t, i)
                }
            }, {
                key: "toInt",
                value: function(e) {
                    return this._toInt(e, ShaderDefines2D.__name2int)
                }
            }]), ShaderDefines2D
        }(F);
    N.TEXTURE2D = 1, N.PRIMITIVE = 4, N.FILTERGLOW = 8, N.FILTERBLUR = 16, N.FILTERCOLOR = 32, N.COLORADD = 64, N.WORLDMAT = 128, N.FILLTEXTURE = 256, N.SKINMESH = 512, N.MVP3D = 2048, N.NOOPTMASK = N.FILTERGLOW | N.FILTERBLUR | N.FILTERCOLOR | N.FILLTEXTURE, N.__name2int = {}, N.__int2name = [], N.__int2nameMap = [];
    var G = function() {
        function Stat() {
            _classCallCheck(this, Stat)
        }
        return _createClass(Stat, null, [{
            key: "show",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Stat._StatRender.show(e, t)
            }
        }, {
            key: "enable",
            value: function() {
                Stat._StatRender.enable()
            }
        }, {
            key: "hide",
            value: function() {
                Stat._StatRender.hide()
            }
        }, {
            key: "clear",
            value: function() {
                Stat.trianglesFaces = Stat.renderBatches = Stat.savedRenderBatches = Stat.shaderCall = Stat.spriteRenderUseCacheCount = Stat.frustumCulling = Stat.octreeNodeCulling = Stat.canvasNormal = Stat.canvasBitmap = Stat.canvasReCache = 0
            }
        }, {
            key: "onclick",
            set: function(e) {
                Stat._StatRender.set_onclick(e)
            }
        }]), Stat
    }();
    G.FPS = 0, G.loopCount = 0, G.shaderCall = 0, G.renderBatches = 0, G.savedRenderBatches = 0, G.trianglesFaces = 0, G.spriteCount = 0, G.spriteRenderUseCacheCount = 0, G.frustumCulling = 0, G.octreeNodeCulling = 0, G.canvasNormal = 0, G.canvasBitmap = 0, G.canvasReCache = 0, G.renderSlow = !1, G._fpsData = [], G._timer = 0, G._count = 0, G._StatRender = null;
    var U = function() {
            function StringKey() {
                _classCallCheck(this, StringKey), this._strsToID = {}, this._idToStrs = [], this._length = 0
            }
            return _createClass(StringKey, [{
                key: "add",
                value: function(e) {
                    var t = this._strsToID[e];
                    return null != t ? t : (this._idToStrs[this._length] = e, this._strsToID[e] = this._length++)
                }
            }, {
                key: "getID",
                value: function(e) {
                    var t = this._strsToID[e];
                    return null == t ? -1 : t
                }
            }, {
                key: "getName",
                value: function(e) {
                    var t = this._idToStrs[e];
                    return null == t ? void 0 : t
                }
            }]), StringKey
        }(),
        W = function(e) {
            function Shader(e, t) {
                var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if (_classCallCheck(this, Shader), (i = _possibleConstructorReturn(this, _getPrototypeOf(Shader).call(this)))._attribInfo = null, i.customCompile = !1, i._curActTexIndex = 0, i.tag = {}, i._program = null, i._params = null, i._paramsMap = {}, !e || !t)
                    throw "Shader Error";
                return i._attribInfo = a, i._id = ++Shader._count, i._vs = e, i._ps = t, i._nameMap = r || {}, null != n && (Shader.sharders[n] = _assertThisInitialized(i)), i.recreateResource(), i.lock = !0, i
            }
            return _inherits(Shader, e), _createClass(Shader, [{
                key: "recreateResource",
                value: function() {
                    this._compile(), this._setGPUMemory(0)
                }
            }, {
                key: "_disposeResource",
                value: function() {
                    y.mainContext.deleteShader(this._vshader), y.mainContext.deleteShader(this._pshader), y.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0
                }
            }, {
                key: "_compile",
                value: function() {
                    if (this._vs && this._ps && !this._params) {
                        var e;
                        this._reCompile = !0, this._params = [], this.customCompile && (e = i.ShaderCompile.preGetParams(this._vs, this._ps));
                        var t, n, r, a = y.mainContext;
                        this._program = a.createProgram(), this._vshader = Shader._createShader(a, this._vs, a.VERTEX_SHADER), this._pshader = Shader._createShader(a, this._ps, a.FRAGMENT_SHADER), a.attachShader(this._program, this._vshader), a.attachShader(this._program, this._pshader);
                        var s = this._attribInfo ? this._attribInfo.length : 0;
                        for (n = 0; n < s; n += 2)
                            a.bindAttribLocation(this._program, this._attribInfo[n + 1], this._attribInfo[n]);
                        if (a.linkProgram(this._program), !this.customCompile && !a.getProgramParameter(this._program, a.LINK_STATUS))
                            throw a.getProgramInfoLog(this._program);
                        var o = this.customCompile ? e.uniforms.length : a.getProgramParameter(this._program, a.ACTIVE_UNIFORMS);
                        for (n = 0; n < o; n++) {
                            var l = this.customCompile ? e.uniforms[n] : a.getActiveUniform(this._program, n);
                            (t = {
                                vartype: "uniform",
                                glfun: null,
                                ivartype: 1,
                                location: a.getUniformLocation(this._program, l.name),
                                name: l.name,
                                type: l.type,
                                isArray: !1,
                                isSame: !1,
                                preValue: null,
                                indexOfParams: 0
                            }).name.indexOf("[0]") > 0 && (t.name = t.name.substr(0, t.name.length - 3), t.isArray = !0, t.location = a.getUniformLocation(this._program, t.name)), this._params.push(t)
                        }
                        for (n = 0, r = this._params.length; n < r; n++)
                            switch ((t = this._params[n]).indexOfParams = n, t.index = 1, t.value = [t.location, null], t.codename = t.name, t.name = this._nameMap[t.codename] ? this._nameMap[t.codename] : t.codename, this._paramsMap[t.name] = t, t._this = this, t.uploadedValue = [], t.type) {
                                case a.INT:
                                    t.fun = t.isArray ? this._uniform1iv : this._uniform1i;
                                    break;
                                case a.FLOAT:
                                    t.fun = t.isArray ? this._uniform1fv : this._uniform1f;
                                    break;
                                case a.FLOAT_VEC2:
                                    t.fun = t.isArray ? this._uniform_vec2v : this._uniform_vec2;
                                    break;
                                case a.FLOAT_VEC3:
                                    t.fun = t.isArray ? this._uniform_vec3v : this._uniform_vec3;
                                    break;
                                case a.FLOAT_VEC4:
                                    t.fun = t.isArray ? this._uniform_vec4v : this._uniform_vec4;
                                    break;
                                case a.SAMPLER_2D:
                                    t.fun = this._uniform_sampler2D;
                                    break;
                                case a.SAMPLER_CUBE:
                                    t.fun = this._uniform_samplerCube;
                                    break;
                                case a.FLOAT_MAT4:
                                    t.glfun = a.uniformMatrix4fv, t.fun = this._uniformMatrix4fv;
                                    break;
                                case a.BOOL:
                                    t.fun = this._uniform1i;
                                    break;
                                case a.FLOAT_MAT2:
                                case a.FLOAT_MAT3:
                                default:
                                    throw new Error("compile shader err!")
                            }
                    }
                }
            }, {
                key: "getUniform",
                value: function(e) {
                    return this._paramsMap[e]
                }
            }, {
                key: "_uniform1f",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t ? (y.mainContext.uniform1f(e.location, i[0] = t), 1) : 0
                }
            }, {
                key: "_uniform1fv",
                value: function(e, t) {
                    if (t.length < 4) {
                        var i = e.uploadedValue;
                        return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] || i[3] !== t[3] ? (y.mainContext.uniform1fv(e.location, t), i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], 1) : 0
                    }
                    return y.mainContext.uniform1fv(e.location, t), 1
                }
            }, {
                key: "_uniform_vec2",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] ? (y.mainContext.uniform2f(e.location, i[0] = t[0], i[1] = t[1]), 1) : 0
                }
            }, {
                key: "_uniform_vec2v",
                value: function(e, t) {
                    if (t.length < 2) {
                        var i = e.uploadedValue;
                        return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] || i[3] !== t[3] ? (y.mainContext.uniform2fv(e.location, t), i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], 1) : 0
                    }
                    return y.mainContext.uniform2fv(e.location, t), 1
                }
            }, {
                key: "_uniform_vec3",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] ? (y.mainContext.uniform3f(e.location, i[0] = t[0], i[1] = t[1], i[2] = t[2]), 1) : 0
                }
            }, {
                key: "_uniform_vec3v",
                value: function(e, t) {
                    return y.mainContext.uniform3fv(e.location, t), 1
                }
            }, {
                key: "_uniform_vec4",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] || i[3] !== t[3] ? (y.mainContext.uniform4f(e.location, i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3]), 1) : 0
                }
            }, {
                key: "_uniform_vec4v",
                value: function(e, t) {
                    return y.mainContext.uniform4fv(e.location, t), 1
                }
            }, {
                key: "_uniformMatrix2fv",
                value: function(e, t) {
                    return y.mainContext.uniformMatrix2fv(e.location, !1, t), 1
                }
            }, {
                key: "_uniformMatrix3fv",
                value: function(e, t) {
                    return y.mainContext.uniformMatrix3fv(e.location, !1, t), 1
                }
            }, {
                key: "_uniformMatrix4fv",
                value: function(e, t) {
                    return y.mainContext.uniformMatrix4fv(e.location, !1, t), 1
                }
            }, {
                key: "_uniform1i",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t ? (y.mainContext.uniform1i(e.location, i[0] = t), 1) : 0
                }
            }, {
                key: "_uniform1iv",
                value: function(e, t) {
                    return y.mainContext.uniform1iv(e.location, t), 1
                }
            }, {
                key: "_uniform_ivec2",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] ? (y.mainContext.uniform2i(e.location, i[0] = t[0], i[1] = t[1]), 1) : 0
                }
            }, {
                key: "_uniform_ivec2v",
                value: function(e, t) {
                    return y.mainContext.uniform2iv(e.location, t), 1
                }
            }, {
                key: "_uniform_vec3i",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] ? (y.mainContext.uniform3i(e.location, i[0] = t[0], i[1] = t[1], i[2] = t[2]), 1) : 0
                }
            }, {
                key: "_uniform_vec3vi",
                value: function(e, t) {
                    return y.mainContext.uniform3iv(e.location, t), 1
                }
            }, {
                key: "_uniform_vec4i",
                value: function(e, t) {
                    var i = e.uploadedValue;
                    return i[0] !== t[0] || i[1] !== t[1] || i[2] !== t[2] || i[3] !== t[3] ? (y.mainContext.uniform4i(e.location, i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3]), 1) : 0
                }
            }, {
                key: "_uniform_vec4vi",
                value: function(e, t) {
                    return y.mainContext.uniform4iv(e.location, t), 1
                }
            }, {
                key: "_uniform_sampler2D",
                value: function(e, t) {
                    var i = y.mainContext,
                        n = e.uploadedValue;
                    return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(e.location, this._curActTexIndex), y.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), y.bindTexture(i, i.TEXTURE_2D, t), this._curActTexIndex++, 1) : (y.activeTexture(i, i.TEXTURE0 + n[0]), y.bindTexture(i, i.TEXTURE_2D, t), 0)
                }
            }, {
                key: "_uniform_samplerCube",
                value: function(e, t) {
                    var i = y.mainContext,
                        n = e.uploadedValue;
                    return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(e.location, this._curActTexIndex), y.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), y.bindTexture(i, i.TEXTURE_CUBE_MAP, t), this._curActTexIndex++, 1) : (y.activeTexture(i, i.TEXTURE0 + n[0]), y.bindTexture(i, i.TEXTURE_CUBE_MAP, t), 0)
                }
            }, {
                key: "_noSetValue",
                value: function(e) {
                    console.log("no....:" + e.name)
                }
            }, {
                key: "uploadOne",
                value: function(e, t) {
                    y.useProgram(y.mainContext, this._program);
                    var i = this._paramsMap[e];
                    i.fun.call(this, i, t)
                }
            }, {
                key: "uploadTexture2D",
                value: function(e) {
                    var t = y;
                    t._activeTextures[0] !== e && (t.bindTexture(y.mainContext, g.instance.TEXTURE_2D, e), t._activeTextures[0] = e)
                }
            }, {
                key: "upload",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    I.activeShader = I.bindShader = this;
                    var i = y.mainContext;
                    y.useProgram(i, this._program), this._reCompile ? (t = this._params, this._reCompile = !1) : t = t || this._params;
                    for (var n, r, a = t.length, s = 0, o = 0; o < a; o++)
                        null !== (r = e[(n = t[o]).name]) && (s += n.fun.call(this, n, r));
                    G.shaderCall += s
                }
            }, {
                key: "uploadArray",
                value: function(e, t, i) {
                    I.activeShader = this, I.bindShader = this, y.useProgram(y.mainContext, this._program);
                    this._params;
                    for (var n, r, a = 0, s = t - 2; s >= 0; s -= 2)
                        (r = this._paramsMap[e[s]]) && null != (n = e[s + 1]) && (i && i[r.name] && i[r.name].bind(), a += r.fun.call(this, r, n));
                    G.shaderCall += a
                }
            }, {
                key: "getParams",
                value: function() {
                    return this._params
                }
            }, {
                key: "setAttributesLocation",
                value: function(e) {
                    this._attribInfo = e
                }
            }], [{
                key: "getShader",
                value: function(e) {
                    return Shader.sharders[e]
                }
            }, {
                key: "create",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return new Shader(e, t, i, n, r)
                }
            }, {
                key: "withCompile",
                value: function(e, t, i, n) {
                    if (i && Shader.sharders[i])
                        return Shader.sharders[i];
                    var r = Shader._preCompileShader[Shader.SHADERNAME2ID * e];
                    if (!r)
                        throw new Error("withCompile shader err!" + e);
                    return r.createShader(t, i, n, null)
                }
            }, {
                key: "withCompile2D",
                value: function(e, t, i, n, r) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    if (n && Shader.sharders[n])
                        return Shader.sharders[n];
                    var s = Shader._preCompileShader[Shader.SHADERNAME2ID * e + t];
                    if (!s)
                        throw new Error("withCompile shader err!" + e + " " + t);
                    return s.createShader(i, n, r, a)
                }
            }, {
                key: "addInclude",
                value: function(e, t) {
                    i.ShaderCompile.addInclude(e, t)
                }
            }, {
                key: "preCompile",
                value: function(e, t, n, r) {
                    var a = Shader.SHADERNAME2ID * e;
                    Shader._preCompileShader[a] = new i.ShaderCompile(t, n, r)
                }
            }, {
                key: "preCompile2D",
                value: function(e, t, n, r, a) {
                    var s = Shader.SHADERNAME2ID * e + t;
                    Shader._preCompileShader[s] = new i.ShaderCompile(n, r, a)
                }
            }, {
                key: "_createShader",
                value: function(e, t, i) {
                    var n = e.createShader(i);
                    return e.shaderSource(n, t), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) ? n : (console.log(e.getShaderInfoLog(n)), null)
                }
            }]), Shader
        }(I);
    W._count = 0, W._preCompileShader = {}, W.SHADERNAME2ID = 2e-4, W.nameKey = new U, W.sharders = new Array(32);
    var V = function(e) {
            function Shader2X(e, t) {
                var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return _classCallCheck(this, Shader2X), (i = _possibleConstructorReturn(this, _getPrototypeOf(Shader2X).call(this, e, t, n, r, a)))._params2dQuick2 = null, i._shaderValueWidth = 0, i._shaderValueHeight = 0, i
            }
            return _inherits(Shader2X, e), _createClass(Shader2X, [{
                key: "_disposeResource",
                value: function() {
                    _get(_getPrototypeOf(Shader2X.prototype), "_disposeResource", this).call(this), this._params2dQuick2 = null
                }
            }, {
                key: "upload2dQuick2",
                value: function(e) {
                    this.upload(e, this._params2dQuick2 || this._make2dQuick2())
                }
            }, {
                key: "_make2dQuick2",
                value: function() {
                    if (!this._params2dQuick2) {
                        this._params2dQuick2 = [];
                        for (var e, t = this._params, i = 0, n = t.length; i < n; i++)
                            "size" !== (e = t[i]).name && this._params2dQuick2.push(e)
                    }
                    return this._params2dQuick2
                }
            }], [{
                key: "create",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return new Shader2X(e, t, i, n, r)
                }
            }]), Shader2X
        }(W),
        Y = function() {
            function Value2D(e, t) {
                _classCallCheck(this, Value2D), this.defines = new N, this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, this._cacheID = 0, this.clipMatDir = [i.Context._MAXSIZE, 0, 0, i.Context._MAXSIZE], this.clipMatPos = [0, 0], this.clipOff = [0, 0], this.mainID = e, this.subID = t, this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, this.u_mmat2 = null, this._cacheID = e | t, this._inClassCache = Value2D._cache[this._cacheID], e > 0 && !this._inClassCache && (this._inClassCache = Value2D._cache[this._cacheID] = [], this._inClassCache._length = 0), this.clear()
            }
            return _createClass(Value2D, [{
                key: "setValue",
                value: function(e) {}
            }, {
                key: "_ShaderWithCompile",
                value: function() {
                    return W.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, V.create, this._attribLocation)
                }
            }, {
                key: "upload",
                value: function() {
                    var e = P;
                    P.worldMatrix4 === P.TEMPMAT4_ARRAY || this.defines.addInt(N.WORLDMAT), this.mmat = e.worldMatrix4, P.matWVP && (this.defines.addInt(N.MVP3D), this.u_MvpMatrix = P.matWVP.elements);
                    var t = W.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                    t._shaderValueWidth !== e.width || t._shaderValueHeight !== e.height ? (this.size[0] = e.width, this.size[1] = e.height, t._shaderValueWidth = e.width, t._shaderValueHeight = e.height, t.upload(this, null)) : t.upload(this, t._params2dQuick2 || t._make2dQuick2())
                }
            }, {
                key: "setFilters",
                value: function(e) {
                    if (this.filters = e, e)
                        for (var t, i = e.length, n = 0; n < i; n++)
                            (t = e[n]) && (this.defines.add(t.type), t.action.setValue(this))
                }
            }, {
                key: "clear",
                value: function() {
                    this.defines._value = this.subID, this.clipOff[0] = 0
                }
            }, {
                key: "release",
                value: function() {
                    --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0)
                }
            }], [{
                key: "_initone",
                value: function(e, t) {
                    Value2D._typeClass[e] = t, Value2D._cache[e] = [], Value2D._cache[e]._length = 0
                }
            }, {
                key: "__init__",
                value: function() {}
            }, {
                key: "create",
                value: function(e, t) {
                    var i = Value2D._cache[e | t];
                    return i._length ? i[--i._length] : new Value2D._typeClass[e | t](t)
                }
            }]), Value2D
        }();
    Y._cache = [], Y._typeClass = [], Y.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var H = function() {
            function SubmitKey() {
                _classCallCheck(this, SubmitKey), this.clear()
            }
            return _createClass(SubmitKey, [{
                key: "clear",
                value: function() {
                    this.submitType = -1, this.blendShader = this.other = 0
                }
            }, {
                key: "copyFrom",
                value: function(e) {
                    this.other = e.other, this.blendShader = e.blendShader, this.submitType = e.submitType
                }
            }, {
                key: "copyFrom2",
                value: function(e, t, i) {
                    this.other = i, this.submitType = t
                }
            }, {
                key: "equal3_2",
                value: function(e, t, i) {
                    return this.submitType === t && this.other === i && this.blendShader === e.blendShader
                }
            }, {
                key: "equal4_2",
                value: function(e, t, i) {
                    return this.submitType === t && this.other === i && this.blendShader === e.blendShader
                }
            }, {
                key: "equal_3",
                value: function(e) {
                    return this.submitType === e.submitType && this.blendShader === e.blendShader
                }
            }, {
                key: "equal",
                value: function(e) {
                    return this.other === e.other && this.submitType === e.submitType && this.blendShader === e.blendShader
                }
            }]), SubmitKey
        }(),
        X = function() {
            function SubmitCMD() {
                _classCallCheck(this, SubmitCMD), this._ref = 1, this._key = new H
            }
            return _createClass(SubmitCMD, [{
                key: "renderSubmit",
                value: function() {
                    return this.fun.apply(this._this, this.args), 1
                }
            }, {
                key: "getRenderType",
                value: function() {
                    return 0
                }
            }, {
                key: "releaseRender",
                value: function() {
                    if (--this._ref < 1) {
                        var e = SubmitCMD.POOL;
                        e[e._length++] = this
                    }
                }
            }], [{
                key: "create",
                value: function(e, t, i) {
                    var n = SubmitCMD.POOL._length ? SubmitCMD.POOL[--SubmitCMD.POOL._length] : new SubmitCMD;
                    return n.fun = t, n.args = e, n._this = i, n._ref = 1, n._key.clear(), n
                }
            }]), SubmitCMD
        }();
    X.POOL = [], X.POOL._length = 0;
    var z = function() {
        function Filter() {
            _classCallCheck(this, Filter)
        }
        return _createClass(Filter, [{
            key: "type",
            get: function() {
                return -1
            }
        }]), Filter
    }();
    z.BLUR = 16, z.COLOR = 32, z.GLOW = 8, z._filter = function(e, t, i, n) {
        var r = t,
            a = this._next;
        if (a) {
            var s = e.filters,
                o = s.length;
            if (1 == o && s[0].type == z.COLOR)
                return t.save(), t.setColorFilter(s[0]), a._fun.call(a, e, t, i, n), void t.restore();
            var l, h = Y.create(N.TEXTURE2D, 0),
                u = v.TEMP,
                c = r._curMat,
                _ = f.create();
            c.copyTo(_);
            var d = 0,
                g = 0,
                y = null,
                m = e._cacheStyle.filterCache || null;
            if (m && 0 == e.getRepaint()) {
                if ((e._cacheStyle.hasGlowFilter || !1) && (d = 50, g = 25), (l = e.getBounds()).width <= 0 || l.height <= 0)
                    return;
                l.width += d, l.height += d, u.x = l.x * _.a + l.y * _.c, u.y = l.y * _.d + l.x * _.b, l.x = u.x, l.y = u.y, u.x = l.width * _.a + l.height * _.c, u.y = l.height * _.d + l.width * _.b, l.width = u.x, l.height = u.y
            } else {
                e._isHaveGlowFilter() && (d = 50, g = 25), (l = new p).copyFrom(e.getSelfBounds()), l.x += e.x, l.y += e.y, l.x -= e.pivotX + 4, l.y -= e.pivotY + 4;
                var T = l.x,
                    C = l.y;
                if (l.width += d + 8, l.height += d + 8, u.x = l.x * _.a + l.y * _.c, u.y = l.y * _.d + l.x * _.b, l.x = u.x, l.y = u.y, u.x = l.width * _.a + l.height * _.c, u.y = l.height * _.d + l.width * _.b, l.width = u.x, l.height = u.y, l.width <= 0 || l.height <= 0)
                    return;
                m && B.releaseRT(m), y = B.getRT(l.width, l.height);
                var x = m = B.getRT(l.width, l.height);
                e._getCacheStyle().filterCache = m, r.pushRT(), r.useRT(y);
                var k = e.x - T + g,
                    S = e.y - C + g;
                a._fun.call(a, e, t, k, S), r.useRT(x);
                for (var R = 0; R < o; R++) {
                    0 != R && (r.useRT(y), r.drawTarget(x, 0, 0, l.width, l.height, f.TEMP.identity(), h, null, O.TOINT.overlay), r.useRT(x));
                    var b = s[R];
                    switch (b.type) {
                        case z.BLUR:
                        case z.GLOW:
                            b._glRender && b._glRender.render(y, t, l.width, l.height, b);
                            break;
                        case z.COLOR:
                            r.setColorFilter(b), r.drawTarget(y, 0, 0, l.width, l.height, f.EMPTY.identity(), Y.create(N.TEXTURE2D, 0)), r.setColorFilter(null)
                    }
                }
                r.popRT()
            }
            if (i = i - g - e.x, n = n - g - e.y, u.setTo(i, n), _.transformPoint(u), i = u.x + l.x, n = u.y + l.y, r._drawRenderTexture(m, i, n, l.width, l.height, f.TEMP.identity(), 1, D.defuv), y) {
                var E = X.create([y], (function(e) {
                    e.destroy()
                }), this);
                y = null, t.addRenderObject(E)
            }
            _.destroy()
        }
    };
    var K = function() {
        function Utils() {
            _classCallCheck(this, Utils)
        }
        return _createClass(Utils, null, [{
            key: "toRadian",
            value: function(e) {
                return e * Utils._pi2
            }
        }, {
            key: "toAngle",
            value: function(e) {
                return e * Utils._pi
            }
        }, {
            key: "toHexColor",
            value: function(e) {
                if (e < 0 || isNaN(e))
                    return null;
                for (var t = e.toString(16); t.length < 6;)
                    t = "0" + t;
                return "#" + t
            }
        }, {
            key: "getGID",
            value: function() {
                return Utils._gid++
            }
        }, {
            key: "concatArray",
            value: function(e, t) {
                if (!t)
                    return e;
                if (!e)
                    return t;
                var i, n = t.length;
                for (i = 0; i < n; i++)
                    e.push(t[i]);
                return e
            }
        }, {
            key: "clearArray",
            value: function(e) {
                return e ? (e.length = 0, e) : e
            }
        }, {
            key: "copyArray",
            value: function(e, t) {
                if (e || (e = []), !t)
                    return e;
                e.length = t.length;
                var i, n = t.length;
                for (i = 0; i < n; i++)
                    e[i] = t[i];
                return e
            }
        }, {
            key: "getGlobalRecByPoints",
            value: function(e, t, i, n, r) {
                var a, s;
                a = v.create().setTo(t, i), a = e.localToGlobal(a), s = v.create().setTo(n, r), s = e.localToGlobal(s);
                var o = p._getWrapRec([a.x, a.y, s.x, s.y]);
                return a.recover(), s.recover(), o
            }
        }, {
            key: "getGlobalPosAndScale",
            value: function(e) {
                return Utils.getGlobalRecByPoints(e, 0, 0, 1, 1)
            }
        }, {
            key: "bind",
            value: function(e, t) {
                return e.bind(t)
            }
        }, {
            key: "updateOrder",
            value: function(e) {
                if (!e || e.length < 2)
                    return !1;
                for (var t, i, n, r = 1, a = e.length; r < a;) {
                    for (n = e[t = r], i = e[t]._zOrder; --t > -1 && e[t]._zOrder > i;)
                        e[t + 1] = e[t];
                    e[t + 1] = n, r++
                }
                return !0
            }
        }, {
            key: "transPointList",
            value: function(e, t, i) {
                var n, r = e.length;
                for (n = 0; n < r; n += 2)
                    e[n] += t, e[n + 1] += i
            }
        }, {
            key: "parseInt",
            value: function(e) {
                function parseInt(t) {
                    return e.apply(this, arguments)
                }
                return parseInt.toString = function() {
                    return e.toString()
                }, parseInt
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = parseInt(e, t);
                return isNaN(i) ? 0 : i
            }))
        }, {
            key: "getFileExtension",
            value: function(e) {
                Utils._extReg.lastIndex = e.lastIndexOf(".");
                var t = Utils._extReg.exec(e);
                return t && t.length > 1 ? t[1].toLowerCase() : null
            }
        }, {
            key: "getTransformRelativeToWindow",
            value: function(e, t, i) {
                var n = Utils.gStage,
                    r = Utils.getGlobalPosAndScale(e),
                    a = n._canvasTransform.clone(),
                    s = a.tx,
                    o = a.ty;
                a.rotate(-Math.PI / 180 * n.canvasDegree), a.scale(n.clientScaleX, n.clientScaleY);
                var l, h, u, c, _ = n.canvasDegree % 180 != 0;
                return _ ? (l = i + r.y, h = t + r.x, l *= a.d, h *= a.a, 90 == n.canvasDegree ? (l = s - l, h += o) : (l += s, h = o - h)) : (l = t + r.x, h = i + r.y, l *= a.a, h *= a.d, l += s, h += o), h += n._safariOffsetY, _ ? (u = a.d * r.height, c = a.a * r.width) : (u = a.a * r.width, c = a.d * r.height), {
                    x: l,
                    y: h,
                    scaleX: u,
                    scaleY: c
                }
            }
        }, {
            key: "fitDOMElementInArea",
            value: function(e, t, i, n, r, a) {
                e._fitLayaAirInitialized || (e._fitLayaAirInitialized = !0, e.style.transformOrigin = e.style.webKittransformOrigin = "left top", e.style.position = "absolute");
                var s = Utils.getTransformRelativeToWindow(t, i, n);
                e.style.transform = e.style.webkitTransform = "scale(" + s.scaleX + "," + s.scaleY + ") rotate(" + Utils.gStage.canvasDegree + "deg)", e.style.width = r + "px", e.style.height = a + "px", e.style.left = s.x + "px", e.style.top = s.y + "px"
            }
        }, {
            key: "isOkTextureList",
            value: function(e) {
                if (!e)
                    return !1;
                var t, i, n = e.length;
                for (t = 0; t < n; t++)
                    if (!(i = e[t]) || !i._getSource())
                        return !1;
                return !0
            }
        }, {
            key: "isOKCmdList",
            value: function(e) {
                if (!e)
                    return !1;
                var t, i = e.length;
                for (t = 0; t < i; t++)
                    e[t];
                return !0
            }
        }, {
            key: "getQueryString",
            value: function(e) {
                if (i.Browser.onMiniGame)
                    return null;
                if (!window.location || !window.location.search)
                    return null;
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                    n = window.location.search.substr(1).match(t);
                return null != n ? unescape(n[2]) : null
            }
        }]), Utils
    }();
    K.gStage = null, K._gid = 1, K._pi = 180 / Math.PI, K._pi2 = Math.PI / 180, K._extReg = /\.(\w+)\??/g, K.parseXMLFromString = function(e) {
        var t;
        if (e = e.replace(/>\s+</g, "><"), (t = (new DOMParser).parseFromString(e, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1)
            throw new Error(t.firstChild.firstChild.textContent);
        return t
    };
    var j = function() {
        function ColorUtils(e) {
            if (_classCallCheck(this, ColorUtils), this.arrColor = [], null == e)
                return this.strColor = "#00000000", this.numColor = 0, void(this.arrColor = [0, 0, 0, 0]);
            var t, i, n;
            if ("string" == typeof e)
                if (e.indexOf("rgba(") >= 0 || e.indexOf("rgb(") >= 0) {
                    var r, a, s = e;
                    for (r = s.indexOf("("), a = s.indexOf(")"), s = s.substring(r + 1, a), this.arrColor = s.split(","), i = this.arrColor.length, t = 0; t < i; t++)
                        this.arrColor[t] = parseFloat(this.arrColor[t]), t < 3 && (this.arrColor[t] = Math.round(this.arrColor[t]));
                    n = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], this.strColor = e
                } else {
                    if (this.strColor = e, "#" === e.charAt(0) && (e = e.substr(1)), 3 === (i = e.length) || 4 === i) {
                        var o = "";
                        for (t = 0; t < i; t++)
                            o += e[t] + e[t];
                        e = o
                    }
                    n = parseInt(e, 16)
                }
            else
                n = e, this.strColor = K.toHexColor(n);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [((4278190080 & n) >>> 24) / 255, ((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255], this.numColor = (4278190080 & n) >>> 24 | (16711680 & n) >> 8 | (65280 & n) << 8 | (255 & n) << 24) : (this.arrColor = [((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255, 1], this.numColor = 4278190080 | (16711680 & n) >> 16 | 65280 & n | (255 & n) << 16), this.arrColor.__id = ++ColorUtils._COLODID
        }
        return _createClass(ColorUtils, null, [{
            key: "_initDefault",
            value: function() {
                for (var e in ColorUtils._DEFAULT = {}, ColorUtils._COLOR_MAP)
                    ColorUtils._SAVE[e] = ColorUtils._DEFAULT[e] = new ColorUtils(ColorUtils._COLOR_MAP[e]);
                return ColorUtils._DEFAULT
            }
        }, {
            key: "_initSaveMap",
            value: function() {
                for (var e in ColorUtils._SAVE_SIZE = 0, ColorUtils._SAVE = {}, ColorUtils._DEFAULT)
                    ColorUtils._SAVE[e] = ColorUtils._DEFAULT[e]
            }
        }, {
            key: "create",
            value: function(e) {
                var t = e + "",
                    i = ColorUtils._SAVE[t];
                return null != i ? i : (ColorUtils._SAVE_SIZE < 1e3 && ColorUtils._initSaveMap(), ColorUtils._SAVE[t] = new ColorUtils(e))
            }
        }]), ColorUtils
    }();
    j._SAVE = {}, j._SAVE_SIZE = 0, j._COLOR_MAP = {
        purple: "#800080",
        orange: "#ffa500",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        black: "#000000",
        yellow: "#FFFF00",
        gray: "#808080"
    }, j._DEFAULT = j._initDefault(), j._COLODID = 1;
    var Q = function(e) {
        function ColorFilter() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return _classCallCheck(this, ColorFilter), e = _possibleConstructorReturn(this, _getPrototypeOf(ColorFilter).call(this)), t || (t = e._copyMatrix(ColorFilter.IDENTITY_MATRIX)), e._mat = new Float32Array(16), e._alpha = new Float32Array(4), e.setByMatrix(t), e
        }
        return _inherits(ColorFilter, e), _createClass(ColorFilter, [{
            key: "gray",
            value: function() {
                return this.setByMatrix(ColorFilter.GRAY_MATRIX)
            }
        }, {
            key: "color",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                return this.setByMatrix([1, 0, 0, 0, e, 0, 1, 0, 0, t, 0, 0, 1, 0, i, 0, 0, 0, 1, n])
            }
        }, {
            key: "setColor",
            value: function(e) {
                var t = j.create(e).arrColor,
                    i = [0, 0, 0, 0, 256 * t[0], 0, 0, 0, 0, 256 * t[1], 0, 0, 0, 0, 256 * t[2], 0, 0, 0, 1, 0];
                return this.setByMatrix(i)
            }
        }, {
            key: "setByMatrix",
            value: function(e) {
                this._matrix != e && this._copyMatrix(e);
                for (var t = 0, i = 0, n = 0; n < 20; n++)
                    n % 5 != 4 ? this._mat[t++] = e[n] : this._alpha[i++] = e[n];
                return this
            }
        }, {
            key: "adjustColor",
            value: function(e, t, i, n) {
                return this.adjustHue(n), this.adjustContrast(t), this.adjustBrightness(e), this.adjustSaturation(i), this
            }
        }, {
            key: "adjustBrightness",
            value: function(e) {
                return 0 == (e = this._clampValue(e, 100)) || isNaN(e) ? this : this._multiplyMatrix([1, 0, 0, 0, e, 0, 1, 0, 0, e, 0, 0, 1, 0, e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }
        }, {
            key: "adjustContrast",
            value: function(e) {
                if (0 == (e = this._clampValue(e, 100)) || isNaN(e))
                    return this;
                var t, i = (t = e < 0 ? 127 + e / 100 * 127 : 127 * (t = 0 == (t = e % 1) ? ColorFilter.DELTA_INDEX[e] : ColorFilter.DELTA_INDEX[e << 0] * (1 - t) + ColorFilter.DELTA_INDEX[1 + (e << 0)] * t) + 127) / 127,
                    n = .5 * (127 - t);
                return this._multiplyMatrix([i, 0, 0, 0, n, 0, i, 0, 0, n, 0, 0, i, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }
        }, {
            key: "adjustSaturation",
            value: function(e) {
                if (0 == (e = this._clampValue(e, 100)) || isNaN(e))
                    return this;
                var t = 1 + (e > 0 ? 3 * e / 100 : e / 100),
                    i = 1 - t,
                    n = .3086 * i,
                    r = .6094 * i,
                    a = .082 * i;
                return this._multiplyMatrix([n + t, r, a, 0, 0, n, r + t, a, 0, 0, n, r, a + t, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }
        }, {
            key: "adjustHue",
            value: function(e) {
                if (0 == (e = this._clampValue(e, 180) / 180 * Math.PI) || isNaN(e))
                    return this;
                var t = Math.cos(e),
                    i = Math.sin(e),
                    n = .213,
                    r = .715,
                    a = .072;
                return this._multiplyMatrix([n + t * (1 - n) + i * -n, r + t * -r + i * -r, a + t * -a + i * (1 - a), 0, 0, n + t * -n + .143 * i, r + t * (1 - r) + .14 * i, a + t * -a + -.283 * i, 0, 0, n + t * -n + -.787 * i, r + t * -r + i * r, a + t * (1 - a) + i * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }
        }, {
            key: "reset",
            value: function() {
                return this.setByMatrix(this._copyMatrix(ColorFilter.IDENTITY_MATRIX))
            }
        }, {
            key: "_multiplyMatrix",
            value: function(e) {
                var t = [];
                this._matrix = this._fixMatrix(this._matrix);
                for (var i = 0; i < 5; i++) {
                    for (var n = 0; n < 5; n++)
                        t[n] = this._matrix[n + 5 * i];
                    for (n = 0; n < 5; n++) {
                        for (var r = 0, a = 0; a < 5; a++)
                            r += e[n + 5 * a] * t[a];
                        this._matrix[n + 5 * i] = r
                    }
                }
                return this.setByMatrix(this._matrix)
            }
        }, {
            key: "_clampValue",
            value: function(e, t) {
                return Math.min(t, Math.max(-t, e))
            }
        }, {
            key: "_fixMatrix",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null == e ? ColorFilter.IDENTITY_MATRIX : (e.length < ColorFilter.LENGTH ? e = e.slice(0, e.length).concat(ColorFilter.IDENTITY_MATRIX.slice(e.length, ColorFilter.LENGTH)) : e.length > ColorFilter.LENGTH && (e = e.slice(0, ColorFilter.LENGTH)), e)
            }
        }, {
            key: "_copyMatrix",
            value: function(e) {
                var t = ColorFilter.LENGTH;
                this._matrix || (this._matrix = []);
                for (var i = 0; i < t; i++)
                    this._matrix[i] = e[i];
                return this._matrix
            }
        }, {
            key: "type",
            get: function() {
                return z.COLOR
            }
        }]), ColorFilter
    }(z);
    Q.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], Q.GRAY_MATRIX = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0], Q.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], Q.LENGTH = 25;
    var q = function() {
        function DrawTextureCmd() {
            _classCallCheck(this, DrawTextureCmd), this.colorFlt = null, this.uv = null
        }
        return _createClass(DrawTextureCmd, [{
            key: "recover",
            value: function() {
                this.texture && this.texture._removeReference(), this.texture = null, this.matrix = null, n.recover("DrawTextureCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                this.texture && e.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, t, i, this.alpha, this.blendMode, this.colorFlt, this.uv)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawTextureCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l, h, u) {
                var c = n.getItemByClass("DrawTextureCmd", DrawTextureCmd);
                return c.texture = e, e._addReference(), c.x = t, c.y = i, c.width = r, c.height = a, c.matrix = s, c.alpha = o, c.color = l, c.blendMode = h, c.uv = null == u ? null : u, l && (c.colorFlt = new Q, c.colorFlt.setColor(l)), c
            }
        }]), DrawTextureCmd
    }();
    q.ID = "DrawTexture";
    var Z = function() {
        function FillTextureCmd() {
            _classCallCheck(this, FillTextureCmd)
        }
        return _createClass(FillTextureCmd, [{
            key: "recover",
            value: function() {
                this.texture = null, this.offset = null, this.other = null, n.recover("FillTextureCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.fillTexture(this.texture, this.x + t, this.y + i, this.width, this.height, this.type, this.offset, this.other)
            }
        }, {
            key: "cmdID",
            get: function() {
                return FillTextureCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l) {
                var h = n.getItemByClass("FillTextureCmd", FillTextureCmd);
                return h.texture = e, h.x = t, h.y = i, h.width = r, h.height = a, h.type = s, h.offset = o, h.other = l, h
            }
        }]), FillTextureCmd
    }();
    Z.ID = "FillTexture";
    var $ = function() {
        function RestoreCmd() {
            _classCallCheck(this, RestoreCmd)
        }
        return _createClass(RestoreCmd, [{
            key: "recover",
            value: function() {
                n.recover("RestoreCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.restore()
            }
        }, {
            key: "cmdID",
            get: function() {
                return RestoreCmd.ID
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("RestoreCmd", RestoreCmd)
            }
        }]), RestoreCmd
    }();
    $.ID = "Restore";
    var J = function() {
        function RotateCmd() {
            _classCallCheck(this, RotateCmd)
        }
        return _createClass(RotateCmd, [{
            key: "recover",
            value: function() {
                n.recover("RotateCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._rotate(this.angle, this.pivotX + t, this.pivotY + i)
            }
        }, {
            key: "cmdID",
            get: function() {
                return RotateCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i) {
                var r = n.getItemByClass("RotateCmd", RotateCmd);
                return r.angle = e, r.pivotX = t, r.pivotY = i, r
            }
        }]), RotateCmd
    }();
    J.ID = "Rotate";
    var ee = function() {
        function ScaleCmd() {
            _classCallCheck(this, ScaleCmd)
        }
        return _createClass(ScaleCmd, [{
            key: "recover",
            value: function() {
                n.recover("ScaleCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._scale(this.scaleX, this.scaleY, this.pivotX + t, this.pivotY + i)
            }
        }, {
            key: "cmdID",
            get: function() {
                return ScaleCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r) {
                var a = n.getItemByClass("ScaleCmd", ScaleCmd);
                return a.scaleX = e, a.scaleY = t, a.pivotX = i, a.pivotY = r, a
            }
        }]), ScaleCmd
    }();
    ee.ID = "Scale";
    var te = function() {
        function TransformCmd() {
            _classCallCheck(this, TransformCmd)
        }
        return _createClass(TransformCmd, [{
            key: "recover",
            value: function() {
                this.matrix = null, n.recover("TransformCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e._transform(this.matrix, this.pivotX + t, this.pivotY + i)
            }
        }, {
            key: "cmdID",
            get: function() {
                return TransformCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i) {
                var r = n.getItemByClass("TransformCmd", TransformCmd);
                return r.matrix = e, r.pivotX = t, r.pivotY = i, r
            }
        }]), TransformCmd
    }();
    te.ID = "Transform";
    var ie = function() {
        function TranslateCmd() {
            _classCallCheck(this, TranslateCmd)
        }
        return _createClass(TranslateCmd, [{
            key: "recover",
            value: function() {
                n.recover("TranslateCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.translate(this.tx, this.ty)
            }
        }, {
            key: "cmdID",
            get: function() {
                return TranslateCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t) {
                var i = n.getItemByClass("TranslateCmd", TranslateCmd);
                return i.tx = e, i.ty = t, i
            }
        }]), TranslateCmd
    }();
    ie.ID = "Translate";
    var ne = function() {
        function Bezier() {
            _classCallCheck(this, Bezier), this._controlPoints = [new v, new v, new v], this._calFun = this.getPoint2
        }
        return _createClass(Bezier, [{
            key: "_switchPoint",
            value: function(e, t) {
                var i = this._controlPoints.shift();
                i.setTo(e, t), this._controlPoints.push(i)
            }
        }, {
            key: "getPoint2",
            value: function(e, t) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    r = this._controlPoints[2],
                    a = Math.pow(1 - e, 2) * i.x + 2 * e * (1 - e) * n.x + Math.pow(e, 2) * r.x,
                    s = Math.pow(1 - e, 2) * i.y + 2 * e * (1 - e) * n.y + Math.pow(e, 2) * r.y;
                t.push(a, s)
            }
        }, {
            key: "getPoint3",
            value: function(e, t) {
                var i = this._controlPoints[0],
                    n = this._controlPoints[1],
                    r = this._controlPoints[2],
                    a = this._controlPoints[3],
                    s = Math.pow(1 - e, 3) * i.x + 3 * n.x * e * (1 - e) * (1 - e) + 3 * r.x * e * e * (1 - e) + a.x * Math.pow(e, 3),
                    o = Math.pow(1 - e, 3) * i.y + 3 * n.y * e * (1 - e) * (1 - e) + 3 * r.y * e * e * (1 - e) + a.y * Math.pow(e, 3);
                t.push(s, o)
            }
        }, {
            key: "insertPoints",
            value: function(e, t) {
                var i, n;
                for (n = 1 / (e = e > 0 ? e : 5), i = 0; i <= 1; i += n)
                    this._calFun(i, t)
            }
        }, {
            key: "getBezierPoints",
            value: function(e) {
                var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                if ((i = e.length) < 2 * (r + 1))
                    return [];
                var a = [];
                switch (r) {
                    case 2:
                        this._calFun = this.getPoint2;
                        break;
                    case 3:
                        this._calFun = this.getPoint3;
                        break;
                    default:
                        return []
                }
                for (; this._controlPoints.length <= r;)
                    this._controlPoints.push(v.create());
                for (t = 0; t < 2 * r; t += 2)
                    this._switchPoint(e[t], e[t + 1]);
                for (t = 2 * r; t < i; t += 2)
                    this._switchPoint(e[t], e[t + 1]), t / 2 % r == 0 && this.insertPoints(n, a);
                return a
            }
        }]), Bezier
    }();
    ne.I = new ne;
    var re = function() {
        function GrahamScan() {
            _classCallCheck(this, GrahamScan)
        }
        return _createClass(GrahamScan, null, [{
            key: "multiply",
            value: function(e, t, i) {
                return (e.x - i.x) * (t.y - i.y) - (t.x - i.x) * (e.y - i.y)
            }
        }, {
            key: "dis",
            value: function(e, t) {
                return (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)
            }
        }, {
            key: "_getPoints",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                for (GrahamScan._mPointList || (GrahamScan._mPointList = []); GrahamScan._mPointList.length < e;)
                    GrahamScan._mPointList.push(new v);
                return i || (i = []), i.length = 0, t ? GrahamScan.getFrom(i, GrahamScan._mPointList, e) : GrahamScan.getFromR(i, GrahamScan._mPointList, e), i
            }
        }, {
            key: "getFrom",
            value: function(e, t, i) {
                var n;
                for (n = 0; n < i; n++)
                    e.push(t[n]);
                return e
            }
        }, {
            key: "getFromR",
            value: function(e, t, i) {
                var n;
                for (n = 0; n < i; n++)
                    e.push(t.pop());
                return e
            }
        }, {
            key: "pListToPointList",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.length / 2,
                    r = GrahamScan._getPoints(n, i, GrahamScan._tempPointList);
                for (t = 0; t < n; t++)
                    r[t].setTo(e[t + t], e[t + t + 1]);
                return r
            }
        }, {
            key: "pointListToPlist",
            value: function(e) {
                var t, i, n = e.length,
                    r = GrahamScan._temPList;
                for (r.length = 0, t = 0; t < n; t++)
                    i = e[t], r.push(i.x, i.y);
                return r
            }
        }, {
            key: "scanPList",
            value: function(e) {
                return K.copyArray(e, GrahamScan.pointListToPlist(GrahamScan.scan(GrahamScan.pListToPointList(e, !0))))
            }
        }, {
            key: "scan",
            value: function(e) {
                var t, i, n, r, a, s = 0,
                    o = e.length,
                    l = {};
                for ((r = GrahamScan._temArr).length = 0, t = (o = e.length) - 1; t >= 0; t--)
                    (a = (n = e[t]).x + "_" + n.y) in l || (l[a] = !0, r.push(n));
                for (o = r.length, K.copyArray(e, r), t = 1; t < o; t++)
                    (e[t].y < e[s].y || e[t].y == e[s].y && e[t].x < e[s].x) && (s = t);
                for (n = e[0], e[0] = e[s], e[s] = n, t = 1; t < o - 1; t++) {
                    for (s = t, i = t + 1; i < o; i++)
                        (GrahamScan.multiply(e[i], e[s], e[0]) > 0 || 0 == GrahamScan.multiply(e[i], e[s], e[0]) && GrahamScan.dis(e[0], e[i]) < GrahamScan.dis(e[0], e[s])) && (s = i);
                    n = e[t], e[t] = e[s], e[s] = n
                }
                if ((r = GrahamScan._temArr).length = 0, e.length < 3)
                    return K.copyArray(r, e);
                for (r.push(e[0], e[1], e[2]), t = 3; t < o; t++) {
                    for (; r.length >= 2 && GrahamScan.multiply(e[t], r[r.length - 1], r[r.length - 2]) >= 0;)
                        r.pop();
                    e[t] && r.push(e[t])
                }
                return r
            }
        }]), GrahamScan
    }();
    re._tempPointList = [], re._temPList = [], re._temArr = [];
    var ae = function() {
        function DrawStyle(e) {
            _classCallCheck(this, DrawStyle), this.setValue(e)
        }
        return _createClass(DrawStyle, [{
            key: "setValue",
            value: function(e) {
                this._color = e ? e instanceof j ? e : j.create(e) : j.create("#000000")
            }
        }, {
            key: "reset",
            value: function() {
                this._color = j.create("#000000")
            }
        }, {
            key: "toInt",
            value: function() {
                return this._color.numColor
            }
        }, {
            key: "equal",
            value: function(e) {
                return "string" == typeof e ? this._color.strColor === e : e instanceof j && this._color.numColor === e.numColor
            }
        }, {
            key: "toColorStr",
            value: function() {
                return this._color.strColor
            }
        }], [{
            key: "create",
            value: function(e) {
                if (e) {
                    var t = e instanceof j ? e : j.create(e);
                    return t._drawStyle || (t._drawStyle = new DrawStyle(e))
                }
                return DrawStyle.DEFAULT
            }
        }]), DrawStyle
    }();
    ae.DEFAULT = new ae("#000000");
    var se = function() {
            function Path() {
                _classCallCheck(this, Path), this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null
            }
            return _createClass(Path, [{
                key: "beginPath",
                value: function(e) {
                    this.paths.length = 1, this._curPath = this.paths[0] = new oe, this._curPath.convex = e
                }
            }, {
                key: "closePath",
                value: function() {
                    this._curPath.loop = !0
                }
            }, {
                key: "newPath",
                value: function() {
                    this._curPath = new oe, this.paths.push(this._curPath)
                }
            }, {
                key: "addPoint",
                value: function(e, t) {
                    this._curPath.path.push(e, t)
                }
            }, {
                key: "push",
                value: function(e, t) {
                    this._curPath ? this._curPath.path.length > 0 && (this._curPath = new oe, this.paths.push(this._curPath)) : (this._curPath = new oe, this.paths.push(this._curPath));
                    var i = this._curPath;
                    i.path = e.slice(), i.convex = t
                }
            }, {
                key: "reset",
                value: function() {
                    this.paths.length = 0
                }
            }]), Path
        }(),
        oe = function renderPath() {
            _classCallCheck(this, renderPath), this.path = [], this.loop = !1, this.convex = !1
        },
        le = function() {
            function SubmitBase() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SubmitBase.TYPE_2D;
                _classCallCheck(this, SubmitBase), this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, this._parent = null, this._key = new H, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, this._renderType = e, this._id = ++SubmitBase.ID
            }
            return _createClass(SubmitBase, [{
                key: "getID",
                value: function() {
                    return this._id
                }
            }, {
                key: "getRenderType",
                value: function() {
                    return this._renderType
                }
            }, {
                key: "toString",
                value: function() {
                    return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key
                }
            }, {
                key: "renderSubmit",
                value: function() {
                    return 1
                }
            }, {
                key: "releaseRender",
                value: function() {}
            }], [{
                key: "__init__",
                value: function() {
                    var e = SubmitBase.RENDERBASE = new SubmitBase(-1);
                    e.shaderValue = new Y(0, 0), e.shaderValue.ALPHA = 1, e._ref = 4294967295
                }
            }]), SubmitBase
        }();
    le.TYPE_2D = 1e4, le.TYPE_CANVAS = 10003, le.TYPE_CMDSETRT = 10004, le.TYPE_CUSTOM = 10005, le.TYPE_BLURRT = 10006, le.TYPE_CMDDESTORYPRERT = 10007, le.TYPE_DISABLESTENCIL = 10008, le.TYPE_OTHERIBVB = 10009, le.TYPE_PRIMITIVE = 10010, le.TYPE_RT = 10011, le.TYPE_BLUR_RT = 10012, le.TYPE_TARGET = 10013, le.TYPE_CHANGE_VALUE = 10014, le.TYPE_SHAPE = 10015, le.TYPE_TEXTURE = 10016, le.TYPE_FILLTEXTURE = 10017, le.KEY_ONCE = -1, le.KEY_FILLRECT = 1, le.KEY_DRAWTEXTURE = 2, le.KEY_VG = 3, le.KEY_TRIANGLES = 4, le.ID = 1, le.preRender = null;
    var he = function() {
        function SaveBase() {
            _classCallCheck(this, SaveBase)
        }
        return _createClass(SaveBase, [{
            key: "isSaveMark",
            value: function() {
                return !1
            }
        }, {
            key: "restore",
            value: function(e) {
                this._dataObj[this._valueName] = this._value, SaveBase.POOL[SaveBase.POOL._length++] = this, this._newSubmit && (e._curSubmit = le.RENDERBASE)
            }
        }], [{
            key: "_createArray",
            value: function() {
                var e = [];
                return e._length = 0, e
            }
        }, {
            key: "_init",
            value: function() {
                var e = SaveBase._namemap = {};
                return e[SaveBase.TYPE_ALPHA] = "ALPHA", e[SaveBase.TYPE_FILESTYLE] = "fillStyle", e[SaveBase.TYPE_FONT] = "font", e[SaveBase.TYPE_LINEWIDTH] = "lineWidth", e[SaveBase.TYPE_STROKESTYLE] = "strokeStyle", e[SaveBase.TYPE_ENABLEMERGE] = "_mergeID", e[SaveBase.TYPE_MARK] = e[SaveBase.TYPE_TRANSFORM] = e[SaveBase.TYPE_TRANSLATE] = [], e[SaveBase.TYPE_TEXTBASELINE] = "textBaseline", e[SaveBase.TYPE_TEXTALIGN] = "textAlign", e[SaveBase.TYPE_GLOBALCOMPOSITEOPERATION] = "_nBlendType", e[SaveBase.TYPE_SHADER] = "shader", e[SaveBase.TYPE_FILTERS] = "filters", e[SaveBase.TYPE_COLORFILTER] = "_colorFiler", e
            }
        }, {
            key: "save",
            value: function(e, t, i, n) {
                if ((e._saveMark._saveuse & t) !== t) {
                    e._saveMark._saveuse |= t;
                    var r = SaveBase.POOL,
                        a = r._length > 0 ? r[--r._length] : new SaveBase;
                    a._value = i[a._valueName = SaveBase._namemap[t]], a._dataObj = i, a._newSubmit = n;
                    var s = e._save;
                    s[s._length++] = a
                }
            }
        }]), SaveBase
    }();
    he.TYPE_ALPHA = 1, he.TYPE_FILESTYLE = 2, he.TYPE_FONT = 8, he.TYPE_LINEWIDTH = 256, he.TYPE_STROKESTYLE = 512, he.TYPE_MARK = 1024, he.TYPE_TRANSFORM = 2048, he.TYPE_TRANSLATE = 4096, he.TYPE_ENABLEMERGE = 8192, he.TYPE_TEXTBASELINE = 16384, he.TYPE_TEXTALIGN = 32768, he.TYPE_GLOBALCOMPOSITEOPERATION = 65536, he.TYPE_CLIPRECT = 131072, he.TYPE_CLIPRECT_STENCIL = 262144, he.TYPE_IBVB = 524288, he.TYPE_SHADER = 1048576, he.TYPE_FILTERS = 2097152, he.TYPE_FILTERS_TYPE = 4194304, he.TYPE_COLORFILTER = 8388608, he.POOL = he._createArray(), he._namemap = he._init();
    var ue = function() {
        function SaveClipRect() {
            _classCallCheck(this, SaveClipRect), this._globalClipMatrix = new f, this._clipInfoID = -1, this._clipRect = new p, this.incache = !1
        }
        return _createClass(SaveClipRect, [{
            key: "isSaveMark",
            value: function() {
                return !1
            }
        }, {
            key: "restore",
            value: function(e) {
                this._globalClipMatrix.copyTo(e._globalClipMatrix), this._clipRect.clone(e._clipRect), e._clipInfoID = this._clipInfoID, SaveClipRect.POOL[SaveClipRect.POOL._length++] = this, e._clipInCache = this.incache
            }
        }], [{
            key: "save",
            value: function(e) {
                if ((e._saveMark._saveuse & he.TYPE_CLIPRECT) != he.TYPE_CLIPRECT) {
                    e._saveMark._saveuse |= he.TYPE_CLIPRECT;
                    var t = SaveClipRect.POOL,
                        i = t._length > 0 ? t[--t._length] : new SaveClipRect;
                    e._globalClipMatrix.copyTo(i._globalClipMatrix), e._clipRect.clone(i._clipRect), i._clipInfoID = e._clipInfoID, i.incache = e._clipInCache;
                    var n = e._save;
                    n[n._length++] = i
                }
            }
        }]), SaveClipRect
    }();
    ue.POOL = he._createArray();
    var ce = function() {
        function SaveMark() {
            _classCallCheck(this, SaveMark), this._saveuse = 0
        }
        return _createClass(SaveMark, [{
            key: "isSaveMark",
            value: function() {
                return !0
            }
        }, {
            key: "restore",
            value: function(e) {
                e._saveMark = this._preSaveMark, SaveMark.POOL[SaveMark.POOL._length++] = this
            }
        }], [{
            key: "Create",
            value: function(e) {
                var t = SaveMark.POOL,
                    i = t._length > 0 ? t[--t._length] : new SaveMark;
                return i._saveuse = 0, i._preSaveMark = e._saveMark, e._saveMark = i, i
            }
        }]), SaveMark
    }();
    ce.POOL = he._createArray();
    var _e = function() {
        function SaveTransform() {
            _classCallCheck(this, SaveTransform), this._matrix = new f
        }
        return _createClass(SaveTransform, [{
            key: "isSaveMark",
            value: function() {
                return !1
            }
        }, {
            key: "restore",
            value: function(e) {
                e._curMat = this._savematrix, SaveTransform.POOL[SaveTransform.POOL._length++] = this
            }
        }], [{
            key: "save",
            value: function(e) {
                var t = e._saveMark;
                if ((t._saveuse & he.TYPE_TRANSFORM) !== he.TYPE_TRANSFORM) {
                    t._saveuse |= he.TYPE_TRANSFORM;
                    var i = SaveTransform.POOL,
                        n = i._length > 0 ? i[--i._length] : new SaveTransform;
                    n._savematrix = e._curMat, e._curMat = e._curMat.copyTo(n._matrix);
                    var r = e._save;
                    r[r._length++] = n
                }
            }
        }]), SaveTransform
    }();
    _e.POOL = he._createArray();
    var de = function() {
        function SaveTranslate() {
            _classCallCheck(this, SaveTranslate), this._mat = new f
        }
        return _createClass(SaveTranslate, [{
            key: "isSaveMark",
            value: function() {
                return !1
            }
        }, {
            key: "restore",
            value: function(e) {
                this._mat.copyTo(e._curMat), SaveTranslate.POOL[SaveTranslate.POOL._length++] = this
            }
        }], [{
            key: "save",
            value: function(e) {
                var t = SaveTranslate.POOL,
                    i = t._length > 0 ? t[--t._length] : new SaveTranslate;
                e._curMat.copyTo(i._mat);
                var n = e._save;
                n[n._length++] = i
            }
        }]), SaveTranslate
    }();
    de.POOL = he._createArray();
    var fe = function() {
            function BufferStateBase() {
                _classCallCheck(this, BufferStateBase), this._nativeVertexArrayObject = g.layaGPUInstance.createVertexArray()
            }
            return _createClass(BufferStateBase, [{
                key: "bind",
                value: function() {
                    BufferStateBase._curBindedBufferState !== this && (g.layaGPUInstance.bindVertexArray(this._nativeVertexArrayObject), BufferStateBase._curBindedBufferState = this)
                }
            }, {
                key: "unBind",
                value: function() {
                    if (BufferStateBase._curBindedBufferState !== this)
                        throw "BufferState: must call bind() function first.";
                    g.layaGPUInstance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null
                }
            }, {
                key: "destroy",
                value: function() {
                    g.layaGPUInstance.deleteVertexArray(this._nativeVertexArrayObject)
                }
            }, {
                key: "bindForNative",
                value: function() {
                    g.instance.bindVertexArray(this._nativeVertexArrayObject), BufferStateBase._curBindedBufferState = this
                }
            }, {
                key: "unBindForNative",
                value: function() {
                    g.instance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null
                }
            }]), BufferStateBase
        }(),
        ve = function(e) {
            function BufferState2D() {
                return _classCallCheck(this, BufferState2D), _possibleConstructorReturn(this, _getPrototypeOf(BufferState2D).call(this))
            }
            return _inherits(BufferState2D, e), BufferState2D
        }(fe),
        pe = function() {
            function Buffer() {
                _classCallCheck(this, Buffer), this._byteLength = 0, this._glBuffer = g.instance.createBuffer()
            }
            return _createClass(Buffer, [{
                key: "_bindForVAO",
                value: function() {}
            }, {
                key: "bind",
                value: function() {
                    return !1
                }
            }, {
                key: "destroy",
                value: function() {
                    this._glBuffer && (g.instance.deleteBuffer(this._glBuffer), this._glBuffer = null)
                }
            }, {
                key: "bufferUsage",
                get: function() {
                    return this._bufferUsage
                }
            }]), Buffer
        }(),
        ge = function RenderInfo() {
            _classCallCheck(this, RenderInfo)
        };
    ge.loopStTm = 0, ge.loopCount = 0;
    var ye = function(e) {
        function Buffer2D() {
            var e;
            return _classCallCheck(this, Buffer2D), (e = _possibleConstructorReturn(this, _getPrototypeOf(Buffer2D).call(this)))._maxsize = 0, e._upload = !0, e._uploadSize = 0, e._bufferSize = 0, e._u8Array = null, e
        }
        return _inherits(Buffer2D, e), _createClass(Buffer2D, [{
            key: "setByteLength",
            value: function(e) {
                this._byteLength !== e && (e <= this._bufferSize || this._resizeBuffer(2 * e + 256, !0), this._byteLength = e)
            }
        }, {
            key: "needSize",
            value: function(e) {
                var t = this._byteLength;
                if (e) {
                    var i = this._byteLength + e;
                    i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i
                }
                return t
            }
        }, {
            key: "_bufferData",
            value: function() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), ge.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, g.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), g.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength))
            }
        }, {
            key: "_bufferSubData",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (this._maxsize = Math.max(this._maxsize, this._byteLength), ge.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, g.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), t || i) {
                    var n = this._buffer.slice(t, i);
                    g.instance.bufferSubData(this._bufferType, e, n)
                } else
                    g.instance.bufferSubData(this._bufferType, e, this._buffer)
            }
        }, {
            key: "_checkArrayUse",
            value: function() {}
        }, {
            key: "_bind_uploadForVAO",
            value: function() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0)
            }
        }, {
            key: "_bind_upload",
            value: function() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0)
            }
        }, {
            key: "_bind_subUpload",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(e, t, i), !0)
            }
        }, {
            key: "_resizeBuffer",
            value: function(e, t) {
                var i = this._buffer;
                if (e <= i.byteLength)
                    return this;
                var n = this._u8Array;
                if (t && i && i.byteLength > 0) {
                    var r = new ArrayBuffer(e),
                        a = n && n.buffer == i ? n : new Uint8Array(i);
                    (n = this._u8Array = new Uint8Array(r)).set(a, 0), i = this._buffer = r
                } else
                    i = this._buffer = new ArrayBuffer(e), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, this
            }
        }, {
            key: "append",
            value: function(e) {
                var t, i;
                this._upload = !0, t = e.byteLength, e instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + t, !0), i = new Uint8Array(this._buffer, this._byteLength)) : e instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + t, !0), i = new Uint16Array(this._buffer, this._byteLength)) : e instanceof Float32Array && (this._resizeBuffer(this._byteLength + t, !0), i = new Float32Array(this._buffer, this._byteLength)), i.set(e, 0), this._byteLength += t, this._checkArrayUse()
            }
        }, {
            key: "appendU16Array",
            value: function(e, t) {
                this._resizeBuffer(this._byteLength + 2 * t, !0);
                var i = new Uint16Array(this._buffer, this._byteLength, t);
                if (6 == t)
                    i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = e[4], i[5] = e[5];
                else if (t >= 100)
                    i.set(new Uint16Array(e.buffer, 0, t));
                else
                    for (var n = 0; n < t; n++)
                        i[n] = e[n];
                this._byteLength += 2 * t, this._checkArrayUse()
            }
        }, {
            key: "appendEx",
            value: function(e, t) {
                var i;
                this._upload = !0, i = e.byteLength, this._resizeBuffer(this._byteLength + i, !0), new t(this._buffer, this._byteLength).set(e, 0), this._byteLength += i, this._checkArrayUse()
            }
        }, {
            key: "appendEx2",
            value: function(e, t, i) {
                var n, r, a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                for (this._upload = !0, n = i * s, this._resizeBuffer(this._byteLength + n, !0), r = new t(this._buffer, this._byteLength), a = 0; a < i; a++)
                    r[a] = e[a];
                this._byteLength += n, this._checkArrayUse()
            }
        }, {
            key: "getBuffer",
            value: function() {
                return this._buffer
            }
        }, {
            key: "setNeedUpload",
            value: function() {
                this._upload = !0
            }
        }, {
            key: "getNeedUpload",
            value: function() {
                return this._upload
            }
        }, {
            key: "upload",
            value: function() {
                var e = g.instance,
                    t = this._bind_upload();
                return e.bindBuffer(this._bufferType, null), this._bufferType == e.ARRAY_BUFFER && (pe._bindedVertexBuffer = null), this._bufferType == e.ELEMENT_ARRAY_BUFFER && (pe._bindedIndexBuffer = null), I.activeShader = null, t
            }
        }, {
            key: "subUpload",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                var e = g.instance,
                    t = this._bind_subUpload();
                return e.bindBuffer(this._bufferType, null), this._bufferType == e.ARRAY_BUFFER && (pe._bindedVertexBuffer = null), this._bufferType == e.ELEMENT_ARRAY_BUFFER && (pe._bindedIndexBuffer = null), I.activeShader = null, t
            }
        }, {
            key: "_disposeResource",
            value: function() {
                this._upload = !0, this._uploadSize = 0
            }
        }, {
            key: "clear",
            value: function() {
                this._byteLength = 0, this._upload = !0
            }
        }, {
            key: "bufferLength",
            get: function() {
                return this._buffer.byteLength
            }
        }, {
            key: "byteLength",
            set: function(e) {
                this.setByteLength(e)
            }
        }], [{
            key: "__int__",
            value: function(e) {}
        }]), Buffer2D
    }(pe);
    ye.FLOAT32 = 4, ye.SHORT = 2;
    var me = function(e) {
        function IndexBuffer2D() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 35044;
            return _classCallCheck(this, IndexBuffer2D), (e = _possibleConstructorReturn(this, _getPrototypeOf(IndexBuffer2D).call(this)))._bufferUsage = t, e._bufferType = g.instance.ELEMENT_ARRAY_BUFFER, e._buffer = new ArrayBuffer(8), e
        }
        return _inherits(IndexBuffer2D, e), _createClass(IndexBuffer2D, [{
            key: "_checkArrayUse",
            value: function() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer))
            }
        }, {
            key: "getUint16Array",
            value: function() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer))
            }
        }, {
            key: "_bindForVAO",
            value: function() {
                var e = g.instance;
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer)
            }
        }, {
            key: "bind",
            value: function() {
                if (pe._bindedIndexBuffer !== this._glBuffer) {
                    var e = g.instance;
                    return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer), pe._bindedIndexBuffer = this._glBuffer, !0
                }
                return !1
            }
        }, {
            key: "destory",
            value: function() {
                this._uint16Array = null, this._buffer = null
            }
        }, {
            key: "disposeResource",
            value: function() {
                this._disposeResource()
            }
        }]), IndexBuffer2D
    }(ye);
    me.create = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 35044;
        return new me(e)
    };
    var Te = function(e) {
        function VertexBuffer2D(e, t) {
            var i;
            return _classCallCheck(this, VertexBuffer2D), (i = _possibleConstructorReturn(this, _getPrototypeOf(VertexBuffer2D).call(this)))._vertexStride = e, i._bufferUsage = t, i._bufferType = g.instance.ARRAY_BUFFER, i._buffer = new ArrayBuffer(8), i._floatArray32 = new Float32Array(i._buffer), i._uint32Array = new Uint32Array(i._buffer), i
        }
        return _inherits(VertexBuffer2D, e), _createClass(VertexBuffer2D, [{
            key: "getFloat32Array",
            value: function() {
                return this._floatArray32
            }
        }, {
            key: "appendArray",
            value: function(e) {
                var t = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * e.length), this.getFloat32Array().set(e, t), this._upload = !0
            }
        }, {
            key: "_checkArrayUse",
            value: function() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer))
            }
        }, {
            key: "deleteBuffer",
            value: function() {
                _get(_getPrototypeOf(VertexBuffer2D.prototype), "_disposeResource", this).call(this)
            }
        }, {
            key: "_bindForVAO",
            value: function() {
                var e = g.instance;
                e.bindBuffer(e.ARRAY_BUFFER, this._glBuffer)
            }
        }, {
            key: "bind",
            value: function() {
                if (pe._bindedVertexBuffer !== this._glBuffer) {
                    var e = g.instance;
                    return e.bindBuffer(e.ARRAY_BUFFER, this._glBuffer), pe._bindedVertexBuffer = this._glBuffer, !0
                }
                return !1
            }
        }, {
            key: "destroy",
            value: function() {
                _get(_getPrototypeOf(VertexBuffer2D.prototype), "destroy", this).call(this), this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null
            }
        }, {
            key: "vertexStride",
            get: function() {
                return this._vertexStride
            }
        }]), VertexBuffer2D
    }(ye);
    Te.create = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 35048;
        return new Te(e, t)
    };
    var Ce = function() {
        function Mesh2D(e, i, n) {
            _classCallCheck(this, Mesh2D), this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._quadNum = 0, this.canReuse = !1, this._stride = e, this._vb = new Te(e, g.instance.DYNAMIC_DRAW), i ? this._vb._resizeBuffer(i, !1) : t.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * e, !1), this._ib = new me, n && this._ib._resizeBuffer(n, !1)
        }
        return _createClass(Mesh2D, [{
            key: "cloneWithNewVB",
            value: function() {
                var e = new Mesh2D(this._stride, 0, 0);
                return e._ib = this._ib, e._quadNum = this._quadNum, e._attribInfo = this._attribInfo, e
            }
        }, {
            key: "cloneWithNewVBIB",
            value: function() {
                var e = new Mesh2D(this._stride, 0, 0);
                return e._attribInfo = this._attribInfo, e
            }
        }, {
            key: "getVBW",
            value: function() {
                return this._vb.setNeedUpload(), this._vb
            }
        }, {
            key: "getVBR",
            value: function() {
                return this._vb
            }
        }, {
            key: "getIBR",
            value: function() {
                return this._ib
            }
        }, {
            key: "getIBW",
            value: function() {
                return this._ib.setNeedUpload(), this._ib
            }
        }, {
            key: "createQuadIB",
            value: function(e) {
                this._quadNum = e, this._ib._resizeBuffer(6 * e * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var t = this._ib.getUint16Array(), i = 0, n = 0, r = 0; r < e; r++)
                    t[i++] = n, t[i++] = n + 2, t[i++] = n + 1, t[i++] = n, t[i++] = n + 3, t[i++] = n + 2, n += 4;
                this._ib.setNeedUpload()
            }
        }, {
            key: "setAttributes",
            value: function(e) {
                if (this._attribInfo = e, this._attribInfo.length % 3 != 0)
                    throw "Mesh2D setAttributes error!"
            }
        }, {
            key: "configVAO",
            value: function(e) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new ve), this._vao.bind(), this._vb._bindForVAO(), this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var t = this._attribInfo.length / 3, i = 0, n = 0; n < t; n++) {
                        var r = this._attribInfo[i + 1],
                            a = this._attribInfo[i],
                            s = this._attribInfo[i + 2];
                        e.enableVertexAttribArray(n), e.vertexAttribPointer(n, r, a, !1, this._stride, s), i += 3
                    }
                    this._vao.unBind()
                }
            }
        }, {
            key: "useMesh",
            value: function(e) {
                this._applied || this.configVAO(e), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), this._vb._bind_upload() || this._vb.bind()
            }
        }, {
            key: "getEleNum",
            value: function() {
                return this._ib.getBuffer().byteLength / 2
            }
        }, {
            key: "releaseMesh",
            value: function() {}
        }, {
            key: "destroy",
            value: function() {}
        }, {
            key: "clearVB",
            value: function() {
                this._vb.clear()
            }
        }]), Mesh2D
    }();
    Ce._gvaoid = 0;
    var xe = function(e) {
        function MeshQuadTexture() {
            var e;
            return _classCallCheck(this, MeshQuadTexture), (e = _possibleConstructorReturn(this, _getPrototypeOf(MeshQuadTexture).call(this, MeshQuadTexture.const_stride, 4, 4))).canReuse = !0, e.setAttributes(MeshQuadTexture._fixattriInfo), MeshQuadTexture._fixib ? (e._ib = MeshQuadTexture._fixib, e._quadNum = MeshQuadTexture._maxIB) : (e.createQuadIB(MeshQuadTexture._maxIB), MeshQuadTexture._fixib = e._ib), e
        }
        return _inherits(MeshQuadTexture, e), _createClass(MeshQuadTexture, [{
            key: "releaseMesh",
            value: function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, MeshQuadTexture._POOL.push(this)
            }
        }, {
            key: "destroy",
            value: function() {
                this._vb.destroy(), this._vb.deleteBuffer()
            }
        }, {
            key: "addQuad",
            value: function(e, t, i, n) {
                var r = this._vb,
                    a = r._byteLength >> 2;
                r.setByteLength(a + MeshQuadTexture.const_stride << 2);
                var s = r._floatArray32 || r.getFloat32Array(),
                    o = r._uint32Array,
                    l = a,
                    h = n ? 255 : 0;
                s[l++] = e[0], s[l++] = e[1], s[l++] = t[0], s[l++] = t[1], o[l++] = i, o[l++] = h, s[l++] = e[2], s[l++] = e[3], s[l++] = t[2], s[l++] = t[3], o[l++] = i, o[l++] = h, s[l++] = e[4], s[l++] = e[5], s[l++] = t[4], s[l++] = t[5], o[l++] = i, o[l++] = h, s[l++] = e[6], s[l++] = e[7], s[l++] = t[6], s[l++] = t[7], o[l++] = i, o[l++] = h, r._upload = !0
            }
        }], [{
            key: "__int__",
            value: function() {
                MeshQuadTexture._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }
        }, {
            key: "getAMesh",
            value: function(e) {
                var t = null;
                return t = MeshQuadTexture._POOL.length ? MeshQuadTexture._POOL.pop() : new MeshQuadTexture, e && t._vb._resizeBuffer(65536 * MeshQuadTexture.const_stride, !1), t
            }
        }]), MeshQuadTexture
    }(Ce);
    xe.const_stride = 24, xe._maxIB = 16384, xe._POOL = [];
    var ke = function(e) {
        function MeshTexture() {
            var e;
            return _classCallCheck(this, MeshTexture), (e = _possibleConstructorReturn(this, _getPrototypeOf(MeshTexture).call(this, MeshTexture.const_stride, 4, 4))).canReuse = !0, e.setAttributes(MeshTexture._fixattriInfo), e
        }
        return _inherits(MeshTexture, e), _createClass(MeshTexture, [{
            key: "addData",
            value: function(e, t, i, n, r) {
                var a = this._vb,
                    s = this._ib,
                    o = e.length >> 1,
                    l = a.needSize(o * MeshTexture.const_stride) >> 2,
                    h = a._floatArray32 || a.getFloat32Array(),
                    u = a._uint32Array,
                    c = 0,
                    _ = n.a,
                    d = n.b,
                    f = n.c,
                    v = n.d,
                    p = n.tx,
                    g = n.ty,
                    y = 0;
                for (y = 0; y < o; y++) {
                    var m = e[c],
                        T = e[c + 1];
                    h[l] = m * _ + T * f + p, h[l + 1] = m * d + T * v + g, h[l + 2] = t[c], h[l + 3] = t[c + 1], u[l + 4] = r, u[l + 5] = 255, l += 6, c += 2
                }
                a.setNeedUpload();
                var C = this.vertNum,
                    x = i.length,
                    k = s.needSize(i.byteLength),
                    S = s.getUint16Array(),
                    R = k >> 1;
                if (C > 0) {
                    var b = R + x,
                        E = 0;
                    for (y = R; y < b; y++, E++)
                        S[y] = i[E] + C
                } else
                    S.set(i, R);
                s.setNeedUpload(), this.vertNum += o, this.indexNum += i.length
            }
        }, {
            key: "releaseMesh",
            value: function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, MeshTexture._POOL.push(this)
            }
        }, {
            key: "destroy",
            value: function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }
        }], [{
            key: "__init__",
            value: function() {
                MeshTexture._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }
        }, {
            key: "getAMesh",
            value: function(e) {
                var t;
                return t = MeshTexture._POOL.length ? MeshTexture._POOL.pop() : new MeshTexture, e && t._vb._resizeBuffer(65536 * MeshTexture.const_stride, !1), t
            }
        }]), MeshTexture
    }(Ce);
    ke.const_stride = 24, ke._POOL = [];
    var Se = function(e) {
        function MeshVG() {
            var e;
            return _classCallCheck(this, MeshVG), (e = _possibleConstructorReturn(this, _getPrototypeOf(MeshVG).call(this, MeshVG.const_stride, 4, 4))).canReuse = !0, e.setAttributes(MeshVG._fixattriInfo), e
        }
        return _inherits(MeshVG, e), _createClass(MeshVG, [{
            key: "addVertAndIBToMesh",
            value: function(e, t, i, n) {
                for (var r = this._vb.needSize(t.length / 2 * MeshVG.const_stride) >> 2, a = this._vb._floatArray32 || this._vb.getFloat32Array(), s = this._vb._uint32Array, o = 0, l = t.length / 2, h = 0; h < l; h++)
                    a[r++] = t[o], a[r++] = t[o + 1], o += 2, s[r++] = i;
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(n)), this._ib.setNeedUpload(), this.vertNum += l, this.indexNum += n.length
            }
        }, {
            key: "releaseMesh",
            value: function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, MeshVG._POOL.push(this)
            }
        }, {
            key: "destroy",
            value: function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }
        }], [{
            key: "__init__",
            value: function() {
                MeshVG._fixattriInfo = [5126, 2, 0, 5121, 4, 8]
            }
        }, {
            key: "getAMesh",
            value: function(e) {
                var t;
                return t = MeshVG._POOL.length ? MeshVG._POOL.pop() : new MeshVG, e && t._vb._resizeBuffer(65536 * MeshVG.const_stride, !1), t
            }
        }]), MeshVG
    }(Ce);
    Se.const_stride = 12, Se._POOL = [];
    var Re = function() {
        function WebGLCacheAsNormalCanvas(e, t) {
            _classCallCheck(this, WebGLCacheAsNormalCanvas), this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], this.submits = [], this.sprite = null, this.meshlist = [], this.cachedClipInfo = new f, this.oldTx = 0, this.oldTy = 0, this.invMat = new f, this.context = e, this.sprite = t, e._globalClipMatrix.copyTo(this.cachedClipInfo)
        }
        return _createClass(WebGLCacheAsNormalCanvas, [{
            key: "startRec",
            value: function() {
                this.context._charSubmitCache._enable && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), this.submits.length = 0, this.submitStartPos = this.context._submits._length;
                for (var e = 0, t = this.meshlist.length; e < t; e++) {
                    var i = this.meshlist[e];
                    i.canReuse ? i.releaseMesh() : i.destroy()
                }
                this.meshlist.length = 0, this._mesh = xe.getAMesh(!1), this._pathMesh = Se.getAMesh(!1), this._triangleMesh = ke.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), this.meshlist.push(this._triangleMesh), this.context._curSubmit = le.RENDERBASE, this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), this.invMat.invert()
            }
        }, {
            key: "endRec",
            value: function() {
                this.context._charSubmitCache._enable && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context));
                var e = this.context._submits;
                this.submitEndPos = e._length;
                for (var t = this.submitEndPos - this.submitStartPos, i = 0; i < t; i++)
                    this.submits.push(e[this.submitStartPos + i]);
                e._length -= t, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, this.context._curSubmit = le.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, this.context.touches = null, this.context._incache = !1
            }
        }, {
            key: "isCacheValid",
            value: function() {
                var e = this.context._globalClipMatrix;
                return e.a == this.cachedClipInfo.a && e.b == this.cachedClipInfo.b && e.c == this.cachedClipInfo.c && e.d == this.cachedClipInfo.d && e.tx == this.cachedClipInfo.tx && e.ty == this.cachedClipInfo.ty
            }
        }, {
            key: "flushsubmit",
            value: function() {
                var e = le.RENDERBASE;
                this.submits.forEach((function(t) {
                    t != le.RENDERBASE && (le.preRender = e, e = t, t.renderSubmit())
                }))
            }
        }, {
            key: "releaseMem",
            value: function() {}
        }]), WebGLCacheAsNormalCanvas
    }();
    Re.matI = new f;
    var be = function() {
            function Shader2D() {
                _classCallCheck(this, Shader2D), this.ALPHA = 1, this.defines = new N, this.shaderType = 0, this.fillStyle = ae.DEFAULT, this.strokeStyle = ae.DEFAULT
            }
            return _createClass(Shader2D, [{
                key: "destroy",
                value: function() {
                    this.defines = null, this.filters = null
                }
            }], [{
                key: "__init__",
                value: function() {
                    W.preCompile2D(0, N.TEXTURE2D, "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\nattribute vec4 posuv;\r\nattribute vec4 attribColor;\r\nattribute vec4 attribFlags;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\r\nvarying vec2 cliped;\r\nuniform vec2 size;\r\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\n#ifdef MVP3D\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\n\r\nvoid main() {\r\n\r\n\tvec4 pos = vec4(posuv.xy,0.,1.);\r\n#ifdef WORLDMAT\r\n\tpos=mmat*pos;\r\n#endif\r\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\r\n#ifdef MVP3D\r\n\tgl_Position=u_MvpMatrix*pos1;\r\n#else\r\n\tgl_Position=pos1;\r\n#endif\r\n\tv_texcoordAlpha.xy = posuv.zw;\r\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\r\n\tv_color = attribColor/255.0;\r\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\r\n\t\r\n\tv_useTex = attribFlags.r/255.0;\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\t\r\n\tvec2 clpos = clipMatPos.xy;\r\n\t#ifdef WORLDMAT\r\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\r\n\t\tif(clipOff[0]>0.0){\r\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\r\n\t\t\tclpos.y+=mmat[3].y;\t//ty\r\n\t\t}\r\n\t#endif\r\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n\r\n}", "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\n#ifdef GL_FRAGMENT_PRECISION_HIGH\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\nuniform sampler2D texture;\r\nvarying vec2 cliped;\r\n\r\n#ifdef BLUR_FILTER\r\nuniform vec4 strength_sig2_2sig2_gauss1;\r\nuniform vec2 blurInfo;\r\n\r\n#define PI 3.141593\r\n\r\nfloat getGaussian(float x, float y){\r\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\r\n}\r\n\r\nvec4 blur(){\r\n    const float blurw = 9.0;\r\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \r\n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\r\n    vec2 ctexcoord = startpos;\r\n    vec2 step = 1.0/blurInfo;  //每个像素      \r\n    \r\n    for(float y = 0.0;y<=blurw; ++y){\r\n        ctexcoord.x=startpos.x;\r\n        for(float x = 0.0;x<=blurw; ++x){\r\n            //TODO 纹理坐标的固定偏移应该在vs中处理\r\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\r\n            ctexcoord.x+=step.x;\r\n        }\r\n        ctexcoord.y+=step.y;\r\n    }\r\n    return vec4Color;\r\n}\r\n#endif\r\n\r\n#ifdef COLOR_FILTER\r\nuniform vec4 colorAlpha;\r\nuniform mat4 colorMat;\r\n#endif\r\n\r\n#ifdef GLOW_FILTER\r\nuniform vec4 u_color;\r\nuniform vec4 u_blurInfo1;\r\nuniform vec4 u_blurInfo2;\r\n#endif\r\n\r\n#ifdef COLOR_ADD\r\nuniform vec4 colorAdd;\r\n#endif\r\n\r\n#ifdef FILLTEXTURE\t\r\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\r\n#endif\r\nvoid main() {\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n\t\r\n#ifdef FILLTEXTURE\t\r\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\r\n#else\r\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\r\n#endif\r\n\r\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\r\n   color.a*=v_color.w;\r\n   //color.rgb*=v_color.w;\r\n   color.rgb*=v_color.rgb;\r\n   gl_FragColor=color;\r\n   \r\n   #ifdef COLOR_ADD\r\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\r\n\tgl_FragColor.xyz *= colorAdd.a;\r\n   #endif\r\n   \r\n   #ifdef BLUR_FILTER\r\n\tgl_FragColor =   blur();\r\n\tgl_FragColor.w*=v_color.w;   \r\n   #endif\r\n   \r\n   #ifdef COLOR_FILTER\r\n\tmat4 alphaMat =colorMat;\r\n\r\n\talphaMat[0][3] *= gl_FragColor.a;\r\n\talphaMat[1][3] *= gl_FragColor.a;\r\n\talphaMat[2][3] *= gl_FragColor.a;\r\n\r\n\tgl_FragColor = gl_FragColor * alphaMat;\r\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\r\n   #endif\r\n   \r\n   #ifdef GLOW_FILTER\r\n\tconst float c_IterationTime = 10.0;\r\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\r\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\r\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\r\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\r\n\tvec2 vec2Off = vec2(0.0,0.0);\r\n\tfloat floatOff = c_IterationTime/2.0;\r\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\r\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\r\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\r\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\r\n\t\t}\r\n\t}\r\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\r\n\tgl_FragColor.rgb *= gl_FragColor.a;   \r\n   #endif\r\n   \r\n}", null), W.preCompile2D(0, N.PRIMITIVE, "attribute vec4 position;\r\nattribute vec4 attribColor;\r\n//attribute vec4 clipDir;\r\n//attribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\r\n#ifdef WORLDMAT\r\n\tuniform mat4 mmat;\r\n#endif\r\nuniform mat4 u_mmat2;\r\n//uniform vec2 u_pos;\r\nuniform vec2 size;\r\nvarying vec4 color;\r\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\r\n//vec4 clip=vec4(100.,30.,300.,600.);\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t\r\n#ifdef WORLDMAT\r\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\r\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n#else\r\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\r\n#endif\t\r\n\tfloat clipw = length(clipMatDir.xy);\r\n\tfloat cliph = length(clipMatDir.zw);\r\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\r\n\tif(clipw>20000. && cliph>20000.)\r\n\t\tcliped = vec2(0.5,0.5);\r\n\telse {\r\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\r\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n\t}\r\n  //pos2d.x = dot(clippos,dirx);\r\n  color=attribColor/255.;\r\n}", "precision mediump float;\r\n//precision mediump float;\r\nvarying vec4 color;\r\n//uniform float alpha;\r\nvarying vec2 cliped;\r\nvoid main(){\r\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\r\n\t//a.a*=alpha;\r\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\r\n\tgl_FragColor.rgb*=color.a;\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n}", null), W.preCompile2D(0, N.SKINMESH, "attribute vec2 position;\r\nattribute vec2 texcoord;\r\nattribute vec4 color;\r\nuniform vec2 size;\r\nuniform float offsetX;\r\nuniform float offsetY;\r\nuniform mat4 mmat;\r\nuniform mat4 u_mmat2;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nvoid main() {\r\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\r\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\r\n  v_color = color;\r\n  v_color.rgb *= v_color.a;\r\n  v_texcoord = texcoord;  \r\n}", "precision mediump float;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nuniform sampler2D texture;\r\nuniform float alpha;\r\nvoid main() {\r\n\tvec4 t_color = texture2D(texture, v_texcoord);\r\n\tgl_FragColor = t_color.rgba * v_color;\r\n\tgl_FragColor *= alpha;\r\n}", null)
                }
            }]), Shader2D
        }(),
        Ee = function() {
            function SkinMeshBuffer() {
                _classCallCheck(this, SkinMeshBuffer);
                var e = g.instance;
                this.ib = me.create(e.DYNAMIC_DRAW), this.vb = Te.create(8)
            }
            return _createClass(SkinMeshBuffer, [{
                key: "addSkinMesh",
                value: function(e) {
                    e.getData2(this.vb, this.ib, this.vb._byteLength / 32)
                }
            }, {
                key: "reset",
                value: function() {
                    this.vb.clear(), this.ib.clear()
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return SkinMeshBuffer.instance = SkinMeshBuffer.instance || new SkinMeshBuffer
                }
            }]), SkinMeshBuffer
        }(),
        Ae = function() {
            function BasePoly() {
                _classCallCheck(this, BasePoly)
            }
            return _createClass(BasePoly, null, [{
                key: "createLine2",
                value: function(e, t, i, n, r, a) {
                    if (e.length < 4)
                        return null;
                    var s = BasePoly.tempData.length > e.length + 2 ? BasePoly.tempData : new Array(e.length + 2);
                    s[0] = e[0], s[1] = e[1];
                    var o = 2,
                        l = 0,
                        h = e.length;
                    for (l = 2; l < h; l += 2)
                        Math.abs(e[l] - e[l - 2]) + Math.abs(e[l + 1] - e[l - 1]) > .01 && (s[o++] = e[l], s[o++] = e[l + 1]);
                    a && Math.abs(e[0] - s[o - 2]) + Math.abs(e[1] - s[o - 1]) > .01 && (s[o++] = e[0], s[o++] = e[1]);
                    var u = r;
                    h = o / 2;
                    var c, _, d, f, v, p, g, y, m, T, C, x, k, S, R, b, E, A, M, w, L = i / 2;
                    for (d = s[0], f = s[1], T = d - (v = s[2]), m = (m = -(f - (p = s[3]))) / (w = Math.sqrt(m * m + T * T)) * L, T = T / w * L, u.push(d - m, f - T, d + m, f + T), l = 1; l < h - 1; l++)
                        d = s[2 * (l - 1)], f = s[2 * (l - 1) + 1], v = s[2 * l], p = s[2 * l + 1], g = s[2 * (l + 1)], y = s[2 * (l + 1) + 1], T = d - v, x = v - g, R = (-(m = (m = -(f - p)) / (w = Math.sqrt(m * m + T * T)) * L) + d) * (-(T = T / w * L) + p) - (-m + v) * (-T + f), A = (-(C = (C = -(p - y)) / (w = Math.sqrt(C * C + x * x)) * L) + g) * (-(x = x / w * L) + p) - (-C + v) * (-x + y), M = (k = -T + f - (-T + p)) * (E = -C + v - (-C + g)) - (b = -x + y - (-x + p)) * (S = -m + v - (-m + d)), Math.abs(M) < .1 ? (M += 10.1, u.push(v - m, p - T, v + m, p + T)) : (c = (S * A - E * R) / M, _ = (b * R - k * A) / M, u.push(c, _, v - (c - v), p - (_ - p)));
                    for (d = s[o - 4], f = s[o - 3], T = d - (v = s[o - 2]), m = (m = -(f - (p = s[o - 1]))) / (w = Math.sqrt(m * m + T * T)) * L, T = T / w * L, u.push(v - m, p - T, v + m, p + T), l = 1; l < h; l++)
                        t.push(n + 2 * (l - 1), n + 2 * (l - 1) + 1, n + 2 * l + 1, n + 2 * l + 1, n + 2 * l, n + 2 * (l - 1));
                    return u
                }
            }, {
                key: "createLineTriangle",
                value: function(e, t, i, n, r, a, s) {
                    var o = e.slice(),
                        l = o.length,
                        h = o[0],
                        u = o[1],
                        c = o[2],
                        _ = (o[2], 0),
                        d = 0,
                        f = 0,
                        v = 0,
                        p = l / 2;
                    if (!(p <= 1) && 2 != p) {
                        for (var g = new Array(4 * p), y = 0, m = 0, T = 0; T < p - 1; T++)
                            h = o[m++], u = o[m++], c = o[m++], v = o[m++] - u, 0 != (f = c - h) && 0 != v && (_ = Math.sqrt(f * f + v * v)) > .001 && (g[d = 4 * y] = h, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = v / _, y++);
                        for (n ? (h = o[l - 2], u = o[l - 1], c = o[0], v = o[1] - u, 0 != (f = c - h) && 0 != v && (_ = Math.sqrt(f * f + v * v)) > .001 && (g[d = 4 * y] = h, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = v / _, y++)) : (g[d = 4 * y] = h, g[d + 1] = u, g[d + 2] = f / _, g[d + 3] = v / _, y++), m = 0, T = 0; T < p; T++)
                            h = o[m], u = o[m + 1], c = o[m + 2], o[m + 3]
                    }
                }
            }]), BasePoly
        }();
    Ae.tempData = new Array(256);
    var Me = function EarcutNode(e, t, i) {
            _classCallCheck(this, EarcutNode), this.i = e, this.x = t, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        },
        we = function() {
            function Earcut() {
                _classCallCheck(this, Earcut)
            }
            return _createClass(Earcut, null, [{
                key: "earcut",
                value: function(e, t, i) {
                    i = i || 2;
                    var n, r, a, s, o, l, h, u = t && t.length,
                        c = u ? t[0] * i : e.length,
                        _ = Earcut.linkedList(e, 0, c, i, !0),
                        d = [];
                    if (!_)
                        return d;
                    if (u && (_ = Earcut.eliminateHoles(e, t, _, i)), e.length > 80 * i) {
                        n = a = e[0], r = s = e[1];
                        for (var f = i; f < c; f += i)
                            (o = e[f]) < n && (n = o), (l = e[f + 1]) < r && (r = l), o > a && (a = o), l > s && (s = l);
                        h = 0 !== (h = Math.max(a - n, s - r)) ? 1 / h : 0
                    }
                    return Earcut.earcutLinked(_, d, i, n, r, h), d
                }
            }, {
                key: "linkedList",
                value: function(e, t, i, n, r) {
                    var a, s;
                    if (r === Earcut.signedArea(e, t, i, n) > 0)
                        for (a = t; a < i; a += n)
                            s = Earcut.insertNode(a, e[a], e[a + 1], s);
                    else
                        for (a = i - n; a >= t; a -= n)
                            s = Earcut.insertNode(a, e[a], e[a + 1], s);
                    return s && Earcut.equals(s, s.next) && (Earcut.removeNode(s), s = s.next), s
                }
            }, {
                key: "filterPoints",
                value: function(e, t) {
                    if (!e)
                        return e;
                    t || (t = e);
                    var i, n = e;
                    do {
                        if (i = !1, n.steiner || !Earcut.equals(n, n.next) && 0 !== Earcut.area(n.prev, n, n.next))
                            n = n.next;
                        else {
                            if (Earcut.removeNode(n), (n = t = n.prev) === n.next)
                                break;
                            i = !0
                        }
                    } while (i || n !== t);
                    return t
                }
            }, {
                key: "earcutLinked",
                value: function(e, t, i, n, r, a) {
                    var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                    if (e) {
                        !s && a && Earcut.indexCurve(e, n, r, a);
                        for (var o, l, h = e; e.prev !== e.next;)
                            if (o = e.prev, l = e.next, a ? Earcut.isEarHashed(e, n, r, a) : Earcut.isEar(e))
                                t.push(o.i / i), t.push(e.i / i), t.push(l.i / i), Earcut.removeNode(e), e = l.next, h = l.next;
                            else if ((e = l) === h) {
                            s ? 1 === s ? (e = Earcut.cureLocalIntersections(e, t, i), Earcut.earcutLinked(e, t, i, n, r, a, 2)) : 2 === s && Earcut.splitEarcut(e, t, i, n, r, a) : Earcut.earcutLinked(Earcut.filterPoints(e, null), t, i, n, r, a, 1);
                            break
                        }
                    }
                }
            }, {
                key: "isEar",
                value: function(e) {
                    var t = e.prev,
                        i = e,
                        n = e.next;
                    if (Earcut.area(t, i, n) >= 0)
                        return !1;
                    for (var r = e.next.next; r !== e.prev;) {
                        if (Earcut.pointInTriangle(t.x, t.y, i.x, i.y, n.x, n.y, r.x, r.y) && Earcut.area(r.prev, r, r.next) >= 0)
                            return !1;
                        r = r.next
                    }
                    return !0
                }
            }, {
                key: "isEarHashed",
                value: function(e, t, i, n) {
                    var r = e.prev,
                        a = e,
                        s = e.next;
                    if (Earcut.area(r, a, s) >= 0)
                        return !1;
                    for (var o = r.x < a.x ? r.x < s.x ? r.x : s.x : a.x < s.x ? a.x : s.x, l = r.y < a.y ? r.y < s.y ? r.y : s.y : a.y < s.y ? a.y : s.y, h = r.x > a.x ? r.x > s.x ? r.x : s.x : a.x > s.x ? a.x : s.x, u = r.y > a.y ? r.y > s.y ? r.y : s.y : a.y > s.y ? a.y : s.y, c = Earcut.zOrder(o, l, t, i, n), _ = Earcut.zOrder(h, u, t, i, n), d = e.nextZ; d && d.z <= _;) {
                        if (d !== e.prev && d !== e.next && Earcut.pointInTriangle(r.x, r.y, a.x, a.y, s.x, s.y, d.x, d.y) && Earcut.area(d.prev, d, d.next) >= 0)
                            return !1;
                        d = d.nextZ
                    }
                    for (d = e.prevZ; d && d.z >= c;) {
                        if (d !== e.prev && d !== e.next && Earcut.pointInTriangle(r.x, r.y, a.x, a.y, s.x, s.y, d.x, d.y) && Earcut.area(d.prev, d, d.next) >= 0)
                            return !1;
                        d = d.prevZ
                    }
                    return !0
                }
            }, {
                key: "cureLocalIntersections",
                value: function(e, t, i) {
                    var n = e;
                    do {
                        var r = n.prev,
                            a = n.next.next;
                        !Earcut.equals(r, a) && Earcut.intersects(r, n, n.next, a) && Earcut.locallyInside(r, a) && Earcut.locallyInside(a, r) && (t.push(r.i / i), t.push(n.i / i), t.push(a.i / i), Earcut.removeNode(n), Earcut.removeNode(n.next), n = e = a), n = n.next
                    } while (n !== e);
                    return n
                }
            }, {
                key: "splitEarcut",
                value: function(e, t, i, n, r, a) {
                    var s = e;
                    do {
                        for (var o = s.next.next; o !== s.prev;) {
                            if (s.i !== o.i && Earcut.isValidDiagonal(s, o)) {
                                var l = Earcut.splitPolygon(s, o);
                                return s = Earcut.filterPoints(s, s.next), l = Earcut.filterPoints(l, l.next), Earcut.earcutLinked(s, t, i, n, r, a), void Earcut.earcutLinked(l, t, i, n, r, a)
                            }
                            o = o.next
                        }
                        s = s.next
                    } while (s !== e)
                }
            }, {
                key: "eliminateHoles",
                value: function(e, t, i, n) {
                    var r, a, s, o, l, h = [];
                    for (r = 0, a = t.length; r < a; r++)
                        s = t[r] * n, o = r < a - 1 ? t[r + 1] * n : e.length, (l = Earcut.linkedList(e, s, o, n, !1)) === l.next && (l.steiner = !0), h.push(Earcut.getLeftmost(l));
                    for (h.sort(Earcut.compareX), r = 0; r < h.length; r++)
                        Earcut.eliminateHole(h[r], i), i = Earcut.filterPoints(i, i.next);
                    return i
                }
            }, {
                key: "compareX",
                value: function(e, t) {
                    return e.x - t.x
                }
            }, {
                key: "eliminateHole",
                value: function(e, t) {
                    if (t = Earcut.findHoleBridge(e, t)) {
                        var i = Earcut.splitPolygon(t, e);
                        Earcut.filterPoints(i, i.next)
                    }
                }
            }, {
                key: "findHoleBridge",
                value: function(e, t) {
                    var i, n = t,
                        r = e.x,
                        a = e.y,
                        s = -1 / 0;
                    do {
                        if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                            var o = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                            if (o <= r && o > s) {
                                if (s = o, o === r) {
                                    if (a === n.y)
                                        return n;
                                    if (a === n.next.y)
                                        return n.next
                                }
                                i = n.x < n.next.x ? n : n.next
                            }
                        }
                        n = n.next
                    } while (n !== t);
                    if (!i)
                        return null;
                    if (r === s)
                        return i.prev;
                    var l, h = i,
                        u = i.x,
                        c = i.y,
                        _ = 1 / 0;
                    for (n = i.next; n !== h;)
                        r >= n.x && n.x >= u && r !== n.x && Earcut.pointInTriangle(a < c ? r : s, a, u, c, a < c ? s : r, a, n.x, n.y) && ((l = Math.abs(a - n.y) / (r - n.x)) < _ || l === _ && n.x > i.x) && Earcut.locallyInside(n, e) && (i = n, _ = l), n = n.next;
                    return i
                }
            }, {
                key: "indexCurve",
                value: function(e, t, i, n) {
                    var r = e;
                    do {
                        null === r.z && (r.z = Earcut.zOrder(r.x, r.y, t, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                    } while (r !== e);
                    r.prevZ.nextZ = null, r.prevZ = null, Earcut.sortLinked(r)
                }
            }, {
                key: "sortLinked",
                value: function(e) {
                    var t, i, n, r, a, s, o, l, h = 1;
                    do {
                        for (i = e, e = null, a = null, s = 0; i;) {
                            for (s++, n = i, o = 0, t = 0; t < h && (o++, n = n.nextZ); t++);
                            for (l = h; o > 0 || l > 0 && n;)
                                0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
                            i = n
                        }
                        a.nextZ = null, h *= 2
                    } while (s > 1);
                    return e
                }
            }, {
                key: "zOrder",
                value: function(e, t, i, n, r) {
                    return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
                }
            }, {
                key: "getLeftmost",
                value: function(e) {
                    var t = e,
                        i = e;
                    do {
                        t.x < i.x && (i = t), t = t.next
                    } while (t !== e);
                    return i
                }
            }, {
                key: "pointInTriangle",
                value: function(e, t, i, n, r, a, s, o) {
                    return (r - s) * (t - o) - (e - s) * (a - o) >= 0 && (e - s) * (n - o) - (i - s) * (t - o) >= 0 && (i - s) * (a - o) - (r - s) * (n - o) >= 0
                }
            }, {
                key: "isValidDiagonal",
                value: function(e, t) {
                    return e.next.i !== t.i && e.prev.i !== t.i && !Earcut.intersectsPolygon(e, t) && Earcut.locallyInside(e, t) && Earcut.locallyInside(t, e) && Earcut.middleInside(e, t)
                }
            }, {
                key: "area",
                value: function(e, t, i) {
                    return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y)
                }
            }, {
                key: "equals",
                value: function(e, t) {
                    return e.x === t.x && e.y === t.y
                }
            }, {
                key: "intersects",
                value: function(e, t, i, n) {
                    return !!(Earcut.equals(e, t) && Earcut.equals(i, n) || Earcut.equals(e, n) && Earcut.equals(i, t)) || Earcut.area(e, t, i) > 0 != Earcut.area(e, t, n) > 0 && Earcut.area(i, n, e) > 0 != Earcut.area(i, n, t) > 0
                }
            }, {
                key: "intersectsPolygon",
                value: function(e, t) {
                    var i = e;
                    do {
                        if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && Earcut.intersects(i, i.next, e, t))
                            return !0;
                        i = i.next
                    } while (i !== e);
                    return !1
                }
            }, {
                key: "locallyInside",
                value: function(e, t) {
                    return Earcut.area(e.prev, e, e.next) < 0 ? Earcut.area(e, t, e.next) >= 0 && Earcut.area(e, e.prev, t) >= 0 : Earcut.area(e, t, e.prev) < 0 || Earcut.area(e, e.next, t) < 0
                }
            }, {
                key: "middleInside",
                value: function(e, t) {
                    var i = e,
                        n = !1,
                        r = (e.x + t.x) / 2,
                        a = (e.y + t.y) / 2;
                    do {
                        i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
                    } while (i !== e);
                    return n
                }
            }, {
                key: "splitPolygon",
                value: function(e, t) {
                    var i = new Me(e.i, e.x, e.y),
                        n = new Me(t.i, t.x, t.y),
                        r = e.next,
                        a = t.prev;
                    return e.next = t, t.prev = e, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
                }
            }, {
                key: "insertNode",
                value: function(e, t, i, n) {
                    var r = new Me(e, t, i);
                    return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
                }
            }, {
                key: "removeNode",
                value: function(e) {
                    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
                }
            }, {
                key: "signedArea",
                value: function(e, t, i, n) {
                    for (var r = 0, a = t, s = i - n; a < i; a += n)
                        r += (e[s] - e[a]) * (e[a + 1] + e[s + 1]), s = a;
                    return r
                }
            }]), Earcut
        }(),
        Le = function CONST3D2D() {
            _classCallCheck(this, CONST3D2D)
        };
    Le.BYTES_PE = 4, Le.BYTES_PIDX = 2, Le.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Le.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Le.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], Le._TMPARRAY = [], Le._OFFSETX = 0, Le._OFFSETY = 0;
    var Ie = function(e) {
        function Submit() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le.TYPE_2D;
            return _classCallCheck(this, Submit), _possibleConstructorReturn(this, _getPrototypeOf(Submit).call(this, e))
        }
        return _inherits(Submit, e), _createClass(Submit, [{
            key: "renderSubmit",
            value: function() {
                if (0 === this._numEle || !this._mesh || 0 == this._numEle)
                    return 1;
                var e = this.shaderValue.textureHost;
                if (e) {
                    var t = e._getSource();
                    if (!t)
                        return 1;
                    this.shaderValue.texture = t
                }
                var i = y.mainContext;
                return this._mesh.useMesh(i), this.shaderValue.upload(), O.activeBlendFunction !== this._blendFn && (y.setBlend(i, !0), this._blendFn(i), O.activeBlendFunction = this._blendFn), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), G.renderBatches++, G.trianglesFaces += this._numEle / 3, 1
            }
        }, {
            key: "releaseRender",
            value: function() {
                le.RENDERBASE != this && --this._ref < 1 && (Submit.POOL[Submit._poolSize++] = this, this.shaderValue.release(), this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }
        }], [{
            key: "create",
            value: function(e, t, i) {
                var n = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit;
                n._ref = 1, n._mesh = t, n._key.clear(), n._startIdx = t.indexNum * Le.BYTES_PIDX, n._numEle = 0;
                var r = e._nBlendType;
                n._blendFn = e._targets ? O.targetFns[r] : O.fns[r], n.shaderValue = i, n.shaderValue.setValue(e._shader2D);
                var a = e._shader2D.filters;
                return a && n.shaderValue.setFilters(a), n
            }
        }, {
            key: "createShape",
            value: function(e, t, i, n) {
                var r = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit;
                r._mesh = t, r._numEle = i, r._startIdx = 2 * t.indexNum, r._ref = 1, r.shaderValue = n, r.shaderValue.setValue(e._shader2D);
                var a = e._nBlendType;
                return r._key.blendShader = a, r._blendFn = e._targets ? O.targetFns[a] : O.fns[a], r
            }
        }]), Submit
    }(le);
    Ie._poolSize = 0, Ie.POOL = [];
    var Pe = function(e) {
        function SubmitCanvas() {
            var e;
            return _classCallCheck(this, SubmitCanvas), (e = _possibleConstructorReturn(this, _getPrototypeOf(SubmitCanvas).call(this, le.TYPE_2D)))._matrix = new f, e._matrix4 = Le.defaultMatrix4.concat(), e.shaderValue = new Y(0, 0), e
        }
        return _inherits(SubmitCanvas, e), _createClass(SubmitCanvas, [{
            key: "renderSubmit",
            value: function() {
                var e = P.worldAlpha,
                    t = P.worldMatrix4,
                    i = P.worldMatrix,
                    n = P.worldFilters,
                    r = P.worldShaderDefines,
                    a = this.shaderValue,
                    s = this._matrix,
                    o = this._matrix4,
                    l = f.TEMP;
                return f.mul(s, i, l), o[0] = l.a, o[1] = l.b, o[4] = l.c, o[5] = l.d, o[12] = l.tx, o[13] = l.ty, P.worldMatrix = l.clone(), P.worldMatrix4 = o, P.worldAlpha = P.worldAlpha * a.alpha, a.filters && a.filters.length && (P.worldFilters = a.filters, P.worldShaderDefines = a.defines), this.canv.flushsubmit(), P.worldAlpha = e, P.worldMatrix4 = t, P.worldMatrix.destroy(), P.worldMatrix = i, P.worldFilters = n, P.worldShaderDefines = r, 1
            }
        }, {
            key: "releaseRender",
            value: function() {
                if (--this._ref < 1) {
                    var e = SubmitCanvas.POOL;
                    this._mesh = null, e[e._length++] = this
                }
            }
        }, {
            key: "getRenderType",
            value: function() {
                return le.TYPE_CANVAS
            }
        }], [{
            key: "create",
            value: function(e, t, i) {
                var n = SubmitCanvas.POOL._length ? SubmitCanvas.POOL[--SubmitCanvas.POOL._length] : new SubmitCanvas;
                n.canv = e, n._ref = 1, n._numEle = 0;
                var r = n.shaderValue;
                return r.alpha = t, r.defines.setValue(0), i && i.length && r.setFilters(i), n
            }
        }]), SubmitCanvas
    }(le);
    Pe.POOL = [], Pe.POOL._length = 0;
    var De = function() {
        function SubmitTarget() {
            _classCallCheck(this, SubmitTarget), this.blendType = 0, this._ref = 1, this._key = new H
        }
        return _createClass(SubmitTarget, [{
            key: "renderSubmit",
            value: function() {
                var e = y.mainContext;
                this._mesh.useMesh(e);
                var t = this.srcRT;
                return t && (this.shaderValue.texture = t._getSource(), this.shaderValue.upload(), this.blend(), G.renderBatches++, G.trianglesFaces += this._numEle / 3, e.drawElements(e.TRIANGLES, this._numEle, e.UNSIGNED_SHORT, this._startIdx)), 1
            }
        }, {
            key: "blend",
            value: function() {
                if (O.activeBlendFunction !== O.fns[this.blendType]) {
                    var e = y.mainContext;
                    e.enable(e.BLEND), O.fns[this.blendType](e), O.activeBlendFunction = O.fns[this.blendType]
                }
            }
        }, {
            key: "getRenderType",
            value: function() {
                return 0
            }
        }, {
            key: "releaseRender",
            value: function() {
                if (--this._ref < 1) {
                    var e = SubmitTarget.POOL;
                    e[e._length++] = this
                }
            }
        }], [{
            key: "create",
            value: function(e, t, i, n) {
                var r = SubmitTarget.POOL._length ? SubmitTarget.POOL[--SubmitTarget.POOL._length] : new SubmitTarget;
                if (r._mesh = t, r.srcRT = n, r._startIdx = t.indexNum * Le.BYTES_PIDX, r._ref = 1, r._key.clear(), r._numEle = 0, r.blendType = e._nBlendType, r._key.blendShader = r.blendType, r.shaderValue = i, r.shaderValue.setValue(e._shader2D), e._colorFiler) {
                    var a = e._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha
                }
                return r
            }
        }]), SubmitTarget
    }();
    De.POOL = [], De.POOL._length = 0;
    var Be = function(e) {
        function SubmitTexture() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le.TYPE_2D;
            return _classCallCheck(this, SubmitTexture), _possibleConstructorReturn(this, _getPrototypeOf(SubmitTexture).call(this, e))
        }
        return _inherits(SubmitTexture, e), _createClass(SubmitTexture, [{
            key: "releaseRender",
            value: function() {
                --this._ref < 1 && (SubmitTexture.POOL[SubmitTexture._poolSize++] = this, this.shaderValue.release(), this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }
        }, {
            key: "renderSubmit",
            value: function() {
                if (0 === this._numEle)
                    return 1;
                var e = this.shaderValue.textureHost;
                if (e) {
                    var t = e ? e._getSource() : null;
                    if (!t)
                        return 1
                }
                var i = y.mainContext;
                this._mesh.useMesh(i);
                var n = le.preRender,
                    r = le.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === r.submitType && this._key.blendShader === r.blendShader && I.activeShader && le.preRender.clipInfoID == this.clipInfoID && n.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & N.NOOPTMASK) ? I.activeShader.uploadTexture2D(t) : (O.activeBlendFunction !== this._blendFn && (y.setBlend(i, !0), this._blendFn(i), O.activeBlendFunction = this._blendFn), this.shaderValue.texture = t, this.shaderValue.upload()), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), G.renderBatches++, G.trianglesFaces += this._numEle / 3, 1
            }
        }], [{
            key: "create",
            value: function(e, t, i) {
                var n = SubmitTexture._poolSize ? SubmitTexture.POOL[--SubmitTexture._poolSize] : new SubmitTexture(le.TYPE_TEXTURE);
                n._mesh = t, n._key.clear(), n._key.submitType = le.KEY_DRAWTEXTURE, n._ref = 1, n._startIdx = t.indexNum * Le.BYTES_PIDX, n._numEle = 0;
                var r = e._nBlendType;
                if (n._key.blendShader = r, n._blendFn = e._targets ? O.targetFns[r] : O.fns[r], n.shaderValue = i, e._colorFiler) {
                    var a = e._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha
                }
                return n
            }
        }]), SubmitTexture
    }(le);
    Be._poolSize = 0, Be.POOL = [];
    var Oe = function() {
        function CharSubmitCache() {
            _classCallCheck(this, CharSubmitCache), this._data = [], this._ndata = 0, this._clipid = -1, this._clipMatrix = new f, this._enable = !1
        }
        return _createClass(CharSubmitCache, [{
            key: "clear",
            value: function() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enable = !1, this._colorFiler = null
            }
        }, {
            key: "destroy",
            value: function() {
                this.clear(), this._data.length = 0, this._data = null
            }
        }, {
            key: "add",
            value: function(e, t, i, n, r, a) {
                this._ndata > 0 && (this._tex != t || this._imgId != i || this._clipid >= 0 && this._clipid != e._clipInfoID) && this.submit(e), this._clipid = e._clipInfoID, e._globalClipMatrix.copyTo(this._clipMatrix), this._tex = t, this._imgId = i, this._colorFiler = e._colorFiler, this._data[this._ndata] = n, this._data[this._ndata + 1] = r, this._data[this._ndata + 2] = a, this._ndata += 3
            }
        }, {
            key: "getPos",
            value: function() {
                return 0 == CharSubmitCache.__nPosPool ? new Array(8) : CharSubmitCache.__posPool[--CharSubmitCache.__nPosPool]
            }
        }, {
            key: "enable",
            value: function(e, t) {
                e !== this._enable && (this._enable = e, this._enable || this.submit(t))
            }
        }, {
            key: "submit",
            value: function(e) {
                var t = this._ndata;
                if (t) {
                    var i = e._mesh,
                        n = e._colorFiler;
                    e._colorFiler = this._colorFiler;
                    var r = Be.create(e, i, Y.create(N.TEXTURE2D, 0));
                    e._submits[e._submits._length++] = e._curSubmit = r, r.shaderValue.textureHost = this._tex, r._key.other = this._imgId, e._colorFiler = n, e._copyClipInfo(r, this._clipMatrix), r.clipInfoID = this._clipid;
                    for (var a = 0; a < t; a += 3)
                        i.addQuad(this._data[a], this._data[a + 1], this._data[a + 2], !0), CharSubmitCache.__posPool[CharSubmitCache.__nPosPool++] = this._data[a];
                    t /= 3, r._numEle += 6 * t, i.indexNum += 6 * t, i.vertNum += 4 * t, e._drawCount += t, this._ndata = 0, ge.loopCount % 100 == 0 && (this._data.length = 0)
                }
            }
        }]), CharSubmitCache
    }();
    Oe.__posPool = [], Oe.__nPosPool = 0;
    var Fe = function() {
            function AtlasGrid() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                _classCallCheck(this, AtlasGrid), this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, this._cells = null, this._used = 0, this._cells = null, this._rowInfo = null, this.atlasID = i, this._init(e, t)
            }
            return _createClass(AtlasGrid, [{
                key: "addRect",
                value: function(e, t, i, n) {
                    return !!this._get(t, i, n) && (this._fill(n.x, n.y, t, i, e), this._texCount++, !0)
                }
            }, {
                key: "_release",
                value: function() {
                    this._cells = null, this._rowInfo = null
                }
            }, {
                key: "_init",
                value: function(e, t) {
                    return this._width = e, this._height = t, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0)
                }
            }, {
                key: "_get",
                value: function(e, t, i) {
                    if (e > this._width || t > this._height)
                        return !1;
                    for (var n = -1, r = -1, a = this._width, s = this._height, o = this._cells, l = 0; l < s; l++)
                        if (!(this._rowInfo[l] < e))
                            for (var h = 0; h < a;) {
                                var u = 3 * (l * a + h);
                                if (0 != o[u] || o[u + 1] < e || o[u + 2] < t)
                                    h += o[u + 1];
                                else {
                                    n = h, r = l;
                                    for (var c = 0; c < e; c++)
                                        if (o[3 * c + u + 2] < t) {
                                            n = -1;
                                            break
                                        }
                                    if (!(n < 0))
                                        return i.x = n, i.y = r, !0;
                                    h += o[u + 1]
                                }
                            }
                    return !1
                }
            }, {
                key: "_fill",
                value: function(e, t, i, n, r) {
                    var a = this._width,
                        s = this._height;
                    this._check(e + i <= a && t + n <= s);
                    for (var o = t; o < n + t; ++o) {
                        this._check(this._rowInfo[o] >= i), this._rowInfo[o] -= i;
                        for (var l = 0; l < i; l++) {
                            var h = 3 * (e + o * a + l);
                            this._check(0 == this._cells[h]), this._cells[h] = r, this._cells[h + 1] = i, this._cells[h + 2] = n
                        }
                    }
                    if (e > 0)
                        for (o = 0; o < n; ++o) {
                            var u = 0;
                            for (l = e - 1; l >= 0 && 0 == this._cells[3 * ((t + o) * a + l)]; --l, ++u);
                            for (l = u; l > 0; --l)
                                this._cells[3 * ((t + o) * a + e - l) + 1] = l, this._check(l > 0)
                        }
                    if (t > 0)
                        for (l = e; l < e + i; ++l) {
                            for (u = 0, o = t - 1; o >= 0 && 0 == this._cells[3 * (l + o * a)]; --o, u++);
                            for (o = u; o > 0; --o)
                                this._cells[3 * (l + (t - o) * a) + 2] = o, this._check(o > 0)
                        }
                    this._used += i * n / (this._width * this._height)
                }
            }, {
                key: "_check",
                value: function(e) {
                    0 == e && console.log("xtexMerger 错误啦")
                }
            }, {
                key: "_clear",
                value: function() {
                    this._texCount = 0;
                    for (var e = 0; e < this._height; e++)
                        this._rowInfo[e] = this._width;
                    for (var t = 0; t < this._height; t++)
                        for (var i = 0; i < this._width; i++) {
                            var n = 3 * (t * this._width + i);
                            this._cells[n] = 0, this._cells[n + 1] = this._width - i, this._cells[n + 2] = this._width - t
                        }
                }
            }]), AtlasGrid
        }(),
        Ne = function(e) {
            function TextTexture(e, t) {
                var i;
                return _classCallCheck(this, TextTexture), (i = _possibleConstructorReturn(this, _getPrototypeOf(TextTexture).call(this)))._texW = 0, i._texH = 0, i.__destroyed = !1, i._discardTm = 0, i.genID = 0, i.bitmap = {
                    id: 0,
                    _glTexture: null
                }, i.curUsedCovRate = 0, i.curUsedCovRateAtlas = 0, i.lastTouchTm = 0, i.ri = null, i._texW = e || TextTexture.gTextRender.atlasWidth, i._texH = t || TextTexture.gTextRender.atlasWidth, i.bitmap.id = i.id, i.lock = !0, i
            }
            return _inherits(TextTexture, e), _createClass(TextTexture, [{
                key: "recreateResource",
                value: function() {
                    if (!this._source) {
                        var e = g.instance,
                            t = this._source = e.createTexture();
                        this.bitmap._glTexture = t, y.bindTexture(e, e.TEXTURE_2D, t), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this._texW, this._texH, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), TextTexture.gTextRender.debugUV && this.fillWhite()
                    }
                }
            }, {
                key: "addChar",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (TextTexture.gTextRender.isWan1Wan)
                        return this.addCharCanvas(e, t, n, r);
                    !this._source && this.recreateResource();
                    var a = g.instance;
                    y.bindTexture(a, a.TEXTURE_2D, this._source), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                    var s, o, l, h, u = e.data;
                    return e.data instanceof Uint8ClampedArray && (u = new Uint8Array(u.buffer)), a.texSubImage2D(a.TEXTURE_2D, 0, t, n, e.width, e.height, a.RGBA, a.UNSIGNED_BYTE, u), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), s = t / this._texW, o = n / this._texH, l = (t + e.width) / this._texW, h = (n + e.height) / this._texH, (r = r || new Array(8))[0] = s, r[1] = o, r[2] = l, r[3] = o, r[4] = l, r[5] = h, r[6] = s, r[7] = h, r
                }
            }, {
                key: "addCharCanvas",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    !this._source && this.recreateResource();
                    var a, s, o, l, h = g.instance;
                    return y.bindTexture(h, h.TEXTURE_2D, this._source), !i.Render.isConchApp && h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), h.texSubImage2D(h.TEXTURE_2D, 0, t, n, h.RGBA, h.UNSIGNED_BYTE, e), !i.Render.isConchApp && h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.Render.isConchApp ? (a = t / this._texW, s = n / this._texH, o = (t + e.width) / this._texW, l = (n + e.height) / this._texH) : (a = (t + 1) / this._texW, s = (n + 1) / this._texH, o = (t + e.width - 1) / this._texW, l = (n + e.height - 1) / this._texH), (r = r || new Array(8))[0] = a, r[1] = s, r[2] = o, r[3] = s, r[4] = o, r[5] = l, r[6] = a, r[7] = l, r
                }
            }, {
                key: "fillWhite",
                value: function() {
                    !this._source && this.recreateResource();
                    var e = g.instance,
                        t = new Uint8Array(this._texW * this._texH * 4);
                    t.fill(255), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this._texW, this._texH, e.RGBA, e.UNSIGNED_BYTE, t)
                }
            }, {
                key: "discard",
                value: function() {
                    i.stage.setGlobalRepaint(), this.destroy()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.__destroyed = !0;
                    var e = g.instance;
                    this._source && e.deleteTexture(this._source), this._source = null
                }
            }, {
                key: "touchRect",
                value: function(e, t) {
                    this.lastTouchTm != t && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = t);
                    var n = TextTexture.gTextRender.atlasWidth * TextTexture.gTextRender.atlasWidth,
                        r = i.TextAtlas.atlasGridW * i.TextAtlas.atlasGridW;
                    this.curUsedCovRate += e.bmpWidth * e.bmpHeight / n, this.curUsedCovRateAtlas += Math.ceil(e.bmpWidth / i.TextAtlas.atlasGridW) * Math.ceil(e.bmpHeight / i.TextAtlas.atlasGridW) / (n / r)
                }
            }, {
                key: "_getSource",
                value: function() {
                    return this._source
                }
            }, {
                key: "drawOnScreen",
                value: function(e, t) {}
            }, {
                key: "texture",
                get: function() {
                    return this
                }
            }], [{
                key: "getTextTexture",
                value: function(e, t) {
                    return new TextTexture(e, t)
                }
            }, {
                key: "clean",
                value: function() {
                    var e = ge.loopStTm;
                    if (0 === TextTexture.cleanTm && (TextTexture.cleanTm = e), e - TextTexture.cleanTm >= TextTexture.gTextRender.checkCleanTextureDt) {
                        for (var t = 0; t < TextTexture.poolLen; t++) {
                            var i = TextTexture.pool[t];
                            e - i._discardTm >= TextTexture.gTextRender.destroyUnusedTextureDt && (i.destroy(), TextTexture.pool[t] = TextTexture.pool[TextTexture.poolLen - 1], TextTexture.poolLen--, t--)
                        }
                        TextTexture.cleanTm = e
                    }
                }
            }]), TextTexture
        }(k);
    Ne.gTextRender = null, Ne.pool = new Array(10), Ne.poolLen = 0, Ne.cleanTm = 0;
    var Ge = function() {
        function TextAtlas() {
            _classCallCheck(this, TextAtlas), this.texWidth = 1024, this.texHeight = 1024, this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = i.TextRender.atlasWidth, this.texture = Ne.getTextTexture(this.texWidth, this.texHeight), this.texWidth / TextAtlas.atlasGridW > 256 && (TextAtlas.atlasGridW = Math.ceil(this.texWidth / 256)), this.atlasgrid = new Fe(this.texWidth / TextAtlas.atlasGridW, this.texHeight / TextAtlas.atlasGridW, this.texture.id)
        }
        return _createClass(TextAtlas, [{
            key: "setProtecteDist",
            value: function(e) {}
        }, {
            key: "getAEmpty",
            value: function(e, t, i) {
                var n = this.atlasgrid.addRect(1, Math.ceil(e / TextAtlas.atlasGridW), Math.ceil(t / TextAtlas.atlasGridW), i);
                return n && (i.x *= TextAtlas.atlasGridW, i.y *= TextAtlas.atlasGridW), n
            }
        }, {
            key: "destroy",
            value: function() {
                for (var e in this.charMaps) {
                    this.charMaps[e].deleted = !0
                }
                this.texture.discard()
            }
        }, {
            key: "printDebugInfo",
            value: function() {}
        }, {
            key: "usedRate",
            get: function() {
                return this.atlasgrid._used
            }
        }]), TextAtlas
    }();
    Ge.atlasGridW = 16;
    var Ue = function() {
        function Event() {
            _classCallCheck(this, Event)
        }
        return _createClass(Event, [{
            key: "setTo",
            value: function(e, t, i) {
                return this.type = e, this.currentTarget = t, this.target = i, this
            }
        }, {
            key: "stopPropagation",
            value: function() {
                this._stoped = !0
            }
        }, {
            key: "touches",
            get: function() {
                if (!this.nativeEvent)
                    return null;
                var e = this.nativeEvent.touches;
                if (e)
                    for (var t = i.stage, n = 0, r = e.length; n < r; n++) {
                        var a = e[n],
                            s = v.TEMP;
                        s.setTo(a.clientX, a.clientY), t._canvasTransform.invertTransformPoint(s), t.transform.invertTransformPoint(s), a.stageX = s.x, a.stageY = s.y
                    }
                return e
            }
        }, {
            key: "altKey",
            get: function() {
                return this.nativeEvent.altKey
            }
        }, {
            key: "ctrlKey",
            get: function() {
                return this.nativeEvent.ctrlKey
            }
        }, {
            key: "shiftKey",
            get: function() {
                return this.nativeEvent.shiftKey
            }
        }, {
            key: "charCode",
            get: function() {
                return this.nativeEvent.charCode
            }
        }, {
            key: "keyLocation",
            get: function() {
                return this.nativeEvent.location || this.nativeEvent.keyLocation
            }
        }, {
            key: "stageX",
            get: function() {
                return i.stage.mouseX
            }
        }, {
            key: "stageY",
            get: function() {
                return i.stage.mouseY
            }
        }]), Event
    }();
    Ue.EMPTY = new Ue, Ue.MOUSE_DOWN = "mousedown", Ue.MOUSE_UP = "mouseup", Ue.CLICK = "click", Ue.RIGHT_MOUSE_DOWN = "rightmousedown", Ue.RIGHT_MOUSE_UP = "rightmouseup", Ue.RIGHT_CLICK = "rightclick", Ue.MOUSE_MOVE = "mousemove", Ue.MOUSE_OVER = "mouseover", Ue.MOUSE_OUT = "mouseout", Ue.MOUSE_WHEEL = "mousewheel", Ue.ROLL_OVER = "mouseover", Ue.ROLL_OUT = "mouseout", Ue.DOUBLE_CLICK = "doubleclick", Ue.CHANGE = "change", Ue.CHANGED = "changed", Ue.RESIZE = "resize", Ue.ADDED = "added", Ue.REMOVED = "removed", Ue.DISPLAY = "display", Ue.UNDISPLAY = "undisplay", Ue.ERROR = "error", Ue.COMPLETE = "complete", Ue.LOADED = "loaded", Ue.READY = "ready", Ue.PROGRESS = "progress", Ue.INPUT = "input", Ue.RENDER = "render", Ue.OPEN = "open", Ue.MESSAGE = "message", Ue.CLOSE = "close", Ue.KEY_DOWN = "keydown", Ue.KEY_PRESS = "keypress", Ue.KEY_UP = "keyup", Ue.FRAME = "enterframe", Ue.DRAG_START = "dragstart", Ue.DRAG_MOVE = "dragmove", Ue.DRAG_END = "dragend", Ue.ENTER = "enter", Ue.SELECT = "select", Ue.BLUR = "blur", Ue.FOCUS = "focus", Ue.VISIBILITY_CHANGE = "visibilitychange", Ue.FOCUS_CHANGE = "focuschange", Ue.PLAYED = "played", Ue.PAUSED = "paused", Ue.STOPPED = "stopped", Ue.START = "start", Ue.END = "end", Ue.COMPONENT_ADDED = "componentadded", Ue.COMPONENT_REMOVED = "componentremoved", Ue.RELEASED = "released", Ue.LINK = "link", Ue.LABEL = "label", Ue.FULL_SCREEN_CHANGE = "fullscreenchange", Ue.DEVICE_LOST = "devicelost", Ue.TRANSFORM_CHANGED = "transformchanged", Ue.ANIMATION_CHANGED = "animationchanged", Ue.TRAIL_FILTER_CHANGE = "trailfilterchange", Ue.TRIGGER_ENTER = "triggerenter", Ue.TRIGGER_STAY = "triggerstay", Ue.TRIGGER_EXIT = "triggerexit";
    var We = function(e) {
        function Texture() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return _classCallCheck(this, Texture), (e = _possibleConstructorReturn(this, _getPrototypeOf(Texture).call(this))).uvrect = [0, 0, 1, 1], e._destroyed = !1, e._referenceCount = 0, e.$_GID = 0, e.offsetX = 0, e.offsetY = 0, e._w = 0, e._h = 0, e.sourceWidth = 0, e.sourceHeight = 0, e.url = null, e.scaleRate = 1, e.setTo(t, i, n, r), e
        }
        return _inherits(Texture, e), _createClass(Texture, [{
            key: "_addReference",
            value: function() {
                this._bitmap && this._bitmap._addReference(), this._referenceCount++
            }
        }, {
            key: "_removeReference",
            value: function() {
                this._bitmap && this._bitmap._removeReference(), this._referenceCount--
            }
        }, {
            key: "_getSource",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(e), this._bitmap.destroyed ? null : this.bitmap._getSource())
            }
        }, {
            key: "_onLoaded",
            value: function(e, t) {
                if (t)
                    if (t == this);
                    else if (t instanceof Texture) {
                    var i = t;
                    Texture._create(t, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this)
                } else
                    this.bitmap = t, this.sourceWidth = this._w = t.width, this.sourceHeight = this._h = t.height;
                else;
                e && e.run(), this.event(Ue.READY, this)
            }
        }, {
            key: "getIsReady",
            value: function() {
                return !this._destroyed && !!this._bitmap
            }
        }, {
            key: "setTo",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                this.bitmap = e, this.sourceWidth = i, this.sourceHeight = n, e && (this._w = e.width, this._h = e.height, this.sourceWidth = this.sourceWidth || e.width, this.sourceHeight = this.sourceHeight || e.height), this.uv = t || Texture.DEF_UV
            }
        }, {
            key: "load",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this._destroyed || i.loader.load(e, m.create(this, this._onLoaded, [t]), null, "htmlimage", 1, !0)
            }
        }, {
            key: "getTexturePixels",
            value: function(e, t, n, r) {
                var a, s, o, l = this.bitmap,
                    h = this._w,
                    u = this._h,
                    c = this.sourceWidth,
                    _ = this.sourceHeight,
                    d = l.width,
                    f = l.height,
                    v = this.offsetX,
                    p = this.offsetY,
                    g = n,
                    y = r;
                if (e + n > h + v && (g -= e + n - h - v), e + n > c && (n -= e + n - c), t + r > u + p && (y -= t + r - u - p), t + r > _ && (r -= t + r - _), n <= 0 || r <= 0)
                    return null;
                var m = v > e ? v - e : 0,
                    T = p > t ? p - t : 0,
                    C = e > v ? e - v : 0,
                    x = t > p ? t - p : 0;
                g -= m, y -= T;
                var k = 4 * n,
                    S = null;
                try {
                    S = l.getPixels()
                } catch (e) {}
                if (S) {
                    if (0 == e && 0 == t && n == d && r == f)
                        return S;
                    var R = this._uv.slice(),
                        b = Math.round(R[0] * d),
                        E = Math.round(R[1] * f),
                        A = new Uint8Array(n * r * 4);
                    for (a = 4 * b + 4 * C + (s = (E + x) * (k = 4 * d)), o = 0; o < y; o++)
                        A.set(S.slice(a, a + 4 * g), 4 * n * (o + T) + 4 * m), a += k;
                    return A
                }
                var M = new i.Context;
                M.size(n, r), M.asBitmap = !0;
                var w = null;
                if (0 != e || 0 != t || n != d || r != f) {
                    var L = (w = this._uv.slice())[0],
                        I = w[1],
                        P = (w[2] - L) / h,
                        D = (w[7] - I) / u;
                    w = [L + C * P, I + x * D, L + (C + g) * P, I + x * D, L + (C + g) * P, I + (x + y) * D, L + C * P, I + (x + y) * D]
                }
                M._drawTextureM(this, m, T, g, y, null, 1, w), M._targets.start(), M.flush(), M._targets.end(), M._targets.restore();
                var B = M._targets.getData(0, 0, n, r);
                for (M.destroy(), A = new Uint8Array(n * r * 4), a = 0, s = (r - 1) * k, o = r - 1; o >= 0; o--)
                    A.set(B.slice(s, s + k), a), a += k, s -= k;
                return A
            }
        }, {
            key: "getPixels",
            value: function(e, t, i, n) {
                return window.conch ? this._nativeObj.getImageData(e, t, i, n) : this.getTexturePixels(e, t, i, n)
            }
        }, {
            key: "recoverBitmap",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this._bitmap.url;
                this._destroyed || this._bitmap && !this._bitmap.destroyed || !t || i.loader.load(t, m.create(this, (function(t) {
                    this.bitmap = t, e && e()
                })), null, "htmlimage", 1, !0)
            }
        }, {
            key: "disposeBitmap",
            value: function() {
                !this._destroyed && this._bitmap && this._bitmap.destroy()
            }
        }, {
            key: "destroy",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this._destroyed) {
                    this._destroyed = !0;
                    var t = this._bitmap;
                    t && (t._removeReference(this._referenceCount), (0 === t.referenceCount || e) && t.destroy(), t = null), this.url && this === i.loader.getRes(this.url) && i.Loader.clearRes(this.url)
                }
            }
        }, {
            key: "uv",
            get: function() {
                return this._uv
            },
            set: function(e) {
                this.uvrect[0] = Math.min(e[0], e[2], e[4], e[6]), this.uvrect[1] = Math.min(e[1], e[3], e[5], e[7]), this.uvrect[2] = Math.max(e[0], e[2], e[4], e[6]) - this.uvrect[0], this.uvrect[3] = Math.max(e[1], e[3], e[5], e[7]) - this.uvrect[1], this._uv = e
            }
        }, {
            key: "width",
            get: function() {
                return this._w ? this._w : this.bitmap ? this.uv && this.uv !== Texture.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0
            },
            set: function(e) {
                this._w = e, this.sourceWidth || (this.sourceWidth = e)
            }
        }, {
            key: "height",
            get: function() {
                return this._h ? this._h : this.bitmap ? this.uv && this.uv !== Texture.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0
            },
            set: function(e) {
                this._h = e, this.sourceHeight || (this.sourceHeight = e)
            }
        }, {
            key: "bitmap",
            get: function() {
                return this._bitmap
            },
            set: function(e) {
                this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = e, e && e._addReference(this._referenceCount)
            }
        }, {
            key: "destroyed",
            get: function() {
                return this._destroyed
            }
        }], [{
            key: "moveUV",
            value: function(e, t, i) {
                for (var n = 0; n < 8; n += 2)
                    i[n] += e, i[n + 1] += t;
                return i
            }
        }, {
            key: "create",
            value: function(e, t, i, n, r) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                    l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
                return Texture._create(e, t, i, n, r, a, s, o, l)
            }
        }, {
            key: "_create",
            value: function(e, t, i, n, r) {
                var a, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                    h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
                    u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                    c = e instanceof Texture,
                    _ = c ? e.uv : Texture.DEF_UV,
                    d = c ? e.bitmap : e;
                d.width && t + n > d.width && (n = d.width - t), d.height && i + r > d.height && (r = d.height - i), u ? (a = u).setTo(d, null, l || n, h || r) : a = new Texture(d, null, l || n, h || r), a.width = n, a.height = r, a.offsetX = s, a.offsetY = o;
                var f = 1 / d.width,
                    v = 1 / d.height;
                t *= f, i *= v, n *= f, r *= v;
                var p = a.uv[0],
                    g = a.uv[1],
                    y = a.uv[4],
                    m = a.uv[5],
                    T = y - p,
                    C = m - g,
                    x = Texture.moveUV(_[0], _[1], [t, i, t + n, i, t + n, i + r, t, i + r]);
                a.uv = new Float32Array([p + x[0] * T, g + x[1] * C, y - (1 - x[2]) * T, g + x[3] * C, y - (1 - x[4]) * T, m - (1 - x[5]) * C, p + x[6] * T, m - (1 - x[7]) * C]);
                var k = d.scaleRate;
                return k && 1 != k ? (a.sourceWidth /= k, a.sourceHeight /= k, a.width /= k, a.height /= k, a.scaleRate = k) : a.scaleRate = 1, a
            }
        }, {
            key: "createFromTexture",
            value: function(e, t, i, n, r) {
                var a = e.scaleRate;
                1 != a && (t *= a, i *= a, n *= a, r *= a);
                var s = p.TEMP.setTo(t - e.offsetX, i - e.offsetY, n, r),
                    o = s.intersection(Texture._rect1.setTo(0, 0, e.width, e.height), Texture._rect2);
                return o ? Texture.create(e, o.x, o.y, o.width, o.height, o.x - s.x, o.y - s.y, n, r) : null
            }
        }]), Texture
    }(T);
    We.DEF_UV = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), We.NO_UV = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]), We.INV_UV = new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), We._rect1 = new p, We._rect2 = new p;
    var Ve = function() {
        function FontInfo(e) {
            _classCallCheck(this, FontInfo), this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, this._bold = !1, this._id = FontInfo._gfontID++, this.setFont(e || this._font)
        }
        return _createClass(FontInfo, [{
            key: "setFont",
            value: function(e) {
                this._font = e;
                var t = e.split(" "),
                    i = t.length;
                if (i < 2)
                    1 == i && t[0].indexOf("px") > 0 && (this._size = parseInt(t[0]));
                else {
                    for (var n = -1, r = 0; r < i; r++)
                        if (t[r].indexOf("px") > 0 || t[r].indexOf("pt") > 0) {
                            n = r, this._size = parseInt(t[r]), this._size <= 0 && (console.error("font parse error:" + e), this._size = 14);
                            break
                        }
                    var a = n + 1,
                        s = t[a];
                    for (a++; a < i; a++)
                        s += " " + t[a];
                    this._family = s.split(",")[0], this._italic = t.indexOf("italic") >= 0, this._bold = t.indexOf("bold") >= 0
                }
            }
        }], [{
            key: "Parse",
            value: function(e) {
                if (e === FontInfo._lastFont)
                    return FontInfo._lastFontInfo;
                var t = FontInfo._cache[e];
                return t || (t = FontInfo._cache[e] = new FontInfo(e)), FontInfo._lastFont = e, FontInfo._lastFontInfo = t, t
            }
        }]), FontInfo
    }();
    Ve.EMPTY = new Ve(null), Ve._cache = {}, Ve._gfontID = 0, Ve._lastFont = "";
    var Ye = function() {
            function WordText() {
                _classCallCheck(this, WordText), this.save = [], this.toUpperCase = null, this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1, this.scalex = 1, this.scaley = 1
            }
            return _createClass(WordText, [{
                key: "setText",
                value: function(e) {
                    this.changed = !0, this._text = e, this.width = -1, this.cleanCache()
                }
            }, {
                key: "toString",
                value: function() {
                    return this._text
                }
            }, {
                key: "charCodeAt",
                value: function(e) {
                    return this._text ? this._text.charCodeAt(e) : NaN
                }
            }, {
                key: "charAt",
                value: function(e) {
                    return this._text ? this._text.charAt(e) : null
                }
            }, {
                key: "cleanCache",
                value: function() {
                    this.pageChars.forEach((function(e) {
                        var t = e.tex;
                        e.words;
                        1 == e.words.length && t && t.ri && t.destroy()
                    })), this.pageChars = [], this.startID = 0, this.scalex = 1, this.scaley = 1
                }
            }, {
                key: "length",
                get: function() {
                    return this._text ? this._text.length : 0
                }
            }]), WordText
        }(),
        He = function() {
            function CharRenderInfo() {
                _classCallCheck(this, CharRenderInfo), this.char = "", this.deleted = !1, this.uv = new Array(8), this.pos = 0, this.orix = 0, this.oriy = 0, this.touchTick = 0, this.isSpace = !1
            }
            return _createClass(CharRenderInfo, [{
                key: "touch",
                value: function() {
                    var e = ge.loopCount;
                    this.touchTick != e && this.tex.touchRect(this, e), this.touchTick = e
                }
            }]), CharRenderInfo
        }(),
        Xe = function() {
            function ICharRender() {
                _classCallCheck(this, ICharRender), this.fontsz = 16
            }
            return _createClass(ICharRender, [{
                key: "getWidth",
                value: function(e, t) {
                    return 0
                }
            }, {
                key: "scale",
                value: function(e, t) {}
            }, {
                key: "getCharBmp",
                value: function(e, t, i, n, r, a, s, o, l, h) {
                    arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
                    return null
                }
            }, {
                key: "canvasWidth",
                get: function() {
                    return 0
                },
                set: function(e) {}
            }]), ICharRender
        }(),
        ze = function() {
            function Browser() {
                _classCallCheck(this, Browser)
            }
            return _createClass(Browser, null, [{
                key: "__init__",
                value: function() {
                    var e = window.Laya || i.Laya;
                    if (Browser._window)
                        return Browser._window;
                    var t = Browser._window = window,
                        n = Browser._document = t.document,
                        r = Browser.userAgent = t.navigator.userAgent,
                        a = t.navigator.maxTouchPoints || 0,
                        s = t.navigator.platform;
                    r.indexOf("AlipayMiniGame") > -1 && "my" in Browser.window && (window.aliPayMiniGame(e, e), e.ALIMiniAdapter ? e.ALIMiniAdapter.enable() : console.error("请先添加阿里小游戏适配库")), -1 == r.indexOf("OPPO") && r.indexOf("MiniGame") > -1 && "wx" in Browser.window && ("bl" in Browser.window ? (window.biliMiniGame(e, e), e.BLMiniAdapter ? e.BLMiniAdapter.enable() : console.error("请引入bilibili小游戏的适配库：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")) : "qq" in Browser.window ? (window.qqMiniGame(e, e), e.QQMiniAdapter ? e.QQMiniAdapter.enable() : console.error("请引入手机QQ小游戏的适配库：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")) : (window.wxMiniGame(e, e), e.MiniAdpter ? e.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0"))), r.indexOf("MiniGame") > -1 && "qq" in Browser.window && (window.qqMiniGame(e, e), e.QQMiniAdapter ? e.QQMiniAdapter.enable() : console.error("请先添加小游戏适配库,详细教程")), r.indexOf("SwanGame") > -1 && (window.bdMiniGame(e, e), e.BMiniAdapter ? e.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), r.indexOf("QuickGame") > -1 && (window.miMiniGame(e, e), e.KGMiniAdapter ? e.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (window.qgMiniGame(e, e), e.QGMiniAdapter ? e.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), r.indexOf("VVGame") > -1 && (window.vvMiniGame(e, e), e.VVMiniAdapter ? e.VVMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库")), t.trace = console.log, t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                        return t.setTimeout(e, 1e3 / 60)
                    };
                    var o = n.body.style;
                    o.margin = 0, o.overflow = "hidden", o["-webkit-user-select"] = "none", o["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
                    for (var l = n.getElementsByTagName("meta"), h = 0, u = !1, c = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; h < l.length;) {
                        var _ = l[h];
                        if ("viewport" == _.name) {
                            _.content = c, u = !0;
                            break
                        }
                        h++
                    }
                    return u || ((_ = n.createElement("meta")).name = "viewport", _.content = c, n.getElementsByTagName("head")[0].appendChild(_)), Browser.onMobile = !!window.isConchApp || r.indexOf("Mobile") > -1, Browser.onIOS = !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), Browser.onIPhone = r.indexOf("iPhone") > -1, Browser.onMac = r.indexOf("Mac OS X") > -1, Browser.onIPad = r.indexOf("iPad") > -1 || "MacIntel" === s && a > 1, Browser.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, Browser.onWP = r.indexOf("Windows Phone") > -1, Browser.onQQBrowser = r.indexOf("QQBrowser") > -1, Browser.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1, Browser.onIE = !!t.ActiveXObject || "ActiveXObject" in t, Browser.onWeiXin = r.indexOf("MicroMessenger") > -1, Browser.onSafari = r.indexOf("Safari") > -1, Browser.onPC = !Browser.onMobile, Browser.onMiniGame = r.indexOf("MiniGame") > -1, Browser.onBDMiniGame = r.indexOf("SwanGame") > -1, Browser.onLayaRuntime = !!Browser.window.conch, r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 ? (Browser.onQGMiniGame = !0, Browser.onMiniGame = !1) : "qq" in Browser.window && r.indexOf("MiniGame") > -1 ? (Browser.onQQMiniGame = !0, Browser.onMiniGame = !1) : "bl" in Browser.window && r.indexOf("MiniGame") > -1 && (Browser.onBLMiniGame = !0, Browser.onMiniGame = !0), Browser.onVVMiniGame = r.indexOf("VVGame") > -1, Browser.onKGMiniGame = r.indexOf("QuickGame") > -1, r.indexOf("AlipayMiniGame") > -1 && (Browser.onAlipayMiniGame = !0, Browser.onMiniGame = !1), t
                }
            }, {
                key: "createElement",
                value: function(e) {
                    return Browser.__init__(), Browser._document.createElement(e)
                }
            }, {
                key: "getElementById",
                value: function(e) {
                    return Browser.__init__(), Browser._document.getElementById(e)
                }
            }, {
                key: "removeElement",
                value: function(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
            }, {
                key: "now",
                value: function() {
                    return Date.now()
                }
            }, {
                key: "clientWidth",
                get: function() {
                    return Browser.__init__(), Browser._window.innerWidth || Browser._document.body.clientWidth
                }
            }, {
                key: "clientHeight",
                get: function() {
                    return Browser.__init__(), Browser._window.innerHeight || Browser._document.body.clientHeight || Browser._document.documentElement.clientHeight
                }
            }, {
                key: "width",
                get: function() {
                    return Browser.__init__(), (i.stage && i.stage.canvasRotation ? Browser.clientHeight : Browser.clientWidth) * Browser.pixelRatio
                }
            }, {
                key: "height",
                get: function() {
                    return Browser.__init__(), (i.stage && i.stage.canvasRotation ? Browser.clientWidth : Browser.clientHeight) * Browser.pixelRatio
                }
            }, {
                key: "pixelRatio",
                get: function() {
                    return Browser._pixelRatio < 0 && (Browser.__init__(), Browser.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? Browser._pixelRatio = 2 : (Browser._pixelRatio = Browser._window.devicePixelRatio || 1, Browser._pixelRatio < 1 && (Browser._pixelRatio = 1))), Browser._pixelRatio
                }
            }, {
                key: "container",
                get: function() {
                    return Browser._container || (Browser.__init__(), Browser._container = Browser.createElement("div"), Browser._container.id = "layaContainer", Browser._document.body.appendChild(Browser._container)), Browser._container
                },
                set: function(e) {
                    Browser._container = e
                }
            }, {
                key: "window",
                get: function() {
                    return Browser._window || Browser.__init__()
                }
            }, {
                key: "document",
                get: function() {
                    return Browser.__init__(), Browser._document
                }
            }]), Browser
        }();
    ze._pixelRatio = -1, ze.mainCanvas = null, ze.hanzi = new RegExp("^[一-龥]$"), ze.fontMap = [], ze.measureText = function(e, t) {
        var i = ze.hanzi.test(e);
        if (i && ze.fontMap[t])
            return ze.fontMap[t];
        var n = ze.context;
        n.font = t;
        var r = n.measureText(e);
        return i && (ze.fontMap[t] = r), r
    };
    var Ke = function(e) {
        function CharRender_Canvas(e, t) {
            var i, n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return _classCallCheck(this, CharRender_Canvas), (i = _possibleConstructorReturn(this, _getPrototypeOf(CharRender_Canvas).call(this))).ctx = null, i.lastScaleX = 1, i.lastScaleY = 1, i.maxTexW = 0, i.maxTexH = 0, i.scaleFontSize = !0, i.showDbgInfo = !1, i.supportImageData = !0, i.maxTexW = e, i.maxTexH = t, i.scaleFontSize = n, i.supportImageData = r, i.showDbgInfo = a, CharRender_Canvas.canvas || (CharRender_Canvas.canvas = ze.createElement("canvas"), CharRender_Canvas.canvas.width = 1024, CharRender_Canvas.canvas.height = 512, CharRender_Canvas.canvas.style.left = "-10000px", CharRender_Canvas.canvas.style.position = "absolute", document.body.appendChild(CharRender_Canvas.canvas), i.ctx = CharRender_Canvas.canvas.getContext("2d")), i
        }
        return _inherits(CharRender_Canvas, e), _createClass(CharRender_Canvas, [{
            key: "getWidth",
            value: function(e, t) {
                return this.ctx ? (this.ctx._lastFont != e && (this.ctx.font = e, this.ctx._lastFont = e), this.ctx.measureText(t).width) : 0
            }
        }, {
            key: "scale",
            value: function(e, t) {
                if (!this.supportImageData)
                    return this.lastScaleX = e, void(this.lastScaleY = t);
                this.lastScaleX == e && this.lastScaleY == t || (this.ctx.setTransform(e, 0, 0, t, 0, 0), this.lastScaleX = e, this.lastScaleY = t)
            }
        }, {
            key: "getCharBmp",
            value: function(e, t, i, n, r, a, s, o, l, h) {
                var u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
                if (!this.supportImageData)
                    return this.getCharCanvas(e, t, i, n, r, a, s, o, l, h);
                var c = this.ctx,
                    _ = this.fontsz;
                c.font != t && (c.font = t, c._lastFont = t), a.width = c.measureText(e).width;
                var d = a.width * this.lastScaleX,
                    f = a.height * this.lastScaleY;
                d += (s + l) * this.lastScaleX, f += (o + h) * this.lastScaleY, d = Math.ceil(d), f = Math.ceil(f);
                var v = (d = Math.min(d, CharRender_Canvas.canvas.width)) + 2 * i + 1,
                    p = (f = Math.min(f, CharRender_Canvas.canvas.height)) + 2 * i + 1;
                u && (v = Math.max(v, u[0] + u[2] + 1), p = Math.max(p, u[1] + u[3] + 1)), c.clearRect(0, 0, v / this.lastScaleX + 1, p / this.lastScaleY + 1), c.save(), c.textBaseline = "middle", i > 0 && (c.strokeStyle = r, c.lineWidth = i, c.strokeText(e, s, o + _ / 2)), n && (c.fillStyle = n, c.fillText(e, s, o + _ / 2)), this.showDbgInfo && (c.strokeStyle = "#ff0000", c.strokeRect(1, 1, d - 2, f - 2), c.strokeStyle = "#00ff00", c.strokeRect(s, o, a.width, a.height)), u && -1 == u[2] && (u[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX));
                var g = u ? c.getImageData(u[0], u[1], u[2], u[3] + 1) : c.getImageData(0, 0, d, f + 1);
                return c.restore(), a.bmpWidth = g.width, a.bmpHeight = g.height, g
            }
        }, {
            key: "getCharCanvas",
            value: function(e, t, i, n, r, a, s, o, l, h) {
                var u = this.ctx;
                u.font != t && (u.font = t, u._lastFont = t), a.width = u.measureText(e).width;
                var c = a.width * this.lastScaleX,
                    _ = a.height * this.lastScaleY;
                c += (s + l) * this.lastScaleX, _ += (o + h) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW), _ = Math.min(_, this.maxTexH), CharRender_Canvas.canvas.width = Math.min(c + 1, this.maxTexW), CharRender_Canvas.canvas.height = Math.min(_ + 1, this.maxTexH), u.font = t, u.clearRect(0, 0, c + 1 + i, _ + 1 + i), u.setTransform(1, 0, 0, 1, 0, 0), u.save(), this.scaleFontSize && u.scale(this.lastScaleX, this.lastScaleY), u.translate(s, o), u.textAlign = "left";
                var d = this.fontsz;
                return u.textBaseline = "middle", i > 0 ? (u.strokeStyle = r, u.fillStyle = n, u.lineWidth = i, u.fillAndStrokeText ? u.fillAndStrokeText(e, 0, d / 2) : (u.strokeText(e, 0, d / 2), u.fillText(e, 0, d / 2))) : n && (u.fillStyle = n, u.fillText(e, 0, d / 2)), this.showDbgInfo && (u.strokeStyle = "#ff0000", u.strokeRect(0, 0, c, _), u.strokeStyle = "#00ff00", u.strokeRect(0, 0, a.width, a.height)), u.restore(), a.bmpWidth = CharRender_Canvas.canvas.width, a.bmpHeight = CharRender_Canvas.canvas.height, CharRender_Canvas.canvas
            }
        }, {
            key: "canvasWidth",
            get: function() {
                return CharRender_Canvas.canvas.width
            },
            set: function(e) {
                CharRender_Canvas.canvas.width != e && (CharRender_Canvas.canvas.width = e, e > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY))
            }
        }]), CharRender_Canvas
    }(Xe);
    Ke.canvas = null;
    var je = function(e) {
            function CharRender_Native() {
                var e;
                return _classCallCheck(this, CharRender_Native), (e = _possibleConstructorReturn(this, _getPrototypeOf(CharRender_Native).call(this))).lastFont = "", e.lastScaleX = 1, e.lastScaleY = 1, e
            }
            return _inherits(CharRender_Native, e), _createClass(CharRender_Native, [{
                key: "getWidth",
                value: function(e, t) {
                    return window.conchTextCanvas ? (window.conchTextCanvas.font = e, this.lastFont = e, window.conchTextCanvas.measureText(t).width) : 0
                }
            }, {
                key: "scale",
                value: function(e, t) {
                    this.lastScaleX = e, this.lastScaleY = t
                }
            }, {
                key: "getCharBmp",
                value: function(e, t, i, n, r, a, s, o, l, h) {
                    arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
                    if (!window.conchTextCanvas)
                        return null;
                    window.conchTextCanvas.font = t, this.lastFont = t;
                    a.width = window.conchTextCanvas.measureText(e).width, a.height;
                    window.conchTextCanvas.scale && window.conchTextCanvas.scale(this.lastScaleX, this.lastScaleY);
                    var u = j.create(r),
                        c = u.numColor,
                        _ = j.create(n),
                        d = _.numColor,
                        f = window.conchTextCanvas.getTextBitmapData(e, d, i > 2 ? 2 : i, c);
                    return a.bmpWidth = f.width, a.bmpHeight = f.height, f
                }
            }]), CharRender_Native
        }(Xe),
        Qe = function() {
            function TextRender() {
                _classCallCheck(this, TextRender), this.fontSizeInfo = {}, this.mapFont = {}, this.fontID = 0, this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0, this.textAtlases = [], this.isoTextures = [], this.lastFont = null, this.fontSizeW = 0, this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, this.tmpAtlasPos = new v, this.textureMem = 0, i.TextAtlas = Ge;
                var e = !1,
                    t = i.Laya.MiniAdpter;
                t && t.systemInfo && t.systemInfo.system && (e = "ios 10.1.1" === t.systemInfo.system.toLowerCase()), i.Browser.onMiniGame && !e && (TextRender.isWan1Wan = !0), this.charRender = i.Render.isConchApp ? new je : new Ke(TextRender.atlasWidth, TextRender.atlasWidth, TextRender.scaleFontWithCtx, !TextRender.isWan1Wan, !1), TextRender.textRenderInst = this, i.Laya.textRender = this, TextRender.atlasWidth2 = TextRender.atlasWidth * TextRender.atlasWidth
            }
            return _createClass(TextRender, [{
                key: "setFont",
                value: function(e) {
                    if (this.lastFont != e) {
                        this.lastFont = e;
                        var t = this.getFontSizeInfo(e._family),
                            i = t >> 24,
                            n = t >> 16 & 255,
                            r = t >> 8 & 255,
                            a = 255 & t,
                            s = e._size / TextRender.standardFontSize;
                        this.fontSizeOffX = Math.ceil(i * s), this.fontSizeOffY = Math.ceil(n * s), this.fontSizeW = Math.ceil(r * s), this.fontSizeH = Math.ceil(a * s), e._font.indexOf("italic") >= 0 ? this.fontStr = e._font.replace("italic", "") : this.fontStr = e._font
                    }
                }
            }, {
                key: "getNextChar",
                value: function(e) {
                    var t = e.length,
                        i = this._curStrPos;
                    if (i >= t)
                        return null;
                    for (var n = i, r = 0; n < t; n++) {
                        var a = e.charCodeAt(n);
                        if (a >>> 11 == 27) {
                            if (1 == r)
                                break;
                            r = 1, n++
                        } else if (65038 === a || 65039 === a);
                        else if (8205 == a)
                            r = 2;
                        else if (0 == r)
                            r = 1;
                        else if (1 == r)
                            break
                    }
                    return this._curStrPos = n, e.substring(i, n)
                }
            }, {
                key: "filltext",
                value: function(e, t, n, r, a, s, o, l, h) {
                    var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
                    if (!(t.length <= 0)) {
                        var c = Ve.Parse(a),
                            _ = 0;
                        switch (h) {
                            case "center":
                                _ = i.Context.ENUM_TEXTALIGN_CENTER;
                                break;
                            case "right":
                                _ = i.Context.ENUM_TEXTALIGN_RIGHT
                        }
                        this._fast_filltext(e, t, null, n, r, c, s, o, l, _, u)
                    }
                }
            }, {
                key: "fillWords",
                value: function(e, t, i, n, r, a, s, o) {
                    if (t && !(t.length <= 0)) {
                        var l = "string" == typeof r ? Ve.Parse(r) : r;
                        this._fast_filltext(e, null, t, i, n, l, a, s, o, 0, 0)
                    }
                }
            }, {
                key: "_fast_filltext",
                value: function(e, t, n, r, a, s, o, l, h, u) {
                    arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
                    if (!(t && t.length < 1 || n && n.length < 1)) {
                        if (h < 0 && (h = 0), this.setFont(s), this.fontScaleX = this.fontScaleY = 1, TextRender.scaleFontWithCtx) {
                            var c = 1,
                                _ = 1;
                            if (i.Render.isConchApp && !window.conchTextCanvas.scale || (c = e.getMatScaleX(), _ = e.getMatScaleY()), c < 1e-4 || _ < .1)
                                return;
                            c > 1 && (this.fontScaleX = c), _ > 1 && (this.fontScaleY = _)
                        }
                        s._italic && (e._italicDeg = 13);
                        var d = t,
                            f = !n && t instanceof Ye,
                            v = t,
                            p = !!n,
                            g = f ? d.pageChars : [],
                            y = 0;
                        switch (f ? (v = d._text, (y = d.width) < 0 && (y = d.width = this.charRender.getWidth(this.fontStr, v))) : y = v ? this.charRender.getWidth(this.fontStr, v) : 0, u) {
                            case i.Context.ENUM_TEXTALIGN_CENTER:
                                r -= y / 2;
                                break;
                            case i.Context.ENUM_TEXTALIGN_RIGHT:
                                r -= y
                        }
                        d && g && this.hasFreedText(g) && (g = d.pageChars = []);
                        var m = null,
                            T = this.renderPerChar = !f || TextRender.forceSplitRender || p || f && d.splitRender;
                        if (!g || g.length < 1)
                            if (f && (d.scalex = this.fontScaleX, d.scaley = this.fontScaleY), T) {
                                var C, x = 0,
                                    k = 0;
                                for (this._curStrPos = 0;;) {
                                    if (n) {
                                        var S = n[this._curStrPos++];
                                        S ? (C = S.char, x = S.x, k = S.y) : C = null
                                    } else
                                        C = this.getNextChar(v);
                                    if (!C)
                                        break;
                                    if (!(m = this.getCharRenderInfo(C, s, o, l, h, !1)))
                                        break;
                                    if (m.isSpace);
                                    else {
                                        var R = g[m.tex.id];
                                        if (R)
                                            R = R.words;
                                        else {
                                            var b = {
                                                texgen: m.tex.genID,
                                                tex: m.tex,
                                                words: []
                                            };
                                            g[m.tex.id] = b, R = b.words
                                        }
                                        R.push({
                                            ri: m,
                                            x: x,
                                            y: k,
                                            w: m.bmpWidth / this.fontScaleX,
                                            h: m.bmpHeight / this.fontScaleY
                                        }), x += m.width
                                    }
                                }
                            } else {
                                var E = TextRender.noAtlas || y * this.fontScaleX > TextRender.atlasWidth;
                                m = this.getCharRenderInfo(v, s, o, l, h, E), g[0] = {
                                    texgen: m.tex.genID,
                                    tex: m.tex,
                                    words: [{
                                        ri: m,
                                        x: 0,
                                        y: 0,
                                        w: m.bmpWidth / this.fontScaleX,
                                        h: m.bmpHeight / this.fontScaleY
                                    }]
                                }
                            }
                        this._drawResortedWords(e, r, a, g), e._italicDeg = 0
                    }
                }
            }, {
                key: "_drawResortedWords",
                value: function(e, t, n, r) {
                    var a = !!e._charSubmitCache && e._charSubmitCache._enable,
                        s = e._curMat;
                    r.length;
                    for (var o in r) {
                        var l = r[o];
                        if (l) {
                            var h = l.words,
                                u = h.length;
                            if (!(u <= 0))
                                for (var c = r[o].tex, _ = 0; _ < u; _++) {
                                    var d = h[_],
                                        f = d.ri;
                                    if (!f.isSpace) {
                                        if (f.touch(), e.drawTexAlign = !0, i.Render.isConchApp)
                                            e._drawTextureM(c.texture, t + d.x - f.orix, n + d.y - f.oriy, d.w, d.h, null, 1, f.uv);
                                        else {
                                            var v = c;
                                            e._inner_drawTexture(v.texture, v.id, t + d.x - f.orix, n + d.y - f.oriy, d.w, d.h, s, f.uv, 1, a)
                                        }
                                        e.touches && e.touches.push(f)
                                    }
                                }
                        }
                    }
                }
            }, {
                key: "hasFreedText",
                value: function(e) {
                    for (var t = e.length, i = 0; i < t; i++) {
                        var n = e[i];
                        if (n) {
                            var r = n.tex;
                            if (r.__destroyed || r.genID != n.texgen)
                                return !0
                        }
                    }
                    return !1
                }
            }, {
                key: "getCharRenderInfo",
                value: function(e, t, n, r, a) {
                    var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        o = this.mapFont[t._family];
                    null == o && (this.mapFont[t._family] = o = this.fontID++);
                    var l = e + "_" + o + "_" + t._size + "_" + n;
                    a > 0 && (l += "_" + r + a), t._bold && (l += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (l += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                    var h, u, c = 0,
                        _ = this.textAtlases.length;
                    if (!s)
                        for (c = 0; c < _; c++)
                            if (h = (u = this.textAtlases[c]).charMaps[l])
                                return h.touch(), h;
                    h = new He, this.charRender.scale(this.fontScaleX, this.fontScaleY), h.char = e, h.height = t._size;
                    var d = i.Render.isConchApp ? 0 : t._size / 3 | 0,
                        f = null;
                    a || (a = 0);
                    var v = Math.ceil((this.charRender.getWidth(this.fontStr, e) + 2 * a) * this.fontScaleX);
                    if (v > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, v + 2 * d)), s) {
                        if (this.charRender.fontsz = t._size, f = this.charRender.getCharBmp(e, this.fontStr, a, n, r, h, d, d, d, d, null)) {
                            var p = Ne.getTextTexture(f.width, f.height);
                            p.addChar(f, 0, 0, h.uv), h.tex = p, h.orix = d, h.oriy = d, p.ri = h, this.isoTextures.push(p)
                        }
                    } else {
                        var g = e.length,
                            y = 1 * a,
                            m = Math.ceil((this.fontSizeW + 2 * y) * this.fontScaleX),
                            T = Math.ceil((this.fontSizeH + 2 * y) * this.fontScaleY);
                        TextRender.imgdtRect[0] = (d - this.fontSizeOffX - y) * this.fontScaleX | 0, TextRender.imgdtRect[1] = (d - this.fontSizeOffY - y) * this.fontScaleY | 0, this.renderPerChar || 1 == g ? (TextRender.imgdtRect[2] = Math.max(v, m), TextRender.imgdtRect[3] = Math.max(v, T)) : (TextRender.imgdtRect[2] = -1, TextRender.imgdtRect[3] = T), this.charRender.fontsz = t._size, (f = this.charRender.getCharBmp(e, this.fontStr, a, n, r, h, d, d, d, d, TextRender.imgdtRect)) && (u = this.addBmpData(f, h), TextRender.isWan1Wan ? (h.orix = d, h.oriy = d) : (h.orix = this.fontSizeOffX + y, h.oriy = this.fontSizeOffY + y), u.charMaps[l] = h)
                    }
                    return h
                }
            }, {
                key: "addBmpData",
                value: function(e, t) {
                    for (var i, n = e.width, r = e.height, a = this.textAtlases.length, s = !1, o = 0; o < a && !(s = (i = this.textAtlases[o]).getAEmpty(n, r, this.tmpAtlasPos)); o++);
                    if (!s) {
                        if (i = new Ge, this.textAtlases.push(i), !(s = i.getAEmpty(n, r, this.tmpAtlasPos)))
                            throw "err1";
                        this.cleanAtlases()
                    }
                    return s && (i.texture.addChar(e, this.tmpAtlasPos.x, this.tmpAtlasPos.y, t.uv), t.tex = i.texture), i
                }
            }, {
                key: "GC",
                value: function() {
                    for (var e = 0, t = this.textAtlases.length, i = TextRender.destroyAtlasDt, n = 0, r = ge.loopCount, a = -1, s = 0, o = null, l = null; e < t; e++) {
                        if (o = (l = this.textAtlases[e]).texture) {
                            o.curUsedCovRate, n += o.curUsedCovRateAtlas;
                            var h = l.usedRate - o.curUsedCovRateAtlas;
                            s < h && (s = h, a = e)
                        }
                        r - l.texture.lastTouchTm > i && (TextRender.showLog && console.log(l.texture.id), l.destroy(), this.textAtlases[e] = this.textAtlases[t - 1], t--, e--, a = -1)
                    }
                    for (this.textAtlases.length = t, t = this.isoTextures.length, e = 0; e < t; e++)
                        r - (o = this.isoTextures[e]).lastTouchTm > TextRender.destroyUnusedTextureDt && (o.ri.deleted = !0, o.ri.tex = null, o.destroy(), this.isoTextures[e] = this.isoTextures[t - 1], t--, e--);
                    this.isoTextures.length = t;
                    var u = this.textAtlases.length > 1 && this.textAtlases.length - n >= 2;
                    (TextRender.atlasWidth * TextRender.atlasWidth * 4 * this.textAtlases.length > TextRender.cleanMem || u || TextRender.simClean) && (TextRender.simClean = !1, TextRender.showLog && console.log("清理使用率低的贴图。总使用率:", n, ":", this.textAtlases.length, "最差贴图:" + a), a >= 0 && ((l = this.textAtlases[a]).destroy(), this.textAtlases[a] = this.textAtlases[this.textAtlases.length - 1], this.textAtlases.length = this.textAtlases.length - 1)), Ne.clean()
                }
            }, {
                key: "cleanAtlases",
                value: function() {}
            }, {
                key: "getCharBmp",
                value: function(e) {}
            }, {
                key: "checkBmpLine",
                value: function(e, t, i, n) {
                    this.bmpData32.buffer != e.data.buffer && (this.bmpData32 = new Uint32Array(e.data.buffer));
                    for (var r = e.width * t + i, a = i; a < n; a++)
                        if (0 != this.bmpData32[r++])
                            return !0;
                    return !1
                }
            }, {
                key: "updateBbx",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = e.width,
                        r = e.height,
                        a = 0,
                        s = t[1],
                        o = 0,
                        l = s;
                    if (this.checkBmpLine(e, s, 0, n))
                        for (;;) {
                            if ((l = (s + o) / 2 | 0) + 1 >= s) {
                                t[1] = l;
                                break
                            }
                            this.checkBmpLine(e, l, 0, n) ? s = l : o = l
                        }
                    if (t[3] > r)
                        t[3] = r;
                    else if (l = s = t[3], o = r, this.checkBmpLine(e, s, 0, n))
                        for (;;) {
                            if ((l = (s + o) / 2 | 0) - 1 <= s) {
                                t[3] = l;
                                break
                            }
                            this.checkBmpLine(e, l, 0, n) ? s = l : o = l
                        }
                    if (!i) {
                        var h = t[0],
                            u = n * t[1];
                        for (l = t[1]; l < t[3]; l++) {
                            for (a = 0; a < h; a++)
                                if (0 != this.bmpData32[u + a]) {
                                    h = a;
                                    break
                                }
                            u += n
                        }
                        t[0] = h;
                        var c = t[2];
                        for (u = n * t[1], l = t[1]; l < t[3]; l++) {
                            for (a = c; a < n; a++)
                                if (0 != this.bmpData32[u + a]) {
                                    c = a;
                                    break
                                }
                            u += n
                        }
                        t[2] = c
                    }
                }
            }, {
                key: "getFontSizeInfo",
                value: function(e) {
                    var t = this.fontSizeInfo[e];
                    if (null != t)
                        return t;
                    var n = "bold " + TextRender.standardFontSize + "px " + e;
                    if (TextRender.isWan1Wan) {
                        this.fontSizeW = 1.5 * this.charRender.getWidth(n, "有"), this.fontSizeH = 1.5 * TextRender.standardFontSize;
                        var r = this.fontSizeW << 8 | this.fontSizeH;
                        return this.fontSizeInfo[e] = r, r
                    }
                    TextRender.pixelBBX[0] = TextRender.standardFontSize / 2, TextRender.pixelBBX[1] = TextRender.standardFontSize / 2, TextRender.pixelBBX[2] = TextRender.standardFontSize, TextRender.pixelBBX[3] = TextRender.standardFontSize;
                    var a = 16,
                        s = 16;
                    this.charRender.scale(1, 1), TextRender.tmpRI.height = TextRender.standardFontSize, this.charRender.fontsz = TextRender.standardFontSize;
                    var o = this.charRender.getCharBmp("g", n, 0, "red", null, TextRender.tmpRI, a, s, 16, 16);
                    i.Render.isConchApp && (o.data = new Uint8ClampedArray(o.data)), this.bmpData32 = new Uint32Array(o.data.buffer), this.updateBbx(o, TextRender.pixelBBX, !1), o = this.charRender.getCharBmp("有", n, 0, "red", null, TextRender.tmpRI, s, s, 16, 16), i.Render.isConchApp && (o.data = new Uint8ClampedArray(o.data)), this.bmpData32 = new Uint32Array(o.data.buffer), TextRender.pixelBBX[2] < a + TextRender.tmpRI.width && (TextRender.pixelBBX[2] = a + TextRender.tmpRI.width), this.updateBbx(o, TextRender.pixelBBX, !1), i.Render.isConchApp && (a = 0, s = 0);
                    var l = Math.max(a - TextRender.pixelBBX[0], 0) << 24 | Math.max(s - TextRender.pixelBBX[1], 0) << 16 | TextRender.pixelBBX[2] - TextRender.pixelBBX[0] << 8 | TextRender.pixelBBX[3] - TextRender.pixelBBX[1];
                    return this.fontSizeInfo[e] = l, l
                }
            }, {
                key: "printDbgInfo",
                value: function() {
                    for (var e in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + TextRender.atlasWidth + "x" + TextRender.atlasWidth, " 用canvas:", TextRender.isWan1Wan), console.log("图集占用空间:" + TextRender.atlasWidth * TextRender.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), console.log("缓存用到的字体:"), this.mapFont) {
                        var t = this.getFontSizeInfo(e),
                            i = t >> 24,
                            n = t >> 16 & 255,
                            r = t >> 8 & 255,
                            a = 255 & t;
                        console.log("    " + e, " off:", i, n, " size:", r, a)
                    }
                    var s = 0;
                    console.log("缓存数据:");
                    var o = 0,
                        l = 0;
                    this.textAtlases.forEach((function(e) {
                        var t = e.texture.id,
                            i = ge.loopCount - e.texture.lastTouchTm,
                            n = i > 0 ? i + "帧以前" : "当前帧";
                        for (var r in o += e.texture.curUsedCovRate, l += e.texture.curUsedCovRateAtlas, console.log("--图集(id:" + t + ",当前使用率:" + (1e3 * e.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * e.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * e.usedRate | 0, "%, 使用于:" + n + ")--:"), e.charMaps) {
                            var a = e.charMaps[r];
                            console.log("     off:", a.orix, a.oriy, " bmp宽高:", a.bmpWidth, a.bmpHeight, "无效:", a.deleted, "touchdt:", ge.loopCount - a.touchTick, "位置:", a.uv[0] * TextRender.atlasWidth | 0, a.uv[1] * TextRender.atlasWidth | 0, "字符:", a.char, "key:", r), s++
                        }
                    })), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach((function(e) {
                        console.log("    size:", e._texW, e._texH, "touch间隔:", ge.loopCount - e.lastTouchTm, "char:", e.ri.char)
                    })), console.log("总缓存:", s, "总使用率:", o, "总当前图集使用率:", l)
                }
            }, {
                key: "showAtlas",
                value: function(e, t, n, r, a, s) {
                    if (!this.textAtlases[e])
                        return console.log("没有这个图集"), null;
                    var o = new i.Sprite,
                        l = this.textAtlases[e].texture,
                        h = {
                            width: TextRender.atlasWidth,
                            height: TextRender.atlasWidth,
                            sourceWidth: TextRender.atlasWidth,
                            sourceHeight: TextRender.atlasWidth,
                            offsetX: 0,
                            offsetY: 0,
                            getIsReady: function() {
                                return !0
                            },
                            _addReference: function() {},
                            _removeReference: function() {},
                            _getSource: function() {
                                return l._getSource()
                            },
                            bitmap: {
                                id: l.id
                            },
                            _uv: We.DEF_UV
                        };
                    return o.size = function(e, i) {
                        return this.width = e, this.height = i, o.graphics.clear(), o.graphics.drawRect(0, 0, o.width, o.height, t), o.graphics.drawTexture(h, 0, 0, o.width, o.height), this
                    }, o.graphics.drawRect(0, 0, a, s, t), o.graphics.drawTexture(h, 0, 0, a, s), o.pos(n, r), i.stage.addChild(o), o
                }
            }, {
                key: "filltext_native",
                value: function(e, t, n, r, a, s, o, l, h, u) {
                    var c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
                    if (!(t && t.length <= 0 || n && n.length < 1)) {
                        var _ = Ve.Parse(s),
                            d = 0;
                        switch (u) {
                            case "center":
                                d = i.Context.ENUM_TEXTALIGN_CENTER;
                                break;
                            case "right":
                                d = i.Context.ENUM_TEXTALIGN_RIGHT
                        }
                        return this._fast_filltext(e, t, n, r, a, _, o, l, h, d, c)
                    }
                }
            }]), TextRender
        }();
    Qe.useOldCharBook = !1, Qe.atlasWidth = 1024, Qe.noAtlas = !1, Qe.forceSplitRender = !1, Qe.forceWholeRender = !1, Qe.scaleFontWithCtx = !0, Qe.standardFontSize = 32, Qe.destroyAtlasDt = 10, Qe.checkCleanTextureDt = 2e3, Qe.destroyUnusedTextureDt = 3e3, Qe.cleanMem = 104857600, Qe.isWan1Wan = !1, Qe.showLog = !1, Qe.debugUV = !1, Qe.tmpRI = new He, Qe.pixelBBX = [0, 0, 0, 0], Qe.imgdtRect = [0, 0, 0, 0], Qe.simClean = !1, Ne.gTextRender = Qe;
    var qe = function() {
        function Context() {
            if (_classCallCheck(this, Context), this._tmpMatrix = new f, this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]), this._tempUV = new Float32Array(8), this._drawTriUseAbsMatrix = !1, this._id = ++Context._COUNT, this._other = null, this._renderNextSubmitIndex = 0, this._path = null, this._drawCount = 1, this._width = Context._MAXSIZE, this._height = Context._MAXSIZE, this._renderCount = 0, this._submits = null, this._curSubmit = null, this._submitKey = new H, this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = Context.MAXCLIPRECT, this._globalClipMatrix = new f(Context._MAXSIZE, 0, 0, Context._MAXSIZE, 0, 0), this._clipInCache = !1, this._clipInfoID = 0, this._clipID_Gen = 0, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null, this._shader2D = new be, this.sprite = null, this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, this.defTexture = null, this._colorFiler = null, this.drawTexAlign = !1, this._incache = !1, this.isMain = !1, Context._contextcount++, Context._textRender = Context._textRender || new Qe, !this.defTexture) {
                var e = new M(2, 2);
                e.setPixels(new Uint8Array(16)), e.lock = !0, this.defTexture = new We(e)
            }
            this._lastTex = this.defTexture, this.clear()
        }
        return _createClass(Context, [{
            key: "drawImage",
            value: function() {}
        }, {
            key: "getImageData",
            value: function() {}
        }, {
            key: "measureText",
            value: function(e) {
                return null
            }
        }, {
            key: "setTransform",
            value: function() {}
        }, {
            key: "$transform",
            value: function(e, t, i, n, r, a) {}
        }, {
            key: "clearRect",
            value: function(e, t, i, n) {}
        }, {
            key: "_drawRect",
            value: function(e, t, i, n, r) {
                G.renderBatches++, r && (this.fillStyle = r), this.fillRect(e, t, i, n, null)
            }
        }, {
            key: "drawTexture2",
            value: function(e, t, i, n, r, a) {}
        }, {
            key: "transformByMatrix",
            value: function(e, t, i) {
                this.transform(e.a, e.b, e.c, e.d, e.tx + t, e.ty + i)
            }
        }, {
            key: "saveTransform",
            value: function(e) {
                this.save()
            }
        }, {
            key: "restoreTransform",
            value: function(e) {
                this.restore()
            }
        }, {
            key: "drawRect",
            value: function(e, t, i, n, r, a, s) {
                null != r && (this.fillStyle = r, this.fillRect(e, t, i, n)), null != a && (this.strokeStyle = a, this.lineWidth = s, this.strokeRect(e, t, i, n))
            }
        }, {
            key: "alpha",
            value: function(e) {
                this.globalAlpha *= e
            }
        }, {
            key: "_transform",
            value: function(e, t, i) {
                this.translate(t, i), this.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), this.translate(-t, -i)
            }
        }, {
            key: "_rotate",
            value: function(e, t, i) {
                this.translate(t, i), this.rotate(e), this.translate(-t, -i)
            }
        }, {
            key: "_scale",
            value: function(e, t, i, n) {
                this.translate(i, n), this.scale(e, t), this.translate(-i, -n)
            }
        }, {
            key: "_drawLine",
            value: function(e, t, i, n, r, a, s, o, l) {
                this.beginPath(), this.strokeStyle = s, this.lineWidth = o, this.moveTo(e + i, t + n), this.lineTo(e + r, t + a), this.stroke()
            }
        }, {
            key: "_drawLines",
            value: function(e, t, i, n, r, a) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = r, this.addPath(i.slice(), !1, !1, e, t), this.stroke()
            }
        }, {
            key: "drawCurves",
            value: function(e, t, i, n, r) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = r, this.moveTo(e + i[0], t + i[1]);
                for (var a = 2, s = i.length; a < s;)
                    this.quadraticCurveTo(e + i[a++], t + i[a++], e + i[a++], t + i[a++]);
                this.stroke()
            }
        }, {
            key: "_fillAndStroke",
            value: function(e, t, i) {
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                null != e && (this.fillStyle = e, this.fill()), null != t && i > 0 && (this.strokeStyle = t, this.lineWidth = i, this.stroke())
            }
        }, {
            key: "_drawCircle",
            value: function(e, t, i, n, r, a, s) {
                G.renderBatches++, this.beginPath(!0), this.arc(e, t, i, 0, Context.PI2), this.closePath(), this._fillAndStroke(n, r, a)
            }
        }, {
            key: "_drawPie",
            value: function(e, t, i, n, r, a, s, o, l) {
                this.beginPath(), this.moveTo(e, t), this.arc(e, t, i, n, r), this.closePath(), this._fillAndStroke(a, s, o)
            }
        }, {
            key: "_drawPoly",
            value: function(e, t, i, n, r, a, s, o) {
                this.beginPath(), this.addPath(i.slice(), !0, s, e, t), this.closePath(), this._fillAndStroke(n, r, a, s)
            }
        }, {
            key: "_drawPath",
            value: function(e, t, i, n, r) {
                this.beginPath();
                for (var a = 0, s = i.length; a < s; a++) {
                    var o = i[a];
                    switch (o[0]) {
                        case "moveTo":
                            this.moveTo(e + o[1], t + o[2]);
                            break;
                        case "lineTo":
                            this.lineTo(e + o[1], t + o[2]);
                            break;
                        case "arcTo":
                            this.arcTo(e + o[1], t + o[2], e + o[3], t + o[4], o[5]);
                            break;
                        case "closePath":
                            this.closePath()
                    }
                }
                null != n && (this.fillStyle = n.fillStyle, this.fill()), null != r && (this.strokeStyle = r.strokeStyle, this.lineWidth = r.lineWidth || 1, this.lineJoin = r.lineJoin, this.lineCap = r.lineCap, this.miterLimit = r.miterLimit, this.stroke())
            }
        }, {
            key: "clearBG",
            value: function(e, t, i, n) {
                var r = y.mainContext;
                r.clearColor(e, t, i, n), r.clear(r.COLOR_BUFFER_BIT)
            }
        }, {
            key: "_getSubmits",
            value: function() {
                return this._submits
            }
        }, {
            key: "_releaseMem",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._submits) {
                    this._curMat && this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, this._charSubmitCache.clear();
                    for (var t = 0, i = this._submits._length; t < i; t++)
                        this._submits[t].releaseRender();
                    var n;
                    for (this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, this._path = null, this._save = null, t = 0, n = this.meshlist.length; t < n; t++) {
                        var r = this.meshlist[t];
                        r.destroy()
                    }
                    this.meshlist.length = 0, this.sprite = null, e || (this._targets && this._targets.destroy(), this._targets = null)
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                --Context._contextcount, this.sprite = null, this._releaseMem(e), this._charSubmitCache.destroy(), this._mesh.destroy(), e || (this._targets && this._targets.destroy(), this._targets = null)
            }
        }, {
            key: "clear",
            value: function() {
                this._submits || (this._other = Ze.DEFAULT, this._curMat = f.create(), this._charSubmitCache = new Oe, this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = Se.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._triangleMesh = ke.getAMesh(this.isMain), this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [ce.Create(this)], this._save.length = 10, this._shader2D = new be), this._submitKey.clear(), this._mesh.clearVB(), this._drawCount = 1, this._other = Ze.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, this._clipRect = Context.MAXCLIPRECT, this._curSubmit = le.RENDERBASE, le.RENDERBASE._ref = 16777215, le.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = ae.DEFAULT;
                for (var e = 0, t = this._submits._length; e < t; e++)
                    this._submits[e].releaseRender();
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], this._save._length = 1
            }
        }, {
            key: "size",
            value: function(t, i) {
                this._width == t && this._height == i || (this._width = t, this._height = i, this._targets && (this._targets.destroy(), this._targets = new D(t, i, e.RenderTextureFormat.R8G8B8A8, -1)), this.isMain && (y.mainContext.viewport(0, 0, t, i), P.width = t, P.height = i)), 0 === t && 0 === i && this._releaseMem()
            }
        }, {
            key: "getMatScaleX",
            value: function() {
                return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX)
            }
        }, {
            key: "getMatScaleY",
            value: function() {
                return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY)
            }
        }, {
            key: "setFillColor",
            value: function(e) {
                this._fillColor = e
            }
        }, {
            key: "getFillColor",
            value: function() {
                return this._fillColor
            }
        }, {
            key: "translate",
            value: function(e, t) {
                0 === e && 0 === t || (de.save(this), this._curMat._bTransform ? (_e.save(this), this._curMat.tx += e * this._curMat.a + t * this._curMat.c, this._curMat.ty += e * this._curMat.b + t * this._curMat.d) : (this._curMat.tx = e, this._curMat.ty = t))
            }
        }, {
            key: "save",
            value: function() {
                this._save[this._save._length++] = ce.Create(this)
            }
        }, {
            key: "restore",
            value: function() {
                var e = this._save._length,
                    t = this._nBlendType;
                if (!(e < 1)) {
                    for (var i = e - 1; i >= 0; i--) {
                        var n = this._save[i];
                        if (n.restore(this), n.isSaveMark())
                            return void(this._save._length = i)
                    }
                    t != this._nBlendType && (this._curSubmit = le.RENDERBASE)
                }
            }
        }, {
            key: "fillText",
            value: function(e, t, i, n, r, a) {
                var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "";
                Context._textRender.filltext(this, e, t, i, n, r, o, s, a)
            }
        }, {
            key: "drawText",
            value: function(e, t, i, n, r, a) {
                Context._textRender.filltext(this, e, t, i, n, r, null, 0, a)
            }
        }, {
            key: "fillWords",
            value: function(e, t, i, n, r) {
                Context._textRender.fillWords(this, e, t, i, n, r, null, 0)
            }
        }, {
            key: "strokeWord",
            value: function(e, t, i, n, r, a, s) {
                Context._textRender.filltext(this, e, t, i, n, null, r, a, s)
            }
        }, {
            key: "fillBorderText",
            value: function(e, t, i, n, r, a, s, o) {
                Context._textRender.filltext(this, e, t, i, n, r, a, s, o)
            }
        }, {
            key: "fillBorderWords",
            value: function(e, t, i, n, r, a, s) {
                Context._textRender.fillWords(this, e, t, i, n, r, a, s)
            }
        }, {
            key: "_fast_filltext",
            value: function(e, t, i, n, r, a, s, o) {
                var l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
                Context._textRender._fast_filltext(this, e, null, t, i, n, r, a, s, o, l)
            }
        }, {
            key: "_fillRect",
            value: function(e, t, i, n, r) {
                var a = this._curSubmit,
                    s = a && a._key.submitType === le.KEY_DRAWTEXTURE && a._key.blendShader === this._nBlendType;
                this._mesh.vertNum + 4 > Context._MAXVERTNUM && (this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(this._mesh), s = !1), s && (s = s && this.isSameClipInfo(a)), this.transformQuad(e, t, i, n, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, We.NO_UV, r, !1), s || (a = this._curSubmit = Be.create(this, this._mesh, Y.create(N.TEXTURE2D, 0)), this._submits[this._submits._length++] = a, this._copyClipInfo(a, this._globalClipMatrix), a.shaderValue.textureHost = this._lastTex, a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, a._renderType = le.TYPE_TEXTURE), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }
        }, {
            key: "fillRect",
            value: function(e, t, i, n, r) {
                var a = r ? ae.create(r) : this._shader2D.fillStyle,
                    s = this.mixRGBandAlpha(a.toInt());
                this._fillRect(e, t, i, n, s)
            }
        }, {
            key: "fillTexture",
            value: function(e, t, n, r, a, s, o, l) {
                e._getSource() ? this._fillTexture(e, e.width, e.height, e.uvrect, t, n, r, a, s, o.x, o.y) : this.sprite && i.systemTimer.callLater(this, this._repaintSprite)
            }
        }, {
            key: "_fillTexture",
            value: function(e, t, i, n, r, a, s, o, l, h, u) {
                var c = this._curSubmit;
                this._mesh.vertNum + 4 > Context._MAXVERTNUM && (this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(this._mesh));
                var _ = !0,
                    d = !0;
                switch (l) {
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
                    v = 0,
                    p = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    T = 0;
                if (h < 0 ? (g = r, v = -h % t / t) : g = r + h, u < 0 ? (y = a, p = -u % i / i) : y = a + u, m = r + s, T = a + o, !_ && (m = Math.min(m, r + h + t)), !d && (T = Math.min(T, a + u + i)), !(m < r || T < a || g > m || y > T)) {
                    var C = (m - r - h) / t,
                        x = (T - a - u) / i;
                    if (this.transformQuad(g, y, m - g, T - y, 0, this._curMat, this._transedPoints), f[0] = v, f[1] = p, f[2] = C, f[3] = p, f[4] = C, f[5] = x, f[6] = v, f[7] = x, !this.clipedOff(this._transedPoints)) {
                        var k = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, f, k, !0);
                        var S = Y.create(N.TEXTURE2D, 0);
                        S.defines.add(N.FILLTEXTURE), S.u_TexRange = n.concat(), c = this._curSubmit = Be.create(this, this._mesh, S), this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix), c.shaderValue.textureHost = e, c._renderType = le.TYPE_TEXTURE, this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4
                    }
                    this.breakNextMerge()
                }
            }
        }, {
            key: "setColorFilter",
            value: function(e) {
                he.save(this, he.TYPE_COLORFILTER, this, !0), this._colorFiler = e, this._curSubmit = le.RENDERBASE
            }
        }, {
            key: "drawTexture",
            value: function(e, t, i, n, r) {
                this._drawTextureM(e, t, i, n, r, null, 1, null)
            }
        }, {
            key: "drawTextures",
            value: function(e, t, n, r) {
                if (e._getSource())
                    for (var a = t.length / 2, s = 0, o = e.bitmap.id, l = 0; l < a; l++)
                        this._inner_drawTexture(e, o, t[s++] + n, t[s++] + r, 0, 0, null, null, 1, !1);
                else
                    this.sprite && i.systemTimer.callLater(this, this._repaintSprite)
            }
        }, {
            key: "_drawTextureAddSubmit",
            value: function(e, t) {
                var i = null;
                i = Be.create(this, this._mesh, Y.create(N.TEXTURE2D, 0)), this._submits[this._submits._length++] = i, i.shaderValue.textureHost = t, i._key.other = e, i._renderType = le.TYPE_TEXTURE, this._curSubmit = i
            }
        }, {
            key: "_drawTextureM",
            value: function(e, t, i, n, r, a, s, o) {
                var l = this.sprite;
                return !!e._getSource((function() {
                    l && l.repaint()
                })) && this._inner_drawTexture(e, e.bitmap.id, t, i, n, r, a, o, s, !1)
            }
        }, {
            key: "_drawRenderTexture",
            value: function(e, t, i, n, r, a, s, o) {
                return this._inner_drawTexture(e, -1, t, i, n, r, a, o, 1, !1)
            }
        }, {
            key: "submitDebugger",
            value: function() {
                this._submits[this._submits._length++] = X.create([], (function() {}), this)
            }
        }, {
            key: "_copyClipInfo",
            value: function(e, t) {
                var i = e.shaderValue.clipMatDir;
                i[0] = t.a, i[1] = t.b, i[2] = t.c, i[3] = t.d;
                var n = e.shaderValue.clipMatPos;
                n[0] = t.tx, n[1] = t.ty, e.clipInfoID = this._clipInfoID, this._clipInCache && (e.shaderValue.clipOff[0] = 1)
            }
        }, {
            key: "isSameClipInfo",
            value: function(e) {
                return e.clipInfoID === this._clipInfoID
            }
        }, {
            key: "_useNewTex2DSubmit",
            value: function(e, t) {
                this._mesh.vertNum + t > Context._MAXVERTNUM && (this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(this._mesh));
                var i = Be.create(this, this._mesh, Y.create(N.TEXTURE2D, 0));
                this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = e, this._copyClipInfo(i, this._globalClipMatrix)
            }
        }, {
            key: "_drawTexRect",
            value: function(e, t, i, n, r) {
                this.transformQuad(e, t, i, n, this._italicDeg, this._curMat, this._transedPoints);
                var a = this._transedPoints;
                a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0, a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0, this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, r, this._fillColor, !0), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }
        }, {
            key: "drawCallOptimize",
            value: function(e) {
                return this._charSubmitCache.enable(e, this), e
            }
        }, {
            key: "_inner_drawTexture",
            value: function(e, t, i, n, r, a, s, o, l, h) {
                if (!(r <= 0 || a <= 0)) {
                    var u = this._curSubmit._key;
                    if (o = o || e._uv, u.submitType === le.KEY_TRIANGLES && u.other === t) {
                        var c = this._drawTexToDrawTri_Vert;
                        c[0] = i, c[1] = n, c[2] = i + r, c[3] = n, c[4] = i + r, c[5] = n + a, c[6] = i, c[7] = n + a, this._drawTriUseAbsMatrix = !0;
                        var _ = this._tempUV;
                        return _[0] = o[0], _[1] = o[1], _[2] = o[2], _[3] = o[3], _[4] = o[4], _[5] = o[5], _[6] = o[6], _[7] = o[7], this.drawTriangles(e, 0, 0, c, _, this._drawTexToDrawTri_Index, s, l, null, null), this._drawTriUseAbsMatrix = !1, !0
                    }
                    var d = this._mesh,
                        f = this._curSubmit,
                        v = h ? this._charSubmitCache.getPos() : this._transedPoints;
                    if (this.transformQuad(i, n, r || e.width, a || e.height, this._italicDeg, s || this._curMat, v), this.drawTexAlign) {
                        var p = Math.round;
                        v[0] = p(v[0]), v[1] = p(v[1]), v[2] = p(v[2]), v[3] = p(v[3]), v[4] = p(v[4]), v[5] = p(v[5]), v[6] = p(v[6]), v[7] = p(v[7]), this.drawTexAlign = !1
                    }
                    var g = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * l);
                    if (h)
                        return this._charSubmitCache.add(this, e, t, v, o, g), !0;
                    this._drawCount++;
                    var y = t >= 0 && u.submitType === le.KEY_DRAWTEXTURE && u.other === t;
                    return y && (y = y && this.isSameClipInfo(f)), this._lastTex = e, d.vertNum + 4 > Context._MAXVERTNUM && (d = this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(d), y = !1), d.addQuad(v, o, g, !0), y || (this._submits[this._submits._length++] = this._curSubmit = f = Be.create(this, d, Y.create(N.TEXTURE2D, 0)), f.shaderValue.textureHost = e, f._key.other = t, this._copyClipInfo(f, this._globalClipMatrix)), f._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0
                }
            }
        }, {
            key: "transform4Points",
            value: function(e, t, i) {
                var n = t.tx,
                    r = t.ty,
                    a = t.a,
                    s = t.b,
                    o = t.c,
                    l = t.d,
                    h = e[0],
                    u = e[1],
                    c = e[2],
                    _ = e[3],
                    d = e[4],
                    f = e[5],
                    v = e[6],
                    p = e[7];
                t._bTransform ? (i[0] = h * a + u * o + n, i[1] = h * s + u * l + r, i[2] = c * a + _ * o + n, i[3] = c * s + _ * l + r, i[4] = d * a + f * o + n, i[5] = d * s + f * l + r, i[6] = v * a + p * o + n, i[7] = v * s + p * l + r) : (i[0] = h + n, i[1] = u + r, i[2] = c + n, i[3] = _ + r, i[4] = d + n, i[5] = f + r, i[6] = v + n, i[7] = p + r)
            }
        }, {
            key: "clipedOff",
            value: function(e) {
                return this._clipRect.width <= 0 || this._clipRect.height <= 0
            }
        }, {
            key: "transformQuad",
            value: function(e, t, i, n, r, a, s) {
                var o = 0;
                0 != r && (o = Math.tan(r * Math.PI / 180) * n);
                var l = e + i,
                    h = t + n,
                    u = a.tx,
                    c = a.ty,
                    _ = a.a,
                    d = a.b,
                    f = a.c,
                    v = a.d,
                    p = e + o,
                    g = t,
                    y = l + o,
                    m = t,
                    T = l,
                    C = h,
                    x = e,
                    k = h;
                a._bTransform ? (s[0] = p * _ + g * f + u, s[1] = p * d + g * v + c, s[2] = y * _ + m * f + u, s[3] = y * d + m * v + c, s[4] = T * _ + C * f + u, s[5] = T * d + C * v + c, s[6] = x * _ + k * f + u, s[7] = x * d + k * v + c) : (s[0] = p + u, s[1] = g + c, s[2] = y + u, s[3] = m + c, s[4] = T + u, s[5] = C + c, s[6] = x + u, s[7] = k + c)
            }
        }, {
            key: "pushRT",
            value: function() {
                this.addRenderObject(X.create(null, D.pushRT, this))
            }
        }, {
            key: "popRT",
            value: function() {
                this.addRenderObject(X.create(null, D.popRT, this)), this.breakNextMerge()
            }
        }, {
            key: "useRT",
            value: function(e) {
                this.addRenderObject(X.create([e], (function(e) {
                    if (!e)
                        throw "error useRT";
                    e.start(), e.clear(0, 0, 0, 0)
                }), this)), this.breakNextMerge()
            }
        }, {
            key: "RTRestore",
            value: function(e) {
                this.addRenderObject(X.create([e], (function(e) {
                    e.restore()
                }), this)), this.breakNextMerge()
            }
        }, {
            key: "breakNextMerge",
            value: function() {
                this._curSubmit = le.RENDERBASE
            }
        }, {
            key: "_repaintSprite",
            value: function() {
                this.sprite && this.sprite.repaint()
            }
        }, {
            key: "drawTextureWithTransform",
            value: function(e, t, i, n, r, a, s, o, l, h) {
                var u, c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
                    _ = arguments.length > 11 ? arguments[11] : void 0,
                    d = this._curMat;
                h && (u = this.globalCompositeOperation, this.globalCompositeOperation = h);
                var v = this._colorFiler;
                if (c && this.setColorFilter(c), !a)
                    return this._drawTextureM(e, t + s, i + o, n, r, d, l, _), h && (this.globalCompositeOperation = u), void(c && this.setColorFilter(v));
                var p = this._tmpMatrix;
                p.a = a.a, p.b = a.b, p.c = a.c, p.d = a.d, p.tx = a.tx + s, p.ty = a.ty + o, p._bTransform = a._bTransform, a && d._bTransform ? (f.mul(p, d, p), (a = p)._bTransform = !0) : (p.tx += d.tx, p.ty += d.ty, a = p), this._drawTextureM(e, t, i, n, r, a, l, _), h && (this.globalCompositeOperation = u), c && this.setColorFilter(v)
            }
        }, {
            key: "_flushToTarget",
            value: function(e, t) {
                P.worldScissorTest = !1;
                var i = g.instance;
                i.disable(i.SCISSOR_TEST);
                var n = P.worldAlpha,
                    r = P.worldMatrix4,
                    a = P.worldMatrix;
                P.worldMatrix = f.EMPTY, P.restoreTempArray(), P.worldMatrix4 = P.TEMPMAT4_ARRAY, P.worldAlpha = 1, I.activeShader = null, t.start(), e._submits._length > 0 && t.clear(0, 0, 0, 0), e._curSubmit = le.RENDERBASE, e.flush(), e.clear(), t.restore(), e._curSubmit = le.RENDERBASE, I.activeShader = null, P.worldAlpha = n, P.worldMatrix4 = r, P.worldMatrix = a
            }
        }, {
            key: "drawCanvas",
            value: function(e, t, i, n, r) {
                if (e) {
                    var a, s = e.context;
                    if (s._targets)
                        s._submits._length > 0 && (a = X.create([s, s._targets], this._flushToTarget, this), this._submits[this._submits._length++] = a), this._drawRenderTexture(s._targets, t, i, n, r, null, 1, D.flipyuv), this._curSubmit = le.RENDERBASE;
                    else {
                        var o = e;
                        o.touches && o.touches.forEach((function(e) {
                            e.touch()
                        })), a = Pe.create(e, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a, a._key.clear();
                        var l = a._matrix;
                        this._curMat.copyTo(l);
                        var h = l.tx,
                            u = l.ty;
                        l.tx = l.ty = 0, l.transformPoint(v.TEMP.setTo(t, i)), l.translate(v.TEMP.x + h, v.TEMP.y + u), f.mul(o.invMat, l, l), this._curSubmit = le.RENDERBASE
                    }
                }
            }
        }, {
            key: "drawTarget",
            value: function(e, t, i, n, r, a, s) {
                var o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                    l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : -1;
                if (this._drawCount++, this._mesh.vertNum + 4 > Context._MAXVERTNUM && (this._mesh = xe.getAMesh(this.isMain), this.meshlist.push(this._mesh)), this.transformQuad(t, i, n, r, 0, a || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                    this._mesh.addQuad(this._transedPoints, o || We.DEF_UV, 4294967295, !0);
                    var h = this._curSubmit = De.create(this, this._mesh, s, e);
                    return h.blendType = -1 == l ? this._nBlendType : l, this._copyClipInfo(h, this._globalClipMatrix), h._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = h, this._curSubmit = le.RENDERBASE, !0
                }
                return this._curSubmit = le.RENDERBASE, !1
            }
        }, {
            key: "drawTriangles",
            value: function(e, t, n, r, a, s, o, l, h, u) {
                var c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 4294967295;
                if (e._getSource()) {
                    var _ = null;
                    u && (_ = this.globalCompositeOperation, this.globalCompositeOperation = u), this._drawCount++;
                    var d = this._tmpMatrix,
                        v = this._triangleMesh,
                        p = null,
                        g = !1;
                    h && (p = this._colorFiler, this._colorFiler = h, this._curSubmit = le.RENDERBASE, g = p != h);
                    var y = e.bitmap,
                        m = this._curSubmit._key,
                        T = m.submitType === le.KEY_TRIANGLES && m.other === y.id && m.blendShader == this._nBlendType;
                    if (v.vertNum + r.length / 2 > Context._MAXVERTNUM && (v = this._triangleMesh = ke.getAMesh(this.isMain), this.meshlist.push(v), T = !1), !T) {
                        var C = this._curSubmit = Be.create(this, v, Y.create(N.TEXTURE2D, 0));
                        C.shaderValue.textureHost = e, C._renderType = le.TYPE_TEXTURE, C._key.submitType = le.KEY_TRIANGLES, C._key.other = y.id, this._copyClipInfo(C, this._globalClipMatrix), this._submits[this._submits._length++] = C
                    }
                    var x = this._mixRGBandAlpha(c, this._shader2D.ALPHA * l);
                    this._drawTriUseAbsMatrix ? v.addData(r, a, s, o, x) : (o ? (d.a = o.a, d.b = o.b, d.c = o.c, d.d = o.d, d.tx = o.tx + t, d.ty = o.ty + n) : (d.a = 1, d.b = 0, d.c = 0, d.d = 1, d.tx = t, d.ty = n), f.mul(d, this._curMat, d), v.addData(r, a, s, d || this._curMat, x)), this._curSubmit._numEle += s.length, g && (this._colorFiler = p, this._curSubmit = le.RENDERBASE), u && (this.globalCompositeOperation = _)
                } else
                    this.sprite && i.systemTimer.callLater(this, this._repaintSprite)
            }
        }, {
            key: "transform",
            value: function(e, t, i, n, r, a) {
                _e.save(this), f.mul(f.TEMP.setTo(e, t, i, n, r, a), this._curMat, this._curMat), this._curMat._checkTransform()
            }
        }, {
            key: "_transformByMatrix",
            value: function(e, t, i) {
                e.setTranslate(t, i), f.mul(e, this._curMat, this._curMat), e.setTranslate(0, 0), this._curMat._bTransform = !0
            }
        }, {
            key: "setTransformByMatrix",
            value: function(e) {
                e.copyTo(this._curMat)
            }
        }, {
            key: "rotate",
            value: function(e) {
                _e.save(this), this._curMat.rotateEx(e)
            }
        }, {
            key: "scale",
            value: function(e, t) {
                _e.save(this), this._curMat.scaleEx(e, t)
            }
        }, {
            key: "clipRect",
            value: function(e, t, i, n) {
                ue.save(this), this._clipRect == Context.MAXCLIPRECT ? this._clipRect = new p(e, t, i, n) : (this._clipRect.width = i, this._clipRect.height = n, this._clipRect.x = e, this._clipRect.y = t), this._clipID_Gen++, this._clipID_Gen %= 1e4, this._clipInfoID = this._clipID_Gen;
                var r = this._globalClipMatrix,
                    a = r.tx,
                    s = r.ty,
                    o = a + r.a,
                    l = s + r.d;
                if (this._clipRect.width >= Context._MAXSIZE ? (r.a = r.d = Context._MAXSIZE, r.b = r.c = r.tx = r.ty = 0) : (this._curMat._bTransform ? (r.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, r.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, r.a = this._clipRect.width * this._curMat.a, r.b = this._clipRect.width * this._curMat.b, r.c = this._clipRect.height * this._curMat.c, r.d = this._clipRect.height * this._curMat.d) : (r.tx = this._clipRect.x + this._curMat.tx, r.ty = this._clipRect.y + this._curMat.ty, r.a = this._clipRect.width, r.b = r.c = 0, r.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), r.a > 0 && r.d > 0) {
                    var h = r.tx + r.a,
                        u = r.ty + r.d;
                    h <= a || u <= s || r.tx >= o || r.ty >= l ? (r.a = -.1, r.d = -.1) : (r.tx < a && (r.a -= a - r.tx, r.tx = a), h > o && (r.a -= h - o), r.ty < s && (r.d -= s - r.ty, r.ty = s), u > l && (r.d -= u - l), r.a <= 0 && (r.a = -.1), r.d <= 0 && (r.d = -.1))
                }
            }
        }, {
            key: "drawMesh",
            value: function(e, t, i, n, r, a, s, o) {
                arguments.length > 8 && void 0 !== arguments[8] && arguments[8]
            }
        }, {
            key: "addRenderObject",
            value: function(e) {
                this._submits[this._submits._length++] = e
            }
        }, {
            key: "submitElement",
            value: function(e, t) {
                this.isMain;
                var i = this._submits,
                    n = i._length;
                t < 0 && (t = i._length);
                for (var r = le.RENDERBASE; e < t;)
                    this._renderNextSubmitIndex = e + 1, i[e] !== le.RENDERBASE ? (le.preRender = r, e += (r = i[e]).renderSubmit()) : e++;
                return n
            }
        }, {
            key: "flush",
            value: function() {
                this._clipID_Gen = 0;
                var e = this.submitElement(0, this._submits._length);
                this._path && this._path.reset(), Ee.instance && Ee.getInstance().reset(), this._curSubmit = le.RENDERBASE;
                for (var t = 0, i = this.meshlist.length; t < i; t++) {
                    var n = this.meshlist[t];
                    n.canReuse ? n.releaseMesh() : n.destroy()
                }
                return this.meshlist.length = 0, this._mesh = xe.getAMesh(this.isMain), this._pathMesh = Se.getAMesh(this.isMain), this._triangleMesh = ke.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), this._flushCnt++, this._flushCnt % 60 == 0 && this.isMain && Qe.textRenderInst && Qe.textRenderInst.GC(), e
            }
        }, {
            key: "beginPath",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = this._getPath();
                t.beginPath(e)
            }
        }, {
            key: "closePath",
            value: function() {
                this._path.closePath()
            }
        }, {
            key: "addPath",
            value: function(e, t, i, n, r) {
                for (var a = 0, s = 0, o = e.length / 2; s < o; s++) {
                    var l = e[a] + n,
                        h = e[a + 1] + r;
                    e[a] = l, e[a + 1] = h, a += 2
                }
                this._getPath().push(e, i)
            }
        }, {
            key: "fill",
            value: function() {
                var e = this._curMat,
                    t = this._getPath(),
                    i = this._curSubmit,
                    n = i._key.submitType === le.KEY_VG && i._key.blendShader === this._nBlendType;
                n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var r, a = this.mixRGBandAlpha(this.fillStyle.toInt()), s = 0, o = 0, l = t.paths.length; o < l; o++) {
                    var h = t.paths[o],
                        u = h.path.length / 2;
                    if (!(u < 3 || 3 == u && !h.convex)) {
                        var c, _, d, f, v = h.path.concat(),
                            p = 0;
                        if (e._bTransform)
                            for (p = 0; p < u; p++)
                                _ = (c = p << 1) + 1, d = v[c], f = v[_], v[c] = e.a * d + e.c * f + e.tx, v[_] = e.b * d + e.d * f + e.ty;
                        else
                            for (p = 0; p < u; p++)
                                _ = (c = p << 1) + 1, d = v[c], f = v[_], v[c] = d + e.tx, v[_] = f + e.ty;
                        this._pathMesh.vertNum + u > Context._MAXVERTNUM && (this._curSubmit._numEle += s, s = 0, this._pathMesh = Se.getAMesh(this.isMain), this._curSubmit = this.addVGSubmit(this._pathMesh));
                        var g = this._pathMesh.vertNum;
                        if (h.convex) {
                            var y = u - 2;
                            r = new Array(3 * y);
                            for (var m = 0, T = 0; T < y; T++)
                                r[m++] = g, r[m++] = T + 1 + g, r[m++] = T + 2 + g
                        } else if (r = we.earcut(v, null, 2), g > 0)
                            for (var C = 0; C < r.length; C++)
                                r[C] += g;
                        this._pathMesh.addVertAndIBToMesh(this, v, a, r), s += r.length
                    }
                }
                this._curSubmit._numEle += s
            }
        }, {
            key: "addVGSubmit",
            value: function(e) {
                var t = Ie.createShape(this, e, 0, Y.create(N.PRIMITIVE, 0));
                return t._key.submitType = le.KEY_VG, this._submits[this._submits._length++] = t, this._copyClipInfo(t, this._globalClipMatrix), t
            }
        }, {
            key: "stroke",
            value: function() {
                if (this.lineWidth > 0) {
                    var e = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        t = this._getPath(),
                        i = this._curSubmit,
                        n = i._key.submitType === le.KEY_VG && i._key.blendShader === this._nBlendType;
                    n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var r = 0, a = 0, s = t.paths.length; a < s; a++) {
                        var o = t.paths[a];
                        if (!(o.path.length <= 0)) {
                            var l = [],
                                h = [],
                                u = 2 * o.path.length;
                            if (!(u < 2)) {
                                this._pathMesh.vertNum + u > Context._MAXVERTNUM && (this._curSubmit._numEle += r, r = 0, this._pathMesh = Se.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), Ae.createLine2(o.path, l, this.lineWidth, this._pathMesh.vertNum, h, o.loop);
                                var c, _, d, f, v = h.length / 2,
                                    p = this._curMat,
                                    g = 0;
                                if (p._bTransform)
                                    for (g = 0; g < v; g++)
                                        _ = (c = g << 1) + 1, d = h[c], f = h[_], h[c] = p.a * d + p.c * f + p.tx, h[_] = p.b * d + p.d * f + p.ty;
                                else
                                    for (g = 0; g < v; g++)
                                        _ = (c = g << 1) + 1, d = h[c], f = h[_], h[c] = d + p.tx, h[_] = f + p.ty;
                                this._pathMesh.addVertAndIBToMesh(this, h, e, l), r += l.length
                            }
                        }
                    }
                    this._curSubmit._numEle += r
                }
            }
        }, {
            key: "moveTo",
            value: function(e, t) {
                var i = this._getPath();
                i.newPath(), i._lastOriX = e, i._lastOriY = t, i.addPoint(e, t)
            }
        }, {
            key: "lineTo",
            value: function(e, t) {
                var i = this._getPath();
                Math.abs(e - i._lastOriX) < .001 && Math.abs(t - i._lastOriY) < .001 || (i._lastOriX = e, i._lastOriY = t, i.addPoint(e, t))
            }
        }, {
            key: "arcTo",
            value: function(e, t, i, n, r) {
                var a = 0,
                    s = 0,
                    o = 0,
                    l = this._path._lastOriX - e,
                    h = this._path._lastOriY - t,
                    u = Math.sqrt(l * l + h * h);
                if (!(u <= 1e-6)) {
                    var c = l / u,
                        _ = h / u,
                        d = i - e,
                        f = n - t,
                        v = d * d + f * f,
                        p = Math.sqrt(v);
                    if (!(p <= 1e-6)) {
                        var g = d / p,
                            y = f / p,
                            m = c + g,
                            T = _ + y,
                            C = Math.sqrt(m * m + T * T);
                        if (!(C <= 1e-6)) {
                            var x = m / C,
                                k = T / C,
                                S = Math.acos(x * c + k * _),
                                R = Math.PI / 2 - S,
                                b = (u = r / Math.tan(R)) * c + e,
                                E = u * _ + t,
                                A = Math.sqrt(u * u + r * r),
                                M = e + x * A,
                                w = t + k * A,
                                L = 0,
                                I = 0;
                            if (c * y - _ * g >= 0) {
                                var P = 2 * R / Context.SEGNUM;
                                L = Math.sin(P), I = Math.cos(P)
                            } else
                                P = 2 * -R / Context.SEGNUM, L = Math.sin(P), I = Math.cos(P);
                            var D = this._path._lastOriX,
                                B = this._path._lastOriY,
                                O = b,
                                F = E;
                            (Math.abs(O - this._path._lastOriX) > .1 || Math.abs(F - this._path._lastOriY) > .1) && (s = O, o = F, D = O, B = F, this._path._lastOriX = s, this._path._lastOriY = o, this._path.addPoint(s, o));
                            var N = b - M,
                                G = E - w;
                            for (a = 0; a < Context.SEGNUM; a++) {
                                var U = N * I + G * L,
                                    W = -N * L + G * I;
                                s = U + M, o = W + w, (Math.abs(D - s) > .1 || Math.abs(B - o) > .1) && (this._path._lastOriX = s, this._path._lastOriY = o, this._path.addPoint(s, o), D = s, B = o), N = U, G = W
                            }
                        }
                    }
                }
            }
        }, {
            key: "arc",
            value: function(e, t, i, n, r) {
                var a, s, o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    l = (!(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], 0),
                    h = 0,
                    u = 0,
                    c = 0,
                    _ = 0;
                if (h = r - n, o)
                    if (Math.abs(h) >= 2 * Math.PI)
                        h = 2 * -Math.PI;
                    else
                        for (; h > 0;)
                            h -= 2 * Math.PI;
                else if (Math.abs(h) >= 2 * Math.PI)
                    h = 2 * Math.PI;
                else
                    for (; h < 0;)
                        h += 2 * Math.PI;
                var d = this.getMatScaleX(),
                    f = this.getMatScaleY(),
                    v = i * (d > f ? d : f),
                    p = 2 * Math.PI * v;
                s = 0 | Math.max(p / 10, 10);
                var g = this._getPath();
                for (a = 0; a <= s; a++)
                    l = n + h * (a / s), u = Math.cos(l), _ = t + Math.sin(l) * i, (c = e + u * i) == this._path._lastOriX && _ == this._path._lastOriY || g.addPoint(c, _);
                u = Math.cos(r), _ = t + Math.sin(r) * i, (c = e + u * i) == this._path._lastOriX && _ == this._path._lastOriY || g.addPoint(c, _)
            }
        }, {
            key: "quadraticCurveTo",
            value: function(e, t, i, n) {
                for (var r = ne.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, e, t, i, n], 30, 2), a = 0, s = r.length / 2; a < s; a++)
                    this.lineTo(r[2 * a], r[2 * a + 1]);
                this.lineTo(i, n)
            }
        }, {
            key: "mixRGBandAlpha",
            value: function(e) {
                return this._mixRGBandAlpha(e, this._shader2D.ALPHA)
            }
        }, {
            key: "_mixRGBandAlpha",
            value: function(e, t) {
                if (t >= 1)
                    return e;
                var i = (4278190080 & e) >>> 24;
                return 0 != i ? i *= t : i = 255 * t, 16777215 & e | i << 24
            }
        }, {
            key: "strokeRect",
            value: function(e, t, i, n, r) {
                if (this.lineWidth > 0) {
                    var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        s = this.lineWidth / 2;
                    this._fillRect(e - s, t - s, i + this.lineWidth, this.lineWidth, a), this._fillRect(e - s, t - s + n, i + this.lineWidth, this.lineWidth, a), this._fillRect(e - s, t + s, this.lineWidth, n - this.lineWidth, a), this._fillRect(e - s + i, t + s, this.lineWidth, n - this.lineWidth, a)
                }
            }
        }, {
            key: "clip",
            value: function() {}
        }, {
            key: "drawParticle",
            value: function(e, t, i) {
                i.x = e, i.y = t, this._submits[this._submits._length++] = i
            }
        }, {
            key: "_getPath",
            value: function() {
                return this._path || (this._path = new se)
            }
        }, {
            key: "_fillTexture_h",
            value: function(e, t, i, n, r, a, s, o) {
                n <= 0 && console.error("_fillTexture_h error: oriw must>0");
                for (var l = a, h = Math.floor(o / n), u = o % n, c = 0; c < h; c++)
                    this._inner_drawTexture(e, t, l, s, n, r, this._curMat, i, 1, !1), l += n;
                if (u > 0) {
                    var _ = i[2] - i[0],
                        d = i[0] + _ * (u / n),
                        f = Context.tmpuv1;
                    f[0] = i[0], f[1] = i[1], f[2] = d, f[3] = i[3], f[4] = d, f[5] = i[5], f[6] = i[6], f[7] = i[7], this._inner_drawTexture(e, t, l, s, u, r, this._curMat, f, 1, !1)
                }
            }
        }, {
            key: "_fillTexture_v",
            value: function(e, t, i, n, r, a, s, o) {
                r <= 0 && console.error("_fillTexture_v error: orih must>0");
                for (var l = s, h = Math.floor(o / r), u = o % r, c = 0; c < h; c++)
                    this._inner_drawTexture(e, t, a, l, n, r, this._curMat, i, 1, !1), l += r;
                if (u > 0) {
                    var _ = i[7] - i[1],
                        d = i[1] + _ * (u / r),
                        f = Context.tmpuv1;
                    f[0] = i[0], f[1] = i[1], f[2] = i[2], f[3] = i[3], f[4] = i[4], f[5] = d, f[6] = i[6], f[7] = d, this._inner_drawTexture(e, t, a, l, n, u, this._curMat, f, 1, !1)
                }
            }
        }, {
            key: "drawTextureWithSizeGrid",
            value: function(e, t, i, n, r, a, s, o) {
                if (e._getSource()) {
                    t += s, i += o;
                    var l = e.uv,
                        h = e.bitmap.width,
                        u = e.bitmap.height,
                        c = a[0],
                        _ = a[3],
                        d = a[1],
                        f = a[2],
                        v = a[4],
                        p = !1;
                    n == h && (_ = d = 0), r == u && (c = f = 0);
                    var g = c / u,
                        y = _ / h,
                        m = d / h,
                        T = f / u;
                    if (_ + d > n) {
                        var C = n;
                        p = !0, n = _ + d, this.save(), this.clipRect(0 + t, 0 + i, C, r)
                    }
                    var x = e.bitmap.id,
                        k = this._curMat,
                        S = this._tempUV,
                        R = l[0],
                        b = l[1],
                        E = l[4],
                        A = l[5],
                        M = R,
                        w = b,
                        L = E,
                        I = A;
                    if (_ && c && (L = R + y, I = b + g, S[0] = R, S[1] = b, S[2] = L, S[3] = b, S[4] = L, S[5] = I, S[6] = R, S[7] = I, this._inner_drawTexture(e, x, t, i, _, c, k, S, 1, !1)), d && c && (M = E - m, w = b, L = E, I = b + g, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, this._inner_drawTexture(e, x, n - d + t, 0 + i, d, c, k, S, 1, !1)), _ && f && (M = R, w = A - T, L = R + y, I = A, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, this._inner_drawTexture(e, x, 0 + t, r - f + i, _, f, k, S, 1, !1)), d && f && (M = E - m, w = A - T, L = E, I = A, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, this._inner_drawTexture(e, x, n - d + t, r - f + i, d, f, k, S, 1, !1)), c && (M = R + y, w = b, L = E - m, I = b + g, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, v ? this._fillTexture_h(e, x, S, e.width - _ - d, c, _ + t, i, n - _ - d) : this._inner_drawTexture(e, x, _ + t, i, n - _ - d, c, k, S, 1, !1)), f && (M = R + y, w = A - T, L = E - m, I = A, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, v ? this._fillTexture_h(e, x, S, e.width - _ - d, f, _ + t, r - f + i, n - _ - d) : this._inner_drawTexture(e, x, _ + t, r - f + i, n - _ - d, f, k, S, 1, !1)), _ && (M = R, w = b + g, L = R + y, I = A - T, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, v ? this._fillTexture_v(e, x, S, _, e.height - c - f, t, c + i, r - c - f) : this._inner_drawTexture(e, x, t, c + i, _, r - c - f, k, S, 1, !1)), d && (M = E - m, w = b + g, L = E, I = A - T, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, v ? this._fillTexture_v(e, x, S, d, e.height - c - f, n - d + t, c + i, r - c - f) : this._inner_drawTexture(e, x, n - d + t, c + i, d, r - c - f, k, S, 1, !1)), M = R + y, w = b + g, L = E - m, I = A - T, S[0] = M, S[1] = w, S[2] = L, S[3] = w, S[4] = L, S[5] = I, S[6] = M, S[7] = I, v) {
                        var P = Context.tmpUVRect;
                        P[0] = M, P[1] = w, P[2] = L - M, P[3] = I - w, this._fillTexture(e, e.width - _ - d, e.height - c - f, P, _ + t, c + i, n - _ - d, r - c - f, "repeat", 0, 0)
                    } else
                        this._inner_drawTexture(e, x, _ + t, c + i, n - _ - d, r - c - f, k, S, 1, !1);
                    p && this.restore()
                }
            }
        }, {
            key: "lineJoin",
            get: function() {
                return ""
            },
            set: function(e) {}
        }, {
            key: "lineCap",
            get: function() {
                return ""
            },
            set: function(e) {}
        }, {
            key: "miterLimit",
            get: function() {
                return ""
            },
            set: function(e) {}
        }, {
            key: "asBitmap",
            set: function(t) {
                if (t) {
                    var i = this._targets;
                    if (!this._width || !this._height)
                        throw Error("asBitmap no size!");
                    i && i.width == this._width && i.height == this._height || (i && i.destroy(), this._targets = new D(this._width, this._height, e.RenderTextureFormat.R8G8B8A8, -1))
                } else
                    this._targets && this._targets.destroy(), this._targets = null
            }
        }, {
            key: "fillStyle",
            set: function(e) {
                this._shader2D.fillStyle.equal(e) || (he.save(this, he.TYPE_FILESTYLE, this._shader2D, !1), this._shader2D.fillStyle = ae.create(e), this._submitKey.other = -this._shader2D.fillStyle.toInt())
            },
            get: function() {
                return this._shader2D.fillStyle
            }
        }, {
            key: "globalAlpha",
            set: function(e) {
                (e = Math.floor(1e3 * e) / 1e3) != this._shader2D.ALPHA && (he.save(this, he.TYPE_ALPHA, this._shader2D, !1), this._shader2D.ALPHA = e)
            },
            get: function() {
                return this._shader2D.ALPHA
            }
        }, {
            key: "textAlign",
            set: function(e) {
                this._other.textAlign === e || (this._other = this._other.make(), he.save(this, he.TYPE_TEXTALIGN, this._other, !1), this._other.textAlign = e)
            },
            get: function() {
                return this._other.textAlign
            }
        }, {
            key: "textBaseline",
            set: function(e) {
                this._other.textBaseline === e || (this._other = this._other.make(), he.save(this, he.TYPE_TEXTBASELINE, this._other, !1), this._other.textBaseline = e)
            },
            get: function() {
                return this._other.textBaseline
            }
        }, {
            key: "globalCompositeOperation",
            set: function(e) {
                var t = O.TOINT[e];
                null == t || this._nBlendType === t || (he.save(this, he.TYPE_GLOBALCOMPOSITEOPERATION, this, !0), this._curSubmit = le.RENDERBASE, this._nBlendType = t)
            },
            get: function() {
                return O.NAMES[this._nBlendType]
            }
        }, {
            key: "strokeStyle",
            set: function(e) {
                this._shader2D.strokeStyle.equal(e) || (he.save(this, he.TYPE_STROKESTYLE, this._shader2D, !1), this._shader2D.strokeStyle = ae.create(e), this._submitKey.other = -this._shader2D.strokeStyle.toInt())
            },
            get: function() {
                return this._shader2D.strokeStyle
            }
        }, {
            key: "lineWidth",
            set: function(e) {
                this._other.lineWidth === e || (this._other = this._other.make(), he.save(this, he.TYPE_LINEWIDTH, this._other, !1), this._other.lineWidth = e)
            },
            get: function() {
                return this._other.lineWidth
            }
        }, {
            key: "font",
            set: function(e) {
                this._other = this._other.make(), he.save(this, he.TYPE_FONT, this._other, !1)
            }
        }, {
            key: "canvas",
            get: function() {
                return this._canvas
            }
        }], [{
            key: "__init__",
            value: function() {
                Context.MAXCLIPRECT = new p(0, 0, Context._MAXSIZE, Context._MAXSIZE), Ze.DEFAULT = new Ze
            }
        }, {
            key: "set2DRenderConfig",
            value: function() {
                var e = g.instance;
                y.setBlend(e, !0), y.setBlendEquation(e, e.FUNC_ADD), O.activeBlendFunction = null, y.setBlendFunc(e, e.ONE, e.ONE_MINUS_SRC_ALPHA), y.setDepthTest(e, !1), y.setCullFace(e, !1), y.setDepthMask(e, !0), y.setFrontFace(e, e.CCW), e.viewport(0, 0, P.width, P.height)
            }
        }]), Context
    }();
    qe.ENUM_TEXTALIGN_DEFAULT = 0, qe.ENUM_TEXTALIGN_CENTER = 1, qe.ENUM_TEXTALIGN_RIGHT = 2, qe._SUBMITVBSIZE = 32e3, qe._MAXSIZE = 99999999, qe._MAXVERTNUM = 65535, qe.MAXCLIPRECT = null, qe._COUNT = 0, qe.SEGNUM = 32, qe._contextcount = 0, qe.PI2 = 2 * Math.PI, qe._textRender = null, qe.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0], qe.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0], qe.tmpUVRect = [0, 0, 0, 0];
    var Ze = function() {
            function ContextParams() {
                _classCallCheck(this, ContextParams), this.lineWidth = 1
            }
            return _createClass(ContextParams, [{
                key: "clear",
                value: function() {
                    this.lineWidth = 1, this.textAlign = this.textBaseline = null
                }
            }, {
                key: "make",
                value: function() {
                    return this === ContextParams.DEFAULT ? new ContextParams : this
                }
            }]), ContextParams
        }(),
        $e = function() {
            function WebGL() {
                _classCallCheck(this, WebGL)
            }
            return _createClass(WebGL, null, [{
                key: "_uint8ArraySlice",
                value: function() {
                    for (var e = this.length, t = new Uint8Array(this.length), i = 0; i < e; i++)
                        t[i] = this[i];
                    return t
                }
            }, {
                key: "_float32ArraySlice",
                value: function() {
                    for (var e = this.length, t = new Float32Array(this.length), i = 0; i < e; i++)
                        t[i] = this[i];
                    return t
                }
            }, {
                key: "_uint16ArraySlice",
                value: function() {
                    var e, t, i, n = this;
                    if (0 === arguments.length)
                        for (e = n.length, t = new Uint16Array(e), i = 0; i < e; i++)
                            t[i] = n[i];
                    else if (2 === arguments.length) {
                        var r = arguments.length <= 0 ? void 0 : arguments[0],
                            a = arguments.length <= 1 ? void 0 : arguments[1];
                        if (a > r)
                            for (e = a - r, t = new Uint16Array(e), i = r; i < a; i++)
                                t[i - r] = n[i];
                        else
                            t = new Uint16Array(0)
                    }
                    return t
                }
            }, {
                key: "_nativeRender_enable",
                value: function() {}
            }, {
                key: "enable",
                value: function() {
                    return !0
                }
            }, {
                key: "inner_enable",
                value: function() {
                    return Float32Array.prototype.slice || (Float32Array.prototype.slice = WebGL._float32ArraySlice), Uint16Array.prototype.slice || (Uint16Array.prototype.slice = WebGL._uint16ArraySlice), Uint8Array.prototype.slice || (Uint8Array.prototype.slice = WebGL._uint8ArraySlice), !0
                }
            }, {
                key: "onStageResize",
                value: function(e, t) {
                    null != y.mainContext && (y.mainContext.viewport(0, 0, e, t), P.width = e, P.height = t)
                }
            }]), WebGL
        }();
    $e._isWebGL2 = !1, $e.isNativeRender_enable = !1;
    ! function() {
        var e = {};

        function synthesizeGLError(t, i) {
            var n;
            e[t] = !0, void 0 !== i && (n = i, window.console && window.console.error && window.console.error(n))
        }
        var t = function WebGLVertexArrayObjectOES(e) {
            var t = e.gl;
            this.ext = e, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, this.attribs = new Array(e.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var n = new WebGLVertexArrayObjectOES.VertexAttrib(t);
                this.attribs[i] = n
            }
            this.maxAttrib = 0
        };
        (t.VertexAttrib = function(e) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = e.FLOAT, this.normalized = !1, this.stride = 16, this.offset = 0, this.cached = "", this.recache()
        }).prototype.recache = function() {
            this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":")
        };
        var OESVertexArrayObject = function(t) {
            var i = this;
            this.gl = t,
                function(t) {
                    var i = t.getError;
                    t.getError = function() {
                        var n;
                        do {
                            (n = i.apply(t)) != t.NO_ERROR && (e[n] = !0)
                        } while (n != t.NO_ERROR);
                        for (var r in e)
                            if (e[r])
                                return delete e[r], parseInt(r);
                        return t.NO_ERROR
                    }
                }(t);
            var n = this.original = {
                getParameter: t.getParameter,
                enableVertexAttribArray: t.enableVertexAttribArray,
                disableVertexAttribArray: t.disableVertexAttribArray,
                bindBuffer: t.bindBuffer,
                getVertexAttrib: t.getVertexAttrib,
                vertexAttribPointer: t.vertexAttribPointer
            };
            t.getParameter = function(e) {
                return e == i.VERTEX_ARRAY_BINDING_OES ? i.currentVertexArrayObject == i.defaultVertexArrayObject ? null : i.currentVertexArrayObject : n.getParameter.apply(this, arguments)
            }, t.enableVertexAttribArray = function(e) {
                var t = i.currentVertexArrayObject;
                t.maxAttrib = Math.max(t.maxAttrib, e);
                var r = t.attribs[e];
                return r.enabled = !0, n.enableVertexAttribArray.apply(this, arguments)
            }, t.disableVertexAttribArray = function(e) {
                var t = i.currentVertexArrayObject;
                t.maxAttrib = Math.max(t.maxAttrib, e);
                var r = t.attribs[e];
                return r.enabled = !1, n.disableVertexAttribArray.apply(this, arguments)
            }, t.bindBuffer = function(e, r) {
                switch (e) {
                    case t.ARRAY_BUFFER:
                        i.currentArrayBuffer = r;
                        break;
                    case t.ELEMENT_ARRAY_BUFFER:
                        i.currentVertexArrayObject.elementArrayBuffer = r
                }
                return n.bindBuffer.apply(this, arguments)
            }, t.getVertexAttrib = function(e, r) {
                var a = i.currentVertexArrayObject,
                    s = a.attribs[e];
                switch (r) {
                    case t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                        return s.buffer;
                    case t.VERTEX_ATTRIB_ARRAY_ENABLED:
                        return s.enabled;
                    case t.VERTEX_ATTRIB_ARRAY_SIZE:
                        return s.size;
                    case t.VERTEX_ATTRIB_ARRAY_STRIDE:
                        return s.stride;
                    case t.VERTEX_ATTRIB_ARRAY_TYPE:
                        return s.type;
                    case t.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                        return s.normalized;
                    default:
                        return n.getVertexAttrib.apply(this, arguments)
                }
            }, t.vertexAttribPointer = function(e, t, r, a, s, o) {
                var l = i.currentVertexArrayObject;
                l.maxAttrib = Math.max(l.maxAttrib, e);
                var h = l.attribs[e];
                return h.buffer = i.currentArrayBuffer, h.size = t, h.type = r, h.normalized = a, h.stride = s, h.offset = o, h.recache(), n.vertexAttribPointer.apply(this, arguments)
            }, t.instrumentExtension && t.instrumentExtension(this, "OES_vertex_array_object"), t.canvas.addEventListener("webglcontextrestored", (function() {
                var e;
                e = "OESVertexArrayObject emulation library context restored", window.console && window.console.log && window.console.log(e), i.reset_()
            }), !0), this.reset_()
        };
        OESVertexArrayObject.prototype.VERTEX_ARRAY_BINDING_OES = 34229, OESVertexArrayObject.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects)
                for (var e = 0; e < this.vertexArrayObjects.length; ++e)
                    this.vertexArrayObjects.isAlive = !1;
            var i = this.gl;
            this.maxVertexAttribs = i.getParameter(i.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new t(this), this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject], this.bindVertexArrayOES(null)
        }, OESVertexArrayObject.prototype.createVertexArrayOES = function() {
            var e = new t(this);
            return this.vertexArrayObjects.push(e), e
        }, OESVertexArrayObject.prototype.deleteVertexArrayOES = function(e) {
            e.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(e), 1), this.currentVertexArrayObject == e && this.bindVertexArrayOES(null)
        }, OESVertexArrayObject.prototype.isVertexArrayOES = function(e) {
            return !!(e && e instanceof t && e.hasBeenBound && e.ext == this)
        }, OESVertexArrayObject.prototype.bindVertexArrayOES = function(e) {
            var t = this.gl;
            if (!e || e.isAlive) {
                var i = this.original,
                    n = this.currentVertexArrayObject;
                this.currentVertexArrayObject = e || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var r = this.currentVertexArrayObject;
                if (n != r) {
                    n && r.elementArrayBuffer == n.elementArrayBuffer || i.bindBuffer.call(t, t.ELEMENT_ARRAY_BUFFER, r.elementArrayBuffer);
                    for (var a = this.currentArrayBuffer, s = Math.max(n ? n.maxAttrib : 0, r.maxAttrib), o = 0; o <= s; o++) {
                        var l = r.attribs[o],
                            h = n ? n.attribs[o] : null;
                        if (n && l.enabled == h.enabled || (l.enabled ? i.enableVertexAttribArray.call(t, o) : i.disableVertexAttribArray.call(t, o)), l.enabled) {
                            var u = !1;
                            n && l.buffer == h.buffer || (a != l.buffer && (i.bindBuffer.call(t, t.ARRAY_BUFFER, l.buffer), a = l.buffer), u = !0), (u || l.cached != h.cached) && i.vertexAttribPointer.call(t, o, l.size, l.type, l.normalized, l.stride, l.offset)
                        }
                    }
                    this.currentArrayBuffer != a && i.bindBuffer.call(t, t.ARRAY_BUFFER, this.currentArrayBuffer)
                }
            } else
                synthesizeGLError(t.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject")
        }, window._setupVertexArrayObject = function(e) {
            var t = e.getSupportedExtensions;
            e.getSupportedExtensions = function() {
                var e = t.call(this) || [];
                return e.indexOf("OES_vertex_array_object") < 0 && e.push("OES_vertex_array_object"), e
            };
            var i = e.getExtension;
            e.getExtension = function(e) {
                var t = i.call(this, e);
                return t || ("OES_vertex_array_object" !== e ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new OESVertexArrayObject(this)), this.__OESVertexArrayObject))
            }
        }
    }();
    var Je = function() {
            function SystemUtils() {
                _classCallCheck(this, SystemUtils)
            }
            return _createClass(SystemUtils, null, [{
                key: "supportTextureFormat",
                value: function(t) {
                    switch (t) {
                        case e.TextureFormat.R32G32B32A32:
                            return !(!g.layaGPUInstance._isWebGL2 && !g.layaGPUInstance._oesTextureFloat);
                        default:
                            return !0
                    }
                }
            }, {
                key: "supportRenderTextureFormat",
                value: function(t) {
                    switch (t) {
                        case e.RenderTextureFormat.R16G16B16A16:
                            return !!(g.layaGPUInstance._isWebGL2 || g.layaGPUInstance._oesTextureHalfFloat && g.layaGPUInstance._oesTextureHalfFloatLinear);
                        case e.RenderTextureFormat.Depth:
                            return !(!g.layaGPUInstance._isWebGL2 && !g.layaGPUInstance._webgl_depth_texture);
                        case e.RenderTextureFormat.ShadowMap:
                            return !!g.layaGPUInstance._isWebGL2;
                        default:
                            return !0
                    }
                }
            }, {
                key: "maxTextureCount",
                get: function() {
                    return this._maxTextureCount
                }
            }, {
                key: "maxTextureSize",
                get: function() {
                    return this._maxTextureSize
                }
            }, {
                key: "shaderCapailityLevel",
                get: function() {
                    return this._shaderCapailityLevel
                }
            }]), SystemUtils
        }(),
        et = function() {
            function LayaGPU(e, t) {
                _classCallCheck(this, LayaGPU), this._gl = null, this._vaoExt = null, this._angleInstancedArrays = null, this._isWebGL2 = !1, this._oesTextureHalfFloat = null, this._oes_element_index_uint = null, this._oesTextureHalfFloatLinear = null, this._oesTextureFloat = null, this._extShaderTextureLod = null, this._extTextureFilterAnisotropic = null, this._compressedTextureS3tc = null, this._compressedTexturePvrtc = null, this._compressedTextureEtc1 = null, this._webgl_depth_texture = null, this._gl = e, this._isWebGL2 = t;
                var n = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                    r = e.getParameter(e.MAX_TEXTURE_SIZE);
                t ? (this._getExtension("EXT_color_buffer_float"), Je._shaderCapailityLevel = 35) : (i.Render.isConchApp || window._setupVertexArrayObject && window._setupVertexArrayObject(e), this._vaoExt = this._getExtension("OES_vertex_array_object"), this._angleInstancedArrays = this._getExtension("ANGLE_instanced_arrays"), this._oesTextureHalfFloat = this._getExtension("OES_texture_half_float"), this._oesTextureHalfFloatLinear = this._getExtension("OES_texture_half_float_linear"), this._oesTextureFloat = this._getExtension("OES_texture_float"), this._oes_element_index_uint = this._getExtension("OES_element_index_uint"), this._extShaderTextureLod = this._getExtension("EXT_shader_texture_lod"), this._webgl_depth_texture = this._getExtension("WEBGL_depth_texture"), Je._shaderCapailityLevel = 30), this._extTextureFilterAnisotropic = this._getExtension("EXT_texture_filter_anisotropic"), this._compressedTextureS3tc = this._getExtension("WEBGL_compressed_texture_s3tc"), this._compressedTexturePvrtc = this._getExtension("WEBGL_compressed_texture_pvrtc"), this._compressedTextureEtc1 = this._getExtension("WEBGL_compressed_texture_etc1"), Je._maxTextureCount = n, Je._maxTextureSize = r
            }
            return _createClass(LayaGPU, [{
                key: "_getExtension",
                value: function(e) {
                    var t = LayaGPU._extentionVendorPrefixes;
                    for (var i in t) {
                        var n = this._gl.getExtension(t[i] + e);
                        if (n)
                            return n
                    }
                    return null
                }
            }, {
                key: "createVertexArray",
                value: function() {
                    return this._isWebGL2 ? this._gl.createVertexArray() : this._vaoExt.createVertexArrayOES()
                }
            }, {
                key: "bindVertexArray",
                value: function(e) {
                    this._isWebGL2 ? this._gl.bindVertexArray(e) : this._vaoExt.bindVertexArrayOES(e)
                }
            }, {
                key: "deleteVertexArray",
                value: function(e) {
                    this._isWebGL2 ? this._gl.deleteVertexArray(e) : this._vaoExt.deleteVertexArrayOES(e)
                }
            }, {
                key: "isVertexArray",
                value: function(e) {
                    this._isWebGL2 ? this._gl.isVertexArray(e) : this._vaoExt.isVertexArrayOES(e)
                }
            }, {
                key: "drawElementsInstanced",
                value: function(e, t, i, n, r) {
                    this._isWebGL2 ? this._gl.drawElementsInstanced(e, t, i, n, r) : this._angleInstancedArrays.drawElementsInstancedANGLE(e, t, i, n, r)
                }
            }, {
                key: "drawArraysInstanced",
                value: function(e, t, i, n) {
                    this._isWebGL2 ? this._gl.drawArraysInstanced(e, t, i, n) : this._angleInstancedArrays.drawArraysInstancedANGLE(e, t, i, n)
                }
            }, {
                key: "vertexAttribDivisor",
                value: function(e, t) {
                    this._isWebGL2 ? this._gl.vertexAttribDivisor(e, t) : this._angleInstancedArrays.vertexAttribDivisorANGLE(e, t)
                }
            }, {
                key: "supportInstance",
                value: function() {
                    return !(!this._isWebGL2 && !this._angleInstancedArrays || !t.allowGPUInstanceDynamicBatch)
                }
            }, {
                key: "supportElementIndexUint32",
                value: function() {
                    return !(!this._isWebGL2 && !this._oes_element_index_uint)
                }
            }]), LayaGPU
        }();
    et._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"];
    var tt = function() {
        function Render(e, t, n) {
            _classCallCheck(this, Render), this._timeId = 0, Render._mainCanvas = n;
            var r = Render._mainCanvas.source;
            r.id = "layaCanvas", r.width = e, r.height = t, Render.isConchApp && document.body.appendChild(r), this.initRender(Render._mainCanvas, e, t), window.requestAnimationFrame((function loop(e) {
                i.stage._loop();
                window.requestAnimationFrame(loop)
            })), i.stage.on("visibilitychange", this, this._onVisibilitychange)
        }
        return _createClass(Render, [{
            key: "_onVisibilitychange",
            value: function() {
                i.stage.isVisibility ? 0 != this._timeId && window.clearInterval(this._timeId) : this._timeId = window.setInterval(this._enterFrame, 1e3)
            }
        }, {
            key: "initRender",
            value: function(e, i, n) {
                var r = g.instance = y.mainContext = function(e) {
                    var i, n = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                    t.useWebGL2 && !ze.onBDMiniGame || n.shift();
                    for (var r = 0; r < n.length; r++) {
                        try {
                            i = e.getContext(n[r], {
                                stencil: t.isStencil,
                                alpha: t.isAlpha,
                                antialias: t.isAntialias,
                                premultipliedAlpha: t.premultipliedAlpha,
                                preserveDrawingBuffer: t.preserveDrawingBuffer
                            })
                        } catch (e) {}
                        if (i)
                            return "webgl2" === n[r] && ($e._isWebGL2 = !0), i
                    }
                    return null
                }(Render._mainCanvas.source);
                if (!r)
                    return !1;
                g.instance = r, g.layaGPUInstance = new et(r, $e._isWebGL2), e.size(i, n), qe.__init__(), le.__init__();
                var a = new qe;
                return a.isMain = !0, Render._context = a, e._setContext(a), N.__init__(), Y.__init__(), be.__init__(), ye.__int__(r), O._init_(r), !0
            }
        }, {
            key: "_enterFrame",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.stage._loop()
            }
        }], [{
            key: "context",
            get: function() {
                return Render._context
            }
        }, {
            key: "canvas",
            get: function() {
                return Render._mainCanvas.source
            }
        }]), Render
    }();
    tt.supportWebGLPlusCulling = !1, tt.supportWebGLPlusAnimation = !1, tt.supportWebGLPlusRendering = !1, tt.isConchApp = !1, tt.isConchApp = null != window.conch, tt.isConchApp ? (tt.supportWebGLPlusCulling = !1, tt.supportWebGLPlusAnimation = !1, tt.supportWebGLPlusRendering = !1) : null != window.qq && null != window.qq.webglPlus && (tt.supportWebGLPlusCulling = !1, tt.supportWebGLPlusAnimation = !1, tt.supportWebGLPlusRendering = !1);
    var it = function() {
        function DrawTrianglesCmd() {
            _classCallCheck(this, DrawTrianglesCmd)
        }
        return _createClass(DrawTrianglesCmd, [{
            key: "recover",
            value: function() {
                this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, this.matrix = null, n.recover("DrawTrianglesCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.drawTriangles(this.texture, this.x + t, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode, this.colorNum)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawTrianglesCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l, h, u, c) {
                var _ = n.getItemByClass("DrawTrianglesCmd", DrawTrianglesCmd);
                if (_.texture = e, _.x = t, _.y = i, _.vertices = r, _.uvs = a, _.indices = s, _.matrix = o, _.alpha = l, h) {
                    _.color = new Q;
                    var d = j.create(h).arrColor;
                    _.color.color(255 * d[0], 255 * d[1], 255 * d[2], 255 * d[3])
                }
                return _.blendMode = u, _.colorNum = c, _
            }
        }]), DrawTrianglesCmd
    }();
    it.ID = "DrawTriangles";
    var nt = function() {
        function Draw9GridTexture() {
            _classCallCheck(this, Draw9GridTexture)
        }
        return _createClass(Draw9GridTexture, [{
            key: "recover",
            value: function() {
                this.texture._removeReference(), n.recover("Draw9GridTexture", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, t, i)
            }
        }, {
            key: "cmdID",
            get: function() {
                return Draw9GridTexture.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s) {
                var o = n.getItemByClass("Draw9GridTexture", Draw9GridTexture);
                return o.texture = e, e._addReference(), o.x = t, o.y = i, o.width = r, o.height = a, o.sizeGrid = s, o
            }
        }]), Draw9GridTexture
    }();
    nt.ID = "Draw9GridTexture";
    var rt = function() {
        function GraphicsBounds() {
            _classCallCheck(this, GraphicsBounds), this._cacheBoundsType = !1
        }
        return _createClass(GraphicsBounds, [{
            key: "destroy",
            value: function() {
                this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), this._bounds = null, n.recover("GraphicsBounds", this)
            }
        }, {
            key: "reset",
            value: function() {
                this._temp && (this._temp.length = 0)
            }
        }, {
            key: "getBounds",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (!this._bounds || !this._temp || this._temp.length < 1 || e != this._cacheBoundsType) && (this._bounds = p._getWrapRec(this.getBoundPoints(e), this._bounds)), this._cacheBoundsType = e, this._bounds
            }
        }, {
            key: "getBoundPoints",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (!this._temp || this._temp.length < 1 || e != this._cacheBoundsType) && (this._temp = this._getCmdPoints(e)), this._cacheBoundsType = e, this._rstBoundPoints = K.copyArray(this._rstBoundPoints, this._temp)
            }
        }, {
            key: "_getCmdPoints",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = this._graphics.cmds;
                if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (GraphicsBounds._tempCmds.length = 0, GraphicsBounds._tempCmds.push(this._graphics._one), i = GraphicsBounds._tempCmds), !i)
                    return e;
                var n = GraphicsBounds._tempMatrixArrays;
                n.length = 0;
                var f = GraphicsBounds._initMatrix;
                f.identity();
                for (var v, g, y = GraphicsBounds._tempMatrix, m = 0, T = i.length; m < T; m++)
                    switch ((v = i[m]).cmdID) {
                        case r.ID:
                            n.push(f), f = f.clone();
                            break;
                        case $.ID:
                            f = n.pop();
                            break;
                        case ee.ID:
                            y.identity(), y.translate(-v.pivotX, -v.pivotY), y.scale(v.scaleX, v.scaleY), y.translate(v.pivotX, v.pivotY), this._switchMatrix(f, y);
                            break;
                        case J.ID:
                            y.identity(), y.translate(-v.pivotX, -v.pivotY), y.rotate(v.angle), y.translate(v.pivotX, v.pivotY), this._switchMatrix(f, y);
                            break;
                        case ie.ID:
                            y.identity(), y.translate(v.tx, v.ty), this._switchMatrix(f, y);
                            break;
                        case te.ID:
                            y.identity(), y.translate(-v.pivotX, -v.pivotY), y.concat(v.matrix), y.translate(v.pivotX, v.pivotY), this._switchMatrix(f, y);
                            break;
                        case o.ID:
                        case Z.ID:
                            GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), f);
                            break;
                        case q.ID:
                            f.copyTo(y), v.matrix && y.concat(v.matrix), GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), y);
                            break;
                        case o.ID:
                            if (g = v.texture, t)
                                v.width && v.height ? GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), f) : GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, g.width, g.height), f);
                            else {
                                var C = (v.width || g.sourceWidth) / g.width,
                                    x = (v.height || g.sourceHeight) / g.height,
                                    k = C * g.sourceWidth,
                                    S = x * g.sourceHeight,
                                    R = g.offsetX > 0 ? g.offsetX : 0,
                                    b = g.offsetY > 0 ? g.offsetY : 0;
                                R *= C, b *= x, GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x - R, v.y - b, k, S), f)
                            }
                            break;
                        case Z.ID:
                            v.width && v.height ? GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), f) : (g = v.texture, GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, g.width, g.height), f));
                            break;
                        case q.ID:
                            var E;
                            v.matrix ? (f.copyTo(y), y.concat(v.matrix), E = y) : E = f, t ? v.width && v.height ? GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), E) : (g = v.texture, GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, g.width, g.height), E)) : (g = v.texture, C = (v.width || g.sourceWidth) / g.width, x = (v.height || g.sourceHeight) / g.height, k = C * g.sourceWidth, S = x * g.sourceHeight, R = g.offsetX > 0 ? g.offsetX : 0, b = g.offsetY > 0 ? g.offsetY : 0, R *= C, b *= x, GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x - R, v.y - b, k, S), E));
                            break;
                        case d.ID:
                            GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x, v.y, v.width, v.height), f);
                            break;
                        case a.ID:
                            GraphicsBounds._addPointArrToRst(e, p._getBoundPointS(v.x - v.radius, v.y - v.radius, v.radius + v.radius, v.radius + v.radius), f);
                            break;
                        case l.ID:
                            var A;
                            GraphicsBounds._tempPoints.length = 0, A = .5 * v.lineWidth, v.fromX == v.toX ? GraphicsBounds._tempPoints.push(v.fromX + A, v.fromY, v.toX + A, v.toY, v.fromX - A, v.fromY, v.toX - A, v.toY) : v.fromY == v.toY ? GraphicsBounds._tempPoints.push(v.fromX, v.fromY + A, v.toX, v.toY + A, v.fromX, v.fromY - A, v.toX, v.toY - A) : GraphicsBounds._tempPoints.push(v.fromX, v.fromY, v.toX, v.toY), GraphicsBounds._addPointArrToRst(e, GraphicsBounds._tempPoints, f);
                            break;
                        case s.ID:
                            GraphicsBounds._addPointArrToRst(e, ne.I.getBezierPoints(v.points), f, v.x, v.y);
                            break;
                        case h.ID:
                        case _.ID:
                            GraphicsBounds._addPointArrToRst(e, v.points, f, v.x, v.y);
                            break;
                        case u.ID:
                            GraphicsBounds._addPointArrToRst(e, this._getPathPoints(v.paths), f, v.x, v.y);
                            break;
                        case c.ID:
                            GraphicsBounds._addPointArrToRst(e, this._getPiePoints(v.x, v.y, v.radius, v.startAngle, v.endAngle), f);
                            break;
                        case it.ID:
                            GraphicsBounds._addPointArrToRst(e, this._getTriAngBBXPoints(v.vertices), f);
                            break;
                        case nt.ID:
                            GraphicsBounds._addPointArrToRst(e, this._getDraw9GridBBXPoints(v), f)
                    }
                return e.length > 200 ? e = K.copyArray(e, p._getWrapRec(e)._getBoundPoints()) : e.length > 8 && (e = re.scanPList(e)), e
            }
        }, {
            key: "_switchMatrix",
            value: function(e, t) {
                t.concat(e), t.copyTo(e)
            }
        }, {
            key: "_getPiePoints",
            value: function(e, t, i, n, r) {
                var a = GraphicsBounds._tempPoints;
                GraphicsBounds._tempPoints.length = 0;
                var s = Math.PI / 180,
                    o = r - n;
                if (o >= 360 || o <= -360)
                    return a.push(e - i, t - i), a.push(e + i, t - i), a.push(e + i, t + i), a.push(e - i, t + i), a;
                a.push(e, t);
                var l = o % 360;
                l < 0 && (l += 360);
                var h = n + l,
                    u = n * s,
                    c = h * s;
                a.push(e + i * Math.cos(u), t + i * Math.sin(u)), a.push(e + i * Math.cos(c), t + i * Math.sin(c));
                for (var _ = 90 * Math.ceil(n / 90), d = 90 * Math.floor(h / 90), f = _; f <= d; f += 90) {
                    var v = f * s;
                    a.push(e + i * Math.cos(v), t + i * Math.sin(v))
                }
                return a
            }
        }, {
            key: "_getTriAngBBXPoints",
            value: function(e) {
                var t = e.length;
                if (t < 2)
                    return [];
                for (var i = e[0], n = e[1], r = i, a = n, s = 2; s < t;) {
                    var o = e[s++],
                        l = e[s++];
                    i > o && (i = o), n > l && (n = l), r < o && (r = o), a < l && (a = l)
                }
                return [i, n, r, n, r, a, i, a]
            }
        }, {
            key: "_getDraw9GridBBXPoints",
            value: function(e) {
                var t = e.width,
                    i = e.height;
                return [0, 0, t, 0, t, i, 0, i]
            }
        }, {
            key: "_getPathPoints",
            value: function(e) {
                var t, i, n, r = GraphicsBounds._tempPoints;
                for (r.length = 0, i = e.length, t = 0; t < i; t++)
                    (n = e[t]).length > 1 && (r.push(n[1], n[2]), n.length > 3 && r.push(n[3], n[4]));
                return r
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("GraphicsBounds", GraphicsBounds)
            }
        }, {
            key: "_addPointArrToRst",
            value: function(e, t, i) {
                var n, r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                for (r = t.length, n = 0; n < r; n += 2)
                    GraphicsBounds._addPointToRst(e, t[n] + a, t[n + 1] + s, i)
            }
        }, {
            key: "_addPointToRst",
            value: function(e, t, i, n) {
                var r = v.TEMP;
                r.setTo(t || 0, i || 0), n.transformPoint(r), e.push(r.x, r.y)
            }
        }]), GraphicsBounds
    }();
    rt._tempMatrix = new f, rt._initMatrix = new f, rt._tempPoints = [], rt._tempMatrixArrays = [], rt._tempCmds = [];
    var at = function SpriteConst() {
        _classCallCheck(this, SpriteConst)
    };
    at.ALPHA = 1, at.TRANSFORM = 2, at.BLEND = 4, at.CANVAS = 8, at.FILTERS = 16, at.MASK = 32, at.CLIP = 64, at.STYLE = 128, at.TEXTURE = 256, at.GRAPHICS = 512, at.LAYAGL3D = 1024, at.CUSTOM = 2048, at.ONECHILD = 4096, at.CHILDS = 8192, at.REPAINT_NONE = 0, at.REPAINT_NODE = 1, at.REPAINT_CACHE = 2, at.REPAINT_ALL = 3;
    var st = function() {
        function ClipRectCmd() {
            _classCallCheck(this, ClipRectCmd)
        }
        return _createClass(ClipRectCmd, [{
            key: "recover",
            value: function() {
                n.recover("ClipRectCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.clipRect(this.x + t, this.y + i, this.width, this.height)
            }
        }, {
            key: "cmdID",
            get: function() {
                return ClipRectCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t, i, r) {
                var a = n.getItemByClass("ClipRectCmd", ClipRectCmd);
                return a.x = e, a.y = t, a.width = i, a.height = r, a
            }
        }]), ClipRectCmd
    }();
    st.ID = "ClipRect";
    var ot = function() {
        function DrawTexturesCmd() {
            _classCallCheck(this, DrawTexturesCmd)
        }
        return _createClass(DrawTexturesCmd, [{
            key: "recover",
            value: function() {
                this.texture._removeReference(), this.texture = null, this.pos = null, n.recover("DrawTexturesCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.drawTextures(this.texture, this.pos, t, i)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawTexturesCmd.ID
            }
        }], [{
            key: "create",
            value: function(e, t) {
                var i = n.getItemByClass("DrawTexturesCmd", DrawTexturesCmd);
                return i.texture = e, e._addReference(), i.pos = t, i
            }
        }]), DrawTexturesCmd
    }();
    ot.ID = "DrawTextures";
    var lt = function() {
        function FillTextCmd() {
            _classCallCheck(this, FillTextCmd), this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, this._fontObj = FillTextCmd._defFontObj, this._nTexAlign = 0
        }
        return _createClass(FillTextCmd, [{
            key: "recover",
            value: function() {
                n.recover("FillTextCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, n) {
                i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._words ? qe._textRender.fillWords(e, this._words, this.x + t, this.y + n, this._fontObj, this._color, this._borderColor, this._lineWidth) : this._textIsWorldText ? e._fast_filltext(this._text, this.x + t, this.y + n, this._fontObj, this._color, this._borderColor, this._lineWidth, this._nTexAlign, 0) : qe._textRender.filltext(e, this._text, this.x + t, this.y + n, this.font, this.color, this._borderColor, this._lineWidth, this._textAlign)
            }
        }, {
            key: "cmdID",
            get: function() {
                return FillTextCmd.ID
            }
        }, {
            key: "text",
            get: function() {
                return this._text
            },
            set: function(e) {
                this._text = e, this._textIsWorldText = e instanceof Ye, this._textIsWorldText && this._text.cleanCache()
            }
        }, {
            key: "font",
            get: function() {
                return this._font
            },
            set: function(e) {
                this._font = e, this._fontObj = Ve.Parse(e), this._textIsWorldText && this._text.cleanCache()
            }
        }, {
            key: "color",
            get: function() {
                return this._color
            },
            set: function(e) {
                this._color = e, this._fontColor = j.create(e).numColor, this._textIsWorldText && this._text.cleanCache()
            }
        }, {
            key: "textAlign",
            get: function() {
                return this._textAlign
            },
            set: function(e) {
                switch (this._textAlign = e, e) {
                    case "center":
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;
                    case "right":
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_RIGHT;
                        break;
                    default:
                        this._nTexAlign = i.Context.ENUM_TEXTALIGN_DEFAULT
                }
                this._textIsWorldText && this._text.cleanCache()
            }
        }], [{
            key: "create",
            value: function(e, t, i, r, a, s, o, l, h) {
                var u = n.getItemByClass("FillTextCmd", FillTextCmd);
                return u.text = e, u._textIsWorldText = e instanceof Ye, u._words = t, u.x = i, u.y = r, u.font = a, u.color = s, u.textAlign = o, u._lineWidth = l, u._borderColor = h, u
            }
        }]), FillTextCmd
    }();
    lt.ID = "FillText", lt._defFontObj = new Ve(null);
    var ht = function() {
        function SaveCmd() {
            _classCallCheck(this, SaveCmd)
        }
        return _createClass(SaveCmd, [{
            key: "recover",
            value: function() {
                n.recover("SaveCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.save()
            }
        }, {
            key: "cmdID",
            get: function() {
                return SaveCmd.ID
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("SaveCmd", SaveCmd)
            }
        }]), SaveCmd
    }();
    ht.ID = "Save";
    var ut = function() {
        function CacheManger() {
            _classCallCheck(this, CacheManger)
        }
        return _createClass(CacheManger, null, [{
            key: "regCacheByFunction",
            value: function(e, t) {
                var i;
                CacheManger.unRegCacheByFunction(e, t), i = {
                    tryDispose: e,
                    getCacheList: t
                }, CacheManger._cacheList.push(i)
            }
        }, {
            key: "unRegCacheByFunction",
            value: function(e, t) {
                var i, n;
                for (n = CacheManger._cacheList.length, i = 0; i < n; i++)
                    if (CacheManger._cacheList[i].tryDispose == e && CacheManger._cacheList[i].getCacheList == t)
                        return void CacheManger._cacheList.splice(i, 1)
            }
        }, {
            key: "forceDispose",
            value: function() {
                var e, t = CacheManger._cacheList.length;
                for (e = 0; e < t; e++)
                    CacheManger._cacheList[e].tryDispose(!0)
            }
        }, {
            key: "beginCheck",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15e3;
                i.systemTimer.loop(e, null, CacheManger._checkLoop)
            }
        }, {
            key: "stopCheck",
            value: function() {
                i.systemTimer.clear(null, CacheManger._checkLoop)
            }
        }, {
            key: "_checkLoop",
            value: function() {
                var e = CacheManger._cacheList;
                if (!(e.length < 1)) {
                    var t, n, r = i.Browser.now();
                    for (n = t = e.length; t > 0 && (CacheManger._index++, CacheManger._index = CacheManger._index % n, e[CacheManger._index].tryDispose(!1), !(i.Browser.now() - r > CacheManger.loopTimeLimit));)
                        t--
                }
            }
        }]), CacheManger
    }();
    ut.loopTimeLimit = 2, ut._cacheList = [], ut._index = 0;
    var ct = function() {
            function VectorGraphManager() {
                _classCallCheck(this, VectorGraphManager), this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], ut.regCacheByFunction(this.startDispose.bind(this), this.getCacheList.bind(this))
            }
            return _createClass(VectorGraphManager, [{
                key: "getId",
                value: function() {
                    return this._id++
                }
            }, {
                key: "addShape",
                value: function(e, t) {
                    this.shapeDic[e] = t, this.useDic[e] || (this.useDic[e] = !0)
                }
            }, {
                key: "addLine",
                value: function(e, t) {
                    this.shapeLineDic[e] = t, this.shapeLineDic[e] || (this.shapeLineDic[e] = !0)
                }
            }, {
                key: "getShape",
                value: function(e) {
                    this._checkKey && null != this.useDic[e] && (this.useDic[e] = !0)
                }
            }, {
                key: "deleteShape",
                value: function(e) {
                    this.shapeDic[e] && (this.shapeDic[e] = null, delete this.shapeDic[e]), this.shapeLineDic[e] && (this.shapeLineDic[e] = null, delete this.shapeLineDic[e]), null != this.useDic[e] && delete this.useDic[e]
                }
            }, {
                key: "getCacheList",
                value: function() {
                    var e, t = [];
                    for (e in this.shapeDic)
                        t.push(this.shapeDic[e]);
                    for (e in this.shapeLineDic)
                        t.push(this.shapeLineDic[e]);
                    return t
                }
            }, {
                key: "startDispose",
                value: function(e) {
                    var t;
                    for (t in this.useDic)
                        this.useDic[t] = !1;
                    this._checkKey = !0
                }
            }, {
                key: "endDispose",
                value: function() {
                    if (this._checkKey) {
                        var e;
                        for (e in this.useDic)
                            this.useDic[e] || this.deleteShape(e);
                        this._checkKey = !1
                    }
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return VectorGraphManager.instance = VectorGraphManager.instance || new VectorGraphManager
                }
            }]), VectorGraphManager
        }(),
        _t = function() {
            function Graphics() {
                _classCallCheck(this, Graphics), this._sp = null, this._one = null, this._render = this._renderEmpty, this._cmds = null, this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1, this._createData()
            }
            return _createClass(Graphics, [{
                key: "_createData",
                value: function() {}
            }, {
                key: "_clearData",
                value: function() {}
            }, {
                key: "_destroyData",
                value: function() {}
            }, {
                key: "destroy",
                value: function() {
                    this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), this._sp = null), this._destroyData()
                }
            }, {
                key: "clear",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (e) {
                        var t = this._one;
                        if (this._cmds) {
                            var i, n = this._cmds.length;
                            for (i = 0; i < n; i++)
                                (t = this._cmds[i]).recover();
                            this._cmds.length = 0
                        } else
                            t && t.recover()
                    } else
                        this._cmds = null;
                    if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= ~at.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                        for (i = 0, n = this._vectorgraphArray.length; i < n; i++)
                            ct.getInstance().deleteShape(this._vectorgraphArray[i]);
                        this._vectorgraphArray.length = 0
                    }
                }
            }, {
                key: "_clearBoundsCache",
                value: function() {
                    this._graphicBounds && this._graphicBounds.reset()
                }
            }, {
                key: "_initGraphicBounds",
                value: function() {
                    this._graphicBounds || (this._graphicBounds = rt.create(), this._graphicBounds._graphics = this)
                }
            }, {
                key: "_repaint",
                value: function() {
                    this._clearBoundsCache(), this._sp && this._sp.repaint()
                }
            }, {
                key: "_isOnlyOne",
                value: function() {
                    return !this._cmds || 0 === this._cmds.length
                }
            }, {
                key: "getBounds",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this._initGraphicBounds(), this._graphicBounds.getBounds(e)
                }
            }, {
                key: "getBoundPoints",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this._initGraphicBounds(), this._graphicBounds.getBoundPoints(e)
                }
            }, {
                key: "drawImage",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    if (!e)
                        return null;
                    if (n || (n = e.sourceWidth), r || (r = e.sourceHeight), e.getIsReady()) {
                        var a = n / e.sourceWidth,
                            s = r / e.sourceHeight;
                        if (n = e.width * a, r = e.height * s, n <= 0 || r <= 0)
                            return null;
                        t += e.offsetX * a, i += e.offsetY * s
                    }
                    this._sp && (this._sp._renderType |= at.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                    var l = o.create.call(this, e, t, i, n, r);
                    return null == this._one ? (this._one = l, this._render = this._renderOneImg) : this._saveToCmd(null, l), this._repaint(), l
                }
            }, {
                key: "drawTexture",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        h = arguments.length > 9 ? arguments[9] : void 0;
                    if (!e || s < .01)
                        return null;
                    if (!e.getIsReady())
                        return null;
                    if (n || (n = e.sourceWidth), r || (r = e.sourceHeight), e.getIsReady()) {
                        var u = n / e.sourceWidth,
                            c = r / e.sourceHeight;
                        if (n = e.width * u, r = e.height * c, n <= 0 || r <= 0)
                            return null;
                        t += e.offsetX * u, i += e.offsetY * c
                    }
                    this._sp && (this._sp._renderType |= at.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                    var _ = q.create.call(this, e, t, i, n, r, a, s, o, l, h);
                    return this._repaint(), this._saveToCmd(null, _)
                }
            }, {
                key: "drawTextures",
                value: function(e, t) {
                    return e ? this._saveToCmd(tt._context.drawTextures, ot.create.call(this, e, t)) : null
                }
            }, {
                key: "drawTriangles",
                value: function(e, t, i, n, r, a) {
                    var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                        u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : void 0;
                    return this._saveToCmd(tt._context.drawTriangles, it.create.call(this, e, t, i, n, r, a, s, o, l, h, u))
                }
            }, {
                key: "fillTexture",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "repeat",
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                    return e && e.getIsReady() ? this._saveToCmd(tt._context._fillTexture, Z.create.call(this, e, t, i, n, r, a, s || v.EMPTY, {})) : null
                }
            }, {
                key: "_saveToCmd",
                value: function(e, t) {
                    return this._sp && (this._sp._renderType |= at.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), null == this._one ? (this._one = t, this._render = this._renderOne) : (this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(t)), this._repaint(), t
                }
            }, {
                key: "clipRect",
                value: function(e, t, i, n) {
                    return this._saveToCmd(tt._context.clipRect, st.create.call(this, e, t, i, n))
                }
            }, {
                key: "fillText",
                value: function(e, t, n, r, a, s) {
                    return this._saveToCmd(tt._context.fillText, lt.create.call(this, e, null, t, n, r || i.Text.defaultFontStr(), a, s, 0, ""))
                }
            }, {
                key: "fillBorderText",
                value: function(e, t, n, r, a, s, o, l) {
                    return this._saveToCmd(tt._context.fillText, lt.create.call(this, e, null, t, n, r || i.Text.defaultFontStr(), a, l, o, s))
                }
            }, {
                key: "fillWords",
                value: function(e, t, n, r, a) {
                    return this._saveToCmd(tt._context.fillText, lt.create.call(this, null, e, t, n, r || i.Text.defaultFontStr(), a))
                }
            }, {
                key: "fillBorderWords",
                value: function(e, t, n, r, a, s, o) {
                    return this._saveToCmd(tt._context.fillText, lt.create.call(this, null, e, t, n, r || i.Text.defaultFontStr(), a, "", o, s))
                }
            }, {
                key: "strokeText",
                value: function(e, t, n, r, a, s, o) {
                    return this._saveToCmd(tt._context.fillText, lt.create.call(this, e, null, t, n, r || i.Text.defaultFontStr(), null, o, s, a))
                }
            }, {
                key: "alpha",
                value: function(e) {
                    return this._saveToCmd(tt._context.alpha, r.create.call(this, e))
                }
            }, {
                key: "transform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this._saveToCmd(tt._context._transform, te.create.call(this, e, t, i))
                }
            }, {
                key: "rotate",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this._saveToCmd(tt._context._rotate, J.create.call(this, e, t, i))
                }
            }, {
                key: "scale",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    return this._saveToCmd(tt._context._scale, ee.create.call(this, e, t, i, n))
                }
            }, {
                key: "translate",
                value: function(e, t) {
                    return this._saveToCmd(tt._context.translate, ie.create.call(this, e, t))
                }
            }, {
                key: "save",
                value: function() {
                    return this._saveToCmd(tt._context._save, ht.create.call(this))
                }
            }, {
                key: "restore",
                value: function() {
                    return this._saveToCmd(tt._context.restore, $.create.call(this))
                }
            }, {
                key: "replaceText",
                value: function(e) {
                    this._repaint();
                    var t = this._cmds;
                    if (t) {
                        for (var i = t.length - 1; i > -1; i--)
                            if (this._isTextCmd(t[i]))
                                return t[i].text = e, !0
                    } else if (this._one && this._isTextCmd(this._one))
                        return this._one.text = e, !0;
                    return !1
                }
            }, {
                key: "_isTextCmd",
                value: function(e) {
                    return e.cmdID == lt.ID
                }
            }, {
                key: "replaceTextColor",
                value: function(e) {
                    this._repaint();
                    var t = this._cmds;
                    if (t)
                        for (var i = t.length - 1; i > -1; i--)
                            this._isTextCmd(t[i]) && this._setTextCmdColor(t[i], e);
                    else
                        this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, e)
                }
            }, {
                key: "_setTextCmdColor",
                value: function(e, t) {
                    switch (e.cmdID) {
                        case lt.ID:
                            e.color = t
                    }
                }
            }, {
                key: "loadImage",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        o = i.Loader.getRes(e);
                    o ? o.getIsReady() ? this.drawImage(o, t, n, r, a) : o.once(Ue.READY, this, this.drawImage, [o, t, n, r, a]) : ((o = new We).load(e), i.Loader.cacheTexture(e, o), o.once(Ue.READY, this, this.drawImage, [o, t, n, r, a])), null != s && (o.getIsReady() ? s.call(this._sp) : o.on(Ue.READY, this._sp, s))
                }
            }, {
                key: "_renderEmpty",
                value: function(e, t, i, n) {}
            }, {
                key: "_renderAll",
                value: function(e, t, i, n) {
                    for (var r = this._cmds, a = 0, s = r.length; a < s; a++)
                        r[a].run(t, i, n)
                }
            }, {
                key: "_renderOne",
                value: function(e, t, i, n) {
                    t.sprite = e, this._one.run(t, i, n)
                }
            }, {
                key: "_renderOneImg",
                value: function(e, t, i, n) {
                    t.sprite = e, this._one.run(t, i, n)
                }
            }, {
                key: "drawLine",
                value: function(e, t, i, n, r) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                        s = a < 1 || a % 2 == 0 ? 0 : .5;
                    return this._saveToCmd(tt._context._drawLine, l.create.call(this, e + s, t + s, i + s, n + s, r, a, 0))
                }
            }, {
                key: "drawLines",
                value: function(e, t, i, n) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                    if (!i || i.length < 4)
                        return null;
                    var a = r < 1 || r % 2 == 0 ? 0 : .5;
                    return this._saveToCmd(tt._context._drawLines, h.create.call(this, e + a, t + a, i, n, r, 0))
                }
            }, {
                key: "drawCurves",
                value: function(e, t, i, n) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                    return this._saveToCmd(tt._context.drawCurves, s.create.call(this, e, t, i, n, r))
                }
            }, {
                key: "drawRect",
                value: function(e, t, i, n, r) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        o = s >= 1 && a ? s / 2 : 0,
                        l = a ? s : 0;
                    return this._saveToCmd(tt._context.drawRect, d.create.call(this, e + o, t + o, i - l, n - l, r, a, s))
                }
            }, {
                key: "drawCircle",
                value: function(e, t, i, n) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                        o = s >= 1 && r ? s / 2 : 0;
                    return this._saveToCmd(tt._context._drawCircle, a.create.call(this, e, t, i - o, n, r, s, 0))
                }
            }, {
                key: "drawPie",
                value: function(e, t, i, n, r, a) {
                    var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                        l = o >= 1 && s ? o / 2 : 0,
                        h = s ? o : 0;
                    return this._saveToCmd(tt._context._drawPie, c.create.call(this, e + l, t + l, i - h, K.toRadian(n), K.toRadian(r), a, s, o, 0))
                }
            }, {
                key: "drawPoly",
                value: function(e, t, i, n) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                        s = !1;
                    s = !(i.length > 6);
                    var o = a >= 1 && r ? a % 2 == 0 ? 0 : .5 : 0;
                    return this._saveToCmd(tt._context._drawPoly, _.create.call(this, e + o, t + o, i, n, r, a, s, 0))
                }
            }, {
                key: "drawPath",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return this._saveToCmd(tt._context._drawPath, u.create.call(this, e, t, i, n, r))
                }
            }, {
                key: "draw9Grid",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    this._saveToCmd(null, nt.create(e, t, i, n, r, a))
                }
            }, {
                key: "cmds",
                get: function() {
                    return this._cmds
                },
                set: function(e) {
                    this._sp && (this._sp._renderType |= at.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), this._cmds = e, this._render = this._renderAll, this._repaint()
                }
            }]), Graphics
        }(),
        dt = function Const() {
            _classCallCheck(this, Const)
        };
    dt.NOT_ACTIVE = 1, dt.ACTIVE_INHIERARCHY = 2, dt.AWAKED = 4, dt.NOT_READY = 8, dt.DISPLAY = 16, dt.HAS_ZORDER = 32, dt.HAS_MOUSE = 64, dt.DISPLAYED_INSTAGE = 128, dt.DRAWCALL_OPTIMIZE = 256;
    var ft = function() {
        function LayaGLQuickRunner() {
            _classCallCheck(this, LayaGLQuickRunner)
        }
        return _createClass(LayaGLQuickRunner, null, [{
            key: "__init__",
            value: function() {
                LayaGLQuickRunner.map[at.ALPHA | at.TRANSFORM | at.GRAPHICS] = LayaGLQuickRunner.alpha_transform_drawLayaGL, LayaGLQuickRunner.map[at.ALPHA | at.GRAPHICS] = LayaGLQuickRunner.alpha_drawLayaGL, LayaGLQuickRunner.map[at.TRANSFORM | at.GRAPHICS] = LayaGLQuickRunner.transform_drawLayaGL, LayaGLQuickRunner.map[at.TRANSFORM | at.CHILDS] = LayaGLQuickRunner.transform_drawNodes, LayaGLQuickRunner.map[at.ALPHA | at.TRANSFORM | at.TEXTURE] = LayaGLQuickRunner.alpha_transform_drawTexture, LayaGLQuickRunner.map[at.ALPHA | at.TEXTURE] = LayaGLQuickRunner.alpha_drawTexture, LayaGLQuickRunner.map[at.TRANSFORM | at.TEXTURE] = LayaGLQuickRunner.transform_drawTexture, LayaGLQuickRunner.map[at.GRAPHICS | at.CHILDS] = LayaGLQuickRunner.drawLayaGL_drawNodes
            }
        }, {
            key: "transform_drawTexture",
            value: function(e, t, i, n) {
                e._style;
                var r = e.texture;
                t.saveTransform(LayaGLQuickRunner.curMat), t.transformByMatrix(e.transform, i, n), t.drawTexture(r, -e.pivotX, -e.pivotY, e._width || r.width, e._height || r.height), t.restoreTransform(LayaGLQuickRunner.curMat)
            }
        }, {
            key: "alpha_drawTexture",
            value: function(e, t, i, n) {
                var r, a = e._style,
                    s = e.texture;
                if ((r = a.alpha) > .01 || e._needRepaint()) {
                    var o = t.globalAlpha;
                    t.globalAlpha *= r, t.drawTexture(s, i - a.pivotX + s.offsetX, n - a.pivotY + s.offsetY, e._width || s.width, e._height || s.height), t.globalAlpha = o
                }
            }
        }, {
            key: "alpha_transform_drawTexture",
            value: function(e, t, i, n) {
                var r, a = e._style,
                    s = e.texture;
                if ((r = a.alpha) > .01 || e._needRepaint()) {
                    var o = t.globalAlpha;
                    t.globalAlpha *= r, t.saveTransform(LayaGLQuickRunner.curMat), t.transformByMatrix(e.transform, i, n), t.drawTexture(s, -a.pivotX + s.offsetX, -a.pivotY + s.offsetY, e._width || s.width, e._height || s.height), t.restoreTransform(LayaGLQuickRunner.curMat), t.globalAlpha = o
                }
            }
        }, {
            key: "alpha_transform_drawLayaGL",
            value: function(e, t, i, n) {
                var r, a = e._style;
                if ((r = a.alpha) > .01 || e._needRepaint()) {
                    var s = t.globalAlpha;
                    t.globalAlpha *= r, t.saveTransform(LayaGLQuickRunner.curMat), t.transformByMatrix(e.transform, i, n), e._graphics && e._graphics._render(e, t, -a.pivotX, -a.pivotY), t.restoreTransform(LayaGLQuickRunner.curMat), t.globalAlpha = s
                }
            }
        }, {
            key: "alpha_drawLayaGL",
            value: function(e, t, i, n) {
                var r, a = e._style;
                if ((r = a.alpha) > .01 || e._needRepaint()) {
                    var s = t.globalAlpha;
                    t.globalAlpha *= r, e._graphics && e._graphics._render(e, t, i - a.pivotX, n - a.pivotY), t.globalAlpha = s
                }
            }
        }, {
            key: "transform_drawLayaGL",
            value: function(e, t, i, n) {
                var r = e._style;
                t.saveTransform(LayaGLQuickRunner.curMat), t.transformByMatrix(e.transform, i, n), e._graphics && e._graphics._render(e, t, -r.pivotX, -r.pivotY), t.restoreTransform(LayaGLQuickRunner.curMat)
            }
        }, {
            key: "transform_drawNodes",
            value: function(e, t, i, n) {
                var r = e._getBit(dt.DRAWCALL_OPTIMIZE) && t.drawCallOptimize(!0),
                    a = e._style;
                t.saveTransform(LayaGLQuickRunner.curMat), t.transformByMatrix(e.transform, i, n), i = -a.pivotX, n = -a.pivotY;
                var s, o = e._children,
                    l = o.length;
                if (a.viewport) {
                    var h, u, c = a.viewport,
                        _ = c.x,
                        d = c.y,
                        f = c.right,
                        v = c.bottom;
                    for (p = 0; p < l; ++p)
                        (s = o[p])._visible && (h = s._x) < f && h + s.width > _ && (u = s._y) < v && u + s.height > d && s.render(t, i, n)
                } else
                    for (var p = 0; p < l; ++p)
                        (s = o[p])._visible && s.render(t, i, n);
                t.restoreTransform(LayaGLQuickRunner.curMat), r && t.drawCallOptimize(!1)
            }
        }, {
            key: "drawLayaGL_drawNodes",
            value: function(e, t, i, n) {
                var r = e._getBit(dt.DRAWCALL_OPTIMIZE) && t.drawCallOptimize(!0),
                    a = e._style;
                i -= a.pivotX, n -= a.pivotY, e._graphics && e._graphics._render(e, t, i, n);
                var s, o = e._children,
                    l = o.length;
                if (a.viewport) {
                    var h, u, c = a.viewport,
                        _ = c.x,
                        d = c.y,
                        f = c.right,
                        v = c.bottom;
                    for (p = 0; p < l; ++p)
                        (s = o[p])._visible && (h = s._x) < f && h + s.width > _ && (u = s._y) < v && u + s.height > d && s.render(t, i, n)
                } else
                    for (var p = 0; p < l; ++p)
                        (s = o[p])._visible && s.render(t, i, n);
                r && t.drawCallOptimize(!1)
            }
        }]), LayaGLQuickRunner
    }();
    ft.map = {}, ft.curMat = new f;
    var vt = function() {
        function RenderSprite(e, t) {
            if (_classCallCheck(this, RenderSprite), ft.map[e])
                return this._fun = ft.map[e], void(this._next = RenderSprite.NORENDER);
            switch (this._next = t || RenderSprite.NORENDER, e) {
                case 0:
                    return void(this._fun = this._no);
                case at.ALPHA:
                    return void(this._fun = this._alpha);
                case at.TRANSFORM:
                    return void(this._fun = this._transform);
                case at.BLEND:
                    return void(this._fun = this._blend);
                case at.CANVAS:
                    return void(this._fun = this._canvas);
                case at.MASK:
                    return void(this._fun = this._mask);
                case at.CLIP:
                    return void(this._fun = this._clip);
                case at.STYLE:
                    return void(this._fun = this._style);
                case at.GRAPHICS:
                    return void(this._fun = this._graphics);
                case at.CHILDS:
                    return void(this._fun = this._children);
                case at.CUSTOM:
                    return void(this._fun = this._custom);
                case at.TEXTURE:
                    return void(this._fun = this._texture);
                case at.FILTERS:
                    return void(this._fun = z._filter);
                case RenderSprite.INIT:
                    return void(this._fun = RenderSprite._initRenderFun)
            }
            this.onCreate(e)
        }
        return _createClass(RenderSprite, [{
            key: "onCreate",
            value: function(e) {}
        }, {
            key: "_style",
            value: function(e, t, i, n) {
                var r = e._style;
                null != r.render && r.render(e, t, i, n);
                var a = this._next;
                a._fun.call(a, e, t, i, n)
            }
        }, {
            key: "_no",
            value: function(e, t, i, n) {}
        }, {
            key: "_custom",
            value: function(e, t, i, n) {
                e.customRender(t, i, n), this._next._fun.call(this._next, e, t, i - e.pivotX, n - e.pivotY)
            }
        }, {
            key: "_clip",
            value: function(e, t, i, n) {
                var r = this._next;
                if (r != RenderSprite.NORENDER) {
                    var a = e._style.scrollRect,
                        s = a.width,
                        o = a.height;
                    0 !== s && 0 !== o && (t.save(), t.clipRect(i, n, s, o), r._fun.call(r, e, t, i - a.x, n - a.y), t.restore())
                }
            }
        }, {
            key: "_texture",
            value: function(e, t, i, n) {
                var r = e.texture;
                r._getSource() && t.drawTexture(r, i - e.pivotX + r.offsetX, n - e.pivotY + r.offsetY, e._width || r.width, e._height || r.height);
                var a = this._next;
                a != RenderSprite.NORENDER && a._fun.call(a, e, t, i, n)
            }
        }, {
            key: "_graphics",
            value: function(e, t, i, n) {
                var r = e._style,
                    a = e._graphics;
                a && a._render(e, t, i - r.pivotX, n - r.pivotY);
                var s = this._next;
                s != RenderSprite.NORENDER && s._fun.call(s, e, t, i, n)
            }
        }, {
            key: "_image",
            value: function(e, t, i, n) {
                var r = e._style;
                t.drawTexture2(i, n, r.pivotX, r.pivotY, e.transform, e._graphics._one)
            }
        }, {
            key: "_image2",
            value: function(e, t, i, n) {
                var r = e._style;
                t.drawTexture2(i, n, r.pivotX, r.pivotY, e.transform, e._graphics._one)
            }
        }, {
            key: "_alpha",
            value: function(e, t, i, n) {
                var r;
                if ((r = e._style.alpha) > .01 || e._needRepaint()) {
                    var a = t.globalAlpha;
                    t.globalAlpha *= r;
                    var s = this._next;
                    s._fun.call(s, e, t, i, n), t.globalAlpha = a
                }
            }
        }, {
            key: "_transform",
            value: function(e, t, i, n) {
                var r = e.transform,
                    a = this._next;
                e._style;
                r && a != RenderSprite.NORENDER ? (t.save(), t.transform(r.a, r.b, r.c, r.d, r.tx + i, r.ty + n), a._fun.call(a, e, t, 0, 0), t.restore()) : a != RenderSprite.NORENDER && a._fun.call(a, e, t, i, n)
            }
        }, {
            key: "_children",
            value: function(e, t, i, n) {
                var r, a = e._style,
                    s = e._children,
                    o = s.length;
                i -= e.pivotX, n -= e.pivotY;
                var l = e._getBit(dt.DRAWCALL_OPTIMIZE) && t.drawCallOptimize(!0);
                if (a.viewport) {
                    var h, u, c = a.viewport,
                        _ = c.x,
                        d = c.y,
                        f = c.right,
                        v = c.bottom;
                    for (p = 0; p < o; ++p)
                        (r = s[p])._visible && (h = r._x) < f && h + r.width > _ && (u = r._y) < v && u + r.height > d && r.render(t, i, n)
                } else
                    for (var p = 0; p < o; ++p)
                        (r = s[p])._visible && r.render(t, i, n);
                l && t.drawCallOptimize(!1)
            }
        }, {
            key: "_canvas",
            value: function(e, t, n, r) {
                var a = e._cacheStyle,
                    s = this._next;
                if (a.enableCanvasRender) {
                    "bitmap" === a.cacheAs ? G.canvasBitmap++ : G.canvasNormal++;
                    var o = !1,
                        l = !1;
                    if (a.canvas) {
                        var h = a.canvas,
                            u = (h.context, h.touches);
                        if (u)
                            for (var c = 0; c < u.length; c++)
                                if (u[c].deleted) {
                                    l = !0;
                                    break
                                }
                        o = h.isCacheValid && !h.isCacheValid()
                    }
                    if (e._needRepaint() || !a.canvas || l || o || i.stage.isGlobalRepaint())
                        if ("normal" === a.cacheAs) {
                            if (t._targets)
                                return void s._fun.call(s, e, t, n, r);
                            this._canvas_webgl_normal_repaint(e, t)
                        } else
                            this._canvas_repaint(e, t, n, r);
                    var _ = a.cacheRect;
                    t.drawCanvas(a.canvas, n + _.x, r + _.y, _.width, _.height)
                } else
                    s._fun.call(s, e, t, n, r)
            }
        }, {
            key: "_canvas_repaint",
            value: function(e, t, i, n) {
                var r, a, s, o, l, h, u, c, _, d = e._cacheStyle,
                    f = this._next,
                    v = d.canvas,
                    p = d.cacheAs;
                if (u = (_ = d._calculateCacheRect(e, p, i, n)).x, c = _.y, l = (o = d.cacheRect).width * u, h = o.height * c, a = o.x, s = o.y, "bitmap" === p && (l > 2048 || h > 2048))
                    return console.warn("cache bitmap size larger than 2048,cache ignored"), d.releaseContext(), void f._fun.call(f, e, t, i, n);
                if (v || (d.createContext(), v = d.canvas), (r = v.context).sprite = e, (v.width != l || v.height != h) && v.size(l, h), "bitmap" === p ? r.asBitmap = !0 : "normal" === p && (r.asBitmap = !1), r.clear(), 1 != u || 1 != c) {
                    var g = r;
                    g.save(), g.scale(u, c), f._fun.call(f, e, r, -a, -s), g.restore(), e._applyFilters()
                } else
                    g = r, f._fun.call(f, e, r, -a, -s), e._applyFilters();
                d.staticCache && (d.reCache = !1), G.canvasReCache++
            }
        }, {
            key: "_canvas_webgl_normal_repaint",
            value: function(e, t) {
                var i = e._cacheStyle,
                    n = this._next,
                    r = i.canvas,
                    a = i.cacheAs;
                i._calculateCacheRect(e, a, 0, 0), r || (r = i.canvas = new Re(t, e));
                var s = r.context;
                r.startRec(), n._fun.call(n, e, s, e.pivotX, e.pivotY), e._applyFilters(), G.canvasReCache++, r.endRec()
            }
        }, {
            key: "_blend",
            value: function(e, t, i, n) {
                var r = e._style,
                    a = this._next;
                r.blendMode ? (t.save(), t.globalCompositeOperation = r.blendMode, a._fun.call(a, e, t, i, n), t.restore()) : a._fun.call(a, e, t, i, n)
            }
        }, {
            key: "_mask",
            value: function(e, t, i, n) {
                var r = this._next,
                    a = e.mask,
                    s = t;
                if (a) {
                    s.save();
                    var o = s.globalCompositeOperation,
                        l = new p;
                    if (l.copyFrom(a.getBounds()), l.width = Math.round(l.width), l.height = Math.round(l.height), l.x = Math.round(l.x), l.y = Math.round(l.y), l.width > 0 && l.height > 0) {
                        var h = l.width,
                            u = l.height,
                            c = B.getRT(h, u);
                        s.breakNextMerge(), s.pushRT(), s.addRenderObject(X.create([s, c, h, u], RenderSprite.tmpTarget, this)), a.render(s, -l.x, -l.y), s.breakNextMerge(), s.popRT(), s.save(), s.clipRect(i + l.x - e.getStyle().pivotX, n + l.y - e.getStyle().pivotY, h, u), r._fun.call(r, e, s, i, n), s.restore(), o = s.globalCompositeOperation, s.addRenderObject(X.create(["mask"], RenderSprite.setBlendMode, this));
                        var _ = Y.create(N.TEXTURE2D, 0),
                            d = We.INV_UV;
                        s.drawTarget(c, i + l.x - e.getStyle().pivotX, n + l.y - e.getStyle().pivotY, h, u, f.TEMP.identity(), _, d, 6), s.addRenderObject(X.create([c], RenderSprite.recycleTarget, this)), s.addRenderObject(X.create([o], RenderSprite.setBlendMode, this))
                    }
                    s.restore()
                } else
                    r._fun.call(r, e, t, i, n)
            }
        }], [{
            key: "__init__",
            value: function() {
                var e, t, i;
                for (ft.__init__(), i = new RenderSprite(RenderSprite.INIT, null), t = RenderSprite.renders.length = 2 * at.CHILDS, e = 0; e < t; e++)
                    RenderSprite.renders[e] = i;
                RenderSprite.renders[0] = new RenderSprite(0, null)
            }
        }, {
            key: "_initRenderFun",
            value: function(e, t, i, n) {
                var r = e._renderType;
                (RenderSprite.renders[r] = RenderSprite._getTypeRender(r))._fun(e, t, i, n)
            }
        }, {
            key: "_getTypeRender",
            value: function(e) {
                if (ft.map[e])
                    return new RenderSprite(e, null);
                for (var t = null, i = at.CHILDS; i > 0;)
                    i & e && (t = new RenderSprite(i, t)), i >>= 1;
                return t
            }
        }, {
            key: "tmpTarget",
            value: function(e, t, i, n) {
                t.start(), t.clear(0, 0, 0, 0)
            }
        }, {
            key: "recycleTarget",
            value: function(e) {
                B.releaseRT(e)
            }
        }, {
            key: "setBlendMode",
            value: function(e) {
                var t = y.mainContext;
                O.targetFns[O.TOINT[e]](t)
            }
        }]), RenderSprite
    }();
    vt.INIT = 69905, vt.renders = [], vt.NORENDER = new vt(0, null), vt.tempUV = new Array(8);
    var pt = function(e) {
            function HTMLCanvas() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return _classCallCheck(this, HTMLCanvas), (e = _possibleConstructorReturn(this, _getPrototypeOf(HTMLCanvas).call(this)))._source = t ? ze.createElement("canvas") : _assertThisInitialized(e), e.lock = !0, e
            }
            return _inherits(HTMLCanvas, e), _createClass(HTMLCanvas, [{
                key: "_getSource",
                value: function() {
                    return this._source
                }
            }, {
                key: "source",
                get: function() {
                    return this._source
                }
            }]), _createClass(HTMLCanvas, [{
                key: "clear",
                value: function() {
                    this._ctx && (this._ctx.clear ? this._ctx.clear() : this._ctx.clearRect(0, 0, this._width, this._height)), this._texture && (this._texture.destroy(), this._texture = null)
                }
            }, {
                key: "destroy",
                value: function() {
                    _get(_getPrototypeOf(HTMLCanvas.prototype), "destroy", this).call(this), this._setCPUMemory(0), this._ctx && this._ctx.destroy && this._ctx.destroy(), this._ctx = null
                }
            }, {
                key: "release",
                value: function() {}
            }, {
                key: "_setContext",
                value: function(e) {
                    this._ctx = e
                }
            }, {
                key: "getContext",
                value: function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.context
                }
            }, {
                key: "getMemSize",
                value: function() {
                    return 0
                }
            }, {
                key: "size",
                value: function(e, t) {
                    (this._width != e || this._height != t || this._source && (this._source.width != e || this._source.height != t)) && (this._width = e, this._height = t, this._setCPUMemory(e * t * 4), this._ctx && this._ctx.size && this._ctx.size(e, t), this._source && (this._source.height = t, this._source.width = e), this._texture && (this._texture.destroy(), this._texture = null))
                }
            }, {
                key: "getTexture",
                value: function() {
                    if (!this._texture) {
                        var e = new M;
                        e.loadImageSource(this.source), this._texture = new We(e)
                    }
                    return this._texture
                }
            }, {
                key: "toBase64",
                value: function(e, t) {
                    if (this._source) {
                        if (i.Render.isConchApp) {
                            var n = window;
                            if (2 == n.conchConfig.threadMode)
                                throw "native 2 thread mode use toBase64Async";
                            var r = this._ctx._targets.sourceWidth,
                                a = this._ctx._targets.sourceHeight,
                                s = this._ctx._targets.getData(0, 0, r, a);
                            return n.conchToBase64FlipY ? n.conchToBase64FlipY(e, t, s.buffer, r, a) : n.conchToBase64(e, t, s.buffer, r, a)
                        }
                        return this._source.toDataURL(e, t)
                    }
                    return null
                }
            }, {
                key: "toBase64Async",
                value: function(e, t, i) {
                    var n = this._ctx._targets.sourceWidth,
                        r = this._ctx._targets.sourceHeight;
                    this._ctx._targets.getDataAsync(0, 0, n, r, (function(a) {
                        var s = window,
                            o = s.conchToBase64FlipY ? s.conchToBase64FlipY(e, t, a.buffer, n, r) : s.conchToBase64(e, t, a.buffer, n, r);
                        i(o)
                    }))
                }
            }, {
                key: "context",
                get: function() {
                    return this._ctx ? this._ctx : (this._source == this ? this._ctx = new i.Context : this._ctx = this._source.getContext(i.Render.isConchApp ? "layagl" : "2d"), this._ctx._canvas = this, this._ctx)
                }
            }]), HTMLCanvas
        }(E),
        gt = function() {
            function HitArea() {
                _classCallCheck(this, HitArea)
            }
            return _createClass(HitArea, [{
                key: "contains",
                value: function(e, t) {
                    return !!HitArea._isHitGraphic(e, t, this.hit) && !HitArea._isHitGraphic(e, t, this.unHit)
                }
            }, {
                key: "hit",
                get: function() {
                    return this._hit || (this._hit = new i.Graphics), this._hit
                },
                set: function(e) {
                    this._hit = e
                }
            }, {
                key: "unHit",
                get: function() {
                    return this._unHit || (this._unHit = new i.Graphics), this._unHit
                },
                set: function(e) {
                    this._unHit = e
                }
            }], [{
                key: "_isHitGraphic",
                value: function(e, t, i) {
                    if (!i)
                        return !1;
                    var n, r, a, s = i.cmds;
                    if (!s && i._one && ((s = HitArea._cmds).length = 1, s[0] = i._one), !s)
                        return !1;
                    for (r = s.length, n = 0; n < r; n++)
                        if (a = s[n]) {
                            switch (a.cmdID) {
                                case "Translate":
                                    e -= a.tx, t -= a.ty
                            }
                            if (HitArea._isHitCmd(e, t, a))
                                return !0
                        }
                    return !1
                }
            }, {
                key: "_isHitCmd",
                value: function(e, t, i) {
                    if (!i)
                        return !1;
                    var n = !1;
                    switch (i.cmdID) {
                        case "DrawRect":
                            HitArea._rect.setTo(i.x, i.y, i.width, i.height), n = HitArea._rect.contains(e, t);
                            break;
                        case "DrawCircle":
                            n = (e -= i.x) * e + (t -= i.y) * t < i.radius * i.radius;
                            break;
                        case "DrawPoly":
                            e -= i.x, t -= i.y, n = HitArea._ptInPolygon(e, t, i.points)
                    }
                    return n
                }
            }, {
                key: "_ptInPolygon",
                value: function(e, t, i) {
                    var n = HitArea._ptPoint;
                    n.setTo(e, t);
                    var r, a, s, o, l, h = 0;
                    l = i.length;
                    for (var u = 0; u < l; u += 2) {
                        if (r = i[u], a = i[u + 1], s = i[(u + 2) % l], a != (o = i[(u + 3) % l]))
                            if (!(n.y < Math.min(a, o)))
                                if (!(n.y >= Math.max(a, o)))
                                    (n.y - a) * (s - r) / (o - a) + r > n.x && h++
                    }
                    return h % 2 == 1
                }
            }]), HitArea
        }();
    gt._cmds = [], gt._rect = new p, gt._ptPoint = new v;
    var yt = function() {
        function ClassUtils() {
            _classCallCheck(this, ClassUtils)
        }
        return _createClass(ClassUtils, null, [{
            key: "regClass",
            value: function(e, t) {
                ClassUtils._classMap[e] = t
            }
        }, {
            key: "regShortClassName",
            value: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t],
                        n = i.name;
                    ClassUtils._classMap[n] = i
                }
            }
        }, {
            key: "getRegClass",
            value: function(e) {
                return ClassUtils._classMap[e]
            }
        }, {
            key: "getClass",
            value: function(e) {
                var t = ClassUtils._classMap[e] || ClassUtils._classMap["Laya." + e] || e,
                    n = i.Laya;
                return "string" == typeof t ? i.__classMap[t] || n[e] : t
            }
        }, {
            key: "getInstance",
            value: function(e) {
                var t = ClassUtils.getClass(e);
                return t ? new t : (console.warn("[error] Undefined class:", e), null)
            }
        }, {
            key: "createByJson",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                "string" == typeof e && (e = JSON.parse(e));
                var a = e.props;
                if (!t && !(t = r ? r.runWith(e) : ClassUtils.getInstance(a.runtime || e.type)))
                    return null;
                var s = e.child;
                if (s)
                    for (var o = 0, l = s.length; o < l; o++) {
                        var h = s[o];
                        if ("render" !== h.props.name && "render" !== h.props.renderType || !t._$set_itemRender)
                            if ("Graphic" == h.type)
                                ClassUtils._addGraphicsToSprite(h, t);
                            else if (ClassUtils._isDrawType(h.type))
                            ClassUtils._addGraphicToSprite(h, t, !0);
                        else {
                            var u = ClassUtils.createByJson(h, null, i, n, r);
                            "Script" === h.type ? "owner" in u ? u.owner = t : "target" in u && (u.target = t) : "mask" == h.props.renderType ? t.mask = u : t.addChild(u)
                        } else
                            t.itemRender = h
                    }
                if (a)
                    for (var c in a) {
                        var _ = a[c];
                        "var" === c && i ? i[_] = t : _ instanceof Array && t[c] instanceof Function ? t[c].apply(t, _) : t[c] = _
                    }
                return n && e.customProps && n.runWith([t, e]), t.created && t.created(), t
            }
        }, {
            key: "_addGraphicsToSprite",
            value: function(e, t) {
                var i = e.child;
                if (i && !(i.length < 1)) {
                    var n, r, a = ClassUtils._getGraphicsFromSprite(e, t),
                        s = 0,
                        o = 0;
                    for (e.props && (s = ClassUtils._getObjVar(e.props, "x", 0), o = ClassUtils._getObjVar(e.props, "y", 0)), 0 != s && 0 != o && a.translate(s, o), r = i.length, n = 0; n < r; n++)
                        ClassUtils._addGraphicToGraphics(i[n], a);
                    0 != s && 0 != o && a.translate(-s, -o)
                }
            }
        }, {
            key: "_addGraphicToSprite",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = i ? ClassUtils._getGraphicsFromSprite(e, t) : t.graphics;
                ClassUtils._addGraphicToGraphics(e, n)
            }
        }, {
            key: "_getGraphicsFromSprite",
            value: function(e, t) {
                if (!e || !e.props)
                    return t.graphics;
                var i = e.props.renderType;
                if ("hit" === i || "unHit" === i) {
                    var n = t._style.hitArea || (t.hitArea = new gt);
                    n[i] || (n[i] = new _t);
                    var r = n[i]
                }
                return r || (r = t.graphics), r
            }
        }, {
            key: "_getTransformData",
            value: function(e) {
                var t;
                ("pivotX" in e || "pivotY" in e) && (t = t || new f).translate(-ClassUtils._getObjVar(e, "pivotX", 0), -ClassUtils._getObjVar(e, "pivotY", 0));
                var i = ClassUtils._getObjVar(e, "scaleX", 1),
                    n = ClassUtils._getObjVar(e, "scaleY", 1),
                    r = ClassUtils._getObjVar(e, "rotation", 0);
                ClassUtils._getObjVar(e, "skewX", 0), ClassUtils._getObjVar(e, "skewY", 0);
                return 1 == i && 1 == n && 0 == r || ((t = t || new f).scale(i, n), t.rotate(.0174532922222222 * r)), t
            }
        }, {
            key: "_addGraphicToGraphics",
            value: function(e, t) {
                var i, n;
                if ((i = e.props) && (n = ClassUtils.DrawTypeDic[e.type])) {
                    var r = t,
                        a = ClassUtils._getParams(i, n[1], n[2], n[3]),
                        s = ClassUtils._tM;
                    (s || 1 != ClassUtils._alpha) && (r.save(), s && r.transform(s), 1 != ClassUtils._alpha && r.alpha(ClassUtils._alpha)), r[n[0]].apply(r, a), (s || 1 != ClassUtils._alpha) && r.restore()
                }
            }
        }, {
            key: "_adptLineData",
            value: function(e) {
                return e[2] = parseFloat(e[0]) + parseFloat(e[2]), e[3] = parseFloat(e[1]) + parseFloat(e[3]), e
            }
        }, {
            key: "_adptTextureData",
            value: function(e) {
                return e[0] = i.Loader.getRes(e[0]), e
            }
        }, {
            key: "_adptLinesData",
            value: function(e) {
                return e[2] = ClassUtils._getPointListByStr(e[2]), e
            }
        }, {
            key: "_isDrawType",
            value: function(e) {
                return "Image" !== e && e in ClassUtils.DrawTypeDic
            }
        }, {
            key: "_getParams",
            value: function(e, t) {
                var i, n, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = ClassUtils._temParam;
                for (o.length = t.length, n = t.length, i = 0; i < n; i++)
                    o[i] = ClassUtils._getObjVar(e, t[i][0], t[i][1]);
                return ClassUtils._alpha = ClassUtils._getObjVar(e, "alpha", 1), (r = ClassUtils._getTransformData(e)) ? (a || (a = 0), r.translate(o[a], o[a + 1]), o[a] = o[a + 1] = 0, ClassUtils._tM = r) : ClassUtils._tM = null, s && ClassUtils[s] && (o = ClassUtils[s](o)), o
            }
        }, {
            key: "_getPointListByStr",
            value: function(e) {
                var t, i, n = e.split(",");
                for (i = n.length, t = 0; t < i; t++)
                    n[t] = parseFloat(n[t]);
                return n
            }
        }, {
            key: "_getObjVar",
            value: function(e, t, i) {
                return t in e ? e[t] : i
            }
        }]), ClassUtils
    }();
    yt.DrawTypeDic = {
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
    }, yt._temParam = [], yt._classMap = {};
    var mt = function() {
            function BoundsStyle() {
                _classCallCheck(this, BoundsStyle)
            }
            return _createClass(BoundsStyle, [{
                key: "reset",
                value: function() {
                    return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), this.bounds = null, this.userBounds = null, this.temBM = null, this
                }
            }, {
                key: "recover",
                value: function() {
                    n.recover("BoundsStyle", this.reset())
                }
            }], [{
                key: "create",
                value: function() {
                    return n.getItemByClass("BoundsStyle", BoundsStyle)
                }
            }]), BoundsStyle
        }(),
        Tt = function() {
            function CacheStyle() {
                _classCallCheck(this, CacheStyle), this.reset()
            }
            return _createClass(CacheStyle, [{
                key: "needBitmapCache",
                value: function() {
                    return this.cacheForFilters || !!this.mask
                }
            }, {
                key: "needEnableCanvasRender",
                value: function() {
                    return "none" != this.userSetCache || this.cacheForFilters || !!this.mask
                }
            }, {
                key: "releaseContext",
                value: function() {
                    if (this.canvas && this.canvas.size) {
                        n.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0);
                        try {
                            this.canvas.width = 0, this.canvas.height = 0
                        } catch (e) {}
                    }
                    this.canvas = null
                }
            }, {
                key: "createContext",
                value: function() {
                    if (!this.canvas) {
                        this.canvas = n.getItem("CacheCanvas") || new pt(!1);
                        var e = this.canvas.context;
                        e || (e = this.canvas.getContext("2d"))
                    }
                }
            }, {
                key: "releaseFilterCache",
                value: function() {
                    var e = this.filterCache;
                    e && (e.destroy(), e.recycle(), this.filterCache = null)
                }
            }, {
                key: "recover",
                value: function() {
                    this !== CacheStyle.EMPTY && n.recover("SpriteCache", this.reset())
                }
            }, {
                key: "reset",
                value: function() {
                    return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), this.cacheRect = null, this
                }
            }, {
                key: "_calculateCacheRect",
                value: function(e, t, i, n) {
                    var r, a = e._cacheStyle;
                    if (a.cacheRect || (a.cacheRect = p.create()), "bitmap" === t ? ((r = e.getSelfBounds()).width = r.width + 2 * CacheStyle.CANVAS_EXTEND_EDGE, r.height = r.height + 2 * CacheStyle.CANVAS_EXTEND_EDGE, r.x = r.x - e.pivotX, r.y = r.y - e.pivotY, r.x = r.x - CacheStyle.CANVAS_EXTEND_EDGE, r.y = r.y - CacheStyle.CANVAS_EXTEND_EDGE, r.x = Math.floor(r.x + i) - i, r.y = Math.floor(r.y + n) - n, r.width = Math.floor(r.width), r.height = Math.floor(r.height), a.cacheRect.copyFrom(r)) : a.cacheRect.setTo(-e._style.pivotX, -e._style.pivotY, 1, 1), r = a.cacheRect, e._style.scrollRect) {
                        var s = e._style.scrollRect;
                        r.x -= s.x, r.y -= s.y
                    }
                    return CacheStyle._scaleInfo.setTo(1, 1), CacheStyle._scaleInfo
                }
            }], [{
                key: "create",
                value: function() {
                    return n.getItemByClass("SpriteCache", CacheStyle)
                }
            }]), CacheStyle
        }();
    Tt.EMPTY = new Tt, Tt._scaleInfo = new v, Tt.CANVAS_EXTEND_EDGE = 16;
    var Ct = function() {
        function SpriteStyle() {
            _classCallCheck(this, SpriteStyle), this.reset()
        }
        return _createClass(SpriteStyle, [{
            key: "reset",
            value: function() {
                return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, this.dragging = null, this.blendMode = null, this
            }
        }, {
            key: "recover",
            value: function() {
                this !== SpriteStyle.EMPTY && n.recover("SpriteStyle", this.reset())
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("SpriteStyle", SpriteStyle)
            }
        }]), SpriteStyle
    }();
    Ct.EMPTY = new Ct;
    var xt = function(e) {
        function Node() {
            var e;
            return _classCallCheck(this, Node), (e = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this)))._bits = 0, e._children = Node.ARRAY_EMPTY, e._extUIChild = Node.ARRAY_EMPTY, e._parent = null, e.name = "", e.destroyed = !1, e.createGLBuffer(), e
        }
        return _inherits(Node, e), _createClass(Node, [{
            key: "createGLBuffer",
            value: function() {}
        }, {
            key: "_setBit",
            value: function(e, t) {
                e === dt.DISPLAY && (this._getBit(e) != t && this._updateDisplayedInstage());
                t ? this._bits |= e : this._bits &= ~e
            }
        }, {
            key: "_getBit",
            value: function(e) {
                return 0 != (this._bits & e)
            }
        }, {
            key: "_setUpNoticeChain",
            value: function() {
                this._getBit(dt.DISPLAY) && this._setBitUp(dt.DISPLAY)
            }
        }, {
            key: "_setBitUp",
            value: function(e) {
                var t = this;
                for (t._setBit(e, !0), t = t._parent; t;) {
                    if (t._getBit(e))
                        return;
                    t._setBit(e, !0), t = t._parent
                }
            }
        }, {
            key: "on",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return e !== Ue.DISPLAY && e !== Ue.UNDISPLAY || this._getBit(dt.DISPLAY) || this._setBitUp(dt.DISPLAY), this._createListener(e, t, i, n, !1)
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return e !== Ue.DISPLAY && e !== Ue.UNDISPLAY || this._getBit(dt.DISPLAY) || this._setBitUp(dt.DISPLAY), this._createListener(e, t, i, n, !0)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), this._children && (e ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), this._children = null, this.offAll()
            }
        }, {
            key: "onDestroy",
            value: function() {}
        }, {
            key: "destroyChildren",
            value: function() {
                if (this._children)
                    for (var e = 0, t = this._children.length; e < t; e++)
                        this._children[0].destroy(!0)
            }
        }, {
            key: "addChild",
            value: function(e) {
                if (!e || this.destroyed || e === this)
                    return e;
                if (e._zOrder && this._setBit(dt.HAS_ZORDER, !0), e._parent === this) {
                    var t = this.getChildIndex(e);
                    t !== this._children.length - 1 && (this._children.splice(t, 1), this._children.push(e), this._childChanged())
                } else
                    e._parent && e._parent.removeChild(e), this._children === Node.ARRAY_EMPTY && (this._children = []), this._children.push(e), e._setParent(this), this._childChanged();
                return e
            }
        }, {
            key: "addInputChild",
            value: function(e) {
                if (this._extUIChild == Node.ARRAY_EMPTY)
                    this._extUIChild = [e];
                else {
                    if (this._extUIChild.indexOf(e) >= 0)
                        return null;
                    this._extUIChild.push(e)
                }
                return null
            }
        }, {
            key: "removeInputChild",
            value: function(e) {
                var t = this._extUIChild.indexOf(e);
                t >= 0 && this._extUIChild.splice(t, 1)
            }
        }, {
            key: "addChildren",
            value: function() {
                for (var e = 0, t = arguments.length; e < t;) {
                    var i;
                    this.addChild((i = e++) < 0 || arguments.length <= i ? void 0 : arguments[i])
                }
            }
        }, {
            key: "addChildAt",
            value: function(e, t) {
                if (!e || this.destroyed || e === this)
                    return e;
                if (e._zOrder && this._setBit(dt.HAS_ZORDER, !0), t >= 0 && t <= this._children.length) {
                    if (e._parent === this) {
                        var i = this.getChildIndex(e);
                        this._children.splice(i, 1), this._children.splice(t, 0, e), this._childChanged()
                    } else
                        e._parent && e._parent.removeChild(e), this._children === Node.ARRAY_EMPTY && (this._children = []), this._children.splice(t, 0, e), e._setParent(this);
                    return e
                }
                throw new Error("appendChildAt:The index is out of bounds")
            }
        }, {
            key: "getChildIndex",
            value: function(e) {
                return this._children.indexOf(e)
            }
        }, {
            key: "getChildByName",
            value: function(e) {
                var t = this._children;
                if (t)
                    for (var i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        if (r.name === e)
                            return r
                    }
                return null
            }
        }, {
            key: "getChildAt",
            value: function(e) {
                return this._children[e] || null
            }
        }, {
            key: "setChildIndex",
            value: function(e, t) {
                var i = this._children;
                if (t < 0 || t >= i.length)
                    throw new Error("setChildIndex:The index is out of bounds.");
                var n = this.getChildIndex(e);
                if (n < 0)
                    throw new Error("setChildIndex:node is must child of this object.");
                return i.splice(n, 1), i.splice(t, 0, e), this._childChanged(), e
            }
        }, {
            key: "_childChanged",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            }
        }, {
            key: "removeChild",
            value: function(e) {
                if (!this._children)
                    return e;
                var t = this._children.indexOf(e);
                return this.removeChildAt(t)
            }
        }, {
            key: "removeSelf",
            value: function() {
                return this._parent && this._parent.removeChild(this), this
            }
        }, {
            key: "removeChildByName",
            value: function(e) {
                var t = this.getChildByName(e);
                return t && this.removeChild(t), t
            }
        }, {
            key: "removeChildAt",
            value: function(e) {
                var t = this.getChildAt(e);
                return t && (this._children.splice(e, 1), t._setParent(null)), t
            }
        }, {
            key: "removeChildren",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2147483647;
                if (this._children && this._children.length > 0) {
                    var i = this._children;
                    if (0 === e && t >= i.length - 1) {
                        var n = i;
                        this._children = Node.ARRAY_EMPTY
                    } else
                        n = i.splice(e, t - e);
                    for (var r = 0, a = n.length; r < a; r++)
                        n[r]._setParent(null)
                }
                return this
            }
        }, {
            key: "replaceChild",
            value: function(e, t) {
                var i = this._children.indexOf(t);
                return i > -1 ? (this._children.splice(i, 1, e), t._setParent(null), e._setParent(this), e) : null
            }
        }, {
            key: "_setParent",
            value: function(e) {
                this._parent !== e && (e ? (this._parent = e, this._onAdded(), this.event(Ue.ADDED), this._getBit(dt.DISPLAY) && (this._setUpNoticeChain(), e.displayedInStage && this._displayChild(this, !0)), e._childChanged(this)) : (this._onRemoved(), this.event(Ue.REMOVED), this._parent._childChanged(), this._getBit(dt.DISPLAY) && this._displayChild(this, !1), this._parent = e))
            }
        }, {
            key: "_updateDisplayedInstage",
            value: function() {
                var e;
                e = this;
                for (var t = i.stage, n = !1; e;) {
                    if (e._getBit(dt.DISPLAY)) {
                        n = e._getBit(dt.DISPLAYED_INSTAGE);
                        break
                    }
                    if (e === t || e._getBit(dt.DISPLAYED_INSTAGE)) {
                        n = !0;
                        break
                    }
                    e = e._parent
                }
                this._setBit(dt.DISPLAYED_INSTAGE, n)
            }
        }, {
            key: "_setDisplay",
            value: function(e) {
                this._getBit(dt.DISPLAYED_INSTAGE) !== e && (this._setBit(dt.DISPLAYED_INSTAGE, e), e ? this.event(Ue.DISPLAY) : this.event(Ue.UNDISPLAY))
            }
        }, {
            key: "_displayChild",
            value: function(e, t) {
                var i = e._children;
                if (i)
                    for (var n = 0, r = i.length; n < r; n++) {
                        var a = i[n];
                        a._getBit(dt.DISPLAY) && (a._children.length > 0 ? this._displayChild(a, t) : a._setDisplay(t))
                    }
                e._setDisplay(t)
            }
        }, {
            key: "contains",
            value: function(e) {
                if (e === this)
                    return !0;
                for (; e;) {
                    if (e._parent === this)
                        return !0;
                    e = e._parent
                }
                return !1
            }
        }, {
            key: "timerLoop",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    o = this.scene ? this.scene.timer : i.timer;
                o.loop(e, t, n, r, a, s)
            }
        }, {
            key: "timerOnce",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = this.scene ? this.scene.timer : i.timer;
                s._create(!1, !1, e, t, n, r, a)
            }
        }, {
            key: "frameLoop",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = this.scene ? this.scene.timer : i.timer;
                s._create(!0, !0, e, t, n, r, a)
            }
        }, {
            key: "frameOnce",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = this.scene ? this.scene.timer : i.timer;
                s._create(!0, !1, e, t, n, r, a)
            }
        }, {
            key: "clearTimer",
            value: function(e, t) {
                (this.scene ? this.scene.timer : i.timer).clear(e, t)
            }
        }, {
            key: "callLater",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this.scene ? this.scene.timer : i.timer;
                n.callLater(this, e, t)
            }
        }, {
            key: "runCallLater",
            value: function(e) {
                (this.scene ? this.scene.timer : i.timer).runCallLater(this, e)
            }
        }, {
            key: "_onActive",
            value: function() {
                G.spriteCount++
            }
        }, {
            key: "_onInActive",
            value: function() {
                G.spriteCount--
            }
        }, {
            key: "_onActiveInScene",
            value: function() {}
        }, {
            key: "_onInActiveInScene",
            value: function() {}
        }, {
            key: "_parse",
            value: function(e, t) {}
        }, {
            key: "_setBelongScene",
            value: function(e) {
                if (!this._scene) {
                    this._scene = e, this._onActiveInScene();
                    for (var t = 0, i = this._children.length; t < i; t++)
                        this._children[t]._setBelongScene(e)
                }
            }
        }, {
            key: "_setUnBelongScene",
            value: function() {
                if (this._scene !== this) {
                    this._onInActiveInScene(), this._scene = null;
                    for (var e = 0, t = this._children.length; e < t; e++)
                        this._children[e]._setUnBelongScene()
                }
            }
        }, {
            key: "onAwake",
            value: function() {}
        }, {
            key: "onEnable",
            value: function() {}
        }, {
            key: "_processActive",
            value: function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), this._activeScripts()
            }
        }, {
            key: "_activeHierarchy",
            value: function(e) {
                if (this._setBit(dt.ACTIVE_INHIERARCHY, !0), this._components)
                    for (var t = 0, i = this._components.length; t < i; t++) {
                        var n = this._components[t];
                        n._isScript() ? n._enabled && e.push(n) : n._setActive(!0)
                    }
                for (this._onActive(), t = 0, i = this._children.length; t < i; t++) {
                    var r = this._children[t];
                    !r._getBit(dt.NOT_ACTIVE) && r._activeHierarchy(e)
                }
                this._getBit(dt.AWAKED) || (this._setBit(dt.AWAKED, !0), this.onAwake()), this.onEnable()
            }
        }, {
            key: "_activeScripts",
            value: function() {
                for (var e = 0, t = this._activeChangeScripts.length; e < t; e++) {
                    var i = this._activeChangeScripts[e];
                    i._awaked || (i._awaked = !0, i._onAwake()), i._onEnable()
                }
                this._activeChangeScripts.length = 0
            }
        }, {
            key: "_processInActive",
            value: function() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), this._inActiveScripts()
            }
        }, {
            key: "_inActiveHierarchy",
            value: function(e) {
                if (this._onInActive(), this._components)
                    for (var t = 0, i = this._components.length; t < i; t++) {
                        var n = this._components[t];
                        n._setActive(!1), n._isScript() && n._enabled && e.push(n)
                    }
                for (this._setBit(dt.ACTIVE_INHIERARCHY, !1), t = 0, i = this._children.length; t < i; t++) {
                    var r = this._children[t];
                    r && !r._getBit(dt.NOT_ACTIVE) && r._inActiveHierarchy(e)
                }
                this.onDisable()
            }
        }, {
            key: "_inActiveScripts",
            value: function() {
                for (var e = 0, t = this._activeChangeScripts.length; e < t; e++)
                    this._activeChangeScripts[e].onDisable();
                this._activeChangeScripts.length = 0
            }
        }, {
            key: "onDisable",
            value: function() {}
        }, {
            key: "_onAdded",
            value: function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                    throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
                var e = this._parent.scene;
                e && this._setBelongScene(e), this._parent.activeInHierarchy && this.active && this._processActive()
            }
        }, {
            key: "_onRemoved",
            value: function() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                    throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene()
            }
        }, {
            key: "_addComponentInstance",
            value: function(e) {
                this._components = this._components || [], this._components.push(e), e.owner = this, e._onAdded(), this.activeInHierarchy && e._setActive(!0)
            }
        }, {
            key: "_destroyComponent",
            value: function(e) {
                if (this._components)
                    for (var t = 0, i = this._components.length; t < i; t++) {
                        var n = this._components[t];
                        if (n === e) {
                            n._destroy(), this._components.splice(t, 1);
                            break
                        }
                    }
            }
        }, {
            key: "_destroyAllComponent",
            value: function() {
                if (this._components) {
                    for (var e = 0, t = this._components.length; e < t; e++) {
                        this._components[e]._destroy()
                    }
                    this._components.length = 0
                }
            }
        }, {
            key: "_cloneTo",
            value: function(e, t, i) {
                var n = e;
                if (this._components)
                    for (var r = 0, a = this._components.length; r < a; r++) {
                        var s = n.addComponent(this._components[r].constructor);
                        this._components[r]._cloneTo(s)
                    }
            }
        }, {
            key: "addComponentIntance",
            value: function(e) {
                if (e.owner)
                    throw "Node:the component has belong to other node.";
                if (e.isSingleton && this.getComponent(e.constructor))
                    throw "Node:the component is singleton,can't add the second one.";
                return this._addComponentInstance(e), e
            }
        }, {
            key: "addComponent",
            value: function(e) {
                var t = n.createByClass(e);
                if (t._destroyed = !1, t.isSingleton && this.getComponent(e))
                    throw "无法实例" + e + "组件，" + e + "组件已存在！";
                return this._addComponentInstance(t), t
            }
        }, {
            key: "getComponent",
            value: function(e) {
                if (this._components)
                    for (var t = 0, i = this._components.length; t < i; t++) {
                        var n = this._components[t];
                        if (n instanceof e)
                            return n
                    }
                return null
            }
        }, {
            key: "getComponents",
            value: function(e) {
                var t;
                if (this._components)
                    for (var i = 0, n = this._components.length; i < n; i++) {
                        var r = this._components[i];
                        r instanceof e && (t = t || []).push(r)
                    }
                return t
            }
        }, {
            key: "numChildren",
            get: function() {
                return this._children.length
            }
        }, {
            key: "parent",
            get: function() {
                return this._parent
            }
        }, {
            key: "displayedInStage",
            get: function() {
                return this._getBit(dt.DISPLAY) ? this._getBit(dt.DISPLAYED_INSTAGE) : (this._setBitUp(dt.DISPLAY), this._getBit(dt.DISPLAYED_INSTAGE))
            }
        }, {
            key: "scene",
            get: function() {
                return this._scene
            }
        }, {
            key: "active",
            get: function() {
                return !this._getBit(dt.NOT_READY) && !this._getBit(dt.NOT_ACTIVE)
            },
            set: function(e) {
                if (e = !!e, !this._getBit(dt.NOT_ACTIVE) !== e) {
                    if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length)
                        throw e ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                    this._setBit(dt.NOT_ACTIVE, !e), this._parent && this._parent.activeInHierarchy && (e ? this._processActive() : this._processInActive())
                }
            }
        }, {
            key: "activeInHierarchy",
            get: function() {
                return this._getBit(dt.ACTIVE_INHIERARCHY)
            }
        }, {
            key: "timer",
            get: function() {
                return this.scene ? this.scene.timer : i.timer
            }
        }]), Node
    }(T);
    xt.ARRAY_EMPTY = [], yt.regClass("laya.display.Node", xt), yt.regClass("Laya.Node", xt);
    var kt = function(e) {
        function Sprite() {
            var e;
            return _classCallCheck(this, Sprite), (e = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this)))._x = 0, e._y = 0, e._width = 0, e._height = 0, e._visible = !0, e._mouseState = 0, e._zOrder = 0, e._renderType = 0, e._transform = null, e._tfChanged = !1, e._repaint = at.REPAINT_NONE, e._texture = null, e._style = Ct.EMPTY, e._cacheStyle = Tt.EMPTY, e._boundStyle = null, e._graphics = null, e.mouseThrough = !1, e.autoSize = !1, e.hitTestPrior = !1, e
        }
        return _inherits(Sprite, e), _createClass(Sprite, [{
            key: "destroy",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                _get(_getPrototypeOf(Sprite.prototype), "destroy", this).call(this, e), this._style && this._style.recover(), this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, this.texture = null
            }
        }, {
            key: "updateZOrder",
            value: function() {
                K.updateOrder(this._children) && this.repaint()
            }
        }, {
            key: "_getBoundsStyle",
            value: function() {
                return this._boundStyle || (this._boundStyle = mt.create()), this._boundStyle
            }
        }, {
            key: "_setCustomRender",
            value: function() {}
        }, {
            key: "_setCacheAs",
            value: function(e) {}
        }, {
            key: "_checkCanvasEnable",
            value: function() {
                var e = this._cacheStyle.needEnableCanvasRender();
                this._getCacheStyle().enableCanvasRender = e, e ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, this._cacheStyle.reCache = !0, this._renderType |= at.CANVAS) : (this._cacheStyle.cacheAs = "none", this._cacheStyle.releaseContext(), this._renderType &= ~at.CANVAS), this._setCacheAs(this._cacheStyle.cacheAs), this._setRenderType(this._renderType)
            }
        }, {
            key: "reCache",
            value: function() {
                this._cacheStyle.reCache = !0, this._repaint |= at.REPAINT_CACHE
            }
        }, {
            key: "getRepaint",
            value: function() {
                return this._repaint
            }
        }, {
            key: "_setX",
            value: function(e) {
                this._x = e
            }
        }, {
            key: "_setY",
            value: function(e) {
                this._y = e
            }
        }, {
            key: "_setWidth",
            value: function(e, t) {}
        }, {
            key: "_setHeight",
            value: function(e, t) {}
        }, {
            key: "set_width",
            value: function(e) {
                this._width !== e && (this._width = e, this._setWidth(this.texture, e), this._setTranformChange())
            }
        }, {
            key: "get_width",
            value: function() {
                return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0)
            }
        }, {
            key: "set_height",
            value: function(e) {
                this._height !== e && (this._height = e, this._setHeight(this.texture, e), this._setTranformChange())
            }
        }, {
            key: "get_height",
            value: function() {
                return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0)
            }
        }, {
            key: "setSelfBounds",
            value: function(e) {
                this._getBoundsStyle().userBounds = e
            }
        }, {
            key: "getBounds",
            value: function() {
                return this._getBoundsStyle().bounds = p._getWrapRec(this._boundPointsToParent())
            }
        }, {
            key: "getSelfBounds",
            value: function() {
                return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = p._getWrapRec(this._getBoundPointsM(!1)) : p.TEMP.setTo(0, 0, this.width, this.height)
            }
        }, {
            key: "_boundPointsToParent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = 0,
                    i = 0;
                this._style && (t = this.pivotX, i = this.pivotY, e = e || 0 !== this._style.rotation, this._style.scrollRect && (t += this._style.scrollRect.x, i += this._style.scrollRect.y));
                var n = this._getBoundPointsM(e);
                if (!n || n.length < 1)
                    return n;
                if (8 != n.length && (n = e ? re.scanPList(n) : p._getWrapRec(n, p.TEMP)._getBoundPoints()), !this.transform)
                    return K.transPointList(n, this._x - t, this._y - i), n;
                var r, a = v.TEMP,
                    s = n.length;
                for (r = 0; r < s; r += 2)
                    a.x = n[r], a.y = n[r + 1], this.toParentPoint(a), n[r] = a.x, n[r + 1] = a.y;
                return n
            }
        }, {
            key: "getGraphicBounds",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this._graphics ? this._graphics.getBounds(e) : p.TEMP.setTo(0, 0, 0, 0)
            }
        }, {
            key: "_getBoundPointsM",
            value: function() {
                var e, t, i, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._boundStyle && this._boundStyle.userBounds)
                    return this._boundStyle.userBounds._getBoundPoints();
                if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), this._style.scrollRect) {
                    var a = K.clearArray(this._boundStyle.temBM),
                        s = p.TEMP;
                    return s.copyFrom(this._style.scrollRect), K.concatArray(a, s._getBoundPoints()), a
                }
                this._graphics ? e = this._graphics.getBoundPoints() : (e = K.clearArray(this._boundStyle.temBM), this._texture && ((s = p.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), K.concatArray(e, s._getBoundPoints())));
                for (var o = 0, l = (n = this._children).length; o < l; o++)
                    (t = n[o]) instanceof Sprite && !0 === t._visible && (i = t._boundPointsToParent(r)) && (e = e ? K.concatArray(e, i) : i);
                return e
            }
        }, {
            key: "_getCacheStyle",
            value: function() {
                return this._cacheStyle === Tt.EMPTY && (this._cacheStyle = Tt.create()), this._cacheStyle
            }
        }, {
            key: "getStyle",
            value: function() {
                return this._style === Ct.EMPTY && (this._style = Ct.create()), this._style
            }
        }, {
            key: "setStyle",
            value: function(e) {
                this._style = e
            }
        }, {
            key: "_setScaleX",
            value: function(e) {
                this._style.scaleX = e
            }
        }, {
            key: "_setScaleY",
            value: function(e) {
                this._style.scaleY = e
            }
        }, {
            key: "set_scaleX",
            value: function(e) {
                this.getStyle().scaleX !== e && (this._setScaleX(e), this._setTranformChange())
            }
        }, {
            key: "get_scaleX",
            value: function() {
                return this._style.scaleX
            }
        }, {
            key: "set_scaleY",
            value: function(e) {
                this.getStyle().scaleY !== e && (this._setScaleY(e), this._setTranformChange())
            }
        }, {
            key: "get_scaleY",
            value: function() {
                return this._style.scaleY
            }
        }, {
            key: "_setRotation",
            value: function(e) {
                this._style.rotation = e
            }
        }, {
            key: "_setSkewX",
            value: function(e) {
                this._style.skewX = e
            }
        }, {
            key: "_setSkewY",
            value: function(e) {
                this._style.skewY = e
            }
        }, {
            key: "_createTransform",
            value: function() {
                return f.create()
            }
        }, {
            key: "_adjustTransform",
            value: function() {
                this._tfChanged = !1;
                var e = this._style,
                    t = e.scaleX,
                    i = e.scaleY,
                    n = e.skewX,
                    r = e.skewY,
                    a = e.rotation,
                    s = this._transform || (this._transform = this._createTransform());
                if (a || 1 !== t || 1 !== i || 0 !== n || 0 !== r) {
                    s._bTransform = !0;
                    var o = .0174532922222222 * (a - n),
                        l = .0174532922222222 * (a + r),
                        h = Math.cos(l),
                        u = Math.sin(l),
                        c = Math.sin(o),
                        _ = Math.cos(o);
                    s.a = t * h, s.b = t * u, s.c = -i * c, s.d = i * _, s.tx = s.ty = 0
                } else
                    s.identity(), this._renderType &= ~at.TRANSFORM, this._setRenderType(this._renderType);
                return s
            }
        }, {
            key: "_setTransform",
            value: function(e) {}
        }, {
            key: "get_transform",
            value: function() {
                return this._tfChanged ? this._adjustTransform() : this._transform
            }
        }, {
            key: "set_transform",
            value: function(e) {
                this._tfChanged = !1;
                var t = this._transform || (this._transform = this._createTransform());
                e.copyTo(t), this._setTransform(t), e && (this._x = t.tx, this._y = t.ty, t.tx = t.ty = 0), e ? this._renderType |= at.TRANSFORM : this._renderType &= ~at.TRANSFORM, this._setRenderType(this._renderType), this.parentRepaint()
            }
        }, {
            key: "_setPivotX",
            value: function(e) {
                this.getStyle().pivotX = e
            }
        }, {
            key: "_getPivotX",
            value: function() {
                return this._style.pivotX
            }
        }, {
            key: "_setPivotY",
            value: function(e) {
                this.getStyle().pivotY = e
            }
        }, {
            key: "_getPivotY",
            value: function() {
                return this._style.pivotY
            }
        }, {
            key: "_setAlpha",
            value: function(e) {
                this._style.alpha !== e && (this.getStyle().alpha = e, 1 !== e ? this._renderType |= at.ALPHA : this._renderType &= ~at.ALPHA, this._setRenderType(this._renderType), this.parentRepaint())
            }
        }, {
            key: "_getAlpha",
            value: function() {
                return this._style.alpha
            }
        }, {
            key: "get_visible",
            value: function() {
                return this._visible
            }
        }, {
            key: "set_visible",
            value: function(e) {
                this._visible !== e && (this._visible = e, this.parentRepaint(at.REPAINT_ALL))
            }
        }, {
            key: "_setBlendMode",
            value: function(e) {}
        }, {
            key: "_setGraphics",
            value: function(e) {}
        }, {
            key: "_setGraphicsCallBack",
            value: function() {}
        }, {
            key: "_setScrollRect",
            value: function(e) {}
        }, {
            key: "pos",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this._x !== e || this._y !== t) {
                    if (this.destroyed)
                        return this;
                    if (i) {
                        this._setX(e), this._setY(t), this.parentRepaint(at.REPAINT_CACHE);
                        var n = this._cacheStyle.maskParent;
                        n && n.repaint(at.REPAINT_CACHE)
                    } else
                        this.x = e, this.y = t
                }
                return this
            }
        }, {
            key: "pivot",
            value: function(e, t) {
                return this.pivotX = e, this.pivotY = t, this
            }
        }, {
            key: "size",
            value: function(e, t) {
                return this.width = e, this.height = t, this
            }
        }, {
            key: "scale",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = this.getStyle();
                if (n.scaleX != e || n.scaleY != t) {
                    if (this.destroyed)
                        return this;
                    i ? (this._setScaleX(e), this._setScaleY(t), this._setTranformChange()) : (this.scaleX = e, this.scaleY = t)
                }
                return this
            }
        }, {
            key: "skew",
            value: function(e, t) {
                return this.skewX = e, this.skewY = t, this
            }
        }, {
            key: "render",
            value: function(e, t, i) {
                vt.renders[this._renderType]._fun(this, e, t + this._x, i + this._y), this._repaint = 0
            }
        }, {
            key: "drawToCanvas",
            value: function(e, t, i, n) {
                return Sprite.drawToCanvas(this, this._renderType, e, t, i, n)
            }
        }, {
            key: "drawToTexture",
            value: function(e, t, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return Sprite.drawToTexture(this, this._renderType, e, t, i, n, r)
            }
        }, {
            key: "drawToTexture3D",
            value: function(e, t, i) {
                throw "not implement"
            }
        }, {
            key: "customRender",
            value: function(e, t, i) {
                this._repaint = at.REPAINT_ALL
            }
        }, {
            key: "_applyFilters",
            value: function() {}
        }, {
            key: "_setColorFilter",
            value: function(e) {}
        }, {
            key: "_isHaveGlowFilter",
            value: function() {
                var e, t;
                if (this.filters)
                    for (e = 0; e < this.filters.length; e++)
                        if (this.filters[e].type == z.GLOW)
                            return !0;
                for (e = 0, t = this._children.length; e < t; e++)
                    if (this._children[e]._isHaveGlowFilter())
                        return !0;
                return !1
            }
        }, {
            key: "localToGlobal",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                !0 === t && (e = new v(e.x, e.y));
                var r = this;
                for (n = n || i.stage; r && !r.destroyed && r != n;)
                    e = r.toParentPoint(e), r = r.parent;
                return e
            }
        }, {
            key: "globalToLocal",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                t && (e = new v(e.x, e.y));
                var r = this,
                    a = [];
                for (n = n || i.stage; r && !r.destroyed && r != n;)
                    a.push(r), r = r.parent;
                for (var s = a.length - 1; s >= 0;)
                    e = (r = a[s]).fromParentPoint(e), s--;
                return e
            }
        }, {
            key: "toParentPoint",
            value: function(e) {
                if (!e)
                    return e;
                e.x -= this.pivotX, e.y -= this.pivotY, this.transform && this._transform.transformPoint(e), e.x += this._x, e.y += this._y;
                var t = this._style.scrollRect;
                return t && (e.x -= t.x, e.y -= t.y), e
            }
        }, {
            key: "fromParentPoint",
            value: function(e) {
                if (!e)
                    return e;
                e.x -= this._x, e.y -= this._y;
                var t = this._style.scrollRect;
                return t && (e.x += t.x, e.y += t.y), this.transform && this._transform.invertTransformPoint(e), e.x += this.pivotX, e.y += this.pivotY, e
            }
        }, {
            key: "fromStagePoint",
            value: function(e) {
                return e
            }
        }, {
            key: "on",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, this._setBit(dt.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(e, t, i, n, !1)) : _get(_getPrototypeOf(Sprite.prototype), "on", this).call(this, e, t, i, n)
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, this._setBit(dt.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(e, t, i, n, !0)) : _get(_getPrototypeOf(Sprite.prototype), "once", this).call(this, e, t, i, n)
            }
        }, {
            key: "_onDisplay",
            value: function(e) {
                if (1 !== this._mouseState) {
                    var t = this;
                    for (t = t.parent; t && 1 !== t._mouseState && !t._getBit(dt.HAS_MOUSE);)
                        t.mouseEnabled = !0, t._setBit(dt.HAS_MOUSE, !0), t = t.parent
                }
            }
        }, {
            key: "_setParent",
            value: function(e) {
                _get(_getPrototypeOf(Sprite.prototype), "_setParent", this).call(this, e), e && this._getBit(dt.HAS_MOUSE) && this._onDisplay()
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (e) {
                    var n = i.Loader.textureMap[x.formatURL(e)];
                    n || ((n = new We).load(e), i.Loader.cacheTexture(e, n)), this.texture = n, n.getIsReady() ? loaded.call(this) : n.once(Ue.READY, this, loaded)
                } else
                    this.texture = null, loaded.call(this);

                function loaded() {
                    this.repaint(at.REPAINT_ALL), t && t.run()
                }
                return this
            }
        }, {
            key: "repaint",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at.REPAINT_CACHE;
                this._repaint & e || (this._repaint |= e, this.parentRepaint(e)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(e)
            }
        }, {
            key: "_needRepaint",
            value: function() {
                return this._repaint & at.REPAINT_CACHE && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache
            }
        }, {
            key: "_childChanged",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this._children.length ? this._renderType |= at.CHILDS : this._renderType &= ~at.CHILDS, this._setRenderType(this._renderType), e && this._getBit(dt.HAS_ZORDER) && i.systemTimer.callLater(this, this.updateZOrder), this.repaint(at.REPAINT_ALL)
            }
        }, {
            key: "parentRepaint",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at.REPAINT_CACHE,
                    t = this._parent;
                !t || t._repaint & e || (t._repaint |= e, t.parentRepaint(e))
            }
        }, {
            key: "_setMask",
            value: function(e) {}
        }, {
            key: "startDrag",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 300,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .92;
                this._style.dragging || (this.getStyle().dragging = new i.Dragging), this._style.dragging.start(this, e, t, n, r, a, s, o)
            }
        }, {
            key: "stopDrag",
            value: function() {
                this._style.dragging && this._style.dragging.stop()
            }
        }, {
            key: "_setDisplay",
            value: function(e) {
                e || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), _get(_getPrototypeOf(Sprite.prototype), "_setDisplay", this).call(this, e)
            }
        }, {
            key: "hitTestPoint",
            value: function(e, t) {
                var i = this.globalToLocal(v.TEMP.setTo(e, t));
                return e = i.x, t = i.y, (this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? p.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(e, t)
            }
        }, {
            key: "getMousePoint",
            value: function() {
                return this.globalToLocal(v.TEMP.setTo(i.stage.mouseX, i.stage.mouseY))
            }
        }, {
            key: "_setTexture",
            value: function(e) {}
        }, {
            key: "_setRenderType",
            value: function(e) {}
        }, {
            key: "_setTranformChange",
            value: function() {
                this._tfChanged = !0, this._renderType |= at.TRANSFORM, this.parentRepaint(at.REPAINT_CACHE)
            }
        }, {
            key: "_setBgStyleColor",
            value: function(e, t, i, n, r) {}
        }, {
            key: "_setBorderStyleColor",
            value: function(e, t, i, n, r, a) {}
        }, {
            key: "captureMouseEvent",
            value: function(e) {
                i.MouseManager.instance.setCapture(this, e)
            }
        }, {
            key: "releaseMouseEvent",
            value: function() {
                i.MouseManager.instance.releaseCapture()
            }
        }, {
            key: "customRenderEnable",
            set: function(e) {
                e && (this._renderType |= at.CUSTOM, this._setRenderType(this._renderType), this._setCustomRender())
            }
        }, {
            key: "cacheAs",
            get: function() {
                return this._cacheStyle.cacheAs
            },
            set: function(e) {
                e !== this._cacheStyle.userSetCache && (this.mask && "normal" === e || (this._setCacheAs(e), this._getCacheStyle().userSetCache = e, this._checkCanvasEnable(), this.repaint()))
            }
        }, {
            key: "staticCache",
            get: function() {
                return this._cacheStyle.staticCache
            },
            set: function(e) {
                this._getCacheStyle().staticCache = e, e || this.reCache()
            }
        }, {
            key: "x",
            get: function() {
                return this._x
            },
            set: function(e) {
                if (!this.destroyed && this._x !== e) {
                    this._setX(e), this.parentRepaint(at.REPAINT_CACHE);
                    var t = this._cacheStyle.maskParent;
                    t && t.repaint(at.REPAINT_CACHE)
                }
            }
        }, {
            key: "y",
            get: function() {
                return this._y
            },
            set: function(e) {
                if (!this.destroyed && this._y !== e) {
                    this._setY(e), this.parentRepaint(at.REPAINT_CACHE);
                    var t = this._cacheStyle.maskParent;
                    t && t.repaint(at.REPAINT_CACHE)
                }
            }
        }, {
            key: "width",
            get: function() {
                return this.get_width()
            },
            set: function(e) {
                this.set_width(e)
            }
        }, {
            key: "height",
            get: function() {
                return this.get_height()
            },
            set: function(e) {
                this.set_height(e)
            }
        }, {
            key: "displayWidth",
            get: function() {
                return this.width * this.scaleX
            }
        }, {
            key: "displayHeight",
            get: function() {
                return this.height * this.scaleY
            }
        }, {
            key: "scaleX",
            get: function() {
                return this._style.scaleX
            },
            set: function(e) {
                this.set_scaleX(e)
            }
        }, {
            key: "scaleY",
            get: function() {
                return this._style.scaleY
            },
            set: function(e) {
                this.set_scaleY(e)
            }
        }, {
            key: "rotation",
            get: function() {
                return this._style.rotation
            },
            set: function(e) {
                this.getStyle().rotation !== e && (this._setRotation(e), this._setTranformChange())
            }
        }, {
            key: "skewX",
            get: function() {
                return this._style.skewX
            },
            set: function(e) {
                this.getStyle().skewX !== e && (this._setSkewX(e), this._setTranformChange())
            }
        }, {
            key: "skewY",
            get: function() {
                return this._style.skewY
            },
            set: function(e) {
                this.getStyle().skewY !== e && (this._setSkewY(e), this._setTranformChange())
            }
        }, {
            key: "transform",
            get: function() {
                return this._tfChanged ? this._adjustTransform() : this._transform
            },
            set: function(e) {
                this.set_transform(e)
            }
        }, {
            key: "pivotX",
            get: function() {
                return this._getPivotX()
            },
            set: function(e) {
                this._setPivotX(e), this.repaint()
            }
        }, {
            key: "pivotY",
            get: function() {
                return this._getPivotY()
            },
            set: function(e) {
                this._setPivotY(e), this.repaint()
            }
        }, {
            key: "alpha",
            get: function() {
                return this._getAlpha()
            },
            set: function(e) {
                e = e < 0 ? 0 : e > 1 ? 1 : e, this._setAlpha(e)
            }
        }, {
            key: "visible",
            get: function() {
                return this.get_visible()
            },
            set: function(e) {
                this.set_visible(e)
            }
        }, {
            key: "blendMode",
            get: function() {
                return this._style.blendMode
            },
            set: function(e) {
                this._setBlendMode(e), this.getStyle().blendMode = e, e && "source-over" != e ? this._renderType |= at.BLEND : this._renderType &= ~at.BLEND, this._setRenderType(this._renderType), this.parentRepaint()
            }
        }, {
            key: "graphics",
            get: function() {
                return this._graphics || (this.graphics = new _t, this._graphics.autoDestroy = !0), this._graphics
            },
            set: function(e) {
                this._graphics && (this._graphics._sp = null), this._graphics = e, e ? (this._setGraphics(e), this._renderType |= at.GRAPHICS, e._sp = this) : this._renderType &= ~at.GRAPHICS, this._setRenderType(this._renderType), this.repaint()
            }
        }, {
            key: "scrollRect",
            get: function() {
                return this._style.scrollRect
            },
            set: function(e) {
                this.getStyle().scrollRect = e, this._setScrollRect(e), this.repaint(), e ? this._renderType |= at.CLIP : this._renderType &= ~at.CLIP, this._setRenderType(this._renderType)
            }
        }, {
            key: "filters",
            get: function() {
                return this._cacheStyle.filters
            },
            set: function(e) {
                e && 0 === e.length && (e = null), this._cacheStyle.filters != e && (this._getCacheStyle().filters = e ? e.slice() : null, e && e.length ? (this._setColorFilter(e[0]), this._renderType |= at.FILTERS) : (this._setColorFilter(null), this._renderType &= ~at.FILTERS), this._setRenderType(this._renderType), e && e.length > 0 ? (this._getBit(dt.DISPLAY) || this._setBitUp(dt.DISPLAY), 1 == e.length && e[0] instanceof Q || (this._getCacheStyle().cacheForFilters = !0, this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), this.repaint())
            }
        }, {
            key: "stage",
            get: function() {
                return i.stage
            }
        }, {
            key: "hitArea",
            get: function() {
                return this._style.hitArea
            },
            set: function(e) {
                this.getStyle().hitArea = e
            }
        }, {
            key: "mask",
            get: function() {
                return this._cacheStyle.mask
            },
            set: function(e) {
                e && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = e, this._setMask(e), this._checkCanvasEnable(), e ? e._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), this._renderType |= at.MASK, this._setRenderType(this._renderType), this.parentRepaint(at.REPAINT_ALL))
            }
        }, {
            key: "mouseEnabled",
            get: function() {
                return this._mouseState > 1
            },
            set: function(e) {
                this._mouseState = e ? 2 : 1
            }
        }, {
            key: "globalScaleX",
            get: function() {
                for (var e = 1, t = this; t && t !== i.stage;)
                    e *= t.scaleX, t = t.parent;
                return e
            }
        }, {
            key: "globalRotation",
            get: function() {
                for (var e = 0, t = this; t && t !== i.stage;)
                    e += t.rotation, t = t.parent;
                return e
            }
        }, {
            key: "globalScaleY",
            get: function() {
                for (var e = 1, t = this; t && t !== i.stage;)
                    e *= t.scaleY, t = t.parent;
                return e
            }
        }, {
            key: "mouseX",
            get: function() {
                return this.getMousePoint().x
            }
        }, {
            key: "mouseY",
            get: function() {
                return this.getMousePoint().y
            }
        }, {
            key: "zOrder",
            get: function() {
                return this._zOrder
            },
            set: function(e) {
                this._zOrder != e && (this._zOrder = e, this._parent && (e && this._parent._setBit(dt.HAS_ZORDER, !0), i.systemTimer.callLater(this._parent, this.updateZOrder)))
            }
        }, {
            key: "texture",
            get: function() {
                return this._texture
            },
            set: function(e) {
                "string" == typeof e ? this.loadImage(e) : this._texture != e && (this._texture && this._texture._removeReference(), this._texture = e, e && e._addReference(), this._setTexture(e), this._setWidth(this._texture, this.width), this._setHeight(this._texture, this.height), e ? this._renderType |= at.TEXTURE : this._renderType &= ~at.TEXTURE, this._setRenderType(this._renderType), this.repaint())
            }
        }, {
            key: "viewport",
            get: function() {
                return this._style.viewport
            },
            set: function(e) {
                var t;
                "string" == typeof e && ((t = e.split(",")).length > 3 && (e = new p(parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]))));
                this.getStyle().viewport = e
            }
        }, {
            key: "drawCallOptimize",
            set: function(e) {
                this._setBit(dt.DRAWCALL_OPTIMIZE, e)
            },
            get: function() {
                return this._getBit(dt.DRAWCALL_OPTIMIZE)
            }
        }], [{
            key: "drawToCanvas",
            value: function(e, t, i, n, r, a) {
                r -= e.x, a -= e.y, r |= 0, a |= 0, i |= 0, n |= 0;
                var s = new qe;
                s.size(i, n), s.asBitmap = !0, s._targets.start(), s._targets.clear(0, 0, 0, 0), vt.renders[t]._fun(e, s, r, a), s.flush(), s._targets.end(), s._targets.restore();
                var o = s._targets.getData(0, 0, i, n);
                s.destroy();
                for (var l = new ImageData(i, n), h = 4 * i, u = l.data, c = n - 1, _ = c * h, d = 0; c >= 0; c--)
                    u.set(o.subarray(d, d + h), _), _ -= h, d += h;
                var f = new pt(!0);
                return f.size(i, n), f.getContext("2d").putImageData(l, 0, 0), f
            }
        }, {
            key: "drawToTexture",
            value: function(e, t, i, n, r, a) {
                var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                Sprite.drawtocanvCtx || (Sprite.drawtocanvCtx = new qe), r -= e.x, a -= e.y, r |= 0, a |= 0, i |= 0, n |= 0;
                var o = s ? Sprite.drawtocanvCtx : new qe;
                if (o.clear(), o.size(i, n), s ? o._targets = s : o.asBitmap = !0, o._targets.start(), o._targets.clear(0, 0, 0, 0), vt.renders[t]._fun(e, o, r, a), o.flush(), o._targets.end(), o._targets.restore(), !s) {
                    var l = new We(o._targets, We.INV_UV);
                    return o.destroy(!0), l
                }
                return e._repaint = 0, s
            }
        }, {
            key: "fromImage",
            value: function(e) {
                return (new Sprite).loadImage(e)
            }
        }]), Sprite
    }(xt);
    yt.regClass("laya.display.Sprite", kt), yt.regClass("Laya.Sprite", kt);
    var St = function(e) {
        function TextStyle() {
            var e;
            return _classCallCheck(this, TextStyle), (e = _possibleConstructorReturn(this, _getPrototypeOf(TextStyle).apply(this, arguments))).italic = !1, e
        }
        return _inherits(TextStyle, e), _createClass(TextStyle, [{
            key: "reset",
            value: function() {
                return _get(_getPrototypeOf(TextStyle.prototype), "reset", this).call(this), this.italic = !1, this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [0, 0, 0, 0], this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this
            }
        }, {
            key: "recover",
            value: function() {
                this !== TextStyle.EMPTY && n.recover("TextStyle", this.reset())
            }
        }, {
            key: "render",
            value: function(e, t, i, n) {
                (this.bgColor || this.borderColor) && t.drawRect(i, n, e.width, e.height, this.bgColor, this.borderColor, 1)
            }
        }], [{
            key: "create",
            value: function() {
                return n.getItemByClass("TextStyle", TextStyle)
            }
        }]), TextStyle
    }(Ct);
    St.EMPTY = new St;
    var Rt = function(e) {
        function Text() {
            var e;
            return _classCallCheck(this, Text), (e = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this)))._textWidth = 0, e._textHeight = 0, e._lines = [], e._lineWidths = [], e._startX = 0, e._startY = 0, e._charSize = {}, e._valign = "top", e._fontSize = Text.defaultFontSize, e._font = Text.defaultFont, e._color = "#000000", e._singleCharRender = !1, e.overflow = Text.VISIBLE, e._style = St.EMPTY, e
        }
        return _inherits(Text, e), _createClass(Text, [{
            key: "getStyle",
            value: function() {
                return this._style === St.EMPTY && (this._style = St.create()), this._style
            }
        }, {
            key: "_getTextStyle",
            value: function() {
                return this._style === St.EMPTY && (this._style = St.create()), this._style
            }
        }, {
            key: "destroy",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                _get(_getPrototypeOf(Text.prototype), "destroy", this).call(this, e), this._clipPoint = null, this._lines = null, this._lineWidths = null, this._words && this._words.forEach((function(e) {
                    e.cleanCache()
                })), this._words = null, this._charSize = null
            }
        }, {
            key: "_getBoundPointsM",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var e = p.TEMP;
                return e.setTo(0, 0, this.width, this.height), e._getBoundPoints()
            }
        }, {
            key: "getGraphicBounds",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var e = p.TEMP;
                return e.setTo(0, 0, this.width, this.height), e
            }
        }, {
            key: "_getCSSStyle",
            value: function() {
                return this._style
            }
        }, {
            key: "get_text",
            value: function() {
                return this._text || ""
            }
        }, {
            key: "set_text",
            value: function(e) {
                this._text !== e && (this.lang(e + ""), this.isChanged = !0, this.event(Ue.CHANGE), this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }
        }, {
            key: "lang",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 && void 0 !== arguments[8] && arguments[8], arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
                if (e = Text.langPacks && Text.langPacks[e] ? Text.langPacks[e] : e, arguments.length < 2)
                    this._text = e;
                else {
                    for (var t = 0, i = arguments.length; t < i; t++)
                        e = e.replace("{" + t + "}", arguments[t + 1]);
                    this._text = e
                }
            }
        }, {
            key: "get_color",
            value: function() {
                return this._color
            }
        }, {
            key: "set_color",
            value: function(e) {
                this._color != e && (this._color = e, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0)
            }
        }, {
            key: "set_bgColor",
            value: function(e) {
                this._getTextStyle().bgColor = e, this._renderType |= at.STYLE, this._setBgStyleColor(0, 0, this.width, this.height, e), this._setRenderType(this._renderType), this.isChanged = !0
            }
        }, {
            key: "get_bgColor",
            value: function() {
                return this._style.bgColor
            }
        }, {
            key: "_getContextFont",
            value: function() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (i.Browser.onIPhone && Text.fontFamilyMap[this.font] || this.font)
            }
        }, {
            key: "_isPassWordMode",
            value: function() {
                var e = this._style.asPassword;
                return "prompt" in this && this.prompt == this._text && (e = !1), e
            }
        }, {
            key: "_getPassWordTxt",
            value: function(e) {
                var t;
                t = "";
                for (var i = e.length; i > 0; i--)
                    t += "●";
                return t
            }
        }, {
            key: "_renderText",
            value: function() {
                var e = this.padding,
                    t = this._lines.length;
                this.overflow != Text.VISIBLE && (t = Math.min(t, Math.floor((this.height - e[0] - e[2]) / (this.leading + this._charSize.height)) + 1));
                var n = this.scrollY / (this._charSize.height + this.leading) | 0,
                    r = this.graphics;
                r.clear(!0);
                var a = this._getContextFont();
                i.Browser.context.font = a;
                var s = e[3],
                    o = "left",
                    l = this._lines,
                    h = this.leading + this._charSize.height,
                    u = this._style.currBitmapFont;
                u && (h = this.leading + u.getMaxHeight());
                var c = e[0];
                if (!u && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (o = "right", s = this._width - e[1]) : "center" == this.align && (o = "center", s = .5 * this._width + e[3] - e[1])), this._height > 0) {
                    var _ = this._textHeight > this._height ? "top" : this.valign;
                    "middle" === _ ? c = .5 * (this._height - t * h) + e[0] - e[2] : "bottom" === _ && (c = this._height - t * h - e[2])
                }
                var d = this._style;
                if (u && u.autoScaleSize)
                    var f = u.fontSize / this.fontSize;
                if (this._clipPoint) {
                    var v, p;
                    if (r.save(), u && u.autoScaleSize)
                        v = this._width ? this._width - e[3] - e[1] : this._textWidth, p = this._height ? this._height - e[0] - e[2] : this._textHeight, v *= f, p *= f, r.clipRect(e[3], e[0], v, p);
                    else
                        r.clipRect(e[3], e[0], this._width ? this._width - e[3] - e[1] : this._textWidth, this._height ? this._height - e[0] - e[2] : this._textHeight);
                    this.repaint()
                }
                var g = d.asPassword;
                "prompt" in this && this.prompt == this._text && (g = !1);
                for (var y = 0, m = 0, T = Math.min(this._lines.length, t + n) || 1, C = n; C < T; C++) {
                    var x, k = l[C];
                    if (g) {
                        var S = k.length;
                        k = "";
                        for (var R = S; R > 0; R--)
                            k += "●"
                    }
                    if (null == k && (k = ""), y = s - (this._clipPoint ? this._clipPoint.x : 0), m = c + h * C - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this._drawUnderline(o, y, m, C), u) {
                        var b = this.width;
                        u.autoScaleSize && (b = this.width * f), u._drawText(k, this, y, m, this.align, b)
                    } else
                        this._words || (this._words = []), this._words.length > C - n ? x = this._words[C - n] : (x = new Ye, this._words.push(x)), x.setText(k), x.splitRender = this._singleCharRender, d.stroke ? r.fillBorderText(x, y, m, a, this.color, d.strokeColor, d.stroke, o) : r.fillText(x, y, m, a, this.color, o)
                }
                if (u && u.autoScaleSize) {
                    var E = 1 / f;
                    this.scale(E, E)
                }
                this._clipPoint && r.restore(), this._startX = s, this._startY = c
            }
        }, {
            key: "_drawUnderline",
            value: function(e, t, i, n) {
                var r = this._lineWidths[n];
                switch (e) {
                    case "center":
                        t -= r / 2;
                        break;
                    case "right":
                        t -= r
                }
                i += this._charSize.height, this._graphics.drawLine(t, i, t + r, i, this.underlineColor || this.color, 1)
            }
        }, {
            key: "typeset",
            value: function() {
                if (this._isChanged = !1, !this._text)
                    return this._clipPoint = null, this._textWidth = this._textHeight = 0, void this.graphics.clear(!0);
                i.Render.isConchApp ? window.conchTextCanvas.font = this._getContextFont() : i.Browser.context.font = this._getContextFont(), this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new v(0, 0)) : this._clipPoint = null, this._renderText()
            }
        }, {
            key: "_evalTextSize",
            value: function() {
                var e, t;
                e = Math.max.apply(this, this._lineWidths), t = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], e == this._textWidth && t == this._textHeight || (this._textWidth = e, this._textHeight = t)
            }
        }, {
            key: "_checkEnabledViewportOrNot",
            value: function() {
                return this.overflow == Text.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height)
            }
        }, {
            key: "changeText",
            value: function(e) {
                this._text !== e && (this.lang(e + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset())
            }
        }, {
            key: "_parseLines",
            value: function(e) {
                var t = this.wordWrap || this.overflow == Text.HIDDEN;
                if (t)
                    var n = this._getWordWrapWidth();
                var r = this._style.currBitmapFont;
                if (r)
                    this._charSize.width = r.getMaxWidth(), this._charSize.height = r.getMaxHeight();
                else {
                    var a = null;
                    (a = i.Render.isConchApp ? window.conchTextCanvas.measureText(Text._testWord) : i.Browser.context.measureText(Text._testWord)) || (a = {
                        width: 100
                    }), this._charSize.width = a.width, this._charSize.height = a.height || this.fontSize
                }
                for (var s = e.replace(/\r\n/g, "\n").split("\n"), o = 0, l = s.length; o < l; o++) {
                    var h = s[o];
                    t ? this._parseLine(h, n) : (this._lineWidths.push(this._getTextWidth(h)), this._lines.push(h))
                }
            }
        }, {
            key: "_parseLine",
            value: function(e, t) {
                var i = this._lines,
                    n = 0,
                    r = 0,
                    a = 0,
                    s = 0;
                if ((r = this._getTextWidth(e)) <= t)
                    return i.push(e), void this._lineWidths.push(r);
                r = this._charSize.width, 0 == (n = Math.floor(t / r)) && (n = 1), a = r = this._getTextWidth(e.substring(0, n));
                for (var o = n, l = e.length; o < l; o++)
                    if ((a += r = this._getTextWidth(e.charAt(o))) > t)
                        if (this.wordWrap) {
                            var h = e.substring(s, o);
                            if (h.charCodeAt(h.length - 1) < 255) {
                                var u = /(?:\w|-)+$/.exec(h);
                                u && (o = u.index + s, 0 == u.index ? o += h.length : h = e.substring(s, o))
                            }
                            if (i.push(h), this._lineWidths.push(a - r), s = o, !(o + n < l)) {
                                i.push(e.substring(s, l)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])), s = -1;
                                break
                            }
                            o += n, a = r = this._getTextWidth(e.substring(s, o)), o--
                        } else if (this.overflow == Text.HIDDEN)
                    return i.push(e.substring(0, o)), void this._lineWidths.push(this._getTextWidth(i[i.length - 1]));
                this.wordWrap && -1 != s && (i.push(e.substring(s, l)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])))
            }
        }, {
            key: "_getTextWidth",
            value: function(e) {
                var t = this._style.currBitmapFont;
                return t ? t.getTextWidth(e) : i.Render.isConchApp ? window.conchTextCanvas.measureText(e).width : (i.Browser.context.measureText(e) || {
                    width: 100
                }).width
            }
        }, {
            key: "_getWordWrapWidth",
            value: function() {
                var e, t = this.padding,
                    n = this._style.currBitmapFont;
                return (e = n && n.autoScaleSize ? this._width * (n.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : i.Browser.width), e <= 0 && (e = 100), e - t[3] - t[1]
            }
        }, {
            key: "getCharPoint",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
                for (var n = 0, r = this._lines, a = 0, s = 0, o = r.length; s < o; s++) {
                    if (e < (n += r[s].length)) {
                        var l = s;
                        break
                    }
                    a = n
                }
                var h = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                i.Browser.context.font = h;
                var u = this._getTextWidth(this._text.substring(a, e)),
                    c = t || new v;
                return c.setTo(this._startX + u - (this._clipPoint ? this._clipPoint.x : 0), this._startY + l * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0))
            }
        }, {
            key: "width",
            get: function() {
                return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3]
            },
            set: function(e) {
                e != this._width && (_get(_getPrototypeOf(Text.prototype), "set_width", this).call(this, e), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }
        }, {
            key: "height",
            get: function() {
                return this._height ? this._height : this.textHeight
            },
            set: function(e) {
                e != this._height && (_get(_getPrototypeOf(Text.prototype), "set_height", this).call(this, e), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1))
            }
        }, {
            key: "textWidth",
            get: function() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth
            }
        }, {
            key: "textHeight",
            get: function() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight
            }
        }, {
            key: "text",
            get: function() {
                return this._text || ""
            },
            set: function(e) {
                this.set_text(e)
            }
        }, {
            key: "font",
            get: function() {
                return this._font
            },
            set: function(e) {
                this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), Text._bitmapFonts && Text._bitmapFonts[e] && (this._getTextStyle().currBitmapFont = Text._bitmapFonts[e]), this._font = e, this.isChanged = !0
            }
        }, {
            key: "fontSize",
            get: function() {
                return this._fontSize
            },
            set: function(e) {
                this._fontSize != e && (this._fontSize = e, this.isChanged = !0)
            }
        }, {
            key: "bold",
            get: function() {
                return this._style.bold
            },
            set: function(e) {
                this._getTextStyle().bold = e, this.isChanged = !0
            }
        }, {
            key: "color",
            get: function() {
                return this._color
            },
            set: function(e) {
                this.set_color(e)
            }
        }, {
            key: "italic",
            get: function() {
                return this._style.italic
            },
            set: function(e) {
                this._getTextStyle().italic = e, this.isChanged = !0
            }
        }, {
            key: "align",
            get: function() {
                return this._style.align
            },
            set: function(e) {
                this._getTextStyle().align = e, this.isChanged = !0
            }
        }, {
            key: "valign",
            get: function() {
                return this._valign
            },
            set: function(e) {
                this._valign = e, this.isChanged = !0
            }
        }, {
            key: "wordWrap",
            get: function() {
                return this._style.wordWrap
            },
            set: function(e) {
                this._getTextStyle().wordWrap = e, this.isChanged = !0
            }
        }, {
            key: "leading",
            get: function() {
                return this._style.leading
            },
            set: function(e) {
                this._getTextStyle().leading = e, this.isChanged = !0
            }
        }, {
            key: "padding",
            get: function() {
                return this._style.padding
            },
            set: function(e) {
                if ("string" == typeof e) {
                    var t, i, n;
                    for (n = (t = e.split(",")).length; t.length < 4;)
                        t.push(0);
                    for (i = 0; i < n; i++)
                        t[i] = parseFloat(t[i]) || 0;
                    e = t
                }
                this._getTextStyle().padding = e, this.isChanged = !0
            }
        }, {
            key: "bgColor",
            get: function() {
                return this._style.bgColor
            },
            set: function(e) {
                this.set_bgColor(e)
            }
        }, {
            key: "borderColor",
            get: function() {
                return this._style.borderColor
            },
            set: function(e) {
                this._getTextStyle().borderColor = e, this._renderType |= at.STYLE, this._setBorderStyleColor(0, 0, this.width, this.height, e, 1), this._setRenderType(this._renderType), this.isChanged = !0
            }
        }, {
            key: "stroke",
            get: function() {
                return this._style.stroke
            },
            set: function(e) {
                this._getTextStyle().stroke = e, this.isChanged = !0
            }
        }, {
            key: "strokeColor",
            get: function() {
                return this._style.strokeColor
            },
            set: function(e) {
                this._getTextStyle().strokeColor = e, this.isChanged = !0
            }
        }, {
            key: "isChanged",
            set: function(e) {
                this._isChanged !== e && (this._isChanged = e, e && i.systemTimer.callLater(this, this.typeset))
            }
        }, {
            key: "scrollX",
            set: function(e) {
                if (!(this.overflow != Text.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                    e = e < this.padding[3] ? this.padding[3] : e;
                    var t = this._textWidth - this._width;
                    e = e > t ? t : e, this._clipPoint.x = e, this._renderText()
                }
            },
            get: function() {
                return this._clipPoint ? this._clipPoint.x : 0
            }
        }, {
            key: "scrollY",
            set: function(e) {
                if (!(this.overflow != Text.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                    e = e < this.padding[0] ? this.padding[0] : e;
                    var t = this._textHeight - this._height;
                    e = e > t ? t : e, this._clipPoint.y = e, this._renderText()
                }
            },
            get: function() {
                return this._clipPoint ? this._clipPoint.y : 0
            }
        }, {
            key: "maxScrollX",
            get: function() {
                return this.textWidth < this._width ? 0 : this._textWidth - this._width
            }
        }, {
            key: "maxScrollY",
            get: function() {
                return this.textHeight < this._height ? 0 : this._textHeight - this._height
            }
        }, {
            key: "lines",
            get: function() {
                return this._isChanged && this.typeset(), this._lines
            }
        }, {
            key: "underlineColor",
            get: function() {
                return this._style.underlineColor
            },
            set: function(e) {
                this._getTextStyle().underlineColor = e, this._isChanged || this._renderText()
            }
        }, {
            key: "underline",
            get: function() {
                return this._style.underline
            },
            set: function(e) {
                this._getTextStyle().underline = e
            }
        }, {
            key: "singleCharRender",
            set: function(e) {
                this._singleCharRender = e
            },
            get: function() {
                return this._singleCharRender
            }
        }], [{
            key: "defaultFontStr",
            value: function() {
                return Text.defaultFontSize + "px " + Text.defaultFont
            }
        }, {
            key: "registerBitmapFont",
            value: function(e, t) {
                Text._bitmapFonts || (Text._bitmapFonts = {}), Text._bitmapFonts[e] = t
            }
        }, {
            key: "unregisterBitmapFont",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (Text._bitmapFonts && Text._bitmapFonts[e]) {
                    var i = Text._bitmapFonts[e];
                    t && i.destroy(), delete Text._bitmapFonts[e]
                }
            }
        }]), Text
    }(kt);
    Rt.VISIBLE = "visible", Rt.SCROLL = "scroll", Rt.HIDDEN = "hidden", Rt.defaultFontSize = 12, Rt.defaultFont = "Arial", Rt.isComplexText = !1, Rt.fontFamilyMap = {
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
    }, Rt._testWord = "游", Rt.CharacterCache = !0, Rt.RightToLeft = !1, i.regClass(Rt), yt.regClass("laya.display.Text", Rt), yt.regClass("Laya.Text", Rt);
    var bt = function(e) {
        function Input() {
            var e;
            return _classCallCheck(this, Input), (e = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this)))._multiline = !1, e._editable = !0, e._maxChars = 1e5, e._type = "text", e._prompt = "", e._promptColor = "#A9A9A9", e._originColor = "#000000", e._content = "", Input.IOS_IFRAME = i.Browser.onIOS && i.Browser.window.top != i.Browser.window.self, e._width = 100, e._height = 20, e.multiline = !1, e.overflow = Rt.SCROLL, e.on(Ue.MOUSE_DOWN, _assertThisInitialized(e), e._onMouseDown), e.on(Ue.UNDISPLAY, _assertThisInitialized(e), e._onUnDisplay), e
        }
        return _inherits(Input, e), _createClass(Input, [{
            key: "setSelection",
            value: function(e, t) {
                this.focus = !0, Input.inputElement.selectionStart = e, Input.inputElement.selectionEnd = t
            }
        }, {
            key: "_onUnDisplay",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.focus = !1
            }
        }, {
            key: "_onMouseDown",
            value: function(e) {
                this.focus = !0
            }
        }, {
            key: "_syncInputTransform",
            value: function() {
                var e = this.nativeInput,
                    t = K.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                    n = this._width - this.padding[1] - this.padding[3],
                    r = this._height - this.padding[0] - this.padding[2];
                i.Render.isConchApp ? (e.setScale(t.scaleX, t.scaleY), e.setSize(n, r), e.setPos(t.x, t.y)) : (Input.inputContainer.style.transform = Input.inputContainer.style.webkitTransform = "scale(" + t.scaleX + "," + t.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", e.style.width = n + "px", e.style.height = r + "px", Input.inputContainer.style.left = t.x + "px", Input.inputContainer.style.top = t.y + "px")
            }
        }, {
            key: "select",
            value: function() {
                this.nativeInput.select()
            }
        }, {
            key: "_setInputMethod",
            value: function() {
                Input.input.parentElement && Input.inputContainer.removeChild(Input.input), Input.area.parentElement && Input.inputContainer.removeChild(Input.area), Input.inputElement = this._multiline ? Input.area : Input.input, Input.inputContainer.appendChild(Input.inputElement), Rt.RightToLeft && (Input.inputElement.style.direction = "rtl")
            }
        }, {
            key: "_focusIn",
            value: function() {
                Input.isInputting = !0;
                var e = this.nativeInput;
                this._focus = !0;
                var t = e.style;
                t.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), e.readOnly = !this._editable, i.Render.isConchApp && (e.setType(this._type), e.setForbidEdit(!this._editable)), e.maxLength = this._maxChars;
                this.padding;
                if (e.value = this._content, e.placeholder = this._prompt, i.stage.off(Ue.KEY_DOWN, this, this._onKeyDown), i.stage.on(Ue.KEY_DOWN, this, this._onKeyDown), i.stage.focus = this, this.event(Ue.FOCUS), i.Browser.onPC && e.focus(), !(i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame)) {
                    this._text;
                    this._text = null
                }
                this.typeset(), e.setColor(this._originColor), e.setFontSize(this.fontSize), e.setFontFace(i.Browser.onIPhone && Rt.fontFamilyMap[this.font] || this.font), i.Render.isConchApp && e.setMultiAble && e.setMultiAble(this._multiline), t.lineHeight = this.leading + this.fontSize + "px", t.fontStyle = this.italic ? "italic" : "normal", t.fontWeight = this.bold ? "bold" : "normal", t.textAlign = this.align, t.padding = "0 0", this._syncInputTransform(), !i.Render.isConchApp && i.Browser.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform)
            }
        }, {
            key: "_setPromptColor",
            value: function() {
                Input.promptStyleDOM = i.Browser.getElementById("promptStyle"), Input.promptStyleDOM || (Input.promptStyleDOM = i.Browser.createElement("style"), Input.promptStyleDOM.setAttribute("id", "promptStyle"), i.Browser.document.head.appendChild(Input.promptStyleDOM)), Input.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}"
            }
        }, {
            key: "_focusOut",
            value: function() {
                Input.isInputting && (Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (_get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, this._content), _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this._originColor)) : (_get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, this._prompt), _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this._promptColor)), i.stage.off(Ue.KEY_DOWN, this, this._onKeyDown), i.stage.focus = null, this.event(Ue.BLUR), this.event(Ue.CHANGE), i.Render.isConchApp && this.nativeInput.blur(), i.Browser.onPC && i.systemTimer.clear(this, this._syncInputTransform))
            }
        }, {
            key: "_onKeyDown",
            value: function(e) {
                13 === e.keyCode && (i.Browser.onMobile && !this._multiline && (this.focus = !1), this.event(Ue.ENTER))
            }
        }, {
            key: "changeText",
            value: function(e) {
                this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event(Ue.CHANGE)) : _get(_getPrototypeOf(Input.prototype), "changeText", this).call(this, e)
            }
        }, {
            key: "multiline",
            get: function() {
                return this._multiline
            },
            set: function(e) {
                this._multiline = e, this.valign = e ? "top" : "middle"
            }
        }, {
            key: "nativeInput",
            get: function() {
                return this._multiline ? Input.area : Input.input
            }
        }, {
            key: "focus",
            get: function() {
                return this._focus
            },
            set: function(e) {
                var t = this.nativeInput;
                this._focus !== e && (e ? (t.target ? t.target._focusOut() : this._setInputMethod(), t.target = this, this._focusIn()) : (t.target = null, this._focusOut(), i.Browser.document.body.scrollTop = 0, t.blur(), i.Render.isConchApp ? t.setPos(-1e4, -1e4) : Input.inputContainer.contains(t) && Input.inputContainer.removeChild(t)))
            }
        }, {
            key: "text",
            set: function(e) {
                _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this._originColor), e += "", this._focus ? (this.nativeInput.value = e || "", this.event(Ue.CHANGE)) : (this._multiline || (e = e.replace(/\r?\n/g, "")), this._content = e, e ? _get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, e) : (_get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, this._prompt), _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this.promptColor)))
            },
            get: function() {
                return this._focus ? this.nativeInput.value : this._content || ""
            }
        }, {
            key: "color",
            set: function(e) {
                this._focus && this.nativeInput.setColor(e), _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this._content ? e : this._promptColor), this._originColor = e
            },
            get: function() {
                return _get(_getPrototypeOf(Input.prototype), "color", this)
            }
        }, {
            key: "bgColor",
            set: function(e) {
                _get(_getPrototypeOf(Input.prototype), "set_bgColor", this).call(this, e), i.Render.isConchApp && this.nativeInput.setBgColor(e)
            },
            get: function() {
                return _get(_getPrototypeOf(Input.prototype), "bgColor", this)
            }
        }, {
            key: "restrict",
            get: function() {
                return this._restrictPattern ? this._restrictPattern.source : ""
            },
            set: function(e) {
                e ? ((e = "[^" + e + "]").indexOf("^^") > -1 && (e = e.replace("^^", "")), this._restrictPattern = new RegExp(e, "g")) : this._restrictPattern = null
            }
        }, {
            key: "editable",
            set: function(e) {
                this._editable = e, i.Render.isConchApp && Input.input.setForbidEdit(!e)
            },
            get: function() {
                return this._editable
            }
        }, {
            key: "maxChars",
            get: function() {
                return this._maxChars
            },
            set: function(e) {
                e <= 0 && (e = 1e5), this._maxChars = e
            }
        }, {
            key: "prompt",
            get: function() {
                return this._prompt
            },
            set: function(e) {
                !this._text && e && _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, this._promptColor), this.promptColor = this._promptColor, this._text ? _get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, this._text == this._prompt ? e : this._text) : _get(_getPrototypeOf(Input.prototype), "set_text", this).call(this, e), this._prompt = Rt.langPacks && Rt.langPacks[e] ? Rt.langPacks[e] : e
            }
        }, {
            key: "promptColor",
            get: function() {
                return this._promptColor
            },
            set: function(e) {
                this._promptColor = e, this._content || _get(_getPrototypeOf(Input.prototype), "set_color", this).call(this, e)
            }
        }, {
            key: "type",
            get: function() {
                return this._type
            },
            set: function(e) {
                this._getTextStyle().asPassword = "password" === e, this._type = e
            }
        }], [{
            key: "__init__",
            value: function() {
                if (Input._createInputElement(), i.Browser.onMobile) {
                    var e = !1;
                    (i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame) && (e = !0), i.Render.canvas.addEventListener(Input.IOS_IFRAME ? e ? "touchend" : "click" : "touchend", Input._popupInputMethod)
                }
            }
        }, {
            key: "_popupInputMethod",
            value: function(e) {
                Input.isInputting && Input.inputElement.focus()
            }
        }, {
            key: "_createInputElement",
            value: function() {
                Input._initInput(Input.area = i.Browser.createElement("textarea")), Input._initInput(Input.input = i.Browser.createElement("input")), Input.inputContainer = i.Browser.createElement("div"), Input.inputContainer.style.position = "absolute", Input.inputContainer.style.zIndex = 1e5, i.Browser.container.appendChild(Input.inputContainer), Input.inputContainer.setPos = function(e, t) {
                    Input.inputContainer.style.left = e + "px", Input.inputContainer.style.top = t + "px"
                }
            }
        }, {
            key: "_initInput",
            value: function(e) {
                var t = e.style;
                t.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", t.resize = "none", t.backgroundColor = "transparent", t.border = "none", t.outline = "none", t.zIndex = 1, e.addEventListener("input", Input._processInputting), e.addEventListener("mousemove", Input._stopEvent), e.addEventListener("mousedown", Input._stopEvent), e.addEventListener("touchmove", Input._stopEvent), e.setFontFace = function(t) {
                    e.style.fontFamily = t
                }, i.Render.isConchApp || (e.setColor = function(t) {
                    e.style.color = t
                }, e.setFontSize = function(t) {
                    e.style.fontSize = t + "px"
                })
            }
        }, {
            key: "_processInputting",
            value: function(e) {
                var t = Input.inputElement.target;
                if (t) {
                    var i = Input.inputElement.value;
                    t._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), t._restrictPattern.test(i) && (i = i.replace(t._restrictPattern, ""), Input.inputElement.value = i)), t._text = i, t.event(Ue.INPUT)
                }
            }
        }, {
            key: "_stopEvent",
            value: function(e) {
                "touchmove" == e.type && e.preventDefault(), e.stopPropagation && e.stopPropagation()
            }
        }]), Input
    }(Rt);
    bt.TYPE_TEXT = "text", bt.TYPE_PASSWORD = "password", bt.TYPE_EMAIL = "email", bt.TYPE_URL = "url", bt.TYPE_NUMBER = "number", bt.TYPE_RANGE = "range", bt.TYPE_DATE = "date", bt.TYPE_MONTH = "month", bt.TYPE_WEEK = "week", bt.TYPE_TIME = "time", bt.TYPE_DATE_TIME = "datetime", bt.TYPE_DATE_TIME_LOCAL = "datetime-local", bt.TYPE_SEARCH = "search", bt.IOS_IFRAME = !1, bt.inputHeight = 45, bt.isInputting = !1, yt.regClass("laya.display.Input", bt), yt.regClass("Laya.Input", bt);
    var Et = function() {
        function TouchManager() {
            _classCallCheck(this, TouchManager), this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._event = new Ue, this._lastClickTime = 0
        }
        return _createClass(TouchManager, [{
            key: "_clearTempArrs",
            value: function() {
                TouchManager._oldArr.length = 0, TouchManager._newArr.length = 0, TouchManager._tEleArr.length = 0
            }
        }, {
            key: "getTouchFromArr",
            value: function(e, t) {
                var i, n, r;
                for (n = t.length, i = 0; i < n; i++)
                    if ((r = t[i]).id == e)
                        return r;
                return null
            }
        }, {
            key: "removeTouchFromArr",
            value: function(e, t) {
                var i;
                for (i = t.length - 1; i >= 0; i--)
                    t[i].id == e && t.splice(i, 1)
            }
        }, {
            key: "createTouchO",
            value: function(e, t) {
                var i;
                return (i = n.getItem("TouchData") || {}).id = t, i.tar = e, i
            }
        }, {
            key: "onMouseDown",
            value: function(e, t) {
                var i, n, r, a, s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.enable && (i = this.getTouchFromArr(t, this.preOvers), r = this.getEles(e, null, TouchManager._tEleArr), i ? i.tar = e : (n = this.createTouchO(e, t), this.preOvers.push(n)), ze.onMobile && this.sendEvents(r, Ue.MOUSE_OVER), a = s ? this.preDowns : this.preRightDowns, (i = this.getTouchFromArr(t, a)) ? i.tar = e : (n = this.createTouchO(e, t), a.push(n)), this.sendEvents(r, s ? Ue.MOUSE_DOWN : Ue.RIGHT_MOUSE_DOWN), this._clearTempArrs())
            }
        }, {
            key: "sendEvents",
            value: function(e, t) {
                var i, n, r;
                for (n = e.length, this._event._stoped = !1, r = e[0], i = 0; i < n; i++) {
                    var a = e[i];
                    if (a.destroyed)
                        return;
                    if (a.event(t, this._event.setTo(t, a, r)), this._event._stoped)
                        break
                }
            }
        }, {
            key: "getEles",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                for (i ? i.length = 0 : i = []; e && e != t;)
                    i.push(e), e = e.parent;
                return i
            }
        }, {
            key: "checkMouseOutAndOverOfMove",
            value: function(e, t) {
                var i, n, r, a;
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (t != e)
                    if (t.contains(e))
                        n = this.getEles(e, t, TouchManager._tEleArr), this.sendEvents(n, Ue.MOUSE_OVER);
                    else if (e.contains(t))
                    n = this.getEles(t, e, TouchManager._tEleArr), this.sendEvents(n, Ue.MOUSE_OUT);
                else {
                    var s, o, l;
                    for ((n = TouchManager._tEleArr).length = 0, s = this.getEles(t, null, TouchManager._oldArr), o = this.getEles(e, null, TouchManager._newArr), a = s.length, r = 0; r < a; r++) {
                        if (i = s[r], (l = o.indexOf(i)) >= 0) {
                            o.splice(l, o.length - l);
                            break
                        }
                        n.push(i)
                    }
                    n.length > 0 && this.sendEvents(n, Ue.MOUSE_OUT), o.length > 0 && this.sendEvents(o, Ue.MOUSE_OVER)
                }
            }
        }, {
            key: "onMouseMove",
            value: function(e, t) {
                var i, n;
                this.enable && ((i = this.getTouchFromArr(t, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(e, i.tar), i.tar = e, n = this.getEles(e, null, TouchManager._tEleArr)) : (n = this.getEles(e, null, TouchManager._tEleArr), this.sendEvents(n, Ue.MOUSE_OVER), this.preOvers.push(this.createTouchO(e, t))), this.sendEvents(n, Ue.MOUSE_MOVE), this._clearTempArrs())
            }
        }, {
            key: "getLastOvers",
            value: function() {
                return TouchManager._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, TouchManager._tEleArr) : (TouchManager._tEleArr.push(i.stage), TouchManager._tEleArr)
            }
        }, {
            key: "stageMouseOut",
            value: function() {
                var e;
                e = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(e, Ue.MOUSE_OUT)
            }
        }, {
            key: "onMouseUp",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this.enable) {
                    var r, a, s, o, l, h, u, c, _ = ze.onMobile;
                    if (a = this.getEles(e, null, TouchManager._tEleArr), this.sendEvents(a, i ? Ue.MOUSE_UP : Ue.RIGHT_MOUSE_UP), c = i ? this.preDowns : this.preRightDowns, r = this.getTouchFromArr(t, c)) {
                        var d, f = ze.now();
                        if (d = f - this._lastClickTime < 300, this._lastClickTime = f, e == r.tar)
                            u = a;
                        else
                            for (s = this.getEles(r.tar, null, TouchManager._oldArr), (u = TouchManager._newArr).length = 0, l = s.length, o = 0; o < l; o++)
                                h = s[o], a.indexOf(h) >= 0 && u.push(h);
                        u.length > 0 && this.sendEvents(u, i ? Ue.CLICK : Ue.RIGHT_CLICK), i && d && this.sendEvents(u, Ue.DOUBLE_CLICK), this.removeTouchFromArr(t, c), r.tar = null, n.recover("TouchData", r)
                    } else;
                    (r = this.getTouchFromArr(t, this.preOvers)) && _ && ((u = this.getEles(r.tar, null, u)) && u.length > 0 && this.sendEvents(u, Ue.MOUSE_OUT), this.removeTouchFromArr(t, this.preOvers), r.tar = null, n.recover("TouchData", r)), this._clearTempArrs()
                }
            }
        }]), TouchManager
    }();
    Et.I = new Et, Et._oldArr = [], Et._newArr = [], Et._tEleArr = [];
    var At = function() {
        function MouseManager() {
            _classCallCheck(this, MouseManager), this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._event = new Ue, this._captureSp = null, this._captureChain = [], this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._point = new v, this._rect = new p, this._lastMoveTimer = 0, this._prePoint = new v, this._touchIDs = {}, this._curTouchID = NaN, this._id = 1
        }
        return _createClass(MouseManager, [{
            key: "__init__",
            value: function(e, t) {
                this._stage = e;
                var i = this;
                t.oncontextmenu = function(e) {
                    if (MouseManager.enabled)
                        return !1
                }, t.addEventListener("mousedown", (function(e) {
                    MouseManager.enabled && (ze.onIE || e.cancelable && e.preventDefault(), i.mouseDownTime = ze.now(), i.runEvent(e))
                })), t.addEventListener("mouseup", (function(e) {
                    MouseManager.enabled && (e.cancelable && e.preventDefault(), i.mouseDownTime = -ze.now(), i.runEvent(e))
                }), !0), t.addEventListener("mousemove", (function(e) {
                    if (MouseManager.enabled) {
                        e.cancelable && e.preventDefault();
                        var t = ze.now();
                        if (t - i._lastMoveTimer < 10)
                            return;
                        i._lastMoveTimer = t, i.runEvent(e)
                    }
                }), !0), t.addEventListener("mouseout", (function(e) {
                    MouseManager.enabled && i.runEvent(e)
                })), t.addEventListener("mouseover", (function(e) {
                    MouseManager.enabled && i.runEvent(e)
                })), t.addEventListener("touchstart", (function(e) {
                    MouseManager.enabled && (MouseManager._isFirstTouch || bt.isInputting || e.cancelable && e.preventDefault(), i.mouseDownTime = ze.now(), i.runEvent(e))
                })), t.addEventListener("touchend", (function(e) {
                    MouseManager.enabled ? (MouseManager._isFirstTouch || bt.isInputting || e.cancelable && e.preventDefault(), MouseManager._isFirstTouch = !1, i.mouseDownTime = -ze.now(), i.runEvent(e)) : i._curTouchID = NaN
                }), !0), t.addEventListener("touchmove", (function(e) {
                    MouseManager.enabled && (e.cancelable && e.preventDefault(), i.runEvent(e))
                }), !0), t.addEventListener("touchcancel", (function(e) {
                    MouseManager.enabled ? (e.cancelable && e.preventDefault(), i.runEvent(e)) : i._curTouchID = NaN
                }), !0), t.addEventListener("mousewheel", (function(e) {
                    MouseManager.enabled && i.runEvent(e)
                })), t.addEventListener("DOMMouseScroll", (function(e) {
                    MouseManager.enabled && i.runEvent(e)
                }))
            }
        }, {
            key: "initEvent",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this;
                n._event._stoped = !1, n._event.nativeEvent = i || e, n._target = null, this._point.setTo(e.pageX || e.clientX, e.pageY || e.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), n.mouseX = this._point.x, n.mouseY = this._point.y), n._event.touchId = e.identifier || 0, this._tTouchID = n._event.touchId, (t = Et.I._event)._stoped = !1, t.nativeEvent = n._event.nativeEvent, t.touchId = n._event.touchId
            }
        }, {
            key: "checkMouseWheel",
            value: function(e) {
                this._event.delta = e.wheelDelta ? .025 * e.wheelDelta : -e.detail;
                for (var t = Et.I.getLastOvers(), i = 0, n = t.length; i < n; i++) {
                    var r = t[i];
                    r.event(Ue.MOUSE_WHEEL, this._event.setTo(Ue.MOUSE_WHEEL, r, this._target))
                }
            }
        }, {
            key: "onMouseMove",
            value: function(e) {
                Et.I.onMouseMove(e, this._tTouchID)
            }
        }, {
            key: "onMouseDown",
            value: function(e) {
                if (bt.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                    var t = i.stage.focus._tf || i.stage.focus,
                        n = e._tf || e;
                    n instanceof bt && n.multiline == t.multiline ? t._focusOut() : t.focus = !1
                }
                Et.I.onMouseDown(e, this._tTouchID, this._isLeftMouse)
            }
        }, {
            key: "onMouseUp",
            value: function(e) {
                Et.I.onMouseUp(e, this._tTouchID, this._isLeftMouse)
            }
        }, {
            key: "check",
            value: function(e, t, i, n) {
                this._point.setTo(t, i), e.fromParentPoint(this._point), t = this._point.x, i = this._point.y;
                var r = e._style.scrollRect;
                if (r && (this._rect.setTo(r.x, r.y, r.width, r.height), !this._rect.contains(t, i)))
                    return !1;
                if (!this.disableMouseEvent) {
                    if (e.hitTestPrior && !e.mouseThrough && !this.hitTest(e, t, i))
                        return !1;
                    for (var a = e._children.length - 1; a > -1; a--) {
                        var s = e._children[a];
                        if (!s.destroyed && s._mouseState > 1 && s._visible && this.check(s, t, i, n))
                            return !0
                    }
                    for (a = e._extUIChild.length - 1; a >= 0; a--) {
                        var o = e._extUIChild[a];
                        if (!o.destroyed && o._mouseState > 1 && o._visible && this.check(o, t, i, n))
                            return !0
                    }
                }
                var l = !(!e.hitTestPrior || e.mouseThrough || this.disableMouseEvent) || this.hitTest(e, t, i);
                return l ? (this._target = e, n.call(this, e), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : n === this.onMouseUp && e === this._stage && (this._target = this._stage, n.call(this, this._target)), l
            }
        }, {
            key: "hitTest",
            value: function(e, t, i) {
                var n = !1;
                e.scrollRect && (t -= e._style.scrollRect.x, i -= e._style.scrollRect.y);
                var r = e._style.hitArea;
                return r && r._hit ? r.contains(t, i) : ((e.width > 0 && e.height > 0 || e.mouseThrough || r) && (n = e.mouseThrough ? e.getGraphicBounds().contains(t, i) : (r || this._rect.setTo(0, 0, e.width, e.height)).contains(t, i)), n)
            }
        }, {
            key: "_checkAllBaseUI",
            value: function(e, t, i) {
                var n = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
                return !!n || (n = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || n)
            }
        }, {
            key: "check3DUI",
            value: function(e, t, i) {
                for (var n = this._stage._3dUI, r = 0, a = !1; r < n.length; r++) {
                    var s = n[r];
                    this._stage._curUIBase = s, !s.destroyed && s._mouseState > 1 && s._visible && (a = a || this.check(s, this.mouseX, this.mouseY, i))
                }
                return this._stage._curUIBase = this._stage, a
            }
        }, {
            key: "handleExclusiveCapture",
            value: function(e, t, i) {
                if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                    var n;
                    this._point.setTo(e, t);
                    for (var r = 0; r < this._captureChain.length; r++)
                        (n = this._captureChain[r]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0
                }
                return !1
            }
        }, {
            key: "handleCapture",
            value: function(e, t, i) {
                if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                    var n;
                    this._point.setTo(e, t);
                    for (var r = 0; r < this._captureChain.length; r++)
                        (n = this._captureChain[r]).fromParentPoint(this._point);
                    return this._target = n, i.call(this, n), !0
                }
                return !1
            }
        }, {
            key: "runEvent",
            value: function(e) {
                var t, i, n;
                switch ("mousemove" !== e.type && (this._prePoint.x = this._prePoint.y = -1e6), e.type) {
                    case "mousedown":
                        this._touchIDs[0] = this._id++, MouseManager._isTouchRespond ? MouseManager._isTouchRespond = !1 : (this._isLeftMouse = 0 === e.button, this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "mouseup":
                        this._isLeftMouse = 0 === e.button, this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                        break;
                    case "mousemove":
                        Math.abs(this._prePoint.x - e.clientX) + Math.abs(this._prePoint.y - e.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = e.clientX, this._prePoint.y = e.clientY, this.initEvent(e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "touchstart":
                        MouseManager._isTouchRespond = !0, this._isLeftMouse = !0;
                        var r = e.changedTouches;
                        for (t = 0, i = r.length; t < i; t++)
                            n = r[t], (MouseManager.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = n.identifier, this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[n.identifier] = this._id++, this.initEvent(n, e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "touchend":
                    case "touchcancel":
                        MouseManager._isTouchRespond = !0, this._isLeftMouse = !0;
                        var a = e.changedTouches;
                        for (t = 0, i = a.length; t < i; t++) {
                            if (n = a[t], MouseManager.multiTouchEnabled || n.identifier == this._curTouchID)
                                this._curTouchID = NaN, this.initEvent(n, e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null)
                        }
                        break;
                    case "touchmove":
                        var s = e.changedTouches;
                        for (t = 0, i = s.length; t < i; t++)
                            n = s[t], (MouseManager.multiTouchEnabled || n.identifier == this._curTouchID) && (this.initEvent(n, e), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "wheel":
                    case "mousewheel":
                    case "DOMMouseScroll":
                        this.checkMouseWheel(e);
                        break;
                    case "mouseout":
                        Et.I.stageMouseOut();
                        break;
                    case "mouseover":
                        this._stage.event(Ue.MOUSE_OVER, this._event.setTo(Ue.MOUSE_OVER, this._stage, this._stage))
                }
            }
        }, {
            key: "setCapture",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._captureSp = e, this._captureExlusiveMode = t, this._captureChain.length = 0, this._captureChain.push(e);
                for (var n = e; n != i.stage && n != i.stage._curUIBase && (n = n.parent);)
                    this._captureChain.splice(0, 0, n)
            }
        }, {
            key: "releaseCapture",
            value: function() {
                console.log("release capture"), this._captureSp = null
            }
        }]), MouseManager
    }();
    At.instance = new At, At.enabled = !0, At.multiTouchEnabled = !0, At._isFirstTouch = !0;
    var Mt = function() {
        function CallLater() {
            _classCallCheck(this, CallLater), this._pool = [], this._map = {}, this._laters = []
        }
        return _createClass(CallLater, [{
            key: "_update",
            value: function() {
                var e = this._laters,
                    t = e.length;
                if (t > 0) {
                    for (var i = 0, n = t - 1; i <= n; i++) {
                        var r = e[i];
                        this._map[r.key] = null, null !== r.method && (r.run(), r.clear()), this._pool.push(r), i === n && (n = e.length - 1)
                    }
                    e.length = 0
                }
            }
        }, {
            key: "_getHandler",
            value: function(e, t) {
                var n = e ? e.$_GID || (e.$_GID = i.Utils.getGID()) : 0,
                    r = t.$_TID || (t.$_TID = i.Timer._mid++);
                return this._map[n + "." + r]
            }
        }, {
            key: "callLater",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == this._getHandler(e, t)) {
                    var n;
                    (n = this._pool.length ? this._pool.pop() : new wt).caller = e, n.method = t, n.args = i;
                    var r = e ? e.$_GID : 0,
                        a = t.$_TID;
                    n.key = r + "." + a, this._map[n.key] = n, this._laters.push(n)
                }
            }
        }, {
            key: "runCallLater",
            value: function(e, t) {
                var i = this._getHandler(e, t);
                i && null != i.method && (this._map[i.key] = null, i.run(), i.clear())
            }
        }]), CallLater
    }();
    Mt.I = new Mt;
    var wt = function() {
            function LaterHandler() {
                _classCallCheck(this, LaterHandler)
            }
            return _createClass(LaterHandler, [{
                key: "clear",
                value: function() {
                    this.caller = null, this.method = null, this.args = null
                }
            }, {
                key: "run",
                value: function() {
                    var e = this.caller;
                    if (e && e.destroyed)
                        return this.clear();
                    var t = this.method,
                        i = this.args;
                    null != t && (i ? t.apply(e, i) : t.call(e))
                }
            }]), LaterHandler
        }(),
        Lt = function RunDriver() {
            _classCallCheck(this, RunDriver)
        };
    Lt.createShaderCondition = function(e) {
        var t = "(function() {return " + e + ";})";
        return window.Laya._runScript(t)
    }, Lt.changeWebGLSize = function(e, t) {
        $e.onStageResize(e, t)
    };
    var It = function(e) {
        function Stage() {
            var e;
            _classCallCheck(this, Stage), (e = _possibleConstructorReturn(this, _getPrototypeOf(Stage).call(this))).offset = new v, e._frameRate = "fast", e.designWidth = 0, e.designHeight = 0, e.canvasRotation = !1, e.canvasDegree = 0, e.renderingEnabled = !0, e.screenAdaptationEnabled = !0, e._canvasTransform = new f, e._screenMode = "none", e._scaleMode = "noscale", e._alignV = "top", e._alignH = "left", e._bgColor = "black", e._mouseMoveTime = 0, e._renderCount = 0, e._safariOffsetY = 0, e._frameStartTime = 0, e._previousOrientation = ze.window.orientation, e._wgColor = [0, 0, 0, 1], e._scene3Ds = [], e._globalRepaintSet = !1, e._globalRepaintGet = !1, e._3dUI = [], e._curUIBase = null, e.useRetinalCanvas = !1, _get(_getPrototypeOf(Stage.prototype), "set_transform", _assertThisInitialized(e)).call(_assertThisInitialized(e), e._createTransform()), e.mouseEnabled = !0, e.hitTestPrior = !0, e.autoSize = !1, e._setBit(dt.DISPLAYED_INSTAGE, !0), e._setBit(dt.ACTIVE_INHIERARCHY, !0), e._isFocused = !0, e._isVisibility = !0, e.useRetinalCanvas = t.useRetinalCanvas;
            var i = ze.window;
            i.addEventListener("focus", (function() {
                e._isFocused = !0, e.event(Ue.FOCUS), e.event(Ue.FOCUS_CHANGE)
            })), i.addEventListener("blur", (function() {
                e._isFocused = !1, e.event(Ue.BLUR), e.event(Ue.FOCUS_CHANGE), e._isInputting() && (bt.inputElement.target.focus = !1)
            }));
            var n = "visibilityState",
                r = "visibilitychange",
                a = i.document;
            return void 0 !== a.hidden ? (r = "visibilitychange", n = "visibilityState") : void 0 !== a.mozHidden ? (r = "mozvisibilitychange", n = "mozVisibilityState") : void 0 !== a.msHidden ? (r = "msvisibilitychange", n = "msVisibilityState") : void 0 !== a.webkitHidden && (r = "webkitvisibilitychange", n = "webkitVisibilityState"), i.document.addEventListener(r, (function() {
                "hidden" == ze.document[n] ? (e._isVisibility = !1, e._isInputting() && (bt.inputElement.target.focus = !1)) : e._isVisibility = !0, e.renderingEnabled = e._isVisibility, e.event(Ue.VISIBILITY_CHANGE)
            })), i.addEventListener("resize", (function() {
                var t = ze.window.orientation;
                null != t && t != e._previousOrientation && e._isInputting() && (bt.inputElement.target.focus = !1), e._previousOrientation = t, e._isInputting() || (ze.onSafari && (e._safariOffsetY = (ze.window.__innerHeight || ze.document.body.clientHeight || ze.document.documentElement.clientHeight) - ze.window.innerHeight), e._resetCanvas())
            })), i.addEventListener("orientationchange", (function(t) {
                e._resetCanvas()
            })), e.on(Ue.MOUSE_MOVE, _assertThisInitialized(e), e._onmouseMove), ze.onMobile && e.on(Ue.MOUSE_DOWN, _assertThisInitialized(e), e._onmouseMove), e
        }
        return _inherits(Stage, e), _createClass(Stage, [{
            key: "_isInputting",
            value: function() {
                return ze.onMobile && bt.isInputting
            }
        }, {
            key: "_changeCanvasSize",
            value: function() {
                this.setScreenSize(ze.clientWidth * ze.pixelRatio, ze.clientHeight * ze.pixelRatio)
            }
        }, {
            key: "_resetCanvas",
            value: function() {
                this.screenAdaptationEnabled && this._changeCanvasSize()
            }
        }, {
            key: "setScreenSize",
            value: function(e, t) {
                var i = !1;
                if (this._screenMode !== Stage.SCREEN_NONE && (i = (e / t < 1 ? Stage.SCREEN_VERTICAL : Stage.SCREEN_HORIZONTAL) !== this._screenMode)) {
                    var n = t;
                    t = e, e = n
                }
                this.canvasRotation = i;
                var r = tt._mainCanvas,
                    a = r.source.style,
                    s = this._canvasTransform.identity(),
                    o = this._scaleMode,
                    l = e / this.designWidth,
                    h = t / this.designHeight,
                    u = this.useRetinalCanvas ? e : this.designWidth,
                    c = this.useRetinalCanvas ? t : this.designHeight,
                    _ = e,
                    d = t,
                    f = ze.pixelRatio;
                switch (this._width = this.designWidth, this._height = this.designHeight, o) {
                    case Stage.SCALE_NOSCALE:
                        l = h = 1, _ = this.designWidth, d = this.designHeight;
                        break;
                    case Stage.SCALE_SHOWALL:
                        l = h = Math.min(l, h), u = _ = Math.round(this.designWidth * l), c = d = Math.round(this.designHeight * h);
                        break;
                    case Stage.SCALE_NOBORDER:
                        l = h = Math.max(l, h), _ = Math.round(this.designWidth * l), d = Math.round(this.designHeight * h);
                        break;
                    case Stage.SCALE_FULL:
                        l = h = 1, this._width = u = e, this._height = c = t;
                        break;
                    case Stage.SCALE_FIXED_WIDTH:
                        h = l, this._height = c = Math.round(t / l);
                        break;
                    case Stage.SCALE_FIXED_HEIGHT:
                        l = h, this._width = u = Math.round(e / h);
                        break;
                    case Stage.SCALE_FIXED_AUTO:
                        e / t < this.designWidth / this.designHeight ? (h = l, this._height = c = Math.round(t / l)) : (l = h, this._width = u = Math.round(e / h))
                }
                this.useRetinalCanvas && (_ = u = e, d = c = t), l *= this.scaleX, h *= this.scaleY, 1 === l && 1 === h ? this.transform.identity() : (this.transform.a = this._formatData(l / (_ / u)), this.transform.d = this._formatData(h / (d / c))), r.size(u, c), Lt.changeWebGLSize(u, c), s.scale(_ / u / f, d / c / f), this._alignH === Stage.ALIGN_LEFT ? this.offset.x = 0 : this._alignH === Stage.ALIGN_RIGHT ? this.offset.x = e - _ : this.offset.x = .5 * (e - _) / f, this._alignV === Stage.ALIGN_TOP ? this.offset.y = 0 : this._alignV === Stage.ALIGN_BOTTOM ? this.offset.y = t - d : this.offset.y = .5 * (t - d) / f, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), s.translate(this.offset.x, this.offset.y), this._safariOffsetY && s.translate(0, this._safariOffsetY), this.canvasDegree = 0, i && (this._screenMode === Stage.SCREEN_HORIZONTAL ? (s.rotate(Math.PI / 2), s.translate(t / f, 0), this.canvasDegree = 90) : (s.rotate(-Math.PI / 2), s.translate(0, e / f), this.canvasDegree = -90)), s.a = this._formatData(s.a), s.d = this._formatData(s.d), s.tx = this._formatData(s.tx), s.ty = this._formatData(s.ty), _get(_getPrototypeOf(Stage.prototype), "set_transform", this).call(this, this.transform), a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px", a.transform = a.webkitTransform = a.msTransform = a.mozTransform = a.oTransform = "matrix(" + s.toString() + ")", this._safariOffsetY && s.translate(0, -this._safariOffsetY), s.translate(parseInt(a.left) || 0, parseInt(a.top) || 0), this.visible = !0, this._repaint |= at.REPAINT_CACHE, this.event(Ue.RESIZE)
            }
        }, {
            key: "_formatData",
            value: function(e) {
                return Math.abs(e) < 1e-6 ? 0 : Math.abs(1 - e) < .001 ? e > 0 ? 1 : -1 : e
            }
        }, {
            key: "getMousePoint",
            value: function() {
                return v.TEMP.setTo(this.mouseX, this.mouseY)
            }
        }, {
            key: "repaint",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at.REPAINT_CACHE;
                this._repaint |= e
            }
        }, {
            key: "parentRepaint",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at.REPAINT_CACHE
            }
        }, {
            key: "_loop",
            value: function() {
                return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, this.render(tt._context, 0, 0), !0
            }
        }, {
            key: "getFrameTm",
            value: function() {
                return this._frameStartTime
            }
        }, {
            key: "_onmouseMove",
            value: function(e) {
                this._mouseMoveTime = ze.now()
            }
        }, {
            key: "getTimeFromFrameStart",
            value: function() {
                return ze.now() - this._frameStartTime
            }
        }, {
            key: "render",
            value: function(e, t, i) {
                if (window.conch)
                    this.renderToNative(e, t, i);
                else {
                    if (this._frameRate === Stage.FRAME_SLEEP) {
                        var n = ze.now();
                        if (!(n - this._frameStartTime >= 1e3))
                            return;
                        this._frameStartTime = n
                    } else {
                        if (!this._visible)
                            return this._renderCount++, void(this._renderCount % 5 == 0 && (Mt.I._update(), G.loopCount++, ge.loopCount = G.loopCount, this._updateTimers()));
                        this._frameStartTime = ze.now(), ge.loopStTm = this._frameStartTime
                    }
                    this._renderCount++;
                    var r = (this._frameRate === Stage.FRAME_MOUSE ? this._frameStartTime - this._mouseMoveTime < 2e3 ? Stage.FRAME_FAST : Stage.FRAME_SLOW : this._frameRate) !== Stage.FRAME_SLOW,
                        a = this._renderCount % 2 == 0;
                    if (G.renderSlow = !r, r || a) {
                        if (Mt.I._update(), G.loopCount++, ge.loopCount = G.loopCount, this.renderingEnabled) {
                            for (var s = 0, o = this._scene3Ds.length; s < o; s++)
                                this._scene3Ds[s]._update();
                            e.clear(), _get(_getPrototypeOf(Stage.prototype), "render", this).call(this, e, t, i), G._StatRender.renderNotCanvas(e, t, i)
                        }
                        this.renderingEnabled && (Stage.clear(this._bgColor), e.flush(), ct.instance && ct.getInstance().endDispose()), this._updateTimers()
                    }
                }
            }
        }, {
            key: "renderToNative",
            value: function(e, t, i) {
                if (this._renderCount++, this._visible) {
                    if (Mt.I._update(), G.loopCount++, ge.loopCount = G.loopCount, this.renderingEnabled) {
                        for (var n = 0, r = this._scene3Ds.length; n < r; n++)
                            this._scene3Ds[n]._update();
                        e.clear(), _get(_getPrototypeOf(Stage.prototype), "render", this).call(this, e, t, i), G._StatRender.renderNotCanvas(e, t, i)
                    }
                    this.renderingEnabled && (Stage.clear(this._bgColor), e.flush(), ct.instance && ct.getInstance().endDispose()), this._updateTimers()
                } else
                    this._renderCount % 5 == 0 && (Mt.I._update(), G.loopCount++, ge.loopCount = G.loopCount, this._updateTimers())
            }
        }, {
            key: "_updateTimers",
            value: function() {
                i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(), i.lateTimer._update(), i.timer._update()
            }
        }, {
            key: "_requestFullscreen",
            value: function() {
                var e = ze.document.documentElement;
                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }
        }, {
            key: "_fullScreenChanged",
            value: function() {
                i.stage.event(Ue.FULL_SCREEN_CHANGE)
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                var e = ze.document;
                e.exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen()
            }
        }, {
            key: "isGlobalRepaint",
            value: function() {
                return this._globalRepaintGet
            }
        }, {
            key: "setGlobalRepaint",
            value: function() {
                this._globalRepaintSet = !0
            }
        }, {
            key: "add3DUI",
            value: function(e) {
                var t = e.rootView;
                this._3dUI.indexOf(t) >= 0 || this._3dUI.push(t)
            }
        }, {
            key: "remove3DUI",
            value: function(e) {
                var t = e.rootView,
                    i = this._3dUI.indexOf(t);
                return i >= 0 && (this._3dUI.splice(i, 1), !0)
            }
        }, {
            key: "width",
            set: function(e) {
                this.designWidth = e, _get(_getPrototypeOf(Stage.prototype), "set_width", this).call(this, e), i.systemTimer.callLater(this, this._changeCanvasSize)
            },
            get: function() {
                return _get(_getPrototypeOf(Stage.prototype), "get_width", this).call(this)
            }
        }, {
            key: "height",
            set: function(e) {
                this.designHeight = e, _get(_getPrototypeOf(Stage.prototype), "set_height", this).call(this, e), i.systemTimer.callLater(this, this._changeCanvasSize)
            },
            get: function() {
                return _get(_getPrototypeOf(Stage.prototype), "get_height", this).call(this)
            }
        }, {
            key: "transform",
            set: function(e) {
                _get(_getPrototypeOf(Stage.prototype), "set_transform", this).call(this, e)
            },
            get: function() {
                return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform()
            }
        }, {
            key: "isFocused",
            get: function() {
                return this._isFocused
            }
        }, {
            key: "isVisibility",
            get: function() {
                return this._isVisibility
            }
        }, {
            key: "scaleMode",
            get: function() {
                return this._scaleMode
            },
            set: function(e) {
                this._scaleMode = e, i.systemTimer.callLater(this, this._changeCanvasSize)
            }
        }, {
            key: "alignH",
            get: function() {
                return this._alignH
            },
            set: function(e) {
                this._alignH = e, i.systemTimer.callLater(this, this._changeCanvasSize)
            }
        }, {
            key: "alignV",
            get: function() {
                return this._alignV
            },
            set: function(e) {
                this._alignV = e, i.systemTimer.callLater(this, this._changeCanvasSize)
            }
        }, {
            key: "bgColor",
            get: function() {
                return this._bgColor
            },
            set: function(e) {
                this._bgColor = e, this._wgColor = e ? j.create(e).arrColor : null, tt.canvas.style.background = e || "none"
            }
        }, {
            key: "mouseX",
            get: function() {
                return Math.round(At.instance.mouseX / this.clientScaleX)
            }
        }, {
            key: "mouseY",
            get: function() {
                return Math.round(At.instance.mouseY / this.clientScaleY)
            }
        }, {
            key: "clientScaleX",
            get: function() {
                return this._transform ? this._transform.getScaleX() : 1
            }
        }, {
            key: "clientScaleY",
            get: function() {
                return this._transform ? this._transform.getScaleY() : 1
            }
        }, {
            key: "screenMode",
            get: function() {
                return this._screenMode
            },
            set: function(e) {
                this._screenMode = e
            }
        }, {
            key: "visible",
            set: function(e) {
                this.visible !== e && (_get(_getPrototypeOf(Stage.prototype), "set_visible", this).call(this, e), tt._mainCanvas.source.style.visibility = e ? "visible" : "hidden")
            },
            get: function() {
                return _get(_getPrototypeOf(Stage.prototype), "visible", this)
            }
        }, {
            key: "fullScreenEnabled",
            set: function(e) {
                var t = ze.document,
                    i = tt.canvas;
                e ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), t.addEventListener("fullscreenchange", this._fullScreenChanged), t.addEventListener("mozfullscreenchange", this._fullScreenChanged), t.addEventListener("webkitfullscreenchange", this._fullScreenChanged), t.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), t.removeEventListener("fullscreenchange", this._fullScreenChanged), t.removeEventListener("mozfullscreenchange", this._fullScreenChanged), t.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), t.removeEventListener("msfullscreenchange", this._fullScreenChanged))
            }
        }, {
            key: "frameRate",
            get: function() {
                return i.Render.isConchApp ? this._frameRateNative : this._frameRate
            },
            set: function(e) {
                if (i.Render.isConchApp) {
                    var t = window.conch;
                    switch (e) {
                        case Stage.FRAME_FAST:
                            t.config.setLimitFPS(60);
                            break;
                        case Stage.FRAME_MOUSE:
                            t.config.setMouseFrame(2e3);
                            break;
                        case Stage.FRAME_SLOW:
                            t.config.setSlowFrame(!0);
                            break;
                        case Stage.FRAME_SLEEP:
                            t.config.setLimitFPS(1)
                    }
                    this._frameRateNative = e
                } else
                    this._frameRate = e
            }
        }]), Stage
    }(kt);
    It.SCALE_NOSCALE = "noscale", It.SCALE_EXACTFIT = "exactfit", It.SCALE_SHOWALL = "showall", It.SCALE_NOBORDER = "noborder", It.SCALE_FULL = "full", It.SCALE_FIXED_WIDTH = "fixedwidth", It.SCALE_FIXED_HEIGHT = "fixedheight", It.SCALE_FIXED_AUTO = "fixedauto", It.ALIGN_LEFT = "left", It.ALIGN_RIGHT = "right", It.ALIGN_CENTER = "center", It.ALIGN_TOP = "top", It.ALIGN_MIDDLE = "middle", It.ALIGN_BOTTOM = "bottom", It.SCREEN_NONE = "none", It.SCREEN_HORIZONTAL = "horizontal", It.SCREEN_VERTICAL = "vertical", It.FRAME_FAST = "fast", It.FRAME_SLOW = "slow", It.FRAME_MOUSE = "mouse", It.FRAME_SLEEP = "sleep", It.clear = function(e) {
        qe.set2DRenderConfig();
        var n = g.instance;
        P.worldScissorTest && n.disable(n.SCISSOR_TEST);
        var r = tt.context,
            a = 0 == r._submits._length || t.preserveDrawingBuffer ? j.create(e).arrColor : i.stage._wgColor;
        a ? r.clearBG(a[0], a[1], a[2], a[3]) : r.clearBG(0, 0, 0, 0), P.clear()
    }, yt.regClass("laya.display.Stage", It), yt.regClass("Laya.Stage", It);
    var Pt = function() {
        function KeyBoardManager() {
            _classCallCheck(this, KeyBoardManager)
        }
        return _createClass(KeyBoardManager, null, [{
            key: "__init__",
            value: function() {
                KeyBoardManager._addEvent("keydown"), KeyBoardManager._addEvent("keypress"), KeyBoardManager._addEvent("keyup")
            }
        }, {
            key: "_addEvent",
            value: function(e) {
                i.Browser.document.addEventListener(e, (function(t) {
                    KeyBoardManager._dispatch(t, e)
                }), !0)
            }
        }, {
            key: "_dispatch",
            value: function(e, t) {
                if (KeyBoardManager.enabled) {
                    KeyBoardManager._event._stoped = !1, KeyBoardManager._event.nativeEvent = e, KeyBoardManager._event.keyCode = e.keyCode || e.which || e.charCode, "keydown" === t ? KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = !0 : "keyup" === t && (KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = null);
                    for (var n = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = n; r;)
                        r.event(t, KeyBoardManager._event.setTo(t, r, n)), r = r.parent
                }
            }
        }, {
            key: "hasKeyDown",
            value: function(e) {
                return KeyBoardManager._pressKeys[e]
            }
        }]), KeyBoardManager
    }();
    Pt._pressKeys = {}, Pt.enabled = !0, Pt._event = new Ue;
    var Dt = function(e) {
            function SoundChannel() {
                var e;
                return _classCallCheck(this, SoundChannel), (e = _possibleConstructorReturn(this, _getPrototypeOf(SoundChannel).apply(this, arguments))).isStopped = !1, e
            }
            return _inherits(SoundChannel, e), _createClass(SoundChannel, [{
                key: "play",
                value: function() {}
            }, {
                key: "stop",
                value: function() {
                    this.completeHandler && this.completeHandler.run()
                }
            }, {
                key: "pause",
                value: function() {}
            }, {
                key: "resume",
                value: function() {}
            }, {
                key: "__runComplete",
                value: function(e) {
                    e && e.run()
                }
            }, {
                key: "volume",
                set: function(e) {},
                get: function() {
                    return 1
                }
            }, {
                key: "position",
                get: function() {
                    return 0
                }
            }, {
                key: "duration",
                get: function() {
                    return 0
                }
            }]), SoundChannel
        }(T),
        Bt = function(e) {
            function AudioSoundChannel(e) {
                var t;
                return _classCallCheck(this, AudioSoundChannel), (t = _possibleConstructorReturn(this, _getPrototypeOf(AudioSoundChannel).call(this)))._audio = null, t._onEnd = t.__onEnd.bind(_assertThisInitialized(t)), t._resumePlay = t.__resumePlay.bind(_assertThisInitialized(t)), e.addEventListener("ended", t._onEnd), t._audio = e, t
            }
            return _inherits(AudioSoundChannel, e), _createClass(AudioSoundChannel, [{
                key: "__onEnd",
                value: function(e) {
                    if (1 == this.loops)
                        return this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event(Ue.COMPLETE);
                    this.loops > 0 && this.loops--, this.startTime = 0, this.play()
                }
            }, {
                key: "__resumePlay",
                value: function() {
                    if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), !this.isStopped)
                        try {
                            this._audio.currentTime = this.startTime, ze.container.appendChild(this._audio), this._audio.play()
                        } catch (e) {
                            this.event(Ue.ERROR)
                        }
                }
            }, {
                key: "play",
                value: function() {
                    this.isStopped = !1;
                    try {
                        this._audio.playbackRate = i.SoundManager.playbackRate, this._audio.currentTime = this.startTime
                    } catch (e) {
                        return void this._audio.addEventListener("canplay", this._resumePlay)
                    }
                    i.SoundManager.addChannel(this), ze.container.appendChild(this._audio), "play" in this._audio && this._audio.play()
                }
            }, {
                key: "stop",
                value: function() {
                    _get(_getPrototypeOf(AudioSoundChannel.prototype), "stop", this).call(this), this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && i.Render.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), i.Browser.onIE || this._audio != i.AudioSound._musicAudio && i.Pool.recover("audio:" + this.url, this._audio), ze.removeElement(this._audio), this._audio = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url))
                }
            }, {
                key: "pause",
                value: function() {
                    this.isStopped = !0, i.SoundManager.removeChannel(this), "pause" in this._audio && this._audio.pause(), i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url)
                }
            }, {
                key: "resume",
                value: function() {
                    var e = this._audio;
                    e && (this.isStopped = !1, 0 == e.readyState && (e.src = this.url, e.addEventListener("canplay", this._resumePlay), e.load()), i.SoundManager.addChannel(this), "play" in e && e.play())
                }
            }, {
                key: "position",
                get: function() {
                    return this._audio ? this._audio.currentTime : 0
                }
            }, {
                key: "duration",
                get: function() {
                    return this._audio ? this._audio.duration : 0
                }
            }, {
                key: "volume",
                set: function(e) {
                    this._audio && (this._audio.volume = e)
                },
                get: function() {
                    return this._audio ? this._audio.volume : 1
                }
            }]), AudioSoundChannel
        }(Dt),
        Ot = function(e) {
            function AudioSound() {
                var e;
                return _classCallCheck(this, AudioSound), (e = _possibleConstructorReturn(this, _getPrototypeOf(AudioSound).apply(this, arguments))).loaded = !1, e
            }
            return _inherits(AudioSound, e), _createClass(AudioSound, [{
                key: "dispose",
                value: function() {
                    var e = AudioSound._audioCache[this.url];
                    n.clearBySign("audio:" + this.url), e && (tt.isConchApp || (e.src = ""), delete AudioSound._audioCache[this.url])
                }
            }, {
                key: "load",
                value: function(e) {
                    var t;
                    if (e = x.formatURL(e), this.url = e, e == i.SoundManager._bgMusic ? (AudioSound._initMusicAudio(), (t = AudioSound._musicAudio).src != e && (AudioSound._audioCache[t.src] = null, t = null)) : t = AudioSound._audioCache[e], t && t.readyState >= 2)
                        this.event(Ue.COMPLETE);
                    else {
                        t || (e == i.SoundManager._bgMusic ? (AudioSound._initMusicAudio(), t = AudioSound._musicAudio) : t = ze.createElement("audio"), AudioSound._audioCache[e] = t, t.src = e), t.addEventListener("canplaythrough", onLoaded), t.addEventListener("error", onErr);
                        var n = this;
                        this.audio = t, t.load ? t.load() : onErr()
                    }

                    function onLoaded() {
                        offs(), n.loaded = !0, n.event(Ue.COMPLETE)
                    }

                    function onErr() {
                        t.load = null, offs(), n.event(Ue.ERROR)
                    }

                    function offs() {
                        t.removeEventListener("canplaythrough", onLoaded), t.removeEventListener("error", onErr)
                    }
                }
            }, {
                key: "play",
                value: function() {
                    var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!this.url)
                        return null;
                    if (!(e = this.url == i.SoundManager._bgMusic ? AudioSound._musicAudio : AudioSound._audioCache[this.url]))
                        return null;
                    t = n.getItem("audio:" + this.url), tt.isConchApp ? t || ((t = ze.createElement("audio")).src = this.url) : this.url == i.SoundManager._bgMusic ? (AudioSound._initMusicAudio(), (t = AudioSound._musicAudio).src = this.url) : t = t || e.cloneNode(!0);
                    var s = new Bt(t);
                    return s.url = this.url, s.loops = a, s.startTime = r, s.play(), i.SoundManager.addChannel(s), s
                }
            }, {
                key: "duration",
                get: function() {
                    var e;
                    return (e = AudioSound._audioCache[this.url]) ? e.duration : 0
                }
            }], [{
                key: "_initMusicAudio",
                value: function() {
                    AudioSound._musicAudio || (AudioSound._musicAudio || (AudioSound._musicAudio = ze.createElement("audio")), tt.isConchApp || ze.document.addEventListener("mousedown", AudioSound._makeMusicOK))
                }
            }, {
                key: "_makeMusicOK",
                value: function() {
                    ze.document.removeEventListener("mousedown", AudioSound._makeMusicOK), AudioSound._musicAudio.src ? AudioSound._musicAudio.play() : (AudioSound._musicAudio.src = "", AudioSound._musicAudio.load())
                }
            }]), AudioSound
        }(T);
    Ot._audioCache = {};
    var Ft = function(e) {
        function WebAudioSoundChannel() {
            var e;
            return _classCallCheck(this, WebAudioSoundChannel), (e = _possibleConstructorReturn(this, _getPrototypeOf(WebAudioSoundChannel).call(this))).bufferSource = null, e._currentTime = 0, e._volume = 1, e._startTime = 0, e._pauseTime = 0, e.context = i.WebAudioSound.ctx, e._onPlayEnd = K.bind(e.__onPlayEnd, _assertThisInitialized(e)), e.context.createGain ? e.gain = e.context.createGain() : e.gain = e.context.createGainNode(), e
        }
        return _inherits(WebAudioSoundChannel, e), _createClass(WebAudioSoundChannel, [{
            key: "play",
            value: function() {
                if (i.SoundManager.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                    if (this.startTime >= this.duration)
                        return stop();
                    var e = this.context,
                        t = this.gain,
                        n = e.createBufferSource();
                    this.bufferSource = n, n.buffer = this.audioBuffer, n.connect(t), t && t.disconnect(), t.connect(e.destination), n.onended = this._onPlayEnd, this._startTime = ze.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, WebAudioSoundChannel.SetTargetDelay) : this.gain.gain.value = this._volume, 0 == this.loops && (n.loop = !0), n.playbackRate.setTargetAtTime ? n.playbackRate.setTargetAtTime(i.SoundManager.playbackRate, this.context.currentTime, WebAudioSoundChannel.SetTargetDelay) : n.playbackRate.value = i.SoundManager.playbackRate, n.start(0, this.startTime), this._currentTime = 0
                }
            }
        }, {
            key: "__onPlayEnd",
            value: function() {
                if (1 == this.loops)
                    return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event(Ue.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play()
            }
        }, {
            key: "_clearBufferSource",
            value: function() {
                if (this.bufferSource) {
                    var e = this.bufferSource;
                    e.stop ? e.stop(0) : e.noteOff(0), e.disconnect(0), e.onended = null, WebAudioSoundChannel._tryCleanFailed || this._tryClearBuffer(e), this.bufferSource = null
                }
            }
        }, {
            key: "_tryClearBuffer",
            value: function(e) {
                if (ze.onMac)
                    try {
                        e.buffer = i.WebAudioSound._miniBuffer
                    } catch (e) {
                        WebAudioSoundChannel._tryCleanFailed = !0
                    }
                else
                    try {
                        e.buffer = null
                    } catch (e) {
                        WebAudioSoundChannel._tryCleanFailed = !0
                    }
            }
        }, {
            key: "stop",
            value: function() {
                _get(_getPrototypeOf(WebAudioSoundChannel.prototype), "stop", this).call(this), this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url)
            }
        }, {
            key: "pause",
            value: function() {
                this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this), i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url)
            }
        }, {
            key: "resume",
            value: function() {
                this.startTime = this._pauseTime, this.play()
            }
        }, {
            key: "position",
            get: function() {
                return this.bufferSource ? (ze.now() - this._startTime) / 1e3 + this.startTime : 0
            }
        }, {
            key: "duration",
            get: function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0
            }
        }, {
            key: "volume",
            set: function(e) {
                this._volume = e, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(e, this.context.currentTime, WebAudioSoundChannel.SetTargetDelay) : this.gain.gain.value = e)
            },
            get: function() {
                return this._volume
            }
        }]), WebAudioSoundChannel
    }(Dt);
    Ft._tryCleanFailed = !1, Ft.SetTargetDelay = .001;
    var Nt = function(e) {
        function WebAudioSound() {
            var e;
            return _classCallCheck(this, WebAudioSound), (e = _possibleConstructorReturn(this, _getPrototypeOf(WebAudioSound).apply(this, arguments))).loaded = !1, e._disposed = !1, e
        }
        return _inherits(WebAudioSound, e), _createClass(WebAudioSound, [{
            key: "load",
            value: function(e) {
                var t = this;
                if (e = x.formatURL(e), this.url = e, this.audioBuffer = WebAudioSound._dataCache[e], this.audioBuffer)
                    this._loaded(this.audioBuffer);
                else if (WebAudioSound.e.on("loaded:" + e, this, this._loaded), WebAudioSound.e.on("err:" + e, this, this._err), !WebAudioSound.__loadingSound[e]) {
                    WebAudioSound.__loadingSound[e] = !0;
                    var i = new XMLHttpRequest;
                    i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = function() {
                        t._disposed ? t._removeLoadEvents() : (t.data = i.response, WebAudioSound.buffs.push({
                            buffer: t.data,
                            url: t.url
                        }), WebAudioSound.decode())
                    }, i.onerror = function(e) {
                        t._err()
                    }, i.send()
                }
            }
        }, {
            key: "_err",
            value: function() {
                this._removeLoadEvents(), WebAudioSound.__loadingSound[this.url] = !1, this.event(Ue.ERROR)
            }
        }, {
            key: "_loaded",
            value: function(e) {
                this._removeLoadEvents(), this._disposed || (this.audioBuffer = e, WebAudioSound._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event(Ue.COMPLETE))
            }
        }, {
            key: "_removeLoadEvents",
            value: function() {
                WebAudioSound.e.off("loaded:" + this.url, this, this._loaded), WebAudioSound.e.off("err:" + this.url, this, this._err)
            }
        }, {
            key: "__playAfterLoaded",
            value: function() {
                if (this.__toPlays) {
                    var e, t, i, n;
                    for (t = (i = this.__toPlays).length, e = 0; e < t; e++)
                        (n = i[e])[2] && !n[2].isStopped && this.play(n[0], n[1], n[2]);
                    this.__toPlays.length = 0
                }
            }
        }, {
            key: "play",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return n = n || new Ft, this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([e, t, n]), this.once(Ue.COMPLETE, this, this.__playAfterLoaded), this.load(this.url)), n.url = this.url, n.loops = t, n.audioBuffer = this.audioBuffer, n.startTime = e, n.play(), i.SoundManager.addChannel(n), n
            }
        }, {
            key: "dispose",
            value: function() {
                this._disposed = !0, delete WebAudioSound._dataCache[this.url], delete WebAudioSound.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = []
            }
        }, {
            key: "duration",
            get: function() {
                return this.audioBuffer ? this.audioBuffer.duration : 0
            }
        }], [{
            key: "decode",
            value: function() {
                WebAudioSound.buffs.length <= 0 || WebAudioSound.isDecoding || (WebAudioSound.isDecoding = !0, WebAudioSound.tInfo = WebAudioSound.buffs.shift(), WebAudioSound.ctx.decodeAudioData(WebAudioSound.tInfo.buffer, WebAudioSound._done, WebAudioSound._fail))
            }
        }, {
            key: "_done",
            value: function(e) {
                WebAudioSound.e.event("loaded:" + WebAudioSound.tInfo.url, e), WebAudioSound.isDecoding = !1, WebAudioSound.decode()
            }
        }, {
            key: "_fail",
            value: function() {
                WebAudioSound.e.event("err:" + WebAudioSound.tInfo.url, null), WebAudioSound.isDecoding = !1, WebAudioSound.decode()
            }
        }, {
            key: "_playEmptySound",
            value: function() {
                if (null != WebAudioSound.ctx) {
                    var e = WebAudioSound.ctx.createBufferSource();
                    e.buffer = WebAudioSound._miniBuffer, e.connect(WebAudioSound.ctx.destination), e.start(0, 0, 0)
                }
            }
        }, {
            key: "_unlock",
            value: function() {
                WebAudioSound._unlocked || (WebAudioSound._playEmptySound(), "running" == WebAudioSound.ctx.state && (window.document.removeEventListener("mousedown", WebAudioSound._unlock, !0), window.document.removeEventListener("touchend", WebAudioSound._unlock, !0), window.document.removeEventListener("touchstart", WebAudioSound._unlock, !0), WebAudioSound._unlocked = !0))
            }
        }, {
            key: "initWebAudio",
            value: function() {
                "running" != WebAudioSound.ctx.state && (WebAudioSound._unlock(), window.document.addEventListener("mousedown", WebAudioSound._unlock, !0), window.document.addEventListener("touchend", WebAudioSound._unlock, !0), window.document.addEventListener("touchstart", WebAudioSound._unlock, !0))
            }
        }]), WebAudioSound
    }(T);
    Nt._dataCache = {}, Nt.webAudioEnabled = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, Nt.ctx = Nt.webAudioEnabled ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) : void 0, Nt.buffs = [], Nt.isDecoding = !1, Nt._miniBuffer = Nt.ctx ? Nt.ctx.createBuffer(1, 1, 22050) : void 0, Nt.e = new T, Nt._unlocked = !1, Nt.__loadingSound = {};
    var Gt = function() {
        function SoundManager() {
            _classCallCheck(this, SoundManager)
        }
        return _createClass(SoundManager, null, [{
            key: "__init__",
            value: function() {
                var e = i.Browser.window,
                    t = !!(e.AudioContext || e.webkitAudioContext || e.mozAudioContext);
                return t && Nt.initWebAudio(), SoundManager._soundClass = t ? Nt : Ot, Ot._initMusicAudio(), SoundManager._musicClass = Ot, t
            }
        }, {
            key: "addChannel",
            value: function(e) {
                SoundManager._channels.indexOf(e) >= 0 || SoundManager._channels.push(e)
            }
        }, {
            key: "removeChannel",
            value: function(e) {
                var t;
                for (t = SoundManager._channels.length - 1; t >= 0; t--)
                    SoundManager._channels[t] == e && SoundManager._channels.splice(t, 1)
            }
        }, {
            key: "disposeSoundLater",
            value: function(e) {
                SoundManager._lastSoundUsedTimeDic[e] = i.Browser.now(), SoundManager._isCheckingDispose || (SoundManager._isCheckingDispose = !0, i.timer.loop(5e3, null, SoundManager._checkDisposeSound))
            }
        }, {
            key: "_checkDisposeSound",
            value: function() {
                var e, t = i.Browser.now(),
                    n = !1;
                for (e in SoundManager._lastSoundUsedTimeDic)
                    t - SoundManager._lastSoundUsedTimeDic[e] > 3e4 ? (delete SoundManager._lastSoundUsedTimeDic[e], SoundManager.disposeSoundIfNotUsed(e)) : n = !0;
                n || (SoundManager._isCheckingDispose = !1, i.timer.clear(null, SoundManager._checkDisposeSound))
            }
        }, {
            key: "disposeSoundIfNotUsed",
            value: function(e) {
                var t;
                for (t = SoundManager._channels.length - 1; t >= 0; t--)
                    if (SoundManager._channels[t].url == e)
                        return;
                SoundManager.destroySound(e)
            }
        }, {
            key: "_visibilityChange",
            value: function() {
                i.stage.isVisibility ? SoundManager._stageOnFocus() : SoundManager._stageOnBlur()
            }
        }, {
            key: "_stageOnBlur",
            value: function() {
                SoundManager._isActive = !1, SoundManager._musicChannel && (SoundManager._musicChannel.isStopped || (SoundManager._blurPaused = !0, SoundManager._musicChannel.pause())), SoundManager.stopAllSound(), i.stage.once(Ue.MOUSE_DOWN, null, SoundManager._stageOnFocus)
            }
        }, {
            key: "_recoverWebAudio",
            value: function() {
                Nt.ctx && "running" != Nt.ctx.state && Nt.ctx.resume && Nt.ctx.resume()
            }
        }, {
            key: "_stageOnFocus",
            value: function() {
                SoundManager._isActive = !0, SoundManager._recoverWebAudio(), i.stage.off(Ue.MOUSE_DOWN, null, SoundManager._stageOnFocus), SoundManager._blurPaused && SoundManager._musicChannel && SoundManager._musicChannel.isStopped && (SoundManager._blurPaused = !1, SoundManager._musicChannel.resume())
            }
        }, {
            key: "playSound",
            value: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                if (!SoundManager._isActive || !e)
                    return null;
                if (SoundManager._muted)
                    return null;
                if (SoundManager._recoverWebAudio(), (e = x.formatURL(e)) == SoundManager._bgMusic) {
                    if (SoundManager._musicMuted)
                        return null
                } else {
                    if (i.Render.isConchApp) {
                        var l = K.getFileExtension(e);
                        if ("wav" != l && "ogg" != l)
                            return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null
                    }
                    if (SoundManager._soundMuted)
                        return null
                }
                return i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame || (t = i.loader.getRes(e)), s || (s = SoundManager._soundClass), t || ((t = new s).load(e), i.Browser.onBDMiniGame || i.Browser.onMiniGame || i.Browser.onKGMiniGame || i.Browser.onQGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame || i.Loader.cacheRes(e, t)), (n = t.play(o, r)) ? (n.url = e, n.volume = e == SoundManager._bgMusic ? SoundManager.musicVolume : SoundManager.soundVolume, n.completeHandler = a, n) : null
            }
        }, {
            key: "destroySound",
            value: function(e) {
                var t = i.loader.getRes(e);
                t && (i.Loader.clearRes(e), t.dispose())
            }
        }, {
            key: "playMusic",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                return e = x.formatURL(e), SoundManager._bgMusic = e, SoundManager._musicChannel && SoundManager._musicChannel.stop(), SoundManager._musicChannel = SoundManager.playSound(e, t, i, SoundManager._musicClass, n)
            }
        }, {
            key: "stopSound",
            value: function(e) {
                var t, i;
                for (e = x.formatURL(e), t = SoundManager._channels.length - 1; t >= 0; t--)
                    (i = SoundManager._channels[t]).url == e && i.stop()
            }
        }, {
            key: "stopAll",
            value: function() {
                var e;
                for (SoundManager._bgMusic = null, e = SoundManager._channels.length - 1; e >= 0; e--)
                    SoundManager._channels[e].stop()
            }
        }, {
            key: "stopAllSound",
            value: function() {
                var e, t;
                for (e = SoundManager._channels.length - 1; e >= 0; e--)
                    (t = SoundManager._channels[e]).url != SoundManager._bgMusic && t.stop()
            }
        }, {
            key: "stopMusic",
            value: function() {
                SoundManager._musicChannel && SoundManager._musicChannel.stop(), SoundManager._bgMusic = null
            }
        }, {
            key: "setSoundVolume",
            value: function(e) {
                var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (n)
                    n = x.formatURL(n), SoundManager._setVolume(n, e);
                else
                    for (SoundManager.soundVolume = e, t = SoundManager._channels.length - 1; t >= 0; t--)
                        (i = SoundManager._channels[t]).url != SoundManager._bgMusic && (i.volume = e)
            }
        }, {
            key: "setMusicVolume",
            value: function(e) {
                SoundManager.musicVolume = e, SoundManager._setVolume(SoundManager._bgMusic, e)
            }
        }, {
            key: "_setVolume",
            value: function(e, t) {
                var i, n;
                for (e = x.formatURL(e), i = SoundManager._channels.length - 1; i >= 0; i--)
                    (n = SoundManager._channels[i]).url == e && (n.volume = t)
            }
        }, {
            key: "autoStopMusic",
            set: function(e) {
                i.stage.off(Ue.BLUR, null, SoundManager._stageOnBlur), i.stage.off(Ue.FOCUS, null, SoundManager._stageOnFocus), i.stage.off(Ue.VISIBILITY_CHANGE, null, SoundManager._visibilityChange), SoundManager._autoStopMusic = e, e && (i.stage.on(Ue.BLUR, null, SoundManager._stageOnBlur), i.stage.on(Ue.FOCUS, null, SoundManager._stageOnFocus), i.stage.on(Ue.VISIBILITY_CHANGE, null, SoundManager._visibilityChange))
            },
            get: function() {
                return SoundManager._autoStopMusic
            }
        }, {
            key: "muted",
            set: function(e) {
                e != SoundManager._muted && (e && SoundManager.stopAllSound(), SoundManager.musicMuted = e, SoundManager._muted = e)
            },
            get: function() {
                return SoundManager._muted
            }
        }, {
            key: "soundMuted",
            set: function(e) {
                SoundManager._soundMuted = e
            },
            get: function() {
                return SoundManager._soundMuted
            }
        }, {
            key: "musicMuted",
            set: function(e) {
                e != SoundManager._musicMuted && (e ? (SoundManager._bgMusic && SoundManager._musicChannel && !SoundManager._musicChannel.isStopped ? i.Render.isConchApp ? SoundManager._musicChannel._audio && (SoundManager._musicChannel._audio.muted = !0) : SoundManager._musicChannel.pause() : SoundManager._musicChannel = null, SoundManager._musicMuted = e) : (SoundManager._musicMuted = e, SoundManager._bgMusic && SoundManager._musicChannel && (i.Render.isConchApp ? SoundManager._musicChannel._audio && (SoundManager._musicChannel._audio.muted = !1) : SoundManager._musicChannel.resume())))
            },
            get: function() {
                return SoundManager._musicMuted
            }
        }, {
            key: "useAudioMusic",
            get: function() {
                return SoundManager._useAudioMusic
            },
            set: function(e) {
                SoundManager._useAudioMusic = e, SoundManager._musicClass = e ? Ot : null
            }
        }]), SoundManager
    }();
    Gt.musicVolume = 1, Gt.soundVolume = 1, Gt.playbackRate = 1, Gt._useAudioMusic = !0, Gt._muted = !1, Gt._soundMuted = !1, Gt._musicMuted = !1, Gt._bgMusic = null, Gt._musicChannel = null, Gt._channels = [], Gt._blurPaused = !1, Gt._isActive = !0, Gt._lastSoundUsedTimeDic = {}, Gt._isCheckingDispose = !1, Gt.autoReleaseSound = !0;
    var Ut = function() {
            function Prefab() {
                _classCallCheck(this, Prefab)
            }
            return _createClass(Prefab, [{
                key: "create",
                value: function() {
                    return this.json ? i.SceneUtils.createByData(null, this.json) : null
                }
            }]), Prefab
        }(),
        Wt = function() {
            function Byte() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                _classCallCheck(this, Byte), this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, e ? (this._u8d_ = new Uint8Array(e), this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_)
            }
            return _createClass(Byte, [{
                key: "_resizeBuffer",
                value: function(e) {
                    try {
                        var t = new Uint8Array(e);
                        null != this._u8d_ && (this._u8d_.length <= e ? t.set(this._u8d_) : t.set(this._u8d_.subarray(0, e))), this._u8d_ = t, this._d_ = new DataView(t.buffer)
                    } catch (t) {
                        throw "Invalid typed array length:" + e
                    }
                }
            }, {
                key: "getString",
                value: function() {
                    return this.readString()
                }
            }, {
                key: "readString",
                value: function() {
                    return this._rUTF(this.getUint16())
                }
            }, {
                key: "getFloat32Array",
                value: function(e, t) {
                    return this.readFloat32Array(e, t)
                }
            }, {
                key: "readFloat32Array",
                value: function(e, t) {
                    var i = e + t;
                    i = i > this._length ? this._length : i;
                    var n = new Float32Array(this._d_.buffer.slice(e, i));
                    return this._pos_ = i, n
                }
            }, {
                key: "getUint8Array",
                value: function(e, t) {
                    return this.readUint8Array(e, t)
                }
            }, {
                key: "readUint8Array",
                value: function(e, t) {
                    var i = e + t;
                    i = i > this._length ? this._length : i;
                    var n = new Uint8Array(this._d_.buffer.slice(e, i));
                    return this._pos_ = i, n
                }
            }, {
                key: "getInt16Array",
                value: function(e, t) {
                    return this.readInt16Array(e, t)
                }
            }, {
                key: "readInt16Array",
                value: function(e, t) {
                    var i = e + t;
                    i = i > this._length ? this._length : i;
                    var n = new Int16Array(this._d_.buffer.slice(e, i));
                    return this._pos_ = i, n
                }
            }, {
                key: "getFloat32",
                value: function() {
                    return this.readFloat32()
                }
            }, {
                key: "readFloat32",
                value: function() {
                    if (this._pos_ + 4 > this._length)
                        throw "getFloat32 error - Out of bounds";
                    var e = this._d_.getFloat32(this._pos_, this._xd_);
                    return this._pos_ += 4, e
                }
            }, {
                key: "getFloat64",
                value: function() {
                    return this.readFloat64()
                }
            }, {
                key: "readFloat64",
                value: function() {
                    if (this._pos_ + 8 > this._length)
                        throw "getFloat64 error - Out of bounds";
                    var e = this._d_.getFloat64(this._pos_, this._xd_);
                    return this._pos_ += 8, e
                }
            }, {
                key: "writeFloat32",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, e, this._xd_), this._pos_ += 4
                }
            }, {
                key: "writeFloat64",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, e, this._xd_), this._pos_ += 8
                }
            }, {
                key: "getInt32",
                value: function() {
                    return this.readInt32()
                }
            }, {
                key: "readInt32",
                value: function() {
                    if (this._pos_ + 4 > this._length)
                        throw "getInt32 error - Out of bounds";
                    var e = this._d_.getInt32(this._pos_, this._xd_);
                    return this._pos_ += 4, e
                }
            }, {
                key: "getUint32",
                value: function() {
                    return this.readUint32()
                }
            }, {
                key: "readUint32",
                value: function() {
                    if (this._pos_ + 4 > this._length)
                        throw "getUint32 error - Out of bounds";
                    var e = this._d_.getUint32(this._pos_, this._xd_);
                    return this._pos_ += 4, e
                }
            }, {
                key: "writeInt32",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, e, this._xd_), this._pos_ += 4
                }
            }, {
                key: "writeUint32",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, e, this._xd_), this._pos_ += 4
                }
            }, {
                key: "getInt16",
                value: function() {
                    return this.readInt16()
                }
            }, {
                key: "readInt16",
                value: function() {
                    if (this._pos_ + 2 > this._length)
                        throw "getInt16 error - Out of bounds";
                    var e = this._d_.getInt16(this._pos_, this._xd_);
                    return this._pos_ += 2, e
                }
            }, {
                key: "getUint16",
                value: function() {
                    return this.readUint16()
                }
            }, {
                key: "readUint16",
                value: function() {
                    if (this._pos_ + 2 > this._length)
                        throw "getUint16 error - Out of bounds";
                    var e = this._d_.getUint16(this._pos_, this._xd_);
                    return this._pos_ += 2, e
                }
            }, {
                key: "writeUint16",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, e, this._xd_), this._pos_ += 2
                }
            }, {
                key: "writeInt16",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, e, this._xd_), this._pos_ += 2
                }
            }, {
                key: "getUint8",
                value: function() {
                    return this.readUint8()
                }
            }, {
                key: "readUint8",
                value: function() {
                    if (this._pos_ + 1 > this._length)
                        throw "getUint8 error - Out of bounds";
                    return this._u8d_[this._pos_++]
                }
            }, {
                key: "writeUint8",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, e), this._pos_++
                }
            }, {
                key: "_getUInt8",
                value: function(e) {
                    return this._readUInt8(e)
                }
            }, {
                key: "_readUInt8",
                value: function(e) {
                    return this._d_.getUint8(e)
                }
            }, {
                key: "_getUint16",
                value: function(e) {
                    return this._readUint16(e)
                }
            }, {
                key: "_readUint16",
                value: function(e) {
                    return this._d_.getUint16(e, this._xd_)
                }
            }, {
                key: "_getMatrix",
                value: function() {
                    return this._readMatrix()
                }
            }, {
                key: "_readMatrix",
                value: function() {
                    return new f(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32())
                }
            }, {
                key: "_rUTF",
                value: function(e) {
                    var t, i, n = this._pos_ + e,
                        r = String.fromCharCode,
                        a = this._u8d_,
                        s = [],
                        o = 0;
                    for (s.length = 1e3; this._pos_ < n;)
                        if ((t = a[this._pos_++]) < 128)
                            0 != t && (s[o++] = r(t));
                        else if (t < 224)
                        s[o++] = r((63 & t) << 6 | 127 & a[this._pos_++]);
                    else if (t < 240)
                        i = a[this._pos_++], s[o++] = r((31 & t) << 12 | (127 & i) << 6 | 127 & a[this._pos_++]);
                    else {
                        var l = (15 & t) << 18 | (127 & (i = a[this._pos_++])) << 12 | (127 & a[this._pos_++]) << 6 | 127 & a[this._pos_++];
                        if (l >= 65536) {
                            var h = l - 65536,
                                u = 55296 | h >> 10,
                                c = 56320 | 1023 & h;
                            s[o++] = r(u), s[o++] = r(c)
                        } else
                            s[o++] = r(l)
                    }
                    return s.length = o, s.join("")
                }
            }, {
                key: "getCustomString",
                value: function(e) {
                    return this.readCustomString(e)
                }
            }, {
                key: "readCustomString",
                value: function(e) {
                    for (var t, i = "", n = 0, r = String.fromCharCode, a = this._u8d_; e > 0;)
                        if ((t = a[this._pos_]) < 128)
                            i += r(t), this._pos_++, e--;
                        else
                            for (n = t - 128, this._pos_++, e -= n; n > 0;)
                                t = a[this._pos_++], i += r(a[this._pos_++] << 8 | t), n--;
                    return i
                }
            }, {
                key: "clear",
                value: function() {
                    this._pos_ = 0, this.length = 0
                }
            }, {
                key: "__getBuffer",
                value: function() {
                    return this._d_.buffer
                }
            }, {
                key: "writeUTFBytes",
                value: function(e) {
                    for (var t = 0, i = (e += "").length; t < i; t++) {
                        var n = e.charCodeAt(t);
                        if (n <= 127)
                            this.writeByte(n);
                        else if (n <= 2047)
                            this._ensureWrite(this._pos_ + 2), this._u8d_.set([192 | n >> 6, 128 | 63 & n], this._pos_), this._pos_ += 2;
                        else if (n >= 55296 && n <= 56319) {
                            t++;
                            var r = e.charCodeAt(t);
                            if (!Number.isNaN(r) && r >= 56320 && r <= 57343) {
                                var a = 64 + (1023 & n),
                                    s = 1023 & r,
                                    o = 240 | a >> 8 & 63,
                                    l = 128 | a >> 2 & 63,
                                    h = 128 | (3 & a) << 4 | s >> 6 & 15,
                                    u = 128 | 63 & s;
                                this._ensureWrite(this._pos_ + 4), this._u8d_.set([o, l, h, u], this._pos_), this._pos_ += 4
                            }
                        } else
                            n <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 4)
                    }
                }
            }, {
                key: "writeUTFString",
                value: function(e) {
                    var t = this.pos;
                    this.writeUint16(1), this.writeUTFBytes(e);
                    var i = this.pos - t - 2;
                    this._d_.setUint16(t, i, this._xd_)
                }
            }, {
                key: "readUTFString",
                value: function() {
                    return this.readUTFBytes(this.getUint16())
                }
            }, {
                key: "getUTFString",
                value: function() {
                    return this.readUTFString()
                }
            }, {
                key: "readUTFBytes",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (0 === e)
                        return "";
                    var t = this.bytesAvailable;
                    if (e > t)
                        throw "readUTFBytes error - Out of bounds";
                    return e = e > 0 ? e : t, this._rUTF(e)
                }
            }, {
                key: "getUTFBytes",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    return this.readUTFBytes(e)
                }
            }, {
                key: "writeByte",
                value: function(e) {
                    this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, e), this._pos_ += 1
                }
            }, {
                key: "readByte",
                value: function() {
                    if (this._pos_ + 1 > this._length)
                        throw "readByte error - Out of bounds";
                    return this._d_.getInt8(this._pos_++)
                }
            }, {
                key: "getByte",
                value: function() {
                    return this.readByte()
                }
            }, {
                key: "_ensureWrite",
                value: function(e) {
                    this._length < e && (this._length = e), this._allocated_ < e && (this.length = e)
                }
            }, {
                key: "writeArrayBuffer",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (t < 0 || i < 0)
                        throw "writeArrayBuffer error - Out of bounds";
                    0 == i && (i = e.byteLength - t), this._ensureWrite(this._pos_ + i);
                    var n = new Uint8Array(e);
                    this._u8d_.set(n.subarray(t, t + i), this._pos_), this._pos_ += i
                }
            }, {
                key: "readArrayBuffer",
                value: function(e) {
                    var t;
                    return t = this._u8d_.buffer.slice(this._pos_, this._pos_ + e), this._pos_ = this._pos_ + e, t
                }
            }, {
                key: "buffer",
                get: function() {
                    var e = this._d_.buffer;
                    return e.byteLength === this._length ? e : e.slice(0, this._length)
                }
            }, {
                key: "endian",
                get: function() {
                    return this._xd_ ? Byte.LITTLE_ENDIAN : Byte.BIG_ENDIAN
                },
                set: function(e) {
                    this._xd_ = e === Byte.LITTLE_ENDIAN
                }
            }, {
                key: "length",
                set: function(e) {
                    this._allocated_ < e ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(e, 2 * this._allocated_))) : this._allocated_ > e && this._resizeBuffer(this._allocated_ = e), this._length = e
                },
                get: function() {
                    return this._length
                }
            }, {
                key: "pos",
                get: function() {
                    return this._pos_
                },
                set: function(e) {
                    this._pos_ = e
                }
            }, {
                key: "bytesAvailable",
                get: function() {
                    return this._length - this._pos_
                }
            }], [{
                key: "getSystemEndian",
                value: function() {
                    if (!Byte._sysEndian) {
                        var e = new ArrayBuffer(2);
                        new DataView(e).setInt16(0, 256, !0), Byte._sysEndian = 256 === new Int16Array(e)[0] ? Byte.LITTLE_ENDIAN : Byte.BIG_ENDIAN
                    }
                    return Byte._sysEndian
                }
            }]), Byte
        }();
    Wt.BIG_ENDIAN = "bigEndian", Wt.LITTLE_ENDIAN = "littleEndian", Wt._sysEndian = null;
    var Vt = function() {
        function BitmapFont() {
            _classCallCheck(this, BitmapFont), this._fontCharDic = {}, this._fontWidthMap = {}, this._maxWidth = 0, this._spaceWidth = 10, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0
        }
        return _createClass(BitmapFont, [{
            key: "loadFont",
            value: function(e, t) {
                this._path = e, this._complete = t, e && -1 !== e.indexOf(".fnt") ? i.loader.load([{
                    url: e,
                    type: i.Loader.XML
                }, {
                    url: e.replace(".fnt", ".png"),
                    type: i.Loader.IMAGE
                }], m.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file')
            }
        }, {
            key: "_onLoaded",
            value: function() {
                this.parseFont(i.Loader.getRes(this._path), i.Loader.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.run()
            }
        }, {
            key: "parseFont",
            value: function(e, t) {
                if (null != e && null != t) {
                    this._texture = t;
                    var i = e.getElementsByTagName("info");
                    if (!i[0].getAttributeNode)
                        return this.parseFont2(e, t);
                    this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                    var n = i[0].getAttributeNode("padding").nodeValue.split(",");
                    this._padding = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])];
                    var r = e.getElementsByTagName("char"),
                        a = 0;
                    for (a = 0; a < r.length; a++) {
                        var s = r[a],
                            o = parseInt(s.getAttributeNode("id").nodeValue),
                            l = parseInt(s.getAttributeNode("xoffset").nodeValue) / 1,
                            h = parseInt(s.getAttributeNode("yoffset").nodeValue) / 1,
                            u = parseInt(s.getAttributeNode("xadvance").nodeValue) / 1,
                            c = new p;
                        c.x = parseInt(s.getAttributeNode("x").nodeValue), c.y = parseInt(s.getAttributeNode("y").nodeValue), c.width = parseInt(s.getAttributeNode("width").nodeValue), c.height = parseInt(s.getAttributeNode("height").nodeValue);
                        var _ = We.create(t, c.x, c.y, c.width, c.height, l, h);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, this._fontWidthMap[o] = u
                    }
                }
            }
        }, {
            key: "parseFont2",
            value: function(e, t) {
                if (null != e && null != t) {
                    this._texture = t;
                    var i = e.getElementsByTagName("info");
                    this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                    var n = i[0].attributes.padding.nodeValue.split(",");
                    this._padding = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])];
                    var r = e.getElementsByTagName("char"),
                        a = 0;
                    for (a = 0; a < r.length; a++) {
                        var s = r[a].attributes,
                            o = parseInt(s.id.nodeValue),
                            l = parseInt(s.xoffset.nodeValue) / 1,
                            h = parseInt(s.yoffset.nodeValue) / 1,
                            u = parseInt(s.xadvance.nodeValue) / 1,
                            c = new p;
                        c.x = parseInt(s.x.nodeValue), c.y = parseInt(s.y.nodeValue), c.width = parseInt(s.width.nodeValue), c.height = parseInt(s.height.nodeValue);
                        var _ = We.create(t, c.x, c.y, c.width, c.height, l, h);
                        this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, this._fontWidthMap[o] = u
                    }
                }
            }
        }, {
            key: "getCharTexture",
            value: function(e) {
                return this._fontCharDic[e.charCodeAt(0)]
            }
        }, {
            key: "destroy",
            value: function() {
                if (this._texture) {
                    for (var e in this._fontCharDic) {
                        var t = this._fontCharDic[e];
                        t && t.destroy()
                    }
                    this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, this._complete = null, this._padding = null
                }
            }
        }, {
            key: "setSpaceWidth",
            value: function(e) {
                this._spaceWidth = e
            }
        }, {
            key: "getCharWidth",
            value: function(e) {
                var t = e.charCodeAt(0);
                return this._fontWidthMap[t] ? this._fontWidthMap[t] + this.letterSpacing : " " === e ? this._spaceWidth + this.letterSpacing : 0
            }
        }, {
            key: "getTextWidth",
            value: function(e) {
                for (var t = 0, i = 0, n = e.length; i < n; i++)
                    t += this.getCharWidth(e.charAt(i));
                return t
            }
        }, {
            key: "getMaxWidth",
            value: function() {
                return this._maxWidth
            }
        }, {
            key: "getMaxHeight",
            value: function() {
                return this.fontSize
            }
        }, {
            key: "_drawText",
            value: function(e, t, i, n, r, a) {
                var s, o = this.getTextWidth(e),
                    l = 0;
                "center" === r && (l = (a - o) / 2), "right" === r && (l = a - o);
                for (var h = 0, u = 0, c = e.length; u < c; u++)
                    (s = this.getCharTexture(e.charAt(u))) && (t.graphics.drawImage(s, i + h + l, n), h += this.getCharWidth(e.charAt(u)))
            }
        }]), BitmapFont
    }();
    yt.regClass("laya.display.BitmapFont", Vt), yt.regClass("Laya.BitmapFont", Vt);
    var Yt = function(e) {
        function HttpRequest() {
            var e;
            return _classCallCheck(this, HttpRequest), (e = _possibleConstructorReturn(this, _getPrototypeOf(HttpRequest).apply(this, arguments)))._http = new XMLHttpRequest, e
        }
        return _inherits(HttpRequest, e), _createClass(HttpRequest, [{
            key: "send",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "get",
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "text",
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                this._responseType = n, this._data = null, (ze.onVVMiniGame || ze.onQGMiniGame || ze.onQQMiniGame || ze.onAlipayMiniGame || ze.onBLMiniGame) && (e = HttpRequest._urlEncode(e)), this._url = e;
                var a = this,
                    s = this._http;
                e = x.getAdptedFilePath(e), s.open(i, e, !0);
                var o = !1;
                if (r)
                    for (var l = 0; l < r.length; l++)
                        s.setRequestHeader(r[l++], r[l]);
                else
                    window.conch || (t && "string" != typeof t ? (s.setRequestHeader("Content-Type", "application/json"), o = !0) : s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                var h = "arraybuffer" !== n ? "text" : "arraybuffer";
                s.responseType = h, s.dataType && (s.dataType = h), s.onerror = function(e) {
                    a._onError(e)
                }, s.onabort = function(e) {
                    a._onAbort(e)
                }, s.onprogress = function(e) {
                    a._onProgress(e)
                }, s.onload = function(e) {
                    a._onLoad(e)
                }, ze.onBLMiniGame && ze.onAndroid && !t && (t = {}), s.send(o ? JSON.stringify(t) : t)
            }
        }, {
            key: "_onProgress",
            value: function(e) {
                e && e.lengthComputable && this.event(Ue.PROGRESS, e.loaded / e.total)
            }
        }, {
            key: "_onAbort",
            value: function(e) {
                this.error("Request was aborted by user")
            }
        }, {
            key: "_onError",
            value: function(e) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText)
            }
        }, {
            key: "_onLoad",
            value: function(e) {
                var t = this._http,
                    i = void 0 !== t.status ? t.status : 200;
                200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + t.status + "]" + t.statusText + ":" + t.responseURL)
            }
        }, {
            key: "error",
            value: function(e) {
                this.clear(), console.warn(this.url, e), this.event(Ue.ERROR, e)
            }
        }, {
            key: "complete",
            value: function() {
                this.clear();
                var e = !0;
                try {
                    "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = K.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText
                } catch (t) {
                    e = !1, this.error(t.message)
                }
                e && this.event(Ue.COMPLETE, this._data instanceof Array ? [this._data] : this._data)
            }
        }, {
            key: "clear",
            value: function() {
                var e = this._http;
                e.onerror = e.onabort = e.onprogress = e.onload = null
            }
        }, {
            key: "url",
            get: function() {
                return this._url
            }
        }, {
            key: "data",
            get: function() {
                return this._data
            }
        }, {
            key: "http",
            get: function() {
                return this._http
            }
        }]), HttpRequest
    }(T);
    Yt._urlEncode = encodeURI;
    var Ht = function(t) {
        function Loader() {
            var e;
            return _classCallCheck(this, Loader), (e = _possibleConstructorReturn(this, _getPrototypeOf(Loader).apply(this, arguments)))._customParse = !1, e
        }
        return _inherits(Loader, t), _createClass(Loader, [{
            key: "load",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.WorkerLoader.enable;
                if (e) {
                    var o;
                    if (Loader.setGroup(e, "666"), this._url = e, 0 === e.indexOf("data:image") ? t = Loader.IMAGE : e = x.formatURL(e), this._type = t || (t = Loader.getTypeFromUrl(this._url)), this._cache = n, this._useWorkerLoader = s, this._data = null, s && i.WorkerLoader.enableWorkerLoader(), o = t == Loader.IMAGE ? Loader.textureMap[e] : Loader.loadedMap[e], !a && o)
                        return this._data = o, this.event(Ue.PROGRESS, 1), void this.event(Ue.COMPLETE, this._data);
                    if (r && Loader.setGroup(e, r), null != Loader.parserMap[t])
                        return this._customParse = !0, void(Loader.parserMap[t] instanceof m ? Loader.parserMap[t].runWith(this) : Loader.parserMap[t].call(null, this));
                    this._loadResourceFilter(t, e)
                } else
                    this.onLoaded(null)
            }
        }, {
            key: "_loadResourceFilter",
            value: function(e, t) {
                this._loadResource(e, t)
            }
        }, {
            key: "_loadResource",
            value: function(e, t) {
                switch (e) {
                    case Loader.IMAGE:
                    case "htmlimage":
                    case "nativeimage":
                        this._loadImage(t);
                        break;
                    case Loader.SOUND:
                        this._loadSound(t);
                        break;
                    case Loader.TTF:
                        this._loadTTF(t);
                        break;
                    case Loader.ATLAS:
                    case Loader.PREFAB:
                    case Loader.PLF:
                        this._loadHttpRequestWhat(t, Loader.JSON);
                        break;
                    case Loader.FONT:
                        this._loadHttpRequestWhat(t, Loader.XML);
                        break;
                    case Loader.PLFB:
                        this._loadHttpRequestWhat(t, Loader.BUFFER);
                        break;
                    default:
                        this._loadHttpRequestWhat(t, e)
                }
            }
        }, {
            key: "_loadHttpRequest",
            value: function(e, t, i, n, r, a, s, o) {
                ze.onVVMiniGame ? this._http = new Yt : this._http || (this._http = new Yt), a && this._http.on(Ue.PROGRESS, r, a), n && this._http.on(Ue.COMPLETE, i, n), this._http.on(Ue.ERROR, s, o), this._http.send(e, null, "get", t)
            }
        }, {
            key: "_loadHtmlImage",
            value: function(e, t, i, n, r) {
                var a;

                function clear() {
                    var t = a;
                    t.onload = null, t.onerror = null, delete Loader._imgCache[e]
                }
                (a = new ze.window.Image).crossOrigin = "", a.onload = function() {
                    clear(), i.call(t, a)
                }, a.onerror = function() {
                    clear(), r.call(n)
                }, a.src = e, Loader._imgCache[e] = a
            }
        }, {
            key: "_loadHttpRequestWhat",
            value: function(e, t) {
                var url = e,
                    contentType = t;
                if (typeof loadRuntime !== 'undefined' && !url.startsWith("http")) {
                    let that = this;
                    setTimeout(() => {
                        if (url.startsWith('file://'))
                            url = url.substr('file://'.length);
                        var rt = loadRuntime();
                        var response;
                        var type = contentType;
                        url = x.getAdptedFilePath(url);
                        if (type == 'pkm' || type === "arraybuffer") {
                            response = rt.getFileSystemManager().readFileSync(url);
                        } else if (type == "xml") {
                            response = rt.getFileSystemManager().readFileSync(url, "utf8");
                            response = Laya.Utils.parseXMLFromString(response);
                        } else {
                            response = rt.getFileSystemManager().readFileSync(url, "utf8");
                            if ((type == 'atlas' || type == 'json') && typeof response !== "undefined") {
                                response = JSON.parse(response);
                            }
                        }
                        that.onLoaded(response);
                    }, 0);
                    return;
                }
                Loader.preLoadedMap[e] ? this.onLoaded(Loader.preLoadedMap[e]) : this._loadHttpRequest(e, t, this, this.onLoaded, this, this.onProgress, this, this.onError)
            }
        }, {
            key: "_loadTTF",
            value: function(e) {
                e = x.formatURL(e);
                var t = new i.TTFLoader;
                t.complete = m.create(this, this.onLoaded), t.load(e)
            }
        }, {
            key: "_loadImage",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = this;
                t && (e = x.formatURL(e));
                var onError = function() {
                    i.event(Ue.ERROR, "Load image failed")
                };
                if ("nativeimage" === this._type)
                    this._loadHtmlImage(e, this, this.onLoaded, this, onError);
                else {
                    var n = K.getFileExtension(e);
                    "ktx" === n || "pvr" === n ? this._loadHttpRequest(e, Loader.BUFFER, this, this.onLoaded, this, this.onProgress, this, this.onError) : this._loadHtmlImage(e, this, this.onLoaded, this, onError)
                }
            }
        }, {
            key: "_loadSound",
            value: function(e) {
                var t = new Gt._soundClass,
                    i = this;

                function clear() {
                    t.offAll()
                }
                t.on(Ue.COMPLETE, this, (function() {
                    clear(), i.onLoaded(t)
                })), t.on(Ue.ERROR, this, (function() {
                    clear(), t.dispose(), i.event(Ue.ERROR, "Load sound failed")
                })), t.load(e)
            }
        }, {
            key: "onProgress",
            value: function(e) {
                this._type === Loader.ATLAS ? this.event(Ue.PROGRESS, .3 * e) : this.event(Ue.PROGRESS, e)
            }
        }, {
            key: "onError",
            value: function(e) {
                this.event(Ue.ERROR, e)
            }
        }, {
            key: "onLoaded",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = this._type;
                if (i == Loader.PLFB)
                    this.parsePLFBData(t), this.complete(t);
                else if (i == Loader.PLF)
                    this.parsePLFData(t), this.complete(t);
                else if (i === Loader.IMAGE) {
                    if (t instanceof ArrayBuffer) {
                        var n, r = K.getFileExtension(this._url);
                        switch (r) {
                            case "ktx":
                                n = e.TextureFormat.ETC1RGB;
                                break;
                            case "pvr":
                                n = e.TextureFormat.PVRTCRGBA_4BPPV;
                                break;
                            default:
                                return void console.error("unknown format", r)
                        }
                        (d = new M(0, 0, n, !1, !1)).wrapModeU = e.WarpMode.Clamp, d.wrapModeV = e.WarpMode.Clamp, d.setCompressData(t), d._setCreateURL(this.url)
                    } else if (!(t instanceof M)) {
                        (d = new M(t.width, t.height, 1, !1, !1)).wrapModeU = e.WarpMode.Clamp, d.wrapModeV = e.WarpMode.Clamp, d.loadImageSource(t, !0), d._setCreateURL(t.src)
                    }
                    var a = new We(d);
                    a.url = this._url, this.complete(a)
                } else if (i === Loader.SOUND || "nativeimage" === i)
                    this.complete(t);
                else if ("htmlimage" === i) {
                    (d = new M(t.width, t.height, 1, !1, !1)).wrapModeU = e.WarpMode.Clamp, d.wrapModeV = e.WarpMode.Clamp, d.loadImageSource(t, !0), d._setCreateURL(t.src), this.complete(d)
                } else if (i === Loader.ATLAS) {
                    if (t.frames) {
                        var s = [];
                        if (!this._data) {
                            if (this._data = t, t.meta && t.meta.image) {
                                s = t.meta.image.split(",");
                                var o = this._url.indexOf("/") >= 0 ? "/" : "\\",
                                    l = this._url.lastIndexOf(o),
                                    h = l >= 0 ? this._url.substr(0, l + 1) : "",
                                    u = null;
                                ze.onAndroid && t.meta.compressTextureAndroid && (u = ".ktx"), ze.onIOS && t.meta.compressTextureIOS && (u = ".pvr");
                                for (var c = 0, _ = s.length; c < _; c++)
                                    s[c] = u ? h + s[c].replace(".png", u) : h + s[c]
                            } else
                                s = [this._url.replace(".json", ".png")];
                            s.reverse(), t.toLoads = s, t.pics = []
                        }
                        return this.event(Ue.PROGRESS, .3 + 1 / s.length * .6), this._loadResourceFilter(Loader.IMAGE, s.pop())
                    }
                    var d;
                    if (t instanceof M || ((d = new M(t.width, t.height, 1, !1, !1)).wrapModeU = A.WARPMODE_CLAMP, d.wrapModeV = A.WARPMODE_CLAMP, d.loadImageSource(t, !0), d._setCreateURL(t.src), t = d), this._data.pics.push(t), this._data.toLoads.length > 0)
                        return this.event(Ue.PROGRESS, .3 + 1 / this._data.toLoads.length * .6), this._loadResourceFilter(Loader.IMAGE, this._data.toLoads.pop());
                    var f = this._data.frames,
                        v = this._url.split("?")[0],
                        p = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : v.substring(0, v.lastIndexOf(".")) + "/",
                        g = this._data.pics,
                        y = x.formatURL(this._url),
                        m = Loader.atlasMap[y] || (Loader.atlasMap[y] = []);
                    m.dir = p;
                    var T = 1;
                    if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                        for (var C in T = parseFloat(this._data.meta.scale), f) {
                            var k, S = f[C],
                                R = g[S.frame.idx ? S.frame.idx : 0],
                                b = x.formatURL(p + C);
                            R.scaleRate = T, k = We._create(R, S.frame.x, S.frame.y, S.frame.w, S.frame.h, S.spriteSourceSize.x, S.spriteSourceSize.y, S.sourceSize.w, S.sourceSize.h, Loader.getRes(b)), Loader.cacheTexture(b, k), k.url = b, m.push(b)
                        }
                    else
                        for (C in f)
                            R = g[(S = f[C]).frame.idx ? S.frame.idx : 0], b = x.formatURL(p + C), k = We._create(R, S.frame.x, S.frame.y, S.frame.w, S.frame.h, S.spriteSourceSize.x, S.spriteSourceSize.y, S.sourceSize.w, S.sourceSize.h, Loader.getRes(b)), Loader.cacheTexture(b, k), k.url = b, m.push(b);
                    delete this._data.pics, this.complete(this._data)
                } else if (i === Loader.FONT) {
                    if (!t._source)
                        return this._data = t, this.event(Ue.PROGRESS, .5), this._loadResourceFilter(Loader.IMAGE, this._url.replace(".fnt", ".png"));
                    var E = new Vt;
                    E.parseFont(this._data, new We(t));
                    var w = this._url.split(".fnt")[0].split("/"),
                        L = w[w.length - 1];
                    Rt.registerBitmapFont(L, E), this._data = E, this.complete(this._data)
                } else if (i === Loader.PREFAB) {
                    var I = new Ut;
                    I.json = t, this.complete(I)
                } else
                    this.complete(t)
            }
        }, {
            key: "parsePLFData",
            value: function(e) {
                var t, i, n;
                for (t in e)
                    switch (n = e[t], t) {
                        case "json":
                        case "text":
                            for (i in n)
                                Loader.preLoadedMap[x.formatURL(i)] = n[i];
                            break;
                        default:
                            for (i in n)
                                Loader.preLoadedMap[x.formatURL(i)] = n[i]
                    }
            }
        }, {
            key: "parsePLFBData",
            value: function(e) {
                var t, i, n;
                for (n = (t = new Wt(e)).getInt32(), i = 0; i < n; i++)
                    this.parseOnePLFBFile(t)
            }
        }, {
            key: "parseOnePLFBFile",
            value: function(e) {
                var t, i, n;
                i = e.getUTFString(), t = e.getInt32(), n = e.readArrayBuffer(t), Loader.preLoadedMap[x.formatURL(i)] = n
            }
        }, {
            key: "complete",
            value: function(e) {
                this._data = e, this._customParse ? this.event(Ue.LOADED, e instanceof Array ? [e] : e) : (Loader._loaders.push(this), Loader._isWorking || Loader.checkNext())
            }
        }, {
            key: "endLoad",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                e && (this._data = e), this._cache && Loader.cacheRes(this._url, this._data), this.event(Ue.PROGRESS, 1), this.event(Ue.COMPLETE, this.data instanceof Array ? [this.data] : this.data)
            }
        }, {
            key: "url",
            get: function() {
                return this._url
            }
        }, {
            key: "type",
            get: function() {
                return this._type
            }
        }, {
            key: "cache",
            get: function() {
                return this._cache
            }
        }, {
            key: "data",
            get: function() {
                return this._data
            }
        }], [{
            key: "getTypeFromUrl",
            value: function(e) {
                var t = K.getFileExtension(e);
                return t ? Loader.typeMap[t] : (console.warn("Not recognize the resources suffix", e), "text")
            }
        }, {
            key: "checkNext",
            value: function() {
                Loader._isWorking = !0;
                for (var e = ze.now(); Loader._startIndex < Loader._loaders.length;)
                    if (Loader._loaders[Loader._startIndex].endLoad(), Loader._startIndex++, ze.now() - e > Loader.maxTimeOut)
                        return console.warn("loader callback cost a long time:" + (ze.now() - e) + " url=" + Loader._loaders[Loader._startIndex - 1].url), void i.systemTimer.frameOnce(1, null, Loader.checkNext);
                Loader._loaders.length = 0, Loader._startIndex = 0, Loader._isWorking = !1
            }
        }, {
            key: "clearRes",
            value: function(e) {
                e = x.formatURL(e);
                var t = Loader.getAtlas(e);
                if (t) {
                    for (var i = 0, n = t.length; i < n; i++) {
                        var r = t[i],
                            a = Loader.getRes(r);
                        delete Loader.textureMap[r], a && a.destroy()
                    }
                    t.length = 0, delete Loader.atlasMap[e]
                }
                var s = Loader.textureMap[e];
                s && (s.destroy(), delete Loader.textureMap[e]), Loader.loadedMap[e] && delete Loader.loadedMap[e]
            }
        }, {
            key: "clearTextureRes",
            value: function(e) {
                e = x.formatURL(e);
                var t = Loader.getAtlas(e);
                if (t && t.length > 0)
                    t.forEach((function(e) {
                        var t = Loader.getRes(e);
                        t instanceof We && t.disposeBitmap()
                    }));
                else {
                    var i = Loader.getRes(e);
                    i instanceof We && i.disposeBitmap()
                }
            }
        }, {
            key: "getRes",
            value: function(e) {
                var t = Loader.textureMap[x.formatURL(e)];
                return t || Loader.loadedMap[x.formatURL(e)]
            }
        }, {
            key: "getAtlas",
            value: function(e) {
                return Loader.atlasMap[x.formatURL(e)]
            }
        }, {
            key: "cacheRes",
            value: function(e, t) {
                e = x.formatURL(e), null != Loader.loadedMap[e] ? console.warn("Resources already exist,is repeated loading:", e) : t instanceof We ? (Loader.loadedMap[e] = t.bitmap, Loader.textureMap[e] = t) : Loader.loadedMap[e] = t
            }
        }, {
            key: "cacheTexture",
            value: function(e, t) {
                e = x.formatURL(e), null != Loader.textureMap[e] ? console.warn("Resources already exist,is repeated loading:", e) : Loader.textureMap[e] = t
            }
        }, {
            key: "setGroup",
            value: function(e, t) {
                Loader.groupMap[t] || (Loader.groupMap[t] = []), Loader.groupMap[t].push(e)
            }
        }, {
            key: "clearResByGroup",
            value: function(e) {
                if (Loader.groupMap[e]) {
                    var t, i = Loader.groupMap[e],
                        n = i.length;
                    for (t = 0; t < n; t++)
                        Loader.clearRes(i[t]);
                    i.length = 0
                }
            }
        }]), Loader
    }(T);
    Ht.TEXT = "text", Ht.JSON = "json", Ht.PREFAB = "prefab", Ht.XML = "xml", Ht.BUFFER = "arraybuffer", Ht.IMAGE = "image", Ht.SOUND = "sound", Ht.ATLAS = "atlas", Ht.FONT = "font", Ht.TTF = "ttf", Ht.PLF = "plf", Ht.PLFB = "plfb", Ht.HIERARCHY = "HIERARCHY", Ht.MESH = "MESH", Ht.MATERIAL = "MATERIAL", Ht.TEXTURE2D = "TEXTURE2D", Ht.TEXTURECUBE = "TEXTURECUBE", Ht.ANIMATIONCLIP = "ANIMATIONCLIP", Ht.AVATAR = "AVATAR", Ht.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", Ht.TERRAINRES = "TERRAIN", Ht.typeMap = {
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
    }, Ht.parserMap = {}, Ht.maxTimeOut = 100, Ht.groupMap = {}, Ht.loadedMap = {}, Ht.atlasMap = {}, Ht.textureMap = {}, Ht.preLoadedMap = {}, Ht._imgCache = {}, Ht._loaders = [], Ht._isWorking = !1, Ht._startIndex = 0;
    var Xt = function() {
        function AtlasInfoManager() {
            _classCallCheck(this, AtlasInfoManager)
        }
        return _createClass(AtlasInfoManager, null, [{
            key: "enable",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                i.loader.load(e, m.create(null, AtlasInfoManager._onInfoLoaded, [t]), null, Ht.JSON)
            }
        }, {
            key: "_onInfoLoaded",
            value: function(e, t) {
                var i, n, r, a, s;
                for (i in t)
                    for (n = (r = t[i])[0], s = (r = r[1]).length, a = 0; a < s; a++)
                        AtlasInfoManager._fileLoadDic[n + r[a]] = i;
                e && e.run()
            }
        }, {
            key: "getFileLoadPath",
            value: function(e) {
                return AtlasInfoManager._fileLoadDic[e] || e
            }
        }]), AtlasInfoManager
    }();
    Xt._fileLoadDic = {};
    var zt = function(e) {
        function LoaderManager() {
            var e;
            _classCallCheck(this, LoaderManager), (e = _possibleConstructorReturn(this, _getPrototypeOf(LoaderManager).call(this))).retryNum = 1, e.retryDelay = 0, e.maxLoader = 5, e._loaders = [], e._loaderCount = 0, e._resInfos = [], e._infoPool = [], e._maxPriority = 5, e._failRes = {}, e._statInfo = {
                count: 1,
                loaded: 1
            };
            for (var t = 0; t < e._maxPriority; t++)
                e._resInfos[t] = [];
            return e
        }
        return _inherits(LoaderManager, e), _createClass(LoaderManager, [{
            key: "getProgress",
            value: function() {
                return this._statInfo.loaded / this._statInfo.count
            }
        }, {
            key: "resetProgress",
            value: function() {
                this._statInfo.count = this._statInfo.loaded = 1
            }
        }, {
            key: "create",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                    o = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
                this._create(e, !0, t, i, n, r, a, s, o)
            }
        }, {
            key: "_create",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                    l = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
                if (e instanceof Array) {
                    var h = !0,
                        u = e,
                        c = u.length,
                        _ = 0;
                    if (n)
                        var d = m.create(n.caller, n ? n.method : null, n.args, !1);
                    for (var f = 0; f < c; f++) {
                        var v = u[f];
                        "string" == typeof v && (v = u[f] = {
                            url: v
                        }), v.progress = 0
                    }
                    for (f = 0; f < c; f++) {
                        v = u[f];
                        var p = n ? m.create(null, (function(e, t) {
                                e.progress = t;
                                for (var i = 0, n = 0; n < c; n++) {
                                    i += u[n].progress
                                }
                                var r = i / c;
                                d.runWith(r)
                            }), [v], !1) : null,
                            g = n || i ? m.create(null, (function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                _++, e.progress = 1, t || (h = !1), _ === c && i && i.runWith(h)
                            }), [v]) : null;
                        this._createOne(v.url, t, g, p, v.type || r, v.constructParams || a, v.propertyParams || s, v.priority || o, l)
                    }
                } else
                    this._createOne(e, t, i, n, r, a, s, o, l)
            }
        }, {
            key: "_createOne",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                    h = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
                    u = this.getRes(e);
                if (u)
                    !t && u instanceof k && u._addReference(), r && r.runWith(1), n && n.runWith(u);
                else {
                    var c = K.getFileExtension(e);
                    if (a || (a = LoaderManager.createMap[c] ? LoaderManager.createMap[c][0] : null), !a)
                        return void this.load(e, n, r, a, l, h);
                    var _ = Ht.parserMap;
                    if (!_[a])
                        return void this.load(e, n, r, a, l, h);
                    this._createLoad(e, m.create(null, (function(r) {
                        r && (!t && r instanceof k && r._addReference(), r._setCreateURL(e)), n && n.runWith(r), i.loader.event(e)
                    })), r, a, s, o, l, h, !0)
                }
            }
        }, {
            key: "load",
            value: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                    l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    h = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                    u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : i.WorkerLoader.enable;
                if (e instanceof Array)
                    return this._loadAssets(e, n, r, a, s, o, l);
                if (t = a === Ht.IMAGE ? Ht.textureMap[x.formatURL(e)] : Ht.loadedMap[x.formatURL(e)], h || null == t) {
                    var c;
                    c = e, (e = Xt.getFileLoadPath(e)) != c && "nativeimage" !== a ? a = Ht.ATLAS : c = null;
                    var _ = LoaderManager._resMap[e];
                    _ ? (n && (c ? n && _._createListener(Ue.COMPLETE, this, this._resInfoLoaded, [c, n], !1, !1) : n && _._createListener(Ue.COMPLETE, n.caller, n.method, n.args, !1, !1)), r && _._createListener(Ue.PROGRESS, r.caller, r.method, r.args, !1, !1)) : ((_ = this._infoPool.length ? this._infoPool.pop() : new Kt).url = e, _.type = a, _.cache = o, _.group = l, _.ignoreCache = h, _.useWorkerLoader = u, _.originalUrl = c, n && _.on(Ue.COMPLETE, n.caller, n.method, n.args), r && _.on(Ue.PROGRESS, r.caller, r.method, r.args), LoaderManager._resMap[e] = _, s = s < this._maxPriority ? s : this._maxPriority - 1, this._resInfos[s].push(_), this._statInfo.count++, this.event(Ue.PROGRESS, this.getProgress()), this._next())
                } else
                    i.systemTimer.frameOnce(1, this, (function() {
                        r && r.runWith(1), n && n.runWith(t instanceof Array ? [t] : t), this._loaderCount || this.event(Ue.COMPLETE)
                    }));
                return this
            }
        }, {
            key: "_resInfoLoaded",
            value: function(e, t) {
                t.runWith(Ht.getRes(e))
            }
        }, {
            key: "_createLoad",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                    l = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
                    h = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
                if (e instanceof Array)
                    return this._loadAssets(e, t, n, r, o, l);
                var u = Ht.getRes(e);
                if (null != u)
                    i.systemTimer.frameOnce(1, this, (function() {
                        n && n.runWith(1), t && t.runWith(u), this._loaderCount || this.event(Ue.COMPLETE)
                    }));
                else {
                    var c = LoaderManager._resMap[e];
                    c ? (t && c._createListener(Ue.COMPLETE, t.caller, t.method, t.args, !1, !1), n && c._createListener(Ue.PROGRESS, n.caller, n.method, n.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new Kt).url = e, c.type = r, c.cache = !1, c.ignoreCache = h, c.originalUrl = null, c.group = null, c.createCache = l, c.createConstructParams = a, c.createPropertyParams = s, t && c.on(Ue.COMPLETE, t.caller, t.method, t.args), n && c.on(Ue.PROGRESS, n.caller, n.method, n.args), LoaderManager._resMap[e] = c, o = o < this._maxPriority ? o : this._maxPriority - 1, this._resInfos[o].push(c), this._statInfo.count++, this.event(Ue.PROGRESS, this.getProgress()), this._next())
                }
                return this
            }
        }, {
            key: "_next",
            value: function() {
                if (!(this._loaderCount >= this.maxLoader)) {
                    for (var e = 0; e < this._maxPriority; e++)
                        for (var t = this._resInfos[e]; t.length > 0;) {
                            var i = t.shift();
                            if (i)
                                return this._doLoad(i)
                        }
                    this._loaderCount || this.event(Ue.COMPLETE)
                }
            }
        }, {
            key: "_doLoad",
            value: function(e) {
                this._loaderCount++;
                var t = this._loaders.length ? this._loaders.pop() : new Ht;
                t.on(Ue.COMPLETE, null, onLoaded), t.on(Ue.PROGRESS, null, (function(t) {
                    e.event(Ue.PROGRESS, t)
                })), t.on(Ue.ERROR, null, (function(e) {
                    onLoaded(null)
                }));
                var i = this;

                function onLoaded() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    t.offAll(), t._data = null, t._customParse = !1, i._loaders.push(t), i._endLoad(e, n instanceof Array ? [n] : n), i._loaderCount--, i._next()
                }
                t._constructParams = e.createConstructParams, t._propertyParams = e.createPropertyParams, t._createCache = e.createCache, t.load(e.url, e.type, e.cache, e.group, e.ignoreCache, e.useWorkerLoader)
            }
        }, {
            key: "_endLoad",
            value: function(e, t) {
                var n = e.url;
                if (null == t) {
                    var r = this._failRes[n] || 0;
                    if (r < this.retryNum)
                        return console.warn("[warn]Retry to load:", n), this._failRes[n] = r + 1, void i.systemTimer.once(this.retryDelay, this, this._addReTry, [e], !1);
                    Ht.clearRes(n), console.warn("[error]Failed to load:", n), this.event(Ue.ERROR, n)
                }
                this._failRes[n] && (this._failRes[n] = 0), delete LoaderManager._resMap[n], e.originalUrl && (t = Ht.getRes(e.originalUrl)), e.event(Ue.COMPLETE, t), e.offAll(), this._infoPool.push(e), this._statInfo.loaded++, this.event(Ue.PROGRESS, this.getProgress())
            }
        }, {
            key: "_addReTry",
            value: function(e) {
                this._resInfos[this._maxPriority - 1].push(e), this._next()
            }
        }, {
            key: "clearRes",
            value: function(e) {
                Ht.clearRes(e)
            }
        }, {
            key: "clearTextureRes",
            value: function(e) {
                Ht.clearTextureRes(e)
            }
        }, {
            key: "getRes",
            value: function(e) {
                return Ht.getRes(e)
            }
        }, {
            key: "cacheRes",
            value: function(e, t) {
                Ht.cacheRes(e, t)
            }
        }, {
            key: "setGroup",
            value: function(e, t) {
                Ht.setGroup(e, t)
            }
        }, {
            key: "clearResByGroup",
            value: function(e) {
                Ht.clearResByGroup(e)
            }
        }, {
            key: "clearUnLoaded",
            value: function() {
                for (var e = 0; e < this._maxPriority; e++) {
                    for (var t = this._resInfos[e], i = t.length - 1; i > -1; i--) {
                        var n = t[i];
                        n && (n.offAll(), this._infoPool.push(n))
                    }
                    t.length = 0
                }
                this._loaderCount = 0, LoaderManager._resMap = {}
            }
        }, {
            key: "cancelLoadByUrls",
            value: function(e) {
                if (e)
                    for (var t = 0, i = e.length; t < i; t++)
                        this.cancelLoadByUrl(e[t])
            }
        }, {
            key: "cancelLoadByUrl",
            value: function(e) {
                for (var t = 0; t < this._maxPriority; t++)
                    for (var i = this._resInfos[t], n = i.length - 1; n > -1; n--) {
                        var r = i[n];
                        r && r.url === e && (i[n] = null, r.offAll(), this._infoPool.push(r))
                    }
                LoaderManager._resMap[e] && delete LoaderManager._resMap[e]
            }
        }, {
            key: "_loadAssets",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, o = e.length, l = 0, h = 0, u = [], c = !0, _ = 0; _ < o; _++) {
                    var d = e[_],
                        f = void 0;
                    (f = "string" == typeof d ? {
                        url: d,
                        type: n,
                        size: 1,
                        priority: r
                    } : d).size || (f.size = 1), f.progress = 0, h += f.size, u.push(f);
                    var v = i ? m.create(null, loadProgress, [f], !1) : null,
                        p = t || i ? m.create(null, loadComplete, [f]) : null;
                    this.load(f.url, p, v, f.type, f.priority || 1, a, f.group || s, !1, f.useWorkerLoader)
                }

                function loadComplete(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    l++, e.progress = 1, i || (c = !1), l === o && t && t.runWith(c)
                }

                function loadProgress(e, t) {
                    if (null != i) {
                        e.progress = t;
                        for (var n = 0, r = 0; r < u.length; r++) {
                            var a = u[r];
                            if (a) {
                                var s = null == a.progress ? 0 : a.progress;
                                n += null == a.size ? 0 : a.size * s
                            }
                        }
                        var o = n / h;
                        i.runWith(o)
                    }
                }
                return this
            }
        }, {
            key: "decodeBitmaps",
            value: function(e) {
                var t, n, r = e.length;
                for (n = i.Render._context, t = 0; t < r; t++) {
                    var a, s;
                    if (a = Ht.getAtlas(e[t]))
                        this._decodeTexture(a[0], n);
                    else
                        (s = this.getRes(e[t])) && s instanceof We && this._decodeTexture(s, n)
                }
            }
        }, {
            key: "_decodeTexture",
            value: function(e, t) {
                var i = e.bitmap;
                if (e && i) {
                    var n = i.source || i.image;
                    if (n && n instanceof HTMLImageElement) {
                        t.drawImage(n, 0, 0, 1, 1);
                        t.getImageData(0, 0, 1, 1)
                    }
                }
            }
        }], [{
            key: "cacheRes",
            value: function(e, t) {
                Ht.cacheRes(e, t)
            }
        }]), LoaderManager
    }(T);
    zt._resMap = {}, zt.createMap = {
        atlas: [null, Ht.ATLAS]
    };
    var Kt = function(e) {
            function ResInfo() {
                return _classCallCheck(this, ResInfo), _possibleConstructorReturn(this, _getPrototypeOf(ResInfo).apply(this, arguments))
            }
            return _inherits(ResInfo, e), ResInfo
        }(T),
        jt = function() {
            function LocalStorage() {
                _classCallCheck(this, LocalStorage)
            }
            return _createClass(LocalStorage, null, [{
                key: "__init__",
                value: function() {
                    return LocalStorage._baseClass || (LocalStorage._baseClass = Qt, Qt.init()), LocalStorage.items = LocalStorage._baseClass.items, LocalStorage.support = LocalStorage._baseClass.support, LocalStorage.support
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    LocalStorage._baseClass.setItem(e, t)
                }
            }, {
                key: "getItem",
                value: function(e) {
                    return LocalStorage._baseClass.getItem(e)
                }
            }, {
                key: "setJSON",
                value: function(e, t) {
                    LocalStorage._baseClass.setJSON(e, t)
                }
            }, {
                key: "getJSON",
                value: function(e) {
                    return LocalStorage._baseClass.getJSON(e)
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    LocalStorage._baseClass.removeItem(e)
                }
            }, {
                key: "clear",
                value: function() {
                    LocalStorage._baseClass.clear()
                }
            }]), LocalStorage
        }();
    jt.support = !1;
    var Qt = function() {
        function Storage() {
            _classCallCheck(this, Storage)
        }
        return _createClass(Storage, null, [{
            key: "init",
            value: function() {
                try {
                    Storage.support = !0, Storage.items = window.localStorage, Storage.setItem("laya", "1"), Storage.removeItem("laya")
                } catch (e) {
                    Storage.support = !1
                }
                Storage.support || console.log("LocalStorage is not supprot or browser is private mode.")
            }
        }, {
            key: "setItem",
            value: function(e, t) {
                try {
                    Storage.support && Storage.items.setItem(e, t)
                } catch (e) {
                    console.warn("set localStorage failed", e)
                }
            }
        }, {
            key: "getItem",
            value: function(e) {
                return Storage.support ? Storage.items.getItem(e) : null
            }
        }, {
            key: "setJSON",
            value: function(e, t) {
                try {
                    Storage.support && Storage.items.setItem(e, JSON.stringify(t))
                } catch (e) {
                    console.warn("set localStorage failed", e)
                }
            }
        }, {
            key: "getJSON",
            value: function(e) {
                try {
                    return JSON.parse(Storage.support ? Storage.items.getItem(e) : null)
                } catch (t) {
                    return Storage.items.getItem(e)
                }
            }
        }, {
            key: "removeItem",
            value: function(e) {
                Storage.support && Storage.items.removeItem(e)
            }
        }, {
            key: "clear",
            value: function() {
                Storage.support && Storage.items.clear()
            }
        }]), Storage
    }();
    Qt.support = !1;
    var qt = function() {
        function TTFLoader() {
            _classCallCheck(this, TTFLoader)
        }
        return _createClass(TTFLoader, [{
            key: "load",
            value: function(e) {
                this._url = e;
                var t = e.split(".ttf")[0].split("/");
                this.fontName = t[t.length - 1], i.Render.isConchApp ? this._loadConch() : window.FontFace ? this._loadWithFontFace() : this._loadWithCSS()
            }
        }, {
            key: "_loadConch",
            value: function() {
                this._http = new Yt, this._http.on(Ue.ERROR, this, this._onErr), this._http.on(Ue.COMPLETE, this, this._onHttpLoaded), this._http.send(this._url, null, "get", Ht.BUFFER)
            }
        }, {
            key: "_onHttpLoaded",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, e), this._clearHttp(), this._complete()
            }
        }, {
            key: "_clearHttp",
            value: function() {
                this._http && (this._http.off(Ue.ERROR, this, this._onErr), this._http.off(Ue.COMPLETE, this, this._onHttpLoaded), this._http = null)
            }
        }, {
            key: "_onErr",
            value: function() {
                this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null)
            }
        }, {
            key: "_complete",
            value: function() {
                i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null)
            }
        }, {
            key: "_checkComplete",
            value: function() {
                i.Browser.measureText(TTFLoader._testString, this._fontTxt).width != this._txtWidth && this._complete()
            }
        }, {
            key: "_loadWithFontFace",
            value: function() {
                var e = new window.FontFace(this.fontName, "url('" + this._url + "')");
                document.fonts.add(e);
                var t = this;
                e.loaded.then((function() {
                    t._complete()
                })), e.load()
            }
        }, {
            key: "_createDiv",
            value: function() {
                this._div = ze.createElement("div"), this._div.innerHTML = "laya";
                var e = this._div.style;
                e.fontFamily = this.fontName, e.position = "absolute", e.left = "-100px", e.top = "-100px", document.body.appendChild(this._div)
            }
        }, {
            key: "_loadWithCSS",
            value: function() {
                var e = ze.createElement("style");
                e.type = "text/css", document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = ze.measureText(TTFLoader._testString, this._fontTxt).width;
                var t = this;
                e.onload = function() {
                    i.systemTimer.once(1e4, t, this._complete)
                }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv()
            }
        }]), TTFLoader
    }();
    qt._testString = "LayaTTFFont";
    var Zt = function() {
        function Ease() {
            _classCallCheck(this, Ease)
        }
        return _createClass(Ease, null, [{
            key: "linearNone",
            value: function(e, t, i, n) {
                return i * e / n + t
            }
        }, {
            key: "linearIn",
            value: function(e, t, i, n) {
                return i * e / n + t
            }
        }, {
            key: "linearInOut",
            value: function(e, t, i, n) {
                return i * e / n + t
            }
        }, {
            key: "linearOut",
            value: function(e, t, i, n) {
                return i * e / n + t
            }
        }, {
            key: "bounceIn",
            value: function(e, t, i, n) {
                return i - Ease.bounceOut(n - e, 0, i, n) + t
            }
        }, {
            key: "bounceInOut",
            value: function(e, t, i, n) {
                return e < .5 * n ? .5 * Ease.bounceIn(2 * e, 0, i, n) + t : .5 * Ease.bounceOut(2 * e - n, 0, i, n) + .5 * i + t
            }
        }, {
            key: "bounceOut",
            value: function(e, t, i, n) {
                return (e /= n) < 1 / 2.75 ? i * (7.5625 * e * e) + t : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
            }
        }, {
            key: "backIn",
            value: function(e, t, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                return i * (e /= n) * e * ((r + 1) * e - r) + t
            }
        }, {
            key: "backInOut",
            value: function(e, t, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                return (e /= .5 * n) < 1 ? .5 * i * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
            }
        }, {
            key: "backOut",
            value: function(e, t, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                return i * ((e = e / n - 1) * e * ((r + 1) * e + r) + 1) + t
            }
        }, {
            key: "elasticIn",
            value: function(e, t, i, n) {
                var r, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                return 0 == e ? t : 1 == (e /= n) ? t + i : (s || (s = .3 * n), !a || i > 0 && a < i || i < 0 && a < -i ? (a = i, r = s / 4) : r = s / Ease.PI2 * Math.asin(i / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * Ease.PI2 / s) + t)
            }
        }, {
            key: "elasticInOut",
            value: function(e, t, i, n) {
                var r, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                return 0 == e ? t : 2 == (e /= .5 * n) ? t + i : (s || (s = n * (.3 * 1.5)), !a || i > 0 && a < i || i < 0 && a < -i ? (a = i, r = s / 4) : r = s / Ease.PI2 * Math.asin(i / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * Ease.PI2 / s) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - r) * Ease.PI2 / s) * .5 + i + t)
            }
        }, {
            key: "elasticOut",
            value: function(e, t, i, n) {
                var r, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                return 0 == e ? t : 1 == (e /= n) ? t + i : (s || (s = .3 * n), !a || i > 0 && a < i || i < 0 && a < -i ? (a = i, r = s / 4) : r = s / Ease.PI2 * Math.asin(i / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - r) * Ease.PI2 / s) + i + t)
            }
        }, {
            key: "strongIn",
            value: function(e, t, i, n) {
                return i * (e /= n) * e * e * e * e + t
            }
        }, {
            key: "strongInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * i * e * e * e * e * e + t : .5 * i * ((e -= 2) * e * e * e * e + 2) + t
            }
        }, {
            key: "strongOut",
            value: function(e, t, i, n) {
                return i * ((e = e / n - 1) * e * e * e * e + 1) + t
            }
        }, {
            key: "sineInOut",
            value: function(e, t, i, n) {
                return .5 * -i * (Math.cos(Math.PI * e / n) - 1) + t
            }
        }, {
            key: "sineIn",
            value: function(e, t, i, n) {
                return -i * Math.cos(e / n * Ease.HALF_PI) + i + t
            }
        }, {
            key: "sineOut",
            value: function(e, t, i, n) {
                return i * Math.sin(e / n * Ease.HALF_PI) + t
            }
        }, {
            key: "quintIn",
            value: function(e, t, i, n) {
                return i * (e /= n) * e * e * e * e + t
            }
        }, {
            key: "quintInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * i * e * e * e * e * e + t : .5 * i * ((e -= 2) * e * e * e * e + 2) + t
            }
        }, {
            key: "quintOut",
            value: function(e, t, i, n) {
                return i * ((e = e / n - 1) * e * e * e * e + 1) + t
            }
        }, {
            key: "quartIn",
            value: function(e, t, i, n) {
                return i * (e /= n) * e * e * e + t
            }
        }, {
            key: "quartInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * i * e * e * e * e + t : .5 * -i * ((e -= 2) * e * e * e - 2) + t
            }
        }, {
            key: "quartOut",
            value: function(e, t, i, n) {
                return -i * ((e = e / n - 1) * e * e * e - 1) + t
            }
        }, {
            key: "cubicIn",
            value: function(e, t, i, n) {
                return i * (e /= n) * e * e + t
            }
        }, {
            key: "cubicInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * i * e * e * e + t : .5 * i * ((e -= 2) * e * e + 2) + t
            }
        }, {
            key: "cubicOut",
            value: function(e, t, i, n) {
                return i * ((e = e / n - 1) * e * e + 1) + t
            }
        }, {
            key: "quadIn",
            value: function(e, t, i, n) {
                return i * (e /= n) * e + t
            }
        }, {
            key: "quadInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * i * e * e + t : .5 * -i * (--e * (e - 2) - 1) + t
            }
        }, {
            key: "quadOut",
            value: function(e, t, i, n) {
                return -i * (e /= n) * (e - 2) + t
            }
        }, {
            key: "expoIn",
            value: function(e, t, i, n) {
                return 0 == e ? t : i * Math.pow(2, 10 * (e / n - 1)) + t - .001 * i
            }
        }, {
            key: "expoInOut",
            value: function(e, t, i, n) {
                return 0 == e ? t : e == n ? t + i : (e /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (e - 1)) + t : .5 * i * (2 - Math.pow(2, -10 * --e)) + t
            }
        }, {
            key: "expoOut",
            value: function(e, t, i, n) {
                return e == n ? t + i : i * (1 - Math.pow(2, -10 * e / n)) + t
            }
        }, {
            key: "circIn",
            value: function(e, t, i, n) {
                return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + t
            }
        }, {
            key: "circInOut",
            value: function(e, t, i, n) {
                return (e /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - e * e) - 1) + t : .5 * i * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
            }
        }, {
            key: "circOut",
            value: function(e, t, i, n) {
                return i * Math.sqrt(1 - (e = e / n - 1) * e) + t
            }
        }]), Ease
    }();
    Zt.HALF_PI = .5 * Math.PI, Zt.PI2 = 2 * Math.PI;
    var $t = function() {
        function Tween() {
            _classCallCheck(this, Tween), this.gid = 0, this.repeat = 1, this._count = 0
        }
        return _createClass(Tween, [{
            key: "to",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                return this._create(e, t, i, n, r, a, s, !0, !1, !0)
            }
        }, {
            key: "from",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                return this._create(e, t, i, n, r, a, s, !1, !1, !0)
            }
        }, {
            key: "_create",
            value: function(e, t, n, r, a, s, o, l, h, u) {
                if (!e)
                    throw new Error("Tween:target is null");
                this._target = e, this._duration = n, this._ease = r || t.ease || Tween.easeNone, this._complete = a || t.complete, this._delay = s, this._props = [], this._usedTimer = 0, this._startTimer = ze.now(), this._usedPool = h, this._delayParam = null, this.update = t.update;
                var c = e.$_GID || (e.$_GID = K.getGID());
                return Tween.tweenMap[c] ? (o && Tween.clearTween(e), Tween.tweenMap[c].push(this)) : Tween.tweenMap[c] = [this], u ? s <= 0 ? this.firstStart(e, t, l) : (this._delayParam = [e, t, l], i.timer.once(s, this, this.firstStart, this._delayParam)) : this._initProps(e, t, l), this
            }
        }, {
            key: "firstStart",
            value: function(e, t, i) {
                this._delayParam = null, e.destroyed ? this.clear() : (this._initProps(e, t, i), this._beginLoop())
            }
        }, {
            key: "_initProps",
            value: function(e, t, i) {
                for (var n in t)
                    if ("number" == typeof e[n]) {
                        var r = i ? e[n] : t[n],
                            a = i ? t[n] : e[n];
                        this._props.push([n, r, a - r]), i || (e[n] = r)
                    }
            }
        }, {
            key: "_beginLoop",
            value: function() {
                i.timer.frameLoop(1, this, this._doEase)
            }
        }, {
            key: "_doEase",
            value: function() {
                this._updateEase(ze.now())
            }
        }, {
            key: "_updateEase",
            value: function(e) {
                var t = this._target;
                if (t) {
                    if (t.destroyed)
                        return Tween.clearTween(t);
                    var i = this._usedTimer = e - this._startTimer - this._delay;
                    if (!(i < 0)) {
                        if (i >= this._duration)
                            return this.complete();
                        for (var n = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, r = this._props, a = 0, s = r.length; a < s; a++) {
                            var o = r[a];
                            t[o[0]] = o[1] + n * o[2]
                        }
                        this.update && this.update.run()
                    }
                }
            }
        }, {
            key: "complete",
            value: function() {
                if (this._target) {
                    i.timer.runTimer(this, this.firstStart);
                    for (var e = this._target, t = this._props, n = this._complete, r = 0, a = t.length; r < a; r++) {
                        var s = t[r];
                        e[s[0]] = s[1] + s[2]
                    }
                    this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), n && n.run()) : this.restart()
                }
            }
        }, {
            key: "pause",
            value: function() {
                var e;
                i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart), (e = ze.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = e)
            }
        }, {
            key: "setStartTime",
            value: function(e) {
                this._startTimer = e
            }
        }, {
            key: "clear",
            value: function() {
                this._target && (this._remove(), this._clear())
            }
        }, {
            key: "_clear",
            value: function() {
                this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this.repeat = 1, this._usedPool && (this.update = null, n.recover("tween", this))
            }
        }, {
            key: "recover",
            value: function() {
                this._usedPool = !0, this._clear()
            }
        }, {
            key: "_remove",
            value: function() {
                var e = Tween.tweenMap[this._target.$_GID];
                if (e)
                    for (var t = 0, i = e.length; t < i; t++)
                        if (e[t] === this) {
                            e.splice(t, 1);
                            break
                        }
            }
        }, {
            key: "restart",
            value: function() {
                if (this.pause(), this._usedTimer = 0, this._startTimer = ze.now(), this._delayParam)
                    i.timer.once(this._delay, this, this.firstStart, this._delayParam);
                else {
                    for (var e = this._props, t = 0, n = e.length; t < n; t++) {
                        var r = e[t];
                        this._target[r[0]] = r[1]
                    }
                    i.timer.once(this._delay, this, this._beginLoop)
                }
            }
        }, {
            key: "resume",
            value: function() {
                this._usedTimer >= this._duration || (this._startTimer = ze.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop())
            }
        }, {
            key: "progress",
            set: function(e) {
                var t = e * this._duration;
                this._startTimer = ze.now() - this._delay - t
            }
        }], [{
            key: "to",
            value: function(e, t, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
                return n.getItemByClass("tween", Tween)._create(e, t, i, r, a, s, o, !0, l, !0)
            }
        }, {
            key: "from",
            value: function(e, t, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
                return n.getItemByClass("tween", Tween)._create(e, t, i, r, a, s, o, !1, l, !0)
            }
        }, {
            key: "clearAll",
            value: function(e) {
                if (e && e.$_GID) {
                    var t = Tween.tweenMap[e.$_GID];
                    if (t) {
                        for (var i = 0, n = t.length; i < n; i++)
                            t[i]._clear();
                        t.length = 0
                    }
                }
            }
        }, {
            key: "clear",
            value: function(e) {
                e.clear()
            }
        }, {
            key: "clearTween",
            value: function(e) {
                Tween.clearAll(e)
            }
        }, {
            key: "easeNone",
            value: function(e, t, i, n) {
                return i * e / n + t
            }
        }]), Tween
    }();
    $t.tweenMap = [];
    var Jt = function() {
            function Dragging() {
                _classCallCheck(this, Dragging), this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0
            }
            return _createClass(Dragging, [{
                key: "start",
                value: function(e, t, n, r, a, s, o) {
                    var l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : .92;
                    this.clearTimer(), this.target = e, this.area = t, this.hasInertia = n, this.elasticDistance = t ? r : 0, this.elasticBackTime = a, this.data = s, this._disableMouseEvent = o, this.ratio = l, this._parent = e.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on(Ue.MOUSE_UP, this, this.onStageMouseUp), i.stage.on(Ue.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop)
                }
            }, {
                key: "clearTimer",
                value: function() {
                    i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null)
                }
            }, {
                key: "stop",
                value: function() {
                    this._dragging && (At.instance.disableMouseEvent = !1, i.stage.off(Ue.MOUSE_UP, this, this.onStageMouseUp), i.stage.off(Ue.MOUSE_OUT, this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear())
                }
            }, {
                key: "loop",
                value: function() {
                    var e = this._parent.getMousePoint(),
                        t = e.x,
                        n = e.y,
                        r = t - this._lastX,
                        a = n - this._lastY;
                    if (this._clickOnly) {
                        if (!(Math.abs(r * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(a * i.stage._canvasTransform.getScaleY()) > 1))
                            return;
                        this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event(Ue.DRAG_START, this.data), At.instance.disableMouseEvent = this._disableMouseEvent
                    } else
                        this._offsets.push(r, a);
                    0 === r && 0 === a || (this._lastX = t, this._lastY = n, this.target.x += r * this._elasticRateX, this.target.y += a * this._elasticRateY, this.area && this.checkArea(), this.target.event(Ue.DRAG_MOVE, this.data))
                }
            }, {
                key: "checkArea",
                value: function() {
                    if (this.elasticDistance <= 0)
                        this.backToArea();
                    else {
                        if (this.target._x < this.area.x)
                            var e = this.area.x - this.target._x;
                        else
                            e = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                        if (this._elasticRateX = Math.max(0, 1 - e / this.elasticDistance), this.target._y < this.area.y)
                            var t = this.area.y - this.target.y;
                        else
                            t = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                        this._elasticRateY = Math.max(0, 1 - t / this.elasticDistance)
                    }
                }
            }, {
                key: "backToArea",
                value: function() {
                    this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height)
                }
            }, {
                key: "onStageMouseUp",
                value: function(e) {
                    if (At.instance.disableMouseEvent = !1, i.stage.off(Ue.MOUSE_UP, this, this.onStageMouseUp), i.stage.off(Ue.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), !this._clickOnly && this.target)
                        if (this.hasInertia) {
                            this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
                            for (var t = this._offsets.length, n = Math.min(t, 6), r = this._offsets.length - n, a = t - 1; a > r; a--)
                                this._offsetY += this._offsets[a--], this._offsetX += this._offsets[a];
                            this._offsetX = this._offsetX / n * 2, this._offsetY = this._offsetY / n * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), i.systemTimer.frameLoop(1, this, this.tweenMove)
                        } else
                            this.elasticDistance > 0 ? this.checkElastic() : this.clear()
                }
            }, {
                key: "checkElastic",
                value: function() {
                    var e = NaN,
                        t = NaN;
                    if (this.target.x < this.area.x ? e = this.area.x : this.target._x > this.area.x + this.area.width && (e = this.area.x + this.area.width), this.target.y < this.area.y ? t = this.area.y : this.target._y > this.area.y + this.area.height && (t = this.area.y + this.area.height), isNaN(e) && isNaN(t))
                        this.clear();
                    else {
                        var i = {};
                        isNaN(e) || (i.x = e), isNaN(t) || (i.y = t), this._tween = $t.to(this.target, i, this.elasticBackTime, Zt.sineOut, m.create(this, this.clear), 0, !1, !1)
                    }
                }
            }, {
                key: "tweenMove",
                value: function() {
                    this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event(Ue.DRAG_MOVE, this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove), this.elasticDistance > 0 ? this.checkElastic() : this.clear())
                }
            }, {
                key: "clear",
                value: function() {
                    if (this.target) {
                        this.clearTimer();
                        var e = this.target;
                        this.target = null, this._parent = null, e.event(Ue.DRAG_END, this.data)
                    }
                }
            }]), Dragging
        }(),
        ei = function() {
            function Component() {
                _classCallCheck(this, Component), this._id = K.getGID(), this._resetComp()
            }
            return _createClass(Component, [{
                key: "_isScript",
                value: function() {
                    return !1
                }
            }, {
                key: "_resetComp",
                value: function() {
                    this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null
                }
            }, {
                key: "_getIndexInList",
                value: function() {
                    return this._indexInList
                }
            }, {
                key: "_setIndexInList",
                value: function(e) {
                    this._indexInList = e
                }
            }, {
                key: "_onAdded",
                value: function() {}
            }, {
                key: "_onAwake",
                value: function() {}
            }, {
                key: "_onEnable",
                value: function() {}
            }, {
                key: "_onDisable",
                value: function() {}
            }, {
                key: "_onDestroy",
                value: function() {}
            }, {
                key: "onReset",
                value: function() {}
            }, {
                key: "_parse",
                value: function(e) {}
            }, {
                key: "_cloneTo",
                value: function(e) {}
            }, {
                key: "_setActive",
                value: function(e) {
                    e ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.owner && this.owner._destroyComponent(this)
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.owner.activeInHierarchy && this._enabled && this._setActive(!1), this._onDestroy(), this._destroyed = !0, this.onReset !== Component.prototype.onReset ? (this.onReset(), this._resetComp(), n.recoverByClass(this)) : this._resetComp()
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "enabled",
                get: function() {
                    return this._enabled
                },
                set: function(e) {
                    this._enabled != e && (this._enabled = e, this.owner && (e ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable()))
                }
            }, {
                key: "isSingleton",
                get: function() {
                    return !0
                }
            }, {
                key: "destroyed",
                get: function() {
                    return this._destroyed
                }
            }]), Component
        }(),
        ti = function(e) {
            function AnimationBase() {
                var e;
                return _classCallCheck(this, AnimationBase), (e = _possibleConstructorReturn(this, _getPrototypeOf(AnimationBase).call(this))).wrapMode = 0, e._interval = t.animationInterval, e._isReverse = !1, e._frameRateChanged = !1, e._setBitUp(dt.DISPLAY), e
            }
            return _inherits(AnimationBase, e), _createClass(AnimationBase, [{
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof e ? this._getFrameByLabel(e) : e, this.loop = t, this._isReverse = this.wrapMode === AnimationBase.WRAP_REVERSE, 0 == this.index && this._isReverse && (this.index = this.count - 1), this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
                }
            }, {
                key: "_getFrameByLabel",
                value: function(e) {
                    for (var t = 0; t < this._count; t++) {
                        var i = this._labels[t];
                        if (i && i.indexOf(e) > -1)
                            return t
                    }
                    return 0
                }
            }, {
                key: "_frameLoop",
                value: function() {
                    if (this._isReverse) {
                        if (this._index--, this._index < 0) {
                            if (!this.loop)
                                return this._index = 0, this.stop(), void this.event(Ue.COMPLETE);
                            this.wrapMode == AnimationBase.WRAP_PINGPONG ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event(Ue.COMPLETE)
                        }
                    } else if (this._index++, this._index >= this._count) {
                        if (!this.loop)
                            return this._index--, this.stop(), void this.event(Ue.COMPLETE);
                        this.wrapMode == AnimationBase.WRAP_PINGPONG ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event(Ue.COMPLETE)
                    }
                    this.index = this._index
                }
            }, {
                key: "_setControlNode",
                value: function(e) {
                    this._controlNode && (this._controlNode.off(Ue.DISPLAY, this, this._resumePlay), this._controlNode.off(Ue.UNDISPLAY, this, this._resumePlay)), this._controlNode = e, e && e != this && (e.on(Ue.DISPLAY, this, this._resumePlay), e.on(Ue.UNDISPLAY, this, this._resumePlay))
                }
            }, {
                key: "_setDisplay",
                value: function(e) {
                    _get(_getPrototypeOf(AnimationBase.prototype), "_setDisplay", this).call(this, e), this._resumePlay()
                }
            }, {
                key: "_resumePlay",
                value: function() {
                    this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop))
                }
            }, {
                key: "stop",
                value: function() {
                    this._isPlaying = !1, this.clearTimer(this, this._frameLoop)
                }
            }, {
                key: "addLabel",
                value: function(e, t) {
                    this._labels || (this._labels = {}), this._labels[t] || (this._labels[t] = []), this._labels[t].push(e)
                }
            }, {
                key: "removeLabel",
                value: function(e) {
                    if (e) {
                        if (this._labels)
                            for (var t in this._labels)
                                this._removeLabelFromList(this._labels[t], e)
                    } else
                        this._labels = null
                }
            }, {
                key: "_removeLabelFromList",
                value: function(e, t) {
                    if (e)
                        for (var i = e.length - 1; i >= 0; i--)
                            e[i] == t && e.splice(i, 1)
                }
            }, {
                key: "gotoAndStop",
                value: function(e) {
                    this.index = "string" == typeof e ? this._getFrameByLabel(e) : e, this.stop()
                }
            }, {
                key: "_displayToIndex",
                value: function(e) {}
            }, {
                key: "clear",
                value: function() {
                    return this.stop(), this._labels = null, this
                }
            }, {
                key: "interval",
                get: function() {
                    return this._interval
                },
                set: function(e) {
                    this._interval != e && (this._frameRateChanged = !0, this._interval = e, this._isPlaying && e > 0 && this.timerLoop(e, this, this._frameLoop, null, !0, !0))
                }
            }, {
                key: "isPlaying",
                get: function() {
                    return this._isPlaying
                }
            }, {
                key: "index",
                get: function() {
                    return this._index
                },
                set: function(e) {
                    if (this._index = e, this._displayToIndex(e), this._labels && this._labels[e])
                        for (var t = this._labels[e], i = 0, n = t.length; i < n; i++)
                            this.event(Ue.LABEL, t[i])
                }
            }, {
                key: "count",
                get: function() {
                    return this._count
                }
            }]), AnimationBase
        }(kt);
    ti.WRAP_POSITIVE = 0, ti.WRAP_REVERSE = 1, ti.WRAP_PINGPONG = 2, yt.regClass("laya.display.AnimationBase", ti), yt.regClass("Laya.AnimationBase", ti);
    var ii = function() {
            function MathUtil() {
                _classCallCheck(this, MathUtil)
            }
            return _createClass(MathUtil, null, [{
                key: "subtractVector3",
                value: function(e, t, i) {
                    i[0] = e[0] - t[0], i[1] = e[1] - t[1], i[2] = e[2] - t[2]
                }
            }, {
                key: "lerp",
                value: function(e, t, i) {
                    return e * (1 - i) + t * i
                }
            }, {
                key: "scaleVector3",
                value: function(e, t, i) {
                    i[0] = e[0] * t, i[1] = e[1] * t, i[2] = e[2] * t
                }
            }, {
                key: "lerpVector3",
                value: function(e, t, i, n) {
                    var r = e[0],
                        a = e[1],
                        s = e[2];
                    n[0] = r + i * (t[0] - r), n[1] = a + i * (t[1] - a), n[2] = s + i * (t[2] - s)
                }
            }, {
                key: "lerpVector4",
                value: function(e, t, i, n) {
                    var r = e[0],
                        a = e[1],
                        s = e[2],
                        o = e[3];
                    n[0] = r + i * (t[0] - r), n[1] = a + i * (t[1] - a), n[2] = s + i * (t[2] - s), n[3] = o + i * (t[3] - o)
                }
            }, {
                key: "slerpQuaternionArray",
                value: function(e, t, i, n, r, a, s) {
                    var o, l, h, u, c, _ = e[t + 0],
                        d = e[t + 1],
                        f = e[t + 2],
                        v = e[t + 3],
                        p = i[n + 0],
                        g = i[n + 1],
                        y = i[n + 2],
                        m = i[n + 3];
                    return (l = _ * p + d * g + f * y + v * m) < 0 && (l = -l, p = -p, g = -g, y = -y, m = -m), 1 - l > 1e-6 ? (o = Math.acos(l), h = Math.sin(o), u = Math.sin((1 - r) * o) / h, c = Math.sin(r * o) / h) : (u = 1 - r, c = r), a[s + 0] = u * _ + c * p, a[s + 1] = u * d + c * g, a[s + 2] = u * f + c * y, a[s + 3] = u * v + c * m, a
                }
            }, {
                key: "getRotation",
                value: function(e, t, i, n) {
                    return Math.atan2(n - t, i - e) / Math.PI * 180
                }
            }, {
                key: "sortBigFirst",
                value: function(e, t) {
                    return e == t ? 0 : t > e ? 1 : -1
                }
            }, {
                key: "sortSmallFirst",
                value: function(e, t) {
                    return e == t ? 0 : t > e ? -1 : 1
                }
            }, {
                key: "sortNumBigFirst",
                value: function(e, t) {
                    return parseFloat(t) - parseFloat(e)
                }
            }, {
                key: "sortNumSmallFirst",
                value: function(e, t) {
                    return parseFloat(e) - parseFloat(t)
                }
            }, {
                key: "sortByKey",
                value: function(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return t = i ? n ? MathUtil.sortNumBigFirst : MathUtil.sortBigFirst : n ? MathUtil.sortNumSmallFirst : MathUtil.sortSmallFirst,
                        function(i, n) {
                            return t(i[e], n[e])
                        }
                }
            }]), MathUtil
        }(),
        ni = function(e) {
            function FrameAnimation() {
                var e;
                return _classCallCheck(this, FrameAnimation), e = _possibleConstructorReturn(this, _getPrototypeOf(FrameAnimation).call(this)), void 0 === FrameAnimation._sortIndexFun && (FrameAnimation._sortIndexFun = ii.sortByKey("index", !1, !0)), e
            }
            return _inherits(FrameAnimation, e), _createClass(FrameAnimation, null, [{
                key: "_sortIndexFun",
                value: function(e, t) {
                    return e.index - t.index
                }
            }]), _createClass(FrameAnimation, [{
                key: "_setUp",
                value: function(e, t) {
                    this._targetDic = e, this._animationData = t, this.interval = 1e3 / t.frameRate, t.parsed ? (this._count = t.count, this._labels = t.labels, this._usedFrames = t.animationNewFrames) : (this._usedFrames = [], this._calculateDatas(), t.parsed = !0, t.labels = this._labels, t.count = this._count, t.animationNewFrames = this._usedFrames)
                }
            }, {
                key: "clear",
                value: function() {
                    return _get(_getPrototypeOf(FrameAnimation.prototype), "clear", this).call(this), this._targetDic = null, this._animationData = null, this
                }
            }, {
                key: "_displayToIndex",
                value: function(e) {
                    if (this._animationData) {
                        e < 0 && (e = 0), e > this._count && (e = this._count);
                        var t, i = this._animationData.nodes,
                            n = i.length;
                        for (t = 0; t < n; t++)
                            this._displayNodeToFrame(i[t], e)
                    }
                }
            }, {
                key: "_displayNodeToFrame",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    i || (i = this._targetDic);
                    var n = i[e.target];
                    if (n) {
                        var r, a, s, o, l = e.frames,
                            h = e.keys,
                            u = h.length;
                        for (o = 0; o < u; o++)
                            s = (a = l[r = h[o]]).length > t ? a[t] : a[a.length - 1], n[r] = s;
                        var c, _ = e.funkeys;
                        if (0 != (u = _.length))
                            for (o = 0; o < u; o++)
                                void 0 !== (c = l[r = _[o]])[t] && n[r] && n[r].apply(n, c[t])
                    }
                }
            }, {
                key: "_calculateDatas",
                value: function() {
                    if (this._animationData) {
                        var e, t, i = this._animationData.nodes,
                            n = i.length;
                        for (this._count = 0, e = 0; e < n; e++)
                            t = i[e], this._calculateKeyFrames(t);
                        this._count += 1
                    }
                }
            }, {
                key: "_calculateKeyFrames",
                value: function(e) {
                    var t, i, n = e.keyframes,
                        r = e.target;
                    for (t in e.frames || (e.frames = {}), e.keys ? e.keys.length = 0 : e.keys = [], e.funkeys ? e.funkeys.length = 0 : e.funkeys = [], e.initValues || (e.initValues = {}), n) {
                        var a = -1 != t.indexOf("()");
                        if (i = n[t], a && (t = t.substr(0, t.length - 2)), e.frames[t] || (e.frames[t] = []), a) {
                            e.funkeys.push(t);
                            for (var s = e.frames[t], o = 0; o < i.length; o++) {
                                var l = i[o];
                                s[l.index] = l.value, l.index > this._count && (this._count = l.index)
                            }
                        } else
                            this._targetDic && this._targetDic[r] && (e.initValues[t] = this._targetDic[r][t]), i.sort(FrameAnimation._sortIndexFun), e.keys.push(t), this._calculateNodePropFrames(i, e.frames[t], t, r)
                    }
                }
            }, {
                key: "resetNodes",
                value: function() {
                    if (this._targetDic && this._animationData) {
                        var e, t, i, n = this._animationData.nodes,
                            r = n.length;
                        for (e = 0; e < r; e++)
                            if (i = (t = n[e]).initValues) {
                                var a, s = this._targetDic[t.target];
                                if (s)
                                    for (a in i)
                                        s[a] = i[a]
                            }
                    }
                }
            }, {
                key: "_calculateNodePropFrames",
                value: function(e, t, i, n) {
                    var r, a = e.length - 1;
                    for (t.length = e[a].index + 1, r = 0; r < a; r++)
                        this._dealKeyFrame(e[r]), this._calculateFrameValues(e[r], e[r + 1], t);
                    0 == a && (t[0] = e[0].value, this._usedFrames && (this._usedFrames[e[0].index] = !0)), this._dealKeyFrame(e[r])
                }
            }, {
                key: "_dealKeyFrame",
                value: function(e) {
                    e.label && "" != e.label && this.addLabel(e.label, e.index)
                }
            }, {
                key: "_calculateFrameValues",
                value: function(e, t, i) {
                    var n, r, a = e.index,
                        s = t.index,
                        o = e.value,
                        l = t.value - e.value,
                        h = s - a,
                        u = this._usedFrames;
                    if (s > this._count && (this._count = s), e.tween)
                        for (null == (r = Zt[e.tweenMethod]) && (r = Zt.linearNone), n = a; n < s; n++)
                            i[n] = r(n - a, o, l, h), u && (u[n] = !0);
                    else
                        for (n = a; n < s; n++)
                            i[n] = o;
                    u && (u[e.index] = !0, u[t.index] = !0), i[t.index] = t.value
                }
            }]), FrameAnimation
        }(ti);
    yt.regClass("laya.display.FrameAnimation", ni), yt.regClass("Laya.FrameAnimation", ni);
    var ri = function() {
        function WeakObject() {
            _classCallCheck(this, WeakObject), this._obj = {}, WeakObject._maps.push(this)
        }
        return _createClass(WeakObject, [{
            key: "set",
            value: function(e, t) {
                null != e && (WeakObject.supportWeakMap || ("string" == typeof e || "number" == typeof e ? this._obj[e] = t : (e.$_GID || (e.$_GID = K.getGID()), this._obj[e.$_GID] = t)))
            }
        }, {
            key: "get",
            value: function(e) {
                return null == e ? null : WeakObject.supportWeakMap ? void 0 : "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID]
            }
        }, {
            key: "del",
            value: function(e) {
                null != e && (WeakObject.supportWeakMap || ("string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID]))
            }
        }, {
            key: "has",
            value: function(e) {
                return null != e && (WeakObject.supportWeakMap ? void 0 : "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID])
            }
        }], [{
            key: "__init__",
            value: function() {
                WeakObject.I = new WeakObject, WeakObject.supportWeakMap || i.systemTimer.loop(WeakObject.delInterval, null, WeakObject.clearCache)
            }
        }, {
            key: "clearCache",
            value: function() {
                for (var e = 0, t = WeakObject._maps.length; e < t; e++) {
                    WeakObject._maps[e]._obj = {}
                }
            }
        }]), WeakObject
    }();
    ri.supportWeakMap = !1, ri.delInterval = 6e5, ri._maps = [];
    var ai = function() {
        function SceneUtils() {
            _classCallCheck(this, SceneUtils)
        }
        return _createClass(SceneUtils, null, [{
            key: "__init",
            value: function() {
                SceneUtils._funMap = new ri
            }
        }, {
            key: "getBindFun",
            value: function(e) {
                var t = SceneUtils._funMap.get(e);
                if (null == t) {
                    var i = '"' + e + '"',
                        n = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    t = window.Laya._runScript(n), SceneUtils._funMap.set(e, t)
                }
                return t
            }
        }, {
            key: "createByData",
            value: function(e, t) {
                var i = oi.create();
                if ((e = SceneUtils.createComp(t, e, e, null, i))._setBit(dt.NOT_READY, !0), "_idMap" in e && (e._idMap = i._idMap), t.animations) {
                    var n, r, a, s = [],
                        o = t.animations,
                        l = o.length;
                    for (n = 0; n < l; n++) {
                        switch (r = new ni, a = o[n], r._setUp(i._idMap, a), e[a.name] = r, r._setControlNode(e), a.action) {
                            case 1:
                                r.play(0, !1);
                                break;
                            case 2:
                                r.play(0, !0)
                        }
                        s.push(r)
                    }
                    e._aniList = s
                }
                return "Scene" === e._$componentType && e._width > 0 && null == t.props.hitTestPrior && !e.mouseThrough && (e.hitTestPrior = !0), i.beginLoad(e), e
            }
        }, {
            key: "createInitTool",
            value: function() {
                return oi.create()
            }
        }, {
            key: "createComp",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if ("Scene3D" == e.type || "Sprite3D" == e.type) {
                    var s = [],
                        o = i.Laya.Utils3D._createSceneByJsonForMaker(e, s, a);
                    return "Sprite3D" == e.type ? i.Laya.StaticBatchManager.combine(o, s) : i.Laya.StaticBatchManager.combine(null, s), o
                }
                if (!(t = t || SceneUtils.getCompInstance(e)))
                    return e.props && e.props.runtime ? console.warn("runtime not found:" + e.props.runtime) : console.warn("can not create:" + e.type), null;
                var l = e.child;
                if (l)
                    for (var h = "List" == t._$componentType, u = 0, c = l.length; u < c; u++) {
                        var _ = l[u];
                        if ("itemRender" in t && ("render" == _.props.name || "render" === _.props.renderType))
                            t.itemRender = _;
                        else if ("Graphic" == _.type)
                            i.ClassUtils._addGraphicsToSprite(_, t);
                        else if (i.ClassUtils._isDrawType(_.type))
                            i.ClassUtils._addGraphicToSprite(_, t, !0);
                        else {
                            if (h) {
                                var d = [],
                                    f = SceneUtils.createComp(_, null, n, d, a);
                                d.length && (f._$bindData = d)
                            } else
                                f = SceneUtils.createComp(_, null, n, r, a);
                            "Script" == _.type ? f instanceof ei ? t._addComponentInstance(f) : "owner" in f ? f.owner = t : "target" in f && (f.target = t) : "mask" == _.props.renderType || "mask" == _.props.name ? t.mask = f : f instanceof xt && t.addChild(f)
                        }
                    }
                var v = e.props;
                for (var p in v) {
                    var g = v[p];
                    "string" == typeof g && (g.indexOf("@node:") >= 0 || g.indexOf("@Prefab:") >= 0) ? a && a.addNodeRef(t, p, g) : SceneUtils.setCompValue(t, p, g, n, r)
                }
                return t._afterInited && t._afterInited(), e.compId && a && a._idMap && (a._idMap[e.compId] = t), t
            }
        }, {
            key: "setCompValue",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if ("string" == typeof n && n.indexOf("${") > -1) {
                    if (SceneUtils._sheet || (SceneUtils._sheet = i.ClassUtils.getClass("laya.data.Table")), !SceneUtils._sheet)
                        return void console.warn("Can not find class Sheet");
                    if (a)
                        a.push(e, t, n);
                    else if (r) {
                        -1 == n.indexOf("].") && (n = n.replace(".", "[0]."));
                        var s, o, l = new si(e, t, n);
                        l.exe(r);
                        for (var h = n.replace(/\[.*?\]\./g, "."); null != (s = SceneUtils._parseWatchData.exec(h));) {
                            for (var u = s[1]; null != (o = SceneUtils._parseKeyWord.exec(u));) {
                                var c = o[0],
                                    _ = r._watchMap[c] || (r._watchMap[c] = []);
                                _.push(l), SceneUtils._sheet.I.notifer.on(c, r, r.changeData, [c])
                            }
                            (_ = r._watchMap[u] || (r._watchMap[u] = [])).push(l), SceneUtils._sheet.I.notifer.on(u, r, r.changeData, [u])
                        }
                    }
                } else
                    "var" === t && r ? r[n] = e : e[t] = "true" === n || "false" !== n && n
            }
        }, {
            key: "getCompInstance",
            value: function(e) {
                if ("UIView" == e.type && e.props && e.props.pageData)
                    return SceneUtils.createByData(null, e.props.pageData);
                var t = e.props && e.props.runtime || e.type,
                    r = i.ClassUtils.getClass(t);
                if (!r)
                    throw "Can not find class " + t;
                if ("Script" === e.type && r.prototype._doAwake) {
                    var a = n.createByClass(r);
                    return a._destroyed = !1, a
                }
                return e.props && "renderType" in e.props && "instance" == e.props.renderType ? (r.instance || (r.instance = new r), r.instance) : new r
            }
        }]), SceneUtils
    }();
    ai._parseWatchData = /\${(.*?)}/g, ai._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
    var si = function() {
            function DataWatcher(e, t, i) {
                _classCallCheck(this, DataWatcher), this.comp = e, this.prop = t, this.value = i
            }
            return _createClass(DataWatcher, [{
                key: "exe",
                value: function(e) {
                    var t = ai.getBindFun(this.value);
                    this.comp[this.prop] = t.call(this, e)
                }
            }]), DataWatcher
        }(),
        oi = function() {
            function InitTool() {
                _classCallCheck(this, InitTool)
            }
            return _createClass(InitTool, [{
                key: "reset",
                value: function() {
                    this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, this._scene = null
                }
            }, {
                key: "recover",
                value: function() {
                    this.reset(), n.recover("InitTool", this)
                }
            }, {
                key: "addLoadRes",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._loadList || (this._loadList = []), t ? this._loadList.push({
                        url: e,
                        type: t
                    }) : this._loadList.push(e)
                }
            }, {
                key: "addNodeRef",
                value: function(e, t, i) {
                    this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([e, t, i]), i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), Ht.PREFAB)
                }
            }, {
                key: "setNodeRef",
                value: function() {
                    if (this._nodeRefList)
                        if (this._idMap) {
                            var e, t, i;
                            for (t = this._nodeRefList.length, e = 0; e < t; e++)
                                (i = this._nodeRefList[e])[0][i[1]] = this.getReferData(i[2]);
                            this._nodeRefList = null
                        } else
                            this._nodeRefList = null
                }
            }, {
                key: "getReferData",
                value: function(e) {
                    if (e.indexOf("@Prefab:") >= 0)
                        return Ht.getRes(e.replace("@Prefab:", ""));
                    if (e.indexOf("@arr:") >= 0) {
                        var t, i, n, r;
                        for (n = (t = (e = e.replace("@arr:", "")).split(",")).length, i = 0; i < n; i++)
                            r = t[i], t[i] = r ? this._idMap[r.replace("@node:", "")] : null;
                        return t
                    }
                    return this._idMap[e.replace("@node:", "")]
                }
            }, {
                key: "addInitItem",
                value: function(e) {
                    this._initList || (this._initList = []), this._initList.push(e)
                }
            }, {
                key: "doInits",
                value: function() {
                    this._initList && (this._initList = null)
                }
            }, {
                key: "finish",
                value: function() {
                    this.setNodeRef(), this.doInits(), this._scene._setBit(dt.NOT_READY, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), this._scene.event("onViewCreated"), this.recover()
                }
            }, {
                key: "beginLoad",
                value: function(e) {
                    this._scene = e, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, m.create(this, this.finish))
                }
            }], [{
                key: "create",
                value: function() {
                    var e = n.getItemByClass("InitTool", InitTool);
                    return e._idMap = [], e
                }
            }]), InitTool
        }(),
        li = function() {
            function IStatRender() {
                _classCallCheck(this, IStatRender)
            }
            return _createClass(IStatRender, [{
                key: "show",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                }
            }, {
                key: "enable",
                value: function() {}
            }, {
                key: "hide",
                value: function() {}
            }, {
                key: "set_onclick",
                value: function(e) {}
            }, {
                key: "isCanvasRender",
                value: function() {
                    return !0
                }
            }, {
                key: "renderNotCanvas",
                value: function(e, t, i) {}
            }]), IStatRender
        }(),
        hi = function(e) {
            function StatUI() {
                var e;
                return _classCallCheck(this, StatUI), (e = _possibleConstructorReturn(this, _getPrototypeOf(StatUI).apply(this, arguments)))._show = !1, e._useCanvas = !1, e._height = 100, e._view = [], e
            }
            return _inherits(StatUI, e), _createClass(StatUI, [{
                key: "show",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    ze.onMiniGame || i.Render.isConchApp || ze.onBDMiniGame || ze.onKGMiniGame || ze.onQGMiniGame || ze.onQQMiniGame || ze.onAlipayMiniGame || ze.onBLMiniGame || (this._useCanvas = !0), this._show = !0, G._fpsData.length = 60, this._view[0] = {
                        title: "FPS(WebGL)",
                        value: "_fpsStr",
                        color: "yellow",
                        units: "int"
                    }, this._view[1] = {
                        title: "Sprite",
                        value: "_spriteStr",
                        color: "white",
                        units: "int"
                    }, this._view[2] = {
                        title: "RenderBatches",
                        value: "renderBatches",
                        color: "white",
                        units: "int"
                    }, this._view[3] = {
                        title: "SavedRenderBatches",
                        value: "savedRenderBatches",
                        color: "white",
                        units: "int"
                    }, this._view[4] = {
                        title: "CPUMemory",
                        value: "cpuMemory",
                        color: "yellow",
                        units: "M"
                    }, this._view[5] = {
                        title: "GPUMemory",
                        value: "gpuMemory",
                        color: "yellow",
                        units: "M"
                    }, this._view[6] = {
                        title: "Shader",
                        value: "shaderCall",
                        color: "white",
                        units: "int"
                    }, this._view[7] = {
                        title: "Canvas",
                        value: "_canvasStr",
                        color: "white",
                        units: "int"
                    }, tt.is3DMode && (this._view[0].title = "FPS(3D)", this._view[8] = {
                        title: "TriFaces",
                        value: "trianglesFaces",
                        color: "white",
                        units: "int"
                    }, this._view[9] = {
                        title: "FrustumCulling",
                        value: "frustumCulling",
                        color: "white",
                        units: "int"
                    }, this._view[10] = {
                        title: "OctreeNodeCulling",
                        value: "octreeNodeCulling",
                        color: "white",
                        units: "int"
                    }), this._useCanvas ? this.createUIPre(e, t) : this.createUI(e, t), this.enable()
                }
            }, {
                key: "createUIPre",
                value: function(e, t) {
                    var i = ze.pixelRatio;
                    this._width = 180 * i, this._vx = 120 * i, this._height = i * (12 * this._view.length + 3 * i) + 4, StatUI._fontSize = 12 * i;
                    for (var n = 0; n < this._view.length; n++)
                        this._view[n].x = 4, this._view[n].y = n * StatUI._fontSize + 2 * i;
                    this._canvas || (this._canvas = new pt(!0), this._canvas.size(this._width, this._height), this._ctx = this._canvas.getContext("2d"), this._ctx.textBaseline = "top", this._ctx.font = StatUI._fontSize + "px Arial", this._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + t + "px;width:" + this._width / i + "px;height:" + this._height / i + "px;"), ze.onKGMiniGame || ze.container.appendChild(this._canvas.source), this._first = !0, this.loop(), this._first = !1
                }
            }, {
                key: "createUI",
                value: function(e, t) {
                    var i = this._sp,
                        n = ze.pixelRatio;
                    i || (i = new kt, this._leftText = new Rt, this._leftText.pos(5, 5), this._leftText.color = "#ffffff", i.addChild(this._leftText), this._txt = new Rt, this._txt.pos(130 * n, 5), this._txt.color = "#ffffff", i.addChild(this._txt), this._sp = i), i.pos(e, t);
                    for (var r = "", a = 0; a < this._view.length; a++) {
                        r += this._view[a].title + "\n"
                    }
                    this._leftText.text = r;
                    var s = 138 * n,
                        o = n * (12 * this._view.length + 3 * n) + 4;
                    this._txt.fontSize = StatUI._fontSize * n, this._leftText.fontSize = StatUI._fontSize * n, i.size(s, o), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, s + 110, o + 30, "#999999"), i.graphics.alpha(2), this.loop()
                }
            }, {
                key: "enable",
                value: function() {
                    i.systemTimer.frameLoop(1, this, this.loop)
                }
            }, {
                key: "hide",
                value: function() {
                    this._show = !1, i.systemTimer.clear(this, this.loop), this._canvas && ze.removeElement(this._canvas.source)
                }
            }, {
                key: "set_onclick",
                value: function(e) {
                    this._sp && this._sp.on("click", this._sp, e), this._canvas && (this._canvas.source.onclick = e, this._canvas.source.style.pointerEvents = "")
                }
            }, {
                key: "loop",
                value: function() {
                    G._count++;
                    var e = ze.now();
                    if (!(e - G._timer < 1e3)) {
                        var t = G._count;
                        if (G.FPS = Math.round(1e3 * t / (e - G._timer)), this._show) {
                            G.trianglesFaces = Math.round(G.trianglesFaces / t), this._useCanvas ? G.renderBatches = Math.round(G.renderBatches / t) : G.renderBatches = Math.round(G.renderBatches / t) - 1, G.savedRenderBatches = Math.round(G.savedRenderBatches / t), G.shaderCall = Math.round(G.shaderCall / t), G.spriteRenderUseCacheCount = Math.round(G.spriteRenderUseCacheCount / t), G.canvasNormal = Math.round(G.canvasNormal / t), G.canvasBitmap = Math.round(G.canvasBitmap / t), G.canvasReCache = Math.ceil(G.canvasReCache / t), G.frustumCulling = Math.round(G.frustumCulling / t), G.octreeNodeCulling = Math.round(G.octreeNodeCulling / t);
                            var i = G.FPS > 0 ? Math.floor(1e3 / G.FPS).toString() : " ";
                            G._fpsStr = G.FPS + (G.renderSlow ? " slow" : "") + " " + i, G._spriteStr = G.spriteCount + (G.spriteRenderUseCacheCount ? "/" + G.spriteRenderUseCacheCount : ""), G._canvasStr = G.canvasReCache + "/" + G.canvasNormal + "/" + G.canvasBitmap, G.cpuMemory = k.cpuMemory, G.gpuMemory = k.gpuMemory, this._useCanvas ? this.renderInfoPre() : this.renderInfo(), G.clear()
                        }
                        G._count = 0, G._timer = e
                    }
                }
            }, {
                key: "renderInfoPre",
                value: function() {
                    var e, t, i = 0;
                    if (this._canvas) {
                        var n = this._ctx;
                        for (n.clearRect(this._first ? 0 : this._vx, 0, this._width, this._height), i = 0; i < this._view.length; i++)
                            e = this._view[i], this._first && (n.fillStyle = "white", n.fillText(e.title, e.x, e.y)), n.fillStyle = e.color, t = G[e.value], "M" == e.units && (t = Math.floor(t / 1048576 * 100) / 100 + " M"), n.fillText(t + "", e.x + this._vx, e.y)
                    }
                }
            }, {
                key: "renderInfo",
                value: function() {
                    for (var e = "", t = 0; t < this._view.length; t++) {
                        var i = this._view[t],
                            n = G[i.value];
                        "M" == i.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == i.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), e += n + "\n"
                    }
                    this._txt.text = e
                }
            }, {
                key: "isCanvasRender",
                value: function() {
                    return this._useCanvas
                }
            }, {
                key: "renderNotCanvas",
                value: function(e, t, i) {
                    this._show && this._sp && this._sp.render(e, 0, 0)
                }
            }]), StatUI
        }(li);
    hi._fontSize = 12;
    var ui = function() {
        function Timer() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            _classCallCheck(this, Timer), this.scale = 1, this.currTimer = Date.now(), this.currFrame = 0, this._delta = 0, this._lastTimer = Date.now(), this._map = [], this._handlers = [], this._temp = [], this._count = 0, e && Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update)
        }
        return _createClass(Timer, [{
            key: "_update",
            value: function() {
                if (this.scale <= 0)
                    return this._lastTimer = Date.now(), void(this._delta = 0);
                var e = this.currFrame = this.currFrame + this.scale,
                    t = Date.now(),
                    i = t - this._lastTimer > 3e4;
                this._delta = (t - this._lastTimer) * this.scale;
                var n = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = t;
                var r = this._handlers;
                this._count = 0;
                for (var a = 0, s = r.length; a < s; a++) {
                    var o = r[a];
                    if (null !== o.method) {
                        var l = o.userFrame ? e : n;
                        if (l >= o.exeTime)
                            if (o.repeat)
                                if (!o.jumpFrame || i)
                                    o.exeTime += o.delay, o.run(!1), l > o.exeTime && (o.exeTime += Math.ceil((l - o.exeTime) / o.delay) * o.delay);
                                else
                                    for (; l >= o.exeTime;)
                                        o.exeTime += o.delay, o.run(!1);
                        else
                            o.run(!0)
                    } else
                        this._count++
                }
                (this._count > 30 || e % 200 == 0) && this._clearHandlers()
            }
        }, {
            key: "_clearHandlers",
            value: function() {
                for (var e = this._handlers, t = 0, i = e.length; t < i; t++) {
                    var n = e[t];
                    null !== n.method ? this._temp.push(n) : this._recoverHandler(n)
                }
                this._handlers = this._temp, e.length = 0, this._temp = e
            }
        }, {
            key: "_recoverHandler",
            value: function(e) {
                this._map[e.key] == e && (this._map[e.key] = null), e.clear(), Timer._pool.push(e)
            }
        }, {
            key: "_create",
            value: function(e, t, i, n, r, a, s) {
                if (!i)
                    return r.apply(n, a), null;
                if (s) {
                    var o = this._getHandler(n, r);
                    if (o)
                        return o.repeat = t, o.userFrame = e, o.delay = i, o.caller = n, o.method = r, o.args = a, o.exeTime = i + (e ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), o
                }
                return (o = Timer._pool.length > 0 ? Timer._pool.pop() : new ci).repeat = t, o.userFrame = e, o.delay = i, o.caller = n, o.method = r, o.args = a, o.exeTime = i + (e ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), this._indexHandler(o), this._handlers.push(o), o
            }
        }, {
            key: "_indexHandler",
            value: function(e) {
                var t = e.caller,
                    n = e.method,
                    r = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0,
                    a = n.$_TID || (n.$_TID = 1e5 * Timer._mid++);
                e.key = r + a, this._map[e.key] = e
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                this._create(!1, !1, e, t, i, n, r)
            }
        }, {
            key: "loop",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    s = this._create(!1, !0, e, t, i, n, r);
                s && (s.jumpFrame = a)
            }
        }, {
            key: "frameOnce",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                this._create(!0, !1, e, t, i, n, r)
            }
        }, {
            key: "frameLoop",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                this._create(!0, !0, e, t, i, n, r)
            }
        }, {
            key: "toString",
            value: function() {
                return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length
            }
        }, {
            key: "clear",
            value: function(e, t) {
                var i = this._getHandler(e, t);
                i && (this._map[i.key] = null, i.key = 0, i.clear())
            }
        }, {
            key: "clearAll",
            value: function(e) {
                if (e)
                    for (var t = 0, i = this._handlers.length; t < i; t++) {
                        var n = this._handlers[t];
                        n.caller === e && (this._map[n.key] = null, n.key = 0, n.clear())
                    }
            }
        }, {
            key: "_getHandler",
            value: function(e, t) {
                var n = e ? e.$_GID || (e.$_GID = i.Utils.getGID()) : 0,
                    r = t.$_TID || (t.$_TID = 1e5 * Timer._mid++);
                return this._map[n + r]
            }
        }, {
            key: "callLater",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Mt.I.callLater(e, t, i)
            }
        }, {
            key: "runCallLater",
            value: function(e, t) {
                Mt.I.runCallLater(e, t)
            }
        }, {
            key: "runTimer",
            value: function(e, t) {
                var i = this._getHandler(e, t);
                i && null != i.method && (this._map[i.key] = null, i.run(!0))
            }
        }, {
            key: "pause",
            value: function() {
                this.scale = 0
            }
        }, {
            key: "resume",
            value: function() {
                this.scale = 1
            }
        }, {
            key: "delta",
            get: function() {
                return this._delta
            }
        }]), Timer
    }();
    ui.gSysTimer = null, ui._pool = [], ui._mid = 1;
    var ci = function() {
            function TimerHandler() {
                _classCallCheck(this, TimerHandler)
            }
            return _createClass(TimerHandler, [{
                key: "clear",
                value: function() {
                    this.caller = null, this.method = null, this.args = null
                }
            }, {
                key: "run",
                value: function(e) {
                    var t = this.caller;
                    if (t && t.destroyed)
                        return this.clear();
                    var i = this.method,
                        n = this.args;
                    e && this.clear(), null != i && (n ? i.apply(t, n) : i.call(t))
                }
            }]), TimerHandler
        }(),
        _i = function(e) {
            function SkinSV(e) {
                var t;
                _classCallCheck(this, SkinSV), (t = _possibleConstructorReturn(this, _getPrototypeOf(SkinSV).call(this, N.SKINMESH, 0))).offsetX = 300, t.offsetY = 0;
                var i = y.mainContext,
                    n = 8 * Le.BYTES_PE;
                return t.position = [2, i.FLOAT, !1, n, 0], t.texcoord = [2, i.FLOAT, !1, n, 2 * Le.BYTES_PE], t.color = [4, i.FLOAT, !1, n, 4 * Le.BYTES_PE], t
            }
            return _inherits(SkinSV, e), SkinSV
        }(Y),
        di = function(e) {
            function PrimitiveSV(e) {
                var t;
                return _classCallCheck(this, PrimitiveSV), (t = _possibleConstructorReturn(this, _getPrototypeOf(PrimitiveSV).call(this, N.PRIMITIVE, 0)))._attribLocation = ["position", 0, "attribColor", 1], t
            }
            return _inherits(PrimitiveSV, e), PrimitiveSV
        }(Y),
        fi = function(e) {
            function TextureSV() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return _classCallCheck(this, TextureSV), (e = _possibleConstructorReturn(this, _getPrototypeOf(TextureSV).call(this, N.TEXTURE2D, t))).strength = 0, e.blurInfo = null, e.colorMat = null, e.colorAlpha = null, e._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2], e
            }
            return _inherits(TextureSV, e), _createClass(TextureSV, [{
                key: "clear",
                value: function() {
                    this.texture = null, this.shader = null, this.defines._value = this.subID
                }
            }]), TextureSV
        }(Y),
        vi = function() {
            function InlcudeFile(e) {
                _classCallCheck(this, InlcudeFile), this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = e;
                for (var t, n, r = 0; !((r = e.indexOf("#begin", r)) < 0);) {
                    for (n = r + 5; !((n = e.indexOf("#end", n)) < 0) && "i" === e.charAt(n + 4);)
                        n += 5;
                    if (n < 0)
                        throw "add include err,no #end:" + e;
                    t = e.indexOf("\n", r);
                    var a = i.ShaderCompile.splitToWords(e.substr(r, t - r), null);
                    "code" == a[1] ? this.codes[a[2]] = e.substr(t + 1, n - t - 1) : "function" == a[1] && (t = e.indexOf("function", r), t += "function".length, this.funs[a[3]] = e.substr(t + 1, n - t - 1), this.funnames += a[3] + ";"), r = n + 1
                }
            }
            return _createClass(InlcudeFile, [{
                key: "getWith",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = e ? this.codes[e] : this.script;
                    if (!t)
                        throw "get with error:" + e;
                    return t
                }
            }, {
                key: "getFunsScript",
                value: function(e) {
                    var t = "";
                    for (var i in this.funs)
                        e.indexOf(i + ";") >= 0 && (t += this.funs[i]);
                    return t
                }
            }]), InlcudeFile
        }(),
        pi = function() {
            function ShaderNode(e) {
                _classCallCheck(this, ShaderNode), this.childs = [], this.text = "", this.useFuns = "", this.z = 0, this.includefiles = e
            }
            return _createClass(ShaderNode, [{
                key: "setParent",
                value: function(e) {
                    e.childs.push(this), this.z = e.z + 1, this.parent = e
                }
            }, {
                key: "setCondition",
                value: function(e, t) {
                    e && (this.conditionType = t, e = e.replace(/(\s*$)/g, ""), this.condition = function() {
                        return this[e]
                    }, this.condition.__condition = e)
                }
            }, {
                key: "toscript",
                value: function(e, t) {
                    return this._toscript(e, t, ++ShaderNode.__id)
                }
            }, {
                key: "_toscript",
                value: function(e, t, n) {
                    if (this.childs.length < 1 && !this.text)
                        return t;
                    t.length;
                    if (this.condition) {
                        var r = !!this.condition.call(e);
                        if (this.conditionType === i.ShaderCompile.IFDEF_ELSE && (r = !r), !r)
                            return t
                    }
                    if (this.text && t.push(this.text), this.childs.length > 0 && this.childs.forEach((function(i, r, a) {
                            i._toscript(e, t, n)
                        })), this.includefiles.length > 0 && this.useFuns.length > 0)
                        for (var a, s = 0, o = this.includefiles.length; s < o; s++)
                            this.includefiles[s].curUseID != n && (a = this.includefiles[s].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[s].curUseID = n, t[0] = a + t[0]);
                    return t
                }
            }]), ShaderNode
        }();
    pi.__id = 1;
    var gi = function() {
        function ShaderCompile(e, t, i) {
            _classCallCheck(this, ShaderCompile), this.defs = {};
            var n = this;

            function _compile(e) {
                e = e.replace(ShaderCompile._clearCR, "");
                var t = [],
                    i = new pi(t);
                return n._compileToTree(i, e.split("\n"), 0, t, n.defs), i
            }
            var r = Date.now();
            this._VS = _compile(e), this._PS = _compile(t), this._nameMap = i, Date.now() - r > 2 && console.log("ShaderCompile use time:" + (Date.now() - r) + "  size:" + e.length + "/" + t.length)
        }
        return _createClass(ShaderCompile, [{
            key: "_compileToTree",
            value: function(e, t, i, n, r) {
                var a, s, o, l, h, u, c, _, d, f, v;
                for (d = i; d < t.length; d++)
                    if (!((o = t[d]).length < 1) && 0 !== (u = o.indexOf("//"))) {
                        if (u >= 0 && (o = o.substr(0, u)), a = _ || new pi(n), _ = null, a.text = o, a.noCompile = !0, (u = o.indexOf("#")) >= 0) {
                            for (l = "#", v = u + 1, f = o.length; v < f; v++) {
                                var p = o.charAt(v);
                                if (" " === p || "\t" === p || "?" === p)
                                    break;
                                l += p
                            }
                            switch (a.name = l, l) {
                                case "#ifdef":
                                case "#ifndef":
                                    if (a.src = o, a.noCompile = null != o.match(/[!&|()=<>]/), a.noCompile ? console.log("function():Boolean{return " + o.substr(u + a.name.length) + "}") : (c = o.replace(/^\s*/, "").split(/\s+/), a.setCondition(c[1], "#ifdef" === l ? ShaderCompile.IFDEF_YES : ShaderCompile.IFDEF_ELSE), a.text = "//" + a.text), a.setParent(e), e = a, r)
                                        for (c = o.substr(v).split(ShaderCompile._splitToWordExps3), v = 0; v < c.length; v++)
                                            (o = c[v]).length && (r[o] = !0);
                                    continue;
                                case "#if":
                                    if (a.src = o, a.noCompile = !0, a.setParent(e), e = a, r)
                                        for (c = o.substr(v).split(ShaderCompile._splitToWordExps3), v = 0; v < c.length; v++)
                                            (o = c[v]).length && "defined" != o && (r[o] = !0);
                                    continue;
                                case "#else":
                                    a.src = o, s = (e = e.parent).childs[e.childs.length - 1], a.noCompile = s.noCompile, a.noCompile || (a.condition = s.condition, a.conditionType = s.conditionType == ShaderCompile.IFDEF_YES ? ShaderCompile.IFDEF_ELSE : ShaderCompile.IFDEF_YES, a.text = "//" + a.text + " " + s.text + " " + a.conditionType), a.setParent(e), e = a;
                                    continue;
                                case "#endif":
                                    s = (e = e.parent).childs[e.childs.length - 1], a.noCompile = s.noCompile, a.noCompile || (a.text = "//" + a.text), a.setParent(e);
                                    continue;
                                case "#include":
                                    c = ShaderCompile.splitToWords(o, null);
                                    var g = ShaderCompile.includes[c[1]];
                                    if (!g)
                                        throw "ShaderCompile error no this include file:" + c[1];
                                    if ((u = c[0].indexOf("?")) < 0) {
                                        a.setParent(e), o = g.getWith("with" == c[2] ? c[3] : null), this._compileToTree(a, o.split("\n"), 0, n, r), a.text = "";
                                        continue
                                    }
                                    a.setCondition(c[0].substr(u + 1), ShaderCompile.IFDEF_YES), a.text = g.getWith("with" == c[2] ? c[3] : null);
                                    break;
                                case "#import":
                                    h = (c = ShaderCompile.splitToWords(o, null))[1], n.push({
                                        node: a,
                                        file: ShaderCompile.includes[h],
                                        ofs: a.text.length
                                    });
                                    continue
                            }
                        } else {
                            if ((s = e.childs[e.childs.length - 1]) && !s.name) {
                                n.length > 0 && ShaderCompile.splitToWords(o, s), _ = a, s.text += "\n" + o;
                                continue
                            }
                            n.length > 0 && ShaderCompile.splitToWords(o, a)
                        }
                        a.setParent(e)
                    }
            }
        }, {
            key: "createShader",
            value: function(e, t, i, n) {
                var r = {},
                    a = "";
                if (e)
                    for (var s in e)
                        a += "#define " + s + "\n", r[s] = !0;
                var o = this._VS.toscript(r, []),
                    l = this._PS.toscript(r, []);
                return (i || W.create)(a + o.join("\n"), a + l.join("\n"), t, this._nameMap, n)
            }
        }], [{
            key: "__init__",
            value: function() {
                var e = g.instance;
                ShaderCompile.shaderParamsMap = {
                    float: e.FLOAT,
                    int: e.INT,
                    bool: e.BOOL,
                    vec2: e.FLOAT_VEC2,
                    vec3: e.FLOAT_VEC3,
                    vec4: e.FLOAT_VEC4,
                    ivec2: e.INT_VEC2,
                    ivec3: e.INT_VEC3,
                    ivec4: e.INT_VEC4,
                    bvec2: e.BOOL_VEC2,
                    bvec3: e.BOOL_VEC3,
                    bvec4: e.BOOL_VEC4,
                    mat2: e.FLOAT_MAT2,
                    mat3: e.FLOAT_MAT3,
                    mat4: e.FLOAT_MAT4,
                    sampler2D: e.SAMPLER_2D,
                    samplerCube: e.SAMPLER_CUBE
                }
            }
        }, {
            key: "_parseOne",
            value: function(e, t, i, n, r, a) {
                var s = {
                    type: ShaderCompile.shaderParamsMap[i[n + 1]],
                    name: i[n + 2],
                    size: isNaN(parseInt(i[n + 3])) ? 1 : parseInt(i[n + 3])
                };
                return a && ("attribute" == r ? e.push(s) : t.push(s)), ":" == i[n + 3] && (s.type = i[n + 4], n += 2), n += 2
            }
        }, {
            key: "addInclude",
            value: function(e, t) {
                if (!t || 0 === t.length)
                    throw new Error("add shader include file err:" + e);
                if (ShaderCompile.includes[e])
                    throw new Error("add shader include file err, has add:" + e);
                ShaderCompile.includes[e] = new vi(t)
            }
        }, {
            key: "preGetParams",
            value: function(e, t) {
                var i, n, r = [e, t],
                    a = {},
                    s = [],
                    o = [],
                    l = {},
                    h = [];
                a.attributes = s, a.uniforms = o, a.defines = l;
                for (var u = 0; u < 2; u++) {
                    r[u] = r[u].replace(ShaderCompile._removeAnnotation, "");
                    var c, _ = r[u].match(ShaderCompile._reg);
                    for (i = 0, n = _.length; i < n; i++) {
                        var d = _[i];
                        if ("attribute" == d || "uniform" == d)
                            i = ShaderCompile._parseOne(s, o, _, i, d, !0);
                        else {
                            if ("#define" == d) {
                                h[d = _[++i]] = 1;
                                continue
                            }
                            if ("#ifdef" == d) {
                                l[c = _[++i]] = l[c] || [];
                                for (i++; i < n; i++)
                                    if ("attribute" == (d = _[i]) || "uniform" == d)
                                        i = ShaderCompile._parseOne(s, o, _, i, d, h[c]);
                                    else if ("#else" == d)
                                    for (i++; i < n; i++)
                                        if ("attribute" == (d = _[i]) || "uniform" == d)
                                            i = ShaderCompile._parseOne(s, o, _, i, d, !h[c]);
                                        else if ("#endif" == d)
                                    break
                            }
                        }
                    }
                }
                return a
            }
        }, {
            key: "splitToWords",
            value: function(e, t) {
                for (var i, n, r = [], a = -1, s = 0, o = e.length; s < o; s++)
                    if (i = e.charAt(s), " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                        if (a >= 0 && s - a > 1 && (n = e.substr(a, s - a), r.push(n)), '"' == i || "'" == i) {
                            var l = e.indexOf(i, s + 1);
                            if (l < 0)
                                throw "Sharder err:" + e;
                            r.push(e.substr(s + 1, l - s - 1)), s = l, a = -1;
                            continue
                        }
                        "(" == i && t && r.length > 0 && (n = r[r.length - 1] + ";", "vec4;main;".indexOf(n) < 0 && (t.useFuns += n)), a = -1
                    } else
                        a < 0 && (a = s);
                return a < o && o - a > 1 && (n = e.substr(a, o - a), r.push(n)), r
            }
        }]), ShaderCompile
    }();
    gi.IFDEF_NO = 0, gi.IFDEF_YES = 1, gi.IFDEF_ELSE = 2, gi.IFDEF_PARENT = 3, gi._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), gi._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), gi._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), gi.includes = {}, gi._clearCR = new RegExp("\r", "g"), gi._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
    var yi = function(e) {
        function WorkerLoader() {
            var e;
            _classCallCheck(this, WorkerLoader), (e = _possibleConstructorReturn(this, _getPrototypeOf(WorkerLoader).call(this))).worker = new Worker(WorkerLoader.workerPath);
            var t = _assertThisInitialized(e);
            return e.worker.onmessage = function(e) {
                t.workerMessage(e.data)
            }, e
        }
        return _inherits(WorkerLoader, e), _createClass(WorkerLoader, [{
            key: "workerMessage",
            value: function(e) {
                if (e)
                    switch (e.type) {
                        case "Image":
                            this.imageLoaded(e);
                            break;
                        case "Disable":
                            WorkerLoader.enable = !1
                    }
            }
        }, {
            key: "imageLoaded",
            value: function(e) {
                if (e.dataType && "imageBitmap" == e.dataType) {
                    var t = e.imageBitmap;
                    console.log("load:", e.url), this.event(e.url, t)
                } else
                    this.event(e.url, null)
            }
        }, {
            key: "loadImage",
            value: function(e) {
                this.worker.postMessage(e)
            }
        }, {
            key: "_loadImage",
            value: function(e) {
                var t = this,
                    i = t.type;
                if (this._useWorkerLoader && WorkerLoader._enable) {
                    e = x.formatURL(e);
                    var onload = function(n) {
                        if (clear(), n) {
                            var r = n;
                            "nativeimage" !== i && (r = new M).loadImageSource(n), t.onLoaded(r)
                        } else
                            WorkerLoader._preLoadFun.call(t, e)
                    };
                    WorkerLoader.I.on(e, t, onload), WorkerLoader.I.loadImage(e)
                } else
                    WorkerLoader._preLoadFun.call(t, e);

                function clear() {
                    WorkerLoader.I.off(e, t, onload)
                }
            }
        }], [{
            key: "__init__",
            value: function() {
                return null == WorkerLoader._preLoadFun && (!!Worker && (WorkerLoader._preLoadFun = Ht.prototype._loadImage, Ht.prototype._loadImage = WorkerLoader.prototype._loadImage, WorkerLoader.I || (WorkerLoader.I = new WorkerLoader), !0))
            }
        }, {
            key: "workerSupported",
            value: function() {
                return !!Worker
            }
        }, {
            key: "enableWorkerLoader",
            value: function() {
                WorkerLoader._tryEnabled || (WorkerLoader.enable = !0, WorkerLoader._tryEnabled = !0)
            }
        }, {
            key: "enable",
            set: function(e) {
                WorkerLoader._enable != e && (WorkerLoader._enable = e, e && null == WorkerLoader._preLoadFun && (WorkerLoader._enable = WorkerLoader.__init__()))
            },
            get: function() {
                return WorkerLoader._enable
            }
        }]), WorkerLoader
    }(T);
    yi.workerPath = "libs/workerloader.js", yi._enable = !1, yi._tryEnabled = !1;
    var mi = function() {
            function Mouse() {
                _classCallCheck(this, Mouse)
            }
            return _createClass(Mouse, null, [{
                key: "__init__",
                value: function() {}
            }, {
                key: "hide",
                value: function() {
                    "none" != Mouse.cursor && (Mouse._preCursor = Mouse.cursor, Mouse.cursor = "none")
                }
            }, {
                key: "show",
                value: function() {
                    "none" == Mouse.cursor && (Mouse._preCursor ? Mouse.cursor = Mouse._preCursor : Mouse.cursor = "auto")
                }
            }, {
                key: "cursor",
                set: function(e) {
                    Mouse._style.cursor = e
                },
                get: function() {
                    return Mouse._style.cursor
                }
            }]), Mouse
        }(),
        Ti = function(e) {
            function MeshParticle2D(e) {
                var t;
                return _classCallCheck(this, MeshParticle2D), (t = _possibleConstructorReturn(this, _getPrototypeOf(MeshParticle2D).call(this, MeshParticle2D.const_stride, 4 * e * MeshParticle2D.const_stride, 4))).canReuse = !0, t.setAttributes(MeshParticle2D._fixattriInfo), t.createQuadIB(e), t._quadNum = e, t
            }
            return _inherits(MeshParticle2D, e), _createClass(MeshParticle2D, [{
                key: "setMaxParticleNum",
                value: function(e) {
                    this._vb._resizeBuffer(4 * e * MeshParticle2D.const_stride, !1), this.createQuadIB(e)
                }
            }, {
                key: "releaseMesh",
                value: function() {
                    this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, MeshParticle2D._POOL.push(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer()
                }
            }], [{
                key: "__init__",
                value: function() {
                    var e = g.instance;
                    MeshParticle2D._fixattriInfo = [e.FLOAT, 4, 0, e.FLOAT, 3, 16, e.FLOAT, 3, 28, e.FLOAT, 4, 40, e.FLOAT, 4, 56, e.FLOAT, 3, 72, e.FLOAT, 2, 84, e.FLOAT, 4, 92, e.FLOAT, 1, 108, e.FLOAT, 1, 112]
                }
            }, {
                key: "getAMesh",
                value: function(e) {
                    if (MeshParticle2D._POOL.length) {
                        var t = MeshParticle2D._POOL.pop();
                        return t.setMaxParticleNum(e), t
                    }
                    return new MeshParticle2D(e)
                }
            }]), MeshParticle2D
        }(Ce);
    Ti.const_stride = 116, Ti._POOL = [];
    var Ci = function(e) {
        function HTMLImage() {
            return _classCallCheck(this, HTMLImage), _possibleConstructorReturn(this, _getPrototypeOf(HTMLImage).apply(this, arguments))
        }
        return _inherits(HTMLImage, e), HTMLImage
    }(E);
    Ci.create = function(t, i, n) {
        var r = new M(t, i, n, !1, !1);
        return r.wrapModeU = e.WarpMode.Clamp, r.wrapModeV = e.WarpMode.Clamp, r
    };
    var xi = function() {
        function Laya() {
            _classCallCheck(this, Laya)
        }
        return _createClass(Laya, null, [{
            key: "__init",
            value: function(e) {
                e.forEach((function(e) {
                    e.__init$ && e.__init$()
                }))
            }
        }, {
            key: "init",
            value: function(t, n) {
                if (!Laya._isinit) {
                    Laya._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = Laya._arrayBufferSlice), ze.__init__();
                    var r = ze.mainCanvas = new pt(!0),
                        a = r.source.style;
                    a.position = "absolute", a.top = a.left = "0px", a.background = "#000000", ze.onKGMiniGame || ze.onAlipayMiniGame || ze.container.appendChild(r.source), ze.canvas = new pt(!0), ze.context = ze.canvas.getContext("2d"), ze.supportWebAudio = Gt.__init__(), ze.supportLocalStorage = jt.__init__(), Laya.systemTimer = new ui(!1), e.systemTimer = ui.gSysTimer = Laya.systemTimer, Laya.startTimer = new ui(!1), Laya.physicsTimer = new ui(!1), Laya.updateTimer = new ui(!1), Laya.lateTimer = new ui(!1), Laya.timer = new ui(!1), e.startTimer = i.startTimer = Laya.startTimer, e.lateTimer = i.lateTimer = Laya.lateTimer, e.updateTimer = i.updateTimer = Laya.updateTimer, i.systemTimer = Laya.systemTimer, e.timer = i.timer = Laya.timer, e.physicsTimer = i.physicsTimer = Laya.physicsTimer, Laya.loader = new zt, i.Laya = Laya, e.loader = i.loader = Laya.loader, ri.__init__(), ai.__init(), mi.__init__(), $e.inner_enable();
                    for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)
                        o[l - 2] = arguments[l];
                    if (o)
                        for (var h = 0, u = o.length; h < u; h++)
                            o[h] && o[h].enable && o[h].enable();
                    return i.Render.isConchApp && Laya.enableNative(), Laya.enableWebGLPlus(), ut.beginCheck(), e.stage = Laya.stage = new It, i.stage = Laya.stage, K.gStage = Laya.stage, x.rootPath = x._basePath = Laya._getUrlPath(), xe.__int__(), Se.__init__(), ke.__init__(), Laya.render = new tt(0, 0, ze.mainCanvas), e.render = Laya.render, Laya.stage.size(t, n), window.stage = Laya.stage, y.__init__(), Ti.__init__(), gi.__init__(), vt.__init__(), Pt.__init__(), At.instance.__init__(Laya.stage, tt.canvas), bt.__init__(), Gt.autoStopMusic = !0, G._StatRender = new hi, Y._initone(N.TEXTURE2D, fi), Y._initone(N.TEXTURE2D | N.FILTERGLOW, fi), Y._initone(N.PRIMITIVE, di), Y._initone(N.SKINMESH, _i), tt.canvas
                }
            }
        }, {
            key: "_getUrlPath",
            value: function() {
                var e = ze.window.location,
                    t = e.pathname;
                return t = ":" == t.charAt(2) ? t.substring(1) : t, x.getPath("file:" == e.protocol ? t : e.protocol + "//" + e.host + e.pathname)
            }
        }, {
            key: "_arrayBufferSlice",
            value: function(e, t) {
                var i = new Uint8Array(this, e, t - e),
                    n = new Uint8Array(i.length);
                return n.set(i), n.buffer
            }
        }, {
            key: "alertGlobalError",
            value: function(e) {
                var t = 0;
                ze.window.onerror = e ? function(e, i, n, r, a) {
                    t++ < 5 && a && this.alert("出错啦，请把此信息截图给研发商\n" + e + "\n" + a.stack)
                } : null
            }
        }, {
            key: "_runScript",
            value: function(e) {
                return ze.window[Laya._evcode](e)
            }
        }, {
            key: "enableDebugPanel",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "libs/laya.debugtool.js";
                if (window.Laya.DebugPanel)
                    window.Laya.DebugPanel.enable();
                else {
                    var t = ze.createElement("script");
                    t.onload = function() {
                        window.Laya.DebugPanel.enable()
                    }, t.src = e, ze.document.body.appendChild(t)
                }
            }
        }, {
            key: "enableWebGLPlus",
            value: function() {
                y.__init_native()
            }
        }, {
            key: "enableNative",
            value: function() {
                Laya.isNativeRender_enable || (Laya.isNativeRender_enable = !0, tt.supportWebGLPlusRendering && (W.prototype.uploadTexture2D = function(e) {
                    var t = g.instance;
                    t.bindTexture(t.TEXTURE_2D, e)
                }), P.width = ze.window.innerWidth, P.height = ze.window.innerHeight, ze.measureText = function(e, t) {
                    return window.conchTextCanvas.font = t, window.conchTextCanvas.measureText(e)
                }, It.clear = function(e) {
                    qe.set2DRenderConfig();
                    var t = j.create(e).arrColor,
                        i = g.instance;
                    t && i.clearColor(t[0], t[1], t[2], t[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT), P.clear()
                }, kt.drawToCanvas = kt.drawToTexture = function(e, t, i, n, r, a) {
                    r -= e.x, a -= e.y, r |= 0, a |= 0, i |= 0, n |= 0;
                    var s = new pt(!1),
                        o = s.getContext("2d");
                    return s.size(i, n), o.asBitmap = !0, o._targets.start(), vt.renders[t]._fun(e, o, r, a), o.flush(), o._targets.end(), o._targets.restore(), s
                }, Object.defineProperty(D.prototype, "uv", {
                    get: function() {
                        return this._uv
                    },
                    set: function(e) {
                        this._uv = e
                    }
                }), pt.prototype.getTexture = function() {
                    return this._texture || (this._texture = this.context._targets, this._texture.uv = D.flipyuv, this._texture.bitmap = this._texture), this._texture
                })
            }
        }]), Laya
    }();
    xi.stage = null, xi.systemTimer = null, xi.startTimer = null, xi.physicsTimer = null, xi.updateTimer = null, xi.lateTimer = null, xi.timer = null, xi.loader = null, xi.version = "2.6.0", xi._isinit = !1, xi.isWXOpenDataContext = !1, xi.isWXPosMsg = !1, xi.__classmap = null, xi.Config = t, xi.TextRender = Qe, xi.EventDispatcher = T, xi.SoundChannel = Dt, xi.Stage = It, xi.Render = tt, xi.Browser = ze, xi.Sprite = kt, xi.Node = xt, xi.Context = qe, xi.WebGL = $e, xi.Handler = m, xi.RunDriver = Lt, xi.Utils = K, xi.Input = bt, xi.Loader = Ht, xi.LocalStorage = jt, xi.SoundManager = Gt, xi.URL = x, xi.Event = Ue, xi.Matrix = f, xi.HTMLImage = Ci, xi.Laya = xi, xi._evcode = "eval", xi.isNativeRender_enable = !1, xi.__classmap = i.__classMap, i.Timer = ui, i.Dragging = Jt, i.GraphicsBounds = rt, i.Sprite = kt, i.TextRender = Qe, i.Loader = Ht, i.TTFLoader = qt, i.WebAudioSound = Nt, i.SoundManager = Gt, i.ShaderCompile = gi, i.ClassUtils = yt, i.SceneUtils = ai, i.Context = qe, i.Render = tt, i.MouseManager = At, i.Text = Rt, i.Browser = ze, i.WebGL = $e, i.AudioSound = Ot, i.Pool = n, i.Utils = K, i.Graphics = _t, i.Submit = Ie, i.Stage = It, i.Resource = k, i.WorkerLoader = yi;
    var ki = window._layalibs;
    if (ki) {
        ki.sort((function(e, t) {
            return e.i - t.i
        }));
        for (var Si = 0; Si < ki.length; Si++)
            ki[Si].f(window, window.document, xi)
    }
    var Ri = window;
    Ri.Laya ? (Ri.Laya.Laya = xi, Object.assign(Ri.Laya, xi)) : Ri.Laya = xi;
    var bi = xi.__init,
        Ei = xi.init,
        Ai = xi.version,
        Mi = xi.alertGlobalError,
        wi = xi.enableDebugPanel;

    function _static(e, t) {
        for (var i = 0, n = t.length; i < n; i += 2)
            if ("length" == t[i])
                e.length = t[i + 1].call(e);
            else {
                ! function() {
                    var n = t[i],
                        r = t[i + 1];
                    Object.defineProperty(e, n, {
                        get: function() {
                            return delete this[n], this[n] = r.call(this)
                        },
                        set: function(e) {
                            delete this[n], this[n] = e
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }()
            }
    }
    var Li = function(e) {
            function CommonScript() {
                return _classCallCheck(this, CommonScript), _possibleConstructorReturn(this, _getPrototypeOf(CommonScript).call(this))
            }
            return _inherits(CommonScript, e), _createClass(CommonScript, [{
                key: "isSingleton",
                get: function() {
                    return !1
                }
            }]), _createClass(CommonScript, [{
                key: "onAwake",
                value: function() {}
            }, {
                key: "onEnable",
                value: function() {}
            }, {
                key: "onStart",
                value: function() {}
            }, {
                key: "onUpdate",
                value: function() {}
            }, {
                key: "onLateUpdate",
                value: function() {}
            }, {
                key: "onDisable",
                value: function() {}
            }, {
                key: "onDestroy",
                value: function() {}
            }]), CommonScript
        }(ei),
        Ii = function(e) {
            function Script() {
                return _classCallCheck(this, Script), _possibleConstructorReturn(this, _getPrototypeOf(Script).apply(this, arguments))
            }
            return _inherits(Script, e), _createClass(Script, [{
                key: "_onAwake",
                value: function() {
                    this.onAwake(), this.onStart !== Script.prototype.onStart && i.startTimer.callLater(this, this.onStart)
                }
            }, {
                key: "_onEnable",
                value: function() {
                    var e = Script.prototype;
                    this.onTriggerEnter !== e.onTriggerEnter && this.owner.on(Ue.TRIGGER_ENTER, this, this.onTriggerEnter), this.onTriggerStay !== e.onTriggerStay && this.owner.on(Ue.TRIGGER_STAY, this, this.onTriggerStay), this.onTriggerExit !== e.onTriggerExit && this.owner.on(Ue.TRIGGER_EXIT, this, this.onTriggerExit), this.onMouseDown !== e.onMouseDown && this.owner.on(Ue.MOUSE_DOWN, this, this.onMouseDown), this.onMouseUp !== e.onMouseUp && this.owner.on(Ue.MOUSE_UP, this, this.onMouseUp), this.onClick !== e.onClick && this.owner.on(Ue.CLICK, this, this.onClick), this.onStageMouseDown !== e.onStageMouseDown && i.stage.on(Ue.MOUSE_DOWN, this, this.onStageMouseDown), this.onStageMouseUp !== e.onStageMouseUp && i.stage.on(Ue.MOUSE_UP, this, this.onStageMouseUp), this.onStageClick !== e.onStageClick && i.stage.on(Ue.CLICK, this, this.onStageClick), this.onStageMouseMove !== e.onStageMouseMove && i.stage.on(Ue.MOUSE_MOVE, this, this.onStageMouseMove), this.onDoubleClick !== e.onDoubleClick && this.owner.on(Ue.DOUBLE_CLICK, this, this.onDoubleClick), this.onRightClick !== e.onRightClick && this.owner.on(Ue.RIGHT_CLICK, this, this.onRightClick), this.onMouseMove !== e.onMouseMove && this.owner.on(Ue.MOUSE_MOVE, this, this.onMouseMove), this.onMouseOver !== e.onMouseOver && this.owner.on(Ue.MOUSE_OVER, this, this.onMouseOver), this.onMouseOut !== e.onMouseOut && this.owner.on(Ue.MOUSE_OUT, this, this.onMouseOut), this.onKeyDown !== e.onKeyDown && i.stage.on(Ue.KEY_DOWN, this, this.onKeyDown), this.onKeyPress !== e.onKeyPress && i.stage.on(Ue.KEY_PRESS, this, this.onKeyPress), this.onKeyUp !== e.onKeyUp && i.stage.on(Ue.KEY_UP, this, this.onKeyUp), this.onUpdate !== e.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate), this.onLateUpdate !== e.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate), this.onPreRender !== e.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender), this.onEnable()
                }
            }, {
                key: "_onDisable",
                value: function() {
                    this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this), i.updateTimer.clearAll(this), i.lateTimer.clearAll(this)
                }
            }, {
                key: "_isScript",
                value: function() {
                    return !0
                }
            }, {
                key: "_onDestroy",
                value: function() {
                    this.onDestroy()
                }
            }, {
                key: "onAwake",
                value: function() {}
            }, {
                key: "onEnable",
                value: function() {}
            }, {
                key: "onStart",
                value: function() {}
            }, {
                key: "onTriggerEnter",
                value: function(e, t, i) {}
            }, {
                key: "onTriggerStay",
                value: function(e, t, i) {}
            }, {
                key: "onTriggerExit",
                value: function(e, t, i) {}
            }, {
                key: "onMouseDown",
                value: function(e) {}
            }, {
                key: "onMouseUp",
                value: function(e) {}
            }, {
                key: "onClick",
                value: function(e) {}
            }, {
                key: "onStageMouseDown",
                value: function(e) {}
            }, {
                key: "onStageMouseUp",
                value: function(e) {}
            }, {
                key: "onStageClick",
                value: function(e) {}
            }, {
                key: "onStageMouseMove",
                value: function(e) {}
            }, {
                key: "onDoubleClick",
                value: function(e) {}
            }, {
                key: "onRightClick",
                value: function(e) {}
            }, {
                key: "onMouseMove",
                value: function(e) {}
            }, {
                key: "onMouseOver",
                value: function(e) {}
            }, {
                key: "onMouseOut",
                value: function(e) {}
            }, {
                key: "onKeyDown",
                value: function(e) {}
            }, {
                key: "onKeyPress",
                value: function(e) {}
            }, {
                key: "onKeyUp",
                value: function(e) {}
            }, {
                key: "onUpdate",
                value: function() {}
            }, {
                key: "onLateUpdate",
                value: function() {}
            }, {
                key: "onPreRender",
                value: function() {}
            }, {
                key: "onPostRender",
                value: function() {}
            }, {
                key: "onDisable",
                value: function() {}
            }, {
                key: "onDestroy",
                value: function() {}
            }, {
                key: "isSingleton",
                get: function() {
                    return !1
                }
            }]), Script
        }(ei),
        Pi = function(e) {
            function GraphicAnimation() {
                var e;
                return _classCallCheck(this, GraphicAnimation), (e = _possibleConstructorReturn(this, _getPrototypeOf(GraphicAnimation).apply(this, arguments)))._nodeIDAniDic = {}, e
            }
            return _inherits(GraphicAnimation, e), _createClass(GraphicAnimation, [{
                key: "_parseNodeList",
                value: function(e) {
                    this._nodeList || (this._nodeList = []), this._nodeDefaultProps[e.compId] = e.props, e.compId && this._nodeList.push(e.compId);
                    var t = e.child;
                    if (t) {
                        var i, n = t.length;
                        for (i = 0; i < n; i++)
                            this._parseNodeList(t[i])
                    }
                }
            }, {
                key: "_calGraphicData",
                value: function(e) {
                    var t;
                    if (this._setUp(null, e), this._createGraphicData(), this._nodeIDAniDic)
                        for (t in this._nodeIDAniDic)
                            this._nodeIDAniDic[t] = null
                }
            }, {
                key: "_createGraphicData",
                value: function() {
                    var e, t, i = [],
                        n = this.count,
                        r = this._usedFrames;
                    for (r || (r = []), e = 0; e < n; e++)
                        !r[e] && t || (t = this._createFrameGraphic(e)), i.push(t);
                    this._gList = i
                }
            }, {
                key: "_createFrameGraphic",
                value: function(e) {
                    var t = new _t;
                    return GraphicAnimation._rootMatrix || (GraphicAnimation._rootMatrix = new f), this._updateNodeGraphic(this._rootNode, e, GraphicAnimation._rootMatrix, t), t
                }
            }, {
                key: "_updateNodeGraphic",
                value: function(e, t, i, n) {
                    var r, a, s, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                    (r = this._nodeGDic[e.compId] = this._getNodeGraphicData(e.compId, t, this._nodeGDic[e.compId])).resultTransform || (r.resultTransform = new f), a = r.resultTransform, f.mul(r.transform, i, a);
                    var l = r.alpha * o;
                    if (!(l < .01)) {
                        r.skin && (s = this._getTextureByUrl(r.skin)) && (a._checkTransform() ? (n.drawTexture(s, 0, 0, r.width, r.height, a, l), r.resultTransform = null) : n.drawTexture(s, a.tx, a.ty, r.width, r.height, null, l));
                        var h, u, c = e.child;
                        if (c)
                            for (u = c.length, h = 0; h < u; h++)
                                this._updateNodeGraphic(c[h], t, a, n, l)
                    }
                }
            }, {
                key: "_updateNoChilds",
                value: function(e, t) {
                    if (e.skin) {
                        var i = this._getTextureByUrl(e.skin);
                        if (i) {
                            var n = e.transform;
                            n._checkTransform(), !n._bTransform ? t.drawTexture(i, n.tx, n.ty, e.width, e.height, null, e.alpha) : t.drawTexture(i, 0, 0, e.width, e.height, n.clone(), e.alpha)
                        }
                    }
                }
            }, {
                key: "_updateNodeGraphic2",
                value: function(e, t, i) {
                    var n;
                    if (n = this._nodeGDic[e.compId] = this._getNodeGraphicData(e.compId, t, this._nodeGDic[e.compId]), e.child) {
                        var r, a, s, o = n.transform;
                        o._checkTransform(), a = (r = !o._bTransform) && (0 != o.tx || 0 != o.ty), (s = o._bTransform || 1 != n.alpha) && i.save(), 1 != n.alpha && i.alpha(n.alpha), r ? a && i.translate(o.tx, o.ty) : i.transform(o.clone());
                        var l, h, u, c = e.child;
                        if (n.skin && (l = this._getTextureByUrl(n.skin)) && i.drawImage(l, 0, 0, n.width, n.height), c)
                            for (u = c.length, h = 0; h < u; h++)
                                this._updateNodeGraphic2(c[h], t, i);
                        s ? i.restore() : r ? a && i.translate(-o.tx, -o.ty) : i.transform(o.clone().invert())
                    } else
                        this._updateNoChilds(n, i)
                }
            }, {
                key: "_calculateKeyFrames",
                value: function(e) {
                    _get(_getPrototypeOf(GraphicAnimation.prototype), "_calculateKeyFrames", this).call(this, e), this._nodeIDAniDic[e.target] = e
                }
            }, {
                key: "getNodeDataByID",
                value: function(e) {
                    return this._nodeIDAniDic[e]
                }
            }, {
                key: "_getParams",
                value: function(e, t, i, n) {
                    var r = GraphicAnimation._temParam;
                    r.length = t.length;
                    var a, s = t.length;
                    for (a = 0; a < s; a++)
                        r[a] = this._getObjVar(e, t[a][0], i, t[a][1], n);
                    return r
                }
            }, {
                key: "_getObjVar",
                value: function(e, t, i, n, r) {
                    if (t in e) {
                        var a = e[t];
                        return i >= a.length && (i = a.length - 1), e[t][i]
                    }
                    return t in r ? r[t] : n
                }
            }, {
                key: "_getNodeGraphicData",
                value: function(e, t, i) {
                    i || (i = new Di), i.transform ? i.transform.identity() : i.transform = new f;
                    var n = this.getNodeDataByID(e);
                    if (!n)
                        return i;
                    var r, a, s, o = n.frames,
                        l = this._getParams(o, GraphicAnimation._drawTextureCmd, t, this._nodeDefaultProps[e]),
                        h = l[0],
                        u = l[5],
                        c = l[6],
                        _ = l[13],
                        d = l[14],
                        v = l[7],
                        p = l[8],
                        g = l[9],
                        y = l[11],
                        m = l[12];
                    r = l[3], a = l[4], 0 != r && 0 != a || (h = null), -1 == r && (r = 0), -1 == a && (a = 0), i.skin = h, i.width = r, i.height = a, h && ((s = this._getTextureByUrl(h)) ? (r || (r = s.sourceWidth), a || (a = s.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), i.alpha = l[10];
                    var T = i.transform;
                    0 != _ && (u = _ * r), 0 != d && (c = d * a), 0 == u && 0 == c || T.translate(-u, -c);
                    var C = null;
                    if (g || 1 !== v || 1 !== p || y || m) {
                        (C = GraphicAnimation._tempMt).identity(), C._bTransform = !0;
                        var x = .0174532922222222 * (g - y),
                            k = .0174532922222222 * (g + m),
                            S = Math.cos(k),
                            R = Math.sin(k),
                            b = Math.sin(x),
                            E = Math.cos(x);
                        C.a = v * S, C.b = v * R, C.c = -p * b, C.d = p * E, C.tx = C.ty = 0
                    }
                    return C && (T = f.mul(T, C, T)), T.translate(l[1], l[2]), i
                }
            }, {
                key: "_getTextureByUrl",
                value: function(e) {
                    return Ht.getRes(e)
                }
            }, {
                key: "setAniData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (e.animations) {
                        this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e);
                        var i, n, r = {},
                            a = [],
                            s = e.animations,
                            o = s.length;
                        for (i = 0; i < o; i++)
                            if (n = s[i], this._labels = null, (!t || t == n.name) && n) {
                                try {
                                    this._calGraphicData(n)
                                } catch (e) {
                                    console.warn("parse animation fail:" + n.name + ",empty animation created"), this._gList = []
                                }
                                var l = {};
                                l.interval = 1e3 / n.frameRate, l.frames = this._gList, l.labels = this._labels, l.name = n.name, a.push(l), r[n.name] = l
                            }
                        this.animationList = a, this.animationDic = r
                    }
                    GraphicAnimation._temParam.length = 0
                }
            }, {
                key: "parseByData",
                value: function(e) {
                    var t, i;
                    t = e.nodeRoot, i = e.aniO, delete e.nodeRoot, delete e.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t), this._labels = null;
                    try {
                        this._calGraphicData(i)
                    } catch (e) {
                        console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = []
                    }
                    var n = e;
                    return n.interval = 1e3 / i.frameRate, n.frames = this._gList, n.labels = this._labels, n.name = i.name, n
                }
            }, {
                key: "setUpAniData",
                value: function(e) {
                    if (e.animations) {
                        var t, i, n = {},
                            r = [],
                            a = e.animations,
                            s = a.length;
                        for (t = 0; t < s; t++)
                            if (i = a[t]) {
                                var o = {};
                                o.name = i.name, o.aniO = i, o.nodeRoot = e, r.push(o), n[i.name] = o
                            }
                        this.animationList = r, this.animationDic = n
                    }
                }
            }, {
                key: "_clear",
                value: function() {
                    this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null
                }
            }], [{
                key: "parseAnimationByData",
                value: function(e) {
                    var t;
                    return GraphicAnimation._I || (GraphicAnimation._I = new GraphicAnimation), t = GraphicAnimation._I.parseByData(e), GraphicAnimation._I._clear(), t
                }
            }, {
                key: "parseAnimationData",
                value: function(e) {
                    var t;
                    return GraphicAnimation._I || (GraphicAnimation._I = new GraphicAnimation), GraphicAnimation._I.setUpAniData(e), (t = {}).animationList = GraphicAnimation._I.animationList, t.animationDic = GraphicAnimation._I.animationDic, GraphicAnimation._I._clear(), t
                }
            }]), GraphicAnimation
        }(ni);
    Pi._drawTextureCmd = [
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
    ], Pi._temParam = [], Pi._tempMt = new f;
    var Di = function GraphicNode() {
            _classCallCheck(this, GraphicNode), this.alpha = 1
        },
        Bi = function(e) {
            function Animation() {
                var e;
                return _classCallCheck(this, Animation), (e = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this)))._setControlNode(_assertThisInitialized(e)), e
            }
            return _inherits(Animation, e), _createClass(Animation, [{
                key: "destroy",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.stop(), _get(_getPrototypeOf(Animation.prototype), "destroy", this).call(this, e), this._frames = null, this._labels = null
                }
            }, {
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    i && this._setFramesFromCache(i, !0), _get(_getPrototypeOf(Animation.prototype), "play", this).call(this, e, t, i)
                }
            }, {
                key: "_setFramesFromCache",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._url && (e = this._url + "#" + e), e && Animation.framesMap[e]) {
                        var i = Animation.framesMap[e];
                        return i instanceof Array ? (this._frames = Animation.framesMap[e], this._count = this._frames.length) : (i.nodeRoot && (Animation.framesMap[e] = Pi.parseAnimationByData(i), i = Animation.framesMap[e]), this._frames = i.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), !0
                    }
                    return t && console.log("ani not found:", e), !1
                }
            }, {
                key: "_copyLabels",
                value: function(e) {
                    if (!e)
                        return null;
                    var t, i;
                    for (i in t = {}, e)
                        t[i] = K.copyArray([], e[i]);
                    return t
                }
            }, {
                key: "_frameLoop",
                value: function() {
                    this._visible && this._style.alpha > .01 && this._frames && _get(_getPrototypeOf(Animation.prototype), "_frameLoop", this).call(this)
                }
            }, {
                key: "_displayToIndex",
                value: function(e) {
                    this._frames && (this.graphics = this._frames[e])
                }
            }, {
                key: "clear",
                value: function() {
                    return _get(_getPrototypeOf(Animation.prototype), "clear", this).call(this), this.stop(), this.graphics = null, this._frames = null, this._labels = null, this
                }
            }, {
                key: "loadImages",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return this._url = "", this._setFramesFromCache(t) || (this.frames = Animation.framesMap[t] ? Animation.framesMap[t] : Animation.createFrames(e, t)), this
                }
            }, {
                key: "loadAtlas",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    this._url = "";
                    var r = this;
                    if (!r._setFramesFromCache(n)) {
                        var onLoaded = function(i) {
                            e === i && (r.frames = Animation.framesMap[n] ? Animation.framesMap[n] : Animation.createFrames(e, n), t && t.run())
                        };
                        Ht.getAtlas(e) ? onLoaded(e) : i.loader.load(e, m.create(null, onLoaded, [e]), null, Ht.ATLAS)
                    }
                    return this
                }
            }, {
                key: "loadAnimation",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._url = e;
                    var r = this;
                    return this._actionName || (this._actionName = ""), r._setFramesFromCache(this._actionName) ? (r._setFramesFromCache(this._actionName, !0), this.index = 0, t && t.run()) : !n || Ht.getAtlas(n) ? this._loadAnimationData(e, t, n) : i.loader.load(n, m.create(this, this._loadAnimationData, [e, t, n]), null, Ht.ATLAS), this
                }
            }, {
                key: "_loadAnimationData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!n || Ht.getAtlas(n)) {
                        var r = this;
                        Ht.getRes(e) ? onLoaded(e) : i.loader.load(e, m.create(null, onLoaded, [e]), null, Ht.JSON)
                    } else
                        console.warn("atlas load fail:" + n);

                    function onLoaded(i) {
                        if (Ht.getRes(i)) {
                            if (e === i) {
                                var n;
                                if (Animation.framesMap[e + "#"])
                                    r._setFramesFromCache(r._actionName, !0), r.index = 0, r._resumePlay();
                                else {
                                    var a = Pi.parseAnimationData(Ht.getRes(e));
                                    if (!a)
                                        return;
                                    var s, o, l = a.animationList,
                                        h = l.length;
                                    for (s = 0; s < h; s++)
                                        n = l[s], Animation.framesMap[e + "#" + n.name] = n, o || (o = n);
                                    o && (Animation.framesMap[e + "#"] = o, r._setFramesFromCache(r._actionName, !0), r.index = 0), r._resumePlay()
                                }
                                t && t.run()
                            }
                            Ht.clearRes(e)
                        } else
                            Animation.framesMap[e + "#"] && (r._setFramesFromCache(r._actionName, !0), r.index = 0, r._resumePlay(), t && t.run())
                    }
                }
            }, {
                key: "frames",
                get: function() {
                    return this._frames
                },
                set: function(e) {
                    this._frames = e, e && (this._count = e.length, this._actionName && this._setFramesFromCache(this._actionName, !0), this.index = this._index)
                }
            }, {
                key: "source",
                set: function(e) {
                    e.indexOf(".ani") > -1 ? this.loadAnimation(e) : e.indexOf(".json") > -1 || e.indexOf("als") > -1 || e.indexOf("atlas") > -1 ? this.loadAtlas(e) : this.loadImages(e.split(","))
                }
            }, {
                key: "autoAnimation",
                set: function(e) {
                    this.play(0, !0, e)
                }
            }, {
                key: "autoPlay",
                set: function(e) {
                    e ? this.play() : this.stop()
                }
            }], [{
                key: "createFrames",
                value: function(e, t) {
                    var i;
                    if ("string" == typeof e) {
                        var n = Ht.getAtlas(e);
                        if (n && n.length) {
                            i = [];
                            for (var r = 0, a = n.length; r < a; r++) {
                                var s = new _t;
                                s.drawImage(Ht.getRes(n[r]), 0, 0), i.push(s)
                            }
                        }
                    } else if (e instanceof Array)
                        for (i = [], r = 0, a = e.length; r < a; r++)
                            (s = new _t).loadImage(e[r], 0, 0), i.push(s);
                    return t && (Animation.framesMap[t] = i), i
                }
            }, {
                key: "clearCache",
                value: function(e) {
                    var t, i = Animation.framesMap,
                        n = e + "#";
                    for (t in i)
                        t !== e && 0 !== t.indexOf(n) || delete Animation.framesMap[t]
                }
            }]), Animation
        }(ti);
    Bi.framesMap = {}, i.regClass(Bi), yt.regClass("laya.display.Animation", Bi), yt.regClass("Laya.Animation", Bi);
    var Oi = function(e) {
        function EffectAnimation() {
            var e;
            return _classCallCheck(this, EffectAnimation), (e = _possibleConstructorReturn(this, _getPrototypeOf(EffectAnimation).apply(this, arguments)))._initData = {}, e
        }
        return _inherits(EffectAnimation, e), _createClass(EffectAnimation, [{
            key: "_onOtherBegin",
            value: function(e) {
                e !== this && this.stop()
            }
        }, {
            key: "_addEvent",
            value: function() {
                this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction))
            }
        }, {
            key: "_onPlayAction",
            value: function() {
                this.play(0, !1)
            }
        }, {
            key: "play",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this._target && (this._target.event(EffectAnimation.EFFECT_BEGIN, [this]), this._recordInitData(), _get(_getPrototypeOf(EffectAnimation.prototype), "play", this).call(this, e, t, i))
            }
        }, {
            key: "_recordInitData",
            value: function() {
                var e, t, i;
                if (this._aniKeys)
                    for (t = this._aniKeys.length, e = 0; e < t; e++)
                        i = this._aniKeys[e], this._initData[i] = this._target[i]
            }
        }, {
            key: "_displayToIndex",
            value: function(e) {
                if (this._animationData) {
                    e < 0 && (e = 0), e > this._count && (e = this._count);
                    var t, i = this._animationData.nodes,
                        n = i.length;
                    for (n = n > 1 ? 1 : n, t = 0; t < n; t++)
                        this._displayNodeToFrame(i[t], e)
                }
            }
        }, {
            key: "_displayNodeToFrame",
            value: function(e, t) {
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this._target) {
                    var i, n, r, a, s, o, l, h, u, c = this._target,
                        _ = e.frames,
                        d = e.keys,
                        f = d.length,
                        v = e.secondFrames;
                    for (a = 0; a < f; a++)
                        n = _[i = d[a]], -1 == (s = v[i]) ? r = this._initData[i] : t < s ? (h = (l = e.keyframes[i])[0]).tween ? (null == (o = Zt[h.tweenMethod]) && (o = Zt.linearNone), u = l[1], r = o(t, this._initData[i], u.value - this._initData[i], u.index)) : r = this._initData[i] : r = n.length > t ? n[t] : n[n.length - 1], c[i] = r
                }
            }
        }, {
            key: "_calculateKeyFrames",
            value: function(e) {
                _get(_getPrototypeOf(EffectAnimation.prototype), "_calculateKeyFrames", this).call(this, e);
                var t, i, n = e.keyframes,
                    r = (e.target, {});
                for (t in e.secondFrames = r, n)
                    (i = n[t]).length <= 1 ? r[t] = -1 : r[t] = i[1].index
            }
        }, {
            key: "target",
            set: function(e) {
                this._target && this._target.off(EffectAnimation.EFFECT_BEGIN, this, this._onOtherBegin), this._target = e, this._target && this._target.on(EffectAnimation.EFFECT_BEGIN, this, this._onOtherBegin), this._addEvent()
            },
            get: function() {
                return this._target
            }
        }, {
            key: "playEvent",
            set: function(e) {
                this._playEvent = e, e && this._addEvent()
            }
        }, {
            key: "effectClass",
            set: function(e) {
                if (this._effectClass = yt.getClass(e), this._effectClass) {
                    var t = this._effectClass.uiView;
                    if (t) {
                        var i = t.animations;
                        if (i && i[0]) {
                            var n = i[0];
                            this._setUp({}, n), n.nodes && n.nodes[0] && (this._aniKeys = n.nodes[0].keys)
                        }
                    }
                }
            }
        }, {
            key: "effectData",
            set: function(e) {
                if (e) {
                    var t = e.animations;
                    if (t && t[0]) {
                        var i = t[0];
                        this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys)
                    }
                }
            }
        }]), EffectAnimation
    }(ni);
    Oi.EFFECT_BEGIN = "effectbegin", yt.regClass("laya.display.EffectAnimation", Oi), yt.regClass("Laya.EffectAnimation", Oi);
    var Fi = function(e) {
        function SceneLoader() {
            var e;
            return _classCallCheck(this, SceneLoader), (e = _possibleConstructorReturn(this, _getPrototypeOf(SceneLoader).call(this)))._completeHandler = new m(_assertThisInitialized(e), e.onOneLoadComplete), e.reset(), e
        }
        return _inherits(SceneLoader, e), _createClass(SceneLoader, [{
            key: "reset",
            value: function() {
                this._toLoadList = [], this._isLoading = !1, this.totalCount = 0
            }
        }, {
            key: "load",
            value: function(e) {
                var t, i, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e instanceof Array)
                    for (i = e.length, t = 0; t < i; t++)
                        this._addToLoadList(e[t], n);
                else
                    this._addToLoadList(e, n);
                r && this._checkNext()
            }
        }, {
            key: "_addToLoadList",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._toLoadList.indexOf(e) >= 0 || Ht.getRes(e) || (t ? this._toLoadList.push({
                    url: e
                }) : this._toLoadList.push(e), this.totalCount++)
            }
        }, {
            key: "_checkNext",
            value: function() {
                if (!this._isLoading) {
                    if (0 == this._toLoadList.length)
                        return void this.event(Ue.COMPLETE);
                    var e;
                    "string" == typeof(e = this._toLoadList.pop()) ? this.loadOne(e): this.loadOne(e.url, !0)
                }
            }
        }, {
            key: "loadOne",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._curUrl = e;
                var n = K.getFileExtension(this._curUrl);
                t ? i.loader.create(e, this._completeHandler) : SceneLoader.LoadableExtensions[n] ? i.loader.load(e, this._completeHandler, null, SceneLoader.LoadableExtensions[n]) : e != Xt.getFileLoadPath(e) || SceneLoader.No3dLoadTypes[n] || !zt.createMap[n] ? i.loader.load(e, this._completeHandler) : i.loader.create(e, this._completeHandler)
            }
        }, {
            key: "onOneLoadComplete",
            value: function() {
                this._isLoading = !1, Ht.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
                var e, t = K.getFileExtension(this._curUrl);
                SceneLoader.LoadableExtensions[t] && ((e = Ht.getRes(this._curUrl)) && e instanceof Ut && (e = e.json), e && (e.loadList && this.load(e.loadList, !1, !1), e.loadList3D && this.load(e.loadList3D, !0, !1)));
                "sk" == t && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event(Ue.PROGRESS, this.getProgress()), this._checkNext()
            }
        }, {
            key: "getProgress",
            value: function() {
                return this.loadedCount / this.totalCount
            }
        }, {
            key: "leftCount",
            get: function() {
                return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length
            }
        }, {
            key: "loadedCount",
            get: function() {
                return this.totalCount - this.leftCount
            }
        }]), SceneLoader
    }(T);
    Fi.LoadableExtensions = {
        scene: Ht.JSON,
        scene3d: Ht.JSON,
        ani: Ht.JSON,
        ui: Ht.JSON,
        prefab: Ht.PREFAB
    }, Fi.No3dLoadTypes = {
        png: !0,
        jpg: !0,
        txt: !0
    };
    var Ni = function(e) {
        function Scene() {
            var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return _classCallCheck(this, Scene), (e = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this))).autoDestroyAtClosed = !1, e.url = null, e._viewCreated = !1, e._$componentType = "Scene", e._setBit(dt.NOT_READY, !0), Scene.unDestroyedScenes.push(_assertThisInitialized(e)), e._scene = _assertThisInitialized(e), t && e.createChildren(), e
        }
        return _inherits(Scene, e), _createClass(Scene, [{
            key: "createChildren",
            value: function() {}
        }, {
            key: "loadScene",
            value: function(e) {
                var t = e.indexOf(".") > -1 ? e : e + ".scene",
                    n = i.loader.getRes(t);
                if (n)
                    this.createView(n);
                else {
                    i.loader.resetProgress();
                    var r = new Fi;
                    r.on(Ue.COMPLETE, this, this._onSceneLoaded, [t]), r.load(t)
                }
            }
        }, {
            key: "_onSceneLoaded",
            value: function(e) {
                this.createView(i.Loader.getRes(e))
            }
        }, {
            key: "createView",
            value: function(e) {
                e && !this._viewCreated && (this._viewCreated = !0, ai.createByData(this, e))
            }
        }, {
            key: "getNodeByID",
            value: function(e) {
                return this._idMap ? this._idMap[e] : null
            }
        }, {
            key: "open",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                e && Scene.closeAll(), Scene.root.addChild(this), this.onOpened(t)
            }
        }, {
            key: "onOpened",
            value: function(e) {}
        }, {
            key: "close",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.onClosed(e), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf()
            }
        }, {
            key: "onClosed",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            }
        }, {
            key: "destroy",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this._idMap = null, _get(_getPrototypeOf(Scene.prototype), "destroy", this).call(this, e);
                for (var t = Scene.unDestroyedScenes, i = t.length - 1; i > -1; i--)
                    if (t[i] === this)
                        return void t.splice(i, 1)
            }
        }, {
            key: "_sizeChanged",
            value: function() {
                this.event(Ue.RESIZE)
            }
        }, {
            key: "scaleX",
            set: function(e) {
                _get(_getPrototypeOf(Scene.prototype), "get_scaleX", this).call(this) != e && (_get(_getPrototypeOf(Scene.prototype), "set_scaleX", this).call(this, e), this.event(Ue.RESIZE))
            },
            get: function() {
                return _get(_getPrototypeOf(Scene.prototype), "scaleX", this)
            }
        }, {
            key: "scaleY",
            set: function(e) {
                _get(_getPrototypeOf(Scene.prototype), "get_scaleY", this).call(this) != e && (_get(_getPrototypeOf(Scene.prototype), "set_scaleY", this).call(this, e), this.event(Ue.RESIZE))
            },
            get: function() {
                return _get(_getPrototypeOf(Scene.prototype), "scaleY", this)
            }
        }, {
            key: "width",
            get: function() {
                if (this._width)
                    return this._width;
                for (var e = 0, t = this.numChildren - 1; t > -1; t--) {
                    var i = this.getChildAt(t);
                    i._visible && (e = Math.max(i._x + i.width * i.scaleX, e))
                }
                return e
            },
            set: function(e) {
                _get(_getPrototypeOf(Scene.prototype), "get_width", this).call(this) != e && (_get(_getPrototypeOf(Scene.prototype), "set_width", this).call(this, e), this.callLater(this._sizeChanged))
            }
        }, {
            key: "height",
            get: function() {
                if (this._height)
                    return this._height;
                for (var e = 0, t = this.numChildren - 1; t > -1; t--) {
                    var i = this.getChildAt(t);
                    i._visible && (e = Math.max(i._y + i.height * i.scaleY, e))
                }
                return e
            },
            set: function(e) {
                _get(_getPrototypeOf(Scene.prototype), "get_height", this).call(this) != e && (_get(_getPrototypeOf(Scene.prototype), "set_height", this).call(this, e), this.callLater(this._sizeChanged))
            }
        }, {
            key: "timer",
            get: function() {
                return this._timer || i.timer
            },
            set: function(e) {
                this._timer = e
            }
        }], [{
            key: "setUIMap",
            value: function(e) {
                var t = i.loader.getRes(e);
                if (!t)
                    throw "请提前加载uimap的json，再使用该接口设置！";
                for (var n in t)
                    i.Loader.loadedMap[x.formatURL(n + ".scene")] = t[n]
            }
        }, {
            key: "load",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                i.loader.resetProgress();
                var r = new Fi;

                function onProgress(e) {
                    Scene._loadPage && Scene._loadPage.event("progress", e), n && n.runWith(e)
                }

                function create() {
                    r.off(Ue.PROGRESS, null, onProgress);
                    var n = i.Loader.getRes(e);
                    if (!n)
                        throw "Can not find scene:" + e;
                    if (!n.props)
                        throw "Scene data is error:" + e;
                    var a = n.props.runtime ? n.props.runtime : n.type,
                        s = i.ClassUtils.getClass(a);
                    if ("instance" == n.props.renderType)
                        var o = s.instance || (s.instance = new s);
                    else
                        o = new s;
                    if (!(o && o instanceof xt))
                        throw "Can not find scene:" + a;
                    o.url = e, o._getBit(dt.NOT_READY) ? (o.on("onViewCreated", null, (function() {
                        t && t.runWith(o)
                    })), o.createView(n)) : t && t.runWith(o), Scene.hideLoadingPage()
                }
                r.on(Ue.PROGRESS, null, onProgress), r.once(Ue.COMPLETE, null, create), r.load(e)
            }
        }, {
            key: "open",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if (i instanceof m) {
                    var a = n;
                    n = i, i = a
                }
                Scene.showLoadingPage(), Scene.load(e, m.create(null, this._onSceneLoaded, [t, n, i]), r)
            }
        }, {
            key: "_onSceneLoaded",
            value: function(e, t, i, n) {
                n.open(e, i), t && t.runWith(n)
            }
        }, {
            key: "close",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = !1, n = Scene.unDestroyedScenes, r = 0, a = n.length; r < a; r++) {
                    var s = n[r];
                    s && s.parent && s.url === e && s.name == t && (s.close(), i = !0)
                }
                return i
            }
        }, {
            key: "closeAll",
            value: function() {
                for (var e = Scene.root, t = 0, i = e.numChildren; t < i; t++) {
                    var n = e.getChildAt(0);
                    n instanceof Scene ? n.close() : n.removeSelf()
                }
            }
        }, {
            key: "destroy",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = !1, n = [].concat(Scene.unDestroyedScenes), r = 0, a = n.length; r < a; r++) {
                    var s = n[r];
                    s.url !== e || s.name != t || s.destroyed || (s.destroy(), i = !0)
                }
                return i
            }
        }, {
            key: "gc",
            value: function() {
                k.destroyUnusedResources()
            }
        }, {
            key: "setLoadingPage",
            value: function(e) {
                Scene._loadPage != e && (Scene._loadPage = e)
            }
        }, {
            key: "showLoadingPage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                Scene._loadPage && (i.systemTimer.clear(null, Scene._showLoading), i.systemTimer.clear(null, Scene._hideLoading), i.systemTimer.once(t, null, Scene._showLoading, [e], !1))
            }
        }, {
            key: "_showLoading",
            value: function(e) {
                i.stage.addChild(Scene._loadPage), Scene._loadPage.onOpened(e)
            }
        }, {
            key: "_hideLoading",
            value: function() {
                Scene._loadPage.close()
            }
        }, {
            key: "hideLoadingPage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                Scene._loadPage && (i.systemTimer.clear(null, Scene._showLoading), i.systemTimer.clear(null, Scene._hideLoading), i.systemTimer.once(e, null, Scene._hideLoading))
            }
        }, {
            key: "root",
            get: function() {
                return Scene._root || (Scene._root = i.stage.addChild(new kt), Scene._root.name = "root", i.stage.on("resize", null, (function() {
                    Scene._root.size(i.stage.width, i.stage.height), Scene._root.event(Ue.RESIZE)
                })), Scene._root.size(i.stage.width, i.stage.height), Scene._root.event(Ue.RESIZE)), Scene._root
            }
        }]), Scene
    }(kt);
    Ni.unDestroyedScenes = [], i.regClass(Ni), yt.regClass("laya.display.Scene", Ni), yt.regClass("Laya.Scene", Ni);
    var Gi = function() {
        function DrawParticleCmd() {
            _classCallCheck(this, DrawParticleCmd)
        }
        return _createClass(DrawParticleCmd, [{
            key: "recover",
            value: function() {
                this._templ = null, n.recover("DrawParticleCmd", this)
            }
        }, {
            key: "run",
            value: function(e, t, i) {
                e.drawParticle(t, i, this._templ)
            }
        }, {
            key: "cmdID",
            get: function() {
                return DrawParticleCmd.ID
            }
        }], [{
            key: "create",
            value: function(e) {
                var t = n.getItemByClass("DrawParticleCmd", DrawParticleCmd);
                return t._templ = e, t
            }
        }]), DrawParticleCmd
    }();
    Gi.ID = "DrawParticleCmd";
    var Ui = function() {
            function FilterSetterBase() {
                _classCallCheck(this, FilterSetterBase)
            }
            return _createClass(FilterSetterBase, [{
                key: "paramChanged",
                value: function() {
                    xi.systemTimer.callLater(this, this.buildFilter)
                }
            }, {
                key: "buildFilter",
                value: function() {
                    this._target && this.addFilter(this._target)
                }
            }, {
                key: "addFilter",
                value: function(e) {
                    var t;
                    e && (e.filters ? (t = e.filters).indexOf(this._filter) < 0 && (t.push(this._filter), e.filters = K.copyArray([], t)) : e.filters = [this._filter])
                }
            }, {
                key: "removeFilter",
                value: function(e) {
                    e && (e.filters = null)
                }
            }, {
                key: "target",
                set: function(e) {
                    this._target != e && (this._target = e, this.paramChanged())
                }
            }]), FilterSetterBase
        }(),
        Wi = function() {
            function BlurFilterGLRender() {
                _classCallCheck(this, BlurFilterGLRender)
            }
            return _createClass(BlurFilterGLRender, [{
                key: "render",
                value: function(e, t, i, n, r) {
                    var a = Y.create(N.TEXTURE2D, 0);
                    this.setShaderInfo(a, r, e.width, e.height), t.drawTarget(e, 0, 0, i, n, f.EMPTY.identity(), a)
                }
            }, {
                key: "setShaderInfo",
                value: function(e, t, i, n) {
                    e.defines.add(z.BLUR);
                    var r = e;
                    BlurFilterGLRender.blurinfo[0] = i, BlurFilterGLRender.blurinfo[1] = n, r.blurInfo = BlurFilterGLRender.blurinfo;
                    var a = t.strength / 3,
                        s = a * a;
                    t.strength_sig2_2sig2_gauss1[0] = t.strength, t.strength_sig2_2sig2_gauss1[1] = s, t.strength_sig2_2sig2_gauss1[2] = 2 * s, t.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * s), r.strength_sig2_2sig2_gauss1 = t.strength_sig2_2sig2_gauss1
                }
            }]), BlurFilterGLRender
        }();
    Wi.blurinfo = new Array(2);
    var Vi = function(e) {
            function BlurFilter() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
                return _classCallCheck(this, BlurFilter), (e = _possibleConstructorReturn(this, _getPrototypeOf(BlurFilter).call(this))).strength_sig2_2sig2_gauss1 = [], e.strength = t, e._glRender = new Wi, e
            }
            return _inherits(BlurFilter, e), _createClass(BlurFilter, [{
                key: "getStrenth_sig2_2sig2_native",
                value: function() {
                    this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
                    var e = this.strength / 3,
                        t = e * e;
                    return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = t, this.strength_sig2_native[2] = 2 * t, this.strength_sig2_native[3] = 1 / (2 * Math.PI * t), this.strength_sig2_native
                }
            }, {
                key: "type",
                get: function() {
                    return z.BLUR
                }
            }]), BlurFilter
        }(z),
        Yi = function(e) {
            function BlurFilterSetter() {
                var e;
                return _classCallCheck(this, BlurFilterSetter), (e = _possibleConstructorReturn(this, _getPrototypeOf(BlurFilterSetter).call(this)))._strength = 4, e._filter = new Vi(e.strength), e
            }
            return _inherits(BlurFilterSetter, e), _createClass(BlurFilterSetter, [{
                key: "buildFilter",
                value: function() {
                    this._filter = new Vi(this.strength), _get(_getPrototypeOf(BlurFilterSetter.prototype), "buildFilter", this).call(this)
                }
            }, {
                key: "strength",
                get: function() {
                    return this._strength
                },
                set: function(e) {
                    this._strength = e
                }
            }]), BlurFilterSetter
        }(Ui),
        Hi = function() {
            function ButtonEffect() {
                _classCallCheck(this, ButtonEffect), this._curState = 0, this.effectScale = 1.5, this.tweenTime = 300
            }
            return _createClass(ButtonEffect, [{
                key: "toChangedState",
                value: function() {
                    this._curState = 1, this._curTween && $t.clear(this._curTween), this._curTween = $t.to(this._tar, {
                        scaleX: this.effectScale,
                        scaleY: this.effectScale
                    }, this.tweenTime, Zt[this.effectEase], m.create(this, this.tweenComplete))
                }
            }, {
                key: "toInitState",
                value: function() {
                    2 != this._curState && (this._curTween && $t.clear(this._curTween), this._curState = 2, this._curTween = $t.to(this._tar, {
                        scaleX: 1,
                        scaleY: 1
                    }, this.tweenTime, Zt[this.backEase], m.create(this, this.tweenComplete)))
                }
            }, {
                key: "tweenComplete",
                value: function() {
                    this._curState = 0, this._curTween = null
                }
            }, {
                key: "target",
                set: function(e) {
                    this._tar = e, e.on(Ue.MOUSE_DOWN, this, this.toChangedState), e.on(Ue.MOUSE_UP, this, this.toInitState), e.on(Ue.MOUSE_OUT, this, this.toInitState)
                }
            }]), ButtonEffect
        }(),
        Xi = function(e) {
            function ColorFilterSetter() {
                var e;
                return _classCallCheck(this, ColorFilterSetter), (e = _possibleConstructorReturn(this, _getPrototypeOf(ColorFilterSetter).call(this)))._brightness = 0, e._contrast = 0, e._saturation = 0, e._hue = 0, e._red = 0, e._green = 0, e._blue = 0, e._alpha = 0, e._filter = new Q, e
            }
            return _inherits(ColorFilterSetter, e), _createClass(ColorFilterSetter, [{
                key: "buildFilter",
                value: function() {
                    this._filter.reset(), this._filter.color(this.red, this.green, this.blue, this.alpha), this._filter.adjustHue(this.hue), this._filter.adjustContrast(this.contrast), this._filter.adjustBrightness(this.brightness), this._filter.adjustSaturation(this.saturation), _get(_getPrototypeOf(ColorFilterSetter.prototype), "buildFilter", this).call(this)
                }
            }, {
                key: "brightness",
                get: function() {
                    return this._brightness
                },
                set: function(e) {
                    this._brightness = e, this.paramChanged()
                }
            }, {
                key: "contrast",
                get: function() {
                    return this._contrast
                },
                set: function(e) {
                    this._contrast = e, this.paramChanged()
                }
            }, {
                key: "saturation",
                get: function() {
                    return this._saturation
                },
                set: function(e) {
                    this._saturation = e, this.paramChanged()
                }
            }, {
                key: "hue",
                get: function() {
                    return this._hue
                },
                set: function(e) {
                    this._hue = e, this.paramChanged()
                }
            }, {
                key: "red",
                get: function() {
                    return this._red
                },
                set: function(e) {
                    this._red = e, this.paramChanged()
                }
            }, {
                key: "green",
                get: function() {
                    return this._green
                },
                set: function(e) {
                    this._green = e, this.paramChanged()
                }
            }, {
                key: "blue",
                get: function() {
                    return this._blue
                },
                set: function(e) {
                    this._blue = e, this.paramChanged()
                }
            }, {
                key: "color",
                get: function() {
                    return this._color
                },
                set: function(e) {
                    var t;
                    this._color = e, t = j.create(e), this._red = 255 * t.arrColor[0], this._green = 255 * t.arrColor[1], this._blue = 255 * t.arrColor[2], this.paramChanged()
                }
            }, {
                key: "alpha",
                get: function() {
                    return this._alpha
                },
                set: function(e) {
                    this._alpha = e, this.paramChanged()
                }
            }]), ColorFilterSetter
        }(Ui),
        zi = function(e) {
            function EffectBase() {
                var e;
                return _classCallCheck(this, EffectBase), (e = _possibleConstructorReturn(this, _getPrototypeOf(EffectBase).apply(this, arguments))).duration = 1e3, e.delay = 0, e.repeat = 0, e.autoDestroyAtComplete = !0, e
            }
            return _inherits(EffectBase, e), _createClass(EffectBase, [{
                key: "_onAwake",
                value: function() {
                    this.target = this.target || this.owner, this.autoDestroyAtComplete && (this._comlete = m.create(this.target, this.target.destroy, null, !1)), this.eventName ? this.owner.on(this.eventName, this, this._exeTween) : this._exeTween()
                }
            }, {
                key: "_exeTween",
                value: function() {
                    this._tween = this._doTween(), this._tween.repeat = this.repeat
                }
            }, {
                key: "_doTween",
                value: function() {
                    return null
                }
            }, {
                key: "onReset",
                value: function() {
                    this.duration = 1e3, this.delay = 0, this.repeat = 0, this.ease = null, this.target = null, this.eventName && (this.owner.off(this.eventName, this, this._exeTween), this.eventName = null), this._comlete && (this._comlete.recover(), this._comlete = null), this._tween && (this._tween.clear(), this._tween = null)
                }
            }]), EffectBase
        }(ei),
        Ki = function(e) {
            function FadeIn() {
                return _classCallCheck(this, FadeIn), _possibleConstructorReturn(this, _getPrototypeOf(FadeIn).apply(this, arguments))
            }
            return _inherits(FadeIn, e), _createClass(FadeIn, [{
                key: "_doTween",
                value: function() {
                    return this.target.alpha = 0, $t.to(this.target, {
                        alpha: 1
                    }, this.duration, Zt[this.ease], this._comlete, this.delay)
                }
            }]), FadeIn
        }(zi),
        ji = function(e) {
            function FadeOut() {
                return _classCallCheck(this, FadeOut), _possibleConstructorReturn(this, _getPrototypeOf(FadeOut).apply(this, arguments))
            }
            return _inherits(FadeOut, e), _createClass(FadeOut, [{
                key: "_doTween",
                value: function() {
                    return this.target.alpha = 1, $t.to(this.target, {
                        alpha: 0
                    }, this.duration, Zt[this.ease], this._comlete, this.delay)
                }
            }]), FadeOut
        }(zi),
        Qi = function() {
            function GlowFilterGLRender() {
                _classCallCheck(this, GlowFilterGLRender)
            }
            return _createClass(GlowFilterGLRender, [{
                key: "setShaderInfo",
                value: function(e, t, i, n) {
                    e.defines.add(n.type);
                    var r = e;
                    r.u_blurInfo1 = n._sv_blurInfo1;
                    var a = n._sv_blurInfo2;
                    a[0] = t, a[1] = i, r.u_blurInfo2 = a, r.u_color = n.getColor()
                }
            }, {
                key: "render",
                value: function(e, t, i, n, r) {
                    var a = i,
                        s = n,
                        o = Y.create(N.TEXTURE2D, 0);
                    this.setShaderInfo(o, a, s, r);
                    var l = Y.create(N.TEXTURE2D, 0),
                        h = f.TEMP.identity();
                    t.drawTarget(e, 0, 0, a, s, h, o), t.drawTarget(e, 0, 0, a, s, h, l)
                }
            }]), GlowFilterGLRender
        }(),
        qi = function(e) {
            function GlowFilter(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6;
                return _classCallCheck(this, GlowFilter), (t = _possibleConstructorReturn(this, _getPrototypeOf(GlowFilter).call(this)))._elements = new Float32Array(9), t._sv_blurInfo1 = new Array(4), t._sv_blurInfo2 = [0, 0, 1, 0], t._color = new j(e), t.blur = Math.min(i, 20), t.offX = n, t.offY = r, t._sv_blurInfo1[0] = t._sv_blurInfo1[1] = t.blur, t._sv_blurInfo1[2] = n, t._sv_blurInfo1[3] = -r, t._glRender = new Qi, t
            }
            return _inherits(GlowFilter, e), _createClass(GlowFilter, [{
                key: "getColor",
                value: function() {
                    return this._color.arrColor
                }
            }, {
                key: "getColorNative",
                value: function() {
                    this._color_native || (this._color_native = new Float32Array(4));
                    var e = this.getColor();
                    return this._color_native[0] = e[0], this._color_native[1] = e[1], this._color_native[2] = e[2], this._color_native[3] = e[3], this._color_native
                }
            }, {
                key: "getBlurInfo1Native",
                value: function() {
                    return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, this._blurInof1_native[3] = this.offY, this._blurInof1_native
                }
            }, {
                key: "getBlurInfo2Native",
                value: function() {
                    return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), this._blurInof2_native[2] = 1, this._blurInof2_native
                }
            }, {
                key: "type",
                get: function() {
                    return Vi.GLOW
                }
            }, {
                key: "offY",
                get: function() {
                    return this._elements[6]
                },
                set: function(e) {
                    this._elements[6] = e, this._sv_blurInfo1[3] = -e
                }
            }, {
                key: "offX",
                get: function() {
                    return this._elements[5]
                },
                set: function(e) {
                    this._elements[5] = e, this._sv_blurInfo1[2] = e
                }
            }, {
                key: "blur",
                get: function() {
                    return this._elements[4]
                },
                set: function(e) {
                    this._elements[4] = e, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = e
                }
            }]), GlowFilter
        }(z),
        Zi = function(e) {
            function GlowFilterSetter() {
                var e;
                return _classCallCheck(this, GlowFilterSetter), (e = _possibleConstructorReturn(this, _getPrototypeOf(GlowFilterSetter).call(this)))._color = "#ff0000", e._blur = 4, e._offX = 6, e._offY = 6, e._filter = new qi(e._color), e
            }
            return _inherits(GlowFilterSetter, e), _createClass(GlowFilterSetter, [{
                key: "buildFilter",
                value: function() {
                    this._filter = new qi(this.color, this.blur, this.offX, this.offY), _get(_getPrototypeOf(GlowFilterSetter.prototype), "buildFilter", this).call(this)
                }
            }, {
                key: "color",
                get: function() {
                    return this._color
                },
                set: function(e) {
                    this._color = e, this.paramChanged()
                }
            }, {
                key: "blur",
                get: function() {
                    return this._blur
                },
                set: function(e) {
                    this._blur = e, this.paramChanged()
                }
            }, {
                key: "offX",
                get: function() {
                    return this._offX
                },
                set: function(e) {
                    this._offX = e, this.paramChanged()
                }
            }, {
                key: "offY",
                get: function() {
                    return this._offY
                },
                set: function(e) {
                    this._offY = e, this.paramChanged()
                }
            }]), GlowFilterSetter
        }(Ui),
        $i = function KeyLocation() {
            _classCallCheck(this, KeyLocation)
        };
    $i.STANDARD = 0, $i.LEFT = 1, $i.RIGHT = 2, $i.NUM_PAD = 3;
    var Ji = function Keyboard() {
        _classCallCheck(this, Keyboard)
    };
    Ji.NUMBER_0 = 48, Ji.NUMBER_1 = 49, Ji.NUMBER_2 = 50, Ji.NUMBER_3 = 51, Ji.NUMBER_4 = 52, Ji.NUMBER_5 = 53, Ji.NUMBER_6 = 54, Ji.NUMBER_7 = 55, Ji.NUMBER_8 = 56, Ji.NUMBER_9 = 57, Ji.A = 65, Ji.B = 66, Ji.C = 67, Ji.D = 68, Ji.E = 69, Ji.F = 70, Ji.G = 71, Ji.H = 72, Ji.I = 73, Ji.J = 74, Ji.K = 75, Ji.L = 76, Ji.M = 77, Ji.N = 78, Ji.O = 79, Ji.P = 80, Ji.Q = 81, Ji.R = 82, Ji.S = 83, Ji.T = 84, Ji.U = 85, Ji.V = 86, Ji.W = 87, Ji.X = 88, Ji.Y = 89, Ji.Z = 90, Ji.F1 = 112, Ji.F2 = 113, Ji.F3 = 114, Ji.F4 = 115, Ji.F5 = 116, Ji.F6 = 117, Ji.F7 = 118, Ji.F8 = 119, Ji.F9 = 120, Ji.F10 = 121, Ji.F11 = 122, Ji.F12 = 123, Ji.F13 = 124, Ji.F14 = 125, Ji.F15 = 126, Ji.NUMPAD = 21, Ji.NUMPAD_0 = 96, Ji.NUMPAD_1 = 97, Ji.NUMPAD_2 = 98, Ji.NUMPAD_3 = 99, Ji.NUMPAD_4 = 100, Ji.NUMPAD_5 = 101, Ji.NUMPAD_6 = 102, Ji.NUMPAD_7 = 103, Ji.NUMPAD_8 = 104, Ji.NUMPAD_9 = 105, Ji.NUMPAD_ADD = 107, Ji.NUMPAD_DECIMAL = 110, Ji.NUMPAD_DIVIDE = 111, Ji.NUMPAD_ENTER = 108, Ji.NUMPAD_MULTIPLY = 106, Ji.NUMPAD_SUBTRACT = 109, Ji.SEMICOLON = 186, Ji.EQUAL = 187, Ji.COMMA = 188, Ji.MINUS = 189, Ji.PERIOD = 190, Ji.SLASH = 191, Ji.BACKQUOTE = 192, Ji.LEFTBRACKET = 219, Ji.BACKSLASH = 220, Ji.RIGHTBRACKET = 221, Ji.QUOTE = 222, Ji.ALTERNATE = 18, Ji.BACKSPACE = 8, Ji.CAPS_LOCK = 20, Ji.COMMAND = 15, Ji.CONTROL = 17, Ji.DELETE = 46, Ji.ENTER = 13, Ji.ESCAPE = 27, Ji.PAGE_UP = 33, Ji.PAGE_DOWN = 34, Ji.END = 35, Ji.HOME = 36, Ji.LEFT = 37, Ji.UP = 38, Ji.RIGHT = 39, Ji.DOWN = 40, Ji.SHIFT = 16, Ji.SPACE = 32, Ji.TAB = 9, Ji.INSERT = 45;
    var en = function() {
            function CommandEncoder(e, t, i, n) {
                _classCallCheck(this, CommandEncoder), this._idata = []
            }
            return _createClass(CommandEncoder, [{
                key: "getArrayData",
                value: function() {
                    return this._idata
                }
            }, {
                key: "getPtrID",
                value: function() {
                    return 0
                }
            }, {
                key: "beginEncoding",
                value: function() {}
            }, {
                key: "endEncoding",
                value: function() {}
            }, {
                key: "clearEncoding",
                value: function() {
                    this._idata.length = 0
                }
            }, {
                key: "getCount",
                value: function() {
                    return this._idata.length
                }
            }, {
                key: "add_ShaderValue",
                value: function(e) {
                    this._idata.push(e)
                }
            }, {
                key: "addShaderUniform",
                value: function(e) {
                    this.add_ShaderValue(e)
                }
            }]), CommandEncoder
        }(),
        tn = function() {
            function LayaGLRunner() {
                _classCallCheck(this, LayaGLRunner)
            }
            return _createClass(LayaGLRunner, null, [{
                key: "uploadShaderUniforms",
                value: function(e, t, i, n) {
                    for (var r = i._data, a = t.getArrayData(), s = 0, o = 0, l = a.length; o < l; o++) {
                        var h = a[o];
                        if (n || -1 !== h.textureID) {
                            var u = r[h.dataOffset];
                            null != u && (s += h.fun.call(h.caller, h, u))
                        }
                    }
                    return s
                }
            }, {
                key: "uploadCustomUniform",
                value: function(e, t, i, n) {
                    var r = 0,
                        a = t[i];
                    return a && null != n && (r += a.fun.call(a.caller, a, n)), r
                }
            }, {
                key: "uploadShaderUniformsForNative",
                value: function(e, t, i) {
                    var n = g.UPLOAD_SHADER_UNIFORM_TYPE_ID;
                    i._runtimeCopyValues.length > 0 && (n = g.UPLOAD_SHADER_UNIFORM_TYPE_DATA);
                    var r = i._data;
                    return g.instance.uploadShaderUniforms(t, r, n)
                }
            }]), LayaGLRunner
        }(),
        nn = function() {
            function QuickTestTool() {
                _classCallCheck(this, QuickTestTool)
            }
            return _createClass(QuickTestTool, [{
                key: "render",
                value: function(e, t, i) {
                    QuickTestTool._addType(this._renderType), QuickTestTool.showRenderTypeInfo(this._renderType), vt.renders[this._renderType]._fun(this, e, t + this._x, i + this._y), this._repaint = 0
                }
            }, {
                key: "_stageRender",
                value: function(e, t, n) {
                    QuickTestTool._countStart(), QuickTestTool._PreStageRender.call(i.stage, e, t, n), QuickTestTool._countEnd()
                }
            }], [{
                key: "getMCDName",
                value: function(e) {
                    return QuickTestTool._typeToNameDic[e]
                }
            }, {
                key: "showRenderTypeInfo",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t || !QuickTestTool.showedDic[e]) {
                        if (QuickTestTool.showedDic[e] = !0, !QuickTestTool._rendertypeToStrDic[e]) {
                            var i, n = [];
                            for (i = 1; i <= e;)
                                i & e && n.push(QuickTestTool.getMCDName(i & e)), i <<= 1;
                            QuickTestTool._rendertypeToStrDic[e] = n.join(",")
                        }
                        console.log("cmd:", QuickTestTool._rendertypeToStrDic[e])
                    }
                }
            }, {
                key: "__init__",
                value: function() {
                    QuickTestTool._typeToNameDic[at.ALPHA] = "ALPHA", QuickTestTool._typeToNameDic[at.TRANSFORM] = "TRANSFORM", QuickTestTool._typeToNameDic[at.TEXTURE] = "TEXTURE", QuickTestTool._typeToNameDic[at.GRAPHICS] = "GRAPHICS", QuickTestTool._typeToNameDic[at.ONECHILD] = "ONECHILD", QuickTestTool._typeToNameDic[at.CHILDS] = "CHILDS", QuickTestTool._typeToNameDic[at.TRANSFORM | at.ALPHA] = "TRANSFORM|ALPHA", QuickTestTool._typeToNameDic[at.CANVAS] = "CANVAS", QuickTestTool._typeToNameDic[at.BLEND] = "BLEND", QuickTestTool._typeToNameDic[at.FILTERS] = "FILTERS", QuickTestTool._typeToNameDic[at.MASK] = "MASK", QuickTestTool._typeToNameDic[at.CLIP] = "CLIP", QuickTestTool._typeToNameDic[at.LAYAGL3D] = "LAYAGL3D"
                }
            }, {
                key: "_countStart",
                value: function() {
                    var e;
                    for (e in QuickTestTool._countDic)
                        QuickTestTool._countDic[e] = 0
                }
            }, {
                key: "_countEnd",
                value: function() {
                    QuickTestTool._i++, QuickTestTool._i > 60 && (QuickTestTool.showCountInfo(), QuickTestTool._i = 0)
                }
            }, {
                key: "_addType",
                value: function(e) {
                    QuickTestTool._countDic[e] ? QuickTestTool._countDic[e] += 1 : QuickTestTool._countDic[e] = 1
                }
            }, {
                key: "showCountInfo",
                value: function() {
                    var e;
                    for (e in console.log("==================="), QuickTestTool._countDic)
                        console.log("count:" + QuickTestTool._countDic[e]), QuickTestTool.showRenderTypeInfo(e, !0)
                }
            }, {
                key: "enableQuickTest",
                value: function() {
                    QuickTestTool.__init__(), kt.prototype.render = QuickTestTool.prototype.render, QuickTestTool._PreStageRender = It.prototype.render, It.prototype.render = QuickTestTool.prototype._stageRender
                }
            }]), QuickTestTool
        }();
    nn.showedDic = {}, nn._rendertypeToStrDic = {}, nn._typeToNameDic = {}, nn._countDic = {}, nn._i = 0;
    var rn = function(e) {
            function Sound() {
                return _classCallCheck(this, Sound), _possibleConstructorReturn(this, _getPrototypeOf(Sound).apply(this, arguments))
            }
            return _inherits(Sound, e), _createClass(Sound, [{
                key: "load",
                value: function(e) {}
            }, {
                key: "play",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null
                }
            }, {
                key: "dispose",
                value: function() {}
            }, {
                key: "duration",
                get: function() {
                    return 0
                }
            }]), Sound
        }(T),
        an = function(e) {
            function SoundNode() {
                var e;
                return _classCallCheck(this, SoundNode), (e = _possibleConstructorReturn(this, _getPrototypeOf(SoundNode).call(this))).visible = !1, e.on(Ue.ADDED, _assertThisInitialized(e), e._onParentChange), e.on(Ue.REMOVED, _assertThisInitialized(e), e._onParentChange), e
            }
            return _inherits(SoundNode, e), _createClass(SoundNode, [{
                key: "_onParentChange",
                value: function() {
                    this.target = this.parent
                }
            }, {
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    isNaN(e) && (e = 1), this.url && (this.stop(), this._channel = Gt.playSound(this.url, e, t))
                }
            }, {
                key: "stop",
                value: function() {
                    this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null
                }
            }, {
                key: "_setPlayAction",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    this[i] && e && (n ? e.on(t, this, this[i]) : e.off(t, this, this[i]))
                }
            }, {
                key: "_setPlayActions",
                value: function(e, t, i) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (e && t) {
                        var r, a, s = t.split(",");
                        for (a = s.length, r = 0; r < a; r++)
                            this._setPlayAction(e, s[r], i, n)
                    }
                }
            }, {
                key: "playEvent",
                set: function(e) {
                    this._playEvents = e, e && this._tar && this._setPlayActions(this._tar, e, "play")
                }
            }, {
                key: "target",
                set: function(e) {
                    this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), this._tar = e, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), this._setPlayActions(this._tar, this._stopEvents, "stop", !0))
                }
            }, {
                key: "stopEvent",
                set: function(e) {
                    this._stopEvents = e, e && this._tar && this._setPlayActions(this._tar, e, "stop")
                }
            }]), SoundNode
        }(kt),
        sn = function() {
            function ResourceVersion() {
                _classCallCheck(this, ResourceVersion)
            }
            return _createClass(ResourceVersion, null, [{
                key: "enable",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    ResourceVersion.type = n, i.loader.load(e, m.create(null, ResourceVersion.onManifestLoaded, [t]), null, Ht.JSON)
                }
            }, {
                key: "onManifestLoaded",
                value: function(e, t) {
                    ResourceVersion.manifest = t, x.customFormat = ResourceVersion.addVersionPrefix, e.run(), t || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")
                }
            }, {
                key: "addVersionPrefix",
                value: function(e) {
                    return e = x.getAdptedFilePath(e), ResourceVersion.manifest && ResourceVersion.manifest[e] ? ResourceVersion.type == ResourceVersion.FILENAME_VERSION ? ResourceVersion.manifest[e] : ResourceVersion.manifest[e] + "/" + e : e
                }
            }]), ResourceVersion
        }();
    sn.FOLDER_VERSION = 1, sn.FILENAME_VERSION = 2, sn.type = sn.FOLDER_VERSION;
    var on, ln = function(e) {
        function Socket() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return _classCallCheck(this, Socket), (e = _possibleConstructorReturn(this, _getPrototypeOf(Socket).call(this))).disableInput = !1, e.protocols = [], e._byteClass = n || Wt, e.protocols = r, e.endian = Socket.BIG_ENDIAN, t && i > 0 && i < 65535 && e.connect(t, i), e
        }
        return _inherits(Socket, e), _createClass(Socket, [{
            key: "connect",
            value: function(e, t) {
                var i = "ws://" + e + ":" + t;
                this.connectByUrl(i)
            }
        }, {
            key: "connectByUrl",
            value: function(e) {
                var t = this;
                null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new ze.window.WebSocket(e, this.protocols) : this._socket = new ze.window.WebSocket(e), this._socket.binaryType = "arraybuffer", this._output = new this._byteClass, this._output.endian = this.endian, this._input = new this._byteClass, this._input.endian = this.endian, this._addInputPosition = 0, this._socket.onopen = function(e) {
                    t._onOpen(e)
                }, this._socket.onmessage = function(e) {
                    t._onMessage(e)
                }, this._socket.onclose = function(e) {
                    t._onClose(e)
                }, this._socket.onerror = function(e) {
                    t._onError(e)
                }
            }
        }, {
            key: "cleanSocket",
            value: function() {
                this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null, this._socket = null
            }
        }, {
            key: "close",
            value: function() {
                if (null != this._socket)
                    try {
                        this._socket.close()
                    } catch (e) {}
            }
        }, {
            key: "_onOpen",
            value: function(e) {
                this._connected = !0, this.event(Ue.OPEN, e)
            }
        }, {
            key: "_onMessage",
            value: function(e) {
                if (e && e.data) {
                    var t = e.data;
                    if (this.disableInput && t)
                        this.event(Ue.MESSAGE, t);
                    else {
                        this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), this._addInputPosition = 0);
                        var i = this._input.pos;
                        !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, t && ("string" == typeof t ? this._input.writeUTFBytes(t) : this._input.writeArrayBuffer(t), this._addInputPosition = this._input.pos, this._input.pos = i), this.event(Ue.MESSAGE, t)
                    }
                }
            }
        }, {
            key: "_onClose",
            value: function(e) {
                this._connected = !1, this.event(Ue.CLOSE, e)
            }
        }, {
            key: "_onError",
            value: function(e) {
                this.event(Ue.ERROR, e)
            }
        }, {
            key: "send",
            value: function(e) {
                this._socket.send(e)
            }
        }, {
            key: "flush",
            value: function() {
                if (this._output && this._output.length > 0) {
                    var e;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length))
                    } catch (t) {
                        e = t
                    }
                    this._output.endian = this.endian, this._output.clear(), e && this.event(Ue.ERROR, e)
                }
            }
        }, {
            key: "input",
            get: function() {
                return this._input
            }
        }, {
            key: "output",
            get: function() {
                return this._output
            }
        }, {
            key: "connected",
            get: function() {
                return this._connected
            }
        }, {
            key: "endian",
            get: function() {
                return this._endian
            },
            set: function(e) {
                this._endian = e, null != this._input && (this._input.endian = e), null != this._output && (this._output.endian = e)
            }
        }]), Socket
    }(T);
    ln.LITTLE_ENDIAN = "littleEndian", ln.BIG_ENDIAN = "bigEndian", (on = e.TextureDecodeFormat || (e.TextureDecodeFormat = {}))[on.Normal = 0] = "Normal", on[on.RGBM = 1] = "RGBM";
    var hn = function() {
            function System() {
                _classCallCheck(this, System)
            }
            return _createClass(System, null, [{
                key: "changeDefinition",
                value: function(e, t) {
                    window.Laya[e] = t;
                    var i = e + "=classObj";
                    window.eval(i)
                }
            }]), System
        }(),
        un = function() {
            function HTMLChar() {
                _classCallCheck(this, HTMLChar), this.reset()
            }
            return _createClass(HTMLChar, [{
                key: "setData",
                value: function(e, t, i, n) {
                    return this.char = e, this.charNum = e.charCodeAt(0), this.x = this.y = 0, this.width = t, this.height = i, this.style = n, this.isWord = !HTMLChar._isWordRegExp.test(e), this
                }
            }, {
                key: "reset",
                value: function() {
                    return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, this.charNum = 0, this.style = null, this
                }
            }, {
                key: "recover",
                value: function() {
                    n.recover("HTMLChar", this.reset())
                }
            }, {
                key: "_isChar",
                value: function() {
                    return !0
                }
            }, {
                key: "_getCSSStyle",
                value: function() {
                    return this.style
                }
            }], [{
                key: "create",
                value: function() {
                    return n.getItemByClass("HTMLChar", HTMLChar)
                }
            }]), HTMLChar
        }();
    un._isWordRegExp = new RegExp("[\\w.]", "");
    var cn = function() {
        function Log() {
            _classCallCheck(this, Log)
        }
        return _createClass(Log, null, [{
            key: "enable",
            value: function() {
                Log._logdiv || (Log._logdiv = ze.createElement("div"), Log._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", ze.document.body.appendChild(Log._logdiv), Log._btn = ze.createElement("button"), Log._btn.innerText = "Hide", Log._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", Log._btn.onclick = Log.toggle, ze.document.body.appendChild(Log._btn))
            }
        }, {
            key: "toggle",
            value: function() {
                var e = Log._logdiv.style;
                "" === e.display ? (Log._btn.innerText = "Show", e.display = "none") : (Log._btn.innerText = "Hide", e.display = "")
            }
        }, {
            key: "print",
            value: function(e) {
                Log._logdiv && (Log._count >= Log.maxCount && Log.clear(), Log._count++, Log._logdiv.innerText += e + "\n", Log.autoScrollToBottom && Log._logdiv.scrollHeight - Log._logdiv.scrollTop - Log._logdiv.clientHeight < 50 && (Log._logdiv.scrollTop = Log._logdiv.scrollHeight))
            }
        }, {
            key: "clear",
            value: function() {
                Log._logdiv.innerText = "", Log._count = 0
            }
        }]), Log
    }();
    cn._count = 0, cn.maxCount = 50, cn.autoScrollToBottom = !0;
    var _n = 300,
        dn = function() {
            function PerfData(e, t, i, n) {
                _classCallCheck(this, PerfData), this.scale = 1, this.datas = new Array(_n), this.datapos = 0, this.id = e, this.color = t, this.name = i, this.scale = n
            }
            return _createClass(PerfData, [{
                key: "addData",
                value: function(e) {
                    this.datas[this.datapos] = e, this.datapos++, this.datapos %= _n
                }
            }]), PerfData
        }(),
        fn = function(e) {
            function PerfHUD() {
                var e;
                return _classCallCheck(this, PerfHUD), (e = _possibleConstructorReturn(this, _getPrototypeOf(PerfHUD).call(this))).datas = [], e.xdata = new Array(PerfHUD.DATANUM), e.ydata = new Array(PerfHUD.DATANUM), e.hud_width = 800, e.hud_height = 200, e.gMinV = 0, e.gMaxV = 100, e.textSpace = 40, e.sttm = 0, PerfHUD.inst = _assertThisInitialized(e), e._renderType |= at.CUSTOM, e._setRenderType(e._renderType), e._setCustomRender(), e.addDataDef(0, 16777215, "frame", 1), e.addDataDef(1, 65280, "update", 1), e.addDataDef(2, 16711680, "flush", 1), PerfHUD._now = performance ? performance.now.bind(performance) : Date.now, e
            }
            return _inherits(PerfHUD, e), _createClass(PerfHUD, [{
                key: "now",
                value: function() {
                    return PerfHUD._now()
                }
            }, {
                key: "start",
                value: function() {
                    this.sttm = PerfHUD._now()
                }
            }, {
                key: "end",
                value: function(e) {
                    var t = PerfHUD._now() - this.sttm;
                    this.updateValue(e, t)
                }
            }, {
                key: "config",
                value: function(e, t) {
                    this.hud_width = e, this.hud_height = t
                }
            }, {
                key: "addDataDef",
                value: function(e, t, i, n) {
                    this.datas[e] = new dn(e, t, i, n)
                }
            }, {
                key: "updateValue",
                value: function(e, t) {
                    this.datas[e].addData(t)
                }
            }, {
                key: "v2y",
                value: function(e) {
                    this._y, this.hud_height, this.gMinV, this.gMaxV;
                    return this._y + this.hud_height * (1 - (e - this.gMinV) / this.gMaxV)
                }
            }, {
                key: "drawHLine",
                value: function(e, t, i, n) {
                    var r = this._x,
                        a = (this._x, this.hud_width, this.v2y(t));
                    e.fillText(n, r, a - 6, null, "green", null), r += this.textSpace, e.fillStyle = i, e.fillRect(r, a, this._x + this.hud_width, 1, null)
                }
            }, {
                key: "customRender",
                value: function(e, t, i) {
                    var n = performance.now();
                    PerfHUD._lastTm <= 0 && (PerfHUD._lastTm = n), this.updateValue(0, n - PerfHUD._lastTm), PerfHUD._lastTm = n, e.save(), e.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), e.globalAlpha = .9, this.drawHLine(e, 0, "green", "    0"), this.drawHLine(e, 10, "green", "  10"), this.drawHLine(e, 16.667, "red", " "), this.drawHLine(e, 20, "green", "50|20"), this.drawHLine(e, 33.334, "yellow", ""), this.drawHLine(e, 16.667 * 3, "yellow", ""), this.drawHLine(e, 66.668, "yellow", ""), this.drawHLine(e, 50, "green", "20|50"), this.drawHLine(e, 100, "green", "10|100");
                    for (var r = 0, a = this.datas.length; r < a; r++) {
                        var s = this.datas[r];
                        if (s) {
                            var o = s.datas.length,
                                l = (this.hud_width - this.textSpace) / o,
                                h = s.datapos,
                                u = this._x + this.textSpace;
                            e.fillStyle = s.color;
                            for (var c = o; h < c; h++) {
                                var _ = this.v2y(s.datas[h] * s.scale);
                                e.fillRect(u, _, l, this.hud_height + this._y - _, null), u += l
                            }
                            for (h = 0; h < s.datapos; h++)
                                _ = this.v2y(s.datas[h] * s.scale), e.fillRect(u, _, l, this.hud_height + this._y - _, null), u += l
                        }
                    }
                    e.restore()
                }
            }]), PerfHUD
        }(kt);
    fn._lastTm = 0, fn._now = null, fn.DATANUM = 300, fn.drawTexTm = 0;
    var vn = function() {
            function PoolCache() {
                _classCallCheck(this, PoolCache), this.maxCount = 1e3
            }
            return _createClass(PoolCache, [{
                key: "getCacheList",
                value: function() {
                    return n.getPoolBySign(this.sign)
                }
            }, {
                key: "tryDispose",
                value: function(e) {
                    var t;
                    (t = n.getPoolBySign(this.sign)).length > this.maxCount && t.splice(this.maxCount, t.length - this.maxCount)
                }
            }], [{
                key: "addPoolCacheManager",
                value: function(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    (t = new PoolCache).sign = e, t.maxCount = i, ut.regCacheByFunction(K.bind(t.tryDispose, t), K.bind(t.getCacheList, t))
                }
            }]), PoolCache
        }(),
        pn = function(e) {
            function TimeLine() {
                var e;
                return _classCallCheck(this, TimeLine), (e = _possibleConstructorReturn(this, _getPrototypeOf(TimeLine).apply(this, arguments)))._tweenDic = {}, e._tweenDataList = [], e._currTime = 0, e._lastTime = 0, e._startTime = 0, e._index = 0, e._gidIndex = 0, e._firstTweenDic = {}, e._startTimeSort = !1, e._endTimeSort = !1, e._loopKey = !1, e.scale = 1, e._frameRate = 60, e._frameIndex = 0, e._total = 0, e
            }
            return _inherits(TimeLine, e), _createClass(TimeLine, [{
                key: "to",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return this._create(e, t, i, n, r, !0)
                }
            }, {
                key: "from",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return this._create(e, t, i, n, r, !1)
                }
            }, {
                key: "_create",
                value: function(e, t, i, r, a, s) {
                    var o = n.getItemByClass("tweenData", gn);
                    return o.isTo = s, o.type = 0, o.target = e, o.duration = i, o.data = t, o.startTime = this._startTime + a, o.endTime = o.startTime + o.duration, o.ease = r, this._startTime = Math.max(o.endTime, this._startTime), this._tweenDataList.push(o), this._startTimeSort = !0, this._endTimeSort = !0, this
                }
            }, {
                key: "addLabel",
                value: function(e, t) {
                    var i = n.getItemByClass("tweenData", gn);
                    return i.type = 1, i.data = e, i.endTime = i.startTime = this._startTime + t, this._labelDic || (this._labelDic = {}), this._labelDic[e] = i, this._tweenDataList.push(i), this
                }
            }, {
                key: "removeLabel",
                value: function(e) {
                    if (this._labelDic && this._labelDic[e]) {
                        var t = this._labelDic[e];
                        if (t) {
                            var i = this._tweenDataList.indexOf(t);
                            i > -1 && this._tweenDataList.splice(i, 1)
                        }
                        delete this._labelDic[e]
                    }
                }
            }, {
                key: "gotoTime",
                value: function(e) {
                    if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                        var t, i, r, a;
                        for (var s in this._firstTweenDic)
                            if (i = this._firstTweenDic[s])
                                for (var o in i)
                                    o in i.diyTarget && (i.diyTarget[o] = i[o]);
                        for (s in this._tweenDic)
                            (t = this._tweenDic[s]).clear(), delete this._tweenDic[s];
                        if (this._index = 0, this._gidIndex = 0, this._currTime = e, this._lastTime = ze.now(), null == this._endTweenDataList || this._endTimeSort) {
                            this._endTimeSort = !1, this._endTweenDataList = r = this._tweenDataList.concat(), r.sort((function(e, t) {
                                return e.endTime > t.endTime ? 1 : e.endTime < t.endTime ? -1 : 0
                            }))
                        } else
                            r = this._endTweenDataList;
                        for (var l = 0, h = r.length; l < h; l++)
                            if (0 == (a = r[l]).type) {
                                if (!(e >= a.endTime))
                                    break;
                                this._index = Math.max(this._index, l + 1);
                                var u = a.data;
                                if (a.isTo)
                                    for (var c in u)
                                        a.target[c] = u[c]
                            }
                        for (l = 0, h = this._tweenDataList.length; l < h; l++)
                            0 == (a = this._tweenDataList[l]).type && e >= a.startTime && e < a.endTime && (this._index = Math.max(this._index, l + 1), this._gidIndex++, (t = n.getItemByClass("tween", $t))._create(a.target, a.data, a.duration, a.ease, m.create(this, this._animComplete, [this._gidIndex]), 0, !1, a.isTo, !0, !1), t.setStartTime(this._currTime - (e - a.startTime)), t._updateEase(this._currTime), t.gid = this._gidIndex, this._tweenDic[this._gidIndex] = t)
                    }
                }
            }, {
                key: "gotoLabel",
                value: function(e) {
                    if (null != this._labelDic) {
                        var t = this._labelDic[e];
                        t && this.gotoTime(t.startTime)
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    i.timer.clear(this, this._update)
                }
            }, {
                key: "resume",
                value: function() {
                    this.play(this._currTime, this._loopKey)
                }
            }, {
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._tweenDataList) {
                        if (this._startTimeSort) {
                            var Compare = function(e, t) {
                                return e.startTime > t.startTime ? 1 : e.startTime < t.startTime ? -1 : 0
                            };
                            this._startTimeSort = !1, this._tweenDataList.sort(Compare);
                            for (var n = 0, r = this._tweenDataList.length; n < r; n++) {
                                var a = this._tweenDataList[n];
                                if (null != a && 0 == a.type) {
                                    var s = a.target,
                                        o = s.$_GID || (s.$_GID = K.getGID()),
                                        l = null;
                                    for (var h in null == this._firstTweenDic[o] ? ((l = {}).diyTarget = s, this._firstTweenDic[o] = l) : l = this._firstTweenDic[o], a.data)
                                        null == l[h] && (l[h] = s[h])
                                }
                            }
                        }
                        "string" == typeof e ? this.gotoLabel(e) : this.gotoTime(e), this._loopKey = t, this._lastTime = ze.now(), i.timer.frameLoop(1, this, this._update)
                    }
                }
            }, {
                key: "_update",
                value: function() {
                    if (this._currTime >= this._startTime) {
                        if (!this._loopKey) {
                            for (var e in this._tweenDic)
                                (t = this._tweenDic[e]).complete();
                            return this.pause(), void this._complete()
                        }
                        if (this._complete(), !this._tweenDataList)
                            return;
                        this.gotoTime(0)
                    }
                    var t, i = ze.now(),
                        r = i - this._lastTime,
                        a = this._currTime += r * this.scale;
                    for (e in this._lastTime = i, this._tweenDic)
                        (t = this._tweenDic[e])._updateEase(a);
                    if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                        var s = this._tweenDataList[this._index];
                        a >= s.startTime && (this._index++, 0 == s.type ? (this._gidIndex++, (t = n.getItemByClass("tween", $t))._create(s.target, s.data, s.duration, s.ease, m.create(this, this._animComplete, [this._gidIndex]), 0, !1, s.isTo, !0, !1), t.setStartTime(a), t.gid = this._gidIndex, this._tweenDic[this._gidIndex] = t, t._updateEase(a)) : this.event(Ue.LABEL, s.data))
                    }
                }
            }, {
                key: "_animComplete",
                value: function(e) {
                    this._tweenDic[e] && delete this._tweenDic[e]
                }
            }, {
                key: "_complete",
                value: function() {
                    this.event(Ue.COMPLETE)
                }
            }, {
                key: "reset",
                value: function() {
                    var e, t, n;
                    if (this._labelDic)
                        for (e in this._labelDic)
                            delete this._labelDic[e];
                    for (e in this._tweenDic)
                        this._tweenDic[e].clear(), delete this._tweenDic[e];
                    for (e in this._firstTweenDic)
                        delete this._firstTweenDic[e];
                    if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length)
                        for (n = this._tweenDataList.length, t = 0; t < n; t++)
                            this._tweenDataList[t] && this._tweenDataList[t].destroy();
                    this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, this._firstTweenDic = null
                }
            }, {
                key: "index",
                get: function() {
                    return this._frameIndex
                },
                set: function(e) {
                    this._frameIndex = e, this.gotoTime(this._frameIndex / this._frameRate * 1e3)
                }
            }, {
                key: "total",
                get: function() {
                    return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total
                }
            }], [{
                key: "to",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return (new TimeLine).to(e, t, i, n, r)
                }
            }, {
                key: "from",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return (new TimeLine).from(e, t, i, n, r)
                }
            }]), TimeLine
        }(T),
        gn = function() {
            function tweenData() {
                _classCallCheck(this, tweenData), this.type = 0, this.isTo = !0
            }
            return _createClass(tweenData, [{
                key: "destroy",
                value: function() {
                    this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, n.recover("tweenData", this)
                }
            }]), tweenData
        }(),
        yn = function() {
            function ArabicReshaper() {
                _classCallCheck(this, ArabicReshaper)
            }
            return _createClass(ArabicReshaper, [{
                key: "characterMapContains",
                value: function(e) {
                    for (var t = 0; t < ArabicReshaper.charsMap.length; ++t)
                        if (ArabicReshaper.charsMap[t][0] === e)
                            return !0;
                    return !1
                }
            }, {
                key: "getCharRep",
                value: function(e) {
                    for (var t = 0; t < ArabicReshaper.charsMap.length; ++t)
                        if (ArabicReshaper.charsMap[t][0] === e)
                            return ArabicReshaper.charsMap[t];
                    return !1
                }
            }, {
                key: "getCombCharRep",
                value: function(e, t) {
                    for (var i = 0; i < ArabicReshaper.combCharsMap.length; ++i)
                        if (ArabicReshaper.combCharsMap[i][0][0] === e && ArabicReshaper.combCharsMap[i][0][1] === t)
                            return ArabicReshaper.combCharsMap[i];
                    return !1
                }
            }, {
                key: "isTransparent",
                value: function(e) {
                    for (var t = 0; t < ArabicReshaper.transChars.length; ++t)
                        if (ArabicReshaper.transChars[t] === e)
                            return !0;
                    return !1
                }
            }, {
                key: "getOriginalCharsFromCode",
                value: function(e) {
                    var t;
                    for (t = 0; t < ArabicReshaper.charsMap.length; ++t)
                        if (ArabicReshaper.charsMap[t].indexOf(e) > -1)
                            return String.fromCharCode(ArabicReshaper.charsMap[t][0]);
                    for (t = 0; t < ArabicReshaper.combCharsMap.length; ++t)
                        if (ArabicReshaper.combCharsMap[t].indexOf(e) > -1)
                            return String.fromCharCode(ArabicReshaper.combCharsMap[t][0][0]) + String.fromCharCode(ArabicReshaper.combCharsMap[t][0][1]);
                    return String.fromCharCode(e)
                }
            }, {
                key: "convertArabic",
                value: function(e) {
                    for (var t, i, n = "", r = 0; r < e.length; ++r) {
                        var a = e.charCodeAt(r);
                        if (this.characterMapContains(a)) {
                            for (var s = null, o = null, l = r - 1, h = r + 1; l >= 0 && this.isTransparent(e.charCodeAt(l)); --l);
                            for ((!(t = !!(s = l >= 0 ? e.charCodeAt(l) : null) && this.getCharRep(s)) || null == t[2] && null == t[3]) && (s = null); h < e.length && this.isTransparent(e.charCodeAt(h)); ++h);
                            if ((!(t = !!(o = h < e.length ? e.charCodeAt(h) : null) && this.getCharRep(o)) || null == t[3] && null == t[4]) && (o = null), 1604 === a && null != o && (1570 === o || 1571 === o || 1573 === o || 1575 === o)) {
                                i = this.getCombCharRep(a, o), n += null != s ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), ++r;
                                continue
                            }
                            if (t = this.getCharRep(a), null != s && null != o && null != t[3]) {
                                n += String.fromCharCode(t[3]);
                                continue
                            }
                            if (null != s && null != t[4]) {
                                n += String.fromCharCode(t[4]);
                                continue
                            }
                            if (null != o && null != t[2]) {
                                n += String.fromCharCode(t[2]);
                                continue
                            }
                            n += String.fromCharCode(t[1])
                        } else
                            n += String.fromCharCode(a)
                    }
                    return n
                }
            }, {
                key: "convertArabicBack",
                value: function(e) {
                    var t, i, n = "";
                    for (i = 0; i < e.length; ++i)
                        t = e.charCodeAt(i), n += this.getOriginalCharsFromCode(t);
                    return n
                }
            }]), ArabicReshaper
        }();
    yn.charsMap = [
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
    ], yn.combCharsMap = [
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
    ], yn.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773];
    var mn = function() {
        function MatirxArray() {
            _classCallCheck(this, MatirxArray)
        }
        return _createClass(MatirxArray, null, [{
            key: "ArrayMul",
            value: function(e, t, i) {
                if (e)
                    if (t)
                        for (var n, r, a, s, o = 0; o < 4; o++)
                            n = e[o], r = e[o + 4], a = e[o + 8], s = e[o + 12], i[o] = n * t[0] + r * t[1] + a * t[2] + s * t[3], i[o + 4] = n * t[4] + r * t[5] + a * t[6] + s * t[7], i[o + 8] = n * t[8] + r * t[9] + a * t[10] + s * t[11], i[o + 12] = n * t[12] + r * t[13] + a * t[14] + s * t[15];
                    else
                        MatirxArray.copyArray(e, i);
                else
                    MatirxArray.copyArray(t, i)
            }
        }, {
            key: "copyArray",
            value: function(e, t) {
                if (e && t)
                    for (var i = 0; i < e.length; i++)
                        t[i] = e[i]
            }
        }]), MatirxArray
    }();
    return e.AlphaCmd = r, e.Animation = Bi, e.AnimationBase = ti, e.ArabicReshaper = yn, e.AtlasGrid = Fe, e.AtlasInfoManager = Xt, e.AudioSound = Ot, e.AudioSoundChannel = Bt, e.BasePoly = Ae, e.BaseShader = I, e.BaseTexture = A, e.Bezier = ne, e.Bitmap = E, e.BitmapFont = Vt, e.BlendMode = O, e.BlurFilter = Vi, e.BlurFilterGLRender = Wi, e.BlurFilterSetter = Yi, e.BoundsStyle = mt, e.Browser = ze, e.Buffer = pe, e.Buffer2D = ye, e.BufferState2D = ve, e.BufferStateBase = fe, e.ButtonEffect = Hi, e.Byte = Wt, e.CONST3D2D = Le, e.CacheManger = ut, e.CacheStyle = Tt, e.CallLater = Mt, e.CharRenderInfo = He, e.CharRender_Canvas = Ke, e.CharRender_Native = je, e.CharSubmitCache = Oe, e.ClassUtils = yt, e.ClipRectCmd = st, e.ColorFilter = Q, e.ColorFilterSetter = Xi, e.ColorUtils = j, e.CommandEncoder = en, e.CommonScript = Li, e.Component = ei, e.Config = t, e.Const = dt, e.Context = qe, e.Dragging = Jt, e.Draw9GridTexture = nt, e.DrawCircleCmd = a, e.DrawCurvesCmd = s, e.DrawImageCmd = o, e.DrawLineCmd = l, e.DrawLinesCmd = h, e.DrawParticleCmd = Gi, e.DrawPathCmd = u, e.DrawPieCmd = c, e.DrawPolyCmd = _, e.DrawRectCmd = d, e.DrawStyle = ae, e.DrawTextureCmd = q, e.DrawTexturesCmd = ot, e.DrawTrianglesCmd = it, e.Earcut = we, e.EarcutNode = Me, e.Ease = Zt, e.EffectAnimation = Oi, e.EffectBase = zi, e.Event = Ue, e.EventDispatcher = T, e.FadeIn = Ki, e.FadeOut = ji, e.FillTextCmd = lt, e.FillTextureCmd = Z, e.Filter = z, e.FilterSetterBase = Ui, e.FontInfo = Ve, e.FrameAnimation = ni, e.GlowFilter = qi, e.GlowFilterGLRender = Qi, e.GlowFilterSetter = Zi, e.GrahamScan = re, e.GraphicAnimation = Pi, e.Graphics = _t, e.GraphicsBounds = rt, e.HTMLCanvas = pt, e.HTMLChar = un, e.HTMLImage = Ci, e.Handler = m, e.HitArea = gt, e.HttpRequest = Yt, e.ICharRender = Xe, e.ILaya = i, e.IStatRender = li, e.IndexBuffer2D = me, e.InlcudeFile = vi, e.Input = bt, e.KeyBoardManager = Pt, e.KeyLocation = $i, e.Keyboard = Ji, e.Laya = xi, e.LayaGL = g, e.LayaGLQuickRunner = ft, e.LayaGLRunner = tn, e.LayaGPU = et, e.Loader = Ht, e.LoaderManager = zt, e.LocalStorage = jt, e.Log = cn, e.MathUtil = ii, e.MatirxArray = mn, e.Matrix = f, e.Mesh2D = Ce, e.MeshParticle2D = Ti, e.MeshQuadTexture = xe, e.MeshTexture = ke, e.MeshVG = Se, e.Mouse = mi, e.MouseManager = At, e.Node = xt, e.Path = se, e.PerfData = dn, e.PerfHUD = fn, e.Point = v, e.Pool = n, e.PoolCache = vn, e.Prefab = Ut, e.PrimitiveSV = di, e.QuickTestTool = nn, e.Rectangle = p, e.Render = tt, e.RenderInfo = ge, e.RenderSprite = vt, e.RenderState2D = P, e.RenderTexture2D = D, e.Resource = k, e.ResourceVersion = sn, e.RestoreCmd = $, e.RotateCmd = J, e.RunDriver = Lt, e.SaveBase = he, e.SaveClipRect = ue, e.SaveCmd = ht, e.SaveMark = ce, e.SaveTransform = _e, e.SaveTranslate = de, e.ScaleCmd = ee, e.Scene = Ni, e.SceneLoader = Fi, e.SceneUtils = ai, e.Script = Ii, e.Shader = W, e.Shader2D = be, e.Shader2X = V, e.ShaderCompile = gi, e.ShaderDefines2D = N, e.ShaderDefinesBase = F, e.ShaderNode = pi, e.ShaderValue = function ShaderValue() {
        _classCallCheck(this, ShaderValue)
    }, e.SkinMeshBuffer = Ee, e.SkinSV = _i, e.Socket = ln, e.Sound = rn, e.SoundChannel = Dt, e.SoundManager = Gt, e.SoundNode = an, e.Sprite = kt, e.SpriteConst = at, e.SpriteStyle = Ct, e.Stage = It, e.Stat = G, e.StatUI = hi, e.StringKey = U, e.Submit = Ie, e.SubmitBase = le, e.SubmitCMD = X, e.SubmitCanvas = Pe, e.SubmitKey = H, e.SubmitTarget = De, e.SubmitTexture = Be, e.System = hn, e.SystemUtils = Je, e.TTFLoader = qt, e.Text = Rt, e.TextAtlas = Ge, e.TextRender = Qe, e.TextStyle = St, e.TextTexture = Ne, e.Texture = We, e.Texture2D = M, e.TextureSV = fi, e.TimeLine = pn, e.Timer = ui, e.TouchManager = Et, e.TransformCmd = te, e.TranslateCmd = ie, e.Tween = $t, e.URL = x, e.Utils = K, e.Value2D = Y, e.VectorGraphManager = ct, e.VertexArrayObject = function VertexArrayObject() {
        _classCallCheck(this, VertexArrayObject)
    }, e.VertexBuffer2D = Te, e.WeakObject = ri, e.WebAudioSound = Nt, e.WebAudioSoundChannel = Ft, e.WebGL = $e, e.WebGLCacheAsNormalCanvas = Re, e.WebGLContext = y, e.WebGLRTMgr = B, e.WordText = Ye, e.WorkerLoader = yi, e.__init = bi, e._static = _static, e.alertGlobalError = Mi, e.enableDebugPanel = wi, e.init = Ei, e.isWXOpenDataContext = void 0, e.isWXPosMsg = void 0, e.version = Ai, e.static = _static, e
}({});