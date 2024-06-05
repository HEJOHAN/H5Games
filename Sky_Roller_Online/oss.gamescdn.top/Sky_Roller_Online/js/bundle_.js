var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, m, f) {
    a != Array.prototype && a != Object.prototype && (a[m] = f.value);
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, m, f, e) {
    if (m) {
        f = $jscomp.global;
        a = a.split(".");
        for (e = 0; e < a.length - 1; e++) {
            var d = a[e];
            d in f || (f[d] = {});
            f = f[d];
        }
        a = a[a.length - 1];
        e = f[a];
        m = m(e);
        m != e && null != m && $jscomp.defineProperty(f, a, {
            configurable: !0,
            writable: !0,
            value: m
        });
    }
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        m = {};
    try {
        return m.__proto__ = a, m.a;
    } catch (f) {}
    return !1;
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, m) {
    a.__proto__ = m;
    if (a.__proto__ !== m) throw new TypeError(a + " is not extensible");
    return a;
} : null;
$jscomp.polyfill("Object.setPrototypeOf", function(a) {
    return a || $jscomp.setPrototypeOf;
}, "es6", "es5");
$jscomp.arrayIteratorImpl = function(a) {
    var m = 0;
    return function() {
        return m < a.length ? {
            done: !1,
            value: a[m++]
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    };
};
$jscomp.makeIterator = function(a) {
    var m = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return m ? m.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(a) {
    function m() {
        this.batch_ = null;
    }

    function f(b) {
        return b instanceof d ? b : new d(function(c, d) {
            c(b);
        });
    }
    if (a && !$jscomp.FORCE_POLYFILL_PROMISE) return a;
    m.prototype.asyncExecute = function(b) {
        if (null == this.batch_) {
            this.batch_ = [];
            var c = this;
            this.asyncExecuteFunction(function() {
                c.executeBatch_();
            });
        }
        this.batch_.push(b);
    };
    var e = $jscomp.global.setTimeout;
    m.prototype.asyncExecuteFunction = function(b) {
        e(b, 0);
    };
    m.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var b = this.batch_;
            this.batch_ = [];
            for (var d = 0; d < b.length; ++d) {
                var a = b[d];
                b[d] = null;
                try {
                    a();
                } catch (g) {
                    this.asyncThrow_(g);
                }
            }
        }
        this.batch_ = null;
    };
    m.prototype.asyncThrow_ = function(b) {
        this.asyncExecuteFunction(function() {
            throw b;
        });
    };
    var d = function(b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var c = this.createResolveAndReject_();
        try {
            b(c.resolve, c.reject);
        } catch (l) {
            c.reject(l);
        }
    };
    d.prototype.createResolveAndReject_ = function() {
        function b(b) {
            return function(c) {
                a || (a = !0, b.call(d, c));
            };
        }
        var d = this,
            a = !1;
        return {
            resolve: b(this.resolveTo_),
            reject: b(this.reject_)
        };
    };
    d.prototype.resolveTo_ = function(b) {
        if (b === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (b instanceof d) this.settleSameAsPromise_(b);
        else {
            a: switch (typeof b) {
                case "object":
                    var c = null != b;
                    break a;
                case "function":
                    c = !0;
                    break a;
                default:
                    c = !1;
            }
            c ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
        }
    };
    d.prototype.resolveToNonPromiseObj_ = function(b) {
        var c = void 0;
        try {
            c = b.then;
        } catch (l) {
            this.reject_(l);
            return;
        }
        "function" == typeof c ? this.settleSameAsThenable_(c, b) : this.fulfill_(b);
    };
    d.prototype.reject_ = function(b) {
        this.settle_(2, b);
    };
    d.prototype.fulfill_ = function(b) {
        this.settle_(1, b);
    };
    d.prototype.settle_ = function(b, d) {
        if (0 != this.state_) throw Error("Cannot settle(" + b + ", " + d + "): Promise already settled in state" + this.state_);
        this.state_ = b;
        this.result_ = d;
        this.executeOnSettledCallbacks_();
    };
    d.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var c = 0; c < this.onSettledCallbacks_.length; ++c) b.asyncExecute(this.onSettledCallbacks_[c]);
            this.onSettledCallbacks_ = null;
        }
    };
    var b = new m();
    d.prototype.settleSameAsPromise_ = function(b) {
        var c = this.createResolveAndReject_();
        b.callWhenSettled_(c.resolve, c.reject);
    };
    d.prototype.settleSameAsThenable_ = function(b, d) {
        var c = this.createResolveAndReject_();
        try {
            b.call(d, c.resolve, c.reject);
        } catch (g) {
            c.reject(g);
        }
    };
    d.prototype.then = function(b, a) {
        function c(b, c) {
            return "function" == typeof b ? function(c) {
                try {
                    g(b(c));
                } catch (k) {
                    h(k);
                }
            } : c;
        }
        var g, h, e = new d(function(b, c) {
            g = b;
            h = c;
        });
        this.callWhenSettled_(c(b, g), c(a, h));
        return e;
    };
    d.prototype.catch = function(b) {
        return this.then(void 0, b);
    };
    d.prototype.callWhenSettled_ = function(c, d) {
        function a() {
            switch (g.state_) {
                case 1:
                    c(g.result_);
                    break;
                case 2:
                    d(g.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + g.state_);
            }
        }
        var g = this;
        null == this.onSettledCallbacks_ ? b.asyncExecute(a) : this.onSettledCallbacks_.push(a);
    };
    d.resolve = f;
    d.reject = function(b) {
        return new d(function(c, d) {
            d(b);
        });
    };
    d.race = function(b) {
        return new d(function(c, d) {
            for (var a = $jscomp.makeIterator(b), h = a.next(); !h.done; h = a.next()) f(h.value).callWhenSettled_(c, d);
        });
    };
    d.all = function(b) {
        var c = $jscomp.makeIterator(b),
            a = c.next();
        return a.done ? f([]) : new d(function(b, d) {
            function h(c) {
                return function(d) {
                    g[c] = d;
                    e--;
                    0 == e && b(g);
                };
            }
            var g = [],
                e = 0;
            do {
                g.push(void 0), e++, f(a.value).callWhenSettled_(h(g.length - 1), d), a = c.next();
            } while (!a.done);
        });
    };
    return d;
}, "es6", "es3");
var __extends = this && this.__extends || function() {
    var a = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(a, f) {
        a.__proto__ = f;
    } || function(a, f) {
        for (var e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
    };
    return function(m, f) {
        function e() {
            this.constructor = m;
        }
        a(m, f);
        m.prototype = null === f ? Object.create(f) : (e.prototype = f.prototype, new e());
    };
}();
! function() {
    function a(m, f, e) {
        function d(c, l) {
            if (!f[c]) {
                if (!m[c]) {
                    var g = "function" == typeof require && require;
                    if (!l && g) return g(c, !0);
                    if (b) return b(c, !0);
                    l = Error("Cannot find module '" + c + "'");
                    throw l.code = "MODULE_NOT_FOUND", l;
                }
                l = f[c] = {
                    exports: {}
                };
                m[c][0].call(l.exports, function(b) {
                    return d(m[c][1][b] || b);
                }, l, l.exports, a, m, f, e);
            }
            return f[c].exports;
        }
        for (var b = "function" == typeof require && require, c = 0; c < e.length; c++) d(e[c]);
        return d;
    }
    return a;
}()({
    1: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./script/views/ButtonAnim"),
            d = a("./script/views/ColletView"),
            b = a("./script/views/ConvergeAd"),
            c = a("./script/views/ConvergeUpAdListLoop"),
            n = a("./script/views/ConvergeAdListLoop"),
            l = a("./script/views/GameFighting"),
            g = a("./script/views/AdListLoop"),
            h = a("./script/views/GameOver"),
            q = a("./script/views/OverAdListLoop"),
            u = a("./script/views/GameOverAdListLoop"),
            v = a("./script/views/PromotionAnimation"),
            r = a("./script/views/Gift"),
            k = a("./script/platform/wx/WXLaunch"),
            p = a("./script/views/MainView"),
            w = a("./script/views/MainAdListLoop"),
            x = a("./script/views/rank/RankItem"),
            t = a("./script/views/rank/WXRankView"),
            y = a("./script/views/Resurgence"),
            z = a("./script/views/RewardView"),
            A = a("./script/views/SkinPop"),
            B = a("./script/views/SkinShopView"),
            C = a("./script/views/SkinTrial"),
            D = a("./script/views/TipView");
        a = function() {
            function a() {}
            return a.init = function() {
                var a = Laya.ClassUtils.regClass;
                a("script/views/ButtonAnim.ts", e["default"]);
                a("script/views/ColletView.ts", d["default"]);
                a("script/views/ConvergeAd.ts", b["default"]);
                a("script/views/ConvergeUpAdListLoop.ts", c["default"]);
                a("script/views/ConvergeAdListLoop.ts", n["default"]);
                a("script/views/GameFighting.ts", l["default"]);
                a("script/views/AdListLoop.ts", g["default"]);
                a("script/views/GameOver.ts", h["default"]);
                a("script/views/OverAdListLoop.ts", q["default"]);
                a("script/views/GameOverAdListLoop.ts", u["default"]);
                a("script/views/PromotionAnimation.ts", v["default"]);
                a("script/views/Gift.ts", r["default"]);
                a("script/platform/wx/WXLaunch.ts", k["default"]);
                a("script/views/MainView.ts", p["default"]);
                a("script/views/MainAdListLoop.ts", w["default"]);
                a("script/views/rank/RankItem.ts", x["default"]);
                a("script/views/rank/WXRankView.ts", t["default"]);
                a("script/views/Resurgence.ts", y["default"]);
                a("script/views/RewardView.ts", z["default"]);
                a("script/views/SkinPop.ts", A["default"]);
                a("script/views/SkinShopView.ts", B["default"]);
                a("script/views/SkinTrial.ts", C["default"]);
                a("script/views/TipView.ts", D["default"]);
            }, a.width = 750, a.height = 1334, a.scaleMode = "showall", a.screenMode = "vertical", a.alignV = "middle", a.alignH = "center", a.startScene = "Launch.scene", a.sceneRoot = "", a.debug = !1, a.stat = !1, a.physicsDebug = !1, a.exportSceneToJson = !0, a;
        }();
        f["default"] = a;
        a.init();
    }, {
        "./script/platform/wx/WXLaunch": 36,
        "./script/views/AdListLoop": 45,
        "./script/views/ButtonAnim": 47,
        "./script/views/ColletView": 48,
        "./script/views/ConvergeAd": 49,
        "./script/views/ConvergeAdListLoop": 50,
        "./script/views/ConvergeUpAdListLoop": 51,
        "./script/views/GameFighting": 52,
        "./script/views/GameOver": 53,
        "./script/views/GameOverAdListLoop": 54,
        "./script/views/Gift": 55,
        "./script/views/MainAdListLoop": 56,
        "./script/views/MainView": 57,
        "./script/views/OverAdListLoop": 58,
        "./script/views/PromotionAnimation": 59,
        "./script/views/Resurgence": 60,
        "./script/views/RewardView": 61,
        "./script/views/SkinPop": 62,
        "./script/views/SkinShopView": 63,
        "./script/views/SkinTrial": 64,
        "./script/views/TipView": 65,
        "./script/views/rank/RankItem": 67,
        "./script/views/rank/WXRankView": 68
    }],
    2: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./GameConfig"),
            d = a("./script/MyInit");
        new(function() {
            function b() {
                Laya.isWXPosMsg = !0;
                Laya.isWXOpenDataContext = !1;
                Laya.Text.CharacterCache = !1;
                Laya.MouseManager.multiTouchEnabled = !1;
                window.Laya3D ? Laya3D.init(e["default"].width, e["default"].height) : Laya.init(e["default"].width, e["default"].height, Laya.WebGL);
                Laya.Physics && Laya.Physics.enable();
                Laya.DebugPanel && Laya.DebugPanel.enable();
                Laya.stage.scaleMode = e["default"].scaleMode;
                Laya.stage.alignH = "center";
                if (typeof loadRuntime !== 'undefined') {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                }
                if (typeof getAdapterInfo !== "undefined") {
                    var stage = Laya.stage;
                    var info = getAdapterInfo({
                        width: e["default"].width,
                        height: e["default"].height,
                        scaleMode: "fixedwidth"
                    });
                    stage.designWidth = info.w;
                    stage.designHeight = info.h;
                    stage.width = info.rw;
                    stage.height = info.rh;
                    stage.scale(info.scaleX, info.scaleY);
                }
                Laya.URL.exportSceneToJson = e["default"].exportSceneToJson;
                (e["default"].debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel();
                e["default"].physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable();
                e["default"].stat && Laya.Stat.show();
                Laya.alertGlobalError = !1;
                d["default"].init();
                this.onVersionLoaded();
            }
            return b.prototype.onVersionLoaded = function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, b.prototype.onConfigLoaded = function() {
                Laya.loader.load([{
                    url: "loading/logo.png",
                    type: Laya.Loader.IMAGE
                }], Laya.Handler.create(this, function() {
                    e["default"].startScene && Laya.Scene.open(e["default"].startScene);
                }));
            }, b;
        }())();
    }, {
        "./GameConfig": 1,
        "./script/MyInit": 13
    }],
    3: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("../GameLogic/BaseScript");
        var e = a("../mgr3d/GameMgr"),
            d = a("../mgrCommon/EnumMana"),
            b = a("../tools/MathTool"),
            c = a("../tools/LayaTimeMgr"),
            n = a("../GameLogic/GameCustomConfig"),
            l = a("../mgr3d/BezierCurve"),
            g = a("./ActorCtrl");
        a = function(a) {
            function h() {
                var b = a.call(this) || this;
                return b.intType = 1e3, b.numType = 1e3, b.strType = "hello laya", b.boolType = !0, b.rotationQT = new Laya.Quaternion(), b.tNomal = 0, b.tNomalqt = 0, b.tLast = 0, b.tQTLast = 0, b.nextTargetType = 0, b.gravitySpeed = 0, b;
            }
            return __extends(h, a), h.prototype.onEnable = function() {}, h.prototype.onDisable = function() {}, h.prototype.onAwake = function() {
                this.InitBase();
                this.actorObject = this.owner;
                this.onSpawn();
            }, h.prototype.onUpdate = function() {
                return e["default"].instance.gameStatus != d.EnumMana.LevelState.playing ? void this.onUpdateSpc() : (this.checkCollision(), this.switchState(), void this.onUpdateOther());
            }, h.prototype.onUpdateSpc = function() {}, h.prototype.onUpdateOther = function() {}, h.prototype.onSpawn = function() {}, h.prototype.checkCollision = function() {}, h.prototype.switchState = function() {}, h.prototype.moveForward = function(b) {
                this.GetTransForm().translate(new Laya.Vector3(0, 0, -b * c["default"].Instance.getDeltaTimer() * .001));
            }, h.prototype.moveBack = function() {}, h.prototype.moveUp = function() {}, h.prototype.moveDown = function(b) {
                this.gravitySpeed += b * c["default"].Instance.getDeltaTimer() * .001;
                this.GetTransForm().translate(new Laya.Vector3(0, -this.gravitySpeed * c["default"].Instance.getDeltaTimer() * .001, 0));
            }, h.prototype.moveSlowDown = function() {}, h.prototype.moveToNextPoint = function(b, c, d, a) {
                0 == this.nextTargetType ? this.moveToNextPointStraightline(b, c, d) : this.moveToNextPointCurveline(b, c, a);
                e["default"].instance.updateCurRoadProgress(this.tLast / this.tNomal);
            }, h.prototype.moveToNextPointStraightline = function(b, c, d) {
                g["default"].Instance.changeCameraToLineSpeed();
                this.GetTransForm().lookAt(b, new Laya.Vector3(0, 1, 0));
                b = this.getNextPosition(b, c);
                this.GetTransForm().position = b;
            }, h.prototype.moveToNextPointCurveline = function(b, d, a) {
                g["default"].Instance.changeCameraToCurveSpeed(a);
                b = (new Laya.Vector3(), this.tLast + .001 * c["default"].Instance.getDeltaTimer() * d / n["default"].nomalMoveSpeed);
                a = b + 1e-4 * c["default"].Instance.getDeltaTimer() * d / n["default"].nomalMoveSpeed;
                b > this.tNomal && (b = this.tNomal);
                a > this.tNomal && (a = this.tNomal);
                d = l["default"].PathAlgorithm(b / this.tNomal, this.curveLinePoint);
                a = l["default"].PathAlgorithm(a / this.tNomal, this.curveLinePoint);
                this.GetTransForm().position = d;
                this.GetTransForm().lookAt(a, new Laya.Vector3(0, 1, 0));
                this.tLast = b;
            }, h.prototype.getNextPosition = function(b, d) {
                var a = new Laya.Vector3();
                d = this.tLast + .001 * c["default"].Instance.getDeltaTimer() * d / n["default"].nomalMoveSpeed;
                return Laya.Vector3.lerp(this.lastPostion, b, d / this.tNomal, a), this.tLast = d, a;
            }, h.prototype.setNextTargetType = function(b, c) {
                if (1 < c.length) {
                    this.nextTargetType = 1;
                    this.curveLinePoint = [b];
                    this.curveLinePoint = this.curveLinePoint.concat(c);
                    c = 0;
                    for (var d = void 0, a = 1; 10 >= a; a++) {
                        1 == a && (d = b);
                        var h = l["default"].PathAlgorithm(a / 10, this.curveLinePoint);
                        c += Laya.Vector3.distance(d, h);
                        d = h;
                    }
                    this.curWayLenght = c;
                } else this.lastPostion = b, this.nextTargetType = 0, this.curWayLenght = Laya.Vector3.distance(b, c[0]);
                this.tNomal = this.curWayLenght / n["default"].nomalMoveSpeed;
                this.tLast = 0;
            }, h.prototype.resetCurPosition = function(b, c) {
                this.lastPostion = b;
                this.curWayLenght = Laya.Vector3.distance(b, c);
                this.tNomal = this.curWayLenght / n["default"].nomalMoveSpeed;
                this.tLast = 0;
            }, h.prototype.lookAtNextPoint = function(b) {}, h.prototype.computNextQuaternion = function(c, d, a) {
                this.lastPostion = c;
                this.lastQT = this.GetTransForm().rotation;
                this.curWayLenght = Laya.Vector3.distance(c, d);
                this.tNomal = this.curWayLenght / n["default"].nomalMoveSpeed;
                this.tQTLast = this.tLast = 0;
                Laya.Quaternion.createFromYawPitchRoll(b.MathTool.getRadian(a.y), b.MathTool.getRadian(a.x), b.MathTool.getRadian(a.z), this.rotationQT);
                this.computNomalqt(d, n["default"].nomalRoationSpeed);
            }, h.prototype.faceToNextPoint = function(b, d) {
                b = new Laya.Quaternion();
                d = this.tQTLast + .001 * c["default"].Instance.getDeltaTimer() * d;
                var a = d / this.tNomalqt;
                1 < a && (a = 1);
                Laya.Quaternion.slerp(this.lastQT, this.rotationQT, a, b);
                this.tQTLast = d;
                this.GetTransForm().rotation = b;
            }, h.prototype.computNomalqt = function(b, c) {
                var d = new Laya.Vector3(),
                    a = new Laya.Vector3();
                Laya.Vector3.subtract(b, this.GetPosition(), d);
                this.GetTransForm().getForward(a);
                Laya.Vector3.normalize(d, d);
                Laya.Vector3.normalize(a, a);
                b = Laya.Vector3.dot(d, a);
                b = Math.acos(b);
                console.log("angle =  " + b);
                this.tNomalqt = Math.abs(b / c);
                console.log("tNomalqt =  " + this.tNomalqt);
            }, h.prototype.faceToNextPoint2 = function(d, a) {
                var h = new Laya.Vector3(),
                    k = new Laya.Vector3();
                Laya.Vector3.subtract(d, this.GetPosition(), h);
                this.GetTransForm().getForward(k);
                Laya.Vector3.normalize(h, h);
                Laya.Vector3.normalize(k, k);
                var g = new Laya.Vector3(h.x, k.y, h.z),
                    e = new Laya.Vector3(k.x, h.y, h.z);
                h = Laya.Vector3.dot(g, k);
                d = Laya.Vector3.dot(e, k);
                1 < h ? h = 1 : -1 > h && (h = -1);
                1 < d ? d = 1 : -1 > d && (d = -1);
                console.log("dot2 =  " + d);
                h = Math.acos(h);
                d = Math.acos(d);
                var l = (180 - b.MathTool.getAngle(h), b.MathTool.getAngle(d));
                (45 < l || -45 > l) && (d = 0);
                console.log("angle2 =  " + l);
                l = new Laya.Vector3();
                Laya.Vector3.cross(g, k, l);
                g = new Laya.Vector3();
                Laya.Vector3.cross(e, k, g);
                k = new Laya.Quaternion();
                e = 0 < l.y ? -1 : 1;
                g = 0 < g.x ? -1 : 1;
                Laya.Quaternion.createFromYawPitchRoll(b.MathTool.getRadian(this.GetRotationEuler().y) + e * h, b.MathTool.getRadian(this.GetRotationEuler().x) + g * d, 0, k);
                h = new Laya.Quaternion();
                Laya.Quaternion.lerp(this.GetTransForm().rotation, k, .001 * c["default"].Instance.getDeltaTimer() * a, h);
                this.GetTransForm().rotation = h;
            }, h;
        }(m.BaseScript);
        f["default"] = a;
    }, {
        "../GameLogic/BaseScript": 8,
        "../GameLogic/GameCustomConfig": 10,
        "../mgr3d/BezierCurve": 14,
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../tools/LayaTimeMgr": 40,
        "../tools/MathTool": 41,
        "./ActorCtrl": 4
    }],
    4: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgr3d/GameObjFactory"),
            d = a("../mgr3d/GameCollisionMgr"),
            b = a("../mgr3d/GameMgr"),
            c = a("../mgrCommon/EnumMana"),
            n = a("../mgrCommon/SoundMgr"),
            l = a("../mgrCommon/VibrateMgr"),
            g = a("../models/UserData"),
            h = a("../GameLogic/GameCustomConfig"),
            q = a("../mgrCommon/EventMgr"),
            u = a("../mgr3d/EffectMgr"),
            v = a("./HumanCollision"),
            r = a("../mgrCommon/EventDefine");
        a = function() {
            function a() {}
            return Object.defineProperty(a, "Instance", {
                get: function() {
                    return null == this._actorCtrl && (this._actorCtrl = new a()), this._actorCtrl;
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.registCollision = function(b, c) {
                this.leftLegHumanCollision = b.getChildAt(0).addComponent(v["default"]);
                this.rightLegHumanCollision = c.getChildAt(0).addComponent(v["default"]);
            }, a.prototype.unRegistCollision = function(b, c) {}, a.prototype.leftLegRayCheck = function() {
                this.leftLegHumanCollision.rayCheck();
            }, a.prototype.rayCheckCancelJump = function(c) {
                b["default"].instance.humanScript.cancelJump(c);
            }, a.prototype.legSideCollision = function(c, d) {
                b["default"].instance.humanScript.legSideCollision(c, d);
            }, a.prototype.legCollision = function(c, d) {
                b["default"].instance.humanScript.legCollision(c, d);
            }, a.prototype.leftLegAndSideCollisionStay = function(c, d) {
                b["default"].instance.humanScript.leftLegAndSideCollisionStay(c, d);
            }, a.prototype.rightLegAndSideCollisionStay = function(c, d) {
                b["default"].instance.humanScript.rightLegAndSideCollisionStay(c, d);
            }, a.prototype.leftLegAndSideCollisionExit = function(c, d) {
                b["default"].instance.humanScript.leftLegAndSideCollisionExit(c, d);
            }, a.prototype.rightLegAndSideCollisionExit = function(c, d) {
                b["default"].instance.humanScript.rightLegAndSideCollisionExit(c, d);
            }, a.prototype.changeCameraToLineSpeed = function() {
                b["default"].instance.cameraController.setCameraMoveAndRotationSpeed(h["default"].cameraLineMoveSpeed, h["default"].cameraLineRotaionSpeed);
            }, a.prototype.changeCameraToCurveSpeed = function(c) {
                -1 != c.indexOf("1503") || -1 != c.indexOf("1801") || -1 != c.indexOf("1802") || -1 != c.indexOf("1803") || -1 != c.indexOf("1804") ? b["default"].instance.cameraController.setCameraMoveAndRotationSpeed(h["default"].cameraSpcCurveMoveSpeed, h["default"].cameraSpcCurveRotaionSpeed) : b["default"].instance.cameraController.setCameraMoveAndRotationSpeed(h["default"].cameraCurveMoveSpeed, h["default"].cameraCurveRotaionSpeed);
            }, a.prototype.changeCameraToVictoryState = function() {
                b["default"].instance.cameraController.cameraFollowState = c.EnumMana.CameraFollowState.Victory;
            }, a.prototype.playOver = function(c) {
                var d; - 1 != c.name.indexOf("Plane_05") ? (console.log("birdOver collsionOb belong Collision"), d = c.parent.parent) : d = c.parent;
                console.log("playOver lastCollsionOb name = " + c.name);
                console.log("playOver lastCollsionOb wayname = " + d.name);
                d ? b["default"].instance.PlayOver(d) : console.log("没有找到对应的way父节点 lastCollsionOb = ", c.name);
                n["default"].instance.playSound("fail");
                l["default"].vibrateLong();
            }, a.prototype.playReborn = function() {
                b["default"].instance.humanScript.initPlay();
            }, a.prototype.playerGetCoin = function(c) {
                console.log("playerGetCoin id = " + c.id);
                b["default"].instance.coinIdMap[c.id] || (b["default"].instance.coinIdMap[c.id] = 1, console.log("2playerGetCoin id = " + c.id), u["default"].Instance.playGetGoldEffectAtPostion(c.transform.position), e["default"].Instance.destroyCoin(c), g["default"].curLevelGold += 1, q["default"].instance.emit(r.EventDefine.UPDATE_MONEY), n["default"].instance.playSound("TouchDiamond"), l["default"].vibrateShort());
            }, a.prototype.unRegistTrigle = function(b) {
                d["default"].Instance.unRegistCollision(b);
            }, a.prototype.moveObjectLeftAndRight = function(b, c, d) {
                b.localPosition = c;
            }, a.prototype.moveObjectUpAndDown = function(b, c, d) {
                b.localPosition = c;
            }, a.prototype.passLevel = function() {
                n["default"].instance.playSound("win");
                l["default"].vibrateLong();
                b["default"].instance.GamePass();
            }, a;
        }();
        f["default"] = a;
    }, {
        "../GameLogic/GameCustomConfig": 10,
        "../mgr3d/EffectMgr": 15,
        "../mgr3d/GameCollisionMgr": 16,
        "../mgr3d/GameMgr": 17,
        "../mgr3d/GameObjFactory": 18,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/SoundMgr": 26,
        "../mgrCommon/VibrateMgr": 29,
        "../models/UserData": 33,
        "./HumanCollision": 7
    }],
    5: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgr3d/GameMgr"),
            d = a("../mgrCommon/EnumMana");
        a = function(b) {
            function c() {
                return b.call(this) || this;
            }
            return __extends(c, b), c.prototype.onEnable = function() {}, c.prototype.onDisable = function() {}, c.prototype.onAwake = function() {
                this.InitBase();
            }, c.prototype.onCollisionStay = function(b) {
                e["default"].instance.gameStatus == d.EnumMana.LevelState.playing && this.handleCollisionStay(b);
            }, c.prototype.onCollisionExit = function(b) {
                e["default"].instance.gameStatus == d.EnumMana.LevelState.playing && this.handleCollisionExit(b);
            }, c.prototype.onCollisionEnter = function(b) {
                e["default"].instance.gameStatus == d.EnumMana.LevelState.playing && this.handleCollision(b);
            }, c.prototype.handleCollision = function(b) {}, c.prototype.handleCollisionStay = function(b) {}, c.prototype.handleCollisionExit = function(b) {}, c;
        }(a("../GameLogic/BaseScript").BaseScript);
        f["default"] = a;
    }, {
        "../GameLogic/BaseScript": 8,
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20
    }],
    6: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./Actor");
        var e = a("../GameLogic/GameLogic"),
            d = a("./ActorCtrl"),
            b = a("../GameLogic/GameCustomConfig"),
            c = a("../mgrCommon/EnumMana"),
            n = a("../tools/LayaTimeMgr"),
            l = a("../mgr3d/GameMgr"),
            g = a("../models/UserData"),
            h = a("../mgrCommon/VibrateMgr"),
            q = a("../tools/MathTool"),
            u = a("../mgr3d/GameObjFactory");
        a = function(a) {
            function r() {
                var b = a.call(this) || this;
                return b.normalTimer = 0, b.lastNormalTimer = 0, b.beginToMove = !1, b.offsetFactor = .5, b.beginDrag = !1, b.legAnimatiorName = "Prepare_l OrdinarySliding_l Stagger_l Jump_l Tumble_l Victory_l".split(" "), b.bodyAnimatiorName = "Prepare_b HighSliding_b Stagger_b Jump_b Tumble_b Victory_b".split(" "), b.curSpeed = 0, b.curRotationSpeed = 0, b.StaggerDuration = 0, b.targetPointIsEndPoint = !1, b.exitCollisionName = "", b.bodyChildLocationX = 0, b.isPlayStaggerAnitation = !1, b.boyBodyInitLocalPositin = new Laya.Vector3(0, 1.013354, .0106138), b.boyBodyChildInitLocalPositin = new Laya.Vector3(-1.013354, 0, -.0106138), b.girlBodyInitLocaPositin = new Laya.Vector3(0, .9469839, 0), b.girlBodyChildInitLocaPositin = new Laya.Vector3(-.9469839, 0, 0), b.curMoveAccelerationFactor = 2, b.curMoveAccelerationTime = 0, b.tweenArray = [], b.islinkToLeg = !1, b.needGravity = !1, b.isJump = !1, b.isPlayVibrate = !1, b.coinNum = 0, b;
            }
            return __extends(r, a), r.prototype.onEnable = function() {}, r.prototype.onDisable = function() {}, r.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.rig = this.GetObj().getComponent(Laya.Rigidbody3D);
                this.leftLegCollison = this.GetObj().getChildByName("LeftLegCollision");
                this.rightLegCollison = this.GetObj().getChildByName("RightLegCollision");
                d["default"].Instance.registCollision(this.leftLegCollison, this.rightLegCollison);
                this.leftLegEffect = this.leftLegCollison.getChildByName("eff_trail02");
                this.rightLegEffect = this.rightLegCollison.getChildByName("eff_trail01");
                this.suduxianEffect = this.GetObj().getChildByName("eff_suduxian");
                this.humanLookAtObj = e["default"].Instance.scene3d.getChildByName("humanLookAt");
                this.victoryEffect = this.GetObj().getChildByName("eff_jiesuan2");
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseDrag);
                this.initPlay();
            }, r.prototype.initPlay = function() {
                this.humanBody = l["default"].instance.humanBody;
                this.leg = this.humanBody.getChildByName("Prepare_l");
                this.legAnimator = this.leg.getComponent(Laya.Animator);
                this.body = this.humanBody.getChildByName("Body");
                this.bodyAnimator = this.body.getChildByName("Prepare_b").getComponent(Laya.Animator);
                this.bodyChild = this.body.getChildByName("Prepare_b");
                this.initModePostion();
                this.legAnimator.linkSprite3DToAvatarNode("Bip001 L Toe0", this.leftLegCollison);
                this.legAnimator.linkSprite3DToAvatarNode("Bip001 R Toe0", this.rightLegCollison);
                this.bodyChildLocationX = this.bodyChild.transform.localPositionX;
                this.curAction = c.EnumMana.PlayerActionState.Nomal;
                this.curSpeed = b["default"].nomalMoveSpeed;
                this.curRotationSpeed = b["default"].nomalRoationSpeed;
                this.StaggerDuration = 0;
                this.beginDrag = !1;
                this.legAnimator.crossFade(this.legAnimatiorName[0], .2, 0);
                this.bodyAnimator.crossFade(this.bodyAnimatiorName[0], .2, 0);
                this.currentTarget = null;
                this.normalTimer = this.deltaX = 0;
                this.isPlayStaggerAnitation = !1;
                this.SetRotationEuler(new Laya.Vector3(0, 0, 0));
                this.curMoveAccelerationFactor = 2;
                this.suduxianEffect.active = !1;
                this.victoryEffect.active = !1;
                this.rig.isKinematic = !0;
                this.leftLegCollison.active = !0;
                this.rightLegCollison.active = !0;
                this.curMoveAccelerationTime = this.tweenArray.length = 0;
                this.disableLegEffect();
                this.needGravity = !1;
            }, r.prototype.enableLegEffect = function() {
                var b = u["default"].Instance.spawnTrail();
                this.leftLegEffect.addChild(b);
                b.transform.localPosition = new Laya.Vector3(0, 0, 0);
                b = u["default"].Instance.spawnTrail();
                this.rightLegEffect.addChild(b);
                b.transform.localPosition = new Laya.Vector3(0, 0, 0);
            }, r.prototype.disableLegEffect = function() {
                for (var b = 0; b < this.leftLegEffect.numChildren; b++) {
                    var c = this.leftLegEffect.getChildAt(0);
                    c.destroy();
                }
                for (b = 0; b < this.rightLegEffect.numChildren; b++) c = this.rightLegEffect.getChildAt(0), c.destroy();
            }, r.prototype.initModePostion = function() {
                0 == g["default"].curModeType ? (this.body.transform.localPosition = this.girlBodyInitLocaPositin, this.bodyChild.transform.localPosition = this.girlBodyChildInitLocaPositin) : (this.body.transform.localPosition = this.boyBodyInitLocalPositin, this.bodyChild.transform.localPosition = this.boyBodyChildInitLocalPositin);
            }, r.prototype.onMouseDown = function() {
                this.eableDrag();
                console.log("onMouseDown = ", this.normalTimer);
            }, r.prototype.onMouseUp = function() {
                this.beginDrag = !1;
                this.lastNormalTimer = this.normalTimer;
            }, r.prototype.onMouseDrag = function() {}, r.prototype.eableDrag = function() {
                this.downPointX = Laya.MouseManager.instance.mouseX;
                this.beginDrag = !0;
            }, r.prototype.onUpdateOther = function() {
                (this.curAction != c.EnumMana.PlayerActionState.Suspended && this.curAction != c.EnumMana.PlayerActionState.Victory && (this.changeBodyParentToLeg(), this.beginDrag ? (this.deltaX = Laya.MouseManager.instance.mouseX - this.downPointX, this.normalTimer = this.lastNormalTimer + this.deltaX / 800, 0 > this.normalTimer ? this.normalTimer = 0 : .48 < this.normalTimer && (this.normalTimer = .48), this.legAnimator.crossFade(this.legAnimatiorName[1], b["default"].legSensitivity, 0, this.normalTimer)) : 0 == this.normalTimer ? this.legAnimator.crossFade(this.legAnimatiorName[0], .2) : this.legAnimator.crossFade(this.legAnimatiorName[1], b["default"].legSensitivity, 0, this.normalTimer)), this.currentTarget = this.getNextTarget(), this.curAction == c.EnumMana.PlayerActionState.Nomal ? this.downSpeed() : this.curAction == c.EnumMana.PlayerActionState.Accelerate ? this.upSpeed() : this.curAction == c.EnumMana.PlayerActionState.Jump, this.curAction != c.EnumMana.PlayerActionState.Jump) ? (this.curAction == c.EnumMana.PlayerActionState.Stagger && (this.StaggerDuration += n["default"].Instance.getDeltaTimer(), this.StaggerDuration > b["default"].StaggerToSuspendedDuration * b["default"].nomalMoveSpeed / this.curSpeed && this.humanFail()), this.moveToNextPoint(this.currentTarget, this.curSpeed, this.curRotationSpeed, this.currentTargetRoadName)) : (this.moveForward(this.curSpeed), this.moveDown(b["default"].gravityFator));
            }, r.prototype.onUpdateSpc = function() {
                a.prototype.onUpdateSpc.call(this);
                this.curAction == c.EnumMana.PlayerActionState.Victory && (this.downSpeedAfterTerminal(), this.moveForward(this.curSpeed));
            }, r.prototype.upSpeed = function() {
                this.curSpeed < b["default"].nomalMoveSpeed * this.curMoveAccelerationFactor ? this.curSpeed += .001 * n["default"].Instance.getDeltaTimer() * b["default"].nomalToAccelerSpeedFactor : this.curSpeed = b["default"].nomalMoveSpeed * this.curMoveAccelerationFactor;
                this.curRotationSpeed < b["default"].nomalRoationSpeed * this.curMoveAccelerationFactor ? this.curRotationSpeed += .001 * n["default"].Instance.getDeltaTimer() * b["default"].nomalToAccelerRoationSpeedFactor : this.curRotationSpeed = b["default"].nomalRoationSpeed * this.curMoveAccelerationFactor;
            }, r.prototype.downSpeed = function() {
                return 0 < this.curMoveAccelerationTime ? void(this.curMoveAccelerationTime -= n["default"].Instance.getDeltaTimer()) : (this.curSpeed > b["default"].nomalMoveSpeed ? this.curSpeed -= .001 * n["default"].Instance.getDeltaTimer() * b["default"].accelerToNomalSpeedDampingFator : (this.curSpeed = b["default"].nomalMoveSpeed, this.suduxianEffect.active = !1), void(this.curRotationSpeed > b["default"].nomalRoationSpeed ? this.curRotationSpeed -= .001 * n["default"].Instance.getDeltaTimer() * b["default"].accelerToNomalRoationSpeedDampingFator : this.curRotationSpeed = b["default"].nomalRoationSpeed));
            }, r.prototype.downSpeedAfterTerminal = function() {
                0 < this.curSpeed ? this.curSpeed -= .001 * n["default"].Instance.getDeltaTimer() * b["default"].nomalToEndSpeedFactor : this.curSpeed = 0;
            }, r.prototype.moveByPath = function(b) {}, r.prototype.changeBodyParentToLeg = function() {
                this.islinkToLeg || (this.leg.addChild(this.body), this.legAnimator.linkSprite3DToAvatarNode("Bip001 Pelvis", this.body), this.islinkToLeg = !0, console.log(" changeBodyParentToLeg"));
            }, r.prototype.changeBodyParentToHuman = function() {
                this.islinkToLeg && (this.bodyChild.transform.localPositionX = this.bodyChildLocationX, this.legAnimator.unLinkSprite3DToAvatarNode(this.body), this.humanBody.addChild(this.body), this.islinkToLeg = !1, this.initModePostion(), console.log(" changeBodyParentToHuman "));
            }, r.prototype.getNextTarget = function() {
                if (null == this.currentTarget)
                    for (var b = []; 0 < l["default"].instance.targets.length;) {
                        var c = l["default"].instance.targets.shift();
                        if (-1 == c.name.indexOf("CtrlPoint")) return b.push(c.transform.position), this.setNextTargetType(this.GetPosition(), b), -1 != c.name.indexOf("EndPoint") ? this.targetPointIsEndPoint = !0 : this.targetPointIsEndPoint = !1, this.currentTargetRoadName = c.parent.parent.name, c.transform.position;
                        b.push(c.transform.position);
                    } else {
                        if (!(Laya.Vector3.distance(this.GetPosition(), new Laya.Vector3(this.currentTarget.x, this.currentTarget.y, this.currentTarget.z)) < this.offsetFactor)) return this.currentTarget;
                        this.targetPointIsEndPoint ? (l["default"].instance.spwanNextWay(), l["default"].instance.updateAllRoadProgress(!0)) : l["default"].instance.updateAllRoadProgress(!1);
                        for (b = []; 0 < l["default"].instance.targets.length;) {
                            c = l["default"].instance.targets.shift();
                            if (-1 == c.name.indexOf("CtrlPoint")) return b.push(c.transform.position), this.setNextTargetType(this.GetPosition(), b), -1 != c.name.indexOf("EndPoint") ? this.targetPointIsEndPoint = !0 : this.targetPointIsEndPoint = !1, this.currentTargetRoadName = c.parent.parent.name, c.transform.position;
                            b.push(c.transform.position);
                        }
                    }
            }, r.prototype.legSideCollision = function(b, c) {}, r.prototype.startJump = function() {
                this.gravitySpeed = 0;
                this.curAction = c.EnumMana.PlayerActionState.Jump;
                this.disableLegEffect();
                0 == g["default"].curModeType ? Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX + .1
                }, 200) : Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX + .28
                }, 200);
                this.bodyAnimator.crossFade(this.bodyAnimatiorName[3], .2, 0);
            }, r.prototype.cancelJump = function(b) {
                this.curAction == c.EnumMana.PlayerActionState.Jump && (this.curAction = c.EnumMana.PlayerActionState.Nomal, this.currentTarget = this.getNextTarget(), this.enableLegEffect(), Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX
                }, 200), this.StaggerDuration = 0, this.GetTransForm().localRotationEulerX = 0, this.bodyAnimator.crossFade(this.bodyAnimatiorName[0], .2, 0), this.resetCurPosition(new Laya.Vector3(this.GetPosition().x, b, this.GetPosition().z), this.currentTarget));
            }, r.prototype.humanPassLevel = function() {
                this.victoryEffect.active = !0;
                this.disableLegEffect();
                d["default"].Instance.changeCameraToVictoryState();
                this.curAction = c.EnumMana.PlayerActionState.Victory;
                l["default"].instance.gameStatus = c.EnumMana.LevelState.gamePass;
                this.changeBodyParentToHuman();
                this.legAnimator.crossFade(this.legAnimatiorName[5], .2, 0);
                this.bodyAnimator.crossFade(this.bodyAnimatiorName[5], .2, 0);
                d["default"].Instance.passLevel();
            }, r.prototype.humanFail = function() {
                Laya.timer.clear(this, this.playShortVibrate);
                this.beginDrag = !1;
                this.suduxianEffect.active = !1;
                this.curAction = c.EnumMana.PlayerActionState.Suspended;
                l["default"].instance.gameStatus = c.EnumMana.LevelState.gameover;
                for (var b = 0; b < this.tweenArray.length; b++) {
                    var a = this.tweenArray[b];
                    a && a.clear();
                }
                return this.disableLegEffect(), this.needGravity && (this.rig.angularDamping = 1e5, this.leftLegCollison.active = !1, this.rightLegCollison.active = !1, this.rig.isKinematic = !1, this.rig.gravity = new Laya.Vector3(0, -120, 0)), l["default"].instance.isJumpDie ? (this.rig.angularDamping = 1e5, this.leftLegCollison.active = !1, this.rightLegCollison.active = !1, this.rig.isKinematic = !1, this.rig.gravity = new Laya.Vector3(0, -80, 0), this.legAnimator.play(this.legAnimatiorName[1]), this.changeBodyParentToHuman(), void d["default"].Instance.playOver(this.lastCollisionObj)) : (this.legAnimator.play(this.legAnimatiorName[1]), this.changeBodyParentToHuman(), this.bodyAnimator.play(this.bodyAnimatiorName[4]), this.legAnimator.play(this.legAnimatiorName[4]), void d["default"].Instance.playOver(this.lastCollisionObj));
            }, r.prototype.playShortVibrate = function() {
                h["default"].vibrateShort();
            }, r.prototype.legCollision = function(a, h) {
                var e = this;
                a = h.other.owner.name;
                if (-1 == a.indexOf("Coin") && (this.lastCollisionObj = h.other.owner), -1 != a.indexOf("DiedTriggle") || -1 != a.indexOf("Obstacle")) return console.log("碰到死亡点或者障碍物"), this.isJump && (l["default"].instance.isJumpDie = !0), void this.humanFail();
                if (-1 != a.indexOf("Termina")) return void this.humanPassLevel();
                (this.isPlayVibrate || -1 == a.indexOf("Passageway") && -1 == a.indexOf("InTriggle") ? this.isPlayVibrate && -1 == a.indexOf("Passageway") && -1 == a.indexOf("Coin") && -1 == a.indexOf("InTriggle") && (Laya.timer.clear(this, this.playShortVibrate), this.isPlayVibrate = !1) : (this.isPlayVibrate = !0, this.playShortVibrate(), Laya.timer.loop(200, this, this.playShortVibrate)), -1 == a.indexOf("JumpTriggle") && this.curAction == c.EnumMana.PlayerActionState.Jump && -1 == a.indexOf("Coin")) ? (this.isJump = !1, l["default"].instance.isJumpDie = !1, this.cancelJump(h.other.owner.transform.position.y)) : this.curAction != c.EnumMana.PlayerActionState.Stagger || -1 == a.indexOf("Plane") && -1 == a.indexOf("Curve") && -1 == a.indexOf("Downhill") && -1 == a.indexOf("Passageway") ? this.curAction != c.EnumMana.PlayerActionState.Accelerate || -1 == a.indexOf("Plane") && -1 == a.indexOf("OutTriggle") && -1 == a.indexOf("Curve") && -1 == a.indexOf("Passageway") || (this.curAction = c.EnumMana.PlayerActionState.Nomal, this.bodyAnimator.crossFade(this.bodyAnimatiorName[0], .2, 0), Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX
                }, 200)) : (this.isPlayStaggerAnitation || (this.bodyAnimator.crossFade(this.bodyAnimatiorName[2], .2, 0), this.isPlayStaggerAnitation = !0), this.StaggerDuration = 0, Laya.timer.once(500, this, function() {
                    e.curAction == c.EnumMana.PlayerActionState.Stagger && (e.curAction = c.EnumMana.PlayerActionState.Nomal);
                    e.isPlayStaggerAnitation = !1;
                }));
                this.curAction != c.EnumMana.PlayerActionState.Accelerate && -1 != a.indexOf("Accelerator") || -1 != a.indexOf("InTriggle") || -1 != a.indexOf("Downhill") ? (this.curAction = c.EnumMana.PlayerActionState.Accelerate, this.suduxianEffect.active = !0, this.bodyAnimator.crossFade(this.bodyAnimatiorName[1], .2, 0), 0 == g["default"].curModeType ? Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX + .08
                }, 200) : Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX + .22
                }, 200), -1 != a.indexOf("Accelerator")) ? (this.curMoveAccelerationFactor = b["default"].moveAccelerationFactor, l["default"].instance.ChangeAcceleratorMat(h.other.owner), this.curMoveAccelerationTime = b["default"].moveAccelerationDuration) : -1 != a.indexOf("InTriggle") ? this.curMoveAccelerationFactor = b["default"].movePassagewayAccelerationFactor : -1 != a.indexOf("Downhill") && (this.curMoveAccelerationFactor = b["default"].moveDownhillAccelerationFactor) : -1 != a.indexOf("JumpTriggle") && this.curAction != c.EnumMana.PlayerActionState.Jump ? (this.isJump = !0, this.startJump()) : -1 != a.indexOf("StaggerTriggle") && this.curAction != c.EnumMana.PlayerActionState.Jump ? (this.curAction = c.EnumMana.PlayerActionState.Stagger) : -1 != a.indexOf("Coin") && (d["default"].Instance.playerGetCoin(h.other.owner), this.coinNum++);
            }, r.prototype.leftLegAndSideCollisionStay = function(b, c) {}, r.prototype.rightLegAndSideCollisionStay = function(b, c) {}, r.prototype.leftLegAndSideCollisionExit = function(b, d) {
                var a = this;
                b = d.other.owner.name; - 1 != b.indexOf("Accelerator") && (this.curAction != c.EnumMana.PlayerActionState.Jump && (this.curAction = c.EnumMana.PlayerActionState.Nomal), this.bodyAnimator.crossFade(this.bodyAnimatiorName[0], .2, 0), Laya.Tween.to(this.bodyChild.transform, {
                    localPositionX: this.bodyChildLocationX
                }, 200)); - 1 != b.indexOf("StaggerTriggle") && this.curAction == c.EnumMana.PlayerActionState.Stagger && (this.isPlayStaggerAnitation || (this.isPlayStaggerAnitation = !0), this.StaggerDuration = 0, Laya.timer.once(500, this, function() {
                    a.curAction == c.EnumMana.PlayerActionState.Stagger && (a.curAction = c.EnumMana.PlayerActionState.Nomal);
                    a.isPlayStaggerAnitation = !1;
                }));
            }, r.prototype.rightLegAndSideCollisionExit = function(b, d) {
                var a = this;
                b = d.other.owner.name; - 1 != b.indexOf("Accelerator") && (this.curAction != c.EnumMana.PlayerActionState.Jump && (this.curAction = c.EnumMana.PlayerActionState.Nomal), this.bodyAnimator.crossFade(this.bodyAnimatiorName[0], .2, 0)); - 1 != b.indexOf("StaggerTriggle") && this.curAction == c.EnumMana.PlayerActionState.Stagger && (this.isPlayStaggerAnitation || (this.isPlayStaggerAnitation = !0), this.StaggerDuration = 0, Laya.timer.once(500, this, function() {
                    a.curAction == c.EnumMana.PlayerActionState.Stagger && (a.curAction = c.EnumMana.PlayerActionState.Nomal);
                    a.isPlayStaggerAnitation = !1;
                }));
            }, r.prototype.onCollisionEnter = function(b) {
                if (l["default"].instance.gameStatus == c.EnumMana.LevelState.playing) {
                    var d = b.other.owner.name;
                    (-1 != d.indexOf("InTriggle") && (this.needGravity = !0, console.log(" this.needGravity = true")), (-1 != d.indexOf("Plane") || -1 != d.indexOf("Curve") || -1 != d.indexOf("Downhill")) && (this.needGravity = !1, console.log(" this.needGravity = false")), -1 != d.indexOf("Passageway") || -1 != d.indexOf("Obstacle")) ? ((b = b.other.owner.getChildAt(0)) && (b.active = !0), b = b.meshRenderer.material, -1 != d.indexOf("Obstacle") ? (b.albedoColorA = 0, this.tweenArray.push(Laya.Tween.to(b, {
                        albedoColorA: .6
                    }, 500))) : -1 != d.indexOf("Passageway_06") ? (b.albedoColorA = 0, this.tweenArray.push(Laya.Tween.to(b, {
                        albedoColorA: .6
                    }, 1200))) : (b.albedoColorA = 0, this.tweenArray.push(Laya.Tween.to(b, {
                        albedoColorA: .6
                    }, 800)))) : -1 != d.indexOf("InTriggle") && ((b = b.other.owner.parent.getChildByName("Passageway_07").getChildAt(0)) && (b.active = !0), b = b.meshRenderer.material, b.albedoColorA = 0, this.tweenArray.push(Laya.Tween.to(b, {
                        albedoColorA: .6
                    }, 4e3)));
                }
            }, r.prototype.onCollisionExit = function(d) {
                l["default"].instance.gameStatus == c.EnumMana.LevelState.playing && -1 != d.other.owner.name.indexOf("Accelerator") && (this.curMoveAccelerationFactor = b["default"].moveAccelerationFactor, l["default"].instance.ChangeAcceleratorMatToNomal(d.other.owner));
            }, r.prototype.lookAtNextPoint = function(b) {
                a.prototype.lookAtNextPoint.call(this, b);
                this.humanLookAtObj.transform.position = this.GetPosition();
                this.humanLookAtObj.transform.lookAt(b, new Laya.Vector3(0, 1, 0));
                var c = this.humanLookAtObj.transform.rotationEuler;
                b = new Laya.Quaternion();
                Laya.Quaternion.createFromYawPitchRoll(q.MathTool.getRadian(c.y), q.MathTool.getRadian(c.x), q.MathTool.getRadian(c.z), b);
                c = new Laya.Quaternion();
                Laya.Quaternion.lerp(this.GetTransForm().rotation, b, .001 * n["default"].Instance.getDeltaTimer(), c);
                this.GetTransForm().rotation = c;
            }, r.prototype.computeQuat = function(b) {
                this.humanLookAtObj.transform.position = this.GetPosition();
                var c = new Laya.Vector3();
                this.humanLookAtObj.transform.getUp(c);
                Laya.Vector3.normalize(c, c);
                this.humanLookAtObj.transform.lookAt(b, c);
                this.computNextQuaternion(this.GetPosition(), b, this.humanLookAtObj.transform.rotationEuler);
            }, r;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../GameLogic/GameCustomConfig": 10,
        "../GameLogic/GameLogic": 11,
        "../mgr3d/GameMgr": 17,
        "../mgr3d/GameObjFactory": 18,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/VibrateMgr": 29,
        "../models/UserData": 33,
        "../tools/LayaTimeMgr": 40,
        "../tools/MathTool": 41,
        "./Actor": 3,
        "./ActorCtrl": 4
    }],
    7: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./CollisinBase");
        var e = a("./ActorCtrl"),
            d = a("../mgr3d/GameMgr");
        a = function(b) {
            function c() {
                var c = b.call(this) || this;
                return c.hitresult = new Laya.HitResult(), c;
            }
            return __extends(c, b), c.prototype.onAwake = function() {
                b.prototype.onAwake.call(this);
                this.collisionName = this.owner.name;
                this.ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            }, c.prototype.onEnable = function() {}, c.prototype.onDisable = function() {}, c.prototype.rayCheck = function() {
                var b = new Laya.Vector3();
                (d["default"].instance.humanObj.transform.getForward(b), this.ray.origin = this.GetPosition(), this.ray.direction = new Laya.Vector3(0, -1, 0), d["default"].instance.getScene3d().physicsSimulation.rayCast(this.ray, this.hitresult), this.hitresult.succeeded && -1 != this.hitresult.collider.owner.name.indexOf("Plane")) && .43 >= Laya.Vector3.distance(this.hitresult.point, this.GetPosition()) && (console.log("应该着陆了"), e["default"].Instance.rayCheckCancelJump(this.hitresult.collider.owner.transform.position.y));
            }, c.prototype.handleCollision = function(c) {
                b.prototype.handleCollision.call(this, c); - 1 != this.collisionName.indexOf("Side") ? e["default"].Instance.legSideCollision(this.collisionName, c) : e["default"].Instance.legCollision(this.collisionName, c);
            }, c.prototype.handleCollisionStay = function(c) {
                b.prototype.handleCollisionStay.call(this, c); - 1 != this.collisionName.indexOf("Right") ? e["default"].Instance.rightLegAndSideCollisionStay(this.collisionName, c) : e["default"].Instance.leftLegAndSideCollisionStay(this.collisionName, c);
            }, c.prototype.handleCollisionExit = function(c) {
                b.prototype.handleCollisionExit.call(this, c); - 1 != this.collisionName.indexOf("Right") ? e["default"].Instance.rightLegAndSideCollisionExit(this.collisionName, c) : e["default"].Instance.leftLegAndSideCollisionExit(this.collisionName, c);
            }, c;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "./ActorCtrl": 4,
        "./CollisinBase": 5
    }],
    8: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                return a.call(this) || this;
            }
            return __extends(d, a), d.prototype.InitBase = function() {
                this.obj = this.owner;
            }, d.prototype.SetPosition = function(b) {
                this.obj.transform.position = b;
            }, d.prototype.GetPosition = function() {
                return this.obj.transform.position.clone();
            }, d.prototype.Translate = function(b, c) {
                this.obj.transform.translate(b, c);
            }, d.prototype.SetRotate = function(b, c, d) {
                this.obj.transform.rotate(b, c, d);
            }, d.prototype.GetTransForm = function() {
                return this.obj.transform;
            }, d.prototype.SetRotationEuler = function(b) {
                this.obj.transform.rotationEuler = b;
            }, d.prototype.GetRotationEuler = function() {
                return this.obj.transform.rotationEuler.clone();
            }, d.prototype.SetScale = function(b) {
                this.obj.transform.scale = b;
            }, d.prototype.GetObj = function() {
                return this.obj;
            }, d.prototype.Hidden = function() {
                this.obj.active = !1;
            }, d.prototype.Show = function() {
                this.obj.active = !0;
            }, d.prototype.Active = function() {
                return this.obj.active;
            }, d.prototype.Destroy = function() {
                this.obj.destroy();
            }, d;
        }(Laya.Script3D);
        f.BaseScript = a;
    }, {}],
    9: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseScript");
        var e = a("../tools/MathTool"),
            d = a("../mgrCommon/EnumMana"),
            b = a("../tools/MyLog"),
            c = a("../mgrCommon/GameUtility"),
            n = a("../tools/LayaTimeMgr"),
            l = a("./GameCustomConfig"),
            g = a("../mgr3d/GameMgr");
        a = function(a) {
            function h() {
                var b = a.call(this) || this;
                return b.intType = 1e3, b.numType = 1e3, b.strType = "hello laya", b.boolType = !0, b.offsetVec = new Laya.Vector3(), b.lerpSpeed = 6, b.isNeedFollow = !1, b.moveSpeed = 0, b.rotationSpeed = 0, b.cameraFollowQt = new Laya.Quaternion(), b.hitresults = [], b.isLookAt = !1, b;
            }
            return __extends(h, a), h.prototype.onEnable = function() {}, h.prototype.onAwake = function() {
                this.InitBase();
                this.initPostion = this.GetPosition();
                this.initEuler = this.GetRotationEuler();
                this.ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                this.InitCamera();
            }, h.prototype.InitCamera = function() {
                this.myPlayr = g["default"].instance.humanObj;
                this.mPlayerStartHeight = this.myPlayr.transform.position.y;
                this.moveSpeed = l["default"].cameraLineMoveSpeed;
                this.rotationSpeed = l["default"].cameraLineRotaionSpeed;
                this.GetTransForm().position = this.initPostion;
                this.GetTransForm().rotationEuler = this.initEuler;
                Laya.Vector3.subtract(this.myPlayr.transform.position, this.GetPosition(), this.offsetVec);
                this.offsetAnglex = this.GetRotationEuler().x;
                this.offsetAngley = this.GetRotationEuler().y;
                this.offsetAnglez = this.GetRotationEuler().z;
                this._offsetEuler = c["default"].Vector3Sub(this.GetTransForm().rotationEuler, this.myPlayr.transform.rotationEuler);
                b["default"].log("this.GetRotationEuler().x= " + this.GetRotationEuler().x + "this.GetRotationEuler().y = " + this.GetRotationEuler().y + "+this.GetRotationEuler().z =" + this.GetRotationEuler().z);
                this.cameraVictoryNode = g["default"].instance.cameraVictoryNode;
                this.cameraShopNode = g["default"].instance.cameraShopNode;
                this.cameraNomalNode = g["default"].instance.cameraNomalNode;
                this.cameraFollowState = d.EnumMana.CameraFollowState.Nomal;
            }, h.prototype.CameraFollowNormal = function() {
                if (null != this.myPlayr && null != this.myPlayr.transform) {
                    var b = this.myPlayr.transform.rotationEuler.y,
                        d = this.myPlayr.transform.rotationEuler.x,
                        a = (this.myPlayr.transform.rotationEuler.z, new Laya.Quaternion());
                    c["default"].getUp(this.myPlayr);
                    Laya.Quaternion.createFromYawPitchRoll(c["default"].getRadian(b), c["default"].getRadian(d), 0, a);
                    var h = new Laya.Vector3();
                    Laya.Vector3.transformQuat(this.offsetVec, a, h);
                    a = new Laya.Vector3();
                    Laya.Vector3.subtract(this.myPlayr.transform.position, this.GetPosition(), a);
                    Laya.Vector3.lerp(a, h, .001 * n["default"].Instance.getDeltaTimer() * this.moveSpeed, a);
                    h = c["default"].Vector3Sub(this.myPlayr.transform.position, a);
                    this.SetPosition(h);
                    Laya.Quaternion.createFromYawPitchRoll(e.MathTool.getRadian(this.offsetAngley + b), e.MathTool.getRadian(this.offsetAnglex + d), 0, this.cameraFollowQt);
                    b = new Laya.Quaternion();
                    Laya.Quaternion.lerp(this.GetTransForm().rotation, this.cameraFollowQt, .001 * n["default"].Instance.getDeltaTimer() * this.rotationSpeed, b);
                    this.GetTransForm().rotation = b;
                }
            }, h.prototype.CameraFollowVictory = function() {
                var b = new Laya.Vector3();
                Laya.Vector3.lerp(this.GetPosition(), this.cameraVictoryNode.transform.position, .02, b);
                this.SetPosition(b);
                Laya.Quaternion.createFromYawPitchRoll(e.MathTool.getRadian(this.cameraVictoryNode.transform.rotationEuler.y), e.MathTool.getRadian(this.cameraVictoryNode.transform.rotationEuler.x), e.MathTool.getRadian(this.cameraVictoryNode.transform.rotationEuler.z), this.cameraFollowQt);
                b = new Laya.Quaternion();
                Laya.Quaternion.lerp(this.GetTransForm().rotation, this.cameraFollowQt, .001 * n["default"].Instance.getDeltaTimer(), b);
                b = g["default"].instance.humanBody.getChildByName("Body");
                this.GetTransForm().lookAt(b.transform.position, new Laya.Vector3(0, 1, 0));
            }, h.prototype.CameraFollowShop = function() {
                var b = g["default"].instance.humanBody,
                    c = new Laya.Vector3();
                Laya.Vector3.lerp(this.GetPosition(), this.cameraShopNode.transform.position, .013, c);
                this.SetPosition(c);
                this.GetTransForm().lookAt(new Laya.Vector3(b.transform.position.x, b.transform.position.y - .5, b.transform.position.z), new Laya.Vector3(0, 1, 0));
            }, h.prototype.CameraFollowShopToNomal = function() {
                var b = new Laya.Vector3();
                Laya.Vector3.lerp(this.GetPosition(), this.cameraNomalNode.transform.position, .013, b);
                this.SetPosition(b);
                b = g["default"].instance.humanBody.getChildByName("Body");
                this.GetTransForm().lookAt(b.transform.position, new Laya.Vector3(0, 1, 0));
            }, h.prototype.cameraLookAtPlayer = function() {
                var b = g["default"].instance.humanBody.getChildByName("Body");
                this.cameraNomalNode.transform.lookAt(b.transform.position, new Laya.Vector3(0, 1, 0));
                Laya.Quaternion.createFromYawPitchRoll(e.MathTool.getRadian(this.cameraNomalNode.transform.rotationEuler.y), e.MathTool.getRadian(this.cameraNomalNode.transform.rotationEuler.x), e.MathTool.getRadian(this.cameraNomalNode.transform.rotationEuler.z), this.cameraFollowQt);
                b = new Laya.Quaternion();
                Laya.Quaternion.lerp(this.GetTransForm().rotation, this.cameraFollowQt, .001 * n["default"].Instance.getDeltaTimer(), b);
                this.GetTransForm().rotation = b;
            }, h.prototype.setCameraMoveAndRotationSpeed = function(b, c) {
                this.moveSpeed = b;
                this.rotationSpeed = c;
            }, h.prototype.onLateUpdate = function() {
                this.isNeedFollow && (this.cameraFollowState == d.EnumMana.CameraFollowState.Nomal ? this.CameraFollowNormal() : this.cameraFollowState == d.EnumMana.CameraFollowState.Victory ? this.CameraFollowVictory() : this.cameraFollowState == d.EnumMana.CameraFollowState.Shop ? this.CameraFollowShop() : this.cameraFollowState == d.EnumMana.CameraFollowState.ShopToNomal ? this.CameraFollowShopToNomal() : this.cameraFollowState == d.EnumMana.CameraFollowState.LookAt && this.cameraLookAtPlayer());
            }, h.prototype.cameraStopFollow = function() {
                this.isNeedFollow = !1;
            }, h.prototype.cameraStartFollow = function() {
                this.isNeedFollow = !0;
            }, h.prototype.onDisable = function() {}, h.prototype.rayCheck = function() {
                var b = new Laya.Vector3(0, 0, 0);
                if (Laya.Vector3.subtract(new Laya.Vector3(this.myPlayr.transform.position.x, this.myPlayr.transform.position.y + 1, this.myPlayr.transform.position.z), this.GetPosition(), b), this.ray.origin = this.GetPosition(), this.ray.direction = b, g["default"].instance.getScene3d().physicsSimulation.rayCastAll(this.ray, this.hitresults, Laya.Vector3.scalarLength(b)), 0 < this.hitresults.length)
                    for (b = 0; b < this.hitresults.length; b++) {
                        var c = this.hitresults[b].collider.owner;
                        !c.name || -1 == c.name.indexOf("Plane") && -1 == c.name.indexOf("Downhill") && -1 == c.name.indexOf("Passageway") || (c = c.meshRenderer.material, c.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, c.albedoColorA = .2);
                    }
            }, h;
        }(m.BaseScript);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/GameUtility": 23,
        "../tools/LayaTimeMgr": 40,
        "../tools/MathTool": 41,
        "../tools/MyLog": 43,
        "./BaseScript": 8,
        "./GameCustomConfig": 10
    }],
    10: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function() {
            function a() {}
            return a.wayMoveSpeed = 6.2, a.skyMoveSpeed = 1.2, a.legSensitivity = .1, a.nomalMoveSpeed = 5, a.nomalRoationSpeed = 1, a.moveAccelerationFactor = 2, a.moveDownhillAccelerationFactor = 1.3, a.movePassagewayAccelerationFactor = 1.2, a.accelerToNomalSpeedDampingFator = 2, a.nomalToAccelerSpeedFactor = 15, a.StaggerToSuspendedDuration = 300, a.nomalToEndSpeedFactor = 5, a.gravityFator = 1.8, a.cameraLineMoveSpeed = 6, a.cameraLineRotaionSpeed = 3, a.cameraCurveMoveSpeed = 12, a.cameraCurveRotaionSpeed = 8, a.cameraSpcCurveMoveSpeed = 13, a.cameraSpcCurveRotaionSpeed = 12, a.moveAccelerationDuration = 1e3, a.accelerToNomalRoationSpeedDampingFator = 2, a.nomalToAccelerRoationSpeedFactor = 6, a;
        }();
        f["default"] = a;
    }, {}],
    11: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgrCommon/EnumMana"),
            d = a("../mgrCommon/EventMgr"),
            b = a("../mgr3d/GameMgr"),
            c = a("../models/ConfigData"),
            n = a("../models/UserData");
        a = function(a) {
            function g() {
                var b = a.call(this) || this;
                return b.intType = 1e3, b.numType = 1e3, b.strType = "hello laya", b.boolType = !0, b.isGameHide = !1, b.gameState = e.EnumMana.LevelState.wait, b.haveShowHelp = !1, b;
            }
            return __extends(g, a), Object.defineProperty(g, "Instance", {
                get: function() {
                    return null == this._gameLogic && (this._gameLogic = new g()), this._gameLogic;
                },
                enumerable: !0,
                configurable: !0
            }), g.prototype.InitGame = function(b) {}, g.prototype.ResetForHome = function() {}, g.prototype.StartGame = function() {
                this.gameState = e.EnumMana.LevelState.playing;
                console.log("this.gameState = EnumMana.LevelState.playing");
                this.cameraController.cameraStartFollow();
            }, g.prototype.PasueGame = function() {
                d["default"].instance.emit("pauseGameForHelp");
                this.gameState = e.EnumMana.LevelState.pause;
            }, g.prototype.ContinueGame = function() {
                this.gameState = e.EnumMana.LevelState.playing;
            }, g.prototype.BoatTurnedOver = function(b) {
                this.cameraController.cameraStopFollow();
                var c = {
                    tips: b ? "在空中松开手指可以停止翻转，再来一次~" : "在空中也可以滑动屏幕控制方向，再试试~"
                };
                Laya.timer.once(1e3, this, function() {
                    d["default"].instance.emit("openResurgence", c);
                });
            }, g.prototype.BoatReborn = function() {}, g.prototype.GameOver = function(a, l) {
                g.Instance.gameState = e.EnumMana.LevelState.gameover;
                b["default"].instance.trySkinBoatRes = null;
                a = {
                    tips: a,
                    type: 1,
                    passNum: n["default"].level,
                    isGoldeggs: !1,
                    isPass: !1,
                    levelCoin: 0,
                    _type: c.SORTTYPE.LEVEL
                };
                c["default"].ctrlInfo.isWudian && 1 == c["default"].ctrlInfo.isGoldeggs && 1 == n["default"].isGoldeggs ? (console.log("ConfigData.ctrlInfo.isGoldeggs = " + c["default"].ctrlInfo.isGoldeggs), console.log("UserData.isGoldeggs = " + n["default"].isGoldeggs), d["default"].instance.emit("openGoldenEggView", {
                    data: a
                })) : d["default"].instance.emit("openSettleCoinView", a);
            }, g.prototype.FinishedLevle = function() {
                var b = this;
                g.Instance.gameState = e.EnumMana.LevelState.gameover;
                Laya.timer.once(2e3, this, function() {
                    b.cameraController.cameraStopFollow();
                    var a = {
                        type: 1,
                        passNum: n["default"].level,
                        isPass: !0,
                        isGoldeggs: !1,
                        levelCoin: 0,
                        _type: c.SORTTYPE.LEVEL
                    };
                    c["default"].ctrlInfo.isWudian && 1 == c["default"].ctrlInfo.isGoldeggs && 1 == n["default"].isGoldeggs ? (console.log("ConfigData.ctrlInfo.isGoldeggs = " + c["default"].ctrlInfo.isGoldeggs), console.log("UserData.isGoldeggs = " + n["default"].isGoldeggs), d["default"].instance.emit("openGoldenEggView", {
                        data: a
                    })) : d["default"].instance.emit("openSettleCoinView", a);
                    n["default"].level++;
                });
            }, g.prototype.GameRestart = function() {
                this.InitGame(n["default"].level);
            }, g.prototype.StartCameraAnimator = function() {}, g.prototype.StopCameraAnimator = function() {}, g.prototype.GetTreasureBox = function() {}, g.prototype.onEnable = function() {}, g.prototype.onDisable = function() {}, g;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventMgr": 22,
        "../models/ConfigData": 31,
        "../models/UserData": 33
    }],
    12: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./models/ConfigData"),
            d = a("./mgrCommon/HttpMgr"),
            b = a("./mgrCommon/StorageMgr"),
            c = a("./mgrCommon/StatisticsMgr"),
            n = a("./mgrCommon/PlatformMgr"),
            l = a("./models/UserData");
        a = function(a) {
            function h() {
                return null !== a && a.apply(this, arguments) || this;
            }
            return __extends(h, a), h.prototype.login = function() {
                var b = this;
                b.loginFun();
            }, h.prototype.loginFun = function() {
                var b = this;
                b.loginSuccess(c);
            }, h.prototype.loginSuccess = function(a) {
                l["default"].isLogin = !0, l["default"].gold = platform.getInstance().getStorageSync("userMoney") || 0, l["default"].level = platform.getInstance().getStorageSync("d_level") || 1, l["default"].unlockingView = platform.getInstance().getStorageSync("unlockingView") || {};
                l["default"].allView = platform.getInstance().getStorageSync("allView") || {
                    1: 0
                };
                l["default"].isAwardMoney = a.isAwardMoney, d["default"].instance.getSystemConfig(), b["default"].saveUserData(), c["default"].instance.loginStatisticsPost()
            }, h;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "./mgrCommon/HttpMgr": 24,
        "./mgrCommon/PlatformMgr": 25,
        "./mgrCommon/StatisticsMgr": 27,
        "./mgrCommon/StorageMgr": 28,
        "./models/ConfigData": 31,
        "./models/UserData": 33
    }],
    13: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./mgrCommon/PlatformMgr"),
            d = a("./models/ConfigData"),
            b = a("./mgrCommon/StorageMgr"),
            c = a("./Login"),
            n = a("./mgrCommon/ViewMgr"),
            l = a("./mgrCommon/StatisticsMgr"),
            g = a("./mgrCommon/HttpMgr");
        a = function() {
            function a() {}
            return a.init = function() {
                d["default"].initLocal();
                b["default"].getLocalUserData();
                e["default"].initPlatform();
                n["default"].instance.init();
                l["default"].instance.init();
                new c["default"]().login();
            }, a;
        }();
        f["default"] = a;
    }, {
        "./Login": 12,
        "./mgrCommon/HttpMgr": 24,
        "./mgrCommon/PlatformMgr": 25,
        "./mgrCommon/StatisticsMgr": 27,
        "./mgrCommon/StorageMgr": 28,
        "./mgrCommon/ViewMgr": 30,
        "./models/ConfigData": 31
    }],
    14: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = Laya.Vector3,
            d = a("../tools/MathUtil");
        a = function() {
            function b() {}
            return b.PathAlgorithm = function(b, a) {
                if (a) {
                    for (var c = new e(0, 0, 0), d = 0; d < a.length; d++) e.add(c, this.ItemPosition(b, a, d), c);
                    return c;
                }
                return console.error("path sample is null!"), new e(0, 0, 0);
            }, b.ItemPosition = function(b, a, e) {
                return d["default"].ScaleV(a[e], this.Combination(a.length - 1, e) * this.Progress(b, a.length - 1, e));
            }, b.Combination = function(b, a) {
                return 0 == a ? 1 : this.Combination(b - 1, a - 1) * b / a;
            }, b.Progress = function(b, a, d) {
                return Math.pow(1 - b, a - d) * Math.pow(b, d);
            }, b;
        }();
        f["default"] = a;
    }, {
        "../tools/MathUtil": 42
    }],
    15: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./GameObjFactory");
        a = function(a) {
            function b() {
                return a.call(this) || this;
            }
            return __extends(b, a), Object.defineProperty(b, "Instance", {
                get: function() {
                    return null == this._effectMgr && (this._effectMgr = new b()), this._effectMgr;
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.playGetGoldEffectAtPostion = function(b) {
                this.playEffectAtPostion("eff_shiqu", b, 600);
            }, b.prototype.playEffectAtPostion = function(b, a, d) {
                var c = e["default"].Instance.spawnEffectByName(b);
                c.transform.position = a.clone();
                c.active = !0;
                Laya.timer.once(d, this, function() {
                    c.active = !1;
                });
            }, b.prototype.moveObject = function(b, a) {
                b.position = a;
            }, b.prototype.onEnable = function() {}, b.prototype.onDisable = function() {}, b;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "./GameObjFactory": 18
    }],
    16: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                var b = a.call(this) || this;
                return b.spirt3dCollisionMap = {}, b.spirt3dCollisionIdArray = [], b.test_registCount = 0, b.test_unRegistCount = 0, b.test_mapUnRegistCount = 0, b.test_arrayUnRegistCount = 0, b;
            }
            return __extends(d, a), Object.defineProperty(d, "Instance", {
                get: function() {
                    return null == this._gameCollisionMgr && (this._gameCollisionMgr = new d()), this._gameCollisionMgr;
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.resetGameCollisionMgr = function() {
                this.spirt3dCollisionMap = {};
                this.spirt3dCollisionIdArray = [];
                this.test_arrayUnRegistCount = this.test_mapUnRegistCount = this.test_unRegistCount = this.test_registCount = 0;
            }, d.prototype.registCollisin = function(b) {
                return this.test_registCount++, this.spirt3dCollisionMap[b.id] ? void console.log("重复注册碰撞") : (this.spirt3dCollisionMap[b.id] = b, void this.spirt3dCollisionIdArray.push(b.id));
            }, d.prototype.isRegistCollision = function(b) {
                return this.spirt3dCollisionMap[b.id] ? !0 : !1;
            }, d.prototype.unRegistCollision = function(b) {
                if (this.test_unRegistCount++, !this.spirt3dCollisionMap[b.id]) return !1;
                delete this.spirt3dCollisionMap[b.id];
                this.test_mapUnRegistCount++;
                for (var c = -1, a = 0; a < this.spirt3dCollisionIdArray.length; a++)
                    if (this.spirt3dCollisionIdArray[a] == b.id) {
                        c = a;
                        break;
                    }
                return -1 != c ? (this.spirt3dCollisionIdArray.splice(c, 1), this.test_arrayUnRegistCount++, !0) : (console.log("找不到碰撞物注册ID，无法注销"), !1);
            }, d.prototype.checkCollision = function(b) {
                var c = this;
                console.log("checkCollision id  = ", b.id);
                var a = new Laya.Vector3(.5, .5, .5),
                    d = new Laya.OrientedBoundBox(a, b.transform.worldMatrix),
                    g = new Laya.OrientedBoundBox(a, b.transform.worldMatrix),
                    h = [];
                return this.spirt3dCollisionIdArray.forEach(function(a) {
                    var e = c.spirt3dCollisionMap[a];
                    if (console.log("b  id= ", e.id), console.log("b  postion= ", e.transform.position), g.transformation = e.transform.worldMatrix, console.log("ACollision.containsOrientedBoundBox(BCollision) = ", d.containsOrientedBoundBox(g)), a != b.id && 0 != d.containsOrientedBoundBox(g)) e.active ? h.push(e) : (a = -1 != e.parent.name.indexOf("Collision") ? e.parent.parent.name : e.parent.parent.parent.name, console.error("已隐藏物体没有注销碰撞，该物体为 父物体为：" + a + ",该物体具体信息如下：", e));
                }), console.log("checkCollision collsionSpArray  = ", h), h;
            }, d.prototype.checkCollisionByPoint = function(b, c) {
                var a = this,
                    d = new Laya.Vector3(.5, .5, .5),
                    g = [];
                return this.spirt3dCollisionIdArray.forEach(function(h) {
                    var e = a.spirt3dCollisionMap[h],
                        l = new Laya.OrientedBoundBox(d, e.transform.worldMatrix);
                    h != b && 0 != l.containsPoint(c) && (e.active || -1 != e.name.indexOf("Triggle") ? g.push(e) : console.log("检测到碰撞，但是碰撞物是隐藏的 b =", e));
                    Laya;
                }), g;
            }, d.prototype.onEnable = function() {}, d.prototype.onDisable = function() {}, d;
        }(Laya.Script);
        f["default"] = a;
    }, {}],
    17: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/CurrGameData"),
            d = a("../mgrCommon/EventMgr"),
            b = a("./MyGameEvent"),
            c = a("../GameLogic/GameLogic"),
            n = a("../GameLogic/CameraController"),
            l = a("../mgrCommon/EnumMana"),
            g = a("../tools/MathTool"),
            h = a("../models/ConfigData"),
            q = a("../models/UserData"),
            u = a("./GameObjFactory"),
            v = a("../GameActor/ActorCtrl"),
            r = a("../mgrCommon/EventDefine"),
            k = a("../mgrCommon/StorageMgr"),
            p = a("../GameActor/Human"),
            w = a("../tools/MathUtil");
        a = (a("../tools/MyUtils"), function(a) {
            function t() {
                var b = null !== a && a.apply(this, arguments) || this;
                return b.decorationNames = ["Decoration_01", "Decoration_02", "Decoration_03", "Decoration_04", "Decoration_05"], b._fogColors = [], b.playZpostion = 0, b.playerInitHeight = .21, b.wayArray = [], b.AIWayArray = [], b.AIWayPostionArray = [], b.initWayNumber = 2, b.initPostionY = -.1, b.isSetTerminal = !1, b.RecyObstaclesPools = {}, b.EffectPools = {}, b.RankPools = {}, b.PlayesPools = {}, b.clearObstaclesLenght = 30, b.CoinsPool = [], b.TreasureBoxPool = [], b.AIConfigData = null, b.curLevelAIData = [], b.Stage1Datas = null, b.Stage2Datas = null, b.StageDatas = [], b.StageData = null, b.AITest = !1, b.curLevelData = [], b.firstWayZpostion = 0, b.wayLenght = 17.8, b.nextWayIndex = 0, b.curActiveWayArray = [], b.curAllWayArray = [], b.gameStatus = l.EnumMana.LevelState.wait, b.overWayId = -1, b.curPassDistance = 0, b.hasCreatTerminal = !1, b.isPassLevel = !1, b.isTestMode = !1, b.initCameraYposition = 0, b.curWayPosition = new Laya.Vector3(0, 0, 0), b.targets = [], b.humanInitPositin = new Laya.Vector3(0, 0, -1), b.overBirdWayIndex = -1, b.curCoinPassIndex = [], b.decorations = [], b.curGoldCount = 0, b.coinIdMap = {}, b.isJumpDie = !1, b.reviveCount = 0, b.coinNun = 0, b.decorationPosMap = {
                    Decoration_01: {
                        offsetX: 60,
                        offsetZ: -30,
                        offsetY: 0,
                        distance: 50,
                        initNum: 6
                    },
                    Decoration_02: {
                        offsetX: 60,
                        offsetZ: -30,
                        offsetY: 0,
                        distance: 50,
                        initNum: 6
                    },
                    Decoration_03: {
                        offsetX: 20,
                        offsetZ: -30,
                        offsetY: 0,
                        distance: 20,
                        initNum: 8
                    },
                    Decoration_04: {
                        offsetX: 20,
                        offsetZ: -30,
                        offsetY: 0,
                        distance: 50,
                        initNum: 6
                    }
                }, b.endDecorationPos = null, b.roadCount = 0, b.curFinishedRoadCount = 0, b.lastEndPoint = 0, b.curUseSkinId = 1, b.girlIds = [1, 3, 4, 5, 6], b;
            }
            return __extends(t, a), Object.defineProperty(t, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new t()), this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onAwake = function() {
                t._instance = this;
                this._gameEvent = new b["default"]();
                this._currGameData = new e["default"]();
                this._scene3d = this.owner;
                u["default"].Instance.init(this._scene3d);
                this.skyBox = this.owner.getChildByName("sky");
                this.birdEggMats = this.owner.getChildByName("BirdSquareMats");
                this.humanObj = this.owner.getChildByName("human");
                this.changjing = this.owner.getChildByName("Changjing");
                this.changjingMat = this.owner.getChildByName("ChangjingMat");
                this.camera = this.owner.getChildByName("Main Camera");
                this.cameraVictoryNode = this.humanObj.getChildByName("VictoryCameraPosition");
                this.cameraShopNode = this.humanObj.getChildByName("ShopCameraPosition");
                this.cameraNomalNode = this.humanObj.getChildByName("NormalCamerPostion");
                this.boyBody = this.humanObj.getChildByName("humanBody2");
                this.girlBody = this.humanObj.getChildByName("humanBody");
                this.ChangeSkinById(q["default"].curSelectViewId);
                this.humanScript = this.humanObj.addComponent(p["default"]);
                this.initCameraYposition = this.camera.transform.localPositionY;
                this.cameraAnimation = this.camera.getComponent(Laya.Animator);
                this.cameraAnimation.enabled = !1;
                this.wayPool = this.owner.getChildByName("WayPool");
                this.waterPlane = this.owner.getChildByName("Water");
                this.curUseSkinId = q["default"].curSelectViewId;
                c["default"].Instance.player = this.humanObj;
                c["default"].Instance.camera = this.camera;
                c["default"].Instance.camera.orthographicVerticalSize = 20;
                c["default"].Instance.scene3d = this.owner;
                this.cameraController = this.camera.addComponent(n["default"]);
                this.CameraInitPostion = this.camera.transform.position;
                this.CameraInitEuler = this.camera.transform.rotationEuler;
                this.Stage1Datas = h["default"].getGameConfigData("NormalLevel");
                this.Stage2Datas = h["default"].getGameConfigData("CoinLevel");
                this.initWay();
                this.gameStatus = l.EnumMana.LevelState.wait;
            }, t.prototype.getScene3d = function() {
                return this._scene3d;
            }, t.prototype.GameStart = function() {
                this.coinIdMap = {};
                t.instance.humanScript.initPlay();
                t.instance.humanScript.enableLegEffect();
                this.gameStatus = l.EnumMana.LevelState.playing;
                t.instance.cameraController.cameraFollowState = l.EnumMana.CameraFollowState.Nomal;
                this.cameraController.cameraStartFollow();
                t.instance.humanScript.eableDrag();
            }, t.prototype.PlayOver = function(b) {
                this.diedWayObj = b;
                t.instance.gameStatus = l.EnumMana.LevelState.gameover;
                this.cameraController.cameraStopFollow();
                Laya.timer.once(1e3, this, function() {
                    d["default"].instance.emit("PLAYER_DIE");
                });
            }, t.prototype.GameRevive = function() {
                this.resetSceneForReborn();
                this.cameraController.cameraStartFollow();
            }, t.prototype.moveCameraToDwon = function() {}, t.prototype.moveCameraToUp = function() {}, t.prototype.shakeCamera = function() {
                var b = this;
                this.cameraAnimation.enabled = !0;
                Laya.timer.once(500, this, function() {
                    b.cameraAnimation.enabled = !1;
                });
            }, t.prototype.GameOverScore = function(b) {
                return b ? this.wayCoin + q["default"].curLevelGold : q["default"].curLevelGold;
            }, t.prototype.GamePass = function() {
                HUHU_showInterstitialAd();
                k["default"].setStorage({
                    key: "overData",
                    val: {}
                });
                q["default"].level += 1;
                console.log(" q.level", q["default"].level)
                platform.getInstance().setStorageSync("d_level", q["default"].level)
                this.isPassLevel = !0;
                Laya.timer.once(3e3, this, function() {
                    d["default"].instance.emit(r.EventDefine.PLAYING_PASS_LEVEL);
                });
            }, t.prototype.GameRestart = function() {
                this.destoryAllWay();
                this.ClearTrySkin();
                this.initWay();
                v["default"].Instance.playReborn();
                this.cameraController.InitCamera();
            }, t.prototype.GameExit = function() {
                this.GameRestart();
            }, t.prototype.spwanNextWay = function() {
                var b = this.curLevelData[this.nextWayIndex];
                null != b ? (b = this.creatWayByIndex(b), this.curActiveWayArray.push(b), this.curAllWayArray.push(b.id), this.nextWayIndex++) : this.hasCreatTerminal ? console.log("") : (console.log(" "), b = this.creatWayByIndex(1101), this.curActiveWayArray.push(b), this.curAllWayArray.push(b.id), this.hasCreatTerminal = !0);
            }, t.prototype.initScene = function() {
                var b = Math.floor((q["default"].level - 1) / 4) % 5;
                this.skyIndex = b;
                this.decorationName = this.decorationNames[this.skyIndex];
                for (var c = 0; c < this.skyBox.numChildren; c++) {
                    var a = this.skyBox.getChildAt(c);
                    b == c ? (a.active = !0, this.curSky = a) : a.active = !1;
                }
                a = g.MathTool.Range(1, 3);
                c = this.changjing.getChildByName("Plane_01");
                a = this.changjingMat.getChildByName("Plane_0" + a);
                c = c.meshRenderer.sharedMaterial;
                a = a.meshRenderer.material;
                c.albedoTexture = a.albedoTexture;
                c.albedoColor = a.albedoColor;
                c = this.waterPlane;
                b = this.changjingMat.getChildByName("Water_0" + (b + 1));
                return c.meshRenderer.material = b.meshRenderer.material, this.skyBox.transform.position = new Laya.Vector3(this.humanObj.transform.position.x, this.humanObj.transform.position.y, this.humanObj.transform.position.z), void(this.waterPlane.transform.position = new Laya.Vector3(this.waterPlane.transform.position.x, this.humanObj.transform.position.y - 16, this.waterPlane.transform.position.z));
            }, t.prototype.initWay = function() {
                this.targets.length = 0;
                this.hasCreatTerminal = this.isPassLevel = !1;
                this.curWayPosition = new Laya.Vector3(0, 0, 0);
                this.humanInitPositin = new Laya.Vector3(0, 0, -1);
                this.humanObj.transform.position = this.humanInitPositin;
                this.skyBox.transform.position = this.humanObj.transform.position;
                this.initScene();
                this.creatAllWayDataByLevelIndex(q["default"].level);
                this.curPassDistance = this.nextWayIndex = 0;
                for (var b = this.owner.getChildByName("WayPrefeb"), c = 0; c < b.numChildren; c++) b.getChildAt(c).active = !1;
                for (c = 0; 3 > c; c++) {
                    b = void 0;
                    if (0 == c) {
                        b = this.creatWayByIndex(1001);
                        var a = b.getChildByName("Points").getChildByName("StartPoint");
                        this.humanInitPositin = new Laya.Vector3(a.transform.position.x, a.transform.position.y, a.transform.position.z);
                        this.humanObj.transform.position = this.humanInitPositin;
                    } else(a = this.curLevelData[c - 1]) ? (b = this.creatWayByIndex(a), this.nextWayIndex++) : (b = this.creatWayByIndex(1101), this.hasCreatTerminal = !0);
                    this.curActiveWayArray.push(b);
                    this.curAllWayArray.push(b.id);
                }
            }, t.prototype.changeWayPifu = function() {
                var b = this.changjing.getChildByName("CubeDown"),
                    c = this.changjing.getChildByName("CubeGound"),
                    a = this.changjing.getChildByName("tengman"),
                    d = this.skyBox.getChildByName("sky"),
                    h = this.changjingMat.getChildByName("CubeDown" + this.wayPifu),
                    g = this.changjingMat.getChildByName("CubeGound" + this.wayPifu),
                    e = this.changjingMat.getChildByName("tengman" + this.wayPifu),
                    l = this.changjingMat.getChildByName("sky" + this.wayPifu);
                b.meshRenderer.sharedMaterial.albedoTexture = h.meshRenderer.material.albedoTexture;
                c.meshRenderer.sharedMaterial.albedoTexture = g.meshRenderer.material.albedoTexture;
                a.meshRenderer.sharedMaterial.albedoTexture = e.meshRenderer.material.albedoTexture;
                d.meshRenderer.sharedMaterial.albedoTexture = l.meshRenderer.material.albedoTexture;
            }, t.prototype.creatWayByIndex = function(b) {
                var c = this.owner.getChildByName("WayPrefeb").getChildByName(b + "");
                console.log("creatWayByIndex index = " + b);
                c = Laya.Sprite3D.instantiate(c, this.wayPool);
                c.transform.localRotationEulerY = 180;
                c.transform.position = new Laya.Vector3(this.curWayPosition.x, this.curWayPosition.y, this.curWayPosition.z + .02);
                c.active = !0; - 1 != this.curCoinPassIndex.indexOf(b) && this.spwanCoin(c);
                c.transform.position.clone();
                b = c.getChildByName("Points");
                var a = w["default"].Range(1, b.numChildren);
                for (a = (w["default"].RangeArray(0, b.numChildren - 1, a, !1), 0); a < b.numChildren; a++) {
                    var d = b.getChildAt(a); - 1 == d.name.indexOf("StartPoint") && -1 == d.name.indexOf("JumpPoint") && this.targets.push(d); - 1 != d.name.indexOf("EndPoint") && (this.curWayPosition = d.transform.position);
                }
                this.curWayPosition.clone();
                return c;
            }, t.prototype.spwanCoin = function(b) {
                if (b = b.getChildByName("CoinPoints"))
                    for (var c = 0; c < b.numChildren; c++) {
                        var a = b.getChildAt(c);
                        u["default"].Instance.spawnCoin(new Laya.Vector3(a.transform.position.x, a.transform.position.y, a.transform.position.z), !0);
                        this.coinNun++;
                    }
            }, t.prototype.checkSpwanDecoration = function(b) {}, t.prototype.spwanDecoration = function(b) {
                var c = this.decorationPosMap[this.decorationName].offsetX,
                    a = this.decorationPosMap[this.decorationName].offsetZ,
                    d = this.decorationPosMap[this.decorationName].offsetY,
                    h = new Laya.Vector3(b.x - c, this.waterPlane.transform.position.y + d, b.z + a);
                this.decorations.push(u["default"].Instance.spwanDecoration(this.decorationName, h, !0, this.skyIndex));
                b = new Laya.Vector3(b.x + c + 20, this.waterPlane.transform.position.y + d, b.z + a);
                this.decorations.push(u["default"].Instance.spwanDecoration(this.decorationName, b, !0, this.skyIndex));
            }, t.prototype.resetSceneForReborn = function() {
                var b = this.diedWayObj.getChildByName("Points").getChildByName("StartPoint");
                this.humanInitPositin = new Laya.Vector3(b.transform.position.x, b.transform.position.y, b.transform.position.z + 1);
                this.humanObj.transform.position = this.humanInitPositin;
                this.skyBox.transform.position = this.humanObj.transform.position;
                var c = 0;
                for (b = 0; b < this.curActiveWayArray.length; b++)
                    if (this.diedWayObj.id == this.curActiveWayArray[b].id) {
                        c = b;
                        break;
                    }
                c = this.curActiveWayArray.slice(c);
                for (b = this.targets.length = 0; b < c.length; b++)
                    for (var a = c[b].getChildByName("Points"), d = 0; d < a.numChildren; d++) {
                        var h = a.getChildAt(d); - 1 == h.name.indexOf("StartPoint") && -1 == h.name.indexOf("JumpPoint") && this.targets.push(h);
                    }
                this.curFinishedRoadCount = this.lastEndPoint;
                this.resetWayMat(this.diedWayObj);
                v["default"].Instance.playReborn();
            }, t.prototype.resetWayMat = function(b) {
                for (var c = 0; c < b.numChildren; c++) {
                    var a = b.getChildAt(c),
                        d = a.name;
                    if (-1 != d.indexOf("Passageway") || -1 != d.indexOf("Obstacle")) {
                        var h = a.getChildAt(0);
                        h && (h.active = !1);
                    }
                    if (-1 != d.indexOf("Accelerator")) {
                        h = a;
                        var g = this.changjingMat.getChildByName("Accelerator_01").meshRenderer.material;
                        h.meshRenderer.material = g;
                    }
                    if (-1 != d.indexOf("Plane") || -1 != d.indexOf("Downhill") || -1 != d.indexOf("Passageway")) h = a, a = h.meshRenderer.material, .2 == a.albedoColorA && (a.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE, a.albedoColorA = 1);
                }
            }, t.prototype.ChangeAcceleratorMat = function(b) {
                var c = this.changjingMat.getChildByName("Accelerator_02").meshRenderer.material;
                b.meshRenderer.material = c;
            }, t.prototype.ChangeAcceleratorMatToNomal = function(b) {
                var c = this.changjingMat.getChildByName("Accelerator_01").meshRenderer.material;
                b.meshRenderer.material = c;
            }, t.prototype.destoryAllWay = function() {
                for (; 0 < this.wayPool.numChildren;) this.wayPool.getChildAt(0).destroy();
                u["default"].Instance.destroyScenePostionChild();
                this.decorations.length = 0;
                this.curActiveWayArray.length = 0;
                this.curAllWayArray.length = 0;
                this.curLevelData = [];
                this.overWayId = -1;
                this.nextWayIndex = 0;
            }, t.prototype.updateCurRoadProgress = function(b) {
                d["default"].instance.emit(r.EventDefine.PLAYING_UPDATE_PROGRESS, (this.curFinishedRoadCount + b) / this.roadCount);
            }, t.prototype.updateAllRoadProgress = function(b) {
                this.curFinishedRoadCount++;
                console.log("updateAllRoadProgress this.curFinishedRoadCount = " + this.curFinishedRoadCount);
                console.log("this.roadCount = " + this.roadCount);
                b && (this.lastEndPoint = this.curFinishedRoadCount);
                d["default"].instance.emit(r.EventDefine.PLAYING_UPDATE_PROGRESS, this.curFinishedRoadCount / this.roadCount);
            }, t.prototype.destoryWay = function(b) {}, t.prototype.creatAllWayDataByLevelIndex = function(b) {
                0 == q["default"].level % 4 ? this.creatAllWayDataByLevelIndexFromCoinData(b) : this.creatAllWayDataByLevelIndexFromNomalData(b);
                for (b = this.lastEndPoint = this.curFinishedRoadCount = this.roadCount = 0; b < this.curLevelData.length; b++) {
                    var c = this.curLevelData[b];
                    c = this.owner.getChildByName("WayPrefeb").getChildByName(c + "").getChildByName("Points");
                    for (var a = 0; a < c.numChildren; a++) {
                        var d = c.getChildAt(a); - 1 == d.name.indexOf("StartPoint") && -1 == d.name.indexOf("CtrlPoint") && -1 == d.name.indexOf("JumpPoint") && this.roadCount++;
                    }
                }
                this.roadCount += 1;
            }, t.prototype.creatAllWayDataByLevelIndexFromCoinData = function(b) {
                for (var c = 0, a = 0; a < this.Stage2Datas.length; a++) {
                    var d = this.Stage2Datas[a].ID2;
                    if (b >= this.Stage2Datas[a].ID1 && d >= b) {
                        c = a;
                        break;
                    }
                }
                b = this.Stage2Datas[c];
                c = b.Num;
                a = b.Diamond_Point;
                this.wayCoin = b.Coin;
                this.wayPifu = b.Pifu;
                this.waysMaxLenght = (c - 1) * this.wayLenght + this.wayLenght / 2;
                a = w["default"].RangeArray(1, c, a, !1);
                for (d = 1; c >= d; d++) {
                    var h = b["Pass" + d],
                        e = g.MathTool.Range(0, h.length - 1);
                    h = h[e];
                    this.curLevelData.push(h);
                    a && -1 != a.indexOf(d) && this.curCoinPassIndex.push(h);
                }
                w["default"].shuffle(this.curLevelData);
                console.log(" this.curCoinPassIndex = " + this.curCoinPassIndex);
                console.log(" this.curLevelData = " + this.curLevelData);
                this.curGoldCount = 12 * this.curLevelData.length;
            }, t.prototype.creatAllWayDataByLevelIndexFromNomalData = function(b) {
                for (var c = 0, a = 0; a < this.Stage1Datas.length; a++) {
                    var d = this.Stage1Datas[a].ID2;
                    if (b >= this.Stage1Datas[a].ID1 && d >= b) {
                        c = a;
                        break;
                    }
                }
                c = this.Stage1Datas[c];
                a = c.Num;
                d = c.Diamond_Point;
                this.wayCoin = c.Coin;
                this.wayPifu = c.Pifu;
                this.waysMaxLenght = (a - 1) * this.wayLenght + this.wayLenght / 2;
                console.log(" levelIndex = " + b);
                console.log(" passNuma = " + a);
                b = w["default"].RangeArray(1, a, d, !1);
                for (d = 1; a >= d; d++) {
                    var h = c["Pass" + d],
                        e = g.MathTool.Range(0, h.length - 1);
                    h = h[e];
                    this.curLevelData.push(h);
                    b && -1 != b.indexOf(d) && this.curCoinPassIndex.push(h);
                }
                w["default"].shuffle(this.curLevelData);
                console.log(" this.curCoinPassIndex = " + this.curCoinPassIndex);
                console.log(" this.curLevelData = " + this.curLevelData);
            }, t.prototype.onUpdate = function() {
                this.gameStatus != l.EnumMana.LevelState.playing || this.isPassLevel || (this.skyBox.transform.position = new Laya.Vector3(this.humanObj.transform.position.x, this.humanObj.transform.position.y, this.humanObj.transform.position.z), this.waterPlane.transform.position = new Laya.Vector3(this.waterPlane.transform.position.x, this.humanObj.transform.position.y - 10, this.waterPlane.transform.position.z), this.checkSpwanDecoration(new Laya.Vector3(this.humanObj.transform.position.x, this.waterPlane.transform.position.y, this.humanObj.transform.position.z)));
            }, t.prototype.TrySkin = function(b) {
                this.curUseSkinId = b;
                this.ChangeSkinById(this.curUseSkinId);
            }, t.prototype.ClearTrySkin = function() {
                this.curUseSkinId != q["default"].curSelectViewId && (this.curUseSkinId = q["default"].curSelectViewId, this.ChangeSkinById(this.curUseSkinId));
            }, t.prototype.UseSkin = function(b) {
                q["default"].curSelectViewId = b;
                this.curUseSkinId = q["default"].curSelectViewId;
                this.ChangeSkinById(this.curUseSkinId);
            }, t.prototype.ShowShopSkin = function(b) {}, t.prototype.ChangeSkinById = function(b) {
                if (-1 != this.girlIds.indexOf(b)) {
                    this.boyBody.active = !1;
                    this.girlBody.active = !0;
                    this.humanBody = this.girlBody;
                    q["default"].curModeType = 0;
                    var c = this.humanBody.getChildByName("Body").getChildByName("Prepare_b");
                    b = this.getGirlIndexBySkinId(b);
                    for (var a = "Girl_maozi_" + b, d = 1; 6 >= d; d++) - 1 != a.indexOf("Girl_maozi_0" + d) && c.getChildByName("Girl_maozi_0" + d) ? c.getChildByName("Girl_maozi_0" + d).active = !0 : c.getChildByName("Girl_maozi_0" + d) && (c.getChildByName("Girl_maozi_0" + d).active = !1);
                    c = this.changjing.getChildByName("Girl");
                    b = this.changjingMat.getChildByName("Girl_" + b);
                    c.meshRenderer.sharedMaterial.albedoTexture = b.meshRenderer.material.albedoTexture;
                } else {
                    this.boyBody.active = !0;
                    this.girlBody.active = !1;
                    this.humanBody = this.boyBody;
                    q["default"].curModeType = 1;
                    c = this.humanBody.getChildByName("Body").getChildByName("Prepare_b");
                    b = this.getBoyIndexBySkinId(b);
                    a = "Boy_maozi_" + b;
                    for (d = 1; 6 >= d; d++) - 1 != a.indexOf("Boy_maozi_0" + d) && c.getChildByName("Boy_maozi_0" + d) ? c.getChildByName("Boy_maozi_0" + d).active = !0 : c.getChildByName("Boy_maozi_0" + d) && (c.getChildByName("Boy_maozi_0" + d).active = !1);
                    c = this.changjing.getChildByName("Boy");
                    b = this.changjingMat.getChildByName("Boy_" + b);
                    c.meshRenderer.sharedMaterial.albedoTexture = b.meshRenderer.material.albedoTexture;
                }
                this.humanScript;
            }, t.prototype.getGirlIndexBySkinId = function(b) {
                var c = "01";
                switch (b) {
                    case 1:
                        c = "01";
                        break;
                    case 3:
                        c = "02";
                        break;
                    case 4:
                        c = "03";
                        break;
                    case 5:
                        c = "04";
                        break;
                    case 6:
                        c = "05";
                }
                return c;
            }, t.prototype.getBoyIndexBySkinId = function(b) {
                var c = "01";
                switch (b) {
                    case 2:
                        c = "01";
                        break;
                    case 7:
                        c = "02";
                        break;
                    case 8:
                        c = "03";
                        break;
                    case 9:
                        c = "04";
                }
                return c;
            }, t.prototype.onDisable = function() {}, t;
        }(Laya.Script));
        f["default"] = a;
    }, {
        "../GameActor/ActorCtrl": 4,
        "../GameActor/Human": 6,
        "../GameLogic/CameraController": 9,
        "../GameLogic/GameLogic": 11,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/StorageMgr": 28,
        "../models/ConfigData": 31,
        "../models/CurrGameData": 32,
        "../models/UserData": 33,
        "../tools/MathTool": 41,
        "../tools/MathUtil": 42,
        "../tools/MyUtils": 44,
        "./GameObjFactory": 18,
        "./MyGameEvent": 19
    }],
    18: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./GameMgr");
        a = function() {
            function a() {
                this.numType = this.intType = 1e3;
                this.strType = "hello laya";
                this.boolType = !0;
                this.coinPrebIndex = 0;
                this.enableCoinIds = [];
            }
            return Object.defineProperty(a, "Instance", {
                get: function() {
                    return null == this._gameObjFactory && (this._gameObjFactory = new a()), this._gameObjFactory;
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.init = function(b) {
                this._scene3d = b;
                this.wayPool = this._scene3d.getChildByName("WayPool");
                this.ObstaclePool = this._scene3d.getChildByName("ObstaclePool");
                this.wayPreb = this._scene3d.getChildByName("WayPrefeb");
                this.coinPreb = this._scene3d.getChildByName("CoinPreb");
                this.coinPool = this._scene3d.getChildByName("CoinPool");
                this.effectPreb = this._scene3d.getChildByName("EffectPrefeb");
                this.effectPool = this._scene3d.getChildByName("EffectPool");
                this.scenePostion = this._scene3d.getChildByName("ScenePostion");
                this.changjing = this._scene3d.getChildByName("Changjing");
                this.decorationPool = this._scene3d.getChildByName("DecorationPool");
                this.decorations = this._scene3d.getChildByName("Decorations");
                this.water = this._scene3d.getChildByName("Water");
            }, a.prototype.spawnTrail = function() {
                var b = null,
                    c = this.effectPreb.getChildByName("eff_trail01");
                return c && (b = Laya.Sprite3D.instantiate(c, this.effectPool, !0)), b || console.log("创建特效失败"), b;
            }, a.prototype.spawnEffectByName = function(b) {
                var c = null;
                if ((c = this.effectPool.getChildByName(b), null != c && !c.active) || (c = this.effectPreb.getChildByName(b), null != c && !c.active)) return c;
                b = this.effectPreb.getChildByName(b);
                return b && (c = Laya.Sprite3D.instantiate(b, this.effectPool, !0)), c || console.log("创建特效失败"), c;
            }, a.prototype.spawnEffectByNameNoPool = function(b) {
                var c = null;
                b = this.effectPreb.getChildByName(b);
                return b && (c = Laya.Sprite3D.instantiate(b, this.effectPool, !0)), c || console.log("创建特效失败"), c;
            }, a.prototype.spwanDecoration = function(b, c, a, d) {
                d = null;
                (d = this.decorationPool.getChildByName(b), d) || (b = this.decorations.getChildByName(b), d = Laya.Sprite3D.instantiate(b, this.decorationPool, a));
                return this.water.addChild(d), d.transform.scale = new Laya.Vector3(1, 1, 1), d.transform.position = c, d.active = !0, d;
            }, a.prototype.destroyScenePostionChild = function() {
                for (; 0 < this.scenePostion.numChildren;) {
                    var b = this.scenePostion.getChildAt(0); - 1 != b.name.indexOf("Decoration") ? (b.active = !1, b.transform.position = new Laya.Vector3(0, 0, 100), this.decorationPool.addChild(b)) : -1 != b.name.indexOf("Coin") ? (b.active = !1, b.transform.position = new Laya.Vector3(0, 0, 100), this.coinPool.addChild(b)) : b.destroy();
                }
                for (; 0 < this.water.numChildren;) b = this.water.getChildAt(0), -1 != b.name.indexOf("Decoration") ? (b.active = !1, b.transform.position = new Laya.Vector3(0, 0, 100), this.decorationPool.addChild(b)) : b.destroy();
            }, a.prototype.getEnableCoinIds = function() {
                return this.enableCoinIds;
            }, a.prototype.spawnCoin = function(b, c) {
                if (0 < this.coinPool.numChildren) c = this.coinPool.getChildAt(0);
                else {
                    var a = this.coinPreb.getChildAt(this.coinPrebIndex);
                    c = Laya.Sprite3D.instantiate(a, this.coinPool, c);
                }
                return this.scenePostion.addChild(c), c.transform.position = b, c.active = !0, delete e["default"].instance.coinIdMap[c.id], c;
            }, a.prototype.destroyCoin = function(b) {
                b.active = !1;
                var c = this.enableCoinIds.indexOf(b.id); - 1 < c && this.enableCoinIds.splice(c, 1);
                b.transform.position = new Laya.Vector3(0, 0, 100);
                this.coinPool.addChild(b);
            }, a.prototype.spawnWay = function(b, c) {
                var a = null;
                b = "way" + b;
                if (a = this.wayPool.getChildByName(b), null != a) return a;
                b = this.wayPreb.getChildByName(b);
                return a = Laya.Sprite3D.instantiate(b, this.wayPool, c), a.active = !0, a;
            }, a.prototype.destroyWay = function(b) {
                b.active = !1;
                b.transform.position = new Laya.Vector3(0, 0, -100);
            }, a;
        }();
        f["default"] = a;
    }, {
        "./GameMgr": 17
    }],
    19: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgrCommon/EventMgr"),
            d = a("../mgrCommon/StatisticsMgr"),
            b = a("../GameLogic/GameLogic");
        a = function() {
            function c() {
                this.events = ["gameStart"];
                for (var b = 0; b < this.events.length; b++) e["default"].instance.onEvent(this.events[b], this, this[this.events[b]]);
            }
            return c.prototype.gameStart = function(c) {
                d["default"].instance.startGameStatistics();
                b["default"].Instance.StopCameraAnimator();
                b["default"].Instance.InitGame(0);
                console.log(c);
            }, c;
        }();
        f["default"] = a;
    }, {
        "../GameLogic/GameLogic": 11,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/StatisticsMgr": 27
    }],
    20: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        ! function(a) {
            ! function(a) {
                a[a.Nomal = 0] = "Nomal";
                a[a.Invincible = 1] = "Invincible";
                a[a.Over = 2] = "Over";
            }(a.PlayerBuffState || (a.PlayerBuffState = {}));
            ! function(a) {
                a[a.Nomal = 0] = "Nomal";
                a[a.FallDown = 1] = "FallDown";
                a[a.Accelerate = 2] = "Accelerate";
                a[a.Suspended = 3] = "Suspended";
                a[a.Stagger = 4] = "Stagger";
                a[a.Jump = 5] = "Jump";
                a[a.Victory = 6] = "Victory";
            }(a.PlayerActionState || (a.PlayerActionState = {}));
            ! function(a) {
                a[a.Nomal = 0] = "Nomal";
                a[a.Victory = 1] = "Victory";
                a[a.Shop = 2] = "Shop";
                a[a.ShopToNomal = 3] = "ShopToNomal";
                a[a.LookAt = 4] = "LookAt";
            }(a.CameraFollowState || (a.CameraFollowState = {}));
            ! function(a) {
                a[a.wait = 0] = "wait";
                a[a.playing = 1] = "playing";
                a[a.pause = 2] = "pause";
                a[a.gameover = 3] = "gameover";
                a[a.gamePass = 4] = "gamePass";
            }(a.LevelState || (a.LevelState = {}));
            ! function(a) {
                a[a.fail = 0] = "fail";
                a[a.complete = 1] = "complete";
                a[a.twoStars = 2] = "twoStars";
                a[a.perfect = 3] = "perfect";
            }(a.GameEndState || (a.GameEndState = {}));
            ! function(a) {
                a[a.attackTime = 0] = "attackTime";
                a[a.dangerous = 1] = "dangerous";
                a[a.other = 2] = "other";
            }(a.MessageType || (a.MessageType = {}));
        }(f.EnumMana || (f.EnumMana = {}));
    }, {}],
    21: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        f.EventDefine = {
            BANNER_ERROR: "BANNER_ERROR",
            BANNER_SHOW: "BANNER_SHOW",
            PLAYER_DIE: "PLAYER_DIE",
            PLAYING_UPDATE_PROGRESS: "PLAYING_UPDATE_PROGRESS",
            PLAYING_UPDATE_SCORE: "PLAYING_UPDATE_SCORE",
            PLAYING_PASS_LEVEL: "PLAYING_PASS_LEVEL",
            SHOW_BULLET_HELP: "SHOW_BULLET_HELP",
            SHOW_PERFECT_INFO: "SHOW_PERFECT_INFO",
            SHOW_MESSAGE_INFO: "SHOW_MESSAGE_INFO",
            HIDE_MESSAGE_INFO: "HIDE_MESSAGE_INFO",
            UPDATE_MONEY: "UPDATE_MONEY",
            CLOSE_GIFT_VIEW: "CLOSE_GIFT_VIEW",
            UPDATE_COUNT_MONEY: "UPDATE_COUNT_MONEY",
            MainView_Drawer: "MainView_Drawer"
        };
    }, {}],
    22: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = Laya.EventDispatcher;
        a = function(a) {
            function b() {
                return a.call(this) || this;
            }
            return __extends(b, a), b.prototype.emit = function(a, d) {
                b.eventDispatcher.event(a, d);
            }, b.prototype.onEvent = function(a, d, e, g) {
                b.eventDispatcher.on(a, d, e, null == g ? null : [g]);
            }, b.prototype.onOnceEvent = function(a, d, e, g) {
                b.eventDispatcher.once(a, d, e, null == g ? null : [g]);
            }, b.prototype.onOffEvent = function(a, d, e, g) {
                b.eventDispatcher.off(a, d, e);
            }, b.eventDispatcher = new e(), b.instance = new b(), b;
        }(e);
        f["default"] = a;
    }, {}],
    23: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function() {
            function a() {}
            return a.Vector3ZeroValue = function() {
                return new Laya.Vector3(0, 0, 0);
            }, a.Vector3OneValue = function() {
                return new Laya.Vector3(1, 1, 1);
            }, a.Vector3Distance = function(a, b) {
                return Laya.Vector3.distance(a, b);
            }, a.Vector2Distance = function(a, b) {
                return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
            }, a.Vector3Sub = function(a, b) {
                var c = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.subtract(a, b, c), c;
            }, a.Vector3Add = function(a, b) {
                var c = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.add(a, b, c), c;
            }, a.QuaSlerp = function(a, b, c) {
                var d = new Laya.Quaternion();
                return Laya.Quaternion.lerp(a, b, c, d), d;
            }, a.Lerp0 = function(a) {
                return 0 > a ? 0 : 1 < a ? 1 : a;
            }, a.Lerp = function(a, b, c) {
                return c = 0 > c ? 0 : c, c = 1 < c ? 1 : c, a + (b - a) * c;
            }, a.V3Lerp = function(a, b, c) {
                var d = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.lerp(a, b, c, d), d;
            }, a.QuaternionByEuler = function(a, b, c) {
                var d = new Laya.Quaternion();
                return Laya.Quaternion.createFromYawPitchRoll(a, b, c, d), d;
            }, a.getRadian = function(a) {
                return Math.PI / 180 * a;
            }, a.getForward = function(a) {
                var b = new Laya.Vector3(0, 0, 0);
                return a.transform.getForward(b), Laya.Vector3.normalize(b, b), b;
            }, a.getUp = function(a) {
                var b = new Laya.Vector3(0, 0, 0);
                return a.transform.getUp(b), Laya.Vector3.normalize(b, b), b;
            }, a;
        }();
        f["default"] = a;
    }, {}],
    24: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData"),
            d = a("../tools/HttpUtils"),
            b = a("../models/UserData"),
            c = a("./EventMgr"),
            n = a("../tools/MyLog"),
            l = a("./PlatformMgr"),
            g = a("../platform/wx/WxAdManager");
        a = function() {
            function a() {
                this._http = new d["default"]();
            }
            return a.prototype.getAllAdsControl = function() {}, a.prototype.login = function(a) {
                this._http.request({
                    url: "userLogin.action",
                    data: a,
                    callback: function(c) {
                        n["default"].log("userLogin.action:" + JSON.stringify(c));
                        0 == c.code ? (c.sessionId && (b["default"].sessionId = c.sessionId), a.success && a.success(c)) : (b["default"].sessionId = "", a.fail && a.fail(c));
                    }
                });
            }, a.prototype.getConfig = function(b, a) {
                this._http.getConfig(b, a);
            }, a.prototype.getSystemConfig = function() {
                c["default"].instance.emit("getSystemParamListBack");
            }, a.prototype.updateUserInfo = function() {
                this._http.request({
                    url: "updateUserInfo.action",
                    data: {
                        nickname: b["default"].nickName,
                        headimgurl: b["default"].avatarUrl,
                        sex: b["default"].gender
                    }
                });
            }, a.prototype.statisticsPost = function(b) {
                this._http.requestStatistics({
                    data: b
                });
            }, a.prototype.StartGame = function() {
                this._http.request({
                    url: "startGames.action"
                });
            }, a.prototype.videoCallback = function() {
                this._http.request({
                    url: "videoCallback.action",
                    callback: function(a) {
                        0 == a.code && (b["default"].adCount = a.adCount);
                    }
                });
            }, a.prototype.statisticsbannerUpdateCount = function() {
                this._http.request({
                    url: "videoCallback.action",
                    data: {
                        type: 1
                    },
                    callback: function(a) {
                        0 == a.code && (b["default"].bannerTimes = a.bannerTimes);
                    }
                });
            }, a.prototype.updateUserMoney = function(a) {
                this._http.request({
                    url: "updateUserMoney.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        money: a
                    },
                    callback: function(a) {
                        0 == a.code && (b["default"].gold = a.userMoney);
                    },
                    fail: function(b) {}
                });
            }, a.prototype.getWorldRank = function(b) {
                this._http.request({
                    url: "getWorldRank.action",
                    data: {
                        page: 1,
                        type: 1
                    },
                    callback: function(a) {
                        0 == a.code && b.success && b.success(a);
                    }
                });
            }, a.prototype.Settlement = function(a, c) {
                a = {
                    isPass: a ? 1 : 0,
                    level: a ? b["default"].level - 1 : b["default"].level,
                    money: c * b["default"].curMultiple
                };
                b["default"].curMultiple = 1;
                b["default"].gold += a.money;
                platform.getInstance().setStorageSync("userMoney", b["default"].gold);
            }, a.prototype.Lottery = function(a, c, d) {
                this._http.request({
                    url: "lottoSettle.action",
                    data: {
                        awardType: a,
                        money: c,
                        systemViewId: d
                    },
                    callback: function(a) {
                        0 == a.code && (b["default"].gold = a.userMoney, null != a.allView && (b["default"].allView = JSON.parse(a.allView)));
                    }
                });
            }, a.prototype.shareCallback = function(a, c) {
                this._http.request({
                    url: "shareCallback.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        nowVersion: e["default"].version
                    },
                    callback: function(d) {
                        console.log(" 分享回调:" + JSON.stringify(d));
                        d && 0 == d.code && (b["default"].inviteShareCount = d.shareCount, b["default"].gold = d.userMoney, c && c.call(a, d));
                    }
                });
            }, a.prototype.getOfflineAward = function(a, c, d) {
                this._http.request({
                    url: "getOfflineAward.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        type: a
                    },
                    callback: function(a) {
                        console.log(" 分享回调:" + JSON.stringify(a));
                        a && 0 == a.code && (b["default"].gold = a.userMoney, e["default"].offlineTimeSpent = 0, e["default"].ctrlInfo.startOfflineTime = new Date().getTime(), d && d.call(c, a));
                    }
                });
            }, a.prototype.buyView = function(a, d) {
                this._http.request({
                    url: "buyView.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        systemViewId: a
                    },
                    callback: function(b) {
                        0 == b.code && d && d(b);
                    },
                    fail: function(b) {
                        c["default"].instance.emit("openTip", "购买失败，服务器卡了");
                    }
                });
            }, a.prototype.unlockView = function(a, d, h) {
                this._http.request({
                    url: "unlockView.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        type: a,
                        systemViewId: d
                    },
                    callback: function(b) {
                        0 == b.code && h && h(b);
                    },
                    fail: function(b) {
                        c["default"].instance.emit("openTip", "解锁失败，服务器卡了");
                    }
                });
            }, a.prototype.changeView = function(a) {
                this._http.request({
                    url: "changeView.action",
                    data: {
                        sessionId: b["default"].sessionId,
                        systemViewId: a
                    },
                    callback: function(a) {
                        0 == a.code && (b["default"].curSelectViewId = a.systemViewId);
                    },
                    fail: function(b) {
                        c["default"].instance.emit("openTip", "切换失败，服务器卡了");
                    }
                });
            }, a.instance = new a(), a;
        }();
        f["default"] = a;
        f.MessageE = {};
    }, {
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WxAdManager": 38,
        "../tools/HttpUtils": 39,
        "../tools/MyLog": 43,
        "./EventMgr": 22,
        "./PlatformMgr": 25
    }],
    25: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData"),
            d = a("../platform/wx/WXAPI"),
            b = a("../platform/wx/WXSubDomain"),
            c = a("../platform/android/AndroidAPI");
        a = function(a) {
            function l() {
                return a.call(this) || this;
            }
            return __extends(l, a), l.initPlatform = function() {
                switch (e["default"].releasePlatform) {
                    case "wx":
                        l.ptAPI = new d["default"]();
                        l.subDomain = new b["default"]();
                        break;
                    case "android":
                        l.ptAPI = new c["default"](), window.Android2JS = l.ptAPI, l.subDomain = null;
                }
            }, l.callAPIMethodByProxy = function(b, a) {
                return l.ptAPI && l.ptAPI[b] ? l.ptAPI[b](a) : void 0;
            }, l.callSubDomainMethodByProxy = function(b, a) {
                return l.subDomain && l.subDomain[b] ? l.subDomain[b](a) : void 0;
            }, l;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../models/ConfigData": 31,
        "../platform/android/AndroidAPI": 34,
        "../platform/wx/WXAPI": 35,
        "../platform/wx/WXSubDomain": 37
    }],
    26: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData");
        a = function() {
            function a() {}
            return a.prototype.playSound = function(b) {
                if (e["default"].isSound) {
                    var a = "res/sound/" + b + ".mp3";
                    if (Laya.Browser.onMiniGame) {
                        var d = Laya.Pool.getItem(b);
                        null == d && (d = wx.createInnerAudioContext(), d.src = "res/sound/" + b + ".mp3", d.onEnded(function() {
                            Laya.Pool.recover(b, d);
                            d.offEnded();
                        }));
                        d.play();
                    } else Laya.SoundManager.playSound(a, 1);
                }
            }, a.prototype.playBGM = function() {
                e["default"].isSound && (Laya.Browser.onMiniGame ? (this.bgm || (this.bgm = wx.createInnerAudioContext(), this.bgm.src = "res/sound/bgm.mp3", this.bgm.loop = !0), this.bgm.play()) : Laya.SoundManager.playMusic("res/sound/bgm.mp3", 0));
            }, a.prototype.stopBGM = function() {
                Laya.Browser.onMiniGame ? this.bgm && this.bgm.stop() : Laya.SoundManager.stopMusic();
            }, a.instance = new a(), a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31
    }],
    27: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./HttpMgr"),
            d = a("../models/UserData"),
            b = a("../models/ConfigData");
        ! function(b) {
            b[b.NORMAL = 0] = "NORMAL";
            b[b.RESURGENCE = 1] = "RESURGENCE";
            b[b.PROP = 2] = "PROP";
            b[b.LOTTERY = 3] = "LOTTERY";
            b[b.START_GAME = 4] = "START_GAME";
            b[b.TRY_SKIN = 5] = "TRY_SKIN";
            b[b.OFFLINE = 6] = "OFFLINE";
            b[b.SETTLE = 7] = "SETTLE";
            b[b.EGG = 8] = "EGG";
            b[b.SKILL = 9] = "SKILL";
        }(f.SHARE_VIDEO_TYPE || (f.SHARE_VIDEO_TYPE = {}));
        a = function() {
            function a() {
                this.httpsArr = [];
            }
            return a.prototype.init = function() {
                Laya.timer.loop(6e4, this, this.goPost);
            }, a.prototype.loginStatisticsPost = function() {
                this.statisticsPost({
                    action: "1005",
                    from_appid: d["default"].fromAppid,
                    from_imgid: d["default"].fromImgid,
                    code: d["default"].code,
                    isnew: d["default"].isNew ? 1 : 0
                });
            }, a.prototype.authorStatistics = function() {
                this.statisticsPost({
                    action: "1006",
                    from_appid: d["default"].fromAppid,
                    from_imgid: d["default"].fromImgid,
                    code: d["default"].code,
                    isnew: d["default"].isNew ? 1 : 0
                });
            }, a.prototype.startGameStatistics = function() {
                this.statisticsPost({
                    action: "1008"
                });
            }, a.prototype.shareStatistics = function(b) {
                this.statisticsPost({
                    action: "1009",
                    type: b
                });
            }, a.prototype.clickVideoStatistics = function(b) {
                this.statisticsPost({
                    action: "1010",
                    type: b
                });
            }, a.prototype.videoPlayOverAdStatistics = function(b) {
                this.statisticsPost({
                    action: "1011",
                    type: b
                });
            }, a.prototype.navigateToMiniProgramStatistics = function(b) {
                b.action = "1007";
                this.statisticsPost(b);
            }, a.prototype.navigateToMiniProgramBackStatistics = function(b) {
                b.action = "1017";
                this.statisticsPost(b);
            }, a.prototype.aldValue = function(b) {
                b = {
                    action: "1106",
                    type: b.type,
                    isnew: b.isnew
                };
                this.statisticsPost(b);
            }, a.prototype.interstitialAdStatistics = function() {
                this.statisticsPost({
                    action: "1011",
                    type: 4
                });
            }, a.prototype.statisticsPost = function(a) {
                var c = this,
                    g = {
                        channel: d["default"].channelId,
                        my_appid: b["default"].myAppid,
                        openid: d["default"].openId
                    },
                    h;
                for (h in a) a.hasOwnProperty(h) && "toLinks" != h && (g[h] = a[h]);
                g.fail = function() {
                    c.httpsArr.push(g);
                };
                g.callback = function(b) {
                    0 != b.code && c.httpsArr.push(g);
                };
                e["default"].instance.statisticsPost(g);
            }, a.prototype.goPost = function() {
                for (var b = this, a = 0; a < this.httpsArr.length; a++) {
                    var c = this.httpsArr[a];
                    c && (this.httpsArr[a].index = a, c.index = a, c.fail = null, c.callback = function(a) {
                        if (0 == a.code)
                            for (; 0 < b.httpsArr.length;) {
                                b.httpsArr[0].index = a.index;
                                b.httpsArr.splice(0, 1);
                                break;
                            }
                    }, e["default"].instance.statisticsPost(c));
                }
            }, a.instance = new a(), a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "./HttpMgr": 24
    }],
    28: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/UserData"),
            d = a("../models/ConfigData"),
            b = a("../tools/MyLog");
        a = function() {
            function a() {}
            return a.setStorage = function(b) {
                var a = JSON.stringify(b.val);
                return window.strEnc && (a = window.strEnc(a, d["default"].encryptDESKey1, d["default"].encryptDESKey2, d["default"].encryptDESKey3)), Laya.Browser.onMiniGame ? void wx.setStorage({
                    key: b.key,
                    data: a,
                    success: b.success,
                    fail: b.fail,
                    complete: b.complete
                }) : void localStorage.setItem(b.key, a);
            }, a.getStorage = function(b) {
                var a = null;
                try {
                    a = Laya.Browser.onMiniGame ? wx.getStorageSync(b) : localStorage.getItem(b), window.strDec && (a = window.strDec(a, d["default"].encryptDESKey1, d["default"].encryptDESKey2, d["default"].encryptDESKey3));
                } catch (g) {}
                return a;
            }, a.getLocalVirbort = function() {
                var b;
                return b = Laya.Browser.onMiniGame ? wx.getStorageSync("virbort") : localStorage.getItem("virbort"), "1" == b ? !1 : !0;
            }, a.setLocalVirbort = function(b) {
                return Laya.Browser.onMiniGame ? void wx.setStorage({
                    key: "virbort",
                    success: null,
                    fail: null,
                    complete: null,
                    data: b
                }) : void localStorage.setItem("virbort", b);
            }, a.getLocalSound = function() {
                var b;
                return b = Laya.Browser.onMiniGame ? wx.getStorageSync("sound") : localStorage.getItem("sound"), "1" == b ? !1 : !0;
            }, a.setLocalSound = function(b) {
                return Laya.Browser.onMiniGame ? void wx.setStorage({
                    key: "sound",
                    success: null,
                    fail: null,
                    complete: null,
                    data: b
                }) : void localStorage.setItem("sound", b);
            }, a.saveUserData = function() {
                a.setStorage({
                    key: "userData",
                    val: {
                        sessionId: e["default"].sessionId,
                        openId: e["default"].openId,
                        score: e["default"].score,
                        exp: e["default"].exp,
                        level: e["default"].level
                    }
                });
            }, a.getLocalUserData = function() {
                if (!e["default"].isLogin) {}
            }, a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../tools/MyLog": 43
    }],
    29: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./PlatformMgr");
        a = function() {
            function a() {}
            return a.vibrateShort = function() {
                e["default"].callAPIMethodByProxy("vibrateShort");
            }, a.vibrateLong = function() {
                e["default"].callAPIMethodByProxy("vibrateLong");
            }, a;
        }();
        f["default"] = a;
    }, {
        "./PlatformMgr": 25
    }],
    30: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../tools/MyUtils"),
            d = a("./EventMgr");
        a = function() {
            function b() {
                this.viewDic = {};
                this.events = "goHome openTip openResurgence openFighting openRank openGoldenEggView openGameOver openSkinShop openSkinTrial openRewardView openLottery openSkinPop openGift".split(" ");
            }
            return b.prototype.init = function() {
                for (var b = 0; b < this.events.length; b++) d["default"].instance.onEvent(this.events[b], this, this[this.events[b]]);
            }, b.prototype.goHome = function(b) {
                this.openView({
                    viewName: "MainView.scene",
                    closeAll: !0
                });
            }, b.prototype.openRank = function(a) {
                b.instance.openView({
                    viewName: "Rank.scene",
                    closeAll: a.closeAll,
                    data: a
                });
            }, b.prototype.openFighting = function(b) {
                this.openView({
                    viewName: "GameFighting.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openResurgence = function(b) {
                this.openView({
                    viewName: "Resurgence.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openGameOver = function(b) {
                this.openView({
                    viewName: "GameOver.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openGoldenEggView = function(b) {
                this.openView({
                    viewName: "GoldenEggView.scene",
                    closeAll: !1,
                    data: b
                });
            }, b.prototype.openTip = function(b) {
                if (Laya.Browser.onMiniGame) {
                    var a = {};
                    a.title = b;
                    a.icon = "none";
                    window.wx.showToast(a);
                } else this.openView({
                    viewName: "Tip.scene",
                    closeAll: !1,
                    data: b
                });
            }, b.prototype.openSkinShop = function(b) {
                this.openView({
                    viewName: "SkinShop.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openRewardView = function(b) {
                this.openView({
                    viewName: "RewardView.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openSkinTrial = function(b) {
                this.openView({
                    viewName: "SkinTrial.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openLottery = function(b) {
                this.openView({
                    viewName: "Lottery.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openGift = function(b) {
                this.openView({
                    viewName: "Gift.scene",
                    closeAll: !0,
                    data: b
                });
            }, b.prototype.openSkinPop = function(b) {
                this.openView({
                    viewName: "SkinPop.scene",
                    closeAll: !1,
                    data: b
                });
            }, b.prototype.openView = function(b) {
                var a = this,
                    c = b.viewName,
                    d = (b.cls, b.closeAll || !1);
                if (d && (this.viewDic = {}), e["default"].isNull(this.viewDic[c])) Laya.Scene.open(c, d, Laya.Handler.create(this, function(d) {
                    a.viewDic[c] = d;
                    if (d = d._components)
                        for (var h = 0; h < d.length; h++) {
                            var g = d[h];
                            if (g.isMyBaseView) {
                                g.openView(b.data);
                                break;
                            }
                        }
                }));
                else if (d = this.viewDic[c]._components)
                    for (var h = 0; h < d.length; h++) {
                        var q = d[h];
                        if (q.isMyBaseView) {
                            q.openView(b.data);
                            break;
                        }
                    }
            }, b.prototype.closeView = function(b) {
                e["default"].isNull(this.viewDic[b]) || (this.viewDic[b].destroy(), this.viewDic[b] = null);
            }, b.prototype.hideView = function(b) {
                e["default"].isNull(this.viewDic[b]) || (this.viewDic[b].visible = !1);
            }, b.prototype.getView = function(b) {
                b = this.viewDic[b];
                return e["default"].isNull(b) ? null : b;
            }, b.instance = new b(), b;
        }();
        f["default"] = a;
    }, {
        "../tools/MyUtils": 44,
        "./EventMgr": 22
    }],
    31: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../tools/MyUtils"),
            d = a("../mgrCommon/StorageMgr"),
            b = a("../mgrCommon/HttpMgr");
        ! function(b) {
            b[b.LANDSCAPE = 0] = "LANDSCAPE";
            b[b.VERTICAL = 1] = "VERTICAL";
        }(f.MAINBTNSTYPE || (f.MAINBTNSTYPE = {}));
        ! function(b) {
            b[b.LEVEL = 0] = "LEVEL";
            b[b.ENDLESS = 1] = "ENDLESS";
        }(f.SORTTYPE || (f.SORTTYPE = {}));
        var c;
        ! function(b) {
            b[b.DRAGE = 0] = "DRAGE";
            b[b.TOUCH = 1] = "TOUCH";
        }(c = f.OPERATINGTYPE || (f.OPERATINGTYPE = {}));
        var n;
        ! function(b) {
            b[b.IOS = 0] = "IOS";
            b[b.Android = 1] = "Android";
        }(n = f.OS_T || (f.OS_T = {}));
        a = function() {
            function a() {}
            return a.initLocal = function() {
                a.isSound = d["default"].getLocalSound();
                a.isVirbort = d["default"].getLocalVirbort();
            }, a.RequestConfig = function(c) {
                b["default"].instance.getConfig(c, function(b, c) {
                    if (a.cacheConfigs.push({
                            key: b,
                            value: c
                        }), a.cacheConfigs.length == a.configUrls.count)
                        for (b = 0; b < a.cacheConfigs.length; b++) a.initConfigData(a.cacheConfigs[b].key, a.cacheConfigs[b].value, !0);
                });
            }, a.initConfigData = function(b, c, d) {
                void 0 === d && (d = !1);
                d ? a.configs[b] = c : a.configs[b] || (a.configs[b] = c);
            }, a.initServer = function(b) {
                b && (this.encryptDESKey1 = b.encry[0], this.encryptDESKey2 = b.encry[1], this.encryptDESKey3 = b.encry[2], this.serverUrl = b.serverUrl, this.statisticsUrl = b.statisticsUrl);
            }, a.GetConfig = function(b) {
                return a.configs[b];
            }, a.getGameConfigData = function(b) {
                return a.configs.gameConfig[b];
            }, a.GetConfigByKey = function(b, c, d) {
                for (var h = 0; h < a.configs[b].length; h++)
                    if (a.configs[b][h][c] == d) return a.configs[b][h];
                return null;
            }, a.getCtrlData = function(b) {
                return this.ctrlInfo[b];
            }, a.setSound = function(b) {
                !b || 0 >= b.length ? (a.isSound = !0, d["default"].setLocalSound("")) : (d["default"].setLocalSound("1"), a.isSound = !1);
            }, a.setVirbort = function(b) {
                !b || 0 >= b.length ? (a.isVirbort = !0, d["default"].setLocalVirbort("")) : (d["default"].setLocalVirbort("1"), a.isVirbort = !1);
            }, a.getAdData = function(b) {
                var a = this.getCtrlData("adInfo");
                if (!e["default"].isNull(a)) {
                    for (var c = [], d = 0; d < a.length; d++) {
                        var g = a[d];
                        g.position == b && c.push(g);
                    }
                    return c;
                }
            }, a.encryptDES = !0, a.encryptDESKey1 = "qireBird1", a.encryptDESKey2 = "qireBird2", a.encryptDESKey3 = "qireBird3", a.mainBtnsType = 1, a.beginnerGuide = c.DRAGE, a.releasePlatform = "", a.configs = [], a.cacheConfigs = [], a.language = "cn", a.languageData = null, a.isLog = !1, a.myAppid = "wxd2c0911129978e05", a.version = "117", a.serverUrl = "", a.statisticsUrl = "", a.isCreateAuthorization = !1, a.repeatAuthorization = !1, a.allAdsControl = [], a.ctrlInfo = {
                isShare: 0,
                isWudian: 0,
                shareInfo: null,
                mainAdMy: !1,
                adInfo: null,
                isGoldeggs: !1,
                lateDelay: [1600, 1400, 1600, 1600, 1100, 1100],
                isGoldeggsReward: 1e3,
                adRefreshTimes: 0,
                innerAD_delayed_time: 12e4,
                adDelayedTime: 3e4,
                isVideo: 1,
                inviteFriendsControl: 0,
                inviteFriendsGolds: 1e3,
                inviteShareMaxCount: 8,
                trialAdd: .3,
                onlineTimes: 360,
                onlineItemSecond: 10,
                onlineItemGold: 4,
                startOfflineTime: new Date().getTime(),
                fuhuoUiType: 3,
                shareBntSwitch: 0,
                videoBntSwitch: 0,
                marqueeBntSwitch: 0,
                backHomeControl: 0,
                btuMove: [],
                btuAppear: [],
                MainConvergeControl: 1,
                randomLocation: 0
            }, a.systemInfo = {}, a.bannerAdIds = [""], a.rewardedAdIds = [""], a.interstitialIds = [""], a.firstTimeOpenMainUI = !0, a.offlineTimeSpent = 0, a.wudian_level = [1, 1, 1, 1, 1, 1], a.resurgenceADId = 1006, a.checkVedioSwitch = !1, a.serverUrls = {
                server: ""
            }, a.configUrls = {
                level: "",
                count: 1
            }, a;
        }();
        f["default"] = a;
    }, {
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/StorageMgr": 28,
        "../tools/MyUtils": 44
    }],
    32: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("./ConfigData");
        a = function() {
            function a() {
                this.score = 0;
                this.isEggReword = !1;
                this.sortType = e.SORTTYPE.ENDLESS;
            }
            return a.prototype.reset = function() {
                this.score = 0;
                this.isEggReword = !1;
            }, a;
        }();
        f["default"] = a;
    }, {
        "./ConfigData": 31
    }],
    33: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function() {
            function a() {}
            return a.code = "", a.openId = "", a.sessionId = "", a.nickName = "", a.gender = 0, a.avatarUrl = "", a.score = 0, a.exp = 0, a.level = 1, a.gold = 0, a.curLevelGold = 0, a.isNew = !1, a.isLogin = !1, a.bannerTimes = 0, a.inviteShareCount = 0, a.curMultiple = 1, a.allView = {}, a.curSelectViewId = 1, a.unlockingView = {}, a.isGoldeggs = 2, a.isAwardMoney = !1, a.isNotification = !1, a.isShare = !1, a.aladingStatus = !1, a.curModeType = 0, a;
        }();
        f["default"] = a;
    }, {}],
    34: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../../mgrCommon/StatisticsMgr"),
            d = a("../../models/ConfigData");
        a = function() {
            function b() {}
            return b.doLogin = function() {
                Laya.Browser.onAndroid && window.Android.requestUserToken();
            }, b.requestUserTokenBack = function(b) {}, b.requestRebornGiftScore = function() {
                Laya.Browser.onAndroid && window.Android.requestRebornGiftScore();
            }, b.requestRebornGiftScoreBack = function(b) {}, b.requestRewardToUser = function() {
                Laya.Browser.onAndroid && window.Android.requestRewardToUser(1);
            }, b.prototype.createShareInfo = function(b) {}, b.prototype.onGoShare = function(a) {
                b.caller = a.caller;
                b.shareBack = a.callback;
                b.shareBackArgs = a.args || {};
            }, b.prototype.shareAppMessage = function(b) {
                b.callback && this.onGoShare(b);
                e["default"].instance.shareStatistics(b.type);
                b = this.createShareInfo(b);
                window.Android.share(b);
            }, b.requestshareBack = function(b) {
                var a = this.shareBackArgs || {};
                "1" == b ? (a.success = !0, this.shareBack && this.caller && this.shareBack.call(this.caller, a), this.shareBack = null) : (a.success = !1, this.shareBack && this.caller && this.shareBack.call(this.caller, a), this.shareBack = null);
            }, b.vibrateLong = function() {
                Laya.Browser.onAndroid && !d["default"].isVirbort && window.Android.vibrateLong();
            }, b.vibrateShort = function() {
                Laya.Browser.onAndroid && !d["default"].isVirbort && window.Android.vibrateShort();
            }, b.closeGame = function() {
                Laya.Browser.onAndroid && window.Android.back();
            }, b.prototype.showVideo = function(a) {
                !b.isLookAdc && Laya.Browser.onAndroid && (b.isLookAdc = !0, b._type = a._type || 0, b.myCaller = a.caller, b.callBackSuc = a.callBackSuc, b.callBackFail = a.callBackFail, b.callBackErro = a.callBackErro, e["default"].instance.clickVideoStatistics(b._type), window.Android.getVedioAd("getVedioAd"));
            }, b.cleanVideoCall = function() {
                b.myCaller = null;
                b.callBackSuc = null;
                b.callBackFail = null;
                b.callBackErro = null;
            }, b.requestVoideAdBack = function(b) {
                switch (Number(b)) {
                    case -1:
                        this.callBackErro && this.callBackErro();
                        break;
                    case 0:
                        this.callBackFail && this.callBackFail();
                        break;
                    case 1:
                        e["default"].instance.videoPlayOverAdStatistics(this._type), this.callBackSuc && this.callBackSuc();
                }
                this.cleanVideoCall();
            }, b.destoryAllBannerAd = function() {
                Laya.Browser.onAndroid && window.Android.requesAdBannerClose();
            }, b.requesAdBannerShow = function() {
                Laya.Browser.onAndroid && window.Android.requesAdBannerShow();
            }, b.prototype.showBannerAdOtherFast = function() {
                b.requesAdBannerShow();
            }, b.prototype.showBannerAdOther = function(a) {
                b.requesAdBannerShow();
            }, b.prototype.showBannerAdClassicEndFast = function() {
                b.requesAdBannerShow();
            }, b.prototype.showBannerAdClassicEnd = function(a) {
                b.requesAdBannerShow();
            }, b.prototype.destroyBannerAdHome = function() {
                b.destoryAllBannerAd();
            }, b.prototype.destroyBannerAdOther = function() {
                b.destoryAllBannerAd();
            }, b.prototype.destroyBannerAdClassicEnd = function() {
                b.destoryAllBannerAd();
            }, b.prototype.loadBannerAdHome = function() {}, b.prototype.showBannerAdHome = function(a) {
                b.requesAdBannerShow();
            }, b.isLookAdc = !1, b.shareBackArgs = {}, b.myCaller = null, b;
        }();
        f["default"] = a;
    }, {
        "../../mgrCommon/StatisticsMgr": 27,
        "../../models/ConfigData": 31
    }],
    35: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../../models/UserData"),
            d = a("../../mgrCommon/HttpMgr"),
            b = a("../../tools/MyUtils"),
            c = a("../../models/ConfigData"),
            n = a("../../mgrCommon/EventMgr"),
            l = a("../../mgrCommon/StatisticsMgr"),
            g = a("../../tools/MyLog"),
            h = a("../../mgrCommon/SoundMgr"),
            q = a("../../mgrCommon/ViewMgr"),
            u = a("./WxAdManager"),
            v = a("../../../GameConfig"),
            r = a("./WXLaunch"),
            k = a("../../mgrCommon/EventDefine"),
            p = a("../../mgr3d/GameMgr"),
            w = a("../../mgrCommon/EnumMana");
        a = function() {
            function a() {
                var b = this;
                this._launch = {};
                this.btns = [];
                this.stime = 0;
                this.shareBackArgs = {};
                this.bannerClassicEndIsHide = this.bannerOtherIsHide = this.bannerHomeIsHide = !0;
                this.isHide = this.hasAd = this.isInited = !1;
                this.videoPlayedTimes = 0;
                this._launch = window.wx.getLaunchOptionsSync();
                n["default"].instance.onOnceEvent("getSystemParamListBack", this, function() {
                    b.showShareMenu();
                });
                window.wx.onShow(function(a) {
                    b.isHide = !1;
                    var d = a.query || {};
                    void 0 != a.shareTicket && d.avatarUrlGroup && d.nickNameGroup || (a = b.shareBackArgs || {}, Laya.Browser.now() - b.stime, 2e3 < Laya.Browser.now() - b.stime ? (a.success = !0, b.shareBack && b.myCaller && b.shareBack.call(b.myCaller, a), b.shareBack = null) : (a.success = !1, b.shareBack && b.myCaller && b.shareBack.call(b.myCaller, a), b.shareBack = null));
                    c["default"].isSound && r["default"].isLoaded && h["default"].instance.playBGM();
                    console.log("onShow");
                    p["default"].instance.gameStatus == w.EnumMana.LevelState.pause && (console.log("playing"), p["default"].instance.gameStatus = w.EnumMana.LevelState.playing);
                    var g = !1;
                    b.shareBackArgs && (g = b.shareBackArgs.notShowAd);
                    Laya.timer.frameOnce(1, b, function() {
                        var b = q["default"].instance.getView("ConvergeAd.scene"),
                            a = q["default"].instance.getView("Resurgence.scene"),
                            d = q["default"].instance.getView("GameFighting.scene"),
                            h = q["default"].instance.getView("SkinTrial.scene");
                        e["default"].isShare || g || b || !c["default"].enterMainView || a || d || h || q["default"].instance.openView({
                            viewName: "ConvergeAd.scene",
                            closeAll: !1
                        });
                        e["default"].isShare = !1;
                        c["default"].mainJumpToOtherGame = !1;
                    });
                    b.shareBackArgs = {};
                });
                window.wx.onHide(function() {
                    b.isHide = !0;
                    b.stime = Laya.Browser.now();
                    console.log("onHide");
                    p["default"].instance.gameStatus == w.EnumMana.LevelState.playing && (console.log("pause"), p["default"].instance.gameStatus = w.EnumMana.LevelState.pause);
                });
                this.init();
            }
            return a.prototype.init = function() {
                Laya.Browser.onMiniGame && (c["default"].systemInfo.SDKVersion && 0 <= b["default"].compareVersion(c["default"].systemInfo.SDKVersion, "2.0.4") && (this.isInited = !0, 0 <= b["default"].compareVersion(c["default"].systemInfo.SDKVersion, "2.6.0") && (this.canPlayInterstitial = !0)), this.preBannerTimeHome = Laya.timer.currTimer, this.preBannerTimeOther = Laya.timer.currTimer, this.preBannerTimeClassicEnd = Laya.timer.currTimer, this.preInterstitalsTime = 0);
            }, a.ald = function(b, a) {
                Laya.Browser.onMiniGame && e["default"].aladingStatus && window.wx.aldSendEvent(b, a);
            }, a.prototype.IsHide = function() {
                return this.isHide;
            }, a.prototype.onGoShare = function(b) {
                this.myCaller = b.caller;
                this.shareBack = b.callback;
                this.shareBackArgs = b.args || {};
            }, a.prototype.doLogin = function(b) {
                var a = this;
                if (Laya.Browser.onMiniGame) {
                    var h = this;
                    window.wx.login({
                        success: function(h) {
                            e["default"].code = h.code;
                            var g = a.getLaunchData(),
                                k = {};
                            k.code = h.code;
                            g.query && (k.inviteId = g.query.invite_uid || "", k.channelId = g.query.channel || "", e["default"].fromImgid = g.query.cur_share_id || "");
                            g.referrerInfo && (e["default"].fromAppid = g.referrerInfo.appId);
                            k.appid = c["default"].myAppid;
                            k.success = b.success;
                            k.timeout = b.timeout;
                            k.fail = b.fail;
                            d["default"].instance.login(k);
                        },
                        fail: function(a) {
                            Laya.timer.once(5e3, h, function() {
                                h.doLogin(b);
                            });
                        }
                    });
                }
            }, a.prototype.getOffsetOpenDomain = function() {
                return this.offsetOpenDomain;
            }, a.prototype.getLaunchData = function() {
                return this._launch;
            }, a.prototype.getQuery = function() {
                return this._launch.query;
            }, a.prototype.getReferrerInfo = function() {
                return this._launch.referrerInfo;
            }, a.prototype.uploadRankDate = function(a) {
                if (Laya.Browser.onMiniGame) {
                    var c = [];
                    b["default"].isNull(a.level) || c.push({
                        key: "level",
                        value: a.level + ""
                    });
                    b["default"].isNull(a.score) || c.push({
                        key: "score",
                        value: a.score + ""
                    });
                    window.wx.setUserCloudStorage({
                        KVDataList: c,
                        success: function(b) {}
                    });
                }
            }, a.prototype.showShareMenu = function() {
                if (Laya.Browser.onMiniGame) {
                    window.wx.showShareMenu({
                        withShareTicket: !0
                    });
                    var b = this.createShareInfo();
                    window.wx.onShareAppMessage(function() {
                        return b;
                    });
                }
            }, a.prototype.createShareInfo = function(a) {
                if (!c["default"].getCtrlData("shareInfo")) return null;
                var d = JSON.parse(c["default"].getCtrlData("shareInfo"));
                if (!d) return null;
                var h = b["default"].random(0, d.length - 1),
                    g = d[h].title,
                    k = d[h].img,
                    p = "invite_uid=" + (e["default"].userId ? e["default"].userId : "");
                return p += "&cur_share_id=" + d[h].id, p += "&channel=" + (e["default"].channelId ? e["default"].channelId : ""), a && (a.id && (p += "&scene=" + a.id), a.itemId && (p += "&itemId=" + a.itemId), a.type && (p += "&type=" + a.type), a.share_title && (g = a.share_title), a.share_img && (k = a.share_img)), {
                    title: g,
                    imageUrl: k,
                    query: p
                };
            }, a.prototype.shareAppMessage = function(b) {
                Laya.Browser.onMiniGame && (b.callback && this.onGoShare(b), c["default"].getCtrlData("shareInfo")) && (l["default"].instance.shareStatistics(b.type), b = this.createShareInfo(b), window.wx.shareAppMessage(b));
            }, a.prototype.navigateToMiniProgram = function(b) {
                var a = this;
                b && b.to_appid && Laya.Browser.onMiniGame && (console.log("navigateToMiniProgram"), l["default"].instance.navigateToMiniProgramStatistics(b), window.wx.navigateToMiniProgram({
                    appId: b.to_appid,
                    path: b.toLinks,
                    extraData: {
                        foo: "bar"
                    },
                    envVersion: "trial",
                    complete: function(a) {
                        b.complete && b.complete();
                        b.complete = null;
                    },
                    fail: function(d) {
                        b.fail && b.fail();
                        b.fail = null;
                        d = q["default"].instance.getView("ConvergeAd.scene");
                        var h = q["default"].instance.getView("Resurgence.scene"),
                            g = q["default"].instance.getView("GameFighting.scene"),
                            e = q["default"].instance.getView("SkinTrial.scene");
                        c["default"].mainJumpToOtherGame || d || h || g || e || Laya.timer.frameOnce(1, a, function() {
                            q["default"].instance.openView({
                                viewName: "ConvergeAd.scene",
                                closeAll: !1
                            });
                        });
                        c["default"].mainJumpToOtherGame = !1;
                        n["default"].instance.emit(k.EventDefine.MainView_Drawer);
                    },
                    success: function(a) {
                        l["default"].instance.navigateToMiniProgramBackStatistics(b);
                        b.callback && b.callback("success");
                        b.callback = null;
                    }
                }));
            }, a.prototype.setOpenDomainOffset = function() {
                var b = Laya.stage.width - v["default"].width;
                0 > b && (b = 0);
                var a = Laya.stage.height - v["default"].height;
                0 > a && (a = 0);
                this.offsetOpenDomain = new Laya.Vector2(b, a);
            }, a.prototype.createAuthorizationButton = function(b) {
                if (Laya.Browser.onMiniGame) {
                    var a = this;
                    wx.getSetting({
                        success: function(c) {
                            if (c.authSetting && c.authSetting["scope.userInfo"]) g["default"].log("已经授权");
                            else {
                                var h = Laya.Browser.width / Laya.Browser.pixelRatio / Laya.stage.width;
                                c = Laya.Browser.height / Laya.Browser.pixelRatio / Laya.stage.height;
                                var k = (b.x - b.width / 2) * h,
                                    p = (b.y + a.offsetOpenDomain.y - b.height / 2) * c;
                                h *= b.width;
                                var n = b.height * c;
                                b.isFull && (k = 0, p = (b.y + a.offsetOpenDomain.y / 2) * c);
                                var q = window.wx.createUserInfoButton({
                                    type: "text",
                                    text: "",
                                    style: {
                                        left: k,
                                        top: p,
                                        width: h,
                                        height: n
                                    }
                                });
                                a.btns && a.btns.push({
                                    button: q,
                                    isFull: b.isFull
                                });
                                q.onTap(function(c) {
                                    c && c.userInfo ? (e["default"].nickName = c.userInfo.nickName, e["default"].gender = c.userInfo.gender, e["default"].avatarUrl = c.userInfo.avatarUrl, l["default"].instance.authorStatistics(), d["default"].instance.updateUserInfo(), a.btns && a.btns.forEach(function(b) {
                                        b && b.button.destroy();
                                    }), a.btns = null, q.destroy(), b.successBack && b.successBack()) : (a.destoryAuthorization(), b.failBack && b.failBack());
                                });
                            }
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                }
            }, a.prototype.destoryAuthorization = function() {
                c["default"].repeatAuthorization ? this.setAuthorizationCheck(!1) : (c["default"].isCreateAuthorization = !0, this.btns && this.btns.forEach(function(b) {
                    b && b.button.destroy();
                }));
            }, a.prototype.setAuthorizationCheck = function(b) {
                this.btns && this.btns.forEach(function(a) {
                    a && (b ? a.button.show() : a.button.hide());
                });
            }, a.prototype.vibrateShort = function() {
                Laya.Browser.onMiniGame && c["default"].isVirbort && window.wx.vibrateShort();
            }, a.prototype.vibrateLong = function() {
                Laya.Browser.onMiniGame && c["default"].isVirbort && window.wx.vibrateLong();
            }, a.prototype.openCustomerServiceConversation = function() {
                window.wx.openCustomerServiceConversation();
            }, a.prototype.cleanVideoCall = function() {
                this.callBackErro = this.callBackFail = this.callBackSuc = this.myCaller = null;
            }, a.prototype.CanPlayVideo = function() {
                return c["default"].ctrlInfo.isVideo && this.isInited && this.hasAd;
            }, a.prototype.initVedioCom = function() {
                var b = this,
                    a = this;
                if (this.isInited) {
                    var g = c["default"].rewardedAdIds[0];
                    if (console.log("adId"), this.rewardedVideoAd = window.wx.createRewardedVideoAd({
                            adUnitId: g
                        }), void 0 != this.rewardedVideoAd) this.rewardedVideoAd.onLoad(function() {
                        a.hasAd = !0;
                    }), this.rewardedVideoAd.onError(function(g) {
                        return c["default"].isSound && h["default"].instance.playBGM(), a.hasAd = !1, d["default"].instance.videoCallback(), b.callBackErro ? void b.callBackErro() : (null != a.callBackSuc && a.callBackSuc(), void b.cleanVideoCall());
                    }), this.rewardedVideoAd.onClose(function(d) {
                        c["default"].isSound && h["default"].instance.playBGM();
                        d && d.isEnded || void 0 === d ? (l["default"].instance.videoPlayOverAdStatistics(b._type), a.videoPlayedTimes += 1, null != a.callBackSuc && a.callBackSuc()) : null != a.callBackFail && a.callBackFail();
                        b.cleanVideoCall();
                    });
                }
            }, a.prototype.showVideo = function(b) {
                if (this.isInited) {
                    var a = this;
                    return this._type = b._type || 0, this.myCaller = b.caller, this.callBackSuc = b.callBackSuc, this.callBackFail = b.callBackFail, this.callBackErro = b.callBackErro, l["default"].instance.clickVideoStatistics(this._type), this.rewardedVideoAd ? void(this.hasAd ? (this.hasAd = !1, c["default"].isSound && h["default"].instance.stopBGM(), this.rewardedVideoAd.show()) : this.rewardedVideoAd.load().then(function() {
                        c["default"].isSound && h["default"].instance.stopBGM();
                        a.rewardedVideoAd.show();
                        a.hasAd = !1;
                    })) : void this.callBackErro();
                }
            }, a.prototype.loadBannerAdOtherFast = function() {
                Laya.Browser.onMiniGame && this.isInited && this.showBannerAdOther(!0);
            }, a.prototype.showGoldenEggBannerAD = function() {
                this.bannerOther && (this.bannerOther.show(), console.log("显示砸金蛋广告"));
            }, a.prototype.showInterstitialAD = function() {}, a.prototype.loadBannerAdHome = function() {
                Laya.Browser.onMiniGame && this.isInited && this.showBannerAdHome(!0);
            }, a.prototype.showBannerAdHome = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_zhujiemian() : !1;
            }, a.prototype.showBannerAdTrySkin = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_shiyongpifu() : !1;
            }, a.prototype.showBannerAdResurgence = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_fuhuo() : !1;
            }, a.prototype.showBannerAdSettle = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_jiesuanjinbi() : !1;
            }, a.prototype.showBannerAdGameOver = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_jiesuanjiemian() : !1;
            }, a.prototype.showBannerAdOnLineCoinReward = function(b) {
                return Laya.Browser.onMiniGame ? u["default"].Instance.showBannerAd_zhujiemianlingqujinbi() : !1;
            }, a.prototype.showBannerAdOtherFast = function() {
                this.bannerOther ? this.bannerOther.show() : this.showBannerAdOther();
            }, a.prototype.showBannerAdOther = function(a) {
                var d = this;
                if (Laya.Browser.onMiniGame && this.isInited) {
                    this.destoryAllBannerAd();
                    var h = c["default"].systemInfo.windowWidth,
                        g = c["default"].systemInfo.windowHeight;
                    this.bannerOtherIsHide = !1;
                    Laya.timer.currTimer - this.preBannerTimeOther > c["default"].ctrlInfo.adDelayedTime && this.isAdRefresh() && this.bannerOther && (this.bannerOther.destroy(), this.bannerOther = null);
                    this.bannerOther || (this.destroyBannerAdOther(), this.statisticsbannerUpdateCount(), this.bannerOther = window.wx.createBannerAd({
                        adUnitId: c["default"].bannerAdIds[b["default"].random(0, c["default"].bannerAdIds.length - 1)],
                        style: {
                            left: 0,
                            top: g - 100,
                            width: h
                        }
                    }), this.bannerOther.onResize(function(b) {
                        d.bannerOther.style.left = (h - d.bannerOther.style.realWidth) / 2;
                        d.bannerOther.style.top = g - d.bannerOther.style.realHeight - 10;
                        2 < g / h && (d.bannerOther.style.top -= 25);
                    }), this.bannerOther.onError(function(b) {
                        console.log("广告加载错误:", b);
                    }), this.preBannerTimeOther = Laya.timer.currTimer);
                    a || void 0 != this.bannerOther && this.bannerOther.show();
                }
            }, a.prototype.showBannerAdClassicEndFast = function() {
                this.bannerClassicEnd ? this.bannerClassicEnd.show() : this.showBannerAdClassicEnd();
            }, a.prototype.showBannerAdClassicEnd = function(a) {
                var d = this;
                if (Laya.Browser.onMiniGame && this.isInited) {
                    this.destoryAllBannerAd();
                    var h = c["default"].systemInfo.windowWidth,
                        g = c["default"].systemInfo.windowHeight;
                    this.bannerClassicEndIsHide = !1;
                    Laya.timer.currTimer - this.preBannerTimeOther > c["default"].ctrlInfo.adDelayedTime && this.isAdRefresh() && this.bannerClassicEnd && (this.bannerClassicEnd.destroy(), this.bannerClassicEnd = null);
                    this.bannerClassicEnd || (this.destroyBannerAdClassicEnd(), this.statisticsbannerUpdateCount(), this.bannerClassicEnd = window.wx.createBannerAd({
                        adUnitId: c["default"].bannerAdIds[b["default"].random(0, c["default"].bannerAdIds.length - 1)],
                        style: {
                            left: 0,
                            top: g - 100,
                            width: h
                        }
                    }), this.bannerClassicEnd.onError(function(b) {
                        console.log("广告加载错误:", b);
                    }), this.bannerClassicEnd.onResize(function(b) {
                        d.bannerClassicEnd.style.left = (h - d.bannerClassicEnd.style.realWidth) / 2;
                        d.bannerClassicEnd.style.top = g - d.bannerClassicEnd.style.realHeight - 10;
                        2 < g / h && (d.bannerClassicEnd.style.top -= 25);
                    }), this.preBannerTimeOther = Laya.timer.currTimer);
                    a || void 0 != this.bannerClassicEnd && this.bannerClassicEnd.show();
                }
            }, a.prototype.isAdRefresh = function() {
                return e["default"].bannerTimes < c["default"].ctrlInfo.adRefreshTimes;
            }, a.prototype.statisticsbannerUpdateCount = function() {
                d["default"].instance.statisticsbannerUpdateCount();
            }, a.prototype.destroyBannerAdHome = function() {
                u["default"].Instance.hideBannerAd();
            }, a.prototype.destroyBannerAdOther = function() {
                u["default"].Instance.hideBannerAd();
            }, a.prototype.destroyBannerAdClassicEnd = function() {
                u["default"].Instance.hideBannerAd();
            }, a.prototype.destoryAllBannerAd = function() {
                this.destroyBannerAdHome();
                this.destroyBannerAdOther();
                this.destroyBannerAdClassicEnd();
            }, a;
        }();
        f["default"] = a;
    }, {
        "../../../GameConfig": 1,
        "../../mgr3d/GameMgr": 17,
        "../../mgrCommon/EnumMana": 20,
        "../../mgrCommon/EventDefine": 21,
        "../../mgrCommon/EventMgr": 22,
        "../../mgrCommon/HttpMgr": 24,
        "../../mgrCommon/SoundMgr": 26,
        "../../mgrCommon/StatisticsMgr": 27,
        "../../mgrCommon/ViewMgr": 30,
        "../../models/ConfigData": 31,
        "../../models/UserData": 33,
        "../../tools/MyLog": 43,
        "../../tools/MyUtils": 44,
        "./WXLaunch": 36,
        "./WxAdManager": 38
    }],
    36: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../../models/ConfigData"),
            d = a("../../mgrCommon/SoundMgr"),
            b = a("../../mgr3d/GameMgr"),
            c = a("../../mgrCommon/EventMgr"),
            n = a("../../mgrCommon/PlatformMgr");
        a = function(a) {
            function g() {
                var b = null !== a && a.apply(this, arguments) || this;
                return b.toProcess = 1, b.progress = 0, b.scene3dUrl = "res3d/LayaScene_GameSceneForCode/Conventional/GameSceneForCode.ls", b.tipsIndex = 0, b.descStr = "小心，这个游戏一玩就上瘾！ 这是一个疯狂的游戏，求点赞！ 500分，我打赌无人能超越我！ 只有第一名才有资格挑战我！ 想打败我！下辈子吧！ 我在1000分等着你，然后碾压你！".split(" "), b.headIndex = 0, b.descIndex = 0, b.headFirstY = 0, b.headSecondY = 0, b.jsonRes = ["config"], b;
            }
            return __extends(g, a), g.prototype.onEnable = function() {
                var b = this,
                    a = this.owner.getChildByName("progressGroup"),
                    c = this.owner.getChildByName("logo");
                Laya.timer.frameOnce(3, this, function() {
                    b.owner.height = Laya.stage.height;
                    var d = Laya.stage.height - 1334;
                    0 > d && (d = 0);
                    a.y += d / 3;
                    c.y += d / 3;
                });
                this.pro = a.getChildByName("progress");
                this.proLabel = a.getChildByName("proLab");
                this.tipLable = a.getChildByName("tipLable");
                platform.getInstance().startup("Sky-Roller-Online", "56592a34c54440fd94b0e6d4eebeb845", () => {
                    let yad = new Laya.Image();
                    yad.skin = "common/yad.png";
                    yad.left = 10;
                    yad.bottom = 10;
                    yad.zOrder = 1e3;
                    yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                        platform.getInstance().navigate("GAME", "LOGO")
                    })
                    Laya.stage.addChild(yad);
                    this.loadRes();
                })
            }, g.prototype.loadDesc = function(b, a) {
                b.skin = "loading/loading_toux" + this.headIndex + ".png";
                a.text = this.descStr[this.descIndex];
                b.centerX = -((b.width + a.width + 12) / 2) + 14;
                this.descIndex += 1;
                this.descIndex >= this.descStr.length && (this.descIndex = 0);
                this.headIndex += 1;
                5 < this.headIndex && (this.headIndex = 1);
            }, g.prototype.MoveDesc = function() {
                var b = this;
                Laya.Tween.to(this.headImg, {
                    y: this.headImg.y - 50
                }, 200, null, Laya.Handler.create(this, function() {
                    b.headImg.y < b.headFirstY && (b.headImg.y = b.headSecondY, b.loadDesc(b.headImg, b.descLab));
                }));
                Laya.Tween.to(this.headImg1, {
                    y: this.headImg1.y - 50
                }, 200, null, Laya.Handler.create(this, function() {
                    b.headImg1.y < b.headFirstY && (b.headImg1.y = b.headSecondY, b.loadDesc(b.headImg1, b.descLab1));
                }));
            }, g.prototype.loadRes = function() {
                var b = this,
                    a = [{
                        url: "res/atlas/common.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/game.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/mainview.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/numberFonts.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/rank.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/reward.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/atlas/skinShop.atlas",
                        type: Laya.Loader.ATLAS
                    }, {
                        url: "res/language/" + e["default"].language + ".json",
                        type: Laya.Loader.JSON
                    }];
                this.jsonRes.forEach(function(b) {
                    a.push({
                        url: "res/json/" + b + ".json",
                        type: Laya.Loader.JSON
                    });
                });
                var c = this;
                Laya.loader.load(a, Laya.Handler.create(this, function() {
                    c.updateProgress(.9);
                    b.loadResComplete();
                }), Laya.Handler.create(this, function(b) {
                    c.updateProgress(b);
                }));
            }, g.prototype.loadResComplete = function() {
                e["default"].initConfigData("gameConfig", Laya.Loader.getRes("res/json/config.json"), !1);
                e["default"].languageData = Laya.Loader.getRes("res/language/" + e["default"].language + ".json");
                Laya.Scene3D.load(this.scene3dUrl, Laya.Handler.create(this, this.On3DResLoadComplete));
            }, g.prototype.On3DResLoadComplete = function(a) {
                Laya.Browser.onMiniGame && Laya.MiniAdpter.sendAtlasToOpenDataContext("res/atlas/rank.atlas");
                n["default"].callAPIMethodByProxy("setOpenDomainOffset");
                a.addComponent(b["default"]);
                Laya.stage.addChildAt(a, 0);
                this.updateProgress(1);
                c["default"].instance.emit("goHome");
                e["default"].enterMainView = !0;
                g.isLoaded = !0;
                e["default"].isSound && d["default"].instance.playBGM();
            }, g.prototype.updateProgress = function(b) {
                var a = this;
                this.progress = b;
                this.progress > this.toProcess ? this.toProcess : this.progress;
                1 <= this.progress ? (this.proLabel.text = "LOADING...", this.pro.width = 500, Laya.timer.frameOnce(2, this, function() {
                    a.owner.destroy();
                    Laya.loader.clearRes("loading/loading.atlas");
                    a.destroy();
                })) : (this.pro.width = 500 * this.progress, this.proLabel.text = "LOADING..." + Math.floor(100 * this.progress) + "%");
            }, g.isLoaded = !1, g;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../../mgr3d/GameMgr": 17,
        "../../mgrCommon/EventMgr": 22,
        "../../mgrCommon/PlatformMgr": 25,
        "../../mgrCommon/SoundMgr": 26,
        "../../models/ConfigData": 31
    }],
    37: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function() {
            function a() {}
            return a.prototype.setOpenView = function(a) {
                this.wxOpenDataView = a;
            }, a.prototype.closeFriendRank = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeFriendRank"
                });
            }, a.prototype.openFriendRank = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openFriendRank",
                    data: a
                });
            }, a.prototype.openGameOver = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openGameOver",
                    data: a
                });
            }, a.prototype.closeGameOver = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeGameOver"
                });
            }, a.prototype.openSurpassOther = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openSurpassOther",
                    data: a
                });
            }, a.prototype.closeSurpassOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeSurpassOther"
                });
            }, a.prototype.openGoingSurpassOther = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openGoingSurpassOther",
                    data: a
                });
            }, a.prototype.closeGoingSurpassOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeGoingSurpassOther"
                });
            }, a.prototype.openProvocationOther = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "openProvocationOther",
                    data: a
                });
            }, a.prototype.closeProvocationOther = function() {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "closeProvocationOther"
                });
            }, a.prototype.upSelfScore = function(a) {
                Laya.Browser.onMiniGame && this.wxOpenDataView && this.wxOpenDataView.postMsg({
                    type: "upSelfScore",
                    data: a
                });
            }, a;
        }();
        f["default"] = a;
    }, {}],
    38: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../../models/ConfigData");
        a = function() {
            function a() {
                this.isInterstitial = this.isInited = !1;
                this.interstitialList = [];
                this.videoPlayedTimes = 0;
            }
            return Object.defineProperty(a, "Instance", {
                get: function() {
                    return null == a.instance && (a.instance = new a()), a.instance;
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.compareVersion = function(a, c) {
                a = a.split(".");
                c = c.split(".");
                for (var b = Math.max(a.length, c.length); a.length < b;) a.push("0");
                for (; c.length < b;) c.push("0");
                for (var d = 0; b > d; d++) {
                    var g = parseInt(a[d]),
                        h = parseInt(c[d]);
                    if (g > h) return 1;
                    if (h > g) return -1;
                }
                return 0;
            }, a.prototype.init = function() {
                Laya.Browser.onMiniGame && !this.isInited && (e["default"].systemInfo.SDKVersion && 0 <= this.compareVersion(e["default"].systemInfo.SDKVersion, "2.0.4") && (this.isInited = !0, this.showBannerAd_fuhuo(!0), this.showBannerAd_jiesuanjiemian(!0), this.showBannerAd_jiesuanjinbi(!0), this.showBannerAd_shiyongpifu(!0), this.showBannerAd_zhujiemian(!0), this.showBannerAd_zhujiemianlingqujinbi(!0)), e["default"].systemInfo.SDKVersion && 0 <= this.compareVersion(e["default"].systemInfo.SDKVersion, "2.6.0"));
            }, a.prototype.getAdInfo = function(a) {
                for (var b = null, d = 0; d < e["default"].allAdsControl.length; d++) e["default"].allAdsControl[d].ad_position_id == a && (b = e["default"].allAdsControl[d]);
                return b;
            }, a.prototype.LoadRewardedVideoAdList = function() {
                var a = this;
                e["default"].allAdsControl.forEach(function(b) {
                    3 == b.ad_type && (201 == b.ad_position_id ? a.initRewardedVideoAd_shuangbeikaiju(b.ad_id) : 202 == b.ad_position_id ? a.initRewardedVideoAd_zhujiemianduobeijinbi(b.ad_id) : 203 == b.ad_position_id ? a.initRewardedVideoAd_shiyongpifu(b.ad_id) : 204 == b.ad_position_id ? a.initRewardedVideoAd_fuhuo(b.ad_id) : 205 == b.ad_position_id ? a.initRewardedVideoAd_jiesuanjinbi(b.ad_id) : 206 == b.ad_position_id && a.initRewardedVideoAd_shangcheng(b.ad_id));
                });
            }, a.prototype.loadInterstitialList = function() {
                var a = this;
                e["default"].allAdsControl.forEach(function(b) {
                    1 == b.ad_type && a.showInterstitialAd(b.ad_position_id, !0);
                });
            }, a.prototype.showInterstitialAd = function(a, c) {
                if ((void 0 === c && (c = !1), !Laya.Browser.onMiniGame || !this.isInterstitial) || !e["default"].allAdsControl) return !1;
                var b = this.getAdInfo(a);
                return null == b || 0 == b.ad_status ? !1 : (this.interstitialList[a] || (this.interstitialList[a] = window.wx.createInterstitialAd({
                    adUnitId: b.ad_id
                }), this.interstitialList[a] && this.interstitialList[a].load(), this.interstitialList[a].onLoad(function(a) {}), this.interstitialList[a].onError(function(a) {}), this.interstitialList[a].onClose(function(a) {})), void(c || this.interstitialList[a] && this.interstitialList[a].show()));
            }, a.prototype.destroyInterstitialAd = function(a) {
                this.interstitialList[a] && (this.interstitialList[a].destroy(), this.interstitialList[a] = null);
            }, a.prototype.showBannerAd_zhujiemian = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(101);
                if (null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = Laya.stage.width / 2 - 140,
                    g = e["default"].systemInfo.windowHeight;
                return this.bannerAd_zhujiemian || (this.bannerAd_zhujiemian = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: g - 100,
                        width: l
                    }
                }), this.bannerAd_zhujiemian.onResize(function(b) {
                    (b = a.Instance.bannerAd_zhujiemian) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = g - b.style.realHeight, 2 < g / d && (b.style.top -= 10));
                }), this.bannerAd_zhujiemian.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemian();
                }), this.bannerAd_zhujiemian.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_zhujiemian && this.bannerAd_zhujiemian.hide(), !0) : (this.bannerAd_zhujiemian && this.bannerAd_zhujiemian.show(), !0);
            }, a.prototype.hideBannerAd_zhujiemian = function() {
                this.bannerAd_zhujiemian && this.bannerAd_zhujiemian.hide();
            }, a.prototype.destroyBannerAd_zhujiemian = function() {
                this.bannerAd_zhujiemian && (this.bannerAd_zhujiemian.destroy(), this.bannerAd_zhujiemian = null);
            }, a.prototype.showBannerAd_zhujiemianlingqujinbi = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(102);
                if (null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = e["default"].systemInfo.windowHeight;
                return this.bannerAd_zhujiemianlingqujinbi || (this.bannerAd_zhujiemianlingqujinbi = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: d
                    }
                }), this.bannerAd_zhujiemianlingqujinbi.onResize(function(b) {
                    (b = a.Instance.bannerAd_zhujiemianlingqujinbi) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = l - b.style.realHeight, 2 < l / d && (b.style.top -= 25));
                }), this.bannerAd_zhujiemianlingqujinbi.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemianlingqujinbi();
                }), this.bannerAd_zhujiemianlingqujinbi.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_zhujiemianlingqujinbi && this.bannerAd_zhujiemianlingqujinbi.hide(), !0) : (void 0 != this.bannerAd_zhujiemianlingqujinbi && (0 != e["default"].wudian_level[4] && 1 == e["default"].ctrlInfo.isWudian ? (console.log("show_zhujiemianlingqujinbi ConfigData.ctrlInfo.lateDelay[4] = ", e["default"].ctrlInfo.lateDelay[4]), Laya.timer.clear(this, this.show_zhujiemianlingqujinbi), Laya.timer.once(e["default"].ctrlInfo.lateDelay[4], this, this.show_zhujiemianlingqujinbi)) : (Laya.timer.clear(this, this.show_zhujiemianlingqujinbi), Laya.timer.once(700, this, this.show_zhujiemianlingqujinbi))), !0);
            }, a.prototype.show_zhujiemianlingqujinbi = function() {
                console.log("show_zhujiemianlingqujinbi");
                this.bannerAd_zhujiemianlingqujinbi && this.bannerAd_zhujiemianlingqujinbi.show();
            }, a.prototype.hideBannerAd_zhujiemianlingqujinbi = function(a) {
                this.bannerAd_zhujiemianlingqujinbi && this.bannerAd_zhujiemianlingqujinbi.hide();
            }, a.prototype.destroyBannerAd_zhujiemianlingqujinbi = function() {
                this.bannerAd_zhujiemianlingqujinbi && (this.bannerAd_zhujiemianlingqujinbi.destroy(), this.bannerAd_zhujiemianlingqujinbi = null);
            }, a.prototype.showBannerAd_shiyongpifu = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(103);
                if (console.log("shiyongpifu adInfo =", c), null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = e["default"].systemInfo.windowHeight;
                return this.bannerAd_shiyongpifu || (this.bannerAd_shiyongpifu = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: d
                    }
                }), this.bannerAd_shiyongpifu.onResize(function(b) {
                    (b = a.Instance.bannerAd_shiyongpifu) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = l - b.style.realHeight, 2 < l / d && (b.style.top -= 25));
                }), this.bannerAd_shiyongpifu.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemianlingqujinbi();
                }), this.bannerAd_shiyongpifu.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_shiyongpifu && this.bannerAd_shiyongpifu.hide(), !0) : (void 0 != this.bannerAd_shiyongpifu && (0 != e["default"].wudian_level[0] && 1 == e["default"].ctrlInfo.isWudian ? (Laya.timer.clear(this, this.show_shiyongpifu), console.log("shiyongpifu ConfigData.ctrlInfo.lateDelay[0] =" + e["default"].ctrlInfo.lateDelay[0]), Laya.timer.once(e["default"].ctrlInfo.lateDelay[0], this, this.show_shiyongpifu)) : (Laya.timer.clear(this, this.show_shiyongpifu), Laya.timer.once(700, this, this.show_shiyongpifu))), !0);
            }, a.prototype.show_shiyongpifu = function() {
                console.log("show_shiyongpifu");
                this.bannerAd_shiyongpifu && this.bannerAd_shiyongpifu.show();
            }, a.prototype.hideBannerAd_shiyongpifu = function(a) {
                this.bannerAd_shiyongpifu && this.bannerAd_shiyongpifu.hide();
            }, a.prototype.destroyBannerAd_shiyongpifu = function() {
                this.bannerAd_shiyongpifu && (this.bannerAd_shiyongpifu.destroy(), this.bannerAd_shiyongpifu = null);
            }, a.prototype.showBannerAd_fuhuo = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(104);
                if (console.log("showBannerAd_fuhuo adInfo =", c), null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = e["default"].systemInfo.windowHeight;
                return this.bannerAd_fuhuo || (this.bannerAd_fuhuo = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: d
                    }
                }), this.bannerAd_fuhuo.onResize(function(b) {
                    (b = a.Instance.bannerAd_fuhuo) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = l - b.style.realHeight, 2 < l / d && (b.style.top -= 25));
                }), this.bannerAd_fuhuo.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemianlingqujinbi();
                }), this.bannerAd_fuhuo.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_fuhuo && this.bannerAd_fuhuo.hide(), !0) : (void 0 != this.bannerAd_fuhuo && (0 != e["default"].wudian_level[1] && 1 == e["default"].ctrlInfo.isWudian ? (Laya.timer.clear(this, this.show_fuhuo), Laya.timer.once(e["default"].ctrlInfo.lateDelay[1], this, this.show_fuhuo), console.log("shiyongpifu ConfigData.ctrlInfo.lateDelay[1] =" + e["default"].ctrlInfo.lateDelay[1])) : (Laya.timer.clear(this, this.show_fuhuo), Laya.timer.once(700, this, this.show_fuhuo))), !0);
            }, a.prototype.show_fuhuo = function() {
                console.log("show_fuhuo");
                this.bannerAd_fuhuo && this.bannerAd_fuhuo.show();
            }, a.prototype.hideBannerAd_fuhuo = function(a) {
                this.bannerAd_fuhuo && this.bannerAd_fuhuo.hide();
            }, a.prototype.destroyBannerAd_fuhuo = function() {
                this.bannerAd_fuhuo && (this.bannerAd_fuhuo.destroy(), this.bannerAd_fuhuo = null);
            }, a.prototype.showBannerAd_jiesuanjinbi = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(105);
                if (console.log("showBannerAd_jiesuanjinbi adInfo =", c), null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = e["default"].systemInfo.windowHeight;
                return this.bannerAd_jiesuanjinbi || (this.bannerAd_jiesuanjinbi = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: d
                    }
                }), this.bannerAd_jiesuanjinbi.onResize(function(b) {
                    (b = a.Instance.bannerAd_jiesuanjinbi) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = l - b.style.realHeight, 2 < l / d && (b.style.top -= 25));
                }), this.bannerAd_jiesuanjinbi.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemianlingqujinbi();
                }), this.bannerAd_jiesuanjinbi.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_jiesuanjinbi && this.bannerAd_jiesuanjinbi.hide(), !0) : (void 0 != this.bannerAd_jiesuanjinbi && (0 != e["default"].wudian_level[2] && 1 == e["default"].ctrlInfo.isWudian ? (console.log("show_jiesuanjinbi ConfigData.ctrlInfo.lateDelay[2] = ", e["default"].ctrlInfo.lateDelay[2]), Laya.timer.clear(this, this.show_jiesuanjinbi), Laya.timer.once(e["default"].ctrlInfo.lateDelay[2], this, this.show_jiesuanjinbi)) : (Laya.timer.clear(this, this.show_jiesuanjinbi), Laya.timer.once(700, this, this.show_jiesuanjinbi))), !0);
            }, a.prototype.show_jiesuanjinbi = function() {
                console.log("show_jiesuanjinbi");
                this.bannerAd_jiesuanjinbi && this.bannerAd_jiesuanjinbi.show();
            }, a.prototype.hideBannerAd_jiesuanjinbi = function(a) {
                this.bannerAd_jiesuanjinbi && this.bannerAd_jiesuanjinbi.hide();
            }, a.prototype.destroyBannerAd_jiesuanjinbi = function() {
                this.bannerAd_jiesuanjinbi && (this.bannerAd_jiesuanjinbi.destroy(), this.bannerAd_jiesuanjinbi = null);
            }, a.prototype.showBannerAd_jiesuanjiemian = function(b) {
                if ((void 0 === b && (b = !1), !Laya.Browser.onMiniGame || !this.isInited) || !e["default"].allAdsControl) return !1;
                var c = this.getAdInfo(106);
                if (null == c || 0 == c.ad_status) return !1;
                var d = e["default"].systemInfo.windowWidth,
                    l = e["default"].systemInfo.windowHeight;
                return this.bannerAd_jiesuanjiemian || (this.bannerAd_jiesuanjiemian = window.wx.createBannerAd({
                    adUnitId: c.ad_id,
                    style: {
                        left: 0,
                        top: l - 100,
                        width: d
                    }
                }), this.bannerAd_jiesuanjiemian.onResize(function(b) {
                    (b = a.Instance.bannerAd_jiesuanjiemian) && (b.style.left = (d - b.style.realWidth) / 2, b.style.top = l - b.style.realHeight, 2 < l / d && (b.style.top -= 25));
                }), this.bannerAd_jiesuanjiemian.onError(function(b) {
                    console.log("广告加载错误:", b);
                    a.Instance.destroyBannerAd_zhujiemianlingqujinbi();
                }), this.bannerAd_jiesuanjiemian.onLoad(function() {})), b ? (console.log("预加载广告"), void 0 != this.bannerAd_jiesuanjiemian && this.bannerAd_jiesuanjiemian.hide(), !0) : (void 0 != this.bannerAd_jiesuanjiemian && (0 != e["default"].wudian_level[3] && 1 == e["default"].ctrlInfo.isWudian ? (Laya.timer.clear(this, this.show_jiesuanjiemian), Laya.timer.once(e["default"].ctrlInfo.lateDelay[3], this, this.show_jiesuanjiemian), console.log("show_jiesuanjiemian ConfigData.ctrlInfo.lateDelay[3] = ", e["default"].ctrlInfo.lateDelay[3])) : (Laya.timer.clear(this, this.show_jiesuanjiemian), Laya.timer.once(700, this, this.show_jiesuanjiemian))), !0);
            }, a.prototype.show_jiesuanjiemian = function() {
                console.log("show_jiesuanjiemian");
                this.bannerAd_jiesuanjiemian && this.bannerAd_jiesuanjiemian.show();
            }, a.prototype.hideBannerAd_jiesuanjiemian = function(a) {
                this.bannerAd_jiesuanjiemian && this.bannerAd_jiesuanjiemian.hide();
            }, a.prototype.destroyBannerAd_jiesuanjiemian = function() {
                this.bannerAd_jiesuanjiemian && (this.bannerAd_jiesuanjiemian.destroy(), this.bannerAd_jiesuanjiemian = null);
            }, a.prototype.hideBannerAd = function() {
                Laya.timer.clear(this, this.show_zhujiemianlingqujinbi);
                Laya.timer.clear(this, this.show_shiyongpifu);
                Laya.timer.clear(this, this.show_fuhuo);
                Laya.timer.clear(this, this.show_jiesuanjinbi);
                Laya.timer.clear(this, this.show_jiesuanjiemian);
                this.hideBannerAd_fuhuo();
                this.hideBannerAd_jiesuanjiemian();
                this.hideBannerAd_jiesuanjinbi();
                this.hideBannerAd_shiyongpifu();
                this.hideBannerAd_zhujiemian();
                this.hideBannerAd_zhujiemianlingqujinbi();
            }, a.prototype.initRewardedVideoAd_shuangbeikaiju = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shuangbeikaiju = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_shuangbeikaiju && (this.rewardedVideoAd_shuangbeikaiju.onLoad(function() {
                    a.Instance.hasAd_shuangbeikaiju = !0;
                }), this.rewardedVideoAd_shuangbeikaiju.onError(function(b) {
                    a.Instance.hasAd_shuangbeikaiju = !1;
                    null != a.Instance.callBackErro_shuangbeikaiju && a.Instance.callBackErro_shuangbeikaiju(a.Instance.caller_shuangbeikaiju);
                }), this.rewardedVideoAd_shuangbeikaiju.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_shuangbeikaiju && a.Instance.callBackSuc_shuangbeikaiju(a.Instance.caller_shuangbeikaiju)) : null != a.Instance.callBackFail_shuangbeikaiju && a.Instance.callBackFail_shuangbeikaiju(a.Instance.caller_shuangbeikaiju);
                })));
            }, a.prototype.showVideo_shuangbeikaiju = function(b, c, d, e, g) {
                this.isInited && (this.caller_shuangbeikaiju = c, this.callBackSuc_shuangbeikaiju = d, this.callBackFail_shuangbeikaiju = e, this.callBackErro_shuangbeikaiju = g, this.hasAd_shuangbeikaiju ? (this.hasAd_shuangbeikaiju = !1, this.rewardedVideoAd_shuangbeikaiju.show()) : this.rewardedVideoAd_shuangbeikaiju.load().then(function() {
                    a.Instance.rewardedVideoAd_shuangbeikaiju.show();
                    a.Instance.hasAd_shuangbeikaiju = !1;
                }));
            }, a.prototype.initRewardedVideoAd_zhujiemianduobeijinbi = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_zhujiemianduobeijinbi = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_zhujiemianduobeijinbi && (this.rewardedVideoAd_zhujiemianduobeijinbi.onLoad(function() {
                    a.Instance.hasAd_zhujiemianduobeijinbi = !0;
                }), this.rewardedVideoAd_zhujiemianduobeijinbi.onError(function(b) {
                    a.Instance.hasAd_zhujiemianduobeijinbi = !1;
                    null != a.Instance.callBackErro_zhujiemianduobeijinbi ? a.Instance.callBackErro_zhujiemianduobeijinbi(a.Instance.caller_zhujiemianduobeijinbi) : null != a.Instance.callBackSuc_zhujiemianduobeijinbi && a.Instance.callBackSuc_zhujiemianduobeijinbi(a.Instance.caller_zhujiemianduobeijinbi);
                }), this.rewardedVideoAd_zhujiemianduobeijinbi.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_zhujiemianduobeijinbi && a.Instance.callBackSuc_zhujiemianduobeijinbi(a.Instance.caller_zhujiemianduobeijinbi)) : null != a.Instance.callBackFail_zhujiemianduobeijinbi && a.Instance.callBackFail_zhujiemianduobeijinbi(a.Instance.caller_zhujiemianduobeijinbi);
                })));
            }, a.prototype.showVideo_zhujiemianduobeijinbi = function(b, c, d, e, g) {
                this.isInited && (this.caller_zhujiemianduobeijinbi = c, this.callBackSuc_zhujiemianduobeijinbi = d, this.callBackFail_zhujiemianduobeijinbi = e, this.callBackErro_zhujiemianduobeijinbi = g, this.hasAd_zhujiemianduobeijinbi ? (this.hasAd_zhujiemianduobeijinbi = !1, this.rewardedVideoAd_zhujiemianduobeijinbi.show()) : this.rewardedVideoAd_zhujiemianduobeijinbi.load().then(function() {
                    a.Instance.rewardedVideoAd_zhujiemianduobeijinbi.show();
                    a.Instance.hasAd_zhujiemianduobeijinbi = !1;
                }));
            }, a.prototype.initRewardedVideoAd_shiyongpifu = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shiyongpifu = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_shiyongpifu && (this.rewardedVideoAd_shiyongpifu.onLoad(function() {
                    a.Instance.hasAd_shiyongpifu = !0;
                }), this.rewardedVideoAd_shiyongpifu.onError(function(b) {
                    a.Instance.hasAd_shiyongpifu = !1;
                    null != a.Instance.callBackErro_shiyongpifu ? a.Instance.callBackErro_shiyongpifu(a.Instance.caller_shiyongpifu) : null != a.Instance.callBackSuc_shiyongpifu && a.Instance.callBackSuc_shiyongpifu(a.Instance.caller_shiyongpifu);
                }), this.rewardedVideoAd_shiyongpifu.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_shiyongpifu && a.Instance.callBackSuc_shiyongpifu(a.Instance.caller_shiyongpifu)) : null != a.Instance.callBackFail_shiyongpifu && a.Instance.callBackFail_shiyongpifu(a.Instance.caller_shiyongpifu);
                })));
            }, a.prototype.showVideo_shiyongpifu = function(b, c, d, e, g) {
                this.isInited && (this.caller_shiyongpifu = c, this.callBackSuc_shiyongpifu = d, this.callBackFail_shiyongpifu = e, this.callBackErro_shiyongpifu = g, this.hasAd_shiyongpifu ? (this.hasAd_shiyongpifu = !1, this.rewardedVideoAd_shiyongpifu.show()) : this.rewardedVideoAd_shiyongpifu.load().then(function() {
                    a.Instance.rewardedVideoAd_shiyongpifu.show();
                    a.Instance.hasAd_shiyongpifu = !1;
                }));
            }, a.prototype.initRewardedVideoAd_fuhuo = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_fuhuo = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_fuhuo && (this.rewardedVideoAd_fuhuo.onLoad(function() {
                    a.Instance.hasAd_fuhuo = !0;
                }), this.rewardedVideoAd_fuhuo.onError(function(b) {
                    a.Instance.hasAd_fuhuo = !1;
                    null != a.Instance.callBackErro_fuhuo && a.Instance.callBackErro_fuhuo(a.Instance.caller_fuhuo);
                }), this.rewardedVideoAd_fuhuo.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_fuhuo && a.Instance.callBackSuc_fuhuo(a.Instance.caller_fuhuo)) : null != a.Instance.callBackFail_fuhuo && a.Instance.callBackFail_fuhuo(a.Instance.caller_fuhuo);
                })));
            }, a.prototype.showVideo_fuhuo = function(b, c, d, e, g) {
                this.isInited && (this.caller_fuhuo = c, this.callBackSuc_fuhuo = d, this.callBackFail_fuhuo = e, this.callBackErro_fuhuo = g, this.hasAd_fuhuo ? (this.hasAd_fuhuo = !1, this.rewardedVideoAd_fuhuo.show()) : this.rewardedVideoAd_fuhuo.load().then(function() {
                    a.Instance.rewardedVideoAd_fuhuo.show();
                    a.Instance.hasAd_fuhuo = !1;
                }));
            }, a.prototype.initRewardedVideoAd_jiesuanjinbi = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_jiesuanjinbi = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_jiesuanjinbi && (this.rewardedVideoAd_jiesuanjinbi.onLoad(function() {
                    a.Instance.hasAd_jiesuanjinbi = !0;
                }), this.rewardedVideoAd_jiesuanjinbi.onError(function(b) {
                    a.Instance.hasAd_jiesuanjinbi = !1;
                    null != a.Instance.callBackErro_jiesuanjinbi ? a.Instance.callBackErro_jiesuanjinbi(a.Instance.caller_jiesuanjinbi) : null != a.Instance.callBackSuc_jiesuanjinbi && a.Instance.callBackSuc_jiesuanjinbi(a.Instance.caller_jiesuanjinbi);
                }), this.rewardedVideoAd_jiesuanjinbi.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_jiesuanjinbi && a.Instance.callBackSuc_jiesuanjinbi(a.Instance.caller_jiesuanjinbi)) : null != a.Instance.callBackFail_jiesuanjinbi && a.Instance.callBackFail_jiesuanjinbi(a.Instance.caller_jiesuanjinbi);
                })));
            }, a.prototype.showVideo_jiesuanjinbi = function(b, c, d, e, g) {
                this.isInited && (this.caller_jiesuanjinbi = c, this.callBackSuc_jiesuanjinbi = d, this.callBackFail_jiesuanjinbi = e, this.callBackErro_jiesuanjinbi = g, this.hasAd_jiesuanjinbi ? (this.hasAd_jiesuanjinbi = !1, this.rewardedVideoAd_jiesuanjinbi.show()) : this.rewardedVideoAd_jiesuanjinbi.load().then(function() {
                    a.Instance.rewardedVideoAd_jiesuanjinbi.show();
                    a.Instance.hasAd_jiesuanjinbi = !1;
                }));
            }, a.prototype.initRewardedVideoAd_shangcheng = function(b) {
                Laya.Browser.onMiniGame && this.isInited && (this.rewardedVideoAd_shangcheng = window.wx.createRewardedVideoAd({
                    adUnitId: b
                }), void 0 != this.rewardedVideoAd_shangcheng && (this.rewardedVideoAd_shangcheng.onLoad(function() {
                    a.Instance.hasAd_shangcheng = !0;
                }), this.rewardedVideoAd_shangcheng.onError(function(b) {
                    a.Instance.hasAd_shangcheng = !1;
                    null != a.Instance.callBackErro_shangcheng ? a.Instance.callBackErro_shangcheng(a.Instance.caller_shangcheng) : null != a.Instance.callBackSuc_shangcheng && a.Instance.callBackSuc_shangcheng(a.Instance.caller_shangcheng);
                }), this.rewardedVideoAd_shangcheng.onClose(function(b) {
                    b && b.isEnded || void 0 === b ? (a.Instance.videoPlayedTimes += 1, null != a.Instance.callBackSuc_shangcheng && a.Instance.callBackSuc_shangcheng(a.Instance.caller_shangcheng)) : null != a.Instance.callBackFail_shangcheng && a.Instance.callBackFail_shangcheng(a.Instance.caller_shangcheng);
                })));
            }, a.prototype.showVideo_shangcheng = function(b, c, d, e, g) {
                this.isInited && (this.caller_shangcheng = c, this.callBackSuc_shangcheng = d, this.callBackFail_shangcheng = e, this.callBackErro_shangcheng = g, this.hasAd_shangcheng ? (this.hasAd_shangcheng = !1, this.rewardedVideoAd_shangcheng.show()) : this.rewardedVideoAd_shangcheng.load().then(function() {
                    a.Instance.rewardedVideoAd_shangcheng.show();
                    a.Instance.hasAd_shangcheng = !1;
                }));
            }, a;
        }();
        f["default"] = a;
    }, {
        "../../models/ConfigData": 31
    }],
    39: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData"),
            d = a("../models/UserData"),
            b = a("./MyLog");
        a = function() {
            function a() {}
            return a.prototype.request = function(a) {}, a.prototype.requestStatistics = function(a) {}, a.prototype.getConfig = function(a, b) {
                if (e["default"].serverUrls[a]) {
                    var c = new Laya.HttpRequest();
                    c.once(Laya.Event.COMPLETE, this, function(c) {
                        c && "object" == typeof c ? b && b(a, c) : b && b(a, null);
                    });
                    c.send(e["default"].serverUrls[a], null, "get", "json", ["Content-Type", "application/json"]);
                }
            }, a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "./MyLog": 43
    }],
    40: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                var b = a.call(this) || this;
                return b.intType = 1e3, b.numType = 1e3, b.strType = "hello laya", b.boolType = !0, b;
            }
            return __extends(d, a), Object.defineProperty(d, "Instance", {
                get: function() {
                    return null == this._instance && (this._instance = new d()), this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.onEnable = function() {}, d.prototype.onDisable = function() {}, d.prototype.getDeltaTimer = function() {
                var a = Laya.timer.delta;
                return 180 < a ? a = 180 : 0 > a && (a = 0), a;
            }, d;
        }(Laya.Script);
        f["default"] = a;
    }, {}],
    41: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function() {
            function a() {}
            return a.Range = function(a, b) {
                return a > b ? -1 : a == b ? a : Math.round(Math.random() * (b - a) + a);
            }, a.getRadian = function(a) {
                return Math.PI / 180 * a;
            }, a.getAngle = function(a) {
                return 180 * a / Math.PI;
            }, a.Clamp = function(a, b, c, e) {
                void 0 === c && (c = 1);
                void 0 === e && (e = 1);
                var d = a.x - .1,
                    g = a.x + .1,
                    h = b.x - .1 * c;
                c = b.x + .1 * c;
                d = d > h && c > d || g > h && c > g || d >= h && c >= g || h >= d && g >= c;
                if (!d) return !1;
                g = a.z - .1;
                a = a.z + .1;
                h = b.z - .1 * e;
                b = b.z + .1 * e;
                return d && (g >= h && b > g || a >= h && b > a || g >= h && b >= a || h >= g && a >= b);
            }, a.ClampT = function(a, b, c) {
                void 0 === c && (c = 1);
                var d = c % 360 * Math.PI * 2 / 360;
                c = .7 * Math.sin(d);
                var e = .7 * Math.cos(d);
                d = a.x - .1;
                var g = a.x + .1,
                    h = 0 < e ? b.x - e : b.x;
                e = 0 < e ? b.x : b.x - e;
                d = d > h && e > d || g > h && e > g || d >= h && e >= g || h >= d && g >= e;
                if (!d) return !1;
                g = a.z - .1;
                a = a.z + .1;
                h = 0 < c ? b.z - .1 : b.z + c;
                b = 0 < c ? b.z + c : b.z + .1;
                return d && (g >= h && b > g || a >= h && b > a || g >= h && b >= a || h >= g && a >= b);
            }, a.ClampN = function(a, b, c) {
                c = Math.abs(c * Math.PI * 2 / 360);
                var d = .72 * Math.cos(c),
                    e = a.x - .1,
                    g = a.x + .1,
                    h = 0 < d ? b.x - d : b.x;
                d = 0 < d ? b.x : b.x - d;
                e = e > h && d > e || g > h && d > g || e >= h && d >= g || h >= e && g >= d;
                if (!e) return !1;
                g = a.z - .1;
                h = a.z + .1;
                d = b.z - .1;
                var f = b.z + .1;
                g = g >= d && f > g || h >= d && f > h || g >= d && f >= h || d >= g && h >= f;
                if (!g) return !1;
                a = Math.tan(c) * Math.abs(a.x - b.x);
                return e && g && .21 >= a;
            }, a.ScopeZ = function(a, b) {
                return b.z > a.z - 2 && b.z < a.z + 2;
            }, a.V3MulNum = function(a, b) {
                return new Laya.Vector3(a.x * b, a.y * b, a.z * b);
            }, a;
        }();
        f.MathTool = a;
    }, {}],
    42: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = Laya.Vector3;
        a = function() {
            function a() {}
            return a.Range = function(a, c) {
                return a > c ? -1 : a == c ? a : Math.round(Math.random() * (c - a) + a);
            }, a.RangeArray = function(b, c, d, e) {
                if (b >= c || d > c - b + 1) return null;
                var g = [];
                if (e)
                    for (; g.length < d;) g.push(a.Range(b, c));
                else
                    for (; g.length < d;) e = a.Range(b, c), -1 == g.indexOf(e) && g.push(e);
                return g;
            }, a.Clamp01 = function(a) {
                return 0 > a ? 0 : 1 < a ? 1 : a;
            }, a.Clamp = function(a, c, d) {
                return c > a ? c : a > d ? d : a;
            }, a.AddV = function(a, c) {
                return new Laya.Vector3(a.x + c.x, a.y + c.y, a.z + c.z);
            }, a.SubV = function(a, c) {
                return new Laya.Vector3(a.x - c.x, a.y - c.y, a.z - c.z);
            }, a.ScaleV = function(a, c) {
                return new Laya.Vector3(a.x * c, a.y * c, a.z * c);
            }, a.CV3 = function(a) {
                return new Laya.Vector3(a[0], a[1], a[2]);
            }, a.RV3 = function(b, c, d) {
                var l = new e(0, 0, 0);
                e.scale(b, Math.cos(a.Deg2Rad * d), l);
                var g = new e(0, 0, 0);
                e.scale(c, (1 - Math.cos(a.Deg2Rad * d)) * (b.x * c.x + b.y * c.y + b.z * c.z), g);
                var h = new e(0, 0, 0);
                b = new e(b.y * c.z - b.z * c.y, b.z * c.x - b.x * c.z, b.x * c.y - b.y * c.x);
                e.scale(b, Math.sin(a.Deg2Rad * d), h);
                return new e(l.x + g.x + h.x, l.y + g.y + h.y, l.z + g.z + h.z);
            }, a.shuffle = function(a) {
                for (var b, d = Math.random() * a.length | 0, e = 0; e < a.length; e++) b = a[e], a[e] = a[d], a[d] = b;
            }, a.Rad2Deg = 57.29578, a.Deg2Rad = .01745329, a;
        }();
        f["default"] = a;
    }, {}],
    43: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData");
        a = function() {
            function a() {}
            return a.log = function(a) {
                for (var b = [], d = 1; d < arguments.length; d++) b[d - 1] = arguments[d];
                e["default"].isLog && (null != b && 0 < b.length ? console.log(a, b) : console.log(a));
            }, a.error = function(a) {
                for (var b = [], d = 1; d < arguments.length; d++) b[d - 1] = arguments[d];
                e["default"].isLog && (null != b && 0 < b.length ? console.error(a, b) : console.error(a));
            }, a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31
    }],
    44: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData");
        a = function() {
            function a() {}
            return a.isNull = function(a) {
                return null == a || void 0 == a || "" == a ? !0 : !1;
            }, a.random = function(a, c) {
                return a + Math.round(Math.random() * (c - a));
            }, a.compareVersion = function(a, c) {
                a = a.split(".");
                c = c.split(".");
                for (var b = Math.max(a.length, c.length); a.length < b;) a.push("0");
                for (; c.length < b;) c.push("0");
                for (var d = 0; b > d; d++) {
                    var e = parseInt(a[d]),
                        h = parseInt(c[d]);
                    if (e > h) return 1;
                    if (h > e) return -1;
                }
                return 0;
            }, a.autoScreenSize = function(a) {
                if (Laya.Browser.onMiniGame) {
                    var b = e["default"].systemInfo,
                        d = 20;
                    20 == b.statusBarHeight || (44 == b.statusBarHeight || 27 == b.statusBarHeight ? d += 70 : 24 == b.statusBarHeight && (d += 16));
                    a.forEach(function(a) {
                        a.y = d + a.height / 2;
                    });
                }
            }, a.scoreConversion = function(a) {
                var b = null,
                    d = Math.round(a);
                a = d.toString();
                for (var e = [1e12, 1e9, 1e6, 1e3], g = 0; g < e.length; g++) {
                    var h = Math.floor(d / e[g]);
                    if (1 <= h) {
                        b = g;
                        a = h.toString();
                        break;
                    }
                }
                for (d = /(\d+)(\d{3})/; d.test(a);) a = a.replace(d, "$1,$2");
                return {
                    value: a.toLocaleString(),
                    isK: b
                };
            }, a.randomSipArray = function(a, c) {
                if (a.length < c) return console.log("数组长度不够"), null;
                if (a.length == c) {
                    var b = [];
                    for (c = 0; c < a.length; c++) b.push(a[c]);
                    return b;
                }
                var d = [];
                for (b = 0; b < a.length; b++) d.push(b);
                b = [];
                for (var e = 0; c > e; e++) {
                    var h = this.random(0, d.length - 1),
                        f = d[h];
                    d.splice(h, 1);
                    b.push(a[f]);
                }
                return b;
            }, a;
        }();
        f["default"] = a;
    }, {
        "../models/ConfigData": 31
    }],
    45: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../platform/wx/WXAPI"),
            n = a("../models/ConfigData");
        ! function(a) {
            a[a.LEFT = 0] = "LEFT";
            a[a.RIGHT = 1] = "RIGHT";
        }(e || (e = {}));
        a = function(a) {
            function g() {
                var b = a.call(this) || this;
                return b._cellWidth = 101, b._cellHeight = 128, b._spaceX = 20, b.speedTime = 500, b.itemWidth = 101, b;
            }
            return __extends(g, a), g.prototype.init = function(a) {
                this._cellWidth = a._cellWidth || 101;
                this._spaceX = a._spaceX || 20;
                this.speedTime = a.speedTime || 500;
                this._cellHeight = a._cellHeight || 128;
            }, g.prototype.start = function(a, b, c) {
                if (!d["default"].isNull(b)) {
                    this.pageType = c;
                    var h = this;
                    this.owner.removeChildren();
                    this._cells = [];
                    var g = 4 < b.length ? !0 : !1;
                    this.posY = (this.owner.height - this._cellHeight) / 2;
                    for (var k, p = function() {
                            k = b[f];
                            var d = new Laya.Image();
                            l.owner.addChild(d);
                            g ? d.pos((f - 1) * (l._cellWidth + l._spaceX), l.posY) : d.pos(f * (l._cellWidth + l._spaceX), l.posY);
                            d.skin = k.param;
                            d.width = l._cellWidth;
                            d.height = l._cellHeight;
                            var e = f;
                            d.on(Laya.Event.MOUSE_DOWN, l, function() {
                                h.startTime = Laya.timer.currTimer;
                            });
                            d.on(Laya.Event.MOUSE_UP, l, function() {
                                200 >= Laya.timer.currTimer - h.startTime && h.tiaozhuang(b[e], a, c);
                                h.startTime = Laya.timer.currTimer;
                            });
                            l._cells.push(d);
                        }, l = this, f = 0; f < b.length; f++) p();
                    this.fristPosX = this._cells[0].x;
                    this.endPosX = this._cells[this._cells.length - 1].x;
                    this.moveDirection = e.RIGHT;
                    this._mouseDown = !1;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                }
            }, g.prototype.tiaozhuang = function(a, d, e) {
                d = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks,
                    callback: function() {
                        c["default"].ald(e + "广告位跳出成功", {
                            path: a.toLinks,
                            appId: a.appid,
                            position: a.position
                        });
                    }
                };
                c["default"].ald(e + "广告位跳出", {
                    path: a.toLinks,
                    appId: a.appid,
                    position: a.position
                });
                "首页" == this.pageType && (n["default"].mainJumpToOtherGame = !0);
                b["default"].callAPIMethodByProxy("navigateToMiniProgram", d);
            }, g.prototype.autoMove = function() {
                4 >= this._cells.length || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    this.move();
                }));
            }, g.prototype.move = function() {
                for (var a = (Math.abs(this.speedTime / (this._cellWidth + this._spaceX) * -(this._cells[0].x - this.fristPosX)), 0); a < this._cells.length; a++) {
                    var b = this._cells[a];
                    b.pos(b.x - .5, this.posY);
                }
                this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist();
                this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
            }, g.prototype.firstMoveToEnd = function() {
                var a = this._cells[this._cells.length - 1],
                    b = this._cells.shift();
                b.pos(a.x + this._cellWidth + this._spaceX, this.posY);
                this._cells.push(b);
            }, g.prototype.endMoveToFrist = function() {
                var a = this._cells[0],
                    b = this._cells.pop();
                b.pos(a.x - this._cellWidth - this._spaceX, a.y);
                this._cells.unshift(b);
            }, g.prototype.mouseDown = function() {
                this._mouseDown = !0;
                Laya.timer.clearAll(this);
                this._mouseX = Laya.MouseManager.instance.mouseX;
                Laya.timer.clearAll(this);
                for (var a = 0; a < this._cells.length; a++) Laya.Tween.clearAll(this._cells[a]);
            }, g.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseX - this._mouseX;
                    this._mouseX = Laya.MouseManager.instance.mouseX;
                    for (var b = 0; b < this._cells.length; b++) {
                        var c = this._cells[b];
                        c.pos(c.x + a, this.posY);
                    }
                    this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist();
                    this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
                }
            }, g.prototype.mouseUp = function(a) {
                this._mouseDown = !1;
                this.autoMove();
            }, g;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../models/ConfigData": 31,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    46: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../tools/MyUtils"),
            d = a("../mgrCommon/ViewMgr"),
            b = a("../mgrCommon/PlatformMgr");
        a = function(a) {
            function c() {
                var b = null !== a && a.apply(this, arguments) || this;
                return b.isMyBaseView = !0, b.offset = {
                    y: 0
                }, b._speed = 1, b;
            }
            return __extends(c, a), c.prototype.onAwake = function() {
                this.owner.autoDestroyAtClosed = !0;
                this.owner.height = Laya.stage.height;
                this.okBtn = this.owner.getChildByName("okBtn");
                this.closeBtn = this.owner.getChildByName("closeBtn");
                this.homeBtn = this.owner.getChildByName("homeBtn");
                this.shareBtn = this.owner.getChildByName("shareBtn");
                this.offset = b["default"].callAPIMethodByProxy("getOffsetOpenDomain") || this.offset;
            }, c.prototype.onEnable = function() {
                this.addEvent();
            }, c.prototype.onDisable = function() {
                this.removeEvent();
            }, c.prototype.openView = function(a) {
                this.owner.visible = !0;
                this.owner.height = Laya.stage.height;
                this._data = a || {};
            }, c.prototype.addEvent = function() {}, c.prototype.removeEvent = function() {
                this._isClick = null;
                Laya.timer.clearAll(this);
            }, c.prototype.closeView = function(a) {
                if (this.owner) {
                    var c = this.owner.url;
                    a && a.notDestroy ? d["default"].instance.hideView(c) : d["default"].instance.closeView(c);
                    "Rank.scene" == c && b["default"].callAPIMethodByProxy("setAuthorizationCheck", !0);
                    this._data && this._data.callback && this._data.callback(a);
                    this._data = null;
                }
            }, c;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/ViewMgr": 30,
        "../tools/MyUtils": 44
    }],
    47: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                return a.call(this) || this;
            }
            return __extends(d, a), d.prototype.onAwake = function() {
                this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onDown);
                this.owner.on(Laya.Event.MOUSE_UP, this, this.onUp);
                this.owner.on(Laya.Event.MOUSE_OUT, this, this.onUp);
            }, d.prototype.onDisable = function() {
                this.owner.offAll();
                Laya.Tween.clearAll(this);
            }, d.prototype.onDown = function() {
                Laya.Tween.to(this.owner, {
                    scaleX: .8,
                    scaleY: .8
                }, 100);
            }, d.prototype.onUp = function() {
                Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, 100);
            }, d;
        }(Laya.Script);
        f["default"] = a;
    }, {}],
    48: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../mgrCommon/EventMgr");
        a = function(a) {
            function b() {
                return a.call(this) || this;
            }
            return __extends(b, a), b.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.addEvent();
            }, b.prototype.addEvent = function() {
                this.okBtn.on(Laya.Event.CLICK, this, this.closeView);
                a.prototype.addEvent.call(this);
            }, b.prototype.closeView = function() {
                e["default"].instance.emit("goHome");
                Laya.loader.clearRes("res/atlas/collet.atlas");
            }, b.prototype.removeEvent = function() {
                this.okBtn.off(Laya.Event.CLICK, this, this.closeView);
                a.prototype.removeEvent.call(this);
            }, b;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgrCommon/EventMgr": 22,
        "./BaseView": 46
    }],
    49: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../tools/MyUtils"),
            d = a("../mgrCommon/PlatformMgr"),
            b = a("../models/ConfigData"),
            c = a("../mgrCommon/ViewMgr"),
            n = a("../mgrCommon/EventMgr"),
            l = a("../platform/wx/WXAPI"),
            g = a("../mgrCommon/EventDefine"),
            h = a("../mgr3d/GameMgr"),
            q = a("./ConvergeAdListLoop"),
            u = a("./ConvergeUpAdListLoop");
        a = function(a) {
            function f() {
                var b = null !== a && a.apply(this, arguments) || this;
                return b.appid = "", b.state = 0, b;
            }
            return __extends(f, a), f.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                e["default"].autoScreenSize([this.homeBtn]);
                this.adList = this.owner.getChildByName("list");
                this.adList.vScrollBarSkin = "";
                this.adList.selectEnable = !0;
                this.adList.y = 20;
                this.adList.renderHandler = new Laya.Handler(this, this.onRender);
                this.adList.mouseHandler = new Laya.Handler(this, this.onClickItem);
                1334 < Laya.stage.height && (this.adList.y = 20 + (Laya.stage.height - 1334) / 2);
                d["default"].callAPIMethodByProxy("destoryAllBannerAd");
                this.okBtn.visible = !c["default"].instance.getView("GameFighting.scene");
                this.anchorS = this.owner.getChildByName("anchorS");
                this.adPlane = this.anchorS.getChildByName("ADPlane");
                this.adPlaneY = this.adPlane.y;
                this.bgMask = this.adPlane.mask;
                this.convergeAdListLoop = this.adPlane.getComponent(q["default"]);
                this.convergeUpAdListLoop = this.anchorS.getChildByName("TopADPlane").getComponent(u["default"]);
            }, f.prototype.addEvent = function() {
                a.prototype.addEvent.call(this);
                this.okBtn.on(Laya.Event.CLICK, this, this.onClickHome);
                this.homeBtn.on(Laya.Event.CLICK, this, this.okClick);
            }, f.prototype.removeEvent = function() {
                a.prototype.removeEvent.call(this);
                this.okBtn.off(Laya.Event.CLICK, this, this.onClickHome);
                this.homeBtn.off(Laya.Event.CLICK, this, this.okClick);
            }, f.prototype.openView = function(c) {
                var d = this;
                a.prototype.openView.call(this, c);
                this.homeBtn.visible = !1;
                c = [];
                null == this.adList.array && (c = b["default"].getAdData(1004), this.adList.array = c);
                this.adList.refresh();
                this.adList.scrollTo(0);
                Laya.timer.once(1e3, this, function() {
                    d && d.homeBtn && (d.homeBtn.visible = !0);
                });
                this.showADPanel();
                c = b["default"].getAdData(1022);
                var h = Laya.stage.height / 2 - Math.abs(this.adPlane.y),
                    e = Laya.stage.height - h;
                this.bgMask.height = e;
                this.adPlane.height = e;
                this.convergeAdListLoop.init({
                    viewHeight: e,
                    y: h
                });
                this.convergeAdListLoop.start(1022, c, "聚合页");
                c = 1 == b["default"].ctrlInfo.MainConvergeControl;
                this.adList.visible = 0 == c;
                this.okBtn.visible = 0 == c;
                this.anchorS.visible = c;
            }, f.prototype.showADPanel = function() {
                var a = this;
                Laya.timer.frameOnce(2, this, function() {
                    a.convergeUpAdListLoop.init({
                        _cellWidth: 108,
                        _cellHeight: 108,
                        _spaceX: 31,
                        _isLabel: !0
                    });
                    a.convergeUpAdListLoop.start(b["default"].getAdData(1021), 1021);
                });
            }, f.prototype.onClickHome = function() {
                this.closeView();
                h["default"].instance.GameExit();
                n["default"].instance.emit(g.EventDefine.BANNER_SHOW);
                n["default"].instance.emit("goHome");
            }, f.prototype.okClick = function() {
                1 == b["default"].ctrlInfo.MainConvergeControl ? this.onClickHome() : this.closeView();
            }, f.prototype.onClickItem = function(a, b) {
                if (a.type == Laya.Event.CLICK && a.target instanceof Laya.Box) {
                    var c = this.adList.array[b];
                    a = {
                        my_uuid: c.position,
                        to_appid: c.appid,
                        appid: c.appid,
                        toLinks: c.toLinks,
                        callback: function() {
                            l["default"].ald("聚合页广告位跳出成功", {
                                path: c.toLinks,
                                appId: c.appid,
                                position: c.position
                            });
                        }
                    };
                    l["default"].ald("聚合页广告位跳出", {
                        path: c.toLinks,
                        appId: c.appid,
                        position: c.position
                    });
                    d["default"].callAPIMethodByProxy("navigateToMiniProgram", a);
                }
            }, f.prototype.onRender = function(a, b) {
                b > this.adList.array.length && 0 == this.adList.array.length || null == this.adList.array[b] || (a.getChildByName("img").skin = this.adList.array[b].param);
            }, f;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/ViewMgr": 30,
        "../models/ConfigData": 31,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./BaseView": 46,
        "./ConvergeAdListLoop": 50,
        "./ConvergeUpAdListLoop": 51
    }],
    50: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../platform/wx/WXAPI");
        ! function(a) {
            a[a.UP = 0] = "UP";
            a[a.DOWN = 1] = "DOWN";
        }(e || (e = {}));
        a = function(a) {
            function g() {
                var b = a.call(this) || this;
                return b.moveSpeed = .5, b.noMove = !0, b._itemHeight = 271, b._itemWidth = 217, b._spaceX = 25, b._spaceY = 39, b._repeatX = 0, b._repeatY = 0, b.speedTime = 500, b.viewWidth = 704, b.viewHeight = 909, b.imgWidth = 209, b.imgHeight = 263, b.labWidth = 160, b.labHeight = 30, b;
            }
            return __extends(g, a), g.prototype.init = function(a) {
                this.viewHeight = a.viewHeight;
                this.thisY = a.y;
            }, g.prototype.start = function(a, b, c) {
                if (!d["default"].isNull(b)) {
                    this.owner.removeChildren();
                    this._cells = [];
                    this.adInfos = b;
                    var h = 0,
                        g = new n();
                    this.list = [];
                    var k = this;
                    b = function() {
                        var b = k.adInfos[f],
                            d = p._cells.length * (p._itemHeight + p._spaceY),
                            e = new Laya.Image();
                        e.pos(h * (p._itemWidth + p._spaceX), d);
                        p.owner.addChild(e);
                        e.width = p._itemWidth;
                        e.height = p._itemHeight;
                        var l = new Laya.Image();
                        e.addChild(l);
                        l.skin = "aggregation/ad_bg02.png";
                        l.pos(0, 0);
                        l.width = p._itemWidth;
                        l.height = p._itemHeight;
                        var r = new Laya.Image();
                        e.addChild(r);
                        r.pos(4, 4);
                        r.skin = b.param;
                        r.width = p.imgWidth;
                        r.height = p.imgHeight;
                        r.on(Laya.Event.MOUSE_DOWN, p, function() {
                            k.startTime = Laya.timer.currTimer;
                        });
                        r.name = f.toString();
                        r.on(Laya.Event.MOUSE_UP, p, function() {
                            var b = k.adInfos[Number(r.name)];
                            200 >= Laya.timer.currTimer - k.startTime && k.tiaozhuang(b, a, c);
                            k.startTime = Laya.timer.currTimer;
                        });
                        h++;
                        g._posY = d;
                        g._cells.push(e);
                        2 < h && (p._cells.push(g), h = 0, g = new n());
                        p.list.push(e);
                    };
                    for (var p = this, f = 0; f < k.adInfos.length; f++) b();
                    0 != h && this._cells.push(g);
                    this.fristPosY = 0;
                    this.endPosY = this.viewHeight - this._itemHeight;
                    this.setDirtion(e.DOWN);
                    this._mouseDown = !1;
                    this.noMove = this._cells[this._cells.length - 1].getPosY() <= this.endPosY;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
                    this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, g.prototype.autoMove = function() {
                var a = this;
                this.noMove || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    a.move();
                }));
            }, g.prototype.move = function() {
                this._mouseDown || this.upMove(-.5);
            }, g.prototype.upMove = function(a) {
                for (var b = this._itemHeight + this._spaceY, c = this._itemWidth + this._spaceX, d = 0, e = this.list.length, h = 0; e > h; h++) {
                    var g = this.list[h];
                    g.y += a;
                    g.y < this.fristPosY - b && d++;
                }
                b = a = 0;
                0 < e && (g = this.list[e - 1], a = g.y, b = 2);
                1 < e && (g = this.list[e - 2], g.y == a && (b = 1));
                2 < e && (g = this.list[e - 3], g.y == a && (b = 0));
                for (e = 0; 0 < d;) d--, (g = this.list.shift()) && (2 == b ? (b--, g.pos(c, a)) : 1 == b ? (b--, g.pos(2 * c, a)) : 0 == b && (g.pos(c * e, a + (this._itemHeight + this._spaceY)), e++), this.list.push(g));
            }, g.prototype.downMove = function(a) {
                for (var b = (this._itemHeight + this._spaceY, this._itemWidth + this._spaceX), c = 0, d = this.list.length, e = 0; d > e; e++) {
                    var h = this.list[e];
                    h.y += a;
                    h.y >= this.viewHeight && c++;
                }
                e = a = 0;
                0 < d && (h = this.list[0], a = h.y, e = 2);
                1 < d && (h = this.list[1], h.y == a && (e = 1));
                2 < d && (h = this.list[2], h.y == a && (e = 0));
                for (d = 2; 0 < c;) c--, (h = this.list.pop()) && (2 == e ? (e--, h.pos(b, a)) : 1 == e ? (e--, h.pos(0, a)) : 0 == e && (h.pos(b * d, a - (this._itemHeight + this._spaceY)), d--), this.list.unshift(h));
            }, g.prototype.setDirtion = function(a) {
                this.moveDirection = a;
                this.moveDirection == e.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, g.prototype.tiaozhuang = function(a, d, e) {
                var h = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks
                };
                h = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks,
                    callback: function() {
                        c["default"].ald(e + "广告位跳出成功", {
                            path: a.toLinks,
                            appId: a.appid,
                            position: a.position
                        });
                    }
                };
                c["default"].ald(e + "广告位跳出", {
                    path: a.toLinks,
                    appId: a.appid,
                    position: a.position
                });
                b["default"].callAPIMethodByProxy("navigateToMiniProgram", h);
            }, g.prototype.mouseDown = function() {
                Laya.timer.clearAll(this);
                this._mouseDown = !0;
                this._mouseY = Laya.MouseManager.instance.mouseX;
            }, g.prototype.mouseMove = function() {
                if (!this.noMove && this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseY - this._mouseY;
                    a = 30 < a ? 30 : -30 > a ? -30 : a;
                    this._mouseY = Laya.MouseManager.instance.mouseY;
                    0 > a ? this.upMove(a) : 0 < a && this.downMove(a);
                }
            }, g.prototype.mouseOut = function(a) {
                Laya.MouseManager.instance.mouseY > this.thisY || this.mouseUp();
            }, g.prototype.mouseUp = function() {
                this._mouseDown = !1;
                this._mouseY = 0;
                this.autoMove();
            }, g;
        }(Laya.Script);
        f["default"] = a;
        var n = function() {
            function a() {
                this._cells = [];
                this._posY = 0;
            }
            return a.prototype.setPosY = function(a) {
                for (var b = 0; b < this._cells.length; b++) {
                    var c = this._cells[b];
                    c.pos(c.x, a);
                }
                this._posY = a;
            }, a.prototype.getPosY = function() {
                return this._posY;
            }, a;
        }();
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    51: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../platform/wx/WXAPI");
        ! function(a) {
            a[a.LEFT = 0] = "LEFT";
            a[a.RIGHT = 1] = "RIGHT";
        }(e || (e = {}));
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b._cellWidth = 101, b._cellHeight = 128, b._spaceX = 20, b.speedTime = 500, b.itemWidth = 101, b;
            }
            return __extends(f, a), f.prototype.init = function(a) {
                this._cellWidth = a._cellWidth || 108;
                this._spaceX = a._spaceX || 31;
                this.speedTime = a.speedTime || 500;
                this._cellHeight = a._cellHeight || 108;
            }, f.prototype.start = function(a, b, c) {
                if (!d["default"].isNull(a)) {
                    var h = this;
                    this.owner.removeChildren();
                    this._cells = [];
                    var g = 4 < a.length ? !0 : !1;
                    this.posY = 0;
                    for (var f, k = function() {
                            f = a[l];
                            var d = new Laya.Image(),
                                e = new Laya.Image();
                            p.owner.addChild(d);
                            var k = new Laya.Text();
                            d.addChild(k);
                            d.addChild(e);
                            g ? d.pos((l - 1) * (p._cellWidth + p._spaceX), p.posY) : d.pos(l * (p._cellWidth + p._spaceX), p.posY);
                            e.skin = f.param;
                            e.width = p._cellWidth;
                            e.height = p._cellHeight;
                            d.width = p._cellWidth;
                            d.height = 140;
                            k.text = f.name;
                            k.y = 118;
                            k.text = f.name;
                            k.width = p._cellWidth;
                            k.height = 24;
                            k.fontSize = 24;
                            k.color = "#4A4A4A";
                            k.align = "center";
                            k.valign = "middle";
                            k.zOrder = 10;
                            var r = l;
                            d.on(Laya.Event.MOUSE_DOWN, p, function() {
                                h.startTime = Laya.timer.currTimer;
                            });
                            d.on(Laya.Event.MOUSE_UP, p, function() {
                                200 >= Laya.timer.currTimer - h.startTime && h.tiaozhuang(a[r], b, c);
                                h.startTime = Laya.timer.currTimer;
                            });
                            p._cells.push(d);
                        }, p = this, l = 0; l < a.length; l++) k();
                    this.fristPosX = this._cells[0].x;
                    this.endPosX = this._cells[this._cells.length - 1].x;
                    this.moveDirection = e.RIGHT;
                    this._mouseDown = !1;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                }
            }, f.prototype.tiaozhuang = function(a, d, e) {
                d = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks,
                    callback: function() {
                        c["default"].ald(e + "广告位跳出成功", {
                            path: a.toLinks,
                            appId: a.appid,
                            position: a.position
                        });
                    }
                };
                c["default"].ald(e + "广告位跳出", {
                    path: a.toLinks,
                    appId: a.appid,
                    position: a.position
                });
                b["default"].callAPIMethodByProxy("navigateToMiniProgram", d);
            }, f.prototype.autoMove = function() {
                4 >= this._cells.length || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    this.move();
                }));
            }, f.prototype.move = function() {
                for (var a = (Math.abs(this.speedTime / (this._cellWidth + this._spaceX) * -(this._cells[0].x - this.fristPosX)), 0); a < this._cells.length; a++) {
                    var b = this._cells[a];
                    b.pos(b.x - .5, this.posY);
                }
                this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist();
                this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
            }, f.prototype.firstMoveToEnd = function() {
                var a = this._cells[this._cells.length - 1],
                    b = this._cells.shift();
                b.pos(a.x + this._cellWidth + this._spaceX, this.posY);
                this._cells.push(b);
            }, f.prototype.endMoveToFrist = function() {
                var a = this._cells[0],
                    b = this._cells.pop();
                b.pos(a.x - this._cellWidth - this._spaceX, a.y);
                this._cells.unshift(b);
            }, f.prototype.mouseDown = function() {
                this._mouseDown = !0;
                Laya.timer.clearAll(this);
                this._mouseX = Laya.MouseManager.instance.mouseX;
                Laya.timer.clearAll(this);
                for (var a = 0; a < this._cells.length; a++) Laya.Tween.clearAll(this._cells[a]);
            }, f.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseX - this._mouseX;
                    this._mouseX = Laya.MouseManager.instance.mouseX;
                    for (var b = 0; b < this._cells.length; b++) {
                        var c = this._cells[b];
                        c.pos(c.x + a, this.posY);
                    }
                    this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist();
                    this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
                }
            }, f.prototype.mouseUp = function(a) {
                this._mouseDown = !1;
                this.autoMove();
            }, f;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    52: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgrCommon/PlatformMgr");
        m = a("./BaseView");
        var d = a("../models/ConfigData"),
            b = a("../mgrCommon/EventMgr"),
            c = a("../tools/MathUtil"),
            n = a("../mgrCommon/EventDefine"),
            l = a("../models/UserData"),
            g = a("../tools/MyUtils"),
            h = a("../mgr3d/GameMgr"),
            q = a("../mgrCommon/EnumMana"),
            u = a("./AdListLoop"),
            v = a("./RewardView");
        a = function(a) {
            function k() {
                var b = null !== a && a.apply(this, arguments) || this;
                return b.isShowBulletTime = !1, b;
            }
            return __extends(k, a), k.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.dragBeginnerGuide = this.owner.getChildByName("dragBeginnerGuide");
                this.touchBeginnerGuide = this.owner.getChildByName("touchBeginnerGuide");
                this.beginnerGuideImage = this.touchBeginnerGuide.getChildByName("BeginnerGuide");
                this.finger = this.dragBeginnerGuide.getChildByName("finger");
                this.guideTop = this.dragBeginnerGuide.getChildByName("guideTop");
                this.guideTop.centerY -= this.offset.y / 2.5;
                this.perfectImage = this.owner.getChildByName("perfectInfo");
                this.perfectLightImage = this.owner.getChildByName("perfectLight");
                this.messageImage = this.owner.getChildByName("MessageInfo");
                this.perfectImage.y += this.offset.y / 4;
                this.messageImage.y += this.offset.y / 4;
                this.progressNode = this.owner.getChildByName("progress");
                this.progress = this.progressNode.getChildByName("progress");
                this.progressBar = this.progressNode.getChildByName("progressBar");
                this.progressNode.y += this.offset.y / 4;
                this.curGameGold = this.progressNode.getChildByName("curGameGold");
                this.curCountCoinNum = this.curGameGold.getChildByName("countMoneClip");
                this.curCoinNum = this.curGameGold.getChildByName("curMoneyClip");
                this.changeSceneInfo = this.owner.getChildByName("changeSceneInfo");
                this.nextLevelFc = this.changeSceneInfo.getChildByName("nextLevelFc");
                this.nextLevelLab = this.progressNode.getChildByName("nextLevelLab");
                this.currLevelLab = this.progressNode.getChildByName("currLevelLab");
                this.surpassOtherText = this.owner.getChildByName("surpassOtherText");
                this.nextLevelImg = this.progressNode.getChildByName("nextLevelImg");
                this.nextLevelLabWhite = this.progressNode.getChildByName("nextLevelLabWhite");
                this.surpassOtherText.visible = !1;
                this.progressNode.visible = !1;
                this.dragBeginnerGuide.visible = !1;
                this.touchBeginnerGuide.visible = !1;
                var b = this.owner.getChildByName("goldBgImg");
                g["default"].autoScreenSize([b]);
                this.coinNum = b.getChildByName("myMoneyClip");
                this.myMoneyUnitClip = b.getChildByName("myMoneyUnitClip");
                l["default"].curLevelGold = 0;
                this.InitMoney();
            }, k.prototype.InitMoney = function() {
                var a = g["default"].scoreConversion(l["default"].curLevelGold);
                this.coinNum.value = a.value;
                this.myMoneyUnitClip.visible = null != a.isK;
                var b = ["T", "B", "M", "K"],
                    c = 21 * a.value.length;
                a.isK && (this.myMoneyUnitClip.value = b[a.isK], a = c, c += 37, this.myMoneyUnitClip.x = 118 - c / 2 + a + 2);
                this.coinNum.x = 118 - c / 2;
            }, k.prototype.updataCountMoney = function(a) {
                this.curCountCoinNum.value = a + "";
            }, k.prototype.updataMoney = function() {
                this.curCoinNum.value = l["default"].curLevelGold + "";
                this.InitMoney();
            }, k.prototype.FigerAnim = function() {
                this.finger.x = 90 + 500 * Math.abs((Laya.timer.currTimer - this.fingerStartTime + 500) % 2e3 - 1e3) / 1e3;
            }, k.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                d["default"].beginnerGuide == d.OPERATINGTYPE.TOUCH ? this.touchBeginnerGuide.visible = !0 : (this.dragBeginnerGuide.visible = !0, this.fingerStartTime = Laya.timer.currTimer, Laya.timer.frameLoop(1, this, this.FigerAnim));
                this.guideTop.visible = !b;
                b && h["default"].instance.GameRevive();
                0 == l["default"].level % 4 ? (this.curGameGold.visible = !0, this.updataCountMoney(h["default"].instance.curGoldCount), this.curCoinNum.value = "0") : this.curGameGold.visible = !1;
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseTouchFun, [b]);
            }, k.prototype.showADPanel = function() {}, k.prototype.hideADPanel = function() {}, k.prototype.mouseTouchFun = function(a) {
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseTouchFun);
                a ? Laya.timer.once(300, this, function() {
                    h["default"].instance.GameStart();
                }) : (this.openProvocationOther(d.SORTTYPE.LEVEL), this.updataProgress(0), Laya.timer.once(300, this, function() {
                    h["default"].instance.GameStart();
                }));
                this.updateLevel(l["default"].level);
                this.touchBeginnerGuide.visible = !1;
                this.dragBeginnerGuide.visible = !1;
                this.progressNode.visible = !0;
            }, k.prototype.showBulletGuide = function() {
                h["default"].instance.gameStatus = q.EnumMana.LevelState.pause;
                this.beginnerGuideImage.skin = "mainview/help2@2x.png";
                this.touchBeginnerGuide.visible = !0;
                this.progressNode.visible = !1;
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.closeBulletGuide);
                b["default"].instance.emit(n.EventDefine.HIDE_MESSAGE_INFO, q.EnumMana.MessageType.other);
            }, k.prototype.closeBulletGuide = function() {
                this.touchBeginnerGuide.visible = !1;
                this.progressNode.visible = !0;
                h["default"].instance.gameStatus = q.EnumMana.LevelState.playing;
                this.beginnerGuideImage.skin = "mainview/img_guideInfo.png.png";
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.closeBulletGuide);
                b["default"].instance.emit(n.EventDefine.SHOW_MESSAGE_INFO, q.EnumMana.MessageType.attackTime);
            }, k.prototype.openResurgence = function() {
                b["default"].instance.emit("openResurgence");
            }, k.prototype.openGameOverLevel = function(a) {
                a = {
                    type: v.RewardViewType.Settle,
                    passNum: l["default"].level,
                    isGoldeggs: !1,
                    isPass: a,
                    gold: h["default"].instance.GameOverScore(a),
                    _type: d.SORTTYPE.LEVEL
                };
                b["default"].instance.emit("openRewardView", a);
            }, k.prototype.openLottery = function(a) {
                a = {
                    type: v.RewardViewType.Settle,
                    passNum: l["default"].level,
                    isGoldeggs: !1,
                    isPass: a,
                    gold: h["default"].instance.GameOverScore(a),
                    _type: d.SORTTYPE.LEVEL
                };
                b["default"].instance.emit("openGift", a);
            }, k.prototype.addEvent = function() {
                a.prototype.addEvent.call(this);
                b["default"].instance.onEvent(n.EventDefine.PLAYER_DIE, this, this.PlayerDie);
                b["default"].instance.onEvent(n.EventDefine.PLAYING_PASS_LEVEL, this, this.PassLevel);
                b["default"].instance.onEvent(n.EventDefine.SHOW_BULLET_HELP, this, this.showBulletGuide);
                b["default"].instance.onEvent(n.EventDefine.UPDATE_MONEY, this, this.updataMoney);
                b["default"].instance.onEvent(n.EventDefine.UPDATE_COUNT_MONEY, this, this.updataCountMoney);
                b["default"].instance.onEvent(n.EventDefine.PLAYING_UPDATE_PROGRESS, this, this.updataProgress);
                b["default"].instance.onEvent(n.EventDefine.SHOW_PERFECT_INFO, this, this.showPerfectInfo);
                b["default"].instance.onEvent(n.EventDefine.SHOW_MESSAGE_INFO, this, this.showMessageInfo);
                b["default"].instance.onEvent(n.EventDefine.HIDE_MESSAGE_INFO, this, this.hideMessageInfo);
            }, k.prototype.removeEvent = function() {
                a.prototype.removeEvent.call(this);
                b["default"].instance.onOffEvent(n.EventDefine.PLAYER_DIE, this, this.PlayerDie);
                b["default"].instance.onOffEvent(n.EventDefine.PLAYING_PASS_LEVEL, this, this.PassLevel);
                b["default"].instance.onOffEvent(n.EventDefine.SHOW_BULLET_HELP, this, this.showBulletGuide);
                b["default"].instance.onOffEvent(n.EventDefine.UPDATE_MONEY, this, this.updataMoney);
                b["default"].instance.onOffEvent(n.EventDefine.UPDATE_COUNT_MONEY, this, this.updataCountMoney);
                b["default"].instance.onOffEvent(n.EventDefine.PLAYING_UPDATE_PROGRESS, this, this.updataProgress);
                b["default"].instance.onOffEvent(n.EventDefine.SHOW_PERFECT_INFO, this, this.showPerfectInfo);
                b["default"].instance.onOffEvent(n.EventDefine.SHOW_MESSAGE_INFO, this, this.showMessageInfo);
                b["default"].instance.onOffEvent(n.EventDefine.HIDE_MESSAGE_INFO, this, this.hideMessageInfo);
            }, k.prototype.showPerfectInfo = function(a) {
                var b = this;
                switch (a) {
                    case 1:
                        this.perfect1.skin = "game/wanmei-1@2x.png";
                        this.perfect2.skin = "game/wanmei-2@2x.png";
                        this.perfect3.skin = "game/wanmei-2@2x.png";
                        Laya.Tween.to(this.perfectImage, {
                            x: 111
                        }, 1e3, Laya.Ease.elasticOut, Laya.Handler.create(this, function() {
                            b.perfectImage.x = -300;
                        }));
                        Laya.Tween.to(this.perfectLightImage, {
                            alpha: .3
                        }, 200, null, Laya.Handler.create(this, function() {
                            Laya.Tween.to(b.perfectLightImage, {
                                alpha: 0
                            }, 200);
                        }));
                        break;
                    case 2:
                        this.perfect1.skin = "game/wanmei-1@2x.png";
                        this.perfect2.skin = "game/wanmei-1@2x.png";
                        this.perfect3.skin = "game/wanmei-2@2x.png";
                        Laya.Tween.to(this.perfectImage, {
                            x: 111
                        }, 1e3, Laya.Ease.elasticOut, Laya.Handler.create(this, function() {
                            b.perfectImage.x = -300;
                        }));
                        Laya.Tween.to(this.perfectLightImage, {
                            alpha: .3
                        }, 200, null, Laya.Handler.create(this, function() {
                            Laya.Tween.to(b.perfectLightImage, {
                                alpha: 0
                            }, 200);
                        }));
                        break;
                    case 3:
                        this.perfect1.skin = "game/wanmei-1@2x.png";
                        this.perfect2.skin = "game/wanmei-1@2x.png";
                        this.perfect3.skin = "game/wanmei-1@2x.png";
                        Laya.Tween.to(this.perfectImage, {
                            x: 111
                        }, 1e3, Laya.Ease.elasticOut, Laya.Handler.create(this, function() {
                            b.perfectImage.x = -300;
                        }));
                        Laya.Tween.to(this.perfectLightImage, {
                            alpha: .3
                        }, 200, null, Laya.Handler.create(this, function() {
                            Laya.Tween.to(b.perfectLightImage, {
                                alpha: 0
                            }, 200);
                        }));
                        break;
                    default:
                        this.perfect1.skin = "game/wanmei-2@2x.png", this.perfect2.skin = "game/wanmei-2@2x.png", this.perfect3.skin = "game/wanmei-2@2x.png";
                }
            }, k.prototype.showMessageInfo = function(a) {
                switch (a) {
                    case q.EnumMana.MessageType.attackTime:
                        this.messageImage.skin = "game/gonji@2x.png";
                        Laya.Tween.to(this.messageImage, {
                            centerX: 0
                        }, 1e3, Laya.Ease.elasticOut, null);
                        this.isShowBulletTime = !0;
                        break;
                    case q.EnumMana.MessageType.dangerous:
                        this.isShowBulletTime || (this.messageImage.skin = "game/weix@2x.png", Laya.Tween.to(this.messageImage, {
                            centerX: 0
                        }, 1e3, Laya.Ease.elasticOut, null));
                }
            }, k.prototype.hideMessageInfo = function(a) {
                switch (a) {
                    case q.EnumMana.MessageType.attackTime:
                        this.isShowBulletTime = !1;
                        Laya.Tween.to(this.messageImage, {
                            centerX: -800
                        }, 1e3, Laya.Ease.elasticOut, null);
                        break;
                    case q.EnumMana.MessageType.dangerous:
                        this.isShowBulletTime || Laya.Tween.to(this.messageImage, {
                            centerX: -800
                        }, 1e3, Laya.Ease.elasticOut, null);
                        break;
                    default:
                        this.isShowBulletTime = !1, Laya.Tween.to(this.messageImage, {
                            centerX: -800
                        }, 1e3, Laya.Ease.elasticOut, null);
                }
            }, k.prototype.PlayerDie = function() {
                this.openResurgence();
                3 > h["default"].instance.reviveCount && (d["default"].ctrlInfo.isVideo || d["default"].ctrlInfo.isShare) ? this.openResurgence() : this.openGameOverLevel(!1);
            }, k.prototype.PassLevel = function() {
                return 6 <= l["default"].level - 1 && 0 == (l["default"].level - 1 - 6) % 8 ? void this.openLottery(!0) : void this.openGameOverLevel(!0);
            }, k.prototype.addScore = function() {}, k.prototype.updataScore = function() {}, k.prototype.updataProgress = function(a) {
                1 < a && (a = 1, this.nextLevelLabWhite.visible = !0, this.nextLevelImg.visible = !0, this.nextLevelLab.visible = !1);
                this.progress.width = 355 * c["default"].Clamp01(a);
                this.progressBar.x = 70 + 330 * c["default"].Clamp01(a);
            }, k.prototype.updateLevel = function(a) {
                this.currLevelLab.value = a.toString();
                this.nextLevelLab.value = (a + 1).toString();
                this.nextLevelLabWhite.value = (a + 1).toString();
                this.nextLevelLabWhite.visible = !1;
                this.nextLevelImg.visible = !1;
                this.nextLevelLab.visible = !0;
            }, k.prototype.openProvocationOther = function(a) {
                var b = this;
                this.closeSurpassOther();
                this.provocationOther || (this.provocationOther = new Laya.WXOpenDataViewer(), this.owner.addChild(this.provocationOther), this.provocationOther.width = 750, this.provocationOther.height = 62, this.provocationOther.pos(0, 285 + this.offset.y / 3));
                e["default"].callSubDomainMethodByProxy("setOpenView", this.provocationOther);
                e["default"].callSubDomainMethodByProxy("openProvocationOther", {
                    _type: a
                });
                this.messageImage.visible = !1;
                Laya.timer.once(3e3, this, function() {
                    b.messageImage.visible = !0;
                    e["default"].callSubDomainMethodByProxy("closeProvocationOther");
                });
            }, k.prototype.closeProvocationOther = function() {
                this.provocationOther && (this.provocationOther.destroy(), this.provocationOther = null);
                e["default"].callSubDomainMethodByProxy("closeProvocationOther");
            }, k.prototype.openSurpassOther = function(a) {
                a = d.SORTTYPE.ENDLESS;
                this.closeProvocationOther();
                this.surpassOther || (this.surpassOther = new Laya.WXOpenDataViewer(), this.owner.addChild(this.surpassOther), this.surpassOther.width = 60, this.surpassOther.height = 60, this.surpassOther.pos(570, 304));
                this.surpassOtherText.visible = !0;
                e["default"].callSubDomainMethodByProxy("setOpenView", this.surpassOther);
                e["default"].callSubDomainMethodByProxy("openSurpassOther", {
                    _type: a,
                    val: -1
                });
            }, k.prototype.closeSurpassOther = function() {
                this.surpassOtherText.visible = !1;
                this.surpassOther && (this.surpassOther.destroy(), this.surpassOther = null);
                e["default"].callSubDomainMethodByProxy("closeSurpassOther");
            }, k.prototype.onDisable = function() {
                this.closeProvocationOther();
                this.closeSurpassOther();
                a.prototype.onDisable.call(this);
            }, k;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/PlatformMgr": 25,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../tools/MathUtil": 42,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46,
        "./RewardView": 61
    }],
    53: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../mgrCommon/EventMgr"),
            d = a("../mgrCommon/PlatformMgr"),
            b = a("../models/ConfigData"),
            c = a("../tools/MyUtils"),
            n = a("../models/UserData"),
            l = a("./AdListLoop"),
            g = a("../mgrCommon/HttpMgr"),
            h = a("../mgrCommon/ViewMgr"),
            q = a("../platform/wx/WXAPI"),
            u = a("./OverAdListLoop"),
            v = a("../mgrCommon/EventDefine"),
            r = a("../mgr3d/GameMgr"),
            k = a("../mgrCommon/StatisticsMgr");
        a = function(a) {
            function p() {
                var b = a.call(this) || this;
                return b.imgHintY = 0, b.isVedio = !1, b;
            }
            return __extends(p, a), p.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                var c = this.owner.getChildByName("content"),
                    d = c.getChildByName("btnAnchor");
                this.btnAnchor = d;
                this.btnNext = d.getChildByName("btnNext");
                this.btnHome = d.getChildByName("btnHome");
                this.btnAgain = d.getChildByName("btnAgain");
                this.levePanel = c.getChildByName("levelPanel");
                this.passNum = this.levePanel.getChildByName("passNum");
                this.imgFail = this.levePanel.getChildByName("imgFail");
                this.imgPass = this.levePanel.getChildByName("imgPass");
                this.imgFail.visible = !1;
                this.imgPass.visible = !1;
                this.gameList = c.getChildByName("gameList");
                this.gameList.renderHandler = new Laya.Handler(this, this.showADPanel);
                this.gameList.array = platform.getInstance().getForgames()
            }, p.prototype.showADPanel = function(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE");
                });
            }, p.prototype.goFighting = function() {}, p.prototype.goHome1 = function() {
                r["default"].instance.GameExit();
                e["default"].instance.emit("goHome");
            }, p.prototype.goHome = function() {
                r["default"].instance.GameExit();
                1 == b["default"].ctrlInfo.backHomeControl ? h["default"].instance.openView({
                    viewName: "ConvergeAd.scene",
                    closeAll: !1
                }) : e["default"].instance.emit("goHome");
            }, p.prototype.goShare = function() {}, p.prototype.addEvent = function() {
                this.btnNext.on(Laya.Event.CLICK, this, this.nextLevelFunc);
                this.btnHome.on(Laya.Event.CLICK, this, this.goHome);
                this.btnAgain.on(Laya.Event.CLICK, this, this.goHome);
                e["default"].instance.onEvent(v.EventDefine.BANNER_SHOW, this, this.ShowBanner);
                a.prototype.addEvent.call(this);
            }, p.prototype.removeEvent = function() {
                this.btnNext.off(Laya.Event.CLICK, this, this.nextLevelFunc);
                this.btnHome.off(Laya.Event.CLICK, this, this.goHome);
                this.btnAgain.off(Laya.Event.CLICK, this, this.goHome);
                a.prototype.removeEvent.call(this);
            }, p.prototype.oneSettleFunc = function() {
                g["default"].instance.Settlement(this.curdata.isPass, this.curdata.gold);
            }, p.prototype.threeSettleFunc = function() {
                var a = this;
                this.isVedio || (d["default"].ptAPI ? (this.isVedio = !0, d["default"].callAPIMethodByProxy("showVideo", {
                    _type: k.SHARE_VIDEO_TYPE.SETTLE,
                    caller: this,
                    callBackSuc: function() {
                        g["default"].instance.Settlement(a.curdata.isPass, 3 * a.curdata.gold);
                        q["default"].ald("获得结算多倍钻石成功--视频");
                        a.isVedio = !1;
                        a.goHome();
                    },
                    callBackFail: function() {
                        e["default"].instance.emit("openTip", "看完视频才能领取奖励");
                        a.isVedio = !1;
                    },
                    callBackErro: function() {
                        a.isVedio = !1;
                        e["default"].instance.emit("openTip", "今日视频次数已用完");
                    }
                })) : (g["default"].instance.Settlement(this.curdata.isPass, 3 * this.curdata.gold), this.goHome()));
            }, p.prototype.nextLevelFunc = function() {
                platform.getInstance().showInterstitial(() => {
                    r["default"].instance.GameRestart();
                    e["default"].instance.emit("openSkinTrial");
                })
            }, p.prototype.onEnable = function() {
                a.prototype.onEnable.call(this);
            }, p.prototype.tweenAniDown = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, b, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniUp(a, b, c, d);
                }));
            }, p.prototype.tweenAniUp = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, c, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniDown(a, b, c, d);
                }));
            }, p.prototype.onDisable = function() {
                a.prototype.onDisable.call(this);
            }, p.prototype.openView = function(e) {
                var h = this,
                    g = e.isPass;
                g ? (this.btnNext.visible = !0, this.btnAgain.visible = !1) : (this.btnNext.visible = !1, this.btnAgain.visible = !0);
                this.curdata = e;
                a.prototype.openView.call(this, g);
                this.oneSettleFunc();
                this.levePanel.visible = !0;
                this.imgFail.visible = !g;
                e = (this.imgPass.visible = g) ? n["default"].level - 1 : n["default"].level;
                this.passNum.value = e.toString();
                (this.ShowBanner(), b["default"].ctrlInfo.isWudian && 1 == b["default"].wudian_level[3]) ? (this.btnAnchor.visible = !1, Laya.timer.once(b["default"].ctrlInfo.btuAppear[3] + 300, this, function() {
                    h.btnAnchor.visible = !0;
                }), e = c["default"].random(560, 590), this.btnAnchor.y = e, Laya.timer.once(b["default"].ctrlInfo.btuMove[3], this, function() {
                    Laya.Tween.to(h.btnAnchor, {
                        y: 346
                    }, 300, Laya.Ease.backOut);
                })) : (this.btnAnchor.y = 346, this.btnAnchor.visible = !0, d["default"].callAPIMethodByProxy("showInterstitialAD"));
            }, p.prototype.onRender = function(a, b) {
                a.getChildAt(0).skin = this.adData[b].param;
            }, p.prototype.onClickItem = function(a, b) {
                if (a.type == Laya.Event.CLICK && a.target instanceof Laya.Box) {
                    a = a.target;
                    var c = this.adData[b],
                        e = {
                            my_uuid: c.position,
                            to_appid: c.appid,
                            appid: c.appid,
                            toLinks: c.toLinks,
                            notShowAd: !0
                        };
                    if (e.callback = function() {
                            q["default"].ald("结算页广告位跳出成功", {
                                path: c.toLinks,
                                appId: c.appid,
                                position: c.position
                            });
                        }, q["default"].ald("结算页广告位跳出", {
                            path: c.toLinks,
                            appId: c.appid,
                            position: c.position
                        }), d["default"].callAPIMethodByProxy("navigateToMiniProgram", e), 0 < this.adDataRandom.length) a = a.getChildAt(0), this.adDataRandom.push(c), this.adData[b] = this.adDataRandom.shift(), a.skin = this.adData[b].param;
                }
            }, p.prototype.hideADPanel = function() {}, p.prototype.ShowBanner = function() {}, p;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/StatisticsMgr": 27,
        "../mgrCommon/ViewMgr": 30,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46,
        "./OverAdListLoop": 58
    }],
    54: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../platform/wx/WXAPI");
        ! function(a) {
            a[a.LEFT = 0] = "LEFT";
            a[a.RIGHT = 1] = "RIGHT";
        }(e || (e = {}));
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b._cellWidth = 150, b._cellHeight = 200, b._spaceX = 25, b.speedTime = 500, b.itemWidth = 150, b.imgWidth = 150, b.imgHeight = 150, b.labWidth = 150, b.labHeight = 30, b.viewWidth = Laya.stage.width, b;
            }
            return __extends(f, a), f.prototype.init = function(a) {
                this._cellWidth = a._cellWidth || 150;
                this._spaceX = a._spaceX || 25;
                this.speedTime = a.speedTime || 500;
                this._cellHeight = a._cellHeight || 200;
                this.viewWidth = a.viewWidth || Laya.stage.width;
            }, f.prototype.start = function(a, b, c) {
                if (!d["default"].isNull(b)) {
                    var h = this;
                    this.owner.removeChildren();
                    this._cells = [];
                    for (var g, f = (4 < b.length ? !0 : !1, function() {
                            g = b[p];
                            var d = new Laya.Image();
                            d.pos(Math.floor(p / 2) * (k._cellWidth + k._spaceX), Math.floor(p % 2) * k._cellHeight);
                            k.owner.addChild(d);
                            var e = new Laya.Image();
                            d.addChild(e);
                            e.pos(0, 0);
                            e.skin = g.param;
                            e.width = k.imgWidth;
                            e.height = k.imgHeight;
                            var f = p;
                            e.on(Laya.Event.MOUSE_DOWN, k, function() {
                                h.startTime = Laya.timer.currTimer;
                            });
                            e.on(Laya.Event.MOUSE_UP, k, function() {
                                200 >= Laya.timer.currTimer - h.startTime && h.tiaozhuang(b[f], a, c);
                                h.startTime = Laya.timer.currTimer;
                            });
                            e = new Laya.Label();
                            d.addChild(e);
                            e.pos(0, k.imgHeight + (k._cellHeight - k.imgHeight - k.labHeight) / 2);
                            e.text = g.name;
                            e.width = k.labWidth;
                            e.height = k.labHeight;
                            e.fontSize = 28;
                            e.color = "#FFFFFF";
                            e.align = "center";
                            e.valign = "middle";
                            k._cells.push(d);
                        }), k = this, p = 0; p < b.length; p++) f();
                    this.fristPosX = this._cells[0].x;
                    this.endPosX = this._cells[this._cells.length - 1].x;
                    this.moveDirection = e.RIGHT;
                    this._mouseDown = !1;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                }
            }, f.prototype.tiaozhuang = function(a, d, e) {
                d = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks
                };
                c["default"].ald(e + "广告位跳出", {
                    path: a.toLinks,
                    appId: a.appid,
                    position: a.position
                });
                d.callback = function() {
                    c["default"].ald(e + "广告位跳出成功", {
                        path: a.toLinks,
                        appId: a.appid,
                        position: a.position
                    });
                };
                b["default"].callAPIMethodByProxy("navigateToMiniProgram", d);
            }, f.prototype.autoMove = function() {
                4 >= this._cells.length || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    this.move();
                }));
            }, f.prototype.move = function() {
                this._mouseDown || this.leftMove(-.5);
            }, f.prototype.leftMove = function(a) {
                for (var b = this._cellHeight, c = this._cellWidth + this._spaceX, d = 0, e = this._cells.length, g = 0; e > g; g++) {
                    var k = this._cells[g];
                    k.x += a;
                    k.x < this.fristPosX - c && d++;
                }
                g = a = 0;
                0 < e && (k = this._cells[e - 1], a = k.x, g = 1);
                1 < e && (k = this._cells[e - 2], k.x == a && (g = 0));
                for (e = 0; 0 < d;) d--, (k = this._cells.shift()) && (1 == g ? (g--, k.pos(a, b)) : 0 == g && (k.pos(a + c, b * e), e++), this._cells.push(k));
            }, f.prototype.rightMove = function(a) {
                for (var b = this._cellHeight, c = this._cellWidth + this._spaceX, d = 0, e = this._cells.length, g = 0; e > g; g++) {
                    var k = this._cells[g];
                    k.x += a;
                    k.x >= this.viewWidth && d++;
                }
                g = a = 0;
                0 < e && (k = this._cells[0], a = k.x, g = 1);
                1 < e && (k = this._cells[1], k.x == a && (g = 0));
                for (e = 1; 0 < d;) d--, (k = this._cells.pop()) && (1 == g ? (g--, k.pos(a, 0)) : 0 == g && (k.pos(a - c, b * e), e--), this._cells.unshift(k));
            }, f.prototype.mouseDown = function() {
                this._mouseDown = !0;
                Laya.timer.clearAll(this);
                this._mouseX = Laya.MouseManager.instance.mouseX;
                Laya.timer.clearAll(this);
                for (var a = 0; a < this._cells.length; a++) Laya.Tween.clearAll(this._cells[a]);
            }, f.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseX - this._mouseX;
                    this._mouseX = Laya.MouseManager.instance.mouseX;
                    0 > a ? this.leftMove(a) : 0 < a && this.rightMove(a);
                }
            }, f.prototype.mouseUp = function(a) {
                this._mouseDown = !1;
                this.autoMove();
            }, f;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    55: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("./cionAni"),
            d = a("../tools/MyUtils"),
            b = a("../models/UserData"),
            c = a("../mgrCommon/PlatformMgr"),
            n = a("../mgrCommon/StatisticsMgr"),
            l = a("../mgrCommon/EventMgr"),
            g = a("../mgrCommon/HttpMgr"),
            h = a("./AdListLoop"),
            q = a("../models/ConfigData"),
            u = a("../tools/MathTool"),
            v = a("../mgrCommon/EventDefine"),
            r = a("../mgrCommon/VibrateMgr");
        a = function(a) {
            function k() {
                var b = a.call(this) || this;
                return b.gitGoldNum = 0, b.gitSkinId = 1, b.lotteryData = [], b.probabilityRanges = [], b.type = 0, b.isVedio = !1, b.DIX = 0, b.DIXMAX = 6, b;
            }
            return __extends(k, a), k.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.node = this.owner.getChildByName("Node");
                this.OpenGiftBtn = this.node.getChildByName("OpenGiftBtn");
                var b = this.node.getChildByName("Bg");
                this.gifBg = b.getChildByName("getGif");
                this.gifopened = b.getChildByName("gifOpened");
                this.lightImg = b.getChildByName("lightImg");
                this.gifBg.visible = !0;
                this.gifopened.visible = !1;
                this.btnJump = this.owner.getChildByName("btnJump");
                this.goldBgImg = this.owner.getChildByName("goldBgImg");
                d["default"].autoScreenSize([this.goldBgImg]);
                this.coinNum = this.goldBgImg.getChildByName("myMoneyClip");
                this.myMoneyUnitClip = this.goldBgImg.getChildByName("myMoneyUnitClip");
                this.InitMoney();
                this.initLotteryData();
                Laya.timer.loop(60, this, this.onRotationLightImg);
            }, k.prototype.onRotationLightImg = function() {
                this.lightImg.rotation += 1;
                360 < this.lightImg.rotation && (this.lightImg.rotation -= 360);
            }, k.prototype.InitMoney = function() {
                var a = d["default"].scoreConversion(b["default"].gold);
                this.coinNum.value = a.value;
                this.myMoneyUnitClip.visible = null != a.isK;
                var c = ["T", "B", "M", "K"],
                    e = 21 * a.value.length;
                a.isK && (this.myMoneyUnitClip.value = c[a.isK], a = e, e += 37, this.myMoneyUnitClip.x = 118 - e / 2 + a + 2);
                this.coinNum.x = 118 - e / 2;
            }, k.prototype.initLotteryData = function() {
                this.lotteryData = q["default"].getGameConfigData("Reward");
                this.probabilityRanges = [];
                for (var a = 0, b = 0; b < this.lotteryData.length; b++) {
                    var c = parseInt(this.lotteryData[b].Probability);
                    this.probabilityRanges.push(c + a);
                    a += c;
                }
                a = u.MathTool.Range(0, a);
                for (b = 0; b < this.probabilityRanges.length; b++)
                    if (this.probabilityRanges[b] >= a) {
                        a = this.lotteryData[b].SkinID;
                        0 != a ? (this.type = 1, this.gitSkinId = a) : (this.type = 2, this.gitGoldNum = this.lotteryData[b].Diamond);
                        break;
                    }
                console.log("initLotteryData finished");
            }, k.prototype.addEvent = function() {
                this.btnJump.on(Laya.Event.CLICK, this, this.gotoRewardView);
                this.OpenGiftBtn.on(Laya.Event.CLICK, this, this.clickGetGift);
                l["default"].instance.onEvent(v.EventDefine.CLOSE_GIFT_VIEW, this, this.gotoRewardView);
                a.prototype.addEvent.call(this);
            }, k.prototype.removeEvent = function() {
                this.btnJump.off(Laya.Event.CLICK, this, this.gotoRewardView);
                this.OpenGiftBtn.off(Laya.Event.CLICK, this, this.clickGetGift);
                l["default"].instance.onOffEvent(v.EventDefine.CLOSE_GIFT_VIEW, this, this.gotoRewardView);
                a.prototype.removeEvent.call(this);
            }, k.prototype.onEnable = function() {
                this.addEvent();
            }, k.prototype.showADPanel = function() {}, k.prototype.hideADPanel = function() {
                this.owner.getChildByName("ButtonADPanel").visible = !1;
            }, k.prototype.openView = function(b) {
                var e = this;
                (a.prototype.openView.call(this, b), this.myData = b, q["default"].ctrlInfo.isWudian && 1 == q["default"].wudian_level[2]) ? (this.btnJump.bottom = 80, b = this.btnJump.alpha = 0, 1 == q["default"].ctrlInfo.randomLocation && (b = 260 - d["default"].random(0, 520)), this.btnJump.centerX = b, Laya.timer.once(q["default"].ctrlInfo.btuAppear[2], this, function() {
                    Laya.Tween.to(e.btnJump, {
                        alpha: 1
                    }, 300);
                }), Laya.timer.once(q["default"].ctrlInfo.btuMove[2], this, function() {
                    Laya.Tween.to(e.btnJump, {
                        bottom: 280 + e.offset.y / 3
                    }, 500, Laya.Ease.backOut, null, 500);
                })) : this.btnJump.bottom = 280 + this.offset.y / 3;
            }, k.prototype.clickGetGift = function() {
                var a = this;
                platform.getInstance().showReward(() => {
                    a.getGift();
                });
            }, k.prototype.gotoRewardView = function() {
                this.closeView();
                l["default"].instance.emit("openRewardView", this.myData);
            }, k.prototype.getGift = function() {
                this.gifBg.visible = !1;
                this.gifopened.visible = !0;
                if (2 == this.type) {
                    b["default"].gold = b["default"].gold + this.gitGoldNum;
                    platform.getInstance().setStorageSync("userMoney", b["default"].gold);
                    this.OVERhuoquAIn()
                } else {
                    b["default"].allView[this.gitSkinId] = 0;
                    platform.getInstance().setStorageSync("allView", b["default"].allView);
                    l["default"].instance.emit("openSkinPop", this.gitSkinId);
                }
            }, k.prototype.OVERhuoquAIn = function() {
                this.DIX = 0;
                Laya.timer.clear(this, this.goldFlyAniLoop);
                Laya.timer.loop(50, this, this.goldFlyAniLoop);
            }, k.prototype.goldFlyAniLoop = function() {
                var a = this;
                this.DIX <= this.DIXMAX ? (this.DIX += 1, this.DIX > this.DIXMAX ? (this.qudonghua(!0), Laya.timer.once(1e3, this, function() {
                    c["default"].callAPIMethodByProxy("destoryAllBannerAd");
                    r["default"].vibrateShort();
                    l["default"].instance.emit("openTip", "Diamond x" + a.gitGoldNum.toString());
                    a.gotoRewardView();
                })) : this.qudonghua(!1)) : Laya.timer.clear(this, this.goldFlyAniLoop);
            }, k.prototype.qudonghua = function(a) {
                var b = Laya.Pool.getItem("CONINAIN"),
                    c = {
                        x: this.node.x,
                        y: this.node.y
                    },
                    d = {
                        x: this.goldBgImg.x,
                        y: this.goldBgImg.y
                    };
                null == b && (b = new e.cionAni());
                this.owner.addChild(b);
                b.OVERhuoquAIn(a, c, d);
            }, k;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/StatisticsMgr": 27,
        "../mgrCommon/VibrateMgr": 29,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../tools/MathTool": 41,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46,
        "./cionAni": 66
    }],
    56: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../models/ConfigData"),
            c = a("../mgrCommon/PlatformMgr");
        ! function(a) {
            a[a.UP = 0] = "UP";
            a[a.DOWN = 1] = "DOWN";
        }(e || (e = {}));
        a = function(a) {
            function g() {
                var b = a.call(this) || this;
                return b.moveSpeed = .5, b.noMove = !0, b._itemHeight = 180, b._itemWidth = 137.5, b._spaceX = 0, b._spaceY = 0, b._repeatX = 0, b._repeatY = 0, b.speedTime = 500, b.viewWidth = 550, b.viewHeight = 540, b.imgWidth = 100, b.imgHeight = 100, b.labWidth = b._itemWidth, b.labHeight = 30, b;
            }
            return __extends(g, a), g.prototype.start = function(a, b) {
                if (!d["default"].isNull(b)) {
                    this.owner.removeChildren();
                    this._cells = [];
                    this.adInfos = b;
                    var c = 0,
                        h = new n();
                    this.list = [];
                    var g = this;
                    b = function() {
                        var b = g.adInfos[p],
                            d = k._cells.length * (k._itemHeight + k._spaceY),
                            e = new Laya.Image();
                        e.pos(c * (k._itemWidth + k._spaceX), d);
                        k.owner.addChild(e);
                        var f = new Laya.Image();
                        e.addChild(f);
                        f.pos((k._itemWidth - k.imgWidth) / 2, 15);
                        f.skin = b.param;
                        f.width = k.imgWidth;
                        f.height = k.imgHeight;
                        f.on(Laya.Event.MOUSE_DOWN, k, function() {
                            g.startTime = Laya.timer.currTimer;
                        });
                        f.name = p.toString();
                        f.on(Laya.Event.MOUSE_UP, k, function() {
                            var b = g.adInfos[Number(f.name)];
                            200 >= Laya.timer.currTimer - g.startTime && g.tiaozhuang(b, a);
                            g.startTime = Laya.timer.currTimer;
                        });
                        var l = new Laya.Label();
                        e.addChild(l);
                        l.pos(0, k.imgHeight + 35);
                        l.text = b.name;
                        l.width = k.labWidth;
                        l.height = k.labHeight;
                        l.fontSize = 24;
                        l.color = "#113054";
                        l.align = "center";
                        l.valign = "middle";
                        c++;
                        h._posY = d;
                        h._cells.push(e);
                        3 < c && (k._cells.push(h), c = 0, h = new n());
                        k.list.push(e);
                    };
                    for (var k = this, p = 0; p < g.adInfos.length; p++) b();
                    0 != c && this._cells.push(h);
                    this.fristPosY = 0;
                    this.endPosY = this.viewHeight - this._itemHeight;
                    this.setDirtion(e.DOWN);
                    this._mouseDown = !1;
                    this.noMove = this._cells[this._cells.length - 1].getPosY() <= this.endPosY;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                    this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, g.prototype.autoMove = function() {
                var a = this;
                this.noMove || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    a.move();
                }));
            }, g.prototype.move = function() {
                this._mouseDown || this.upMove(-.5);
            }, g.prototype.upMove = function(a) {
                for (var b = this._itemHeight + this._spaceY, c = this._itemWidth + this._spaceX, d = 0, e = this.list.length, h = 0; e > h; h++) {
                    var g = this.list[h];
                    g.y += a;
                    g.y < this.fristPosY - b && d++;
                }
                b = a = 0;
                0 < e && (g = this.list[e - 1], a = g.y, b = 3);
                1 < e && (g = this.list[e - 2], g.y == a && (b = 2));
                2 < e && (g = this.list[e - 3], g.y == a && (b = 1));
                3 < e && (g = this.list[e - 4], g.y == a && (b = 0));
                for (e = 0; 0 < d;) d--, (g = this.list.shift()) && (3 == b ? (b--, g.pos(c, a)) : 2 == b ? (b--, g.pos(2 * c, a)) : 1 == b ? (b--, g.pos(3 * c, a)) : 0 == b && (g.pos(c * e, a + (this._itemHeight + this._spaceY)), e++), this.list.push(g));
            }, g.prototype.downMove = function(a) {
                for (var b = (this._itemHeight + this._spaceY, this._itemWidth + this._spaceX), c = 0, d = this.list.length, e = 0; d > e; e++) {
                    var h = this.list[e];
                    h.y += a;
                    h.y >= this.viewHeight && c++;
                }
                e = a = 0;
                0 < d && (h = this.list[0], a = h.y, e = 3);
                1 < d && (h = this.list[1], h.y == a && (e = 2));
                2 < d && (h = this.list[2], h.y == a && (e = 1));
                3 < d && (h = this.list[3], h.y == a && (e = 0));
                for (d = 3; 0 < c;) c--, (h = this.list.pop()) && (3 == e ? (e--, h.pos(2 * b, a)) : 2 == e ? (e--, h.pos(b, a)) : 1 == e ? (e--, h.pos(0, a)) : 0 == e && (h.pos(b * d, a - (this._itemHeight + this._spaceY)), d--), this.list.unshift(h));
            }, g.prototype.setDirtion = function(a) {
                this.moveDirection = a;
                this.moveDirection == e.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, g.prototype.tiaozhuang = function(a, d) {
                a = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks
                };
                b["default"].mainJumpToOtherGame = !0;
                c["default"].callAPIMethodByProxy("navigateToMiniProgram", a);
            }, g.prototype.mouseDown = function() {
                Laya.timer.clearAll(this);
                this._mouseDown = !0;
                this._mouseY = Laya.MouseManager.instance.mouseX;
            }, g.prototype.mouseMove = function() {
                if (!this.noMove && this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseY - this._mouseY;
                    a = 30 < a ? 30 : -30 > a ? -30 : a;
                    this._mouseY = Laya.MouseManager.instance.mouseY;
                    0 > a ? this.upMove(a) : 0 < a && this.downMove(a);
                }
            }, g.prototype.mouseUp = function(a) {
                this._mouseDown = !1;
                this._mouseY = 0;
                this.autoMove();
            }, g;
        }(Laya.Script);
        f["default"] = a;
        var n = function() {
            function a() {
                this._cells = [];
                this._posY = 0;
            }
            return a.prototype.setPosY = function(a) {
                for (var b = 0; b < this._cells.length; b++) {
                    var c = this._cells[b];
                    c.pos(c.x, a);
                }
                this._posY = a;
            }, a.prototype.getPosY = function() {
                return this._posY;
            }, a;
        }();
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../models/ConfigData": 31,
        "../tools/MyUtils": 44
    }],
    57: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../models/ConfigData"),
            d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../mgrCommon/EventMgr"),
            n = a("../mgrCommon/SoundMgr"),
            l = a("./AdListLoop"),
            g = a("../models/UserData"),
            h = a("../mgrCommon/HttpMgr"),
            q = a("./cionAni"),
            u = a("../mgrCommon/StatisticsMgr"),
            v = a("./RewardView"),
            r = a("../platform/wx/WXAPI"),
            k = a("../mgrCommon/EventDefine"),
            p = a("../mgr3d/GameMgr"),
            w = a("./PromotionAnimation"),
            x = a("../mgrCommon/EnumMana");
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b.imgHintY = 0, b.isShowLeftAd = !1, b.DIX = 0, b.DIXMAX = 6, b.maskTargetRot = -90, b;
            }
            return __extends(f, a), f.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.goldBgImg = this.owner.getChildByName("goldBgImg");
                this.leftTT = this.goldBgImg.getChildByName("leftTT");
                this.centerImg = this.owner.getChildByName("centerImg");
                var c = this.leftTT.getChildByName("lefttop");
                this.settingPop = c.getChildByName("settingS").getChildByName("settingPop");
                this.img_adMove = this.owner.getChildByName("centerImg").getChildByName("img_adMove");
                this.coinNumUnit = this.goldBgImg.getChildByName("myMoneyUnitClip");
                this.coinNum = this.goldBgImg.getChildByName("myMoneyClip");
                this.goleIconImg = this.goldBgImg.getChildByName("goleIconImg");
                d["default"].autoScreenSize([this.goldBgImg]);
                this.btnSound = this.settingPop.getChildByName("musicBtn");
                this.settingBtn = c.getChildByName("settingBtn");
                this.InitSetting();
                c.getChildByName("settingS").pos(this.settingBtn.x, this.settingBtn.y);
                this.switchOptionUI();
                this.img_start = this.img_adMove.getChildByName("img_start");
                c = this.img_adMove.getChildByName("start_img");
                this.btnShop = this.img_adMove.getChildByName("img_shop");
                c.y += this.offset.y / 2;
                this.btnShop.y += this.offset.y / 2;
                this.title = this.centerImg.getChildByName("img_logo");
                this.btnStart = this.owner.getChildByName("img_play");
            }, f.prototype.showADPanel = function() {}, f.prototype.hideADPanel = function() {}, f.prototype.onEnable = function() {
                this.addEvent();
                p["default"].instance.cameraController.cameraFollowState != x.EnumMana.CameraFollowState.ShopToNomal && (p["default"].instance.cameraController.cameraFollowState = x.EnumMana.CameraFollowState.LookAt, p["default"].instance.cameraController.cameraStartFollow());
                Laya.Tween.clearTween(this.img_start);
                this.tweenAniDown(this.img_start, {
                    scaleX: 1.05,
                    scaleY: 1.05
                }, {
                    scaleX: .95,
                    scaleY: .95
                }, 400);
                this.refreshCoin();
            }, f.prototype.refreshCoin = function() {
                var a = d["default"].scoreConversion(g["default"].gold);
                this.coinNum.value = a.value;
                this.coinNumUnit.visible = null != a.isK;
                var b = ["T", "B", "M", "K"],
                    c = 21 * a.value.length;
                a.isK && (this.coinNumUnit.value = b[a.isK], a = c, c += 37, this.coinNumUnit.x = 118 - c / 2 + a + 2);
                this.coinNum.x = 118 - c / 2;
            }, f.prototype.switchOptionUI = function() {
                e["default"].isSound ? this.btnSound.skin = "mainview/zhuye_btn_shengyin_open.png" : this.btnSound.skin = "mainview/zhuye_btn_shengyin_close.png";
            }, f.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                p["default"].instance.moveCameraToUp();
                this.ShowBanner();
            }, f.prototype.btnLeftADFuncAgain = function() {
                this.btnLeftADFunc();
            }, f.prototype.showLeftADFunc = function() {
                Laya.timer.once(300, this, this.btnLeftADFunc);
                Laya.timer.once(1500, this, this.btnLeftADFuncAgain);
            }, f.prototype.btnLeftADFunc = function() {}, f.prototype.clickImg_hideLeftAD = function() {}, f.prototype.addEvent = function() {
                var b = this;
                a.prototype.addEvent.call(this);
                this.btnSound.on(Laya.Event.CLICK, this, this.soundBtnClick);
                Laya.timer.once(1e3, this, function() {
                    b.btnStart.on(Laya.Event.CLICK, b, b.btnStartFunc);
                });
                this.btnShop.on(Laya.Event.CLICK, this, this.btnGotoShopFunc);
                this.settingBtn.on(Laya.Event.CLICK, this, this.onClickSetting);
            }, f.prototype.virbortBtnClick = function() {}, f.prototype.soundBtnClick = function() {
                e["default"].isSound = !e["default"].isSound;
                e["default"].isSound ? this.btnSound.skin = "mainview/zhuye_btn_shengyin_open.png" : this.btnSound.skin = "mainview/zhuye_btn_shengyin_close.png";
                e["default"].isSound ? (e["default"].setSound(""), n["default"].instance.playBGM()) : (e["default"].setSound("1"), n["default"].instance.stopBGM());
            }, f.prototype.btnInviteFunc = function() {}, f.prototype.btnServiceFunc = function() {
                var a = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), b["default"].callAPIMethodByProxy("openCustomerServiceConversation"));
            }, f.prototype.btnGotoShopFunc = function() {
                var a = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), c["default"].instance.emit("openSkinShop"));
            }, f.prototype.btnRankFunc = function() {
                var a = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), c["default"].instance.emit("openRank", {
                    _type: e.SORTTYPE.LEVEL
                }));
            }, f.prototype.btnStartFunc = function() {
                var a = this;
                if (this._isClick) {} else {
                    this._isClick = !0, Laya.timer.once(500, this, function() {
                        a._isClick = null;
                    }), platform.getInstance().showInterstitial(() => {
                        p["default"].instance.moveCameraToDwon(), c["default"].instance.emit("openSkinTrial");
                    })
                }
            }, f.prototype.removeEvent = function() {
                this.btnSound.off(Laya.Event.CLICK, this, this.soundBtnClick);
                this.btnStart.off(Laya.Event.CLICK, this, this.btnStartFunc);
                this.settingBtn.off(Laya.Event.CLICK, this, this.onClickSetting);
                this.img_start.off(Laya.Event.CLICK, this, this.onClickDoubleStartGame);
                a.prototype.removeEvent.call(this);
            }, f.prototype.OVERhuoquAIn = function() {
                this.DIX = 0;
                Laya.timer.clear(this, this.goldFlyAniLoop);
                Laya.timer.loop(50, this, this.goldFlyAniLoop);
            }, f.prototype.goldFlyAniLoop = function() {
                var a = this;
                this.DIX <= this.DIXMAX ? (this.DIX += 1, this.DIX > this.DIXMAX ? (this.qudonghua(!0), Laya.timer.once(1e3, this, function() {
                    a.refreshCoin();
                })) : this.qudonghua(!1)) : Laya.timer.clear(this, this.goldFlyAniLoop);
            }, f.prototype.qudonghua = function(a) {
                var b = Laya.Pool.getItem("CONINAIN"),
                    c = {
                        x: this.centerImg.x + this.img_adMove.x + this.btnInvite.x,
                        y: this.centerImg.y + this.img_adMove.y + this.btnInvite.y
                    },
                    d = {
                        x: this.leftTT.x + this.goldBgImg.x + this.goleIconImg.x,
                        y: this.leftTT.y + this.goldBgImg.y + this.goleIconImg.y
                    };
                null == b && (b = new q.cionAni());
                this.owner.addChild(b);
                b.OVERhuoquAIn(a, c, d);
            }, f.prototype.tweenAniDown = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, b, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniUp(a, b, c, d);
                }));
            }, f.prototype.tweenAniUp = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, c, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniDown(a, b, c, d);
                }));
            }, f.prototype.InitSetting = function() {
                Laya.Tween.clearTween(this.settingPop);
                this.settingPop.y = -160;
                this.popSetting = !1;
            }, f.prototype.onClickSetting = function() {
                this.popSetting ? Laya.Tween.to(this.settingPop, {
                    y: -160
                }, 200 * (this.settingPop.y + 160) / 230) : Laya.Tween.to(this.settingPop, {
                    y: 70
                }, 200 * (70 - this.settingPop.y) / 230);
                this.popSetting = !this.popSetting;
            }, f.prototype.offlineGoldLoop = function() {}, f.prototype.goldImgMaskUpdate = function() {}, f.prototype.offlineGoldInit = function() {}, f.prototype.onClickDoubleStartGame = function() {}, f.prototype.img_goldFunc = function() {
                var a = parseInt(this.goldLab.text);
                0 < a && (a = {
                    type: v.RewardViewType.Offline,
                    gold: a
                }, b["default"].callAPIMethodByProxy("destoryAllBannerAd"), c["default"].instance.emit("openRewardView", a));
            }, f.prototype.ShowBanner = function() {}, f;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/SoundMgr": 26,
        "../mgrCommon/StatisticsMgr": 27,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46,
        "./PromotionAnimation": 59,
        "./RewardView": 61,
        "./cionAni": 66
    }],
    58: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e, d = a("../tools/MyUtils"),
            b = a("../platform/wx/WXAPI"),
            c = a("../mgrCommon/PlatformMgr");
        ! function(a) {
            a[a.UP = 0] = "UP";
            a[a.DOWN = 1] = "DOWN";
        }(e || (e = {}));
        a = function(a) {
            function g() {
                var b = a.call(this) || this;
                return b.moveSpeed = .5, b._itemHeight = 244, b._itemWidth = 184, b._spaceX = 14, b._spaceY = 14, b._repeatX = 3, b._repeatY = 3, b.speedTime = 500, b.viewHeight = 503, b;
            }
            return __extends(g, a), g.prototype.start = function(a, b) {
                if (!d["default"].isNull(b)) {
                    this.owner.removeChildren();
                    this._cells = [];
                    this.adInfos = b;
                    var c = 0,
                        h = new n(),
                        g = this;
                    b = function() {
                        var b = g.adInfos[f],
                            d = new Laya.Image();
                        k.owner.addChild(d);
                        var e = k._cells.length * (k._itemHeight + k._spaceY);
                        d.pos(c * (k._itemWidth + k._spaceX), e);
                        d.skin = b.param;
                        d.width = k._itemWidth;
                        d.height = k._itemHeight;
                        d.on(Laya.Event.MOUSE_DOWN, k, function() {
                            g.startTime = Laya.timer.currTimer;
                        });
                        d.name = f.toString();
                        d.on(Laya.Event.MOUSE_UP, k, function() {
                            var b = g.adInfos[Number(d.name)];
                            200 >= Laya.timer.currTimer - g.startTime && g.tiaozhuang(b, a);
                            g.startTime = Laya.timer.currTimer;
                        });
                        c++;
                        h._posY = e;
                        h._cells.push(d);
                        2 < c && (k._cells.push(h), c = 0, h = new n());
                    };
                    for (var k = this, f = 0; f < g.adInfos.length; f++) b();
                    0 != c && this._cells.push(h);
                    this.fristPosY = 0;
                    this.endPosY = this.viewHeight - this._itemHeight;
                    this.setDirtion(e.DOWN);
                    this._mouseDown = !1;
                    this.autoMove();
                    this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                    this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                    this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, g.prototype.autoMove = function() {
                var a = this;
                Laya.timer.clearAll(this);
                Laya.timer.loop(10, this, function() {
                    a.move();
                });
            }, g.prototype.move = function() {
                var a = -(this._cells[0].getPosY() - this.fristPosY);
                for (a = (Math.abs(this.speedTime / (this._itemHeight + this._spaceY) * a), 0); a < this._cells.length; a++) {
                    var b = this._cells[a];
                    b.setPosY(b.getPosY() + this.moveSpeed);
                }
                this.moveDirection == e.DOWN && this._cells[0].getPosY() > this.fristPosY && this.setDirtion(e.UP);
                this.moveDirection == e.UP && this._cells[this._cells.length - 1].getPosY() < this.endPosY && this.setDirtion(e.DOWN);
            }, g.prototype.setDirtion = function(a) {
                this.moveDirection = a;
                this.moveDirection == e.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, g.prototype.tiaozhuang = function(a, d) {
                d = {
                    my_uuid: d,
                    to_appid: a.appid,
                    appid: a.appid,
                    toLinks: a.toLinks,
                    callback: function() {
                        b["default"].ald("结算页广告位跳出成功", {
                            path: a.toLinks,
                            appId: a.appid,
                            position: a.position
                        });
                    }
                };
                b["default"].ald("结算页广告位跳出", {
                    path: a.toLinks,
                    appId: a.appid,
                    position: a.position
                });
                c["default"].callAPIMethodByProxy("navigateToMiniProgram", d);
            }, g.prototype.mouseDown = function() {
                Laya.timer.clearAll(this);
                this._mouseDown = !0;
                this._mouseY = Laya.MouseManager.instance.mouseX;
            }, g.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var a = Laya.MouseManager.instance.mouseY - this._mouseY;
                    a = 30 < a ? 30 : -30 > a ? -30 : a;
                    this._mouseY = Laya.MouseManager.instance.mouseY;
                    0 < a && this._cells[0].getPosY() + a > this.fristPosY && (a = this.fristPosY - this._cells[0].getPosY());
                    0 > a && this._cells[this._cells.length - 1].getPosY() + a < this.endPosY && (a = this.endPosY - this._cells[this._cells.length - 1].getPosY());
                    for (var b = 0; b < this._cells.length; b++) {
                        var c = this._cells[b];
                        c.setPosY(c.getPosY() + a);
                    }
                }
            }, g.prototype.mouseUp = function(a) {
                this._mouseDown = !1;
                this._mouseY = 0;
                this.autoMove();
            }, g;
        }(Laya.Script);
        f["default"] = a;
        var n = function() {
            function a() {
                this._cells = [];
                this._posY = 0;
            }
            return a.prototype.setPosY = function(a) {
                for (var b = 0; b < this._cells.length; b++) {
                    var c = this._cells[b];
                    c.pos(c.x, a);
                }
                this._posY = a;
            }, a.prototype.getPosY = function() {
                return this._posY;
            }, a;
        }();
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    59: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../models/ConfigData"),
            d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../platform/wx/WXAPI");
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b.isClick = !1, b.toLinks = "", b.toAppId = "", b.thePosition = 1, b.nowidx = 0, b.maxdix = 0, b.isAnim = !0, b.isChange = !1, b.lastRand = 0, b;
            }
            return __extends(f, a), f.prototype.onAwake = function() {
                this.owner.on(Laya.Event.CLICK, this, this.jumpOtherGame);
            }, f.prototype.init = function(a) {
                this.typeScene = a;
                this.adImg = this.owner.getChildByName("ADImg");
            }, f.prototype.start = function(a, b, c) {
                Laya.Tween.clearAll(this);
                var d = e["default"].getAdData(c);
                return !d || 0 >= d.length ? void(this.owner.visible = !1) : (this.owner.rotation = 0, this.owner.scale(1, 1), this.isAnim = a, this.isChange = b, this.thePosition = c, this.nowidx = 0, this.maxdix = d.length - 1, this.randomAD(), this.isAnim && this.adAnim(), Laya.timer.clearAll(this), void this.startAnim());
            }, f.prototype.startAnim = function() {
                var a = this,
                    b = e["default"].getAdData(this.thePosition);
                Laya.timer.loop(1e4, this, function() {
                    null != b ? 1 < b.length && a.isChange ? a.changeAD() : a.randomAD() : a.isChange ? a.changeAD() : a.randomAD();
                });
            }, f.prototype.randomAD = function() {
                var a = e["default"].getAdData(this.thePosition);
                if (a) {
                    var b = (a.length, d["default"].random(0, this.maxdix));
                    this.lastRand == b && (b += 1, b > this.maxdix && (b = 0));
                    this.nowidx = this.lastRand = b;
                    this.toAppId = a[this.nowidx].appid;
                    this.toLinks = a[this.nowidx].toLinks;
                    this.adImg ? this.adImg.skin = a[this.nowidx].param : this.owner.skin = a[this.nowidx].param;
                }
            }, f.prototype.changeAD = function() {
                var a = this,
                    b = this.owner;
                b.scale(1, 1);
                Laya.Tween.clearAll(b);
                Laya.Tween.to(b, {
                    scaleX: 0,
                    scaleY: 0
                }, 300, null, Laya.Handler.create(this, function() {
                    a.randomAD();
                    Laya.Tween.to(b, {
                        scaleX: 0,
                        scaleY: 0
                    }, 100, null, Laya.Handler.create(a, function() {
                        Laya.Tween.to(b, {
                            scaleX: 1,
                            scaleY: 1
                        }, 300, null, Laya.Handler.create(a, function() {
                            a.adAnim();
                        }));
                    }));
                }));
            }, f.prototype.adAnim = function() {
                var a = this,
                    b = this.owner;
                b.rotation = 0;
                Laya.Tween.clearAll(b);
                Laya.Tween.to(b, {
                    rotation: 10
                }, 300, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(b, {
                        rotation: 0
                    }, 300, null, Laya.Handler.create(a, function() {
                        Laya.Tween.to(b, {
                            rotation: -10
                        }, 300, null, Laya.Handler.create(a, function() {
                            Laya.Tween.to(b, {
                                rotation: 0
                            }, 300, null, Laya.Handler.create(a, function() {
                                a.adAnim();
                            }));
                        }));
                    }));
                }));
            }, f.prototype.jumpOtherGame = function() {
                var a = this;
                if (Laya.Browser.onMiniGame) {
                    var d = this.toAppId;
                    d ? (d = {
                        my_uuid: this.thePosition,
                        to_appid: d,
                        appid: this.toAppId,
                        toLinks: this.toLinks
                    }, console.log("开始跳转"), c["default"].ald("首页两侧广告位跳出", {
                        path: this.toLinks,
                        appId: this.toAppId,
                        position: this.thePosition
                    }), d.callback = function() {
                        c["default"].ald("首页两侧广告位跳出成功", {
                            path: a.toLinks,
                            appId: a.toAppId,
                            position: a.thePosition
                        });
                    }, "main" == this.typeScene && (e["default"].mainJumpToOtherGame = !0), b["default"].callAPIMethodByProxy("navigateToMiniProgram", d), Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(), this.changeAD()) : Laya.Browser.onMiniGame && window.wx.showToast({
                        title: "跳转失败"
                    });
                } else Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(), this.changeAD();
            }, f;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../mgrCommon/PlatformMgr": 25,
        "../models/ConfigData": 31,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44
    }],
    60: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../mgrCommon/PlatformMgr"),
            d = a("../models/ConfigData");
        m = a("./BaseView");
        var b = a("../mgrCommon/EventMgr"),
            c = a("../tools/MyUtils"),
            n = a("../mgrCommon/StatisticsMgr"),
            l = a("./AdListLoop"),
            g = a("../mgrCommon/SoundMgr"),
            h = a("../platform/wx/WXAPI"),
            q = a("../models/UserData"),
            u = a("../mgrCommon/EventDefine"),
            v = a("../mgr3d/GameMgr");
        a = function(a) {
            function k() {
                var b = a.call(this) || this;
                return b.endAngle = -90, b.isLoadAD = !1, b.goShareAdc = !1, b.resurgenceTime = 7e3, b;
            }
            return __extends(k, a), k.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.endAngle = -90;
                this.btnAnchor = this.owner.getChildByName("btnAnchor");
                this.btnVideo = this.btnAnchor.getChildByName("videoBtn");
                this.btnJump = this.btnAnchor.getChildByName("skipBtn");
                this.progressBg = this.owner.getChildByName("progressBg");
                this.progressMask = this.progressBg.getChildByName("progressBg").mask;
                this.progressMask.graphics.clear();
                this.progressMask.graphics.drawPie(149, 149, 149, -90, this.endAngle, "#ff0000");
                this.reviveCount = this.progressBg.getChildByName("reviveCount");
                this.isLoadAD = !1;
                this.progressBg.y += this.offset.y / 3;
                this.gameList = this.owner.getChildByName("gameList");
                this.gameList.renderHandler = new Laya.Handler(this, this.showADPanel);
                this.gameList.array = platform.getInstance().getForgames()
            }, k.prototype.showADPanel = function(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE");
                });
            }, k.prototype.hideADPanel = function() {}, k.prototype.addEvent = function() {
                this.btnVideo.on(Laya.Event.CLICK, this, this.videoClick);
                this.btnJump.on(Laya.Event.CLICK, this, this.jumpClick);
                a.prototype.addEvent.call(this);
            }, k.prototype.removeEvent = function() {
                this.btnVideo.off(Laya.Event.CLICK, this, this.videoClick);
                this.btnJump.off(Laya.Event.CLICK, this, this.jumpClick);
                a.prototype.removeEvent.call(this);
            }, k.prototype.countDown = function() {
                if (!this.goShareAdc) {
                    var a = this.resurgenceTime - 1e3;
                    100 > a ? (this.reviveCount.text = Math.ceil(a / 1e3).toString(), this.resurgenceTime = a, this.progressMask.graphics.clear(), this.progressMask.graphics.drawPie(147, 147, 147, -90, 270, "#ff0000"), this.openOver()) : (this.reviveCount.text = Math.ceil(a / 1e3).toString(), this.resurgenceTime = a, this.endAngle += 51.4, this.progressMask.graphics.drawPie(147, 147, 147, -90, this.endAngle, "#ff0000"), g["default"].instance.playSound("djs"));
                }
            }, k.prototype.sptVideoAni = function() {
                Laya.Tween.clearTween(this.btnVideo);
                this.tweenAniDown(this.btnVideo, {
                    scaleX: 1.05,
                    scaleY: 1.05
                }, {
                    scaleX: .95,
                    scaleY: .95
                }, 400);
            }, k.prototype.openView = function() {
                a.prototype.openView.call(this);
                Laya.timer.clearAll(this);
                this.reviveCount.text = "7", this.resurgenceTime = 7e3, Laya.timer.loop(1e3, this, this.countDown), this.btnVideo.visible = true, Laya.Tween.clearTween(this.progressBg), this.tweenAniDown(this.progressBg, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }, {
                    scaleX: .9,
                    scaleY: .9
                }, 500), this.sptVideoAni()
            }, k.prototype.tweenAniDown = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, b, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniUp(a, b, c, d);
                }));
            }, k.prototype.tweenAniUp = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, c, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniDown(a, b, c, d);
                }));
            }, k.prototype.openGoingSurpassOther = function(a) {}, k.prototype.closeGoingSurpassOther = function() {}, k.prototype.onEnable = function() {
                a.prototype.onEnable.call(this);
            }, k.prototype.onDisable = function() {
                a.prototype.onDisable.call(this);
                this.closeGoingSurpassOther();
            }, k.prototype.videoClick = function() {
                var a = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), a.goShareAdc = true, platform.getInstance().showReward(() => {
                    a.openFighting();
                }, () => {
                    a.goShareAdc = false;
                    platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                }));
            }, k.prototype.jumpClick = function() {
                var a = this;
                this._isClick || this.isLoadAD || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), this.closeView(), this.openOver());
            }, k.prototype.openFighting = function() {
                b["default"].instance.emit("openFighting", !0);
            }, k.prototype.openOver = function() {
                var a = {
                    type: 1,
                    passNum: q["default"].level,
                    isGoldeggs: !1,
                    isPass: !1,
                    gold: v["default"].instance.GameOverScore(!1),
                    _type: d.SORTTYPE.LEVEL
                };
                b["default"].instance.emit("openGameOver", a);
            }, k.prototype.ShowBanner = function() {}, k;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/SoundMgr": 26,
        "../mgrCommon/StatisticsMgr": 27,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46
    }],
    61: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e;
        m = a("./BaseView");
        var d = a("./cionAni"),
            b = a("../tools/MyUtils"),
            c = a("../models/UserData"),
            n = a("../mgrCommon/PlatformMgr"),
            l = a("../mgrCommon/StatisticsMgr"),
            g = a("../mgrCommon/EventMgr"),
            h = a("../mgrCommon/HttpMgr"),
            q = a("./AdListLoop"),
            u = a("../models/ConfigData"),
            v = a("../platform/wx/WXAPI");
        ! function(a) {
            a[a.Offline = 0] = "Offline";
            a[a.Settle = 1] = "Settle";
        }(e = f.RewardViewType || (f.RewardViewType = {}));
        a = function(a) {
            function k() {
                var b = a.call(this) || this;
                return b.gold = 100, b.goldState = 0, b.startGoldTime = 0, b.isVedio = !1, b.DIX = 0, b.DIXMAX = 6, b;
            }
            return __extends(k, a), k.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.goldBgImg = this.owner.getChildByName("goldBgImg");
                this.myMoneyUnitClip = this.goldBgImg.getChildByName("myMoneyUnitClip");
                this.myMoneyClip = this.goldBgImg.getChildByName("myMoneyClip");
                this.goleIconImg = this.goldBgImg.getChildByName("goleIconImg");
                this.node = this.owner.getChildByName("node");
                this.lightImg = this.node.getChildByName("lightImg");
                this.goldLabImg = this.node.getChildByName("goldLabImg");
                this.goldLab = this.goldLabImg.getChildByName("goldLab");
                this.tickBgImg = this.node.getChildByName("tickBgImg");
                this.tickImg = this.tickBgImg.getChildByName("tickImg");
                var c = this.owner.getChildByName("bottom");
                this.getBtn = c.getChildByName("getBtn");
                this.treasureChestImg = this.node.getChildByName("treasureChestImg");
                c.centerY += this.offset.y / 3;
                b["default"].autoScreenSize([this.goldBgImg]);
                Laya.timer.loop(60, this, this.onUpdate2);
            }, k.prototype.addEvent = function() {
                this.getBtn.on(Laya.Event.CLICK, this, this.onClickGet);
                this.tickBgImg.on(Laya.Event.CLICK, this, this.onClickTick);
                a.prototype.addEvent.call(this);
            }, k.prototype.removeEvent = function() {
                this.getBtn.off(Laya.Event.CLICK, this, this.onClickGet);
                this.tickBgImg.off(Laya.Event.CLICK, this, this.onClickTick);
                a.prototype.removeEvent.call(this);
            }, k.prototype.onEnable = function() {
                this.addEvent();
                this.goldLab.text = this.tickImg.visible ? (5 * this.gold).toString() : this.gold.toString();
                var a = b["default"].scoreConversion(c["default"].gold);
                this.myMoneyClip.value = a.value;
                this.myMoneyUnitClip.visible = null != a.isK;
                var d = ["T", "B", "M", "K"],
                    e = 21 * a.value.length;
                a.isK && (this.myMoneyUnitClip.value = d[a.isK], a = e, e += 37, this.myMoneyUnitClip.x = 118 - e / 2 + a + 2);
                this.myMoneyClip.x = 118 - e / 2;
            }, k.prototype.showADPanel = function() {}, k.prototype.hideADPanel = function() {}, k.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                (this.myData = b) && (this.currentType = b.type, this.gold = b.gold);
                this.goldLab.text = this.tickImg.visible ? (5 * this.gold * c["default"].curMultiple).toString() : (this.gold * c["default"].curMultiple).toString();
            }, k.prototype.onClickGet = function() {
                var a = this;
                if (this.tickImg.visible) {
                    platform.getInstance().showReward(() => {
                        a.myData.gold *= 5;
                        a.OVERhuoquAIn();
                    })
                } else {
                    a.OVERhuoquAIn()
                }
            }, k.prototype.SetGold = function(a) {
                this.gold = a;
            }, k.prototype.onClickTick = function() {
                var a = this.tickImg.visible;
                this.goldState = a ? 1 : 2;
                this.goldLab.text = a ? Math.floor(5 * this.gold * c["default"].curMultiple).toString() : Math.floor(this.gold * c["default"].curMultiple).toString();
                this.startGoldTime = Laya.timer.currTimer;
                this.tickImg.visible = !a;
            }, k.prototype.onUpdate2 = function() {
                if (this.lightImg.rotation += 1, 360 < this.lightImg.rotation && (this.lightImg.rotation -= 360), this.goldState) {
                    var a = parseInt(this.goldLab.text);
                    1 == this.goldState ? (a -= 300, (a <= this.gold * c["default"].curMultiple || this.startGoldTime + 2e3 < Laya.timer.currTimer) && (a = this.gold * c["default"].curMultiple, this.goldState = 0)) : 2 == this.goldState && (a += 300, (a >= 5 * this.gold * c["default"].curMultiple || this.startGoldTime + 2e3 < Laya.timer.currTimer) && (a = 5 * this.gold * c["default"].curMultiple, this.goldState = 0));
                    this.goldLab.text = Math.floor(a).toString();
                }
            }, k.prototype.OVERhuoquAIn = function() {
                this.DIX = 0;
                Laya.timer.clear(this, this.goldFlyAniLoop);
                Laya.timer.loop(50, this, this.goldFlyAniLoop);
            }, k.prototype.goldFlyAniLoop = function() {
                var a = this;
                var gold = parseInt(this.goldLab.text);
                this.DIX <= this.DIXMAX ? (this.DIX += 1, this.DIX > this.DIXMAX ? (this.qudonghua(!0), Laya.timer.once(1e3, this, function() {
                    a.closeView();
                    g["default"].instance.emit("openGameOver", a.myData);
                    g["default"].instance.emit("openTip", "Diamond x" + gold);
                })) : this.qudonghua(!1)) : Laya.timer.clear(this, this.goldFlyAniLoop);
            }, k.prototype.qudonghua = function(a) {
                var b = Laya.Pool.getItem("CONINAIN"),
                    c = {
                        x: this.node.x + this.treasureChestImg.x,
                        y: this.node.y + this.treasureChestImg.y
                    },
                    e = {
                        x: this.goldBgImg.x + this.goleIconImg.x,
                        y: this.goldBgImg.y + this.goleIconImg.y
                    };
                null == b && (b = new d.cionAni());
                this.owner.addChild(b);
                b.OVERhuoquAIn(a, c, e);
            }, k;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/StatisticsMgr": 27,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46,
        "./cionAni": 66
    }],
    62: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../mgrCommon/EventDefine"),
            d = a("../mgrCommon/EventMgr");
        a = function(a) {
            function b() {
                return a.call(this) || this;
            }
            return __extends(b, a), b.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                var b = this.owner.getChildByName("anchor");
                this._skinImg = b.getChildByName("skinImg");
                this.bg = b.getChildByName("bg");
                this.getBtn = b.getChildByName("getBtn");
                b.y += this.offset.y / 2;
                Laya.timer.loop(60, this, this.onUpdateBg);
            }, b.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                this._skinImg.skin = "skinShop/pifu_1_0" + b + ".png";
            }, b.prototype.addEvent = function() {
                this.getBtn.on(Laya.Event.CLICK, this, this.getSkin);
                a.prototype.addEvent.call(this);
            }, b.prototype.removeEvent = function() {
                this.getBtn.off(Laya.Event.CLICK, this, this.getSkin);
                a.prototype.removeEvent.call(this);
            }, b.prototype.getSkin = function() {
                d["default"].instance.emit(e.EventDefine.CLOSE_GIFT_VIEW);
                this.closeView();
            }, b.prototype.onUpdateBg = function() {
                this.bg.rotation += 1;
                360 < this.bg.rotation && (this.bg.rotation -= 360);
            }, b;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgrCommon/EventDefine": 21,
        "../mgrCommon/EventMgr": 22,
        "./BaseView": 46
    }],
    63: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../mgrCommon/EventMgr"),
            d = a("../models/ConfigData"),
            b = a("../models/UserData"),
            c = a("../mgrCommon/HttpMgr"),
            n = a("../mgrCommon/PlatformMgr"),
            l = a("../mgrCommon/StatisticsMgr"),
            g = a("../tools/MyUtils"),
            h = a("../platform/wx/WXAPI"),
            q = a("../mgr3d/GameMgr"),
            u = a("../mgrCommon/EnumMana");
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b.curSelectedIndex = 0, b.shopListData = [], b.isLoadAD = !1, b.goShareAdc = !1, b;
            }
            return __extends(f, a), f.prototype.onEnable = function() {
                a.prototype.onEnable.call(this);
            }, f.prototype.onDisable = function() {
                a.prototype.onDisable.call(this);
            }, f.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.buyPanel = this.owner.getChildByName("buyPanel");
                this.shopBg = this.owner.getChildByName("shopBg");
                this.btn_videoUnlock = this.buyPanel.getChildByName("btn_videoUnlock");
                this.btn_videoTry = this.buyPanel.getChildByName("btn_videoTrySkin");
                this.videoTimes = this.btn_videoUnlock.getChildByName("ft_viewTimes");
                this.videoNeedTimes = this.btn_videoUnlock.getChildByName("ft_unlockTimes");
                this.boatSelectedLabel = this.owner.getChildByName("selectedLabel");
                this.btn_coinUnlock = this.buyPanel.getChildByName("btn_coinUnlock");
                this.shopCoinNum = this.btn_coinUnlock.getChildByName("coinUnlockNum");
                this.myMoneyUnitClip = this.btn_coinUnlock.getChildByName("myMoneyUnitClip");
                this.btn_selectBoat = this.owner.getChildByName("btn_selectBoat");
                this.btn_backHome = this.owner.getChildByName("backHome");
                var b = this.owner.getChildByName("coinPanel");
                this.fc_coinNum = b.getChildByName("coinNum");
                this.fc_coinUnitClip = b.getChildByName("myMoneyUnitClip");
                g["default"].autoScreenSize([this.btn_backHome, b]);
                b.y += 8;
                this.shopList = this.owner.getChildByName("listAd");
                this.shopList.array = [];
                this.shopList.renderHandler = new Laya.Handler(this, this.onRender);
                this.shopList.mouseHandler = new Laya.Handler(this, this.onClickItem);
                this.PlayerType = d["default"].getGameConfigData("Skin");
                this.creatListDatas();
                this.setButtons(this.curSelectedIndex);
                this.buyPanel.y += this.offset.y;
                this.btn_selectBoat.y += this.offset.y;
                this.boatSelectedLabel.y += this.offset.y;
                this.shopList.y += this.offset.y / 2.3;
                this.owner.getChildByName("listBg").y += this.offset.y / 2.3;
                this.bird2DpostionAchor = this.owner.getChildByName("birdPosition");
                this.bird2DpostionAchor.y += this.offset.y / 2.3;
                q["default"].instance.cameraController.cameraFollowState = u.EnumMana.CameraFollowState.Shop;
                q["default"].instance.cameraController.cameraStartFollow();
                this.tweenAniDown(this.btn_videoUnlock, {
                    scaleX: 1.05,
                    scaleY: 1.05
                }, {
                    scaleX: .95,
                    scaleY: .95
                }, 400);
            }, f.prototype.tweenAniDown = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, b, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniUp(a, b, c, d);
                }));
            }, f.prototype.tweenAniUp = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, c, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniDown(a, b, c, d);
                }));
            }, f.prototype.creatListDatas = function() {
                for (var a = 0; a < this.PlayerType.length; a++) {
                    var c = {};
                    c.Id = this.PlayerType[a].Id;
                    c.Id == b["default"].curSelectViewId && (this.curSelectedIndex = a);
                    c.boatImageResouce = this.PlayerType[a].Icon;
                    c.boatIsLock = 0 == b["default"].allView[c.Id] ? !1 : !0;
                    c.boatUnLockCoin = this.PlayerType[a].Money;
                    c.Video = this.PlayerType[a].Video;
                    c.boatUnLockVideoTimes = this.PlayerType[a].Video;
                    c.Res = this.PlayerType[a].Res;
                    this.shopListData.push(c);
                }
                c = this.shopListData.length % 3;
                if (0 < c)
                    for (a = 0; 3 - c > a; a++) this.shopListData.push({});
            }, f.prototype.onRender = function(a, c) {
                var d = a.getChildByName("boatImage"),
                    e = a.getChildByName("beSelected"),
                    g = a.getChildByName("boatLock");
                a = a.getChildByName("boatBg");
                if (!this.shopListData[c].Id) return d.visible = !1, e.visible = !1, void(g.visible = !1);
                (d.skin = "skinShop/" + this.shopListData[c].boatImageResouce + ".png", g.visible = this.shopListData[c].boatIsLock, this.shopListData[c].boatIsLock) ? (g = new Laya.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]), d.filters = [g]) : d.filters = null;
                c == this.curSelectedIndex ? e.visible = !0 : e.visible = !1;
                b["default"].curSelectViewId == this.shopListData[c].Id ? a.skin = "skinShop/pifu_bg02.png" : a.skin = "skinShop/pifu_bg03.png";
            }, f.prototype.onClickItem = function(a, b) {
                a.type == Laya.Event.CLICK && a.target instanceof Laya.Box && this.shopListData[b].Id && (this.curSelectedIndex = b, this.setButtons(b), q["default"].instance.ShowShopSkin(this.shopListData[b].Res), this.shopList.refresh());
            }, f.prototype.setButtons = function(a) {
                q["default"].instance.ChangeSkinById(this.shopListData[a].Id);
                if (b["default"].curSelectViewId == this.shopListData[a].Id) {
                    this.btn_selectBoat.visible = false;
                } else {
                    this.btn_selectBoat.visible = !this.shopListData[a].boatIsLock;
                }
                this.buyPanel.visible = this.shopListData[a].boatIsLock;
                if (0 == this.shopListData[a].boatUnLockCoin) {
                    this.btn_coinUnlock.visible = !1;
                } else {
                    this.btn_coinUnlock.visible = !0;
                    var c = g["default"].scoreConversion(this.shopListData[a].boatUnLockCoin);
                    this.shopCoinNum.value = c.value;
                    this.myMoneyUnitClip.visible = null != c.isK;
                    var e = ["T", "B", "M", "K"],
                        f = 21 * c.value.length;
                    c.isK && (this.myMoneyUnitClip.value = e[c.isK], c = f, f += 37, this.myMoneyUnitClip.x = 179 - f / 2 + c + 2);
                    this.shopCoinNum.x = 179 - f / 2 - 10;
                }
                if (0 == this.shopListData[a].Video) {
                    this.btn_videoUnlock.visible = false;
                } else {
                    this.btn_videoUnlock.visible = true;
                    this.videoNeedTimes.value = this.shopListData[a].Video;
                    this.videoTimes.value = "0";
                    if (b["default"].unlockingView[this.shopListData[a].Id]) {
                        this.videoTimes.value = b["default"].unlockingView[this.shopListData[a].Id];
                    }
                }
                if (0 === this.shopListData[a].boatUnLockCoin && 0 === this.shopListData[a].Video && !this.btn_selectBoat.visible) {
                    if (b["default"].curSelectViewId == this.shopListData[a].Id) {
                        this.boatSelectedLabel.visible = false;
                    } else {
                        this.boatSelectedLabel.visible = true;
                    }
                } else {
                    this.boatSelectedLabel.visible = false;
                }
            }, f.prototype.addEvent = function() {
                this.btn_coinUnlock.on(Laya.Event.CLICK, this, this.coinUnlockBtClick);
                this.btn_videoUnlock.on(Laya.Event.CLICK, this, this.videoUnlockBtClick);
                this.btn_selectBoat.on(Laya.Event.CLICK, this, this.selecteBoatkBtClick);
                this.btn_backHome.on(Laya.Event.CLICK, this, this.backToHomeBtClick);
                this.btn_videoTry.on(Laya.Event.CLICK, this, this.trySelectSkin);
                a.prototype.addEvent.call(this);
            }, f.prototype.removeEvent = function() {
                this.btn_coinUnlock.off(Laya.Event.CLICK, this, this.coinUnlockBtClick);
                this.btn_videoUnlock.off(Laya.Event.CLICK, this, this.videoUnlockBtClick);
                this.btn_selectBoat.off(Laya.Event.CLICK, this, this.selecteBoatkBtClick);
                this.btn_backHome.off(Laya.Event.CLICK, this, this.backToHomeBtClick);
                this.btn_videoTry.off(Laya.Event.CLICK, this, this.trySelectSkin);
                a.prototype.removeEvent.call(this);
            }, f.prototype.trySelectSkin = function() {
                this.getVideoSkin(this.shopListData[this.curSelectedIndex].Id);
            }, f.prototype.coinUnlockBtClick = function() {
                var a = this;
                if (this._isClick) {} else {
                    this._isClick = !0, Laya.timer.once(500, this, function() {
                        a._isClick = null;
                    })
                    if (b["default"].gold > this.shopListData[this.curSelectedIndex].boatUnLockCoin) {
                        b["default"].gold = b["default"].gold - this.shopListData[this.curSelectedIndex].boatUnLockCoin;
                        platform.getInstance().setStorageSync("userMoney", b["default"].gold);
                        b["default"].allView[this.shopListData[this.curSelectedIndex].Id] = 0;
                        this.buyBoatCallBack(this.shopListData[this.curSelectedIndex].Id)
                    } else {
                        e["default"].instance.emit("openTip", "Diamond is not enough")
                    }
                }
            }, f.prototype.buyBoatCallBack = function(a) {
                this.SetCoin();
                this.shopListData.length = 0;
                this.creatListDatas();
                this.shopList.refresh();
                this.setButtons(this.curSelectedIndex);
                e["default"].instance.emit("openTip", "success！");
                e["default"].instance.emit("openSkinPop", a);
            }, f.prototype.SetCoin = function() {
                var a = g["default"].scoreConversion(b["default"].gold);
                this.fc_coinNum.value = a.value;
                this.fc_coinUnitClip.visible = null != a.isK;
                var c = ["T", "B", "M", "K"],
                    d = 21 * a.value.length;
                a.isK && (this.fc_coinUnitClip.value = c[a.isK], a = d, d += 37, this.fc_coinUnitClip.x = 118 - d / 2 + a + 2);
                this.fc_coinNum.x = 118 - d / 2;
            }, f.prototype.videoUnlockBack = function(a) {
                var c = a.isUnlock;
                a = (a.systemViewId, a.unlockView);
                c ? (b["default"].allView[c] = 0, this.shopListData.length = 0, this.creatListDatas(), this.shopList.refresh(), this.setButtons(this.curSelectedIndex), e["default"].instance.emit("openSkinPop", c)) : (b["default"].unlockingView = JSON.parse(a), console.log("1 UserData.unlockingBoatView  = ", b["default"].unlockingView), this.setButtons(this.curSelectedIndex));
            }, f.prototype.videoUnlockBtClick = function() {
                var a = this;
                if (this._isClick) {} else {
                    this._isClick = !0, Laya.timer.once(500, this, function() {
                        a._isClick = null;
                    })
                    platform.getInstance().showReward(() => {
                        let id = a.shopListData[a.curSelectedIndex].Id;
                        if (b["default"].unlockingView[id]) {
                            b["default"].unlockingView[id]++;
                        } else {
                            b["default"].unlockingView[id] = 1;
                        }
                        if (a.shopListData[a.curSelectedIndex].Video <= b["default"].unlockingView[id]) {
                            b["default"].allView[id] = 0;
                            e["default"].instance.emit("openSkinPop", id)
                        }
                        platform.getInstance().setStorageSync("unlockingView", b["default"].unlockingView);
                        platform.getInstance().setStorageSync("allView", b["default"].allView);
                        this.shopListData.length = 0
                        a.creatListDatas();
                        a.shopList.refresh();
                        a.setButtons(a.curSelectedIndex);
                    });
                }
            }, f.prototype.selecteBoatkBtClick = function() {
                var a = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), q["default"].instance.UseSkin(this.shopListData[this.curSelectedIndex].Id), c["default"].instance.changeView(this.shopListData[this.curSelectedIndex].Id), this.Close());
            }, f.prototype.backToHomeBtClick = function() {
                this.Close();
            }, f.prototype.Close = function() {
                q["default"].instance.ChangeSkinById(b["default"].curSelectViewId);
                q["default"].instance.cameraController.cameraFollowState = u.EnumMana.CameraFollowState.ShopToNomal;
                e["default"].instance.emit("goHome");
                this.closeView();
            }, f.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                this.shopList.array = this.shopListData;
                this.shopList.refresh();
                this.SetCoin();
                n["default"].callAPIMethodByProxy("destoryAllBannerAd");
            }, f.prototype.getVideoSkin = function(a) {
                var b = this;
                n["default"].ptAPI ? (this.isLoadAD = !0, this.goShareAdc = !0, h["default"].ald("试用皮肤--视频"), n["default"].callAPIMethodByProxy("showVideo", {
                    posID: 203,
                    _type: l.SHARE_VIDEO_TYPE.RESURGENCE,
                    caller: this,
                    callBackSuc: function() {
                        q["default"].instance.TrySkin(a);
                        b.backToHomeBtClick();
                        h["default"].ald("商城试用皮肤--视频");
                    },
                    callBackFail: function() {
                        e["default"].instance.emit("openTip", "看完视频才能获得奖励");
                        b.isLoadAD = !1;
                        b.goShareAdc = !1;
                        q["default"].instance.isTestMode && (q["default"].instance.TrySkin(a), b.backToHomeBtClick());
                    },
                    callBackErro: function() {
                        e["default"].instance.emit("openTip", "今日视频次数已用完");
                        b.isLoadAD = !1;
                        b.goShareAdc = !1;
                        q["default"].instance.isTestMode && (q["default"].instance.TrySkin(a), b.backToHomeBtClick());
                    }
                })) : (q["default"].instance.TrySkin(a), this.backToHomeBtClick());
            }, f;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EnumMana": 20,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/HttpMgr": 24,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/StatisticsMgr": 27,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MyUtils": 44,
        "./BaseView": 46
    }],
    64: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("./BaseView");
        var e = a("../models/ConfigData"),
            d = a("../tools/MyUtils"),
            b = a("../mgrCommon/PlatformMgr"),
            c = a("../mgrCommon/EventMgr"),
            n = a("../mgrCommon/StatisticsMgr"),
            l = a("../models/UserData"),
            g = a("./AdListLoop"),
            h = a("../tools/MathUtil"),
            q = a("../platform/wx/WXAPI"),
            u = a("../mgr3d/GameMgr");
        a = function(a) {
            function f() {
                var b = a.call(this) || this;
                return b.isLoadAD = !1, b.goShareAdc = !1, b.trySkinBoat = [], b;
            }
            return __extends(f, a), f.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.anchor = this.owner.getChildByName("anchor");
                this.anchor.y += this.offset.y / 2;
                this.btnSkin0 = this.anchor.getChildByName("0");
                this.btnSkin1 = this.anchor.getChildByName("1");
                this.btnSkin2 = this.anchor.getChildByName("2");
                this.btnSkin3 = this.anchor.getChildByName("3");
                this.btnJump = this.owner.getChildByName("btnJump");
                this.btnRandom = this.anchor.getChildByName("btnRandom");
                Laya.Tween.clearTween(this.btnRandom);
                this.tweenAniDown(this.btnRandom, {
                    scaleX: 1.05,
                    scaleY: 1.05
                }, {
                    scaleX: .95,
                    scaleY: .95
                }, 400);
            }, f.prototype.tweenAniDown = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, b, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniUp(a, b, c, d);
                }));
            }, f.prototype.tweenAniUp = function(a, b, c, d) {
                var e = this;
                Laya.Tween.to(a, c, d, null, Laya.Handler.create(this, function() {
                    e.tweenAniDown(a, b, c, d);
                }));
            }, f.prototype.showADPanel = function() {}, f.prototype.hideADPanel = function() {}, f.prototype.initVideoSkin = function() {
                var a = [],
                    b = e["default"].getGameConfigData("Skin");
                if (!b) return !1;
                for (var c = 0; c < b.length; c++) {
                    var f = {};
                    f.Id = b[c].Id;
                    f.boatIsLock = 0 == l["default"].allView[f.Id] ? !1 : !0;
                    f.boatIsLock && (f.boatImageResouce = b[c].Icon, f.Res = b[c].Res, a.push(f));
                }
                if (4 <= a.length)
                    for (this.btnSkin0.visible = !0, this.btnSkin1.visible = !0, this.btnSkin2.visible = !0, this.btnSkin3.visible = !0, this.btnSkin0.pos(-176, -354), this.btnSkin1.pos(28, -354), this.btnSkin2.pos(-176, -146), this.btnSkin3.pos(28, -146), this.trySkinBoat = d["default"].randomSipArray(a, 4), c = 0; c < this.trySkinBoat.length; c++) a = "skinShop/" + this.trySkinBoat[c].boatImageResouce + ".png", b = this.anchor.getChildByName(c + "").getChildByName("skinImage"), b.skin = a;
                else {
                    if (!(2 <= a.length)) return !1;
                    this.btnSkin0.visible = !0;
                    this.btnSkin1.visible = !0;
                    this.btnSkin2.visible = !1;
                    this.btnSkin3.visible = !1;
                    this.btnSkin0.pos(-176, -274.5);
                    this.btnSkin1.pos(25.5, -275.5);
                    this.trySkinBoat = d["default"].randomSipArray(a, 2);
                    for (c = 0; c < this.trySkinBoat.length; c++) a = "skinShop/" + this.trySkinBoat[c].boatImageResouce + ".png", b = this.anchor.getChildByName(c + "").getChildByName("skinImage"), b.skin = a;
                }
                return !0;
            }, f.getdate = function() {
                var a = new Date(),
                    b = a.getFullYear(),
                    c = a.getMonth();
                a = a.getDate();
                return b + "" + (10 > c ? "0" + c : c) + (10 > a ? "0" + a : a);
            }, f.prototype.Hidden = function() {
                Laya.timer.clearAll(this);
                this.closeView();
            }, f.prototype.openView = function(f) {
                a.prototype.openView.call(this, f), n["default"].instance.startGameStatistics(), this.initVideoSkin()
            }, f.prototype.addEvent = function() {
                this.btnSkin0.on(Laya.Event.CLICK, this, this.trySkinClick, [0]);
                this.btnSkin1.on(Laya.Event.CLICK, this, this.trySkinClick, [1]);
                this.btnSkin2.on(Laya.Event.CLICK, this, this.trySkinClick, [2]);
                this.btnSkin3.on(Laya.Event.CLICK, this, this.trySkinClick, [3]);
                this.btnJump.on(Laya.Event.CLICK, this, this.clickJumpButton);
                this.btnRandom.on(Laya.Event.CLICK, this, this.clickRandomButton);
                a.prototype.addEvent.call(this);
            }, f.prototype.removeEvent = function() {
                this.btnSkin0.off(Laya.Event.CLICK, this, this.trySkinClick);
                this.btnSkin1.off(Laya.Event.CLICK, this, this.trySkinClick);
                this.btnSkin2.off(Laya.Event.CLICK, this, this.trySkinClick);
                this.btnSkin3.off(Laya.Event.CLICK, this, this.trySkinClick);
                this.btnJump.off(Laya.Event.CLICK, this, this.clickJumpButton);
                this.btnRandom.off(Laya.Event.CLICK, this, this.clickRandomButton);
                a.prototype.removeEvent.call(this);
            }, f.prototype.clickJumpButton = function() {
                var a = this;
                this._isClick || this.isLoadAD || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    a._isClick = null;
                }), this.Hidden(), c["default"].instance.emit("openFighting"));
            }, f.prototype.clickRandomButton = function() {
                var a = this;
                if (!this._isClick) {
                    this._isClick = !0;
                    Laya.timer.once(500, this, function() {
                        a._isClick = null;
                    });
                    platform.getInstance().showReward(() => {
                        var b = h["default"].Range(0, this.trySkinBoat.length - 1);
                        this.getVideoSkin(b);
                    });
                }
            }, f.prototype.trySkinClick = function(a) {
                var b = this;
                this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                    b._isClick = null;
                }), platform.getInstance().showReward(() => {
                    this.getVideoSkin(a)
                }));
            }, f.prototype.getVideoSkin = function(a) {
                var d = this;
                a > this.trySkinBoat.length - 1 && (a = this.trySkinBoat.length - 1);
                d.Hidden();
                u["default"].instance.TrySkin(d.trySkinBoat[a].Id);
                l["default"].curMultiple += .3;
                c["default"].instance.emit("openFighting");
            }, f;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../mgr3d/GameMgr": 17,
        "../mgrCommon/EventMgr": 22,
        "../mgrCommon/PlatformMgr": 25,
        "../mgrCommon/StatisticsMgr": 27,
        "../models/ConfigData": 31,
        "../models/UserData": 33,
        "../platform/wx/WXAPI": 35,
        "../tools/MathUtil": 42,
        "../tools/MyUtils": 44,
        "./AdListLoop": 45,
        "./BaseView": 46
    }],
    65: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                return null !== a && a.apply(this, arguments) || this;
            }
            return __extends(d, a), d.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.tipLbl = this.owner.getChildByName("image").getChildByName("Label");
            }, d.prototype.addEvent = function() {
                this.owner.on(Laya.Event.CLICK, this, this.closeView);
                a.prototype.addEvent.call(this);
            }, d.prototype.removeEvent = function() {
                this.owner.off(Laya.Event.CLICK, this, this.closeView);
                a.prototype.removeEvent.call(this);
            }, d.prototype.openView = function(b) {
                var c = this;
                a.prototype.openView.call(this, b);
                this.tipLbl.text = b;
                Laya.timer.once(2e3, this, function() {
                    c.closeView();
                });
            }, d;
        }(a("./BaseView")["default"]);
        f["default"] = a;
    }, {
        "./BaseView": 46
    }],
    66: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        a = function(a) {
            function d() {
                var b = a.call(this) || this;
                return b.M_left = 0, b.M_right = 0, b.L_OR_R = !1, b.zuoyou = !1, b.Addcionain = new Laya.Tween(), b.Addcionain1 = new Laya.Tween(), b.shezhi_thefish(), b;
            }
            return __extends(d, a), d.prototype.shezhi_thefish = function() {
                this.skin = "mainview/zhuye_jinbi02.png";
                this.anchorY = this.anchorX = .5;
                this.rotation = 0;
                this.alpha = 1;
            }, d.prototype.Initialize = function() {
                this.x = 300;
                this.y = 640;
                this.rotation = 0;
                this.alpha = 1;
            }, d.prototype.Random_Int = function(a, c) {
                return a + Math.round(Math.random() * (c - a));
            }, d.prototype.OVERhuoquAIn = function(a, c, d) {
                var b = this;
                this.Addcionain.complete();
                this.Addcionain1.complete();
                this.visible = !1;
                this.scale(1, 1);
                a = this.Random_Int(c.x - 110, c.x + 110);
                c = this.Random_Int(c.y - 100, c.y + 100);
                this.pos(a, c);
                this.scale(0, 0);
                this.rotation = 0;
                this.visible = !0;
                this.Addcionain1.to(this, {
                    rotation: 360
                }, 200, null, Laya.Handler.create(this, function() {
                    b.Addcionain.to(b, {
                        scaleX: 2,
                        scaleY: 2
                    }, 100, null, Laya.Handler.create(b, function() {
                        b.Addcionain.to(b, {
                            x: d.x,
                            y: d.y,
                            scaleX: 1,
                            scaleY: 1,
                            rotation: 720
                        }, 300, null, Laya.Handler.create(b, function() {
                            b.visible = !1;
                            b.rotation = 0;
                            b.scale(1, 1);
                            b.pos(300, 640);
                            b.removeSelf();
                            Laya.Pool.recover("CONINAIN", b);
                        }));
                    }));
                }));
                this.Addcionain.to(this, {
                    scaleX: 2.2,
                    scaleY: 2.2
                }, 200, null, Laya.Handler.create(this, function() {}));
            }, d;
        }(Laya.Image);
        f.cionAni = a;
    }, {}],
    67: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var e = a("../../tools/MyUtils");
        a = function(a) {
            function b() {
                return a.call(this) || this;
            }
            return __extends(b, a), b.prototype.onAwake = function() {
                this.bgImg = this.owner.getChildByName("imgBg");
                this.rankImg = this.owner.getChildByName("rankImg");
                this.rankLab = this.owner.getChildByName("rankLab");
                this.avatarImg = this.owner.getChildByName("avatarImg");
                this.nameLab = this.owner.getChildByName("nameLab");
                this.scoreLab = this.owner.getChildByName("scoreLab");
            }, b.prototype.updateItem = function(a) {
                if (this.owner) {
                    switch (this.owner.active = !0, this.rankImg.visible = !1, this.rankLab.text = a.index || "-", a.index) {
                        case 1:
                            this.rankLab.text = "", this.rankImg.skin = "rank/img_rank" + a.index + ".png", this.rankImg.visible = !0;
                    }
                    if (this.avatarImg.skin = "rank/img_default_avatar.png", !e["default"].isNull(a.headImage) && "youke" != a.headImage) {
                        var b = a.headImage.replace("/132", "/46");
                        this.avatarImg.skin = b;
                    }
                    this.nameLab.text = a.nickname ? a.nickname : "神秘玩家";
                    this.scoreLab.text = a.score + "关";
                }
            }, b.prototype.clean = function() {
                this.owner && (this.owner.active = !1);
            }, b;
        }(Laya.Script);
        f["default"] = a;
    }, {
        "../../tools/MyUtils": 44
    }],
    68: [function(a, m, f) {
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        m = a("../BaseView");
        var e = a("../../mgrCommon/PlatformMgr"),
            d = a("../../tools/MyUtils"),
            b = a("../../mgrCommon/HttpMgr"),
            c = a("./RankItem"),
            n = a("../../models/UserData"),
            l = a("../../mgrCommon/EventMgr"),
            g = a("../../mgrCommon/EventDefine");
        a = function(a) {
            function f() {
                return null !== a && a.apply(this, arguments) || this;
            }
            return __extends(f, a), f.prototype.onAwake = function() {
                a.prototype.onAwake.call(this);
                this.closeBtn = this.owner.getChildByName("btnClose");
                var b = this.owner.getChildByName("content");
                this.friendBtn = b.getChildByName("friendBtn");
                this.worldBtn = b.getChildByName("worldBtn");
                this.normalFriendRank = b.getChildByName("normalFriendRank");
                this.normalWorldRank = b.getChildByName("normalWorldRank");
                this.selectFriendRank = this.normalFriendRank.getChildByName("selectFriendRank");
                this.selectWorldRank = this.normalWorldRank.getChildByName("selectWorldRank");
                this.selectLine = b.getChildByName("select");
                b.y += this.offset.y / 2;
                this.worldRankList = b.getChildByName("worldRankList");
                this.worldRankList.array = [];
                this.worldRankList.renderHandler = new Laya.Handler(this, this.onRender);
                this.worldRankList.vScrollBarSkin = "";
                this.selfRankSprite = b.getChildByName("selfRankItem");
                this.selfRankITem = this.selfRankSprite.getComponent(c["default"]);
                d["default"].autoScreenSize([this.closeBtn]);
                this.selfRankSprite.visible = !1;
            }, f.prototype.setMyRankInfo = function() {
                this.selfRankITem.updateItem(this.selfRankData);
            }, f.prototype.onRender = function(a, b) {
                a.getComponent(c["default"]).updateItem(a.dataSource);
            }, f.prototype.addEvent = function() {
                a.prototype.addEvent.call(this);
                this.closeBtn.on(Laya.Event.CLICK, this, this.closeView);
                this.worldBtn.on(Laya.Event.CLICK, this, this.worldRankClick);
                this.friendBtn.on(Laya.Event.CLICK, this, this.friendRankClick);
            }, f.prototype.getWorldData = function() {
                var a = this;
                b["default"].instance.getWorldRank({
                    success: function(b) {
                        a.worldData = b.rank;
                        a.selfRankData = {
                            index: b.myIndex,
                            nickname: n["default"].nickName,
                            headImage: n["default"].avatarUrl,
                            score: n["default"].level ? n["default"].level : 1
                        };
                        b.myIndex && 0 < b.index && b.myIndex <= a.worldData.length && (a.selfRankData = a.worldData[b.myIndex - 1]);
                        a.setWorldRankDta();
                    }
                });
            }, f.prototype.setWorldRankDta = function() {
                this.setMyRankInfo();
                this.worldRankList.array = this.worldData;
                this.worldRankList.refresh();
            }, f.prototype.worldRankClick = function() {
                this.selectFriendRank.visible = !1;
                this.selectWorldRank.visible = !0;
                this.worldRankList.visible = !0;
                this.selfRankSprite.visible = !0;
                this.selectLine.x = 75;
                this.closeFriendRank();
                this.worldData ? this.setWorldRankDta() : this.getWorldData();
            }, f.prototype.friendRankClick = function() {
                this.selectFriendRank.visible = !0;
                this.selectWorldRank.visible = !1;
                this.worldRankList.visible = !1;
                this.selfRankSprite.visible = !1;
                this.selectLine.x = -145;
                e["default"].subDomain && (this.wxOpenDataView || (this.wxOpenDataView = new Laya.WXOpenDataViewer(), this.owner.addChild(this.wxOpenDataView)), this.wxOpenDataView.width = 561, this.wxOpenDataView.height = 828, this.wxOpenDataView.pos(95, 279), this.wxOpenDataView.y += this.offset.y / 2, e["default"].callSubDomainMethodByProxy("setOpenView", this.wxOpenDataView), e["default"].callSubDomainMethodByProxy("openFriendRank", {
                    _type: this._data._type
                }));
            }, f.prototype.closeFriendRank = function() {
                e["default"].subDomain && (this.wxOpenDataView && (this.wxOpenDataView.destroy(), this.wxOpenDataView = null), e["default"].callSubDomainMethodByProxy("closeFriendRank"));
            }, f.prototype.removeEvent = function() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.closeView);
                this.worldBtn.off(Laya.Event.CLICK, this, this.worldRankClick);
                this.friendBtn.off(Laya.Event.CLICK, this, this.friendRankClick);
                a.prototype.removeEvent.call(this);
            }, f.prototype.openView = function(b) {
                a.prototype.openView.call(this, b);
                e["default"].subDomain ? this.friendRankClick() : this.worldRankClick();
            }, f.prototype.closeView = function() {
                this.worldData = null;
                e["default"].subDomain && this.closeFriendRank();
                a.prototype.closeView.call(this);
            }, f.prototype.onEnable = function() {
                a.prototype.onEnable.call(this);
                e["default"].callAPIMethodByProxy("destoryAllBannerAd");
            }, f.prototype.onDisable = function() {
                a.prototype.onDisable.call(this);
                l["default"].instance.emit(g.EventDefine.BANNER_SHOW);
            }, f;
        }(m["default"]);
        f["default"] = a;
    }, {
        "../../mgrCommon/EventDefine": 21,
        "../../mgrCommon/EventMgr": 22,
        "../../mgrCommon/HttpMgr": 24,
        "../../mgrCommon/PlatformMgr": 25,
        "../../models/UserData": 33,
        "../../tools/MyUtils": 44,
        "../BaseView": 46,
        "./RankItem": 67
    }]
}, {}, [2]);