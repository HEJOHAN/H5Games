const INTERSTITIAL_PLACEMENT_ID = '465192161098602_467871400830678';
const REWARDED_PLACEMENT_ID = '465192161098602_597188004565683';
var preloadedRewardedVideo;
var preloadedInterstitial;

function LoadInter() {
    console.log('Interstitial preloaded');
    return;
    var supportedAPIs = FBInstant.getSupportedAPIs();
    if (supportedAPIs.includes('getInterstitialAdAsync')) {
        preloadedInterstitial = null;
        FBInstant.getInterstitialAdAsync(INTERSTITIAL_PLACEMENT_ID, ).then(function(interstitial) {
            preloadedInterstitial = interstitial;
            return preloadedInterstitial.loadAsync();
        }).then(function() {
            console.log('Interstitial preloaded')
        }).catch(function(err) {
            console.error('Interstitial failed to preload: ' + err.message);
        });
    } else {}
}

function ShowInter(complete) {
    console.log("ShowInter");
    if (preloadedInterstitial == null || preloadedInterstitial == undefined) {
        complete();
        return;
    }
    preloadedInterstitial.showAsync().then(function() {
        console.log('Interstitial ad finished successfully');
        LoadInter();
        complete();
        SetMute(false);
    }).catch(function(e) {
        console.error(e.message);
        LoadInter();
        complete();
    });
}

function LoadRewarded() {
    console.log('Rewarded Video preloaded');
    return;
    var supportedAPIs = FBInstant.getSupportedAPIs();
    if (supportedAPIs.includes('getRewardedVideoAsync')) {
        preloadedRewardedVideo = null;
        FBInstant.getRewardedVideoAsync(REWARDED_PLACEMENT_ID).then(function(rewarded) {
            preloadedRewardedVideo = rewarded;
            return preloadedRewardedVideo.loadAsync();
        }).then(function() {
            console.log('Rewarded Video preloaded')
        }).catch(function(err) {
            console.error('Rewarded Video failed to preload: ' + err.message);
        });
    } else {}
}

function ShowRewarded(success, failure) {
    if (preloadedRewardedVideo == null || preloadedRewardedVideo == undefined) {
        if (failure)
            failure();
        return;
    }
    preloadedRewardedVideo.showAsync().then(function() {
        console.log('Rewarded Video ad finished successfully');
        LoadRewarded();
        success();
    }).catch(function(e) {
        console.error(e.message);
        LoadRewarded();
        if (failure)
            failure();
    });
}