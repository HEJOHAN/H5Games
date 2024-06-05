function _typeof(a) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a;
    } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    })(a);
}

function _classCallCheck(a, e) {
    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(a, e) {
    for (var d = 0; d < e.length; d++) {
        var t = e[d];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
    }
}

function _createClass(a, e, d) {
    return e && _defineProperties(a.prototype, e), d && _defineProperties(a, d), a;
}

function _possibleConstructorReturn(a, e) {
    return !e || "object" !== _typeof(e) && "function" != typeof e ? _assertThisInitialized(a) : e;
}

function _assertThisInitialized(a) {
    if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
}

function _getPrototypeOf(a) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
    })(a);
}

function _inherits(a, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: a,
            writable: !0,
            configurable: !0
        }
    }), e && _setPrototypeOf(a, e);
}

function _setPrototypeOf(a, e) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(a, e) {
        return a.__proto__ = e, a;
    })(a, e);
}! function() {
    var a, e, d, t, o, n, i, r = function(a) {
            function BaseLayer() {
                var a;
                return _classCallCheck(this, BaseLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(BaseLayer).call(this)))._visible = !1, a;
            }
            return _inherits(BaseLayer, Laya.Script), _createClass(BaseLayer, [{
                key: "onAwake",
                value: function() {}
            }, {
                key: "__show__",
                value: function(a) {
                    this._visible || (this._visible = !0, this.show(a));
                }
            }, {
                key: "show",
                value: function(a) {}
            }, {
                key: "__hide__",
                value: function(a) {
                    this._visible && (this._visible = !1, this.hide(a));
                }
            }, {
                key: "hide",
                value: function(a) {}
            }]), BaseLayer;
        }(),
        s = {
            coin: 0,
            energy: 100,
            level: 0,
            signInStatus: 0,
            signInDays: 0,
            key: 3,
            food: 0,
            foods: [1],
            progress: 0
        },
        l = {
            sound: {
                bgm: {
                    normalBgm: "res/sound/ANW1496_09_Champagne-For-Two.mp3"
                },
                effect: {
                    celebrations: ["res/sound/CelebrationShout1.mp3", "res/sound/CelebrationShout2.mp3", "res/sound/CelebrationShout3.mp3", "res/sound/CelebrationShout4.mp3"],
                    continuetickdown: "res/sound/continuetickdown.mp3",
                    eating: "res/sound/eating.mp3",
                    highscore: "res/sound/highscore.mp3",
                    itemquipped: "res/sound/itemquipped_C32kbps.mp3",
                    itemunlocked: "res/sound/itemunlocked.mp3",
                    pancakerelease: "res/sound/pancakerelease.mp3",
                    pancakeToFace: "res/sound/pancakeToFace1.mp3",
                    perfect: "res/sound/perfect.mp3",
                    shotcharge: "res/sound/shotcharge.mp3"
                }
            },
            tex: {
                foodTextures: ["res/icon/food_001.png", "res/icon/food_002.png", "res/icon/food_003.png", "res/icon/food_004.png", "res/icon/food_005.png", "res/icon/food_006.png", "res/icon/food_007.png", "res/icon/food_008.png", "res/icon/food_009.png", "res/icon/food_010.png", "res/icon/food_011.png", "res/icon/food_012.png", "res/icon/food_013.png", "res/icon/food_014.png", "res/icon/food_015.png", "res/icon/food_016.png", "res/icon/food_017.png", "res/icon/food_018.png", "res/icon/food_019.png", "res/icon/food_020.png", "res/icon/food_021.png", "res/icon/food_022.png", "res/icon/food_023.png", "res/icon/food_024.png", "res/icon/food_025.png", "res/icon/food_026.png", "res/icon/food_027.png", "res/icon/food_028.png", "res/icon/food_029.png", "res/icon/food_030.png", "res/icon/food_031.png", "res/icon/food_032.png", "res/icon/food_033.png"]
            },
            unity: {
                scene: {
                    gameScene: "res/unity/SampleScene.ls",
                    startScene: "res/unity/main.ls"
                },
                characters: ["res/unity/role_001.lh", "res/unity/role_002.lh", "res/unity/role_003.lh", "res/unity/role_004.lh", "res/unity/role_005.lh", "res/unity/role_006.lh", "res/unity/role_007.lh", "res/unity/role_008.lh", "res/unity/role_009.lh", "res/unity/role_010.lh", "res/unity/role_011.lh", "res/unity/role_012.lh", "res/unity/role_013.lh", "res/unity/role_014.lh", "res/unity/role_015.lh", "res/unity/role_016.lh", "res/unity/role_017.lh", "res/unity/role_018.lh", "res/unity/role_019.lh", "res/unity/role_020.lh", "res/unity/role_021.lh", "res/unity/role_022.lh", "res/unity/role_023.lh", "res/unity/role_024.lh", "res/unity/role_025.lh"],
                rooms: ["res/unity/sence01.lh", "res/unity/sence02.lh", "res/unity/sence03.lh", "res/unity/sence04.lh", "res/unity/sence05.lh"],
                foods: ["res/unity/food_001.lh", "res/unity/food_002.lh", "res/unity/food_003.lh", "res/unity/food_004.lh", "res/unity/food_005.lh", "res/unity/food_006.lh", "res/unity/food_007.lh", "res/unity/food_008.lh", "res/unity/food_009.lh", "res/unity/food_010.lh", "res/unity/food_011.lh", "res/unity/food_012.lh", "res/unity/food_013.lh", "res/unity/food_014.lh", "res/unity/food_015.lh", "res/unity/food_016.lh", "res/unity/food_017.lh", "res/unity/food_018.lh", "res/unity/food_019.lh", "res/unity/food_020.lh", "res/unity/food_021.lh", "res/unity/food_022.lh", "res/unity/food_023.lh", "res/unity/food_024.lh", "res/unity/food_025.lh", "res/unity/food_026.lh", "res/unity/food_027.lh", "res/unity/food_028.lh", "res/unity/food_029.lh", "res/unity/food_030.lh", "res/unity/food_031.lh", "res/unity/food_032.lh", "res/unity/food_033.lh"]
            }
        },
        c = (a = 1200, e = 0, d = -1, t = !0, o = !1, n = null, i = null, {
            init: function() {
                var d = this;
                console.log("sdk init");
                var o = Laya.Browser.window.wx;
                o && o.gameJump && o.gameJump.login(function(n) {
                    if (n.uid, n && n.gamecfg) {
                        var i = n.gamecfg,
                            r = Number(i.wuchugailv),
                            s = Number(i.banneryanshi),
                            l = i.nonAuditVersion;
                        isNaN(r) || (e = r / 100, console.log("wuchu gailv= ", e)), isNaN(s) || (a = s, console.log("bannerDelayTime= ", a)), l && "1.1.5" == l && (t = !1), console.log("本地版本号=", "1.1.5", " 配置非审核版本号=", l), console.log("auditStatus= ", t);
                    }
                    o.gameJump.init(null, function() {
                        d.onInited();
                    });
                });
            },
            onInited: function() {
                o || (o = !0, n && !n.destroyed && this.showTopGame(n), i && !i.destroyed && this.cblShow(i, !0));
            },
            showTopGame: function(a) {
                if (o) {
                    var e = Laya.Browser.window.wx;
                    e && e.gameJump && e.gameJump.showTopGame(a);
                } else n = a;
            },
            hideTopGame: function() {
                var a = Laya.Browser.window.wx;
                a && a.gameJump && a.gameJump.hideTopGame();
            },
            showDownGame: function(a) {
                var e = Laya.Browser.window.wx;
                return e && e.gameJump ? e.gameJump.showDownGame(a) : null;
            },
            hideDownGame: function() {
                var a = Laya.Browser.window.wx;
                a && a.gameJump && a.gameJump.hideDownGame();
            },
            cblShow: function(a, e) {
                if (o) {
                    var d = Laya.Browser.window.wx;
                    d && d.gameJump && d.gameJump.cblShow(a, e);
                } else i = a;
            },
            showGameListView: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = Laya.Browser.window.wx;
                e && e.gameJump && e.gameJump.showGameListView(a);
            },
            cblHide: function() {
                var a = Laya.Browser.window.wx;
                a && a.gameJump && a.gameJump.cblHide();
            },
            showSettlementView: function(a, e) {},
            showImitationView: function(a, e) {
                e();
            },
            showBanner: function() {},
            hideBanner: function() {},
            showBannerTrick: function(o, n, i) {},
            createGrid: function() {
                var a = Laya.Browser.window.wx;
                a && a.gameJump && a.gameJump.createGrid();
            },
            showExhibitionView: function(a) {
                var e = Laya.Browser.window.wx;
                e && e.gameJump && e.gameJump.showExhibitionView(a);
            },
            getAuditStatus: function() {
                return t;
            }
        });

    function clampf(a, e, d) {
        return a < e ? e : a > d ? d : a;
    }
    var h, f, u, y, p, v = (h = {}, {
            playMusic: function(a) {
                var e = h[a];
                return e ? e.play() : ((e = Laya.Browser.window.wx.createInnerAudioContext()).src = a, e.loop = !0, e.play(), h[a] = e), e;
            },
            playSound: function(a, e) {
                if (a in h) {
                    var d = h[a].pop();
                    if (d) return d.inPool = !1, d.play(), d;
                }
                return (d = Laya.Browser.window.wx.createInnerAudioContext()).src = a, d.loop = !!e, d.play(), d.onStop(function() {
                    d.inPool || (d.inPool = !0, h[a] = h[a] || [], h[a].push(d));
                }), d.onEnded(function() {
                    d.inPool || (d.inPool = !0, h[a] = h[a] || [], h[a].push(d));
                }), d;
            },
            stopSound: function(a) {
                a && a.stop();
            }
        }),
        w = (f = 600, u = -1, y = 0, p = null, {
            loadSubPacks: function(a) {
                a && a();
            },
            init: function() {
                s.coin = this.hasStorageSync("coin") ? this.getStorageSync("coin", "number") : 0, s.level = this.hasStorageSync("level") ? this.getStorageSync("level", "number") : 0, s.key = this.hasStorageSync("key") ? this.getStorageSync("key", "number") : 0, s.food = this.hasStorageSync("food") ? this.getStorageSync("food", "number") : 0, s.progress = this.hasStorageSync("progress") ? this.getStorageSync("progress", "number") : 0, this.initSignInData(), this.initFoods(), console.log("本地数据初始化=", s), this.initShare();
            },
            initAfterAllResLoaded: function() {
                var a = this;
                Laya.Browser.window.wx && Laya.Browser.window.wx.onShow(function() {
                    a.playBgm();
                }), this.playBgm();
            },
            hasStorageSync: function(a) {
                var e = Laya.LocalStorage.getItem(a);
                return !(null == e || "" === e);
            },
            getStorageSync: function(a, e) {
                if ("object" == e) return Laya.LocalStorage.getJSON(a);
                var d = Laya.LocalStorage.getItem(a);
                switch (e) {
                    default:
                        case "string":
                        return d;
                    case "number":
                            return Number(d);
                    case "boolean":
                            return "true" == d;
                }
            },
            setStorageSync: function(a, e) {
                "object" == _typeof(e) ? Laya.LocalStorage.setJSON(a, e) : Laya.LocalStorage.setItem(a, e);
            },
            initSignInData: function() {
                function reset() {
                    s.signInDays = 0, s.signInStatus = 1;
                }
                if (this.hasStorageSync("SIGNINSTAMP")) {
                    var a = this.getStorageSync("SIGNINSTAMP", "number"),
                        e = new Date(a).toDateString(),
                        d = new Date(a + 864e5).toDateString(),
                        t = new Date().toDateString();
                    console.log("上次签到日期=", e, "上次签到日期的第二天=", d, ",今天=", t), e == t || d == t ? (console.log("签到日期是今天"), this.hasStorageSync("SIGNINDAYS") ? s.signInDays = this.getStorageSync("SIGNINDAYS", "number") : s.signInDays = 0, s.signInStatus = d == t ? 1 : 0) : (console.log("用户签到不连续"), reset());
                } else console.log("用户未曾签到过"), reset();
                7 == s.signInDays && 1 == s.signInStatus && (console.log("连续签到7天 签到数据重置"), reset()), console.log("用户signInDays=", s.signInDays, ",signInStatus=", s.signInStatus);
            },
            signIn: function(a) {
                1 == s.signInStatus ? (s.signInDays++, s.signInStatus = 0, this.setStorageSync("SIGNINDAYS", s.signInDays), this.setStorageSync("SIGNINSTAMP", new Date().getTime()), a && a(s.signInDays)) : console.log("不可签到");
            },
            initFoods: function() {
                for (s.foods = this.hasStorageSync("foods") ? this.getStorageSync("foods", "object") : [1]; s.foods.length < 33;) s.foods.push(0);
                this.setStorageSync("foods", s.foods);
            },
            useEnergy: function(a, e, d) {
                e && e();
            },
            initEnergy: function() {
                var a = 0,
                    e = 0;
                a = this.hasStorageSync("energy") ? (a = this.getStorageSync("energy", "number")) >= 0 ? a : 0 : 80;
                var d = new Date().getTime();
                if (this.hasStorageSync("energyStamp")) {
                    var t = this.getStorageSync("energyStamp", "number");
                    e = (e = Math.floor((d - t) / 6e5)) >= 0 ? e : 0, f = 600 - (f = (f = Math.floor((d - t) / 1e3) % 600) >= 0 ? f : 0), console.log("上一次记录的时间戳=", t), console.log("当前时间戳=", d), console.log("历时=", e, "个10分钟 余", f, "秒");
                } else f = 600, e = 0;
                this.setStorageSync("energyStamp", d), s.energy = clampf(a + 20 * e, 0, 80), this.setStorageSync("energy", s.energy), u > -1 || (u = setInterval(function() {
                    s.energy >= 80 ? (f = 600, Laya.stage.event("updateEnergy", f), ++y % 64 == 0 && (y = 0, this.setStorageSync("energyStamp", new Date().getTime()))) : (--f % 64 == 0 && this.setStorageSync("energyStamp", new Date().getTime()), f < 0 && (s.energy = clampf(s.energy + 20, 0, 80), this.setStorageSync("energy", s.energy), f = 600), Laya.stage.event("updateEnergy", f));
                }.bind(this), 1e3));
            },
            saveFoods: function() {
                this.setStorageSync("foods", s.foods);
            },
            saveFood: function() {
                this.setStorageSync("food", s.food);
            },
            saveKey: function() {
                s.key > 3 && (s.key = 3), this.setStorageSync("key", s.key);
            },
            saveCoin: function() {
                this.setStorageSync("coin", s.coin);
                Laya.stage.event("updateCoin")
            },
            saveLevel: function() {
                this.setStorageSync("level", s.level), this.setUserCloudStorage("topLevel", s.level);
            },
            saveProgress: function() {
                this.setStorageSync("progress", s.progress);
            },
            addEnergy: function(a) {
                s.energy = clampf(s.energy + 20, 0, 80), w.setStorageSync("energy", s.energy);
            },
            initShare: function() {
                Laya.Browser.window.wx && (Laya.Browser.window.wx.showShareMenu && Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !0
                }), Laya.Browser.window.wx.onShareAppMessage && Laya.Browser.window.wx.onShareAppMessage(function() {
                    return {
                        title: "只有一个鸡腿，你会选择喂给谁？",
                        imageUrl: "res/icon/share.jpg"
                    };
                }));
            },
            share: function() {
                Laya.Browser.window.wx && Laya.Browser.window.wx.shareAppMessage && Laya.Browser.window.wx.shareAppMessage({
                    title: "只有一个鸡腿，你会选择喂给谁？",
                    imageUrl: "res/icon/share.jpg"
                });
            },
            showToast: function(a) {
                console.log(a), Laya.Browser.window.wx && Laya.Browser.window.wx.showToast && Laya.Browser.window.wx.showToast({
                    title: a,
                    icon: "none"
                });
            },
            vibrateShort: function() {
                Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateShort && Laya.Browser.window.wx.vibrateShort();
            },
            setSharedCanvasSize: function(a, e) {
                if (Laya.Browser.window.wx) {
                    var d = Laya.Browser.window.wx.getOpenDataContext();
                    if (d) {
                        var t = d.canvas;
                        t.width = a, t.height = e;
                    }
                }
            },
            postMessage: function(a) {
                Laya.Browser.window.wx && Laya.Browser.window.wx.getOpenDataContext().postMessage(a);
            },
            setUserCloudStorage: function(a, e) {
                Laya.Browser.window.wx && Laya.Browser.window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: a.toString(),
                        value: e.toString()
                    }]
                });
            },
            playBgm: function() {
                Laya.Browser.window.wx ? v.playMusic(l.sound.bgm.normalBgm) : Laya.SoundManager.playMusic(l.sound.bgm.normalBgm, 0);
            },
            playEffect: function(a) {
                Laya.Browser.window.wx ? v.playSound(a) : Laya.SoundManager.playSound(a, 1);
            },
            aldOnStart: function(a) {
                try {
                    var e = (a + 1).toString();
                    Laya.Browser.window.wx.aldStage.onStart({
                        stageId: e,
                        stageName: "第" + e + "关"
                    });
                } catch (a) {}
            },
            aldOnEnd: function(a, e) {
                try {
                    var d = (a + 1).toString();
                    Laya.Browser.window.wx.aldStage.onEnd({
                        stageId: d,
                        stageName: "第" + d + "关",
                        event: e ? "complete" : "fail"
                    });
                } catch (a) {}
            },
            createVideo: function(a, e) {
                var d = this;
                platform.getInstance().showReward(() => {
                    a && a();
                })
            },
            createBanner: function(a) {},
            resetBanner: function() {},
            showBanner: function() {},
            hideBanner: function() {},
            isIphoneX: function() {}
        }),
        g = {
            gray: function(a) {
                if (a && !a.destroyed) {
                    var e = new Laya.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]);
                    a.filters = [e];
                }
            },
            ungray: function(a) {
                a && !a.destroyed && (a.filters = []);
            },
            breath: function(a, e) {
                if (a && !a.destroyed) {
                    var d = function() {
                            Laya.Tween.to(a, {
                                scaleX: 1.1,
                                scaleY: 1.1
                            }, 333, null, Laya.Handler.create(e, t));
                        },
                        t = function() {
                            Laya.Tween.to(a, {
                                scaleX: 1,
                                scaleY: 1
                            }, 333, null, Laya.Handler.create(e, d));
                        };
                    this.unbreath(a), d();
                }
            },
            unbreath: function(a) {
                a && !a.destroyed && (Laya.Tween.clearAll(a), a.scaleX = 1, a.scaleY = 1);
            },
            showStatic: function(a) {
                Laya.stage.event("showStatic", a);
            },
            showLayer: function(a, e) {
                Laya.stage.event("MainScene", {
                    func: "showLayer",
                    name: a,
                    argu: e
                });
            },
            hideLayer: function(a, e) {
                Laya.stage.event("MainScene", {
                    func: "hideLayer",
                    name: a,
                    argu: e
                });
            },
            getWinHeight: function() {
                var a = Laya.Browser.clientWidth;
                return Laya.Browser.clientHeight / a * 576;
            },
            createSprite3D: function(a, e, d) {
                Laya.Sprite3D.load(a, Laya.Handler.create(this, function(a) {
                    var e = Laya.Sprite3D.instantiate(a);
                    d && d(e);
                }));
            },
            loadPrefab2D: function(a, e, d) {
                Laya.loader.load("prefab/" + a + ".json", Laya.Handler.create(e, function(e) {
                    var t = new Laya.Prefab();
                    t.json = e;
                    var o = Laya.Pool.getItemByCreateFun(a, t.create, t);
                    d && d(o);
                }));
            },
            findNode: function(a, e) {
                for (var d = a, t = e.split("/"), o = 0; o < t.length; o++) {
                    var n = t[o];
                    if (!(d = d.getChildByName(n))) return null;
                }
                return d;
            },
            v3: function(a, e, d) {
                return new Laya.Vector3(a, e, d);
            },
            addClickEventListener: function(a, e, d) {
                a && !a.destroyed ? a.on(Laya.Event.CLICK, e, function() {
                    w.playEffect(l.sound.effect.continuetickdown), d && d.call(e);
                }) : console.warn("???");
            }
        },
        L = function(a) {
            function MainScene() {
                return _classCallCheck(this, MainScene), _possibleConstructorReturn(this, _getPrototypeOf(MainScene).call(this));
            }
            return _inherits(MainScene, Laya.Script), _createClass(MainScene, [{
                key: "onAwake",
                value: function() {
                    w.init(), c.init(), w.resetBanner(), this.root = new Laya.Sprite(), this.root.name = "root", this.owner.addChild(this.root), Laya.stage.on("MainScene", this, this.onEvent), g.showLayer("LoadingLayer", {
                        zOrder: 999
                    });
                }
            }, {
                key: "onEvent",
                value: function(a) {
                    if (a) {
                        var e = a.func;
                        "showLayer" == e ? this.showLayer(a.name, a.argu) : "hideLayer" == e && this.hideLayer(a.name, a.argu);
                    }
                }
            }, {
                key: "showLayer",
                value: function(a, e) {
                    var d = this;
                    console.log("showLayer=", a, e), e = e || {};
                    if (a == "ResultLayer") {
                        HUHU_showInterstitialAd();
                    }
                    var t = this.root.getChildByName(a),
                        o = function() {
                            if (t.visible) "zOrder" in e && (t.zOrder = e.zOrder);
                            else {
                                t.visible = !0;
                                var a = t.getComponent(r);
                                a && a.__show__(e);
                            }
                        };
                    t && !t.destroyed ? o() : Laya.loader.load("prefab/" + a + ".json", Laya.Handler.create(this, function(n) {
                        if ((t = d.root.getChildByName(a)) && !t.destroyed) o();
                        else {
                            var i = new Laya.Prefab();
                            i.json = n, t = Laya.Pool.getItemByCreateFun(a, i.create, i), "zOrder" in e && (t.zOrder = e.zOrder), t.x = 0, console.log(t.y), d.root.addChild(t);
                            var s = t.getComponent(r);
                            s && s.__show__(e);
                        }
                    }));
                }
            }, {
                key: "hideLayer",
                value: function(a, e) {
                    console.log("hideLayer=", a, e), e = e || {};
                    var d = this.root.getChildByName(a);
                    if (d && !d.destroyed) {
                        e.destroy ? Laya.timer.frameOnce(1, this, function() {
                            try {
                                d.destroy();
                            } catch (a) {}
                        }) : d.visible = !1;
                        var t = d.getComponent(r);
                        t && t.__hide__(e);
                    }
                }
            }]), MainScene;
        }(),
        m = function(a) {
            function Widget() {
                return _classCallCheck(this, Widget), _possibleConstructorReturn(this, _getPrototypeOf(Widget).call(this));
            }
            return _inherits(Widget, Laya.Script), _createClass(Widget, [{
                key: "onAwake",
                value: function() {
                    var a = this.owner;
                    switch (this.dir) {
                        default: break;
                        case "up":
                                var e = a.y + g.getWinHeight() / 2;a.y = e;
                            break;
                        case "down":
                                var d = 1300 - a.y;a.y = 1136 + g.getWinHeight() / 2 - d;
                    }
                }
            }]), Widget;
        }(),
        k = function(a) {
            function ChestLayer() {
                var a;
                return _classCallCheck(this, ChestLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(ChestLayer).call(this))).rewardFoodIndex = 1, a;
            }
            return _inherits(ChestLayer, r), _createClass(ChestLayer, [{
                key: "onAwake",
                value: function() {
                    this.keyNode = g.findNode(this.owner, "key"), this.btn_addKey = g.findNode(this.owner, "btn_addKey"), this.btn_continue = g.findNode(this.owner, "btn_thanks"), g.addClickEventListener(this.btn_addKey, this, this.onClickAddKey), g.addClickEventListener(this.btn_continue, this, this.onClickThanks);
                    for (var a = [], e = 1; e <= 9; e++) a.push(g.findNode(this.owner, "board/b" + e));
                    this.chests = a;
                    var d = [];
                    for (e = 1; e <= 10; e++) d.push(g.findNode(this.owner, "board/r" + e));
                    this.rewards = d, this.chests.forEach(function(a, e) {
                        var d = this;
                        a.index = e, a.on(Laya.Event.CLICK, this, function() {
                            var e = a.reward,
                                t = a.video;
                            if (e > -1) console.log("这个箱子已经拿过奖励了");
                            else {
                                w.playEffect(l.sound.effect.highscore);
                                var o = function() {
                                    if (d.pools.length > 0) {
                                        var e = d.pools.shift();
                                        a.reward = e;
                                        var t = d.rewards[e];
                                        Laya.Tween.to(a, {
                                            scaleX: 1.2,
                                            scaleY: 1.2
                                        }, 111, null, Laya.Handler.create(d, function() {
                                            Laya.Tween.to(a, {
                                                scaleX: 0
                                            }, 111, null, Laya.Handler.create(d, function() {
                                                t.pos(a.x, a.y), t.scaleX = 0, t.scaleY = 1.2, Laya.Tween.to(t, {
                                                    scaleX: 1.2
                                                }, 111, null, Laya.Handler.create(d, function() {
                                                    Laya.Tween.to(t, {
                                                        scaleX: 1,
                                                        scaleY: 1
                                                    }, 111, null, Laya.Handler.create(d, function() {
                                                        d.handleReward(e, a.index);
                                                    }));
                                                }));
                                            }));
                                        }));
                                    } else console.warn("???");
                                };
                                w.vibrateShort(), t ? (console.log("这个箱子需要开视频"), w.createVideo(o, null)) : s.key > 0 && (s.key--, w.saveKey(), o(), d.updateUI());
                            }
                        });
                    }.bind(this));
                }
            }, {
                key: "handleReward",
                value: function(a, e) {
                    console.log("奖励编号= ", a);
                    var d = function(a) {
                        switch (s.coin += a, w.saveCoin(), g.showStatic("coin"), w.showToast("恭喜获得金币x" + a + "！"), e) {
                            case 0:
                                Laya.stage.event("金币飞", {
                                    x: 170,
                                    y: 535
                                });
                                break;
                            case 1:
                                Laya.stage.event("金币飞", {
                                    x: 320,
                                    y: 535
                                });
                                break;
                            case 2:
                                Laya.stage.event("金币飞", {
                                    x: 470,
                                    y: 535
                                });
                                break;
                            case 3:
                                Laya.stage.event("金币飞", {
                                    x: 170,
                                    y: 685
                                });
                                break;
                            case 4:
                                Laya.stage.event("金币飞", {
                                    x: 320,
                                    y: 685
                                });
                                break;
                            case 5:
                                Laya.stage.event("金币飞", {
                                    x: 470,
                                    y: 685
                                });
                                break;
                            case 6:
                                Laya.stage.event("金币飞", {
                                    x: 170,
                                    y: 835
                                });
                                break;
                            case 7:
                                Laya.stage.event("金币飞", {
                                    x: 320,
                                    y: 835
                                });
                                break;
                            case 8:
                                Laya.stage.event("金币飞", {
                                    x: 470,
                                    y: 835
                                });
                        }
                    };
                    switch (a) {
                        case 0:
                            d(20);
                            break;
                        case 1:
                            d(25);
                            break;
                        case 2:
                            d(30);
                            break;
                        case 3:
                            d(35);
                            break;
                        case 4:
                            d(40);
                            break;
                        case 5:
                            d(50);
                            break;
                        case 6:
                            d(60);
                            break;
                        case 7:
                            d(100);
                            break;
                        case 8:
                            d(200);
                            break;
                        case 9:
                            s.food = this.rewardFoodIndex, s.foods[this.rewardFoodIndex] = 1, w.saveFood(), w.saveFoods(), w.showToast("恭喜抽到奖励皮肤！");
                    }
                }
            }, {
                key: "show",
                value: function(a) {
                    this.argu = a, this.chests.forEach(function(a, e) {
                        a.scaleX = 1, a.scaleY = 1, a.reward = -1, a.video = e > 5;
                    }), this.rewards.forEach(function(a) {
                        a.x = 1e3, a.scaleX = 0, a.scaleY = 1;
                    });
                    var e = [],
                        d = [0, 1, 2, 3, 4, 5, 6, 7].sort(function() {
                            return Math.random() < .5 ? -1 : 1;
                        }),
                        t = [d.shift(), d.shift(), d.shift()];
                    if (this.rewardFoodIndex = this.canGetSpecialReward(), this.rewardFoodIndex > -1) {
                        var o = d.concat([9]).sort(function() {
                            return Math.random() < .5 ? -1 : 1;
                        });
                        e = t.concat(o), g.findNode(this.owner, "best/r1").visible = !1, g.findNode(this.owner, "best/r2").visible = !0, console.log("奖池随机完成=", e, " best=", 9), g.findNode(this.owner, "best/r2/sp").loadImage(l.tex.foodTextures[this.rewardFoodIndex]), this.rewards[9].getChildByName("sp").loadImage(l.tex.foodTextures[this.rewardFoodIndex]);
                    } else {
                        var n = d.concat([8]).sort(function() {
                            return Math.random() < .5 ? -1 : 1;
                        });
                        e = t.concat(n), g.findNode(this.owner, "best/r1").visible = !0, g.findNode(this.owner, "best/r2").visible = !1, console.log("奖池随机完成=", e, " best=", 8);
                    }
                    this.pools = e, this.updateUI(), g.breath(g.findNode(this.owner, "btn_addKey"), this);
                }
            }, {
                key: "canGetSpecialReward",
                value: function() {
                    for (var a = s.foods.length - 1; a >= 0; a--) {
                        if (s.foods[a] < 1) return a;
                    }
                    return -1;
                }
            }, {
                key: "hide",
                value: function() {
                    this.argu.layer && g.showLayer(this.argu.layer, null), g.unbreath(g.findNode(this.owner, "btn_addKey")), g.showStatic("energy");
                }
            }, {
                key: "updateUI",
                value: function() {
                    var a = s.key;
                    if (a > 0) {
                        this.keyNode.visible = !0;
                        for (var e = 0; e < 3; e++) this.keyNode.getChildAt(e).getChildAt(0).visible = e < a;
                        this.btn_addKey.visible = !1, this.btn_continue.visible = !1;
                    } else this.keyNode.visible = !1, this.btn_addKey.visible = !0, this.btn_continue.visible = !0;
                    var d = !0;
                    for (e = 0; e < 6; e++) {
                        if (this.chests[e].reward < 0) {
                            d = !1;
                            break;
                        }
                    }
                    d && (this.keyNode.visible = !1, this.btn_addKey.visible = !1, this.btn_continue.visible = !0);
                }
            }, {
                key: "onClickAddKey",
                value: function() {
                    var a = this;
                    w.createVideo(function() {
                        s.key = 3, w.saveKey(), a.updateUI();
                    }, null);
                }
            }, {
                key: "onClickThanks",
                value: function() {
                    g.hideLayer("ChestLayer", null);
                }
            }]), ChestLayer;
        }(),
        b = "Pan_Flip_Pullback",
        _ = "Pan_Flip_Takeoff",
        S = "Pan_Idle",
        C = "Pan_Land_Far",
        x = "Pan_Land_Near",
        N = "Pan_Land_Perfect",
        P = "Pan_Show",
        B = function(a) {
            function Pan() {
                var a;
                return _classCallCheck(this, Pan), (a = _possibleConstructorReturn(this, _getPrototypeOf(Pan).call(this))).animationEndCallback = null, a;
            }
            return _inherits(Pan, Laya.Script3D), _createClass(Pan, [{
                key: "onAwake",
                value: function() {
                    this.animator = this.owner.getComponent(Laya.Animator), this.play(S, null);
                }
            }, {
                key: "play",
                value: function(a, e) {
                    this.animationEndCallback = e, this.animator && this.animator.play(a, 0, 0);
                }
            }, {
                key: "onAnimationEnd",
                value: function(a, e, d, t) {
                    var o = this;
                    console.log("食物动画结束=", d), Laya.timer.frameOnce(1, this, function() {
                        o.animationEndCallback && o.animationEndCallback();
                    });
                }
            }, {
                key: "pullBack",
                value: function() {
                    this.play(b, null);
                }
            }, {
                key: "takeOff",
                value: function() {
                    this.play(_, null);
                }
            }, {
                key: "clearBody",
                value: function() {
                    var a = this.owner.getComponents(Laya.PhysicsCollider);
                    a && a.forEach(function(a) {
                        a.destroy();
                    });
                }
            }]), Pan;
        }(),
        E = "Pancake_Flip_Loop",
        T = "Pancake_Flip_Pullback",
        R = "Pancake_Flip_Takeoff",
        I = "Pancake_Idle",
        M = "Pancake_Land_Good_Far",
        D = "Pancake_Land_Good_Near",
        O = "Pancake_Land_Perfect",
        A = "Pancake_Show",
        H = "Pancake_Wobble_Far",
        F = "Pancake_Wobble_Far_Success",
        U = "Pancake_Wobble_Near",
        G = "Pancake_Wobble_Near_Success",
        Y = function(a) {
            function Food() {
                var a;
                return _classCallCheck(this, Food), (a = _possibleConstructorReturn(this, _getPrototypeOf(Food).call(this))).animationEndCallback = null, a.vibrated = !1, a;
            }
            return _inherits(Food, Laya.Script3D), _createClass(Food, [{
                key: "onAwake",
                value: function() {
                    this.body = this.owner.getComponent(Laya.Rigidbody3D) || this.owner.addComponent(Laya.Rigidbody3D), this.body && (this.body.comp = this, this.body.isKinematic = !0), this.animator = this.owner.getComponent(Laya.Animator), this.play(I, null);
                }
            }, {
                key: "play",
                value: function(a, e) {
                    this.animationEndCallback = e, this.animator && this.animator.play(a, 0, 0);
                }
            }, {
                key: "pullBack",
                value: function() {
                    this.play(T, null);
                }
            }, {
                key: "onAnimationEnd",
                value: function(a, e, d, t) {
                    var o = this;
                    console.log("食物动画结束=", d), Laya.timer.frameOnce(1, this, function() {
                        o.animationEndCallback && o.animationEndCallback();
                    });
                }
            }, {
                key: "takeOff",
                value: function(a, e, d, t, o) {
                    var n = this,
                        i = a.transform.position,
                        r = Math.sqrt(Math.pow(i.x - d.x, 2) + Math.pow(i.z - d.z, 2));
                    console.log("完美距离=", t, " 实际距离=", r);
                    var s = g.v3((i.x + d.x) / 2, 2, (i.z + d.z) / 2),
                        l = a.comp,
                        c = e.comp,
                        h = function(a, e, d) {
                            var t = e.x,
                                o = e.y,
                                i = e.z;
                            Laya.Tween.to(n.owner.parent.transform, {
                                localPositionX: t,
                                localPositionZ: i
                            }, a, Laya.Ease.quadOut), Laya.Tween.to(n.owner.parent.transform, {
                                localPositionY: o
                            }, a, Laya.Ease.quadInOut, Laya.Handler.create(n, d));
                        };
                    this.play(R, function() {
                        n.play(E, null);
                    }), r < .8 ? h(325, g.v3(i.x, 2, i.z), function() {
                        h(325, i, function() {
                            w.vibrateShort(), n.play(O, null), l.play(N, function() {
                                o(0);
                            });
                        });
                    }) : h(325, s, r < t - .6 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.body && (n.body.isKinematic = !1), o(-1);
                        });
                    } : r < t - .4 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.play(U, function() {
                                Math.random() < .75 ? (n.play(G, null), Laya.timer.once(200, n, function() {
                                    h(450, e.transform.position, function() {
                                        o(1, 3);
                                    });
                                })) : (n.body && (n.body.isKinematic = !1), o(-1));
                            });
                        });
                    } : r < t - .2 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.play(D, null), c.play(x, null), h(150, e.transform.position, function() {
                                o(1, 2);
                            });
                        });
                    } : r < t + .2 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.play(O, null), c.play(N, null), h(150, e.transform.position, function() {
                                o(1, 1);
                            });
                        });
                    } : r < t + .4 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.play(M, null), c.play(C, null), h(150, e.transform.position, function() {
                                o(1, 2);
                            });
                        });
                    } : r < t + .6 ? function() {
                        h(325, d, function() {
                            w.vibrateShort(), n.play(H, function() {
                                Math.random() < .75 ? (n.play(F, null), Laya.timer.once(200, n, function() {
                                    h(450, e.transform.position, function() {
                                        o(1, 3);
                                    });
                                })) : (n.body && (n.body.isKinematic = !1), o(-1));
                            });
                        });
                    } : function() {
                        w.vibrateShort(), h(325, d, function() {
                            n.body && (n.body.isKinematic = !1), o(-1);
                        });
                    });
                }
            }, {
                key: "shoot",
                value: function(a, e) {
                    var d = this;
                    if (this.body) {
                        var t = this.owner.transform.position,
                            o = g.v3(a.x - t.x, a.y - t.y, a.z - t.z);
                        this.play(R, function temp() {
                            d.play(E, temp);
                        });
                        this.body.isKinematic = !1, this.body.linearVelocity = g.v3(3 * o.x, 3 * o.y, 3 * o.z), this.body.index = e;
                    } else console.warn("no body");
                }
            }, {
                key: "reset",
                value: function() {
                    console.log("reset food");
                    var a = this.body;
                    if (a) {
                        a.linearVelocity = g.v3(0, 0, 0), a.angularVelocity = g.v3(0, 0, 0), a.isKinematic = !0, a.handled = !1;
                        var e = this.owner;
                        e.active = !0, e.transform.localPosition = g.v3(0, 0, 0), e.transform.localRotationEuler = g.v3(0, 90, 0);
                    }
                    this.vibrated = !1, this.play(I, null);
                }
            }, {
                key: "onCollisionEnter",
                value: function() {
                    this.vibrated || (this.vibrated = !0, w.vibrateShort(), w.playEffect(l.sound.effect.pancakeToFace));
                }
            }]), Food;
        }(),
        V = function(a) {
            function CharacterBody() {
                return _classCallCheck(this, CharacterBody), _possibleConstructorReturn(this, _getPrototypeOf(CharacterBody).call(this));
            }
            return _inherits(CharacterBody, Laya.Script3D), _createClass(CharacterBody, [{
                key: "onAwake",
                value: function() {
                    this.owner.getComponent(Laya.PhysicsCollider).isTrigger = !1;
                }
            }, {
                key: "setCharacter",
                value: function(a) {
                    this.character = a;
                }
            }, {
                key: "onCollisionEnter",
                value: function(a) {
                    var e = this,
                        d = a.other;
                    d.handled || Laya.timer.once(33, this, function() {
                        if (!d.handled) {
                            d.handled = !0;
                            var a = e.character.index;
                            console.log("++++++++++ 角色" + a + "身体被碰"), Laya.stage.event("投掷结束", {
                                character: a,
                                part: 0
                            }), w.playEffect(l.sound.effect.pancakeToFace);
                            try {
                                d.comp.play(I, null);
                            } catch (a) {}
                        }
                    });
                }
            }]), CharacterBody;
        }(),
        z = function(a) {
            function CharacterMouth() {
                return _classCallCheck(this, CharacterMouth), _possibleConstructorReturn(this, _getPrototypeOf(CharacterMouth).call(this));
            }
            return _inherits(CharacterMouth, Laya.Script3D), _createClass(CharacterMouth, [{
                key: "onAwake",
                value: function() {
                    this.owner.getComponent(Laya.PhysicsCollider).isTrigger = !0;
                }
            }, {
                key: "setCharacter",
                value: function(a) {
                    this.character = a;
                }
            }, {
                key: "onTriggerEnter",
                value: function(a) {
                    if (!a.handled) {
                        var e = this.character.index;
                        a.index == e && (a.handled = !0, a.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, a.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, console.log("角色" + e + "嘴被碰"), Laya.timer.once(100, this, function() {
                            try {
                                a.owner.active = !1;
                            } catch (a) {}
                            try {
                                a.comp.play(I, null);
                            } catch (a) {}
                            Laya.stage.event("投掷结束", {
                                character: e,
                                part: 1
                            });
                        }));
                    }
                }
            }]), CharacterMouth;
        }(),
        J = "character_idle",
        W = "character_look_left",
        X = "character_look_right",
        K = "character_nod_left",
        j = "character_nod_right",
        Z = "character_hit",
        q = "character_hit_left",
        Q = "character_hit_right",
        $ = "character_fail_close_mouth",
        aa = "character_open_mouth_start",
        ea = "character_open_mouth_loop",
        da = "character_open_mouth_end",
        ta = "character_chew",
        oa = function(a) {
            function Character() {
                var a;
                return _classCallCheck(this, Character), (a = _possibleConstructorReturn(this, _getPrototypeOf(Character).call(this)))._index = -1, a;
            }
            return _inherits(Character, Laya.Script3D), _createClass(Character, [{
                key: "onAwake",
                value: function() {
                    this.animator = this.owner.getComponent(Laya.Animator), this.play(J, null);
                    var a = g.findNode(this.owner, "Bone_Game_Root/Bone_Body/Bone_Chest"),
                        e = g.findNode(this.owner, "Bone_Game_Root/Bone_Body/Bone_Chest/Bone_Neck/Bone_Head"),
                        d = g.findNode(this.owner, "Bone_Game_Root/Bone_Body/Bone_Chest/Bone_Neck/Bone_Head/Bone_Jaw/Bone_Tongue_1/MouthCollider"),
                        t = new Laya.Sprite3D();
                    e.addChild(t);
                    var o = new Laya.CapsuleColliderShape(.54, 1.83, 0);
                    t.transform.localPosition = g.v3(1, 0, 0), t.transform.localRotationEuler = g.v3(0, 0, 270), t.addComponent(Laya.PhysicsCollider).colliderShape = o, a.addComponent(V).setCharacter(this), t.addComponent(V).setCharacter(this), d.addComponent(z).setCharacter(this);
                }
            }, {
                key: "play",
                value: function(a, e, d) {
                    this.animationEndCallback = e, d ? this.animator && this.animator.crossFade(a, .3, 0) : this.animator && this.animator.play(a, 0, 0);
                }
            }, {
                key: "onAnimationEnd",
                value: function(a, e, d, t) {
                    var o = this;
                    console.log("人物动画结束=", d), Laya.timer.frameOnce(1, this, function() {
                        o.animationEndCallback && o.animationEndCallback();
                    });
                }
            }, {
                key: "loopPlay",
                value: function(a) {
                    var e = this;
                    ! function temp() {
                        e.play(a, temp);
                    }();
                }
            }, {
                key: "hitLeft",
                value: function() {
                    this.play(q, function() {}, !1);
                }
            }, {
                key: "hitRight",
                value: function() {
                    this.play(Q, function() {}, !1);
                }
            }, {
                key: "hit",
                value: function() {
                    this.play(Z, function() {}, !1);
                }
            }, {
                key: "lookLeft",
                value: function() {
                    var a = this;
                    this.play(W, function() {
                        a.loopPlay(W);
                    }, !0);
                }
            }, {
                key: "lookRight",
                value: function() {
                    var a = this;
                    this.play(X, function() {
                        a.loopPlay(X);
                    }, !0);
                }
            }, {
                key: "openMouth",
                value: function() {
                    var a = this;
                    this.play(aa, function() {
                        a.play(ea, function() {
                            a.loopPlay(ea);
                        }, !0);
                    }, !0);
                }
            }, {
                key: "closeMouth",
                value: function() {
                    this.play($, function() {}, !0);
                }
            }, {
                key: "chew",
                value: function() {
                    var a = this;
                    this.play(da, function() {
                        a.play(ta, function() {
                            a.loopPlay(ta);
                        }, !0);
                    }, !0);
                }
            }, {
                key: "nodLeft",
                value: function() {
                    var a = this;
                    this.play(K, function() {
                        a.loopPlay(K);
                    }, !0);
                }
            }, {
                key: "nodRight",
                value: function() {
                    var a = this;
                    this.play(j, function() {
                        a.loopPlay(j);
                    }, !0);
                }
            }, {
                key: "idle",
                value: function(a) {
                    var e = this;
                    Laya.timer.once(a, this, function() {
                        e.play(J, function() {
                            e.loopPlay(J);
                        }, !0);
                    });
                }
            }, {
                key: "index",
                get: function() {
                    return this._index;
                },
                set: function(a) {
                    this._index = a;
                }
            }]), Character;
        }(),
        na = [{
            id: 1,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 3
            }],
            fov: 60,
            speed: .9
        }, {
            id: 2,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }],
            fov: 60,
            speed: .9
        }, {
            id: 3,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }],
            fov: 60,
            speed: .9
        }, {
            id: 4,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 3
            }, {
                a: 225,
                d: 3
            }],
            fov: 60,
            speed: .9
        }, {
            id: 5,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 2.8
            }, {
                a: 120,
                d: 2.8
            }, {
                a: 225,
                d: 2.8
            }],
            fov: 60,
            speed: .9
        }, {
            id: 6,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 3
            }, {
                a: 225,
                d: 3
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: .9
        }, {
            id: 7,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 225,
                d: 3
            }],
            fov: 60,
            speed: .9
        }, {
            id: 8,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 3
            }, {
                a: 140,
                d: 3
            }, {
                a: 210,
                d: 2
            }, {
                a: 150,
                d: 2
            }],
            fov: 60,
            speed: .9
        }, {
            id: 9,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 150,
                d: 3
            }, {
                a: 225,
                d: 3
            }],
            fov: 60,
            speed: 1
        }, {
            id: 10,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 240,
                d: 3
            }, {
                a: 135,
                d: 3
            }],
            fov: 60,
            speed: 1
        }, {
            id: 11,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 105,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 60,
            speed: 1
        }, {
            id: 12,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 3
            }, {
                a: 150,
                d: 3
            }, {
                a: 240,
                d: 2.5
            }, {
                a: 105,
                d: 2.5
            }],
            fov: 60,
            speed: 1
        }, {
            id: 13,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 130,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 60,
            speed: 1.1
        }, {
            id: 14,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 130,
                d: 3
            }, {
                a: 190,
                d: 3
            }],
            fov: 60,
            speed: 1.1
        }, {
            id: 15,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 100,
                d: 2
            }, {
                a: 190,
                d: 2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 150,
                d: 2.5
            }],
            fov: 60,
            speed: 1.1
        }, {
            id: 16,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 150,
                d: 2
            }],
            fov: 60,
            speed: 1.2
        }, {
            id: 17,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 135,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 160,
                d: 2.5
            }],
            fov: 60,
            speed: 1.2
        }, {
            id: 18,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 110,
                d: 2.6
            }, {
                a: 200,
                d: 2.6
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.5
            }],
            fov: 60,
            speed: 1.2
        }, {
            id: 19,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.5
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 20,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 110,
                d: 2.6
            }, {
                a: 240,
                d: 2.6
            }, {
                a: 150,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 130,
                d: 3
            }, {
                a: 220,
                d: 3
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 21,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 170,
                d: 3
            }, {
                a: 260,
                d: 3
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 22,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 130,
                d: 3
            }, {
                a: 250,
                d: 3
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 23,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 140,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 3
            }, {
                a: 230,
                d: 2
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 24,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 140,
                d: 2
            }, {
                a: 200,
                d: 3
            }, {
                a: 110,
                d: 3
            }, {
                a: 240,
                d: 2
            }, {
                a: 120,
                d: 2.5
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 25,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 120,
                d: 3
            }, {
                a: 230,
                d: 3
            }, {
                a: 130,
                d: 2.5
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 26,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 120,
                d: 2
            }, {
                a: 230,
                d: 2
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.25
        }, {
            id: 27,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 130,
                d: 2.5
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 28,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2.5
            }, {
                a: 240,
                d: 2.5
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 230,
                d: 2.6
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 29,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 200,
                d: 3
            }, {
                a: 110,
                d: 3
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 240,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 30,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 140,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2
            }, {
                a: 230,
                d: 2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 230,
                d: 2.6
            }, {
                a: 130,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 31,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 240,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 230,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 32,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 130,
                d: 2.5
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 33,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 115,
                d: 2
            }, {
                a: 215,
                d: 2
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 230,
                d: 2.6
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 34,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 120,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 35,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.3
        }, {
            id: 36,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 3
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 37,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 130,
                d: 2.5
            }, {
                a: 225,
                d: 2
            }, {
                a: 135,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 38,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 120,
                d: 2.2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 39,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 110,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 40,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 41,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 42,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 43,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 105,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 44,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 125,
                d: 2
            }, {
                a: 215,
                d: 2
            }, {
                a: 110,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 45,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.35
        }, {
            id: 46,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 47,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 180,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 48,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 125,
                d: 2
            }, {
                a: 215,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 140,
                d: 2.5
            }, {
                a: 230,
                d: 2.5
            }, {
                a: 105,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 49,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 3
            }, {
                a: 225,
                d: 3
            }, {
                a: 140,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 110,
                d: 3
            }, {
                a: 240,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 50,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 105,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 51,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 52,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 140,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 53,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 125,
                d: 2
            }, {
                a: 215,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 140,
                d: 2.5
            }, {
                a: 230,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 190,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 60,
            speed: 1.4
        }, {
            id: 54,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 170,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 55,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 165,
                d: 2.3
            }, {
                a: 195,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 56,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 57,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 140,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 58,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 59,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 60,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 61,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.4
        }, {
            id: 62,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 63,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 64,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 65,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 66,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 170,
                d: 2.1
            }, {
                a: 190,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 67,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 68,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 69,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 70,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 71,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 140,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 72,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 73,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 74,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 75,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 76,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.43
        }, {
            id: 77,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 78,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 79,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 80,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 81,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 82,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 83,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 84,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 85,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 65,
            speed: 1.45
        }, {
            id: 86,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 87,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 88,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 89,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 145,
                d: 2.3
            }, {
                a: 235,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 90,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 91,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 92,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 93,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 94,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 130,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 95,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 96,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 65,
            speed: 1.48
        }, {
            id: 97,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 98,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 99,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 100,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 101,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 102,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 103,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 65,
            speed: 1.5
        }, {
            id: 104,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 105,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 170,
                d: 2.1
            }, {
                a: 190,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 106,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 107,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 108,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 109,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 110,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 140,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 111,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 112,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 113,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 114,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 115,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 116,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 117,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 118,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 119,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 120,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 121,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 122,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 123,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 124,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 70,
            speed: 1.5
        }, {
            id: 125,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 70,
            speed: 1.53
        }, {
            id: 126,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 70,
            speed: 1.53
        }, {
            id: 127,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 128,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 145,
                d: 2.3
            }, {
                a: 235,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 129,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 130,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 131,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 132,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 133,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 130,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 134,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 135,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.53
        }, {
            id: 136,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 137,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 138,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 139,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 140,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 141,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 142,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 143,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 144,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.55
        }, {
            id: 145,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 146,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 147,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 148,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 149,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 150,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 151,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 152,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 153,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 154,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 155,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 156,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 157,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 145,
                d: 2.3
            }, {
                a: 235,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 158,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 159,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 160,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 161,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 162,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 130,
                d: 2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 163,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 164,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 165,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 166,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 167,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 168,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.58
        }, {
            id: 169,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 170,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 171,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 172,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 173,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 170,
                d: 2.1
            }, {
                a: 190,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 174,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 175,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 176,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 177,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 178,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 140,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 179,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 180,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 181,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 182,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 183,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 110,
                d: 2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 184,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 185,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 186,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 187,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 188,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 189,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 190,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.2
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 191,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 180,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 192,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 105,
                d: 2.1
            }, {
                a: 195,
                d: 2.1
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.3
            }, {
                a: 225,
                d: 2
            }],
            fov: 72,
            speed: 1.6
        }, {
            id: 193,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 130,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 180,
                d: 2
            }, {
                a: 180,
                d: 2.2
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 194,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 200,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 195,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.6
            }, {
                a: 210,
                d: 2.6
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 230,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 196,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }, {
                a: 145,
                d: 2.3
            }, {
                a: 235,
                d: 2.3
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 110,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 115,
                d: 2.1
            }, {
                a: 205,
                d: 2.1
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 197,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 120,
                d: 2.3
            }, {
                a: 210,
                d: 2.3
            }, {
                a: 120,
                d: 2
            }, {
                a: 195,
                d: 2
            }, {
                a: 150,
                d: 2.1
            }, {
                a: 240,
                d: 2.1
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.2
            }, {
                a: 210,
                d: 2.2
            }, {
                a: 110,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 198,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2.1
            }, {
                a: 225,
                d: 2.1
            }, {
                a: 135,
                d: 2.5
            }, {
                a: 225,
                d: 2.5
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 180,
                d: 2.1
            }, {
                a: 120,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 130,
                d: 2
            }, {
                a: 220,
                d: 2
            }, {
                a: 135,
                d: 3
            }, {
                a: 230,
                d: 3
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 199,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 150,
                d: 2
            }, {
                a: 240,
                d: 2
            }, {
                a: 135,
                d: 2.3
            }, {
                a: 225,
                d: 2.3
            }, {
                a: 120,
                d: 3
            }, {
                a: 180,
                d: 3
            }, {
                a: 110,
                d: 2.5
            }, {
                a: 200,
                d: 2.5
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 120,
                d: 2.1
            }, {
                a: 210,
                d: 2.1
            }, {
                a: 120,
                d: 3
            }, {
                a: 210,
                d: 3
            }],
            fov: 72,
            speed: 1.65
        }, {
            id: 200,
            data: [{
                a: 0,
                d: 0
            }, {
                a: 135,
                d: 2
            }, {
                a: 225,
                d: 2
            }, {
                a: 110,
                d: 2.2
            }, {
                a: 220,
                d: 2.2
            }, {
                a: 120,
                d: 2.5
            }, {
                a: 210,
                d: 2.5
            }, {
                a: 110,
                d: 2.1
            }, {
                a: 220,
                d: 2.1
            }, {
                a: 135,
                d: 2.2
            }, {
                a: 225,
                d: 2.2
            }, {
                a: 120,
                d: 2
            }, {
                a: 210,
                d: 2
            }, {
                a: 140,
                d: 2.3
            }, {
                a: 230,
                d: 2.3
            }],
            fov: 72,
            speed: 1.65
        }],
        ia = function(a) {
            function GameLayer() {
                var a;
                return _classCallCheck(this, GameLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(GameLayer).call(this))).panSum = 0, a.touchDowned = !0, a.touchUped = !0, a.feedCharacterIndex = -1, a.speed = 1, a.firstLevelMode = !1, a.tipMode = !1, a;
            }
            return _inherits(GameLayer, r), _createClass(GameLayer, [{
                key: "onAwake",
                value: function() {
                    var a = this,
                        e = g.findNode(this.owner, "btn_back");
                    g.addClickEventListener(e, this, this.onClickBack), this.panel = g.findNode(this.owner, "bar/panel"), this.lb_level1 = g.findNode(this.owner, "bar/level1"), this.lb_level2 = g.findNode(this.owner, "bar/level2"), this.panel.width = 1, this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on("投掷结束", this, this.onAfterShoot), Laya.stage.on("复活", this, this.onRebirth), this.sloganNode = new Laya.Skeleton(), this.sloganNode.pos(288, 650), this.owner.addChild(this.sloganNode), this.sloganNode.load("res/sk/anim_effect_text.sk", Laya.Handler.create(this, function() {
                        a.sloganNode.visible = !1;
                    })), this.sloganNode.on(Laya.Event.STOPPED, this, function() {
                        a.sloganNode.visible = !1;
                    }), this.lb_tip = g.findNode(this.owner, "lb_tip"), this.lb_tip.text = "", Laya.stage.on("首关模式", this, this.openFirstLevelGuideMode), Laya.stage.on("GameLayerOnClickTip", this, this.onClickTip), Laya.stage.on("GameLayerOnClickSkip", this, this.onClickSkip);
                }
            }, {
                key: "showProgress",
                value: function() {
                    var a = this.panel;
                    Laya.Tween.clearAll(a);
                    var e = 0;
                    e = this.pans ? 311 * (this.panSum - this.pans.length) / this.panSum : 1, Laya.Tween.to(a, {
                        width: e
                    }, 222, Laya.Ease.sineOut);
                }
            }, {
                key: "hide",
                value: function() {
                    g.hideLayer("TipLayer", null), c.hideDownGame();
                }
            }, {
                key: "show",
                value: function(a) {
                    var e = this;
                    s.level > 0 && c.showGameListView(), this.firstLevelMode = !1, this.tipMode = !1, g.showStatic(), this.showProgress(), this.lb_level1.text = (s.level + 1).toString(), this.lb_level2.text = (s.level + 2).toString(), Laya.Scene3D.load(l.unity.scene.gameScene, Laya.Handler.create(this, function(a) {
                        a.zOrder = -1, e.owner.addChild(a), e.scene3d = a, e.root = new Laya.Sprite3D(), e.root.transform.localPosition = new Laya.Vector3(0, 0, 0), a.addChild(e.root), e.pan = g.findNode(a, "FryingPan base (1)");
                        var d = g.findNode(e.pan, "ScaleParent/Platform/FryingPan/Pan_root/Pan_ctrl/effect_jiare");
                        d.transform.localPosition = g.v3(0, 0, 0), d.transform.localRotationEuler = g.v3(0, 0, 0), d.active = !1;
                        var t = g.findNode(e.pan, "effect_luodi");
                        t.transform.localPosition = g.v3(0, 0, 0), t.transform.localRotationEuler = g.v3(0, 0, 0), t.active = !1, g.findNode(a, "FryingPan base (1)").active = !1, e.effect2 = g.findNode(a, "effect_miaozhun02"), e.effect2.active = !1, e.loadRoom(), e.loadCharacters(), e.initLevel();
                    })), g.showLayer("TipLayer", null);
                    var d = c.showDownGame(this.owner);
                    d && (d.y = g.getWinHeight() / 2 + 650), c.hideBanner();
                }
            }, {
                key: "loadRoom",
                value: function() {
                    var a = this;
                    g.createSprite3D("res/unity/sence0" + (s.level % 5 + 1) + ".lh", this, function(e) {
                        e.transform.localPosition = g.v3(0, 0, 0), a.scene3d.addChild(e);
                    });
                }
            }, {
                key: "loadCharacters",
                value: function() {
                    for (var a = this, e = l.unity.characters.length, d = [], t = 0; t < e; t++) d.push(t);
                    var o = (d = d.sort(function() {
                            return Math.random() < .5 ? -1 : 1;
                        })).shift(),
                        n = d.shift(),
                        i = d.shift();
                    Laya.Sprite3D.load(l.unity.characters[o], Laya.Handler.create(this, function(e) {
                        var d = Laya.Sprite3D.instantiate(e);
                        a.scene3d.addChild(d), d.transform.localPosition = g.v3(-1.9, -2.5, -6.5), d.transform.localRotationEuler = g.v3(0, 10, 0), a.character1 = d.addComponent(oa), a.character1.index = 0, a.character1.idle(0);
                    })), Laya.Sprite3D.load(l.unity.characters[n], Laya.Handler.create(this, function(e) {
                        var d = Laya.Sprite3D.instantiate(e);
                        a.scene3d.addChild(d), d.transform.localPosition = g.v3(0, -2.5, -6.5), d.transform.localRotationEuler = g.v3(0, 0, 0), a.character2 = d.addComponent(oa), a.character2.index = 1, a.character2.idle(1e3);
                    })), Laya.Sprite3D.load(l.unity.characters[i], Laya.Handler.create(this, function(e) {
                        var d = Laya.Sprite3D.instantiate(e);
                        a.scene3d.addChild(d), d.transform.localPosition = g.v3(1.9, -2.5, -6.5), d.transform.localRotationEuler = g.v3(0, -10, 0), a.character3 = d.addComponent(oa), a.character3.index = 2, a.character3.idle(2e3);
                    }));
                }
            }, {
                key: "createPan",
                value: function(a) {
                    var e = Laya.Sprite3D.instantiate(this.pan);
                    e.distance = a, e.camera = g.findNode(e, "middlePoint/Main Camera (2)"), e.camera.active = !1, e.comp = e.addComponent(B), e.middle = g.findNode(e, "middlePoint"), e.middle.transform.localPositionZ = a / 2, e.active = !0;
                    var d = g.findNode(e, "effect_miaozhun");
                    return d.transform.localPosition = g.v3(0, 0, 0), d.transform.localScaleZ = e.distance / 2, d.active = !1, e.line = d, e.e1 = g.findNode(e, "ScaleParent/Platform/FryingPan/Pan_root/Pan_ctrl/effect_jiare"), e.e2 = g.findNode(e, "effect_luodi"), e;
                }
            }, {
                key: "initLevel",
                value: function() {
                    var a = s.level;
                    w.aldOnStart(a), a > na.length - 1 && (a = Math.floor(Math.random() * na.length)), console.log("关卡编号=", a + 1);
                    var e = na[a],
                        d = e.data;
                    this.speed = e.speed;
                    var t = 0,
                        o = 0,
                        n = [];
                    this.panSum = d.length;
                    for (var i = 0; i < d.length; i++) {
                        var r = d[i],
                            l = r.a,
                            c = r.d,
                            h = this.createPan(c);
                        h.middle.transform.localPositionZ = r.d / 2, t -= c * Math.sin((180 - l) * Math.PI / 180), o += c * Math.cos((180 - l) * Math.PI / 180), h.transform.localPosition = g.v3(t, 0, o), this.root.addChild(h), n.push(h), 0 == i && (this.lastPan = h);
                    }
                    this.pans = n.reverse();
                    var f = new Laya.Camera();
                    f.fieldOfView = e.fov, f.enableHDR = !1, this.root.addChild(f), this.camera3d = f;
                    for (i = 0; i < this.pans.length - 1; i++) {
                        var u = this.pans[i],
                            y = this.pans[i + 1],
                            p = this.pan1PointToPan2(u, y);
                        u.transform.localRotationEulerY = p;
                    }
                    var v = [];
                    for (i = 0; i < this.pans.length - 1; i++) {
                        var L = this.pans[i].camera.transform;
                        v.push({
                            p: L.position.clone(),
                            re: L.rotationEuler.clone()
                        });
                    }
                    var m = g.findNode(this.scene3d, "Main Camera_end");
                    v.push({
                        p: m.transform.position.clone(),
                        re: m.transform.rotationEuler.clone()
                    }), this.cameraRigids = v;
                    var k = this.cameraRigids.shift();
                    this.camera3d.transform.localPosition = k.p, this.camera3d.transform.localRotationEuler = k.re;
                    var b = this.pans[0].transform.localRotationEulerY;
                    for (i = 1; i < this.pans.length; i++) {
                        var _ = this.pans[i],
                            S = _.transform.localRotationEulerY;
                        _.transform.localRotationEulerY = b, b = S;
                    }
                    this.loadFood(), console.log(this.scene3d), Laya.stage.event("过场", {
                        type: "end"
                    });
                }
            }, {
                key: "loadFood",
                value: function() {
                    var a = this,
                        e = this.pans[0],
                        d = new Laya.Sprite3D();
                    d.transform.localPosition = e.transform.localPosition.clone(), d.transform.localRotationEuler = e.transform.localRotationEuler.clone(), Laya.Sprite3D.load("res/unity/travel.lh", Laya.Handler.create(this, function(a) {
                        var e = Laya.Sprite3D.instantiate(a);
                        d.addChild(e);
                    })), Laya.Sprite3D.load(l.unity.foods[s.food], Laya.Handler.create(this, function(e) {
                        var t = Laya.Sprite3D.instantiate(e);
                        t.transform.localPosition = g.v3(0, 0, 0), t.transform.localRotationEuler = g.v3(0, 90, 0), d.addChild(t), d.comp = t.addComponent(Y), t.transform.localScaleX = .8, t.transform.localScaleY = .8, t.transform.localScaleZ = .8, a.food = d, a.touchDowned = !1, a.touchUped = !1;
                    })), this.root.addChild(d);
                }
            }, {
                key: "storeForce1",
                value: function() {
                    var a = this.line;
                    a && !a.destroyed && (a.transform.localScaleZ += .04, a.transform.localScaleZ > 2.5 && (a.transform.localScaleZ = 2.5, Laya.timer.clear(this, this.vibrate1)));
                }
            }, {
                key: "storeForce2",
                value: function() {
                    var a = this.line;
                    a && !a.destroyed && (a.transform.localScaleZ += .04, a.transform.localScaleZ > 1.5 && (this.lb_tip.text = "Release your finger", a.transform.localScaleZ = 1.5, Laya.timer.clear(this, this.vibrate1)));
                }
            }, {
                key: "vibrate1",
                value: function() {
                    w.vibrateShort();
                }
            }, {
                key: "onMouseDown",
                value: function() {
                    if (!this.touchDowned && this.food) {
                        if (this.touchDowned = !0, this.touchUped = !1, this.currentPan);
                        else {
                            if (!(this.pans.length > 0)) return void console.log("已经没锅了 游戏为啥结束");
                            this.currentPan = this.pans[0];
                        }
                        if (this.nextPan);
                        else {
                            if (!(this.pans.length > 1)) return void console.log("投人阶段按下");
                            this.nextPan = this.pans[1];
                        }
                        console.log("正常获取currentPan、nextPan，开始蓄力"), this.line = this.currentPan.line, this.line.transform.localScaleZ = 0, this.line.active = !0, this.firstLevelMode ? (this.lb_tip.text = "", Laya.timer.clear(this, this.storeForce2), Laya.timer.loop(30, this, this.storeForce2)) : (Laya.timer.clear(this, this.storeForce1), Laya.timer.loop(30, this, this.storeForce1)), Laya.timer.clear(this, this.vibrate1), Laya.timer.loop(60, this, this.vibrate1), w.playEffect(l.sound.effect.shotcharge);
                        var a = this.currentPan.comp,
                            e = this.food.comp,
                            d = g.findNode(this.currentPan, "ScaleParent/Platform/FryingPan/Pan_root/Pan_ctrl/effect_jiare");
                        d.active = !0, d.getComponent(Laya.Animator).play("anim_jiare", 0, 0), a.pullBack(), e.pullBack();
                    } else console.warn("禁止操作或者食物未就绪");
                }
            }, {
                key: "onRebirth",
                value: function(a) {
                    var e = this,
                        d = this.currentPan,
                        t = this.food;
                    if (d && t) {
                        if (d.heightConfirmed) {
                            console.log("第2阶段复活 开始恢复场景"), d.mz3 && this.tipMode && (d.mz3.active = !0), t.comp.reset(), t.active = !0, t.transform.localPosition = d.transform.localPosition.clone(), t.transform.localRotationEuler = d.transform.localRotationEuler.clone();
                            var o = 1600 / this.speed,
                                n = Math.floor(o),
                                i = Math.floor(o * Math.abs(d.transform.localRotationEulerY - 180) / 45);
                            return this.firstLevelMode && (this.lb_tip.text = "Aim at the characters and \n put food in your mouth"), Laya.Tween.clearAll(t.transform), Laya.Tween.to(t.transform, {
                                localRotationEulerY: 180
                            }, i, null, Laya.Handler.create(this, function() {
                                var a = function() {
                                        Laya.Tween.to(t.transform, {
                                            localRotationEulerY: 215
                                        }, n, null, Laya.Handler.create(e, d));
                                    },
                                    d = function() {
                                        Laya.Tween.to(t.transform, {
                                            localRotationEulerY: 180
                                        }, n, null, Laya.Handler.create(e, o));
                                    },
                                    o = function() {
                                        Laya.Tween.to(t.transform, {
                                            localRotationEulerY: 145
                                        }, n, null, Laya.Handler.create(e, i));
                                    },
                                    i = function() {
                                        Laya.Tween.to(t.transform, {
                                            localRotationEulerY: 180
                                        }, n, null, Laya.Handler.create(e, a));
                                    };
                                a();
                            })), d.effect2.getChildAt(0).getComponent(Laya.Animator).speed = .75, Laya.Tween.clearAll(d.transform), void Laya.Tween.to(d.transform, {
                                localRotationEulerY: 180
                            }, i, null, Laya.Handler.create(this, function() {
                                var a = function() {
                                        Laya.Tween.to(d.transform, {
                                            localRotationEulerY: 215
                                        }, n, null, Laya.Handler.create(e, t));
                                    },
                                    t = function() {
                                        Laya.Tween.to(d.transform, {
                                            localRotationEulerY: 180
                                        }, n, null, Laya.Handler.create(e, o));
                                    },
                                    o = function() {
                                        Laya.Tween.to(d.transform, {
                                            localRotationEulerY: 145
                                        }, n, null, Laya.Handler.create(e, i));
                                    },
                                    i = function() {
                                        Laya.Tween.to(d.transform, {
                                            localRotationEulerY: 180
                                        }, n, null, Laya.Handler.create(e, a));
                                    };
                                switch (a(), e.touchDowned = !1, e.touchUped = !1, d.directionConfirmed = !1, d.heightConfirmed = !1, console.log("投食人物编号=", e.feedCharacterIndex), e.feedCharacterIndex) {
                                    default:
                                        case 0:
                                        e.character1.openMouth(),
                                    e.character2.lookRight(),
                                    e.character3.lookRight();
                                    break;
                                    case 1:
                                            e.character2.openMouth(),
                                        e.character1.lookLeft(),
                                        e.character3.lookRight();
                                        break;
                                    case 2:
                                            e.character3.openMouth(),
                                        e.character1.lookLeft(),
                                        e.character2.lookLeft();
                                }
                            }));
                        }
                        console.log("第1阶段复活 开始恢复场景"), t.comp.reset(), t.transform.localPosition = d.transform.localPosition.clone(), t.transform.localRotationEuler = d.transform.localRotationEuler.clone(), t.getChildAt(0).transform.localPosition = g.v3(0, 0, 0), t.getChildAt(0).transform.localRotationEuler = g.v3(0, 90, 0), this.touchDowned = !1, this.touchUped = !1;
                    } else console.warn("复活有问题");
                }
            }, {
                key: "onMouseUp",
                value: function() {
                    if (Laya.timer.clear(this, this.storeForce1), Laya.timer.clear(this, this.vibrate1), this.firstLevelMode && (Laya.timer.clear(this, this.storeForce2), "Aim at the characters and \n put food in your mouth" != this.lb_tip.text && (this.lb_tip.text = "")), this.food && this.currentPan)
                        if (this.nextPan && this.line) {
                            if (this.touchUped) return;
                            this.touchUped = !0, this.currentPan.e1.active = !1, this.line.active = !1;
                            var a = g.findNode(this.line, "p01").transform.position,
                                e = g.v3(a.x, 0, a.z),
                                d = this.currentPan.comp,
                                t = this.food.comp;
                            d.takeOff(), t.takeOff(this.currentPan, this.nextPan, e, this.currentPan.distance, this.onHandleResult.bind(this)), w.vibrateShort(), w.playEffect(l.sound.effect.pancakerelease);
                        } else {
                            var o = this.currentPan;
                            if (o.directionConfirmed) {
                                if (!o.heightConfirmed) {
                                    var n = o.comp,
                                        i = this.food.comp;
                                    o.mz3 && this.tipMode && (o.mz3.active = !1), o.effect2.active = !1, n.takeOff(), n.clearBody(), i.shoot(g.findNode(o.effect2, "effect_miaozhun02/Particle System").transform.position, this.feedCharacterIndex), o.heightConfirmed = !0, w.vibrateShort(), w.playEffect(l.sound.effect.pancakerelease), Laya.timer.once(2500, this, this.defaultFailure);
                                }
                            } else {
                                Laya.Tween.clearAll(o.transform), Laya.Tween.clearAll(this.food.transform), this.touchDowned = !1, this.touchUped = !1, console.log("确定投掷方向=", o.transform.localRotationEulerY), o.directionConfirmed = !0;
                                var r = new Laya.Sprite3D();
                                r.transform.localPosition = g.v3(0, 0, 0), r.transform.localRotationEuler = g.v3(0, 0, 0), o.addChild(r), r.active = !0, o.effect2 = r;
                                var s = Laya.Sprite3D.instantiate(this.effect2);
                                if (s.transform.localPosition = g.v3(0, 0, 0), s.transform.localRotationEuler = g.v3(0, 0, 0), r.addChild(s), s.active = !0, this.firstLevelMode) {
                                    s.getComponent(Laya.Animator).speed = 0;
                                    var c = s.getChildAt(0);
                                    Laya.Tween.clearAll(c), c.transform.localPosition = g.v3(0, 0, 5.5), Laya.Tween.to(c.transform, {
                                        localPositionX: 0,
                                        localPositionY: 2.5,
                                        localPositionZ: 5.5
                                    }, 1e3, null, Laya.Handler.create(this, function() {
                                        Laya.Tween.to(c.transform, {
                                            localPositionX: 0,
                                            localPositionY: .8,
                                            localPositionZ: 5.5
                                        }, 680);
                                    }));
                                }
                                var h = -0 * ((o.transform.localRotationEulerY - 180) / 45);
                                r.transform.localRotationEulerY = h, console.log("平底锅ley=", o.transform.localRotationEulerY, "   瞄准线修正=", h);
                            }
                        }
                }
            }, {
                key: "defaultFailure",
                value: function() {
                    console.log("未检测到其他碰撞 默认失败"), this.onAfterShoot({
                        character: -1,
                        part: 0
                    });
                }
            }, {
                key: "onHandleResult",
                value: function(a, e) {
                    var d = this;
                    if (a > 0) {
                        console.log("投成功"), this.showSlogan(e), w.playEffect(l.sound.effect.perfect), this.pans.shift(), this.showProgress(), console.log("开始移动镜头");
                        var t = this.cameraRigids.shift();
                        if (!t) return void console.warn("没有镜头数据？");
                        var o = t.p,
                            n = t.re;
                        this.nextPan.e2.active = !0, Laya.timer.once(300, this, function() {
                            Laya.Tween.to(d.camera3d.transform, {
                                localPositionX: o.x,
                                localPositionY: o.y,
                                localPositionZ: o.z,
                                localRotationEulerX: n.x,
                                localRotationEulerY: n.y,
                                localRotationEulerZ: n.z
                            }, 333, null, Laya.Handler.create(d, function() {
                                if (console.log("---开始调整锅的方向", d), d.food) {
                                    var a = d.nextPan,
                                        e = d.pans.length > 1 ? d.pans[1] : null;
                                    if (e) {
                                        var t = d.pan1PointToPan2(a, e);
                                        Laya.Tween.to(d.food.transform, {
                                            localRotationEulerY: t
                                        }, 333), Laya.Tween.to(a.transform, {
                                            localRotationEulerY: t
                                        }, 333, null, Laya.Handler.create(d, function() {
                                            console.log("准备完成"), d.touchDowned = !1, d.touchUped = !1, d.currentPan = null, d.nextPan = null;
                                        }));
                                    } else {
                                        console.warn("投人的准备阶段 代码待补全");
                                        var o = d.nextPan,
                                            n = 1600 / d.speed,
                                            i = Math.floor(n),
                                            r = Math.floor(n * Math.abs(o.transform.localRotationEulerY - 180) / 45);
                                        d.firstLevelMode && (d.lb_tip.text = "Aim at the characters and \n put food in your mouth");
                                        var l = d.food;
                                        switch (Laya.Tween.clearAll(l.transform), Laya.Tween.to(l.transform, {
                                            localRotationEulerY: 180
                                        }, r, null, Laya.Handler.create(d, function() {
                                            if (d.firstLevelMode) {
                                                var a = Math.floor(30 * n / 45);
                                                Laya.Tween.to(l.transform, {
                                                    localRotationEulerY: 150
                                                }, a, null, Laya.Handler.create(d, function() {
                                                    Laya.Tween.to(l.transform, {
                                                        localRotationEulerY: 180
                                                    }, a);
                                                }));
                                            } else {
                                                var e = function() {
                                                        Laya.Tween.to(l.transform, {
                                                            localRotationEulerY: 215
                                                        }, i, null, Laya.Handler.create(d, t));
                                                    },
                                                    t = function() {
                                                        Laya.Tween.to(l.transform, {
                                                            localRotationEulerY: 180
                                                        }, i, null, Laya.Handler.create(d, o));
                                                    },
                                                    o = function() {
                                                        Laya.Tween.to(l.transform, {
                                                            localRotationEulerY: 145
                                                        }, i, null, Laya.Handler.create(d, r));
                                                    },
                                                    r = function() {
                                                        Laya.Tween.to(l.transform, {
                                                            localRotationEulerY: 180
                                                        }, i, null, Laya.Handler.create(d, e));
                                                    };
                                                e();
                                            }
                                        })), d.tipMode && d.loadMZ3(), Laya.Tween.clearAll(o.transform), Laya.Tween.to(o.transform, {
                                            localRotationEulerY: 180
                                        }, r, null, Laya.Handler.create(d, function() {
                                            if (d.firstLevelMode) {
                                                var e = Math.floor(30 * n / 45);
                                                Laya.Tween.to(o.transform, {
                                                    localRotationEulerY: 150
                                                }, e, null, Laya.Handler.create(d, function() {
                                                    Laya.Tween.to(o.transform, {
                                                        localRotationEulerY: 180
                                                    }, e, null, Laya.Handler.create(d, function() {
                                                        d.touchDowned = !1, d.touchUped = !1, d.currentPan = null, d.nextPan = null, a.directionConfirmed = !1;
                                                    }));
                                                }));
                                            } else {
                                                var t = function() {
                                                        Laya.Tween.to(o.transform, {
                                                            localRotationEulerY: 215
                                                        }, i, null, Laya.Handler.create(d, r));
                                                    },
                                                    r = function() {
                                                        Laya.Tween.to(o.transform, {
                                                            localRotationEulerY: 180
                                                        }, i, null, Laya.Handler.create(d, s));
                                                    },
                                                    s = function() {
                                                        Laya.Tween.to(o.transform, {
                                                            localRotationEulerY: 145
                                                        }, i, null, Laya.Handler.create(d, l));
                                                    },
                                                    l = function() {
                                                        Laya.Tween.to(o.transform, {
                                                            localRotationEulerY: 180
                                                        }, i, null, Laya.Handler.create(d, t));
                                                    };
                                                t(), d.touchDowned = !1, d.touchUped = !1, d.currentPan = null, d.nextPan = null, a.directionConfirmed = !1;
                                            }
                                        })), d.feedCharacterIndex = Math.floor(3 * Math.random()), console.log("投食人物编号=", d.feedCharacterIndex), s.level < 5 && (d.feedCharacterIndex = 1), d.feedCharacterIndex) {
                                            default:
                                                case 0:
                                                d.character1.openMouth(),
                                            d.character2.lookRight(),
                                            d.character3.lookRight();
                                            break;
                                            case 1:
                                                    d.character2.openMouth(),
                                                d.character1.lookLeft(),
                                                d.character3.lookRight();
                                                break;
                                            case 2:
                                                    d.character3.openMouth(),
                                                d.character1.lookLeft(),
                                                d.character2.lookLeft();
                                        }
                                    }
                                } else console.warn("食物咋没了");
                            }));
                        });
                    } else a < 0 ? (this.showSlogan(0), console.log("投失败 游戏结束"), g.showLayer("RebirthLayer", {
                        width: this.panel.width,
                        text1: this.lb_level1.text,
                        text2: this.lb_level2.text,
                        coin: this.panSum - this.pans.length
                    })) : 0 == a && (this.touchDowned = !1, this.touchUped = !1, this.currentPan = null, this.nextPan = null);
                }
            }, {
                key: "pan1PointToPan2",
                value: function(a, e) {
                    var d = a.transform.position,
                        t = d.x,
                        o = d.z,
                        n = e.transform.position,
                        i = n.x,
                        r = n.z,
                        s = 0,
                        l = Math.atan((i - t) / (r - o));
                    return isNaN(l) ? s = r > o ? 0 : 180 : (s = 180 * l / Math.PI, r < o && (s += 180)), s;
                }
            }, {
                key: "onAfterShoot",
                value: function(a) {
                    var e = this;
                    Laya.timer.clear(this, this.defaultFailure), a = a || {
                        character: 2,
                        part: 0
                    }, console.log("喂人阶段 投掷结束=", a);
                    var d = a.character,
                        t = a.part,
                        o = function() {
                            switch (e.feedCharacterIndex) {
                                default:
                                    case 0:
                                    e.character1.closeMouth();
                                break;
                                case 1:
                                        e.character2.closeMouth();
                                    break;
                                case 2:
                                        e.character3.closeMouth();
                            }
                            Laya.timer.once(3e3, e, function() {
                                g.showLayer("RebirthLayer", {
                                    width: e.panel.width,
                                    text1: e.lb_level1.text,
                                    text2: e.lb_level2.text,
                                    coin: e.panSum - e.pans.length
                                });
                            });
                        };
                    if (d < 0) console.log("砸地板上了"), o();
                    else if (d == this.feedCharacterIndex)
                        if (t > 0) {
                            console.log("完美喂食");
                            var n = function() {
                                w.playEffect(l.sound.effect.eating);
                                var a = l.sound.effect.celebrations;
                                w.playEffect(a[Math.floor(Math.random() * a.length)]);
                            };
                            switch (d) {
                                default:
                                    case 0:
                                    this.character1.chew(),
                                this.character2.nodRight(),
                                this.character3.nodRight(),
                                n();
                                break;
                                case 1:
                                        this.character2.chew(),
                                    this.character1.nodLeft(),
                                    this.character3.nodRight(),
                                    n();
                                    break;
                                case 2:
                                        this.character3.chew(),
                                    this.character1.nodLeft(),
                                    this.character2.nodLeft(),
                                    n();
                            }
                            this.pans.shift(), this.showProgress(), Laya.timer.once(3e3, this, function() {
                                c.showImitationView(Laya.stage, function() {
                                    g.showLayer("ResultLayer", {
                                        type: "win",
                                        coin: e.panSum
                                    });
                                });
                            });
                        } else {
                            switch (d) {
                                default:
                                    case 0:
                                    this.character1.hitLeft();
                                break;
                                case 1:
                                        this.character2.hit();
                                    break;
                                case 2:
                                        this.character3.hitRight();
                            }
                            o();
                        }
                    else switch (o(), d) {
                        default:
                            case 0:
                            this.character1.hitLeft();
                        break;
                        case 1:
                                this.character2.hit();
                            break;
                        case 2:
                                this.character3.hitRight();
                    }
                }
            }, {
                key: "showSlogan",
                value: function(a) {
                    switch (console.log("showSlogan======", a), this.sloganNode.visible = !0, a) {
                        case 0:
                            this.sloganNode.play(3, !1);
                            break;
                        case 1:
                            this.sloganNode.play(0, !1);
                            break;
                        case 2:
                            this.sloganNode.play(1, !1);
                            break;
                        case 3:
                            this.sloganNode.play(2, !1);
                    }
                }
            }, {
                key: "loadMZ3",
                value: function() {
                    var a = this.lastPan;
                    if (a && !a.destroyed) {
                        if (a.mz3 && !a.mz3.destroyed) return;
                        Laya.Sprite3D.load("res/unity/effect_end_miaozhun003.lh", Laya.Handler.create(this, function(e) {
                            if (!a.mz3 || a.mz3.destroyed) {
                                var d = Laya.Sprite3D.instantiate(e);
                                d.transform.localPosition = g.v3(0, 0, 0), d.transform.localRotationEuler = g.v3(0, 0, 0), a.addChild(d), a.mz3 = d;
                            }
                        }));
                    }
                }
            }, {
                key: "openFirstLevelGuideMode",
                value: function() {
                    this.firstLevelMode = !0, this.tipMode = !0, this.lb_tip.text = "Long press to charge,\nrelease to launch";
                }
            }, {
                key: "onClickSkip",
                value: function() {
                    var a = this;
                    a.touchUped = !0, a.touchDowned = !0, c.showImitationView(Laya.stage, function() {
                        g.showLayer("ResultLayer", {
                            type: "win",
                            coin: a.panSum
                        });
                    });
                }
            }, {
                key: "onClickBack",
                value: function() {
                    g.hideLayer("GameLayer", {
                        destroy: !0
                    }), g.showLayer("StartLayer", null);
                }
            }, {
                key: "onClickTip",
                value: function() {
                    this.tipMode = !0, this.loadMZ3();
                }
            }]), GameLayer;
        }(),
        ra = function(a) {
            function LeftAdLayer() {
                return _classCallCheck(this, LeftAdLayer), _possibleConstructorReturn(this, _getPrototypeOf(LeftAdLayer).call(this));
            }
            return _inherits(LeftAdLayer, r), _createClass(LeftAdLayer, [{
                key: "onAwake",
                value: function() {
                    g.addClickEventListener(g.findNode(this.owner, "board/btn_close"), this, this.onClickClose);
                }
            }, {
                key: "show",
                value: function() {
                    var a = g.findNode(this.owner, "board");
                    Laya.Tween.clearAll(a), a.x = -400, Laya.Tween.to(a, {
                        x: 0
                    }, 222, Laya.Ease.sineOut);
                }
            }, {
                key: "onClickClose",
                value: function() {
                    g.hideLayer("LeftAdLayer", null);
                }
            }]), LeftAdLayer;
        }(),
        sa = function(a) {
            function LoadingLayer() {
                return _classCallCheck(this, LoadingLayer), _possibleConstructorReturn(this, _getPrototypeOf(LoadingLayer).call(this));
            }
            return _inherits(LoadingLayer, r), _createClass(LoadingLayer, [{
                key: "onAwake",
                value: function() {
                    platform.getInstance().startup("Pancake-Master", () => {
                        let yad = new Laya.Image();
                        yad.scale(0.8, 0.8);
                        yad.skin = "common/yad.png";
                        yad.centerX = 0;
                        yad.bottom = 10;
                        yad.zOrder = 2e3;
                        yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                            platform.getInstance().navigate("GAME", "LOGO")
                        })
                        Laya.stage.addChild(yad);
                        window.yad = yad;
                        window.yad.visible = false;
                        var a = new Laya.Skeleton();
                        a.pos(288, 850), this.owner.addChild(a), a.load("res/sk/load.sk", Laya.Handler.create(this, function() {
                            a.play(0, !0);
                        })), Laya.stage.on("加载完成", this, function() {
                            g.hideLayer("LoadingLayer", {
                                destroy: !0
                            });
                        }), g.showLayer("StaticLayer", {
                            zOrder: 100
                        }), w.loadSubPacks(function() {
                            w.initAfterAllResLoaded(), g.showLayer("StartLayer", null);
                        });
                    })
                }
            }]), LoadingLayer;
        }(),
        la = function(a) {
            function NotEnoughLayer() {
                return _classCallCheck(this, NotEnoughLayer), _possibleConstructorReturn(this, _getPrototypeOf(NotEnoughLayer).call(this));
            }
            return _inherits(NotEnoughLayer, r), _createClass(NotEnoughLayer, [{
                key: "onAwake",
                value: function() {
                    g.addClickEventListener(g.findNode(this.owner, "btn_accept"), this, this.onClickAccept), g.addClickEventListener(g.findNode(this.owner, "btn_thanks"), this, this.onClickThanks);
                }
            }, {
                key: "show",
                value: function(a) {
                    this.argu = a;
                    var e = a.type;
                    "coin" == e ? (g.findNode(this.owner, "title/energy").visible = !1, g.findNode(this.owner, "title/coin").visible = !0, g.findNode(this.owner, "coin").visible = !0, g.findNode(this.owner, "energy").visible = !1) : "energy" == e && (g.findNode(this.owner, "title/energy").visible = !0, g.findNode(this.owner, "title/coin").visible = !1, g.findNode(this.owner, "coin").visible = !1, g.findNode(this.owner, "energy").visible = !0), g.breath(g.findNode(this.owner, "btn_accept"), this), c.showBannerTrick(g.findNode(this.owner, "btn_thanks"), g.getWinHeight() / 2 + 650 - 100, 914);
                }
            }, {
                key: "hide",
                value: function() {
                    g.unbreath(g.findNode(this.owner, "btn_accept")), w.hideBanner();
                }
            }, {
                key: "onClickAccept",
                value: function() {
                    var a = this;
                    w.createVideo(function() {
                        "coin" == a.argu.type ? (s.coin += 1e3, w.saveCoin(), g.showStatic("coin"), w.showToast("恭喜获得1000金币！"), Laya.stage.event("金币飞", {
                            x: 288,
                            y: 850
                        })) : (w.addEnergy(20), g.showStatic("energy"), w.showToast("恭喜获得20体力！")), g.hideLayer("NotEnoughLayer", null);
                    }, null);
                }
            }, {
                key: "onClickThanks",
                value: function() {
                    g.hideLayer("NotEnoughLayer", null);
                }
            }]), NotEnoughLayer;
        }(),
        ca = function(a) {
            function RankLayer() {
                return _classCallCheck(this, RankLayer), _possibleConstructorReturn(this, _getPrototypeOf(RankLayer).call(this));
            }
            return _inherits(RankLayer, r), _createClass(RankLayer, [{
                key: "onAwake",
                value: function() {
                    g.addClickEventListener(g.findNode(this.owner, "btn_back"), this, this.onClickBack), g.addClickEventListener(g.findNode(this.owner, "btn_prev"), this, this.onClickPrev), g.addClickEventListener(g.findNode(this.owner, "btn_next"), this, this.onClickNext), this.tex = new Laya.Texture2D(), this.content = g.findNode(this.owner, "content"), w.setSharedCanvasSize(452, 520), w.postMessage({
                        page: 0
                    });
                }
            }, {
                key: "show",
                value: function() {
                    g.showStatic(), c.hideBanner();
                }
            }, {
                key: "hide",
                value: function() {
                    g.showStatic("energy"), c.showExhibitionView(function() {
                        c.showBanner(!0);
                    });
                }
            }, {
                key: "onUpdate",
                value: function() {
                    var a = Laya.Browser.window.wx;
                    if (a) {
                        var e = a.getOpenDataContext().canvas;
                        this.tex.loadImageSource(e), this.content && (this.content.texture = new Laya.Texture(this.tex));
                    }
                }
            }, {
                key: "onClickBack",
                value: function() {
                    g.hideLayer("RankLayer", null);
                }
            }, {
                key: "onClickPrev",
                value: function() {
                    w.postMessage({
                        page: -1
                    });
                }
            }, {
                key: "onClickNext",
                value: function() {
                    w.postMessage({
                        page: 1
                    });
                }
            }]), RankLayer;
        }(),
        ha = function(a) {
            function RebirthLayer() {
                return _classCallCheck(this, RebirthLayer), _possibleConstructorReturn(this, _getPrototypeOf(RebirthLayer).call(this));
            }
            return _inherits(RebirthLayer, r), _createClass(RebirthLayer, [{
                key: "onAwake",
                value: function() {
                    this.panel = g.findNode(this.owner, "bar/panel/bar"), g.addClickEventListener(g.findNode(this.owner, "btn_rebirth"), this, this.onClickRebirth), g.addClickEventListener(g.findNode(this.owner, "btn_thanks"), this, this.onClickThanks);
                    var appList = this.owner.getChildByName("appList");
                    platform.getInstance().initList(appList);
                }
            }, {
                key: "show",
                value: function(a) {
                    var e = a.width,
                        d = a.text1,
                        t = a.text2;
                    g.findNode(this.owner, "bar/panel").width = e, g.findNode(this.owner, "bar/level1").text = d, g.findNode(this.owner, "bar/level2").text = t, this.argu = a, g.breath(g.findNode(this.owner, "btn_rebirth"), this), c.showSettlementView(this.owner, 650);
                }
            }, {
                key: "hide",
                value: function() {
                    g.unbreath(g.findNode(this.owner, "btn_rebirth")), w.hideBanner();
                }
            }, {
                key: "onClickRebirth",
                value: function() {
                    w.createVideo(function() {
                        g.hideLayer("RebirthLayer", null), Laya.stage.event("复活", {});
                    });
                }
            }, {
                key: "onClickThanks",
                value: function() {
                    var a = this;
                    g.hideLayer("RebirthLayer", null), c.showImitationView(Laya.stage, function() {
                        g.showLayer("ResultLayer", {
                            type: "lose",
                            coin: a.argu.coin
                        });
                    });
                }
            }]), RebirthLayer;
        }(),
        fa = function(a) {
            function ResultLayer() {
                var a;
                return _classCallCheck(this, ResultLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(ResultLayer).call(this))).handling = !1, a;
            }
            return _inherits(ResultLayer, r), _createClass(ResultLayer, [{
                key: "onAwake",
                value: function() {
                    this.panel = g.findNode(this.owner, "progress/panel"), this.panel.width = 1, this.lb_progress = g.findNode(this.owner, "progress/lb_progress"), g.addClickEventListener(g.findNode(this.owner, "btn_accept3"), this, this.onClickAccept3), g.addClickEventListener(g.findNode(this.owner, "btn_thanks"), this, this.onClickThanks), this.lb_coin3 = g.findNode(this.owner, "btn_accept3/lb_coin3");
                    var appList = this.owner.getChildByName("appList");
                    platform.getInstance().initList(appList);
                }
            }, {
                key: "getProgressAdd",
                value: function() {
                    var a = s.level;
                    return a < 3 ? 50 : a < 9 ? 25 : a < 14 ? 20 : a < 24 ? 10 : 5;
                }
            }, {
                key: "show",
                value: function(a) {
                    this.handling = !1;
                    for (var e = l.unity.foods.length, d = 0; d < e && !(s.foods[d] < 1); d++);
                    var t = d;
                    if (console.log("unlock=", t), g.findNode(this.owner, "progress/sp").loadImage(l.tex.foodTextures[t]), this.argu = a, "win" == a.type) {
                        g.findNode(this.owner, "win").visible = !0, g.findNode(this.owner, "lose").visible = !1, s.key++, w.saveKey(), w.aldOnEnd(s.level, !0);
                        var o = this.getProgressAdd();
                        s.progress += o, s.progress >= 100 && (s.progress = 100), w.saveProgress(), s.level++, w.saveLevel();
                    } else w.aldOnEnd(s.level, !1), g.findNode(this.owner, "win").visible = !1, g.findNode(this.owner, "lose").visible = !0;
                    s.progress >= 100 && (s.progress = 100), w.saveProgress(), this.lb_progress.text = s.progress + "%";
                    var n = 176 * s.progress / 100;
                    n = n > 0 ? n : 1, this.panel.width = 1, Laya.Tween.clearAll(this.panel), Laya.Tween.to(this.panel, {
                        width: n
                    }, 222, Laya.Ease.sineOut, Laya.Handler.create(this, function() {
                        s.progress >= 100 && g.showLayer("UnlockLayer", {
                            zOrder: 101,
                            reward: t
                        });
                    }));
                    var i = a.coin;
                    this.lb_coin3.text = (3 * i).toString(), g.showStatic("coin"), g.breath(g.findNode(this.owner, "btn_accept3"), this), c.showBannerTrick(g.findNode(this.owner, "btn_thanks"), g.getWinHeight() / 2 + 650 - 100, 914), c.showSettlementView(this.owner, 650);
                }
            }, {
                key: "hide",
                value: function() {
                    g.unbreath(g.findNode(this.owner, "btn_accept3")), w.hideBanner(), w.resetBanner();
                }
            }, {
                key: "_accept",
                value: function(a) {
                    if (!this.handling) {
                        this.handling = !0;
                        var e = this.argu.coin,
                            d = function() {
                                s.coin += e * a, w.saveCoin(), g.hideLayer("ResultLayer", null), g.hideLayer("GameLayer", {
                                    destroy: !0
                                }), s.key >= 3 ? g.showLayer("ChestLayer", {
                                    layer: "StartLayer"
                                }) : g.showLayer("StartLayer", null);
                            };
                        e > 0 ? Laya.stage.event("金币飞", {
                            x: 288,
                            y: 950,
                            callback: d
                        }) : d();
                    }
                }
            }, {
                key: "onClickAccept3",
                value: function() {
                    var a = this;
                    w.createVideo(function() {
                        a._accept(3);
                    }, null);
                }
            }, {
                key: "onClickThanks",
                value: function() {
                    var a = this;
                    c.getAuditStatus() ? a._accept(1) : (c.hideBanner(), g.showLayer("SmashBox", function() {
                        a._accept(1);
                    }));
                }
            }]), ResultLayer;
        }(),
        ua = function(a) {
            function SignInLayer() {
                var a;
                return _classCallCheck(this, SignInLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(SignInLayer).call(this))).double = !1, a;
            }
            return _inherits(SignInLayer, r), _createClass(SignInLayer, [{
                key: "onAwake",
                value: function() {
                    var a = this;
                    g.addClickEventListener(g.findNode(this.owner, "btn_accept"), this, this.onClickAccept), g.addClickEventListener(g.findNode(this.owner, "btn_double"), this, function() {
                        a.selectDouble(!a.double);
                    }), g.addClickEventListener(g.findNode(this.owner, "btn_back"), this, function() {
                        g.hideLayer("SignInLayer", null);
                    });
                }
            }, {
                key: "show",
                value: function() {
                    g.showStatic("coin"), this.selectDouble(!1), g.breath(g.findNode(this.owner, "btn_accept"), this);
                    for (var a = l.unity.foods.length - 1; a > -1 && !(s.foods[a] < 1); a--);
                    this.rewardFoodIndex = a, g.findNode(this.owner, "d7/sp").loadImage(l.tex.foodTextures[this.rewardFoodIndex]), this.updateUI(), c.showBanner(!0);
                }
            }, {
                key: "updateUI",
                value: function() {
                    for (var a = 1; a <= 7; a++) {
                        var e = g.findNode(this.owner, "d" + a);
                        a <= s.signInDays ? g.gray(e) : g.ungray(e);
                    }
                    s.signInStatus > 0 ? (g.findNode(this.owner, "btn_accept").visible = !0, g.findNode(this.owner, "btn_back").visible = !1) : (g.findNode(this.owner, "btn_accept").visible = !1, g.findNode(this.owner, "btn_back").visible = !0);
                }
            }, {
                key: "hide",
                value: function() {
                    g.showStatic("energy"), g.unbreath(g.findNode(this.owner, "btn_accept")), c.hideBanner(), c.showExhibitionView(function() {
                        c.showBanner(!0);
                    });
                }
            }, {
                key: "selectDouble",
                value: function(a) {}
            }, {
                key: "onClickAccept",
                value: function() {
                    var a = this;
                    this.double ? w.createVideo(function() {
                        a.getReward(2);
                    }, null) : this.getReward(1);
                }
            }, {
                key: "getReward",
                value: function(a) {
                    var e = this;
                    if (s.signInStatus > 0) {
                        var d = function(a, e, d) {
                            s.coin += a, w.saveCoin(), w.showToast("签到成功，恭喜获得金币奖励x" + a + "！"), g.hideLayer("SignInLayer", null), Laya.stage.event("金币飞", {
                                x: e,
                                y: d
                            });
                        };
                        w.signIn(function(a) {
                            switch (a) {
                                case 1:
                                    d(100, 54, 516);
                                    break;
                                case 2:
                                    d(200, 185, 516);
                                    break;
                                case 3:
                                    d(200, 315, 516);
                                    break;
                                case 4:
                                    d(300, 446, 516);
                                    break;
                                case 5:
                                    d(300, 103, 680);
                                    break;
                                case 6:
                                    d(500, 233, 680);
                                    break;
                                case 7:
                                    s.foods[e.rewardFoodIndex] = 1, s.food = e.rewardFoodIndex, Laya.stage.event("updateFood"), w.saveFood(), w.saveFoods(), w.showToast("恭喜获得皮肤奖励！");
                            }
                        });
                    } else w.showToast("今天已经签过到了哦！"), g.hideLayer("SignInLayer", null);
                }
            }]), SignInLayer;
        }(),
        ya = function(a) {
            function SkinLayer() {
                var a;
                return _classCallCheck(this, SkinLayer), (a = _possibleConstructorReturn(this, _getPrototypeOf(SkinLayer).call(this))).lock = !1, a.pageIndex = 0, a.pageCount = 0, a;
            }
            return _inherits(SkinLayer, r), _createClass(SkinLayer, [{
                key: "onAwake",
                value: function() {
                    var a = this;
                    this.scrollView = g.findNode(this.owner, "board/scrollView"), this.content = g.findNode(this.owner, "board/scrollView/content"), g.addClickEventListener(g.findNode(this.owner, "btn_close"), this, this.onClickClose), g.addClickEventListener(g.findNode(this.owner, "board/btn_unlock"), this, this.onClickUnlock), this.choose = g.findNode(this.owner, "board/scrollView/content/choose"), this.choose.zOrder = 1, this.pageIndex = 0, this.pageCount = Math.ceil(5.5);
                    for (var e = [], d = 0, t = 0; t < this.pageCount; t++)
                        for (var o = 576 * t + 108, n = function() {
                                var n = o + i % 3 * 180,
                                    r = i < 3 ? 136 : 316,
                                    c = a.createItem(t);
                                c.pos(n, r), a.content.addChild(c), c.index = d;
                                var h = new Laya.Sprite();
                                h.loadImage(s.foods[d] > 0 ? l.tex.foodTextures[d] : "res/icon/icon_weijiesuo.png"), h.size(150, 150), h.pivotX = 75, h.pivotY = 75, h.pos(75, 75), c.addChild(h), c.on(Laya.Event.CLICK, a, function() {
                                    var e = c.index;
                                    s.foods[e] > 0 ? (console.log("拥有这个皮肤 遂切换"), s.food = e, w.saveFood(), a.choose.pos(c.x, c.y), Laya.stage.event("updateFood"), w.playEffect(l.sound.effect.itemquipped)) : console.log("未有这个皮肤");
                                }), d == s.food && a.choose.pos(n, r), e.push(c), d++;
                            }, i = 0; i < 6 && d < 33; i++) n();
                    this.items = e, this.dotNode = g.findNode(this.owner, "board/dot");
                    var r, c = (576 - (40 * this.pageCount - 40)) / 2;
                    console.log("dotBaseX = ", c);
                    for (t = 0; t < this.pageCount; t++) {
                        var h = new Laya.Sprite();
                        h.loadImage("ui/icon_skin_fanye_02.png"), h.pos(c + 40 * t, 0), this.dotNode.addChild(h);
                    }
                    this.showPage(), this.toucded = false;
                    this.scrollView.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                        if (!this.toucded) {
                            this.toucded = true;
                            a.content.xx = a.content.x, r = e.stageX;
                        }
                    }), this.scrollView.on(Laya.Event.MOUSE_MOVE, this, function(e) {
                        if (this.toucded) {
                            void 0 !== a.content.xx && (a.content.x = a.content.xx + e.stageX - r);
                        }
                    }), this.scrollView.on(Laya.Event.MOUSE_UP, this, function() {
                        if (void 0 !== a.content.xx) {
                            var e = a.content.x - a.content.xx;
                            console.log(e), e < -50 ? (console.log("==>"), a.pageIndex++, a.pageIndex > a.pageCount - 1 && (a.pageIndex = a.pageCount - 1)) : e > 50 && (console.log("<=="), a.pageIndex--, a.pageIndex < 0 && (a.pageIndex = 0)), a.showPage();
                        }
                        this.toucded = false;
                    }), Laya.stage.event("updateFood");
                }
            }, {
                key: "showPage",
                value: function() {
                    var a = this.pageIndex;
                    console.log("当前页 = ", a), Laya.Tween.clearAll(this.content), Laya.Tween.to(this.content, {
                        x: -576 * a
                    }, 222, Laya.Ease.sineOut);
                    for (var e = 0; e < this.dotNode.numChildren; e++) {
                        var d = this.dotNode.getChildAt(e);
                        e == a ? d.loadImage("ui/icon_skin_fanye_01.png") : d.loadImage("ui/icon_skin_fanye_02.png");
                    }
                }
            }, {
                key: "createItem",
                value: function(a) {
                    var e = new Laya.Image();
                    return e.loadImage("ui/icon_AD_02_bg.png"), e.width = 150, e.height = 150, e.anchorX = .5, e.anchorY = .5, e;
                }
            }, {
                key: "show",
                value: function() {
                    window.yad.visible = false;
                    g.showStatic("coin"), Laya.stage.event("hideStartLayerUI", !1), c.hideBanner();
                }
            }, {
                key: "hide",
                value: function() {
                    window.yad.visible = true;
                    g.showStatic("energy"), Laya.stage.event("hideStartLayerUI", !0), c.showExhibitionView(function() {
                        c.showBanner(!0);
                    });
                }
            }, {
                key: "onClickClose",
                value: function() {
                    this.lock ? console.warn("奖励还没随机完") : g.hideLayer("SkinLayer", null);
                }
            }, {
                key: "onClickUnlock",
                value: function() {
                    if (this.lock) return;
                    for (var a = this, e = this.pageIndex, d = 6 * e + 6, t = [], o = 6 * e; o < d && o < 33; o++) s.foods[o] < 1 && t.push(o);
                    if (t.length > 0)
                        if (s.coin >= 1e3) {
                            s.coin -= 1e3, w.saveCoin(), this.lock = !0, t = t.sort(function() {
                                return Math.random() < .5 ? -1 : 1;
                            }).concat(t.sort(function() {
                                return Math.random() < .5 ? -1 : 1;
                            })), console.log("开始roll skin = ", t);
                            var n = 0;
                            ! function temp() {
                                if (t.length > 0) {
                                    n = t.shift();
                                    var e = a.items[n];
                                    a.choose.pos(e.x, e.y), Laya.timer.once(111, a, temp);
                                } else {
                                    var d = a.items[n];
                                    Laya.Tween.to(d, {
                                        scaleX: 1.2,
                                        scaleY: 1.2
                                    }, 111, null, Laya.Handler.create(a, function() {
                                        Laya.Tween.to(d, {
                                            scaleX: 0
                                        }, 111, null, Laya.Handler.create(a, function() {
                                            d.getChildAt(0).loadImage(l.tex.foodTextures[n]), Laya.Tween.to(d, {
                                                scaleX: 1.2
                                            }, 111, null, Laya.Handler.create(a, function() {
                                                Laya.Tween.to(d, {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                }, 111, null, Laya.Handler.create(a, function() {
                                                    s.foods[n] = 1, w.saveFoods(), s.food = n, w.saveFood(), a.lock = !1, Laya.stage.event("updateFood"), w.playEffect(l.sound.effect.itemunlocked);
                                                }));
                                            }));
                                        }));
                                    }));
                                }
                            }();
                        } else w.showToast("金币不足！"), g.showLayer("NotEnoughLayer", {
                            type: "coin",
                            zOrder: 99
                        });
                    else w.showToast("这一页的皮肤收集全了哦！");
                }
            }]), SkinLayer;
        }(),
        pa = function(a) {
            function SmashBox() {
                var a;
                return _classCallCheck(this, SmashBox), (a = _possibleConstructorReturn(this, _getPrototypeOf(SmashBox).call(this))).progressBarNum = 0, a.userClickBox = !1, a.isHaveshownBanner = !1, a.typeStyle = 1, a;
            }
            return _inherits(SmashBox, r), _createClass(SmashBox, [{
                key: "onAwake",
                value: function() {
                    var a = this;
                    this.SmashBox = this.owner, this.SmashBox.on(Laya.Event.CLICK, this, function(a) {
                        a.stopPropagation();
                    }), g.findNode(this.SmashBox, "SmashBtn").on(Laya.Event.MOUSE_DOWN, this, function() {
                        a.progressBarNum < 450 && (a.progressBarNum += 45), a.updateProgressBarUI(), Laya.Tween.to(g.findNode(a.SmashBox, "SmashBtn"), {
                            scaleX: .9,
                            scaleY: .9
                        }, 111, null);
                    }), g.findNode(this.SmashBox, "SmashBtn").on(Laya.Event.MOUSE_UP, this, function() {
                        a.userClickBox || (a.userClickBox = !0, a.setIntervalNum = setInterval(function() {
                            a.progressBarNum > 0 && a.progressBarNum >= 4.5 && (a.progressBarNum -= 4.5, a.updateProgressBarUI());
                        }, 100)), Laya.Tween.to(g.findNode(a.SmashBox, "SmashBtn"), {
                            scaleX: 1,
                            scaleY: 1
                        }, 222, null);
                    }), g.findNode(this.SmashBox, "immediatelyReceive").on(Laya.Event.CLICK, this, function() {
                        g.hideLayer("SmashBox", null), w.addEnergy(20), w.showToast("获得20点体力"), a._calllback && a._calllback();
                    });
                }
            }, {
                key: "showTreasureChestBox",
                value: function() {
                    g.findNode(this.SmashBox, "progressBarbg").visible = !1, g.findNode(this.SmashBox, "progressBarNum").visible = !1, g.findNode(this.SmashBox, "treasureChest").visible = !1, g.findNode(this.SmashBox, "SmashBtn").visible = !1, g.findNode(this.SmashBox, "treasureChestText").visible = !1, g.findNode(this.SmashBox, "immediatelyReceive").visible = !0, g.findNode(this.SmashBox, "openTreasureChest").visible = !0, g.findNode(this.SmashBox, "guangbg").visible = !0;
                }
            }, {
                key: "show",
                value: function(a) {
                    this._calllback = a, this.SmashBox.visible = !0, g.findNode(this.SmashBox, "progressBarbg").visible = !0, g.findNode(this.SmashBox, "progressBarNum").visible = !0, g.findNode(this.SmashBox, "treasureChest").visible = !0, g.findNode(this.SmashBox, "SmashBtn").visible = !0, g.findNode(this.SmashBox, "treasureChestText").visible = !0, g.findNode(this.SmashBox, "immediatelyReceive").visible = !1, g.findNode(this.SmashBox, "openTreasureChest").visible = !1, g.findNode(this.SmashBox, "guangbg").visible = !1, this.userClickBox = !1, this.progressBarNum = 0, this.isHaveshownBanner = !1, g.findNode(this.SmashBox, "progressBarNum").text = "0%", g.findNode(this.SmashBox, "progressBarbg/progressBar").width = 0;
                    var e = Math.random();
                    this.typeStyle = e >= 0 && e <= .6 ? 1 : 0;
                }
            }, {
                key: "updateProgressBarUI",
                value: function() {
                    var a = this,
                        e = Math.ceil(this.progressBarNum / 450 * 100);
                    e >= 50 && e < 100 ? this.isHaveshownBanner || 1 == this.typeStyle && (this.isHaveshownBanner = !0, c.showBanner(!0), clearInterval(this.setIntervalNum), setTimeout(function() {
                        c.hideBanner(), a.showTreasureChestBox();
                    }, 1200)) : e >= 100 && (clearInterval(this.setIntervalNum), this.progressBarNum = 450, this.showTreasureChestBox(), e = 100), g.findNode(this.SmashBox, "progressBarbg/progressBar").width = this.progressBarNum, g.findNode(this.SmashBox, "progressBarNum").text = e + "%";
                }
            }, {
                key: "hide",
                value: function() {}
            }]), SmashBox;
        }(),
        va = function(a) {
            function StartLayer() {
                return _classCallCheck(this, StartLayer), _possibleConstructorReturn(this, _getPrototypeOf(StartLayer).call(this));
            }
            return _inherits(StartLayer, r), _createClass(StartLayer, [{
                key: "onAwake",
                value: function() {
                    var a = this;
                    g.addClickEventListener(g.findNode(this.owner, "btn_food"), this, this.onClickSkin), g.addClickEventListener(g.findNode(this.owner, "btn_signIn"), this, this.onClickSignIn), g.addClickEventListener(g.findNode(this.owner, "btn_moreGames"), this, this.onClickMoreGames), g.addClickEventListener(g.findNode(this.owner, "btn_rank"), this, this.onClickRank), g.addClickEventListener(g.findNode(this.owner, "btn_share"), this, this.onClickShare), g.addClickEventListener(g.findNode(this.owner, "btn_start"), this, this.onClickStart), Laya.Scene3D.load(l.unity.scene.startScene, Laya.Handler.create(this, function(e) {
                        e.zOrder = -1, a.owner.addChild(e), a.scene3d = e, e.flag = !0;
                        var d = g.findNode(e, "FryingPan"),
                            t = (d.getComponent(Laya.Animator), new Laya.Sprite3D());
                        t.name = "foodRoot", d.addChild(t), a.pan = d, g.findNode(a.pan, "ScaleParent/Platform/FryingPan/Pan_root/Pan_ctrl/effect_jiare").active = !1, g.findNode(a.pan, "ScaleParent/Platform/FryingPan/Pan_root/Pan_ctrl/effect_succ").active = !1, g.findNode(a.scene3d, "Main Camera").active = !0, g.findNode(a.scene3d, "Main Camera_skin").active = !1, g.findNode(a.scene3d, "Main Camera").enableHDR = !1, g.findNode(a.scene3d, "Main Camera_skin").enableHDR = !1, a.updateFood(), Laya.stage.event("加载完成");
                    })), Laya.stage.on("hideStartLayerUI", this, function(e) {
                        for (var d = 0; d < a.owner.numChildren; d++) try {
                            var t = a.owner.getChildAt(d);
                            if (t.flag) continue;
                            t.visible = e;
                        } catch (a) {}
                        a.scene3d && (e ? (g.findNode(a.scene3d, "Main Camera").active = !0, g.findNode(a.scene3d, "Main Camera_skin").active = !1) : (g.findNode(a.scene3d, "Main Camera").active = !1, g.findNode(a.scene3d, "Main Camera_skin").active = !0));
                    }), Laya.stage.on("updateFood", this, this.updateFood), c.cblShow(this.owner, !0);
                }
            }, {
                key: "updateFood",
                value: function() {
                    var a = this;
                    if (this.pan && !this.pan.destroyed) {
                        var e = s.food,
                            d = l.unity.foods[e];
                        if (d) {
                            this.pan.getChildByName("foodRoot").destroyChildren(), Laya.Sprite3D.load(d, Laya.Handler.create(this, function(e) {
                                var d = Laya.Sprite3D.instantiate(e);
                                d.transform.localPosition = g.v3(0, .02, 0), d.transform.localScaleX = .8, d.transform.localScaleY = .8, d.transform.localScaleZ = .8, a.pan.getChildByName("foodRoot").addChild(d), (d.getComponent(Laya.Rigidbody3D) || d.addComponent(Laya.Rigidbody3D)).isKinematic = !0, d.getComponent(Laya.Animator).play(A, 0, 0), a.pan.getComponent(Laya.Animator).play(P, 0, 0);
                            }));
                        }
                    }
                }
            }, {
                key: "show",
                value: function() {
                    g.showStatic("energy"), g.breath(g.findNode(this.owner, "btn_start"), this), this.updateFood(), c.showBanner(), c.showTopGame(this.owner);
                }
            }, {
                key: "hide",
                value: function() {
                    g.unbreath(g.findNode(this.owner, "btn_start")), c.hideBanner(), c.hideTopGame();
                }
            }, {
                key: "onClickSkin",
                value: function() {
                    g.showLayer("SkinLayer", null);
                }
            }, {
                key: "onClickSignIn",
                value: function() {
                    g.showLayer("SignInLayer", null);
                }
            }, {
                key: "onClickMoreGames",
                value: function() {
                    console.warn("todo");
                }
            }, {
                key: "onClickRank",
                value: function() {
                    g.showLayer("RankLayer", null);
                }
            }, {
                key: "onClickShare",
                value: function() {
                    w.share();
                }
            }, {
                key: "onClickStart",
                value: function() {
                    platform.getInstance().showInterstitial(() => {
                        w.useEnergy(5, function() {
                            Laya.stage.event("过场", {
                                type: "start",
                                callback: function() {
                                    g.hideLayer("StartLayer", null), g.showLayer("GameLayer", {
                                        zOrder: -1
                                    });
                                }
                            });
                        }, function() {
                            w.showToast("体力不足"), g.showLayer("NotEnoughLayer", {
                                type: "energy",
                                zOrder: 99
                            });
                        });
                    })
                }
            }]), StartLayer;
        }(),
        wa = function(a) {
            function StaticLayer() {
                return _classCallCheck(this, StaticLayer), _possibleConstructorReturn(this, _getPrototypeOf(StaticLayer).call(this));
            }
            return _inherits(StaticLayer, r), _createClass(StaticLayer, [{
                key: "onAwake",
                value: function() {
                    var a = this;
                    Laya.stage.on("updateCoin", this, this.updateCoin);
                    this.coin = g.findNode(this.owner, "coin"), this.lb_coin = g.findNode(this.coin, "lb_coin"), this.energy = g.findNode(this.owner, "energy"), this.lb_energy = g.findNode(this.energy, "lb_energy"), this.lb_countDown = g.findNode(this.energy, "lb_countDown"), Laya.stage.on("showStatic", this, this.onShowStatic), this.onShowStatic("energy"), Laya.stage.on("金币飞", this, function(e) {
                        for (var d = 650 - g.getWinHeight() / 2 + 56, t = e.x || 0, o = e.y || 0, n = 0; n < 10; n++) Laya.timer.once(50 * n, a, function() {
                            var e = new Laya.Image();
                            e.skin = "ui/icon_money_01.png", e.pos(t, o), a.owner.addChild(e), Laya.Tween.to(e, {
                                x: t + 100 * Math.random() - 50,
                                y: o + 100 * Math.random() - 50
                            }, 200, Laya.Ease.quartOut, Laya.Handler.create(a, function() {
                                Laya.Tween.to(e, {
                                    x: 20,
                                    y: d
                                }, 250, Laya.Ease.quartIn, Laya.Handler.create(a, function() {
                                    e.destroy();
                                }));
                            }));
                        });
                        e.callback && Laya.timer.once(1100, a, function() {
                            e.callback && e.callback();
                        });
                    });
                    var e = g.findNode(this.owner, "cover");
                    Laya.stage.on("过场", this, function(d) {
                        var t = 650 - g.getWinHeight() / 2 - 2400,
                            o = 650 + g.getWinHeight() / 2 - 2400 + 680;
                        switch (d.type) {
                            default:
                                case "start":
                                e.visible = !0,
                            Laya.Tween.clearAll(e),
                            e.y = t,
                            Laya.Tween.to(e, {
                                y: o
                            }, (o - t) / 3, null, Laya.Handler.create(a, function() {
                                Laya.Tween.to(e, {}, 5e3, null, Laya.Handler.create(a, a.end)), d.callback && d.callback();
                            }));
                            break;
                            case "end":
                                    a.end();
                        }
                    });
                }
            }, {
                key: "updateEnergy",
                value: function(a) {
                    var e = "";
                    if (isNaN(a) || a >= 600) this.lb_countDown.text = e;
                    else {
                        var d = Math.floor(a / 60),
                            t = a % 60;
                        e = (d < 10 ? "0" + d : d) + ":" + (t < 10 ? "0" + t : t), this.lb_countDown.text = e + "后恢复20体力";
                    }
                }
            }, {
                key: "updateCoin",
                value: function() {
                    this.lb_coin.text = s.coin.toString()
                }
            }, {
                key: "onShowStatic",
                value: function(a) {
                    "coin" == a || "energy" == a ? (this.coin.visible = !0, this.energy.visible = !1, this.lb_coin.text = s.coin.toString()) : (this.coin.visible = !1, this.energy.visible = !1);
                }
            }, {
                key: "end",
                value: function() {
                    var a = g.findNode(this.owner, "cover");
                    a.visible = !0;
                    var e = 650 + g.getWinHeight() / 2;
                    Laya.Tween.clearAll(a);
                    var d = (e - a.y) / 3;
                    Laya.Tween.to(a, {
                        y: e
                    }, d, null, Laya.Handler.create(this, function() {
                        a.visible = !1;
                    }));
                }
            }]), StaticLayer;
        }(),
        ga = function(a) {
            function TipLayer() {
                return _classCallCheck(this, TipLayer), _possibleConstructorReturn(this, _getPrototypeOf(TipLayer).call(this));
            }
            return _inherits(TipLayer, r), _createClass(TipLayer, [{
                key: "onAwake",
                value: function() {
                    this.tipCover = g.findNode(this.owner, "tipCover"), this.tipCover.visible = !1, this.tipCover.mouseThrough = !1, this.btn_ok = g.findNode(this.owner, "btn_ok"), g.addClickEventListener(this.btn_ok, this, this.onClickOK), g.addClickEventListener(g.findNode(this.owner, "btn_tip"), this, this.onClickTip), g.addClickEventListener(g.findNode(this.owner, "btn_skip"), this, this.onClickSkip), g.findNode(this.owner, "btn_tip").mouseThrough = !1, g.findNode(this.owner, "btn_skip").mouseThrough = !1;
                }
            }, {
                key: "show",
                value: function() {
                    var a = this;
                    this.tipCover.visible = !1;
                    var e = g.findNode(this.owner, "box");
                    if (0 == s.level) {
                        this.owner.mouseThrough = !1, e.visible = !0, this.btn_ok.visible = !1;
                        var d = new Laya.Skeleton();
                        d.load("res/sk/anim_new00.sk", Laya.Handler.create(this, function() {
                            d.play(0, !0);
                        })), Laya.timer.once(1500, this, function() {
                            a.btn_ok.visible = !0;
                        }), d.pos(288, 650), this.owner.addChild(d), this.aniNode = d;
                    } else this.owner.mouseThrough = !0, e.visible = !1, this.btn_ok.visible = !1;
                    var t = g.findNode(this.owner, "btn_tip"),
                        o = g.findNode(t, "hand");
                    g.unbreath(o), o.visible = !1, s.level > 0 ? (t.visible = !0, 1 == s.level && (this.tipCover.visible = !0, o.visible = !0, g.breath(o, this))) : t.visible = !1, g.findNode(this.owner, "btn_skip").visible = !0;
                }
            }, {
                key: "hide",
                value: function() {
                    var a = g.findNode(this.owner, "btn_tip/hand");
                    g.unbreath(a);
                }
            }, {
                key: "onClickOK",
                value: function() {
                    g.findNode(this.owner, "box").visible = !1, this.owner.mouseThrough = !0, this.aniNode && (this.aniNode.visible = !1), this.btn_ok.visible = !1, Laya.stage.event("首关模式");
                }
            }, {
                key: "onClickTip",
                value: function() {
                    var a = this;
                    s.level < 2 ? (g.findNode(this.owner, "btn_tip").visible = !1, Laya.stage.event("GameLayerOnClickTip"), this.tipCover.visible = !1) : w.createVideo(function() {
                        g.findNode(a.owner, "btn_tip").visible = !1, Laya.stage.event("GameLayerOnClickTip"), a.tipCover.visible = !1;
                    }, null);
                }
            }, {
                key: "onClickSkip",
                value: function() {
                    var a = this;
                    w.createVideo(function() {
                        g.findNode(a.owner, "btn_skip").visible = !1, Laya.stage.event("GameLayerOnClickSkip");
                    }, null);
                }
            }]), TipLayer;
        }(),
        La = function(a) {
            function UnlockLayer() {
                return _classCallCheck(this, UnlockLayer), _possibleConstructorReturn(this, _getPrototypeOf(UnlockLayer).call(this));
            }
            return _inherits(UnlockLayer, r), _createClass(UnlockLayer, [{
                key: "onAwake",
                value: function() {
                    g.addClickEventListener(g.findNode(this.owner, "btn_accept"), this, this.onClickAccept);
                }
            }, {
                key: "show",
                value: function(a) {
                    this.argu = a, g.findNode(this.owner, "sp").loadImage(l.tex.foodTextures[this.argu.reward]), w.playEffect(l.sound.effect.itemunlocked);
                }
            }, {
                key: "hide",
                value: function() {}
            }, {
                key: "onClickAccept",
                value: function() {
                    var a = this.argu.reward;
                    s.progress = 0, s.foods[a] = 1, s.food = a, w.saveProgress(), w.saveFood(), w.saveFoods(), g.hideLayer("UnlockLayer", null);
                }
            }]), UnlockLayer;
        }(),
        ma = function() {
            function GameConfig() {
                _classCallCheck(this, GameConfig);
            }
            return _createClass(GameConfig, null, [{
                key: "init",
                value: function() {
                    var a = Laya.ClassUtils.regClass;
                    a("script/MainScene.ts", L), a("script/control/Widget.ts", m), a("script/layer/ChestLayer.ts", k), a("script/layer/GameLayer.ts", ia), a("script/layer/LeftAdLayer.ts", ra), a("script/layer/LoadingLayer.ts", sa), a("script/layer/NotEnoughLayer.ts", la), a("script/layer/RankLayer.ts", ca), a("script/layer/RebirthLayer.ts", ha), a("script/layer/ResultLayer.ts", fa), a("script/layer/SignInLayer.ts", ua), a("script/layer/SkinLayer.ts", ya), a("script/layer/SmashBox.ts", pa), a("script/layer/StartLayer.ts", va), a("script/layer/StaticLayer.ts", wa), a("script/layer/TipLayer.ts", ga), a("script/layer/UnlockLayer.ts", La);
                }
            }]), GameConfig;
        }();
    ma.width = 576, ma.height = 1136, ma.scaleMode = "showall", ma.screenMode = "none", ma.alignV = "top", ma.alignH = "center", ma.startScene = "MainScene.scene", ma.sceneRoot = "", ma.debug = !1, ma.stat = !1, ma.physicsDebug = !1, ma.exportSceneToJson = !0, ma.init(), new(function() {
        function Main() {
            _classCallCheck(this, Main), window.Laya3D ? Laya3D.init(ma.width, ma.height) : Laya.init(ma.width, ma.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = "showall";
            Laya.stage.screenMode = ma.screenMode, Laya.stage.alignV = ma.alignV, Laya.stage.alignH = ma.alignH;
            if (typeof loadRuntime !== 'undefined') {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            if (typeof getAdapterInfo !== "undefined") {
                var stage = Laya.stage;
                var info = getAdapterInfo({
                    width: ma.width,
                    height: ma.height,
                    scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
                });
                stage.designWidth = info.w;
                stage.designHeight = info.h;
                stage.width = info.rw;
                stage.height = info.rh;
                stage.scale(info.scaleX, info.scaleY);
            }
            Laya.URL.exportSceneToJson = ma.exportSceneToJson, ma.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        return _createClass(Main, [{
            key: "onVersionLoaded",
            value: function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
        }, {
            key: "onConfigLoaded",
            value: function() {
                ma.startScene && Laya.Scene.open(ma.startScene);
            }
        }]), Main;
    }())();
}();