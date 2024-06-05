var touch;
(function(touch) {
    class GameLoading extends ui.GameLoadingUI {
        constructor(main) {
            super();
            this._main = null;
            this._main = main;
        }
        PlayAnim() {
            this.matchView.imgHead.visible = false;
            this.matchView.imgMask.visible = true;
            this.matchView.imgFrame.visible = false;
            this.matchView.aniWait.play(0, true);
        }
    }
    touch.GameLoading = GameLoading;
})(touch || (touch = {}));