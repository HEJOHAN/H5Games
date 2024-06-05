var touch;
(function(touch) {
    class Notice extends ui.NoticeUI {
        constructor() {
            super();
        }
        destroy() {
            super.destroy();
        }
        clear() {}
        static show(msg) {
            let notice = touch.Pool.get("Notice", Notice);
            notice.setData(msg);
            notice.zOrder = 1000;
            Laya.stage.addChild(notice);
        }
        static showUnopen() {
            Notice.show("Coming soon");
        }
        static showLoading() {}
        static closeLoading() {}
        setData(msg) {
            this.tfNotice.text = msg;
            this.tfNotice.width = this.tfNotice.textField.textWidth;
            let bgWidth = this.tfNotice.textField.textWidth + 40;
            bgWidth = bgWidth < 200 ? 200 : bgWidth;
            this.imgBG.width = bgWidth;
            this.x = (Laya.stage.width - this.width) / 2;
            this.y = (Laya.stage.height - this.height) / 2;
            this.alpha = 0;
            Laya.Tween.to(this, {
                alpha: 1,
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onAppear));
        }
        setData1(msg) {
            this.tfNotice.text = msg;
            this.tfNotice.width = this.tfNotice.textField.textWidth;
            let bgWidth = this.tfNotice.textField.textWidth + 40;
            bgWidth = bgWidth < 200 ? 200 : bgWidth;
            this.imgBG.width = bgWidth;
            this.x = (Laya.stage.width - this.width) / 2;
            this.y = (Laya.stage.height - this.height) / 2;
            this.alpha = 0;
            Laya.Tween.to(this, {
                alpha: 1,
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onAppear1));
        }
        onAppear() {
            Laya.Tween.to(this, {
                y: this.y - 60
            }, 200, null, Laya.Handler.create(this, this.onWaitDisappear), 600);
        }
        onAppear1() {}
        onWaitDisappear() {
            Laya.Tween.to(this, {
                alpha: 0,
                y: this.y - 60
            }, 300, null, Laya.Handler.create(this, this.onDisappear));
        }
        onDisappear() {
            if (this != null) {
                touch.Pool.recover("Notice", this);
                Laya.stage.removeChild(this);
            }
        }
    }
    touch.Notice = Notice;
})(touch || (touch = {}));