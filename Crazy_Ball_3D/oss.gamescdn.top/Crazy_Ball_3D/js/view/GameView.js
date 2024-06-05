var touch;
(function(touch) {
    class GameView extends ui.GameViewUI {
        constructor(main) {
            super();
            this._main = null;
            this._deadNum = 0;
            this._reviveCountdown = 0;
            this._revivingCountdown = 0;
            this._rankTexture = null;
            this._onlineRemainingTime = 0;
            this._score = 0;
            this._pkscore = 0;
            this._BeyondFriendMaxIndex = 0;
            this._beyondList = [];
            this._isPlayBeyondF = false;
            this._count = 0;
            this.nearFriends = [];
            this._datas = null;
            this._curShowIndex = 0;
            this.bannerHeight = 0;
            this.fbEventType = 0;
            this.isVictory = false;
            this.videoType = -1;
            this.tgID = 0;
            this.tempBeyondList = [];
            this.tempBeyondWorldCount = 0;
            this.tempReadyBeyondRank = null;
            this.tempISReadyBeyondRank = true;
            this.tempBeyondScore = this.getBeyondTagerScore();
            this._main = main;
            this.initView();
        }
        initView() {
            this.onScoreChange(0);
            this.onInitLife();
            this._main.event(touch.GameEvent.RESET);
            this.tfScore.visible = false;
            this.boxRevive.visible = false;
            this.boxReviving.visible = false;
            this.boxFinalScore.visible = false;
            this.OS_Menu.visible = false;
            this.boxLife.visible = false;
            this.boxModel2.visible = false;
            this.BeyondFriend.visible = false;
            this.BeyondFriend.alpha = 0;
            this.boxGuide.visible = true;
            this.aniGuide.play(0, true);
            this.listRank.vScrollBarSkin = "";
            this.listRank.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.listRank.array = new Array(0);
            this._datas = new Array();
            this.listRank.scrollTo(0);
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.btnWatchVideo.clickHandler = Laya.Handler.create(this, this.onWathVideo, null, false);
            this.btnShareRevive.clickHandler = Laya.Handler.create(this, this.onShareRevive, null, false);
            this.btnShareContinue.clickHandler = Laya.Handler.create(this, this.onShareContinue, null, false);
            this.btnShare.clickHandler = Laya.Handler.create(this, this.onShare, null, false);
            this.btnTg.clickHandler = Laya.Handler.create(this, this.onTg, null, false);
            this.btn_tg.clickHandler = Laya.Handler.create(this, this.onOpenTg, null, false);
            this.btnoverShare.clickHandler = Laya.Handler.create(this, this.onShareGameover, null, false);
            this.OS_Menu_Close.clickHandler = Laya.Handler.create(this, this.closeGameOverShare, null, false);
            this.OS_Menu_Share.clickHandler = Laya.Handler.create(this, this.onGameOverShare, null, false);
            this.btnBack.clickHandler = Laya.Handler.create(this, this.onBack, null, false);
            this.btnRestart.on(Laya.Event.CLICK, this, this.onRestart);
            this.btnOnlineReward.clickHandler = Laya.Handler.create(this, this.onOnlineReward, null, false);
            this.spriteOpenRank.on(Laya.Event.CLICK, this, this.onOpenRank);
            this._main.on(touch.GameEvent.LIFE_CHANGE, this, this.onLifeChange);
            this._main.on(touch.GameEvent.SCROE_CHANGE, this, this.onScoreChange);
            this._main.on(touch.GameEvent.DEAD, this, this.onDead);
            this._main.on(touch.GameEvent.CLOSE_RANK, this, this.onCloseRank);
            Laya.stage.once(Laya.Event.MOUSE_DOWN, this, this.onStart);
            this._BeyondFriendMaxIndex = 0;
            this._isPlayBeyondF = false;
            this._count = 0;
            this.fbEventType = 0;
            this.friendBox.visible = false;
            this._initGameOverRankEvent();
            this.gotogamebtn.clickHandler = Laya.Handler.create(this, this.gotoGame, null, false);
            this.playFriendBtn.visible = false;
            this.playFriendBtn.clickHandler = Laya.Handler.create(this, this.playFriendFun, null, false);
            this.btn_tg.visible = false;
            this.gotogamebtn.visible = false;
            this.bannerHeight = GameMiniSDK.GetInstance().getBannerBackgroundHeight();
            GameMiniSDK.GetInstance().hideBottomBanner();
            this.btnRestart.y = Laya.stage.height - this.bannerHeight - 90;
            this.gotogamebtn.y = Laya.stage.height - this.bannerHeight - 150;
            this.playFriendBtn.y = Laya.stage.height - this.bannerHeight - 150;
        }
        resetView() {
            GameMiniSDK.GetInstance().hideBottomBanner();
            GameMiniSDK.GetInstance().hideGameCenterButton();
            this.destroyRankView();
            Laya.timer.clear(this, this.updateRankView);
            Laya.timer.clear(this, this.onReviveCountDown);
            Laya.timer.clear(this, this.onRevivingCountDown);
            this._main.off(touch.GameEvent.DEAD, this, this.onDead);
            this._main.off(touch.GameEvent.SCROE_CHANGE, this, this.onScoreChange);
            this._main.off(touch.GameEvent.LIFE_CHANGE, this, this.onLifeChange);
            this._main.off(touch.GameEvent.CLOSE_RANK, this, this.onCloseRank);
            this.spriteOpenRank.off(Laya.Event.CLICK, this, this.onOpenRank);
            this.btnRestart.off(Laya.Event.CLICK, this, this.onRestart);
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            if (this.btnWatchVideo.clickHandler != null) {
                this.btnWatchVideo.clickHandler.recover();
                this.btnWatchVideo.clickHandler = null;
            }
            if (this.btnBack.clickHandler != null) {
                this.btnBack.clickHandler.recover();
                this.btnBack.clickHandler = null;
            }
            if (this.btnOnlineReward.clickHandler != null) {
                this.btnOnlineReward.clickHandler.recover();
                this.btnOnlineReward.clickHandler = null;
            }
            if (this.btnShare.clickHandler != null) {
                this.btnShare.clickHandler.recover();
                this.btnShare.clickHandler = null;
            }
            if (this.btnTg.clickHandler != null) {
                this.btnTg.clickHandler.recover();
                this.btnTg.clickHandler = null;
            }
            if (this.gotogamebtn.clickHandler != null) {
                this.gotogamebtn.clickHandler.recover();
                this.gotogamebtn.clickHandler = null;
            }
            if (this.playFriendBtn.clickHandler != null) {
                this.playFriendBtn.clickHandler.recover();
                this.playFriendBtn.clickHandler = null;
            }
            if (this.listRank.renderHandler != null) {
                this.listRank.renderHandler.recover();
                this.listRank.renderHandler = null;
            }
            this._datas.splice(0, this._datas.length);
            this._datas = null;
        }
        destroy() {
            this.resetView();
            this._main = null;
            super.destroy();
        }
        getRankDataAndRefreshView(fbRankType, maxScore) {
            var that = this;
            var isReplay = 0;
            if (GameBaseData.isFBSDK) {
                if (GameBaseData.modelType == 0) {
                    if (this._score > maxScore) {
                        isReplay = 1;
                    }
                    console.log("最高分------ mul" + maxScore + "当前分----------" + this._score + "是否拉取分数----------" + isReplay);
                    FBSdkMamager.GetInstance().fbMulRankData.async_getRankData(fbRankType, function(useRank) {
                        console.log("进入排行榜回调--------");
                        console.log(useRank);
                        that.updateUI(useRank);
                    }, isReplay);
                } else {
                    if (this._score > maxScore) {
                        isReplay = 1;
                    }
                    console.log("最高分------ single" + maxScore + "当前分----------" + this._score + "是否拉取分数----------" + isReplay);
                    FBSdkMamager.GetInstance().fbRankData.async_getRankData(fbRankType, function(useRank) {
                        console.log("进入排行榜回调--------");
                        console.log(useRank);
                        that.updateUI(useRank);
                    }, isReplay);
                }
            }
        }
        updateUI(useRank) {
            if (GameBaseData.isDebug) {
                console.log(useRank);
            }
            this._datas = [];
            for (let i = 0; i < useRank.length; i++) {
                let worldRankData = new touch.WorldRankItemData();
                worldRankData.rank = useRank[i].rank;
                worldRankData.id = useRank[i].uuid;
                worldRankData.score = useRank[i].score + "m";
                worldRankData.name = useRank[i].name;
                worldRankData.icon = useRank[i].pic;
                this._datas.push(worldRankData);
            }
            this.listRank.array = new Array(this._datas.length);
            this.listRank.scrollTo(0);
        }
        onRenderItem(cell, index) {
            if (null == cell || null == this._datas) {
                return;
            }
            let data = this._datas[index];
            cell.imgHead.skin = data.icon;
            data.name = GameBaseData.mygame_getShortName(data.name, 12);
            cell.tfName.text = data.name;
            cell.tfRank.text = "" + (data.rank);
            if (data.id == GameBaseData.UID) {
                cell.play.visible = false;
                if (GameBaseData.modelType == 0) {
                    if (parseInt(data.score) > touch.GameData.instance.mulrecord) {
                        touch.GameData.instance.mulrecord = parseInt(data.score);
                    }
                }
                if (GameBaseData.modelType == 1) {
                    if (parseInt(data.score) > touch.GameData.instance.singlerecord) {
                        touch.GameData.instance.singlerecord = parseInt(data.score);
                    }
                }
            }
            cell.tfScore.text = data.score.toString();
            cell.play.clickHandler = Laya.Handler.create(this, this.clickRenderItem, [data], false);
        }
        clickRenderItem(data) {
            console.log("分享-------邀请好友");
            GameBaseData.PKFriend(data.id, () => {
                this.joinGamePK();
            });
        }
        gotoGame() {
            if (GameBaseData.isFBSDK) {
                console.log("跳转到pop");
                FBInstant.switchGameAsync("1394792680649041");
            }
        }
        playFriendFun() {
            console.log("和玩家一起玩");
            GameBaseData.FBShareFriend_startGame(function() {}, function() {});
        }
        _initGameOverRankEvent() {}
        onTween0_0() {
            Laya.Tween.clearTween(this.onTween0_0);
            this.pkFriend0.scaleX = 1;
            this.pkFriend0.scaleY = 1;
            Laya.Tween.to(this.pkFriend0, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween0_1));
        }
        onTween0_1() {
            Laya.Tween.clearTween(this.onTween0_1);
            this.pkFriend0.scaleX = 0.8;
            this.pkFriend0.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend0, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween0_0));
        }
        onTween1_0() {
            Laya.Tween.clearTween(this.onTween1_0);
            this.pkFriend1.scaleX = 1;
            this.pkFriend1.scaleY = 1;
            Laya.Tween.to(this.pkFriend1, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween1_1));
        }
        onTween1_1() {
            Laya.Tween.clearTween(this.onTween1_1);
            this.pkFriend1.scaleX = 0.8;
            this.pkFriend1.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend1, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween1_0));
        }
        onTween2_0() {
            Laya.Tween.clearTween(this.onTween2_0);
            this.pkFriend2.scaleX = 1;
            this.pkFriend2.scaleY = 1;
            Laya.Tween.to(this.pkFriend2, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween2_1));
        }
        onTween2_1() {
            Laya.Tween.clearTween(this.onTween2_1);
            this.pkFriend2.scaleX = 0.8;
            this.pkFriend2.scaleY = 0.8;
            Laya.Tween.to(this.pkFriend2, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTween2_0));
        }
        onTweenShareBtn0() {
            Laya.Tween.clearTween(this.onTweenShareBtn0);
            this.OS_Menu_Share.scaleX = 1;
            this.OS_Menu_Share.scaleY = 1;
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1));
        }
        onTweenShareBtn1() {
            Laya.Tween.clearTween(this.onTweenShareBtn1);
            this.OS_Menu_Share.scaleX = 0.8;
            this.OS_Menu_Share.scaleY = 0.8;
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn0));
        }
        onStart() {
            GameBaseData.initGameLv();
            this.initBeyondFriend();
            this.tfScore.visible = true;
            this.boxGuide.visible = false;
            this.boxLife.visible = GameBaseData.modelType == 1;
            this.boxModel2.visible = GameBaseData.modelType > 1;
            this.fStar0.visible = false;
            this.fStar1.visible = false;
            this.fStar2.visible = false;
            this.aniGuide.stop();
            this._main.event(touch.GameEvent.START);
            GameBaseData.FBEventNew(2);
        }
        setPKScore(score, speed) {
            if (GameBaseData.gameLv == 0) {
                if (speed > 35) {
                    this._pkscore += (score - this._score) * 10;
                } else if (speed > 30) {
                    this._pkscore += (score - this._score) * 7;
                } else if (speed > 25) {
                    this._pkscore += (score - this._score) * 8;
                } else {
                    this._pkscore += (score - this._score) * 3;
                }
            } else {
                if (speed > 39) {
                    this._pkscore += (score - this._score) * 10;
                } else if (speed > 33) {
                    this._pkscore += (score - this._score) * 7;
                } else if (speed > 25) {
                    this._pkscore += (score - this._score) * 8;
                } else {
                    this._pkscore += (score - this._score) * 3;
                }
            }
        }
        onScoreChange(score) {
            if (GameBaseData.modelType > 1) {
                this.setPKScore(score, GameBaseData.modelSpeed);
                this._score = score;
                this.tfScore.text = "Still " + (GameBaseData.modelGoal - score) + "m";
                this.modelPro.value = this._pkscore / GameBaseData.modelScore;
                this.modelPre.text = Math.floor(this._pkscore * 100 / GameBaseData.modelScore) + "%";
                if (score > 10 && this.fbEventType == 0) {
                    this.fbEventType = 1;
                    GameBaseData.FBEventNew(3);
                }
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.fStar2.visible = true;
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2) {
                    this.fStar1.visible = true;
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1) {
                    this.fStar0.visible = true;
                }
            } else {
                this._score = score;
                if (GameBaseData.modelType == 0) {
                    this.tfScore.text = "Surpass " + score + " players";
                    if (score > 1 && this.fbEventType == 0) {
                        this.fbEventType = 1;
                        GameBaseData.FBEventNew(3);
                    }
                    if (this._score > 0) {
                        touch.GameData.instance.addVideoNum(1, this._score, 0);
                    }
                } else {
                    this.tfScore.text = score + "m";
                    if (score > 10 && this.fbEventType == 0) {
                        this.fbEventType = 1;
                        GameBaseData.FBEventNew(3);
                    }
                    if (this._score > 0) {
                        touch.GameData.instance.addVideoNum(9, this._score, 0);
                    }
                }
                this.updataBeyondFriend2();
                this.showUnlockSkin();
            }
        }
        onLifeChange(lifeNum, lifeFlag) {
            this.pbProgress.value = lifeNum / 100;
            if (lifeFlag == 1) {
                this.onChangeLife(true);
            } else if (lifeFlag == 2) {
                this.onChangeLife(false);
            }
        }
        onInitLife() {
            if (GameBaseData.modelType == 1) {
                this.pbProgress.visible = true;
            } else {
                this.pbProgress.visible = false;
            }
            this.l1.visible = false;
            this.l2.visible = false;
            this.l3.visible = false;
            this.l4.visible = false;
            this.l5.visible = false;
            this.l1Gray.visible = true;
            this.l2Gray.visible = true;
            this.l3Gray.visible = true;
            this.l4Gray.visible = true;
            this.l5Gray.visible = true;
        }
        onChangeLife(isAdd) {
            if (isAdd) {
                if (!this.l1.visible) {
                    this.l1.visible = true;
                    this.l1.scaleX = this.l1.scaleY = 0.1;
                    this.l1.x = 310;
                    this.l1.y = 77;
                    Laya.Tween.to(this.l1, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 23,
                        y: 23
                    }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l1Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l2.visible) {
                    this.l2.visible = true;
                    this.l2.scaleX = this.l2.scaleY = 0.1;
                    this.l2.x = 310;
                    this.l2.y = 77;
                    Laya.Tween.to(this.l2, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 76,
                        y: 23
                    }, 350, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l2Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l3.visible) {
                    this.l3.visible = true;
                    this.l3.scaleX = this.l3.scaleY = 0.1;
                    this.l3.x = 310;
                    this.l3.y = 77;
                    Laya.Tween.to(this.l3, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 129,
                        y: 23
                    }, 400, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l3Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l4.visible) {
                    this.l4.visible = true;
                    this.l4.scaleX = this.l4.scaleY = 0.1;
                    this.l4.x = 310;
                    this.l4.y = 77;
                    Laya.Tween.to(this.l4, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 182,
                        y: 23
                    }, 450, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l4Gray.visible = false;
                    }));
                    return;
                }
                if (!this.l5.visible) {
                    this.l5.visible = true;
                    this.l5.scaleX = this.l5.scaleY = 0.1;
                    this.l5.x = 310;
                    this.l5.y = 77;
                    Laya.Tween.to(this.l5, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 235,
                        y: 23
                    }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.l5Gray.visible = false;
                    }));
                    return;
                }
            } else {
                this.boxLifeTip.visible = true;
                this.boxLifeTip.scaleX = this.boxLifeTip.scaleY = 1;
                this.boxLifeTip.x = 120;
                this.boxLifeTip.y = 23;
                Laya.Tween.to(this.boxLifeTip, {
                    scaleX: 2.5,
                    scaleY: 2.5,
                    x: 300,
                    y: 600
                }, 1000, Laya.Ease.bounceOut, Laya.Handler.create(this, () => {
                    this.boxLifeTip.visible = false;
                }), 0);
                if (this.l5.visible) {
                    this.l5.visible = false;
                    this.l5Gray.visible = true;
                    return;
                }
                if (this.l4.visible) {
                    this.l4.visible = false;
                    this.l4Gray.visible = true;
                    return;
                }
                if (this.l3.visible) {
                    this.l3.visible = false;
                    this.l3Gray.visible = true;
                    return;
                }
                if (this.l2.visible) {
                    this.l2.visible = false;
                    this.l2Gray.visible = true;
                    return;
                }
                if (this.l1.visible) {
                    this.l1.visible = false;
                    this.l1Gray.visible = true;
                    return;
                }
            }
        }
        onDead() {
            var that = this;
            GameMiniSDK.GetInstance().hideBottomBanner();
            if (GameBaseData.modelType == 0) {
                if (this._score <= 10) {
                    GameBaseData.multiDeadCount++;
                    if (GameBaseData.multiDeadCount >= 2) {
                        FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                    } else {
                        this.gameOver();
                    }
                } else if (this._score > 10 && this._score <= 25) {
                    FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                } else {
                    this.newOnDead();
                }
            } else {
                if (this._score <= 300) {
                    if (GameBaseData.modelType == 1) {
                        GameBaseData.singleDeadCount++;
                        if (GameBaseData.singleDeadCount >= 2) {
                            FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                        } else {
                            this.gameOver();
                        }
                    } else {
                        GameBaseData.pkDeadCount++;
                        if (GameBaseData.pkDeadCount >= 2) {
                            FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                        } else {
                            this.gameOver();
                        }
                    }
                } else if (this._score > 300 && this._score <= 800) {
                    FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                } else {
                    this.newOnDead();
                }
            }
        }
        newOnDead() {
            this.isVictory = false;
            if (GameBaseData.modelType > 1 && this._score >= GameBaseData.modelGoal) {
                this._deadNum = 3;
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.isVictory = true;
                }
                this.victory.visible = true;
                this.victory.scaleX = this.victory.scaleY = 1.0;
                this.victory.y = 200;
                Laya.Tween.to(this.victory, {
                    scaleX: 1.5,
                    scaleY: 1.5,
                    y: 425
                }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {}), 0, true, true);
            }
            this.doDead();
        }
        doDead() {
            this.tfScore.visible = false;
            this.boxLife.visible = false;
            this.boxRevive.visible = true;
            this.BeyondFriend.visible = false;
            this.boxFinalScore.visible = false;
            GameBaseData.FBEvent(GameBaseData.modelType == 0 ? 5 : (GameBaseData.modelType == 1 ? 31 : 41));
            GameBaseData.reviveCount++;
            var showShareBtn = false;
            this.btn_tg.visible = false;
            if (!GameBaseData.isIOS) {
                this.tgID = Math.floor(6 * Math.random()) + 1;
                this.btn_tg.skin = "index/tg" + this.tgID + ".jpg";
                this.onTweenTGBtn0();
            }
            if (showShareBtn) {
                this.btnShareRevive.visible = true;
                this.btnWatchVideo.visible = false;
                this.onTweenShareReliveBtn0();
                Laya.Tween.clearAll(this.btnWatchVideo);
                this.btnShareContinue.visible = true;
            } else {
                this.btnShareRevive.visible = false;
                this.btnWatchVideo.visible = true;
                this.onTweenWatchBtn0();
                Laya.Tween.clearAll(this.btnShareRevive);
                this.btnShareContinue.visible = false;
            }
            this.doReviveCountDown();
            GameMiniSDK.GetInstance().addMiniSDK_Btn("home_banner", 0, 0);
        }
        onTweenTGBtn0() {
            Laya.Tween.clearTween(this.onTweenTGBtn0);
            this.btn_tg.scaleX = 1;
            this.btn_tg.scaleY = 1;
            Laya.Tween.to(this.btn_tg, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenTGBtn1), 0, true, true);
        }
        onTweenTGBtn1() {
            Laya.Tween.clearTween(this.onTweenTGBtn1);
            this.btn_tg.scaleX = 0.8;
            this.btn_tg.scaleY = 0.8;
            Laya.Tween.to(this.btn_tg, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenTGBtn0), 0, true, true);
        }
        onTweenWatchBtn0() {
            Laya.Tween.clearTween(this.onTweenShareBtn0);
            this.btnWatchVideo.scaleX = 1;
            this.btnWatchVideo.scaleY = 1;
            Laya.Tween.to(this.btnWatchVideo, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn1), 0, true, true);
        }
        onTweenWatchBtn1() {
            Laya.Tween.clearTween(this.onTweenShareBtn1);
            this.btnWatchVideo.scaleX = 0.8;
            this.btnWatchVideo.scaleY = 0.8;
            Laya.Tween.to(this.btnWatchVideo, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenWatchBtn0), 0, true, true);
        }
        onTweenShareReliveBtn0() {
            Laya.Tween.clearTween(this.onTweenShareReliveBtn0);
            this.btnShareRevive.scaleX = 1;
            this.btnShareRevive.scaleY = 1;
            Laya.Tween.to(this.btnShareRevive, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareReliveBtn1), 0, true, true);
        }
        onTweenShareReliveBtn1() {
            Laya.Tween.clearTween(this.onTweenShareReliveBtn1);
            this.btnShareRevive.scaleX = 0.8;
            this.btnShareRevive.scaleY = 0.8;
            Laya.Tween.to(this.btnShareRevive, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareReliveBtn0), 0, true, true);
        }
        onTg() {
            this._main.event(touch.GameEvent.OPEN_GAME);
        }
        onOpenTg() {
            GameBaseData.OpenOtherGame(this.tgID - 1, (data) => {});
        }
        onShare() {
            this._main.event(touch.GameEvent.OPEN_GIFT);
        }
        openGift() {
            this.imgAward.visible = false;
            this.btnShare.visible = false;
            let curIndex = touch.GameData.instance.onlineIndex;
            for (let index = 0; index < touch.GameConfig.ONLINE_GIFT.length; index++) {
                let onlineGift = touch.GameConfig.ONLINE_GIFT[index];
                if (onlineGift.index <= curIndex) {
                    continue;
                }
                if (onlineGift.time <= touch.GameData.instance.onlineTime) {
                    if (GameBaseData.getVideoFlag(0) >= 0) {
                        this.btnShare.visible = true;
                        this.imgAward.visible = true;
                    }
                }
                break;
            }
            if (touch.GameData.instance.dailyVaild) {
                this.btnShare.visible = true;
                this.imgAward.visible = true;
            }
            this.btnTg.visible = false;
            if (!GameBaseData.isIOS) {}
            this.imgTG.visible = false;
            if (touch.GameData.instance.isGame1On || touch.GameData.instance.isGame2On || touch.GameData.instance.isGame3On || touch.GameData.instance.isGame4On || touch.GameData.instance.isGame5On || touch.GameData.instance.isGame6On) {}
        }
        gameOver() {
            HUHU_showInterstitialAd();
            var that = this;
            this.btnRestart.y = Laya.stage.height - this.bannerHeight - 90;
            this.gotogamebtn.y = Laya.stage.height - this.bannerHeight - 150;
            this.playFriendBtn.y = Laya.stage.height - this.bannerHeight - 150;
            GameBaseData.FBEventNew(5);
            GameBaseData.sendToFBBestScore(this._score);
            var maxScore = 0;
            if (GameBaseData.modelType == 0) {
                maxScore = touch.GameData.instance.mulrecord;
            } else {
                maxScore = touch.GameData.instance.singlerecord;
            }
            GameBaseData.upDataRank(this._score, GameBaseData.modelType, function() {
                that.getRankDataAndRefreshView("FB_friendRank", maxScore);
            });
            this.tfScore.visible = false;
            this.boxLife.visible = false;
            this.BeyondFriend.visible = false;
            this.tfFinalScore.text = this._score.toString();
            this._main.event(touch.GameEvent.GAME_OVER, parseInt(this.tfFinalScore.text));
            this.boxFinalScore.visible = true;
            GameMiniSDK.GetInstance().addMiniSDK_Btn("home_center", 90, Laya.stage.height - this.bannerHeight - 90);
            GameMiniSDK.GetInstance().addMiniSDK_Btn("home_banner", 0, 0);
            this.starBox.visible = false;
            this.imgNewRecord.visible = false;
            this.tfBestScore.visible = false;
            this.openGift();
            if (GameBaseData.modelType >= 2) {
                touch.GameData.instance.addVideoNum(26, 0, 1);
                if (this._score > touch.GameData.instance.record2) {
                    touch.GameData.instance.record2 = this._score;
                }
                let starTemp = touch.GameData.instance.star;
                this.tfFinalScore.text = "" + this._pkscore;
                if (this._pkscore > touch.GameData.instance.pkNums[GameBaseData.modelType - 2]) {
                    touch.GameData.instance.addPKNum(GameBaseData.modelType - 2, this._pkscore);
                }
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.pkNums[GameBaseData.modelType - 2];
                this.starBox.visible = true;
                this.imgNewRecord.visible = false;
                this.score0.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1;
                this.score1.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2;
                this.score2.text = "" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3;
                this.star0.visible = false;
                this.star1.visible = false;
                this.star2.visible = false;
                if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star3) {
                    this.star2.visible = true;
                    this.star1.visible = true;
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 3) {
                        touch.GameData.instance.setAddStar(3 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 3);
                    }
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star2) {
                    this.star1.visible = true;
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 2) {
                        touch.GameData.instance.setAddStar(2 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 2);
                    }
                } else if (this._pkscore >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].star1) {
                    this.star0.visible = true;
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 1) {
                        touch.GameData.instance.setAddStar(1 - touch.GameData.instance.pkComNums[GameBaseData.modelType - 2]);
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 1);
                    }
                }
                this.victory.visible = false;
                if (this._score >= touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].goal) {
                    if (touch.GameData.instance.pkComNums[GameBaseData.modelType - 2] < 4) {
                        touch.GameData.instance.setAddStar(touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex);
                        if (touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex > 0) {
                            touch.Notice.show("Sucessful get ertra +" + touch.GameConfig.PK_GOAL_CONFIG[GameBaseData.modelType - 2].ex);
                        }
                        touch.GameData.instance.addPKComNum(GameBaseData.modelType - 2, 4);
                    }
                    if (this.star2.visible) {
                        this.btnRestart.visible = false;
                    }
                }
                if (GameBaseData.newModeallRank) {
                    this.showFBFriendTop3(GameBaseData.newModeallRank);
                }
                this.setFBFriendList();
            } else if (GameBaseData.modelType == 0) {
                this.imgNewRecord.visible = this._score > touch.GameData.instance.mulrecord;
                if (GameBaseData.isDebug) {
                    console.log("有挑战则发送挑战信息");
                }
                GameBaseData.gameOverTurnFriend(this._score, "MULTI");
                if (this._score > touch.GameData.instance.mulrecord && touch.GameData.instance.mulrecord > 10) {
                    touch.GameData.instance.mulrecord = this._score;
                    this.openGameOverShare(this._score);
                } else {
                    if (this._score > touch.GameData.instance.mulrecord) {
                        touch.GameData.instance.mulrecord = this._score;
                    }
                    this.nearFriends = GameBaseData.GetNeerPlayer();
                    this.showFBFriendTop3(this.nearFriends);
                    this.onOnlineReward();
                    this.imgNewRecord.visible = false;
                }
                touch.GameData.instance.addVideoNum(6, 0, 1);
                touch.GameData.instance.saveFBobj();
                this.setFBFriendList();
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.mulrecord;
            } else {
                if (GameBaseData.isDebug) {
                    console.log("有挑战则发送挑战信息" + GameBaseData.modelType);
                }
                GameBaseData.gameOverTurnFriend(this._score + "m", "SINGLE");
                if (this._score > 3000) {
                    if (touch.TipDialog.gameTimes < 3) {
                        touch.TipDialog.gameTimes = 3;
                    }
                }
                if (this._score > touch.GameData.instance.singlerecord && touch.GameData.instance.singlerecord > 2000) {
                    touch.GameData.instance.singlerecord = this._score;
                    this.openGameOverShare(this._score);
                } else {
                    if (this._score > touch.GameData.instance.singlerecord) {
                        touch.GameData.instance.singlerecord = this._score;
                    }
                    this.nearFriends = GameBaseData.GetNeerPlayer();
                    this.showFBFriendTop3(this.nearFriends);
                    this.onOnlineReward();
                }
                touch.GameData.instance.addVideoNum(14, 0, 1);
                touch.GameData.instance.saveFBobj();
                this.setFBFriendList();
                this.tfBestScore.text = "BestRecord:" + touch.GameData.instance.singlerecord;
            }
            GameBaseData.gameLvInit = 0;
            this.updateOnlineReward();
            this.showRankView();
            this.showUnlockSkin();
        }
        showUnlockSkin() {
            if (this.boxTip.visible)
                return;
            let myId = touch.GameData.instance.getNewTipFlag();
            this.boxTip.visible = false;
            if (myId > 0) {
                this.imgTip.skin = "index/skin" + myId + ".png";
                this.boxTip.visible = true;
                this.boxTip.x = 200;
                Laya.Tween.to(this.boxTip, {
                    x: 0
                }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.boxTip, {
                        x: 0
                    }, 2000, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                        this.boxTip.visible = false;
                        this.showUnlockSkin();
                    }));
                }));
            }
        }
        openGameOverShare(score) {
            this.NextBox.visible = false;
            this.OS_Menu.visible = true;
            this.imgNewRecord.visible = true;
            this.tfBestScore.visible = true;
            this.scoretitle.visible = false;
            this.tfFinalScore.visible = false;
            let modeString = GameBaseData.modelType == 0 ? "MULTI" : "SINGLE";
            let scoreString = GameBaseData.modelType == 0 ? score + "" : score + "m";
            this.OS_Menu_Score.text = "" + scoreString;
            this.OS_Menu_ScoreB.text = "" + scoreString;
            this.OS_Menu_top.text = modeString;
            this.OS_Menu_topB.text = modeString;
            this.OS_Menu_bg.skin = "./res/skin/fx.png";
            this.OS_Menu_Head.visible = true;
            this.OS_Menu_Score.visible = true;
            this.OS_Menu_ScoreB.visible = true;
            this.OS_Menu_top.visible = true;
            this.OS_Menu_topB.visible = true;
            if (GameBaseData.isFBSDK) {
                this.OS_Menu_Head.skin = FBInstant.player.getPhoto();
                FBInstant.logEvent("Share_open");
            }
            Laya.Tween.to(this.OS_Menu_Share, {
                scaleX: 0.8,
                scaleY: 0.8
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.onTweenShareBtn1));
        }
        closeGameOverShare() {
            this.OS_Menu.visible = false;
            this.NextBox.visible = true;
            this.imgNewRecord.visible = false;
            this.tfBestScore.visible = false;
            this.tfFinalScore.visible = true;
            this.scoretitle.visible = true;
            this.onOnlineReward();
        }
        onGameOverShare() {
            HUHU_showRewardedVideoAd(() => {
                this.closeGameOverShare();
            }, () => {
                touch.Notice.show("No ads temporarily.");
            })
        }
        updateOnlineReward() {
            this.btnOnlineReward.visible = false;
            let curIndex = touch.GameData.instance.onlineIndex;
            for (let index = 0; index < touch.GameConfig.ONLINE_GIFT.length; index++) {
                let onlineGift = touch.GameConfig.ONLINE_GIFT[index];
                if (onlineGift.index <= curIndex) {
                    continue;
                }
                if (onlineGift.time <= touch.GameData.instance.onlineTime) {
                    this.tfReady.visible = true;
                    this.btnOnlineReward.disabled = false;
                    this.tfNextReward.visible = false;
                    this.tfNextRewardTime.visible = false;
                } else {
                    this.tfReady.visible = false;
                    this.tfNextReward.visible = true;
                    this.tfNextRewardTime.visible = true;
                    this._onlineRemainingTime = onlineGift.time - touch.GameData.instance.onlineTime;
                    this.tfNextRewardTime.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
                    Laya.timer.clear(this, this.timeLoop);
                    Laya.timer.loop(1000, this, this.timeLoop);
                }
                break;
            }
        }
        timeLoop() {
            this._onlineRemainingTime--;
            this.tfNextRewardTime.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
            if (this._onlineRemainingTime <= 0) {
                Laya.timer.clear(this, this.timeLoop);
                this.updateOnlineReward();
            }
        }
        showRankView() {
            this.spriteOpenRank.visible = true;
        }
        updateRankView() {
            this._rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
            this._rankTexture.bitmap.alwaysChange = true;
            this.spriteRank.graphics.drawTexture(this._rankTexture, 0, 0, this.spriteRank.width, this.spriteRank.height);
        }
        showFBFriendTop3(datas) {}
        _setFBShareTop3(obj, rankData) {
            let im0 = obj.getChildByName("im0");
            let im1 = obj.getChildByName("im1");
            let im2 = obj.getChildByName("im2");
            if (rankData) {
                if (rankData.uuid == GameBaseData.UID) {
                    im0.visible = true;
                    im1.visible = false;
                    im2.visible = false;
                } else {
                    im0.visible = false;
                    if (GameBaseData.getUidIsShare(rankData.uuid, GameBaseData.modelType)) {
                        im1.visible = true;
                        im2.visible = false;
                    } else {
                        im1.visible = false;
                        im2.visible = true;
                    }
                }
            } else {
                im0.visible = false;
                im1.visible = false;
                im2.visible = false;
            }
        }
        setFBFriendList() {
            GameBaseData.upDataRank(GameBaseData.modelType > 1 ? touch.GameData.instance.star : this._score, GameBaseData.modelType, () => {
                if (GameBaseData.isDebug) {
                    console.log("更新分数完毕");
                }
                if (GameBaseData.modelType == 0) {
                    GameBaseData.getFriendList(0, () => {
                        this.nearFriends = GameBaseData.GetNeerPlayer();
                        if (GameBaseData.isDebug) {
                            console.log("好友列表拉取成功");
                            console.log(this.nearFriends);
                        }
                        this.showFBFriendTop3(this.nearFriends);
                        if (GameBaseData.isDebug) {
                            console.log("界面绘制成功");
                        }
                        touch.WorldRankDialog._isReqAllData1 = touch.WorldRankDialog._isReqAllData2 = false;
                    }, () => {});
                } else if (GameBaseData.modelType == 1) {
                    GameBaseData.getFriendList_model1(0, () => {
                        this.nearFriends = GameBaseData.GetNeerPlayer();
                        if (GameBaseData.isDebug) {
                            console.log("好友列表拉取成功");
                            console.log(this.nearFriends);
                        }
                        this.showFBFriendTop3(this.nearFriends);
                        if (GameBaseData.isDebug) {
                            console.log("界面绘制成功");
                        }
                        touch.WorldRankDialog._isReqAllData1 = touch.WorldRankDialog._isReqAllData2 = false;
                    }, () => {});
                } else {
                    GameBaseData.getNewModeRankList(() => {
                        this.showFBFriendTop3(GameBaseData.newModeallRank);
                        touch.NewModeRankDialog._isReqAllData1 = touch.NewModeRankDialog._isReqAllData2 = false;
                    }, () => {});
                }
            });
        }
        destroyRankView() {
            if (this._rankTexture != null) {
                this._rankTexture.bitmap.alwaysChange = false;
                this._rankTexture.destroy();
                this._rankTexture = null;
            }
            this.spriteRank.graphics.clear();
        }
        onClose() {
            this.boxRevive.visible = false;
            this.gameOver();
            GameBaseData.FBEventNew(6);
            Laya.timer.clear(this, this.onReviveCountDown);
        }
        onWathVideo() {
            if (GameBaseData.isDebug) {
                console.log("观看视频");
            }
            var that = this;
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(12);
                Laya.timer.clear(this, this.onReviveCountDown);
                FBSdkMamager.GetInstance().PlayRewardVedio(FBSdkMamager.reliveRewardVedioAdsId, this._onWathVideo.bind(this), function() {
                    touch.Notice.show("No ads temporarily.");
                    Laya.timer.loop(1000, that, that.onReviveCountDown);
                });
            } else {
                HUHU_showRewardedVideoAd(() => {
                    that._onWathVideo();
                }, () => {
                    touch.Notice.show("No ads temporarily.");
                    Laya.timer.loop(1000, that, that.onReviveCountDown);
                });
            }
        }
        _onWathVideo() {
            var showShareBtn = false;
            if (showShareBtn) {
                this.boxRevive.visible = false;
                this.boxReviving.visible = true;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.btnClose.visible = true;
                Laya.timer.clear(this, this.onReviveCountDown);
            } else {
                this._main.event(touch.GameEvent.REVIVE);
                this.boxRevive.visible = false;
                this.boxReviving.visible = true;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.doRevivingCountDown();
                this.btnClose.visible = true;
                Laya.timer.clear(this, this.onReviveCountDown);
            }
            if (this.BeyondFriend.alpha == 1) {
                this.BeyondFriend.visible = true;
            }
            touch.GameData.instance.addVideoNum(17, 0, 0);
        }
        onShareRevive() {
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(24);
                var data = {
                    contextType: 0,
                    contextID: null,
                    contextFromID: FBInstant.player.getID()
                };
                GameBaseData.FBShare(data, () => {});
                this._onWathVideo();
            }
        }
        updataBeyondFriend2() {
            if (GameBaseData.modelType > 1)
                return;
            this._count++;
            if (this._count < 100 && GameBaseData.modelType == 1) {
                return;
            }
            this._count = 0;
            if (!this.tempISReadyBeyondRank) {
                return;
            }
            if (GameBaseData.isDebug) {
                console.log(this._score + "___" + this.tempBeyondScore);
            }
            if (this._score > this.tempBeyondScore) {
                this.setPlayBeyondRank();
            }
        }
        initBeyondFriend() {
            if (GameBaseData.modelType > 1)
                return;
            let that = this;
            GameBaseData.getInitBeyondFriend(GameBaseData.modelType, (data, num) => {
                that.tempBeyondList = data;
                that.getRankObj_second();
            });
        }
        getRankObj_second() {
            if (GameBaseData.modelType > 1)
                return;
            this.tempBeyondWorldCount++;
            this.tempBeyondScore = (this.tempBeyondWorldCount * this.getBeyondTagerScore() - this.getBeyondTagerScore() / 2 + Math.floor(this.getBeyondTagerScore() * Math.random()));
            let findRankObj = GameBaseData.getStartEndRankObj((this.tempBeyondWorldCount - 1) * this.getBeyondTagerScore(), (this.tempBeyondWorldCount) * this.getBeyondTagerScore(), this.tempBeyondList);
            if (findRankObj) {
                this.setReadyBeyondRank(findRankObj);
            } else {
                if (GameBaseData.beyondHead.length > 0) {
                    let nRankobj = new RankObj();
                    nRankobj.pic = GameBaseData.beyondHead.pop();
                    nRankobj.score = "" + this.tempBeyondScore;
                    this.setReadyBeyondRank(nRankobj);
                    if (GameBaseData.beyondHead.length == 0) {
                        GameBaseData.getBeyondHeads();
                    }
                } else {
                    GameBaseData.getBeyondHeads();
                }
            }
        }
        setReadyBeyondRank(obj) {
            this.tempReadyBeyondRank = obj;
            this.bfInfo.text = obj.score + (GameBaseData.modelType == 1 ? "m" : "");
            this.tempBeyondScore = obj.score;
            if (obj.pic) {
                this.bfImage.skin = null;
                this.bfImage.on(Laya.Event.LOADED, this, this.onLoadBeyondImage);
                this.bfImage.skin = obj.pic;
            } else {
                this.onLoadBeyondImage();
            }
            if (GameBaseData.isDebug) {
                console.log("超越角色=>");
                console.log(obj);
            }
        }
        onLoadBeyondImage() {
            if (GameBaseData.isDebug) {
                console.log("超越头像载入完毕");
            }
            this.BeyondFriend.y = 360;
            this.BeyondFriend.x = 80;
            this.BeyondFriend.scaleX = this.BeyondFriend.scaleY = 0;
            this.BeyondFriend.alpha = 1;
            if (this.boxRevive.visible || this.boxFinalScore.visible || this.OS_Menu.visible) {} else {
                this.BeyondFriend.visible = true;
            }
            Laya.Tween.clearAll(this.BeyondFriend);
            Laya.Tween.to(this.BeyondFriend, {
                scaleX: 1,
                scaleY: 1
            }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, () => {}), 0);
            this.tempISReadyBeyondRank = true;
            this.bfImage.off(Laya.Event.LOADED, this, this.onLoadBeyondImage);
        }
        setPlayBeyondRank() {
            if (!this.tempReadyBeyondRank) {
                console.log("没有头像 请求");
                this.getRankObj_second();
                return;
            }
            this.tempISReadyBeyondRank = false;
            Laya.Tween.clearAll(this.BeyondFriend);
            Laya.Tween.to(this.BeyondFriend, {
                y: 120,
                alpha: 0.1
            }, 800, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                this.tempReadyBeyondRank = null;
                this.tempISReadyBeyondRank = true;
                this.BeyondFriend.visible = false;
                console.log("头像超越完毕 请求");
                this.getRankObj_second();
            }), 0);
        }
        getBeyondTagerScore() {
            if (GameBaseData.modelType == 0) {
                return 6;
            }
            return 500;
        }
        onShareContinue() {
            this._main.event(touch.GameEvent.REVIVE);
            this.doRevivingCountDown();
            this.btnShareContinue.visible = false;
        }
        onBack() {
            if (GameBaseData.isDebug) {
                console.log("TipDialog.gameTimes====" + touch.TipDialog.gameTimes);
            }
            this._main.event(touch.GameEvent.BACK);
        }
        onShareGameover() {
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(20);
                var data = {
                    contextType: 0,
                    contextID: null,
                    contextFromID: FBInstant.player.getID()
                };
                GameBaseData.FBShare(data, null);
            }
        }
        onRestart() {
            if (GameBaseData.modelType > 1) {
                if (touch.GameData.instance.diamond < 50) {
                    touch.Notice.show("Diamond not enough");
                    this._main.event(touch.GameEvent.OPEN_GIFT);
                    return;
                } else {
                    touch.GameData.instance.setAddDiamond(-50);
                }
            }
            let that = this;
            GameBaseData.cpScore = this._score;
            if (touch.TipDialog.gameTimes >= 3 && GameBaseData.isFBSDK && GameBaseData.modelType < 2) {
                if (touch.TipDialog.gameTimesCancel % 5 == 0) {
                    GameBaseData.FBShareFriend_startGame(() => {
                        that._onRestartFB();
                        GameBaseData.FBEvent(36);
                    }, () => {
                        that._onRestartFB();
                        GameBaseData.FBEvent(37);
                        touch.TipDialog.gameTimesCancel++;
                    });
                } else {
                    touch.TipDialog.gameTimesCancel++;
                    that._onRestartFB();
                }
            } else {
                that._onRestartFB();
            }
        }
        _onRestartFB() {
            this._main.event(touch.GameEvent.START_AGAIN);
        }
        onOpenRank() {
            this.destroyRankView();
            if (GameBaseData.modelType >= 2) {
                this._main.event(touch.GameEvent.OPEN_NewMode_RANK);
            } else {
                this._main.event(touch.GameEvent.OPEN_RANK);
            }
        }
        onCloseRank() {
            this.showRankView();
        }
        doRestart() {
            this.tfScore.visible = true;
            this.boxLife.visible = GameBaseData.modelType == 1;
            this.boxModel2.visible = GameBaseData.modelType > 1;
            this.fStar0.visible = false;
            this.fStar1.visible = false;
            this.fStar2.visible = false;
            this.victory.visible = false;
            this.boxGuide.visible = false;
            this.aniGuide.stop();
            this._main.event(touch.GameEvent.RESTART);
        }
        doReviveCountDown() {
            this._reviveCountdown = GameView.REVIVE_COUNTDOWN;
            GameBaseData.curLevelFirstDeadNum++;
            this.btnClose.visible = false;
            if (GameBaseData.modelType == 0) {
                this.reScore.text = "" + this._score;
            } else {
                this.reScore.text = this._score + "m";
            }
            this.updateReviveUI();
            Laya.timer.loop(1000, this, this.onReviveCountDown);
        }
        onReviveCountDown() {
            this._reviveCountdown--;
            if (GameBaseData.curLevelFirstDeadNum > 1) {
                if (this._reviveCountdown <= 4) {
                    this.btnClose.visible = true;
                }
            }
            this.updateReviveUI();
            if (this._reviveCountdown <= 0) {
                Laya.timer.clear(this, this.onReviveCountDown);
                this.boxRevive.visible = false;
                FBSdkMamager.GetInstance().ShowInterstitial(this.gameOver.bind(this), this.gameOver.bind(this));
                GameBaseData.FBEventNew(7);
            }
        }
        updateReviveUI() {
            this.tfReviveCountdown.text = this._reviveCountdown.toString();
        }
        doRevivingCountDown() {
            this._revivingCountdown = GameView.REVIVING_COUNTDOWN;
            this.updateRevivingUI();
            Laya.timer.loop(1000, this, this.onRevivingCountDown);
        }
        onRevivingCountDown() {
            this._revivingCountdown--;
            this.updateRevivingUI();
            if (this._revivingCountdown <= 0) {
                Laya.timer.clear(this, this.onRevivingCountDown);
                this.boxReviving.visible = false;
                this.tfScore.visible = true;
                this.boxLife.visible = GameBaseData.modelType == 1;
                this.BeyondFriend.visible = true;
            }
        }
        updateRevivingUI() {
            this.tfReviving.text = this._revivingCountdown.toString();
        }
        onOnlineReward() {
            if (touch.TipDialog.can_subscribe && touch.TipDialog.pushState == 0) {
                this._main.event(touch.GameEvent.OPEN_TIP, 1);
                return;
            }
            let diaNums = 5;
            if (GameBaseData.modelType == 0) {
                diaNums = Math.floor(this._score / 2);
            } else if (GameBaseData.modelType == 1) {
                diaNums = Math.floor(this._score / 100);
            } else {
                diaNums = 20;
            }
            if (diaNums > 50) {
                diaNums = 50;
            }
            if (diaNums < 1)
                return;
        }
        onSwitch() {
            if (GameBaseData.isFBSDK) {
                FBInstant.logEvent("Switch2");
                FBInstant.switchGameAsync("274049616652996");
            }
        }
        touchBtn_FbShareTop3(obj, rankIndex) {
            if (!this.nearFriends) {
                return;
            }
            if (rankIndex < 3 && rankIndex < this.nearFriends.length) {
                let rankData = this.nearFriends[rankIndex];
                let im0 = obj.getChildByName("im0");
                let im1 = obj.getChildByName("im1");
                let im2 = obj.getChildByName("im2");
                if (im0.visible) {
                    if (GameBaseData.isDebug) {
                        console.log('调起分享sdk');
                    }
                    if (GameBaseData.isFBSDK) {
                        var data = {
                            contextType: 0,
                            contextID: null,
                            contextFromID: FBInstant.player.getID()
                        };
                        GameBaseData.FBShare(data, () => {
                            if (GameBaseData.isDebug) {
                                console.log('调起分享sdk成功');
                            }
                        });
                    }
                } else {
                    if (im1.visible) {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.uuid);
                            }
                            GameBaseData.PKFriend(rankData.uuid, () => {
                                this.joinGamePK();
                                GameBaseData.FBEvent(34);
                            });
                        } else {
                            this.joinGamePK();
                        }
                    } else {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk并给予奖励');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.uuid);
                            }
                            GameBaseData.PKFriend(rankData.uuid, () => {
                                GameBaseData.setAddUidToShare(rankData.uuid, GameBaseData.modelType);
                                this.joinGamePK();
                                GameBaseData.FBEvent(33);
                                im1.visible = true;
                                im2.visible = false;
                            });
                        } else {
                            GameBaseData.setAddUidToShare(rankData.uuid, GameBaseData.modelType);
                            touch.GameData.instance.setAddDiamond(100);
                            touch.Notice.show("Sucessful get 100 diamonds!");
                            this.joinGamePK();
                            im1.visible = true;
                            im2.visible = false;
                        }
                    }
                }
            }
        }
        joinGamePK() {
            this._onRestartFB();
        }
    }
    GameView.REVIVE_COUNTDOWN = 7;
    GameView.REVIVING_COUNTDOWN = 3;
    touch.GameView = GameView;
})(touch || (touch = {}));