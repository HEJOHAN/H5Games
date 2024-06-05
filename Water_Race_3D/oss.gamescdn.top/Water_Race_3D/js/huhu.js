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

function promptTxT(msg, duration) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement('div');
        this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 2000 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = '1';
    setTimeout(function() {
        var d = 0.5;
        this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        this.prompt_.style.opacity = '0';
        this.prompt_.style.display = "none";
    }.bind(this), duration);
}