class LayaAir3D {
    constructor() {
        this._resCount = 0;
        Laya3D.init(touch.Config.SCREEN_WIDTH, touch.Config.SCREEN_HEIGHT, true);
        Laya.SoundManager.useAudioMusic = false;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        UIConfig.closeDialogOnSide = false;
        if (typeof loadRuntime !== 'undefined') {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        }
        if (typeof getAdapterInfo !== "undefined") {
            var stage = Laya.stage;
            var info = getAdapterInfo({
                width: touch.Config.SCREEN_WIDTH,
                height: touch.Config.SCREEN_HEIGHT,
                scaleMode: "fixedwidth"
            });
            stage.designWidth = info.w;
            stage.designHeight = info.h;
            stage.width = info.rw;
            stage.height = info.rh;
            stage.scale(info.scaleX, info.scaleY);
        }
        touch.SoundManager.init();
        Laya.loader.load(["res/atlas/core.atlas", "res/atlas/index.atlas", "res/atlas/game.atlas", "res/atlas/head.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete));
        let yahei120 = new Laya.BitmapFont();
        yahei120.loadFont("font/yahei120.fnt", new Laya.Handler(this, this.onFontLoaded, ["yahei120", yahei120]));
        let yahei = new Laya.BitmapFont();
        yahei.loadFont("font/yahei.fnt", new Laya.Handler(this, this.onFontLoaded, ["yahei", yahei]));
    }
    onAtlasLoadComplete(result) {
        if (!result) {
            alert("资源加载失败！");
            return;
        }
        this._resCount++;
        this.checkLoadedComplete();
    }
    onFontLoaded(name, font) {
        Laya.Text.registerBitmapFont(name, font);
        this._resCount++;
        this.checkLoadedComplete();
    }
    checkLoadedComplete() {
        if (this._resCount >= 3) {
            LayaAir3D.gameModule = new touch.GameModule();
        } else {}
    }
}
new LayaAir3D();