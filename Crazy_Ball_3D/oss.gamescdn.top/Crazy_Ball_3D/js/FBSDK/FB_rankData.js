class FBrankData {
    constructor() {
        this.isInit = false;
        this.nearbyRankData = null;
        this.globalRankData = null;
        this.friendRankData = null;
    }
    initialize() {
        if (this.isInit == true) {
            return;
        }
        this.nearbyRankData = [];
        this.globalRankData = [];
        this.friendRankData = [];
        this.isInit = true;
    }
    async_getRankData(rankType, getFun, needGetNew) {
        if (needGetNew) {
            this._setRankData(rankType, []);
        }
        var useRank;
        switch (rankType) {
            case "FB_globalRank":
                if (this.globalRankData.length > 0) {
                    useRank = this.globalRankData;
                } else {
                    this._loadGlobalRankDataBySDK(getFun);
                }
                break;
            case "FB_friendRank":
                if (this.friendRankData.length > 0) {
                    useRank = this.friendRankData;
                } else {
                    this._loadFriendRankDataBySDK(getFun);
                }
                break;
            case "FB_nearbyRank":
                if (this.nearbyRankData.length > 0) {
                    useRank = this.nearbyRankData;
                } else {
                    this._loadNearbyRankDataBySDK(getFun);
                }
                break;
        }
        if (getFun && useRank) {
            getFun(useRank);
        }
    }
    _loadGlobalRankDataBySDK(endFun) {
        console.log('get global rank');
        var count = 20;
        this.getEntriesAsyncInfo("ballRankM1_20200623_1", [{
            count: count,
            beginNum: 0
        }], (data) => {
            this._setRankData("FB_globalRank", data);
            if (endFun) {
                endFun(data);
            }
        }, null);
    }
    _loadFriendRankDataBySDK(endFun) {
        console.log('get friend rank');
        this.getConnectedPlayerEntriesAsync("ballRankM1_20200623_1", 100, 0, (data) => {
            this._setRankData("FB_friendRank", data);
            if (endFun) {
                endFun(data);
            }
        }, null);
    }
    _loadNearbyRankDataBySDK(endFun) {
        this.getPlayerEntryAsync("ballRankM1", (entry) => {
            if (entry != null) {
                var beginNum;
                if (entry.rank == 1) {
                    beginNum = 0;
                } else {
                    beginNum = entry.rank - 2;
                }
                this.getEntriesAsyncInfo("ballRankM1_20200623_1", [{
                    count: 3,
                    beginNum: beginNum
                }], (data) => {
                    this._setRankData("FB_nearbyRank", data);
                    if (endFun) {
                        endFun(data);
                    }
                }, null);
            }
        }, null);
    }
    _setRankData(rankType, data) {
        switch (rankType) {
            case "FB_globalRank":
                this.globalRankData = data;
                break;
            case "FB_friendRank":
                this.friendRankData = data;
                break;
            case "FB_nearbyRank":
                this.nearbyRankData = data;
                break;
        }
    }
    getEntriesAsyncInfo(key, leaderboardArr, callFun, leaderboardData) {
        if (leaderboardData == null) {
            leaderboardData = [];
        }
        var leaderboardInfo = leaderboardArr.shift();
        var self = this;
        FBInstant.getLeaderboardAsync(key).then(function(leaderboard) {
            return leaderboard.getEntriesAsync(leaderboardInfo.count, leaderboardInfo.beginNum);
        }).then(function(entries) {
            console.log("getEntriesAsync获取世界排行榜" + key + "成功：");
            console.log(entries);
            if (entries != null && entries.length > 0) {
                for (var n = 0; n < entries.length; n++) {
                    var rankObj = new RankObj();
                    rankObj.uuid = entries[n].getPlayer().getID();
                    rankObj.pic = entries[n].getPlayer().getPhoto();
                    rankObj.name = entries[n].getPlayer().getName();
                    rankObj.score = entries[n].getScore() + "";
                    rankObj.rank = entries[n].getRank();
                    leaderboardData.push(rankObj);
                }
            }
            if (callFun != null) {
                callFun(leaderboardData);
            }
        }).catch(function(e) {
            console.log("获取排行榜失败.");
            console.log(e);
        });
    }
    getConnectedPlayerEntriesAsync(key, count, beginNum, callFun, payFailFun) {
        var self = this;
        FBInstant.getLeaderboardAsync(key).then(function(leaderboard) {
            return leaderboard.getConnectedPlayerEntriesAsync(count, beginNum);
        }).then(function(entries) {
            console.log("getEntriesAsync获取好友排行榜成功：");
            console.log(entries);
            var data = [];
            if (entries != null && entries.length > 0) {
                for (var n = 0; n < entries.length; n++) {
                    var rankObj = new RankObj();
                    rankObj.uuid = entries[n].getPlayer().getID();
                    rankObj.pic = entries[n].getPlayer().getPhoto();
                    rankObj.name = entries[n].getPlayer().getName();
                    rankObj.score = entries[n].getScore() + "";
                    rankObj.rank = entries[n].getRank();
                    data.push(rankObj);
                    console.log(rankObj);
                }
            }
            if (callFun != null) {
                callFun(data);
            }
        }).catch(function(e) {
            console.log("获取好友排行榜失败。");
            console.log(e);
            if (payFailFun != null) {
                payFailFun(null);
            }
        });
    }
    getPlayerEntryAsync(key, callfun, payFailFun) {
        var self = this;
        FBInstant.getLeaderboardAsync(key).then(function(leaderboard) {
            return leaderboard.getPlayerEntryAsync();
        }).then(function(entry) {
            console.log("getPlayerEntryAsync获取自己排行榜成功：");
            console.log(entry);
            if (callfun != null) {
                if (entry != null) {
                    var rankObj = new RankObj();
                    rankObj.uuid = entry.getPlayer().getID();
                    rankObj.pic = entry.getPlayer().getPhoto();
                    rankObj.name = entry.getPlayer().getName();
                    rankObj.score = entry.getScore() + "";
                    rankObj.rank = entry.getRank();
                    callfun(rankObj);
                } else {
                    callfun(entry);
                }
            }
        }).catch(function(e) {
            console.log("获取自己排行失败。");
            console.log(e);
            if (payFailFun != null) {
                payFailFun(null);
            }
        });
    }
}