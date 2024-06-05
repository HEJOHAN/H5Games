var touch;
(function(touch) {
    class FriendRankDialog extends ui.FriendRankDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._datas = null;
            this._curShowIndex = 0;
            this._isReqing1 = false;
            this._isReqing2 = false;
            this._modelType = 0;
            this._main = main;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.btnFBShareFriend.clickHandler = Laya.Handler.create(this, this.onShareFriend, null, false);
            this.gModel0.clickHandler = Laya.Handler.create(this, this.onGModel0, null, false);
            this.gModel1.clickHandler = Laya.Handler.create(this, this.onGModel1, null, false);
            this.listRank.vScrollBarSkin = "";
            this.listRank.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.listRank.array = new Array(0);
            this._datas = new Array();
            this._modelType = GameBaseData.modelType;
            this._setGModelType(this._modelType == 0);
            this._isReqing1 = this._isReqing2 = false;
            if (FriendRankDialog._openTimes > 5) {
                FriendRankDialog._openTimes = 0;
                FriendRankDialog._isReqAllData1 = FriendRankDialog._isReqAllData2 = false;
            }
            this.viewMySelf.btn_fbshare.clickHandler = Laya.Handler.create(this, () => {
                if (GameBaseData.isDebug) {
                    console.log('click handler');
                }
                this.touchBtn_FbShare(GameBaseData.myRank_friend, this.viewMySelf);
            }, null, false);
            this._initTop3Event();
        }
        _initTop3Event() {
            for (let index = 0; index < 3; index++) {
                let element = this.getChildByName("boxRank" + index);
                let btn = element.getChildByName("BtnFBShare");
                let that = this;
                btn.on(Laya.Event.CLICK, this, function() {
                    if (GameBaseData.isDebug) {
                        console.log('click handler ' + index);
                    }
                    that.touchBtn_FbShareTop3(btn, index);
                });
            }
        }
        destroy() {
            this._main = null;
            if (this.btnClose.clickHandler != null) {
                this.btnClose.clickHandler.recover();
                this.btnClose.clickHandler = null;
            }
            if (this.listRank.renderHandler != null) {
                this.listRank.renderHandler.recover();
                this.listRank.renderHandler = null;
            }
            this._datas.splice(0, this._datas.length);
            this._datas = null;
            super.destroy();
        }
        onClose() {
            touch.Notice.closeLoading();
            this._main.event(touch.GameEvent.CLOSE_RANK);
        }
        onShareFriend() {
            if (GameBaseData.isFBSDK) {
                GameBaseData.FBEvent(21);
                var data = {};
                let that = this;
                GameBaseData.FBShareFriend(data, () => {
                    if (GameBaseData.isDebug) {
                        console.log("分享成功");
                    }
                    that.joinGamePK();
                    GameBaseData.FBEvent(35);
                });
            } else {
                if (GameBaseData.isDebug) {
                    console.log("onShareFriend");
                }
            }
        }
        onGModel0() {
            this._setGModelType(true);
            this.onOpened();
        }
        onGModel1() {
            this._setGModelType(false);
            this.listRank.array = new Array(0);
            this._datas = new Array();
            this.onOpened();
        }
        _setGModelType(isModel0) {
            var element = this.gModel0.getChildByName("off");
            element.visible = !isModel0;
            element = this.gModel0.getChildByName("on");
            element.visible = isModel0;
            element = this.gModel1.getChildByName("off");
            element.visible = isModel0;
            element = this.gModel1.getChildByName("on");
            element.visible = !isModel0;
            this._modelType = isModel0 ? 0 : 1;
        }
        onRenderItem(cell, index) {
            if (null == cell || null == this._datas || (index + 3) >= this._datas.length) {
                return;
            }
            let data = this._datas[index + 3];
            cell.imgHead.skin = data.icon;
            cell.tfName.text = data.name;
            cell.tfRank.text = "" + (data.rank + 1);
            cell.tfScore.text = data.score.toString();
            cell.clipBG.index = (data.id == GameBaseData.UID) ? 1 : 0;
            cell.fb_share1.visible = (data.id == GameBaseData.UID);
            let shareType = 0;
            if (cell.clipBG.index == 1) {
                cell.fb_share2.visible = false;
                cell.fb_share3.visible = false;
                shareType = 1;
            } else {
                if (GameBaseData.getUidIsShare(data.id, this._modelType)) {
                    cell.fb_share2.visible = true;
                    cell.fb_share3.visible = false;
                    shareType = 2;
                } else {
                    cell.fb_share2.visible = false;
                    cell.fb_share3.visible = true;
                    shareType = 3;
                }
            }
            cell.btn_fbshare.offAll(Laya.Event.CLICK);
            cell.btn_fbshare.on(Laya.Event.CLICK, this, () => {
                this.touchBtn_FbShare(data, cell);
            });
        }
        touchBtn_FbShare(rankData, uiItem) {
            if (GameBaseData.isDebug) {
                console.log('click handler rankData===>');
                console.log(rankData);
            }
            if (uiItem.clipBG.index == 1) {
                if (GameBaseData.isDebug) {
                    console.log('调起分享sdk');
                }
                if (GameBaseData.isFBSDK) {
                    var data = {
                        contextType: 0,
                        contextID: null,
                        contextFromID: FBInstant.player.getID()
                    };
                    let score = this._modelType == 0 ? touch.GameData.instance.record : touch.GameData.instance.record2 + "m";
                    let info = this._modelType == 0 ? "MULTI" : "SINGLE";
                    GameBaseData.FBShare_Custom(score, info, () => {
                        if (GameBaseData.isDebug) {
                            console.log('调起分享sdk成功');
                        }
                    });
                }
            } else {
                if (uiItem.fb_share2.visible) {
                    if (GameBaseData.isDebug) {
                        console.log('调起挑战sdk');
                    }
                    if (GameBaseData.isFBSDK) {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk 挑战者id=' + rankData.id + " name:" + rankData.name);
                        }
                        GameBaseData.PKFriend(rankData.id, () => {
                            this.joinGamePK();
                            GameBaseData.FBEvent(33);
                        });
                    } else {
                        this.joinGamePK();
                    }
                } else {
                    if (GameBaseData.isDebug) {
                        console.log('调起挑战sdk并给予奖励');
                    }
                    if (GameBaseData.isFBSDK) {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk 挑战者id=' + rankData.id + " name:" + rankData.name);
                        }
                        GameBaseData.PKFriend(rankData.id, () => {
                            GameBaseData.setAddUidToShare(rankData.id, this._modelType);
                            this.joinGamePK();
                            GameBaseData.FBEvent(34);
                            uiItem.fb_share2.visible = true;
                            uiItem.fb_share3.visible = false;
                        });
                    } else {
                        GameBaseData.setAddUidToShare(rankData.id, this._modelType);
                        touch.GameData.instance.setAddDiamond(100);
                        touch.Notice.show("Sucessful get 100 diamonds!");
                        this.joinGamePK();
                        uiItem.fb_share2.visible = true;
                        uiItem.fb_share3.visible = false;
                    }
                }
            }
        }
        touchBtn_FbShareTop3(obj, rankIndex) {
            if (rankIndex < 3 && rankIndex < this._datas.length) {
                let rankData = this._datas[rankIndex];
                let im0 = obj.getChildByName("imFbShare0");
                let im1 = obj.getChildByName("imFbShare1");
                let im2 = obj.getChildByName("imFbShare2");
                if (im0.visible) {
                    if (GameBaseData.isDebug) {
                        console.log('调起分享sdk');
                    }
                    if (GameBaseData.isFBSDK) {
                        var data = {
                            contextType: 0,
                            contextID: null,
                            contextFromID: FBInstant.player.getID()
                        };
                        let score = this._modelType == 0 ? touch.GameData.instance.record : touch.GameData.instance.record2 + "m";
                        let info = this._modelType == 0 ? "MULTI" : "SINGLE";
                        GameBaseData.FBShare_Custom(score, info, () => {
                            if (GameBaseData.isDebug) {
                                console.log('调起分享sdk成功');
                            }
                        });
                    }
                } else {
                    if (im1.visible) {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.id);
                            }
                            GameBaseData.PKFriend(rankData.id, () => {
                                this.joinGamePK();
                                GameBaseData.FBEvent(34);
                            });
                        } else {
                            this.joinGamePK();
                        }
                    } else {
                        if (GameBaseData.isDebug) {
                            console.log('调起挑战sdk并给予奖励');
                        }
                        if (GameBaseData.isFBSDK) {
                            if (GameBaseData.isDebug) {
                                console.log('调起挑战sdk 挑战者id=' + rankData.id);
                            }
                            GameBaseData.PKFriend(rankData.id, () => {
                                GameBaseData.setAddUidToShare(rankData.id, this._modelType);
                                this.joinGamePK();
                                GameBaseData.FBEvent(33);
                                im1.visible = true;
                                im2.visible = false;
                            });
                        } else {
                            GameBaseData.setAddUidToShare(rankData.id, this._modelType);
                            touch.GameData.instance.setAddDiamond(100);
                            touch.Notice.show("Sucessful get 100 diamonds!");
                            this.joinGamePK();
                            im1.visible = true;
                            im2.visible = false;
                        }
                    }
                }
            }
        }
        joinGamePK() {
            GameBaseData.modelType = this._modelType;
            if (GameBaseData.isShowGameView) {
                this._main.event(touch.GameEvent.START_AGAIN);
            } else {
                if (this._modelType == 0) {
                    this._main.event(touch.GameEvent.ENTER_GAME1);
                    GameBaseData.initGameLv();
                    GameBaseData.getFriendList(0, null, null);
                } else {
                    this._main.event(touch.GameEvent.ENTER_GAME2);
                    GameBaseData.initGameLv();
                    GameBaseData.getFriendList_model1(0, null, null);
                }
            }
            if (touch.AwardDialog.isFromAward) {
                this._main.event(touch.GameEvent.CLOSE_SKIN);
                this._main.event(touch.GameEvent.CLOSE_PK);
                touch.AwardDialog.isFromAward = false;
                touch.AwardDialog.friendNums++;
                touch.GameData.instance.setAddDiamond(100);
                touch.Notice.show("Successful get 100 diamonds.");
            }
            this.onClose();
        }
        onOpened() {
            super.onOpened();
            this._curShowIndex = 0;
            this._datas.splice(0, this._datas.length);
            this.listRank.scrollTo(0);
            this.FbPageData(0, this._modelType);
        }
        reqPageData(page) {
            if (FriendRankDialog._isReqAllData1 || this._isReqing1) {
                return;
            }
            if (GameBaseData.isDebug) {
                console.log("获取排行reqPage11Data1");
            }
            if (!Laya.Browser.onMiniGame) {
                return;
            }
            let self = this;
            this._isReqing1 = true;
            Laya.Browser.window.wx.showLoading({
                title: "数据加载中...",
                mask: true
            });
            Laya.Browser.window.wx.request({
                url: touch.WechatSDK.SERVER + "get-rank?page=" + page,
                method: "GET",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                fail: function(res) {
                    if (GameBaseData.isDebug) {
                        console.log("获取世界排行页数据失败：" + JSON.stringify(res));
                    }
                },
                success: function(res) {
                    if (res.statusCode == 200) {
                        let data = res.data;
                        if (data.err) {
                            if (GameBaseData.isDebug) {
                                console.log("获取世界排行页数据失败：", data.err);
                            }
                        } else {
                            if (GameBaseData.isDebug) {
                                console.log("获取世界排行页数据成功：" + data.data);
                            }
                            let start = data.data.start;
                            let stop = data.data.stop;
                            let user_id = data.data.user_id;
                            let count = 0;
                            FriendRankDialog._isReqAllData1 = (user_id.length < 20);
                            if (0 == user_id.length) {
                                Laya.Browser.window.wx.hideLoading({});
                                self._isReqing1 = false;
                            }
                            for (var index = 0; index < user_id.length; index++) {
                                let worldRankData = new touch.WorldRankItemData();
                                worldRankData.rank = start + index;
                                self._datas.push(worldRankData);
                                Laya.Browser.window.wx.request({
                                    url: touch.WechatSDK.SERVER + "get-data?id=" + user_id[index],
                                    method: "GET",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    complete: function(res) {
                                        count++;
                                        if (count >= user_id.length) {
                                            Laya.Browser.window.wx.hideLoading({});
                                            self._isReqing1 = false;
                                        }
                                    },
                                    fail: function(res) {
                                        if (GameBaseData.isDebug) {
                                            console.log("获取个人数据失败：" + JSON.stringify(res));
                                        }
                                    },
                                    success: function(res) {
                                        if (res.statusCode == 200) {
                                            let data = res.data;
                                            if (data.err) {
                                                if (GameBaseData.isDebug) {
                                                    console.log("获取个人数据失败：", data.err);
                                                }
                                            } else {
                                                if (GameBaseData.isDebug) {
                                                    console.log("获取个人数据成功：" + data.data);
                                                }
                                                worldRankData.id = data.data.id;
                                                worldRankData.score = data.data.score;
                                                worldRankData.name = data.data.name;
                                                worldRankData.icon = data.data.icon;
                                                self.updateUI();
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            });
        }
        FbPageData(page, modelType) {
            let that = this;
            touch.Notice.showLoading();
            if (modelType == 0) {
                if (FriendRankDialog._isReqAllData1 || this._isReqing1) {
                    this.updateList();
                    if (GameBaseData.isDebug) {
                        console.log("请求排行完毕    modelType==" + modelType);
                    }
                    return;
                }
                if (GameBaseData.isDebug) {
                    console.log("请求排行    modelType==" + modelType);
                }
                this._isReqing1 = true;
                GameBaseData.getFriendList(page, () => {
                    this._isReqing1 = false;
                    if (GameBaseData.isDebug) {
                        console.log("好友排行更新成功");
                    }
                    this.updateList();
                    touch.Notice.closeLoading();
                }, () => {
                    this._isReqing1 = false;
                    this.updateList();
                    touch.Notice.closeLoading();
                });
            } else {
                if (FriendRankDialog._isReqAllData2 || this._isReqing2) {
                    this.updateList();
                    if (GameBaseData.isDebug) {
                        console.log("请求排行完毕    modelType==" + modelType);
                    }
                    return;
                }
                if (GameBaseData.isDebug) {
                    console.log("请求排行    modelType==" + modelType);
                }
                GameBaseData.getFriendList_model1(page, () => {
                    if (GameBaseData.isDebug) {
                        console.log("好友排行更新成功M1");
                    }
                    this._isReqing2 = false;
                    this.updateList();
                    touch.Notice.closeLoading();
                }, () => {
                    this._isReqing2 = false;
                    this.updateList();
                    touch.Notice.closeLoading();
                });
            }
        }
        updateList() {
            if (this._modelType == 0) {
                if (GameBaseData.isDebug) {
                    console.log("自己名次更新成功model0长度" + GameBaseData.friendRank.length);
                }
                if (GameBaseData.friendRank.length > 0) {
                    FriendRankDialog._isReqAllData1 = true;
                    if (GameBaseData.myRank_friend) {
                        this.viewMySelf.imgHead.skin = GameBaseData.myRank_friend.pic;
                        this.viewMySelf.tfName.text = GameBaseData.myRank_friend.name;
                        this.viewMySelf.tfRank.text = "" + (GameBaseData.myRank_friend.rank + 1);
                        this.viewMySelf.tfScore.text = "" + GameBaseData.myRank_friend.score;
                        if (GameBaseData.isDebug) {
                            console.log("自己名次更新成功");
                        }
                    } else {
                        if (GameBaseData.isDebug) {
                            console.log("自己无名次");
                        }
                    }
                    this.viewMySelf.clipBG.index = 1;
                    this._datas = [];
                    for (let i = 0; i < GameBaseData.friendRank.length; i++) {
                        let worldRankData = new touch.WorldRankItemData();
                        worldRankData.rank = GameBaseData.friendRank[i].rank;
                        worldRankData.id = GameBaseData.friendRank[i].uuid;
                        worldRankData.score = GameBaseData.friendRank[i].score + "";
                        worldRankData.name = GameBaseData.friendRank[i].name;
                        worldRankData.icon = GameBaseData.friendRank[i].pic;
                        this._datas.push(worldRankData);
                    }
                    if (GameBaseData.isDebug) {
                        console.log("列表更新成功");
                    }
                } else {
                    this.viewMySelf.imgHead.skin = null;
                    this.viewMySelf.tfName.text = "";
                    this.viewMySelf.tfRank.text = "";
                    this.viewMySelf.tfScore.text = "";
                    this.viewMySelf.clipBG.index = 1;
                    this._datas = [];
                }
                this.updateUI();
            } else {
                if (GameBaseData.isDebug) {
                    console.log("自己名次更新成功model1长度" + GameBaseData.friendRank_model1.length);
                }
                if (GameBaseData.friendRank_model1.length > 0) {
                    FriendRankDialog._isReqAllData2 = true;
                    if (GameBaseData.myRank_friend_model1) {
                        this.viewMySelf.imgHead.skin = GameBaseData.myRank_friend_model1.pic;
                        this.viewMySelf.tfName.text = GameBaseData.myRank_friend_model1.name;
                        this.viewMySelf.tfRank.text = "" + (GameBaseData.myRank_friend_model1.rank + 1);
                        this.viewMySelf.tfScore.text = "" + GameBaseData.myRank_friend_model1.score + "m";
                        if (GameBaseData.isDebug) {
                            console.log("自己名次更新成功M1");
                        }
                    } else {
                        if (GameBaseData.isDebug) {
                            console.log("自己无名次M1");
                        }
                    }
                    this.viewMySelf.clipBG.index = 1;
                    this._datas = [];
                    for (let i = 0; i < GameBaseData.friendRank_model1.length; i++) {
                        let worldRankData = new touch.WorldRankItemData();
                        worldRankData.rank = GameBaseData.friendRank_model1[i].rank;
                        worldRankData.id = GameBaseData.friendRank_model1[i].uuid;
                        worldRankData.score = GameBaseData.friendRank_model1[i].score + "m";
                        worldRankData.name = GameBaseData.friendRank_model1[i].name;
                        worldRankData.icon = GameBaseData.friendRank_model1[i].pic;
                        this._datas.push(worldRankData);
                    }
                    if (GameBaseData.isDebug) {
                        console.log("列表更新成功");
                    }
                } else {
                    this.viewMySelf.imgHead.skin = null;
                    this.viewMySelf.tfName.text = "";
                    this.viewMySelf.tfRank.text = "";
                    this.viewMySelf.tfScore.text = "";
                    this.viewMySelf.clipBG.index = 1;
                    this._datas = [];
                }
                this.updateUI();
            }
        }
        updateUI() {
            if (GameBaseData.isDebug) {
                console.log("前三名更新界面");
            }
            let listNum = this._datas.length - 3;
            listNum = listNum > 0 ? listNum : 0;
            this.listRank.array = new Array(listNum);
            this.listRank.scrollTo(this._curShowIndex);
            for (var index = 0; index < 3; index++) {
                if (index < this._datas.length) {
                    let data = this._datas[index];
                    var element = this.getChildByName("boxRank" + index);
                    if (element != null) {
                        let imgHead = element.getChildByName("imgHead");
                        if (imgHead != null) {
                            imgHead.skin = data.icon;
                        }
                        let tfName = element.getChildByName("tfName");
                        if (tfName != null) {
                            tfName.text = data.name;
                            if (tfName.text.length > 10) {
                                tfName.fontSize = 26 - (tfName.text.length - 10) * 2;
                                if (tfName.fontSize < 18) {
                                    tfName.fontSize = 18;
                                }
                            }
                        }
                        let tfScore = element.getChildByName("tfScore");
                        if (tfScore != null) {
                            tfScore.text = data.score.toString();
                        }
                        let BtbFb = element.getChildByName("BtnFBShare");
                        this._setFBShareTop3(BtbFb, data);
                    }
                } else {
                    var element = this.getChildByName("boxRank" + index);
                    if (element != null) {
                        let imgHead = element.getChildByName("imgHead");
                        if (imgHead != null) {
                            imgHead.skin = null;
                        }
                        let tfName = element.getChildByName("tfName");
                        if (tfName != null) {
                            tfName.text = "";
                        }
                        let tfScore = element.getChildByName("tfScore");
                        if (tfScore != null) {
                            tfScore.text = "";
                        }
                        let BtbFb = element.getChildByName("BtnFBShare");
                        this._setFBShareTop3(BtbFb, null);
                    }
                }
            }
        }
        _setFBShareTop3(obj, rankData) {
            let im0 = obj.getChildByName("imFbShare0");
            let im1 = obj.getChildByName("imFbShare1");
            let im2 = obj.getChildByName("imFbShare2");
            if (rankData) {
                if (rankData.id == GameBaseData.UID) {
                    im0.visible = true;
                    im1.visible = false;
                    im2.visible = false;
                } else {
                    im0.visible = false;
                    if (GameBaseData.getUidIsShare(rankData.id, this._modelType)) {
                        im1.visible = true;
                        im2.visible = false;
                    } else {
                        im1.visible = false;
                        im2.visible = true;
                    }
                }
            } else {
                im0.visible = false;
                im1.visible = false;
                im2.visible = false;
            }
        }
    }
    FriendRankDialog._isReqAllData1 = false;
    FriendRankDialog._isReqAllData2 = false;
    FriendRankDialog._openTimes = 0;
    touch.FriendRankDialog = FriendRankDialog;
})(touch || (touch = {}));