! function() {
    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
            this.initData();
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }
        initData() {
            let canvas = document.getElementById("layaCanvas");
            if (canvas) {
                canvas.addEventListener("mouseup", this.onNavigate_.bind(this));
                canvas.addEventListener("touchend", this.onNavigate_.bind(this));
            }
        }
        onNavigate_() {
            return;
            if (this.canNavigateActive_) {}
            this.canNavigateActive_ = false;
        }
        getStorageSync(key) {
            let value = null;
            try {
                let v = Laya.LocalStorage.getItem(key);
                value = JSON.parse(v);
            } catch (error) {}
            return value
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }
        navigate(screen_, action_, to_) {
            if (this.canNavigateActive_ === false) {
                this.screen_ = screen_;
                this.action_ = action_;
                this.to_ = to_;
                this.canNavigateActive_ = true;
            }
        }
        onblur() {
            if (document && document.getElementsByTagName) {
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = true;
                }
            }
        }
        onfocus() {
            if (document && document.getElementsByTagName) {
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = false;
                }
            }
        }
        showInterstitial(complete) {
            complete && complete();
        }
        showReward(success, failure) {
            HUHU_showRewardedVideoAd(() => {
                success && success();
                success = null;
            }, () => {
                if (failure) {
                    failure();
                    failure = null;
                }
                this.prompt("No ads temporarily");
            });
        }
        initList(appList) {
            appList.visible = false;
            return;
            appList.renderHandler = new Laya.Handler(appList, function(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                });
            })
            appList.array = platform.getInstance().getForgames();
        }
        prompt(msg, duration) {
            if (!this.prompt_) {
                const sprite = new Laya.Sprite();
                const width = Laya.stage.width - 40;
                const height = 30;
                sprite.width = width;
                sprite.height = height;
                sprite.pivotX = width / 2;
                sprite.pivotY = height / 2;
                sprite.x = Laya.stage.width / 2;
                sprite.y = Laya.stage.height / 3;
                var path = [
                    ["moveTo", 0, 0],
                    ["lineTo", width, 0],
                    ["lineTo", width, 35],
                    ["lineTo", 0, 35]
                ];
                sprite.graphics.drawPath(0, 0, path, {
                    fillStyle: "#424444"
                }, {
                    "strokeStyle": "#fdffff",
                    "lineWidth": "1"
                });
                const label = sprite.addChild(new Laya.Label());
                label.anchorX = label.anchorY = 0.5;
                label.width = sprite.width, label.height = sprite.height;
                label.x = sprite.width / 2;
                label.y = label.height / 2 + 5;
                label.fontSize = 22, label.align = "center", label.color = "#ffffff", label.wordWrap = true;
                sprite.zOrder = 2e3, Laya.stage.addChild(sprite);
                const timeLine = new Laya.TimeLine();
                timeLine.addLabel("scale", 0).to(sprite, {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 1
                }, 100, null, 0).addLabel("back", 0).to(sprite, {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 100, null, 0).addLabel("show", 0).to(sprite, {
                    alpha: 1
                }, 1e3, null, 0).addLabel("hide", 0).to(sprite, {
                    alpha: 0
                }, 1e3, null, 0), timeLine.on(Laya.Event.COMPLETE, this, () => {
                    sprite.alpha = 0;
                    sprite.visible = false;
                });
                sprite.alpha = 0;
                sprite.visible = false;
                this.prompt_ = function(msg) {
                    label.text = msg;
                    sprite.visible = true;
                    timeLine.play(0, false);
                };
            }
            this.prompt_(msg);
        }
        getForgames() {
            let sforgames = []
            let forgames = sforgames.slice();
            for (let i = 0, length = forgames.length; i < length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                const item = forgames[random];
                forgames[random] = forgames[i];
                forgames[i] = item;
            }
            return forgames;
        }
        startup(name, gamedistribution = "", complete) {
            if (this.initialized_)
                return;
            complete && complete();
            complete = null;
            this.initialized_ = true;
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()