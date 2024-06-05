var touch;
(function(touch) {
    class RankView extends ui.RankViewUI {
        constructor() {
            super();
            this._rankTexture = null;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            if (touch.GameModule.wechatSDK != null) {
                Laya.Browser.window.sharedCanvas.width = this.spriteRank.width;
                Laya.Browser.window.sharedCanvas.height = this.spriteRank.height;
                touch.GameModule.wechatSDK.postMessage({
                    message: "showFriendRank",
                });
                Laya.timer.once(100, this, this.updateRankView);
            }
        }
        updateRankView() {
            this._rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
            this._rankTexture.bitmap.alwaysChange = true;
            this.spriteRank.graphics.drawTexture(this._rankTexture, 0, 0, this.spriteRank.width, this.spriteRank.height);
        }
        destroy() {
            if (this._rankTexture != null) {
                this._rankTexture.bitmap.alwaysChange = false;
                this._rankTexture.destroy();
                this._rankTexture = null;
            }
            this.spriteRank.graphics.clear();
            super.destroy();
        }
        onClose() {
            this.event(Laya.Event.CLOSE);
        }
    }
    touch.RankView = RankView;
})(touch || (touch = {}));