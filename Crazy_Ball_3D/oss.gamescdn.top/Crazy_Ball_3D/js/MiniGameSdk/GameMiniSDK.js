class GameMiniSDK {
    static GetInstance() {
        if (this._instance == null) {
            this._instance = new GameMiniSDK();
        }
        return this._instance;
    }
    initSDK(appID, loglevel) {
        if (MiniGameSdkInstant != null) {
            console.log('初始化miniSDK');
            var isLocalTest = false;
            MiniGameSdkInstant.testLocalFBApi(isLocalTest);
            console.error("isLocalTest ========>" + isLocalTest);
            MiniGameSdkInstant.onFacebookInited();
            MiniGameSdkInstant.init(appID, loglevel);
            MiniGameSdkInstant.preloadResource().then(function() {}).catch(function(e) {
                console.error("[MiniGameCocosJs] Preload Resource Failed: ", e);
            });
        }
    }
    addMiniSDK_Btn(btnType, posX, posY) {
        if (MiniGameSdkInstant.isResourceReady()) {
            switch (btnType) {
                case "home_play":
                    MiniGameSdkInstant.showPlayButton({
                        x: posX,
                        y: posY
                    });
                    break;
                case "home_center":
                    MiniGameSdkInstant.showGameCenterButton({
                        x: posX,
                        y: posY
                    });
                    break;
                case "home_banner":
                    MiniGameSdkInstant.getBottomBanner()._bgNode.width = Laya.stage.width * 2;
                    MiniGameSdkInstant.showBottomBanner();
                    break;
            }
        }
    }
    hidePlayButton() {
        MiniGameSdkInstant.hidePlayButton();
    }
    hideGameCenterButton() {
        MiniGameSdkInstant.hideGameCenterButton();
    }
    hideBottomBanner() {
        MiniGameSdkInstant.hideBottomBanner(false);
    }
    getBannerBackgroundHeight() {
        return MiniGameSdkInstant.getBottomBannerHeight();
    }
}