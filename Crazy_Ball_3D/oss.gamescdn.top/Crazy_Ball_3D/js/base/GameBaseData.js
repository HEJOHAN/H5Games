class GameBaseData {
    static upDataRank(val, modeType, callBack) {
        if (GameBaseData.isFBSDK) {
            console.log("设置玩家分数-------------------------------------");
            let rankName = "";
            if (modeType == 0) {
                rankName = "ballRank_20200623_1";
            } else if (modeType == 1) {
                rankName = "ballRankM1_20200623_1";
            } else if (modeType > 1) {
                rankName = "ballRankM2";
            }
            FBInstant.getLeaderboardAsync(rankName).then(function(leaderboard) {
                return leaderboard.setScoreAsync(val, "");
            }).then(function(entry) {
                if (GameBaseData.isDebug) {
                    console.log(rankName + " has update");
                    console.log(entry.getScore());
                }
                console.log("设置分数成功------------------------------");
                if (callBack) {
                    callBack();
                }
            }).catch(function(err) {
                console.log("设置分数失败------------------------------");
                console.log(err);
                if (callBack) {
                    callBack();
                }
            });
        } else {
            if (this.isDebug) {
                console.log("upDataRank" + val);
            }
            if (callBack) {
                callBack();
            }
        }
    }
    static initGameLv() {
        this.gameLv = 1;
    }
    static getNewModeMyRank(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM2").then(function(leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRankM2  =getMyRank Count= " + num);
                    }
                });
                leaderboard.getPlayerEntryAsync().then(function(entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.newModeMyRank = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getNewModeRankList(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM2").then(function(leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRankM2  =getRankList Count= " + num);
                    }
                });
                leaderboard.getEntriesAsync(30, 0).then(function(entries) {
                    let data = [];
                    entries.forEach(function(value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.newModeallRank = data;
                    if (GameBaseData.UID == "2158582624199609") {
                        console.log("多人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            var data = [];
            for (let i = 0; i < 16; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.newModeallRank = data;
            this.newModeMyRank = data[4];
            if (callBack) {
                callBack();
            }
        }
    }
    static getMyRank(callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function(leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getMyRank Count= " + num);
                    }
                });
                leaderboard.getPlayerEntryAsync().then(function(entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.myRank = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getRankList(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function(leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getRankList Count= " + num);
                    }
                });
                leaderboard.getEntriesAsync(30, 0).then(function(entries) {
                    let data = [];
                    entries.forEach(function(value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.allRank = data;
                    if (GameBaseData.UID == "2158582624199609") {
                        console.log("多人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getFriendList(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRank").then(function(leaderboard) {
                leaderboard.getEntryCountAsync().then((num) => {
                    if (that.isDebug) {
                        console.log("获取BallRank  =getRankList Count= " + num);
                    }
                });
                leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function(entries) {
                    var data = [];
                    entries.forEach(function(value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        if (o.uuid == GameBaseData.UID) {
                            that.myRank_friend = o;
                        }
                        data.push(o);
                    }, that);
                    that.friendRank = data;
                    if (that.friendRank) {
                        if (that.friendRank.length > 0) {
                            if (that.friendRank.length < 2) {
                                FBInstant.logEvent("Friend0");
                            } else if (that.friendRank.length < 3) {
                                FBInstant.logEvent("Friend1");
                            } else if (that.friendRank.length < 4) {
                                FBInstant.logEvent("Friend2");
                            } else if (that.friendRank.length < 5) {
                                FBInstant.logEvent("Friend3");
                            } else if (that.friendRank.length < 6) {
                                FBInstant.logEvent("Friend4");
                            } else if (that.friendRank.length < 7) {
                                FBInstant.logEvent("Friend5");
                            } else if (that.friendRank.length < 12) {
                                FBInstant.logEvent("Friend6-10");
                            } else if (that.friendRank.length < 22) {
                                FBInstant.logEvent("Friend11-20");
                            } else {
                                FBInstant.logEvent("Friend20+");
                            }
                        }
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            var data = [];
            for (let i = 0; i < 6; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.UID = "uuid" + 4;
            this.myRank_friend = data[0];
            this.myRank_friend = null;
            this.friendRank = data;
            if (callBack) {
                callBack();
            }
        }
    }
    static getMyRank_model1(callBack, erroBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function(leaderboard) {
                leaderboard.getPlayerEntryAsync().then(function(entry) {
                    var o = new RankObj();
                    o.rank = entry.getRank() - 1;
                    o.name = entry.getPlayer().getName();
                    o.uuid = entry.getPlayer().getID();
                    o.pic = entry.getPlayer().getPhoto();
                    o.score = entry.getScore() + "";
                    that.myRank_model1 = o;
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                console.error(error);
                if (erroBack) {
                    erroBack();
                }
            });
        }
    }
    static getRankList_model1(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function(leaderboard) {
                leaderboard.getEntriesAsync(30, 0).then(function(entries) {
                    let data = [];
                    entries.forEach(function(value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        data.push(o);
                    }, that);
                    that.allRank_model1 = data;
                    if (GameBaseData.UID == "2158582624199609") {
                        console.log("单人世界排行");
                        console.log(data);
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        }
    }
    static getFriendList_model1(page, callBack, errCallBack) {
        if (GameBaseData.isFBSDK) {
            let that = this;
            FBInstant.getLeaderboardAsync("ballRankM1").then(function(leaderboard) {
                leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function(entries) {
                    var data = [];
                    entries.forEach(function(value) {
                        var o = new RankObj();
                        o.rank = value.getRank() - 1;
                        o.name = value.getPlayer().getName();
                        o.uuid = value.getPlayer().getID();
                        o.pic = value.getPlayer().getPhoto();
                        o.score = value.getScore() + "";
                        if (o.uuid == GameBaseData.UID) {
                            that.myRank_friend_model1 = o;
                        }
                        data.push(o);
                    }, that);
                    that.friendRank_model1 = data;
                    if (that.friendRank_model1) {
                        if (that.friendRank_model1.length > 0) {
                            if (that.friendRank_model1.length < 2) {
                                FBInstant.logEvent("Friend0");
                            } else if (that.friendRank_model1.length < 3) {
                                FBInstant.logEvent("Friend1");
                            } else if (that.friendRank_model1.length < 4) {
                                FBInstant.logEvent("Friend2");
                            } else if (that.friendRank_model1.length < 5) {
                                FBInstant.logEvent("Friend3");
                            } else if (that.friendRank_model1.length < 6) {
                                FBInstant.logEvent("Friend4");
                            } else if (that.friendRank_model1.length < 7) {
                                FBInstant.logEvent("Friend5");
                            } else if (that.friendRank_model1.length < 12) {
                                FBInstant.logEvent("Friend6-10");
                            } else if (that.friendRank_model1.length < 22) {
                                FBInstant.logEvent("Friend11-20");
                            } else {
                                FBInstant.logEvent("Friend20+");
                            }
                        }
                    }
                    if (callBack) {
                        callBack();
                    }
                });
            }).catch((error) => {
                if (errCallBack) {
                    errCallBack();
                }
                console.error(error);
            });
        } else {
            var data = [];
            for (let i = 0; i < 6; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;
                o.pic = null;
                o.score = (100 - i) + "";
                data.push(o);
            }
            this.UID = "uuid" + 5;
            this.myRank_friend_model1 = data[4];
            this.myRank_friend_model1 = null;
            this.friendRank_model1 = data;
            if (callBack) {
                callBack();
            }
        }
    }
    static getInitBeyondFriend(modeType, callBack) {
        if (!GameBaseData.isFBSDK) {
            let numC = 6;
            var data = [];
            for (let i = 0; i < numC; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = null;
                o.score = (300 * i * 6 - i) + "";
                data.push(o);
            }
            data.sort((a, b) => {
                return a.score - b.score;
            });
            if (callBack) {
                callBack(data, numC);
            }
            return;
        }
        let rankName = modeType == 0 ? "ballRank" : "ballRankM1";
        if (modeType == 0 && this.friendRank && this.friendRank.length > 0) {
            let newArr = this.deepCopy(this.friendRank);
            if (newArr) {
                newArr.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack(newArr, numL);
                }
            } else {
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack([], numL);
                }
            }
            return;
        } else if (modeType == 1 && this.friendRank_model1 && this.friendRank_model1.length > 0) {
            let newArr = this.deepCopy(this.friendRank_model1);
            if (newArr) {
                newArr.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack(newArr, numL);
                }
            } else {
                if (callBack) {
                    let numL = modeType == 0 ? this.getRankLength_mode0 : this.getRankLength_mode1;
                    callBack([], numL);
                }
            }
            return;
        }
        let that = this;
        FBInstant.getLeaderboardAsync(rankName).then(function(leaderboard) {
            leaderboard.getConnectedPlayerEntriesAsync(30, 0).then(function(entries) {
                var data = [];
                entries.forEach(function(value) {
                    var o = new RankObj();
                    o.rank = value.getRank() - 1;
                    o.name = value.getPlayer().getName();
                    o.uuid = value.getPlayer().getID();
                    o.pic = value.getPlayer().getPhoto();
                    o.score = value.getScore() + "";
                    data.push(o);
                }, that);
                if (modeType == 0) {
                    if (that.friendRank.length == 0) {
                        that.friendRank = data;
                    }
                } else {
                    if (that.friendRank_model1.length == 0) {
                        that.friendRank_model1 = data;
                    }
                }
                let newArr = that.deepCopy(data);
                data.sort((a, b) => {
                    return a.score - b.score;
                });
                if (callBack) {
                    let numL = modeType == 0 ? that.getRankLength_mode0 : that.getRankLength_mode1;
                    callBack(data, numL);
                }
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    static getRankLength_mode0() {}
    static getRankLength_mode1() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let rankName = "ballRankM1";
        let that = this;
        FBInstant.getLeaderboardAsync(rankName).then(function(leaderboard) {
            leaderboard.getEntryCountAsync().then((num) => {
                that.beyondRankLength_mode1 = Math.floor(num * (0.8 + 0.1 * Math.random()));
                console.error("RLMODE1" + num);
                let nStart = that.beyondRankLength_mode1 - 30;
                if (nStart < 0) {
                    nStart = 0;
                }
                leaderboard.getEntriesAsync(30, nStart).then(function(entries) {
                    let data = [];
                    entries.forEach(function(value) {
                        data.push(value.getPlayer().getPhoto());
                    }, that);
                    if (data.length > 0) {
                        that.beyondRankLength_mode0 -= data.length;
                        if (that.beyondRankLength_mode0 < 0) {
                            that.beyondRankLength_mode0 = 0;
                        }
                    }
                    that.beyondHead = data;
                    console.error("RLMODE1F" + data.length);
                }).catch((error) => {
                    console.error("1=>");
                    console.error(error);
                });
            }).catch((error) => {
                console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    static getBeyondHeads() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let timeNow = new Date().getTime();
        let time = (timeNow - this.beyondLoadTime) / 1000;
        if (time < 5) {
            console.log("拉取头像时间未到 " + time);
            return;
        }
        this.beyondLoadTime = timeNow;
        if (this.isDebug) {
            console.log("拉取头像开始");
        }
        let nNum = this.beyondRankLength_mode0 - 30;
        if (nNum < 0) {
            nNum = 0;
        }
        let that = this;
        FBInstant.getLeaderboardAsync("ballRankM1").then(function(leaderboard) {
            leaderboard.getEntriesAsync(30, nNum).then(function(entries) {
                let data = [];
                entries.forEach(function(value) {
                    data.push(value.getPlayer().getPhoto());
                }, that);
                if (data.length > 0) {
                    that.beyondRankLength_mode0 -= data.length;
                    if (that.beyondRankLength_mode0 < 0) {
                        that.beyondRankLength_mode0 = 0;
                    }
                }
                that.beyondHead = data;
                if (that.isDebug) {
                    console.log("拉取头像成功" + data.length);
                }
            }).catch((error) => {
                console.error("1=>");
                console.error(error);
            });
        }).catch((error) => {
            console.error("2=>");
            console.error(error);
        });
    }
    static getBeyondFriend(modeType, startIndex, listMax, callback) {
        if (!GameBaseData.isFBSDK) {
            let numC = 1;
            var data = [];
            for (let i = 0; i < numC; i++) {
                var o = new RankObj();
                o.rank = i;
                o.name = "名称" + i;
                o.uuid = "uuid" + i;;
                o.pic = "./res/skin/skin0.png";
                o.score = (100 * i * 6 - i) + "";
                data.push(o);
            }
            if (callback) {
                callback(data, startIndex + 1);
            }
            return;
        }
        let that = this;
        let sIndex = 0;
        let rankName = modeType == 0 ? "ballRank" : "ballRankM1";
        FBInstant.getLeaderboardAsync(rankName).then(function(leaderboard) {
            let sIndex = listMax - startIndex - 1;
            if (that.isDebug) {
                console.log("listMax=" + listMax + "  startIndex=" + startIndex + "_=" + sIndex + "   mode=" + modeType);
            }
            leaderboard.getEntriesAsync(1, listMax - startIndex - 1).then(function(entries) {
                let data = [];
                entries.forEach(function(value) {
                    var o = new RankObj();
                    o.rank = value.getRank() - 1;
                    o.name = value.getPlayer().getName();
                    o.uuid = value.getPlayer().getID();
                    o.pic = value.getPlayer().getPhoto();
                    o.score = value.getScore() + "";
                    data.push(o);
                }, that);
                if (modeType == 0) {
                    that.beyondRankLength_mode0--;
                    if (that.beyondRankLength_mode0 < 0) {
                        that.beyondRankLength_mode0 = 0;
                    }
                } else {
                    that.beyondRankLength_mode1--;
                    if (that.beyondRankLength_mode1 < 0) {
                        that.beyondRankLength_mode1 = 0;
                    }
                }
                if (callback) {
                    callback(data, startIndex + 1);
                }
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    static getStartEndRankObj(sScore, eScore, list) {
        let rs = 0;
        for (let i = 0; i < list.length; i++) {
            rs = Math.floor(list[i].score);
            if (rs > 0 && rs >= sScore && rs < eScore) {
                return list[i];
            }
        }
        return null;
    }
    static GetNeerPlayer() {
        let ranks = null;
        if (this.modelType == 0) {
            ranks = this.friendRank;
        } else {
            ranks = this.friendRank_model1;
        }
        let index = this.getMyRankIndex(this.UID, ranks);
        if (index >= 0) {
            let startIndex = 0;
            if (ranks.length < 3) {
                startIndex = 0;
            } else {
                if (index == 0) {
                    startIndex = 0;
                } else if (index == ranks.length - 1) {
                    startIndex = ranks.length - 3;
                } else {
                    startIndex = index - 1;
                }
            }
            return this.getRankList_linear(startIndex, 3, ranks);
        }
        let arr = [];
        return arr;
    }
    static getMyRankIndex(uid, rankList) {
        for (let i = 0; i < rankList.length; i++) {
            if (uid == rankList[i].uuid) {
                return i;
            }
        }
        return -1;
    }
    static getRankList_linear(startIndex, maxNum, rankList) {
        let arr = [];
        for (let i = startIndex; i < startIndex + maxNum && i < rankList.length; i++) {
            arr.push(rankList[i]);
        }
        return arr;
    }
    static setAddUidToShare(uid, gameModel) {
        let result = false;
        let rankUids = this.rankUidToShare;
        if (gameModel == 1) {
            rankUids = this.rankUidToShareModel1;
        }
        if (rankUids.length == 0) {
            rankUids.push(uid);
            result = true;
        } else {
            let find = false;
            for (let i = 0; i < rankUids.length; i++) {
                if (rankUids[i] === uid) {
                    find = true;
                    break;
                }
            }
            if (!find) {
                rankUids.push(uid);
                result = true;
            }
        }
        return result;
    }
    static getRankUidToShareString(gameModel) {
        if (gameModel == 0) {
            return this.rankUidToShare.toString();
        }
        return this.rankUidToShareModel1.toString();
    }
    static clearUidToShare() {
        this.rankUidToShare = [];
        this.rankUidToShareModel1 = [];
    }
    static getUidIsShare(uid, gameModel) {
        let rankUids = this.rankUidToShare;
        if (gameModel == 1) {
            rankUids = this.rankUidToShareModel1;
        }
        for (let i = 0, length = rankUids.length; i < length; i++) {
            if (rankUids[i] === uid) {
                return true;
            }
        }
        return false;
    };
    static getSupportedAPIs() {
        var myapi = FBInstant.getSupportedAPIs();
        if (this.isDebug) {
            console.log(myapi);
            console.log("myapi=" + myapi.length);
        }
        if (myapi) {
            for (var i = 0; i < myapi.length; i++) {
                this.isRewardedVideoAsync = false;
                if (myapi[i].indexOf("getRewardedVideoAsync") >= 0) {
                    this.isRewardedVideoAsync = true;
                    if (this.isDebug) {
                        console.log("isRewardedVideoAsync=true");
                    }
                    break;
                }
            }
        }
        if (myapi) {
            for (var i = 0; i < myapi.length; i++) {
                this.isInterstitialAdAsync = false;
                if (myapi[i].indexOf("getInterstitialAdAsync") >= 0) {
                    this.isInterstitialAdAsync = true;
                    if (this.isDebug) {
                        console.log("isInterstitialAdAsync=true");
                    }
                    break;
                }
            }
        }
    }
    static getGG() {
        var that = this;
        console.log("进入 getGG" + "isRewardedVideoAsync" + this.isRewardedVideoAsync + "GGState" + this.GGState);
        if (!this.isFBSDK || !this.isRewardedVideoAsync) {
            return;
        }
        if (that.GGState <= -1) {
            console.log("进入 getRewardedVideoAsync" + "+广告id" + that.GGID[that.GGIndex]);
            FBInstant.logEvent("NAdsStart_" + this.GGIndex);
            that.GG = null;
            FBInstant.getRewardedVideoAsync(that.GGID[that.GGIndex]).then(function(rewarded) {
                that.GG = rewarded;
                that.GGState = 1;
                if (GameBaseData.isDebug) {
                    console.log("成功获取广告信息,开始载入GG" + that.GGIndex);
                }
                FBInstant.logEvent("NAdsSuc_" + that.GGIndex);
                return that.GG.loadAsync();
            }).then(function() {
                that.GGState = 2;
                that.GGErrtimes = 0;
                FBInstant.logEvent("NAdsCom_" + that.GGIndex);
                if (GameBaseData.isDebug) {
                    console.log("广告载入完成GG" + that.GGIndex);
                }
            }).catch(function(err) {
                if (GameBaseData.isDebug) {
                    console.log("广告载入失败GG" + that.GGIndex + "报错信息:");
                    console.log(err.message);
                }
                FBInstant.logEvent("NAdsFail_" + that.GGIndex);
                that.GGErrtimes++;
                if (that.GGErrtimes > 2 && (new Date().getTime() - that.GGPlayTime) / 1000 < 30) {
                    that.GGState = -1;
                    that.nextAdsIndex();
                } else {
                    that.GGState = -1;
                    that.nextAdsIndex();
                    that.getGG();
                }
                that.GGPlayTime = new Date().getTime();
            });
        }
    };
    static nextAdsIndex() {
        this.GGIndex++;
        if (this.GGIndex > 2) {
            this.GGIndex = 0;
        }
    }
    static nextCPAdsIndex() {
        this.CPGGIndex++;
        if (this.CPGGIndex > 2) {
            this.CPGGIndex = 0;
        }
    }
    static initVideo() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
    }
    static initCPVideo() {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        this.getSupportedAPIs();
    }
    static getVideoFlag(type) {
        if (type == 3) {
            if (this.CPGGState == 2) {
                return 11;
            }
        } else {
            if (this.CPGGState == 2) {
                return 11;
            }
        }
        return -1;
    }
    static playVideo2(callBack, erroBack, tipsBack, playBack) {
        if (!this.isFBSDK) {
            return;
        }
        let that = this;
        if (this.GGState != 2) {
            if (GameBaseData.isDebug) {
                console.log("广告正在加载中GG" + that.GGIndex + "  state=" + this.GGState);
            }
            if (tipsBack) {
                tipsBack();
            }
            that.initVideo();
            return;
        }
        if (playBack) {
            playBack();
        }
        this.GG.showAsync().then(function() {
            if (callBack) {
                callBack();
            }
            if (GameBaseData.isDebug) {
                console.log("广告成功播放GG" + that.GGIndex);
            }
            that.GGState = -1;
            that.nextAdsIndex();
            that.initVideo();
        }).catch(function(err) {
            if (GameBaseData.isDebug) {
                console.log("广告播放失败GG" + that.GGIndex);
                console.log(err);
            }
            if (erroBack) {
                erroBack();
            }
            that.GGState = -1;
            that.nextAdsIndex();
            that.initVideo();
        });
    }
    static CPGGInit() {
        if (!this.isFBSDK || !this.isInterstitialAdAsync) {
            return;
        }
        var that = this;
        if (that.CPGGState <= -1) {
            FBInstant.logEvent("CPAdsStart_" + this.CPGGIndex);
            that.CPGGObj = null;
            FBInstant.getInterstitialAdAsync(this.CPGG[that.CPGGIndex]).then(function(interstitial) {
                that.CPGGObj = interstitial;
                that.CPGGState = 1;
                if (GameBaseData.isDebug) {
                    console.log("插屏成功获取广告信息,开始载入GG" + that.CPGGIndex);
                }
                FBInstant.logEvent("CPAdsSuc_" + that.CPGGIndex);
                return that.CPGGObj.loadAsync();
            }).then(function() {
                that.CPGGState = 2;
                that.CPGGErrtimes = 0;
                FBInstant.logEvent("CPAdsCom_" + that.CPGGIndex);
                if (GameBaseData.isDebug) {
                    console.log("插屏广告载入完成GG" + that.CPGGIndex);
                }
            }).catch(function(err) {
                if (GameBaseData.isDebug) {
                    console.log("插屏广告载入失败GG" + that.CPGGIndex + "报错信息:");
                    console.log(err.message);
                }
                FBInstant.logEvent("CPAdsFail_" + that.CPGGIndex);
                that.CPGGErrtimes++;
                if (that.CPGGErrtimes > 2 && (new Date().getTime() - that.CPGGPlayTime) / 1000 < 30) {
                    that.CPGGState = -1;
                    that.nextCPAdsIndex();
                } else {
                    that.CPGGState = -1;
                    that.nextCPAdsIndex();
                    that.CPGGInit();
                }
                that.CPGGPlayTime = new Date().getTime();
            });
        }
    }
    static PlayCPGG2(playBack, callBack, erroBack, tipsBack) {
        if (!this.isFBSDK) {
            return;
        }
        if (playBack) {
            playBack();
        }
        let that = this;
        if (this.CPGGObj == null) {
            if (callBack) {
                callBack();
            }
            return;
        }
        this.CPGGObj.showAsync().then(function() {
            if (callBack) {
                callBack();
            }
            if (GameBaseData.isDebug) {
                console.log("插屏广告成功播放GG" + that.CPGGIndex);
            }
            that.CPGGState = -1;
            that.nextCPAdsIndex();
            that.CPGGInit();
        }).catch(function(err) {
            if (GameBaseData.isDebug) {
                console.log("插屏广告播放失败GG" + that.CPGGIndex);
                console.log(err.message);
            }
            if (erroBack) {
                erroBack();
            }
            that.CPGGState = -1;
            that.nextCPAdsIndex();
            that.CPGGInit();
        });
    }
    static FBShare(data, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        var score = this.modelType == 0 ? Laya.LocalStorage.getItem("record") : Laya.LocalStorage.getItem("record2") + "m";
        var info = this.modelType == 0 ? "MULTI" : "SINGLE";
        let that = this;
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + score, info + " MODEL", (imageD) => {
            if (GameBaseData.isDebug) {
                console.log("图片生成完毕 发送消息");
            }
            BaseImage.doImage = 0;
            FBInstant.shareAsync({
                intent: 'SHARE',
                image: imageD,
                text: "Aha I'm a geniuses,come and challenge me!",
                data: data,
            }).then(function() {
                if (GameBaseData.isDebug) {
                    console.log("分享成功");
                }
                if (callback) {
                    callback();
                }
            }).catch(function(e) {
                if (GameBaseData.isDebug) {
                    console.log("分享失败");
                    console.log(e);
                }
                if (callback) {
                    callback();
                }
            });
        });
    };
    static FBShare_Custom(score, info, callback) {
        if (!this.isFBSDK) {
            return;
        }
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + score, info + " MODEL", (imageD) => {
            if (GameBaseData.isDebug) {
                console.log("图片生成完毕 发送消息");
            }
            BaseImage.doImage = 0;
            let that = this;
            FBInstant.shareAsync({
                intent: 'SHARE',
                image: imageD,
                text: "Aha I'm a geniuses,come and challenge me!",
                data: null,
            }).then(function() {
                if (GameBaseData.isDebug) {
                    console.log("分享成功");
                }
                if (callback) {
                    callback();
                }
            }).catch(function(e) {
                if (GameBaseData.isDebug) {
                    console.log("分享失败");
                    console.log(e);
                }
                if (callback) {
                    callback();
                }
            });
        });
    };
    static FBShareFriend(data, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let that = this;
        FBInstant.context.chooseAsync({
            filter: ['NEW_PLAYERS_ONLY'],
            minSize: 2,
        }).then(function() {
            if (GameBaseData.isDebug) {
                console.log("邀请好友成功");
                console.log("FBInstant.context.getID()====>");
            }
            FBInstant.context.getID();
            FBInstant.player.getID();
            const entryPointData = FBInstant.getEntryPointData();
            if (GameBaseData.isDebug) {
                console.log(entryPointData);
            }
            that.FBContextID = FBInstant.context.getID();
            GameBaseData.FBUpscore = true;
            if (callback) {
                callback();
            }
        }).catch(function(err) {
            if (GameBaseData.isDebug) {
                console.log("2Fb好友玩游戏列表Catch");
                console.log(err);
            }
        });
    };
    static FBShareFriendGG(pkScore, info, callback) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let that = this;
        if (BaseImage.doImage % 4 != 0)
            return;
        BaseImage.doImage++;
        BaseImage.newGetShareImg(FBInstant.player.getPhoto(), pkScore, info + " MODEL", (imgdata) => {
            BaseImage.doImage = 0;
            FBInstant.context.chooseAsync({
                filter: ['NEW_PLAYERS_ONLY'],
                minSize: 2,
            }).then(function() {
                if (GameBaseData.isDebug) {
                    console.log("邀请好友成功");
                    console.log("FBInstant.context.getID()====>");
                }
                FBInstant.context.getID();
                FBInstant.player.getID();
                that.FBContextID = FBInstant.context.getID();
                GameBaseData.FBUpscore = true;
                let data = {
                    myReplayData: FBInstant.context.getID(),
                    gameType: that.modelType,
                };
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play",
                    image: imgdata,
                    text: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    template: "play_turn",
                    data: data,
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function() {
                    if (callback) {
                        that.FBEvent(39);
                        callback();
                    }
                    if (GameBaseData.isDebug) {
                        console.log("updateAsyncOK");
                    }
                });
            }).catch(function(err) {
                if (GameBaseData.isDebug) {
                    console.log("2Fb好友玩游戏列表Catch");
                    console.log(err);
                }
            });
        });
    };
    static FBShareFriend_startGame(callback, useCloseCallBack) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        let that = this;
        FBInstant.context.chooseAsync({
            filter: ['NEW_PLAYERS_ONLY'],
            minSize: 2,
        }).then(function() {
            if (GameBaseData.isDebug) {
                console.log("挑战好友成功");
                console.log("FBInstant.context.getID()====>" + FBInstant.context.getID());
            }
            that.FBContextID = FBInstant.context.getID();
            GameBaseData.FBUpscore = true;
            if (callback) {
                callback();
            }
        }).catch(function(err) {
            if (GameBaseData.isDebug) {
                console.log("1Fb好友玩游戏列表Catch");
                console.log(err);
            }
            that.FBContextID = "";
            if (useCloseCallBack) {
                useCloseCallBack();
            }
        });
    };
    static OpenOtherGame(id, callback) {}
    static PKFriend(pkUid, callBack) {
        if (!this.isFBSDK) {
            return;
        }
        let that = this;
        console.log("挑战角色uid=" + pkUid);
        FBInstant.context.createAsync(pkUid).then(function() {
            if (GameBaseData.isDebug) {
                console.log("createAsync roomID=" + FBInstant.context.getID());
                console.log("createAsync");
                console.log("pkuid==" + pkUid);
            }
            let roomID = FBInstant.context.getID();
            that.FBContextID = roomID;
            that.pkFriendUID = pkUid;
            GameBaseData.FBUpscore = true;
            if (callBack) {
                callBack();
            }
        }).catch(function(err) {
            if (GameBaseData.isDebug) {
                console.log("pk好友==>catch=>");
                console.log(err);
            }
            let roomID = FBInstant.context.getID();
            that.FBContextID = roomID;
            that.pkFriendUID = pkUid;
            if (GameBaseData.isDebug) {
                console.log("catch roomID=" + roomID);
            }
            FBInstant.context.switchAsync(roomID + "").then(function() {
                if (GameBaseData.isDebug) {
                    console.log(FBInstant.context.getID());
                }
            }).catch(function(err) {
                if (GameBaseData.isDebug) {
                    console.log("switchAsync");
                    console.log(err);
                }
            });
        });
    }
    static gameOverTurnFriend(pkScore, info) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        if (GameBaseData.isDebug) {
            console.log("gameOverTurnFriend pkUid=========== >" + this.FBContextID);
        }
        if (this.FBContextID == "") {
            return;
        }
        if (GameBaseData.isDebug) {
            console.log("pk完毕 正在發送");
        }
        BaseImage.getShareImg(FBInstant.player.getPhoto(), "" + pkScore, info + " MODEL", (data) => {
            if (GameBaseData.isDebug) {
                console.log("pk完毕 发送消息");
            }
            let that = this;
            FBInstant.updateAsync({
                action: "CUSTOM",
                cta: "Play",
                image: data,
                text: {
                    default: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    localizations: {
                        en_US: FBInstant.player.getName() + " get " + pkScore + " scores in " + info + " MODEL! Turn you now!",
                    }
                },
                template: "play_turn",
                data: {
                    myReplayData: FBInstant.context.getID(),
                    gameType: that.modelType
                },
                strategy: "IMMEDIATE",
                notification: "NO_PUSH"
            }).then(function() {
                console.log("updateAsync====pk消息发送给好友OK");
                FBInstant.context.switchAsync("").then(function() {
                    console.log("switchAsync");
                });
            });
        });
    }
    static sendToFBBestScore(score) {
        if (!GameBaseData.isFBSDK) {
            return;
        }
        console.log("提交最佳分数");
        FBInstant.postSessionScore(score);
    }
    static FBEvent(type) {
        let eventS = "";
        switch (type) {
            case 1:
            case 2:
            case 3:
                eventS = "loaded";
                break;
            case 4:
                eventS = "y002_start1";
                break;
            case 5:
                eventS = "y002_start2";
                break;
            case 6:
                eventS = "y003_skin1";
                break;
            case 7:
                eventS = "y003_skin2";
                break;
            case 8:
                eventS = "erbei_dj";
                break;
            case 9:
                eventS = "erbei_sp_cg";
                break;
            case 10:
                eventS = "erbei_sp_sb";
                break;
            case 11:
                eventS = "erbei_wgg";
                break;
            case 12:
                eventS = "fuhuo_dj";
                break;
            case 13:
                eventS = "fuhuo_sp_cg";
                break;
            case 14:
                eventS = "fuhuo_sp_sb";
                break;
            case 15:
                eventS = "fuhuo_wgg";
                break;
            case 16:
                eventS = "dpf_dj";
                break;
            case 17:
                eventS = "dpf_sp_cg";
                break;
            case 18:
                eventS = "dpf_sp_sb";
                break;
            case 19:
                eventS = "dpf_wgg";
                break;
            case 20:
                eventS = "y007_share";
                break;
            case 21:
                eventS = "y007_invite";
                break;
            case 22:
                eventS = "y007_login";
                break;
            case 23:
                eventS = "y002_start3";
                break;
            case 24:
                eventS = "y007_share1";
                break;
            case 25:
                eventS = "y010_fps20";
                break;
            case 26:
                eventS = "y010_fps30";
                break;
            case 27:
                eventS = "y010_fps40";
                break;
            case 28:
                eventS = "y010_fps50";
                break;
            case 29:
                eventS = "y010_fps60";
                break;
            case 30:
                eventS = "y011_start1";
                break;
            case 31:
                eventS = "y011_start2";
                break;
            case 32:
                eventS = "y011_start3";
                break;
            case 33:
                eventS = "y101_vs1";
                break;
            case 34:
                eventS = "y101_vs2";
                break;
            case 35:
                eventS = "y101_vs3";
                break;
            case 36:
                eventS = "y101_vs4";
                break;
            case 37:
                eventS = "y101_vs5";
                break;
            case 38:
                eventS = "y101_msg";
                break;
            case 39:
                eventS = "y101_shareRelive";
                break;
            case 40:
                eventS = "y012_start1";
                break;
            case 41:
                eventS = "y012_start2";
                break;
            case 42:
                eventS = "y012_start3";
                break;
            case 43:
                eventS = "dpf_cp_cg";
                break;
            case 44:
                eventS = "dpf_cp_sb";
                break;
            case 45:
                eventS = "fuhuo_cp_cg";
                break;
            case 46:
                eventS = "fuhuo_cp_sb";
                break;
            case 47:
                eventS = "erbei_cp_cg";
                break;
            case 48:
                eventS = "erbei_cp_sb";
                break;
            case 49:
                eventS = "qiangntan_dj";
                break;
            case 50:
                eventS = "qiangntan_sp_cg";
                break;
            case 51:
                eventS = "qiangntan_sp_sb";
                break;
            case 52:
                eventS = "qiangntan_cp_cg";
                break;
            case 53:
                eventS = "qiangntan_cp_sb";
                break;
            case 54:
                eventS = "qiangntan_wgg";
                break;
        }
        if (GameBaseData.isDebug) {
            console.log("eventS===" + eventS);
        }
        if (this.isFBSDK) {}
    }
    static FBEventNew(type) {
        let eventS = "";
        switch (type) {
            case 0:
                eventS = "jrfmN";
                if (GameBaseData._newUser1 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjrfmN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjrfm");
                    }
                    GameBaseData._newUser1 = 1;
                }
                break;
            case 1:
                eventS = "djksyx";
                break;
            case 2:
                if (this.jrTimse == 1 && this.isFBSDK) {
                    FBInstant.logEvent("decjrgk");
                } else if (this.jrTimse == 2 && this.isFBSDK) {
                    FBInstant.logEvent("dscjrgk");
                }
                this.jrTimse++;
                eventS = "jrgk";
                if (GameBaseData._newUser2 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjrgkN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjrgkN");
                    }
                    GameBaseData._newUser2 = 1;
                }
                break;
            case 3:
                eventS = "cg10m";
                break;
            case 4:
                eventS = "cxfh";
                break;
            case 5:
                eventS = "jsjm";
                if (GameBaseData._newUser3 == 0 && touch.GameData.instance.record == 0 && touch.GameData.instance.record2 == 0 && touch.GameData.instance.star == 0) {
                    if (this.isFBSDK) {
                        FBInstant.logEvent("scjsjmN");
                    }
                    if (GameBaseData.isDebug) {
                        console.log("================scjsjm");
                    }
                    GameBaseData._newUser3 = 1;
                }
                break;
            case 6:
                eventS = "bufh1";
                break;
            case 7:
                eventS = "bufh2";
                break;
        }
        if (!this.isFBSDK) {
            if (GameBaseData.isDebug) {
                console.log("eventS===" + eventS);
            }
            return;
        }
        FBInstant.logEvent(eventS);
    }
    static deepCopy(obj) {
        var ary2 = JSON.parse(JSON.stringify(obj));
        return ary2;
    }
    static getCPFlag() {
        if (GameBaseData.modelType == 0) {
            if (GameBaseData.cpScore > 2) {
                return 1;
            }
        } else if (GameBaseData.modelType == 1) {
            if (GameBaseData.cpScore > 300) {
                return 1;
            }
        } else {
            return 1;
        }
        return 0;
    }
    static mygame_getShortName(str, maxLen) {
        maxLen = maxLen || 10;
        var l = str.length;
        var blen = 0;
        var temp = str;
        for (var i = 0; i < l; i++) {
            if ((str.charCodeAt(i) & 0xff00) != 0) {
                blen++;
            }
            blen++;
            if (blen > maxLen) {
                temp = str.slice(0, i) + '...';
                break;
            }
        }
        return temp;
    }
}
GameBaseData.isFBSDK = false;
GameBaseData.isDebug = false;
GameBaseData.isErbei = false;
GameBaseData.isIOS = false;
GameBaseData.myRank = null;
GameBaseData.myRank_friend = null;
GameBaseData.allRank = [];
GameBaseData.friendRank = [];
GameBaseData.newModeMyRank = null;
GameBaseData.newModeallRank = [];
GameBaseData.myRank_model1 = null;
GameBaseData.myRank_friend_model1 = null;
GameBaseData.allRank_model1 = [];
GameBaseData.friendRank_model1 = [];
GameBaseData.beyondList = [];
GameBaseData.beyondHead = [];
GameBaseData.beyondLoadTime = 0;
GameBaseData.beyondRankLength_mode0 = 0;
GameBaseData.beyondRankLength_mode1 = 0;
GameBaseData.fbHead = "";
GameBaseData.rankUidToShare = [];
GameBaseData.rankUidToShareModel1 = [];
GameBaseData.FBContextID = "";
GameBaseData.pkFriendUID = "";
GameBaseData.FBUpscore = false;
GameBaseData.isShowGameView = false;
GameBaseData.UID = null;
GameBaseData.modelType = 0;
GameBaseData.modelDif = 0;
GameBaseData.modelGoal = 0;
GameBaseData.modelScore = 0;
GameBaseData.modelSpeed = 0;
GameBaseData.cpScore = 0;
GameBaseData.cpGGTimes = 0;
GameBaseData.cpGGTimesLvl = 0;
GameBaseData.CPGG = ["792794774390776_808981456105441", "792794774390776_946149259055326", "792794774390776_808981052772148", "792794774390776_808981456105441", ];
GameBaseData.CPGGIndex = 0;
GameBaseData.CPGGErrtimes = 0;
GameBaseData.CPGGObj = null;
GameBaseData.CPGGState = -1;
GameBaseData.CPGGPlayTime = 0;
GameBaseData.GGIndex = 0;
GameBaseData.GGErrtimes = 0;
GameBaseData.GG = null;
GameBaseData.GGState = -1;
GameBaseData.GGPlayTime = 0;
GameBaseData.GGID = ["792794774390776_1150570965279820", "792794774390776_1150571145279802", "792794774390776_1150571315279785", ];
GameBaseData.multiDeadCount = 0;
GameBaseData.singleDeadCount = 0;
GameBaseData.pkDeadCount = 0;
GameBaseData.curLevelFirstDeadNum = 0;
GameBaseData.reviveCount = 0;
GameBaseData.gameLv = 0;
GameBaseData.gameSpeed = 1;
GameBaseData.gameLvInit = 0;
GameBaseData.isRewardedVideoAsync = true;
GameBaseData.isInterstitialAdAsync = true;
GameBaseData.jrTimse = 0;
GameBaseData._newUser1 = 0;
GameBaseData._newUser2 = 0;
GameBaseData._newUser3 = 0;
class RankObj {}