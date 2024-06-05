var touch;
(function(touch) {
    class WorldRankDialog extends ui.WorldRankDialogUI {
        constructor(main) {
            super();
            this._main = null;
            this._datas = null;
            this._curShowIndex = 0;
            this._isReqing1 = false;
            this._isReqing2 = false;
            this._modelType = 0;
            WorldRankDialog._openTimes++;
            this._main = main;
            this.gModel0.clickHandler = Laya.Handler.create(this, this.onGModel0, null, false);
            this.gModel1.clickHandler = Laya.Handler.create(this, this.onGModel1, null, false);
            this.btnClose.clickHandler = Laya.Handler.create(this, this.onClose, null, false);
            this.listRank.vScrollBarSkin = "";
            this.listRank.renderHandler = Laya.Handler.create(this, this.onRenderItem, null, false);
            this.listRank.array = new Array(0);
            this._datas = new Array();
            this._modelType = 1;
            this._isReqing1 = this._isReqing2 = false;
            if (WorldRankDialog._openTimes > 5) {
                WorldRankDialog._openTimes = 0;
                WorldRankDialog._isReqAllData1 = WorldRankDialog._isReqAllData2 = false;
            }
            this._setGModelType(this._modelType == 0);
            this.onGModel0();
        }
        initRankData(modelType) {
            if (GameBaseData.isFBSDK) {}
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
            this._main.event(touch.GameEvent.CLOSE_WORLD_RANK);
        }
        onGModel0() {
            this._setGModelType(true);
            this.onOpened();
            this.getRankDataAndRefreshView("FB_globalRank");
        }
        onGModel1() {
            this._setGModelType(false);
            this.onOpened();
            this.getRankDataAndRefreshView("FB_friendRank");
        }
        getRankDataAndRefreshView(fbRankType) {
            var that = this;
            if (GameBaseData.isFBSDK) {
                FBSdkMamager.GetInstance().fbRankData.async_getRankData(fbRankType, function(useRank) {
                    console.log("进入排行榜回调--------");
                    console.log(useRank);
                    that.updateUI(useRank);
                }, 0);
            } else {
                this.reqPageData(0);
            }
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
            if (null == cell || null == this._datas) {
                return;
            }
            let data = this._datas[index];
            cell.imgHead.skin = data.icon;
            data.name = GameBaseData.mygame_getShortName(data.name, 12);
            cell.tfName.text = data.name;
            cell.tfRank.text = "" + (data.rank);
            var color = "#ffffff";
            if (data.rank == 1) {
                color = "#fbdf20";
            } else if (data.rank == 2) {
                color = "#27bfff";
            } else if (data.rank == 3) {
                color = "#f3ae65";
            }
            cell.tfRank.color = color;
            cell.tfScore.text = data.score.toString();
            cell.clipBG.visible = (data.rank % 2) ? true : false;
            if (data.id == GameBaseData.UID) {
                cell.tfName.color = "#ffe533";
                cell.tfScore.color = "#ffe533";
            }
        }
        onOpened() {
            super.onOpened();
            this._curShowIndex = 0;
            var that = this;
            this.listRank.scrollTo(0);
        }
        reqPageData(page) {}
        FbPageData(page, modelType) {
            let that = this;
            touch.Notice.showLoading();
            if (modelType == 0) {
                if (WorldRankDialog._isReqAllData1 || this._isReqing1) {
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
                GameBaseData.getRankList(page, () => {
                    this._isReqing1 = false;
                    if (GameBaseData.isDebug) {
                        console.log("排行更新成功");
                    }
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
            } else {
                if (WorldRankDialog._isReqAllData2 || this._isReqing2) {
                    if (GameBaseData.isDebug) {
                        console.log("请求排行完毕    modelType==" + modelType);
                    }
                    this.updateList(0);
                    this.updateList(1);
                    return;
                }
                this.initRankData(this._modelType);
                this._isReqing2 = true;
                if (GameBaseData.isDebug) {
                    console.log("请求排行    modelType==" + modelType);
                }
                GameBaseData.getRankList_model1(page, () => {
                    if (GameBaseData.isDebug) {
                        console.log("排行更新成功M1");
                    }
                    this._isReqing2 = false;
                    this.updateList(1);
                    touch.Notice.closeLoading();
                }, () => {
                    this._isReqing2 = false;
                    this.updateList(1);
                    if (GameBaseData.isDebug) {
                        console.log("排行更新失败M1" + GameBaseData.allRank_model1.length);
                    }
                    touch.Notice.closeLoading();
                });
            }
        }
        updateList(type) {}
        updateUI(useRank) {
            if (GameBaseData.isDebug) {
                console.log(useRank);
            }
            this._datas = [];
            for (let i = 0; i < useRank.length; i++) {
                let worldRankData = new touch.WorldRankItemData();
                worldRankData.rank = useRank[i].rank;
                worldRankData.id = useRank[i].uuid;
                worldRankData.score = useRank[i].score + "m";
                worldRankData.name = useRank[i].name;
                worldRankData.icon = useRank[i].pic;
                this._datas.push(worldRankData);
            }
            this.listRank.array = new Array(this._datas.length);
            this.listRank.scrollTo(this._curShowIndex);
        }
    }
    WorldRankDialog._isReqAllData1 = false;
    WorldRankDialog._isReqAllData2 = false;
    WorldRankDialog._openTimes = 0;
    touch.WorldRankDialog = WorldRankDialog;
})(touch || (touch = {}));