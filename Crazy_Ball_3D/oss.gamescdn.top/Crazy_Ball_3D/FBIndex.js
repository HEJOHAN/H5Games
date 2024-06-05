if (typeof(FBInstant) != "undefined" && FBInstant != null) {
    FBInstant.initializeAsync().then(function() {
        var facebookPlayerid = FBInstant.player.getID();
        FBInstant.logEvent('initializeAsync_facebookPlayerid', 1, {
            initializeAsync_facebookPlayerid: 'initializeAsync_facebookPlayerid'
        });
        console.log("拉取到用户登录信息，FBInstant.initializeAsync回调。玩家 playerid=", facebookPlayerid);
    });
}