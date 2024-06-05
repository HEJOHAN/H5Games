! function(o) {
    var r = {};

    function n(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
    }
    n.m = o, n.c = r, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "./dist/", n(n.s = 3)
}([function(e, t, o) {
    window,
    e.exports = function(o) {
        var r = {};

        function n(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
        }
        return n.m = o, n.c = r, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(o, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, o) {
        "use strict";
        o.r(t);
        var r, n = function(e, t) {
                for (var o in t) void 0 !== t[o] && null !== t[o] && (a(t[o]) ? (a(e[o]) || (e[o] = {}), n(e[o], t[o])) : s(t[o]) ? (s(e[o]) || (e[o] = []), n(e[o], t[o])) : e[o] = t[o])
            },
            a = function(e) {
                return "object" == typeof e && !s(e)
            },
            s = function(e) {
                return Array.isArray ? Array.isArray(e) : Array.prototype.isPrototypeOf(e)
            },
            i = function(t, o) {
                var r = !1;
                return function() {
                    if (!r) {
                        var e = arguments;
                        r = !0, t.apply(this, e), setTimeout(function() {
                            r = !1
                        }, o)
                    }
                }
            },
            x = function(t, o) {
                return y = function() {
                    return function(o, r) {
                        var n, a, s, e, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                            return this
                        }), e;

                        function t(t) {
                            return function(e) {
                                return function(t) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i;) try {
                                        if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                        switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                            case 0:
                                            case 1:
                                                s = t;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: t[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, a = t[1], t = [0];
                                                continue;
                                            case 7:
                                                t = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                    i.label = t[1];
                                                    break
                                                }
                                                if (6 === t[0] && i.label < s[1]) {
                                                    i.label = s[1], s = t;
                                                    break
                                                }
                                                if (s && i.label < s[2]) {
                                                    i.label = s[2], i.ops.push(t);
                                                    break
                                                }
                                                s[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        t = r.call(o, i)
                                    } catch (e) {
                                        t = [6, e], a = 0
                                    } finally {
                                        n = s = 0
                                    }
                                    if (5 & t[0]) throw t[1];
                                    return {
                                        value: t[0] ? t[1] : void 0,
                                        done: !0
                                    }
                                }([t, e])
                            }
                        }
                    }(this, function(e) {
                        return [2, new Promise(function(e) {
                            setTimeout(function() {
                                t(), e()
                            }, o)
                        })]
                    })
                }, new((i = s = a = void 0) || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                });
                var a, s, i, y
            },
            y = function(e, t, o) {
                return void 0 === t && (t = 0), void 0 === o && (o = 1), t + (e = (9301 * e + 49297) % 233280) / 233280 * (o - t)
            },
            c = function(a, s, i, y) {
                return new(i || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                })
            },
            d = function(o, r) {
                var n, a, s, e, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, a = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            i.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && i.label < s[1]) {
                                            i.label = s[1], s = t;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2], i.ops.push(t);
                                            break
                                        }
                                        s[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                t = r.call(o, i)
                            } catch (e) {
                                t = [6, e], a = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            };
        (r || (r = {})).GP = "game_play";
        var l, u, p = function() {
                return (p = Object.assign || function(e) {
                    for (var t, o = 1, r = arguments.length; o < r; o++)
                        for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            },
            h = function(a, s, i, y) {
                return new(i || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                })
            },
            f = function(o, r) {
                var n, a, s, e, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, a = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            i.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && i.label < s[1]) {
                                            i.label = s[1], s = t;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2], i.ops.push(t);
                                            break
                                        }
                                        s[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                t = r.call(o, i)
                            } catch (e) {
                                t = [6, e], a = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            },
            m = function(a, s, i, y) {
                return new(i || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                })
            },
            g = function(o, r) {
                var n, a, s, e, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, a = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            i.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && i.label < s[1]) {
                                            i.label = s[1], s = t;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2], i.ops.push(t);
                                            break
                                        }
                                        s[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                t = r.call(o, i)
                            } catch (e) {
                                t = [6, e], a = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            },
            _ = function() {
                function e(e, t) {
                    this._iadLoadCount = 0, this._iadCount = 0, this._loadingIAD = !1, this._isSupportIAD = !1, this._radLoadCount = 0, this._radCount = 0, this._loadingRAD = !1, this._isSupportRAD = !1, this._language = t.language || "", this._iadCodes = [e.iadHigh, e.iadLow, e.iadAny], this._radCodes = [e.radHigh, e.radLow, e.radAny], this.isSupportRAD(!0) ? (console.log("support rad"), this.preloadRAD()) : console.log("not support rad"), this.isSupportIAD(!0) ? (console.log("support iad"), this.preloadIAD()) : console.log("not support iad")
                }
                return e.prototype.isSupportRAD = function(e) {
                    return true;
                    if (void 0 === e && (e = !1), e) {
                        var t = FBInstant.getSupportedAPIs();
                        this._isSupportRAD = 0 <= t.indexOf("getRewardedVideoAsync")
                    }
                    return this._isSupportRAD
                }, e.prototype.isSupportIAD = function(e) {
                    return false;
                    if (void 0 === e && (e = !1), e) {
                        var t = FBInstant.getSupportedAPIs();
                        this._isSupportIAD = 0 <= t.indexOf("getInterstitialAdAsync")
                    }
                    return this._isSupportIAD
                }, e.prototype.hasIAD = function() {
                    return !!this._intersitialAd || (this.isSupportIAD() && !this._loadingIAD && this.preloadIAD(), !1)
                }, e.prototype.hasRAD = function() {
                    return window.adSDK.HasAd();
                }, e.prototype.showIAD = function() {
                    return m(this, void 0, void 0, function() {
                        var t;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return (t = this._intersitialAd) ? (this._intersitialAd = null, [4, t.showAsync()]) : (!this._loadingIAD && this.preloadIAD(), [2]);
                                case 1:
                                    return e.sent(), this.preloadIAD(), u.dydlog("ad_watch", {
                                        type: "iad",
                                        count: ++this._iadCount,
                                        level: t.__level,
                                        lang: this._language
                                    }), [2]
                            }
                        })
                    })
                }, e.prototype.preloadIAD = function(s) {
                    return void 0 === s && (s = 0), m(this, void 0, void 0, function() {
                        var t, o, r, n, a;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    this._loadingIAD = !0, o = (t = this)._iadCodes[s % this._iadCodes.length], e.label = 1;
                                case 1:
                                    return e.trys.push([1, 4, , 5]), [4, FBInstant.getInterstitialAdAsync(o)];
                                case 2:
                                    return [4, (r = e.sent()).loadAsync()];
                                case 3:
                                    return e.sent(), this._intersitialAd = r, this._intersitialAd.__level = s % this._iadCodes.length, this._loadingIAD = !1, [3, 5];
                                case 4:
                                    return n = e.sent(), u.dydlog("ad_error", {
                                        type: "iad",
                                        level: s % this._iadCodes.length,
                                        code: n.code,
                                        lang: this._language,
                                        count: this._iadLoadCount
                                    }), console.log(n.code), a = 1e3, "ADS_FREQUENT_LOAD" === n.code ? a = 12e4 : "ADS_TOO_MANY_INSTANCES" === n.code && (a = 6e5), x(this.preloadIAD.bind(t, s + 1), a), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.showRAD = function() {
                    return m(this, void 0, void 0, function() {
                        var t;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return (t = this._rewardVideo) || true ? (this._rewardVideo = null, [4, window.adSDK.showRewardedVideo()]) : (!this._loadingRAD && this.preloadRAD(), [2]);
                                case 1:
                                    return e.sent(), this.preloadRAD(), u.dydlog("ad_watch", {
                                        type: "rad",
                                        count: ++this._radCount,
                                        level: t.__level,
                                        lang: this._language
                                    }), [2]
                            }
                        })
                    })
                }, e.prototype.preloadRAD = function(s) {
                    return void 0 === s && (s = 0), m(this, void 0, void 0, function() {
                        var t, o, r, n, a;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    this._loadingRAD = !0, o = (t = this)._radCodes[s % this._radCodes.length], e.label = 1;
                                case 1:
                                    return e.trys.push([1, 4, , 5]), [4, FBInstant.getRewardedVideoAsync(o)];
                                case 2:
                                    return [4, (r = e.sent()).loadAsync()];
                                case 3:
                                    return e.sent(), this._rewardVideo = r, this._rewardVideo.__level = s % this._radCodes.length, this._loadingRAD = !1, [3, 5];
                                case 4:
                                    return n = e.sent(), u.dydlog("ad_error", {
                                        type: "rad",
                                        level: s % this._radCodes.length,
                                        code: n.code,
                                        lang: this._language,
                                        count: this._radLoadCount
                                    }), console.log(n.code), a = 1e3, "ADS_FREQUENT_LOAD" === n.code ? a = 12e4 : "ADS_TOO_MANY_INSTANCES" === n.code && (a = 6e5), x(this.preloadRAD.bind(t, s + 1), a), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e
            }(),
            v = (l = function(e, t) {
                return (l = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                l(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            b = function(a, s, i, y) {
                return new(i || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                })
            },
            I = function(o, r) {
                var n, a, s, e, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, a = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            i.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && i.label < s[1]) {
                                            i.label = s[1], s = t;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2], i.ops.push(t);
                                            break
                                        }
                                        s[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                t = r.call(o, i)
                            } catch (e) {
                                t = [6, e], a = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            };
        ! function(n) {
            var e = this;
            n.reportMsg = function(e, t, o) {
                var r, n, a;
                r = e, n = t, a = o, FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                    var t = [];
                    e.forEach(function(e) {
                        t.push(e.getID())
                    });
                    var o = {
                        nickname: FBInstant.player.getName(),
                        friends: t,
                        playerInfo: {
                            head: FBInstant.player.getPhoto(),
                            lang: FBInstant.getLocale(),
                            tz: (new Date).getTimezoneOffset() / 60 * -1,
                            score: n
                        }
                    };
                    FBInstant.setSessionData(o)
                }), r && a.fromAppId && (new Laya.HttpRequest).send("https://fb-api.capjoy.com/fbapi/v0/ads/report/" + a.fromAppId + "/" + a.APPID + "/" + FBInstant.player.getID(), "v=" + a.gameVersion, "post"), r && a.entryType && "user_msg" === a.entryType && a.fromUserId && a.fromUserId !== FBInstant.player.getID() && (new Laya.HttpRequest).send("https://fb-api.capjoy.com/api/game/v0/shareUpdate_" + a.GAMEID, "playerId=" + FBInstant.player.getID() + "&sharePlayerId=" + a.fromUserId + "&type=share", "post")
            }, n.getRankData = function(t, o, r) {
                return b(e, void 0, void 0, function() {
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (a = t, s = o, i = r, h(void 0, void 0, void 0, function() {
                                    var r, n, t, o;
                                    return f(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                r = [], e.label = 1;
                                            case 1:
                                                return e.trys.push([1, 6, , 7]), [4, FBInstant.getLeaderboardAsync(a)];
                                            case 2:
                                                return [4, (t = e.sent()).getConnectedPlayerEntriesAsync(s, i)];
                                            case 3:
                                                return (e.sent() || []).forEach(function(e) {
                                                    var t = e.getPlayer(),
                                                        o = {
                                                            id: t.getID(),
                                                            name: t.getName(),
                                                            photo: t.getPhoto(),
                                                            rank: e.getRank(),
                                                            score: e.getScore(),
                                                            ext: e.getExtraData()
                                                        };
                                                    r.push(o), o.id === FBInstant.player.getID() && (n = p({}, o))
                                                }), n ? [3, 5] : [4, t.getPlayerEntryAsync()];
                                            case 4:
                                                o = e.sent(), n = o ? {
                                                    id: o.getPlayer().getID(),
                                                    name: o.getPlayer().getName(),
                                                    photo: o.getPlayer().getPhoto(),
                                                    rank: o.getRank(),
                                                    score: o.getScore(),
                                                    ext: o.getExtraData()
                                                } : {
                                                    id: FBInstant.player.getID(),
                                                    name: FBInstant.player.getName(),
                                                    photo: FBInstant.player.getPhoto(),
                                                    rank: r.length + 1,
                                                    score: 0,
                                                    ext: ""
                                                }, e.label = 5;
                                            case 5:
                                                return [3, 7];
                                            case 6:
                                                return e.sent(), n = {
                                                    id: FBInstant.player.getID(),
                                                    name: FBInstant.player.getName(),
                                                    photo: FBInstant.player.getPhoto(),
                                                    rank: 1,
                                                    score: 0,
                                                    ext: ""
                                                }, r.length ? r.push(n) : r = [n], [3, 7];
                                            case 7:
                                                return [2, {
                                                    rankInfos: r,
                                                    myselfInfo: n
                                                }]
                                        }
                                    })
                                }))];
                            case 1:
                                return [2, e.sent()]
                        }
                        var a, s, i
                    })
                })
            }, n.updateLeaderboard = function(n, a, s) {
                return void 0 === s && (s = ""), b(e, void 0, void 0, function() {
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (t = n, o = a, r = s, void 0 === r && (r = ""), h(void 0, void 0, void 0, function() {
                                    return f(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 2, , 3]), [4, FBInstant.getLeaderboardAsync(t)];
                                            case 1:
                                                return [2, e.sent().setScoreAsync(o, r)];
                                            case 2:
                                                return e.sent(), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                }))];
                            case 1:
                                return e.sent(), [2]
                        }
                        var t, o, r
                    })
                })
            }, n.getInvitedFriendsCount = function(t) {
                return b(e, void 0, void 0, function() {
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (o = t, c(void 0, void 0, void 0, function() {
                                    var t = this;
                                    return d(this, function(e) {
                                        return [2, new Promise(function(r, n) {
                                            var e = new Laya.HttpRequest;
                                            e.once(Laya.Event.COMPLETE, t, function(e) {
                                                var t = JSON.parse(e);
                                                if (0 === t.error)
                                                    if ("string" == typeof t.data.count) try {
                                                        var o = parseInt(t.data.count);
                                                        r(o)
                                                    } catch (e) {
                                                        r(0)
                                                    } else r(t.data.count);
                                                    else n({
                                                        code: "GET_INVITED_FRIENDS_ERROR",
                                                        msg: "Error: Get invited friends Count"
                                                    })
                                            }), e.once(Laya.Event.ERROR, t, function() {
                                                n({
                                                    code: "GET_INVITED_FRIENDS_ERROR",
                                                    msg: "Error: Get invited friends Count"
                                                })
                                            }), e.send("https://fb-api.capjoy.com/api/game/v0/shareGet_" + o, "playerId=" + FBInstant.player.getID() + "&type=share", "post", "text")
                                        })]
                                    })
                                }))];
                            case 1:
                                return [2, e.sent()]
                        }
                        var o
                    })
                })
            }, n.getRecommendGames = function(t) {
                return b(e, void 0, void 0, function() {
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (o = t, c(void 0, void 0, void 0, function() {
                                    var t = this;
                                    return d(this, function(e) {
                                        return [2, new Promise(function(r, n) {
                                            var e = new Laya.HttpRequest;
                                            e.once(Laya.Event.COMPLETE, t, function(e) {
                                                var t = JSON.parse(e);
                                                if (0 === t.error)
                                                    if (t.data && t.data.ads.length) {
                                                        var o = t.data.ads[0];
                                                        r({
                                                            appId: o.appId,
                                                            breathType: o.breathType,
                                                            icon: o.icon
                                                        })
                                                    } else r(null);
                                                else n({
                                                    code: "GET_RECOMMEND_GAMES_ERROR",
                                                    msg: "Error: Get recommend games"
                                                })
                                            }), e.once(Laya.Event.ERROR, t, function() {
                                                n({
                                                    code: "GET_RECOMMEND_GAMES_ERROR",
                                                    msg: "Error: Get recommend games"
                                                })
                                            }), e.send("https://fb-api.capjoy.com/fbapi/v0/getRecommendGames", "playerId=" + FBInstant.player.getID() + "&nickname=" + FBInstant.player.getName() + "&appId=" + o + "&locale=" + FBInstant.getLocale() + "&timezoneOffset=" + (new Date).getTimezoneOffset() + "&deviceOS=" + FBInstant.getPlatform(), "post", "text")
                                        })]
                                    })
                                }))];
                            case 1:
                                return [2, e.sent()]
                        }
                        var o
                    })
                })
            }, n.dydlog = function(e, t, o, r) {
                void 0 === t && (t = {}), void 0 === o && (o = "1.0.0"), void 0 === r && (r = 1), (t = t || {})._appVersion = o, t._nickname = ""
            }, n.updateLeaderboardAsync = function(t, o) {
                return b(e, void 0, void 0, function() {
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, FBInstant.updateAsync({
                                    action: "LEADERBOARD",
                                    name: t,
                                    text: o
                                })];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                throw e.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }, n.subscribeBot = function() {
                return b(e, void 0, void 0, function() {
                    var t, o, r;
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, FBInstant.player.canSubscribeBotAsync()];
                            case 2:
                                return t = !!e.sent(), [3, 4];
                            case 3:
                                return e.sent(), t = !1, [3, 4];
                            case 4:
                                if (!t) return console.log("can not subscribe bot"), [2];
                                n.dydlog("bot_subscribe", {
                                    result: -1
                                }), o = {
                                    res: !0,
                                    code: ""
                                }, e.label = 5;
                            case 5:
                                return e.trys.push([5, 7, , 8]), [4, FBInstant.player.subscribeBotAsync()];
                            case 6:
                                return e.sent(), [3, 8];
                            case 7:
                                return r = e.sent(), o = {
                                    res: !1,
                                    code: r.code
                                }, [3, 8];
                            case 8:
                                return console.log("subscribe result", o.res, o.code), o.res ? n.dydlog("bot_subscribe", {
                                    result: 1
                                }) : n.dydlog("bot_subscribe", {
                                    result: 0,
                                    code: o.code
                                }), [2, o]
                        }
                    })
                })
            }, n.addShortCut = function(r) {
                return b(e, void 0, void 0, function() {
                    var t, o;
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, FBInstant.canCreateShortcutAsync()];
                            case 2:
                                return t = !!e.sent(), [3, 4];
                            case 3:
                                return e.sent(), t = !1, [3, 4];
                            case 4:
                                return t ? (n.dydlog("add_home_screen", {
                                    type: r,
                                    result: -1
                                }), [4, a()]) : (console.log("can not add shortcut"), [2, {
                                    res: !1,
                                    code: ""
                                }]);
                            case 5:
                                return (o = e.sent()).res ? n.dydlog("add_home_screen", {
                                    type: r,
                                    result: 1
                                }) : n.dydlog("add_home_screen", {
                                    type: r,
                                    result: 0,
                                    code: o.code
                                }), [2, o]
                        }
                    })
                })
            };
            var a = function() {
                return b(e, void 0, void 0, function() {
                    var t, o;
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = {
                                    res: !0,
                                    code: ""
                                }, e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, FBInstant.createShortcutAsync()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return o = e.sent(), console.log("add 2 Home Screen result", JSON.stringify(o)), t.res = !1, t.code = o.code || "", [3, 4];
                            case 4:
                                return [2, t]
                        }
                    })
                })
            };
            n.getConnectedPlayersAsync = function() {
                return b(e, void 0, void 0, function() {
                    var t;
                    return I(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = [], e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, FBInstant.player.getConnectedPlayersAsync()];
                            case 2:
                                return e.sent().forEach(function(e) {
                                    t.push({
                                        id: e.getID(),
                                        name: e.getName(),
                                        photo: e.getPhoto()
                                    })
                                }), [3, 4];
                            case 3:
                                return e.sent(), t = [], [3, 4];
                            case 4:
                                return [2, t]
                        }
                    })
                })
            };
            var t = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return v(t, e), t
            }(_);
            n.Ad = t
        }(u || (u = {}));
        var w, R, O = function() {
                function e(e) {
                    this._isDevMode = e, this._isDevMode && (this._txt = new Laya.Text, this._txt.width = 320, this._txt.height = 40, this._txt.fontSize = 40, this._txt.bgColor = "#333333", this._txt.color = "#cccccc", this._txt.align = "center", this._txt.valign = "middle", this._txt.x = Laya.stage.width - this._txt.width >> 1, this._txt.y = Laya.stage.height - this._txt.height >> 1, Laya.stage.addChild(this._txt))
                }
                return e.prototype.updateProgress = function(e) {
                    var t = Math.round(100 * e);
                    this._isDevMode ? this._txt.text = t + " %" : window.fbProgress = t
                }, e.prototype.dispose = function() {
                    this._txt && Laya.stage.removeChild(this._txt)
                }, e
            }(),
            T = (R = function(e, t) {
                return (R = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                R(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        ! function(e) {
            var t = this,
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return T(t, e), t
                }(O);
            e.FBLoadingNotice = o, e.createLayaImageByName = function(e) {
                var t = new Laya.Image;
                return t.skin = e, t
            }, e.toast = function(e, t, o, r, n) {
                void 0 === o && (o = 0), void 0 === r && (r = 0), void 0 === n && (n = 24);
                var a = new Laya.Text;
                a.color = "#ffffff", a.font = t, a.fontSize = n, a.align = "center", a.valign = "middle", a.text = e, a.bold = !1, a.size(.7 * Laya.stage.width, a.textHeight).pos(20, 10);
                var s = a.width + 40,
                    i = a.height + 20,
                    y = [
                        ["moveTo", 16, 0],
                        ["arcTo", s, 0, s, 16, 16],
                        ["arcTo", s, i, s - 16, i, 16],
                        ["arcTo", 0, i, 0, i - 16, 16],
                        ["arcTo", 0, 0, 16, 0, 16]
                    ],
                    c = new Laya.Sprite;
                c.graphics.drawPath(0, 0, y, {
                    fillStyle: "#333333"
                }), c.size(s, i).pos(.5 * (Laya.stage.width - c.width) + o, .5 * (Laya.stage.height - c.height) + r), c.addChild(a), Laya.stage.addChild(c), x(function() {
                    Laya.Tween.to(c, {
                        alpha: 0
                    }, 200, Laya.Ease.linearNone, Laya.Handler.create(null, function() {
                        Laya.stage.removeChild(c)
                    }))
                }, 3e3)
            }, e.generateImage = function(o) {
                return a = t, y = function() {
                    var t;
                    return function(o, r) {
                        var n, a, s, e, i = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                            return this
                        }), e;

                        function t(t) {
                            return function(e) {
                                return function(t) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i;) try {
                                        if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                                        switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                            case 0:
                                            case 1:
                                                s = t;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: t[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, a = t[1], t = [0];
                                                continue;
                                            case 7:
                                                t = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                                    i.label = t[1];
                                                    break
                                                }
                                                if (6 === t[0] && i.label < s[1]) {
                                                    i.label = s[1], s = t;
                                                    break
                                                }
                                                if (s && i.label < s[2]) {
                                                    i.label = s[2], i.ops.push(t);
                                                    break
                                                }
                                                s[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        t = r.call(o, i)
                                    } catch (e) {
                                        t = [6, e], a = 0
                                    } finally {
                                        n = s = 0
                                    }
                                    if (5 & t[0]) throw t[1];
                                    return {
                                        value: t[0] ? t[1] : void 0,
                                        done: !0
                                    }
                                }([t, e])
                            }
                        }
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, new Promise(function(t) {
                                    Laya.stage.addChildAt(o, 0), Laya.timer.frameOnce(2, null, function() {
                                        var e = o.drawToCanvas(o.width, o.height, 0, 0);
                                        o.removeSelf(), t(e)
                                    })
                                })];
                            case 1:
                                return t = e.sent(), [2, new Promise(function(e) {
                                    e(t.toBase64("image/png", .92))
                                })]
                        }
                    })
                }, new((i = s = void 0) || (i = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            n(y.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            n(y.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(t) {
                        t.done ? e(t.value) : new i(function(e) {
                            e(t.value)
                        }).then(o, r)
                    }
                    n((y = y.apply(a, s || [])).next())
                });
                var a, s, i, y
            }, e.loadTextureByUrl = function(t) {
                return new Promise(function(e) {
                    Laya.loader.load(t, Laya.Handler.create(null, function() {
                        e(Laya.loader.getRes(t))
                    }))
                })
            }
        }(w || (w = {})), o.d(t, "deepClone", function() {
            return n
        }), o.d(t, "isObject", function() {
            return a
        }), o.d(t, "isArray", function() {
            return s
        }), o.d(t, "throttle", function() {
            return i
        }), o.d(t, "delayExec", function() {
            return x
        }), o.d(t, "seedRandom", function() {
            return y
        }), o.d(t, "FBTool", function() {
            return u
        }), o.d(t, "LayaTool", function() {
            return w
        })
    }])
}, function(e, xo, lo) {
    "use strict";
    (function(e) {
        lo.d(xo, "b", function() {
            return Le
        }), lo.d(xo, "a", function() {
            return oe
        }), lo.d(xo, "c", function() {
            return to
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0
        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.
        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
        };

        function o(e, t) {
            function o() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }
        var n = function() {
                function e(e) {
                    void 0 === e && (e = "Atom@" + je()), this.name = e, this.isPendingUnobservation = !0, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = ht.NOT_TRACKING
                }
                return e.prototype.onBecomeUnobserved = function() {}, e.prototype.reportObserved = function() {
                    Et(this)
                }, e.prototype.reportChanged = function() {
                    Lt(),
                        function(e) {
                            if (e.lowestObserverState === ht.STALE) return;
                            e.lowestObserverState = ht.STALE;
                            var t = e.observers,
                                o = t.length;
                            for (; o--;) {
                                var r = t[o];
                                r.dependenciesState === ht.UP_TO_DATE && r.onBecomeStale(), r.dependenciesState = ht.STALE
                            }
                        }(this), Ct()
                }, e.prototype.toString = function() {
                    return this.name
                }, e
            }(),
            t = function(n) {
                function e(e, t, o) {
                    void 0 === e && (e = "Atom@" + je()), void 0 === t && (t = Ye), void 0 === o && (o = Ye);
                    var r = n.call(this, e) || this;
                    return r.name = e, r.onBecomeObservedHandler = t, r.onBecomeUnobservedHandler = o, r.isPendingUnobservation = !1, r.isBeingTracked = !1, r
                }
                return o(e, n), e.prototype.reportObserved = function() {
                    return Lt(), n.prototype.reportObserved.call(this), this.isBeingTracked || (this.isBeingTracked = !0, this.onBecomeObservedHandler()), Ct(), !!_t.trackingDerivation
                }, e.prototype.onBecomeUnobserved = function() {
                    this.isBeingTracked = !1, this.onBecomeUnobservedHandler()
                }, e
            }(n),
            a = yt("Atom", n);

        function y(e) {
            return e.interceptors && 0 < e.interceptors.length
        }

        function s(e, t) {
            var o = e.interceptors || (e.interceptors = []);
            return o.push(t), Ge(function() {
                var e = o.indexOf(t); - 1 !== e && o.splice(e, 1)
            })
        }

        function c(e, t) {
            var o = kt();
            try {
                var r = e.interceptors;
                if (r)
                    for (var n = 0, a = r.length; n < a && (ze(!(t = r[n](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); n++);
                return t
            } finally {
                Vt(o)
            }
        }

        function x(e) {
            return e.changeListeners && 0 < e.changeListeners.length
        }

        function i(e, t) {
            var o = e.changeListeners || (e.changeListeners = []);
            return o.push(t), Ge(function() {
                var e = o.indexOf(t); - 1 !== e && o.splice(e, 1)
            })
        }

        function d(e, t) {
            var o = kt(),
                r = e.changeListeners;
            if (r) {
                for (var n = 0, a = (r = r.slice()).length; n < a; n++) r[n](t);
                Vt(o)
            }
        }

        function l() {
            return !!_t.spyListeners.length
        }

        function u(e) {
            if (_t.spyListeners.length)
                for (var t = _t.spyListeners, o = 0, r = t.length; o < r; o++) t[o](e)
        }

        function p(e) {
            u(Qe({}, e, {
                spyReportStart: !0
            }))
        }
        var h = {
            spyReportEnd: !0
        };

        function f(e) {
            u(e ? Qe({}, e, h) : h)
        }

        function m(t) {
            return _t.spyListeners.push(t), Ge(function() {
                var e = _t.spyListeners.indexOf(t); - 1 !== e && _t.spyListeners.splice(e, 1)
            })
        }
        var g = "__$$iterating";

        function _(e) {
            ze(!0 !== e[g], "Illegal state: cannot recycle array as iterator"), rt(e, g, !0);
            var t = -1;
            return rt(e, "next", function() {
                return {
                    done: ++t >= this.length,
                    value: t < this.length ? this[t] : void 0
                }
            }), e
        }

        function v(e, t) {
            rt(e, "function" == typeof Symbol && Symbol.iterator || "@@iterator", t)
        }
        var b, I, w, R, O = (b = !1, I = {}, Object.defineProperty(I, "0", {
                set: function() {
                    b = !0
                }
            }), !(Object.create(I)[0] = 1) === b),
            T = 0,
            L = function() {};
        w = L, R = Array.prototype, void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(w.prototype, R) : void 0 !== w.prototype.__proto__ ? w.prototype.__proto__ = R : w.prototype = R, Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function(e) {
            Object.defineProperty(L.prototype, e, {
                configurable: !0,
                writable: !0,
                value: Array.prototype[e]
            })
        });
        var C = function() {
                function e(o, r, e, t) {
                    this.array = e, this.owned = t, this.values = [], this.lastKnownLength = 0, this.interceptors = null, this.changeListeners = null, this.atom = new n(o || "ObservableArray@" + je()), this.enhancer = function(e, t) {
                        return r(e, t, o + "[..]")
                    }
                }
                return e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.dehanceValues = function(e) {
                    return void 0 !== this.dehancer ? e.map(this.dehancer) : e
                }, e.prototype.intercept = function(e) {
                    return s(this, e)
                }, e.prototype.observe = function(e, t) {
                    return void 0 === t && (t = !1), t && e({
                        object: this.array,
                        type: "splice",
                        index: 0,
                        added: this.values.slice(),
                        addedCount: this.values.length,
                        removed: [],
                        removedCount: 0
                    }), i(this, e)
                }, e.prototype.getArrayLength = function() {
                    return this.atom.reportObserved(), this.values.length
                }, e.prototype.setArrayLength = function(e) {
                    if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
                    var t = this.values.length;
                    if (e !== t)
                        if (t < e) {
                            for (var o = new Array(e - t), r = 0; r < e - t; r++) o[r] = void 0;
                            this.spliceWithArray(t, 0, o)
                        } else this.spliceWithArray(e, t - e)
                }, e.prototype.updateArrayLength = function(e, t) {
                    if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                    this.lastKnownLength += t, 0 < t && T < e + t + 1 && B(e + t + 1)
                }, e.prototype.spliceWithArray = function(e, t, o) {
                    var r = this;
                    Pt(this.atom);
                    var n = this.values.length;
                    if (void 0 === e ? e = 0 : n < e ? e = n : e < 0 && (e = Math.max(0, n + e)), t = 1 === arguments.length ? n - e : null == t ? 0 : Math.max(0, Math.min(t, n - e)), void 0 === o && (o = []), y(this)) {
                        var a = c(this, {
                            object: this.array,
                            type: "splice",
                            index: e,
                            removedCount: t,
                            added: o
                        });
                        if (!a) return Me;
                        t = a.removedCount, o = a.added
                    }
                    var s = (o = o.map(function(e) {
                        return r.enhancer(e, void 0)
                    })).length - t;
                    this.updateArrayLength(n, s);
                    var i = this.spliceItemsIntoValues(e, t, o);
                    return 0 === t && 0 === o.length || this.notifyArraySplice(e, o, i), this.dehanceValues(i)
                }, e.prototype.spliceItemsIntoValues = function(e, t, o) {
                    if (o.length < 1e4) return (r = this.values).splice.apply(r, [e, t].concat(o));
                    var r, n = this.values.slice(e, e + t);
                    return this.values = this.values.slice(0, e).concat(o, this.values.slice(e + t)), n
                }, e.prototype.notifyArrayChildUpdate = function(e, t, o) {
                    var r = !this.owned && l(),
                        n = x(this),
                        a = n || r ? {
                            object: this.array,
                            type: "update",
                            index: e,
                            newValue: t,
                            oldValue: o
                        } : null;
                    r && p(a), this.atom.reportChanged(), n && d(this, a), r && f()
                }, e.prototype.notifyArraySplice = function(e, t, o) {
                    var r = !this.owned && l(),
                        n = x(this),
                        a = n || r ? {
                            object: this.array,
                            type: "splice",
                            index: e,
                            removed: o,
                            added: t,
                            removedCount: o.length,
                            addedCount: t.length
                        } : null;
                    r && p(a), this.atom.reportChanged(), n && d(this, a), r && f()
                }, e
            }(),
            E = function(s) {
                function e(e, t, o, r) {
                    void 0 === o && (o = "ObservableArray@" + je()), void 0 === r && (r = !1);
                    var n = s.call(this) || this,
                        a = new C(o, t, n, r);
                    return rt(n, "$mobx", a), e && e.length && n.spliceWithArray(0, 0, e), O && Object.defineProperty(a.array, "0", D), n
                }
                return o(e, s), e.prototype.intercept = function(e) {
                    return this.$mobx.intercept(e)
                }, e.prototype.observe = function(e, t) {
                    return void 0 === t && (t = !1), this.$mobx.observe(e, t)
                }, e.prototype.clear = function() {
                    return this.splice(0)
                }, e.prototype.concat = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), e.map(function(e) {
                        return P(e) ? e.peek() : e
                    }))
                }, e.prototype.replace = function(e) {
                    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, e)
                }, e.prototype.toJS = function() {
                    return this.slice()
                }, e.prototype.toJSON = function() {
                    return this.toJS()
                }, e.prototype.peek = function() {
                    return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values)
                }, e.prototype.find = function(e, t, o) {
                    void 0 === o && (o = 0);
                    var r = this.findIndex.apply(this, arguments);
                    return -1 === r ? void 0 : this.get(r)
                }, e.prototype.findIndex = function(e, t, o) {
                    void 0 === o && (o = 0);
                    for (var r = this.peek(), n = r.length, a = o; a < n; a++)
                        if (e.call(t, r[a], a, this)) return a;
                    return -1
                }, e.prototype.splice = function(e, t) {
                    for (var o = [], r = 2; r < arguments.length; r++) o[r - 2] = arguments[r];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return this.$mobx.spliceWithArray(e);
                        case 2:
                            return this.$mobx.spliceWithArray(e, t)
                    }
                    return this.$mobx.spliceWithArray(e, t, o)
                }, e.prototype.spliceWithArray = function(e, t, o) {
                    return this.$mobx.spliceWithArray(e, t, o)
                }, e.prototype.push = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var o = this.$mobx;
                    return o.spliceWithArray(o.values.length, 0, e), o.values.length
                }, e.prototype.pop = function() {
                    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
                }, e.prototype.shift = function() {
                    return this.splice(0, 1)[0]
                }, e.prototype.unshift = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var o = this.$mobx;
                    return o.spliceWithArray(0, 0, e), o.values.length
                }, e.prototype.reverse = function() {
                    var e = this.slice();
                    return e.reverse.apply(e, arguments)
                }, e.prototype.sort = function(e) {
                    var t = this.slice();
                    return t.sort.apply(t, arguments)
                }, e.prototype.remove = function(e) {
                    var t = this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);
                    return -1 < t && (this.splice(t, 1), !0)
                }, e.prototype.move = function(e, t) {
                    function o(e) {
                        if (e < 0) throw new Error("[mobx.array] Index out of bounds: " + e + " is negative");
                        var t = this.$mobx.values.length;
                        if (t <= e) throw new Error("[mobx.array] Index out of bounds: " + e + " is not smaller than " + t)
                    }
                    if (o.call(this, e), o.call(this, t), e !== t) {
                        var r, n = this.$mobx.values;
                        r = e < t ? n.slice(0, e).concat(n.slice(e + 1, t + 1), [n[e]], n.slice(t + 1)) : n.slice(0, t).concat([n[e]], n.slice(t, e), n.slice(e + 1)), this.replace(r)
                    }
                }, e.prototype.get = function(e) {
                    var t = this.$mobx;
                    if (t) {
                        if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                        console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                    }
                }, e.prototype.set = function(e, t) {
                    var o = this.$mobx,
                        r = o.values;
                    if (e < r.length) {
                        Pt(o.atom);
                        var n = r[e];
                        if (y(o)) {
                            var a = c(o, {
                                type: "update",
                                object: this,
                                index: e,
                                newValue: t
                            });
                            if (!a) return;
                            t = a.newValue
                        }(t = o.enhancer(t, n)) !== n && (r[e] = t, o.notifyArrayChildUpdate(e, t, n))
                    } else {
                        if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
                        o.spliceWithArray(e, 0, [t])
                    }
                }, e
            }(L);
        v(E.prototype, function() {
                return _(this.slice())
            }), Object.defineProperty(E.prototype, "length", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return this.$mobx.getArrayLength()
                },
                set: function(e) {
                    this.$mobx.setArrayLength(e)
                }
            }), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function(e) {
                var t = Array.prototype[e];
                ze("function" == typeof t, "Base function not defined on Array prototype: '" + e + "'"), ot(E.prototype, e, function() {
                    return t.apply(this.peek(), arguments)
                })
            }),
            function(e, t) {
                for (var o = 0; o < t.length; o++) ot(e, t[o], e[t[o]])
            }(E.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
        var D = A(0);

        function A(t) {
            return {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return this.get(t)
                },
                set: function(e) {
                    this.set(t, e)
                }
            }
        }

        function B(e) {
            for (var t = T; t < e; t++) o = t, Object.defineProperty(E.prototype, "" + o, A(o));
            var o;
            T = e
        }
        B(1e3);
        var S = yt("ObservableArrayAdministration", C);

        function P(e) {
            return Je(e) && S(e.$mobx)
        }
        var W = {},
            N = function(a) {
                function e(e, t, o, r) {
                    void 0 === o && (o = "ObservableValue@" + je()), void 0 === r && (r = !0);
                    var n = a.call(this, o) || this;
                    return n.enhancer = t, n.hasUnreportedChange = !1, n.dehancer = void 0, n.value = t(e, void 0, o), r && l() && u({
                        type: "create",
                        object: n,
                        newValue: n.value
                    }), n
                }
                return o(e, a), e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.set = function(e) {
                    var t = this.value;
                    if ((e = this.prepareNewValue(e)) !== W) {
                        var o = l();
                        o && p({
                            type: "update",
                            object: this,
                            newValue: e,
                            oldValue: t
                        }), this.setNewValue(e), o && f()
                    }
                }, e.prototype.prepareNewValue = function(e) {
                    if (Pt(this), y(this)) {
                        var t = c(this, {
                            object: this,
                            type: "update",
                            newValue: e
                        });
                        if (!t) return W;
                        e = t.newValue
                    }
                    return e = this.enhancer(e, this.value, this.name), this.value !== e ? e : W
                }, e.prototype.setNewValue = function(e) {
                    var t = this.value;
                    this.value = e, this.reportChanged(), x(this) && d(this, {
                        type: "update",
                        object: this,
                        newValue: e,
                        oldValue: t
                    })
                }, e.prototype.get = function() {
                    return this.reportObserved(), this.dehanceValue(this.value)
                }, e.prototype.intercept = function(e) {
                    return s(this, e)
                }, e.prototype.observe = function(e, t) {
                    return t && e({
                        object: this,
                        type: "update",
                        newValue: this.value,
                        oldValue: void 0
                    }), i(this, e)
                }, e.prototype.toJSON = function() {
                    return this.get()
                }, e.prototype.toString = function() {
                    return this.name + "[" + this.value + "]"
                }, e.prototype.valueOf = function() {
                    return pt(this.get())
                }, e
            }(n);
        N.prototype[ut()] = N.prototype.valueOf;
        var K = yt("ObservableValue", N),
            k = {
                m001: "It is not allowed to assign new values to @action fields",
                m002: "`runInAction` expects a function",
                m003: "`runInAction` expects a function without arguments",
                m004: "autorun expects a function",
                m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
                m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
                m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
                m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
                m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
                m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
                m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
                m012: "computed takes one or two arguments if used as function",
                m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
                m014: "extendObservable expected 2 or more arguments",
                m015: "extendObservable expects an object as first argument",
                m016: "extendObservable should not be used on maps, use map.merge instead",
                m017: "all arguments of extendObservable should be objects",
                m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
                m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
                m020: "modifiers can only be used for individual object properties",
                m021: "observable expects zero or one arguments",
                m022: "@observable can not be used on getters, use @computed instead",
                m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
                m025: "whyRun can only be used on reactions and computed values",
                m026: "`action` can only be invoked on functions",
                m028: "It is not allowed to set `useStrict` when a derivation is running",
                m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
                m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
                m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
                m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
                m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
                m033: "`observe` doesn't support the fire immediately property for observable maps.",
                m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
                m035: "Cannot make the designated object observable; it is not extensible",
                m036: "It is not possible to get index atoms from arrays",
                m037: 'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',
                m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
            };

        function V(e) {
            return k[e]
        }

        function M(e, t) {
            ze("function" == typeof t, V("m026")), ze("string" == typeof e && 0 < e.length, "actions should have valid names, got: '" + e + "'");
            var o = function() {
                return F(e, t, this, arguments)
            };
            return o.originalFn = t, o.isMobxAction = !0, o
        }

        function F(e, t, o, r) {
            var n, a = function(e, t, o, r) {
                var n = l() && !!e,
                    a = 0;
                if (n) {
                    a = Date.now();
                    var s = r && r.length || 0,
                        i = new Array(s);
                    if (0 < s)
                        for (var y = 0; y < s; y++) i[y] = r[y];
                    p({
                        type: "action",
                        name: e,
                        fn: t,
                        object: o,
                        arguments: i
                    })
                }
                var c = kt();
                Lt();
                var x = j(!0);
                return {
                    prevDerivation: c,
                    prevAllowStateChanges: x,
                    notifySpy: n,
                    startTime: a
                }
            }(e, t, o, r);
            try {
                return t.apply(o, r)
            } finally {
                U((n = a).prevAllowStateChanges), Ct(), Vt(n.prevDerivation), n.notifySpy && f({
                    time: Date.now() - n.startTime
                })
            }
        }

        function j(e) {
            var t = _t.allowStateChanges;
            return _t.allowStateChanges = e, t
        }

        function U(e) {
            _t.allowStateChanges = e
        }

        function z(y, c, x, d, l) {
            function a(e, t, o, r, n) {
                if (void 0 === n && (n = 0), ze(l || G(arguments), "This function is a decorator, but it wasn't invoked like a decorator"), o) {
                    tt(e, "__mobxLazyInitializers") || ot(e, "__mobxLazyInitializers", e.__mobxLazyInitializers && e.__mobxLazyInitializers.slice() || []);
                    var a = o.value,
                        s = o.initializer;
                    return e.__mobxLazyInitializers.push(function(e) {
                        y(e, t, s ? s.call(e) : a, r, o)
                    }), {
                        enumerable: d,
                        configurable: !0,
                        get: function() {
                            return !0 !== this.__mobxDidRunLazyInitializers && H(this), c.call(this, t)
                        },
                        set: function(e) {
                            !0 !== this.__mobxDidRunLazyInitializers && H(this), x.call(this, t, e)
                        }
                    }
                }
                var i = {
                    enumerable: d,
                    configurable: !0,
                    get: function() {
                        return this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[t] || X(this, t, void 0, y, r, o), c.call(this, t)
                    },
                    set: function(e) {
                        this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[t] ? x.call(this, t, e) : X(this, t, e, y, r, o)
                    }
                };
                return (arguments.length < 3 || 5 === arguments.length && n < 3) && Object.defineProperty(e, t, i), i
            }
            return l ? function() {
                if (G(arguments)) return a.apply(null, arguments);
                var r = arguments,
                    n = arguments.length;
                return function(e, t, o) {
                    return a(e, t, o, r, n)
                }
            } : a
        }

        function X(e, t, o, r, n, a) {
            tt(e, "__mobxInitializedProps") || ot(e, "__mobxInitializedProps", {}), e.__mobxInitializedProps[t] = !0, r(e, t, o, n, a)
        }

        function H(t) {
            !0 !== t.__mobxDidRunLazyInitializers && t.__mobxLazyInitializers && (ot(t, "__mobxDidRunLazyInitializers", !0), t.__mobxDidRunLazyInitializers && t.__mobxLazyInitializers.forEach(function(e) {
                return e(t)
            }))
        }

        function G(e) {
            return (2 === e.length || 3 === e.length) && "string" == typeof e[1]
        }
        var Y = z(function(e, t, o, r, n) {
                var a = r && 1 === r.length ? r[0] : o.name || t || "<unnamed action>";
                ot(e, t, q(a, o))
            }, function(e) {
                return this[e]
            }, function() {
                ze(!1, V("m001"))
            }, !1, !0),
            $ = z(function(e, t, o) {
                Q(e, t, o)
            }, function(e) {
                return this[e]
            }, function() {
                ze(!1, V("m001"))
            }, !1, !1),
            q = function(e, t, o, r) {
                return 1 === arguments.length && "function" == typeof e ? M(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? M(e, t) : 1 === arguments.length && "string" == typeof e ? J(e) : J(t).apply(null, arguments)
            };

        function J(r) {
            return function(e, t, o) {
                if (o && "function" == typeof o.value) return o.value = M(r, o.value), o.enumerable = !1, o.configurable = !0, o;
                if (void 0 !== o && void 0 !== o.get) throw new Error("[mobx] action is not expected to be used with getters");
                return Y(r).apply(this, arguments)
            }
        }

        function Z(e) {
            return "function" == typeof e && !0 === e.isMobxAction
        }

        function Q(e, t, o) {
            var r = function() {
                return F(t, o, e, arguments)
            };
            r.isMobxAction = !0, ot(e, t, r)
        }

        function ee(e, t) {
            return e === t
        }
        q.bound = function(e, t, o) {
            if ("function" != typeof e) return $.apply(null, arguments);
            var r = M("<not yet bound action>", e);
            return r.autoBind = !0, r
        };
        var te = {
            identity: ee,
            structural: function(e, t) {
                return it(e, t)
            },
            default: function(e, t) {
                return ct(e, t) || ee(e, t)
            }
        };

        function oe(e, t, o) {
            var r, n, a;
            a = "string" == typeof e ? (r = e, n = t, o) : (r = e.name || "Autorun@" + je(), n = e, t), ze("function" == typeof n, V("m004")), ze(!1 === Z(n), V("m005")), a && (n = n.bind(a));
            var s = new Ft(r, function() {
                this.track(i)
            });

            function i() {
                n(s)
            }
            return s.schedule(), s.getDisposer()
        }
        var re = function() {
            function e(e, t, o, r, n) {
                this.derivation = e, this.scope = t, this.equals = o, this.dependenciesState = ht.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = ht.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + je(), this.value = new Dt(null), this.isComputing = !1, this.isRunningSetter = !1, this.name = r || "ComputedValue@" + je(), n && (this.setter = M(r + "-setter", n))
            }
            return e.prototype.onBecomeStale = function() {
                ! function(e) {
                    if (e.lowestObserverState !== ht.UP_TO_DATE) return;
                    e.lowestObserverState = ht.POSSIBLY_STALE;
                    var t = e.observers,
                        o = t.length;
                    for (; o--;) {
                        var r = t[o];
                        r.dependenciesState === ht.UP_TO_DATE && (r.dependenciesState = ht.POSSIBLY_STALE, r.onBecomeStale())
                    }
                }(this)
            }, e.prototype.onBecomeUnobserved = function() {
                Nt(this), this.value = void 0
            }, e.prototype.get = function() {
                ze(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation), 0 === _t.inBatch ? (Lt(), Bt(this) && (this.value = this.computeValue(!1)), Ct()) : (Et(this), Bt(this) && this.trackAndCompute() && function(e) {
                    if (e.lowestObserverState === ht.STALE) return;
                    e.lowestObserverState = ht.STALE;
                    var t = e.observers,
                        o = t.length;
                    for (; o--;) {
                        var r = t[o];
                        r.dependenciesState === ht.POSSIBLY_STALE ? r.dependenciesState = ht.STALE : r.dependenciesState === ht.UP_TO_DATE && (e.lowestObserverState = ht.UP_TO_DATE)
                    }
                }(this));
                var e = this.value;
                if (At(e)) throw e.cause;
                return e
            }, e.prototype.peek = function() {
                var e = this.computeValue(!1);
                if (At(e)) throw e.cause;
                return e
            }, e.prototype.set = function(e) {
                if (this.setter) {
                    ze(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                    try {
                        this.setter.call(this.scope, e)
                    } finally {
                        this.isRunningSetter = !1
                    }
                } else ze(!1, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.")
            }, e.prototype.trackAndCompute = function() {
                l() && u({
                    object: this.scope,
                    type: "compute",
                    fn: this.derivation
                });
                var e = this.value,
                    t = this.dependenciesState === ht.NOT_TRACKING,
                    o = this.value = this.computeValue(!0);
                return t || At(e) || At(o) || !this.equals(e, o)
            }, e.prototype.computeValue = function(e) {
                var t;
                if (this.isComputing = !0, _t.computationDepth++, e) t = Wt(this, this.derivation, this.scope);
                else try {
                    t = this.derivation.call(this.scope)
                } catch (e) {
                    t = new Dt(e)
                }
                return _t.computationDepth--, this.isComputing = !1, t
            }, e.prototype.observe = function(o, r) {
                var n = this,
                    a = !0,
                    s = void 0;
                return oe(function() {
                    var e = n.get();
                    if (!a || r) {
                        var t = kt();
                        o({
                            type: "update",
                            object: n,
                            newValue: e,
                            oldValue: s
                        }), Vt(t)
                    }
                    a = !1, s = e
                })
            }, e.prototype.toJSON = function() {
                return this.get()
            }, e.prototype.toString = function() {
                return this.name + "[" + this.derivation.toString() + "]"
            }, e.prototype.valueOf = function() {
                return pt(this.get())
            }, e.prototype.whyRun = function() {
                var e = Boolean(_t.trackingDerivation),
                    t = $e(this.isComputing ? this.newObserving : this.observing).map(function(e) {
                        return e.name
                    }),
                    o = $e(Rt(this).map(function(e) {
                        return e.name
                    }));
                return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (e ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" + (this.dependenciesState === ht.NOT_TRACKING ? V("m032") : " * This computation will re-run if any of the following observables changes:\n    " + qe(t) + "\n    " + (this.isComputing && e ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n    " + V("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + qe(o) + "\n")
            }, e
        }();
        re.prototype[ut()] = re.prototype.valueOf;
        var ne = yt("ComputedValue", re),
            ae = function() {
                function e(e, t) {
                    this.target = e, this.name = t, this.values = {}, this.changeListeners = null, this.interceptors = null
                }
                return e.prototype.observe = function(e, t) {
                    return ze(!0 !== t, "`observe` doesn't support the fire immediately property for observable objects."), i(this, e)
                }, e.prototype.intercept = function(e) {
                    return s(this, e)
                }, e
            }();

        function se(e, t) {
            if (he(e) && e.hasOwnProperty("$mobx")) return e.$mobx;
            ze(Object.isExtensible(e), V("m035")), Ze(e) || (t = (e.constructor.name || "ObservableObject") + "@" + je()), t || (t = "ObservableObject@" + je());
            var o = new ae(e, t);
            return rt(e, "$mobx", o), o
        }

        function ie(e, t, o, r) {
            if (e.values[t] && !ne(e.values[t])) return ze("value" in o, "The property " + t + " in " + e.name + " is already observable, cannot redefine it as computed property"), void(e.target[t] = o.value);
            if ("value" in o)
                if (Ee(o.value)) {
                    var n = o.value;
                    ye(e, t, n.initialValue, n.enhancer)
                } else Z(o.value) && !0 === o.value.autoBind ? Q(e.target, t, o.value.originalFn) : ne(o.value) ? function(e, t, o) {
                    var r = e.name + "." + t;
                    o.name = r, o.scope || (o.scope = e.target);
                    e.values[t] = o, Object.defineProperty(e.target, t, le(t))
                }(e, t, o.value) : ye(e, t, o.value, r);
            else ce(e, t, o.get, o.set, te.default, !0)
        }

        function ye(e, t, o, r) {
            if (at(e.target, t), y(e)) {
                var n = c(e, {
                    object: e.target,
                    name: t,
                    type: "add",
                    newValue: o
                });
                if (!n) return;
                o = n.newValue
            }
            var a;
            o = (e.values[t] = new N(o, r, e.name + "." + t, !1)).value, Object.defineProperty(e.target, t, xe[a = t] || (xe[a] = {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this.$mobx.values[a].get()
                    },
                    set: function(e) {
                        ue(this, a, e)
                    }
                })),
                function(e, t, o, r) {
                    var n = x(e),
                        a = l(),
                        s = n || a ? {
                            type: "add",
                            object: t,
                            name: o,
                            newValue: r
                        } : null;
                    a && p(s);
                    n && d(e, s);
                    a && f()
                }(e, e.target, t, o)
        }

        function ce(e, t, o, r, n, a) {
            a && at(e.target, t), e.values[t] = new re(o, e.target, n, e.name + "." + t, r), a && Object.defineProperty(e.target, t, le(t))
        }
        var xe = {},
            de = {};

        function le(t) {
            return de[t] || (de[t] = {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return this.$mobx.values[t].get()
                },
                set: function(e) {
                    return this.$mobx.values[t].set(e)
                }
            })
        }

        function ue(e, t, o) {
            var r = e.$mobx,
                n = r.values[t];
            if (y(r)) {
                if (!(i = c(r, {
                        type: "update",
                        object: e,
                        name: t,
                        newValue: o
                    }))) return;
                o = i.newValue
            }
            if ((o = n.prepareNewValue(o)) !== W) {
                var a = x(r),
                    s = l(),
                    i = a || s ? {
                        type: "update",
                        object: e,
                        oldValue: n.value,
                        name: t,
                        newValue: o
                    } : null;
                s && p(i), n.setNewValue(o), a && d(r, i), s && f()
            }
        }
        var pe = yt("ObservableObjectAdministration", ae);

        function he(e) {
            return !!Je(e) && (H(e), pe(e.$mobx))
        }

        function fe(e, t) {
            if (null == e) return !1;
            if (void 0 === t) return he(e) || !!e.$mobx || a(e) || Gt(e) || ne(e);
            if (P(e) || Ve(e)) throw new Error(V("m019"));
            if (he(e)) {
                var o = e.$mobx;
                return o.values && !!o.values[t]
            }
            return !1
        }

        function me(a) {
            return ze(!!a, ":("), z(function(e, t, o, r, n) {
                at(e, t), ze(!n || !n.get, V("m022")), ye(se(e, void 0), t, o, a)
            }, function(e) {
                var t = this.$mobx.values[e];
                if (void 0 !== t) return t.get()
            }, function(e, t) {
                ue(this, e, t)
            }, !0, !1)
        }

        function ge(e) {
            for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            return ve(e, Ae, t)
        }

        function _e(e) {
            for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            return ve(e, Se, t)
        }

        function ve(e, t, o) {
            ze(2 <= arguments.length, V("m014")), ze("object" == typeof e, V("m015")), ze(!Ve(e), V("m016")), o.forEach(function(e) {
                ze("object" == typeof e, V("m017")), ze(!fe(e), V("m018"))
            });
            for (var r = se(e), n = {}, a = o.length - 1; 0 <= a; a--) {
                var s = o[a];
                for (var i in s)
                    if (!0 !== n[i] && tt(s, i)) {
                        if (n[i] = !0, e === s && !nt(e, i)) continue;
                        ie(r, i, Object.getOwnPropertyDescriptor(s, i), t)
                    }
            }
            return e
        }
        var be = me(Ae),
            Ie = me(Be),
            we = me(Se),
            Re = me(Pe),
            Oe = me(We);
        var Te = {
                box: function(e, t) {
                    return 2 < arguments.length && Ce("box"), new N(e, Ae, t)
                },
                shallowBox: function(e, t) {
                    return 2 < arguments.length && Ce("shallowBox"), new N(e, Se, t)
                },
                array: function(e, t) {
                    return 2 < arguments.length && Ce("array"), new E(e, Ae, t)
                },
                shallowArray: function(e, t) {
                    return 2 < arguments.length && Ce("shallowArray"), new E(e, Se, t)
                },
                map: function(e, t) {
                    return 2 < arguments.length && Ce("map"), new ke(e, Ae, t)
                },
                shallowMap: function(e, t) {
                    return 2 < arguments.length && Ce("shallowMap"), new ke(e, Se, t)
                },
                object: function(e, t) {
                    2 < arguments.length && Ce("object");
                    var o = {};
                    return se(o, t), ge(o, e), o
                },
                shallowObject: function(e, t) {
                    2 < arguments.length && Ce("shallowObject");
                    var o = {};
                    return se(o, t), _e(o, e), o
                },
                ref: function() {
                    return arguments.length < 2 ? De(Se, arguments[0]) : we.apply(null, arguments)
                },
                shallow: function() {
                    return arguments.length < 2 ? De(Be, arguments[0]) : Ie.apply(null, arguments)
                },
                deep: function() {
                    return arguments.length < 2 ? De(Ae, arguments[0]) : be.apply(null, arguments)
                },
                struct: function() {
                    return arguments.length < 2 ? De(Pe, arguments[0]) : Re.apply(null, arguments)
                }
            },
            Le = function(e) {
                if (void 0 === e && (e = void 0), "string" == typeof arguments[1]) return be.apply(null, arguments);
                if (ze(arguments.length <= 1, V("m021")), ze(!Ee(e), V("m020")), fe(e)) return e;
                var t = Ae(e, void 0, void 0);
                return t !== e ? t : Le.box(e)
            };

        function Ce(e) {
            Ue("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
        }

        function Ee(e) {
            return "object" == typeof e && null !== e && !0 === e.isMobxModifierDescriptor
        }

        function De(e, t) {
            return ze(!Ee(t), "Modifiers cannot be nested"), {
                isMobxModifierDescriptor: !0,
                initialValue: t,
                enhancer: e
            }
        }

        function Ae(e, t, o) {
            return Ee(e) && Ue("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), fe(e) ? e : Array.isArray(e) ? Le.array(e, o) : Ze(e) ? Le.object(e, o) : lt(e) ? Le.map(e, o) : e
        }

        function Be(e, t, o) {
            return Ee(e) && Ue("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), null == e ? e : he(e) || P(e) || Ve(e) ? e : Array.isArray(e) ? Le.shallowArray(e, o) : Ze(e) ? Le.shallowObject(e, o) : lt(e) ? Le.shallowMap(e, o) : Ue("The shallow modifier / decorator can only used in combination with arrays, objects and maps")
        }

        function Se(e) {
            return e
        }

        function Pe(e, t, o) {
            if (it(e, t)) return t;
            if (fe(e)) return e;
            if (Array.isArray(e)) return new E(e, Pe, o);
            if (lt(e)) return new ke(e, Pe, o);
            if (Ze(e)) {
                var r = {};
                return se(r, o), ve(r, Pe, [e]), r
            }
            return e
        }

        function We(e, t, o) {
            return it(e, t) ? t : e
        }

        function Ne(e, t) {
            void 0 === t && (t = void 0), Lt();
            try {
                return e.apply(t)
            } finally {
                Ct()
            }
        }
        Object.keys(Te).forEach(function(e) {
            return Le[e] = Te[e]
        }), Le.deep.struct = Le.struct, Le.ref.struct = function() {
            return arguments.length < 2 ? De(We, arguments[0]) : Oe.apply(null, arguments)
        };
        var Ke = {},
            ke = function() {
                function e(e, t, o) {
                    void 0 === t && (t = Ae), void 0 === o && (o = "ObservableMap@" + je()), this.enhancer = t, this.name = o, this.$mobx = Ke, this._data = Object.create(null), this._hasMap = Object.create(null), this._keys = new E(void 0, Se, this.name + ".keys()", !0), this.interceptors = null, this.changeListeners = null, this.dehancer = void 0, this.merge(e)
                }
                return e.prototype._has = function(e) {
                    return void 0 !== this._data[e]
                }, e.prototype.has = function(e) {
                    return !!this.isValidKey(e) && (e = "" + e, this._hasMap[e] ? this._hasMap[e].get() : this._updateHasMapEntry(e, !1).get())
                }, e.prototype.set = function(e, t) {
                    this.assertValidKey(e), e = "" + e;
                    var o = this._has(e);
                    if (y(this)) {
                        var r = c(this, {
                            type: o ? "update" : "add",
                            object: this,
                            newValue: t,
                            name: e
                        });
                        if (!r) return this;
                        t = r.newValue
                    }
                    return o ? this._updateValue(e, t) : this._addValue(e, t), this
                }, e.prototype.delete = function(e) {
                    var t = this;
                    if ((this.assertValidKey(e), e = "" + e, y(this)) && !(n = c(this, {
                            type: "delete",
                            object: this,
                            name: e
                        }))) return !1;
                    if (this._has(e)) {
                        var o = l(),
                            r = x(this),
                            n = r || o ? {
                                type: "delete",
                                object: this,
                                oldValue: this._data[e].value,
                                name: e
                            } : null;
                        return o && p(n), Ne(function() {
                            t._keys.remove(e), t._updateHasMapEntry(e, !1), t._data[e].setNewValue(void 0), t._data[e] = void 0
                        }), r && d(this, n), o && f(), !0
                    }
                    return !1
                }, e.prototype._updateHasMapEntry = function(e, t) {
                    var o = this._hasMap[e];
                    return o ? o.setNewValue(t) : o = this._hasMap[e] = new N(t, Se, this.name + "." + e + "?", !1), o
                }, e.prototype._updateValue = function(e, t) {
                    var o = this._data[e];
                    if ((t = o.prepareNewValue(t)) !== W) {
                        var r = l(),
                            n = x(this),
                            a = n || r ? {
                                type: "update",
                                object: this,
                                oldValue: o.value,
                                name: e,
                                newValue: t
                            } : null;
                        r && p(a), o.setNewValue(t), n && d(this, a), r && f()
                    }
                }, e.prototype._addValue = function(t, o) {
                    var r = this;
                    Ne(function() {
                        var e = r._data[t] = new N(o, r.enhancer, r.name + "." + t, !1);
                        o = e.value, r._updateHasMapEntry(t, !0), r._keys.push(t)
                    });
                    var e = l(),
                        n = x(this),
                        a = n || e ? {
                            type: "add",
                            object: this,
                            name: t,
                            newValue: o
                        } : null;
                    e && p(a), n && d(this, a), e && f()
                }, e.prototype.get = function(e) {
                    return e = "" + e, this.has(e) ? this.dehanceValue(this._data[e].get()) : this.dehanceValue(void 0)
                }, e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.keys = function() {
                    return _(this._keys.slice())
                }, e.prototype.values = function() {
                    return _(this._keys.map(this.get, this))
                }, e.prototype.entries = function() {
                    var t = this;
                    return _(this._keys.map(function(e) {
                        return [e, t.get(e)]
                    }))
                }, e.prototype.forEach = function(t, o) {
                    var r = this;
                    this.keys().forEach(function(e) {
                        return t.call(o, r.get(e), e, r)
                    })
                }, e.prototype.merge = function(t) {
                    var r = this;
                    return Ve(t) && (t = t.toJS()), Ne(function() {
                        Ze(t) ? Object.keys(t).forEach(function(e) {
                            return r.set(e, t[e])
                        }) : Array.isArray(t) ? t.forEach(function(e) {
                            var t = e[0],
                                o = e[1];
                            return r.set(t, o)
                        }) : lt(t) ? t.forEach(function(e, t) {
                            return r.set(t, e)
                        }) : null != t && Ue("Cannot initialize map from " + t)
                    }), this
                }, e.prototype.clear = function() {
                    var e = this;
                    Ne(function() {
                        Kt(function() {
                            e.keys().forEach(e.delete, e)
                        })
                    })
                }, e.prototype.replace = function(e) {
                    var o = this;
                    return Ne(function() {
                        var t = function(e) {
                            var t;
                            Ze(e) ? t = Object.keys(e) : Array.isArray(e) ? t = e.map(function(e) {
                                var t = e[0];
                                return t
                            }) : dt(e) ? t = Array.from(e.keys()) : Ue("Cannot get keys from " + e);
                            return t
                        }(e);
                        o.keys().filter(function(e) {
                            return -1 === t.indexOf(e)
                        }).forEach(function(e) {
                            return o.delete(e)
                        }), o.merge(e)
                    }), this
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._keys.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.toJS = function() {
                    var t = this,
                        o = {};
                    return this.keys().forEach(function(e) {
                        return o[e] = t.get(e)
                    }), o
                }, e.prototype.toJSON = function() {
                    return this.toJS()
                }, e.prototype.isValidKey = function(e) {
                    return null != e && ("string" == typeof e || "number" == typeof e || "boolean" == typeof e)
                }, e.prototype.assertValidKey = function(e) {
                    if (!this.isValidKey(e)) throw new Error("[mobx.map] Invalid key: '" + e + "', only strings, numbers and booleans are accepted as key in observable maps.")
                }, e.prototype.toString = function() {
                    var t = this;
                    return this.name + "[{ " + this.keys().map(function(e) {
                        return e + ": " + t.get(e)
                    }).join(", ") + " }]"
                }, e.prototype.observe = function(e, t) {
                    return ze(!0 !== t, V("m033")), i(this, e)
                }, e.prototype.intercept = function(e) {
                    return s(this, e)
                }, e
            }();
        v(ke.prototype, function() {
            return this.entries()
        });
        var Ve = yt("ObservableMap", ke),
            Me = [];

        function Fe() {
            return "undefined" != typeof window ? window : e
        }

        function je() {
            return ++_t.mobxGuid
        }

        function Ue(e, t) {
            throw ze(!1, e, t), "X"
        }

        function ze(e, t, o) {
            if (!e) throw new Error("[mobx] Invariant failed: " + t + (o ? " in '" + o + "'" : ""))
        }
        Object.freeze(Me);
        var Xe = [];

        function He(e) {
            return -1 === Xe.indexOf(e) && (Xe.push(e), console.error("[mobx] Deprecated: " + e), !0)
        }

        function Ge(e) {
            var t = !1;
            return function() {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }
        var Ye = function() {};

        function $e(e) {
            var t = [];
            return e.forEach(function(e) {
                -1 === t.indexOf(e) && t.push(e)
            }), t
        }

        function qe(e, t, o) {
            return void 0 === t && (t = 100), void 0 === o && (o = " - "), e ? e.slice(0, t).join(o) + (e.length > t ? " (... and " + (e.length - t) + "more)" : "") : ""
        }

        function Je(e) {
            return null !== e && "object" == typeof e
        }

        function Ze(e) {
            if (null === e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function Qe() {
            for (var e = arguments[0], t = 1, o = arguments.length; t < o; t++) {
                var r = arguments[t];
                for (var n in r) tt(r, n) && (e[n] = r[n])
            }
            return e
        }
        var et = Object.prototype.hasOwnProperty;

        function tt(e, t) {
            return et.call(e, t)
        }

        function ot(e, t, o) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: o
            })
        }

        function rt(e, t, o) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: o
            })
        }

        function nt(e, t) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            return !o || !1 !== o.configurable && !1 !== o.writable
        }

        function at(e, t) {
            ze(nt(e, t), "Cannot make property '" + t + "' observable, it is not configurable and writable in the target object")
        }

        function st(e) {
            var t = [];
            for (var o in e) t.push(o);
            return t
        }

        function it(e, o) {
            if (null === e && null === o) return !0;
            if (void 0 === e && void 0 === o) return !0;
            if (ct(e, o)) return !0;
            if ("object" != typeof e) return e === o;
            var t = xt(e),
                r = dt(e);
            if (t !== xt(o)) return !1;
            if (r !== dt(o)) return !1;
            if (t) {
                if (e.length !== o.length) return !1;
                for (var n = e.length - 1; 0 <= n; n--)
                    if (!it(e[n], o[n])) return !1;
                return !0
            }
            if (r) {
                if (e.size !== o.size) return !1;
                var a = !0;
                return e.forEach(function(e, t) {
                    a = a && it(o.get(t), e)
                }), a
            }
            if ("object" != typeof e || "object" != typeof o) return !1;
            if (null === e || null === o) return !1;
            if (dt(e) && dt(o)) return e.size === o.size && it(Le.shallowMap(e).entries(), Le.shallowMap(o).entries());
            if (st(e).length !== st(o).length) return !1;
            for (var s in e) {
                if (!(s in o)) return !1;
                if (!it(e[s], o[s])) return !1
            }
            return !0
        }

        function yt(e, t) {
            var o = "isMobX" + e;
            return t.prototype[o] = !0,
                function(e) {
                    return Je(e) && !0 === e[o]
                }
        }

        function ct(e, t) {
            return "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
        }

        function xt(e) {
            return Array.isArray(e) || P(e)
        }

        function dt(e) {
            return lt(e) || Ve(e)
        }

        function lt(e) {
            return void 0 !== Fe().Map && e instanceof Fe().Map
        }

        function ut() {
            return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
        }

        function pt(e) {
            return null === e ? null : "object" == typeof e ? "" + e : e
        }
        var ht, ft, mt = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"],
            gt = function() {
                this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.strictMode = !1, this.resetId = 0, this.spyListeners = [], this.globalReactionErrorHandlers = []
            },
            _t = new gt,
            vt = !1,
            bt = !1,
            It = !1,
            wt = Fe();

        function Rt(e) {
            return e.observers
        }

        function Ot(e, t) {
            if (1 === e.observers.length) e.observers.length = 0, Tt(e);
            else {
                var o = e.observers,
                    r = e.observersIndexes,
                    n = o.pop();
                if (n !== t) {
                    var a = r[t.__mapid] || 0;
                    a ? r[n.__mapid] = a : delete r[n.__mapid], o[a] = n
                }
                delete r[t.__mapid]
            }
        }

        function Tt(e) {
            e.isPendingUnobservation || (e.isPendingUnobservation = !0, _t.pendingUnobservations.push(e))
        }

        function Lt() {
            _t.inBatch++
        }

        function Ct() {
            if (0 == --_t.inBatch) {
                Xt();
                for (var e = _t.pendingUnobservations, t = 0; t < e.length; t++) {
                    var o = e[t];
                    o.isPendingUnobservation = !1, 0 === o.observers.length && o.onBecomeUnobserved()
                }
                _t.pendingUnobservations = []
            }
        }

        function Et(e) {
            var t = _t.trackingDerivation;
            null !== t ? t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e) : 0 === e.observers.length && Tt(e)
        }
        wt.__mobxInstanceCount ? (wt.__mobxInstanceCount++, setTimeout(function() {
            vt || bt || It || (It = !0, console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details."))
        })) : wt.__mobxInstanceCount = 1, (ft = ht || (ht = {}))[ft.NOT_TRACKING = -1] = "NOT_TRACKING", ft[ft.UP_TO_DATE = 0] = "UP_TO_DATE", ft[ft.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", ft[ft.STALE = 2] = "STALE";
        var Dt = function(e) {
            this.cause = e
        };

        function At(e) {
            return e instanceof Dt
        }

        function Bt(e) {
            switch (e.dependenciesState) {
                case ht.UP_TO_DATE:
                    return !1;
                case ht.NOT_TRACKING:
                case ht.STALE:
                    return !0;
                case ht.POSSIBLY_STALE:
                    for (var t = kt(), o = e.observing, r = o.length, n = 0; n < r; n++) {
                        var a = o[n];
                        if (ne(a)) {
                            try {
                                a.get()
                            } catch (e) {
                                return Vt(t), !0
                            }
                            if (e.dependenciesState === ht.STALE) return Vt(t), !0
                        }
                    }
                    return Mt(e), Vt(t), !1
            }
        }

        function St() {
            return null !== _t.trackingDerivation
        }

        function Pt(e) {
            var t = 0 < e.observers.length;
            0 < _t.computationDepth && t && Ue(V("m031") + e.name), !_t.allowStateChanges && t && Ue(V(_t.strictMode ? "m030a" : "m030b") + e.name)
        }

        function Wt(e, t, o) {
            Mt(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++_t.runId;
            var r, n = _t.trackingDerivation;
            _t.trackingDerivation = e;
            try {
                r = t.call(o)
            } catch (e) {
                r = new Dt(e)
            }
            return _t.trackingDerivation = n,
                function(e) {
                    for (var t = e.observing, o = e.observing = e.newObserving, r = ht.UP_TO_DATE, n = 0, a = e.unboundDepsCount, s = 0; s < a; s++) {
                        var i = o[s];
                        0 === i.diffValue && (i.diffValue = 1, n !== s && (o[n] = i), n++), i.dependenciesState > r && (r = i.dependenciesState)
                    }
                    o.length = n, e.newObserving = null, a = t.length;
                    for (; a--;) {
                        var i = t[a];
                        0 === i.diffValue && Ot(i, e), i.diffValue = 0
                    }
                    for (; n--;) {
                        var i = o[n];
                        1 === i.diffValue && (i.diffValue = 0, c = e, void 0, (x = (y = i).observers.length) && (y.observersIndexes[c.__mapid] = x), y.observers[x] = c, y.lowestObserverState > c.dependenciesState && (y.lowestObserverState = c.dependenciesState))
                    }
                    var y, c, x;
                    r !== ht.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
                }(e), r
        }

        function Nt(e) {
            var t = e.observing;
            e.observing = [];
            for (var o = t.length; o--;) Ot(t[o], e);
            e.dependenciesState = ht.NOT_TRACKING
        }

        function Kt(e) {
            var t = kt(),
                o = e();
            return Vt(t), o
        }

        function kt() {
            var e = _t.trackingDerivation;
            return _t.trackingDerivation = null, e
        }

        function Vt(e) {
            _t.trackingDerivation = e
        }

        function Mt(e) {
            if (e.dependenciesState !== ht.UP_TO_DATE) {
                e.dependenciesState = ht.UP_TO_DATE;
                for (var t = e.observing, o = t.length; o--;) t[o].lowestObserverState = ht.UP_TO_DATE
            }
        }
        var Ft = function() {
            function e(e, t) {
                void 0 === e && (e = "Reaction@" + je()), this.name = e, this.onInvalidate = t, this.observing = [], this.newObserving = [], this.dependenciesState = ht.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + je(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1
            }
            return e.prototype.onBecomeStale = function() {
                this.schedule()
            }, e.prototype.schedule = function() {
                this._isScheduled || (this._isScheduled = !0, _t.pendingReactions.push(this), Xt())
            }, e.prototype.isScheduled = function() {
                return this._isScheduled
            }, e.prototype.runReaction = function() {
                this.isDisposed || (Lt(), this._isScheduled = !1, Bt(this) && (this._isTrackPending = !0, this.onInvalidate(), this._isTrackPending && l() && u({
                    object: this,
                    type: "scheduled-reaction"
                })), Ct())
            }, e.prototype.track = function(e) {
                Lt();
                var t, o = l();
                o && (t = Date.now(), p({
                    object: this,
                    type: "reaction",
                    fn: e
                })), this._isRunning = !0;
                var r = Wt(this, e, void 0);
                this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && Nt(this), At(r) && this.reportExceptionInDerivation(r.cause), o && f({
                    time: Date.now() - t
                }), Ct()
            }, e.prototype.reportExceptionInDerivation = function(t) {
                var o = this;
                if (this.errorHandler) this.errorHandler(t, this);
                else {
                    var e = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this,
                        r = V("m037");
                    console.error(e || r, t), l() && u({
                        type: "error",
                        message: e,
                        error: t,
                        object: this
                    }), _t.globalReactionErrorHandlers.forEach(function(e) {
                        return e(t, o)
                    })
                }
            }, e.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = !0, this._isRunning || (Lt(), Nt(this), Ct()))
            }, e.prototype.getDisposer = function() {
                var e = this.dispose.bind(this);
                return e.$mobx = this, e.onError = jt, e
            }, e.prototype.toString = function() {
                return "Reaction[" + this.name + "]"
            }, e.prototype.whyRun = function() {
                var e = $e(this._isRunning ? this.newObserving : this.observing).map(function(e) {
                    return e.name
                });
                return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + qe(e) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + V("m038") + "\n"
            }, e
        }();

        function jt(e) {
            ze(this && this.$mobx && Gt(this.$mobx), "Invalid `this`"), ze(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered"), this.$mobx.errorHandler = e
        }
        var Ut = 100,
            zt = function(e) {
                return e()
            };

        function Xt() {
            0 < _t.inBatch || _t.isRunningReactions || zt(Ht)
        }

        function Ht() {
            _t.isRunningReactions = !0;
            for (var e = _t.pendingReactions, t = 0; 0 < e.length;) {
                ++t === Ut && (console.error("Reaction doesn't converge to a stable state after " + Ut + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                for (var o = e.splice(0), r = 0, n = o.length; r < n; r++) o[r].runReaction()
            }
            _t.isRunningReactions = !1
        }
        var Gt = yt("Reaction", Ft);

        function Yt(a) {
            return z(function(e, t, o, r, n) {
                ze(void 0 !== n, V("m009")), ze("function" == typeof n.get, V("m010")), ce(se(e, ""), t, n.get, n.set, a, !1)
            }, function(e) {
                var t = this.$mobx.values[e];
                if (void 0 !== t) return t.get()
            }, function(e, t) {
                this.$mobx.values[e].set(t)
            }, !1, !1)
        }
        var $t = Yt(te.default),
            qt = Yt(te.structural),
            Jt = function(e, t, o) {
                if ("string" == typeof t) return $t.apply(null, arguments);
                ze("function" == typeof e, V("m011")), ze(arguments.length < 3, V("m012"));
                var r = "object" == typeof t ? t : {};
                r.setter = "function" == typeof t ? t : r.setter;
                var n = r.equals ? r.equals : r.compareStructural || r.struct ? te.structural : te.default;
                return new re(e, r.context, n, r.name || e.name || "", r.setter)
            };

        function Zt(e, t) {
            if ("object" == typeof e && null !== e) {
                if (P(e)) return ze(void 0 === t, V("m036")), e.$mobx.atom;
                if (Ve(e)) {
                    var o = e;
                    return void 0 === t ? Zt(o._keys) : (ze(!!(r = o._data[t] || o._hasMap[t]), "the entry '" + t + "' does not exist in the observable map '" + eo(e) + "'"), r)
                }
                var r;
                if (H(e), t && !e.$mobx && e[t], he(e)) return t ? (ze(!!(r = e.$mobx.values[t]), "no observable property '" + t + "' found on the observable object '" + eo(e) + "'"), r) : Ue("please specify a property");
                if (a(e) || ne(e) || Gt(e)) return e
            } else if ("function" == typeof e && Gt(e.$mobx)) return e.$mobx;
            return Ue("Cannot obtain atom from " + e)
        }

        function Qt(e, t) {
            return ze(e, "Expecting some object"), void 0 !== t ? Qt(Zt(e, t)) : a(e) || ne(e) || Gt(e) ? e : Ve(e) ? e : (H(e), e.$mobx ? e.$mobx : void ze(!1, "Cannot obtain administration from " + e))
        }

        function eo(e, t) {
            return (void 0 !== t ? Zt(e, t) : he(e) || Ve(e) ? Qt(e) : Zt(e)).name
        }

        function to(t, o, r) {
            function e(e) {
                return o && r.push([t, e]), e
            }
            if (void 0 === o && (o = !0), void 0 === r && (r = []), fe(t)) {
                if (o && null === r && (r = []), o && null !== t && "object" == typeof t)
                    for (var n = 0, a = r.length; n < a; n++)
                        if (r[n][0] === t) return r[n][1];
                if (P(t)) {
                    var s = e([]),
                        i = t.map(function(e) {
                            return to(e, o, r)
                        });
                    s.length = i.length;
                    for (n = 0, a = i.length; n < a; n++) s[n] = i[n];
                    return s
                }
                if (he(t)) {
                    s = e({});
                    for (var y in t) s[y] = to(t[y], o, r);
                    return s
                }
                if (Ve(t)) {
                    var c = e({});
                    return t.forEach(function(e, t) {
                        return c[t] = to(e, o, r)
                    }), c
                }
                if (K(t)) return to(t.get(), o, r)
            }
            return t
        }

        function oo(e) {
            return console.log(e), e
        }

        function ro(e) {
            var t = {
                name: e.name
            };
            return e.observing && 0 < e.observing.length && (t.dependencies = $e(e.observing).map(ro)), t
        }

        function no(e) {
            var t, o = {
                name: e.name
            };
            return (t = e).observers && 0 < t.observers.length && (o.observers = Rt(e).map(no)), o
        }
        Jt.struct = qt, Jt.equals = Yt;
        var ao = {
                allowStateChanges: function(e, t) {
                    var o, r = j(e);
                    try {
                        o = t()
                    } finally {
                        U(r)
                    }
                    return o
                },
                deepEqual: it,
                getAtom: Zt,
                getDebugName: eo,
                getDependencyTree: function(e, t) {
                    return ro(Zt(e, t))
                },
                getAdministration: Qt,
                getGlobalState: function() {
                    return _t
                },
                getObserverTree: function(e, t) {
                    return no(Zt(e, t))
                },
                interceptReads: function(e, t, o) {
                    var r;
                    if (Ve(e) || P(e) || K(e)) r = Qt(e);
                    else {
                        if (!he(e)) return Ue("Expected observable map, object or array as first array");
                        if ("string" != typeof t) return Ue("InterceptReads can only be used with a specific property, not with an object in general");
                        r = Qt(e, t)
                    }
                    return void 0 !== r.dehancer ? Ue("An intercept reader was already established") : (r.dehancer = "function" == typeof t ? t : o, function() {
                        r.dehancer = void 0
                    })
                },
                isComputingDerivation: St,
                isSpyEnabled: l,
                onReactionError: function(t) {
                    return _t.globalReactionErrorHandlers.push(t),
                        function() {
                            var e = _t.globalReactionErrorHandlers.indexOf(t);
                            0 <= e && _t.globalReactionErrorHandlers.splice(e, 1)
                        }
                },
                reserveArrayBuffer: B,
                resetGlobalState: function() {
                    _t.resetId++;
                    var e = new gt;
                    for (var t in e) - 1 === mt.indexOf(t) && (_t[t] = e[t]);
                    _t.allowStateChanges = !_t.strictMode
                },
                isolateGlobalState: function() {
                    bt = !0, Fe().__mobxInstanceCount--
                },
                shareGlobalState: function() {
                    He("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details."), vt = !0;
                    var e = Fe(),
                        t = _t;
                    if (e.__mobservableTrackingStack || e.__mobservableViewStack) throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
                    if (e.__mobxGlobal && e.__mobxGlobal.version !== t.version) throw new Error("[mobx] An incompatible version of mobx is already loaded.");
                    e.__mobxGlobal ? _t = e.__mobxGlobal : e.__mobxGlobal = t
                },
                spyReport: u,
                spyReportEnd: f,
                spyReportStart: p,
                setReactionScheduler: function(t) {
                    var o = zt;
                    zt = function(e) {
                        return t(function() {
                            return o(e)
                        })
                    }
                }
            },
            so = {
                Reaction: Ft,
                untracked: Kt,
                Atom: t,
                BaseAtom: n,
                useStrict: function(e) {
                    ze(null === _t.trackingDerivation, V("m028")), _t.strictMode = e, _t.allowStateChanges = !e
                },
                isStrictModeEnabled: function() {
                    return _t.strictMode
                },
                spy: m,
                comparer: te,
                asReference: function(e) {
                    return He("asReference is deprecated, use observable.ref instead"), Le.ref(e)
                },
                asFlat: function(e) {
                    return He("asFlat is deprecated, use observable.shallow instead"), Le.shallow(e)
                },
                asStructure: function(e) {
                    return He("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."), Le.struct(e)
                },
                asMap: function(e) {
                    return He("asMap is deprecated, use observable.map or observable.shallowMap instead"), Le.map(e || {})
                },
                isModifierDescriptor: Ee,
                isObservableObject: he,
                isBoxedObservable: K,
                isObservableArray: P,
                ObservableMap: ke,
                isObservableMap: Ve,
                map: function(e) {
                    return He("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"), Le.map(e)
                },
                transaction: Ne,
                observable: Le,
                computed: Jt,
                isObservable: fe,
                isComputed: function(e, t) {
                    if (null == e) return !1;
                    if (void 0 === t) return ne(e);
                    if (!1 === he(e)) return !1;
                    if (!e.$mobx.values[t]) return !1;
                    var o = Zt(e, t);
                    return ne(o)
                },
                extendObservable: ge,
                extendShallowObservable: _e,
                observe: function(e, t, o, r) {
                    return "function" == typeof o ? (s = o, i = r, Qt(e, t).observe(s, i)) : (n = t, a = o, Qt(e).observe(n, a));
                    var n, a, s, i
                },
                intercept: function(e, t, o) {
                    return "function" == typeof o ? (n = o, Qt(e, t).intercept(n)) : (r = t, Qt(e).intercept(r));
                    var r, n
                },
                autorun: oe,
                autorunAsync: function(e, t, o, r) {
                    var n, a, s, i;
                    i = "string" == typeof e ? (n = e, a = t, s = o, r) : (n = e.name || "AutorunAsync@" + je(), a = e, s = t, o), ze(!1 === Z(a), V("m006")), void 0 === s && (s = 1), i && (a = a.bind(i));
                    var y = !1,
                        c = new Ft(n, function() {
                            y || (y = !0, setTimeout(function() {
                                y = !1, c.isDisposed || c.track(x)
                            }, s))
                        });

                    function x() {
                        a(c)
                    }
                    return c.schedule(), c.getDisposer()
                },
                when: function(e, t, o, r) {
                    var n, a, s, i;
                    return i = "string" == typeof e ? (n = e, a = t, s = o, r) : (n = "When@" + je(), a = e, s = t, o), oe(n, function(e) {
                        if (a.call(i)) {
                            e.dispose();
                            var t = kt();
                            s.call(i), Vt(t)
                        }
                    })
                },
                reaction: function(o, e, t) {
                    var r;
                    3 < arguments.length && Ue(V("m007")), Ee(o) && Ue(V("m008")), (r = "object" == typeof t ? t : {}).name = r.name || o.name || e.name || "Reaction@" + je(), r.fireImmediately = !0 === t || !0 === r.fireImmediately, r.delay = r.delay || 0, r.compareStructural = r.compareStructural || r.struct || !1, e = q(r.name, r.context ? e.bind(r.context) : e), r.context && (o = o.bind(r.context));
                    var n, a = !0,
                        s = !1,
                        i = r.equals ? r.equals : r.compareStructural || r.struct ? te.structural : te.default,
                        y = new Ft(r.name, function() {
                            a || r.delay < 1 ? c() : s || (s = !0, setTimeout(function() {
                                s = !1, c()
                            }, r.delay))
                        });

                    function c() {
                        if (!y.isDisposed) {
                            var t = !1;
                            y.track(function() {
                                var e = o(y);
                                t = a || !i(n, e), n = e
                            }), a && r.fireImmediately && e(n, y), a || !0 !== t || e(n, y), a && (a = !1)
                        }
                    }
                    return y.schedule(), y.getDisposer()
                },
                action: q,
                isAction: Z,
                runInAction: function(e, t, o) {
                    var r = "string" == typeof e ? e : e.name || "<unnamed action>",
                        n = "function" == typeof e ? e : t,
                        a = "function" == typeof e ? t : o;
                    return ze("function" == typeof n, V("m002")), ze(0 === n.length, V("m003")), ze("string" == typeof r && 0 < r.length, "actions should have valid names, got: '" + r + "'"), F(r, n, a, void 0)
                },
                expr: function(e, t) {
                    return St() || console.warn(V("m013")), Jt(e, {
                        context: t
                    }).get()
                },
                toJS: to,
                createTransformer: function(n, t) {
                    ze("function" == typeof n && n.length < 2, "createTransformer expects a function that accepts one argument");
                    var a = {},
                        r = _t.resetId,
                        s = function(r) {
                            function e(e, t) {
                                var o = r.call(this, function() {
                                    return n(t)
                                }, void 0, te.default, "Transformer-" + n.name + "-" + e, void 0) || this;
                                return o.sourceIdentifier = e, o.sourceObject = t, o
                            }
                            return o(e, r), e.prototype.onBecomeUnobserved = function() {
                                var e = this.value;
                                r.prototype.onBecomeUnobserved.call(this), delete a[this.sourceIdentifier], t && t(e, this.sourceObject)
                            }, e
                        }(re);
                    return function(e) {
                        r !== _t.resetId && (a = {}, r = _t.resetId);
                        var t = function(e) {
                                if ("string" == typeof e || "number" == typeof e) return e;
                                if (null === e || "object" != typeof e) throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + e);
                                var t = e.$transformId;
                                return void 0 === t && (t = je(), ot(e, "$transformId", t)), t
                            }(e),
                            o = a[t];
                        return o ? o.get() : (o = a[t] = new s(t, e)).get()
                    }
                },
                whyRun: function(e, t) {
                    switch (arguments.length) {
                        case 0:
                            if (!(e = _t.trackingDerivation)) return oo(V("m024"));
                            break;
                        case 2:
                            e = Zt(e, t)
                    }
                    return e = Zt(e), ne(e) ? oo(e.whyRun()) : Gt(e) ? oo(e.whyRun()) : Ue(V("m025"))
                },
                isArrayLike: xt,
                extras: ao
            },
            io = !1,
            yo = function(e) {
                var t = so[e];
                Object.defineProperty(so, e, {
                    get: function() {
                        return io || (io = !0, console.warn("Using default export (`import mobx from 'mobx'`) is deprecated and won’t work in mobx@4.0.0\nUse `import * as mobx from 'mobx'` instead")), t
                    }
                })
            };
        for (var co in so) yo(co);
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: m,
            extras: ao
        })
    }).call(this, lo(2))
}, function(e, t) {
    var o;
    o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (o = window)
    }
    e.exports = o
}, function(e, t, o) {
    "use strict";
    o.r(t);
    var r, n, S, a, d = o(0),
        s = o(1),
        i = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        y = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        c = {
            isVoiceOn: 1,
            isVibrateOn: 1,
            lastLoginDay: 0,
            loginDays: 0,
            addedShortCut: 0,
            refuseShortCutCount: 0,
            sharedContextIds: [],
            bestScore: 0,
            totalPlayTimes: 0,
            consecutiveLoginDays: 0,
            inviteFriendsCount: 0,
            group_contextIds: [],
            diamonds: 0,
            skins: {
                defaultSkin: {
                    available: !0
                },
                cat: {
                    available: !1
                },
                dog: {
                    available: !1
                },
                owl: {
                    available: !1
                },
                fox: {
                    available: !1
                },
                frog: {
                    available: !1
                },
                panda: {
                    available: !1
                }
            },
            skinId: "defaultSkin"
        },
        x = function() {
            if (!window.DYD_DEV_MODE) {
                var e = Object(s.c)(bt.FBUserData);
                FBInstant.player.setDataAsync(e)
            } else {
                Laya.LocalStorage.setItem("e3sdsfs3eee", JSON.stringify(bt.FBUserData));
            }
        },
        l = function() {
            var e = JSON.parse(Laya.LocalStorage.getItem("e3sdsfs3eee"));
            if (e) {
                Object(d.deepClone)(c, e);
            } else {
                Laya.LocalStorage.setItem("e3sdsfs3eee", JSON.stringify(c));
            }
            return window.DYD_DEV_MODE ? Promise.resolve(c) : new Promise(function(t) {
                FBInstant.player.getDataAsync(Object.keys(c)).then(function(e) {
                    Object(d.deepClone)(c, e), t(c)
                })
            });
        },
        u = [{
            id: "defaultSkin",
            cost: 2e3,
            available: !0,
            order: 0,
            selected: !1
        }, {
            id: "cat",
            cost: 2e3,
            available: !1,
            order: 1,
            selected: !0
        }, {
            id: "dog",
            cost: 2e3,
            available: !1,
            order: 2,
            selected: !1
        }, {
            id: "owl",
            cost: 2e3,
            available: !1,
            order: 3,
            selected: !1
        }, {
            id: "fox",
            cost: 2e3,
            available: !1,
            order: 4,
            selected: !0
        }, {
            id: "frog",
            cost: 2e3,
            available: !1,
            order: 5,
            selected: !1
        }, {
            id: "panda",
            cost: 2e3,
            available: !1,
            order: 6,
            selected: !1
        }],
        p = "87",
        h = "679811515771968",
        f = "score_week",
        m = "paintHouseFont",
        g = {
            Red: new Laya.Vector4(.9490196078431372, .2823529411764706, .2823529411764706, 1),
            Orange: new Laya.Vector4(.9725490196078431, .6078431372549019, .21176470588235294, 1),
            Yellow: new Laya.Vector4(.8509803921568627, .7725490196078432, .16470588235294117, 1),
            Green: new Laya.Vector4(.2784313725490196, .9333333333333333, .24705882352941178, 1),
            Cyan: new Laya.Vector4(.21568627450980393, .9294117647058824, .9725490196078431, 1),
            Blue: new Laya.Vector4(.22745098039215686, .5803921568627451, .9764705882352941, 1),
            Purple: new Laya.Vector4(.796078431372549, .21176470588235294, .9411764705882353, 1),
            cat: new Laya.Vector4(.22745098039215686, .5803921568627451, .9764705882352941, 1),
            dog: new Laya.Vector4(.8509803921568627, .7725490196078432, .16470588235294117, 1),
            fox: new Laya.Vector4(.9725490196078431, .6078431372549019, .21176470588235294, 1),
            frog: new Laya.Vector4(.2784313725490196, .9333333333333333, .24705882352941178, 1),
            owl: new Laya.Vector4(.4, .4, .4, 1),
            panda: new Laya.Vector4(.2, .2, .2, 1)
        },
        _ = "home/button_friend.png",
        v = "home/button_hui.png",
        b = "home/setting_button_bg.png",
        I = "home/shake_off.png",
        w = "home/shake_on.png",
        R = "home/voice_off.png",
        O = "home/voice_on.png",
        T = "rank/baseboard_02.png",
        L = "rank/button_share.png",
        C = "rank/photoMask.png",
        E = "rank/return.png",
        D = "skin/diamond_01.png",
        A = "skin/effect_light.png",
        B = "settlement/button_zi.png",
        P = "settlement/button_lv.png",
        W = ["resource/assets/loading.atlas", "resource/assets/home.atlas", "resource/assets/rank.atlas", "resource/assets/skin.atlas", "resource/assets/settlement.atlas", "resource/assets/skins.atlas"],
        N = "resource/scenes/SampleScene.ls",
        K = [N];
    (n = r || (r = {})).FLAT = "RoofFlat", n.PEAK = "RoofPeak", (a = S || (S = {})).DOOR = "Door", a.WINDOW11 = "Window11", a.WINDOW21 = "Window21", a.WINDOW31 = "Window31", a.WINDOW12 = "Window12", a.WINDOW13 = "Window13", a.BRICK1 = "Brick1", a.BRICK2 = "Brick2", a.BRICK3 = "Brick3", a.BRICK4 = "Brick4", a.BRICK5 = "Brick5", a.BRICK6 = "Brick6", a.BRICK7 = "Brick7", a.VENT = "Vent", a.PARTERRE = "Parterre", a.STACK = "Stack", a.VOLTMETER = "Voltmeter", a.MAILBOX = "Mailbox";
    var k, V, M = [{
            stageId: 1,
            length: 4,
            width: 5,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 2,
            length: 5,
            width: 5,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }],
                painterPos: {
                    x: 4,
                    y: 3
                }
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 3,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 3,
            length: 5,
            width: 5,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }]
                }],
                painterPos: {
                    x: 2,
                    y: 2
                }
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }],
                painterPos: {
                    x: 0,
                    y: 3
                }
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 4,
            length: 5,
            width: 5,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 5,
            length: 6,
            width: 8,
            height: 5,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 7,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK6,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 6,
            length: 6,
            width: 6,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 2,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }],
                painterPos: {
                    x: 4,
                    y: 4
                }
            }, {
                completed: !1,
                decorators: [{
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 7,
            length: 8,
            width: 8,
            height: 5,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }]
                }],
                painterPos: {
                    x: 0,
                    y: 1
                }
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }]
            }]
        }, {
            stageId: 8,
            length: 8,
            width: 7,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 0,
                        y: 3
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 7,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 6
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 6
                    }]
                }],
                painterPos: {
                    x: 1,
                    y: 0
                }
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 9,
            length: 7,
            width: 7,
            height: 10,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK6,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 3,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK6,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }]
                }],
                painterPos: {
                    x: 0,
                    y: 2
                }
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }]
            }]
        }, {
            stageId: 10,
            length: 6,
            width: 6,
            height: 6,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.WINDOW13,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 11,
            length: 7,
            width: 7,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 3,
                        y: 4
                    }, {
                        x: 2,
                        y: 8
                    }]
                }],
                painterPos: {
                    x: 0,
                    y: 1
                }
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 5,
                        y: 11
                    }, {
                        x: 6,
                        y: 9
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 6,
                        y: 11
                    }, {
                        x: 0,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 0,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 2,
                        y: 9
                    }]
                }],
                painterPos: {
                    x: 1,
                    y: 0
                }
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 6,
                        y: 11
                    }]
                }]
            }]
        }, {
            stageId: 12,
            length: 8,
            width: 8,
            height: 6,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 7,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 7,
                        y: 0
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 13,
            length: 6,
            width: 7,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }]
            }]
        }, {
            stageId: 14,
            length: 6,
            width: 8,
            height: 7,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK2,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 15,
            length: 8,
            width: 6,
            height: 11,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 7,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 7
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }]
                }]
            }]
        }, {
            stageId: 16,
            length: 7,
            width: 7,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 6
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 6
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 17,
            length: 8,
            width: 8,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 7,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 18,
            length: 9,
            width: 7,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 8,
                        y: 6
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 19,
            length: 7,
            width: 5,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 6,
                        y: 7
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 20,
            length: 7,
            width: 7,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 2,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 21,
            length: 7,
            width: 8,
            height: 8,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK2,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 22,
            length: 9,
            width: 8,
            height: 10,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 8,
                        y: 1
                    }, {
                        x: 8,
                        y: 2
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 8,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 7,
                        y: 8
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 23,
            length: 6,
            width: 7,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 24,
            length: 7,
            width: 7,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 25,
            length: 6,
            width: 9,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 8,
                        y: 7
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 8,
                        y: 2
                    }]
                }]
            }]
        }, {
            stageId: 26,
            length: 8,
            width: 9,
            height: 10,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 9
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }, {
                        x: 7,
                        y: 9
                    }, {
                        x: 8,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 7,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 5
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 7,
                        y: 2
                    }]
                }]
            }]
        }, {
            stageId: 27,
            length: 8,
            width: 7,
            height: 7,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 28,
            length: 5,
            width: 8,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 29,
            length: 7,
            width: 7,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 2,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 2,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 30,
            length: 7,
            width: 7,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }, {
                        x: 2,
                        y: 11
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 4,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 7
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 6,
                        y: 11
                    }]
                }]
            }]
        }, {
            stageId: 31,
            length: 8,
            width: 7,
            height: 12,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 11
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 2,
                        y: 11
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 3,
                        y: 11
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 7,
                        y: 10
                    }, {
                        x: 7,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 32,
            length: 7,
            width: 7,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 33,
            length: 6,
            width: 6,
            height: 11,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 8
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 5,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 34,
            length: 8,
            width: 6,
            height: 7,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 35,
            length: 7,
            width: 7,
            height: 4,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 36,
            length: 6,
            width: 8,
            height: 6,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 2
                    }, {
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 37,
            length: 7,
            width: 8,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 6,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 8
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 3,
                        y: 11
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 7
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 7,
                        y: 11
                    }]
                }]
            }]
        }, {
            stageId: 38,
            length: 8,
            width: 9,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 8,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 8,
                        y: 4
                    }, {
                        x: 8,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }]
        }, {
            stageId: 39,
            length: 8,
            width: 8,
            height: 8,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 40,
            length: 6,
            width: 6,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }]
            }]
        }, {
            stageId: 41,
            length: 7,
            width: 7,
            height: 6,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 5
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }, {
                        x: 6,
                        y: 1
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 6,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 42,
            length: 9,
            width: 10,
            height: 5,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 8,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 8,
                        y: 1
                    }, {
                        x: 8,
                        y: 2
                    }, {
                        x: 8,
                        y: 3
                    }, {
                        x: 8,
                        y: 4
                    }, {
                        x: 9,
                        y: 3
                    }, {
                        x: 9,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 9,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 8,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 9,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 43,
            length: 8,
            width: 8,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 7,
                        y: 10
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 11
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 6,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 6,
                        y: 11
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 5,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 44,
            length: 8,
            width: 5,
            height: 7,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 3,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 2,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }]
                }]
            }]
        }, {
            stageId: 45,
            length: 6,
            width: 8,
            height: 8,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK6,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 7
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }]
                }]
            }]
        }, {
            stageId: 46,
            length: 5,
            width: 5,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 3,
                        y: 8
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 4,
                        y: 7
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }]
                }]
            }]
        }, {
            stageId: 47,
            length: 8,
            width: 8,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 7,
                        y: 9
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }, {
                        x: 2,
                        y: 11
                    }, {
                        x: 3,
                        y: 11
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 3,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }, {
                        x: 2,
                        y: 11
                    }, {
                        x: 3,
                        y: 11
                    }, {
                        x: 4,
                        y: 11
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 10
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 48,
            length: 7,
            width: 7,
            height: 10,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK5,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.BRICK7,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.BRICK5,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 1,
                        y: 9
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 8
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }]
                }, {
                    decor: S.BRICK5,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 3,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 9
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }]
            }]
        }, {
            stageId: 49,
            length: 6,
            width: 7,
            height: 11,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 4,
                        y: 10
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }, {
                        x: 6,
                        y: 10
                    }]
                }]
            }]
        }, {
            stageId: 50,
            length: 9,
            width: 6,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 8,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 3,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 5
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 6,
                        y: 1
                    }, {
                        x: 7,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }]
                }]
            }]
        }, {
            stageId: 51,
            length: 6,
            width: 6,
            height: 11,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 0,
                        y: 6
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 1,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK2,
                    pos: [{
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK2,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK7,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 4,
                        y: 10
                    }]
                }]
            }]
        }, {
            stageId: 52,
            length: 7,
            width: 6,
            height: 11,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 6,
                        y: 2
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 6,
                        y: 9
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 6,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 8
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 1,
                        y: 2
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 4,
                        y: 10
                    }]
                }]
            }]
        }, {
            stageId: 53,
            length: 9,
            width: 8,
            height: 10,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 8,
                        y: 6
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }, {
                        x: 7,
                        y: 9
                    }, {
                        x: 8,
                        y: 9
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 7,
                        y: 6
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 3,
                        y: 8
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }, {
                        x: 7,
                        y: 8
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 6,
                        y: 2
                    }]
                }]
            }]
        }, {
            stageId: 54,
            length: 6,
            width: 6,
            height: 11,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 4,
                        y: 9
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 10
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 8
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 4,
                        y: 8
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 3,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 4,
                        y: 10
                    }]
                }]
            }]
        }, {
            stageId: 55,
            length: 9,
            width: 5,
            height: 5,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW11,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 1
                    }, {
                        x: 0,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }]
        }, {
            stageId: 56,
            length: 7,
            width: 8,
            height: 12,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 0,
                        y: 11
                    }, {
                        x: 1,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 4
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 4,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 3,
                        y: 2
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 3,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 9
                    }, {
                        x: 7,
                        y: 10
                    }, {
                        x: 7,
                        y: 11
                    }, {
                        x: 6,
                        y: 11
                    }, {
                        x: 5,
                        y: 11
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 7
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 6,
                        y: 3
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 2,
                        y: 10
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 2,
                        y: 8
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 57,
            length: 8,
            width: 8,
            height: 12,
            roofType: r.PEAK,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 7,
                        y: 7
                    }, {
                        x: 7,
                        y: 8
                    }, {
                        x: 4,
                        y: 10
                    }, {
                        x: 5,
                        y: 10
                    }, {
                        x: 6,
                        y: 10
                    }, {
                        x: 2,
                        y: 8
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 2,
                        y: 10
                    }, {
                        x: 2,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 6,
                        y: 8
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 2,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }, {
                        x: 0,
                        y: 9
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 3,
                        y: 8
                    }, {
                        x: 3,
                        y: 9
                    }, {
                        x: 5,
                        y: 8
                    }, {
                        x: 7,
                        y: 11
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 9
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 2,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK4,
                    pos: [{
                        x: 2,
                        y: 1
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 4,
                        y: 1
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 6,
                        y: 1
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 6,
                        y: 3
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 1,
                        y: 8
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 1,
                        y: 10
                    }, {
                        x: 4,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 7,
                        y: 11
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 4,
                        y: 8
                    }, {
                        x: 5,
                        y: 8
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 7
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 0
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 5,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 6
                    }, {
                        x: 1,
                        y: 9
                    }, {
                        x: 2,
                        y: 9
                    }, {
                        x: 5,
                        y: 9
                    }, {
                        x: 6,
                        y: 9
                    }]
                }]
            }]
        }, {
            stageId: 58,
            length: 6,
            width: 5,
            height: 9,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 5,
                        y: 2
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 1,
                        y: 6
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 4,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 3,
                        y: 1
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 0,
                        y: 8
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 3,
                        y: 5
                    }, {
                        x: 1,
                        y: 1
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 5
                    }, {
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }, {
                        x: 4,
                        y: 5
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 2,
                        y: 7
                    }, {
                        x: 3,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 2,
                        y: 5
                    }, {
                        x: 3,
                        y: 5
                    }]
                }]
            }]
        }, {
            stageId: 59,
            length: 6,
            width: 9,
            height: 8,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 4
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }, {
                        x: 3,
                        y: 6
                    }, {
                        x: 4,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 4,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 5,
                        y: 0
                    }, {
                        x: 6,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }, {
                        x: 8,
                        y: 0
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 0,
                        y: 4
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 7,
                        y: 6
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 6,
                        y: 6
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 2,
                        y: 6
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 0,
                        y: 1
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 4,
                        y: 5
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 4,
                        y: 6
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 5,
                        y: 4
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 6
                    }, {
                        x: 2,
                        y: 6
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 3,
                        y: 0
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 1
                    }, {
                        x: 0,
                        y: 5
                    }, {
                        x: 1,
                        y: 5
                    }, {
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 6
                    }, {
                        x: 0,
                        y: 7
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 4,
                        y: 7
                    }, {
                        x: 5,
                        y: 7
                    }, {
                        x: 6,
                        y: 7
                    }, {
                        x: 7,
                        y: 7
                    }, {
                        x: 8,
                        y: 7
                    }, {
                        x: 5,
                        y: 5
                    }, {
                        x: 6,
                        y: 5
                    }, {
                        x: 7,
                        y: 4
                    }]
                }, {
                    decor: S.VOLTMETER,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 1,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 7,
                        y: 5
                    }]
                }, {
                    decor: S.PARTERRE,
                    pos: [{
                        x: 7,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 5,
                        y: 4
                    }, {
                        x: 6,
                        y: 4
                    }]
                }, {
                    decor: S.STACK,
                    pos: [{
                        x: 8,
                        y: 0
                    }]
                }]
            }]
        }, {
            stageId: 60,
            length: 9,
            width: 8,
            height: 5,
            roofType: r.FLAT,
            walls: [{
                completed: !1,
                decorators: [{
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.BRICK3,
                    pos: [{
                        x: 5,
                        y: 0
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 3,
                        y: 1
                    }, {
                        x: 3,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 5,
                        y: 1
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 4,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW21,
                    pos: [{
                        x: 1,
                        y: 1
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 0,
                        y: 3
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 0,
                        y: 4
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 4,
                        y: 1
                    }, {
                        x: 2,
                        y: 3
                    }, {
                        x: 3,
                        y: 3
                    }, {
                        x: 4,
                        y: 3
                    }, {
                        x: 7,
                        y: 1
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }, {
                        x: 7,
                        y: 4
                    }]
                }]
            }, {
                completed: !1,
                decorators: [{
                    decor: S.STACK,
                    pos: [{
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }]
                }, {
                    decor: S.WINDOW12,
                    pos: [{
                        x: 1,
                        y: 2
                    }]
                }, {
                    decor: S.BRICK1,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 3,
                        y: 4
                    }, {
                        x: 4,
                        y: 2
                    }, {
                        x: 5,
                        y: 2
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 2
                    }, {
                        x: 8,
                        y: 2
                    }, {
                        x: 8,
                        y: 3
                    }]
                }]
            }, {
                completed: !0,
                decorators: [{
                    decor: S.BRICK3,
                    pos: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 0
                    }, {
                        x: 2,
                        y: 0
                    }, {
                        x: 3,
                        y: 0
                    }, {
                        x: 4,
                        y: 0
                    }, {
                        x: 7,
                        y: 0
                    }]
                }, {
                    decor: S.DOOR,
                    pos: [{
                        x: 5,
                        y: 3
                    }]
                }, {
                    decor: S.WINDOW13,
                    pos: [{
                        x: 1,
                        y: 3
                    }, {
                        x: 2,
                        y: 3
                    }]
                }, {
                    decor: S.MAILBOX,
                    pos: [{
                        x: 3,
                        y: 1
                    }]
                }, {
                    decor: S.VENT,
                    pos: [{
                        x: 4,
                        y: 4
                    }]
                }]
            }]
        }],
        F = "GameInit",
        j = "back_2_home",
        U = "play_with_friend",
        z = "show_rank",
        X = "show_skin",
        H = "enter_game",
        G = "game_over",
        Y = "continue_stage",
        $ = "ball_moved",
        q = "./resource/sounds/paint_1.mp3",
        J = "./resource/sounds/paint_2.mp3",
        Z = "./resource/sounds/paint_3.mp3",
        Q = "./resource/sounds/paint_4.mp3",
        ee = "./resource/sounds/paint_5.mp3",
        te = "./resource/sounds/paint_6.mp3",
        oe = "./resource/sounds/complete.mp3",
        re = "./resource/sounds/claim.mp3",
        ne = "./resource/sounds/claim_x5.mp3",
        ae = ["./resource/sounds/music_blank.mp3", q, J, Z, Q, ee, te, oe, re, ne],
        se = 0,
        ie = [q, J, Z, Q, ee, te],
        ye = !0,
        ce = function() {
            ye = !0
        },
        xe = function() {
            ye = !1
        },
        de = function() {
            ye && (Laya.SoundManager.playSound(ie[se], 1), ++se === ie.length && (se = 0))
        },
        le = (k = function(e, t) {
            return (k = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            k(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        ue = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        pe = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        he = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple"],
        fe = function(o) {
            function e(e) {
                var t = o.call(this) || this;
                return t._length = 0, t._width = 0, t._height = 0, t._currentColor = "RED", t._currentNeed2Fill = 0, t._currentWallIdx = 0, t._painting = !1, t._painterReady = !1, t._currentPainterX = 0, t._currentPainterY = 0, t._md = !1, t._lastX = void 0, t._lastY = void 0, t._deltaX = 0, t._deltaY = 0, t._scene = Laya.loader.getRes(N), e.addChild(t._scene), t._cameraContainer = t._scene.getChildByName("CameraContainer"), t._camera = t._cameraContainer.getChildByName("Main Camera"), t._models = t._scene.getChildByName("Models"), t._models.active = !1, t._skins = t._scene.getChildByName("Skins"), t._skins.active = !1, t._pd = t._scene.getChildByName("piaodai"), t._stageIndexes = [], t.bindEvents(), t.buildHouse(), t
            }
            return le(e, o), e.prototype.buildHouse = function() {
                if (Laya.timer.clear(this, this.rotateCamera), this._cameraLocalPositionTween && (this._cameraLocalPositionTween.clear(), this._cameraLocalPositionTween = null), this._cameraLocalRotationTween && (this._cameraLocalRotationTween.clear(), this._cameraLocalRotationTween = null), this._autoRotationTween && (this._autoRotationTween.clear(), this._autoRotationTween = null), this._pd.particleSystem.stop(), this._pd.active = !1, this._currentColor = this.getRandomColor(), !this._stageIndexes.length) {
                    var e = Math.floor(bt.FBUserData.bestScore / M.length);
                    this._stageIndexes = function(e, t) {
                        t > M.length && (t = 0);
                        for (var o = [], r = 0; r < t; r++) o.push(r);
                        for (var n = [], a = (r = t, M.length); r < a; r++) n.push(r);
                        return Ot(n), o = o.concat(n)
                    }(0, 0 === e ? M.length : 0), this._stageIndexes = this._stageIndexes.slice(bt.FBUserData.bestScore % M.length)
                }
                this._stageInfo = M[this._stageIndexes.shift()], this._length = this._stageInfo.length, this._width = this._stageInfo.width, this._height = this._stageInfo.height, this._cameraContainer.transform.position = new Laya.Vector3(0, 0, 0), this._cameraContainer.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this._camera.transform.localPosition = new Laya.Vector3(0, .5 * this._height + 2, this.getCameraZ(0) - 8), this._camera.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
                var t = new Laya.Sprite3D;
                this.buildHouseBase(t), this.buildWalls(t), this.buildRoof(t), this._houseSpt3D && (this._houseSpt3D.destroy(), this._houseSpt3D = null), this._scene.addChild(t), this._houseSpt3D = t, this.setCurrentWall(0), this._houseSpt3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)
            }, e.prototype.buildHouseBase = function(e) {
                this._houseBase || (this._houseBase = this._models.getChildByName("HouseBase"), this._houseBase.transform.position = new Laya.Vector3(0, .125, 0)), this._houseBase.transform.scale = new Laya.Vector3(this._length + .2, 1, this._width + .2), e.addChild(this._houseBase)
            }, e.prototype.buildWalls = function(o) {
                var r = this;
                this._houseBody || (this._houseBody = this._models.getChildByName("Wall")), this._houseBody.transform.scale = new Laya.Vector3(this._length, this._height, this._width), this._houseBody.transform.localPosition = new Laya.Vector3(0, .5 * this._height + .25, 0), o.addChild(this._houseBody), this._allGrids = [], this._need2fill = [], this._wallContainers = [], this._stageInfo.walls.forEach(function(e, t) {
                    return r.buildWall(o, e, t)
                })
            }, e.prototype.buildWall = function(e, t, o) {
                var y, r, n, a, s, c = this,
                    x = new Laya.Sprite3D,
                    i = o % 2 == 0 ? this._length : this._width,
                    d = this._height,
                    l = -.5 * (o % 2 == 0 ? this._width : this._length),
                    u = .5 * i - .5,
                    p = t.completed,
                    h = 0,
                    f = [],
                    m = [],
                    g = [],
                    _ = [];
                if (!p) {
                    y = [], r = [], n = [], a = [], s = [];
                    for (var v = 0; v < d; v++) {
                        y[v] = [], f[v] = [], m[v] = [], g[v] = [], _[v] = [];
                        for (var b = 0; b < i; b++) {
                            y[v][b] = {
                                isObstacle: !1,
                                isPassed: !1
                            };
                            var I = {
                                x: b,
                                y: v,
                                available: 1 <= v && b <= i - 2
                            };
                            (f[v][b] = I).available && r.push(I);
                            var w = {
                                x: b,
                                y: v,
                                available: b <= i - 2
                            };
                            (m[v][b] = w).available && n.push(w);
                            var R = {
                                x: b,
                                y: v,
                                available: 1 <= v
                            };
                            (g[v][b] = R).available && a.push(R);
                            var O = {
                                x: b,
                                y: v,
                                available: !0
                            };
                            (_[v][b] = O).available && s.push(O)
                        }
                    }
                    h = i * d;
                    for (var T = []; r.length;) {
                        var L = r[Math.floor(Math.random() * r.length)];
                        T.push(L), L.available = !1, m[L.y][L.x].available = !1, g[L.y][L.x].available = !1, _[L.y][L.x].available = !1, f[L.y][L.x + 1].available = !1, m[L.y][L.x + 1].available = !1, g[L.y][L.x + 1].available = !1, _[L.y][L.x + 1].available = !1, f[L.y - 1][L.x].available = !1, m[L.y - 1][L.x].available = !1, g[L.y - 1][L.x].available = !1, _[L.y - 1][L.x].available = !1, f[L.y - 1][L.x + 1].available = !1, m[L.y - 1][L.x + 1].available = !1, g[L.y - 1][L.x + 1].available = !1, _[L.y - 1][L.x + 1].available = !1, 1 <= L.x && (f[L.y][L.x - 1].available = !1, m[L.y][L.x - 1].available = !1, 1 <= L.y && (f[L.y - 1][L.x - 1].available = !1, m[L.y - 1][L.x - 1].available = !1)), L.y <= d - 2 && (f[L.y + 1][L.x].available = !1, g[L.y + 1][L.x].available = !1, L.x <= i - 2 && (f[L.y + 1][L.x + 1].available = !1, g[L.y + 1][L.x + 1].available = !1)), 1 <= L.x && L.y <= d - 2 && (f[L.y + 1][L.x - 1].available = !1), r = r.filter(function(e) {
                            return e.available
                        })
                    }
                    n = n.filter(function(e) {
                        return e.available
                    });
                    for (var C = []; n.length;) {
                        L = n[Math.floor(Math.random() * n.length)];
                        C.push(L), L.available = !1, g[L.y][L.x].available = !1, _[L.y][L.x].available = !1, m[L.y][L.x + 1].available = !1, g[L.y][L.x + 1].available = !1, _[L.y][L.x + 1].available = !1, 1 <= L.x && (m[L.y][L.x - 1].available = !1), L.y <= d - 2 && (g[L.y + 1][L.x].available = !1, g[L.y + 1][L.x + 1].available = !1), n = n.filter(function(e) {
                            return e.available
                        })
                    }
                    a = a.filter(function(e) {
                        return e.available
                    });
                    for (var E = []; a.length;) {
                        L = a[Math.floor(Math.random() * a.length)];
                        E.push(L), L.available = !1, _[L.y][L.x].available = !1, g[L.y - 1][L.x].available = !1, _[L.y - 1][L.x].available = !1, L.y <= d - 2 && (g[L.y + 1][L.x].available = !1), a = a.filter(function(e) {
                            return e.available
                        })
                    }
                    s = s.filter(function(e) {
                        return e.available
                    });
                    for (var D = []; s.length;) {
                        L = s[Math.floor(Math.random() * a.length)];
                        D.push(L), L.available = !1, s = s.filter(function(e) {
                            return e.available
                        })
                    }
                    for (; T.length;) {
                        L = T.pop();
                        (B = (I = this._models.getChildByName("Dot" + this.getRandomColor() + "22")).clone()).transform.localPosition = new Laya.Vector3(u - L.x - .5, .75 + L.y - .5, l - .02);
                        var A = 90 * Math.floor(Math.random() / .25);
                        B.transform.localRotationEuler = new Laya.Vector3(0, 0, A), x.addChild(B)
                    }
                    for (; C.length;) {
                        L = C.pop();
                        (B = (w = this._models.getChildByName("Dot" + this.getRandomColor() + "21")).clone()).transform.localPosition = new Laya.Vector3(u - L.x - .5, .75 + L.y, l - .02);
                        A = .5 < Math.random() ? B.transform.localRotationEuler.z : B.transform.localRotationEuler.z + 180;
                        B.transform.localRotationEuler = new Laya.Vector3(0, 0, A), x.addChild(B)
                    }
                    for (; E.length;) {
                        L = E.pop();
                        (B = (R = this._models.getChildByName("Dot" + this.getRandomColor() + "12")).clone()).transform.localPosition = new Laya.Vector3(u - L.x, .75 + L.y - .5, l - .02);
                        A = .5 < Math.random() ? B.transform.localRotationEuler.z : B.transform.localRotationEuler.z + 180;
                        B.transform.localRotationEuler = new Laya.Vector3(0, 0, A), x.addChild(B)
                    }
                    for (; D.length;) {
                        var B;
                        L = D.pop();
                        (B = (O = this._models.getChildByName("Dot" + this.getRandomColor() + "11")).clone()).transform.localPosition = new Laya.Vector3(u - L.x, .75 + L.y, l - .02);
                        A = 90 * Math.floor(Math.random() / .25);
                        B.transform.localRotationEuler = new Laya.Vector3(0, 0, A), x.addChild(B)
                    }
                }
                t.decorators.forEach(function(e) {
                    var i = e.decor;
                    e.pos.forEach(function(e) {
                        var t = e.x,
                            o = e.y;
                        y && (y[o][t].isObstacle = !0, i === S.WINDOW12 ? (y[o - 1][t].isObstacle = !0, h -= 2) : i === S.WINDOW13 ? (y[o - 1][t].isObstacle = !0, y[o - 2][t].isObstacle = !0, h -= 3) : i === S.WINDOW21 ? (y[o][t + 1].isObstacle = !0, h -= 2) : i === S.WINDOW31 ? (y[o][t + 1].isObstacle = !0, y[o][t + 2].isObstacle = !0, h -= 3) : i === S.DOOR ? (y[o][t + 1].isObstacle = !0, y[o - 1][t].isObstacle = !0, y[o - 1][t + 1].isObstacle = !0, y[o - 2][t].isObstacle = !0, y[o - 2][t + 1].isObstacle = !0, y[o - 3][t].isObstacle = !0, y[o - 3][t + 1].isObstacle = !0, h -= 8) : h -= 1);
                        var r = c._models.getChildByName(i);
                        if (r) {
                            var n = r.clone(),
                                a = 0,
                                s = 0;
                            i === S.STACK ? a = -.1 : i === S.WINDOW12 ? a = -.5 : i === S.WINDOW13 ? a = -1 : i === S.WINDOW21 ? s = .5 : i === S.WINDOW31 ? s = 1 : i === S.DOOR && (s = .5, a = -1.5), n.transform.localPosition = new Laya.Vector3(u - t - s, .75 + o + a, l - .06), x.addChild(n)
                        } else console.log("error decorator:" + i)
                    })
                }), e.addChild(x), x.transform.localRotationEuler = new Laya.Vector3(0, 90 * o, 0), this._wallContainers.push(x), y && this._allGrids.push(y), h && this._need2fill.push(h)
            }, e.prototype.buildRoof = function(e) {
                if (this._houseRoof || (this._houseRoof = this._models.getChildByName("FlatRoof")), this._houseRoof.transform.scale = new Laya.Vector3(this._length, 1, this._width), this._houseRoof.transform.position = new Laya.Vector3(0, this._height + .25, 0), e.addChild(this._houseRoof), !this._houseRoofBorderContainers) {
                    this._houseRoofBorderContainers = [];
                    for (var t = 0; t < 4; t++) {
                        var o = new Laya.Sprite3D;
                        e.addChild(o);
                        var r = this._models.getChildByName("FlatRoofBorder").clone();
                        o.addChild(r), (this._houseRoofBorderContainers[t] = o).transform.localRotationEuler = new Laya.Vector3(0, 90 * t, 0)
                    }
                }
                for (t = 0; t < 4; t++) {
                    r = (o = this._houseRoofBorderContainers[t]).getChildAt(0);
                    var n = t % 2 == 0 ? this._length : this._width,
                        a = t % 2 == 0 ? this._width : this._length;
                    r.transform.scale = new Laya.Vector3(n + .8, 1, 1), r.transform.localPosition = new Laya.Vector3(0, this._height + .25, -1 * (.5 * a - .5) - .4), e.addChild(o)
                }
                this._chimney || (this._chimney = this._models.getChildByName("Chimney")), this._chimney.transform.position = new Laya.Vector3(Math.ceil(-.25 * this._width), this._houseRoof.transform.position.y + 1, Math.ceil(-.25 * this._height)), e.addChild(this._chimney)
            }, e.prototype.setCurrentWall = function(e) {
                this._currentWallIdx = e, this._currentWallGrids = this._allGrids[this._currentWallIdx], this._currentNeed2Fill = this._need2fill[this._currentWallIdx], this._zDistance = -.5 * (e % 2 == 0 ? this._width : this._length)
            }, e.prototype.enterGame = function() {
                var e = this;
                Laya.Tween.to(this._camera.transform.localPosition, {
                    z: this._camera.transform.localPosition.z + 8,
                    update: new Laya.Handler(this, function() {
                        return e._camera.transform.localPosition = e._camera.transform.localPosition
                    })
                }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, this.updatePainter))
            }, e.prototype.updatePainter = function() {
                var e;
                "defaultSkin" === bt.FBUserData.skinId ? (this._currentPainter = this._skins.getChildByName("Painter" + this._currentColor).clone(), (e = this._models.getChildByName("Trail").clone()).trailRenderer.material.color = g[this._currentColor], this._currentPainter.addChild(e)) : (this._currentPainter = this._skins.getChildByName(bt.FBUserData.skinId).clone(), (e = this._models.getChildByName("Trail").clone()).trailRenderer.material.color = g[bt.FBUserData.skinId], this._currentPainter.addChild(e));
                var t = this._currentWallIdx % 2 == 0 ? this._length : this._width,
                    o = this._height,
                    r = .5 * t - .5,
                    n = .5 * o + .25 - 1 * (.5 * o - .5),
                    a = 0,
                    s = 0;
                this._stageInfo.walls[this._currentWallIdx].painterPos && (a = this._stageInfo.walls[this._currentWallIdx].painterPos.x, s = this._stageInfo.walls[this._currentWallIdx].painterPos.y), this._currentPainter.transform.localPosition = new Laya.Vector3(r - a, n + s, this._zDistance - .5), this._wallContainers[this._currentWallIdx].addChild(this._currentPainter), this._painterReady = !0, this._currentPainterX = a, this._currentPainterY = s, this._currentWallGrids[this._currentPainterY][this._currentPainterX].isPassed = !0, this._currentNeed2Fill -= 1
            }, e.prototype.removePainter = function() {
                this._painterReady = !1, this._currentPainter && this._currentPainter.destroy(), this._currentPainter = null
            }, e.prototype.bindEvents = function() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown)
            }, e.prototype.onKeyDown = function(e) {
                Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp), !this._painting && this._painterReady && (e.keyCode === Laya.Keyboard.UP || e.keyCode === Laya.Keyboard.W ? this.moveVertical(!1) : e.keyCode === Laya.Keyboard.DOWN || e.keyCode === Laya.Keyboard.S ? this.moveVertical(!0) : e.keyCode === Laya.Keyboard.LEFT || e.keyCode === Laya.Keyboard.A ? this.moveHorizontal(!1) : e.keyCode !== Laya.Keyboard.RIGHT && e.keyCode !== Laya.Keyboard.D || this.moveHorizontal(!0))
            }, e.prototype.onKeyUp = function(e) {
                Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp), Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown)
            }, e.prototype.onMouseDown = function(e) {
                this._md || this._painting || !this._painterReady || (Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this._lastX = e.stageX, this._lastY = e.stageY, this._deltaX = 0, this._deltaY = 0, this._md = !0)
            }, e.prototype.onMouseUp = function() {
                this._md = !1, Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this._lastX = void 0, this._lastY = void 0, this._deltaX = 0, this._deltaY = 0
            }, e.prototype.onMouseMove = function(e) {
                if (this._md && !this._painting && this._painterReady) {
                    void 0 === this._lastX && (this._lastX = e.stageX), void 0 === this._lastY && (this._lastY = e.stageY), this._deltaX += e.stageX - this._lastX, this._deltaY += e.stageY - this._lastY, this._lastX = e.stageX, this._lastY = e.stageY;
                    var t = Math.abs(this._deltaX),
                        o = Math.abs(this._deltaY);
                    if (!(t < 32 && o < 32)) {
                        var r = this._deltaX,
                            n = this._deltaY;
                        this._lastX = void 0, this._lastY = void 0, this._deltaX = 0, this._deltaY = 0, o <= t ? this.moveHorizontal(0 <= r) : this.moveVertical(0 <= n)
                    }
                }
            }, e.prototype.moveHorizontal = function(t) {
                for (var o = this, e = this._currentPainter.transform.localPosition.x, r = this._currentPainterX, n = !1;;) {
                    if (r < 0 || r >= this._currentWallGrids[0].length || 0 === this._currentNeed2Fill || this._currentWallGrids[this._currentPainterY][r].isObstacle) {
                        r += t ? -1 : 1;
                        break
                    }
                    var a = this._currentWallGrids[this._currentPainterY][r];
                    a.isPassed || (n = !0, a.isPassed = !0, this._currentNeed2Fill -= 1), r += t ? 1 : -1
                }
                if (r !== this._currentPainterX) {
                    var s;
                    if (this._painting = !0, this.event($), n) {
                        s = new Laya.Sprite3D;
                        var i = this._models.getChildByName("MeshWhite").clone();
                        i.transform.localPosition = new Laya.Vector3(t ? -.5 : .5, 0, 0), s.addChild(i);
                        var y = this._currentPainter.transform.localPosition;
                        s.transform.localPosition = new Laya.Vector3(y.x + (t ? .5 : -.5), y.y, this._zDistance - .04), this._wallContainers[this._currentWallIdx].addChild(s)
                    }
                    de(), Laya.Tween.to(this._currentPainter.transform.localPosition, {
                        x: this._currentPainter.transform.localPosition.x - (r - this._currentPainterX),
                        update: new Laya.Handler(this, function() {
                            o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, s && (s.transform.localScaleX = 1 + Math.abs(o._currentPainter.transform.localPosition.x - e))
                        })
                    }, 20 * Math.abs(r - this._currentPainterX), Laya.Ease.sineInOut, Laya.Handler.create(this, function() {
                        var e = o._currentPainter.transform.localPosition.x;
                        Laya.Tween.to(o._currentPainter.transform.localPosition, {
                            x: e + (t ? -.2 : .2),
                            update: new Laya.Handler(o, function() {
                                o._currentPainter && (o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, o._currentPainter.transform.localScale.x = 1 - Math.abs(o._currentPainter.transform.localPosition.x - e), o._currentPainter.transform.localScale = o._currentPainter.transform.localScale)
                            })
                        }, 40, Laya.Ease.linearNone, Laya.Handler.create(o, function() {
                            Laya.Tween.to(o._currentPainter.transform.localPosition, {
                                x: e,
                                update: new Laya.Handler(o, function() {
                                    o._currentPainter && (o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, o._currentPainter.transform.localScale.x = 1 - Math.abs(o._currentPainter.transform.localPosition.x - e), o._currentPainter.transform.localScale = o._currentPainter.transform.localScale)
                                })
                            }, 40, Laya.Ease.linearNone, Laya.Handler.create(o, function() {
                                o._currentPainterX = r, o._need2fill[o._currentWallIdx] = o._currentNeed2Fill, o._painting = !1, 0 === o._currentNeed2Fill && o.completeWall()
                            }))
                        }))
                    }))
                }
            }, e.prototype.moveVertical = function(t) {
                for (var o = this, e = this._currentPainter.transform.localPosition.y, r = this._currentPainterY, n = !1;;) {
                    if (r < 0 || r >= this._currentWallGrids.length || 0 === this._currentNeed2Fill || this._currentWallGrids[r][this._currentPainterX].isObstacle) {
                        r += t ? 1 : -1;
                        break
                    }
                    var a = this._currentWallGrids[r][this._currentPainterX];
                    a.isPassed || (n = !0, a.isPassed = !0, this._currentNeed2Fill -= 1), r += t ? -1 : 1
                }
                if (r !== this._currentPainterY) {
                    var s;
                    if (this._painting = !0, this.event($), n) {
                        s = new Laya.Sprite3D;
                        var i = this._models.getChildByName("MeshWhite").clone();
                        i.transform.localPosition = new Laya.Vector3(0, t ? -.5 : .5, 0), s.addChild(i);
                        var y = this._currentPainter.transform.localPosition;
                        s.transform.localPosition = new Laya.Vector3(y.x, y.y + (t ? .5 : -.5), this._zDistance - .04), this._wallContainers[this._currentWallIdx].addChild(s)
                    }
                    de(), Laya.Tween.to(this._currentPainter.transform.localPosition, {
                        y: this._currentPainter.transform.localPosition.y + (r - this._currentPainterY),
                        update: new Laya.Handler(this, function() {
                            o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, s && (s.transform.localScaleY = 1 + Math.abs(o._currentPainter.transform.localPosition.y - e))
                        })
                    }, 20 * Math.abs(r - this._currentPainterY), Laya.Ease.sineInOut, Laya.Handler.create(this, function() {
                        var e = o._currentPainter.transform.localPosition.y;
                        Laya.Tween.to(o._currentPainter.transform.localPosition, {
                            y: e + (t ? -.2 : .2),
                            update: new Laya.Handler(o, function() {
                                o._currentPainter && (o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, o._currentPainter.transform.localScale.y = 1 - Math.abs(o._currentPainter.transform.localPosition.y - e), o._currentPainter.transform.localScale = o._currentPainter.transform.localScale)
                            })
                        }, 40, Laya.Ease.linearNone, Laya.Handler.create(o, function() {
                            Laya.Tween.to(o._currentPainter.transform.localPosition, {
                                y: e,
                                update: new Laya.Handler(o, function() {
                                    o._currentPainter && (o._currentPainter.transform.localPosition = o._currentPainter.transform.localPosition, o._currentPainter.transform.localScale.y = 1 - Math.abs(o._currentPainter.transform.localPosition.y - e), o._currentPainter.transform.localScale = o._currentPainter.transform.localScale)
                                })
                            }, 40, Laya.Ease.linearNone, Laya.Handler.create(o, function() {
                                o._currentPainterY = r, o._need2fill[o._currentWallIdx] = o._currentNeed2Fill, o._painting = !1, 0 === o._currentNeed2Fill && o.completeWall()
                            }))
                        }))
                    }))
                }
            }, e.prototype.completeWall = function() {
                var e = this;
                this._painterReady = !1, Laya.Tween.to(this._currentPainter.transform.localScale, {
                    x: 0,
                    y: 0,
                    update: new Laya.Handler(this, function() {
                        return e._currentPainter.transform.localScale = e._currentPainter.transform.localScale
                    })
                }, 200, Laya.Ease.sineInOut, Laya.Handler.create(this, function() {
                    return ue(e, void 0, void 0, function() {
                        var t, o, r, n = this;
                        return pe(this, function(e) {
                            console.log("-----------completeWall- " + e.label + "-----------");
                            if (e.label == 4) {
                                HUHU_showInterstitialAd()
                            }
                            switch (e.label) {
                                case 0:
                                    return this.removePainter(), this._currentWallIdx === this._stageInfo.walls.length - 1 || this._stageInfo.walls[this._currentWallIdx + 1] && this._stageInfo.walls[this._currentWallIdx + 1].completed ? 2 <= bt.FBUserData.bestScore ? [4, bt.showAd()] : [3, 2] : [3, 3];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return ye && Laya.SoundManager.playSound(oe, 1), this.playEffect(), this.moveCamera(), t = this.getDiamonds(), wt("clean_house", {
                                        stage: bt.FBUserData.bestScore
                                    }), this.event(G, t), [3, 4];
                                case 3:
                                    r = o = !1, Laya.Tween.to(this._cameraContainer.transform.localRotationEuler, {
                                        y: this._cameraContainer.transform.localRotationEuler.y + 90,
                                        update: new Laya.Handler(this, function() {
                                            n._cameraContainer.transform.localRotationEuler = n._cameraContainer.transform.localRotationEuler
                                        })
                                    }, 400, Laya.Ease.quadInOut, Laya.Handler.create(this, function() {
                                        o = !0, r && (wt("clean_wall", {
                                            stage: bt.FBUserData.bestScore,
                                            index: n._currentWallIdx
                                        }), n.setCurrentWall(n._currentWallIdx + 1), n.updatePainter())
                                    })), Laya.Tween.to(this._camera.transform.localPosition, {
                                        z: this.getCameraZ(this._currentWallIdx + 1),
                                        update: new Laya.Handler(this, function() {
                                            n._camera.transform.localPosition = n._camera.transform.localPosition
                                        })
                                    }, 400, Laya.Ease.quadInOut, Laya.Handler.create(this, function() {
                                        r = !0, o && (wt("clean_wall", {
                                            stage: bt.FBUserData.bestScore,
                                            index: n._currentWallIdx
                                        }), n.setCurrentWall(n._currentWallIdx + 1), n.updatePainter())
                                    })), e.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }))
            }, e.prototype.playEffect = function() {
                this._pd.active = !0, this._pd.transform.position = new Laya.Vector3(0, this._height + 8, 0), this._pd.particleSystem.play()
            }, e.prototype.moveCamera = function() {
                var e = this;
                this._cameraLocalPositionTween = Laya.Tween.to(this._camera.transform.localPosition, {
                    y: this._camera.transform.localPosition.y + 8,
                    z: this._camera.transform.localPosition.z - 3,
                    update: new Laya.Handler(this, function() {
                        e._camera.transform.localPosition = e._camera.transform.localPosition
                    })
                }, 2400, Laya.Ease.quadInOut, Laya.Handler.create(this, function() {
                    e._cameraLocalPositionTween.clear(), e._cameraLocalPositionTween = null
                })), this._cameraLocalRotationTween = Laya.Tween.to(this._camera.transform.localRotationEuler, {
                    x: this._camera.transform.localRotationEuler.x - 12,
                    update: new Laya.Handler(this, function() {
                        e._camera.transform.localRotationEuler = e._camera.transform.localRotationEuler
                    })
                }, 2400, Laya.Ease.quadInOut, Laya.Handler.create(this, function() {
                    e._cameraLocalRotationTween.clear(), e._cameraLocalRotationTween = null
                })), this._autoRotation = new Laya.Vector3, this._autoRotationTween = Laya.Tween.to(this._autoRotation, {
                    y: .032
                }, 1600, Laya.Ease.linearInOut, Laya.Handler.create(this, function() {
                    Laya.Tween.to(e._autoRotation, {
                        y: .01
                    }, 600, Laya.Ease.linearNone, Laya.Handler.create(e, function() {
                        e._autoRotationTween.clear(), e._autoRotationTween = null
                    }), 1e3)
                })), Laya.timer.frameLoop(1, this, this.rotateCamera)
            }, e.prototype.rotateCamera = function() {
                this._cameraContainer.transform.rotate(this._autoRotation, !0)
            }, e.prototype.getCameraZ = function(e) {
                var t = -32.6,
                    o = e % 2 == 0 ? this._length : this._width,
                    r = this._height;
                return t -= Math.min(14, 3.2 * Math.max(Math.abs(o - 4), Math.abs(r - 4)))
            }, e.prototype.getRandomColor = function() {
                return he[Math.min(Math.max(Math.floor(Math.random() * he.length), 0), he.length - 1)]
            }, e.prototype.getDiamonds = function() {
                var e = Math.min(Math.max(Math.floor(bt.FBUserData.bestScore / 10), 0), 5),
                    t = [20, 25, 30, 35, 40, 45][e],
                    o = [30, 35, 40, 45, 50, 55][e];
                return t + Math.round((o - t) * Math.random())
            }, e
        }(Laya.EventDispatcher),
        me = (V = function(e, t) {
            return (V = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            V(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        ge = function(o) {
            function e(e) {
                void 0 === e && (e = "");
                var t = o.call(this) || this;
                return t.font = m, t.fontSize = 28, t.color = "#ffffff", t.text = e, t
            }
            return me(e, o), e
        }(Laya.Text),
        _e = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        ve = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        be = void 0,
        Ie = function(n, a) {
            return void 0 === a && (a = !0), _e(be, void 0, void 0, function() {
                var t, o, r;
                return ve(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), t = void 0, t = n.minSize ? {
                                filters: n.filters,
                                minSize: n.minSize
                            } : {
                                filters: n.filters
                            }, [4, FBInstant.context.chooseAsync(t)];
                        case 1:
                            if (e.sent(), function() {
                                    var e = FBInstant.context.getID();
                                    if (!e) return;
                                    var t = FBInstant.context.isSizeBetween(3, null);
                                    if (t && t.answer) {
                                        var o = bt.FBUserData.group_contextIds; - 1 == o.indexOf(e) && o.push(e)
                                    }
                                }(), a && (o = FBInstant.context.getID(), 0 <= bt.FBUserData.sharedContextIds.indexOf(o))) throw (r = new Error).code = "SAME_CONTEXT", r;
                            return [3, 3];
                        case 2:
                            throw e.sent();
                        case 3:
                            return [2]
                    }
                })
            })
        };
    var we, Re, Oe, Te, Le, Ce, Ee, De, Ae, Be, Se, Pe = function(a) {
            return _e(be, void 0, void 0, function() {
                var t, o, r, n;
                return ve(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 6, , 7]), [4, bt.share.getShareInfo()];
                        case 1:
                            t = e.sent(), wt("get_news_msg", {
                                result: 1
                            }), o = t.image, r = t.tip, e.label = 2;
                        case 2:
                            return e.trys.push([2, 4, , 5]), [4, We(a, o, r, {
                                fromUserId: FBInstant.player.getID(),
                                entry: "user_msg"
                            })];
                        case 3:
                            return e.sent(), wt("update_msg", {
                                type: "news_msg",
                                result: 1
                            }), [3, 5];
                        case 4:
                            return n = e.sent(), wt("update_msg", {
                                type: "news_msg",
                                result: 0,
                                code: n ? n.code : ""
                            }), [3, 5];
                        case 5:
                            return [3, 7];
                        case 6:
                            return e.sent(), wt("get_news_msg", {
                                result: 0
                            }), [3, 7];
                        case 7:
                            return [2]
                    }
                })
            })
        },
        We = function(t, o, r, n, a) {
            return _e(be, void 0, void 0, function() {
                return ve(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, FBInstant.updateAsync({
                                action: "CUSTOM",
                                cta: a,
                                template: t,
                                image: o,
                                text: r,
                                data: n
                            })];
                        case 1:
                            return e.sent(), [3, 3];
                        case 2:
                            throw e.sent();
                        case 3:
                            return [2]
                    }
                })
            })
        },
        Ne = function(x) {
            return _e(be, void 0, void 0, function() {
                var t, o, r, n, a, s, i, y, c;
                return ve(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (t = new Laya.Sprite).size(600, 315), (o = new Laya.Image).skin = "home/news0.png", t.addChild(o), (r = new Laya.Image).source = Laya.loader.getRes("home/mask.png"), (n = d.LayaTool.createLayaImageByName("home/white.png")).pos(60, 80), t.addChild(n), a = FBInstant.player.getPhoto(), [4, d.LayaTool.loadTextureByUrl(a)];
                        case 1:
                            return s = e.sent(), (i = new Laya.Image).x = n.x + 7, i.y = n.y + 7, i.size(r.width, r.height), i.source = s, i.mask = r, t.addChild(i), (y = new Laya.Image("home/level.png")).pos(396, 80), t.addChild(y), (c = new ge).fontSize = 80, c.color = "#ffffff", c.align = "center", c.text = x + "", c.x = y.x + y.width / 2 - c.textWidth / 2, c.y = 133, t.addChild(c), [2, new Promise(function(e) {
                                e(t)
                            })]
                    }
                })
            })
        },
        Ke = function(n) {
            return _e(be, void 0, void 0, function() {
                var t, o, r = this;
                return ve(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ne(n)];
                        case 1:
                            return t = e.sent(), [4, d.LayaTool.generateImage(t)];
                        case 2:
                            return o = e.sent(), FBInstant.shareAsync({
                                intent: "SHARE",
                                image: o,
                                text: "Come and join us!",
                                data: {
                                    myReplayData: "..."
                                }
                            }).then(function() {
                                r.closeWindow(), wt("share", {
                                    type: "share2friend",
                                    result: 1
                                })
                            }).catch(function() {
                                wt("share", {
                                    type: "share2friend",
                                    result: 0
                                })
                            }), [2]
                    }
                })
            })
        },
        ke = (we = function(e, t) {
            return (we = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            we(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        Ve = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        Me = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        Fe = function(c) {
            function e() {
                var e = c.call(this) || this,
                    t = new Laya.Image("rank/baseboard_03.png");
                t.size(Laya.stage.width, Laya.stage.height), e.addChild(t);
                var o = new Laya.Image("rank/header.png");
                e.addChild(o);
                var r = new ge("RANK");
                r.fontSize = 72, r.pos((750 - r.textWidth) / 2, (o.height - r.textHeight) / 2), e.addChild(r);
                var n = new Laya.Image(E);
                n.pos(35, 42), e.addChild(n), n.on(Laya.Event.CLICK, e, function() {
                    e.event(j)
                });
                var a = new Laya.Image("rank/first_player_bg.png");
                a.pos(.5 * (Laya.stage.width - a.width), 150), e.addChild(a), e._theFirstPlayerPhoto = new Laya.Image, e._theFirstPlayerPhoto.pos(.5 * (Laya.stage.width - 160), a.y + 10).size(160, 160), e.addChild(e._theFirstPlayerPhoto), e._firstPlayerPhotoMask = new Laya.Image(C), e._theFirstPlayerPhoto.mask = e._firstPlayerPhotoMask, e._firstPlayerName = new ge, e._firstPlayerName.y = a.y + a.height - 60, e._firstPlayerName.fontSize = 40, e._firstPlayerName.color = "#f5f6f7", e.addChild(e._firstPlayerName);
                var s = new Laya.Image(T);
                s.sizeGrid = "20,20,20,20", s.size(694, 680 * bt.ScaleY).pos(.5 * (Laya.stage.width - 694), Laya.stage.height - 920 * bt.ScaleY), e.addChild(s), e._rankList = new Laya.List, e._rankList.pos(0, 20), e._rankList.itemRender = je, e._rankList.repeatX = 1, e._rankList.repeatY = 7, e._rankList.height = s.height - e._rankList.y - 90 - 20, e._rankList.spaceY = 13, e._rankList.vScrollBarSkin = "", e._rankList.selectEnable = !0, e._rankList.renderHandler = new Laya.Handler(e, e.updateItem), e._rankList.array = [], e._rankList.elasticEnabled = !0, s.addChild(e._rankList);
                var i = new Laya.Image;
                i.sizeGrid = "20,20,20,20", i.y = s.y + s.height + 20, i.x = 35, i.skin = T, i.width = 680, i.height = 90, e.addChild(i), e._selfRank = new ge, e._selfRank.color = "#f9f9f9", e._selfRank.fontSize = 32, e._selfRank.pos(60, 29), e._selfRank.align = "left", e._selfRank.valign = "middle", i.addChild(e._selfRank), e._selfPlayerPhoto = new Laya.Image, e._selfPlayerPhoto.x = 98, e._selfPlayerPhoto.pos(98, 10).size(70, 70), i.addChild(e._selfPlayerPhoto), e._selfPlayerPhotoMask = new Laya.Image(C), e._selfPlayerPhotoMask.size(70, 70), e._selfPlayerPhoto.mask = e._selfPlayerPhotoMask, e._selfPlayerName = new ge, e._selfPlayerName.size(200, 90).pos(189, 0), e._selfPlayerName.fontSize = 32, e._selfPlayerName.color = "#f9f9f9", e._selfPlayerName.align = "left", e._selfPlayerName.valign = "middle", i.addChild(e._selfPlayerName), e._selfScore = new ge, e._selfScore.width = 140, e._selfScore.height = 90, e._selfScore.align = "right", e._selfScore.valign = "middle", e._selfScore.x = i.width - 315, e._selfScore.y = 0, e._selfScore.fontSize = 32, e._selfScore.color = "#f9f9f9", i.addChild(e._selfScore);
                var y = new Laya.Image(L);
                return y.size(130, 60).pos(i.width - 156, 15), i.addChild(y), y.on(Laya.Event.CLICK, e, function() {
                    return Ve(e, void 0, void 0, function() {
                        var t;
                        return Me(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = bt.myselfInfo.score, [4, Ke(t)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), e.on(Laya.Event.ADDED, e, e.onAddToStage), e
            }
            return ke(e, c), e.prototype.onAddToStage = function() {
                this._firstPlayerName.text = bt.rankInfos.length ? bt.rankInfos[0].name : "", this._firstPlayerName.x = .5 * (Laya.stage.width - this._firstPlayerName.textWidth), this.updateRankList(bt.rankInfos, bt.myselfInfo)
            }, e.prototype.updateItem = function(e, t) {
                e.setPlayerInRank(e.dataSource), e.on(U, this, this.onCeilClick)
            }, e.prototype.onCeilClick = function() {
                this.event(U)
            }, e.prototype.back2Game = function(e) {
                wt("click", {
                    place: "return",
                    view: "Rank"
                }), this.event(j)
            }, e.prototype.updateRankList = function(e, t) {
                var o = e[0] || bt.myselfInfo;
                Laya.loader.load(o.photo, Laya.Handler.create(this, this.imageLoadComplete, [o.photo])), this._rankList.array = e, this.setSelfPlayerMsg(t)
            }, e.prototype.setSelfPlayerMsg = function(e) {
                this._selfRank.text = e.rank + "", this._selfScore.text = e.score + "", this._selfPlayerName.text = e.name, Laya.loader.load(e.photo, Laya.Handler.create(this, this.selfImageLoadComplete, [e.photo]))
            }, e.prototype.imageLoadComplete = function(e) {
                this._theFirstPlayerPhoto.skin = e
            }, e.prototype.selfImageLoadComplete = function(e) {
                this._selfPlayerPhoto.skin = e
            }, e
        }(Laya.Sprite),
        je = function(o) {
            function e() {
                var e = o.call(this) || this;
                e._playId = "";
                var t = new Laya.Image;
                return t.skin = "rank/baseboard_01.png", t.size(650, 90).pos(15, 0), e.addChild(t), e._playerPhoto = new Laya.Image, e._playerPhoto.size(70, 70).pos(95, 10), e.addChild(e._playerPhoto), e._photoMask = new Laya.Image, e._photoMask.skin = C, e._photoMask.size(70, 70), e._playerPhoto.mask = e._photoMask, e._playerName = new ge, e._playerName.size(200, 90).pos(190, 0), e._playerName.fontSize = 32, e._playerName.align = "left", e._playerName.valign = "middle", e.addChild(e._playerName), e._score = new ge, e._score.size(140, 90).pos(t.x + t.width - 300, 0), e._score.align = "right", e._score.valign = "middle", e._score.fontSize = 32, e.addChild(e._score), e._playIcon = new Laya.Image, e._playIcon.pos(t.x + t.width - 142, 12.5), e._playIcon.skin = "rank/button_play.png", e.addChild(e._playIcon), e._playIcon.on(Laya.Event.MOUSE_DOWN, e, e.onMouseDown), e._shareIcon = new Laya.Image, e._shareIcon.pos(t.x + t.width - 142, 12.5), e._shareIcon.skin = L, e.addChild(e._shareIcon), e._shareIcon.on(Laya.Event.CLICK, e, e.onMouseDown), e
            }
            return ke(e, o), e.prototype.onMouseDown = function() {
                return Ve(this, void 0, void 0, function() {
                    var t, o = this;
                    return Me(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this._playIcon.visible ? (FBInstant.context.createAsync(this._playId).then(function() {
                                    o.event(U), wt("create", {
                                        type: "play_with_friend",
                                        result: 1
                                    }), Pe("play_friendly").then()
                                }).catch(function() {
                                    wt("create", {
                                        type: "play_with_friend",
                                        result: 0
                                    })
                                }), [3, 3]) : [3, 1];
                            case 1:
                                return t = parseInt(this._score.text), [4, Ke(t)];
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.setPlayerInRank = function(e) {
                if (this._playerName.text = e.name, this._score.text = e.score + "", this._playId = e.id, this.removeChild(this._rank), 3 < e.rank) {
                    var t = new ge;
                    t.color = "#ffffff", t.fontSize = 32, t.text = e.rank + "", t.x = 48, t.y = 29, this._rank = t, this.addChild(t)
                } else this._rank = new Laya.Image, this._rank.pos(36, 25), this.addChild(this._rank), this._rank.skin = "rank/" + e.rank + ".png";
                e.id === bt.myselfInfo.id ? (this._playIcon.visible = !1, this._shareIcon.visible = !0) : (this._playIcon.visible = !0, this._shareIcon.visible = !1), Laya.loader.load(e.photo, Laya.Handler.create(this, this.imageLoadComplete, null, !0))
            }, e.prototype.imageLoadComplete = function(e) {
                if (e && e.width && e.height) {
                    this._photoMask.size(e.width, e.height);
                    var t = Math.max(70 / e.width, 70 / e.height);
                    this._playerPhoto.graphics.drawTexture(e), this._playerPhoto.scale(t, t)
                }
            }, e
        }(Laya.Box),
        Ue = (Re = function(e, t) {
            return (Re = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Re(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        ze = function(o) {
            function e() {
                var e = o.call(this) || this;
                e.size(Laya.stage.width, Laya.stage.height), e.on(Laya.Event.MOUSE_DOWN, e, function(e) {
                    return e.stopPropagation()
                }), e.on(Laya.Event.MOUSE_UP, e, function(e) {
                    return e.stopPropagation()
                }), e.on(Laya.Event.CLICK, e, function(e) {
                    return e.stopPropagation()
                });
                var t = new Laya.Sprite;
                return t.graphics.save(), t.graphics.alpha(.5), t.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), t.graphics.restore(), e.addChild(t), e._loadingADImg = d.LayaTool.createLayaImageByName("home/loading_ad.png"), console.log(e._loadingADImg.width, e._loadingADImg.height), e._loadingADImg.pivot(.5 * e._loadingADImg.width, .5 * e._loadingADImg.height).pos(.5 * Laya.stage.width, .5 * Laya.stage.height), e.addChild(e._loadingADImg), e
            }
            return Ue(e, o), e.prototype.showLoading = function() {
                this.beginRotate(), Laya.stage.addChild(this)
            }, e.prototype.removeLoading = function() {
                this.endRotate(), Laya.stage.removeChild(this)
            }, e.prototype.beginRotate = function() {
                var e = this;
                this.endRotate(), this._tween = Laya.Tween.to(this._loadingADImg, {
                    rotation: 360
                }, 600, Laya.Ease.linearInOut, Laya.Handler.create(this, function() {
                    return e.beginRotate()
                }))
            }, e.prototype.endRotate = function() {
                this._tween && Laya.Tween.clear(this._tween), this._tween = null, this._loadingADImg.rotation = 0
            }, e
        }(Laya.Sprite),
        Xe = (Oe = function(e, t) {
            return (Oe = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Oe(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        He = {
            "home/button_friend.png": "60,65,60,65",
            "settlement/button_zi.png": "55,58,55,58",
            "settlement/button_lv.png": "40,70,40,70"
        },
        Ge = function(a) {
            function e(e, t, o, r) {
                var n = a.call(this, e, t) || this;
                return n._labelProps = o, n._iconProps = r, n.sizeGrid = He[n.skin], n.labelFont = m, n.labelAlign = "center", n.stateNum = 2, n._labelProps && (n.labelSize = o.fontSize, n.labelColors = o.colors), n._iconProps && (n._icon = d.LayaTool.createLayaImageByName(n._iconProps.url), n.addChild(n._icon)), n
            }
            return Xe(e, a), e.prototype.getIconProps = function() {
                return this._iconProps
            }, e.prototype.updateLabelNIcon = function(e, t, o) {
                this.label = e, t && (this.labelSize = t.fontSize, this.labelColors = t.colors, this._labelProps = t), this._iconProps = o, this._icon && (this._icon.removeSelf(), this._icon = null), o && o.url && (this._icon = d.LayaTool.createLayaImageByName(this._iconProps.url)), this.addChild(this._icon), this.changeState()
            }, e.prototype.updateIcon = function(e) {
                this._iconProps = e, this._icon && (this._icon.removeSelf(), this._icon = null), this._icon = d.LayaTool.createLayaImageByName(this._iconProps.url), this.addChild(this._icon), this.changeState()
            }, e.prototype.changeState = function() {
                a.prototype.changeState.call(this), 0 === this.state ? (this._icon && (this._icon.x = this._iconProps.mux, this._icon.y = this._iconProps.muy), this.labelPadding = this._labelProps ? this._labelProps.mu : "0,0,0,0") : 2 === this.state && (this._icon && (this._icon.x = this._iconProps.mdx, this._icon.y = this._iconProps.mdy), this.labelPadding = this._labelProps ? this._labelProps.md : "0,0,0,0")
            }, e
        }(Laya.Button),
        Ye = (Te = function(e, t) {
            return (Te = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Te(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        $e = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        qe = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        Je = function(o) {
            function e() {
                var e = o.call(this) || this;
                e._isShowSetting = !1, e.size(Laya.stage.width, Laya.stage.height), e._settingBtn = new Ge(b, "", null, {
                    url: "home/setting.png",
                    mux: 20,
                    muy: 21,
                    mdx: 20,
                    mdy: 23
                }), e._settingBtn.pos(36, 80 * bt.ScaleY), e.addChild(e._settingBtn), e._settingBtn.on(Laya.Event.CLICK, e, e.toggleShowSettings), e._voiceBtn = new Ge(b, "", null, null), e._voiceBtn.pos(36, e._settingBtn.y + e._settingBtn.height + 14), bt.FBUserData.isVoiceOn ? e._voiceBtn.updateIcon({
                    url: O,
                    mux: 25,
                    muy: 31,
                    mdx: 25,
                    mdy: 33
                }) : e._voiceBtn.updateIcon({
                    url: R,
                    mux: 25,
                    muy: 31,
                    mdx: 35,
                    mdy: 33
                }), e._voiceBtn.on(Laya.Event.CLICK, e, e.toggleVoiceState), bt.FBUserData.isVoiceOn ? ce() : xe(), e.addChild(e._voiceBtn), e._voiceBtn.visible = !1, e._vibrateBtn = new Ge(b, "", null, null), e._vibrateBtn.pos(36, e._voiceBtn.y + e._voiceBtn.height + 14), bt.FBUserData.isVibrateOn ? e._vibrateBtn.updateIcon({
                    url: w,
                    mux: 25,
                    muy: 26,
                    mdx: 25,
                    mdy: 28
                }) : e._vibrateBtn.updateIcon({
                    url: I,
                    mux: 25,
                    muy: 26,
                    mdx: 25,
                    mdy: 28
                }), e._vibrateBtn.on(Laya.Event.CLICK, e, e.toggleVibrateState), e.addChild(e._vibrateBtn), e._vibrateBtn.visible = !1;
                var t = new Laya.Image("home/logo.png");
                return t.pos((750 - t.width) / 2, 160 * bt.ScaleY), e.addChild(t), e._playFriendly = new Ge(_, ""), e._playFriendly.pos(100, Laya.stage.height - 370 * bt.ScaleY), e._playSingle = new Ge("home/button_play.png", ""), e._playSingle.pos((750 - e._playSingle.width) / 2, e._playFriendly.y), e.addChild(e._playSingle), e._playSingle.on(Laya.Event.CLICK, e, e.playSingle), e._rankBtn = new Ge(v, "", null, {
                    url: "home/rank_icon.png",
                    mdx: 28,
                    mdy: 36,
                    mux: 28,
                    muy: 32
                }), e._rankBtn.pos(215, e._playFriendly.y + e._playFriendly.height + 20), e._rankBtn.on(Laya.Event.CLICK, e, e.showRankPage), e._skinBtn = new Ge(v, "", null, {
                    url: "home/skin.png",
                    mdx: 17,
                    mdy: 47,
                    mux: 17,
                    muy: 42
                }), e._skinBtn.pos((750 - e._skinBtn.width) / 2, e._rankBtn.y), e.addChild(e._skinBtn), e._skinBtn.on(Laya.Event.CLICK, e, e.showSkinPage), e
            }
            return Ye(e, o), e.prototype.showRankPage = function() {
                this.event(z)
            }, e.prototype.showSkinPage = function() {
                this.event(X)
            }, e.prototype.playFriendly = function() {
                return $e(this, void 0, void 0, function() {
                    var t;
                    return qe(this, function(e) {
                        switch (e.label) {
                            case 0:
                                (t = new ze).showLoading(), e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, Ie({
                                    filters: ["NEW_CONTEXT_ONLY"]
                                }, !1)];
                            case 2:
                                return e.sent(), wt("choose", {
                                    type: "play friendly",
                                    result: 1
                                }), Pe("play_friendly").then(), [3, 4];
                            case 3:
                                return e.sent(), wt("choose", {
                                    type: "play friendly",
                                    result: 0
                                }), [3, 4];
                            case 4:
                                return t.removeLoading(), this.event(H), [2]
                        }
                    })
                })
            }, e.prototype.playSingle = function() {
                this.event(H);
                if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
                    gdsdk.showAd();
                }
            }, e.prototype.toggleShowSettings = function() {
                this._isShowSetting ? (this._isShowSetting = !1, this._vibrateBtn.visible = !1, this._voiceBtn.visible = !1) : (this._isShowSetting = !0, this._vibrateBtn.visible = !0, this._voiceBtn.visible = !0)
            }, e.prototype.toggleVoiceState = function() {
                bt.FBUserData.isVoiceOn = bt.FBUserData.isVoiceOn ? 0 : 1, bt.FBUserData.isVoiceOn ? ce() : xe(), bt.FBUserData.isVoiceOn ? this._voiceBtn.updateIcon({
                    url: O,
                    mux: 25,
                    muy: 31,
                    mdx: 25,
                    mdy: 33
                }) : this._voiceBtn.updateIcon({
                    url: R,
                    mux: 25,
                    muy: 31,
                    mdx: 25,
                    mdy: 33
                })
            }, e.prototype.toggleVibrateState = function() {
                bt.FBUserData.isVibrateOn = bt.FBUserData.isVibrateOn ? 0 : 1, bt.FBUserData.isVibrateOn ? this._vibrateBtn.updateIcon({
                    url: w,
                    mux: 25,
                    muy: 26,
                    mdx: 25,
                    mdy: 28
                }) : this._vibrateBtn.updateIcon({
                    url: I,
                    mux: 25,
                    muy: 26,
                    mdx: 25,
                    mdy: 28
                })
            }, e
        }(Laya.Sprite),
        Ze = (Le = function(e, t) {
            return (Le = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Le(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        Qe = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        et = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        tt = function(i) {
            function e() {
                var e = i.call(this) || this;
                e._direction = !1;
                var t = new Laya.Image("skin/bg.png");
                t.size(Laya.stage.width, Laya.stage.height), e.addChild(t);
                var o = new Laya.Image("skin/bg2.png");
                o.sizeGrid = "420,10,310,10", o.size(Laya.stage.width, Laya.stage.height), e.addChild(o);
                var r = new Laya.Image(E);
                e.addChild(r), r.pos(36, 40 * bt.ScaleY + 60), r.on(Laya.Event.CLICK, e, function() {
                    Laya.timer.clearAll(e), e.event(j)
                });
                var n = new ge("SKIN");
                n.fontSize = 72, n.pos(.5 * (Laya.stage.width - n.textWidth), 36 * bt.ScaleY), e.addChild(n);
                var a = new Laya.Image(D);
                a.pos(660, 80 * bt.ScaleY), e.addChild(a), e._diamondNum = new ge("0"), e._diamondNum.fontSize = 42, e._diamondNum.pos(260, a.y), e._diamondNum.width = 385, e._diamondNum.height = a.height, e._diamondNum.align = "right", e._diamondNum.valign = "middle", e.addChild(e._diamondNum), e._light1 = new Laya.Image(A), e._light1.anchorX = .5, e._light1.anchorY = .5, e._light1.pos(.5 * Laya.stage.width, 240 * bt.ScaleY).scale(1.5, 1.5), e.addChild(e._light1), e._light2 = new Laya.Image(A), e._light2.anchorX = .5, e._light2.anchorY = .5, e._light2.pos(e._light1.x, e._light1.y).scale(1.5, 1.5), e.addChild(e._light2);
                var s = new Laya.Image("skin/effect_light_bg.png");
                return s.anchorX = .5, s.anchorY = .5, s.pos(e._light1.x, e._light1.x).scale(1.5, 1.5), e.addChild(s), e._currentSkinContainer = new Laya.Sprite, e._currentSkinContainer.pos(375, e._light1.y), e._curSelectSkin = new Laya.Image, e._curSelectSkin.size(200, 200).pos(-100, -100), e._currentSkinContainer.addChild(e._curSelectSkin), e.addChild(e._currentSkinContainer), e._skinList = new Laya.List, e._skinList.pos(110, 440 * bt.ScaleY), e._skinList.repeatX = 3, e._skinList.repeatY = 3, e._skinList.spaceX = 40, e._skinList.spaceY = 42, e._skinList.vScrollBarSkin = "", e._skinList.itemRender = ot, e._skinList.renderHandler = new Laya.Handler(e, e.updateItem), e._skinList.mouseHandler = new Laya.Handler(e, e.onClick), e.addChild(e._skinList), e._skinList.height = 560 * bt.ScaleY, .75 <= Laya.stage.width / Laya.stage.height && (e._skinList.y = 440, e._skinList.height = 220), e._watchVideoBtn = new Ge("skin/button_orange.png", "+500", {
                    fontSize: 50,
                    colors: "#fff,#fff",
                    md: "12,30,40,60",
                    mu: "10,30,40,60"
                }, {
                    url: "skin/watch_video_text.png",
                    mux: 40,
                    muy: 10,
                    mdx: 40,
                    mdy: 12
                }), e.addChild(e._watchVideoBtn), e._watchVideoBtn.pos(70, 1100 * bt.ScaleY), e._watchVideoBtn.on(Laya.Event.CLICK, e, e.watchVideoToEarnDiamonds), e._unlockOrUseBtn = new Ge("skin/button_lv.png", "", null, null), e._unlockOrUseBtn.pos(360, e._watchVideoBtn.y), e.addChild(e._unlockOrUseBtn), e._unlockOrUseBtn.on(Laya.Event.CLICK, e, e.unlockOrUseSkin), e._unlockOrUseBtn.updateLabelNIcon("1000", {
                    md: "40,30,40,60",
                    mu: "40,30,40,60",
                    fontSize: 50,
                    colors: "#fff,#fff"
                }, {
                    url: D,
                    mux: 60,
                    muy: 40,
                    mdx: 60,
                    mdy: 44
                }), e.on(Laya.Event.ADDED, e, e.onAddedToStage), e
            }
            return Ze(e, i), Object.defineProperty(e.prototype, "diamondCount", {
                set: function(e) {
                    bt.FBUserData.diamonds = e, this._diamondNum.text = "" + bt.FBUserData.diamonds
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onAddedToStage = function() {
                var t = this;
                u.forEach(function(e) {
                    var t = bt.FBUserData.skins[e.id];
                    t && (e.available = t.available, e.selected = e.id === bt.FBUserData.skinId)
                }), this.updateDataSource(), this.diamondCount = bt.FBUserData.diamonds, this._curSelectSkin.skin = "skins/" + bt.FBUserData.skinId + ".png", u.forEach(function(e) {
                    e.id === bt.FBUserData.skinId && t.updateBtnBySkinInfo(e)
                }), Laya.timer.frameLoop(1, this, function() {
                    t._light1.rotation += 1, t._light2.rotation -= 1, 1 <= t._currentSkinContainer.scaleX && (t._direction = !0), t._currentSkinContainer.scaleX <= .8 && (t._direction = !1), t._direction ? (t._currentSkinContainer.scaleX -= .005, t._currentSkinContainer.scaleY -= .005) : (t._currentSkinContainer.scaleX += .005, t._currentSkinContainer.scaleY += .005)
                })
            }, e.prototype.updateBtnBySkinInfo = function(e) {
                (this._curSelectSkinInfo = e).available ? this._unlockOrUseBtn.updateLabelNIcon("", null, {
                    url: "skin/use.png",
                    mux: 130,
                    muy: 40,
                    mdx: 130,
                    mdy: 40
                }) : this._unlockOrUseBtn.updateLabelNIcon("" + e.cost, {
                    md: "40,30,40,60",
                    mu: "40,30,40,60",
                    fontSize: 50,
                    colors: "#fff,#fff"
                }, {
                    url: D,
                    mux: 60,
                    muy: 40,
                    mdx: 60,
                    mdy: 44
                })
            }, e.prototype.updateDataSource = function() {
                this._skinList.array = u
            }, e.prototype.unlockOrUseSkin = function() {
                var t = this,
                    e = u.findIndex(function(e) {
                        return e.id === t._curSelectSkinInfo.id
                    });
                if (0 <= e) {
                    var o = u[e];
                    o.available ? (bt.FBUserData.skinId = o.id, this.event(j)) : o.cost <= bt.FBUserData.diamonds ? (this.diamondCount = bt.FBUserData.diamonds - o.cost, o.available = !0, bt.FBUserData.skins[o.id].available = !0, this.updateBtnBySkinInfo(o), this.updateDataSource()) : Lt("Not enough diamonds!", m, 0, 0, 32)
                }
            }, e.prototype.updateItem = function(e) {
                e.setItemInfo(e.dataSource)
            }, e.prototype.onClick = function(o, r) {
                return Qe(this, void 0, void 0, function() {
                    var t;
                    return et(this, function(e) {
                        if (o.type === Laya.Event.CLICK) {
                            if (!(t = this._skinList.array[r])) return [2];
                            u.forEach(function(e) {
                                e.selected = !1
                            }), t.selected = !0, this._curSelectSkin.skin = "skins/" + t.id + ".png", this.updateDataSource(), this.updateBtnBySkinInfo(t)
                        }
                        return [2]
                    })
                })
            }, e.prototype.watchVideoToEarnDiamonds = function() {
                return Qe(this, void 0, void 0, function() {
                    var t;
                    return et(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!bt.ad.hasRAD()) return [3, 5];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, bt.ad.showRAD()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return t = e.sent(), console.log("user cancel rad", t), [3, 4];
                            case 4:
                                return bt.lastShowAdTime = bt.lastShowRadTime = Math.floor((new Date).getTime() / 1e3), this.diamondCount = bt.FBUserData.diamonds + 500, [3, 6];
                            case 5:
                                Lt("Ad is not ready!", m, 0, 0, 32), e.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, e
        }(Laya.Sprite),
        ot = function(o) {
            function e() {
                var e = o.call(this) || this;
                e.size(148, 148);
                var t = new Laya.Image("skin/bottom.png");
                return e.addChild(t), e._skinIcon = new Laya.Image, e._skinIcon.pos(14, 14), e._skinIcon.size(120, 120), e.addChild(e._skinIcon), e._lockMask = new Laya.Image("skin/mask.png"), e.addChild(e._lockMask), e._lockIcon = new Laya.Image("skin/lock.png"), e._lockIcon.pos(100, 95), e.addChild(e._lockIcon), e._selectedIcon = new Laya.Image("skin/selected.png"), e.addChild(e._selectedIcon), e
            }
            return Ze(e, o), e.prototype.setItemInfo = function(e) {
                this._skinIcon.skin = "skins/" + e.id + ".png", e.available ? (this._lockIcon.visible = !1, this._lockMask.visible = !1) : (this._lockIcon.visible = !0, this._lockMask.visible = !0), this._selectedIcon.visible = e.selected
            }, e
        }(Laya.Box),
        rt = (Ce = function(e, t) {
            return (Ce = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Ce(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        nt = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        at = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        st = function(s) {
            function e() {
                var e = s.call(this) || this;
                e._startAniPos = new Laya.Point(325, 850 * bt.ScaleY), e._endAniPos = new Laya.Point(660, 80 * bt.ScaleY), e._diamonds = 0;
                var t = new Laya.Image("settlement/title_bg.png");
                t.pos((750 - t.width) / 2, 120 * bt.ScaleY), e.addChild(t);
                var o = new Laya.Image("settlement/level_complete_text.png");
                t.addChild(o);
                var r = .75 <= Laya.stage.width / Laya.stage.height ? 580 : 500,
                    n = new Laya.Image("settlement/diamond_bg.png");
                n.pos(.5 * (Laya.stage.width - n.width), Laya.stage.height - r * bt.ScaleY), e.addChild(n);
                var a = new Laya.Image(D);
                return a.pos(.5 * Laya.stage.width - n.x - a.width - 5, .5 * (n.height - a.height)), n.addChild(a), e._obtainDiamondNum = new ge, e._obtainDiamondNum.align = "left", e._obtainDiamondNum.valign = "middle", e._obtainDiamondNum.fontSize = 42, e._obtainDiamondNum.text = "+0", e._obtainDiamondNum.pos(.5 * Laya.stage.width - n.x + 5, .5 * (n.height - e._obtainDiamondNum.textHeight)), n.addChild(e._obtainDiamondNum), r = .75 <= Laya.stage.width / Laya.stage.height ? 500 : 360, e._continueBtn = new Ge(P, "CONTINUE", {
                    mu: "0,0,0,0",
                    md: "0,0,0,0",
                    fontSize: 60,
                    colors: "#fff,#fff"
                }), e._continueBtn.size(360, 124).pos((Laya.stage.width - e._continueBtn.width) / 2, Laya.stage.height - r * bt.ScaleY), e.addChild(e._continueBtn), e._watchVideo2ReviveBtn = new Ge(B, "x 5", {
                    mu: "30,70,30,120",
                    md: "30,70,30,120",
                    fontSize: 60,
                    colors: "#fff,#fff"
                }, {
                    url: "settlement/video.png",
                    mux: 80,
                    muy: 33,
                    mdx: 80,
                    mdy: 35
                }), e._watchVideo2ReviveBtn.size(360, 124).pos(.5 * (Laya.stage.width - e._watchVideo2ReviveBtn.width), e._continueBtn.y + 150), e.addChild(e._watchVideo2ReviveBtn), e.on(Laya.Event.ADDED, e, e.onAdded2Stage), e.on(Laya.Event.REMOVED, e, e.onRemoved2Stage), e
            }
            return rt(e, s), e.prototype.onAdded2Stage = function() {
                this._continueBtn.on(Laya.Event.CLICK, this, this.claimDiamonds), this._watchVideo2ReviveBtn.on(Laya.Event.CLICK, this, this.claim5Diamonds);
            }, e.prototype.claimDiamonds = function() {
                this._continueBtn.off(Laya.Event.CLICK, this, this.claimDiamonds), ye && Laya.SoundManager.playSound(re, 1), this.event(Y, this._diamonds);
                if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
                    gdsdk.showAd();
                }
            }, e.prototype.claim5Diamonds = function() {
                return nt(this, void 0, void 0, function() {
                    var t;
                    return at(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!bt.ad.hasRAD()) return [3, 5];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, bt.ad.showRAD()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return t = e.sent(), console.log("user cancel rad", t), [3, 4];
                            case 4:
                                return bt.lastShowAdTime = bt.lastShowRadTime = Math.floor((new Date).getTime() / 1e3), ye && Laya.SoundManager.playSound(ne, 1), this.event(Y, 5 * this._diamonds), [3, 6];
                            case 5:
                                Lt("Ad is not ready!", m, 0, 0, 32), e.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, e.prototype.onRemoved2Stage = function() {
                Laya.timer.clearAll(this), this._continueBtn.off(Laya.Event.CLICK, this, this.claimDiamonds), this._watchVideo2ReviveBtn.off(Laya.Event.CLICK, this, this.claim5Diamonds)
            }, e.prototype.updateDiamonds = function(e) {
                this._diamonds = e, this._obtainDiamondNum.text = "+" + e
            }, e
        }(Laya.Sprite),
        it = (Ee = function(e, t) {
            return (Ee = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Ee(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        yt = function(c) {
            function e(e, t, o, r, n, a, s, i) {
                var y = c.call(this) || this;
                return y._val = e, y._text = new Laya.Text, y._text.font = t, y._text.fontSize = o, y._text.color = a, y._text.size(r, n), y._text.align = s, y._text.valign = i, y._text.text = y._val + "", y.addChild(y._text), y
            }
            return it(e, c), e.prototype.setText = function(e, t) {
                var o = this;
                if (void 0 === t && (t = !1), t) this._text.text = e + "";
                else {
                    var r = {
                        val: this._val
                    };
                    Laya.Tween.to(r, {
                        val: e,
                        update: new Laya.Handler(this, function() {
                            o._val = Math.floor(r.val), o._text.text = o._val + ""
                        })
                    }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        o._text.text = e + "", o._val = e
                    }))
                }
            }, e
        }(Laya.Sprite),
        ct = (De = function(e, t) {
            return (De = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            De(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        xt = function(o) {
            function e() {
                var e = o.call(this) || this;
                e._levelBg = new Laya.Image("settlement/level_bg.png"), e._levelBg.pos((Laya.stage.width - e._levelBg.width) / 2, 40 * bt.ScaleY), e.addChild(e._levelBg), e._level = new ge, e._level.fontSize = 42, e._level.text = "LEVEL 120", e._level.size(e._levelBg.width, e._levelBg.height), e._level.align = "center", e._level.valign = "middle", e._levelBg.addChild(e._level);
                var t = new Laya.Image(D);
                return t.pos(660, 80 * bt.ScaleY), e.addChild(t), e._diamondNum = new yt(bt.FBUserData.diamonds, m, 42, 385, t.height, "#666666", "right", "middle"), e._diamondNum.pos(260, t.y), e._diamondNum.width = 385, e.addChild(e._diamondNum), e
            }
            return ct(e, o), e.prototype.updateLevel = function() {
                this._level.text = "LEVEL " + (bt.FBUserData.bestScore + 1)
            }, e.prototype.increaseDiamonds = function(e) {
                bt.FBUserData.diamonds += e, this._diamondNum.setText(bt.FBUserData.diamonds)
            }, e.prototype.updateDiamonds = function() {
                this._diamondNum.setText(bt.FBUserData.diamonds, !0)
            }, e.prototype.hideLevelInfo = function() {
                this._levelBg.visible = !1, this._level.visible = !1
            }, e.prototype.showLevelInfo = function() {
                this._levelBg.visible = !0, this._level.visible = !0
            }, e
        }(Laya.Sprite),
        dt = (Ae = function(e, t) {
            return (Ae = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Ae(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        lt = function(t) {
            function e() {
                var e = t.call(this) || this;
                return laya.utils.Browser.onPC ? e._tutorialBg = new Laya.Image("home/tip2.png") : (e._tutorialBg = new Laya.Image("home/slide.png"), e._dash = new Laya.Image("home/dash.png"), e._tutorialBg.addChild(e._dash), e._hand = new Laya.Image("home/hand.png"), e._tutorialBg.addChild(e._hand)), e.addChild(e._tutorialBg), e.size(e._tutorialBg.width, e._tutorialBg.height), e.on(Laya.Event.ADDED, e, e.onAdded2Stage), e.on(Laya.Event.REMOVED, e, e.onRemovedFromStage), e
            }
            return dt(e, t), e.prototype.onAdded2Stage = function() {
                laya.utils.Browser.onPC || this.moveHorizontal()
            }, e.prototype.onRemovedFromStage = function() {
                this._tween && (this._tween.clear(), this._tween = null)
            }, e.prototype.moveVertical = function() {
                this._tween && this._tween.clear(), this._dash.rotation = -90, this._dash.pos(.5 * this._tutorialBg.width, .5 * this._tutorialBg.height + 30), this._hand.rotation = -90, this._hand.pos(this._dash.x, this._dash.y), this._tween = Laya.Tween.to(this._hand, {
                    y: this._hand.y - this._dash.width + this._hand.width
                }, 1e3, Laya.Ease.sineInOut, Laya.Handler.create(this, this.moveHorizontal), 200)
            }, e.prototype.moveHorizontal = function() {
                this._tween && this._tween.clear(), this._dash.rotation = 0, this._dash.pos(.5 * (this._tutorialBg.width - this._dash.width), .5 * (this._tutorialBg.height - this._dash.height) - 45), this._hand.rotation = 0, this._hand.pos(this._dash.x, this._dash.y), this._tween = Laya.Tween.to(this._hand, {
                    x: this._hand.x + this._dash.width - this._hand.width
                }, 1e3, Laya.Ease.sineInOut, Laya.Handler.create(this, this.moveVertical), 200)
            }, e
        }(Laya.Sprite),
        ut = (Be = function(e, t) {
            return (Be = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Be(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        pt = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._isShowingTutorial = !1, e._gameVersion = new Laya.Text, e._gameVersion.text = "1.1.3", e._gameVersion.fontSize = 12, e._gameVersion.x = Laya.stage.width - e._gameVersion.textWidth, e._gameVersion.y = Laya.stage.height - e._gameVersion.textHeight, e.addChild(e._gameVersion), e._battlePage = new xt, e.addChild(e._battlePage), e._subPage = new Laya.Sprite, e.addChild(e._subPage), e
            }
            return ut(e, t), e.prototype.showHomePage = function() {
                this._homePage || (this._homePage = new Je, this._homePage.on(z, this, this.showRankPage), this._homePage.on(X, this, this.showSkinPage), this._homePage.on(H, this, this.enterGame)), this._subPage.removeChildren(), this._subPage.addChild(this._homePage), this._battlePage.updateLevel(), this._battlePage.updateDiamonds()
            }, e.prototype.showRankPage = function() {
                var e = this;
                this._rankPage || (this._rankPage = new Fe, this._rankPage.on(j, this, function() {
                    e.showHomePage()
                }), this._rankPage.on(U, this, function() {
                    e.enterGame()
                })), this._subPage.removeChildren(), this._subPage.addChild(this._rankPage)
            }, e.prototype.showSkinPage = function() {
                var e = this;
                this._skinPage || (this._skinPage = new tt, this._skinPage.on(j, this, function() {
                    e.showHomePage()
                })), this._subPage.removeChildren(), this._subPage.addChild(this._skinPage)
            }, e.prototype.enterGame = function() {
                this._subPage.removeChildren(), this.event(H)
            }, e.prototype.showSettlementPage = function(e) {
                var t = this;
                this._settlementPage || (this._settlementPage = new st, this._settlementPage.on(Y, this, function(e) {
                    bt.FBUserData.bestScore += 1, t.showHomePage(), t._battlePage.increaseDiamonds(e), t.event(Y)
                })), this._subPage.removeChildren(), this._settlementPage.updateDiamonds(e), this._subPage.addChild(this._settlementPage)
            }, e.prototype.showTutorialAnimation = function() {
                this._tutorial = new lt, this._tutorial.pos((Laya.stage.width - this._tutorial.width) / 2, Laya.stage.height - 100 * bt.ScaleY - this._tutorial.height), Laya.stage.addChild(this._tutorial), this._isShowingTutorial = !0
            }, e.prototype.stopTutorialAnimation = function() {
                this._isShowingTutorial && (this._isShowingTutorial = !1, Laya.stage.removeChild(this._tutorial))
            }, e
        }(Laya.Sprite),
        ht = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        ft = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        mt = function() {
            function e() {
                var e = this;
                this._imagesLoaded = !1, this._shareImageStr = {}, this._imageSrcList = [], this._tipList = ["Come and challenge me!"], Laya.loader.load(this._imageSrcList, Laya.Handler.create(this, function() {
                    e._imagesLoaded = !0
                }))
            }
            return e.prototype.getShareInfo = function() {
                return ht(this, void 0, void 0, function() {
                    var t, o, r, n;
                    return ft(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = 0, this._imagesLoaded && (t = Math.min(Math.round(Math.random() * this._imageSrcList.length), this._imageSrcList.length - 1)), [4, this.getShareImageStr(t)];
                            case 1:
                                return o = e.sent(), r = this._tipList[t], n = {
                                    image: o,
                                    tip: r
                                }, [2, new Promise(function(e) {
                                    e(n)
                                })]
                        }
                    })
                })
            }, e.prototype.getShareImageStr = function(s) {
                return ht(this, void 0, void 0, function() {
                    var t, o, r, n, a;
                    return ft(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = s + "", this._shareImageStr[t] ? [3, 2] : ((o = new Laya.Sprite).size(600, 315), r = new Laya.Image(this._imageSrcList[s]), o.addChild(r), n = this._shareImageStr, a = t, [4, d.LayaTool.generateImage(o)]);
                            case 1:
                                n[a] = e.sent(), e.label = 2;
                            case 2:
                                return [2, Promise.resolve(this._shareImageStr[t])]
                        }
                    })
                })
            }, e
        }(),
        gt = (Se = function(e, t) {
            return (Se = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Se(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        _t = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        vt = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        bt = function(t) {
            function a() {
                var e = t.call(this) || this;
                return e._fps = 0, e.once(Laya.Event.ADDED, e, e.onAdded2Stage), e
            }
            return gt(a, t), a.prototype.onAdded2Stage = function(e) {
                return _t(this, void 0, void 0, function() {
                    var t, o, r = this;
                    return vt(this, function(e) {
                        console.log(">>>>>>>>" + e.label);
                        switch (e.label) {
                            case 0:
                                return a.ScaleY = Laya.stage.height / 1334, [4, i(void 0, void 0, void 0, function() {
                                    var t;
                                    return y(this, function(e) {
                                        console.log("<<<<<<" + e.label)
                                        switch (e.label) {
                                            case 0:
                                                return [4, l()];
                                            case 1:
                                                t = e.sent();
                                                bt.FBUserData = s.b.object(t);
                                                return Object(s.a)(x, {
                                                    delay: 1e3
                                                }), [2]
                                        }
                                    })
                                })];
                            case 1:
                                return e.sent(), window.DYD_DEV_MODE ? [3, 3] : [4, FBInstant.startGameAsync()];
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                this._3dLayer = new Laya.Sprite, this._3dLayer.size(Laya.stage.width, Laya.stage.height), this.addChild(this._3dLayer), this._2dLayer = new Laya.Sprite, this._2dLayer.size(Laya.stage.width, Laya.stage.height), this.addChild(this._2dLayer), e.label = 4;
                            case 4:
                                return e.trys.push([4, 6, , 7]), t = a, [4, Promise.race([new Promise(function(o) {
                                    var e = new Laya.HttpRequest;
                                    e.once(Laya.Event.COMPLETE, r, function(e) {
                                        var t = JSON.parse(e);
                                        !("0" !== t.error && 0 !== t.error || "1" !== t.data && 1 !== t.data) ? o(!0): o(!1)
                                    }), e.once(Laya.Event.ERROR, r, function() {
                                        o(!1)
                                    }), e.send("https://fb-api.capjoy.com/fbapi/v0/testCase_" + p, "nickname=" + FBInstant.player.getName() + "&locale=" + FBInstant.getLocale() + "&timezoneOffset=" + (new Date).getTimezoneOffset() + "&playerId=" + FBInstant.player.getID() + "&appId=" + h, "post", "text")
                                }), new Promise(function(e) {
                                    setTimeout(function() {
                                        e(!1)
                                    }, 1e3)
                                })])];
                            case 5:
                                return t.openGrayFunc = e.sent(), [3, 7];
                            case 6:
                                return e.sent(), a.openGrayFunc = !1, [3, 7];
                            case 7:
                                return console.log("openGrayFunc", a.openGrayFunc), (o = []).length ? Laya.loader.load(o, Laya.Handler.create(this, this.onSubAssetsLoaded)) : this.onSubAssetsLoaded(), console.log("added 2 stage"), [2]
                        }
                    })
                })
            }, a.prototype.onSubAssetsLoaded = function() {
                console.log("sub assets loaded"), a.playerInfo = {
                    nickname: "",
                    isNewPlayer: 0 === a.FBUserData.lastLoginDay,
                    reviveTimes: 0,
                    currentScore: 0,
                    playTimes: 0,
                    language: "en"
                }, console.log("entryPointData", a.playerInfo.entryPointData);
                var e = new Date,
                    t = e.getTimezoneOffset() / 60,
                    o = e.getTime(),
                    r = a.FBUserData.lastLoginDay,
                    n = Math.floor((o - 60 * t * 60 * 1e3) / 864e5);
                1 <= n - r && (a.FBUserData.loginDays += 1, a.FBUserData.lastLoginDay = n, a.FBUserData.sharedContextIds = [], n - r <= 2 ? a.FBUserData.consecutiveLoginDays += 1 : a.FBUserData.consecutiveLoginDays = 1), d.FBTool.updateLeaderboard(f, a.FBUserData.bestScore), this.createGameScene(), a.lastShowAdTime = a.lastShowRadTime = Math.floor((new Date).getTime() / 1e3), a.lastTime = Date.now(), Laya.timer.frameLoop(1, this, this.updateFps)
            }, a.prototype.updateFps = function() {
                this._fps++;
                var e = Date.now();
                1e3 < e - a.lastTime && (a.lastTime = e, a.fps = this._fps, this._fps = 0)
            }, a.prototype.createGameScene = function() {
                return _t(this, void 0, void 0, function() {
                    var t, o, r, n = this;
                    return vt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return console.log("start subscribe bot"), [4, d.FBTool.subscribeBot()];
                            case 1:
                                return e.sent(), console.log("start add shortcut"), 0 !== a.FBUserData.addedShortCut || 2 <= a.FBUserData.refuseShortCutCount ? [3, 4] : [3, 2];
                            case 2:
                                return [4, d.FBTool.addShortCut(a.playerInfo.isNewPlayer ? "New_End_Show" : "Old_Back_Show")];
                            case 3:
                                (t = e.sent()).res ? a.FBUserData.addedShortCut = 1 : "USER_INPUT" === t.code ? a.FBUserData.refuseShortCutCount += 1 : a.FBUserData.addedShortCut = 2, e.label = 4;
                            case 4:
                                a.ad = new d.FBTool.Ad({
                                    iadHigh: "679811515771968_702986846787768",
                                    iadLow: "679811515771968_702987030121083",
                                    iadAny: "679811515771968_702987220121064",
                                    radHigh: "679811515771968_702987313454388",
                                    radLow: "679811515771968_702987420121044",
                                    radAny: "679811515771968_702987520121034"
                                }, {
                                    language: "en"
                                }), a.share = new mt, e.label = 5;
                            case 5:
                                return e.trys.push([5, 8, , 9]), [4, d.FBTool.getConnectedPlayersAsync()];
                            case 6:
                                return o = e.sent() || [], a.connectPlayerInfo = [], o.forEach(function(e) {
                                    a.connectPlayerInfo.push({
                                        name: e.name,
                                        photo: e.photo,
                                        id: e.id
                                    })
                                }), [4, d.FBTool.getRankData(f, 100, 0)];
                            case 7:
                                return r = e.sent(), a.rankInfos = r.rankInfos, a.myselfInfo = r.myselfInfo, [3, 9];
                            case 8:
                                return e.sent(), [3, 9];
                            case 9:
                                return this._gameUI = new pt, this._gameUI.showHomePage(), this._scene3D = new fe(this._3dLayer), this._scene3D.on(G, this, this.onGameOver), this._scene3D.on($, this, function() {
                                    n._gameUI.stopTutorialAnimation()
                                }), this._gameUI.on(H, this, this.enterGame), this._gameUI.on(Y, this, this.onContinueStage), this._2dLayer.addChild(this._gameUI), this.event(F), [2]
                        }
                    })
                })
            }, a.showAd = function() {
                return _t(this, void 0, void 0, function() {
                    var t, o;
                    return vt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (t = Math.floor((new Date).getTime() / 1e3), !(a.INTERVAL_AD < t - a.lastShowAdTime)) return [2];
                                if (!(a.openGrayFunc && a.INTERVAL_RAD < t - a.lastShowRadTime)) return [3, 7];
                                if (console.log("begin play rad"), !a.ad.hasRAD()) return [3, 5];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, a.ad.showRAD()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return e.sent(), console.log("user cancel rad"), [3, 4];
                            case 4:
                                return a.lastShowAdTime = a.lastShowRadTime = Math.floor((new Date).getTime() / 1e3), wt("play_rad", {
                                    type: "between_iad"
                                }), [3, 6];
                            case 5:
                                console.log("rad not ready"), e.label = 6;
                            case 6:
                                return [3, 14];
                            case 7:
                                return console.log("begin play iad"), a.ad.hasIAD() ? ((o = new ze).showLoading(), [4, new Promise(function(e) {
                                    return setTimeout(e, 600)
                                })]) : [3, 13];
                            case 8:
                                e.sent(), o.removeLoading(), e.label = 9;
                            case 9:
                                return e.trys.push([9, 11, , 12]), [4, a.ad.showIAD()];
                            case 10:
                                return e.sent(), [3, 12];
                            case 11:
                                return e.sent(), console.log("user cancel iad"), [3, 12];
                            case 12:
                                return a.lastShowAdTime = Math.floor((new Date).getTime() / 1e3), [3, 14];
                            case 13:
                                console.log("iad not ready"), e.label = 14;
                            case 14:
                                return [2]
                        }
                    })
                })
            }, a.prototype.onGameOver = function(t) {
                return _t(this, void 0, void 0, function() {
                    return vt(this, function(e) {
                        return this._gameUI.showSettlementPage(t), d.FBTool.updateLeaderboard(f, a.FBUserData.bestScore), [2]
                    })
                })
            }, a.prototype.enterGame = function() {
                0 === a.FBUserData.bestScore && this._gameUI.showTutorialAnimation(), this._scene3D.enterGame()
            }, a.prototype.onContinueStage = function() {
                a.playerInfo.playTimes++, a.FBUserData.totalPlayTimes++, wt("play_times", {
                    user_type: a.playerInfo.isNewPlayer ? "New_Play_Times" : "Old_Play_Times",
                    result: a.playerInfo.playTimes,
                    score: a.FBUserData.bestScore
                }), wt("total_play_times", {
                    result: a.FBUserData.totalPlayTimes
                }), this._scene3D.buildHouse()
            }, a.rankInfos = [], a.lastShowAdTime = 0, a.lastShowRadTime = 0, a.INTERVAL_AD = 30, a.INTERVAL_RAD = 60, a.fps = 0, a.lastTime = 0, a
        }(Laya.Sprite),
        It = d.FBTool.dydlog,
        wt = function(e, t) {
            t ? t.fps = bt.fps : t = {
                fps: bt.fps
            }, It(e, t, "1.1.3")
        },
        Rt = function(e, t, o) {
            return Math.max(t, Math.min(e, o))
        };

    function Ot(e) {
        for (var t, o = e.length - 1; 0 < o; o--) {
            var r = Math.floor(Math.random() * (o + 1));
            t = [e[r], e[o]], e[o] = t[0], e[r] = t[1]
        }
        return e
    }
    var Tt, Lt = function(e, t, o, r, n) {
            void 0 === o && (o = 0), void 0 === r && (r = 0), void 0 === n && (n = 24);
            var a = new Laya.Text;
            a.color = "#ffffff", a.font = t, a.fontSize = n, a.align = "center", a.valign = "middle", a.text = e, a.bold = !1, a.size(.7 * Laya.stage.width, a.textHeight).pos(20, 10);
            var s = a.width + 40,
                i = a.height + 20,
                y = [
                    ["moveTo", 16, 0],
                    ["lineTo", s - 16, 0],
                    ["arcTo", s, 0, s, 16, 16],
                    ["lineTo", s, i - 16],
                    ["arcTo", s, i, s - 16, i, 16],
                    ["lineTo", 16, i],
                    ["arcTo", 0, i, 0, i - 16, 16],
                    ["lineTo", 0, 16],
                    ["arcTo", 0, 0, 16, 0, 16],
                    ["closePath"]
                ],
                c = new Laya.Sprite;
            c.graphics.drawPath(0, 0, y, {
                fillStyle: "#333333"
            }), c.size(s, i).pos(.5 * (Laya.stage.width - c.width) + o, .5 * (Laya.stage.height - c.height) + r), c.addChild(a), Laya.stage.addChild(c), setTimeout(function() {
                Laya.Tween.to(c, {
                    alpha: 0
                }, 200, Laya.Ease.linearNone, Laya.Handler.create(null, function() {
                    Laya.stage.removeChild(c)
                }))
            }, 3e3)
        },
        Ct = (function() {
            function e() {}
            e.CreateBezierPoints = function(e, t) {
                for (var o = [], r = 0; r < t; r++) {
                    var n = this.MultiPointBezier(e, r / t);
                    o.push(n)
                }
                return o
            }, e.MultiPointBezier = function(e, t) {
                for (var o = e.length, r = 0, n = 0, a = 0; a < o; a++) {
                    var s = e[a];
                    r += s.x * Math.pow(1 - t, o - 1 - a) * Math.pow(t, a) * this.erxiangshi(o - 1, a), n += s.y * Math.pow(1 - t, o - 1 - a) * Math.pow(t, a) * this.erxiangshi(o - 1, a)
                }
                return {
                    x: r,
                    y: n
                }
            }, e.erxiangshi = function(e, t) {
                for (var o = 1, r = 1; 0 < t;) o *= e, r *= t, e--, t--;
                return o / r
            }
        }(), Tt = function(e, t) {
            return (Tt = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            Tt(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }),
        Et = function(a) {
            function e() {
                var e = a.call(this) || this;
                e.size(Laya.stage.width, Laya.stage.height), e.on(Laya.Event.MOUSE_DOWN, e, function(e) {
                    e.stopPropagation()
                }), e._max = .99, e._current = 0, e._tipIdx = 0;
                var t = new Laya.Image;
                t.skin = "loading/loading.png", t.pivot(.5 * t.width, .5 * t.height).pos(.5 * Laya.stage.width, .5 * Laya.stage.height);
                var o = Math.max(Laya.stage.width / t.width, Laya.stage.height / t.height);
                t.scale(o, o), e.addChild(t);
                var r = new Laya.Image("loading/progress_bg.png");
                r.pos(.5 * (Laya.stage.width - r.width), Laya.stage.height - 120 * bt.ScaleY), e.addChild(r);
                var n = new Laya.Image("loading/progress.png");
                return n.pos(r.x, r.y), e.addChild(n), e._mask = new Laya.Sprite, e._mask.size(n.width, n.height), n.mask = e._mask, e._tip = new ge, e._tip.fontSize = 30, e._tip.color = "#304462", e._tip.size(Laya.stage.width, 40), e._tip.pos(.5 * (Laya.stage.width - e._tip.width), Laya.stage.height - 180 * bt.ScaleY), e._tip.align = "center", e._tip.valign = "middle", e._tip.text = "Preparing water...", e.addChild(e._tip), e.on(Laya.Event.ADDED, e, e.onAdded), e.on(Laya.Event.REMOVED, e, e.onRemoved), e
            }
            return Ct(e, a), e.prototype.onAdded = function() {
                console.log("-------Preparing water-----------");
                this._mask.graphics.clear(), this._current = 0, Laya.timer.frameLoop(1, this, this.updateProgress)
            }, e.prototype.onRemoved = function() {
                Laya.timer.clearAll(this)
            }, e.prototype.updateProgress = function() {
                console.log("-------updateProgress----------");
                this._current = Math.min(this._current + .003, this._max), this._mask.graphics.clear(), this._mask.graphics.drawRect(0, 0, this._mask.width * this._current, this._mask.height, "#fff"), this._current === this._max && (this._current = 0)
            }, e
        }(Laya.Sprite),
        Dt = function(a, s, i, y) {
            return new(i || (i = Promise))(function(e, t) {
                function o(e) {
                    try {
                        n(y.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        n(y.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(o, r)
                }
                n((y = y.apply(a, s || [])).next())
            })
        },
        At = function(o, r) {
            var n, a, s, e, i = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i;) try {
                            if (n = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                            switch (a = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                        i.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && i.label < s[1]) {
                                        i.label = s[1], s = t;
                                        break
                                    }
                                    if (s && i.label < s[2]) {
                                        i.label = s[2], i.ops.push(t);
                                        break
                                    }
                                    s[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            t = r.call(o, i)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            n = s = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    wt("game_loading", {
        type: "initialized"
    }), Laya3D.init(750, 1334, !1), Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL, (() => {
        if (typeof loadRuntime !== 'undefined') {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        }
        if (typeof getAdapterInfo !== "undefined") {
            var stage = Laya.stage;
            var info = getAdapterInfo({
                width: 750,
                height: 1334,
                scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
            });
            stage.designWidth = info.w;
            stage.designHeight = info.h;
            stage.width = info.rw;
            stage.height = info.rh;
            stage.scale(info.scaleX, info.scaleY);
        }
    })(), Laya.stage.bgColor = "#888888", Laya.stage.once(Laya.Event.RESIZE, null, function() {
        Laya.stage.screenAdaptationEnabled = !1,
            function() {
                Laya.LocalStorage.__init__();
                var t = console.log,
                    o = "e3sdsfs3eee",
                    r = "true" == Laya.LocalStorage.getItem(o);
                var n = null,
                    a = function(e) {
                        Laya.Browser.onPC || (e ? n ? n.showSwitch() : n = new window.VConsole : n && n.hideSwitch()), e ? Laya.Stat.show() : Laya.Stat.hide()
                    };
                a(r), Object.defineProperty(window, "$dev", {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        Laya.LocalStorage.setItem(o, e), a(r = e), console.log = r ? t : function() {}
                    },
                    configurable: !0
                });
                var s = 0,
                    i = 0;
                Laya.stage.on(Laya.Event.CLICK, void 0, function(e) {
                    50 == Math.abs(Rt(e.stageX - Laya.stage.width / 2, -50, 50)) || 50 <= e.stageY || (i++, clearTimeout(s), s = setTimeout(function() {
                        5 <= i && (window.$dev = !window.$dev), i = 0
                    }, 200))
                })
            }(), Kt.updateProgress(.3), Laya.loader.load(ae, null, null, Laya.Loader.SOUND), Laya.loader.load(W, Laya.Handler.create(null, Vt), Laya.Handler.create(null, kt, [], !1))
    });
    var Bt, St, Pt, Wt, Nt, Kt = new d.LayaTool.FBLoadingNotice(!!window.DYD_DEV_MODE);

    function kt(e) {
        Kt.updateProgress(.3 + .3 * e)
    }

    function Vt() {
        console.log("2d complete"), wt("game_loading", {
            type: "2dAssets"
        }), Kt.updateProgress(.8), Laya.loader.create(K, Laya.Handler.create(null, Ft), Laya.Handler.create(null, Mt))
    }

    function Mt(e) {
        Kt.updateProgress(.8 + .2 * e)
    }

    function Ft() {
        console.log("3d complete"), wt("game_loading", {
            type: "3dAssets"
        }), Kt.updateProgress(1), Kt.dispose(), Kt = null, (St = new bt).once(F, null, jt), Laya.stage.addChild(St), Bt = new Et, Laya.stage.addChild(Bt)
    }

    function jt() {
        return Dt(this, void 0, void 0, function() {
            var t, o;
            return At(this, function(e) {
                console.log("==========>" + e.label);
                switch (e.label) {
                    case 0:
                        if (wt("game_loading", {
                                type: "ready"
                            }), window.DYD_DEV_MODE) return [3, 7];
                        d.FBTool.reportMsg(bt.playerInfo.isNewPlayer, bt.FBUserData.bestScore, {
                            gameVersion: "1.1.3",
                            APPID: h,
                            GAMEID: p,
                            entryType: bt.playerInfo.entryPointData ? bt.playerInfo.entryPointData.entry : "",
                            fromUserId: bt.playerInfo.entryPointData ? bt.playerInfo.entryPointData.fromUserId : "",
                            fromAppId: bt.playerInfo.entryPointData && bt.playerInfo.entryPointData.switchGameInfo ? bt.playerInfo.entryPointData.switchGameInfo.appId : ""
                        }), e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), t = bt.FBUserData, [4, d.FBTool.getInvitedFriendsCount(p)];
                    case 2:
                        return t.inviteFriendsCount = e.sent(), [3, 4];
                    case 3:
                        return e.sent(), bt.FBUserData.inviteFriendsCount = bt.FBUserData.inviteFriendsCount || 0, [3, 4];
                    case 4:
                        return e.trys.push([4, 6, , 7]), o = bt, [4, d.FBTool.getRecommendGames(h)];
                    case 5:
                        return o.importGameInfo = e.sent(), [3, 7];
                    case 6:
                        return e.sent(), bt.importGameInfo = null, [3, 7];
                    case 7:
                        return Bt.removeSelf(), Bt = null, bt.openGrayFunc && function() {
                            Dt(this, void 0, void 0, function() {
                                var t, o;
                                return At(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            0, e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 9, , 10]), (t = FBInstant.context.getID()) ? t == Nt ? [3, 6] : (Nt = t, o = "context." + FBInstant.context.getID(), [4, FBInstant.getLeaderboardAsync(o)]) : [3, 8];
                                        case 2:
                                            return Pt = e.sent(), Wt = 1, Pt ? [4, Pt.setScoreAsync(Wt, "")] : [3, 4];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [4, d.FBTool.updateLeaderboardAsync(o, FBInstant.player.getName() + " joined this game")];
                                        case 5:
                                            e.sent(), console.log("update Leaderboard"), e.label = 6;
                                        case 6:
                                            return [4, function() {
                                                return Dt(this, void 0, void 0, function() {
                                                    var t;
                                                    return At(this, function(e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return bt.playerInfo.currentScore <= Wt ? [2] : (Wt = bt.playerInfo.currentScore, Pt ? [4, Pt.setScoreAsync(Wt, "")] : [3, 2]);
                                                            case 1:
                                                                e.sent(), e.label = 2;
                                                            case 2:
                                                                return console.log("set score", Wt), t = "context." + FBInstant.context.getID(), [4, d.FBTool.updateLeaderboardAsync(t)];
                                                            case 3:
                                                                return e.sent(), [2]
                                                        }
                                                    })
                                                })
                                            }()];
                                        case 7:
                                            e.sent(), e.label = 8;
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            return e.sent(), [3, 10];
                                        case 10:
                                            return [4, new Promise(function(e) {
                                                return setTimeout(e, 3e3)
                                            })];
                                        case 11:
                                            return e.sent(), [3, 0];
                                        case 12:
                                            return [2]
                                    }
                                })
                            })
                        }(), [2]
                }
            })
        })
    }
}]);