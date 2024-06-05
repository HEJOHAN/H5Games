var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
        function i() {
            this.constructor = t;
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
    };
}();
! function() {
    function e(t, n, i) {
        function a(s, r) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                var c = n[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return a(n || e);
                }, c, c.exports, e, t, n, i);
            }
            return n[s].exports;
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) a(i[s]);
        return a;
    }
    return e;
}()({
    1: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/Enum"),
            a = e("../Utils/Debug"),
            o = e("../Base/BaseScript"),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.radius = .47, t.centerCircle = new Laya.Vector2(0, .47), t;
                }
                return __extends(t, e), t.prototype.ChildRotationEuler = function() {
                    return this.child.transform.rotationEuler;
                }, t.prototype.Init = function() {
                    this.InitBase(), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnUp), this.child = this.GetObj().getChildByName("Qiu_01"), this.actorDeadEffect = this.GetObj().getChildByName("eff01_dead"), this.actorTrailingEffect = this.GetObj().getChildByName("eff04_trail"), this.actorMeshRenderer = this.GetObj().getChildByName("Qiu_01").meshRenderer, this.materialActorTrailingEffect = this.GetObj().getChildByName("eff04_trail").trailRenderer, this.materialActorTrailingEffect1 = this.GetObj().getChildByName("eff04_trail").getChildByName("eff04_tuowei").particleRenderer, this.qiuRotationX = this.child.transform.rotationEuler.x, this.ActiveQiuDeadEffect(!1);
                }, t.prototype.ResetQiu = function() {
                    this.child.active = !0;
                    var e = this.child.transform.rotationEuler;
                    e.x = this.qiuRotationX, this.child.transform.rotationEuler = e, this.SetPosition(new Laya.Vector3(0, 0, 0)), this.ActiveQiu(!0), this.ActorTrailingEffect(!1, new Laya.Vector3(0, -.5, 0));
                }, t.prototype.SetMaterial = function(e, t, n) {
                    e && (this.actorMeshRenderer.material = e), t && (this.materialActorTrailingEffect.material = t), n && (this.materialActorTrailingEffect1.material = n);
                }, t.prototype.ShowQiu = function() {
                    this.ActiveQiu(!0), this.ActorTrailingEffect(!0), this.ActiveQiuDeadEffect(!1);
                }, t.prototype.HiddenQiu = function() {
                    this.ActiveQiu(!1), this.ActorTrailingEffect(!1), this.ActiveQiuDeadEffect(!0);
                }, t.prototype.ActiveQiu = function(e) {
                    this.child.active = e;
                }, t.prototype.ActiveQiuDeadEffect = function(e) {
                    this.actorDeadEffect.active = e;
                }, t.prototype.ActorTrailingEffect = function(e, t) {
                    a.Utils.Debug.log(" active  " + e);
                    var n = this.actorTrailingEffect.transform.position;
                    e ? this.trailingEffectPos && (n = this.trailingEffectPos) : (this.trailingEffectPos = t ? t : new Laya.Vector3(n.x, n.y, n.z), n.z = -100), this.actorTrailingEffect.transform.position = n, a.Utils.Debug.log(" this.trailingEffectPos 2  " + this.trailingEffectPos.x + " " + this.trailingEffectPos.y + " " + this.trailingEffectPos.z);
                }, t.prototype.onStart = function() {}, t.prototype.Update = function(e, t, n) {
                    if (t == i.EnumMana.LevelState.playing) {
                        var a = this.GetPosition(),
                            o = a.x;
                        if (n) 0 != o && (o > 0 ? (o -= e / 2, 0 > o && (o = 0)) : 0 > o && (o += e / 2, o > 0 && (o = 0)));
                        else if (!isNaN(this.leftMouseX)) {
                            var s = Laya.MouseManager.instance.mouseX - this.leftMouseX;
                            this.leftMouseX = Laya.MouseManager.instance.mouseX, o = a.x - .0019 * s, o > .4 ? o = .4 : -.4 > o && (o = -.4);
                        }
                        a.z += e, a.x = o;
                        var r = this.radius * this.radius - (o - this.centerCircle.x) * (o - this.centerCircle.x);
                        a.y = this.centerCircle.y - Math.sqrt(r), this.SetPosition(a);
                        var l = this.child.transform.rotationEuler;
                        l.x = o / this.radius * 90 / 2, l.z -= e * Math.PI * 2 / (.2 * Math.PI) * 12, this.child.transform.rotationEuler = l;
                    } else this.leftMouseX = Number.NaN;
                }, t.prototype.OnDown = function() {
                    this.leftMouseX = Laya.MouseManager.instance.mouseX;
                }, t.prototype.OnUp = function() {
                    this.leftMouseX = Number.NaN;
                }, t;
            }(o.BaseScript);
        n.Actor = s;
    }, {
        "../Base/BaseScript": 2,
        "../Common/Enum": 10,
        "../Utils/Debug": 29
    }],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return e.call(this) || this;
            }
            return __extends(t, e), t.prototype.InitBase = function(e) {
                this.obj = this.owner, this.type = e;
            }, t.prototype.SetPosition = function(e) {
                this.obj.transform.position = e;
            }, t.prototype.GetPosition = function() {
                return this.obj.transform.position;
            }, t.prototype.Translate = function(e, t) {
                this.obj.transform.translate(e, t);
            }, t.prototype.SetRotate = function(e, t, n) {
                this.obj.transform.rotate(e, t, n);
            }, t.prototype.GetTransForm = function() {
                return this.obj.transform;
            }, t.prototype.SetRotationEuler = function(e) {
                this.obj.transform.rotationEuler = e;
            }, t.prototype.GetRotationEuler = function() {
                return this.obj.transform.rotationEuler;
            }, t.prototype.SetScale = function(e) {
                this.obj.transform.scale = e;
            }, t.prototype.GetObj = function() {
                return this.obj;
            }, t.prototype.Hidden = function() {
                this.obj.active = !1;
            }, t.prototype.Show = function() {
                this.obj.active = !0;
            }, t.prototype.Active = function() {
                return this.obj.active;
            }, t.prototype.Destroy = function() {
                this.obj.destroy();
            }, t;
        }(Laya.Script3D);
        n.BaseScript = i;
    }, {}],
    3: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Base/BaseScript"),
            a = e("../Common/Enum"),
            o = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden(), e == a.EnumMana.ComponentType.defaultDoorEffect && (this.defaultDoorEffectParticleSystem = this.GetObj().getChildByName("eff_07_zhangai"), this.defaultDoorEffectParticleSystem1 = this.GetObj().getChildByName("eff_07_glow"));
                }, t.prototype.DefaultDoorEffectShow = function(e) {
                    e ? (this.defaultDoorEffectParticleSystem.particleSystem.play(), this.defaultDoorEffectParticleSystem1.particleSystem.play()) : (this.defaultDoorEffectParticleSystem.particleSystem.stop(), this.defaultDoorEffectParticleSystem1.particleSystem.stop());
                }, t;
            }(i.BaseScript);
        n.EffectScript = o;
    }, {
        "../Base/BaseScript": 2,
        "../Common/Enum": 10
    }],
    4: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseScript"),
            a = e("../Model/Level"),
            o = e("../Utils/MathTool"),
            s = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.GetMemberCollision = function() {
                    return this.isCollision;
                }, t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden(), this.materialActorTrailingEffect1 = this.GetObj().getChildByName("eff_xuanwo").particleRenderer, this.materialActorTrailingEffect2 = this.GetObj().getChildByName("eff_xuanwo").getChildByName("eff_xuanwolz").particleRenderer;
                }, t.prototype.Reset = function(e, t) {
                    if (this.isCollision = !1, t) {
                        var n = this.GetRotationEuler();
                        n.z = t, this.SetRotationEuler(n);
                    }
                    this.SetPosition(e);
                }, t.prototype.Collision = function() {
                    this.isCollision = !0, a.Level.Instance.GamePause();
                }, t.prototype.Update = function(e, t) {
                    var n = this.GetPosition(),
                        i = this.GetRotationEuler();
                    0 == this.isCollision && o.MathTool.ClampBlackHole(e, t, n, i) && this.Collision();
                }, t.prototype.SetMaterial = function(e, t) {
                    this.materialActorTrailingEffect1.material = e, this.materialActorTrailingEffect2.material = t;
                }, t;
            }(i.BaseScript);
        n.ObstaclesBlackHoleScript = s;
    }, {
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseScript": 2
    }],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseScript"),
            a = e("../Model/Level"),
            o = e("../Utils/MathTool"),
            s = e("../Control/SoundManager"),
            r = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.icePitonRadius = .5, t.icePitonStartY = 1, t.icePitonStartMoveDis = 4, t;
                }
                return __extends(t, e), t.prototype.GetMemberCollision = function() {
                    return this.isCollision;
                }, t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden();
                }, t.prototype.Reset = function(e) {
                    this.isCollision = !1, this.diaoluo = !0, this.effectShow = !0, e.y = this.icePitonStartY, this.SetPosition(e);
                    var t = this.icePitonRadius - .01 * o.MathTool.Range(0, 5);
                    this.icePitonEndY = -Math.sqrt(t * t - e.x * e.x);
                }, t.prototype.Collision = function() {
                    this.isCollision = !0, a.Level.Instance.GamePause();
                }, t.prototype.Update = function(e, t) {
                    var n = this.GetPosition();
                    e.z + this.icePitonStartMoveDis >= n.z && (this.diaoluo && (s.SoundManager.Instance.PlaySound("diaoluo"), this.diaoluo = !1), n.y > this.icePitonEndY && (n.y -= 1.2 * t, n.y < this.icePitonEndY && (n.y = this.icePitonEndY, this.effectShow && (this.effectShow = !1, a.Level.Instance.IcePitonEffectShow(this), s.SoundManager.Instance.VibrateShort())), this.SetPosition(n))), 0 == this.isCollision && o.MathTool.ClampIcePiton(e, n) && this.Collision();
                }, t;
            }(i.BaseScript);
        n.ObstaclesIcePitonScript = r;
    }, {
        "../Control/SoundManager": 18,
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseScript": 2
    }],
    6: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseScript"),
            a = e("../Model/Level"),
            o = e("../Common/Enum"),
            s = e("../Utils/MathTool"),
            r = e("../Control/SoundManager"),
            l = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.rollingStonesXRotation = 46, t;
                }
                return __extends(t, e), t.prototype.GetMemberCollision = function() {
                    return this.isCollision;
                }, t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden();
                }, t.prototype.Reset = function(e, t, n) {
                    if (this.speed = e, this.isCollision = !1, this.gunshi = !0, n) {
                        var i = this.GetRotationEuler();
                        this.type == o.EnumMana.ComponentType.blackHole ? i.x = n : i.z = n, this.SetRotationEuler(i);
                    }
                    this.SetPosition(t);
                }, t.prototype.Collision = function() {
                    this.isCollision = !0, a.Level.Instance.GamePause();
                }, t.prototype.Update = function(e, t) {
                    var n = this.GetPosition(),
                        i = this.GetRotationEuler(),
                        o = a.Level.Instance.rollingStonesUnitOffsetDis + a.Level.Instance.obstaclesUnitOffset + 10;
                    if (e.z + o >= n.z) {
                        this.gunshi && (this.gunshi = !1, r.SoundManager.Instance.PlaySound("gunshi")), i.x -= Math.abs(this.speed) * Math.PI * 2 / (.2 * Math.PI) * 5, i.z += 2.5 * this.speed, i.z >= this.rollingStonesXRotation ? (i.z = this.rollingStonesXRotation, this.speed = -Math.abs(this.speed)) : i.z <= -this.rollingStonesXRotation && (i.z = -this.rollingStonesXRotation, this.speed = Math.abs(this.speed)), this.SetRotationEuler(i);
                        var l = (s.MathTool.Range(1, 2), Math.abs(i.z * Math.PI * 2 / 360)),
                            h = .43 * Math.sin(l);
                        n.y = .43 * -Math.cos(l), i.z < 0 && (h = -h), n.x = h, n.z -= .07 * Math.abs(this.speed), this.SetPosition(n);
                    }
                    0 == this.isCollision && s.MathTool.ClampRollingStones(e, n) && this.Collision();
                }, t;
            }(i.BaseScript);
        n.ObstaclesRollingStonesScript = l;
    }, {
        "../Common/Enum": 10,
        "../Control/SoundManager": 18,
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseScript": 2
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseScript"),
            a = e("../Model/Level"),
            o = e("../Utils/MathTool"),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.defaultDoorRadius = .5, t;
                }
                return __extends(t, e), t.prototype.GetMemberCollision = function() {
                    return this.isCollision;
                }, t.prototype.SetGroupInTheMiddle = function(e) {
                    this.groupInTheMiddle = e;
                }, t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden(), this.childDoor = this.owner.getChildByName("door"), this.materialDoor = this.owner.getChildByName("door").getChildByName("01").meshRenderer, this.childDoorKuan = this.owner.getChildByName("02"), this.materialDoorKuan = this.owner.getChildByName("02").meshRenderer;
                }, t.prototype.Reset = function(e, t, n) {
                    this.speed = e, this.isCollision = !1, this.groupInTheMiddle = !1;
                    var i = this.childDoor.transform.rotationEuler;
                    if (i.z = n, this.childDoor.transform.rotationEuler = i, this.tilingOffsetZ = .3 * -n / 44, this.materialDoorKuan.material.tilingOffsetZ = this.tilingOffsetZ, this.SetPosition(t), this.memberList && this.memberList.length > 0) {
                        var a = this.memberList.length;
                        this.memberList.splice(0, a);
                    }
                }, t.prototype.Collision = function(e) {
                    if (Laya.LocalStorage.getItem("wudi") == 2) return;
                    var t = 0;
                    if (2 == e) {
                        HUHU_showInterstitialAd();
                        console.log("Gameover"), this.isCollision = !0;
                    } else if (1 == e && (this.isCollision = !0, this.Hidden(), 0 == this.groupInTheMiddle && (this.groupInTheMiddle = !0, this.memberList))) {
                        t = this.memberList.length;
                        for (var n = 0; t > n; n++) this.memberList[n].SetGroupInTheMiddle(!0);
                    }
                    a.Level.Instance.ThroughDefaultDoor(this, e, t);
                }, t.prototype.Update = function(e, t) {
                    var n = this.GetPosition(),
                        i = this.childDoor.transform.rotationEuler;
                    0 != this.speed && 0 == t && (i.z += this.speed, i.z >= 44 ? (i.z = 44, this.speed = -Math.abs(this.speed)) : i.z <= -44 && (i.z = -44, this.speed = Math.abs(this.speed)), this.childDoor.transform.rotationEuler = i, this.tilingOffsetZ = .3 * -i.z / 44, this.materialDoorKuan.material.tilingOffsetZ = this.tilingOffsetZ);
                    var a = Math.abs(i.z * Math.PI * 2 / 360),
                        s = Math.sin(a) * this.defaultDoorRadius;
                    if (i.z < 0 && (s = -s), 0 == this.isCollision) {
                        var r = 0;
                        r = t ? o.MathTool.ClampThrough(e, new Laya.Vector3(s, 0, n.z)) : o.MathTool.Clamp(e, new Laya.Vector3(s, 0, n.z)), this.Collision(r);
                    }
                }, t.prototype.AutomaticCrossingDefaultDoorInTheMiddle = function() {
                    var e = this.childDoor.transform.rotationEuler;
                    if (0 != e.z) {
                        e.z > 0 ? (e.z -= 5, e.z < 0 && (e.z = 0)) : e.z < 0 && (e.z += 5, e.z > 0 && (e.z = 0)), this.childDoor.transform.rotationEuler = e;
                        var t = .3 * -e.z / 44;
                        this.materialDoorKuan.material.tilingOffsetZ = t;
                    }
                }, t.prototype.SetMaterial = function(e) {
                    this.materialDoor.material = e, this.materialDoorKuan.material = e, this.materialDoorKuan.material.tilingOffsetZ = this.tilingOffsetZ;
                }, t.prototype.ChildDoorRotationEuler = function() {
                    return this.childDoor.transform.rotationEuler.z;
                }, t;
            }(i.BaseScript);
        n.ObstaclesScript = s;
    }, {
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseScript": 2
    }],
    8: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Base/BaseScript"),
            a = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden(), this.material = this.GetObj().getChildByName("tong").meshRenderer;
                }, t.prototype.SetMaterial = function(e) {
                    this.material.material = e;
                }, t;
            }(i.BaseScript);
        n.PathWayScript = a;
    }, {
        "../Base/BaseScript": 2
    }],
    9: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseScript"),
            a = e("../Model/Level"),
            o = e("../Common/Enum"),
            s = e("../Utils/MathTool"),
            r = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.GetMemberCollision = function() {
                    return this.isCollision;
                }, t.prototype.Init = function(e) {
                    this.InitBase(e), this.Hidden(), this.type == o.EnumMana.ComponentType.defaultDoor && (this.material = this.owner.meshRenderer);
                }, t.prototype.Reset = function(e) {
                    if (this.isCollision = !1, e && this.SetPosition(e), this.memberList && this.memberList.length > 0) {
                        var t = this.memberList.length;
                        this.memberList.splice(0, t);
                    }
                }, t.prototype.Collision = function() {
                    this.isCollision = !0, this.Hidden(), a.Level.Instance.SpeedUpIconEffectShow(this);
                }, t.prototype.Update = function(e) {
                    if (0 == this.isCollision && s.MathTool.ClampSpeedUp(e, this.GetPosition()) && (this.Collision(), this.memberList)) {
                        for (var t = this.memberList.length, n = 0, i = 0; t > i; i++) this.memberList[i].GetMemberCollision() && (n += 1);
                        n == t && a.Level.Instance.OpenAutoAcceleration(t);
                    }
                }, t;
            }(i.BaseScript);
        n.SpeedUpScript = r;
    }, {
        "../Common/Enum": 10,
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseScript": 2
    }],
    10: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i;
        ! function(e) {
            var t;
            ! function(e) {
                e[e.defaultDoor = 0] = "defaultDoor", e[e.icePiton = 1] = "icePiton", e[e.rollingStones = 2] = "rollingStones", e[e.blackHole = 3] = "blackHole", e[e.speedUpIcon = 4] = "speedUpIcon", e[e.pathway = 5] = "pathway", e[e.speedUpIconEffect = 6] = "speedUpIconEffect", e[e.icePitonEffect = 7] = "icePitonEffect", e[e.defaultDoorEffect = 8] = "defaultDoorEffect", e[e.none = 9] = "none";
            }(t = e.ComponentType || (e.ComponentType = {}));
            var n;
            ! function(e) {
                e[e.mainView = 0] = "mainView", e[e.levelView = 1] = "levelView", e[e.gameOverView = 2] = "gameOverView", e[e.rankView = 3] = "rankView", e[e.guideView = 4] = "guideView", e[e.tipsDialog = 5] = "tipsDialog", e[e.addToMinigamesView = 6] = "addToMinigamesView", e[e.ConvergeAdNew = 7] = "ConvergeAdNew", e[e.skinTralView = 8] = "skinTralView", e[e.gameBoxView = 9] = "gameBoxView", e[e.friendInvite = 10] = "friendInvite", e[e.goldenEggView = 11] = "goldenEggView";
            }(n = e.ViewName || (e.ViewName = {}));
            var i;
            ! function(e) {
                e[e.one = 0] = "one", e[e.two = 1] = "two", e[e.three = 2] = "three", e[e.four = 3] = "four";
            }(i = e.NodeGenerateType || (e.NodeGenerateType = {}));
            var a;
            ! function(e) {
                e[e.wait = 0] = "wait", e[e.playing = 1] = "playing", e[e.pause = 2] = "pause", e[e.gameover = 3] = "gameover";
            }(a = e.LevelState || (e.LevelState = {}));
        }(i = n.EnumMana || (n.EnumMana = {}));
    }, {}],
    11: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.ald = function(t, n) {
                Laya.Browser.onMiniGame && 0 == e.aladingStatus && window.wx.aldSendEvent(t, n);
            }, e.version = "156", e.debugLog = !0, e.defaultShareUrl = "", e.defaultShareTitle = "", e.defaultShareId = "35", e.dataFileName = ["config/Sheet1.json"], e.viewResourceName = ["res/atlas/loading.atlas", "res/atlas/account.atlas", "res/atlas/common.atlas", "res/atlas/guide.atlas", "res/atlas/level.atlas", "res/atlas/main.atlas", "res/atlas/rank.atlas", "res/atlas/addminigame.atlas", "res/atlas/skinTrial.atlas", "res/atlas/aggregation.atlas", "res/atlas/gameBox.atlas", "res/atlas/goldenEgg.atlas"], e.viewFileName = ["view/LoadingView.json", "view/MainView.json", "view/LevelView.json", "view/GameOverView.json", "view/RankView.json", "view/GuideView.json", "view/TipsDialog.json", "view/AddToMinigamesView.json", "view/ConvergeAdNew.json", "view/SkinTrial.json", "view/GameBox.json", "view/FriendInvite.json", "view/GoldenEggView.json"], e.soundFileName = ["res/sound/death.mp3", "res/sound/diaoluo.mp3", "res/sound/gongmen.mp3", "res/sound/gunshi.mp3", "res/sound/jiasu.mp3", "res/sound/lightning.mp3"], e.soundPath = "res/sound/", e.res3DFileName = ["subRes/LayaScene_Joy/Conventional/Joy.ls"], e.pcRes3DFileName = ["subRes/LayaScene_Joy/Conventional/Joy.ls"], e.resurrectionTimes = 3, e.fogColor = [null, new Laya.Vector3(121 / 255, 45 / 255, 70 / 255), new Laya.Vector3(140 / 255, 251 / 255, 1), new Laya.Vector3(71 / 255, 225 / 255, 191 / 255), new Laya.Vector3(252 / 255, 142 / 255, 31 / 255), new Laya.Vector3(1, 241 / 255, 208 / 255), new Laya.Vector3(34 / 255, 63 / 255, 79 / 255), new Laya.Vector3(134 / 255, 172 / 255, 198 / 255), new Laya.Vector3(173 / 255, 195 / 255, 190 / 255), new Laya.Vector3(244 / 255, 191 / 255, 169 / 255), new Laya.Vector3(16 / 255, 16 / 255, 16 / 255)], e.SceneMaterialChangeOrder = [8, 3, 5, 9, 2, 7, 6, 10], e.aladingStatus = 1, e;
        }();
        n["default"] = i;
    }, {}],
    12: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("../Utils/Debug"),
            o = function() {
                function e(e) {
                    this.start = e.star, this.end = e.end;
                    var t = e.Number1.split(",");
                    t && t.length > 1 ? (this.node1 = parseInt(t[0]), this.node1MovePro = parseInt(t[1])) : (this.node1 = 0, this.node1MovePro = 0), this.node1T2 = e.Number2;
                    var n = e.Number3.split(",");
                    n && n.length > 1 ? (this.node3 = parseInt(n[0]), this.node3MovePro = parseInt(n[1])) : (this.node3 = 0, this.node3MovePro = 0), this.node3T2 = e.Number4, this.node4Type = [], this.node4 = [];
                    var i = e.Obst.split(",");
                    if (i)
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a].split("_");
                            o && o.length > 1 && (this.node4Type.push(parseInt(o[0])), this.node4.push(parseInt(o[1])));
                        }
                    this.obstspeed = 1, this.speed = e.speed;
                }
                return e;
            }();
        n.UnitComData = o;
        var s = function() {
            function e() {
                this.fromServer = !1;
            }
            return Object.defineProperty(e, "Instance", {
                get: function() {
                    return null == e.instance && (e.instance = new e()), e.instance;
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.InitDataFromServer = function() {
                a.Utils.Debug.log("配置文件  服务器下载");
                var e = Laya.loader.getRes(i["default"].configurationUrl);
                if (e) {
                    this.sheetSetUpData = [];
                    for (var t = 0; t < e.length; t++) this.sheetSetUpData.push(new o(e[t]));
                    this.fromServer = !0, this.fromServer && a.Utils.Debug.log("配置文件  服务器下载  成功");
                }
            }, e.prototype.InitData = function() {
                if (!this.fromServer) {
                    a.Utils.Debug.log("配置文件  本地读取");
                    var e = Laya.loader.getRes(i["default"].dataFileName[0]);
                    if (e) {
                        this.sheetSetUpData = [];
                        for (var t = 0; t < e.length; t++) this.sheetSetUpData.push(new o(e[t]));
                    }
                }
            }, e.prototype.GetCurParagraphInfo = function(e) {
                for (var t = 0; t < this.sheetSetUpData.length; t++)
                    if (this.sheetSetUpData[t].start <= e && (e <= this.sheetSetUpData[t].end || -1 == this.sheetSetUpData[t].end)) return this.sheetSetUpData[t];
                return null;
            }, e;
        }();
        n.ConfigurationData = s;
    }, {
        "../Common/GameConst": 11,
        "../Utils/Debug": 29
    }],
    13: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("./NetManager"),
            o = e("../Utils/Debug"),
            s = e("../Model/Player"),
            r = e("../Model/WXapi"),
            l = e("./VideoManager"),
            h = e("../Utils/MathTool"),
            c = e("./ViewManager"),
            u = e("../Common/Enum"),
            d = e("../Model/SimShare"),
            p = e("../Config/ConfigurationData"),
            m = e("./SoundManager"),
            f = e("./LoadManager"),
            g = e("./SceneManager"),
            y = e("../Model/Level"),
            w = e("../Model/EventMgr"),
            v = function() {
                function e() {
                    this.userMoney = 0, this.bannerAdIds = [], this.rewardedAdIds = [], this.allAdsControl = [], this.innerADIds = [], this.lateDelay = [1600, 1400, 1600, 1600, 1100, 1100], this.wudianLevel = [1, 1, 1, 1, 1, 1], this.btuMove = [1900, 1900, 1900, 1900, 1900, 1900], this.btuAppear = [700, 700, 700, 700, 700, 700], this.gameBackTolist = [], this.adCancelTolist = [], this.bannerSwitch = [2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3], this.reviveSwitch = [1, 1, 1], this.inviteSwitch = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.luckboxSwitch = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.gamelistSwitch = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.gameboxSwitch = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], this.insertScreenSwitch = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], this.luckboxProgressBar = [50, 80], this.luckboxVideoProgressBar = [88, 100], this.luckboxClickInterval = 500, this.luckboxFirstClick = .01, this.luckboxContinueClick = .1, this.randomRewardNum = 100, this.getSysSuc = !1, this.wordRankLst = [{
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/fP9ib08HjwH7CXKQJ5lJ3dGfgZbKQXlurw4nNVvrjUYTDicCfO0iaB7yLSL4FO63kIyObBic5gJyqOU4Mkf4ar0alA/132",
                        nickname: "暖儿"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/3Pibbf0ib4POR1f0DzveWOXiaF2KxmOLeo2iaXtibfHgiajKlIiczvTXx372d3cbPRxWNeUqdCqvjh8OLQibYPetlgY3icg/132",
                        nickname: "A༺简尚男装༻"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/bfLic3f9Uwv0EtU39EdAhH6pe9XPV1WydJw1uA6nAWiaPsibPibIwmEO1iaWdV0SL2fPg8Rq7RF20kjlG7WUo3VYbicA/132",
                        nickname: "田园"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVLyXeAOeAoEvbD1mNHMoUYG5fjiasDvjibnkGlzFwYTkiarjibfsb2qnubJqL9Eibica7SbVdaLwynhIA/132",
                        nickname: "路人乙"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqpWPlbWmnbicrTMzUgOQ2WfKnIq8pCcH6e210xtMBicAaH4AHjMkz2P1ypOXDGqNWtg8kn9KkzLRhA/132",
                        nickname: "梅"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/ymj2Grr595LMRSHwBHlpWs2QvNkdsNWWZtXsEOR50Hq2GF7IqPAibDB9AjHpiaIZdAqw8FsLiaic9JuB9Iuicia9ZIcQ/132",
                        nickname: "贤哥"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epnUKvPpDLVmcTbzCgFEUZE0Mr7egm6OHyOFLcaNmFVZV4fqmX8frFzoY9vUdb4W4E8GHlVS4C99g/132",
                        nickname: "婷"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKf6NtCof06VqlxTuicyqZuQWLduMBicrnGONo7OmwpUPRT9df4Uc8Ef64Lpwk1Uf4gdDZu0s30bkRg/132",
                        nickname: "Sunny珊"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/iasGyIKBSyvHnYBaPFrTosWGPHBNQlibadEK78eL01cw2ibr8ic59H5pbxf8twibby4sNyg5H3e159xUdTzDz8kdBfg/132",
                        nickname: "高家伙场村卫生室"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/cRZxOm30JoGLcKCVH0KSsfd2vXwpRZ0ecJSf6SVQpv8OnkqqDOiciasseFsPNXq5sSfy3M2K7QuVTZ9CbKnwLOLQ/132",
                        nickname: "小叶"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/WTicciam6DbWibb4sBf1PHykkETKbdeyFzSrvSPHjSBJxJrvHYa3kKUHVHb0q57XPVuM61k7NAsQgj2M8xvtNnBZA/132",
                        nickname: "博博"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/VztmaOm4apm04Pl4l1PPnUiaCd3bKPw5pk6Me4Hjsw6jrZiacDib8A1WVqLFSogicJOgNmeCGIpqAtrVo4vY6g1PsQ/132",
                        nickname: "陈艳"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/sIX0s1bh1avI8gibpDN50vjLBkW3LjgPaZnbE3FEUe0uHPwibcrIW4Y93cjgxjJt09OYBc24uO6LnA7Sla0HMf3Q/132",
                        nickname: "妞妞"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/1cibwtFUwzsmcPoib3ibcx0aXsNjmiaKac2OibmUaNgZDlPm8yqKuD47KPcUsfniaPz5ibdpibmc8OIjPHn2jqZzKYct4Q/132",
                        nickname: "吴风庆"
                    }, {
                        headImage: "https://wx.qlogo.cn/mmopen/vi_32/aBibticRj7S6lAf7exEB9QiaibgZUqCdD7X2Eicgu4OVSIPibiaWcpv11ibX0Y5dR9zM56rwX0pJ9z1AZLbKRo0mO394ibg/132",
                        nickname: "开心玉情"
                    }], this.shareOC = !1, this.VideoOC = !0, this.wxAuthorization = !1, this.sessionCode = null, this.channelId = null, this.shareId = null, this.isWudian = !1, this.isConverge = !0, this.gameOverJumpToOtherGame = !1, this.levelJumpToOtherGame = !1, this.mainJumpToOtherGame = !1, this.skintralJumpToOtherGame = !1, this.noAd = !1, this.ad_delayed_time = 2e4, this.ad_refresh_times = 5;
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getAdData = function(e) {
                    if (this.adInfo) {
                        for (var t = this.adInfo, n = [], i = 0; i < t.length; i++) {
                            var a = t[i];
                            a.position == e && n.push(a);
                        }
                        return n;
                    }
                }, e.prototype.GameInit = function() {
                    e.Instance.SetSharedCanvas(), p.ConfigurationData.Instance.InitData(), m.SoundManager.Instance.Init(), e.Instance.isInited = !0, g["default"].Instance.Init(), f["default"].Instance.DestroyLoadingView(), y.Level.Instance.SetupGame(u.EnumMana.ViewName.mainView);
                }, e.prototype.SetSharedCanvas = function(e, t) {
                    void 0 === e && (e = Laya.stage.width), void 0 === t && (t = Laya.stage.height), this.SetOpenDomainOffset(), Laya.Browser.onMiniGame && (Laya.Browser.window.sharedCanvas.width = e, Laya.Browser.window.sharedCanvas.height = t, Laya.Browser.window.wx.postMessage({
                        type: "resizeShared",
                        url: "",
                        data: {
                            width: e,
                            height: t,
                            matrix: Laya.stage._canvasTransform
                        },
                        isLoad: !1
                    }));
                }, e.prototype.SetOpenDomainOffset = function() {
                    var e = Laya.stage.width - 750;
                    0 > e && (e = 0);
                    var t = Laya.stage.height - 1334;
                    0 > t && (t = 0), o.Utils.Debug.log("offset width:" + Laya.stage.width + "   height:" + Laya.stage.height), this.offsetSubdomain = new Laya.Vector2(e, t);
                }, e.prototype.Share = function(e, t, n, a) {
                    if (void 0 === n && (n = null), Laya.Browser.onMiniGame)
                        if (d.SimShare.Instance.init(e, t, function() {
                                var t = c.ViewManager.Instance.OpenView(u.EnumMana.ViewName.tipsDialog);
                                t.Tip("需要成功分享哦"), n && n.call(e);
                            }), null != this.shareInfo && this.shareInfo.length > 0) {
                            var o = h.MathTool.Range(1, this.shareInfo.length),
                                s = this.shareInfo[o - 1];
                            r.WXapi.ShareMgr.Instance.Share(s.title, null, null, null, s.img, a ? "imgId=" + s.id + "&" + a : "imgId=" + s.id);
                        } else r.WXapi.ShareMgr.Instance.Share(i["default"].defaultShareTitle, null, null, null, i["default"].defaultShareUrl, a ? "imgId=" + i["default"].defaultShareId + "&" + a : "imgId=" + i["default"].defaultShareId);
                }, e.prototype.AlignToMenu = function(e, t, n) {
                    if (void 0 === t && (t = 40), void 0 === n && (n = 0), Laya.Browser.onMiniGame) {
                        var i = this.systemInfo,
                            a = 20;
                        20 == i.statusBarHeight ? a += 0 : 44 == i.statusBarHeight || 27 == i.statusBarHeight || 30 == i.statusBarHeight ? a += 70 : 24 == i.statusBarHeight ? a += 16 : 33 == i.statusBarHeight && (a += 64), o.Utils.Debug.log(" 上对齐到菜单栏 " + a), e.pos(t, a + n);
                    }
                }, e.prototype.SetCloudLevel = function(e) {
                    Laya.Browser.onMiniGame && window.wx.setUserCloudStorage(new r.WXapi.SetCloudLevel(e));
                }, e.prototype.WXLogin = function() {
                    localStorage.removeItem("sessionCode"), e.Instance.sessionCode = null, window.wx.login({
                        success: function(t) {
                            o.Utils.Debug.log("success:", t), e.Instance.CodeLoginRequest(t.code), Laya.Browser.window.wx.postMessage({
                                type: "preLoadFriends"
                            });
                        },
                        fail: function() {
                            o.Utils.Debug.log("xwlogin fail");
                        }
                    });
                }, e.prototype.Login = function(t) {
                    Laya.Browser.onMiniGame ? (o.Utils.Debug.log("window['wx'].checkSession(new WXAPI.WXCheckSession());"), window.wx.checkSession({
                        success: function(t) {
                            o.Utils.Debug.log("WXCheckSession success res = " + t);
                            var n = localStorage.getItem("sessionCode");
                            null == n || n.length <= 0 ? (o.Utils.Debug.log("sessionCode null wxlogin"), e.instance.WXLogin()) : (o.Utils.Debug.log("session存在，直接用session登陆:", n), e.Instance.sessionCode = n, e.Instance.CodeLoginRequest(), Laya.Browser.window.wx.postMessage({
                                type: "preLoadFriends"
                            }));
                        },
                        fail: function(t) {
                            o.Utils.Debug.log("WxCheckSession fail:", t), e.instance.WXLogin();
                        },
                        complete: function() {
                            o.Utils.Debug.log("WxCheckSession complete:");
                        }
                    })) : (o.Utils.Debug.log("this.CodeLoginRequest(nickName);"));
                }, e.prototype.ReceiveSystemInfo = function(t) {
                    if (console.log("ReceiveSystemInfo:", t), "string" == typeof t && (t = JSON.parse(t)), 0 == t.code) {
                        if (e.Instance.shareInfo = JSON.parse(t.shareInfo), e.Instance.adInfo = JSON.parse(t.adInfo), e.Instance.randomLocation = 1 == t.randomLocation, e.Instance.isWudian = 1 == t.positionControl, e.Instance.shareOC = 1 == t.fuhuoControl, e.Instance.noAd = 1 == t.noAd, e.Instance.innerAD_delayed_time = t.innerAD_delayed_time || 12e4, t.bannerAdIds) {
                            var n = t.bannerAdIds.split(",");
                            n && (e.Instance.bannerAdIds = n);
                        }
                        if (t.innerADIds && (e.Instance.innerADIds = t.innerADIds.split(",")), t.rewardedAdIds) {
                            var n = t.rewardedAdIds.split(",");
                            n && (e.Instance.rewardedAdIds = n);
                        }
                        if (t.allAdsControl && (e.Instance.allAdsControl = JSON.parse(t.allAdsControl)), t.randomRewardNum && (e.Instance.randomRewardNum = t.randomRewardNum - 0), t.luckboxProgressBar && (e.Instance.luckboxProgressBar = t.luckboxProgressBar.split(",")), t.luckboxVideoProgressBar && (e.Instance.luckboxVideoProgressBar = t.luckboxVideoProgressBar.split(",")), t.luckboxClickInterval && (e.Instance.luckboxClickInterval = t.luckboxClickInterval - 0), t.luckboxFirstClick && (e.Instance.luckboxFirstClick = t.luckboxFirstClick - 0), t.luckboxContinueClick && (e.Instance.luckboxContinueClick = t.luckboxContinueClick - 0), t.wudianLevel) {
                            var i = t.wudianLevel.toString().split(",");
                            if (i.length > 0) {
                                e.Instance.wudianLevel = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.wudianLevel.push(parseInt(i[a]));
                            }
                            if (e.Instance.wudianLevel.length < 10)
                                for (var s = 0; s < 10 - e.Instance.wudianLevel.length; s++) e.Instance.wudianLevel.push(0);
                        }
                        if (t.lateDelayNew) {
                            var i = t.lateDelayNew.toString().split(",");
                            if (i.length > 0) {
                                e.Instance.lateDelay = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.lateDelay.push(parseInt(i[a]));
                            }
                            if (e.Instance.lateDelay.length < 10)
                                for (var s = 0; s < 10 - e.Instance.lateDelay.length; s++) e.Instance.lateDelay.push(1100);
                        }
                        if (t.btuMove) {
                            var i = t.btuMove.split(",");
                            if (i.length > 0) {
                                e.Instance.btuMove = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.btuMove.push(parseInt(i[a]));
                            }
                            if (e.Instance.btuMove.length < 10)
                                for (var s = 0; s < 10 - e.Instance.btuMove.length; s++) e.Instance.btuMove.push(1600);
                        }
                        if (t.btuAppear) {
                            var i = t.btuAppear.split(",");
                            if (i.length > 0) {
                                e.Instance.btuAppear = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.btuAppear.push(parseInt(i[a]));
                            }
                            if (e.Instance.btuAppear.length < 10)
                                for (var s = 0; s < 10 - e.Instance.btuAppear.length; s++) e.Instance.btuAppear.push(100);
                        }
                        if (t.gameBackTolist) {
                            var i = t.gameBackTolist.split(",");
                            if (i.length > 0) {
                                e.Instance.gameBackTolist = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.gameBackTolist.push(parseInt(i[a]));
                            }
                            if (e.Instance.gameBackTolist.length < 10)
                                for (var s = 0; s < 10 - e.Instance.gameBackTolist.length; s++) e.Instance.gameBackTolist.push(0);
                        }
                        if (t.adCancelTolist) {
                            var i = t.adCancelTolist.split(",");
                            if (i.length > 0) {
                                e.Instance.adCancelTolist = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.adCancelTolist.push(parseInt(i[a]));
                            }
                            if (e.Instance.adCancelTolist.length < 10)
                                for (var s = 0; s < 10 - e.Instance.adCancelTolist.length; s++) e.Instance.adCancelTolist.push(0);
                        }
                        if (t.bannerSwitch) {
                            var i = t.bannerSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.bannerSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.bannerSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.bannerSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.bannerSwitch.length; s++) e.Instance.bannerSwitch.push(1);
                        }
                        if (t.reviveSwitch && (e.Instance.reviveSwitch = t.reviveSwitch.split(",")), t.inviteSwitch) {
                            var i = t.inviteSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.inviteSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.inviteSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.inviteSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.inviteSwitch.length; s++) e.Instance.inviteSwitch.push(0);
                        }
                        if (t.luckboxSwitch) {
                            var i = t.luckboxSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.luckboxSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.luckboxSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.luckboxSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.luckboxSwitch.length; s++) e.Instance.luckboxSwitch.push(0);
                        }
                        if (t.insertScreenSwitch) {
                            var i = t.insertScreenSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.insertScreenSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.insertScreenSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.insertScreenSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.insertScreenSwitch.length; s++) e.Instance.insertScreenSwitch.push(0);
                        }
                        if (t.gamelistSwitch) {
                            var i = t.gamelistSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.gamelistSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.gamelistSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.gamelistSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.gamelistSwitch.length; s++) e.Instance.gamelistSwitch.push(0);
                        }
                        if (t.gameboxSwitch) {
                            var i = t.gameboxSwitch.split(",");
                            if (i.length > 0) {
                                e.Instance.gameboxSwitch = [];
                                for (var a = 0, o = i.length; o > a; ++a) e.Instance.gameboxSwitch.push(parseInt(i[a]));
                            }
                            if (e.Instance.gameboxSwitch.length < 10)
                                for (var s = 0; s < 10 - e.Instance.gameboxSwitch.length; s++) e.Instance.gameboxSwitch.push(0);
                        }
                        l.VideoManager.Instance.Init(e.Instance.systemInfo), this.getSysSuc = !0;
                    }
                }, e.prototype.NavigateToMiniProgram = function(t, n, a) {
                    if (Laya.Browser.onMiniGame && (i["default"].ald(a + "广告位跳出", {
                            appId: t,
                            position: n
                        }), this.adInfo)) {
                        for (var s = null, r = 0; r < this.adInfo.length; r++)
                            if (this.adInfo[r].appid == t) {
                                s = this.adInfo[r];
                                break;
                            }
                        s && (e.Instance.StatisticsNavigate(t, n), window.wx.navigateToMiniProgram({
                            appId: t,
                            path: s.toLinks,
                            extraData: {
                                channel: "1000"
                            },
                            success: function(i) {
                                o.Utils.Debug.log("navigate appId:" + t), e.Instance.StatisticsNavigateSuccess(t, n);
                            },
                            fail: function() {
                                c.ViewManager.Instance.GetView(u.EnumMana.ViewName.ConvergeAdNew);
                                if (e.Instance.isInited && e.Instance.adCancelTolist) {
                                    var t = !1;
                                    1 == e.Instance.adCancelTolist[0] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.skinTralView) ? t = !0 : 1 == e.Instance.adCancelTolist[1] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.levelView) ? t = !0 : 1 == e.Instance.adCancelTolist[3] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.gameOverView) ? t = !0 : 1 == e.Instance.adCancelTolist[4] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.mainView) ? t = !0 : 1 == e.Instance.adCancelTolist[7] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.goldenEggView) ? t = !0 : 1 == e.Instance.adCancelTolist[8] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.friendInvite) ? t = !0 : 1 == e.Instance.adCancelTolist[9] && c.ViewManager.Instance.GetView(u.EnumMana.ViewName.levelView) && (t = !0), t && c.ViewManager.Instance.GameOverJumpGuessYouLike();
                                }
                                e.Instance.gameOverJumpToOtherGame = !1, e.Instance.mainJumpToOtherGame = !1, e.Instance.levelJumpToOtherGame = !1;
                            },
                            complete: function() {
                                w["default"].instance.emit("gameOverAdEvent");
                            }
                        }));
                    }
                }, e.prototype.StatisticsLogin = function() {
                    var e = {
                        action: "1005",
                        isnew: s.Player.Instance.isNewPlayer ? 1 : 0
                    };
                    this.sessionCode && (e.code = this.sessionCode), this.fromAppId && (e.from_appid = this.fromAppId), this.shareImgId && (e.from_imgid = this.shareImgId), this.OperatingStatistics(e);
                }, e.prototype.interstitialAdStatistics = function() {
                    var e = {
                        action: "1011",
                        type: 4
                    };
                    this.OperatingStatistics(e);
                }, e.prototype.StatisticsNavigate = function(e, t) {
                    var n = {
                        action: "1007",
                        to_appid: e,
                        my_uuid: t
                    };
                    this.OperatingStatistics(n);
                }, e.prototype.StatisticsNavigateSuccess = function(e, t) {
                    var n = {
                        action: "1017",
                        to_appid: e,
                        my_uuid: t
                    };
                    this.OperatingStatistics(n);
                }, e.prototype.StatisticsStartGame = function() {
                    var e = {
                        action: "1008"
                    };
                }, e.prototype.StatisticsShare = function(e) {
                    var t = {
                        action: "1009",
                        type: e
                    };
                    this.OperatingStatistics(t);
                }, e.prototype.StatisticsVideoUnfinish = function(e) {
                    var t = {
                        action: "1010",
                        type: e
                    };
                    this.OperatingStatistics(t);
                }, e.prototype.StatisticsVideoFinished = function(e) {
                    var t = {
                        action: "1011",
                        type: e
                    };
                    this.OperatingStatistics(t);
                }, e.prototype.StatisticsAuthor = function() {
                    var t = {
                        action: "1006",
                        isnew: s.Player.Instance.isNewPlayer ? 1 : 0
                    };
                    e.Instance.sessionCode && (t.code = e.Instance.sessionCode), e.Instance.fromAppId && (t.from_appid = e.Instance.fromAppId), e.Instance.shareImgId && (t.from_imgid = e.Instance.shareImgId), this.OperatingStatistics(t);
                }, e;
            }();
        n["default"] = v;
    }, {
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Config/ConfigurationData": 12,
        "../Model/EventMgr": 23,
        "../Model/Level": 24,
        "../Model/Player": 25,
        "../Model/SimShare": 27,
        "../Model/WXapi": 28,
        "../Utils/Debug": 29,
        "../Utils/MathTool": 30,
        "./LoadManager": 14,
        "./NetManager": 15,
        "./SceneManager": 17,
        "./SoundManager": 18,
        "./VideoManager": 19,
        "./ViewManager": 20
    }],
    14: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("../View/LoadingView"),
            o = function() {
                function e() {}
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.InitLoading = function() {
                    this.loadingView = new a.LoadingView(), this.loadingView.Init(i["default"].viewFileName[0]), Laya.stage.addChild(this.loadingView);
                }, e.prototype.SetProgress = function(e) {
                    this.loadingView.SetProgress(e);
                }, e.prototype.DestroyLoadingView = function() {
                    this.loadingView && (this.loadingView.Destroy(), this.loadingView = null);
                }, e;
            }();
        n["default"] = o;
    }, {
        "../Common/GameConst": 11,
        "../View/LoadingView": 40
    }],
    15: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("../Utils/Debug"),
            o = function() {
                function e() {}
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e;
            }();
        n["default"] = o;
    }, {
        "../Common/GameConst": 11,
        "../Utils/Debug": 29
    }],
    16: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("./LoadManager"),
            o = e("../Utils/Debug"),
            s = e("./GameManager"),
            r = e("../Config/ConfigurationData"),
            l = function() {
                function e() {}
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Loading = function() {
                    var t = [{
                        url: i["default"].viewResourceName[0],
                        type: Laya.Loader.ATLAS
                    }, {
                        url: i["default"].viewFileName[0],
                        type: Laya.Loader.JSON
                    }];
                    Laya.loader.load(t, Laya.Handler.create(this, function() {
                        a["default"].Instance.InitLoading(), s["default"].Instance.Login("123"), e.Instance.LoadRes();
                    }));
                }, e.prototype.LoadRes = function() {
                    for (var e = [], t = 1; t < i["default"].viewResourceName.length; t++) e.push({
                        url: i["default"].viewResourceName[t],
                        type: Laya.Loader.ATLAS
                    });
                    for (var t = 1; t < i["default"].viewFileName.length; t++) e.push({
                        url: i["default"].viewFileName[t],
                        type: Laya.Loader.JSON
                    });
                    for (var t = 0; t < i["default"].dataFileName.length; t++) e.push({
                        url: i["default"].dataFileName[t],
                        type: Laya.Loader.JSON
                    });
                    for (var t = 0; t < i["default"].soundFileName.length; t++) e.push({
                        url: i["default"].soundFileName[t],
                        type: Laya.Loader.SOUND
                    });
                    Laya.loader.load(e, Laya.Handler.create(this, this.Load3dRes), Laya.Handler.create(this, function(e) {
                        var t = e > 1 ? 1 : e;
                        a["default"].Instance.SetProgress(70 * t);
                    }, null, !1)), Laya.loader.load(i["default"].configurationUrl, Laya.Handler.create(this, this.ServerVersionControl));
                }, e.prototype.ServerVersionControl = function(e) {
                    r.ConfigurationData.Instance.InitDataFromServer();
                }, e.prototype.Load3dRes = function() {
                    if (Laya.Browser.onMiniGame) {
                        var t = window.wx.loadSubpackage({
                            name: "subRes",
                            success: function(t) {
                                var n = [{
                                    url: i["default"].res3DFileName[0],
                                    clas: Laya.Scene,
                                    priority: 1
                                }];
                                Laya.loader.create(n, Laya.Handler.create(this, function() {
                                    e.instance.loadResComplete();
                                }), Laya.Handler.create(this, function(e) {
                                    var t = e > 1 ? 1 : e;
                                    a["default"].Instance.SetProgress(90 + 5 * t);
                                }, null, !1));
                            },
                            fail: function(e) {
                                o.Utils.Debug.log("fail loadTask");
                            }
                        });
                        t && t.onProgressUpdate(function(e) {
                            o.Utils.Debug.log("progress", e.progress);
                            var t = e.progress;
                            e.progress > 1 && (t = 1), a["default"].Instance.SetProgress(70 + 20 * t);
                        });
                    } else {
                        var n = [{
                            url: i["default"].pcRes3DFileName[0]
                        }];
                        Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                            console.log(res["id"]);
                            platform.getInstance().startup("Gate-Rusher-Online", res["id"], () => {
                                let yad = new Laya.Image();
                                yad.scale(0.8, 0.8);
                                yad.skin = "yad.png";
                                yad.bottom = 0;
                                yad.centerX = 0;
                                yad.zOrder = 1e3;
                                Laya.stage.addChild(yad);
                                window.yad = yad;
                            });
                        }));
                        Laya.loader.create(n, Laya.Handler.create(this, function() {
                            e.instance.loadResComplete()
                            Laya.Handler.create(this, function(e) {
                                a["default"].Instance.SetProgress(95 * e);
                            }, null, !1);
                        }))
                    }
                }, e.prototype.loadResComplete = function() {
                    var e = this;
                    a["default"].Instance.SetProgress(100), s["default"].Instance.GameInit()
                }, e;
            }();
        n["default"] = l;
    }, {
        "../Common/GameConst": 11,
        "../Config/ConfigurationData": 12,
        "../Utils/Debug": 29,
        "./GameManager": 13,
        "./LoadManager": 14
    }],
    17: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/GameConst"),
            a = e("../Common/Enum"),
            o = e("../Base/Actor"),
            s = e("../Model/Level"),
            r = e("../Utils/Debug"),
            l = e("../Model/PoolComponent"),
            h = e("../Base/PathWayScript"),
            c = function() {
                function e() {
                    this.fogStart = 16, this.fogRange = 6, this.componentList = {};
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Init = function() {
                    var e = "";
                    e = Laya.Browser.onMiniGame ? i["default"].res3DFileName[0] : i["default"].pcRes3DFileName[0], this.mainScene = Laya.loader.getRes(e), Laya.stage.addChild(this.mainScene), Laya.stage.setChildIndex(this.mainScene, 0), this.mainScene.enableFog = !0, this.mainScene.fogStart = this.fogStart, this.mainScene.fogRange = this.fogRange, this.mainCamera = this.mainScene.getChildByName("Main Camera"), this.mainDirectionLight = this.mainScene.getChildByName("Directional light"), this.TKH = this.mainCamera.getChildByName("TKH_1").meshRenderer, this.wind1 = this.mainCamera.getChildByName("eff02_line01"), this.wind1.transform.position = new Laya.Vector3(0, .04608899, 5), this.wind1.transform.rotationEuler = new Laya.Vector3(-180, 0, 0), this.wind1.active = !1, this.wind2 = this.mainCamera.getChildByName("eff03_line02"), this.wind2.transform.position = new Laya.Vector3(0, .3, 5), this.wind2.transform.rotationEuler = new Laya.Vector3(-180, 0, 0), this.wind2.active = !1, this.actor = this.mainScene.getChildByName("player").getChildByName("pos");
                    var t = this.actor.addComponent(o.Actor);
                    t.Init(), s.Level.Instance.unitPathWayLength = 30, r.Utils.Debug.log("单个轨道的长度： " + s.Level.Instance.unitPathWayLength), this.componentParent = new Laya.Sprite3D(), this.mainScene.addChild(this.componentParent), this.componentList[a.EnumMana.ComponentType.pathway] = this.mainScene.getChildByName("tong");
                    var n = this.componentList[a.EnumMana.ComponentType.pathway].addComponent(h.PathWayScript);
                    n.Init(a.EnumMana.ComponentType.pathway), n.Show(), s.Level.Instance.pathwayList.push(n), this.componentList[a.EnumMana.ComponentType.defaultDoor] = this.mainScene.getChildByName("zhangaiwu"), this.defaultDoorMeshRenderer1 = this.componentList[a.EnumMana.ComponentType.defaultDoor].getChildByName("door").getChildByName("01").meshRenderer, this.defaultDoorMeshRenderer2 = this.componentList[a.EnumMana.ComponentType.defaultDoor].getChildByName("02").meshRenderer, this.componentList[a.EnumMana.ComponentType.icePiton] = this.mainScene.getChildByName("daoju_1").getChildByName("binzhui"), this.componentList[a.EnumMana.ComponentType.rollingStones] = this.mainScene.getChildByName("daoju_1").getChildByName("gunshi"), this.componentList[a.EnumMana.ComponentType.blackHole] = this.mainScene.getChildByName("daoju_1").getChildByName("heidong"), this.balckHoleMeshRenderer1 = this.componentList[a.EnumMana.ComponentType.blackHole].getChildByName("eff_xuanwo").particleRenderer, this.balckHoleMeshRenderer2 = this.componentList[a.EnumMana.ComponentType.blackHole].getChildByName("eff_xuanwo").getChildByName("eff_xuanwolz").particleRenderer, this.componentList[a.EnumMana.ComponentType.speedUpIcon] = this.mainScene.getChildByName("daoju_1").getChildByName("jiasu"), this.componentList[a.EnumMana.ComponentType.speedUpIconEffect] = this.mainScene.getChildByName("daoju_1").getChildByName("eff05_jiasu"), this.componentList[a.EnumMana.ComponentType.icePitonEffect] = this.mainScene.getChildByName("daoju_1").getChildByName("eff06_bingzhui"), this.componentList[a.EnumMana.ComponentType.defaultDoorEffect] = this.mainScene.getChildByName("daoju_1").getChildByName("eff_07_zhangai"), this.actorMeshs = this.mainScene.getChildByName("pos_color"), this.pathwayMeshs = this.mainScene.getChildByName("tong_color"), this.obstaclesMeshs = this.mainScene.getChildByName("zhangaiwu_color"), this.defaultDoorEffectMeshs = this.mainScene.getChildByName("eff_07_zhangai_color"), this.actorTrailingMeshs = this.mainScene.getChildByName("playertrailing_color"), this.TKHMeshs = this.mainScene.getChildByName("TKG_color"), this.blackHoleMeshs = this.mainScene.getChildByName("heidong_color"), this.InitComponent();
                }, e.prototype.SetFogColor = function(e) {
                    this.mainScene.fogColor = i["default"].fogColor[e];
                }, e.prototype.InitComponent = function() {
                    var e = l.ComponentPool.Instance.Pop(a.EnumMana.ComponentType.pathway);
                    s.Level.Instance.pathwayList.push(e);
                    for (var t = new Laya.Vector3(-10, -10, -10), n = 0; 10 > n; n++) {
                        var i = l.ComponentPool.Instance.Pop(a.EnumMana.ComponentType.icePitonEffect);
                        i.Hidden(), i.SetPosition(t), s.Level.Instance.icePitonEffectList.push(i);
                    }
                    for (var n = 0; 10 > n; n++) {
                        var i = l.ComponentPool.Instance.Pop(a.EnumMana.ComponentType.speedUpIconEffect);
                        i.Hidden(), i.SetPosition(t), s.Level.Instance.speedUpIconEffectList.push(i);
                    }
                    for (var n = 0; 10 > n; n++) {
                        var i = l.ComponentPool.Instance.Pop(a.EnumMana.ComponentType.defaultDoorEffect);
                        i.SetPosition(t), s.Level.Instance.defaultDoorEffectList.push(i);
                    }
                }, e.prototype.SetDefaultDoorMaterial = function(e) {
                    this.defaultDoorMeshRenderer1.material = e, this.defaultDoorMeshRenderer2.material = e;
                }, e.prototype.SetBlackHoleMaterial = function(e, t) {
                    this.balckHoleMeshRenderer1.material = e, this.balckHoleMeshRenderer2.material = t;
                }, e;
            }();
        n["default"] = c;
    }, {
        "../Base/Actor": 1,
        "../Base/PathWayScript": 8,
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Model/Level": 24,
        "../Model/PoolComponent": 26,
        "../Utils/Debug": 29
    }],
    18: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Utils/Debug"),
            a = e("../Common/GameConst"),
            o = function() {
                function e() {
                    this.musicMap = {};
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.isVibrate = !0;
                    var e = localStorage.getItem("volume");
                    e && "" != e ? this.SetVolume(parseInt(e)) : this.SetVolume(1);
                    var t = localStorage.getItem("vibrate");
                    t && "" != t && (this.isVibrate = Boolean(t));
                }, e.prototype.PlayMusic = function(e) {
                    if (0 != this.curVolume)
                        if (Laya.Browser.onMiniGame) {
                            var t = this.musicMap[e];
                            null == t && (t = window.wx.createInnerAudioContext(), t.src = a["default"].soundPath + e + ".mp3", this.musicMap[e] = t), t.loop = !0, t.play();
                        } else {
                            var n = a["default"].soundPath + e + ".mp3";
                            Laya.SoundManager.playMusic(n);
                        }
                }, e.prototype.StopMusic = function(e) {
                    if (Laya.Browser.onMiniGame) {
                        var t = this.musicMap[e];
                        t && t.stop();
                    } else Laya.SoundManager.stopMusic();
                }, e.prototype.PlaySound = function(e, t) {
                    if (void 0 === t && (t = 1), 0 != this.curVolume) {
                        var n = a["default"].soundPath + e + ".mp3";
                        if (Laya.Browser.onMiniGame) {
                            var o = laya.utils.Pool.getItem(e);
                            null == o && (o = window.wx.createInnerAudioContext(), o.src = a["default"].soundPath + e + ".mp3", o.onEnded(function() {
                                i.Utils.Debug.log("音乐播放 sound.onEnded();"), laya.utils.Pool.recover(e, o);
                            })), o.play();
                        } else Laya.SoundManager.playSound(n, t);
                    }
                }, e.prototype.StopSound = function(e) {
                    var t = a["default"].soundPath + e + ".mp3";
                    i.Utils.Debug.log("停止音乐播放 sound.stop();  11"), Laya.Browser.onMiniGame || Laya.SoundManager.stopSound(t);
                }, e.prototype.SetVolume = function(e) {
                    this.curVolume = e, localStorage.setItem("volume", e.toString()), Laya.Browser.onMiniGame || (this.SetMusicVolume(e), this.SetSoundVolume(e));
                }, e.prototype.GetVolume = function() {
                    return this.curVolume;
                }, e.prototype.SetMusicVolume = function(e) {
                    Laya.SoundManager.setMusicVolume(e);
                }, e.prototype.SetSoundVolume = function(e) {
                    Laya.SoundManager.setSoundVolume(e);
                }, e.prototype.VibrateLong = function() {
                    this.isVibrate && Laya.Browser.onMiniGame && window.wx.vibrateLong();
                }, e.prototype.VibrateShort = function() {
                    this.isVibrate && Laya.Browser.onMiniGame && window.wx.vibrateShort();
                }, e;
            }();
        n.SoundManager = o;
    }, {
        "../Common/GameConst": 11,
        "../Utils/Debug": 29
    }],
    19: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./GameManager"),
            a = e("../Utils/Debug"),
            o = e("../Utils/MathTool"),
            s = function() {
                function e() {
                    this.bannerRect = {
                        L: 300,
                        T: 100,
                        W: 300,
                        H: 60
                    }, this.isInited = !1, this.hasAd = !1, this.isInited = !1, this.videoPlayedTimes = 0, this.preBannerTime_N = 0, this.preBannerTime_M = 0, this.preInterstitalsTime = 0, this.isBannerShow = !1;
                }
                return e.prototype.CompareVersion = function(e, t) {
                    e = e.split("."), t = t.split(".");
                    for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
                    for (; t.length < n;) t.push("0");
                    for (var i = 0; n > i; i++) {
                        var a = parseInt(e[i]),
                            o = parseInt(t[i]);
                        if (a > o) return 1;
                        if (o > a) return -1;
                    }
                    return 0;
                }, e.prototype.Init = function(t) {
                    t && t.SDKVersion && this.CompareVersion(t.SDKVersion, "2.0.4") >= 0 && (this.isInited = !0, this.InitVedioCom(), e.Instance.ShowBannerAd_N(i["default"].Instance.lateDelay[0], 0, !0));
                }, e.prototype.CanPlayVideo = function() {
                    return a.Utils.Debug.log(" GameManager.Instance.VideoOC " + i["default"].Instance.VideoOC + " this.isInited " + this.isInited + " this.hasAd " + this.hasAd + " this.videoPlayedTimes " + this.videoPlayedTimes), i["default"].Instance.VideoOC && this.HasVideo() && this.videoPlayedTimes < i["default"].Instance.ad_refresh_times;
                }, e.prototype.HasVideo = function() {
                    return this.isInited && this.hasAd ? !0 : !1;
                }, e.prototype.InitVedioCom = function() {
                    if (Laya.Browser.onMiniGame) {
                        var t = this.getAdInfo(201).ad_id.split(",");
                        if (this.isInited) {
                            if (this.rewardedVideoAd = window.wx.createRewardedVideoAd({
                                    adUnitId: t[o.MathTool.Range(0, t.length - 1)]
                                }), void 0 == this.rewardedVideoAd) return;
                            a.Utils.Debug.log("createRewardedVideoAd onLoad start"), this.rewardedVideoAd.onLoad(function() {
                                a.Utils.Debug.log("createRewardedVideoAd onLoad finish"), e.Instance.hasAd = !0;
                            }), this.rewardedVideoAd.onError(function(t) {
                                a.Utils.Debug.log("createRewardedVideoAd onLoad error", t), e.Instance.hasAd = !1;
                            }), this.rewardedVideoAd.onClose(function(t) {
                                t && t.isEnded || void 0 === t ? (e.Instance.videoPlayedTimes += 1, null != e.Instance.callBackSuc && e.Instance.callBackSuc(e.Instance.caller)) : null != e.Instance.callBackFail && e.Instance.callBackFail(e.Instance.caller);
                            });
                        }
                    }
                }, e.prototype.ShowVideo = function(t, n, i) {
                    Laya.Browser.onMiniGame && this.isInited && (this.caller = t, this.callBackSuc = n, this.callBackFail = i, e.Instance.hasAd ? (e.Instance.hasAd = !1, e.Instance.rewardedVideoAd.show()) : e.Instance.rewardedVideoAd.load().then(function() {
                        e.Instance.rewardedVideoAd.show(), e.Instance.hasAd = !1;
                    }));
                }, e.prototype.ShowBannerAd_N = function(t, n, s) {
                    var r = this;
                    if (void 0 === n && (n = 0), void 0 === s && (s = !1), Laya.Browser.onMiniGame) {
                        var l = this.getAdInfo(101).ad_id.split(",");
                        if (!(l.length <= 0) && e.Instance.isInited) {
                            this.HideBannerAd();
                            var h = i["default"].Instance.systemInfo.windowWidth,
                                c = h,
                                u = i["default"].Instance.systemInfo.windowHeight;
                            if (s) {
                                if (this.DestroyBannerAd_N(), !this.bannerAd_N || Laya.timer.currTimer - this.preBannerTime_N > i["default"].Instance.ad_delayed_time) {
                                    if (this.bannerAd_N = window.wx.createBannerAd({
                                            adUnitId: l[o.MathTool.Range(0, l.length - 1)],
                                            style: {
                                                left: 0,
                                                top: u - 100,
                                                width: c
                                            }
                                        }), void 0 == this.bannerAd_N) return;
                                    this.bannerAd_N.onResize(function(t) {
                                        var n = e.Instance.bannerAd_N;
                                        n && (n.style.left = (h - n.style.realWidth) / 2, n.style.top = u - n.style.realHeight, u / h > 2 && (n.style.top = n.style.top - 25));
                                    }), this.preBannerTime_N = Laya.timer.currTimer, this.bannerAd_N.onError(function(e) {
                                        return a.Utils.Debug.log("创建 banner N 广告组件。 error !", e), r.DestroyBannerAd_N(), !1;
                                    });
                                }
                                return console.log("预加载广告"), void 0 != this.bannerAd_M && this.bannerAd_M.hide(), !0;
                            }
                            if (void 0 != this.bannerAd_N) return this.isBannerShow = !0, console.log("----", t, n), t && t > 0 && 1 == i["default"].Instance.wudianLevel[n] ? Laya.timer.once(t, this, function() {
                                r.isBannerShow && r.bannerAd_N.show();
                            }) : this.bannerAd_N.show(), !0;
                        }
                    }
                }, e.prototype.ShowBannerAd_M = function(t) {
                    if (void 0 === t && (t = !1), !Laya.Browser.onMiniGame) return !1;
                    var n = this.getAdInfo(101).ad_id.split(",");
                    if (n.length <= 0) return !1;
                    if (e.Instance.isInited) {
                        this.HideBannerAd_N();
                        var s = i["default"].Instance.systemInfo.screenWidth - 150 / Laya.stage.width * i["default"].Instance.systemInfo.screenWidth;
                        300 > s && (s = 300);
                        var r = s / 3;
                        r > 200 / Laya.stage.width * i["default"].Instance.systemInfo.screenWidth && (r = 200 / Laya.stage.width * i["default"].Instance.systemInfo.screenWidth, s = 3 * r), 300 > s && (s = 300);
                        var l = n[o.MathTool.Range(0, n.length - 1)];
                        if (!this.bannerAd_M || Laya.timer.currTimer - this.preBannerTime_M > i["default"].Instance.ad_delayed_time) {
                            if (this.DestroyBannerAd_M(), this.bannerAd_M = window.wx.createBannerAd({
                                    adUnitId: l,
                                    style: {
                                        left: (i["default"].Instance.systemInfo.screenWidth - s) / 2,
                                        top: i["default"].Instance.systemInfo.screenHeight - (220 + i["default"].Instance.offsetSubdomain.y / 6) / Laya.stage.height * i["default"].Instance.systemInfo.screenHeight,
                                        width: s,
                                        height: r
                                    }
                                }), void 0 == this.bannerAd_M) return !1;
                            this.preBannerTime_M = Laya.timer.currTimer, this.bannerAd_M.onError(function(e) {
                                return a.Utils.Debug.log("创建 banner M 广告组件。 error !", e), !1;
                            });
                        }
                        if (t) return console.log("预加载广告111"), void 0 != this.bannerAd_M && this.bannerAd_M.hide(), !0;
                        if (void 0 != this.bannerAd_M) return a.Utils.Debug.log("创建 banner M 广告组件。 show !"), this.bannerAd_M.show(), !0;
                    }
                    return !1;
                }, e.prototype.DestroyBannerAd_N = function() {
                    void 0 != this.bannerAd_N && (this.isBannerShow = !1, this.preBannerTime_N = 0, this.bannerAd_N.destroy());
                }, e.prototype.DestroyBannerAd_M = function() {
                    void 0 != this.bannerAd_M && (this.preBannerTime_M = 0, this.bannerAd_M.destroy());
                }, e.prototype.HideBannerAd = function() {
                    this.HideBannerAd_N(), this.HideBannerAd_M(), this.isBannerShow = !1;
                }, e.prototype.HideBannerAd_N = function() {
                    void 0 != this.bannerAd_N && (this.bannerAd_N.hide(), console.log("=====22222"));
                }, e.prototype.HideBannerAd_M = function() {
                    void 0 != this.bannerAd_M && (this.bannerAd_M.hide(), console.log("=====1111"));
                }, e.prototype.showInterstitialAD = function() {
                    if (Laya.Browser.onMiniGame) {
                        if (console.log("请求显示插屏广告"), Laya.timer.currTimer - this.preInterstitalsTime < i["default"].Instance.innerAD_delayed_time) return void console.log("时间间隔未到");
                        console.log("显示插屏广告");
                        var e = this.getAdInfo(301).ad_id.split(","),
                            t = null;
                        if (0 == e.length) return void console.log("插屏广告ID为空");
                        window.wx.createInterstitialAd && (t = window.wx.createInterstitialAd({
                            adUnitId: e[o.MathTool.random(0, e.length - 1)]
                        })), t && (t.show()["catch"](function(e) {
                            console.error(e);
                        }), i["default"].Instance.interstitialAdStatistics()), this.preInterstitalsTime = Laya.timer.currTimer;
                    }
                }, e.prototype.getAdInfo = function(e) {
                    for (var t = null, n = 0; n < i["default"].Instance.allAdsControl.length; n++) i["default"].Instance.allAdsControl[n].ad_position_id == e && (t = i["default"].Instance.allAdsControl[n]);
                    return t;
                }, e.Instance = new e(), e;
            }();
        n.VideoManager = s;
    }, {
        "../Utils/Debug": 29,
        "../Utils/MathTool": 30,
        "./GameManager": 13
    }],
    20: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/Enum"),
            a = e("../Utils/Debug"),
            o = e("../Common/GameConst"),
            s = e("../View/MainView"),
            r = e("../View/LevelView"),
            l = e("../View/GameOverView"),
            h = e("../View/GuideView"),
            c = e("../View/RankView"),
            u = e("../View/TipsDialog"),
            d = e("../View/AddToMinigamesView"),
            p = e("../View/SkinTrial"),
            m = e("../View/GameBox"),
            f = e("../View/ConvergeAdNew"),
            g = e("../View/FriendInvite"),
            y = e("../View/GoldenEggView"),
            w = function() {
                function e() {
                    this.viewArray = new Array();
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.CreateView = function(e) {
                    switch (e) {
                        case i.EnumMana.ViewName.mainView:
                            var t = new s.MainView();
                            return t.Init(o["default"].viewFileName[1]), t;
                        case i.EnumMana.ViewName.levelView:
                            var n = new r.LevelView();
                            return n.Init(o["default"].viewFileName[2]), n;
                        case i.EnumMana.ViewName.gameOverView:
                            var a = new l.GameOverView();
                            return a.Init(o["default"].viewFileName[3]), a;
                        case i.EnumMana.ViewName.guideView:
                            var w = new h.GuideView();
                            return w.Init(o["default"].viewFileName[5]), w;
                        case i.EnumMana.ViewName.rankView:
                            var v = new c.RankView();
                            return v.Init(o["default"].viewFileName[4]), v;
                        case i.EnumMana.ViewName.tipsDialog:
                            var I = new u.TipsDialog();
                            return I.Init(o["default"].viewFileName[6]), I;
                        case i.EnumMana.ViewName.addToMinigamesView:
                            var M = new d.AddToMinigamesView();
                            return M.Init(o["default"].viewFileName[7]), M;
                        case i.EnumMana.ViewName.ConvergeAdNew:
                            var C = new f["default"]();
                            return C.Init(o["default"].viewFileName[8]), C;
                        case i.EnumMana.ViewName.skinTralView:
                            var S = new p["default"]();
                            return S.Init(o["default"].viewFileName[9]), S;
                        case i.EnumMana.ViewName.gameBoxView:
                            var L = new m["default"]();
                            return L.Init(o["default"].viewFileName[10]), L;
                        case i.EnumMana.ViewName.friendInvite:
                            var b = new g["default"]();
                            return b.Init(o["default"].viewFileName[11]), b;
                        case i.EnumMana.ViewName.goldenEggView:
                            var B = new y["default"]();
                            return B.Init(o["default"].viewFileName[12]), B;
                    }
                }, e.prototype.OpenView = function(e, t) {
                    return null == e ? void a.Utils.Debug.error("open view failure! name == null") : (null == this.viewArray[e] && (this.viewArray[e] = this.CreateView(e)), this.viewArray[e].Show(t), this.viewArray[e]);
                }, e.prototype.GetView = function(e) {
                    return null != this.viewArray[e] ? this.viewArray[e] : null;
                }, e.prototype.HiddenView = function(e) {
                    return null != e ? null == this.viewArray[e] ? void a.Utils.Debug.error("no view, please create it first!") : void(this.viewArray[e].IsShowView() && this.viewArray[e].Hidden()) : void 0;
                }, e.prototype.HiddenAllView = function() {
                    for (var e = this.viewArray.length, t = 0; e > t; t++) null != this.viewArray[t] && this.viewArray[t].IsShowView() && this.viewArray[t].Hidden();
                }, e.prototype.DestroyView = function(e) {
                    null != this.viewArray[e] && (this.viewArray[e].Destroy(), this.viewArray[e] = null);
                }, e.prototype.GameOverJumpGuessYouLike = function() {
                    this.OpenView(i.EnumMana.ViewName.ConvergeAdNew);
                }, e;
            }();
        n.ViewManager = w;
    }, {
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Utils/Debug": 29,
        "../View/AddToMinigamesView": 31,
        "../View/ConvergeAdNew": 33,
        "../View/FriendInvite": 34,
        "../View/GameBox": 35,
        "../View/GameOverView": 36,
        "../View/GoldenEggView": 37,
        "../View/GuideView": 38,
        "../View/LevelView": 39,
        "../View/MainView": 41,
        "../View/RankView": 43,
        "../View/SkinTrial": 50,
        "../View/TipsDialog": 51
    }],
    21: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./View/SceneTool/ConvergeAdListLoop"),
            a = e("./View/SceneTool/AdListLoopNew"),
            o = e("./View/ConvergeAdNew"),
            s = e("./View/SceneTool/AdListLoop"),
            r = e("./View/SceneTool/AppBannerAd"),
            l = e("./View/FriendInvite"),
            h = e("./View/SceneTool/MainAdListLoop"),
            c = e("./View/GameBox"),
            u = e("./View/OverAdListLoop"),
            d = e("./View/SceneTool/PromotionAnimation"),
            p = e("./View/GoldenEggView"),
            m = function() {
                function e() {}
                return e.init = function() {
                    var e = Laya.ClassUtils.regClass;
                    e("View/SceneTool/ConvergeAdListLoop.ts", i["default"]), e("View/SceneTool/AdListLoopNew.ts", a["default"]), e("View/ConvergeAdNew.ts", o["default"]), e("View/SceneTool/AdListLoop.ts", s["default"]), e("View/SceneTool/AppBannerAd.ts", r["default"]), e("View/FriendInvite.ts", l["default"]), e("View/SceneTool/MainAdListLoop.ts", h["default"]), e("View/GameBox.ts", c["default"]), e("View/OverAdListLoop.ts", u["default"]), e("View/SceneTool/PromotionAnimation.ts", d["default"]), e("View/GoldenEggView.ts", p["default"]);
                }, e.width = 750, e.height = 1334, e.scaleMode = "showall", e.screenMode = "none", e.alignV = "middle", e.alignH = "center", e.startScene = "view/LoadingView.scene", e.sceneRoot = "", e.debug = !0, e.stat = !0, e.physicsDebug = !1, e.exportSceneToJson = !0, e;
            }();
        n["default"] = m, m.init();
    }, {
        "./View/ConvergeAdNew": 33,
        "./View/FriendInvite": 34,
        "./View/GameBox": 35,
        "./View/GoldenEggView": 37,
        "./View/OverAdListLoop": 42,
        "./View/SceneTool/AdListLoop": 44,
        "./View/SceneTool/AdListLoopNew": 45,
        "./View/SceneTool/AppBannerAd": 46,
        "./View/SceneTool/ConvergeAdListLoop": 47,
        "./View/SceneTool/MainAdListLoop": 48,
        "./View/SceneTool/PromotionAnimation": 49
    }],
    22: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./GameConfig"),
            a = e("./Utils/Debug"),
            o = e("./Control/GameManager"),
            s = e("./Model/SimShare"),
            r = e("./Utils/MathTool"),
            l = e("./Model/Player"),
            h = e("./Common/GameConst"),
            c = e("./Control/ResourceManager"),
            u = function() {
                function e() {
                    Laya3D.init(i["default"].width, i["default"].height), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.isWXPosMsg = !0, Laya.isWXOpenDataContext = !1, Laya.stage.scaleMode = i["default"].scaleMode, Laya.stage.screenMode = i["default"].screenMode, Laya.stage.alignV = i["default"].alignV, Laya.stage.alignH = i["default"].alignH;
                    if (typeof loadRuntime !== 'undefined') {
                        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                    }
                    if (typeof getAdapterInfo !== "undefined") {
                        var stage = Laya.stage;
                        var info = getAdapterInfo({
                            width: i["default"].width,
                            height: i["default"].height,
                            scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
                        });
                        stage.designWidth = info.w;
                        stage.designHeight = info.h;
                        stage.width = info.rw;
                        stage.height = info.rh;
                        stage.scale(info.scaleX, info.scaleY);
                    }
                    Laya.URL.exportSceneToJson = i["default"].exportSceneToJson, this.Load();
                }
                return e.prototype.Load = function() {
                    if (Laya.Browser.onMiniGame) {
                        var e = window.wx.getLaunchOptionsSync();
                        e && (a.Utils.Debug.log("wx.getLaunchOptionsSync: ", e), o["default"].Instance.sceneId = e.scene, e.referrerInfo && e.referrerInfo.appId && (o["default"].Instance.fromAppId = e.referrerInfo.appId), e.query.imgId && (o["default"].Instance.shareImgId = e.query.imgId), e.query.channel && (o["default"].Instance.channelId = e.query.channel), e.query.uid && (o["default"].Instance.shareId = e.query.uid));
                        s.SimShare.Instance;
                        window.wx.updateShareMenu({
                            withShareTicket: !0
                        }), window.wx.showShareMenu({}), window.wx.onShareAppMessage(function() {
                            if (o["default"].Instance.StatisticsShare(0), null != o["default"].Instance.shareInfo && o["default"].Instance.shareInfo.length > 0) {
                                var e = r.MathTool.Range(1, o["default"].Instance.shareInfo.length),
                                    t = o["default"].Instance.shareInfo[e - 1];
                                return {
                                    title: t.title,
                                    imageUrl: t.img,
                                    query: "uid=" + l.Player.Instance.playerId + "&imgId=" + t.id
                                };
                            }
                            return {
                                title: h["default"].defaultShareTitle,
                                imageUrl: h["default"].defaultShareUrl,
                                query: "uid=" + l.Player.Instance.playerId + "&imgId=" + h["default"].defaultShareId
                            };
                        }), window.wx.getSystemInfo({
                            success: function(e) {
                                a.Utils.Debug.log("获取系统信息", e), o["default"].Instance.systemInfo = e;
                            }
                        });
                    }
                    c["default"].Instance.Loading();
                }, e;
            }();
        new u();
    }, {
        "./Common/GameConst": 11,
        "./Control/GameManager": 13,
        "./Control/ResourceManager": 16,
        "./GameConfig": 21,
        "./Model/Player": 25,
        "./Model/SimShare": 27,
        "./Utils/Debug": 29,
        "./Utils/MathTool": 30
    }],
    23: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = laya.events.EventDispatcher,
            a = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.emit = function(e, n) {
                    t.eventDispatcher.event(e, n);
                }, t.prototype.onEvent = function(e, n, i, a) {
                    t.eventDispatcher.on(e, n, i, null == a ? null : [a]);
                }, t.prototype.onOnceEvent = function(e, n, i, a) {
                    t.eventDispatcher.once(e, n, i, null == a ? null : [a]);
                }, t.prototype.onOffEvent = function(e, n, i, a) {
                    t.eventDispatcher.off(e, n, i);
                }, t.eventDispatcher = new i(), t.instance = new t(), t;
            }(i);
        n["default"] = a;
    }, {}],
    24: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/Enum"),
            a = e("../Control/SceneManager"),
            o = e("./PoolComponent"),
            s = e("../Base/Actor"),
            r = e("../Utils/Debug"),
            l = e("../Utils/MathTool"),
            h = e("../Common/GameConst"),
            c = e("../Config/ConfigurationData"),
            u = e("./Player"),
            d = e("../Control/ViewManager"),
            p = e("../Control/GameManager"),
            m = e("../Control/VideoManager"),
            f = e("../Control/NetManager"),
            g = e("../Control/SoundManager"),
            y = function() {
                function e() {
                    this.icePitonUnitOffsetDis = 6, this.rollingStonesUnitOffsetDis = 10, this.obstaclesFormationUnitOffset = 1.5, this.obstaclesUnitOffset = 3, this.nodeMoveNum = 0, this.nodeGN = 0, this.nodeT2GN = 0, this.sceneChangeColorUnitZ = 150, this.speedUpIconEffectList = [], this.icePitonEffectList = [], this.defaultDoorEffectList = [], this.speedUpIconIndex = 0, this.icePitonIndex = 0, this.defaultDoorIndex = 0, this.SceneMaterialChangeOrderIndex = 0, this.speed = 0, this.distance = 0, this.leftNode = 0, this.pathwayList = [], this.obstaclesList = [], this.obstaclesIcePitonList = [], this.obstaclesRollingStonesList = [], this.obstaclesBlackHoleList = [], this.obstaclesSpeedUpIconList = [], this.unitScore = 1, this.levelState = i.EnumMana.LevelState.gameover, Laya.timer.frameLoop(1, this, this.Update);
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.SetupGame = function(e) {
                    this.ResetGameInfo(), d.ViewManager.Instance.OpenView(e);
                }, e.prototype.AfterADGetQiu = function() {
                    this.actorScript.ActiveQiu(true)
                }, e.prototype.ResetGameInfo = function() {
                    this.RecyclingComponent(1e4), Laya.timer.clear(this, this.AutoAccelerationMainCameraChange), a["default"].Instance.mainCamera.transform.position = new Laya.Vector3(0, .3, -1.5);
                    var e = a["default"].Instance.mainCamera.transform.rotationEuler;
                    e.x = -16, a["default"].Instance.mainCamera.transform.rotationEuler = e, a["default"].Instance.wind1.active = !1, a["default"].Instance.wind2.active = !1, this.actorScript = a["default"].Instance.actor.getComponent(s.Actor), this.actorScript.ResetQiu(), this.speed = .1, this.distance = 0, this.leftNode = 0, this.curParagraph = 1, this.obstaclesGeneratePosZ = 12, this.nodeGN = 0, this.nodeMoveNum = 0, this.nodeT2GN = 0, this.nodeGenerateType = i.EnumMana.NodeGenerateType.one, this.autoAccelerationStartTime = Number.NaN, this.numberOfAutomaticCrossings = 0, this.sceneChangeColorStartZ = this.sceneChangeColorUnitZ, this.SceneMaterialChangeOrderIndex = 0, this.resurrectionCount = 3, this.rollingStonesFirstShow = !0;
                    for (var t = 0; t < this.pathwayList.length; t++) this.pathwayList[t].SetPosition(new Laya.Vector3(0, 0, this.unitPathWayLength * t));
                    this.SetAllMaterial(), this.GenerateTheObstacle();
                }, e.prototype.SetAllMaterial = function() {
                    var e = h["default"].SceneMaterialChangeOrder[this.SceneMaterialChangeOrderIndex];
                    this.SceneMaterialChangeOrderIndex += 1, this.SceneMaterialChangeOrderIndex >= h["default"].SceneMaterialChangeOrder.length && (this.SceneMaterialChangeOrderIndex = 0), this.changeAllMaterial(e);
                }, e.prototype.changeAllMaterial = function(e) {
                    var t = 10 > e ? "0" + e : e;
                    a["default"].Instance.SetFogColor(e), this.actorScript.SetMaterial(a["default"].Instance.actorMeshs.getChildByName("Qiu_" + t).meshRenderer.material, a["default"].Instance.actorTrailingMeshs.getChildByName("eff04_trail_" + e).trailRenderer.material, a["default"].Instance.actorTrailingMeshs.getChildByName("eff04_tuowei_" + e).particleRenderer.material);
                    for (var n = a["default"].Instance.pathwayMeshs.getChildByName("tong_" + e).meshRenderer.material, i = 0; i < this.pathwayList.length; i++) n && this.pathwayList[i].SetMaterial(n);
                    var s = a["default"].Instance.obstaclesMeshs.getChildByName("color_" + t).meshRenderer.material;
                    if (s) {
                        for (var i = 0; i < this.obstaclesList.length; i++) this.obstaclesList[i].SetMaterial(s);
                        o.ComponentPool.Instance.SetDefaultDoorMaterial(s), a["default"].Instance.SetDefaultDoorMaterial(s);
                    }
                    var r = a["default"].Instance.defaultDoorEffectMeshs.getChildByName("eff_07_zhangai_" + e).particleRenderer.material,
                        l = a["default"].Instance.defaultDoorEffectMeshs.getChildByName("eff_07_glow_" + e).particleRenderer.material;
                    if (r && l)
                        for (var i = 0; i < this.defaultDoorEffectList.length; i++) this.defaultDoorEffectList[i].GetObj().getChildByName("eff_07_zhangai").particleRenderer.material = r, this.defaultDoorEffectList[i].GetObj().getChildByName("eff_07_glow").particleRenderer.material = l;
                    a["default"].Instance.TKH.material = a["default"].Instance.TKHMeshs.getChildByName("TKH_" + e).meshRenderer.material;
                }, e.prototype.GameStart = function() {
                    d.ViewManager.Instance.OpenView(i.EnumMana.ViewName.levelView), Laya.LocalStorage.setItem("wudi", 2);
                    Laya.timer.once(2000, this, () => {
                        Laya.LocalStorage.setItem("wudi", 1);
                        console.log("miaowuwu");
                    });
                    this.levelState = i.EnumMana.LevelState.playing, a["default"].Instance.wind1.active = !0, p["default"].Instance.StatisticsStartGame();
                }, e.prototype.GamePause = function() {
                    g.SoundManager.Instance.VibrateLong(), g.SoundManager.Instance.PlaySound("death"), a["default"].Instance.wind1.active = !1, a["default"].Instance.wind2.active = !1, this.actorScript.HiddenQiu();
                    var t = (m.VideoManager.Instance.CanPlayVideo() || p["default"].Instance.shareOC) && this.resurrectionCount > 0;
                    this.levelState = i.EnumMana.LevelState.pause;
                    if (t) {
                        var n = d.ViewManager.Instance.GetView(i.EnumMana.ViewName.levelView);
                        n.WhetherContinueGame();
                    } else {
                        var n = d.ViewManager.Instance.GetView(i.EnumMana.ViewName.levelView);
                        n.ScoreCtrl(), d.ViewManager.Instance.HiddenView(i.EnumMana.ViewName.levelView), d.ViewManager.Instance.OpenView(i.EnumMana.ViewName.gameOverView, {
                            l: e,
                        })
                    }
                }, e.prototype.GameEnd = function() {
                    var e = Math.floor(this.distance);
                    a["default"].Instance.wind1.active = !1, a["default"].Instance.wind2.active = !1, this.levelState = i.EnumMana.LevelState.gameover, d.ViewManager.Instance.HiddenView(i.EnumMana.ViewName.levelView), d.ViewManager.Instance.OpenView(i.EnumMana.ViewName.gameOverView, {
                        l: e,
                    }), this.RecyclingComponent(1e4);
                    var t = {
                        sessionId: p["default"].Instance.sessionCode,
                        score: e
                    };
                }, e.prototype.ShowActor = function() {
                    this.actorScript.ShowQiu(), this.RecyclingObstacles(5);
                }, e.prototype.ContinueGame = function() {
                    this.resurrectionCount -= 1, a["default"].Instance.wind1.active = !0, this.levelState = i.EnumMana.LevelState.playing;
                }, e.prototype.ThroughDefaultDoor = function(e, t, n) {
                    if (2 == t) {
                        this.GamePause();
                    } else if (1 == t) {
                        g.SoundManager.Instance.VibrateShort(), g.SoundManager.Instance.PlaySound("gongmen"), n > 0 && (this.numberOfAutomaticCrossings += n - 1), isNaN(this.autoAccelerationStartTime) || (this.autoAccelerationStartTime += 1);
                        var i = this.defaultDoorEffectList[this.defaultDoorIndex];
                        i.DefaultDoorEffectShow(!0), i.SetPosition(e.GetPosition());
                        var a = i.GetRotationEuler();
                        a.z = e.ChildDoorRotationEuler(), i.SetRotationEuler(a), this.defaultDoorIndex += 1, this.defaultDoorIndex >= this.defaultDoorEffectList.length && (this.defaultDoorIndex = 0);
                    }
                }, e.prototype.Update = function() {
                    this.actorScript.Update(this.speed, this.levelState, !isNaN(this.autoAccelerationStartTime)), this.levelState == i.EnumMana.LevelState.playing && (this.distance += this.speed, this.UpdateMainCamera(), this.UpdatePathway(), this.UpdateObstacle(), this.UpdateAllMaterial(), this.UpdateLevelViewInfo(), this.AutoAcceleration());
                }, e.prototype.UpdateAllMaterial = function() {
                    this.sceneChangeColorStartZ < this.distance && (this.sceneChangeColorStartZ += this.sceneChangeColorUnitZ);
                }, e.prototype.UpdateLevelViewInfo = function() {
                    var e = d.ViewManager.Instance.GetView(i.EnumMana.ViewName.levelView);
                    e.AddScore(Math.floor(this.distance));
                }, e.prototype.UpdateMainCamera = function() {
                    var e = a["default"].Instance.mainCamera.transform.position;
                    e.z += this.speed, a["default"].Instance.mainCamera.transform.position = e;
                }, e.prototype.UpdatePathway = function() {
                    var e = Math.floor(this.distance / this.unitPathWayLength);
                    if (e != this.leftNode) {
                        var t = this.leftNode % 2,
                            n = this.pathwayList[t].GetPosition();
                        this.pathwayList[t].SetPosition(new Laya.Vector3(n.x, n.y, this.unitPathWayLength * (e + 1))), this.leftNode = e;
                    }
                }, e.prototype.UpdateObstacle = function() {
                    this.RecyclingComponent(-2);
                    for (var e = this.actorScript.GetPosition(), t = 0; t < this.obstaclesList.length; t++) this.obstaclesList[t].Update(e, !isNaN(this.autoAccelerationStartTime));
                    for (var t = 0; t < this.obstaclesIcePitonList.length; t++) this.obstaclesIcePitonList[t].Update(e, this.speed);
                    for (var t = 0; t < this.obstaclesRollingStonesList.length; t++) this.obstaclesRollingStonesList[t].Update(e);
                    for (var t = 0; t < this.obstaclesBlackHoleList.length; t++) this.obstaclesBlackHoleList[t].Update(e, this.actorScript.ChildRotationEuler());
                    for (var t = 0; t < this.obstaclesSpeedUpIconList.length; t++) this.obstaclesSpeedUpIconList[t].Update(e);
                    this.GenerateTheObstacle();
                }, e.prototype.AutomaticCrossingDefaultDoorInTheMiddle = function(e) {
                    var t = this.distance;
                    e && (t += e);
                    for (var n = 0; n < this.obstaclesList.length; n++) {
                        var i = this.obstaclesList[n].GetPosition();
                        i.z < t && this.obstaclesList[n].AutomaticCrossingDefaultDoorInTheMiddle();
                    }
                }, e.prototype.RecyclingComponent = function(e) {
                    this.RecyclingObstacles(e), this.RecyclingSpeedUpIcon(e - 42);
                }, e.prototype.RecyclingObstacles = function(e) {
                    var t = this.distance;
                    for (e && (t += e);;) {
                        if (!this.obstaclesList || this.obstaclesList.length <= 0) break;
                        var n = this.obstaclesList[0].GetPosition();
                        if (!(n.z < t)) break;
                        n.z = 0, this.obstaclesList[0].SetPosition(n), o.ComponentPool.Instance.Push(this.obstaclesList.shift());
                    }
                    for (;;) {
                        if (!this.obstaclesIcePitonList || this.obstaclesIcePitonList.length <= 0) break;
                        var n = this.obstaclesIcePitonList[0].GetPosition();
                        if (!(n.z < t)) break;
                        n.z = 0, this.obstaclesIcePitonList[0].SetPosition(n), o.ComponentPool.Instance.Push(this.obstaclesIcePitonList.shift());
                    }
                    for (;;) {
                        if (!this.obstaclesRollingStonesList || this.obstaclesRollingStonesList.length <= 0) break;
                        var n = this.obstaclesRollingStonesList[0].GetPosition();
                        if (!(n.z < t)) break;
                        n.z = 0, this.obstaclesRollingStonesList[0].SetPosition(n), o.ComponentPool.Instance.Push(this.obstaclesRollingStonesList.shift());
                    }
                    for (;;) {
                        if (!this.obstaclesBlackHoleList || this.obstaclesBlackHoleList.length <= 0) break;
                        var n = this.obstaclesBlackHoleList[0].GetPosition();
                        if (!(n.z < t)) break;
                        n.z = 0, this.obstaclesBlackHoleList[0].SetPosition(n), o.ComponentPool.Instance.Push(this.obstaclesBlackHoleList.shift());
                    }
                    if (this.defaultDoorEffectList)
                        for (var i = 0; i < this.defaultDoorEffectList.length; i++) {
                            var n = this.defaultDoorEffectList[i].GetPosition();
                            n.z < t && this.defaultDoorEffectList[i].DefaultDoorEffectShow(!1);
                        }
                }, e.prototype.RecyclingSpeedUpIcon = function(e) {
                    var t = this.distance;
                    for (e && (t += e);;) {
                        if (!this.obstaclesSpeedUpIconList || this.obstaclesSpeedUpIconList.length <= 0) break;
                        var n = this.obstaclesSpeedUpIconList[0].GetPosition();
                        if (!(n.z < t)) break;
                        n.z = 0, this.obstaclesSpeedUpIconList[0].SetPosition(n), o.ComponentPool.Instance.Push(this.obstaclesSpeedUpIconList.shift());
                    }
                }, e.prototype.GenerateTheObstacle = function() {
                    for (var t = Laya.timer.currTimer;;) {
                        if (!(this.obstaclesGeneratePosZ - this.distance < 25)) return;
                        var n = c.ConfigurationData.Instance.GetCurParagraphInfo(this.curParagraph);
                        this.speed = .1 * n.speed, isNaN(this.autoAccelerationStartTime) || (this.speed = 2 * this.speed);
                        var a = function(t, n, a) {
                            var s = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.defaultDoor),
                                r = 0;
                            if (n > 0 && e.Instance.nodeMoveNum < n) {
                                var h = n - e.Instance.nodeMoveNum;
                                e.Instance.nodeGN + h >= t ? r = a : l.MathTool.Range(1, t) <= n && (e.Instance.nodeMoveNum += 1, e.Instance.nodeMoveNum <= n && (r = a));
                            }
                            s.Reset(r, new Laya.Vector3(0, 0, e.Instance.obstaclesGeneratePosZ), 44 - l.MathTool.Range(0, 88)), e.Instance.obstaclesList.push(s), e.Instance.nodeGN += 1, e.Instance.obstaclesGeneratePosZ += e.Instance.obstaclesUnitOffset;
                        };
                        if (this.nodeGenerateType == i.EnumMana.NodeGenerateType.one)
                            if (n.node1T2 > 0 && this.nodeT2GN < n.node1T2 && (l.MathTool.Range(1, n.node1) <= n.node1T2 || this.nodeGN >= n.node1)) this.DefaultDoorFormation(), this.nodeT2GN += 1;
                            else {
                                if (!(this.nodeGN < n.node1)) return this.nodeMoveNum = 0, this.nodeGN = 0, this.nodeT2GN = 0, void(this.nodeGenerateType = i.EnumMana.NodeGenerateType.two);
                                a(n.node1, n.node1MovePro, n.obstspeed);
                            }
                        else {
                            if (this.nodeGenerateType == i.EnumMana.NodeGenerateType.two) return this.SpeedUpFormation(), void(this.nodeGenerateType = i.EnumMana.NodeGenerateType.three);
                            if (this.nodeGenerateType != i.EnumMana.NodeGenerateType.three) {
                                if (this.nodeGenerateType == i.EnumMana.NodeGenerateType.four) {
                                    var s = !0;
                                    if (n.node4Type) {
                                        var h = n.node4Type.length;
                                        if (this.nodeGN < h) {
                                            var u = i.EnumMana.ComponentType.blackHole;
                                            2 == n.node4Type[this.nodeGN] ? u = i.EnumMana.ComponentType.blackHole : 3 == n.node4Type[this.nodeGN] ? u = i.EnumMana.ComponentType.icePiton : 4 == n.node4Type[this.nodeGN] && (u = i.EnumMana.ComponentType.rollingStones);
                                            var d = n.node4[this.nodeGN];
                                            this.nodeT2GN < d && (this.SpecialFormation(u, n.obstspeed), this.nodeT2GN += 1), this.nodeT2GN >= d && (this.nodeT2GN = 0, this.nodeGN += 1);
                                        }
                                        s = this.nodeGN >= h;
                                    }
                                    return void(s && (this.nodeMoveNum = 0, this.nodeGN = 0, this.nodeT2GN = 0, this.curParagraph += 1, r.Utils.Debug.log(" this.curParagraph " + this.curParagraph + "     this.obstaclesGeneratePosZ " + this.obstaclesGeneratePosZ + "   this.distance " + this.distance), this.nodeGenerateType = i.EnumMana.NodeGenerateType.one));
                                }
                                return;
                            }
                            if (n.node3T2 > 0 && this.nodeT2GN < n.node3T2 && (l.MathTool.Range(1, n.node3) <= n.node3T2 || this.nodeGN >= n.node3)) this.DefaultDoorFormation(), this.nodeT2GN += 1;
                            else {
                                if (!(this.nodeGN < n.node3)) return this.nodeMoveNum = 0, this.nodeGN = 0, this.nodeT2GN = 0, this.nodeGenerateType = i.EnumMana.NodeGenerateType.four, void(this.obstaclesGeneratePosZ += this.obstaclesUnitOffset - 1);
                                a(n.node3, n.node3MovePro, n.obstspeed);
                            }
                        }
                        if (this.OutToWhile(t)) return;
                    }
                }, e.prototype.DefaultDoorFormation = function() {
                    var e = l.MathTool.Range(1, 4),
                        t = 1,
                        n = Laya.timer.currTimer,
                        a = [],
                        s = function() {
                            if (a.length > 0)
                                for (var e = 0; e < a.length; e++) a[e].memberList = a;
                        };
                    if (1 == e)
                        for (var r = 0 == l.MathTool.Range(0, 1) ? -1 : 1, h = l.MathTool.Range(20, 30) * r, c = h, u = -10 * r;;) {
                            var d = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.defaultDoor);
                            if (d.Reset(0, new Laya.Vector3(0, 0, this.obstaclesGeneratePosZ), c), this.obstaclesList.push(d), a.push(d), 1 == t) c += u, Math.abs(c) > Math.abs(h) && (c -= u, t = 2);
                            else if (2 == t) c -= u, Math.abs(c) > Math.abs(h) && (c += u, t = 3);
                            else if (3 == t && (c += u, Math.abs(c) > Math.abs(h))) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void s();
                            if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(n)) return;
                        } else if (2 == e)
                            for (var r = 0 == l.MathTool.Range(0, 1) ? -1 : 1, h = 7 * l.MathTool.Range(0, 5) * r, p = l.MathTool.Range(10, 15);;) {
                                var d = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.defaultDoor);
                                if (d.Reset(0, new Laya.Vector3(0, 0, this.obstaclesGeneratePosZ), h), this.obstaclesList.push(d), a.push(d), t += 1, t > p) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void s();
                                if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(n)) return;
                            } else if (3 == e)
                                for (var r = 0 == l.MathTool.Range(0, 1) ? -1 : 1, h = l.MathTool.Range(20, 40) * r, c = h, u = 20 * r, p = l.MathTool.Range(3, 5), m = 0;;) {
                                    var d = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.defaultDoor);
                                    if (d.Reset(0, new Laya.Vector3(0, 0, this.obstaclesGeneratePosZ), c), this.obstaclesList.push(d), a.push(d), m += 1, m > p && (m = 0, c -= u, t += 1, t >= 4)) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void s();
                                    if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(n)) return;
                                } else if (4 == e)
                                    for (var r = 0 == l.MathTool.Range(0, 1) ? -1 : 1, h = l.MathTool.Range(30, 40) * r, c = h, u = 5 * r;;) {
                                        var d = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.defaultDoor);
                                        if (d.Reset(0, new Laya.Vector3(0, 0, this.obstaclesGeneratePosZ), c), this.obstaclesList.push(d), a.push(d), c -= u, Math.abs(c) > Math.abs(h)) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void s();
                                        if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(n)) return;
                                    }
                }, e.prototype.SpeedUpFormation = function() {
                    var e = .36,
                        t = l.MathTool.Range(1, 3),
                        n = 1,
                        a = Laya.timer.currTimer,
                        s = [],
                        r = function() {
                            if (s.length > 0)
                                for (var e = 0; e < s.length; e++) s[e].memberList = s;
                        };
                    if (1 == t)
                        for (var h = 0 == l.MathTool.Range(0, 1) ? -1 : 1, c = l.MathTool.Range(0, 15) * h, u = 20 * h, d = u, p = -10 * h;;) {
                            var m = d + c,
                                f = Math.abs(m * Math.PI * 2 / 360),
                                g = Math.sin(f) * e,
                                y = Math.cos(f) * e;
                            0 > m && (g = -g);
                            var w = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.speedUpIcon);
                            if (w.Reset(new Laya.Vector3(g, -y + .1, this.obstaclesGeneratePosZ)), this.obstaclesSpeedUpIconList.push(w), s.push(w), 1 == n) d += p, Math.abs(d) > Math.abs(u) && (d -= p, n = 2);
                            else if (2 == n) d -= p, Math.abs(d) > Math.abs(u) && (d += p, n = 3);
                            else if (3 == n && (d += p, Math.abs(d) > Math.abs(u))) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void r();
                            if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(a)) return;
                        } else if (2 == t) {
                            var h = 0 == l.MathTool.Range(0, 1) ? -1 : 1,
                                u = 7 * l.MathTool.Range(0, 5) * h,
                                f = Math.abs(u * Math.PI * 2 / 360),
                                g = Math.sin(f) * e,
                                y = Math.cos(f) * e,
                                v = 12;
                            0 > u && (g = -g);
                            for (var I = 0; v > I; I++) {
                                var w = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.speedUpIcon);
                                w.Reset(new Laya.Vector3(g, -y + .1, this.obstaclesGeneratePosZ)), this.obstaclesSpeedUpIconList.push(w), s.push(w), I + 1 == v ? (this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, r()) : this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset;
                            }
                        } else if (3 == t)
                        for (var h = 0 == l.MathTool.Range(0, 1) ? -1 : 1, c = l.MathTool.Range(0, 10) * h, u = 27 * h, d = u, p = 6 * h;;) {
                            var m = d + c,
                                f = Math.abs(m * Math.PI * 2 / 360),
                                g = Math.sin(f) * e,
                                y = Math.cos(f) * e;
                            0 > m && (g = -g);
                            var w = o.ComponentPool.Instance.Pop(i.EnumMana.ComponentType.speedUpIcon);
                            if (w.Reset(new Laya.Vector3(g, -y + .1, this.obstaclesGeneratePosZ)), this.obstaclesSpeedUpIconList.push(w), s.push(w), d -= p, Math.abs(d) > Math.abs(u)) return this.obstaclesGeneratePosZ += this.obstaclesUnitOffset, void r();
                            if (this.obstaclesGeneratePosZ += this.obstaclesFormationUnitOffset, this.OutToWhile(a)) return;
                        }
                }, e.prototype.SpecialFormation = function(e, t) {
                    var n = this;
                    if (e == i.EnumMana.ComponentType.icePiton) {
                        var a = l.MathTool.Range(1, 7),
                            s = {
                                1: [.4, .22, -.22, -.4],
                                2: [.4, .2, 0, -.2],
                                3: [-.4, -.2, 0, .2],
                                4: [-.4, 0, .4],
                                5: [-.2, 0, .2]
                            };
                        if (6 > a) {
                            var r = 5 == a ? .2 - .1 * l.MathTool.Range(0, 4) : 0;
                            s[a].forEach(function(t) {
                                var i = o.ComponentPool.Instance.Pop(e);
                                i.Reset(new Laya.Vector3(t + r, 0, n.obstaclesGeneratePosZ)), n.obstaclesIcePitonList.push(i);
                            }), this.obstaclesGeneratePosZ += this.icePitonUnitOffsetDis;
                        } else if (6 == a) {
                            var h = [],
                                c = .4 - .1 * l.MathTool.Range(0, 8),
                                u = .1 * l.MathTool.Range(2, 4);
                            h[0] = c, .4 >= c + u ? h[1] = c + u : c - u >= -.4 && (h[1] = c - u), h.forEach(function(t) {
                                var i = o.ComponentPool.Instance.Pop(e);
                                i.Reset(new Laya.Vector3(t, 0, n.obstaclesGeneratePosZ)), n.obstaclesIcePitonList.push(i);
                            }), this.obstaclesGeneratePosZ += this.icePitonUnitOffsetDis;
                        } else if (7 == a) {
                            var c = .4 - .1 * l.MathTool.Range(0, 8);
                            this.leftIcePitionX && Math.abs(c - this.leftIcePitionX) < .2 && (.4 >= c + .2 ? c += .2 : c - .2 >= -.4 && (c -= .2)), this.leftIcePitionX = c;
                            var d = o.ComponentPool.Instance.Pop(e);
                            d.Reset(new Laya.Vector3(c, 0, this.obstaclesGeneratePosZ)), this.obstaclesIcePitonList.push(d), this.obstaclesGeneratePosZ += this.icePitonUnitOffsetDis;
                        }
                    } else if (e == i.EnumMana.ComponentType.blackHole) {
                        var p = .5,
                            m = 18,
                            a = l.MathTool.Range(1, 5),
                            s = {
                                1: [-m, 3 * -m, m],
                                2: [-m, 3 * m, m],
                                3: [-m, 3 * m],
                                4: [m, 3 * -m]
                            };
                        if (5 > a) s[a].forEach(function(t) {
                            var i = Math.abs(t * Math.PI * 2 / 360),
                                a = Math.sin(i) * p;
                            0 > t && (a = -a);
                            var s = Math.cos(i) * p,
                                r = o.ComponentPool.Instance.Pop(e);
                            r.Reset(new Laya.Vector3(a, -s, n.obstaclesGeneratePosZ), t), n.obstaclesBlackHoleList.push(r);
                        }), this.obstaclesGeneratePosZ += this.obstaclesUnitOffset;
                        else if (5 == a) {
                            var f = 54 - l.MathTool.Range(0, 108);
                            this.leftBlackHoleX && Math.abs(f - this.leftBlackHoleX) < 40 && (54 >= f + 40 ? f += 40 : f - 40 >= -54 && (f -= 40)), this.leftBlackHoleX = f;
                            var g = Math.abs(f * Math.PI * 2 / 360),
                                y = Math.sin(g) * p;
                            0 > f && (y = -y);
                            var w = Math.cos(g) * p,
                                d = o.ComponentPool.Instance.Pop(e);
                            d.Reset(new Laya.Vector3(y, -w, this.obstaclesGeneratePosZ), f), this.obstaclesBlackHoleList.push(d), this.obstaclesGeneratePosZ += this.obstaclesUnitOffset;
                        }
                    } else if (e == i.EnumMana.ComponentType.rollingStones) {
                        var a = l.MathTool.Range(1, 2);
                        if (this.rollingStonesFirstShow && (this.rollingStonesFirstShow = !1, a = 1), 1 == a) {
                            var v = 0 == l.MathTool.Range(0, 1) ? -1 : 1,
                                c = l.MathTool.Range(15, 46) * v,
                                I = Math.abs(c * Math.PI * 2 / 360),
                                y = .43 * Math.sin(I),
                                w = .43 * -Math.cos(I);
                            0 > c && (y = -y), this.obstaclesGeneratePosZ += this.rollingStonesUnitOffsetDis;
                            var d = o.ComponentPool.Instance.Pop(e);
                            d.Reset(.98 * t, new Laya.Vector3(y, w, this.obstaclesGeneratePosZ), c), this.obstaclesRollingStonesList.push(d), this.obstaclesGeneratePosZ += this.obstaclesUnitOffset;
                        } else if (2 == a) {
                            var s = {
                                0: [46, -46],
                                1: [40, -40],
                                2: [30, -30],
                                3: [15, -15]
                            };
                            this.obstaclesGeneratePosZ += this.rollingStonesUnitOffsetDis, s[0].forEach(function(i) {
                                var a = Math.abs(i * Math.PI * 2 / 360),
                                    s = .43 * Math.sin(a),
                                    r = .43 * -Math.cos(a);
                                0 > i && (s = -s);
                                var l = o.ComponentPool.Instance.Pop(e);
                                l.Reset(.5 * t, new Laya.Vector3(s, r, n.obstaclesGeneratePosZ), i), n.obstaclesRollingStonesList.push(l);
                            }), this.obstaclesGeneratePosZ += this.obstaclesUnitOffset;
                        }
                    }
                }, e.prototype.OutToWhile = function(e) {
                    return Laya.timer.currTimer - 1e3 > e ? (r.Utils.Debug.log("  OutToWhile(whileStartTime:number):boolean{} "), !0) : !1;
                }, e.prototype.AutoAccelerationMainCameraChange = function() {
                    var t = a["default"].Instance.mainCamera.transform.position;
                    isNaN(e.Instance.autoAccelerationStartTime) ? (t.y += .01, t.y >= .3 && (t.y = .3, Laya.timer.clear(e.Instance, e.Instance.AutoAccelerationMainCameraChange))) : (t.y -= .01, t.y <= 0 && (t.y = 0, Laya.timer.clear(e.Instance, e.Instance.AutoAccelerationMainCameraChange))), a["default"].Instance.mainCamera.transform.position = t;
                }, e.prototype.MainCameraChangeLoop = function() {
                    Laya.timer.clear(this, this.AutoAccelerationMainCameraChange), Laya.timer.frameLoop(1, this, this.AutoAccelerationMainCameraChange);
                }, e.prototype.OpenAutoAcceleration = function(e) {
                    this.speed = 2 * this.speed, this.autoAccelerationStartTime = 0, this.numberOfAutomaticCrossings = e;
                    var t = a["default"].Instance.mainCamera.transform.position;
                    t.z += .4, a["default"].Instance.mainCamera.transform.position = t, this.MainCameraChangeLoop(), a["default"].Instance.wind1.active = !1, a["default"].Instance.wind2.active = !0, g.SoundManager.Instance.PlaySound("jiasu");
                }, e.prototype.AutoAcceleration = function() {
                    if (!isNaN(this.autoAccelerationStartTime))
                        if (this.numberOfAutomaticCrossings <= this.autoAccelerationStartTime) {
                            this.speed = this.speed / 2, this.autoAccelerationStartTime = Number.NaN;
                            var e = a["default"].Instance.mainCamera.transform.position;
                            e.z -= .4, a["default"].Instance.mainCamera.transform.position = e, this.MainCameraChangeLoop(), a["default"].Instance.wind1.active = !0, a["default"].Instance.wind2.active = !1;
                        } else this.AutomaticCrossingDefaultDoorInTheMiddle(10);
                }, e.prototype.SpeedUpIconEffectShow = function(e) {
                    Laya.timer.once(100, this, function() {
                        g.SoundManager.Instance.PlaySound("lightning");
                    });
                    var t = this.speedUpIconEffectList[this.speedUpIconIndex];
                    t.Hidden(), t.Show(), t.SetPosition(e.GetPosition()), this.speedUpIconIndex += 1, this.speedUpIconIndex >= this.speedUpIconEffectList.length && (this.speedUpIconIndex = 0);
                }, e.prototype.IcePitonEffectShow = function(e) {
                    var t = this.icePitonEffectList[this.icePitonIndex];
                    t.Hidden(), t.Show();
                    var n = e.GetPosition(),
                        i = n.y + .5;
                    t.SetPosition(new Laya.Vector3(n.x, i, n.z)), this.icePitonIndex += 1, this.icePitonIndex >= this.icePitonEffectList.length && (this.icePitonIndex = 0);
                }, e;
            }();
        n.Level = y;
    }, {
        "../Base/Actor": 1,
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Config/ConfigurationData": 12,
        "../Control/GameManager": 13,
        "../Control/NetManager": 15,
        "../Control/SceneManager": 17,
        "../Control/SoundManager": 18,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Utils/Debug": 29,
        "../Utils/MathTool": 30,
        "./Player": 25,
        "./PoolComponent": 26
    }],
    25: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Utils/Debug"),
            a = function() {
                function e() {
                    this.isNewPlayer = !1;
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e(), e.instance.Init()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.isLogin = !1, this.maxScore = 0;
                }, e.prototype.UpdateUserInfo = function(e) {
                    return null == e ? void i.Utils.Debug.log("user data is null !") : (this.isLogin = !0, this.isNewPlayer = e.isNewUser ? !0 : !1, this.playerId = e.userId, this.nickName = e.nikename, "youke" == e.headImage ? this.headImage = "" : this.headImage = e.headImage && e.headImage.lastIndexOf("/132") > 0 ? e.headImage.substring(0, e.headImage.length - 3) + "46" : e.headImage, this.loginTime = e.time, this.gameTimes = e.gameTimes, this.weekScore = e.weekScore, void(this.maxScore = e.maxScore));
                }, e;
            }();
        n.Player = a;
    }, {
        "../Utils/Debug": 29
    }],
    26: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Common/Enum"),
            a = e("../Control/SceneManager"),
            o = e("../Base/ObstaclesScript"),
            s = e("../Base/PathWayScript"),
            r = e("../Base/SpeedUpScript"),
            l = e("../Base/ObstaclesIcePitonScript"),
            h = e("../Base/ObstaclesBlackHoleScript"),
            c = e("../Base/ObstaclesRollingStonesScript"),
            u = e("../Base/EffectScript"),
            d = function() {
                function e() {
                    this.poolDictionary = {};
                }
                return e.prototype.Pop = function(e) {
                    if (null == this.poolDictionary[e] && (this.poolDictionary[e] = []), this.poolDictionary[e].length > 0) {
                        var t = this.poolDictionary[e].pop();
                        return t.Show(), t;
                    }
                    var t = this.CloneObj(e);
                    return t.Show(), t;
                }, e.prototype.Push = function(e) {
                    null != e && (null == this.poolDictionary[e.type] && (this.poolDictionary[e.type] = []), e.Hidden(), this.poolDictionary[e.type].push(e));
                }, e.prototype.CloneObj = function(e) {
                    var t = Laya.Sprite3D.instantiate(a["default"].Instance.componentList[e], a["default"].Instance.componentParent, !0),
                        n = null;
                    return e == i.EnumMana.ComponentType.pathway ? n = t.addComponent(s.PathWayScript) : e == i.EnumMana.ComponentType.defaultDoor ? n = t.addComponent(o.ObstaclesScript) : e == i.EnumMana.ComponentType.speedUpIcon ? n = t.addComponent(r.SpeedUpScript) : e == i.EnumMana.ComponentType.icePiton ? n = t.addComponent(l.ObstaclesIcePitonScript) : e == i.EnumMana.ComponentType.blackHole ? n = t.addComponent(h.ObstaclesBlackHoleScript) : e == i.EnumMana.ComponentType.rollingStones ? n = t.addComponent(c.ObstaclesRollingStonesScript) : (e == i.EnumMana.ComponentType.speedUpIconEffect || e == i.EnumMana.ComponentType.icePitonEffect || e == i.EnumMana.ComponentType.defaultDoorEffect) && (n = t.addComponent(u.EffectScript)), n.Init(e), n;
                }, e.prototype.RemovePoolToType = function(e) {
                    if (this.poolDictionary[e]) {
                        for (var t = 0; t < this.poolDictionary[e].length; t++) this.poolDictionary[e][t].Destroy();
                        this.poolDictionary[e] = null;
                    }
                }, e.prototype.SetDefaultDoorMaterial = function(e) {
                    if (this.poolDictionary[i.EnumMana.ComponentType.defaultDoor] && this.poolDictionary[i.EnumMana.ComponentType.defaultDoor].length > 0)
                        for (var t = 0; t < this.poolDictionary[i.EnumMana.ComponentType.defaultDoor].length; t++) this.poolDictionary[i.EnumMana.ComponentType.defaultDoor][t].GetObj().getChildByName("door").getChildByName("01").meshRenderer.material = e, this.poolDictionary[i.EnumMana.ComponentType.defaultDoor][t].GetObj().getChildByName("02").meshRenderer.material = e;
                }, e.prototype.SetBlackHoleMaterial = function(e, t) {
                    if (this.poolDictionary[i.EnumMana.ComponentType.blackHole] && this.poolDictionary[i.EnumMana.ComponentType.blackHole].length > 0)
                        for (var n = 0; n < this.poolDictionary[i.EnumMana.ComponentType.blackHole].length; n++) this.poolDictionary[i.EnumMana.ComponentType.blackHole][n].GetObj().getChildByName("eff_xuanwo").particleRenderer.material = e, this.poolDictionary[i.EnumMana.ComponentType.blackHole][n].GetObj().getChildByName("eff_xuanwo").getChildByName("eff_xuanwolz").particleRenderer.material = t;
                }, e.Instance = new e(), e;
            }();
        n.ComponentPool = d;
    }, {
        "../Base/EffectScript": 3,
        "../Base/ObstaclesBlackHoleScript": 4,
        "../Base/ObstaclesIcePitonScript": 5,
        "../Base/ObstaclesRollingStonesScript": 6,
        "../Base/ObstaclesScript": 7,
        "../Base/PathWayScript": 8,
        "../Base/SpeedUpScript": 9,
        "../Common/Enum": 10,
        "../Control/SceneManager": 17
    }],
    27: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../Utils/Debug"),
            a = e("../Control/GameManager"),
            o = e("../Control/ViewManager"),
            s = e("../Common/Enum"),
            r = function() {
                function e() {
                    var t = this;
                    this.stime = 0, this.caller = null, this.succFun = null, this.failFun = null, this.status = 0, window.wx.onShow(function() {
                        i.Utils.Debug.log(" window['wx'].onShow ... ", e.Instance.status), 2 != e.Instance.status && a["default"].Instance.gameBackTolist && Laya.timer.frameOnce(1, t, function() {
                            var e = (o.ViewManager.Instance.GetView(s.EnumMana.ViewName.ConvergeAdNew), !1);
                            1 == a["default"].Instance.gameBackTolist[0] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.skinTralView) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[1] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.levelView) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[3] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.gameOverView) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[4] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.mainView) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[7] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.goldenEggView) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[8] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.friendInvite) ? e = !0 : 1 == a["default"].Instance.gameBackTolist[9] && o.ViewManager.Instance.GetView(s.EnumMana.ViewName.levelView) && (e = !0), e && o.ViewManager.Instance.GameOverJumpGuessYouLike();
                        }), a["default"].Instance.gameOverJumpToOtherGame = !1, a["default"].Instance.mainJumpToOtherGame = !1, a["default"].Instance.levelJumpToOtherGame = !1, 2 == e.Instance.status && (Laya.Browser.now() - e.Instance.stime > 2e3 ? (e.Instance.status = 3, i.Utils.Debug.log(" this.callSuc ... ", e.Instance.status), Laya.timer.once(500, e.Instance, e.Instance.callSuc)) : (e.Instance.status = 0, i.Utils.Debug.log(" this.callFail ... ", e.Instance.status), e.Instance.callFail()));
                    }), window.wx.onHide(function() {
                        i.Utils.Debug.log(" window['wx'].onHide ... ", e.Instance.status), 1 == e.Instance.status && (e.Instance.stime = Laya.Browser.now(), e.Instance.status = 2, i.Utils.Debug.log(" SimShare this.onHide ... " + e.Instance.status));
                    });
                }
                return Object.defineProperty(e, "Instance", {
                    get: function() {
                        return null == e.instance && (e.instance = new e()), e.instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.init = function(e, t, n) {
                    this.caller = e, this.succFun = t, this.failFun = n, this.status = 1, i.Utils.Debug.log(" SimShare init ... " + this.status);
                }, e.prototype.callSuc = function() {
                    3 == e.Instance.status && (e.Instance.status = 0, e.Instance.succFun && e.Instance.succFun.call(e.Instance.caller, {}));
                }, e.prototype.callFail = function() {
                    e.Instance.failFun && e.Instance.failFun.call(e.Instance.caller, {});
                }, e.prototype.cancel = function() {
                    e.Instance.status = 0, Laya.timer.clear(e.Instance, e.Instance.callSuc);
                }, e.prototype.GetStatus = function() {
                    return this.status;
                }, e;
            }();
        n.SimShare = r;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/ViewManager": 20,
        "../Utils/Debug": 29
    }],
    28: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("./Player");
        ! function(e) {
            var t = function() {
                function e() {}
                return e.prototype.Share = function(e, t, i, a, o, s) {
                    this.caller = t, this.callbackComplete = i, this.callbackError = a, window.wx.shareAppMessage(new n(e, o, s));
                }, e.prototype.SuccessCallBack = function(e) {
                    null != this.callbackComplete && this.callbackComplete.call(this.caller, e);
                }, e.prototype.FailCallBack = function(e) {
                    null != this.callbackError && this.callbackError.call(this.caller, e);
                }, e.Instance = new e(), e;
            }();
            e.ShareMgr = t;
            var n = function() {
                function e(e, t, n) {
                    this.title = e, this.imageUrl = t;
                    var i = "";
                    void 0 !== a.Player.Instance.playerId && (i = a.Player.Instance.playerId.toString()), void 0 == n || 0 == n.length ? this.query = "uid=" + i : this.query = "uid=" + i + "&" + n;
                }
                return e;
            }();
            e.ShareAppMessage = n;
            var i = function() {
                function e(e) {
                    this.KVDataList = [], this.KVDataList.push({
                        key: "level",
                        value: String(e)
                    });
                }
                return e.prototype.success = function(e) {}, e.prototype.fail = function(e) {}, e.prototype.complete = function(e) {}, e;
            }();
            e.SetCloudLevel = i;
        }(i = n.WXapi || (n.WXapi = {}));
    }, {
        "./Player": 25
    }],
    29: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../Common/GameConst");
        ! function(e) {
            var t = function() {
                function e() {}
                return e.log = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    a["default"].debugLog && (null != t && t.length > 0 ? console.log(e, t) : console.log(e));
                }, e.error = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    null != t && t.length > 0 ? console.error(e, t) : console.error(e);
                }, e.info = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    console.log("%c%s", "color: red; background: yellow; font-size: 10px;", e);
                }, e;
            }();
            e.Debug = t;
        }(i = n.Utils || (n.Utils = {}));
    }, {
        "../Common/GameConst": 11
    }],
    30: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.Range = function(e, t) {
                if (e > t) return -1;
                if (e == t) return e;
                var n = Math.round(Math.random() * (t - e) + e);
                return n;
            }, e.randomList = function(t) {
                for (var n = [], i = t.length - 1; i >= 0; i--) {
                    var a = (t[i], e.random(0, t.length - 1)),
                        o = t[a];
                    t.splice(a, 1), n.push(o);
                }
                return n;
            }, e.random = function(e, t) {
                var n = t - e,
                    i = Math.random(),
                    a = e + Math.round(i * n);
                return a;
            }, e.ClampThrough = function(e, t) {
                var n = (e.z - .081, e.z + .081),
                    i = t.z - .04,
                    a = (t.z + .04, n >= i);
                if (0 == a) return 0;
                var o = e.x - .081,
                    s = e.x + .081,
                    r = t.x - .17,
                    l = t.x + .17,
                    h = o > r && l > s;
                return h && a ? 1 : 2;
            }, e.Clamp = function(e, t) {
                var n = e.z - .081,
                    i = e.z + .081,
                    a = t.z - .04,
                    o = t.z + .04,
                    s = n >= a && o > n || i >= a && o > i || n >= a && o >= i || a >= n && i >= o;
                if (0 == s) return 0;
                var r = e.x - .081,
                    l = e.x + .081,
                    h = t.x - .17,
                    c = t.x + .17,
                    u = r > h && c > l;
                return u && s ? 1 : 2;
            }, e.ClampIcePiton = function(e, t) {
                var n = e.x - .08,
                    i = e.x + .08,
                    a = t.x - .06,
                    o = t.x + .06,
                    s = n > a && o > n || i > a && o > i || n >= a && o >= i || a >= n && i >= o;
                if (!s) return !1;
                var r = e.z - .08,
                    l = e.z + .08,
                    h = t.z - .06,
                    c = t.z + .06,
                    u = r >= h && c > r || l >= h && c > l || r >= h && c >= l || h >= r && l >= c;
                return s && u;
            }, e.ClampBlackHole = function(e, t, n, i) {
                var a = Math.abs(i.z * Math.PI * 2 / 360),
                    o = .32 * Math.cos(a) / 2,
                    s = .06 * Math.cos(Math.abs(t.x * Math.PI * 2 / 360)) / 2,
                    r = Math.sqrt((e.x - n.x) * (e.x - n.x) + (e.z - n.z) * (e.z - n.z));
                return o + s > r;
            }, e.ClampRollingStones = function(e, t) {
                var n = e.x - .081,
                    i = e.x + .081,
                    a = t.x - .125,
                    o = t.x + .125,
                    s = n > a && o > n || i > a && o > i || n >= a && o >= i || a >= n && i >= o;
                if (!s) return !1;
                var r = e.z - .081,
                    l = e.z + .081,
                    h = t.z - .125,
                    c = t.z + .125,
                    u = r >= h && c > r || l >= h && c > l || r >= h && c >= l || h >= r && l >= c;
                return s && u;
            }, e.ClampSpeedUp = function(e, t) {
                var n = .09,
                    i = .08,
                    a = Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.z - t.z) * (e.z - t.z));
                return n + i > a;
            }, e.randomSipArray = function(e, t) {
                if (e.length < t) return console.log("数组长度不够"), null;
                if (e.length == t) {
                    for (var n = [], i = 0; i < e.length; i++) n.push(e[i]);
                    return n;
                }
                for (var a = [], o = 0; o < e.length; o++) a.push(o);
                for (var n = [], s = 0; t > s; s++) {
                    var r = this.random(0, a.length - 1),
                        l = a[r];
                    a.splice(r, 1), n.push(e[l]);
                }
                return n;
            }, e;
        }();
        n.MathTool = i;
    }, {}],
    31: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Common/Enum"),
            o = e("../Control/ViewManager"),
            s = e("../Control/GameManager"),
            r = e("../Control/VideoManager"),
            l = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e);
                    var t = this.getChildByName("adapter");
                    this.button = t.getChildByName("button"), this.finger = this.getChildByName("finger"), this.BindEvent();
                }, t.prototype.Show = function() {
                    var e = this;
                    this.visible = !0, r.VideoManager.Instance.ShowBannerAd_M(), s["default"].Instance.AlignToMenu(this.finger, this.finger.x, 10), this.fingerSpeed = -1, Laya.timer.frameLoop(1, this, function() {
                        e.finger.right += e.fingerSpeed, e.finger.right <= 200 ? (e.finger.right = 200, e.fingerSpeed = 1) : e.finger.right >= 240 && (e.finger.right = 240, e.fingerSpeed = -1);
                    });
                }, t.prototype.Hidden = function() {}, t.prototype.BindEvent = function() {
                    this.button.on(Laya.Event.CLICK, this, this.CloseEvent);
                }, t.prototype.CloseEvent = function() {
                    this.IsShowView && (this.Hidden(), o.ViewManager.Instance.OpenView(a.EnumMana.ViewName.mainView));
                }, t;
            }(i.BaseView);
        n.AddToMinigamesView = l;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "./BaseView": 32
    }],
    32: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.respondTime = 500, t.pressTime = 0, t;
            }
            return __extends(t, e), t.prototype.CreateView = function(e) {
                this.createView(Laya.Loader.getRes(e)), Laya.stage.addChild(this);
            }, t.prototype.IsShowView = function() {
                return this.visible;
            }, t.prototype.UpDown = function() {
                var e = Laya.timer.currTimer - this.respondTime < this.pressTime;
                return e || (this.pressTime = Laya.timer.currTimer), e;
            }, t;
        }(Laya.View);
        n.BaseView = i;
    }, {}],
    33: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("./SceneTool/ConvergeAdListLoop"),
            o = e("../Control/GameManager"),
            s = e("../Control/ViewManager"),
            r = e("../Common/Enum"),
            l = e("../Control/VideoManager"),
            h = e("./SceneTool/AdListLoopNew"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.appid = "", t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {}, t.prototype.Init = function(e) {
                    this.CreateView(e), l.VideoManager.Instance.HideBannerAd(), this.homeBtn = this.getChildByName("homeBtn"), this.okBtn = this.getChildByName("okBtn"), o["default"].Instance.AlignToMenu(this.homeBtn), this.anchorS = this.getChildByName("anchorS"), this.TopADPlane = this.anchorS.getChildByName("TopADPlane"), this.ADPlane = this.anchorS.getChildByName("ADPlane"), this.BindEvent();
                }, t.prototype.Show = function() {
                    var e = this;
                    this.visible = !0, this.zOrder = 2, this.bgMask = this.ADPlane.mask, l.VideoManager.Instance.HideBannerAd(), this.convergeAdListLoop = this.ADPlane.getComponent(a["default"]), this.AdListLoopNew = this.TopADPlane.getComponent(h["default"]), 1 == o["default"].Instance.luckboxSwitch[5] && o["default"].Instance.isWudian && s.ViewManager.Instance.OpenView(r.EnumMana.ViewName.goldenEggView), 1 == o["default"].Instance.gamelistSwitch[5], 1 == o["default"].Instance.inviteSwitch[5] && s.ViewManager.Instance.OpenView(r.EnumMana.ViewName.friendInvite), 1 == o["default"].Instance.gameboxSwitch[5], 1 == o["default"].Instance.insertScreenSwitch[5] && l.VideoManager.Instance.showInterstitialAD(), this.homeBtn.visible = !1, Laya.timer.once(1e3, this, function() {
                        e && e.homeBtn && (e.homeBtn.visible = !0);
                    });
                    var t = Laya.stage.height / 2 - Math.abs(this.ADPlane.y),
                        n = Laya.stage.height - t;
                    this.convergeAdListLoop.init({
                        viewHeight: n,
                        y: t
                    }), this.convergeAdListLoop.start(o["default"].Instance.getAdData(120001), 120001, "聚合界面下部列表广告"), this.AdListLoopNew.init({
                        _spaceX: 8,
                        _isLabel: !0
                    }), this.AdListLoopNew.start(o["default"].Instance.getAdData(110001), 110001, "聚合界面上部跑马灯广告");
                }, t.prototype.BindEvent = function() {
                    this.okBtn.on(Laya.Event.CLICK, this, this.okClick), this.homeBtn.on(Laya.Event.CLICK, this, this.onClickHome);
                }, t.prototype.onClickHome = function() {
                    this.Hidden();
                }, t.prototype.okClick = function() {
                    this.Hidden();
                }, t.prototype.Hidden = function() {
                    this.visible = !1, Laya.timer.clearAll(this);
                }, t;
            }(i.BaseView);
        n["default"] = c;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "./BaseView": 32,
        "./SceneTool/AdListLoopNew": 45,
        "./SceneTool/ConvergeAdListLoop": 47
    }],
    34: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("./SceneTool/AppBannerAd"),
            o = e("./SceneTool/AdListLoop"),
            s = e("../Control/GameManager"),
            r = e("../Control/VideoManager"),
            l = e("../Utils/MathTool"),
            h = e("../Control/ViewManager"),
            c = e("../Common/Enum"),
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this.appBanner = this.getChildByName("appBanner").getComponent(a["default"]), this.centerImg = this.getChildByName("centerImg"), this.openSub = this.centerImg.getChildByName("openSub"), this.refuse = this.centerImg.getChildByName("refuse"), this.accept = this.centerImg.getChildByName("accept"), this.adPlane = this.getChildByName("ADPanel").getChildByName("ADPanelBg").getComponent(o["default"]);
                }, t.prototype.Init = function(e) {
                    this.CreateView(e), this.BindEvent();
                }, t.prototype.Show = function() {
                    if (this.visible = !0, this.zOrder = 2, r.VideoManager.Instance.HideBannerAd(), console.log("=-=-=-=", s["default"].Instance.inviteSwitch[5]), 1 == s["default"].Instance.luckboxSwitch[8] && s["default"].Instance.isWudian && h.ViewManager.Instance.OpenView(c.EnumMana.ViewName.goldenEggView), 1 == s["default"].Instance.gamelistSwitch[8] && h.ViewManager.Instance.OpenView(c.EnumMana.ViewName.ConvergeAdNew), 1 == s["default"].Instance.inviteSwitch[8], 1 == s["default"].Instance.gameboxSwitch[8], 1 == s["default"].Instance.insertScreenSwitch[8] && r.VideoManager.Instance.showInterstitialAD(), this.ShowBanner(), Laya.Browser.onMiniGame || this.close(), Laya.Browser.onMiniGame) {
                        if (this.clearWxOpen(), this.checkWxOpendata(), this.wxOpenData.width = 540, this.wxOpenData.height = 114, this.adInfo = s["default"].Instance.getAdData(130001), this.rand = l.MathTool.randomSipArray(this.adInfo, 1), 0 == this.rand.length) return;
                        var e = l.MathTool.randomSipArray(s["default"].Instance.wordRankLst, 1);
                        Laya.Browser.window.wx.postMessage({
                            type: "openFriendInvite",
                            data: {
                                gameName: this.rand[0].name,
                                avatarUrl: e[0].headImage,
                                nickname: e[0].nickname
                            }
                        });
                    }
                }, t.prototype.BindEvent = function() {
                    this.refuse.on(Laya.Event.CLICK, this, this.refuseFun), this.accept.on(Laya.Event.CLICK, this, this.acceptFun);
                }, t.prototype.refuseFun = function() {
                    this.Hidden();
                }, t.prototype.acceptFun = function() {
                    var e = {
                        my_uuid: 130001,
                        to_appid: this.rand[0].appid,
                        appid: this.rand[0].appid,
                        toLinks: this.rand[0].toLinks
                    };
                    if (e.callback = function() {}, this.Hidden(), Laya.Browser.onMiniGame)
                        if (this.rand[0]) console.log("开始跳转"), s["default"].Instance.NavigateToMiniProgram(this.rand[0].appid, "130001", "仿邀请");
                        else if (Laya.Browser.onMiniGame) {
                        var t = {};
                        t.title = "跳转失败", window.wx.showToast(t);
                    }
                }, t.prototype.checkWxOpendata = function() {
                    null == this.wxOpenData && (this.wxOpenData = new Laya.WXOpenDataViewer(), this.openSub.addChild(this.wxOpenData));
                }, t.prototype.clearWxOpen = function() {
                    null != this.wxOpenData && (this.openSub.removeChild(this.wxOpenData), this.wxOpenData.destroy(), this.wxOpenData = null);
                }, t.prototype.ShowBanner = function() {
                    1 == s["default"].Instance.bannerSwitch[8] ? r.VideoManager.Instance.ShowBannerAd_M() ? this.hideADPanel() : this.showADPanel() : 2 == s["default"].Instance.bannerSwitch[8] ? this.appBanner.start(40001) : 3 == s["default"].Instance.bannerSwitch[8] && this.showADPanel();
                }, t.prototype.showADPanel = function() {
                    var e = this;
                    this.getChildByName("ADPanel").visible = s["default"].Instance.getAdData(30001).length > 0, Laya.timer.frameOnce(2, this, function() {
                        e.adPlane.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), e.adPlane.start(s["default"].Instance.getAdData(30001), 30001, "首页");
                    });
                }, t.prototype.hideADPanel = function() {
                    this.getChildByName("ADPanel").visible = !1;
                }, t.prototype.Hidden = function() {
                    Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeFriendInvite"
                    }), this.visible = !1;
                }, t;
            }(i.BaseView);
        n["default"] = u;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Utils/MathTool": 30,
        "./BaseView": 32,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46
    }],
    35: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Control/VideoManager"),
            o = e("../Control/GameManager"),
            s = e("./SceneTool/MainAdListLoop"),
            r = e("../Common/Enum"),
            l = e("../Control/ViewManager"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    e.prototype.onAwake.call(this), this.centerImg = this.getChildByName("centerImg"), this.centerBg = this.centerImg.getChildByName("centerBg"), this.closeImg = this.centerBg.getChildByName("closeImg"), this.LeftAD = this.centerImg.getChildByName("LeftAD").getComponent(s["default"]);
                }, t.prototype.Init = function(e) {
                    this.CreateView(e);
                    var t = 50001,
                        n = o["default"].Instance.getAdData(t);
                    this.LeftAD.start(n, t), this.BindEvent();
                }, t.prototype.Show = function() {
                    this.visible = !0, this.zOrder = 2, a.VideoManager.Instance.HideBannerAd(), 1 == o["default"].Instance.luckboxSwitch[8] && o["default"].Instance.isWudian && l.ViewManager.Instance.OpenView(r.EnumMana.ViewName.goldenEggView), 1 == o["default"].Instance.gamelistSwitch[8] && l.ViewManager.Instance.OpenView(r.EnumMana.ViewName.ConvergeAdNew), 1 == o["default"].Instance.inviteSwitch[8] && l.ViewManager.Instance.OpenView(r.EnumMana.ViewName.friendInvite), 1 == o["default"].Instance.insertScreenSwitch[8] && a.VideoManager.Instance.showInterstitialAD();
                }, t.prototype.BindEvent = function() {
                    this.closeImg.on(Laya.Event.CLICK, this, this.closeBtnFun);
                }, t.prototype.Hidden = function() {
                    this.visible = !1, Laya.timer.clearAll(this);
                }, t.prototype.closeBtnFun = function() {
                    this.Hidden();
                }, t;
            }(i.BaseView);
        n["default"] = h;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "./BaseView": 32,
        "./SceneTool/MainAdListLoop": 48
    }],
    36: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Common/Enum"),
            o = e("../Model/Level"),
            s = e("../Control/GameManager"),
            q = e("../Model/Player"),
            r = e("../Utils/Debug"),
            l = e("../Control/VideoManager"),
            h = e("../Control/ViewManager"),
            c = e("../Utils/MathTool"),
            u = e("./OverAdListLoop"),
            d = e("./SceneTool/AdListLoop"),
            p = e("./SceneTool/AppBannerAd"),
            m = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.moveTween = new Laya.Tween(), t.adAppID = null, t;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e)
                    var t = this.getChildByName("adapter");
                    var l = this.getChildByName("ADList");
                    this.topImg = t.getChildByName("topImg"), this.bottomImg = t.getChildByName("bottomImg"), this.mainButton = this.bottomImg.getChildByName("mainButton"), this.nextButton = this.bottomImg.getChildByName("nextButton"), this.adPlayBtn = this.bottomImg.getChildByName("adPlayBtn");
                    this.bestScoreTxt = this.bottomImg.getChildByName("bestScoreTxt");
                    this.challengeButton = this.bottomImg.getChildByName("challengeButton"), this.finger = this.getChildByName("finger");
                    var n = t.getChildByName("ADPlane");
                    this.BindEvent();
                }, t.prototype.Show = function(e) {
                    var t = this;
                    if (Laya.LocalStorage.getItem("replay") == 2)
                        this.adPlayBtn.visible = false;
                    else {
                        this.adPlayBtn.visible = true;
                    }
                    this.bestScoreTxt.text = Laya.LocalStorage.getItem("currentScore");
                    this.visible = !0, 1 == s["default"].Instance.luckboxSwitch[3] && s["default"].Instance.isWudian && h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.goldenEggView), 1 == s["default"].Instance.gamelistSwitch[3] && h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.ConvergeAdNew), 1 == s["default"].Instance.inviteSwitch[3] && h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.friendInvite), 1 == s["default"].Instance.gameboxSwitch[3], 1 == s["default"].Instance.insertScreenSwitch[3] && l.VideoManager.Instance.showInterstitialAD(), this.score = e.l, l.VideoManager.Instance.showInterstitialAD(), this.fingerSpeed = -1, Laya.timer.frameLoop(1, this, function() {}), this.Wudian(), this.ShowBanner();
                }, t.prototype.Wudian = function() {
                    var e = this,
                        t = 5,
                        n = 0;
                    if (s["default"].Instance.isWudian && 1 == s["default"].Instance.wudianLevel[3]) {
                        var i = 160 + s["default"].Instance.offsetSubdomain.y / 5;
                        this.mainButton.y = i, this.nextButton.y = i, this.challengeButton.y = i, Laya.timer.once(s["default"].Instance.btuMove[3], this, function() {
                            e.moveTween.to(e.mainButton, {
                                y: n
                            }, 300, null, Laya.Handler.create(e, function() {}), 200), e.moveTween.to(e.nextButton, {
                                y: t
                            }, 300, null, Laya.Handler.create(e, function() {}), 200), e.moveTween.to(e.challengeButton, {
                                y: n
                            }, 300, null, Laya.Handler.create(e, function() {}), 200), e.mainButton.y = n, e.nextButton.y = t, e.challengeButton.y = n;
                        });
                    } else this.mainButton.y = n, this.nextButton.y = t
                }, t.prototype.ShowBanner = function() {
                    var e = this;
                    1 == s["default"].Instance.bannerSwitch[3] ? l.VideoManager.Instance.ShowBannerAd_N(1 == s["default"].Instance.wudianLevel[3] ? s["default"].Instance.lateDelay[3] : 0, 3) ? this.AdBanel(!0) : s["default"].Instance.isWudian && 1 == s["default"].Instance.wudianLevel[3] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(s["default"].Instance.lateDelay[3], this, this.AdBanel)) : this.AdBanel(!1) : 2 == s["default"].Instance.bannerSwitch[3] ? s["default"].Instance.isWudian && 1 == s["default"].Instance.wudianLevel[3] ? Laya.timer.once(s["default"].Instance.lateDelay[3], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001) : 3 == s["default"].Instance.bannerSwitch[3] && (s["default"].Instance.isWudian && 1 == s["default"].Instance.wudianLevel[3] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(s["default"].Instance.lateDelay[3], this, this.AdBanel)) : this.AdBanel(!1));
                }, t.prototype.AdBanel = function(e) {
                    if (s["default"].Instance.adInfo && !e) {
                        for (var t = [], n = 30001, i = 0; i < s["default"].Instance.adInfo.length; i++) s["default"].Instance.adInfo[i].position == n && t.push(s["default"].Instance.adInfo[i]);
                        this.ADPanelBG.visible = t.length > 0, this.ADPanel.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), this.ADPanel.start(s["default"].Instance.getAdData(n), n, "结算界面");
                    }
                }, t.prototype.Hidden = function() {
                    this.visible = !1, l.VideoManager.Instance.HideBannerAd(), 1 == s["default"].Instance.bannerSwitch[3] && l.VideoManager.Instance.ShowBannerAd_N(s["default"].Instance.lateDelay[3], 3, !0), Laya.timer.clearAll(this);
                }, t.prototype.BindEvent = function() {
                    this.mainButton.on(Laya.Event.CLICK, this, this.CloseEvent), this.nextButton.on(Laya.Event.CLICK, this, this.CloseEvent)
                    this.adPlayBtn.on(Laya.Event.CLICK, this, this.ADReplayEvent);
                }, t.prototype.RankToEvent = function() {
                    this.IsShowView && (this.Hidden(), h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.rankView, {
                        state: 2,
                        score: this.score
                    }));
                }, t.prototype.CloseEvent = function() {
                    platform.getInstance().showInterstitial(() => {
                        this.IsShowView() && (this.Hidden(), o.Level.Instance.SetupGame(a.EnumMana.ViewName.mainView));
                    })
                }, t.prototype.ADReplayEvent = function() {
                    platform.getInstance().showReward(() => {
                        Laya.LocalStorage.setItem("replay", 2), console.log("Replay!!!!");
                        this.IsShowView() && (this.Hidden(), o.Level.Instance.AfterADGetQiu(), o.Level.Instance.GameStart())
                    });
                }, t.prototype.NextEvent = function() {
                    this.Hidden(), o.Level.Instance.ResetGameInfo()
                }, t.prototype.ChallengeEvent = function() {
                    this.IsShowView() && s["default"].Instance.Share(this, function() {
                        s["default"].Instance.StatisticsShare(0);
                    }, this.ShareFail);
                }, t.prototype.ShareFail = function(e, t) {
                    r.Utils.Debug.log("test fail:", t);
                }, t.prototype.updateAd = function() {
                    this._overListLoop.start(this.adData, 80001);
                }, t.prototype.AdShakeAnim = function() {
                    if (s["default"].Instance.adInfo) {
                        this.adData = [];
                        for (var e = [], t = 0; t < s["default"].Instance.adInfo.length; t++) "80001" == s["default"].Instance.adInfo[t].position && e.push(s["default"].Instance.adInfo[t]);
                        this.adData = c.MathTool.randomList(e), this.updateAd();
                    }
                }, t.prototype.Destroy = function() {
                    this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.GameOverView = m;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Model/Level": 24,
        "../Model/Player": 25,
        "../Utils/Debug": 29,
        "../Utils/MathTool": 30,
        "./BaseView": 32,
        "./OverAdListLoop": 42,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46
    }],
    37: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("./SceneTool/AdListLoop"),
            o = e("./SceneTool/AppBannerAd"),
            s = e("./SceneTool/PromotionAnimation"),
            r = e("../Control/GameManager"),
            l = e("../Control/ViewManager"),
            h = e("../Common/Enum"),
            c = e("../Control/VideoManager"),
            u = e("../Utils/MathTool"),
            d = e("../Control/NetManager"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clickCount = 0, t.isEnd = !1, t.spaceTime = 0, t._isClick = !1, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.clickCount = 0, this.progressNum = 0, this.appBanner = this.getChildByName("appBanner").getComponent(o["default"]), this.center = this.getChildByName("center"), this.promotion1 = this.center.getChildByName("adImage1"), this.promotion2 = this.center.getChildByName("adImage2"), this.promotion3 = this.center.getChildByName("adImage3"), this.promotion4 = this.center.getChildByName("adImage4"), this.promotion5 = this.center.getChildByName("adImage5"), this.promotion6 = this.center.getChildByName("adImage6"), this.promotion1.getComponent(s["default"]).start(!0, !0, 90001), this.promotion2.getComponent(s["default"]).start(!0, !0, 90002), this.promotion3.getComponent(s["default"]).start(!0, !0, 90003), this.promotion4.getComponent(s["default"]).start(!0, !0, 100001), this.promotion5.getComponent(s["default"]).start(!0, !0, 100002), this.promotion6.getComponent(s["default"]).start(!0, !0, 100003), this.centerImg = this.getChildByName("centerImg"), this.anchor = this.getChildByName("anchor"), this.anchor.y = this.anchor.y + r["default"].Instance.offsetSubdomain.y / 2, this.okBtn = this.anchor.getChildByName("btnClick"), this.iconClose = this.centerImg.getChildByName("iconClose"), this.iconOpen = this.centerImg.getChildByName("iconOpen"), this.closeBtn = this.getChildByName("closeBtn"), this.bar = this.iconClose.getChildByName("bar"), this.btnJump = this.anchor.getChildByName("btnJump"), this.btnVideo = this.anchor.getChildByName("btnVideo"), this.btnReceive = this.anchor.getChildByName("btnReceive"), this.adPlane = this.getChildByName("ADPanel").getChildByName("ADPanelBg").getComponent(a["default"]), this.centerImg.y = this.centerImg.y + r["default"].Instance.offsetSubdomain.y / 2, this.num = this.centerImg.getChildByName("coin").getChildByName("num");
                }, t.prototype.Init = function(e) {
                    var t = this;
                    this.CreateView(e), this.BindEvent(), Laya.timer.frameLoop(25, this, function() {
                        t.isEnd || null != t && void 0 != t && (t.progressNum -= .06, t.updataProgress());
                    });
                }, t.prototype.Show = function() {
                    var e = this;
                    this.visible = !0, this.zOrder = 2, 1 == r["default"].Instance.luckboxSwitch[7] && r["default"].Instance.isWudian && l.ViewManager.Instance.OpenView(h.EnumMana.ViewName.goldenEggView), 1 == r["default"].Instance.gamelistSwitch[7] && l.ViewManager.Instance.OpenView(h.EnumMana.ViewName.ConvergeAdNew), 1 == r["default"].Instance.inviteSwitch[7] && l.ViewManager.Instance.OpenView(h.EnumMana.ViewName.friendInvite), 1 == r["default"].Instance.gameboxSwitch[7], 1 == r["default"].Instance.insertScreenSwitch[7] && c.VideoManager.Instance.showInterstitialAD(), r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] ? (this.btnJump.alpha = 0, Laya.timer.once(r["default"].Instance.btuAppear[7], this, function() {
                        Laya.Tween.to(e.btnJump, {
                            alpha: 1
                        }, 300);
                    }), this.anchor.y = 0 + r["default"].Instance.offsetSubdomain.y / 2) : this.anchor.y = -280 + r["default"].Instance.offsetSubdomain.y / 2, this.num.text = String(r["default"].Instance.userMoney), Laya.timer.once(200, this, function() {
                        c.VideoManager.Instance.HideBannerAd();
                    }), this.rand = u.MathTool.random(Number(r["default"].Instance.luckboxProgressBar[0]), Number(r["default"].Instance.luckboxProgressBar[1])) / 100, this.rand2 = u.MathTool.random(Number(r["default"].Instance.luckboxVideoProgressBar[0]), Number(r["default"].Instance.luckboxVideoProgressBar[1])) / 100;
                }, t.prototype.BindEvent = function() {
                    this.okBtn.on(Laya.Event.CLICK, this, this.btnClick), this.closeBtn.on(Laya.Event.CLICK, this, this.Hidden), this.btnVideo.on(Laya.Event.CLICK, this, this.videoReceiveClick), this.btnReceive.on(Laya.Event.CLICK, this, this.receiveClick), this.btnJump.on(Laya.Event.CLICK, this, this.close);
                }, t.prototype.Hidden = function() {
                    c.VideoManager.Instance.HideBannerAd(), 1 == r["default"].Instance.bannerSwitch[7] && c.VideoManager.Instance.ShowBannerAd_N(r["default"].Instance.lateDelay[7], 7, !0), Laya.timer.clearAll(this), l.ViewManager.Instance.DestroyView(h.EnumMana.ViewName.goldenEggView);
                }, t.prototype.Destroy = function() {
                    this.destroy();
                }, t.prototype.btnClick = function() {
                    var e = this,
                        t = Date.now();
                    return t - this.spaceTime > r["default"].Instance.luckboxClickInterval ? this.progressNum += r["default"].Instance.luckboxFirstClick : this.progressNum += r["default"].Instance.luckboxContinueClick, this.spaceTime = t, this.updataProgress(), this.progressNum >= this.rand && (this.ShowBanner(), r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] && Laya.timer.once(r["default"].Instance.btuMove[7] - 0, this, function() {
                        Laya.Tween.to(e.anchor, {
                            y: -280 + r["default"].Instance.offsetSubdomain.y / 2
                        }, 300, Laya.Ease.backOut);
                    })), this.progressNum >= this.rand2 ? (this.isEnd = !0, this.btnJump.visible = !1, this.okBtn.visible = !1, this.anchor.getChildByName("hand").visible = !1, this.centerImg.getChildByName("iconClose").visible = !1, this.centerImg.getChildByName("label_1").visible = !1, this.centerImg.getChildByName("iconOpen").visible = !0, this.centerImg.getChildByName("iconOpen").getChildByName("Num").text = String(r["default"].Instance.randomRewardNum), this.centerImg.getChildByName("label_2").visible = !0, this.btnVideo.visible = !0, void(this.btnReceive.visible = !0)) : void 0;
                }, t.prototype.videoReceiveClick = function() {
                    var e = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(800, this, function() {
                        e._isClick = null;
                    }), Laya.Browser.onMiniGame ? c.VideoManager.Instance.ShowVideo(this, function() {
                        r["default"].Instance.StatisticsVideoFinished(3), e.receiveReword(!0);
                    }, function() {
                        var e = l.ViewManager.Instance.OpenView(h.EnumMana.ViewName.tipsDialog);
                        e.Tip("需要看完视频哦");
                    }) : this.receiveReword(!0));
                }, t.prototype.receiveClick = function() {
                    this.receiveReword(!1);
                }, t.prototype.receiveReword = function(e) {
                    var t, n = this,
                        i = r["default"].Instance.randomRewardNum;
                    t = e ? 2 * i : i;
                    var a = {
                        sessionId: r["default"].Instance.sessionCode,
                        addData: t,
                        type: 2
                    };
                    d["default"].Instance.HttpRequest("settleLotto.action", a, this, function(e) {
                        if ("string" == typeof e && (e = JSON.parse(e)), 0 == e.code) {
                            var i = l.ViewManager.Instance.OpenView(h.EnumMana.ViewName.tipsDialog);
                            i.Tip("获得" + t + "金币"), r["default"].Instance.userMoney = e.userMoney - 0, n.num.text = String(r["default"].Instance.userMoney), n.close();
                        }
                    });
                }, t.prototype.showAppBanner = function() {
                    var e = this;
                    r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] ? Laya.timer.once(r["default"].Instance.lateDelay[7], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001);
                }, t.prototype.ShowBanner = function() {
                    var e = this;
                    1 == r["default"].Instance.bannerSwitch[7] ? c.VideoManager.Instance.ShowBannerAd_N(1 == r["default"].Instance.wudianLevel[7] ? r["default"].Instance.lateDelay[7] : 0, 7) ? this.hideADPanel() : r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] ? Laya.timer.once(r["default"].Instance.lateDelay[7], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001) : 2 == r["default"].Instance.bannerSwitch[7] ? r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] ? Laya.timer.once(r["default"].Instance.lateDelay[7], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001) : 3 == r["default"].Instance.bannerSwitch[7] && (r["default"].Instance.isWudian && 1 == r["default"].Instance.wudianLevel[7] ? Laya.timer.once(r["default"].Instance.lateDelay[7], this, function() {
                        e.showADPanel();
                    }) : this.showADPanel());
                }, t.prototype.showADPanel = function() {
                    var e = this;
                    this.getChildByName("ADPanel").visible = r["default"].Instance.getAdData(30001).length > 0, Laya.timer.frameOnce(2, this, function() {
                        e.adPlane.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), e.adPlane.start(r["default"].Instance.getAdData(30001), 30001, "首页");
                    });
                }, t.prototype.hideADPanel = function() {
                    this.getChildByName("ADPanel").visible = !1;
                }, t.prototype.updataProgress = function() {
                    this.progressNum >= 1 ? this.progressNum = 1 : this.progressNum <= .07 && (this.progressNum = .07), this.bar.width = 375 * this.progressNum;
                }, t.prototype.close = function() {
                    this.Hidden();
                }, t;
            }(i.BaseView);
        n["default"] = p;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/NetManager": 15,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Utils/MathTool": 30,
        "./BaseView": 32,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46,
        "./SceneTool/PromotionAnimation": 49
    }],
    38: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Model/Level"),
            o = e("../Control/GameManager"),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.speed = 8, t;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e), this.bottomImg = this.getChildByName("bottom"), this.bar = this.bottomImg.getChildByName("bar"), this.moveDis = this.bottomImg.width - this.bar.width, this.BindEvent();
                }, t.prototype.Show = function() {
                    this.visible = !0, Laya.timer.frameLoop(1, this, this.BarMove), a.Level.Instance.ShowActor(), this.bottomImg.bottom = 208 + o["default"].Instance.offsetSubdomain.y / 3;
                }, t.prototype.Hidden = function() {
                    this.visible = !1, Laya.timer.clearAll(this);
                }, t.prototype.BindEvent = function() {
                    this.on(Laya.Event.CLICK, this, this.StartLevelGame);
                }, t.prototype.StartLevelGame = function() {
                    this.IsShowView && (this.Hidden(), a.Level.Instance.GameStart());
                }, t.prototype.BarMove = function() {
                    this.IsShowView && (this.bar.x += this.speed, (this.bar.x >= this.moveDis || this.bar.x <= 0) && (this.speed = -this.speed));
                }, t.prototype.Destroy = function() {
                    Laya.timer.clearAll(this), this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.GuideView = s;
    }, {
        "../Control/GameManager": 13,
        "../Model/Level": 24,
        "./BaseView": 32
    }],
    39: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Common/Enum"),
            o = e("../Model/Level"),
            s = e("../Model/Player"),
            r = e("../Control/VideoManager"),
            l = e("../Control/GameManager"),
            h = e("../Utils/Debug"),
            c = e("../Control/ViewManager"),
            u = e("../Control/NetManager"),
            d = e("../Utils/MathTool"),
            p = e("../Common/GameConst"),
            m = e("./SceneTool/PromotionAnimation"),
            f = e("./SceneTool/AppBannerAd"),
            g = e("./SceneTool/AdListLoop"),
            y = e("./OverAdListLoop"),
            w = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.countdownNum = 15, t.speed = 8, t.moveTween = new Laya.Tween(), t;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e), this.score = this.getChildByName("bottom"), this.bg = this.getChildByName("bg"), this.appBanner = this.bg.getChildByName("appBanner").getComponent(f["default"]), this.jumpto = this.bg.getChildByName("jumpto");
                    var t = this.bg.getChildByName("adapter"),
                        n = t.getChildByName("countdownbg");
                    this.videoButton = t.getChildByName("videoButton"), this.shareButton = t.getChildByName("shareButton"), this.time = n.getChildByName("time"), this.guide = this.getChildByName("guide");
                    this.readyTxt = this.getChildByName("readyTxt");
                    var i = this.guide.getChildByName("finger");
                    if (this.finger = i.getChildByName("bar"), this.countdown = n.getChildByName("countdown"), this.moveDis = i.width - this.finger.width, this.ADPlaneBg = t.getChildByName("bg"), this.ADPlane = t.getChildByName("ADPlane"), this._overListLoop = this.ADPlane.getComponent(y["default"]), Laya.Browser.onMiniGame) {
                        var a = 40,
                            o = (l["default"].Instance.systemInfo.screenWidth / 3 + a) / l["default"].Instance.systemInfo.screenHeight * Laya.stage.height;
                        this.jumptoStartPosY = Laya.stage.height - o - l["default"].Instance.offsetSubdomain.y / 6, this.jumpto.y = this.jumptoStartPosY, l["default"].Instance.randomLocation && (this.jumpto.centerX = 240 - d.MathTool.Range(0, 480)), h.Utils.Debug.log("this.jumpto.y " + this.jumpto.y + "    this.jumptoStartPosY " + this.jumptoStartPosY);
                        var s = l["default"].Instance.offsetSubdomain.y / 6,
                            r = this.score.y + s;
                        this.score.y = r;
                    }
                    this.promotion1 = this.getChildByName("adImage1"), this.promotion2 = this.getChildByName("adImage2"), this.promotion1.getComponent(m["default"]).start(!0, !0, 70001), this.promotion2.getComponent(m["default"]).start(!0, !0, 70002), this.BindEvent(), this.ADPanelBG = this.bg.getChildByName("ADPanel"), this.ADPanel = this.ADPanelBG.getChildByName("ADPanelBg").getComponent(g["default"]), this.cMask = new Laya.Sprite();
                }, t.prototype.Show = function() {
                    if (this.visible = !0, Laya.timer.clearAll(this), this.currentScore = 0, this.score.value = "0", this.bg.visible = !1, this.score.visible = !0, this.HiddenGuide(), this.CreateWXOpen(), 1 == l["default"].Instance.reviveSwitch[0] && (this.videoButton.visible = !0), 1 == l["default"].Instance.reviveSwitch[1] && (this.shareButton.visible = !0), 1 == l["default"].Instance.reviveSwitch[2]) {}
                }, t.prototype.AdBanel = function(e) {
                    if (l["default"].Instance.adInfo && !e) {
                        for (var t = [], n = 30001, i = 0; i < l["default"].Instance.adInfo.length; i++) l["default"].Instance.adInfo[i].position == n && t.push(l["default"].Instance.adInfo[i]);
                        this.ADPanelBG.visible = t.length > 0, this.ADPanel.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), this.ADPanel.start(l["default"].Instance.getAdData(n), n, "复活");
                    } else this.ADPanelBG.visible = !1;
                }, t.prototype.CreateWXOpen = function() {
                    Laya.Browser.onMiniGame && (l["default"].Instance.SetSharedCanvas(), this.wxOpen = new Laya.WXOpenDataViewer(), this.addChild(this.wxOpen), this.Provocation());
                }, t.prototype.CloseWXOpen = function() {
                    this.wxOpen && (Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeLevelView"
                    }), this.wxOpen.destroy(), this.wxOpen = null);
                }, t.prototype.Provocation = function() {
                    Laya.Browser.onMiniGame && (this.wxOpen.pos(50, 260 + l["default"].Instance.offsetSubdomain.y / 5), this.wxOpen.width = 700, this.wxOpen.height = 66, Laya.Browser.window.wx.postMessage({
                        type: "openHeadView"
                    }), Laya.timer.once(2400, this, this.OnceProvocation, [this]));
                }, t.prototype.OnceProvocation = function(e) {
                    e.DomianDeyond();
                }, t.prototype.CloseProvocation = function() {
                    this.wxOpen && Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeHeadView"
                    });
                }, t.prototype.AboutToSurpass = function() {
                    if (Laya.timer.clear(this, this.OnceProvocation), Laya.Browser.onMiniGame) {
                        this.wxOpen.pos(0, Laya.stage.height / 2 - 540), this.wxOpen.width = Laya.stage.width, this.wxOpen.height = 92, this.wxOpen.visible = !1;
                        var e = this.currentScore < s.Player.Instance.maxScore ? s.Player.Instance.maxScore : this.currentScore;
                        Laya.Browser.window.wx.postMessage({
                            type: "openAboutToHeadView",
                            score: e
                        }), Laya.timer.once(100, this, function(e) {
                            e.wxOpen.visible = !0;
                        }, [this]);
                    }
                }, t.prototype.ScoreCtrl = function() {
                    this.currentScore < Laya.LocalStorage.getItem("bestScore") ? Laya.LocalStorage.getItem("bestScore") : Laya.LocalStorage.setItem("bestScore", this.currentScore);
                    Laya.LocalStorage.setItem("currentScore", this.currentScore);
                }, t.prototype.CloseAboutToSurpass = function() {
                    Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeAboutToHeadView"
                    });
                }, t.prototype.DomianDeyond = function() {
                    Laya.Browser.onMiniGame && (this.wxOpen.pos(Laya.stage.width - 266, 260 + l["default"].Instance.offsetSubdomain.y / 5), this.wxOpen.width = 66, this.wxOpen.height = 512, this.wxOpen.visible = !1, Laya.Browser.window.wx.postMessage({
                        type: "openBeyondHeadView",
                        score: s.Player.Instance.maxScore
                    }), Laya.timer.loop(3e3, this, this.LoopDomianDeyond, [this]));
                }, t.prototype.LoopDomianDeyond = function(e) {
                    e && s.Player.Instance.maxScore < e.currentScore && Laya.Browser.onMiniGame && (e.wxOpen.visible = !0, Laya.Browser.window.wx.postMessage({
                        type: "SurpassBeyondHeadView",
                        score: e.currentScore
                    }));
                }, t.prototype.CloseDomianDeyond = function() {
                    Laya.Browser.onMiniGame && (Laya.timer.clear(this, this.LoopDomianDeyond), Laya.Browser.window.wx.postMessage({
                        type: "closeBeyondHeadView"
                    }));
                }, t.prototype.ShowGuide = function() {
                    this.guide.disabled = !1, this.guide.visible = !0, Laya.timer.frameLoop(1, this, this.FingerMove);
                }, t.prototype.HiddenGuide = function() {
                    this.guide.disabled = !0, this.guide.visible = !1, Laya.timer.clear(this, this.FingerMove);
                }, t.prototype.FingerMove = function() {
                    this.IsShowView && (this.finger.x += this.speed, (this.finger.x >= this.moveDis || this.finger.x <= 0) && (this.speed = -this.speed));
                }, t.prototype.BackTimer = function() {
                    var e = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                    if (!e.pauseBackTimer) {
                        var t = new Date().getTime();
                        if (e.startBackTime < t - 1e3) {
                            e.startBackTime = t;
                            var n = parseInt(e.time.text),
                                i = n - 1;
                            0 >= i && (Laya.timer.clear(e, e.BackTimer), e.JumpToEvent(), i = 0), e.time.text = i.toString();
                            var o = Math.floor(360 * (e.countdownNum - i) / e.countdownNum - 90);
                            e.graphicsImg(o, 270);
                        }
                    }
                }, t.prototype.graphicsImg = function(e, t) {
                    this.cMask.graphics.clear(!0), this.cMask.graphics.drawPie(147, 147, 147, e, t, "#ff0000"), this.countdown.mask = this.cMask;
                }, t.prototype.WhetherContinueGame = function() {
                    var e = this;
                    this.AboutToSurpass(), this.score.visible = !1, this.bg.visible = !0, this.clickEvent = !1, this.pauseBackTimer = !1, this.startBackTime = new Date().getTime(), this.time.text = this.countdownNum.toString(), this.graphicsImg(-90, 270), 1 == l["default"].Instance.luckboxSwitch[1] && l["default"].Instance.isWudian && c.ViewManager.Instance.OpenView(a.EnumMana.ViewName.goldenEggView), 1 == l["default"].Instance.gamelistSwitch[1] && c.ViewManager.Instance.OpenView(a.EnumMana.ViewName.ConvergeAdNew), 1 == l["default"].Instance.inviteSwitch[1] && c.ViewManager.Instance.OpenView(a.EnumMana.ViewName.friendInvite), 1 == l["default"].Instance.gameboxSwitch[1], 1 == l["default"].Instance.insertScreenSwitch[1] && r.VideoManager.Instance.showInterstitialAD(), Laya.Browser.onMiniGame && (l["default"].Instance.isWudian && 1 == l["default"].Instance.wudianLevel[1] ? (this.jumpto.y = this.jumptoStartPosY + 180, Laya.timer.once(l["default"].Instance.btuAppear[1], this, function() {
                        e.jumpto.visible = !0;
                    }), l["default"].Instance.btuMove[1] > 0 && Laya.timer.once(l["default"].Instance.btuMove[1], this, function() {
                        e.moveTween.to(e.jumpto, {
                            y: e.jumptoStartPosY
                        }, 300, null, Laya.Handler.create(e, function() {}), 200);
                    })) : this.jumpto.y = this.jumptoStartPosY), this.ShowBanner();
                }, t.prototype.ShowBanner = function() {
                    var e = this;
                    1 == l["default"].Instance.bannerSwitch[1] ? r.VideoManager.Instance.ShowBannerAd_N(1 == l["default"].Instance.wudianLevel[1] ? l["default"].Instance.lateDelay[1] : 0, 1) ? this.AdBanel(!0) : l["default"].Instance.isWudian && 1 == l["default"].Instance.wudianLevel[1] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(l["default"].Instance.lateDelay[1], this, this.AdBanel)) : this.AdBanel(!1) : 2 == l["default"].Instance.bannerSwitch[1] ? l["default"].Instance.isWudian && 1 == l["default"].Instance.wudianLevel[1] ? Laya.timer.once(l["default"].Instance.lateDelay[1], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001) : 3 == l["default"].Instance.bannerSwitch[1] && (l["default"].Instance.isWudian && 1 == l["default"].Instance.wudianLevel[1] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(l["default"].Instance.lateDelay[1], this, this.AdBanel)) : this.AdBanel(!1));
                }, t.prototype.ToContinueGame = function() {
                    this.DomianDeyond(), this.score.visible = !0, this.bg.visible = !1, Laya.timer.clear(this, this.BackTimer), this.ShowGuide(), o.Level.Instance.ShowActor(), r.VideoManager.Instance.HideBannerAd();
                }, t.prototype.AddScore = function(e) {
                    this.currentScore != e && (this.score.value = e.toString()), this.currentScore = e;
                }, t.prototype.Hidden = function() {
                    this.visible = !1, this.CloseWXOpen(), r.VideoManager.Instance.HideBannerAd(), 1 == l["default"].Instance.bannerSwitch[1] && r.VideoManager.Instance.ShowBannerAd_N(l["default"].Instance.lateDelay[1], 1, !0), Laya.timer.clearAll(this);
                }, t.prototype.BindEvent = function() {
                    this.jumpto.on(Laya.Event.CLICK, this, this.JumpToEvent), this.videoButton.on(Laya.Event.CLICK, this, this.VideoEvent), this.shareButton.on(Laya.Event.CLICK, this, this.ShareEvent), this.guide.on(Laya.Event.CLICK, this, this.GuideEvent);
                }, t.prototype.JumpToEvent = function() {
                    h.Utils.Debug.log(" JumpToEvent  pauseBackTimer", this.pauseBackTimer), this.IsShowView() && (this.pauseBackTimer || (this.Hidden(), o.Level.Instance.GameEnd()));
                }, t.prototype.VideoEvent = function() {
                    if (p["default"].ald("立即复活"), h.Utils.Debug.log(" VideoEvent  pauseBackTimer", this.pauseBackTimer), this.IsShowView() && !this.pauseBackTimer)
                        if (this.pauseBackTimer = !0, Laya.Browser.onMiniGame) r.VideoManager.Instance.CanPlayVideo() && (l["default"].Instance.StatisticsVideoUnfinish(1), r.VideoManager.Instance.ShowVideo(this, function() {
                            p["default"].ald("立即复活成功"), l["default"].Instance.StatisticsVideoFinished(1), u["default"].Instance.HttpRequest("videoCallback.action", {
                                sessionId: l["default"].Instance.sessionCode
                            }, null, null);
                            var e = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                            e.ToContinueGame();
                        }, this.VideoShareFail));
                        else {
                            var e = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                            e.ToContinueGame();
                        }
                }, t.prototype.VideoShareFail = function(e, t) {
                    h.Utils.Debug.log("test fail:", t);
                    var n = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                    n.pauseBackTimer = !1;
                }, t.prototype.ShareEvent = function() {
                    if (p["default"].ald("分享复活"), h.Utils.Debug.log(" ShareEvent  pauseBackTimer", this.pauseBackTimer), this.IsShowView() && !this.pauseBackTimer)
                        if (this.pauseBackTimer = !0, Laya.Browser.onMiniGame && l["default"].Instance.shareOC) l["default"].Instance.Share(this, function() {
                            p["default"].ald("分享复活成功"), l["default"].Instance.StatisticsShare(2);
                            var e = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                            e.ToContinueGame();
                        }, this.VideoShareFail);
                        else {
                            var e = c.ViewManager.Instance.GetView(a.EnumMana.ViewName.levelView);
                            e.ToContinueGame();
                        }
                }, t.prototype.GuideEvent = function() {
                    this.IsShowView() && (this.HiddenGuide(), o.Level.Instance.ContinueGame());
                }, t.prototype.Destroy = function() {
                    this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.LevelView = w;
    }, {
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Control/GameManager": 13,
        "../Control/NetManager": 15,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Model/Level": 24,
        "../Model/Player": 25,
        "../Utils/Debug": 29,
        "../Utils/MathTool": 30,
        "./BaseView": 32,
        "./OverAdListLoop": 42,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46,
        "./SceneTool/PromotionAnimation": 49
    }],
    40: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e);
                    var t = this.getChildByName("adapter");
                    this.pro = t.getChildByName("pro"), this.proBar = this.pro.getChildByName("proBar"), this.proBar.width = 0, this.unitPro = 5.4;
                }, t.prototype.SetProgress = function(e) {
                    this.proBar.width = this.unitPro * e;
                }, t.prototype.Destroy = function() {
                    this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.LoadingView = a;
    }, {
        "./BaseView": 32
    }],
    41: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Common/Enum"),
            o = e("../Control/SoundManager"),
            s = e("../Control/ViewManager"),
            r = e("../Control/GameManager"),
            l = e("../Utils/Debug"),
            h = e("../Model/Player"),
            c = e("../Control/VideoManager"),
            u = e("./SceneTool/PromotionAnimation"),
            d = e("../Common/GameConst"),
            p = e("./SceneTool/AppBannerAd"),
            m = e("./SceneTool/AdListLoop"),
            f = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.authorHint = !0, this.CreateView(e);
                    var t = this.getChildByName("bottom");
                    this.readyTxt = this.getChildByName("readyTxt");
                    this.startButton = t.getChildByName("startButton"), this.voiceButton = this.getChildByName("voiceButton"), this.shaketButton = this.getChildByName("shaketButton"), this.bestScoreFnt = this.getChildByName("bestScoreFnt"), this.mainlogo = t.getChildByName("mainlogo"), this.finger = this.getChildByName("finger");
                    var n = this.mainlogo.y;
                    this.mainlogo.y = n - r["default"].Instance.offsetSubdomain.y / 4, this.appBanner = this.getChildByName("appBanner").getComponent(p["default"]), this.promotion1 = t.getChildByName("adImage1"), this.promotion2 = t.getChildByName("adImage2"), this.promotion5 = t.getChildByName("adImage5"), this.promotion6 = t.getChildByName("adImage6"), this.promotion7 = t.getChildByName("adImage7"), this.ADPanelBG = this.getChildByName("ADPanel"), this.ADPanel = this.ADPanelBG.getChildByName("ADPanelBg").getComponent(m["default"]), this.BindEvent(), this.SwitchSound(), this.SwitchVibrate();
                }, t.prototype.Show = function() {
                    if (Laya.LocalStorage.getItem("bestScore"))
                        this.bestScoreFnt.value = Laya.LocalStorage.getItem("bestScore").toString();
                    else
                        this.bestScoreFnt.value = "0";
                    this.visible = !0, this.CheckUserInfo(), r["default"].Instance.AlignToMenu(this.voiceButton), l.Utils.Debug.log(" shaketButton "), r["default"].Instance.AlignToMenu(this.shaketButton, this.shaketButton.x), this.finger.visible = !1, 1 == r["default"].Instance.luckboxSwitch[4] && r["default"].Instance.isWudian && s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.goldenEggView), 1 == r["default"].Instance.gamelistSwitch[4] && s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.ConvergeAdNew), 1 == r["default"].Instance.inviteSwitch[4] && s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.friendInvite), 1 == r["default"].Instance.gameboxSwitch[4], 1 == r["default"].Instance.insertScreenSwitch[4] && c.VideoManager.Instance.showInterstitialAD()
                }, t.prototype.ShowBanner = function() {
                    1 == r["default"].Instance.bannerSwitch[4] ? c.VideoManager.Instance.ShowBannerAd_M() ? this.AdBanel(!0) : this.AdBanel(!1) : 2 == r["default"].Instance.bannerSwitch[4] ? this.appBanner.start(40001) : 3 == r["default"].Instance.bannerSwitch[4] && this.AdBanel(!1);
                }, t.prototype.AdBanel = function(e) {
                    if (r["default"].Instance.adInfo && !e) {
                        for (var t = [], n = 30001, i = 0; i < r["default"].Instance.adInfo.length; i++) r["default"].Instance.adInfo[i].position == n && t.push(r["default"].Instance.adInfo[i]);
                        console.log(t), this.ADPanelBG.visible = t.length > 0, this.ADPanel.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), this.ADPanel.start(r["default"].Instance.getAdData(n), n, "首頁");
                    } else this.ADPanelBG.visible = !1;
                }, t.prototype.Hidden = function() {
                    this.AdBanel(!0), this.visible = !1, c.VideoManager.Instance.HideBannerAd(), this.DestroyUserBtns(), Laya.timer.clearAll(this);
                }, t.prototype.SwitchSound = function() {
                    o.SoundManager.Instance.GetVolume() > 0 ? this.voiceButton.skin = "main/set01.png" : this.voiceButton.skin = "main/laba2.png";
                }, t.prototype.SwitchVibrate = function() {
                    o.SoundManager.Instance.isVibrate ? this.shaketButton.skin = "main/zhengdong.png" : this.shaketButton.skin = "main/set02.png";
                }, t.prototype.BindEvent = function() {
                    this.startButton.on(Laya.Event.CLICK, this, this.StartLevelEvent), this.voiceButton.on(Laya.Event.CLICK, this, this.VoiceEvent), this.shaketButton.on(Laya.Event.CLICK, this, this.ShaketEvent)
                }, t.prototype.StartLevelEvent = function() {
                    Laya.LocalStorage.setItem("replay", 1), platform.getInstance().showInterstitial(() => {
                        this.Hidden(), s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.guideView)
                    })
                }, t.prototype.VoiceEvent = function() {
                    this.IsShowView && (o.SoundManager.Instance.GetVolume() > 0 ? o.SoundManager.Instance.SetVolume(0) : o.SoundManager.Instance.SetVolume(1), this.SwitchSound());
                }, t.prototype.ShaketEvent = function() {
                    o.SoundManager.Instance.isVibrate = !o.SoundManager.Instance.isVibrate, localStorage.setItem("vibrate", String(o.SoundManager.Instance.isVibrate)), this.SwitchVibrate();
                }, t.prototype.RankEvent = function() {
                    this.IsShowView && (this.UpDown() || (this.Hidden(), s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.rankView, {
                        state: 1
                    })));
                }, t.prototype.ServiceEvent = function() {
                    this.UpDown() || Laya.Browser.onMiniGame && window.wx.openCustomerServiceConversation();
                }, t.prototype.InvitefriendsEvent = function() {
                    this.UpDown() || Laya.Browser.onMiniGame && r["default"].Instance.Share(this, function() {
                        r["default"].Instance.StatisticsShare(0);
                    }, this.ShareFail);
                }, t.prototype.ShareFail = function(e, t) {
                    l.Utils.Debug.log("test fail:", t);
                }, t.prototype.CollectionEvent = function() {
                    this.IsShowView && (this.UpDown() || (this.Hidden(), s.ViewManager.Instance.OpenView(a.EnumMana.ViewName.addToMinigamesView)));
                }, t.prototype.CheckUserInfo = function() {
                    var e = this;
                    this.IsShowView && Laya.Browser.onMiniGame && 0 == r["default"].Instance.wxAuthorization && window.wx.getSetting({
                        success: function(t) {
                            if (t.authSetting && t.authSetting["scope.userInfo"]) l.Utils.Debug.log("已授权..."), r["default"].Instance.wxAuthorization = !0, r["default"].Instance.WXGetUserInfo();
                            else {
                                l.Utils.Debug.log("未授权..."), e.userBtnClicked = !1;
                                var n = Laya.stage.width,
                                    i = Laya.stage.height,
                                    a = Laya.Browser.width / Laya.Browser.pixelRatio / n,
                                    o = Laya.Browser.height / Laya.Browser.pixelRatio / i,
                                    s = function(e) {
                                        return window.wx.createUserInfoButton({
                                            type: "text",
                                            text: "",
                                            style: {
                                                left: (.5 * n + e.x) * a,
                                                top: (.5 * i + e.y) * o,
                                                width: e.width * a,
                                                height: e.height * o
                                            }
                                        });
                                    },
                                    c = function(t) {
                                        if (r["default"].Instance.wxAuthorization = !0, e.authorHint = !1, t && t.userInfo) {
                                            h.Player.Instance.nickName = t.userInfo.nickName, h.Player.Instance.headImage = t.userInfo.avatarUrl.length > 4 ? t.userInfo.avatarUrl.substring(0, t.userInfo.avatarUrl.length - 3) + "46" : t.userInfo.avatarUrl;
                                            var n = {
                                                nickname: t.userInfo.nickName,
                                                sex: t.userInfo.gender,
                                                headimgurl: t.userInfo.avatarUrl
                                            };
                                            r["default"].Instance.StatisticsAuthor(), r["default"].Instance.UpdateUserInfo(n);
                                        }
                                        e.DestroyUserBtns();
                                    };
                                e.authorHint && (l.Utils.Debug.log("授权按钮startButton ... "), e.startBtn = s(e.startButton), e.startBtn.onTap(function(t) {
                                    c(t), e.userBtnClicked || (e.userBtnClicked = !0, e.StartLevelEvent());
                                })), e.serviceBtn.onTap(function(t) {
                                    c(t), e.userBtnClicked || (e.userBtnClicked = !0, e.ServiceEvent());
                                }), e.invitefriendsBtn.onTap(function(t) {
                                    c(t), e.userBtnClicked || (e.userBtnClicked = !0, e.InvitefriendsEvent());
                                }), e.rankBtn.onTap(function(t) {
                                    c(t), e.userBtnClicked || (e.userBtnClicked = !0, e.RankEvent());
                                }), e.collectionBtn.onTap(function(t) {
                                    c(t), e.userBtnClicked || (e.userBtnClicked = !0, e.CollectionEvent());
                                });
                            }
                        }
                    });
                }, t.prototype.DestroyUserBtns = function() {
                    this.invitefriendsBtn && this.invitefriendsBtn.destroy(), this.serviceBtn && this.serviceBtn.destroy(), this.rankBtn && this.rankBtn.destroy(), this.collectionBtn && this.collectionBtn.destroy(), this.startBtn && this.startBtn.destroy(), this.startBtn = null, this.collectionBtn = null, this.rankBtn = null, this.serviceBtn = null, this.invitefriendsBtn = null;
                }, t.prototype.Destroy = function() {
                    this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.MainView = f;
    }, {
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Control/GameManager": 13,
        "../Control/SoundManager": 18,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Model/Player": 25,
        "../Utils/Debug": 29,
        "./BaseView": 32,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46,
        "./SceneTool/PromotionAnimation": 49
    }],
    42: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../Control/GameManager");
        ! function(e) {
            e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN";
        }(i || (i = {}));
        var o = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.moveSpeed = .5, t._itemHeight = 244, t._itemWidth = 184, t._spaceX = 14, t._spaceY = 12, t.speedTime = 500, t.viewHeight = 500, t;
            }
            return __extends(t, e), t.prototype.init = function(e) {
                this._itemHeight = e._itemHeight || 244, this._itemWidth = e._itemWidth || 184, this._spaceX = e._spaceX || 14, this._spaceY = e._spaceY || 12, this.viewHeight = e.viewHeight || 503;
            }, t.prototype.start = function(e, t) {
                if (!(e.length <= 0)) {
                    this.owner.removeChildren(), this._cells = [], this.adInfos = e;
                    for (var n = 0, a = new s(), o = this, r = function() {
                            var e = o.adInfos[h],
                                i = new Laya.Image();
                            l.owner.addChild(i);
                            var r = l._cells.length * (l._itemHeight + l._spaceY);
                            i.pos(n * (l._itemWidth + l._spaceX), r), i.skin = e.param, i.width = l._itemWidth, i.height = l._itemHeight, i.on(Laya.Event.MOUSE_DOWN, l, function() {
                                o.startTime = Laya.timer.currTimer;
                            }), i.name = h.toString(), i.on(Laya.Event.MOUSE_UP, l, function() {
                                var e = Number(i.name),
                                    n = o.adInfos[e];
                                Laya.timer.currTimer - o.startTime <= 200 && o.tiaozhuang(n, t), o.startTime = Laya.timer.currTimer;
                            }), n++, a._posY = r, a._cells.push(i), n > 2 && (l._cells.push(a), n = 0, a = new s());
                        }, l = this, h = 0; h < o.adInfos.length; h++) r();
                    0 != n && this._cells.push(a), this.fristPosY = 0, this.endPosY = this.viewHeight - this._itemHeight, this.setDirtion(i.DOWN), this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp), this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, t.prototype.autoMove = function() {
                var e = this;
                Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    e.move();
                });
            }, t.prototype.move = function() {
                for (var e = -(this._cells[0].getPosY() - this.fristPosY), t = (Math.abs(this.speedTime / (this._itemHeight + this._spaceY) * e), 0); t < this._cells.length; t++) {
                    var n = this._cells[t];
                    n.setPosY(n.getPosY() + this.moveSpeed);
                }
                this.moveDirection == i.DOWN && this._cells[0].getPosY() > this.fristPosY && this.setDirtion(i.UP), this.moveDirection == i.UP && this._cells[this._cells.length - 1].getPosY() < this.endPosY && this.setDirtion(i.DOWN);
            }, t.prototype.setDirtion = function(e) {
                this.moveDirection = e, this.moveDirection == i.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, t.prototype.tiaozhuang = function(e, t) {
                if (Laya.Browser.onMiniGame)
                    if (e) console.log("开始跳转"), a["default"].Instance.NavigateToMiniProgram(e.appid, t, "宫格");
                    else if (Laya.Browser.onMiniGame) {
                    var n = {};
                    n.title = "跳转失败", window.wx.showToast(n);
                }
            }, t.prototype.mouseDown = function() {
                Laya.timer.clearAll(this), this._mouseDown = !0, this._mouseY = Laya.MouseManager.instance.mouseX;
            }, t.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var e = Laya.MouseManager.instance.mouseY - this._mouseY;
                    e = e > 30 ? 30 : -30 > e ? -30 : e, this._mouseY = Laya.MouseManager.instance.mouseY, e > 0 && this._cells[0].getPosY() + e > this.fristPosY && (e = this.fristPosY - this._cells[0].getPosY()), 0 > e && this._cells[this._cells.length - 1].getPosY() + e < this.endPosY && (e = this.endPosY - this._cells[this._cells.length - 1].getPosY());
                    for (var t = 0; t < this._cells.length; t++) {
                        var n = this._cells[t];
                        n.setPosY(n.getPosY() + e);
                    }
                }
            }, t.prototype.mouseUp = function(e) {
                this._mouseDown = !1, this._mouseY = 0, this.autoMove();
            }, t;
        }(Laya.Script);
        n["default"] = o;
        var s = function() {
            function e() {
                this._cells = [], this._posY = 0;
            }
            return e.prototype.setPosY = function(e) {
                for (var t = 0; t < this._cells.length; t++) {
                    var n = this._cells[t],
                        i = n.x;
                    n.pos(i, e);
                }
                this._posY = e;
            }, e.prototype.getPosY = function() {
                return this._posY;
            }, e;
        }();
    }, {
        "../Control/GameManager": 13
    }],
    43: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Common/Enum"),
            o = e("../Model/Level"),
            s = e("../Control/GameManager"),
            r = e("../Model/Player"),
            l = e("../Control/NetManager"),
            h = e("../Control/ViewManager"),
            c = e("../Utils/Debug"),
            u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.rankData = [], t.underLineX = [-209, 10], t;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e), this.btnClose = this.getChildByName("btnClose"), this.anchorS = this.getChildByName("anchorS"), this.sharePos = this.anchorS.getChildByName("sharePos"), this.tabLine = this.anchorS.getChildByName("tabLine"), this.worldImg = this.anchorS.getChildByName("worldImg"), this.friendImg = this.anchorS.getChildByName("friendImg"), this.worldImg1 = this.anchorS.getChildByName("worldImg1"), this.friendImg1 = this.anchorS.getChildByName("friendImg1"), this.friendBtn = this.anchorS.getChildByName("friendBtn"), this.worldBtn = this.anchorS.getChildByName("worldBtn"), this.list = this.anchorS.getChildByName("list"), this.bottomS = this.anchorS.getChildByName("bottomS"), this.selfRank = this.bottomS.getChildByName("selfRank"), this.selfRankIcon = this.selfRank.getChildByName("selfRankIcon"), this.selfHead = this.selfRank.getChildByName("selfHead"), this.selfName = this.selfRank.getChildByName("selfName"), this.selfScore = this.selfRank.getChildByName("selfScore"), this.selfwsbImg = this.selfRank.getChildByName("selfwsbImg"), this.selfRankFont = this.selfRank.getChildByName("selfRankFont"), this.startgame = this.anchorS.getChildByName("startgame"), this.list.array = [], this.list.renderHandler = new Laya.Handler(this, this.onRender), this.list.vScrollBarSkin = "", this.BindEvent();
                }, t.prototype.DomianSprite = function() {
                    s["default"].Instance.SetSharedCanvas(), this.wxOpen = new Laya.WXOpenDataViewer(), this.wxOpen.pos(this.anchorS.x - 315, this.anchorS.y - 424), this.wxOpen.width = 630, this.wxOpen.height = 848, this.addChild(this.wxOpen);
                }, t.prototype.Show = function(e) {
                    this.DomianSprite(), this.fromWhere = e, this.visible = !0, this.rankData = [], this.rankType = Laya.Browser.onMiniGame ? 1 : 2, this.selfRankFont.value = "", this.Switch(), s["default"].Instance.AlignToMenu(this.btnClose);
                }, t.prototype.Hidden = function() {
                    this.visible = !1, Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeFriendLevelList"
                    }), this.wxOpen && (this.wxOpen.destroy(), this.wxOpen = null);
                }, t.prototype.BindEvent = function() {
                    this.startgame.on(Laya.Event.CLICK, this, this.StartLevel), this.friendBtn.on(Laya.Event.CLICK, this, this.ClickFriend), this.worldBtn.on(Laya.Event.CLICK, this, this.ClickWorld), this.btnClose.on(Laya.Event.CLICK, this, this.ClickClose);
                }, t.prototype.StartLevel = function() {
                    this.IsShowView && (this.Hidden(), 2 == this.fromWhere.state ? (o.Level.Instance.ResetGameInfo(), h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.skinTralView)) : h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.skinTralView));
                }, t.prototype.Switch = function() {
                    Laya.Tween.to(this.tabLine, {
                        x: this.underLineX[this.rankType - 1]
                    }, 100, Laya.Ease.expoIn), this.friendImg.visible = 1 == this.rankType, this.worldImg.visible = 2 == this.rankType, this.friendImg1.visible = 2 == this.rankType, this.worldImg1.visible = 1 == this.rankType, this.list.visible = 2 == this.rankType, this.bottomS.visible = 2 == this.rankType, this.wxOpen.visible = 1 == this.rankType, 2 == this.rankType ? (Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeFriendLevelList"
                    }), this.SetRankData()) : 1 == this.rankType && Laya.Browser.window.wx.postMessage({
                        type: "openFriendLevelList",
                        mylevel: r.Player.Instance.maxScore
                    });
                }, t.prototype.SetRankData = function() {
                    var e = this;
                    if (this.selfHead.skin = "youke" == r.Player.Instance.headImage ? "common/question.png" : r.Player.Instance.headImage, this.selfName.text = r.Player.Instance.nickName, this.selfScore.text = r.Player.Instance.maxScore.toString(), this.rankData.length > 0) this.list.array = this.rankData, this.list.refresh(), this.list.scrollTo(0);
                    else {
                        var t = {
                            sessionId: s["default"].Instance.sessionCode,
                            page: 1,
                            type: 1
                        };
                        c.Utils.Debug.log("getWorldRank HttpRequest json " + s["default"].Instance.sessionCode), l["default"].Instance.HttpRequest("getWorldRank.action", t, this, function(t) {
                            c.Utils.Debug.log(" getWorldRank.action recive ", t);
                            var n = t;
                            0 == n.code && (e.SetRankStyle(e.selfRankFont, e.selfRankIcon, n.myIndex), e.selfwsbImg.visible = n.myIndex > 100, n.rank && (e.rankData = n.rank, e.list.array = e.rankData, e.list.refresh(), e.list.scrollTo(0)));
                        }, function() {
                            c.Utils.Debug.log(" getWorldRank.action fail ");
                        });
                    }
                }, t.prototype.onRender = function(e, t) {
                    var n = this.rankData[t];
                    e.getChildByName("head").skin = "youke" == n.headImage || "" == n.headImage || null == n.headImage ? "common/question.png" : n.headImage.substring(0, n.headImage.length - 3) + "46", e.getChildByName("name").text = null == n.nickname ? "游客" : n.nickname, e.getChildByName("score").text = n.score;
                    var i = e.getChildByName("rankFont"),
                        a = e.getChildByName("rankIcon");
                    this.SetRankStyle(i, a, n.index);
                }, t.prototype.SetRankStyle = function(e, t, n) {
                    1 == n ? (e.value = null, t.skin = "rank/01.png") : 2 == n ? (e.value = null, t.skin = "rank/02.png") : 3 == n ? (e.value = null, t.skin = "rank/03.png") : (t.skin = null, 0 == n || n > 100 ? e.value = null : e.value = n.toString());
                }, t.prototype.ClickFriend = function() {
                    1 != this.rankType && Laya.Browser.onMiniGame && (this.rankType = 1, this.Switch());
                }, t.prototype.ClickWorld = function() {
                    2 != this.rankType && (this.rankType = 2, this.Switch());
                }, t.prototype.ClickClose = function() {
                    this.IsShowView && (this.wxOpen.visible = !1, Laya.Browser.onMiniGame && Laya.Browser.window.wx.postMessage({
                        type: "closeFriendLevelList"
                    }), this.Hidden(), 2 == this.fromWhere.state ? h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.gameOverView, {
                        l: this.fromWhere.score
                    }) : h.ViewManager.Instance.OpenView(a.EnumMana.ViewName.mainView));
                }, t.prototype.Destroy = function() {
                    this.destroy(!0);
                }, t;
            }(i.BaseView);
        n.RankView = u;
    }, {
        "../Common/Enum": 10,
        "../Control/GameManager": 13,
        "../Control/NetManager": 15,
        "../Control/ViewManager": 20,
        "../Model/Level": 24,
        "../Model/Player": 25,
        "../Utils/Debug": 29,
        "./BaseView": 32
    }],
    44: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../../Control/GameManager");
        ! function(e) {
            e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT";
        }(i || (i = {}));
        var o = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.x = 0, t.moveLeft = 0, t.moveRight = 0, t._isClick = !1, t._cellWidth = 136, t._cellHeight = 162, t._spaceX = 17, t.speedTime = 500, t.itemWidth = 136, t;
            }
            return __extends(t, e), t.prototype.init = function(e) {
                this._cellWidth = e._cellWidth || 136, this._spaceX = e._spaceX || 17, this.speedTime = e.speedTime || 500, this._cellHeight = e._cellHeight || 162, this.x = this._cellWidth + this._spaceX, this.owner.removeChildren();
            }, t.prototype.start = function(e, t, n) {
                if (!(e.length <= 0)) {
                    console.log("adlistloop start");
                    var a = this;
                    this._cells = [];
                    var o = e.length > 4 ? !0 : !1;
                    this.posY = this.owner.height / 2;
                    for (var s, r = function() {
                            s = e[h];
                            var i = new Laya.Image();
                            i.anchorX = .5, i.anchorY = .5;
                            var r = new Laya.Image("common/tanhao.png");
                            r.right = -10, r.top = -10, r.name = "tanhao", r.visible = !1, i.addChild(r), l.owner.addChild(i), o ? i.pos((h - 1) * (l._cellWidth + l._spaceX) + l._cellWidth / 2, l.posY) : i.pos(h * (l._cellWidth + l._spaceX) + l._cellWidth / 2, l.posY), i.skin = s.param, i.width = l._cellWidth, i.height = l._cellHeight;
                            var c = h;
                            i.on(Laya.Event.MOUSE_DOWN, l, function() {
                                a.startTime = Laya.timer.currTimer;
                            }), i.on(Laya.Event.MOUSE_UP, l, function() {
                                Laya.timer.currTimer - a.startTime <= 200 && a.tiaozhuang(e[c], t, n), a.startTime = Laya.timer.currTimer;
                            }), l._cells.push(i), 3 == h && (l._cells[h].getChildByName("tanhao").visible = !0, l._cells[h].scale(1.1, 1.1));
                        }, l = this, h = 0; h < e.length; h++) r();
                    this.fristPosX = this._cells[1].x, this.endPosX = this._cells[this._cells.length - 1].x, this.moveDirection = i.RIGHT, this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
                }
            }, t.prototype.tiaozhuang = function(e, t, n) {
                if (Laya.Browser.onMiniGame)
                    if (e) console.log("开始跳转"), a["default"].Instance.NavigateToMiniProgram(e.appid, t, n);
                    else if (Laya.Browser.onMiniGame) {
                    var i = {};
                    i.title = "跳转失败", window.wx.showToast(i);
                }
            }, t.prototype.autoMove = function() {
                this._cells.length <= 4 || (Laya.timer.clearAll(this), Laya.timer.loop(5e3, this, function() {
                    this.move();
                }));
            }, t.prototype.move = function() {
                Laya.Tween.to(this.owner, {
                    x: this.owner.x - this._cellWidth - this._spaceX
                }, 800, null, Laya.Handler.create(this, this.firstMoveToEnd));
                for (var e = 0; e < this._cells.length; e++) {
                    this._cells[e];
                    this._cells[e].getChildByName("tanhao").visible = !1, 4 == e && (this._cells[e].getChildByName("tanhao").visible = !0, Laya.Tween.to(this._cells[e - 1], {
                        scaleX: 1,
                        scaleY: 1
                    }, 800), Laya.Tween.to(this._cells[e], {
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 800));
                }
            }, t.prototype.firstMoveToEnd = function() {
                var e = this._cells[this._cells.length - 1],
                    t = this._cells.shift();
                t.pos(e.x + this._cellWidth + this._spaceX, this.posY), this._cells.push(t);
            }, t.prototype.endMoveToFrist = function() {
                var e = this._cells[0],
                    t = this._cells.pop(),
                    n = e.x - this._cellWidth - this._spaceX;
                t.pos(n, e.y), this._cells.unshift(t);
            }, t.prototype.mouseDown = function() {
                return;
            }, t.prototype.mouseMove = function() {
                return;
            }, t.prototype.mouseUp = function(e) {}, t;
        }(Laya.Script);
        n["default"] = o;
    }, {
        "../../Control/GameManager": 13
    }],
    45: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../../Control/GameManager");
        ! function(e) {
            e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT";
        }(i || (i = {}));
        var o = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._spaceX = 8, t.speedTime = 500, t.itemWidth = 136, t;
            }
            return __extends(t, e), t.prototype.init = function(e) {
                this._cellWidth = e._cellWidth || 136, this._spaceX = e._spaceX || 8, this.speedTime = e.speedTime || 500, this._cellHeight = e._cellHeight || 162;
            }, t.prototype.start = function(e, t, n) {
                if (e && !(e.length <= 0)) {
                    var a = this;
                    this.owner.removeChildren(), this._cells = [];
                    var o = e.length > 4 ? !0 : !1;
                    this.posY = 0;
                    for (var s, r = function() {
                            s = e[h];
                            var i = new Laya.Image(),
                                r = new Laya.Image();
                            l.owner.addChild(i);
                            var c = new Laya.Text();
                            i.addChild(r), o ? i.pos((h - 1) * (l._cellWidth + l._spaceX), l.posY) : i.pos(h * (l._cellWidth + l._spaceX), l.posY), r.skin = s.param, r.width = l._cellWidth, r.height = l._cellHeight, i.width = l._cellWidth, i.height = 140, c.text = s.name, c.y = 118, c.text = s.name, c.width = l._cellWidth, c.height = 24, c.fontSize = 24, c.color = "#4A4A4A", c.align = "center", c.valign = "middle", c.zOrder = 10;
                            var u = h;
                            return i.on(Laya.Event.MOUSE_DOWN, l, function() {
                                a.startTime = Laya.timer.currTimer;
                            }), i.on(Laya.Event.MOUSE_UP, l, function() {
                                Laya.timer.currTimer - a.startTime <= 200 && a.tiaozhuang(e[u], t, n), a.startTime = Laya.timer.currTimer;
                            }), l._cells.push(i), h >= 13 ? "break" : void 0;
                        }, l = this, h = 0; h < e.length; h++) {
                        var c = r();
                        if ("break" === c) break;
                    }
                    this.fristPosX = this._cells[0].x, this.endPosX = this._cells[this._cells.length - 1].x, this.moveDirection = i.RIGHT, this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
                }
            }, t.prototype.tiaozhuang = function(e, t, n) {
                if (Laya.Browser.onMiniGame)
                    if (e) console.log("开始跳转"), a["default"].Instance.NavigateToMiniProgram(e.appid, t, n);
                    else if (Laya.Browser.onMiniGame) {
                    var i = {};
                    i.title = "跳转失败", window.wx.showToast(i);
                }
            }, t.prototype.autoMove = function() {
                this._cells.length <= 4 || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    this.move();
                }));
            }, t.prototype.move = function() {
                for (var e = -(this._cells[0].x - this.fristPosX), t = (Math.abs(this.speedTime / (this._cellWidth + this._spaceX) * e), 0); t < this._cells.length; t++) {
                    var n = this._cells[t];
                    n.pos(n.x - .5, this.posY);
                }
                this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
            }, t.prototype.firstMoveToEnd = function() {
                var e = this._cells[this._cells.length - 1],
                    t = this._cells.shift();
                t.pos(e.x + this._cellWidth + this._spaceX, this.posY), this._cells.push(t);
            }, t.prototype.endMoveToFrist = function() {
                var e = this._cells[0],
                    t = this._cells.pop(),
                    n = e.x - this._cellWidth - this._spaceX;
                t.pos(n, e.y), this._cells.unshift(t);
            }, t.prototype.mouseDown = function() {
                this._mouseDown = !0, Laya.timer.clearAll(this), this._mouseX = this._mouseX = Laya.MouseManager.instance.mouseX, Laya.timer.clearAll(this);
                for (var e = 0; e < this._cells.length; e++) {
                    var t = this._cells[e];
                    Laya.Tween.clearAll(t);
                }
            }, t.prototype.mouseMove = function() {
                if (this._mouseDown) {
                    var e = Laya.MouseManager.instance.mouseX - this._mouseX;
                    this._mouseX = Laya.MouseManager.instance.mouseX;
                    for (var t = 0; t < this._cells.length; t++) {
                        var n = this._cells[t];
                        n.pos(n.x + e, this.posY);
                    }
                    this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
                }
            }, t.prototype.mouseUp = function(e) {
                this._mouseDown = !1, this.autoMove();
            }, t;
        }(Laya.Script);
        n["default"] = o;
    }, {
        "../../Control/GameManager": 13
    }],
    46: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../../Control/GameManager"),
            a = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.bannerIndex = 0, t;
                }
                return __extends(t, e), t.prototype.init = function(e) {}, t.prototype.start = function(e) {
                    var t = this;
                    console.log("appbanner  id=", e), this.adId = e, this.bannerAd = i["default"].Instance.getAdData(e), this.bannerAd && 0 != this.bannerAd.length && (this.bannerIndex = 0, this.owner.visible = !0, this.owner.skin = this.bannerAd[this.bannerIndex].param, Laya.timer.loop(5e3, this, function() {
                        t.bannerIndex++, t.bannerIndex == t.bannerAd.length && (t.bannerIndex = 0), t.owner.skin = t.bannerAd[t.bannerIndex].param;
                    }), this.owner.on(Laya.Event.CLICK, this, this.tiaozhuan));
                }, t.prototype.tiaozhuan = function() {
                    var e = this.bannerAd[this.bannerIndex];
                    if (Laya.Browser.onMiniGame)
                        if (e) console.log("开始跳转"), i["default"].Instance.NavigateToMiniProgram(e.appid, this.adId, "page");
                        else if (Laya.Browser.onMiniGame) {
                        var t = {};
                        t.title = "跳转失败", window.wx.showToast(t);
                    }
                }, t;
            }(Laya.Script);
        n["default"] = a;
    }, {
        "../../Control/GameManager": 13
    }],
    47: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../../Control/GameManager");
        ! function(e) {
            e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN";
        }(i || (i = {}));
        var o = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.moveSpeed = .5, t.noMove = !0, t._itemHeight = 268, t._itemWidth = 202, t._spaceX = 17, t._spaceY = 17, t._repeatX = 0, t._repeatY = 0, t.speedTime = 500, t.viewWidth = 638.5, t.viewHeight = 769, t.imgWidth = 202, t.imgHeight = 268, t.labWidth = 160, t.labHeight = 30, t;
            }
            return __extends(t, e), t.prototype.init = function(e) {
                this.thisY = e.y;
            }, t.prototype.start = function(e, t, n) {
                if (e && !(e.length <= 0)) {
                    this.owner.removeChildren(), this._cells = [], this.adInfos = e;
                    var a = 0,
                        o = new s();
                    this.list = [];
                    for (var r = this, l = function() {
                            var e = r.adInfos[c],
                                n = h._cells.length * (h._itemHeight + h._spaceY),
                                i = new Laya.Image();
                            i.pos(a * (h._itemWidth + h._spaceX), n), h.owner.addChild(i), i.width = h._itemWidth, i.height = h._itemHeight;
                            var l = new Laya.Image();
                            i.addChild(l), l.skin = "aggregation/ad_bg02.png", l.pos(0, 0), l.width = h._itemWidth, l.height = h._itemHeight;
                            var u = new Laya.Image();
                            i.addChild(u), u.pos(0, 0), u.skin = e.param, u.width = h.imgWidth, u.height = h.imgHeight, u.on(Laya.Event.MOUSE_DOWN, h, function() {
                                r.startTime = Laya.timer.currTimer;
                            }), u.name = c.toString(), u.on(Laya.Event.MOUSE_UP, h, function() {
                                var e = Number(u.name),
                                    n = r.adInfos[e];
                                Laya.timer.currTimer - r.startTime <= 200 && r.tiaozhuang(n, t), r.startTime = Laya.timer.currTimer;
                            }), a++, o._posY = n, o._cells.push(i), a > 2 && (h._cells.push(o), a = 0, o = new s()), h.list.push(i);
                        }, h = this, c = 0; c < r.adInfos.length; c++) l();
                    0 != a && this._cells.push(o), this.fristPosY = 0, this.endPosY = this.viewHeight - this._itemHeight, this.setDirtion(i.DOWN), this._mouseDown = !1, this.noMove = this._cells[this._cells.length - 1].getPosY() <= this.endPosY, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseOut), this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, t.prototype.autoMove = function() {
                var e = this;
                this.noMove || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    e.move();
                }));
            }, t.prototype.move = function() {
                this._mouseDown || this.upMove(-.5);
            }, t.prototype.upMove = function(e) {
                for (var t = this._itemHeight + this._spaceY, n = this._itemWidth + this._spaceX, i = 0, a = this.list.length, o = 0; a > o; o++) {
                    var s = this.list[o],
                        r = s.y;
                    s.y = r + e, s.y < this.fristPosY - t && i++;
                }
                var l = 0,
                    h = 0;
                if (a > 0) {
                    var s = this.list[a - 1];
                    l = s.y, h = 2;
                }
                if (a > 1) {
                    var s = this.list[a - 2];
                    s.y == l && (h = 1);
                }
                if (a > 2) {
                    var s = this.list[a - 3];
                    s.y == l && (h = 0);
                }
                for (var c = 0; i > 0;) {
                    i--;
                    var s = this.list.shift();
                    s && (2 == h ? (h--, s.pos(n, l)) : 1 == h ? (h--, s.pos(2 * n, l)) : 0 == h && (s.pos(n * c, l + (this._itemHeight + this._spaceY)), c++), this.list.push(s));
                }
            }, t.prototype.downMove = function(e) {
                for (var t = (this._itemHeight + this._spaceY, this._itemWidth + this._spaceX), n = 0, i = this.list.length, a = 0; i > a; a++) {
                    var o = this.list[a],
                        s = o.y;
                    o.y = s + e, o.y >= this.viewHeight && n++;
                }
                var r = 0,
                    l = 0;
                if (i > 0) {
                    var o = this.list[0];
                    r = o.y, l = 2;
                }
                if (i > 1) {
                    var o = this.list[1];
                    o.y == r && (l = 1);
                }
                if (i > 2) {
                    var o = this.list[2];
                    o.y == r && (l = 0);
                }
                for (var h = 2; n > 0;) {
                    n--;
                    var o = this.list.pop();
                    o && (2 == l ? (l--, o.pos(t, r)) : 1 == l ? (l--, o.pos(0, r)) : 0 == l && (o.pos(t * h, r - (this._itemHeight + this._spaceY)), h--), this.list.unshift(o));
                }
            }, t.prototype.setDirtion = function(e) {
                this.moveDirection = e, this.moveDirection == i.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, t.prototype.tiaozhuang = function(e, t, n) {
                if (Laya.Browser.onMiniGame)
                    if (e) console.log("开始跳转"), a["default"].Instance.NavigateToMiniProgram(e.appid, t, n);
                    else if (Laya.Browser.onMiniGame) {
                    var i = {};
                    i.title = "跳转失败", window.wx.showToast(i);
                }
            }, t.prototype.mouseDown = function() {
                Laya.timer.clearAll(this), this._mouseDown = !0, this._mouseY = Laya.MouseManager.instance.mouseX;
            }, t.prototype.mouseMove = function() {
                if (!this.noMove && this._mouseDown) {
                    var e = Laya.MouseManager.instance.mouseY - this._mouseY;
                    e = e > 30 ? 30 : -30 > e ? -30 : e, this._mouseY = Laya.MouseManager.instance.mouseY, 0 > e ? this.upMove(e) : e > 0 && this.downMove(e);
                }
            }, t.prototype.mouseOut = function(e) {
                Laya.MouseManager.instance.mouseY > this.thisY || this.mouseUp();
            }, t.prototype.mouseUp = function() {
                this._mouseDown = !1, this._mouseY = 0, this.autoMove();
            }, t;
        }(Laya.Script);
        n["default"] = o;
        var s = function() {
            function e() {
                this._cells = [], this._posY = 0;
            }
            return e.prototype.setPosY = function(e) {
                for (var t = 0; t < this._cells.length; t++) {
                    var n = this._cells[t],
                        i = n.x;
                    n.pos(i, e);
                }
                this._posY = e;
            }, e.prototype.getPosY = function() {
                return this._posY;
            }, e;
        }();
    }, {
        "../../Control/GameManager": 13
    }],
    48: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../../Control/GameManager");
        ! function(e) {
            e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN";
        }(i || (i = {}));
        var o = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.moveSpeed = .5, t.noMove = !0, t.thisY = 0, t._itemHeight = 194, t._itemWidth = 163, t._spaceX = 42, t._spaceY = 24, t._repeatX = 0, t._repeatY = 0, t.speedTime = 500, t.viewHeight = 758, t.imgWidth = 163, t.imgHeight = 194, t;
            }
            return __extends(t, e), t.prototype.init = function(e) {}, t.prototype.start = function(e, t, n) {
                if (e && !(e.length <= 0)) {
                    this.owner.removeChildren(), this._cells = [], this.adInfos = e;
                    var a = 0,
                        o = new s();
                    this.list = [];
                    for (var r = this, l = function() {
                            var e = r.adInfos[c],
                                n = h._cells.length * (h._itemHeight + h._spaceY),
                                i = new Laya.Image();
                            i.pos(a * (h._itemWidth + h._spaceX), n), h.owner.addChild(i), i.width = h._itemWidth, i.height = h._itemHeight;
                            var l = new Laya.Image();
                            i.addChild(l), l.pos(0, 0), l.skin = e.param, l.width = h.imgWidth, l.height = h.imgHeight, l.on(Laya.Event.MOUSE_DOWN, h, function() {
                                r.startTime = Laya.timer.currTimer;
                            }), l.name = c.toString(), l.on(Laya.Event.MOUSE_UP, h, function() {
                                var e = Number(l.name),
                                    n = r.adInfos[e];
                                Laya.timer.currTimer - r.startTime <= 200 && r.tiaozhuang(n, t), r.startTime = Laya.timer.currTimer;
                            }), a++, o._posY = n, o._cells.push(i), a > 2 && (h._cells.push(o), a = 0, o = new s()), h.list.push(i);
                        }, h = this, c = 0; c < r.adInfos.length; c++) l();
                    0 != a && this._cells.push(o), this.fristPosY = 0, this.endPosY = this.viewHeight - this._itemHeight, this.setDirtion(i.DOWN), this._mouseDown = !1, this.noMove = this._cells[this._cells.length - 1].getPosY() <= this.endPosY, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseOut), this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
                }
            }, t.prototype.autoMove = function() {
                var e = this;
                this.noMove || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function() {
                    e.move();
                }));
            }, t.prototype.move = function() {
                this._mouseDown || this.upMove(-.5);
            }, t.prototype.upMove = function(e) {
                for (var t = this._itemHeight + this._spaceY, n = this._itemWidth + this._spaceX, i = 0, a = this.list.length, o = 0; a > o; o++) {
                    var s = this.list[o],
                        r = s.y;
                    s.y = r + e, s.y < this.fristPosY - t && i++;
                }
                var l = 0,
                    h = 0;
                if (a > 0) {
                    var s = this.list[a - 1];
                    l = s.y, h = 2;
                }
                if (a > 1) {
                    var s = this.list[a - 2];
                    s.y == l && (h = 1);
                }
                if (a > 2) {
                    var s = this.list[a - 3];
                    s.y == l && (h = 0);
                }
                for (var c = 0; i > 0;) {
                    i--;
                    var s = this.list.shift();
                    s && (2 == h ? (h--, s.pos(n, l)) : 1 == h ? (h--, s.pos(2 * n, l)) : 0 == h && (s.pos(n * c, l + (this._itemHeight + this._spaceY)), c++), this.list.push(s));
                }
            }, t.prototype.downMove = function(e) {
                for (var t = (this._itemHeight + this._spaceY, this._itemWidth + this._spaceX), n = 0, i = this.list.length, a = 0; i > a; a++) {
                    var o = this.list[a],
                        s = o.y;
                    o.y = s + e, o.y >= this.viewHeight && n++;
                }
                var r = 0,
                    l = 0;
                if (i > 0) {
                    var o = this.list[0];
                    r = o.y, l = 2;
                }
                if (i > 1) {
                    var o = this.list[1];
                    o.y == r && (l = 1);
                }
                if (i > 2) {
                    var o = this.list[2];
                    o.y == r && (l = 0);
                }
                for (var h = 2; n > 0;) {
                    n--;
                    var o = this.list.pop();
                    o && (2 == l ? (l--, o.pos(t, r)) : 1 == l ? (l--, o.pos(0, r)) : 0 == l && (o.pos(t * h, r - (this._itemHeight + this._spaceY)), h--), this.list.unshift(o));
                }
            }, t.prototype.setDirtion = function(e) {
                this.moveDirection = e, this.moveDirection == i.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
            }, t.prototype.tiaozhuang = function(e, t, n) {
                if (Laya.Browser.onMiniGame)
                    if (e) console.log("开始跳转"), a["default"].Instance.NavigateToMiniProgram(e.appid, t, "page");
                    else if (Laya.Browser.onMiniGame) {
                    var i = {};
                    i.title = "跳转失败", window.wx.showToast(i);
                }
            }, t.prototype.mouseDown = function() {
                Laya.timer.clearAll(this), this._mouseDown = !0, this._mouseY = Laya.MouseManager.instance.mouseX;
            }, t.prototype.mouseMove = function() {
                if (!this.noMove && this._mouseDown) {
                    var e = Laya.MouseManager.instance.mouseY - this._mouseY;
                    e = e > 30 ? 30 : -30 > e ? -30 : e, this._mouseY = Laya.MouseManager.instance.mouseY, 0 > e ? this.upMove(e) : e > 0 && this.downMove(e);
                }
            }, t.prototype.mouseOut = function(e) {
                Laya.MouseManager.instance.mouseY > this.thisY || this.mouseUp();
            }, t.prototype.mouseUp = function() {
                this._mouseDown = !1, this._mouseY = 0, this.autoMove();
            }, t;
        }(Laya.Script);
        n["default"] = o;
        var s = function() {
            function e() {
                this._cells = [], this._posY = 0;
            }
            return e.prototype.setPosY = function(e) {
                for (var t = 0; t < this._cells.length; t++) {
                    var n = this._cells[t],
                        i = n.x;
                    n.pos(i, e);
                }
                this._posY = e;
            }, e.prototype.getPosY = function() {
                return this._posY;
            }, e;
        }();
    }, {
        "../../Control/GameManager": 13
    }],
    49: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../../Control/GameManager"),
            a = e("../../Utils/MathTool"),
            o = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.isClick = !1, t.toLinks = "", t.toAppId = "", t.thePosition = 1, t.nowidx = 0, t.maxdix = 0, t.isAnim = !0, t.isChange = !1, t.lastRand = 0, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this.owner.on(Laya.Event.CLICK, this, this.jumpOtherGame);
                }, t.prototype.init = function(e) {
                    this.typeScene = e, this.adImg = this.owner.getChildByName("ADImg");
                }, t.prototype.start = function(e, t, n) {
                    Laya.Tween.clearAll(this);
                    var a = i["default"].Instance.getAdData(n);
                    return !a || a.length <= 0 ? void(this.owner.visible = !1) : (this.owner.visible = !0, this.owner.rotation = 0, this.owner.scale(1, 1), this.isAnim = e, this.isChange = t, this.thePosition = n, this.nowidx = 0, this.maxdix = a.length - 1, this.randomAD(), this.isAnim && this.adAnim(), Laya.timer.clearAll(this), void this.startAnim());
                }, t.prototype.startAnim = function() {
                    var e = this,
                        t = i["default"].Instance.getAdData(this.thePosition);
                    Laya.timer.loop(5e3, this, function() {
                        null != t ? t.length > 1 && e.isChange ? e.changeAD() : e.randomAD() : e.isChange ? e.changeAD() : e.randomAD();
                    });
                }, t.prototype.randomAD = function() {
                    var e = i["default"].Instance.getAdData(this.thePosition);
                    if (e) {
                        var t = (e.length, a.MathTool.random(0, this.maxdix));
                        this.lastRand == t && (t += 1, t > this.maxdix && (t = 0)), this.lastRand = t, this.nowidx = t, this.toAppId = e[this.nowidx].appid, this.toLinks = e[this.nowidx].toLinks, this.adImg ? this.adImg.skin = e[this.nowidx].param : this.owner.skin = e[this.nowidx].param;
                    }
                }, t.prototype.changeAD = function() {
                    var e = this,
                        t = this.owner;
                    t.scale(1, 1), Laya.Tween.clearAll(t), Laya.Tween.to(t, {
                        scaleX: 0,
                        scaleY: 0
                    }, 300, null, Laya.Handler.create(this, function() {
                        e.randomAD(), Laya.Tween.to(t, {
                            scaleX: 0,
                            scaleY: 0
                        }, 100, null, Laya.Handler.create(e, function() {
                            Laya.Tween.to(t, {
                                scaleX: 1,
                                scaleY: 1
                            }, 300, null, Laya.Handler.create(e, function() {
                                e.adAnim();
                            }));
                        }));
                    }));
                }, t.prototype.adAnim = function() {
                    var e = this,
                        t = this.owner;
                    t.rotation = 0, Laya.Tween.clearAll(t), Laya.Tween.to(t, {
                        rotation: 10
                    }, 300, null, Laya.Handler.create(this, function() {
                        Laya.Tween.to(t, {
                            rotation: 0
                        }, 300, null, Laya.Handler.create(e, function() {
                            Laya.Tween.to(t, {
                                rotation: -10
                            }, 300, null, Laya.Handler.create(e, function() {
                                Laya.Tween.to(t, {
                                    rotation: 0
                                }, 300, null, Laya.Handler.create(e, function() {
                                    e.adAnim2();
                                }));
                            }));
                        }));
                    }));
                }, t.prototype.adAnim2 = function() {
                    var e = this,
                        t = this.owner;
                    t.rotation = 0, Laya.Tween.to(t, {
                        rotation: 10
                    }, 300, null, Laya.Handler.create(this, function() {
                        Laya.Tween.to(t, {
                            rotation: 0
                        }, 300, null, Laya.Handler.create(e, function() {
                            Laya.Tween.to(t, {
                                rotation: -10
                            }, 300, null, Laya.Handler.create(e, function() {
                                Laya.Tween.to(t, {
                                    rotation: 0
                                }, 300, null, Laya.Handler.create(e, function() {}));
                            }));
                        }));
                    }));
                }, t.prototype.jumpOtherGame = function() {
                    if (Laya.Browser.onMiniGame) {
                        var e = this.toAppId;
                        if (e) console.log("开始跳转"), i["default"].Instance.NavigateToMiniProgram(this.toAppId, this.thePosition.toString()), Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(), this.changeAD(), this.startAnim();
                        else if (Laya.Browser.onMiniGame) {
                            var t = {};
                            t.title = "跳转失败", window.wx.showToast(t);
                        }
                    } else Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner), this.adAnim(), this.changeAD(), this.startAnim();
                }, t;
            }(Laya.Script);
        n["default"] = o;
    }, {
        "../../Control/GameManager": 13,
        "../../Utils/MathTool": 30
    }],
    50: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./BaseView"),
            a = e("../Utils/MathTool"),
            o = e("../Control/GameManager"),
            s = e("../Control/VideoManager"),
            r = e("../Control/ViewManager"),
            l = e("../Common/Enum"),
            h = e("../Model/Level"),
            c = e("../Common/GameConst"),
            u = e("./SceneTool/AppBannerAd"),
            d = e("./SceneTool/AdListLoop"),
            p = e("./SceneTool/PromotionAnimation"),
            m = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.randomArray = [2, 3, 6, 9], t.isSelect = !1, t;
                }
                return __extends(t, e), t.prototype.Init = function(e) {
                    this.CreateView(e);
                    var t = this.getChildByName("anchor");
                    if (t.y += o["default"].Instance.offsetSubdomain.y / 2, this.btnSkin0 = t.getChildByName("0"), this.btnSkin1 = t.getChildByName("1"), this.btnSkin2 = t.getChildByName("2"), this.btnSkin3 = t.getChildByName("3"), this.btnJump = this.getChildByName("btnJump"), this.btnRandom = t.getChildByName("btnRandom"), this.btnSelect = t.getChildByName("select"), this.appBanner = this.getChildByName("appBanner").getComponent(u["default"]), this.promotion = t.getChildByName("adImage"), this.selectImg = this.btnSelect.getChildByName("selectImg"), this.selectImg.visible = !1, this.isSelect = !1, Laya.Browser.onMiniGame) {
                        o["default"].Instance.isWudian ? 50 : 70;
                        this.jumptoStartPosY = Laya.stage.height - 320 - o["default"].Instance.offsetSubdomain.y / 3, this.btnJump.y = this.jumptoStartPosY, console.log(this.btnJump.y, "this.btnJump.y"), o["default"].Instance.randomLocation && (this.btnJump.centerX = 240 - a.MathTool.Range(0, 480));
                    }
                    this.BindEvent(), this.ADPanelBG = this.getChildByName("ADPanel"), this.ADPanel = this.ADPanelBG.getChildByName("ADPanelBg").getComponent(d["default"]), this.height = Laya.stage.height;
                }, t.getdate = function() {
                    var e = new Date(),
                        t = e.getFullYear(),
                        n = e.getMonth(),
                        i = e.getDate();
                    return t + "" + (10 > n ? "0" + n : n) + (10 > i ? "0" + i : i);
                }, t.prototype.Hidden = function() {
                    this.visible = !1, Laya.timer.clearAll(this)
                }, t.prototype.Show = function() {
                    var e = this;
                    console.log("ingameeeee");
                    localStorage.getItem("SkinIsShow") == t.getdate() ? (this.Hidden(), r.ViewManager.Instance.OpenView(l.EnumMana.ViewName.guideView)) : (this.visible = !0, 1 == o["default"].Instance.luckboxSwitch[0] && o["default"].Instance.isWudian && r.ViewManager.Instance.OpenView(l.EnumMana.ViewName.goldenEggView), 1 == o["default"].Instance.gamelistSwitch[0] && r.ViewManager.Instance.OpenView(l.EnumMana.ViewName.ConvergeAdNew), 1 == o["default"].Instance.inviteSwitch[0] && r.ViewManager.Instance.OpenView(l.EnumMana.ViewName.friendInvite), 1 == o["default"].Instance.gameboxSwitch[0], 1 == o["default"].Instance.insertScreenSwitch[0] && s.VideoManager.Instance.showInterstitialAD(), Laya.Browser.onMiniGame && (o["default"].Instance.isWudian && 1 == o["default"].Instance.wudianLevel[0] ? (this.btnJump.y = this.jumptoStartPosY + 190, Laya.timer.once(o["default"].Instance.btuAppear[0], this, function() {
                        e.btnJump.visible = !0;
                    }), o["default"].Instance.btuMove[0] > 0 && Laya.timer.once(o["default"].Instance.btuMove[0], this, function() {
                        Laya.Tween.to(e.btnJump, {
                            y: e.jumptoStartPosY
                        }, 300, null, Laya.Handler.create(e, function() {}), 200);
                    })) : this.btnJump.y = this.jumptoStartPosY), this.ShowBanner(), Laya.timer.loop(5e3, this, this.ani), this.promotion.getComponent(p["default"]).start(!0, !0, 10001));
                }, t.prototype.ShowBanner = function() {
                    var e = this;
                    1 == o["default"].Instance.bannerSwitch[0] ? s.VideoManager.Instance.ShowBannerAd_N(1 == o["default"].Instance.wudianLevel[0] ? o["default"].Instance.lateDelay[0] : 0, 0) ? (this.AdBanel(!0), console.log(12)) : (console.log(34), o["default"].Instance.isWudian && 1 == o["default"].Instance.wudianLevel[0] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(o["default"].Instance.lateDelay[0], this, this.AdBanel)) : this.AdBanel(!1)) : 2 == o["default"].Instance.bannerSwitch[0] ? o["default"].Instance.isWudian && 1 == o["default"].Instance.wudianLevel[0] ? Laya.timer.once(o["default"].Instance.lateDelay[0], this, function() {
                        e.appBanner.start(40001);
                    }) : this.appBanner.start(40001) : 3 == o["default"].Instance.bannerSwitch[0] && (o["default"].Instance.isWudian && 1 == o["default"].Instance.wudianLevel[0] ? (Laya.timer.clear(this, this.AdBanel), Laya.timer.once(o["default"].Instance.lateDelay[0], this, this.AdBanel)) : this.AdBanel(!1));
                }, t.prototype.AdBanel = function(e) {
                    if (o["default"].Instance.adInfo && !e) {
                        for (var t = [], n = 30001, i = 0; i < o["default"].Instance.adInfo.length; i++) o["default"].Instance.adInfo[i].position == n && t.push(o["default"].Instance.adInfo[i]);
                        this.ADPanelBG.visible = t.length > 0, this.ADPanel.init({
                            _cellWidth: 136,
                            _cellHeight: 162,
                            _spaceX: 17
                        }), this.ADPanel.start(o["default"].Instance.getAdData(n), n, "试用皮肤");
                    } else this.ADPanelBG.visible = !1;
                }, t.prototype.BindEvent = function() {
                    var e = this;
                    this.btnSkin0.on(Laya.Event.CLICK, this, this.trySkinClick, [2]), this.btnSkin1.on(Laya.Event.CLICK, this, this.trySkinClick, [3]), this.btnSkin2.on(Laya.Event.CLICK, this, this.trySkinClick, [6]), this.btnSkin3.on(Laya.Event.CLICK, this, this.trySkinClick, [9]), this.btnJump.on(Laya.Event.CLICK, this, function() {
                        e.Hidden(), r.ViewManager.Instance.OpenView(l.EnumMana.ViewName.guideView);
                    }), this.btnRandom.on(Laya.Event.CLICK, this, function() {
                        var t = e.randomArray[a.MathTool.random(0, 3)];
                        e.trySkinClick(t);
                    }), this.btnSelect.on(Laya.Event.CLICK, this, this.selectClick)
                }, t.prototype.selectClick = function() {
                    this.isSelect = !this.isSelect, this.selectImg.visible = this.isSelect;
                }, t.prototype.ani = function() {
                    var e = this;
                    Laya.Tween.to(500, null, Laya.Handler.create(this, function() {
                        Laya.Tween.to(e.moreGame, {
                            scaleY: 1,
                            scaleX: 1
                        }, 500, null, Laya.Handler.create(e, function() {
                            Laya.Tween.to(e.moreGame, {
                                scaleY: .7,
                                scaleX: .7
                            }, 500, null, Laya.Handler.create(e, function() {
                                Laya.Tween.to(e.moreGame, {
                                    scaleY: 1,
                                    scaleX: 1
                                }, 500, null, Laya.Handler.create(e, function() {}));
                            }));
                        }));
                    }));
                }, t;
            }(i.BaseView);
        n["default"] = m;
    }, {
        "../Common/Enum": 10,
        "../Common/GameConst": 11,
        "../Control/GameManager": 13,
        "../Control/VideoManager": 19,
        "../Control/ViewManager": 20,
        "../Model/Level": 24,
        "../Utils/MathTool": 30,
        "./BaseView": 32,
        "./SceneTool/AdListLoop": 44,
        "./SceneTool/AppBannerAd": 46,
        "./SceneTool/PromotionAnimation": 49
    }],
    51: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return e.call(this) || this;
            }
            return __extends(t, e), t.prototype.Init = function(e) {
                this.createView(Laya.Loader.getRes(e)), Laya.stage.addChild(this), this.tmsg = this.getChildByName("bg").getChildByName("tmsg");
            }, t.prototype.Show = function() {}, t.prototype.Tip = function(e, t) {
                var n = this;
                void 0 === t && (t = !1), Laya.timer.clearAll(this), Laya.timer.once(3e3, this, function() {
                    n.close();
                }), this.tmsg.text = e, t ? this.show() : this.popup();
            }, t.prototype.Destroy = function() {
                this.destroy(!0);
            }, t.prototype.IsShowView = function() {}, t.prototype.Hidden = function() {}, t;
        }(Laya.Dialog);
        n.TipsDialog = i;
    }, {}]
}, {}, [22]);