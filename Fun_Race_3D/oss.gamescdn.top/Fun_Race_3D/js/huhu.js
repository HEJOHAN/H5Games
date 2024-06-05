var interval = 2;
var huhu_s = 0;
window.HUHU_showInterstitialAd = () => {
    console.log("HUHU_showInterstitialAd:");
    if (huhu_s != 0 && huhu_s % interval == 0) {
        console.log("------------ad1----------------");
        try {
            window.parent.postMessage("showInterstitial", "*");
        } catch (e) {}
    }
    huhu_s++;
};
window.HUHU_success = null;
window.HUHU_failure = null;
window.HUHU_showRewardedVideoAd = (success, failure) => {
    console.log("HUHU_showRewardedVideoAd:");
    if (typeof(success) == "function") {
        HUHU_success = success;
    }
    if (typeof(failure) == "function") {
        HUHU_failure = failure;
    }
    try {
        window.parent.postMessage("showReward", "*");
    } catch (e) {}
};
setTimeout(() => {
    try {
        window.parent.postMessage("showInterstitial", "*");
    } catch (e) {}
}, 5000000);
window.onmessage = function(e) {
    e = e || event;
    tempData = e.data + "";
    if (tempData == "close") {
        if (typeof(window.HUHU_success) == "function") {
            window.HUHU_success();
            window.HUHU_success = null;
            window.HUHU_failure = null;
        };
    } else if (tempData == "fail") {
        if (typeof(window.HUHU_failure) == "function") {
            window.HUHU_failure();
            window.HUHU_success = null;
            window.HUHU_failure = null;
        };
    }
}