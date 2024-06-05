var touch;
(function(touch) {
    class Button extends Laya.Button {
        constructor() {
            super();
            this._toScale = 0.9;
            this._defaultScaleX = -1;
            this._defaultScaleY = -1;
        }
        destroy() {
            Laya.Tween.clearAll(this);
            if (this.clickHandler != null) {
                this.clickHandler.recover();
                this.clickHandler = null;
            }
            super.destroy();
        }
        setDefaultScale(scaleX, scaleY) {
            this._defaultScaleX = scaleX;
            this._defaultScaleY = scaleY;
        }
        onMouse(e) {
            super.onMouse(e);
            if (-1 == this._defaultScaleX) {
                this._defaultScaleX = this.scaleX;
                this._defaultScaleY = this.scaleY;
            }
            if (Laya.Event.MOUSE_DOWN == e.type) {
                touch.SoundManager.playSound("res/sounds/press_button.mp3");
                Laya.Tween.to(this, {
                    scaleX: this._defaultScaleX * this._toScale,
                    scaleY: this._defaultScaleX * this._toScale
                }, 50);
            } else if (Laya.Event.MOUSE_UP == e.type || Laya.Event.MOUSE_OUT == e.type) {
                Laya.Tween.to(this, {
                    scaleX: this._defaultScaleX,
                    scaleY: this._defaultScaleX
                }, 50);
            }
        }
    }
    touch.Button = Button;
})(touch || (touch = {}));