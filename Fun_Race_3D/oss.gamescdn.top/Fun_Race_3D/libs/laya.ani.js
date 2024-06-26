function _typeof2(o) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    })(o);
}
var _typeof3 = {};
_typeof3.default = function(o) {
    return "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? _typeof = function(o) {
        return _typeof2(o);
    } : _typeof = function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : _typeof2(o);
    }, _typeof(o);
}

function _typeof(obj) {
    if (typeof Symbol === "function" && (0, _typeof3.default)(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
            return (0, _typeof3.default)(obj);
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbolnode && obj !== Symbol.prototype ? "symbol" : (0, _typeof3.default)(obj);
        };
    }
    return _typeof(obj);
}

function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}! function(t, e) {
    "use strict";
    var i = function i() {
        _classCallCheck(this, i);
    };
    i.Skeleton = null, i.AnimationTemplet = null, i.Templet = null;
    var a = function a() {
        _classCallCheck(this, a);
    };
    var r = function r() {
        _classCallCheck(this, r);
    };
    var s = function s() {
        _classCallCheck(this, s);
    };
    var n = function() {
        function n() {
            _classCallCheck(this, n);
        }
        _createClass(n, null, [{
            key: "parse",
            value: function parse(t, n) {
                var h, l, o, u, _, p, d, c = n.__getBuffer(),
                    m = n.readUTFString();
                t._aniClassName = m;
                var x, y = n.readUTFString().split("\n"),
                    g = n.getUint8(),
                    f = n.getUint32(),
                    M = n.getUint32();
                f > 0 && (x = c.slice(f, M));
                var D = new e.Byte(x);
                for (M > 0 && (t._publicExtData = c.slice(M, c.byteLength)), t._useParent = !!n.getUint8(), t._anis.length = g, h = 0; h < g; h++) {
                    var v = t._anis[h] = new a();
                    v.nodes = [];
                    var I = v.name = y[n.getUint16()];
                    t._aniMap[I] = h, v.bone3DMap = {}, v.playTime = n.getFloat32();
                    var A = v.nodes.length = n.getUint8();
                    for (v.totalKeyframeDatasLength = 0, l = 0; l < A; l++) {
                        var S = v.nodes[l] = new r();
                        S.childs = [];
                        var T = n.getInt16();
                        T >= 0 && (S.name = y[T], v.bone3DMap[S.name] = l), S.keyFrame = [], S.parentIndex = n.getInt16(), -1 == S.parentIndex ? S.parent = null : S.parent = v.nodes[S.parentIndex], S.lerpType = n.getUint8();
                        var b = n.getUint32();
                        D.pos = b;
                        var C = S.keyframeWidth = D.getUint16();
                        if (v.totalKeyframeDatasLength += C, 0 === S.lerpType || 1 === S.lerpType)
                            for (S.interpolationMethod = [], S.interpolationMethod.length = C, o = 0; o < C; o++) {
                                S.interpolationMethod[o] = i.AnimationTemplet.interpolation[D.getUint8()];
                            }
                        null != S.parent && S.parent.childs.push(S);
                        var F = n.getUint16();
                        F > 0 && (S.extenData = c.slice(n.pos, n.pos + F), n.pos += F);
                        var w = n.getUint16();
                        S.keyFrame.length = w;
                        var k, P = 0;
                        for (o = 0, u = w; o < u; o++) {
                            if ((k = S.keyFrame[o] = new s()).duration = n.getFloat32(), k.startTime = P, 2 === S.lerpType) {
                                k.interpolationData = [];
                                var L, U = n.getUint8();
                                switch (L = n.getFloat32()) {
                                    case 254:
                                        for (k.interpolationData.length = C, d = 0; d < C; d++) {
                                            k.interpolationData[d] = 0;
                                        }
                                        break;
                                    case 255:
                                        for (k.interpolationData.length = C, d = 0; d < C; d++) {
                                            k.interpolationData[d] = 5;
                                        }
                                        break;
                                    default:
                                        for (k.interpolationData.push(L), p = 1; p < U; p++) {
                                            k.interpolationData.push(n.getFloat32());
                                        }
                                }
                            }
                            for (k.data = new Float32Array(C), k.dData = new Float32Array(C), k.nextData = new Float32Array(C), _ = 0; _ < C; _++) {
                                k.data[_] = n.getFloat32(), k.data[_] > -1e-8 && k.data[_] < 1e-8 && (k.data[_] = 0);
                            }
                            P += k.duration;
                        }
                        k.startTime = v.playTime, S.playTime = v.playTime, t._calculateKeyFrame(S, w, C);
                    }
                }
            }
        }]);
        return n;
    }();
    var h = function() {
        function h() {
            _classCallCheck(this, h);
        }
        _createClass(h, null, [{
            key: "READ_DATA",
            value: function READ_DATA() {
                h._DATA.offset = h._reader.getUint32(), h._DATA.size = h._reader.getUint32();
            }
        }, {
            key: "READ_BLOCK",
            value: function READ_BLOCK() {
                for (var t = h._BLOCK.count = h._reader.getUint16(), e = h._BLOCK.blockStarts = [], i = h._BLOCK.blockLengths = [], a = 0; a < t; a++) {
                    e.push(h._reader.getUint32()), i.push(h._reader.getUint32());
                }
            }
        }, {
            key: "READ_STRINGS",
            value: function READ_STRINGS() {
                var t = h._reader.getUint32(),
                    e = h._reader.getUint16(),
                    i = h._reader.pos;
                h._reader.pos = t + h._DATA.offset;
                for (var a = 0; a < e; a++) {
                    h._strings[a] = h._reader.readUTFString();
                }
                h._reader.pos = i;
            }
        }, {
            key: "parse",
            value: function parse(t, e) {
                h._templet = t, h._reader = e;
                e.__getBuffer();
                h.READ_DATA(), h.READ_BLOCK(), h.READ_STRINGS();
                for (var i = 0, a = h._BLOCK.count; i < a; i++) {
                    var r = e.getUint16(),
                        s = h._strings[r],
                        n = h["READ_" + s];
                    if (null == n) throw new Error("model file err,no this function:" + r + " " + s);
                    n.call(null);
                }
            }
        }, {
            key: "READ_ANIMATIONS",
            value: function READ_ANIMATIONS() {
                var t, e, n, l, o = h._reader,
                    u = o.__getBuffer(),
                    _ = o.getUint16(),
                    p = [];
                for (p.length = _, t = 0; t < _; t++) {
                    p[t] = i.AnimationTemplet.interpolation[o.getByte()];
                }
                var d = o.getUint8();
                for (h._templet._anis.length = d, t = 0; t < d; t++) {
                    var c = h._templet._anis[t] = new a();
                    c.nodes = [];
                    var m = c.name = h._strings[o.getUint16()];
                    h._templet._aniMap[m] = t, c.bone3DMap = {}, c.playTime = o.getFloat32();
                    var x = c.nodes.length = o.getInt16();
                    for (c.totalKeyframeDatasLength = 0, e = 0; e < x; e++) {
                        var y = c.nodes[e] = new r();
                        y.keyframeWidth = _, y.childs = [];
                        var g = o.getUint16();
                        g >= 0 && (y.name = h._strings[g], c.bone3DMap[y.name] = e), y.keyFrame = [], y.parentIndex = o.getInt16(), -1 == y.parentIndex ? y.parent = null : y.parent = c.nodes[y.parentIndex], c.totalKeyframeDatasLength += _, y.interpolationMethod = p, null != y.parent && y.parent.childs.push(y);
                        var f = o.getUint16();
                        y.keyFrame.length = f;
                        var M = null,
                            D = null;
                        for (n = 0, l = f; n < l; n++) {
                            (M = y.keyFrame[n] = new s()).startTime = o.getFloat32(), D && (D.duration = M.startTime - D.startTime), M.dData = new Float32Array(_), M.nextData = new Float32Array(_);
                            var v = h._DATA.offset,
                                I = o.getUint32(),
                                A = 4 * _,
                                S = u.slice(v + I, v + I + A);
                            M.data = new Float32Array(S), D = M;
                        }
                        M.duration = 0, y.playTime = c.playTime, h._templet._calculateKeyFrame(y, f, _);
                    }
                }
            }
        }]);
        return h;
    }();
    h._strings = [], h._BLOCK = {
        count: 0
    }, h._DATA = {
        offset: 0,
        size: 0
    };
    var l = function l() {
        _classCallCheck(this, l);
    };
    l.stopped = 0, l.paused = 1, l.playing = 2;
    var o = function(_e$EventDispatcher) {
        _inherits(o, _e$EventDispatcher);

        function o() {
            var _this;
            _classCallCheck(this, o);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this)), _this.isCache = !0, _this.playbackRate = 1, _this._destroyed = !1, _this._currentAnimationClipIndex = -1, _this._currentKeyframeIndex = -1, _this._currentTime = 0, _this._overallDuration = Number.MAX_VALUE, _this._stopWhenCircleFinish = !1, _this._elapsedPlaybackTime = 0, _this._startUpdateLoopCount = -1, _this._cachePlayRate = 1, _this.cacheFrameRate = 60, _this.returnToZeroStopped = !1;
            return _this;
        }
        _createClass(o, [{
            key: "_onTempletLoadedComputeFullKeyframeIndices",
            value: function _onTempletLoadedComputeFullKeyframeIndices(t, e, i) {
                this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices();
            }
        }, {
            key: "_computeFullKeyframeIndices",
            value: function _computeFullKeyframeIndices() {}
        }, {
            key: "_onAnimationTempletLoaded",
            value: function _onAnimationTempletLoaded() {
                this.destroyed || this._calculatePlayDuration();
            }
        }, {
            key: "_calculatePlayDuration",
            value: function _calculatePlayDuration() {
                if (this.state !== l.stopped) {
                    var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                    0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), this._playDuration = this._playEnd - this._playStart;
                }
            }
        }, {
            key: "_setPlayParams",
            value: function _setPlayParams(t, e) {
                this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e + .01), this._currentFrameTime = this._currentKeyframeIndex * e;
            }
        }, {
            key: "_setPlayParamsWhenStop",
            value: function _setPlayParamsWhenStop(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                this._currentTime = t;
                var a = i > 0 ? i : t;
                this._currentKeyframeIndex = Math.floor(a / e + .01), this._currentKeyframeIndex = Math.floor(t / e + .01), this._currentFrameTime = this._currentKeyframeIndex * e, this._currentAnimationClipIndex = -1;
            }
        }, {
            key: "_update",
            value: function _update(t) {
                if (-1 !== this._currentAnimationClipIndex && !this._paused && this._templet) {
                    var i = this._cacheFrameRateInterval * this._cachePlayRate,
                        a = 0;
                    this._startUpdateLoopCount !== e.Stat.loopCount && (a = t * this.playbackRate, this._elapsedPlaybackTime += a);
                    var r = this.playDuration;
                    if (a += this._currentTime, 0 !== this._overallDuration && this._elapsedPlaybackTime >= this._overallDuration || 0 === this._overallDuration && this._elapsedPlaybackTime >= r || 0 === this._overallDuration && a >= this.playEnd) return this._setPlayParamsWhenStop(r, i, this.playEnd), void this.event(e.Event.STOPPED);
                    if (r > 0) {
                        if (a >= r) return this._stopWhenCircleFinish ? (this._setPlayParamsWhenStop(r, i), this._stopWhenCircleFinish = !1, void this.event(e.Event.STOPPED)) : (a %= r, this._setPlayParams(a, i), void this.event(e.Event.COMPLETE));
                        this._setPlayParams(a, i);
                    } else {
                        if (this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(r, i), this._stopWhenCircleFinish = !1, void this.event(e.Event.STOPPED);
                        this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this.event(e.Event.COMPLETE);
                    }
                }
            }
        }, {
            key: "_destroy",
            value: function _destroy() {
                this.offAll(), this._templet = null, this._destroyed = !0;
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2147483647;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                if (!this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
                if (a < 0 || r < 0 || s < 0) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
                if (0 !== s && r > s) throw new Error("AnimationPlayer:start must less than end.");
                this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, this.playbackRate = i, this._overallDuration = a, this._playStart = r, this._playEnd = s, this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, this._startUpdateLoopCount = e.Stat.loopCount, this.event(e.Event.PLAYED), this._calculatePlayDuration(), this._update(0);
            }
        }, {
            key: "playByFrame",
            value: function playByFrame() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2147483647;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 30;
                var n = 1e3 / s;
                this.play(t, e, i, a * n, r * n);
            }
        }, {
            key: "stop",
            value: function stop() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this._currentAnimationClipIndex = -1, this.event(e.Event.STOPPED)) : this._stopWhenCircleFinish = !0;
            }
        }, {
            key: "destroy",
            value: function destroy() {}
        }, {
            key: "templet",
            get: function get() {
                return this._templet;
            },
            set: function set(t) {
                this.state !== l.stopped && this.stop(!0), this._templet !== t && (this._templet = t, this._computeFullKeyframeIndices());
            }
        }, {
            key: "playStart",
            get: function get() {
                return this._playStart;
            }
        }, {
            key: "playEnd",
            get: function get() {
                return this._playEnd;
            }
        }, {
            key: "playDuration",
            get: function get() {
                return this._playDuration;
            }
        }, {
            key: "overallDuration",
            get: function get() {
                return this._overallDuration;
            }
        }, {
            key: "currentAnimationClipIndex",
            get: function get() {
                return this._currentAnimationClipIndex;
            }
        }, {
            key: "currentKeyframeIndex",
            get: function get() {
                return this._currentKeyframeIndex;
            }
        }, {
            key: "currentPlayTime",
            get: function get() {
                return this._currentTime + this._playStart;
            }
        }, {
            key: "currentFrameTime",
            get: function get() {
                return this._currentFrameTime;
            }
        }, {
            key: "cachePlayRate",
            get: function get() {
                return this._cachePlayRate;
            },
            set: function set(t) {
                this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
            }
        }, {
            key: "cacheFrameRate",
            get: function get() {
                return this._cacheFrameRate;
            },
            set: function set(t) {
                this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, this._templet && this._computeFullKeyframeIndices());
            }
        }, {
            key: "currentTime",
            set: function set(t) {
                if (-1 !== this._currentAnimationClipIndex && this._templet) {
                    if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                    this._startUpdateLoopCount = e.Stat.loopCount;
                    var i = this._cacheFrameRateInterval * this._cachePlayRate;
                    this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / i), this._currentFrameTime = this._currentKeyframeIndex * i;
                }
            }
        }, {
            key: "paused",
            get: function get() {
                return this._paused;
            },
            set: function set(t) {
                this._paused = t, t && this.event(e.Event.PAUSED);
            }
        }, {
            key: "cacheFrameRateInterval",
            get: function get() {
                return this._cacheFrameRateInterval;
            }
        }, {
            key: "state",
            get: function get() {
                return -1 === this._currentAnimationClipIndex ? l.stopped : this._paused ? l.paused : l.playing;
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }]);
        return o;
    }(e.EventDispatcher);
    var u = function() {
        function u() {
            _classCallCheck(this, u);
        }
        _createClass(u, null, [{
            key: "getBezierRate",
            value: function getBezierRate(t, e, i, a, r) {
                var s = u._getBezierParamKey(e, i, a, r),
                    n = 100 * s + t;
                if (u._bezierResultCache[n]) return u._bezierResultCache[n];
                var h, l, o = u._getBezierPoints(e, i, a, r, s);
                for (l = o.length, h = 0; h < l; h += 2) {
                    if (t <= o[h]) return u._bezierResultCache[n] = o[h + 1], o[h + 1];
                }
                return u._bezierResultCache[n] = 1, 1;
            }
        }, {
            key: "_getBezierParamKey",
            value: function _getBezierParamKey(t, e, i, a) {
                return 100 * (100 * (100 * (100 * t + e) + i) + a);
            }
        }, {
            key: "_getBezierPoints",
            value: function _getBezierPoints(t, i, a, r, s) {
                return u._bezierPointsCache[s] ? u._bezierPointsCache[s] : (n = [0, 0, t, i, a, r, 1, 1], h = new e.Bezier().getBezierPoints(n, 100, 3), u._bezierPointsCache[s] = h, h);
                var n, h;
            }
        }]);
        return u;
    }();
    u._bezierResultCache = {}, u._bezierPointsCache = {};
    var _ = function(_e$Resource) {
        _inherits(_, _e$Resource);

        function _() {
            var _this2;
            _classCallCheck(this, _);
            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_).call(this)), _this2._anis = [], _this2._aniMap = {}, _this2.unfixedLastAniIndex = -1, _this2._fullFrames = null, _this2._boneCurKeyFrm = [];
            return _this2;
        }
        _createClass(_, [{
            key: "parse",
            value: function parse(t) {
                var i = new e.Byte(t);
                this._aniVersion = i.readUTFString(), n.parse(this, i);
            }
        }, {
            key: "_calculateKeyFrame",
            value: function _calculateKeyFrame(t, e, i) {
                var a = t.keyFrame;
                a[e] = a[0];
                for (var r = 0; r < e; r++) {
                    for (var s = a[r], n = 0; n < i; n++) {
                        s.dData[n] = 0 === s.duration ? 0 : (a[r + 1].data[n] - s.data[n]) / s.duration, s.nextData[n] = a[r + 1].data[n];
                    }
                }
                a.length--;
            }
        }, {
            key: "_onAsynLoaded",
            value: function _onAsynLoaded(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = new e.Byte(t);
                switch (this._aniVersion = a.readUTFString(), this._aniVersion) {
                    case "LAYAANIMATION:02":
                        h.parse(this, a);
                        break;
                    default:
                        n.parse(this, a);
                }
            }
        }, {
            key: "getAnimationCount",
            value: function getAnimationCount() {
                return this._anis.length;
            }
        }, {
            key: "getAnimation",
            value: function getAnimation(t) {
                return this._anis[t];
            }
        }, {
            key: "getAniDuration",
            value: function getAniDuration(t) {
                return this._anis[t].playTime;
            }
        }, {
            key: "getNodes",
            value: function getNodes(t) {
                return this._anis[t].nodes;
            }
        }, {
            key: "getNodeIndexWithName",
            value: function getNodeIndexWithName(t, e) {
                return this._anis[t].bone3DMap[e];
            }
        }, {
            key: "getNodeCount",
            value: function getNodeCount(t) {
                return this._anis[t].nodes.length;
            }
        }, {
            key: "getTotalkeyframesLength",
            value: function getTotalkeyframesLength(t) {
                return this._anis[t].totalKeyframeDatasLength;
            }
        }, {
            key: "getPublicExtData",
            value: function getPublicExtData() {
                return this._publicExtData;
            }
        }, {
            key: "getAnimationDataWithCache",
            value: function getAnimationDataWithCache(t, e, i, a) {
                var r = e[i];
                if (r) {
                    var s = r[t];
                    return s ? s[a] : null;
                }
                return null;
            }
        }, {
            key: "setAnimationDataWithCache",
            value: function setAnimationDataWithCache(t, e, i, a, r) {
                var s = e[i] || (e[i] = {});
                (s[t] || (s[t] = []))[a] = r;
            }
        }, {
            key: "getNodeKeyFrame",
            value: function getNodeKeyFrame(t, e, i) {
                var a = this._boneCurKeyFrm[e],
                    r = t.length;
                (null == a || a >= r) && (a = this._boneCurKeyFrm[e] = 0);
                var s = t[a],
                    n = i - s.startTime;
                if (0 == n || n > 0 && s.duration > n) return a;
                var h = 0;
                if (n > 0) {
                    for (i += .01, h = a + 1; h < r; h++) {
                        if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, h;
                    }
                    return r - 1;
                }
                for (h = 0; h < a; h++) {
                    if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, h;
                }
                return a;
            }
        }, {
            key: "getOriginalData",
            value: function getOriginalData(t, e, i, a, r) {
                var s = this._anis[t].nodes,
                    n = this._boneCurKeyFrm;
                n.length < s.length && (n.length = s.length);
                for (var h = 0, l = 0, o = s.length, u = 0; l < o; l++) {
                    var p, d = s[l],
                        c = d.keyFrame;
                    p = c[this.getNodeKeyFrame(c, l, r)], d.dataOffset = u;
                    var m = r - p.startTime,
                        x = d.lerpType;
                    if (x) switch (x) {
                        case 0:
                        case 1:
                            for (h = 0; h < d.keyframeWidth;) {
                                h += d.interpolationMethod[h](d, h, e, u + h, p.data, m, p.dData, p.duration, p.nextData);
                            }
                            break;
                        case 2:
                            var y = p.interpolationData,
                                g = y.length,
                                f = 0;
                            for (h = 0; h < g;) {
                                var M = y[h];
                                switch (M) {
                                    case 6:
                                    case 7:
                                        h += _.interpolation[M](d, f, e, u + f, p.data, m, p.dData, p.duration, p.nextData, y, h + 1);
                                        break;
                                    default:
                                        h += _.interpolation[M](d, f, e, u + f, p.data, m, p.dData, p.duration, p.nextData);
                                }
                                f++;
                            }
                    } else
                        for (h = 0; h < d.keyframeWidth;) {
                            h += d.interpolationMethod[h](d, h, e, u + h, p.data, m, p.dData, p.duration, p.nextData);
                        }
                    u += d.keyframeWidth;
                }
            }
        }, {
            key: "getNodesCurrentFrameIndex",
            value: function getNodesCurrentFrameIndex(t, e) {
                var i = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(i.length), this.unfixedCurrentTimes = new Float32Array(i.length), this.unfixedLastAniIndex = t);
                for (var a = 0, r = i.length; a < r; a++) {
                    var s = i[a];
                    for (e < this.unfixedCurrentTimes[a] && (this.unfixedCurrentFrameIndexes[a] = 0), this.unfixedCurrentTimes[a] = e; this.unfixedCurrentFrameIndexes[a] < s.keyFrame.length && !(s.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime > this.unfixedCurrentTimes[a]);) {
                        this.unfixedCurrentFrameIndexes[a]++;
                    }
                    this.unfixedCurrentFrameIndexes[a]--;
                }
                return this.unfixedCurrentFrameIndexes;
            }
        }, {
            key: "getOriginalDataUnfixedRate",
            value: function getOriginalDataUnfixedRate(t, e, i) {
                var a = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(a.length), this.unfixedCurrentTimes = new Float32Array(a.length), this.unfixedKeyframes = [], this.unfixedLastAniIndex = t);
                for (var r = 0, s = 0, n = a.length, h = 0; s < n; s++) {
                    var l = a[s];
                    for (i < this.unfixedCurrentTimes[s] && (this.unfixedCurrentFrameIndexes[s] = 0), this.unfixedCurrentTimes[s] = i; this.unfixedCurrentFrameIndexes[s] < l.keyFrame.length && !(l.keyFrame[this.unfixedCurrentFrameIndexes[s]].startTime > this.unfixedCurrentTimes[s]);) {
                        this.unfixedKeyframes[s] = l.keyFrame[this.unfixedCurrentFrameIndexes[s]], this.unfixedCurrentFrameIndexes[s]++;
                    }
                    var o = this.unfixedKeyframes[s];
                    l.dataOffset = h;
                    var u = i - o.startTime;
                    if (l.lerpType) switch (l.lerpType) {
                        case 0:
                        case 1:
                            for (r = 0; r < l.keyframeWidth;) {
                                r += l.interpolationMethod[r](l, r, e, h + r, o.data, u, o.dData, o.duration, o.nextData);
                            }
                            break;
                        case 2:
                            var p = o.interpolationData,
                                d = p.length,
                                c = 0;
                            for (r = 0; r < d;) {
                                var m = p[r];
                                switch (m) {
                                    case 6:
                                    case 7:
                                        r += _.interpolation[m](l, c, e, h + c, o.data, u, o.dData, o.duration, o.nextData, p, r + 1);
                                        break;
                                    default:
                                        r += _.interpolation[m](l, c, e, h + c, o.data, u, o.dData, o.duration, o.nextData);
                                }
                                c++;
                            }
                    } else
                        for (r = 0; r < l.keyframeWidth;) {
                            r += l.interpolationMethod[r](l, r, e, h + r, o.data, u, o.dData, o.duration, o.nextData);
                        }
                    h += l.keyframeWidth;
                }
            }
        }], [{
            key: "_LinearInterpolation_0",
            value: function _LinearInterpolation_0(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                return i[a] = r[e] + s * n[e], 1;
            }
        }, {
            key: "_QuaternionInterpolation_1",
            value: function _QuaternionInterpolation_1(t, i, a, r, s, n, h, l, o) {
                var u = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = 0 === l ? 0 : n / l;
                return e.MathUtil.slerpQuaternionArray(s, i, o, i, _, a, r), 4;
            }
        }, {
            key: "_AngleInterpolation_2",
            value: function _AngleInterpolation_2(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                return 0;
            }
        }, {
            key: "_RadiansInterpolation_3",
            value: function _RadiansInterpolation_3(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                return 0;
            }
        }, {
            key: "_Matrix4x4Interpolation_4",
            value: function _Matrix4x4Interpolation_4(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                for (var u = 0; u < 16; u++, e++) {
                    i[a + u] = r[e] + s * n[e];
                }
                return 16;
            }
        }, {
            key: "_NoInterpolation_5",
            value: function _NoInterpolation_5(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                return i[a] = r[e], 1;
            }
        }, {
            key: "_BezierInterpolation_6",
            value: function _BezierInterpolation_6(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                return i[a] = r[e] + (l[e] - r[e]) * u.getBezierRate(s / h, o[_], o[_ + 1], o[_ + 2], o[_ + 3]), 5;
            }
        }, {
            key: "_BezierInterpolation_7",
            value: function _BezierInterpolation_7(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                return i[a] = o[_ + 4] + o[_ + 5] * u.getBezierRate((.001 * s + o[_ + 6]) / o[_ + 7], o[_], o[_ + 1], o[_ + 2], o[_ + 3]), 9;
            }
        }]);
        return _;
    }(e.Resource);
    _.interpolation = [_._LinearInterpolation_0, _._QuaternionInterpolation_1, _._AngleInterpolation_2, _._RadiansInterpolation_3, _._Matrix4x4Interpolation_4, _._NoInterpolation_5, _._BezierInterpolation_6, _._BezierInterpolation_7], i.AnimationTemplet = _;
    var p = function(_e$Graphics) {
        _inherits(p, _e$Graphics);

        function p() {
            _classCallCheck(this, p);
            return _possibleConstructorReturn(this, _getPrototypeOf(p).apply(this, arguments));
        }
        _createClass(p, [{
            key: "drawSkin",
            value: function drawSkin(t, i) {
                this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || e.Matrix.EMPTY, i);
            }
        }], [{
            key: "create",
            value: function create() {
                return p._caches.pop() || new p();
            }
        }, {
            key: "recycle",
            value: function recycle(t) {
                t.clear(), p._caches.push(t);
            }
        }]);
        return p;
    }(e.Graphics);
    p._caches = [];
    var d = function() {
        function d() {
            _classCallCheck(this, d);
            this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0, this.skewX = 0, this.skewY = 0;
        }
        _createClass(d, [{
            key: "initData",
            value: function initData(t) {
                null != t.x && (this.x = t.x), null != t.y && (this.y = t.y), null != t.skX && (this.skX = t.skX), null != t.skY && (this.skY = t.skY), null != t.scX && (this.scX = t.scX), null != t.scY && (this.scY = t.scY);
            }
        }, {
            key: "getMatrix",
            value: function getMatrix() {
                var t;
                return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new e.Matrix()).identity(), t.scale(this.scX, this.scY), (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
            }
        }, {
            key: "skew",
            value: function skew(t, e, i) {
                var a = Math.sin(i),
                    r = Math.cos(i),
                    s = Math.sin(e),
                    n = Math.cos(e);
                return t.setTo(t.a * n - t.b * a, t.a * s + t.b * r, t.c * n - t.d * a, t.c * s + t.d * r, t.tx * n - t.ty * a, t.tx * s + t.ty * r), t;
            }
        }]);
        return d;
    }();
    var c = function() {
        function c() {
            _classCallCheck(this, c);
            this.length = 10, this.resultTransform = new d(), this.resultMatrix = new e.Matrix(), this.inheritScale = !0, this.inheritRotation = !0, this.d = -1, this._children = [];
        }
        _createClass(c, [{
            key: "setTempMatrix",
            value: function setTempMatrix(t) {
                this._tempMatrix = t;
                var e, i = 0;
                for (i = 0, e = this._children.length; i < e; i++) {
                    this._children[i].setTempMatrix(this._tempMatrix);
                }
            }
        }, {
            key: "update",
            value: function update() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var i;
                if (this.rotation = this.transform.skX, t) i = this.resultTransform.getMatrix(), e.Matrix.mul(i, t, this.resultMatrix), this.resultRotation = this.rotation;
                else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, this.parentBone) {
                    if (this.inheritRotation && this.inheritScale) i = this.resultTransform.getMatrix(), e.Matrix.mul(i, this.parentBone.resultMatrix, this.resultMatrix);
                    else {
                        var a, r, s, n = this.parentBone,
                            h = this.parentBone.resultMatrix;
                        i = this.resultTransform.getMatrix();
                        var l = h.a * i.tx + h.c * i.ty + h.tx,
                            o = h.b * i.tx + h.d * i.ty + h.ty,
                            u = new e.Matrix();
                        this.inheritRotation ? (a = Math.atan2(n.resultMatrix.b, n.resultMatrix.a), r = Math.cos(a), s = Math.sin(a), u.setTo(r, s, -s, r, 0, 0), e.Matrix.mul(this._tempMatrix, u, e.Matrix.TEMP), e.Matrix.TEMP.copyTo(u), i = this.resultTransform.getMatrix(), e.Matrix.mul(i, u, this.resultMatrix), this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), this.resultMatrix.tx = l, this.resultMatrix.ty = o) : (this.inheritScale, i = this.resultTransform.getMatrix(), e.Matrix.TEMP.identity(), e.Matrix.TEMP.d = this.d, e.Matrix.mul(i, e.Matrix.TEMP, this.resultMatrix), this.resultMatrix.tx = l, this.resultMatrix.ty = o);
                    }
                } else(i = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
                var _, p = 0;
                for (p = 0, _ = this._children.length; p < _; p++) {
                    this._children[p].update();
                }
            }
        }, {
            key: "updateChild",
            value: function updateChild() {
                var t, e = 0;
                for (e = 0, t = this._children.length; e < t; e++) {
                    this._children[e].update();
                }
            }
        }, {
            key: "setRotation",
            value: function setRotation(t) {
                this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
            }
        }, {
            key: "updateDraw",
            value: function updateDraw(t, i) {
                c.ShowBones && !c.ShowBones[this.name] || (this._sprite ? (this._sprite.x = t + this.resultMatrix.tx, this._sprite.y = i + this.resultMatrix.ty) : (this._sprite = new e.Sprite(), this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), e.ILaya.stage.addChild(this._sprite), this._sprite.x = t + this.resultMatrix.tx, this._sprite.y = i + this.resultMatrix.ty));
                var a, r = 0;
                for (r = 0, a = this._children.length; r < a; r++) {
                    this._children[r].updateDraw(t, i);
                }
            }
        }, {
            key: "addChild",
            value: function addChild(t) {
                this._children.push(t), t.parentBone = this;
            }
        }, {
            key: "findBone",
            value: function findBone(t) {
                if (this.name == t) return this;
                var e, i, a;
                for (e = 0, i = this._children.length; e < i; e++) {
                    if (a = this._children[e].findBone(t)) return a;
                }
                return null;
            }
        }, {
            key: "localToWorld",
            value: function localToWorld(t) {
                var e = t[0],
                    i = t[1];
                t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
            }
        }]);
        return c;
    }();
    c.ShowBones = {};
    var m = function() {
        function m() {
            _classCallCheck(this, m);
        }
        _createClass(m, null, [{
            key: "getRelativeUV",
            value: function getRelativeUV(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a, r, s = t[0],
                    n = t[2] - t[0],
                    h = t[1],
                    l = t[5] - t[1];
                i || (i = []), i.length = e.length, r = i.length;
                var o = 1 / n,
                    u = 1 / l;
                for (a = 0; a < r; a += 2) {
                    i[a] = (e[a] - s) * o, i[a + 1] = (e[a + 1] - h) * u;
                }
                return i;
            }
        }, {
            key: "getAbsoluteUV",
            value: function getAbsoluteUV(t, i) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return a ? (e.Utils.copyArray(a, i), a) : i;
                var r, s, n = t[0],
                    h = t[2] - t[0],
                    l = t[1],
                    o = t[5] - t[1];
                for (a || (a = []), a.length = i.length, s = a.length, r = 0; r < s; r += 2) {
                    a[r] = i[r] * h + n, a[r + 1] = i[r + 1] * o + l;
                }
                return a;
            }
        }]);
        return m;
    }();
    var x = function() {
        function x() {
            _classCallCheck(this, x);
            this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertices = new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indexes = new Uint16Array([0, 1, 3, 3, 1, 2]), this.useUvTransform = !1, this.canvasPadding = 1;
        }
        _createClass(x, [{
            key: "getBounds",
            value: function getBounds() {
                return e.Rectangle._getWrapRec(this.vertices);
            }
        }]);
        return x;
    }();
    var y = function(_x) {
        _inherits(y, _x);

        function y() {
            _classCallCheck(this, y);
            return _possibleConstructorReturn(this, _getPrototypeOf(y).call(this));
        }
        _createClass(y, [{
            key: "init2",
            value: function init2(t, e, i, a) {
                this.transform && (this.transform = null);
                var r = e || [0, 1, 3, 3, 1, 2];
                this.texture = t, this.indexes = new Uint16Array(r), this.vertices = new Float32Array(i), this.uvs = new Float32Array(a);
            }
        }]);
        return y;
    }(x);
    var g = function() {
        function g() {
            _classCallCheck(this, g);
            this.srcDisplayIndex = -1, this.type = "src", this.displayIndex = -1, this.originalIndex = -1, this._replaceDic = {};
        }
        _createClass(g, [{
            key: "showSlotData",
            value: function showSlotData(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), this.currDisplayData = null, this.currTexture = null;
            }
        }, {
            key: "showDisplayByName",
            value: function showDisplayByName(t) {
                this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t));
            }
        }, {
            key: "replaceDisplayByName",
            value: function replaceDisplayByName(t, e) {
                var i, a;
                this.currSlotData && (i = this.currSlotData.getDisplayByName(t), a = this.currSlotData.getDisplayByName(e), this.replaceDisplayByIndex(i, a));
            }
        }, {
            key: "replaceDisplayByIndex",
            value: function replaceDisplayByIndex(t, e) {
                this.currSlotData && (this._replaceDic[t] = e, this.originalIndex == t && this.showDisplayByIndex(t));
            }
        }, {
            key: "showDisplayByIndex",
            value: function showDisplayByIndex(t) {
                if (this.originalIndex = t, null != this._replaceDic[t] && (t = this._replaceDic[t]), this.currSlotData && t > -1 && t < this.currSlotData.displayArr.length) {
                    if (this.displayIndex = t, this.currDisplayData = this.currSlotData.displayArr[t], this.currDisplayData) {
                        var e = this.currDisplayData.name;
                        this.currTexture = this.templet.getTexture(e), this.currTexture && 0 == this.currDisplayData.type && this.currDisplayData.uvs && (this.currTexture = this.currDisplayData.createTexture(this.currTexture));
                    }
                } else this.displayIndex = -1, this.currDisplayData = null, this.currTexture = null;
            }
        }, {
            key: "replaceSkin",
            value: function replaceSkin(t) {
                this._diyTexture = t, this._curDiyUV && (this._curDiyUV.length = 0), this.currDisplayData && this._diyTexture == this.currDisplayData.texture && (this._diyTexture = null);
            }
        }, {
            key: "setParentMatrix",
            value: function setParentMatrix(t) {
                this._parentMatrix = t;
            }
        }, {
            key: "getSaveVerticle",
            value: function getSaveVerticle(t) {
                return g.useSameMatrixAndVerticle && this._preGraphicVerticle && g.isSameArr(t, this._preGraphicVerticle) ? t = this._preGraphicVerticle : (t = e.ILaya.Utils.copyArray([], t), this._preGraphicVerticle = t), t;
            }
        }, {
            key: "getSaveMatrix",
            value: function getSaveMatrix(t) {
                if (g.useSameMatrixAndVerticle && this._preGraphicMatrix && g.isSameMatrix(t, this._preGraphicMatrix)) t = this._preGraphicMatrix;
                else {
                    var e = t.clone();
                    t = e, this._preGraphicMatrix = t;
                }
                return t;
            }
        }, {
            key: "draw",
            value: function draw(t, i) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                if ((null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                    var s, n = this.currTexture;
                    switch (this._diyTexture && (n = this._diyTexture), this.currDisplayData.type) {
                        case 0:
                            if (t) {
                                var h = this.getDisplayMatrix();
                                if (this._parentMatrix) {
                                    var l = !1;
                                    if (h) {
                                        var o;
                                        if (e.Matrix.mul(h, this._parentMatrix, e.Matrix.TEMP), a ? (null == this._resultMatrix && (this._resultMatrix = new e.Matrix()), o = this._resultMatrix) : o = g._tempResultMatrix, this._diyTexture && this.currDisplayData.uvs) {
                                            var u = g._tempMatrix;
                                            u.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (u.d = -1), this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (l = !0, u.rotate(-Math.PI / 2)), e.Matrix.mul(u, e.Matrix.TEMP, o);
                                        } else e.Matrix.TEMP.copyTo(o);
                                        a || (o = this.getSaveMatrix(o)), o._checkTransform(), l ? t.drawTexture(n, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, o, r) : t.drawTexture(n, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, o, r);
                                    }
                                }
                            }
                            break;
                        case 1:
                            if (a ? (null == this._skinSprite && (this._skinSprite = g.createSkinMesh()), s = this._skinSprite) : s = g.createSkinMesh(), null == s) return;
                            var _;
                            if (null == this.currDisplayData.bones) {
                                var p, d = this.currDisplayData.weights;
                                this.deformData && (d = this.deformData), this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 0 == this._curDiyUV.length && (this._curDiyUV = m.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), this._curDiyUV = m.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), p = this._curDiyUV) : p = this.currDisplayData.uvs, this._mVerticleArr = d;
                                this.currDisplayData.triangles.length;
                                _ = this.currDisplayData.triangles, this.deformData && (a || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))), s.init2(n, _, this._mVerticleArr, p);
                                var c, x = this.getDisplayMatrix();
                                if (this._parentMatrix)
                                    if (x) e.Matrix.mul(x, this._parentMatrix, e.Matrix.TEMP), a ? (null == this._resultMatrix && (this._resultMatrix = new e.Matrix()), c = this._resultMatrix) : c = g._tempResultMatrix, e.Matrix.TEMP.copyTo(c), a || (c = this.getSaveMatrix(c)), s.transform = c;
                            } else this.skinMesh(i, s);
                            t.drawSkin(s, r);
                            break;
                        case 2:
                            if (a ? (null == this._skinSprite && (this._skinSprite = g.createSkinMesh()), s = this._skinSprite) : s = g.createSkinMesh(), null == s) return;
                            this.skinMesh(i, s), t.drawSkin(s, r);
                    }
                }
            }
        }, {
            key: "skinMesh",
            value: function skinMesh(t, e) {
                var i, a = this.currTexture,
                    r = this.currDisplayData.bones;
                this._diyTexture ? (a = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 0 == this._curDiyUV.length && (this._curDiyUV = m.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), this._curDiyUV = m.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), i = this._curDiyUV) : i = this.currDisplayData.uvs;
                var s, n, h, l, o, u = this.currDisplayData.weights,
                    _ = this.currDisplayData.triangles,
                    p = 0,
                    d = 0,
                    c = 0,
                    x = 0,
                    y = 0,
                    f = 0,
                    M = 0;
                if (g._tempVerticleArr.length = 0, o = g._tempVerticleArr, this.deformData && this.deformData.length > 0) {
                    var D = 0;
                    for (f = 0, M = r.length; f < M;) {
                        for (c = r[f++] + f, p = 0, d = 0; f < c; f++) {
                            n = t[r[f]], h = u[x] + this.deformData[D++], l = u[x + 1] + this.deformData[D++], y = u[x + 2], p += (h * n.a + l * n.c + n.tx) * y, d += (h * n.b + l * n.d + n.ty) * y, x += 3;
                        }
                        o.push(p, d);
                    }
                } else
                    for (f = 0, M = r.length; f < M;) {
                        for (c = r[f++] + f, p = 0, d = 0; f < c; f++) {
                            n = t[r[f]], h = u[x], l = u[x + 1], y = u[x + 2], p += (h * n.a + l * n.c + n.tx) * y, d += (h * n.b + l * n.d + n.ty) * y, x += 3;
                        }
                        o.push(p, d);
                    }
                this._mVerticleArr = o, s = _, this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr), e.init2(a, s, this._mVerticleArr, i);
            }
        }, {
            key: "drawBonePoint",
            value: function drawBonePoint(t) {
                t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000");
            }
        }, {
            key: "getDisplayMatrix",
            value: function getDisplayMatrix() {
                return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null;
            }
        }, {
            key: "getMatrix",
            value: function getMatrix() {
                return this._resultMatrix;
            }
        }, {
            key: "copy",
            value: function copy() {
                var t = new g();
                return t.type = "copy", t.name = this.name, t.attachmentName = this.attachmentName, t.srcDisplayIndex = this.srcDisplayIndex, t.parent = this.parent, t.displayIndex = this.displayIndex, t.templet = this.templet, t.currSlotData = this.currSlotData, t.currTexture = this.currTexture, t.currDisplayData = this.currDisplayData, t;
            }
        }], [{
            key: "createSkinMesh",
            value: function createSkinMesh() {
                return new y();
            }
        }, {
            key: "isSameArr",
            value: function isSameArr(t, e) {
                if (t.length != e.length) return !1;
                var i, a;
                for (a = t.length, i = 0; i < a; i++) {
                    if (t[i] != e[i]) return !1;
                }
                return !0;
            }
        }, {
            key: "isSameMatrix",
            value: function isSameMatrix(t, e) {
                return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
            }
        }]);
        return g;
    }();
    g._tempMatrix = new e.Matrix(), g._tempResultMatrix = new e.Matrix(), g.useSameMatrixAndVerticle = !0, g._tempVerticleArr = [];
    var f = function f() {
        _classCallCheck(this, f);
        this.deformSlotDataList = [];
    };
    var M = function M() {
        _classCallCheck(this, M);
        this.deformSlotDisplayList = [];
    };
    var D = function() {
        function D() {
            _classCallCheck(this, D);
            this.slotIndex = -1, this.timeList = [], this.vectices = [], this.tweenKeyList = [], this.frameIndex = 0;
        }
        _createClass(D, [{
            key: "binarySearch1",
            value: function binarySearch1(t, e) {
                var i = 0,
                    a = t.length - 2;
                if (0 == a) return 1;
                for (var r = a >>> 1;;) {
                    if (t[Math.floor(r + 1)] <= e ? i = r + 1 : a = r, i == a) return i + 1;
                    r = i + a >>> 1;
                }
                return 0;
            }
        }, {
            key: "apply",
            value: function apply(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                if (t += .05, !(this.timeList.length <= 0)) {
                    var a = 0;
                    if (!(t < this.timeList[0])) {
                        var r = this.vectices[0].length,
                            s = [],
                            n = this.binarySearch1(this.timeList, t);
                        if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                            var h = this.vectices[this.vectices.length - 1];
                            if (i < 1)
                                for (a = 0; a < r; a++) {
                                    s[a] += (h[a] - s[a]) * i;
                                } else
                                    for (a = 0; a < r; a++) {
                                        s[a] = h[a];
                                    }
                            this.deformData = s;
                        } else {
                            var l, o = this.vectices[this.frameIndex - 1],
                                u = this.vectices[this.frameIndex],
                                _ = this.timeList[this.frameIndex - 1],
                                p = this.timeList[this.frameIndex];
                            for (i = this.tweenKeyList[n - 1] ? (t - _) / (p - _) : 0, a = 0; a < r; a++) {
                                l = o[a], s[a] = l + (u[a] - l) * i;
                            }
                            this.deformData = s;
                        }
                    }
                }
            }
        }]);
        return D;
    }();
    var v = function v() {
        _classCallCheck(this, v);
        this.drawOrder = [];
    };
    var I = function I() {
        _classCallCheck(this, I);
    };
    var A = function() {
        function A(t, e) {
            _classCallCheck(this, A);
            this.isSpine = !0, this.isDebug = !1, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine, null == this._bones && (this._bones = []), this._bones.length = 0;
            for (var i = 0, a = t.boneIndexs.length; i < a; i++) {
                this._bones.push(e[t.boneIndexs[i]]);
            }
            this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
        }
        _createClass(A, [{
            key: "apply",
            value: function apply() {
                switch (this._bones.length) {
                    case 1:
                        this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                        break;
                    case 2:
                        this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix);
                }
            }
        }, {
            key: "_applyIk1",
            value: function _applyIk1(t, e, i, a) {
                var r = t.parentBone,
                    s = 1 / (r.resultMatrix.a * r.resultMatrix.d - r.resultMatrix.b * r.resultMatrix.c),
                    n = e - r.resultMatrix.tx,
                    h = i - r.resultMatrix.ty,
                    l = (n * r.resultMatrix.d - h * r.resultMatrix.c) * s - t.transform.x,
                    o = (h * r.resultMatrix.a - n * r.resultMatrix.b) * s - t.transform.y,
                    u = Math.atan2(o, l) * A.radDeg - 0 - t.transform.skX;
                t.transform.scX < 0 && (u += 180), u > 180 ? u -= 360 : u < -180 && (u += 360), t.transform.skX = t.transform.skY = t.transform.skX + u * a, t.update();
            }
        }, {
            key: "updatePos",
            value: function updatePos(t, e) {
                this._sp && this._sp.pos(t, e);
            }
        }, {
            key: "_applyIk2",
            value: function _applyIk2(t, i, a, r, s, n) {
                if (0 != n) {
                    var h, l, o, u = t.resultTransform.x,
                        _ = t.resultTransform.y,
                        p = t.transform.scX,
                        d = t.transform.scY,
                        c = i.transform.scX;
                    p < 0 ? (p = -p, h = 180, o = -1) : (h = 0, o = 1), d < 0 && (d = -d, o = -o), c < 0 ? (c = -c, l = 180) : l = 0;
                    var m, x, y, g = i.resultTransform.x,
                        f = t.resultMatrix.a,
                        M = t.resultMatrix.c,
                        D = t.resultMatrix.b,
                        v = t.resultMatrix.d,
                        I = Math.abs(p - d) <= 1e-4;
                    I ? (x = f * g + M * (m = i.resultTransform.y) + t.resultMatrix.tx, y = D * g + v * m + t.resultMatrix.ty) : (m = 0, x = f * g + t.resultMatrix.tx, y = D * g + t.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new e.Sprite(), e.ILaya.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), this._sp.graphics.drawCircle(x, y, 15, "#ff00ff")), t.setRotation(Math.atan2(y - t.resultMatrix.ty, x - t.resultMatrix.tx));
                    var S = t.parentBone;
                    f = S.resultMatrix.a, M = S.resultMatrix.c, D = S.resultMatrix.b;
                    var T, b, C = 1 / (f * (v = S.resultMatrix.d) - M * D),
                        F = a - S.resultMatrix.tx,
                        w = r - S.resultMatrix.ty,
                        k = (F * v - w * M) * C - u,
                        P = (w * f - F * D) * C - _,
                        L = ((F = x - S.resultMatrix.tx) * v - (w = y - S.resultMatrix.ty) * M) * C - u,
                        U = (w * f - F * D) * C - _,
                        B = Math.sqrt(L * L + U * U),
                        E = i.length * c;
                    if (I) {
                        var R = (k * k + P * P - B * B - (E *= p) * E) / (2 * B * E);
                        R < -1 ? R = -1 : R > 1 && (R = 1), b = Math.acos(R) * s, f = B + E * R, M = E * Math.sin(b), T = Math.atan2(P * f - k * M, k * f + P * M);
                    } else {
                        var N = (f = p * E) * f,
                            O = (M = d * E) * M,
                            V = k * k + P * P,
                            Y = Math.atan2(P, k),
                            K = -2 * O * B,
                            X = O - N;
                        if ((v = K * K - 4 * X * (D = O * B * B + N * V - N * O)) > 0) {
                            var W = Math.sqrt(v);
                            K < 0 && (W = -W);
                            var z = (W = -(K + W) / 2) / X,
                                G = D / W,
                                q = Math.abs(z) < Math.abs(G) ? z : G;
                            q * q <= V && (w = Math.sqrt(V - q * q) * s, T = Y - Math.atan2(w, q), b = Math.atan2(w / d, (q - B) / p));
                        }
                        var H = 0,
                            Q = Number.MAX_VALUE,
                            Z = 0,
                            j = 0,
                            J = 0,
                            $ = 0,
                            tt = 0,
                            et = 0;
                        (v = (F = B + f) * F) > $ && (J = 0, $ = v, tt = F), (v = (F = B - f) * F) < Q && (H = Math.PI, Q = v, Z = F);
                        var it = Math.acos(-f * B / (N - O));
                        (v = (F = f * Math.cos(it) + B) * F + (w = M * Math.sin(it)) * w) < Q && (H = it, Q = v, Z = F, j = w), v > $ && (J = it, $ = v, tt = F, et = w), V <= (Q + $) / 2 ? (T = Y - Math.atan2(j * s, Z), b = H * s) : (T = Y - Math.atan2(et * s, tt), b = J * s);
                    }
                    var at = Math.atan2(m, g) * o,
                        rt = t.resultTransform.skX;
                    (T = (T - at) * A.radDeg + h - rt) > 180 ? T -= 360 : T < -180 && (T += 360), t.resultTransform.x = u, t.resultTransform.y = _, t.resultTransform.skX = t.resultTransform.skY = rt + T * n, rt = i.resultTransform.skX, rt %= 360, (b = ((b + at) * A.radDeg - 0) * o + l - rt) > 180 ? b -= 360 : b < -180 && (b += 360), i.resultTransform.x = g, i.resultTransform.y = m, i.resultTransform.skX = i.resultTransform.skY = i.resultTransform.skY + b * n, t.update();
                }
            }
        }, {
            key: "_applyIk3",
            value: function _applyIk3(t, i, a, r, s, n) {
                if (0 == n) return;
                var h, l;
                var o = i.resultMatrix.a * i.length,
                    u = i.resultMatrix.b * i.length,
                    _ = o * o + u * u,
                    p = Math.sqrt(_);
                var d = t.resultMatrix.tx,
                    c = t.resultMatrix.ty,
                    m = i.resultMatrix.tx,
                    x = i.resultMatrix.ty,
                    y = m - d,
                    g = x - c;
                var f = y * y + g * g,
                    M = Math.sqrt(f),
                    D = (y = a - t.resultMatrix.tx) * y + (g = r - t.resultMatrix.ty) * g,
                    v = Math.sqrt(D);
                if (p + M <= v || v + p <= M || v + M <= p) {
                    var I;
                    m = d + (I = p + M <= v ? 1 : -1) * (a - d) * M / v, x = c + I * (r - c) * M / v;
                } else {
                    var _t2 = (f - _ + D) / (2 * D),
                        _e = Math.sqrt(f - _t2 * _t2 * D) / v,
                        _i = d + y * _t2,
                        _a = c + g * _t2,
                        _r = -g * _e,
                        _n = y * _e;
                    s > 0 ? (m = _i - _r, x = _a - _n) : (m = _i + _r, x = _a + _n);
                }
                var S, T, b, C;
                h = m, l = x, this.isDebug && (this._sp || (this._sp = new e.Sprite(), e.ILaya.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(d, c, 15, "#ff00ff"), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), this._sp.graphics.drawCircle(h, l, 15, "#ff00ff")), S = Math.atan2(l - t.resultMatrix.ty, h - t.resultMatrix.tx), t.setRotation(S), (T = A._tempMatrix).identity(), T.rotate(S), T.scale(t.resultMatrix.getScaleX(), t.resultMatrix.getScaleY()), T.translate(t.resultMatrix.tx, t.resultMatrix.ty), T.copyTo(t.resultMatrix), t.updateChild(), b = Math.atan2(r - l, a - h), i.setRotation(b), (C = A._tempMatrix).identity(), C.rotate(b), C.scale(i.resultMatrix.getScaleX(), i.resultMatrix.getScaleY()), C.translate(h, l), T.copyTo(i.resultMatrix), i.updateChild();
            }
        }]);
        return A;
    }();
    A.radDeg = 180 / Math.PI, A.degRad = Math.PI / 180, A._tempMatrix = new e.Matrix();
    var S = function S() {
        _classCallCheck(this, S);
        this.boneNames = [], this.bendDirection = 1, this.mix = 1, this.isSpine = !0, this.targetBoneIndex = -1, this.boneIndexs = [];
    };
    var T = function() {
        function T(t, e) {
            _classCallCheck(this, T);
            this._debugKey = !1, this._segments = [], this._curves = [], this.data = t, this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.bones = [];
            for (var i = this.data.bones, a = 0, r = i.length; a < r; a++) {
                this.bones.push(e[i[a]]);
            }
        }
        _createClass(T, [{
            key: "apply",
            value: function apply(t, e) {
                if (this.target) {
                    var i = this.translateMix,
                        a = this.translateMix,
                        r = a > 0,
                        s = this.data.spacingMode,
                        n = "length" == s,
                        h = this.data.rotateMode,
                        l = "tangent" == h,
                        o = "chainScale" == h,
                        u = [],
                        _ = this.bones.length,
                        p = l ? _ : _ + 1,
                        d = [];
                    this._spaces = d, d[0] = this.position;
                    var c = this.spacing;
                    if (o || n)
                        for (var m = 0, x = p - 1; m < x;) {
                            var y = this.bones[m],
                                g = y.length,
                                f = g * y.resultMatrix.a,
                                M = g * y.resultMatrix.b;
                            g = Math.sqrt(f * f + M * M), o && (u[m] = g), d[++m] = n ? Math.max(0, g + c) : c;
                        } else
                            for (m = 1; m < p; m++) {
                                d[m] = c;
                            }
                    var D = this.computeWorldPositions(this.target, t, e, p, l, "percent" == this.data.positionMode, "percent" == s);
                    if (this._debugKey) {
                        for (m = 0; m < D.length; m++) {
                            e.drawCircle(D[m++], D[m++], 5, "#00ff00");
                        }
                        var v = [];
                        for (m = 0; m < D.length; m++) {
                            v.push(D[m++], D[m++]);
                        }
                        e.drawLines(0, 0, v, "#ff0000");
                    }
                    var I, A = D[0],
                        S = D[1],
                        T = this.data.offsetRotation,
                        b = "chain" == h && 0 == T;
                    for (m = 0, I = 3; m < _; m++, I += 3) {
                        (y = this.bones[m]).resultMatrix.tx += (A - y.resultMatrix.tx) * i, y.resultMatrix.ty += (S - y.resultMatrix.ty) * i;
                        var C = (f = D[I]) - A,
                            F = (M = D[I + 1]) - S;
                        if (o && 0 != (g = u[m])) {
                            var w = (Math.sqrt(C * C + F * F) / g - 1) * a + 1;
                            y.resultMatrix.a *= w, y.resultMatrix.c *= w;
                        }
                        if (A = f, S = M, r) {
                            var k, P, L, U = y.resultMatrix.a,
                                B = y.resultMatrix.c,
                                E = y.resultMatrix.b,
                                R = y.resultMatrix.d;
                            k = l ? D[I - 1] : 0 == d[m + 1] ? D[I + 2] : Math.atan2(F, C), k -= Math.atan2(E, U) - T / 180 * Math.PI, b && (P = Math.cos(k), L = Math.sin(k), A += ((g = y.length) * (P * U - L * E) - C) * a, S += (g * (L * U + P * E) - F) * a), k > Math.PI ? k -= 2 * Math.PI : k < -Math.PI && (k += 2 * Math.PI), k *= a, P = Math.cos(k), L = Math.sin(k), y.resultMatrix.a = P * U - L * E, y.resultMatrix.c = P * B - L * R, y.resultMatrix.b = L * U + P * E, y.resultMatrix.d = L * B + P * R;
                        }
                    }
                }
            }
        }, {
            key: "computeWorldVertices2",
            value: function computeWorldVertices2(t, e, i, a, r, s) {
                var n, h, l, o = t.currDisplayData.bones,
                    u = t.currDisplayData.weights,
                    _ = t.currDisplayData.triangles,
                    p = 0,
                    d = 0,
                    c = 0,
                    m = 0,
                    x = 0,
                    y = 0,
                    g = 0,
                    f = 0,
                    M = 0,
                    D = 0;
                if (null != o) {
                    for (p = 0; p < i; p += 2) {
                        d += (m = o[d]) + 1, c += m;
                    }
                    var v = e;
                    for (x = s, y = 3 * c; x < a; x += 2) {
                        for (g = 0, f = 0, m = o[d++], m += d; d < m; d++, y += 3) {
                            n = v[o[d]].resultMatrix, M = u[y], D = u[y + 1];
                            var I = u[y + 2];
                            g += (M * n.a + D * n.c + n.tx) * I, f += (M * n.b + D * n.d + n.ty) * I;
                        }
                        r[x] = g, r[x + 1] = f;
                    }
                } else {
                    var A, S;
                    if (_ || (_ = u), t.deformData && (_ = t.deformData), A = t.parent, e)
                        for (l = e.length, p = 0; p < l; p++) {
                            if (e[p].name == A) {
                                h = e[p];
                                break;
                            }
                        }
                    h && (S = h.resultMatrix), S || (S = T._tempMt);
                    var b = S.tx,
                        C = S.ty,
                        F = S.a,
                        w = S.b,
                        k = S.c,
                        P = S.d;
                    for (h && (P *= h.d), d = i, x = s; x < a; d += 2, x += 2) {
                        M = _[d], D = _[d + 1], r[x] = M * F + D * w + b, r[x + 1] = -(M * k + D * P + C);
                    }
                }
            }
        }, {
            key: "computeWorldPositions",
            value: function computeWorldPositions(t, e, i, a, r, s, n) {
                t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles;
                var h, l, o, u, _, p, d, c, m = [],
                    x = 0,
                    y = t.currDisplayData.verLen,
                    g = this.position,
                    f = this._spaces,
                    M = [],
                    D = y / 6,
                    v = -1;
                if (D--, y -= 4, this.computeWorldVertices2(t, e, 2, y, m, 0), this._debugKey)
                    for (x = 0; x < m.length;) {
                        i.drawCircle(m[x++], m[x++], 10, "#ff0000");
                    }
                h = m, this._curves.length = D;
                var I = this._curves;
                l = 0;
                var A, S, T, b, C, F, w, k, P, L = h[0],
                    U = h[1],
                    B = 0,
                    E = 0,
                    R = 0,
                    N = 0,
                    O = 0,
                    V = 0;
                for (x = 0, P = 2; x < D; x++, P += 6) {
                    C = 2 * (A = .1875 * (L - 2 * (B = h[P]) + (R = h[P + 2]))) + (T = .09375 * (3 * (B - R) - L + (O = h[P + 4]))), F = 2 * (S = .1875 * (U - 2 * (E = h[P + 1]) + (N = h[P + 3]))) + (b = .09375 * (3 * (E - N) - U + (V = h[P + 5]))), w = .75 * (B - L) + A + .16666667 * T, k = .75 * (E - U) + S + .16666667 * b, l += Math.sqrt(w * w + k * k), w += C, k += F, C += T, F += b, l += Math.sqrt(w * w + k * k), w += C, k += F, l += Math.sqrt(w * w + k * k), w += C + T, k += F + b, l += Math.sqrt(w * w + k * k), I[x] = l, L = O, U = V;
                }
                if (s && (g *= l), n)
                    for (x = 0; x < a; x++) {
                        f[x] *= l;
                    }
                var Y, K = this._segments,
                    X = 0;
                for (x = 0, o = 0, u = 0, Y = 0; x < a; x++, o += 3) {
                    if ((_ = g += p = f[x]) < 0) this.addBeforePosition(_, h, 0, M, o);
                    else if (_ > l) this.addAfterPosition(_ - l, h, y - 4, M, o);
                    else {
                        for (;; u++) {
                            if (!(_ > (c = I[u]))) {
                                0 == u ? _ /= c : _ = (_ - (d = I[u - 1])) / (c - d);
                                break;
                            }
                        }
                        if (u != v) {
                            v = u;
                            var W = 6 * u;
                            for (C = 2 * (A = .03 * ((L = h[W]) - 2 * (B = h[W + 2]) + (R = h[W + 4]))) + (T = .006 * (3 * (B - R) - L + (O = h[W + 6]))), F = 2 * (S = .03 * ((U = h[W + 1]) - 2 * (E = h[W + 3]) + (N = h[W + 5]))) + (b = .006 * (3 * (E - N) - U + (V = h[W + 7]))), w = .3 * (B - L) + A + .16666667 * T, k = .3 * (E - U) + S + .16666667 * b, X = Math.sqrt(w * w + k * k), K[0] = X, W = 1; W < 8; W++) {
                                w += C, k += F, C += T, F += b, X += Math.sqrt(w * w + k * k), K[W] = X;
                            }
                            w += C, k += F, X += Math.sqrt(w * w + k * k), K[8] = X, w += C + T, k += F + b, X += Math.sqrt(w * w + k * k), K[9] = X, Y = 0;
                        }
                        for (_ *= X;; Y++) {
                            if (!(_ > (c = K[Y]))) {
                                0 == Y ? _ /= c : _ = Y + (_ - (d = K[Y - 1])) / (c - d);
                                break;
                            }
                        }
                        this.addCurvePosition(.1 * _, L, U, B, E, R, N, O, V, M, o, r || x > 0 && 0 == p);
                    }
                }
                return M;
            }
        }, {
            key: "addBeforePosition",
            value: function addBeforePosition(t, e, i, a, r) {
                var s = e[i],
                    n = e[i + 1],
                    h = e[i + 2] - s,
                    l = e[i + 3] - n,
                    o = Math.atan2(l, h);
                a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
            }
        }, {
            key: "addAfterPosition",
            value: function addAfterPosition(t, e, i, a, r) {
                var s = e[i + 2],
                    n = e[i + 3],
                    h = s - e[i],
                    l = n - e[i + 1],
                    o = Math.atan2(l, h);
                a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
            }
        }, {
            key: "addCurvePosition",
            value: function addCurvePosition(t, e, i, a, r, s, n, h, l, o, u, _) {
                0 == t && (t = 1e-4);
                var p = t * t,
                    d = p * t,
                    c = 1 - t,
                    m = c * c,
                    x = m * c,
                    y = c * t,
                    g = 3 * y,
                    f = c * g,
                    M = g * t,
                    D = e * x + a * f + s * M + h * d,
                    v = i * x + r * f + n * M + l * d;
                o[u] = D, o[u + 1] = v, o[u + 2] = _ ? Math.atan2(v - (i * m + r * y * 2 + n * p), D - (e * m + a * y * 2 + s * p)) : 0;
            }
        }]);
        return T;
    }();
    T.BEFORE = -2, T.AFTER = -3, T._tempMt = new e.Matrix();
    var b = function b() {
        _classCallCheck(this, b);
        this.bones = [];
    };
    var C = function() {
        function C(t, e) {
            _classCallCheck(this, C);
            var i, a;
            for (this._temp = [], this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex], i = 0, a = t.boneIndexs.length; i < a; i++) {
                this._bones.push(e[t.boneIndexs[i]]);
            }
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, this.shearMix = t.shearMix;
        }
        _createClass(C, [{
            key: "apply",
            value: function apply() {
                for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, r = this.target.resultMatrix.d, s = 0, n = this._bones.length; s < n; s++) {
                    if (t = this._bones[s], this.rotateMix > 0) {
                        var h = t.resultMatrix.a,
                            l = t.resultMatrix.b,
                            o = t.resultMatrix.c,
                            u = t.resultMatrix.d,
                            _ = Math.atan2(a, e) - Math.atan2(o, h) + this._data.offsetRotation * Math.PI / 180;
                        _ > Math.PI ? _ -= 2 * Math.PI : _ < -Math.PI && (_ += 2 * Math.PI), _ *= this.rotateMix;
                        var p = Math.cos(_),
                            d = Math.sin(_);
                        t.resultMatrix.a = p * h - d * o, t.resultMatrix.b = p * l - d * u, t.resultMatrix.c = d * h + p * o, t.resultMatrix.d = d * l + p * u;
                    }
                    if (this.translateMix && (this._temp[0] = this._data.offsetX, this._temp[1] = this._data.offsetY, this.target.localToWorld(this._temp), t.resultMatrix.tx += (this._temp[0] - t.resultMatrix.tx) * this.translateMix, t.resultMatrix.ty += (this._temp[1] - t.resultMatrix.ty) * this.translateMix, t.updateChild()), this.scaleMix > 0) {
                        var c = Math.sqrt(t.resultMatrix.a * t.resultMatrix.a + t.resultMatrix.c * t.resultMatrix.c),
                            m = Math.sqrt(e * e + a * a),
                            x = c > 1e-5 ? (c + (m - c + this._data.offsetScaleX) * this.scaleMix) / c : 0;
                        t.resultMatrix.a *= x, t.resultMatrix.c *= x, c = Math.sqrt(t.resultMatrix.b * t.resultMatrix.b + t.resultMatrix.d * t.resultMatrix.d), m = Math.sqrt(i * i + r * r), x = c > 1e-5 ? (c + (m - c + this._data.offsetScaleY) * this.scaleMix) / c : 0, t.resultMatrix.b *= x, t.resultMatrix.d *= x;
                    }
                    if (this.shearMix > 0) {
                        l = t.resultMatrix.b, u = t.resultMatrix.d;
                        var y = Math.atan2(u, l);
                        (_ = Math.atan2(r, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? _ -= 2 * Math.PI : _ < -Math.PI && (_ += 2 * Math.PI), _ = y + (_ + this._data.offsetShearY * Math.PI / 180) * this.shearMix, x = Math.sqrt(l * l + u * u), t.resultMatrix.b = Math.cos(_) * x, t.resultMatrix.d = Math.sin(_) * x;
                    }
                }
            }
        }]);
        return C;
    }();
    var F = function(_e$Sprite) {
        _inherits(F, _e$Sprite);

        function F() {
            var _this3;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            _classCallCheck(this, F);
            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(F).call(this)), _this3._boneMatrixArray = [], _this3._lastTime = 0, _this3._currAniIndex = -1, _this3._pause = !0, _this3._aniClipIndex = -1, _this3._clipIndex = -1, _this3._skinIndex = 0, _this3._skinName = "default", _this3._aniMode = 0, _this3._index = -1, _this3._total = -1, _this3._indexControl = !1, _this3._eventIndex = 0, _this3._drawOrderIndex = 0, _this3._drawOrder = null, _this3._lastAniClipIndex = -1, _this3._lastUpdateAniClipIndex = -1, _this3._playAudio = !0, _this3._soundChannelArr = [], t && _this3.init(t, e);
            return _this3;
        }
        _createClass(F, [{
            key: "init",
            value: function init(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var a, r, s, n, h = 0;
                if (1 == i)
                    for (this._graphicsCache = [], h = 0, a = t.getAnimationCount(); h < a; h++) {
                        this._graphicsCache.push([]);
                    }
                if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = i, this._templet = t, this._templet._addReference(1), this._player = new o(), this._player.cacheFrameRate = t.rate, this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0)
                    for (this._ikArr = [], h = 0, a = t.ikArr.length; h < a; h++) {
                        this._ikArr.push(new A(t.ikArr[h], this._boneList));
                    }
                if (t.pathArr.length > 0)
                    for (null == this._pathDic && (this._pathDic = {}), h = 0, a = t.pathArr.length; h < a; h++) {
                        r = t.pathArr[h], s = new T(r, this._boneList), (n = this._boneSlotDic[r.name]) && ((s = new T(r, this._boneList)).target = n), this._pathDic[r.name] = s;
                    }
                if (t.tfArr.length > 0)
                    for (this._tfArr = [], h = 0, a = t.tfArr.length; h < a; h++) {
                        this._tfArr.push(new C(t.tfArr[h], this._boneList));
                    }
                if (t.skinDataArray.length > 0) {
                    var l = this._templet.skinDataArray[this._skinIndex];
                    this._skinName = l.name;
                }
                this._player.on(e.Event.PLAYED, this, this._onPlay), this._player.on(e.Event.STOPPED, this, this._onStop), this._player.on(e.Event.PAUSED, this, this._onPause);
            }
        }, {
            key: "load",
            value: function load(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                this._aniPath = t, this._complete = i, this._loadAniMode = a, e.ILaya.loader.load([{
                    url: t,
                    type: e.ILaya.Loader.BUFFER
                }], e.Handler.create(this, this._onLoaded));
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded() {
                var t, a = e.ILaya.Loader.getRes(this._aniPath);
                null != a && (null == i.Templet.TEMPLET_DICTIONARY && (i.Templet.TEMPLET_DICTIONARY = {}), (t = i.Templet.TEMPLET_DICTIONARY[this._aniPath]) ? t.isParseFail ? this._parseFail() : t.isParserComplete ? this._parseComplete() : (t.on(e.Event.COMPLETE, this, this._parseComplete), t.on(e.Event.ERROR, this, this._parseFail)) : ((t = new i.Templet())._setCreateURL(this._aniPath), i.Templet.TEMPLET_DICTIONARY[this._aniPath] = t, t.on(e.Event.COMPLETE, this, this._parseComplete), t.on(e.Event.ERROR, this, this._parseFail), t.isParserComplete = !1, t.parseData(null, a)));
            }
        }, {
            key: "_parseComplete",
            value: function _parseComplete() {
                var t = i.Templet.TEMPLET_DICTIONARY[this._aniPath];
                t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
            }
        }, {
            key: "_parseFail",
            value: function _parseFail() {
                console.log("[Error]:" + this._aniPath + "解析失败");
            }
        }, {
            key: "_onPlay",
            value: function _onPlay() {
                this.event(e.Event.PLAYED);
            }
        }, {
            key: "_onStop",
            value: function _onStop() {
                var t, i = this._templet.eventAniArr[this._aniClipIndex];
                if (i && this._eventIndex < i.length)
                    for (; this._eventIndex < i.length; this._eventIndex++) {
                        (t = i[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event(e.Event.LABEL, t);
                    }
                this._drawOrder = null, this.event(e.Event.STOPPED);
            }
        }, {
            key: "_onPause",
            value: function _onPause() {
                this.event(e.Event.PAUSED);
            }
        }, {
            key: "_parseSrcBoneMatrix",
            value: function _parseSrcBoneMatrix() {
                var t = 0,
                    i = 0;
                for (i = this._templet.srcBoneMatrixArr.length, t = 0; t < i; t++) {
                    this._boneMatrixArray.push(new e.Matrix());
                }
                if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, this._boneSlotArray = this._templet.boneSlotArray;
                else {
                    null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), null == this._boneSlotArray && (this._boneSlotArray = []);
                    var a, r, s = this._templet.boneSlotArray;
                    for (t = 0, i = s.length; t < i; t++) {
                        a = s[t], null == (r = this._bindBoneBoneSlotDic[a.parent]) && (this._bindBoneBoneSlotDic[a.parent] = r = []), this._boneSlotDic[a.name] = a = a.copy(), r.push(a), this._boneSlotArray.push(a);
                    }
                }
            }
        }, {
            key: "_emitMissedEvents",
            value: function _emitMissedEvents(t, i) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
                if (r) {
                    var s, n, h = 0;
                    for (s = r.length, h = a; h < s; h++) {
                        (n = r[h]).time >= this._player.playStart && n.time <= this._player.playEnd && this.event(e.Event.LABEL, n);
                    }
                }
            }
        }, {
            key: "_update",
            value: function _update() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (!(this._pause || t && this._indexControl)) {
                    var i = this.timer.currTimer,
                        a = this._player.currentKeyframeIndex,
                        r = i - this._lastTime;
                    if (t ? this._player._update(r) : a = -1, this._lastTime = i, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, !(this._index < 0 || r > 0 && this._clipIndex == a && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                        this._lastUpdateAniClipIndex = this._aniClipIndex, a > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex), this._eventIndex = 0);
                        var s, n, h = this._templet.eventAniArr[this._aniClipIndex];
                        if (h && this._eventIndex < h.length) {
                            var l = h[this._eventIndex];
                            l.time >= this._player.playStart && l.time <= this._player.playEnd ? this._player.currentPlayTime >= l.time && (this.event(e.Event.LABEL, l), this._eventIndex++, this._playAudio && l.audioValue && "null" !== l.audioValue && "undefined" !== l.audioValue && (s = e.SoundManager.playSound(this._player.templet._path + l.audioValue, 1, e.Handler.create(this, this._onAniSoundStoped)), e.SoundManager.playbackRate = this._player.playbackRate, s && this._soundChannelArr.push(s))) : l.time < this._player.playStart && this._playAudio && l.audioValue && "null" !== l.audioValue && "undefined" !== l.audioValue ? (this._eventIndex++, s = e.SoundManager.playSound(this._player.templet._path + l.audioValue, 1, e.Handler.create(this, this._onAniSoundStoped), null, (this._player.currentPlayTime - l.time) / 1e3), e.SoundManager.playbackRate = this._player.playbackRate, s && this._soundChannelArr.push(s)) : this._eventIndex++;
                        }
                        0 == this._aniMode ? (n = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != n && (this.graphics = n) : 1 == this._aniMode ? (n = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != n && (this.graphics = n) : this._createGraphics();
                    }
                }
            }
        }, {
            key: "_onAniSoundStoped",
            value: function _onAniSoundStoped(t) {
                for (var e, i = this._soundChannelArr.length, a = 0; a < i; a++) {
                    ((e = this._soundChannelArr[a]).isStopped || t) && (!e.isStopped && e.stop(), this._soundChannelArr.splice(a, 1), i--, a--);
                }
            }
        }, {
            key: "_createGraphics",
            value: function _createGraphics() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1; - 1 == t && (t = this._clipIndex);
                var i, a = t * this._player.cacheFrameRateInterval,
                    r = this._templet.drawOrderAniArr[this._aniClipIndex];
                if (r && r.length > 0)
                    for (this._drawOrderIndex = 0, i = r[this._drawOrderIndex]; a >= i.time && (this._drawOrder = i.drawOrder, this._drawOrderIndex++, !(this._drawOrderIndex >= r.length));) {
                        i = r[this._drawOrderIndex];
                    }
                0 == this._aniMode || 1 == this._aniMode ? this.graphics = p.create() : this.graphics instanceof p ? this.graphics.clear() : this.graphics = p.create();
                var s = this.graphics,
                    n = this._templet.getNodes(this._aniClipIndex),
                    h = 0 == this._player.state;
                this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, h ? a + this._player.cacheFrameRateInterval : a);
                var l, o, u, _, d = this._aniSectionDic[this._aniClipIndex],
                    c = 0,
                    m = 0,
                    x = 0,
                    y = 0,
                    g = 0,
                    f = this._templet.srcBoneMatrixArr.length,
                    M = this._curOriginalData;
                for (m = 0, g = d[0]; m < f; m++) {
                    var D = (_ = this._boneList[m]).resultTransform;
                    u = this._templet.srcBoneMatrixArr[m], D.scX = u.scX * M[c++], D.skX = u.skX + M[c++], D.skY = u.skY + M[c++], D.scY = u.scY * M[c++], D.x = u.x + M[c++], D.y = u.y + M[c++], 8 === this._templet.tMatrixDataLen && (D.skewX = u.skewX + M[c++], D.skewY = u.skewY + M[c++]);
                }
                var v, I = {},
                    A = {};
                for (g += d[1]; m < g; m++) {
                    I[(v = n[m]).name] = M[c++], A[v.name] = M[c++], c += 4;
                }
                var S, T, b = {},
                    C = {};
                for (g += d[2]; m < g; m++) {
                    b[(v = n[m]).name] = M[c++], C[v.name] = M[c++], c += 4;
                }
                if (this._pathDic)
                    for (g += d[3]; m < g; m++) {
                        if (v = n[m], S = this._pathDic[v.name]) switch (new e.Byte(v.extenData).getByte()) {
                            case 1:
                                S.position = M[c++];
                                break;
                            case 2:
                                S.spacing = M[c++];
                                break;
                            case 3:
                                S.rotateMix = M[c++], S.translateMix = M[c++];
                        }
                    }
                if (this._rootBone.update(this._yReverseMatrix || e.Matrix.TEMP.identity()), this._ikArr)
                    for (m = 0, g = this._ikArr.length; m < g; m++) {
                        (T = this._ikArr[m]).name in b && (T.bendDirection = b[T.name]), T.name in C && (T.mix = C[T.name]), T.apply();
                    }
                if (this._pathDic)
                    for (var F in this._pathDic) {
                        (S = this._pathDic[F]).apply(this._boneList, s);
                    }
                if (this._tfArr)
                    for (m = 0, y = this._tfArr.length; m < y; m++) {
                        this._tfArr[m].apply();
                    }
                for (m = 0, y = this._boneList.length; m < y; m++) {
                    if (_ = this._boneList[m], o = this._bindBoneBoneSlotDic[_.name], _.resultMatrix.copyTo(this._boneMatrixArray[m]), o)
                        for (x = 0, g = o.length; x < g; x++) {
                            (l = o[x]) && l.setParentMatrix(_.resultMatrix);
                        }
                }
                var w, k, P, L, U = {},
                    B = this._templet.deformAniArr;
                if (B && B.length > 0) {
                    if (this._lastAniClipIndex != this._aniClipIndex)
                        for (this._lastAniClipIndex = this._aniClipIndex, m = 0, g = this._boneSlotArray.length; m < g; m++) {
                            (l = this._boneSlotArray[m]).deformData = null;
                        }
                    var E, R = B[this._aniClipIndex];
                    for (E in w = R["default"], this._setDeform(w, U, this._boneSlotArray, a), R) {
                        "default" != E && E != this._skinName && (w = R[E], this._setDeform(w, U, this._boneSlotArray, a));
                    }
                    w = R[this._skinName], this._setDeform(w, U, this._boneSlotArray, a);
                }
                if (this._drawOrder)
                    for (m = 0, g = this._drawOrder.length; m < g; m++) {
                        k = I[(l = this._boneSlotArray[this._drawOrder[m]]).name], P = A[l.name], isNaN(k) || -2 == k || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[k]) : l.showDisplayByIndex(k)), U[this._drawOrder[m]] ? (L = U[this._drawOrder[m]], l.currDisplayData && L[l.currDisplayData.attachmentName] ? l.deformData = L[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, isNaN(P) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, P);
                    } else
                        for (m = 0, g = this._boneSlotArray.length; m < g; m++) {
                            k = I[(l = this._boneSlotArray[m]).name], P = A[l.name], isNaN(k) || -2 == k || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[k]) : l.showDisplayByIndex(k)), U[m] ? (L = U[m], l.currDisplayData && L[l.currDisplayData.attachmentName] ? l.deformData = L[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, isNaN(P) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, P);
                        }
                return 0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, s), this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, s), s;
            }
        }, {
            key: "_checkIsAllParsed",
            value: function _checkIsAllParsed(t) {
                var e, i;
                for (i = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate), e = 0; e < i; e++) {
                    if (!this._templet.getGrahicsDataWithCache(t, e)) return;
                }
                this._templet.getGrahicsDataWithCache(t, i) ? this._templet.deleteAniData(t) : this._createGraphics(i);
            }
        }, {
            key: "_setDeform",
            value: function _setDeform(t, e, i, a) {
                var r, s, n, h, l, o;
                if (t && t)
                    for (h = 0, l = t.deformSlotDataList.length; h < l; h++) {
                        for (r = t.deformSlotDataList[h], o = 0; o < r.deformSlotDisplayList.length; o++) {
                            n = i[(s = r.deformSlotDisplayList[o]).slotIndex], s.apply(a, n), e[s.slotIndex] || (e[s.slotIndex] = {}), e[s.slotIndex][s.attachment] = s.deformData;
                        }
                    }
            }
        }, {
            key: "getAnimNum",
            value: function getAnimNum() {
                return this._templet.getAnimationCount();
            }
        }, {
            key: "getAniNameByIndex",
            value: function getAniNameByIndex(t) {
                return this._templet.getAniNameByIndex(t);
            }
        }, {
            key: "getSlotByName",
            value: function getSlotByName(t) {
                return this._boneSlotDic[t];
            }
        }, {
            key: "showSkinByName",
            value: function showSkinByName(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
            }
        }, {
            key: "showSkinByIndex",
            value: function showSkinByIndex(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                for (var i = 0; i < this._boneSlotArray.length; i++) {
                    this._boneSlotArray[i].showSlotData(null, e);
                }
                if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                    var a = this._templet.skinDataArray[t];
                    this._skinIndex = t, this._skinName = a.name;
                }
                this._clearCache();
            }
        }, {
            key: "showSlotSkinByIndex",
            value: function showSlotSkinByIndex(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByIndex(e), this._clearCache();
                }
            }
        }, {
            key: "showSlotSkinByName",
            value: function showSlotSkinByName(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByName(e), this._clearCache();
                }
            }
        }, {
            key: "replaceSlotSkinName",
            value: function replaceSlotSkinName(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByName(e, i), this._clearCache();
                }
            }
        }, {
            key: "replaceSlotSkinByIndex",
            value: function replaceSlotSkinByIndex(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByIndex(e, i), this._clearCache();
                }
            }
        }, {
            key: "setSlotSkin",
            value: function setSlotSkin(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.replaceSkin(e), this._clearCache();
                }
            }
        }, {
            key: "_clearCache",
            value: function _clearCache() {
                if (1 == this._aniMode)
                    for (var t = 0, e = this._graphicsCache.length; t < e; t++) {
                        for (var i = 0, a = this._graphicsCache[t].length; i < a; i++) {
                            var r = this._graphicsCache[t][i];
                            r && r != this.graphics && p.recycle(r);
                        }
                        this._graphicsCache[t].length = 0;
                    }
            }
        }, {
            key: "play",
            value: function play(t, i) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
                this._playAudio = h, this._indexControl = !1;
                var l, o = -1;
                if (l = i ? 2147483647 : 0, "string" == typeof t)
                    for (var u = 0, _ = this._templet.getAnimationCount(); u < _; u++) {
                        var p = this._templet.getAnimation(u);
                        if (p && t == p.name) {
                            o = u;
                            break;
                        }
                    } else o = t;
                o > -1 && o < this.getAnimNum() && (this._aniClipIndex = o, (a || this._pause || this._currAniIndex != o) && (this._currAniIndex = o, this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(o)), this._drawOrder = null, this._eventIndex = 0, this._player.play(o, this._player.playbackRate, l, r, s), n && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1, this._lastTime = e.ILaya.Browser.now(), this.timer.frameLoop(1, this, this._update, null, !0)), this._update()));
            }
        }, {
            key: "stop",
            value: function stop() {
                this._pause || (this._pause = !0, this._player && this._player.stop(!0), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0), this.timer.clear(this, this._update));
            }
        }, {
            key: "playbackRate",
            value: function playbackRate(t) {
                this._player && (this._player.playbackRate = t);
            }
        }, {
            key: "paused",
            value: function paused() {
                if (!this._pause) {
                    if (this._pause = !0, this._player && (this._player.paused = !0), this._soundChannelArr.length > 0)
                        for (var t, e = this._soundChannelArr.length, i = 0; i < e; i++) {
                            (t = this._soundChannelArr[i]).isStopped || t.pause();
                        }
                    this.timer.clear(this, this._update);
                }
            }
        }, {
            key: "resume",
            value: function resume() {
                if (this._indexControl = !1, this._pause) {
                    if (this._pause = !1, this._player && (this._player.paused = !1), this._soundChannelArr.length > 0)
                        for (var t, i = this._soundChannelArr.length, a = 0; a < i; a++) {
                            (t = this._soundChannelArr[a]).audioBuffer && t.resume();
                        }
                    this._lastTime = e.ILaya.Browser.now(), this.timer.frameLoop(1, this, this._update, null, !0);
                }
            }
        }, {
            key: "_getGrahicsDataWithCache",
            value: function _getGrahicsDataWithCache(t, e) {
                return this._graphicsCache[t][e];
            }
        }, {
            key: "_setGrahicsDataWithCache",
            value: function _setGrahicsDataWithCache(t, e, i) {
                this._graphicsCache[t][e] = i;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                _get(_getPrototypeOf(F.prototype), "destroy", this).call(this, t), this._templet._removeReference(1), this._templet = null, this._player && this._player.offAll(), this._player = null, this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, this.timer.clear(this, this._update), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0);
            }
        }, {
            key: "url",
            get: function get() {
                return this._aniPath;
            },
            set: function set(t) {
                this.load(t);
            }
        }, {
            key: "index",
            get: function get() {
                return this._index;
            },
            set: function set(t) {
                this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, this._indexControl = !0, this._update(!1));
            }
        }, {
            key: "total",
            get: function get() {
                return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, this._total;
            }
        }, {
            key: "player",
            get: function get() {
                return this._player;
            }
        }, {
            key: "templet",
            get: function get() {
                return this._templet;
            }
        }]);
        return F;
    }(e.Sprite);
    F.useSimpleMeshInCanvas = !1, i.Skeleton = F, e.ILaya.regClass(F), e.ClassUtils.regClass("laya.ani.bone.Skeleton", F), e.ClassUtils.regClass("Laya.Skeleton", F);
    var w = function w() {
        _classCallCheck(this, w);
        this.slotArr = [];
    };
    var k = function() {
        function k() {
            _classCallCheck(this, k);
        }
        _createClass(k, [{
            key: "createTexture",
            value: function createTexture(t) {
                return this.texture ? this.texture : (this.texture = new e.Texture(t.bitmap, this.uvs), this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), this.texture);
            }
        }, {
            key: "destory",
            value: function destory() {
                this.texture && this.texture.destroy();
            }
        }]);
        return k;
    }();
    var P = function() {
        function P() {
            _classCallCheck(this, P);
            this.displayArr = [];
        }
        _createClass(P, [{
            key: "getDisplayByName",
            value: function getDisplayByName(t) {
                for (var e = 0, i = this.displayArr.length; e < i; e++) {
                    if (this.displayArr[e].attachmentName == t) return e;
                }
                return -1;
            }
        }]);
        return P;
    }();
    var L = function L() {
        _classCallCheck(this, L);
        this.boneIndexs = [];
    };
    var U = function(_ref) {
        _inherits(U, _ref);

        function U() {
            var _this4;
            _classCallCheck(this, U);
            _this4 = _possibleConstructorReturn(this, _getPrototypeOf(U).apply(this, arguments)), _this4._graphicsCache = [], _this4.srcBoneMatrixArr = [], _this4.ikArr = [], _this4.tfArr = [], _this4.pathArr = [], _this4.boneSlotDic = {}, _this4.bindBoneBoneSlotDic = {}, _this4.boneSlotArray = [], _this4.skinDataArray = [], _this4.skinDic = {}, _this4.subTextureDic = {}, _this4.isParseFail = !1, _this4.drawOrderAniArr = [], _this4.eventAniArr = [], _this4.attachmentNames = null, _this4.deformAniArr = [], _this4.skinSlotDisplayDataArr = [], _this4._isParseAudio = !1, _this4._isDestroyed = !1, _this4._rate = 30, _this4.isParserComplete = !1, _this4.aniSectionDic = {}, _this4._textureDic = {}, _this4.mBoneArr = [];
            return _this4;
        }
        _createClass(U, [{
            key: "loadAni",
            value: function loadAni(t) {
                this._skBufferUrl = t, e.ILaya.loader.load(t, e.Handler.create(this, this.onComplete), null, e.ILaya.Loader.BUFFER);
            }
        }, {
            key: "onComplete",
            value: function onComplete() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if (this._isDestroyed) this.destroy();
                else {
                    var i = e.ILaya.Loader.getRes(this._skBufferUrl);
                    i ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", this.parseData(null, i)) : this.event(e.Event.ERROR, "load failed:" + this._skBufferUrl);
                }
            }
        }, {
            key: "parseData",
            value: function parseData(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
                if (!this._path) {
                    var a = this._relativeUrl || this.url;
                    if (a) {
                        var r = a.lastIndexOf("/");
                        this._path = r > 0 ? a.slice(0, r) + "/" : "";
                    }
                }
                this._mainTexture = t, this._rate = i, this.parse(e);
            }
        }, {
            key: "buildArmature",
            value: function buildArmature() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return new F(this, t);
            }
        }, {
            key: "parse",
            value: function parse(t) {
                _get(_getPrototypeOf(U.prototype), "parse", this).call(this, t), this.event(e.Event.LOADED, this), this._aniVersion === U.LAYA_ANIMATION_VISION ? this._isParseAudio = !0 : this._aniVersion != U.LAYA_ANIMATION_160_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + U.LAYA_ANIMATION_VISION), this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
            }
        }, {
            key: "_parseTexturePath",
            value: function _parseTexturePath() {
                if (this._isDestroyed) this.destroy();
                else {
                    var t = 0;
                    this._loadList = [];
                    var i, a = new e.Byte(this.getPublicExtData()),
                        r = a.getInt32(),
                        s = a.readUTFString(),
                        n = s.split("\n");
                    for (t = 0; t < r; t++) {
                        i = this._path + n[2 * t], s = n[2 * t + 1], a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), -1 == this._loadList.indexOf(i) && this._loadList.push(i);
                    }
                    e.ILaya.loader.load(this._loadList, e.Handler.create(this, this._textureComplete));
                }
            }
        }, {
            key: "_textureComplete",
            value: function _textureComplete() {
                for (var t, i = 0, a = this._loadList.length; i < a; i++) {
                    t = this._loadList[i], this._textureDic[t] = e.ILaya.Loader.getRes(t);
                }
                this._parsePublicExtData();
            }
        }, {
            key: "_parsePublicExtData",
            value: function _parsePublicExtData() {
                var t, i = 0,
                    a = 0,
                    r = 0,
                    s = 0,
                    n = 0;
                for (i = 0, n = this.getAnimationCount(); i < n; i++) {
                    this._graphicsCache.push([]);
                }
                t = "Dragon" != this._aniClassName;
                var h, l, o = new e.Byte(this.getPublicExtData()),
                    u = 0,
                    _ = 0,
                    p = 0,
                    m = 0,
                    x = 0,
                    y = 0,
                    A = 0,
                    T = 0,
                    C = 0,
                    F = o.getInt32(),
                    U = o.readUTFString(),
                    B = U.split("\n");
                for (i = 0; i < F; i++) {
                    if (h = this._mainTexture, l = this._path + B[2 * i], U = B[2 * i + 1], null == this._mainTexture && (h = this._textureDic[l]), !h) return this.event(e.Event.ERROR, this), void(this.isParseFail = !0);
                    u = o.getFloat32(), _ = o.getFloat32(), p = o.getFloat32(), m = o.getFloat32(), C = o.getFloat32(), x = isNaN(C) ? 0 : C, C = o.getFloat32(), y = isNaN(C) ? 0 : C, C = o.getFloat32(), A = isNaN(C) ? p : C, C = o.getFloat32(), T = isNaN(C) ? m : C, this.subTextureDic[U] = e.Texture.create(h, u, _, p, m, -x, -y, A, T);
                }
                this._mainTexture = h;
                var E, R, N, O, V, Y = o.getUint16();
                for (i = 0; i < Y; i++) {
                    (E = []).push(o.getUint16()), E.push(o.getUint16()), E.push(o.getUint16()), E.push(o.getUint16()), this.aniSectionDic[i] = E;
                }
                var K, X = o.getInt16(),
                    W = {};
                for (i = 0; i < X; i++) {
                    R = new c(), 0 == i ? K = R : R.root = K, R.d = t ? -1 : 1, O = o.readUTFString(), V = o.readUTFString(), R.length = o.getFloat32(), 1 == o.getByte() && (R.inheritRotation = !1), 1 == o.getByte() && (R.inheritScale = !1), R.name = O, V && ((N = W[V]) ? N.addChild(R) : this.mRootBone = R), W[O] = R, this.mBoneArr.push(R);
                }
                this.tMatrixDataLen = o.getUint16();
                var z, G, q = o.getUint16(),
                    H = Math.floor(q / this.tMatrixDataLen),
                    Q = this.srcBoneMatrixArr;
                for (i = 0; i < H; i++) {
                    (z = new d()).scX = o.getFloat32(), z.skX = o.getFloat32(), z.skY = o.getFloat32(), z.scY = o.getFloat32(), z.x = o.getFloat32(), z.y = o.getFloat32(), 8 === this.tMatrixDataLen && (z.skewX = o.getFloat32(), z.skewY = o.getFloat32()), Q.push(z), (R = this.mBoneArr[i]).transform = z;
                }
                var Z, j, J = o.getUint16();
                for (i = 0; i < J; i++) {
                    for (G = new S(), Z = o.getUint16(), a = 0; a < Z; a++) {
                        G.boneNames.push(o.readUTFString()), G.boneIndexs.push(o.getInt16());
                    }
                    G.name = o.readUTFString(), G.targetBoneName = o.readUTFString(), G.targetBoneIndex = o.getInt16(), G.bendDirection = o.getFloat32(), G.mix = o.getFloat32(), G.isSpine = t, this.ikArr.push(G);
                }
                var $, tt, et = o.getUint16();
                for (i = 0; i < et; i++) {
                    for (j = new L(), $ = o.getUint16(), a = 0; a < $; a++) {
                        j.boneIndexs.push(o.getInt16());
                    }
                    j.name = o.getUTFString(), j.targetIndex = o.getInt16(), j.rotateMix = o.getFloat32(), j.translateMix = o.getFloat32(), j.scaleMix = o.getFloat32(), j.shearMix = o.getFloat32(), j.offsetRotation = o.getFloat32(), j.offsetX = o.getFloat32(), j.offsetY = o.getFloat32(), j.offsetScaleX = o.getFloat32(), j.offsetScaleY = o.getFloat32(), j.offsetShearY = o.getFloat32(), this.tfArr.push(j);
                }
                var it, at, rt, st, nt, ht, lt, ot, ut, _t, pt = o.getUint16();
                for (i = 0; i < pt; i++) {
                    for ((tt = new b()).name = o.readUTFString(), it = o.getUint16(), a = 0; a < it; a++) {
                        tt.bones.push(o.getInt16());
                    }
                    tt.target = o.readUTFString(), tt.positionMode = o.readUTFString(), tt.spacingMode = o.readUTFString(), tt.rotateMode = o.readUTFString(), tt.offsetRotation = o.getFloat32(), tt.position = o.getFloat32(), tt.spacing = o.getFloat32(), tt.rotateMix = o.getFloat32(), tt.translateMix = o.getFloat32(), this.pathArr.push(tt);
                }
                var dt, ct = o.getInt16();
                for (i = 0; i < ct; i++) {
                    var mt = o.getUint8(),
                        xt = {};
                    this.deformAniArr.push(xt);
                    for (var yt = 0; yt < mt; yt++) {
                        for ((lt = new f()).skinName = o.getUTFString(), xt[lt.skinName] = lt, at = o.getInt16(), a = 0; a < at; a++) {
                            for (ot = new M(), lt.deformSlotDataList.push(ot), rt = o.getInt16(), r = 0; r < rt; r++) {
                                for (ut = new D(), ot.deformSlotDisplayList.push(ut), ut.slotIndex = o.getInt16(), ut.attachment = o.getUTFString(), st = o.getInt16(), s = 0; s < st; s++) {
                                    for (1 == o.getByte() ? ut.tweenKeyList.push(!0) : ut.tweenKeyList.push(!1), nt = o.getFloat32(), ut.timeList.push(nt), _t = [], ut.vectices.push(_t), ht = o.getInt16(), n = 0; n < ht; n++) {
                                        _t.push(o.getFloat32());
                                    }
                                }
                            }
                        }
                    }
                }
                var gt, ft, Mt, Dt, vt = o.getInt16();
                for (i = 0; i < vt; i++) {
                    for (gt = o.getInt16(), dt = [], a = 0; a < gt; a++) {
                        for ((ft = new v()).time = o.getFloat32(), Mt = o.getInt16(), r = 0; r < Mt; r++) {
                            ft.drawOrder.push(o.getInt16());
                        }
                        dt.push(ft);
                    }
                    this.drawOrderAniArr.push(dt);
                }
                var It, At, St = o.getInt16();
                for (i = 0; i < St; i++) {
                    for (It = o.getInt16(), Dt = [], a = 0; a < It; a++) {
                        (At = new I()).name = o.getUTFString(), this._isParseAudio && (At.audioValue = o.getUTFString()), At.intValue = o.getInt32(), At.floatValue = o.getFloat32(), At.stringValue = o.getUTFString(), At.time = o.getFloat32(), Dt.push(At);
                    }
                    this.eventAniArr.push(Dt);
                }
                var Tt = o.getInt16();
                if (Tt > 0)
                    for (this.attachmentNames = [], i = 0; i < Tt; i++) {
                        this.attachmentNames.push(o.getUTFString());
                    }
                var bt, Ct, Ft = o.getInt16();
                for (i = 0; i < Ft; i++) {
                    (bt = new g()).name = o.readUTFString(), bt.parent = o.readUTFString(), bt.attachmentName = o.readUTFString(), bt.srcDisplayIndex = bt.displayIndex = o.getInt16(), bt.templet = this, this.boneSlotDic[bt.name] = bt, null == (Ct = this.bindBoneBoneSlotDic[bt.parent]) && (this.bindBoneBoneSlotDic[bt.parent] = Ct = []), Ct.push(bt), this.boneSlotArray.push(bt);
                }
                var wt, kt, Pt, Lt, Ut, Bt, Et, Rt, Nt, Ot, Vt = o.readUTFString().split("\n"),
                    Yt = 0,
                    Kt = o.getUint8();
                for (i = 0; i < Kt; i++) {
                    for ((wt = new w()).name = Vt[Yt++], Lt = o.getUint8(), a = 0; a < Lt; a++) {
                        for ((kt = new P()).name = Vt[Yt++], bt = this.boneSlotDic[kt.name], Ut = o.getUint8(), r = 0; r < Ut; r++) {
                            if (Pt = new k(), this.skinSlotDisplayDataArr.push(Pt), Pt.name = Vt[Yt++], Pt.attachmentName = Vt[Yt++], Pt.transform = new d(), Pt.transform.scX = o.getFloat32(), Pt.transform.skX = o.getFloat32(), Pt.transform.skY = o.getFloat32(), Pt.transform.scY = o.getFloat32(), Pt.transform.x = o.getFloat32(), Pt.transform.y = o.getFloat32(), kt.displayArr.push(Pt), Pt.width = o.getFloat32(), Pt.height = o.getFloat32(), Pt.type = o.getUint8(), Pt.verLen = o.getUint16(), (X = o.getUint16()) > 0)
                                for (Pt.bones = [], s = 0; s < X; s++) {
                                    var Xt = o.getUint16();
                                    Pt.bones.push(Xt);
                                }
                            if ((Bt = o.getUint16()) > 0)
                                for (Pt.uvs = [], s = 0; s < Bt; s++) {
                                    Pt.uvs.push(o.getFloat32());
                                }
                            if ((Et = o.getUint16()) > 0)
                                for (Pt.weights = [], s = 0; s < Et; s++) {
                                    Pt.weights.push(o.getFloat32());
                                }
                            if ((Rt = o.getUint16()) > 0)
                                for (Pt.triangles = [], s = 0; s < Rt; s++) {
                                    Pt.triangles.push(o.getUint16());
                                }
                            if ((Nt = o.getUint16()) > 0)
                                for (Pt.vertices = [], s = 0; s < Nt; s++) {
                                    Pt.vertices.push(o.getFloat32());
                                }
                            if ((Ot = o.getUint16()) > 0)
                                for (Pt.lengths = [], s = 0; s < Ot; s++) {
                                    Pt.lengths.push(o.getFloat32());
                                }
                        }
                        wt.slotArr.push(kt);
                    }
                    this.skinDic[wt.name] = wt, this.skinDataArray.push(wt);
                }
                1 == o.getUint8() ? (this.yReverseMatrix = new e.Matrix(1, 0, 0, -1, 0, 0), K && K.setTempMatrix(this.yReverseMatrix)) : K && K.setTempMatrix(new e.Matrix()), this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event(e.Event.COMPLETE, this);
            }
        }, {
            key: "getTexture",
            value: function getTexture(t) {
                var e = this.subTextureDic[t];
                return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
            }
        }, {
            key: "showSkinByIndex",
            value: function showSkinByIndex(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                if (e < 0 && e >= this.skinDataArray.length) return !1;
                var a, r, s, n, h = this.skinDataArray[e];
                if (h) {
                    for (a = 0, r = h.slotArr.length; a < r; a++) {
                        (n = h.slotArr[a]) && (s = t[n.name]) && (s.showSlotData(n, i), i && "undefined" != s.attachmentName && "null" != s.attachmentName ? s.showDisplayByName(s.attachmentName) : s.showDisplayByIndex(s.displayIndex));
                    }
                    return !0;
                }
                return !1;
            }
        }, {
            key: "getSkinIndexByName",
            value: function getSkinIndexByName(t) {
                for (var e = 0, i = this.skinDataArray.length; e < i; e++) {
                    if (this.skinDataArray[e].name == t) return e;
                }
                return -1;
            }
        }, {
            key: "getGrahicsDataWithCache",
            value: function getGrahicsDataWithCache(t, e) {
                return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
            }
        }, {
            key: "_setCreateURL",
            value: function _setCreateURL(t) {
                this._skBufferUrl = this._relativeUrl = t, _get(_getPrototypeOf(U.prototype), "_setCreateURL", this).call(this, t);
            }
        }, {
            key: "setGrahicsDataWithCache",
            value: function setGrahicsDataWithCache(t, e, i) {
                this._graphicsCache[t][e] = i;
            }
        }, {
            key: "deleteAniData",
            value: function deleteAniData(t) {
                if (this._anis[t]) {
                    var e = this._anis[t];
                    e.bone3DMap = null, e.nodes = null;
                }
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t;
                for (t in this._isDestroyed = !0, this.subTextureDic) {
                    t && this.subTextureDic[t].destroy();
                }
                for (t in this._textureDic) {
                    t && this._textureDic[t].destroy();
                }
                for (var i = 0, a = this.skinSlotDisplayDataArr.length; i < a; i++) {
                    this.skinSlotDisplayDataArr[i].destory();
                }
                this.skinSlotDisplayDataArr.length = 0, this._relativeUrl && delete U.TEMPLET_DICTIONARY[this._relativeUrl], _get(_getPrototypeOf(U.prototype), "destroy", this).call(this), e.ILaya.loader.clearRes(this._skBufferUrl);
            }
        }, {
            key: "getAniNameByIndex",
            value: function getAniNameByIndex(t) {
                var e = this.getAnimation(t);
                return e ? e.name : null;
            }
        }, {
            key: "rate",
            get: function get() {
                return this._rate;
            },
            set: function set(t) {
                this._rate = t;
            }
        }]);
        return U;
    }(_);
    U.LAYA_ANIMATION_160_VISION = "LAYAANIMATION:1.6.0", U.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.7.0", i.Templet = U;
    var B = function(_e$Sprite2) {
        _inherits(B, _e$Sprite2);

        function B() {
            var _this5;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            _classCallCheck(this, B);
            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(B).call(this)), _this5._start = 0, _this5._Pos = 0, _this5._ended = !0, _this5._loadedImage = {}, _this5._endFrame = -1, _this5.interval = 30, _this5._ids = {}, _this5._idOfSprite = [], _this5._reset(), _this5._playing = !1, _this5._parentMovieClip = t, t ? (_this5._isRoot = !1, _this5._movieClipList = t._movieClipList, _this5._movieClipList.push(_assertThisInitialized(_this5))) : (_this5._movieClipList = [_assertThisInitialized(_this5)], _this5._isRoot = !0, _this5._setBitUp(e.Const.DISPLAY));
            return _this5;
        }
        _createClass(B, [{
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this._clear(), _get(_getPrototypeOf(B.prototype), "destroy", this).call(this, t);
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                _get(_getPrototypeOf(B.prototype), "_setDisplay", this).call(this, t), this._isRoot && this._onDisplay(t);
            }
        }, {
            key: "_onDisplay",
            value: function _onDisplay(t) {
                t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
            }
        }, {
            key: "updates",
            value: function updates() {
                var t, e;
                if (!this._parentMovieClip)
                    for (e = this._movieClipList.length, t = 0; t < e; t++) {
                        this._movieClipList[t] && this._movieClipList[t]._update();
                    }
            }
        }, {
            key: "addLabel",
            value: function addLabel(t, e) {
                this._labels || (this._labels = {}), this._labels[e] = t;
            }
        }, {
            key: "removeLabel",
            value: function removeLabel(t) {
                if (t) {
                    if (!this._labels)
                        for (var e in this._labels) {
                            if (this._labels[e] === t) {
                                delete this._labels[e];
                                break;
                            }
                        }
                } else this._labels = null;
            }
        }, {
            key: "_update",
            value: function _update() {
                if (this._data && this._playing) {
                    if (this._playIndex++, this._playIndex >= this._count) {
                        if (!this.loop) return this._playIndex--, void this.stop();
                        this._playIndex = 0;
                    }
                    if (this._parseFrame(this._playIndex), this._labels && this._labels[this._playIndex] && this.event(e.Event.LABEL, this._labels[this._playIndex]), -1 != this._endFrame && this._endFrame == this._playIndex) {
                        if (this._endFrame = -1, null != this._completeHandler) {
                            var t = this._completeHandler;
                            this._completeHandler = null, t.run();
                        }
                        this.stop();
                    }
                }
            }
        }, {
            key: "stop",
            value: function stop() {
                this._playing = !1;
            }
        }, {
            key: "gotoAndStop",
            value: function gotoAndStop(t) {
                this.index = t, this.stop();
            }
        }, {
            key: "_clear",
            value: function _clear() {
                if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                    var t, i;
                    for (this.timer.clear(this, this.updates), i = this._movieClipList.length, t = 0; t < i; t++) {
                        this._movieClipList[t] != this && this._movieClipList[t]._clear();
                    }
                    this._movieClipList.length = 0;
                }
                var a;
                for (a in this._atlasPath && e.ILaya.Loader.clearRes(this._atlasPath), this._loadedImage) {
                    this._loadedImage[a] && (e.ILaya.Loader.clearRes(a), this._loadedImage[a] = !1);
                }
                this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                this.loop = e, this._playing = !0, this._data && this._displayFrame(t);
            }
        }, {
            key: "_displayFrame",
            value: function _displayFrame() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1; - 1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
            }
        }, {
            key: "_reset",
            value: function _reset() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1, this._Pos = this._start;
            }
        }, {
            key: "_parseFrame",
            value: function _parseFrame(t) {
                var i, a, r, s, n, h, l = !1,
                    o = this._idOfSprite,
                    u = this._data;
                for (this._ended && this._reset(), u.pos = this._Pos, this._ended = !1, this._playIndex = t, this._curIndex > t && t < this._preIndex && (this._reset(!0), u.pos = this._Pos); this._curIndex <= t && !this._ended;) {
                    switch (u.getUint16()) {
                        case 12:
                            if (r = u.getUint16(), s = this._ids[u.getUint16()], this._Pos = u.pos, u.pos = s, 0 == (n = u.getUint8())) {
                                var _ = u.getUint16();
                                if (!(a = o[r])) {
                                    a = o[r] = new e.Sprite();
                                    var p = new e.Sprite();
                                    p.loadImage(this.basePath + _ + ".png"), this._loadedImage[this.basePath + _ + ".png"] = !0, a.addChild(p), p.size(u.getFloat32(), u.getFloat32());
                                    var d = u._getMatrix();
                                    p.transform = d;
                                }
                                a.alpha = 1;
                            } else 1 == n && ((i = o[r]) || (o[r] = i = new B(this), i.interval = this.interval, i._ids = this._ids, i.basePath = this.basePath, i._setData(u, s), i._initState(), i.play(0)), i.alpha = 1);
                            u.pos = this._Pos;
                            break;
                        case 3:
                            var c = o[u.getUint16()];
                            c && (this.addChild(c), c.zOrder = u.getUint16(), l = !0);
                            break;
                        case 4:
                            (c = o[u.getUint16()]) && c.removeSelf();
                            break;
                        case 5:
                            o[u.getUint16()][B._ValueList[u.getUint16()]] = u.getFloat32();
                            break;
                        case 6:
                            o[u.getUint16()].visible = u.getUint8() > 0;
                            break;
                        case 7:
                            var m = (a = o[u.getUint16()]).transform || e.Matrix.create();
                            m.setTo(u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32()), a.transform = m;
                            break;
                        case 8:
                            o[u.getUint16()].setPos(u.getFloat32(), u.getFloat32());
                            break;
                        case 9:
                            o[u.getUint16()].setSize(u.getFloat32(), u.getFloat32());
                            break;
                        case 10:
                            o[u.getUint16()].alpha = u.getFloat32();
                            break;
                        case 11:
                            o[u.getUint16()].setScale(u.getFloat32(), u.getFloat32());
                            break;
                        case 98:
                            h = u.getString(), this.event(h), "stop" == h && this.stop();
                            break;
                        case 99:
                            this._curIndex = u.getUint16(), l && this.updateZOrder();
                            break;
                        case 100:
                            this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event(e.Event.FRAME), this.event(e.Event.END), this.event(e.Event.COMPLETE)), this._reset(!1);
                    }
                }
                this._playing && !this._ended && this.event(e.Event.FRAME), this._Pos = u.pos;
            }
        }, {
            key: "_setData",
            value: function _setData(t, e) {
                this._data = t, this._start = e + 3;
            }
        }, {
            key: "load",
            value: function load(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r;
                this._url = t, i && (this._atlasPath = a || t.split(".swf")[0] + ".json"), this.stop(), this._clear(), this._movieClipList = [this], r = [{
                    url: t,
                    type: e.ILaya.Loader.BUFFER
                }], this._atlasPath && r.push({
                    url: this._atlasPath,
                    type: e.ILaya.Loader.ATLAS
                }), e.ILaya.loader.load(r, e.Handler.create(this, this._onLoaded));
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded() {
                var t;
                (t = e.ILaya.Loader.getRes(this._url)) ? !this._atlasPath || e.ILaya.Loader.getAtlas(this._atlasPath) ? (this.basePath = this._atlasPath ? e.ILaya.Loader.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", this._initData(t)) : this.event(e.Event.ERROR, "Atlas not find"): this.event(e.Event.ERROR, "file not find");
            }
        }, {
            key: "_initState",
            value: function _initState() {
                this._reset(), this._ended = !1;
                var t = this._playing;
                for (this._playing = !1, this._curIndex = 0; !this._ended;) {
                    this._parseFrame(++this._curIndex);
                }
                this._playing = t;
            }
        }, {
            key: "_initData",
            value: function _initData(t) {
                this._data = new e.Byte(t);
                var i, a = this._data.getUint16();
                for (i = 0; i < a; i++) {
                    this._ids[this._data.getInt16()] = this._data.getInt32();
                }
                this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), this._initState(), this.play(0), this.event(e.Event.LOADED), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
            }
        }, {
            key: "playTo",
            value: function playTo(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                this._completeHandler = i, this._endFrame = e, this.play(t, !1);
            }
        }, {
            key: "index",
            get: function get() {
                return this._playIndex;
            },
            set: function set(t) {
                this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event(e.Event.LABEL, this._labels[t]);
            }
        }, {
            key: "count",
            get: function get() {
                return this._count;
            }
        }, {
            key: "playing",
            get: function get() {
                return this._playing;
            }
        }, {
            key: "url",
            set: function set(t) {
                this.load(t);
            }
        }]);
        return B;
    }(e.Sprite);
    B._ValueList = ["x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha"], t.AnimationContent = a, t.AnimationNodeContent = r, t.AnimationParser01 = n, t.AnimationParser02 = h, t.AnimationPlayer = o, t.AnimationState = l, t.AnimationTemplet = _, t.BezierLerp = u, t.Bone = c, t.BoneSlot = g, t.DeformAniData = f, t.DeformSlotData = M, t.DeformSlotDisplayData = D, t.DrawOrderData = v, t.EventData = I, t.GraphicsAni = p, t.IAniLib = i, t.IkConstraint = A, t.IkConstraintData = S, t.KeyFramesContent = s, t.MeshData = x, t.MovieClip = B, t.PathConstraint = T, t.PathConstraintData = b, t.Skeleton = F, t.SkinData = w, t.SkinMeshForGraphic = y, t.SkinSlotDisplayData = k, t.SlotData = P, t.Templet = U, t.TfConstraint = C, t.TfConstraintData = L, t.Transform = d, t.UVTools = m;
}(window.Laya = window.Laya || {}, Laya);