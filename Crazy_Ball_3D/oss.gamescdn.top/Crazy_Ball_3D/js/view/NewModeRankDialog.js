var touch;
(function(touch) {
    class NewModeRankDialog extends ui.NewModeRankDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._datas = null;
            this._curShowIndex = 0;
            this._isReqing1 = false;
            this._isReqing2 = false;
            this._modelType = 0;
            NewModeRankDialog._openTimes++;
            this._main = main;
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.listRank.vScrollBarSkin = "";
            this.listRank.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.listRank.array = new Array(0);
            this._datas = new Array();
            this._modelType = 2;
            this._isReqing1 = this._isReqing2 = false;
            if (NewModeRankDialog._openTimes > 5) {
                NewModeRankDialog._openTimes = 0;
                NewModeRankDialog._isReqAllData1 = NewModeRankDialog._isReqAllData2 = false;
            }
            this.initRankData(this._modelType);
        }
        initRankData(modelType) {
            if (GameBaseData.isFBSDK) {
                let that = this;
                if (modelType >= 2) {
                    GameBaseData.getNewModeMyRank(() => {
                        if (GameBaseData.isDebug) {
                            console.log("自己排行获取成功");
                        }
                        this.updateList(0);
                    }, () => {
                        this.updateList(0);
                    });
                }
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
            this._main.event(touch.GameEvent.CLOSE_NewMode_RANK);
        }
        onGModel2() {
            this.onOpened();
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
        }
        onOpened() {
            super.onOpened();
            this._curShowIndex = 0;
            this._datas.splice(0, this._datas.length);
            this.listRank.scrollTo(0);
            this.FbPageData(0, this._modelType);
        }
        reqPageData(page) {
            if (NewModeRankDialog._isReqAllData1 || this._isReqing1) {
                return;
            }
            if (GameBaseData.isDebug) {
                console.log("获取排行reqPageData");
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
                            NewModeRankDialog._isReqAllData1 = (user_id.length < 20);
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
            if (modelType >= 2) {
                if (NewModeRankDialog._isReqAllData1 || this._isReqing1) {
                    if (GameBaseData.isDebug) {
                        console.log("请求排行完毕    modelType==" + modelType);
                    }
                    this.updateList(0);
                    this.updateList(1);
                    return;
                }
                if (GameBaseData.isDebug) {
                    console.log("请求排行    modelType==" + modelType);
                }
                this.initRankData(this._modelType);
                this._isReqing1 = true;
                GameBaseData.getNewModeRankList(() => {
                    this._isReqing1 = false;
                    if (GameBaseData.isDebug) {
                        console.log("排行更新成功");
                    }
                    this.updateList(0);
                    this.updateList(1);
                    touch.Notice.closeLoading();
                }, () => {
                    this._isReqing1 = false;
                    if (GameBaseData.isDebug) {
                        console.log("排行更新失败");
                    }
                    this.updateList(1);
                    touch.Notice.closeLoading();
                });
            }
        }
        updateList(type) {
            if (this._modelType >= 2) {
                if (type == 0) {
                    if (GameBaseData.newModeMyRank != null) {
                        this.viewMySelf.imgHead.skin = GameBaseData.newModeMyRank.pic;
                        this.viewMySelf.tfName.text = GameBaseData.newModeMyRank.name;
                        this.viewMySelf.tfRank.text = "" + (GameBaseData.newModeMyRank.rank + 1);
                        this.viewMySelf.tfScore.text = "" + GameBaseData.newModeMyRank.score;
                        this.viewMySelf.clipBG.index = 1;
                    } else {
                        this.viewMySelf.imgHead.skin = null;
                        this.viewMySelf.tfName.text = "";
                        this.viewMySelf.tfRank.text = "";
                        this.viewMySelf.tfScore.text = "";
                        this.viewMySelf.clipBG.index = 1;
                    }
                } else {
                    if (GameBaseData.newModeallRank && GameBaseData.newModeallRank.length > 0) {
                        NewModeRankDialog._isReqAllData1 = true;
                        if (GameBaseData.isDebug) {
                            console.log(GameBaseData.newModeallRank);
                        }
                        this._datas = [];
                        for (let i = 0; i < GameBaseData.newModeallRank.length; i++) {
                            let worldRankData = new touch.WorldRankItemData();
                            worldRankData.rank = GameBaseData.newModeallRank[i].rank;
                            worldRankData.id = GameBaseData.newModeallRank[i].uuid;
                            worldRankData.score = GameBaseData.newModeallRank[i].score + "";
                            worldRankData.name = GameBaseData.newModeallRank[i].name;
                            worldRankData.icon = GameBaseData.newModeallRank[i].pic;
                            this._datas.push(worldRankData);
                        }
                    } else {
                        this._datas = [];
                    }
                    this.updateUI();
                }
            }
        }
        updateUI() {
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
                    }
                }
            }
        }
    }
    NewModeRankDialog._isReqAllData1 = false;
    NewModeRankDialog._isReqAllData2 = false;
    NewModeRankDialog._openTimes = 0;
    touch.NewModeRankDialog = NewModeRankDialog;
})(touch || (touch = {}));