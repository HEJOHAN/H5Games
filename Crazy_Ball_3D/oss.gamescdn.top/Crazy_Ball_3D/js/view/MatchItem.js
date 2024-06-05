var touch;
(function(touch) {
    class MatchItem extends ui.MatchItemUI {
        constructor(main) {
            super();
        }
        destroy() {
            Laya.timer.clear(this, this.onOver);
            super.destroy();
        }
        setData(icon, time) {
            Laya.timer.clear(this, this.onOver);
            this.imgHead.skin = icon;
            if (0 == time) {
                this.imgHead.visible = true;
                this.imgWait.visible = false;
            } else {
                this.imgHead.visible = false;
                this.imgWait.visible = true;
                this.aniWait.play(0, true);
                Laya.timer.once(time, this, this.onOver);
            }
        }
        PlayAnim() {
            this.x = (Laya.stage.width - this.width) / 2;
            this.y = (Laya.stage.height - this.height) / 2;
            this.imgHead.visible = false;
            this.aniWait.play(0, true);
        }
        onOver() {
            this.imgHead.visible = true;
            this.imgWait.visible = false;
            this.aniWait.stop();
        }
    }
    touch.MatchItem = MatchItem;
})(touch || (touch = {}));