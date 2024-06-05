class FBSdkMamager {
    constructor() {
        this.isLoadInterstitialAD = false;
        this.loadedInterstitialAD = null;
        this.loadInterstitialADOne = null;
        this.errorLoadInterstitialCount = 0;
        this.interstitialKeyArr = [];
        this.isPlayInterstitialAD = false;
        this.intertitialAdsIds = ["792794774390776_946149259055326", "792794774390776_1150570078613242", "792794774390776_1150570448613205", "792794774390776_1150570541946529", "792794774390776_1150570668613183", "792794774390776_1150570711946512", "792794774390776_1150570735279843", "792794774390776_1150570798613170", "792794774390776_1150570841946499", "792794774390776_1150572175279699"];
        this.fbRankData = null;
        this.fbMulRankData = null;
    }
    static GetInstance() {
        if (this._instance == null) {
            this._instance = new FBSdkMamager();
        }
        return this._instance;
    }
    SetMain(main) {
        this._main = main;
        this.fbRankData = new FBrankData();
        this.fbRankData.initialize();
        this.fbMulRankData = new FBMulrankData();
        this.fbMulRankData.initialize();
    }
    Init() {
        if (GameBaseData.isFBSDK == true) {
            this.loadInterstitial();
            setInterval(this.loadInterstitial.bind(this), 20000);
        }
    }
    addShowLoading() {
        this._main.event(touch.GameEvent.SHOW_LOADING);
    }
    removeShowLoading() {
        this._main.event(touch.GameEvent.CLOSE_LOADING);
    }
    PlayRewardVedio(type, callfun, errorfun) {
        if (GameBaseData.isFBSDK == false) {
            if (callfun != null) {
                callfun();
            }
            return;
        }
        var RewardedVideoAd = null;
        this.addShowLoading();
        var that = this;
        FBInstant.getRewardedVideoAsync(type).then(function(rewardedVideo) {
            console.log("RewardedVideo开始加载");
            RewardedVideoAd = rewardedVideo;
            return RewardedVideoAd.loadAsync();
        }).then(function() {
            console.log("RewardedVideo加载成功回调");
            return RewardedVideoAd.showAsync();
        }).then(function() {
            console.log("RewardedVideo广告显示成功");
            that.removeShowLoading();
            if (callfun != null) {
                callfun();
            }
        }).catch(function(e) {
            that._main.event(touch.GameEvent.CLOSE_LOADING);
            if (errorfun != null) {
                errorfun();
            }
            console.log("RewardedVideo广告显示失败");
            console.log("加载视频广告失败" + e.message);
            console.log(e.code);
        });
    }
    loadInterstitial() {
        if (this.isPlayInterstitialAD == true) {
            this.isPlayInterstitialAD = false;
            return;
        }
        if (this.isLoadInterstitialAD == true) {
            return;
        }
        if (this.loadedInterstitialAD != null) {
            return;
        }
        if (this.errorLoadInterstitialCount >= 3) {
            if (this.loadInterstitialADOne == true) {
                this.loadInterstitialADOne = false;
                this.PreloadInterstitial();
            }
        } else {
            this.loadInterstitialADOne = false;
            this.PreloadInterstitial();
        }
    }
    PreloadInterstitial() {
        this.isLoadInterstitialAD = true;
        if (this.interstitialKeyArr.length <= 0) {
            this.interstitialKeyArr = this.intertitialAdsIds.slice();
            this.interstitialKeyArr.sort(function(a, b) {
                return Math.random() - 0.5;
            });
        }
        var interstitialKey = this.interstitialKeyArr.shift();
        var that = this;
        var preloadedRewardedVideo;
        FBInstant.getInterstitialAdAsync(interstitialKey).then(function(rewarded) {
            console.log("加载插屏广告" + interstitialKey);
            preloadedRewardedVideo = rewarded;
            return preloadedRewardedVideo.loadAsync();
        }).then(function() {
            console.log("加载插屏广告加载成功");
            that.loadedInterstitialAD = preloadedRewardedVideo;
            that.isLoadInterstitialAD = false;
        }).catch(function(err) {
            that.isLoadInterstitialAD = false;
            that.errorLoadInterstitialCount++;
            console.log("加载插屏广告加载失败" + err.message);
            console.log(err.code);
        });
    }
    ShowInterstitial(callback, failfun) {
        if (GameBaseData.isFBSDK == false) {
            if (callback != null) {
                callback();
            }
            return;
        }
        var that = this;
        that.loadInterstitialADOne = true;
        if (that.loadedInterstitialAD != null) {
            that.loadedInterstitialAD.showAsync().then(function() {
                console.log("InterstitialAd广告显示成功");
                if (callback != null) {
                    callback();
                }
                that.loadedInterstitialAD = null;
                that.isPlayInterstitialAD = true;
            }).catch(function(e) {
                that.loadedInterstitialAD = null;
                that.isPlayInterstitialAD = true;
                that.errorLoadInterstitialCount++;
                console.log("加载插屏广告加载失败" + e.message);
                console.log(e.code);
                if (failfun != null) {
                    failfun();
                }
            });
        } else {
            console.log("插屏广告尚未加载完成");
            if (failfun != null) {
                failfun();
            }
        }
    }
}
FBSdkMamager.reliveRewardVedioAdsId = "792794774390776_1158346281168955";
FBSdkMamager.doubleRewardVedioAdsId = "792794774390776_1158346647835585";
FBSdkMamager.diamondRewardVedioAdsId = "792794774390776_1158346367835613";