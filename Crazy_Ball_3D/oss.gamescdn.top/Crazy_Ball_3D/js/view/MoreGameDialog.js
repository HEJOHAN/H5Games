var touch;
(function(touch) {
    class MoreGameDialog extends ui.MoreGameDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._onlineRemainingTime = 0;
            this._main = main;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClickClose, null, false);
            this.updateOnlineReward();
        }
        updateOnlineReward() {}
        destroy() {
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            super.destroy();
        }
        timeLoop() {}
        onClickAward00() {
            touch.GameData.instance.isGame1On = false;
            GameBaseData.OpenOtherGame(0, (data) => {});
        }
        onClickAward11() {
            touch.GameData.instance.isGame2On = false;
            GameBaseData.OpenOtherGame(1, (data) => {});
        }
        onClickAward22() {
            touch.GameData.instance.isGame3On = false;
            GameBaseData.OpenOtherGame(2, (data) => {});
        }
        onClickAward33() {
            touch.GameData.instance.isGame4On = false;
            GameBaseData.OpenOtherGame(3, (data) => {});
        }
        onClickAward44() {
            touch.GameData.instance.isGame5On = false;
            GameBaseData.OpenOtherGame(4, (data) => {});
        }
        onClickAward55() {
            touch.GameData.instance.isGame6On = false;
            GameBaseData.OpenOtherGame(5, (data) => {});
        }
        onClickClose() {
            this.close();
        }
    }
    touch.MoreGameDialog = MoreGameDialog;
})(touch || (touch = {}));