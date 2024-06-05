window.__require = (function t(e, o, n) {
    function a(r, c) {
        if (!o[r]) {
            if (!e[r]) {
                var s = r.split("/");
                if (((s = s[s.length - 1]), !e[s])) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                r = s;
            }
            var u = (o[r] = {
                exports: {}
            });
            e[r][0].call(u.exports, function(t) {
                return a(e[r][1][t] || t);
            }, u, u.exports, t, e, o, n);
        }
        return o[r].exports;
    }
    for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++)
        a(n[r]);
    return a;
})({
    App: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9dda7PmQ3ZCp5hsQ2VJLqZ/", "App"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t("./AudioManage"),
            a = t("./GameManage"),
            i = t("./LocalManage"),
            r = t("./RootNode"),
            c = t("./UIManage"),
            s = (function() {
                function t() {}
                return (Object.defineProperty(t, "buttonAnction", {
                    get: function() {
                        return this._buttonAnction;
                    },
                    set: function(t) {
                        this._buttonAnction = Math.max(this._buttonAnction, t);
                    },
                    enumerable: !1,
                    configurable: !0,
                }), Object.defineProperty(t, "isPlayAnction", {
                    get: function() {
                        return this._isPlayAnctionCount > 0;
                    },
                    set: function(t) {
                        t ? this._isPlayAnctionCount++ : (this._isPlayAnctionCount = Math.max(this._isPlayAnctionCount - 1, 0));
                    },
                    enumerable: !1,
                    configurable: !0,
                }), (t.init = function(t, e, o) {
                    (window.app = this), (this.comMap = new WeakMap()), (this.GameManage = new a.default()), (this.LocaloManage = new i.default()), (this.UIManage = new c.default(t)), (this.gameData = this.LocaloManage.gameData), (this.AudioManage = new n.default(o)), (this.noADsNode = e), (this.noADsNode.active = !1), (this.EventTarget = new cc.EventTarget()), (this.RootNode = new r.RootNode());
                }), (t.getCanControl = function() {
                    return !(this.isPlayAnction || this.buttonAnction > 0);
                }), (t.registerCom = function(e, o) {
                    this.comMap.has(e) && (this.comMap.delete(e), console.warn("\u91cd\u590d\u8bbe\u7f6e\uff1a", e.name)), this.comMap.set(e, o), this.setProtoFun(o, "onDestroy", function() {
                        t.removeCom(o.__proto__.constructor);
                    });
                }), (t.setProtoFun = function(t, e, o) {
                    var n = t.__proto__[e];
                    t.__proto__["lzl_test_" + e] || ((t.__proto__["lzl_test_" + e] = !0), (t.__proto__[e] = n ? function() {
                        o(), null == n || n.call(this);
                    } : function() {
                        o();
                    }));
                }), (t.removeCom = function(t) {
                    this.comMap.has(t) ? this.comMap.delete(t) : (console.warn("\u79fb\u9664\u5931\u8d25\uff1a", t), console.error(this.comMap));
                }), (t.getCom = function(t) {
                    return (this.hasCom(t) || console.error(t.name, "\u672a\u6ce8\u518c\u6216\u5df2\u9500\u6bc1"), this.comMap.get(t));
                }), (t.hasCom = function(t) {
                    return this.comMap.has(t);
                }), (t.update = function(t) {
                    this._buttonAnction > 0 && (this._buttonAnction -= t);
                }), (t.comMap = null), (t._buttonAnction = 0), (t._isPlayAnctionCount = 0), (t.GameManage = null), (t.LocaloManage = null), (t.UIManage = null), (t.gameData = null), (t.AudioManage = null), (t.noADsNode = null), (t.EventTarget = null), (t.RootNode = null), t);
            })();
        (o.default = s), cc._RF.pop();
    }, {
        "./AudioManage": "AudioManage",
        "./GameManage": "GameManage",
        "./LocalManage": "LocalManage",
        "./RootNode": "RootNode",
        "./UIManage": "UIManage",
    }, ],
    AudioManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b3a82V/HolAyrQkEx3g4Mu+", "AudioManage"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.MusicEnum = void 0);
        var n = t("./App");
        (function(t) {
            (t.bgm = "Sd_mp3_BGM"), (t.bonus = "Sd_mp3_bonus"), (t.button = "Sd_mp3_button"), (t.calculate = "Sd_mp3_calculate"), (t.collectButton = "Sd_mp3_CollectButton"), (t.coin = "Sd_mp3_coin"), (t.gameOver = "Sd_mp3_gameOver"), (t.length = "Sd_mp3_length"), (t.newLock = "Sd_mp3_newLock"), (t.normalToy = "Sd_mp3_normalToy"), (t.deadToy = "Sd_mp3_deadToy"), (t.godToy = "Sd_mp3_godToy"), (t.upgrade = "Sd_mp3_upgrade");
        })(o.MusicEnum || (o.MusicEnum = {}));
        var a = (function() {
            function t(t) {
                (this.lastMusicUrl = null), (this.isMusicOn = !1), (this.isSoundOn = !1), (this.audioSource = null), (this.isMusicOn = n.default.gameData.isMusicOn), (this.isSoundOn = n.default.gameData.isSoundOn), (this.audioSource = t), (this.audioSource.loop = !0);
            }
            return ((t.prototype.playMusic = function(t) {
                var e = this;
                if (null != t) {
                    var o = this.lastMusicUrl;
                    (this.lastMusicUrl = t), (o == t && this.audioSource.isPlaying) || (this.isMusicOn && (this.audioSource.stop(), cc.loader.loadRes("music/" + t, cc.AudioClip, function(t, o) {
                        t ? console.error(t) : ((e.audioSource.clip = o), e.audioSource.play());
                    })));
                }
            }), (t.prototype.playSound = function(t, e, o) {
                void 0 === e && (e = !1), void 0 === o && (o = !1), null != t && this.isSoundOn && cc.loader.loadRes("music/" + t, cc.AudioClip, function(t, e) {
                    t ? console.error(t) : cc.audioEngine.playEffect(e, !1);
                });
            }), (t.prototype.switchAll = function() {
                this.switchMusic(), (this.isSoundOn = this.isMusicOn), (n.default.gameData.isSoundOn = this.isSoundOn);
            }), (t.prototype.switchMusicAndSound = function() {
                this.isMusicOn || this.isSoundOn ? (this.isMusicOn || this.isSoundOn) && ((this.isMusicOn = !0), (this.isSoundOn = !0), this.switchMusic(), this.switchSound()) : (this.switchMusic(), this.switchSound());
            }), (t.prototype.switchMusic = function() {
                (this.isMusicOn = !this.isMusicOn), (n.default.gameData.isMusicOn = this.isMusicOn), this.audioSource.isPlaying && !this.isMusicOn ? this.audioSource.stop() : !this.audioSource.isPlaying && this.isMusicOn && this.playMusic(this.lastMusicUrl);
            }), (t.prototype.switchSound = function() {
                (this.isSoundOn = !this.isSoundOn), (n.default.gameData.isSoundOn = this.isSoundOn);
            }), (t.prototype.pauseMuisc = function() {
                this.audioSource.pause();
            }), (t.prototype.resumeMuisc = function() {
                this.audioSource.resume();
            }), t);
        })();
        (o.default = a), cc._RF.pop();
    }, {
        "./App": "App"
    }, ],
    BadToy: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "918d7t28qtLKaPYibvi2TOi", "BadToy");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../UI/GameUI"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            d = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.sprite = null), (e.trailing = null), (e.arrSpf = []), (e.speed = 0), (e.dir = 0), e);
                }
                return (a(e, t), (e.prototype.start = function() {
                    (this.dir = Math.random() < 0.5 ? 1 : -1), (this.speed = r.default.GameManage.RandomNumBoth(500, 900)), (this.sprite.spriteFrame = this.arrSpf[Math.floor(Math.random() * this.arrSpf.length)]);
                }), (e.prototype.update = function(t) {
                    r.default.getCom(c.default).isRegainClaw ? (!this.trailing.active && (this.trailing.active = !0), (this.node.x += this.speed * t), this.node.x <= -r.default.RootNode.node.width / 2 && ((this.node.x = -r.default.RootNode.node.width / 2), (this.speed = -this.speed)), this.node.x >= r.default.RootNode.node.width / 2 && ((this.node.x = r.default.RootNode.node.width / 2), (this.speed = -this.speed))) : (this.trailing.active = !1);
                }), (e.prototype.remove = function() {
                    r.default.RootNode.badToyPool.put(this.node);
                }), i([u(cc.Sprite)], e.prototype, "sprite", void 0), i([u(cc.Node)], e.prototype, "trailing", void 0), i([u(cc.SpriteFrame)], e.prototype, "arrSpf", void 0), i([l], e));
            })(cc.Component);
        (o.default = d), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../UI/GameUI": "GameUI"
    }, ],
    BaseAnction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "81ff1wmv+5AX6baMpZEKE5L", "BaseAnction");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.BaseAnction = void 0);
        var r, c = t("./App"),
            s = t("./BaseUI");
        (function(t) {
            (t[(t.None = 0)] = "None"), (t[(t.Pop_ups = 1)] = "Pop_ups"), (t[(t.Fly_TCB = 2)] = "Fly_TCB");
        })(r || (r = {}));
        var l = cc._decorator,
            u = l.ccclass,
            d = l.property,
            p = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e._type = r.None), (e.anctionConfig = {
                        0: [],
                        1: ["OA_maskBg", "OA_maskBg_opacity", "OA_content"],
                        2: ["OA_maskBg", "OA_maskBg_opacity", "OA_content", "arrTopNode", "arrBottomNode", ],
                    }), (e.OA_maskBg = null), (e.OA_maskBg_opacity = 180), (e.OA_content = null), (e.arrTopNode = []), (e.arrBottomNode = []), (e.arrTopInitP = []), (e.arrBottomP = []), e);
                }
                return (a(e, t), Object.defineProperty(e.prototype, "anctionType", {
                    get: function() {
                        return this._type;
                    },
                    set: function(t) {
                        var e = this;
                        this.anctionConfig[this._type].forEach(function(t) {
                            cc.Class.Attr.setClassAttr(e, t, "visible", !1);
                        }), (this._type = t), this.anctionConfig[this._type].forEach(function(t) {
                            cc.Class.Attr.setClassAttr(e, t, "visible", !0);
                        });
                    },
                    enumerable: !1,
                    configurable: !0,
                }), (e.prototype.onEnable = function() {
                    switch (this.anctionType) {
                        case r.Pop_ups:
                            this.showPop_ups();
                            break;
                        case r.Fly_TCB:
                            this.showFly_TCB();
                    }
                }), (e.prototype.onOAOver = function() {}), (e.prototype.doClose = function(t) {
                    switch (this.anctionType) {
                        case r.Pop_ups:
                            this.closePop_ups(t);
                            break;
                        case r.Fly_TCB:
                            this.closeFly_TCB(t);
                            break;
                        default:
                            null == t || t(), c.default.UIManage.hidUINode(this.node);
                    }
                }), (e.prototype.showPop_ups = function() {
                    var t = this;
                    (c.default.isPlayAnction = !0), (this.OA_maskBg.opacity = 0), cc.tween(this.OA_maskBg).to(0.4, {
                        opacity: this.OA_maskBg_opacity
                    }).start(), (this.OA_content.scale = 0), cc.tween(this.OA_content).to(0.4, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).call(function() {
                        (c.default.isPlayAnction = !1), t.onOAOver();
                    }).start();
                }), (e.prototype.closePop_ups = function(t) {
                    var e = this;
                    (c.default.isPlayAnction = !0), cc.tween(this.OA_maskBg).to(0.5, {
                        opacity: 0
                    }).start(), cc.tween(this.OA_content).to(0.5, {
                        scale: 0
                    }, {
                        easing: cc.easing.backIn
                    }).call(function() {
                        (c.default.isPlayAnction = !1), null == t || t(), c.default.UIManage.hidUINode(e.node);
                    }).start();
                }), (e.prototype.showFly_TCB = function() {
                    var t = this;
                    (this.OA_maskBg.opacity = 0), cc.tween(this.OA_maskBg).to(0.5, {
                        opacity: this.OA_maskBg_opacity
                    }).start(), this.arrTopNode.forEach(function(e, o) {
                        var n = t.arrTopInitP[o];
                        (e.position = cc.v3(n.x, n.y + 500)), cc.tween(e).to(0.5, {
                            position: n
                        }, {
                            easing: cc.easing.backOut
                        }).start();
                    }), (this.OA_content.scale = 0), cc.tween(this.OA_content).delay(0.25).to(0.5, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).start(), this.arrBottomNode.forEach(function(e, o) {
                        var n = t.arrBottomP[o];
                        (e.position = cc.v3(n.x, n.y - 500)), cc.tween(e).delay(0.5).to(0.5, {
                            position: n
                        }, {
                            easing: cc.easing.backOut
                        }).start();
                    });
                }), (e.prototype.closeFly_TCB = function(t) {
                    null == t || t(), c.default.UIManage.hidUINode(this.node);
                }), i([d({
                    visible: !1
                })], e.prototype, "_type", void 0), i([d({
                    tooltip: "\u663e\u793a\u52a8\u753b",
                    type: cc.Enum(r)
                })], e.prototype, "anctionType", null), i([d({
                    tooltip: "\u906e\u7f69",
                    type: cc.Node,
                    visible: !1
                })], e.prototype, "OA_maskBg", void 0), i([d({
                    tooltip: "\u906e\u7f69\u900f\u660e\u5ea6",
                    visible: !1
                })], e.prototype, "OA_maskBg_opacity", void 0), i([d({
                    tooltip: "\u7f29\u653e\u8282\u70b9",
                    type: cc.Node,
                    visible: !1,
                }), ], e.prototype, "OA_content", void 0), i([d({
                    tooltip: "\u906e\u7f69",
                    type: cc.Node,
                    visible: !1
                })], e.prototype, "arrTopNode", void 0), i([d({
                    tooltip: "\u906e\u7f69",
                    type: cc.Node,
                    visible: !1
                })], e.prototype, "arrBottomNode", void 0), i([u], e));
            })(s.BaseUI);
        (o.BaseAnction = p), cc._RF.pop();
    }, {
        "./App": "App",
        "./BaseUI": "BaseUI"
    }, ],
    BaseUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "19c9cUYy7lJ260AXn0Y2lo/", "BaseUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.BaseUI = void 0);
        var r = t("./App"),
            c = t("./AudioManage"),
            s = cc._decorator,
            l = s.ccclass,
            u = (s.property, (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.args = null), e;
                }
                return (a(e, t), (e.prototype.onCreat = function() {
                    r.default.registerCom(this.__proto__.constructor, this);
                }), (e.prototype.clickEvent = function(t) {
                    if (r.default.buttonAnction > 0)
                        cc.warn("\u6309\u94aecd\uff1a", r.default.buttonAnction);
                    else if (r.default.isPlayAnction)
                        cc.warn("\u6b63\u5728\u64ad\u52a8\u753b");
                    else {
                        r.default.buttonAnction = 0.3;
                        var e = t.currentTarget,
                            o = e.name;
                        this.onClick(o, e), "GameUI" != this.node.name && r.default.AudioManage.playSound(c.MusicEnum.button);
                    }
                }), (e.prototype.onClick = function() {}), i([l], e));
            })(cc.Component));
        (o.BaseUI = u), cc._RF.pop();
    }, {
        "./App": "App",
        "./AudioManage": "AudioManage"
    }, ],
    Claw: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3fd52deunNHmofOM9hnYmdp", "Claw");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/AudioManage"),
            s = t("../Core/UIManage"),
            l = t("../UI/GameUI"),
            u = t("../UI/GuideUI"),
            d = t("./BadToy"),
            p = t("./ScoreNode"),
            h = t("./Toy"),
            f = cc._decorator,
            y = f.ccclass,
            g = f.property,
            m = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.rope = null), (e.boomPrefab = null), (e.count = null), (e.deltaClawY = 0), (e.deltaCountY = 0), (e.state = 0), (e.arrAnimAnti = ["A", "B"]), (e.leftCount = 0), (e.isRopeShake = !1), (e.idleLength = 0), e);
                }
                var o;
                return (a(e, t), (o = e), (e.prototype.start = function() {
                    (this.deltaClawY = this.node.y), (this.deltaCountY = this.count.y), this.setRopeLength(), this.playClawAnim(), r.default.registerCom(o, this), this.refreshState(), r.default.RootNode.camera.on(cc.Node.EventType.TOUCH_START, this.touchStart, this), r.default.RootNode.camera.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
                }), (e.prototype.mouseWheel = function(t) {
                    r.default.RootNode.camera.y += t.getScrollY();
                }), (e.prototype.touchStart = function() {
                    r.default.getCom(l.default).node.opacity < 255 || r.default.buttonAnction > 0 || (r.default.getCom(l.default).isStart && !r.default.hasCom(u.default)) || (r.default.hasCom(u.default) && r.default.getCom(u.default).node.active && (r.default.UIManage.hidUI(s.UIEnum.GuideUI), r.default.getCom(l.default).regainClaw(), (r.default.gameData.isFirst = !1)), r.default.getCom(l.default).isStart || r.default.getCom(l.default).isRegainClaw || (r.default.getCom(l.default).putClaw(), this.setLeftCount()));
                }), (e.prototype.touchMove = function(t) {
                    r.default.getCom(l.default).node.opacity < 255 || r.default.buttonAnction > 0 || (r.default.getCom(l.default).isStart && ((this.node.x += t.getDelta().x), this.node.x <= -r.default.RootNode.node.width / 2 && (this.node.x = -r.default.RootNode.node.width / 2), this.node.x >= r.default.RootNode.node.width / 2 && (this.node.x = r.default.RootNode.node.width / 2), this.node.getChildByName("toyContent").children.forEach(function(e) {
                        (e.angle += -t.getDeltaX() / 10), cc.tween(e).to(1, {
                            angle: 0
                        }).start();
                    })));
                }), (e.prototype.onCollisionEnter = function(t) {
                    if (r.default.RootNode.speed > 0 && r.default.getCom(l.default).isStart) {
                        if ("badToy" == t.node.name)
                            return (r.default.AudioManage.playSound(c.MusicEnum.deadToy), (r.default.getCom(l.default).isStart = !1), t.node.getComponent(d.default).remove(), void(r.default.getCom(l.default).hasRevived ? this.setBoom() : ((r.default.getCom(l.default).hasRevived = !0), r.default.UIManage.showUI(s.UIEnum.ReviveUI))));
                        if (!t.node.getComponent("Toy").isCatch) {
                            (t.node.getComponent("Toy").isCatch = !0), (t.node.getComponent("Toy").speed = 0);
                            var e = t.node.parent.convertToWorldSpaceAR(t.node.position),
                                o = r.default.getCom(l.default).node.convertToNodeSpaceAR(e),
                                n = r.default.getCom(l.default).isDouble ? 2 : 1,
                                a = Math.round(t.node.getComponent("Toy").money * r.default.gameData.curMultiple * n),
                                i = cc.instantiate(r.default.getCom(l.default).scorePrefab);
                            if (((i.position = o), (i.parent = r.default.getCom(l.default).node), (i.getComponent(p.default).label.string = String(a)), "godToy" == t.node.name))
                                r.default.AudioManage.playSound(c.MusicEnum.godToy), (i.getComponent(p.default).index = 1), (i.getComponent(p.default).label.node.color = cc.color(255, 255, 57));
                            else {
                                r.default.AudioManage.playSound(c.MusicEnum.normalToy), r.default.gameData.allGetNum++;
                                var u = t.node.getComponent(h.default).type;
                                0 == r.default.gameData.arrGetType.includes(u) && (r.default.gameData.arrGetType.push(u), (r.default.gameData.arrGetNum[u - 1] = 0)), (r.default.gameData.arrGetNum[u - 1] += 1);
                            }
                            t.node.parent = this.node.getChildByName("toyContent");
                            var f = this.node.getChildByName("toyContent").childrenCount;
                            f >= 20 && (this.node.getChildByName("toyContent").children[f - 20].opacity = 0), (t.node.position = cc.v3()), this.leftCount--, this.refreshLeftLabel(), this.leftCount <= 0 && ((r.default.RootNode.speed = 0), (r.default.getCom(l.default).isStart = !1), this.scheduleOnce(function() {
                                r.default.getCom(l.default).overClaw();
                            }, 0.5));
                        }
                    }
                }), (e.prototype.changeState = function(t) {
                    (this.state = t), this.node.children[this.state].getChildByName("Sp_zhuazi").getComponent(sp.Skeleton).setAnimation(0, "kong", !1), this.refreshState();
                }), (e.prototype.refreshState = function() {
                    (this.node.getChildByName("idle").active = 0 == this.state), (this.node.getChildByName("idle2").active = 1 == this.state);
                }), (e.prototype.playClawAnim = function() {
                    this.playAnimDelaay(), this.schedule(this.playAnimDelaay, 4);
                }), (e.prototype.stopClawAnim = function() {
                    this.unschedule(this.playAnimDelaay), this.rope.stopAllActions(), (this.isRopeShake = !1), this.node.children[this.state].getChildByName("Sp_zhuazi").getComponent(sp.Skeleton).setAnimation(0, "kong", !1), (this.node.angle = 0), this.refreshState();
                }), (e.prototype.playAnimDelaay = function() {
                    r.default.getCom(l.default).isStart || r.default.getCom(l.default).isRegainClaw ? (this.unschedule(this.playAnimDelaay), this.stopClawAnim()) : this.setIdleAnim();
                }), (e.prototype.setIdleAnim = function() {
                    var t = this,
                        e = this.node.children[this.state].getChildByName("Sp_zhuazi");
                    e.active = !0;
                    var o = e.getComponent(sp.Skeleton);
                    this.node.children[this.state].getChildByName("zhua").active = !1;
                    var n = Math.floor(4 * Math.random()) + 1,
                        a = this.arrAnimAnti[this.state] + n;
                    2 == n && ((this.isRopeShake = !0), cc.tween(this.rope).by(0.45, {
                        angle: -30
                    }).delay(0.05).by(0.5, {
                        angle: 30
                    }).by(0.4, {
                        angle: 20
                    }).delay(0.05).by(0.4, {
                        angle: -20
                    }).call(function() {
                        t.scheduleOnce(function() {
                            t.isRopeShake = !1;
                        });
                    }).start()), o.setAnimation(0, a, !1), o.setCompleteListener(function() {
                        (e.active = !1), (t.node.children[t.state].getChildByName("zhua").active = !0);
                    });
                }), (e.prototype.setBoom = function() {
                    r.default.AudioManage.playSound(c.MusicEnum.gameOver);
                    var t = cc.instantiate(this.boomPrefab),
                        e = this.node.parent.convertToWorldSpaceAR(this.node.position),
                        o = r.default.getCom(l.default).node.convertToNodeSpaceAR(e);
                    (t.position = o), (t.parent = r.default.getCom(l.default).node), (r.default.RootNode.speed = 0), this.scheduleOnce(function() {
                        r.default.getCom(l.default).overClaw();
                    }, 0.5);
                }), (e.prototype.setRopeLength = function() {
                    var t = this.node.position.sub(this.rope.position).mag();
                    (this.idleLength = t), (this.rope.height = t);
                    var e = (this.node.x - this.rope.x) / t,
                        o = Math.asin(e);
                    this.rope.angle = o * (180 / Math.PI);
                }), (e.prototype.setLeftCount = function() {
                    (this.count.active = !0), (this.leftCount = r.default.gameData.curToyNum), console.log(this.leftCount), this.refreshLeftLabel();
                }), (e.prototype.refreshLeftLabel = function() {
                    this.count.children[0].getComponent(cc.Label).string = this.leftCount.toString();
                }), (e.prototype.lateUpdate = function() {
                    if (this.isRopeShake) {
                        this.node.angle = this.rope.angle / 2;
                        var t = (this.rope.angle / 180) * Math.PI;
                        this.node.position = cc.v3(this.idleLength * Math.sin(t), -this.idleLength * Math.cos(t) + this.idleLength + 50);
                    } else {
                        var e = r.default.RootNode.camera.parent.convertToWorldSpaceAR(r.default.RootNode.camera.position),
                            o = this.node.parent.convertToNodeSpaceAR(e);
                        (this.node.y = o.y + this.deltaClawY), (this.count.y = o.y + 0.3 * r.default.RootNode.node.height);
                        var n = r.default.getCom(l.default).node.convertToNodeSpaceAR(e),
                            a = r.default.getCom(l.default).node.height;
                        r.default.getCom(l.default).mapContent.children.forEach(function(t) {
                            t.y < n.y + a && t.y > n.y - a ? (t.active = !0) : (t.active = !1);
                        }), this.setRopeLength();
                    }
                }), i([g(cc.Node)], e.prototype, "rope", void 0), i([g(cc.Prefab)], e.prototype, "boomPrefab", void 0), i([g(cc.Node)], e.prototype, "count", void 0), (o = i([y], e)));
            })(cc.Component);
        (o.default = m), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/AudioManage": "AudioManage",
        "../Core/UIManage": "UIManage",
        "../UI/GameUI": "GameUI",
        "../UI/GuideUI": "GuideUI",
        "./BadToy": "BadToy",
        "./ScoreNode": "ScoreNode",
        "./Toy": "Toy",
    }, ],
    EffectManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1012a9zBINDp7A3ZfpgjViL", "EffectManage");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.baseEffect = o.effectNameEnum = void 0);
        var r = t("./App");
        (function(t) {
            (t.addScore = "addScore"), (t.breakComb = "breakComb"), (t.breakLiHua = "breakLiHua"), (t.tipKuang = "tipKuang"), (t.xiaochu = "xiaochu"), (t.goAhead = "goAhead");
        })(o.effectNameEnum || (o.effectNameEnum = {}));
        var c = (function() {
            function t(t) {
                (this.effectPool = {}), (this.effectContet = null), (this.effectContet = t);
            }
            return ((t.prototype.showEffect = function(t, e, o, n, a, i) {
                var r = this;
                void 0 === o && (o = null), void 0 === n && (n = 2), void 0 === a && (a = cc.v3());
                var c, s = this.effectContet.convertToNodeSpaceAR(e.convertToWorldSpaceAR(a));
                this.effectPool[t] && this.effectPool[t].length > 0 ? ((c = this.effectPool[t].shift()).show(s, t, n, o), null == i || i(c.node)) : loadManage.loadPrefab("Prefab/" + t, function(e) {
                    var a = cc.instantiate(e);
                    a.addComponent(u), (a.parent = r.effectContet), (c = a.getComponent(u)).show(s, t, n, o), null == i || i(a);
                });
            }), t);
        })();
        o.default = c;
        var s = cc._decorator,
            l = s.ccclass,
            u = (s.property, (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.effectName = null), (e.arrPCom = null), (e.aCom = null), (e.sCom = null), (e.isFirst = !0), (e.args = null), e);
                }
                return (a(e, t), (e.prototype.show = function(t, e, o, n) {
                    var a = this;
                    (this.args = n), (this.node.position = t), (this.node.active = !0), (this.effectName = e), this.onShow(), !this.arrPCom && this.isFirst && (this.arrPCom = this.node.getComponentsInChildren(cc.ParticleSystem)), this.arrPCom && this.arrPCom.forEach(function(t) {
                        return t.resetSystem();
                    }), !this.aCom && this.isFirst && (this.aCom = this.node.getComponent(cc.Animation) || this.node.getComponentInChildren(cc.Animation)), this.aCom && this.aCom.play(), !this.sCom && this.isFirst && (this.sCom = this.node.getComponent(sp.Skeleton) || this.node.getComponentInChildren(sp.Skeleton)), this.sCom && this.sCom.setAnimation(0, this.sCom.defaultAnimation, !1), this.scheduleOnce(function() {
                        a.hidEffect();
                    }, o), (this.isFirst = !1);
                }), (e.prototype.onShow = function() {}), (e.prototype.hidEffect = function() {
                    (this.node.active = !1), this.arrPCom && this.arrPCom.forEach(function(t) {
                        return t.stopSystem();
                    }), this.aCom && this.aCom.stop(), this.sCom && this.sCom.clearTracks(), r.default.EffectManage.effectPool[this.effectName] || (r.default.EffectManage.effectPool[this.effectName] = []), r.default.EffectManage.effectPool[this.effectName].push(this);
                }), i([l], e));
            })(cc.Component));
        (o.baseEffect = u), cc._RF.pop();
    }, {
        "./App": "App"
    }, ],
    FacebookIG: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ad79cdHZddLfr6kr7LLSvyX", "FacebookIG"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.adIDFB = void 0);
        var n = t("../Core/App"),
            a = (function() {
                function t() {}
                return ((t.videoId1 = "784891615976320_787368769061938"), (t.insertID2 = "784891615976320_787368659061949"), t);
            })();
        o.adIDFB = a;
        var i = (function() {
            function t() {}
            return ((t.init = function() {
                var t = this;
                window.hasOwnProperty("FBInstant") ? (console.log("fb\u5e7f\u544a\u521d\u59cb\u5316"), this.preloadInterstitialAd(a.insertID2), this.preloadVideoAd(a.videoId1), setInterval(function() {
                    t.cdTime <= t.adDisTime && (t.cdTime += 1);
                }, 1e3), (this.contextID = FBInstant.context.getID()), (this.playerData = FBInstant.player), this.preloadHeadImg(this.playerData.getPhoto()), console.log(FBInstant.getSupportedAPIs())) : console.log("fb\u5e7f\u544a\u521d\u59cb\u5316");
            }), (t.getPlayID = function() {
                return window.hasOwnProperty("FBInstant") ? this.playerData.getID() : "\u6211\u662fID";
            }), (t.getPlayName = function() {
                return window.hasOwnProperty("FBInstant") ? this.playerData.getName() : "\u6211\u662f\u540d\u5b57";
            }), (t.showInsertAd = function(t, e) {
                console.log("广告场景"), e && e();
                HUHU_showInterstitialAd();
            }), (t.showVideoAd = function(t, e, o) {
                var a = this;
                return (console.log("广告场景"), void HUHU_showRewardedVideoAd(() => {
                    e(!0)
                }, () => {
                    e(!1)
                }));
            }), (t.getVideoIsReady = function(t) {
                var e = this.videoAdIsReady[t] && this.videoAd[t];
                return console.log("AD" + e), e;
            }), (t.logEvent = function(t, e, o) {
                void 0 === e && (e = null), void 0 === o && (o = 0), console.log("\u7edf\u8ba1\u4e8b\u4ef6:", t, ",data:", JSON.stringify(e), ",value:", o)
            }), (t.createShortcutAsync = function() {}), (t.shareAsync = function(t, e) {}), (t.tiaoZhan = function() {}), (t.shareScore = function(t) {}), (t.shock = function(t) {}), (t.setHead = function(t, e) {}), (t.getPlatform = function() {}), (t.onPlayWidthFriend = function(t, e) {}), (t.onPlaySolo = function() {
                (this.isSolo = !0), (this.contextID = null);
            }), (t.getDataAsync = function() {}), (t.setDataAsync = function() {
                FBInstant.player.setDataAsync({
                    achievements: ["medal1", "medal2", "medal3"],
                    currentLife: 300,
                }).then(function() {
                    console.log("data is set");
                });
            }), (t.setScore = function(t, e) {}), (t.getScore = function(t, e) {}), (t.preloadInterstitialAd = function(t) {}), (t.preloadVideoAd = function(t) {}), (t.preloadHeadImg = function(t) {}), (t.canCreateShortcutAsync = function(t) {}), (t.setOtherPlaye = function(t, e) {}), (t.getConnectedPlayersAsync = function(t) {
                window.hasOwnProperty("FBInstant") && FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                    t(e), console.log(e.map(function(t) {
                        return {
                            id: t.getID(),
                            name: t.getName()
                        };
                    }));
                });
            }), (t.getPlayersAsync = function(t) {
                window.hasOwnProperty("FBInstant") && FBInstant.context.getPlayersAsync().then(function(e) {
                    t(e), console.log(e.map(function(t) {
                        return {
                            id: t.getID(),
                            name: t.getName()
                        };
                    }));
                });
            }), (t.sendScoreMess = function() {
                window.hasOwnProperty("FBInstant") && FBInstant.updateAsync({
                    action: "LEADERBOARD",
                    name: "Test Leaderboard." + FBInstant.context.getID(),
                }).then(function() {
                    return console.log("Share Score");
                }).catch(function(t) {
                    return console.error(t);
                });
            }), (t.contextChooseAsync = function(t, e) {
                var o = this;
                window.hasOwnProperty("FBInstant") && FBInstant.context.chooseAsync().then(function() {
                    null == t || t(), o.logEvent("Challenge_any");
                }).catch(function(t) {
                    null == e || e(), console.log(t);
                });
            }), (t.contextCreateAsync = function(t, e, o) {
                var n = this;
                if (window.hasOwnProperty("FBInstant"))
                    return this.playerData && t == this.playerData.getID() ? (console.log("\u6311\u6218\u73a9\u5bb6\u662f\u5f53\u524d\u73af\u5883\u7684\u73a9\u5bb6"), this.logEvent("Challenge_friends"), void(null == e || e())) : void FBInstant.context.createAsync(t).then(function() {
                        null == e || e(), n.logEvent("Challenge_friendsID");
                    }).catch(function(t) {
                        null == o || o(), console.log(t);
                    });
            }), (t.postSessionScore = function(t) {
                window.hasOwnProperty("FBInstant") && FBInstant.postSessionScore(t);
            }), (t.videoAd = {}), (t.interstitialAd = {}), (t.videoAdIsReady = {}), (t.interstitialAdIsReady = {}), (t.contextID = null), (t.playerData = null), (t.otherPlayerData = null), (t.headImgMap = {}), (t.cdTime = 30), (t.adDisTime = 30), (t.isSolo = !0), t);
        })();
        (o.default = i), cc._RF.pop();
    }, {
        "../Core/App": "App"
    }, ],
    GameManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "51151gipvBDnq2pnkDtD6NZ", "GameManage"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t("./App"),
            a = t("./UIManage"),
            i = (function() {
                function t() {
                    (this.configJson = null), (this.arrHeight = [
                        [0, 50],
                        [50, 60],
                        [60, 70],
                        [70, 80],
                        [80, 90],
                        [90, 100],
                        [100, 110],
                        [110, 120],
                        [120, 130],
                        [130, 140],
                        [140, 150],
                        [150, 160],
                        [160, 170],
                        [170, 180],
                        [180, 190],
                        [190, 200],
                        [200, 210],
                        [210, 220],
                        [220, 230],
                        [230, 240],
                        [240, 250],
                        [250, 260],
                        [260, 270],
                        [270, 280],
                        [280, 290],
                        [290, 300],
                        [300, 310],
                        [310, 320],
                        [320, 330],
                        [330, 340],
                        [340, 350],
                        [350, 360],
                        [360, 370],
                        [370, 380],
                        [380, 390],
                        [390, 400],
                        [400, 410],
                        [410, 420],
                        [420, 430],
                        [430, 440],
                        [440, 450],
                        [450, 460],
                        [460, 470],
                        [470, 480],
                        [480, 490],
                        [490, 500],
                        [500, 510],
                        [510, 520],
                        [520, 530],
                        [530, 540],
                        [540, 550],
                        [550, 560],
                        [560, 570],
                        [570, 580],
                        [580, 590],
                        [590, 600],
                    ]);
                }
                return ((t.prototype.onLodaingHid = function() {
                    n.default.UIManage.showUI(a.UIEnum.GameUI, function() {
                        n.default.GameManage.startGame();
                    });
                }), (t.prototype.loadGame = function() {}), (t.prototype.startGame = function() {}), (t.prototype.RandomNumBoth = function(t, e) {
                    var o = e - t,
                        n = Math.random();
                    return t + Math.round(n * o);
                }), (t.prototype.nodeMoveAction = function(t, e, o) {
                    cc.tween(t).to(0.3, {
                        opacity: e
                    }).start(), cc.tween(t).by(0.3, {
                        position: o
                    }).start();
                }), (t.prototype.showNoADs = function() {
                    (n.default.noADsNode.y = n.default.RootNode.camera.y), n.default.noADsNode.active || ((n.default.noADsNode.active = !0), (n.default.noADsNode.scale = 0), (n.default.noADsNode.opacity = 255), cc.tween(n.default.noADsNode).to(0.2, {
                        scale: 1
                    }).start(), cc.tween(n.default.noADsNode).delay(0.7).to(0.3, {
                        opacity: 0
                    }).call(function() {
                        (n.default.noADsNode.active = !1), (n.default.noADsNode.scale = 0), (n.default.noADsNode.opacity = 0);
                    }).start());
                }), (t.prototype.convertToK = function(t) {
                    var e = t / 1e3;
                    return e >= 1 ? e >= 1e3 ? (e /= 1e3) >= 99999 ? ((n.default.gameData.coin = 99999e6), "99999M") : e % 1 == 0 ? e + "M" : e.toFixed(1) + "M" : e.toFixed(1) + "K" : t.toString();
                }), (t.prototype.setTimeLabel = function(t, e) {
                    var o = Math.floor(e / 60),
                        n = Math.floor(e % 60),
                        a = o >= 10 ? o : "0" + o,
                        i = n >= 10 ? n : "0" + n;
                    t.getComponent(cc.Label).string = a + ":" + i;
                }), t);
            })();
        (o.default = i), cc._RF.pop();
    }, {
        "./App": "App",
        "./UIManage": "UIManage"
    }, ],
    GameUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "10fe8Ji2fVANoJTyiKP8vox", "GameUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/BaseAnction"),
            c = t("../Core/App"),
            s = t("../SDK/FacebookIG"),
            l = t("../Core/UIManage"),
            u = t("../Core/AudioManage"),
            d = t("../Tool/Claw"),
            p = t("../Tool/Toy"),
            h = t("../Tool/ScoreNode"),
            f = t("../Tool/BadToy"),
            y = cc._decorator,
            g = y.ccclass,
            m = y.property,
            v = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.mapContent = null), (e.lbCoin = null), (e.lbAllToy = null), (e.lbNewUnLock = null), (e.claw = null), (e.coin = null), (e.scorePrefab = null), (e.arrBtnContent = []), (e.lbTime = null), (e.go = null), (e.throwContent = null), (e.isStart = !1), (e.isRegainClaw = !1), (e.hasRevived = !1), (e.allGetCoin = 0), (e.isDouble = !1), (e.density = 6), (e.isShowUI = !1), e);
                }
                var o;
                return (a(e, t), (o = e), (e.prototype.onLoad = function() {
                    this.node.getComponent(cc.Widget).updateAlignment(), (cc.director.getPhysicsManager().enabled = !0), (cc.director.getPhysicsManager().gravity = cc.v2(0, -1500));
                }), (e.prototype.getNode = function(t, e) {
                    return t.size() > 0 ? t.get() : cc.instantiate(e);
                }), (e.prototype.onEnable = function() {
                    var t = this;
                    this.initBtnContent(), (this.node.opacity = 0), cc.tween(this.node).to(0.3, {
                        opacity: 255
                    }).call(function() {
                        t.showBtns();
                    }).start(), this.refreshlbTime();
                }), (e.prototype.start = function() {
                    var t = this;
                    c.default.AudioManage.playMusic(u.MusicEnum.bgm), this.playThrow(), this.refreshlbTime(), this.claw.getComponent(d.default).playClawAnim(), (this.node.getChildByName("shouzhi").active = c.default.gameData.isFirst), this.node.getChildByName("shouzhi").on(cc.Node.EventType.TOUCH_START, function() {
                        (t.node.getChildByName("shouzhi").active = !1), t.putClaw(), (t.claw.getComponent(d.default).leftCount = 5);
                    }, this);
                }), (e.prototype.putClaw = function() {
                    var t = this;
                    (this.throwContent.active = !1), (c.default.getCom(o).isStart = !0), this.createToy(), this.createSign(), this.hideBtns(), this.claw.getComponent(d.default).stopClawAnim(), cc.tween(c.default.RootNode.camera).delay(0.3).call(function() {
                        c.default.AudioManage.playSound(u.MusicEnum.length);
                    }).to(3, {
                        position: cc.v3(0, -(400 * c.default.gameData.curDepth +
                            this.node.height / 2), 0),
                    }).delay(0.1).call(function() {
                        c.default.gameData.isFirst ? c.default.UIManage.showUI(l.UIEnum.GuideUI) : t.regainClaw();
                    }).start();
                }), (e.prototype.overClaw = function(t) {
                    var e = this;
                    void 0 === t && (t = 3), (c.default.getCom(o).isStart = !1), cc.tween(c.default.RootNode.camera).to(t, {
                        position: cc.v3(0, 0, 0)
                    }, {
                        easing: cc.easing.sineOut
                    }).start(), cc.tween(this.claw).to(t, {
                        position: cc.v3(0, 50)
                    }).call(function() {
                        e.result();
                    }).start(), this.claw.getChildByName("toyContent").children.forEach(function(t) {
                        t.stopAllActions();
                        var o = e.claw.x / 10;
                        cc.tween(t).by(0.3, {
                            angle: o
                        }).to(1.5, {
                            angle: 0
                        }).start();
                    });
                }), (e.prototype.regainClaw = function() {
                    (this.isRegainClaw = !0), this.scheduleOnce(function() {
                        c.default.RootNode.speed = 1e3;
                    }, 0.5);
                }), (e.prototype.createToy = function() {
                    for (var t = (c.default.gameData.curDepth / 5) * this.density, e = 0; e < t; e++) {
                        var o = c.default.GameManage.RandomNumBoth(-this.node.width / 2, this.node.width / 2),
                            n = -200 -
                            (2e3 / this.density + 5) * e +
                            c.default.GameManage.RandomNumBoth(-140, 140),
                            a = void 0,
                            i = Math.random();
                        ((a = i >= 0.1 && i < 0.2 && n < -1e3 ? this.getNode(c.default.RootNode.badToyPool, c.default.RootNode.badPrefab) : i >= 0.2 && i < 0.3 ? this.getNode(c.default.RootNode.godToyPool, c.default.RootNode.godPrefab) : this.getNode(c.default.RootNode.toyPool, c.default.RootNode.toyPrefab)).parent = this.mapContent), a.setPosition(cc.v2(o, n));
                    }
                }), (e.prototype.createSign = function() {
                    for (var t = Math.ceil(c.default.gameData.curDepth / 5), e = 0; e < t; e++) {
                        var o = this.getNode(c.default.RootNode.signPool, c.default.RootNode.signPrefab);
                        (o.parent = this.mapContent), (o.children[0].getComponent(cc.Label).string = 5 * (e + 1) + "m \u2014"), (o.zIndex = -1), (o.position = cc.v3(c.default.RootNode.node.width / 2 - 10, -2e3 * (e + 1)));
                    }
                }), (e.prototype.result = function() {
                    var t = this;
                    if ((this.cleanMapContent(), 0 != this.claw.getChildByName("toyContent").childrenCount)) {
                        this.coin.active = !0;
                        for (var e = this.claw.getChildByName("toyContent").childrenCount, o = this.isDouble ? 2 : 1, n = function(e) {
                                var n = a.claw.getChildByName("toyContent").children[e];
                                (n.scale = 0.8), (n.opacity = 0), a.scheduleOnce(function() {
                                    var e = Math.round(n.getComponent(p.default).money * c.default.gameData.curMultiple * o);
                                    (t.allGetCoin += e), (n.opacity = 255);
                                    var a = cc.instantiate(t.scorePrefab);
                                    (a.parent = t.node), (a.x = c.default.GameManage.RandomNumBoth(-100, 100)), (a.y = c.default.GameManage.RandomNumBoth(300, 400)), (a.getComponent(h.default).label.string = e.toString()), cc.tween(n).by(0.07, {
                                        position: cc.v3(0, 200, 0)
                                    }).call(function() {
                                        c.default.AudioManage.playSound(u.MusicEnum.coin);
                                    }).delay(0.1).call(function() {
                                        n.getComponent(p.default).remove(), 0 == t.claw.getChildByName("toyContent").childrenCount && ((t.coin.active = !1), t.scheduleOnce(function() {
                                            c.default.UIManage.showUI(l.UIEnum.ResultUI);
                                        }, 0.3));
                                    }).start();
                                }, 0.17 * e);
                            }, a = this, i = 0; i < e; i++)
                            n(i);
                    } else
                        this.scheduleOnce(function() {
                            c.default.UIManage.showUI(l.UIEnum.ResultUI);
                        }, 0.3);
                }), (e.prototype.reStart = function() {
                    (this.throwContent.active = !0), (this.isStart = !1), (this.isRegainClaw = !1), (this.hasRevived = !1), (this.allGetCoin = 0), this.claw.getComponent(d.default).schedule(this.claw.getComponent(d.default).playAnimDelaay, 4), !c.default.RootNode.hasDouble && this.isDouble && ((this.isDouble = !1), this.claw.getComponent(d.default).changeState(0)), this.showBtns(), this.refreshlbTime();
                }), (e.prototype.refreshLbCoin = function() {
                    this.lbCoin.string = "$" +
                        c.default.GameManage.convertToK(c.default.gameData.coin);
                }), (e.prototype.refreshCountLabel = function() {
                    this.lbAllToy.string = c.default.gameData.allGetNum + " TOYS";
                    var t = c.default.gameData.arrGetType.length -
                        c.default.gameData.arrUnlock.length;
                    (this.lbNewUnLock.node.parent.active = t > 0), (this.lbNewUnLock.string = String(t));
                }), (e.prototype.refreshlbTime = function() {
                    (this.lbTime.node.active = c.default.RootNode.hasDouble), (this.go.active = !this.lbTime.node.active), c.default.GameManage.setTimeLabel(this.lbTime, c.default.RootNode.time);
                }), (e.prototype.initBtnContent = function() {
                    (this.arrBtnContent[0].y = 340), (this.arrBtnContent[1].y -= this.node.height / 2 +
                        this.arrBtnContent[1].y +
                        this.arrBtnContent[1].height / 2), (this.arrBtnContent[2].x += this.node.width / 2 -
                        this.arrBtnContent[2].x +
                        this.arrBtnContent[2].width / 2), (this.arrBtnContent[3].active = !1);
                }), (e.prototype.cleanMapContent = function() {
                    for (var t = this.mapContent.childrenCount - 1; t >= 0; t--)
                        switch (this.mapContent.children[t].name) {
                            case "toy":
                            case "godToy":
                                this.mapContent.children[t].getComponent(p.default).remove();
                                break;
                            case "badToy":
                                this.mapContent.children[t].getComponent(f.default).remove();
                                break;
                            default:
                                c.default.RootNode.signPool.put(this.mapContent.children[t]);
                        }
                }), (e.prototype.showBtns = function() {
                    (c.default.buttonAnction = 0.3), this.refreshLbCoin(), this.refreshCountLabel(), this.arrBtnContent.forEach(function(t) {
                        (t.active = !0), t.stopAllActions();
                    }), cc.tween(this.arrBtnContent[0]).to(0.2, {
                        position: cc.v3(0, 0, 0)
                    }).start(), cc.tween(this.arrBtnContent[1]).to(0.2, {
                        position: cc.v3(0, -520, 0)
                    }).start(), cc.tween(this.arrBtnContent[2]).to(0.2, {
                        position: cc.v3(200, 0, 0)
                    }).start(), this.arrBtnContent[3].stopAllActions(), (this.arrBtnContent[3].opacity = 255), cc.tween(this.arrBtnContent[3]).to(0.5, {
                        opacity: 0
                    }).to(1, {
                        opacity: 255
                    }).delay(0.3).union().repeatForever().start();
                }), (e.prototype.hideBtns = function() {
                    var t = this;
                    this.arrBtnContent.forEach(function(t) {
                        t.stopAllActions();
                    }), cc.tween(this.arrBtnContent[0]).to(0.2, {
                        position: cc.v3(0, 340, 0)
                    }).call(function() {
                        t.arrBtnContent[0].active = !1;
                    }).start(), cc.tween(this.arrBtnContent[1]).by(0.2, {
                        position: cc.v3(0, -(this.node.height / 2 +
                            this.arrBtnContent[1].y +
                            this.arrBtnContent[1].height / 2), 0),
                    }).call(function() {
                        t.arrBtnContent[1].active = !1;
                    }).start(), cc.tween(this.arrBtnContent[2]).by(0.2, {
                        position: cc.v3(this.node.width / 2 -
                            this.arrBtnContent[2].x +
                            this.arrBtnContent[2].width / 2, 0, 0),
                    }).call(function() {
                        t.arrBtnContent[2].active = !1;
                    }).start(), (this.arrBtnContent[3].active = !1);
                }), (e.prototype.onClick = function(t) {
                    var e = this;
                    switch ((c.default.AudioManage.playSound(u.MusicEnum.collectButton), t)) {
                        case "btnSet":
                            if (this.isShowUI) return;
                            (this.isShowUI = !0), c.default.UIManage.showUI(l.UIEnum.SettingUI);
                            break;
                        case "btnSc":
                            if (this.isShowUI) return;
                            (this.isShowUI = !0), s.default.showInsertAd(s.adIDFB.insertID2, function() {
                                c.default.UIManage.showUI(l.UIEnum.ScUI);
                            });
                            break;
                        case "btnDouble":
                            if (c.default.RootNode.hasDouble || c.default.RootNode.time > 0)
                                return;
                            s.default.showVideoAd(s.adIDFB.videoId1, function(t) {
                                t && ((c.default.RootNode.hasDouble = !0), (e.isDouble = !0), c.default.RootNode.cutTime(), e.claw.getComponent(d.default).changeState(1));
                            });
                    }
                }), (e.prototype.playThrow = function() {
                    this.throwToy(), this.schedule(this.throwToy, 4);
                }), (e.prototype.throwToy = function() {
                    var t = this;
                    this.throwContent.children[5].active = !1;
                    for (var e = function(e) {
                            var n = 1;
                            if (c.default.gameData.arrGetType.length > 0) {
                                var a = c.default.GameManage.RandomNumBoth(0, c.default.gameData.arrGetType.length - 1);
                                n = c.default.gameData.arrGetType[a];
                            }
                            var i = "toyImg/toy-" + n;
                            cc.resources.load(i, cc.SpriteFrame, function(o, n) {
                                o ? console.error(o) : (t.throwContent.children[4 + e].getComponent(cc.Sprite).spriteFrame = n);
                            }), o.scheduleOnce(function() {
                                (t.throwContent.children[4 + e].active = Math.random() < 0.5), (t.throwContent.children[4 + e].getComponent(cc.RigidBody).linearVelocity = t.setToyVelocity()), (t.throwContent.children[4 + e].getComponent(cc.RigidBody).angularVelocity = c.default.GameManage.RandomNumBoth(1e3, 1500));
                            }, 0.1 + e * Math.random() * 2);
                        }, o = this, n = 0; n < 2; n++)
                        e(n);
                }), (e.prototype.setToyVelocity = function() {
                    var t = Math.random() < 0.5 ? 1 : -1,
                        e = c.default.GameManage.RandomNumBoth(100, 500),
                        o = c.default.GameManage.RandomNumBoth(1200, 1700);
                    return cc.v2(t * e, o);
                }), i([m(cc.Node)], e.prototype, "mapContent", void 0), i([m(cc.Label)], e.prototype, "lbCoin", void 0), i([m(cc.Label)], e.prototype, "lbAllToy", void 0), i([m(cc.Label)], e.prototype, "lbNewUnLock", void 0), i([m(cc.Node)], e.prototype, "claw", void 0), i([m(cc.Node)], e.prototype, "coin", void 0), i([m(cc.Prefab)], e.prototype, "scorePrefab", void 0), i([m(cc.Node)], e.prototype, "arrBtnContent", void 0), i([m(cc.Label)], e.prototype, "lbTime", void 0), i([m(cc.Node)], e.prototype, "go", void 0), i([m(cc.Node)], e.prototype, "throwContent", void 0), (o = i([g], e)));
            })(r.BaseAnction);
        (o.default = v), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/AudioManage": "AudioManage",
        "../Core/BaseAnction": "BaseAnction",
        "../Core/UIManage": "UIManage",
        "../SDK/FacebookIG": "FacebookIG",
        "../Tool/BadToy": "BadToy",
        "../Tool/Claw": "Claw",
        "../Tool/ScoreNode": "ScoreNode",
        "../Tool/Toy": "Toy",
    }, ],
    GuideUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "72882kftUNForKmxKWRpQZQ", "GuideUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/BaseAnction"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            d = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.shouzhi = null), e;
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        var e = r.default.RootNode.camera.parent.convertToWorldSpaceAR(r.default.RootNode.camera.position),
                            o = t.node.parent.convertToNodeSpaceAR(e);
                        t.node.position = o;
                    }, 0.05), cc.tween(this.shouzhi).by(0.5, {
                        position: cc.v3(-120, 0, 0)
                    }).by(1, {
                        position: cc.v3(240, 0, 0)
                    }).by(0.5, {
                        position: cc.v3(-120, 0, 0)
                    }).union().repeatForever().start(), this.scheduleOnce(function() {
                        t.node.getChildByName("mask").getComponent(cc.Button).enabled = !1;
                    }, 0.5);
                }), i([u(cc.Node)], e.prototype, "shouzhi", void 0), i([l], e));
            })(c.BaseAnction);
        (o.default = d), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/BaseAnction": "BaseAnction"
    }, ],
    Light: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2ade2X9PGRLuIJg6E4DdFbK", "Light");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            s = r.property,
            l = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.arrSpf = []), (e.arrlight = []), e;
                }
                return (a(e, t), (e.prototype.start = function() {
                    (this.arrlight = this.node.children), this.runLight(), this.schedule(this.runLight, 3);
                }), (e.prototype.runLight = function() {
                    for (var t = this, e = function(e) {
                            o.scheduleOnce(function() {
                                t.arrlight[e] != t.arrlight[t.arrlight.length - 1] ? ((t.arrlight[e].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]), t.scheduleOnce(function() {
                                    t.arrlight[e].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0];
                                }, 0.15)) : cc.tween(t.arrlight[e]).delay(0.2).call(function() {
                                    t.arrlight[e].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1];
                                }).delay(0.15).call(function() {
                                    t.arrlight[e].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0];
                                }).union().repeat(2).start();
                            }, 0.15 * e);
                        }, o = this, n = 0; n < this.arrlight.length; n++)
                        e(n);
                }), i([s(cc.SpriteFrame)], e.prototype, "arrSpf", void 0), i([c], e));
            })(cc.Component);
        (o.default = l), cc._RF.pop();
    }, {}, ],
    Liuguang: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "89b728hKmVBg5YBOQXI5Hcw", "Liuguang");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            s = r.property,
            l = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.guang = null), e;
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    var t = this;
                    this.guang.stopAllActions(), (this.guang.y = this.guang.height / 2 + this.node.height / 2);
                    var e = -this.guang.y;
                    cc.tween(this.guang).to(0.5, {
                        position: cc.v3(0, e, 0)
                    }).call(function() {
                        t.guang.y = t.guang.height / 2 + t.node.height / 2;
                    }).delay(3).union().repeatForever().start();
                }), (e.prototype.start = function() {}), i([s(cc.Node)], e.prototype, "guang", void 0), i([c], e));
            })(cc.Component);
        (o.default = l), cc._RF.pop();
    }, {}, ],
    Loading: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dae2dxwNgxA66PGenPveRm+", "Loading");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            s = r.property,
            l = t("../Core/App"),
            u = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.config = ["font", "music", "Prefab", "share", "spine"]), (e.progress = null), (e.progressLabel = null), (e.index = 0), e);
                }
                return (a(e, t), (e.prototype.start = function() {
                    (this.progress.fillRange = 0), (this.progressLabel.string = "0%"), this.scheduleOnce(this.preLoad, 0.5), cc.resources.loadDir("toyImg"), cc.resources.loadDir("UIPrefab");
                }), (e.prototype.preLoad = function() {
                    var t = this;
                    cc.resources.loadDir(this.config[this.index], function() {}, function(e, o) {
                        o && (t.index++, t.preLoad());
                    });
                }), (e.prototype.refreshProgress = function() {
                    this.progressLabel.string = Math.round(100 * this.progress.fillRange) + "%";
                }), (e.prototype.hid = function() {
                    var t = this;
                    cc.tween(this.node).to(0.2, {
                        opacity: 50
                    }).call(function() {
                        l.default.GameManage.onLodaingHid(), t.node.destroy();
                    }).start();
                }), (e.prototype.update = function() {
                    this.progress.fillRange < this.index / this.config.length && ((this.progress.fillRange += 0.003), this.progress.fillRange >= 1 && this.hid(), this.refreshProgress());
                }), i([s(cc.Sprite)], e.prototype, "progress", void 0), i([s(cc.Label)], e.prototype, "progressLabel", void 0), i([c], e));
            })(cc.Component);
        (o.default = u), cc._RF.pop();
    }, {
        "../Core/App": "App"
    }, ],
    LocalManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0f800uHGIhEJo5tfVDzoxxx", "LocalManage"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.GameData = void 0);
        var n = function() {
            (this.playerRankData = {}), (this.isShock = !0), (this.isMusicOn = !0), (this.isSoundOn = !0), (this.isRemoveAd = !0), (this.isVibart = !1), (this.coin = 0), (this.toyLv = 1), (this.depthLv = 1), (this.MoneyLv = 1), (this.curDepth = 50), (this.curToyNum = 5), (this.curMultiple = 1), (this.isFirst = !0), (this.arrGetType = []), (this.arrGetNum = new Array(224)), (this.arrUnlock = []), (this.allGetNum = 0), (this.leaveTime = 0), (this.best = 0);
        };
        o.GameData = n;
        var a = (function() {
            function t() {
                (this.gameData = null), (this.dataKey = "toyGo"), this.init();
            }
            return ((t.prototype.init = function() {
                var t;
                try {
                    t = this.getItem(this.dataKey);
                } catch (r) {}
                var e = {};
                t && (e = JSON.parse(t));
                for (var o = new n(), a = Object.keys(o), i = 0; i < a.length; i++)
                    e.hasOwnProperty(a[i]) || (e[a[i]] = o[a[i]]);
                this.gameData = e;
            }), (t.prototype.savaData = function() {
                this.setItem(this.gameData);
            }), (t.prototype.restData = function() {
                this.gameData = new n();
            }), (t.prototype.setItem = function(t) {
                cc.sys.localStorage.setItem(this.dataKey, JSON.stringify(t));
            }), (t.prototype.getItem = function(t) {
                return cc.sys.localStorage.getItem(t);
            }), t);
        })();
        (o.default = a), cc._RF.pop();
    }, {}, ],
    MyCCCJson: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6c98bhHqHhPh56WhQGEJZyr", "MyCCCJson"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.ConfigData = o.levelConfig = void 0);
        o.levelConfig = function() {
            (this.id = null), (this.keyWord = null), (this.answerNum = null), (this.answerArr = null), (this.wordNum = null), (this.wordArr = null), (this.wordRol = null), (this.rolNumArr = null);
        };
        var n = function() {
            (this.levelConfig = {}), (this.levelConfigKeyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, ]);
        };
        o.ConfigData = n;
        var a = (function() {
            function t() {}
            return ((t.Init = function(t) {
                for (var e = new n(), o = Object.keys(e), a = t, i = 0; i < o.length; i++)
                    a[o[i]] || (a[o[i]] = e[o[i]]);
                return a;
            }), t);
        })();
        (o.default = a), cc._RF.pop();
    }, {}, ],
    Picture: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "74436FoJOVPC6bQ7AQySDwd", "Picture");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.arrToySpf = []), (e.arrRoundSpf = []), (e.arrToy = []), (e.arrRound = []), (e.arrToyInitY = []), (e.roundInitY = []), (e.arrToyIndex = []), e);
                }
                return (a(e, t), (e.prototype.start = function() {
                    var t = this;
                    this.arrToy.forEach(function(e) {
                        t.arrToyInitY[t.arrToy.indexOf(e)] = e.node.y;
                    }), this.arrRound.forEach(function(e) {
                        t.roundInitY[t.arrRound.indexOf(e)] = e.node.y;
                    }), this.setImg(), this.setPosY();
                }), (e.prototype.setImg = function() {
                    var t = this;
                    this.arrToy.forEach(function(e) {
                        e.spriteFrame = t.arrToySpf[Math.floor(Math.random() * t.arrToySpf.length)];
                    }), this.arrRound.forEach(function(e) {
                        (e.spriteFrame = t.arrRoundSpf[Math.floor(Math.random() * t.arrRoundSpf.length)]), t.arrRoundSpf.splice(t.arrRoundSpf.indexOf(e.spriteFrame), 1);
                    });
                }), (e.prototype.setPosY = function() {
                    var t = this;
                    this.arrToy.forEach(function(e) {
                        e.node.y = t.arrToyInitY[t.arrToy.indexOf(e)] +
                            r.default.GameManage.RandomNumBoth(-500, 500);
                    }), this.arrRound.forEach(function(e) {
                        e.node.y = t.roundInitY[t.arrRound.indexOf(e)] +
                            r.default.GameManage.RandomNumBoth(-200, 200);
                    });
                }), i([l(cc.SpriteFrame)], e.prototype, "arrToySpf", void 0), i([l(cc.SpriteFrame)], e.prototype, "arrRoundSpf", void 0), i([l(cc.Sprite)], e.prototype, "arrToy", void 0), i([l(cc.Sprite)], e.prototype, "arrRound", void 0), i([s], e));
            })(cc.Component);
        (o.default = u), cc._RF.pop();
    }, {
        "../Core/App": "App"
    }, ],
    ResultUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8c8c5yHkg9GT5qRPvYG01WQ", "ResultUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/AudioManage"),
            s = t("../Core/BaseAnction"),
            l = t("../SDK/FacebookIG"),
            u = t("../Tool/Claw"),
            d = t("./GameUI"),
            p = cc._decorator,
            h = p.ccclass,
            f = p.property,
            y = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.adBtn = null), (e.close = null), (e.lbCoin = null), (e.lihuaPrefab = null), e);
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    var t = this;
                    r.default.AudioManage.playSound(c.MusicEnum.calculate), l.default.shareScore(r.default.getCom(d.default).allGetCoin), (this.close.active = !1), r.default.getCom(d.default).allGetCoin > r.default.gameData.best && (r.default.AudioManage.playSound(c.MusicEnum.bonus), (r.default.gameData.best = r.default.getCom(d.default).allGetCoin)), (r.default.getCom(d.default).claw.getComponent(u.default).count.active = !1), (this.lbCoin.string = "$" + r.default.getCom(d.default).allGetCoin);
                    var e = cc.instantiate(this.lihuaPrefab);
                    this.node.addChild(e), cc.tween(this.adBtn).to(0.25, {
                        scale: 1.15
                    }).to(0.25, {
                        scale: 1
                    }).union().repeatForever().start(), this.scheduleOnce(function() {
                        (t.close.active = !0), (t.close.opacity = 0), cc.tween(t.close).to(0.5, {
                            opacity: 255
                        }).start();
                    }, 1);
                }), (e.prototype.start = function() {}), (e.prototype.onDisable = function() {
                    this.adBtn.stopAllActions(), this.node.getChildByName("lihuaPrefab").destroy();
                }), (e.prototype.onClick = function(t) {
                    var e = this;
                    switch (t) {
                        case "adBtn":
                            l.default.showVideoAd(l.adIDFB.videoId1, function(t) {
                                (r.default.gameData.coin += t ? 2 * r.default.getCom(d.default).allGetCoin : r.default.getCom(d.default).allGetCoin), r.default.UIManage.hidUINode(e.node), r.default.getCom(d.default).reStart();
                            });
                            break;
                        case "close":
                            l.default.showInsertAd(l.adIDFB.insertID2, function() {
                                (r.default.gameData.coin += r.default.getCom(d.default).allGetCoin), r.default.UIManage.hidUINode(e.node), r.default.getCom(d.default).reStart();
                            });
                    }
                }), i([f(cc.Node)], e.prototype, "adBtn", void 0), i([f(cc.Node)], e.prototype, "close", void 0), i([f(cc.Label)], e.prototype, "lbCoin", void 0), i([f(cc.Prefab)], e.prototype, "lihuaPrefab", void 0), i([h], e));
            })(s.BaseAnction);
        (o.default = y), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/AudioManage": "AudioManage",
        "../Core/BaseAnction": "BaseAnction",
        "../SDK/FacebookIG": "FacebookIG",
        "../Tool/Claw": "Claw",
        "./GameUI": "GameUI",
    }, ],
    ReviveUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e4be8bDa15N7pAD4NbiFmjL", "ReviveUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/BaseAnction"),
            s = t("../SDK/FacebookIG"),
            l = t("../Tool/Claw"),
            u = t("./GameUI"),
            d = cc._decorator,
            p = d.ccclass,
            h = d.property,
            f = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.timeBar = null), (e.adBtn = null), (e.speed = 0), e;
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        var e = r.default.RootNode.camera.parent.convertToWorldSpaceAR(r.default.RootNode.camera.position),
                            o = t.node.parent.convertToNodeSpaceAR(e);
                        t.node.position = o;
                    }, 0.05), (this.speed = r.default.RootNode.speed), (r.default.RootNode.speed = 0), (this.timeBar.progress = 1), this.schedule(this.progressReduce), this.adBtn.stopAllActions(), cc.tween(this.adBtn).to(0.25, {
                        scale: 1.15
                    }).to(0.25, {
                        scale: 1
                    }).union().repeatForever().start();
                }), (e.prototype.start = function() {}), (e.prototype.progressReduce = function() {
                    (this.timeBar.progress -= 0.007), this.timeBar.progress <= 0 && (this.unschedule(this.progressReduce), r.default.UIManage.hidUINode(this.node), r.default.getCom(u.default).claw.getComponent(l.default).setBoom());
                }), (e.prototype.onClick = function(t) {
                    var e = this;
                    switch (t) {
                        case "btnRevive":
                            s.default.showVideoAd(s.adIDFB.videoId1, function(t) {
                                t ? ((r.default.RootNode.speed = e.speed), (r.default.getCom(u.default).isStart = !0)) : r.default.getCom(u.default).claw.getComponent(l.default).setBoom(), e.unschedule(e.progressReduce), r.default.UIManage.hidUINode(e.node);
                            });
                    }
                }), i([h(cc.ProgressBar)], e.prototype, "timeBar", void 0), i([h(cc.Node)], e.prototype, "adBtn", void 0), i([p], e));
            })(c.BaseAnction);
        (o.default = f), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/BaseAnction": "BaseAnction",
        "../SDK/FacebookIG": "FacebookIG",
        "../Tool/Claw": "Claw",
        "./GameUI": "GameUI",
    }, ],
    RootNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "35710ijJX5Lhq9jgexxhCjP", "RootNode");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.RootNode = void 0);
        var r = t("../SDK/FacebookIG"),
            c = t("../Tool/Claw"),
            s = t("../UI/GameUI"),
            l = t("./App"),
            u = cc._decorator,
            d = u.ccclass,
            p = u.property,
            h = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.uiContent = null), (e.noADsNode = null), (e.camera = null), (e.UIPrefab = []), (e.toyPrefab = null), (e.godPrefab = null), (e.badPrefab = null), (e.signPrefab = null), (e.speed = 0), (e.time = 0), (e.hasDouble = !1), (e.toyPool = new cc.NodePool()), (e.godToyPool = new cc.NodePool()), (e.badToyPool = new cc.NodePool()), (e.signPool = new cc.NodePool()), e);
                }
                return (a(e, t), (e.prototype.onLoad = function() {
                    (cc.director.getCollisionManager().enabled = !0), (cc.macro.ENABLE_MULTI_TOUCH = !1), cc.game.setFrameRate(59), cc.game.addPersistRootNode(this.node), cc.game.on(cc.game.EVENT_HIDE, function() {
                        (l.default.gameData.leaveTime = Math.floor(new Date().getTime() / 1e3)), l.default.LocaloManage.savaData();
                    }), this.node.addComponent(cc.AudioSource), l.default.init(this.uiContent, this.noADsNode, this.node.getComponent(cc.AudioSource)), r.default.init();
                    for (var t = (l.default.gameData.curDepth / 5) * 6, e = 0; e < 0.9 * t; e++) {
                        var o = cc.instantiate(this.toyPrefab);
                        this.toyPool.put(o);
                        var n = cc.instantiate(this.signPrefab);
                        this.signPool.put(n);
                    }
                    for (e = 0; e < 0.1 * t; e++) {
                        var a = cc.instantiate(this.godPrefab);
                        this.godToyPool.put(a);
                        var i = cc.instantiate(this.badPrefab);
                        this.badToyPool.put(i);
                    }
                }), (e.prototype.start = function() {
                    var t = this;
                    (l.default.RootNode = this), this.scheduleOnce(function() {
                        t.node.width / t.node.height > 0.7 && ((t.node.getComponent(cc.Widget).isAlignLeft = !1), (t.node.getComponent(cc.Widget).isAlignRight = !1), (t.node.width = 750), (t.camera.height = t.node.height));
                    });
                }), (e.prototype.update = function(t) {
                    l.default.update(t), l.default.hasCom(s.default) && this.speed > 0 && ((this.camera.y += this.speed * t), this.camera.y >= -this.node.height / 2 ? ((this.speed = 0), l.default.getCom(s.default).overClaw(1)) : this.camera.y > -2e3 - this.node.height / 2 && ((this.speed -= 2), this.speed <= 0 && (this.speed = 0)));
                }), (e.prototype.cutTime = function() {
                    (this.time = 240), l.default.getCom(s.default).refreshlbTime(), this.schedule(this.reduceTime, 1);
                }), (e.prototype.reduceTime = function() {
                    this.time--, this.time <= 0 && ((this.hasDouble = !1), this.unschedule(this.reduceTime), (this.time = 0), l.default.getCom(s.default).isRegainClaw || l.default.getCom(s.default).isStart || !l.default.getCom(s.default).isDouble || (l.default.getCom(s.default).claw.getComponent(c.default).changeState(0), (l.default.getCom(s.default).isDouble = !1))), l.default.getCom(s.default).refreshlbTime();
                }), i([p(cc.Node)], e.prototype, "uiContent", void 0), i([p(cc.Node)], e.prototype, "noADsNode", void 0), i([p(cc.Node)], e.prototype, "camera", void 0), i([p(cc.Prefab)], e.prototype, "UIPrefab", void 0), i([p(cc.Prefab)], e.prototype, "toyPrefab", void 0), i([p(cc.Prefab)], e.prototype, "godPrefab", void 0), i([p(cc.Prefab)], e.prototype, "badPrefab", void 0), i([p(cc.Prefab)], e.prototype, "signPrefab", void 0), i([d], e));
            })(cc.Component);
        (o.RootNode = h), cc._RF.pop();
    }, {
        "../SDK/FacebookIG": "FacebookIG",
        "../Tool/Claw": "Claw",
        "../UI/GameUI": "GameUI",
        "./App": "App",
    }, ],
    ScItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b5922NXscxLJZFpn+Tb9sLo", "ScItem");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/AudioManage"),
            s = t("../SDK/FacebookIG"),
            l = cc._decorator,
            u = l.ccclass,
            d = l.property,
            p = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.toySprite = null), (e.lbMoney = null), (e.lbCount = null), (e.coin = null), (e.unLock = null), (e.lbReward = null), (e.index = 0), e);
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    this.coin.stopAllActions(), r.default.gameData.arrGetType.includes(this.index + 1) ? ((this.lbCount.string = r.default.gameData.arrGetNum[this.index] + " toys"), (this.lbMoney.string = "$" + String(5 * Math.floor(this.index / 4) + 20)), (this.toySprite.node.color = cc.Color.WHITE), r.default.gameData.arrUnlock.includes(this.index) || ((this.coin.active = !0), cc.tween(this.coin).to(0.4, {
                        scale: 0.9
                    }, {
                        easing: cc.easing.sineIn
                    }).to(0.5, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).delay(0.05).union().repeatForever().start())) : ((this.toySprite.node.color = cc.Color.BLACK), (this.lbMoney.string = "???"));
                }), (e.prototype.start = function() {
                    var t = this,
                        e = "toyImg/toy-" + (this.index + 1);
                    cc.resources.load(e, cc.SpriteFrame, function(e, o) {
                        e ? console.error(e) : ((t.toySprite.spriteFrame = o), t.onEnable());
                    }), this.coin.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
                }), (e.prototype.touchStart = function() {
                    var t = this;
                    s.default.showInsertAd(s.adIDFB.insertID2, function() {
                        (r.default.gameData.coin += 5 * Math.floor(t.index / 4) + 20), (t.coin.active = !1), r.default.gameData.arrUnlock.push(t.index), t.playUnLock();
                    });
                }), (e.prototype.playUnLock = function() {
                    r.default.AudioManage.playSound(c.MusicEnum.newLock), (this.unLock.active = !0), (this.lbReward.string = "$" + String(5 * Math.floor(this.index / 4) + 20)), cc.tween(this.lbReward.node).to(0.1, {
                        scale: 3
                    }, {
                        easing: cc.easing.backOut
                    }).to(0.9, {
                        scale: 1.2
                    }, {
                        easing: cc.easing.elasticOut
                    }).delay(0.3).to(0.2, {
                        scale: 0
                    }).start();
                }), i([d(cc.Sprite)], e.prototype, "toySprite", void 0), i([d(cc.Label)], e.prototype, "lbMoney", void 0), i([d(cc.Label)], e.prototype, "lbCount", void 0), i([d(cc.Node)], e.prototype, "coin", void 0), i([d(cc.Node)], e.prototype, "unLock", void 0), i([d(cc.Label)], e.prototype, "lbReward", void 0), i([u], e));
            })(cc.Component);
        (o.default = p), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/AudioManage": "AudioManage",
        "../SDK/FacebookIG": "FacebookIG",
    }, ],
    ScUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0fe2biPk0FDXY8h7EsK3Dkx", "ScUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/BaseAnction"),
            s = t("../Core/UIManage"),
            l = t("../SDK/FacebookIG"),
            u = t("../Tool/ScItem"),
            d = t("./GameUI"),
            p = cc._decorator,
            h = p.ccclass,
            f = p.property,
            y = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.itemPrefab = null), (e.content = null), (e.view = null), (e.arrLight = []), (e.arrSpf = []), e);
                }
                return (a(e, t), (e.prototype.onLoad = function() {}), (e.prototype.onEnable = function() {
                    var t = this;
                    (this.node.opacity = 0), cc.tween(this.node).to(0.3, {
                        opacity: 255
                    }).call(function() {
                        r.default.UIManage.hidUI(s.UIEnum.GameUI);
                    }).start(), this.arrLight.forEach(function(e) {
                        cc.tween(e).delay(0.2).call(function() {
                            e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1];
                        }).delay(0.2).call(function() {
                            (e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0]), (e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]);
                        }).delay(0.2).call(function() {
                            e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0];
                        }).delay(0.4).call(function() {
                            (e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]), (e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]);
                        }).delay(0.3).call(function() {
                            (e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0]), (e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0]);
                        }).delay(0.4).call(function() {
                            (e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]), (e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[1]);
                        }).delay(0.4).call(function() {
                            (e.children[0].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0]), (e.children[1].getComponent(cc.Sprite).spriteFrame = t.arrSpf[0]);
                        }).delay(0.3).union().repeatForever().start();
                    });
                }), (e.prototype.start = function() {
                    for (var t = 0; t < 224; t++) {
                        var e = cc.instantiate(this.itemPrefab);
                        (e.getComponent(u.default).index = t), this.content.addChild(e);
                    }
                }), (e.prototype.update = function() {
                    var t = this;
                    this.content.children.forEach(function(e) {
                        var o = t.content.convertToWorldSpaceAR(e.position),
                            n = t.view.parent.convertToWorldSpaceAR(t.view.position),
                            a = t.view.height / 2 + 200;
                        o.y <= n.y + a && o.y >= n.y - a ? 255 != e.opacity && (e.opacity = 255) : 0 != e.opacity && (e.opacity = 0);
                    });
                }), (e.prototype.onClick = function(t) {
                    var e = this;
                    switch (t) {
                        case "close":
                            l.default.showInsertAd(l.adIDFB.insertID2, function() {
                                (r.default.getCom(d.default).isShowUI = !1), r.default.UIManage.hidUINode(e.node), r.default.UIManage.showUI(s.UIEnum.GameUI);
                            });
                    }
                }), i([f(cc.Prefab)], e.prototype, "itemPrefab", void 0), i([f(cc.Node)], e.prototype, "content", void 0), i([f(cc.Node)], e.prototype, "view", void 0), i([f(cc.Node)], e.prototype, "arrLight", void 0), i([f(cc.SpriteFrame)], e.prototype, "arrSpf", void 0), i([h], e));
            })(c.BaseAnction);
        (o.default = y), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/BaseAnction": "BaseAnction",
        "../Core/UIManage": "UIManage",
        "../SDK/FacebookIG": "FacebookIG",
        "../Tool/ScItem": "ScItem",
        "./GameUI": "GameUI",
    }, ],
    ScoreNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "040776T14NNSYwK1f80uoVi", "ScoreNode");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.label = null), (e.index = 0), e;
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        var e = Math.random();
                        (t.node.children[0].active = e < 0.5 && 0 == t.index), (t.node.children[1].active = e >= 0.5 && 0 == t.index), (t.node.children[2].active = 1 == t.index), (t.label.node.scale = 0), cc.tween(t.label.node).delay(0.1).to(0.05, {
                            scale: 2
                        }, {
                            easing: cc.easing.backOut
                        }).to(0.2, {
                            scale: 1
                        }, {
                            easing: cc.easing.elasticOut
                        }).call(function() {
                            0 != r.default.RootNode.camera.y && (t.label.node.stopAllActions(), t.scheduleOnce(function() {
                                t.label.node.removeFromParent();
                            }, 4));
                        }).to(0.2, {
                            scale: 0
                        }).call(function() {
                            t.node.removeFromParent();
                        }).start();
                    });
                }), (e.prototype.start = function() {
                    this.node.zIndex = 1;
                }), i([l(cc.Label)], e.prototype, "label", void 0), i([s], e));
            })(cc.Component);
        (o.default = u), cc._RF.pop();
    }, {
        "../Core/App": "App"
    }, ],
    ScrollMap: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c246aCN8XtBL5q5UD3pHdfr", "ScrollMap");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../UI/GameUI"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            d = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.arrMap = []), (e.arrPic = []), e;
                }
                return (a(e, t), (e.prototype.start = function() {
                    (this.arrPic[1].y = this.arrPic[0].y - this.arrPic[0].height), (this.arrMap[1].y = this.arrMap[0].y - this.arrMap[0].height);
                }), (e.prototype.lateUpdate = function() {
                    var t = r.default.RootNode.camera.getBoundingBoxToWorld(),
                        e = r.default.getCom(c.default).isRegainClaw ? -1 : 1;
                    if (this.arrMap[0].getBoundingBoxToWorld().containsRect(t)) {
                        var o = 1 == e ? this.arrMap[0].height : this.arrMap[1].height;
                        (this.arrMap[1].y = this.arrMap[0].y - o * e), this.arrMap[1].y > 0 && (this.arrMap[1].y = this.arrMap[0].y - this.arrMap[0].height);
                    }
                    this.arrMap[1].getBoundingBoxToWorld().containsRect(t) && ((o = -1 == e ? this.arrMap[0].height : this.arrMap[1].height), (this.arrMap[0].y = this.arrMap[1].y - o * e)), this.arrPic[0].getBoundingBoxToWorld().containsRect(t) && ((this.arrPic[1].y = this.arrPic[0].y - this.arrPic[0].height * e), this.arrPic[1].y > 0 && (this.arrPic[1].y = this.arrPic[0].y - this.arrPic[0].height)), this.arrPic[1].getBoundingBoxToWorld().containsRect(t) && (this.arrPic[0].y = this.arrPic[1].y - this.arrPic[1].height * e);
                }), i([u(cc.Node)], e.prototype, "arrMap", void 0), i([u(cc.Node)], e.prototype, "arrPic", void 0), i([l], e));
            })(cc.Component);
        (o.default = d), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../UI/GameUI": "GameUI"
    }, ],
    SettingUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ae1a1IJU1VEzaGF8panAn3E", "SettingUI");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/BaseAnction"),
            s = t("../SDK/FacebookIG"),
            l = t("./GameUI"),
            u = cc._decorator,
            d = u.ccclass,
            p = (u.property, (function(t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (a(e, t), (e.prototype.start = function() {
                    this.refreshBtn();
                    this.node.getChildByName("fenxiang").active = !1;
                    this.node.getChildByName("tiaozhan").active = !1;
                }), (e.prototype.refreshBtn = function() {
                    (this.node.getChildByName("music").children[0].active = r.default.gameData.isMusicOn), (this.node.getChildByName("music").children[1].active = !r.default.gameData.isMusicOn), (this.node.getChildByName("sound").children[0].active = r.default.gameData.isSoundOn), (this.node.getChildByName("sound").children[1].active = !r.default.gameData.isSoundOn);
                }), (e.prototype.onClick = function(t) {
                    switch (t) {
                        case "close":
                            (r.default.getCom(l.default).isShowUI = !1), r.default.UIManage.hidUINode(this.node);
                            break;
                        case "music":
                            r.default.AudioManage.switchMusic(), this.refreshBtn();
                            break;
                        case "sound":
                            r.default.AudioManage.switchSound(), this.refreshBtn();
                            break;
                        case "fenxiang":
                            s.default.shareAsync();
                            break;
                        case "tiaozhan":
                            s.default.tiaoZhan();
                    }
                }), i([d], e));
            })(c.BaseAnction));
        (o.default = p), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/BaseAnction": "BaseAnction",
        "../SDK/FacebookIG": "FacebookIG",
        "./GameUI": "GameUI",
    }, ],
    Toy: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "432bcBSA5NE6oV583iE/ONc", "Toy");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../UI/GameUI"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            d = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.trailing = null), (e.type = 0), (e.speed = 0), (e.money = 0), (e.dir = 0), (e.isCatch = !1), e);
                }
                return (a(e, t), (e.prototype.onEnable = function() {
                    (this.dir = Math.random() < 0.5 ? 1 : -1), (this.node.scale = 0.5), (this.speed = r.default.GameManage.RandomNumBoth(300, 800)), this.setType();
                }), (e.prototype.setType = function() {
                    var t = [],
                        e = Math.round(-this.node.y / 400);
                    e > r.default.GameManage.arrHeight[r.default.GameManage.arrHeight.length - 1][1] && (e = r.default.GameManage.arrHeight[r.default.GameManage.arrHeight.length - 1][1]), r.default.GameManage.arrHeight.forEach(function(o) {
                        o[0] <= e && o[1] >= e && t.push(r.default.GameManage.arrHeight.indexOf(o));
                    });
                    var o = t[Math.floor(Math.random() * t.length)];
                    "godToy" != this.node.name ? ((this.type = r.default.GameManage.RandomNumBoth(4 * o + 1, 4 * o + 4)), (this.money = 5 * o + 20), this.setImg()) : (this.money = 40 + 10 * o);
                }), (e.prototype.setImg = function() {
                    var t = this,
                        e = "toyImg/toy-" + this.type;
                    cc.resources.load(e, cc.SpriteFrame, function(e, o) {
                        e ? console.error(e) : ((t.node.getComponent(cc.Sprite).spriteFrame = o), (t.node.getComponent(cc.BoxCollider).size.width = t.node.width), (t.node.getComponent(cc.BoxCollider).size.height = t.node.height));
                    });
                }), (e.prototype.update = function(t) {
                    r.default.getCom(c.default).isRegainClaw ? (!this.trailing || this.trailing.active || this.isCatch || (this.trailing.active = !0), (this.node.x += this.speed * this.dir * t), this.node.x <= -r.default.RootNode.node.width / 2 && ((this.node.x = -r.default.RootNode.node.width / 2), (this.speed = -this.speed)), this.node.x >= r.default.RootNode.node.width / 2 && ((this.node.x = r.default.RootNode.node.width / 2), (this.speed = -this.speed))) : this.trailing && !this.isCatch && (this.trailing.active = !1);
                }), (e.prototype.remove = function() {
                    "toy" == this.node.name ? r.default.RootNode.toyPool.put(this.node) : r.default.RootNode.godToyPool.put(this.node);
                }), i([u(cc.Node)], e.prototype, "trailing", void 0), i([l], e));
            })(cc.Component);
        (o.default = d), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../UI/GameUI": "GameUI"
    }, ],
    UIManage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "38afcXebbFBb6ZqUeLLVfLa", "UIManage"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), (o.UIEnum = void 0);
        var n = t("./App"),
            a = t("./BaseUI");
        (function(t) {
            (t.MainUI = "MainUI"), (t.GameUI = "GameUI"), (t.SettingUI = "SettingUI"), (t.ScUI = "ScUI"), (t.ReviveUI = "ReviveUI"), (t.ResultUI = "ResultUI"), (t.GuideUI = "GuideUI");
        })(o.UIEnum || (o.UIEnum = {}));
        var i = (function() {
            function t(t) {
                (this.uiContent = null), (this.effectContent = null), (this.mapUI = {}), (this.quanPingYRat = 1), (this.quanPingXRat = 1), (this.uiContent = t), this.shiPei();
            }
            return ((t.prototype.shiPei = function() {
                var t = this.uiContent.getContentSize(),
                    e = cc.view.getFrameSize(),
                    o = t.width,
                    n = t.height;
                t.width / t.height > e.width / e.height ? ((this.quanPingYRat = ((o / n) * e.height) / e.width), (o = t.width), (n = (e.height / e.width) * o)) : ((this.quanPingXRat = ((n / o) * e.width) / e.height), (o = ((n = t.height) * e.width) / e.height)), cc.view.setDesignResolutionSize(o, n, cc.view.getResolutionPolicy());
            }), (t.prototype.setQuanPing = function(t) {
                var e, o = cc.view.getDesignResolutionSize(),
                    n = t.width,
                    a = t.height;
                (e = n / a > o.width / o.height ? ((n / a) * o.height) / o.width : ((a / n) * o.width) / o.height), (t.width = n * e), (t.height = a * e);
            }), (t.prototype.showUI = function(t, e, o) {
                var n = this;
                this.getUIPrefab(t).then(function(t) {
                    (t.getComponent(a.BaseUI).args = o), (t.active = !0), t.setSiblingIndex(n.uiContent.children.length - 1), e && e();
                });
            }), (t.prototype.hidUI = function(t) {
                this.mapUI[t] && (this.mapUI[t].active = !1);
            }), (t.prototype.hidUINode = function(t) {
                t.active = !1;
            }), (t.prototype.getUIPrefab = function(t) {
                var e = this;
                return new Promise(function(o) {
                    e.mapUI[t] ? o(e.mapUI[t]) : cc.loader.loadRes("UIPrefab/" + t, cc.Prefab, function(n, i) {
                        if (n) console.log(n);
                        else {
                            var r = cc.instantiate(i);
                            (r.active = !1), (e.mapUI[t] = r), r.setParent(e.uiContent), r.getComponent(a.BaseUI).onCreat(), o(r);
                        }
                    });
                });
            }), (t.prototype.hintNoAds = function(t) {
                (n.default.noADsNode.active = !0), (n.default.noADsNode.opacity = 255), n.default.noADsNode.stopAllActions(), n.default.noADsNode.runAction(cc.sequence(cc.fadeIn(0.2), cc.delayTime(1), cc.fadeOut(0.2), cc.callFunc(t && t())));
            }), (t.prototype.gteUiContent = function() {
                return this.uiContent;
            }), t);
        })();
        (o.default = i), cc._RF.pop();
    }, {
        "./App": "App",
        "./BaseUI": "BaseUI"
    }, ],
    btnCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6e95eUCk/5D36JjzwKJ/e/A", "btnCtrl");
        var n, a = (this && this.__extends) || ((n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    }) || function(t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
            }), function(t, e) {
                function o() {
                    this.constructor = t;
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
            }),
            i = (this && this.__decorate) || function(t, e, o, n) {
                var a, i = arguments.length,
                    r = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)
                        (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Core/App"),
            c = t("../Core/AudioManage"),
            s = t("../SDK/FacebookIG"),
            l = t("../UI/GameUI"),
            u = cc._decorator,
            d = u.ccclass,
            p = u.property,
            h = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return ((e.arrSpf = []), (e.sprite = null), (e.lbAim = null), (e.lbMoney = null), (e.free = null), (e.liuguang = null), (e.money = 0), (e.lv = 0), (e.initAimY = 0), (e.initMonY = 0), e);
                }
                var o;
                return (a(e, t), (o = e), (e.prototype.onEnable = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        t.refreshBtnLbel();
                    });
                }), (e.prototype.start = function() {
                    (this.initAimY = this.lbAim.node.y), (this.initMonY = this.lbMoney.node.y), this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCanel, this);
                }), (e.prototype.touchStart = function() {
                    (this.sprite.spriteFrame = this.arrSpf[1]), (this.lbAim.node.y = this.initAimY + 8), (this.lbMoney.node.y = this.initMonY + 8), (this.free.y = this.initMonY + 7);
                }), (e.prototype.touchCanel = function() {
                    this.lv >= 56 || ((this.sprite.spriteFrame = this.arrSpf[0]), (this.lbAim.node.y = this.initAimY), (this.lbMoney.node.y = this.initMonY), (this.free.y = this.initMonY - 1));
                }), (e.prototype.touchEnd = function() {
                    var t = this;
                    this.lv >= 56 || (this.touchCanel(), r.default.gameData.coin < this.money ? s.default.showVideoAd(s.adIDFB.videoId1, function(e) {
                        e && t.levelUp();
                    }) : ((r.default.gameData.coin -= this.money), this.levelUp(), r.default.getCom(l.default).refreshLbCoin()));
                }), (e.prototype.levelUp = function() {
                    switch ((r.default.AudioManage.playSound(c.MusicEnum.upgrade), this.node.name)) {
                        case "btnToy":
                            r.default.gameData.toyLv += 1;
                            break;
                        case "btnDepth":
                            r.default.gameData.depthLv += 1;
                            break;
                        case "btnMoney":
                            r.default.gameData.MoneyLv += 1;
                    }
                    r.default.getCom(l.default).arrBtnContent[1].children.forEach(function(t) {
                        t.getComponent(o).refreshBtnLbel();
                    });
                }), (e.prototype.refreshBtnLbel = function() {
                    var t, e, o;
                    switch (this.node.name) {
                        case "btnToy":
                            (e = (t = r.default.gameData.toyLv) - 1 + 5), (r.default.gameData.curToyNum = e), console.log(r.default.gameData.curToyNum), (o = "TOYS " + e);
                            break;
                        case "btnDepth":
                            (e = 50 + 10 * ((t = r.default.gameData.depthLv) - 1)), (r.default.gameData.curDepth = e), (o = e + " m");
                            break;
                        case "btnMoney":
                            (o = "x" +
                                (e = (10 + 1 * ((t = r.default.gameData.MoneyLv) - 1)) / 10).toFixed(1)), (r.default.gameData.curMultiple = e);
                    }
                    this.lv = t;
                    var n = Math.round(64 +
                        30 * (t - 1) -
                        2.4 * Math.pow(t - 1, 2) +
                        0.3 * Math.pow(t - 1, 3));
                    (this.money = n), (this.free.active = r.default.gameData.coin < n && t < 56), (this.lbMoney.node.active = !this.free.active), (this.lbAim.string = o), (this.lbMoney.string = t >= 56 ? "MAX" : "$" + r.default.GameManage.convertToK(n)), this.refreshLiuguang();
                }), (e.prototype.refreshLiuguang = function() {
                    this.lv >= 56 ? ((this.node.getChildByName("liuguang").active = !1), this.touchStart()) : r.default.gameData.coin > this.money ? (this.node.getChildByName("liuguang").active = !0) : (this.node.getChildByName("liuguang").active = !1);
                }), i([p(cc.SpriteFrame)], e.prototype, "arrSpf", void 0), i([p(cc.Sprite)], e.prototype, "sprite", void 0), i([p(cc.Label)], e.prototype, "lbAim", void 0), i([p(cc.Label)], e.prototype, "lbMoney", void 0), i([p(cc.Node)], e.prototype, "free", void 0), i([p(cc.Node)], e.prototype, "liuguang", void 0), (o = i([d], e)));
            })(cc.Component);
        (o.default = h), cc._RF.pop();
    }, {
        "../Core/App": "App",
        "../Core/AudioManage": "AudioManage",
        "../SDK/FacebookIG": "FacebookIG",
        "../UI/GameUI": "GameUI",
    }, ],
}, {}, ["App", "AudioManage", "BaseAnction", "BaseUI", "EffectManage", "GameManage", "LocalManage", "RootNode", "UIManage", "MyCCCJson", "FacebookIG", "BadToy", "Claw", "Light", "Liuguang", "Picture", "ScItem", "ScoreNode", "ScrollMap", "Toy", "btnCtrl", "GameUI", "GuideUI", "Loading", "ResultUI", "ReviveUI", "ScUI", "SettingUI", ]);