var touch;
(function(touch) {
    class GameModule extends Laya.EventDispatcher {
        constructor() {
            super();
            this._gameScene = null;
            this._indexView = null;
            this._loadingView = null;
            this._gameView = null;
            this._pkDialog = null;
            this._rankView = null;
            this._rewardTipView = null;
            this._settingDialog = null;
            this._tipDialog = null;
            this._skinDialog = null;
            this._awardDialog = null;
            this._moreGameDialog = null;
            this._worldRankDialog = null;
            this._newModeRankDialog = null;
            this._friendRankDialog = null;
            this._matchDialog = null;
            this.isFirst = true;
            this._gameScene = new touch.GameScene(this);
            this.showIndexView();
            this.on(touch.GameEvent.ENTER_GAME1, this, this.onEnterGame1);
            this.on(touch.GameEvent.ENTER_GAME2, this, this.onEnterGame2);
            this.on(touch.GameEvent.SHOW_LOADING, this, this.showLoadingView);
            this.on(touch.GameEvent.CLOSE_LOADING, this, this.hideLoadingView);
            this.on(touch.GameEvent.OPEN_PK, this, this.onOpenPk);
            this.on(touch.GameEvent.CLOSE_PK, this, this.onClosePk);
            this.on(touch.GameEvent.BACK, this, this.onBack);
            this.on(touch.GameEvent.GAME_OVER, this, this.onGameOver);
            this.on(touch.GameEvent.OPEN_RANK, this, this.onOpenRank);
            this.on(touch.GameEvent.CLOSE_RANK, this, this.onRankClose);
            this.on(touch.GameEvent.SHOW_REWARD, this, this.onShowReward);
            this.on(touch.GameEvent.HIDE_REWARD, this, this.onHideReward);
            this.on(touch.GameEvent.OPEN_SETTING, this, this.onSetting);
            this.on(touch.GameEvent.OPEN_TIP, this, this.onTip);
            this.on(touch.GameEvent.OPEN_SKIN, this, this.showSkin);
            this.on(touch.GameEvent.OPEN_GIFT, this, this.showGift);
            this.on(touch.GameEvent.OPEN_GAME, this, this.showGame);
            this.on(touch.GameEvent.CLOSE_SKIN, this, this.closeSkin);
            this.on(touch.GameEvent.OPEN_WORLD_RANK, this, this.onOpenWorldRank);
            this.on(touch.GameEvent.CLOSE_WORLD_RANK, this, this.onCloseWorldRank);
            this.on(touch.GameEvent.MATCH_OVER, this, this.closeMatchDialog);
            this.on(touch.GameEvent.START_AGAIN, this, this.onStartAgain);
            this.on(touch.GameEvent.OPEN_NewMode_RANK, this, this.onOpenNewModeRank);
            this.on(touch.GameEvent.CLOSE_NewMode_RANK, this, this.onCloseNewModeRank);
            this.on(touch.GameEvent.FIRST_START, this, this.firstGameStart);
            if (GameModule.wechatSDK != null) {
                GameModule.wechatSDK.postMessage({
                    message: "updateUserScore",
                    score: 0
                });
            }
            FBSdkMamager.GetInstance().SetMain(this);
        }
        destroy() {
            this.off(touch.GameEvent.ENTER_GAME1, this, this.onEnterGame1);
            this.off(touch.GameEvent.ENTER_GAME2, this, this.onEnterGame2);
            this.off(touch.GameEvent.SHOW_LOADING, this, this.showLoadingView);
            this.off(touch.GameEvent.CLOSE_LOADING, this, this.hideLoadingView);
            this.off(touch.GameEvent.OPEN_PK, this, this.onOpenPk);
            this.off(touch.GameEvent.CLOSE_PK, this, this.onClosePk);
            this.off(touch.GameEvent.BACK, this, this.onBack);
            this.off(touch.GameEvent.GAME_OVER, this, this.onGameOver);
            this.off(touch.GameEvent.OPEN_RANK, this, this.onOpenRank);
            this.off(touch.GameEvent.SHOW_REWARD, this, this.onShowReward);
            this.off(touch.GameEvent.HIDE_REWARD, this, this.onHideReward);
            this.off(touch.GameEvent.OPEN_SETTING, this, this.onSetting);
            this.off(touch.GameEvent.OPEN_TIP, this, this.onTip);
            this.off(touch.GameEvent.OPEN_SKIN, this, this.showSkin);
            this.off(touch.GameEvent.OPEN_GIFT, this, this.showGift);
            this.off(touch.GameEvent.OPEN_GAME, this, this.showGame);
            this.off(touch.GameEvent.CLOSE_SKIN, this, this.closeSkin);
            this.off(touch.GameEvent.MATCH_OVER, this, this.closeMatchDialog);
            this.off(touch.GameEvent.START_AGAIN, this, this.onStartAgain);
            this.off(touch.GameEvent.OPEN_NewMode_RANK, this, this.onOpenNewModeRank);
            this.off(touch.GameEvent.CLOSE_NewMode_RANK, this, this.onCloseNewModeRank);
            this.off(touch.GameEvent.FIRST_START, this, this.firstGameStart);
            this.hideIndexView();
            this.hideGameView();
            this.onHideReward();
            this.closeMatchDialog();
            if (this._settingDialog != null) {
                this._settingDialog.destroy();
                this._settingDialog = null;
            }
        }
        showIndexView() {
            if (null == this._indexView) {
                this._indexView = new touch.IndexView(this);
                Laya.stage.addChild(this._indexView);
            }
        }
        hideIndexView() {
            if (this._indexView != null) {
                this._indexView.removeSelf();
                this._indexView.destroy();
                this._indexView = null;
            }
        }
        showLoadingView() {
            if (null == this._loadingView) {
                this._loadingView = new touch.GameLoading(this);
                this._loadingView.PlayAnim();
                Laya.stage.addChild(this._loadingView);
                this._loadingView.zOrder = 10000;
            }
        }
        hideLoadingView() {
            if (this._loadingView != null) {
                this._loadingView.removeSelf();
                this._loadingView.destroy();
                this._loadingView = null;
            }
        }
        showGameView() {
            if (null == this._gameView) {
                this._gameView = new touch.GameView(this);
                Laya.stage.addChild(this._gameView);
                GameBaseData.isShowGameView = true;
            }
        }
        hideGameView() {
            if (this._gameView != null) {
                this._gameView.removeSelf();
                this._gameView.destroy();
                this._gameView = null;
                GameBaseData.isShowGameView = false;
            }
        }
        onEnterGame1() {
            if (GameBaseData.isDebug) {
                console.log("开始游戏1");
            }
            touch.TipDialog.gameTimes++;
            GameBaseData.FBEvent(4);
            touch.SoundManager.playMusic("res/sounds/bgm_low.mp3", true);
            touch.GameDefine.AI_COUNT = 4;
            this.hideIndexView();
            this.showMatchDialog();
            GameBaseData.FBEventNew(1);
        }
        onEnterGame2() {
            if (GameBaseData.isDebug) {
                console.log("开始游戏2");
            }
            touch.TipDialog.gameTimes++;
            GameBaseData.FBEvent(GameBaseData.modelType == 1 ? 30 : 40);
            touch.SoundManager.playMusic("res/sounds/bgm_low.mp3", true);
            this.hideIndexView();
            this.showGameView();
            touch.GameDefine.AI_COUNT = 0;
            GameBaseData.FBEventNew(1);
        }
        onOpenPk() {
            if (GameBaseData.isDebug) {
                console.log("打开PK");
            }
            if (null == this._pkDialog) {
                this._pkDialog = new touch.PkDialog(this);
            }
            this._pkDialog.popup();
        }
        onClosePk() {
            if (this._pkDialog != null) {
                this._pkDialog.close("", false);
                this._pkDialog.destroy();
                this._pkDialog = null;
            }
        }
        onBack() {
            this.hideGameView();
            this.showIndexView();
            if (GameBaseData.modelType > 1) {
                this.onOpenPk();
            }
        }
        onGameOver(score) {
            if (GameModule.wechatSDK != null) {
                GameModule.wechatSDK.postMessage({
                    message: "updateUserScore",
                    score: score
                });
            }
            if (0 == touch.GameData.instance.skinIndex) {
                touch.GameData.instance.randomSkinIndex();
                this.event(touch.GameEvent.CHANGE_SKIN);
            }
            if (score <= touch.GameData.instance.record) {
                return;
            }
            let userInfo = touch.GameData.instance.userInfo;
            if (Laya.Browser.onMiniGame && userInfo != null) {
                Laya.Browser.window.wx.request({
                    url: touch.WechatSDK.SERVER + "set-data",
                    data: {
                        id: GameModule.wechatSDK.openID,
                        name: userInfo.nickName,
                        score: score,
                        icon: userInfo.avatarUrl
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    fail: function(res) {
                        if (GameBaseData.isDebug) {
                            console.log("上传数据失败：" + JSON.stringify(res));
                        }
                    },
                    success: function(res) {
                        if (res.statusCode == 200) {
                            let data = res.data;
                            if (data.err) {
                                if (GameBaseData.isDebug) {
                                    console.log("上传数据失败：", data.err);
                                }
                            } else {
                                if (GameBaseData.isDebug) {
                                    console.log("上传数据成功");
                                }
                            }
                        }
                    }
                });
            }
        }
        onOpenRank() {
            if (null == this._friendRankDialog) {
                this._friendRankDialog = new touch.FriendRankDialog(this);
            }
            this._friendRankDialog.popup();
        }
        onRankClose() {
            if (this._friendRankDialog != null) {
                this._friendRankDialog.close("", false);
                this._friendRankDialog.destroy();
                this._friendRankDialog = null;
            }
            if (touch.AwardDialog.isFromAward) {
                touch.AwardDialog.isFromAward = false;
                this.showGift();
            }
        }
        onShowReward(icon, num, isDiamond, isDouble) {
            this.onHideReward();
            this._rewardTipView = new touch.RewardTipView(this);
            this._rewardTipView.imgIcon.skin = icon;
            this._rewardTipView.tfImage.visible = false;
            this._rewardTipView.tfNum.text = num.toString();
            if (isDiamond) {
                this._rewardTipView.tfImage.visible = true;
            }
            if (isDouble) {
                this._rewardTipView.showDoubleGet();
            }
            this._rewardTipView.zOrder = 1000;
            Laya.stage.addChild(this._rewardTipView);
        }
        onHideReward() {
            if (this._rewardTipView != null) {
                this._rewardTipView.removeSelf();
                this._rewardTipView.destroy();
                this._rewardTipView = null;
            }
        }
        onSetting() {
            if (null == this._settingDialog) {
                this._settingDialog = new touch.SettingDialog(this);
            }
            this._settingDialog.popup();
        }
        onTip(e) {
            if (null == this._tipDialog) {
                this._tipDialog = new touch.TipDialog(this);
            }
            this._tipDialog.onSetType(e);
            this._tipDialog.popup();
        }
        showSkin() {
            if (null == this._skinDialog) {
                this._skinDialog = new touch.SkinDialog(this, this._gameScene.ballSkinTexture);
            }
            this._skinDialog.popup(null, false);
        }
        showGift() {
            if (null == this._awardDialog) {
                this._awardDialog = new touch.AwardDialog(this);
            }
            this._awardDialog.updateOnlineReward();
            this._awardDialog.popup();
        }
        showGame() {
            if (null == this._moreGameDialog) {
                this._moreGameDialog = new touch.MoreGameDialog(this);
            }
            this._moreGameDialog.updateOnlineReward();
            this._moreGameDialog.popup();
        }
        closeSkin() {
            if (this._skinDialog != null) {
                this._skinDialog.close("", false);
                this._skinDialog.destroy();
                this._skinDialog = null;
            }
        }
        firstGameStart() {
            if (this.isFirst == true) {
                this.isFirst = false;
                this._indexView.visible = false;
                GameMiniSDK.GetInstance().hideGameCenterButton();
                this._indexView._onStartFB();
            }
        }
        onOpenWorldRank() {
            if (null == this._worldRankDialog) {
                this._worldRankDialog = new touch.WorldRankDialog(this);
            }
            this._worldRankDialog.popup();
        }
        onCloseWorldRank() {
            if (this._worldRankDialog != null) {
                this._worldRankDialog.close("", false);
                this._worldRankDialog.destroy();
                this._worldRankDialog = null;
            }
        }
        onOpenNewModeRank() {
            if (null == this._newModeRankDialog) {
                this._newModeRankDialog = new touch.NewModeRankDialog(this);
            }
            this._newModeRankDialog.popup();
        }
        onCloseNewModeRank() {
            if (this._newModeRankDialog != null) {
                this._newModeRankDialog.close("", false);
                this._newModeRankDialog.destroy();
                this._newModeRankDialog = null;
            }
        }
        showMatchDialog() {
            if (null == this._matchDialog) {
                this._matchDialog = new touch.MatchDialog(this);
            }
            this._matchDialog.popup();
        }
        closeMatchDialog() {
            this.showGameView();
            if (this._matchDialog != null) {
                this._matchDialog.close("", false);
                this._matchDialog.destroy();
                this._matchDialog = null;
            }
        }
        onStartAgain() {
            if (GameBaseData.isDebug) {
                console.log("再来一局");
            }
            touch.TipDialog.gameTimes++;
            touch.SoundManager.playMusic("res/sounds/bgm_low.mp3", true);
            this.hideGameView();
            if (GameBaseData.modelType > 1) {
                GameBaseData.FBEvent(42);
                this.showGameView();
                touch.GameDefine.AI_COUNT = 0;
            } else if (GameBaseData.modelType == 1) {
                GameBaseData.FBEvent(32);
                this.showGameView();
                touch.GameDefine.AI_COUNT = 0;
            } else {
                GameBaseData.FBEvent(23);
                this.showMatchDialog();
                touch.GameDefine.AI_COUNT = 4;
            }
        }
    }
    GameModule.wechatSDK = null;
    touch.GameModule = GameModule;
})(touch || (touch = {}));