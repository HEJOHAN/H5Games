var touch;
(function(touch) {
    class MatchDialog extends ui.MatchDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._playerInfos = null;
            this._curTime = 0;
            this._curHeld = 0;
            this._main = main;
            this._playerInfos = new Array();
            let self = touch.Pool.get("MatchPlayerData", touch.MatchPlayerData);
            if (touch.GameModule.wechatSDK != null) {
                self.icon = touch.GameData.instance.userInfo.avatarUrl;
            } else {
                self.icon = "head/1.png";
            }
            self.matchTime = 0;
            this._playerInfos.push(self);
            this._curHeld = touch.MathUtil.randomInt(0, 11);
            for (let index = 0; index < 11; index++) {
                let enemy = touch.Pool.get("MatchPlayerData", touch.MatchPlayerData);
                enemy.icon = "head/" + ((this._curHeld + index) % 20 + 1) + ".png";
                enemy.matchTime = touch.MathUtil.randomInt(0, 3000);
                this._playerInfos.push(enemy);
            }
            this._curTime = 0;
            this.listPlayer.array = new Array(this._playerInfos.length);
            this.listPlayer.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            Laya.timer.frameLoop(1, this, this.onLoop);
        }
        destroy() {
            super.destroy();
        }
        onRenderItem(cell, index) {
            if (null == cell || index >= this._playerInfos.length) {
                return;
            }
            let playerInfo = this._playerInfos[index];
            cell.setData(playerInfo.icon, playerInfo.matchTime);
        }
        onLoop() {
            this._curTime += Laya.timer.delta;
            let length = this._playerInfos.length;
            let matchNum = 0;
            for (let index = 0; index < length; index++) {
                const element = this._playerInfos[index];
                if (element.matchTime <= this._curTime) {
                    matchNum++;
                }
            }
            let progress = matchNum * 100 / length;
            this.tfProgress.text = Math.floor(progress) + "%";
            this.pbProgress.value = progress / 100;
            if (matchNum >= length) {
                Laya.timer.clear(this, this.onLoop);
                Laya.timer.once(500, this._main, this._main.event, [touch.GameEvent.MATCH_OVER]);
            }
        }
    }
    touch.MatchDialog = MatchDialog;
})(touch || (touch = {}));