var touch;
(function(touch) {
    class PkDialog extends ui.PKDialogUI {
        constructor(main) {
            super();
            this.rankdatas = [];
            this.objList = [];
            this.curLevel = 0;
            this.curStar = 0;
            this._main = null;
            this._main = main;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.btnStart.clickHandler = Laya.Handler.create(this, this.onStart, null, false);
            this.spriteOpenRank.clickHandler = Laya.Handler.create(this, this.onOpenRank, null, false);
            this.curStar = 0;
            this.myStar.text = touch.GameData.instance.star.toString();
            if (GameBaseData.fbHead && GameBaseData.fbHead.length > 0) {
                this.myHead.skin = GameBaseData.fbHead;
            }
            this.initList();
            this.initRankList();
        }
        initList() {
            this.levelList.hScrollBarSkin = "";
            this.levelList.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.levelList.scrollBar.on(Laya.Event.END, this, this.OnBarEnd);
            this.levelList.scrollBar.on(Laya.Event.CHANGE, this, this.OnBarChange);
            this.levelList.array = new Array(7);
            if (GameBaseData.modelType > 1) {
                this.curLevel = GameBaseData.modelType - 2;
                if (touch.GameData.instance.pkComNums[this.curLevel] > 3) {
                    this.curLevel = this.curLevel + 1;
                    if (this.curLevel > 4) {
                        this.curLevel = 4;
                    }
                }
            }
            this.myLevel.text = "" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].title;
            this.myGoal.text = "Goal:" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].goal + "m";
            console.log("GameBaseData.modelType=" + GameBaseData.modelType + " this.curLevel=" + this.curLevel);
        }
        initRankList() {
            if (GameBaseData.newModeallRank && GameBaseData.newModeallRank.length > 0) {
                this.upDataRankList();
                return;
            }
            GameBaseData.getNewModeRankList(() => {
                this.upDataRankList();
            }, () => {
                this.upDataRankList();
            });
        }
        destroy() {
            super.destroy();
        }
        onStart() {
            if (touch.GameData.instance.diamond < 50) {
                touch.Notice.show("Diamond not enough");
                this._main.event(touch.GameEvent.OPEN_GIFT);
                return;
            }
            if (this.curLevel > 0 && touch.GameData.instance.pkComNums[this.curLevel - 1] < 4) {
                touch.Notice.show("Unlock after level" + this.curLevel + " is victory");
                return;
            }
            touch.GameData.instance.setAddDiamond(-50);
            GameBaseData.gameSpeed = 1.1;
            GameBaseData.modelType = 2 + this.curLevel;
            GameBaseData.modelDif = touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].dif;
            GameBaseData.modelGoal = touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].goal;
            GameBaseData.modelScore = touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].goal * 10;
            this._main.event(touch.GameEvent.CLOSE_PK);
            this._main.event(touch.GameEvent.ENTER_GAME2);
            GameBaseData.initGameLv();
        }
        onClose() {
            GameBaseData.gameSpeed = 1;
            this._main.event(touch.GameEvent.CLOSE_PK);
        }
        onOpenRank() {
            this._main.event(touch.GameEvent.OPEN_NewMode_RANK);
        }
        onRenderItem(cell, index) {
            if (null == cell) {
                return;
            }
            if (index == 0 || index == touch.GameConfig.PK_GOAL_CONFIG.length + 1) {
                cell.rootbox.visible = false;
                if (index == touch.GameConfig.PK_GOAL_CONFIG.length + 1) {
                    this.levelList.tweenTo(this.curLevel, (this.curLevel + 1) * 200);
                    this.tfDiamond.text = "Today\n" + this.curStar + "/25";
                }
            } else {
                cell.info.text = touch.GameConfig.PK_GOAL_CONFIG[index - 1].des + "";
                for (let i = 0; i < 3; i++) {
                    let starImg = cell.star_show.getChildAt(i);
                    starImg.visible = false;
                    if (i == 0 && touch.GameConfig.PK_GOAL_CONFIG[index - 1].star1 < touch.GameData.instance.pkNums[index - 1]) {
                        starImg.visible = true;
                    } else if (i == 1 && touch.GameConfig.PK_GOAL_CONFIG[index - 1].star2 < touch.GameData.instance.pkNums[index - 1]) {
                        starImg.visible = true;
                    } else if (i == 2 && touch.GameConfig.PK_GOAL_CONFIG[index - 1].star3 < touch.GameData.instance.pkNums[index - 1]) {
                        starImg.visible = true;
                    }
                }
                if (touch.GameData.instance.pkComNums[index - 1] < 4) {
                    cell.victory.visible = false;
                    cell.info.visible = true;
                    this.curStar += touch.GameData.instance.pkComNums[index - 1];
                } else {
                    cell.victory.visible = true;
                    cell.info.visible = false;
                    if (touch.GameConfig.PK_GOAL_CONFIG[index - 1].star3 < touch.GameData.instance.pkNums[index - 1]) {
                        this.curStar += (3 + touch.GameConfig.PK_GOAL_CONFIG[index - 1].ex);
                    } else if (touch.GameConfig.PK_GOAL_CONFIG[index - 1].star2 < touch.GameData.instance.pkNums[index - 1]) {
                        this.curStar += (2 + touch.GameConfig.PK_GOAL_CONFIG[index - 1].ex);
                    } else if (touch.GameConfig.PK_GOAL_CONFIG[index - 1].star1 < touch.GameData.instance.pkNums[index - 1]) {
                        this.curStar += (1 + touch.GameConfig.PK_GOAL_CONFIG[index - 1].ex);
                    } else {
                        this.curStar += (0 + touch.GameConfig.PK_GOAL_CONFIG[index - 1].ex);
                    }
                }
            }
            if (this.objList.length < 7) {
                if (index == 1) {
                    cell.rootbox.scaleX = cell.rootbox.scaleY = 1;
                } else {
                    cell.rootbox.scaleX = cell.rootbox.scaleY = 0.5;
                }
                this.objList.push(cell.rootbox);
            }
        }
        OnBarEnd() {
            let aa = this.levelList.scrollBar.value;
            let index = Math.round(aa / 226);
            if (index < 0) {
                index = 0;
            }
            if (index > 6) {
                index = 6;
            }
            this.levelList.tweenTo(index, 200, Laya.Handler.create(this, () => {
                this.curLevel = index;
                this.myLevel.text = "" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].title;
                this.myGoal.text = "Goal:" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].goal + "m";
            }));
        }
        OnBarChange() {
            let startX = this.levelList.scrollBar.value;
            let index = Math.round(startX / 226);
            if (index >= 0 && index < 5) {
                this.curLevel = index;
                this.myLevel.text = "" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].title;
                this.myGoal.text = "Goal:" + touch.GameConfig.PK_GOAL_CONFIG[this.curLevel].goal + "m";
            }
            for (let i = 0; i < this.objList.length; i++) {
                let nx = i * 226 + 113 - startX;
                let scale = 0;
                let nbX = nx - 343;
                if (nbX > 226) {
                    nbX = 226;
                }
                if (nbX < -226) {
                    nbX = -226;
                }
                if (nbX > 0) {
                    scale = (226 - nbX) / 226;
                } else if (nbX < 0) {
                    scale = (226 + nbX) / 226;
                } else {
                    scale = 1;
                }
                if (scale < 0.5) {
                    scale = 0.5;
                }
                if (scale > 1) {
                    scale = 1;
                }
                this.objList[i].scaleX = scale;
                this.objList[i].scaleY = scale;
            }
        }
        upDataRankList() {
            if (GameBaseData.newModeallRank && GameBaseData.newModeallRank.length > 0) {
                touch.NewModeRankDialog._isReqAllData1 = true;
                if (GameBaseData.isDebug) {
                    console.log(GameBaseData.newModeallRank);
                }
                this.rankdatas = [];
                for (let i = 0; i < GameBaseData.newModeallRank.length; i++) {
                    let worldRankData = new touch.WorldRankItemData();
                    worldRankData.rank = GameBaseData.newModeallRank[i].rank;
                    worldRankData.id = GameBaseData.newModeallRank[i].uuid;
                    worldRankData.score = GameBaseData.newModeallRank[i].score + "";
                    worldRankData.name = GameBaseData.newModeallRank[i].name;
                    worldRankData.icon = GameBaseData.newModeallRank[i].pic;
                    this.rankdatas.push(worldRankData);
                }
            } else {
                this.rankdatas = [];
            }
            this.updateUI();
        }
        updateUI() {
            for (var index = 0; index < 3; index++) {
                if (index < this.rankdatas.length) {
                    let data = this.rankdatas[index];
                    var element = this.getChildByName("boxRank" + index);
                    if (element != null) {
                        let imgHead = element.getChildByName("imgHead");
                        if (imgHead != null) {
                            imgHead.skin = data.icon;
                        }
                        let tfName = element.getChildByName("tfName");
                        if (tfName != null) {
                            tfName.text = data.name;
                            if (tfName.text.length > 10) {
                                tfName.fontSize = 26 - (tfName.text.length - 10) * 2;
                                if (tfName.fontSize < 18) {
                                    tfName.fontSize = 18;
                                }
                            }
                        }
                        let tfScore = element.getChildByName("tfScore");
                        if (tfScore != null) {
                            tfScore.text = data.score.toString();
                        }
                    }
                } else {
                    var element = this.getChildByName("boxRank" + index);
                    if (element != null) {
                        let imgHead = element.getChildByName("imgHead");
                        if (imgHead != null) {
                            imgHead.skin = null;
                        }
                        let tfName = element.getChildByName("tfName");
                        if (tfName != null) {
                            tfName.text = "";
                        }
                        let tfScore = element.getChildByName("tfScore");
                        if (tfScore != null) {
                            tfScore.text = "";
                        }
                    }
                }
            }
        }
    }
    touch.PkDialog = PkDialog;
})(touch || (touch = {}));