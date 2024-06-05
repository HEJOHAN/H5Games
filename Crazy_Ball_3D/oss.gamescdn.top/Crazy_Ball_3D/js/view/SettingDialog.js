var touch;
(function(touch) {
    class SettingDialog extends ui.SettingDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._main = main;
            this.cbMusic.selected = touch.GameData.instance.isMusicOn;
            this.cbSound.selected = touch.GameData.instance.isSoundOn;
            this.cbVibrate.selected = touch.GameData.instance.isVibrateOn;
            this.cbMusic.clickHandler = Laya.Handler.create(this, this.onClickMusic, null, false);
            this.cbSound.clickHandler = Laya.Handler.create(this, this.onClickSound, null, false);
            this.cbVibrate.clickHandler = Laya.Handler.create(this, this.onClickVibrate, null, false);
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClickClose, null, false);
        }
        destroy() {
            if (this.cbMusic.clickHandler != null) {
                this.cbMusic.clickHandler.recover();
                this.cbMusic.clickHandler = null;
            }
            if (this.cbSound.clickHandler != null) {
                this.cbSound.clickHandler.recover();
                this.cbSound.clickHandler = null;
            }
            if (this.cbVibrate.clickHandler != null) {
                this.cbVibrate.clickHandler.recover();
                this.cbVibrate.clickHandler = null;
            }
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            super.destroy();
        }
        onClickMusic() {
            touch.SoundManager.setMusicVolume(this.cbMusic.selected ? 1 : 0);
            touch.GameData.instance.isMusicOn = this.cbMusic.selected;
        }
        onClickSound() {
            touch.SoundManager.setSoundVolume(this.cbSound.selected ? 1 : 0);
            touch.GameData.instance.isSoundOn = this.cbSound.selected;
        }
        onClickVibrate() {
            touch.GameData.instance.isVibrateOn = this.cbVibrate.selected;
        }
        onClickClose() {
            this.close();
        }
    }
    touch.SettingDialog = SettingDialog;
})(touch || (touch = {}));