var __extends = this && this.__extends || function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
    };
    return function(e, a) {
        function __() {
            this.constructor = e;
        }
        t(e, a), e.prototype = null === a ? Object.create(a) : (__.prototype = a.prototype, new __());
    };
}();
! function() {
    return function r(t, e, a) {
        function o(n, s) {
            if (!e[n]) {
                if (!t[n]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(n, !0);
                    if (i) return i(n, !0);
                    var h = new Error("Cannot find module '" + n + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var d = e[n] = {
                    exports: {}
                };
                t[n][0].call(d.exports, function(e) {
                    return o(t[n][1][e] || e);
                }, d, d.exports, r, t, e, a);
            }
            return e[n].exports;
        }
        for (var i = "function" == typeof require && require, n = 0; n < a.length; n++) o(a[n]);
        return o;
    };
}()({
    1: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./scripts/views/ClearingView_kxhs"),
            n = t("./scripts/uiComp/AppLite"),
            o = t("./scripts/uiComp/AppBanner"),
            s = t("./scripts/views/CollectView_kxhs"),
            r = t("./scripts/views/SkinView_kxhs"),
            l = t("./scripts/views/GameView_kxhs"),
            h = t("./scripts/views/HomeView_kxhs"),
            d = t("./scripts/uiComp/GameAppList"),
            u = t("./scripts/views/kxhs1"),
            p = t("./scripts/views/LoginView_kxhs"),
            c = t("./scripts/views/OverView_kxhs"),
            f = t("./scripts/views/RankView_kxhs"),
            m = t("./scripts/uiComp/CmWxAppLite"),
            g = function() {
                function GameConfig() {}
                return GameConfig.init = function() {
                    var t = Laya.ClassUtils.regClass;
                    t("scripts/views/ClearingView_kxhs.ts", i.default), t("scripts/uiComp/AppLite.ts", n.default), t("scripts/uiComp/AppBanner.ts", o.default), t("scripts/views/CollectView_kxhs.ts", s.default), t("scripts/views/SkinView_kxhs.ts", r.default), t("scripts/views/GameView_kxhs.ts", l.default), t("scripts/views/HomeView_kxhs.ts", h.default), t("scripts/uiComp/GameAppList.ts", d.default), t("scripts/views/kxhs1.ts", u.default), t("scripts/views/LoginView_kxhs.ts", p.default), t("scripts/views/OverView_kxhs.ts", c.default), t("scripts/views/RankView_kxhs.ts", f.default), t("scripts/uiComp/CmWxAppLite.ts", m.default);
                }, GameConfig.width = 750, GameConfig.height = 1337, GameConfig.scaleMode = "showall", GameConfig.screenMode = "none", GameConfig.alignV = "middle", GameConfig.alignH = "center", GameConfig.startScene = "views/login.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1, GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0, GameConfig;
            }();
        a.default = g, g.init();
    }, {
        "./scripts/uiComp/AppBanner": 24,
        "./scripts/uiComp/AppLite": 26,
        "./scripts/uiComp/CmWxAppLite": 27,
        "./scripts/uiComp/GameAppList": 28,
        "./scripts/views/ClearingView_kxhs": 32,
        "./scripts/views/CollectView_kxhs": 33,
        "./scripts/views/GameView_kxhs": 34,
        "./scripts/views/HomeView_kxhs": 35,
        "./scripts/views/LoginView_kxhs": 36,
        "./scripts/views/OverView_kxhs": 37,
        "./scripts/views/RankView_kxhs": 38,
        "./scripts/views/SkinView_kxhs": 39,
        "./scripts/views/kxhs1": 40
    }],
    2: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./GameConfig"),
            n = t("./scripts/LayaSample");
        new(function() {
            function Main() {
                var t = Laya.Browser.height / Laya.Browser.width,
                    e = t * i.default.width;
                n.default.screen.realPxRatio = e / Laya.Browser.clientHeight, n.default.screen.allScreen = t > 17 / 9, n.default.screen.offsetTop = (e - i.default.height) / 2, Laya3D.init(i.default.width, i.default.height);
                Laya.stage.scaleMode = "showall", Laya.stage.alignV = "center", Laya.stage.alignH = "center";
                if (typeof loadRuntime !== 'undefined') {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                }
                if (typeof getAdapterInfo !== "undefined") {
                    var stage = Laya.stage;
                    var info = getAdapterInfo({
                        width: i.default.width,
                        height: i.default.height,
                        scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
                    });
                    stage.designWidth = info.w;
                    stage.designHeight = info.h;
                    stage.width = info.rw;
                    stage.height = info.rh;
                    stage.scale(info.scaleX, info.scaleY);
                }
                Laya.MouseManager.multiTouchEnabled = !0, Laya.URL.exportSceneToJson = i.default.exportSceneToJson, (i.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), i.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), i.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return Main.prototype.onVersionLoaded = function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, Main.prototype.onConfigLoaded = function() {
                i.default.startScene && Laya.Scene.open(i.default.startScene);
            }, Main;
        }())();
    }, {
        "./GameConfig": 1,
        "./scripts/LayaSample": 3
    }],
    3: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./Utils"),
            n = t("./kxhs_Mgr/StorageMgr"),
            o = t("./kxhs_Mgr/SoundMgr"),
            s = t("./kxhs_Mgr/NetMgr"),
            r = t("./kxhs_Mgr/WxMgr"),
            l = t("./kxhs_Mgr/ConfigMgr"),
            h = t("./platforms/WxAd"),
            d = t("./kxhs_Mgr/GameMgr"),
            u = t("./kxhs_Mgr/TweenMgr"),
            p = t("./kxhs_Mgr/CommonData"),
            c = function() {
                function LayaSample() {}
                return Object.defineProperty(LayaSample, "gameMgr", {
                    get: function() {
                        return this._gameMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "glEvent", {
                    get: function() {
                        return this._eventListener;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "soundMgr", {
                    get: function() {
                        return void 0 === this._soundMgr && (this._soundMgr = new o.default()), this._soundMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "storageMgr", {
                    get: function() {
                        return void 0 === this._storageMge && (this._storageMge = new n.default()), this._storageMge;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "netMgr", {
                    get: function() {
                        return this._netMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "commonData", {
                    get: function() {
                        return this._commonData;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "utils", {
                    get: function() {
                        return this._utils;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "tweenMgr", {
                    get: function() {
                        return this._tweenMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "configMgr", {
                    get: function() {
                        return void 0 === this._configMgr && (this._configMgr = new l.default()), this._configMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "adMgr", {
                    get: function() {
                        return void 0 === this._adMgr && (this._adMgr = this.wxAd), this._adMgr;
                    },
                    set: function(t) {
                        this._adMgr = t;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "wxMgr", {
                    get: function() {
                        return void 0 === this._wxMgr && (this._wxMgr = new r.default()), this._wxMgr;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LayaSample, "wxAd", {
                    get: function() {
                        return void 0 === this._wxAd && (this._wxAd = new h.default()), this._wxAd;
                    },
                    enumerable: !0,
                    configurable: !0
                }), LayaSample._eventListener = new Laya.EventDispatcher(), LayaSample._gameMgr = new d.default(), LayaSample._netMgr = new s.default(), LayaSample._utils = new i.default(), LayaSample._tweenMgr = new u.default(), LayaSample._commonData = new p.default(), LayaSample.screen = {
                    realPxRatio: 0,
                    offsetTop: 0,
                    allScreen: !1
                }, LayaSample;
            }();
        a.default = c;
    }, {
        "./Utils": 4,
        "./kxhs_Mgr/CommonData": 12,
        "./kxhs_Mgr/ConfigMgr": 13,
        "./kxhs_Mgr/GameMgr": 14,
        "./kxhs_Mgr/NetMgr": 15,
        "./kxhs_Mgr/SoundMgr": 16,
        "./kxhs_Mgr/StorageMgr": 17,
        "./kxhs_Mgr/TweenMgr": 18,
        "./kxhs_Mgr/WxMgr": 19,
        "./platforms/WxAd": 21
    }],
    4: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./LayaSample"),
            n = function() {
                function Utils() {}
                return Utils.prototype.addClickEvent = function(t, e, a, n) {
                    if (t.offAllCaller(e), t instanceof Laya.Button) {
                        t.on(Laya.Event.CLICK, e, function(t) {
                            t.stopPropagation(), a && a.call(e, t), i.default.soundMgr.play("click");
                        });
                    } else {
                        t.anchorX, t.anchorY, t.x, t.y;
                        var o = 1 * t.scaleX,
                            s = 1 * t.scaleX;
                        t.on(Laya.Event.MOUSE_DOWN, e, function(e) {
                            e.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: .9,
                                scaleY: .9
                            }, 60);
                        });
                        t.on(Laya.Event.MOUSE_UP, e, function(r) {
                            r.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: o,
                                scaleY: s
                            }, 60), a && a.call(e, r), (0 === n || n) && i.default.soundMgr.play(n);
                        });
                        t.on(Laya.Event.MOUSE_OUT, e, function(e) {
                            e.stopPropagation(), Laya.Tween.to(t, {
                                scaleX: o,
                                scaleY: s
                            }, 60);
                        });
                    }
                }, Utils.prototype.getRGB = function(t) {
                    var e = [],
                        a = [],
                        i = t.replace(/#/, "");
                    if (3 == i.length) {
                        for (var n = [], o = 0; o < 3; o++) n.push(i.charAt(o) + i.charAt(o));
                        i = n.join("");
                    }
                    for (o = 0; o < 3; o++) e[o] = "0x" + i.substr(2 * o, 2), a.push(parseInt(e[o]));
                    return new Laya.Vector3(a[0] / 255, a[1] / 255, a[2] / 255);
                }, Utils.prototype.getRGBA = function(t, e) {
                    var a = 0 == e && e ? e : 1,
                        i = [],
                        n = [],
                        o = t.replace(/#/, "");
                    if (3 == o.length) {
                        for (var s = [], r = 0; r < 3; r++) s.push(o.charAt(r) + o.charAt(r));
                        o = s.join("");
                    }
                    for (r = 0; r < 3; r++) i[r] = "0x" + o.substr(2 * r, 2), n.push(parseInt(i[r]));
                    return new Laya.Vector4(n[0] / 255, n[1] / 255, n[2] / 255, a);
                }, Utils.prototype.tweenShake = function(t, e) {
                    var a = new Laya.TimeLine(),
                        i = t.pivotX;
                    t.pivotX = t.width / 2, a.addLabel("shake1", 0).to(t, {
                        rotation: t.rotation + 5
                    }, 50, null, 0).addLabel("shake2", 0).to(t, {
                        rotation: t.rotation - 6
                    }, 50, null, 0).addLabel("shake3", 0).to(t, {
                        rotation: t.rotation - 13
                    }, 50, null, 0).addLabel("shake4", 0).to(t, {
                        rotation: t.rotation + 3
                    }, 50, null, 0).addLabel("shake5", 0).to(t, {
                        rotation: t.rotation - 5
                    }, 50, null, 0).addLabel("shake6", 0).to(t, {
                        rotation: t.rotation + 2
                    }, 50, null, 0).addLabel("shake7", 0).to(t, {
                        rotation: t.rotation - 8
                    }, 50, null, 0).addLabel("shake8", 0).to(t, {
                        rotation: t.rotation + 3
                    }, 50, null, 0).addLabel("shake9", 0).to(t, {
                        rotation: 0
                    }, 50, null, 0), e ? Laya.timer.once(500, this, function() {
                        a.destroy(), t.rotation = 0, t.pivotX = i;
                    }) : a.on(Laya.Event.COMPLETE, this, function() {
                        a.destroy(), t.rotation = 0, t.pivotX = i;
                    }), a.play(0, !0);
                }, Utils.prototype.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var a = Math.max(t.length, e.length); t.length < a;) t.push("0");
                    for (; e.length < a;) e.push("0");
                    for (var i = 0; i < a; i++) {
                        var n = parseInt(t[i]),
                            o = parseInt(e[i]);
                        if (n > o) return 1;
                        if (n < o) return -1;
                    }
                    return 0;
                }, Utils.prototype.setMaterial = function(t) {}, Utils.prototype.format = function(t) {
                    function add0(t) {
                        return t < 10 ? "0" + t : t;
                    }
                    var e = new Date(t),
                        a = e.getFullYear(),
                        i = e.getMonth() + 1,
                        n = e.getDate();
                    return a + "-" + add0(i) + "-" + add0(n);
                }, Utils.prototype.loadSubpackage = function(t, e, a) {
                    Laya.Browser.onWeiXin && wx.loadSubpackage({
                        name: t,
                        success: function(i) {
                            console.log("分包加载成功 " + t), a.call(e, i, !0);
                        },
                        fail: function(i) {
                            console.error("分包加载失败 " + t), a.call(e, i, !1);
                        }
                    });
                }, Utils.prototype.getRandoms = function(t, e, a) {
                    void 0 === a && (a = 0);
                    for (var i = [], n = [], o = a; o < e; o++) i.push(o);
                    i = i.sort(function() {
                        return Math.random() - Math.random();
                    });
                    for (o = 0; o < t; o++) n.push(i[o]);
                    return n;
                }, Utils;
            }();
        a.default = n;
    }, {
        "./LayaSample": 3
    }],
    5: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function EffectAutoDestroy() {
                return t.call(this) || this;
            }
            return __extends(EffectAutoDestroy, t), EffectAutoDestroy.prototype.onAwake = function() {}, EffectAutoDestroy.prototype.onEnable = function() {
                Laya.stage.timerOnce(2e3, this, function() {
                    this.owner.destroy();
                });
            }, EffectAutoDestroy.prototype.onDisable = function() {}, EffectAutoDestroy;
        }(Laya.Script);
        a.default = i;
    }, {}],
    6: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./EffectAutoDestroy"),
            n = function(t) {
                function EffectCtrl() {
                    return t.call(this) || this;
                }
                return __extends(EffectCtrl, t), EffectCtrl.prototype.init = function(t) {
                    this.Scene = t;
                    var e = this.Scene.getChildByName("GameObject").getChildByName("Role").getChildByName("skin");
                    this.FX_WR_Ribbon = e.getChildByName("FX_WR_Ribbon"), this.FX_WR_Ribbon.active = !1, this.FX_WR_Hit_L = e.getChildByName("FX_WR_Hit_L"), this.FX_WR_Hit_L.active = !1, this.FX_WR_Hit_S = e.getChildByName("FX_WR_Hit_S"), this.FX_WR_Hit_S.active = !1, this.FX_WR_balloon_Die = this.Scene.getChildByName("FX_WR_balloon_Die"), this.FX_WR_balloon_Die.active = !1;
                }, EffectCtrl.prototype.onEnable = function() {}, EffectCtrl.prototype.onDisable = function() {}, EffectCtrl.prototype.creatNewEffect = function(t, e, a, n) {
                    var o, s;
                    switch (void 0 === e && (e = this.Scene), void 0 === a && (a = new laya.d3.math.Vector3()), void 0 === n && (n = 2e3), t) {
                        case 0:
                            "FX_WR_Ribbon", s = this.FX_WR_Ribbon, e = this.FX_WR_Ribbon.parent;
                            break;
                        case 1:
                            "FX_WR_Hit_L", s = this.FX_WR_Hit_L;
                            break;
                        case 2:
                            "FX_WR_Hit_S", s = this.FX_WR_Hit_S;
                            break;
                        case 3:
                            "FX_WR_balloon_Die", s = this.FX_WR_balloon_Die;
                    }
                    null == e && (e = this.Scene), o = Laya.Sprite3D.instantiate(s, e), 0 == t && (o.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)), o.transform.localPosition = a, o.addComponent(i.default), o.active = !0;
                }, EffectCtrl;
            }(Laya.Script);
        a.default = n;
    }, {
        "./EffectAutoDestroy": 5
    }],
    7: [function(t, e, a) {
        "use strict";
        var i, n;
        Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.ready = 1] = "ready", t[t.start = 2] = "start", t[t.pause = 3] = "pause", t[t.death = 4] = "death";
            }(i || (i = {})),
            function(t) {
                t[t.stop = 0] = "stop", t[t.move = 1] = "move", t[t.fly = 2] = "fly", t[t.death = 3] = "death";
            }(n || (n = {}));
        var o = t("../LayaSample"),
            s = t("./RoadPlaneCtrl"),
            r = t("./EffectCtrl"),
            l = function(t) {
                function GameCtrl() {
                    var e = t.call(this) || this;
                    return e.deltatime = .016, e.speed = 60, e.verticalSpeed = 0, e.changeToPos = .025, e.gravity = 100, e.currentScore = 0, e.CameraMainPos = new Laya.Vector3(0, 10.88, -14.31), e.CameraGamePos = new Laya.Vector3(0, 22.98, -24.42), e.currentSkinId = 0, e;
                }
                return __extends(GameCtrl, t), GameCtrl.prototype.onAwake = function() {
                    this.gamestate = i.pause, this.playState = n.stop, Laya.stage.on("move", this, this.move), Laya.stage.on("AgainGame", this, this.continueGame);
                }, GameCtrl.prototype.init = function(t, e) {
                    this.loadScene = t, this.player = e, this.CameraPos = this.player.getChildByName("CameraPos"), this.Main_Camera = this.CameraPos.getChildByName("Main Camera"), this.Main_Camera.transform.localPosition = this.CameraMainPos, this.isMainView = !0, this.role = this.player.getChildByName("Role"), this.skin = this.role.getChildByName("skin"), this.FX_WR_Water_Behind = this.skin.getChildByName("FX_WR_Water_Behind"), this.FX_WR_Water_Behind.active = !1, this.RoadPlaneCtrl = this.player.getComponent(s.default), this.player.addComponent(r.default).init(this.loadScene), this.EffectCtrl = this.player.getComponent(r.default), this.ani = this.role.getChildByName("skin").getComponent(Laya.Animator), this.roleAngle = new Laya.Vector3(), this.hitResult = new Laya.HitResult(), this.from = new Laya.Vector3(), this.to = new Laya.Vector3(), this.hitResults = [], this.curPlane = null, this.hitPos, this.hitNormal, this.Destination = new Laya.Vector3(), this.prepareGame();
                }, GameCtrl.prototype.onEnable = function() {}, GameCtrl.prototype.onDisable = function() {}, GameCtrl.prototype.onUpdate = function() {
                    this.deltatime = Laya.timer.delta / 1e3;
                    var t = this.role.transform.position;
                    this.from = new Laya.Vector3(t.x, t.y + 6, t.z), this.to = new Laya.Vector3(t.x, t.y - 4, t.z), this.loadScene.physicsSimulation.raycastAllFromTo(this.from, this.to, this.hitResults);
                    var e = "";
                    switch (null != this.curPlane && (e = this.curPlane.name), this.hitResults.length > 0 ? (this.curPlane = this.hitResults[0].collider.owner, this.hitPos = this.hitResults[0].point, this.hitNormal = this.hitResults[0].normal) : this.curPlane = null, null != this.curPlane ? this.curPlane.name != e && (e = this.curPlane.name, Laya.stage.event("ShowFloor", e)) : "" != e && (e = "", Laya.stage.event("ShowFloor", e)), this.gamestate) {
                        case i.ready:
                            break;
                        case i.start:
                            this.currentScore = Math.floor(this.player.transform.position.z), o.default.glEvent.event("update_speed_event", {
                                speed: this.currentScore
                            });
                        case i.pause:
                        case i.death:
                    }
                    switch (this.playState) {
                        case n.stop:
                            break;
                        case n.move:
                            if (this.verticalSpeed = 0, null == this.curPlane) this.takeOff();
                            else if ("Zhangaiwu" == this.curPlane.name && (o.default.soundMgr.play("pengzhuang"), this.overGame(), console.log("游戏结束"), Laya.stage.event("OverGame"), Laya.timer.once(1e3, this, function(t) {
                                    o.default.glEvent.event("over_game_event");
                                }), o.default.soundMgr.play("shibai")), 1 == this.RoadPlaneCtrl.curPlaneObj.planeType || 0 == this.RoadPlaneCtrl.curPlaneObj.planeType) {
                                this.role.transform.position = new Laya.Vector3(this.role.transform.position.x, this.hitPos.y + .8, this.role.transform.position.z);
                                var a = 180 * Math.atan2(this.hitNormal.x, this.hitNormal.y) / Math.PI;
                                Laya.Vector3.lerp(this.roleAngle, new Laya.Vector3(0, 0, -a), .2, this.roleAngle), this.role.transform.rotationEuler = this.roleAngle;
                            } else this.role.transform.localPosition = new Laya.Vector3(this.role.transform.localPosition.x, 0, this.role.transform.localPosition.z);
                            this.player.transform.translate(new Laya.Vector3(0, 0, this.speed * this.deltatime));
                            break;
                        case n.fly:
                            if (this.verticalSpeed < 0 && (Laya.Tween.to(this.Main_Camera.transform, {
                                    localPositionX: this.CameraGamePos.x,
                                    localPositionY: this.CameraGamePos.y,
                                    localPositionZ: this.CameraGamePos.z
                                }, 1e3), this.isMainView = !1), this.player.transform.position.z > this.Destination.z)
                                if (this.isMainView && (Laya.Tween.to(this.Main_Camera.transform, {
                                        localPositionX: this.CameraGamePos.x,
                                        localPositionY: this.CameraGamePos.y,
                                        localPositionZ: this.CameraGamePos.z
                                    }, 1e3), this.isMainView = !1), null != this.curPlane) {
                                    if ("Yuantai_huai" == this.curPlane.name) return o.default.soundMgr.play("pengzhuang"), this.overGame(), console.log("游戏结束"), Laya.stage.event("OverGame"), Laya.timer.once(1e3, this, function(t) {
                                        o.default.glEvent.event("over_game_event");
                                    }), o.default.soundMgr.play("shibai"), this.curPlane.active = !1, void this.EffectCtrl.creatNewEffect(3, null, this.skin.transform.position);
                                    this.playState = n.move, this.RoadPlaneCtrl.setCurPlane(this.curPlane), this.ani.crossFade("luodi", .2), this.FX_WR_Water_Behind.active = !0, 1 == this.RoadPlaneCtrl.curPlaneObj.planeType ? (o.default.soundMgr.play("luodisheng1"), this.EffectCtrl.creatNewEffect(1, null, this.skin.transform.position)) : (o.default.soundMgr.play("luodisheng2"), this.EffectCtrl.creatNewEffect(2, null, this.skin.transform.position));
                                } else this.overGame(), Laya.stage.event("OverGame"), o.default.soundMgr.play("shibai"), Laya.timer.once(1e3, this, function(t) {
                                    o.default.glEvent.event("over_game_event");
                                });
                            this.role.transform.localPosition = new Laya.Vector3(this.role.transform.localPosition.x, 0, this.role.transform.localPosition.z), this.role.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this.player.transform.translate(new Laya.Vector3(0, this.verticalSpeed * this.deltatime, 0)), this.verticalSpeed -= this.gravity * this.deltatime, this.player.transform.translate(new Laya.Vector3(0, 0, this.speed * this.deltatime));
                            break;
                        case n.death:
                            this.role.transform.translate(new Laya.Vector3(0, this.verticalSpeed * this.deltatime, 0)), this.verticalSpeed -= this.gravity * this.deltatime;
                    }
                }, GameCtrl.prototype.move = function(t) {
                    this.gamestate == i.ready ? (this.gamestate = i.start, this.playState = n.move) : this.gamestate == i.start && this.role.transform.translate(new Laya.Vector3(-t * this.changeToPos, 0, 0));
                }, GameCtrl.prototype.takeOff = function() {
                    var t = this.RoadPlaneCtrl.getCurPos(),
                        e = t.z + this.RoadPlaneCtrl.curPlaneObj.paodaoLenth - this.player.transform.position.z;
                    e > 40 ? (this.Destination = new Laya.Vector3(0, t.y, this.player.transform.position.z + 40), e = 40) : (e = (t = this.RoadPlaneCtrl.getNextPos()).z - this.player.transform.position.z, this.Destination = t);
                    var a = e / this.speed,
                        i = t.y - this.player.transform.position.y;
                    this.verticalSpeed = (i + this.gravity * a * a / 2) / a, this.playState = n.fly, this.ani.crossFade("qitiao2", .2), this.FX_WR_Water_Behind.active = !1, e > 60 && (Laya.Tween.to(this.Main_Camera.transform, {
                        localPositionX: this.CameraMainPos.x,
                        localPositionY: this.CameraMainPos.y,
                        localPositionZ: this.CameraMainPos.z
                    }, 1e3), this.isMainView = !0);
                }, GameCtrl.prototype.startGame = function() {
                    this.gamestate = i.ready, this.playState = n.stop, this.FX_WR_Water_Behind.active = !0, Laya.Tween.to(this.Main_Camera.transform, {
                        localPositionX: this.CameraGamePos.x,
                        localPositionY: this.CameraGamePos.y,
                        localPositionZ: this.CameraGamePos.z
                    }, 1e3), this.isMainView = !1;
                }, GameCtrl.prototype.continueGame = function() {
                    this.verticalSpeed = 0, this.player.transform.position = new Laya.Vector3(0, this.RoadPlaneCtrl.getCurPos().y, this.RoadPlaneCtrl.getCurPos().z);
                    var t = this.RoadPlaneCtrl.curPlaneObj.offset;
                    this.role.transform.localPosition = new Laya.Vector3(t, 0, 0), this.gamestate = i.ready, this.playState = n.stop, this.FX_WR_Water_Behind.active = !0;
                }, GameCtrl.prototype.overGame = function() {
                    this.playState = n.death, this.gamestate = i.pause, console.log("成绩：", this.currentScore), o.default.commonData.newScore = this.currentScore;
                }, GameCtrl.prototype.pauseGAme = function() {
                    this.playState = n.stop, this.gamestate = i.pause;
                }, GameCtrl.prototype.prepareGame = function() {
                    this.verticalSpeed = 0, this.playState = n.stop, this.gamestate = i.pause, this.RoadPlaneCtrl.ResetRoad(), this.Main_Camera.transform.localPosition = this.CameraMainPos, this.isMainView = !0, this.SetSkin(this.currentSkinId), this.currentSkinId = 0, this.player.transform.position = new Laya.Vector3(0, this.RoadPlaneCtrl.getCurPos().y, this.RoadPlaneCtrl.getCurPos().z), this.role.transform.position = this.player.transform.position, this.role.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this.ani.crossFade("daiji", .2);
                }, GameCtrl.prototype.SetSkin = function(t) {
                    void 0 === t && (t = 0);
                    this.skin.getChildByName("HuabanPos");
                    for (var e = 0; e < 5; e++) {
                        this.skin.getChildByName("pifu0" + e.toString()).active = !1;
                    }
                    this.skin.getChildByName("pifu0" + t.toString()).active = !0;
                }, GameCtrl;
            }(Laya.Script);
        a.default = l;
    }, {
        "../LayaSample": 3,
        "./EffectCtrl": 6,
        "./RoadPlaneCtrl": 11
    }],
    8: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function InputCtrl() {
                var e = t.call(this) || this;
                return e.intType = 1e3, e.numType = 1e3, e.strType = "hello laya", e.boolType = !0, e;
            }
            return __extends(InputCtrl, t), InputCtrl.prototype.onAwake = function() {
                this.isPress = !1, this.startPos = new Laya.Vector2(), this.direction = new Laya.Vector2(), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onUp);
            }, InputCtrl.prototype.onDown = function() {
                this.isPress = !0, this.startPos = new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY);
            }, InputCtrl.prototype.onUp = function() {
                this.isPress = !1;
            }, InputCtrl.prototype.onEnable = function() {}, InputCtrl.prototype.onDisable = function() {}, InputCtrl.prototype.onUpdate = function() {
                this.isPress && (this.direction = new Laya.Vector2(Laya.stage.mouseX - this.startPos.x, 0), this.startPos = new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY), Laya.stage.event("move", this.direction.x));
            }, InputCtrl;
        }(Laya.Script);
        a.default = i;
    }, {}],
    9: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function Obstacle() {
                var e = t.call(this) || this;
                return e.intType = 1e3, e.numType = 1e3, e.strType = "hello laya", e.boolType = !0, e;
            }
            return __extends(Obstacle, t), Obstacle.prototype.onEnable = function() {}, Obstacle.prototype.onDisable = function() {}, Obstacle.prototype.onUpdate = function() {
                this.owner.transform.rotate(new Laya.Vector3(0, .1, 0));
            }, Obstacle;
        }(Laya.Script);
        a.default = i;
    }, {}],
    10: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function PlaneObj() {
                var e = t.call(this) || this;
                return e.planeType = 1, e.offset = 0, e.paodaoLenth = 0, e.isDouble = !1, e.planeType = 1, e.paodaoLenth = 0, e.offset = 0, e.isDouble = !1, e;
            }
            return __extends(PlaneObj, t), PlaneObj.prototype.onEnable = function() {}, PlaneObj.prototype.onDisable = function() {}, PlaneObj.prototype.onUpdate = function() {}, PlaneObj;
        }(Laya.Script);
        a.default = i;
    }, {}],
    11: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./PlaneObj"),
            n = t("./Obstacle"),
            o = function(t) {
                function RoadPlaneCtrl() {
                    var e = t.call(this) || this;
                    return e.minHight = -80, e.downRate = .95, e.downValue = -10, e.downBigValue = -50, e.upValue = 80, e.paodaoNormalRate = .3, e.yuantaiNormalRate = .4, e.paodaoChangeRate = .6, e.yuantaiChangeRate = .3, e.badYuantaiRate = 0, e.badYuantaiRiseValue = .3, e.planeGroupNumber = 5, e.planeOffset = 4, e.yuantaiPlaneSpace = 20, e.paodaoPlaneSpace = 40, e.tiaotaiPlaneSpace = 120, e.bigDownExtraSpace = 40, e.planeList = new Array(), e.curIndex = 0, e.curPlaneObj = null, e.curGroup = 0, e.curPlaneOffset = 0, e;
                }
                return __extends(RoadPlaneCtrl, t), RoadPlaneCtrl.prototype.init = function(t) {
                    this.loadScene = t, this.PlayerNot = this.owner;
                    var e = t.getChildByName("Paodao_1");
                    this.Paodao_1Prefab = Laya.Sprite3D.instantiate(e), e.active = !1;
                    var a = t.getChildByName("Paodao_2");
                    this.Paodao_2Prefab = Laya.Sprite3D.instantiate(a), a.active = !1;
                    var i = t.getChildByName("Paodao_3");
                    this.Paodao_3Prefab = Laya.Sprite3D.instantiate(i), i.active = !1;
                    var n = t.getChildByName("Yuantai");
                    this.YuantaiPrefab = Laya.Sprite3D.instantiate(n), n.active = !1;
                    var o = t.getChildByName("Yuantai_huai");
                    this.Yuantai_huaiPrefab = Laya.Sprite3D.instantiate(o), o.active = !1;
                    var s = t.getChildByName("Zhangaiwu");
                    this.ZhangaiwuPrefab = Laya.Sprite3D.instantiate(s), s.active = !1;
                    var r = t.getChildByName("Tiaotai");
                    this.TiaotaiPrefab = Laya.Sprite3D.instantiate(r), r.active = !1;
                    var l = t.getChildByName("Qidian");
                    this.QidianPrefab = Laya.Sprite3D.instantiate(l), l.active = !1;
                }, RoadPlaneCtrl.prototype.ResetRoad = function() {
                    for (var t = this.planeList.length; t >= 0; t--) this.planeList.length > 0 ? this.planeList.pop().owner.destroy() : console.log("平台list已请空");
                    this.curGroup = 0, this.CreatNewGroupPanle(2 * this.planeGroupNumber), this.curIndex = 0, this.curPlaneObj = this.planeList[this.curIndex];
                }, RoadPlaneCtrl.prototype.onUpdate = function() {}, RoadPlaneCtrl.prototype.CreatNewGroupPanle = function(t) {
                    void 0 === t && (t = this.planeGroupNumber), this.curGroup++, console.log("新生成组：", this.curGroup);
                    var e = null;
                    this.planeList.length > 0 && (e = this.planeList[this.planeList.length - 1]);
                    for (var a = 0; a < t; a++) this.planeList.push(this.CreatNextPlane(e)), e = this.planeList[this.planeList.length - 1];
                }, RoadPlaneCtrl.prototype.setCurPlane = function(t) {
                    this.OnLandPanle(this.findPlaneObjOfCollider(t));
                }, RoadPlaneCtrl.prototype.findPlaneObjOfCollider = function(t) {
                    return null == t ? (console.log("该碰撞体不是3d碰撞物"), null) : null == t.getComponent(i.default) ? null == t.parent ? (console.log("该碰撞体没有planeObj"), null) : this.findPlaneObjOfCollider(t.parent) : t.getComponent(i.default);
                }, RoadPlaneCtrl.prototype.OnLandPanle = function(t) {
                    this.curIndex = -1;
                    for (var e = 0; e < this.planeList.length; e++) t == this.planeList[e] && (this.curIndex = e);
                    if (-1 == this.curIndex && console.log("游戏PlaneObj未设置：", t), this.curIndex > this.planeGroupNumber) {
                        for (e = 0; e < this.planeGroupNumber; e++) {
                            this.planeList.shift().owner.destroy(), this.curIndex--;
                        }
                        this.CreatNewGroupPanle();
                    }
                    this.curPlaneObj = this.planeList[this.curIndex];
                }, RoadPlaneCtrl.prototype.getCurPos = function() {
                    return this.planeList[this.curIndex].owner.transform.position;
                }, RoadPlaneCtrl.prototype.getNextPos = function() {
                    return this.planeList[this.curIndex + 1].owner.transform.position;
                }, RoadPlaneCtrl.prototype.CreatNextPlane = function(t) {
                    if (void 0 === t && (t = null), null == t) return this.creatNewQidian().getComponent(i.default);
                    var e, a = 1,
                        n = t.owner.transform.position,
                        o = new Laya.Vector3();
                    switch (o.x = t.offset, this.curPlaneOffset = n.x + t.offset, t.planeType) {
                        case 1:
                            o.z = this.paodaoPlaneSpace;
                            break;
                        case 2:
                            o.z = this.yuantaiPlaneSpace;
                            break;
                        case 4:
                            o.z = this.tiaotaiPlaneSpace;
                            break;
                        default:
                            o.z = this.paodaoPlaneSpace;
                    }
                    if (o.z = o.z + t.paodaoLenth, 4 == t.planeType) o.y = this.upValue;
                    else {
                        var s = Math.random();
                        this.downRate > s ? o.y = this.downValue : (o.y = this.downBigValue, o.z = o.z + this.bigDownExtraSpace);
                    }
                    if (n.y + o.y < this.minHight) a = 4;
                    else {
                        var r = Math.random();
                        switch (t.planeType) {
                            case 1:
                                a = this.paodaoChangeRate > r ? 2 : 1;
                                break;
                            case 2:
                                a = this.yuantaiChangeRate > r ? 1 : 2;
                                break;
                            default:
                                a = 1;
                        }
                    }
                    var l = new Laya.Vector3();
                    switch (a) {
                        case 2:
                            e = this.CreatNewYuantai(), Laya.Vector3.add(n, o, l), e.transform.position = l;
                            break;
                        case 1:
                            e = this.creatNewPaodao(), Laya.Vector3.add(n, o, l), e.transform.position = new Laya.Vector3(0, l.y, l.z);
                            break;
                        case 4:
                            e = this.CreatNewTiaotai(), Laya.Vector3.add(n, o, l), e.transform.position = new Laya.Vector3(0, l.y, l.z);
                            break;
                        default:
                            e = this.creatNewPaodao(), Laya.Vector3.add(n, o, l), e.transform.position = new Laya.Vector3(0, l.y, l.z);
                    }
                    return e.getComponent(i.default);
                }, RoadPlaneCtrl.prototype.creatNewQidian = function() {
                    var t = new Laya.Sprite3D();
                    this.loadScene.addChild(t);
                    Laya.Sprite3D.instantiate(this.QidianPrefab, t);
                    var e = t.addComponent(i.default);
                    return e.planeType = 0, e.paodaoLenth = 23.25, t;
                }, RoadPlaneCtrl.prototype.CreatNewYuantai = function() {
                    var t, e = new Laya.Sprite3D();
                    if (this.loadScene.addChild(e), this.curPlaneOffset >= 1.5 * this.planeOffset) t = -this.planeOffset;
                    else if (this.curPlaneOffset <= 1.5 * -this.planeOffset) t = this.planeOffset;
                    else {
                        t = Math.random() > .5 ? this.planeOffset : -this.planeOffset;
                    }
                    var a = Laya.Sprite3D.instantiate(this.YuantaiPrefab, e),
                        n = Math.random();
                    if (this.yuantaiNormalRate > n) t /= 2, a.transform.localPosition = new Laya.Vector3(t, 0, 0);
                    else {
                        a.transform.localPosition = new Laya.Vector3(t, 0, 0);
                        var o = Math.random();
                        if (this.badYuantaiRate + this.curGroup * this.badYuantaiRiseValue > o)(a = Laya.Sprite3D.instantiate(this.Yuantai_huaiPrefab, e)).transform.localPosition = new Laya.Vector3(-t, 0, 0);
                        else(a = Laya.Sprite3D.instantiate(this.YuantaiPrefab, e)).transform.localPosition = new Laya.Vector3(-t, 0, 0);
                    }
                    var s = e.addComponent(i.default);
                    return s.planeType = 2, s.offset = t, e;
                }, RoadPlaneCtrl.prototype.creatNewPaodao = function() {
                    var t, e = new Laya.Sprite3D();
                    this.loadScene.addChild(e), t = Math.random() > .5 ? this.planeOffset : -this.planeOffset;
                    var a = Math.random(),
                        o = this.Paodao_1Prefab,
                        s = 46.5;
                    a > .33 ? (o = this.Paodao_1Prefab, s = 46.5) : a > .66 ? (o = this.Paodao_2Prefab, s = 93) : (o = this.Paodao_3Prefab, s = 139.5);
                    var r = Laya.Sprite3D.instantiate(o, e),
                        l = Math.random();
                    if (this.paodaoNormalRate > l) r.transform.localPosition = new Laya.Vector3(t / 4, 0, 0);
                    else {
                        r.transform.localPosition = new Laya.Vector3(t, 0, 0), Laya.Sprite3D.instantiate(o, e).transform.localPosition = new Laya.Vector3(-t, 0, 0);
                        var h = Laya.Sprite3D.instantiate(this.ZhangaiwuPrefab, e);
                        h.transform.localPosition = t > 0 ? new Laya.Vector3(-t - 4, 0, s / 2) : new Laya.Vector3(4 - t, 0, s / 2), h.getChildByName("zhangaiwu").addComponent(n.default);
                    }
                    var d = e.addComponent(i.default);
                    return d.planeType = 1, d.paodaoLenth = s, this.paodaoNormalRate > l ? d.offset = t / 4 : d.offset = t, e;
                }, RoadPlaneCtrl.prototype.CreatNewTiaotai = function() {
                    var t = new Laya.Sprite3D();
                    this.loadScene.addChild(t);
                    Laya.Sprite3D.instantiate(this.TiaotaiPrefab, t);
                    return t.addComponent(i.default).planeType = 4, t;
                }, RoadPlaneCtrl;
            }(Laya.Script);
        a.default = o;
    }, {
        "./Obstacle": 9,
        "./PlaneObj": 10
    }],
    12: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            return function() {
                this.newScore = 1, this.newLevel = 1, this.goonCount = 0, this.isGame = !1, this.isSleep = !1, this.watchVideo = !1, this.watchInter = !1, this.useTime = 1e3, this.gameList = null, this.isPass = !1, this.needWxAuthorize = !1, this.userInfo = {}, this.existInterAd = !1, this.existVideoAd = !1, this.existBannerAd = !1, this.isNoAds = !1, this.isAdDelay = !1, this.adTime = 1e3, this.latencyTime = 900, this.moveTime = 1e3, this.topView = "", this.kxhs = {}, this.currentVersion = "1", this.showRevivalCard = !1, this.shareInfo = {}, this.launchOptions = {}, this.wxappList = {}, this.wxsysInfo = {}, this.roleSkinList = [], this.pillarSkinList = [], this.roleSkinIndex = 0, this.skinGameCount = 0, this.signin = null, this.isCheckSignin = !1, this.lateWay = 0, this.needShowGuide = !1, this.bikeComps = [], this.gameCount = 0, this.isShowSkin = !1, this.skinIncome = 0, this.skinScore = 0;
            };
        }();
        a.default = i;
    }, {}],
    13: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function ConfigMgr() {
                this.bannerAdID = "adunit-bac14206ce3cb45f", this.videoAdID = "adunit-3832584c80e9645a", this.interAdID = "adunit-9122d986c13ce01a", this.skinCfg = [];
            }
            return ConfigMgr.prototype.init = function() {}, ConfigMgr.prototype.clear3DRes = function(t, e) {
                for (var a = 0; a < t.length; ++a) {
                    var i = Laya.loader.getRes(t[a].url);
                    i && i.releaseResource(!0), Laya.Loader.clearRes(t[a].url);
                }
            }, ConfigMgr.prototype.getVideoId = function() {
                return this.videoAdID;
            }, ConfigMgr.prototype.getBannerId = function() {
                return this.bannerAdID;
            }, ConfigMgr.prototype.getInterId = function() {
                return this.interAdID;
            }, ConfigMgr.prototype.getSkinCfg = function() {
                return this.skinCfg;
            }, ConfigMgr.prototype.getSkinByIndex = function(t) {
                return this.skinCfg[t];
            }, ConfigMgr.prototype.getSkinIndexById = function(t) {
                for (var e = 0, a = this.skinCfg.length; e < a; ++e)
                    if (t == this.skinCfg[e].id) return e;
                return console.error("id not exist config."), -1;
            }, ConfigMgr;
        }();
        a.default = i;
    }, {}],
    14: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function GameMgr() {
                this._isPlay = !1, this._isPause = !1, this._isOver = !1, this._isPressed = !1;
            }
            return Object.defineProperty(GameMgr.prototype, "isPlay", {
                get: function() {
                    return this._isPlay;
                },
                set: function(t) {
                    this._isPlay = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(GameMgr.prototype, "isOver", {
                get: function() {
                    return this._isOver;
                },
                set: function(t) {
                    this._isOver = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(GameMgr.prototype, "isPause", {
                get: function() {
                    return this._isPause;
                },
                set: function(t) {
                    this._isPause = t, Laya.timer.scale = t ? 0 : 1;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(GameMgr.prototype, "isPressed", {
                get: function() {
                    return this._isPressed;
                },
                set: function(t) {
                    this._isPressed = t;
                },
                enumerable: !0,
                configurable: !0
            }), GameMgr;
        }();
        a.default = i;
    }, {}],
    15: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../plug/MD5"),
            n = t("../plug/Dict"),
            o = t("../LayaSample"),
            s = function() {
                function NetMgr() {
                    this.isTokenActive = !1, this._connectCount = 0, this.messageDict = new n.default();
                }
                return NetMgr.prototype.request = function(t, e, a) {
                    if (t == NetMgr.apiLogin) console.log("login...");
                    else {
                        if (!this.isTokenActive || !NetMgr.token) return console.error("Token is null or token inactive. Request api" + t), void this.reconnect();
                        e.token = NetMgr.token, console.log("token...");
                    }
                    var i = new Laya.HttpRequest();
                    i.once(Laya.Event.COMPLETE, this, this.response), i.once(Laya.Event.ERROR, this, this.errorHandler), i.on(Laya.Event.PROGRESS, this, this.progressHandler), this.messageDict.set(t, {
                        method: t,
                        parm: e,
                        cb: a,
                        httpObj: i
                    });
                    var n = NetMgr.host + t,
                        o = this.setParmData(e);
                    i.send(n, o, "post", "json", ["Content-Type", "application/json;charset=UTF-8"]);
                }, NetMgr.prototype.urlEncode = function(t) {
                    if (null == t) return "";
                    var e = "",
                        a = new Array();
                    for (var i in t) a.push(i);
                    for (var n = 0, o = (a = a.sort()).length; n < o; ++n) e += a[n] + "=" + encodeURIComponent(t[a[n]]), n != o - 1 && (e += "&");
                    return e;
                }, NetMgr.prototype.setParmData = function(t) {
                    t.apiKey = NetMgr.apiKey, t.timestamp = Date.parse(new Date().toString()) / 1e3, t.apiSign = "", NetMgr.token && (t.token = NetMgr.token);
                    var e = "",
                        a = new Array();
                    for (var n in t) a.push(n);
                    a = a.sort();
                    for (var o = 0; o < a.length; o++) e += encodeURIComponent(t[a[o]]);
                    var s = i.default.hex_hmac_md5(NetMgr.apiSecret, e);
                    return t.apiSign = s, t;
                }, NetMgr.prototype.errorHandler = function(t) {
                    console.error("HTTP error：", t), this.reconnect();
                }, NetMgr.prototype.progressHandler = function(t) {}, NetMgr.prototype.response = function(t) {
                    var e = t.path,
                        a = this.messageDict.get(e);
                    if (e == NetMgr.apiLogin) switch (t.code) {
                        case 0:
                            this._requData && o.default.netMgr.request(this._requData.method, this._requData.parm, this._requData.cb), this.connected(t.result.token);
                    } else switch (t.code) {
                        case 200:
                            this._requData = a, this.unconnect(), this.reconnect();
                    }
                    a && a.cb && a.cb(t);
                }, NetMgr.prototype.connected = function(t) {
                    this._requData = null, this._connectCount = 0, NetMgr.token = t, this.isTokenActive = !0;
                }, NetMgr.prototype.unconnect = function() {
                    this.isTokenActive = !1;
                }, NetMgr.prototype.reconnect = function() {
                    console.log("reconnect...");
                    this._connectCount += 1, this._connectCount < 3 ? (console.error("net error，try to connect " + this._connectCount + " time"), setTimeout(function(t) {
                        o.default.wxMgr.login();
                    }, 1e3 * this._connectCount)) : this._connectCount = 0;
                }, NetMgr.deviceType = "wxapp", NetMgr.apiLogin = "v10/common/temporaryLogin", NetMgr.host = "", NetMgr.apiKey = "0d6f24de102bf04a8adf23bbbcdd407c", NetMgr.apiSecret = "U2FsdGVkX19r93uwucL97GA3UZVQwDcxAtgKuzmX1Vc", NetMgr.token = null, NetMgr;
            }();
        a.default = s;
    }, {
        "../LayaSample": 3,
        "../plug/Dict": 22,
        "../plug/MD5": 23
    }],
    16: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../LayaSample"),
            n = function() {
                function SoundMgr() {
                    for (var t in this._bgmCtx = null, this._soundType = ["click", "caidaibaopo", "luodisheng1", "luodisheng2", "pengzhuang", "shibai"], this._pathRoot = "res/voice/", this._soundCtx = {}, this._soundFile = [], this._soundType) {
                        var e = this._soundType[t];
                        this._soundFile.push(e);
                    }
                }
                return SoundMgr.prototype.init = function() {
                    for (var t = this._pathRoot, e = this._soundFile, a = this._soundFile.length, i = "", n = 0; n < a; ++n) {
                        i = e[n];
                        var o = new Laya.SoundChannel();
                        o.url = t + i + ".mp3", Laya.SoundManager.addChannel(o), this._soundCtx[i] = !0;
                    }
                }, SoundMgr.prototype.playBGM = function() {}, SoundMgr.prototype.stopBGM = function() {}, SoundMgr.prototype.stopAll = function() {
                    Laya.SoundManager.stopAll(), this.stopBGM();
                }, SoundMgr.prototype.play = function(t, e) {
                    void 0 === e && (e = 1), this._soundCtx[t] && i.default.storageMgr.isPlaySound() && Laya.SoundManager.playSound(this._pathRoot + t + ".mp3", e);
                }, SoundMgr.prototype.stop = function(t) {
                    this._soundCtx[t] && Laya.SoundManager.stopSound(this._pathRoot + t + ".mp3");
                }, SoundMgr;
            }();
        a.default = n;
    }, {
        "../LayaSample": 3
    }],
    17: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../LayaSample"),
            n = function() {
                function StorageMgr() {
                    this._userData = null, this._userDataKey = "userData", this.init();
                }
                return StorageMgr.prototype.init = function() {
                    this._userData = {
                        gameStatus: {
                            maxLevel: 1,
                            maxScore: 0,
                            gold: 0
                        },
                        isPlaySound: !0,
                        isPlayVibrate: !0,
                        isNoAds: !1,
                        levelID: 0,
                        isCollect: !1
                    }, this.readStorage(), this.initGameStatus(), null == this._userData.isNoAds && (this._userData.isNoAds = !1);
                }, StorageMgr.prototype.removeStorage = function() {
                    Laya.LocalStorage.removeItem(this._userDataKey);
                }, StorageMgr.prototype.isNoAds = function() {
                    return this._userData.isNoAds;
                }, StorageMgr.prototype.setNoAds = function(t) {
                    this._userData.isNoAds = t, this.writeStorage();
                }, StorageMgr.prototype.isPlaySound = function() {
                    return this._userData.isPlaySound;
                }, StorageMgr.prototype.setPlaySound = function(t) {
                    this._userData.isPlaySound = t, this.writeStorage(), t ? i.default.soundMgr.playBGM() : i.default.soundMgr.stopBGM();
                }, StorageMgr.prototype.isPlayVibrate = function() {
                    return this._userData.isPlayVibrate;
                }, StorageMgr.prototype.setPlayVibrate = function(t) {
                    this._userData.isPlayVibrate = t, this.writeStorage();
                }, StorageMgr.prototype.setCollect = function(t) {
                    this._userData.isCollect = t, this.writeStorage();
                }, StorageMgr.prototype.isCollect = function() {
                    return this._userData.isCollect;
                }, StorageMgr.prototype.initGameStatus = function() {
                    this._userData.gameStatus || (this._userData.gameStatus = {}), this._userData.gameStatus.maxLevel || (this._userData.gameStatus.maxLevel = 1), this._userData.gameStatus.maxScore || (this._userData.gameStatus.maxScore = 0), this._userData.gameStatus.gold || (this._userData.gameStatus.gold = 0), this._userData.signinTime || (this._userData.signinTime = 0), this._userData.skinTipsTime || (this._userData.skinTipsTime = 0), this.writeStorage();
                }, StorageMgr.prototype.isSkinTips = function() {
                    return Math.floor(this._userData.skinTipsTime / 86400) != Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, StorageMgr.prototype.setSkinTips = function(t) {
                    this._userData.skinTipsTime = t ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3), this.writeStorage();
                }, StorageMgr.prototype.setSigninTime = function(t) {
                    this._userData.signinTime = t, this.writeStorage();
                }, StorageMgr.prototype.isSignin = function() {
                    var t = this._userData.signinTime;
                    return t < 2 || !(t < 3) && Math.floor(t / 86400) == Math.floor(Date.parse(new Date().toString()) / 864e5);
                }, StorageMgr.prototype.getSigninTime = function() {
                    return this._userData.signinTime;
                }, StorageMgr.prototype.getGameStatus = function() {
                    return this._userData.gameStatus;
                }, StorageMgr.prototype.setMaxLevel = function(t) {
                    this._userData.gameStatus.maxLevel < t && (this._userData.gameStatus.maxLevel = t, this.writeStorage());
                }, StorageMgr.prototype.addGold = function(t) {
                    this._userData.gameStatus.gold += t, this.writeStorage();
                }, StorageMgr.prototype.setMaxScore = function(t) {
                    this._userData.gameStatus.maxScore < t && (this._userData.gameStatus.maxScore = t, this.writeStorage());
                }, StorageMgr.prototype.readStorage = function() {
                    var t = Laya.LocalStorage.getItem(this._userDataKey);
                    if (t) {
                        try {
                            this._userData = JSON.parse(t)
                        } catch (error) {
                            this._userData = {
                                gameStatus: {
                                    maxLevel: 1,
                                    maxScore: 0,
                                    gold: 0
                                },
                                isPlaySound: !0,
                                isPlayVibrate: !0,
                                isNoAds: !1,
                                levelID: 0,
                                isCollect: !1
                            }
                        }
                    }
                }, StorageMgr.prototype.writeStorage = function() {
                    this._userData && Laya.LocalStorage.setItem(this._userDataKey, JSON.stringify(this._userData));
                }, StorageMgr;
            }();
        a.default = n;
    }, {
        "../LayaSample": 3
    }],
    18: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function TweenMgr() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return __extends(TweenMgr, t), TweenMgr.prototype.toAlpha = function(t, e, a, i, n) {
                function alpha1() {
                    var n = i ? new Laya.Handler(this, alpha2) : null;
                    Laya.Tween.to(t, {
                        alpha: e
                    }, a, null, n);
                }

                function alpha2() {
                    Laya.Tween.to(t, {
                        alpha: 1
                    }, a, null, Laya.Handler.create(this, alpha1));
                }
                void 0 === i && (i = !1), void 0 === n && (n = 1), t.alpha = n, alpha1();
            }, TweenMgr.prototype.toScale = function(t, e, a, i, n, o) {
                function scale1() {
                    var e = n || i ? new Laya.Handler(this, scale2) : null;
                    Laya.Tween.to(t, {
                        scaleX: o,
                        scaleY: o
                    }, a, null, e);
                }

                function scale2() {
                    var e = n ? new Laya.Handler(this, scale1) : null;
                    Laya.Tween.to(t, {
                        scaleX: 1,
                        scaleY: 1
                    }, a, null, e);
                }
                void 0 === n && (n = !1), void 0 === o && (o = e), t.scaleX = 1, t.scaleY = 1, scale1();
            }, TweenMgr.prototype.toPosition = function(t, e, a, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = 0), Laya.Tween.clearAll(t);
                var o = new Laya.Vector2(t.x, t.y);

                function pos1() {
                    if (i) switch (n) {
                        case 0:
                            var o = new Laya.Handler(this, pos2);
                            break;
                        case 1:
                            o = new Laya.Handler(this, pos3);
                    }
                    Laya.Tween.to(t, {
                        x: e.x,
                        y: e.y
                    }, a, null, o);
                }

                function pos2() {
                    Laya.Tween.to(t, {
                        x: o.x,
                        y: o.y
                    }, a, null, Laya.Handler.create(this, pos1));
                }

                function pos3() {
                    t.x = o.x, t.y = o.y, pos1();
                }
                pos1();
            }, TweenMgr.prototype.fromAlpha = function(t, e, a, i) {
                function alpha1() {
                    var n = i ? new Laya.Handler(this, alpha2) : null;
                    Laya.Tween.from(t, {
                        alpha: e
                    }, a, null, n);
                }

                function alpha2() {
                    Laya.Tween.from(t, {
                        alpha: 1
                    }, a, null, Laya.Handler.create(this, alpha1));
                }
                void 0 === i && (i = !1), t.alpha = 1, alpha1();
            }, TweenMgr.prototype.fromScale = function(t, e, a, i) {
                function scale1() {
                    var n = i ? new Laya.Handler(this, scale2) : null;
                    Laya.Tween.from(t, {
                        scaleX: e,
                        scaleY: e
                    }, a, null, n);
                }

                function scale2() {
                    Laya.Tween.from(t, {
                        scaleX: 1,
                        scaleY: 1
                    }, a, null, Laya.Handler.create(this, scale1));
                }
                void 0 === i && (i = !1), scale1();
            }, TweenMgr;
        }(Laya.Script);
        a.default = i;
    }, {}],
    19: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../LayaSample"),
            n = t("./NetMgr"),
            o = function() {
                function WxMgr() {}
                return WxMgr.prototype.init = function() {
                    if (this.preTime = 0, this.buttonAuthorize1 = null, this._shareStartTime = new Date().getTime() + 86e3, this._isCreateWxInfoBtn = !1, Laya.Browser.onWeiXin) {
                        var t = window.wx.getSystemInfoSync();
                        i.default.commonData.wxsysInfo = t, this._regisiterWXCallback(), this.getLaunchOption(), this.showShareMenuWithTicket(!0), this.login();
                    }
                }, WxMgr.prototype.login = function() {
                    if (Laya.Browser.onWeiXin) {
                        var t = i.default.wxMgr;
                        window.wx.login({
                            success: function(e) {
                                var a = t.getLaunchOptions();
                                a.code = e.code, a.late_version = i.default.commonData.currentVersion, i.default.netMgr.request(n.default.apiLogin, a, function(e) {
                                    if (0 !== e.code) console.error("code login fault. code:" + e.code);
                                    else {
                                        console.log("code 登录成功", e);
                                        var a = e.result;
                                        t.createWxInfoBtn1(a.userInfo.avatar), t.setLoginInfo(a), t.setUserInfo(a.userInfo), t.worldRank(1, !1), t._regisiterWXShareCallback(), i.default.commonData.needShowGuide = 0 == e.result.userInfo.max_score;
                                    }
                                    i.default.glEvent.event("login_success_event");
                                });
                            },
                            fail: function() {},
                            complete: function() {}
                        });
                    }
                }, WxMgr.prototype.getLaunchOptions = function() {
                    var t = {},
                        e = i.default.commonData.launchOptions;
                    return e.scene && (t.scene_id = e.scene), e.referrerInfo && e.referrerInfo.appId && (t.appid = e.referrerInfo.appId), e.query ? (e.query.id && (t.share_user_id = parseInt(e.query.id)), e.query.share_id && (t.share_id = parseInt(e.query.share_id)), e.query.channel && (t.channel = e.query.channel)) : e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.channel && (t.channel = e.referrerInfo.extraData.channel), t;
                }, WxMgr.prototype.createWxInfoBtn1 = function(t) {
                    var e = "" == t;
                    if (i.default.commonData.needWxAuthorize = e, 0 != e && !this._isCreateWxInfoBtn) {
                        this._isCreateWxInfoBtn = !0;
                        var a = i.default.wxMgr,
                            n = i.default.commonData.wxsysInfo,
                            o = n.screenWidth,
                            s = n.screenHeight,
                            r = {
                                left: (n.screenWidth - o) / 2,
                                top: (n.screenHeight - s) / 2,
                                width: o,
                                height: s,
                                lineHeight: s,
                                backgroundColor: "#00000000",
                                color: "#ffffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            },
                            l = window.wx;
                        a.buttonAuthorize1 = l.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: r,
                            withCredentials: !0
                        }), a.showAuthorizeBtn(!0), a.buttonAuthorize1.onTap(function(t) {
                            var e = new Date().getTime(),
                                n = Math.floor((e - a.preTime) / 1e3);
                            if (a.preTime = e, !(n < 1)) {
                                if (t.userInfo) {
                                    var o = {};
                                    o.encrypted_data = t.encryptedData, o.iv = t.iv, i.default.netMgr.request("v10/common/authorizedLogin", o, function(t) {
                                        0 !== t.code ? console.error("authorized login fault. code:" + t.code) : a.setUserInfo(t.result);
                                    });
                                } else console.log("授权取消");
                                i.default.commonData.needWxAuthorize = !1, a.showAuthorizeBtn(!1);
                            }
                        });
                    }
                }, WxMgr.prototype.setLoginInfo = function(t) {
                    var e = t.versionConfig;
                    i.default.commonData.showRevivalCard = !1, e.version == i.default.commonData.currentVersion && (i.default.commonData.showRevivalCard = "0" != e.share), i.default.commonData.lateWay = e.late_way, console.log("shareConfig.delay", e.delay), i.default.commonData.isAdDelay = 1 == e.delay, console.log(" LayaSample.commonData.isAdDelay", i.default.commonData.isAdDelay), i.default.commonData.adTime = e.banner_interval ? e.banner_interval : i.default.commonData.adTime, i.default.commonData.latencyTime = i.default.commonData.isAdDelay ? e.latency_time : 0, i.default.commonData.moveTime = i.default.commonData.isAdDelay ? e.move_time : 0;
                    var a = t.shareContent,
                        n = a.length,
                        o = 0;
                    i.default.commonData.shareInfo = {};
                    for (var s = 0; s < n; ++s) {
                        o = a[s].share_type;
                        var r = i.default.commonData.shareInfo[o];
                        r || (r = [], i.default.commonData.shareInfo[o] = r), r.push(a[s]);
                    }
                    i.default.commonData.wxappList = {};
                    for (var l = 0, h = t.wxappList; l < h.length; l++) {
                        var d = h[l],
                            u = i.default.commonData.wxappList[d.category];
                        u || (u = [], i.default.commonData.wxappList[d.category] = u), Laya.Browser.onIOS && 1 == d.is_box || u.push(d);
                    }
                }, WxMgr.prototype.setUserInfo = function(t) {
                    i.default.commonData.userInfo = t, t.last_sign_time && i.default.storageMgr.setSigninTime(t.last_sign_time), i.default.commonData.isCheckSignin = !0;
                    var e = i.default.storageMgr.getGameStatus(),
                        a = t.pass < e.maxLevel ? e.maxLevel : t.pass,
                        n = t.max_score < e.maxScore ? e.maxScore : t.max_score;
                    i.default.glEvent.event("updateCoin", {}), a && (i.default.storageMgr.setMaxLevel(a), i.default.storageMgr.setMaxScore(n));
                }, WxMgr.prototype.showAuthorizeBtn = function(t) {
                    this.buttonAuthorize1 && (t ? this.buttonAuthorize1.show() : this.buttonAuthorize1.hide());
                }, WxMgr.prototype.getLaunchOption = function() {
                    var t = window.wx;
                    i.default.commonData.launchOptions = t.getLaunchOptionsSync();
                }, WxMgr.prototype.getSkinData = function(t) {
                    i.default.netMgr.request("v10/skin/lists", {}, function(e) {
                        if (0 != e.code) console.error("skin lists error", e);
                        else {
                            for (var a = e.result.roleSkinList, n = 0; n < 4; ++n) a[n].is_default;
                            i.default.commonData.roleSkinList = e.result.roleSkinList, i.default.commonData.pillarSkinList = e.result.pillarSkinList, null != t && t(e);
                        }
                    });
                }, WxMgr.prototype._regisiterWXShareCallback = function() {
                    var t = i.default.wxMgr;
                    Laya.Browser.onWeiXin && n.default.token && window.wx.onShareAppMessage(function() {
                        var e = t.getShareContent(1),
                            a = {
                                title: e.share_title,
                                imageUrl: e.share_img,
                                query: "share_id=" + e.share_id + "&share_type=" + e.share_type + "&id=" + i.default.commonData.userInfo.id,
                                success: function(t) {},
                                fail: function() {}
                            };
                        return t._upShareInfo(e.share_id), a;
                    });
                }, WxMgr.prototype.settlementLevel = function(t, e) {
                    var a = i.default.storageMgr.getGameStatus();
                    a.gold;
                    a.maxScore < e && this._submitScroe(e), i.default.storageMgr.setMaxLevel(t), i.default.storageMgr.setMaxScore(e);
                    var n = {};
                    n.score = e, n.pass = t, n.use_time = Math.floor(i.default.commonData.useTime / 1e3);
                }, WxMgr.prototype.buySkin = function(t, e) {
                    var a = {};
                    a.type = t, i.default.netMgr.request("v10/skin/randBuy", a, function(t) {
                        null != e && e(t);
                    });
                }, WxMgr.prototype.changeSkin = function(t, e) {
                    var a;
                    a = e, i.default.netMgr.request("v10/skin/switchSkin", a, function(t) {});
                }, WxMgr.prototype.showToast = function(t, e) {
                    window.wx && window.wx.showToast({
                        title: t,
                        duration: e,
                        icon: "none"
                    });
                }, WxMgr.prototype.hideToast = function() {
                    window.wx && window.wx.hideToast();
                }, WxMgr.prototype.worldRank = function(t, e) {
                    void 0 === e && (e = !0);
                    var a = {
                        page: t
                    };
                    i.default.netMgr.request("v20/user/worldRanking", a, function(a) {
                        0 == a.code ? (e && (i.default.glEvent.event("draw_world_rank_event", {
                            data: a.result,
                            page: t
                        }), console.log("draw_world_rank_event:", a.result)), i.default.commonData.gameList = a.result) : console.error("get world ranking error:", a, t);
                    });
                }, WxMgr.prototype._submitScroe = function(t) {
                    Laya.Browser.onWeiXin && (window.wx.getOpenDataContext().postMessage({
                        cmd: "submit_scroe",
                        score: t
                    }), i.default.glEvent.event("submit_scroe_event", {}));
                }, WxMgr.prototype.showFriendRank = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        i.default.glEvent.event("show_friend_rank_event", {
                            isShow: t
                        });
                        var e = t ? "open_friend_rank" : "close_friend_rank";
                        window.wx.getOpenDataContext().postMessage({
                            cmd: e
                        });
                    }
                }, WxMgr.prototype.destroyFriendRank = function() {
                    Laya.Browser.onWeiXin && window.wx.getOpenDataContext().postMessage({
                        cmd: "destroy_friend_rank"
                    });
                }, WxMgr.prototype.showLiteRank = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_lite_rank" : "close_lite_rank";
                        window.wx.getOpenDataContext().postMessage({
                            cmd: e
                        }), i.default.glEvent.event("show_lite_rank_event", {
                            isShow: t
                        });
                    }
                }, WxMgr.prototype.showOverFriendTips = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_over_friend" : "close_over_friend";
                        window.wx.getOpenDataContext().postMessage({
                            cmd: e,
                            score: i.default.commonData.newScore
                        }), i.default.glEvent.event("over_friend_event", {
                            isShow: t
                        });
                    }
                }, WxMgr.prototype.showLoopFriendTips = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_loop_friend" : "close_loop_friend";
                        window.wx.getOpenDataContext().postMessage({
                            cmd: e,
                            score: i.default.commonData.newScore
                        }), i.default.glEvent.event("loop_over_event", {
                            isShow: t
                        });
                    }
                }, WxMgr.prototype.restartGame = function() {
                    Laya.Browser.onWeiXin && window.wx.getOpenDataContext().postMessage({
                        cmd: "restart_game"
                    });
                }, WxMgr.prototype.showFirstFriendTips = function(t) {
                    if (Laya.Browser.onWeiXin) {
                        var e = t ? "open_first_friend" : "close_first_friend";
                        window.wx.getOpenDataContext().postMessage({
                            cmd: e,
                            score: 0
                        });
                    }
                }, WxMgr.prototype.onFrientMouseEvent = function(t) {
                    Laya.Browser.onWeiXin && window.wx.getOpenDataContext().postMessage(t);
                }, WxMgr.prototype._regisiterWXCallback = function() {
                    if (Laya.Browser.onWeiXin) {
                        var t = window.wx;
                        t.offShow(this.onShowEvent), t.onShow(this.onShowEvent), t.offHide(this.onHideEvent), t.onHide(this.onHideEvent);
                    }
                }, WxMgr.prototype.onShowEvent = function(t) {
                    var e = i.default.wxMgr;
                    if (i.default.soundMgr.stopAll(), i.default.soundMgr.playBGM(), i.default.commonData.isSleep = !1, i.default.glEvent.event("wx_wake_event", {}), e._statuShareGame) {
                        e._statuShareGame = !1;
                        var a = !(new Date().getTime() - e._shareStartTime < 2500);
                        a && e._upShareInfo(e._shareId), i.default.glEvent.event("share_back_event", {
                            isShare: a,
                            shareId: e._shareId
                        }), e._shareStartTime = new Date().getTime() + 86e3;
                    }
                }, WxMgr.prototype.onHideEvent = function() {
                    i.default.commonData.isSleep = !0;
                    i.default.wxMgr;
                    i.default.soundMgr.stopAll(), i.default.glEvent.event("wx_sleep_event", {});
                }, WxMgr.prototype.openOtherApp = function(t, e) {
                    if (Laya.Browser.onWeiXin) {
                        var a = i.default.commonData.wxappList[e],
                            n = "",
                            o = -1,
                            s = -1;
                        if (a)
                            for (var r = 0, l = a; r < l.length; r++) {
                                var h = l[r];
                                if (h.app_id == t) {
                                    o = h.wx_id, s = h.ad_id, n = h.app_path;
                                    break;
                                }
                            }
                        window.wx.navigateToMiniProgram({
                            appId: t,
                            path: n,
                            success: function(e) {
                                -1 != o ? i.default.netMgr.request("v10/common/clickWxapp", {
                                    wx_id: o,
                                    ad_id: s,
                                    type: 1
                                }, function(t) {
                                    0 !== t.code && console.error("log goto wxapp fault. code:" + t);
                                }) : console.error("click app not find id,for appid:", t);
                            },
                            fail: function() {
                                i.default.netMgr.request("v10/common/clickWxapp", {
                                    wx_id: o,
                                    ad_id: s,
                                    type: 0
                                }, function(t) {
                                    0 !== t.code && console.error("log goto wxapp fault. code:" + t);
                                }), i.default.glEvent.event("show_applite_event");
                            },
                            complete: function() {}
                        });
                    }
                }, WxMgr.prototype.getWxappList = function(t) {}, WxMgr.prototype.shareFriend = function(t, e) {}, WxMgr.prototype.getShareContent = function(t) {}, WxMgr.prototype.upViewVideoInfo = function(t, e) {}, WxMgr.prototype._upShareInfo = function(t) {}, WxMgr.prototype.playVibrateShort = function() {}, WxMgr.prototype.playVibrateLong = function() {}, WxMgr.prototype.showShareMenuWithTicket = function(t) {}, WxMgr.prototype.getSignData = function(t, e) {}, WxMgr.prototype.getSignPrize = function(t, e, a) {}, WxMgr.prototype.getDiskData = function(t, e) {}, WxMgr.prototype.getDiskPrize = function(t, e, a, n) {}, WxMgr.prototype.getDiskDouble = function(t, e, a) {}, WxMgr.prototype.openCustomerService = function() {}, WxMgr;
            }();
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./NetMgr": 15
    }],
    20: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function BaseAd() {}
            return BaseAd.prototype.init = function() {}, BaseAd.prototype.getBannerCount = function() {
                return 0;
            }, BaseAd.prototype.getBannerItem = function() {}, BaseAd.prototype.setBannerItem = function() {}, BaseAd.prototype.showBannerAd = function() {}, BaseAd.prototype.hideBannerAd = function() {}, BaseAd.prototype.setBannerAdWidth = function(t) {}, BaseAd.prototype.setBannerAdTop = function(t) {}, BaseAd.prototype.getBannerAd = function() {}, BaseAd.prototype.showVideoAd = function(t) {}, BaseAd.prototype.getVideoAd = function() {}, BaseAd.prototype.loadVideoAd = function() {}, BaseAd.prototype.showInterstitialAd = function() {}, BaseAd.prototype.getInterstitialAd = function() {}, BaseAd;
        }();
        a.default = i;
    }, {}],
    21: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i, n = t("../LayaSample"),
            o = t("../../GameConfig"),
            s = function(t) {
                function WxAd() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._loadBanner = 1, e._loadDelay = 0, e._loadInterval = 5, e.lastTime = 0, e.loadAdFirst = !0, e;
                }
                return __extends(WxAd, t), WxAd.prototype.init = function() {
                    if (this._videoAd = null, this._interAd = null, this._bannerItem = null, this._bannerList = [], this._bannerError = 0, i = this, this._videoCate = -1, this._isCreateInter = !1, Laya.Browser.onWeiXin) {
                        var t = n.default.commonData.wxsysInfo.SDKVersion;
                        this._isCreateInter = n.default.utils.compareVersion(t, "2.6.0") >= 0, Laya.timer.loop(1e3, this, this.loadBannerAd), this.getBannerAd(), this.getVideoAd(), this.getInterstitialAd();
                    }
                }, WxAd.prototype.loadBannerAd = function() {
                    if (!n.default.gameMgr.isPlay) {
                        var t = 5e3;
                        3 == this._bannerList.length && (this.loadAdFirst = !1), n.default.commonData.adTime > t && (t = n.default.commonData.adTime), this.loadAdFirst && (t = 2e3);
                        var e = new Date().valueOf();
                        this._bannerList.length < 3 && e - this.lastTime > t && (this.lastTime = e, this.getBannerAd());
                    }
                }, WxAd.prototype.getBannerCount = function() {
                    return this._bannerList.length;
                }, WxAd.prototype.getBannerItem = function() {
                    return this._bannerItem;
                }, WxAd.prototype.setBannerItem = function() {
                    if (Laya.Browser.onWeiXin && !n.default.commonData.isNoAds && n.default.commonData.existBannerAd) {
                        var t = this._bannerList.length,
                            e = null;
                        if (t < 1) e = null;
                        else if (1 == t) e = this._bannerList[0];
                        else {
                            this._bannerList[0].ad.destroy(), this._bannerList.shift();
                            for (var a = 0, i = this._bannerList.length; a < i; ++a) this._bannerList[a].index = a;
                            e = this._bannerList[0];
                        }
                        this._bannerItem = e;
                    }
                }, WxAd.prototype.showBannerAd = function() {
                    var t = this.getBannerItem();
                    Laya.Browser.onWeiXin && t && (n.default.commonData.isNoAds || n.default.commonData.existBannerAd && (n.default.commonData.watchVideo || t.ad.show().then(function() {
                        n.default.glEvent.event("ad_show_event", {
                            adtype: "banner",
                            index: t.index
                        });
                    }).catch(function(t) {})));
                }, WxAd.prototype.hideBannerAd = function() {
                    for (var t = 0, e = this._bannerList.length; t < e; ++t) this._bannerList[t] && this._bannerList[t].ad.hide();
                }, WxAd.prototype.setBannerAdWidth = function(t) {
                    var e = this.getBannerItem();
                    if (e && t) {
                        var a = (n.default.commonData.wxsysInfo.screenWidth - t) / 2;
                        e.ad.style.width = t, e.ad.style.left = a;
                    }
                }, WxAd.prototype.setBannerAdTop = function(t) {
                    var e = this.getBannerItem();
                    e && void 0 !== t && (e.ad.style.top = t);
                }, WxAd.prototype.getBannerAd = function() {
                    if (Laya.Browser.onWeiXin && !(n.default.commonData.isSleep || this._bannerList.length > 2)) {
                        var t = this,
                            e = n.default.commonData.wxsysInfo,
                            a = e.screenWidth,
                            i = (e.screenWidth - a) / 2,
                            s = .86 * e.screenHeight,
                            r = {
                                width: a,
                                height: e.screenHeight - s,
                                top: s,
                                index: -1
                            },
                            l = wx.createBannerAd({
                                adUnitId: n.default.configMgr.getBannerId(),
                                style: {
                                    left: i,
                                    top: s,
                                    width: a
                                }
                            });
                        r.ad = l, l.onLoad(function() {
                            n.default.commonData.existBannerAd = !0, n.default.glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !0
                            });
                            var e = t._bannerList.push(r);
                            r.index = e - 1, t._bannerError = 0;
                        }), l.onError(function(e) {
                            console.error("banner 加载错误：", e), t._bannerError += 1, t._bannerError > 3 && (t._bannerError = 3, n.default.commonData.existBannerAd = !1), n.default.glEvent.event("ad_load_event", {
                                adtype: "banner",
                                isLoad: !1
                            });
                        }), l.onResize(function(t) {
                            if (l) {
                                var a = l.style.realHeight + .1;
                                e.model.startsWith("iPhone X") && (a += 40 / Laya.Browser.height * o.default.height), l.style.top = e.screenHeight - a, r.width = l.style.realWidth, r.height = a, n.default.glEvent.event("ad_resize_event", {
                                    adtype: "banner",
                                    index: r.index
                                });
                            }
                        });
                    }
                }, WxAd.prototype.showVideoAd = function(t) {
                    var e = this._videoAd;
                    Laya.Browser.onWeiXin && e ? (this._videoCate = t, n.default.wxMgr.upViewVideoInfo(0, t), e.show().then(function() {
                        n.default.commonData.watchVideo = !0;
                    }).catch(function(t) {
                        n.default.wxMgr.showToast("暂无视频，请稍后再试", 2e3), e.load().then(function() {
                            return e.show();
                        });
                    })) : n.default.wxMgr.showToast("暂无视频，请稍后再试", 2e3);
                }, WxAd.prototype.getVideoAd = function() {}, WxAd.prototype.loadVideoAd = function() {}, WxAd.prototype._onLoadVideo = function() {}, WxAd.prototype._onErrorVideo = function(t) {}, WxAd.prototype._onCloseVideo = function(t) {
                    n.default.commonData.watchVideo = !1;
                    var e = !!(t && t.isEnded || void 0 === t);
                    e && n.default.wxMgr.upViewVideoInfo(1, i._videoCate), n.default.glEvent.event("ad_video_close_event", {
                        isEnded: e
                    });
                }, WxAd.prototype.showInterstitialAd = function() {
                    var t = this._interAd;
                    this._isCreateInter && t && t.show().then(function() {
                        n.default.commonData.watchInter = !0;
                    }).catch(function(t) {
                        console.error("Interstitial 显示错误", t), n.default.glEvent.event("ad_inter_close_event", {});
                    });
                }, WxAd.prototype.getInterstitialAd = function() {
                    if (this._isCreateInter && wx.createInterstitialAd) {
                        var t = this._interAd;
                        t && (t.offLoad(this._onLoadInterstitial), t.offError(this._onErrorInterstitial), t.offClose(this._onCloseInterstitial)), (t = wx.createInterstitialAd({
                            adUnitId: n.default.configMgr.getInterId()
                        })).onLoad(this._onLoadInterstitial), t.onError(this._onErrorInterstitial), t.onClose(this._onCloseInterstitial), this._interAd = t;
                    }
                }, WxAd.prototype._onLoadInterstitial = function() {
                    console.log("Interstitial 加载成功"), n.default.commonData.existInterAd = !0, n.default.glEvent.event("ad_load_event", {
                        adtype: "inter",
                        isLoad: !0
                    });
                }, WxAd.prototype._onErrorInterstitial = function(t) {
                    console.error("Interstitial 加载错误", t), n.default.commonData.existInterAd = !1, n.default.glEvent.event("ad_load_event", {
                        adtype: "inter",
                        isLoad: !1
                    });
                }, WxAd.prototype._onCloseInterstitial = function(t) {
                    console.error("Interstitial 关闭", t), n.default.glEvent.event("ad_inter_close_event", {});
                }, WxAd;
            }(t("./BaseAd").default);
        a.default = s;
    }, {
        "../../GameConfig": 1,
        "../LayaSample": 3,
        "./BaseAd": 20
    }],
    22: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function Dict() {
                this.items = {};
            }
            return Dict.prototype.has = function(t) {
                return t in this.items;
            }, Dict.prototype.set = function(t, e) {
                this.items[t] = e;
            }, Dict.prototype.remove = function(t) {
                return !!this.has(t) && (delete this.items[t], !0);
            }, Dict.prototype.get = function(t) {
                return this.has(t) ? this.items[t] : void 0;
            }, Dict.prototype.values = function() {
                var t = [];
                for (var e in this.items) this.has(e) && t.push(this.items[e]);
                return t;
            }, Dict.prototype.getItems = function() {
                return this.items;
            }, Dict.prototype.size = function() {
                return Object.keys(this.items).length;
            }, Dict.prototype.clear = function() {
                this.items = {};
            }, Dict.prototype.keys = function() {
                return Object.keys(this.items);
            }, Dict;
        }();
        a.default = i;
    }, {}],
    23: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function MD5() {}
            return MD5.hex_md5 = function(t) {
                return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, MD5.b64_md5 = function(t) {
                return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, MD5.str_md5 = function(t) {
                return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz));
            }, MD5.hex_hmac_md5 = function(t, e) {
                return this.binl2hex(this.core_hmac_md5(t, e));
            }, MD5.b64_hmac_md5 = function(t, e) {
                return this.binl2b64(this.core_hmac_md5(t, e));
            }, MD5.str_hmac_md5 = function(t, e) {
                return this.binl2str(this.core_hmac_md5(t, e));
            }, MD5.md5_vm_test = function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc");
            }, MD5.core_md5 = function(t, e) {
                t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                for (var a = 1732584193, i = -271733879, n = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
                    var r = a,
                        l = i,
                        h = n,
                        d = o;
                    a = this.md5_ff(a, i, n, o, t[s + 0], 7, -680876936), o = this.md5_ff(o, a, i, n, t[s + 1], 12, -389564586), n = this.md5_ff(n, o, a, i, t[s + 2], 17, 606105819), i = this.md5_ff(i, n, o, a, t[s + 3], 22, -1044525330), a = this.md5_ff(a, i, n, o, t[s + 4], 7, -176418897), o = this.md5_ff(o, a, i, n, t[s + 5], 12, 1200080426), n = this.md5_ff(n, o, a, i, t[s + 6], 17, -1473231341), i = this.md5_ff(i, n, o, a, t[s + 7], 22, -45705983), a = this.md5_ff(a, i, n, o, t[s + 8], 7, 1770035416), o = this.md5_ff(o, a, i, n, t[s + 9], 12, -1958414417), n = this.md5_ff(n, o, a, i, t[s + 10], 17, -42063), i = this.md5_ff(i, n, o, a, t[s + 11], 22, -1990404162), a = this.md5_ff(a, i, n, o, t[s + 12], 7, 1804603682), o = this.md5_ff(o, a, i, n, t[s + 13], 12, -40341101), n = this.md5_ff(n, o, a, i, t[s + 14], 17, -1502002290), i = this.md5_ff(i, n, o, a, t[s + 15], 22, 1236535329), a = this.md5_gg(a, i, n, o, t[s + 1], 5, -165796510), o = this.md5_gg(o, a, i, n, t[s + 6], 9, -1069501632), n = this.md5_gg(n, o, a, i, t[s + 11], 14, 643717713), i = this.md5_gg(i, n, o, a, t[s + 0], 20, -373897302), a = this.md5_gg(a, i, n, o, t[s + 5], 5, -701558691), o = this.md5_gg(o, a, i, n, t[s + 10], 9, 38016083), n = this.md5_gg(n, o, a, i, t[s + 15], 14, -660478335), i = this.md5_gg(i, n, o, a, t[s + 4], 20, -405537848), a = this.md5_gg(a, i, n, o, t[s + 9], 5, 568446438), o = this.md5_gg(o, a, i, n, t[s + 14], 9, -1019803690), n = this.md5_gg(n, o, a, i, t[s + 3], 14, -187363961), i = this.md5_gg(i, n, o, a, t[s + 8], 20, 1163531501), a = this.md5_gg(a, i, n, o, t[s + 13], 5, -1444681467), o = this.md5_gg(o, a, i, n, t[s + 2], 9, -51403784), n = this.md5_gg(n, o, a, i, t[s + 7], 14, 1735328473), i = this.md5_gg(i, n, o, a, t[s + 12], 20, -1926607734), a = this.md5_hh(a, i, n, o, t[s + 5], 4, -378558), o = this.md5_hh(o, a, i, n, t[s + 8], 11, -2022574463), n = this.md5_hh(n, o, a, i, t[s + 11], 16, 1839030562), i = this.md5_hh(i, n, o, a, t[s + 14], 23, -35309556), a = this.md5_hh(a, i, n, o, t[s + 1], 4, -1530992060), o = this.md5_hh(o, a, i, n, t[s + 4], 11, 1272893353), n = this.md5_hh(n, o, a, i, t[s + 7], 16, -155497632), i = this.md5_hh(i, n, o, a, t[s + 10], 23, -1094730640), a = this.md5_hh(a, i, n, o, t[s + 13], 4, 681279174), o = this.md5_hh(o, a, i, n, t[s + 0], 11, -358537222), n = this.md5_hh(n, o, a, i, t[s + 3], 16, -722521979), i = this.md5_hh(i, n, o, a, t[s + 6], 23, 76029189), a = this.md5_hh(a, i, n, o, t[s + 9], 4, -640364487), o = this.md5_hh(o, a, i, n, t[s + 12], 11, -421815835), n = this.md5_hh(n, o, a, i, t[s + 15], 16, 530742520), i = this.md5_hh(i, n, o, a, t[s + 2], 23, -995338651), a = this.md5_ii(a, i, n, o, t[s + 0], 6, -198630844), o = this.md5_ii(o, a, i, n, t[s + 7], 10, 1126891415), n = this.md5_ii(n, o, a, i, t[s + 14], 15, -1416354905), i = this.md5_ii(i, n, o, a, t[s + 5], 21, -57434055), a = this.md5_ii(a, i, n, o, t[s + 12], 6, 1700485571), o = this.md5_ii(o, a, i, n, t[s + 3], 10, -1894986606), n = this.md5_ii(n, o, a, i, t[s + 10], 15, -1051523), i = this.md5_ii(i, n, o, a, t[s + 1], 21, -2054922799), a = this.md5_ii(a, i, n, o, t[s + 8], 6, 1873313359), o = this.md5_ii(o, a, i, n, t[s + 15], 10, -30611744), n = this.md5_ii(n, o, a, i, t[s + 6], 15, -1560198380), i = this.md5_ii(i, n, o, a, t[s + 13], 21, 1309151649), a = this.md5_ii(a, i, n, o, t[s + 4], 6, -145523070), o = this.md5_ii(o, a, i, n, t[s + 11], 10, -1120210379), n = this.md5_ii(n, o, a, i, t[s + 2], 15, 718787259), i = this.md5_ii(i, n, o, a, t[s + 9], 21, -343485551), a = this.safe_add(a, r), i = this.safe_add(i, l), n = this.safe_add(n, h), o = this.safe_add(o, d);
                }
                return Array(a, i, n, o);
            }, MD5.md5_cmn = function(t, e, a, i, n, o) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(i, o)), n), a);
            }, MD5.md5_ff = function(t, e, a, i, n, o, s) {
                return this.md5_cmn(e & a | ~e & i, t, e, n, o, s);
            }, MD5.md5_gg = function(t, e, a, i, n, o, s) {
                return this.md5_cmn(e & i | a & ~i, t, e, n, o, s);
            }, MD5.md5_hh = function(t, e, a, i, n, o, s) {
                return this.md5_cmn(e ^ a ^ i, t, e, n, o, s);
            }, MD5.md5_ii = function(t, e, a, i, n, o, s) {
                return this.md5_cmn(a ^ (e | ~i), t, e, n, o, s);
            }, MD5.core_hmac_md5 = function(t, e) {
                var a = this.str2binl(t);
                a.length > 16 && (a = this.core_md5(a, t.length * this.chrsz));
                for (var i = Array(16), n = Array(16), o = 0; o < 16; o++) i[o] = 909522486 ^ a[o], n[o] = 1549556828 ^ a[o];
                var s = this.core_md5(i.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
                return this.core_md5(n.concat(s), 640);
            }, MD5.safe_add = function(t, e) {
                var a = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (a >> 16) << 16 | 65535 & a;
            }, MD5.bit_rol = function(t, e) {
                return t << e | t >>> 32 - e;
            }, MD5.str2binl = function(t) {
                for (var e = Array(), a = (1 << this.chrsz) - 1, i = 0; i < t.length * this.chrsz; i += this.chrsz) e[i >> 5] |= (t.charCodeAt(i / this.chrsz) & a) << i % 32;
                return e;
            }, MD5.binl2str = function(t) {
                for (var e = "", a = (1 << this.chrsz) - 1, i = 0; i < 32 * t.length; i += this.chrsz) e += String.fromCharCode(t[i >> 5] >>> i % 32 & a);
                return e;
            }, MD5.binl2hex = function(t) {
                for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", i = 0; i < 4 * t.length; i++) a += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
                return a;
            }, MD5.binl2b64 = function(t) {
                for (var e = "", a = 0; a < 4 * t.length; a += 3)
                    for (var i = (t[a >> 2] >> a % 4 * 8 & 255) << 16 | (t[a + 1 >> 2] >> (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >> 2] >> (a + 2) % 4 * 8 & 255, n = 0; n < 4; n++) 8 * a + 6 * n > 32 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - n) & 63);
                return e;
            }, MD5.hexcase = 0, MD5.b64pad = "", MD5.chrsz = 8, MD5;
        }();
        a.default = i;
    }, {}],
    24: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../LayaSample"),
            n = function(t) {
                function AppBanner() {
                    var e = t.call(this) || this;
                    return e._appCount = -1, e._appIndex = 0, e.repeatX = 0, e;
                }
                return __extends(AppBanner, t), AppBanner.prototype.onStart = function() {
                    this.initData(), this.initUI(), this.setBanner(), this.setPanelBottom(), this.initEvent(), Laya.timer.loop(3e3, this, this.nextBanner);
                }, AppBanner.prototype.initData = function() {
                    this.data = i.default.wxMgr.getWxappList(this.category), this._appCount = this.data.length;
                }, AppBanner.prototype.initUI = function() {
                    this.banner.visible = !1;
                }, AppBanner.prototype.initEvent = function() {
                    i.default.utils.addClickEvent(this.banner, this, this.onBannerClick, 14), i.default.glEvent.on("ad_load_event", this, this.onAdLoadEvent);
                }, AppBanner.prototype.onAdLoadEvent = function(t) {
                    "banner" == t.adtype && (this.setBanner(), this.setPanelBottom());
                }, AppBanner.prototype.setPanelBottom = function() {
                    if (this.panel && !i.default.commonData.existBannerAd && this._appCount > 0) {
                        this.panel.bottom = this.banner.height;
                        var t = i.default.commonData.wxsysInfo;
                        t && t.model.startsWith("iPhone X") && (this.panel.bottom = this.banner.height + 40);
                    }
                }, AppBanner.prototype.setBanner = function() {
                    var t = this.banner;
                    if (this._appCount > 0) {
                        var e = this.data[this._appIndex];
                        t.skin = e.app_img, t.appid = e.app_id;
                    }
                    t.visible = !i.default.commonData.existBannerAd && !i.default.commonData.isNoAds && this._appCount > 0;
                }, AppBanner.prototype.nextBanner = function() {
                    var t = this._appIndex;
                    ++t >= this._appCount && (t = 0), this._appIndex = t, this.setBanner();
                }, AppBanner.prototype.onBannerClick = function(t) {
                    var e = t.target.appid;
                    e && "" != e ? i.default.wxMgr.openOtherApp(e, this.category) : console.log("appid error.");
                }, AppBanner.prototype.onDisable = function() {
                    Laya.timer.clear(this, this.nextBanner), i.default.glEvent.off("ad_load_event", this, this.onAdLoadEvent);
                }, AppBanner;
            }(Laya.Script);
        a.default = n;
    }, {
        "../LayaSample": 3
    }],
    25: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function AppItem() {
                var e = t.call(this) || this;
                return e.icon = null, e.initItem(), e;
            }
            return __extends(AppItem, t), AppItem.prototype.onDisable = function() {}, AppItem.prototype.initItem = function() {
                if (AppItem.appPrefab) {
                    var t = Laya.Pool.getItemByCreateFun("appItem", AppItem.appPrefab.create, AppItem.appPrefab);
                    this.icon = t.getChildByName("icon"), this.icon.width = AppItem.appWidth, this.icon.height = AppItem.appHeight, t.size(AppItem.appWidth, AppItem.appHeight), this.addChild(t);
                } else console.error("app prefab is null");
            }, AppItem.prototype.setItemInfo = function(t) {
                null != t && (this.icon.loadImage(t.app_img), this.appId = t.app_id);
            }, AppItem.appWidth = 128, AppItem.appHeight = 128, AppItem;
        }(Laya.Box);
        a.default = i;
    }, {}],
    26: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./AppItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function AppLite() {
                    var e = t.call(this) || this;
                    return e.appCount = -1, e.needClearTimer = !1, e.ind = 0, e.prevInd = 0, e.renderCount = 4, e.speed = 3e3, e;
                }
                return __extends(AppLite, t), AppLite.prototype.closeComp = function() {
                    Laya.timer.clearAll(this), this.panel.visible = !1, console.log("hide---"), this.isHide = !0;
                }, AppLite.prototype.onDisable = function() {
                    Laya.timer.clearAll(this), this.panel.visible = !1, console.log("hide---");
                }, AppLite.prototype.onStart = function() {}, AppLite.prototype.initUI = function() {
                    var t = 0 != this.appCount;
                    this.list.visible = t, this.panel.visible = t;
                }, AppLite.prototype.initData = function() {
                    if (i.default.appWidth = this.appWidth, i.default.appHeight = this.appHeight, i.default.appPrefab = this.appPrefab, this.data = n.default.wxMgr.getWxappList(this.category), this.appCount = this.data.length, !(this.appCount <= 6)) {
                        var t = 0,
                            e = 0;
                        for (t = 0; t < this.appCount; ++t) e += this.data[t].weight;
                        var a = [],
                            o = 0;
                        for (t = 0; t < this.appCount; ++t) o += this.data[t].weight, a[t] = {}, a[t].index = t, a[t].weight = o / e;
                        for (var s = [], r = 0, l = !1, h = 0, d = 0; d < this.appCount; ++d) {
                            for (r = Math.random() * a[a.length - 1].weight, l = !1, t = 0; t < a.length; ++t) !l && r <= a[t].weight && (l = !0, s.push(this.data[a[t].index]), t + 1 < a.length && (h = a[t + 1].weight - a[t].weight)), l && t + 1 < a.length && (a[t + 1].weight -= h, a[t] = a[t + 1]);
                            a.length -= 1;
                        }
                        this.data = s;
                    }
                }, AppLite.prototype.getData = function(t, e) {
                    for (var a = 0; a < t.length; ++a) t[a];
                }, AppLite.prototype.initList = function() {
                    var t = this.list;
                    null != t && (t.itemRender = i.default, t.vScrollBarSkin = "", t.selectEnable = !0, t.renderHandler = new Laya.Handler(this, this.updateItem), t.mouseHandler = new Laya.Handler(this, this.onSelect), this.renderCount = t.repeatX * t.repeatY), t.array = this.data, 1 == this.category && Laya.timer.once(1e3, this, this.moveList);
                }, AppLite.prototype.moveList = function() {
                    if (this.needClearTimer = !1, this.list) {
                        var t = (this.list.array.length + 2) / 3;
                        if (t < 3) return;
                        var e = 3 * t - 6;
                        this.list.tweenTo(e, 3e3 * (e - this.list.startIndex - 1), new Laya.Handler(this, this.moveList1));
                    }
                }, AppLite.prototype.moveList1 = function() {
                    var t = (this.list.array.length + 2) / 3;
                    if (!(t < 3)) {
                        var e = 3 * t - 6;
                        this.list.tweenTo(0, 3e3 * e, new Laya.Handler(this, this.moveList));
                    }
                }, AppLite.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, AppLite.prototype.onSelect = function(t, e) {
                    if (!(e < 0)) {
                        if ("mouseup" == t.type) {
                            var a = this.list.getItem(e);
                            null != a && n.default.wxMgr.openOtherApp(a.app_id, a.category);
                        }
                        1 == this.category && (this.needClearTimer && Laya.timer.clear(this, this.moveList), this.needClearTimer = !0, this.list.startIndex < 3 ? Laya.timer.once(1e3, this, this.moveList) : Laya.timer.once(1e3, this, this.moveList1)), this.list.selectedIndex = -1;
                    }
                }, AppLite.prototype._setData = function(t) {
                    this.ind = 0, null != this.panel && (null == this.data || 0 == this.data.length ? this.panel.visible = !1 : this.panel.visible = !0), this.list.array = this.data, this.data.length > this.renderCount && Laya.timer.frameOnce(1, this, this._tweenToNext);
                }, AppLite.prototype._tweenToNext = function() {
                    Laya.timer.clearAll(this), this.ind = Math.max(this.list.repeatY, this.list.startIndex), this.ind == this.prevInd && (this.ind += this.list.repeatY), this.ind > this.appCount && (this.list.scrollTo(0), this.ind = this.list.repeatY), this.prevInd = this.ind, this.list.tweenTo(this.ind, this.speed - 10), Laya.timer.once(this.speed, this, this._tweenToNext);
                }, AppLite.prototype._copyEndDataToStart = function(t) {
                    if (this.appCount = t.length, t.length > this.renderCount)
                        for (var e = 0; e < this.renderCount; e++) {
                            var a = t[t.length - e - 1];
                            t.unshift(a);
                        }
                }, AppLite;
            }(Laya.Script);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./AppItem": 25
    }],
    27: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./AppItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function CmWxAppLite() {
                    var e = t.call(this) || this;
                    return e.appCount = -1, e.ind = 0, e.prevInd = 0, e.renderCount = 4, e.speed = 3e3, e;
                }
                return __extends(CmWxAppLite, t), CmWxAppLite.prototype.closeComp = function() {
                    Laya.timer.clearAll(this), this.parentNode.visible = !1, this.isHide = !0;
                }, CmWxAppLite.prototype.onDisable = function() {
                    Laya.timer.clearAll(this), this.parentNode.visible = !1;
                }, CmWxAppLite.prototype.onStart = function() {}, CmWxAppLite.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick, 14), n.default.utils.addClickEvent(this.btnBack, this, this.onBackClick, 14);
                }, CmWxAppLite.prototype.onPlayGameClick = function() {
                    this.owner.scene.close(), n.default.glEvent.event("init_game_event", {}), n.default.glEvent.event("play_game_event");
                }, CmWxAppLite.prototype.onBackClick = function() {
                    n.default.commonData.isNoAds = !1, this.owner.scene.close(), n.default.glEvent.event("init_game_event", {}), Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, function(t) {}));
                }, CmWxAppLite.prototype.initUI = function() {
                    var t = 0 != this.appCount;
                    this.listNode.visible = t, this.parentNode.visible = t, this.view = this.owner;
                    var e = this.view;
                    e.height = Laya.stage.height;
                    for (var a = n.default.screen.offsetTop, i = n.default.screen.realPxRatio, o = n.default.commonData.wxsysInfo, s = 0, r = 0; r < e._children.length; r++) {
                        var l = e._children[r],
                            h = l.y + a;
                        "topPanel" == l.name && (h = o.statusBarHeight >= 30 && n.default.screen.allScreen ? o.statusBarHeight * i : 30), l.y = h, "bottomPanel" != l.name && "bottomui" != l.name || (s = 0, o && o.model.startsWith("iPhone X") && (s += 100), l.bottom = s);
                    }
                }, CmWxAppLite.swap = function(t, e, a) {
                    var i = t[e];
                    t[e] = t[a], t[a] = i;
                }, CmWxAppLite.shuffle = function(t) {
                    for (var e = t.length; e > 0; e--) {
                        var a = Math.floor(Math.random() * e);
                        CmWxAppLite.swap(t, a, e - 1);
                    }
                }, CmWxAppLite.prototype.initData = function() {}, CmWxAppLite.prototype.getData = function(t, e) {
                    for (var a = 0; a < t.length; ++a) t[a];
                }, CmWxAppLite.prototype.initList = function() {
                    var t = this.listNode;
                    null != t && (t.itemRender = i.default, t.vScrollBarSkin = "", t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem), this.renderCount = t.repeatX * t.repeatY), null != this.data && (this._copyEndDataToStart(this.data), this._setData(this.data)), t.array = this.data;
                }, CmWxAppLite.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, CmWxAppLite.prototype.onSelect = function(t) {
                    if (!(t < 0)) {
                        var e = this.listNode.getItem(t);
                        null != e && n.default.wxMgr.openOtherApp(e.app_id, e.category), this.listNode.selectedIndex = -1;
                    }
                }, CmWxAppLite.prototype._setData = function(t) {
                    this.ind = 0, null != this.parentNode && (null == this.data || 0 == this.data.length ? this.parentNode.visible = !1 : this.parentNode.visible = !0), this.listNode.array = this.data, this.data.length > this.renderCount && Laya.timer.frameOnce(1, this, this._tweenToNext);
                }, CmWxAppLite.prototype._tweenToNext = function() {
                    Laya.timer.clearAll(this), this.ind = Math.max(this.listNode.repeatX, this.listNode.startIndex), this.ind == this.prevInd && (this.ind += this.listNode.repeatX), this.ind > this.appCount && (this.listNode.scrollTo(0), this.ind = this.listNode.repeatX), this.prevInd = this.ind, this.listNode.tweenTo(this.ind, this.speed - 10), Laya.timer.once(this.speed, this, this._tweenToNext);
                }, CmWxAppLite.prototype._copyEndDataToStart = function(t) {
                    if (this.appCount = t.length, t.length > this.renderCount)
                        for (var e = 0; e < this.renderCount; e++) {
                            var a = t[t.length - e - 1];
                            t.unshift(a);
                        }
                }, CmWxAppLite;
            }(Laya.Script);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./AppItem": 25
    }],
    28: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./AppItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function GameAppList() {
                    var e = t.call(this) || this;
                    return e.repeatX = 0, e.appCount = -1, e;
                }
                return __extends(GameAppList, t), GameAppList.prototype.onStart = function() {
                    this.initData(), this.initList(), n.default.commonData.isNoAds = !0;
                }, GameAppList.prototype.initData = function() {
                    i.default.appWidth = this.appWidth, i.default.appHeight = this.appHeight, i.default.appPrefab = this.appPrefab, this.data = n.default.wxMgr.getWxappList(this.category), this.appCount = this.data.length;
                }, GameAppList.prototype.initList = function() {
                    var t = this.listNode;
                    null != t && (t.itemRender = i.default, t.hScrollBarSkin = "", t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem), t.mouseHandler = new Laya.Handler(this, this.onMouseHandler), this.repeatX = t.repeatX, this.appCount > 0 && (t.array = this.data)), Laya.timer.once(1e3, this, this.moveList);
                }, GameAppList.prototype.onMouseHandler = function(t, e) {
                    this.listNode.startIndex < 5 ? Laya.timer.once(200, this, this.moveList) : Laya.timer.once(200, this, this.moveList1);
                }, GameAppList.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, GameAppList.prototype.onSelect = function(t) {
                    if (!(t < 0)) {
                        var e = this.listNode.getItem(t);
                        null != e && n.default.wxMgr.openOtherApp(e.app_id, e.category), this.listNode.selectedIndex = -1;
                    }
                }, GameAppList.prototype.moveList = function() {
                    this.listNode.tweenTo(this.data.length - 5, 12e3, new Laya.Handler(this, this.moveList1));
                }, GameAppList.prototype.moveList1 = function() {
                    this.listNode.tweenTo(0, 12e3, new Laya.Handler(this, this.moveList));
                }, GameAppList;
            }(Laya.Script);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./AppItem": 25
    }],
    29: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function RankItem() {
                var e = t.call(this) || this;
                return e.size(e.width, e.height), e.initUI(), e;
            }
            return __extends(RankItem, t), RankItem.prototype.initUI = function() {
                var t = Laya.loader.getRes("prefab/rankItem.json"),
                    e = Laya.Pool.getItemByCreateFun("rankItem", t.create, t);
                this.imgBg = e.getChildByName("bg"), this.lblName = e.getChildByName("lblName"), this.lblScore = e.getChildByName("lblScore"), this.lblRank = e.getChildByName("lblRank"), this.imgAvatar = e.getChildByName("avatar"), this.addChild(e);
            }, RankItem.prototype.setRankItem = function(t) {
                var e = t.user_nickname.length > 6 ? t.user_nickname.substr(0, 8) : t.user_nickname;
                this.lblName.text = "" != e ? e : "神秘玩家";
                var a = 28,
                    i = t.rank;
                0 == t.rank && (a = 24, i = "未上榜"), this.lblRank.fontSize = a, this.lblRank.text = i, this.lblScore.text = t.score;
                var n = "" != t.avatar ? t.avatar : "ui/rank/avater_default.png";
                this.imgBg.loadImage(t.bgUrl), this.imgAvatar.loadImage(n);
            }, RankItem;
        }(Laya.Box);
        a.default = i;
    }, {}],
    30: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function skinItem() {
                var e = t.call(this) || this;
                return e.icon = null, e.getTypeTag = null, e.initItem(), e;
            }
            return __extends(skinItem, t), skinItem.prototype.onDisable = function() {}, skinItem.prototype.initItem = function() {
                if (skinItem.itemPrefab) {
                    var t = Laya.Pool.getItemByCreateFun("SkinItem", skinItem.itemPrefab.create, skinItem.itemPrefab);
                    this.icon = t.getChildByName("skinIcon"), this.getTypeTag = t.getChildByName("typeTag"), this.icon.size(skinItem.iconWidth, skinItem.iconHeight), this.icon.pos(skinItem.iconOffset.x, skinItem.iconOffset.y), t.size(skinItem.itemWidth, skinItem.itemHeight), this.addChild(t);
                } else console.error("app prefab is null");
            }, skinItem.prototype.setItemInfo = function(t) {
                null != t && (this.icon.skin = t.iconPath, this.getTypeTag.skin = t.tagPath);
            }, skinItem.itemWidth = 128, skinItem.itemHeight = 128, skinItem.itemPrefab = null, skinItem.iconWidth = 150, skinItem.iconHeight = 157.5, skinItem.iconOffset = Laya.Vector2.ZERO, skinItem;
        }(Laya.Box);
        a.default = i;
    }, {}],
    31: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../LayaSample"),
            n = function(t) {
                function BV_kxhs() {
                    var e = t.call(this) || this;
                    return e._maxBottom = 264, e._minBottom = 60, e;
                }
                return __extends(BV_kxhs, t), BV_kxhs.prototype.onAwake = function() {
                    this.initData(), this.initUI(), this.initEvent(), this.initEventBase(), this.initSize(), this.initBanner();
                }, BV_kxhs.prototype.onOpened = function(t) {
                    i.default.commonData.existInterAd && (i.default.commonData.isAdDelay ? "views/home.scene" != this.url && "views/rank.scene" != this.url || i.default.adMgr.showInterstitialAd() : "views/clearing.scene" != this.url && "views/rank.scene" != this.url || i.default.adMgr.showInterstitialAd());
                }, BV_kxhs.prototype.onClosed = function() {
                    Laya.timer.clearAll(this), i.default.glEvent.offAllCaller(this);
                }, BV_kxhs.prototype.initData = function() {
                    this._isOpen = !0, i.default.commonData.topView = this.url;
                }, BV_kxhs.prototype.initUI = function() {}, BV_kxhs.prototype.initEvent = function() {}, BV_kxhs.prototype.initEventBase = function() {
                    i.default.glEvent.on("ad_load_event", this, this.onLoadAdEvent), i.default.glEvent.on("ad_show_event", this, this.onShowAdEvent);
                }, BV_kxhs.prototype.getChild = function(t, e) {
                    return e || (e = this), e.getChildByName(t);
                }, BV_kxhs.prototype.initSize = function() {
                    this.x = (Laya.stage.width - this.width) / 2;
                }, BV_kxhs.prototype.initBanner = function() {
                    Laya.Browser.onWeiXin && "views/home.scene" != this.url && "views/login.scene" != this.url && "views/game.scene" != this.url && (Laya.timer.clear(this, this.refreshBannerAd), this.refreshBannerAd());
                }, BV_kxhs.prototype.refreshBannerAd = function() {
                    "views/game.scene" != this.url && ("views/home.scene" != this.url ? (this.resetBannerAd(), i.default.adMgr.setBannerItem()) : this._isOpen || i.default.adMgr.setBannerItem(), i.default.adMgr.getBannerItem() || i.default.adMgr.setBannerItem(), this._isOpen = !1, i.default.adMgr.hideBannerAd(), i.default.commonData.isAdDelay ? (Laya.timer.clear(this, this.reappearBannerAd), Laya.timer.once(i.default.commonData.latencyTime, this, this.reappearBannerAd)) : this.reappearBannerAd());
                }, BV_kxhs.prototype.reappearBannerAd = function() {
                    i.default.adMgr.showBannerAd();
                }, BV_kxhs.prototype.resetBannerAd = function() {
                    var t = i.default.adMgr.getBannerItem();
                    if (t) {
                        var e = t.width,
                            a = (t.height, Laya.Browser.clientWidth);
                        e != a && (this._isResizeAd = !0, i.default.adMgr.setBannerAdWidth(a));
                    }
                }, BV_kxhs.prototype.tweenAd = function() {
                    var t = i.default.adMgr.getBannerItem();
                    if (t) {
                        t.width;
                        for (var e = t.height, a = i.default.screen.realPxRatio, n = Math.floor(e * a), o = 0; o < this._children.length; ++o) {
                            var s = this._children[o];
                            if ("bottomPanel" == s.name && e && s.bottom < n && Laya.Tween.to(s, {
                                    bottom: n
                                }, i.default.commonData.moveTime, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {}), 0, !0), "middlePanel" == s.name && e) {
                                var r = s.y + s.height + n;
                                r > Laya.stage.height && (s.y = s.y - (r - Laya.stage.height));
                            }
                        }
                    }
                }, BV_kxhs.prototype.onLoadAdEvent = function(t) {
                    switch (t.adtype) {
                        case "video":
                        case "banner":
                            t.isLoad;
                    }
                }, BV_kxhs.prototype.onShowAdEvent = function(t) {
                    t && "banner" != t.adtype || this.tweenAd();
                }, BV_kxhs;
            }(Laya.Scene);
        a.default = n;
    }, {
        "../LayaSample": 3
    }],
    32: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = function(t) {
                function ClearingView_kxhs() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(ClearingView_kxhs, t), ClearingView_kxhs.prototype.initData = function() {
                    n.default.wxMgr.settlementLevel(n.default.commonData.newLevel, n.default.commonData.newScore)
                }, ClearingView_kxhs.prototype.initUI = function() {
                    var t = this.getChild("bottomPanel");
                    this.btnBack = this.getChild("btnBack", t), this.btnPlay = this.getChild("btnPlay", t);
                    var e = this.getChild("score");
                    this.fontScore = this.getChild("fontScore", e), this.fontScore.value = n.default.commonData.newScore.toString();
                    this.fontScoreb = this.getChild("fontScoreb", e);
                    var e = n.default.storageMgr.getGameStatus();
                    this.fontScoreb.value = e.maxScore;
                }, ClearingView_kxhs.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick), n.default.utils.addClickEvent(this.btnBack, this, this.onBackClick);
                }, ClearingView_kxhs.prototype.onShareClick = function() {
                    n.default.wxMgr.shareFriend(0, !0);
                }, ClearingView_kxhs.prototype.onPlayGameClick = function() {
                    platform.getInstance().showInterstitial(() => {
                        if (this.close(), n.default.glEvent.event("init_game_event", {
                                isPlay: !0
                            }), n.default.storageMgr.isSkinTips()) {
                            var t = {
                                target: "views/home.scene"
                            };
                            Laya.Scene.open("views/freeSkin.scene", !1, t, Laya.Handler.create(this, function(t) {}));
                        } else n.default.glEvent.event("play_game_event", {
                            isPlay: !0
                        });
                    })
                }, ClearingView_kxhs.prototype.onBackClick = function() {
                    this.onWxWakeEvent();
                }, ClearingView_kxhs.prototype.onOpenView = function() {
                    this.close();
                }, ClearingView_kxhs.prototype.showRank = function(t) {}, ClearingView_kxhs.prototype.onWxWakeEvent = function() {
                    n.default.glEvent.event("init_game_event", {})
                    Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, this.onOpenView));
                }, ClearingView_kxhs.prototype.onShareBackEvent = function(t) {}, ClearingView_kxhs;
            }(i.default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./BV_kxhs": 31
    }],
    33: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = function(t) {
                function CollectView_kxhs() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return __extends(CollectView_kxhs, t), CollectView_kxhs.prototype.onAwake = function() {
                    n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd(), t.prototype.onAwake.call(this);
                }, CollectView_kxhs.prototype.initUI = function() {
                    this.btnCancel = this.getChild("btnCancel");
                }, CollectView_kxhs.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnCancel, this, this.cancelClick);
                }, CollectView_kxhs.prototype.cancelClick = function() {
                    this.close(), n.default.commonData.isNoAds = !1, n.default.adMgr.showBannerAd();
                }, CollectView_kxhs;
            }(i.default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./BV_kxhs": 31
    }],
    34: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = t("../gameLogic/GameCtrl"),
            s = t("../gameLogic/InputCtrl"),
            r = t("../gameLogic/RoadPlaneCtrl"),
            l = function(t) {
                function GameView_kxhs() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.showCount = 0, e;
                }
                return __extends(GameView_kxhs, t), GameView_kxhs.prototype.initData = function() {
                    this.loadScene(), this.loadModels();
                }, GameView_kxhs.prototype.initUI = function() {
                    var t = this.getChild("topPanel");
                    this.lbLevel = this.getChild("lbLevel", t), this.visible = !1, this.guidePanel = this.getChild("guidePanel"), this.sprGuide = this.getChild("sprGuide", this.guidePanel), n.default.tweenMgr.toPosition(this.sprGuide, {
                        x: 569,
                        y: 1075
                    }, 1e3, !0), this.fontScore = this.getChild("fontScore", t), this.fontScore.value = "0", this.overRankSet();
                }, GameView_kxhs.prototype.initEvent = function() {
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), n.default.glEvent.on("update_speed_event", this, this.updateSpeedEvent), n.default.glEvent.on("init_game_event", this, this.initGameEvent), n.default.glEvent.on("over_game_event", this, this.overGameEvent), n.default.glEvent.on("play_game_event", this, this.onPlayGameEvent), n.default.glEvent.on("goon_game_event", this, this.onGoonGameEvent), n.default.glEvent.on("change_skin_event", this, this.changeSkin);
                }, GameView_kxhs.prototype.loadScene = function() {
                    var t = Laya.loader.getRes("res/LayaScene_GameScene/Conventional/GameScene.ls");
                    Laya.stage.addChild(t), Laya.stage.setChildIndex(t, 0), this.istart = !0, this.speed = 1, console.log("加载场景成功！"), this.player = t.getChildByName("GameObject"), this.player.addComponent(s.default), this.player.addComponent(r.default).init(t), this.GameCtrl = t.addChild(new Laya.Node()), this.GameCtrl.addComponent(o.default).init(t, this.player);
                }, GameView_kxhs.prototype.loadModels = function() {}, GameView_kxhs.prototype.setFog = function() {
                    var t = this.mainScene;
                    t.enableFog = !0, t.fogColor = n.default.utils.getRGB("#7BBDBD"), t.fogStart = 20, t.fogRange = 80;
                }, GameView_kxhs.prototype.setFriendRank = function() {}, GameView_kxhs.prototype.hideIcon = function() {}, GameView_kxhs.prototype.showFriendRank = function() {}, GameView_kxhs.prototype.lateShowRank = function() {}, GameView_kxhs.prototype.closeGameRank = function() {}, GameView_kxhs.prototype.overRankSet = function() {}, GameView_kxhs.prototype.getRankList = function(t) {
                    var e = new Array(20);
                    if (t.length <= 22) {
                        for (var a = 0; a < t.length - 2; ++a) e[t.length - 3 - a] = t[a + 2];
                        return e.length = t.length - 2, e;
                    }
                    var i = Math.floor((t.length - 2) / 20);
                    for (Math.floor((t.length - 2) % 20), a = 0; a < 20; ++a) e[19 - a] = t[a * i + Math.floor(Math.random() * i) + 2];
                    return e;
                }, GameView_kxhs.prototype.showWorldRankIcon = function() {}, GameView_kxhs.prototype.setWorldRank = function() {
                    if (this.rankPanel = this.getChildByName("topPanel").getChildByName("rankPanel"), n.default.commonData.gameList && !(n.default.commonData.gameList.list.length < 2)) {
                        var t = n.default.commonData.gameList.list;
                        this.rankPanel.visible = !0, this.rankPanel.getChildByName("icon").visible = !0, t[0].avatar == n.default.commonData.gameList.userInfo.avatar ? this.rankPanel.getChildByName("icon").texture = t[1].avatar : this.rankPanel.getChildByName("icon").texture = t[0].avatar, Laya.timer.once(3e3, this, this.hideIcon);
                    }
                }, GameView_kxhs.prototype.onMouseDownEvent = function(t) {
                    !n.default.gameMgr.isOver && n.default.gameMgr.isPlay && (this.guidePanel.visible = !1);
                }, GameView_kxhs.prototype.onMouseUpEvent = function() {}, GameView_kxhs.prototype.onMouseMoveEvent = function(t) {}, GameView_kxhs.prototype.initGameEvent = function(t) {
                    n.default.gameMgr.isOver = !1, n.default.gameMgr.isPlay = t.isPlay, t.isPlay && (n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd()), console.log("游戏初始化"), this.GameCtrl.getComponent(o.default).prepareGame(), n.default.commonData.isPass = !1, this.fontScore.value = "0";
                }, GameView_kxhs.prototype.onPlayGameEvent = function() {
                    n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd(), n.default.gameMgr.isPlay = !0, n.default.commonData.skinGameCount++, n.default.storageMgr.isPlaySound() && n.default.soundMgr.playBGM(), this.visible = !0, this.setFriendRank(), Laya.timer.loop(1e4, this, this.showFriendRank), this.GameCtrl.getComponent(o.default).startGame(), this.guidePanel.visible = !0;
                }, GameView_kxhs.prototype.onGoonGameEvent = function() {
                    n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd(), n.default.commonData.goonCount++, n.default.storageMgr.isPlaySound() && n.default.soundMgr.playBGM(), Laya.timer.loop(1e4, this, this.showFriendRank), this.visible = !0, this.GameCtrl.getComponent(o.default).continueGame();
                }, GameView_kxhs.prototype.changeSkin = function(t) {
                    this.GameCtrl.getComponent(o.default).currentSkinId = t.index, this.initGameEvent(t);
                }, GameView_kxhs.prototype.overGameEvent = function() {
                    n.default.commonData.isNoAds = !1, n.default.gameMgr.isOver = !0, n.default.gameMgr.isPlay = !1, Laya.timer.clear(this, this.showFriendRank), this.visible = !1, n.default.commonData.goonCount > 0 ? (n.default.commonData.goonCount = 0, Laya.Scene.open("views/clearing.scene", !1)) : Laya.Scene.open("views/over.scene", !1);
                }, GameView_kxhs.prototype.updateSpeedEvent = function(t) {
                    this.fontScore.value = t.speed.toFixed(0);
                }, GameView_kxhs;
            }(i.default);
        a.default = l;
    }, {
        "../LayaSample": 3,
        "../gameLogic/GameCtrl": 7,
        "../gameLogic/InputCtrl": 8,
        "../gameLogic/RoadPlaneCtrl": 11,
        "./BV_kxhs": 31
    }],
    35: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = function(t) {
                function HomeView_kxhs() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.soundSkin = "ui/common/btn_sound_", e.vibrateSkin = "ui/common/btn_vibrate_", e;
                }
                return __extends(HomeView_kxhs, t), HomeView_kxhs.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.setWxapp(0), this.setWxapp(1), this.setWxapp(2), this.setWxapp(3);
                }, HomeView_kxhs.prototype.initUI = function() {
                    var t = this.getChild("topPanel"),
                        e = this.getChild("bottomui");
                    this.btnSound = this.getChild("btnSound", t), this.setSound(n.default.storageMgr.isPlaySound()), this.btnPlay = this.getChild("btnPlay", e);
                    let gameList = this.getChild("gameList");
                    this.upList = this.getChild("upList", gameList);
                    this.upList.renderHandler = new Laya.Handler(this, function(e) {
                        e.offAll(Laya.Event.MOUSE_DOWN);
                        e.on(Laya.Event.MOUSE_DOWN, e, () => {
                            platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                        });
                    })
                    this.upList.array = platform.getInstance().getForgames();
                }, HomeView_kxhs.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnSound, this, this.onSoundClick), n.default.utils.addClickEvent(this.btnPlay, this, this.onPlayGameClick);
                }, HomeView_kxhs.prototype.setSound = function(t) {
                    var e = t ? "on.png" : "off.png";
                    this.btnSound.skin = this.soundSkin + e, laya.media.SoundManager.muted = !t, n.default.storageMgr.setPlaySound(t);
                }, HomeView_kxhs.prototype.onSoundClick = function() {
                    this.setSound(!n.default.storageMgr.isPlaySound());
                }, HomeView_kxhs.prototype.onPlayGameClick = function() {
                    platform.getInstance().showInterstitial(() => {
                        var t = this;
                        if (n.default.storageMgr.isSkinTips()) {
                            var e = {
                                target: "views/home.scene"
                            };
                            n.default.commonData.isNoAds = !1, Laya.Scene.open("views/freeSkin.scene", !1, e, Laya.Handler.create(this, function(e) {
                                t.close();
                            }));
                        } else this.close(), n.default.glEvent.event("play_game_event", {
                            isPlay: !0
                        });
                    })
                }, HomeView_kxhs.prototype.onWxgameClick = function(t) {
                    var e = t.target.appData.appid;
                    e && "" != e ? n.default.wxMgr.openOtherApp(e, t.target.appData.appIndex) : console.log("appid error.");
                }, HomeView_kxhs.prototype.setWxapp = function(t) {}, HomeView_kxhs;
            }(i.default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./BV_kxhs": 31
    }],
    36: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = function(t) {
                function LoginView_kxhs() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._loadCount = 1, e._loadNum = 0, e._isLoadFinish = !1, e;
                }
                return __extends(LoginView_kxhs, t), LoginView_kxhs.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this);
                    let bg = new Laya.Image();
                    bg.skin = "loading/bg.png";
                    bg.left = bg.right = bg.top = bg.bottom = 0;
                    bg.zOrder = -1;
                    Laya.stage.addChild(bg);
                    platform.getInstance().startup("", "", () => {
                        this.loadRes()
                    })
                }, LoginView_kxhs.prototype.onOpened = function() {
                    n.default.configMgr.init(), n.default.soundMgr.init(), n.default.wxMgr.init(), n.default.adMgr.init();
                    this.height = Laya.stage.height;
                    for (var t = n.default.screen.offsetTop, e = n.default.screen.realPxRatio, a = n.default.commonData.wxsysInfo, i = 0; i < this._children.length; i++) {
                        var o = this._children[i],
                            s = o.y + t;
                        "topPanel" == o.name && (s = a.statusBarHeight >= 30 && n.default.screen.allScreen ? a.statusBarHeight * e : 30), o.y = s;
                    }
                    n.default.utils.loadSubpackage("voice", this, function(t, e) {});
                }, LoginView_kxhs.prototype.initUI = function() {
                    var t = this.getChildByName("viewLoad");
                    this.lblPres = t.getChildByName("lblPres"), this.barPres = t.getChildByName("barPres");
                }, LoginView_kxhs.prototype.initEvent = function() {
                    n.default.glEvent.on("load_finish_event", this, this.onLoadFinish);
                }, LoginView_kxhs.prototype.onLoadFinish = function(t) {
                    this._loadNum++, this._loadNum >= this._loadCount && (this.barPres.value = 1, this.lblPres.text = "100%", this.loadFinished = !0, this.loadGameScene());
                }, LoginView_kxhs.prototype.onLoading = function(t) {
                    var e = (this._loadNum + t) / (this._loadCount + 1);
                    this.barPres.value = e, this.lblPres.text = Math.floor(100 * e) + "%";
                }, LoginView_kxhs.prototype.loadRes = function() {
                    var t = [{
                        url: "res/LayaScene_GameScene/Conventional/GameScene.ls",
                        clas: Laya.Scene,
                        priority: 1
                    }];
                    Laya.loader.create(t, Laya.Handler.create(this, this.onLoadFinish, [{
                        target: "3dres"
                    }], !1), Laya.Handler.create(this, this.onLoading, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, function(t) {
                        console.error("load 3dres error:", t);
                    });
                }, LoginView_kxhs.prototype.loadGameScene = function() {
                    Laya.Browser.onWeiXin ? this.loadFinished && this.openGameScene() : this.openGameScene();
                }, LoginView_kxhs.prototype.openGameScene = function() {
                    var t = this;
                    Laya.Scene.open("views/game.scene", !1, Laya.Handler.create(this, function(e) {
                        Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(t, function(e) {
                            t.close();
                        }));
                    }));
                }, LoginView_kxhs;
            }(i.default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./BV_kxhs": 31
    }],
    37: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("./BV_kxhs"),
            n = t("../LayaSample"),
            o = function(t) {
                function OverView_kxhs() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.overTime = 10, e.bshowVideo = !1, e;
                }
                return __extends(OverView_kxhs, t), OverView_kxhs.prototype.onAwake = function() {
                    this.bshowVideo = true, t.prototype.onAwake.call(this), this.initProcess();
                }, OverView_kxhs.prototype.onOpened = function() {}, OverView_kxhs.prototype.onWxWakeEvent = function() {}, OverView_kxhs.prototype.onWxSleepEvent = function() {}, OverView_kxhs.prototype.initData = function() {}, OverView_kxhs.prototype.initUI = function() {
                    console.log("gameEnd");
                    HUHU_showInterstitialAd();
                    this.btnVideo = this.getChild("btnVideo");
                    var e = this.getChild("bottomPanel");
                    this.btnSkip = this.getChild("btnSkip", e);
                }, OverView_kxhs.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnVideo, this, this.onVideoClick), n.default.utils.addClickEvent(this.btnSkip, this, this.onSkipClick);
                }, OverView_kxhs.prototype.onVideoClick = function() {
                    platform.getInstance().showReward(() => {
                        this.bshowVideo = !0, this.isStartTimer = !1;
                        this.close(), this.goonGame()
                    }, () => {
                        platform.getInstance().prompt("Failed to get the rewarded video, please try again later");
                    })
                }, OverView_kxhs.prototype.onSkipClick = function() {
                    n.default.commonData.existInterAd && n.default.adMgr.showInterstitialAd(), this.closeView();
                }, OverView_kxhs.prototype.closeView = function() {
                    var t = this;
                    n.default.adMgr.hideBannerAd(), Laya.Scene.open("views/clearing.scene", !1, Laya.Handler.create(this, function(e) {
                        t.close();
                    }));
                }, OverView_kxhs.prototype.onTimerStart = function() {}, OverView_kxhs.prototype.onVideoCloseEvent = function(t) {}, OverView_kxhs.prototype.initProcess = function() {}, OverView_kxhs.prototype.onFrame = function() {}, OverView_kxhs.prototype.goonGame = function() {
                    n.default.glEvent.event("goon_game_event");
                }, OverView_kxhs.prototype.drawBar = function() {}, OverView_kxhs;
            }(i.default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "./BV_kxhs": 31
    }],
    38: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../uiComp/RankItem"),
            n = t("./BV_kxhs"),
            o = t("../LayaSample"),
            s = function(t) {
                function RankView_kxhs() {
                    var e = t.call(this) || this;
                    return e.rankBgList = ["ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png"], e.worldList = null, e.rankMe = null, e.btnBack = null, e.tabRank = null, e.friendList = null, e.existWorldRank = !0, e.worldLoading = 0, e;
                }
                return __extends(RankView_kxhs, t), RankView_kxhs.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), o.default.commonData.isNoAds = !0, o.default.adMgr.hideBannerAd(), this.onRankFriend(), this.pageWorldRank = 1, this.isLoadedWorldRank = !1, o.default.wxMgr.worldRank(1), Laya.loader.load("prefab/rankItem.json", Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB);
                }, RankView_kxhs.prototype.initUI = function() {
                    var t = this.getChild("topPanel");
                    this.btnBack = this.getChild("btnBack", t), this.tabRank = this.getChild("tabRank"), this.world = this.getChild("world"), this.worldList = this.getChild("list", this.world), this.rankMe = this.getChild("rankMe", this.world), this.friend = this.getChild("friend"), this.friendList = this.getChild("list", this.friend), this.touchArea = this.getChild("touchArea", this.friend), this.touchArea.alpha = 0;
                }, RankView_kxhs.prototype.initEvent = function() {
                    o.default.utils.addClickEvent(this.btnBack, this, this.onCloseClick, 12), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick), o.default.glEvent.on("draw_world_rank_event", this, this.onDrawWorldrankEvent);
                }, RankView_kxhs.prototype.onClosed = function() {
                    o.default.glEvent.off("draw_world_rank_event", this, this.onDrawWorldrankEvent), Laya.loader.clearRes("prefab/rankItem.json"), this.clear();
                }, RankView_kxhs.prototype.initRankEvent = function(t) {
                    if (!t) return this.touchArea.offAllCaller(this), this.touchArea.visible = !1, void(this.friendList.visible = !1);
                    this.touchArea.visible = !0, this.friendList.visible = !0;
                    var e = 0,
                        a = 0,
                        i = 0,
                        n = 0,
                        s = o.default.commonData.wxsysInfo.pixelRatio ? o.default.commonData.wxsysInfo.pixelRatio : 1;
                    Laya.Browser.onWeiXin && (this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                        t.stopPropagation(), i = 0, a = t.nativeEvent.timeStamp, e = t.nativeEvent.changedTouches[0].clientY, o.default.wxMgr.onFrientMouseEvent({
                            cmd: "touch_start"
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function(t) {
                        t.stopPropagation(), i = t.nativeEvent.changedTouches[0].clientY - e, o.default.wxMgr.onFrientMouseEvent({
                            cmd: "touch_move",
                            deltaY: i * s
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function(t) {
                        t.stopPropagation(), n = i / (t.nativeEvent.timeStamp - a), o.default.wxMgr.onFrientMouseEvent({
                            cmd: "touch_end",
                            speed: n
                        });
                    }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function(t) {
                        t.stopPropagation(), n = i / (t.nativeEvent.timeStamp - a), o.default.wxMgr.onFrientMouseEvent({
                            cmd: "touch_cancel",
                            speed: n
                        });
                    }));
                }, RankView_kxhs.prototype.showList = function(t) {
                    var e = t ? 1 : 0;
                    this.worldList.alpha = e, this.rankMe.alpha = e;
                }, RankView_kxhs.prototype.initList = function() {
                    var t = this.worldList;
                    t.itemRender = i.default, t.cacheContent = !1, t.vScrollBarSkin = "", t.selectEnable = !1, t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem), this.worldLoading++;
                }, RankView_kxhs.prototype.refreshList = function() {
                    if (this.worldLoading >= 2) {
                        if (this.worldList.refresh(), 0 == this.rankMe.numChildren) {
                            var t = new i.default();
                            this.rankMe.addChild(t), t.setRankItem(this.userRank);
                        }
                        Laya.timer.clear(this, this.refreshList);
                    }
                }, RankView_kxhs.prototype.onRankClick = function(t) {
                    1 == t ? this.onRankWorld() : this.onRankFriend();
                }, RankView_kxhs.prototype.onRankFriend = function() {
                    if (this.world.visible = !1, this.friend.visible = !0, this.friendList.visible = !0, this.showList(!1), this.initRankEvent(!0), o.default.wxMgr.showFriendRank(!0), window.wx && window.sharedCanvas) {
                        var t = this.friendList.width,
                            e = this.friendList.height;
                        window.sharedCanvas.width = t, window.sharedCanvas.height = e;
                    }
                }, RankView_kxhs.prototype.onRankWorld = function() {
                    this.world.visible = !0, this.friend.visible = !1, this.friendList.visible = !1, this.showList(!0), this.initRankEvent(!1), o.default.wxMgr.showFriendRank(!1), Laya.timer.loop(100, this, this.refreshList);
                }, RankView_kxhs.prototype.onDrawWorldrankEvent = function(t) {
                    this.worldLoading++;
                    var e = t.page,
                        a = {},
                        i = [];
                    if (t.data instanceof Array) i = t.data, a.data = {
                        list: i,
                        page: e
                    };
                    else {
                        if (!t.data) return void console.error("rank data is null.");
                        a = t, i = t.data.list, t.data.userInfo.userId = t.data.userInfo.id, t.data.userInfo.bgUrl = this.rankBgList[2], delete t.data.userInfo.id, this.userRank = t.data.userInfo;
                    }
                    if (i) {
                        this.existWorldRank = i.length >= 20;
                        for (var n = a.data.list.length, o = 0; o < n; ++o) {
                            a.data.list[o].userId = a.data.list[o].id;
                            var s = (a.data.list[o].rank - 1) % 2;
                            a.data.list[o].bgUrl = this.rankBgList[s], delete a.data.list[o].id;
                        }
                        this.rankData || (this.rankData = {}), this.pageWorldRank = e, this.rankData[e] = a;
                        var r = [];
                        for (var l in this.rankData) r.push.apply(r, this.rankData[l].data.list);
                        this.worldList.updateArray(r), this.isLoadedWorldRank = !0;
                    } else this.existWorldRank = !1;
                }, RankView_kxhs.prototype.updateItem = function(t, e) {
                    t.setRankItem(t.dataSource);
                    var a = this.pageWorldRank;
                    if (e - 6 == 0 && a < 6);
                    else if (e + 6 == this.worldList.length) {
                        a += 1, this.rankData[a] || this.isLoadedWorldRank && this.existWorldRank;
                    }
                }, RankView_kxhs.prototype.onSelect = function(t) {
                    console.log("当前选择的索引：" + t);
                }, RankView_kxhs.prototype.onCloseClick = function() {
                    var t = this;
                    o.default.commonData.isNoAds = !1, Laya.Scene.open("views/home.scene", !1, laya.utils.Handler.create(this, function(e) {
                        t.close();
                    }));
                }, RankView_kxhs.prototype.clear = function() {
                    o.default.wxMgr.showFriendRank(!1), this.touchArea.offAllCaller(this), this.worldList.array = [], this.worldList.destroy();
                }, RankView_kxhs;
            }(n.default);
        a.default = s;
    }, {
        "../LayaSample": 3,
        "../uiComp/RankItem": 29,
        "./BV_kxhs": 31
    }],
    39: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = t("../uiComp/skinItem"),
            n = t("../LayaSample"),
            o = function(t) {
                function SkinView_kxhs() {
                    var e = t.call(this) || this;
                    return e.itemCount = 0, e.itemIndex = 0, e.skinItemPath = "prefab/freeSkinItem.json", e.skinData = [], e;
                }
                return __extends(SkinView_kxhs, t), SkinView_kxhs.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), Laya.loader.load(this.skinItemPath, Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB), n.default.commonData.isShowSkin = !1;
                }, SkinView_kxhs.prototype.onOpened = function(t) {
                    t && t.isPlay && (this.isPlay = t.isPlay, n.default.gameMgr.isPlay = !1);
                }, SkinView_kxhs.prototype.initUI = function() {
                    var t = this.getChild("content");
                    this.skinList = this.getChild("skinList", t);
                    this.getChild("bottom");
                    var e = this.getChild("bottomPanel");
                    this.btnVideo = this.getChild("btnVideo", e), this.btnVideo.visible = !0, this.btnBack = this.getChild("btnSkip", e), n.default.tweenMgr.toScale(this.btnVideo, 1.1, 500, !0, !0);
                }, SkinView_kxhs.prototype.initEvent = function() {
                    n.default.utils.addClickEvent(this.btnVideo, this, this.onVideoClick, 14), n.default.utils.addClickEvent(this.btnBack, this, this.onBackClick, 14)
                }, SkinView_kxhs.prototype.onClosed = function() {
                    t.prototype.onClosed.call(this), this.isPlay && (n.default.gameMgr.isPlay = !0);
                }, SkinView_kxhs.prototype.onDisable = function() {}, SkinView_kxhs.prototype.initData = function() {
                    this.itemCount = 4, this.skinData = [];
                    for (var t = 0; t < this.itemCount; ++t) {
                        var e = {
                            id: t + 1,
                            iconPath: "ui/common/pifu_" + (t + 1) + ".png",
                            tagPath: "ui/common/icon_7.png"
                        };
                        this.skinData.push(e);
                    }
                }, SkinView_kxhs.prototype.initList = function() {
                    i.default.itemWidth = 200, i.default.itemHeight = 270, i.default.iconWidth = 142, i.default.iconHeight = 195, i.default.iconOffset = new Laya.Vector2(29, 8), i.default.itemPrefab = Laya.loader.getRes(this.skinItemPath);
                    var t = this.skinList;
                    t.itemRender = i.default, t.selectEnable = !0, t.selectHandler = new Laya.Handler(this, this.onSelect), t.renderHandler = new Laya.Handler(this, this.updateItem), t.array = this.skinData;
                }, SkinView_kxhs.prototype.updateItem = function(t, e) {
                    t.setItemInfo(t.dataSource);
                }, SkinView_kxhs.prototype.onSelect = function(t) {
                    if (t < 0) {} else {
                        platform.getInstance().showReward(() => {
                            this.itemIndex = t + 1;
                            this.changeSkin();
                            this.skinList.selectedIndex = -1
                        }, () => {
                            platform.getInstance().prompt("Failed to get the rewarded video, please try again later");
                        })
                    }
                }, SkinView_kxhs.prototype.onVideoClick = function() {
                    platform.getInstance().showReward(() => {
                        this.itemIndex = Math.floor(4 * Math.random()), this.changeSkin()
                    }, () => {
                        platform.getInstance().prompt("Failed to get the rewarded video, please try again later");
                    })
                }, SkinView_kxhs.prototype.onBackClick = function() {
                    this.itemIndex = 0, n.default.glEvent.event("change_skin_event", {
                        index: this.itemIndex,
                        isPlay: !0
                    }), n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd(), this.close(), n.default.glEvent.event("play_game_event", {
                        isPlay: !0
                    });
                }, SkinView_kxhs.prototype.onAdLoadEvent = function(t) {}, SkinView_kxhs.prototype.onVideoCloseEvent = function(t) {
                    t.isEnded ? (this.changeSkin(), n.default.commonData.isNoAds = !0, n.default.adMgr.hideBannerAd()) : n.default.wxMgr.showToast("未观看完视频", 2e3);
                }, SkinView_kxhs.prototype.changeSkin = function() {
                    n.default.commonData.isShowSkin = !1, n.default.glEvent.event("change_skin_event", {
                        index: this.itemIndex,
                        isPlay: !0
                    }), this.close(), n.default.glEvent.event("play_game_event", {
                        isPlay: !0
                    });
                }, SkinView_kxhs.prototype.onTipsClick = function() {
                    var t = n.default.storageMgr.isSkinTips();
                    this.tipsTag.visible = t, n.default.storageMgr.setSkinTips(!t);
                }, SkinView_kxhs;
            }(t("./BV_kxhs").default);
        a.default = o;
    }, {
        "../LayaSample": 3,
        "../uiComp/skinItem": 30,
        "./BV_kxhs": 31
    }],
    40: [function(t, e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function kxhs1() {
                var e = t.call(this) || this;
                return e.intType = 1e3, e.numType = 1e3, e.strType = "hello laya", e.boolType = !0, e;
            }
            return __extends(kxhs1, t), kxhs1.prototype.onEnable = function() {}, kxhs1.prototype.onDisable = function() {}, kxhs1;
        }(Laya.Script);
        a.default = i;
    }, {}]
}, {}, [2]);