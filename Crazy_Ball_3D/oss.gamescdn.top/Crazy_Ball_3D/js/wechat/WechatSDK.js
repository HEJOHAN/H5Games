var touch;
(function(touch) {
    class WechatSDK {
        constructor() {
            this.userInfo = null;
            this.openID = "";
            this._wx = null;
            this.userInfo = new touch.WechatUserInfo();
            this._wx = Laya.Browser.window.wx;
        }
        destroy() {
            this.userInfo = null;
            this._wx = null;
        }
        vibrate(isLong = false) {
            isLong ? this._wx.vibrateLong({}) : this._wx.vibrateShort({});
        }
        showToast(msg, duration = 500) {
            this._wx.showToast({
                title: msg,
                duration: duration
            });
        }
        hideToast() {
            this._wx.hideToast({});
        }
        showLoading(title, mask) {
            this._wx.showLoading({
                title: title,
                mask: mask
            });
        }
        hideLoading() {
            this._wx.hideLoading({});
        }
        login() {
            let self = this;
            this._wx.login({
                success: function(res) {
                    var url = "https://wxsgame.gamater.com/miniprogram/minilogin?appid=" + WechatSDK.APP_ID +
                        "&js_code=" + res.code;
                    self._wx.request({
                        url: url,
                        fail: function(res) {
                            console.log("获取openID失败：" + JSON.stringify(res));
                        },
                        success: function(res) {
                            if (res.statusCode == 200) {
                                if (res.data.openid && res.data.openid.length > 0) {
                                    self.userInfo.openId = res.data.openid;
                                    self.openID = res.data.openid;
                                    console.log("获取openID成功");
                                    Laya.Browser.window.wx.request({
                                        url: WechatSDK.SERVER + "get-data?id=" + self.openID,
                                        method: "GET",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        fail: function(res) {
                                            console.log("获取个人数据失败：" + JSON.stringify(res));
                                            touch.GameData.instance.record = 0;
                                        },
                                        success: function(res) {
                                            if (res.statusCode == 200) {
                                                let data = res.data;
                                                if (data.err) {
                                                    console.log("获取个人数据失败：", data.err);
                                                    touch.GameData.instance.record = 0;
                                                } else {
                                                    console.log("获取个人数据成功：" + data.data);
                                                    touch.GameData.instance.record = data.data.score;
                                                }
                                            } else {
                                                console.log("获取个人数据失败：" + JSON.stringify(res));
                                                touch.GameData.instance.record = 0;
                                            }
                                        }
                                    });
                                    Laya.Browser.window.wx.request({
                                        url: WechatSDK.SERVER + "get-user-rank?id=" + self.openID,
                                        method: "GET",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        fail: function(res) {
                                            console.log("获取个人排行失败：" + JSON.stringify(res));
                                        },
                                        success: function(res) {
                                            if (res.statusCode == 200) {
                                                let data = res.data;
                                                if (data.err) {
                                                    console.log("获取个人排行失败：", data.err);
                                                } else {
                                                    console.log("获取个人排行成功：" + data.data);
                                                    touch.GameData.instance.rank = data.data.rank + 1;
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                    console.log("微信登录成功");
                },
                fail: function(res) {
                    console.log("微信登录失败");
                }
            });
        }
        getUserInfo() {
            let self = this;
            this._wx.getUserInfo({
                success: function(res) {
                    var userInfo = res.userInfo;
                    self.userInfo.avatarUrl = userInfo.avatarUrl;
                    self.userInfo.city = userInfo.city;
                    self.userInfo.country = userInfo.country;
                    self.userInfo.gender = userInfo.gender;
                    self.userInfo.language = userInfo.language;
                    self.userInfo.nickName = userInfo.nickName;
                    self.userInfo.openId = userInfo.openId;
                    self.userInfo.province = userInfo.province;
                }
            });
        }
        shareAppMessage(title, imageUrl, callback = null, query = "") {
            this._wx.shareAppMessage({
                title: title,
                imageUrl: imageUrl,
                query: query,
                fail: function(res) {
                    if (callback) {
                        console.log("转发失败");
                        callback(false);
                    }
                },
                success: function(res) {
                    if (callback) {
                        console.log("转发成功");
                        callback(true);
                    }
                }
            });
        }
        onShareAppMessage(title, imageUrl) {
            this._wx.onShareAppMessage(function() {
                return {
                    title: title,
                    imageUrl: imageUrl
                };
            });
        }
        shareScreen(title = null, x = 0, y = 0, width, quality = 0.7) {
            let widthScale = Laya.Browser.width * Laya.stage.clientScaleX;
            let heightScale = Laya.Browser.height * Laya.stage.clientScaleY;
            let originCanvas = Laya.stage.drawToCanvas(widthScale, heightScale, 0, 0);
            let shareCanvas = originCanvas.getCanvas();
            let height = width / 5 * 4;
            shareCanvas.toTempFilePath({
                x: x,
                y: y,
                width: width,
                height: height,
                fileType: "jpg",
                quality: quality,
                success: function(res) {
                    Laya.Browser.window.wx.shareAppMessage({
                        title: title,
                        imageUrl: res.tempFilePath,
                        fail: function(res) {
                            console.log("截屏分享失败");
                        },
                        success: function(res) {
                            console.log("截屏分享成功");
                        }
                    });
                }
            });
        }
        updateScore(score) {
            var kvDataList = new Array();
            let date = new Date().getTime();
            var scoreValue = JSON.stringify({
                "wxgame": {
                    "score": score,
                    "update_time": date.toString(),
                }
            });
            kvDataList.push({
                key: "score",
                value: scoreValue
            });
            this.setUserCloudStorage(kvDataList);
        }
        setUserCloudStorage(param) {
            this._wx.setUserCloudStorage({
                KVDataList: param,
                success: r => {
                    console.log("上传用户托管数据成功");
                }
            });
        }
        removeUserCloudStorage(keyList) {
            this._wx.removeUserCloudStorage({
                keyList: keyList,
                success: r => {
                    console.log("删除用户托管数据成功");
                }
            });
        }
        postMessage(data) {
            this._wx.getOpenDataContext().postMessage(data);
        }
    }
    WechatSDK.APP_ID = "wxa69b5981432ef11e";
    WechatSDK.SERVER = "https://crazyball2.gamater.com:9999/crazyball/";
    touch.WechatSDK = WechatSDK;
})(touch || (touch = {}));