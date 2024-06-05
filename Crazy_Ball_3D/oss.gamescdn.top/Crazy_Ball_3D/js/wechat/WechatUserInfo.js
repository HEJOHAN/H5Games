var touch;
(function(touch) {
    class WechatUserInfo {
        constructor() {
            this.openId = "";
            this.avatarUrl = "";
            this.province = "";
            this.city = "";
            this.country = "";
            this.gender = 0;
            this.language = "";
            this.nickName = "";
        }
    }
    touch.WechatUserInfo = WechatUserInfo;
})(touch || (touch = {}));