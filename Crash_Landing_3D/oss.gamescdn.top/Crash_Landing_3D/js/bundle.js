! function() {
    "use strict";
    class e extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0, this.Land = "Land", this.Flight = "Flight", this.Break = "Break", this.list = [], this.map = {}, this.map3 = {
                myName: "hahah",
                age: 1
            };
        }
        onEnable() {}
        onDisable() {}
        myTest() {
            this.sex && 2 == this.age || 1 == this.age || this.list.length, this.age;
            for (let e in this.map);
            for (; this.sex && this.sex;);
        }
    }
    class t extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        ffafafa() {}
    }
    class i extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        fvawfawfa() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        gfag() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag2() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan3() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag4() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan5() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfaghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfagfghjfgh() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
    }
    class a {
        constructor() {
            this._userData = null, this._userDataKey = "userData", this.init();
        }
        init() {
            this._userData = {
                isPlaySound: !0,
                isPlayVibrate: !0,
                isNoAds: !1,
                levelID: 0,
                isCollect: !1,
                highScore: 0
            }, this.readStorage(), this.initGameStatus(), null == this._userData.isNoAds && (this._userData.isNoAds = !1);
        }
        readStorage() {
            let e = Laya.LocalStorage.getItem(this._userDataKey);
            e && (this._userData = JSON.parse(e));
        }
        writeStorage() {
            this._userData && Laya.LocalStorage.setItem(this._userDataKey, JSON.stringify(this._userData));
        }
        removeStorage() {
            Laya.LocalStorage.removeItem(this._userDataKey);
        }
        isPlaySound() {
            return this._userData.isPlaySound;
        }
        setPlaySound(e) {
            this._userData.isPlaySound = e, this.writeStorage(), e ? g.soundMgr.playBGM() : g.soundMgr.stopBGM();
        }
        isPlayVibrate() {
            return this._userData.isPlayVibrate;
        }
        setPlayVibrate(e) {
            this._userData.isPlayVibrate = false;
        }
        getPlayHighScore() {
            if (!this._userData.highScore) {
                return 0;
            }
            return this._userData.highScore;
        }
        setPlayHighScore(e) {
            this._userData.highScore = e, this.writeStorage();
        }
        setCollect(e) {
            this._userData.isCollect = e, this.writeStorage();
        }
        isCollect() {
            return this._userData.isCollect;
        }
        isNoAds() {
            return this._userData.isNoAds;
        }
        setNoAds(e) {
            this._userData.isNoAds = e, this.writeStorage();
        }
        initGameStatus() {
            this._userData.gameStatus || (this._userData.gameStatus = {}), this._userData.gameStatus.maxLevel || (this._userData.gameStatus.maxLevel = 1), this._userData.gameStatus.maxScore || (this._userData.gameStatus.maxScore = 0), this._userData.gameStatus.gold || (this._userData.gameStatus.gold = 0), this._userData.signinTime || (this._userData.signinTime = 0), this._userData.skinTipsTime || (this._userData.skinTipsTime = 0), this.writeStorage();
        }
        isSkinTips() {
            return Math.floor(this._userData.skinTipsTime / 86400) != Math.floor(Date.parse(new Date().toString()) / 864e5);
        }
        setSkinTips(e) {
            this._userData.skinTipsTime = e ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3), this.writeStorage();
        }
        setSigninTime(e) {
            this._userData.signinTime = e, this.writeStorage();
        }
        isSignin() {
            let e = !0,
                t = this._userData.signinTime;
            return e = t < 2 || !(t < 3) && Math.floor(t / 86400) == Math.floor(Date.parse(new Date().toString()) / 864e5);
        }
        getSigninTime() {
            return this._userData.signinTime;
        }
        getGameStatus() {
            return this._userData.gameStatus;
        }
        setMaxLevel(e) {
            this._userData.gameStatus.maxLevel < e && (this._userData.gameStatus.maxLevel = e, this.writeStorage());
        }
        addGold(e) {
            this._userData.gameStatus.gold += e, this.writeStorage();
        }
        setMaxScore(e) {
            this._userData.gameStatus.maxScore < e && (this._userData.gameStatus.maxScore = e, this.writeStorage());
        }
    }
    class s {
        constructor() {
            for (var e in this._bgmCtx = null, this._soundType = ["bg", "button", "circle", "engine", "fall", "game over", "glide", "level flight", "rise", "star", "take off", "speed up", "super star"], this.faffsdfsfs = null, this._pathRoot = "res/Music/", this._soundCtx = {}, this._soundFile = [], this._soundType) {
                let t = this._soundType[e];
                this._soundFile.push(t);
            }
        }
        init() {
            let e = this._pathRoot,
                t = this._soundFile,
                i = this._soundFile.length,
                a = "";
            for (let s = 0; s < i; ++s) {
                a = t[s];
                let i = new Laya.SoundChannel();
                i.url = e + a + ".mp3", Laya.SoundManager.addChannel(i), this._soundCtx[a] = !0;
            }
        }
        play(e, t = 1) {
            this._soundCtx[e] && g.storageMgr.isPlaySound() && Laya.SoundManager.playSound(this._pathRoot + e + ".mp3", t);
        }
        stop(e) {
            this._soundCtx[e] && Laya.SoundManager.stopSound(this._pathRoot + e + ".mp3");
        }
        stopAll() {
            Laya.SoundManager.stopAll(), this.stopBGM();
        }
        playBGM() {
            let e = this._pathRoot + "bg.mp3";
            Laya.Browser.onWeiXin ? (null != this._bgmCtx && (this._bgmCtx.stop(), this._bgmCtx.destroy(), this._bgmCtx = null), this._bgmCtx = wx.createInnerAudioContext(), this._bgmCtx.src = e, this._bgmCtx.loop = !0, g.storageMgr.isPlaySound() && this._bgmCtx.play()) : (Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(e, 0));
        }
        stopBGM() {
            Laya.Browser.onWeiXin ? null != this._bgmCtx && this._bgmCtx.stop() : Laya.SoundManager.stopMusic();
        }
    }
    class n {
        static hex_md5(e) {
            return n.binl2hex(n.core_md5(n.str2binl(e), e.length * n.chrsz));
        }
        static b64_md5(e) {
            return n.binl2b64(n.core_md5(n.str2binl(e), e.length * n.chrsz));
        }
        static str_md5(e) {
            return n.binl2str(n.core_md5(n.str2binl(e), e.length * n.chrsz));
        }
        static hex_hmac_md5(e, t) {
            return n.binl2hex(n.core_hmac_md5(e, t));
        }
        static b64_hmac_md5(e, t) {
            return n.binl2b64(n.core_hmac_md5(e, t));
        }
        static str_hmac_md5(e, t) {
            return n.binl2str(n.core_hmac_md5(e, t));
        }
        static md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == n.hex_md5("abc");
        }
        static core_md5(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, a = -271733879, s = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                var l = i,
                    h = a,
                    d = s,
                    c = o;
                i = n.md5_ff(i, a, s, o, e[r + 0], 7, -680876936), o = n.md5_ff(o, i, a, s, e[r + 1], 12, -389564586), s = n.md5_ff(s, o, i, a, e[r + 2], 17, 606105819), a = n.md5_ff(a, s, o, i, e[r + 3], 22, -1044525330), i = n.md5_ff(i, a, s, o, e[r + 4], 7, -176418897), o = n.md5_ff(o, i, a, s, e[r + 5], 12, 1200080426), s = n.md5_ff(s, o, i, a, e[r + 6], 17, -1473231341), a = n.md5_ff(a, s, o, i, e[r + 7], 22, -45705983), i = n.md5_ff(i, a, s, o, e[r + 8], 7, 1770035416), o = n.md5_ff(o, i, a, s, e[r + 9], 12, -1958414417), s = n.md5_ff(s, o, i, a, e[r + 10], 17, -42063), a = n.md5_ff(a, s, o, i, e[r + 11], 22, -1990404162), i = n.md5_ff(i, a, s, o, e[r + 12], 7, 1804603682), o = n.md5_ff(o, i, a, s, e[r + 13], 12, -40341101), s = n.md5_ff(s, o, i, a, e[r + 14], 17, -1502002290), a = n.md5_ff(a, s, o, i, e[r + 15], 22, 1236535329), i = n.md5_gg(i, a, s, o, e[r + 1], 5, -165796510), o = n.md5_gg(o, i, a, s, e[r + 6], 9, -1069501632), s = n.md5_gg(s, o, i, a, e[r + 11], 14, 643717713), a = n.md5_gg(a, s, o, i, e[r + 0], 20, -373897302), i = n.md5_gg(i, a, s, o, e[r + 5], 5, -701558691), o = n.md5_gg(o, i, a, s, e[r + 10], 9, 38016083), s = n.md5_gg(s, o, i, a, e[r + 15], 14, -660478335), a = n.md5_gg(a, s, o, i, e[r + 4], 20, -405537848), i = n.md5_gg(i, a, s, o, e[r + 9], 5, 568446438), o = n.md5_gg(o, i, a, s, e[r + 14], 9, -1019803690), s = n.md5_gg(s, o, i, a, e[r + 3], 14, -187363961), a = n.md5_gg(a, s, o, i, e[r + 8], 20, 1163531501), i = n.md5_gg(i, a, s, o, e[r + 13], 5, -1444681467), o = n.md5_gg(o, i, a, s, e[r + 2], 9, -51403784), s = n.md5_gg(s, o, i, a, e[r + 7], 14, 1735328473), a = n.md5_gg(a, s, o, i, e[r + 12], 20, -1926607734), i = n.md5_hh(i, a, s, o, e[r + 5], 4, -378558), o = n.md5_hh(o, i, a, s, e[r + 8], 11, -2022574463), s = n.md5_hh(s, o, i, a, e[r + 11], 16, 1839030562), a = n.md5_hh(a, s, o, i, e[r + 14], 23, -35309556), i = n.md5_hh(i, a, s, o, e[r + 1], 4, -1530992060), o = n.md5_hh(o, i, a, s, e[r + 4], 11, 1272893353), s = n.md5_hh(s, o, i, a, e[r + 7], 16, -155497632), a = n.md5_hh(a, s, o, i, e[r + 10], 23, -1094730640), i = n.md5_hh(i, a, s, o, e[r + 13], 4, 681279174), o = n.md5_hh(o, i, a, s, e[r + 0], 11, -358537222), s = n.md5_hh(s, o, i, a, e[r + 3], 16, -722521979), a = n.md5_hh(a, s, o, i, e[r + 6], 23, 76029189), i = n.md5_hh(i, a, s, o, e[r + 9], 4, -640364487), o = n.md5_hh(o, i, a, s, e[r + 12], 11, -421815835), s = n.md5_hh(s, o, i, a, e[r + 15], 16, 530742520), a = n.md5_hh(a, s, o, i, e[r + 2], 23, -995338651), i = n.md5_ii(i, a, s, o, e[r + 0], 6, -198630844), o = n.md5_ii(o, i, a, s, e[r + 7], 10, 1126891415), s = n.md5_ii(s, o, i, a, e[r + 14], 15, -1416354905), a = n.md5_ii(a, s, o, i, e[r + 5], 21, -57434055), i = n.md5_ii(i, a, s, o, e[r + 12], 6, 1700485571), o = n.md5_ii(o, i, a, s, e[r + 3], 10, -1894986606), s = n.md5_ii(s, o, i, a, e[r + 10], 15, -1051523), a = n.md5_ii(a, s, o, i, e[r + 1], 21, -2054922799), i = n.md5_ii(i, a, s, o, e[r + 8], 6, 1873313359), o = n.md5_ii(o, i, a, s, e[r + 15], 10, -30611744), s = n.md5_ii(s, o, i, a, e[r + 6], 15, -1560198380), a = n.md5_ii(a, s, o, i, e[r + 13], 21, 1309151649), i = n.md5_ii(i, a, s, o, e[r + 4], 6, -145523070), o = n.md5_ii(o, i, a, s, e[r + 11], 10, -1120210379), s = n.md5_ii(s, o, i, a, e[r + 2], 15, 718787259), a = n.md5_ii(a, s, o, i, e[r + 9], 21, -343485551), i = n.safe_add(i, l), a = n.safe_add(a, h), s = n.safe_add(s, d), o = n.safe_add(o, c);
            }
            return Array(i, a, s, o);
        }
        static core_hmac_md5(e, t) {
            var i = n.str2binl(e);
            i.length > 16 && (i = n.core_md5(i, e.length * n.chrsz));
            for (var a = Array(16), s = Array(16), o = 0; o < 16; o++) a[o] = 909522486 ^ i[o], s[o] = 1549556828 ^ i[o];
            var r = n.core_md5(a.concat(n.str2binl(t)), 512 + t.length * n.chrsz);
            return n.core_md5(s.concat(r), 640);
        }
        static safe_add(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
        }
        static bit_rol(e, t) {
            return e << t | e >>> 32 - t;
        }
        static md5_cmn(e, t, i, a, s, o) {
            return n.safe_add(n.bit_rol(n.safe_add(n.safe_add(t, e), n.safe_add(a, o)), s), i);
        }
        static md5_ff(e, t, i, a, s, o, r) {
            return n.md5_cmn(t & i | ~t & a, e, t, s, o, r);
        }
        static md5_gg(e, t, i, a, s, o, r) {
            return n.md5_cmn(t & a | i & ~a, e, t, s, o, r);
        }
        static md5_hh(e, t, i, a, s, o, r) {
            return n.md5_cmn(t ^ i ^ a, e, t, s, o, r);
        }
        static md5_ii(e, t, i, a, s, o, r) {
            return n.md5_cmn(i ^ (t | ~a), e, t, s, o, r);
        }
        static str2binl(e) {
            for (var t = Array(), i = (1 << n.chrsz) - 1, a = 0; a < e.length * n.chrsz; a += n.chrsz) t[a >> 5] |= (e.charCodeAt(a / n.chrsz) & i) << a % 32;
            return t;
        }
        static binl2str(e) {
            for (var t = "", i = (1 << n.chrsz) - 1, a = 0; a < 32 * e.length; a += n.chrsz) t += String.fromCharCode(e[a >> 5] >>> a % 32 & i);
            return t;
        }
        static binl2hex(e) {
            for (var t = n.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0; a < 4 * e.length; a++) i += t.charAt(e[a >> 2] >> a % 4 * 8 + 4 & 15) + t.charAt(e[a >> 2] >> a % 4 * 8 & 15);
            return i;
        }
        static binl2b64(e) {
            for (var t = "", i = 0; i < 4 * e.length; i += 3)
                for (var a = (e[i >> 2] >> i % 4 * 8 & 255) << 16 | (e[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, s = 0; s < 4; s++) 8 * i + 6 * s > 32 * e.length ? t += n.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >> 6 * (3 - s) & 63);
            return t;
        }
    }
    n.hexcase = 0, n.b64pad = "", n.chrsz = 8;
    class o {
        constructor() {
            this.items = {};
        }
        has(e) {
            return e in this.items;
        }
        set(e, t) {
            this.items[e] = t;
        }
        remove(e) {
            return !!this.has(e) && (delete this.items[e], !0);
        }
        get(e) {
            return this.has(e) ? this.items[e] : void 0;
        }
        values() {
            var e = [];
            for (var t in this.items) this.has(t) && e.push(this.items[t]);
            return e;
        }
        getItems() {
            return this.items;
        }
        size() {
            return Object.keys(this.items).length;
        }
        clear() {
            this.items = {};
        }
        keys() {
            return Object.keys(this.items);
        }
    }
    class r {
        constructor() {
            this.isTokenActive = !1, this._connectCount = 0, this.messageDict = new o();
        }
        request(e, t, i) {}
        setParmData(e) {
            e.apiKey = r.apiKey, e.timestamp = Date.parse(new Date().toString()) / 1e3, e.apiSign = "", r.token && (e.token = r.token);
            let t = "",
                i = new Array();
            for (let t in e) i.push(t);
            i = i.sort();
            for (let a = 0; a < i.length; a++) t += encodeURIComponent(e[i[a]]);
            let a = n.hex_hmac_md5(r.apiSecret, t);
            return e.apiSign = a, e;
        }
        urlEncode(e) {
            if (null == e) return "";
            let t = "",
                i = new Array();
            for (let t in e) i.push(t);
            for (let a = 0, s = (i = i.sort()).length; a < s; ++a) t += i[a] + "=" + encodeURIComponent(e[i[a]]), a != s - 1 && (t += "&");
            return t;
        }
        errorHandler(e) {
            console.error("HTTP error：", e), this.reconnect();
        }
        progressHandler(e) {}
        response(e) {
            let t = e.path,
                i = this.messageDict.get(t);
            if (t == r.apiLogin) switch (e.code) {
                case 0:
                    this._requData && g.netMgr_AL.request(this._requData.method, this._requData.parm, this._requData.cb), this.connected(e.result.token);
            } else switch (e.code) {
                case 200:
                    this._requData = i, this.unconnect(), this.reconnect();
            }
            i && i.cb && i.cb(e);
        }
        reconnect() {
            let e = this;
            e._connectCount += 1, e._connectCount < 3 ? setTimeout(e => {
                g.wxMgr.login();
            }, 1e3 * e._connectCount) : e._connectCount = 0;
        }
        connected(e) {
            this._requData = null, this._connectCount = 0, r.token = e, this.isTokenActive = !0;
        }
        unconnect() {
            this.isTokenActive = !1;
        }
    }
    r.deviceType = "wxapp", r.apiLogin = "v10/common/temporaryLogin", r.host = "", r.apiKey = "a9772d7b213643e18018d511043f2239", r.apiSecret = "U2FsdGVkX1+PNP8psKtgUy3FGFVrJWopO2IgHNnvXME==", r.token = null;
    class l {
        init() {
            if (this.preTime = 0, this.buttonAuthorize1 = null, this._shareStartTime = new Date().getTime() + 86e3, this._isCreateWxInfoBtn = !1, Laya.Browser.onWeiXin) {
                let e = window.wx.getSystemInfoSync();
                g.commonData.wxsysInfo = e, this._regisiterWXCallback(), this.getLaunchOption(), this.showShareMenuWithTicket(!0), this.login();
            }
        }
        login() {
            if (!Laya.Browser.onWeiXin) return;
            let e = g.wxMgr;
            window.wx.login({
                success: function(t) {
                    let i = e.getLaunchOptions();
                    i.code = t.code, i.late_version = g.commonData.currentVersion, g.netMgr_AL.request(r.apiLogin, i, function(t) {
                        if (0 !== t.code) console.error("code login fault. code:" + t.code);
                        else {
                            console.log("code 登录成功", t);
                            let i = t.result;
                            e.createWxInfoBtn1(i.userInfo.avatar), e.setLoginInfo(i), e.setUserInfo(i.userInfo), e.worldRank(1, !1), e._regisiterWXShareCallback(), g.commonData.needShowGuide = 0 == t.result.userInfo.max_score;
                        }
                        g.glEvent.event("login_success_event");
                    });
                },
                fail: function() {},
                complete: function() {}
            });
        }
        getLaunchOptions() {
            let e = {},
                t = g.commonData.launchOptions;
            return t.scene && (e.scene_id = t.scene), t.referrerInfo && t.referrerInfo.appId && (e.appid = t.referrerInfo.appId), t.query ? (t.query.id && (e.share_user_id = parseInt(t.query.id)), t.query.share_id && (e.share_id = parseInt(t.query.share_id)), t.query.channel && (e.channel = t.query.channel)) : t.referrerInfo && t.referrerInfo.extraData && t.referrerInfo.extraData.channel && (e.channel = t.referrerInfo.extraData.channel), e;
        }
        createWxInfoBtn1(e) {
            let t = "" == e;
            if (g.commonData.needWxAuthorize = t, 0 == t || this._isCreateWxInfoBtn) return;
            this._isCreateWxInfoBtn = !0;
            let i = g.wxMgr,
                a = g.commonData.wxsysInfo,
                s = a.screenWidth,
                n = a.screenHeight,
                o = {
                    left: (a.screenWidth - s) / 2,
                    top: (a.screenHeight - n) / 2,
                    width: s,
                    height: n,
                    lineHeight: n,
                    backgroundColor: "#00000000",
                    color: "#ffffffff",
                    textAlign: "center",
                    fontSize: 16,
                    borderRadius: 4
                },
                r = window.wx;
            i.buttonAuthorize1 = r.createUserInfoButton({
                type: "text",
                text: "",
                style: o,
                withCredentials: !0
            }), i.showAuthorizeBtn(!0), i.buttonAuthorize1.onTap(e => {
                var t = new Date().getTime(),
                    a = Math.floor((t - i.preTime) / 1e3);
                if (i.preTime = t, !(a < 1)) {
                    if (e.userInfo) {
                        console.log("用户授权登录");
                        var s = {};
                        s.encrypted_data = e.encryptedData, s.iv = e.iv, g.netMgr_AL.request("v10/common/authorizedLogin", s, function(e) {
                            0 !== e.code ? console.error("authorized login fault. code:" + e.code) : i.setUserInfo(e.result);
                        });
                    } else console.log("授权取消");
                    g.commonData.needWxAuthorize = !1, i.showAuthorizeBtn(!1);
                }
            });
        }
        getSkinData(e) {
            g.netMgr_AL.request("v10/skin/lists", {}, function(t) {
                if (0 != t.code) console.error("skin lists error", t);
                else {
                    let i = t.result.roleSkinList;
                    for (let e = 0; e < 4; ++e) i[e].is_default;
                    g.commonData.roleSkinList = t.result.roleSkinList, g.commonData.pillarSkinList = t.result.pillarSkinList, null != e && e(t);
                }
            });
        }
        setLoginInfo(e) {
            let t = e.versionConfig;
            g.commonData.showRevivalCard = !1, t.version == g.commonData.currentVersion && (g.commonData.showRevivalCard = "0" != t.share), g.commonData.lateWay = t.late_way, g.commonData.isAdDelay = "1" == t.delay, g.commonData.adTime = t.banner_interval ? t.banner_interval : g.commonData.adTime, g.commonData.latencyTime = g.commonData.isAdDelay ? t.latency_time : 0, g.commonData.moveTime = g.commonData.isAdDelay ? t.move_time : 0;
            let i = e.shareContent,
                a = i.length,
                s = 0;
            g.commonData.shareInfo = {};
            for (let e = 0; e < a; ++e) {
                s = i[e].share_type;
                let t = g.commonData.shareInfo[s];
                t || (t = [], g.commonData.shareInfo[s] = t), t.push(i[e]);
            }
            g.commonData.wxappList = {};
            for (const t of e.wxappList) {
                let e = g.commonData.wxappList[t.category];
                e || (e = [], g.commonData.wxappList[t.category] = e), Laya.Browser.onIOS && 1 == t.is_box || e.push(t);
            }
        }
        setUserInfo(e) {
            g.commonData.userInfo = e, e.last_sign_time && g.storageMgr.setSigninTime(e.last_sign_time), g.commonData.isCheckSignin = !0;
            let t = g.storageMgr.getGameStatus();
            e.pass = 0;
            e.pass < t.maxLevel ? t.maxLevel : e.pass;
            let i = e.max_score < t.maxScore ? t.maxScore : e.max_score;
            g.glEvent.event("updateCoin", {}), i && this.settlementLevel(i);
        }
        showAuthorizeBtn(e) {
            this.buttonAuthorize1 && (e ? this.buttonAuthorize1.show() : this.buttonAuthorize1.hide());
        }
        getLaunchOption() {
            let e = window.wx;
            g.commonData.launchOptions = e.getLaunchOptionsSync();
        }
        showToast(e, t) {
            if (!window.wx) return;
            window.wx.showToast({
                title: e,
                duration: t,
                icon: "none"
            });
        }
        hideToast() {
            window.wx && window.wx.hideToast();
        }
        _regisiterWXShareCallback() {
            let e = g.wxMgr;
            if (Laya.Browser.onWeiXin && r.token) {
                window.wx.onShareAppMessage(function() {
                    let t = e.getShareContent(1),
                        i = {
                            title: t.share_title,
                            imageUrl: t.share_img,
                            query: "share_id=" + t.share_id + "&share_type=" + t.share_type + "&id=" + g.commonData.userInfo.id,
                            success: function(e) {},
                            fail: function() {}
                        };
                    return e._upShareInfo(t.share_id), i;
                });
            }
        }
        settlementLevel(e) {
            let t = g.storageMgr.getGameStatus(),
                i = g.wxMgr;
            if (t.maxScore < e) {
                i._submitScroe(e), g.storageMgr.setMaxScore(e);
                let t = {};
                t.score = e, t.use_time = Math.floor(g.commonData.useTime / 1e3), g.netMgr_AL.request("v10/user/pass", t, function(e) {
                    0 == e.code && (console.log("上传分数成功"), g.commonData.userInfo.max_score = e.result);
                });
            }
        }
        buySkin(e, t) {
            var i = {};
            i.type = e, g.netMgr_AL.request("v10/skin/randBuy", i, function(e) {
                null != t && t(e);
            });
        }
        changeSkin(e, t) {
            var i;
            i = t, g.netMgr_AL.request("v10/skin/switchSkin", i, function(e) {});
        }
        worldRank(e, t = !0) {
            var i = {
                page: e
            };
            g.netMgr_AL.request("v10/user/worldRanking", i, function(i) {
                0 == i.code ? (t && g.glEvent.event("draw_world_rank_event", {
                    data: i.result,
                    page: e
                }), g.commonData.gameList = i.result) : console.error("get world ranking error:", i, e);
            });
        }
        _submitScroe(e) {
            if (!Laya.Browser.onWeiXin) return;
            window.wx.getOpenDataContext().postMessage({
                cmd: "submit_scroe",
                score: e
            }), g.glEvent.event("submit_scroe_event", {});
        }
        showFriendRank(e) {
            if (!Laya.Browser.onWeiXin) return;
            g.glEvent.event("show_friend_rank_event", {
                isShow: e
            });
            let t = e ? "open_friend_rank" : "close_friend_rank";
            window.wx.getOpenDataContext().postMessage({
                cmd: t
            });
        }
        destroyFriendRank() {
            if (!Laya.Browser.onWeiXin) return;
            window.wx.getOpenDataContext().postMessage({
                cmd: "destroy_friend_rank"
            });
        }
        showLiteRank(e) {
            if (!Laya.Browser.onWeiXin) return;
            let t = e ? "open_lite_rank" : "close_lite_rank";
            window.wx.getOpenDataContext().postMessage({
                cmd: t
            }), g.glEvent.event("show_lite_rank_event", {
                isShow: e
            });
        }
        restartGame() {
            if (!Laya.Browser.onWeiXin) return;
            window.wx.getOpenDataContext().postMessage({
                cmd: "restart_game"
            });
        }
        showFirstFriendTips(e) {
            if (!Laya.Browser.onWeiXin) return;
            let t = e ? "open_first_friend" : "close_first_friend";
            window.wx.getOpenDataContext().postMessage({
                cmd: t,
                score: 0
            });
        }
        onFrientMouseEvent(e) {
            if (!Laya.Browser.onWeiXin) return;
            window.wx.getOpenDataContext().postMessage(e);
        }
        showOverFriendTips(e) {
            if (!Laya.Browser.onWeiXin) return;
            let t = e ? "open_over_friend" : "close_over_friend";
            window.wx.getOpenDataContext().postMessage({
                cmd: t,
                score: g.commonData.newScore
            }), g.glEvent.event("over_friend_event", {
                isShow: e
            });
        }
        showLoopFriendTips(e) {
            if (!Laya.Browser.onWeiXin) return;
            let t = e ? "open_loop_friend" : "close_loop_friend";
            window.wx.getOpenDataContext().postMessage({
                cmd: t,
                score: g.commonData.newScore
            }), g.glEvent.event("loop_over_event", {
                isShow: e
            });
        }
        playVibrateShort() {
            Laya.Browser.onWeiXin && g.storageMgr.isPlayVibrate() && window.wx.vibrateShort({
                success: function() {},
                fail: function() {},
                complete: function() {}
            });
        }
        playVibrateLong() {
            Laya.Browser.onWeiXin && g.storageMgr.isPlayVibrate() && window.wx.vibrateLong({
                success: function() {},
                fail: function() {},
                complete: function() {}
            });
        }
        showShareMenuWithTicket(e) {
            window.wx && window.wx.showShareMenu({
                withShareTicket: e,
                success: function() {},
                fail: () => {},
                complete: () => {}
            });
        }
        _regisiterWXCallback() {
            if (Laya.Browser.onWeiXin) {
                let e = window.wx;
                e.offShow(this.onShowEvent), e.onShow(this.onShowEvent), e.offHide(this.onHideEvent), e.onHide(this.onHideEvent);
            }
        }
        onShowEvent(e) {
            let t = g.wxMgr;
            if (g.soundMgr.stopAll(), g.soundMgr.playBGM(), g.commonData.isSleep = !1, g.glEvent.event("wx_wake_event", {}), t._statuShareGame) {
                t._statuShareGame = !1;
                let e = !(new Date().getTime() - t._shareStartTime < 2500);
                e && t._upShareInfo(t._shareId), g.glEvent.event("share_back_event", {
                    isShare: e,
                    shareId: t._shareId
                }), t._shareStartTime = new Date().getTime() + 86e3;
            }
        }
        onHideEvent() {
            g.commonData.isSleep = !0, g.soundMgr.stopAll(), g.glEvent.event("wx_sleep_event", {});
        }
        openOtherApp(e, t) {
            if (!Laya.Browser.onWeiXin) return;
            const i = g.commonData.wxappList[t];
            let a = "",
                s = -1,
                n = -1;
            if (i)
                for (const t of i)
                    if (t.app_id == e) {
                        s = t.wx_id, n = t.ad_id, a = t.app_path;
                        break;
                    }
            window.wx.navigateToMiniProgram({
                appId: e,
                path: a,
                success: function(t) {
                    -1 != s ? g.netMgr_AL.request("v10/common/clickWxapp", {
                        wx_id: s,
                        ad_id: n,
                        type: 1
                    }, function(e) {
                        0 !== e.code && console.error("log goto wxapp fault. code:" + e);
                    }) : console.error("click app not find id,for appid:", e);
                },
                fail: function() {
                    g.netMgr_AL.request("v10/common/clickWxapp", {
                        wx_id: s,
                        ad_id: n,
                        type: 0
                    }, function(e) {
                        0 !== e.code && console.error("log goto wxapp fault. code:" + e);
                    }), g.glEvent.event("show_applite_event");
                },
                complete: () => {}
            });
        }
        getWxappList(e) {
            var t = g.commonData.wxappList[e];
            let i = [];
            if (t) {
                for (let e of t) {
                    let t = {};
                    t.app_img = e.app_img, t.app_id = e.app_id, t.category = e.category, t.weight = e.weight, i.push(t);
                }
                i.sort((e, t) => e.weight - t.weight);
            }
            return i;
        }
        shareFriend(e, t) {
            if (!Laya.Browser.onWeiXin) return;
            let i, a = g.wxMgr,
                s = a.getShareContent(e);
            t && (a._shareStartTime = new Date().getTime(), a._statuShareGame = !0, a._shareId = s.share_id), i = {
                title: s.share_title,
                imageUrl: s.share_img,
                query: "share_id=" + s.share_id + "&share_type=" + s.share_type + "&id=" + g.commonData.userInfo.id,
                success: function(e) {},
                fail: function() {},
                complete: function() {}
            }, window.wx.shareAppMessage(i);
        }
        upViewVideoInfo(e, t) {
            let i = {};
            i.ad_type = t, i.type = e, g.netMgr_AL.request("v10/user/viewVideo", i, function(e) {
                0 !== e.code && console.error("upload video info error.");
            });
        }
        _upShareInfo(e) {
            let t = {};
            t.share_id = e, g.netMgr_AL.request("v10/user/recordShare", t, function(e) {
                0 !== e.code && console.error("upload user share fault.");
            });
        }
        getShareContent(e) {
            let t = g.commonData.shareInfo[e],
                i = {
                    share_title: "",
                    share_img: "",
                    share_id: 1,
                    share_type: e
                };
            return t && (i = t[Math.floor(Math.random() * t.length)]), i;
        }
        getSignData(e, t) {
            g.netMgr_AL.request("v10/activity/signPrize", {}, function(i) {
                0 !== i.code ? console.error("get sign data fault.") : (g.commonData.signin = i.result, t && t.call(e, i.result));
            });
        }
        getSignPrize(e, t, i) {
            let a = g.wxMgr,
                s = {};
            s.double = i ? 1 : 0, g.netMgr_AL.request("v10/activity/getSignPrize", s, function(i) {
                0 !== i.code ? a.showToast(i.msg, 2e3) : (g.commonData.signin = i.result, t && t.call(e, i.result));
            });
        }
        getDiskData(e, t) {
            let i = g.wxMgr;
            g.netMgr_AL.request("v10/activity/turntablePrize", {}, function(a) {
                0 !== a.code ? i.showToast(a.msg, 2e3) : t && t.call(e, a.result);
            });
        }
        getDiskPrize(e, t, i, a) {
            let s = g.wxMgr,
                n = {};
            n.type = i, 1 == i && (n.share_content_id = a), g.netMgr_AL.request("v10/activity/luckDraw", n, function(i) {
                0 !== i.code ? s.showToast(i.msg, 2e3) : t && t.call(e, i.result);
            });
        }
        getDiskDouble(e, t, i) {
            let a = g.wxMgr;
            g.netMgr_AL.request("v10/activity/prizeDouble", i, function(i) {
                0 !== i.code ? a.showToast(i.msg, 2e3) : t && t.call(e, i.result);
            });
        }
        openCustomerService() {
            if (!Laya.Browser.onWeiXin) return;
        }
    }
    class h {
        constructor() {
            this.bannerAdID = "adunit-2d516099330b3a4b", this.videoAdID = "adunit-1560793acc53e773", this.interAdID = "", this.skinCfg = [];
        }
        init() {}
        getVideoId() {
            return this.videoAdID;
        }
        getBannerId() {
            return this.bannerAdID;
        }
        getInterId() {
            return this.interAdID;
        }
        fgagasgag() {
            return null;
        }
        getSkinCfg() {
            return this.skinCfg;
        }
        getSkinByIndex(e) {
            return this.skinCfg[e];
        }
        getSkinIndexById(e) {
            for (let t = 0, i = this.skinCfg.length; t < i; ++t)
                if (e == this.skinCfg[t].id) return t;
            return console.error("id not exist config."), -1;
        }
        clear3DRes(e, t) {
            for (let t = 0; t < e.length; ++t) {
                let i = Laya.loader.getRes(e[t].url);
                i && i.releaseResource(!0), Laya.Loader.clearRes(e[t].url);
            }
        }
    }
    class d {
        init() {}
        getBannerCount_AL() {
            return 0;
        }
        getBannerItem_AL() {}
        setBannerItem_AL() {}
        showBannerAd_AL() {}
        hideBannerAd_Al() {}
        setBannerAdWidth_AL(e) {}
        setBannerAdTop_AL(e) {}
        getBannerAd_AL() {}
        showVideoAd_AL(e) {}
        airplane_getVideoAd() {}
        airplane_loadVideoAd() {}
        airplane_showInterstitialAd() {}
        airplane_getInterstitialAd() {}
        gareghsahrt_AL() {}
    }
    class c extends d {
        constructor() {
            super(...arguments), this._loadBanner = 1, this._loadDelay = 0, this._loadInterval = 5, this.lastTime = 0, this.loadAdFirst = !0;
        }
        init() {
            if (this._videoAd = null, this._interAd = null, this._bannerItem = null, this._bannerList = [], this._bannerError = 0, this._videoCate = -1, this._isCreateInter = !1, Laya.Browser.onWeiXin) {
                const e = g.commonData.wxsysInfo.SDKVersion;
                this._isCreateInter = g.utils_AL.compareVersion(e, "2.6.0") >= 0, Laya.timer.loop(1e3, this, this.loadBannerAd), this.getBannerAd_AL(), this.airplane_getVideoAd(), this.airplane_getInterstitialAd();
            }
        }
        loadBannerAd() {
            if (g.gameMgr_AL.isPlay) return;
            let e = 5e3;
            3 == this._bannerList.length && (this.loadAdFirst = !1), g.commonData.adTime > e && (e = g.commonData.adTime), this.loadAdFirst && (e = 2e3);
            let t = new Date().valueOf();
            this._bannerList.length < 3 && t - this.lastTime > e && (this.lastTime = t, this.getBannerAd_AL());
        }
        getBannerCount_AL() {
            return this._bannerList.length;
        }
        getBannerItem_AL() {
            return this._bannerItem;
        }
        hideBannerAd_Al() {
            for (let e = 0, t = this._bannerList.length; e < t; ++e) this._bannerList[e] && this._bannerList[e].ad.hide();
        }
        setBannerAdWidth_AL(e) {
            let t = this.getBannerItem_AL();
            if (t && e) {
                let i = (g.commonData.wxsysInfo.screenWidth - e) / 2;
                t.ad.style.width = e, t.ad.style.left = i;
            }
        }
        setBannerAdTop_AL(e) {
            let t = this.getBannerItem_AL();
            t && void 0 !== e && (t.ad.style.top = e);
        }
        getBannerAd_AL() {
            if (!Laya.Browser.onWeiXin || "" == g.configMgr_AL.getVideoId()) return;
            if (g.commonData.isSleep) return;
            if (this._bannerList.length > 2) return;
            let e = this,
                t = g.commonData.wxsysInfo,
                i = t.screenWidth,
                a = (t.screenWidth - i) / 2,
                s = .86 * t.screenHeight,
                n = {
                    width: i,
                    height: t.screenHeight - s,
                    top: s,
                    index: -1
                },
                o = wx.createBannerAd({
                    adUnitId: g.configMgr_AL.getBannerId(),
                    style: {
                        left: a,
                        top: s,
                        width: i
                    }
                });
            n.ad = o, o.onLoad(() => {
                g.commonData.existBannerAd = !0, g.glEvent.event("ad_load_event", {
                    adtype: "banner",
                    isLoad: !0
                });
                let t = e._bannerList.push(n);
                n.index = t - 1, e._bannerError = 0;
            }), o.onError(function(t) {
                console.error("banner 加载错误：", t), e._bannerError += 1, e._bannerError > 3 && (e._bannerError = 3, g.commonData.existBannerAd = !1), g.glEvent.event("ad_load_event", {
                    adtype: "banner",
                    isLoad: !1
                });
            }), o.onResize(function(e) {
                if (!o) return;
                let i = o.style.realHeight + .1;
                t.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * H.height), o.style.top = t.screenHeight - i, n.width = o.style.realWidth, n.height = i, g.glEvent.event("ad_resize_event", {
                    adtype: "banner",
                    index: n.index
                });
            });
        }
        setBannerItem_AL() {
            if (!Laya.Browser.onWeiXin) return;
            if (g.commonData.isNoAds) return;
            if (!g.commonData.existBannerAd) return;
            let e = this._bannerList.length,
                t = null;
            if (e < 1) t = null;
            else if (1 == e) t = this._bannerList[0];
            else {
                this._bannerList[0].ad.destroy(), this._bannerList.shift();
                for (let e = 0, t = this._bannerList.length; e < t; ++e) this._bannerList[e].index = e;
                t = this._bannerList[0];
            }
            this._bannerItem = t;
        }
        showBannerAd_AL() {
            let e = this.getBannerItem_AL();
            Laya.Browser.onWeiXin && e && (g.commonData.isNoAds || g.commonData.existBannerAd && (g.commonData.watchVideo || e.ad.show().then(() => {
                g.glEvent.event("ad_show_event", {
                    adtype: "banner",
                    index: e.index
                });
            }).catch(e => {})));
        }
        showVideoAd_AL(e) {}
        airplane_getVideoAd() {
            if (!Laya.Browser.onWeiXin || "" == g.configMgr_AL.getVideoId()) return;
            if (!wx.createRewardedVideoAd) return void(g.commonData.existVideoAd = !1);
            let e = this._videoAd;
            e && (e.offLoad(this._onLoadVideo), e.offError(this._onErrorVideo), e.offClose(this._onCloseVideo)), (e = wx.createRewardedVideoAd({
                adUnitId: g.configMgr_AL.getVideoId()
            })).onLoad(this._onLoadVideo), e.onError(this._onErrorVideo), e.onClose(this._onCloseVideo), this._videoAd = e;
        }
        airplane_loadVideoAd() {
            Laya.Browser.onWeiXin && this._videoAd && this._videoAd.load();
        }
        _onLoadVideo() {
            g.commonData.existVideoAd = !0, g.glEvent.event("ad_load_event", {
                adtype: "video",
                isLoad: !0
            });
        }
        _onErrorVideo(e) {
            console.error("video 加载错误", e), g.commonData.existVideoAd = !1, g.glEvent.event("ad_load_event", {
                adtype: "video",
                isLoad: !1
            });
        }
        _onCloseVideo(e) {
            g.commonData.watchVideo = !1;
            let t = !!(e && e.isEnded || void 0 === e);
            t && g.wxMgr.upViewVideoInfo(1, this._videoCate), g.glEvent.event("ad_video_close_event", {
                isEnded: t
            });
        }
        airplane_showInterstitialAd() {}
        airplane_getInterstitialAd() {}
        _onLoadInterstitial() {
            g.commonData.existInterAd = !0, g.glEvent.event("ad_load_event", {
                adtype: "inter",
                isLoad: !0
            });
        }
        _onErrorInterstitial(e) {
            g.commonData.existInterAd = !1, g.glEvent.event("ad_load_event", {
                adtype: "inter",
                isLoad: !1
            });
        }
        _onCloseInterstitial(e) {
            g.glEvent.event("ad_inter_close_event", {});
        }
    }
    class g {
        static get storageMgr() {
            return void 0 === g._storageMge && (g._storageMge = new a()), g._storageMge;
        }
        static get netMgr_AL() {
            return g._netMgr;
        }
        static get commonData() {
            return g._commonData;
        }
        static get utils_AL() {
            return g._utils;
        }
        static get tweenMgr() {
            return g._tweenMgr;
        }
        static get gameMgr_AL() {
            return g._gameMgr;
        }
        static get glEvent() {
            return g._eventListener;
        }
        static get soundMgr() {
            return void 0 === g._soundMgr && (g._soundMgr = new s()), g._soundMgr;
        }
        static get configMgr_AL() {
            return void 0 === g._configMgr && (g._configMgr = new h()), g._configMgr;
        }
        static get adMgr() {
            return void 0 === g._adMgr && (g._adMgr = g.wxAd), g._adMgr;
        }
        static set adMgr(e) {
            g._adMgr = e;
        }
        static get wxMgr() {
            return void 0 === g._wxMgr && (g._wxMgr = new l()), g._wxMgr;
        }
        static get wxAd() {
            return void 0 === g._wxAd && (g._wxAd = new c()), g._wxAd;
        }
    }
    g._eventListener = new Laya.EventDispatcher(), g._gameMgr = new class {
        constructor() {
            this._isPlay = !1, this._isPause = !1, this._isOver = !1, this._isPressed = !1, this._aergargasrg = !1;
        }
        get isPlay() {
            return this._isPlay;
        }
        set isPlay(e) {
            this._isPlay = e;
        }
        get isPressed() {
            return this._isPressed;
        }
        set isPressed(e) {
            this._isPressed = e;
        }
        get isOver() {
            return this._isOver;
        }
        set isOver(e) {
            this._isOver = e;
        }
        get isPause() {
            return this._isPause;
        }
        set isPause(e) {
            this._isPause = e, Laya.timer.scale = e ? 0 : 1;
        }
    }(), g._netMgr = new r(), g._utils = new class {
        constructor() {}
        addClickEvent_AL(e, t, i, a) {
            if (e.offAllCaller(t), e instanceof Laya.Button) {
                let a = function(e) {
                    e.stopPropagation(), i && i.call(t, e), g.soundMgr.play("button");
                };
                e.on(Laya.Event.CLICK, t, a);
            } else {
                let s = 60,
                    n = 1,
                    o = (e.anchorX, e.anchorY, e.x, e.y, e.scaleX * n),
                    r = e.scaleX * n,
                    l = .9 * n,
                    h = function(t) {
                        t.stopPropagation(), Laya.Tween.to(e, {
                            scaleX: l,
                            scaleY: l
                        }, s);
                    };
                e.on(Laya.Event.MOUSE_DOWN, t, h);
                let d = function(n) {
                    n.stopPropagation(), Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s), i && i.call(t, n), (0 === a || a) && g.soundMgr.play(a);
                };
                e.on(Laya.Event.MOUSE_UP, t, d);
                let c = function(t) {
                    t.stopPropagation(), Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s);
                };
                e.on(Laya.Event.MOUSE_OUT, t, c);
            }
        }
        getRGBA(e, t) {
            let i = 0 == t && t ? t : 1;
            var a = [],
                s = [];
            let n = e.replace(/#/, "");
            if (3 == n.length) {
                for (var o = [], r = 0; r < 3; r++) o.push(n.charAt(r) + n.charAt(r));
                n = o.join("");
            }
            for (r = 0; r < 3; r++) a[r] = "0x" + n.substr(2 * r, 2), s.push(parseInt(a[r]));
            return new Laya.Vector4(s[0] / 255, s[1] / 255, s[2] / 255, i);
        }
        getRGB_AL(e) {
            var t = [],
                i = [];
            let a = e.replace(/#/, "");
            if (3 == a.length) {
                for (var s = [], n = 0; n < 3; n++) s.push(a.charAt(n) + a.charAt(n));
                a = s.join("");
            }
            for (n = 0; n < 3; n++) t[n] = "0x" + a.substr(2 * n, 2), i.push(parseInt(t[n]));
            return new Laya.Vector3(i[0] / 255, i[1] / 255, i[2] / 255);
        }
        tweenShake_AL(e, t) {
            let i = new Laya.TimeLine(),
                a = e.pivotX;
            e.pivotX = e.width / 2, i.addLabel("shake1", 0).to(e, {
                rotation: e.rotation + 5
            }, 50, null, 0).addLabel("shake2", 0).to(e, {
                rotation: e.rotation - 6
            }, 50, null, 0).addLabel("shake3", 0).to(e, {
                rotation: e.rotation - 13
            }, 50, null, 0).addLabel("shake4", 0).to(e, {
                rotation: e.rotation + 3
            }, 50, null, 0).addLabel("shake5", 0).to(e, {
                rotation: e.rotation - 5
            }, 50, null, 0).addLabel("shake6", 0).to(e, {
                rotation: e.rotation + 2
            }, 50, null, 0).addLabel("shake7", 0).to(e, {
                rotation: e.rotation - 8
            }, 50, null, 0).addLabel("shake8", 0).to(e, {
                rotation: e.rotation + 3
            }, 50, null, 0).addLabel("shake9", 0).to(e, {
                rotation: 0
            }, 50, null, 0), t ? Laya.timer.once(500, this, function() {
                i.destroy(), e.rotation = 0, e.pivotX = a;
            }) : i.on(Laya.Event.COMPLETE, this, function() {
                i.destroy(), e.rotation = 0, e.pivotX = a;
            }), i.play(0, !0);
        }
        compareVersion(e, t) {
            e = e.split("."), t = t.split(".");
            const i = Math.max(e.length, t.length);
            for (; e.length < i;) e.push("0");
            for (; t.length < i;) t.push("0");
            for (let a = 0; a < i; a++) {
                const i = parseInt(e[a]),
                    s = parseInt(t[a]);
                if (i > s) return 1;
                if (i < s) return -1;
            }
            return 0;
        }
        setMaterial(e) {}
        loadSubpackage(e, t, i) {
            Laya.Browser.onWeiXin && wx.loadSubpackage({
                name: e,
                success: function(a) {
                    console.log("分包加载成功 " + e), i.call(t, a, !0);
                },
                fail: function(a) {
                    console.error("分包加载失败 " + e), i.call(t, a, !1);
                }
            });
        }
        format(e) {
            function add0(e) {
                return e < 10 ? "0" + e : e;
            }
            var t = new Date(e),
                i = t.getFullYear(),
                a = t.getMonth() + 1,
                s = t.getDate();
            return i + "-" + add0(a) + "-" + add0(s);
        }
        getRandoms_AL(e, t, i = 0) {
            let a = [],
                s = [];
            for (var n = i; n < t; n++) a.push(n);
            for (a = a.sort(() => Math.random() - Math.random()), n = 0; n < e; n++) s.push(a[n]);
            return s;
        }
    }(), g._tweenMgr = new class extends Laya.Script {
        toAlpha(e, t, i, a = !1, s = 1) {
            function alpha1() {
                let s = a ? new Laya.Handler(this, alpha2) : null;
                Laya.Tween.to(e, {
                    alpha: t
                }, i, null, s);
            }

            function alpha2() {
                Laya.Tween.to(e, {
                    alpha: 1
                }, i, null, Laya.Handler.create(this, alpha1));
            }
            e.alpha = s, alpha1();
        }
        toScale(e, t, i, a, s = !1, n = t) {
            function scale1() {
                let t = s || a ? new Laya.Handler(this, scale2) : null;
                Laya.Tween.to(e, {
                    scaleX: n,
                    scaleY: n
                }, i, null, t);
            }

            function scale2() {
                let t = s ? new Laya.Handler(this, scale1) : null;
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, i, null, t);
            }
            e.scaleX = 1, e.scaleY = 1, scale1();
        }
        toPosition(e, t, i, a = !1, s = 0) {
            Laya.Tween.clearAll(e);
            let n = new Laya.Vector2(e.x, e.y);

            function pos1() {
                if (a) switch (s) {
                    case 0:
                        var n = new Laya.Handler(this, pos2);
                        break;
                    case 1:
                        n = new Laya.Handler(this, pos3);
                }
                Laya.Tween.to(e, {
                    x: t.x,
                    y: t.y
                }, i, null, n);
            }

            function pos2() {
                Laya.Tween.to(e, {
                    x: n.x,
                    y: n.y
                }, i, null, Laya.Handler.create(this, pos1));
            }

            function pos3() {
                e.x = n.x, e.y = n.y, pos1();
            }
            pos1();
        }
        fromAlpha(e, t, i, a = !1) {
            function alpha1() {
                let s = a ? new Laya.Handler(this, alpha2) : null;
                Laya.Tween.from(e, {
                    alpha: t
                }, i, null, s);
            }

            function alpha2() {
                Laya.Tween.from(e, {
                    alpha: 1
                }, i, null, Laya.Handler.create(this, alpha1));
            }
            e.alpha = 1, alpha1();
        }
        fromScale(e, t, i, a = !1) {
            function scale1() {
                let s = a ? new Laya.Handler(this, scale2) : null;
                Laya.Tween.from(e, {
                    scaleX: t,
                    scaleY: t
                }, i, null, s);
            }

            function scale2() {
                Laya.Tween.from(e, {
                    scaleX: 1,
                    scaleY: 1
                }, i, null, Laya.Handler.create(this, scale1));
            }
            scale1();
        }
    }(), g._commonData = new class {
        constructor() {
            this.newScore = 1, this.newLevel = 1, this.goonCount = 0, this.isGame = !1, this.isSleep = !1, this.watchVideo = !1, this.watchInter = !1, this.useTime = 1e3, this.gameList = null, this.dhfghd = [], this.dfhdf = [], this.akka = 0, this.zbzfb = 0, this.currentVersion = "2", this.showRevivalCard = !1, this.needWxAuthorize = !1, this.userInfo = {}, this.existInterAd = !1, this.existVideoAd = !1, this.existBannerAd = !1, this.isNoAds = !1, this.isAdDelay = !1, this.adTime = 1e3, this.latencyTime = 900, this.moveTime = 1e3, this.topView = "", this.signin = null, this.isCheckSignin = !1, this.lateWay = 0, this.needShowGuide = !1, this.bikeComps = [], this.gameCount = 0, this.isShowSkin = !1, this.skinIncome = 0, this.skinScore = 0, this.shareInfo = {}, this.launchOptions = {}, this.wxappList = {}, this.wxsysInfo = {}, this.roleSkinList = [], this.pillarSkinList = [], this.roleSkinIndex = 0, this.skinGameCount = 0, this.awdaw = [], this.srg = [], this.fdaf = 0, this.fdafaf = 0;
        }
    }(), g.screen = {
        realPxRatio: 0,
        offsetTop: 0,
        allScreen: !1
    };
    class p extends Laya.Scene {
        constructor() {
            super(), this._maxBottom = 264, this._minBottom = 60;
        }
        onAwake() {
            this.initData_AL(), this.initUI_AL(), this.initEvent(), this.initEventBase_AL(), this.initSize(), this.initBanner();
        }
        onOpened(e) {
            g.commonData.existInterAd && (g.commonData.isAdDelay ? "views/AL_Home.scene" != this.url && "views/AL_Rank.scene" != this.url || g.adMgr.airplane_showInterstitialAd() : "views/AL_Clearing.scene" != this.url && "views/AL_Rank.scene" != this.url || g.adMgr.airplane_showInterstitialAd());
        }
        onClosed() {
            Laya.timer.clearAll(this), g.glEvent.offAllCaller(this);
        }
        initData_AL() {
            this._isOpen = !0, g.commonData.topView = this.url;
        }
        initUI_AL() {}
        initEvent() {}
        initEventBase_AL() {
            g.glEvent.on("ad_load_event", this, this.onLoadAdEvent), g.glEvent.on("ad_show_event", this, this.onShowAdEvent);
        }
        getChild(e, t) {
            return t || (t = this), t.getChildByName(e);
        }
        initSize() {
            if (!Laya.Browser.onWeiXin) return;
            let e = this;
            e.height = Laya.stage.height;
            let t = g.screen.offsetTop,
                i = g.screen.realPxRatio,
                a = g.commonData.wxsysInfo,
                s = 0;
            for (let n = 0; n < e._children.length; n++) {
                let o = e._children[n],
                    r = o.y + t;
                if ("topPanel" == o.name) {
                    r = a.statusBarHeight >= 30 && g.screen.allScreen ? a.statusBarHeight * i : 30;
                }
                o.y = r, "bottomPanel" != o.name && "bottomui" != o.name || (s = g.commonData.isAdDelay && "bottomPanel" == o.name ? this._minBottom : this._maxBottom, a && a.model.startsWith("iPhone X") && (s += 40), o.bottom = s);
            }
        }
        initBanner() {}
        refreshBannerAd() {}
        reappearBannerAd() {}
        onLoadAdEvent(e) {
            switch (e.adtype) {
                case "video":
                case "banner":
                    e.isLoad;
            }
        }
        onShowAdEvent(e) {
            e && "banner" != e.adtype || this.tweenAd_AL();
        }
        resetBannerAd() {
            let e = g.adMgr.getBannerItem_AL();
            if (!e) return;
            let t = e.width,
                i = (e.height, Laya.Browser.clientWidth);
            t != i && (this._isResizeAd = !0, g.adMgr.setBannerAdWidth_AL(i));
        }
        tweenAd_AL() {}
    }
    class m extends p {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        fvawfawfa() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        gfag() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag2() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan3() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag4() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan5() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfaghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfagfghjfgh() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfagfj() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfghjfgh() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfagfgjhf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjfhgj() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag1() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan2() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        fvawfawfar3r() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        grtshts() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        rsrgsxdfgsdf() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        sgdfgsdfgsdfgsf() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        sgdfgsdffafasgsdfgsf() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = 0;
            s <= 0 || s > 12 ? (s = Number.NaN, console.log("月份是：" + s)) : console.log("输入月份数值正确。");
        }
    }
    class u extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        fvawfawfa() {
            var e = new String("This is string");
            console.log("str.constructor is:" + e.constructor);
            var t = new String("Hello World");
            console.log("Length " + t.length);
            var i = new String("This is string one and again string"),
                a = i.lastIndexOf("string");
            console.log("lastIndexOf 查找到的最后字符串位置 :" + a), a = i.lastIndexOf("one"), console.log("lastIndexOf 查找到的最后字符串位置 :" + a);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
        }
        gfag() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag2() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan3() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag4() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan5() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfag6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuan6() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfaghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gfagfghjfgh() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
        gargantuanfjghjf() {
            var e;
            e = 12, console.log("数字为 " + e), e = "Runoob", console.log("字符串为 " + e);
        }
    }
    class _ extends p {
        initData_AL() {
            g.wxMgr.settlementLevel(g.commonData.newScore);
        }
        initUI_AL() {
            let e = this.getChild("bottomPanel");
            this.btnBack = this.getChild("btnBack", e), this.btnPlay = this.getChild("btnPlay", e), this.btnShare = this.getChild("btnShare", e);
            let t = this.getChild("score");
            this.fontScore = this.getChild("fontScore", t), this.fontScore.value = g.commonData.newScore.toString();
            let num = g.storageMgr.getPlayHighScore();
            if (num < g.commonData.newScore) {
                g.storageMgr.setPlayHighScore(g.commonData.newScore);
            }
            this.highScore = this.getChild("highScore", t);
            this.highScore.value = g.storageMgr.getPlayHighScore();
            let zs = this.getChild('appLite').getChildByName('appList');
            platform.getInstance().initList(zs);
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnShare, this, this.onShareClick), g.utils_AL.addClickEvent_AL(this.btnPlay, this, this.onPlayGameClick), g.utils_AL.addClickEvent_AL(this.btnBack, this, this.onBackClick), g.glEvent.on("share_back_event", this, this.onShareBackEvent), g.glEvent.on("wx_wake_event", this, this.onWxWakeEvent), g.glEvent.on("show_applite_event", this, this.onWxWakeEvent);
        }
        onShareClick() {
            g.wxMgr.shareFriend(0, !0);
        }
        onPlayGameClick() {
            platform.getInstance().showInterstitial(() => {
                if (this.close(), g.glEvent.event("init_game_event", {
                        isPlay: !0
                    }), g.storageMgr.isSkinTips() && g.commonData.existVideoAd) {
                    let e = {
                        target: "views/AL_Home.scene"
                    };
                    g.commonData.isNoAds = !0, g.commonData.isAdDelay && (g.commonData.isNoAds = !1), console.log(" AirPlane_LS.commonData.isNoAds", g.commonData.isNoAds), Laya.Scene.open("views/AL_FreeSkin.scene", !1, e, Laya.Handler.create(this, e => {}));
                } else g.glEvent.event("play_game_event", {
                    isPlay: !0
                });
            });
        }
        onBackClick() {
            platform.getInstance().showInterstitial(() => {
                Laya.Scene.open("views/AL_Home.scene", !1, Laya.Handler.create(this, e => {
                    this.close(), g.glEvent.event("init_game_event", {
                        isPlay: !0
                    })
                }));
            });
        }
        onOpenView() {
            this.close(), this.showRank(!1);
        }
        showRank(e) {
            g.wxMgr.showLiteRank(e);
        }
        onWxWakeEvent() {
            Laya.Scene.open("views/AL_Wxapp.scene", !1, Laya.Handler.create(this, this.onOpenView));
        }
        onShareBackEvent(e) {
            e.isShare;
        }
    }
    class y extends Laya.Box {
        constructor() {
            super(), this.icon = null, this.initItem();
        }
        onDisable() {}
        setItemInfo(e) {
            null != e && (this.icon.loadImage(e.app_img), this.appId = e.app_id);
        }
        initItem() {
            if (!y.appPrefab) return void console.error("app prefab is null");
            let e = Laya.Pool.getItemByCreateFun("appItem", y.appPrefab.create, y.appPrefab);
            this.icon = e.getChildByName("icon"), this.icon.width = y.appWidth, this.icon.height = y.appHeight, e.size(y.appWidth, y.appHeight), this.addChild(e);
        }
    }
    y.appWidth = 128, y.appHeight = 128;
    class L extends Laya.Script {
        constructor() {
            super(), this.appCount = -1, this.needClearTimer = !1, this.ind = 0, this.prevInd = 0, this.renderCount = 4, this.speed = 3e3;
        }
        closeComp() {
            Laya.timer.clearAll(this), this.panel.visible = !1, this.isHide = !0;
        }
        onDisable() {
            Laya.timer.clearAll(this), this.panel.visible = !1;
        }
        onStart() {
            this.isHide || (this.initData(), this.initUI(), this.initList_QL());
        }
        initUI() {
            let e = 0 != this.appCount;
            this.list.visible = e, this.panel.visible = e;
        }
        initData() {
            if (y.appWidth = this.appWidth, y.appHeight = this.appHeight, y.appPrefab = this.appPrefab, this.data = g.wxMgr.getWxappList(this.category), this.appCount = this.data.length, this.appCount <= 6) return;
            let e = 0,
                t = 0;
            for (e = 0; e < this.appCount; ++e) t += this.data[e].weight;
            let i = [],
                a = 0;
            for (e = 0; e < this.appCount; ++e) a += this.data[e].weight, i[e] = {}, i[e].index = e, i[e].weight = a / t;
            let s = [],
                n = 0,
                o = !1,
                r = 0;
            for (let t = 0; t < this.appCount; ++t) {
                for (n = Math.random() * i[i.length - 1].weight, o = !1, e = 0; e < i.length; ++e) !o && n <= i[e].weight && (o = !0, s.push(this.data[i[e].index]), e + 1 < i.length && (r = i[e + 1].weight - i[e].weight)), o && e + 1 < i.length && (i[e + 1].weight -= r, i[e] = i[e + 1]);
                i.length -= 1;
            }
            this.data = s;
        }
        initList_QL() {
            let e = this.list;
            null != e && (e.itemRender = y, e.vScrollBarSkin = "", e.selectEnable = !0, e.renderHandler = new Laya.Handler(this, this.updateItem), e.mouseHandler = new Laya.Handler(this, this.onSelect), this.renderCount = e.repeatX * e.repeatY), e.array = this.data, 1 == this.category && Laya.timer.once(1e3, this, this.moveList);
        }
        getData(e, t) {
            for (var i = 0; i < e.length; ++i) e[i];
        }
        moveList() {
            if (this.needClearTimer = !1, this.list) {
                let e = (this.list.array.length + 2) / 3;
                if (e < 3) return;
                let t = 3 * e - 6;
                this.list.tweenTo(t, 3e3 * (t - this.list.startIndex - 1), new Laya.Handler(this, this.moveList1));
            }
        }
        moveList1() {
            let e = (this.list.array.length + 2) / 3;
            if (e < 3) return;
            let t = 3 * e - 6;
            this.list.tweenTo(0, 3e3 * t, new Laya.Handler(this, this.moveList));
        }
        updateItem(e, t) {
            e.setItemInfo(e.dataSource);
        }
        onSelect(e, t) {
            if (!(t < 0)) {
                if ("mouseup" == e.type) {
                    var i = this.list.getItem(t);
                    null != i && g.wxMgr.openOtherApp(i.app_id, i.category);
                }
                1 == this.category && (this.needClearTimer && Laya.timer.clear(this, this.moveList), this.needClearTimer = !0, this.list.startIndex < 3 ? Laya.timer.once(1e3, this, this.moveList) : Laya.timer.once(1e3, this, this.moveList1)), this.list.selectedIndex = -1;
            }
        }
        _setData(e) {
            this.ind = 0, null != this.panel && (null == this.data || 0 == this.data.length ? this.panel.visible = !1 : this.panel.visible = !0), this.list.array = this.data, this.data.length > this.renderCount && Laya.timer.frameOnce(1, this, this._tweenToNext);
        }
        _tweenToNext() {
            Laya.timer.clearAll(this), this.ind = Math.max(this.list.repeatY, this.list.startIndex), this.ind == this.prevInd && (this.ind += this.list.repeatY), this.ind > this.appCount && (this.list.scrollTo(0), this.ind = this.list.repeatY), this.prevInd = this.ind, this.list.tweenTo(this.ind, this.speed - 10), Laya.timer.once(this.speed, this, this._tweenToNext);
        }
        _copyEndDataToStart(e) {
            if (this.appCount = e.length, e.length > this.renderCount)
                for (let t = 0; t < this.renderCount; t++) {
                    const i = e[e.length - t - 1];
                    e.unshift(i);
                }
        }
    }
    class f extends Laya.Script {}
    class w extends p {
        onAwake() {
            g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), super.onAwake();
        }
        initUI_AL() {
            this.btnCancel = this.getChild("btnCancel");
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnCancel, this, this.cancelClick);
        }
        cancelClick() {
            this.close(), g.commonData.isNoAds = !1, g.adMgr.showBannerAd_AL();
        }
    }
    class v extends p {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        dawdfa() {}
    }
    class S extends Laya.Box {
        constructor() {
            super(), this.icon = null, this.getTypeTag = null, this.initItem();
        }
        onDisable() {}
        setItemInfo_AL(e) {
            null != e && (this.icon.skin = e.iconPath, this.getTypeTag.skin = e.tagPath);
        }
        initItem() {
            if (!S.itemPrefab) return void console.error("app prefab is null");
            let e = Laya.Pool.getItemByCreateFun("SkinItem", S.itemPrefab.create, S.itemPrefab);
            this.icon = e.getChildByName("skinIcon"), this.getTypeTag = e.getChildByName("typeTag"), e.size(S.itemWidth, S.itemHeight), this.addChild(e);
        }
    }
    S.itemWidth = 128, S.itemHeight = 128, S.itemPrefab = null, S.iconWidth = 180, S.iconHeight = 190, S.iconOffset = new Laya.Vector2(10, 10);
    class b extends p {
        constructor() {
            super(), this.itemCount = 0, this.itemIndex = 0, this.skinItemPath = "prefab/freeSkinItem.json", this.skinData = [];
        }
        onAwake() {
            super.onAwake(), Laya.loader.load(this.skinItemPath, Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB), g.commonData.isShowSkin = !1;
        }
        onOpened(e) {
            e && e.isPlay && (this.isPlay = e.isPlay, g.gameMgr_AL.isPlay = !1);
        }
        initUI_AL() {
            let e = this.getChild("content");
            this.skinList = this.getChild("skinList", e);
            let t = this.getChild("bottomPanel");
            this.btnVideo = this.getChild("btnVideo"), this.btnVideo.visible = !0, this.btnTips = this.getChild("btnTips"), this.btnBack = this.getChild("btnBack", t), this.tipsTag = this.getChild("tag", this.btnTips), this.tipsTag.visible = !g.storageMgr.isSkinTips(), g.tweenMgr.toScale(this.btnVideo, 1.1, 500, !0, !0);
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnVideo, this, this.onVideoClick, 14), g.utils_AL.addClickEvent_AL(this.btnTips, this, this.onTipsClick, 14), g.utils_AL.addClickEvent_AL(this.btnBack, this, this.onBackClick, 14), g.glEvent.on("ad_video_close_event", this, this.onVideoCloseEvent), g.glEvent.on("ad_load_event", this, this.onAdLoadEvent);
        }
        onClosed() {
            super.onClosed(), this.isPlay && (g.gameMgr_AL.isPlay = !0);
        }
        onDisable() {
            g.glEvent.off("ad_video_close_event", this, this.onVideoCloseEvent), g.glEvent.off("ad_load_event", this, this.onAdLoadEvent);
        }
        initData_AL() {
            this.itemCount = 4, this.skinData = [];
            for (let e = 0; e < this.itemCount; ++e) {
                let t = {
                    id: e + 1,
                    iconPath: "ui/common/skin_" + (e + 1) + ".png",
                    tagPath: "ui/common/icon_shiyong.png"
                };
                this.skinData.push(t);
            }
        }
        initList() {
            S.itemWidth = 200, S.itemHeight = 270, S.iconWidth = 142, S.iconHeight = 195, S.iconOffset = new Laya.Vector2(29, 8), S.itemPrefab = Laya.loader.getRes(this.skinItemPath);
            let e = this.skinList;
            e.itemRender = S, e.selectEnable = !0, e.selectHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem), e.array = this.skinData;
        }
        updateItem(e, t) {
            e.setItemInfo_AL(e.dataSource);
        }
        onSelect(e) {
            e < 0 || (this.itemIndex = e + 1, this.skinList.selectedIndex = -1);
            platform.getInstance().showReward(() => {
                this.changeSkin(), g.commonData.isNoAds = !0
            })
        }
        onVideoClick() {
            this.itemIndex = Math.floor(4 * Math.random()) + 1, 5 == this.itemIndex && (this.itemIndex = 4);
            platform.getInstance().showReward(() => {
                this.changeSkin(), g.commonData.isNoAds = !0
            })
        }
        onBackClick() {
            this.itemIndex = 0, g.glEvent.event("change_skin_event", {
                index: this.itemIndex,
                isPlay: !0
            }), g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), this.close();
        }
        onAdLoadEvent(e) {}
        onVideoCloseEvent(e) {
            e.isEnded ? (this.changeSkin(), g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al()) : g.wxMgr.showToast("未观看完视频", 2e3);
        }
        changeSkin() {
            g.commonData.isShowSkin = !1, g.glEvent.event("change_skin_event", {
                index: this.itemIndex,
                isPlay: !0
            }), this.close();
        }
        onTipsClick() {
            let e = g.storageMgr.isSkinTips();
            this.tipsTag.visible = false, g.storageMgr.setSkinTips(!e);
        }
    }
    class k extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onUp);
        }
        onDisable() {}
        onDown() {
            k.isPress = !0;
        }
        onUp() {
            k.isPress = !1;
        }
    }
    k.isPress = !1;
    class A extends Laya.Script3D {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        init(e, t) {
            this.gameScene = e, this.planeCtrl = t;
        }
        onTriggerEnter(e) {
            this.planeCtrl.TriggerEnter(e);
        }
        onTriggerStay(e) {
            this.planeCtrl.TriggerStay(e);
        }
        onTriggerExit(e) {
            this.planeCtrl.TriggerExit(e);
        }
    }
    class C extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0, this.objType = "Start", this.moveTime = 0, this.moveDistanceX = .5, this.AdsorbentTime = 1, this.isStartAdsorben = !1, this.progress = 0, this.startPos = new Laya.Vector3();
        }
        onEnable() {}
        onDisable() {}
        onUpdate() {
            switch (this.objType) {
                case "Start":
                case "YouXiang":
                    this.owner.transform.rotate(new Laya.Vector3(0, .05, 0));
                    break;
                case "ErQiQiu":
                    this.moveTime += Laya.timer.delta / 1e3, this.moveTime > 2 && (this.moveTime = -2, this.moveDistanceX = -this.moveDistanceX), this.owner.transform.translate(new Laya.Vector3(this.moveDistanceX * Laya.timer.delta / 1e3, 0, 0));
            }
            switch (this.objType) {
                case "Start":
                case "YouXiang":
                case "Circle":
                case "Start_Special":
                    if (this.isStartAdsorben) {
                        this.progress += .05, this.progress > 1 && (this.progress = 1);
                        let e = new Laya.Vector3();
                        Laya.Vector3.lerp(this.startPos, E.PlaneObjPos, this.progress, e), this.thisTransform.transform.position = e;
                    }
            }
        }
        onAdsorbent() {
            if (!this.isStartAdsorben) {
                this.thisTransform = this.owner;
                this.owner.transform;
                this.startPos = new Laya.Vector3(this.thisTransform.transform.position.x, this.thisTransform.transform.position.y, this.thisTransform.transform.position.z), this.isStartAdsorben = !0;
            }
        }
    }
    class M extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0, this.floorNumber = 0;
        }
        onEnable() {}
        onDisable() {}
    }
    M.pieceFloorLenth = 25.474;
    class x {
        constructor() {
            this.Maps = new Array(), this.compositeUnit = new Array();
        }
    }
    class D {
        constructor() {
            this.level = 0, this.Maps = new Array();
        }
    }
    class T extends Laya.Script {
        constructor() {
            super(), this.MapsNumberMax = 3, this.mapList = new Array(), this.modelObjs = new Array(), this.curMapIndex = 0, this.isStartMap = !1, this.curMapLevel = 0, this.maxMapLevel = 2, this.levelMaps = new Array();
        }
        Init(e) {
            this.loadScene = e, T.Instance = this, this.datas = Laya.loader.getRes("res/Datas/airplaneRoadData.json"), Laya.stage.event("UpdataPlaneData", this.datas), this.InitMapLevel();
            let t = Laya.loader.getRes("res/LayaScene_Models/Conventional/Models.lh").getChildByName("Model");
            for (let e = 0; e < t.numChildren; e++) this.modelObjs.push(t.getChildAt(e));
            this.haimian = e.getChildByName("haimian"), this.haimian.getChildByName("haimian").meshRenderer.receiveShadow = !0, this.ReSetNewRoad(), Laya.stage.on("UpdatePlanePos", this, this.UpdatePlanePos), Laya.stage.on("autoAdsorbent", this, this.autoAdsorbent);
        }
        ReSetNewRoad() {
            if (this.curMapIndex = 0, this.InitMapLevel(), this.haimian.transform.position = new Laya.Vector3(), this.isStartMap) {
                if (this.mapList.length > 0)
                    for (let e = this.mapList.length; e > 0; e--) {
                        this.mapList.pop().destroy();
                    }
                this.AutoCreatAMap(this.MapsNumberMax);
            } else null == this.mapList || 0 == this.mapList.length ? this.AutoCreatAMap(this.MapsNumberMax) : this.curMapIndex = this.mapList.length;
        }
        getMapBringPos() {
            let e = new Laya.Vector3();
            return null == this.mapList || 0 == this.mapList.length ? e : e = this.mapList[0].transform.position;
        }
        UpdatePlanePos(e) {
            this.mapList.length < this.MapsNumberMax ? this.AutoCreatAMap() : e > this.mapList[1].transform.position.z && (this.mapList.shift().destroy(), this.AutoCreatAMap());
            this.haimian.transform.position = new Laya.Vector3(0, 0, e);
        }
        CreatNewMap() {
            this.CreatMapByData(this.GetMapBylevel(this.curMapLevel));
        }
        AutoCreatAMap(e = 1) {
            for (let t = 0; t < e; t++) 0 == this.curMapIndex ? this.curMapLevel = 0 : this.curMapIndex <= 3 ? this.curMapLevel = 1 : this.curMapIndex <= 6 ? this.curMapLevel = 2 : this.curMapLevel = 3, this.CreatMapByData(this.GetMapBylevel(this.curMapLevel));
        }
        CreatAFloor(e, t = "DiMian", i = new Laya.Vector3()) {
            var a;
            let s = "DiMian";
            t.indexOf("HaiMian") >= 0 ? (s = "HaiMian", a = Laya.Sprite3D.instantiate(this.GetModelPrefabByName("HaiMian"), e.owner)) : a = Laya.Sprite3D.instantiate(this.GetModelPrefabByName("DiMian"), e.owner);
            var n = new Laya.Vector3(0, 0, e.floorNumber * M.pieceFloorLenth);
            Laya.Vector3.add(n, i, n), e.floorNumber += 1, a.addComponent(C).objType = s, a.transform.localPosition = n;
        }
        CreatAOrnament(e, t = "DiMian", i = new Laya.Vector3(), a = new Laya.Vector3(), s = new Laya.Vector3(1, 1, 1)) {
            var n = this.GetModelPrefabByName(t),
                o = null;
            null != n && (o = Laya.Sprite3D.instantiate(n, e.owner)), o.addComponent(C).objType = t;
            let r = new Laya.Vector3(-i.x, i.y, i.z),
                l = new Laya.Vector3(a.x, -a.y, a.z),
                h = new Laya.Vector3(s.x, s.y, s.z);
            o.transform.localPosition = r, o.transform.localRotationEuler = l, o.transform.localScale = h;
        }
        onEnable() {}
        onDisable() {}
        GetModelPrefabByName(e) {
            var t = e.toString(),
                i = null;
            for (let e = 0; e < this.modelObjs.length; e++)
                if (this.modelObjs[e].name == t) {
                    i = this.modelObjs[e];
                    break;
                }
            return null == i ? null : i;
        }
        GetMapBylevel(e) {
            for (let t = 0; t < this.levelMaps.length; t++) {
                const i = this.levelMaps[t];
                if (i.level == e) {
                    let e = Math.floor(Math.random() * i.Maps.length);
                    e == i.Maps.length && (e = i.Maps.length - 1);
                    let t = i.Maps.splice(e, 1)[0];
                    if (null != t) return t;
                    break;
                }
            }
            let t = new Array();
            for (let i = 0; i < this.datas.Maps.length; i++) {
                const a = this.datas.Maps[i];
                a.hardLvl == e && t.push(a);
            }
            if (0 == t.length) return null;
            let i = Math.floor(Math.random() * t.length);
            return i == t.length && (i = t.length - 1), t[i];
        }
        InitMapLevel() {
            this.levelMaps = new Array();
            for (let e = 0; e < this.datas.Maps.length; e++) {
                const t = this.datas.Maps[e];
                let i = !0;
                for (let e = 0; e < this.levelMaps.length; e++) {
                    const a = this.levelMaps[e];
                    a.level == t.hardLvl && (i = !1, a.Maps.push(t));
                }
                if (i) {
                    let e = new D();
                    e.level = t.hardLvl, e.Maps.push(t), this.levelMaps.push(e);
                }
            }
        }
        CreatMapByData(e) {
            var t = this.loadScene.addChild(new Laya.Sprite3D()),
                i = t.addComponent(M);
            for (let t = 0; t < e.floorLength; t++) {
                switch (e.floorTypes[t]) {
                    case 0:
                        this.CreatAFloor(i, "DiMian");
                        break;
                    case 1:
                        this.CreatAFloor(i, "HaiMian");
                        break;
                    case 2:
                        this.CreatAFloor(i, "daoyu01");
                }
            }
            if (this.CreatReward(i, e.rewards), this.CreatObstacle(i, e.obstacles), this.CreatDecorate(i, e.decorates), null != e.compositeUnits)
                for (let i = 0; i < e.compositeUnits.length; i++) {
                    const s = e.compositeUnits[i];
                    if (s.pro > 100 * Math.random()) {
                        var a = t.addChild(new Laya.Sprite3D());
                        let e = new Laya.Vector3(-s.pos.x, s.pos.y, s.pos.z),
                            i = new Laya.Vector3(s.rot.x, -s.rot.y, s.rot.z),
                            n = new Laya.Vector3(s.scale.x, s.scale.y, s.scale.z);
                        a.transform.localPosition = e, a.transform.localRotationEuler = i, a.transform.localScale = n, a.addComponent(M);
                        let o = a.getComponent(M),
                            r = this.GetCompositeDataById(s.type - 1);
                        switch (r.unitType) {
                            case 0:
                                this.CreatReward(o, r.composites);
                                break;
                            case 1:
                                this.CreatObstacle(o, r.composites);
                                break;
                            case 2:
                                this.CreatDecorate(o, r.composites);
                        }
                    }
                }
            var s = new Laya.Vector3();
            if (this.mapList.length > 0) {
                var n = this.mapList[this.mapList.length - 1].getComponent(M).floorNumber * M.pieceFloorLenth;
                Laya.Vector3.add(this.mapList[this.mapList.length - 1].transform.position, new Laya.Vector3(0, 0, n), s);
            }
            t.transform.localPosition = s, this.mapList.push(t), this.curMapIndex++;
        }
        CreatReward(e, t) {
            if (null != t && 0 != t.length)
                for (let i = 0; i < t.length; i++) {
                    const a = t[i];
                    let s = "";
                    switch (a.type) {
                        case 0:
                            s = "Start";
                            break;
                        case 1:
                            s = "Circle";
                            break;
                        case 2:
                            s = "YouXiang";
                            break;
                        case 3:
                            s = "Start_Special";
                    }
                    this.CreatAOrnament(e, s, a.pos, a.rot, a.scale);
                }
        }
        CreatObstacle(e, t) {
            if (null != t && 0 != t.length)
                for (let i = 0; i < t.length; i++) {
                    const a = t[i];
                    let s = "";
                    switch (a.type) {
                        case 10:
                            s = "xiaopingfang";
                            break;
                        case 11:
                            s = "DaShan1";
                            break;
                        case 12:
                            s = "DaShan2";
                            break;
                        case 13:
                            s = "DengTa";
                            break;
                        case 14:
                            s = "ErQiQiu";
                            break;
                        case 35:
                            s = "lijiaoqiao";
                            break;
                        default:
                            a.type < 10 && (s = "AiLou" + (a.type + 1).toString()), a.type <= 29 && a.type >= 15 && (s = "GaoLou" + (a.type - 14).toString()), a.type <= 34 && a.type >= 30 && (s = "lianjie0" + (a.type - 29).toString());
                    }
                    this.CreatAOrnament(e, s, a.pos, a.rot, a.scale);
                }
        }
        CreatDecorate(e, t) {
            if (null != t && 0 != t.length)
                for (let i = 0; i < t.length; i++) {
                    const a = t[i];
                    let s = "";
                    switch (a.type) {
                        case 0:
                            s = "ZhongDian";
                            break;
                        case 1:
                            s = "PaoDao";
                            break;
                        case 2:
                            s = "GaoShu";
                            break;
                        case 3:
                            s = "chuan";
                            break;
                        case 4:
                            s = "fengxiangqi";
                            break;
                        case 5:
                            s = "jiedao01";
                            break;
                        case 6:
                            s = "lukou01";
                            break;
                        case 7:
                            s = "lukou02";
                            break;
                        case 8:
                            s = "renxingdao";
                            break;
                        case 9:
                            s = "guanmu";
                            break;
                        case 10:
                            s = "yun01";
                            break;
                        case 11:
                            s = "yun02";
                            break;
                        case 12:
                            s = "yun03";
                            break;
                        case 13:
                            s = "jiedao02";
                    }
                    this.CreatAOrnament(e, s, a.pos, a.rot, a.scale);
                }
        }
        GetCompositeDataById(e) {
            return e < 0 || e > this.datas.compositeUnit.length ? (console.log("组合总个数：", this.datas.compositeUnit.length), console.log("找不到对应的组合编号：", e), null) : this.datas.compositeUnit[e];
        }
        autoAdsorbent(e = !1) {
            let t = E.PlaneObjPos;
            if (e)
                for (let e = 0; e < 2; e++) {
                    let i = this.mapList[e];
                    for (let e = 0; e < i.numChildren; e++) {
                        let a = i.getChildAt(e),
                            s = a.getComponent(C),
                            n = a.getComponent(M);
                        if (null != s) a.transform.position.z > t.z && a.transform.position.z < t.z + 15 && s.onAdsorbent();
                        else if (null != n)
                            for (let e = 0; e < a.numChildren; e++) {
                                let i = a.getChildAt(e).getComponent(C),
                                    s = a.getChildAt(e);
                                null != i && s.transform.position.z > t.z && s.transform.position.z < t.z + 15 && i.onAdsorbent();
                            }
                    }
                }
        }
    }
    var P;
    ! function(e) {
        e[e.glissade = 0] = "glissade", e[e.move = 1] = "move", e[e.superReward = 2] = "superReward", e[e.death = 3] = "death", e[e.crash = 4] = "crash";
    }(P || (P = {}));
    class E extends Laya.Script3D {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0, this._planeState = "Land", this.isStartSmoke_S = !1, this.isStartSmoke_L = !1, this.isStartSmoke_Rolling = !1, this.cameraStartPos = new Laya.Vector3(-.39, .82, -2.29), this.cameraStartRot = new Laya.Vector3(-13.5, -171.48, -.575), this.cameraMovePos = new Laya.Vector3(-.8, 1.885, -5.14), this.cameraMoveRot = new Laya.Vector3(-19.78, -171.413, 0), this.cameraCurPos = new Laya.Vector3(), this.cameraCurRot = new Laya.Vector3(), this.cameraTargetPos = new Laya.Vector3(), this.cameraTargetRot = new Laya.Vector3(), this.timeToTurn = 2.5, this.maxSpeedUpTime = 1e4, this.planeSpeedNor = 6, this.maxUpAngle = 45, this.maxDownAngle = -45, this.downSpeed = 2, this.forwardSpeed = 2, this.isStart = !1, this.curSkinId = 0, this.curFlightMode = P.move, this.oilValue = 1, this.oilAdd = .5, this.SuperSpeedUpTime = 8e3, this.SuperSpeedUpValue = 2, this.isSpeedUp = !1, this.isSuperSpeedUp = !1, this.restSuperSpeedUpTime = 0, this.curSpeed = 0, this._speed_z = 0, this._speed_y = 0, this._speed_angle = 0, this.deltatime = .016, this.curStayObj = null, this.Score = 0, this.distance = 0, this.starsNumber = 0, this.circleNumber = 0, this.starsValue = 10, this.circleValue = 100, this.scoreLerp = 0, this.breakDownfallSpeed = 1, this.UpTime = 0, this.downTime = 0, this.upAngle = 0, this.downAngle = 0, this.tmpVector2 = new Laya.Vector3(0, 0, 0), this.hitResults = new Array(), this.debugSprites = new Array(), this.albedoColor2 = new Laya.Vector4(0, 0, 1, .5), this.matObjList = new Array(), this.matList = new Array();
        }
        init(e) {
            Laya.stage.on("UpdataPlaneData", this, this.UpdataPlaneData), this.gameScene = e, this.Player = this.owner, this.CameraPos = this.Player.getChildByName("CameraPos"), this.CameraPos.transform.localPosition = this.cameraStartPos, this.CameraPos.transform.localRotationEuler = this.cameraStartRot, this.cameraCurPos = this.CameraPos.transform.localPosition, this.cameraCurRot = this.CameraPos.transform.localRotationEuler, this.MainCamera = this.CameraPos.getChildByName("Main Camera"), this.MainCamera.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.Plane = this.Player.getChildByName("Plane"), this.planeModel = this.Plane.getChildByName("planeModel"), this.planeModel.addComponent(A).init(this.gameScene, this), this.shadow = this.gameScene.getChildByName("shadow"), this.FX_FDY_Alert = this.Player.getChildByName("FX_FDY_Alert"), this.FX_FDY_Alert.active = !1, this.FX_FDY_Speed = this.planeModel.getChildByName("FX_FDY_Speed"), this.FX_FDY_Speed.active = !1, this.FX_FDY_Tutorial = this.Player.getChildByName("FX_FDY_Tutorial"), console.log(this.FX_FDY_Tutorial.name), this.FX_FDY_Tutorial.active = !1, Laya.stage.on("showTutorial", this, this.showTutorial), this.curSkinId = 0, this.setPlaneSkin(this.curSkinId), this.mat = new Laya.BlinnPhongMaterial(), this.mat.albedoColor = new Laya.Vector4(1, 1, 1, .5), this.mat.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, this.boxCollider = new Laya.BoxColliderShape(1, 1, 1);
        }
        showTutorial(e) {
            this.FX_FDY_Tutorial.active = e;
        }
        UpdataPlaneData(e) {
            null != e.maxSpeedUpTime && 0 != e.maxSpeedUpTime && (this.maxSpeedUpTime = e.maxSpeedUpTime), null != e.oilAdd && 0 != e.oilAdd && (this.oilAdd = e.oilAdd), null != e.maxUpAngle && 0 != e.maxUpAngle && (this.maxUpAngle = e.maxUpAngle), null != e.maxDownAngle && 0 != e.maxDownAngle && (this.maxDownAngle = e.maxDownAngle), null != e.timeToTurn && 0 != e.timeToTurn && (this.timeToTurn = e.timeToTurn), null != e.planeSpeedNor && 0 != e.planeSpeedNor && (this.planeSpeedNor = e.planeSpeedNor), null != e.SuperSpeedUpTime && 0 != e.SuperSpeedUpTime && (this.SuperSpeedUpTime = e.SuperSpeedUpTime), null != e.SuperSpeedUpValue && 0 != e.SuperSpeedUpValue && (this.SuperSpeedUpValue = e.SuperSpeedUpValue);
        }
        onEnable() {}
        onDisable() {}
        prepareGame() {
            this._speed_y = 0, this._speed_z = 0, this.UpTime = 0, this.downTime = 0, this.upAngle = 0, this.downAngle = 0, this.oilValue = 1, this.planeModel.active = !0, Laya.stage.event("showOilProgress", this.oilValue), Laya.stage.event("superSpeeedUpTip", !1), Laya.stage.event("noOilTip", !1), g.soundMgr.stop("speed up"), this.FX_FDY_Alert.active = !1, this.FX_FDY_Speed.active = !1, this._planeState = "Land", this.curFlightMode = P.move, this.isSpeedUp = !1, this.ani.play("daiji"), this.isSuperSpeedUp = !1, this.Player.transform.position = new Laya.Vector3(), this.planeModel.transform.localPosition = new Laya.Vector3(), this.planeModel.transform.localRotationEuler = new Laya.Vector3(), this.CameraPos.transform.localPosition = this.cameraStartPos, this.CameraPos.transform.localRotationEuler = this.cameraStartRot, this.isStart = !1, this.shadow.active = !0, this.setPlaneSkin(this.curSkinId), this.Score = 0, this.distance = 0, this.starsNumber = 0, this.circleNumber = 0, this.scoreLerp = 0, Laya.stage.event("Score", this.Score), g.soundMgr.playBGM();
        }
        startGame() {
            this.isStart = !0;
        }
        ContinueGame() {
            this.ani.play("daiji"), this.FX_FDY_Alert.active = !1, this.FX_FDY_Speed.active = !1, this.UpTime = 0, this.downTime = 0, this.upAngle = 0, this.downAngle = 0, this.oilValue = 1, this.curSpeed = this.planeSpeedNor, this.planeModel.active = !0, Laya.stage.event("showOilProgress", this.oilValue);
            let e = T.Instance.getMapBringPos();
            this.Player.transform.position = new Laya.Vector3(0, 12, e.z), this.planeModel.transform.localPosition = new Laya.Vector3(), this.planeModel.transform.localRotationEuler = new Laya.Vector3(), this.CameraPos.transform.localPosition = this.cameraMovePos, this.CameraPos.transform.localRotationEuler = this.cameraMoveRot;
            for (let e = 0; e < this.matList.length; e++) {
                this.matList[e].albedoColor = new Laya.Vector4(1, 1, 1, 1);
            }
            this.curFlightMode = P.glissade, this.isSuperSpeedUp = !1, this.isStart = !0, this.shadow.active = !0, g.soundMgr.playBGM();
        }
        onUpdate() {
            if (this.isStart) {
                switch (this.deltatime = Laya.timer.delta / 1e3, this.distance = Math.floor(this.Player.transform.position.z), this.Score = this.distance + this.starsNumber * this.starsValue + this.circleNumber * this.circleValue, this.scoreLerp = Math.floor(Laya.MathUtil.lerp(this.scoreLerp, this.Score, .1)), Laya.stage.event("Score", this.scoreLerp), E.PlaneObjPos = this.Player.transform.position, this.curFlightMode) {
                    case P.move:
                        if (null == this.curStayObj) {
                            if (this._speed_y -= this.downSpeed * this.deltatime, this.Player.transform.position.y < -.2) return console.log("掉入水池死亡！"), void this.break();
                        } else this._speed_y = 0, this.speedUp() ? (this._speed_z += this.forwardSpeed * this.deltatime, this.isPlayGlide && (this.isPlayGlide = !1, g.soundMgr.stop("glide"))) : this._speed_z > 0 ? (this.isPlayGlide || (g.soundMgr.play("glide", 0), this.isPlayGlide = !0), this._speed_z -= this.forwardSpeed * this.deltatime) : (this.isPlayGlide && (this.isPlayGlide = !1, g.soundMgr.stop("glide")), this._speed_z = 0), this._speed_z > this.planeSpeedNor && (this._speed_z = this.planeSpeedNor, this.curSpeed = this._speed_z, this.takeOff(), this.isPlayEngine && (this.isPlayEngine = !1, g.soundMgr.stop("engine")), g.soundMgr.play("take off"), this.isPlayTakeOff = !0, Laya.timer.once(2e3, this, () => {
                            this.isPlayTakeOff = !1;
                        }));
                        0 == this._speed_z ? this._speed_angle = 0 : this._speed_angle = 180 * Math.atan(this._speed_y / this._speed_z) / Math.PI, this.planeModel.transform.localRotationEuler = new Laya.Vector3(-this._speed_angle, 0, 0), this.isSpeedUpEffect();
                        let e = this._speed_z / this.planeSpeedNor;
                        Laya.Vector3.lerp(this.cameraStartPos, this.cameraMovePos, e, this.cameraCurPos), Laya.Vector3.lerp(this.cameraStartRot, this.cameraMoveRot, e, this.cameraCurRot), this.CameraPos.transform.localPosition = this.cameraCurPos, this.CameraPos.transform.localRotationEuler = this.cameraCurRot;
                        break;
                    case P.glissade:
                        if (this.speedUp() ? (this.UpTime < 1 ? this.UpTime += this.deltatime / this.timeToTurn : this.UpTime = 1, this.downTime = 0, this._speed_angle = Laya.MathUtil.lerp(this.downAngle, this.maxUpAngle, this.UpTime), this.upAngle = this._speed_angle) : (this.downTime < 1 ? this.downTime += this.deltatime / this.timeToTurn : this.downTime = 1, this.UpTime = 0, this._speed_angle = Laya.MathUtil.lerp(this.upAngle, this.maxDownAngle, this.downTime), this.downAngle = this._speed_angle), this.Player.transform.position.y < -.2) return console.log("掉入水池死亡！"), void this.break();
                        let t = this._speed_angle * Math.PI / 180;
                        this._speed_y = this.curSpeed * Math.sin(t), this._speed_z = this.curSpeed * Math.cos(t), this.planeModel.transform.localRotationEuler = new Laya.Vector3(1.2 * -this._speed_angle, 0, 0), this.isSpeedUpEffect(), this.isDownEffect();
                        let i = this.CameraPos.transform.position,
                            a = this.Plane.transform.position;
                        this.gameScene.physicsSimulation.shapeCastAll(this.boxCollider, i, a, this.hitResults);
                        for (let e = 0, t = this.hitResults.length; e < t; e++) this.albedoColorChange(this.hitResults[e].collider.owner);
                        if (this.oilValue <= 0) {
                            let e = (2 * Math.random() - 1) / 60,
                                t = (2 * Math.random() - 1) / 60,
                                i = new Laya.Vector3(e, t, 0);
                            this.planeModel.transform.localPosition = i;
                        }
                        this.isSuperSpeedUp && (Laya.stage.event("autoAdsorbent", !0), this.restSuperSpeedUpTime -= Laya.timer.delta, this.restSuperSpeedUpTime <= 0 && (this.isSuperSpeedUp = !1, this.curSpeed = this.planeSpeedNor, this.FX_FDY_Speed.active = !1, Laya.stage.event("superSpeeedUpTip", !1), g.soundMgr.stop("speed up")));
                        break;
                    case P.death:
                        break;
                    case P.superReward:
                        this._speed_z = 1.8 * this.planeSpeedNor, this._speed_y = (20 - this.Player.transform.position.y) / 1.5, Laya.stage.event("autoAdsorbent", !0);
                        break;
                    case P.crash:
                        this.breakDownfallSpeed += this.downSpeed * this.deltatime, this.planeModel.transform.translate(new Laya.Vector3(0, -this.breakDownfallSpeed * this.deltatime, 0)), this.planeModel.transform.position.y <= .2 && (this.curFlightMode = P.death, this.breakDownfallSpeed = 0);
                }
                this.Player.transform.position.y > 25 && this._speed_y > 0 ? this.Player.transform.translate(new Laya.Vector3(0, this._speed_y * this.deltatime / (this.Player.transform.position.y - 24), this._speed_z * this.deltatime)) : this.Player.transform.translate(new Laya.Vector3(0, this._speed_y * this.deltatime, this._speed_z * this.deltatime)), Laya.stage.event("UpdatePlanePos", this.Player.transform.position.z), this.shadow.transform.position = new Laya.Vector3(0, 0, this.Player.transform.position.z);
            }
        }
        speedUp() {
            return k.isPress ? this.oilValue > 0 ? (this.isSuperSpeedUp || this.curFlightMode == P.move || (this.oilValue -= Laya.timer.delta / this.maxSpeedUpTime), Laya.stage.event("showOilProgress", this.oilValue), this.isSpeedUp = !0, !0) : this.oilValue < 0 ? (this.oilValue = 0, Laya.stage.event("showOilProgress", this.oilValue), Laya.stage.event("noOilTip", !0), this.FX_FDY_Alert.active = !0, this.isSpeedUp = !1, !1) : (this.isSpeedUp = !1, !1) : (this.isSpeedUp = !1, !1);
        }
        takeOff() {
            this.curFlightMode = P.glissade, console.log("起飞！！！");
        }
        comeOn(e = 0) {
            0 == e && (e = this.oilAdd), this.oilValue += e, this.oilValue > 1 && (this.oilValue = 1), Laya.stage.event("showOilProgress", this.oilValue), Laya.stage.event("noOilTip", !1), this.FX_FDY_Alert.active = !1;
        }
        break () {
            console.log("坠毁"), g.wxMgr.playVibrateLong(), this.isPlayUp && (this.isPlayUp = !1, g.soundMgr.stop("rise")), this.isPlayDown && (this.isPlayDown = !1, g.soundMgr.stop("fall")), g.soundMgr.play("game over"), g.soundMgr.stop("speed up"), this.stopSpeedUpEffect(), this.stopRollingEffect(), this.stopBreakEffect(), this._planeState = "Break", this.curFlightMode = P.crash, this.breakDownfallSpeed = 0, this.isSpeedUp = !1, this.planeModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.planeModel.active = !1, Laya.stage.event("superSpeeedUpTip", !1), Laya.stage.event("noOilTip", !1), this.FX_FDY_Alert.active = !1, this.FX_FDY_Speed.active = !1, Laya.stage.event("PlayEffect", ["FX_FDY_Die", null, this.Plane.transform.position]), g.commonData.newScore = this.scoreLerp, Laya.Tween.to(this.CameraPos.transform, {
                localPositionX: this.cameraStartPos.x,
                localPositionY: this.cameraStartPos.y,
                localPositionZ: this.cameraStartPos.z,
                localRotationEulerX: this.cameraStartRot.x,
                localRotationEulerY: this.cameraStartRot.y,
                localRotationEulerZ: this.cameraStartRot.z
            }, 2e3, null, Laya.Handler.create(this, () => {
                g.glEvent.event("over_game_event");
            })), this._speed_y = 0, this._speed_z = 0, this.curSkinId = 0, null != this.curStayObj && "DiMian" == this.curStayObj.objType || (this.curFlightMode = P.crash, this.breakDownfallSpeed = 0), this.shadow.active = !1;
        }
        superSpeedUp() {
            this.curSpeed = this.planeSpeedNor * this.SuperSpeedUpValue, this.FX_FDY_Speed.active = !0, this.isSuperSpeedUp || (this.restSuperSpeedUpTime = this.SuperSpeedUpTime), this.isSuperSpeedUp = !0, Laya.stage.event("superSpeeedUpTip", !0), g.soundMgr.play("speed up");
        }
        isSpeedUpEffect() {
            this.isSpeedUp ? this.startSpeedUpEffect() : this.stopSpeedUpEffect();
        }
        isDownEffect() {
            this.isSpeedUp ? this.stopBreakEffect() : (this._speed_angle <= this.maxDownAngle || this.oilValue <= 0) && this.startBreakEffect();
        }
        turnAround() {
            this.curFlightMode != P.glissade || this.isSuperSpeedUp || (this.ani.crossFade("zhuanquan", .2), this.startRollingEffect(), Laya.timer.once(3e3, this, () => {
                this.stopRollingEffect();
            }));
        }
        startSpeedUpEffect() {
            this.isStartSmoke_L || (this.FX_FDY_Smoke_L_left.particleSystem.emission.emissionRate = 100, this.FX_FDY_Smoke_L_right.particleSystem.emission.emissionRate = 100, this.isStartSmoke_L = !0, g.soundMgr.play("engine", 0));
        }
        stopSpeedUpEffect() {
            this.isStartSmoke_L && (this.FX_FDY_Smoke_L_left.particleSystem.emission.emissionRate = 0, this.FX_FDY_Smoke_L_right.particleSystem.emission.emissionRate = 0, this.isStartSmoke_L = !1, g.soundMgr.stop("engine"));
        }
        startBreakEffect() {
            this.isStartSmoke_S || (this.FX_FDY_Smoke_S_left.particleSystem.emission.emissionRate = 100, this.FX_FDY_Smoke_S_right.particleSystem.emission.emissionRate = 100, this.isStartSmoke_S = !0, g.soundMgr.play("fall", 0));
        }
        stopBreakEffect() {
            this.isStartSmoke_S && (this.FX_FDY_Smoke_S_left.particleSystem.emission.emissionRate = 0, this.FX_FDY_Smoke_S_right.particleSystem.emission.emissionRate = 0, this.isStartSmoke_S = !1, g.soundMgr.stop("fall"));
        }
        startRollingEffect() {
            this.isStartSmoke_Rolling || (this.FX_FDY_Smoke_Rolling_left.particleSystem.emission.emissionRate = 100, this.FX_FDY_Smoke_Rolling_right.particleSystem.emission.emissionRate = 100, this.isStartSmoke_Rolling = !0);
        }
        stopRollingEffect() {
            this.isStartSmoke_Rolling && (this.FX_FDY_Smoke_Rolling_left.particleSystem.emission.emissionRate = 0, this.FX_FDY_Smoke_Rolling_right.particleSystem.emission.emissionRate = 0, this.isStartSmoke_Rolling = !1);
        }
        TriggerEnter(e) {
            let t = this.getColliderRoadObj(e.owner);
            if (null != t && (this.curStayObj = t), e.owner.name.indexOf("Start") >= 0) {
                this.starsNumber++;
                let t = e.owner.transform.position;
                g.wxMgr.playVibrateShort(), e.owner.name.indexOf("Start_Special") >= 0 ? (this.curFlightMode == P.glissade && 1 != this.isSuperSpeedUp && this.superSpeedUp(), g.soundMgr.play("super star"), Laya.stage.event("PlayEffect", ["FX_FDY_GetStar_XXDH", null, t])) : (g.soundMgr.play("star"), Laya.stage.event("PlayEffect", ["FX_FDY_GetStar", null, t]), Laya.stage.event("getScore", [this.starsValue, E.WorldToScreen2(this.MainCamera, this.planeModel.transform.position)])), Laya.timer.frameOnce(1, this, () => {
                    e.owner.destroy();
                });
            } else if (e.owner.name.indexOf("Circle") >= 0) {
                this.circleNumber++, g.wxMgr.playVibrateShort(), g.soundMgr.play("circle");
                let t = e.owner.transform.position;
                Laya.timer.frameOnce(1, this, () => {
                    this.turnAround(), Laya.stage.event("PlayEffect", ["FX_FDY_Cross", null, t]), e.owner.destroy(), Laya.stage.event("getScore", [this.circleValue, E.WorldToScreen2(this.MainCamera, this.planeModel.transform.position)]);
                });
            } else if (e.owner.name.indexOf("YouXiang") >= 0) this.comeOn(), g.soundMgr.play("rise"), Laya.timer.frameOnce(1, this, () => {
                e.owner.destroy();
            });
            else {
                if (this.curFlightMode != P.glissade) return;
                this._speed_y <= .2 && this._speed_z <= .2 || (e.owner.name.indexOf("Obstacle") >= 0 ? this.break() : e.owner.name.indexOf("dimian") >= 0 ? (console.log("碰到地面死亡"), this.break()) : this.break());
            }
        }
        TriggerStay(e) {
            if (null == this.curStayObj) {
                let t = this.getColliderRoadObj(e.owner);
                null != t && (this.curStayObj = t);
            }
        }
        TriggerExit(e) {
            this.getColliderRoadObj(e.owner) == this.curStayObj && (this.curStayObj = null);
        }
        getColliderRoadObj(e) {
            let t = e.getComponent(C);
            return null == t && (t = e.parent.getComponent(C)), null == t && console.log("找不到RoadObj对象：", e.name), t;
        }
        albedoColorChange(e) {
            for (let e = 0; e < this.matObjList.length && this.matObjList.length > e; e++) null == this.matObjList[e] && (this.matObjList.splice(e, 1), this.matList.splice(e, 1));
            let t = !0;
            for (let i = 0; i < this.matObjList.length; i++) this.matObjList[i] == e && (t = !1, this.break);
            if (e.name.indexOf("dimian") >= 0 || e.name.indexOf("Plane") >= 0) return;
            let i = e.meshRenderer;
            if (null != i && t) {
                var a = new Laya.BlinnPhongMaterial();
                a.albedoColor = new Laya.Vector4(1, 1, 1, 1), a.albedoTexture = i.sharedMaterial.albedoTexture, a.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, i.sharedMaterial = a, this.matObjList.push(e), this.matList.push(a), console.log("开始改变材质:", e.name), Laya.Tween.to(a, {
                    albedoColorA: .3
                }, 400);
            }
        }
        setPlaneSkin(e) {
            let t, i;
            switch (console.log("设置皮肤：", e), this.shadow, this.planeModel.getChildByName("feiji01@skin").active = !1, this.planeModel.getChildByName("feiji04@skin").active = !1, this.planeModel.getChildByName("feiji05@skin").active = !1, this.planeModel.getChildByName("feiji06@skin").active = !1, this.planeModel.getChildByName("feiji07@skin").active = !1, this.shadow.getChildByName("Plane1").active = !1, this.shadow.getChildByName("Plane4").active = !1, this.shadow.getChildByName("Plane5").active = !1, this.shadow.getChildByName("Plane6").active = !1, this.shadow.getChildByName("Plane7").active = !1, e) {
                case 0:
                    (t = this.planeModel.getChildByName("feiji01@skin")).active = !0, (i = this.shadow.getChildByName("Plane1")).active = !0;
                    break;
                case 1:
                    (t = this.planeModel.getChildByName("feiji04@skin")).active = !0, (i = this.shadow.getChildByName("Plane4")).active = !0;
                    break;
                case 2:
                    (t = this.planeModel.getChildByName("feiji05@skin")).active = !0, (i = this.shadow.getChildByName("Plane5")).active = !0;
                    break;
                case 3:
                    (t = this.planeModel.getChildByName("feiji06@skin")).active = !0, (i = this.shadow.getChildByName("Plane6")).active = !0;
                    break;
                case 4:
                    (t = this.planeModel.getChildByName("feiji07@skin")).active = !0, (i = this.shadow.getChildByName("Plane7")).active = !0;
                    break;
                default:
                    (t = this.planeModel.getChildByName("feiji01@skin")).active = !0, (i = this.shadow.getChildByName("Plane1")).active = !0;
            }
            this.ani = t.getComponent(Laya.Animator), this.FX_FDY_Smoke_L_left = t.getChildByName("FX_FDY_Smoke_L_left"), this.FX_FDY_Smoke_L_right = t.getChildByName("FX_FDY_Smoke_L_right"), this.FX_FDY_Smoke_S_left = t.getChildByName("FX_FDY_Smoke_S_left"), this.FX_FDY_Smoke_S_right = t.getChildByName("FX_FDY_Smoke_S_right"), this.FX_FDY_Smoke_Rolling_left = t.getChildByName("FX_FDY_Smoke_Rolling_left"), this.FX_FDY_Smoke_Rolling_right = t.getChildByName("FX_FDY_Smoke_Rolling_right"), this.isStartSmoke_S = !0, this.isStartSmoke_L = !0, this.isStartSmoke_Rolling = !0, this.stopSpeedUpEffect(), this.stopBreakEffect(), this.stopRollingEffect();
        }
        static WorldToScreen2(e, t) {
            var i = new Laya.Vector4();
            return e.viewport.project(t, e.projectionViewMatrix, i), new Laya.Vector2(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY);
        }
    }
    E.PlaneObjPos = new Laya.Vector3();
    class R extends Laya.Script {
        constructor() {
            super();
        }
        init(e) {
            this.Scene = e;
            let t = Laya.loader.getRes("res/LayaScene_Models/Conventional/Models.lh").getChildByName("Effects");
            this.FX_FDY_GetStar = t.getChildByName("FX_FDY_GetStar"), this.FX_FDY_Die = t.getChildByName("FX_FDY_Die"), this.FX_FDY_Cross = t.getChildByName("FX_FDY_Cross"), this.FX_FDY_GetStar_XXDH = t.getChildByName("FX_FDY_GetStar_XXDH"), Laya.stage.on("PlayEffect", this, this.creatNewEffect);
        }
        creatNewEffect(e, t = this.Scene, i = new laya.d3.math.Vector3(), a = 5e3) {
            let s, n;
            switch (e) {
                case "FX_FDY_GetStar":
                    n = this.FX_FDY_GetStar;
                    break;
                case "FX_FDY_Die":
                    n = this.FX_FDY_Die;
                    break;
                case "FX_FDY_Cross":
                    n = this.FX_FDY_Cross;
                    break;
                case "FX_FDY_GetStar_XXDH":
                    n = this.FX_FDY_GetStar_XXDH;
            }
            null == t && (t = this.Scene), (s = Laya.Sprite3D.instantiate(n, t)).transform.localPosition = i, s.active = !0, Laya.stage.timerOnce(a, this, function() {
                s.destroy();
            });
        }
    }
    class B extends Laya.Script {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        init(e) {
            this.gameScene = e;
            let t = e.addChild(new Laya.Node());
            this.InputCtrl = t.addComponent(k);
            let i = e.addChild(new Laya.Node());
            this.EffectCtrl = i.addComponent(R), this.EffectCtrl.init(e);
            let a = this.gameScene.getChildByName("Player");
            this.PlaneCtrl = a.addComponent(E), this.PlaneCtrl.init(this.gameScene);
            let s = e.addChild(new Laya.Node());
            this.RoadCtrl = s.addComponent(T), this.RoadCtrl.Init(e);
        }
        onEnable() {}
        onDisable() {}
        prepareGame() {
            console.log("准备游戏"), this.RoadCtrl.ReSetNewRoad(), this.PlaneCtrl.prepareGame();
        }
        startGame() {
            console.log("开始游戏"), this.RoadCtrl.isStartMap = !0, this.PlaneCtrl.startGame();
        }
        changeShin(e) {
            this.PlaneCtrl.curSkinId = e;
        }
        continueGame() {
            this.PlaneCtrl.ContinueGame();
        }
        playEffect(e, t, i, a) {
            this.EffectCtrl.creatNewEffect(e, t, i, a);
        }
    }
    class I extends p {
        constructor() {
            super(...arguments), this.isGuide = !1, this.showCount = 0, this.isShoWNoOil = !1, this.TwinkleTime = 1, this.isTwinkleUp = !0, this.isShoWsuperSpeed = !1, this.SpeeedUpTwinkleTime = 1, this.isSpeeedUpTwinkleUp = !0;
        }
        initData_AL() {
            this.loadScene(), this.loadModels();
        }
        initUI_AL() {
            let e = this.getChild("topPanel");
            if (this.lbLevel = this.getChild("lbLevel", e), this.visible = !1, this._gameRank = e.getChildByName("rank"), this._gameRank.visible = !1, this.tank = this.getChild("tank"), this.oilProgress = this.getChild("oilProgress", this.tank), this.oilProgress.active = !1, this.showOilProgress(1), this.tank.visible = !1, this.score = this.getChild("fontScore", e), this.imgGuideRotate = this.getChild("imgGuideRotate"), this.imgGuideRotate.active = !0, this.isGuide = !0, this.noOilTip = this.getChild("noOilTip"), this.superSpeeedUpTip = this.getChild("superSpeeedUpTip"), this.scoreUpTip = this.getChild("scoreUpTip"), this.scoreUpTip.visible = !1, Laya.Browser.onWeiXin) {
                let e = window.wx.getSystemInfoSync(),
                    t = e.screenWidth * e.pixelRatio / H.width;
                this.noOilTip.scaleY = e.screenHeight * e.pixelRatio / H.height / t, this.superSpeeedUpTip.scaleY = this.noOilTip.scaleY;
            }
            this.noOilTip.visible = !1, this.superSpeeedUpTip.visible = !1, this.overRankSet();
        }
        initEvent() {
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), g.glEvent.on("init_game_event", this, this.initGameEvent), g.glEvent.on("over_game_event", this, this.overGameEvent), g.glEvent.on("play_game_event", this, this.onPlayGameEvent), g.glEvent.on("goon_game_event", this, this.onGoonGameEvent), g.glEvent.on("change_skin_event", this, this.changeSkin), Laya.stage.on("showOilProgress", this, this.showOilProgress), Laya.stage.on("Score", this, this.showScore), Laya.stage.on("getScore", this, this.getScore), Laya.stage.on("noOilTip", this, this.showNoOilTip), Laya.stage.on("superSpeeedUpTip", this, this.showSuperSpeeedUpTip);
        }
        loadScene() {
            let e = Laya.loader.getRes("res/LayaScene_SampleScene/Conventional/SampleScene.ls");
            Laya.stage.addChild(e), Laya.stage.setChildIndex(e, 0), this.mainScene = e, this.mainCamera = e.getChildByName("Main Camera");
            var t = e.addChild(new Laya.Node());
            this.GameCtrl = t.addComponent(B), this.GameCtrl.init(e);
        }
        loadModels() {}
        setFog() {
            let e = this.mainScene;
            e.enableFog = !0, e.fogColor = g.utils_AL.getRGB_AL("#7BBDBD"), e.fogStart = 80, e.fogRange = 120;
        }
        setFriendRank() {}
        hideIcon() {
            g.wxMgr.showFirstFriendTips(!1), this.rankPanel.visible = !1;
        }
        showFriendRank() {
            window.wx && window.sharedCanvas && (window.sharedCanvas.width = 65, window.sharedCanvas.height = 65), this._gameRank.visible = !1, g.wxMgr.showLoopFriendTips(!0), Laya.timer.once(1e3, this, this.lateShowRank);
        }
        lateShowRank() {
            this._gameRank && (this._gameRank.visible = !0, this._gameRank.alpha = 1, Laya.timer.once(2e3, this, this.closeGameRank));
        }
        closeGameRank() {
            let e = this;
            Laya.Tween.to(this._gameRank, {
                alpha: 0
            }, 1e3, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                e._gameRank.visible = !1, e._gameRank.alpha = 1;
            }), 0, !0);
        }
        overRankSet() {}
        getRankList(e) {
            let t = new Array(20);
            if (e.length <= 22) {
                for (let i = 0; i < e.length - 2; ++i) t[e.length - 3 - i] = e[i + 2];
                return t.length = e.length - 2, t;
            }
            let i = Math.floor((e.length - 2) / 20);
            Math.floor((e.length - 2) % 20);
            for (let a = 0; a < 20; ++a) t[19 - a] = e[a * i + Math.floor(Math.random() * i) + 2];
            return t;
        }
        showWorldRankIcon() {}
        setWorldRank() {
            if (this.rankPanel = this.getChildByName("topPanel").getChildByName("rankPanel"), !g.commonData.gameList || g.commonData.gameList.list.length < 2) return;
            let e = g.commonData.gameList.list;
            this.rankPanel.visible = !0, this.rankPanel.getChildByName("icon").visible = !0, e[0].avatar == g.commonData.gameList.userInfo.avatar ? this.rankPanel.getChildByName("icon").texture = e[1].avatar : this.rankPanel.getChildByName("icon").texture = e[0].avatar, Laya.timer.once(3e3, this, this.hideIcon);
        }
        onMouseDownEvent(e) {
            this.isGuide || (this.isGuide = !0, this.tank.visible = !0, this.imgGuideRotate.visible = !1, Laya.stage.event("showTutorial", !1), this.setFriendRank(), Laya.timer.loop(1e4, this, this.showFriendRank));
        }
        onMouseUpEvent() {}
        onMouseMoveEvent(e) {}
        initGameEvent(e) {
            g.gameMgr_AL.isOver = !1, g.gameMgr_AL.isPlay = e.isPlay, e.isPlay && (g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al()), this.GameCtrl.prepareGame();
        }
        onPlayGameEvent() {
            g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), g.gameMgr_AL.isPlay = !0, g.commonData.skinGameCount++, this.visible = !0, this.GameCtrl.startGame(), this.isGuide = !1, this.tank.visible = !1, this.imgGuideRotate.visible = !0, Laya.stage.event("showTutorial", !0);
        }
        onGoonGameEvent() {
            g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), g.commonData.goonCount++, Laya.timer.loop(1e4, this, this.showFriendRank), this.GameCtrl.continueGame(), this.visible = !0;
        }
        changeSkin(e) {
            this.GameCtrl.changeShin(e.index), this.initGameEvent(e), this.onPlayGameEvent();
        }
        overGameEvent() {
            g.commonData.isNoAds = !1, g.gameMgr_AL.isOver = !0, g.gameMgr_AL.isPlay = !1, Laya.timer.clear(this, this.showFriendRank), this.visible = !1, g.commonData.goonCount > 0 ? (g.commonData.goonCount = 0, Laya.Scene.open("views/AL_Clearing.scene", !1)) : Laya.Scene.open("views/AL_Over.scene", !1);
        }
        showOilProgress(e) {
            e > 1 ? e = 1 : e < 0 && (e = 0), this.oilProgress.mask.graphics.clear(), this.oilProgress.mask.graphics.drawPie(0, 0, 75, -90 - 360 * e, -90, "##ff0000");
        }
        showScore(e) {
            this.score.value = e.toString();
        }
        getScore(e = 10, t = new Laya.Vector2()) {
            let i = new Laya.FontClip();
            this.addChild(i), i.sheet = "1234567890+", i.value = "+" + e.toString(), i.skin = this.scoreUpTip.skin, i.scaleX = .7, i.scaleY = .7, i.pos(t.x - 70, t.y - 70), Laya.Tween.to(i, {
                y: t.y - 370,
                scaleX: .4,
                scaleY: .4,
                alpha: 0
            }, 1e3, null, Laya.Handler.create(this, () => {
                i.removeSelf();
            }));
        }
        showNoOilTip(e) {
            this.isShoWNoOil != e && (this.isShoWNoOil = e, this.isShoWNoOil ? (this.noOilTip.visible = !0, Laya.timer.loop(100, this, this.TwinkleNoOilTip)) : (this.noOilTip.visible = !1, Laya.timer.clear(this, this.TwinkleNoOilTip)));
        }
        TwinkleNoOilTip() {
            this.isTwinkleUp ? (this.TwinkleTime += .05, this.TwinkleTime > 1 && (this.TwinkleTime = 1, this.isTwinkleUp = !1)) : (this.TwinkleTime -= .05, this.TwinkleTime < .5 && (this.TwinkleTime = .5, this.isTwinkleUp = !0)), this.noOilTip.alpha = this.TwinkleTime;
        }
        showSuperSpeeedUpTip(e) {
            this.isShoWsuperSpeed != e && (this.isShoWsuperSpeed = e, this.isShoWsuperSpeed ? (this.superSpeeedUpTip.visible = !0, Laya.timer.loop(100, this, this.TwinkleSpeeedUpTip)) : (this.superSpeeedUpTip.visible = !1, Laya.timer.clear(this, this.TwinkleSpeeedUpTip)));
        }
        TwinkleSpeeedUpTip() {
            this.isSpeeedUpTwinkleUp ? (this.SpeeedUpTwinkleTime += .05, this.SpeeedUpTwinkleTime > 1 && (this.SpeeedUpTwinkleTime = 1, this.isSpeeedUpTwinkleUp = !1)) : (this.SpeeedUpTwinkleTime -= .05, this.SpeeedUpTwinkleTime < .5 && (this.SpeeedUpTwinkleTime = .5, this.isSpeeedUpTwinkleUp = !0)), this.superSpeeedUpTip.alpha = this.SpeeedUpTwinkleTime;
        }
    }
    class F extends p {
        constructor() {
            super(...arguments), this.soundSkin = "ui/common/btn_sound_", this.vibrateSkin = "ui/common/btn_vibrate_";
        }
        onAwake() {
            g.storageMgr.setPlayVibrate(e);
            super.onAwake(), g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al()
        }
        onEnable() {
            window.yad.bottom = 240;
        }
        close() {
            super.close();
            window.yad.bottom = 0;
        }
        initUI_AL() {
            let e = this.getChild("topPanel"),
                t = this.getChild("bottomui"),
                zs = this.getChild('gameList');
            this.btnSound = this.getChild("btnSound", e), this.setSound(g.storageMgr.isPlaySound()), this.btnVibrate = this.getChild("btnVibrate", e), this.setVibrate(g.storageMgr.isPlayVibrate()), this.btnPlay = this.getChild("btnPlay", t), this.btnRank = this.getChild("btnRank", t), this.btnShare = this.getChild("btnShare", t), this.btnSvrvice = this.getChild("btnSvrvice", t), this.btnCollect = this.getChild("btnCollect", t), this.btnGameL = this.getChild("btnGameL", e), this.btnGameR = this.getChild("btnGameR", e), this.btnGameL.visible = !1, this.btnGameR.visible = !1, this.btnGameL2 = this.getChild("btnGameL2", e), this.btnGameR2 = this.getChild("btnGameR2", e), this.btnGameL2 && (this.btnGameL2.visible = !1), this.btnGameR2 && (this.btnGameR2.visible = !1), this.highScore = this.getChild("highScore");
            platform.getInstance().initList(zs.getChildByName('gameList'));
            this.highScore.text = '' + g.storageMgr.getPlayHighScore();
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnVibrate, this, this.onVibrateClick), g.utils_AL.addClickEvent_AL(this.btnSound, this, this.onSoundClick), g.utils_AL.addClickEvent_AL(this.btnPlay, this, this.onPlayGameClick), g.utils_AL.addClickEvent_AL(this.btnRank, this, this.onRankClick), g.utils_AL.addClickEvent_AL(this.btnSvrvice, this, this.onSvrviceClick), g.utils_AL.addClickEvent_AL(this.btnShare, this, this.onShareClick), g.utils_AL.addClickEvent_AL(this.btnCollect, this, this.onCollectClick), g.utils_AL.addClickEvent_AL(this.btnGameL, this, this.onWxgameClick), g.utils_AL.addClickEvent_AL(this.btnGameR, this, this.onWxgameClick), g.glEvent.on("show_applite_event", this, this.onWxWakeEvent3), this.btnGameL2 && g.utils_AL.addClickEvent_AL(this.btnGameL2, this, this.onWxgameClick), this.btnGameR2 && g.utils_AL.addClickEvent_AL(this.btnGameR2, this, this.onWxgameClick);
        }
        setSound(e) {
            let t = e ? "on.png" : "off.png";
            this.btnSound.skin = this.soundSkin + t, Laya.SoundManager.muted = !e, g.storageMgr.setPlaySound(e);
        }
        setVibrate(e) {}
        onSoundClick() {
            this.setSound(!g.storageMgr.isPlaySound());
        }
        onVibrateClick() {
            this.setVibrate(!g.storageMgr.isPlayVibrate());
        }
        onPlayGameClick() {
            platform.getInstance().showInterstitial(() => {
                if (g.storageMgr.isSkinTips()) {
                    let e = {
                        target: "views/AL_Home.scene"
                    };
                    g.commonData.isNoAds = !0, g.commonData.isAdDelay && (g.commonData.isNoAds = !1), Laya.Scene.open("views/AL_FreeSkin.scene", !1, e, Laya.Handler.create(this, e => {
                        this.close();
                    }));
                } else {
                    this.close(), g.glEvent.event("play_game_event", {
                        isPlay: !0
                    });
                }
            });
        }
        onRankClick() {}
        onSvrviceClick() {}
        onShareClick() {}
        onWxgameClick(e) {}
        onCollectClick() {
            Laya.Scene.open("views/AL_Collect.scene", !1);
        }
        onWxWakeEvent3() {}
        setWxapp(e) {}
    }
    class V extends Laya.Script {
        constructor() {
            super(), this.needClearTimer = !1;
        }
        onAwake() {
            this.initList_AL();
        }
        onEnable() {}
        initList_AL() {
            this.list.array = [], this.list.renderHandler = new Laya.Handler(this, this.onRender), this.list.mouseHandler = new Laya.Handler(this, this.onMouseHandler), this.list.hScrollBarSkin = "";
            let e = g.commonData.wxappList[0];
            !e || e.length < 1 ? this.panel.visible = !1 : (this.panel.visible = !0, this.adData = e, this.list.array = e, Laya.timer.once(500, this, this.moveList_AL));
        }
        moveList_AL() {
            this.needClearTimer = !1, this.list.tweenTo(4, 12e3, new Laya.Handler(this, this.moveList1_AL));
        }
        moveList1_AL() {
            this.list.tweenTo(0, 12e3, new Laya.Handler(this, this.moveList_AL));
        }
        onRender(e, t) {
            e.getChildAt(0).skin = this.adData[t].app_img;
        }
        onMouseHandler(e, t) {
            if ("mouseup" == e.type) {
                var i = this.adData[t];
                this.btnSkipMiniGame_AL(i.app_id);
            }
            this.needClearTimer && Laya.timer.clear(this, this.moveList_AL), this.needClearTimer = !0, this.list.startIndex < 3 ? Laya.timer.once(200, this, this.moveList_AL) : Laya.timer.once(200, this, this.moveList1_AL);
        }
        btnSkipMiniGame_AL(e) {
            g.wxMgr.openOtherApp(e, 0);
        }
        onDisable() {}
    }
    class O extends p {
        constructor() {
            super(), this.intType = 1e3, this.numType = 1e3, this.strType = "hello laya", this.boolType = !0;
        }
        onEnable() {}
        onDisable() {}
        lagargare() {
            this.name;
            var e = 10,
                t = 2,
                i = 0;
            i = e + t, console.log("加:        " + i), i = e - t, console.log("减: " + i), i = e * t, console.log("乘:    " + i), i = e / t, console.log("除:   " + i), i = e % t, console.log("余数:   " + i), e++, console.log("num1 自增运算: " + e), t--, console.log("num2 自减运算: " + t);
        }
        _sizeChanged() {
            var e, t = "a b c";
            for (e in t) console.log(t[e]);
            var i, a = 0;
            a <= 0 || a > 12 ? (a = Number.NaN, console.log("月份是：" + a)) : console.log("输入月份数值正确。"), i = ["Google", "Runoob", "Taobao"], console.log(i[0]), console.log(i[1]);
            var s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
            s = [10, "Runoob"];
            console.log(s[0]), console.log(s[1]);
            var n;
            n = i, console.log("site1 :" + n.site1), console.log("site2 :" + n.site2);
        }
    }
    class U extends p {
        constructor() {
            super(...arguments), this._loadCount = 1, this._loadNum = 0, this._isLoadFinish = !1;
        }
        onAwake() {
            super.onAwake(), Laya.Browser.onWeiXin ? g.utils_AL.loadSubpackage("LayaScene_Models", this, function(e, t) {
                t && this.loadRes();
            }) : this.loadRes();
        }
        onOpened() {
            g.configMgr_AL.init(), g.soundMgr.init(), g.wxMgr.init(), g.adMgr.init(), g.utils_AL.loadSubpackage("Music", this, function(e, t) {});
        }
        initUI_AL() {
            let e = this.getChildByName("viewLoad");
            this.lblPres = e.getChildByName("lblPres"), this.barPres = e.getChildByName("barPres");
        }
        initEvent() {
            g.glEvent.on("load_finish_event", this, this.onLoadFinish);
        }
        onLoadFinish(e) {
            this._loadNum++, this._loadNum >= this._loadCount && (this.barPres.value = 0.99, this.lblPres.text = "99%", this.loadFinished = !0, this.onUseSDK());
        }
        onUseSDK() {
            Laya.loader.load('cnf.json', Laya.Handler.create(this, (res) => {
                platform.getInstance().startup("Crash-Landing-3d", res["id"], () => {
                    var yad = new Laya.Image();
                    yad.scale(0.8, 0.8);
                    yad.skin = "ui/common/yad.png";
                    yad.centerX = 0;
                    yad.bottom = 0;
                    yad.zOrder = 1e3;
                    yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                        platform.getInstance().navigate("GAME", "LOGO")
                    })
                    Laya.stage.addChild(yad);
                    window.yad = yad;
                    this.barPres.value = 1;
                    this.lblPres.text = "100%";
                    this.loadGameScene()
                })
            }))
        }
        onLoading(e) {
            let t = (this._loadNum + e) / (this._loadCount + 1);
            this.barPres.value = 0.99 * t, this.lblPres.text = Math.floor(99 * t) + "%";
        }
        loadRes() {
            let e = [{
                url: "res/LayaScene_SampleScene/Conventional/SampleScene.ls",
                clas: Laya.Scene,
                priority: 1
            }, {
                url: "res/LayaScene_Models/Conventional/Models.lh",
                clas: Laya.Sprite3D,
                priority: 2
            }, {
                url: "res/Datas/airplaneRoadData.json",
                clas: x,
                priority: 3
            }];
            Laya.loader.create(e, Laya.Handler.create(this, this.onLoadFinish, [{
                target: "3dres"
            }], !1), Laya.Handler.create(this, this.onLoading, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, e => {
                console.error("load 3dres error:", e);
            });
        }
        loadGameScene() {
            Laya.Browser.onWeiXin ? this.loadFinished && this.openGameScene() : this.openGameScene();
        }
        openGameScene() {
            Laya.Scene.open("views/AL_Game.scene", !1, Laya.Handler.create(this, e => {
                Laya.Scene.open("views/AL_Home.scene", !1, Laya.Handler.create(this, e => {
                    this.close();
                }));
            }));
        }
    }
    class N extends p {
        constructor() {
            super(...arguments), this.overTime = 10;
        }
        onAwake() {
            super.onAwake(), this.initProcess();
        }
        onOpened() {
            this.isStartTimer = !0;
        }
        onWxWakeEvent() {
            this.isStartTimer = !0;
        }
        onWxWakeEvent2() {
            let e = g.wxMgr.getWxappList(0);
            g.commonData.isNoAds = !0, e.length > 0 && Laya.Scene.open("views/AL_Wxapp.scene", !1, Laya.Handler.create(this, e => {
                this.close();
            }));
        }
        onWxSleepEvent() {
            this.isStartTimer = !1;
        }
        initData_AL() {
            g.adMgr.getBannerCount_AL() < 2 && g.adMgr.getBannerAd_AL(), g.commonData.existVideoAd || g.adMgr.airplane_loadVideoAd(), g.commonData.existInterAd || g.adMgr.airplane_getInterstitialAd(), Laya.timer.loop(1e3, this, this.onTimerStart);
        }
        initUI_AL() {
            window.wx && window.sharedCanvas && (window.sharedCanvas.width = 750, window.sharedCanvas.height = 92);
            let e = this.getChild("goonTime");
            this.lbTimer = this.getChild("lbTimer", e), this.lbTimer.text = this.overTime.toString(), this.btnShare = this.getChild("btnShare"), this.btnVideo = this.getChild("btnVideo"), this.btnShare.visible = false, this.btnVideo.visible = true
            let t = this.getChild("bottomPanel");
            this.btnSkip = this.getChild("btnSkip", t), this.loadBar = this.getChild("bar1", e);
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnShare, this, this.onShareClick), g.utils_AL.addClickEvent_AL(this.btnVideo, this, this.onVideoClick), g.utils_AL.addClickEvent_AL(this.btnSkip, this, this.onSkipClick);
        }
        onShareClick() {}
        onVideoClick() {
            this.isStartTimer = !1;
            platform.getInstance().showReward(() => {
                this.close(), this.goonGame()
            }, () => {
                this.isStartTimer = true;
            })
        }
        onSkipClick() {
            g.commonData.existInterAd && g.adMgr.airplane_showInterstitialAd(), g.soundMgr.play("button"), this.closeView();
        }
        closeView() {
            g.adMgr.hideBannerAd_Al(), this.spr.destroy(), this.loadBar.destroy(), Laya.Scene.open("views/AL_Clearing.scene", !1, Laya.Handler.create(this, e => {
                this.close();
            }));
        }
        onTimerStart() {
            this.overTime > 0 ? this.isStartTimer && (this.overTime -= 1, this.lbTimer.text = this.overTime.toString()) : (Laya.timer.clear(this, this.onTimerStart), this.onSkipClick());
        }
        onShareBackEvent(e) {}
        onVideoCloseEvent(e) {}
        goonGame() {
            g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), g.glEvent.event("goon_game_event");
        }
        initProcess() {
            this.spr = new Laya.Sprite(), this.spr.pos(this.loadBar.pivotX, this.loadBar.pivotY), this.loadBar.mask = this.spr, this.radius = Math.max(this.loadBar.width, this.loadBar.height), this.angle = 0, this.drawDelay = 0, Laya.timer.frameLoop(50, this, this.onFrame);
        }
        onFrame() {
            !this.isStartTimer || Laya.timer.delta > 800 || (this.drawDelay += 50 * Laya.timer.delta, this.drawDelay > 80 && (this.drawBar(), this.drawDelay = 0));
        }
        drawBar() {
            this.angle += .036 * this.drawDelay, this.spr.graphics.clear(), this.spr.graphics.drawPie(0, 0, 150, -90, this.angle - 90, "#00ffff");
        }
    }
    class W extends Laya.Box {
        constructor() {
            super(), this.size(this.width, this.height), this.initUI();
        }
        initUI() {
            let e = Laya.loader.getRes("prefab/rankItem.json"),
                t = Laya.Pool.getItemByCreateFun("rankItem", e.create, e);
            this.imgBg = t.getChildByName("bg"), this.lblName = t.getChildByName("lblName"), this.lblScore = t.getChildByName("lblScore"), this.lblRank = t.getChildByName("lblRank"), this.imgAvatar = t.getChildByName("avatar"), this.addChild(t);
        }
        setRankItem_AL(e) {
            let t = e.user_nickname.length > 6 ? e.user_nickname.substr(0, 8) : e.user_nickname;
            this.lblName.text = "" != t ? t : "神秘玩家";
            let i = 28,
                a = e.rank;
            0 == e.rank && (i = 24, a = "未上榜"), this.lblRank.fontSize = i, this.lblRank.text = a, this.lblScore.text = e.score;
            let s = "" != e.avatar ? e.avatar : "ui/rank/avater_default.png";
            this.imgBg.loadImage(e.bgUrl), this.imgAvatar.loadImage(s);
        }
    }
    class X extends p {
        constructor() {
            super(), this.rankBgList = ["ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png", "ui/rank/bg_rank_1.png"], this.worldList = null, this.rankMe = null, this.btnBack = null, this.tabRank = null, this.friendList = null, this.existWorldRank = !0, this.worldLoading = 0;
        }
        onAwake() {
            super.onAwake(), g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al(), this.onRankFriend(), this.pageWorldRank = 1, this.isLoadedWorldRank = !1, g.wxMgr.worldRank(1), Laya.loader.load("prefab/rankItem.json", Laya.Handler.create(this, this.initList), null, Laya.Loader.PREFAB);
        }
        initUI_AL() {
            let e = this.getChild("topPanel");
            this.btnBack = this.getChild("btnBack", e), this.tabRank = this.getChild("tabRank"), this.world = this.getChild("world"), this.worldList = this.getChild("list", this.world), this.rankMe = this.getChild("rankMe", this.world), this.friend = this.getChild("friend"), this.friendList = this.getChild("list", this.friend), this.touchArea = this.getChild("touchArea", this.friend), this.touchArea.alpha = 0;
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnBack, this, this.onCloseClick, 12), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick), g.glEvent.on("draw_world_rank_event", this, this.onDrawWorldrankEvent);
        }
        onClosed() {
            g.glEvent.off("draw_world_rank_event", this, this.onDrawWorldrankEvent), Laya.loader.clearRes("prefab/rankItem.json"), this.clear();
        }
        initRankEvent(e) {
            if (!e) return this.touchArea.offAllCaller(this), this.touchArea.visible = !1, void(this.friendList.visible = !1);
            this.touchArea.visible = !0, this.friendList.visible = !0;
            let t = 0,
                i = 0,
                a = 0,
                s = 0,
                n = g.commonData.wxsysInfo.pixelRatio ? g.commonData.wxsysInfo.pixelRatio : 1;
            Laya.Browser.onWeiXin && (this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                e.stopPropagation(), a = 0, i = e.nativeEvent.timeStamp, t = e.nativeEvent.changedTouches[0].clientY, g.wxMgr.onFrientMouseEvent({
                    cmd: "touch_start"
                });
            }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function(e) {
                e.stopPropagation(), a = e.nativeEvent.changedTouches[0].clientY - t, g.wxMgr.onFrientMouseEvent({
                    cmd: "touch_move",
                    deltaY: a * n
                });
            }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function(e) {
                e.stopPropagation(), s = a / (e.nativeEvent.timeStamp - i), g.wxMgr.onFrientMouseEvent({
                    cmd: "touch_end",
                    speed: s
                });
            }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function(e) {
                e.stopPropagation(), s = a / (e.nativeEvent.timeStamp - i), g.wxMgr.onFrientMouseEvent({
                    cmd: "touch_cancel",
                    speed: s
                });
            }));
        }
        showList(e) {
            let t = e ? 1 : 0;
            this.worldList.alpha = t, this.rankMe.alpha = t;
        }
        initList() {
            let e = this.worldList;
            e.itemRender = W, e.cacheContent = !1, e.vScrollBarSkin = "", e.selectEnable = !1, e.selectHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem), this.worldLoading++;
        }
        refreshList() {
            if (this.worldLoading >= 2) {
                if (this.worldList.refresh(), 0 == this.rankMe.numChildren) {
                    let e = new W();
                    this.rankMe.addChild(e), e.setRankItem_AL(this.userRank);
                }
                Laya.timer.clear(this, this.refreshList);
            }
        }
        onRankClick(e) {
            1 == e ? this.onRankWorld() : this.onRankFriend();
        }
        onRankFriend() {
            if (this.world.visible = !1, this.friend.visible = !0, this.friendList.visible = !0, this.showList(!1), this.initRankEvent(!0), g.wxMgr.showFriendRank(!0), window.wx && window.sharedCanvas) {
                var e = this.friendList.width,
                    t = this.friendList.height;
                window.sharedCanvas.width = e, window.sharedCanvas.height = t;
            }
        }
        onRankWorld() {
            this.world.visible = !0, this.friend.visible = !1, this.friendList.visible = !1, this.showList(!0), this.initRankEvent(!1), g.wxMgr.showFriendRank(!1), Laya.timer.loop(100, this, this.refreshList);
        }
        onDrawWorldrankEvent(e) {
            this.worldLoading++;
            let t = e.page,
                i = {},
                a = [];
            if (e.data instanceof Array) a = e.data, i.data = {
                list: a,
                page: t
            };
            else {
                if (!e.data) return void console.error("rank data is null.");
                i = e, a = e.data.list, e.data.userInfo.userId = e.data.userInfo.id, e.data.userInfo.bgUrl = this.rankBgList[2], delete e.data.userInfo.id, this.userRank = e.data.userInfo;
            }
            if (!a) return void(this.existWorldRank = !1);
            this.existWorldRank = a.length >= 20;
            let s = i.data.list.length;
            for (let e = 0; e < s; ++e) {
                i.data.list[e].userId = i.data.list[e].id;
                let t = (i.data.list[e].rank - 1) % 2;
                i.data.list[e].bgUrl = this.rankBgList[t], delete i.data.list[e].id;
            }
            this.rankData || (this.rankData = {}), this.pageWorldRank = t, this.rankData[t] = i;
            let n = [];
            for (let e in this.rankData) n.push.apply(n, this.rankData[e].data.list);
            this.worldList.updateArray(n), this.isLoadedWorldRank = !0;
        }
        updateItem(e, t) {
            e.setRankItem_AL(e.dataSource);
            let i = this.pageWorldRank;
            if (t - 6 == 0 && i < 6);
            else if (t + 6 == this.worldList.length) {
                i += 1, this.rankData[i] || this.isLoadedWorldRank && this.existWorldRank;
            }
        }
        onSelect(e) {}
        onCloseClick() {
            g.commonData.isNoAds = !1, Laya.Scene.open("views/AL_Home.scene", !1, Laya.Handler.create(this, e => {
                this.close();
            }));
        }
        clear() {
            g.wxMgr.showFriendRank(!1), this.touchArea.offAllCaller(this), this.worldList.array = [], this.worldList.destroy();
        }
    }
    class G extends Laya.Script {
        constructor() {
            super(), this.repeatX = 0, this.appCount = -1;
        }
        onStart() {
            g.commonData.isNoAds = !0, g.wxAd.hideBannerAd_Al(), this.initUI(), this.initEvent();
        }
        initUI() {
            this.view = this.owner;
            let e = this.view;
            e.height = Laya.stage.height;
            let t = g.screen.offsetTop,
                i = g.screen.realPxRatio,
                a = g.commonData.wxsysInfo,
                s = 0;
            for (let n = 0; n < e._children.length; n++) {
                let o = e._children[n],
                    r = o.y + t;
                "topPanel" == o.name && (r = a.statusBarHeight >= 30 && g.screen.allScreen ? a.statusBarHeight * i : 30), o.y = r, "bottomPanel" != o.name && "bottomui" != o.name || (s = 60, o.bottom = s);
            }
        }
        initEvent() {
            g.utils_AL.addClickEvent_AL(this.btnPlay, this, this.onPlayGameClick, 14), g.utils_AL.addClickEvent_AL(this.btnBack, this, this.onBackClick, 14);
        }
        initData() {
            y.appWidth = this.appWidth, y.appHeight = this.appHeight, y.appPrefab = this.appPrefab, this.data = g.wxMgr.getWxappList(this.category), this.appCount = this.data.length;
        }
        initList() {
            let e = this.list;
            null != e && (e.itemRender = y, e.vScrollBarSkin = "", e.selectEnable = !0, e.selectHandler = new Laya.Handler(this, this.onSelect), e.renderHandler = new Laya.Handler(this, this.updateItem), this.repeatX = e.repeatX, this.appCount > 0 && (e.array = this.data, g.commonData.isNoAds = !0, g.adMgr.hideBannerAd_Al()));
        }
        updateItem(e, t) {
            e.setItemInfo(e.dataSource);
        }
        onSelect(e) {
            if (!(e < 0)) {
                var t = this.list.getItem(e);
                null != t && g.wxMgr.openOtherApp(t.app_id, t.category), this.list.selectedIndex = -1;
            }
        }
        onPlayGameClick() {
            platform.getInstance().showInterstitial(() => {
                if (this.view.close(), g.glEvent.event("init_game_event", {
                        isPlay: !0
                    }), g.storageMgr.isSkinTips()) {
                    g.commonData.isNoAds = !1, g.adMgr.hideBannerAd_Al();
                    let e = {
                        target: "views/AL_Home.scene"
                    };
                    Laya.Scene.open("views/AL_FreeSkin.scene", !1, e, Laya.Handler.create(this, e => {}));
                } else g.glEvent.event("play_game_event", {
                    isPlay: !0
                });
            });
        }
        onBackClick() {
            platform.getInstance().showInterstitial(() => {
                Laya.Scene.open("views/AL_Home.scene", !1, Laya.Handler.create(this, e => {
                    this.view.close(), g.glEvent.event("init_game_event", {
                        isPlay: !0
                    })
                }));
            });
        }
    }
    class H {
        constructor() {}
        static init() {
            var a = Laya.ClassUtils.regClass;
            a("scripts/uiComp/bu_AL.ts", e), a("scripts/views/interview.ts", t), a("scripts/views/ahrar.ts", i), a("scripts/views/ergsw.ts", m), a("scripts/views/rharharh.ts", u), a("scripts/views/ClearingView_AL.ts", _), a("scripts/uiComp/AppLite.ts", L), a("scripts/uiComp/AppBanner.ts", f), a("scripts/views/CollectView_AL.ts", w), a("scripts/views/AL_Faefae.ts", v), a("scripts/views/SkinView_Al.ts", b), a("scripts/views/GameView_AL.ts", I), a("scripts/views/HomeView_AL.ts", F), a("scripts/uiComp/WxgameList.ts", V), a("scripts/views/AL_Lee.ts", O), a("scripts/views/LoginView_Al.ts", U), a("scripts/views/OverView_AL.ts", N), a("scripts/views/RankView_AL.ts", X), a("scripts/uiComp/Wxapp.ts", G);
        }
    }
    H.width = 750, H.height = 1334, H.scaleMode = "showall", H.screenMode = "none", H.alignV = "middle", H.alignH = "center", H.startScene = "views/AL_Login.scene", H.sceneRoot = "", H.debug = !1, H.stat = !1, H.physicsDebug = !1, H.exportSceneToJson = !0, H.init();
    new class {
        constructor() {
            let e = Laya.Browser.height / Laya.Browser.width;
            g.screen.realPxRatio = t / Laya.Browser.clientHeight, g.screen.allScreen = e > 17 / 9, g.screen.offsetTop = (t - H.height) / 2, window.Laya3D ? Laya3D.init(H.width, H.height) : Laya.init(H.width, H.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.stage.scaleMode = "showall", Laya.stage.alignV = H.alignV, Laya.stage.alignH = H.alignH;
            if (typeof loadRuntime !== 'undefined') {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            if (typeof getAdapterInfo !== "undefined") {
                var stage = Laya.stage;
                var info = getAdapterInfo({
                    width: H.width,
                    height: H.height,
                    scaleMode: Laya.Stage.SCALE_FIXED_WIDTH
                });
                stage.designWidth = info.w;
                stage.designHeight = info.h;
                stage.width = info.rw;
                stage.height = info.rh;
                stage.scale(info.scaleX, info.scaleY);
            }
            Laya.stage.useRetinalCanvas = !0, Laya.MouseManager.multiTouchEnabled = !0, Laya.URL.exportSceneToJson = H.exportSceneToJson, (H.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), H.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), H.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            Laya.stage.on(Laya.Event.RESIZE, this, this.resizeView);
            g.storageMgr.setSkinTips(true);
        }
        resizeView() {
            Laya.stage.pivot(H.width / 2, H.height / 2);
            Laya.stage.pos(Laya.Browser.width / 2, Laya.Browser.height / 2);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            H.startScene && Laya.Scene.open(H.startScene);
        }
    }();
}();