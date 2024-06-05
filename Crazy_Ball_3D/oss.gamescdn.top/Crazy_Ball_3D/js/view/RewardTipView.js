var touch;
(function(touch) {
    class RewardTipView extends ui.RewardTipViewUI {
        constructor(main) {
            super();
            this._main = null;
            this.videoType = -1;
            this._main = main;
            this.btnGet.x = 271;
            this.btnDoubleGet.visible = false;
            this.aniOpen.once(Laya.Event.COMPLETE, this, this.onOpenOver);
            this.aniOpen.play(0, false);
            touch.SoundManager.playSound("res/sounds/get_reward.mp3");
        }
        destroy() {
            this._main = null;
            super.destroy();
        }
        showDoubleGet() {
            this.videoType = GameBaseData.getVideoFlag(1);
            if (this.videoType >= 0) {
                this.btnDoubleGet.visible = true;
            }
            this.btnGet.x = 175;
        }
        onOpenOver() {
            this.aniLight.play(0, true);
            this.btnGet.clickHandler = Laya.Handler.create(this, this.onGet);
            this.btnAllGet.clickHandler = Laya.Handler.create(this, this.onAllGet);
            this.btnDoubleGet.clickHandler = Laya.Handler.create(this, this.onDoubleGet, null, false);
        }
        onGet() {
            this._main.event(touch.GameEvent.HIDE_REWARD);
        }
        onAllGet() {}
        onDoubleGet() {
            if (GameBaseData.isFBSDK) {
                let that = this;
                FBSdkMamager.GetInstance().PlayRewardVedio(FBSdkMamager.doubleRewardVedioAdsId, function() {
                    GameBaseData.isErbei = true;
                    touch.GameData.instance.setAddDiamond(parseInt(this.tfNum.text));
                    that._main.event(touch.GameEvent.HIDE_REWARD);
                    touch.Notice.show("Get successful!");
                }, function() {
                    touch.Notice.show("No ads temporarily.");
                });
            } else {
                touch.GameData.instance.setAddDiamond(parseInt(this.tfNum.text));
                this._main.event(touch.GameEvent.HIDE_REWARD);
            }
        }
    }
    touch.RewardTipView = RewardTipView;
})(touch || (touch = {}));