! function() {
    "use strict";
    class t {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass;
        }
    }
    t.width = 750, t.height = 1334, t.scaleMode = "showall", t.screenMode = "none", t.alignV = "middle", t.alignH = "center", t.startScene = "", t.sceneRoot = "", t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, t.init();
    class e {
        constructor(t, e) {
            this.func = t, this.thisObj = e;
        }
        run(...t) {
            return this.func.call(this.thisObj, ...t);
        }
    }
    class i {
        constructor() {
            this.func = new Array();
        }
        static create(t, e = null) {
            let s = new i();
            return s.add(t, e), s;
        }
        add(t, i = null) {
            this.has(t, i) || this.func.push(new e(t, i));
        }
        remove(t, e = null) {
            for (let i = this.func.length - 1; i >= 0; i--) {
                let s = this.func[i];
                if (s.func == t && s.thisObj == e) {
                    this.func.splice(i, 1);
                    break;
                }
            }
        }
        has(t, e) {
            return -1 != this.func.findIndex(i => i.thisObj == e && i.func == t);
        }
        run(...t) {
            for (let e = 0; e < this.func.length; e++) {
                let i = this.func[e];
                i.func.call(i.thisObj, ...t);
            }
        }
    }
    class s {
        static GetMoveDir(t, e, i, s) {
            let n = this.normalizeDir(t, e);
            0 != n.x ? (t.x > e.x ? s.y = -90 : s.y = 90, i.x = n.x) : 0 != n.y && (t.z > e.z ? s.y = 0 : s.y = 180, i.y = n.y);
        }
        static normalizeDir(t, e) {
            let i = this.Vector3Zero,
                s = new Laya.Vector3();
            Laya.Vector3.subtract(e, t, s), Laya.Vector3.normalize(s, s);
            let n = new Laya.Vector3(Math.abs(s.x), Math.abs(s.y), Math.abs(s.z));
            return n.x > 0 ? i.x = s.x > 0 ? 1 : -1 : n.z > 0 && (i.z = s.z > 0 ? 1 : -1), i;
        }
        static get Vector3Zero() {
            return new Laya.Vector3();
        }
        static get Vector3One() {
            return new Laya.Vector3(1, 1, 1);
        }
        static FindPath(t, e) {
            var i, s = e.split("/");
            if (s.length > 0) {
                var n = t.getChildByName(s[0]);
                if (1 == s.length) i = n;
                else if (null != n) {
                    let t = !0;
                    for (let e = 1; e < s.length; e++) {
                        const a = s[e];
                        if (null == a || a.length <= 0) {
                            t = !1;
                            break;
                        }
                        if (null != a && a.length > 0 && null == (n = n.getChildByName(a))) {
                            t = !1;
                            break;
                        }
                        t && (i = n);
                    }
                }
            }
            return i;
        }
        static ScreenToWorld(t, e) {
            let i = e.transform.position.z,
                s = .5 * e.fieldOfView * Math.PI / 180,
                n = i * Math.tan(s),
                a = n * e.aspectRatio,
                o = new Laya.Vector3(),
                r = e.transform,
                l = new Laya.Vector3();
            r.getRight(l);
            let h = new Laya.Vector3(l.x * a, l.y * a, l.z * a);
            Laya.Vector3.subtract(r.position, h, o);
            let d = new Laya.Vector3();
            r.getUp(d);
            let c = new Laya.Vector3(d.x * n, d.y * n, d.z * n);
            Laya.Vector3.subtract(o, c, o);
            let g = new Laya.Vector3();
            r.getForward(g);
            let u = new Laya.Vector3(-g.x * i, -g.y * i, -g.z * i);
            Laya.Vector3.add(o, u, o);
            let m = new Laya.Vector3();
            m.x = a / Laya.stage.width * t.x * 2, m.y = n / Laya.stage.height * t.y * 2, m.z = 0;
            let p = new Laya.Vector3();
            return o = this.InverseTransformPoint(r, o), Laya.Vector3.add(o, m, p), this.TransformPoint(r, p);
        }
        static InverseTransformPoint(t, e) {
            let i = new Laya.Vector3();
            t.getRight(i);
            let s = new Laya.Vector3();
            t.getUp(s);
            let n = new Laya.Vector3();
            t.getForward(n);
            let a = new Laya.Vector3(-n.x, -n.y, -n.z),
                o = this.ProjectDistance(e, t.position, i),
                r = this.ProjectDistance(e, t.position, s),
                l = this.ProjectDistance(e, t.position, a);
            return new Laya.Vector3(o, r, l);
        }
        static TransformPoint(t, e) {
            let i = new Laya.Vector3();
            return Laya.Vector3.transformQuat(e, t.rotation, i), Laya.Vector3.add(i, t.position, i), i;
        }
        static ProjectDistance(t, e, i) {
            let s = new Laya.Vector3();
            Laya.Vector3.subtract(t, e, s);
            let n = this.Angle(s, i) * Math.PI / 180;
            return Laya.Vector3.distance(t, e) * Math.cos(n);
        }
        static Angle(t, e) {
            let i = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
            return 180 * Math.acos(i) / Math.PI;
        }
        static SetLayer(t, e) {
            t.layer = e;
            for (let i = 0; i < t.numChildren; i++) {
                let n = t.getChildAt(i);
                n.numChildren > 0 ? s.SetLayer(n, e) : n.layer = e;
            }
        }
        static ToLayaV3(t) {
            let e = new Laya.Vector3(t.x, t.y, t.z);
            return e.x *= -1, e;
        }
        static Vector3Angle(t, e) {
            Laya.Vector3;
            let i = Math.sqrt(this.Vector3Magnitude(t) * this.Vector3Magnitude(e));
            if (i < 1.00000000362749e-15) return 0;
            let s = Laya.Vector3.dot(t, e) / i;
            return s = (s = s > 1 ? 1 : s) < -1 ? -1 : s, 57.29578 * Math.acos(s);
        }
        static Vector3Magnitude(t) {
            return t.x * t.x + t.y * t.y + t.z * t.z;
        }
        static loadFont(t, e) {
            Laya.Browser.onWeiXin ? (wx.loadFont(t), null != e && e.run()) : Laya.Browser.onQGMiniGame ? qg.loadFont(t) : Laya.loader.load(t, e, null, Laya.Loader.TTF);
        }
        static clamp(t, e, i) {
            return t < e ? t = e : t > i && (t = i), t;
        }
        static random(t, e) {
            return Math.floor(Math.random() * (t - e) + e);
        }
    }
    class n {
        constructor(t, e) {
            this.type = t, this.data = e;
        }
        stopImmediatePropagation() {
            this.isPropagationImmediateStopped = !0;
        }
        clean() {
            this.data = this.target = null, this.isPropagationImmediateStopped = !1;
        }
        static create(t, e) {
            let i;
            if (t.hasOwnProperty("eventPool") && (i = t.eventPool), i || (i = t.eventPool = []), i.length) {
                let t = i.pop();
                return t.type = e, t;
            }
            return new t(e);
        }
        static dispatchEvent(t, e, i) {
            let s = n.create(n, e);
            s.data = i, t.dispatchEvent(s), n.release(s);
        }
        static release(t) {
            t.clean(), Object.getPrototypeOf(t).constructor.eventPool.push(t);
        }
    }
    class a {
        constructor() {
            this.dicEventListener = new Map(), this.onceList = new Array();
        }
        on(t, e, i, s, n) {
            let a;
            return this.hasEventListener(t) ? a = this.dicEventListener.get(t) : (a = new Array(), this.dicEventListener.set(t, a)), this.insertEventBin(a, t, e, i, s, !!n), this;
        }
        once(t, e, i, s) {
            return this.on(t, e, i, s, !0), this;
        }
        off(t, e, i) {
            return this.removeListener(t, e, i), this;
        }
        offAll(t) {
            return t && this.hasEventListener(t) ? this.dicEventListener.delete(t) : this.dicEventListener.clear(), this;
        }
        offAllCaller(t) {
            let e = new Array();
            this.dicEventListener.forEach(i => {
                for (let s = 0; s < i.length; s++) {
                    let n = i[s];
                    n.thisObject == t && e.push(n);
                }
            });
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                this.removeListener(i.type, i.listener, i.thisObject);
            }
            return this;
        }
        hasEventListener(t) {
            return this.dicEventListener.has(t);
        }
        dispatchEvent(t) {
            t.target = this, this.notifyListener(t);
        }
        dispatchEventWith(t, e) {
            if (this.hasEventListener(t)) {
                let i = n.create(n, t);
                i.data = e, this.dispatchEvent(i), n.release(i);
            }
            return !0;
        }
        insertEventBin(t, e, i, s, n, a) {
            n = 0 | +n;
            let o = -1,
                r = t.length;
            for (let e = 0; e < r; e++) {
                let a = t[e];
                if (a.listener == i && a.thisObject == s && a.target == this) return !1; - 1 == o && a.priority < n && (o = e);
            }
            let l = {
                type: e,
                listener: i,
                thisObject: s,
                priority: n,
                target: this,
                dispatchOnce: !!a
            };
            return -1 !== o ? t.splice(o, 0, l) : t.push(l), !0;
        }
        removeListener(t, e, i) {
            this.hasEventListener(t) && this.removeEventBin(this.dicEventListener.get(t), e, i);
        }
        removeEventBin(t, e, i) {
            let s = t.length;
            for (let n = 0; n < s; n++) {
                let s = t[n];
                if (s.listener == e && s.thisObject == i && s.target == this) return t.splice(n, 1), !0;
            }
            return !1;
        }
        notifyListener(t) {
            let e = this.dicEventListener.get(t.type);
            if (e && 0 != e.length) {
                for (let i = 0; i < e.length; i++) {
                    let s = e[i];
                    if (null != s && (s.listener.call(s.thisObject, t), s.dispatchOnce && this.onceList.push(s), t.isPropagationImmediateStopped)) break;
                }
                for (; this.onceList.length;) {
                    let t = this.onceList.pop();
                    t.target.off(t.type, t.listener, t.thisObject);
                }
            }
        }
    }
    var o, r, l = Laya.Handler;
    class h {
        constructor() {
            this.isKeepMemory = !1;
        }
    }
    class d {
        constructor() {
            this.Progress = 0, this.needLoad = new Array();
        }
        add(t, e, i = !0) {
            if (-1 == this.needLoad.findIndex((e, i, s) => e.url == t)) {
                let s = new h();
                s.isKeepMemory = i, s.url = t, s.type = e, this.needLoad.push(s);
            }
            return this;
        }
        onCompletion(t) {
            return this.finish = t, this;
        }
        onItemCompletion(t) {
            return this.loadItem = t, this;
        }
        start() {
            c.instance.loadGroup(this);
        }
    }
    class c {
        constructor() {
            this.mOldRes = new Array(), this.resDic = new Map(), null == c.mInstance && (c.mInstance = this);
        }
        static get instance() {
            return null == this.mInstance && new c(), this.mInstance;
        }
        getRes(t) {
            return Laya.loader.getRes(t);
        }
        loadGroup(t) {
            let e = new Array();
            t.needLoad.forEach(t => {
                e.push({
                    url: t.url,
                    type: t.type
                });
            }), Laya.loader.create(e, l.create(this, i => {
                if (i) {
                    for (let e = 0; e < t.needLoad.length; e++) {
                        let i = t.needLoad[e];
                        this.resDic.set(i.url, i);
                    }
                    null != t.finish && t.finish.run();
                } else console.error("", e);
            }), l.create(this, e => {
                t.Progress = 100 * e, null != t.loadItem && t.loadItem.runWith([t.Progress]);
            }));
        }
        load(t, e) {
            let i = {},
                s = new h();
            "string" == typeof t ? (s.url = t, s.isKeepMemory = !0, i = t) : (s = i, i.type = t.type, i.url = t.url), Laya.loader.create(i, Laya.Handler.create(this, () => {
                this.resDic.set(s.url, s), null != e && e.run();
            }));
        }
        pop(t = !1) {
            for (t && (this.mOldRes.splice(0, this.mOldRes.length), this.resDic.forEach((t, e) => {
                    this.mOldRes.push(e);
                })); this.mOldRes.length > 0;) {
                let t = this.mOldRes.pop(),
                    e = this.resDic.get(t);
                null != e && this.resDic.delete(e.url), Laya.loader.clearRes(t);
            }
            t && (this.resDic.clear(), Laya.loader.clearUnLoaded());
        }
        push() {
            this.resDic.forEach((t, e) => {
                t.isKeepMemory || this.mOldRes.push(e);
            });
        }
    }
    c.mInstance = null,
        function(t) {
            t[t.None = 0] = "None", t[t.Running = 1] = "Running", t[t.Success = 2] = "Success", t[t.Failure = 3] = "Failure";
        }(o || (o = {}));
    class g {
        constructor() {
            this.mStatus = o.None, this.mErr = "", this.mProgress = 0;
        }
        get progress() {
            return this.mProgress;
        }
        elapsedTime() {
            return Laya.timer.currTimer - this.mStartedTime;
        }
        get status() {
            return this.mStatus;
        }
        get taskName() {
            return "";
        }
        get errInfo() {
            return this.mErr;
        }
        get isRunning() {
            return this.status == o.Running;
        }
        setComplete(t) {
            return this.onFinish = t, this;
        }
        execute(t = null) {
            this.mProgress = 0, this.isRunning || Laya.timer.frameLoop(1, this, this.update, [t]);
        }
        tick(t) {
            return this.status == o.Running ? (this.onUpdate(), this.latch = !1, this.mStatus) : this.latch ? (this.latch = !1, this.mStatus) : (this.mStartedTime = Laya.timer.currTimer, this.mStatus = o.Running, this.mOwnerSystem = t, this.onExecute(), o.Running == this.mStatus && this.onUpdate(), this.mStatus);
        }
        update(t) {
            this.tick(t) != o.Running && (null != this.onFinish && this.onFinish.runWith([this.status == o.Success]), Laya.timer.clear(this, this.update));
        }
        endAction(t = !0) {
            this.status == o.Running ? (this.latch = !0, this.mStatus = t ? o.Success : o.Failure, this.mProgress = this.mStatus == o.Success ? 1 : 0, this.onStop()) : this.onForcedStop();
        }
        reset() {
            this.latch = !1, this.mStatus = o.None, Laya.timer.clear(this, this.update), this.onReset(), this.onForcedStop();
        }
        onExecute() {}
        onUpdate() {}
        onStop() {}
        onReset() {}
        onForcedStop() {}
    }! function(t) {
        t[t.RunInSequence = 0] = "RunInSequence", t[t.RunInParallel = 1] = "RunInParallel";
    }(r || (r = {}));
    class u extends g {
        constructor(t) {
            super(), this.actions = new Array(), this.finished = new Array(), this.executionMode = r.RunInSequence, this.executionMode = t;
        }
        get progress() {
            let t = 0;
            for (let e = 0; e < this.actions.length; e++) t += this.actions[e].progress;
            let e = t / this.actions.length;
            return e = isNaN(e) ? 0 : e, 0 == this.actions.length && (e = 1), e;
        }
        onExecute() {
            this.mCurIndex = 0, this.finished.splice(0, this.finished.length), this.mProgress = 0;
        }
        onUpdate() {
            if (super.onUpdate(), 0 != this.actions.length) switch (this.executionMode) {
                case r.RunInParallel:
                    this.checkParallelTask();
                    break;
                case r.RunInSequence:
                    this.checkInSequenceTask();
            } else this.endAction();
        }
        checkParallelTask() {
            for (let t = 0; t < this.actions.length; t++) {
                if (-1 != this.finished.findIndex(e => e == t)) continue;
                let e = this.actions[t].tick(this.mOwnerSystem);
                if (e == o.Failure) return this.mErr = this.actions[t].errInfo, this.endAction(!1), void(null != this.actions[t].onFinish && this.actions[t].onFinish.runWith(!0));
                e == o.Success && (this.finished.push(t), null != this.actions[t].onFinish && this.actions[t].onFinish.runWith(!0));
            }
            this.finished.length == this.actions.length && this.endAction();
        }
        checkInSequenceTask() {
            for (let t = this.mCurIndex; t < this.actions.length; t++) {
                let e = this.actions[t].tick(this.mOwnerSystem);
                if (e == o.Failure) return this.endAction(!1), void(null != this.actions[t].onFinish && this.actions[t].onFinish.runWith(!1));
                if (e == o.Running) return void(this.mCurIndex = t);
                null != this.actions[t].onFinish && this.actions[t].onFinish.runWith(!0);
            }
            this.endAction();
        }
        onReset() {
            for (let t = 0; t < this.actions.length; t++) this.actions[t].reset();
            this.mCurIndex = 0, this.finished.splice(0, this.finished.length);
        }
        addTask(t) {
            return this.actions.push(t), this;
        }
        clear() {
            this.reset(), this.onForcedStop(), this.actions.splice(0, this.actions.length);
        }
    }
    class m {
        constructor() {
            this.mStateDic = new Map();
        }
        get curState() {
            return this.mCurState;
        }
        stop() {
            null != this.curState && (this.curState.onExit(null, null), this.mCurState = null);
        }
        registerState(t) {
            null != t && (this.mStateDic.has(t.stateId) || this.mStateDic.set(t.stateId, t));
        }
        removeState(t) {
            this.mStateDic.has(t) && this.mStateDic.delete(t), null != this.curState && this.curState.stateId == t && (this.mCurState.onExit(null), this.mCurState = null);
        }
        switchState(t, e) {
            if (null != this.curState && this.curState.stateId == t) return;
            if (!this.mStateDic.has(t)) return void console.error("stateid =" + t);
            let i = this.mStateDic.get(t);
            null != this.curState && this.curState.onExit(i, e), i.onEnter(null == this.mCurState ? null : this.curState, e), this.mCurState = i;
        }
        update() {
            null != this.curState && this.curState.onUpdate();
        }
    }
    class p {
        static get current() {
            return null == this.mSceneStateMachine.curState ? null : this.mSceneStateMachine.curState;
        }
        static go(t, e = null) {
            this.mSceneStateMachine.switchState(t, e);
        }
        static addScene(t) {
            this.mSceneStateMachine.registerState(t);
        }
        static removeScene(t) {
            this.mSceneStateMachine.removeState(t);
        }
        static init() {
            Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        static onUpdate() {
            this.mSceneStateMachine.update();
        }
    }
    p.mSceneStateMachine = new m();
    class S {
        constructor() {
            this.mSceneTask = new u(r.RunInParallel), this.mSequenceTask = null, this.mParallelTask = null, this.mSceneTask.setComplete(new Laya.Handler(this, () => {
                this.onTaskFinish(), this.mSceneTask.actions.splice(0, this.mSceneTask.actions.length);
            }));
        }
        static init() {
            p.init();
        }
        static go(t, e = null) {
            p.go(t, e);
        }
        static add(t) {
            p.addScene(t);
        }
        static remove(t) {
            p.removeScene(t);
        }
        get stateId() {
            return this.sceneId;
        }
        onEnter(t, e) {
            this.onSceneEnter(t, e), this.mSceneTask.execute(this);
        }
        onExit(t, e) {
            this.mSceneTask.reset(), this.mSceneTask.endAction(!1), this.onLeaveScene(t, e);
        }
        addSceneTask(t, e = r.RunInSequence) {
            return e == r.RunInParallel ? null != this.mParallelTask ? this.mParallelTask.addTask(t) : (this.mParallelTask = new u(e), this.mParallelTask.addTask(t), this.mParallelTask.addTask(this.mSequenceTask)) : null != this.mSequenceTask ? this.mSequenceTask.addTask(t) : (this.mSequenceTask = new u(e), this.mSequenceTask.addTask(t), this.mSceneTask.addTask(this.mSequenceTask)), this;
        }
        onUpdate() {}
        onTaskFinish() {}
        onSceneEnter(t, e) {}
        onLeaveScene(t, e) {}
    }
    class k {}
    k.packRootUrl = "";
    var y = fgui.UIPackage;
    class I {
        constructor(t) {
            this.fileName = t;
        }
        load(t, e) {
            fgui.UIPackage.loadPackage(k.packRootUrl + "/" + this.fileName, Laya.Handler.create(this, () => {
                this.loaded = !0, t.call(e);
            }));
        }
    }
    class L extends fgui.Window {
        constructor(t, e) {
            super(), this.mCloseBtnName = "BtnClose", this.packName = t, this.resName = e, this.url = `ui://${t}/${e}`, this.addUISource(new I(t));
        }
        static add(t) {
            return this.mWinds.set(t.url, t), t;
        }
        static remove(t) {
            this.mWinds.has(t.url) && (this.mWinds.delete(t.url), t.dispose());
        }
        static show(t, e) {
            if (this.mWinds.has(t)) {
                let i = this.mWinds.get(t);
                i.data = e, i.isShowing || i.show();
            } else console.error(" url:" + t);
        }
        static hide(t, e) {
            if (this.mWinds.has(t)) {
                let i = this.mWinds.get(t);
                i.isShowing && (i.data = e, i.hide());
            } else console.error(" url:" + t);
        }
        static hideAll(t = null) {
            this.mWinds.forEach((e, i) => {
                !e.isShowing || null != t && -1 != t.findIndex(t => t == e.url) || e.hide();
            });
        }
        static delAll(t = null) {
            let e = new Array();
            this.mWinds.forEach((i, s) => {
                null != t && -1 != t.findIndex(t => t == i.url) || e.push(i.url);
            });
            for (let t = 0; t < e.length; t++) this.remove(this.mWinds.get(e[t]));
        }
        static del(t) {
            this.mWinds.has(t) && this.remove(this.mWinds.get(t));
        }
        onInit() {
            let t = y.createObjectFromURL(this.url);
            if (null != t) {
                if (this.contentPane = t.asCom, this.width = fairygui.GRoot.inst.width, this.height = fairygui.GRoot.inst.height, this.centerOn(fgui.GRoot.inst, !0), null != this.mCloseBtnName && 0 != this.mCloseBtnName.length) {
                    let t = this.contentPane.getChild(this.mCloseBtnName);
                    t && (t.asCom || t.asButton) && (this.closeButton = t);
                }
            } else console.error(" url" + this.url);
        }
    }
    L.mWinds = new Map();
    const C = Laya.ClassUtils.regClass;
    class f {
        constructor() {
            f.Init();
        }
        static Init() {}
        static regClass(t, e) {
            C(t, e);
        }
        initComs(t, e) {
            this.addCom(t, e), this.initDatas(t, e);
        }
        addCom(t, e) {
            if (t.name != e.name) console.error("");
            else {
                f.initCom(t, e.coms);
                for (let i = 0; i < e.childs.length; i++) {
                    let s = e.childs[i],
                        n = t.getChildAt(s.instanceID);
                    null != n && this.addCom(n, s);
                }
            }
        }
        static initCom(t, e) {
            for (let i = 0; i < e.length; i++) {
                let s = e[i],
                    n = Laya.ClassUtils.getClass(s.name);
                null != n ? t.addComponent(n).onSerialization(s.data) : console.error(" " + s.name);
            }
        }
        initDatas(t, e) {
            if (t.name != e.name) console.error("");
            else {
                f.initData(t, e.coms);
                for (let i = 0; i < e.childs.length; i++) {
                    const s = e.childs[i];
                    let n = t.getChildAt(s.instanceID);
                    null != n && this.initDatas(n, s);
                }
            }
        }
        static initData(t, e) {
            for (let i = 0; i < e.length; i++) {
                let s = e[i],
                    n = Laya.ClassUtils.getClass(s.name);
                t.getComponent(n).onInit();
            }
        }
    }
    class P {
        static playSound(t, e = 1) {
            Laya.SoundManager.playSound(t, e);
        }
        static playMusic(t, e = 1) {
            Laya.SoundManager.playSound(t, e);
        }
    }
    class w extends Laya.Script3D {
        constructor() {
            super(...arguments), this.triggerEnter = new i(), this.triggerExit = new i(), this.triggerStay = new i(), this.collisionEnter = new i(), this.collisionExit = new i(), this.collisionStay = new i();
        }
        onAwake() {}
        onTriggerEnter(t) {
            this.triggerEnter.run(t);
        }
        onTriggerExit(t) {
            this.triggerExit.run(t);
        }
        onTriggerStay(t) {
            this.triggerStay.run(t);
        }
        onCollisionEnter(t) {
            this.collisionEnter.run(t), this.triggerEnter.run(t.other);
        }
        onCollisionExit(t) {
            this.collisionExit.run(t), this.triggerExit.run(t.other);
        }
        onCollisionStay(t) {
            this.collisionStay.run(t), this.triggerStay.run(t.other);
        }
    }
    class v extends Laya.Script3D {
        constructor() {
            super(...arguments), this.events = new Map();
        }
        onAwake() {
            this.onInit();
        }
        onInit() {
            this.ani = this.owner.getComponent(Laya.Animator);
        }
        get currentAni() {
            return this.ani.getControllerLayer().getCurrentPlayState().animatorState.clip.name;
        }
        onSerialization(t) {}
        registered(t, e, s = null) {
            this.events.has(t) ? this.events.get(t).add(e, s) : this.events.set(t, i.create(e, s));
        }
        GraphEvent(t, e, i) {
            Laya.timer.frameOnce(1, this, t => {
                if (this.events.has(t)) {
                    let e = this.events.get(t);
                    e && e.run();
                }
            }, [i], !1);
        }
    }
    class A {}
    A.Game_Name_Prefis = "SlapKing_", A.Role_Skin_Num = 15, A.Arrow_Skin_Num = 9, A.Skin_Num_Per_Page = 9, A.Unlock_Role_Skin_Cost = 500, A.Unlock_Arrow_Skin_Cost = 500, A.Unlock_Role_Skin_Cost_Arr = [0, 500, 1e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3], A.Unlock_Arrow_Skin_Cost_Arr = [0, 500, 1e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3], A.SkinUI_Watch_AD_Rewards = 300, A.Share_Record_Video_Rewards = 200, A.Lose_Rewards = 5, A.Win_Rewards = 20, A.EndlessMode_Win_Rewards = 30, A.EndlessMode_lose_Rewards = 10, A.WinUI_Watch_AD_Rewards_Multiple = 5, A.LoseUI_Watch_AD_Rewards_Multiple = 2, A.Win_Bonus = 10, A.Win_Unlock_Skin_Progress = 5, A.WatchAd_Unlock_Skin_Progress = 10, A.Treasure_Chest_Prize = [50, 50, 50, 50, 75, 75, 100, 100, 150], A.SignIn_Coins_num = [100, 200, 300, 400, 500, 600, 700], A.Watch_AD_Key_Reward = 3, A.Level_Unlock_Endless_Mode = 3, A.GameSceneNumArr = ["gamescene1", "gamescene2"], A.OFFLINE_TIME = 18e5, A.Login_Reward_Normal = 3, A.Login_Reward_AD = 6, A.AD_Play_Speed = 1, A.AD_Play_Speed_perc = .01, A.Watch_AD_PS_reward = 10, A.Invite_Friends_PS_Reward = 5, A.LAYA_SK_Coins = A.Game_Name_Prefis + "coins", A.LAYA_SK_ChestKeyNum = A.Game_Name_Prefis + "keyNum", A.LAYA_SK_MuiscOnOff = A.Game_Name_Prefis + "musicOnOff", A.LAYA_SK_VibrateOnOff = A.Game_Name_Prefis + "vibrateOnOff", A.LAYA_SK_SignInDay = A.Game_Name_Prefis + "signInDay", A.LAYA_SK_SignInTime = A.Game_Name_Prefis + "signInTime", A.LAYA_SK_RoleSkin = A.Game_Name_Prefis + "roleSkin", A.LAYA_SK_ArrowSkin = A.Game_Name_Prefis + "arrowSkin", A.LAYA_SK_CurSkin = A.Game_Name_Prefis + "curSkinId", A.LAYA_SK_CurEnemySkin = A.Game_Name_Prefis + "curEnemySkinId", A.LAYA_SK_CurArrowSkin = A.Game_Name_Prefis + "curArrowSkinId", A.LAYA_SK_HasNewSkin = A.Game_Name_Prefis + "hasNewSkin", A.LAYA_SK_FirstSignIn = A.Game_Name_Prefis + "FirstSignIn", A.Laya_SK_Current_PS = A.Game_Name_Prefis + "PhysicalStrength", A.Laya_SK_OffLineTime = A.Game_Name_Prefis + "OfflineTime", A.Laya_SK_WatchNum = A.Game_Name_Prefis + "WatchNum";
    class _ {
        constructor() {
            this.defaultSkinId = 0, this.defaultEnemySkinId = 1, this.initUnlockProgress = 0;
            let t = Laya.LocalStorage.getItem(A.LAYA_SK_CurSkin);
            this.mCurId = t ? +t : this.defaultSkinId, t = Laya.LocalStorage.getItem(A.LAYA_SK_CurEnemySkin), this.mEnemySkinId = t ? +t : this.defaultEnemySkinId, this.mAllRoleSkins = new Array();
            let e = Laya.LocalStorage.getItem(A.LAYA_SK_RoleSkin);
            null == e || "" == e ? this.initAllSkinsData() : this.mAllRoleSkins = JSON.parse(e);
            let i = Laya.LocalStorage.getItem(A.LAYA_SK_HasNewSkin);
            this.mHasNewSkin = i ? +i : 0;
            var s = Laya.LocalStorage.getItem("HasNewSkin");
            this.mHasNewSkin = s ? +s : 0;
            let n = Laya.LocalStorage.getItem("randomSkin");
            this.mRandomSkinId = n ? +n : -1;
            let a = Laya.LocalStorage.getItem("unlockProgress");
            this.mUnlockProgress = a ? +a : this.initUnlockProgress;
        }
        get CurId() {
            return this.mCurId;
        }
        set CurId(t) {
            this.mCurId = t, Laya.LocalStorage.setItem(A.LAYA_SK_CurSkin, this.mCurId.toString());
        }
        get enemySkinId() {
            return this.mEnemySkinId;
        }
        set enemySkinId(t) {
            this.mEnemySkinId = t, Laya.LocalStorage.setItem(A.LAYA_SK_CurEnemySkin, this.mEnemySkinId.toString());
        }
        get HasNewSkin() {
            return this.mHasNewSkin;
        }
        set HasNewSkin(t) {
            this.mHasNewSkin = t, Laya.LocalStorage.setItem(A.LAYA_SK_HasNewSkin, this.mHasNewSkin.toString());
        }
        get unlockProgress() {
            return this.mUnlockProgress;
        }
        set unlockProgress(t) {
            this.mUnlockProgress = t, Laya.LocalStorage.setItem("unlockProgress", this.mUnlockProgress.toString());
        }
        get randomSkinId() {
            return this.mRandomSkinId;
        }
        set randomSkinId(t) {
            this.mRandomSkinId = t, Laya.LocalStorage.setItem("randomSkin", this.mRandomSkinId.toString());
        }
        getAllSkinsInfoByType(t = b.RoleSkin) {
            return t == b.RoleSkin ? this.mAllRoleSkins : this.mAllArrowSkins;
        }
        unLockSkin(t, e = b.RoleSkin) {
            let i = this.getCurSkinList(e),
                s = i.length;
            for (let e = 0; e < s; e++)
                if (i[e].skinId == t) {
                    i[e].isUnlock = 1;
                    break;
                }
            e == b.RoleSkin ? Laya.LocalStorage.setItem(A.LAYA_SK_RoleSkin, JSON.stringify(this.mAllRoleSkins)) : Laya.LocalStorage.setItem(A.LAYA_SK_ArrowSkin, JSON.stringify(this.mAllArrowSkins));
        }
        getAllUnLockSkin(t = b.RoleSkin) {
            return this.getCurSkinList(t).filter(t => 0 == t.isUnlock);
        }
        isSkinUnlocked(t, e = b.RoleSkin) {
            let i = !1,
                s = this.getCurSkinList(e),
                n = s.length;
            for (let e = 0; e < n; e++)
                if (s[e].skinId == t) {
                    i = 1 == s[e].isUnlock;
                    break;
                }
            return i;
        }
        getAllUnLockSkinByPage(t = 0, e = b.RoleSkin) {
            let i = this.getCurSkinList(e),
                s = t * A.Skin_Num_Per_Page;
            return i.slice(s, A.Skin_Num_Per_Page).filter(t => 0 == t.isUnlock);
        }
        getAllUnLockSkinByType(t, e = b.RoleSkin) {
            return this.getCurSkinList(e).filter(e => 0 == e.isUnlock && e.unLockType == t);
        }
        initAllSkinsData() {
            this.mAllRoleSkins.length = 0;
            for (let t = 0; t < A.Role_Skin_Num; t++) {
                let e = new x();
                e.skinId = t, e.skinType = b.RoleSkin, t == this.defaultSkinId ? e.isUnlock = 1 : e.isUnlock = 0, e.unLockType = 9 == t || 10 == t || 11 == t ? U.ByChest : 12 == t ? U.ByPassGame : 13 == t ? U.ByAdVideo : 14 == t ? U.BySignIn : U.ByConins, this.mAllRoleSkins.push(e);
            }
            Laya.LocalStorage.setItem(A.LAYA_SK_RoleSkin, JSON.stringify(this.mAllRoleSkins));
        }
        getCurSkinList(t = b.RoleSkin) {
            return t == b.RoleSkin ? this.mAllRoleSkins : this.mAllArrowSkins;
        }
        checkUnlockSkinNumSufficient() {
            let t = !0;
            return this.getAllUnLockSkin(b.RoleSkin).length < 4 && (t = !1), t;
        }
    }
    class x {}
    var b, U;
    ! function(t) {
        t[t.RoleSkin = 0] = "RoleSkin";
    }(b || (b = {})),
    function(t) {
        t[t.ByConins = 0] = "ByConins", t[t.ByChest = 1] = "ByChest", t[t.ByPassGame = 2] = "ByPassGame", t[t.ByAdVideo = 3] = "ByAdVideo", t[t.BySignIn = 4] = "BySignIn";
    }(U || (U = {}));
    class B {
        constructor() {
            this.mChestKeyNum = 0, this.isFirstLoadingFlag = !0;
            let t = Laya.LocalStorage.getItem("PlayerLevel");
            this.mLevel = t ? +t : 0;
            let e = Laya.LocalStorage.getItem("PlayerHPLevel");
            this.mHPLevel = e ? +e : 1, e = Laya.LocalStorage.getItem("powerLevel"), this.mPowerLevel = e ? +e : 1, e = Laya.LocalStorage.getItem("offlineLevel"), this.mOfflineLevel = e ? +e : 1;
            let i = Laya.LocalStorage.getItem(A.LAYA_SK_Coins);
            this.mCoins = i ? +i : 0;
            let s = Laya.LocalStorage.getItem(A.LAYA_SK_ChestKeyNum);
            this.mChestKeyNum = s ? +s : 0;
            let n = Laya.LocalStorage.getItem(A.LAYA_SK_MuiscOnOff);
            this.musicOn = "false" != n, Laya.SoundManager.muted = !this.musicOn;
            let a = Laya.LocalStorage.getItem(A.LAYA_SK_VibrateOnOff);
            this.vibrateOn = "false" != a;
            let o = Laya.LocalStorage.getItem(A.LAYA_SK_SignInDay);
            this.mSignInDay = o ? +o : 0;
            let r = Laya.LocalStorage.getItem(A.LAYA_SK_SignInTime);
            this.mSignInTime = r ? +r : 0;
            let l = Laya.LocalStorage.getItem(A.LAYA_SK_FirstSignIn);
            this.mFirstSign = l ? +l : 0;
            let h = Laya.LocalStorage.getItem(A.Laya_SK_OffLineTime);
            this.mOfflineTime = h ? +h : 0;
            let d = Laya.LocalStorage.getItem(A.Laya_SK_WatchNum);
            this.mWatchADNum = d ? +d : 0;
            let c = Laya.LocalStorage.getItem("queryUser");
            this.mIsQueryUser = !!c;
        }
        get Level() {
            return this.mLevel;
        }
        set Level(t) {
            this.mLevel = t, Laya.LocalStorage.setItem("PlayerLevel", this.mLevel.toString());
        }
        get HPLevel() {
            return this.mHPLevel;
        }
        set HPLevel(t) {
            this.mHPLevel = t, Laya.LocalStorage.setItem("PlayerHPLevel", this.mHPLevel.toString());
        }
        get powerLevel() {
            return this.mPowerLevel;
        }
        set powerLevel(t) {
            this.mPowerLevel = t, Laya.LocalStorage.setItem("powerLevel", this.mPowerLevel.toString());
        }
        get offlineLevel() {
            return this.mOfflineLevel;
        }
        set offlineLevel(t) {
            this.mOfflineLevel = t, Laya.LocalStorage.setItem("offlineLevel", this.mOfflineLevel.toString());
        }
        get Coins() {
            return this.mCoins;
        }
        set Coins(t) {
            this.mCoins = t, Laya.LocalStorage.setItem(A.LAYA_SK_Coins, this.mCoins.toString());
        }
        get chestKeyNum() {
            return this.mChestKeyNum;
        }
        set chestKeyNum(t) {
            this.mChestKeyNum = t, Laya.LocalStorage.setItem(A.LAYA_SK_ChestKeyNum, this.mChestKeyNum.toString());
        }
        get isMusicOn() {
            return this.musicOn;
        }
        set isMusicOn(t) {
            this.musicOn = t, Laya.LocalStorage.setItem(A.LAYA_SK_MuiscOnOff, this.musicOn.toString());
        }
        get isVibrateOn() {
            return this.vibrateOn;
        }
        set isVibrateOn(t) {
            this.vibrateOn = t, Laya.LocalStorage.setItem(A.LAYA_SK_VibrateOnOff, this.vibrateOn.toString());
        }
        get SingInDay() {
            return this.mSignInDay;
        }
        set SingInDay(t) {
            this.mSignInDay = t, Laya.LocalStorage.setItem(A.LAYA_SK_SignInDay, this.mSignInDay.toString());
        }
        get SignInTime() {
            return this.mSignInTime;
        }
        set SignInTime(t) {
            this.mSignInTime = t, Laya.LocalStorage.setItem(A.LAYA_SK_SignInTime, this.mSignInTime.toString());
        }
        get FirstSignInTime() {
            return this.mFirstSign;
        }
        set FirstSignInTime(t) {
            this.mFirstSign = t, Laya.LocalStorage.setItem(A.LAYA_SK_FirstSignIn, this.mSignInTime.toString());
        }
        get OffLineInTime() {
            return this.mOfflineTime;
        }
        get isQueryUser() {
            return this.mIsQueryUser;
        }
        set isQueryUser(t) {
            this.mIsQueryUser = this.isQueryUser, Laya.LocalStorage.setItem("queryUser", status.toString());
        }
        set OffLineInTime(t) {
            this.mOfflineTime = t, Laya.LocalStorage.setItem(A.Laya_SK_OffLineTime, this.mOfflineTime.toString());
        }
        get WatchADNum() {
            return this.mWatchADNum;
        }
        set WatchADNum(t) {
            this.mWatchADNum = t, Laya.LocalStorage.setItem(A.Laya_SK_WatchNum, this.mWatchADNum.toString());
        }
    }
    class R {
        static Init() {
            this.playerData = new B(), this.skinData = new _();
        }
    }
    class E {
        constructor() {
            this._gameId = 120, this._hideCity = "shenzhen, changsha, wuhan, beijing, chengdu", this._banner_adUnitId = "adunit-441b9ad3461020ad", this._video_adUnitId = "adunit-42d7e2dade6dbcbf", this._videoLong_adUnitId = "adunit-42d7e2dade6dbcbf", this._current_adUnitId = "adunit-42d7e2dade6dbcbf", this._insertAdPostId = "adunit-ca33ba0c1fa1c8bc", this._debug = !1, this.randnum = 0, this.free_PhysicalStrength = 5, this.share_PhysicalStrength = 5;
            this._iconsId = [{
                url: "",
                id: "",
                title: ""
            }, {
                url: "",
                id: "",
                title: ""
            }, {
                url: "",
                id: "",
                title: ""
            }], this.isInsertAdLoaded = !1;
        }
        changeAdUnitId(t) {}
        init() {
            this.randnum = 0;
            var e = this._iconsId[this.randnum];
        }
        showBanner() {}
        hideBanner() {}
        destroyBanner() {}
        loadInsertAd(t = !1) {}
        showInsertAd() {}
        shareLimit() {
            let t = Date.now(),
                e = Laya.LocalStorage.getItem("lastShareTime") ? Laya.LocalStorage.getItem("lastShareTime") : 0;
            Laya.LocalStorage.setItem("lastShareTime", t.toString());
            let i = .6;
            t - e > 2500 && (i = .2), Math.random() < i ? Laya.timer.once(1500, this, () => {}) : Laya.timer.once(1500, this, () => {});
        }
        shareLimit2(t, e) {
            let i = Date.now(),
                s = Laya.LocalStorage.getItem("lastShareTime") ? Laya.LocalStorage.getItem("lastShareTime") : 0;
            Laya.LocalStorage.setItem("lastShareTime", i.toString());
            let n = .6;
            i - s > 2500 && (n = .2), Math.random() < n ? Laya.timer.once(1500, this, () => {
                e();
            }) : Laya.timer.once(1500, this, () => {
                t();
            });
        }
        onShareBtnClicked() {
            if (this.shareLimit(), Laya.MiniAdpter) {
                var t = this._iconsId[this.randnum];
            }
        }
        onShareBtnClicked2(t, e) {
            if (this.shareLimit2(t, e), Laya.MiniAdpter) {
                var i = this._iconsId[this.randnum];
            }
        }
        Login(t) {
            console.log("wx login() called"), this._version = G.adVersion;
            var e = this;
            this._debug || "undefined" == typeof wx ? (console.log("not in wechat."), null != t && t.run()) : null;
        }
        entries(t) {
            for (var e = Object.keys(t), i = e.length, s = new Array(i); i--;) s[i] = [e[i], t[e[i]]];
            return s;
        }
        httpRequest(t, e = {}, i = null) {}
        clickCountEvent(t, e) {
            console.log("clickCountEvent called. "), this.httpRequest("clickCount", {
                gameId: this._gameId,
                version: G.adVersion,
                openId: E._openId,
                scene: e,
                appKey: t.appkey
            });
        }
        openCountEvent(t, e) {
            console.log("clickVedioEvent called."), this.httpRequest("openCount", {
                gameId: this._gameId,
                version: G.adVersion,
                openId: E._openId,
                scene: e,
                appKey: t.appkey
            });
        }
        clickVedioEvent() {
            console.log("clickVedioEvent called."), this.httpRequest("calVideoCount", {
                gameId: this._gameId,
                version: G.adVersion,
                openId: E._openId,
                channel_id: wx.getLaunchOptionsSync().query.channel_id
            });
        }
        onAdvertisementClicked(t, e) {
            if (!G.isWeChatGame) return;
            let i = this;
            this.clickCountEvent(t, e), wx.navigateToMiniProgram({
                appId: t.appkey,
                path: t.path,
                envVersion: "develop",
                extraData: null,
                success(s) {
                    i.openCountEvent(t, e);
                },
                fail() {
                    console.log("show moregame ui"), Y.sendEvent(xt.Skin_to_hide), $e.show();
                },
                complete() {}
            });
        }
        getLocation(t) {
            this.httpRequest("isPinbi", {
                game_id: this._gameId
            }, function(e) {
                t(e);
            }.bind(this));
        }
        getAdRate(t) {
            this.httpRequest("adrate", {
                gameId: this._gameId,
                version: G.adVersion,
                openId: E._openId
            }, function(e) {
                t && t(e);
            }.bind(this));
        }
        showRewardedVideoAd(t, e) {
            var tt = function() {
                t();
                R.playerData.WatchADNum++, 10 == R.playerData.WatchADNum && R.skinData.unLockSkin(13);
            }
            platform.getInstance().showReward(tt, e);
        }
        showLongRewardedVideoAd(t, e) {
            var tt = function() {
                t();
                R.playerData.WatchADNum++, 10 == R.playerData.WatchADNum && R.skinData.unLockSkin(13);
            }
            platform.getInstance().showReward(tt, e);
        }
        showToast(t, e, i = "none", s = !1, n = null, a = null, o = null, r = null) {}
        compareVersion(t, e) {
            t = t.split("."), e = e.split(".");
            const i = Math.max(t.length, e.length);
            for (; t.length < i;) t.push("0");
            for (; e.length < i;) e.push("0");
            for (let s = 0; s < i; s++) {
                const i = parseInt(t[s]),
                    n = parseInt(e[s]);
                if (i > n) return 1;
                if (i < n) return -1;
            }
            return 0;
        }
        initAdList(t, e, i = !1) {}
        initGifItem(t, e = "pzdb") {}
        initAppExportList(t, e) {}
        initAppExport2List(t, e, i) {}
        initADItemList(t, e) {}
        initADItem3List(t, e) {}
        rotationxy(t, e, i = !1) {}
        rotationicon(t, e = !0) {
            let i = this,
                s = !1;
            setInterval(() => {
                i.rotationxy(t, s, e), s = !s;
            }, 1500);
        }
    }
    E._openId = "", E._channelId = "";
    class G {
        static Init() {
            if (0 != this.type && -1 != this.type) {
                let e = "dev",
                    i = "wxgame";
                1 == this.type ? e = "dev" : 2 == this.type ? (e = "dis", t.stat = !1, t.physicsDebug = !1, t.debug = !1) : 3 == this.type ? (e = "dis_wx", i = "wxgame", t.stat = !1, t.physicsDebug = !1, t.debug = !1) : 4 == this.type && (e = "dis_baidu", t.stat = !1, t.physicsDebug = !1, t.debug = !1)
            } else -1 == this.type && (t.stat = !0, t.debug = !0);
        }
        static get isEditorEnviroment() {
            return !0;
        }
    }
    G.version = "1.1.15", G.resVer = "1.0.3", G.adVersion = "1.1.15", G.type = 3, G.testLevel = 0, G.isWeChatGame = !!window.wx, G.isToutiaoGame = !!window.tt;
    var N = Laya.HttpRequest;
    class T {
        static requestAD(t) {
            if (this.isRequestSucceed) return console.log("AD already pulled."), void(t && t.run());
            T.version = G.adVersion, T.channelId = E._channelId;
            let e = E._openId;
            "" == e && (e = localStorage.getItem("openid")), e ? this.openId = e : (this.openId = new Date().getTime() + "" + Math.ceil(1e4 * Math.random()), localStorage.setItem("openid", this.openId));
            T.initChaYeRate(), T.initTanChuangRate(), T.initAdRate();
            T.isRequestSucceed = !0, t && t.run()
        }
        static GetLunBo() {
            if (this.sceneInfo.length > 0)
                for (let t = 0; t < this.sceneInfo.length; t++)
                    if ("lunbo" == this.sceneInfo[t].scene) return this.sceneInfo[t].list;
            return new Array();
        }
        static GetJiesuan() {
            if (this.sceneInfo.length > 0)
                for (let t = 0; t < this.sceneInfo.length; t++)
                    if ("jiesuan" == this.sceneInfo[t].scene) return this.sceneInfo[t].list;
            return new Array();
        }
        static getDataBySceneName(t) {
            if (this.sceneInfo.length > 0)
                for (let e = 0; e < this.sceneInfo.length; e++)
                    if (this.sceneInfo[e].scene == t) return this.sceneInfo[e].list;
            return new Array();
        }
        static initAdRate(t = null) {
            T.getLocation(e => {
                console.log(`get location flag :: ${e}`), T.mIsBlock = e, e ? (T.mAdRate = -1, t && t()) : T.getAdRate(e => {
                    T.mAdRate = e.rate, console.log(" ad rate: " + T.mAdRate), t && t();
                });
            });
        }
        static initChaYeRate(t = null) {
            T.getChayeAdRate(e => {
                T.mChaYeAdRate = e.rate, t && t(), console.log(" cahyead rate: " + T.mChaYeAdRate);
            });
        }
        static initTanChuangRate(t = null) {
            T.getTanchuangAdRate(e => {
                T.mTanChuang = e.rate, t && t(), console.log(" tanchuang rate: " + T.mTanChuang);
            });
        }
        static getLocation(t) {
            this.httpRequest("isPinbi", {
                game_id: T.gameId
            }, function(e) {
                t(e);
            }.bind(this));
        }
        static getAdRate(t) {
            this.httpRequest("adrate", {
                gameId: T.gameId,
                version: T.version,
                openId: T.openId
            }, function(e) {
                t && t(e);
            }.bind(this));
        }
        static getChayeAdRate(t) {
            this.httpRequest("adrate", {
                gameId: T.gameId,
                version: T.version,
                openId: T.openId,
                key: "chaye"
            }, function(e) {
                t && t(e);
            }.bind(this));
        }
        static getTanchuangAdRate(t) {
            this.httpRequest("adrate", {
                gameId: T.gameId,
                version: T.version,
                openId: T.openId,
                key: "tanchuang"
            }, function(e) {
                t && t(e);
            }.bind(this));
        }
        static httpRequest(t, e = {}, i = null) {}
        static entries(t) {
            for (var e = Object.keys(t), i = e.length, s = new Array(i); i--;) s[i] = [e[i], t[e[i]]];
            return s;
        }
    }
    T.gameId = 120, T.version = G.adVersion, T.mAdRate = -1, T.mChaYeAdRate = -1, T.mTanChuang = 1, T.isRequestSucceed = !1, T.sceneInfo = new Array();
    class D {
        constructor() {
            D.mInst = this;
        }
        static get Inst() {
            return null == this.mInst && new D(), this.mInst;
        }
        init() {
            this.comMgr = new f(), this.initSdk(Laya.Handler.create(this, () => {
                T.requestAD(Laya.Handler.create(this, () => {
                    console.log("request ad finished.");
                }));
            }));
        }
        initSdk(t) {
            this.adSdk = new E(), this.adSdk.init(), this.adSdk.Login(t);
        }
    }
    class O {
        constructor() {
            this.connections = new Array();
        }
        bind() {
            for (let t = 0; t < this.connections.length; t++) {
                let e = this.connections[t];
                this.connections[t] = this.node.graph.findPortByPortId(e.id);
            }
        }
        call() {
            if (this.connections.length > 0) {
                for (let t = 0; t < this.connections.length; t++) this.connections[t].callback && this.connections[t].callback.run();
                return !0;
            }
            return !1;
        }
        get Value() {
            return this.connections.length > 0 && this.connections[0].callback ? this.connections[0].callback.run() : null;
        }
        get connected() {
            return this.connections.length > 0;
        }
    }
    class M extends a {
        constructor() {
            super(...arguments), this.onUpdate = new i(), this.onDestroy = new i(), this.onLateUpdate = new i(), this.onStart = new i(), this.nodes = new Array();
        }
        static loadGraph(t, e = null) {
            this.mGraphs.get(t) ? null != e && e.run() : Laya.loader.create(t, Laya.Handler.create(this, () => {
                let i = Laya.loader.getRes(t);
                null == i && console.error("" + t), this.mGraphs.set(t, i), null != e && e.run();
            }));
        }
        static create(t) {
            if (!this.mGraphs.has(t)) return console.error("" + t), null;
            let e = this.mGraphs.get(t),
                i = new M();
            for (let t = 0; t < e.nodes.length; t++) {
                let s = e.nodes[t],
                    n = this.createNode(s.type);
                n.graph = i, i.nodes.push(n), n.constructorJson(s);
            }
            return i.name = e.name, i;
        }
        static getGraph(t) {
            return this.mGraphs.has(t) ? this.mGraphs.get(t) : null;
        }
        static registerNodeType(t, e) {
            this.mNodeTypes.set(t, e);
        }
        static createNode(t) {
            let e = this.mNodeTypes.get(t);
            if (null != e) return new e();
            console.error(" " + t);
        }
        static registerToValueFunc(t, e, i = null) {
            null != i && e.bind(i), this.mValueTypes.set(t, e);
        }
        static toValue(t, e) {
            let i = this.mValueTypes.get(t);
            return null != i ? i(e) : e;
        }
        findPortByPortId(t) {
            let e = null;
            for (let i = 0; i < this.nodes.length; i++) {
                let s = this.nodes[i].findPortById(t);
                if (null != s) {
                    e = s;
                    break;
                }
            }
            return e;
        }
        findNodeById(t) {
            let e = null;
            for (let i = 0; i < this.nodes.length; i++) {
                let s = this.nodes[i];
                s.id == t && (e = s);
            }
            return e;
        }
        get go() {
            return null != this.owner ? this.owner.owner : null;
        }
        start() {
            for (let t = 0; t < this.nodes.length; t++) this.nodes[t].registeredPort();
            for (let t = 0; t < this.nodes.length; t++) this.nodes[t].init();
            for (let t = 0; t < this.nodes.length; t++) this.nodes[t].onGraphStart();
            null != this.onStart && this.onStart.run();
        }
        update() {
            null != this.onUpdate && this.onUpdate.run();
        }
        letUpdate() {
            null != this.onLateUpdate && this.onLateUpdate.run();
        }
        destroy() {
            if (this.stop(), null != this.onDestroy) {
                this.onDestroy.run();
                for (let t = 0; t < this.nodes.length; t++) this.nodes[t].destroy();
            }
        }
        stop() {
            for (let t = 0; t < this.nodes.length; t++) this.nodes[t].onGraphStop();
        }
    }
    M.mGraphs = new Map(), M.mNodeTypes = new Map(), M.mValueTypes = new Map();
    class V {
        constructor() {
            this.ports = new Map(), this.variables = new Map();
        }
        static registerNodeType(t, e) {
            M.registerNodeType(t, e);
        }
        constructorJson(t) {
            this.id = t.id;
            for (let e = 0; e < t.ports.length; e++) {
                let i = t.ports[e],
                    s = new O();
                s.name = i.name, s.id = i.id, s.node = this;
                for (let t = 0; t < i.connections.length; t++) {
                    let e = i.connections[t],
                        n = new O();
                    n.id = e, s.connections.push(n);
                }
                this.ports.set(s.name, s);
            }
            for (let e = 0; e < t.variables.length; e++) {
                let i = t.variables[e],
                    s = M.toValue(i.type, i.value);
                this.setVariable(i.name, s);
            }
            this.onConstructorJson(t);
        }
        hasPort(t) {
            return null != this.findPortById(t);
        }
        findPortByName(t) {
            let e = null;
            return this.ports.has(t) && (e = this.ports.get(t)), e;
        }
        findPortById(t) {
            let e = null;
            return this.ports.forEach((i, s) => {
                i.id != t || (e = i);
            }), e;
        }
        init() {
            this.ports.forEach((t, e) => {
                t.bind();
            }, this), this.onInit();
        }
        onGraphStart() {}
        onGraphStop() {}
        registeredPort() {}
        destroy() {}
        setVariable(t, e) {
            this.variables.set(t, e);
        }
        getVariable(t) {
            return this.variables.has(t) ? this.variables.get(t) : null;
        }
        onConstructorJson(t) {}
        onInit() {}
        calculate() {}
        regPort(t, e = null) {
            let i = this.findPortByName(t);
            return i && (i.callback = e), i;
        }
    }
    class F extends Laya.Script {
        static stopGraphAll() {
            for (let t = 0; t < this.allRunGraph.length; t++) this.allRunGraph[t].stop(), t--;
        }
        static find(t) {
            for (let e = 0; e < this.allRunGraph.length; e++)
                if (t.func.call(t.thisObj, [this.allRunGraph[e]])) return this.allRunGraph[e];
        }
        onUpdate() {
            null != this.graph && this.graph.update();
        }
        onLateUpdate() {
            null != this.graph && this.graph.letUpdate();
        }
        onSerialization(t) {
            let e = JSON.parse(t);
            this.url = e.url, this.autoRun = e.autoRun;
        }
        onStart() {
            this.autoRun && this.loadCanvas();
        }
        resetCanvas(t) {
            this.url = t;
        }
        onInit() {}
        onDestroy() {
            null != this.graph && (this.graph && this.graph.destroy(), this.stop());
        }
        stop() {
            if (null == this.graph) return;
            this.graph.stop(), this.graph.owner = null;
            let t = F.allRunGraph.findIndex(t => t == this); - 1 != t && F.allRunGraph.splice(t, 1);
        }
        loadCanvas() {
            M.loadGraph(this.url, Laya.Handler.create(this, () => {
                this.graph = M.create(this.url), this.graph.owner = this, F.allRunGraph.push(this), this.graph.stop(), this.graph.start();
            }));
        }
    }
    F.allRunGraph = [], f.regClass("GameGraphOwner", F);
    class H {}
    class W extends V {
        registeredPort() {
            this.out = this.regPort("flowOut");
        }
    }
    class Y extends a {
        constructor() {
            super(), Y.mIns = this;
        }
        static get Current() {
            return null == this.mIns && new Y(), this.mIns;
        }
        static addListener(t, e, i, s, n) {
            Y.Current.on(t, e, i, s, n);
        }
        static removeListener(t, e, i) {
            Y.Current.off(t, e, i);
        }
        static sendEvent(t) {
            Y.Current.dispatchEventWith(t, this);
        }
    }
    Y.mIns = null;
    class K extends W {
        registeredPort() {
            super.registeredPort(), this.inputKnob = this.regPort("inputKnob");
        }
        onInit() {
            super.onInit(), this.eventName = this.getVariable("eventName");
        }
        onGraphStart() {
            if (super.onGraphStart(), this.inputKnob) {
                let t = this.inputKnob.Value;
                t && (this.eventName = t);
            }
            Y.addListener(this.eventName, this.onEvent, this);
        }
        onEvent(t) {
            null != this.out && this.out.call();
        }
        onGraphStop() {
            super.onGraphStop(), Y.removeListener(this.eventName, this.onEvent, this);
        }
    }
    M.registerNodeType("CustomizeEvent", K);
    class j extends W {
        onGraphStart() {
            this.graph.onStart.add(this.onStart, this);
        }
        onGraphStop() {
            super.onGraphStop(), this.graph.onStart.remove(this.onStart, this);
        }
        onStart() {
            null != this.out && this.out.call();
        }
    }
    V.registerNodeType("StartEventNode", j);
    class z extends V {
        registeredPort() {
            this.flowIn = this.regPort("flowIn", new e(this.calculate, this)), this.flowOut = this.regPort("flowOut");
        }
    }
    class $ extends z {
        registeredPort() {
            super.registeredPort(), this.inputKnob = this.regPort("inputKnob");
        }
        onInit() {
            this.eventName = this.getVariable("eventName"), super.onInit();
        }
        onGraphStart() {
            let t = this.inputKnob.Value;
            null != t && (this.eventName = t);
        }
        calculate() {
            Y.sendEvent(this.eventName), this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("SendEvent", $);
    class q extends V {
        registeredPort() {
            super.registeredPort(), this.listener = this.regPort("listener"), this.target = this.regPort("target");
        }
        isCanCall(t) {
            return null == this.targetGo || this.targetGo == t;
        }
        onGraphStart() {
            let t, e = this.listener.Value;
            t = null != e ? e : this.graph.go, (e = this.target.Value) && (this.targetGo = e), null != t && (this.listenerTrigger = t.getComponent(w), null == this.listenerTrigger && (this.listenerTrigger = t.addComponent(w)));
        }
    }
    class X extends q {
        registeredPort() {
            super.registeredPort(), this.collisionEnter = this.regPort("onCollisionEnter"), this.collisionExit = this.regPort("onCollisionExit"), this.collisionStay = this.regPort("onCollisionStay");
        }
        onGraphStart() {
            super.onGraphStart(), null != this.listenerTrigger && (this.listenerTrigger.collisionEnter.add(this.onCollisionEnter, this), this.listenerTrigger.collisionExit.add(this.onCollisionExit, this), this.listenerTrigger.collisionStay.add(this.onCollisionStay, this));
        }
        onGraphStop() {
            super.onGraphStop(), null != this.listenerTrigger && (this.listenerTrigger.collisionEnter.remove(this.onCollisionEnter, this), this.listenerTrigger.collisionExit.remove(this.onCollisionExit, this), this.listenerTrigger.collisionStay.remove(this.onCollisionStay, this));
        }
        onCollisionEnter(t) {
            null != this.collisionEnter && this.isCanCall(t.other.owner) && this.collisionEnter.call();
        }
        onCollisionExit(t) {
            null != this.collisionExit && this.isCanCall(t.other.owner) && this.collisionExit.call();
        }
        onCollisionStay(t) {
            null != this.collisionStay && this.isCanCall(t.other.owner) && this.collisionStay.call();
        }
    }
    M.registerNodeType("Collision", X);
    class J extends q {
        registeredPort() {
            super.registeredPort(), this.triggerEnter = this.regPort("onTriggerEnter"), this.triggerExit = this.regPort("onTriggerExit"), this.triggerStay = this.regPort("onTriggerStay");
        }
        onGraphStart() {
            super.onGraphStart(), null != this.listenerTrigger && (this.listenerTrigger.triggerEnter.add(this.onTriggerEnter, this), this.listenerTrigger.triggerExit.add(this.onTriggerExit, this), this.listenerTrigger.triggerStay.add(this.onTriggerStay, this));
        }
        onGraphStop() {
            super.onGraphStop(), null != this.listenerTrigger && (this.listenerTrigger.triggerEnter.remove(this.onTriggerEnter, this), this.listenerTrigger.triggerExit.remove(this.onTriggerExit, this), this.listenerTrigger.triggerStay.remove(this.onTriggerStay, this));
        }
        onTriggerEnter(t) {
            null != this.triggerEnter && this.isCanCall(t.owner) && this.triggerEnter.call();
        }
        onTriggerExit(t) {
            null != this.triggerExit && this.isCanCall(t.owner) && this.triggerExit.call();
        }
        onTriggerStay(t) {
            null != this.triggerStay && this.isCanCall(t.owner) && this.triggerStay.call();
        }
    }
    M.registerNodeType("CollisionTrigger", J);
    class Z extends V {
        registeredPort() {
            super.registeredPort(), this.onMouseUp = this.regPort("onMouseUp"), this.onMouseDown = this.regPort("onMouseDown");
        }
        onGraphStart() {
            super.onGraphStart(), Y.addListener(Laya.Event.MOUSE_DOWN, this.onMouseDownEvent, this), Y.addListener(Laya.Event.MOUSE_UP, this.onMouseUpEvent, this);
        }
        onGraphStop() {
            Y.removeListener(Laya.Event.MOUSE_DOWN, this.onMouseDownEvent, this), Y.removeListener(Laya.Event.MOUSE_UP, this.onMouseUpEvent, this);
        }
        onMouseDownEvent() {
            this.onMouseDown && this.onMouseDown.call();
        }
        onMouseUpEvent() {
            this.onMouseUp && this.onMouseUp.call();
        }
    }
    M.registerNodeType("MouseEvent", Z);
    class Q extends W {
        registeredPort() {
            super.registeredPort(), this.goPort = this.regPort("go"), this.funcName = this.regPort("funcName"), this.aniName = this.regPort("aniName");
        }
        init() {
            super.init(), this.funcNameString = this.getVariable("funcNameString"), this.aniNameString = this.getVariable("aniNameString");
        }
        onGraphStart() {
            let t = null;
            null != this.aniName && this.aniName.connected && (this.aniNameString = this.aniName.Value), null != this.funcName && this.funcName.connected && (this.funcNameString = this.funcName.Value), null != (t = null != this.goPort && this.goPort.connected ? this.goPort.Value : this.graph.go) && (this.mAnimatorListener = t.getComponent(v), null == this.mAnimatorListener && (this.mAnimatorListener = t.addComponent(v))), this.mAnimatorListener.registered(this.funcNameString, this.onEvent, this);
        }
        onEvent() {
            (!this.aniNameString || this.aniNameString == this.mAnimatorListener.currentAni) && this.out.call();
        }
    }
    M.registerNodeType("AnimatorEvent", Q);
    class tt extends z {
        registeredPort() {
            super.registeredPort(), this.inputKnob = this.regPort("inputKnob");
        }
        onInit() {
            this.text = this.getVariable("Text");
        }
        onGraphStart() {
            let t = this.inputKnob.Value;
            t && (this.text = t);
        }
        calculate() {
            console.log(this.text), null != this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("LogText", tt);
    class et extends z {
        registeredPort() {
            super.registeredPort(), this.inputAniName = this.regPort("inputAniName"), this.target = this.regPort("target");
        }
        onConstructorJson(t) {
            this.aniName = this.getVariable("aniName"), this.crossFade = this.getVariable("crossFade"), this.normalized = this.getVariable("normalized"), this.transitionDuration = this.getVariable("transitionDuration"), super.onConstructorJson(t);
        }
        onGraphStart() {
            let t = this.target.Value;
            null == t && (t = this.graph.go), this.ani = t.getComponent(Laya.Animator), (t = this.inputAniName.Value) && (this.aniName = t);
        }
        calculate() {
            null != this.ani && this.aniName && this.aniName.length > 0 && (this.crossFade ? this.ani.crossFade(this.aniName, this.transitionDuration, 0, this.normalized) : this.ani.play(this.aniName, 0, this.normalized)), this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("PlayAnimator", et);
    class it extends z {
        registeredPort() {
            super.registeredPort(), this.stop = this.regPort("stop", new e(this.onStop, this)), this.timeInput = this.regPort("timeInput"), this.time = this.getVariable("time");
        }
        onGraphStart() {
            super.onGraphStart();
            let t = this.timeInput.Value;
            t && (this.time = t);
        }
        onGraphStop() {
            this.onStop();
        }
        calculate() {
            super.calculate(), Laya.timer.once(1e3 * this.time, this, this.success);
        }
        success() {
            this.flowOut && this.flowOut.call();
        }
        onStop() {
            Laya.timer.clear(this, this.success);
        }
    }
    M.registerNodeType("WaitTime", it);
    class st extends V {
        registeredPort() {
            super.registeredPort(), this.regPort("enabled", new e(() => {
                this.setAction(!0);
            }, this)), this.regPort("disable", new e(() => {
                this.setAction(!1);
            }, this)), this.flowOut = this.regPort("flowOut"), this.go = this.regPort("go");
        }
        onGraphStart() {
            super.onGraphStart();
            let t = this.go.Value;
            this.target = t || this.graph.go;
        }
        setAction(t) {
            this.target.active = t, null != this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("SetGameObjectAction", st);
    class nt extends z {
        constructor() {
            super(...arguments), this.number = 0;
        }
        registeredPort() {
            super.registeredPort(), this.target = this.regPort("target"), this.targetScale = this.regPort("targetScale"), this.scaleX = this.getVariable("scaleX"), this.scaleY = this.getVariable("scaleY"), this.scaleZ = this.getVariable("scaleZ");
        }
        onGraphStart() {
            null != this.targetScale.Value && (this.scaleX = this.targetScale.Value.x, this.scaleY = this.targetScale.Value.y, this.scaleZ = this.targetScale.Value.z);
            let t = this.target.Value;
            this.gameObject = null != t ? this.target.Value : this.graph.go, this.tweenTime = this.getVariable("tweenTime");
        }
        calculate() {
            this.gameObject && (this.tween = Laya.Tween.to(this.gameObject.transform, {
                localScaleX: this.scaleX,
                localScaleY: this.scaleY,
                localScaleZ: this.scaleZ
            }, 1e3 * this.tweenTime)), this.flowOut && this.flowOut.call();
        }
        onGraphStop() {
            super.onGraphStop(), null != this.tween && this.tween.clear();
        }
    }
    M.registerNodeType("Scale", nt);
    class at extends z {
        constructor() {
            super(...arguments), this.tweenTime = 0;
        }
        registeredPort() {
            super.registeredPort(), this.target = this.regPort("target"), this.targetRotation = this.regPort("targetRotation"), this.rotationX = this.getVariable("rotationX"), this.rotationY = -this.getVariable("rotationY"), this.rotationZ = this.getVariable("rotationZ");
        }
        onGraphStart() {
            null != this.targetRotation.Value && (this.rotationX = this.targetRotation.Value.x, this.rotationY = -this.targetRotation.Value.y, this.rotationZ = this.targetRotation.Value.z);
            let t = this.target.Value;
            this.gameObject = null != t ? this.target.Value : this.graph.go, this.tweenTime = this.getVariable("tweenTime");
        }
        calculate() {
            this.gameObject && (Math.abs(this.gameObject.transform.localRotationEulerY - this.rotationY) > 180 && (this.gameObject.transform.localRotationEulerY -= 360), Laya.Tween.to(this.gameObject.transform, {
                localRotationEulerX: this.rotationX,
                localRotationEulerY: this.rotationY,
                localRotationEulerZ: this.rotationZ
            }, 1e3 * this.tweenTime)), this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("Rotation", at);
    class ot extends z {
        registeredPort() {
            super.registeredPort();
        }
        onGraphStart() {
            super.onGraphStart(), this.soundName = this.getVariable("soundName");
        }
        calculate() {
            super.calculate(), null != this.soundName && 0 != this.soundName.length && P.playSound(`${H.soundRoot}/${this.soundName}`), this.flowOut.call();
        }
    }
    M.registerNodeType("PlaySound", ot);
    class rt extends z {
        constructor() {
            super(...arguments), this.UP = new Laya.Vector3(0, 1, 0), this.isRuing = !1;
        }
        registeredPort() {
            super.registeredPort(), this.target = this.regPort("target"), this.targetPos = this.regPort("targetPos"), this.stop = this.regPort("stop", new e(this.onGraphStop, this)), this.speedInput = this.regPort("speedInput");
        }
        onGraphStart() {
            this.pos = this.getVariable("pos"), null == this.pos && (this.pos = new Laya.Vector3()), this.speed = this.getVariable("speed"), this.waitForFinish = this.getVariable("waitForFinish"), this.lookAt = this.getVariable("lookAt");
            let t = this.targetPos.Value;
            null != t && (this.pos = t.clone()), this.pos.x *= -1, t = this.target.Value, this.go = t || this.graph.go, (t = this.speedInput.Value) && (this.speed = t), this.rig = this.go.getComponent(Laya.Rigidbody3D), null != this.rig && (this.rig.isKinematic = !0);
        }
        onGraphStop() {
            this.graph.onUpdate.remove(this.onUpdate, this);
        }
        calculate() {
            this.graph.onUpdate.remove(this.onUpdate, this), this.graph.onUpdate.add(this.onUpdate, this), this.isRuing = !0, this.waitForFinish || this.callEnd();
        }
        onFinish() {
            this.waitForFinish && this.callEnd();
        }
        onUpdate() {
            if (this.isRuing && null != this.go) {
                this.go.transform.position;
                let t = Laya.Vector3.distance(this.go.transform.position.clone(), this.pos.clone());
                if (t > .01) {
                    let e = new Laya.Vector3();
                    Laya.Vector3.subtract(this.pos.clone(), this.go.transform.position.clone(), e), Laya.Vector3.normalize(e, e);
                    let i = new Laya.Vector3();
                    Laya.Vector3.scale(e, this.speed * Laya.timer.delta * .001, i);
                    let s = this.go.transform.position.clone();
                    Laya.Vector3.add(s, i, s), Laya.Vector3.distance(s, this.pos) >= t ? (this.go.transform.position = this.pos, this.isRuing = !1, this.onFinish()) : this.go.transform.position = s, this.lookAt && (Laya.Vector3.subtract(this.go.transform.position, i, e), this.go.transform.lookAt(e, this.UP));
                } else this.isRuing = !1, this.onFinish();
            }
        }
        callEnd() {
            null != this.flowOut && this.flowOut.call();
        }
    }
    M.registerNodeType("MoveToPos", rt);
    class lt extends V {
        registeredPort() {
            super.registeredPort(), this.flag = this.regPort("flag"), this.trueFlow = this.regPort("true"), this.falseFlow = this.regPort("false"), this.regPort("flowIn", new e(() => {
                this.Execute();
            }, this));
        }
        Execute() {
            this.flag.Value ? this.trueFlow.call() : this.falseFlow.call();
        }
    }
    M.registerNodeType("Judge", lt);
    class ht extends V {
        constructor() {
            super(...arguments), this.mPorts = [];
        }
        registeredPort() {
            super.registeredPort(), this.regPort("in", new e(this.calculate, this)), this.value = this.regPort("value"), this.mAllNum = this.getVariable("mAllNum");
            for (let t = 0; t < this.mAllNum.length; t++) this.mPorts.push(this.regPort(t.toString()));
            this.mDef = this.regPort("def");
        }
        calculate() {
            super.calculate();
            let t = 0;
            null != this.value && this.value.connected && (t = this.value.Value);
            let e = !1;
            for (let i = 0; i < this.mAllNum.length; i++)
                if (t == this.mAllNum[i]) {
                    null != this.mPorts[i] && this.mPorts[i].call(), e = !0;
                    break;
                }
            e || null != this.mDef && this.mDef.call();
        }
    }
    M.registerNodeType("SwitchInt", ht);
    class dt extends V {
        registeredPort() {
            super.registeredPort();
            let t = this,
                i = new e(() => t.value, this);
            this.outputKnob = this.regPort("output", i);
        }
        init() {
            this.value = this.getVariable("value"), super.init();
        }
    }
    M.registerNodeType("StringInput", dt), M.registerNodeType("FloatInput", dt), M.registerNodeType("BoolInput", class extends dt {
        registeredPort() {
            let t = this,
                i = new e(() => {
                    if (null != t.valueInput) {
                        let e = t.valueInput.Value;
                        if (null != e) return e;
                    }
                    return t.value;
                }, this);
            this.outputKnob = this.regPort("output", i), this.valueInput = this.regPort("valueInput");
        }
    }), M.registerNodeType("IntInput", dt);
    class ct extends dt {
        registeredPort() {
            super.registeredPort(), this.x = this.regPort("x"), this.y = this.regPort("y"), this.z = this.regPort("z");
        }
        onGraphStart() {
            super.onGraphStart();
            let t = this.getVariable("value");
            null == t && (t = new Laya.Vector3());
            let e = this.x.Value;
            e && (t.x = e), (e = this.y.Value) && (t.y = e), (e = this.z.Value) && (t.z = e), this.value = t.clone();
        }
    }
    M.registerToValueFunc("Vector3", function(t) {
        return new Laya.Vector3(t.x, t.y, t.z);
    }), M.registerNodeType("Vector3Input", ct);
    class gt extends Laya.Script {
        constructor() {
            super(...arguments), this.variables = new Map();
        }
        onInit() {}
        onSerialization(t) {
            gt.mInst = this;
            let e = JSON.parse(t);
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                gt.add(i.key, M.toValue(i.type, i.value));
            }
        }
        static add(t, e) {
            this.mInst.variables.set(t, e);
        }
        static remove(t) {
            this.mInst.variables.delete(t);
        }
        static set(t, e) {
            t && t.length > 0 && this.mInst.variables.set(t, e);
        }
        static get(t) {
            return t && t.length > 0 && this.mInst.variables.has(t) ? this.mInst.variables.get(t) : null;
        }
    }
    f.regClass("GlobalBlackboard", gt);
    class ut extends V {
        registeredPort() {
            super.registeredPort(), this.regPort("output", new e(() => gt.get(this.valueName), this));
        }
        onInit() {
            this.dynamic = this.getVariable("dynamic"), this.valueName = this.getVariable("valueName");
        }
    }
    M.registerNodeType("GetVariableFloat", ut), M.registerNodeType("GetVariableString", ut), M.registerNodeType("GetVariableVector3", ut), M.registerNodeType("GetVariableBool", ut), M.registerNodeType("GetVariableBool", ut), M.registerNodeType("GetVariableGo", ut), M.registerNodeType("GetVariableInt", ut);
    class mt extends V {
        onInit() {
            this.valueName = this.getVariable("valueName");
        }
        registeredPort() {
            super.registeredPort(), this.output = this.regPort("output"), this.input = this.regPort("input"), this.regPort("flowIn", new e(this.calculate, this));
        }
        calculate() {
            if (null != this.input) {
                let t = this.input.Value;
                t && gt.set(this.valueName, t);
            }
            null != this.output && this.output.call();
        }
    }
    M.registerNodeType("SetVariableFloat", mt), M.registerNodeType("SetVariableString", mt), M.registerNodeType("SetVariableVector3", mt), M.registerNodeType("SetVariableBool", mt), M.registerNodeType("SetVariableInt", mt), M.registerNodeType("SetVariableGo", mt);
    class pt extends V {
        registeredPort() {
            super.registeredPort(), this.regPort("output", new e(() => this.value, this)), this.flowOut = this.regPort("flowOut");
        }
        init() {
            super.init(), this.value = this.getVariable("value");
        }
    }
    class St extends pt {
        registeredPort() {
            super.registeredPort(), this.regPort("flowTrueInput", new e(() => {
                this.value = !0, null != this.flowOut && this.flowOut.call();
            }, this)), this.regPort("flowFalseInput", new e(() => {
                this.value = !1, null != this.flowOut && this.flowOut.call();
            }, this));
        }
    }
    M.registerNodeType("LocalVariableBool", St);
    class kt extends V {
        get go() {
            return this.target.Value || this.graph.go;
        }
        registeredPort() {
            this.target = super.regPort("target");
        }
    }
    class yt extends kt {
        registeredPort() {
            super.registeredPort(), this.index = this.getVariable("index"), this.regPort("out", new e(() => {
                if (this.go) {
                    let t = this.go.getChildAt(this.index);
                    if (null != t) return t;
                    console.log("", this.index, this.go);
                }
                return null;
            }, this));
        }
    }
    M.registerNodeType("GameObjectGetChildAt", yt);
    class It extends kt {
        registeredPort() {
            super.registeredPort(), this.childName = this.getVariable("childName"), this.regPort("out", new e(() => {
                let t = this.go.getChildByName(this.childName);
                return null == t && console.log("", this.childName, this.go), t;
            }, this));
        }
    }
    M.registerNodeType("GameObjectGetChildByName", It);
    class Lt extends kt {
        registeredPort() {
            super.registeredPort(), this.regPort("self", new e(() => this.go, this)), this.regPort("parent", new e(() => this.go ? this.go.parent : null, this)), this.regPort("pos", new e(() => this.go ? this.go.transform.position : null, this)), this.regPort("active", new e(() => this.go ? this.go.active : null, this));
        }
    }
    M.registerNodeType("GameObjectInfo", Lt);
    class Ct extends kt {
        registeredPort() {
            super.registeredPort(), this.path = this.getVariable("path"), this.regPort("out", new e(() => {
                if (this.go) {
                    let t = s.FindPath(this.go, this.path);
                    if (null != t) return t;
                    console.log(" path：", this.path, this.go);
                }
                return null;
            }, this));
        }
    }
    M.registerNodeType("GameObjectGetByPath", Ct);
    class ft extends V {
        constructor() {
            super(...arguments), this.mPorts = [], this.probability = [];
        }
        registeredPort() {
            super.registeredPort(), this.inPort = this.regPort("in", new e(this.calculate, this));
            for (let t = 0; t < this.portCount; t++) this.mPorts.push(this.regPort(t.toString()));
        }
        onConstructorJson(t) {
            super.onConstructorJson(t), this.probability = this.getVariable("probability"), this.portCount = this.getVariable("portCount");
        }
        calculate() {
            if (this.portCount > 0) {
                let t = [];
                for (let e = 0; e < this.probability.length; e++)
                    for (let i = 0; i < this.probability[e]; i++) t.push(e);
                let e = s.random(0, t.length);
                if (e = t[e], this.mPorts.length > e) {
                    let t = this.mPorts[e];
                    null != t && t.connected && t.call();
                }
            }
        }
    }
    M.registerNodeType("RandomNode", ft);
    class Pt extends V {
        constructor() {
            super(...arguments), this.outs = [];
        }
        registeredPort() {
            super.registeredPort(), this.ports.forEach((t, i) => {
                "flowOut" == i ? this.flowOut = t : (this.outs.push(t), t && (t.callback = new e(this.calculate, this)));
            }, this);
        }
        calculate() {
            super.calculate(), null != this.flowOut && this.flowOut.connected && this.flowOut.call();
        }
    }
    M.registerNodeType("MergeNode", Pt);
    var wt, vt = Object.freeze({
        UIConfig: k,
        GameFlag: class {
            constructor(t = 0) {
                this.mValue = 0, this.mValue = t;
            }
            get value() {
                return this.mValue;
            }
            set value(t) {
                this.mValue = t;
            }
            add(t) {
                return this.has(t) || (this.mValue |= t), this;
            }
            remove(t) {
                return this.has(t) && (this.mValue &= ~t), this;
            }
            has(t) {
                return 0 != (this.mValue & t);
            }
        },
        GameUtils: s,
        Event: n,
        EventDispatcher: a,
        LoadGroup: d,
        ResMgr: c,
        get Status() {
            return o;
        },
        Task: g,
        get ActionsExecutionMode() {
            return r;
        },
        TaskList: u,
        StateMachine: m,
        Scene: S,
        Func: e,
        Listener: i,
        LoadFGUIPack: I,
        UIWind: L,
        ComMgr: f,
        SoundMgr: P,
        GameObjectInfo: class {
            constructor() {
                this.coms = new Array(), this.childs = new Array();
            }
        },
        ComInfo: class {},
        CollisionTriggerListener: w,
        AnimatorListener: v,
        GameMgr: D,
        Scale: nt,
        Port: O,
        GameGraphCanvas: M,
        GameGraphOwner: F,
        GraphConfig: H,
        EventNode: W,
        CustomizeEvent: K,
        StartEventNode: j,
        SendEvent: $,
        CollisionEvent: q,
        CollisionNode: X,
        CollisionTrigger: J,
        MouseEvent: Z,
        AnimatorEvent: Q,
        Log: tt,
        PlayAnimator: et,
        WaitForTime: it,
        SetGameObjectAction: st,
        Node: V,
        Rotation: at,
        PlaySound: ot,
        MoveToPos: rt,
        Judge: lt,
        SwitchInt: ht,
        Vector3Input: ct,
        GlobalVariableGet: ut,
        GlobalVariableSet: mt,
        BoolLocalVariable: St,
        GlobalBlackboard: gt,
        GameObjectGetChildAt: yt,
        GameObjectGetChildByName: It,
        GOInfo: Lt,
        GONode: kt,
        GameObjectGetByPath: Ct,
        RandomNode: ft,
        MergeNode: Pt,
        EventDispatcherCore: Y
    });
    class At {}
    At.LoadingScene = 1, At.MainScene = At.LoadingScene + 1;
    class _t {
        static getUnityResUrl(t) {
            return `${this.unityRes}/${t}`;
        }
        static getFguiResUrl(t) {
            return `${this.fguiRes}/${t}`;
        }
        static getGraphResUrl(t) {
            return `${this.graphRes}/${t}.json`;
        }
        static getTableResUrl(t) {
            return `${this.tableRes}/${t}.json`;
        }
        static getSoundUrl(t) {
            return `${this.soundRes}/${t}`;
        }
        static getPowerTexUrl(t) {
            return `${this.powerTexRes}/${t}.png`;
        }
    }
    _t.unityRes = "unitylib/Conventional", _t.fguiRes = "fgui", _t.graphRes = "res/graph", _t.tableRes = "res/table", _t.soundRes = "res/sound", _t.powerTexRes = "res/pownumtex";
    class xt {}
    xt.SELF_PLAYER_HP = "EnemyPlayerHp", xt.ENEMY_PLAYER_HP = "SelfPlayerHp", xt.GAME_OVER = "GameOver", xt.Game_Start = "gameStart", xt.SUCCESS = "Success", xt.FAIL = "Fail", xt.ATTACK = "attack", xt.MoreAttack = "MoreAttack", xt.isOnePush = "FireAttack", xt.SelfChangeHead = "SelfChangeHead", xt.OtherChangeHead = "OtherChangeHead", xt.REFRESHCOINS = "refreshCoins", xt.Refresh_Red_Point = "refreshRedPoint", xt.Level_Up = "levelUp", xt.Level_UP_POWER = "levelUPPOWER", xt.Change_Skin = "changeSkin", xt.Hide_LoadingUI = "hideLoading", xt.Player_Anim_Start = "Player_Anim_Start", xt.Player_Anim_Finish = "Player_Anim_Finish", xt.Skin_to_show = "Skin_to_show", xt.Skin_to_hide = "Skin_to_hide",
        function(t) {
            t[t.Play = 1] = "Play", t[t.GameOver = 2] = "GameOver", t[t.Loading = 8] = "Loading";
        }(wt || (wt = {}));
    class bt {
        static getSkinUrlById(t) {
            return "ui://" + bt.Pack.SkinPack + "/roleSkin" + t;
        }
    }
    bt.Pack = {
        LoadingPack: "LoadingPack",
        MainPack: "MainPack",
        SkinPack: "SkinPack"
    }, bt.Res = {
        LoadingUI: "LoadingUI",
        MainUI: "MainUI",
        SignUI: "SingInUI",
        BoxUI: "BoxUI",
        SkinUI: "SkinUI",
        SkinTrialUI: "SkinTrialUI",
        RandomSkinUI: "RandomSkinUI",
        GoldLabel: "GoldLabel",
        GameOver: "GameOver",
        VainNodeUI: "VainNode",
        OffLineUI: "OfflineUI",
        HotGamesUI: "HotGamesUI",
        MoreGamesUI: "MoreGamesUI",
        GameTipsUI: "GameTipsUI"
    }, bt.FguiCom = {
        PHPanel: "PanelPH",
        StrengthPanel: "PanelStrength",
        OfflinePanel: "PanelOfflineRevenue",
        BloodBar: "BloodBar",
        ReverseBloodBar: "ReverseBloodBar",
        SkinItem: "SkinItem",
        VerticalAdList2: "VerticalAdList2"
    }, bt.MainUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.MainUI, bt.LoadingUI = "ui://" + bt.Pack.LoadingPack + "/" + bt.Res.LoadingUI, bt.SkinUI = "ui://" + bt.Pack.SkinPack + "/" + bt.Res.SkinUI, bt.SkinTrialUI = "ui://" + bt.Pack.SkinPack + "/" + bt.Res.SkinTrialUI, bt.RandomSkinUI = "ui://" + bt.Pack.SkinPack + "/" + bt.Res.RandomSkinUI, bt.BoxUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.BoxUI, bt.GameOver = "ui://" + bt.Pack.MainPack + "/" + bt.Res.GameOver, bt.OffLineUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.OffLineUI, bt.SignUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.SignUI, bt.VainNodeUI = "ui://" + bt.Pack.SkinPack + "/" + bt.Res.VainNodeUI, bt.GoldLabel = `ui://${bt.Pack.LoadingPack}/${bt.Res.GoldLabel}`, bt.PHPanel = "ui://" + bt.Pack.MainPack + "/" + bt.FguiCom.PHPanel, bt.StrengthPanel = "ui://" + bt.Pack.MainPack + "/" + bt.FguiCom.StrengthPanel, bt.OfflinePanel = "ui://" + bt.Pack.MainPack + "/" + bt.FguiCom.OfflinePanel, bt.BloodBar = "ui://" + bt.Pack.MainPack + "/" + bt.FguiCom.BloodBar, bt.ReverseBloodBar = "ui://" + bt.Pack.MainPack + "/" + bt.FguiCom.ReverseBloodBar, bt.SkinItem = "ui://" + bt.Pack.SkinPack + "/" + bt.FguiCom.SkinItem, bt.HotGamesUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.HotGamesUI, bt.MoreGamesUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.MoreGamesUI, bt.GameTipsUI = "ui://" + bt.Pack.MainPack + "/" + bt.Res.GameTipsUI;
    var Ut = g;
    class Bt extends Ut {
        constructor(t) {
            super(), this.loadGroup = new d();
            for (let e = 0; e < t.length; e++) this.add3DRes(t[e]);
        }
        get progress() {
            return this.loadGroup.Progress / 100;
        }
        add3DRes(t, e, i = !0) {
            return this.loadGroup.add(_t.getUnityResUrl(t), e, i), this;
        }
        addRes(t, e, i = !0) {
            return this.loadGroup.add(t, e, i), this;
        }
        onExecute() {
            super.onExecute(), this.loadGroup.onCompletion(Laya.Handler.create(this, () => {
                this.endAction(!0);
            })).start();
        }
    }
    class Rt {
        static getUnityResUrl(t) {
            return `${this.unityRes}/${t}`;
        }
        static getFguiResUrl(t) {
            return `${this.fguiRes}/${t}`;
        }
        static getGraphResUrl(t) {
            return `${this.graphRes}/${t}.json`;
        }
        static getTableResUrl(t) {
            return `${this.tableRes}/${t}.json`;
        }
        static getSoundUrl(t) {
            return `${this.soundRes}/${t}`;
        }
        static getPowerTexUrl(t) {
            return `${this.powerTexRes}/${t}.png`;
        }
    }
    Rt.unityRes = "unitylib/Conventional", Rt.fguiRes = "fgui", Rt.graphRes = "res/graph", Rt.tableRes = "res/table", Rt.soundRes = "res/sound", Rt.powerTexRes = "res/pownumtex";
    var Et = g;
    class Gt extends Et {
        constructor(t, e, i = !1) {
            super(), this.go = t, this.infoName = e, this.isPrefab = i;
        }
        onExecute() {
            super.onExecute(), c.instance.load(Rt.getUnityResUrl(this.infoName + ".json"), Laya.Handler.create(this, () => {
                this.syncExecute(), this.go = null, this.infoName = null, this.endAction(!0);
            }));
        }
        syncExecute() {
            let t = c.instance.getRes(Rt.getUnityResUrl(this.infoName + ".json"));
            this.isPrefab && (t.name = this.go.name), D.Inst.comMgr.initComs(this.go, t), this.go = null, this.infoName = null;
        }
    }
    var Nt = D;
    class Tt extends fgui.GButton {
        constructor() {
            super(...arguments), this.isGif = !1;
        }
        constructFromXML(t) {
            super.constructFromXML(t), this.gameIcon = this.getChild("icon").asLoader, this.gifIcon = this.getChild("gifLoader").asCom, this.isGifController = this.getController("IsGif"), null != this.getChild("title") && (this.gameTitle = this.getChild("title").asTextField), console.log("register aditem onlick"), this.onClick(this, this.OnIconClick);
        }
        init(t, e) {
            this.mGameInfo = t, this.sceneName = e, t.qr_img && "" != t.qr_img ? (this.gifIcon.getChild("icon").asLoader.url = t.qr_img, this.isGifController.selectedIndex = 1) : (this.gameIcon.url = t.img, this.isGifController.selectedIndex = 0), this.icon = t.img, this.gameTitle && (this.gameTitle.text = t.gamename);
        }
        OnIconClick() {
            console.log("click aditem: " + this.sceneName), Nt.Inst.adSdk.onAdvertisementClicked(this.mGameInfo, this.sceneName);
        }
    }
    class Dt extends Tt {
        constructFromXML(t) {
            super.constructFromXML(t);
        }
    }
    class Ot extends Tt {
        constructFromXML(t) {
            super.constructFromXML(t);
        }
    }
    var Mt, Vt = D;
    class Ft extends fgui.GButton {
        constructFromXML(t) {
            super.constructFromXML(t), this.gameIcon = this.getChild("icon").asLoader, this.gifIcon = this.getChild("gifLoader").asCom, this.bgController = this.getController("BgController"), null != this.bgController && (this.bgCount = this.bgController.pageCount), this.isGifController = this.getController("IsGif"), this.typeController = this.getController("type"), this.onClick(this, this.OnIconClick);
        }
        init(t, e, i = 0) {
            this.mGameInfo = t, this.sceneName = e, null != this.bgController && (this.bgController.selectedIndex = Math.floor(10 * Math.random()) % this.bgCount), t.qr_img && "" != t.qr_img ? (this.gifIcon.getChild("icon").asLoader.url = t.qr_img, this.isGifController.selectedIndex = 1) : (this.gameIcon.url = t.img, this.isGifController.selectedIndex = 0), this.icon = t.img, this.title = t.gamename, null != this.typeController && (this.typeController.selectedIndex = i);
        }
        OnIconClick() {
            console.log("IconClick"), Vt.Inst.adSdk.onAdvertisementClicked(this.mGameInfo, this.sceneName);
        }
    }
    class Ht extends Ft {
        constructFromXML(t) {
            super.constructFromXML(t), this.labelController = this.getController("new");
        }
        init(t, e, i) {
            super.init(t, e), null != this.labelController && (this.labelController.selectedIndex = i);
        }
    }
    class Wt extends Tt {
        constructFromXML(t) {
            super.constructFromXML(t);
        }
    }
    class Yt {
        static Init() {
            R.Init(), Yt.SceneRoot = new Laya.Sprite(), Laya.stage.addChild(Yt.SceneRoot), Laya.stage.addChild(fairygui.GRoot.inst.displayObject), fairygui.UIConfig.bringWindowToFrontOnClick = !1, fgui.UIConfig.buttonSound = _t.getSoundUrl("aac_Click.mp3"), fairygui.GRoot.inst.on(Laya.Event.CLICK, this, t => {
                t.target.$owner instanceof fairygui.GButton && this.doVibrate(100);
            }), fgui.UIObjectFactory.setPackageItemExtension("ui://MainPack/ADItem2", Dt), fgui.UIObjectFactory.setPackageItemExtension("ui://MainPack/ADItem3", Ot), fgui.UIObjectFactory.setPackageItemExtension("ui://MainPack/ADItem5", Wt), fgui.UIObjectFactory.setPackageItemExtension("ui://MainPack/ADItem", Tt), fairygui.UIObjectFactory.setPackageItemExtension("ui://MainPack/AppExportIcon", Ft), fairygui.UIObjectFactory.setPackageItemExtension("ui://MainPack/AppExportIcon2", Ht), fairygui.UIObjectFactory.setPackageItemExtension("ui://MainPack/AppExportIcon3", Ft), fairygui.UIObjectFactory.setPackageItemExtension("ui://MainPack/AppExportIcon4", Ht);
        }
        static ShowUI() {}
        static ShowGameScene() {
            Yt.MainSceneGO = c.instance.getRes(_t.getUnityResUrl("Main.ls")), Yt.SceneRoot.addChild(Yt.MainSceneGO), new Gt(Yt.MainSceneGO, "Main").syncExecute(), Kt.loadGameScene();
        }
        static doVibrate(t) {
            if (R.playerData.isVibrateOn)
                if (Laya.Browser.onWeiXin) t > 200 ? wx.vibrateLong(null) : wx.vibrateShort(null);
                else {
                    if (!navigator.vibrate) return void console.log("");
                    console.log(""), navigator.vibrate(t);
                }
        }
        static checkOpenOfflineUI() {
            let t = !1;
            var e = Date.now(),
                i = R.playerData.OffLineInTime;
            if (0 != i) {
                var s = e - i;
                Math.floor(s / 6e4) > 30 && (t = !0);
            } else R.playerData.OffLineInTime = e;
            return !1;
        }
    }
    class Kt {
        static get LevelData() {
            return qt.get(R.playerData.Level);
        }
        static get P1SkinName() {
            return this.TemSkin >= 0 ? `Player_${this.TemSkin}` : `Player_${R.skinData.CurId}`;
        }
        static get P2SkinName() {
            let t = `Enemy_${R.skinData.enemySkinId}`;
            return -1 == this.LevelData.Level && (t = "Bonus_level"), t;
        }
        static get IsWin() {
            return this.p2Hp <= 0;
        }
        static loadGameScene() {
            this.loadTask.clear(), Kt.gameStatus = Mt.Idle, this.sceneGo = Yt.MainSceneGO.getChildByName("GameScene"), this.mAttackBonusNum = 3;
            let t = this.sceneGo.getChildByName("effect"),
                e = Yt.MainSceneGO.getChildByName("Main Camera"),
                i = e.getComponent(Laya.Animator);
            this.camGameGraphOwner = e.getComponent(F), this.loadEffectComplete(), i.play("Acamera", 0, 0);
            for (let e = 0; e < t.numChildren; e++) t.getChildAt(e).active = !1;
            null != this.p1Go && this.p1Go.destroy(), null != this.p2Go && this.p2Go.destroy(), null != this.stageGo && this.stageGo.destroy(), console.log("load gameSceneName: " + this.gameSceneName);
            let s = new Bt([`${this.gameSceneName}.lh`, `${this.gameSceneName}.json`]);
            s.setComplete(Laya.Handler.create(this, () => {
                this.stageGo = this.sceneGo.addChild(Laya.loader.getRes(_t.getUnityResUrl(`${this.gameSceneName}.lh`)).clone());
            }));
            let n = new Bt([`${this.P1SkinName}.lh`, `${this.P1SkinName}.json`, `${this.P2SkinName}.lh`, `${this.P2SkinName}.json`]);
            n.setComplete(Laya.Handler.create(this, () => {
                this.addPlayer(this.P1SkinName, this.P2SkinName);
            }));
            let a = new Bt([]);
            for (let t = 0; t < 10; t++) a.addRes(_t.getPowerTexUrl(t));
            this.loadTask.addTask(s).addTask(n).addTask(a).setComplete(Laya.Handler.create(this, this.initGameData)).execute();
        }
        static reLoadPlayer() {
            null != this.p1Go && this.p1Go.destroy(), null != this.p2Go && this.p2Go.destroy(), new Bt([`${this.P1SkinName}.lh`, `${this.P1SkinName}.json`, `${this.P2SkinName}.lh`, `${this.P2SkinName}.json`]).setComplete(Laya.Handler.create(this, () => {
                this.addPlayer(this.P1SkinName, this.P2SkinName, !0);
            })).execute();
        }
        static changePlayerSkin(t, e = R.skinData.enemySkinId, i = null) {
            this.initHP(), this.reLoadPlayer(), Y.sendEvent(xt.Change_Skin);
        }
        static initGameData() {
            this.sceneGo.getChildByName("PowerBar3D").active = !1, Y.addListener(xt.SELF_PLAYER_HP, this.playerAttack, this), Y.addListener(xt.ENEMY_PLAYER_HP, this.enemyAttack, this), Y.addListener(xt.GAME_OVER, this.gameOver, this), Y.addListener(xt.isOnePush, this.OlaOla, this), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), this.camGameGraphOwner.onStart(), new Gt(this.stageGo, this.gameSceneName, !0).syncExecute(), this.initPlayerCom();
        }
        static initData() {
            this.gameSceneName = A.GameSceneNumArr[this.gameSceneIndex], this.initHP();
        }
        static initHP() {
            this.p1Hp = Xt.get(R.playerData.HPLevel).self_hp + Zt.get(R.skinData.CurId).Add_hp, this.p2Hp = this.LevelData.other_hp;
        }
        static startGame() {
            this.sceneGo.getChildByName("PowerBar3D").active = !0, Kt.gameStatus = Mt.Playing, Yt.doVibrate(400), this.initHP(), this.isSelfChangeHead = !1, this.isOtherChangeHead = !1, Y.sendEvent(xt.Game_Start);
        }
        static gameOver() {
            HUHU_showInterstitialAd();
            this.doAfterGameOver();
        }
        static RemoveListenr() {
            this.TemSkin = -1, Y.removeListener(xt.SELF_PLAYER_HP, this.playerAttack, this), Y.removeListener(xt.ENEMY_PLAYER_HP, this.enemyAttack, this), Y.removeListener(xt.GAME_OVER, this.gameOver, this), Y.removeListener(xt.isOnePush, this.OlaOla, this), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), F.stopGraphAll();
        }
        static doAfterGameOver() {
            console.log("doAfterGameOver++++++++++"), 0 == R.skinData.getAllUnLockSkinByPage().length ? this.showGameOverUI() : Oe.show();
        }
        static showGameOverUI() {
            R.playerData.Level % 8 == 0 && R.playerData.Level > 0 && this.IsWin ? ye.show() : Ce.show("", this.IsWin ? 1 : 0);
        }
        static addPlayer(t, e, i = !1) {
            null != this.p1Go && this.p1Go.destroy(), null != this.p2Go && this.p2Go.destroy(), this.p1Go = this.sceneGo.addChild(Laya.loader.getRes(_t.getUnityResUrl(`${t}.lh`)).clone()), this.p2Go = this.sceneGo.addChild(Laya.loader.getRes(_t.getUnityResUrl(`${e}.lh`)).clone()), this.p1Go.name = "P1", this.p2Go.name = "P2", i && this.initPlayerCom();
        }
        static initPlayerCom() {
            new Gt(this.p1Go, this.P1SkinName, !0).syncExecute(), new Gt(this.p2Go, this.P2SkinName, !0).syncExecute();
            let t = this.p1Go.getChildAt(0).getComponent(F);
            null != t && (-1 == this.LevelData.Level && t.resetCanvas(_t.getGraphResUrl("PlayerBonus")), console.log("-----------------"), t.loadCanvas());
        }
        static restartGame() {
            this.initHP(), Kt.sceneGo.getChildByName("PowerBar3D").active = !1, Kt.gameStatus = Mt.Idle, Kt.loadGameScene();
        }
        static MoreAttackGame() {
            -1 == Kt.LevelData.Level ? (this.mAttackBonusNum = 1, Y.Current.dispatchEventWith(xt.ATTACK, 2)) : this.p1Hp = 1, Y.sendEvent(xt.MoreAttack), this.gameStatus = Mt.Playing;
        }
        static jumpNext() {
            R.playerData.Level++, R.skinData.enemySkinId++, 15 == R.skinData.enemySkinId && (R.skinData.enemySkinId = 1), this.changGameSceneName(), this.restartGame();
        }
        static changGameSceneName() {
            this.gameSceneIndex++, this.gameSceneIndex = this.gameSceneIndex % A.GameSceneNumArr.length, this.gameSceneName = A.GameSceneNumArr[this.gameSceneIndex];
        }
        static playerAttack() {
            if (-1 == this.LevelData.Level) {
                if (this.mAttackBonusNum <= 0) return;
                this.mAttackBonusNum--;
            }
            this.p2Hp -= this.AttackBet * this.meAttackPower;
            let t = s.FindPath(this.p1Go, "player/Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Spine1/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/huo");
            "huo" == t.name && (t.active = !1), this.AttackBet = 1, this.p2Hp <= 0 ? (this.p2Hp = 0, Y.sendEvent(xt.SUCCESS), this.gameStatus = Mt.GameOver, console.log("")) : this.p2Hp < this.LevelData.other_hp / 2 && !this.isOtherChangeHead && -1 != this.LevelData.Level && (Y.sendEvent(xt.OtherChangeHead), this.isOtherChangeHead = !0), Y.Current.dispatchEventWith(xt.ATTACK, 2), -1 == this.LevelData.Level && 0 == this.mAttackBonusNum && (this.p2Hp <= 0 ? Y.sendEvent(xt.SUCCESS) : Y.sendEvent(xt.FAIL));
        }
        static enemyAttack() {
            Yt.doVibrate(400), this.p1Hp -= s.random(this.LevelData.other_min_power, this.LevelData.other_max_power + 1), this.p1Hp <= 0 ? (this.p1Hp = 0, this.gameStatus = Mt.GameOver, Y.sendEvent(xt.FAIL), console.log("")) : this.p1Hp < Xt.get(R.playerData.HPLevel).self_hp / 2 && !this.isSelfChangeHead && (Y.sendEvent(xt.SelfChangeHead), this.isSelfChangeHead = !0), Y.Current.dispatchEventWith(xt.ATTACK, 1);
        }
        static OlaOla() {
            this.AttackBet = 2;
            let t = s.FindPath(this.p1Go, "player/Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Spine1/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/huo");
            if ("huo" == t.name) t.active = !0;
            else {
                let t = this.sceneGo.getChildByName("effect").getChildByName("huo").clone(),
                    e = s.FindPath(this.p1Go, "player/Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Spine1/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand");
                t.name = "huo", t.active = !0, e.addChild(t);
            }
        }
        static onMouseDownEvent(t) {
            t.target.$owner instanceof fairygui.GButton || this.gameStatus == Mt.Playing && Y.sendEvent(Laya.Event.MOUSE_DOWN);
        }
        static onMouseUpEvent(t) {
            t.target.$owner instanceof fairygui.GButton || this.gameStatus == Mt.Playing && Y.sendEvent(Laya.Event.MOUSE_UP);
        }
        static loadEffectComplete() {
            Laya.Shader3D.debugMode = !1, this.compileShader(Kt.sceneGo.getChildByName("effect"));
        }
        static compileShader(t) {
            if (t instanceof Laya.ShuriKenParticle3D) {
                let e = t;
                e.active = !0, e.particleSystem.play();
            }
            if (t._children)
                for (var e = 0; e < t._children.length; e++) this.compileShader(t._children[e]);
        }
    }
    Kt.loadTask = new u(r.RunInSequence), Kt.meAttackPower = 0, Kt.AttackBet = 1, Kt.gameSceneIndex = 0, Kt.TemSkin = -1, Kt.mAttackBonusNum = 3,
        function(t) {
            t[t.Idle = 0] = "Idle", t[t.Playing = 1] = "Playing", t[t.GameOver = 2] = "GameOver";
        }(Mt || (Mt = {}));
    var jt = vt;
    jt.Scene.add(new class extends jt.Scene {
        get sceneId() {
            return At.LoadingScene;
        }
        onSceneEnter(t, e) {
            super.onSceneEnter(t, e), Yt.Init();
            let i = new Bt([]).addRes(_t.getTableResUrl("slapkings_hp")).addRes(_t.getTableResUrl("slapkings_level")).addRes(_t.getTableResUrl("slapkings_power")).addRes(_t.getTableResUrl("slapkings_skin")).setComplete(Laya.Handler.create(this, () => {
                    Xt.serialization(), Jt.serialization(), qt.serialization(), Zt.serialization();
                })),
                s = A.GameSceneNumArr[0],
                n = new Bt(["Main.ls", "Main.json", `${s}.lh`, `${s}.json`]);
            this.addSceneTask(i).addSceneTask(n), ee.show(null, this.mSceneTask);
        }
        onTaskFinish() {
            super.onTaskFinish(), c.instance.getRes(_t.getUnityResUrl("Main.ls")), jt.Scene.go(At.MainScene), Y.sendEvent(xt.Hide_LoadingUI);
        }
    }());
    var zt = vt;
    zt.Scene.add(new class extends zt.Scene {
        get sceneId() {
            return At.MainScene;
        }
        onSceneEnter(t, e) {
            super.onSceneEnter(t, e);
        }
        onTaskFinish() {
            super.onTaskFinish(), Kt.initData(), Yt.ShowGameScene(), Yt.ShowUI();
        }
    }());
    class $t extends Laya.Script3D {
        constructor() {
            super(...arguments), this.offset = .052, this.center = 0;
        }
        get currentState() {
            return this.ani.getControllerLayer().getCurrentPlayState();
        }
        onAwake() {
            this.ani = this.owner.getComponent(Laya.Animator), this.ani.cullingMode = Laya.Animator.CULLINGMODE_CULLCOMPLETELY, this.ani.getControllerLayer().playOnWake = !1, this.mNumGroup = this.owner.getChildByName("NumGroup"), this.originalNum = this.mNumGroup.getChildByName("num"), Y.addListener(xt.Level_UP_POWER, this.refreshPower, this);
        }
        onDestroy() {
            Y.removeListener(xt.Level_UP_POWER, this.refreshPower, this);
        }
        onUpdate() {
            null != this.currentState && ("PowerBarAnim3D" == this.currentState.animatorState.name && this.currentState.normalizedTime >= 1 ? (this.ani.speed = -1, this.ani.play("PowerBarAnim3DBack", 0, 1)) : "PowerBarAnim3DBack" == this.currentState.animatorState.name && this.currentState.normalizedTime < 0 && (this.ani.speed = 1, this.ani.play("PowerBarAnim3D", 0, 0)));
        }
        resetState() {
            this.ani.speed = 1, this.ani.play("PowerBarAnim3D", 0, 0);
            let t = Jt.get(R.playerData.powerLevel).self_max_power + Zt.get(R.skinData.CurId).Add_power;
            this.setNum(t);
        }
        count() {
            this.ani.speed = 0;
            let t = 100 * this.ani.getControllerLayer().getCurrentPlayState().normalizedTime;
            t = Math.abs(50 - t) / 50;
            let e = Jt.get(R.playerData.powerLevel),
                i = (e.self_max_power + Zt.get(R.skinData.CurId).Add_power - e.self_min_power) * (1 - t) + e.self_min_power;
            return i = parseInt(i.toString()), Kt.meAttackPower = i, console.log("meAttackPower" + i), Yt.doVibrate(200), this.setNum(i), t > 0 && t < .3 ? 1 : 0;
        }
        refreshPower() {
            let t = Jt.get(R.playerData.powerLevel).self_max_power + Zt.get(R.skinData.CurId).Add_power;
            this.setNum(t);
        }
        setNum(t) {
            let e = t.toString().length,
                i = [];
            for (let t = 0; t < this.mNumGroup.numChildren; t++) this.mNumGroup.getChildAt(t).active = !1;
            for (let s = 0; s < e; s++) {
                let e;
                this.mNumGroup.numChildren > s ? e = this.mNumGroup.getChildAt(s) : (e = this.originalNum.clone(), this.mNumGroup.addChild(e));
                let n = parseInt(t.toString().substr(s, 1));
                e.active = !0, e.meshRenderer.material.albedoTexture = Laya.loader.getRes(_t.getPowerTexUrl(n)), i.push(e);
            }
            1 == e && (i[0].transform.localPositionX = this.center), 2 == e && (i[0].transform.localPositionX = this.center - this.offset / 2, i[1].transform.localPositionX = this.center + this.offset / 2), 3 == e && (i[0].transform.localPositionX = this.center - this.offset, i[1].transform.localPositionX = this.center, i[2].transform.localPositionX = this.center + this.offset), 4 == e && (i[0].transform.localPositionX = this.center - this.offset / 2 - this.offset, i[1].transform.localPositionX = this.center - this.offset / 2, i[2].transform.localPositionX = this.center + this.offset / 2, i[3].transform.localPositionX = this.center + this.offset / 2 + 2 * this.offset);
        }
    }
    M.registerNodeType("PointerNode", class extends V {
        registeredPort() {
            super.registeredPort(), this.regPort("in", new e(this.count, this)), this.regPort("reset", new e(this.resetState, this)), this.regPort("hide", new e(this.hide, this)), this.regPort("out", new e(() => this.type, this)), this.goKnob = this.regPort("go"), this.flowOut = this.regPort("flowOut");
        }
        onGraphStart() {
            let t = null;
            t = null != this.goKnob && this.goKnob.connected ? this.goKnob.Value : this.graph.go, this.mCom = t.getComponent($t), null == this.mCom && (this.mCom = t.addComponent($t));
        }
        count() {
            this.type = this.mCom.count(), console.log("type:", this.type), null != this.flowOut && this.flowOut.call();
        }
        resetState() {
            this.mCom.owner.active = !0, this.mCom.resetState();
        }
        hide() {
            this.mCom.owner.active = !1;
        }
    });
    class qt {
        static serialization() {
            let t = Laya.loader.getRes(_t.getTableResUrl("slapkings_level"));
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                this.dataMap.set(i.Id, i);
            }
        }
        static get(t) {
            return this.dataMap.has(t) && (R.playerData.Level = t), this.dataMap.has(t) ? this.dataMap.get(t) : this.dataMap.get(this.dataMap.size);
        }
    }
    qt.dataMap = new Map();
    class Xt {
        static serialization() {
            let t = Laya.loader.getRes(_t.getTableResUrl("slapkings_hp"));
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                this.dataMap.set(i.Level, i);
            }
        }
        static get(t) {
            return this.dataMap.has(t) ? this.dataMap.get(t) : this.dataMap.get(this.dataMap.size);
        }
        static judgeHas(t) {
            return this.dataMap.has(t);
        }
    }
    Xt.dataMap = new Map();
    class Jt {
        static serialization() {
            let t = Laya.loader.getRes(_t.getTableResUrl("slapkings_power"));
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                this.dataMap.set(i.Level, i);
            }
        }
        static get(t) {
            return this.dataMap.has(t) ? this.dataMap.get(t) : this.dataMap.get(this.dataMap.size);
        }
        static judgeHas(t) {
            return this.dataMap.has(t);
        }
    }
    Jt.dataMap = new Map();
    class Zt {
        static serialization() {
            let t = Laya.loader.getRes(_t.getTableResUrl("slapkings_skin"));
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                this.dataMap.set(i.Id, i);
            }
        }
        static get(t) {
            return this.dataMap.has(t) ? this.dataMap.get(t) : this.dataMap.get(this.dataMap.size);
        }
        static judgeHas(t) {
            return this.dataMap.has(t);
        }
    }
    Zt.dataMap = new Map();
    var Qt = L,
        te = bt;
    class ee extends Qt {
        constructor() {
            super(te.Pack.LoadingPack, te.Res.LoadingUI);
        }
        onInit() {
            super.onInit(), this.progressBar = this.contentPane.getChild("progressBar").asProgress, Y.addListener(xt.Hide_LoadingUI, this.hideUI, this);
        }
        static show(t, e) {
            super.show(te.LoadingUI, e);
        }
        onShown() {
            super.onShown(), R.playerData.isFirstLoadingFlag = !0, this.resTask = this.data, this.progressBar.value = 0, null != this.resTask && Laya.timer.frameLoop(1, this, this.updateProgress);
        }
        doHideAnimation() {
            console.log("doHideAnimation progress value: " + this.progressBar.value), fgui.GTween.to(1, .2, 1).onUpdate(t => {
                this.alpha = t.value.x;
            }, this).setEase(fgui.EaseType.QuadOut).onComplete(this.onHide, this);
        }
        hideUI() {
            this.hide();
        }
        onHide() {
            Laya.timer.clear(this, this.updateProgress);
            Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                platform.getInstance().startup("Slap-Kings", res.id, () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                        platform.getInstance().navigate("GAME", "LOGO")
                    });
                    fgui.UIConfig.bringWindowToFrontOnClick = !1, fgui.UIConfig.buttonSound = _t.getSoundUrl("aac_Click.mp3"), this.resTask = null, console.log("onHide progress value: " + this.progressBar.value), Y.removeListener(xt.Hide_LoadingUI, this.hide, this), ee.del(), 1 == T.mChaYeAdRate ? Ye.show() : pe.show();
                })
            }))
        }
        static del() {
            super.del(te.LoadingUI);
        }
        updateProgress() {
            if (!this.resTask) return;
            let t = Math.round(100 * this.resTask.progress);
            0 != t && this.progressBar.value != t && this.resTask && this.progressBar && this.progressBar.tweenValue(t, .2);
        }
    }
    Qt.add(new ee());
    class ie extends fgui.GComponent {
        onConstruct() {
            this.CoinNum = this.getChild("GoldNumTex");
        }
        InitNum() {
            this.CoinNum.text = R.playerData.Coins.toString();
        }
        reflash(t = null) {
            let e = +this.CoinNum.text,
                i = R.playerData.Coins;
            e != i ? fgui.GTween.to(e, i, 1).onUpdate(t => {
                this.CoinNum.text = parseInt(t.value.x.toString()).toString();
            }, this).onComplete(() => {
                t && t.run();
            }, this) : this.InitNum();
        }
    }
    var se, ne, ae = R,
        oe = P,
        re = _t,
        le = D;
    class he extends fgui.GComponent {
        constructor() {
            super(...arguments), this.contentArr = ["", "", ""], this.isClick = !1;
            this.maxLv = new Laya.Text();
        }
        onConstruct() {
            this.upgradeController = this.getController("UpgradeMethod"), this.levelTxt = this.getChild("levelNum").asTextField, this.upgradeCostTxt = this.getChild("upgradeCost").asTextField, this.onClick(this, this.onBtnClicked), this.n23 = this.getChild("n23");
            this.n25 = this.getChild("n25");
            this.upgradeCost = this.getChild("upgradeCost");
            this.n27 = this.getChild("n27");
            this.n28 = this.getChild("n28");
            this.n23.relations.clearAll();
            this.levelTxt.x = 105;
            this.levelTxt.y = 59;
            this.n23.x = 75;
            this.n23.y = 66
            this.contentArr = ["", "", ""];
        }
        init(t) {
            this.panelType = t, this.refresh();
        }
        refresh() {
            this.isClick = !1, this.panelType == se.Panel_PH ? (this.levelNum = Xt.get(ae.playerData.HPLevel).Level, this.upgradeCost = Xt.get(ae.playerData.HPLevel).hp_add) : this.panelType == se.Panel_Strength ? (this.levelNum = Jt.get(ae.playerData.powerLevel).Level, this.upgradeCost = Jt.get(ae.playerData.powerLevel).power_add) : this.panelType == se.Panel_Offline && (this.levelNum = ae.playerData.offlineLevel, this.upgradeCost = Jt.get(ae.playerData.offlineLevel).power_add), this.upgradeController.selectedIndex = ae.playerData.Coins < this.upgradeCost ? 1 : 0, this.refreshLabel();
            if ((this.panelType == se.Panel_PH && !Xt.judgeHas(ae.playerData.HPLevel + 1)) || (this.panelType == se.Panel_Strength && !Jt.judgeHas(ae.playerData.powerLevel + 1)) || (this.panelType == se.Panel_Offline && !Jt.judgeHas(ae.playerData.offlineLevel + 1))) {
                this.n28.visible = this.n27.visible = this.upgradeCostTxt.visible = this.n25.visible = false;
                this.maxLv.text = "Full Level";
                this.maxLv.fontSize = 20;
                this.maxLv.color = "#ffffff";
                this.maxLv.pos(72, 112);
                this.displayObject.addChild(this.maxLv);
            }
        }
        onBtnClicked() {
            if ((this.panelType == se.Panel_PH && !Xt.judgeHas(ae.playerData.HPLevel + 1)) || (this.panelType == se.Panel_Strength && !Jt.judgeHas(ae.playerData.powerLevel + 1)) || (this.panelType == se.Panel_Offline && !Jt.judgeHas(ae.playerData.offlineLevel + 1))) {
                return;
            }
            if (oe.playSound(re.getSoundUrl("aac_Click.mp3")), this.isClick) console.log("already click phPanel.");
            else if (this.isClick = !0, 0 == this.upgradeController.selectedIndex) ae.playerData.Coins -= this.upgradeCost, this.doAfterUpgrade();
            else if (G.isWeChatGame) {
                let t = this;
                1 == T.mTanChuang ? null : this.watchAd();
            } else this.watchAd();
        }
        upgradeLevelNum() {
            this.levelNum++, console.log("Level Up! level: " + this.levelNum), this.panelType == se.Panel_PH ? (ae.playerData.HPLevel = this.levelNum, Kt.initHP()) : this.panelType == se.Panel_Strength ? (ae.playerData.powerLevel = this.levelNum, Y.sendEvent(xt.Level_UP_POWER)) : this.panelType == se.Panel_Offline && (ae.playerData.offlineLevel = this.levelNum);
        }
        refreshLabel() {
            this.levelTxt.text = this.levelNum.toString(), this.upgradeCostTxt.text = this.upgradeCost.toString();
        }
        watchAd() {
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), t.doAfterUpgrade();
                };
            le.Inst.adSdk.showRewardedVideoAd(e, function() {
                t.isClick = !1, console.log("watch ad failed.");
            })
        }
        doAfterUpgrade() {
            this.isClick = !1, this.upgradeLevelNum(), Y.sendEvent(xt.REFRESHCOINS), this.panelType == se.Panel_PH && Y.sendEvent(xt.Level_Up);
        }
    }! function(t) {
        t[t.Panel_PH = 0] = "Panel_PH", t[t.Panel_Strength = 1] = "Panel_Strength", t[t.Panel_Offline = 2] = "Panel_Offline";
    }(se || (se = {}));
    class de extends fgui.GProgressBar {
        onConstruct() {
            this.valueTxt = this.getChild("num").asTextField, this.lossValueTxt = this.getChild("lossNum").asTextField, this.redProgressBar = this.getChild("redBg").asProgress, this.lossAnim = this.getTransition("t0");
        }
        init(t) {
            this.progressType = t;
        }
        setMax(t) {
            this.maxNum = t, this.max = this.maxNum, this.redProgressBar.max = this.maxNum, this.value = this.maxNum, this.valueTxt.text = this.value.toString(), this.redProgressBar.value = this.maxNum, this.redProgressBar.visible = !1;
        }
        setValue(t) {
            fgui.GTween.to(this.value, t, 1).onUpdate(t => {
                this.valueTxt.text = parseInt(t.value.x.toString()).toString();
            }, this), this.lossValue = this.value - t, this.lossValueTxt.text = (-this.lossValue).toString(), this.curValue = t, this.value = this.curValue, this.redProgressBar.visible = !0, this.redProgressBar.tweenValue(this.curValue, 1).onComplete(() => {
                this.redProgressBar.visible = !1;
            }, this), this.lossAnim.play();
        }
    }! function(t) {
        t[t.Normal = 0] = "Normal", t[t.Reverse = 1] = "Reverse";
    }(ne || (ne = {}));
    var ce = L,
        ge = bt,
        ue = R,
        me = D;
    class pe extends ce {
        constructor() {
            super(ge.Pack.MainPack, ge.Res.MainUI), this.isTouchList = !1, this.addUISource(new I(bt.Pack.SkinPack)), fgui.UIObjectFactory.setExtension(bt.GoldLabel, ie), fgui.UIObjectFactory.setExtension(bt.PHPanel, he), fgui.UIObjectFactory.setExtension(bt.StrengthPanel, he), fgui.UIObjectFactory.setExtension(bt.OfflinePanel, he), fgui.UIObjectFactory.setExtension(bt.BloodBar, de), fgui.UIObjectFactory.setExtension(bt.ReverseBloodBar, de);
        }
        onInit() {
            super.onInit(), this.startGameBtn = this.contentPane.getChild("startGameBtn").asButton, this.startGameBtn.onClick(this, this.onStartBtnClicked), this.startGameBtn.visible = !1, this.musicOnOff = this.contentPane.getChild("muiscOnOff").asButton, this.musicController = this.musicOnOff.getController("button"), this.changeSwitchStatus(this.musicOnOff, ue.playerData.isMusicOn), this.musicOnOff.on(fairygui.Events.STATE_CHANGED, this, this.onMusicStateChanged), this.vibrateOnOff = this.contentPane.getChild("vibrateOnOff").asButton, this.coinsCom = this.contentPane.getChild("goldLabel"), this.skinBtn = this.contentPane.getChild("skinBtn").asButton, this.skinBtn.onClick(this, this.onSkinBtnClicked), this.hasNewSkinController = this.skinBtn.getController("RedPoint"), this.signInBtn = this.contentPane.getChild("signinBtn").asButton, this.signInBtn.onClick(this, this.onSignInBtnClicked), this.SignInController = this.signInBtn.getController("isSignIn"), this.enhanceBtn = this.contentPane.getChild("enhanceBtn").asButton, this.enhanceBtn.onClick(this, this.onEnhanceBtnClicked), console.log("-------------------------------"), this.gameStatusController = this.contentPane.getController("GameStatus"), this.canUseEnhanceController = this.contentPane.getController("CanUseEnhance"), this.phPanel = this.contentPane.getChild("phPanel"), this.phPanel.init(se.Panel_PH), this.strengthPanel = this.contentPane.getChild("strengthPanel"), this.strengthPanel.init(se.Panel_Strength), this.offlinePanel = this.contentPane.getChild("oflinePanel"), this.offlinePanel.init(se.Panel_Offline), this.battleBoard = this.contentPane.getChild("battleBoard").asCom, this.progressBar1 = this.battleBoard.getChild("bloodBar1"), this.progressBar1.init(ne.Normal), this.progressBar2 = this.battleBoard.getChild("bloodBar2"), this.progressBar2.init(ne.Reverse), this.playerIcon1 = this.battleBoard.getChild("player1").asCom.getChild("icon").asLoader, this.playerIcon2 = this.battleBoard.getChild("player2").asCom.getChild("icon").asLoader, this.levelTex = this.battleBoard.getChild("levelNum").asTextField, this.winTrans = this.contentPane.getTransition("t1"), this.isCoinLeaveController = this.battleBoard.getController("isCoinLeave"), this.CoinLeaveGround = this.contentPane.getChild("CoinLeaveGround").asCom, this.NumCoinLeaveController = this.CoinLeaveGround.getController("NumCtl"), this.NewGuide = this.contentPane.getChild("NewGuide").asButton, this.NewGuide.onClick(this, this.ClickNewGuide), this.moreGamesBtn = this.contentPane.getChild("moreGamesBtn").asButton, this.loadingCom = this.contentPane.getChild("loadingAD").asCom, this.rightAdList = this.contentPane.getChild("n48").asCom.getChild("list").asList, this.topAdListCom = this.contentPane.getChild("n52").asCom, this.topAdList = this.topAdListCom.getChild("list").asList, Y.addListener(xt.ATTACK, this.refrehProgress, this), Y.addListener(xt.REFRESHCOINS, this.refreshDiamondLabel, this), Y.addListener(xt.Level_Up, this.initBattleBoard, this), Y.addListener(xt.Refresh_Red_Point, this.refreshRedPoint, this), Y.addListener(xt.Change_Skin, this.initBattleBoard, this), Y.addListener(xt.Game_Start, this.onGameStart, this), Y.addListener(xt.SELF_PLAYER_HP, this.playerAttack, this), Y.addListener(xt.ENEMY_PLAYER_HP, this.enemyAttack, this), this.rightAdList.displayObject.removeSelf();
            this.contentPane.getChild("n48").asCom.displayObject.removeSelf();
            this.moreGamesBtn.displayObject.removeSelf();
            ue.playerData.isVibrateOn = false;
            this.vibrateOnOff.displayObject.removeSelf();
            this.topAdListCom.displayObject.removeSelf();
            this.topAdListCom.visible = false;
            this.offlinePanel.displayObject.removeSelf();
            this.strengthPanel.x = this.offlinePanel.x;
            this.n12 = this.battleBoard.getChild("n12");
            this.n12.scaleX = this.n12.scaleY = 2;
            this.n12.setXY(240, 55);
        }
        onShown() {
            this.loadingCom.visible = !T.isRequestSucceed, this.isTouchList = !1, this.NewGuide.visible = !1, this.initUI();
        }
        onHide() {}
        static show() {
            super.show(ge.MainUI);
        }
        static hide() {
            super.hide(ge.MainUI);
        }
        initUI() {
            1 == ue.playerData.Level && this.ShowNewGuideAt1(), this.refreshPage(), this.coinsCom.InitNum(), this.refreshNewSkinIcon(), this.refreshSignInIcon(), this.initBattleBoard();
            this.rightAdList.displayObject.removeSelf();
            this.contentPane.getChild("n48").asCom.displayObject.removeSelf();
            this.moreGamesBtn.displayObject.removeSelf();
            this.vibrateOnOff.displayObject.removeSelf();
            this.rightAdList.displayObject.removeSelf();
            this.offlinePanel.displayObject.removeSelf();
            this.contentPane.getChild("n48").asCom.displayObject.removeSelf();
        }
        beginAnim() {}
        onStartBtnClicked() {
            this.startGameBtn.visible = !1, R.playerData.isFirstLoadingFlag = !1, Kt.startGame();
        }
        onSkinBtnClicked() {
            this.startGameBtn.visible && Re.show();
        }
        onSignInBtnClicked() {
            this.startGameBtn.visible && we.show();
        }
        onEnhanceBtnClicked() {
            console.log("ssss");
            let t = this,
                e = function() {
                    t.isOnePush = !0, t.canUseEnhanceController.selectedIndex = 0, Y.sendEvent(xt.isOnePush);
                };
            me.Inst.adSdk.showRewardedVideoAd(e, function() {
                console.log("watch ad failed.");
            })
        }
        onMoreGamesBtnClicked() {}
        refreshPage(t = !1) {
            console.log("-------------------------------"), t ? this.winTrans.play(Laya.Handler.create(this, () => {
                this.gameStatusController.selectedIndex = t ? 1 : 0;
            })) : (this.gameStatusController.selectedIndex = t ? 1 : 0, this.winTrans.playReverse(Laya.Handler.create(this, () => {
                this.startGameBtn.visible = !0;
            })));
        }
        refreshDiamondLabel(t = null) {
            let e = !0;
            null != t && (e = t.data), e ? this.coinsCom.reflash() : this.coinsCom.InitNum(), this.refreshPanels();
        }
        refreshPanels() {
            this.phPanel.refresh(), this.strengthPanel.refresh()
        }
        refreshNewSkinIcon() {
            this.hasNewSkinController.selectedIndex = ue.skinData.HasNewSkin;
        }
        refreshSignInIcon() {
            let t = new Date().getTime();
            this.SignInController.selectedIndex = Math.floor(t / 864e5) == Math.floor(ue.playerData.SignInTime / 864e5) ? 0 : 1, this.SignInController.selectedIndex && we.show();
        }
        onGameStart(t) {
            platform.getInstance().showInterstitial(() => {
                console.log("onGameStart----------------"), this.canUseEnhanceController.selectedIndex = 1, this.refreshPage(!0), this.ShowNewGuideAt0();
            })
        }
        initBattleBoard() {
            -1 == Kt.LevelData.Level ? (this.isCoinLeaveController.selectedIndex = 1, this.CoinLeaveGround.visible = !0, this.NumCoinLeaveController.selectedIndex = Kt.mAttackBonusNum) : (this.isCoinLeaveController.selectedIndex = 0, this.levelTex.text = qt.get(ue.playerData.Level).Level.toString(), this.CoinLeaveGround.visible = !1), this.initProgress(), this.initPlayerIcon();
        }
        initProgress(t = null) {
            this.progressBar1.setMax(Kt.p1Hp), this.progressBar2.setMax(Kt.p2Hp);
        }
        initPlayerIcon() {
            var t = Kt.TemSkin >= 0 ? Kt.TemSkin : R.skinData.CurId,
                e = -1 == Kt.LevelData.Level ? 99 : R.skinData.enemySkinId;
            this.playerIcon1.url = ge.getSkinUrlById(t), this.playerIcon2.url = ge.getSkinUrlById(e), console.log("playerIcon1: " + ge.getSkinUrlById(t) + ", playerIcon2: " + ge.getSkinUrlById(e));
        }
        initADData() {}
        refrehProgress(t) {
            let e = parseInt(t.data);
            console.log("refreshProgress type: " + e), 1 == e ? this.progressBar1.setValue(Kt.p1Hp) : (this.progressBar2.setValue(Kt.p2Hp), this.isOnePush && (this.canUseEnhanceController.selectedIndex = 1, this.isOnePush = !1)), this.canUseEnhanceController.selectedIndex = 1 == e ? 1 : 0, -1 == Kt.LevelData.Level && (this.NumCoinLeaveController.selectedIndex = Kt.mAttackBonusNum);
        }
        refreshRedPoint(t) {
            let e = parseInt(t.data);
            console.log("refresh redpoint type: " + e), 0 == e ? this.refreshNewSkinIcon() : 1 == e && this.refreshSignInIcon();
        }
        onMusicStateChanged(t) {
            ue.playerData.isMusicOn = 2 == this.musicController.selectedIndex, Laya.SoundManager.muted = !ue.playerData.isMusicOn, console.log("turn " + (ue.playerData.isMusicOn ? "on" : "off") + " music");
        }
        onVibrateStateChanged() {
            ue.playerData.isVibrateOn = 2 == this.vibrateController.selectedIndex, console.log("turn " + (ue.playerData.isVibrateOn ? "on" : "off") + " vibrate");
        }
        playerAttack() {
            this.canUseEnhanceController.selectedIndex = 0;
        }
        enemyAttack() {
            this.canUseEnhanceController.selectedIndex = 1;
        }
        changeSwitchStatus(t, e) {
            t.selected = !e, t.getController("button").selectedIndex = e ? 2 : 3;
        }
        playerAnimStart() {
            console.log("playerAnimStart"), this.topAdListCom.visible = !1;
        }
        playerAnimFinish() {
            console.log("playerAnimFinish"), this.topAdListCom.visible = !1;
        }
        ClickNewGuide() {
            var t = this.NewGuide.getController("Guide");
            0 == t.selectedIndex ? (this.NewGuide.visible = !1, Y.sendEvent(Laya.Event.MOUSE_UP)) : 1 == t.selectedIndex ? (this.phPanel.onBtnClicked(), this.NewGuide.x = 250, t.selectedIndex = 2) : 2 == t.selectedIndex && (this.strengthPanel.onBtnClicked(), this.NewGuide.visible = !1);
        }
        ShowNewGuideAt0() {
            0 == ue.playerData.Level && (this.NewGuide.getController("Guide").selectedIndex = 0, this.NewGuide.visible = !0);
        }
        ShowNewGuideAt1() {
            1 == ue.playerData.Level && 1 == ue.playerData.powerLevel && 1 == ue.playerData.HPLevel && (this.NewGuide.getController("Guide").selectedIndex = 1, this.NewGuide.visible = !0);
        }
        onMouseUpEvent() {
            this.isTouchList = !1;
        }
        onMouseDownEvent() {
            this.isTouchList = !0;
        }
    }
    ce.add(new pe());
    var Se = bt,
        ke = D;
    class ye extends L {
        constructor() {
            super(Se.Pack.MainPack, Se.Res.BoxUI), this.unlockList = new Array(), fgui.UIObjectFactory.setExtension(bt.GoldLabel, ie);
        }
        static show() {
            super.show(Se.BoxUI);
        }
        static hide() {
            super.hide(Se.BoxUI);
        }
        onInit() {
            super.onInit(), this.BtnContinue = this.contentPane.getChild("Continue"), this.BtnContinue.onClick(this, this.BtnContinueFn), this.BtnGetKey = this.contentPane.getChild("BtnGetKey"), this.BtnGetKey.onClick(this, this.BtnGetKeyFn), this.keyControl = this.contentPane.getController("KeyControle"), this.HavekeyControl = this.contentPane.getController("HaveKey"), this.RewardSkin = this.contentPane.getChild("SkinType"), this.BoxList = this.contentPane.getChild("BoxList").asList, this.BoxList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            this.BoxList.scrollPane.bouncebackEffect = false;
            this.BtnContinue.width = this.BtnContinue.width * 2;
            this.BtnContinue.height = this.BtnContinue.height * 2;
            this.n10 = this.BtnContinue.getChild("n10");
            this.n10.scaleX = this.n10.scaleY = 2;
        }
        onShown() {
            this.numopen = 0;
            this.BtnGetKey.visible = false;
            this.HavekeyControl.selectedIndex = 1, this.keyNum = 3, this.ReflashKeyFn(), this.GetSkinNum = Math.floor(9 * Math.random()), console.log("BoxUI=>show"), this.contentPane.getChild("GetCoinNum").InitNum(), this.initBoxState(), this.unlockList = R.skinData.getAllUnLockSkinByType(U.ByChest), 0 != this.unlockList.length && (this.RewardSkin.url = Se.getSkinUrlById(this.unlockList[0].skinId));
        }
        onHide() {
            console.log("BoxUI=>hide"), Y.sendEvent(xt.REFRESHCOINS), Ce.show("", Kt.IsWin ? 1 : 0);
        }
        BtnContinueFn() {
            this.hide();
        }
        initBoxState() {
            var t = this.contentPane.getChild("BoxList").asCom;
            console.log("initBoxState");
            for (var e = 0; e < t.numChildren; e++) t.getChildAt(e).getController("BoxState").selectedIndex = 0;
        }
        BtnGetKeyFn() {
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), t.keyNum = 3, t.HavekeyControl.selectedIndex = 1, t.ReflashKeyFn();
                };
            ke.Inst.adSdk.showRewardedVideoAd(e, function() {
                console.log("watch ad failed.");
            })
        }
        ReflashKeyFn() {
            0 == this.keyNum && (this.HavekeyControl.selectedIndex = 0), this.keyControl.selectedIndex = this.keyNum;
        }
        playeffect(t) {
            let e = t.getChild("Kaibao").asCom;
            e.getTransition("baiselizi").play(), e.getTransition("toumd").play();
        }
        onClickItem(t) {
            var e = t.asCom.getController("BoxState");
            if (0 != this.keyNum && !e.selectedIndex) {
                this.numopen++;
                var i = Math.floor(9 * Math.random());
                t.asCom.getController("BoxState").selectedIndex = 1, t.getChild("GetNum").text = "+" + A.Treasure_Chest_Prize[i], this.keyNum--, this.playeffect(t.asCom), this.ReflashKeyFn();
                var s = +t.title;
                this.GetSkinNum == s && this.unlockList.length > 0 ? (R.skinData.unLockSkin(this.unlockList[0].skinId), t.asCom.getChild("SkinUrl").asLoader.url = Se.getSkinUrlById(this.unlockList[0].skinId), t.asCom.getController("isCoins").selectedIndex = 1) : (t.asCom.getController("isCoins").selectedIndex = 0, R.playerData.Coins += A.Treasure_Chest_Prize[i], this.contentPane.getChild("GetCoinNum").reflash());
            }
            if (this.numopen >= 9) {
                this.BtnGetKey.visible = false;
            } else {
                this.BtnGetKey.visible = true;
            }
        }
    }
    L.add(new ye());
    var Ie = bt,
        Le = D;
    class Ce extends L {
        constructor() {
            super(Ie.Pack.MainPack, Ie.Res.GameOver), this.isUp = !0, fgui.UIObjectFactory.setExtension(bt.GoldLabel, ie);
        }
        static show(t, e) {
            super.show(Ie.GameOver, e);
        }
        static hide() {
            super.hide(Ie.GameOver);
        }
        onInit() {
            super.onInit(), this.BtnGetRewardFive = this.contentPane.getChild("BtnGetFive"), this.BtnGetRewardFive.onClick(this, this.BtnGetRewardFiveFn), this.n23 = this.contentPane.getChild("n23"), this.GetCoinNumTex = this.contentPane.getChild("CoinsNum"), this.BtnNoThank = this.contentPane.getChild("NoThank"), this.BtnNoThank.onClick(this, this.BtnNoThankFn), this.BtnRePlay = this.contentPane.getChild("BtnReplay"), this.BtnRePlay.onClick(this, this.BtnRePlayFn), this.OverTypeCtl = this.contentPane.getController("GameResult"), this.adList = this.contentPane.getChild("AdList").asList, this.gifLoader = this.contentPane.getChild("GiftItem").asCom;
            this.WinTex = this.contentPane.getChild("WinTex");
            this.WinTex.x = 265;
            this.LoseTex = this.contentPane.getChild("LoseTex");
            this.LoseTex.x = 265;
            this.RewardTex = this.contentPane.getChild("RewardTex");
            this.RewardTex.y = 620;
            this.RewardIcon = this.contentPane.getChild("RewardIcon");
            this.RewardIcon.y = 625;
            this.adList.displayObject.removeSelf();
            this.n23.displayObject.removeSelf();
            this.gifLoader.displayObject.removeSelf();
        }
        initADData() {}
        onShown() {
            window.yad.bottom = 0;
            this.BtnGetRewardFive.enabled = !0, this.BtnNoThank.enabled = !0, this.isAnima = !1, this.OverTypeCtl.selectedIndex = +this.data, this.GetCoinNumTex.text = "" + (this.data ? Kt.LevelData.success : Kt.LevelData.fail), 28 == R.playerData.Level && (R.skinData.unLockSkin(12)), this.contentPane.getChild("GetCoinNum").InitNum();
        }
        onHide() {}
        BtnGetRewardFiveFn() {
            if (this.isAnima) return;
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), t.GetReward(5);
                };
            Le.Inst.adSdk.showRewardedVideoAd(e, function() {
                console.log("watch ad failed.");
            })
        }
        BtnNoThankFn() {
            this.isAnima || (this.isAnima = !0, this.GetReward(1));
        }
        GetReward(t = 1) {
            R.playerData.Coins += t * +this.GetCoinNumTex.text, this.BtnGetRewardFive.enabled = !1, this.BtnNoThank.enabled = !1, Kt.RemoveListenr(), pe.hide(), this.OverTypeCtl.selectedIndex || -1 == Kt.LevelData.Level ? Kt.jumpNext() : Kt.restartGame();
            this.contentPane.getChild("GetCoinNum").reflash(Laya.Handler.create(this, () => {
                pe.show(), this.hide();
            }));
        }
        BtnRePlayFn() {
            if (this.isAnima) return;
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), Kt.MoreAttackGame(), t.hide();
                };
            Le.Inst.adSdk.showRewardedVideoAd(e, function() {
                console.log("watch ad failed.");
            })
        }
        beginAnim() {
            Laya.timer.frameLoop(2, this, this.LoopAni);
        }
        LoopAni() {
            let t = this.adList.scrollPane;
            1 == this.isUp && t.percY <= 1 ? (t.percY += A.AD_Play_Speed_perc, t.percY >= 1 && (this.isUp = !1)) : (t.percY -= A.AD_Play_Speed_perc, t.percY <= 0 && (this.isUp = !0));
        }
        onMouseUpEvent() {
            this.beginAnim();
        }
        onMouseDownEvent() {
            Laya.timer.clear(this, this.LoopAni);
        }
    }
    L.add(new Ce());
    var fe = bt,
        Pe = D;
    class we extends L {
        constructor() {
            super(fe.Pack.MainPack, fe.Res.SignUI), this.isClickRewardBtn = !1, fgui.UIObjectFactory.setExtension(bt.GoldLabel, ie);
        }
        onInit() {
            super.onInit(), this.adCheckBox = this.contentPane.getChild("CheckBox").asButton, this.adCheckBoxController = this.adCheckBox.getController("button"), this.adCheckBoxController.on(fgui.Events.STATE_CHANGED, this, this.onAdCheckBoxChanged), this.BtnGet = this.contentPane.getChild("BtnGetReward").asButton, this.BtnGet.onClick(this, this.BtnGetRewardFn), this.freeSkin = this.contentPane.getChild("SevenBg").asCom.getChild("FreeSkin").asLoader, this.contentPane.getChild("BtnClose").onClick(this, () => {
                this.hide();
            }), this.isFirstCon = this.contentPane.getController("isFirst"), this.gifLoader = this.contentPane.getChild("GiftItem").asCom;
            this.gifLoader.displayObject.removeSelf();
        }
        static show() {
            super.show(fe.SignUI);
        }
        onShown() {
            window.yad.bottom = 0;
            this.adCheckBoxController.selectedIndex = 1, this.adCheckBox.selected = !0, this.isClickRewardBtn = !1, this.freeSkin.url = fe.getSkinUrlById(14), this.contentPane.getChild("GoldNum").InitNum(), R.playerData.FirstSignInTime ? this.isFirstCon.selectedIndex = 0 : this.isFirstCon.selectedIndex = 1, this.initView();
        }
        onHide() {
            Pe.Inst.adSdk.hideBanner(), Y.Current.dispatchEventWith(xt.Refresh_Red_Point, 1), Y.Current.dispatchEventWith(xt.REFRESHCOINS, !1);
        }
        initAdData() {}
        initView() {
            for (var t = this.contentPane.getChild("ItemLoader"), e = R.playerData.SingInDay, i = 0; i < t.numChildren; i++) {
                var s = t.getChildAt(i),
                    n = s.getController("c1"),
                    a = s.getChild("DayTex");
                s.getChild("CoinNum").text = "" + A.SignIn_Coins_num[i], a.url = "ui://MainPack/day" + i, i >= e ? n.selectedIndex = 0 : i < e && (n.selectedIndex = 1);
            }
            var o = this.contentPane.getChild("OtherSevenBg").getChild("CoinNum");
            R.playerData.FirstSignInTime ? this.isFirstCon.selectedIndex = 0 : (this.isFirstCon.selectedIndex = 1, o.text = "700");
            var r = R.playerData.SignInTime,
                l = Date.now();
            Math.floor(l / 864e5) != Math.floor(r / 864e5) ? this.BtnGet.enabled = !0 : this.BtnGet.enabled = !1;
        }
        static hide() {
            super.hide(fe.SignUI);
        }
        GetReward(t = 1) {
            if (R.playerData.SignInTime = new Date().getTime(), R.playerData.SingInDay < 6) R.playerData.Coins += A.SignIn_Coins_num[R.playerData.SingInDay] * t, R.playerData.SingInDay++;
            else if (6 == R.playerData.SingInDay && (R.playerData.Coins += A.SignIn_Coins_num[R.playerData.SingInDay] * t, R.playerData.SingInDay = 0, !R.playerData.FirstSignInTime)) return void(R.playerData.FirstSignInTime = 1);
            this.contentPane.getChild("GoldNum").reflash(), this.initView(), this.hide();
        }
        BtnGetRewardFn() {
            if (this.isClickRewardBtn) console.log("already click reward button, return.");
            else {
                this.isClickRewardBtn = !0;
                var t = R.playerData.SingInDay;
                if (!R.playerData.FirstSignInTime && 6 == t) return this.GetReward(), R.skinData.unLockSkin(14), this.initView(), void this.hide();
                1 == this.adCheckBoxController.selectedIndex ? this.watchAd() : this.GetReward(1);
            }
        }
        onAdCheckBoxChanged() {
            console.log("checkbox is: " + this.adCheckBoxController.selectedIndex), this.isClickRewardBtn = !1;
        }
        watchAd() {
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), t.isClickRewardBtn = !0, t.GetReward(2);
                };
            Pe.Inst.adSdk.showRewardedVideoAd(e, function() {
                t.isClickRewardBtn = !1, console.log("watch ad failed.");
            })
        }
    }
    L.add(new we());
    class ve extends fgui.GButton {
        onConstruct() {
            this._unlockController = this.getController("IsUnlock"), this._isSelController = this.getController("button"), this._iconLoader = this.getChild("skinLoader").asLoader;
        }
        set itemType(t) {
            this._itemType = t;
        }
        get itemType() {
            return this._itemType;
        }
        set unlockType(t) {
            this._unlockType = t;
        }
        get unlockType() {
            return this._unlockType;
        }
        set skinIndex(t) {
            this._skinId = t;
        }
        get skinIndex() {
            return this._skinId;
        }
        loadIcon(t) {
            null != this._iconLoader && (this._iconLoader.url = t);
        }
        setUnlocked(t) {
            null != this._unlockController && (this._unlockController.selectedIndex = t);
        }
        isUnlocked() {
            return 1 == this._unlockController.selectedIndex;
        }
        setSelectedStatus(t) {
            null != this._isSelController && (this._isSelController.selectedIndex = t ? 1 : 0);
        }
    }
    class Ae extends fairygui.GComponent {
        constructor() {
            super(...arguments), this.AnimationArray = [];
            Ae.inst = this;
        }
        onInit() {
            this.NewScene = new Laya.Scene3D();
            let t = new Laya.Camera(0, -3.86, 10);
            t.orthographic = !0, t.orthographicVerticalSize = 2, t.viewport = new Laya.Viewport(0, 0, Laya.stage.width * Laya.stage.clientScaleX, Laya.stage.height * Laya.stage.clientScaleY), this.NewScene.name = "SimpleSkin";
            let e = new Laya.DirectionLight();
            var i = e.transform.worldMatrix;
            i.setForward(new Laya.Vector3(0, 0, 1)), e.transform.worldMatrix = i, e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), e.intensity = .7, this.NewScene.addChild(t), t.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, this.NewScene.addChild(e), Laya.stage.addChild(this.NewScene), this.NewScene.active = !1;
        }
        show() {
            this.previewSkin(!0);
        }
        previewSkin(t) {
            this.NewScene.active = t, t ? (this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent)) : (this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent)), console.log("preview skin flag: " + t);
        }
        ChangeSimpleSkin(t, x, y, z) {
            Laya.loader.create(_t.getUnityResUrl(`Player_${t}.lh`), Laya.Handler.create(this, t => {
                this.PreSimpleSkin && (this.PreSimpleSkin.removeSelf(), this.PreSimpleSkin = null), this.PreSimpleSkin && (this.PreSimpleSkin.removeSelf(), this.PreSimpleSkin = null);
                var e = this.NewScene.addChild(t.clone());
                if (x >= 0 && y >= 0 && z >= 0) {
                    e.transform.position = new Laya.Vector3(x, y, z)
                } else {
                    e.transform.position = new Laya.Vector3(0, 0.2, 0)
                }
                e.transform.localRotationEulerY = 90, e.name = "p1Node", this.PreSimpleSkin = e;
                e.transform.localScale = new Laya.Vector3(0.3, 0.3, 0.3);
            }));
        }
        onMouseMoveEvent(t) {}
        onMouseDownEvent(t) {}
        onMouseUPEvent() {
            if (this.PreSimpleSkin) {
                var t = this.PreSimpleSkin.getChildByName("player").getComponent(Laya.Animator);
                if (this.AnimationArray.length > 0) {
                    var e = Math.floor(Math.random() * this.AnimationArray.length);
                    t.play(this.AnimationArray[e], 0, 0);
                }
            }
        }
        getAnimationName() {
            if (this.PreSimpleSkin) {
                var t = this.PreSimpleSkin.getChildByName("player").getComponent(Laya.Animator)._controllerLayers[0]._states;
                if (t.length > 0)
                    for (let e = 0; e < t.length; e++) this.AnimationArray.push(t[e].name);
            }
        }
        hide() {
            this.previewSkin(!1);
        }
    }
    Ae.inst;
    var _e = L,
        xe = bt,
        be = R,
        Ue = A,
        Be = D;
    class Re extends _e {
        constructor() {
            super(xe.Pack.SkinPack, xe.Res.SkinUI), this.isUnLockingSkin = !1, this.itemArr = new Array(), this.isLoading = !1, fgui.UIObjectFactory.setExtension(bt.GoldLabel, ie), fgui.UIObjectFactory.setExtension(bt.SkinItem, ve), fgui.UIObjectFactory.setExtension(bt.VainNodeUI, Ae);
        }
        onInit() {
            super.onInit(), this.coinsCom = this.contentPane.getChild("coinsLabel"), this.coinsCom.InitNum(), this.roleSkinList = this.contentPane.getChild("skinList").asList, this.roleSkinList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem), this.pageController = this.roleSkinList.scrollPane.pageController, this.pageController.on(fairygui.Events.STATE_CHANGED, this, this.onPageChanged), this.skinSourceController = this.contentPane.getController("SkinSource"), this.backBtn = this.contentPane.getChild("backBtn").asButton, this.backBtn.y += 60, this.backBtn.onClick(this, this.onClosedBtnClicked), this.unlockBtn = this.contentPane.getChild("unlockBtn").asButton, this.unlockBtn.onClick(this, this.onUnlockBtnClicked), this.watchAdBtn = this.contentPane.getChild("watchAdBtn").asButton, this.watchAdBtn.onClick(this, this.onWatchAdBtnClicked), this.phLabel = this.contentPane.getChild("phLabel").asCom.getChild("numText").asTextField, this.powerLabel = this.contentPane.getChild("powerLabel").asCom.getChild("numText").asTextField, this.contentPane.getChild("SkinScene").onInit();
        }
        doShowAnimation() {
            this.initUI(), this.setXY(0, Laya.stage.height), fgui.GTween.to2(0, Laya.stage.height, 0, 0, .3).setTarget(this, this.setXY).setEase(fgui.EaseType.QuadOut).onComplete(this.onShown, this);
        }
        doHideAnimation() {
            this.contentPane.getChild("SkinScene").hide(), this.hideImmediately();
        }
        onShown() {
            window.yad.visible = false;
            be.skinData.HasNewSkin = 0, this.contentPane.getChild("SkinScene").show(), this.contentPane.getChild("SkinScene").ChangeSimpleSkin(this.selRoleIndex, 0, 0.6, 0);
        }
        onHide() {
            Y.sendEvent(xt.Level_UP_POWER)
            window.yad.visible = true;
            Y.Current.dispatchEventWith(xt.REFRESHCOINS, !1), Y.Current.dispatchEventWith(xt.Refresh_Red_Point, 0);
        }
        static show() {
            super.show(xe.SkinUI);
        }
        static hide() {
            super.hide(xe.SkinUI);
        }
        initUI() {
            this.initListView(), this.coinsCom.InitNum(), this.refreshInfo();
        }
        initListView() {
            this.selRoleIndex = be.skinData.CurId, this.itemArr.length = 0;
            let t = be.skinData.getAllSkinsInfoByType();
            for (let i = 0; i < t.length; i++) {
                let s = this.roleSkinList.getChildAt(i),
                    n = t[i];
                var e = xe.getSkinUrlById(n.skinId);
                s.skinIndex = n.skinId, s.loadIcon(e), s.setUnlocked(n.isUnlock), s.itemType = n.skinType, s.unlockType = n.unLockType, this.itemArr.push(s);
            }
            this.roleSkinList.selectedIndex = this.selRoleIndex, this.refreshSkinInfo();
        }
        refreshInfo() {
            Ue.Unlock_Role_Skin_Cost = Ue.Unlock_Role_Skin_Cost_Arr[this.getCurSkinCostIndex()], this.unlockBtn.text = Ue.Unlock_Role_Skin_Cost + "", this.unlockBtn.grayed = be.playerData.Coins < Ue.Unlock_Role_Skin_Cost, this.watchAdBtn.text = "+" + Ue.SkinUI_Watch_AD_Rewards, this.unlockBtn.touchable = !this.unlockBtn.grayed, 0 == be.skinData.getAllUnLockSkinByPage(0).length && (this.unlockBtn.text = "", this.unlockBtn.grayed = !0, this.unlockBtn.touchable = !1);
        }
        onPageChanged() {
            console.log(`current page: ${this.pageController.selectedIndex}`), this.isUnLockingSkin ? console.log("is unlocking skin. onPage changed. return.") : (1 == this.pageController.selectedIndex ? (this.selRoleIndex = Ue.Skin_Num_Per_Page, this.roleSkinList.selectedIndex = this.selRoleIndex) : (this.selRoleIndex = be.skinData.CurId, this.roleSkinList.selectedIndex = this.selRoleIndex), this.refreshSkinInfo());
        }
        onClickItem(t) {
            var e = t;
            if (this.selRoleIndex != e.skinIndex || !this.isLoading) {
                console.log("U click item" + e.skinIndex), this.isLoading = !0, this.selRoleIndex = e.skinIndex;
                var i = _t.getUnityResUrl(`Player_${this.selRoleIndex}.lh`);
                Laya.loader.create(i, Laya.Handler.create(this, t => {
                    this.isLoading = !1, this.contentPane.getChild("SkinScene").ChangeSimpleSkin(this.selRoleIndex, 0, 0.6, 0);
                    let i = t.getComponent(F);
                    if (i && i.destroy(), this.refreshSkinInfo(), e.isUnlocked()) {
                        if (e.skinIndex == be.skinData.CurId) return;
                        be.skinData.CurId = e.skinIndex, this.doChangeSkin();
                    }
                }));
            }
        }
        doChangeSkin() {
            Kt.changePlayerSkin(be.skinData.CurId);
        }
        refreshSkinInfo() {
            this.selRoleIndex >= Ue.Skin_Num_Per_Page && this.itemArr && this.itemArr.length > this.selRoleIndex && (this.skinSourceController.selectedIndex = this.itemArr[this.selRoleIndex].unlockType);
            let t = this.itemArr[this.selRoleIndex].skinIndex;
            this.phLabel.text = "+" + Zt.get(t).Add_hp, this.powerLabel.text = "+" + Zt.get(t).Add_power;
        }
        onUnlockBtnClicked() {
            if (0 == this.pageController.selectedIndex)
                if (1 != this.isUnLockingSkin) {
                    if (be.playerData.Coins < Ue.Unlock_Role_Skin_Cost) console.log("");
                    else if (!this.isUnLockingSkin) {
                        this.isUnLockingSkin = !0;
                        let s = this.pageController.selectedIndex * Ue.Skin_Num_Per_Page,
                            n = s + Ue.Skin_Num_Per_Page;
                        var t = this.itemArr.filter(t => !t.isUnlocked() && t.skinIndex >= s && t.skinIndex < n);
                        this.roleSkinList.getChildAt(this.roleSkinList.selectedIndex).setSelectedStatus(!1);
                        var e = t.length;
                        if (0 == e) this.isUnLockingSkin = !1;
                        else if (1 == e) this.roleSkinList.selectedIndex = t[0].skinIndex, this.doUnlockSkinLogic(this.roleSkinList.selectedIndex);
                        else {
                            var i = 0;
                            Laya.timer.loop(70, this, () => {
                                var s = parseInt("" + 1e4 * Math.random()) % e;
                                console.log("random num: " + s), this.roleSkinList.selectedIndex = t[s].skinIndex, ++i >= 15 && (Laya.timer.clearAll(this), console.log("unlock skin: " + this.roleSkinList.selectedIndex), this.doUnlockSkinLogic(this.roleSkinList.selectedIndex));
                            });
                        }
                    }
                } else console.log("is unlocking skin. return");
            else console.log("not in page 0. return");
        }
        doUnlockSkinLogic(t) {
            be.skinData.unLockSkin(t), be.playerData.Coins -= Ue.Unlock_Role_Skin_Cost, be.skinData.CurId = this.selRoleIndex = this.roleSkinList.selectedIndex, console.log("set unlock data, role skin: " + be.skinData.CurId);
            let e = this.roleSkinList.getChildAt(t);
            this.refreshInfo(), e.setUnlocked(1), this.contentPane.getChild("SkinScene").ChangeSimpleSkin(this.selRoleIndex, 0, 0.6, 0), this.coinsCom.reflash(), this.isUnLockingSkin = !1, this.doChangeSkin();
        }
        onWatchAdBtnClicked() {
            if (1 != this.isUnLockingSkin) {
                var t = function() {
                    console.log("");
                };
                Be.Inst.adSdk.showRewardedVideoAd(() => {
                    be.playerData.Coins += Ue.SkinUI_Watch_AD_Rewards;
                    this.coinsCom.reflash(), this.refreshInfo();
                }, t);
            }
        }
        onClosedBtnClicked() {
            this.hide();
        }
        getCurSkinCostIndex() {
            let t = be.skinData.getAllUnLockSkinByPage(0);
            return console.log("unlockSkinNum: " + t.length), Ue.Skin_Num_Per_Page - t.length;
        }
    }
    _e.add(new Re());
    var Ee = L,
        Ge = bt;
    L.add(new class extends Ee {
        constructor() {
            super(Ge.Pack.SkinPack, Ge.Res.SkinTrialUI), this.selIndex = -1, this.isFinished = !1;
        }
        static show() {
            super.show(Ge.SkinTrialUI);
        }
        static hide() {
            super.hide(Ge.SkinTrialUI);
        }
        onInit() {
            super.onInit(), this.noThanksBtn = this.contentPane.getChild("CancelUse"), this.noThanksBtn.onClick(this, this.ClickNoThanks), this.skinList = this.contentPane.getChild("skinList").asList, this.skinList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
        }
        onShown() {
            console.log("SkinTrialUI......"), this.initSkinData();
        }
        initSkinList() {
            for (var t = 0; t < this.skinList.numItems; t++) {
                let e = this.skinInfoArr[t];
                const i = this.skinList.getChildAt(t);
                i.asCom.getChild("PlayerIcon").asCom.getChild("icon").asLoader.url = Ge.getSkinUrlById(e.skinId), i.text = t.toString();
            }
        }
        initSkinData() {
            this.initBlockController();
            let t = R.skinData.getAllUnLockSkinByPage(0);
            t.sort(() => Math.random() - .5), t.length < 4 ? this.onClosed() : (this.skinInfoArr = t.slice(0, 4), console.log(`skinInfoArr: ${this.skinInfoArr}`), this.initSkinList());
        }
        initBlockController() {}
        onClickItem(t) {
            console.log(`click item ${t.text}`), this.selIndex = +t.text, this.watchAD();
        }
        watchAD() {
            this.applySkinTrial();
        }
        applySkinTrial() {
            Kt.TemSkin = this.skinInfoArr[this.selIndex].skinId, Kt.changePlayerSkin(this.skinInfoArr[this.selIndex].skinId), this.onClosed();
        }
        ClickNoThanks() {
            this.onClosed();
        }
        onClosed() {
            this.isFinished = !0, Kt.startGame(), this.hide();
        }
    }());
    var Ne = L,
        Te = bt,
        De = D;
    class Oe extends Ne {
        constructor() {
            super(Te.Pack.SkinPack, Te.Res.RandomSkinUI), this.isFinished = !1, this.isWatchedAd = !1, fgui.UIObjectFactory.setExtension(bt.VainNodeUI, Ae);
        }
        static show() {
            super.show(Te.RandomSkinUI);
        }
        static hide() {
            super.show(Te.RandomSkinUI);
        }
        onInit() {
            super.onInit(), this.unlockController = this.contentPane.getController("IsUnlocked"), this.watchAdBtn = this.contentPane.getChild("watchAdBtn").asButton, this.watchAdBtn.onClick(this, this.onWatchAdBtnClicked), this.closeBtn = this.contentPane.getChild("continueBtn").asButton, this.closeBtn.onClick(this, this.onCloseBtnClicked), this.unlockProgressBar = this.contentPane.getChild("unlockProgress").asProgress, this.unlockProgressBar.value = R.skinData.unlockProgress, this.contentPane.getChild("skinLoader").onInit(), this.phTxt = this.contentPane.getChild("phNum").asTextField, this.strengthTxt = this.contentPane.getChild("strengthNum").asTextField, this.leftADList = this.contentPane.getChild("n11").asCom, this.rightADList = this.contentPane.getChild("n12").asCom, this.gifLoader = this.contentPane.getChild("GiftItem").asCom, this.gifLoader.displayObject.removeSelf();
            this.leftADList.displayObject.removeSelf();
            this.rightADList.displayObject.removeSelf();
            this.isFinished = !0, this.closeBtnPosY = this.closeBtn.y, console.log("closeeBtn posY: ", this.closeBtnPosY);
            this.closeBtn.scaleX = this.closeBtn.scaleY = 1.5;
        }
        initADData() {}
        onShown() {
            window.yad.bottom = 0;
            this.gifLoader.displayObject.removeSelf();
            this.leftADList.displayObject.removeSelf();
            this.rightADList.displayObject.removeSelf();
            this.touchByMistakeMechanism(), this.isFinished && (Y.addListener(xt.Skin_to_show, this.SkinToShow, this), Y.addListener(xt.Skin_to_hide, this.SkinToHide, this), this.initUI(), this.initSkinView(), this.initProgressData(), this.contentPane.getChild("skinLoader").show(), this.refreshProgress(R.skinData.unlockProgress, Laya.Handler.create(this, () => {
                100 == R.skinData.unlockProgress && (console.log("unlock random skin."), this.unLockSkin());
            })));
        }
        onHide() {
            De.Inst.adSdk.destroyBanner(), Y.removeListener(xt.Skin_to_show, this.SkinToShow, this), Y.removeListener(xt.Skin_to_hide, this.SkinToHide, this), this.contentPane.getChild("skinLoader").hide();
        }
        initUI() {
            this.isWatchedAd = !1, this.isFinished = !1, this.watchAdBtn.grayed = !1, this.watchAdBtn.touchable = !0, this.watchAdBtn.visible = !0, this.unlockController.selectedIndex = 0;
            this.gifLoader.displayObject.removeSelf();
            this.leftADList.displayObject.removeSelf();
            this.rightADList.displayObject.removeSelf();
        }
        initProgressData() {
            Kt.IsWin && (R.skinData.unlockProgress += A.Win_Unlock_Skin_Progress, R.skinData.unlockProgress >= 100 && (R.skinData.unlockProgress = 100));
        }
        initSkinView() {
            let t = R.skinData.getAllUnLockSkinByPage(0);
            if (console.log(`unlock skin： ${t.toString()}`), -1 == R.skinData.randomSkinId || R.skinData.isSkinUnlocked(R.skinData.randomSkinId)) {
                let i = t.length;
                if (0 == i) this.onClosed();
                else {
                    var e = parseInt(1e4 * Math.random() + "") % i;
                    R.skinData.randomSkinId = t[e].skinId, console.log(`random num: ${e}, unlock random skinid: ${t[e].skinId}`);
                }
            } else console.log("exists random unlockSkinId: " + R.skinData.randomSkinId);
            this.contentPane.getChild("skinLoader").ChangeSimpleSkin(R.skinData.randomSkinId), this.phTxt.text = "+" + Zt.get(R.skinData.randomSkinId).Add_hp, this.strengthTxt.text = "+" + Zt.get(R.skinData.randomSkinId).Add_power;
        }
        refreshProgress(t, e = null) {
            this.unlockProgressBar.tweenValue(t, 1).onComplete(() => {
                null != e && (console.log("refreshProgress"), e.run());
            }, this);
        }
        unLockSkin() {
            this.unlockController.selectedIndex = 1, R.skinData.unLockSkin(R.skinData.randomSkinId), R.skinData.HasNewSkin = 1, this.watchAdBtn.grayed = !0, this.watchAdBtn.touchable = !1;
        }
        onWatchAdBtnClicked() {
            var t = this,
                e = function() {
                    t.isWatchedAd = !0, t.watchAdBtn.visible = !1, R.skinData.unlockProgress += A.WatchAd_Unlock_Skin_Progress, t.closeBtn.visible = !0, t.refreshProgress(R.skinData.unlockProgress, Laya.Handler.create(t, () => {
                        100 == R.skinData.unlockProgress && (console.log("unlock random skin."), t.unLockSkin());
                    }));
                };
            De.Inst.adSdk.showRewardedVideoAd(e, function() {
                console.log("");
            })
        }
        onCloseBtnClicked() {
            this.isFinished = !0, this.onClosed();
        }
        onClosed() {
            this.hide(), 100 == R.skinData.unlockProgress && (R.skinData.unlockProgress = 0), this.unlockProgressBar.value = R.skinData.unlockProgress, Kt.showGameOverUI();
        }
        touchByMistakeMechanism() {
            let t;
            if (this.gifLoader.visible = !1, this.closeBtn.visible = !1, this.closeBtn.y = this.closeBtnPosY, console.log("testflag: true"), t = !!G.isWeChatGame && (!R.playerData.isQueryUser || T.mIsBlock)) Laya.timer.once(1500, this, () => {
                this.closeBtn.visible = !0;
            }), De.Inst.adSdk.showBanner(), this.gifLoader.visible = !0;
            else if (console.log("rate: " + T.mAdRate), Math.random() > T.mAdRate) Laya.timer.once(1500, this, () => {
                this.closeBtn.visible = !0;
            }), De.Inst.adSdk.showBanner(), this.gifLoader.visible = !0;
            else {
                let t = Math.random();
                this.closeBtn.y = this.closeBtnPosY + 127 + 110 * t, console.log(`add random y: ${t}, posY: ${this.closeBtn.y}`), this.gifLoader.visible = !1, De.Inst.adSdk.hideBanner(), Laya.timer.once(1500, this, () => {
                    this.closeBtn.visible = !0;
                }), Laya.timer.once(2700, this, () => {
                    this.closeBtn.y = this.closeBtnPosY, De.Inst.adSdk.showBanner(), this.gifLoader.visible = !0;
                });
            }
        }
        SkinToShow() {
            this.contentPane.getChild("skinLoader").show();
        }
        SkinToHide() {
            this.contentPane.getChild("skinLoader").hide();
        }
    }
    L.add(new Oe());
    var Me = bt,
        Ve = D;
    class Fe extends L {
        constructor() {
            super(Me.Pack.MainPack, Me.Res.OffLineUI), this.isClickRewardBtn = !1;
        }
        static show() {
            super.show(Me.OffLineUI);
        }
        static hide() {
            super.hide(Me.OffLineUI);
        }
        onInit() {
            super.onInit(), this.adCheckBox = this.contentPane.getChild("CheckBox").asButton, this.adCheckBoxController = this.adCheckBox.getController("button"), this.adCheckBoxController.on(fgui.Events.STATE_CHANGED, this, this.onAdCheckBoxChanged), this.BtnGet = this.contentPane.getChild("BtnGetReward").asButton, this.BtnGet.onClick(this, this.BtnGetRewardFn), this.RewardTex = this.contentPane.getChild("RewardTex").asTextField, this.gifLoader = this.contentPane.getChild("GiftItem").asCom;
            this.gifLoader.displayObject.removeSelf();
        }
        initAdData() {
            Ve.Inst.adSdk.initGifItem(this.gifLoader, "pzdb");
        }
        onShown() {
            this.adCheckBoxController.selectedIndex = 1, this.adCheckBox.selected = !0, this.BtnGet.enabled = !0, this.isClickRewardBtn = !1;
            var t = Date.now(),
                e = R.playerData.OffLineInTime,
                i = 1 + R.playerData.offlineLevel / 10;
            if (Math.floor(t / 864e5) != Math.floor(e / 864e5)) this.GetCoins = 1440 * i;
            else {
                var s = t - e;
                Math.floor(s / 6e4), this.GetCoins = Math.floor(s / 6e4 * i);
            }
            this.refreshRewardTex();
        }
        onHide() {
            Ve.Inst.adSdk.hideBanner(), console.log("offline hide banner"), pe.show();
        }
        onAdCheckBoxChanged() {
            this.isClickRewardBtn = !1, this.refreshRewardTex();
        }
        GetReward(t = 1) {
            R.playerData.OffLineInTime = new Date().getTime(), R.playerData.Coins += Math.floor(this.GetCoins * t), this.BtnGet.enabled = !1, Y.sendEvent(xt.REFRESHCOINS), this.hide();
        }
        BtnGetRewardFn() {
            this.isClickRewardBtn ? console.log("already click reward button, return.") : (this.isClickRewardBtn = !0, this.adCheckBoxController.selectedIndex ? this.watchAd() : this.GetReward(1));
        }
        watchAd() {
            let t = this,
                e = function() {
                    console.log("watch ad succeed."), t.isClickRewardBtn = !0, t.GetReward(2);
                };
            Ve.Inst.adSdk.showRewardedVideoAd(e, function() {
                t.isClickRewardBtn = !1, console.log("watch ad failed.");
            })
        }
        refreshRewardTex() {
            let t = 0 == this.adCheckBoxController.selectedIndex ? this.GetCoins : 2 * this.GetCoins;
            this.RewardTex.text = this.GetCoinNumTex(t);
        }
        GetCoinNumTex(t) {
            return t > 1e3 ? `x${Math.floor(t/1e3)}k` : `x${t}`;
        }
    }
    L.add(new Fe());
    var He = bt,
        We = D;
    class Ye extends L {
        constructor() {
            super(He.Pack.MainPack, He.Res.HotGamesUI), this.randomLabel = [], this.openMainUIFlag = 1, this.isUp = !0;
        }
        static show() {
            super.show(He.HotGamesUI);
        }
        static hide() {
            super.hide(He.HotGamesUI);
        }
        onInit() {
            super.onInit(), this.closeBtn = this.contentPane.getChild("closeBtn").asButton, this.closeBtn.onClick(this, this.onClosedBtnClicked)
        }
        onShown() {}
        onHide() {
            0 == this.openMainUIFlag ? this.openMainUIFlag = 1 : R.playerData.isFirstLoadingFlag && Yt.checkOpenOfflineUI() ? Fe.show() : pe.show();
        }
        beginAnim() {
            Laya.timer.frameLoop(2, this, () => {
                this.bottomAdList.scrollPane.posX += A.AD_Play_Speed;
            });
        }
        beginAnim_adList() {
            Laya.timer.frameLoop(2, this, this.LoopAni);
        }
        LoopAni() {
            let t = this.adList.scrollPane;
            1 == this.isUp && t.percY <= 1 ? (t.percY += A.AD_Play_Speed_perc, t.percY >= 1 && (this.isUp = !1)) : (t.percY -= A.AD_Play_Speed_perc, t.percY <= 0 && (this.isUp = !0));
        }
        initAdData() {
            this.randomLabel = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2], this.randomLabel.sort(function(t, e) {
                return Math.random() - .5;
            }), console.log("random label arr：" + this.randomLabel), T.isRequestSucceed ? (We.Inst.adSdk.initAppExport2List(this.adList, "bkyx-12", this.randomLabel), We.Inst.adSdk.initAdList(this.bottomAdList, "dtlb-10", !0)) : T.requestAD(Laya.Handler.create(this, () => {
                this.loadingCom.visible = !T.isRequestSucceed, We.Inst.adSdk.initAppExport2List(this.adList, "bkyx-12", this.randomLabel), We.Inst.adSdk.initAdList(this.bottomAdList, "dtlb-10", !0);
            }));
        }
        onClosedBtnClicked() {
            this.hide();
        }
        onMouseUpEvent() {
            console.log("onMouseUpEvent"), this.beginAnim_adList();
        }
        onMouseDownEvent() {
            console.log("onMouseDownEvent"), Laya.timer.clear(this, this.LoopAni);
        }
    }
    L.add(new Ye());
    var Ke = L,
        je = bt,
        ze = D;
    class $e extends Ke {
        constructor() {
            super(je.Pack.MainPack, je.Res.MoreGamesUI), this.randomLabel = [], this.openHotUIFlag = 0, this.isUp = !0;
        }
        static show(t = "", e = 0) {
            super.show(je.MoreGamesUI, e);
        }
        static hide() {
            super.show(je.MoreGamesUI);
        }
        onInit() {
            super.onInit(), this.backBtn = this.contentPane.getChild("backBtn").asButton, this.backBtn.onClick(this, this.onClosed), this.continueBtn = this.contentPane.getChild("continueBtn").asButton, this.continueBtn.onClick(this, this.onClosed), this.topAdList = this.contentPane.getChild("topList").asList, this.bottomList = this.contentPane.getChild("bottomList").asList, Laya.timer.once(1500, this, this.beginAnim), this.bottomList.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), this.bottomList.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), this.bottomList.on(fairygui.Events.SCROLL_END, this, this.onMouseUpEvent), this.beginAnim_adList();
        }
        beginAnim() {
            Laya.timer.frameLoop(2, this, () => {
                this.topAdList.scrollPane.posX += A.AD_Play_Speed;
            });
        }
        beginAnim_adList() {
            Laya.timer.frameLoop(2, this, this.LoopAni);
        }
        LoopAni() {
            let t = this.bottomList.scrollPane;
            1 == this.isUp && t.percY <= 1 ? (t.percY += A.AD_Play_Speed_perc, t.percY >= 1 && (this.isUp = !1)) : (t.percY -= A.AD_Play_Speed_perc, t.percY <= 0 && (this.isUp = !0));
        }
        onShown() {
            null != this.data && (console.log("open moreGameui data: " + this.data), this.openHotUIFlag = this.data), ze.Inst.adSdk.hideBanner(), this.backBtn.visible = !1, this.continueBtn.visible = !1, Laya.timer.once(1e3, this, () => {
                this.backBtn.visible = !0;
            }), Laya.timer.once(3500, this, () => {
                this.continueBtn.visible = !0;
            });
        }
        onHide() {
            this.openHotUIFlag = 0, Y.sendEvent(xt.Skin_to_show);
        }
        initAdData() {
            this.randomLabel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2], this.randomLabel.sort(function(t, e) {
                return Math.random() - .5;
            }), console.log("random label arr：" + this.randomLabel), ze.Inst.adSdk.initAdList(this.topAdList, "dtlb-10", !0), ze.Inst.adSdk.initAppExport2List(this.bottomList, "rmtj-15", this.randomLabel);
        }
        onClosed() {
            1 == this.openHotUIFlag && Ye.show(), this.hide();
        }
        onMouseUpEvent() {
            this.beginAnim_adList();
        }
        onMouseDownEvent() {
            Laya.timer.clear(this, this.LoopAni);
        }
    }
    L.add(new $e());
    var qe = bt,
        Xe = D;
    class Je extends L {
        constructor() {
            super(qe.Pack.MainPack, qe.Res.GameTipsUI), this.clickCount = 0, this.isUp = !0;
        }
        static show() {
            super.show(qe.GameTipsUI);
        }
        static hide() {
            super.hide(qe.HotGamesUI);
        }
        onInit() {
            super.onInit(), this.startBtn = this.contentPane.getChild("startBtn").asButton, this.startBtn.onClick(this, this.onStartBtnClicked), this.adList = this.contentPane.getChild("adList").asList
        }
        initAdData() {}
        onStartBtnClicked() {
            this.clickCount > 0 || Math.random() > .5 ? this.hide() : this.clickCount++;
        }
        onShown() {
            this.clickCount = 0, Xe.Inst.adSdk.hideBanner(), this.beginAnim();
        }
        onHide() {
            Kt.startGame();
        }
        beginAnim() {
            Laya.timer.frameLoop(2, this, this.LoopAni);
        }
        LoopAni() {
            let t = this.adList.scrollPane;
            1 == this.isUp && t.percY <= 1 ? (t.percY += A.AD_Play_Speed_perc, t.percY >= 1 && (this.isUp = !1)) : (t.percY -= A.AD_Play_Speed_perc, t.percY <= 0 && (this.isUp = !0));
        }
        onMouseUpEvent() {
            this.beginAnim();
        }
        onMouseDownEvent() {
            Laya.timer.clear(this, this.LoopAni);
        }
    }
    class tool {
        static chickChild(an) {
            for (let i = 0; i < an._children.length; i++) {
                var child = an._children[i]
                console.log(child.name, child.x, child.y, child.visible);
            }
        }
    }
    L.add(new Je()), new class {
        constructor() {
            if (window["Laya3D"]) Laya3D.init(t.width, t.height);
            else Laya.init(t.width, t.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = t.scaleMode;
            Laya.stage.screenMode = t.screenMode;
            Laya.stage.alignV = t.alignV;
            Laya.stage.alignH = t.alignH;
            if (typeof loadRuntime !== 'undefined') {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            if (typeof getAdapterInfo !== "undefined") {
                var stage = Laya.stage;
                var info = getAdapterInfo({
                    width: t.width,
                    height: t.height,
                    scaleMode: t.scaleMode
                });
                stage.designWidth = info.w;
                stage.designHeight = info.h;
                stage.width = info.rw;
                stage.height = info.rh;
                stage.scale(info.scaleX, info.scaleY);
            }
            Laya.URL.exportSceneToJson = t.exportSceneToJson;
            (t.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel();
            t.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable();
            t.stat && Laya.Stat.show();
            window.yad = new Laya.Image();
            window.yad.centerX = 0;
            window.yad.bottom = 10;
            window.yad.zOrder = 1000;
            Laya.stage.addChild(yad);
            window.yad.skin = "res/yad.png";
            Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            G.Init(), D.Inst.init(), H.soundRoot = "res/sound", k.packRootUrl = _t.fguiRes, S.go(At.LoadingScene);
        }
    }();
}();