var touch;
(function(touch) {
    class GameData extends Laya.EventDispatcher {
        constructor() {
            super();
            this._star = 0;
            this._diamond = 0;
            this._record = 0;
            this._record2 = 0;
            this._homescreen = 0;
            this._skinUnlocks = [0];
            this._videoNums = null;
            this._pkNums = [0];
            this._pkComNums = [0];
            this._skinIndex = 0;
            this._showSkinIndex = 0;
            this._isMusicOn = false;
            this._isSoundOn = false;
            this._isVibrateOn = false;
            this._dailyVaild = false;
            this._dailyCount = 0;
            this._weekCount = 0;
            this._bgSkinIndex = 0;
            this._onlineTime = 0;
            this._onlineIndex = 0;
            this._storeTime = 0;
            this._userInfo = null;
            this._rank = 0;
            this._isGame1On = true;
            this._isGame2On = true;
            this._isGame3On = true;
            this._isGame4On = true;
            this._isGame5On = true;
            this._isGame6On = true;
            this._singlerecord = 0;
            this._mulrecord = 0;
            let skinUnlocks = Laya.LocalStorage.getItem("skin_unlock");
            if (skinUnlocks) {
                let unlocks = skinUnlocks.split(",");
                unlocks.forEach(element => {
                    let index = parseInt(element);
                    if (-1 == this._skinUnlocks.indexOf(index)) {
                        this._skinUnlocks.push(index);
                    }
                });
            }
            let videoNumStr = Laya.LocalStorage.getItem("videoNums");
            if (videoNumStr) {
                this._videoNums = new Array();
                let videoNums = videoNumStr.split(",");
                videoNums.forEach(element => {
                    this._videoNums.push(parseInt(element));
                });
            } else {
                this._videoNums = new Array();
                for (var index = 0; index < touch.GameConfig.SKIN_VIDEO.length; index++) {
                    this._videoNums.push(0);
                }
            }
            let pkNumStr = Laya.LocalStorage.getItem("pkNums");
            if (pkNumStr) {
                this._pkNums = new Array();
                let pkNums = pkNumStr.split(",");
                pkNums.forEach(element => {
                    this._pkNums.push(parseInt(element));
                });
            } else {
                this._pkNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkNums.push(0);
                }
            }
            let pkComNumStr = Laya.LocalStorage.getItem("pkComNums");
            if (pkComNumStr) {
                this._pkComNums = new Array();
                let pkComNums = pkComNumStr.split(",");
                pkComNums.forEach(element => {
                    this._pkComNums.push(parseInt(element));
                });
            } else {
                this._pkComNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkComNums.push(0);
                }
            }
            let skinIndex = Laya.LocalStorage.getItem("skin_index");
            if (skinIndex) {
                this.skinIndex = parseInt(skinIndex);
                if (0 == this.skinIndex) {
                    this.randomSkinIndex();
                }
            }
            let record = Laya.LocalStorage.getItem("record");
            if (record) {
                this._record = parseInt(record);
            }
            let record2 = Laya.LocalStorage.getItem("record2");
            if (record2) {
                this._record2 = parseInt(record2);
            }
            let singlerecord = Laya.LocalStorage.getItem("singlerecord");
            if (singlerecord) {
                this._singlerecord = parseInt(singlerecord);
            }
            let mulrecord = Laya.LocalStorage.getItem("mulrecord");
            if (mulrecord) {
                this._mulrecord = parseInt(mulrecord);
            }
            let homescreen = Laya.LocalStorage.getItem("homescreen");
            if (homescreen) {
                this._homescreen = parseInt(homescreen);
            }
            let diamond = Laya.LocalStorage.getItem("diamond");
            if (diamond) {
                this._diamond = parseInt(diamond);
            } else {
                this._diamond = 400;
            }
            let star = Laya.LocalStorage.getItem("star");
            if (star) {
                this._star = parseInt(star);
            } else {
                this._star = 0;
            }
            let newUser = Laya.LocalStorage.getItem("newUser");
            if (newUser) {
                GameBaseData._newUser1 = 1;
                GameBaseData._newUser2 = 1;
                GameBaseData._newUser3 = 1;
            } else {
                GameBaseData._newUser1 = 0;
                GameBaseData._newUser2 = 0;
                GameBaseData._newUser3 = 0;
                Laya.LocalStorage.setItem("newUser", "1");
            }
            let isMusicOn = Laya.LocalStorage.getItem("isMusicOn");
            this.isMusicOn = ("false" == isMusicOn) ? false : true;
            let isSoundOn = Laya.LocalStorage.getItem("isSoundOn");
            this.isSoundOn = ("false" == isSoundOn) ? false : true;
            let isVibrateOn = Laya.LocalStorage.getItem("isVibrateOn");
            this.isVibrateOn = ("false" == isVibrateOn) ? false : true;
            let dailyDate = Laya.LocalStorage.getItem("dailyDate");
            if (dailyDate) {
                let date = new Date();
                this._dailyVaild = (dailyDate != date.toDateString());
            } else {
                this._dailyVaild = true;
            }
            let pkDate = Laya.LocalStorage.getItem("pkDate");
            let _pkVaild = false;
            if (pkDate) {
                let date = new Date();
                _pkVaild = (pkDate != date.toDateString());
            } else {
                _pkVaild = true;
            }
            if (_pkVaild) {
                this._pkNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkNums.push(0);
                }
                this._pkComNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkComNums.push(0);
                }
                let date = new Date();
                Laya.LocalStorage.setItem("pkDate", date.toDateString());
            }
            let dailyCount = Laya.LocalStorage.getItem("dailyCount");
            if (dailyCount) {
                this._dailyCount = parseInt(dailyCount);
                if (this._dailyVaild && this._dailyCount >= 7) {
                    this._dailyCount = 0;
                }
            } else {
                this._dailyCount = 0;
            }
            let weekCount = Laya.LocalStorage.getItem("weekCount");
            if (weekCount) {
                this._weekCount = parseInt(weekCount);
            } else {
                this._weekCount = 0;
            }
            if (7 == this._dailyCount && this._dailyVaild) {
                this._weekCount++;
                Laya.LocalStorage.setItem("weekCount", this._weekCount.toString());
                this._dailyCount = 0;
            }
            let bgSkinIndex = Laya.LocalStorage.getItem("bgSkinIndex");
            if (bgSkinIndex) {
                this._bgSkinIndex = parseInt(bgSkinIndex);
            }
            let onlineDate = Laya.LocalStorage.getItem("onlineDate");
            let isNewDay = false;
            let date = new Date();
            if (onlineDate) {
                isNewDay = (onlineDate != date.toDateString());
                GameBaseData.clearUidToShare();
            }
            Laya.LocalStorage.setItem("onlineDate", date.toDateString());
            let onlineTime = Laya.LocalStorage.getItem("onlineTime");
            if (onlineTime) {
                this._onlineTime = isNewDay ? 0 : parseInt(onlineTime);
            }
            let onlineIndex = Laya.LocalStorage.getItem("onlineIndex");
            if (onlineIndex) {
                this._onlineIndex = isNewDay ? 0 : parseInt(onlineIndex);
            }
            let isGame1On = Laya.LocalStorage.getItem("isGame1On");
            if (isGame1On) {
                this.isGame1On = ("false" == isGame1On) ? false : true;
                this.isGame1On = isNewDay ? true : false;
            }
            let isGame2On = Laya.LocalStorage.getItem("isGame2On");
            if (isGame2On) {
                this.isGame2On = ("false" == isGame2On) ? false : true;
                this.isGame2On = isNewDay ? true : false;
            }
            let isGame3On = Laya.LocalStorage.getItem("isGame3On");
            if (isGame3On) {
                this.isGame3On = ("false" == isGame3On) ? false : true;
                this.isGame3On = isNewDay ? true : false;
            }
            let isGame4On = Laya.LocalStorage.getItem("isGame4On");
            if (isGame4On) {
                this.isGame4On = ("false" == isGame4On) ? false : true;
                this.isGame4On = isNewDay ? true : false;
            }
            let isGame5On = Laya.LocalStorage.getItem("isGame5On");
            if (isGame5On) {
                this.isGame5On = ("false" == isGame5On) ? false : true;
                this.isGame5On = isNewDay ? true : false;
            }
            let isGame6On = Laya.LocalStorage.getItem("isGame6On");
            if (isGame6On) {
                this.isGame2On = ("false" == isGame6On) ? false : true;
                this.isGame6On = isNewDay ? true : false;
            }
        }
        getObj() {
            let obj = {
                uid: "",
                skin_unlock: this._skinUnlocks.toString(),
                videoNums: this._videoNums.toString(),
                pkNums: this._pkNums.toString(),
                pkComNums: this._pkComNums.toString(),
                skin_index: this._skinIndex.toString(),
                record: this._record.toString(),
                record2: this._record2.toString(),
                mulrecord: this._mulrecord.toString(),
                singlerecord: this._singlerecord.toString(),
                diamond: this._diamond.toString(),
                star: this._star.toString(),
                dailyDate: Laya.LocalStorage.getItem("dailyDate"),
                pkDate: Laya.LocalStorage.getItem("pkDate"),
                dailyCount: this._dailyCount.toString(),
                onlineDate: Laya.LocalStorage.getItem("onlineDate"),
                onlineTime: this._onlineTime.toString(),
                onlineIndex: this._onlineIndex.toString(),
                weekCount: this._weekCount.toString(),
                bgSkinIndex: this._bgSkinIndex.toString(),
                rankUidToShare: GameBaseData.getRankUidToShareString(0),
                rankUidToShareModel1: GameBaseData.getRankUidToShareString(1),
            };
            return obj;
        }
        saveFBobj() {
            if (GameBaseData.isDebug) {
                console.log("setFBInfo");
            }
            if (!GameBaseData.isFBSDK)
                return;
            var o = this.getObj();
            var that = this;
            FBInstant.player.setDataAsync({
                ballData: o,
            }).then(FBInstant.player.flushDataAsync).then(function() {
                if (GameBaseData.isDebug) {
                    console.log("FB data has save");
                }
            });
        }
        setFbObj(obj) {
            let skinUnlocks = obj.skin_unlock;
            this._skinUnlocks = [];
            if (skinUnlocks) {
                this._skinUnlocks = [];
                let unlocks = skinUnlocks.split(",");
                unlocks.forEach(element => {
                    let index = parseInt(element);
                    if (-1 == this._skinUnlocks.indexOf(index)) {
                        this._skinUnlocks.push(index);
                    }
                });
            }
            let videoNumStr = obj.videoNums;
            this._videoNums = [];
            if (videoNumStr) {
                this._videoNums = new Array();
                let videoNums = videoNumStr.split(",");
                videoNums.forEach(element => {
                    this._videoNums.push(parseInt(element));
                });
            } else {
                this._videoNums = new Array();
                for (var index = 0; index < touch.GameConfig.SKIN_VIDEO.length; index++) {
                    this._videoNums.push(0);
                }
            }
            let pkNumStr = obj.pkNums;
            this._pkNums = [];
            if (pkNumStr) {
                this._pkNums = new Array();
                let pkNums = pkNumStr.split(",");
                pkNums.forEach(element => {
                    this._pkNums.push(parseInt(element));
                });
            } else {
                this._pkNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkNums.push(0);
                }
            }
            let pkComNumStr = obj.pkComNums;
            this._pkComNums = [];
            if (pkComNumStr) {
                this._pkComNums = new Array();
                let pkComNums = pkComNumStr.split(",");
                pkComNums.forEach(element => {
                    this._pkComNums.push(parseInt(element));
                });
            } else {
                this._pkComNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkComNums.push(0);
                }
            }
            let skinIndex = obj.skin_index;
            if (skinIndex) {
                this.skinIndex = parseInt(skinIndex);
                if (0 == this.skinIndex) {
                    this.randomSkinIndex();
                }
            }
            let record = obj.record;
            if (record) {
                this._record = parseInt(record);
            }
            let record2 = obj.record2;
            if (record2) {
                this._record2 = parseInt(record2);
            }
            let singlerecord = obj.singlerecord;
            if (singlerecord) {
                this._singlerecord = parseInt(singlerecord);
            }
            let mulrecord = obj.mulrecord;
            if (mulrecord) {
                this._mulrecord = parseInt(mulrecord);
            }
            let diamond = obj.diamond;
            if (diamond) {
                this._diamond = parseInt(diamond);
            } else {
                this._diamond = 400;
            }
            let star = obj.star;
            if (star) {
                this._star = parseInt(star);
            } else {
                this._star = 0;
            }
            let dailyDate = obj.dailyDate;
            if (dailyDate) {
                let date = new Date();
                this._dailyVaild = (dailyDate != date.toDateString());
            } else {
                this._dailyVaild = true;
            }
            let pkDate = obj.pkDate;
            let _pkVaild = false;
            if (pkDate) {
                let date = new Date();
                _pkVaild = (pkDate != date.toDateString());
            } else {
                _pkVaild = true;
            }
            if (_pkVaild) {
                this._pkNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkNums.push(0);
                }
                this._pkComNums = new Array();
                for (var index = 0; index < touch.GameConfig.PK_GOAL_CONFIG.length; index++) {
                    this._pkComNums.push(0);
                }
                let date = new Date();
                Laya.LocalStorage.setItem("pkDate", date.toDateString());
            }
            let dailyCount = obj.dailyCount;
            if (dailyCount) {
                this._dailyCount = parseInt(dailyCount);
                if (this._dailyVaild && this._dailyCount >= 7) {
                    this._dailyCount = 0;
                }
            } else {
                this._dailyCount = 0;
            }
            let weekCount = obj.weekCount;
            if (weekCount) {
                this._weekCount = parseInt(weekCount);
            } else {
                this._weekCount = 0;
            }
            if (7 == this._dailyCount && this._dailyVaild) {
                this._weekCount++;
                Laya.LocalStorage.setItem("weekCount", this._weekCount.toString());
                this._dailyCount = 0;
            }
            let bgSkinIndex = obj.bgSkinIndex;
            if (bgSkinIndex) {
                this._bgSkinIndex = parseInt(bgSkinIndex);
            }
            let onlineDate = obj.onlineDate;
            let isNewDay = false;
            let date = new Date();
            if (onlineDate) {
                isNewDay = (onlineDate != date.toDateString());
                GameBaseData.clearUidToShare();
            }
            Laya.LocalStorage.setItem("onlineDate", date.toDateString());
            let onlineTime = obj.onlineTime;
            if (onlineTime) {
                this._onlineTime = isNewDay ? 0 : parseInt(onlineTime);
            }
            let onlineIndex = obj.onlineIndex;
            if (onlineIndex) {
                this._onlineIndex = isNewDay ? 0 : parseInt(onlineIndex);
            }
            let rankUidToShare = obj.rankUidToShare;
            if (rankUidToShare) {
                GameBaseData.rankUidToShare = [];
                let ranksUid = rankUidToShare.split(",");
                ranksUid.forEach(element => {
                    GameBaseData.rankUidToShare.push(element);
                });
                if (GameBaseData.isDebug) {
                    console.log(GameBaseData.rankUidToShare);
                    console.log("----------");
                    console.log(GameBaseData.getRankUidToShareString(0));
                }
                if (isNewDay) {
                    GameBaseData.rankUidToShare = [];
                }
            }
            let rankUidToShareModel1 = obj.rankUidToShareModel1;
            if (rankUidToShareModel1) {
                GameBaseData.rankUidToShareModel1 = [];
                let ranksUid = rankUidToShareModel1.split(",");
                ranksUid.forEach(element => {
                    GameBaseData.rankUidToShareModel1.push(element);
                });
                if (GameBaseData.isDebug) {
                    console.log(GameBaseData.rankUidToShareModel1);
                    console.log("----------");
                    console.log(GameBaseData.getRankUidToShareString(1));
                }
                if (isNewDay) {
                    GameBaseData.rankUidToShareModel1 = [];
                }
            }
        }
        static get instance() {
            if (null == GameData._instance) {
                if (GameBaseData.isDebug) {
                    console.log("1 GameData  instance()");
                }
                GameData._instance = new GameData();
            }
            return GameData._instance;
        }
        destroy() {}
        set star(value) {
            this._star = value;
            Laya.LocalStorage.setItem("star", this._star.toString());
        }
        setAddStar(addVal) {
            this._star += addVal;
            Laya.LocalStorage.setItem("star", this._star.toString());
            this.saveFBobj();
        }
        set diamond(value) {
            this._diamond = value;
            Laya.LocalStorage.setItem("diamond", this._diamond.toString());
        }
        setAddDiamond(addVal) {
            this._diamond += addVal;
            Laya.LocalStorage.setItem("diamond", this._diamond.toString());
            this.saveFBobj();
        }
        get record() {
            return this._record;
        }
        set record(value) {
            this._record = value;
            Laya.LocalStorage.setItem("record", this._record.toString());
        }
        get record2() {
            return this._record2;
        }
        set record2(value) {
            this._record2 = value;
            Laya.LocalStorage.setItem("record2", this._record2.toString());
        }
        get singlerecord() {
            return this._singlerecord;
        }
        set singlerecord(value) {
            this._singlerecord = value;
        }
        get mulrecord() {
            return this._mulrecord;
        }
        set mulrecord(value) {
            this._mulrecord = value;
        }
        get homeScreen() {
            return this._homescreen;
        }
        set homeScreen(value) {
            this._homescreen = value;
            Laya.LocalStorage.setItem("homescreen", this._homescreen.toString());
        }
        get diamond() {
            return this._diamond;
        }
        get star() {
            return this._star;
        }
        set skinIndex(value) {
            this._skinIndex = value;
            this._showSkinIndex = value;
            Laya.LocalStorage.setItem("skin_index", this._skinIndex.toString());
        }
        get skinIndex() {
            return this._skinIndex;
        }
        set showSkinIndex(value) {
            this._showSkinIndex = value;
            this._skinIndex = value;
        }
        get showSkinIndex() {
            return this._showSkinIndex;
        }
        randomSkinIndex() {
            let randomIndex = touch.MathUtil.randomInt(0, this._skinUnlocks.length - 1);
            this._showSkinIndex = this._skinUnlocks[randomIndex];
        }
        unlockSkin(skinIndex) {
            if (-1 == this._skinUnlocks.indexOf(skinIndex)) {
                this._skinUnlocks.push(skinIndex);
                let skin_unlock = this._skinUnlocks.toString();
                Laya.LocalStorage.setItem("skin_unlock", skin_unlock);
                this.saveFBobj();
            }
        }
        getUnlockSkins() {
            return this._skinUnlocks;
        }
        addPKNum(index, nums) {
            if (index >= 0 && index < this._pkNums.length) {
                let numsTemp = this._pkNums[index];
                if (this._pkNums[index] < nums) {
                    this._pkNums[index] = nums;
                }
                let pkNums = this._pkNums.toString();
                Laya.LocalStorage.setItem("pkNums", pkNums);
                this.saveFBobj();
            }
        }
        addPKComNum(index, nums) {
            if (index >= 0 && index < this._pkComNums.length) {
                let numsTemp = this._pkComNums[index];
                if (this._pkComNums[index] < nums) {
                    this._pkComNums[index] = nums;
                }
                let pkComNums = this._pkComNums.toString();
                Laya.LocalStorage.setItem("pkComNums", pkComNums);
                this.saveFBobj();
            }
        }
        addVideoNum(index, nums, flag) {
            if (index >= 0 && index < this._videoNums.length) {
                let numsTemp = this._videoNums[index];
                if (nums > 0) {
                    if (this._videoNums[index] < nums) {
                        this._videoNums[index] = nums;
                    }
                } else {
                    this._videoNums[index] = this._videoNums[index] + 1;
                }
                if (flag > 0) {
                    let videoNums = this._videoNums.toString();
                    Laya.LocalStorage.setItem("videoNums", videoNums);
                }
                this.setNewFlag(index, numsTemp);
            }
        }
        getNewFlag(index) {
            for (var i = 0; i < touch.GameConfig.SKIN_TYPE.length; i++) {
                if (touch.GameConfig.SKIN_TYPE[i] == 1 && i > index) {
                    return i;
                }
            }
            return 0;
        }
        getNewTipFlag() {
            for (var i = 0; i < touch.GameConfig.SKIN_TYPE.length; i++) {
                if (touch.GameConfig.SKIN_TYPE1[i] == 1) {
                    touch.GameConfig.SKIN_TYPE1[i] = 0;
                    return i;
                }
            }
            return 0;
        }
        setNewFlag(index, temp) {
            for (var i = 0; i < touch.GameConfig.SKIN_TYPE.length; i++) {
                if (touch.GameConfig.SKIN_TYPE[i] == 0) {
                    if (index == 1) {
                        for (var j = 0; j < 5; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 1] > temp && touch.GameConfig.SKIN_VIDEO[j + 1] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 1] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 1] = 1;
                            }
                        }
                    } else if (index == 6) {
                        for (var j = 0; j < 3; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 6] > temp && touch.GameConfig.SKIN_VIDEO[j + 6] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 6] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 6] = 1;
                            }
                        }
                    } else if (index == 9) {
                        for (var j = 0; j < 5; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 9] > temp && touch.GameConfig.SKIN_VIDEO[j + 9] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 9] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 9] = 1;
                            }
                        }
                    } else if (index == 14) {
                        for (var j = 0; j < 3; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 14] > temp && touch.GameConfig.SKIN_VIDEO[j + 14] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 14] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 14] = 1;
                            }
                        }
                    } else if (index == 17) {
                        for (var j = 0; j < 3; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 17] > temp && touch.GameConfig.SKIN_VIDEO[j + 17] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 17] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 17] = 1;
                            }
                        }
                    } else if (index == 20) {
                        for (var j = 0; j < 3; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 20] > temp && touch.GameConfig.SKIN_VIDEO[j + 20] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 20] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 20] = 1;
                            }
                        }
                    } else if (index == 23) {
                        for (var j = 0; j < 7; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 23] > temp && touch.GameConfig.SKIN_VIDEO[j + 23] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 23] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 23] = 1;
                            }
                        }
                    } else if (index == 26) {
                        for (var j = 0; j < 4; j++) {
                            if (touch.GameConfig.SKIN_VIDEO[j + 26] > temp && touch.GameConfig.SKIN_VIDEO[j + 26] <= this._videoNums[index]) {
                                touch.GameConfig.SKIN_TYPE[j + 26] = 1;
                                touch.GameConfig.SKIN_TYPE1[j + 26] = 1;
                            }
                        }
                    }
                }
            }
            return;
        }
        get pkNums() {
            return this._pkNums;
        }
        get pkComNums() {
            return this._pkComNums;
        }
        get videoNums() {
            return this._videoNums;
        }
        set isMusicOn(value) {
            this._isMusicOn = value;
            Laya.LocalStorage.setItem("isMusicOn", value ? "true" : "false");
            touch.SoundManager.setMusicVolume(value ? 1 : 0);
        }
        get isMusicOn() {
            return this._isMusicOn;
        }
        set isSoundOn(value) {
            this._isSoundOn = value;
            Laya.LocalStorage.setItem("isSoundOn", value ? "true" : "false");
            touch.SoundManager.setSoundVolume(value ? 1 : 0);
        }
        get isSoundOn() {
            return this._isSoundOn;
        }
        set isVibrateOn(value) {
            this._isVibrateOn = value;
            Laya.LocalStorage.setItem("isVibrateOn", value ? "true" : "false");
        }
        get isVibrateOn() {
            return this._isVibrateOn;
        }
        set isGame1On(value) {
            this._isGame1On = value;
            Laya.LocalStorage.setItem("isGame1On", value ? "true" : "false");
        }
        get isGame1On() {
            return this._isGame1On;
        }
        set isGame2On(value) {
            this._isGame2On = value;
            Laya.LocalStorage.setItem("isGame2On", value ? "true" : "false");
        }
        get isGame2On() {
            return this._isGame2On;
        }
        set isGame3On(value) {
            this._isGame3On = value;
            Laya.LocalStorage.setItem("isGame3On", value ? "true" : "false");
        }
        get isGame3On() {
            return this._isGame3On;
        }
        set isGame4On(value) {
            this._isGame4On = value;
            Laya.LocalStorage.setItem("isGame4On", value ? "true" : "false");
        }
        get isGame4On() {
            return this._isGame4On;
        }
        set isGame5On(value) {
            this._isGame5On = value;
            Laya.LocalStorage.setItem("isGame5On", value ? "true" : "false");
        }
        get isGame5On() {
            return this._isGame5On;
        }
        set isGame6On(value) {
            this._isGame6On = value;
            Laya.LocalStorage.setItem("isGame6On", value ? "true" : "false");
        }
        get isGame6On() {
            return this._isGame6On;
        }
        set dailyVaild(value) {
            this._dailyVaild = value;
            let date = new Date();
            Laya.LocalStorage.setItem("dailyDate", date.toDateString());
            this._dailyCount++;
            Laya.LocalStorage.setItem("dailyCount", this._dailyCount.toString());
        }
        get dailyVaild() {
            return this._dailyVaild;
        }
        get dailyCount() {
            return this._dailyCount;
        }
        get weekCount() {
            return this._weekCount;
        }
        set bgSkinIndex(value) {
            this._bgSkinIndex = value;
            Laya.LocalStorage.setItem("bgSkinIndex", this._bgSkinIndex.toString());
        }
        get bgSkinIndex() {
            return this._bgSkinIndex;
        }
        set onlineTime(value) {
            this._onlineTime = value;
            this._storeTime++;
            if (this._storeTime >= 10) {
                this._storeTime = 0;
                Laya.LocalStorage.setItem("onlineTime", this._onlineTime.toString());
            }
        }
        get onlineTime() {
            return this._onlineTime;
        }
        set onlineIndex(value) {
            this._onlineIndex = value;
            Laya.LocalStorage.setItem("onlineIndex", this._onlineIndex.toString());
        }
        get onlineIndex() {
            return this._onlineIndex;
        }
        get userInfo() {
            return this._userInfo;
        }
        set userInfo(value) {
            this._userInfo = value;
        }
        get rank() {
            return this._rank;
        }
        set rank(value) {
            this._rank = value;
        }
    }
    GameData._instance = null;
    touch.GameData = GameData;
})(touch || (touch = {}));