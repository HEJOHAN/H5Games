function adService() {
    this.loadRewardState = -1;
    this.n = -1;
    this.a = 1;
    this.o = 2;
    this.l = 3;
    this.prompt_ = null;
}
adService.prototype.startPreLoad = function() {
    setInterval(this.checkHasAd.bind(this), 10000);
    this.checkHasAd();
}, adService.prototype.checkHasAd = function() {
    var t = this;
    this.loadRewardedVideo()
}, adService.prototype.HasAd = function() {
    return this.loadRewardState == this.o;
}
adService.prototype.loadRewardedVideo = function(e) {
    var t = this;
    t.loadRewardState = t.o
}, adService.prototype.showRewardedVideo = function(e, t) {
    var i = this;
    return new Promise(function(ts, rs) {
        HUHU_showRewardedVideoAd(() => {
            ts();
        }, () => {
            i.prompt("No ads temporarily.");
        })
    });
}, adService.prototype.prompt = function(msg, duration) {
    if (!this.prompt_) {
        const sprite = new Laya.Sprite();
        const width = Laya.stage.width - 40;
        const height = 30;
        sprite.width = width;
        sprite.height = height;
        sprite.pivotX = width / 2;
        sprite.pivotY = height / 2;
        sprite.x = Laya.stage.width / 2;
        sprite.y = Laya.stage.height / 3;
        var path = [
            ["moveTo", 0, 0],
            ["lineTo", width, 0],
            ["lineTo", width, 35],
            ["lineTo", 0, 35]
        ];
        sprite.graphics.drawPath(0, 0, path, {
            fillStyle: "#424444"
        }, {
            "strokeStyle": "#fdffff",
            "lineWidth": "1"
        });
        const label = sprite.addChild(new Laya.Label());
        label.anchorX = label.anchorY = 0.5;
        label.width = sprite.width, label.height = sprite.height;
        label.x = sprite.width / 2;
        label.y = label.height / 2 + 5;
        label.fontSize = 32, label.align = "center", label.color = "#ffffff", label.wordWrap = true;
        sprite.zOrder = 2e3, Laya.stage.addChild(sprite);
        const timeLine = new Laya.TimeLine();
        timeLine.addLabel("scale", 0).to(sprite, {
            scaleX: 1.2,
            scaleY: 1.2,
            alpha: 1
        }, 100, null, 0).addLabel("back", 0).to(sprite, {
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 100, null, 0).addLabel("show", 0).to(sprite, {
            alpha: 1
        }, 1e3, null, 0).addLabel("hide", 0).to(sprite, {
            alpha: 0
        }, 1e3, null, 0), timeLine.on(Laya.Event.COMPLETE, this, () => {
            sprite.alpha = 0;
            sprite.visible = false;
        });
        sprite.alpha = 0;
        sprite.visible = false;
        this.prompt_ = function(msg) {
            label.text = msg;
            sprite.visible = true;
            timeLine.play(0, false);
        };
    }
    this.prompt_(msg);
}