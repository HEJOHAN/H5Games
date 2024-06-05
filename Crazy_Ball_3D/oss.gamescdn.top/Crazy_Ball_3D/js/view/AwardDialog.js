var touch;
(function(touch) {
    class AwardDialog extends ui.AwardDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._onlineRemainingTime = 0;
            this.onlineGiftIndex = 0;
            this.videoType = -1;
            this._main = main;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClickClose, null, false);
            this.btnAward00.clickHandler = Laya.Handler.create(this, this.onClickAward00, null, false);
            this.btnAward11.clickHandler = Laya.Handler.create(this, this.onClickAward11, null, false);
            this.btnAward22.clickHandler = Laya.Handler.create(this, this.onClickAward22, null, false);
            this.updateOnlineReward();
            this.videoType = GameBaseData.getVideoFlag(0);
        }
        updateOnlineReward() {
            this.btnAward0.visible = false;
            this.btnAward00.visible = true;
            this.tfDiamond.text = touch.GameData.instance.diamond.toString();
            this.txtAward1.text = "Tomorrow";
            if (touch.GameData.instance.dailyVaild) {
                this.btnAward1.visible = false;
                this.btnAward11.visible = true;
            } else {
                this.btnAward1.visible = true;
                this.btnAward11.visible = false;
            }
            if (AwardDialog.friendNums > 4) {
                this.btnAward2.visible = true;
                this.btnAward22.visible = false;
            } else {
                this.btnAward2.visible = false;
                this.btnAward22.visible = true;
            }
        }
        destroy() {
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            if (this.btnAward00.clickHandler != null) {
                this.btnAward00.clickHandler.recover();
                this.btnAward00.clickHandler = null;
            }
            if (this.btnAward11.clickHandler != null) {
                this.btnAward11.clickHandler.recover();
                this.btnAward11.clickHandler = null;
            }
            if (this.btnAward22.clickHandler != null) {
                this.btnAward22.clickHandler.recover();
                this.btnAward22.clickHandler = null;
            }
            super.destroy();
        }
        timeLoop() {
            this._onlineRemainingTime--;
            this.txtAward0.text = touch.TimeUtil.getHourMinuteSecond(this._onlineRemainingTime * 1000);
            if (this._onlineRemainingTime <= 0) {
                Laya.timer.clear(this, this.timeLoop);
                this.updateOnlineReward();
            }
        }
        onClickAward00() {
            if (GameBaseData.isFBSDK) {
                let that = this;
                FBSdkMamager.GetInstance().PlayRewardVedio(FBSdkMamager.diamondRewardVedioAdsId, function() {
                    touch.GameData.instance.setAddDiamond(100);
                    touch.GameData.instance.onlineIndex = that.onlineGiftIndex;
                    touch.Notice.show("Successful get 100 diamonds.");
                    that.updateOnlineReward();
                }, function() {
                    touch.Notice.show("No ads temporarily.");
                });
            } else {
                let that = this;
                HUHU_showRewardedVideoAd(() => {
                    touch.GameData.instance.setAddDiamond(100);
                    touch.GameData.instance.onlineIndex = this.onlineGiftIndex;
                    touch.Notice.show("Successful get 100 diamonds.");
                    that.updateOnlineReward();
                }, () => {
                    touch.Notice.show("No ads temporarily.");
                })
            }
        }
        onClickAward11() {
            touch.GameData.instance.setAddDiamond(200);
            touch.Notice.show("Successful get 200 diamonds.");
            touch.GameData.instance.addVideoNum(20, 0, 1);
            touch.GameData.instance.dailyVaild = false;
            GameBaseData.FBEvent(22);
            this.updateOnlineReward();
        }
        onClickAward22() {
            AwardDialog.isFromAward = true;
            this.close();
            this._main.event(touch.GameEvent.OPEN_RANK);
        }
        onClickClose() {
            this.close();
        }
    }
    AwardDialog.isFromAward = false;
    AwardDialog.friendNums = 0;
    touch.AwardDialog = AwardDialog;
})(touch || (touch = {}));