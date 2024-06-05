var laya = function(e) {
    "use strict";
    class t {
        constructor() {
            this._container = {}, this._length = 0;
        }
        get container() {
            return this._container;
        }
        get size() {
            return this._length;
        }
        set(e, t) {
            this._container.hasOwnProperty(e) || this._length++, this._container[e] = t;
        }
        has(e) {
            return !!this._container.hasOwnProperty(e);
        }
        get(e) {
            return this._container.hasOwnProperty(e) ? this._container[e] : void 0;
        }
        delete(e) {
            this._container.hasOwnProperty(e) && (delete this._container[e], this._length--);
        }
        clear() {
            this._container = {}, this._length = 0;
        }
    }
    var i, s;
    ! function(e) {
        e[e.LoadComplete = 0] = "LoadComplete", e[e.SceneInit = 1] = "SceneInit", e[e.StageInit = 2] = "StageInit", e[e.StageCreateComplete = 3] = "StageCreateComplete", e[e.AnimatorEnd = 4] = "AnimatorEnd", e[e.Select = 5] = "Select";
    }(i || (i = {})),
    function(e) {
        e[e.Win = 0] = "Win", e[e.Lose = 1] = "Lose", e[e.Start = 2] = "Start", e[e.StageCreateComPlete = 3] = "StageCreateComPlete", e[e.Over = 4] = "Over", e[e.Shoot = 5] = "Shoot", e[e.CreatArrow = 6] = "CreatArrow", e[e.Revive = 7] = "Revive", e[e.Restart = 8] = "Restart", e[e.Press = 9] = "Press", e[e.UnPress = 10] = "UnPress";
    }(s || (s = {}));
    class a {
        static EventOn(e, t, s, n = []) {
            a.instance.on(i[e], t, s, n);
        }
        static EventOff(e, t, s, n = []) {
            a.instance.off(i[e], t, s);
        }
        static EventTrigger(e, t = []) {
            a.instance.event(i[e], t);
        }
        static StageOn(e, t, i, n = []) {
            a.instance.on(s[e], t, i, n);
        }
        static StageOff(e, t, i, n = []) {
            a.instance.off(s[e], t, i);
        }
        static StageTrigger(e, t = []) {
            a.instance.event(s[e], t);
        }
    }
    a.instance = new Laya.EventDispatcher();
    class n {
        constructor() {
            this.Boss = new t(), this.Player = new t(), this.Horse = new t(), this.Cap = new t(), this.Prop = new t(), this.Plane = new t(), this.Stone = new t(), this.Tree = new t(), this.Small_Fence = new t(), n.ins = this, a.EventOn(i.LoadComplete, this, this.Init);
        }
        static get Instance() {
            return n.ins ? n.ins : new n();
        }
        Init() {
            this.maincamera = this.mainscene.getChildByName("Main Camera"), this.maincamera.transform.position = new Laya.Vector3(0, 10, -12), this.maincamera.transform.rotationEuler = new Laya.Vector3(-35.7, 180, 0), this.maincamera.enableHDR = !1, this.Light = this.mainscene.getChildByName("Directional light"), this.Light.intensity = .7, a.EventTrigger(i.SceneInit);
        }
    }
    class o {}
    o.MainScene = "Game/res/MainScene/LayaScene_Mainscene/Conventional/Mainscene.ls", o.Boss = ["Game/res/Role/LayaScene_Role/Conventional/boss.lh"], o.Player = ["Game/res/Role/LayaScene_Role/Conventional/player.lh"], o.Horse = ["Game/res/Horse/LayaScene_Horse/Conventional/horse1.lh", "Game/res/Horse/LayaScene_Horse/Conventional/horse2.lh", "Game/res/Horse/LayaScene_Horse/Conventional/horse3.lh", "Game/res/Horse/LayaScene_Horse/Conventional/horse4.lh", "Game/res/Horse/LayaScene_Horse/Conventional/horse5.lh"], o.Cap = ["Game/res/Cap/LayaScene_Cap/Conventional/cap1.lh", "Game/res/Cap/LayaScene_Cap/Conventional/cap2.lh", "Game/res/Cap/LayaScene_Cap/Conventional/cap3.lh", "Game/res/Cap/LayaScene_Cap/Conventional/cap4.lh", "Game/res/Cap/LayaScene_Cap/Conventional/cap5.lh"], o.Prop = "Game/res/Prop/LayaScene_Prop/Conventional/Prop.lh";
    var r = Laya.Sprite3D,
        h = Laya.Vector3;
    class l {
        constructor(e) {
            this.modelcur = e, this.modelPos = e.transform.position.clone(), this.modelRot = e.transform.rotation.clone(), this.modelSca = e.transform.scale.clone();
        }
    }
    class c {
        constructor() {
            this.modelpool = {}, this.maxAcount = 30, c.Ins = this;
        }
        static get Instance() {
            return c.Ins ? c.Ins : new c();
        }
        GetModel(e, t) {
            var i = t + e.name;
            if (null != this.modelpool[i] && null != this.modelpool[i]) {
                if (this.modelpool[i].length > 0) {
                    var s = this.modelpool[i][0];
                    return this.modelpool[i].splice(0, 1), s.modelcur.destroyed && (s.modelcur = r.instantiate(e), s.modelcur.active || (s.modelcur.active = !0)), s.modelcur.active = !0, s.modelcur.transform.position = e.transform.position.clone(), s.modelcur.transform.rotation = e.transform.rotation.clone(), s.modelcur.transform.scale = e.transform.scale.clone(), s.modelcur;
                }
                var a;
                return (a = r.instantiate(e)).active = !0, a;
            }
            return (a = r.instantiate(e)).active = !0, a;
        }
        RecoveryModel(e, t = "", i = !1) {
            if (!e.destroyed && (i || 0 != e.active)) {
                var s = t + e.name;
                if (null != this.modelpool[s] && null != this.modelpool[s]) {
                    var a = this.modelpool[s];
                    if (a.length > this.maxAcount) return void e.destroy();
                    a.push(new l(e));
                } else(a = []).push(new l(e)), this.modelpool[s] = a;
                e.transform.position = new h(0, 0, -1e4), e.removeSelf(), e.active = !1;
            }
        }
        ResetsModelPool() {
            for (var e in this.modelpool)
                for (var t = this.modelpool[e], i = 0; i < t.length; i++) t[i].modelcur.destroy();
            this.modelpool = {};
        }
    }
    var p, d = Laya.Vector3;
    class m {
        static getForward(e) {
            let t = new d();
            return e.getForward(t), Laya.Vector3.scale(t, -1, t), Laya.Vector3.normalize(t, t), t;
        }
    }
    class g {
        constructor() {
            g.ins = this;
        }
        static get Instance() {
            return g.ins ? g.ins : new g();
        }
        lerp(e, t, i) {
            return i <= 0 ? e : i >= 1 ? t : i * t + (1 - i) * e;
        }
        SetCollider(e, t) {
            e.numChildren;
            for (var i = 0; i < e.numChildren; i++) {
                e.getChildAt(i).numChildren > 1 && this.SetCollider(e.getChildAt(i), t);
                var s = e.getChildAt(i).getComponent(Laya.PhysicsCollider);
                s && (s.collisionGroup = t);
            }
        }
        EnemySetCollider(e, t) {
            var i = e.getChildByName("npcfrontcollider"),
                s = e.getChildByName("npcrearcollider"),
                a = i.getComponent(Laya.PhysicsCollider),
                n = s.getComponent(Laya.PhysicsCollider);
            a && (a.collisionGroup = t), n && (n.collisionGroup = t);
        }
        PlayerSetCollider(e, t) {
            var i = e.getChildByName("playercollider").getComponent(Laya.PhysicsCollider);
            i && (i.collisionGroup = t);
        }
        HostageSetCollider(e, t) {
            var i = e.getChildByName("hostagecollider").getComponent(Laya.PhysicsCollider);
            i && (i.collisionGroup = t);
        }
        static RandomNumber(e, t) {
            if (e >= t) return 0;
            var i = t - e;
            return Math.random() * i + e;
        }
        static RandomANumber(e, t) {
            if (e >= t) return 0;
            var i = t - e,
                s = Math.random() * i + e;
            return Math.floor(s);
        }
        static GetMoney(e, t = null, i = null) {
            if (0 != e) {
                var s = new Laya.Box();
                s.width = 400, s.height = 100, s.pivotX = s.width / 2, s.pivotY = s.height / 2, null == t && (t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)), s.pos(t.x, t.y);
                var a = new Laya.Image();
                a.skin = "game/qiandao_1_7.png", a.width = 60, a.height = 60, a.left = 50, a.y = 10, s.addChild(a);
                var n = new Laya.Text();
                n.width = 300, n.height = 50, n.align = "center", n.valign = "middle", n.font = "Microsoft YaHei", n.fontSize = 40, n.color = "#FFFFFF", n.bold = !0, n.font = "Microsoft YaHei", n.text = "金币 +" + e, n.x = 60, n.y = 10, s.addChild(n), Laya.stage.addChild(s);
                var o = Laya.Tween.to(s, {
                    y: s.y - 200
                }, 1500, Laya.Ease.expoInOut, Laya.Handler.create(this, () => {
                    o.clear(), s.destroy(), i && i.run();
                }), 100);
            }
        }
        static TweenText(e, t, i = null, s = !0, a = 500) {
            var n = new Laya.Text();
            n.width = e.size.x, n.height = e.size.y, n.align = "center", n.valign = "middle", n.font = "Microsoft YaHei", n.fontSize = e.fontSize, n.pivotX = n.width / 2, n.pivotY = n.height / 2, n.color = "#5ad122", n.bold = !0, n.stroke = 5, n.strokeColor = "#ffffff", e.color && (e.color = e.color), n.text = e.message, n.zOrder = 1, Laya.stage.addChildAt(n, Laya.stage.numChildren - 1), n.pos(e.pos.x, e.pos.y);
            var o = Laya.Tween.to(n, {
                y: n.y - t,
                update: new Laya.Handler(this, function() {})
            }, a, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {
                o.clear(), s && n.destroy(), i && i.run();
            }));
            return s && Laya.Tween.to(n, {
                alpha: .4
            }, 500), n;
        }
        static StationTweenText(e, t, i = null, s = !0, a = 500) {
            var n = new Laya.Text();
            n.width = e.size.x, n.height = e.size.y, n.align = "center", n.valign = "middle", n.font = "Microsoft YaHei", n.fontSize = 50, n.pivotX = n.width / 2, n.pivotY = n.height / 2, n.color = "#5ad122", n.bold = !0, n.stroke = 5, n.strokeColor = "#ffffff", e.color && (e.color = e.color), n.text = e.message, n.zOrder = 1, Laya.stage.addChildAt(n, Laya.stage.numChildren - 1), n.pos(e.pos.x, e.pos.y);
            var o = Laya.Tween.to(n, {
                y: n.y - t,
                update: new Laya.Handler(this, function() {})
            }, a, Laya.Ease.expoInOut, Laya.Handler.create(this, function() {
                o.clear(), s && n.destroy(), i && i.run();
            }));
            return s && Laya.Tween.to(n, {
                alpha: .4
            }, 1e4), n;
        }
        static tweenMove(e, t, i, s, a) {
            let n = e.position.clone();
            return Laya.Tween.to(n, {
                x: t.x,
                y: t.y,
                z: t.z,
                update: new Laya.Handler(this, () => {
                    e.position = n.clone();
                })
            }, i, s, a);
        }
        static tweenRotate(e, t, i, s, a) {
            let n = e.rotationEuler.clone();
            return Laya.Tween.to(n, {
                x: t.x,
                y: t.y,
                z: t.z,
                update: new Laya.Handler(this, () => {
                    e.rotationEuler = n.clone();
                })
            }, i, s, a);
        }
    }! function(e) {
        e[e.buyed_kun = 0] = "buyed_kun", e[e.diamond = 1] = "diamond", e[e.equip_themes = 2] = "equip_themes", e[e.favorite_times = 3] = "favorite_times", e[e.game_times = 4] = "game_times", e[e.get_themes = 5] = "get_themes", e[e.list_kun = 6] = "list_kun", e[e.moeny = 7] = "moeny", e[e.progress_themes = 8] = "progress_themes", e[e.revival = 9] = "revival", e[e.stage = 10] = "stage";
    }(p || (p = {}));
    class u {
        constructor(e, t, i, s, a, n, o = null, r, h, l) {
            this.openid = "", this.userId = "", this.zhengshu = e, this.netzheshe = i, this.account = s, this.accountssss = a, this.qiandao = r, this.renwu = h, this.userId = this.account.user_id, this.openid = this.accountssss.openid, this.m_invite = n, this.lottery = l, console.log("user_id:" + this.userId);
        }
        GainCollocation(e) {
            return this.peizhis[e];
        }
        GainAccount(e) {
            return this.account[e];
        }
        SetAccount(e, s) {
            this.account[e] = s;
            Laya.LocalStorage.setJSON("account", this.account);
        }
        get fenxiang() {
            return "1" == this.netzheshe.share;
        }
        get Invincible() {
            return Number(this.netzheshe.Invincible);
        }
        get CheckScene() {
            return "1" == this.netzheshe.checkscene;
        }
        get Cheat() {
            return "1" == this.netzheshe.cheat;
        }
        get Banner() {
            return "1" == this.netzheshe.Banner;
        }
        get wudaoshijian() {
            return Number(this.netzheshe.wudaoshijian);
        }
        GetUser(e) {
            var t = p[e];
            return this.account[t];
        }
        Set1User(s) {
            this.account["equip_themes"][1] = s;
            Laya.LocalStorage.setJSON("account", this.account);
        }
        Set2User(s) {
            this.account["equip_themes"][2] = s;
            Laya.LocalStorage.setJSON("account", this.account);
        }
        AddUser(s) {
            this.account["get_themes"].push(s);
            Laya.LocalStorage.setJSON("account", this.account);
        }
        get NpcRunDistance() {
            return Number(this.netzheshe.NpcRunDistance);
        }
        get NpcAtkDistance() {
            return Number(this.netzheshe.NpcAtkDistance);
        }
        get NpcChaseDistance() {
            return Number(this.netzheshe.NpcChaseDistance);
        }
        get NpcRushDistance() {
            return Number(this.netzheshe.NpcRushDistance);
        }
        get BossAtkInterval() {
            return Number(this.netzheshe.BossAtkInterval);
        }
        get NpcSpeed() {
            return Number(this.netzheshe.NpcSpeed);
        }
        get HostageSpeed() {
            return Number(this.netzheshe.HostageSpeed);
        }
        get ArrowSpeed() {
            return Number(this.netzheshe.ArrowSpeed);
        }
        get BossDistance() {
            return Number(this.netzheshe.ArrowSpeed);
        }
        get BossSpeed() {
            return Number(this.netzheshe.BossSpeed);
        }
        get PlayerDamage() {
            return Number(this.netzheshe.PlayerDamage);
        }
        get MaxBossDistance() {
            return Number(this.netzheshe.MaxBossDistance);
        }
        get MinBossDistance() {
            return Number(this.netzheshe.MinBossDistance);
        }
        get ShareContent() {
            return this.netzheshe.sharecontent;
        }
        get DirRoatationLerp() {
            return Number(this.netzheshe.DirRoatationLerp);
        }
        get DirMoveLerp() {
            return Number(this.netzheshe.DirMoveLerp);
        }
        get CurTouchsmoothness() {
            return Number(this.netzheshe.curtouchsmoothness);
        }
        get CurTouchsize() {
            return Number(this.netzheshe.curtouchsize);
        }
        get NPCRushSpeed() {
            return Number(this.netzheshe.NPCRushSpeed);
        }
        get Range() {
            return Number(this.netzheshe.Range);
        }
        get CanStageShake() {
            return "1" == this.netzheshe.canstageshake;
        }
        GlobalData(e) {
            var t = [],
                i = this.GainCollocation("global");
            for (var s in i) t.push(i[s]);
            for (let i = 0; i < t.length; i++)
                if (e == t[i].key) return Number(t[i].value);
        }
        HasEquip(e) {
            for (var t = this.GainAccount("get_themes"), i = 0; i < t.length; i++) {
                if (e == t[i]) return !0;
            }
            return !1;
        }
        GetProgress(e) {
            var t = this.account.progress_themes;
            return t[e] ? t[e] : 0;
        }
        SetProgress(e) {
            var t = this.account.progress_themes;
            t[e]++;
            Laya.LocalStorage.setJSON("account", this.account);
        }
    }
    class y {}
    y.Creat = !1, y.ZSSdkCreat = !1;
    class w {
        constructor() {
            w.instance = this;
        }
        static get Instance() {
            return null == w.instance && (w.instance = new w()), w.instance;
        }
        kaishifengxiang(e) {
            w.kaishifengxiangshijian = new Date().getTime(), w.fengxiangzhong = !0, w.callback = e;
        }
        RegFenxiang() {
            null != Laya.Browser.window.wx && Laya.Browser.window.wx.onShow(function(e) {
                if (w.fengxiangzhong) {
                    w.fengxiangzhong = !1;
                    let e = (new Date().getTime() - w.kaishifengxiangshijian) / 1e3,
                        t = !1;
                    0 == (t = e >= 4 && (!(e < 6) || !(Math.random() > .7))) ? (Laya.Browser.window.wx.showToast({
                        title: "请重试一次"
                    }), w.callback(!1)) : (Laya.Browser.window.wx.showToast({
                        title: "分享成功"
                    }), w.callback(!0));
                }
            });
        }
    }
    w.fengxiangchenggongshijian = 0, w.fengxiangzhong = !1;
    class f {
        constructor() {
            f.ins = this;
        }
        static get Instance() {
            return f.ins ? f.ins : new f();
        }
        static Init() {}
        static DengLu(e) {
            var t = this;
            Laya.Browser.window.wx.login({
                success: function(i) {
                    i.code ? (w.Instance.RegFenxiang(), console.log("微信登陆成功----"), t.codeValue = i.code, console.log("shareid:" + f.shareOpenId), new ie(i.code, "", "", "", 0, "", "", "", "", f.shareOpenId, f.shareOpenId, J.Ver), e(i)) : (f.DengLu(f.DengLu), console.log("wx no code" + i.errMsg));
                },
                fail: function(e) {
                    console.log("wx.login: failed, res=" + e);
                }
            });
        }
        static ShowTxt(e) {
            Laya.Browser.onWeiXin ? Laya.Browser.window.wx.showToast({
                title: e
            }) : console.log(e);
        }
        static OnShow(e) {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.onShow(e);
        }
        static OffShow(e) {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.offShow(e);
        }
        static OnHide(e) {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.onHide(e);
        }
        static OffHide(e) {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.offHide(e);
        }
        static ShortShake() {
            Laya.Browser.window.wx.vibrateShort({});
        }
        static LongShake() {
            Laya.Browser.window.wx.vibrateLong({});
        }
        static Shake(e = !0) {
            Laya.Browser.onWeiXin && f.shake && (e ? this.ShortShake() : this.LongShake());
        }
        static LoadSubPackage(e, t) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.loadSubpackage({
                    name: "Game",
                    success: function(e) {
                        t && t(!0), console.log("分包加载成功");
                    },
                    fail: function(e) {
                        t && t(!1), console.log("分包加载失败");
                    }
                });
            } else console.log("未进行分包加载"), t && t(!0);
        }
        static stageShake(e = null, t = 32) {
            if (!this.isShake && this.canshakestage) {
                this.isShake = !0;
                var i = new Laya.Vector2(Laya.stage.x, Laya.stage.y);
                Laya.stage.timerLoop(t, this, this.shakeObject, [i, e]);
            }
        }
        static shakeObject(e, t) {
            var i = this.num++ % 4;
            this.offsetArr[this.num % 2] = i < 2 ? 0 : this.offset, Laya.stage.x = this.offsetArr[0] + e.x, Laya.stage.y = this.offsetArr[1] + e.y, this.num > 4 * this.times + 1 && (Laya.stage.clearTimer(this, this.shakeObject), Laya.stage.pos(0, 0), this.num = 0, this.isShake = !1, null != t && t());
        }
        static UpdateGuide(e = 0) {
            var t = new Array();
            let i = new Date().getTime();
            var s = JSON.stringify({
                guide: {
                    ShowGuide: e,
                    update_time: i.toString()
                }
            });
            t.push({
                key: "ShowGuide",
                value: s
            }), Laya.Browser.window.wx && Laya.Browser.window.wx.setUserCloudStorage({
                KVDataList: t,
                success: i => {
                    console.log("KVDATALIST---", t), console.log("上传新手指引成功:" + e);
                }
            });
        }
        static UpdateScore(e) {
            var t = new Array();
            let i = new Date().getTime();
            var s = JSON.stringify({
                wxgame: {
                    max_score: e,
                    update_time: i.toString()
                }
            });
            t.push({
                key: "max_score",
                value: s
            }), Laya.Browser.window.wx && Laya.Browser.window.wx.setUserCloudStorage({
                KVDataList: t,
                success: i => {
                    console.log("KVDATALIST---", t), console.log("上传分数成功:" + e);
                }
            });
        }
        static fengxiangtupian(e) {
            if (null != Laya.Browser.window.wx) {
                var t = ie.Instance.ServerTime;
                Laya.Browser.window.wx.aldShareAppMessage({
                    title: "有人@你，一起骑马仗箭走天涯",
                    imageUrl: "Game/res/textrue/share.jpg",
                    query: "userId=" + ie.Instance.curplayerData.userId + "_" + t + "_" + Math.floor(9999 * Math.random()).toString()
                });
            }
        }
        static ShareContent() {
            return ie.Instance.curplayerData.ShareContent;
        }
        static AldEvent(e, t = "用户id", i = "") {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.aldSendEvent(e, {
                key: i
            });
        }
        static AldStart(e) {
            Laya.Browser.onWeiXin && Laya.Browser.window.wx.aldStage.onStart({
                stageId: e,
                stageName: "第" + e + "关"
            });
        }
        static AldEnd(e, t) {
            if (!Laya.Browser.onWeiXin) return;
            let i = t ? "complete" : "fail",
                s = t ? "关卡完成" : "关卡失败";
            Laya.Browser.window.wx.aldStage.onEnd({
                stageId: e,
                stageName: "第" + e + "关",
                event: i,
                params: {
                    desc: s
                }
            });
        }
    }
    f.codeValue = "", f.shareOpenId = "", f.openId = 0, f.shareScene = "", f.uid = "123", f.querychannel = "", f.referrerInfoappId = "", f.shake = !0, f.times = 1.3, f.num = 0, f.offsetArr = [0, 0], f.offset = 14, f.canshakestage = !1;
    var v, I, L, x, S = Laya.ClassUtils.regClass;
    ! function(e) {
        class t extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(t.uiView);
            }
        }
        t.uiView = {
            type: "Scene",
            props: {
                width: 720,
                height: 1280
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    var: "BG",
                    top: 0,
                    skin: "Main/chunhei.png",
                    sizeGrid: "12,13,17,12",
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 3
            }, {
                type: "ProgressBar",
                props: {
                    y: 640,
                    x: 373.5,
                    width: 399,
                    var: "jindu",
                    value: 0,
                    skin: "Push/-3.png",
                    pivotY: 10,
                    pivotX: 200,
                    height: 19
                },
                compId: 4,
                child: [{
                    type: "Text",
                    props: {
                        y: -32,
                        x: 199.5,
                        width: 344,
                        valign: "middle",
                        text: "进度",
                        pivotY: 26,
                        pivotX: 172,
                        height: 51,
                        fontSize: 30,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 17
                }]
            }, {
                type: "Image",
                props: {
                    y: 255,
                    x: 239,
                    var: "loseimage",
                    skin: "Push/-2.png"
                },
                compId: 21
            }, {
                type: "Image",
                props: {
                    y: 302,
                    x: 165,
                    var: "winimage",
                    skin: "Push/1.png"
                },
                compId: 22
            }, {
                type: "Button",
                props: {
                    x: 373.5,
                    width: 297,
                    var: "HitBtn",
                    stateNum: 1,
                    pivotY: 60,
                    pivotX: 149,
                    height: 120,
                    bottom: 10
                },
                compId: 6,
                child: [{
                    type: "Text",
                    props: {
                        y: -39,
                        x: 148.5,
                        width: 258,
                        valign: "middle",
                        text: "连续点击领取奖励",
                        pivotY: 25,
                        pivotX: 129,
                        name: "desc",
                        height: 49,
                        fontSize: 30,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 18
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "Push/2.png",
                        name: "win"
                    },
                    compId: 24
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "Push/-1.png",
                        name: "lose"
                    },
                    compId: 25
                }, {
                    type: "Image",
                    props: {
                        y: -100.5,
                        x: 262,
                        skin: "Main/kuangdian-2.png"
                    },
                    compId: 19
                }, {
                    type: "Image",
                    props: {
                        y: 12,
                        x: 220.5,
                        var: "finger",
                        skin: "Main/kuangdian-1.png"
                    },
                    compId: 20
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    visible: !0,
                    right: 0,
                    name: "BottomBox",
                    left: 0,
                    height: 177,
                    bottom: 397
                },
                compId: 7,
                child: [{
                    type: "Image",
                    props: {
                        width: 720,
                        top: 0,
                        skin: "Main/chunhei.png",
                        sizeGrid: "12,11,13,10",
                        right: 0,
                        name: "BG",
                        left: 0,
                        height: 183,
                        bottom: 0
                    },
                    compId: 8
                }, {
                    type: "List",
                    props: {
                        width: 720,
                        var: "BottomList",
                        spaceX: 30,
                        right: 0,
                        repeatY: 1,
                        left: 0,
                        height: 176,
                        bottom: 0
                    },
                    compId: 9,
                    child: [{
                        type: "Box",
                        props: {
                            y: 8,
                            x: 18,
                            width: 130,
                            renderType: "render",
                            height: 160
                        },
                        compId: 10,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 129,
                                skin: "Push/bg-box.png",
                                sizeGrid: "27,27,37,20",
                                name: "BG",
                                height: 159
                            },
                            compId: 11
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 130,
                                name: "icon",
                                height: 130
                            },
                            compId: 12
                        }, {
                            type: "Text",
                            props: {
                                y: 130,
                                x: 0,
                                width: 126,
                                valign: "middle",
                                text: "冲冲冲冲冲冲",
                                name: "name",
                                height: 29,
                                fontSize: 20,
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 13
                        }, {
                            type: "Button",
                            props: {
                                y: 0,
                                x: 0,
                                width: 130,
                                name: "btn",
                                height: 160
                            },
                            compId: 14
                        }, {
                            type: "Script",
                            props: {
                                runtime: "Tools/ListItem.ts"
                            },
                            compId: 15
                        }]
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 20,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 5
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 10
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 20
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 25
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 5
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 10
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 20
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 25
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 20,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "click",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["Main/chunhei.png", "Push/-3.png", "Push/-2.png", "Push/1.png", "Push/2.png", "Push/-1.png", "Main/kuangdian-2.png", "Main/kuangdian-1.png", "Push/bg-box.png"],
            loadList3D: []
        }, e.BannerViewUI = t, S("ui.BannerViewUI", t);
        class i extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Image",
                "props": {
                    "top": 0,
                    "skin": "Main/chunhei.png",
                    "sizeGrid": "12,14,15,10",
                    "right": 0,
                    "name": "BG",
                    "left": 0,
                    "bottom": 0
                },
                "compId": 14
            }, {
                "type": "Image",
                "props": {
                    "y": 265,
                    "x": 360,
                    "width": 193,
                    "var": "winimage",
                    "skin": "Main/shenglijiemian-1-1.png",
                    "pivotY": 114,
                    "pivotX": 97,
                    "height": 227
                },
                "compId": 4
            }, {
                "type": "Image",
                "props": {
                    "y": 266,
                    "x": 361,
                    "width": 191,
                    "var": "loseimage",
                    "skin": "Main/shibai-1-1.png",
                    "pivotY": 114,
                    "pivotX": 96,
                    "height": 227
                },
                "compId": 5
            }, {
                "type": "Image",
                "props": {
                    "y": 235.5,
                    "var": "reviveimage",
                    "skin": "Main/fuhuo-1-1.png",
                    "centerX": 1
                },
                "compId": 7
            }, {
                "type": "Box",
                "props": {
                    "y": 435,
                    "x": 360,
                    "width": 249,
                    "pivotY": 43,
                    "pivotX": 125,
                    "height": 85
                },
                "compId": 12,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 11.5,
                        "x": 0,
                        "skin": "Main/zhujiemian-1-8.png"
                    },
                    "compId": 11
                }, {
                    "type": "Text",
                    "props": {
                        "y": 41,
                        "x": 156,
                        "width": 201,
                        "var": "goldnum",
                        "valign": "middle",
                        "text": "999",
                        "runtime": "laya.display.Text",
                        "pivotY": 31,
                        "pivotX": 101,
                        "height": 62,
                        "fontSize": 50,
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    },
                    "compId": 13
                }]
            }, {
                "type": "List",
                "props": {
                    "y": 1208,
                    "x": 361,
                    "width": 674,
                    "var": "PushList",
                    "spaceY": 10,
                    "spaceX": 10,
                    "pivotY": 62,
                    "pivotX": 337,
                    "height": 124
                },
                "compId": 18,
                "child": [{
                    "type": "Box",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 160,
                        "renderType": "render",
                        "name": "render",
                        "height": 120
                    },
                    "compId": 19,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "top": 0,
                            "right": 0,
                            "pivotY": 75,
                            "pivotX": 75,
                            "name": "thumb",
                            "left": 0,
                            "bottom": 0
                        },
                        "compId": 20
                    }]
                }]
            }, {
                "type": "Box",
                "props": {
                    "x": 360,
                    "width": 330,
                    "var": "BtnBox",
                    "pivotY": 124,
                    "pivotX": 165,
                    "height": 222,
                    "bottom": 303
                },
                "compId": 28,
                "child": [{
                    "type": "Button",
                    "props": {
                        "y": 84,
                        "x": 162,
                        "width": 313,
                        "var": "NextLevelBtn",
                        "stateNum": 1,
                        "skin": "Main/shenglijiemian-1-2.png",
                        "pivotY": 58,
                        "pivotX": 157,
                        "height": 116
                    },
                    "compId": 8
                }, {
                    "type": "Button",
                    "props": {
                        "y": 84,
                        "x": 165,
                        "width": 313,
                        "var": "ReviveBtn",
                        "stateNum": 1,
                        "skin": "Main/fuhuo-1-2.png",
                        "pivotY": 58,
                        "pivotX": 157,
                        "height": 116
                    },
                    "compId": 9
                }, {
                    "type": "Button",
                    "props": {
                        "y": 84,
                        "x": 165,
                        "width": 313,
                        "var": "TryAgainBtn",
                        "stateNum": 1,
                        "skin": "Main/shibai-1-2.png",
                        "pivotY": 58,
                        "pivotX": 157,
                        "height": 116
                    },
                    "compId": 10
                }, {
                    "type": "Button",
                    "props": {
                        "y": 192,
                        "x": 165,
                        "width": 172,
                        "var": "NoBtn",
                        "stateNum": 1,
                        "skin": "Main/fuhuo-1-3.png",
                        "pivotY": 20,
                        "pivotX": 86,
                        "height": 39
                    },
                    "compId": 15
                }]
            }, {
                "type": "Image",
                "props": {
                    "var": "Logo",
                    "skin": "Main/yad.png",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "centerX": 1,
                    "bottom": 140
                },
                "compId": 63
            }],
            "animations": [{
                "nodes": [{
                    "target": 34,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 34,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 34,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 34,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }, {
                    "target": 43,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 43,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 43,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 43,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }, {
                    "target": 47,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 47,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 47,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 47,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }, {
                    "target": 51,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 51,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 51,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 51,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }, {
                    "target": 55,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 55,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 55,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 55,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }, {
                    "target": 59,
                    "keyframes": {
                        "rotation": [{
                            "value": 0,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 59,
                            "key": "rotation",
                            "index": 0
                        }, {
                            "value": 180,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 59,
                            "key": "rotation",
                            "index": 8
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 59,
                            "key": "rotation",
                            "index": 16
                        }]
                    }
                }],
                "name": "flipani",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }],
            "loadList": ["Main/chunhei.png", "Main/shenglijiemian-1-1.png", "Main/shibai-1-1.png", "Main/fuhuo-1-1.png", "Main/zhujiemian-1-8.png", "Push/icon-hot.png", "Push/bg-box.png", "Main/shenglijiemian-1-2.png", "Main/fuhuo-1-2.png", "Main/shibai-1-2.png", "Main/no.png", "Main/fuhuo-1-3.png", "Main/yad.png"],
            "loadList3D": []
        }, e.CompleteViewUI = i, S("ui.CompleteViewUI", i);
        class s extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "Scene",
            props: {
                width: 720,
                height: 1280
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "Push/hutui-1-4.png",
                    sizeGrid: "16,16,14,14",
                    right: 0,
                    name: "BG",
                    left: 0,
                    bottom: 0
                },
                compId: 5
            }, {
                type: "Image",
                props: {
                    x: 0,
                    width: 720,
                    top: 0,
                    skin: "Push/hutui-1-3.png",
                    height: 131
                },
                compId: 4,
                child: [{
                    type: "Text",
                    props: {
                        y: 84,
                        x: 360,
                        width: 135,
                        valign: "middle",
                        text: "小程序",
                        pivotY: 31,
                        pivotX: 68,
                        height: 61,
                        fontSize: 35,
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 6
                }, {
                    type: "Text",
                    props: {
                        y: 154,
                        x: 56,
                        width: 92,
                        valign: "middle",
                        text: "最近使用",
                        pivotY: 18,
                        pivotX: 46,
                        height: 36,
                        fontSize: 23,
                        color: "#5d5353",
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 8
                }]
            }, {
                type: "Button",
                props: {
                    y: 66,
                    x: 37,
                    width: 66,
                    var: "CloseBtn",
                    pivotY: 41,
                    pivotX: 33,
                    height: 81
                },
                compId: 7
            }, {
                type: "List",
                props: {
                    x: 360,
                    width: 656,
                    var: "PushList",
                    top: 180,
                    spaceY: 15,
                    bottom: 0,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 9,
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        width: 630,
                        right: 26,
                        renderType: "render",
                        height: 130
                    },
                    compId: 10,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 130,
                            name: "icon",
                            height: 130
                        },
                        compId: 11
                    }, {
                        type: "Text",
                        props: {
                            y: 0,
                            x: 138,
                            width: 485,
                            valign: "middle",
                            text: "冲冲冲冲",
                            name: "name",
                            height: 130,
                            fontSize: 30,
                            align: "left",
                            runtime: "laya.display.Text"
                        },
                        compId: 12
                    }, {
                        type: "Image",
                        props: {
                            y: 65,
                            x: 598.5,
                            width: 49,
                            skin: "Push/hutui-1-1.png",
                            pivotY: 23,
                            pivotX: 25,
                            name: "star",
                            height: 46
                        },
                        compId: 13
                    }, {
                        type: "Button",
                        props: {
                            top: 0,
                            right: 0,
                            name: "btn",
                            left: 0,
                            bottom: 0
                        },
                        compId: 14
                    }, {
                        type: "Script",
                        props: {
                            runtime: "Tools/ListItem.ts"
                        },
                        compId: 15
                    }]
                }]
            }],
            loadList: ["Push/hutui-1-4.png", "Push/hutui-1-3.png", "Push/hutui-1-1.png"],
            loadList3D: []
        }, e.ExitViewUI = s, S("ui.ExitViewUI", s);
        class a extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Image",
                "props": {
                    "top": 0,
                    "skin": "Main/chunhei2.png",
                    "sizeGrid": "25,16,29,14",
                    "right": 0,
                    "name": "BG",
                    "left": 0,
                    "bottom": 0
                },
                "compId": 3
            }, {
                "type": "List",
                "props": {
                    "y": 154,
                    "width": 650,
                    "var": "VList",
                    "spaceY": 10,
                    "spaceX": 10,
                    "height": 747,
                    "centerX": 0
                },
                "compId": 14,
                "child": [{
                    "type": "Box",
                    "props": {
                        "y": 10,
                        "x": 0,
                        "width": 320,
                        "renderType": "render",
                        "name": "render",
                        "height": 240
                    },
                    "compId": 15,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "top": 0,
                            "skin": "Push/bg-box.png",
                            "sizeGrid": "24,27,42,16",
                            "right": 0,
                            "name": "thumb",
                            "left": 0,
                            "bottom": 0
                        },
                        "compId": 16
                    }]
                }]
            }, {
                "type": "Button",
                "props": {
                    "width": 349,
                    "var": "CloseExportBtn",
                    "stateNum": 1,
                    "skin": "Push/btn-continue-new.png",
                    "pivotY": 80,
                    "pivotX": 175,
                    "height": 160,
                    "centerX": 0,
                    "bottom": 125
                },
                "compId": 22
            }],
            "loadList": ["Main/chunhei2.png", "Push/bg-box.png", "Push/title-friend.png", "Push/title-recommend.png", "Push/icon-hot.png", "Push/btn-continue-new.png"],
            "loadList3D": []
        }, e.ExportViewUI = a, S("ui.ExportViewUI", a);
        class n extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "ProgressBar",
                "props": {
                    "y": 142,
                    "x": 44,
                    "var": "GoalProgress",
                    "skin": "Main/zhujiemian-1-4.png"
                },
                "compId": 7,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 120,
                        "valign": "middle",
                        "text": "0",
                        "strokeColor": "#050404",
                        "stroke": 2,
                        "runtime": "laya.display.Text",
                        "name": "goal",
                        "height": 46,
                        "fontSize": 36,
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    },
                    "compId": 10
                }, {
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": -18,
                        "skin": "Main/zhujiemian-1-10.png"
                    },
                    "compId": 11
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 137,
                    "x": 620,
                    "width": 201,
                    "pivotY": 25,
                    "pivotX": 101,
                    "height": 50
                },
                "compId": 9,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 23,
                        "x": 121,
                        "width": 160,
                        "skin": "Main/zhujiemian-1-9.png",
                        "pivotY": 23,
                        "pivotX": 80,
                        "height": 46
                    },
                    "compId": 14
                }, {
                    "type": "Image",
                    "props": {
                        "y": -4,
                        "x": 12,
                        "skin": "Main/zhujiemian-1-8.png"
                    },
                    "compId": 15
                }, {
                    "type": "Text",
                    "props": {
                        "y": 0,
                        "x": 65,
                        "width": 137,
                        "var": "GoldNum",
                        "valign": "middle",
                        "text": "9999",
                        "runtime": "laya.display.Text",
                        "height": 46,
                        "fontSize": 30,
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 16
                }]
            }, {
                "type": "Box",
                "props": {
                    "x": 360,
                    "width": 568,
                    "var": "Guide1",
                    "height": 282,
                    "bottom": 350,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "compId": 17,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 141,
                        "x": 284,
                        "width": 506,
                        "skin": "Main/-2.png",
                        "pivotY": 9,
                        "pivotX": 253,
                        "height": 18
                    },
                    "compId": 19
                }, {
                    "type": "Image",
                    "props": {
                        "y": 208,
                        "x": 55,
                        "width": 348,
                        "skin": "Main/Hand.png",
                        "scaleY": 0.3,
                        "scaleX": 0.3,
                        "pivotY": 258,
                        "pivotX": 174,
                        "height": 485
                    },
                    "compId": 18
                }, {
                    "type": "Text",
                    "props": {
                        "y": 67,
                        "x": 284,
                        "wordWrap": true,
                        "width": 559,
                        "valign": "middle",
                        "text": "slide left and right to move",
                        "strokeColor": "01361e",
                        "stroke": 3,
                        "runtime": "laya.display.Text",
                        "pivotY": 51,
                        "pivotX": 280,
                        "height": 102,
                        "fontSize": 40,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 20
                }]
            }, {
                "type": "Box",
                "props": {
                    "x": 360,
                    "width": 510,
                    "var": "Guide2",
                    "pivotY": 96,
                    "pivotX": 255,
                    "height": 192,
                    "bottom": 341
                },
                "compId": 21,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 118,
                        "x": 255,
                        "wordWrap": true,
                        "width": 453,
                        "valign": "middle",
                        "text": "Move left and right to aim and release",
                        "strokeColor": "01361e",
                        "stroke": 3,
                        "runtime": "laya.display.Text",
                        "pivotY": 74,
                        "pivotX": 227,
                        "overflow": "hidden",
                        "height": 148,
                        "fontSize": 45,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 24
                }]
            }, {
                "type": "Box",
                "props": {
                    "x": 360,
                    "width": 510,
                    "var": "Guide3",
                    "pivotY": 96,
                    "pivotX": 255,
                    "height": 192,
                    "bottom": 350
                },
                "compId": 27,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 126,
                        "x": 255,
                        "wordWrap": true,
                        "width": 402,
                        "valign": "middle",
                        "text": "shoot the fence to destroy it",
                        "strokeColor": "01361e",
                        "stroke": 3,
                        "runtime": "laya.display.Text",
                        "pivotY": 74,
                        "pivotX": 201,
                        "overflow": "hidden",
                        "height": 148,
                        "fontSize": 45,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 28
                }]
            }, {
                "type": "Box",
                "props": {
                    "x": 360,
                    "width": 510,
                    "var": "Guide4",
                    "pivotY": 96,
                    "pivotX": 255,
                    "height": 192,
                    "bottom": 350
                },
                "compId": 30,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 128,
                        "x": 255,
                        "wordWrap": true,
                        "width": 581,
                        "valign": "middle",
                        "text": "Protect blue allies by shooting yellow enemies",
                        "strokeColor": "01361e",
                        "stroke": 3,
                        "runtime": "laya.display.Text",
                        "pivotY": 74,
                        "pivotX": 291,
                        "overflow": "hidden",
                        "height": 148,
                        "fontSize": 45,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 31
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "var": "Logo",
                    "skin": "Main/yad.png",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "centerX": 0,
                    "bottom": 10
                },
                "compId": 47
            }],
            "animations": [{
                "nodes": [{
                    "target": 18,
                    "keyframes": {
                        "y": [{
                            "value": 208,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 0
                        }, {
                            "value": 209,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 5
                        }, {
                            "value": 210,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 10
                        }, {
                            "value": 209,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 15
                        }, {
                            "value": 210,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 25
                        }, {
                            "value": 209,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 30
                        }, {
                            "value": 210,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "y",
                            "index": 35
                        }],
                        "x": [{
                            "value": 55,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 0
                        }, {
                            "value": 144,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 5
                        }, {
                            "value": 272,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 10
                        }, {
                            "value": 394,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 15
                        }, {
                            "value": 537,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 20
                        }, {
                            "value": 453,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 25
                        }, {
                            "value": 344,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 30
                        }, {
                            "value": 212,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 35
                        }, {
                            "value": 55,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 18,
                            "key": "x",
                            "index": 40
                        }]
                    }
                }],
                "name": "ani1",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [],
                "name": "lefticon",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [],
                "name": "righticon",
                "id": 3,
                "frameRate": 24,
                "action": 0
            }],
            "loadList": ["Main/zhujiemian-1-4.png", "Main/zhujiemian-1-10.png", "Main/zhujiemian-1-9.png", "Main/zhujiemian-1-8.png", "Main/-2.png", "Main/Hand.png", "Main/chunhei.png", "Push/bg-box.png", "Main/white.png", "Main/yad.png"],
            "loadList3D": []
        }, e.InGameViewUI = n, S("ui.InGameViewUI", n);
        class o extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(o.uiView);
            }
        }
        o.uiView = {
            type: "Scene",
            props: {
                width: 720,
                height: 1280
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "Load/jiazai-1-4.png",
                    sizeGrid: "13,13,15,13",
                    right: 0,
                    name: "BG",
                    left: 0,
                    bottom: 0
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    y: 357,
                    x: 360,
                    width: 445,
                    skin: "Load/jiazai-1-1.png",
                    pivotY: 74,
                    pivotX: 223,
                    name: "title",
                    height: 147
                },
                compId: 5
            }, {
                type: "ProgressBar",
                props: {
                    y: 842,
                    x: 360,
                    width: 506,
                    var: "LoadProgress",
                    value: 0,
                    skin: "Load/jiazai-1-3.png",
                    pivotY: 9,
                    pivotX: 253,
                    height: 18
                },
                compId: 6
            }],
            loadList: ["Load/jiazai-1-4.png", "Load/jiazai-1-1.png", "Load/jiazai-1-3.png"],
            loadList3D: []
        }, e.LoadViewUI = o, S("ui.LoadViewUI", o);
        class r extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Button",
                "props": {
                    "y": 958.5,
                    "x": 360,
                    "width": 313,
                    "visible": true,
                    "var": "StartBtn",
                    "stateNum": 1,
                    "skin": "Main/zhujiemian-1-3.png",
                    "pivotY": 58,
                    "pivotX": 157,
                    "height": 116
                },
                "compId": 7
            }, {
                "type": "Button",
                "props": {
                    "y": 940,
                    "width": 156,
                    "visible": true,
                    "var": "SkinBtn",
                    "stateNum": 1,
                    "skin": "Main/zhujiemian-1-2.png",
                    "right": -3,
                    "pivotY": 77,
                    "pivotX": 78,
                    "height": 153
                },
                "compId": 9
            }, {
                "type": "ProgressBar",
                "props": {
                    "y": 107,
                    "x": 47,
                    "var": "GoalProgress",
                    "value": 0,
                    "skin": "Main/zhujiemian-1-4.png"
                },
                "compId": 11,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 120,
                        "valign": "middle",
                        "text": "5",
                        "strokeColor": "#050404",
                        "stroke": 2,
                        "runtime": "laya.display.Text",
                        "name": "goal",
                        "height": 46,
                        "fontSize": 36,
                        "color": "#ffffff",
                        "bold": true,
                        "align": "center"
                    },
                    "compId": 12
                }, {
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": -18,
                        "skin": "Main/zhujiemian-1-10.png"
                    },
                    "compId": 13
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 229.5,
                    "x": 70,
                    "width": 100,
                    "var": "SoundBox",
                    "pivotY": 50,
                    "pivotX": 50,
                    "height": 100
                },
                "compId": 16,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "width": 83,
                        "visible": false,
                        "skin": "Main/zhujiemian-1-6.png",
                        "pivotY": 42,
                        "pivotX": 42,
                        "name": "shake",
                        "height": 83
                    },
                    "compId": 17
                }, {
                    "type": "Image",
                    "props": {
                        "y": 50,
                        "x": 50,
                        "width": 83,
                        "skin": "Main/zhujiemian-1-7.png",
                        "pivotY": 42,
                        "pivotX": 42,
                        "name": "sound",
                        "height": 83
                    },
                    "compId": 18
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 137,
                    "x": 620,
                    "width": 201,
                    "pivotY": 25,
                    "pivotX": 101,
                    "height": 50
                },
                "compId": 19,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 23,
                        "x": 121,
                        "width": 160,
                        "skin": "Main/zhujiemian-1-9.png",
                        "pivotY": 23,
                        "pivotX": 80,
                        "height": 46
                    },
                    "compId": 20
                }, {
                    "type": "Image",
                    "props": {
                        "y": -4,
                        "x": 12,
                        "skin": "Main/zhujiemian-1-8.png"
                    },
                    "compId": 21
                }, {
                    "type": "Text",
                    "props": {
                        "y": 0,
                        "x": 65,
                        "width": 137,
                        "var": "GoldNum",
                        "valign": "middle",
                        "text": "9999",
                        "runtime": "laya.display.Text",
                        "height": 46,
                        "fontSize": 30,
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 22
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 129.5,
                    "x": 360,
                    "width": 208,
                    "pivotY": 50,
                    "pivotX": 104,
                    "height": 100
                },
                "compId": 23,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 50,
                        "x": 73,
                        "width": 135,
                        "valign": "middle",
                        "text": "Level",
                        "strokeColor": "033f22",
                        "stroke": 4,
                        "runtime": "laya.display.Text",
                        "pivotY": 33,
                        "pivotX": 68,
                        "height": 66,
                        "fontSize": 50,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 24
                }, {
                    "type": "Text",
                    "props": {
                        "y": 50,
                        "x": 173.5,
                        "width": 69,
                        "var": "LevelNum",
                        "valign": "middle",
                        "text": "99",
                        "strokeColor": "033f22",
                        "stroke": 4,
                        "runtime": "laya.display.Text",
                        "pivotY": 33,
                        "pivotX": 35,
                        "height": 66,
                        "fontSize": 50,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 25
                }]
            }, {
                "type": "Image",
                "props": {
                    "var": "Logo",
                    "skin": "Main/yad.png",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "centerX": 0,
                    "bottom": 10
                },
                "compId": 59
            }],
            "animations": [{
                "nodes": [{
                    "target": 35,
                    "keyframes": {
                        "y": [{
                            "value": 560,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 35,
                            "key": "y",
                            "index": 0
                        }],
                        "x": [{
                            "value": -267.5,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 35,
                            "key": "x",
                            "index": 0
                        }, {
                            "value": 360,
                            "tweenMethod": "linearNone",
                            "tween": true,
                            "target": 35,
                            "key": "x",
                            "index": 15
                        }]
                    }
                }],
                "name": "chouti",
                "id": 1,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [],
                "name": "lefticon",
                "id": 2,
                "frameRate": 24,
                "action": 0
            }, {
                "nodes": [],
                "name": "righticon",
                "id": 3,
                "frameRate": 24,
                "action": 0
            }],
            "loadList": ["Main/zhujiemian-1-3.png", "Main/zhujiemian-1-2.png", "Main/zhujiemian-1-1.png", "Main/zhujiemian-1-4.png", "Main/zhujiemian-1-10.png", "Main/zhujiemian-1-6.png", "Main/zhujiemian-1-7.png", "Main/zhujiemian-1-9.png", "Main/zhujiemian-1-8.png", "Main/chunhei.png", "Push/bg-box.png", "Main/white.png", "Push/index-box.png", "Push/index-hot.png", "Push/index-close.png", "Push/img_cover_slide_ad_btn.png", "Main/yad.png"],
            "loadList3D": []
        }, e.MainGameViewUI = r, S("ui.MainGameViewUI", r);
        class h extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(h.uiView);
            }
        }
        h.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "top": 0,
                    "skin": "Main/chunhei.png",
                    "sizeGrid": "10,13,13,9",
                    "right": 0,
                    "name": "BG",
                    "left": 0,
                    "bottom": 0
                },
                "compId": 22
            }, {
                "type": "Image",
                "props": {
                    "y": 601,
                    "x": 360,
                    "width": 658,
                    "skin": "Main/pifu-1-1.png",
                    "sizeGrid": "63,62,62,55",
                    "height": 765,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "compId": 4,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 64,
                        "x": 24,
                        "width": 615,
                        "skin": "Main/pifu-1-2.png",
                        "sizeGrid": "42,33,67,30",
                        "height": 675
                    },
                    "compId": 5
                }, {
                    "type": "Button",
                    "props": {
                        "y": 3,
                        "x": 148.5,
                        "width": 183,
                        "var": "CharacterBtn",
                        "height": 61
                    },
                    "compId": 7,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 1,
                            "x": 0,
                            "skin": "Main/pifu-1-4.png",
                            "name": "grey"
                        },
                        "compId": 10
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 1,
                            "x": 0,
                            "skin": "Main/pifu-1-3.png",
                            "name": "light"
                        },
                        "compId": 9
                    }, {
                        "type": "Text",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 182,
                            "valign": "middle",
                            "text": "Hat",
                            "strokeColor": "#060606",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "height": 63,
                            "fontSize": 40,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "compId": 15
                    }]
                }, {
                    "type": "Button",
                    "props": {
                        "y": 3,
                        "x": 332,
                        "width": 181,
                        "var": "HorseBtn",
                        "height": 60
                    },
                    "compId": 8,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 1,
                            "x": 0,
                            "skin": "Main/pifu-1-4.png",
                            "name": "grey"
                        },
                        "compId": 14
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 1,
                            "x": 0,
                            "visible": false,
                            "skin": "Main/pifu-1-3.png",
                            "name": "light"
                        },
                        "compId": 13
                    }, {
                        "type": "Text",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 182,
                            "valign": "middle",
                            "text": "Horse",
                            "strokeColor": "#060606",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "height": 63,
                            "fontSize": 40,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "bold": true,
                            "align": "center"
                        },
                        "compId": 16
                    }]
                }]
            }, {
                "type": "List",
                "props": {
                    "y": 526,
                    "x": 360,
                    "width": 532,
                    "var": "ItemList",
                    "spaceY": 10,
                    "spaceX": 12,
                    "repeatY": 2,
                    "repeatX": 3,
                    "height": 415,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "compId": 17,
                "child": [{
                    "type": "Box",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 167,
                        "renderType": "render",
                        "height": 199
                    },
                    "compId": 18,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 2,
                            "width": 165,
                            "skin": "Main/pifu-1-6.png",
                            "sizeGrid": "37,27,50,28",
                            "height": 197
                        },
                        "compId": 19
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 170,
                            "skin": "Main/pifu-1-5.png",
                            "sizeGrid": "39,33,41,36",
                            "name": "choose",
                            "height": 198
                        },
                        "compId": 20
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 78,
                            "x": 83.5,
                            "width": 127,
                            "pivotY": 61,
                            "pivotX": 64,
                            "name": "icon",
                            "height": 121
                        },
                        "compId": 47
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 169,
                            "name": "btn",
                            "height": 197
                        },
                        "compId": 43
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 154,
                            "x": 51,
                            "skin": "Main/pifu-1-10.png",
                            "name": "used"
                        },
                        "compId": 45
                    }, {
                        "type": "Script",
                        "props": {
                            "runtime": "Tools/ShopItem.ts"
                        },
                        "compId": 46
                    }]
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 45,
                    "x": 48,
                    "var": "BackBtn",
                    "stateNum": 1,
                    "skin": "Main/pifu-1-7.png"
                },
                "compId": 21
            }, {
                "type": "Button",
                "props": {
                    "y": 870,
                    "x": 496,
                    "width": 243,
                    "var": "VideoGetCoinBtn",
                    "stateNum": 1,
                    "skin": "Main/pifu-1-9.png",
                    "pivotY": 46,
                    "pivotX": 122,
                    "height": 92
                },
                "compId": 23,
                "child": [{
                    "type": "Text",
                    "props": {
                        "y": 46,
                        "x": 180,
                        "width": 102,
                        "valign": "middle",
                        "text": "200",
                        "stroke": 2,
                        "runtime": "laya.display.Text",
                        "pivotY": 33,
                        "pivotX": 51,
                        "name": "CoinNum",
                        "height": 65,
                        "fontSize": 45,
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 24
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 870,
                    "x": 216,
                    "var": "GetBtn",
                    "stateNum": 1,
                    "skin": "Main/pifu-1-8.png",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                },
                "compId": 25,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 45,
                        "x": 122,
                        "width": 235,
                        "name": "GetByCoin",
                        "height": 84,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 26,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 13,
                            "x": 22,
                            "skin": "Main/zhujiemian-1-8.png"
                        },
                        "compId": 27
                    }, {
                        "type": "Text",
                        "props": {
                            "y": 45.5,
                            "x": 150,
                            "width": 142,
                            "valign": "middle",
                            "text": "99999",
                            "strokeColor": "#030303",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "pivotY": 26,
                            "pivotX": 71,
                            "name": "CoinNum",
                            "height": 51,
                            "fontSize": 45,
                            "color": "#ffffff",
                            "align": "center"
                        },
                        "compId": 28
                    }]
                }, {
                    "type": "Image",
                    "props": {
                        "y": 45,
                        "x": 122,
                        "width": 235,
                        "name": "GetByVideo",
                        "height": 84,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 30,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 21.5,
                            "x": 56,
                            "skin": "Main/pifu-1-11.png"
                        },
                        "compId": 31
                    }, {
                        "type": "Text",
                        "props": {
                            "y": 42,
                            "x": 150,
                            "width": 142,
                            "valign": "middle",
                            "text": "1/3",
                            "strokeColor": "#030303",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "pivotY": 26,
                            "pivotX": 71,
                            "name": "VideoNum",
                            "height": 51,
                            "fontSize": 45,
                            "color": "#ffffff",
                            "align": "center"
                        },
                        "compId": 32
                    }]
                }, {
                    "type": "Image",
                    "props": {
                        "y": 46,
                        "x": 122,
                        "width": 243,
                        "name": "GetByActive",
                        "height": 91,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 33,
                    "child": [{
                        "type": "Text",
                        "props": {
                            "y": 42,
                            "x": 117,
                            "width": 232,
                            "valign": "middle",
                            "text": "ByActive",
                            "strokeColor": "#030303",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "pivotY": 33,
                            "pivotX": 116,
                            "name": "ByActive",
                            "height": 76,
                            "fontSize": 45,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "align": "center"
                        },
                        "compId": 35
                    }]
                }, {
                    "type": "Image",
                    "props": {
                        "y": 45,
                        "x": 122,
                        "width": 235,
                        "name": "Geted",
                        "height": 84,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "compId": 39,
                    "child": [{
                        "type": "Text",
                        "props": {
                            "y": 42,
                            "x": 117,
                            "width": 232,
                            "valign": "middle",
                            "text": "Choose",
                            "strokeColor": "#030303",
                            "stroke": 2,
                            "runtime": "laya.display.Text",
                            "pivotY": 33,
                            "pivotX": 116,
                            "name": "Get",
                            "height": 76,
                            "fontSize": 45,
                            "font": "Microsoft YaHei",
                            "color": "#ffffff",
                            "align": "center"
                        },
                        "compId": 40
                    }]
                }, {
                    "type": "Text",
                    "props": {
                        "y": 51,
                        "x": 122,
                        "width": 232,
                        "valign": "middle",
                        "text": "Using",
                        "strokeColor": "#030303",
                        "stroke": 2,
                        "runtime": "laya.display.Text",
                        "pivotY": 43,
                        "pivotX": 116,
                        "name": "Using",
                        "height": 80,
                        "fontSize": 45,
                        "font": "Microsoft YaHei",
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 42
                }]
            }, {
                "type": "Box",
                "props": {
                    "y": 86.5,
                    "x": 606,
                    "width": 201,
                    "pivotY": 25,
                    "pivotX": 101,
                    "height": 50
                },
                "compId": 48,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 23,
                        "x": 121,
                        "width": 160,
                        "skin": "Main/zhujiemian-1-9.png",
                        "pivotY": 23,
                        "pivotX": 80,
                        "height": 46
                    },
                    "compId": 49
                }, {
                    "type": "Image",
                    "props": {
                        "y": -4,
                        "x": 12,
                        "skin": "Main/zhujiemian-1-8.png"
                    },
                    "compId": 50
                }, {
                    "type": "Text",
                    "props": {
                        "y": 0,
                        "x": 65,
                        "width": 137,
                        "var": "GoldNum",
                        "valign": "middle",
                        "text": "9999",
                        "runtime": "laya.display.Text",
                        "height": 46,
                        "fontSize": 30,
                        "color": "#ffffff",
                        "align": "center"
                    },
                    "compId": 51
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "var": "Logo",
                    "skin": "Main/yad.png",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "centerX": 0,
                    "bottom": 10
                },
                "compId": 52
            }],
            "loadList": ["Main/chunhei.png", "Main/pifu-1-1.png", "Main/pifu-1-2.png", "Main/pifu-1-4.png", "Main/pifu-1-3.png", "Main/pifu-1-6.png", "Main/pifu-1-5.png", "Main/pifu-1-10.png", "Main/pifu-1-7.png", "Main/pifu-1-9.png", "Main/pifu-1-8.png", "Main/zhujiemian-1-8.png", "Main/pifu-1-11.png", "Main/zhujiemian-1-9.png", "Main/yad.png"],
            "loadList3D": []
        }, e.SkinViewUI = h, S("ui.SkinViewUI", h);
        class l extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            "type": "Scene",
            "props": {
                "width": 720,
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Image",
                "props": {
                    "top": 0,
                    "skin": "Main/chunhei.png",
                    "sizeGrid": "9,17,14,11",
                    "right": 0,
                    "name": "BG",
                    "left": 0,
                    "bottom": 0
                },
                "compId": 4
            }, {
                "type": "Image",
                "props": {
                    "y": 145,
                    "x": 108.5,
                    "skin": "Main/shiyong-1-3.png"
                },
                "compId": 5,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": -58.5,
                        "x": 40,
                        "skin": "Main/shiyong-1-1.png"
                    },
                    "compId": 6
                }]
            }, {
                "type": "Button",
                "props": {
                    "y": 604,
                    "x": 219,
                    "var": "TrialBtn",
                    "stateNum": 1,
                    "skin": "Main/shiyong-1-2.png"
                },
                "compId": 7
            }, {
                "type": "Button",
                "props": {
                    "y": 810,
                    "x": 292,
                    "var": "NoTrialBtn",
                    "stateNum": 1,
                    "skin": "Main/fuhuo-1-3.png"
                },
                "compId": 8
            }, {
                "type": "Image",
                "props": {
                    "y": 207,
                    "x": 161,
                    "width": 398,
                    "var": "SceneViewPort",
                    "height": 383
                },
                "compId": 9
            }, {
                "type": "Button",
                "props": {
                    "y": 743,
                    "x": 205,
                    "var": "kuang",
                    "stateNum": 1,
                    "skin": "Push/jiesuan-1-1.png"
                },
                "compId": 22,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": -7,
                        "x": 0,
                        "visible": false,
                        "var": "duigou",
                        "skin": "Push/jiesuan-1-2.png"
                    },
                    "compId": 11
                }, {
                    "type": "Text",
                    "props": {
                        "y": 11,
                        "x": 159,
                        "width": 211,
                        "valign": "middle",
                        "text": "No longer show today",
                        "runtime": "laya.display.Text",
                        "pivotY": 24,
                        "pivotX": 106,
                        "height": 48,
                        "fontSize": 27,
                        "color": "#ffffff",
                        "align": "left"
                    },
                    "compId": 12
                }]
            }, {
                "type": "Image",
                "props": {
                    "y": 0,
                    "x": 0,
                    "var": "Logo",
                    "skin": "Main/yad.png",
                    "scaleY": 0.7,
                    "scaleX": 0.7,
                    "centerX": 0,
                    "bottom": 10
                },
                "compId": 23
            }],
            "loadList": ["Main/chunhei.png", "Main/shiyong-1-3.png", "Main/shiyong-1-1.png", "Main/shiyong-1-2.png", "Main/shiyong-1-4.png", "Push/bg-box.png", "Push/jiesuan-1-1.png", "Push/jiesuan-1-2.png", "Main/fuhuo-1-3.png", "Main/yad.png"],
            "loadList3D": []
        }, e.TrialViewUI = l, S("ui.TrialViewUI", l);
    }(v || (v = {})),
    function(e) {
        e[e.click = 0] = "click", e[e.hit = 1] = "hit", e[e.shoot = 2] = "shoot", e[e.OpenView = 3] = "OpenView", e[e.Lose = 4] = "Lose", e[e.Win = 5] = "Win", e[e.die = 6] = "die";
    }(I || (I = {})),
    function(e) {
        e[e.BGM = 0] = "BGM";
    }(L || (L = {}));
    class C {
        constructor() {}
        static musicres(e) {
            return "Game/res/music/" + I[e] + ".mp3";
        }
        static bgmres(e) {
            return "Game/res/music/" + L[e] + ".mp3";
        }
        static playMusic(e) {
            Laya.SoundManager.playSound(this.musicres(e));
        }
        static StopMusic() {
            Laya.SoundManager.stopMusic();
        }
        static PlayBGM(e) {
            Laya.SoundManager.playMusic(this.bgmres(e), 0);
        }
    }
    C.sound = !0, C.open = !0;
    class B {
        constructor() {
            this.isVideoLoadCom = !1, B.ins = this;
        }
        static get Instance() {
            return B.ins ? B.ins : new B();
        }
        static InitId() {}
        static JiaZaiShiPin() {
            this.afsfsaafsfsa || Laya.Browser.onWeiXin && (this.fsaasfafssfa = Laya.Browser.window.wx.createRewardedVideoAd({
                adUnitId: this.videlAdUnitId
            }), this.fsaasfafssfa.onLoad(() => {
                console.log("激励视频 广告加载成功"), this.asfasfsaffsa = !0;
            }), this.fsaasfafssfa.onError(e => {
                console.log("激励视屏加载失败:" + e), this.asfasfsaffsa = !1;
            }), this.afsfasfasasf = 0, this.afsfsaafsfsa = !0);
        }
        static fassfafasafs(e) {
            this.fsaasfafssfa.offClose(), this.fsaasfafssfa.onClose(t => {
                console.log("激励视频关闭:" + t.isEnded), t && t.isEnded || void 0 === t ? e && e(!0) : e && e(!1), this.fsaasfafssfa.offClose();
            });
        }
        showBanner(e = null, t = null) {
            if (!Laya.Browser.onWeiXin) return;
            let i = B.bannerAdUnitId,
                s = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: i,
                    style: {
                        left: 0,
                        top: 0,
                        width: 460
                    }
                });
            s.onLoad(() => {
                console.log("[LOG] Banner广告加载成功"), this.hideBanner(), this._bannerAd = s;
                let t = Laya.Browser.window.wx.getSystemInfoSync();
                this._bannerAd.style.width = t.windowWidth, this._bannerAd.style.top = t.windowHeight - this._bannerAd.style.realHeight - 20, this._bannerAd.show(), e && e(this._bannerAd);
            }), s.onError(e => {
                console.log("[LOG] Banner广告加载失败"), console.log(e), t && t();
            });
        }
        hideBanner() {
            Laya.Browser.onWeiXin && this._bannerAd && (this._bannerAd.hide(), this._bannerAd.destroy(), this._bannerAd = null);
        }
        static OpenBanner(e = 0, t = null, i = !1) {
            if (Laya.Browser.onWeiXin)
                if (this.afsfasfasasf >= 1e4) {
                    var s = this.gasagsgasgsa(e);
                    i ? (this.asgagassga.hide(), Laya.timer.once(1e3 * ie.Instance.curplayerData.wudaoshijian, this, () => {
                        null != t && t(s), this.asgagassga.show();
                    })) : (null != t && t(s), this.asgagassga.show());
                } else {
                    var a = this.bannerAdUnitId;
                    console.log("adUnitId:" + a);
                    let s = Laya.Browser.window.wx.createBannerAd({
                        adUnitId: a,
                        style: {
                            left: 0,
                            top: 0,
                            width: 460
                        }
                    });
                    s.onError(t => {
                        console.log("没有拉到banner--"), console.log(t), s = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: a,
                            style: {
                                left: 0,
                                top: 0,
                                width: 460
                            }
                        }), this.gasagsgasgsa(e);
                    }), s.onLoad(() => {
                        this.afsfasfasasf++, this.asgagassga && this.asgagassga.destroy(), this.asgagassga = s;
                        var a = this.gasagsgasgsa(e);
                        i ? (this.asgagassga.hide(), Laya.timer.once(1e3 * ie.Instance.curplayerData.wudaoshijian, this, () => {
                            null != t && t(a), this.asgagassga.show();
                        })) : (null != t && t(a), this.asgagassga.show());
                    });
                }
        }
        static gasagsgasgsa(e) {
            if (this.asgagassga) {
                let t = Laya.Browser.window.wx.getSystemInfoSync();
                return this.asgagassga.style.width = t.windowWidth, this.asgagassga.style.top = t.windowHeight - this.asgagassga.style.realHeight - e - 20, Laya.stage.height / t.windowHeight * this.asgagassga.style.realHeight;
            }
        }
        static Clear() {
            Laya.timer.clearAll(this), Laya.Browser.onWeiXin && this.asgagassga && this.asgagassga.hide();
        }
        static agagsagags() {
            Laya.Browser.onWeiXin && this.asgagassga && this.asgagassga.hide();
        }
        static gasagsasg() {
            Laya.Browser.onWeiXin && this.asgagassga && this.asgagassga.show();
        }
        static get keyiwudao() {
            var e = ie.Instance.curplayerData.Cheat;
            if (0 == e) return console.log("cheat:" + e), !1;
            if ("1037" == J.SceneNum || "1058" == J.SceneNum || "1089" == J.SceneNum || "1001" == J.SceneNum || "1038" == J.SceneNum || "1067" == J.SceneNum || "1095" == J.SceneNum) return console.log("cheat:true-> " + J.SceneNum), !0;
            var t = ie.Instance.curplayerData.CheckScene;
            return 0 == t ? (console.log("cheat:true->checkscence: " + t), !0) : (console.log("cheat:false-> " + J.SceneNum), !1);
        }
        static WudaoAnNiu(e, t = !0, i = null, s = 0) {
            ie.Instance.curplayerData.Banner && (B.agagsagags(), 0 == B.keyiwudao ? (e.bottom = 350, B.OpenBanner()) : t ? (e.bottom = 100, e.mouseEnabled = !1, console.log("bottom:100"), B.OpenBanner(s, t => {
                if (null == t) {
                    console.log("展示互推位");
                    var i = Laya.stage.height - t - e.height;
                    e.y = i, e.bottom = NaN;
                } else {
                    i = Laya.stage.height - t - e.height;
                    e.y = i - 100, e.bottom = NaN, console.log("y:" + i);
                }
            }, !0), Laya.timer.once(1e3 * ie.Instance.curplayerData.wudaoshijian, this, () => {
                e.mouseEnabled = !0, null != i && i();
            })) : null != i && i());
        }
        loadVideo(e) {
            if (Laya.Browser.onWeiXin)
                if (this._onLoadVideo = e, this._rewardedVideoAd) this.isVideoLoadCom ? (this._onLoadVideo && this._onLoadVideo(!0), this._onLoadVideo = null) : (this._onLoadVideo && this._onLoadVideo(!1), this._onLoadVideo = null);
                else {
                    let e = B.videlAdUnitId;
                    this._rewardedVideoAd = Laya.Browser.window.wx.createRewardedVideoAd({
                        adUnitId: e
                    });
                    var t = !1;
                    this._rewardedVideoAd.onLoad(() => {
                        console.log("[LOG] 激励视频广告加载成功"), this.isVideoLoadCom = !0, t || (t = !0, this._onLoadVideo && this._onLoadVideo(!0), this._onLoadVideo = null);
                    }), this._rewardedVideoAd.onError(e => {
                        console.log("[LOG] 激励视频广告加载失败"), console.log(e), this.isVideoLoadCom = !1, this._onLoadVideo && this._onLoadVideo(!1), this._onLoadVideo = null;
                    }), this._rewardedVideoAd.onClose(e => {
                        !e || e.isEnded ? (this._onVideoClose && this._onVideoClose(!0), this._onVideoClose = null) : (this._onVideoClose && this._onVideoClose(!1), this._onVideoClose = null);
                    });
                }
            else e && e(!0);
        }
        showVideo(e) {
            Laya.Browser.onWeiXin ? (this._onVideoClose = e, this._rewardedVideoAd.show().catch(e => {
                this._rewardedVideoAd.load().then(() => {
                    this._rewardedVideoAd.show();
                });
            })) : e && e(!0);
        }
    }
    B.videlAdUnitId = "adunit-40ac03a5538e8de0", B.bannerAdUnitId = "adunit-dc3e1cfa3ac69be3", B.afsfsaafsfsa = !1, B.asfasfsaffsa = !1, B.afsfasfasasf = 0;
    class k extends Laya.Script {
        constructor() {
            super(), this.use = !1, k.ins = this;
        }
        static get Instance() {
            return k.ins ? k.ins : new k();
        }
        onAwake() {
            this.selfobj = this.owner, this._select = this.selfobj.getChildByName("choose"), this._skin = this.selfobj.getChildByName("icon"), this.using = this.selfobj.getChildByName("used"), this.click1_btn = this.selfobj.getChildByName("btn"), this.click1_btn.clickHandler = new Laya.Handler(this, this._ClickHander), a.EventOn(i.Select, this, this.ShowSelect);
        }
        RefreshItem(e, t) {
            this.comeType = t, this.instance = e || _.Instance, this._data = this.selfobj.dataSource;
            var i = this._data.id,
                s = ie.Instance.curplayerData.GetUser(p.equip_themes)[1],
                a = ie.Instance.curplayerData.GetUser(p.equip_themes)[2],
                n = ie.Instance.curplayerData.HasEquip(i),
                o = this._data.require_type;
            return this._skin.skin = "Game/res/Skin/" + this._data.icon + ".png", this._skin.rotation = 0, s == i || a == i ? (this.skinGetForType = x.Using, _.Instance.lastUse = this, void this.showui()) : n ? (this.skinGetForType = x.Geted, void this.showui()) : 2 == o ? (this.skinGetForType = x.Bycoin, void this.showui()) : 4 == o ? (this.skinGetForType = x.GetByActivity, void this.showui()) : 3 == o ? (this.skinGetForType = x.GetByVideo, void this.showui()) : void 0;
        }
        showui() {
            this.skinGetForType;
            1 == this._data.id || 50 == this._data.id ? this._select.visible = !0 : this._select.visible = !1, this.skinGetForType == x.Using ? this.using.visible = !0 : this.using.visible = !1;
        }
        ShowUi() {
            var e = this.skinGetForType;
            this._select.visible = e == x.Using, this.skinGetForType == x.Using ? this.using.visible = !0 : this.using.visible = !1;
        }
        _ClickHander() {
            this.instance._data = this._data, _.Instance.RefreshButton(this.skinGetForType), this.instance.showroleId = this._data.id, this.ShowUi(), this.ShowModel();
        }
        ShowModel() {
            a.EventTrigger(i.Select);
        }
        ShowSelect() {
            this._data && (this._select.visible = this.instance.showroleId == this._data.id);
        }
    }! function(e) {
        e[e.Geted = 1] = "Geted", e[e.Bycoin = 2] = "Bycoin", e[e.GetByVideo = 3] = "GetByVideo", e[e.GetByActivity = 4] = "GetByActivity", e[e.Using = -1] = "Using";
    }(x || (x = {}));
    class _ extends v.SkinViewUI {
        constructor() {
            super(), this.firstopen = !0, this.showroleId = 0, this.uiArr = [], this.CapArray = [], this.HorseArray = [], this.lastUse = null;
            _.ins = this;
        }
        static get Instance() {
            return null == _.ins ? (console.log("new  shopview"), new _()) : _.ins;
        }
        Show() {
            f.AldEvent("打开皮肤商店界面");
            let e = ie.Instance.curplayerData.GainCollocation("theme");
            this.Logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "LOGO")
            });
            for (let t = 0; t < e.length; t++) t < 5 ? this.CapArray.push(e[t]) : this.HorseArray.push(e[t]);
            this.BackBtn.clickHandler = new Laya.Handler(this, this.ClickClose), this.CharacterBtn.clickHandler = new Laya.Handler(this, this.ClickCap), this.HorseBtn.clickHandler = new Laya.Handler(this, this.ClickHorse), this.GetBtn.clickHandler = new Laya.Handler(this, this.ClickGet), this.VideoGetCoinBtn.clickHandler = new Laya.Handler(this, this.GetMoney), this.CharacterLightImage = this.CharacterBtn.getChildByName("light"), this.HorseLightImage = this.HorseBtn.getChildByName("light"), this.GetByCoin = this.GetBtn.getChildByName("GetByCoin"), this.RequireCoinNum = this.GetByCoin.getChildByName("CoinNum"), this.GetByVideo = this.GetBtn.getChildByName("GetByVideo"), this.RequireVideoNum = this.GetByVideo.getChildByName("VideoNum"), this.GetByActive = this.GetBtn.getChildByName("GetByActive"), this.GoldNum.text = ie.Instance.curplayerData.GainAccount("money"), this.Geted = this.GetBtn.getChildByName("Geted"), this.Using = this.GetBtn.getChildByName("Using"), this.uiArr.push(this.Using), this.uiArr.push(this.Geted), this.uiArr.push(this.GetByCoin), this.uiArr.push(this.GetByVideo), this.uiArr.push(this.GetByActive), console.log("asdfadfasfas   ", p);
            this.equip_Horse = ie.Instance.curplayerData.GetUser(p.equip_themes)[2], this.equip_Cap = ie.Instance.curplayerData.GetUser(p.equip_themes)[1], this.showroleId = 1, this.ItemList.selectEnable = !1, this.ItemList.vScrollBarSkin = "", this.ItemList.renderHandler = Laya.Handler.create(this, this.UpdateItem, null, !1), this.ItemList.array = this.CapArray, this.ItemList.refresh(), this.ShowButton(1), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        Close() {
            f.AldEvent("关闭皮肤商城界面");
        }
        ClickClose() {
            var e = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[2]),
                t = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[1]);
            t && t != this.equip_Cap && xe.Instance.SetCap(t), e != this.equip_Horse && xe.Instance.SetHorse(e), W.Instance.ShowView(T.MainView);
        }
        UpdateItem(e, t) {
            e.getComponent(k).RefreshItem();
        }
        RefreshItem() {
            this.ItemList.refresh();
        }
        ClickCap() {
            this.firstopen = !0, this.equip_Cap ? this.showroleId = this.equip_Cap : this.showroleId = 1, this.ShowButton(1), this.CharacterLightImage.visible = !0, this.HorseLightImage.visible = !1, this.ItemList.vScrollBarSkin = "", this.ItemList.array = this.CapArray, this.ItemList.renderHandler = Laya.Handler.create(this, this.UpdateItem, null, !1);
        }
        ClickHorse() {
            this.firstopen = !0, this.showroleId = this.equip_Horse, this.ShowButton(2), this.CharacterLightImage.visible = !1, this.HorseLightImage.visible = !0, this.ItemList.vScrollBarSkin = "", this.ItemList.array = this.HorseArray, this.ItemList.renderHandler = Laya.Handler.create(this, this.UpdateItem, null, !1);
        }
        RefreshButton(e) {
            this.skinGetForType = e, this.ShowUI(this.skinGetForType);
        }
        ShowButton(e) {
            if (1 == e) {
                var t = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[1]);
                let e = this.CapArray[0].require_type;
                this._data = this.CapArray[0];
                var i = this._data.id,
                    s = ie.Instance.curplayerData.HasEquip(i),
                    a = e;
                if (t == i) return this.skinGetForType = x.Using, void this.RefreshButton(this.skinGetForType);
                if (s) return this.skinGetForType = x.Geted, void this.RefreshButton(this.skinGetForType);
                if (2 == a) return this.skinGetForType = x.Bycoin, void this.RefreshButton(this.skinGetForType);
                if (4 == a) return this.skinGetForType = x.GetByActivity, void this.RefreshButton(this.skinGetForType);
                if (3 == a) return this.skinGetForType = x.GetByVideo, void this.RefreshButton(this.skinGetForType);
            } else {
                t = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[2]);
                let e = this.HorseArray[0].require_type;
                this._data = this.HorseArray[0];
                i = this._data.id, s = ie.Instance.curplayerData.HasEquip(i), a = e;
                if (t == i) return this.skinGetForType = x.Using, void this.RefreshButton(this.skinGetForType);
                if (s) return this.skinGetForType = x.Geted, void this.RefreshButton(this.skinGetForType);
                if (2 == a) return this.skinGetForType = x.Bycoin, void this.RefreshButton(this.skinGetForType);
                if (4 == a) return this.skinGetForType = x.GetByActivity, void this.RefreshButton(this.skinGetForType);
                if (3 == a) return this.skinGetForType = x.GetByVideo, void this.RefreshButton(this.skinGetForType);
            }
        }
        ClickGet() {
            switch (this.skinGetForType) {
                case x.Bycoin:
                    Number(ie.Instance.curplayerData.GainAccount("money")) < Number(this._data.require_num) ? (f.ShowTxt("金币不足--"), platform.getInstance().prompt("money is not enough")) : (this.Buy(), ie.Instance.curplayerData.SetAccount("money", Number(ie.Instance.curplayerData.GainAccount("money")) - Number(this._data.require_num)), this.GoldNum.text = ie.Instance.curplayerData.GainAccount("money"))
                    console.log("金币--");
                    break;
                case x.GetByActivity:
                    f.ShowTxt("暂未开放!"), console.log("活动获取--");
                    break;
                case x.GetByVideo:
                    console.log("视频获取--"), this.VideoGet();
                    break;
                case x.Geted:
                    this.Use();
            }
        }
        ShowUI(e) {
            if (console.log("所需类型--", e), e != x.Using) {
                this.Using.visible = !1;
                for (let t = 1; t < this.uiArr.length; t++) this.uiArr[t].visible = t == e;
                switch (e) {
                    case x.Bycoin:
                        this.RequireCoinNum.text = this._data.require_num.toString();
                        break;
                    case x.GetByVideo:
                        this.RequireVideoNum.text = ie.Instance.curplayerData.GetProgress(this._data.id) + "/" + this._data.require_num.toString();
                }
            } else
                for (let e = 0; e < this.uiArr.length; e++) this.uiArr[e].visible = 0 == e;
        }
        VideoGet() {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showReward(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                this.VideoGetSuccess()
            }, () => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                this.VideoGetFail()
            });
        }
        VideoGetSuccess() {
            ie.Instance.curplayerData.SetProgress(this._data.id);
            this.RequireVideoNum.text = ie.Instance.curplayerData.GetProgress(this._data.id) + "/" + this._data.require_num.toString();
            if (ie.Instance.curplayerData.GetProgress(this._data.id) == this._data.require_num) {
                this.Buy();
            }
        }
        VideoGetFail() {
            platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
        }
        GetMoney() {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showReward(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                ie.Instance.curplayerData.SetAccount("money", Number(ie.Instance.curplayerData.GainAccount("money")) + 200);
                this.GoldNum.text = ie.Instance.curplayerData.GainAccount("money");
            }, () => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
            });
        }
        Use() {
            var e = [{
                id: this._data.id
            }];
            if (this._data.id < 40) {
                ie.Instance.curplayerData.Set1User(this._data.id);
            } else {
                ie.Instance.curplayerData.Set2User(this._data.id);
            }
            this.UseSuccess(this._data.id);
        }
        UseSuccess(e) {
            if (e > 40) {
                e -= 50;
            } else {
                e -= 1;
            }
            if (this.lastUse != null) {
                this.lastUse.RefreshItem();
            }
            var item = this.ItemList.getCell(e);
            item.getComponent(k).RefreshItem();
            item.getComponent(k)._ClickHander();
            f.ShowTxt("装备成功!"), console.log("装备suc:" + JSON.stringify(e));
        }
        UseFail(e) {
            console.log(e);
        }
        Buy() {
            ie.Instance.curplayerData.AddUser(this._data.id);
            this.BuySuccess(this._data.id);
        }
        BuySuccess(e) {
            if (e > 40) {
                e -= 50;
            } else {
                e -= 1;
            }
            var item = this.ItemList.getCell(e);
            item.getComponent(k).RefreshItem();
            item.getComponent(k)._ClickHander();
            f.AldEvent("购买" + this._data.name + "成功"), console.log("购买suc:" + JSON.stringify(e));
        }
        BuyFail(e) {
            console.log("购买fail:" + JSON.stringify(e));
        }
    }
    class b {
        constructor() {
            this.first = !0, this.motordic = new t(), b.ins = this;
        }
        static get Instance() {
            return b.ins ? b.ins : new b();
        }
        CreateMoto(e, t, i = null) {
            if (!this._shopscene || this._shopscene.destroyed || null == this._shopscene) {
                this.first = !0, this._shopscene = new Laya.Scene3D(), this._camera = new Laya.Camera(), i ? (this._camera.transform.position = new Laya.Vector3(0, .7, 3), this._camera.clearFlag = 2, this._camera.fieldOfView = 40) : (this._camera.transform.position = new Laya.Vector3(0, .6, 3.5), this._camera.clearFlag = 2, this._camera.fieldOfView = 30), this._shopscene.addChild(this._camera);
                let a = new Laya.DirectionLight();
                a.intensity = .5, this._shopscene.addChild(a);
                var s = c.Instance.GetModel(n.Instance.Horse.get(e), "");
                this._shopscene.addChild(s), t.skin = "3.png";
                s.transform.position = new Laya.Vector3(0, 0, -2), this._position = new Laya.Vector3(0, .01, 0);
            }
            t && (this._camera.viewport = new Laya.Viewport(t.x, t.y, t.width, t.height)), this._motor && (this._motor.active = !1, this._motor.removeSelf(), this._motor = null), this.first && (this.first = !1, Laya.timer.frameLoop(1, this, this.Rotation, [s]));
        }
        Rotation(e) {
            e.transform.rotate(this._position);
        }
        CloseShop() {
            Laya.timer.clear(this, this.Rotation), this._motor && (this._motor.active = !1, this._motor.removeSelf()), this._player && (this._player.active = !1, this._player.removeSelf()), this._shopscene && this._shopscene.destroy(!0), this._shopscene = null, this._motor = null, this._sprite = null, this._player = null, this.first = !0;
        }
    }
    class M extends v.TrialViewUI {
        constructor() {
            super();
        }
        static get Instance() {
            return M.ins ? M.ins : new M();
        }
        Show() {
            f.AldEvent("打开皮肤试用界面"), B.OpenBanner(), this.Init(), this.SetData(), this.Logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "LOGO")
            });
            this.TrialBtn.clickHandler = Laya.Handler.create(this, this.Trial), this.kuang.clickHandler = Laya.Handler.create(this, this.HideTrial, null, !1), this.NoTrialBtn.visible = !1, Laya.timer.once(1e3, this, () => {
                this.NoTrialBtn.visible = !0, this.NoTrialBtn.clickHandler = Laya.Handler.create(this, this.ClickClose);
            }), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        Close() {
            f.AldEvent("关闭皮肤试用界面");
        }
        ClickClose() {
            te.Instance.SendHttp(ee.KaiShi, null, Laya.Handler.create(this, this.Complete), null);
        }
        Trial() {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showReward(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                xe.Instance.SetHorse(this.arr.id);
                te.Instance.SendHttp(ee.KaiShi, null, Laya.Handler.create(this, this.Complete), null);
            }, () => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                te.Instance.SendHttp(ee.KaiShi, null, Laya.Handler.create(this, this.Complete), null);
            })
        }
        Complete(e) {
            b.Instance.CloseShop(), W.Instance.ShowView(T.IngameView);
            let t = ie.Instance.curplayerData.GainAccount("stage");
            f.AldStart(t), C.playMusic(I.click), G.Instance.play_id = e.play_id, a.StageTrigger(s.Start), W.Instance.ShowView(T.IngameView);
        }
        Init() {
            if (this.data = this.GetTryOutTheme(), this.count = this.data.length, 1 == this.count) this.arr = this.data[0];
            else {
                let e = g.RandomANumber(0, this.count);
                this.arr = this.data[e];
            }
            console.log(this.arr.id - 50);
            this.SceneViewPort.skin = "hourse/" + (this.arr.id - 50) + ".png";
        }
        GetTryOutTheme() {
            let e, t = [],
                i = ie.Instance.curplayerData.GainCollocation("theme");
            if (i)
                for (let s = 5; s < i.length; s++) {
                    const a = i[s];
                    let n = a.id;
                    ie.Instance.curplayerData.HasEquip(n) || t.push(a), s == i.length - 2 && (e = a);
                }
            return 0 == t.length && t.push(e), t;
        }
        SetData() {
            j.SetHuTuiList(this.BottomList, 2, ""), this.GunGun();
        }
        GunGun() {}
        HideTrial() {
            M.trial = !M.trial, this.duigou.visible = !M.trial;
        }
    }
    M.trial = !0;
    class G extends v.MainGameViewUI {
        constructor() {
            super(), G.ins = this;
        }
        static get Instance() {
            return G.ins ? G.ins : new G();
        }
        Show() {
            f.AldEvent("打开主界面"), C.PlayBGM(L.BGM), this.StartBtn.clickHandler = Laya.Handler.create(this, this.ClickStart), this.SkinBtn.clickHandler = Laya.Handler.create(this, this.ClickSkin), this.goaltext = this.GoalProgress.getChildByName("goal"), this.goaltext.text = xe.Instance.KillNum.toString(), this.GoldNum.text = ie.Instance.curplayerData.GainAccount("money"), this.LevelNum.text = ie.Instance.curplayerData.GainAccount("stage"), this.SoundBox.on(Laya.Event.CLICK, this, this.ClickSound), this.sound = this.SoundBox.getChildByName("sound"), this.shake = this.SoundBox.getChildByName("shake"), this.sound.visible = C.open, this.shake.visible = f.shake, this.Logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().mainNavigate("Main", "LOGO")
            });
            this.SetData(), this.SetTopAd(), B.OpenBanner(), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        Close() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.ClickStart);
        }
        ClickStart() {
            if (platform.getInstance().initialized_) {
                if (C.sound) C.open = !1, C.StopMusic();
                platform.getInstance().showInterstitial(() => {
                    if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                    if (Number(ie.Instance.curplayerData.GainAccount("stage")) > 2 && M.trial) C.playMusic(I.click), W.Instance.ShowView(T.TrialView);
                    else {
                        var e = [{
                            t: ie.Instance.ServerTime.toString()
                        }];
                        te.Instance.SendHttp(ee.KaiShi, e, Laya.Handler.create(this, this.GameStart), null);
                    }
                })
            } else {
                if (Number(ie.Instance.curplayerData.GainAccount("stage")) > 2 && M.trial) C.playMusic(I.click), W.Instance.ShowView(T.TrialView);
                else {
                    var e = [{
                        t: ie.Instance.ServerTime.toString()
                    }];
                    te.Instance.SendHttp(ee.KaiShi, e, Laya.Handler.create(this, this.GameStart), null);
                }
            }
        }
        ClickSkin() {
            C.playMusic(I.click), W.Instance.ShowView(T.ShopView);
        }
        ClickMoreFun() {
            W.Instance.OpenPopView(T.ExportView);
        }
        ClickExit() {
            W.Instance.OpenPopView(T.ExitView);
        }
        ClickSound() {
            this.sound.visible ? (this.sound.visible = !1, this.shake.visible = !0, C.open = !1, C.sound = C.open, f.shake = !0, C.StopMusic(), console.log("关闭声音，打开震动---")) : (this.sound.visible = !0, this.shake.visible = !1, C.open = !0, C.sound = C.open, f.shake = !0, C.PlayBGM(L.BGM), console.log("打开声音，关闭震动"));
            window.WebAudioEngine.muted = !this.sound.visible;
        }
        GameStart(e) {
            let t = ie.Instance.curplayerData.GainAccount("stage");
            f.AldStart(t), C.playMusic(I.click), this.play_id = e.play_id, a.StageTrigger(s.Start), W.Instance.ShowView(T.IngameView);
        }
        OpenChouTi() {
            this.BaoKuanBtn.visible = !1, this.BaoKuan.visible = !0, this.CloseBaoKuan.clickHandler = Laya.Handler.create(this, this.CloseChouTi), this.chouti.play(null, !1), this.InitAd();
        }
        CloseChouTi() {
            this.BaoKuan.visible = !1, this.BaoKuanBtn.visible = !0, this.CloseBaoKuan.clickHandler = null;
        }
        InitAd() {
            j.SetHuTuiList(this.BaoKuanList, 1, ""), this.GunGun2();
        }
        GunGun2() {
            this.BaoKuanList.scrollBar.value = 0;
            var e = this.BaoKuanList.scrollBar.max,
                t = 1;
            Laya.timer.frameLoop(1, this, () => {
                this.BaoKuanList.scrollBar.value += t, (this.BaoKuanList.scrollBar.value >= e || this.BaoKuanList.scrollBar.value <= 0) && (t = -t);
            });
        }
        SetData() {
            j.SetHuTuiList(this.BottomList, 2, ""), this.GunGun();
        }
        GunGun() {}
        SetTopAd() {}
        _setTopAd(e, t) {}
        _setIcon(e, t, i) {
            i.index = (i.index + 2) % this.topAdData.length, e.skin = this.topAdData[i.index].app_icon, t.text = this.topAdData[i.index].app_title;
        }
    }
    class A {
        constructor() {
            A.ins = this;
        }
        static get Instance() {
            return A.ins ? A.ins : new A();
        }
    }
    A.DoorArray = [];
    var V = Laya.Sprite3D,
        N = Laya.Vector3;
    class R {
        constructor(e) {
            this.id = e;
        }
    }
    class P {
        constructor(e, t, i, s, a, n) {
            this.things = [], this.thinghight = 0, this.thingwight = 0, this.index = e, this.planeid = t, this.position = i, this.GetProp(s, a, n);
        }
        GetProp(e, t, i) {
            for (var s = ie.Instance.curplayerData.GainCollocation("things"), a = e.split(";"), n = t.split(";"), o = i.split(";"), r = 0; r < a.length; r++)
                if ("0" != a[r]) {
                    var h = new R(Number(a[r])),
                        l = s[(h.id - 1).toString()],
                        c = r <= n.length - 1 ? Number(n[r]) : this.long;
                    r <= n.length - 1 ? Number(o[r]) : this.long;
                    h.pos = new N(this.position.x, this.position.y, this.position.z + c), h.type = Number(l.type), this.things.push(h);
                }
        }
    }
    class H {
        constructor(e, t) {
            this.startpoint = new N(0, 0, 0), this.planes = [], this.scencerys = [], this.MaxLength = 0, this.MaxHight = 0, this.fencearray = [], this.fencepos = 0, this.fencepos2 = 0, this.fencenum = 0, this.fenceleftpos = 0, this.fencerightpos = 0, this.creat = !1, this.floorarray = [], this.floornum = 0, this.floorpos = 0, this.treenum = 0, this.treepos = 0, this.treepos2 = 0, this.creatnum = 0, this.index = e, this.gradeid = t;
        }
        Init() {
            this.GetPlane(), this.endpointpoint = new N(0, this.MaxHight, this.MaxLength);
        }
        GetPlane() {
            var e = ie.Instance.curplayerData.GainCollocation("road");
            for (var t in e)
                if (Number(e[t].road_id) == this.gradeid) {
                    var i = e[t],
                        s = Number(i.long),
                        a = this.startpoint.z,
                        n = Number(i.street),
                        o = new N(9 - 1.65 * n, 0, a),
                        r = new P(Number(i.street), Number(i.road_id), o, i.things, i.position, i.offset);
                    r.long = Number(i.long), this.MaxHight = r.thinghight < this.MaxHight ? r.thinghight : this.MaxHight, 0 != s && (this.MaxLength = a + s > this.MaxLength ? a + s : this.MaxLength), this.planes.push(r);
                }
        }
        Clear() {
            for (var e = 0; e < this.planes.length; e++) {
                var t = this.planes[e].model;
                t && t.active && !t.destroyed && c.Instance.RecoveryModel(t), this.planes[e].model = null;
                for (var i = this.planes[e].things, s = 0; s < i.length; s++)(t = i[s].model) && t.active && !t.destroyed && c.Instance.RecoveryModel(t), i[s].model = null;
            }
            for (var a = 0; a < this.scencerys.length; a++) {
                var n = this.scencerys[a];
                n && n.active && !n.destroyed && c.Instance.RecoveryModel(n), this.scencerys[a] = null;
            }
            this.scencerys.splice(0, this.scencerys.length);
            for (let e = 0; e < this.fencearray.length; e++) {
                var o = this.fencearray[e];
                o && o.active && !o.destroyed && c.Instance.RecoveryModel(o), this.fencearray[e] = null;
            }
            this.fencearray.splice(0, this.fencearray.length), this.spr && this.spr.destroy();
        }
        Creat(e = null, t) {
            null == e && (e = z.Instance.curstage), this.spr = new V();
            for (var i = 0; i < this.planes.length; i++) {
                var s = this.planes[i];
                if (s.long > 0) {
                    var a = n.Instance.Plane.get(1);
                    s.model = c.Instance.GetModel(a, ""), this.spr.addChild(s.model), s.model.transform.position = s.position, s.model.transform.scale = new Laya.Vector3(s.model.transform.scale.x, s.model.transform.scale.y, s.long), g.Instance.SetCollider(s.model, 100);
                    for (var o = s.things, r = 0; r < o.length; r++) {
                        var h = o[r],
                            l = n.Instance.Prop.get(h.id);
                        h.model = c.Instance.GetModel(l, ""), 1 == h.id && A.DoorArray.push(h.model), 13 == h.id ? xe.Instance.CreatEnemy(h.model) : 14 == h.id ? xe.Instance.CreatChaseCharacter(h.model) : g.Instance.SetCollider(h.model, 100), this.spr.addChild(h.model), h.model.transform.position = h.pos;
                    }
                } else if (s.things.length > 0)
                    for (r = 0; r < s.things.length; r++) {
                        h = s.things[r], l = n.Instance.Prop.get(h.id);
                        h.model = c.Instance.GetModel(l, ""), g.Instance.SetCollider(h.model, 100), this.spr.addChild(h.model), h.model.transform.position = h.pos;
                    }
                n.Instance.mainscene.addChild(this.spr);
            }
        }
    }
    class D {
        constructor(e) {
            this.curgrades = [], this.ChooseGrade = [], this.Id = Number(e), this.scenery = g.RandomANumber(1, 5), this.GetGrade();
        }
        GetGrade() {
            var e = ie.Instance.curplayerData.GainCollocation("mission"),
                t = e[this.Id - 1].roads.split(";"),
                i = Number(e[this.Id - 1].road_num);
            this.mainrolespeed = Number(e[this.Id - 1].PlayerSpeed), this.npcspeed = Number(e[this.Id - 1].NpcSpeed), this.hostspeed = Number(e[this.Id - 1].HostageSpeed), this.BossHp = Number(e[this.Id - 1].boss_HP), this.Goal = Number(e[this.Id - 1].goal), this.Modulus = Number(e[this.Id - 1].modulus), this.isboss = Number(e[this.Id - 1].boss);
            let s = [],
                a = 0;
            if (this.Id > 2) {
                for (; 0 == a;) {
                    var n = g.RandomANumber(0, t.length),
                        o = Number(t[n]);
                    t.splice(n, 1), s.push(o), s.length == i && (a = 1);
                }
                for (var r = new N(), h = 0; h < s.length; h++) {
                    var l = Number(s[h]),
                        c = new H(h, l);
                    h > 0 && (c.startpoint = r), c.Init(), r = c.endpointpoint, this.curgrades.push(c);
                }
                this.endposition = r, this.ChooseGrade = s;
            } else {
                for (r = new N(), h = 0; h < t.length; h++) {
                    l = Number(t[h]), c = new H(h, l);
                    h > 0 && (c.startpoint = r), c.Init(), r = c.endpointpoint, this.curgrades.push(c);
                }
                this.endposition = r;
            }
            console.log("GradeArray -- ", s.length);
        }
    }
    var T, E = Laya.Vector3;
    class z {
        constructor() {
            this.floorarray = [], this.treearray = [], this.fencearray = [], this.num = 1, this.curstagedic = {}, z.ins = this, a.EventOn(i.SceneInit, this, this.StageInit), a.StageOn(s.Restart, this, this.RessetStage);
        }
        static get Instance() {
            return z.ins ? z.ins : new z();
        }
        StageInit() {
            var e = ie.Instance.curplayerData.GainCollocation("mission");
            for (var t in e) {
                var s = e[t],
                    n = new D(s.id);
                this.curstagedic[n.Id] = n;
            }
            a.EventTrigger(i.StageInit);
        }
        RessetStage() {
            xe.Instance.KillNum = 0, xe.Instance.ReviveNum = 1, xe.Instance.fenceleftpos = 0, xe.Instance.fencerightpos = 0, xe.Instance.treeleftpos = 0, xe.Instance.treerightpos = 0, xe.Instance.GuideKill = 0, this.curstage && this.ClearStageResources();
            var e = Number(ie.Instance.curplayerData.GainAccount("stage"));
            this.curstage = this.CreatStage(e), console.log("本关卡为---", this.curstage.Id);
            for (let e = 0; e < this.curstage.ChooseGrade.length; e++) console.log("选中路段为---", this.curstage.ChooseGrade[e]);
            a.EventTrigger(i.StageCreateComplete);
        }
        ClearStageResources() {
            var e = this.curstage;
            console.log("舞台id为：--------", this.curstage.Id);
            for (let e = 0; e < this.floorarray.length; e++) {
                let t = this.floorarray[e];
                t && t.active && !t.destroyed && c.Instance.RecoveryModel(t), this.floorarray[e] = null;
            }
            this.floorarray.slice(0, this.floorarray.length);
            for (let e = 0; e < this.treearray.length; e++) {
                let t = this.treearray[e];
                t && t.active && !t.destroyed && c.Instance.RecoveryModel(t), this.treearray[e] = null;
            }
            this.treearray.splice(0, this.treearray.length);
            for (let e = 0; e < this.fencearray.length; e++) {
                let t = this.fencearray[e];
                t && t.active && !t.destroyed && c.Instance.RecoveryModel(t), this.fencearray[e] = null;
            }
            this.fencearray.splice(0, this.fencearray.length);
            for (var t = 0; t < e.curgrades.length; t++) e.curgrades[t].Clear();
            xe.Instance.RecoveryCharacter();
        }
        CreatStage(e) {
            var t = this.curstagedic[e];
            if (!t) {
                var i = ie.Instance.curplayerData.GainCollocation("road"),
                    s = Math.floor(.8 * i.length);
                (t = this.curstagedic[g.RandomANumber(s, i.length - 1)]).Id = e;
            }
            return this.CreatStageResources(t, e), t;
        }
        CreatStageResources(e, t) {
            for (var i = 0; i < e.curgrades.length; i++) e.curgrades[i].Creat(e, t);
            let s = z.Instance.curstagedic[t],
                a = Math.floor(1.65 * s.endposition.z / 8.23) + 13,
                o = -8.24;
            for (let e = 0; e < a; e++) {
                var r = c.Instance.GetModel(n.Instance.Prop.get(19), "");
                e > 0 ? (r.transform.position = new E(0, -.5, o), o += 8.24) : r.transform.position = new E(0, -.5, -16.48), n.Instance.mainscene.addChild(r), this.floorarray.push(r), this.LastGround = r.transform.position.z;
            }
            let h = [];
            for (let e = 0; e < z.Instance.curstagedic[t].curgrades[0].planes.length; e++) z.Instance.curstagedic[t].curgrades[0].planes[e].long > 0 && h.push(z.Instance.curstagedic[t].curgrades[0].planes[e]);
            let l = h[0].index,
                p = h[h.length - 1].index,
                d = 9 - 1.65 * l + 1;
            xe.Instance.fenceleftpos = d;
            let m = 9 - 1.65 * p - 1;
            xe.Instance.fencerightpos = m;
            let u = 9 - 1.65 * l + 5;
            xe.Instance.treeleftpos = u;
            let y = 9 - 1.65 * p - 4;
            xe.Instance.treerightpos = y;
            let w = -13.35,
                f = e.endposition.z + 60;
            for (let e = 0; e < f; e++) {
                var v = c.Instance.GetModel(n.Instance.Small_Fence.get(1), "");
                v.transform.position = new E(d, 0, e > 0 ? w : -15), v.transform.rotationEuler = new E(0, -90, 0), n.Instance.mainscene.addChild(v), g.Instance.SetCollider(v, 100), this.fencearray.push(v);
                var I = c.Instance.GetModel(n.Instance.Small_Fence.get(1), "");
                I.transform.position = new E(m, 0, e > 0 ? w : -15), I.transform.rotationEuler = new E(m, 90, 0), w += 1.65, n.Instance.mainscene.addChild(I), g.Instance.SetCollider(I, 100), this.fencearray.push(I);
            }
            let L = 0,
                x = 1.65 * e.endposition.z / 5 + 65;
            for (let e = 0; e < x; e++) {
                var S = g.RandomANumber(1, 5),
                    C = c.Instance.GetModel(n.Instance.Tree.get(S), "");
                C.transform.position = new E(u, 0, e > 0 ? L : -20), n.Instance.mainscene.addChild(C), this.treearray.push(C);
                var B = g.RandomANumber(1, 5),
                    k = c.Instance.GetModel(n.Instance.Tree.get(B), "");
                k.transform.position = new E(y, 0, e > 0 ? L : -20), n.Instance.mainscene.addChild(k), this.treearray.push(k), L += 3;
            }
            Number(ie.Instance.curplayerData.GainAccount("stage"));
            if (1 == e.isboss) {
                let t = 1.2 * e.curgrades[e.curgrades.length - 1].endpointpoint.z,
                    i = g.RandomANumber(-2, 2);
                xe.Instance.CreatBoss(new E(i, 0, t));
            }
        }
        CreatGround(e) {
            var t = this.LastGround,
                i = [];
            for (let a = 0; a < e; a++) {
                var s = c.Instance.GetModel(n.Instance.Prop.get(19), "");
                s.transform.position = new E(0, -.5, t), n.Instance.mainscene.addChild(s), this.floorarray.push(s), i.push(s), t += 8.24;
            }
            this.LastGround = t;
            var a = i[0].transform.position.z,
                o = i[i.length - 1].transform.position.z;
            this.CreatFence(a, o), this.CreatTree(a, o);
        }
        CreatFence(e, t) {
            var i = e,
                s = this.curstage.curgrades[this.curstage.curgrades.length - 1].fencearray;
            let a = Math.floor((t - e) / 1.65) + 8;
            for (let e = 0; e < a; e++) {
                var o = c.Instance.GetModel(n.Instance.Small_Fence.get(1), "");
                o.transform.position = new E(xe.Instance.fenceleftpos, 0, e > 0 ? i : i - 8.3), n.Instance.mainscene.addChild(o), s.push(o);
                var r = c.Instance.GetModel(n.Instance.Small_Fence.get(1), "");
                r.transform.position = new E(xe.Instance.fencerightpos, 0, e > 0 ? i : i - 8.3), n.Instance.mainscene.addChild(r), s.push(r), i += 1.65;
            }
        }
        CreatTree(e, t) {
            var i = this.curstage.curgrades[this.curstage.curgrades.length - 1].scencerys;
            let s = Math.floor((t - e) / 3) + 1;
            for (let t = 0; t < s; t++) {
                let t = g.RandomANumber(1, 5);
                var a = c.Instance.GetModel(n.Instance.Tree.get(t), "");
                a.transform.position = new E(xe.Instance.treeleftpos, 0, e), n.Instance.mainscene.addChild(a), i.push(a);
                var o = c.Instance.GetModel(n.Instance.Tree.get(t), "");
                o.transform.position = new E(xe.Instance.treerightpos, 0, e), n.Instance.mainscene.addChild(o), i.push(o), e += 3;
            }
        }
    }
    class O extends v.InGameViewUI {
        constructor() {
            super(), O.ins = this;
        }
        static get Instance() {
            return O.ins ? O.ins : new O();
        }
        Show() {
            f.AldEvent("进入游戏内界面"), B.Clear();
            let e = Number(ie.Instance.curplayerData.GainAccount("stage"));
            this.Logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "LOGO")
            });
            1 == e ? (this.Guide1.visible = !0, this.ani1.play(0, !0), this.Guide2.visible = !1, this.Guide3.visible = !1, this.Guide4.visible = !1) : (this.Guide1.visible = !1, this.Guide2.visible = !1, this.Guide3.visible = !1, this.Guide4.visible = !1), this.GoldNum.text = ie.Instance.curplayerData.GainAccount("money"), this.goaltext = this.GoalProgress.getChildByName("goal"), this.SetData(), this.SetTopAd(), this.InitUI(), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        Close() {}
        ClickExit() {
            W.Instance.OpenPopView(T.ExportView);
        }
        InitUI() {
            this.goaltext.text = xe.Instance.KillNum.toString(), this.GoalProgress.value = xe.Instance.KillNum / z.Instance.curstage.Goal;
        }
        SetData() {
            j.SetHuTuiList(this.BottomList, 2, ""), this.GunGun();
        }
        GunGun() {}
        SetTopAd() {}
        _setTopAd(e, t) {}
        _setIcon(e, t, i) {
            i.index = (i.index + 2) % this.topAdData.length, e.skin = this.topAdData[i.index].app_icon, t.text = this.topAdData[i.index].app_title;
        }
    }
    class U extends v.CompleteViewUI {
        constructor() {
            super(), this.win = !0, this.PushDataArray = [];
        }
        static get Instance() {
            return U.ins ? U.ins : new U();
        }
        Show(e) {
            this.Init(e);
            let t = this.DealData(xe.Instance.KillNum);
            this.goldnum.text = Math.floor(t).toString(), this.InitPushData(), this.Logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "LOGO")
            });
            this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        ClickExit() {
            W.Instance.OpenPopView(T.ExportView);
        }
        Close() {}
        Init(e) {
            switch (e) {
                case 1:
                    f.AldEvent("打开胜利界面"), this.loseimage.visible = !1, this.reviveimage.visible = !1, this.NoBtn.visible = !1, this.TryAgainBtn.visible = !1, this.ReviveBtn.visible = !1, this.NextLevelBtn.clickHandler = Laya.Handler.create(this, this.NextLevel, [!0]);
                    break;
                case 2:
                    f.AldEvent("打开失败界面"), this.winimage.visible = !1, this.reviveimage.visible = !1, this.NoBtn.visible = !1, this.NextLevelBtn.visible = !1, this.ReviveBtn.visible = !1, this.TryAgainBtn.clickHandler = Laya.Handler.create(this, this.TryAgain);
                    break;
                case 3:
                    f.AldEvent("打开结算界面"), this.winimage.visible = !1, this.loseimage.visible = !1, this.NextLevelBtn.visible = !1, this.TryAgainBtn.visible = !1, this.NoBtn.clickHandler = Laya.Handler.create(this, this.NoRevive), this.ReviveBtn.on(Laya.Event.CLICK, this, () => {
                        this.Revive();
                    });
            }
        }
        InitPushData() {
            platform.getInstance().initList(this.PushList);
        }
        clickAd(e) {
            j.navigate2Mini(e);
        }
        NextLevel(e) {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showInterstitial(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                let t = ie.Instance.curplayerData.GainAccount("stage");
                let m = ie.Instance.curplayerData.GainAccount("money");
                f.AldEnd(t, !1), C.playMusic(I.click), this.win = e;
                let gold = this.goldnum.text;
                ie.Instance.curplayerData.SetAccount("money", parseInt(m) + parseInt(gold));
                ie.Instance.curplayerData.SetAccount("stage", (parseInt(t) + 1));
                console.log("Why Are You Bad?");
                a.StageTrigger(s.Restart);
            });
        }
        Revive() {
            C.playMusic(I.click);
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showReward(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                xe.Instance.ReviveNum -= 1;
                xe.Instance.Revive();
            }, () => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
            });
        }
        NoRevive() {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showInterstitial(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                xe.Instance.ReviveNum -= 1;
                let m = ie.Instance.curplayerData.GainAccount("money");
                let gold = this.goldnum.text;
                ie.Instance.curplayerData.SetAccount("money", parseInt(m) + parseInt(gold));
                a.StageTrigger(s.Restart);
            });
        }
        TryAgain() {
            if (C.sound) C.open = !1, C.StopMusic();
            platform.getInstance().showInterstitial(() => {
                if (C.sound) C.open = !0, C.PlayBGM(L.BGM);
                let t = ie.Instance.curplayerData.GainAccount("stage");
                f.AldEnd(t, !1), C.playMusic(I.click), this.win = false;
                let m = ie.Instance.curplayerData.GainAccount("money");
                let gold = this.goldnum.text;
                ie.Instance.curplayerData.SetAccount("money", parseInt(m) + parseInt(gold));
                a.StageTrigger(s.Restart);
            });
        }
        Success() {
            a.StageTrigger(s.Restart);
        }
        DealData(e) {
            return e > z.Instance.curstage.Goal && (e = z.Instance.curstage.Goal), ie.Instance.curplayerData.GlobalData("mission_reward") * z.Instance.curstage.Modulus * (e / z.Instance.curstage.Goal);
        }
    }
    class X extends v.ExportViewUI {
        constructor() {
            super(...arguments), this.jump = !1;
        }
        OnOpen(e) {
            f.AldEvent("打开全屏幕导出界面"), this.CloseExportBtn.clickHandler = e ? Laya.Handler.create(this, this.ClickClose, [e], !1) : Laya.Handler.create(this, this.ClickClose, null, !1), platform.getInstance().initList(this.VList);
            this.SetData(), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        OnHide() {
            Laya.timer.clearAll(this), f.AldEvent("关闭全屏导出界面");
        }
        ClickClose(e) {
            if (W.Instance.ClosePopView(T.ExportView), this.off(Laya.Event.MOUSE_DOWN, this, this.TouchMovePush), this.off(Laya.Event.MOUSE_UP, this, this.TouchEnd), console.log("[log] 导出界面data----", e), e)
                switch (e) {
                    case 4:
                        a.StageTrigger(s.Restart);
                        break;
                    case 1:
                    case 2:
                    case 3:
                        W.Instance.ShowView(T.CompleteView, e);
                }
        }
        SetData() {
            j.SetHuTuiList(this.HList, 2, ""), j.SetHuTuiList(this.VList, 1, ""), this.GunGun();
        }
        GunGun() {}
    }
    class Y extends v.ExitViewUI {
        constructor() {
            super(), this.jump = !1, Y.ins = this;
        }
        static get Instance() {
            return Y.ins ? Y.ins : new Y();
        }
        OnOpen() {
            f.AldEvent("进入历史使用假界面---"), this.SetData(), this.CloseBtn.clickHandler = new Laya.Handler(this, this.ClickClose), B.keyiwudao && (this.on(Laya.Event.MOUSE_DOWN, this, this.TouchStart), this.on(Laya.Event.MOUSE_MOVE, this, this.TouchMovePush), this.on(Laya.Event.MOUSE_UP, this, this.TouchEnd)), this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            });
        }
        OnHide() {
            f.AldEvent("关闭历史使用假界面---");
        }
        TouchStart() {
            this.jump = !1;
        }
        TouchMovePush(e) {
            if (e.target instanceof Laya.Button) return;
            let t = this.PushList.array[g.RandomANumber(0, this.PushList.array.length - 1)];
            this.jump || 0 != W.Instance.showexportview || (j.navigate2Mini(t), this.jump = !0);
        }
        TouchEnd() {}
        ClickClose() {
            this.jump = !0, W.Instance.ClosePopView(T.ExitView), "MainView" != W.Instance.curView.name && "CompleteView" != W.Instance.curView.name || B.OpenBanner(), this.off(Laya.Event.MOUSE_DOWN, this, this.TouchMovePush), this.off(Laya.Event.MOUSE_UP, this, this.TouchEnd), this.off(Laya.Event.MOUSE_MOVE, this, this.TouchMovePush);
        }
        SetData() {
            j.SetHuTuiList(this.PushList, 1, "");
        }
    }
    class F extends v.BannerViewUI {
        constructor() {
            super(), this._isComplete = !1, this._isShowBanner = !1, this._bannerVal = .5, this._maxClickCnt = 18, this._clickCnt = 0, this._interval = 100, this._decrement = .01;
        }
        Show(e) {
            f.AldEvent("进入强误触界面"), xe.Instance.BannerIswin = e, this.click.play(null, !0), this.SetData(), this.desc = this.HitBtn.getChildByName("desc"), this.win = this.HitBtn.getChildByName("win"), this.lose = this.HitBtn.getChildByName("lose"), this.HitBtn.clickHandler = Laya.Handler.create(this, this.QiaoDa, null, !1), e ? (this.win.visible = !0, this.lose.visible = !1, this.winimage.visible = !0, this.loseimage.visible = !1, this.desc.text = "连续点击领取奖励") : (this.win.visible = !1, this.lose.visible = !0, this.winimage.visible = !1, this.loseimage.visible = !0, this.desc.text = "连续点击上马"), this._bannerVal = g.RandomNumber(.2, .4), Laya.timer.loop(this._interval, this, this.Daojishi), B.Instance.showBanner(e => {
                console.log("砸蛋界面出现banner---"), e && (console.log("banner加载完毕--", e), this.banner = e, e.hide());
            }, () => {}), this.height = Laya.stage.height, this.BG.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.BG.height = Laya.stage.height, this.height = Laya.stage.height;
            });
        }
        Close() {}
        QiaoDa() {
            if (this.finger.visible && (this.finger.visible = !1, this.click.stop()), !this._isComplete) {
                this._clickCnt++, this._clickCnt > this._maxClickCnt && (this._clickCnt = this._maxClickCnt);
                let e = this._clickCnt / this._maxClickCnt;
                this.jindu.value = e, e >= this._bannerVal && !this._isShowBanner && (this._isShowBanner = !0, this.banner && (f.OnShow(this.onBannerHide), this.banner.show(), Laya.timer.once(800, this, () => {
                    this.banner.hide();
                }))), e >= 1 && (this._isComplete = !0, this.onBannerHide());
            }
        }
        Daojishi() {
            let e = this.jindu.value;
            (e -= this._decrement) < 0 && (e = 0), this.jindu.value = e;
        }
        onBannerHide() {
            if (this.banner && this.banner.hide(), B.Instance.hideBanner(), f.OffShow(this.onBannerHide), xe.Instance.BannerIswin) {
                console.log("this.iswin---", xe.Instance.BannerIswin), f.AldEvent("强误触点击banner领取奖励成功");
                var e = ee.vd;
                let t = [{
                    reward_item: "1000"
                }, {
                    reward_num: "100"
                }, {
                    t: ie.Instance.ServerTime.toString()
                }];
                te.Instance.SendHttp(e, t, Laya.Handler.create(this, () => {
                    C.StopMusic(), C.playMusic(I.Win), W.Instance.ShowView(T.CompleteView, 1);
                }), null);
            } else console.log("this.iswin---", xe.Instance.BannerIswin), f.AldEvent("强误触点击banner复活成功"), xe.Instance.ReviveNum -= 1, xe.Instance.Revive();
        }
        SetData() {
            j.SetHuTuiList(this.BottomList, 2, ""), this.GunGun();
        }
        GunGun() {}
    }! function(e) {
        e[e.MainView = 0] = "MainView", e[e.IngameView = 1] = "IngameView", e[e.ShopView = 2] = "ShopView", e[e.TrialView = 3] = "TrialView", e[e.CompleteView = 4] = "CompleteView", e[e.ExportView = 5] = "ExportView", e[e.ExitView = 6] = "ExitView", e[e.BannerView = 7] = "BannerView";
    }(T || (T = {}));
    class W {
        constructor() {
            this.showexportview = 0, this.popViewDic = [], this.ViewSprite = new Laya.Sprite(), this.OtherViewSprite = new Laya.Sprite(), W.ins = this, Laya.stage.addChild(this.ViewSprite), Laya.stage.addChild(this.OtherViewSprite);
        }
        static get Instance() {
            return W.ins ? W.ins : new W();
        }
        ShowView(e, t = null) {
            null != this.curView && (this.curView.Close(), this.curView.destroy(), this.curView.removeSelf()), B.Clear(), this.curView = this.CreateView(e), this.curView.name = T[e], this.ViewSprite.addChild(this.curView), this.curView.Show(t);
        }
        CloseView() {
            null != this.curView && (this.curView.Close(), this.curView.destroy(), this.curView.removeSelf());
        }
        OpenPopView(e, t = null) {
            var i;
            B.Clear(), this.popViewDic[e] ? (i = this.popViewDic[e], this.OtherViewSprite.setChildIndex(i, this.OtherViewSprite.numChildren - 1), i.visible = !0) : (i = this.CreateView(e), this.OtherViewSprite.addChild(i), this.popViewDic[e] = i), e == T.ExportView && (this.showexportview = 1), i.OnOpen(t);
        }
        ClosePopView(e) {
            var t = this.popViewDic[e];
            null != t && (B.Clear(), t.OnHide(), t.visible = !1, e == T.ExportView && (this.showexportview = 0));
        }
        ClearPopViews() {
            B.Clear();
        }
        CreateView(e) {
            switch (e) {
                case T.MainView:
                    return new G();
                case T.IngameView:
                    return new O();
                case T.TrialView:
                    return new M();
                case T.CompleteView:
                    return new U();
                case T.ExportView:
                    return new X();
                case T.ShopView:
                    return new _();
                case T.ExitView:
                    return new Y();
                case T.BannerView:
                    return new F();
            }
            return null;
        }
    }
    class j {
        static SetHuTuiList(e, t = 1, i = "") {}
        static updateItem(e, t, i) {
            t.getComponent(q).Refresh(e);
        }
        static loadData() {}
        static navigate2Mini(e) {
            zs.sdk.navigate2Mini(e, ie.Instance.curplayerData.openid, () => {
                f.AldEvent("成功跳转到" + e.app_title);
            }, () => {
                f.AldEvent("跳转" + e.app_title + "失败"), 0 == W.Instance.showexportview && W.Instance.OpenPopView(T.ExportView);
            }, () => {});
        }
        static get CanCheat() {
            return 0 == ie.Instance.curplayerData.CheckScene || ("1037" == J.SceneNum || "1058" == J.SceneNum || "1067" == J.SceneNum || "1095" == J.SceneNum);
        }
    }
    j.isReady = !1;
    class q extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.self = this.owner, this.icon = this.self.getChildByName("icon"), this.btn = this.self.getChildByName("btn"), this.name = this.self.getChildByName("name"), this._tip = this.self.getChildByName("tip"), this.bottom = this.self.getChildByName("bottom"), this.remen = this.self.getChildByName("remen"), this.star = this.self.getChildByName("star"), this.diandian = this.icon.getChildAt(0), this.btn.clickHandler = new Laya.Handler(this, this.clickAd);
        }
        Refresh(e) {
            if (this.data = this.self.dataSource, this.type = e, this.name && (this.name.text = this.data.app_title), this._tip) {
                this._tip.visible = !0;
                let e = g.RandomANumber(1, 2e5),
                    t = e.toString() + "人玩过";
                e > 9999 && (t = Math.floor(e / 1e4) + "W人玩过"), this._tip.text = t;
            }
            if (this.diandian && (this.diandian.visible = !1), this.bottom) {
                let e = g.RandomANumber(1, 10);
                this.bottom.skin = "Game/res/bottom/" + e + ".png";
            }
            this.remen && (this.remen.visible = Math.random() < .2), this.star && (this.star.visible = Math.random() < .2), this.icon.skin = this.data.app_icon;
        }
        clickAd() {
            j.navigate2Mini(this.data);
        }
        onDestroy() {
            this.btn.clickHandler = null;
        }
    }
    class K {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Tools/ListItem.ts", q), e("Tools/ShopItem.ts", k);
        }
    }
    K.width = 720, K.height = 1280, K.scaleMode = "showall", K.screenMode = "none", K.alignV = "middle", K.alignH = "center", K.startScene = "LoadView.scene", K.sceneRoot = "", K.debug = !1, K.stat = !1, K.physicsDebug = !1, K.exportSceneToJson = !0, K.init();
    class J {
        constructor() {
            if (!y.Creat) {
                if (y.Creat = !0, window.Laya3D ? Laya3D.init(K.width, K.height) : Laya.init(K.width, K.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = K.scaleMode, Laya.stage.screenMode = K.screenMode, Laya.stage.alignV = K.alignV, Laya.stage.alignH = K.alignH, Laya.URL.exportSceneToJson = K.exportSceneToJson, (K.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), K.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), K.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.Browser.onWeiXin) {
                    if (Laya.Browser.window.wx.showShareMenu({
                            withShareTicket: !0
                        }), Laya.Browser.window.wx.onShareAppMessage(function() {
                            return {
                                title: "有人@你，一起骑马仗箭走天涯",
                                imageUrl: "Game/res/textrue/share.jpg"
                            };
                        }), Laya.Browser.window.wx.onShow(e => {
                            e.shareTicket, e.query.userId, e.query.shareTitle;
                            var t = Laya.LocalStorage.getItem("SceneValue");
                            t ? J.SceneNum = t : (Laya.LocalStorage.setItem("SceneValue", e.scene), J.SceneNum = e.scene), f.querychannel = e.query.channel, f.shareOpenId = e.query.userId, console.log("scene:", e.scene), null != f.querychannel && console.log("onShow channel is:", f.querychannel), e.referrerInfo && (f.referrerInfoappId = e.referrerInfo.appId, console.log("onShow appId is:", e.referrerInfo.appId));
                        }), !Laya.Browser.onWeiXin) return;
                    const e = Laya.Browser.window.wx.getUpdateManager();
                    e.onCheckForUpdate(function(e) {
                        console.log("最新版本:" + e.hasUpdate);
                    }), e.onUpdateReady(function() {
                        Laya.Browser.window.wx.showModal({
                            showCancel: !1,
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success(t) {
                                e.applyUpdate();
                            },
                            fail(t) {
                                e.applyUpdate();
                            }
                        });
                    });
                }
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new Ce();
        }
    }
    J.Ver = "1.0.0", J.CFG = "123", new J();
    var Q = Laya.HttpRequest,
        Z = Laya.Event;
    const $ = "https://archerworriorapi.xwxgame.com/";
    class ee {}
    ee.DengLu = "user/login", ee.KaiShi = "game/start", ee.JieShu = "game/play", ee.QianDao = "sign/sign", ee.Chengjiu = "achievement/getRewards", ee.Config = "config/table", ee.FenXiang = "fission/share", ee.LiXian = "fission/offline", ee.vd = "fission/vd", ee.FuHuo = "game/revival", ee.gadagdag = "treasure/click", ee.Invite = "invite/getRewards", ee.Lottery = "lottery/lottery", ee.ShareGetSkin = "theme/fission", ee.WearEquip = "theme/equip", ee.BuyEquip = "theme/buy", ee.ShouQuan = "user/auth", ee.JinBi = "user/sync";
    class te {
        constructor() {}
        static get Instance() {
            return te.ins ? te.ins : new te();
        }
        Login(e, t, i) {
            var s = ie.Instance,
                a = J.Ver;
            this.Complete(t);
        }
        Progress(e, t) {
            e && e.run();
        }
        Complete(e) {
            Laya.loader.load("config.json", Laya.Handler.create(this, (res) => {
                ie.Instance.SFSFSF = res.t, this.RessetConfig(res, e);
            }))
        }
        RessetConfig(e, t) {
            ie.Instance.ReSetting(e, () => {
                t.runWith(e)
            });
        }
        Errorcb(e, t) {
            null != e && e.runWith(t);
        }
        SendHttp(e, t, i, s, a = !0) {
            this.onHttpRequestComplete(i);
        }
        onHttpRequestComplete(e) {
            Laya.loader.load("gameInfo.json", Laya.Handler.create(this, (res) => {
                ie.Instance.ReSetting(res), null != e && e.runWith(res)
            }))
        }
        SFGSGSG(e) {
            for (var t, i, s, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, o = e.length, r = ""; n < o;) {
                if (t = 255 & e.charCodeAt(n++), n == o) {
                    r += a.charAt(t >> 2), r += a.charAt((3 & t) << 4), r += "==";
                    break;
                }
                if (i = e.charCodeAt(n++), n == o) {
                    r += a.charAt(t >> 2), r += a.charAt((3 & t) << 4 | (240 & i) >> 4), r += a.charAt((15 & i) << 2), r += "=";
                    break;
                }
                s = e.charCodeAt(n++), r += a.charAt(t >> 2), r += a.charAt((3 & t) << 4 | (240 & i) >> 4), r += a.charAt((15 & i) << 2 | (192 & s) >> 6), r += a.charAt(63 & s);
            }
            return r;
        }
    }
    class ie {
        constructor(e, t, i, s, a, n, o, r, h, l, c, p) {
            this.createTime = Laya.timer.currTimer, ie.ins = this, this.code = e, this.userInfo = t, this.nickName = i, this.avatarUrl = s, this.gender = a, this.province = n, this.city = o, this.country = r, this.device = h, this.share_id = l, this.scene = c, this.v = p;
        }
        static get Instance() {
            return null == ie.ins && new ie("222222", "你找谁？", "1233", "123", 1, "中国", "上海", "上海", "iphone6s", "123", "123", "123"), ie.ins;
        }
        ReSetting(e, t = null) {
            var i = e.token,
                s = e.app_setting,
                a = e.user,
                n = e.user_base,
                o = e.user_sign,
                r = e.user_achievement,
                h = e.user_invite,
                l = e.user_lottery;
            if (Laya.LocalStorage.getJSON("account")) {
                a = Laya.LocalStorage.getJSON("account");
            }
            null == this.curplayerData ? (this.curplayerData = new u(i, null, s, a, n, h, null, o, r, l), this.JundgCfg(e.table_version, t)) : (s && (this.curplayerData.netzheshe = s), a && (this.curplayerData.account = a), n && (this.curplayerData.accountssss = n), o && (this.curplayerData.qiandao = o), r && (this.curplayerData.renwu = r));
        }
        JundgCfg(e, t) {
            var i = Laya.LocalStorage.getJSON(J.CFG);
            i ? i.VER == e ? (console.log("已经拥有,不用更新"), this.SetCfg(i), t && t(!0)) : (console.log("cfg存在但是过期了"), Laya.LocalStorage.removeItem(J.CFG), te.Instance.SendHttp(ee.Config, null, Laya.Handler.create(this, i => {
                i.configs.VER = e, Laya.LocalStorage.setJSON(J.CFG, i.configs), this.SetCfg(i.configs), t && t(!0);
            }), Laya.Handler.create(this, e => {
                console.log("配置获取失败" + e), t && t(!1);
            }))) : (console.log("本地没有cfg"), te.Instance.SendHttp(ee.Config, null, Laya.Handler.create(this, i => {
                i.configs.VER = e, console.log(i.configs), Laya.LocalStorage.setJSON(J.CFG, i.configs), this.SetCfg(i.configs), t && t(!0);
            }), Laya.Handler.create(this, e => {
                console.log("配置获取失败" + e);
            })));
        }
        SetCfg(e) {
            this.curplayerData.peizhis = e;
        }
        RessetConfig() {
            te.Instance.SendHttp(ee.Config, null, Laya.Handler.create(this, e => {
                this.curplayerData.peizhis = e.configs;
            }), null);
        }
        get ServerTime() {
            let e = Laya.timer.currTimer;
            return this.SFSFSF + Math.ceil((e - this.createTime) / 1e3);
        }
    }
    var se, ae = Laya.Vector3;
    ! function(e) {
        e[e.Attack = 0] = "Attack", e[e.Idle = 1] = "Idle", e[e.Win = 2] = "Win", e[e.Pursue = 3] = "Pursue", e[e.Run = 4] = "Run", e[e.Die = 5] = "Die";
    }(se || (se = {}));
    class ne extends Laya.Script {
        constructor() {
            super(), this.m_distance = 20, this.m_distanceatk = 5, this.DIE = !1, this.m_npcspeed = 0, this.atked = !1, this.wined = !1, this.begin = !1, this.frontdie = !1, this.reardie = !1, this.canmove = !1, this.dir = new ae(), this.currotV = new ae(), this.currot = new Laya.Quaternion(), this.CurrectRotate = new Laya.Quaternion(), this.curspeed = 0, this.offest = new ae(), this.curpos = new ae(), this.die = !1, ne.ins = this, a.StageOn(s.Start, this, this.Begin), a.StageOn(s.Lose, this, this.GameOver), a.StageOn(s.Win, this, this.GameOver), a.StageOn(s.Press, this, this.AddSpeed), a.StageOn(s.UnPress, this, this.SlowSpeed);
        }
        static get Instance() {
            return ne.ins ? ne.ins : new ne();
        }
        onAwake() {
            this.m_npcmodel = this.owner, this.m_npcanimator = this.owner.getComponent(Laya.Animator), this.player = Ie.Instance.Player, this.m_distance = 1.65 * ie.Instance.curplayerData.NpcRunDistance, this.m_distanceatk = 1.65 * ie.Instance.curplayerData.NpcAtkDistance;
            let e = Number(ie.Instance.curplayerData.GainAccount("stage"));
            this.m_npcspeed = 1 == e ? .1 : z.Instance.curstage.npcspeed;
        }
        Begin() {
            this.ChangeState(se.Idle), this.begin = !0;
        }
        onUpdate() {
            if (!this.begin) return;
            if (this.npc_state == se.Die) return;
            if (this.frontdie || this.reardie) return void this.ChangeState(se.Die);
            let e = Number(ie.Instance.curplayerData.GainAccount("stage"));
            var t = ae.distance(this.player.transform.position, this.m_npcmodel.transform.position);
            t < this.m_distance && t > this.m_distanceatk && !this.atked && e > 2 ? (ae.subtract(this.player.transform.position, this.m_npcmodel.transform.position, this.currotV), ae.normalize(this.currotV, this.currotV), this.m_npcmodel.transform.lookAt(new ae(this.m_npcmodel.transform.position.x - this.currotV.x, this.m_npcmodel.transform.position.y, this.m_npcmodel.transform.position.z - this.currotV.z), new ae(0, 1, 0)), this.NPCMoveDir = this.currotV, this.canmove = !0, this.ChangeState(se.Run)) : t <= this.m_distanceatk && !this.atked && e > 2 && (ae.subtract(this.player.transform.position, this.m_npcmodel.transform.position, this.currotV), ae.normalize(this.currotV, this.currotV), this.m_npcmodel.transform.lookAt(new ae(this.m_npcmodel.transform.position.x - this.currotV.x, this.m_npcmodel.transform.position.y, this.m_npcmodel.transform.position.z - this.currotV.z), new ae(0, 1, 0)), this.NPCMoveDir = this.currotV, this.atked = !0, this.ChangeState(se.Attack)), this.Move(this.NPCMoveDir, this.m_npcspeed), this.RayCheck();
        }
        Move(e, t) {
            if (this.canmove) {
                var i = g.Instance.lerp(this.curspeed, t, .1);
                this.curspeed = i, ae.scale(e, this.curspeed, this.offest), ae.add(this.m_npcmodel.transform.position, this.offest, this.curpos), ae.lerp(this.m_npcmodel.transform.position, this.curpos, .15, this.curpos), this.curpos = new ae(this.curpos.x, this.curpos.y, this.curpos.z), this.m_npcmodel.transform.position = this.curpos;
            }
        }
        AddSpeed() {
            this.m_npcspeed = z.Instance.curstage.npcspeed;
        }
        SlowSpeed() {
            this.m_npcspeed = z.Instance.curstage.npcspeed / 2;
        }
        GameOver() {
            a.StageOff(s.Press, this, this.AddSpeed), a.StageOff(s.UnPress, this, this.SlowSpeed), a.StageOff(s.Start, this, this.Begin);
        }
        ChangeState(e) {
            if (this.npc_state != e) switch (this.npc_state = e, this.npc_state) {
                case se.Attack:
                    this.Attack();
                    break;
                case se.Pursue:
                    this.Pursue();
                    break;
                case se.Win:
                    this.Win();
                    break;
                case se.Idle:
                    this.Idle();
                    break;
                case se.Run:
                    this.Run();
                    break;
                case se.Die:
                    this.Die();
            }
        }
        Idle() {
            this.m_npcanimator.play("idle");
        }
        Attack() {
            this.m_npcanimator.play("atk"), Laya.timer.once(500, this, () => {
                this.canmove = !1;
            });
        }
        Win() {
            this.m_npcanimator.play("win");
        }
        Pursue() {}
        Run() {
            this.m_npcanimator.play("run");
        }
        Die() {
            this.die || (this.die = !0, C.playMusic(I.die), this.PiaoZi(), a.StageOff(s.Start, this, this.Begin), Laya.timer.once(500, this, () => {
                c.Instance.RecoveryModel(this.m_npcmodel);
            }), this.frontdie ? this.m_npcanimator.play("diefront") : this.reardie && this.m_npcanimator.play("dierear"), this.canmove = !1);
        }
        PiaoZi() {
            let e = new Laya.Image();
            e.skin = "Game/res/textrue/headshoot.png", e.scaleX = .5, e.scaleY = .5, e.anchorX = .5, e.anchorY = .5, Laya.stage.addChild(e), Laya.timer.once(1e3, this, () => {
                e.visible = !1;
            }), xe.Instance.UIArray.push(e);
            let t = this.m_npcmodel.getChildByName("UIPos"),
                i = new ae();
            Laya.timer.frameLoop(1, this, this.UIFollow, [t, e, i]);
        }
        UIFollow(e, t, i) {
            n.Instance.maincamera.worldToViewportPoint(e.transform.position, i), t.pos(i.x, i.y);
        }
        RayCheck() {
            if (this.wined) return;
            let e = new ae(this.m_npcmodel.transform.position.x, this.m_npcmodel.transform.position.y + 1.5, this.m_npcmodel.transform.position.z),
                t = m.getForward(this.m_npcmodel.transform),
                i = new Laya.Ray(e, t),
                s = new Laya.HitResult();
            if (n.Instance.mainscene.physicsSimulation.rayCast(i, s, 1, 200)) {
                let e = s.collider.owner.parent;
                if ("player" == e.name) {
                    let t = e.getComponent(fe);
                    e.getComponent(Laya.Animator);
                    t.Invincible || Laya.timer.once(150, this, () => {
                        console.log("npc击倒玩家---"), t.isdead = !0, this.wined = !0;
                    });
                } else "bonfire" == e.name ? (this.ChangeState(se.Die), this.wined = !0) : "stone" == e.name || e.name;
            }
        }
    }
    var oe, re = Laya.Vector3;
    ! function(e) {
        e[e.Run = 0] = "Run", e[e.Rescue = 1] = "Rescue", e[e.Arrest = 2] = "Arrest", e[e.Die = 3] = "Die";
    }(oe || (oe = {}));
    class he extends Laya.Script {
        constructor() {
            super(), this._hostagespeed = 0, this.begin = !1, this.isbarrier = !1, this.canmove = !1, this.isdead = !1, this.DownHit = new Laya.HitResult(), this.FowardHit = new Laya.HitResult(), this.currotV = new re(), this.hostagedir = new re(), this.offest = new re(), this.curpos = new re(), this.curspeed = 0, he.ins = this, a.StageOn(s.Start, this, this.Begin), a.StageOn(s.Lose, this, this.GameOver), a.StageOn(s.Win, this, this.GameOver), a.StageOn(s.Press, this, this.AddSpeed), a.StageOn(s.UnPress, this, this.SlowSpeed);
        }
        static get Instance() {
            return he.ins ? he.ins : new he();
        }
        onAwake() {
            this.m_hostagemodel = this.owner, this.m_hostageanimator = this.m_hostagemodel.getComponent(Laya.Animator), this.enemy = this.owner.parent.parent.getChildByName("enemy").getChildAt(0), this._hostagespeed = z.Instance.curstage.hostspeed;
        }
        Begin() {
            this.ChangeState(oe.Run), this.begin = !0;
        }
        onUpdate() {
            if (!this.begin) return;
            if (this.isdead) return void this.ChangeState(oe.Die);
            if (this.enemy.getComponent(pe).isdead || null == this.enemy || this.enemy.destroyed) return this.canmove = !1, void this.ChangeState(oe.Rescue);
            this.RayCheck();
            let e = this.LookforRoad();
            this.canmove && (e ? (re.subtract(e.transform.position, this.m_hostagemodel.transform.position, this.currotV), re.normalize(this.currotV, this.currotV), this.m_hostagemodel.transform.lookAt(new re(this.m_hostagemodel.transform.position.x - this.currotV.x, this.m_hostagemodel.transform.position.y, this.m_hostagemodel.transform.position.z - this.currotV.z), new re(0, 1, 0)), this.hostagedir = this.currotV, this.isbarrier || this.Move(this.currotV, this._hostagespeed)) : this.isbarrier || this.Move(new re(0, 0, 1), this._hostagespeed));
        }
        LookforRoad() {
            var e = [];
            for (let t = 0; t < A.DoorArray.length; t++) {
                let i = A.DoorArray[t];
                this.m_hostagemodel.transform.position.z < i.transform.position.z && e.push(i);
            }
            for (let t = 0; t < e.length; t++)
                for (let i = 0; i < e.length - t - 1; i++) {
                    if (re.distance(e[t].transform.position, this.m_hostagemodel.transform.position) > re.distance(e[t + 1].transform.position, this.m_hostagemodel.transform.position)) {
                        let i = e[t];
                        e[t] = e[t + 1], e[t + 1] = i;
                    }
                }
            return e[0];
        }
        Move(e, t) {
            if (1 != Number(ie.Instance.curplayerData.GainAccount("stage")) && this.canmove) {
                var i = g.Instance.lerp(this.curspeed, t, .1);
                this.curspeed = i, re.scale(e, this.curspeed, this.offest), re.add(this.m_hostagemodel.transform.position, this.offest, this.curpos), re.lerp(this.m_hostagemodel.transform.position, this.curpos, .15, this.curpos), this.curpos = new re(this.curpos.x, this.curpos.y, this.curpos.z), this.m_hostagemodel.transform.position = this.curpos;
            }
        }
        AddSpeed() {
            this._hostagespeed = z.Instance.curstage.hostspeed;
        }
        SlowSpeed() {
            this._hostagespeed = z.Instance.curstage.hostspeed / 2;
        }
        GameOver() {
            a.StageOff(s.Press, this, this.AddSpeed), a.StageOff(s.UnPress, this, this.SlowSpeed), a.StageOff(s.Start, this, this.Begin), Laya.timer.clearAll(this), this.canmove = !1;
        }
        ChangeState(e) {
            if (this.m_hostagestate != e) switch (this.m_hostagestate = e, this.m_hostagestate) {
                case oe.Run:
                    this.Run();
                    break;
                case oe.Arrest:
                    this.Arrest();
                    break;
                case oe.Rescue:
                    this.Rescue();
                    break;
                case oe.Die:
                    this.Die();
            }
        }
        Run() {
            this.m_hostageanimator.play("run");
        }
        Rescue() {
            this.m_hostageanimator.play("thank"), this.PiaoZi();
        }
        Arrest() {
            this.m_hostageanimator.play("dierear"), this.canmove = !1;
        }
        Die() {
            f.Shake(!0), this.m_hostageanimator.play("dierear"), this.canmove = !1, a.StageOff(s.Start, this, this.Begin), Laya.timer.clearAll(this), a.StageTrigger(s.Lose);
        }
        RayCheck() {
            this.FowardRayCheck ? (this.CrashBarrier(), this.isbarrier = !0) : this.isbarrier = !1;
        }
        PiaoZi() {
            let e = new Laya.Image();
            e.skin = "Game/res/textrue/happy.png", e.scaleX = .05, e.scaleY = .05, e.anchorX = .5, e.anchorY = .5, Laya.stage.addChild(e), Laya.timer.once(1e3, this, () => {
                e.visible = !1, Laya.timer.clear(this, this.UIFollow);
            }), xe.Instance.UIArray.push(e);
            let t = this.m_hostagemodel.getChildByName("UIPos"),
                i = new re();
            Laya.timer.frameLoop(1, this, this.UIFollow, [t, e, i]);
        }
        UIFollow(e, t, i) {
            n.Instance.maincamera.worldToViewportPoint(e.transform.position, i), t.pos(i.x, i.y);
        }
        CrashBarrier() {
            var e = this.FowardHit.collider.owner.parent;
            "stone" == e.name ? this._hostagespeed = 0 : "bonfire" == e.name || ("big_fence" == e.name ? this._hostagespeed = 0 : "wood_Cylinder" == e.name && (this._hostagespeed = 0));
        }
        get FowardRayCheck() {
            var e = !1,
                t = new re(this.m_hostagemodel.transform.position.x, this.m_hostagemodel.transform.position.y + 1, this.m_hostagemodel.transform.position.z + .5),
                i = new re(0, 0, 1),
                s = new Laya.Ray(t, i);
            return n.Instance.mainscene.physicsSimulation.rayCast(s, this.FowardHit, 1) && 100 == this.FowardHit.collider.collisionGroup && (e = !0), e;
        }
    }
    var le, ce = Laya.Vector3;
    ! function(e) {
        e[e.Idle = 0] = "Idle", e[e.Run = 1] = "Run", e[e.Die = 2] = "Die", e[e.Atk = 3] = "Atk";
    }(le || (le = {}));
    class pe extends Laya.Script {
        constructor() {
            super(), this.frontdie = !1, this.reardie = !1, this.canmove = !1, this.isdead = !1, this.atked = !1, this.begin = !1, this.m_chasenpcspeed = 0, this.pursuediatance = 0, this.atkdistance = 10, this.NPCRushSpeed = 0, this.Distance = 0, this.ChaseDistance = 0, this.NpcStartPos = new ce(), this.dir = new ce(), this.currotV = new ce(), this.currot = new Laya.Quaternion(), this.CurrectRotate = new Laya.Quaternion(), this.curspeed = 0, this.offest = new ce(), this.curpos = new ce(), this.die = !1, pe.ins = this, a.StageOn(s.Start, this, this.Begin), a.StageOn(s.Lose, this, this.GameOver), a.StageOn(s.Win, this, this.GameOver), a.StageOn(s.Press, this, this.AddSpeed), a.StageOn(s.UnPress, this, this.SlowSpeed);
        }
        static get Instance() {
            return pe.ins ? pe.ins : new pe();
        }
        onAwake() {
            this.m_chasenpcmodel = this.owner;
        }
        onStart() {
            this.m_chasenpcanimator = this.m_chasenpcmodel.getComponent(Laya.Animator), this.m_hostage = this.owner.parent.parent.getChildByName("player").getChildAt(0), this.NpcStartPos = this.m_chasenpcmodel.transform.position.clone(), this.m_chasenpcspeed = z.Instance.curstage.npcspeed, this.Distance = 1.65 * ie.Instance.curplayerData.NpcChaseDistance, this.ChaseDistance = 1.65 * ie.Instance.curplayerData.NpcRushDistance, this.NPCRushSpeed = ie.Instance.curplayerData.NPCRushSpeed;
        }
        Begin() {
            this.ChangeState(le.Run), this.begin = !0;
        }
        onUpdate() {
            if (!this.begin) return;
            if (this.isdead) return;
            let e = this.m_hostage.getComponent(he);
            if (e.isdead) this.ChangeState(le.Idle);
            else if (this.frontdie || this.reardie) this.ChangeState(le.Die);
            else {
                if (ce.distance(Ie.Instance.Player.transform.position, this.m_chasenpcmodel.transform.position) < this.Distance && !this.atked) {
                    ce.subtract(this.m_hostage.transform.position, this.m_chasenpcmodel.transform.position, this.currotV), ce.normalize(this.currotV, this.currotV), this.m_chasenpcmodel.transform.lookAt(new ce(this.m_chasenpcmodel.transform.position.x - this.currotV.x, this.m_chasenpcmodel.transform.position.y, this.m_chasenpcmodel.transform.position.z - this.currotV.z), new ce(0, 1, 0)), this.NPCMoveDir = this.currotV, this.canmove = !0, e.canmove = !0, this.m_chasenpcmodel.transform.position.z - this.NpcStartPos.z >= this.ChaseDistance && (this.atked = !0, this.m_chasenpcspeed = this.NPCRushSpeed, this.ChangeState(le.Atk));
                }
                this.Move(this.NPCMoveDir, this.m_chasenpcspeed), this.RayCheck();
            }
        }
        Move(e, t) {
            if (!(Number(ie.Instance.curplayerData.GainAccount("stage")) <= 2) && this.canmove) {
                var i = g.Instance.lerp(this.curspeed, t, .1);
                this.curspeed = i, ce.scale(e, this.curspeed, this.offest), ce.add(this.m_chasenpcmodel.transform.position, this.offest, this.curpos), ce.lerp(this.m_chasenpcmodel.transform.position, this.curpos, .15, this.curpos), this.curpos = new ce(this.curpos.x, this.curpos.y, this.curpos.z), this.m_chasenpcmodel.transform.position = this.curpos;
            }
        }
        AddSpeed() {
            this.m_chasenpcspeed = z.Instance.curstage.npcspeed;
        }
        SlowSpeed() {
            this.m_chasenpcspeed = z.Instance.curstage.npcspeed / 2;
        }
        GameOver() {
            a.StageOff(s.Press, this, this.AddSpeed), a.StageOff(s.UnPress, this, this.SlowSpeed), a.StageOff(s.Start, this, this.Begin), a.StageOff(s.Lose, this, this.GameOver), a.StageOff(s.Win, this, this.GameOver);
        }
        ChangeState(e) {
            if (this.m_chasenpcstate != e) switch (this.m_chasenpcstate = e, this.m_chasenpcstate) {
                case le.Atk:
                    this.Attack();
                    break;
                case le.Idle:
                    this.Idle();
                    break;
                case le.Run:
                    this.Run();
                    break;
                case le.Die:
                    this.Die();
            }
        }
        Idle() {
            this.m_chasenpcanimator.play("idle");
        }
        Attack() {
            this.m_chasenpcanimator.play("atk"), Laya.timer.once(500, this, () => {
                this.canmove = !1;
            });
        }
        Win() {
            this.m_chasenpcanimator.play("win");
        }
        Run() {
            this.m_chasenpcanimator.play("run");
        }
        Die() {
            this.die || (this.die = !0, C.playMusic(I.die), this.PiaoZi(), this.isdead = !0, a.StageOff(s.Start, this, this.Begin), this.frontdie && this.m_chasenpcanimator.play("diefront"), this.reardie && this.m_chasenpcanimator.play("dierear"), this.m_chasenpcanimator.play("diefront"), this.canmove = !1);
        }
        PiaoZi() {
            let e = new Laya.Image();
            e.skin = "Game/res/textrue/headshoot.png", e.scaleX = .5, e.scaleY = .5, e.anchorX = .5, e.anchorY = .5, Laya.stage.addChild(e), Laya.timer.once(1e3, this, () => {
                e.visible = !1, Laya.timer.clear(this, this.UIFollow);
            }), xe.Instance.UIArray.push(e);
            let t = this.m_chasenpcmodel.getChildByName("UIPos"),
                i = new ce();
            Laya.timer.frameLoop(1, this, this.UIFollow, [t, e, i]);
        }
        UIFollow(e, t, i) {
            n.Instance.maincamera.worldToViewportPoint(e.transform.position, i), t.pos(i.x, i.y);
        }
        RayCheck() {
            let e = new ce(this.m_chasenpcmodel.transform.position.x, this.m_chasenpcmodel.transform.position.y + .5, this.m_chasenpcmodel.transform.position.z),
                t = m.getForward(this.m_chasenpcmodel.transform),
                i = new Laya.Ray(e, t),
                s = new Laya.HitResult();
            if (n.Instance.mainscene.physicsSimulation.rayCast(i, s, 3, 200)) {
                let e = s.collider.owner.parent;
                if ("hostage" == e.name) {
                    e.getComponent(he).isdead = !0;
                } else "bonfire" == e.name ? this.ChangeState(le.Die) : "stone" == e.name ? this.m_chasenpcspeed = 0 : e.name;
            }
        }
    }
    class de {
        constructor() {
            this.keys = new Array(), this.values = new Array();
        }
        get count() {
            return this.keys.length;
        }
        add(e, t) {
            let i = this.keys.indexOf(e); - 1 == i ? (this.keys.push(e), this.values.push(t)) : this.values[i] = t;
        }
        remove(e) {
            let t = this.keys.indexOf(e); - 1 != t && (this.keys.splice(t, 1), this.values.splice(t, 1));
        }
        getValue(e) {
            let t = this.keys.indexOf(e);
            return -1 != t ? this.values[t] : null;
        }
        containKey(e) {
            return -1 != this.keys.indexOf(e);
        }
        containValue(e) {
            return -1 != this.values.indexOf(e);
        }
        clear() {
            this.keys.length = 0, this.values.length = 0;
        }
    }
    var me, ge = Laya.Vector3;
    ! function(e) {
        e[e.Idle = 0] = "Idle", e[e.Run = 1] = "Run", e[e.Die = 2] = "Die", e[e.Walk = 3] = "Walk";
    }(me || (me = {}));
    class ue extends Laya.Script {
        constructor() {
            super(), this.canmove = !1, this.FowardHit = new Laya.HitResult(), this.isfence = !1, this.arrowarray = [], this.m_arrowspeed = 0, this.AtkInterval = 0, this.BossSpeed = 1, this.CreatGround = !1, this.randomdir = !1, this.ArrowList = new de(), this.currotV = new ge(), this.currot = new Laya.Quaternion(), this.NormalizeSpeed = new ge(), this.curpos = new ge(), this.offest = new ge(), this.offestx = 0, this.atk = !1, this.run = !1, this.curspeed = 0, this.BossMoveDir = new ge(0, 0, 1), this.CurrectRotate = new Laya.Quaternion(), this.recover = !1, this.speed = 0, this.arrowoffset = new ge(), this.arrowcurpos = new ge(), a.StageOn(s.Press, this, this.AddSpeed), a.StageOn(s.UnPress, this, this.SlowSpeed), a.StageOn(s.Win, this, this.GameOver), a.StageOn(s.Lose, this, this.GameOver);
        }
        static get Instance() {
            return ue.ins ? ue.ins : new ue();
        }
        onAwake() {
            this.m_bossmodel = this.owner, this.m_horsemodel = this.m_bossmodel.parent, this.m_bossanimator = this.m_bossmodel.getComponent(Laya.Animator), this.m_horseanimator = this.m_horsemodel.getComponent(Laya.Animator), this.arrowpos = this.m_bossmodel.getChildByName("arrowpos"), this.archerpos = this.m_bossmodel.getChildByName("archerpos"), this.raypos = this.m_bossmodel.getChildByName("raypos"), this.CreatRay(this.raypos.transform.position.clone(), this.raypos.transform.rotationEuler.clone(), this.raypos), this.CreatArcher(this.archerpos.transform.position.clone(), this.archerpos.transform.rotationEuler.clone(), this.archerpos), this.Player = Ie.Instance.Player;
            let e = Number(ie.Instance.curplayerData.GainAccount("stage"));
            this.BossHp = Number(z.Instance.curstagedic[e].BossHp), this.NowBossHp = this.BossHp, this.AddHpUI(), this.BossDistance = 1.65 * ie.Instance.curplayerData.BossDistance, this.level = ie.Instance.curplayerData.GainAccount("stage"), this.AtkInterval = ie.Instance.curplayerData.BossAtkInterval - .5 * (this.level - 1), this.m_arrowspeed = ie.Instance.curplayerData.ArrowSpeed;
        }
        onUpdate() {
            if (!this.isdead) {
                var e = ge.distance(this.Player.transform.position, this.m_bossmodel.transform.position);
                if (e <= this.BossDistance && !this.run && (this.run = !0, f.Shake(), this.ChangeState(me.Run)), e >= 1.65 * ie.Instance.curplayerData.MaxBossDistance && this.run ? this.canmove = !1 : e > 1.65 * ie.Instance.curplayerData.MinBossDistance && e < 1.65 * ie.Instance.curplayerData.MaxBossDistance && this.run && (this.ChangeState(me.Run), this.canmove = !0, this.BossSpeed = z.Instance.curstage.mainrolespeed), this.canmove && (this.Move(this.BossMoveDir, this.BossSpeed), this.atk || (this.atk = !0, Laya.timer.once(1e3 * this.AtkInterval, this, this.Atk)), !this.CreatGround && this.m_bossmodel.transform.position.z > z.Instance.LastGround - 50 && z.Instance.CreatGround(5), this.randomdir || (this.randomdir = !0, Laya.timer.once(2e3, this, this.RandomDir)), this.RayCheck(), null != this.ArrowList))
                    for (var t = this.ArrowList.keys, i = 0; i < t.length; i++) {
                        var s = t[i];
                        if (null != t[i]) {
                            this.ArrowList.getValue(t[i]);
                            this.ArrowMove(s, this.ArrowList.getValue(s)[0], this.ArrowList.getValue(s)[1]);
                        }
                    }
            }
        }
        TurnDir(e) {
            0 != e.x && (ge.lerp(this.currotV, e, .35, e), this.currotV = e, Laya.Quaternion.rotationLookAt(e, new ge(0, 1, 0), this.currot), Laya.Quaternion.slerp(this.m_horsemodel.transform.rotation, this.currot, .025, this.currot), this.currot = new Laya.Quaternion(0, this.currot.y, 0), this.m_horsemodel.transform.rotation = this.currot);
        }
        MoveX(e) {
            this.m_horsemodel.transform.position.x < 0 && e < 0 && this.isfence || this.m_horsemodel.transform.position.x > 0 && e > 0 && this.isfence || this.m_horsemodel.transform.position.x >= xe.Instance.fenceleftpos && e > 0 || this.m_horsemodel.transform.position.x <= xe.Instance.fencerightpos && e < 0 || (e *= .07, this.m_horsemodel.transform.translate(new ge(e, 0, 0)));
        }
        RandomDir() {
            let e = Math.random() > .5 ? -.5 : .5;
            this.BossMoveDir = new ge(e, 0, 1), Laya.timer.once(200, this, () => {
                this.BossMoveDir = new ge(0, 0, 1), this.randomdir = !1;
            });
        }
        Move(e, t) {
            var i = g.Instance.lerp(this.curspeed, t, .1);
            this.curspeed = i, ge.scale(e, this.curspeed, this.offest), ge.add(this.m_horsemodel.transform.position, this.offest, this.curpos), ge.lerp(this.m_horsemodel.transform.position, this.curpos, .15, this.curpos), this.m_horsemodel.transform.position = this.curpos, this.m_horsemodel.transform.position = this.m_horsemodel.transform.position.x < xe.Instance.fencerightpos + .5 ? new ge(xe.Instance.fencerightpos + .5, this.m_horsemodel.transform.position.y, this.m_horsemodel.transform.position.z) : this.m_horsemodel.transform.position, this.m_horsemodel.transform.position = this.m_horsemodel.transform.position.x > xe.Instance.fenceleftpos - .5 ? new ge(xe.Instance.fenceleftpos - .5, this.m_horsemodel.transform.position.y, this.m_horsemodel.transform.position.z) : this.m_horsemodel.transform.position;
        }
        Atk() {
            Laya.timer.frameLoop(1, this, this.RotationMove);
        }
        SlowSpeed() {
            this.run && (this.ChangeState(me.Walk), this.BossSpeed = ie.Instance.curplayerData.BossSpeed / 2);
        }
        AddSpeed() {
            this.run && (this.ChangeState(me.Run), this.BossSpeed = ie.Instance.curplayerData.BossSpeed);
        }
        GameOver() {
            a.StageOff(s.Press, this, this.AddSpeed), a.StageOff(s.UnPress, this, this.SlowSpeed);
        }
        RotationMove() {
            ge.subtract(this.Player.transform.position, this.m_bossmodel.transform.position, this.currotV), ge.normalize(this.currotV, this.currotV);
            var e = new ge(-this.currotV.x, -this.currotV.y, -this.currotV.z);
            Laya.Quaternion.rotationLookAt(e, new ge(0, 10, 0), this.CurrectRotate), this.CurrectRotate.invert(this.CurrectRotate), Laya.Quaternion.slerp(this.m_bossmodel.transform.rotation, this.CurrectRotate, .05, this.CurrectRotate), this.m_bossmodel.transform.rotation = this.CurrectRotate;
            var t = m.getForward(this.m_bossmodel.transform);
            if (this.JupdeAngle(t, this.currotV) > .995) {
                Laya.timer.clear(this, this.RotationMove), this.Shoot();
                let e = g.tweenRotate(this.m_bossmodel.transform, new ge(0, 0, 0), 700, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                    e.clear(), this.atk = !1;
                }));
            }
        }
        JupdeAngle(e, t) {
            let i = new ge(e.x, 0, e.z),
                s = new ge(t.x, 0, t.z);
            return ge.normalize(i, i), ge.normalize(s, s), ge.dot(i, s);
        }
        Shoot() {
            this.CreatArrow();
            var e = this.m_arrow;
            this.m_arrow = null;
            let t = this.owner.getChildByName("raypos").getChildAt(0),
                i = m.getForward(t.transform),
                s = this.owner.getChildByName("raypos").transform,
                a = new Laya.Ray(new ge(s.position.x, s.position.y - 1, s.position.z), i),
                o = new Laya.HitResult();
            if (this.m_bossanimator.play("shoot"), n.Instance.mainscene.physicsSimulation.rayCast(a, o)) {
                let t = o.collider.owner.parent;
                this.ArrowList.add(e, [i, t]);
            } else this.ArrowList.add(e, [i, null]);
        }
        ArrowMove(e, t, i) {
            if (i) {
                if (e.destroyed) return;
                if (e.transform.position.z <= i.transform.position.z) {
                    if ("player" == i.name) {
                        i.getComponent(fe).isdead = !0, this.BossProgress.visible = !1;
                    }
                    this.ArrowList.containKey(e) && this.ArrowList.remove(e), c.Instance.RecoveryModel(e);
                } else {
                    var s = g.Instance.lerp(this.speed, this.m_arrowspeed, .1);
                    this.speed = s, ge.scale(t, this.speed, this.arrowoffset), ge.add(e.transform.position, this.arrowoffset, this.arrowcurpos), ge.lerp(e.transform.position, this.arrowcurpos, .15, this.arrowcurpos), e.transform.position = this.arrowcurpos;
                }
            } else {
                s = g.Instance.lerp(this.speed, this.m_arrowspeed, .1);
                this.speed = s, ge.scale(t, this.speed, this.arrowoffset), ge.add(e.transform.position, this.arrowoffset, this.arrowcurpos), ge.lerp(e.transform.position, this.arrowcurpos, .15, this.arrowcurpos), e.transform.position = this.arrowcurpos, this.recover || (this.recover = !0, Laya.timer.once(1e3, this, () => {
                    this.ArrowList.containKey(e) && this.ArrowList.remove(e), c.Instance.RecoveryModel(e), this.recover = !1;
                }));
            }
        }
        ChangeState(e) {
            if (this._bossstate != e) switch (this._bossstate = e, this._bossstate) {
                case me.Idle:
                    this.Idle();
                    break;
                case me.Run:
                    this.Run();
                    break;
                case me.Die:
                    this.Die();
                    break;
                case me.Walk:
                    this.Walk();
            }
        }
        Idle() {
            this.m_bossanimator.play("idle"), this.m_horseanimator.play("idle");
        }
        Walk() {
            this.m_horseanimator.play("walk"), this.m_bossanimator.play("down");
        }
        Run() {
            this.canmove = !0, this.m_bossanimator.play("down"), this.m_horseanimator.play("run");
        }
        Die() {
            this.BossProgress.visible = !1, this.isdead = !0, Laya.timer.clearAll(this), this.m_horseanimator.play("idle"), this.m_bossanimator.play("die"), a.StageTrigger(s.Win);
        }
        RayCheck() {
            this.FowardRayCheck ? this.CrashBarrier() : this.isfence = !1;
        }
        CrashBarrier() {
            "small_fence" == this.FowardHit.collider.owner.parent.name && (this.isfence = !0);
        }
        get FowardRayCheck() {
            var e = !1,
                t = new ge(this.m_bossmodel.transform.position.x, this.m_bossmodel.transform.position.y + .5, this.m_bossmodel.transform.position.z + 2);
            let i = m.getForward(this.m_bossmodel.transform);
            var s = new Laya.Ray(t, i);
            return n.Instance.mainscene.physicsSimulation.rayCast(s, this.FowardHit, 1) && 100 == this.FowardHit.collider.collisionGroup && (e = !0), e;
        }
        CreatRay(e, t, i) {
            var s = this.CreatRayPrefab();
            i.addChild(s), s.transform.position = e, s.transform.rotationEuler = t;
        }
        CreatRayPrefab() {
            return c.Instance.GetModel(n.Instance.Prop.get(18), "");
        }
        CreatArcher(e, t, i) {
            var s = c.Instance.GetModel(n.Instance.Prop.get(16), "");
            i.addChild(s), s.transform.position = e, s.transform.rotationEuler = t;
            var a = s.transform.scale.clone();
            a.x = .3, a.y = .3, a.z = .6, s.transform.scale = a;
        }
        CreatArrow() {
            var e = c.Instance.GetModel(n.Instance.Prop.get(17), "");
            n.Instance.mainscene.addChild(e), this.arrowarray.push(e), e.transform.position = this.arrowpos.transform.position.clone();
            var t = this.arrowpos.transform.rotationEuler.clone();
            e.transform.rotationEuler = t;
            let i = e.transform.scale.clone();
            i.z = .5, i.x = .5, i.y = .5, e.transform.scale = i, this.m_arrow = e;
        }
        AddHpUI() {
            this.BossProgress = new Laya.ProgressBar(), this.BossProgress.skin = "Game/res/textrue/healthbar1.png", this.BossProgress.scaleX = .4, this.BossProgress.scaleY = .4, this.BossProgress.anchorX = .5, this.BossProgress.anchorY = .5, Laya.stage.addChild(this.BossProgress), xe.Instance.UIArray.push(this.BossProgress);
            let e = this.m_bossmodel.getChildByName("UIPos");
            this.InitHpUI(), Laya.timer.frameLoop(1, this, () => {
                let t = new ge();
                n.Instance.maincamera.worldToViewportPoint(e.transform.position, t), this.BossProgress.pos(t.x, t.y);
            });
        }
        InitHpUI() {
            this.BossProgress.value = this.NowBossHp / this.BossHp;
        }
        LoseHp(e) {
            xe.Instance.KillNum++, O.Instance.InitUI(), this.NowBossHp >= e ? this.NowBossHp = this.NowBossHp -= e : this.NowBossHp < e && this.NowBossHp > 0 && (this.NowBossHp = 0), 0 == this.NowBossHp ? (this.ChangeState(me.Die), this.BossProgress.destroy()) : this.InitHpUI();
        }
    }
    var ye, we = Laya.Vector3;
    ! function(e) {
        e[e.Run = 0] = "Run", e[e.Idle = 1] = "Idle", e[e.Die = 2] = "Die", e[e.Win = 3] = "Win", e[e.Shoot = 4] = "Shoot", e[e.Walk = 5] = "Walk", e[e.Revive = 6] = "Revive";
    }(ye || (ye = {}));
    class fe extends Laya.Script3D {
        constructor() {
            super(), this.Invincible = !1, this.started = !1, this.shoot = !1, this.isbarrier = !1, this.isfence = !1, this.arrowarray = [], this.isdead = !1, this.canmove = !1, this._speed = 0, this._press = !1, this.RayDir = new we(), this.DownHit = new Laya.HitResult(), this.FowardHit = new Laya.HitResult(), this.curspeed = 0, this.currotV = new we(), this.currot = new Laya.Quaternion(), this.NormalizeSpeed = new we(), this.curpos = new we(), this.offest = new we(), this.ArrowList = new de(), this.arrowspeed = 0, this.speed = 0, this.arrowoffset = new we(), this.arrowcurpos = new we(), this.recover = !1, this.hitfence = !1, a.StageOn(s.Start, this, this.Begin), a.StageOn(s.Lose, this, this.GameOver), a.StageOn(s.Win, this, this.GameOver);
        }
        static get Instance() {
            return fe.ins ? fe.ins : new fe();
        }
        onAwake() {
            this.m_player = this.owner, this.m_animator = this.owner.getComponent(Laya.Animator), this.m_arrowpos = this.owner.getChildByName("arrowpos"), this.m_raypos = this.owner.getChildByName("raypos"), this.m_archerpos = this.owner.getChildByName("archerpos"), this.m_horseanimator = this.owner.getChildAt(this.owner.numChildren - 1).getComponent(Laya.Animator), this._speed = z.Instance.curstage.mainrolespeed, this.m_PlayerDamage = ie.Instance.curplayerData.PlayerDamage, this.stage = Number(ie.Instance.curplayerData.GainAccount("stage")), this.ChangeState(ye.Idle), this.DirRoatationLerp = ie.Instance.curplayerData.DirRoatationLerp, this.DirMoveLerp = ie.Instance.curplayerData.DirMoveLerp, this.arrowspeed = ie.Instance.curplayerData.ArrowSpeed, this.m_range = ie.Instance.curplayerData.Range;
        }
        Begin() {
            this.canmove = !0, this.CreatArrow(), this.ChangeState(ye.Walk);
        }
        onUpdate() {
            if (this.isdead) this.ChangeState(ye.Die);
            else {
                var e;
                if (this.canmove && this.started)
                    if (!this.isbarrier) {
                        e = this._press ? z.Instance.curstage.mainrolespeed : z.Instance.curstage.mainrolespeed / 2;
                        let t = m.getForward(this.m_player.transform);
                        this.Move(t, e);
                    }
                if (this.RayCheck(), null != this.ArrowList)
                    for (var t = this.ArrowList.keys, i = 0; i < t.length; i++) {
                        var s = t[i];
                        if (null != t[i]) {
                            this.ArrowList.getValue(t[i]);
                            this.ArrowMove(s, this.ArrowList.getValue(s)[0], this.ArrowList.getValue(s)[1]);
                        }
                    }
            }
        }
        MoveX(e) {
            this.m_player.transform.position.x < 0 && e < 0 && this.isfence || this.m_player.transform.position.x > 0 && e > 0 && this.isfence || this.m_player.transform.position.x >= xe.Instance.fenceleftpos && e > 0 || this.m_player.transform.position.x <= xe.Instance.fencerightpos && e < 0 || (e *= this.DirMoveLerp, this.canmove && this.started && this.m_player.transform.translate(new we(e, 0, 0)));
        }
        TurnDir(e) {
            0 != e.x && (we.lerp(this.currotV, e, .35, e), this.currotV = e, Laya.Quaternion.rotationLookAt(e, new we(0, 1, 0), this.currot), Laya.Quaternion.slerp(this.m_player.transform.rotation, this.currot, this.DirRoatationLerp * 1.5, this.currot), this.currot = new Laya.Quaternion(0, this.currot.y, 0), this.m_player.transform.rotation = this.currot);
        }
        Move(e, t) {
            var i = g.Instance.lerp(this.curspeed, t, .1);
            this.curspeed = i, we.scale(e, this.curspeed, this.offest), we.add(this.m_player.transform.position, this.offest, this.curpos), we.lerp(this.m_player.transform.position, this.curpos, .15, this.curpos), this.curpos = new we(this.curpos.x, this.curpos.y, this.curpos.z), this.m_player.transform.position = this.curpos, this.m_player.transform.position = this.m_player.transform.position.x < xe.Instance.fencerightpos + .5 ? new we(xe.Instance.fencerightpos + .5, this.m_player.transform.position.y, this.m_player.transform.position.z) : this.m_player.transform.position, this.m_player.transform.position = this.m_player.transform.position.x > xe.Instance.fenceleftpos - .5 ? new we(xe.Instance.fenceleftpos - .5, this.m_player.transform.position.y, this.m_player.transform.position.z) : this.m_player.transform.position;
        }
        ChangeState(e) {
            if (this.m_characterstate != e) switch (this.m_characterstate = e, this.m_characterstate) {
                case ye.Idle:
                    this.Idle();
                    break;
                case ye.Run:
                    this.Run();
                    break;
                case ye.Die:
                    this.Die();
                    break;
                case ye.Shoot:
                    this.Shoot();
                    break;
                case ye.Walk:
                    this.Walk();
            }
        }
        Idle() {
            this.m_animator.play("idle"), this.m_horseanimator.play("idle");
        }
        Run() {
            this.m_animator.play("down"), this.m_horseanimator.play("run");
        }
        ReviveState() {
            this.m_horseanimator.play("walk"), this.m_animator.play("down");
        }
        Die() {
            console.log("玩家死亡"), f.Shake(!0), this.canmove = !1, this.m_animator.play("die"), this.m_horseanimator.play("idle"), a.StageTrigger(s.Lose);
        }
        GameOver() {
            Laya.timer.clear(this, this.AnimatorState), a.StageOff(s.Start, this, this.Begin);
        }
        Walk() {
            this.m_horseanimator.play("walk");
        }
        Shoot() {
            this.m_animator.play("shoot");
        }
        RayCheck() {
            this.FowardRayCheck ? this.CrashBarrier() : (this.isbarrier = !1, this.isfence = !1);
        }
        CrashBarrier() {
            var e = this.FowardHit.collider.owner.parent;
            "stone" == e.name ? this.isbarrier = !0 : "bonfire" == e.name ? this.Invincible || this.ChangeState(ye.Die) : "big_fence" == e.name ? this.isbarrier = !0 : "wood_Cylinder" == e.name ? this.isbarrier = !0 : "small_fence" == e.name && (this.isfence = !0);
        }
        get FowardRayCheck() {
            var e = !1,
                t = new we(this.m_player.transform.position.x, this.m_player.transform.position.y + .5, this.m_player.transform.position.z);
            let i = m.getForward(this.m_player.transform);
            var s = new Laya.Ray(t, i);
            return n.Instance.mainscene.physicsSimulation.rayCast(s, this.FowardHit, 1) && 100 == this.FowardHit.collider.collisionGroup && (e = !0), e;
        }
        Archery() {
            var e = this.m_arrow;
            this.m_arrow = null, C.playMusic(I.shoot), Laya.timer.clear(this, this.ArrowFollow), Laya.timer.clear(this, this.AnimatorState);
            let t = this.owner.getChildByName("raypos").getChildAt(0),
                i = m.getForward(t.transform),
                s = this.owner.getChildByName("raypos").transform,
                a = new Laya.Ray(new we(s.position.x, s.position.y - .5, s.position.z), i),
                o = new Laya.HitResult();
            if (this.m_animator.play("shoot"), Laya.timer.frameLoop(1, this, this.AnimatorState), this.stage <= 2)
                if (n.Instance.mainscene.physicsSimulation.rayCast(a, o, this.m_range)) {
                    let t = o.collider.owner;
                    this.ArrowList.add(e, [i, t]);
                } else this.ArrowList.add(e, [i, null]);
            else if (n.Instance.mainscene.physicsSimulation.rayCast(a, o)) {
                let t = o.collider.owner;
                this.ArrowList.add(e, [i, t]);
            } else this.ArrowList.add(e, [i, null]);
        }
        ArrowMove(e, t, i) {
            if (i) {
                if (e.destroyed) return;
                let o = i.parent;
                if (e.transform.position.z >= o.transform.position.z) {
                    if ("npc" == o.name) {
                        C.playMusic(I.hit), 1 == this.stage ? O.Instance.Guide2.visible && (xe.Instance.GuideKill < 2 && (xe.Instance.GuideKill += 1), 1 == xe.Instance.GuideKill && (this.started = !0, O.Instance.Guide2.visible = !1, Laya.timer.once(2500, this, () => {
                            this.started = !1, O.Instance.Guide3.visible = !0, this.m_range = 100;
                        }))) : 2 == this.stage && O.Instance.Guide2.visible && (xe.Instance.GuideKill += 1, xe.Instance.GuideKill >= 1 && (this.started = !0, O.Instance.Guide2.visible = !1, Laya.timer.once(2e3, this, () => {
                            this.started = !1, O.Instance.Guide4.visible = !0, this.m_range = 100;
                        })));
                        let e = o.getComponent(ne),
                            t = o.getComponent(pe);
                        if (e) {
                            let t = Number(ie.Instance.curplayerData.GainAccount("stage"));
                            1 == t ? 1 == xe.Instance.GuideKill && ("npcfrontcollider" == i.name ? e.frontdie = !0 : "npcrearcollider" == i.name && (e.reardie = !0), xe.Instance.KillNum++, O.Instance.InitUI()) : 2 == t ? ((O.Instance.Guide2.visible || 1 == xe.Instance.GuideKill) && ("npcfrontcollider" == i.name ? e.frontdie = !0 : "npcrearcollider" == i.name && (e.reardie = !0)), xe.Instance.KillNum++, O.Instance.InitUI()) : t > 2 && ("npcfrontcollider" == i.name ? e.frontdie = !0 : "npcrearcollider" == i.name && (e.reardie = !0), xe.Instance.KillNum++, O.Instance.InitUI()), f.Shake(!0), f.stageShake();
                        } else t && (2 == this.stage ? O.Instance.Guide4.visible && xe.Instance.GuideKill >= 1 && (O.Instance.Guide4.visible = !1, f.AldEvent("完成第四阶段引导"), this.started = !0, Laya.timer.once(3e3, this, () => {
                            a.StageTrigger(s.Win);
                        }), "npcfrontcollider" == i.name ? t.frontdie = !0 : "npcrearcollider" == i.name && (t.reardie = !0), xe.Instance.KillNum++, O.Instance.InitUI()) : ("npcfrontcollider" == i.name ? t.frontdie = !0 : "npcrearcollider" == i.name && (t.reardie = !0), xe.Instance.KillNum++, O.Instance.InitUI()), f.Shake(!0), f.stageShake());
                    } else if ("big_fence" == o.name)
                        if (C.playMusic(I.hit), f.Shake(!0), 1 == this.stage) {
                            if (xe.Instance.GuideKill >= 1) {
                                O.Instance.Guide3.visible = !1, this.hitfence || (Laya.timer.once(5e3, this, () => {
                                    a.StageTrigger(s.Win);
                                }), f.AldEvent("完成第三阶段引导"), this.started = !0, this.hitfence = !0);
                                let e = g.tweenMove(o.transform, new we(o.transform.position.x, o.transform.position.y, o.transform.position.z + 5), 200, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                                        e.clear();
                                    })),
                                    t = g.tweenRotate(o.transform, new we(90, 0, 0), 500, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                                        t.clear();
                                    }));
                                Laya.timer.once(500, this, () => {
                                    c.Instance.RecoveryModel(o);
                                });
                            }
                        } else {
                            let e = g.tweenMove(o.transform, new we(o.transform.position.x, o.transform.position.y, o.transform.position.z + 5), 200, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                                    e.clear();
                                })),
                                t = g.tweenRotate(o.transform, new we(90, 0, 0), 500, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                                    t.clear();
                                }));
                            Laya.timer.once(1e3, this, () => {
                                c.Instance.RecoveryModel(o);
                            });
                        }
                    else if ("hostage" == o.name) {
                        if (this.stage > 1) {
                            C.playMusic(I.hit), o.getComponent(he).isdead = !0;
                        }
                    } else if ("boss" == o.name) {
                        C.playMusic(I.hit), o.getComponent(ue).LoseHp(this.m_PlayerDamage);
                    }
                    this.ArrowList.containKey(e) && this.ArrowList.remove(e), c.Instance.RecoveryModel(e);
                } else {
                    var n = g.Instance.lerp(this.speed, this.arrowspeed, .1);
                    this.speed = n, we.scale(t, this.speed, this.arrowoffset), we.add(e.transform.position, this.arrowoffset, this.arrowcurpos), we.lerp(e.transform.position, this.arrowcurpos, .15, this.arrowcurpos), e.transform.position = this.arrowcurpos;
                }
            } else {
                n = g.Instance.lerp(this.speed, this.arrowspeed, .1);
                this.speed = n, we.scale(t, this.speed, this.arrowoffset), we.add(e.transform.position, this.arrowoffset, this.arrowcurpos), we.lerp(e.transform.position, this.arrowcurpos, .15, this.arrowcurpos), e.transform.position = this.arrowcurpos, this.recover || (this.recover = !0, Laya.timer.once(500, this, () => {
                    this.ArrowList.containKey(e) && this.ArrowList.remove(e), c.Instance.RecoveryModel(e), this.recover = !1;
                }));
            }
        }
        AnimatorState() {
            this.m_animator.getCurrentAnimatorPlayState(0).normalizedTime >= 1 && (Laya.timer.clear(this, this.AnimatorState), this.m_arrowpos.destroyed || (this.CreatArrow(), this.shoot = !1));
        }
        CreatArrow() {
            var e = c.Instance.GetModel(n.Instance.Prop.get(17), "");
            n.Instance.mainscene.addChild(e), this.arrowarray.push(e), e.transform.position = this.m_arrowpos.transform.position.clone();
            var t = this.m_arrowpos.transform.rotationEuler.clone();
            e.transform.rotationEuler = t;
            let i = e.transform.scale.clone();
            i.z = .5, i.x = .8, i.y = .5, e.transform.scale = i, this.m_arrow = e, Laya.timer.frameLoop(1, this, this.ArrowFollow, [e, this.m_arrowpos]);
        }
        ArrowFollow(e, t) {
            t.destroyed ? Laya.timer.clear(this, this.ArrowFollow) : (e.transform.position = t.transform.position.clone(), e.transform.rotationEuler = t.transform.rotationEuler.clone());
        }
        Revive() {
            console.log("玩家复活Runner----"), this.Invincible = !0, Laya.timer.once(ie.Instance.curplayerData.Invincible, this, () => {
                this.Invincible = !1;
            }), this.ReviveState(), this.m_player.transform.position = new we(this.m_player.transform.position.x, this.m_player.transform.position.y, this.m_player.transform.position.z - 15), this.canmove = !0, this.ChangeState(ye.Walk), this.isdead = !1;
        }
    }
    var ve = Laya.Vector3;
    class Ie {
        constructor() {
            this.DownHit = new Laya.HitResult(), this.speed = 1, this.press = !1, this.win = !1, this.offset = new ve(0, 0, 0), this.offestx = 0, this.first = !1, this.poschazhi = new ve(), this.gengsuipos = new ve(), this.lllpos = new ve(), this.hights = 0, this.wights = 0, Ie.ins = this, a.StageOn(s.Lose, this, this.GameOver), a.StageOn(s.Win, this, this.GameOver);
        }
        static get Instance() {
            return Ie.ins ? Ie.ins : new Ie();
        }
        Init(e) {
            this.win = !1, this.Player = e, this.arrowpos = e.getChildByName("arrowpos");
            let t = this.Player.getComponent(fe);
            t && t.destroy(), this._runner = this.Player.addComponent(fe), this.Camera = n.Instance.maincamera, this.Camera.transform.position = new Laya.Vector3(0, 10, -19), this.Camera.transform.rotationEuler = new Laya.Vector3(-35.7, 180, 0), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.CameraFollow(), Laya.timer.frameLoop(1, this, this.CheckWin), this.stage = Number(ie.Instance.curplayerData.GainAccount("stage")), this.curtouchsmoothness = ie.Instance.curplayerData.CurTouchsmoothness, this.curtouchsize = ie.Instance.curplayerData.CurTouchsize;
        }
        CheckWin() {
            1 == this.stage ? this.Player.transform.position.z >= 1.65 * z.Instance.curstage.endposition.z && !this.win && (this.win = !0, a.StageTrigger(s.Win), Laya.timer.clear(this, this.CheckWin)) : this.stage > 2 && 0 == z.Instance.curstage.isboss && this.Player.transform.position.z >= 1.2 * z.Instance.curstage.endposition.z && !this.win && (this.win = !0, a.StageTrigger(s.Win), Laya.timer.clear(this, this.CheckWin));
        }
        onMouseDown(e) {
            this._runner.canmove && (this.stage > 2 ? this._runner.started = !0 : 2 != this.stage || this.first || (this._runner.started = !0), 2 != this.stage || this.first || (this.first = !0, Laya.timer.once(1500, this, () => {
                this._runner.started = !1, O.Instance.Guide2.visible = !0;
            })), O.Instance.Guide1.visible && (O.Instance.Guide1.visible = !1, f.AldEvent("完成第一阶段引导"), O.Instance.ani1.stop(), this._runner.started = !0, Laya.timer.once(2e3, this, () => {
                this._runner.started = !1, O.Instance.Guide2.visible = !0;
            })), this._runner._press = !0, this.curMousePos = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY), Laya.timer.frameLoop(1, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this._runner.ChangeState(ye.Run), a.StageTrigger(s.Press));
        }
        onMouseMove() {
            if (1 == this.stage || this._runner.canmove) {
                var e = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY),
                    t = e.x - this.curMousePos.x;
                t = (t = t > 50 ? 50 : t) < -50 ? -50 : t, this.offestx = g.Instance.lerp(this.offestx, t, this.curtouchsmoothness);
                var i = new ve(-t * this.curtouchsize, 0, 0);
                this._runner.TurnDir(i), this.curMousePos = e;
            } else Laya.timer.clear(this, this.onMouseMove);
        }
        onMouseUp() {
            this._runner.canmove && (this.offestx = 0, Laya.timer.clear(this, this.onMouseMove), this._runner._press = !1, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), this._runner.shoot || (this._runner.shoot = !0, this._runner.Archery()), this._runner.ChangeState(ye.Walk), a.StageTrigger(s.UnPress));
        }
        onMouseOut() {
            this._runner.canmove && (this.offestx = 0, Laya.timer.clear(this, this.onMouseMove), this._runner._press = !1, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), this._runner.ChangeState(ye.Walk), a.StageTrigger(s.UnPress));
        }
        GameOver() {
            this._runner.canmove = !1, this._runner._press = !1, this.CameraCancelFollow(), Laya.timer.clear(this, this.CheckWin), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        Revive() {
            Laya.timer.frameLoop(1, this, this.CheckWin), this.Camera.transform.position = new ve(this.Camera.transform.position.x, this.Camera.transform.position.y, this.Camera.transform.position.z - 15), this._runner.Revive(), this.CameraFollow(), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        CameraFollow() {
            this.hights = 0, this.wights = 0, ve.subtract(this.Player.transform.position, this.Camera.transform.position, this.poschazhi), Laya.timer.frameLoop(1, this, this.GenSui);
        }
        GenSui() {
            ve.subtract(this.Player.transform.position, this.poschazhi, this.gengsuipos), this.hights = g.Instance.lerp(this.hights, 1, .03), this.wights = g.Instance.lerp(this.wights, .8, .02), this.gengsuipos = new ve(this.gengsuipos.x, this.gengsuipos.y, this.gengsuipos.z - this.wights), ve.lerp(this.Camera.transform.position, this.gengsuipos, .25, this.lllpos), this.lllpos = new ve(this.gengsuipos.x, this.lllpos.y, this.lllpos.z), this.Camera.transform.position = this.lllpos;
            var e = new Laya.Quaternion(),
                t = new ve(this.gengsuipos.x, this.gengsuipos.y - .8, this.gengsuipos.z);
            Laya.Quaternion.lookAt(t, this.Player.transform.position, new ve(0, 1, 0), e), e.invert(e), Laya.Quaternion.slerp(this.Camera.transform.rotation, e, .1, e), this.Camera.transform.rotation = e;
        }
        CameraCancelFollow() {
            Laya.timer.clear(this, this.GenSui);
        }
    }
    class Le {
        constructor() {
            Le.ins = this;
        }
        static get Instance() {
            return Le.ins ? Le.ins : new Le();
        }
        Init(e) {
            this.m_npcmodel = e;
            let t = this.m_npcmodel.getComponent(ne);
            t && t.destroy(), this.m_npcrunner = this.m_npcmodel.addComponent(ne);
        }
    }
    class xe {
        constructor() {
            this.started = !1, this.GuideKill = 0, this.KillNum = 0, this.ReviveNum = 1, this.CharacterArray = [], this.UIArray = [], this.fenceleftpos = 0, this.fencerightpos = 0, this.treeleftpos = 0, this.treerightpos = 0, xe.ins = this, a.EventOn(i.StageInit, this, this.CreatStage), a.EventOn(i.StageCreateComplete, this, this.Init);
        }
        static get Instance() {
            return xe.ins ? xe.ins : new xe();
        }
        Init() {
            this.CreatCharacter(), this.mainscene = n.Instance.mainscene, Laya.stage.addChildAt(this.mainscene, 0), W.Instance.ShowView(T.MainView);
        }
        CreatStage() {
            z.Instance.RessetStage();
        }
        CreatCharacter() {
            this.CreatPlayer();
        }
        CreatPlayer() {
            var e = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[2]),
                t = Number(ie.Instance.curplayerData.GetUser(p.equip_themes)[1]),
                i = c.Instance.GetModel(n.Instance.Player.get(1), ""),
                s = c.Instance.GetModel(n.Instance.Horse.get(e), "");
            if (i.addChild(s), i.transform.position = new Laya.Vector3(0, 0, -9), s.transform.localScale = new Laya.Vector3(1, 1, 1), s.transform.localPosition = new Laya.Vector3(0, 0, 0), this.raypos = i.getChildByName("raypos"), this.archerpos = i.getChildByName("archerpos"), this.arrowpos = i.getChildByName("arrowpos"), this.cappos = i.getChildByName("cappos"), t) {
                var a = c.Instance.GetModel(n.Instance.Cap.get(t), "");
                this.cappos.addChild(a), a.transform.localScale = new Laya.Vector3(.5, .5, .5), a.transform.localPosition = new Laya.Vector3(0, 0, 0), a.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
            }
            this.raypos.getChildAt(0) || this.CreatRay(this.raypos.transform.position.clone(), this.raypos.transform.rotationEuler.clone(), this.raypos), this.archerpos.getChildAt(0) || this.CreatArcher(this.archerpos.transform.position.clone(), this.archerpos.transform.rotationEuler.clone(), this.archerpos), Ie.Instance.Init(i), n.Instance.mainscene.addChild(i), this.CharacterArray.push(i), g.Instance.PlayerSetCollider(i, 200);
        }
        CreatEnemy(e) {
            e.transform.rotationEuler = new Laya.Vector3(0, 180, 0), Le.Instance.Init(e), g.Instance.EnemySetCollider(e, 100), this.CharacterArray.push(e);
        }
        CreatChaseCharacter(e) {
            let t = e.getChildByName("enemy").getChildAt(0),
                i = e.getChildByName("player").getChildAt(0);
            i.transform.localPosition = new Laya.Vector3(0, 0, 0), i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), t.transform.localPosition = new Laya.Vector3(0, 0, -2), t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), g.Instance.EnemySetCollider(t, 100), g.Instance.HostageSetCollider(i, 200);
            let s = t.getComponent(pe);
            if (s) s.destroy();
            else {
                t.addComponent(pe);
            }
            let a = i.getComponent(he);
            if (a) a.destroy();
            else {
                i.addComponent(he);
            }
            this.CharacterArray.push(e);
        }
        CreatBoss(e) {
            var t = c.Instance.GetModel(n.Instance.Boss.get(1), ""),
                i = c.Instance.GetModel(n.Instance.Horse.get(50), "");
            if (t.getComponent(ue));
            else {
                t.addComponent(ue);
            }
            i.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 0, 0), t.transform.localScale = new Laya.Vector3(1, 1, 1), i.transform.position = e.clone(), n.Instance.mainscene.addChild(i), this.CharacterArray.push(i);
        }
        RecoveryCharacter() {
            for (let e = 0; e < this.CharacterArray.length; e++) {
                let t = this.CharacterArray[e];
                switch (t.name) {
                    case "npc":
                        let e = t.getComponent(ne);
                        e && e.destroy();
                        break;
                    case "pursue":
                        let i = t.getChildByName("player").getChildAt(0).getComponent(he),
                            s = t.getChildByName("enemy").getChildAt(0).getComponent(pe);
                        i && i.destroy(), s && s.destroy();
                        break;
                    case "horse1":
                        let a = t.getChildByName("boss");
                        a.active = !1, a.removeSelf(), c.Instance.RecoveryModel(a);
                        let n = a.getComponent(ue);
                        if (n) {
                            for (let e = 0; e < n.arrowarray.length; e++) {
                                let t = n.arrowarray[e];
                                c.Instance.RecoveryModel(t), n.arrowarray[e] = null;
                            }
                            n.arrowarray.splice(0, n.arrowarray.length), n.destroy();
                        }
                        break;
                    case "player":
                        let o = t.getComponent(fe),
                            r = t.getChildAt(t.numChildren - 1),
                            h = t.getChildByName("cappos").getChildAt(0);
                        if (h && (h.removeSelf(), c.Instance.RecoveryModel(h)), r.active = !1, r.removeSelf(), c.Instance.RecoveryModel(r), o) {
                            for (let e = 0; e < o.arrowarray.length; e++) {
                                let t = o.arrowarray[e];
                                c.Instance.RecoveryModel(t), o.arrowarray[e] = null;
                            }
                            o.arrowarray.splice(0, o.arrowarray.length), o.destroy();
                        }
                }
                c.Instance.RecoveryModel(t), this.CharacterArray[e] = null;
            }
            this.CharacterArray.splice(0, this.CharacterArray.length);
            for (let e = 0; e < this.UIArray.length; e++) {
                let t = this.UIArray[e];
                t.removeSelf(), t.destroy();
            }
            this.UIArray.splice(0, this.UIArray.length);
        }
        CreatRay(e, t, i) {
            var s = this.CreatRayPrefab();
            i.addChild(s), s.transform.position = e, s.transform.rotationEuler = t;
        }
        CreatRayPrefab() {
            return c.Instance.GetModel(n.Instance.Prop.get(18), "");
        }
        CreatArcher(e, t, i) {
            var s = c.Instance.GetModel(n.Instance.Prop.get(16), "");
            i.addChild(s), s.transform.position = e, s.transform.rotationEuler = t;
            var a = s.transform.scale.clone();
            a.x = .3, a.y = .3, a.z = .6, s.transform.scale = a;
        }
        Revive() {
            console.log("玩家复活---GameManager"), Ie.Instance.Revive(), W.Instance.ShowView(T.IngameView);
        }
        SetHorse(e) {
            let t = Ie.Instance.Player.getChildAt(Ie.Instance.Player.numChildren - 1);
            t.removeSelf(), c.Instance.RecoveryModel(t);
            var i = c.Instance.GetModel(n.Instance.Horse.get(e), "");
            Ie.Instance.Player.addChild(i), i.transform.localScale = new Laya.Vector3(1, 1, 1), i.transform.localPosition = new Laya.Vector3(0, 0, 0), Ie.Instance._runner.m_horseanimator = i.getComponent(Laya.Animator);
        }
        SetCap(e) {
            let t = Ie.Instance._runner.m_player.getChildByName("cappos"),
                i = t.getChildAt(0);
            i && (i.removeSelf(), c.Instance.RecoveryModel(i));
            let s = c.Instance.GetModel(n.Instance.Cap.get(e), "");
            t.addChild(s), s.transform.localPosition = new Laya.Vector3(0, 0, 0), s.transform.localScale = new Laya.Vector3(.5, .5, .5), s.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
        }
    }
    class Se {
        constructor() {
            Se.ins = this, a.StageOn(s.Lose, this, this.GameFailure), a.StageOn(s.Win, this, this.GameWin);
        }
        static get Instance() {
            return Se.ins ? Se.ins : new Se();
        }
        GameFailure() {
            HUHU_showInterstitialAd();
            xe.Instance.ReviveNum > 0 ? B.keyiwudao ? W.Instance.ShowView(T.BannerView, !1) : W.Instance.ShowView(T.CompleteView, 3) : (C.StopMusic(), console.log("ILose....."), W.Instance.ShowView(T.CompleteView, 2));
        }
        GameWin() {
            HUHU_showInterstitialAd();
            B.keyiwudao ? W.Instance.ShowView(T.BannerView, !0) : (C.StopMusic(), C.playMusic(I.Win), W.Instance.ShowView(T.CompleteView, 1));
        }
        Revive() {
            W.Instance.ShowView(T.CompleteView, 3);
        }
    }
    class Ce extends v.LoadViewUI {
        constructor() {
            super(), this.progressnum = 0, this.fast = .07, this.slow = .001, this.End = !1, this.EndProgress = !1, Laya.stage.addChild(this), Ce.ins = this, this.height = Laya.stage.height, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                this.height = Laya.stage.height;
            }), this.Init();
        }
        static get Instance() {
            return Ce.ins ? Ce.ins : new Ce();
        }
        Init() {
            console.log("load界面构造函数"), new xe(), new z(), new Se(), this.Login(), Laya.timer.frameLoop(1, this, this.UpdateProgress);
        }
        UpdateProgress() {
            this.progressnum <= .7 ? this.progressnum += this.fast : this.progressnum > .7 && this.progressnum < .99 ? this.progressnum += this.slow : this.End && (this.progressnum += this.slow), !this.EndProgress && this.progressnum >= 1 && (this.EndProgress = !0, this.progressnum = 1, Laya.timer.clear(this, this.UpdateProgress), this.LoadComplete()), this.LoadProgress.value = this.progressnum;
        }
        complete() {
            this.End = !0, this.slow = this.fast;
        }
        Login() {
            f.AldEvent("开始加载");
            this.LocalLogin();
        }
        LocalLogin() {
            te.Instance.Login(null, Laya.Handler.create(this, this.LoginComplete), Laya.Handler.create(this, this.LoginFail));
        }
        LoginComplete() {
            j.loadData(), f.AldEvent("本地服务器登陆成功"), console.log("本地服务器登陆成功");
            Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                platform.getInstance().startup("Archer-Warrior", res["id"], () => {
                    this.LoadSubPackage();
                });
            }))
        }
        LoginFail() {
            console.log("本地服务器登陆失败");
        }
        LoadComplete() {
            this.destroy(), a.EventTrigger(i.LoadComplete), f.AldEvent("资源加载完毕，开始进入主界面"), console.log("加载完毕--");
        }
        LoadSubPackage() {
            f.LoadSubPackage("Game", e => {
                e && (f.AldEvent("分包加载成功"), this.LoadScene());
            });
        }
        LoadScene() {
            Laya.Scene3D.load(o.MainScene, Laya.Handler.create(this, e => {
                this.mainscene = e, n.Instance.mainscene = this.mainscene, console.log("场景资源加载完毕---"), this.LoadPlayer();
            }));
        }
        LoadPlayer() {
            var e = [];
            for (let t = 0; t < o.Player.length; t++) e.push(o.Player[t]);
            Laya.loader.create(e, Laya.Handler.create(this, () => {
                for (let t = 0; t < o.Player.length; t++) {
                    var e = Laya.loader.getRes(o.Player[t]);
                    n.Instance.Player.set(t + 1, e), Laya.loader.clearRes(o.Player[t]);
                }
                console.log("玩家模型资源加载完毕---"), this.LoadHorse();
            }));
        }
        LoadHorse() {
            var e = [];
            for (let t = 0; t < o.Horse.length; t++) e.push(o.Horse[t]);
            Laya.loader.create(e, Laya.Handler.create(this, () => {
                for (let t = 0; t < o.Horse.length; t++) {
                    var e = Laya.loader.getRes(o.Horse[t]);
                    n.Instance.Horse.set(t + 50, e), Laya.loader.clearRes(o.Horse[t]);
                }
                console.log("马模型资源加载完毕---"), this.LoadBoss();
            }));
        }
        LoadBoss() {
            var e = [];
            for (let t = 0; t < o.Boss.length; t++) e.push(o.Boss[t]);
            Laya.loader.create(e, Laya.Handler.create(this, () => {
                for (let t = 0; t < o.Boss.length; t++) {
                    var e = Laya.loader.getRes(o.Boss[t]);
                    n.Instance.Boss.set(t + 1, e), Laya.loader.clearRes(o.Boss[t]);
                }
                console.log("boss模型资源加载完毕---"), this.LoadCap();
            }));
        }
        LoadCap() {
            var e = [];
            for (let t = 0; t < o.Cap.length; t++) e.push(o.Cap[t]);
            Laya.loader.create(e, Laya.Handler.create(this, () => {
                for (let t = 0; t < o.Cap.length; t++) {
                    var e = Laya.loader.getRes(o.Cap[t]);
                    n.Instance.Cap.set(t + 1, e), Laya.loader.clearRes(o.Cap[t]);
                }
                console.log("帽子模型资源加载完毕---"), this.LoadProp();
            }));
        }
        LoadProp() {
            Laya.loader.create(o.Prop, Laya.Handler.create(this, this.LoadResources));
        }
        LoadResources(e) {
            var t = e.getChildByName("Prop");
            for (let e = 0; e < t.numChildren; e++) {
                var i = t.getChildAt(e);
                i.active = !1, n.Instance.Prop.set(e + 1, i);
            }
            var s = e.getChildByName("plane");
            n.Instance.Plane.set(1, s);
            var a = e.getChildByName("small_fence");
            n.Instance.Small_Fence.set(1, a);
            var r = e.getChildByName("Tree");
            for (let e = 0; e < r.numChildren; e++) {
                var h = r.getChildAt(e);
                h.active = !1, n.Instance.Tree.set(e + 1, h);
            }
            Laya.loader.clearRes(o.Prop), console.log("道具资源加载完毕---"), this.complete();
        }
    }
    class Be {
        constructor() {
            if (!y.Creat) {
                if (y.Creat = !0, window.Laya3D ? Laya3D.init(K.width, K.height) : Laya.init(K.width, K.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = K.scaleMode, Laya.stage.screenMode = K.screenMode, Laya.stage.alignV = K.alignV, Laya.stage.alignH = K.alignH, Laya.URL.exportSceneToJson = K.exportSceneToJson, (K.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), K.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), K.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.Browser.onWeiXin) {
                    if (Laya.Browser.window.wx.showShareMenu({
                            withShareTicket: !0
                        }), Laya.Browser.window.wx.onShareAppMessage(function() {
                            return {
                                title: "有人@你，一起骑马仗箭走天涯",
                                imageUrl: "Game/res/textrue/share.jpg"
                            };
                        }), Laya.Browser.window.wx.onShow(e => {
                            e.shareTicket, e.query.userId, e.query.shareTitle;
                            var t = Laya.LocalStorage.getItem("SceneValue");
                            t ? Be.SceneNum = t : (Laya.LocalStorage.setItem("SceneValue", e.scene), Be.SceneNum = e.scene), f.querychannel = e.query.channel, f.shareOpenId = e.query.userId, console.log("scene:", e.scene), null != f.querychannel && console.log("onShow channel is:", f.querychannel), e.referrerInfo && (f.referrerInfoappId = e.referrerInfo.appId, console.log("onShow appId is:", e.referrerInfo.appId));
                        }), !Laya.Browser.onWeiXin) return;
                    const e = Laya.Browser.window.wx.getUpdateManager();
                    e.onCheckForUpdate(function(e) {
                        console.log("最新版本:" + e.hasUpdate);
                    }), e.onUpdateReady(function() {
                        Laya.Browser.window.wx.showModal({
                            showCancel: !1,
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success(t) {
                                e.applyUpdate();
                            },
                            fail(t) {
                                e.applyUpdate();
                            }
                        });
                    });
                }
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new Ce();
        }
    }
    return Be.Ver = "1.0.0", Be.CFG = "123", new Be(), e.Main = Be, e;
}({});