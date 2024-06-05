function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _get(e, t, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var n = _superPropBase(e, t);
        if (n) {
            var o = Object.getOwnPropertyDescriptor(n, t);
            return o.get ? o.get.call(i) : o.value;
        }
    })(e, t, i || e);
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
    return e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}! function() {
    var e, t, i = function() {
        function GameConfig() {
            _classCallCheck(this, GameConfig);
        }
        return _createClass(GameConfig, null, [{
            key: "init",
            value: function() {
                Laya.ClassUtils.regClass;
            }
        }]), GameConfig;
    }();
    i.width = 640, i.height = 1136, i.scaleMode = "showall", i.screenMode = "none", i.alignV = "middle", i.alignH = "center", i.startScene = "GameMain.scene", i.sceneRoot = "", i.debug = !1, i.stat = !1, i.physicsDebug = !1, i.exportSceneToJson = !0, i.init(),
        function(e) {
            e[e.BaiduSDK = 0] = "BaiduSDK", e[e.DummySDK = 1] = "DummySDK", e[e.OPPOSDK = 2] = "OPPOSDK", e[e.ToutiaoSDK = 3] = "ToutiaoSDK", e[e.MeizuSDK = 4] = "MeizuSDK", e[e.VivoSDK = 5] = "VivoSDK", e[e.QQSDK = 6] = "QQSDK", e[e.WxSDK = 7] = "WxSDK";
        }(e || (e = {})),
        function(e) {
            e[e.Debug = 0] = "Debug", e[e.Internal = 1] = "Internal", e[e.Public = 2] = "Public", e[e.Shipping = 3] = "Shipping";
        }(t || (t = {}));
    var n = function() {
        function BuildSetting() {
            _classCallCheck(this, BuildSetting);
        }
        return _createClass(BuildSetting, null, [{
            key: "SetName",
            value: function(e) {
                this.PlayerName = e, pe.Instance.mMainScene && pe.Instance.mMainScene.mUI && (pe.Instance.mMainScene.mUI.iptName.text = e);
            }
        }, {
            key: "updateKnapsackItem",
            value: function(e, t) {
                var i = e.getChildByName("image"),
                    n = e.getChildByName("name");
                i.skin = e.dataSource.app_icon, n.text = e.dataSource.app_title;
            }
        }, {
            key: "Getdelta",
            value: function() {
                return Laya.timer.delta >= 34 ? 34 : Laya.timer.delta;
            }
        }, {
            key: "Check",
            value: function() {
                var e = 0;
                if (Laya.Browser.onIPhone) {
                    var t = 3 === Laya.Browser.pixelRatio && 375 === Laya.Browser.clientWidth && 812 === Laya.Browser.clientHeight,
                        i = 3 === Laya.Browser.pixelRatio && 414 === Laya.Browser.clientWidth && 896 === Laya.Browser.clientHeight,
                        n = 2 === Laya.Browser.pixelRatio && 414 === Laya.Browser.clientWidth && 896 === Laya.Browser.clientHeight;
                    (t || i || n) && (e = 60);
                }
                return e;
            }
        }, {
            key: "Ratio",
            value: function() {
                if (BuildSetting.kPlatformSDK == e.VivoSDK || BuildSetting.kPlatformSDK == e.QQSDK || BuildSetting.kPlatformSDK == e.OPPOSDK) return !0;
            }
        }, {
            key: "Setcity",
            value: function() {}
        }]), BuildSetting;
    }();
    n.kProductType = t.Public, n.kPlatformSDK = e.WxSDK, n.kVersion = "1.0.1", n.kGameName = "Dice", n.kShootName = "DI", n.kSaveVersion = 1, n.kAdRuleUrlRoot = "", n.bannerheight = 160, n.PlayerName = "", n.ShowJq = !0, n.time = 0;
    var o = function(e) {
            function GameEvent() {
                return _classCallCheck(this, GameEvent), _possibleConstructorReturn(this, _getPrototypeOf(GameEvent).apply(this, arguments));
            }
            return _inherits(GameEvent, Laya.EventDispatcher), _createClass(GameEvent, null, [{
                key: "CreateInstance",
                value: function() {
                    return this.mInstance || (this.mInstance = new GameEvent()), this.mInstance;
                }
            }, {
                key: "Instance",
                get: function() {
                    return this.mInstance;
                }
            }]), GameEvent;
        }(),
        a = function EventNames() {
            _classCallCheck(this, EventNames);
        };
    a.KCamMove = "KCamMove", a.KCamScale = "KCamScale", a.KRocketRotation = "KCamRotation", a.kBannerAdShowed = "BannerShowed", a.kGridAdShowed = "GridShowed";
    var s, r = function() {
            function SDKWrapped() {
                _classCallCheck(this, SDKWrapped), this.WXpromotion = null, this.TTpromotion = null, this.OPPOpromotion = null, this.WX_version = "1.0.8", this.WXConfig = null, this.OPPO_version = "1.0.1", this.OPPOConfig = null, this.VIVO_version = "1.0.2", this.VIVOHTSConfig = null, this.QQ_version = "1.0.2", this.QQHTSConfig = null;
            }
            return _createClass(SDKWrapped, [{
                key: "GetType",
                value: function() {
                    return e.DummySDK;
                }
            }, {
                key: "InitializeAdapter",
                value: function() {}
            }, {
                key: "Initialize",
                value: function() {
                    Laya.stage.on(Laya.Event.FOCUS, null, function() {
                        1,
                        pe.Instance.mLevelScene && pe.Instance.mLevelScene.Show();
                    }), Laya.stage.on(Laya.Event.BLUR, null, function() {
                        1,
                        pe.Instance.mLevelScene && pe.Instance.mLevelScene.Hide();
                    });
                }
            }, {
                key: "triggerGC",
                value: function() {}
            }, {
                key: "Login",
                value: function() {}
            }, {
                key: "ShowBannerAd",
                value: function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    o.Instance.event(a.kBannerAdShowed);
                }
            }, {
                key: "HideBannerAd",
                value: function() {}
            }, {
                key: "ShowRewardedVideoAd",
                value: function(e, t, i) {
                    t && t(!0);
                }
            }, {
                key: "CrateInterstitial",
                value: function() {}
            }, {
                key: "ShowInterstitialAd",
                value: function(e, t) {}
            }, {
                key: "showGridAd",
                value: function(e) {}
            }, {
                key: "HideGridAd",
                value: function() {}
            }, {
                key: "IsSupportShare",
                value: function() {
                    return !1;
                }
            }, {
                key: "ShareGame",
                value: function(e, t, i) {
                    t && t(!0);
                }
            }, {
                key: "Track",
                value: function(e, t) {}
            }, {
                key: "VibrateLong",
                value: function() {
                    navigator.vibrate && navigator.vibrate(400);
                }
            }, {
                key: "VibrateShort",
                value: function() {
                    navigator.vibrate && navigator.vibrate(200);
                }
            }, {
                key: "GetStorage",
                value: function(e) {
                    return Laya.LocalStorage.getItem(e);
                }
            }, {
                key: "SetStorage",
                value: function(e, t) {
                    Laya.LocalStorage.setItem(e, t);
                }
            }, {
                key: "DelStorage",
                value: function(e) {
                    Laya.LocalStorage.setItem(e, null);
                }
            }, {
                key: "IsSupportRecord",
                value: function() {
                    return !1;
                }
            }, {
                key: "IsRecord",
                value: function() {
                    return !1;
                }
            }, {
                key: "RecordLength",
                value: function() {
                    return 0;
                }
            }, {
                key: "StartRecord",
                value: function(e) {}
            }, {
                key: "StopRecord",
                value: function() {}
            }, {
                key: "PauseRecord",
                value: function() {}
            }, {
                key: "ResumeRecord",
                value: function() {}
            }, {
                key: "ShareRecord",
                value: function(e, t, i) {
                    t && t(!0);
                }
            }, {
                key: "playMusic",
                value: function(e) {
                    Laya.SoundManager.playMusic(e);
                }
            }, {
                key: "playSound",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    Laya.SoundManager.playSound(e, 1, t);
                }
            }, {
                key: "StopMusic",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    Laya.SoundManager.stopMusic();
                }
            }, {
                key: "StopSound",
                value: function(e) {
                    Laya.SoundManager.stopSound(e);
                }
            }, {
                key: "GetbasePath",
                value: function() {
                    return "";
                }
            }, {
                key: "DelUse",
                value: function() {}
            }, {
                key: "DelAllUse",
                value: function() {}
            }, {
                key: "showerrModal",
                value: function(e) {}
            }, {
                key: "downunzip",
                value: function(e, t) {
                    e(null);
                }
            }, {
                key: "preOrder",
                value: function(e, t) {}
            }, {
                key: "Getbid",
                value: function(e) {
                    return "";
                }
            }, {
                key: "IsSupportToMiniGame",
                value: function() {
                    return !1;
                }
            }, {
                key: "IsSupportToMiniGameHTS",
                value: function() {
                    return !1;
                }
            }, {
                key: "GetnavigateIcon",
                value: function(e, t) {
                    return "";
                }
            }, {
                key: "getgamename",
                value: function(e) {
                    return "";
                }
            }, {
                key: "getpkgNameIcon1",
                value: function() {
                    return [];
                }
            }, {
                key: "getpkgNametab",
                value: function() {
                    return [];
                }
            }, {
                key: "navigateToMiniGame",
                value: function(e) {}
            }, {
                key: "IsSupportAddIcon",
                value: function() {
                    return !1;
                }
            }, {
                key: "hasAddIcon",
                value: function() {}
            }, {
                key: "AddIcon",
                value: function() {}
            }, {
                key: "GetBannerAdHigh",
                value: function() {
                    return 90;
                }
            }]), SDKWrapped;
        }(),
        l = function(e) {
            function DummySDK() {
                return _classCallCheck(this, DummySDK), _possibleConstructorReturn(this, _getPrototypeOf(DummySDK).apply(this, arguments));
            }
            return _inherits(DummySDK, r), DummySDK;
        }(),
        h = Laya.ClassUtils.regClass;
    ! function(e) {
        var t = function(e) {
            function GameEndUI() {
                return _classCallCheck(this, GameEndUI), _possibleConstructorReturn(this, _getPrototypeOf(GameEndUI).call(this));
            }
            return _inherits(GameEndUI, Laya.View), _createClass(GameEndUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameEndUI.prototype), "createChildren", this).call(this), this.createView(GameEndUI.uiView);
                }
            }]), GameEndUI;
        }();
        t.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 2,
            "selecteID": 150,
            "searchKey": "View",
            "props": {
                "width": 640,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 217,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "top": 0,
                    "skin": "AllGame/main_ui8.png",
                    "sizeGrid": "3,3,3,3",
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 140,
                "child": []
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "top": 100,
                    "skin": "AllGame/main_ui8.png",
                    "sizeGrid": "3,3,3,3",
                    "right": 0,
                    "left": 0,
                    "height": 150
                },
                "nodeParent": 2,
                "label": "Image",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 124,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image,winImg",
                    "props": {
                        "var": "winImg",
                        "skin": "AllGame/victory.png",
                        "centerY": 0,
                        "centerX": 0
                    },
                    "nodeParent": 124,
                    "label": "winImg",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 148,
                    "child": []
                }]
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,BOX",
                "props": {
                    "y": 675,
                    "width": 640,
                    "var": "BOX",
                    "right": 0,
                    "left": 0,
                    "height": 395
                },
                "nodeParent": 2,
                "label": "BOX",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 150,
                "child": [{
                    "x": 30,
                    "type": "List",
                    "searchKey": "List,rankList",
                    "props": {
                        "width": 560,
                        "visible": false,
                        "var": "rankList",
                        "top": 1,
                        "spaceY": 10,
                        "repeatY": 3,
                        "height": 170,
                        "centerX": 0
                    },
                    "nodeParent": 150,
                    "label": "rankList",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 126,
                    "child": [{
                        "x": 45,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "y": 0,
                            "width": 520,
                            "right": 0,
                            "renderType": "render",
                            "left": 0,
                            "height": 50
                        },
                        "nodeParent": 126,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 127,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,floor",
                            "props": {
                                "y": 0,
                                "skin": "AllGame/main_ui3.png",
                                "sizeGrid": "0,25,0,25",
                                "right": 0,
                                "name": "floor",
                                "left": 0,
                                "height": 50
                            },
                            "nodeParent": 127,
                            "label": "floor",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 128,
                            "child": []
                        }, {
                            "x": 60,
                            "type": "Label",
                            "searchKey": "Label,name",
                            "props": {
                                "width": 330,
                                "text": "I'm the best!",
                                "overflow": "hidden",
                                "name": "name",
                                "left": 90,
                                "height": 36,
                                "fontSize": 36,
                                "color": "#ff0400",
                                "centerY": 0,
                                "bold": true
                            },
                            "nodeParent": 127,
                            "label": "name",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 135,
                            "child": []
                        }, {
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,diceImg",
                            "props": {
                                "skin": "AllGame/dice_Icon.png",
                                "name": "diceImg",
                                "left": 30,
                                "centerY": 0
                            },
                            "nodeParent": 127,
                            "label": "diceImg",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 136,
                            "child": []
                        }, {
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,moneyImg",
                            "props": {
                                "skin": "AllGame/Goldcoin.png",
                                "right": 90,
                                "name": "moneyImg",
                                "centerY": 0
                            },
                            "nodeParent": 127,
                            "label": "moneyImg",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 137,
                            "child": []
                        }, {
                            "x": 60,
                            "type": "Label",
                            "searchKey": "Label,moneyNum",
                            "props": {
                                "y": 0,
                                "text": "2",
                                "name": "moneyNum",
                                "left": 480,
                                "fontSize": 36,
                                "color": "#ff0400",
                                "centerY": 0,
                                "bold": true,
                                "align": "left"
                            },
                            "nodeParent": 127,
                            "label": "moneyNum",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 138,
                            "child": []
                        }, {
                            "x": 60,
                            "type": "Label",
                            "searchKey": "Label,rankNo",
                            "props": {
                                "text": "6TH",
                                "name": "rankNo",
                                "left": 23,
                                "fontSize": 26,
                                "centerY": 0,
                                "bold": true
                            },
                            "nodeParent": 127,
                            "label": "rankNo",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 141,
                            "child": []
                        }]
                    }],
                    "$LOCKED": true,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "CheckBox",
                    "searchKey": "CheckBox,CheckBox",
                    "props": {
                        "width": 192,
                        "visible": false,
                        "var": "CheckBox",
                        "stateNum": 3,
                        "skin": "ui/checkbox.png",
                        "selected": true,
                        "scaleY": 1.48,
                        "scaleX": 1.48,
                        "labelStrokeColor": "#1af6ed",
                        "labelStroke": 1,
                        "labelSize": 15,
                        "labelPadding": "1",
                        "labelFont": "Microsoft YaHei",
                        "labelColors": "#01ffd6,#01ffd6,#01ffd6",
                        "labelBold": true,
                        "label": "Watch ads, reward x10",
                        "height": 18,
                        "centerX": 0,
                        "bottom": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 150,
                    "label": "CheckBox",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 201,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,double",
                    "props": {
                        "x": 227,
                        "width": 187,
                        "var": "double",
                        "stateNum": 1,
                        "skin": "AllGame/award_button1.png",
                        "labelStrokeColor": "#ff5b00",
                        "labelSize": 22,
                        "labelPadding": "-5",
                        "labelFont": "Microsoft YaHei",
                        "labelBold": true,
                        "labelAlign": "center",
                        "label": "        Multiple receipt       COIN x2",
                        "height": 80,
                        "centerX": 0,
                        "bottom": 140
                    },
                    "nodeParent": 150,
                    "label": "double",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 199,
                    "child": [{
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,Video",
                        "props": {
                            "x": 11,
                            "width": 40,
                            "var": "Video",
                            "skin": "AllGame/smallGame.png",
                            "height": 40,
                            "centerY": -9
                        },
                        "nodeParent": 199,
                        "label": "Video",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 200,
                        "child": []
                    }]
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,Share",
                    "props": {
                        "x": 320,
                        "width": 166,
                        "visible": false,
                        "var": "Share",
                        "stateNum": 1,
                        "skin": "AllGame/start_button1.png",
                        "labelSize": 22,
                        "labelPadding": "-2",
                        "labelFont": "Microsoft YaHei",
                        "labelBold": true,
                        "labelAlign": "center",
                        "label": "Show off",
                        "height": 60,
                        "centerX": 0,
                        "bottom": 80,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 150,
                    "label": "Share",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 197,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,continue",
                    "props": {
                        "width": 135,
                        "var": "continue",
                        "stateNum": 1,
                        "skin": "AllGame/keep_button1.png",
                        "labelSize": 22,
                        "labelFont": "Microsoft YaHei",
                        "labelBold": true,
                        "labelAlign": "center",
                        "label": "HOME",
                        "height": 49,
                        "centerX": 0,
                        "bottom": 30
                    },
                    "nodeParent": 150,
                    "label": "continue",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 198,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,doubleWX",
                    "props": {
                        "width": 187,
                        "visible": false,
                        "var": "doubleWX",
                        "stateNum": 1,
                        "skin": "AllGame/award_button1.png",
                        "labelStrokeColor": "#ff5b00",
                        "labelSize": 25,
                        "labelPadding": "-2",
                        "labelFont": "Microsoft YaHei",
                        "labelBold": true,
                        "labelAlign": "center",
                        "label": "       COIN x2",
                        "height": 80,
                        "centerX": -120,
                        "bottom": 11
                    },
                    "nodeParent": 150,
                    "label": "doubleWX",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 205,
                    "child": [{
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "x": 13,
                            "width": 40,
                            "skin": "AllGame/smallGame.png",
                            "height": 40,
                            "centerY": -8
                        },
                        "nodeParent": 205,
                        "label": "Image",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 206,
                        "child": []
                    }]
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,continueWX",
                    "props": {
                        "width": 187,
                        "visible": false,
                        "var": "continueWX",
                        "stateNum": 1,
                        "skin": "AllGame/keep_button1.png",
                        "labelSize": 25,
                        "labelPadding": "-2",
                        "labelFont": "Microsoft YaHei",
                        "labelBold": true,
                        "labelAlign": "center",
                        "label": "HOME",
                        "height": 80,
                        "centerX": 120,
                        "bottom": 10
                    },
                    "nodeParent": 150,
                    "label": "continueWX",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 208,
                    "child": []
                }]
            }, {
                "x": 15,
                "type": "List",
                "searchKey": "List,list_fail",
                "props": {
                    "y": 293,
                    "width": 614,
                    "visible": false,
                    "var": "list_fail",
                    "spaceY": 5,
                    "spaceX": 5,
                    "repeatX": 3,
                    "presetID": 7,
                    "height": 303,
                    "elasticEnabled": true,
                    "centerX": 0
                },
                "nodeParent": 2,
                "label": "list_fail",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 142,
                "child": [{
                    "x": 30,
                    "type": "Box",
                    "searchKey": "Box",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 200,
                        "renderType": "render",
                        "presetID": 17,
                        "height": 150
                    },
                    "nodeParent": 142,
                    "label": "Box",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": false,
                    "hasChild": true,
                    "compId": 143,
                    "child": [{
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,thumb",
                        "props": {
                            "y": 0,
                            "width": 200,
                            "presetID": 19,
                            "name": "thumb",
                            "height": 150,
                            "centerX": 0
                        },
                        "nodeParent": 143,
                        "label": "thumb",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 145,
                        "child": []
                    }]
                }]
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,bj",
                "props": {
                    "zOrder": 74,
                    "y": 251,
                    "width": 460,
                    "visible": false,
                    "var": "bj",
                    "skin": "AllGame/main_ui9.png",
                    "height": 521,
                    "centerX": 0
                },
                "nodeParent": 2,
                "label": "bj",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 187,
                "child": [{
                    "x": 30,
                    "type": "List",
                    "searchKey": "List,LIST",
                    "props": {
                        "y": 20,
                        "width": 411,
                        "var": "LIST",
                        "spaceY": 5,
                        "spaceX": 5,
                        "presetID": 7,
                        "height": 463,
                        "elasticEnabled": true,
                        "centerX": 0
                    },
                    "nodeParent": 187,
                    "label": "LIST",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 188,
                    "child": [{
                        "x": 45,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "x": 0,
                            "width": 200,
                            "renderType": "render",
                            "presetID": 17,
                            "height": 150
                        },
                        "nodeParent": 188,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 189,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,thumb",
                            "props": {
                                "y": 5,
                                "x": 0,
                                "width": 200,
                                "presetID": 19,
                                "name": "thumb",
                                "height": 150
                            },
                            "nodeParent": 189,
                            "label": "thumb",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 190,
                            "child": []
                        }]
                    }]
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }, {
                "x": 15,
                "type": "List",
                "searchKey": "List,rankList2",
                "props": {
                    "width": 560,
                    "visible": false,
                    "var": "rankList2",
                    "top": 251,
                    "spaceY": 10,
                    "centerX": 0,
                    "bottom": 345
                },
                "nodeParent": 2,
                "label": "rankList2",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 209,
                "child": [{
                    "type": "Box",
                    "searchKey": "Box",
                    "props": {
                        "y": 0,
                        "width": 520,
                        "right": 0,
                        "renderType": "render",
                        "left": 0,
                        "height": 50
                    },
                    "nodeParent": 209,
                    "label": "Box",
                    "isDirectory": true,
                    "isAniNode": false,
                    "hasChild": true,
                    "compId": 210,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image,floor",
                        "props": {
                            "y": 0,
                            "skin": "AllGame/main_ui3.png",
                            "sizeGrid": "0,25,0,25",
                            "right": 0,
                            "name": "floor",
                            "left": 0,
                            "height": 50
                        },
                        "nodeParent": 210,
                        "label": "floor",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 211,
                        "child": []
                    }, {
                        "type": "Label",
                        "searchKey": "Label,name",
                        "props": {
                            "width": 330,
                            "text": "I'm the best!",
                            "overflow": "hidden",
                            "name": "name",
                            "left": 90,
                            "height": 36,
                            "fontSize": 36,
                            "color": "#ff0400",
                            "centerY": 0,
                            "bold": true
                        },
                        "nodeParent": 210,
                        "label": "name",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 212,
                        "child": []
                    }, {
                        "type": "Image",
                        "searchKey": "Image,diceImg",
                        "props": {
                            "skin": "AllGame/dice_Icon.png",
                            "name": "diceImg",
                            "left": 30,
                            "centerY": 0
                        },
                        "nodeParent": 210,
                        "label": "diceImg",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 213,
                        "child": []
                    }, {
                        "type": "Image",
                        "searchKey": "Image,moneyImg",
                        "props": {
                            "skin": "AllGame/Goldcoin.png",
                            "right": 90,
                            "name": "moneyImg",
                            "centerY": 0
                        },
                        "nodeParent": 210,
                        "label": "moneyImg",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 214,
                        "child": []
                    }, {
                        "type": "Label",
                        "searchKey": "Label,moneyNum",
                        "props": {
                            "y": 0,
                            "text": "2",
                            "name": "moneyNum",
                            "left": 480,
                            "fontSize": 36,
                            "color": "#ff0400",
                            "centerY": 0,
                            "bold": true,
                            "align": "left"
                        },
                        "nodeParent": 210,
                        "label": "moneyNum",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 215,
                        "child": []
                    }, {
                        "type": "Label",
                        "searchKey": "Label,rankNo",
                        "props": {
                            "text": "6TH",
                            "name": "rankNo",
                            "left": 23,
                            "fontSize": 26,
                            "centerY": 0,
                            "bold": true
                        },
                        "nodeParent": 210,
                        "label": "rankNo",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 216,
                        "child": []
                    }]
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }],
            "animations": [{
                "nodes": [{
                    "target": 197,
                    "keyframes": {
                        "rotation": [{
                            "value": 6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 197,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 197,
                            "key": "rotation",
                            "index": 5
                        }, {
                            "value": -6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 197,
                            "key": "rotation",
                            "index": 10
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 197,
                            "key": "rotation",
                            "index": 15
                        }, {
                            "value": 6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 197,
                            "key": "rotation",
                            "index": 20
                        }]
                    }
                }],
                "name": "aniShare",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 201,
                    "keyframes": {
                        "scaleY": [{
                            "value": 1.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleY",
                            "index": 0
                        }, {
                            "value": 1.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleY",
                            "index": 10
                        }, {
                            "value": 1.7,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleY",
                            "index": 20
                        }, {
                            "value": 1.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleY",
                            "index": 30
                        }, {
                            "value": 1.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleY",
                            "index": 40
                        }],
                        "scaleX": [{
                            "value": 1.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleX",
                            "index": 0
                        }, {
                            "value": 1.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleX",
                            "index": 10
                        }, {
                            "value": 1.7,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleX",
                            "index": 20
                        }, {
                            "value": 1.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleX",
                            "index": 30
                        }, {
                            "value": 1.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 201,
                            "key": "scaleX",
                            "index": 40
                        }]
                    }
                }],
                "name": "CheckAni",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }]
        }, e.GameEndUI = t, h("ui.GameEndUI", t);
        var i = function(e) {
            function GameLevelUI() {
                return _classCallCheck(this, GameLevelUI), _possibleConstructorReturn(this, _getPrototypeOf(GameLevelUI).call(this));
            }
            return _inherits(GameLevelUI, Laya.View), _createClass(GameLevelUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameLevelUI.prototype), "createChildren", this).call(this), this.createView(GameLevelUI.uiView);
                }
            }]), GameLevelUI;
        }();
        i.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 207,
            "selecteID": 208,
            "searchKey": "View",
            "props": {
                "width": 640,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 219,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Image",
                "searchKey": "Image,imgJoystickBackground",
                "props": {
                    "var": "imgJoystickBackground",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "imgJoystickBackground",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 112,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image,imgJoystickBar",
                    "props": {
                        "y": 518,
                        "x": 270,
                        "width": 100,
                        "var": "imgJoystickBar",
                        "height": 100
                    },
                    "nodeParent": 112,
                    "label": "imgJoystickBar",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 113,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "zOrder": 1,
                    "top": 50,
                    "skin": "AllGame/main_ui2.png",
                    "scaleY": 1.2,
                    "scaleX": 1.2,
                    "left": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 115,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "skin": "AllGame/Number.png",
                        "scaleY": 0.8,
                        "scaleX": 0.8,
                        "left": 20,
                        "centerY": 0
                    },
                    "nodeParent": 115,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 118,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Label",
                    "searchKey": "Label,DiceNum",
                    "props": {
                        "var": "DiceNum",
                        "text": "20",
                        "right": 30,
                        "fontSize": 42,
                        "color": "#ffffff",
                        "centerY": 0,
                        "bold": true
                    },
                    "nodeParent": 115,
                    "label": "DiceNum",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 121,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "zOrder": 1,
                    "top": 150,
                    "skin": "AllGame/main_ui2.png",
                    "left": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 119,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "skin": "AllGame/time.png",
                        "left": 20,
                        "centerY": 0
                    },
                    "nodeParent": 119,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 120,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Label",
                    "searchKey": "Label,TimeNum",
                    "props": {
                        "y": 0,
                        "var": "TimeNum",
                        "text": "00:00",
                        "right": 13,
                        "fontSize": 24,
                        "color": "#ffffff",
                        "centerY": 0,
                        "bold": true
                    },
                    "nodeParent": 119,
                    "label": "TimeNum",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 122,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,xsyd",
                "props": {
                    "width": 400,
                    "var": "xsyd",
                    "skin": "AllGame/main_ui1.png",
                    "sizeGrid": "25,25,25,25",
                    "scaleY": 0,
                    "scaleX": 0,
                    "height": 311,
                    "centerY": 100,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "nodeParent": 2,
                "label": "xsyd",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 123,
                "child": [{
                    "x": 30,
                    "type": "Sprite",
                    "searchKey": "Sprite",
                    "props": {
                        "y": 107,
                        "x": 64,
                        "texture": "AllGame/handgd.png"
                    },
                    "nodeParent": 123,
                    "label": "Sprite",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 124,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Sprite",
                    "searchKey": "Sprite",
                    "props": {
                        "y": 213,
                        "x": 176,
                        "texture": "AllGame/hand.png"
                    },
                    "nodeParent": 123,
                    "label": "Sprite",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 125,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Text",
                    "searchKey": "Text",
                    "props": {
                        "y": 5,
                        "x": 64,
                        "wordWrap": true,
                        "width": 272,
                        "valign": "middle",
                        "text": "Slide on the screen",
                        "runtime": "laya.display.Text",
                        "leading": 5,
                        "height": 108,
                        "fontSize": 40,
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    },
                    "nodeParent": 123,
                    "label": "Text",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 131,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,challenge",
                "props": {
                    "zOrder": 1,
                    "x": 0,
                    "visible": false,
                    "var": "challenge",
                    "top": 220,
                    "skin": "AllGame/main_ui8.png",
                    "sizeGrid": "3,3,3,3",
                    "right": 0,
                    "left": 0,
                    "height": 150
                },
                "nodeParent": 2,
                "label": "challenge",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 126,
                "child": [{
                    "x": 30,
                    "type": "Label",
                    "searchKey": "Label",
                    "props": {
                        "text": "Challenge",
                        "fontSize": 124,
                        "color": "#ffffff",
                        "centerY": 0,
                        "centerX": 0,
                        "bold": true
                    },
                    "nodeParent": 126,
                    "label": "Label",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 127,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,jqUI",
                "props": {
                    "zOrder": 0,
                    "y": 0,
                    "x": 0,
                    "visible": false,
                    "var": "jqUI",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "jqUI",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 144,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "top": 0,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 144,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 145,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 386,
                        "x": 319,
                        "top": 300,
                        "skin": "AllGame/main_ui12.png",
                        "rotation": -10,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 144,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 159,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Image",
                    "searchKey": "Image,btnjq",
                    "props": {
                        "x": 319,
                        "width": 224,
                        "var": "btnjq",
                        "skin": "AllGame/start_button1.png",
                        "height": 100,
                        "bottom": 140,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 144,
                    "label": "btnjq",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 156,
                    "child": [{
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "y": 16,
                            "valign": "middle",
                            "text": "Gather energy",
                            "right": 0,
                            "left": 0,
                            "height": 51,
                            "fontSize": 40,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 156,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 157,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Box",
                    "searchKey": "Box",
                    "props": {
                        "width": 5,
                        "height": 5,
                        "centerY": 0,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 144,
                    "label": "Box",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 164,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "y": 35,
                            "x": -178,
                            "skin": "AllGame/ui_game_top_bar_1_1.png"
                        },
                        "nodeParent": 164,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 160,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Panel",
                        "searchKey": "Panel,jd",
                        "props": {
                            "y": 58,
                            "x": -178,
                            "width": 1,
                            "var": "jd",
                            "height": 45,
                            "anchorY": 0.5
                        },
                        "nodeParent": 164,
                        "label": "jd",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 163,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "skin": "AllGame/ui_game_top_bar_1_2.png"
                            },
                            "nodeParent": 163,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 161,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,imgds",
                        "props": {
                            "y": 56,
                            "x": -178,
                            "width": 84,
                            "var": "imgds",
                            "skin": "AllGame/main_ui13.png",
                            "height": 59,
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        },
                        "nodeParent": 164,
                        "label": "imgds",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 162,
                        "child": [{
                            "type": "Label",
                            "searchKey": "Label,ds",
                            "props": {
                                "visible": false,
                                "var": "ds",
                                "valign": "middle",
                                "top": 0,
                                "text": "Num +10",
                                "right": 0,
                                "left": 0,
                                "fontSize": 18,
                                "color": "#ffffff",
                                "bottom": 0,
                                "bold": false,
                                "align": "center"
                            },
                            "nodeParent": 162,
                            "label": "ds",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 165,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,pfUI",
                "props": {
                    "zOrder": 0,
                    "y": 0,
                    "x": 0,
                    "visible": false,
                    "var": "pfUI",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "pfUI",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 172,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "top": 0,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 172,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 173,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 348,
                        "x": 320,
                        "top": 300,
                        "skin": "AllGame/main_ui14.png",
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 172,
                    "label": "Image",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 174,
                    "child": [{
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 14,
                            "x": 121,
                            "width": 192,
                            "text": "TRY FREE",
                            "runtime": "laya.display.Text",
                            "height": 47,
                            "fontSize": 45,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 174,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 183,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,skinscene",
                    "props": {
                        "width": 155,
                        "var": "skinscene",
                        "skin": "AllGame/main_ui10.png",
                        "renderType": "render",
                        "height": 155,
                        "centerY": 0,
                        "centerX": 0
                    },
                    "nodeParent": 172,
                    "label": "skinscene",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 186,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image,imgskin",
                        "props": {
                            "y": 15,
                            "x": 15,
                            "width": 121,
                            "var": "imgskin",
                            "skin": "AllGame/skin_1.png",
                            "height": 121
                        },
                        "nodeParent": 186,
                        "label": "imgskin",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 188,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "CheckBox",
                    "searchKey": "CheckBox,CheckBox",
                    "props": {
                        "width": 142,
                        "visible": false,
                        "var": "CheckBox",
                        "stateNum": 3,
                        "skin": "ui/checkbox.png",
                        "selected": true,
                        "scaleY": 1.5,
                        "scaleX": 1.5,
                        "labelStroke": 1,
                        "labelSize": 15,
                        "labelPadding": "1",
                        "labelFont": "Microsoft YaHei",
                        "labelColors": "#01ffd6,#01ffd6,#01ffd6",
                        "labelBold": true,
                        "label": "View video to trial skin",
                        "centerX": 0,
                        "bottom": 355
                    },
                    "nodeParent": 172,
                    "label": "CheckBox",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 190,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,btnsy",
                    "props": {
                        "x": 320,
                        "width": 224,
                        "var": "btnsy",
                        "skin": "AllGame/award_button1.png",
                        "height": 100,
                        "bottom": 245,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 172,
                    "label": "btnsy",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 175,
                    "child": [{
                        "x": 45,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "y": 10,
                            "x": 83,
                            "width": 124,
                            "valign": "middle",
                            "text": "试用",
                            "height": 51,
                            "fontSize": 40,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 175,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 176,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 10,
                            "x": 41,
                            "width": 51,
                            "texture": "AllGame/smallGame.png",
                            "height": 49
                        },
                        "nodeParent": 175,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 184,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Label",
                    "searchKey": "Label,btnClosePF",
                    "props": {
                        "width": 180,
                        "visible": false,
                        "var": "btnClosePF",
                        "valign": "middle",
                        "text": "Temporary trial",
                        "scaleY": 1.5,
                        "scaleX": 1.5,
                        "height": 30,
                        "fontSize": 20,
                        "color": "#ffffff",
                        "centerX": 0,
                        "bottom": 200,
                        "bold": true,
                        "align": "center"
                    },
                    "nodeParent": 172,
                    "label": "btnClosePF",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 185,
                    "child": [{
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "width": 180,
                            "valign": "middle",
                            "text": "________",
                            "height": 28,
                            "fontSize": 20,
                            "color": "#ffffff",
                            "centerX": 0,
                            "bottom": -5,
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 185,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 191,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,qjb",
                "props": {
                    "zOrder": 2,
                    "y": 0,
                    "x": 0,
                    "visible": false,
                    "var": "qjb",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "qjb",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 204,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "top": 0,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 204,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 205,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 386,
                        "x": 319,
                        "top": 300,
                        "skin": "AllGame/main_ui15.png",
                        "rotation": -10,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 204,
                    "label": "Image",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 206,
                    "child": [{
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 100,
                            "x": 128,
                            "width": 64,
                            "texture": "AllGame/Goldcoin.png",
                            "height": 64
                        },
                        "nodeParent": 206,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 215,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,btnqjb",
                    "props": {
                        "x": 319,
                        "width": 224,
                        "var": "btnqjb",
                        "skin": "AllGame/upgrade_button2.png",
                        "height": 100,
                        "bottom": 140,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 204,
                    "label": "btnqjb",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 207,
                    "child": [{
                        "x": 45,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "y": -3,
                            "wordWrap": true,
                            "width": 224,
                            "valign": "middle",
                            "text": "Quick Click",
                            "right": 0,
                            "left": 0,
                            "height": 81,
                            "fontSize": 40,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 207,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 208,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Box",
                    "searchKey": "Box",
                    "props": {
                        "width": 5,
                        "height": 5,
                        "centerY": 0,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 204,
                    "label": "Box",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 209,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "y": 35,
                            "x": -178,
                            "skin": "AllGame/ui_game_top_bar_1_1.png"
                        },
                        "nodeParent": 209,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 210,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Panel",
                        "searchKey": "Panel,jbjd",
                        "props": {
                            "y": 58,
                            "x": -178,
                            "width": 1,
                            "var": "jbjd",
                            "height": 45,
                            "anchorY": 0.5
                        },
                        "nodeParent": 209,
                        "label": "jbjd",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 211,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "skin": "AllGame/ui_game_top_bar_1_2.png"
                            },
                            "nodeParent": 211,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 212,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,imgjb",
                        "props": {
                            "y": 56,
                            "x": -178,
                            "width": 84,
                            "var": "imgjb",
                            "skin": "AllGame/main_ui13.png",
                            "height": 59,
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        },
                        "nodeParent": 209,
                        "label": "imgjb",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 213,
                        "child": [{
                            "type": "Label",
                            "searchKey": "Label,jb",
                            "props": {
                                "visible": false,
                                "var": "jb",
                                "valign": "middle",
                                "top": 0,
                                "text": "Coin+10",
                                "right": 0,
                                "left": 0,
                                "fontSize": 22,
                                "color": "#ffffff",
                                "bottom": 0,
                                "bold": false,
                                "align": "center"
                            },
                            "nodeParent": 213,
                            "label": "jb",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 214,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "List",
                "searchKey": "List,broadcastList",
                "props": {
                    "width": 640,
                    "var": "broadcastList",
                    "top": 219,
                    "spaceY": 2,
                    "right": 0,
                    "repeatX": 1,
                    "left": 0,
                    "height": 195
                },
                "nodeParent": 2,
                "label": "broadcastList",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 132,
                "child": [{
                    "x": 30,
                    "type": "Box",
                    "searchKey": "Box,render",
                    "props": {
                        "right": 0,
                        "name": "render",
                        "left": 0,
                        "height": 50
                    },
                    "nodeParent": 132,
                    "label": "render",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": false,
                    "hasChild": true,
                    "compId": 133,
                    "child": [{
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "y": 8,
                            "x": 40,
                            "width": 35,
                            "skin": "AllGame/horn.png",
                            "left": 40,
                            "height": 35,
                            "centerY": 0
                        },
                        "nodeParent": 133,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 139,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "top": 0,
                            "skin": "AllGame/main_ui8.png",
                            "right": 0,
                            "left": 0,
                            "bottom": 0,
                            "alpha": 0.5
                        },
                        "nodeParent": 133,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 138,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Label",
                        "searchKey": "Label,player_1",
                        "props": {
                            "width": 200,
                            "text": "",
                            "overflow": "hidden",
                            "name": "player_1",
                            "fontSize": 20,
                            "color": "#ffffff",
                            "centerY": 0,
                            "centerX": -120,
                            "align": "center"
                        },
                        "nodeParent": 133,
                        "label": "player_1",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 135,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "text": "DEFEAT",
                            "overflow": "hidden",
                            "fontSize": 32,
                            "color": "#ffffff",
                            "centerY": 0,
                            "centerX": 30
                        },
                        "nodeParent": 133,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 136,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Label",
                        "searchKey": "Label,player_2",
                        "props": {
                            "width": 200,
                            "text": "",
                            "overflow": "hidden",
                            "name": "player_2",
                            "fontSize": 20,
                            "color": "#ffffff",
                            "centerY": 0,
                            "centerX": 190,
                            "align": "center"
                        },
                        "nodeParent": 133,
                        "label": "player_2",
                        "isDirectory": false,
                        "isAniNode": false,
                        "hasChild": false,
                        "compId": 137,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,BOT",
                "props": {
                    "zOrder": 3,
                    "y": 978,
                    "x": 0,
                    "width": 640,
                    "visible": false,
                    "var": "BOT",
                    "skin": "wxmore/end-box.png",
                    "sizeGrid": "20,20,20,20",
                    "presetID": 16,
                    "height": 158
                },
                "nodeParent": 2,
                "label": "BOT",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 166,
                "child": [{
                    "type": "List",
                    "searchKey": "List,LISTBOT",
                    "props": {
                        "zOrder": 3,
                        "x": 14,
                        "width": 620,
                        "var": "LISTBOT",
                        "spaceY": 0,
                        "spaceX": 5,
                        "repeatY": 1,
                        "presetID": 11,
                        "height": 156,
                        "elasticEnabled": true,
                        "centerY": 4
                    },
                    "nodeParent": 166,
                    "label": "LISTBOT",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 167,
                    "child": [{
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "y": 0,
                            "width": 200,
                            "renderType": "render",
                            "presetID": 12,
                            "height": 150
                        },
                        "nodeParent": 167,
                        "label": "Box",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 168,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image,thumb",
                            "props": {
                                "width": 200,
                                "presetID": 13,
                                "name": "thumb",
                                "height": 150
                            },
                            "nodeParent": 168,
                            "label": "thumb",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 170,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,BOX",
                "props": {
                    "zOrder": 2,
                    "width": 100,
                    "visible": false,
                    "var": "BOX",
                    "top": 90,
                    "right": 10,
                    "renderType": "render",
                    "presetID": 12,
                    "height": 120,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "nodeParent": 2,
                "label": "BOX",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 216,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image,image",
                    "props": {
                        "width": 100,
                        "var": "image",
                        "top": 0,
                        "presetID": 13,
                        "height": 100,
                        "centerX": 0
                    },
                    "nodeParent": 216,
                    "label": "image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 217,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Label",
                    "searchKey": "Label,Name",
                    "props": {
                        "var": "Name",
                        "valign": "middle",
                        "text": "",
                        "right": 0,
                        "presetID": 14,
                        "overflow": "hidden",
                        "left": 0,
                        "height": 20,
                        "fontSize": 15,
                        "color": "#ffffff",
                        "bottom": 0,
                        "bold": true,
                        "align": "center"
                    },
                    "nodeParent": 216,
                    "label": "Name",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 218,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }],
            "animations": [{
                "nodes": [{
                    "target": 125,
                    "keyframes": {
                        "y": [{
                            "value": 213,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 0
                        }, {
                            "value": 167,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 3
                        }, {
                            "value": 114.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 6
                        }, {
                            "value": 113.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 9
                        }, {
                            "value": 161.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 12
                        }, {
                            "value": 210,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 15
                        }, {
                            "value": 231,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 18
                        }, {
                            "value": 189,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 21
                        }, {
                            "value": 117,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 24
                        }, {
                            "value": 115.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 27
                        }, {
                            "value": 167,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 30
                        }, {
                            "value": 210,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 33
                        }, {
                            "value": 234,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 36
                        }, {
                            "value": 213,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "y",
                            "index": 39
                        }],
                        "x": [{
                            "value": 176,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 0
                        }, {
                            "value": 192,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 3
                        }, {
                            "value": 230,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 6
                        }, {
                            "value": 281,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 9
                        }, {
                            "value": 317,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 12
                        }, {
                            "value": 306,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 15
                        }, {
                            "value": 236,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 18
                        }, {
                            "value": 194,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 21
                        }, {
                            "value": 161,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 24
                        }, {
                            "value": 101,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 27
                        }, {
                            "value": 67,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 30
                        }, {
                            "value": 80,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 33
                        }, {
                            "value": 122,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 36
                        }, {
                            "value": 176,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 125,
                            "key": "x",
                            "index": 39
                        }]
                    }
                }],
                "name": "anixsyd",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 159,
                    "keyframes": {
                        "rotation": [{
                            "value": -10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 159,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 159,
                            "key": "rotation",
                            "index": 10
                        }, {
                            "value": 10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 159,
                            "key": "rotation",
                            "index": 20
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 159,
                            "key": "rotation",
                            "index": 30
                        }, {
                            "value": -10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 159,
                            "key": "rotation",
                            "index": 40
                        }]
                    }
                }],
                "name": "anijq",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 175,
                    "keyframes": {
                        "rotation": [{
                            "value": -5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 175,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 175,
                            "key": "rotation",
                            "index": 5
                        }, {
                            "value": 5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 175,
                            "key": "rotation",
                            "index": 10
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 175,
                            "key": "rotation",
                            "index": 15
                        }, {
                            "value": -5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 175,
                            "key": "rotation",
                            "index": 20
                        }]
                    }
                }],
                "name": "aniBtnSY",
                "id": 3,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 206,
                    "keyframes": {
                        "scaleY": [{
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleY",
                            "index": 0
                        }, {
                            "value": 0.9,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleY",
                            "index": 5
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleY",
                            "index": 10
                        }, {
                            "value": 0.9,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleY",
                            "index": 15
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleY",
                            "index": 20
                        }],
                        "scaleX": [{
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleX",
                            "index": 0
                        }, {
                            "value": 0.9,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleX",
                            "index": 5
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleX",
                            "index": 10
                        }, {
                            "value": 0.9,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleX",
                            "index": 15
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "scaleX",
                            "index": 20
                        }],
                        "rotation": [{
                            "value": -10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "rotation",
                            "index": 5
                        }, {
                            "value": 10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "rotation",
                            "index": 10
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "rotation",
                            "index": 15
                        }, {
                            "value": -10,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 206,
                            "key": "rotation",
                            "index": 20
                        }]
                    }
                }],
                "name": "anijb",
                "id": 4,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 216,
                    "keyframes": {
                        "rotation": [{
                            "value": 6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 216,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": -6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 216,
                            "key": "rotation",
                            "index": 6
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 216,
                            "key": "rotation",
                            "index": 9
                        }]
                    }
                }],
                "name": "Icon",
                "id": 5,
                "frameRate": 24,
                "action": 0
            }],
            "$LOCKED": false,
            "$HIDDEN": false
        }, e.GameLevelUI = i, h("ui.GameLevelUI", i);
        var n = function(e) {
            function GameLoadingUI() {
                return _classCallCheck(this, GameLoadingUI), _possibleConstructorReturn(this, _getPrototypeOf(GameLoadingUI).call(this));
            }
            return _inherits(GameLoadingUI, Laya.View), _createClass(GameLoadingUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameLoadingUI.prototype), "createChildren", this).call(this), this.createView(GameLoadingUI.uiView);
                }
            }]), GameLoadingUI;
        }();
        n.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 2,
            "selecteID": 3,
            "searchKey": "View",
            "props": {
                "zOrder": 2,
                "width": 640,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 7,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "top": 0,
                    "skin": "GameLoading/bg_loading.png",
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 3,
                "child": []
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box",
                "props": {
                    "width": 5,
                    "height": 5,
                    "centerY": 20,
                    "centerX": 0,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "nodeParent": 2,
                "label": "Box",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 6,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": -365,
                        "x": -120,
                        "skin": "GameLoading/icon_loading.png"
                    },
                    "nodeParent": 6,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 4,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 100,
                        "x": -99,
                        "skin": "GameLoading/loading_1.png"
                    },
                    "nodeParent": 6,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 5,
                    "child": []
                }]
            }],
            "animations": [{
                "nodes": [{
                    "target": 5,
                    "keyframes": {
                        "skin": [{
                            "value": "GameLoading/loading_1.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 5,
                            "key": "skin",
                            "index": 0
                        }, {
                            "value": "GameLoading/loading_2.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 5,
                            "key": "skin",
                            "index": 5
                        }, {
                            "value": "GameLoading/loading_3.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 5,
                            "key": "skin",
                            "index": 10
                        }, {
                            "value": "GameLoading/loading_2.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 5,
                            "key": "skin",
                            "index": 15
                        }, {
                            "value": "GameLoading/loading_1.png",
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 5,
                            "key": "skin",
                            "index": 20
                        }]
                    }
                }],
                "name": "aniloading",
                "id": 1,
                "frameRate": 24,
                "action": 2
            }]
        }, e.GameLoadingUI = n, h("ui.GameLoadingUI", n);
        var o = function(e) {
            function GameMainUI() {
                return _classCallCheck(this, GameMainUI), _possibleConstructorReturn(this, _getPrototypeOf(GameMainUI).call(this));
            }
            return _inherits(GameMainUI, Laya.View), _createClass(GameMainUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameMainUI.prototype), "createChildren", this).call(this), this.createView(GameMainUI.uiView);
                }
            }]), GameMainUI;
        }();
        o.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 43,
            "selecteID": 46,
            "searchKey": "View",
            "props": {
                "zOrder": 2,
                "y": 0,
                "x": 0,
                "width": 640,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 170,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Box",
                "searchKey": "Box,mainUI",
                "props": {
                    "zOrder": 1,
                    "var": "mainUI",
                    "top": -1,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "mainUI",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 23,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 420,
                        "width": 156,
                        "skin": "AllGame/main_ui7.png",
                        "sizeGrid": "0,22,0,22",
                        "right": 47,
                        "height": 50
                    },
                    "nodeParent": 23,
                    "label": "Image",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 6,
                    "child": [{
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 6,
                            "x": 15,
                            "texture": "AllGame/Goldcoin.png"
                        },
                        "nodeParent": 6,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 8,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text,mygold",
                        "props": {
                            "y": 10,
                            "x": 55,
                            "width": 95,
                            "var": "mygold",
                            "valign": "middle",
                            "text": "100",
                            "runtime": "laya.display.Text",
                            "overflow": "hidden",
                            "height": 32,
                            "fontSize": 20,
                            "color": "#ffffff",
                            "align": "center"
                        },
                        "nodeParent": 6,
                        "label": "mygold",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 9,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,upds",
                    "props": {
                        "y": 527,
                        "width": 210,
                        "var": "upds",
                        "skin": "AllGame/upgrade_button1.png",
                        "right": 20,
                        "height": 110,
                        "anchorY": 0.4,
                        "anchorX": 0.5
                    },
                    "nodeParent": 23,
                    "label": "upds",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 3,
                    "child": [{
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 10,
                            "x": 1,
                            "width": 49,
                            "texture": "AllGame/rise_icon.png",
                            "height": 69
                        },
                        "nodeParent": 3,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 12,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Sprite",
                        "searchKey": "Sprite,updsdf",
                        "props": {
                            "y": 48,
                            "x": 94,
                            "width": 31,
                            "visible": false,
                            "var": "updsdf",
                            "texture": "AllGame/Goldcoin.png",
                            "height": 31
                        },
                        "nodeParent": 3,
                        "label": "updsdf",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 10,
                        "child": [{
                            "type": "Text",
                            "searchKey": "Text,updsgold",
                            "props": {
                                "y": 2,
                                "x": 37,
                                "width": 76,
                                "var": "updsgold",
                                "valign": "middle",
                                "text": "100",
                                "runtime": "laya.display.Text",
                                "overflow": "hidden",
                                "height": 32,
                                "fontSize": 26,
                                "color": "#ffffff",
                                "align": "left"
                            },
                            "nodeParent": 10,
                            "label": "updsgold",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 11,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text,updslv",
                        "props": {
                            "y": 4,
                            "x": 44,
                            "width": 150,
                            "var": "updslv",
                            "valign": "middle",
                            "text": "Num Level:11",
                            "runtime": "laya.display.Text",
                            "overflow": "hidden",
                            "height": 35,
                            "fontSize": 25,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 3,
                        "label": "updslv",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 34,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Sprite",
                        "searchKey": "Sprite,updssp",
                        "props": {
                            "y": 48,
                            "x": 153,
                            "width": 31,
                            "visible": false,
                            "var": "updssp",
                            "texture": "AllGame/smallGame.png",
                            "height": 31
                        },
                        "nodeParent": 3,
                        "label": "updssp",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 165,
                        "child": [{
                            "type": "Text",
                            "searchKey": "Text",
                            "props": {
                                "y": 0,
                                "x": -76,
                                "width": 76,
                                "valign": "middle",
                                "text": "FREE",
                                "runtime": "laya.display.Text",
                                "overflow": "hidden",
                                "height": 32,
                                "fontSize": 26,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "nodeParent": 165,
                            "label": "Text",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 166,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,upsz",
                    "props": {
                        "y": 651,
                        "width": 210,
                        "var": "upsz",
                        "skin": "AllGame/upgrade_button2.png",
                        "right": 20,
                        "height": 110,
                        "anchorY": 0.4,
                        "anchorX": 0.5
                    },
                    "nodeParent": 23,
                    "label": "upsz",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 4,
                    "child": [{
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 10,
                            "x": 2,
                            "width": 49,
                            "texture": "AllGame/rise_icon.png",
                            "height": 69
                        },
                        "nodeParent": 4,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 14,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Sprite",
                        "searchKey": "Sprite,upszdf",
                        "props": {
                            "y": 48,
                            "x": 94,
                            "width": 31,
                            "visible": false,
                            "var": "upszdf",
                            "texture": "AllGame/Goldcoin.png",
                            "height": 31
                        },
                        "nodeParent": 4,
                        "label": "upszdf",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 15,
                        "child": [{
                            "type": "Text",
                            "searchKey": "Text,upszgold",
                            "props": {
                                "y": 2,
                                "x": 36,
                                "width": 76,
                                "var": "upszgold",
                                "valign": "middle",
                                "text": "100",
                                "runtime": "laya.display.Text",
                                "overflow": "hidden",
                                "height": 32,
                                "fontSize": 25,
                                "color": "#ffffff",
                                "align": "left"
                            },
                            "nodeParent": 15,
                            "label": "upszgold",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 16,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text,upszlv",
                        "props": {
                            "y": -1,
                            "x": 45,
                            "width": 150,
                            "var": "upszlv",
                            "valign": "middle",
                            "text": "Dice Level:11",
                            "runtime": "laya.display.Text",
                            "overflow": "hidden",
                            "height": 35,
                            "fontSize": 25,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 4,
                        "label": "upszlv",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 17,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Sprite",
                        "searchKey": "Sprite,upszsp",
                        "props": {
                            "y": 48,
                            "x": 153,
                            "width": 31,
                            "visible": false,
                            "var": "upszsp",
                            "texture": "AllGame/smallGame.png",
                            "height": 31
                        },
                        "nodeParent": 4,
                        "label": "upszsp",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 167,
                        "child": [{
                            "type": "Text",
                            "searchKey": "Text",
                            "props": {
                                "y": 0,
                                "x": -76,
                                "width": 76,
                                "valign": "middle",
                                "text": "FREE",
                                "runtime": "laya.display.Text",
                                "overflow": "hidden",
                                "height": 32,
                                "fontSize": 26,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "nodeParent": 167,
                            "label": "Text",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 168,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,btnPlayWX",
                    "props": {
                        "y": 927,
                        "x": 245,
                        "width": 150,
                        "visible": false,
                        "stateNum": 1,
                        "skin": "AllGame/start_button1.png",
                        "name": "btnPlayWX",
                        "labelSize": 25,
                        "labelPadding": "-2",
                        "labelFont": "SimHei",
                        "labelColors": "#ffffff,#ffffff,#ffffff",
                        "labelBold": true,
                        "height": 60,
                        "centerX": 0,
                        "bottom": 150
                    },
                    "nodeParent": 23,
                    "label": "btnPlayWX",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 153,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,ShareP",
                    "props": {
                        "x": 220,
                        "width": 150,
                        "visible": false,
                        "var": "ShareP",
                        "stateNum": 1,
                        "skin": "AllGame/start_button1.png",
                        "labelSize": 18,
                        "labelPadding": "-2,-18",
                        "labelFont": "SimHei",
                        "labelColors": "#ffffff,#ffffff,#ffffff",
                        "labelBold": true,
                        "height": 60,
                        "centerX": 0,
                        "bottom": 170
                    },
                    "nodeParent": 23,
                    "label": "ShareP",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 154,
                    "child": [{
                        "type": "WXOpenDataViewer",
                        "searchKey": "WXOpenDataViewer,WXOPEN",
                        "props": {
                            "y": 7,
                            "x": 14,
                            "width": 35,
                            "var": "WXOPEN",
                            "iconSign": "wx",
                            "height": 35
                        },
                        "nodeParent": 154,
                        "label": "WXOPEN",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 155,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Button",
                    "searchKey": "Button,btnPlay",
                    "props": {
                        "x": 220,
                        "width": 200,
                        "visible": false,
                        "var": "btnPlay",
                        "stateNum": 1,
                        "skin": "AllGame/start_button1.png",
                        "labelSize": 38,
                        "labelPadding": "-5",
                        "labelFont": "SimHei",
                        "labelColors": "#ffffff,#ffffff,#ffffff",
                        "labelBold": true,
                        "label": "START",
                        "height": 75,
                        "centerX": 0,
                        "bottom": 230
                    },
                    "nodeParent": 23,
                    "label": "btnPlay",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 156,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "TextInput",
                    "searchKey": "TextInput,iptName",
                    "props": {
                        "y": 731,
                        "width": 175,
                        "var": "iptName",
                        "type": "text",
                        "skin": "AllGame/textinput.png",
                        "right": 38,
                        "promptColor": "#939393",
                        "prompt": "Name",
                        "overflow": "hidden",
                        "multiline": false,
                        "maxChars": 12,
                        "height": 45,
                        "fontSize": 25,
                        "editable": true,
                        "bold": true,
                        "align": "center"
                    },
                    "nodeParent": 23,
                    "label": "iptName",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 33,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,setting",
                    "props": {
                        "y": 30,
                        "var": "setting",
                        "top": 30,
                        "skin": "AllGame/Setup.png",
                        "left": 20
                    },
                    "nodeParent": 23,
                    "label": "setting",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 19,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,imgskinzj",
                    "props": {
                        "y": 851,
                        "x": 585,
                        "visible": false,
                        "var": "imgskinzj",
                        "skin": "AllGame/skin.png",
                        "right": 20,
                        "bottom": 242,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 23,
                    "label": "imgskinzj",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 164,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,imgskinother",
                    "props": {
                        "y": 462,
                        "x": 20,
                        "visible": false,
                        "var": "imgskinother",
                        "skin": "AllGame/skin.png",
                        "left": 20
                    },
                    "nodeParent": 23,
                    "label": "imgskinother",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 44,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,logovivo",
                    "props": {
                        "visible": false,
                        "var": "logovivo",
                        "top": 214,
                        "centerX": -24
                    },
                    "nodeParent": 23,
                    "label": "logovivo",
                    "isOpen": true,
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 94,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,logoqq",
                    "props": {
                        "visible": false,
                        "var": "logoqq",
                        "top": 240,
                        "centerX": -24
                    },
                    "nodeParent": 23,
                    "label": "logoqq",
                    "isOpen": true,
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 148,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,logo",
                    "props": {
                        "visible": false,
                        "var": "logo",
                        "top": 160,
                        "skin": "AllGame/logo.png",
                        "centerX": 0
                    },
                    "nodeParent": 23,
                    "label": "logo",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 37,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "y": -5,
                            "x": 115,
                            "skin": "AllGame/icon_1.png"
                        },
                        "nodeParent": 37,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 38,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "y": -50,
                            "x": 330,
                            "skin": "AllGame/icon_2.png"
                        },
                        "nodeParent": 37,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 39,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,setingUI",
                "props": {
                    "zOrder": 2,
                    "visible": false,
                    "var": "setingUI",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "setingUI",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 25,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "top": 0,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 25,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 21,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Image",
                    "searchKey": "Image,setingInfo",
                    "props": {
                        "width": 374,
                        "var": "setingInfo",
                        "skin": "AllGame/main_ui6.png",
                        "sizeGrid": "24,24,24,24",
                        "height": 212,
                        "centerY": 0,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 25,
                    "label": "setingInfo",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 26,
                    "child": [{
                        "type": "Image",
                        "searchKey": "Image,btnClose",
                        "props": {
                            "y": 10,
                            "x": 334,
                            "var": "btnClose",
                            "skin": "AllGame/shut.png"
                        },
                        "nodeParent": 26,
                        "label": "btnClose",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 27,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 14,
                            "x": 79,
                            "width": 215,
                            "text": "SETTING",
                            "runtime": "laya.display.Text",
                            "height": 50,
                            "fontSize": 50,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 26,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 28,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,cbbox1",
                        "props": {
                            "y": 105,
                            "x": 228,
                            "var": "cbbox1",
                            "stateNum": 2,
                            "skin": "AllGame/set_icon2.png"
                        },
                        "nodeParent": 26,
                        "label": "cbbox1",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 29,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,cbbox2",
                        "props": {
                            "y": 148,
                            "x": 228,
                            "var": "cbbox2",
                            "stateNum": 2,
                            "skin": "AllGame/set_icon2.png"
                        },
                        "nodeParent": 26,
                        "label": "cbbox2",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 30,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 148,
                            "x": 61,
                            "width": 129,
                            "text": "SOUND",
                            "runtime": "laya.display.Text",
                            "height": 35,
                            "fontSize": 35,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 26,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 31,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 101,
                            "x": 79,
                            "width": 110,
                            "text": "MUSIC",
                            "runtime": "laya.display.Text",
                            "height": 35,
                            "fontSize": 35,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 26,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 32,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,cbbox3",
                        "props": {
                            "y": 212,
                            "x": 38,
                            "visible": false,
                            "var": "cbbox3",
                            "stateNum": 2
                        },
                        "nodeParent": 26,
                        "label": "cbbox3",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 35,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 162.5,
                            "x": 16,
                            "width": 72,
                            "visible": false,
                            "text": "",
                            "runtime": "laya.display.Text",
                            "height": 35,
                            "fontSize": 35,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 26,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 36,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,pfUI",
                "props": {
                    "zOrder": 2,
                    "visible": false,
                    "var": "pfUI",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "pfUI",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 43,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "top": 0,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 43,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 45,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,skinui",
                    "props": {
                        "width": 431,
                        "var": "skinui",
                        "skin": "AllGame/main_ui9.png",
                        "height": 485,
                        "centerY": 1,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 43,
                    "label": "skinui",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 46,
                    "child": [{
                        "x": 45,
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 16,
                            "x": 150,
                            "width": 130,
                            "text": "SKIN",
                            "runtime": "laya.display.Text",
                            "height": 50,
                            "fontSize": 50,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 46,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 47,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "List",
                        "searchKey": "List,listskin",
                        "props": {
                            "y": 76,
                            "x": 15,
                            "width": 400,
                            "var": "listskin",
                            "spaceY": 10,
                            "spaceX": 10,
                            "repeatX": 3,
                            "height": 265
                        },
                        "nodeParent": 46,
                        "label": "listskin",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 48,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,skinscene",
                            "props": {
                                "y": 1,
                                "x": 5,
                                "skin": "AllGame/main_ui10.png",
                                "renderType": "render",
                                "name": "skinscene"
                            },
                            "nodeParent": 48,
                            "label": "skinscene",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": false,
                            "hasChild": true,
                            "compId": 50,
                            "child": [{
                                "x": 75,
                                "type": "Image",
                                "searchKey": "Image,click",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "visible": false,
                                    "skin": "AllGame/main_ui11.png",
                                    "name": "click"
                                },
                                "nodeParent": 50,
                                "label": "click",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 52,
                                "child": [],
                                "$LOCKED": false,
                                "$HIDDEN": false
                            }, {
                                "x": 75,
                                "type": "Image",
                                "searchKey": "Image,imgskin",
                                "props": {
                                    "y": 16,
                                    "x": 15,
                                    "skin": "AllGame/skin_1.png",
                                    "name": "imgskin"
                                },
                                "nodeParent": 50,
                                "label": "imgskin",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 51,
                                "child": [],
                                "$LOCKED": false,
                                "$HIDDEN": false
                            }, {
                                "x": 75,
                                "type": "Image",
                                "searchKey": "Image,isgou",
                                "props": {
                                    "y": 22,
                                    "x": 9,
                                    "visible": false,
                                    "skin": "AllGame/Unlock.png",
                                    "name": "isgou"
                                },
                                "nodeParent": 50,
                                "label": "isgou",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 56,
                                "child": [],
                                "$LOCKED": false,
                                "$HIDDEN": false
                            }, {
                                "x": 75,
                                "type": "Image",
                                "searchKey": "Image,sp",
                                "props": {
                                    "y": 85,
                                    "x": 84,
                                    "width": 32,
                                    "visible": false,
                                    "skin": "AllGame/smallGame.png",
                                    "name": "sp",
                                    "height": 32
                                },
                                "nodeParent": 50,
                                "label": "sp",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 169,
                                "child": [],
                                "$LOCKED": false,
                                "$HIDDEN": false
                            }],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,btn_unlock",
                        "props": {
                            "y": 354,
                            "x": 88,
                            "var": "btn_unlock",
                            "skin": "AllGame/start_button1.png"
                        },
                        "nodeParent": 46,
                        "label": "btn_unlock",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 49,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": {
                                "y": 20.5,
                                "x": 195,
                                "skin": "AllGame/Goldcoin.png"
                            },
                            "nodeParent": 49,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 53,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }, {
                            "x": 60,
                            "type": "Label",
                            "searchKey": "Label,moneyNum",
                            "props": {
                                "width": 183,
                                "var": "moneyNum",
                                "valign": "middle",
                                "text": "UNLOCK 200",
                                "left": 15,
                                "height": 51,
                                "fontSize": 29,
                                "color": "#ffffff",
                                "centerY": -15,
                                "align": "center"
                            },
                            "nodeParent": 49,
                            "label": "moneyNum",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 54,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,btnqd",
                        "props": {
                            "y": 354,
                            "x": 88,
                            "var": "btnqd",
                            "skin": "AllGame/start_button1.png"
                        },
                        "nodeParent": 46,
                        "label": "btnqd",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 57,
                        "child": [{
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "y": 16,
                                "x": 36,
                                "width": 183,
                                "valign": "middle",
                                "text": "OK",
                                "height": 51,
                                "fontSize": 45,
                                "color": "#ffffff",
                                "bold": true,
                                "align": "center"
                            },
                            "nodeParent": 57,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 59,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": true,
                        "$HIDDEN": true
                    }, {
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,btnvido",
                        "props": {
                            "y": 354,
                            "x": 88,
                            "visible": false,
                            "var": "btnvido",
                            "skin": "AllGame/start_button1.png"
                        },
                        "nodeParent": 46,
                        "label": "btnvido",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 124,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": {
                                "y": 16,
                                "x": 189,
                                "width": 49,
                                "skin": "AllGame/smallGame.png",
                                "height": 48
                            },
                            "nodeParent": 124,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 125,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }, {
                            "x": 60,
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "width": 183,
                                "valign": "middle",
                                "text": "FREE",
                                "left": 15,
                                "height": 51,
                                "fontSize": 36,
                                "color": "#ffffff",
                                "centerY": -15,
                                "align": "center"
                            },
                            "nodeParent": 124,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 126,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": true,
                        "$HIDDEN": true
                    }, {
                        "x": 45,
                        "type": "Image",
                        "searchKey": "Image,Back",
                        "props": {
                            "y": 11,
                            "x": 389,
                            "var": "Back",
                            "skin": "AllGame/shut.png"
                        },
                        "nodeParent": 46,
                        "label": "Back",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 55,
                        "child": [],
                        "$LOCKED": true,
                        "$HIDDEN": true
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,GetMoneyUI",
                "props": {
                    "zOrder": 2,
                    "visible": false,
                    "var": "GetMoneyUI",
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "GetMoneyUI",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 128,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "top": 1,
                        "skin": "AllGame/main_ui8.png",
                        "sizeGrid": "3,3,3,3",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 128,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 129,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Image",
                    "searchKey": "Image,moneyui",
                    "props": {
                        "width": 440,
                        "var": "moneyui",
                        "skin": "AllGame/main_ui9.png",
                        "scaleY": 1,
                        "scaleX": 1,
                        "height": 400,
                        "centerY": 1,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 128,
                    "label": "moneyui",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 130,
                    "child": [{
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 31,
                            "x": 50,
                            "wordWrap": true,
                            "width": 340,
                            "valign": "middle",
                            "text": "COIN NOT ENOUGH",
                            "runtime": "laya.display.Text",
                            "height": 126,
                            "fontSize": 40,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 130,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 131,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": {
                            "y": 164,
                            "x": 126,
                            "width": 50,
                            "texture": "AllGame/Goldcoin.png",
                            "height": 50
                        },
                        "nodeParent": 130,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 147,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Text",
                        "searchKey": "Text",
                        "props": {
                            "y": 146,
                            "x": 151,
                            "wordWrap": true,
                            "width": 200,
                            "valign": "middle",
                            "text": "+100",
                            "runtime": "laya.display.Text",
                            "height": 85,
                            "fontSize": 60,
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 130,
                        "label": "Text",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 146,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,btngetMoney",
                        "props": {
                            "y": 253,
                            "x": 103,
                            "width": 233,
                            "visible": true,
                            "var": "btngetMoney",
                            "skin": "AllGame/start_button1.png",
                            "height": 104
                        },
                        "nodeParent": 130,
                        "label": "btngetMoney",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 142,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image",
                            "props": {
                                "y": 14.5,
                                "x": 40,
                                "width": 49,
                                "skin": "AllGame/smallGame.png",
                                "height": 48
                            },
                            "nodeParent": 142,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 143,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }, {
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "width": 125,
                                "valign": "middle",
                                "text": "FREE",
                                "left": 89,
                                "height": 51,
                                "fontSize": 36,
                                "color": "#ffffff",
                                "centerY": -14,
                                "align": "center"
                            },
                            "nodeParent": 142,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 144,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }, {
                        "type": "Image",
                        "searchKey": "Image,moneyBack",
                        "props": {
                            "y": 13.5,
                            "x": 396,
                            "visible": true,
                            "var": "moneyBack",
                            "skin": "AllGame/shut.png"
                        },
                        "nodeParent": 130,
                        "label": "moneyBack",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 145,
                        "child": [],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,More",
                "props": {
                    "zOrder": 2,
                    "width": 100,
                    "visible": false,
                    "var": "More",
                    "left": 0,
                    "height": 100,
                    "bottom": 220
                },
                "nodeParent": 2,
                "label": "More",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 60,
                "child": [],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,BOX",
                "props": {
                    "zOrder": 2,
                    "y": 866,
                    "x": 536,
                    "width": 100,
                    "visible": false,
                    "var": "BOX",
                    "renderType": "render",
                    "presetID": 12,
                    "height": 120,
                    "bottom": 210,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "nodeParent": 2,
                "label": "BOX",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 74,
                "child": [{
                    "type": "Image",
                    "searchKey": "Image,image",
                    "props": {
                        "width": 100,
                        "var": "image",
                        "top": 0,
                        "presetID": 13,
                        "height": 100,
                        "centerX": 0
                    },
                    "nodeParent": 74,
                    "label": "image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 75,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }, {
                    "type": "Label",
                    "searchKey": "Label,Name",
                    "props": {
                        "var": "Name",
                        "valign": "middle",
                        "right": 0,
                        "presetID": 14,
                        "overflow": "hidden",
                        "left": 0,
                        "height": 20,
                        "fontSize": 15,
                        "color": "#ffffff",
                        "bottom": 0,
                        "bold": true,
                        "align": "center"
                    },
                    "nodeParent": 74,
                    "label": "Name",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 76,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": false,
                "$HIDDEN": false
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,more",
                "props": {
                    "zOrder": 3,
                    "width": 100,
                    "visible": false,
                    "var": "more",
                    "skin": "wxmore/index-arrow.png",
                    "left": 0,
                    "height": 100,
                    "centerY": 0
                },
                "nodeParent": 2,
                "label": "more",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 81,
                "child": [{
                    "type": "Sprite",
                    "searchKey": "Sprite",
                    "props": {
                        "y": 0,
                        "x": 65,
                        "texture": "wxmore/index-disc.png"
                    },
                    "nodeParent": 81,
                    "label": "Sprite",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 82,
                    "child": [],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,bj",
                "props": {
                    "zOrder": 74,
                    "width": 460,
                    "visible": false,
                    "var": "bj",
                    "skin": "AllGame/main_ui9.png",
                    "sizeGrid": "2,2,2,2",
                    "left": -460,
                    "height": 552,
                    "centerY": 0
                },
                "nodeParent": 2,
                "label": "bj",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 87,
                "child": [{
                    "type": "List",
                    "searchKey": "List,LIST",
                    "props": {
                        "width": 423,
                        "var": "LIST",
                        "spaceY": 25,
                        "spaceX": 25,
                        "repeatX": 2,
                        "presetID": 7,
                        "height": 508,
                        "elasticEnabled": true,
                        "centerY": -2,
                        "centerX": -1
                    },
                    "nodeParent": 87,
                    "label": "LIST",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 97,
                    "child": [{
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 200,
                            "renderType": "render",
                            "presetID": 17,
                            "height": 150
                        },
                        "nodeParent": 97,
                        "label": "Box",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 102,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image,thumb",
                            "props": {
                                "width": 200,
                                "presetID": 19,
                                "name": "thumb",
                                "height": 150
                            },
                            "nodeParent": 102,
                            "label": "thumb",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 103,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,BOT",
                "props": {
                    "zOrder": 5,
                    "y": 0,
                    "x": 0,
                    "visible": false,
                    "var": "BOT",
                    "skin": "wxmore/end-box.png",
                    "sizeGrid": "20,20,20,20",
                    "right": 0,
                    "presetID": 16,
                    "left": 0,
                    "height": 160,
                    "bottom": 1
                },
                "nodeParent": 2,
                "label": "BOT",
                "isOpen": false,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 116,
                "child": [{
                    "type": "List",
                    "searchKey": "List,LISTBOT",
                    "props": {
                        "zOrder": 3,
                        "var": "LISTBOT",
                        "spaceY": 0,
                        "spaceX": 5,
                        "right": 10,
                        "repeatY": 1,
                        "presetID": 11,
                        "left": 10,
                        "height": 150,
                        "elasticEnabled": true,
                        "centerY": 0
                    },
                    "nodeParent": 116,
                    "label": "LISTBOT",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 117,
                    "child": [{
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "width": 200,
                            "renderType": "render",
                            "presetID": 12,
                            "height": 150
                        },
                        "nodeParent": 117,
                        "label": "Box",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 118,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image,thumb",
                            "props": {
                                "y": 5,
                                "x": 5,
                                "width": 200,
                                "presetID": 13,
                                "name": "thumb",
                                "height": 150
                            },
                            "nodeParent": 118,
                            "label": "thumb",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 120,
                            "child": [],
                            "$LOCKED": false,
                            "$HIDDEN": false
                        }],
                        "$LOCKED": false,
                        "$HIDDEN": false
                    }],
                    "$LOCKED": false,
                    "$HIDDEN": false
                }],
                "$LOCKED": true,
                "$HIDDEN": true
            }],
            "animations": [{
                "nodes": [{
                    "target": 25,
                    "keyframes": {
                        "visible": [{
                            "value": true,
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 25,
                            "key": "visible",
                            "index": 0
                        }]
                    }
                }, {
                    "target": 26,
                    "keyframes": {
                        "scaleY": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 26,
                            "key": "scaleY",
                            "index": 0
                        }, {
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 26,
                            "key": "scaleY",
                            "index": 2
                        }, {
                            "value": 1,
                            "tweenMethod": "backOut",
                            "tween": true,
                            "target": 26,
                            "key": "scaleY",
                            "index": 8
                        }],
                        "scaleX": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 26,
                            "key": "scaleX",
                            "index": 0
                        }, {
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 26,
                            "key": "scaleX",
                            "index": 2
                        }, {
                            "value": 1,
                            "tweenMethod": "backOut",
                            "tween": true,
                            "target": 26,
                            "key": "scaleX",
                            "index": 8
                        }]
                    }
                }],
                "name": "aniShowseting",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 46,
                    "keyframes": {
                        "scaleY": [{
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 46,
                            "key": "scaleY",
                            "index": 0
                        }, {
                            "value": 1,
                            "tweenMethod": "backOut",
                            "tween": true,
                            "target": 46,
                            "key": "scaleY",
                            "index": 5
                        }],
                        "scaleX": [{
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 46,
                            "key": "scaleX",
                            "index": 0
                        }, {
                            "value": 1,
                            "tweenMethod": "backOut",
                            "tween": true,
                            "target": 46,
                            "key": "scaleX",
                            "index": 5
                        }]
                    }
                }, {
                    "target": 43,
                    "keyframes": {
                        "visible": [{
                            "value": true,
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 43,
                            "key": "visible",
                            "index": 0
                        }]
                    }
                }],
                "name": "anishowSkin",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 81,
                    "keyframes": {
                        "left": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 81,
                            "key": "left",
                            "index": 0
                        }, {
                            "value": 460,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 81,
                            "key": "left",
                            "index": 10
                        }]
                    }
                }, {
                    "target": 87,
                    "keyframes": {
                        "left": [{
                            "value": -460,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 87,
                            "key": "left",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 87,
                            "key": "left",
                            "index": 10
                        }]
                    }
                }],
                "name": "SHOW",
                "id": 3,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 81,
                    "keyframes": {
                        "left": [{
                            "value": 460,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 81,
                            "key": "left",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 81,
                            "key": "left",
                            "index": 10
                        }]
                    }
                }, {
                    "target": 87,
                    "keyframes": {
                        "left": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 87,
                            "key": "left",
                            "index": 0
                        }, {
                            "value": -460,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 87,
                            "key": "left",
                            "index": 10
                        }]
                    }
                }],
                "name": "HIDE",
                "id": 4,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 74,
                    "keyframes": {
                        "rotation": [{
                            "value": -6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 74,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 6,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 74,
                            "key": "rotation",
                            "index": 6
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 74,
                            "key": "rotation",
                            "index": 9
                        }]
                    }
                }],
                "name": "Icon",
                "id": 5,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 128,
                    "keyframes": {
                        "visible": [{
                            "value": true,
                            "tweenMethod": "linearNone",
                            "tween": false,
                            "target": 128,
                            "key": "visible",
                            "index": 0
                        }]
                    }
                }, {
                    "target": 130,
                    "keyframes": {
                        "scaleY": [{
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 130,
                            "key": "scaleY",
                            "index": 0
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 130,
                            "key": "scaleY",
                            "index": 5
                        }],
                        "scaleX": [{
                            "value": 0.3,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 130,
                            "key": "scaleX",
                            "index": 0
                        }, {
                            "value": 1,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 130,
                            "key": "scaleX",
                            "index": 5
                        }]
                    }
                }],
                "name": "aniShowGetMoney",
                "id": 6,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [{
                    "target": 164,
                    "keyframes": {
                        "rotation": [{
                            "value": -5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 164,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 164,
                            "key": "rotation",
                            "index": 10
                        }, {
                            "value": 5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 164,
                            "key": "rotation",
                            "index": 20
                        }, {
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 164,
                            "key": "rotation",
                            "index": 30
                        }, {
                            "value": -5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 164,
                            "key": "rotation",
                            "index": 40
                        }]
                    }
                }],
                "name": "aniiskinbtnzj",
                "id": 7,
                "frameRate": 24,
                "action": 0
            }],
            "$LOCKED": false,
            "$HIDDEN": false
        }, e.GameMainUI = o, h("ui.GameMainUI", o);
        var a = function(e) {
            function GameRebornUI() {
                return _classCallCheck(this, GameRebornUI), _possibleConstructorReturn(this, _getPrototypeOf(GameRebornUI).call(this));
            }
            return _inherits(GameRebornUI, Laya.View), _createClass(GameRebornUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameRebornUI.prototype), "createChildren", this).call(this), this.createView(GameRebornUI.uiView);
                }
            }]), GameRebornUI;
        }();
        a.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 170,
            "selecteID": 171,
            "searchKey": "View",
            "props": {
                "width": 640,
                "top": 0,
                "right": 0,
                "mouseThrough": false,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 176,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "top": 0,
                    "skin": "AllGame/main_ui8.png",
                    "sizeGrid": "3,3,3,3",
                    "right": 0,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 175,
                "child": []
            }, {
                "x": 15,
                "type": "Label",
                "searchKey": "Label,thank",
                "props": {
                    "x": 257,
                    "var": "thank",
                    "text": "NO,THANKS",
                    "fontSize": 28,
                    "color": "#ffffff",
                    "centerX": 0,
                    "bottom": 280,
                    "bold": false
                },
                "nodeParent": 2,
                "label": "thank",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 149,
                "child": []
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,reborn",
                "props": {
                    "x": 193,
                    "var": "reborn",
                    "skin": "AllGame/award_button1.png",
                    "centerX": 0,
                    "bottom": 330
                },
                "nodeParent": 2,
                "label": "reborn",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 143,
                "child": [{
                    "x": 30,
                    "type": "Label",
                    "searchKey": "Label",
                    "props": {
                        "text": "REVIVE",
                        "right": 26,
                        "fontSize": 34,
                        "color": "#ffffff",
                        "centerY": -15,
                        "bold": true
                    },
                    "nodeParent": 143,
                    "label": "Label",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 145,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": {
                        "skin": "AllGame/smallGame.png",
                        "left": 35,
                        "centerY": -15
                    },
                    "nodeParent": 143,
                    "label": "Image",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 148,
                    "child": []
                }]
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "top": 150,
                    "skin": "AllGame/Continue.png",
                    "centerX": 0
                },
                "nodeParent": 2,
                "label": "Image",
                "isDirectory": false,
                "isAniNode": true,
                "hasChild": false,
                "compId": 167,
                "child": []
            }, {
                "x": 15,
                "type": "Image",
                "searchKey": "Image,bj",
                "props": {
                    "zOrder": 74,
                    "x": 0,
                    "width": 460,
                    "visible": true,
                    "var": "bj",
                    "top": 251,
                    "skin": "AllGame/main_ui1.png",
                    "sizeGrid": "50,50,50,50",
                    "centerX": 0,
                    "bottom": 554
                },
                "nodeParent": 2,
                "label": "bj",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 168,
                "child": [{
                    "x": 30,
                    "type": "List",
                    "searchKey": "List,LIST",
                    "props": {
                        "width": 408,
                        "var": "LIST",
                        "top": 12,
                        "spaceY": 5,
                        "spaceX": 5,
                        "repeatX": 2,
                        "presetID": 7,
                        "height": 308,
                        "elasticEnabled": true,
                        "centerX": 0
                    },
                    "nodeParent": 168,
                    "label": "LIST",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 169,
                    "child": [{
                        "x": 45,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "x": 0,
                            "width": 200,
                            "renderType": "render",
                            "presetID": 17,
                            "height": 150
                        },
                        "nodeParent": 169,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": false,
                        "hasChild": true,
                        "compId": 170,
                        "child": [{
                            "x": 60,
                            "type": "Image",
                            "searchKey": "Image,thumb",
                            "props": {
                                "x": 0,
                                "width": 200,
                                "presetID": 19,
                                "name": "thumb",
                                "height": 150
                            },
                            "nodeParent": 170,
                            "label": "thumb",
                            "isDirectory": false,
                            "isAniNode": false,
                            "hasChild": false,
                            "compId": 171,
                            "child": []
                        }]
                    }]
                }]
            }],
            "animations": [{
                "nodes": [],
                "name": "ani1",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }]
        }, e.GameRebornUI = a, h("ui.GameRebornUI", a);
        var s = function(e) {
            function GameTipsUI() {
                return _classCallCheck(this, GameTipsUI), _possibleConstructorReturn(this, _getPrototypeOf(GameTipsUI).call(this));
            }
            return _inherits(GameTipsUI, Laya.View), _createClass(GameTipsUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameTipsUI.prototype), "createChildren", this).call(this), this.createView(GameTipsUI.uiView);
                }
            }]), GameTipsUI;
        }();
        s.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                mouseEnabled: !1,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        width: 553,
                        var: "tip",
                        skin: "AllGame/main_ui7.png",
                        sizeGrid: "0,25,0,25",
                        height: 45,
                        centerY: -200,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5,
                        alpha: 1
                    },
                    compId: 3,
                    child: [{
                        type: "Label",
                        props: {
                            wordWrap: !0,
                            var: "txtTips",
                            valign: "middle",
                            top: 0,
                            text: "",
                            right: 0,
                            padding: "4",
                            left: 0,
                            fontSize: 30,
                            color: "#ffffff",
                            bottom: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 4
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 3,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["AllGame/main_ui7.png"],
            loadList3D: []
        }, e.GameTipsUI = s, h("ui.GameTipsUI", s);
        var r = function(e) {
            function GameVideoUI() {
                return _classCallCheck(this, GameVideoUI), _possibleConstructorReturn(this, _getPrototypeOf(GameVideoUI).call(this));
            }
            return _inherits(GameVideoUI, Laya.View), _createClass(GameVideoUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(GameVideoUI.prototype), "createChildren", this).call(this), this.createView(GameVideoUI.uiView);
                }
            }]), GameVideoUI;
        }();
        r.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 142,
            "selecteID": 146,
            "searchKey": "View",
            "props": {
                "width": 640,
                "top": 0,
                "right": 0,
                "mouseThrough": false,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 148,
            "loadList3D": [],
            "loadList": [],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                "x": 15,
                "type": "Image",
                "searchKey": "Image",
                "props": {
                    "skin": "AllGame/main_ui9.png",
                    "sizeGrid": "50,50,50,50",
                    "right": 55,
                    "left": 55,
                    "height": 750,
                    "centerY": 30
                },
                "nodeParent": 2,
                "label": "Image",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 142,
                "child": [{
                    "x": 30,
                    "type": "Image",
                    "searchKey": "Image,btnNext",
                    "props": {
                        "var": "btnNext",
                        "skin": "AllGame/award_button1.png",
                        "centerX": 0,
                        "bottom": 20
                    },
                    "nodeParent": 142,
                    "label": "btnNext",
                    "isOpen": null,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 143,
                    "child": [{
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "text": "OK",
                            "fontSize": 52,
                            "color": "#ffffff",
                            "centerY": -10,
                            "centerX": 0,
                            "bold": true
                        },
                        "nodeParent": 143,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 145,
                        "child": []
                    }]
                }, {
                    "x": 30,
                    "type": "Label",
                    "searchKey": "Label,labDesc",
                    "props": {
                        "wordWrap": true,
                        "width": 467,
                        "var": "labDesc",
                        "valign": "middle",
                        "text": "Slide to move and hit the treasure chest",
                        "height": 77,
                        "fontSize": 28,
                        "color": "#ffffff",
                        "centerX": 0,
                        "bottom": 150,
                        "bold": false,
                        "align": "center"
                    },
                    "nodeParent": 142,
                    "label": "labDesc",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 146,
                    "child": []
                }, {
                    "x": 30,
                    "type": "Box",
                    "searchKey": "Box,boxVideo",
                    "props": {
                        "width": 240,
                        "var": "boxVideo",
                        "top": 40,
                        "scaleY": 2,
                        "scaleX": 2,
                        "height": 240,
                        "centerX": 0
                    },
                    "nodeParent": 142,
                    "label": "boxVideo",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 147,
                    "child": []
                }]
            }],
            "animations": [{
                "nodes": [],
                "name": "ani1",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }]
        }, e.GameVideoUI = r, h("ui.GameVideoUI", r);
        var l = function(e) {
            function MoreGameUI() {
                return _classCallCheck(this, MoreGameUI), _possibleConstructorReturn(this, _getPrototypeOf(MoreGameUI).call(this));
            }
            return _inherits(MoreGameUI, Laya.View), _createClass(MoreGameUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(MoreGameUI.prototype), "createChildren", this).call(this), this.createView(MoreGameUI.uiView);
                }
            }]), MoreGameUI;
        }();
        l.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                mouseThrough: !1,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "wxmore/BJ.png",
                    right: 0,
                    presetID: 3,
                    left: 0,
                    bottom: 0
                },
                compId: 231
            }, {
                type: "Button",
                props: {
                    var: "back",
                    top: 45,
                    stateNum: 1,
                    skin: "wxmore/icon-back.png",
                    presetID: 4,
                    left: 15
                },
                compId: 235
            }, {
                type: "Image",
                props: {
                    top: 115,
                    skin: "wxmore/title-friend.png",
                    presetID: 9,
                    centerX: 0
                },
                compId: 250
            }, {
                type: "Image",
                props: {
                    top: 320,
                    skin: "wxmore/title-recommend.png",
                    presetID: 10,
                    centerX: 0
                },
                compId: 251
            }, {
                type: "List",
                props: {
                    zOrder: 3,
                    var: "LIST1",
                    top: 157,
                    spaceY: 0,
                    spaceX: 5,
                    right: 2,
                    repeatY: 1,
                    presetID: 11,
                    left: 2,
                    height: 130,
                    elasticEnabled: !0
                },
                compId: 280,
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        width: 130,
                        renderType: "render",
                        presetID: 12,
                        height: 150
                    },
                    compId: 281,
                    child: [{
                        type: "Image",
                        props: {
                            width: 130,
                            top: 0,
                            skin: "wxmore/icon.png",
                            presetID: 13,
                            height: 130,
                            centerX: 0
                        },
                        compId: 282
                    }, {
                        type: "Image",
                        props: {
                            width: 120,
                            top: 5,
                            presetID: 13,
                            name: "image",
                            left: 5,
                            height: 120
                        },
                        compId: 283
                    }, {
                        type: "Label",
                        props: {
                            valign: "middle",
                            text: "",
                            right: 0,
                            presetID: 14,
                            overflow: "hidden",
                            name: "name",
                            left: 0,
                            height: 20,
                            fontSize: 15,
                            color: "#ffffff",
                            bottom: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 284
                    }]
                }]
            }, {
                type: "List",
                props: {
                    var: "LIST2",
                    top: 360,
                    spaceY: 5,
                    spaceX: 5,
                    repeatX: 3,
                    presetID: 7,
                    elasticEnabled: !0,
                    centerX: 0,
                    bottom: 10
                },
                compId: 249,
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        width: 200,
                        renderType: "render",
                        presetID: 17,
                        height: 225
                    },
                    compId: 262,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            top: 0,
                            skin: "wxmore/icon.png",
                            right: 0,
                            presetID: 18,
                            left: 0,
                            bottom: 0
                        },
                        compId: 263
                    }, {
                        type: "Image",
                        props: {
                            width: 180,
                            top: 10,
                            presetID: 19,
                            name: "image",
                            height: 180,
                            centerX: 0
                        },
                        compId: 264
                    }, {
                        type: "Image",
                        props: {
                            visible: !1,
                            top: -5,
                            skin: "wxmore/icon-hot.png",
                            right: -5,
                            presetID: 20,
                            name: "mark"
                        },
                        compId: 265
                    }, {
                        type: "Image",
                        props: {
                            skin: "wxmore/1.png",
                            right: 10,
                            presetID: 21,
                            name: "namebj",
                            left: 10,
                            height: 25,
                            bottom: 10
                        },
                        compId: 266
                    }, {
                        type: "Label",
                        props: {
                            y: 170,
                            x: 10,
                            valign: "middle",
                            text: "",
                            right: 10,
                            presetID: 22,
                            overflow: "hidden",
                            name: "name",
                            left: 10,
                            height: 25,
                            fontSize: 22,
                            color: "#fbfbfb",
                            bottom: 10,
                            bold: !0,
                            align: "center"
                        },
                        compId: 267
                    }]
                }]
            }, {
                type: "Button",
                props: {
                    width: 300,
                    var: "JX",
                    stateNum: 1,
                    skin: "wxmore/3.png",
                    presetID: 4,
                    labelSize: 50,
                    labelFont: "Microsoft YaHei",
                    labelBold: !0,
                    labelAlign: "center",
                    label: "Random",
                    height: 85,
                    centerX: 0,
                    bottom: 200
                },
                compId: 269
            }],
            loadList: ["wxmore/BJ.png", "wxmore/icon-back.png", "wxmore/title-friend.png", "wxmore/title-recommend.png", "wxmore/icon.png", "wxmore/icon-hot.png", "wxmore/1.png", "wxmore/3.png"],
            loadList3D: []
        }, e.MoreGameUI = l, h("ui.MoreGameUI", l);
        var d = function(e) {
            function MoreInsertGameUI() {
                return _classCallCheck(this, MoreInsertGameUI), _possibleConstructorReturn(this, _getPrototypeOf(MoreInsertGameUI).call(this));
            }
            return _inherits(MoreInsertGameUI, Laya.View), _createClass(MoreInsertGameUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(MoreInsertGameUI.prototype), "createChildren", this).call(this), this.createView(MoreInsertGameUI.uiView);
                }
            }]), MoreInsertGameUI;
        }();
        d.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                mouseThrough: !1,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "ui/Board.png",
                    right: 0,
                    presetID: 3,
                    left: 0,
                    bottom: 0
                },
                compId: 231
            }, {
                type: "Button",
                props: {
                    width: 65,
                    var: "Close",
                    stateNum: 1,
                    skin: "wxmore/icon.png",
                    presetID: 4,
                    height: 65,
                    centerX: 0,
                    bottom: 200
                },
                compId: 269,
                child: [{
                    type: "Image",
                    props: {
                        top: 5,
                        skin: "ui/CloseIcon.png",
                        right: 5,
                        presetID: 3,
                        left: 5,
                        bottom: 5
                    },
                    compId: 290
                }]
            }, {
                type: "Image",
                props: {
                    width: 520,
                    skin: "wxmore/icon.png",
                    sizeGrid: "50,50,50,50",
                    presetID: 18,
                    height: 590,
                    centerY: 0,
                    centerX: 0
                },
                compId: 263,
                child: [{
                    type: "Image",
                    props: {
                        x: 116,
                        width: 310,
                        top: -65,
                        skin: "wxmore/1.png",
                        presetID: 10,
                        height: 65,
                        centerX: 0
                    },
                    compId: 287,
                    child: [{
                        type: "Label",
                        props: {
                            valign: "middle",
                            top: 0,
                            text: "",
                            strokeColor: "#005bff",
                            stroke: 2,
                            right: 0,
                            left: 0,
                            fontSize: 44,
                            color: "#ffffff",
                            bottom: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 288
                    }]
                }, {
                    type: "List",
                    props: {
                        y: 15,
                        x: 15,
                        width: 490,
                        var: "LIST",
                        spaceY: 5,
                        spaceX: 5,
                        repeatY: 3,
                        repeatX: 3,
                        presetID: 7,
                        height: 560,
                        elasticEnabled: !0,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 249,
                    child: [{
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            width: 160,
                            renderType: "render",
                            presetID: 17,
                            height: 185
                        },
                        compId: 262,
                        child: [{
                            type: "Image",
                            props: {
                                width: 160,
                                presetID: 19,
                                name: "image",
                                height: 160,
                                centerX: 0
                            },
                            compId: 264
                        }, {
                            type: "Image",
                            props: {
                                skin: "wxmore/1.png",
                                right: 0,
                                presetID: 21,
                                name: "namebj",
                                left: 0,
                                height: 25,
                                bottom: 0
                            },
                            compId: 266
                        }, {
                            type: "Label",
                            props: {
                                valign: "middle",
                                text: "",
                                right: 0,
                                presetID: 22,
                                overflow: "hidden",
                                name: "name",
                                left: 0,
                                height: 25,
                                fontSize: 22,
                                color: "#fbfbfb",
                                bottom: 0,
                                bold: !0,
                                align: "center"
                            },
                            compId: 267
                        }]
                    }]
                }]
            }],
            loadList: ["ui/Board.png", "wxmore/icon.png", "ui/CloseIcon.png", "wxmore/1.png"],
            loadList3D: []
        }, e.MoreInsertGameUI = d, h("ui.MoreInsertGameUI", d);
        var c = function(e) {
            function NativeInsertAdUI() {
                return _classCallCheck(this, NativeInsertAdUI), _possibleConstructorReturn(this, _getPrototypeOf(NativeInsertAdUI).call(this));
            }
            return _inherits(NativeInsertAdUI, Laya.View), _createClass(NativeInsertAdUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(NativeInsertAdUI.prototype), "createChildren", this).call(this), this.createView(NativeInsertAdUI.uiView);
                }
            }]), NativeInsertAdUI;
        }();
        c.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "ui/Board.png",
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 10
            }, {
                type: "Box",
                props: {
                    width: 540,
                    var: "AD",
                    height: 320,
                    centerX: 0,
                    bottom: 300
                },
                compId: 43,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        var: "BJ",
                        top: 0,
                        skin: "wxmore/BJ2.png",
                        sizeGrid: "2,2,2,2",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 34
                }, {
                    type: "Image",
                    props: {
                        var: "imgBannerAd",
                        top: 5,
                        skin: "ui/Board.png",
                        rotation: 0,
                        right: 5,
                        left: 5,
                        bottom: 30
                    },
                    compId: 35
                }, {
                    type: "Label",
                    props: {
                        x: 0,
                        var: "textBannerDesc",
                        valign: "middle",
                        text: "",
                        right: 0,
                        mouseThrough: !0,
                        left: 0,
                        height: 25,
                        fontSize: 20,
                        color: "#000000",
                        bottom: 5,
                        bold: !0,
                        align: "center"
                    },
                    compId: 37
                }, {
                    type: "Image",
                    props: {
                        width: 32,
                        var: "btnBannerClose",
                        top: 12,
                        skin: "ui/Board.png",
                        left: 12,
                        height: 32
                    },
                    compId: 41,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "ui/CloseIcon.png",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 42
                    }]
                }, {
                    type: "Button",
                    props: {
                        x: 150,
                        width: 240,
                        var: "btnBannerAdClick",
                        stateNum: 1,
                        skin: "ui/upgrade_button1.png",
                        selected: !0,
                        labelStrokeColor: "#fbfbfb",
                        labelStroke: 1,
                        labelSize: 30,
                        labelPadding: "-2",
                        labelFont: "Microsoft YaHei",
                        labelBold: !0,
                        label: "SKIP",
                        height: 120,
                        centerX: 0,
                        bottom: -150
                    },
                    compId: 40
                }]
            }],
            loadList: ["ui/Board.png", "wxmore/BJ2.png", "ui/CloseIcon.png", "ui/upgrade_button1.png"],
            loadList3D: []
        }, e.NativeInsertAdUI = c, h("ui.NativeInsertAdUI", c);
        var u = function(e) {
            function PlayerHeadUI() {
                return _classCallCheck(this, PlayerHeadUI), _possibleConstructorReturn(this, _getPrototypeOf(PlayerHeadUI).call(this));
            }
            return _inherits(PlayerHeadUI, Laya.View), _createClass(PlayerHeadUI, [{
                key: "createChildren",
                value: function() {
                    _get(_getPrototypeOf(PlayerHeadUI.prototype), "createChildren", this).call(this), this.createView(PlayerHeadUI.uiView);
                }
            }]), PlayerHeadUI;
        }();
        u.uiView = {
            type: "View",
            props: {
                y: 0,
                width: 600,
                mouseEnabled: !1,
                height: 200
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    y: 111,
                    x: 300,
                    width: 39,
                    var: "dice",
                    skin: "AllGame/main_ui4.png",
                    scaleY: 0,
                    scaleX: 0,
                    height: 39,
                    centerX: 0,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 125,
                child: [{
                    type: "Label",
                    props: {
                        var: "lbldice",
                        valign: "middle",
                        top: 0,
                        text: "0",
                        right: 0,
                        left: 0,
                        fontSize: 25,
                        color: "#000000",
                        bottom: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 127
                }]
            }, {
                type: "Image",
                props: {
                    y: 111,
                    width: 74,
                    var: "player",
                    skin: "AllGame/main_ui31.png",
                    scaleY: 1,
                    scaleX: 1,
                    height: 40,
                    centerX: 0,
                    anchorY: .5,
                    anchorX: .5,
                    sizeGrid: "17,17,17,17"
                },
                compId: 115,
                child: [{
                    type: "Image",
                    props: {
                        width: 27,
                        var: "PlayImg",
                        skin: "AllGame/dice_Icon.png",
                        scaleY: .8,
                        scaleX: .8,
                        left: 5,
                        height: 25,
                        centerY: 0
                    },
                    compId: 118
                }, {
                    type: "Label",
                    props: {
                        width: 44,
                        var: "DiceNum",
                        text: "20",
                        right: 5,
                        height: 35,
                        fontSize: 35,
                        color: "#000000",
                        centerY: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 121
                }]
            }, {
                type: "Image",
                props: {
                    y: 177,
                    var: "jiao",
                    skin: "AllGame/main_ui5.png",
                    centerX: 0,
                    anchorX: .5
                },
                compId: 123
            }, {
                type: "Image",
                props: {
                    y: 179,
                    x: 300,
                    width: 156,
                    var: "imgname",
                    skin: "AllGame/main_ui31.png",
                    height: 37,
                    centerX: 0,
                    anchorY: 1,
                    anchorX: .5,
                    sizeGrid: "17,17,17,17"
                },
                compId: 119,
                child: [{
                    type: "Label",
                    props: {
                        width: 136,
                        var: "labName",
                        valign: "middle",
                        top: 0,
                        text: "Name",
                        right: 0,
                        left: 0,
                        height: 47,
                        fontSize: 20,
                        color: "#000000",
                        bottom: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 122
                }]
            }],
            animations: [{
                nodes: [{
                    target: 115,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }, {
                    target: 125,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 10
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 10
                        }]
                    }
                }],
                name: "aniplayertodice",
                id: 1,
                frameRate: 24,
                action: 0
            }, {
                nodes: [{
                    target: 125,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }, {
                    target: 115,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleY",
                            index: 10
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 115,
                            key: "scaleX",
                            index: 10
                        }]
                    }
                }],
                name: "anidicetoplayer",
                id: 2,
                frameRate: 24,
                action: 0
            }, {
                nodes: [{
                    target: 125,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "backOut",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "backIn",
                            tween: !0,
                            target: 125,
                            key: "scaleY",
                            index: 4
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.2,
                            tweenMethod: "backOut",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "backIn",
                            tween: !0,
                            target: 125,
                            key: "scaleX",
                            index: 4
                        }]
                    }
                }],
                name: "anidiceAdd",
                id: 3,
                frameRate: 24,
                action: 0
            }],
            loadList: ["AllGame/main_ui4.png", "AllGame/main_ui31.png", "AllGame/dice_Icon.png", "AllGame/main_ui5.png"],
            loadList3D: []
        }, e.PlayerHeadUI = u, h("ui.PlayerHeadUI", u);
    }(s || (s = {}));
    var u = function(t) {
        function WxSDK() {
            var e;
            return _classCallCheck(this, WxSDK), (e = _possibleConstructorReturn(this, _getPrototypeOf(WxSDK).apply(this, arguments))).RewardedVideoAd = null, e.RewardedVideoAd2 = null, e.bannerAd = null, e.showBanner = null, e.Err = null, e.GridAd = null, e.InterstitialAd = null, e.Videotime = 0, e.Bannertime = 0, e.Interstitialtime = 0, e.appid = "", e.secret = "", e.Videoid = "adunit-09b1d48888552028", e.InsertAdid = "adunit-07a271f5fc979120", e.BannerAdid = "adunit-211ef78c2cd8e9fe", e.Gridid = "adunit-8f3be33b0807484d", e.bannerheight = null, e.openid = null, e.nickname = null, e.session_key = null, e.BGM = null, e.audios = new Map(), e.Musicurl = null, e.WscaleW = 1, e.LoadBannerEnd = !1, e.showBannertime = null, e.LoadVideoEnd = !1, e.ShowRewardedVideoAdtime = 0, e.IsGridResize = !1, e.BOXbottom = 0, e.GridAdheight = 0, e.Sharenum = 0, e.Sharetime = 0, e;
        }
        return _inherits(WxSDK, r), _createClass(WxSDK, [{
            key: "GetType",
            value: function() {
                return e.WxSDK;
            }
        }, {
            key: "AutoMainSize",
            value: function() {
                return !1;
            }
        }, {
            key: "InitializeAdapter",
            value: function() {}
        }, {
            key: "Initialize",
            value: function() {}
        }, {
            key: "Login",
            value: function() {
                var e = this;
            }
        }, {
            key: "GameGetUserInfo",
            value: function() {}
        }, {
            key: "CrateBanner",
            value: function() {}
        }, {
            key: "ShowBannerAd",
            value: function(e) {}
        }, {
            key: "ShowBanner",
            value: function() {}
        }, {
            key: "BanneronLoad",
            value: function(e) {}
        }, {
            key: "Bannererr",
            value: function(e) {}
        }, {
            key: "BannerResize",
            value: function(e) {}
        }, {
            key: "HideBannerAd",
            value: function() {}
        }, {
            key: "DelBanner",
            value: function(e) {}
        }, {
            key: "CrateVideo",
            value: function() {}
        }, {
            key: "LoadVideo",
            value: function() {}
        }, {
            key: "ShowVideo",
            value: function() {
                var e = this;
            }
        }, {
            key: "Videoerr",
            value: function() {
                this.audio_over_fun && (pe.Instance.ShowTip("!"), this.audio_over_fun(!1)), delete this.audio_over_fun, this.audio_over_fun = null;
            }
        }, {
            key: "ShowRewardedVideoAd",
            value: function(e, t, i) {}
        }, {
            key: "AudioClose",
            value: function(e) {
                this.playMusic(this.Musicurl);
                var t = !0;
                e && !e.isEnded && (t = !1, pe.Instance.ShowTip("!")), this.audio_over_fun && this.audio_over_fun(t), delete this.audio_over_fun, this.audio_over_fun = null, this.LoadVideo();
            }
        }, {
            key: "VideoClose",
            value: function(e, t) {
                e ? (this.audio_over_fun && this.audio_over_fun(!1), pe.Instance.ShowTip("!")) : (this.audio_over_fun && this.audio_over_fun(t), t || pe.Instance.ShowTip("!")), delete this.audio_over_fun, this.audio_over_fun = null;
            }
        }, {
            key: "ShowInterstitialAd",
            value: function(e, t) {}
        }, {
            key: "CrateGridAd",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                wx.createGridAd && (this.GridAd = wx.createGridAd({
                    adUnitId: this.Gridid,
                    adIntervals: 30,
                    adTheme: "white",
                    gridCount: 5,
                    style: {
                        left: 0,
                        top: 0,
                        width: 30,
                        opacity: .8
                    }
                }), this.GridAd.onResize(this.GridResize.bind(this)), this.GridAd.onLoad(this.GridonLoad.bind(this, e)), this.GridAd.onError(this.GridonErr.bind(this)));
            }
        }, {
            key: "showGridAd",
            value: function(e) {
                this.IsGridResize = !1, this.BOXbottom = e, this.GridAd ? (this.GridAd.style.top = this.SystemInfo.windowHeight - this.GridAdheight - this.BOXbottom / this.WscaleW, o.Instance.event(a.kGridAdShowed, this.GridAdheight * this.WscaleW), this.GridAd.show()) : this.CrateGridAd(!0);
            }
        }, {
            key: "GridonLoad",
            value: function(e) {
                console.log("GridonLoad", e), e && this.GridAd.show();
            }
        }, {
            key: "GridonErr",
            value: function(e) {
                console.log("err", e), this.GridAd.offLoad(this.GridonLoad.bind(this)), this.GridAd.offResize(this.GridResize.bind(this)), this.GridAd.offError(this.GridonErr.bind(this)), this.GridAd.hide(), this.GridAd.destroy(), delete this.GridAd, this.GridAd = null;
            }
        }, {
            key: "GridResize",
            value: function(e) {
                this.IsGridResize || (this.IsGridResize = !0, this.GridAdheight = e.height, this.GridAd.style.left = .5 * (this.SystemInfo.windowWidth - e.width), this.GridAd.style.top = this.SystemInfo.windowHeight - this.GridAdheight - this.BOXbottom / this.WscaleW, o.Instance.event(a.kGridAdShowed, this.GridAdheight * this.WscaleW), console.log("GridResize", e, this.WscaleW));
            }
        }, {
            key: "HideGridAd",
            value: function() {
                this.GridAd && this.GridAd.hide();
            }
        }, {
            key: "ShareGame",
            value: function(e, t, i) {
                this.ShareGamecallback = t, this.Sharetime = Date.now();
            }
        }, {
            key: "VibrateLong",
            value: function() {}
        }, {
            key: "VibrateShort",
            value: function() {}
        }, {
            key: "GetStorage",
            value: function(e) {
                var t = null;
                try {
                    t = platform.getInstance().getStorageSync(e);
                } catch (t) {}
                return t;
            }
        }, {
            key: "SetStorage",
            value: function(e, t) {
                try {
                    platform.getInstance().setStorageSync(e, t);
                } catch (i) {}
            }
        }, {
            key: "DelStorage",
            value: function(e) {
                platform.getInstance().setStorageSync(e, null);
            }
        }, {
            key: "playMusic",
            value: function(e) {
                if (e) {
                    Laya.SoundManager.playMusic(e, true);
                }
            }
        }, {
            key: "playSound",
            value: function(e) {
                if (e) {
                    Laya.SoundManager.playSound(e);
                }
            }
        }, {
            key: "StopMusic",
            value: function(e) {
                Laya.SoundManager.stopMusic();
            }
        }, {
            key: "StopSound",
            value: function(e) {
                if (e) {
                    Laya.SoundManager.stopSound(e);
                }
            }
        }, {
            key: "navigateToMiniGame",
            value: function(e) {
                var t = this,
                    i = Date.now();
                i - this.ToMiniGameCD < 0 || (this.ToMiniGameCD = i + 500, window.zs.sdk.navigate2Mini(e, this.opendId, function(e) {}, function(e) {}, function(e) {}));
            }
        }, {
            key: "GetBannerAdHigh",
            value: function() {
                return this.bannerheight || (this.bannerheight = 104 * i.height / this.SystemInfo.windowHeight), this.bannerheight;
            }
        }]), WxSDK;
    }();
    var g = null;

    function GetSDK() {
        return g || function() {
            if (g) return;
            g = new u();
        }(), g;
    }
    var v = function() {
            function MathExtend() {
                _classCallCheck(this, MathExtend);
            }
            return _createClass(MathExtend, null, [{
                key: "SquareSum",
                value: function(e, t) {
                    return e * e + t * t;
                }
            }, {
                key: "SquareSumSqrt",
                value: function(e, t) {
                    return Math.sqrt(this.SquareSum(e, t));
                }
            }, {
                key: "Clamp",
                value: function(e, t, i) {
                    return e < t ? t : e > i ? i : e;
                }
            }, {
                key: "Clamp01",
                value: function(e) {
                    return e > 1 ? 1 : e < 0 ? 0 : e;
                }
            }, {
                key: "Lerp",
                value: function(e, t, i) {
                    return e + (t - e) * this.Clamp01(i);
                }
            }, {
                key: "LerpUnclamped",
                value: function(e, t, i) {
                    return e + (t - e) * i;
                }
            }, {
                key: "RandomInt",
                value: function(e, t) {
                    return Math.floor(this.RandomNum(e, t));
                }
            }, {
                key: "RandomNum",
                value: function(e, t) {
                    return Math.random() * (t - e) + e;
                }
            }]), MathExtend;
        }(),
        S = function() {
            function GameStorage() {
                _classCallCheck(this, GameStorage);
            }
            return _createClass(GameStorage, null, [{
                key: "Save",
                value: function() {
                    console.log("GameStorage.Save...."), GameStorage.CheckDailyRefresh();
                    for (var e = {
                            FirstRunDate: GameStorage.FirstRunDate,
                            Version: n.kVersion,
                            DailyRefreshDate: GameStorage.DailyRefreshDate
                        }, t = GameStorage.StroageSetting.length, i = 0; i < t; i++) {
                        var o = GameStorage.StroageSetting[i];
                        e[o.FeildName] = o.ClassType[o.FeildName];
                    }
                    GetSDK().SetStorage(GameStorage.kStorageName, JSON.stringify(e)), GameStorage.Dirty = !1;
                }
            }, {
                key: "Load",
                value: function() {
                    var e = GetSDK().GetStorage(GameStorage.kStorageName);
                    if (e) {
                        var i = JSON.parse(e);
                        if (null == i) return 1, void GameStorage.ApplyDefaultValue(!1);
                        if (n.kProductType == t.Public && i.Version != n.kVersion) return GetSDK().DelStorage(GameStorage.kStorageName), GameStorage.ApplyDefaultValue(!1), void 1;
                        for (var o = GameStorage.StroageSetting.length, a = 0; a < o; a++) {
                            var s = GameStorage.StroageSetting[a];
                            null != i[s.FeildName] ? s.ClassType["$" + s.FeildName] = i[s.FeildName] : null != s.DefaultValue && (s.ClassType["$" + s.FeildName] = s.DefaultValue);
                        }
                        GameStorage.FirstRunDate = i.FirstRunDate, GameStorage.DailyRefreshDate = i.DailyRefreshDate;
                    } else GameStorage.ApplyDefaultValue(!1);
                }
            }, {
                key: "ClearStorage",
                value: function() {
                    GetSDK().DelStorage(GameStorage.kStorageName);
                }
            }, {
                key: "LastUpdate",
                value: function() {
                    GameStorage.ImmediateMode || GameStorage.Dirty && GameStorage.Save();
                }
            }, {
                key: "DefineProperty",
                value: function(e) {
                    Object.defineProperty(e.ClassType, e.FeildName, {
                        set: function(t) {
                            GameStorage.PropertyChangedPrev();
                            var i = t;
                            if ("number" == typeof i && (e.Min || e.Max)) {
                                var n = Number.MIN_VALUE;
                                null != e.Min && (n = "number" == typeof e.Min ? e.Min : e.Min());
                                var o = Number.MAX_VALUE;
                                null != e.Max && (o = "number" == typeof e.Max ? e.Max : e.Max()), i = v.Clamp(i, n, o);
                            }
                            e.ClassType["$" + e.FeildName] = i, GameStorage.PropertyChanged();
                        },
                        get: function() {
                            return GameStorage.PropertyRecieve(), e.ClassType["$" + e.FeildName];
                        }
                    });
                }
            }, {
                key: "PropertyChanged",
                value: function() {
                    GameStorage.ImmediateMode ? GameStorage.Save() : GameStorage.Dirty = !0;
                }
            }, {
                key: "PropertyChangedPrev",
                value: function() {
                    GameStorage.IsInitialize || (GameStorage.Load(), GameStorage.IsInitialize = !0), GameStorage.CheckDailyRefresh();
                }
            }, {
                key: "PropertyRecieve",
                value: function() {
                    GameStorage.IsInitialize || (GameStorage.IsInitialize = !0, GameStorage.Load()), GameStorage.CheckDailyRefresh();
                }
            }, {
                key: "ApplyDefaultValue",
                value: function(e) {
                    for (var t = GameStorage.StroageSetting.length, i = 0; i < t; i++) {
                        var n = GameStorage.StroageSetting[i];
                        e && !n.DailyRefresh || null != n.DefaultValue && ("function" == typeof n.DefaultValue ? n.ClassType["$" + n.FeildName] = n.DefaultValue() : n.ClassType["$" + n.FeildName] = n.DefaultValue);
                    }
                    GameStorage.DailyRefreshDate = Date.now(), GameStorage.Dirty = !0;
                }
            }, {
                key: "CheckDailyRefresh",
                value: function() {
                    GameStorage.FirstRunDate || (GameStorage.FirstRunDate = Date.now(), GameStorage.DailyRefreshDate = Date.now()), (Date.now() - GameStorage.DailyRefreshDate) / 1e3 / 60 / 60 / 24 >= 1 && (GameStorage.ApplyDefaultValue(!0), GameStorage.PropertyChanged());
                }
            }]), GameStorage;
        }();

    function GSave(e, t, i, n) {
        return function(e, t, i, n) {
            return function(o, a) {
                var s = {
                    ClassType: o,
                    FeildName: a,
                    DefaultValue: e,
                    DailyRefresh: t,
                    Min: i,
                    Max: n
                };
                S.StroageSetting.push(s), S.DefineProperty(s);
            };
        }(e, t, i, n);
    }
    S.ImmediateMode = !1, S.StroageSetting = [], S.IsInitialize = !1, S.kStorageName = "GameSave_" + n.kShootName, S.Dirty = !1;
    var I = Laya.URL,
        w = Laya.Handler,
        k = Laya.Stat,
        b = Laya.Utils,
        C = function() {
            function Game(e, a) {
                _classCallCheck(this, Game), this.mPreloadCompletedCount = 0, this.mPreloadCompletedTotal = 0, this.mPreload = [], this.mUpdateDelay = 1, GetSDK().InitializeAdapter(), window.Laya3D ? window.Laya3D.init(i.width, i.height) : Laya.init(i.width, i.height, Laya.WebGL), Laya.stage.scaleMode = i.scaleMode, Laya.stage.screenMode = i.screenMode, Laya.stage.alignH = i.alignH, Laya.stage.alignV = i.alignV;
                if (typeof loadRuntime !== 'undefined') {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                }
                if (typeof getAdapterInfo !== "undefined") {
                    var stage = Laya.stage;
                    var info = getAdapterInfo({
                        width: i.width,
                        height: i.height,
                        scaleMode: "fixedwidth"
                    });
                    stage.designWidth = info.w;
                    stage.designHeight = info.h;
                    stage.width = info.rw;
                    stage.height = info.rh;
                    stage.scale(info.scaleX, info.scaleY);
                }
                I.exportSceneToJson = i.exportSceneToJson, Laya.stage.frameRate = Laya.Stage.FRAME_FAST, (i.debug || "true" == b.getQueryString("debug")) && Laya.enableDebugPanel(), i.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), i.stat && k.show(), box2d.ENABLE_ASSERTS = n.kProductType == t.Debug, n.Addbottom = n.Check(), Laya.alertGlobalError = !0, this.mPreload = e, Laya.Loader.maxTimeOut = 3e3, this.mUpdateDelay = a || 1, this.OnVersionCompleted(), o.CreateInstance();
            }
            return _createClass(Game, [{
                key: "OnVersionCompleted",
                value: function() {
                    if (this.mPreload) {
                        this.mPreloadCompletedTotal = this.mPreload.length, this.mPreloadCompletedCount = 0;
                        for (var e = 0; e < this.mPreload.length; ++e) Laya.loader.create(this.mPreload[e], w.create(this, this.HandlePreloadCompleted));
                    } else this.HandlePreloadCompleted();
                }
            }, {
                key: "OnPreloadCompleted",
                value: function() {}
            }, {
                key: "OnUpdate",
                value: function() {}
            }, {
                key: "OnLowUpdate",
                value: function() {
                    S.LastUpdate();
                }
            }, {
                key: "HandlePreloadCompleted",
                value: function() {
                    this.mPreloadCompletedCount++, this.mPreloadCompletedCount >= this.mPreloadCompletedTotal && (this.OnPreloadCompleted(), Laya.timer.frameLoop(1, this, this.OnUpdate), Laya.timer.loop(1e3, this, this.OnLowUpdate));
                }
            }]), Game;
        }();
    C.isFirstEnterGame = !0, C.iscontinue = !1, C.UpdateTab = new Set();

    function __decorate(e, t, i, n) {
        var o, a = arguments.length,
            s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
            for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
        return a > 3 && s && Object.defineProperty(t, i, s), s;
    }
    var D = function() {
        function GameSound() {
            _classCallCheck(this, GameSound);
        }
        return _createClass(GameSound, null, [{
            key: "PlaySound",
            value: function(e) {
                G.AllowSound && GetSDK().playSound(GameSound.getUrl(e));
            }
        }, {
            key: "PlayMusic",
            value: function(e) {
                G.AllowMusic && GetSDK().playMusic(GameSound.getUrl(e));
            }
        }, {
            key: "StopMusic",
            value: function() {
                GetSDK().StopMusic();
            }
        }, {
            key: "StopSound",
            value: function(e) {
                GetSDK().StopSound(GameSound.getUrl(e));
            }
        }, {
            key: "VibrateShort",
            value: function() {
                G.AllowVibrator && GetSDK().VibrateShort();
            }
        }, {
            key: "getUrl",
            value: function(e) {
                var t = GameSound.SoundTable[e];
                if (t) return t;
            }
        }, {
            key: "SoundMuted",
            set: function(e) {}
        }, {
            key: "MusicMuted",
            set: function(e) {
                this.StopMusic();
            }
        }]), GameSound;
    }();
    D.SoundTable = {
        GameMusic: 'sounds/BGM.mp3',
        Button: "sounds/click.mp3",
        Collision: "sounds/pz.mp3",
        szgd: "sounds/szgd.mp3"
    };
    var G = function() {
        function GameInfo() {
            _classCallCheck(this, GameInfo);
        }
        return _createClass(GameInfo, null, [{
            key: "ChangeSoundSet",
            value: function() {
                GameInfo.AllowSound = !GameInfo.AllowSound, D.SoundMuted = !GameInfo.AllowSound;
            }
        }, {
            key: "ChangeMusicSet",
            value: function() {
                GameInfo.AllowMusic = !GameInfo.AllowMusic, D.MusicMuted = !GameInfo.AllowMusic, GameInfo.AllowMusic && D.PlaySound("Bg");
            }
        }, {
            key: "ChangeVibratorSet",
            value: function() {
                GameInfo.AllowVibrator = !GameInfo.AllowVibrator;
            }
        }]), GameInfo;
    }();
    __decorate([GSave(0)], G, "Gold", void 0), __decorate([GSave([1])], G, "ownskin", void 0), __decorate([GSave(1)], G, "skinID", void 0), __decorate([GSave(3)], G, "AddLv", void 0), __decorate([GSave("PlayerName")], G, "Name", void 0), __decorate([GSave([])], G, "DiceCounts", void 0), __decorate([GSave(null)], G, "bodyColor", void 0), __decorate([GSave(0)], G, "bodyColorID", void 0), __decorate([GSave(null)], G, "diceColor", void 0), __decorate([GSave(0)], G, "DiceLevel", void 0), __decorate([GSave(-1)], G, "guideStep", void 0), __decorate([GSave(!0)], G, "AllowSound", void 0), __decorate([GSave(!0)], G, "AllowMusic", void 0), __decorate([GSave(!0)], G, "AllowVibrator", void 0), __decorate([GSave(0)], G, "SaveVersion", void 0), __decorate([GSave(!0)], G, "NewPl", void 0);
    var L = function() {
            function UIManager() {
                _classCallCheck(this, UIManager), this.mAllUI = [];
            }
            return _createClass(UIManager, [{
                key: "ChangeUI",
                value: function(e) {
                    if (this.mCurrUI) {
                        if (this.mCurrUI instanceof e) return this.mCurrUI;
                        if (this.mCurrUI.onLeave(), this.mCurrUI.destroyed) {
                            var t = this.mAllUI.indexOf(this.mCurrUI); - 1 != t && (this.mCurrUI.onUninit(), this.mAllUI.splice(t, 1));
                        }
                    }
                    this.mCurrUI = null;
                    for (var i = 0; i < this.mAllUI.length; i++) {
                        var n = this.mAllUI[i];
                        if (n instanceof e) {
                            this.mCurrUI = n;
                            break;
                        }
                    }
                    this.mCurrUI || (this.mCurrUI = new e(), this.mAllUI.push(this.mCurrUI));
                    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
                    return this.mCurrUI.onEnter(a), this.mCurrUI;
                }
            }, {
                key: "UninitUI",
                value: function(e) {
                    if (this.mCurrUI) {
                        this.mCurrUI instanceof e && this.mCurrUI.onLeave();
                        for (var t = 0; t < this.mAllUI.length; t++) {
                            var i = this.mAllUI[t];
                            if (i instanceof e) {
                                i.onUninit(), this.mAllUI.splice(t, 1);
                                break;
                            }
                        }
                    }
                }
            }, {
                key: "UninitAll",
                value: function() {
                    this.mCurrUI && this.mCurrUI.onLeave();
                    for (var e = this.mAllUI.length - 1; e >= 0; e--) {
                        this.mAllUI[e].onUninit(), this.mAllUI[e] = null;
                    }
                    this.mAllUI = [];
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    this.mCurrUI && this.mCurrUI.onUpdate(e);
                }
            }], [{
                key: "Instance",
                get: function() {
                    return this.GInstance || (this.GInstance = new UIManager()), this.GInstance;
                }
            }]), UIManager;
        }(),
        A = Laya.Point,
        _ = Laya.Physics,
        x = function() {
            function PointExtend() {
                _classCallCheck(this, PointExtend);
            }
            return _createClass(PointExtend, null, [{
                key: "Angle2",
                value: function(e, t, i, n, o) {
                    var a = this.Length2(e, t) * this.Length2(i, n);
                    if (!(a < 1e-15)) {
                        var s = this.Dot2(e, t, i, n) / a;
                        if (s = Math.acos(s), o && 1 == o) {
                            var r = -t,
                                l = e;
                            this.Dot2(r, l, i, n) < 0 && (s = -s);
                        }
                        return s * PointExtend.RadToDeg;
                    }
                    return 0;
                }
            }, {
                key: "MulValue",
                value: function(e, t) {
                    return new A(e.x * t, e.y * t);
                }
            }, {
                key: "Length",
                value: function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y);
                }
            }, {
                key: "Length2",
                value: function(e, t) {
                    return Math.sqrt(e * e + t * t);
                }
            }, {
                key: "Dot",
                value: function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }
            }, {
                key: "Dot2",
                value: function(e, t, i, n) {
                    return e * i + t * n;
                }
            }, {
                key: "Sub",
                value: function(e, t) {
                    return new A(e.x - t.x, e.y - t.y);
                }
            }, {
                key: "Add",
                value: function(e, t) {
                    return new A(e.x + t.x, e.y + t.y);
                }
            }, {
                key: "Vec2ToAngle",
                value: function(e, t) {
                    return Math.atan2(t, e) / Math.PI * 180 + 90;
                }
            }, {
                key: "AngleToVec",
                value: function(e, t) {
                    return t = (t + 90) / 180 * Math.PI, {
                        x: -Math.cos(t) * e,
                        y: -Math.sin(t) * e
                    };
                }
            }, {
                key: "Rotation",
                value: function(e, t, i) {
                    var n = Math.cos(t * this.DegToRad),
                        o = Math.sin(t * this.DegToRad);
                    if (i) return new A(e.x * n - e.y * o, e.x * o + e.y * n);
                    var a = e.x * n - e.y * o;
                    return e.y = e.x * o + e.y * n, e.x = a, e;
                }
            }, {
                key: "Rotation2",
                value: function(e, t, i) {
                    var n = Math.cos(t),
                        o = Math.sin(t);
                    if (i) return new A(e.x * n - e.y * o, e.x * o + e.y * n);
                    var a = e.x * n - e.y * o;
                    return e.y = e.x * o + e.y * n, e.x = a, e;
                }
            }, {
                key: "Distance",
                value: function(e, t, i, n) {
                    return Math.sqrt(this.DistanceSquared(e, t, i, n));
                }
            }, {
                key: "DistanceSquared",
                value: function(e, t, i, n) {
                    return (e - i) * (e - i) + (t - n) * (t - n);
                }
            }, {
                key: "PointLineToLines",
                value: function(e) {
                    for (var t = 2 * e.length, i = new Array(t), n = 0; n < e.length; n++) i[2 * n + 0] = e[n].x, i[2 * n + 1] = e[n].y;
                    return i;
                }
            }, {
                key: "PointLineToPolyPointsFromDirection",
                value: function(e, t, i) {
                    if (e.length < 2) return [];
                    for (var n = 4 * e.length, o = new Array(n), a = t / 2, s = 0; s < e.length; s++) {
                        var r = this.Rotation(i, -90),
                            l = this.Rotation(i, 90);
                        o[2 * s + 0] = e[s].x + r.x * a, o[2 * s + 1] = e[s].y + r.y * a, o[n - 1 - 2 * s - 1] = e[s].x + l.x * a, o[n - 1 - 2 * s - 0] = e[s].y + l.y * a;
                    }
                    return o;
                }
            }, {
                key: "PointLineToPolyPoints",
                value: function(e, t) {
                    if (e.length < 2) return [];
                    for (var i = 4 * e.length, n = new Array(i), o = t / 2, a = 0; a < e.length; a++) {
                        var s = new A(0, 0);
                        a == e.length - 1 ? s.setTo(e[a].x - e[a - 1].x, e[a].y - e[a - 1].y) : s.setTo(e[a + 1].x - e[a].x, e[a + 1].y - e[a].y);
                        this.Length(s);
                        s.normalize();
                        var r = this.Rotation(s, -90),
                            l = this.Rotation(s, 90);
                        n[2 * a + 0] = e[a].x + r.x * o, n[2 * a + 1] = e[a].y + r.y * o, n[i - 1 - 2 * a - 1] = e[a].x + l.x * o, n[i - 1 - 2 * a - 0] = e[a].y + l.y * o;
                    }
                    for (a = 0; a < n.length;) this.Distance(n[a + 0], n[a + 1], n[a + 2], n[a + 3]) / _.PIXEL_RATIO <= this.kBox2DLinearSlop ? n.splice(a, 4) : a += 4;
                    return n;
                }
            }]), PointExtend;
        }();
    x.DegToRad = Math.PI / 180, x.RadToDeg = 180 / Math.PI, x.kBox2DLinearSlop = .05;
    var P = function() {
            function PlayAI(e) {
                _classCallCheck(this, PlayAI), this.prevDisX = 0, this.prevDisZ = 0, this.mPlayerCtrl = e;
            }
            return _createClass(PlayAI, [{
                key: "arriveTargerPos",
                value: function() {
                    if (this.mPlayerCtrl.mCtrlStale != X.Die) {
                        if (Math.random() > .2) {
                            var e = v.RandomInt(0, this.mPlayerCtrl.mLevelScene.mBoxBornPostions.length),
                                t = this.mPlayerCtrl.mLevelScene.mBoxBornPostions[e];
                            this.mTargerVec2 = {
                                x: t.x,
                                y: t.z
                            };
                        } else this.mTargerVec2 = x.AngleToVec(80, 360 * Math.random());
                        this.mPlayerCtrl.mPlayers[0].move(this.mTargerVec2.x - this.mPlayerCtrl.masterPosition.x, this.mTargerVec2.y - this.mPlayerCtrl.masterPosition.z), this.mPlayerCtrl.mCtrlStale = X.Run;
                    }
                }
            }, {
                key: "collisionWall",
                value: function() {
                    this.arriveTargerPos();
                }
            }, {
                key: "randomNum",
                value: function(e) {
                    return 2 * Math.random() * e - e;
                }
            }, {
                key: "onLowUpdate",
                value: function() {
                    if (this.mPlayerCtrl.mCtrlStale == X.Run) {
                        var e = this.mPlayerCtrl.masterPosition,
                            t = this.mTargerVec2.x - e.x,
                            i = this.mTargerVec2.y - e.z;
                        Math.abs(t - this.prevDisX) < 1 && Math.abs(i - this.prevDisZ) < 1 && this.arriveTargerPos(), (this.prevDisX >= 0 && t < 0 || this.prevDisX <= 0 && t > 0 || this.prevDisZ >= 0 && t < 0 || this.prevDisZ <= 0 && t > 0) && this.arriveTargerPos(), this.prevDisX = t, this.prevDisZ = i;
                    } else this.mPlayerCtrl.mCtrlStale == X.Common && this.arriveTargerPos();
                }
            }, {
                key: "uninit",
                value: function() {
                    this.mPlayerCtrl = null;
                }
            }]), PlayAI;
        }(),
        T = function() {
            function MathHelp(e) {
                _classCallCheck(this, MathHelp);
            }
            return _createClass(MathHelp, null, [{
                key: "getRandomInt",
                value: function(e, t) {
                    return Math.floor(Math.random() * (t - e) + e);
                }
            }, {
                key: "getRandomFloat",
                value: function(e, t) {
                    return Math.random() * (t - e) + e;
                }
            }]), MathHelp;
        }(),
        M = function(e) {
            function DiceScript() {
                var e;
                return _classCallCheck(this, DiceScript), (e = _possibleConstructorReturn(this, _getPrototypeOf(DiceScript).call(this))).isUp = !1, e.maxDice = 0, e.minDice = 0, e.ShowDiceNum = 1, e.t1 = 0, e.ddtime = 0, e;
            }
            return _inherits(DiceScript, Laya.Script3D), _createClass(DiceScript, [{
                key: "init",
                value: function(e, t, i, n) {
                    this.FaceNum = e, this.AddValue = t, this.BjColor = i, this.diceColor = n, this.myRigidbody = this.owner.getComponent(Laya.Rigidbody3D), this.myNodes = [], this.InitRotation = new Laya.Vector3(0, 0, 0);
                    for (var o = 0; o < this.owner.numChildren; o++) {
                        var a = this.owner.getChildAt(o);
                        if (a.name != this.owner.name) {
                            var s = a.meshRenderer;
                            if (s) s.material.albedoColor = this.diceColor, this.myNodes.push(a);
                            else 1;
                        } else this.myBJBlinnPhongMaterial = a.meshRenderer, this.myBJBlinnPhongMaterial.material.albedoColor = this.BjColor, this.myBJBlinnPhongMaterial.castShadow = !0;
                    }
                    if (this.minDice = 1 + this.AddValue, this.maxDice = this.FaceNum + this.AddValue, this.myNodes)
                        for (var r = 0; r < this.myNodes.length; r++) {
                            var l = this.myNodes[r],
                                h = r + 1;
                            if (l.name == "".concat(h)) {
                                var d = "";
                                d = 6 == e ? (h += this.AddValue) >= 7 ? h < 10 ? "Resources/Conventional/Assets/Scenes/Textures/0".concat(h, ".png") : "Resources/Conventional/Assets/Scenes/Textures/".concat(h, ".png") : "Resources/Conventional/Assets/Scenes/Textures/t_0".concat(h, ".png") : (h += this.AddValue) < 10 ? "Resources/Conventional/Assets/Scenes/Textures/0".concat(h, ".png") : "Resources/Conventional/Assets/Scenes/Textures/".concat(h, ".png");
                                var c = Laya.Loader.getRes(d),
                                    u = l.meshRenderer.material;
                                "" != c && u ? u.albedoTexture = c : 1;
                            }
                        }
                }
            }, {
                key: "uninit",
                value: function() {
                    this.MapArr = null, this.BjColor = null, this.diceColor = null, this.myRigidbody = null, this.myBJBlinnPhongMaterial = null, this.myNodes = null, this.backEvent = null, this.owner.destroy();
                }
            }, {
                key: "changeDiceColor",
                value: function(e, t, i) {
                    this.BjColor = e, this.diceColor = t, this.myNodes = [];
                    for (var n = 0; n < this.owner.numChildren; n++) {
                        var o = this.owner.getChildAt(n);
                        if (o.name != this.owner.name) {
                            var a = o.meshRenderer;
                            if (a) a.material.albedoColor = t, this.myNodes.push(o);
                            else 1;
                        } else this.myBJBlinnPhongMaterial = o.meshRenderer, this.myBJBlinnPhongMaterial.material.albedoColor = e;
                    }
                    this.changeDiceAddLv(i);
                }
            }, {
                key: "changeDiceAddLv",
                value: function(e) {
                    this.AddValue = e, this.maxDice = this.FaceNum + this.AddValue, this.minDice = 1 + this.AddValue;
                    for (var t = 0; t < this.myNodes.length; t++) {
                        var i = this.myNodes[t],
                            n = t + 1;
                        if (i.name == "".concat(n)) {
                            var o = "";
                            o = 6 == this.FaceNum ? (n += this.AddValue) >= 7 ? n < 10 ? "Resources/Conventional/Assets/Scenes/Textures/0".concat(n, ".png") : "Resources/Conventional/Assets/Scenes/Textures/".concat(n, ".png") : "Resources/Conventional/Assets/Scenes/Textures/t_0".concat(n, ".png") : (n += this.AddValue) < 10 ? "Resources/Conventional/Assets/Scenes/Textures/0".concat(n, ".png") : "Resources/Conventional/Assets/Scenes/Textures/".concat(n, ".png");
                            var a = Laya.Loader.getRes(o),
                                s = i.meshRenderer.material;
                            "" != a && s ? s.albedoTexture = a : 1;
                        }
                    }
                }
            }, {
                key: "upDice",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.backEvent = e, t) {
                        this.myRigidbody.enabled || (this.myRigidbody.enabled = !0), this.myRigidbody.linearDamping = .15, this.myRigidbody.restitution = .7, this.myRigidbody.mass = 5, this.myRigidbody.angularDamping = .3, this.myRigidbody.gravity = new Laya.Vector3(0, -40, 0);
                        var n, o, a;
                        n = T.getRandomInt(1, 10), o = T.getRandomInt(1, 10), a = T.getRandomInt(1, 10);
                        var s = new Laya.Vector3(n, o, a);
                        this.myRigidbody.angularVelocity = s;
                        var r = new Laya.Vector3(2, 85, 3);
                        if (this.myRigidbody.applyImpulse(r), this.isUp = !0, this.ddtime = T.getRandomInt(10, 20), i) {
                            var l = T.getRandomInt(400, 900);
                            Laya.timer.once(l, this, function() {
                                D.PlaySound("szgd");
                            });
                        }
                    } else {
                        var h = T.getRandomInt(this.minDice, this.maxDice);
                        this.backEvent && this.backEvent.runWith(h);
                    }
                }
            }, {
                key: "onUpdate",
                value: function() {
                    if (this.isUp && this.myRigidbody && this.myRigidbody.angularVelocity) {
                        if (this.t1 >= this.ddtime) {
                            var e = !1,
                                t = !1,
                                i = !1;
                            Math.abs(this.myRigidbody.angularVelocity.x) < .1 && (e = !0), Math.abs(this.myRigidbody.angularVelocity.y) < .1 && (t = !0), Math.abs(this.myRigidbody.angularVelocity.z) < .1 && (i = !0);
                            for (var n = this.GetMax(), o = 0; o < this.myNodes.length; o++) {
                                this.myNodes[o].meshRenderer.material.albedoColor = this.diceColor;
                            }
                            if (n && (this.ShowDiceNum = parseInt(n.name) + this.AddValue, n.meshRenderer.material.albedoColor = new Laya.Vector4(1, 0, 0, 1)), (e && t || i && t || e && i) && (this.isUp = !1, this.backEvent)) {
                                for (var a = this.GetMax(), s = 0; s < this.myNodes.length; s++) {
                                    this.myNodes[s].meshRenderer.material.albedoColor = this.diceColor;
                                }
                                a.meshRenderer.material.albedoColor = new Laya.Vector4(1, 0, 0, 1), this.myRigidbody.enabled && (this.myRigidbody.enabled = !1), this.backEvent.runWith(parseInt(a.name) + this.AddValue);
                            }
                            this.ddtime = T.getRandomInt(10, 20), this.t1 = 0;
                        }
                        this.t1++;
                    }
                }
            }, {
                key: "GetMax",
                value: function() {
                    for (var e = this.myNodes[0], t = 1, i = this.myNodes.length; t < i; t++) this.myNodes[t].transform.position.y > e.transform.position.y && (e = this.myNodes[t]);
                    return e;
                }
            }, {
                key: "playAni",
                value: function() {}
            }, {
                key: "upgrade",
                value: function() {}
            }]), DiceScript;
        }(),
        B = function(e) {
            function LoadingUI() {
                return _classCallCheck(this, LoadingUI), _possibleConstructorReturn(this, _getPrototypeOf(LoadingUI).call(this));
            }
            return _inherits(LoadingUI, s.GameLoadingUI), _createClass(LoadingUI, [{
                key: "onEnter",
                value: function() {
                    if (window["yad"]) {
                        window["yad"].top = Laya.stage.height - window["yad"].height;
                        window["yad"].centerX = 0;
                    }
                    Laya.stage.addChild(this), this.visible = !0, this.refreshUI();
                }
            }, {
                key: "onLeave",
                value: function() {
                    this.removeSelf(), this.visible = !1;
                }
            }, {
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "onUninit",
                value: function() {
                    throw new Error("Method not implemented.");
                }
            }, {
                key: "refreshUI",
                value: function() {}
            }]), LoadingUI;
        }(),
        R = function() {
            function res_mgr() {
                _classCallCheck(this, res_mgr), this.prefabs_res = null, this.scene3D_res = null, this.sprite3D_res = null, this.atlas_res = null, this.sound_res = null, this.json_res = null, this.dragonbones_res = null, this.effect_res = null, this.on_progress = null, this.on_load_finished = null, this.total_num = 0, this.now_num = 0, this._width = 0, this.jdvalue = null, this.prefabs_res = {}, this.scene3D_res = {}, this.sprite3D_res = {}, this.atlas_res = {}, this.sound_res = {}, this.dragonbones_res = {}, this.effect_res = {}, this.json_res = {};
            }
            return _createClass(res_mgr, [{
                key: "_one_res_load_finished",
                value: function() {
                    if (this.now_num++, this.on_progress && this._width > 0) {
                        var e = Math.floor(this.now_num / this.total_num * 100);
                        this.on_progress.width = e / 100 * this._width, this.jdvalue && (this.jdvalue.text = "".concat(e, "%"));
                    }
                    if (this.now_num == this.total_num && this.on_load_finished) {
                        this.on_load_finished();
                    }
                }
            }, {
                key: "load_atlas",
                value: function(e) {
                    Laya.loader.create(e, Laya.Handler.create(this, function(t) {
                        this.atlas_res[e] = t, this._one_res_load_finished();
                    }));
                }
            }, {
                key: "load_scene3D",
                value: function(e) {
                    Laya.loader.create(e, Laya.Handler.create(this, function(t) {
                        this.scene3D_res[e] = t, this._one_res_load_finished();
                    }));
                }
            }, {
                key: "load_sprite3D",
                value: function(e) {
                    Laya.Sprite3D.load(e, Laya.Handler.create(this, function(t) {
                        this.sprite3D_res[e] = t, this._one_res_load_finished();
                    }));
                }
            }, {
                key: "reslease_atlas",
                value: function(e) {
                    this.atlas_res[e] && (Laya.loader.clearRes(e), this.atlas_res[e] = null);
                }
            }, {
                key: "release_scene3D",
                value: function(e) {
                    this.scene3D_res[e] && (this.scene3D_res[e] = null);
                }
            }, {
                key: "release_sprite3D",
                value: function(e) {
                    this.sprite3D_res[e] && (this.sprite3D_res[e] = null);
                }
            }, {
                key: "ShowLoading",
                value: function() {
                    L.Instance.ChangeUI(B);
                }
            }, {
                key: "preload_res_pkg",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        a = 0,
                        s = "";
                    for (var r in this.on_progress = i, this.on_load_finished = t, this._width = n, this.jdvalue = o, this.total_num = 0, e) this.total_num += e[r].length;
                    if (this.now_num = 0, e.atlas)
                        for (a = 0; a < e.atlas.length; a++) s = e.atlas[a], this.load_atlas(s);
                    if (e.scene3D)
                        for (a = 0; a < e.scene3D.length; a++) s = e.scene3D[a], this.load_scene3D(s);
                    if (e.sprite3D)
                        for (a = 0; a < e.sprite3D.length; a++) s = e.sprite3D[a], this.load_sprite3D(s);
                }
            }, {
                key: "reloase_res_pkg",
                value: function(e) {
                    if (e.atlas)
                        for (var t = 0; t < e.atlas.length; t++) {
                            var i = e.atlas[t];
                            this.reslease_atlas(i);
                        }
                    if (e.scene3D)
                        for (var n = 0; n < e.scene3D.length; n++) {
                            var o = e.scene3D[n];
                            this.release_scene3D(o);
                        }
                    if (e.sprite3D)
                        for (var a = 0; a < e.sprite3D.length; a++) {
                            var s = e.sprite3D[a];
                            this.release_sprite3D(s);
                        }
                }
            }, {
                key: "get_scens3d_res",
                value: function(e) {
                    return this.scene3D_res[e];
                }
            }, {
                key: "get_sprite3D_res",
                value: function(e) {
                    return this.sprite3D_res[e];
                }
            }], [{
                key: "CreateInstance",
                value: function() {
                    null == res_mgr.GInstance && (res_mgr.GInstance = new res_mgr());
                }
            }, {
                key: "Instance",
                get: function() {
                    return res_mgr.GInstance;
                }
            }]), res_mgr;
        }();
    R.GInstance = null;
    var N = [{
            id: 1,
            FaceNum: 4,
            ModlePath: "Resources/Conventional/Dice_04.lh"
        }, {
            id: 2,
            FaceNum: 6,
            ModlePath: "Resources/Conventional/Dice_06.lh"
        }, {
            id: 3,
            FaceNum: 8,
            ModlePath: "Resources/Conventional/Dice_08.lh"
        }, {
            id: 4,
            FaceNum: 12,
            ModlePath: "Resources/Conventional/Dice_12.lh"
        }, {
            id: 5,
            FaceNum: 20,
            ModlePath: "Resources/Conventional/Dice_20.lh"
        }],
        K = function() {
            function DiceManager() {
                _classCallCheck(this, DiceManager), this.isLoad = !1, this.onPreLoadFinish();
            }
            return _createClass(DiceManager, [{
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "onPreLoadFinish",
                value: function() {
                    this.isLoad = !0;
                }
            }, {
                key: "createDice",
                value: function(e, t, i, n, o, a) {
                    for (var s = null, r = 0; r < N.length; r++) {
                        var l = N[r];
                        if (l.FaceNum == e) {
                            s = R.Instance.get_sprite3D_res(l.ModlePath);
                            break;
                        }
                    }
                    if (s) {
                        var h = s.clone(),
                            d = h.getComponent(Laya.Rigidbody3D);
                        if (d) {
                            d.enabled = !1, o.addChild(h), h.addComponent(M);
                            var c = h.getComponent(M);
                            return c.init(e, t, i, n), h.transform.localPosition = a, c;
                        }
                        return 1, null;
                    }
                    return 1, null;
                }
            }, {
                key: "unInit",
                value: function() {
                    throw new Error("Method not implemented.");
                }
            }], [{
                key: "CreateInstance",
                value: function() {
                    null == DiceManager.GInstance && (DiceManager.GInstance = new DiceManager());
                }
            }, {
                key: "Instance",
                get: function() {
                    return DiceManager.GInstance;
                }
            }]), DiceManager;
        }();
    K.GInstance = null;
    var O, U = function() {
            function Effect3D() {
                _classCallCheck(this, Effect3D), this.currPos = new Laya.Vector3(), Laya.timer.frameLoop(1, this, this.Update);
            }
            return _createClass(Effect3D, [{
                key: "Update",
                value: function() {
                    if (!this.sprite) return this.sprite = null, this.startPos = null, this.offsetPos = null, this.currPos = null, void Laya.timer.clearAll(this);
                    var e = Date.now() - this.startTime;
                    if (this.flowTime && this.sprite.transform) {
                        var t = e / this.flowTime;
                        this.currPos.setValue(this.offsetPos.x * t + this.startPos.x, this.offsetPos.y * t + this.startPos.y, this.offsetPos.z * t + this.startPos.z), this.sprite.transform.position = this.currPos;
                    }
                    return e > this.durationTime ? (this.sprite.destroy(), this.sprite = null, this.startPos = null, this.offsetPos = null, this.currPos = null, void Laya.timer.clearAll(this)) : void 0;
                }
            }], [{
                key: "PlayTraslateEffect",
                value: function(e, t, i, n, o, a) {
                    var s = new Effect3D();
                    return s.sprite = R.Instance.get_sprite3D_res(o).clone(), a.addChild(s.sprite), s.sprite.transform.position = e, s.startTime = Date.now(), s.durationTime = n, s.flowTime = i, s.startPos = e, s.offsetPos = new Laya.Vector3(t.x - e.x, t.y - e.y, t.z - e.z), s;
                }
            }, {
                key: "PlayFixedEffect",
                value: function(e, t, i, n) {
                    var o = new Effect3D();
                    o.sprite = R.Instance.get_sprite3D_res(i).clone(), n.addChild(o.sprite), o.sprite.transform.position = e, o.startTime = Date.now(), o.durationTime = t;
                }
            }]), Effect3D;
        }(),
        V = function(e) {
            function PlayerHeadUI() {
                var e;
                return _classCallCheck(this, PlayerHeadUI), (e = _possibleConstructorReturn(this, _getPrototypeOf(PlayerHeadUI).call(this))).isshow = !1, e.updicenum = 1, e.init(), e;
            }
            return _inherits(PlayerHeadUI, s.PlayerHeadUI), _createClass(PlayerHeadUI, [{
                key: "init",
                value: function() {}
            }, {
                key: "onRefreshPos",
                value: function(e, t, i) {
                    e < 0 || e > Laya.stage.width || t < 0 || t > Laya.stage.height ? this.visible && (this.visible = !1) : (this.visible || (this.visible = !0), this.pos(e - 300, t - 250), this.scale(i, i));
                }
            }, {
                key: "onRefreshNum",
                value: function(e) {
                    this.DiceNum.text = e.toString();
                }
            }, {
                key: "onPZ",
                value: function() {
                    this.aniplayertodice.play(0, !1);
                }
            }, {
                key: "onPZOver",
                value: function() {
                    this.anidicetoplayer.play(0, !1);
                }
            }, {
                key: "showDiceNumer",
                value: function(e) {
                    var t = this;
                    this.updicenum != e && (this.updicenum = e, Laya.Tween.to(this.dice, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 200, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        Laya.Tween.to(t.dice, {
                            scaleX: .9,
                            scaleY: .9
                        }, 100, Laya.Ease.linearNone, Laya.Handler.create(t, function() {
                            t.lbldice.text = e.toString();
                        }));
                    })));
                }
            }, {
                key: "onEnter",
                value: function(e, t, i) {
                    var n = [e.x, 0, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 0, 1, 0],
                        o = new Laya.ColorFilter(n),
                        a = new Laya.ColorFilter([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
                    this.dice.filters = [o], this.player.filters = [o], this.jiao.filters = [o], this.imgname.filters = [o], this.lbldice.filters = [a], this.PlayImg.filters = [a], this.DiceNum.filters = [a], this.labName.filters = [a], Laya.stage.addChild(this), this.visible = !1, this.imgname.visible = !1, this.jiao.visible = !1, null != t && (this.imgname.width = 20 * t.length + 10, this.labName.text = t, this.DiceNum.text = i.toString(), this.imgname.visible = !0, this.jiao.visible = !0);
                }
            }, {
                key: "onLeave",
                value: function() {
                    this.removeSelf(), this.visible = !1;
                }
            }, {
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "onUninit",
                value: function() {
                    this.destroy(!0);
                }
            }]), PlayerHeadUI;
        }(),
        z = function(e) {
            function BoxScript() {
                return _classCallCheck(this, BoxScript), _possibleConstructorReturn(this, _getPrototypeOf(BoxScript).call(this));
            }
            return _inherits(BoxScript, Laya.Script3D), _createClass(BoxScript, [{
                key: "getState",
                value: function() {
                    return this.State;
                }
            }, {
                key: "setState",
                value: function(e) {
                    this.State = e;
                }
            }, {
                key: "init",
                value: function(e, t, i, n, o, a, s) {
                    this.BoxNo = t, this.DiceNum = o, this.BoxQuality = n, this.FaceNum = a, this.AddValue = s, this.Scence = i, this.DiceArray = [], this.aniArr = [], this.isDie = !1, this.UpDiceDatNum = 0, this.collider = this.owner.getComponent(Laya.PhysicsCollider), this.setColliderTrigger(!0), this.RememberDiceNum = this.DiceNum, this.Ani = this.owner.getChildByName(e).getComponent(Laya.Animator), this.owner.getChildAt(0).getChildAt(0).skinnedMeshRenderer.castShadow = !0;
                    for (var r, l = this.owner.getChildByName("touzi01"), h = 0; h < l.numChildren; h++) {
                        l.getChildAt(h);
                        var d = l.getComponent(Laya.Animator);
                        this.aniArr.push(d);
                    }
                    switch (this.BoxQuality) {
                        case 1:
                            r = "Wooden box";
                            break;
                        case 2:
                            r = "Iron box";
                            break;
                        case 3:
                            r = "Copper box";
                            break;
                        case 4:
                            r = "Silver box";
                            break;
                        case 5:
                            r = "Gold box";
                    }
                    switch (this.pointArr = [], this.DiceNum) {
                        case 1:
                            this.pointArr = ["Point_1"];
                            break;
                        case 2:
                            this.pointArr = ["Point_3", "Point_4"];
                            break;
                        case 3:
                            this.pointArr = ["Point_2", "Point_3", "Point_4"];
                    }
                    this.headUI = new V(), this.headUI.onEnter(new Laya.Vector4(1, 1, 1, 1), r, 0), this.headUI.visible = !1, this.loadSuo(), this.playAniArr(2), this.playAni("Stand"), this.setState(1), this.addDice();
                }
            }, {
                key: "loadSuo",
                value: function() {
                    this.suo_ani = new Laya.Animation(), Laya.Animation.createFrames(this.aniUrls(50), "suo"), this.anim();
                }
            }, {
                key: "aniUrls",
                value: function(e) {
                    for (var t = [], i = 0; i < e; i++) t.push("suo/suo_".concat(i, ".png"));
                    return t;
                }
            }, {
                key: "anim",
                value: function() {
                    this.suo_ani.pivotX = 67, this.suo_ani.pivotY = 67, this.suo_ani.interval = 99, Laya.stage.addChild(this.suo_ani), this.suo_ani.stop(), this.suo_ani.visible = !1;
                }
            }, {
                key: "RefreshPos",
                value: function(e, t, i) {
                    e < 0 || e > Laya.stage.width || t < 0 || t > Laya.stage.height ? this.suo_ani.visible && (this.suo_ani.visible = !1) : (this.suo_ani.visible || (this.suo_ani.visible = !0), this.suo_ani.pos(e, t - 20), this.suo_ani.scale(i, i));
                }
            }, {
                key: "aniPos",
                value: function() {
                    if (this.owner) {
                        var e = new Laya.Vector3(),
                            t = new Laya.Vector3();
                        t.x = this.owner.transform.position.x, t.y = this.owner.transform.position.y, t.z = this.owner.transform.position.z, pe.Instance.mLevelScene.mCamera.viewport.project(t, pe.Instance.mLevelScene.mCamera.projectionViewMatrix, e), e.x *= pe.Instance.DesignBrowserWidthRatio, e.y *= pe.Instance.DesignBrowserWidthRatio, this.RefreshPos(e.x, e.y, e.z);
                    }
                }
            }, {
                key: "suoPlay",
                value: function(e) {
                    e ? (this.suo_ani.visible = !0, this.suo_ani.play(0, !1, "suo")) : (this.suo_ani.visible = !1, this.suo_ani.stop());
                }
            }, {
                key: "setColliderTrigger",
                value: function(e) {
                    this.collider.isTrigger = e;
                }
            }, {
                key: "playAniArr",
                value: function(e) {
                    for (var t = 0; t < this.aniArr.length; t++) {
                        this.aniArr[t].play("stand".concat(e));
                    }
                }
            }, {
                key: "findPoint",
                value: function(e, t) {
                    var i = e.numChildren;
                    if (0 != i) {
                        for (var n = 0; n < i; n++) {
                            var o = e.getChildAt(n);
                            if (o) {
                                if (o.name == t) return o;
                                var a = this.findPoint(o, t);
                                if (a) return a;
                            }
                        }
                        return null;
                    }
                }
            }, {
                key: "getMaxDiceResults",
                value: function() {
                    return this.DiceNum * this.FaceNum;
                }
            }, {
                key: "addDice",
                value: function() {
                    for (var e = 0; e < this.DiceNum; e++) {
                        var t = K.Instance.createDice(this.FaceNum, this.AddValue, new Laya.Vector4(1, 1, 1, 1), new Laya.Vector4(0, 0, 0, 1), this.findPoint(this.owner, this.pointArr[e]), new Laya.Vector3(0, 0, 0));
                        this.DiceArray.push(t);
                    }
                }
            }, {
                key: "outDice",
                value: function() {
                    for (var e = 0; e < this.DiceArray.length; e++) {
                        var t = this.DiceArray[e].owner;
                        this.owner.addChild(t), t.transform.localPosition = this.findPoint(this.owner, this.pointArr[e]).transform.localPosition;
                    }
                }
            }, {
                key: "inDice",
                value: function() {
                    for (var e = 0; e < this.DiceArray.length; e++) {
                        var t = this.DiceArray[e].owner;
                        this.findPoint(this.owner, this.pointArr[e]).addChild(t);
                    }
                }
            }, {
                key: "lockUp",
                value: function() {
                    this.setState(2), this.RememberDiceNum = this.DiceNum, this.UpDiceDatNum = 0, this.playAni("Stand"), this.playAniArr(2), this.inDice(), this.suoPlay(!0);
                    for (var e = 0; e < this.DiceArray.length; e++) this.DiceArray[e].owner.transform.localPosition = new Laya.Vector3(0, 0, 0), this.DiceArray[e].changeDiceColor(new Laya.Vector4(1, 1, 1, 1), new Laya.Vector4(0, 0, 0, 1), 0), this.DiceArray[e].owner.transform.rotate(this.DiceArray[e].InitRotation);
                    Laya.timer.frameLoop(1, this, this.aniPos), Laya.timer.once(5e3, this, this.unLockUp);
                }
            }, {
                key: "unLockUp",
                value: function() {
                    Laya.timer.clear(this, this.aniPos), this.setState(1), this.suoPlay(!1), this.setColliderTrigger(!0);
                }
            }, {
                key: "openBox",
                value: function(e) {
                    this.setState(4), this.playAniArr(1), this.outDice(), this.setColliderTrigger(!1);
                    for (var t = 0; t < this.DiceArray.length; t++) this.DiceArray[t].upDice(Laya.Handler.create(this, this.addDiceResults), e);
                    this.headUI.visible = !0, this.headUI.onPZ(), Laya.timer.frameLoop(1, this, this.onChangeDiceNum), this.changeHeadPos();
                }
            }, {
                key: "changeHeadPos",
                value: function() {
                    var e = new Laya.Vector3(),
                        t = new Laya.Vector3();
                    t.x = this.owner.transform.position.x, t.y = this.owner.transform.position.y + 3, t.z = this.owner.transform.position.z, pe.Instance.mLevelScene.mCamera.viewport.project(t, pe.Instance.mLevelScene.mCamera.projectionViewMatrix, e), e.x *= pe.Instance.DesignBrowserWidthRatio, e.y *= pe.Instance.DesignBrowserWidthRatio, this.headUI.onRefreshPos(e.x, e.y, e.z);
                }
            }, {
                key: "onChangeDiceNum",
                value: function() {
                    var e = 0;
                    if (this.DiceArray) {
                        for (var t = 0; t < this.DiceArray.length; t++) {
                            e += this.DiceArray[t].ShowDiceNum;
                        }
                        this.headUI.showDiceNumer(e);
                    }
                }
            }, {
                key: "Death",
                value: function() {
                    this.playAni("Attack"), this.setState(3);
                    var e = this.owner.transform.position,
                        t = new Laya.Vector3(e.x, e.y + 3, e.z);
                    U.PlayFixedEffect(e, 1e3, "Resources/Conventional/Upgrade01.lh", pe.Instance.mLevelScene.mScene);
                    for (var i = 0; i < this.DiceArray.length; i++) {
                        var n = this.DiceArray[i].owner.transform.position;
                        U.PlayTraslateEffect(t, n, 500, 1e3, "Resources/Conventional/Flow01.lh", pe.Instance.mLevelScene.mScene);
                    }
                    Laya.timer.once(1e3, this, this.uninit);
                }
            }, {
                key: "uninit",
                value: function() {
                    this.DiceArray = [], this.Player = null, this.Scence = null, this.DiceArray = null, this.Ani = null, this.isDie = !0;
                }
            }, {
                key: "del",
                value: function() {
                    this.owner.removeSelf(), this.owner.destroy();
                }
            }, {
                key: "addDiceResults",
                value: function(e) {
                    this.UpDiceDatNum += e, this.RememberDiceNum--, 0 == this.RememberDiceNum && (this.changeHeadPos(), Laya.timer.clear(this, this.onChangeDiceNum), this.onChangeDiceNum(), Laya.timer.once(1e3, this, this.hideDiceHead));
                }
            }, {
                key: "hideDiceHead",
                value: function() {
                    this.headUI.visible = !1;
                }
            }, {
                key: "isCanOpenBox",
                value: function() {
                    return 1 == this.State;
                }
            }, {
                key: "playAni",
                value: function(e) {
                    this.Ani.play(e);
                }
            }]), BoxScript;
        }();
    ! function(e) {
        e[e.None = 0] = "None", e[e.Stand = 1] = "Stand", e[e.Run = 2] = "Run", e[e.Throw = 3] = "Throw";
    }(O || (O = {}));
    var X, E = function(e) {
            function PlayerScript(e) {
                var t;
                return _classCallCheck(this, PlayerScript), (t = _possibleConstructorReturn(this, _getPrototypeOf(PlayerScript).call(this))).mAnimState = O.None, t.mMoveDir = new Laya.Vector3(), t.tempDir = new Laya.Vector3(), t.mCtrl = e, t;
            }
            return _inherits(PlayerScript, Laya.Script3D), _createClass(PlayerScript, [{
                key: "setOffestPos",
                value: function(e) {
                    this.mOffsestPos = e;
                }
            }, {
                key: "setCameraPos",
                value: function(e) {
                    this.mCameraPos = e, this.mCameraPos.transform.localPosition = this.mModel.transform.position;
                }
            }, {
                key: "findPoint",
                value: function(e, t) {
                    var i = e.numChildren;
                    if (0 != i) {
                        for (var n = 0; n < i; n++) {
                            var o = e.getChildAt(n);
                            if (o) {
                                if (o.name == t) return o;
                                var a = this.findPoint(o, t);
                                if (a) return a;
                            }
                        }
                        return null;
                    }
                }
            }, {
                key: "refreshGroup",
                value: function() {
                    this.mCharcter.collisionGroup = Math.pow(2, this.mCtrl.mCamp), this.mCharcter.canCollideWith = 4294967295 - this.mCharcter.collisionGroup;
                }
            }, {
                key: "onAwake",
                value: function() {
                    this.mModel = this.owner, this.mCharcter = this.mModel.addComponent(Laya.CharacterController), this.refreshGroup();
                    var e = new Laya.CapsuleColliderShape(1, 3);
                    e.localOffset = new Laya.Vector3(0, 1.5, 0), this.mCharcter.colliderShape = e, this.mAnimator = this.mModel.getComponent(Laya.Animator);
                    var t = this.mModel.getChildAt(1).skinnedMeshRenderer;
                    t.castShadow = !0, t.material.albedoColor = this.mCtrl.mColor;
                }
            }, {
                key: "createDice",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.mDicePoint || (this.mDicePoint = this.findPoint(this.mModel, "Point")), this.mDiceScript = K.Instance.createDice(e, this.mCtrl.mDiceAddLv + t, this.mCtrl.mColor, this.mCtrl.mDotColor, this.mDicePoint, new Laya.Vector3(0, 0, 0)), this.PlayAnim(O.Stand);
                }
            }, {
                key: "setDice",
                value: function(e) {
                    this.mDiceScript = e, this.mDicePoint || (this.mDicePoint = this.findPoint(this.mModel, "Point"));
                    var t = this.mDiceScript.owner;
                    this.mDicePoint.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 0, 0), this.PlayAnim(O.Stand);
                }
            }, {
                key: "onDestroy",
                value: function() {
                    this.mModel = null, this.mCharcter = null, this.mAnimator = null, this.mAnimState = null, this.mMoveDir = null;
                }
            }, {
                key: "onUpdate",
                value: function() {
                    if (this.mAnimState != O.None) {
                        if (this.mOffsestPos && this.mCtrl && this.mModel) {
                            var e = new Laya.Vector3();
                            Laya.Vector3.add(this.mCtrl.masterPosition, this.mOffsestPos, e), Laya.Vector3.subtract(e, this.mModel.transform.position, e), e.y = 0, Laya.Vector3.scalarLengthSquared(e) < .5 && e.setValue(0, 0, 0), this.move(e.x, e.z);
                        }
                        if (this.mMoveDir && this.mCtrl && this.tempDir && (0 != this.mMoveDir.x || 0 != this.mMoveDir.z) && (Laya.Vector3.scale(this.mMoveDir, n.Getdelta() / 1e3 * this.mCtrl.mMoveSpeed, this.tempDir), this.mCharcter.move(this.tempDir)), this.mCameraPos)
                            if (Laya.Vector3.distanceSquared(this.mCameraPos.transform.position, this.mModel.transform.position) < .122 * n.Getdelta()) this.mCameraPos.transform.localPosition = this.mModel.transform.position;
                            else {
                                var t = new Laya.Vector3();
                                Laya.Vector3.subtract(this.mModel.transform.position, this.mCameraPos.transform.position, t), Laya.Vector3.normalize(t, t), Laya.Vector3.scale(t, .011 * n.Getdelta(), t), this.mCameraPos.transform.localPositionX += t.x, this.mCameraPos.transform.localPositionY += t.y, this.mCameraPos.transform.localPositionZ += t.z;
                            }
                    }
                }
            }, {
                key: "onThrowDice",
                value: function(e) {
                    var t = this.mDiceScript.owner;
                    t.transform.position;
                    this.mCtrl.mLevelScene.mScene.addChild(t), this.mModel.removeSelf(), this.mDiceScript.upDice(Laya.Handler.create(this, this.addDiceResults), e, !this.mCtrl.nAI), this.PlayAnim(O.Throw);
                }
            }, {
                key: "realTimeDiceNum",
                value: function() {
                    return this.mDiceScript.ShowDiceNum;
                }
            }, {
                key: "addDiceResults",
                value: function(e) {
                    this.mCtrl.addDiceResults(e);
                }
            }, {
                key: "diceToHuman",
                value: function() {
                    var e = this.mDiceScript.owner;
                    e.parent != this.mDicePoint && (this.mCtrl.mLevelScene.mScene.addChild(this.mModel), this.mModel.transform.position = new Laya.Vector3(e.transform.position.x, 0, e.transform.position.z), this.mDicePoint.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 0, 0), e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.refreshColor());
                }
            }, {
                key: "onTriggerEnter",
                value: function(e) {
                    if (this.mCtrl.isCanthrowDice()) {
                        var t = e.owner;
                        if ("Box" == t.name) {
                            var i = t.getComponent(z);
                            if (i.isCanOpenBox()) return i.getMaxDiceResults() < this.mCtrl.minDiceNum() ? (this.mCtrl.gainBox(i.DiceArray), void i.Death()) : void this.mCtrl.mLevelScene.p2bThrowDice(this.mCtrl, i);
                        }
                    }
                }
            }, {
                key: "onCollisionEnter",
                value: function(e) {
                    if (this.mCtrl.isCanthrowDice()) {
                        var t = e.other.owner;
                        if ("renwu" == t.name) {
                            var i = t.getComponent(PlayerScript);
                            if (i.mCtrl.isCanthrowDice()) return void this.mCtrl.mLevelScene.p2pThrowDice(this.mCtrl, i.mCtrl);
                        }
                    }
                }
            }, {
                key: "PlayAnim",
                value: function(e) {
                    if (this.mAnimState != e) {
                        switch (e) {
                            case O.Stand:
                                this.mAnimator.play("Stand");
                                break;
                            case O.Run:
                                this.mAnimator.play("Run");
                        }
                        this.mAnimState = e;
                    }
                }
            }, {
                key: "move",
                value: function(e, t) {
                    this.mAnimState != O.Run && this.mAnimState != O.Stand || (0 != e || 0 != t ? (Laya.Quaternion.rotationLookAt(new Laya.Vector3(e, 0, -t), new Laya.Vector3(0, 1, 0), this.mModel.transform.rotation), this.mModel.transform.rotation = this.mModel.transform.rotation, this.mMoveDir = new Laya.Vector3(e, 0, t), Laya.Vector3.normalize(this.mMoveDir, this.mMoveDir), this.PlayAnim(O.Run)) : this.stand());
                }
            }, {
                key: "stand",
                value: function() {
                    this.mMoveDir.setValue(0, 0, 0), this.mCharcter.move(this.mMoveDir), this.PlayAnim(O.Stand);
                }
            }, {
                key: "refreshDiceAddLv",
                value: function() {
                    this.mDiceScript.changeDiceAddLv(this.mCtrl.mDiceAddLv);
                }
            }, {
                key: "refreshColor",
                value: function() {
                    this.mModel.getChildAt(1).skinnedMeshRenderer.material.albedoColor = this.mCtrl.mColor, this.mDiceScript.changeDiceColor(this.mCtrl.mColor, this.mCtrl.mDotColor, this.mCtrl.mDiceAddLv);
                }
            }, {
                key: "uninit",
                value: function() {
                    this.mAnimState = O.None, this.mModel = null, this.mCharcter = null, this.mAnimator = null, this.mMoveDir = null, this.mOffsestPos = null, this.mCtrl = null, this.mDiceScript && (this.mDiceScript.uninit(), this.mDiceScript = null), this.mDicePoint = null, this.mCameraPos = null, this.enabled = !1;
                }
            }, {
                key: "position",
                get: function() {
                    return this.mModel.transform.position;
                }
            }]), PlayerScript;
        }(),
        H = function() {
            function DataConfigGlobal() {
                _classCallCheck(this, DataConfigGlobal);
            }
            return _createClass(DataConfigGlobal, null, [{
                key: "getRandomName",
                value: function() {
                    return this.NameTabel[Math.floor(Math.random() * this.NameTabel.length)];
                }
            }, {
                key: "getDiceColor",
                value: function(e) {
                    return this.DiceColorTabel[e] ? new Laya.Vector4(this.DiceColorTabel[e][0], this.DiceColorTabel[e][1], this.DiceColorTabel[e][2], 1) : (1, this.getRandomColor());
                }
            }, {
                key: "getRandomColor",
                value: function() {
                    return new Laya.Vector4(Math.random(), Math.random(), Math.random(), 1);
                }
            }]), DataConfigGlobal;
        }();
    H.BoxQuality = [{
            Id: 1,
            Probability: 2,
            FaceNum: [4]
        }, {
            Id: 2,
            Probability: 10,
            FaceNum: [4, 6]
        }, {
            Id: 3,
            Probability: 5,
            FaceNum: [6, 8]
        }, {
            Id: 4,
            Probability: 3,
            FaceNum: [8, 12]
        }, {
            Id: 5,
            Probability: 1,
            FaceNum: [20]
        }], H.RefreshBox = [{
            Id: 0,
            DiceNum: [1, 1]
        }, {
            Id: 1,
            DiceNum: [1, 1]
        }, {
            Id: 2,
            DiceNum: [1, 2]
        }, {
            Id: 3,
            DiceNum: [2, 3]
        }, {
            Id: 4,
            DiceNum: [3, 3]
        }], H.Reward = [{
            Id: 1,
            Reward: 20
        }, {
            Id: 2,
            Reward: 10
        }, {
            Id: 3,
            Reward: 8
        }, {
            Id: 4,
            Reward: 6
        }, {
            Id: 5,
            Reward: 4
        }, {
            Id: 6,
            Reward: 2
        }, {
            Id: 7,
            Reward: 1
        }, {
            Id: 8,
            Reward: 1
        }, {
            Id: 9,
            Reward: 1
        }, {
            Id: 10,
            Reward: 1
        }], H.NameTabel = ["Rex", "IHax", "Asaurus Rex", "Uber", "?", "OMG", "LOL", "LMAO", "lam", "Milk", "MindOf", "Gamer", "The Gamer", "Dr", "Popper", "Big", "LoveSong", "Ltls Ye", "Person", "Captain", "Total", "The Dude", "The Gaming", "Gaming With", "Mr Game", "Ms Game", "Final Hero", "???", "Command of Truth", "Space and Thunder", "Doubt and Zombies", "Deadbot", "Bodymind", "UItraland", "Farwatch", "Halelith", "Eoweraron", "Nydareven", "Zerrac"], H.DiceColorTabel = [
            [.6, .6, 2],
            [2, .6, .6],
            [.6, 2, .6],
            [2, 2, 0],
            [2, 0, 2],
            [0, 2, 2],
            [2, .7, .1],
            [.7, 2, .1],
            [.1, .7, 2],
            [.1, 2, .7],
            [.7, .1, 2]
        ], H.DiceFace = [4, 6, 8, 12, 20],
        function(e) {
            e[e.None = 0] = "None", e[e.Common = 1] = "Common", e[e.Run = 2] = "Run", e[e.Throw = 3] = "Throw", e[e.Die = 4] = "Die";
        }(X || (X = {}));
    var W = function() {
            function PlayerCtrl(e, t, i, o) {
                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                if (_classCallCheck(this, PlayerCtrl), this.mPlayers = [], this.nAI = !1, this.mCtrlStale = X.None, this.mNotCollisionTime = 0, this.mMoveSpeed = 10, this.mPlayerScenePos = new Laya.Vector3(), this.mTempPos = new Laya.Vector3(), this.mOffsetPos = [], this.mResultSum = 0, this.mNoResultReturnedPlayerNum = -1, this.mLevelScene = e, this.mCamp = o, this.nAI = t, t) {
                    this.mMoveSpeed = 6, this.mCamp == G.bodyColorID ? this.mColor = H.getDiceColor(1) : this.mColor = H.getDiceColor(this.mCamp), this.mName = H.getRandomName(), this.mDotColor = new Laya.Vector4(0, 0, 0, 1), this.mDiceAddLv = v.RandomInt(0, 4), this.mPlayerAI = new P(this);
                    for (var s = v.RandomInt(1, 4), r = 0; r < s; r++) {
                        var l = void 0;
                        if (0 != r) {
                            var h = this.getRetinueOffsetPosition();
                            (l = this.createPlayer(new Laya.Vector3(i.x + h.x, 0, i.z + h.z))).setOffestPos(h);
                        } else l = this.createPlayer(new Laya.Vector3(i.x, 0, i.z));
                        l.createDice(6, r), this.mPlayers.push(l);
                    }
                } else {
                    this.mMoveSpeed = 10, this.mName = n.PlayerName, this.mColor = H.getDiceColor(G.bodyColorID), this.mDotColor = G.diceColor, this.mDiceAddLv = G.AddLv;
                    for (var d = 0; d < G.DiceCounts.length; d++) {
                        var c = G.DiceCounts[d],
                            u = void 0;
                        if (0 != d) {
                            var m = this.getRetinueOffsetPosition();
                            (u = this.createPlayer(new Laya.Vector3(i.x + m.x, 0, i.z + m.z))).setOffestPos(m);
                        } else u = this.createPlayer(new Laya.Vector3(i.x, 0, i.z));
                        u.createDice(c, a), this.mPlayers.push(u);
                    }
                    this.mPlayers[0].setCameraPos(this.mLevelScene.mCameraPos);
                }
                this.mCtrlStale = X.Common, this.mHeadUI = new V(), this.mHeadUI.onEnter(this.mColor, this.mName, this.mPlayers.length);
            }
            return _createClass(PlayerCtrl, [{
                key: "death",
                value: function() {
                    this.mHeadUI.onUninit(), this.mCtrlStale = X.Die, this.mLevelScene.PlayerDeath(this);
                }
            }, {
                key: "uninit",
                value: function() {
                    this.mCtrlStale = X.None, this.mLevelScene = null, this.mColor = null, this.mName = null, this.mDotColor = null;
                    for (var e = 0; e < this.mPlayers.length; e++) this.mPlayers[e].uninit();
                    this.mPlayers = null, this.mPlayerAI && this.mPlayerAI.uninit(), this.mPlayerAI = null, this.mHeadUI.onLeave(), this.mHeadUI.onUninit(), this.mHeadUI = null, this.mPlayerScenePos = null;
                }
            }, {
                key: "addDiceAddLv",
                value: function(e) {
                    this.mDiceAddLv += e;
                    for (var t = 0; t < this.mPlayers.length; t++) this.mPlayers[t].refreshDiceAddLv();
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    if (this.mCtrlStale != X.None && this.mCtrlStale != X.Die && (this.mNotCollisionTime > 0 && (this.mNotCollisionTime -= e), this.mTempPos.x = this.masterPosition.x, this.mTempPos.y = this.masterPosition.y + 3, this.mTempPos.z = this.masterPosition.z, this.mLevelScene.mCamera.viewport.project(this.mTempPos, this.mLevelScene.mCamera.projectionViewMatrix, this.mPlayerScenePos), this.mPlayerScenePos.x *= pe.Instance.DesignBrowserWidthRatio, this.mPlayerScenePos.y *= pe.Instance.DesignBrowserWidthRatio, this.mHeadUI.onRefreshPos(this.mPlayerScenePos.x, this.mPlayerScenePos.y, this.mPlayerScenePos.z), this.mCtrlStale == X.Throw)) {
                        for (var t = 0, i = 0; i < this.mPlayers.length; i++) t += this.mPlayers[i].realTimeDiceNum();
                        this.mHeadUI.showDiceNumer(t);
                    }
                }
            }, {
                key: "collisionWall",
                value: function() {
                    this.nAI && this.mCtrlStale == X.Run && this.mPlayerAI.collisionWall();
                }
            }, {
                key: "createPlayer",
                value: function(e) {
                    var t = R.Instance.get_sprite3D_res("Resources/Conventional/renwu.lh").clone();
                    t;
                    var i = new E(this);
                    return t.addComponentIntance(i), this.mLevelScene.mScene.addChild(t), t.transform.position = e, i;
                }
            }, {
                key: "onMove",
                value: function(e, t) {
                    this.mCtrlStale != X.Die && this.mPlayers[0].move(e, t);
                }
            }, {
                key: "getRetinueOffsetPosition",
                value: function(e, t) {
                    (0 == this.mOffsetPos.length || this.mOffsetPos[this.mOffsetPos.length - 1].length >= 6 * this.mOffsetPos.length) && this.mOffsetPos.push([]);
                    var i = this.mOffsetPos[this.mOffsetPos.length - 1],
                        n = 6 * this.mOffsetPos.length,
                        o = 0;
                    if (e && t) {
                        for (var a = x.Vec2ToAngle(e, t); a < 0;) a += 360;
                        o = Math.floor(a / 360 * n);
                    } else o = Math.floor(Math.random() * n);
                    for (var s = 0; !(-1 == i.indexOf(o + s) && o + s < n);) {
                        if (-1 == i.indexOf(o - s) && o - s >= 0) {
                            s = -s;
                            break;
                        }
                        ++s > 10 && console.error();
                    }
                    o += s, i.push(o);
                    var r = x.AngleToVec(2 * this.mOffsetPos.length, 360 * o / n);
                    return new Laya.Vector3(r.x, 0, r.y);
                }
            }, {
                key: "gainPlayer",
                value: function(e) {
                    e && 0 != e.length;
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        i.mCtrl = this;
                        var n = this.getRetinueOffsetPosition(i.position.x - this.masterPosition.x, i.position.z - this.masterPosition.z);
                        i.setOffestPos(n), i.refreshColor(), i.refreshGroup(), this.mPlayers.push(i);
                    }
                    e = [], this.throwToCommon();
                }
            }, {
                key: "throwToCommon",
                value: function() {
                    for (var e = 0; e < this.mPlayers.length; e++) this.mPlayers[e].diceToHuman(), this.mPlayers[e].stand();
                    this.mHeadUI.onRefreshNum(this.mPlayers.length), this.mHeadUI.onPZOver(), this.mCtrlStale = X.Common, this.mNotCollisionTime = .5, this.mResultSum = 0;
                }
            }, {
                key: "gainBox",
                value: function(e) {
                    e && 0 != e.length;
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = this.createPlayer(i.owner.transform.position);
                        n.setDice(i);
                        var o = this.getRetinueOffsetPosition(n.position.x - this.masterPosition.x, n.position.z - this.masterPosition.z);
                        n.setOffestPos(o), n.refreshColor(), n.refreshGroup(), this.mPlayers.push(n);
                    }
                    this.throwToCommon();
                }
            }, {
                key: "isCanthrowDice",
                value: function() {
                    return (this.mCtrlStale == X.Common || this.mCtrlStale == X.Run) && this.mNotCollisionTime <= 0;
                }
            }, {
                key: "isCanMove",
                value: function() {
                    return this.mCtrlStale == X.Common || this.mCtrlStale == X.Run;
                }
            }, {
                key: "throwDice",
                value: function(e) {
                    this.mResultSum = 0, this.mNoResultReturnedPlayerNum = this.mPlayers.length, this.mCtrlStale = X.Throw;
                    for (var t = 0; t < this.mPlayers.length; t++) this.mPlayers[t].onThrowDice(e);
                    this.mHeadUI.onPZ(), this.nAI || (D.VibrateShort(), D.PlaySound("Collision"));
                }
            }, {
                key: "addDiceResults",
                value: function(e) {
                    this.mResultSum += e, this.mNoResultReturnedPlayerNum--, this.mHeadUI.showDiceNumer(this.mResultSum);
                }
            }, {
                key: "minDiceNum",
                value: function() {
                    return this.mPlayers.length * (this.mDiceAddLv + 1);
                }
            }, {
                key: "maxDiceNum",
                value: function() {
                    for (var e = 0, t = 0; t < this.mPlayers.length; t++) e += this.mPlayers[t].mDiceScript.maxDice;
                    return e;
                }
            }, {
                key: "onLowUpdate",
                value: function() {
                    this.mCtrlStale != X.None && this.mCtrlStale != X.Die && this.nAI && this.mPlayerAI.onLowUpdate();
                }
            }, {
                key: "masterPosition",
                get: function() {
                    return this.mPlayers[0].position;
                }
            }, {
                key: "resultSum",
                get: function() {
                    return this.mResultSum;
                }
            }]), PlayerCtrl;
        }(),
        q = function(t) {
            function Ball(e) {
                var t;
                return _classCallCheck(this, Ball), (t = _possibleConstructorReturn(this, _getPrototypeOf(Ball).call(this))).player = e, t.init(), t;
            }
            return _inherits(Ball, Laya.Sprite), _createClass(Ball, [{
                key: "Win",
                value: function() {
                    var e = this;
                    Laya.timer.once(800, this, function() {
                        e.img3.visible = !0, Laya.timer.once(1e3, e, e.laterWin);
                    });
                }
            }, {
                key: "laterWin",
                value: function() {
                    this.img3.visible = !1;
                }
            }, {
                key: "getPlayer",
                value: function() {
                    return this.player;
                }
            }, {
                key: "init",
                value: function() {
                    this.isShow1 = !1, this.isShow2 = !1, this.img1 = new Laya.Image(), n.kPlatformSDK == e.QQSDK ? this.img1.skin = "AllGame/main_ball.png" : this.img1.skin = "AllGame/main_ui4.png", this.img1.width = 25, this.img1.height = 25, this.img1.anchorX = .5, this.img1.anchorY = .5, this.img1.x = 12.5, this.img1.y = 12.5, this.img2 = new Laya.Image(), this.img2.skin = "AllGame/main_ui31.png", this.img2.width = 60, this.img2.height = 30, this.img4 = new Laya.Image(), this.img4.skin = "AllGame/main_ui31.png", this.img4.width = 60, this.img4.height = 30;
                    var t = [this.player.mColor.x, 0, 0, 0, 0, 0, this.player.mColor.y, 0, 0, 0, 0, 0, this.player.mColor.z, 0, 0, 0, 0, 0, 1, 0],
                        i = new Laya.ColorFilter(t);
                    this.img1.filters = [i], this.img2.filters = [i], this.img4.filters = [i], this.addChild(this.img1), this.addChild(this.img2), this.addChild(this.img4);
                    var o = new Laya.ColorFilter([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
                    this.resultTxt = new Laya.Label(), this.resultTxt.fontSize = 18, this.resultTxt.bold = !0, this.resultTxt.color = "white", this.resultTxt.text = "".concat(this.player.resultSum), this.peopleTxt = new Laya.Label(), this.peopleTxt.fontSize = 18, this.peopleTxt.bold = !0, this.peopleTxt.color = "white", this.peopleTxt.text = "".concat(this.player.mPlayers.length);
                    var a = new Laya.Image();
                    a.skin = "AllGame/dice_Icon.png", a.scaleX = .5, a.scaleY = .5, this.img2.addChild(this.resultTxt), this.img4.addChild(this.peopleTxt), this.img4.addChild(a), this.resultTxt.filters = [o], this.resultTxt.stroke = 2, this.resultTxt.strokeColor = "#000000", this.resultTxt.centerX = 0, this.resultTxt.centerY = 0, this.peopleTxt.filters = [o], this.peopleTxt.width = 20, this.peopleTxt.stroke = 2, this.peopleTxt.strokeColor = "#000000", this.peopleTxt.align = "center", this.peopleTxt.right = 10, this.peopleTxt.centerY = 0, a.filters = [o], a.left = 5, a.centerY = 0, this.img3 = new Laya.Image(), this.img3.skin = "AllGame/main_ui31.png", this.img3.filters = [i], this.img3.width = 60, this.img3.height = 30, this.addChild(this.img3);
                    var s = new Laya.Label();
                    s.text = "WIN", s.fontSize = 18, s.bold = !0, s.color = "black", this.img3.addChild(s), s.centerX = 0, s.centerY = 0, this.img3.visible = !1;
                }
            }, {
                key: "delAll",
                value: function() {
                    Laya.timer.clearAll(this), this.removeSelf(), this.destroy();
                }
            }, {
                key: "showResult",
                value: function() {
                    this.isShow1 = !1, this.isShow2 = !1;
                }
            }, {
                key: "onUpdate",
                value: function() {
                    if (!this.isShow2 && !this.isShow1 && this.player.mCtrlStale == X.Die) return Laya.timer.clearAll(this), this.removeSelf(), void this.destroy();
                    this.xx = this.player.mPlayerScenePos.x, this.yy = this.player.mPlayerScenePos.y, this.yy < -500 && (this.xx *= -1, this.yy *= -1), this.xx < 40 && (this.xx = 40), this.yy < 40 && (this.yy = 40), this.xx > Laya.stage.width - 60 && (this.xx = Laya.stage.width - 60), this.yy > Laya.stage.height - n.bannerheight && (this.yy = Laya.stage.height - n.bannerheight), this.xx < Laya.stage.width - 60 && this.xx > 40 && this.yy < Laya.stage.height - n.bannerheight && this.yy > 40 ? this.img1.visible = !1 : this.img1.visible = !0, this.resultTxt.text = "".concat(this.player.resultSum), this.peopleTxt.text = "".concat(this.player.mPlayers.length), this.img1.visible ? this.isShow1 || 0 != this.player.resultSum && null != this.player.resultSum ? (this.isShow2 || (this.isShow1 = !0, this.isShow2 = !0, Laya.timer.once(800, this, this.showResult)), this.img2.visible = !0, this.img4.visible = !1) : (this.img2.visible = !1, this.img4.visible = !0) : (this.img2.visible = !1, this.img4.visible = !1), this.pos(this.xx, this.yy), 40 == this.x ? (this.img2.x = 25, this.img4.x = 25, this.img3.x = 50) : this.x == Laya.stage.width - 60 ? (this.img2.x = -65, this.img4.x = -65, this.img3.x = -90) : (this.img2.x = 0, this.img4.x = 0, this.img3.x = 0), 40 == this.y ? (this.img2.y = 25, this.img4.y = 25, this.img3.y = 50) : this.y == Laya.stage.height - n.bannerheight ? (this.img2.y = -35, this.img4.y = -35, this.img3.y = -60) : (this.img2.y = 0, this.img4.y = 0, this.img3.y = 0), n.kPlatformSDK == e.QQSDK && (40 == this.x ? 40 == this.y ? this.img1.rotation = 125 : this.y == Laya.stage.height - n.bannerheight ? this.img1.rotation = 270 : this.img1.rotation = 180 : this.x == Laya.stage.width - 60 ? 40 == this.y ? this.img1.rotation = -45 : this.y == Laya.stage.height - n.bannerheight ? this.img1.rotation = -90 : this.img1.rotation = 0 : 40 == this.y ? this.img1.rotation = -90 : this.y == Laya.stage.height - n.bannerheight ? this.img1.rotation = 90 : this.img1.rotation = 0);
                }
            }]), Ball;
        }(),
        Y = function(e) {
            function VideoUI(e) {
                var t;
                return _classCallCheck(this, VideoUI), (t = _possibleConstructorReturn(this, _getPrototypeOf(VideoUI).call(this))).mVideoComplete = e, t.mStep = 0, Laya.stage.addChild(_assertThisInitialized(t)), t.showVideo1(), t.btnNext.on("click", _assertThisInitialized(t), t.onBtnNext), t;
            }
            return _inherits(VideoUI, s.GameVideoUI), _createClass(VideoUI, [{
                key: "showVideo1",
                value: function() {
                    this.mStep = 1, this.mAni = this.creatSeqAnim(0, 0, "video1/video1_#.png", 0, 99, this.boxVideo, 80), this.mAni.play(), this.labDesc.text = "Drag the character and hit the treasure chest";
                }
            }, {
                key: "creatSeqAnim",
                value: function(e, t, i, n, o, a, s) {
                    var r = new Laya.Animation();
                    a.addChild(r);
                    for (var l = [], h = n; h <= o; h++) {
                        var d = i.replace(/#/, h.toString());
                        l.push(d);
                    }
                    return r.loadImages(l, i), r.pos(e, t), r.interval = s, r;
                }
            }, {
                key: "getUrls",
                value: function(e, t, i) {
                    for (var n = [], o = t; o <= i; o++) n.push("".concat(e).concat(o, ".png"));
                    return n;
                }
            }, {
                key: "showVideo2",
                value: function() {
                    this.mStep = 2, this.mAni.destroy(), this.mAni = this.creatSeqAnim(0, 0, "video2/video2_#.png", 0, 70, this.boxVideo, 80), this.mAni.play(), this.labDesc.text = "Drag the character and hit the enemy";
                }
            }, {
                key: "onBtnNext",
                value: function() {
                    1 == this.mStep ? this.showVideo2() : 2 == this.mStep && (this.mVideoComplete && this.mVideoComplete.run(), this.mAni.destroy(), this.mAni = null, this.visible = !1, this.destroy());
                }
            }]), VideoUI;
        }(),
        Q = [{
            id: 1,
            money: 0,
            imgpath: "AllGame/skin_2.png",
            skinpath: "Resources/Conventional/Assets/Scenes/Textures/Floor03_1.png",
            modlepath: "Resources/Conventional/LevelScene1.lh"
        }, {
            id: 2,
            money: 1e3,
            imgpath: "AllGame/skin_3.png",
            skinpath: "Resources/Conventional/Assets/Scenes/Textures/Floor04_1.png",
            modlepath: "Resources/Conventional/LevelScene2.lh"
        }, {
            id: 3,
            money: 1500,
            imgpath: "AllGame/skin_1.png",
            skinpath: "Resources/Conventional/Assets/Scenes/Textures/Floor05_1.png",
            modlepath: "Resources/Conventional/LevelScene3.lh"
        }],
        j = function(t) {
            function LevelUI() {
                var e;
                return _classCallCheck(this, LevelUI), (e = _possibleConstructorReturn(this, _getPrototypeOf(LevelUI).call(this))).IconList = [], e.direction = 1, e.broadcastArray = [{
                    player_1: null,
                    player_2: null
                }], e.JQbol = !1, e.jqCount = 0, e.IsShowjb = !1, e.jbCount = 0, e.JBbol = !1, LevelUI.Instance = _assertThisInitialized(e), e;
            }
            return _inherits(LevelUI, s.GameLevelUI), _createClass(LevelUI, [{
                key: "refreshMore",
                value: function() {
                    var e = this;
                    if (GetSDK().WXConfig && GetSDK().WX_version != GetSDK().WXConfig.zs_version && GetSDK().WXpromotion && GetSDK().WXpromotion.length > 0) {
                        for (var t = [], i = [], n = 0; n < GetSDK().WXpromotion.length; n++) t.push(GetSDK().WXpromotion[n]), i.push(GetSDK().WXpromotion[n]);
                        for (var o = 0; o < GetSDK().WXpromotion.length; o++) t.push(GetSDK().WXpromotion[o]), i.push(GetSDK().WXpromotion[o]);
                    } else if (GetSDK().OPPOConfig && GetSDK().OPPO_version == GetSDK().OPPOConfig.zs_version && Number(GetSDK().OPPOConfig.zs_jump_switch) && GetSDK().OPPOpromotion && GetSDK().OPPOpromotion.length > 0) {
                        this.IconList.splice(0, this.IconList.length);
                        for (var a = 0; a < GetSDK().OPPOpromotion.length; a++) this.IconList.push(GetSDK().OPPOpromotion[a]);
                        this.playToMiniGame(!0);
                    }
                    this.BOT.visible = false;
                }
            }, {
                key: "playToMiniGame",
                value: function(e) {}
            }, {
                key: "GetnavigateIconhts",
                value: function() {
                    if (this.image.skin) {
                        for (var e = 0; e < this.IconList.length; e++)
                            if (this.IconList[e].app_icon == this.image.skin) return void(e == this.IconList.length - 1 ? (this.Name.text = this.IconList[0].app_title, this.image.skin = this.IconList[0].app_icon, this.row = this.IconList[0]) : (this.Name.text = this.IconList[e + 1].app_title, this.image.skin = this.IconList[e + 1].app_icon, this.row = this.IconList[e + 1]));
                    } else this.Name.text = this.IconList[0].app_title, this.image.skin = this.IconList[0].app_icon, this.row = this.IconList[0];
                }
            }, {
                key: "onEnter",
                value: function(t) {
                    t || console.error("bug..."), this.ballArr = [], this.broadcastArray = [], this.time = 0, this.mLevel = t[0], Laya.stage.addChild(this), this.visible = !0, -1 == G.guideStep && this.VideoOver(), this.initBroadcastList(), this.refreshMore();
                }
            }, {
                key: "ShowBall",
                value: function() {
                    if (this.mLevel.mPlayerCtrls)
                        for (var e = 0; e < this.mLevel.mPlayerCtrls.length; e++) {
                            var t = this.mLevel.mPlayerCtrls[e];
                            if (t.nAI && t.mCtrlStale != X.None && t.mCtrlStale != X.Die) {
                                var i = new q(t);
                                this.addChild(i), this.ballArr.push(i);
                            }
                        }
                }
            }, {
                key: "VideoOver",
                value: function() {
                    var e = this;
                    G.guideStep = 1, Laya.Tween.to(this.xsyd, {
                        scaleX: 1,
                        scaleY: 1
                    }, 100, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                        e.anixsyd.play(0, !0), Laya.timer.once(3e3, e, function() {
                            G.guideStep = 2, e.anixsyd.stop(), Laya.Tween.to(e.xsyd, {
                                scaleX: 0,
                                scaleY: 0
                            }, 100);
                        });
                    }));
                }
            }, {
                key: "ShowPF",
                value: function(t) {
                    for (var i = this, o = [], a = 0; a < Q.length; a++) {
                        var s = Q[a],
                            r = {
                                id: 0,
                                money: 0,
                                imgpath: "",
                                skinpath: "",
                                modlepath: "",
                                isown: !1,
                                ischose: !1
                            };
                        r.id = s.id, r.money = s.money, r.imgpath = s.imgpath, r.skinpath = s.skinpath, r.modlepath = s.modlepath;
                        for (var l = 0; l < G.ownskin.length; l++) {
                            if (G.ownskin[l] == s.id) {
                                r.isown = !0;
                                break;
                            }
                        }
                        s.id == G.skinID && (r.ischose = !0), o.push(r);
                    }
                    for (var h, d = [], c = 0; c < o.length; c++) {
                        var u = o[c];
                        u.ischose || (u.isown || d.push(u));
                    }
                    (h = 1 == d.length ? d[0] : Math.random() > .5 ? d[0] : d[1]) ? (this.imgskin.skin = h.imgpath, this.pfUI.visible = !0, this.aniBtnSY.play(0, !0), n.kPlatformSDK == e.ToutiaoSDK ? (this.CheckBox.visible = !0, this.CheckBox.selected = !0) : this.CheckBox.selected = !1, this.btnsy.offAll(), this.btnsy.on(Laya.Event.CLICK, this, this.onbtnsyClick, [t, h]), this.btnClosePF.offAll(), this.btnClosePF.visible = !1, GetSDK().GetType() == e.QQSDK ? GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_version != GetSDK().QQ_version ? setTimeout(function() {
                        i.btnClosePF.visible = !0, i.btnClosePF.on(Laya.Event.CLICK, i, i.onCloseClick, [t]);
                    }, 3e3) : (this.btnClosePF.visible = !0, this.btnClosePF.on(Laya.Event.CLICK, this, this.onCloseClick, [t])) : (this.btnClosePF.visible = !0, n.kPlatformSDK == e.ToutiaoSDK ? this.btnClosePF.on(Laya.Event.CLICK, this, this.onCloseClick, [t, h]) : this.btnClosePF.on(Laya.Event.CLICK, this, this.onCloseClick, [t])), GetSDK().GetType() != e.VivoSDK && GetSDK().ShowBannerAd("LevelUI")) : this.onCloseClick(t);
                }
            }, {
                key: "Enter",
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    this.aniBtnSY.stop(), t && t.runWith(i), this.pfUI.visible = !1, GetSDK().GetType() != e.VivoSDK && GetSDK().GetType() != e.OPPOSDK && GetSDK().HideBannerAd();
                }
            }, {
                key: "onbtnsyClick",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    GetSDK().ShowRewardedVideoAd("btnsy", function(n) {
                        return n && e.Enter(t, i.modlepath);
                    });
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    i && this.CheckBox.selected ? platform.getInstance().showReward((n) => {
                        n && e.Enter(t, i.modlepath)
                    }) : this.Enter(t);
                }
            }, {
                key: "ShowJq",
                value: function(e) {
                    this.jqUI.visible = !0, this.btnjq.bottom = .25 * n.bannerheight, this.BOT.bottom = this.btnjq.height + this.btnjq.bottom, this.anijq.play(0, !0), this.jqCount = 0, this.JQbol = !1, this.jd.width = 1, this.imgds.x = -178, GetSDK().WXConfig && GetSDK().WXConfig.zs_click_award_percent ? this.zs_click_award_percent = JSON.parse(GetSDK().WXConfig.zs_click_award_percent) : this.zs_click_award_percent = [.4, .7], this.btnjq.off(Laya.Event.CLICK, this, this.onjqClick), this.btnjq.on(Laya.Event.CLICK, this, this.onjqClick, [e]);
                }
            }, {
                key: "onjqClick",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = .1;
                    if (GetSDK().WXConfig && GetSDK().WXConfig.zs_click_award_add && (i = Number(GetSDK().WXConfig.zs_click_award_add)), this.jqCount += 360 * i, this.jqCount > 360) this.jqCount = 360;
                    else {
                        var n = Math.floor(this.jqCount / 360 * 100);
                        if (this.jd.width = n / 100 * 360, this.imgds.x = n / 100 * 360 - 178, this.zs_click_award_percent.length > 0) this.jd.width >= 360 * this.zs_click_award_percent[0] && (this.zs_click_award_percent.splice(0, 1), GetSDK().ShowBannerAd("LevelUI"), setTimeout(function() {
                            return GetSDK().HideBannerAd();
                        }, 3e3));
                        else {
                            if (this.JQbol) return;
                            this.JQbol = !0, setTimeout(function() {
                                e.anijq.stop(), t && t.run(), e.BOT.bottom = 1, e.jqUI.visible = !1, GetSDK().HideBannerAd();
                            }, 1500);
                        }
                    }
                }
            }, {
                key: "Showqjb",
                value: function(e) {
                    this.qjb.visible = !0, this.btnqjb.bottom = .25 * n.bannerheight, this.BOT.bottom = this.btnqjb.height + this.btnqjb.bottom, this.anijb.play(0, !0), this.jbCount = 0, this.JBbol = !1, this.IsShowjb = !1, this.jbjd.width = 1, this.imgjb.x = -178, GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_click_award_percent ? this.zs_click_award_percent = JSON.parse(GetSDK().QQHTSConfig.zs_click_award_percent) : this.zs_click_award_percent = [.4, .7], this.btnqjb.off(Laya.Event.CLICK, this, this.onqjbClick), this.btnqjb.on(Laya.Event.CLICK, this, this.onqjbClick, [e]);
                }
            }, {
                key: "onqjbClick",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = .1;
                    if (GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_click_award_add && (i = Number(GetSDK().QQHTSConfig.zs_click_award_add)), this.jbCount += 360 * i, this.jbCount > 360) this.jbCount = 360;
                    else {
                        var n = Math.floor(this.jbCount / 360 * 100);
                        if (this.jbjd.width = n / 100 * 360, this.imgjb.x = n / 100 * 360 - 178, this.zs_click_award_percent.length > 0) this.jbjd.width >= 360 * this.zs_click_award_percent[0] && (this.zs_click_award_percent.splice(0, 1), GetSDK().ShowBannerAd("LevelUI"), setTimeout(function() {
                            return GetSDK().HideBannerAd();
                        }, 3e3));
                        else {
                            if (this.JBbol) return;
                            this.JBbol = !0, setTimeout(function() {
                                e.anijb.stop(), t && t.runWith(Math.floor(10 * Math.random()) + 10), e.BOT.bottom = 1, e.qjb.visible = !1, GetSDK().HideBannerAd();
                            }, 1500);
                        }
                    }
                }
            }, {
                key: "initBroadcastList",
                value: function() {
                    this.broadcastList.array = [], this.broadcastList.array = this.broadcastArray, this.broadcastList.repeatY = this.broadcastArray.length, this.broadcastList.renderHandler = new Laya.Handler(this, this.getBroadcastListData);
                }
            }, {
                key: "getBroadcastListData",
                value: function(e, t) {
                    var i = e.dataSource,
                        n = i.player_1,
                        o = i.player_2,
                        a = e.getChildByName("player_1"),
                        s = e.getChildByName("player_2");
                    a.text = n.mName, s.text = o.mName;
                    var r = [n.mColor.x, 0, 0, 0, 0, 0, n.mColor.y, 0, 0, 0, 0, 0, n.mColor.z, 0, 0, 0, 0, 0, 1, 0],
                        l = new Laya.ColorFilter(r),
                        h = [o.mColor.x, 0, 0, 0, 0, 0, o.mColor.y, 0, 0, 0, 0, 0, o.mColor.z, 0, 0, 0, 0, 0, 1, 0],
                        d = new Laya.ColorFilter(h);
                    a.filters = [l], s.filters = [d];
                }
            }, {
                key: "getBroadcast",
                value: function(e, t) {
                    this.broadcastArray.push({
                        player_1: e,
                        player_2: t
                    }), this.initBroadcastList(), Laya.timer.once(3e3, this, this.clearBroadcast, null, !1);
                }
            }, {
                key: "clearBroadcast",
                value: function() {
                    this.broadcastArray.length > 0 && (this.broadcastArray.splice(0, 1), this.initBroadcastList());
                }
            }, {
                key: "clearBroadAll",
                value: function() {
                    Laya.timer.clearAll(this), this.broadcastArray = [], this.initBroadcastList();
                }
            }, {
                key: "delBallArr",
                value: function() {
                    for (var e = 0; e < this.ballArr.length; e++) this.ballArr[e].delAll();
                }
            }, {
                key: "getWinner",
                value: function(e) {
                    for (var t = 0; t < this.ballArr.length; t++)
                        if (this.ballArr[t].getPlayer() == e) return void this.ballArr[t].Win();
                }
            }, {
                key: "onChallenge",
                value: function() {
                    this.challenge.visible = !0, Laya.timer.once(1e3, this, this.clearChallenge);
                }
            }, {
                key: "clearChallenge",
                value: function() {
                    this.challenge.visible = !1;
                }
            }, {
                key: "setDiceNum",
                value: function(e) {
                    this.DiceNum.text = "".concat(e);
                }
            }, {
                key: "onLeave",
                value: function() {
                    this.removeSelf(), this.visible = !1, this.mLevel = null, this.setInterval && clearInterval(this.setInterval), this.setInterval = null;
                }
            }, {
                key: "onUpdate",
                value: function(t) {
                    this.CheckBox.selected ? this.btnClosePF.text = "Temporary trial" : n.kPlatformSDK == e.ToutiaoSDK ? this.btnClosePF.text = "No" : this.btnClosePF.text = "No, thanks", this.DiceNum.text = "".concat(this.mLevel.mPlayerCtrls.length - this.mLevel.DeadPlayers.length), this.mLevel.nPause || (this.time += t);
                    var i = Math.floor(this.time / 60),
                        o = Math.floor(this.time - 60 * i);
                    this.TimeNum.text = (i > 9 ? i : "0".concat(i)) + ":" + (o > 9 ? o : "0".concat(o));
                    for (var a = 0; a < this.ballArr.length; a++) this.ballArr[a].onUpdate();
                    if (this.broadcastArray.length > 0 ? this.broadcastList.visible = !0 : this.broadcastList.visible = !1, this.jqUI.visible && this.jd.width > 1) {
                        var s = 1;
                        GetSDK().WXConfig && GetSDK().WXConfig.zs_click_award_back && (s = 36 * Number(GetSDK().WXConfig.zs_click_award_back)), this.jqCount -= s, this.jd.width -= s, this.imgds.x -= s, this.jd.width < 1 && (this.jqCount = 0, this.jd.width = 1, this.imgds.x = -178);
                    }
                    if (this.qjb.visible && this.jbjd.width > 1) {
                        var r = 1;
                        GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_click_award_back && (r = 36 * Number(GetSDK().QQHTSConfig.zs_click_award_back)), this.jbCount -= r, this.jbjd.width -= r, this.imgjb.x -= r, this.jbjd.width < 1 && (this.jbCount = 0, this.jbjd.width = 1, this.imgjb.x = -178);
                    }
                }
            }, {
                key: "onUninit",
                value: function() {
                    this.mLevel = null, this.destroy(!0);
                }
            }]), LevelUI;
        }();
    j.Instance = null;
    Laya.Matrix3x3, Laya.Quaternion;
    var F = Laya.Vector2,
        J = (Laya.Vector3, function() {
            function Vec2() {
                _classCallCheck(this, Vec2);
            }
            return _createClass(Vec2, null, [{
                key: "Sub",
                value: function(e, t) {
                    return new F(e.x - t.x, e.y - t.y);
                }
            }, {
                key: "Div",
                value: function(e, t) {
                    return new F(e.x / t.x, e.y / t.y);
                }
            }, {
                key: "DivValue",
                value: function(e, t) {
                    return new F(e.x / t, e.y / t);
                }
            }, {
                key: "Normalize",
                value: function(e) {
                    var t = new F(0, 0);
                    return F.normalize(e, t), t;
                }
            }]), Vec2;
        }()),
        Z = Laya.Event,
        $ = Laya.Vector2,
        ee = function() {
            function Joystick(e, t) {
                _classCallCheck(this, Joystick), this.mJoystickBackground = e, this.mJoystickBar = t, this.offest = !1, this.mTouchID = -1, this.mMousePositionStart = new $(0, 0), this.direction = new $(0, 0);
            }
            return _createClass(Joystick, [{
                key: "Enable",
                value: function() {
                    this.mJoystickBar && (this.mJoystickBar.on(Z.MOUSE_DOWN, this, this.OnMouseDown), this.mJoystickBackground.on(Z.MOUSE_DOWN, this, this.OnMouseDown)), Laya.stage.on(Z.MOUSE_MOVE, this, this.OnMouseMove), Laya.stage.on(Z.MOUSE_UP, this, this.OnMouseUp), Laya.stage.on(Z.MOUSE_OUT, this, this.OnMouseUp), Laya.stage.on(Z.MOUSE_OVER, this, this.OnMouseUp);
                }
            }, {
                key: "Disable",
                value: function() {
                    this.mJoystickBar && this.mJoystickBar.off(Z.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.off(Z.MOUSE_MOVE, this, this.OnMouseMove), Laya.stage.off(Z.MOUSE_UP, this, this.OnMouseUp), Laya.stage.off(Z.MOUSE_OUT, this, this.OnMouseUp), Laya.stage.off(Z.MOUSE_OVER, this, this.OnMouseUp);
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.mJoystickBar && (this.mJoystickBar.centerX = this.direction.x * (this.mJoystickBackground.width / 2), this.mJoystickBar.centerY = this.direction.y * (this.mJoystickBackground.height / 2)), this.offest && this.OnDirectionChanged && this.OnDirectionChanged(this.direction);
                }
            }, {
                key: "Destroy",
                value: function() {
                    this.Disable();
                }
            }, {
                key: "OnMouseDown",
                value: function(e) {
                    null != this.mJoystickBar && null != this.mJoystickBackground && -1 == this.mTouchID && (this.mTouchID = e.touchId, this.mMousePositionStart.setValue(e.stageX, e.stageY));
                }
            }, {
                key: "OnMouseUp",
                value: function(e) {
                    null != this.mJoystickBar && null != this.mJoystickBackground && this.mTouchID == e.touchId && (this.mTouchID = -1, this.mMousePositionStart.setValue(0, 0), this.direction.setValue(0, 0), this.offest = !1, this.OnDirectionChanged && this.OnDirectionChanged(this.direction));
                }
            }, {
                key: "OnMouseMove",
                value: function(e) {
                    if (null != this.mJoystickBar && null != this.mJoystickBackground && this.mTouchID == e.touchId) {
                        var t = new $(this.mJoystickBackground.width / 2, this.mJoystickBackground.height / 2),
                            i = new $(e.stageX, e.stageY),
                            n = J.Div(J.Sub(i, this.mMousePositionStart), t),
                            o = $.scalarLength(n),
                            a = v.Clamp01(o);
                        this.direction.setValue(n.x / o * a, n.y / o * a), isNaN(this.direction.x) && (this.direction.x = 0), isNaN(this.direction.y) && (this.direction.y = 0), this.offest || 0 == this.direction.x && 0 == this.direction.y || (this.offest = !0);
                    }
                }
            }, {
                key: "uninit",
                value: function() {
                    this.OnDirectionChanged = null, this.direction = null, this.mMousePositionStart = null, this.mJoystickBackground = null, this.mJoystickBar = null;
                }
            }]), Joystick;
        }(),
        te = function resLoadingData() {
            _classCallCheck(this, resLoadingData);
        };
    te.gameload_resdata = {
        atlas: []
    }, te.gameMain_resdata = {
        sprite3D: ["Resources/Conventional/Dice_04.lh", "Resources/Conventional/Dice_06.lh", "Resources/Conventional/Dice_08.lh", "Resources/Conventional/Dice_12.lh", "Resources/Conventional/Dice_20.lh", "Resources/Conventional/Upgrade01.lh", "Resources/Conventional/renwu.lh"],
        scene3D: ["Resources/Conventional/main.ls"],
        atlas: ["res/atlas/AllGame.atlas", "res/atlas/wxmore.atlas", "Resources/Conventional/Assets/Scenes/Textures/01.png", "Resources/Conventional/Assets/Scenes/Textures/02.png", "Resources/Conventional/Assets/Scenes/Textures/03.png", "Resources/Conventional/Assets/Scenes/Textures/04.png", "Resources/Conventional/Assets/Scenes/Textures/05.png", "Resources/Conventional/Assets/Scenes/Textures/06.png", "Resources/Conventional/Assets/Scenes/Textures/07.png", "Resources/Conventional/Assets/Scenes/Textures/08.png", "Resources/Conventional/Assets/Scenes/Textures/09.png", "Resources/Conventional/Assets/Scenes/Textures/10.png", "Resources/Conventional/Assets/Scenes/Textures/11.png", "Resources/Conventional/Assets/Scenes/Textures/12.png", "Resources/Conventional/Assets/Scenes/Textures/13.png", "Resources/Conventional/Assets/Scenes/Textures/14.png", "Resources/Conventional/Assets/Scenes/Textures/15.png", "Resources/Conventional/Assets/Scenes/Textures/16.png", "Resources/Conventional/Assets/Scenes/Textures/17.png", "Resources/Conventional/Assets/Scenes/Textures/18.png", "Resources/Conventional/Assets/Scenes/Textures/19.png", "Resources/Conventional/Assets/Scenes/Textures/20.png", "Resources/Conventional/Assets/Scenes/Textures/21.png", "Resources/Conventional/Assets/Scenes/Textures/22.png", "Resources/Conventional/Assets/Scenes/Textures/23.png", "Resources/Conventional/Assets/Scenes/Textures/24.png", "Resources/Conventional/Assets/Scenes/Textures/25.png", "Resources/Conventional/Assets/Scenes/Textures/26.png", "Resources/Conventional/Assets/Scenes/Textures/27.png", "Resources/Conventional/Assets/Scenes/Textures/28.png", "Resources/Conventional/Assets/Scenes/Textures/29.png", "Resources/Conventional/Assets/Scenes/Textures/30.png", "Resources/Conventional/Assets/Scenes/Textures/31.png", "Resources/Conventional/Assets/Scenes/Textures/32.png", "Resources/Conventional/Assets/Scenes/Textures/33.png", "Resources/Conventional/Assets/Scenes/Textures/34.png", "Resources/Conventional/Assets/Scenes/Textures/35.png", "Resources/Conventional/Assets/Scenes/Textures/36.png", "Resources/Conventional/Assets/Scenes/Textures/37.png", "Resources/Conventional/Assets/Scenes/Textures/38.png", "Resources/Conventional/Assets/Scenes/Textures/39.png", "Resources/Conventional/Assets/Scenes/Textures/40.png", "Resources/Conventional/Assets/Scenes/Textures/41.png", "Resources/Conventional/Assets/Scenes/Textures/42.png", "Resources/Conventional/Assets/Scenes/Textures/43.png", "Resources/Conventional/Assets/Scenes/Textures/44.png", "Resources/Conventional/Assets/Scenes/Textures/45.png", "Resources/Conventional/Assets/Scenes/Textures/46.png", "Resources/Conventional/Assets/Scenes/Textures/47.png", "Resources/Conventional/Assets/Scenes/Textures/48.png", "Resources/Conventional/Assets/Scenes/Textures/49.png", "Resources/Conventional/Assets/Scenes/Textures/50.png", "Resources/Conventional/Assets/Scenes/Textures/51.png", "Resources/Conventional/Assets/Scenes/Textures/52.png", "Resources/Conventional/Assets/Scenes/Textures/53.png", "Resources/Conventional/Assets/Scenes/Textures/54.png", "Resources/Conventional/Assets/Scenes/Textures/55.png", "Resources/Conventional/Assets/Scenes/Textures/t_01.png", "Resources/Conventional/Assets/Scenes/Textures/t_02.png", "Resources/Conventional/Assets/Scenes/Textures/t_03.png", "Resources/Conventional/Assets/Scenes/Textures/t_04.png", "Resources/Conventional/Assets/Scenes/Textures/t_05.png", "Resources/Conventional/Assets/Scenes/Textures/t_06.png", "Resources/Conventional/Assets/Scenes/Textures/Floor03_1.png", "Resources/Conventional/Assets/Scenes/Textures/Floor04_1.png", "Resources/Conventional/Assets/Scenes/Textures/Floor05_1.png"]
    }, te.resource_Box = ["Resources/Conventional/baoxiang_mu.lh", "Resources/Conventional/baoxiang_tong.lh", "Resources/Conventional/baoxiang_tie.lh", "Resources/Conventional/baoxiang_ying.lh", "Resources/Conventional/Baoxiang_jing.lh"], te.resource_Dice = ["Resources/Conventional/Dice_04.lh"], te.gameLevel_resdata = {
        sprite3D: ["Resources/Conventional/baoxiang_mu.lh", "Resources/Conventional/baoxiang_tong.lh", "Resources/Conventional/baoxiang_tie.lh", "Resources/Conventional/baoxiang_ying.lh", "Resources/Conventional/Baoxiang_jing.lh", "Resources/Conventional/Flow01.lh", "Resources/Conventional/LevelScene1.lh", "Resources/Conventional/LevelScene2.lh", "Resources/Conventional/LevelScene3.lh"],
        scene3D: ["Resources/Conventional/LevelScene.ls"],
        atlas: ["res/atlas/ui.atlas", "res/atlas/suo.atlas"]
    };
    var ie = function() {
            function BoxManager(e, t) {
                _classCallCheck(this, BoxManager), this.mBoxBornPos = [], this.mBoxBornPos = e, this.levelScence = t, this.boxBornNo = [], this.isLoad = !1;
                for (var i = 0; i < this.mBoxBornPos.length; i++) this.boxBornNo.push(null);
                this.time = 0, this.time_No = -12, this.onPreLoadFinish();
            }
            return _createClass(BoxManager, [{
                key: "onPreLoadFinish",
                value: function() {
                    this.isLoad = !0;
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    if (this.isLoad) {
                        for (var t = [], i = 0; i < this.boxBornNo.length; i++)(null == this.boxBornNo[i] || this.boxBornNo[i].isDie) && t.push(i);
                        if (t.length > 0 && (this.time += e), Math.floor(this.time / 20) >= this.time_No) {
                            var n, o, a;
                            if (this.time_No < H.RefreshBox.length) {
                                var s = this.time_No < 0 ? 0 : this.time_No,
                                    r = H.RefreshBox[s].DiceNum;
                                n = T.getRandomInt(r[0], r[1] + 1);
                            } else n = T.getRandomInt(3, 3);
                            this.time_No++;
                            for (var l = T.getRandomInt(1, 11), h = H.BoxQuality.length - 1; h > -1; h--) {
                                for (var d = 0, c = h + 1; c < H.BoxQuality.length; c++) d += H.BoxQuality[c].Probability;
                                if (l <= H.BoxQuality[h].Probability + d) {
                                    if (o = H.BoxQuality[h].Id - 1, 1 == H.BoxQuality[h].FaceNum.length) a = H.BoxQuality[h].FaceNum[0];
                                    else {
                                        var u = T.getRandomInt(0, H.BoxQuality[h].FaceNum.length);
                                        a = H.BoxQuality[h].FaceNum[u];
                                    }
                                    break;
                                }
                            }
                            var m = te.resource_Box[o],
                                p = m.split("/"),
                                y = p[p.length - 1].split(".")[0],
                                f = R.Instance.get_sprite3D_res(m).clone();
                            f.transform.rotate(new Laya.Vector3(0, 179, 0)), f.name = "Box", this.levelScence.mScene.addChild(f), f.addComponent(z);
                            var g = f.getComponent(z),
                                v = T.getRandomInt(0, t.length);
                            g.init(y, t[v], this.levelScence.mScene, o + 1, n, a, 0);
                            var S = this.mBoxBornPos[t[v]];
                            null != this.boxBornNo[t[v]] && this.boxBornNo[t[v]].del(), this.boxBornNo[t[v]] = g, f.transform.position = S;
                        }
                    }
                }
            }, {
                key: "unLockSeat",
                value: function(e) {
                    this.boxBornNo[e] = null;
                }
            }, {
                key: "unInit",
                value: function() {
                    this.levelScence = null, this.boxBornNo = null, this.mBoxBornPos = null;
                }
            }]), BoxManager;
        }(),
        ne = function(t) {
            function EndUI() {
                var t;
                return _classCallCheck(this, EndUI), (t = _possibleConstructorReturn(this, _getPrototypeOf(EndUI).call(this))).direction = 1, t;
            }
            return _inherits(EndUI, s.GameEndUI), _createClass(EndUI, [{
                key: "refreshMore",
                value: function() {
                    var t = this;
                    if (this.rankList2.bottom = this.bj.bottom - 170, GetSDK().GetType() != e.VivoSDK && GetSDK().GetType() != e.WxSDK && GetSDK().ShowBannerAd("EndUI"), GetSDK().GetType() == e.ToutiaoSDK) {
                        if (!GetSDK().TTpromotion || GetSDK().TTpromotion.length <= 0) return;
                        if (!GetSDK().IsSupportToMiniGame()) return;
                    } else if (this.continue.bottom = 90, GetSDK().GetType() == e.WxSDK) {
                        if (!GetSDK().WXConfig || GetSDK().WX_version == GetSDK().WXConfig.zs_version) return void this.WXclick();
                        if (Number(GetSDK().WXConfig.zs_switch) ? (Number(GetSDK().WXConfig.zs_banner_vertical_enable) ? (this.continueWX.bottom = 10 - n.bannerheight, this.doubleWX.bottom = 10 - n.bannerheight, o.Instance.on(a.kBannerAdShowed, this, function() {
                                t.WXclick(!0);
                            }), GetSDK().ShowBannerAd("EndUI", !0)) : this.WXclick(), Number(GetSDK().WXConfig.zs_banner_horizontal_enable) && (o.Instance.on(a.kGridAdShowed, this, function(i) {
                                GetSDK().GetType() == e.WxSDK;
                            }))) : this.WXclick(), !GetSDK().WXpromotion || GetSDK().WXpromotion.length <= 0) return;
                    } else {
                        if (GetSDK().GetType() != e.OPPOSDK) return;
                        if (!(GetSDK().OPPOConfig && GetSDK().OPPO_version == GetSDK().OPPOConfig.zs_version && Number(GetSDK().OPPOConfig.zs_jump_switch) && GetSDK().OPPOpromotion && GetSDK().OPPOpromotion.length > 0)) return;
                    }
                    this.bj.visible = !0, this.setInterval && clearInterval(this.setInterval), this.setInterval = null;
                    console.log("--------a----------");
                    platform.getInstance().initList(this.list_fail);
                }
            }, {
                key: "WXclick",
                value: function() {
                    var e = this;
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? setTimeout(function() {
                        e.continueWX.on("click", e, e.onContinue), e.doubleWXe.doubleWX.on("click", e, e.onDouble), e.continueWX.bottom = 10, e.doubleWX.bottom = 10;
                    }, 500) : (this.continueWX.on("click", this, this.onContinue), this.doubleWX.on("click", this, this.onDouble), this.continueWX.bottom = 10, this.doubleWX.bottom = 10, GetSDK().ShowBannerAd("EndUI"));
                }
            }, {
                key: "init",
                value: function(t) {
                    this.rankNo = 1;
                    var i, o = [];
                    i = n.kPlatformSDK == e.WxSDK || n.kPlatformSDK == e.ToutiaoSDK || n.kPlatformSDK == e.OPPOSDK;
                    var a = pe.Instance.mLevelScene.mPlayerCtrls,
                        s = pe.Instance.mLevelScene.DeadPlayers;
                    this.winned = t;
                    this.doubleWX.visible = true;
                    if (t) {
                        var r;
                        this.Share.label = "Show off", this.winImg.skin = "AllGame/victory.png", a[0].mMoveSpeed = this.rankNo, this.isPlayer = a[0].mMoveSpeed, this.rankNo++, o.push(a[0]), r = i ? s.length - 2 : 0;
                        for (var l = s.length - 1; l >= r; l--) {
                            var h = s[l];
                            h.mMoveSpeed = this.rankNo, this.rankNo++, o.push(h);
                        }
                    } else {
                        this.Share.label = "Challenge all players", this.winImg.skin = "AllGame/fail.png";
                        for (var d = 0; d < a.length; d++) {
                            for (var c = a[d], u = !0, m = 0; m < s.length; m++) {
                                s[m].mName == c.mName && (u = !1);
                            }
                            if (u && (c.mMoveSpeed = this.rankNo, this.rankNo++, o.push(c), i && o.length >= 2)) break;
                        }
                        for (var p = s.length - 1; p > -1; p--) {
                            var y = s[p];
                            y.nAI || (y.mMoveSpeed = a.length - s.length + s.length - p, this.isPlayer = y.mMoveSpeed, o.push(y));
                        }
                        if (i) {
                            if (o.length < 3)
                                for (var f = s.length - 1; f > -1; f--) {
                                    var g = s[f];
                                    if (g.nAI && (g.mMoveSpeed = a.length - s.length + s.length - f, o.push(g), o.length >= 3)) break;
                                }
                        } else
                            for (var v = s.length - 1; v > -1; v--) {
                                var S = s[v];
                                S.nAI && (S.mMoveSpeed = a.length - s.length + s.length - v, o.push(S));
                            }
                    }
                    this.rankList.visible = true, this.rankList.array = [], this.rankList.array = o, this.rankList.renderHandler = new Laya.Handler(this, this.getRankListData);
                    this.rankList2.visible = false, this.list_fail.visible = true;
                    HUHU_showInterstitialAd();
                    platform.getInstance().initList(this.list_fail);
                }
            }, {
                key: "clickInit",
                value: function() {
                    var t = this;
                    if (this.double.on("click", this, this.onDouble), GetSDK().GetType() == e.ToutiaoSDK) setTimeout(function() {
                        t.continue.on("click", t, t.onContinue), t.continue.visible = !0;
                    }, 2e3);
                    else if (GetSDK().GetType() == e.QQSDK) {
                        var i = function() {
                            t.CheckAni.play(0, !0), t.CheckBox.visible = !0, t.CheckBox.on(Laya.Event.CHANGE, t, function() {
                                t.CheckBox.selected ? t.double.label = "Multiple receipt" : t.double.label = "CLAIM";
                            });
                        };
                        this.Video.visible = !1, this.continue.visible = !1, this.CheckBox.selected ? this.double.label = "Multiple receipt" : this.double.label = "CLAIM", GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_version != GetSDK().QQ_version ? setTimeout(function() {
                            return i();
                        }, 3e3) : i();
                    } else GetSDK().GetType() == e.WxSDK ? (this.continue.centerX = 90, this.double.visible = !1, this.continue.visible = !1, this.double.offAll(), this.doubleWX.visible = !0, this.continueWX.visible = !0) : this.continue.on("click", this, this.onContinue);
                    this.Share.visible = GetSDK().IsSupportRecord(), this.Share.visible && (this.aniShare.play(0, !0), this.Share.on("click", this, this.onShare));
                }
            }, {
                key: "getRankListData",
                value: function(e, t) {
                    var i, n = e.dataSource,
                        o = e.getChildByName("floor"),
                        a = e.getChildByName("name"),
                        s = e.getChildByName("diceImg"),
                        r = e.getChildByName("moneyImg"),
                        l = e.getChildByName("moneyNum"),
                        h = e.getChildByName("rankNo"),
                        d = [n.mColor.x, 0, 0, 0, 0, 0, n.mColor.y, 0, 0, 0, 0, 0, n.mColor.z, 0, 0, 0, 0, 0, 1, 0],
                        c = new Laya.ColorFilter(d),
                        u = new Laya.ColorFilter([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
                    o.filters = [c], a.text = n.mName, n.nAI ? (o.alpha = .5, i = H.Reward[n.mMoveSpeed - 1].Reward) : (i = H.Reward[n.mMoveSpeed - 1].Reward + this.addGoldNum, this.goldNum = i), t >= this.isPlayer ? (n.nAI && (o.filters = []), s.visible = !1, h.visible = !0, h.text = n.mMoveSpeed + "TH") : (s.visible = !0, h.visible = !1), i > 0 ? (r.visible = !0, l.text = "".concat(i)) : (r.visible = !1, l.visible = !1);
                }
            }, {
                key: "EnterMainScene",
                value: function() {
                    j.Instance.delBallArr(), pe.Instance.onLeaveLevelScene(), pe.Instance.onEnterMainScene()
                }
            }, {
                key: "onContinue",
                value: function() {
                    C.iscontinue = !0, G.Gold += this.goldNum, this.EnterMainScene();
                }
            }, {
                key: "onDouble",
                value: function() {
                    var t = this,
                        i = function() {
                            return platform.getInstance().showReward(function(e) {
                                (G.Gold += 2 * t.goldNum, t.EnterMainScene());
                            });
                        };
                    GetSDK().GetType() == e.QQSDK ? this.CheckBox.selected ? i() : this.onContinue() : i();
                }
            }, {
                key: "onShare",
                value: function() {
                    var e = this;
                    GetSDK().ShareRecord("EndUI", function(t) {
                        t && (e.Share.disabled = !0);
                    });
                }
            }, {
                key: "onEnter",
                value: function(e) {
                    if (window["yad"]) {
                        window["yad"].top = 0;
                        window["yad"].centerX = -(Laya.stage.width - window["yad"].width) / 2;
                    }
                    Laya.timer.once(1e3, this, this.addThis), this.addGoldNum = e[0][1], this.isWin = e[0][0], C.iscontinue = !1, GetSDK().IsSupportRecord() && GetSDK().StopRecord();
                }
            }, {
                key: "addThis",
                value: function() {
                    Laya.stage.addChild(this), this.visible = !0, this.refreshUI(), GetSDK().GetType() == e.ToutiaoSDK && (this.continue.visible = !1), this.clickInit(), this.refreshMore(), this.init(this.isWin), GetSDK().ShowInterstitialAd("EndUI", null);
                }
            }, {
                key: "onLeave",
                value: function() {
                    this.setInterval && clearInterval(this.setInterval), this.setInterval = null, GetSDK().HideGridAd(), this.Share.visible && this.aniShare.stop(), this.CheckBox.visible && this.CheckAni.stop(), this.removeSelf(), this.visible = !1, this.destroy(!0);
                }
            }, {
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "onUninit",
                value: function() {}
            }, {
                key: "refreshUI",
                value: function() {}
            }]), EndUI;
        }(),
        oe = function(t) {
            function RebornUI() {
                return _classCallCheck(this, RebornUI), _possibleConstructorReturn(this, _getPrototypeOf(RebornUI).call(this));
            }
            return _inherits(RebornUI, s.GameRebornUI), _createClass(RebornUI, [{
                key: "clickInit",
                value: function() {
                    this.reborn.on("click", this, this.Reborn), this.thank.on("click", this, this.Thank);
                }
            }, {
                key: "Reborn",
                value: function() {
                    platform.getInstance().showReward((e) => {
                        (pe.Instance.isReborn = !0, pe.Instance.mLevelScene.PlayerReborn()), this.onLeave();
                    });
                }
            }, {
                key: "Thank",
                value: function() {
                    GetSDK().GetType() == e.QQSDK && GetSDK().QQHTSConfig && GetSDK().QQHTSConfig.zs_version != GetSDK().QQ_version ? pe.Instance.mLevelScene.ShowqjbData() : L.Instance.ChangeUI(ne, [!1, 0]), this.onLeave();
                }
            }, {
                key: "onEnter",
                value: function() {
                    this.bj.visible = true;
                    console.log("--------a----------");
                    platform.getInstance().initList(this.LIST);
                    Laya.stage.addChild(this), this.clickInit(), this.visible = !0;
                }
            }, {
                key: "onLeave",
                value: function() {
                    this.removeSelf(), this.visible = !1, this.destroy(!0);
                }
            }]), RebornUI;
        }(),
        ae = function() {
            function LevelScene() {
                _classCallCheck(this, LevelScene), this.mPlayerCtrls = [], this.nInited = !1, this.mBoxBornPostions = [], this.modlepf = null, this.mTempVec3 = new Laya.Vector3(), this.DeadPlayers = [], this.mP2PWaitingThrowResult = [], this.mP2BWaitingThrowResult = [], this.nPause = !1;
            }
            return _createClass(LevelScene, [{
                key: "init",
                value: function() {
                    var t = this;
                    G.guideStep < 2 && (G.guideStep = -1), this.mScene = R.Instance.get_scens3d_res("Resources/Conventional/LevelScene.ls"), Laya.stage.addChild(this.mScene);
                    var i = this.mScene.getChildByName("BoxBornPoints");
                    this.mBoxBornPostions = [];
                    for (var o = 0; o < i.numChildren; o++) {
                        var a = i.getChildAt(o);
                        this.mBoxBornPostions.push(a.transform.position);
                    }
                    this.mBoxManager = new ie(this.mBoxBornPostions, this), this.mCameraPos = this.mScene.getChildByName("CameraPosition"), this.mCamera = this.mCameraPos.getChildAt(0);
                    var s = this.mScene.getChildByName("PlayerBornPoints");
                    this.mPlayerCount = s.numChildren, this.mScene.ambientColor = new Laya.Vector3(.4, .4, .4);
                    var r = this.mScene.getChildByName("DirectionalLight");
                    r.shadow = !0, r.shadowDistance = 40, r.color = new Laya.Vector3(1, 1, 1), r.intensity = .7;
                    var l = this.mScene.getChildByName("Ground").getComponent(Laya.PhysicsCollider);
                    l.restitution = .6, this.refPF(Q[G.skinID - 1].modlepath), l.rollingFriction = .2;
                    var h = s.getChildAt(0).transform.position;
                    this.mPlayerCtrls.push(new W(this, !1, h, 1)), this.mUI = L.Instance.ChangeUI(j, this), G.guideStep >= 2 ? n.kPlatformSDK == e.WxSDK ? n.ShowJq && GetSDK().WXConfig && GetSDK().WX_version != GetSDK().WXConfig.zs_version && Number(GetSDK().WXConfig.zs_switch) && Number(GetSDK().WXConfig.zs_click_award_num) ? this.ShowJQData() : this.createAI() : (n.kPlatformSDK == e.QQSDK || n.kPlatformSDK == e.VivoSDK || (n.kPlatformSDK, e.ToutiaoSDK), this.ShowPFData()) : Laya.timer.frameLoop(1, this, this.onGuideStep2Over), this.mJoystick = new ee(this.mUI.imgJoystickBackground, this.mUI.imgJoystickBar), this.mJoystick.OnDirectionChanged = this.onMoveMainPlayer.bind(this), this.mJoystick.Enable(), this.nInited = !0, n.kPlatformSDK == e.DummySDK && Laya.stage.on(Laya.Event.KEY_UP, this, function(e) {
                        80 == e.keyCode && (t.nPause ? t.Show() : t.Hide());
                    });
                }
            }, {
                key: "refPF",
                value: function(e) {
                    this.modlepf && (this.modlepf.removeSelf(), this.modlepf.destroy(), this.modlepf = null), this.modlepf = R.Instance.get_sprite3D_res("".concat(e)).clone(), this.mScene.addChild(this.modlepf), this.modlepf.getChildByName("Floor").getChildAt(0).meshRenderer.receiveShadow = !0;
                    for (var t = this.modlepf.getChildByName("th"), i = 0; i < t.numChildren; i++) t.getChildAt(i).meshRenderer.castShadow = !0;
                    for (var n = this.modlepf.getChildByName("ht"), o = 0; o < n.numChildren; o++) n.getChildAt(o).meshRenderer.receiveShadow = !0;
                }
            }, {
                key: "isInScreen",
                value: function(e) {
                    return this.mCamera ? (this.mCamera.viewport.project(e, this.mCamera.projectionViewMatrix, this.mTempVec3), this.mTempVec3.x *= pe.Instance.DesignBrowserWidthRatio, this.mTempVec3.y *= pe.Instance.DesignBrowserWidthRatio, !(this.mTempVec3.x < -100 || this.mTempVec3.y < -50 || this.mTempVec3.x > Laya.stage.width + 100 || this.mTempVec3.y > Laya.stage.height + 150)) : (console.error("bug...."), !1);
                }
            }, {
                key: "addPlayerDiceAddLv",
                value: function(e) {
                    this.mPlayerCtrls[0].addDiceAddLv(e);
                }
            }, {
                key: "ShowPFData",
                value: function() {
                    var e = this,
                        t = Laya.Handler.create(this, function(i) {
                            "" != i && (e.refPF(i), pe.Instance.ShowTip("Congratulations, you changed the skin.")), e.createAI(), t.clear();
                        });
                    this.mUI.ShowPF(t);
                }
            }, {
                key: "ShowJQData",
                value: function() {
                    var e = this,
                        t = Laya.Handler.create(this, function() {
                            e.addPlayerDiceAddLv(5), e.createAI(), pe.Instance.ShowTip("Energy gathers completed, player number+".concat(5, ".")), t.clear();
                        });
                    this.mUI.ShowJq(t);
                }
            }, {
                key: "ShowqjbData",
                value: function() {
                    if (window["yad"]) {
                        window["yad"].top = 0;
                        window["yad"].centerX = -(Laya.stage.width - window["yad"].width) / 2;
                    }
                    var e = this,
                        t = Laya.Handler.create(this, function(i) {
                            pe.Instance.ShowTip("You get coins+".concat(i, ".")), L.Instance.ChangeUI(ne, [e.isWin, i]), t.clear();
                        });
                    this.mUI.Showqjb(t);
                }
            }, {
                key: "createAI",
                value: function() {
                    for (var e = this.mScene.getChildByName("PlayerBornPoints"), t = 1; t < e.numChildren; t++) {
                        var i = e.getChildAt(t).transform.position;
                        this.mPlayerCtrls.push(new W(this, !0, i, t + 1));
                    }
                    this.mUI.ShowBall();
                }
            }, {
                key: "onGuideStep2Over",
                value: function() {
                    2 == G.guideStep && (Laya.timer.clear(this, this.onGuideStep2Over), this.createAI());
                }
            }, {
                key: "onMoveMainPlayer",
                value: function(e) {
                    this.mPlayerCtrls[0].onMove(-e.x, -e.y);
                }
            }, {
                key: "uninit",
                value: function() {
                    Laya.timer.clearAll(this), this.nInited = !1, this.mUI = null, this.mTempVec3 = null, this.mJoystick.uninit(), this.mJoystick = null, this.mCameraPos = null, this.mCamera = null, this.mOtherCollidePlayer = null;
                    for (var e = 0; e < this.DeadPlayers.length; e++) this.DeadPlayers[e] = null;
                    this.DeadPlayers = null;
                    for (var t = 0; t < this.mPlayerCtrls.length; t++) this.mPlayerCtrls[t].uninit();
                    this.mPlayerCtrls = null;
                    for (var i = 0; i < this.mP2BWaitingThrowResult.length; i++) this.mP2BWaitingThrowResult[i] = null;
                    this.mP2BWaitingThrowResult = null;
                    for (var n = 0; n < this.mP2PWaitingThrowResult.length; n++) this.mP2PWaitingThrowResult[n] = null;
                    this.mP2PWaitingThrowResult = null, this.mBoxManager.unInit(), this.mBoxManager = null;
                    for (var o = 0; o < this.mBoxBornPostions.length; o++) this.mBoxBornPostions[o] = null;
                    this.mBoxBornPostions = null, R.Instance.reloase_res_pkg(te.gameLevel_resdata), this.mScene.destroy(), this.mScene = null;
                }
            }, {
                key: "onGameEnd",
                value: function() {
                    this.mUI.clearBroadAll()
                    if (this.isWin) {
                        if (GetSDK().QQ_version) {
                            this.ShowqjbData();
                        } else {
                            L.Instance.ChangeUI(ne, [this.isWin, 0]);
                        }
                    } else {
                        this.ShowqjbData();
                    }
                    this.nInited = !1;
                }
            }, {
                key: "mainPlayerCollide",
                value: function(e) {
                    this.mOtherCollidePlayer = e, this.pauseGame(), new oe().onEnter();
                }
            }, {
                key: "pauseGame",
                value: function() {
                    this.Hide();
                }
            }, {
                key: "continueGame",
                value: function() {
                    this.Show();
                }
            }, {
                key: "PlayerReborn",
                value: function() {
                    this.mPlayerCtrls[0].throwToCommon(), this.mPlayerCtrls[0].mNotCollisionTime = 3, this.mOtherCollidePlayer && (this.mOtherCollidePlayer.throwToCommon(), this.mOtherCollidePlayer = null), this.continueGame();
                }
            }, {
                key: "PlayerDeath",
                value: function(e) {
                    this.DeadPlayers.push(e), e.nAI ? this.DeadPlayers.length == this.mPlayerCtrls.length - 1 && (this.isWin = !0, this.onGameEnd()) : (this.mUI.clearBroadAll(), this.isWin = !1, this.onGameEnd());
                }
            }, {
                key: "p2pThrowDice",
                value: function(e, t) {
                    e.nAI && t.nAI || this.mUI.onChallenge();
                    var i = this.isInScreen(e.masterPosition) || this.isInScreen(t.masterPosition);
                    e.throwDice(i), t.throwDice(i), this.mP2PWaitingThrowResult.push([e, t]);
                }
            }, {
                key: "p2bThrowDice",
                value: function(e, t) {
                    var i = this.isInScreen(e.masterPosition) || this.isInScreen(t.owner.transform.position);
                    e.throwDice(i), t.openBox(i), this.mP2BWaitingThrowResult.push([e, t]);
                }
            }, {
                key: "onUpdate",
                value: function(t) {
                    if (this.nInited) {
                        for (var i = this.mP2PWaitingThrowResult.length - 1; i >= 0; i--) {
                            var o = this.mP2PWaitingThrowResult[i];
                            if (0 == o[0].mNoResultReturnedPlayerNum && 0 == o[1].mNoResultReturnedPlayerNum) {
                                if (o[0].resultSum >= o[1].resultSum) {
                                    this.mUI.getBroadcast(o[0], o[1]), this.mUI.getWinner(o[0])
                                    if (1 != o[1].mCamp || pe.Instance.isReborn) {
                                        o[0].gainPlayer(o[1].mPlayers), o[1].death()
                                    } else {
                                        this.mainPlayerCollide(o[0])
                                    }
                                } else if (o[0].resultSum < o[1].resultSum) {
                                    this.mUI.getBroadcast(o[1], o[0]), this.mUI.getWinner(o[1])
                                    if (1 != o[0].mCamp || pe.Instance.isReborn) {
                                        o[1].gainPlayer(o[0].mPlayers), o[0].death()
                                    } else {
                                        this.mainPlayerCollide(o[1])
                                    }
                                }
                                this.mP2PWaitingThrowResult.splice(i, 1);
                            }
                        }
                        for (var a = this.mP2BWaitingThrowResult.length - 1; a >= 0; a--) {
                            var s = this.mP2BWaitingThrowResult[a];
                            0 == s[0].mNoResultReturnedPlayerNum && 0 == s[1].RememberDiceNum && (s[0].resultSum > s[1].UpDiceDatNum ? (this.mUI.getWinner(s[0]), s[0].gainBox(s[1].DiceArray), s[1].Death()) : (s[0].throwToCommon(), s[1].lockUp()), this.mP2BWaitingThrowResult.splice(a, 1));
                        }
                        if (!this.nPause) {
                            this.mJoystick.onUpdate(), this.mBoxManager.onUpdate(t);
                            for (var r = 0; r < this.mPlayerCtrls.length; r++) this.mPlayerCtrls[r].onUpdate(t);
                        }
                    }
                }
            }, {
                key: "onLowUpdate",
                value: function() {
                    if (this.nInited && !this.nPause)
                        for (var e = 0; e < this.mPlayerCtrls.length; e++) this.mPlayerCtrls[e].onLowUpdate();
                }
            }, {
                key: "Show",
                value: function() {
                    this.nPause = !1;
                }
            }, {
                key: "Hide",
                value: function() {
                    this.nPause = !0;
                    for (var e = 0; e < this.mPlayerCtrls.length; e++) {
                        this.mPlayerCtrls[e].onMove(0, 0);
                    }
                }
            }]), LevelScene;
        }(),
        se = [{
            level: 1,
            dice: "[6]",
            money: 50
        }, {
            level: 2,
            dice: "[6,6]",
            money: 100
        }, {
            level: 3,
            dice: "[6,6,6]",
            money: 200
        }, {
            level: 4,
            dice: "[8,6,6]",
            money: 300
        }, {
            level: 5,
            dice: "[8,8,6]",
            money: 500
        }, {
            level: 6,
            dice: "[8,8,8]",
            money: 1e3
        }, {
            level: 7,
            dice: "[8,8,8,6]",
            money: 1500
        }, {
            level: 8,
            dice: "[8,8,8,8]",
            money: 2e3
        }, {
            level: 9,
            dice: "[12,8,8,8]",
            money: 2500
        }, {
            level: 10,
            dice: "[12,12,8,8]",
            money: 3e3
        }, {
            level: 11,
            dice: "[12,12,12,8]",
            money: 3500
        }, {
            level: 12,
            dice: "[12,12,12,12]",
            money: 0
        }],
        re = [{
            id: 1,
            money: 40
        }, {
            id: 2,
            money: 80
        }, {
            id: 3,
            money: 120
        }, {
            id: 4,
            money: 160
        }, {
            id: 5,
            money: 200
        }, {
            id: 6,
            money: 240
        }, {
            id: 7,
            money: 280
        }, {
            id: 8,
            money: 320
        }, {
            id: 9,
            money: 360
        }, {
            id: 10,
            money: 400
        }, {
            id: 11,
            money: 440
        }, {
            id: 12,
            money: 480
        }, {
            id: 13,
            money: 520
        }, {
            id: 14,
            money: 560
        }, {
            id: 15,
            money: 600
        }, {
            id: 16,
            money: 640
        }, {
            id: 17,
            money: 680
        }, {
            id: 18,
            money: 720
        }, {
            id: 19,
            money: 760
        }, {
            id: 20,
            money: 800
        }],
        le = function(e) {
            function MoreGame() {
                var e;
                return _classCallCheck(this, MoreGame), (e = _possibleConstructorReturn(this, _getPrototypeOf(MoreGame).call(this))).ClickJX = !1, e.direction1 = 1, e.direction2 = 1, e.visible = !1, e.zOrder = 2e3, e.LIST1.hScrollBarSkin = "", e.LIST1.mouseEnabled = !0, e.LIST1.mouseHandler = new Laya.Handler(_assertThisInitialized(e), function(t, i) {
                    return t.type == Laya.Event.MOUSE_DOWN && GetSDK().navigateToMiniGame(e.LIST1.array[i]);
                }), e.LIST1.renderHandler = new Laya.Handler(_assertThisInitialized(e), n.updateKnapsackItem), e.LIST2.vScrollBarSkin = "", e.LIST2.mouseEnabled = !0, e.LIST2.mouseHandler = new Laya.Handler(_assertThisInitialized(e), function(t, i) {
                    return t.type == Laya.Event.MOUSE_DOWN && GetSDK().navigateToMiniGame(e.LIST2.array[i]);
                }), e.LIST2.renderHandler = new Laya.Handler(_assertThisInitialized(e), n.updateKnapsackItem), e.back.on(Laya.Event.CLICK, _assertThisInitialized(e), e.Hide), e.JX.on(Laya.Event.CLICK, _assertThisInitialized(e), e.m_JX), Laya.stage.addChild(_assertThisInitialized(e)), e;
            }
            return _inherits(MoreGame, s.MoreGameUI), _createClass(MoreGame, [{
                key: "m_JX",
                value: function() {
                    this.ClickJX ? this.Hide() : (GetSDK().navigateToMiniGame(this.LIST1.array[Math.floor(Math.random() * this.LIST1.array.length)]), this.ClickJX = !0, this.JX.label = "CONTINUE");
                }
            }, {
                key: "Show",
                value: function() {
                    var e = this;
                    if (GetSDK().WXConfig && GetSDK().WX_version != GetSDK().WXConfig.zs_version && GetSDK().WXpromotion && !(GetSDK().WXpromotion.length <= 0)) {
                        this.ClickJX = !1, this.JX.label = "Random", setTimeout(function() {
                            e.ClickJX = !0, e.JX.label = "CONTINUE";
                        }, 3500);
                        for (var t = [], i = [], n = 0; n < GetSDK().WXpromotion.length; n++) t.push(GetSDK().WXpromotion[n]), i.push(GetSDK().WXpromotion[n]);
                        for (var o = 0; o < GetSDK().WXpromotion.length; o++) t.push(GetSDK().WXpromotion[o]), i.push(GetSDK().WXpromotion[o]);
                        this.LIST1.array = t.sort(function() {
                            return Math.random() - .5;
                        }), this.LIST2.array = t.sort(function() {
                            return Math.random() - .5;
                        }), this.visible = !0, this.SetInterval();
                    }
                }
            }, {
                key: "Hide",
                value: function() {
                    this.ClearInterval(), this.visible = !1;
                }
            }, {
                key: "ClearInterval",
                value: function() {
                    this.m_setInterval1 && clearInterval(this.m_setInterval1), this.m_setInterval1 = null, this.m_setInterval2 && clearInterval(this.m_setInterval2), this.m_setInterval2 = null;
                }
            }, {
                key: "SetInterval",
                value: function() {
                    var e = this;
                    this.ClearInterval(), this.LIST1.scrollBar.value = this.LIST1.scrollBar.min + .1, this.m_setInterval1 = setInterval(function() {
                        e.LIST1.scrollBar.value >= e.LIST1.scrollBar.max ? (e.LIST1.scrollBar.value = e.LIST1.scrollBar.max - .1, e.direction1 = -1) : e.LIST1.scrollBar.value <= e.LIST1.scrollBar.min ? (e.LIST1.scrollBar.value = e.LIST1.scrollBar.min + .1, e.direction1 = 1) : e.LIST1.scrollBar.value += e.direction1;
                    }, 10), this.LIST2.scrollBar.value = this.LIST2.scrollBar.min + .1, this.m_setInterval2 = setInterval(function() {
                        e.LIST2.scrollBar.value >= e.LIST2.scrollBar.max ? (e.LIST2.scrollBar.value = e.LIST2.scrollBar.max - .1, e.direction2 = -1) : e.LIST2.scrollBar.value <= e.LIST2.scrollBar.min ? (e.LIST2.scrollBar.value = e.LIST2.scrollBar.min + .1, e.direction2 = 1) : e.LIST2.scrollBar.value += e.direction2;
                    }, 10);
                }
            }], [{
                key: "Instance",
                get: function() {
                    return this.m_MoreGame || (this.m_MoreGame = new MoreGame()), this.m_MoreGame;
                }
            }]), MoreGame;
        }();
    le.m_MoreGame = null;
    var he = function(e) {
        function MoreInsertGame() {
            var e;
            return _classCallCheck(this, MoreInsertGame), (e = _possibleConstructorReturn(this, _getPrototypeOf(MoreInsertGame).call(this))).direction1 = 1, e.visible = !1, e.zOrder = 2e3, e.LIST.vScrollBarSkin = "", e.LIST.mouseEnabled = !0, e.LIST.mouseHandler = new Laya.Handler(_assertThisInitialized(e), function(t, i) {
                return t.type == Laya.Event.MOUSE_DOWN && GetSDK().navigateToMiniGame(e.LIST.array[i]);
            }), e.LIST.renderHandler = new Laya.Handler(_assertThisInitialized(e), n.updateKnapsackItem), Laya.stage.addChild(_assertThisInitialized(e)), e;
        }
        return _inherits(MoreInsertGame, s.MoreInsertGameUI), _createClass(MoreInsertGame, [{
            key: "CloseCLICK",
            value: function() {
                this.Close.on(Laya.Event.CLICK, this, this.Hide);
            }
        }, {
            key: "Show",
            value: function() {
                var e = this;
                if (GetSDK().WXConfig && GetSDK().WX_version != GetSDK().WXConfig.zs_version && GetSDK().WXpromotion && !(GetSDK().WXpromotion.length <= 0)) {
                    this.Close.bottom = n.bannerheight + n.Addbottom, GetSDK().WXConfig && GetSDK().WX_version != GetSDK().WXConfig.zs_version && Number(GetSDK().WXConfig.zs_switch) && Number(GetSDK().WXConfig.zs_banner_vertical_enable) ? (this.Close.bottom = 10, o.Instance.on(a.kBannerAdShowed, this, function() {
                        setTimeout(function() {
                            e.CloseCLICK(), e.Close.bottom = n.bannerheight + +n.Addbottom;
                        }, 500);
                    })) : this.CloseCLICK(), GetSDK().ShowBannerAd("MoreInsertGame", !0);
                    for (var t = [], i = 0; i < GetSDK().WXpromotion.length; i++) t.push(GetSDK().WXpromotion[i]);
                    for (var s = 0; s < GetSDK().WXpromotion.length; s++) t.push(GetSDK().WXpromotion[s]);
                    this.LIST.array = t.sort(function() {
                        return Math.random() - .5;
                    }), this.visible = !0, this.SetInterval();
                }
            }
        }, {
            key: "Hide",
            value: function() {
                GetSDK().HideBannerAd(), this.ClearInterval(), this.visible = !1;
            }
        }, {
            key: "ClearInterval",
            value: function() {
                this.m_setInterval1 && clearInterval(this.m_setInterval1), this.m_setInterval1 = null;
            }
        }, {
            key: "SetInterval",
            value: function() {
                var e = this;
                this.ClearInterval(), this.LIST.scrollBar.value = this.LIST.scrollBar.min + .1, this.m_setInterval1 = setInterval(function() {
                    e.LIST.scrollBar.value >= e.LIST.scrollBar.max ? (e.LIST.scrollBar.value = e.LIST.scrollBar.max - .1, e.direction1 = -1) : e.LIST.scrollBar.value <= e.LIST.scrollBar.min ? (e.LIST.scrollBar.value = e.LIST.scrollBar.min + .1, e.direction1 = 1) : e.LIST.scrollBar.value += e.direction1;
                }, 10);
            }
        }], [{
            key: "Instance",
            get: function() {
                return this.m_MoreInsertGame || (this.m_MoreInsertGame = new MoreInsertGame()), this.m_MoreInsertGame;
            }
        }]), MoreInsertGame;
    }();
    he.m_MoreInsertGame = null;
    var de = function(t) {
            function MainUI() {
                var t;
                return _classCallCheck(this, MainUI), (t = _possibleConstructorReturn(this, _getPrototypeOf(MainUI).call(this))).IconList = [], t.direction1 = 1, t.direction2 = 1, t.updsdf.visible = !1, t.updssp.visible = !1, t.upszdf.visible = !1, t.upszsp.visible = !1, t.upds.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onBtnupds), t.upsz.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onBtnupsz), t.setting.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onsetting), t.btnClose.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onsettingClose), t.cbbox1.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onsettingcbbox1), t.cbbox2.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onsettingcbbox2), t.cbbox3.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onsettingcbbox3), t.Back.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onBack), t.moneyBack.on(Laya.Event.CLICK, _assertThisInitialized(t), t.HideGetMoney), t.bj.visible = t.more.visible = t.imgskinzj.visible = false, t.BOT.visible = t.imgskinother.visible = true, t.aniiskinbtnzj.stop(), (t.imgskinother.visible = !0, t.imgskinother.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onimgskin)), t.listskin.array = [], t.listskin.renderHandler = new Laya.Handler(_assertThisInitialized(t), t.updateItem), t.btnPlay.visible = !0, t.btnPlay.on(Laya.Event.CLICK, _assertThisInitialized(t), t.onbtnPlay), GetSDK().GetType() == e.ToutiaoSDK && (t.More.visible = GetSDK().IsSupportToMiniGame()), GetSDK().GetType() == e.QQSDK && (t.More.visible = !0), t.More.on(Laya.Event.CLICK, _assertThisInitialized(t), function() {
                    GetSDK().GetType() == e.ToutiaoSDK ? GetSDK().navigateToMiniGame(null) : GetSDK().GetType() == e.WxSDK ? le.Instance.Show() : GetSDK().GetType() == e.QQSDK && GetSDK().showGridAd();
                }), t.ShareP.visible = false, t.ShareP.on(Laya.Event.CLICK, _assertThisInitialized(t), function() {
                    return GetSDK().navigateToMiniGame(GetSDK().WXpromotion[Math.floor(Math.random() * GetSDK().WXpromotion.length)]);
                }), t.more.on(Laya.Event.CLICK, _assertThisInitialized(t), function() {
                    t.more.left <= 0 ? t.SHOW.play(0, !1) : t.HIDE.play(0, !1);
                }), t.init(), t.iptName.on(Laya.Event.BLUR, _assertThisInitialized(t), t.setName), t;
            }
            return _inherits(MainUI, s.GameMainUI), _createClass(MainUI, [{
                key: "refreshMore",
                value: function() {}
            }, {
                key: "ClearInterval",
                value: function() {
                    this.AnimIconTimeout && clearTimeout(this.AnimIconTimeout), this.AnimIconTimeout = null, this.m_setInterval1 && clearInterval(this.m_setInterval1), this.m_setInterval1 = null, this.m_setInterval2 && clearInterval(this.m_setInterval2), this.m_setInterval2 = null;
                }
            }, {
                key: "setName",
                value: function() {
                    n.PlayerName = this.iptName.text;
                }
            }, {
                key: "SetInterval",
                value: function() {}
            }, {
                key: "playToMiniGame",
                value: function(e) {}
            }, {
                key: "GetnavigateIconhts",
                value: function() {
                    if (this.image.skin) {
                        for (var e = 0; e < this.IconList.length; e++)
                            if (this.IconList[e].app_icon == this.image.skin) return void(e == this.IconList.length - 1 ? (this.Name.text = this.IconList[0].app_title, this.image.skin = this.IconList[0].app_icon, this.row = this.IconList[0]) : (this.Name.text = this.IconList[e + 1].app_title, this.image.skin = this.IconList[e + 1].app_icon, this.row = this.IconList[e + 1]));
                    } else this.Name.text = this.IconList[0].app_title, this.image.skin = this.IconList[0].app_icon, this.row = this.IconList[0];
                }
            }, {
                key: "onimgskin",
                value: function() {
                    D.PlaySound("Button"), n.kPlatformSDK == e.OPPOSDK && GetSDK().ShowBannerAd("ShowSkin"), this.reshSkinList(), this.anishowSkin.play(0, !1);
                }
            }, {
                key: "reshSkinList",
                value: function() {
                    this.btn_unlock.visible = !1, this.btnqd.visible = !1, this.skinclicks = [], this.isgouclicks = [], this.listskin.array = [];
                    for (var e = [], t = 0; t < Q.length; t++) {
                        var i = Q[t],
                            n = {
                                id: 0,
                                money: 0,
                                imgpath: "",
                                skinpath: "",
                                isown: !1,
                                ischose: !1
                            };
                        n.id = i.id, n.money = i.money, n.imgpath = i.imgpath, n.skinpath = i.skinpath;
                        for (var o = 0; o < G.ownskin.length; o++) {
                            if (G.ownskin[o] == i.id) {
                                n.isown = !0;
                                break;
                            }
                        }
                        i.id == G.skinID && (n.ischose = !0, this.btnqd.visible = !0, this.btnqd.disabled = !0), e.push(n);
                    }
                    this.listskin.array = e;
                }
            }, {
                key: "updateItem",
                value: function(t, i) {
                    var o = t.getChildByName("click"),
                        a = t.getChildByName("imgskin"),
                        s = t.getChildByName("isgou"),
                        r = t.getChildByName("sp");
                    this.skinclicks.push(o), this.isgouclicks.push(s);
                    var l = t.dataSource;
                    t.off(Laya.Event.CLICK, this, this.choseSkin), t.on(Laya.Event.CLICK, this, this.choseSkin, [l, o, s]), o.visible = l.ischose, s.visible = l.ischose, a.skin = l.imgpath, n.kPlatformSDK == e.ToutiaoSDK ? r.visible = !l.isown : a.gray = !l.isown;
                }
            }, {
                key: "choseSkin",
                value: function(t, i, o) {
                    D.PlaySound("Button"), this.btn_unlock.visible = !1, this.btnqd.visible = !1, this.btnvido.visible = !1, this.btn_unlock.off(Laya.Event.CLICK, this, this.onbtn_unlock), this.btnqd.off(Laya.Event.CLICK, this, this.onbtnqd), this.btnvido.off(Laya.Event.CLICK, this, this.onbtnvido);
                    for (var a = 0; a < this.skinclicks.length; a++) {
                        this.skinclicks[a].visible = !1;
                    }
                    if (i.visible = !0, t.isown) this.btnqd.visible = !0, this.btnqd.disabled = !1, t.ischose ? this.btnqd.disabled = !0 : this.btnqd.on(Laya.Event.CLICK, this, this.onbtnqd, [t, o]);
                    else {
                        if (n.kPlatformSDK == e.ToutiaoSDK && G.Gold < 200) return void this.onbtnvido(t, o);
                        this.btn_unlock.visible = !0, this.btn_unlock.on(Laya.Event.CLICK, this, this.onbtn_unlock, [t, o]);
                    }
                }
            }, {
                key: "onbtnvido",
                value: function(e, t) {
                    var i = this;
                    D.PlaySound("Button")
                    platform.getInstance().showReward((n) => {
                        n && (t.visible = !0, G.ownskin.push(e.id), G.skinID = e.id, pe.Instance.mMainScene.refshscenerenderer(), i.reshSkinList(), pe.Instance.ShowTip("Unlock and change scene skins successfully."));
                    })
                }
            }, {
                key: "onbtnqd",
                value: function(e, t) {
                    D.PlaySound("Button");
                    for (var i = 0; i < this.isgouclicks.length; i++) {
                        this.isgouclicks[i].visible = !1;
                    }
                    t.visible = !0, G.skinID = e.id, pe.Instance.mMainScene.refshscenerenderer(), this.reshSkinList(), pe.Instance.ShowTip("Successfully switch scene skins.");
                }
            }, {
                key: "onbtn_unlock",
                value: function(t, i) {
                    if (D.PlaySound("Button"), GetSDK().GetType() == e.DummySDK) i.visible = !0, G.ownskin.push(t.id), G.skinID = t.id, pe.Instance.mMainScene.refshscenerenderer(), pe.Instance.ShowTip("Unlock and change scene skins successfully."), this.reshSkinList();
                    else if (G.Gold >= 200) G.Gold -= 200, i.visible = !0, G.ownskin.push(t.id), G.skinID = t.id, pe.Instance.mMainScene.refshscenerenderer(), pe.Instance.ShowTip("Unlock and change scene skins successfully."), this.reshSkinList(), this.refreshUI();
                    else {
                        pe.Instance.ShowTip("Unlocked fail, you don't have enough coins.");
                    }
                }
            }, {
                key: "ShowGetMoney",
                value: function() {
                    this.btngetMoney.off(Laya.Event.MOUSE_DOWN, this, this.GetMoney), this.btngetMoney.on(Laya.Event.MOUSE_DOWN, this, this.GetMoney), this.aniShowGetMoney.play(0, !1);
                }
            }, {
                key: "GetMoney",
                value: function() {
                    var e = this;
                    D.PlaySound("Button")
                    platform.getInstance().showReward((t) => {
                        t && (G.Gold += 100, e.pfUI.visible && e.reshSkinList(), e.refreshUI(), e.HideGetMoney(), pe.Instance.ShowTip("You get coins+100."));
                    })
                }
            }, {
                key: "HideGetMoney",
                value: function() {
                    var e = this;
                    D.PlaySound("Button"), Laya.Tween.to(this.moneyui, {
                        scaleX: 0,
                        scaleY: 0
                    }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        e.GetMoneyUI.visible = !1, e.moneyui.scaleX = e.moneyui.scaleY = .3;
                    }));
                }
            }, {
                key: "onBack",
                value: function() {
                    var e = this;
                    D.PlaySound("Button"), Laya.Tween.to(this.skinui, {
                        scaleX: 0,
                        scaleY: 0
                    }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        e.pfUI.visible = !1, e.skinui.scaleX = e.skinui.scaleY = .3;
                    }));
                }
            }, {
                key: "init",
                value: function() {
                    this.logo.visible = true, this.logovivo.visible = false, this.logoqq.visible = false;
                    var t = [1.3 * G.bodyColor.x, 0, 0, 0, 0, 0, 1.3 * G.bodyColor.y, 0, 0, 0, 0, 0, 1.3 * G.bodyColor.z, 0, 0, 0, 0, 0, G.bodyColor.w, 0],
                        i = new Laya.ColorFilter(t);
                    this.logo.visible = !0;
                    for (var s = 0; s < this.logo.numChildren; s++) {
                        this.logo.getChildAt(s).filters = [i];
                    }
                }
            }, {
                key: "onsettingcbbox1",
                value: function() {
                    G.AllowMusic = !G.AllowMusic, G.AllowMusic ? D.PlayMusic("GameMusic") : D.StopMusic(), this.Updateopen();
                }
            }, {
                key: "onsettingcbbox2",
                value: function() {
                    G.AllowSound = !G.AllowSound, G.AllowSound || (D.StopSound("Button"), D.StopSound("pz"), D.StopSound("szgd")), this.Updateopen();
                }
            }, {
                key: "onsettingcbbox3",
                value: function() {
                    G.AllowVibrator = !G.AllowVibrator, this.Updateopen();
                }
            }, {
                key: "Updateopen",
                value: function() {
                    this.cbbox1.skin = "AllGame/set_icon2.png", this.cbbox2.skin = "AllGame/set_icon2.png", this.cbbox3.skin = "AllGame/set_icon2.png", G.AllowMusic && (this.cbbox1.skin = "AllGame/set_icon1.png"), G.AllowSound && (this.cbbox2.skin = "AllGame/set_icon1.png"), G.AllowVibrator && (this.cbbox3.skin = "AllGame/set_icon1.png");
                }
            }, {
                key: "onsettingClose",
                value: function() {
                    var e = this;
                    Laya.Tween.to(this.setingInfo, {
                        scaleX: 0,
                        scaleY: 0
                    }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                        e.setingUI.visible = !1, e.setingInfo.scaleX = e.setingInfo.scaleY = .3;
                    }));
                }
            }, {
                key: "onsetting",
                value: function() {
                    this.Updateopen(), this.aniShowseting.play(0, !1);
                }
            }, {
                key: "onBtnupds",
                value: function() {
                    var t = this;
                    if (D.PlaySound("Button"), Laya.Tween.to(this.upds, {
                            scaleX: .9,
                            scaleY: .9
                        }, 200, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                            Laya.Tween.to(t.upds, {
                                scaleX: 1,
                                scaleY: 1
                            }, 100);
                        })), G.AddLv >= re.length + 3) return this.updslv.text = "Num Max", this.updsgold.text = "---", void pe.Instance.ShowTip("Number has been raised to maximum");
                    if (G.Gold >= re[G.AddLv - 3].money) G.Gold -= re[G.AddLv - 3].money, G.AddLv++, pe.Instance.mMainScene.Refreshds(), this.refreshUI();
                    else {
                        if (n.kPlatformSDK == e.QQSDK) return void this.ShowGetMoney();
                        if (n.kPlatformSDK == e.ToutiaoSDK) return void platform.getInstance().showReward((e) => {
                            e && (G.AddLv++, pe.Instance.mMainScene.Refreshds(), t.refreshUI(), pe.Instance.ShowTip("Successfully upgrade number."));
                        });
                        pe.Instance.ShowTip("You don't have enough coins.");
                    }
                }
            }, {
                key: "onBtnupsz",
                value: function() {
                    var t = this;
                    if (Laya.Tween.to(this.upsz, {
                            scaleX: .9,
                            scaleY: .9
                        }, 200, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                            Laya.Tween.to(t.upsz, {
                                scaleX: 1,
                                scaleY: 1
                            }, 100);
                        })), D.PlaySound("Button"), G.DiceLevel >= se.length - 1) return this.upszlv.text = "Dice Max", this.upszgold.text = "---", void pe.Instance.ShowTip("Dice has been raised to maximum.");
                    if (G.Gold >= se[G.DiceLevel].money) G.Gold -= se[G.DiceLevel].money, G.DiceLevel++, G.DiceCounts = JSON.parse(se[G.DiceLevel].dice), pe.Instance.mMainScene.Refreshsz(), this.refreshUI();
                    else {
                        if (n.kPlatformSDK == e.QQSDK) return void this.ShowGetMoney();
                        if (n.kPlatformSDK == e.ToutiaoSDK) return void platform.getInstance().showReward((e) => {
                            e && (G.DiceLevel++, G.DiceCounts = JSON.parse(se[G.DiceLevel].dice), pe.Instance.mMainScene.Refreshsz(), t.refreshUI(), pe.Instance.ShowTip("骰子提升成功."));
                        });
                        pe.Instance.ShowTip("You don't have enough coins.");
                    }
                }
            }, {
                key: "onbtnPlay",
                value: function() {
                    D.PlaySound("Button"), R.Instance.ShowLoading(), platform.getInstance().showInterstitial(() => {
                        R.Instance.preload_res_pkg(te.gameLevel_resdata, function() {
                            Laya.timer.once(300, this, function() {
                                pe.Instance.mMainScene.uninit(), pe.Instance.onEnterLevelScene();
                            });
                        }.bind(this));
                    })
                }
            }, {
                key: "onEnter",
                value: function() {
                    var t = this;
                    Laya.stage.addChild(this), this.visible = !0, this.refreshUI(), console.log("Main onEnter");
                    platform.getInstance().initList(this.LISTBOT);
                    console.log("--------a----------");
                    G.AllowVibrator = this.More.visible = this.BOX.visible = false;
                }
            }, {
                key: "setsharedCanvas",
                value: function() {}
            }, {
                key: "onLeave",
                value: function() {
                    this.removeSelf(), this.visible = !1, this.ClearInterval();
                }
            }, {
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "onUninit",
                value: function() {}
            }, {
                key: "refreshUI",
                value: function() {
                    this.iptName.text = n.PlayerName, this.mygold.text = G.Gold + "", this.iptName.visible = 0, this.updsdf.visible = !0, this.updssp.visible = !1, this.upszdf.visible = !0, this.upszsp.visible = !1, G.AddLv >= re.length + 3 ? (G.AddLv = re.length, this.upds.gray = !0, this.updslv.text = "Num Max", this.updsdf.visible = !0, this.updssp.visible = !1, this.updsgold.text = "---") : (n.kPlatformSDK == e.ToutiaoSDK ? G.Gold >= re[G.AddLv - 3].money ? (this.updsdf.visible = !0, this.updssp.visible = !1) : (this.updssp.visible = !0, this.updsdf.visible = !1) : (this.updsdf.visible = !0, G.Gold >= re[G.AddLv - 3].money ? this.upds.gray = !1 : this.upds.gray = !0), this.updslv.text = "Num Level:".concat(re[G.AddLv - 3].id), this.updsgold.text = "".concat(re[G.AddLv - 3].money)), G.DiceLevel >= se.length - 1 ? (G.DiceLevel = se.length, this.upsz.gray = !0, this.upszlv.text = "Dice Max", this.upszdf.visible = !0, this.upszsp.visible = !1, this.upszgold.text = "---") : (n.kPlatformSDK == e.ToutiaoSDK ? G.Gold >= se[G.DiceLevel].money ? (this.upszdf.visible = !0, this.upszsp.visible = !1) : (this.upszsp.visible = !0, this.upszdf.visible = !1) : (this.upszdf.visible = !0, G.Gold >= se[G.DiceLevel].money ? this.upsz.gray = !1 : this.upsz.gray = !0), this.upszlv.text = "Dice Level:".concat(se[G.DiceLevel].level), this.upszgold.text = "".concat(se[G.DiceLevel].money));
                }
            }]), MainUI;
        }(),
        ce = function(e) {
            function PlayerMainScript(e, t) {
                var i;
                return _classCallCheck(this, PlayerMainScript), (i = _possibleConstructorReturn(this, _getPrototypeOf(PlayerMainScript).call(this))).mMoveDir = new Laya.Vector3(), i.mCtrl = e, i.FaceNum = t, i;
            }
            return _inherits(PlayerMainScript, Laya.Script3D), _createClass(PlayerMainScript, [{
                key: "setOffestPos",
                value: function(e) {
                    this.mOffsestPos = e;
                }
            }, {
                key: "findPoint",
                value: function(e, t) {
                    var i = e.numChildren;
                    if (0 != i) {
                        for (var n = 0; n < i; n++) {
                            var o = e.getChildAt(n);
                            if (o) {
                                if (o.name == t) return o;
                                var a = this.findPoint(o, t);
                                if (a) return a;
                            }
                        }
                        return null;
                    }
                }
            }, {
                key: "onAwake",
                value: function() {
                    this.mModel = this.owner, this.mAnimator = this.mModel.getComponent(Laya.Animator);
                    var e = this.mModel.getChildAt(1).skinnedMeshRenderer;
                    e.material.albedoColor = G.bodyColor, e.castShadow = !0, this.setDice();
                }
            }, {
                key: "setDice",
                value: function() {
                    this.mDiceScript ? this.mDiceScript.changeDiceColor(G.bodyColor, G.diceColor, G.AddLv) : (this.mDicePoint = this.findPoint(this.mModel, "Point"), this.mDiceScript = K.Instance.createDice(this.FaceNum, G.AddLv, G.bodyColor, G.diceColor, this.mDicePoint, new Laya.Vector3(0, 0, 0)), this.mDiceScript.owner.transform.rotate(new Laya.Vector3(0, 0, -30))), this.mAnimator.play("Wudao");
                }
            }, {
                key: "uninit",
                value: function() {
                    this.mModel = null, this.mAnimator = null, this.mMoveDir = null, this.mOffsestPos = null, this.mCtrl = null, this.mDiceScript && (this.mDiceScript.uninit(), this.mDiceScript = null), this.mDicePoint = null, this.enabled = !1, this.owner.destroy();
                }
            }]), PlayerMainScript;
        }(),
        ue = function() {
            function MainScene() {
                _classCallCheck(this, MainScene), this.PlayerMainScripts = [];
            }
            return _createClass(MainScene, [{
                key: "init",
                value: function() {
                    this.mScene = R.Instance.get_scens3d_res("Resources/Conventional/main.ls"), this.mScene.ambientColor = new Laya.Vector3(.2, .3, .4), Laya.stage.addChild(this.mScene);
                    var e = this.mScene.getChildByName("DirectionalLight");
                    e.color = new Laya.Vector3(1, 1, 1), e.shadow = !0, e.intensity = .8, e.shadowDistance = 40;
                    var t = this.mScene.getChildByName("scene02");
                    this._sceneM = t.meshRenderer, this._sceneM.receiveShadow = !0, this._sceneM.material.albedoTexture = Laya.Loader.getRes(Q[G.skinID - 1].skinpath), this.RefreshData(), this.mUI = L.Instance.ChangeUI(de), D.PlayMusic("GameMusic");
                }
            }, {
                key: "refshscenerenderer",
                value: function() {
                    this._sceneM.material.albedoTexture = Laya.Loader.getRes(Q[G.skinID - 1].skinpath);
                }
            }, {
                key: "RefreshData",
                value: function() {
                    for (var e = 0; e < this.PlayerMainScripts.length; e++) {
                        this.PlayerMainScripts[e].uninit();
                    }
                    this.PlayerMainScripts = [], this.tzs = [];
                    for (var t = 1; t < 5; t++) {
                        var i = this.mScene.getChildByName("s".concat(t));
                        i.active = !1, this.tzs.push(i);
                    }
                    G.DiceCounts.length <= 0 && (G.DiceCounts = JSON.parse(se[0].dice));
                    var n = T.getRandomInt(0, H.DiceColorTabel.length - 1);
                    G.bodyColorID = n, G.bodyColor = H.getDiceColor(n), G.diceColor = new Laya.Vector4(0, 0, 0, 1);
                    var o = this.tzs[G.DiceCounts.length - 1];
                    o.meshRenderer.receiveShadow = !0, o.active = !0;
                    for (var a = 0; a < G.DiceCounts.length; a++) {
                        var s = G.DiceCounts[a],
                            r = o.getChildByName("Point".concat(a + 1)).transform.position;
                        this.PlayerMainScripts.push(this.createPlayer(r, s));
                    }
                }
            }, {
                key: "EffectCreate",
                value: function(e) {
                    var t = R.Instance.get_sprite3D_res("Resources/Conventional/Upgrade01.lh").clone();
                    return e.addChild(t), t;
                }
            }, {
                key: "createPlayer",
                value: function(e, t) {
                    var i = R.Instance.get_sprite3D_res("Resources/Conventional/renwu.lh").clone();
                    i || 1;
                    var n = new ce(this, t);
                    return i.addComponentIntance(n), this.mScene.addChild(i), i.transform.rotate(new Laya.Vector3(0, 179, 0)), i.transform.position = e, n;
                }
            }, {
                key: "Refreshds",
                value: function() {
                    for (var e = 0; e < this.PlayerMainScripts.length; e++) {
                        var t = this.PlayerMainScripts[e],
                            i = this.EffectCreate(t.owner);
                        Laya.timer.once(1e3, this, this.DestoryEffect, [i]), t.setDice();
                    }
                }
            }, {
                key: "DestoryEffect",
                value: function(e) {
                    e.destroy();
                }
            }, {
                key: "Refreshsz",
                value: function() {
                    this.RefreshData();
                }
            }, {
                key: "onUpdate",
                value: function(e) {}
            }, {
                key: "uninit",
                value: function() {
                    Laya.timer.clearAll(this);
                }
            }]), MainScene;
        }(),
        me = function() {
            function GameTip() {
                _classCallCheck(this, GameTip);
            }
            return _createClass(GameTip, [{
                key: "ShowTips",
                value: function(e) {
                    var t = this;
                    this.mTipsUI = new s.GameTipsUI(), Laya.stage.addChild(this.mTipsUI), this.mTipsUI.visible = !0, this.mTipsUI.txtTips.text = e, this.mTipsUI.zOrder = 999, this.mTipsUI.tip.width = 30 * e.length + 50, Laya.Tween.to(this.mTipsUI.tip, {
                        scaleX: 1,
                        scaleY: 1
                    }, 300, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                        Laya.Tween.to(t.mTipsUI.tip, {
                            alpha: 0,
                            centerY: -500
                        }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(t, function() {
                            t.mTipsUI.removeSelf(), t.mTipsUI.destroy();
                        }));
                    }));
                }
            }]), GameTip;
        }(),
        pe = function(t) {
            function GameMain() {
                var e;
                return _classCallCheck(this, GameMain), R.CreateInstance(), K.CreateInstance(), e = _possibleConstructorReturn(this, _getPrototypeOf(GameMain).call(this)), G.SaveVersion < n.kSaveVersion && (S.ClearStorage(), S.Load(), G.SaveVersion = n.kSaveVersion, S.Save()), e;
            }
            return _inherits(GameMain, C), _createClass(GameMain, [{
                key: "ClearRes",
                value: function(e) {
                    for (var t = 0, i = e.length; t < i; t++) Laya.loader.clearRes(e[t]);
                }
            }, {
                key: "OnPreloadCompleted",
                value: function() {
                    var t = this;
                    n.Setcity(), n.Ratio() ? this.DesignBrowserWidthRatio = Laya.stage.width / Laya.Browser.width : this.DesignBrowserWidthRatio = 1, R.Instance.ShowLoading(), R.Instance.preload_res_pkg(te.gameMain_resdata, function() {
                        Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                            platform.getInstance().startup("Dice-Gang", res["id"], () => {
                                var yad = new Laya.Image();
                                yad.skin = "AllGame/yad.png";
                                yad.zOrder = 1000;
                                Laya.stage.addChild(yad);
                                window["yad"] = yad;
                                yad.top = 0;
                                yad.centerX = 0;
                                yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                                    platform.getInstance().navigate("GAME", "LOGO")
                                })
                                GameMain.Instance.onEnterMainScene();
                            })
                        }))
                    }.bind(t));
                }
            }, {
                key: "OnUpdate",
                value: function() {
                    _get(_getPrototypeOf(GameMain.prototype), "OnUpdate", this).call(this);
                    var e = n.Getdelta() / 1e3;
                    L.Instance.onUpdate(e), this.mLevelScene && this.mLevelScene.onUpdate(e);
                }
            }, {
                key: "OnLowUpdate",
                value: function() {
                    _get(_getPrototypeOf(GameMain.prototype), "OnLowUpdate", this).call(this), this.mLevelScene && this.mLevelScene.onLowUpdate();
                }
            }, {
                key: "ShowTip",
                value: function(e) {
                    new me().ShowTips(e);
                }
            }, {
                key: "onEnterMainScene",
                value: function() {
                    if (window["yad"]) {
                        window["yad"].top = 0;
                        window["yad"].centerX = 0;
                    }
                    R.Instance.reloase_res_pkg(te.gameLevel_resdata), this.mMainScene ? this.mMainScene.init() : (this.mMainScene = new ue(), this.mMainScene.init());
                }
            }, {
                key: "onEnterLevelScene",
                value: function() {
                    if (window["yad"]) {
                        window["yad"].top = Laya.stage.height - window["yad"].height;
                        window["yad"].centerX = 0;
                    }
                    this.mLevelScene && (this.mLevelScene.uninit(), this.mLevelScene = null), this.isReborn = !1, this.mLevelScene = new ae(), this.mLevelScene.init();
                }
            }, {
                key: "onLeaveLevelScene",
                value: function() {
                    this.mLevelScene && (this.mLevelScene.uninit(), this.mLevelScene = null);
                }
            }], [{
                key: "CreateInstance",
                value: function() {
                    null == GameMain.GInstance && (GameMain.GInstance = new GameMain());
                }
            }, {
                key: "Instance",
                get: function() {
                    return GameMain.GInstance;
                }
            }]), GameMain;
        }();
    pe.GInstance = null, pe.CreateInstance();
}();