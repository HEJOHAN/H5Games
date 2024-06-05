var touch;
(function(touch) {
    class IndexView extends ui.IndexViewUI {
        constructor(main) {
            super();
            this._main = null;
            this._userInfoButton = null;
            this._onlineRemainingTime = 0;
            this._minisdkBox = null;
            this._main = main;
            this.boxSignIn.visible = false;
            this.btnSwitch.visible = false;
            this.btnFriendRank.visible = false;
            this.btnRank.visible = false;
            this.btnSetting.visible = false;
            this.btnStart.clickHandler = Laya.Handler.create(this, this.onStart, null, false);
            this.btnLevel.clickHandler = Laya.Handler.create(this, this.onLevel, null, false);
            this.btnSkin.clickHandler = Laya.Handler.create(this, this.onSkin, null, false);
            this.btnRank.clickHandler = Laya.Handler.create(this, this.onWorldRank, null, false);
            this.btnFriendRank.clickHandler = Laya.Handler.create(this, this.onFriendRank, null, false);
            this.btnSetting.clickHandler = Laya.Handler.create(this, this.onSetting, null, false);
            this.btnCloseSignIn.clickHandler = Laya.Handler.create(this, this.onCloseSignIn, null, false);
            this.btnShare.clickHandler = Laya.Handler.create(this, this.onShare, null, false);
            this.btn_tg.clickHandler = Laya.Handler.create(this, this.onTg, null, false);
            this.btnSwitch.clickHandler = Laya.Handler.create(this, this.onSwitch, null, false);
            this.listSignIn.selectEnable = true;
            this.listSignIn.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.listSignIn.selectHandler = Laya.Handler.create(this, this.onSelectItem, null, false);
            this.listSignIn.array = new Array(touch.GameConfig.SIGNIN_CONFIG.length);
            let dailyVaild = touch.GameData.instance.dailyVaild;
            let curIndex = touch.GameData.instance.dailyCount;
            curIndex = dailyVaild ? curIndex : curIndex - 1;
            this.showUserInfoButton();
            this.updateOnlineReward();
            if (touch.GameData.instance.record2 > 0) {
                this.onTweenSwitchBtn0();
            }
            Laya.timer.loop(100, this, this.time2Loop);
            var pos = this.btnStart.localToGlobal(new laya.maths.Point(this.btnStart.x, this.btnStart.y));
            GameMiniSDK.GetInstance().addMiniSDK_Btn("home_center", pos.x - 140, pos.y + 40);
        }
        destroy() {
            GameMiniSDK.GetInstance().hideGameCenterButton();
            if (this.btnStart.clickHandler != null) {
                this.btnStart.clickHandler.recover();
                this.btnStart.clickHandler = null;
            }
            if (this.btnLevel.clickHandler != null) {
                this.btnLevel.clickHandler.recover();
                this.btnLevel.clickHandler = null;
            }
            if (this.btnSkin.clickHandler != null) {
                this.btnSkin.clickHandler.recover();
                this.btnSkin.clickHandler = null;
            }
            if (this.btnRank.clickHandler != null) {
                this.btnRank.clickHandler.recover();
                this.btnRank.clickHandler = null;
            }
            if (this.btnFriendRank.clickHandler != null) {
                this.btnFriendRank.clickHandler.recover();
                this.btnFriendRank.clickHandler = null;
            }
            if (this.listSignIn.renderHandler != null) {
                this.listSignIn.renderHandler.recover();
                this.listSignIn.renderHandler = null;
            }
            if (this.listSignIn.selectHandler != null) {
                this.listSignIn.selectHandler.recover();
                this.listSignIn.selectHandler = null;
            }
            if (this.btnShare.clickHandler != null) {
                this.btnShare.clickHandler.recover();
                this.btnShare.clickHandler = null;
            }
            if (this._userInfoButton != null) {
                this._userInfoButton.hide();
                this._userInfoButton.destroy();
                this._userInfoButton = null;
            }
            Laya.timer.clear(this, this.timeLoop);
            Laya.timer.clear(this, this.time2Loop);
            this._main = null;
            super.destroy();
        }
        onStart() {
            let that = this;
            if (touch.TipDialog.gameTimes >= 3 && GameBaseData.isFBSDK && GameBaseData.modelType < 2) {
                if (touch.TipDialog.gameTimesCancel % 5 == 0) {
                    GameBaseData.FBShareFriend_startGame(() => {
                        that._onStartFB();
                        GameBaseData.FBEvent(36);
                    }, () => {
                        that._onStartFB();
                        GameBaseData.FBEvent(37);
                        touch.TipDialog.gameTimesCancel++;
                    });
                } else {
                    touch.TipDialog.gameTimesCancel++;
                    that._onStartFB();
                }
            } else {
                that._onStartFB();
            }
        }
        _onStartFB() {
            GameBaseData.modelType = 1;
            this.boxSignIn.visible = false;
            this._main.event(touch.GameEvent.ENTER_GAME2);
            GameBaseData.initGameLv();
            GameBaseData.getFriendList_model1(0, null, null);
        }
        onLevel() {
            let that = this;
            if (touch.TipDialog.gameTimes >= 3 && GameBaseData.isFBSDK && GameBaseData.modelType < 2) {
                if (touch.TipDialog.gameTimesCancel % 5 == 0) {
                    GameBaseData.FBShareFriend_startGame(() => {
                        that._onLevelFB();
                        GameBaseData.FBEvent(36);
                    }, () => {
                        touch.TipDialog.gameTimesCancel++;
                        that._onLevelFB();
                        GameBaseData.FBEvent(37);
                    });
                } else {
                    touch.TipDialog.gameTimesCancel++;
                    that._onLevelFB();
                }
            } else {
                that._onLevelFB();
            }
        }
        _onLevelFB() {
            GameBaseData.modelType = 0;
            this.boxSignIn.visible = false;
            this._main.event(touch.GameEvent.ENTER_GAME1);
            GameBaseData.initGameLv();
            GameBaseData.getFriendList(0, null, null);
        }
        onSkin() {
            this.boxSignIn.visible = false;
            this._main.event(touch.GameEvent.OPEN_SKIN);
        }
        onWorldRank() {
            this.boxSignIn.visible = false;
            this._main.event(touch.GameEvent.OPEN_WORLD_RANK);
        }
        onFriendRank() {
            this.boxSignIn.visible = false;
            this._main.event(touch.GameEvent.OPEN_RANK);
        }
        onOpenSignIn() {
            this.boxSignIn.visible = true;
        }
        onSetting() {
            this._main.event(touch.GameEvent.OPEN_SETTING);
        }
        onCloseSignIn() {
            this.boxSignIn.visible = false;
        }
        onTg() {
            this._main.event(touch.GameEvent.OPEN_GAME);
        }
        onShare() {
            this._main.event(touch.GameEvent.OPEN_GIFT);
        }
        updateOnlineReward() {
            this.myLock.visible = false;
            this.myLock1.visible = false;
            if (touch.GameData.instance.record < 1) {
                this.myLock.visible = false;
            }
            if (touch.GameData.instance.record2 < 1) {
                this.myLock1.visible = true;
            }
            this.imgAward.visible = false;
            let curIndex = touch.GameData.instance.onlineIndex;
            for (let index = 0; index < touch.GameConfig.ONLINE_GIFT.length; index++) {
                let onlineGift = touch.GameConfig.ONLINE_GIFT[index];
                if (onlineGift.index <= curIndex) {
                    continue;
                }
                if (onlineGift.time <= touch.GameData.instance.onlineTime) {
                    this.imgAward.visible = true;
                } else {}
                break;
            }
            if (touch.GameData.instance.dailyVaild) {
                this.imgAward.visible = true;
            }
            this.imgTg.visible = false;
            this.btn_tg.visible = false;
            if (touch.GameData.instance.isGame1On || touch.GameData.instance.isGame2On || touch.GameData.instance.isGame3On || touch.GameData.instance.isGame4On || touch.GameData.instance.isGame5On || touch.GameData.instance.isGame6On) {}
            if (!GameBaseData.isIOS) {}
        }
        onTweenShareBtn0() {
            Laya.Tween.clearTween(this.onTweenShareBtn0);
            this.btnShare.scaleX = 1;
            this.btnShare.scaleY = 1;
            Laya.Tween.to(this.btnShare, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1), 0, true, true);
        }
        onTweenShareBtn1() {
            Laya.Tween.clearTween(this.onTweenShareBtn1);
            this.btnShare.scaleX = 0.8;
            this.btnShare.scaleY = 0.8;
            Laya.Tween.to(this.btnShare, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn0), 0, true, true);
        }
        onSwitch() {
            if (touch.GameData.instance.record2 < 1) {
                touch.Notice.show("Unlock after finish single mode");
                return;
            }
            if (GameBaseData.isFBSDK) {
                FBInstant.logEvent("PK");
            }
            this._main.event(touch.GameEvent.OPEN_PK);
        }
        onTweenSwitchBtn0() {
            Laya.Tween.clearTween(this.onTweenSwitchBtn0);
            this.btnSwitch.scaleX = 1;
            this.btnSwitch.scaleY = 1;
            Laya.Tween.to(this.btnSwitch, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenSwitchBtn1), 0, true, true);
        }
        onTweenSwitchBtn1() {
            Laya.Tween.clearTween(this.onTweenSwitchBtn1);
            this.btnSwitch.scaleX = 0.8;
            this.btnSwitch.scaleY = 0.8;
            Laya.Tween.to(this.btnSwitch, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenSwitchBtn0), 0, true, true);
        }
        timeLoop() {
            this._onlineRemainingTime--;
            this.tfNextRewardTime.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
            if (this._onlineRemainingTime <= 0) {
                Laya.timer.clear(this, this.timeLoop);
                this.updateOnlineReward();
            }
        }
        time2Loop() {
            this.imgSkinFlag.visible = (touch.GameData.instance.getNewFlag(-1) > 0);
            this.updateOnlineReward();
            if (touch.TipDialog.canCreateShortcut && touch.TipDialog.homeScreenState == 0) {
                this._main.event(touch.GameEvent.OPEN_TIP, 3);
            }
        }
        onRenderItem(cell, index) {
            if (null == cell || index >= touch.GameConfig.SIGNIN_CONFIG.length) {
                return;
            }
            let dailyCount = touch.GameData.instance.dailyCount;
            let dailyVaild = touch.GameData.instance.dailyVaild;
            let isFirst = (0 == touch.GameData.instance.weekCount);
            let curIndex = dailyVaild ? dailyCount : dailyCount - 1;
            let config = isFirst ? touch.GameConfig.FISRT_SIGNIN_CONFIG : touch.GameConfig.SIGNIN_CONFIG;
            cell.imgGot.visible = (index < curIndex) || ((curIndex == index) && !dailyVaild);
            cell.imgLock.visible = (index > curIndex);
            cell.imgDiamond.visible = (0 == config[index].type);
            cell.imgBall.visible = (config[index].type != 0);
            cell.imgMask.visible = curIndex != index || !dailyVaild;
            if (0 == config[index].type) {
                cell.tfReward.text = config[index].num.toString();
            } else {
                cell.tfReward.text = "Super Ball×1";
            }
            cell.tfDay.text = "Day " + (index + 1) + "";
            cell.mouseEnabled = ((curIndex == index) && dailyVaild);
            if (!cell.imgMask.visible) {
                this._cell = cell;
                this.onTweenCellBtn0();
            }
        }
        onTweenCellBtn0() {
            Laya.Tween.clearTween(this.onTweenCellBtn0);
            Laya.Tween.to(this._cell, {
                y: this._cell.y + 5
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, (this.onTweenCellBtn1)), 0, true, true);
        }
        onTweenCellBtn1() {
            Laya.Tween.clearTween(this.onTweenCellBtn1);
            Laya.Tween.to(this._cell, {
                y: this._cell.y - 5
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenCellBtn0), 0, true, true);
        }
        onSelectItem(index) {
            if (index >= touch.GameConfig.SIGNIN_CONFIG.length) {
                return;
            }
            let isFirst = (0 == touch.GameData.instance.weekCount);
            let config = isFirst ? touch.GameConfig.FISRT_SIGNIN_CONFIG : touch.GameConfig.SIGNIN_CONFIG;
            let dailyConfig = config[index];
            if (0 == dailyConfig.type) {
                touch.GameData.instance.setAddDiamond(dailyConfig.num);
                this._main.event(touch.GameEvent.SHOW_REWARD, ["index/big_diamond.png", dailyConfig.num, true, true]);
            } else {
                let unlockIndexs = new Array();
                for (var index = 0; index < touch.GameConfig.SKIN_VIDEO.length; index++) {
                    if (-1 == touch.GameData.instance.getUnlockSkins().indexOf(index)) {
                        unlockIndexs.push(index);
                    }
                }
                if (unlockIndexs.length > 0) {
                    let unlockIndex = unlockIndexs[touch.MathUtil.randomInt(0, unlockIndexs.length - 1)];
                    touch.GameData.instance.unlockSkin(unlockIndex);
                    this._main.event(touch.GameEvent.SHOW_REWARD, ["index/skin" + unlockIndex + ".png", dailyConfig.num, false, false]);
                }
            }
            touch.GameData.instance.addVideoNum(20, 0, 1);
            touch.GameData.instance.dailyVaild = false;
            this.listSignIn.refresh();
            GameBaseData.FBEvent(22);
            this.onCloseSignIn();
            if (touch.GameData.instance.homeScreen == 1 && touch.TipDialog.canCreateShortcut) {
                touch.GameData.instance.homeScreen = 0;
            }
        }
        showUserInfoButton() {
            if (Laya.Browser.onMiniGame) {
                let self = this;
                Laya.Browser.window.wx.getUserInfo({
                    lang: "zh_CN",
                    success: (res) => {
                        if (GameBaseData.isDebug) {
                            console.log("获取用户信息成功");
                        }
                        touch.GameData.instance.userInfo = res.userInfo;
                    },
                    fail: (res) => {
                        if (GameBaseData.isDebug) {
                            console.log("获取用户信息失败");
                        }
                        self.btnStart.mouseEnabled = false;
                        let systemInfo = Laya.Browser.window.wx.getSystemInfoSync();
                        let imageWidth = 450 * systemInfo.windowWidth / touch.Config.SCREEN_WIDTH;
                        let imageHeight = 110 * systemInfo.windowHeight / touch.Config.SCREEN_HEIGHT;
                        let left = (systemInfo.windowWidth - imageWidth) / 2;
                        let top = (systemInfo.windowHeight - imageHeight) / 2;
                        self._userInfoButton = Laya.Browser.window.wx.createUserInfoButton({
                            lang: "zh_CN",
                            type: "text",
                            text: "",
                            style: {
                                left: left,
                                top: top,
                                width: imageWidth,
                                height: imageHeight,
                            }
                        });
                        self._userInfoButton.show();
                        self._userInfoButton.onTap((res) => {
                            if (GameBaseData.isDebug) {
                                console.log("获取用户信息成功");
                            }
                            touch.GameData.instance.userInfo = res.userInfo;
                            if (this._userInfoButton != null) {
                                this._userInfoButton.hide();
                                this._userInfoButton.destroy();
                                this._userInfoButton = null;
                            }
                            self.onStart();
                        });
                    }
                });
            }
        }
    }
    touch.IndexView = IndexView;
})(touch || (touch = {}));