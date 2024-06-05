var s, u, G, A, Q, z, w, H, x, X, d, T, _, B, c, $, M, m, D, k, q, g, o, E, p, l, n, f, i, U, O, y, L, j, t, R = this && this.__extends || (s = function(u, G) {
    return (s = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(u, G) {
            u.__proto__ = G;
        } || function(u, G) {
            for (var A in G) G.hasOwnProperty(A) && (u[A] = G[A]);
        })(u, G);
}, function(u, G) {
    function A() {
        this.constructor = u;
    }
    s(u, G), u.prototype = null === G ? Object.create(G) : (A.prototype = G.prototype, new A());
});
(u = bu || (bu = {})).StatEventNames = {
        Share: "点击分享",
        Navigation: "点击游卡广告",
        Bootup: "启动",
        Duration: "单次时长",
        NavigationConfirm: "点击广告确定"
    }, (A = G = u.LocationID || (u.LocationID = {}))[A.More = 1] = "More", A[A.Vip = 2] = "Vip", u.LocationNames = [], u.LocationNames[G.More] = "更多游戏", u.LocationNames[G.Vip] = "精彩推荐", Q = bu || (bu = {}), (z = Q.utils || (Q.utils = {})).adaptStatID = function(u, G) {
        if (1e3 == G) {
            if (1 == u) return 1002;
            if (2 == u) return 1001;
        }
        return G + u;
    }, z.obj2query = function(u) {
        if (!u) return "";
        var G = [];
        for (var A in u) G.push(A + "=" + u[A]);
        return G.join("&");
    }, z.compareVersion = function(u, G) {
        for (var A = u.split("."), s = G.split("."), Q = Math.max(A.length, s.length); A.length < Q;) A.push("0");
        for (; s.length < Q;) s.push("0");
        for (var z = 0; z < Q; z++) {
            var H = parseInt(A[z]),
                x = parseInt(s[z]);
            if (x < H) return 1;
            if (H < x) return -1;
        }
        return 0;
    },
    function(x) {
        x.POST = function(u, G, A, s, Q, z) {
            void 0 === z && (z = 0), x.request ? X().init(u, "post", JSON.stringify(G), A, s, Q, z) : s && s.run();
        }, x.GET = function(u, G, A, s, Q, z) {
            if (void 0 === z && (z = 0), x.request) {
                var H = w.utils.obj2query(G);
                H && (u += "?" + H), X().init(u, "get", null, A, s, Q, z);
            } else s && s.run();
        };
        var G = [];

        function X() {
            return 0 == G.length ? new u() : G.pop();
        }
        var u = function() {
            function u() {}
            return u.prototype.init = function(u, G, A, s, Q, z, H) {
                void 0 === H && (H = 0), this.method = G, this.url = u, this.params = A, this.success = s, this.fail = Q, this.header = z, this.retryCnt = 0, this.maxRetryCnt = H, this.request();
            }, u.prototype.request = function() {
                this.requestTime = Laya.Browser.now(), x.request(this.method, this.url, this.params, Laya.Handler.create(this, this.onSuccess), Laya.Handler.create(this, this.onFail), this.header);
            }, u.prototype.retry = function() {
                this.retryCnt++, this.request();
            }, u.prototype.onSuccess = function(u) {
                var G = this.success;
                this.recover(), G && G.runWith(u);
            }, u.prototype.onFail = function() {
                if (this.retryCnt < this.maxRetryCnt) {
                    var u = this.calculateDelay();
                    Laya.timer.once(u, this, this.retry);
                } else {
                    var G = this.fail;
                    this.recover(), G && G.run();
                }
            }, u.prototype.recover = function() {
                this.clear(), G.push(this);
            }, u.prototype.clear = function() {
                this.method = null, this.url = null, this.params = null, this.success = null, this.fail = null, this.header = null, this.retryCnt = 0, this.maxRetryCnt = 0;
            }, u.prototype.calculateDelay = function() {
                var u = Date.now(),
                    G = 1e3 * Math.pow(2, this.retryCnt) - u + this.requestTime;
                return G < 0 && (G = 0), 5e3 < G && (G = 5e3), G;
            }, u;
        }();
    }((w = bu || (bu = {})).http || (w.http = {})), (x = H || (H = {}))[x.None = 0] = "None", x[x.Reddot = 1] = "Reddot", X = bu || (bu = {}), d = function() {
        function Q() {
            this.inited = !1, this.booted = !1, this.loaded = !1, this.showTime = 0, this.customEvents = [];
        }
        return Q.prototype.init = function(u, G, A, s, Q) {
            this.inited || (this.userName = u, this.userID = G, this.gameIDName = A + "-" + s, this.gameID = A, this.gameName = s, this.appVersion = Q, this.initParams(), this.sendBootupEvent());
        }, Q.prototype.initUserInfo = function(u, G) {
            this.userName = u, this.userID = G, this.booted && this.loaded && this.sendInitLogin();
        }, Q.prototype.sendLoaded = function() {
            this.loaded = !0, this.booted && this.sendInitLogin();
        }, Q.prototype.sendBootupEvent = function() {
            this.bootEvent = this.bootEvent || this.getBootupEvent(), this.sendCustomEvent(this.bootEvent, !0, Laya.Handler.create(this, this.onBootup), Laya.Handler.create(this, this.onBootupFail));
        }, Q.prototype.getBootupEvent = function() {
            var u = this.getInitParams();
            return u.event_id = "event1002", u.event_name = X.StatEventNames.Bootup, u;
        }, Q.prototype.onBootup = function() {
            this.booted = !0, this.loaded && this.sendInitLogin();
        }, Q.prototype.onBootupFail = function() {
            Laya && Laya.timer && Laya.timer.once ? Laya.timer.once(3e3, this, this.sendBootupEvent) : setTimeout(this.sendBootupEvent.bind(this), 3e3);
        }, Q.prototype.onInited = function(u) {
            this.inited = !0, console.log("yoka stat inited"), this.checkCustomEvents();
        }, Q.prototype.onInitFail = function() {
            Laya && Laya.timer && Laya.timer.once ? Laya.timer.once(3e3, this, this.sendInitLogin) : setTimeout(this.sendInitLogin.bind(this), 3e3);
        }, Q.prototype.sendInitLogin = function() {
            this.userName && this.userID && (this.initLoginEvent = this.initLoginEvent || this.getLoginEvent(), this.sendEvent([this.initLoginEvent], Laya.Handler.create(this, this.onInited), Laya.Handler.create(this, this.onInitFail)));
        }, Q.prototype.checkCustomEvents = function() {
            this.customEvents && 0 < this.customEvents.length && this.sendEvent(this.customEvents);
        }, Q.prototype.shareStat = function(u, G) {
            this.addYokaStat(1e3, X.StatEventNames.Share, {
                shareid: G,
                sharepid: u
            });
        }, Q.prototype.navigationStat = function(u, G, A, s, Q, z, H) {
            var x = {
                location_id: u,
                ad_page_id: G,
                advid: A,
                adid: s
            };
            H && (x.plat_id = H), Q && (x.order_num = Q), z && (x.effect_type = z), this.addYokaStat(1001, X.StatEventNames.Navigation, x);
        }, Q.prototype.navigationConfirmStat = function(u, G, A, s, Q, z, H) {
            var x = {
                location_id: u,
                ad_page_id: G,
                advid: A,
                adid: s
            };
            H && (x.plat_id = H), Q && (x.order_num = Q), z && (x.effect_type = z), this.addYokaStat(1004, X.StatEventNames.NavigationConfirm, x);
        }, Q.prototype.sendAdShowTimeEvents = function(G, u) {
            var A = this;
            if (u && !(u.length <= 0)) {
                var s, Q = [],
                    z = Math.floor(Date.now() / 1e3);
                u.forEach(function(u) {
                    s = {
                        userName: A.userName,
                        user_id: A.userID,
                        user_type: A.userType,
                        device_model: A.deviceModel,
                        game_id: A.gameID,
                        game_name: A.gameName,
                        game_id_name: A.gameIDName,
                        os_version: A.osVersion,
                        app_version: A.appVersion,
                        device_id: A.deviceID,
                        event_id: "101",
                        event_name: "广告展示",
                        ad_page_id: u.adPageId,
                        advid: u.advid,
                        adid: u.adid,
                        order_num: u.order,
                        effect_type: u.effectType,
                        duration: u.duration,
                        net_type: A.getNetType()
                    }, A.osType && (s.os_type = A.osType), A.channel && (s.channel = A.channel), A.plan && (s.plan = A.plan), G && (s.plat_id = G), Q.push({
                        id: 4007,
                        label: "mini_game_platform_advertise",
                        start_time: z,
                        parameters: s
                    });
                }), this.sendEvent(Q);
            }
        }, Q.prototype.addYokaStat = function(u, G, A) {
            var s = {
                userName: this.userName,
                user_id: this.userID,
                user_type: this.userType,
                device_model: this.deviceModel,
                game_id: this.gameID,
                game_name: this.gameName,
                game_id_name: this.gameIDName,
                os_version: this.osVersion,
                app_version: this.appVersion,
                event_id: "event" + u,
                event_name: G,
                net_type: this.getNetType()
            };
            if (A)
                for (var Q in A) "number" != typeof A[Q] && "string" != typeof A[Q] || (s[Q] = A[Q]);
            this.sendCustomEvent(s);
        }, Q.prototype.getPostData = function(u) {
            if (u && 0 < u.length) return {
                app_id: Q.Yoka_App_Id,
                is_server: !1,
                events: u
            };
        }, Q.prototype.onShow = function() {
            var u = this.getLoginEvent();
            u && this.sendEvent([u]), this.showTime = Date.now();
        }, Q.prototype.onHide = function() {
            0 < this.showTime && this.addYokaStat(1003, X.StatEventNames.Duration, {
                duration: Date.now() - this.showTime
            });
        }, Q.prototype.getNetType = function() {
            return this.netType() || "4g";
        }, Q.prototype.getLoginEvent = function() {
            var u = this.getInitParams(),
                G = {
                    id: 4002,
                    label: "mini_game_platform_login",
                    start_time: Math.floor(Date.now() / 1e3),
                    parameters: u
                };
            return this.osType && (G.os_type = this.osType), this.channel && (G.channel = this.channel), this.plan && (u.plan = this.plan), G;
        }, Q.prototype.getInitParams = function() {
            var u = {
                user_type: this.userType,
                device_model: this.deviceModel,
                game_id: this.gameID,
                game_name: this.gameName,
                game_id_name: this.gameIDName,
                os_version: this.osVersion,
                app_version: this.appVersion,
                device_id: this.deviceID,
                login_way: this.loginWay,
                net_type: this.getNetType()
            };
            return this.userID && (u.user_id = this.userID), this.userName && (u.userName = this.userName), this.locationID && (u.location_id = this.locationID), this.subgameid && (u.subgameid = this.subgameid), this.subuid && (u.subuid = this.subuid), this.ad_page_id && (u.ad_page_id = this.ad_page_id), this.advid && (u.advid = this.advid), this.adid && (u.adid = this.adid), this.sharepid && (u.sharepid = this.sharepid), this.shareid && (u.shareid = this.shareid), this.shareuid && (u.shareuid = this.shareuid), u;
        }, Q.prototype.sendCustomEvent = function(u, G, A, s) {
            void 0 === G && (G = !1);
            var Q = {
                id: 4005,
                label: "mini_game_platform_times_event",
                start_time: Math.floor(Date.now() / 1e3),
                parameters: u
            };
            this.osType && (Q.os_type = this.osType), this.channel && (Q.channel = this.channel), this.plan && (u.plan = this.plan), this.inited || G ? this.sendEvent([Q], A, s) : this.customEvents.push(Q);
        }, Q.prototype.sendEvent = function(u, G, A) {
            if (console.log("[send event]", u), X.shouldSendStat) {
                var s = this.getPostData(u);
                s && X.http.POST(Q.Yoka_Url, s, G, A);
            }
        }, Q.prototype.getRandom = function() {
            for (var u, G, A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], s = 10; 1 < s; s--) G = A[u = Math.floor(10 * Math.random())], A[u] = A[s - 1], A[s - 1] = G;
            for (s = G = 0; s < 5; s++) G = 10 * G + A[s];
            return G + "" + Date.now();
        }, Q.Yoka_App_Id = "301_0", Q.Yoka_Url = "", Q.NetTypeKey = "zmntdata", Q.UUIDKey = "zmuuiddata", Q;
    }(), X.YokaStat = d, T = bu || (bu = {}), _ = function() {
        function u(u, G) {
            this.share = u, this.shareConfig = G;
        }
        return u.prototype.init = function(u, G) {
            0 == T.system.runtimePlatform && this.shareConfig.init(u, G);
        }, Object.defineProperty(u.prototype, "UID", {
            set: function(u) {
                this.shareConfig.UID = u;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.shareTipsRes = function(u, G, A) {
            void 0 === A && (A = 1);
            var s = T.MiniShare;
            s && (s.shareTipsBg = u, s.shareTipsBtn = G, s.shareBtnState = A);
        }, u.prototype.shareStatus = function(u) {
            return this.shareConfig.shareStatus(u);
        }, u.prototype.shareMessage = function(u, G, A, s, Q, z) {
            var H;
            (H = this.rewardShareEnable() ? this.shareConfig.getSharePointCfg(u, Q, z, G) : this.shareConfig.getDefaultConfig(u, Q, z, G)).query.shareOpenid = T.api.OpenID ? T.api.OpenID : T.login.openID, T.statistics.shareStat(H.sharepid, H.shareid), this.share.shareAppMessage(H.title, H.imageUrl, H.query, A, s);
        }, u.prototype.shareScreenShot = function(u, G, A, s, Q, z, H) {
            var x = this.shareConfig.getSharePointCfg(u, G, "", Q);
            x.query.shareOpenid = T.api.OpenID ? T.api.OpenID : T.login.openID, T.statistics.shareStat(x.sharepid, T.ShareConfig.DefaultShareID), this.share.shareScreenShot(A, s, G, x.query, z, H);
        }, u.prototype.defaultShareConfig = function(u, G) {
            this.shareConfig.defaultShareConfig(u, G);
        }, u.prototype.rewardShareEnable = function() {
            return this.share.rewardShareEnable();
        }, u.prototype.zmGameTriggerState = function(u) {
            return this.share.zmGameTriggerState(u);
        }, u;
    }(), T.YokaShare = _, (c = B || (B = {})).CustomAdHost = "", c.HOST = "", c.INTERVAL_TIME = 5, c.getPages = function() {
        return {
            StartView: 3,
            ReviveView: 4,
            SummaryView: 5
        };
    }, c.PendantShakeAnglePerMs = .02, c.PendantShakeAngleLimit = 25, c.ShakeAngleLimit = 25, c.ShakeBreakTime = 2e3, c.ShakeTurn = 4, c.ShakeAnglePerMs = .15, c.BlinkPerMs = .005, c.BlinkBreakTime = 2e3, c.BlinkMinAlpha = .1, c.BlinkTurn = 3, c.AdSwitchTime = 15e3, c.AdRollPerMs = .05, (M = $ || ($ = {}))[M.PNG = 0] = "PNG", M[M.JPG = 1] = "JPG", M[M.GIF = 2] = "GIF", (D = m || (m = {}))[D.Jump = 1] = "Jump", D[D.JumpTwice = 2] = "JumpTwice", D[D.QRCode = 3] = "QRCode", D[D.Link = 4] = "Link", (q = k || (k = {}))[q.Normal = 1] = "Normal", q[q.Center = 2] = "Center", q[q.LRTB = 3] = "LRTB", q[q.None = 4] = "None", (o = g || (g = {}))[o.Normal = 0] = "Normal", o[o.Shake = 1] = "Shake", o[o.Blink = 2] = "Blink", (p = E || (E = {}))[p.Single = 0] = "Single", p[p.Menu = 4] = "Menu", p[p.Guess = 5] = "Guess", p[p.PlayGame = 6] = "PlayGame", p[p.More = 7] = "More", p[p.BannerGuess = 8] = "BannerGuess", p[p.Box = 9] = "Box", p[p.Backup = 10] = "Backup", p[p.Pendant = 11] = "Pendant", p[p.VideoAd = 12] = "VideoAd", p[p.FullScreen = 13] = "FullScreen", p[p.CustomizedBanner = 14] = "CustomizedBanner", p[p.Manual = 15] = "Manual", p[p.DynamicMenu = 16] = "DynamicMenu", (n = l || (l = {}))[n.Menu_Top = 0] = "Menu_Top", n[n.Menu_Bottom = 1] = "Menu_Bottom", n[n.Menu_Left = 2] = "Menu_Left", n[n.Menu_Right = 3] = "Menu_Right", n[n.Menu_All = 4] = "Menu_All", (i = f || (f = {}))[i.Switch = 0] = "Switch", i[i.Roll = 1] = "Roll", (O = U || (U = {}))[O.Local = 0] = "Local", O[O.Global = 1] = "Global", (L = y || (y = {}))[L.Origin = 0] = "Origin", L[L.NewVersion = 1] = "NewVersion", (t = j || (j = {}))[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical";
var W, J, C, F, r = function() {
        function s() {}
        return s.parseData = function(u, G) {
            if (!u || u.link_value == bu.appId) return null;
            var A = new s();
            return A._adId = u.adv_id, A._adName = u.adv_name, A._gameName = "游戏名字", A._respondType = u.link_type, A._linkValue = u.link_value, A._param = u.param, A._online = null == u.online || u.online, A._resUrl = u.img, A.checkResType(), A._effectType = null == u.effect_type ? H.None : u.effect_type, A._iconType = u.show_type, A._showTime = u.show_time, A._frameLength = u.img_info.count, A._interval = null == u.img_info.delay ? 80 : u.img_info.delay, A._path = u.path, A._order = G, A;
        }, s.prototype.checkResType = function() {
            switch (this._resUrl.substr(this._resUrl.length - 3, 3)) {
                case "png":
                case "PNG":
                    this._imgType = $.PNG;
                    break;
                case "jpg":
                case "JPG":
                    this._imgType = $.JPG;
                    break;
                case "gif":
                case "GIF":
                    this._imgType = $.GIF, this._resUrlPrefix = this._resUrl.substr(0, this._resUrl.length - 4);
            }
        }, Object.defineProperty(s.prototype, "resUrl", {
            get: function() {
                return this._imgType == $.GIF ? this._resUrlPrefix + "_0.png" : this._resUrl;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "adId", {
            get: function() {
                return this._adId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "adName", {
            get: function() {
                return this._adName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "gameName", {
            get: function() {
                return this._gameName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "respondType", {
            get: function() {
                return this._respondType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "linkValue", {
            get: function() {
                return this._linkValue;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "param", {
            get: function() {
                return this._param;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "system", {
            get: function() {
                return this._system;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "online", {
            get: function() {
                return this._online;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "iconType", {
            get: function() {
                return this._iconType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "showTime", {
            get: function() {
                return this._showTime;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "frameLength", {
            get: function() {
                return this._frameLength;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "interval", {
            get: function() {
                return this._interval;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "effectType", {
            get: function() {
                return this._effectType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "path", {
            get: function() {
                return this._path;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "order", {
            get: function() {
                return this._order;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "aniUrls", {
            get: function() {
                var u = [];
                if (this._imgType == $.GIF)
                    for (var G = 0; G < this._frameLength; G++) u.push(this._resUrlPrefix + "_" + G + ".png");
                else u.push(this._resUrl);
                return u;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(s.prototype, "resUrls", {
            get: function() {
                var u = [];
                if (this._imgType == $.GIF)
                    for (var G = 0; G < this._frameLength; G++) u.push({
                        url: this._resUrlPrefix + "_" + G + ".png",
                        type: Laya.Loader.IMAGE
                    });
                else u.push({
                    url: this._resUrl,
                    type: Laya.Loader.IMAGE
                });
                return u;
            },
            enumerable: !0,
            configurable: !0
        }), s;
    }(),
    S = function() {
        function Q() {}
        return Q.parseData = function(u) {
            var G = [];
            if (u && 0 < u.length)
                for (var A = void 0, s = 0; s < u.length; s++)(A = Q.parseOne(u[s])) && (A.containerType == E.Menu ? G.push(A) : G.unshift(A));
            return G;
        }, Q.parseOne = function(u) {
            if (!u) return null;
            var G = new Q();
            return G._containerId = u.position_id, G._containName = u.position_name, G._conWidth = u.position_info.width, G._conHeight = u.position_info.height, G._effectType = null == u.effect_type ? g.Normal : u.effect_type, G._posType = u.position_type <= k.LRTB ? u.position_type : k.None, G._containerType = u.position_type <= k.LRTB ? E.Single : u.position_type, G._conX = null == u.position_info.x ? u.position_info.x : parseInt(u.position_info.x), G._conY = null == u.position_info.y ? u.position_info.y : parseInt(u.position_info.y), G._conLeft = null == u.position_info.left ? u.position_info.left : parseInt(u.position_info.left), G._conRight = null == u.position_info.right ? u.position_info.right : parseInt(u.position_info.right), G._conTop = null == u.position_info.top ? u.position_info.top : parseInt(u.position_info.top), G._conBottom = null == u.position_info.bottom ? u.position_info.bottom : parseInt(u.position_info.bottom), G._conCenterX = null == u.position_info.center_x ? u.position_info.center_x : parseInt(u.position_info.center_x), G._conCenterY = null == u.position_info.center_y ? u.position_info.center_y : parseInt(u.position_info.center_y), G.parseContent(u.advs), G;
        }, Q.prototype.parseContent = function(u) {
            if (this._contents = [], u && 0 < u.length)
                for (var G = void 0, A = 0; A < u.length; A++)(G = r.parseData(u[A], A)) && G.online && this._contents.push(G);
        }, Object.defineProperty(Q.prototype, "contents", {
            get: function() {
                return this._contents;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "containerId", {
            get: function() {
                return this._containerId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "containName", {
            get: function() {
                return this._containName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conWidth", {
            get: function() {
                return this._conWidth;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conHeight", {
            get: function() {
                return this._conHeight;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "posType", {
            get: function() {
                return this._posType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "effectType", {
            get: function() {
                return this._effectType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "containerType", {
            get: function() {
                return this._containerType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conX", {
            get: function() {
                return this._conX;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conY", {
            get: function() {
                return this._conY;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conLeft", {
            get: function() {
                return this._conLeft;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conRight", {
            get: function() {
                return this._conRight;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conTop", {
            get: function() {
                return this._conTop;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conBottom", {
            get: function() {
                return this._conBottom;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conCenterX", {
            get: function() {
                return this._conCenterX;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "conCenterY", {
            get: function() {
                return this._conCenterY;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "allAdIconRes", {
            get: function() {
                for (var u = [], G = 0; G < this._contents.length; G++) this._contents[G] && this._contents[G].resUrl && (u = u.concat(this._contents[G].resUrls));
                return u;
            },
            enumerable: !0,
            configurable: !0
        }), Q;
    }(),
    Y = function() {
        function s() {}
        return s.load = function(u, G, A) {
            return Laya.loader.load(u, G, A, null, 1, s.cache);
        }, s.cache = !0, s;
    }(),
    v = function(G) {
        function u() {
            var u = G.call(this) || this;
            return u.init(), u;
        }
        return R(u, G), Object.defineProperty(u.prototype, "iconImg", {
            get: function() {
                return this._iconImg;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.init = function() {
            this.mouseEnabled = !0, this.mouseThrough = !1, this._iconImg = new Laya.Image(), this.addChild(this._iconImg), this._iconImg.pos(0, 0), this.clear();
        }, u.prototype.clear = function() {
            this._isLoop = !1, this._playIndex = 0, this.stopLoop(), this._iconImg.skin = "", this._iconUrils = [], this.removeSelf();
        }, u.prototype.setIcon = function(u, G, A) {
            void 0 === A && (A = 100), this._iconImg.size(u, G), this.size(u, G), this._interval = A;
        }, u.prototype.loadImages = function(u) {
            this._iconUrils = u, this._iconUrils && 1 <= this._iconUrils.length && this.setSkin(this._iconUrils[0]);
        }, u.prototype.setSkin = function(u) {
            this._iconImg && (this._iconImg.skin = u);
        }, u.prototype.play = function(u) {
            void 0 === u && (u = !0), !this._iconUrils || this._iconUrils.length <= 1 || this._inPlay || (this._isLoop = u, this.startLoop());
        }, u.prototype.startLoop = function() {
            this._inPlay = !0, this._playIndex = 0, Laya.timer.loop(this._interval, this, this.onLoop);
        }, u.prototype.stopLoop = function() {
            this._inPlay = !1, Laya.timer.clear(this, this.onLoop);
        }, u.prototype.onLoop = function() {
            this._playIndex >= this._iconUrils.length && (this._isLoop ? this._playIndex = this._playIndex % this._iconUrils.length : this.stopLoop());
            var u = this._iconUrils[this._playIndex];
            this.setSkin(u), this._playIndex++;
        }, u.prototype.stop = function() {
            this._inPlay && this.stopLoop();
        }, u;
    }(Laya.Sprite),
    P = function() {
        function T() {}
        return T.jumpApp = function(u, G, A, s, Q, z) {
            var H = {
                success: function() {
                    console.log("跳转APP成功！"), wx.aldSendEvent && wx.aldSendEvent("跳转小游戏成功", {
                        appid: u,
                        "广告位": A,
                        "广告": s.adId
                    }), bu.statistics.navigationConfirmStat(bu.LocationID.Vip, G, A, s.adId, s.order + 1, s.effectType, bu.gameID()), bu.eventCenter.event(bu.events.EventJumpAppSuccess, {
                        pageId: G
                    }), Q && Q.run();
                },
                fail: function() {
                    console.log("跳转APP失败！"), bu.eventCenter.event(bu.events.EventJumpAppFail, {
                        pageId: G
                    }), z && z.run();
                }
            };
            5 == bu.system.runtimePlatform ? H.pkgName = u : H.appId = u;
            var x = s ? s.adId : 0,
                X = {};
            if (X.subgameid = bu.utils.adaptStatID(B.PlatformId, bu.Stat_Offset), X.subuid = B.UID, X.location_id = bu.LocationID.Vip, X.ad_page_id = G, X.advid = A, X.adid = x, s) {
                var w = T.checkAdParam(s.param);
                T.parseAdParam(X, w), H.path = s.path;
            }
            if (H.extraData = X, console.log("custom ad jump app", H), Laya.Browser.window.wx || Laya.Browser.window.qg) {
                if (wx.navigateToMiniProgram) wx.navigateToMiniProgram(H);
                else {
                    var d = window.qg;
                    d.navigateToMiniGame && d.navigateToMiniGame(H);
                }
                wx.aldSendEvent && wx.aldSendEvent("跳转小游戏", {
                    appid: u,
                    "广告位": A,
                    "广告": s.adId
                });
            }
        }, T.checkAdParam = function(u) {
            return u && 0 < u.length && "?" == u[0] ? u.substr(1, u.length - 1) : u;
        }, T.parseAdParam = function(u, G) {
            if (G && 0 < G.length)
                for (var A = G.split("&"), s = 0; s < A.length; s++) {
                    var Q = A[s];
                    if (Q && 0 < Q.length) {
                        var z = Q.split("=");
                        u[z[0]] = z[1];
                    }
                }
        }, T.showQRCode = function(u) {
            var G = [u],
                A = Laya.Browser.window.wx;
            A && A.previewImage({
                urls: G,
                success: function() {
                    console.log("preview qrcode ok");
                }
            }), console.log("显示图片:", u);
        }, T.openAd = function(u, G, A, s, Q) {
            if (u) {
                switch (u.respondType) {
                    case m.Jump:
                    case m.JumpTwice:
                    case m.Link:
                        T.jumpApp(u.linkValue, G, A, u, s, Q);
                        break;
                    case m.QRCode:
                        T.showQRCode(u.linkValue);
                }
                bu.statistics.navigationStat(bu.LocationID.Vip, G, A, u.adId, u.order + 1, u.effectType, bu.gameID());
            }
        }, T;
    }(),
    V = function() {
        function d() {}
        return d.addReddot = function(u, G, A, s) {
            if (u && u.parent && (s && s.effectType == H.Reddot && d.getIconReddotState(G, A, s) == d.Reddot_Show)) {
                var Q = d.getDotImg();
                Q.size(30, 30), Q.mouseEnabled = !1, Q.skin = d.dotUrl, Q.anchorX = .5, Q.anchorY = .5, Q.pos(parseInt(u.x) + parseInt(u.width) - .5 * Q.width, parseInt(u.y) + .5 * Q.height), u.parent.addChild(Q);
                var z = d.getKey(G, A, s);
                d.ReddotList[z] = Q;
            }
        }, d.updateReddotState = function(u, G, A) {
            if (A && A.effectType == H.Reddot && d.getIconReddotState(u, G, A) == d.Reddot_Show) {
                d.saveIconReddotState(u, G, A, d.Reddot_Hide);
                var s = d.getKey(u, G, A),
                    Q = d.ReddotList[s];
                Q && d.saveDotImg(Q), d.ReddotList[s] = null;
            }
        }, d.getIconReddotState = function(u, G, A) {
            var s = d.getKey(u, G, A),
                Q = Laya.LocalStorage.getItem(s);
            if (Q && 0 < Q.length) {
                var z = Q.split(":"),
                    H = parseInt(z[0]),
                    x = parseInt(z[1]),
                    X = new Date(x),
                    w = new Date();
                if (X.getDay() == w.getDay()) return H;
            }
            return d.saveIconReddotState(u, G, A, d.Reddot_Show), d.Reddot_Show;
        }, d.saveIconReddotState = function(u, G, A, s) {
            var Q = d.getKey(u, G, A),
                z = s + ":" + Date.now();
            Laya.LocalStorage.setItem(Q, z);
        }, d.getDotImg = function() {
            return 0 == d.ReddotPool.length && d.ReddotPool.push(new Laya.Image()), d.ReddotPool.pop();
        }, d.saveDotImg = function(u) {
            u && (u.removeSelf(), d.ReddotPool.push(u));
        }, d.getKey = function(u, G, A) {
            return d.AdIconReddotKey + "_" + u + "_" + G + "_" + A.adId;
        }, Object.defineProperty(d, "dotUrl", {
            get: function() {
                return B.HOST + "reddot.png";
            },
            enumerable: !0,
            configurable: !0
        }), d.AdIconReddotKey = "AdIconReddotKey", d.Reddot_Show = 0, d.Reddot_Hide = 1, d.ReddotPool = [], d.ReddotList = {}, d;
    }(),
    N = function() {
        function u() {}
        return u.prototype.initIcon = function() {
            this._icon = new v(), this._icon.on(Laya.Event.CLICK, this, this.onClick);
        }, u.prototype.destroy = function() {
            this._icon && (this._icon.off(Laya.Event.CLICK, this, this.onClick), this._icon.clear(), this._icon = null), this._clickCallback && (this._clickCallback = null), this._pageId = 0, this._containerId = 0, this._content = null;
        }, Object.defineProperty(u.prototype, "icon", {
            get: function() {
                return this._icon;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "adId", {
            get: function() {
                return this._content.adId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "effectType", {
            get: function() {
                return this._content.effectType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "order", {
            get: function() {
                return this._content.order;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "content", {
            get: function() {
                return this._content;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.setData = function(u, G, A, s, Q, z, H) {
            void 0 === z && (z = !0), u && (this._pageId = s, this._containerId = Q, this._content = u, this._canClick = z, this._clickCallback = H, this.initIcon(), this._icon.setIcon(G, A, this._content.interval), this._icon.loadImages(this._content.aniUrls), this._canClick && V.addReddot(this._icon.iconImg, this._pageId, this._containerId, this._content));
        }, u.prototype.onClick = function() {
            this._content && this._canClick && (V.updateReddotState(this._pageId, this._containerId, this._content), P.openAd(this._content, this._pageId, this._containerId), this._clickCallback && this._clickCallback.run());
        }, u.prototype.play = function() {
            this._icon.play();
        }, u.prototype.stop = function() {
            this._icon.stop();
        }, u.creatAdElement = function() {
            return 0 == this._adElementPool.length && (this._adElementPool[0] = new u()), this._adElementPool.pop();
        }, u.recoverAdElement = function(u) {
            u && u.destroy();
        }, u._adElementPool = [], u;
    }(),
    a = function(u) {
        function G() {
            return u.call(this) || this;
        }
        return R(G, u), Object.defineProperty(G.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "adContainType", {
            get: function() {
                return E.Single;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "subType", {
            get: function() {
                return 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.setUnit = function(u, G, A, s) {
            A && G && (this.clear(), this._contentIdx = -1, this._pageId = u, this.visible = !0, this.mouseEnabled = !0, this.mouseThrough = !1, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, this.loadAndShow());
        }, G.prototype.clear = function() {
            this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this.stopAnimation(), this._adElement && (bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType), N.recoverAdElement(this._adElement), this._adElement = null), Laya.timer.clear(this, this.onAdEnd), this._parentCon = null, this._conData = null, this._curContentData = null, this._contents = [], this.anchorX = 0, this.anchorY = 0;
        }, G.prototype.setUnitPos = function() {
            switch (this.width = this._conData.conWidth, this.height = this._conData.conHeight, this.anchorX = .5, this.anchorY = .5, this._parentCon.addChildAt(this, this._parentCon.numChildren), this.x = void 0, this.y = void 0, this.centerX = void 0, this.centerY = void 0, this.left = void 0, this.right = void 0, this.top = void 0, this.bottom = void 0, this._conData.posType) {
                case k.Normal:
                    this.x = this._conData.conX, this.y = this._conData.conY;
                    break;
                case k.Center:
                    this.centerX = this._conData.conCenterX, this.centerY = this._conData.conCenterY;
                    break;
                case k.LRTB:
                    null != this._conData.conLeft && (this.left = this._conData.conLeft), null != this._conData.conRight && (this.right = this._conData.conRight), null != this._conData.conTop && (this.top = this._conData.conTop), null != this._conData.conBottom && (this.top = Laya.stage.height - this._conData.conBottom - this._conData.conHeight);
            }
            this._x = this._x + .5 * this.width, this._y = this._y + .5 * this.height;
        }, G.prototype.onClick = function() {
            this.loadAndShow();
        }, G.prototype.loadAndShow = function() {
            Laya.timer.clear(this, this.onAdEnd);
            for (var u, G = 0; G < this._contents.length && (this._contentIdx = (this._contentIdx + 1) % this._contents.length, !(u = this._contents[this._contentIdx]));) G++;
            G < this._contents.length && (this._curContentData && u.adId == this._curContentData.adId || (this._curContentData = u, Y.load(this._curContentData.resUrls, laya.utils.Handler.create(this, this.onLoadRes))));
        }, G.prototype.onLoadRes = function() {
            if (null != this._parentCon && null != this._conData) {
                switch (this._adElement ? bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType) : (this._adElement = N.creatAdElement(), this.setUnitPos()), this.removeChildren(), this._adElement.setData(this._curContentData, this._conData.conWidth, this._conData.conHeight, this._pageId, this._conData.containerId, !0, laya.utils.Handler.create(this, this.onClick, null, !1)), this.addChild(this._adElement.icon), this._adElement.play(), bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType), this._conData.effectType) {
                    case g.Normal:
                        break;
                    case g.Shake:
                        this.shake();
                        break;
                    case g.Blink:
                        this.blink();
                }
                Laya.timer.once(1e3 * this._curContentData.showTime, this, this.onAdEnd);
            }
        }, G.prototype.onAdEnd = function(u) {
            this.loadAndShow();
        }, G.prototype.stopAnimation = function() {
            this.stopShake(), this.stopBlink();
        }, G.prototype.shake = function() {
            this.stopShake(), this.turn = 0, this.direction = 1, Laya.timer.frameLoop(1, this, this.onShakeFrame);
        }, G.prototype.stopShake = function() {
            Laya.timer.clear(this, this.shake), Laya.timer.clear(this, this.onShakeFrame), this.rotation = 0;
        }, G.prototype.onShakeFrame = function(u) {
            var G = this.direction * Math.min(5, B.ShakeAnglePerMs * Laya.timer.delta),
                A = this.rotation + G;
            A * this.rotation < 0 && this.turn++, this.turn >= B.ShakeTurn ? (this.stopShake(), Laya.timer.once(B.ShakeBreakTime, this, this.shake)) : (this.rotation = A, Math.abs(this.rotation) > B.ShakeAngleLimit && (this.direction = 0 < this.rotation - B.ShakeAngleLimit ? -1 : 1));
        }, G.prototype.blink = function() {
            this.stopBlink(), this.direction = -1, this.turn = 0, Laya.timer.frameLoop(1, this, this.onBlinkFrame);
        }, G.prototype.stopBlink = function() {
            Laya.timer.clear(this, this.onBlinkFrame), Laya.timer.clear(this, this.blink), this.alpha = 1;
        }, G.prototype.onBlinkFrame = function(u) {
            var G = this.direction * Math.min(.1, B.BlinkPerMs * Laya.timer.delta);
            console.log(B.BlinkPerMs * Laya.timer.delta);
            var A = this.alpha + G;
            if (1 <= A) {
                if (A = 1, this.direction = -1, this.turn++, this.turn >= B.BlinkTurn) return this.stopBlink(), void Laya.timer.once(B.BlinkBreakTime, this, this.blink);
            } else A <= B.BlinkMinAlpha && (A = B.BlinkMinAlpha, this.direction = 1);
            this.alpha = A;
        }, G;
    }(Laya.View),
    h = function(u) {
        function G() {
            return u.call(this) || this;
        }
        return R(G, u), G.clearPageData = function() {
            G.PendantNum = 0, G.PendantCount = 0;
        }, Object.defineProperty(G.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "adContainType", {
            get: function() {
                return E.Pendant;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "subType", {
            get: function() {
                return 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.setUnit = function(u, G, A, s) {
            A && G && (this.clear(), this._customData = s, this._pageId = u, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, this.visible = !0, this.mouseEnabled = !0, this.mouseThrough = !1, this.loadAndShow());
        }, G.prototype.clear = function() {
            this._pendantWidth = 0, this._pendantHeight = 0, this.removeSelf(), this.removeChildren(), this.graphics.clear(), this.stopAnimation(), this._adElement && (bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType), N.recoverAdElement(this._adElement), this._adElement = null), this._parentCon = null, this._conData = null, this._curContentData = null, this._contents = [];
        }, G.prototype.setUnitPos = function() {
            this._pendantWidth = this._conData.conWidth ? this._conData.conWidth : 100, this._pendantHeight = this._conData.conHeight ? this._conData.conHeight : 100, this.width = this._pendantWidth, this.height = this._pendantHeight + this.lineLength, this._parentCon.addChildAt(this, this._parentCon.numChildren), this._lineImg = new Laya.Image(this.lineUrl), this.addChildAt(this._lineImg, 0), this._lineImg.size(this.lineWidth, this.lineLength + 30), this._lineImg.centerX = 0, this._lineImg.y = 0, this.pivot(.5 * this.width, 0), this.x = this._conData.conX, this.y = this._conData.conY, this.left = this._conData.conLeft, this.right = this._conData.conRight, this.top = this._conData.conTop, this.bottom = this._conData.conBottom, this.centerX = this._conData.conCenterX, this.centerY = this._conData.conCenterY, null == this.x && null == this.y && (this.top = 10, this.x = Laya.stage.width / (G.PendantNum + 1) * (G.PendantCount + 1)), G.PendantCount++;
        }, Object.defineProperty(G.prototype, "lineUrl", {
            get: function() {
                return this._customData.lineUrl ? this._customData.lineUrl : B.HOST + "imgPendantLine.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "lineWidth", {
            get: function() {
                return this._customData.lineWidth ? this._customData.lineWidth : 7;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "lineLength", {
            get: function() {
                return this._customData.lineLength ? this._customData.lineLength : 110;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "swingRange", {
            get: function() {
                return this._customData.swingRange ? this._customData.swingRange : B.PendantShakeAngleLimit;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(G.prototype, "swingAnglePerMs", {
            get: function() {
                return this._customData.swingAnglePerMs ? this._customData.swingAnglePerMs : B.PendantShakeAnglePerMs;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.loadAndShow = function() {
            this.loadLine();
        }, G.prototype.loadLine = function() {
            Y.load([{
                url: this.lineUrl,
                type: Laya.Loader.IMAGE
            }], laya.utils.Handler.create(this, this.onLoadLineRes));
        }, G.prototype.onLoadLineRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, G.prototype.loadAdIcons = function() {
            this._curContentData = this._contents[0], Y.load(this._curContentData.resUrls, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, G.prototype.onLoadAdIcons = function() {
            null != this._parentCon && null != this._conData && (this._adElement || (this._adElement = N.creatAdElement()), this._adElement.setData(this._curContentData, this._pendantWidth, this._pendantHeight, this._pageId, this._conData.containerId, !0), this.addChild(this._adElement.icon), this._adElement.icon.pos(0, this.lineLength), this._adElement.play(), this.shake(), bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, this._curContentData.adId, this._curContentData.order, this._curContentData.effectType));
        }, G.prototype.stopAnimation = function() {
            this.stopShake();
        }, G.prototype.shake = function() {
            this.stopShake(), this.direction = 1, Laya.timer.frameLoop(1, this, this.onShakeFrame);
        }, G.prototype.stopShake = function() {
            Laya.timer.clear(this, this.shake), Laya.timer.clear(this, this.onShakeFrame), this.rotation = 0;
        }, G.prototype.onShakeFrame = function(u) {
            var G = this.direction * Math.min(1, this.swingAnglePerMs * Laya.timer.delta),
                A = this.rotation + G;
            this.rotation = A, Math.abs(this.rotation) > this.swingRange && (this.direction = 0 < this.rotation - this.swingRange ? -1 : 1);
        }, G.PendantNum = 0, G.PendantCount = 0, G;
    }(Laya.View),
    e = function(u) {
        function d() {
            return u.call(this) || this;
        }
        return R(d, u), Object.defineProperty(d.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "adContainType", {
            get: function() {
                return E.Menu;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "subType", {
            get: function() {
                return y.NewVersion;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.setUnit = function(u, G, A, s) {
            A && G && (this.clear(), this._customData = s, this._pageId = u, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, this.visible = !1, this.mouseThrough = !0, this._drawerType = this.getDrawerType(), this.loadAndShow());
        }, d.prototype.clear = function() {
            this._conData && this._contents && 0 < this._contents.length && this.adTimeHide(), this._parentCon = null, this._conData = null, this._contents = [], this._iconPanel && (this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._isShow = !1, this._inMove = !1, this._dot && Laya.timer.clear(this, this.dotEffect);
        }, d.prototype.showAndHide = function(u) {
            if (void 0 === u && (u = !0), !this._inMove) {
                this._panel.centerX = void 0, this._panel.centerY = void 0, this._panel.left = void 0, this._panel.right = void 0, this._panel.top = void 0, this._panel.bottom = void 0, this._inMove = !0, this._isShow = u && !this._isShow;
                var G = !u;
                switch (this._drawerType) {
                    case l.Menu_Top:
                        this.movePos(G, this._panel.x, this._isShow ? this._panel.y + this._bg.height : this._panel.y - this._bg.height);
                        break;
                    case l.Menu_Bottom:
                        this.movePos(G, this._panel.x, this._isShow ? this._panel.y - this._bg.height : this._panel.y + this._bg.height);
                        break;
                    case l.Menu_Left:
                        this.movePos(G, this._isShow ? 0 : -this._bg.width, this._panel.y);
                        break;
                    case l.Menu_Right:
                        this.movePos(G, this._isShow ? this._panel.x - this._bg.width : this._panel.x + this._bg.width, this._panel.y);
                        break;
                    case l.Menu_All:
                }
                this._dot.visible = !this._isShow, d.NeedSlide && this._iconPanel && (this.isHorizontal ? this._iconPanel.hScrollBar.value = 0 : this._iconPanel.vScrollBar.value = 0), this._isShow ? this.adTimeShow() : this.adTimeHide();
            }
        }, d.prototype.movePos = function(u, G, A) {
            if (this._more.skin = this._isShow ? this.btnInUrl : this.btnOutUrl, this._mask.visible = this._isShow, u) this._panel.x = G, this._panel.y = A, this._inMove = !1, this.visible = !0;
            else var s = Laya.Tween.to(this._panel, {
                x: G,
                y: A
            }, 200, Laya.Ease.sineInOut, laya.utils.Handler.create(this, function() {
                this._inMove = !1, this.visible = !0, s.clear(), s = null;
            }));
        }, d.prototype.adTimeShow = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adShow(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, d.prototype.adTimeHide = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adHide(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, d.prototype.dotEffect = function() {
            this._dot && this._dot.scale(2.3 - this._dot.scaleX, 2.3 - this._dot.scaleY);
        }, d.prototype.setMenuLayout = function() {
            this.size(Laya.stage.width + 10, Laya.stage.height + 10), this.pos(-5, -5), this._mask = new Laya.Sprite(), this._mask.size(this.width, this.height), this._mask.pos(0, 0), this._mask.visible = !0, this._mask.graphics.drawRect(0, 0, this._mask.width, this._mask.height, "#000000"), this._mask.alpha = .1, this._mask.name = d.MaskName, this._mask.mouseEnabled = !0, this._mask.mouseThrough = !1, this.addChildAt(this._mask, 0), this._panel = new Laya.Box(), this._panel.name = "containerBox", this._panel.mouseThrough = !0, this.addChildAt(this._panel, 1), this._bg = new Laya.Image(), this._bg.name = "menubg", this._bg.skin = this.bgUrl, this._bg.sizeGrid = this.bgSizeGrid, this._bg.pos(0, 0), this._panel.addChild(this._bg), this._title = new Laya.Image(), this._title.mouseEnabled = !1, this._title.skin = this.titleUrl, this._title.size(d.TitleWidth, d.TitleHeight), this._panel.addChild(this._title);
            var u = this.layoutStyle;
            if (this._bg.width = this._customData.containerWidth ? this._customData.containerWidth : Laya.stage.width * (2 / 3), this._adIconWidth = (this._bg.width - 2 * d.BorderDiff - (u.x + 1) * d.AdIconSpaceW) / u.x, this._adIconHeight = this._adIconWidth, this._bg.height = (d.AdIconSpaceH + this._adIconHeight + d.AdIconTxtHeight) * u.y + d.BorderDiff + d.AdIconSpaceH + this._title.height + d.AdIconSpaceH, this._drawerType != l.Menu_All) {
                this._more = new Laya.Button(), this._more.stateNum = 1, this._more.mouseEnabled = !0, this._more.mouseThrough = !1, this._more.name = d.MoreName;
                var G = this.btnSizePt;
                this._more.size(G.x, G.y), this._more.skin = this.btnOutUrl, this._panel.addChild(this._more), this._dot = new Laya.Image(), this._dot.mouseEnabled = !1, this._dot.skin = this.dotUrl, this._dot.anchorX = .5, this._dot.anchorY = .5, this._dot.pos(0, 0), this._panel.addChild(this._dot), Laya.timer.loop(200, this, this.dotEffect);
            }
            switch (this._drawerType) {
                case l.Menu_Top:
                    this._more.pos(0, this._bg.height), this._panel.size(this._bg.width, this._bg.height + this._more.height);
                    break;
                case l.Menu_Bottom:
                    this._more.pos(0, 0), this._bg.pos(0, this._more.height), this._panel.size(this._bg.width, this._bg.height + this._more.height);
                    break;
                case l.Menu_Left:
                    this._more.pos(this._bg.width, this.moreBtnDown ? this._bg.height - this._more.height - 20 : 20), this._panel.size(this._bg.width + this._more.width, this._bg.height);
                    break;
                case l.Menu_Right:
                    this._more.pos(0, this.moreBtnDown ? this._bg.height - this._more.height - 20 : 20), this._bg.pos(this._more.width, 0), this._panel.size(this._bg.width + this._more.width, this._bg.height);
                    break;
                case l.Menu_All:
                    this._panel.size(this._bg.width, this._bg.height);
            }
            this._title.pos(.5 * this._bg.width - .5 * this._title.width, d.BorderDiff + d.AdIconSpaceH), this._dot.pos(this._more.x + this._more.width, this._more.y);
        }, d.prototype.setUnitPos = function() {
            this.setMenuLayout(), this._parentCon.addChildAt(this, this._parentCon.numChildren), this._panel.centerX = void 0, this._panel.centerY = void 0, this._panel.left = void 0, this._panel.right = void 0, this._panel.top = void 0, this._panel.bottom = void 0, this._customData.pos ? (this._panel.x = this._customData.pos.x, this._panel.y = this._customData.pos.y, this._panel.left = this._customData.pos.left, this._panel.right = this._customData.pos.right, this._panel.top = this._customData.pos.top, this._panel.bottom = this._customData.pos.bottom, this._panel.centerX = this._customData.pos.centerX, this._panel.centerY = this._customData.pos.centerY) : (this._panel.left = 0, this._panel.centerY = 0), this.on(Laya.Event.CLICK, this, this.onClick);
        }, d.prototype.onClick = function(u) {
            var G = u.target.name;
            this._conData && (G != d.MoreName && G != d.MaskName || this.showAndHide());
        }, d.prototype.loadAndShow = function() {
            this.loadBg();
        }, d.prototype.loadBg = function() {
            var u = [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.dotUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.titleUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnOutUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnInUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, d.prototype.onLoadBgRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.showAndHide(!1), this.loadAdIcons());
        }, d.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, d.prototype.onLoadAdIcons = function() {
            if (null != this._parentCon && null != this._conData) {
                this._iconPanel = new Laya.Panel(), this._iconPanel.pos(this._bg.x + d.BorderDiff, this._bg.y + this._title.y + this._title.height + d.BorderDiff), this._iconPanel.size(this._bg.width - 2 * d.BorderDiff, this._bg.height - this._title.y - this._title.height - d.BorderDiff), this._panel.addChild(this._iconPanel), this._iconPanel.removeChildren(), this.clearElements(), d.NeedSlide && (this.isHorizontal ? (this._iconPanel.hScrollBarSkin = "", this._iconPanel.hScrollBar.elasticBackTime = 150, this._iconPanel.hScrollBar.elasticDistance = 100) : (this._iconPanel.vScrollBarSkin = "", this._iconPanel.vScrollBar.elasticBackTime = 150, this._iconPanel.vScrollBar.elasticDistance = 100));
                for (var u = 0, G = this.layoutStyle, A = Math.min(G.x * G.y, this._contents.length), s = 0; s < A; s++) {
                    var Q = this._contents[s];
                    if (Q && Q.resUrl) {
                        var z = new Laya.Sprite();
                        z.mouseEnabled = !0;
                        var H = N.creatAdElement();
                        this._curElements.push(H), H.setData(Q, this._adIconWidth, this._adIconHeight, this._pageId, this._conData.containerId), H.icon.pos(0, 0), z.addChild(H.icon), H.play();
                        var x = new Laya.Label();
                        x.font = "SimHei", x.color = "#1A1C28", x.fontSize = 16, x.align = "center", x.valign = "bottom", x.size(this._adIconWidth + 20, d.AdIconTxtHeight), x.pos(-10, this._adIconHeight), x.text = Q.adName, z.addChild(x), z.size(this._adIconWidth, this._adIconHeight + d.AdIconTxtHeight);
                        var X = this.isHorizontal ? u % G.y : Math.floor(u / G.x),
                            w = this.isHorizontal ? Math.floor(u / G.y) : u % G.x;
                        z.x = d.AdIconSpaceW + w * (d.AdIconSpaceW + z.width), z.y = d.AdIconSpaceH + X * (d.AdIconSpaceH + z.height), this._iconPanel.addChild(z), u++;
                    }
                }
            }
        }, d.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, d.prototype.getDrawerType = function() {
            return this._customData.drawerType ? this._customData.drawerType : l.Menu_Left;
        }, Object.defineProperty(d.prototype, "moreBtnDown", {
            get: function() {
                return !!this._customData.moreBtnDown && this._customData.moreBtnDown;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "btnSizePt", {
            get: function() {
                return this._customData.btnSizePt ? this._customData.btnSizePt : new Laya.Point(90, 75);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "btnOutUrl", {
            get: function() {
                return this._customData.btnOutSkin ? this._customData.btnOutSkin : B.HOST + "moregame0.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "btnInUrl", {
            get: function() {
                return this._customData.btnInSkin ? this._customData.btnInSkin : B.HOST + "moregame1.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "dotUrl", {
            get: function() {
                return this._customData.dotSkin ? this._customData.dotSkin : B.HOST + "reddot.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "titleUrl", {
            get: function() {
                return this._customData.titleSkin ? this._customData.titleSkin : B.HOST + "title.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "bgUrl", {
            get: function() {
                return this._customData.bgSkin ? this._customData.bgSkin : B.HOST + "all.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "bgSizeGrid", {
            get: function() {
                return this._customData.bgSizeGrid ? this._customData.bgSizeGrid : "20,20,20,20,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "layoutStyle", {
            get: function() {
                return this._customData.layoutStyle ? this._customData.layoutStyle : new Laya.Point(3, 4);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "isHorizontal", {
            get: function() {
                return this._drawerType == l.Menu_Top || this._drawerType == l.Menu_Bottom || this._drawerType == l.Menu_All;
            },
            enumerable: !0,
            configurable: !0
        }), d.AdIconTxtHeight = 30, d.AdIconSpaceW = 30, d.AdIconSpaceH = 30, d.BorderDiff = 5, d.TitleWidth = 190, d.TitleHeight = 40, d.MoreName = "MoreImg", d.MaskName = "MaskBg", d.NeedSlide = !1, d;
    }(Laya.View),
    Z = function(u) {
        function _() {
            return u.call(this) || this;
        }
        return R(_, u), Object.defineProperty(_.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "adContainType", {
            get: function() {
                return E.Menu;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "subType", {
            get: function() {
                return y.Origin;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), _.prototype.setUnit = function(u, G, A, s) {
            A && G && (this.clear(), this._customData = s, this._pageId = u, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, this.visible = !1, this.mouseThrough = !0, this._drawerType = this.getDrawerType(), this.loadAndShow());
        }, _.prototype.clear = function() {
            this._conData && this._contents && 0 < this._contents.length && this.adTimeHide(), this._parentCon = null, this._conData = null, this._contents = [], this._iconPanel && (this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._isShow = !1, this._inMove = !1, this._dot && Laya.timer.clear(this, this.dotEffect);
        }, _.prototype.showAndHide = function(u) {
            if (void 0 === u && (u = !0), !this._inMove) {
                this._panel.centerX = void 0, this._panel.centerY = void 0, this._panel.left = void 0, this._panel.right = void 0, this._panel.top = void 0, this._panel.bottom = void 0, this._inMove = !0, this._isShow = u && !this._isShow;
                var G = !u;
                switch (this._drawerType) {
                    case l.Menu_Top:
                        this.movePos(G, this._panel.x, this._isShow ? this._panel.y + this._bg.height : this._panel.y - this._bg.height);
                        break;
                    case l.Menu_Bottom:
                        this.movePos(G, this._panel.x, this._isShow ? this._panel.y - this._bg.height : this._panel.y + this._bg.height);
                        break;
                    case l.Menu_Left:
                        this.movePos(G, this._isShow ? 0 : -this._bg.width, this._panel.y);
                        break;
                    case l.Menu_Right:
                        this.movePos(G, this._isShow ? this._panel.x - this._bg.width : this._panel.x + this._bg.width, this._panel.y);
                        break;
                    case l.Menu_All:
                }
                this._dot.visible = !this._isShow, _.NeedSlide && this._iconPanel && (this.isHorizontal ? this._iconPanel.hScrollBar.value = 0 : this._iconPanel.vScrollBar.value = 0), this._isShow ? this.adTimeShow() : this.adTimeHide();
            }
        }, _.prototype.movePos = function(u, G, A) {
            if (this._more.skin = this._isShow ? this.btnInUrl : this.btnOutUrl, this._mask.visible = this._isShow, u) this._panel.x = G, this._panel.y = A, this._inMove = !1, this.visible = !0;
            else var s = Laya.Tween.to(this._panel, {
                x: G,
                y: A
            }, 200, Laya.Ease.sineInOut, laya.utils.Handler.create(this, function() {
                this._inMove = !1, this.visible = !0, s.clear(), s = null;
            }));
        }, _.prototype.adTimeShow = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adShow(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, _.prototype.adTimeHide = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adHide(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, _.prototype.dotEffect = function() {
            this._dot && this._dot.scale(2.3 - this._dot.scaleX, 2.3 - this._dot.scaleY);
        }, _.prototype.setMenuLayout = function() {
            this.size(Laya.stage.width + 10, Laya.stage.height + 10), this.pos(-5, -5), this._mask = new Laya.Sprite(), this._mask.size(this.width, this.height), this._mask.pos(0, 0), this._mask.visible = !0, this._mask.graphics.drawRect(0, 0, this._mask.width, this._mask.height, "#000000"), this._mask.alpha = .1, this._mask.name = _.MaskName, this._mask.mouseEnabled = !0, this._mask.mouseThrough = !1, this.addChildAt(this._mask, 0), this._panel = new Laya.Box(), this._panel.name = "containerBox", this._panel.mouseThrough = !0, this.addChildAt(this._panel, 1), this._bg = new Laya.Image(), this._bg.name = "menubg", this._bg.skin = this.bgUrl, this._bg.sizeGrid = this.bgSizeGrid, this._bg.pos(0, 0), this._panel.addChild(this._bg);
            var u = this.layoutStyle;
            if (this._bg.width = this._customData.containerWidth ? this._customData.containerWidth : Laya.stage.width - 80, this._adIconWidth = (this._bg.width - 2 * _.BorderDiff - (u.x + 1) * _.AdIconSpaceW) / u.x, this._adIconHeight = this._adIconWidth, this._bg.height = (_.AdIconSpaceH + this._adIconHeight) * u.y + 2 * _.BorderDiff + _.AdIconSpaceH, this._drawerType != l.Menu_All) {
                this._more = new Laya.Button(), this._more.stateNum = 1, this._more.mouseEnabled = !0, this._more.mouseThrough = !1, this._more.name = _.MoreName;
                var G = this.btnSizePt;
                this._more.size(G.x, G.y), this._more.skin = this.btnOutUrl, this._panel.addChild(this._more), this._dot = new Laya.Image(), this._dot.mouseEnabled = !1, this._dot.skin = this.dotUrl, this._dot.anchorX = .5, this._dot.anchorY = .5, this._dot.pos(0, 0), this._panel.addChild(this._dot), Laya.timer.loop(200, this, this.dotEffect);
            }
            switch (this._drawerType) {
                case l.Menu_Top:
                    this._more.pos(0, this._bg.height), this._panel.size(this._bg.width, this._bg.height + this._more.height);
                    break;
                case l.Menu_Bottom:
                    this._more.pos(0, 0), this._bg.pos(0, this._more.height), this._panel.size(this._bg.width, this._bg.height + this._more.height);
                    break;
                case l.Menu_Left:
                    this._more.pos(this._bg.width, this.moreBtnDown ? this._bg.height - this._more.height - 20 : 20), this._panel.size(this._bg.width + this._more.width, this._bg.height);
                    break;
                case l.Menu_Right:
                    this._more.pos(0, this.moreBtnDown ? this._bg.height - this._more.height - 20 : 20), this._bg.pos(this._more.width, 0), this._panel.size(this._bg.width + this._more.width, this._bg.height);
                    break;
                case l.Menu_All:
                    this._panel.size(this._bg.width, this._bg.height);
            }
            this._dot.pos(this._more.x + this._more.width, this._more.y);
        }, _.prototype.setUnitPos = function() {
            this.setMenuLayout(), this._parentCon.addChildAt(this, this._parentCon.numChildren), this._panel.centerX = void 0, this._panel.centerY = void 0, this._panel.left = void 0, this._panel.right = void 0, this._panel.top = void 0, this._panel.bottom = void 0, this._customData.pos ? (this._panel.x = this._customData.pos.x, this._panel.y = this._customData.pos.y, this._panel.left = this._customData.pos.left, this._panel.right = this._customData.pos.right, this._panel.top = this._customData.pos.top, this._panel.bottom = this._customData.pos.bottom, this._panel.centerX = this._customData.pos.centerX, this._panel.centerY = this._customData.pos.centerY) : (this._panel.left = 0, this._panel.centerY = 0), this.on(Laya.Event.CLICK, this, this.onClick);
        }, _.prototype.onClick = function(u) {
            var G = u.target.name;
            this._conData && (G != _.MoreName && G != _.MaskName || this.showAndHide());
        }, _.prototype.loadAndShow = function() {
            this.loadBg();
        }, _.prototype.loadBg = function() {
            var u = [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.dotUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnOutUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnInUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, _.prototype.onLoadBgRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.showAndHide(!1), this.loadAdIcons());
        }, _.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, _.prototype.onLoadAdIcons = function() {
            if (null != this._parentCon && null != this._conData) {
                this._iconPanel = new Laya.Panel(), this._iconPanel.pos(this._bg.x + _.BorderDiff, this._bg.y + _.BorderDiff), this._iconPanel.size(this._bg.width - 2 * _.BorderDiff, this._bg.height - 2 * _.BorderDiff), this._panel.addChild(this._iconPanel), this._iconPanel.removeChildren(), this.clearElements(), _.NeedSlide && (this.isHorizontal ? (this._iconPanel.hScrollBarSkin = "", this._iconPanel.hScrollBar.elasticBackTime = 150, this._iconPanel.hScrollBar.elasticDistance = 100) : (this._iconPanel.vScrollBarSkin = "", this._iconPanel.vScrollBar.elasticBackTime = 150, this._iconPanel.vScrollBar.elasticDistance = 100));
                for (var u = 0, G = this.layoutStyle, A = this._contents.length, s = 0; s < A; s++) {
                    var Q = this._contents[s];
                    if (Q && Q.resUrl) {
                        var z = new Laya.Sprite();
                        z.mouseEnabled = !0;
                        var H = N.creatAdElement();
                        this._curElements.push(H), H.setData(Q, this._adIconWidth, this._adIconHeight, this._pageId, this._conData.containerId), H.icon.pos(0, 0), z.addChild(H.icon), H.play();
                        var x = new Laya.Sprite();
                        x.size(this._adIconWidth, _.AdIconTxtHeight + 5), x.graphics.drawRect(0, 0, x.width, x.height, "#000000"), x.alpha = .5, x.pos(0, this._adIconHeight - x.height), z.addChild(x);
                        var X = new Laya.Label();
                        X.font = "SimHei", X.color = "#FFFFFF", X.fontSize = 20, X.align = "center", X.valign = "middle", X.size(this._adIconWidth + 20, _.AdIconTxtHeight), X.pos(-10, this._adIconHeight - _.AdIconTxtHeight), X.text = Q.adName, z.addChild(X), z.size(this._adIconWidth, this._adIconHeight);
                        var w = this.isHorizontal ? u % G.y : Math.floor(u / G.x),
                            d = this.isHorizontal ? Math.floor(u / G.y) : u % G.x;
                        if (z.x = _.AdIconSpaceW + d * (_.AdIconSpaceW + z.width), z.y = _.AdIconSpaceH + w * (_.AdIconSpaceH + z.height), this._iconPanel.addChild(z), u++, s + 1 == A) {
                            var T = new Laya.Sprite();
                            T.size(_.AdIconSpaceW, _.AdIconSpaceH), T.pos(0, z.y + z.height), this._iconPanel.addChild(T);
                        }
                    }
                }
            }
        }, _.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, _.prototype.getDrawerType = function() {
            return this._customData.drawerType ? this._customData.drawerType : l.Menu_Left;
        }, Object.defineProperty(_.prototype, "moreBtnDown", {
            get: function() {
                return !!this._customData.moreBtnDown && this._customData.moreBtnDown;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "btnSizePt", {
            get: function() {
                return this._customData.btnSizePt ? this._customData.btnSizePt : new Laya.Point(55, 66);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "btnOutUrl", {
            get: function() {
                return this._customData.btnOutSkin ? this._customData.btnOutSkin : B.HOST + "moregame_new00.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "btnInUrl", {
            get: function() {
                return this._customData.btnInSkin ? this._customData.btnInSkin : B.HOST + "moregame_new01.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "dotUrl", {
            get: function() {
                return this._customData.dotSkin ? this._customData.dotSkin : B.HOST + "reddot.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "bgUrl", {
            get: function() {
                return this._customData.bgSkin ? this._customData.bgSkin : B.HOST + "all_new00.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "bgSizeGrid", {
            get: function() {
                return this._customData.bgSizeGrid ? this._customData.bgSizeGrid : "20,20,20,20,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "layoutStyle", {
            get: function() {
                return this._customData.layoutStyle ? this._customData.layoutStyle : new Laya.Point(3, 3);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_.prototype, "isHorizontal", {
            get: function() {
                return this._drawerType == l.Menu_Top || this._drawerType == l.Menu_Bottom || this._drawerType == l.Menu_All;
            },
            enumerable: !0,
            configurable: !0
        }), _.AdIconTxtHeight = 30, _.AdIconSpaceW = 25, _.AdIconSpaceH = 25, _.BorderDiff = 5, _.MoreName = "MoreImg", _.MaskName = "MaskBg", _.NeedSlide = !0, _;
    }(Laya.View),
    K = function(u) {
        function Q() {
            return u.call(this) || this;
        }
        return R(Q, u), Object.defineProperty(Q.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "adContainType", {
            get: function() {
                return E.Guess;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "subType", {
            get: function() {
                return j.Horizontal;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), Q.prototype.setUnit = function(u, G, A, s) {
            A && G && (this.clear(), this._customData = s, this._pageId = u, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, this.visible = !1, this.mouseThrough = !0, this._showCount = 0, this._realSpaceW = Q.AdIconSpaceW, this._realSpaceH = Q.AdIconSpaceH, this._realTxtHeight = this.needName ? Q.AdIconTxtHeight : 0, this.loadAndShow());
        }, Q.prototype.clear = function() {
            this._iconPanel && (this._iconPanel.off(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._iconPanel.off(Laya.Event.MOUSE_UP, this, this.MouseUp), this._iconPanel.off(Laya.Event.MOUSE_OUT, this, this.MouseUp), this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), this.stopRoll(), Laya.timer.clear(this, this.onAdSwitch), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._parentCon = null, this._conData = null, this._contents = [], this._curContents = [];
        }, Q.prototype.setMenuLayout = function() {
            this._bg = new Laya.Image(), this._bg.name = "menubg", this._bg.skin = this.bgUrl, this._bg.sizeGrid = this.bgSizeGrid, this._bg.pos(0, 0), this.addChild(this._bg), this._bg.width = this.containerWidth, this._bg.height = this.containerHeight, this.size(this._bg.width, this._bg.height), this._adIconWidth = (this._bg.width - 2 * this.borderDiffWidth - (this.iconNum + 1) * Q.AdIconSpaceW - this.offSetLeft) / this.iconNum, this._adIconHeight = this._bg.height - 2 * this.borderDiffHeight - 2 * Q.AdIconSpaceH - this.offSetTop - this._realTxtHeight;
            var u = Math.min(this._adIconWidth, this._adIconHeight),
                G = this._adIconWidth - u;
            this._adIconWidth = this._adIconHeight = u, 0 < G ? this._realSpaceW = (this._bg.width - 2 * this.borderDiffWidth - this.offSetLeft - this.iconNum * this._adIconWidth) / (this.iconNum + 1) : this._realSpaceH = (this._bg.height - 2 * this.borderDiffHeight - this._adIconHeight - this.offSetTop - this._realTxtHeight) / 2;
        }, Q.prototype.setUnitPos = function() {
            this.setMenuLayout(), this._parentCon.addChildAt(this, this._parentCon.numChildren), this.centerX = void 0, this.centerY = void 0, this.left = void 0, this.right = void 0, this.top = void 0, this.bottom = void 0, this._customData.pos ? (this.x = this._customData.pos.x, this.y = this._customData.pos.y, this.left = this._customData.pos.left, this.right = this._customData.pos.right, this.top = this._customData.pos.top, this.bottom = this._customData.pos.bottom, this.centerX = this._customData.pos.centerX, this.centerY = this._customData.pos.centerY) : (this.centerX = 0, this.centerY = 300);
        }, Q.prototype.loadAndShow = function() {
            this.loadBg();
        }, Q.prototype.loadBg = function() {
            var u = [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, Q.prototype.onLoadBgRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, Q.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, Q.prototype.onLoadAdIcons = function() {
            if (null != this._parentCon && null != this._conData && (this._iconPanel || (this._iconPanel = new Laya.Panel(), this._iconPanel.pos(this._bg.x + this.borderDiffWidth + this.offSetLeft, this._bg.y + this.borderDiffHeight + this.offSetTop), this._iconPanel.size(this._bg.width - 2 * this.borderDiffWidth - this.offSetLeft, this._bg.height - 2 * this.borderDiffHeight - this.offSetTop), this.addChild(this._iconPanel)), this._iconPanel.removeChildren(), this.clearElements(), this.autoScroll)) switch (Q.AdAnimationType) {
                case f.Switch:
                    this.showSwitchAd();
                    break;
                case f.Roll:
                    this.showRollAd();
            }
        }, Q.prototype.showRollAd = function() {
            if (this._curContents = this._contents.concat(), this.adIconLayout(), this._curContents.length > this.iconNum) {
                var u = this._iconPanel.getChildAt(this.iconNum - 1),
                    G = u.x + u.width,
                    A = this._iconPanel.getChildAt(this._curContents.length - 1),
                    s = A.x + A.width;
                this._rollValueMax = s - G + this._realSpaceW, this._rollValue = 0, this._iconPanel.hScrollBarSkin = "", this._iconPanel.hScrollBar.setScroll(0, this._rollValueMax, this._rollValue), this._iconPanel.hScrollBar.changeHandler = new Laya.Handler(this, this.onRollChange), this._iconPanel.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._iconPanel.on(Laya.Event.MOUSE_UP, this, this.MouseUp), this._iconPanel.on(Laya.Event.MOUSE_OUT, this, this.MouseUp), this.startRoll();
            }
        }, Q.prototype.MouseDown = function() {
            this.stopRoll();
        }, Q.prototype.MouseUp = function() {
            this.startRoll(), this._iconPanel.hScrollBar.stopScroll();
        }, Q.prototype.onRollChange = function(u) {
            this._rollValue = u;
        }, Q.prototype.startRoll = function() {
            Laya.timer.clear(this, this.onAdRoll), Laya.timer.frameLoop(1, this, this.onAdRoll);
        }, Q.prototype.stopRoll = function() {
            Laya.timer.clear(this, this.onAdRoll);
        }, Q.prototype.onAdRoll = function() {
            var u = Math.min(1, B.AdRollPerMs * Laya.timer.delta);
            this._rollValue >= this._rollValueMax ? this._rollInterval = -1 : this._rollValue <= 0 && (this._rollInterval = 1), u = this._rollInterval * u, this._rollValue = Math.min(this._rollValueMax, this._rollValue + u), this._rollValue = Math.max(0, this._rollValue), this._iconPanel.hScrollBar.setScroll(0, this._rollValueMax, this._rollValue);
        }, Q.prototype.showSwitchAd = function() {
            this._curContents = [], this._contents.length > this.iconNum ? (Laya.timer.once(B.AdSwitchTime, this, this.onAdSwitch), this._curContents = this.getShowContents()) : this._curContents = this._curContents.concat(this._contents), this.adIconLayout();
        }, Q.prototype.adIconLayout = function() {
            for (var u = 0; u < this._curContents.length; u++) {
                var G = this._curContents[u];
                if (G && G.resUrl) {
                    var A = new Laya.Sprite();
                    A.mouseEnabled = !0;
                    var s = N.creatAdElement();
                    if (this._curElements.push(s), s.setData(G, this._adIconWidth, this._adIconHeight, this._pageId, this._conData.containerId), s.icon.pos(0, 0), A.addChild(s.icon), s.play(), this.needName) {
                        var Q = new Laya.Label(),
                            z = .7 * this._realSpaceW;
                        Q.font = "SimHei", Q.color = this.fontColor, Q.align = "center", Q.valign = "bottom", Q.size(this._adIconWidth + z, this._realTxtHeight), Q.fontSize = 20 * Q.width / 120, Q.pos(-.5 * z, this._adIconHeight), Q.overflow = Laya.Text.HIDDEN, Q.text = G.adName, A.addChild(Q);
                    }
                    if (A.size(this._adIconWidth, this._adIconHeight + this._realTxtHeight), A.x = this._realSpaceW + u * (this._realSpaceW + A.width), A.y = this._realSpaceH, this._iconPanel.addChild(A), bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, G.adId, G.order, G.effectType), u + 1 == this._contents.length) {
                        var H = new Laya.Sprite();
                        H.size(this._realSpaceW, this._realSpaceH), H.pos(A.x + A.width, A.y), this._iconPanel.addChild(H);
                    }
                }
            }
            this.visible = !0;
        }, Q.prototype.onAdSwitch = function() {
            Laya.timer.clear(this, this.onAdSwitch), this.onLoadAdIcons();
        }, Q.prototype.getShowContents = function() {
            for (var u = [], G = 0; G < this.iconNum; G++) u.push(this._contents[this._showCount]), this._showCount = ++this._showCount % this._contents.length;
            return u;
        }, Q.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, G.adId, G.order, G.effectType), N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(Q.prototype, "isDefauleBg", {
            get: function() {
                return this.bgUrl == B.HOST + "guessbg4.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "needName", {
            get: function() {
                return null == this._customData.needName || this._customData.needName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "borderDiffWidth", {
            get: function() {
                return null == this._customData.borderDiffWidth ? Q.BorderDiffWidth : this._customData.borderDiffWidth;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "borderDiffHeight", {
            get: function() {
                return null == this._customData.borderDiffHeight ? Q.BorderDiffHeight : this._customData.borderDiffHeight;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "bgUrl", {
            get: function() {
                return this._customData.bgSkin ? this._customData.bgSkin : B.HOST + "guessbg4.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "bgSizeGrid", {
            get: function() {
                return this._customData.bgSizeGrid && this._customData.bgSkin ? this._customData.bgSizeGrid : "0,100,0,100,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "iconNum", {
            get: function() {
                return this.isDefauleBg ? 5 : this._customData.iconNum ? this._customData.iconNum : 5;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "containerWidth", {
            get: function() {
                return this.isDefauleBg ? Laya.stage.width : this._customData.containerWidth ? this._customData.containerWidth : Laya.stage.width;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "containerHeight", {
            get: function() {
                return this._customData.containerHeight ? this._customData.containerHeight : 150;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "offSetLeft", {
            get: function() {
                return this._customData.offSetLeft ? this._customData.offSetLeft : 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "offSetTop", {
            get: function() {
                return this._customData.offSetTop ? this._customData.offSetTop : 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "fontColor", {
            get: function() {
                return this._customData.fontColor ? this._customData.fontColor : "#f0f0f0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "autoScroll", {
            get: function() {
                return null == this._customData.autoScroll || this._customData.autoScroll;
            },
            enumerable: !0,
            configurable: !0
        }), Q.AdIconTxtHeight = 25, Q.AdIconSpaceW = 15, Q.AdIconSpaceH = 1, Q.BorderDiffWidth = 15, Q.BorderDiffHeight = 6, Q.AdAnimationType = f.Roll, Q;
    }(Laya.View),
    b = function(u) {
        function D() {
            return u.call(this) || this;
        }
        return R(D, u), Object.defineProperty(D.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "adContainType", {
            get: function() {
                return E.Guess;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "subType", {
            get: function() {
                return j.Vertical;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), D.prototype.setUnit = function(u, G, A, s) {
            if (void 0 === s && (s = {}), G) {
                this._customData = s;
                var Q = this._customData.verticalCon;
                if (Q || (Q = A), Q) {
                    var z = this._customData.scrollType ? this._customData.scrollType : 0;
                    this.isVertical = 0 == z, this.itemWidth = this._customData.itemWidth ? this._customData.itemWidth : 120, this.itemHeight = this._customData.itemHeight ? this._customData.itemHeight : 120, this.spaceX = this._customData.spaceX ? this._customData.spaceX : 5, this.spaceY = this._customData.spaceY ? this._customData.spaceY : 20, D.AdIconTxtHeight = this.itemHeight / 6, this.realItemHeight = this.needName ? this.itemHeight + D.AdIconTxtHeight : this.itemHeight, console.log("this.realItemHeight", this.realItemHeight), this.clear(), this._pageId = u, this._conData = G, this.panel = new Laya.Panel(), this.panel.width = Q.width, this.panel.height = Q.height, this.addChild(this.panel), this.isVertical ? (this.panel.vScrollBarSkin = "", this.scrollBar = this.panel.vScrollBar) : (this.panel.hScrollBarSkin = "", this.scrollBar = this.panel.hScrollBar), Q.addChild(this), this.onLoadAdIcons();
                }
            }
        }, D.prototype.clear = function() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.timer.clear(this, this.setRollState), Laya.timer.clear(this, this.onLoop), this.clearContents(), this.removeSelf(), this.removeChildren(), this.panel = null, this.graphics.clear();
        }, D.prototype.clearContents = function() {
            if (this.contents) {
                for (var u = this.contents.length, G = 0; G < u; G++) {
                    var A = this.contents[G];
                    bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, A.adId, A.order, A.effectType);
                }
                this.contents = null;
            }
        }, D.prototype.onLoadAdIcons = function() {
            if (this.panel) {
                var u = [];
                this.contents = u;
                for (var G = 0, A = this._conData.contents.length; G < A; G++) {
                    var s = this._conData.contents[G];
                    s && s.resUrl && u.push(s);
                }
                var Q = u.length;
                if (this.isVertical) {
                    var z = Math.floor(this.width / this.itemWidth);
                    z = Math.max(z, 1);
                    var H = this.needBorder ? z + 1 : z - 1,
                        x = z <= 1 ? 0 : (this.width - z * this.itemWidth) / H;
                    for (G = 0; G < Q; G++) {
                        var X = u[G],
                            w = ($ = G - (M = Math.floor(G / z)) * z) * (this.itemWidth + x) + (this.needBorder ? x : 0),
                            d = (this.realItemHeight + this.spaceY) * M;
                        this.addItem(X, w, d);
                    }
                    var T = Math.ceil(Q / z);
                    this.totalOffset = Math.max(0, T * (this.realItemHeight + this.spaceY) - this.spaceY - this.height);
                } else {
                    var _ = Math.floor(this.height / this.realItemHeight);
                    _ = Math.max(_, 1);
                    var B = this.needBorder ? _ + 1 : _ - 1,
                        c = _ <= 1 ? 0 : (this.height - _ * this.realItemHeight) / B;
                    for (G = 0; G < Q; G++) {
                        X = u[G];
                        var $, M = G - ($ = Math.floor(G / _)) * _;
                        w = (this.realItemHeight + this.spaceX) * $, d = M * (this.realItemHeight + c) + (this.needBorder ? c : 0);
                        this.addItem(X, w, d);
                    }
                    var m = Math.ceil(Q / _);
                    this.totalOffset = Math.max(0, m * (this.itemWidth + this.spaceX) - this.spaceX - this.width);
                }
                this.scrollBar.value = 0, this.offset = D.RollValue, this.setRollState();
            }
        }, D.prototype.addItem = function(u, G, A) {
            var s = new Laya.Sprite();
            s.mouseEnabled = !0, s.size(this.itemWidth, this.realItemHeight), s.x = G, s.y = A, this.panel.addChild(s);
            var Q = N.creatAdElement();
            if (this.skinBgItem) {
                var z = new Laya.Image();
                z.size(this.itemWidth, this.realItemHeight), z.sizeGrid = this.itemBgSizeGrid, z.skin = this.skinBgItem, s.addChildAt(z, 0), Q.setData(u, this.itemWidth - 2 * this.itemBgContentWidthOffset, this.itemHeight - 2 * this.itemBgContentHeightOffset, this._pageId, this._conData.containerId), Q.icon.pos(this.itemBgContentWidthOffset, this.itemBgContentHeightOffset);
            } else Q.setData(u, this.itemWidth, this.itemHeight, this._pageId, this._conData.containerId), Q.icon.pos(0, 0);
            if (s.addChild(Q.icon), Q.play(), this.needName) {
                var H = new Laya.Label(),
                    x = Math.floor(this.itemWidth / 6);
                H.font = "SimHei", H.color = this.fontColor, H.align = "center", H.valign = "bottom", H.size(this.itemWidth + x, D.AdIconTxtHeight), H.pos(-.5 * x, this.itemHeight), H.fontSize = Math.floor(H.height), H.overflow = Laya.Text.HIDDEN, H.text = u.adName, s.addChild(H);
            }
            bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, u.adId, u.order, u.effectType);
        }, D.prototype.setRollState = function() {
            this.autoScroll && (0 < this.totalOffset && (this.tempValue = this.scrollBar.value, Laya.timer.clear(this, this.onLoop), Laya.timer.loop(25, this, this.onLoop)), this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown));
        }, D.prototype.onLoop = function() {
            this.tempValue += this.offset;
            var u = Math.floor(this.tempValue);
            this.offset < 0 && u <= 0 ? (u = 0, this.tempValue = 0, this.offset = D.RollValue) : 0 < this.offset && u >= this.totalOffset && (u = this.totalOffset, this.tempValue = this.totalOffset, this.offset = -D.RollValue), this.scrollBar.value = u;
        }, D.prototype.onMouseDown = function() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.timer.clear(this, this.setRollState), Laya.timer.clear(this, this.onLoop), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }, D.prototype.onMouseUp = function() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.scrollBar.stopScroll(), this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.timer.once(1e3, this, this.setRollState);
        }, Object.defineProperty(D.prototype, "needName", {
            get: function() {
                return null != this._customData.needName && this._customData.needName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "fontColor", {
            get: function() {
                return null == this._customData.fontColor ? "#1A1C28" : this._customData.fontColor;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "autoScroll", {
            get: function() {
                return null == this._customData.autoScroll || this._customData.autoScroll;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "needBorder", {
            get: function() {
                return null == this._customData.needBorder || this._customData.needBorder;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "skinBgItem", {
            get: function() {
                return null == this._customData.skinBgItem ? null : this._customData.skinBgItem;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "itemBgSizeGrid", {
            get: function() {
                return null == this._customData.itemBgSizeGrid ? "0,0,0,0,0" : this._customData.itemBgSizeGrid;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "itemBgContentWidthOffset", {
            get: function() {
                return null == this._customData.itemBgContentWidthOffset ? 0 : this._customData.itemBgContentWidthOffset;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(D.prototype, "itemBgContentHeightOffset", {
            get: function() {
                return null == this._customData.itemBgContentHeightOffset ? 0 : this._customData.itemBgContentHeightOffset;
            },
            enumerable: !0,
            configurable: !0
        }), D.RollValue = .4, D.AdIconTxtHeight = 20, D;
    }(Laya.View),
    I = function(u) {
        function X() {
            return u.call(this) || this;
        }
        return R(X, u), Object.defineProperty(X.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "adContainType", {
            get: function() {
                return E.Manual;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "subType", {
            get: function() {
                return 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), X.prototype.setUnit = function(u, G, A, s) {
            G && s.container && (this.clear(), this._pageId = u, this._customData = s, this._container = this._customData.container, this._conData = G, this._contents = this._conData.contents, this.mouseThrough = !0, this.loadAndShow());
        }, X.prototype.clear = function() {
            this._contents && 0 < this._contents.length && this.adTimeHide(), this._conData = null, this._contents = [], this._container = null, this._units = [], this.clearElements(), this.removeSelf(), this.removeChildren(), this.graphics.clear();
        }, X.prototype.setUnitPos = function() {
            if (this._units = [], this._container && this._container.numChildren)
                for (var u = 0; u < this._container.numChildren; u++) {
                    var G = this._container.getChildAt(u);
                    G && -1 != G.name.indexOf("unit") && this._units.push(G);
                }
        }, X.prototype.showAdManual = function() {
            this._container.addChild(this), this.pos(0, 0), this.adTimeShow();
        }, X.prototype.adTimeShow = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adShow(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, X.prototype.adTimeHide = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adHide(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, X.prototype.loadAndShow = function() {
            null != this._conData && (this.removeChildren(), this.setUnitPos(), this.setAdIcons(), this.showAdManual());
        }, X.prototype.setAdIcons = function() {
            this.clearElements();
            for (var u = this.needName ? X.AdIconTxtHeight : 0, G = Math.min(this._units.length, this._contents.length), A = 0; A < G; A++) {
                var s = this._units[A],
                    Q = this._contents[A];
                if (Q && Q.resUrl) {
                    var z = new Laya.Sprite();
                    z.mouseEnabled = !0;
                    var H = N.creatAdElement();
                    if (this._curElements.push(H), H.setData(Q, s.displayWidth, s.displayHeight, this._pageId, this._conData.containerId), H.icon.pos(0, 0), z.addChild(H.icon), H.play(), this.needName) {
                        var x = new Laya.Label();
                        x.font = this.font, x.color = this.fontColor, x.fontSize = this.fontSize, x.align = "center", x.valign = "bottom", x.size(s.displayWidth + 20, u), x.pos(-10, s.displayHeight), x.text = Q.adName, z.addChild(x);
                    }
                    z.size(s.displayWidth, s.displayHeight + u), this.addChild(z), z.pos(s.x, s.y);
                }
            }
        }, X.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(X.prototype, "needName", {
            get: function() {
                return null == this._customData.needName || this._customData.needName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "fontSize", {
            get: function() {
                return this._customData.fontSize ? this._customData.fontSize : 20;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "fontColor", {
            get: function() {
                return this._customData.fontColor ? this._customData.fontColor : "#FFFFFF";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "font", {
            get: function() {
                return this._customData.font ? this._customData.font : "SimHei";
            },
            enumerable: !0,
            configurable: !0
        }), X.AdIconTxtHeight = 25, X;
    }(Laya.View),
    uu = function(u) {
        function w() {
            return u.call(this) || this;
        }
        return R(w, u), Object.defineProperty(w.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "adContainType", {
            get: function() {
                return E.DynamicMenu;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "subType", {
            get: function() {
                return 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "existType", {
            get: function() {
                return U.Local;
            },
            enumerable: !0,
            configurable: !0
        }), w.prototype.setUnit = function(u, G, A, s) {
            G && s.container && (this.clear(), this._pageId = u, this._customData = s, this._parentCon = s.container, this._conData = G, this._contents = this._conData.contents, this.visible = !1, this.mouseThrough = !0, this.loadAndShow());
        }, w.prototype.clear = function() {
            this._conData && this._contents && 0 < this._contents.length && this.adTimeHide(), this._parentCon = null, this._conData = null, this._contents = [], this.clearElements(), this._menuBox && (this._menuBox.removeChildren(), this._menuBox.removeSelf(), this._menuBox = null), this._guessRollPanel && (this._guessRollPanel.off(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._guessRollPanel.off(Laya.Event.MOUSE_UP, this, this.MouseUp), this._guessRollPanel.off(Laya.Event.MOUSE_OUT, this, this.MouseUp), this._guessRollPanel.removeChildren(), this._guessRollPanel.removeSelf(), this._guessRollPanel = null), this.stopRoll(), this._isShow = !1, this._isAutoShow = !1, this._inMove = !1, this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), Laya.timer.clear(this, this.dotEffect), Laya.timer.clear(this, this.autoShowGuess);
        }, w.prototype.menuShowAndHide = function(u) {
            void 0 === u && (u = !1), this._inMove || (this._inMove = !0, this._isShow = !this._isShow && !u, this._isAutoShow = this._isShow, this.movePos(u, this._isShow ? this.containerWidth : 0, 200), this._moreBtn.skin = this._isShow ? this.btnInUrl : this.btnOutUrl, this._mask.visible = this._isShow, this._dot.visible = !this._isShow, this._isShow ? (this.adTimeShow(), this.setMenuBox(), Laya.timer.clear(this, this.autoShowGuess)) : (this.adTimeHide(), Laya.timer.loop(this.autoShowCD, this, this.autoShowGuess)));
        }, w.prototype.autoShowGuess = function() {
            Laya.timer.clear(this, this.autoShowGuess), this._inMove || this._isShow || this._isAutoShow ? Laya.timer.loop(this.autoShowCD, this, this.autoShowGuess) : (this._inMove = !0, this._isAutoShow = !0, this.movePos(!1, this._guessWidth, 100), this.setGuessBox());
        }, w.prototype.movePos = function(u, G, A) {
            if (u) this._conBox.x = G, this._inMove = !1, this.visible = !0;
            else var s = Laya.Tween.to(this._conBox, {
                x: G
            }, A, Laya.Ease.sineInOut, laya.utils.Handler.create(this, function() {
                this._inMove = !1, this.visible = !0, s.clear(), s = null;
            }));
        }, w.prototype.adTimeShow = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adShow(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, w.prototype.adTimeHide = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adHide(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, w.prototype.dotEffect = function() {
            this._dot && this._dot.scale(2.1 - this._dot.scaleX, 2.1 - this._dot.scaleY);
        }, w.prototype.calcIconSize = function() {
            this._adIconWidth = (this.containerWidth - (this.layoutStyle.x + 1) * w.AdIconSpaceW - 2 * w.BorderDiff) / this.layoutStyle.x, this._adIconHeight = this._adIconWidth, this._containerHeight = this._adIconHeight * this.layoutStyle.y + (this.layoutStyle.y + 1) * w.AdIconSpaceH + this.layoutStyle.y * w.AdIconTxtHeight + 2 * w.BorderDiff, this._guessWidth = this._adIconWidth + 2 * w.BorderDiff;
        }, w.prototype.setMenuLayout = function() {
            this.size(Laya.stage.width + 10, Laya.stage.height + 10), this.pos(-5, -5), this._mask = new Laya.Sprite(), this._mask.size(this.width, this.height), this._mask.pos(0, 0), this._mask.visible = !0, this._mask.graphics.drawRect(0, 0, this._mask.width, this._mask.height, "#000000"), this._mask.alpha = .5, this._mask.name = w.MaskName, this._mask.mouseEnabled = !0, this._mask.mouseThrough = !1, this.addChildAt(this._mask, 0), this._conBox = new Laya.Box(), this._conBox.size(100, this._containerHeight), this._conBox.name = "conBox", this._conBox.mouseThrough = !0, this.addChildAt(this._conBox, 1), this._menuBox = this.createAdBox(this.containerWidth, this._containerHeight), this._menuBox.name = "menuBox", this._conBox.addChild(this._menuBox), this._guessBox = this.createAdBox(this._guessWidth, this._containerHeight), this._guessBox.name = "guessBox", this._conBox.addChild(this._guessBox), this._moreBtn = new Laya.Button(), this._moreBtn.stateNum = 1, this._moreBtn.mouseEnabled = !0, this._moreBtn.mouseThrough = !1, this._moreBtn.name = w.MoreName, this._moreBtn.skin = this.btnOutUrl, this._moreBtn.pos(0, this.btnY), this._conBox.addChild(this._moreBtn), this._dot = new Laya.Image(), this._dot.mouseEnabled = !1, this._dot.skin = this.dotUrl, this._dot.anchorX = .5, this._dot.anchorY = .5, this._dot.pos(this._moreBtn.width, 0), this._moreBtn.addChild(this._dot), Laya.timer.loop(200, this, this.dotEffect);
        }, w.prototype.createAdBox = function(u, G) {
            var A = new Laya.Box();
            A.size(u, G), A.pos(-1 * A.width, 0), A.mouseThrough = !0;
            var s = new Laya.Image();
            return s.size(A.width, A.height), s.pos(0, 0), s.name = "boxBg", s.skin = this.bgUrl, s.sizeGrid = this.bgSizeGrid, A.addChildAt(s, 0), A;
        }, w.prototype.setUnitPos = function() {
            this.calcIconSize(), this.setMenuLayout(), this._parentCon.addChildAt(this, this._parentCon.numChildren), this._conBox.centerX = void 0, this._conBox.centerY = void 0, this._conBox.left = void 0, this._conBox.right = void 0, this._conBox.top = void 0, this._conBox.bottom = void 0, this._customData.pos ? (this._conBox.x = this._customData.pos.x, this._conBox.y = this._customData.pos.y, this._conBox.left = this._customData.pos.left, this._conBox.right = this._customData.pos.right, this._conBox.top = this._customData.pos.top, this._conBox.bottom = this._customData.pos.bottom, this._conBox.centerX = this._customData.pos.centerX, this._conBox.centerY = this._customData.pos.centerY) : (this._conBox.left = 0, this._conBox.centerY = 0), this.on(Laya.Event.CLICK, this, this.onClick);
        }, w.prototype.onClick = function(u) {
            var G = u.target.name;
            this._conData && (G != w.MoreName && G != w.MaskName || this.menuShowAndHide(!1));
        }, w.prototype.loadAndShow = function() {
            this.loadBg();
        }, w.prototype.loadBg = function() {
            var u = [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.dotUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnOutUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnInUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, w.prototype.onLoadBgRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, w.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, w.prototype.onLoadAdIcons = function() {
            null != this._parentCon && null != this._conData && (this.clearElements(), this.createAdElements(), this.menuShowAndHide(!0));
        }, w.prototype.setMenuBox = function() {
            this._menuBox.visible = !0, this._guessBox.visible = !1;
            for (var u = 0, G = 0; G < this._curElements.length; G++) {
                var A = this._curElements[G],
                    s = "adSp_" + G,
                    Q = void 0;
                if (this._menuBox.getChildByName(s)) Q = this._menuBox.getChildByName(s);
                else {
                    (Q = this.createAdSp(A)).name = s;
                    var z = u % this.layoutStyle.x,
                        H = Math.floor(u / this.layoutStyle.x);
                    Q.x = w.BorderDiff + w.AdIconSpaceW + z * (w.AdIconSpaceW + Q.width), Q.y = w.BorderDiff + w.AdIconSpaceH + H * (w.AdIconSpaceH + Q.height), this._menuBox.addChild(Q);
                }
                Q.addChild(A.icon), A.play(), u++;
            }
        }, w.prototype.setGuessBox = function() {
            this._guessBox.visible = !0, this._menuBox.visible = !1, this._guessRollPanel || (this._guessRollPanel = new Laya.Panel(), this._guessRollPanel.pos(w.BorderDiff, w.BorderDiff), this._guessRollPanel.size(this._guessBox.width - 2 * w.BorderDiff, this._guessBox.height - 2 * w.BorderDiff), this._guessBox.addChild(this._guessRollPanel), this._guessRollPanel.vScrollBarSkin = "", this._guessRollPanel.vScrollBar.changeHandler = new Laya.Handler(this, this.onRollChange), this._guessRollPanel.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._guessRollPanel.on(Laya.Event.MOUSE_UP, this, this.MouseUp), this._guessRollPanel.on(Laya.Event.MOUSE_OUT, this, this.MouseUp));
            for (var u = 0; u < this._curElements.length; u++) {
                var G = this._curElements[u],
                    A = "adSp_" + u,
                    s = void 0;
                if (this._guessRollPanel.getChildByName(A) ? s = this._guessRollPanel.getChildByName(A) : ((s = this.createAdSp(G)).name = A, s.x = 0, s.y = w.AdIconSpaceH + u * (w.AdIconSpaceH + s.height), this._guessRollPanel.addChild(s)), s.addChild(G.icon), G.play(), u + 1 == this._curElements.length && !this._guessRollPanel.getChildByName("extSp")) {
                    var Q = new Laya.Sprite();
                    Q.name = "extSp", Q.size(w.AdIconSpaceW, w.AdIconSpaceH), Q.pos(0, s.y + s.height), this._guessRollPanel.addChild(Q);
                }
            }
            if (this._curElements.length > this.layoutStyle.y) {
                var z = this._guessRollPanel.getChildAt(this.layoutStyle.y - 1),
                    H = z.y + z.height,
                    x = this._guessRollPanel.getChildAt(this._curElements.length - 1),
                    X = x.y + x.height;
                this._rollValueMax = X - H, this._rollValue = 0, this._guessRollPanel.vScrollBarSkin = "", this._guessRollPanel.vScrollBar.setScroll(0, this._rollValueMax, this._rollValue), this.startRoll();
            }
        }, w.prototype.MouseDown = function() {
            this.stopRoll();
        }, w.prototype.MouseUp = function() {
            this.startRoll(), this._guessRollPanel.vScrollBar.stopScroll();
        }, w.prototype.onRollChange = function(u) {
            this._rollValue = u;
        }, w.prototype.startRoll = function() {
            Laya.timer.clear(this, this.onAdRoll), Laya.timer.frameLoop(1, this, this.onAdRoll);
        }, w.prototype.stopRoll = function() {
            Laya.timer.clear(this, this.onAdRoll);
        }, w.prototype.onAdRoll = function() {
            var u = Math.min(1, B.AdRollPerMs * Laya.timer.delta);
            this._rollValue >= this._rollValueMax ? this._rollInterval = -1 : this._rollValue <= 0 && (this._rollInterval = 1), u = this._rollInterval * u, this._rollValue = Math.min(this._rollValueMax, this._rollValue + u), this._rollValue = Math.max(0, this._rollValue), this._guessRollPanel.vScrollBar.setScroll(0, this._rollValueMax, this._rollValue);
        }, w.prototype.createAdSp = function(u) {
            var G = new Laya.Sprite();
            G.mouseEnabled = !0;
            var A = new Laya.Label();
            return A.font = this.font, A.color = this.fontColor, A.fontSize = this.fontSize, A.align = "center", A.valign = "bottom", A.size(this._adIconWidth + 20, w.AdIconTxtHeight), A.pos(-10, this._adIconHeight), A.text = u.content.adName, G.addChild(A), G.size(this._adIconWidth, this._adIconHeight + w.AdIconTxtHeight), G;
        }, w.prototype.createAdElements = function() {
            for (var u = Math.min(this.layoutStyle.x * this.layoutStyle.y, this._contents.length), G = 0; G < u; G++) {
                var A = this._contents[G];
                if (A && A.resUrl) {
                    var s = N.creatAdElement();
                    this._curElements.push(s), s.setData(A, this._adIconWidth, this._adIconHeight, this._pageId, this._conData.containerId), s.icon.pos(0, 0);
                }
            }
        }, w.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(w.prototype, "containerWidth", {
            get: function() {
                return this._customData.containerWidth ? this._customData.containerWidth : Laya.stage.width * (2 / 3);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "btnY", {
            get: function() {
                return this._customData.btnY ? this._customData.btnY : 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "btnOutUrl", {
            get: function() {
                return this._customData.btnOutSkin ? this._customData.btnOutSkin : B.HOST + "AdDynamicMenu/btnOut.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "btnInUrl", {
            get: function() {
                return this._customData.btnInSkin ? this._customData.btnInSkin : B.HOST + "AdDynamicMenu/btnIn.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "dotUrl", {
            get: function() {
                return this._customData.dotSkin ? this._customData.dotSkin : B.HOST + "AdDynamicMenu/imgDot.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "bgUrl", {
            get: function() {
                return this._customData.bgSkin ? this._customData.bgSkin : B.HOST + "AdDynamicMenu/imgBg.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "bgSizeGrid", {
            get: function() {
                return this._customData.bgSizeGrid ? this._customData.bgSizeGrid : "10,10,10,10,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "layoutStyle", {
            get: function() {
                return this._customData.layoutStyle ? this._customData.layoutStyle : new Laya.Point(3, 4);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "autoShowCD", {
            get: function() {
                return this._customData.autoShowCD ? this._customData.autoShowCD : 1e4;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "fontSize", {
            get: function() {
                return this._customData.fontSize ? this._customData.fontSize : 18;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "fontColor", {
            get: function() {
                return this._customData.fontColor ? this._customData.fontColor : "#FFFFFF";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w.prototype, "font", {
            get: function() {
                return this._customData.font ? this._customData.font : "SimHei";
            },
            enumerable: !0,
            configurable: !0
        }), w.AdIconTxtHeight = 25, w.AdIconSpaceW = 25, w.AdIconSpaceH = 25, w.BorderDiff = 10, w.MoreName = "MoreImg", w.MaskName = "MaskBg", w;
    }(Laya.View),
    Gu = function() {
        function u() {}
        return u.createAdUnit = function(u, G) {
            switch (u) {
                case E.Single:
                    return new a();
                case E.Menu:
                    return this.createAdMenu(G);
                case E.Guess:
                    return this.createAdGuess(G);
                case E.Pendant:
                    return new h();
                case E.Manual:
                    return new I();
                case E.DynamicMenu:
                    return new uu();
                case E.PlayGame:
                case E.More:
                case E.BannerGuess:
                case E.Box:
                case E.Backup:
                case E.VideoAd:
                case E.FullScreen:
                case E.CustomizedBanner:
                    throw new Error("不用主动创建实例: " + u);
            }
        }, u.createAdMenu = function(u) {
            switch (u) {
                case y.Origin:
                    return new e();
                case y.NewVersion:
                    return new Z();
                default:
                    throw new Error("未知Menu类型: " + u);
            }
        }, u.createAdGuess = function(u) {
            switch (u) {
                case j.Horizontal:
                    return new K();
                case j.Vertical:
                    return new b();
                default:
                    throw new Error("未知Guess类型: " + u);
            }
        }, u;
    }(),
    Au = function() {
        function Q() {
            this._pageData = [], this._customPropertys = [], this._adUnitPool = [], this._adUnitList = [];
        }
        return Q.prototype.parseServerData = function(u, G) {
            this._pageData[u] = G ? S.parseData(G.list) : [];
        }, Q.prototype.getPageConfig = function(u) {
            return this._pageData[u];
        }, Q.prototype.setCustomProperty = function(u, G) {
            this._customPropertys[u] = G || [];
        }, Q.prototype.getCustomProperty = function(u, G) {
            var A = this._customPropertys[u];
            if (!A) return {};
            var s = A["" + Q.AdContainKeys[G]];
            return s || {};
        }, Q.prototype.createAdUnit = function(u, G) {
            void 0 === G && (G = 0);
            for (var A = null, s = this._adUnitPool.length - 1; 0 <= s; s--)
                if (this._adUnitPool[s].adContainType == u && this._adUnitPool[s].subType == G) {
                    A = this._adUnitPool[s], this._adUnitPool.splice(s, 1);
                    break;
                }
            return A || (A = Gu.createAdUnit(u, G)), this._adUnitList.push(A), A;
        }, Q.prototype.removeAllAdUnitByPage = function(u) {
            for (var G, A = this._adUnitList.length; 0 <= A; A--)(G = this._adUnitList[A]) && G.pageId == u && (G.clear(), this._adUnitList.splice(A, 1), this._adUnitPool.push(G));
        }, Q.prototype.getCurPageAdContainerByType = function(u, G) {
            var A = this.getPageConfig(u),
                s = [];
            if (A)
                for (var Q = 0; Q < A.length; Q++) A[Q] && A[Q].containerType == G && s.push(A[Q]);
            return s;
        }, Q.AdContainKeys = ["Single", "Single", "Single", "Single", "Menu", "Guess", "PlayGame", "More", "BannerGuess", "Box", "Backup", "Pendant", "VideoAd", "FullScreen", "CustomizedBanner", "Manual", "DynamicMenu"], Q;
    }(),
    su = function(u) {
        function x() {
            return u.call(this) || this;
        }
        return R(x, u), Object.defineProperty(x.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), x.prototype.show = function() {
            this._showGuess || (this._showGuess = !0, this.doShowGuess());
        }, x.prototype.hide = function() {
            this._showGuess = !1, this.doShowGuess();
        }, x.prototype.dispose = function() {
            this.clear(), this.removeSelf();
        }, x.prototype.doShowGuess = function() {
            var G = this;
            if (this.visible = this._showGuess && this._loadGuess, this.visible) {
                var A = bu.AdShowTime.instance;
                this._curContents.forEach(function(u) {
                    A.adShow(G._pageId, G._conData.containerId, u.adId, u.order, u.effectType);
                });
            }
        }, x.prototype.setUnit = function(u, G) {
            G && (this.clear(), this._pageId = u, this._showGuess = !1, this._loadGuess = !1, this.visible = !1, this.mouseThrough = !0, this._conData = G, this._contents = this._conData.contents, this._showCount = 0, x.AdIconTxtHeight = this.needName ? x.AdIconTxtHeight : 0, this.loadAndShow());
        }, x.prototype.clear = function() {
            this._iconPanel && (this._iconPanel.off(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._iconPanel.off(Laya.Event.MOUSE_UP, this, this.MouseUp), this._iconPanel.off(Laya.Event.MOUSE_OUT, this, this.MouseUp), this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), this.stopRoll(), Laya.timer.clear(this, this.onAdSwitch), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._conData = null, this._contents = [], this._curContents = [];
        }, x.prototype.setMenuLayout = function() {
            this._bg = new Laya.Image(), this._bg.name = "menubg", this._bg.skin = this.bgUrl, this._bg.sizeGrid = this.bgSizeGrid, this._bg.pos(0, 0), this.addChild(this._bg), this._bg.width = this.containerWidth, this._bg.height = this.containerHeight, this.size(this._bg.width, this._bg.height), x.AdIconWidth = (this._bg.width - 2 * x.BorderDiff - (this.iconNum + 1) * x.AdIconSpaceW - this.offSetLeft) / this.iconNum, x.AdIconHeight = this._bg.height - 2 * x.BorderDiff - 2 * x.AdIconSpaceH - this.offSetTop - x.AdIconTxtHeight;
            var u = Math.min(x.AdIconWidth, x.AdIconHeight),
                G = x.AdIconWidth - u;
            x.AdIconWidth = x.AdIconHeight = u, 0 < G ? x.AdIconSpaceW = (this._bg.width - 2 * x.BorderDiff - this.offSetLeft - this.iconNum * x.AdIconWidth) / (this.iconNum + 1) : x.AdIconSpaceH = (this._bg.height - 2 * x.BorderDiff - x.AdIconHeight - this.offSetTop - x.AdIconTxtHeight) / 2;
        }, x.prototype.setUnitPos = function() {
            this.setMenuLayout(), Laya.stage.addChild(this), this.zOrder = 1100, this.centerX = void 0, this.centerY = void 0, this.left = void 0, this.right = void 0, this.top = void 0, this.bottom = void 0, x.CustomData.pos ? (this.left = x.CustomData.pos.left, this.top = x.CustomData.pos.top, this.centerX = x.CustomData.pos.centerX, this.bottom = x.CustomData.pos.bottom) : (this.centerX = 0, this.bottom = 0);
        }, x.prototype.loadAndShow = function() {
            this.loadBg();
        }, x.prototype.loadBg = function() {
            var u = [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, x.prototype.onLoadBgRes = function() {
            null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, x.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, x.prototype.onLoadAdIcons = function() {
            if (this._pageId == vu.curPageId && null != this._conData) switch (this._iconPanel || (this._iconPanel = new Laya.Panel(), this._iconPanel.pos(this._bg.x + x.BorderDiff + this.offSetLeft, this._bg.y + x.BorderDiff + this.offSetTop), this._iconPanel.size(this._bg.width - 2 * x.BorderDiff - this.offSetLeft, this._bg.height - 2 * x.BorderDiff - this.offSetTop), this.addChild(this._iconPanel)), this._iconPanel.removeChildren(), this.clearElements(), x.AdAnimationType) {
                case f.Switch:
                    this.showSwitchAd();
                    break;
                case f.Roll:
                    this.showRollAd();
            }
        }, x.prototype.showRollAd = function() {
            if (this._curContents = this._contents.concat(), this.adIconLayout(), this._loadGuess = !0, this.doShowGuess(), this._curContents.length > this.iconNum) {
                var u = this._iconPanel.getChildAt(this.iconNum - 1),
                    G = u.x + u.width,
                    A = this._iconPanel.getChildAt(this._curContents.length - 1),
                    s = A.x + A.width;
                this._rollValueMax = s - G + x.AdIconSpaceW, this._rollValue = 0, this._iconPanel.hScrollBarSkin = "", this._iconPanel.hScrollBar.setScroll(0, this._rollValueMax, this._rollValue), this._iconPanel.hScrollBar.changeHandler = new Laya.Handler(this, this.onRollChange), this._iconPanel.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown), this._iconPanel.on(Laya.Event.MOUSE_UP, this, this.MouseUp), this._iconPanel.on(Laya.Event.MOUSE_OUT, this, this.MouseUp), this.startRoll();
            }
        }, x.prototype.MouseDown = function() {
            this.stopRoll();
        }, x.prototype.MouseUp = function() {
            this.startRoll(), this._iconPanel.hScrollBar.stopScroll();
        }, x.prototype.onRollChange = function(u) {
            this._rollValue = u;
        }, x.prototype.startRoll = function() {
            Laya.timer.clear(this, this.onAdRoll), Laya.timer.frameLoop(1, this, this.onAdRoll);
        }, x.prototype.stopRoll = function() {
            Laya.timer.clear(this, this.onAdRoll);
        }, x.prototype.onAdRoll = function() {
            var u = Math.min(1, B.AdRollPerMs * Laya.timer.delta);
            this._rollValue >= this._rollValueMax ? this._rollInterval = -1 : this._rollValue <= 0 && (this._rollInterval = 1), u = this._rollInterval * u, this._rollValue = Math.min(this._rollValueMax, this._rollValue + u), this._rollValue = Math.max(0, this._rollValue), this._iconPanel.hScrollBar.setScroll(0, this._rollValueMax, this._rollValue);
        }, x.prototype.showSwitchAd = function() {
            this._curContents = [], this._contents.length > this.iconNum ? (Laya.timer.once(B.AdSwitchTime, this, this.onAdSwitch), this._curContents = this.getShowContents()) : this._curContents = this._curContents.concat(this._contents), this.adIconLayout(), this._loadGuess = !0, this.doShowGuess();
        }, x.prototype.adIconLayout = function() {
            for (var u = 0; u < this._curContents.length; u++) {
                var G = this._curContents[u];
                if (G && G.resUrl) {
                    var A = new Laya.Sprite();
                    A.mouseEnabled = !0;
                    var s = N.creatAdElement();
                    if (this._curElements.push(s), s.setData(G, x.AdIconWidth, x.AdIconHeight, this._pageId, this._conData.containerId), s.icon.pos(0, 0), A.addChild(s.icon), s.play(), this.needName) {
                        var Q = new Laya.Label(),
                            z = .7 * x.AdIconSpaceW;
                        Q.font = "SimHei", Q.color = this.fontColor, Q.align = "center", Q.valign = "bottom", Q.size(x.AdIconWidth + z, x.AdIconTxtHeight), Q.fontSize = 20 * Q.width / 120, Q.pos(-.5 * z, x.AdIconHeight), Q.overflow = Laya.Text.HIDDEN, Q.text = G.adName, A.addChild(Q);
                    }
                    if (A.size(x.AdIconWidth, x.AdIconHeight + x.AdIconTxtHeight), A.x = x.AdIconSpaceW + u * (x.AdIconSpaceW + A.width), A.y = x.AdIconSpaceH, this._iconPanel.addChild(A), u + 1 == this._contents.length) {
                        var H = new Laya.Sprite();
                        H.size(x.AdIconSpaceW, x.AdIconSpaceH), H.pos(A.x + A.width, A.y), this._iconPanel.addChild(H);
                    }
                }
            }
        }, x.prototype.onAdSwitch = function() {
            Laya.timer.clear(this, this.onAdSwitch), this.onLoadAdIcons();
        }, x.prototype.getShowContents = function() {
            for (var u = [], G = 0; G < this.iconNum; G++) u.push(this._contents[this._showCount]), this._showCount = ++this._showCount % this._contents.length;
            return u;
        }, x.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, G.adId, G.order, G.effectType), N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(x.prototype, "isDefauleBg", {
            get: function() {
                return this.bgUrl == B.HOST + "guessbg4.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "needName", {
            get: function() {
                return !x.CustomData.needName || x.CustomData.needName;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "bgUrl", {
            get: function() {
                return x.CustomData.bgSkin ? x.CustomData.bgSkin : B.HOST + "guessbg4.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "bgSizeGrid", {
            get: function() {
                return x.CustomData.bgSizeGrid && x.CustomData.bgSkin ? x.CustomData.bgSizeGrid : "0,100,0,100,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "iconNum", {
            get: function() {
                return x.CustomData.iconNum ? x.CustomData.iconNum : 5;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "containerWidth", {
            get: function() {
                return this.isDefauleBg ? Laya.stage.width : x.CustomData.containerWidth ? x.CustomData.containerWidth : Laya.stage.width;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "containerHeight", {
            get: function() {
                return x.CustomData.containerHeight ? x.CustomData.containerHeight : 180;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "offSetLeft", {
            get: function() {
                return x.CustomData.offSetLeft ? x.CustomData.offSetLeft : 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "offSetTop", {
            get: function() {
                return x.CustomData.offSetTop ? x.CustomData.offSetTop : 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(x.prototype, "fontColor", {
            get: function() {
                return x.CustomData.fontColor ? x.CustomData.fontColor : "#f0f0f0";
            },
            enumerable: !0,
            configurable: !0
        }), x.CustomData = {}, x.AdIconWidth = 80, x.AdIconHeight = 80, x.AdIconTxtHeight = 34, x.AdIconSpaceW = 23, x.AdIconSpaceH = 8, x.BorderDiff = 5, x.AdAnimationType = f.Roll, x;
    }(Laya.View),
    Qu = function() {
        function X(u) {
            this._adUnitId = u, this._adIntervals = 60, this._loaded = !1, this._showing = !1, this._bannerMark = 0;
        }
        return Object.defineProperty(X.prototype, "adUnitId", {
            get: function() {
                return this._adUnitId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "loaded", {
            get: function() {
                return this._loaded;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(X.prototype, "destoryed", {
            get: function() {
                return !this._bannerAd;
            },
            enumerable: !0,
            configurable: !0
        }), X.prototype.create = function(u, s, G, A, Q, z, H) {
            var x = this;
            void 0 === G && (G = 0), void 0 === A && (A = 0), void 0 === Q && (Q = 0), void 0 === z && (z = new Laya.Point(720, 1440)), void 0 === H && (H = 60), Laya.Browser.window.wx && wx.createBannerAd && (this._adIntervals = H, this._systemInfo = wx.getSystemInfoSync(), this._left = G * this.getScale(), this._top = A * this.getScale(), u = u / z.x * this._systemInfo.screenWidth, s = s / z.y * this._systemInfo.screenHeight, Q = Q / Laya.stage.height * this._systemInfo.screenHeight, this._bannerAd = wx.createBannerAd({
                adUnitId: this._adUnitId,
                adIntervals: this._adIntervals,
                style: {
                    left: G,
                    top: A,
                    width: u
                }
            }), this._bannerAd.onLoad(function() {
                console.log("banner 广告加载成功"), x._loaded = !0, x.refreshBannerMark(!0), X.bannerLoadCallback && X.bannerLoadCallback.runWith({
                    load: !0
                }), x._showing || x._bannerAd.hide();
            }), this._bannerAd.onError(function(u) {
                console.log("banner 广告加载失败", u), x._loaded = !1, x.refreshBannerMark(!1), X.bannerLoadCallback && X.bannerLoadCallback.runWith({
                    load: !1
                });
            }), this._bannerAd.onResize(function(u) {
                var G = Math.min(Q, s, u.height);
                if (G < u.height) {
                    var A = G * u.width / u.height;
                    x._bannerAd.style.width = 300 <= A ? A : x._systemInfo.screenWidth;
                }
                x.setBannerPos(u.width, u.height);
            }));
        }, X.prototype.setBannerPos = function(u, G) {
            var A = 0 == this._top ? this._systemInfo.screenHeight : this._top;
            A = this._systemInfo && -1 != this._systemInfo.model.indexOf("iPhone X") ? Math.min(A, this._systemInfo.screenHeight - G - 12) : Math.min(A, this._systemInfo.screenHeight - G), this._bannerAd.style.top = Math.ceil(A), 0 == this._left ? this._bannerAd.style.left = (this._systemInfo.screenWidth - u) / 2 : this._bannerAd.style.left = this._left;
        }, X.prototype.forceResize = function() {}, X.prototype.getScale = function() {
            return wx.getSystemInfoSync().windowHeight / Laya.stage.height;
        }, X.prototype.show = function(u, G) {
            void 0 === u && (u = 0), void 0 === G && (G = 0), this._bannerAd && (u *= this.getScale(), G *= this.getScale(), this._left == u && this._top == G || (this._left = u, this._top = G, this.forceResize()), this._showing = !0, this.refreshBannerMark(!1), this._bannerAd.show());
        }, X.prototype.hide = function() {
            this._bannerAd && (this._showing = !1, this._bannerAd.hide());
        }, X.prototype.destroy = function() {
            this._bannerAd && (this._bannerAd.destroy(), this._bannerAd = null);
        }, X.prototype.refreshBannerMark = function(u) {
            this._showing && this._loaded ? (0 == this._bannerMark || u) && (this._bannerMark = Date.now()) : this._bannerMark = 0, console.log("bannerMark", this._bannerMark);
        }, X.prototype.needRefresh = function() {
            return !(!this._bannerAd || 0 == this._bannerMark) && Date.now() - this._bannerMark >= 1e3 * this._adIntervals;
        }, X;
    }(),
    zu = function() {
        function u(u) {
            this._loaded = !0, this._adUnitId = u;
        }
        return Object.defineProperty(u.prototype, "adUnitId", {
            get: function() {
                return this._adUnitId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "loaded", {
            get: function() {
                return this._loaded;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.create = function(u, s, G, A, Q, z, H) {
            var x = this;
            void 0 === G && (G = 0), void 0 === A && (A = 0), void 0 === Q && (Q = 0), void 0 === z && (z = new Laya.Point(720, 1440)), void 0 === H && (H = 6e4), Laya.Browser.window.wx && wx.createGridAd && (this._systemInfo = wx.getSystemInfoSync(), this._left = G * this.getScale(), this._top = A * this.getScale(), u = u / z.x * this._systemInfo.screenWidth, s = s / z.y * this._systemInfo.screenHeight, Q = Q / Laya.stage.height * this._systemInfo.screenHeight, this._gridAd = wx.createGridAd({
                adUnitId: this._adUnitId,
                adIntervals: H,
                adTheme: "black",
                gridCount: 5,
                style: {
                    left: G,
                    top: A,
                    width: u
                }
            }), this._gridAd.onLoad(function() {
                console.log("grid 广告加载成功"), x._loaded = !0;
            }), this._gridAd.onError(function(u) {
                console.log("grid 广告加载失败", u), x._loaded = !1;
            }), this._gridAd.onResize(function(u) {
                var G = Math.min(Q, s, u.height);
                if (G < u.height) {
                    var A = G * x._gridAd.style.realWidth / x._gridAd.style.realHeight;
                    x._gridAd.style.height = 300 <= A ? (x._gridAd.style.width = A, G) : (x._gridAd.style.width = x._systemInfo.screenWidth, u.width * (x._systemInfo.screenHeight / x._systemInfo.screenWidth));
                }
                x.setGridPos();
            }));
        }, u.prototype.setGridPos = function() {
            var u = 0 == this._top ? this._systemInfo.screenHeight : this._top;
            u = this._systemInfo && -1 != this._systemInfo.model.indexOf("iPhone X") ? Math.min(u, this._systemInfo.screenHeight - this._gridAd.style.realHeight - 12) : Math.min(u, this._systemInfo.screenHeight - this._gridAd.style.realHeight), this._gridAd.style.top = Math.ceil(u), 0 == this._left ? this._gridAd.style.left = (this._systemInfo.screenWidth - this._gridAd.style.realWidth) / 2 : this._gridAd.style.left = this._left;
        }, u.prototype.forceResize = function() {
            if (this._gridAd && this._gridAd.style) {
                var u = this._systemInfo.screenWidth - 300,
                    G = 300 + Math.random() * u;
                this._gridAd.style.width = G;
            }
        }, u.prototype.getScale = function() {
            return wx.getSystemInfoSync().windowHeight / Laya.stage.height;
        }, u.prototype.show = function(u, G) {
            void 0 === u && (u = 0), void 0 === G && (G = 0), this._gridAd && (u *= this.getScale(), G *= this.getScale(), this._left == u && this._top == G || (this._left = u, this._top = G, this.forceResize()), this._gridAd.show());
        }, u.prototype.hide = function() {
            this._gridAd && this._gridAd.hide();
        }, u.prototype.destroy = function() {
            this._gridAd && this._gridAd.destroy();
        }, u;
    }(),
    Hu = function(u) {
        function G() {
            return u.call(this) || this;
        }
        return R(G, u), Object.defineProperty(G.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.show = function() {
            this._showFlag || (this._showFlag = !0, this.checkShow());
        }, G.prototype.hide = function() {
            this._showFlag = !1, this.checkShow();
        }, G.prototype.checkShow = function() {
            this.visible = this._showFlag && this._loadFlag, this.visible ? this._adElement && bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType) : this._adElement && bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType);
        }, G.prototype.dispose = function() {
            this.clear();
        }, G.prototype.setUnit = function(u, G, A, s, Q, z) {
            if (void 0 === Q && (Q = 0), void 0 === z && (z = 0), G) {
                this.clear(), this._contentIdx = -1, this._pageId = u, this._showFlag = !1, this._loadFlag = !1, this.visible = !1, this.mouseEnabled = !0, this.mouseThrough = !1, this._conData = G, this._contents = this._conData.contents;
                var H = s / A.y * Laya.stage.height;
                this.height = Math.min(H, this._conData.conHeight), this.height < this._conData.conHeight ? this.width = this.height / this._conData.conHeight * this._conData.conWidth : this.width = this._conData.conWidth, this.setUnitPos(Q, z), this.loadAndShow();
            }
        }, G.prototype.clear = function() {
            this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._adElement && (bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType), N.recoverAdElement(this._adElement), this._adElement = null), Laya.timer.clear(this, this.onAdEnd), this._conData = null, this._curContentData = null, this._contents = [];
        }, G.prototype.setUnitPos = function(u, G) {
            void 0 === u && (u = 0), void 0 === G && (G = 0), Laya.stage.addChild(this), this.zOrder = 1100, this.x = void 0, this.y = void 0, this.centerX = void 0, this.centerY = void 0, this.left = void 0, this.right = void 0, this.top = void 0, this.bottom = void 0, 0 == u && 0 == G ? (this.centerX = 0, this.bottom = 0) : (this.left = u, this.top = G);
        }, G.prototype.onClick = function() {
            this.loadAndShow();
        }, G.prototype.loadAndShow = function() {
            Laya.timer.clear(this, this.onAdEnd);
            for (var u, G = 0; G < this._contents.length && (this._contentIdx = (this._contentIdx + 1) % this._contents.length, !(u = this._contents[this._contentIdx]));) G++;
            G < this._contents.length && (this._curContentData && u.adId == this._curContentData.adId || (this._curContentData = u, Y.load(this._curContentData.resUrls, laya.utils.Handler.create(this, this.onLoadRes))));
        }, G.prototype.onLoadRes = function() {
            this._pageId == vu.curPageId && null != this._conData && (this._loadFlag = !0, this._adElement ? bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, this._adElement.adId, this._adElement.order, this._adElement.effectType) : this._adElement = N.creatAdElement(), this.removeChildren(), this._adElement.setData(this._curContentData, this.width, this.height, this._pageId, this._conData.containerId, !0, laya.utils.Handler.create(this, this.onClick, null, !1)), this.addChild(this._adElement.icon), this._adElement.play(), this.checkShow(), Laya.timer.once(1e3 * this._curContentData.showTime, this, this.onAdEnd));
        }, G.prototype.onAdEnd = function(u) {
            this.loadAndShow();
        }, G;
    }(Laya.View),
    xu = function() {
        function u() {}
        return u.prototype.initBanner = function(u, G, A, s, Q, z, H, x, X) {
            void 0 === u && (u = 650), void 0 === G && (G = 220), void 0 === A && (A = 0), void 0 === s && (s = 0), void 0 === Q && (Q = 6e4), void 0 === z && (z = 0), void 0 === H && (H = new Laya.Point(720, 1440)), void 0 === X && (X = !0), this._bannerList = [], this._bannerShowFlag = !0, this._styleWidth = u, this._styleHeight = G, this._styleLeft = A, this._styleTop = s, this._interval = Math.floor(Math.max(3e4, Q) / 1e3), this._fixedHeight = 0 == z ? G : z, this._designStyle = H, this._iphoneXEnable = X, su.CustomData = x || {}, su.CustomData.containerWidth = su.CustomData.containerWidth || u, su.CustomData.containerHeight = su.CustomData.containerHeight || G, su.CustomData.pos = 0 == s && 0 == A ? {
                centerX: 0,
                bottom: 0
            } : {
                top: s,
                left: A
            }, Qu.bannerLoadCallback = laya.utils.Handler.create(this, this.bannerCallback, null, !1);
        }, u.prototype.bannerCallback = function(u) {
            if (u && 1 == u.load) this.removeBackup();
            else {
                if (!this._bannerShowFlag || this._curAd && this._curAd.loaded) return;
                this._curBackupData && vu.CustomAdEnable ? this.showBackup() : this.showWxGrid();
            }
        }, u.prototype.setPageBanner = function(u, G, A) {
            void 0 === u && (u = ""), void 0 === G && (G = ""), void 0 === A && (A = 0), this._curPageId = A, this._curbannerUnitId = u, this._curGridUnitId = G, this._hasZmBannerData = !1, this._curBackupData = null, this._curGuessData = null, this._curCustomBannerData = null, this._bannerShowFlag = !0, 0 == A && this.doShow();
        }, u.prototype.updateGuess = function(u) {
            this._curGuessData = u, this._hasZmBannerData = !0;
        }, u.prototype.updateBackup = function(u) {
            this._curBackupData = u;
        }, u.prototype.updateCustomBanner = function(u) {
            this._curCustomBannerData = u, this._hasZmBannerData = !0;
        }, u.prototype.showBanner = function(u, G) {
            void 0 === u && (u = 0), void 0 === G && (G = 0), this._styleLeft = u, this._styleTop = G, this._bannerShowFlag = !0, this.doShow();
        }, u.prototype.showBannerAfterLoaded = function(u) {
            u == this._curPageId && this.doShow();
        }, u.prototype.doShow = function() {
            this._bannerShowFlag && (0 != this._curPageId && this._curPageId != vu.curPageId || (0 != this._curPageId && this._hasZmBannerData && vu.CustomAdEnable ? this.showZmBannerAd() : this.checkPhoneWxBannerEnable() && this.showWxBanner()));
        }, u.prototype.hideBanner = function() {
            this._bannerShowFlag = !1, this._curAd && (this._curAd.loaded ? (this._curAd.hide(), this._curAd.needRefresh() && (console.log("banner needRefresh", this._curAd.adUnitId), this.creatNewAd())) : this.removeWxBanner()), this._curGrid && (this._curGrid.loaded ? this._curGrid.hide() : this.removeWxGrid()), this._curGuess && this._curGuess.hide(), this._curBackup && this._curBackup.hide(), this._curCustomBanner && this._curCustomBanner.hide();
        }, u.prototype.showZmBannerAd = function() {
            this.removeWxAd(), this._curGuessData ? this.showGuess() : this._curCustomBannerData && this.showCustomBanner();
        }, u.prototype.removeZmBannerAd = function() {
            this.removeCustomBanner(), this.removeGuess(), this.removeBackup();
        }, u.prototype.showCustomBanner = function() {
            this.removeGuess(), this.removeBackup(), this._curCustomBanner ? this._curCustomBanner.pageId != this._curPageId && this._curCustomBanner.setUnit(this._curPageId, this._curCustomBannerData, this._designStyle, this._styleHeight, this._styleLeft, this._styleTop) : (this._curCustomBanner = new Hu(), this._curCustomBanner.setUnit(this._curPageId, this._curCustomBannerData, this._designStyle, this._styleHeight, this._styleLeft, this._styleTop)), this._curCustomBanner.show();
        }, u.prototype.removeCustomBanner = function() {
            this._curCustomBanner && (this._curCustomBanner.dispose(), this._curCustomBanner = null);
        }, u.prototype.showGuess = function() {
            this.removeCustomBanner(), this.removeBackup(), this._curGuess ? this._curGuess.pageId != this._curPageId && this._curGuess.setUnit(this._curPageId, this._curGuessData) : (this._curGuess = new su(), this._curGuess.setUnit(this._curPageId, this._curGuessData)), this._curGuess.show();
        }, u.prototype.removeGuess = function() {
            this._curGuess && (this._curGuess.dispose(), this._curGuess = null);
        }, u.prototype.showBackup = function() {
            this._bannerShowFlag && this._curBackupData && (this._curBackup ? this._curBackup.pageId != this._curPageId && this._curBackup.setUnit(this._curPageId, this._curBackupData) : (this._curBackup = new su(), this._curBackup.setUnit(this._curPageId, this._curBackupData)), this._curBackup.show());
        }, u.prototype.removeBackup = function() {
            this._curBackup && (this._curBackup.dispose(), this._curBackup = null);
        }, u.prototype.showWxBanner = function() {}, u.prototype.creatNewAd = function() {}, u.prototype.getWxBanner = function(u) {
            if (this._bannerList)
                for (var G = 0; G < this._bannerList.length; G++) {
                    var A = this._bannerList[G];
                    if (A.adUnitId == u) return A;
                }
            return null;
        }, u.prototype.removeWxBanner = function() {
            this._bannerList && this._bannerList.forEach(function(u) {
                u.hide();
            });
        }, u.prototype.showWxGrid = function() {
            vu.BannerAdEnable && (this.removeZmBannerAd(), this.removeWxAd(), this._curGrid && this._curGrid.adUnitId == this._curGridUnitId ? this._curGrid.show(this._styleLeft, this._styleTop) : this.creatNewGrid());
        }, u.prototype.creatNewGrid = function() {
            this._curGrid && this._curGrid.loaded ? this._curGrid.show(this._styleLeft, this._styleTop) : "" != this._curGridUnitId && (this._curGrid = new zu(this._curGridUnitId), this._curGrid.create(this._styleWidth, this._styleHeight, this._styleLeft, this._styleTop, this._fixedHeight, this._designStyle, this._interval), this._bannerShowFlag && this._curGrid.show(this._styleLeft, this._styleTop));
        }, u.prototype.removeWxGrid = function() {
            this._curGrid && this._curGrid.loaded && this._curGrid.hide();
        }, u.prototype.removeWxAd = function() {
            this.removeWxBanner(), this.removeWxGrid();
        }, u.prototype.removeBanner = function() {
            this.removeWxAd(), this.removeZmBannerAd();
        }, u.prototype.checkPhoneWxBannerEnable = function() {
            if (!Laya.Browser.window.wx) return !0;
            var u = wx.getSystemInfoSync();
            return console.log("system info", u), !(!this._iphoneXEnable && this.checkIphoneX(u)) && !this.checkPhoneScreenOverWidth(u);
        }, u.prototype.checkIphoneX = function(u) {
            return u && -1 != u.model.indexOf("iPhone X");
        }, u.prototype.checkPhoneScreenOverWidth = function(u) {
            return u && .57 < u.screenWidth / u.screenHeight;
        }, u;
    }();
J = W || (W = {}), C = J.customad || (J.customad = {}), F = function(u) {
    function G() {
        return u.call(this) || this;
    }
    return R(G, u), G.prototype.createChildren = function() {
        u.prototype.createChildren.call(this), this.createView(J.customad.AdTaskItemUIUI.uiView);
    }, G.uiView = {
        type: "View",
        props: {
            width: 595,
            height: 120
        },
        child: [{
            type: "Image",
            props: {
                var: "bg",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            }
        }, {
            type: "Label",
            props: {
                y: 35,
                x: 130,
                width: 200,
                var: "txtName",
                valign: "middle",
                text: "游戏名称",
                height: 50,
                fontSize: 38,
                font: "SimHei",
                color: "#ffffe3",
                centerY: 0,
                align: "left"
            }
        }, {
            type: "Button",
            props: {
                var: "btnAd",
                stateNum: 1,
                right: 20,
                centerY: 0
            }
        }, {
            type: "Box",
            props: {
                width: 80,
                var: "iconBox",
                left: 20,
                height: 80,
                centerY: 0
            }
        }]
    }, G;
}(Laya.View), C.AdTaskItemUIUI = F;
var Xu, wu, du = function(u) {
        function z() {
            return u.call(this) || this;
        }
        return R(z, u), Object.defineProperty(z, "instance", {
            get: function() {
                return this._instance || (this._instance = new z()), this._instance;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), z.prototype.setUnit = function(u, G, A) {
            A && G && (this.clear(), this._pageId = u, this.visible = !1, this.mouseThrough = !0, this._parentCon = A, this._conData = G, this._contents = this._conData.contents, bu.eventCenter.on(bu.events.EventAppShow, this, this.onGameShow), this.getTaskData(), this.loadAndShow());
        }, z.prototype.clear = function() {
            this._iconPanel && (this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), bu.eventCenter.off(bu.events.EventAppShow, this, this.onGameShow), this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._conData = null, this._contents = [], this._filterContents = [], this._itemList = {}, this._startTaskAppId = "";
        }, z.prototype.onGameShow = function(u) {
            if (this._startTaskAppId && 0 != this._startTaskAppId.length) {
                var G = !0;
                0 != z.TaskCheckLevel && (G = 1e4 <= Date.now() - this._startTaskTimeMark, 1 != z.TaskCheckLevel && (G = G && 1038 == u.scene, 2 != z.TaskCheckLevel && (G = G && u.appID == this._startTaskAppId))), this.doCallback(G);
            }
        }, z.prototype.doCallback = function(u) {
            if (u) {
                var G = this.getTaskInfoByAppId(this._startTaskAppId);
                G && G.canGain && (G.gainReward(), this.saveTaskData(), this.refreshItem(G));
            } else wx.showToast({
                title: "请认真试玩游戏才可获得奖励哦！",
                icon: "none",
                duration: 2e3
            });
            this._startTaskAppId = "", this._startTaskTimeMark = 0, z.CustomData.callback && z.CustomData.callback({
                result: u
            });
        }, z.prototype.getTaskData = function() {
            this._taskData = [];
            var u = Laya.LocalStorage.getItem(z.AdTaskey);
            if (u && 0 < u.length)
                for (var G = u.split(","), A = 0; A < G.length; A++) G[A] && 10 < G[A].length && this._taskData.push(Tu.parseInfo(G[A]));
        }, z.prototype.getTaskInfoByAppId = function(u) {
            for (var G = 0; G < this._taskData.length; G++)
                if (this._taskData[G].appId == u) return this._taskData[G];
            var A = Tu.creatInfo(u);
            return this._taskData.push(A), A;
        }, z.prototype.saveTaskData = function() {
            for (var u = "", G = 0; G < this._taskData.length; G++) u = u + "," + this._taskData[G].valueStr;
            u = u.substring(1, u.length), Laya.LocalStorage.setItem(z.AdTaskey, u);
        }, z.prototype.setMenuLayout = function() {
            this.size(this.containerWidth, this.containerHeight), z.AdItemWidth = this.width - 2 * z.AdItemSpaceW, z.AdItemHeight = (this.height - this.iconNum * z.AdItemSpaceH) / this.iconNum, z.AdIconWidth = z.AdIconHeight = z.AdItemHeight - 2 * z.AdIconSpaceH;
        }, z.prototype.setUnitPos = function() {
            this.setMenuLayout(), this._parentCon.addChildAt(this, this._parentCon.numChildren), this.centerX = void 0, this.centerY = void 0, this.left = void 0, this.right = void 0, this.top = void 0, this.bottom = void 0, z.CustomData.pos ? (this.x = z.CustomData.pos.x, this.y = z.CustomData.pos.y, this.left = z.CustomData.pos.left, this.right = z.CustomData.pos.right, this.top = z.CustomData.pos.top, this.bottom = z.CustomData.pos.bottom, this.centerX = z.CustomData.pos.centerX, this.centerY = z.CustomData.pos.centerY) : (this.centerX = 0, this.y = 100), this.on(Laya.Event.CLICK, this, this.onClick);
        }, z.prototype.onClick = function(u) {
            var G = u.target.name;
            if (this._conData && -1 != G.indexOf("btnAd_")) {
                var A = parseInt(G.split("_")[1]);
                this.clickIcon(A);
            }
        }, z.prototype.clickIcon = function(u) {
            var G = this._filterContents[u],
                A = this.getTaskInfoByAppId(G.linkValue);
            P.openAd(G, this._pageId, this._conData.containerId, laya.utils.Handler.create(this, this.jumpSuccess, [A]));
        }, z.prototype.jumpSuccess = function(u) {
            u.canGain && (this._startTaskTimeMark = Date.now(), this._startTaskAppId = u.appId);
        }, z.prototype.loadAndShow = function() {
            this.loadBg();
        }, z.prototype.loadBg = function() {
            var u = [{
                url: this.itemBgUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnGainUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.btnGoUrl,
                type: Laya.Loader.IMAGE
            }];
            Y.load(u, laya.utils.Handler.create(this, this.onLoadBgRes));
        }, z.prototype.onLoadBgRes = function() {
            null != this._parentCon && null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, z.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, z.prototype.onLoadAdIcons = function() {
            if (null != this._parentCon && null != this._conData) {
                this._iconPanel || (this._iconPanel = new Laya.Panel(), this._iconPanel.pos(0, 0), this._iconPanel.size(this.width, this.height), this.addChild(this._iconPanel), z.NeedSlide && (this._iconPanel.vScrollBarSkin = "", this._iconPanel.vScrollBar.elasticBackTime = 150, this._iconPanel.vScrollBar.elasticDistance = 100, this._iconPanel.vScrollBar.scrollSize = z.AdItemHeight + z.AdIconSpaceH)), this._iconPanel.removeChildren(), this.clearElements(), this._itemList = {}, this._filterContents = this.filterContents(this._contents);
                for (var u = 0; u < this._filterContents.length; u++) {
                    var G = this._filterContents[u];
                    if (G && G.resUrl) {
                        var A = new W.customad.AdTaskItemUIUI();
                        A.mouseEnabled = !0, A.size(z.AdItemWidth, z.AdItemHeight), A.bg.skin = this.itemBgUrl, A.bg.sizeGrid = this.itemBgSizeGrid;
                        var s = N.creatAdElement();
                        this._curElements.push(s), s.setData(G, z.AdIconWidth, z.AdIconHeight, this._pageId, this._conData.containerId, !1), s.icon.pos(0, 0), A.iconBox.addChild(s.icon), s.play(), A.iconBox.size(z.AdIconWidth, z.AdIconHeight);
                        var Q = this.getTaskInfoByAppId(G.linkValue);
                        A.btnAd.stateNum = Q.canGain ? this.btnStateNum : 1, A.btnAd.skin = Q.canGain ? this.btnGainUrl : this.btnGoUrl, A.btnAd.label = "", A.btnAd.scale(.8, .8), A.btnAd.name = "btnAd_" + u, A.txtName.color = this.fontColor, A.txtName.fontSize = this.itemNameFontSize, A.txtName.font = this.font, A.txtName.text = G.adName, A.txtName.left = A.iconBox.left + A.iconBox.width + 10, A.x = z.AdItemSpaceW, A.y = u * (z.AdItemSpaceH + A.height), this._iconPanel.addChild(A), this._itemList["" + Q.appId] = A, bu.AdShowTime.instance.adShow(this._pageId, this._conData.containerId, G.adId, G.order, G.effectType);
                    }
                }
                this.visible = !0, this.saveTaskData();
            }
        }, z.prototype.filterContents = function(u) {
            for (var G = [], A = [], s = 0; s < u.length; s++) {
                var Q = u[s];
                if (Q && Q.resUrl) this.getTaskInfoByAppId(Q.linkValue).canGain ? G.push(Q) : A.push(Q);
            }
            return G.concat(A);
        }, z.prototype.refreshItem = function(u) {
            var G = this._itemList[u.appId];
            G && (G.btnAd.skin = u.canGain ? this.btnGainUrl : this.btnGoUrl);
        }, z.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    bu.AdShowTime.instance.adHide(this._pageId, this._conData.containerId, G.adId, G.order, G.effectType), N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(z.prototype, "itemBgUrl", {
            get: function() {
                return z.CustomData.bgSkin ? z.CustomData.bgSkin : B.HOST + "itemBg.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "btnGoUrl", {
            get: function() {
                return z.CustomData.btnGoSkin ? z.CustomData.btnGoSkin : B.HOST + "btnGO.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "btnGainUrl", {
            get: function() {
                return z.CustomData.btnGainSkin ? z.CustomData.btnGainSkin : B.HOST + "btnGain.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "itemBgSizeGrid", {
            get: function() {
                return z.CustomData.bgSizeGrid && z.CustomData.bgSkin ? z.CustomData.bgSizeGrid : "20,20,20,20,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "itemNameFontSize", {
            get: function() {
                return z.CustomData.fontSize ? z.CustomData.fontSize : 28;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "iconNum", {
            get: function() {
                return z.CustomData.iconNum ? z.CustomData.iconNum : 5;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "containerWidth", {
            get: function() {
                return z.CustomData.containerWidth ? z.CustomData.containerWidth : 595;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "containerHeight", {
            get: function() {
                return z.CustomData.containerHeight ? z.CustomData.containerHeight : 605;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "fontColor", {
            get: function() {
                return z.CustomData.fontColor ? z.CustomData.fontColor : "#FFFFE3";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "font", {
            get: function() {
                return z.CustomData.font ? z.CustomData.font : "SimHei";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(z.prototype, "btnStateNum", {
            get: function() {
                return z.CustomData.btnStateNum ? z.CustomData.btnStateNum : 1;
            },
            enumerable: !0,
            configurable: !0
        }), z.CustomData = {}, z.AdTaskey = "Custom_AdTask_Key", z.NeedSlide = !0, z.AdItemSpaceW = 5, z.AdItemSpaceH = 5, z.AdIconWidth = 80, z.AdIconHeight = 80, z.AdIconSpaceH = 10, z.TaskCheckLevel = 1, z;
    }(Laya.View),
    Tu = function() {
        function Q(u) {
            var G = u.split("*");
            this._appId = G[0], this._taskState = parseInt(G[1]), this._timeMark = parseInt(G[2]);
            var A = new Date(this._timeMark),
                s = new Date();
            Q.everyday() && A.getDay() != s.getDay() && (this.taskState = 0);
        }
        return Q.creatInfo = function(u) {
            return new Q(u + "*0*0");
        }, Q.parseInfo = function(u) {
            return new Q(u);
        }, Q.everyday = function() {
            return null != du.CustomData.everyday && du.CustomData.everyday;
        }, Object.defineProperty(Q.prototype, "appId", {
            get: function() {
                return this._appId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "canGain", {
            get: function() {
                return 0 == this._taskState;
            },
            enumerable: !0,
            configurable: !0
        }), Q.prototype.finishTask = function() {
            0 == this._taskState && (this.taskState = 1);
        }, Q.prototype.gainReward = function() {
            this.taskState = 2;
        }, Object.defineProperty(Q.prototype, "taskState", {
            set: function(u) {
                this._taskState = u, this._timeMark = Date.now();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Q.prototype, "valueStr", {
            get: function() {
                return this._appId + "*" + this._taskState + "*" + this._timeMark;
            },
            enumerable: !0,
            configurable: !0
        }), Q;
    }(),
    _u = function(u) {
        function d() {
            return u.call(this) || this;
        }
        return R(d, u), Object.defineProperty(d, "instance", {
            get: function() {
                return this._instance || (this._instance = new d()), this._instance;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.setUnit = function(u, G, A) {
            G ? (this.clear(), this._pageId = u, this.mouseThrough = !0, this._conData = G, this._contents = this._conData.contents, this.loadAndShow()) : this.doCallback();
        }, d.prototype.doCallback = function() {
            d.CustomData.callback && d.CustomData.callback();
        }, d.prototype.clear = function() {
            this._isShow && this._contents && 0 < this._contents.length && this.adTimeHide(), this._conData = null, this._contents = [], this._iconPanel && (this._iconPanel.removeChildren(), this._iconPanel.removeSelf(), this._iconPanel = null), this.clearElements(), this.off(Laya.Event.CLICK, this, this.onClick), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._isShow = !1;
        }, d.prototype.setMenuLayout = function() {
            this.size(Laya.stage.width + 10, Laya.stage.height + 10), this.pos(-5, -5), this._mask = new Laya.Sprite(), this._mask.size(this.width, this.height), this._mask.pos(0, 0), this._mask.visible = !0, this._mask.graphics.drawRect(0, 0, this._mask.width, this._mask.height, "#000000"), this._mask.alpha = .5, this._mask.name = d.MaskName, this._mask.mouseEnabled = !0, this._mask.mouseThrough = !1, this.addChildAt(this._mask, 0), this._panel = new Laya.Box(), this._panel.name = "containerBox", this._panel.mouseThrough = !0, this.addChildAt(this._panel, 1), this._bg = new Laya.Image(), this._bg.name = "menubg", this._bg.skin = this.bgUrl, this._bg.sizeGrid = this.bgSizeGrid, this._bg.size(this.containerWidth, this.containerHeight), this._bg.pos(0, 0), this._panel.addChild(this._bg), this._title = new Laya.Image(), this._title.mouseEnabled = !1, this._title.skin = this.titleUrl, this._title.centerX = 0, this._title.y = this.titleDiff, this._panel.addChild(this._title), this._closeImg = new Laya.Image(), this._closeImg.name = d.CloseBtnName, this._closeImg.skin = this.closeUrl, this._closeImg.mouseEnabled = !0, this._closeImg.mouseThrough = !1, this._closeImg.centerX = 0, this._closeImg.y = this._bg.height + this.closeBtnDiff, this._panel.addChild(this._closeImg);
            var u = this.layoutStyle;
            d.AdIconWidth = (this._bg.width - 2 * d.BorderDiff - (u.x + 1) * d.AdIconSpaceW) / u.x, d.AdIconHeight = (this._bg.height - 2 * d.BorderDiff - (u.y + 1) * d.AdIconSpaceH - u.y * d.AdIconTxtHeight - this.offSetTop) / u.y;
            var G = Math.min(d.AdIconWidth, d.AdIconHeight),
                A = d.AdIconWidth - G;
            d.AdIconWidth = d.AdIconHeight = G, 0 < A ? d.AdIconSpaceW = (this._bg.width - 2 * d.BorderDiff - d.AdIconWidth * u.x) / (u.x + 1) : d.AdIconSpaceH = (this._bg.height - 2 * d.BorderDiff - d.AdIconHeight * u.y - u.y * d.AdIconTxtHeight - this.offSetTop) / (u.y + 1);
        }, d.prototype.setUnitPos = function() {
            this.setMenuLayout(), this._panel.anchorX = 0, this._panel.anchorY = 0, this._panel.scale(1, 1), this._panel.centerX = void 0, this._panel.centerY = void 0, this._panel.left = void 0, this._panel.right = void 0, this._panel.top = void 0, this._panel.bottom = void 0, d.CustomData.pos ? (this._panel.x = d.CustomData.pos.x, this._panel.y = d.CustomData.pos.y, this._panel.left = d.CustomData.pos.left, this._panel.right = d.CustomData.pos.right, this._panel.top = d.CustomData.pos.top, this._panel.bottom = d.CustomData.pos.bottom, this._panel.centerX = d.CustomData.pos.centerX, this._panel.centerY = d.CustomData.pos.centerY) : (this._panel.centerX = 0, this._panel.centerY = 0);
        }, d.prototype.onClick = function(u) {
            var G = u.target.name;
            this._conData && (G != d.CloseBtnName && G != d.MaskName || this.closeAdBox());
        }, d.prototype.showAdBox = function() {
            this._isShow || (Laya.stage.addChild(this), this.zOrder = 50, this._isShow = !0, this._panel.scaleX = .5, this._panel.scaleY = .5, this._panel.anchorX = .5, this._panel.anchorY = .5, Laya.Tween.to(this._panel, {
                scaleX: 1,
                scaleY: 1
            }, 300, Laya.Ease.backOut, laya.utils.Handler.create(this, this.onShow)));
        }, d.prototype.onShow = function() {
            this.adTimeShow(), this.on(Laya.Event.CLICK, this, this.onClick);
        }, d.prototype.adTimeShow = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adShow(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, d.prototype.adTimeHide = function() {
            var G = this,
                A = bu.AdShowTime.instance,
                s = this._conData.containerId;
            this._contents.forEach(function(u) {
                A.adHide(G._pageId, s, u.adId, u.order, u.effectType);
            });
        }, d.prototype.closeAdBox = function() {
            this._isShow && Laya.Tween.to(this._panel, {
                scaleX: .1,
                scaleY: .1
            }, 300, Laya.Ease.backIn, laya.utils.Handler.create(this, this.onClose));
        }, d.prototype.onClose = function() {
            this.clear(), this.doCallback();
        }, d.prototype.loadAndShow = function() {
            Y.load(this.bgRes(), laya.utils.Handler.create(this, this.onLoadBgRes));
        }, d.prototype.onLoadBgRes = function() {
            null != this._conData && (this.removeChildren(), this.setUnitPos(), this.loadAdIcons());
        }, d.prototype.loadAdIcons = function() {
            Y.load(this._conData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, d.prototype.onLoadAdIcons = function() {
            this.setAdIcons(), this.showAdBox();
        }, d.prototype.setAdIcons = function() {
            if (null != this._conData) {
                this._iconPanel = new Laya.Panel(), this._iconPanel.pos(this._bg.x + d.BorderDiff, this._bg.y + d.BorderDiff), this._iconPanel.size(this._bg.width - 2 * d.BorderDiff, this._bg.height - 2 * d.BorderDiff), this._panel.addChild(this._iconPanel), this._iconPanel.removeChildren(), this.clearElements();
                for (var u = 0, G = this.layoutStyle, A = Math.min(G.x * G.y, this._contents.length), s = 0; s < A; s++) {
                    var Q = this._contents[s];
                    if (Q && Q.resUrl) {
                        var z = new Laya.Sprite();
                        z.mouseEnabled = !0;
                        var H = N.creatAdElement();
                        this._curElements.push(H), H.setData(Q, d.AdIconWidth, d.AdIconHeight, this._pageId, this._conData.containerId), H.icon.pos(0, 0), z.addChild(H.icon), H.play();
                        var x = new Laya.Label();
                        x.font = this.font, x.color = this.fontColor, x.fontSize = this.itemNameFontSize, x.align = "center", x.valign = "bottom", x.size(d.AdIconWidth + 20, d.AdIconTxtHeight), x.pos(-10, d.AdIconHeight), x.text = Q.adName, z.addChild(x), z.size(d.AdIconWidth, d.AdIconHeight + d.AdIconTxtHeight);
                        var X = u % G.x,
                            w = Math.floor(u / G.x);
                        z.x = d.AdIconSpaceW + X * (d.AdIconSpaceW + z.width), z.y = d.AdIconSpaceH + w * (d.AdIconSpaceH + z.height) + this.offSetTop, this._iconPanel.addChild(z), u++;
                    }
                }
            }
        }, d.prototype.clearElements = function() {
            if (this._curElements && 0 < this._curElements.length)
                for (var u = this._curElements.length - 1; 0 <= u; u--) {
                    var G = this._curElements[u];
                    N.recoverAdElement(G), this._curElements.splice(u, 1);
                }
            this._curElements = [];
        }, Object.defineProperty(d.prototype, "containerWidth", {
            get: function() {
                return d.CustomData.containerWidth ? d.CustomData.containerWidth : 644;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "containerHeight", {
            get: function() {
                return d.CustomData.containerHeight ? d.CustomData.containerHeight : 644;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "titleUrl", {
            get: function() {
                return d.CustomData.titleSkin ? d.CustomData.titleSkin : B.HOST + "boxtitle.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "closeUrl", {
            get: function() {
                return d.CustomData.closeBtnSkin ? d.CustomData.closeBtnSkin : B.HOST + "boxclose.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "bgUrl", {
            get: function() {
                return d.CustomData.bgSkin ? d.CustomData.bgSkin : B.HOST + "boxbackground.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "bgSizeGrid", {
            get: function() {
                return d.CustomData.bgSizeGrid ? d.CustomData.bgSizeGrid : "20,20,20,20,0";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "layoutStyle", {
            get: function() {
                return d.CustomData.layoutStyle ? d.CustomData.layoutStyle : new Laya.Point(4, 2);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "itemNameFontSize", {
            get: function() {
                return d.CustomData.fontSize ? d.CustomData.fontSize : 24;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "fontColor", {
            get: function() {
                return d.CustomData.fontColor ? d.CustomData.fontColor : "#795844";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "font", {
            get: function() {
                return d.CustomData.font ? d.CustomData.font : "SimHei";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "titleDiff", {
            get: function() {
                return d.CustomData.titleDiff ? d.CustomData.titleDiff : -133;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "closeBtnDiff", {
            get: function() {
                return d.CustomData.closeBtnDiff ? d.CustomData.closeBtnDiff : 60;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "offSetTop", {
            get: function() {
                return d.CustomData.offSetTop ? d.CustomData.offSetTop : 110;
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.bgRes = function() {
            return [{
                url: this.bgUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.closeUrl,
                type: Laya.Loader.IMAGE
            }, {
                url: this.titleUrl,
                type: Laya.Loader.IMAGE
            }];
        }, d.prototype.preload = function(u) {
            Y.load(u.allAdIconRes.concat(this.bgRes()), laya.utils.Handler.create(this, this.preloadSuc));
        }, d.prototype.preloadSuc = function() {
            console.log("adbox preload suc", this._pageId);
        }, d.CustomData = {}, d.AdIconWidth = 80, d.AdIconHeight = 80, d.AdIconTxtHeight = 40, d.AdIconSpaceW = 30, d.AdIconSpaceH = 30, d.BorderDiff = 5, d.MaskName = "MaskBg", d.CloseBtnName = "CloseBtn", d;
    }(Laya.View),
    Bu = function(u) {
        function A() {
            return u.call(this) || this;
        }
        return R(A, u), Object.defineProperty(A, "instance", {
            get: function() {
                return this._instance || (this._instance = new A()), this._instance;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "pageId", {
            get: function() {
                return this._pageId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "hasAdGuess", {
            get: function() {
                return null != this._adFriend && null != this._adFriend;
            },
            enumerable: !0,
            configurable: !0
        }), A.prototype.setUnit = function(u, G, A, s, Q) {
            void 0 === s && (s = null), void 0 === Q && (Q = null), G && A ? (this.clear(), this._pageId = u, this._hotData = G, this._friendData = A, s && (this._adFriend = s), Q && (this._adHot = Q), this.loadAndShow()) : this.doCallback();
        }, A.prototype.doCallback = function() {
            A.CustomData.callback && A.CustomData.callback();
        }, A.prototype.clear = function() {
            this._hotData = null, this._friendData = null, this._adFriend && this._adFriend.clear(), this._adHot && this._adHot.clear(), this._boxFriend && (this._boxFriend.removeChildren(), this._boxFriend.removeSelf(), this._boxFriend = null), this._boxHot && (this._boxHot.removeChildren(), this._boxHot.removeSelf(), this._boxHot = null), this.off(Laya.Event.CLICK, this, this.onClick), this._closeImg && (this._closeImg.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver), this._closeImg.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut)), this.removeSelf(), this.removeChildren(), this.graphics.clear(), this._isShow = !1;
        }, A.prototype.getMinScale = function() {
            var u = Laya.stage.width / 720,
                G = Laya.stage.height / 1280;
            return Math.min(u, G);
        }, A.prototype.setMenuLayout = function() {
            this.size(Laya.stage.width + 10, Laya.stage.height + 10), this.pos(-5, -5), this._bgScreen = new Laya.Image(), this._bgScreen.size(this.width, this.height), this._bgScreen.pos(0, 0), this._bgScreen.skin = this.skinBgScreen, this._bgScreen.sizeGrid = "10,10,10,10,0", this._bgScreen.visible = !0, this._bgScreen.mouseEnabled = !0, this._bgScreen.mouseThrough = !1, this.addChildAt(this._bgScreen, 0), this._panel = new Laya.Box(), this._panel.size(720, 1280), this._panel.scale(this.getMinScale(), this.getMinScale()), this._panel.visible = !0, this._panel.mouseThrough = !0, this.addChildAt(this._panel, 1);
            var u = (this._panel.width - 660) / 2;
            this._closeImg = new Laya.Image(), this._panel.addChild(this._closeImg), this._closeImg.name = A.CloseBtnName, this._closeImg.skin = this.skinBtnCloseUp, this._closeImg.mouseEnabled = !0, this._closeImg.mouseThrough = !1, this._closeImg.pos(u, 70), this._titleFriend = new Laya.Image(), this._panel.addChild(this._titleFriend), this._titleFriend.mouseEnabled = !1, this._titleFriend.skin = this.skinTitleFriend, this._titleFriend.pos(u, this._closeImg.y + this._closeImg.height + 25), this._boxFriend = new Laya.Box(), this._panel.addChild(this._boxFriend), this._boxFriend.size(660, 140), this._boxFriend.name = "boxFriend", this._boxFriend.mouseThrough = !0, this._boxFriend.pos(u, this._titleFriend.y + this._titleFriend.height), this._titleHot = new Laya.Image(), this._panel.addChild(this._titleHot), this._titleHot.mouseEnabled = !1, this._titleHot.skin = this.skinTitleHot, this._titleHot.pos(u, this._boxFriend.y + this._boxFriend.height + 10), this._boxHot = new Laya.Box(), this._panel.addChild(this._boxHot), this._boxHot.name = "boxHot", this._boxHot.mouseThrough = !0, this._boxHot.pos(u, this._titleHot.y + this._titleHot.height), this._boxHot.size(660, Laya.stage.height / this.getMinScale() - this._boxHot.y - 80), this._maskScrll = new Laya.Image(), this._panel.addChild(this._maskScrll), this._maskScrll.mouseEnabled = !1, this._maskScrll.skin = this.skinScrollMask, this._maskScrll.sizeGrid = "30,10,10,10,0", this._maskScrll.size(660, 20), this._maskScrll.pos(u, Laya.stage.height / this.getMinScale() - 80 - 20);
        }, A.prototype.setUnitBox = function() {
            var u = {
                pos: {
                    x: 0,
                    y: 0
                },
                guessType: j.Horizontal,
                containerWidth: this._boxFriend.width,
                containerHeight: this._boxFriend.height,
                borderDiffWidth: 20,
                borderDiffHeight: 10,
                bgSkin: this.skinBgFriend,
                bgSizeGrid: "40,40,40,40,0",
                needName: !1
            };
            this._adFriend.setUnit(this._pageId, this._friendData, this._boxFriend, u);
            var G = {
                pos: {
                    x: 0,
                    y: 0
                },
                verticalCon: this._boxHot,
                guessType: j.Vertical,
                containerWidth: this._boxHot.width,
                containerHeight: this._boxHot.height,
                itemWidth: 218,
                itemHeight: 247,
                skinBgItem: this.skinBgHotItem,
                itemBgSizeGrid: "20,25,30,25,0",
                itemBgContentWidthOffset: 23,
                itemBgContentHeightOffset: 25,
                spaceY: 1,
                scrollType: 0,
                autoScroll: !0,
                needBorder: !1,
                needName: !1
            };
            this._adHot.setUnit(this._pageId, this._hotData, this._boxHot, G);
        }, A.prototype.onClick = function(u) {
            var G = u.target.name;
            this._hotData && this._friendData && G == A.CloseBtnName && this.closeAdFullScreen();
        }, A.prototype.showAdFullScreen = function() {
            if (!this._isShow) {
                this._isShow = !0, this.zOrder = 50;
                var u = this._panel.scaleX;
                this._panel.anchorX = .5, this._panel.anchorY = .5, Laya.stage.addChild(this), this._panel.centerX = 0, this._panel.top = 0, Laya.timer.callLater(this, function() {
                    this._panel.scaleX = .5, this._panel.scaleY = .5, Laya.Tween.to(this._panel, {
                        scaleX: u,
                        scaleY: u
                    }, 300, Laya.Ease.backOut, laya.utils.Handler.create(this, this.onShow));
                }.bind(this));
            }
        }, A.prototype.onShow = function() {
            this.on(Laya.Event.CLICK, this, this.onClick), this._closeImg && (this._closeImg.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver), this._closeImg.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut));
        }, A.prototype.onMouseOver = function() {
            this._closeImg.skin = this.skinBtnCloseDown;
        }, A.prototype.onMouseOut = function() {
            this._closeImg.skin = this.skinBtnCloseUp;
        }, A.prototype.closeAdFullScreen = function() {
            this._isShow && Laya.Tween.to(this._panel, {
                scaleX: .1,
                scaleY: .1
            }, 300, Laya.Ease.backIn, laya.utils.Handler.create(this, this.onClose));
        }, A.prototype.onClose = function() {
            this.clear(), this.doCallback();
        }, A.prototype.loadAndShow = function() {
            Y.load(this.bgRes(), laya.utils.Handler.create(this, this.onLoadBgRes));
        }, A.prototype.onLoadBgRes = function() {
            this._hotData && this._friendData && (this.removeChildren(), this.setMenuLayout(), this.loadAdIcons());
        }, A.prototype.loadAdIcons = function() {
            Y.load(this._hotData.allAdIconRes, laya.utils.Handler.create(this, this.onLoadAdIcons));
        }, A.prototype.onLoadAdIcons = function() {
            this.setUnitBox(), this.showAdFullScreen();
        }, Object.defineProperty(A.prototype, "skinBgScreen", {
            get: function() {
                return A.CustomData.skinBgScreen ? A.CustomData.skinBgScreen : B.HOST + "fullscreen/imgScreenBg.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinScrollMask", {
            get: function() {
                return A.CustomData.skinScrollMask ? A.CustomData.skinScrollMask : B.HOST + "fullscreen/imgScrollMask.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinTitleFriend", {
            get: function() {
                return A.CustomData.skinTitleFriend ? A.CustomData.skinTitleFriend : B.HOST + "fullscreen/imgTitleFriend.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinBgFriend", {
            get: function() {
                return A.CustomData.skinBgFriend ? A.CustomData.skinBgFriend : B.HOST + "fullscreen/imgFriendBg.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinTitleHot", {
            get: function() {
                return A.CustomData.skinTitleHot ? A.CustomData.skinTitleHot : B.HOST + "fullscreen/imgTitleHot.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinBtnCloseDown", {
            get: function() {
                return A.CustomData.skinBtnCloseDown ? A.CustomData.skinBtnCloseDown : B.HOST + "fullscreen/btnBack_down.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinBtnCloseUp", {
            get: function() {
                return A.CustomData.skinBtnCloseUp ? A.CustomData.skinBtnCloseUp : B.HOST + "fullscreen/btnBack_up.png";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(A.prototype, "skinBgHotItem", {
            get: function() {
                return A.CustomData.skinBgHotItem ? A.CustomData.skinBgHotItem : B.HOST + "fullscreen/imgHotItemBg.png";
            },
            enumerable: !0,
            configurable: !0
        }), A.prototype.bgRes = function() {
            return [{
                url: this.skinBtnCloseDown,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinBtnCloseUp,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinTitleHot,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinTitleFriend,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinBgFriend,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinBgScreen,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinScrollMask,
                type: Laya.Loader.IMAGE
            }, {
                url: this.skinBgHotItem,
                type: Laya.Loader.IMAGE
            }];
        }, A.prototype.preload = function(u) {
            Y.load(u.allAdIconRes.concat(this.bgRes()), laya.utils.Handler.create(this, this.preloadSuc));
        }, A.prototype.preloadSuc = function() {
            console.log("AdFullScreen preload suc", this._pageId);
        }, A.CustomData = {}, A.CloseBtnName = "CloseBtn", A;
    }(Laya.View);
Xu = bu || (bu = {}), wu = function() {
    function u() {
        this.adInfoes = {}, window.wx && wx.onShow && wx.onHide && (wx.onShow(this.onShow.bind(this)), wx.onHide(this.onHide.bind(this))), this.lastStatTime = Date.now(), this.eventQueue = [];
    }
    return Object.defineProperty(u, "instance", {
        get: function() {
            return this._instance || (this._instance = new this()), this._instance;
        },
        enumerable: !0,
        configurable: !0
    }), u.prototype.adShow = function(u, G, A, s, Q) {
        this.currentPageId != u && this.showPage(u), this.getOrCreateAd(u, G, A, s, Q).start = Laya.Browser.now();
    }, u.prototype.adHide = function(u, G, A, s, Q, z) {
        var H = this.getAd(u, G, A);
        H && (H.duration += Laya.Browser.now() - (H.start || this.onShowTime), H.start = 0, this.pushEvent(H), z || delete this.adInfoes[H.adPageId][H.advid][H.adid]);
    }, u.prototype.pushEvent = function(u) {
        u && (this.eventQueue.push(u), Laya.timer.once(1, this, this.checkQueueLength, null, !0));
    }, u.prototype.checkQueueLength = function() {
        var u = Date.now();
        (this.lastStatTime && 1e4 < u - this.lastStatTime || 10 < this.eventQueue.length) && this.stat();
    }, u.prototype.showPage = function(u) {
        this.currentPageId && this.hidePage(this.currentPageId), this.currentPageId = u;
    }, u.prototype.hidePage = function(u) {
        this.currentPageId === u && (this.stat(), this.currentPageId = 0);
    }, u.prototype.stat = function() {
        0 < this.eventQueue.length && (Xu.statistics.sendAdShowTimeEvents(Xu.gameID(), this.eventQueue), this.eventQueue = [], this.lastStatTime = Date.now());
    }, u.prototype.getAd = function(u, G, A) {
        var s = this.adInfoes[u];
        if (s) {
            var Q = s[G];
            if (Q) return Q[A];
        }
    }, u.prototype.getOrCreateAd = function(u, G, A, s, Q) {
        var z = this.adInfoes[u];
        z || (z = {}, this.adInfoes[u] = z);
        var H = z[G];
        H || (H = {}, z[G] = H);
        var x = H[A];
        return x || (x = {
            adPageId: u,
            advid: G,
            adid: A,
            order: s + 1,
            effectType: Q,
            duration: 0,
            start: Laya.Browser.now()
        }, H[A] = x), x;
    }, u.prototype.onHide = function() {
        var A, s, Q = this,
            u = this.adInfoes[this.currentPageId];
        u && (Object.keys(u).forEach(function(G) {
            A = u[G], Object.keys(A).forEach(function(u) {
                s = A[u], Q.adHide(Q.currentPageId, Number(G), Number(u), s.order, s.effectType, !0);
            });
        }), this.stat());
    }, u.prototype.onShow = function() {
        this.onShowTime = Laya.Browser.now();
    }, u;
}(), Xu.AdShowTime = wu;
var cu, $u, Mu, mu, Du, ku, qu, gu, ou, Eu, pu, lu, nu, fu, iu, Uu, Ou, yu, Lu, ju, tu, Ru, Wu, Ju, Cu, Fu, ru, Su, Yu, vu = function() {
    function z() {
        this._adDataMgr = new Au(), this._bannerMgr = new xu(), this._adShowPages = [];
    }
    return Object.defineProperty(z.prototype, "platformID", {
        set: function(u) {
            B.PlatformId = u;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(z.prototype, "uid", {
        set: function(u) {
            B.UID = u;
        },
        enumerable: !0,
        configurable: !0
    }), z.prototype.setAdEnable = function(u, G) {
        void 0 === u && (u = !0), void 0 === G && (G = !0), z.CustomAdEnable = u, z.BannerAdEnable = G;
    }, z.prototype.jumpMoreByPage = function(u) {
        var G = this._adDataMgr.getCurPageAdContainerByType(u, E.More);
        if (G && G[0] && G[0].contents) {
            var A = G[0],
                s = A.contents[0];
            if (s) return void P.openAd(s, u, A.containerId);
        }
        P.jumpApp("wx46c7a8da722329b5", u, 0, null);
    }, z.prototype.showAdPoster = function(u, G) {
        var A = this._adDataMgr.getCurPageAdContainerByType(u, E.Box);
        if (A && A[0]) {
            var s = A[0];
            _u.CustomData = G || {}, _u.instance.setUnit(u, s);
        } else G && G.callback && G.callback();
    }, z.prototype.showAdFullScreen = function(u, G) {
        var A = this._adDataMgr.getCurPageAdContainerByType(u, E.FullScreen),
            s = this._adDataMgr.getCurPageAdContainerByType(u, E.Guess);
        if (A && A[0] && s && s[0])
            if (Bu.CustomData = G || {}, Bu.instance.hasAdGuess) Bu.instance.setUnit(u, A[0], s[0]);
            else {
                var Q = this._adDataMgr.createAdUnit(E.Guess, j.Horizontal),
                    z = this._adDataMgr.createAdUnit(E.Guess, j.Vertical);
                Bu.instance.setUnit(u, A[0], s[0], Q, z);
            }
        else G && G.callback && G.callback();
    }, z.prototype.showTaskAd = function(u, G, A) {
        var s = this._adDataMgr.getCurPageAdContainerByType(u, E.PlayGame);
        if (s && s[0]) {
            var Q = s[0];
            du.CustomData = A || {}, du.instance.setUnit(u, Q, G);
        }
    }, z.prototype.removeTaskAd = function() {
        du.instance.clear();
    }, z.prototype.addAd = function(u, G, A) {
        this._adDataMgr.setCustomProperty(u, A), z.CustomAdEnable && this.setAdByPage(u, G);
    }, z.prototype.initBanner = function(u, G, A, s, Q, z, H, x, X) {
        void 0 === u && (u = 720), void 0 === G && (G = 200), void 0 === A && (A = 0), void 0 === s && (s = 0), void 0 === Q && (Q = 6e4), void 0 === z && (z = 0), void 0 === H && (H = new Laya.Point(720, 1440)), void 0 === X && (X = !0), this._bannerMgr.initBanner(u, G, A, s, Q, z, H, x, X);
    }, z.prototype.setPageBanner = function(u, G, A) {
        void 0 === u && (u = ""), void 0 === G && (G = ""), void 0 === A && (A = 0), 0 == z.CustomAdEnable && (A = 0), this._bannerMgr.setPageBanner(u, G, A);
    }, z.prototype.showBanner = function(u, G) {
        void 0 === u && (u = 0), void 0 === G && (G = 0), this._bannerMgr.showBanner(u, G);
    }, z.prototype.hideBanner = function() {
        this._bannerMgr.hideBanner();
    }, z.prototype.removeAd = function(u) {
        this.setPageAdFlag(u, !1), bu.AdShowTime.instance.hidePage(u), this._adDataMgr.removeAllAdUnitByPage(u);
    }, z.prototype.removeLatestAdPage = function() {
        null != z.curPageId && this.removeAd(z.curPageId);
    }, z.prototype.setAdByPage = function(u, G) {
        this.setPageAdFlag(u, !0), z.curPageId = u;
        var A = this._adDataMgr.getPageConfig(u);
        A ? this.showCurPageAd(u, G, A) : this.loadConfigByPage(u, G), bu.AdShowTime.instance.showPage(u);
    }, z.prototype.loadConfigByPage = function(u, G) {
        if (B.PlatformId) {
            var A = B.CustomAdHost + "/api/v1.1/adv",
                s = {
                    platform_id: B.PlatformId,
                    pages_id: u
                };
            bu.http.GET(A, s, Laya.Handler.create(this, this.onLoadSuc, [u, G]), Laya.Handler.create(this, this.onLoadFail, [u]));
        }
    }, z.prototype.onLoadSuc = function(u, G, A) {
        if (console.log("page ad loaded", u), A && !A.code && A.data && A.data.list) {
            this._adDataMgr.parseServerData(u, A.data);
            var s = this._adDataMgr.getPageConfig(u);
            this.showCurPageAd(u, G, s);
        }
    }, z.prototype.onLoadFail = function(u) {
        console.log("load customad fail: ", u);
    }, z.prototype.showCurPageAd = function(u, G, A) {
        if (A) {
            var s = [];
            h.clearPageData();
            for (var Q = 0; Q < A.length; Q++) A[Q] && 0 < A[Q].contents.length && (s.push(A[Q].containerType), A[Q].containerType == E.Pendant && h.PendantNum++), this.creatAd(u, G, A[Q]);
            bu.eventCenter.event(bu.events.EventCustomAdLoaded, {
                pageId: u,
                adTypes: s
            }), u == z.curPageId && this._bannerMgr.showBannerAfterLoaded(u);
        }
    }, z.prototype.creatAd = function(u, G, A) {
        if (A && 0 != A.contents.length) {
            var s = this._adDataMgr.getCustomProperty(u, A.containerType);
            switch (A.containerType) {
                case E.Single:
                    this.showLantern(u, A, G);
                    break;
                case E.Menu:
                    this.showMenu(u, A, G, s);
                    break;
                case E.Guess:
                    this.showGuess(u, A, G, s);
                    break;
                case E.PlayGame:
                case E.More:
                    break;
                case E.BannerGuess:
                    this._bannerMgr.updateGuess(A);
                    break;
                case E.Box:
                    _u.instance.preload(A);
                    break;
                case E.Backup:
                    this._bannerMgr.updateBackup(A);
                    break;
                case E.Pendant:
                    this.showPendant(u, A, G, s);
                    break;
                case E.FullScreen:
                    Bu.instance.preload(A);
                    break;
                case E.CustomizedBanner:
                    this._bannerMgr.updateCustomBanner(A);
                    break;
                case E.Manual:
                    this.showManual(u, A, G, s);
                    break;
                case E.DynamicMenu:
                    this.showDynamicMenu(u, A, G, s);
            }
        }
    }, z.prototype.showLantern = function(u, G, A) {
        this.checkPageAdFlag(u) && this._adDataMgr.createAdUnit(G.containerType).setUnit(u, G, A, null);
    }, z.prototype.showMenu = function(u, G, A, s) {
        this.checkPageAdFlag(u) && (s && s.newVersion ? this._adDataMgr.createAdUnit(G.containerType, 1) : this._adDataMgr.createAdUnit(G.containerType, 0)).setUnit(u, G, A, s);
    }, z.prototype.showGuess = function(u, G, A, s) {
        if (this.checkPageAdFlag(u)) {
            var Q = null == s.guessType ? j.Horizontal : s.guessType;
            this._adDataMgr.createAdUnit(G.containerType, Q).setUnit(u, G, A, s);
        }
    }, z.prototype.showPendant = function(u, G, A, s) {
        this.checkPageAdFlag(u) && this._adDataMgr.createAdUnit(G.containerType).setUnit(u, G, A, s);
    }, z.prototype.showManual = function(u, G, A, s) {
        this.checkPageAdFlag(u) && this._adDataMgr.createAdUnit(G.containerType).setUnit(u, G, A, s);
    }, z.prototype.showDynamicMenu = function(u, G, A, s) {
        this.checkPageAdFlag(u) && this._adDataMgr.createAdUnit(G.containerType).setUnit(u, G, A, s);
    }, z.prototype.checkPageAdFlag = function(u) {
        return -1 != this._adShowPages.indexOf(u);
    }, z.prototype.setPageAdFlag = function(u, G) {
        var A = this._adShowPages.indexOf(u); -
        1 == A ? G && this._adShowPages.push(u) : G || this._adShowPages.splice(A, 1);
    }, z.CustomAdEnable = !0, z.BannerAdEnable = !0, z;
}();
cu = bu || (bu = {}), $u = function() {
        function G() {
            this.success = !1;
        }
        return Object.defineProperty(G.prototype, "URL", {
            set: function(u) {
                this.configURL != u && (this.configURL = u, this.fetch(), cu.eventCenter.on(cu.events.EventLogin, this, this.onLogin));
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.onLogin = function() {
            this.success || this.fetch();
        }, G.prototype.fetch = function() {
            if (this.configURL) {
                var u = Math.floor(Date.now() / G.UpdateInterval) * G.UpdateInterval;
                cu.http.GET(this.configURL, {
                    t: u
                }, Laya.Handler.create(this, this.onFetchSuccess), Laya.Handler.create(this, this.onFetchFail), G.MaxRetryCnt);
            }
        }, Object.defineProperty(G.prototype, "isSuccess", {
            get: function() {
                return this.success;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.onFetchSuccess = function(u) {
            this.config = u, this.success = !0, cu.eventCenter.event(cu.events.EventRemoteCfgLoaded, u);
        }, G.prototype.onFetchFail = function() {
            this.config = {}, this.success = !1;
        }, G.prototype.getItem = function(u) {
            if (this.config) return this.config[u];
        }, G.UpdateInterval = 3e4, G.MaxRetryCnt = 3, G;
    }(), cu.RemoteConfig = $u, Mu = bu || (bu = {}), mu = function() {
        function T() {
            this.sharePointContents = {};
        }
        return T.prototype.init = function(u, G) {
            this.uid = G, this.gameID = u, this.retryCnt = 0, this.fetchShareCfg();
        }, Object.defineProperty(T.prototype, "UID", {
            set: function(u) {
                this.uid = u;
            },
            enumerable: !0,
            configurable: !0
        }), T.prototype.shareStatus = function(u) {
            var G = this.sharePointContents[u];
            return G && 2 == G.status ? 2 : 1;
        }, T.prototype.getSharePointCfg = function(u, G, A, s) {
            var Q, z, H = this.sharePointContents[u];
            if (H && (z = H.share_id, !G && !A && 1 == H.status && H.share_contents && 0 < H.share_contents.length))
                for (var x = Math.random() * H.count_weight, X = H.share_contents.length, w = void 0, d = 0; d < X; d++)
                    if ((x -= (w = H.share_contents[d]).share_weight) <= 0) {
                        G = G || w.share_content, A = A || w.share_img, Q = w.share_content_id;
                        break;
                    }
            return z || (z = T.DefaultSharePointID), Q || (Q = T.DefaultShareID), G || (G = this.defaultTitle), A || (A = this.defaultImg), s || (s = {}), s.sharepid = z, s.shareid = Q, this.uid && (s.shareuid = this.uid), {
                title: G,
                imageUrl: A,
                query: s,
                sharepid: z,
                shareid: Q
            };
        }, T.prototype.defaultShareConfig = function(u, G) {
            this.defaultTitle = u, this.defaultImg = G;
        }, T.prototype.getDefaultConfig = function(u, G, A, s) {
            var Q = this.sharePointContents[u],
                z = T.DefaultSharePointID;
            Q && (z = Q.share_id);
            var H = T.DefaultShareID;
            return s || (s = {}), s.sharepid = z, s.shareid = H, {
                title: G = G || this.defaultTitle,
                imageUrl: A = A || this.defaultImg,
                query: s,
                shareid: H,
                sharepid: z
            };
        }, T.prototype.fetchShareCfg = function() {
            Mu.http.GET(T.ShareCfgHost + T.ShareCfgUrl, {
                platform_id: this.gameID
            }, Laya.Handler.create(this, this.onFetchSuccess), Laya.Handler.create(this, this.onFetchFail));
        }, T.prototype.onFetchSuccess = function(u) {
            if (0 == u.code) {
                if (this.sharePointContents = {}, u.data && u.data.list)
                    for (var G = 0, A = u.data.list; G < A.length; G++) {
                        var s = A[G];
                        this.sharePointContents[s.share_tag] = s;
                    }
            } else console.log("fetch share config result error. code:" + u.code);
        }, T.prototype.onFetchFail = function() {
            if (!(3 < this.retryCnt)) {
                console.log("retry to fetch share config!");
                var u = Math.pow(2, this.retryCnt);
                Laya.timer.once(u, this, this.retryFetchConfig);
            }
        }, T.prototype.retryFetchConfig = function() {
            this.retryCnt++, this.fetchShareCfg();
        }, T.ShareCfgHost = "", T.ShareCfgUrl = "/api/v1.1/share", T.DefaultShareID = -1, T.DefaultSharePointID = -1, T;
    }(), Mu.ShareConfig = mu, Du = bu || (bu = {}), ku = function() {
        function u() {
            this.Server = "", this.isInit = !1, this.info = {};
        }
        return u.prototype.init = function(u, G) {
            if (this.info.ak = u, this.info.v = G, !this.initDeviceInfo()) return !1;
            this.setUpOnErrorHandler(), this.isInit = !0;
        }, u.prototype.send = function(u, G) {
            var A = {};
            for (var s in this.info) A[s] = this.info[s];
            A.ev = u, A.ct = G, A.ts = Date.now(), A.rnd = Math.floor(1e7 * Math.random()), this.upload(A);
        }, u;
    }(), Du.Statistics = ku,
    function(Q) {
        var z, H, x, G, A, X;

        function w(u) {
            if (Laya.Browser.window.wx && wx.aldSendEvent) {
                var G = wx.getLaunchOptionsSync();
                if (G && G.referrerInfo) {
                    var A = G.referrerInfo;
                    A.appId && A.extraData && (A.extraData.advid || A.extraData.adid) && wx.aldSendEvent(u, {
                        appid: A.appId,
                        "广告位": A.extraData.advid,
                        "广告": A.extraData.adid
                    });
                }
            }
        }

        function d(u) {
            u && (Q.eventCenter.off(Q.events.EventLogin, Q, d), G = u.OpenID, A = u.UID, Q.opendata.onLogin(G), Q.statistics.initUserInfo(G, A), Q.ad.uid = A, Q.share.UID = A, u.First ? w("内部跳转进来-新用户") : w("内部跳转进来-老用户"), 0 == Q.system.runtimePlatform && 0 <= Q.system.compareSDKVersion("2.4.0") && u.ActivityID && wx.updateShareMenu({
                withShareTicket: !0,
                isUpdatableMessage: !0,
                activityId: u.ActivityID,
                templateInfo: [{
                    name: "member_count",
                    value: "6533532"
                }, {
                    name: "room_limit",
                    value: "10000000"
                }]
            }));
        }
        Q.shouldSendStat = !1, Q.Stat_Offset = 1e3, X = "", Q.gameID = function() {
            return z;
        }, Q.gameName = function() {
            return H;
        }, Q.version = function() {
            return x;
        }, Q.openID = function() {
            return G;
        }, Q.userID = function() {
            return A;
        }, Q.init = function(u, G, A, s) {
            G && A ? (Q.appId = u, B.CustomAdHost = X, Q.ShareConfig.ShareCfgHost = X, Q.eventCenter = new Laya.EventDispatcher(), z = G, H = A.toString(), x = s.toString(), Q.remoteConfig = new Q.RemoteConfig(), Q.shareConfig = new Q.ShareConfig(), Q.ad = new vu(), Q.ad.platformID = z, Q.initMini(Q.shareConfig), Q.eventCenter.on(Q.events.EventLogin, Q, d), Q.share.init(z), Q.statistics.init(null, null, Q.utils.adaptStatID(Q.gameID(), Q.Stat_Offset), Q.gameName(), Q.version()), w("内部跳转进来")) : console.log("gameID or gameName is null!");
        }, Q.onLogin = d;
    }(bu || (bu = {})), window.zm = bu, qu = bu || (bu = {}), gu = function(G) {
        function u() {
            var u = G.call(this) || this;
            return u;
        }
        return R(u, G), u.prototype.onMiniShow = function(u) {
            this.inited ? (this.initLaunchOptions(u), this.initShareQuery(u), this.onShow()) : console.log("waiting for yoka stat init");
        }, u.prototype.initParams = function() {
            this.initDeviceID();
        }, u.prototype.initSystemInfo = function() {}, u.prototype.str2ostype = function(u) {
            if (u) switch (u.toLowerCase()) {
                case "android":
                    return 1;
                case "ios":
                    return 2;
            }
        }, u.prototype.initLaunchOptions = function(u) {
            if (this.loginWay = this.getSceneType(u.scene), this.locationID = null, this.subgameid = null, this.subuid = null, this.ad_page_id = null, this.advid = null, this.adid = null, this.channel = null, this.plan = null, u.referrerInfo && (u.referrerInfo.appId && (this.channel = u.referrerInfo.appId), (1037 == u.scene || 1038 == u.scene) && u.referrerInfo.extraData)) {
                var G = u.referrerInfo.extraData;
                if (G.location_id) {
                    var A = qu.LocationNames[G.location_id];
                    A && (this.locationID = A);
                }
                G.subgameid && (this.subgameid = G.subgameid), G.subuid && (this.subuid = G.subuid), G.ad_page_id && (this.ad_page_id = G.ad_page_id), G.advid && (this.advid = G.advid), G.adid && (this.adid = G.adid), G.channel && (this.channel = G.channel);
            }
        }, u.prototype.initShareQuery = function(u) {
            var G = u.query;
            if (this.sharepid = null, this.shareid = null, G) {
                if (G.sharepid && (this.sharepid = G.sharepid), G.shareid && (this.shareid = G.shareid), G.shareuid && (this.shareuid = G.shareuid), G.scene) {
                    var A = decodeURIComponent(G.scene);
                    this.channel = A;
                } else G.channel && (this.channel = G.channel);
                G.plan && (this.plan = G.plan);
            }
        }, u.prototype.getSceneType = function(u) {
            return -1 != [1037, 1038].indexOf(u) ? 0 : -1 != [1011, 1012, 1013, 1047, 1048, 1049].indexOf(u) ? 2 : -1 != [1007, 1008, 1073, 1074].indexOf(u) ? 3 : -1 != [1001, 1027, 1103, 1104].indexOf(u) ? 4 : 1;
        }, u.prototype.netType = function() {}, u.prototype.initDeviceID = function() {
            return this.deviceID;
        }, u;
    }(qu.YokaStat), qu.MiniYokaStat = gu, ou = bu || (bu = {}), (Eu = ou.events || (ou.events = {})).EventLogin = "EventLogin", Eu.EventNetTypeChanged = "EventNetTypeChanged ", Eu.EventAppShow = "EventAppShow", Eu.EventAppHide = "EventAppHide", Eu.EventRemoteCfgLoaded = "EventRemoteCfgLoaded", Eu.EventCustomAdLoaded = "EventCustomAdLoaded", Eu.EventJumpAppSuccess = "EventJumpAppSuccess", Eu.EventJumpAppFail = "EventJumpAppFail", pu = bu || (bu = {}), lu = function() {
        function u() {
            this.sessionTime = 0, this.validityTime = 0, this.retryCnt = 0, this.MaxRetry = 3, this._status = 0;
        }
        return Object.defineProperty(u.prototype, "loginUrl", {
            set: function(u) {
                u && this._loginUrl !== u && (pu.eventCenter.on(pu.events.EventNetTypeChanged, this, this.onNetTypeChanged), this._loginUrl = u, this.login());
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.relogin = function() {
            1 !== this._status && this.login();
        }, u.prototype.login = function() {
            this._status = 1, this._loginUrl ? this.doLogin() : console.debug("loginUrl is null!");
        }, u.prototype.loginServer = function(u) {
            this.onLoginServer();
        }, u.prototype.onLoginServer = function(u) {
            console.log("onLoginServer");
            this.loginSuccess(u);
        }, u.prototype.thirdLoginFail = function() {
            this.retryCnt < this.MaxRetry ? Laya.timer.once(2e3, this, this.failThenLogin) : this.loginFail();
        }, u.prototype.loginFail = function() {
            this._status = 3, pu.eventCenter.event(pu.events.EventLogin);
        }, u.prototype.failThenLogin = function() {
            this.retryCnt++, this.login();
        }, u.prototype.loginSuccess = function(u) {
            this.retryCnt = 0, this._status = 2, pu.eventCenter.event(pu.events.EventLogin, u);
        }, u.prototype.onNetTypeChanged = function(u) {
            3 == this.loginStatus && 0 != u && this.login();
        }, Object.defineProperty(u.prototype, "loginStatus", {
            get: function() {
                return 2 === this._status && this.sessionTime <= Date.now() && (this._status = 0), this._status;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "openID", {
            get: function() {
                return this.openid;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.updateSessionTime = function() {
            this.sessionTime = this.validityTime + Date.now();
        }, Object.defineProperty(u.prototype, "sessionEndTime", {
            get: function() {
                return this.sessionTime;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "session", {
            get: function() {
                return Date.now() > this.sessionTime && (this.sessionId = null), this.sessionId;
            },
            enumerable: !0,
            configurable: !0
        }), u;
    }(), pu.LoginHandler = lu,
    function(u) {
        function A() {
            var u = Laya.LocalStorage.getItem("Local_Vibrate_Key");
            return !u || "off" != u;
        }
        u.vibrateShort = function(u, G) {
            0 != A() && wx.vibrateShort({
                success: function() {
                    u && u.run();
                },
                fail: function() {
                    G && G.run();
                }
            });
        }, u.vibrateLong = function(u, G) {
            0 != A() && wx.vibrateLong({
                success: function() {
                    u && u.run();
                },
                fail: function() {
                    G && G.run();
                }
            });
        }, u.setVibrateAllow = function(u) {
            var G = u ? "on" : "off";
            Laya.LocalStorage.setItem("Local_Vibrate_Key", G);
        }, u.getVibrateAllow = A;
    }((nu = bu || (bu = {})).MiniDevicer || (nu.MiniDevicer = {})), fu = bu || (bu = {}), (iu = fu.remote || (fu.remote = {})).GameVersion = "game_version", iu.ShareEnable = "share_enable", iu.GameTrigger = "game_trigger",
    function(x) {
        var Q, z, H, X, w, d = !1;

        function T() {
            var u = Uu.remoteConfig.getItem(Uu.remote.GameVersion);
            return !!(u && Uu.utils.compareVersion(Uu.version(), u) < 1 && Uu.remoteConfig.getItem(Uu.remote.ShareEnable));
        }

        function _(u, G, A) {
            var s = wx.aldShareAppMessage || wx.shareAppMessage;
            d = !0, wx.showLoading({
                title: "",
                mask: !0
            }), Laya.timer.once(3e3, x, B, null, !0), s(u), G && (Q = G, z = A, H = Date.now());
        }

        function s(u, G, A) {
            if (X) X = !1;
            else if (X = !0, x.shareTipsBg && x.shareTipsBtn) {
                var s = Laya.loader.getRes(x.shareTipsBg),
                    Q = Laya.loader.getRes(x.shareTipsBtn);
                if (s && Q) return void

                function(u, G) {
                    var A = new Laya.Dialog(),
                        s = new Laya.Box();
                    A.addChild(s);
                    var Q = new Laya.Image(x.shareTipsBg);
                    s.addChild(Q), s.width = Q.width, s.height = Q.height;
                    var z = new Laya.Button(x.shareTipsBtn);
                    z.name = Laya.Dialog.CLOSE, z.x = Q.width / 2, z.y = Q.height - 60, z.anchorX = .5, z.anchorY = 1, s.addChild(z), z.stateNum = x.shareBtnState;
                    var H = Laya.stage.width / 640;
                    s.scale(H, H), A.closeHandler = Laya.Handler.create(null, function() {
                        _(w, u, G);
                    }), A.popup();
                }(G, A);
            }
            wx.showToast({
                title: u,
                icon: "none",
                duration: 2e3
            }), A && A.run();
        }

        function B() {
            d && (d = !1, wx.hideLoading());
        }
        x.shareAppMessage = function(u, G, A, s, Q) {
            !s || T() ? _(w = {
                title: u,
                imageUrl: G,
                query: Uu.utils.obj2query(A)
            }, s, Q) : s.run();
        }, x.shareScreenShot = function(u, G, A, s, Q, z) {
            var H = u.drawToCanvas(u.width, u.height, 0, 0).getCanvas().toTempFilePathSync({
                x: G.x,
                y: G.y,
                width: G.width,
                height: G.height,
                destWidth: 500,
                destHeight: 400
            });
            this.shareAppMessage(A, H, s, Q, z);
        }, x.rewardShareEnable = T, x.zmGameTriggerState = function(u) {
            var G = Uu.remoteConfig.getItem(Uu.remote.GameTrigger);
            if (null == G || null == G) return !1;
            var A = G[u];
            return null != A && null != A && A;
        };
    }((Uu = bu || (bu = {})).MiniShare || (Uu.MiniShare = {})), Ou = bu || (bu = {}), yu = function() {
        function u() {
            this.runtimePlatform = 0
        }
        return Object.defineProperty(u.prototype, "SDKVersion", {
            get: function() {
                if (!this._sdkVersion) {
                    this._sdkVersion = "1.0.1";
                }
                return this._sdkVersion;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.getLaunchOptions = function() {
            this.options = {}
            return console.log("launch options:", this.options), this.options;
        }, u.prototype.onShow = function(u) {
            console.log("on show options:", u), Ou.eventCenter.event(Ou.events.EventAppShow, this.formatLaunchOptions(u));
        }, u.prototype.onHide = function() {
            this.options = null, Ou.eventCenter.event(Ou.events.EventAppHide);
        }, u.prototype.onShareAppMessage = function(A) {}, u.prototype.compareSDKVersion = function(u) {
            return Ou.utils.compareVersion(this.SDKVersion, u);
        }, u.prototype.exit = function() {
            wx.exitMiniProgram();
        }, u.prototype.formatLaunchOptions = function(u) {
            var G = {};
            if (u) {
                u.shareTicket && (G.groupID = u.shareTicket);
                var A = u.query;
                A && (G.shareQuery = A), u.referrerInfo && (1037 != u.scene && 1038 != u.scene || (G.extraData = u.referrerInfo.extraData), G.appID = u.referrerInfo.appId), G.scene = u.scene;
            }
            return G;
        }, u;
    }(), Ou.MiniSystemHelper = yu, Lu = bu || (bu = {}), ju = function() {
        function u() {
            this.ResizeShared = "resizeShared", this.UserInfo = "userInfo";
        }
        return u.prototype.onLogin = function(u) {
            this.postMessage(this.UserInfo, u);
        }, u.prototype.postMessage = function(u, G) {
            var A = wx.getOpenDataContext();
            A && A.postMessage({
                cmd: u,
                data: G
            });
        }, u.prototype.refreshSharedSprite = function(u, G, A, s, Q) {
            return this.resizeSharedSprite(u, G), A ? Laya.timer.once(A, this, this.drawSharedTexture, [s, Q]) : this.drawSharedTexture(s, Q), this.openSprite;
        }, u.prototype.destroySharedSprite = function() {
            this.destroySharedTexture(), this.isOpenSpriteValid() && (this.openSprite.destroy(), this.openSprite = null);
        }, u.prototype.resizeSharedSprite = function(u, G) {
            this.isOpenSpriteValid() && this.destroySharedSprite(), this.openSprite = new Laya.Sprite();
            var A = this.sharedCanvas;
            A && (A.width = u, A.height = G), this.postMessage(this.ResizeShared, Laya.stage._canvasTransform);
        }, u.prototype.drawSharedTexture = function(u, G) {
            this.isOpenSpriteValid() && (u = u || 0, this.destroySharedTexture(), this.sharedTexture = new Laya.Texture(this.sharedCanvas), this.openSprite.graphics.drawTexture(this.sharedTexture), G ? (this.sharedTexture.bitmap.alwaysChange = !1, -1 < u && Laya.timer.loop(G, this, this.updateSharedTexture, null, !0)) : this.sharedTexture.bitmap.alwaysChange = !0, 0 < u && Laya.timer.once(u, this, this.clearTimer));
        }, u.prototype.updateSharedTexture = function() {
            this.sharedTexture && this.sharedTexture.bitmap && this.sharedTexture.bitmap._source && this.sharedTexture.bitmap.reloadCanvasData();
        }, Object.defineProperty(u.prototype, "sharedCanvas", {
            get: function() {
                return this.wxSharedCanvas || (this.wxSharedCanvas = wx.getOpenDataContext().canvas), this.wxSharedCanvas;
            },
            enumerable: !0,
            configurable: !0
        }), u.prototype.destroySharedTexture = function() {
            this.sharedTexture && (this.sharedTexture.bitmap.alwaysChange = !1, this.sharedTexture.destroy(!0), this.sharedTexture = null, this.openSprite.graphics.clear(!0), this.clearTimer());
        }, u.prototype.clearTimer = function() {
            Laya.timer.clearAll(this);
        }, u.prototype.isOpenSpriteValid = function() {
            return this.openSprite && !this.openSprite.destroyed;
        }, u;
    }(), Lu.MiniOpenUtils = ju, tu = bu || (bu = {}), Ru = function() {
        function G() {}
        return Object.defineProperty(G.prototype, "isSubmitting", {
            get: function() {
                return this._isSubmitting;
            },
            enumerable: !0,
            configurable: !0
        }), G.prototype.reset = function(u, G, A, s, Q) {
            this.retryCnt = 0, this.score = G, this.key = u, this.startMs = A, this.endMs = s, this.order = Q, this.data = null;
        }, G.prototype.resubmit = function() {
            this.retryCnt++, this.submit();
        }, G.prototype.submitSuccess = function() {
            this.toResubmit ? this.submit() : this.complete && this.complete.runWith(this.key);
        }, G.prototype.submitFail = function() {
            if (this.retryCnt > G.MaxRetryCnt) return console.debug("submit score faile!", this.data), void(this.complete && this.complete.runWith(this.key));
            var u = 1e3 * Math.pow(2, this.retryCnt);
            Laya.timer.once(u, this, this.resubmit);
        }, G.prototype.submit = function(u) {
            u && (this.complete = u), this.toResubmit = !1, this._isSubmitting = !0, this.doSubmit();
        }, G.prototype.doSubmit = function() {}, G.MaxRetryCnt = 3, G;
    }(), tu.SubmitAction = Ru, Wu = bu || (bu = {}), Ju = function(u) {
        function G() {
            return null !== u && u.apply(this, arguments) || this;
        }
        return R(G, u), G.prototype.doSubmit = function() {
            var u = this;
            this.data || (this.data = {
                key: this.key,
                value: JSON.stringify({
                    wxgame: {
                        score: this.score,
                        update_time: this.endMs / 1e3
                    }
                })
            }), wx.setUserCloudStorage({
                KVDataList: [this.data],
                success: function() {
                    u.submitSuccess();
                },
                fail: function() {
                    u.submitFail();
                }
            });
        }, G;
    }(Wu.SubmitAction), Wu.MiniSubmitAction = Ju, Cu = bu || (bu = {}), Fu = function() {
        function u(u) {
            this.actions = {}, this.queue = [], this.submitAction = u;
        }
        return u.prototype.addAction = function(u, G) {
            this.actions[u] ? console.debug("action " + u + " is submitting") : this.actions[u] = G;
        }, u.prototype.removeAction = function(u) {
            this.actions[u] && (this.queue.push(this.actions[u]), this.actions[u] = null);
        }, u.prototype.getAction = function() {
            return 0 < this.queue.length ? this.queue.pop() : new this.submitAction();
        }, u.prototype.onSubmitComplete = function(u) {
            this.removeAction(u);
        }, u.prototype.submit = function(u, G, A, s, Q) {
            var z = this.actions[u];
            z || (z = this.getAction(), this.addAction(u, z)), z.reset(u, G, A, s, Q), z.isSubmitting ? z.toResubmit = !0 : z.submit(Laya.Handler.create(this, this.onSubmitComplete));
        }, u;
    }(), Cu.SubmitActionManager = Fu, ((ru = bu || (bu = {})).http || (ru.http = {})).wxRequest = function(u, G, A, s, Q, z) {
        Q && Q.runWith(u);
    }, Su = bu || (bu = {}), Yu = function(u) {
        function G() {
            return null !== u && u.apply(this, arguments) || this;
        }
        return R(G, u), G.prototype.doLogin = function() {
            var G = this;
            wx.login({
                success: function(u) {
                    if (console.log(u), !u || !u.code) return console.debug("wechat login response error"), void G.loginFail();
                    G.loginServer({
                        Code: u.code
                    });
                },
                fail: function() {
                    console.debug("wechat login fail"), G.thirdLoginFail();
                }
            });
        }, G;
    }(Su.LoginHandler), Su.MiniLoginHandler = Yu;
var Pu, Vu, Nu, au, hu, eu, Zu, Ku, bu, Iu, uG = function() {
    function d() {}
    return d.encode = function(u) {
        var G, A, s, Q, z, H, x, X = "",
            w = 0;
        for (u = d._utf8_encode(u); w < u.length;) Q = (G = u.charCodeAt(w++)) >> 2, z = (3 & G) << 4 | (A = u.charCodeAt(w++)) >> 4, H = (15 & A) << 2 | (s = u.charCodeAt(w++)) >> 6, x = 63 & s, isNaN(A) ? H = x = 64 : isNaN(s) && (x = 64), X = X + d._keyStr.charAt(Q) + d._keyStr.charAt(z) + d._keyStr.charAt(H) + d._keyStr.charAt(x);
        return X;
    }, d.decode = function(u) {
        var G, A, s, Q, z, H, x = "",
            X = 0;
        for (u = u.replace(/[^A-Za-z0-9\+\/\=]/g, ""); X < u.length;) G = d._keyStr.indexOf(u.charAt(X++)) << 2 | (Q = d._keyStr.indexOf(u.charAt(X++))) >> 4, A = (15 & Q) << 4 | (z = d._keyStr.indexOf(u.charAt(X++))) >> 2, s = (3 & z) << 6 | (H = d._keyStr.indexOf(u.charAt(X++))), x += String.fromCharCode(G), 64 != z && (x += String.fromCharCode(A)), 64 != H && (x += String.fromCharCode(s));
        return x = d._utf8_decode(x);
    }, d.isBase64 = function(u) {
        if (null == u || 0 == u.length) return !1;
        if (u.length % 4 != 0) return !1;
        for (var G = 0; G < u.length; G++) {
            var A = u[G];
            if (!("a" <= A && A <= "z" || "A" <= A && A <= "Z" || "0" <= A && A <= "9" || "+" == A || "/" == A || "=" == A)) return !1;
        }
        return !0;
    }, d._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d._utf8_encode = function(u) {
        if (!u) return "";
        u = u.replace(/\r\n/g, "\n");
        for (var G = "", A = 0; A < u.length; A++) {
            var s = u.charCodeAt(A);
            s < 128 ? G += String.fromCharCode(s) : (127 < s && s < 2048 ? G += String.fromCharCode(s >> 6 | 192) : (G += String.fromCharCode(s >> 12 | 224), G += String.fromCharCode(s >> 6 & 63 | 128)), G += String.fromCharCode(63 & s | 128));
        }
        return G;
    }, d._utf8_decode = function(u) {
        for (var G = "", A = 0, s = 0, Q = 0, z = 0; A < u.length;)(s = u.charCodeAt(A)) < 128 ? (G += String.fromCharCode(s), A++) : 191 < s && s < 224 ? (Q = u.charCodeAt(A + 1), G += String.fromCharCode((31 & s) << 6 | 63 & Q), A += 2) : (Q = u.charCodeAt(A + 1), z = u.charCodeAt(A + 2), G += String.fromCharCode((15 & s) << 12 | (63 & Q) << 6 | 63 & z), A += 3);
        return G;
    }, d;
}();
Pu = bu || (bu = {}), Vu = function() {
    function u() {
        this.sessionValidity = 0, this.sessionExpire = 0, this.status = 1, this.retryCnt = 0, this.MaxRetry = 2;
    }
    return u.prototype.init = function(u) {
        this.apiBase = u, Pu.eventCenter.on(Pu.events.EventNetTypeChanged, this, this.onNetTypeChanged);
    }, u.prototype.onNetTypeChanged = function(u) {
        1 === this.Status && 0 != u && this.login();
    }, u.prototype.updateSession = function() {
        this.sessionExpire = this.sessionValidity + Date.now();
    }, Object.defineProperty(u.prototype, "OpenID", {
        get: function() {
            return this.openid;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(u.prototype, "Status", {
        get: function() {
            return 0 === this.status && this.sessionExpire <= Date.now() && (this.status = 1), this.status;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(u.prototype, "Session", {
        get: function() {
            return 1 == this.Status && (this.session = null), this.session;
        },
        enumerable: !0,
        configurable: !0
    }), u.prototype.loginZmServer = function(u, G, A) {
        this.loginServer(u, G, A);
    }, u.prototype.loginServer = function(u, G, A) {
        var s = this;
        this.apiBase || (Pu.eventCenter.event(Pu.events.EventLogin), !A) ? Pu.http.POST(this.apiBase + "/login", u, Laya.Handler.create(this, function(u) {
            u && 0 === u.Status ? (s.openid = u.OpenID, s.session = u.Session.ID, s.sessionValidity = 1e3 * u.Session.Expire, s.sessionExpire = s.sessionValidity + Date.now(), s.status = 0, s.retryCnt = 0, Pu.eventCenter.event(Pu.events.EventLogin, u), G && G.runWith(u)) : A && A.runWith(u);
        }), Laya.Handler.create(this, function() {
            s.loginFailed(G, A);
        })) : A.run();
    }, u.prototype.loginFailed = function(u, G) {
        this.retryCnt < this.MaxRetry ? (this.retryCnt++, Laya.timer.once(2e3 * this.retryCnt, this, this.login, [u, G])) : (Pu.eventCenter.event(Pu.events.EventLogin), G && G.run());
    }, u.prototype.doGET = function(G, A, s, Q) {
        var z = this;
        A.session = this.session, Pu.http.GET(this.apiBase + G, A, Laya.Handler.create(this, function(u) {
            u && 0 === u.Status ? (z.updateSession(), s && s.runWith(u)) : u && 1 === u.Status && "Unauthorized" === u.Message ? (z.sessionExpire = 0, z.GET(G, A, s, Q)) : Q && Q.runWith(u);
        }), Q);
    }, u.prototype.GET = function(G, A, s, Q) {
        var z = this;
        1 == this.Status ? this.login(Laya.Handler.create(this, function(u) {
            u && 0 === u.Status ? z.doGET(G, A, s, Q) : Q && Q.runWith(u);
        }), Q) : this.doGET(G, A, s, Q);
    }, u.prototype.doPOST = function(G, A, s, Q) {
        var z = this;
        Pu.http.POST(this.apiBase + G + "?session=" + this.session, A, Laya.Handler.create(this, function(u) {
            u && 0 === u.Status ? (z.updateSession(), s && s.runWith(u)) : u && 1 === u.Status && "Unauthorized" === u.Message ? (z.sessionExpire = 0, z.POST(G, A, s, Q)) : Q && Q.runWith(u);
        }), Q);
    }, u.prototype.POST = function(G, A, s, Q) {
        var z = this;
        1 == this.Status ? this.login(Laya.Handler.create(this, function(u) {
            u && 0 === u.Status ? z.doPOST(G, A, s, Q) : Q && Q.runWith(u);
        }), Q) : this.doPOST(G, A, s, Q);
    }, u.prototype.getScore = function(u, G, A) {
        this.GET("/user/score/" + parseInt(u + ""), {}, G, A);
    }, u.prototype.setScore = function(u, G, A, s, Q) {
        this.POST("/rank", {
            Score: u,
            Type: G,
            Currency: A,
            Force: !1
        }, s, Q);
    }, u.prototype.setScoreForce = function(u, G, A, s, Q) {
        this.POST("/rank", {
            Score: u,
            Type: G,
            Currency: A,
            Force: !0
        }, s, Q);
    }, u.prototype.setUserInfo = function(u, G, A, s) {
        this.POST("/user/info", {
            Name: u,
            Avatar: G
        }, A, s);
    }, u.prototype.uploadEncodeUserInfo = function(u, G, A, s) {
        this.setUserInfo(uG.encode(u), uG.encode(G), A, s);
    }, u.prototype.getRank = function(u, G, A) {
        this.GET("/user/rank/" + parseInt(u + ""), {}, G, A);
    }, u.prototype.getRankList = function(u, G, A) {
        this.GET("/rank/list/" + parseInt(u + ""), {}, G, A);
    }, u.prototype.getRankListLimit = function(u, G, A, s) {
        this.GET("/rank/list/" + parseInt(u + ""), {
            limit: G
        }, A, s);
    }, u.prototype.getRankListWithInfo = function(u, G, A) {
        this.GET("/ttrank/list/" + parseInt(u + ""), {}, G, A);
    }, u.prototype.getRankListWithInfoLimit = function(u, G, A, s) {
        this.GET("/ttrank/list/" + parseInt(u + ""), {
            limit: G
        }, A, s);
    }, u.prototype.getRankListWithDecodeInfo = function(u, G, A) {
        this.getRankListWithInfo(u, Laya.Handler.create(this, function(u) {
            u && 0 == u.Status && u.Lists && 0 < u.Lists.length && u.Lists.forEach(function(u) {
                u && (uG.isBase64(u.Name) && (u.Name = uG.decode(u.Name)), uG.isBase64(u.Avatar) && (u.Avatar = uG.decode(u.Avatar)));
            }), G && G.runWith([u]);
        }), A);
    }, u.prototype.getRankListWithDecodeInfoLimit = function(u, G, A, s) {
        this.getRankListWithInfoLimit(u, G, Laya.Handler.create(this, function(u) {
            u && 0 == u.Status && u.Lists && 0 < u.Lists.length && u.Lists.forEach(function(u) {
                u && (uG.isBase64(u.Name) && (u.Name = uG.decode(u.Name)), uG.isBase64(u.Avatar) && (u.Avatar = uG.decode(u.Avatar)));
            }), A && A.runWith([u]);
        }), s);
    }, u.prototype.getCurrency = function(u, G) {
        this.GET("/user/currency", {}, u, G);
    }, u.prototype.setCurrency = function(u, G, A, s) {
        0 == G && 0 == u || this.POST("/user/currency", {
            Type: G,
            Currency: u
        }, A, s);
    }, u.prototype.getItemList = function(u, G) {
        this.GET("/user/item", {}, u, G);
    }, u.prototype.setItem = function(u, G, A, s) {
        0 != G && (0 < G ? this.POST("/item/" + parseInt(u + ""), {
            ItemNum: G
        }, A, s) : this.POST("/user/item/" + parseInt(u + ""), {
            ItemNum: -G
        }, A, s));
    }, u.prototype.setData = function(u, G, A) {
        this.POST("/user/data", {
            Data: JSON.stringify(u)
        }, G, A);
    }, u.prototype.getSign = function(u, G) {
        this.GET("/sign", {}, u, G);
    }, u.prototype.setSign = function(u, G) {
        this.POST("/sign", {}, u, G);
    }, u.prototype.getInviteList = function(u, G) {
        this.GET("/task/invite", {}, u, G);
    }, u.prototype.completeInvite = function(u, G, A) {
        this.POST("/share", {
            OpenID: u
        }, G, A);
    }, u.prototype.finishInvite = function(u, G, A, s) {
        this.POST("/task/reward/" + parseInt(u + ""), {
            Reset: G
        }, A, s);
    }, u.prototype.msgSecCheck = function(u, G, A) {
        this.POST("/sec/msg", {
            Content: u
        }, G, A);
    }, u.prototype.subscribeMessage = function(u, G, A, s, Q, z) {
        void 0 === s && (s = "index"), this.POST("/notify", {
            TemplateID: u,
            Data: G,
            Delay: A,
            Page: s
        }, Q, z);
    }, u;
}(), Pu.API = Vu, Nu = bu || (bu = {}), au = function(u) {
    function G() {
        return null !== u && u.apply(this, arguments) || this;
    }
    return R(G, u), G.prototype.login = function(G, A) {
        var s = this;
        s.loginServer({
            Code: u.code
        }, G, A);
    }, G;
}(Nu.API), Nu.MiniAPI = au, hu = bu || (bu = {}), eu = function() {
    function A() {
        this.updateStatus = 0;
    }
    return A.prototype.checkUpdate = function(u) {
        var G = this;
        window.wx && "function" == typeof wx.getUpdateManager ? (this.updateManager = wx.getUpdateManager(), Laya.timer.once(A.FailInterval, this, this.updateFail), this.callback = u, this.updateManager.onCheckForUpdate(function(u) {
            u && u.hasUpdate ? (Laya.timer.clearAll(G), G.updateStatus = 2, G.showUpdateProgress()) : (G.updateStatus = 1, G.updateSuccess());
        }), this.updateManager.onUpdateReady(function() {
            G.updateStatus = 3, G.applyUpdate();
        }), this.updateManager.onUpdateFailed(function() {
            G.updateStatus = 4, G.updateFail();
        })) : (this.updateStatus = 1, u && u.run());
    }, A.prototype.applyUpdate = function() {
        3 == this.updateStatus && (Laya.timer.clearAll(this), this.updateManager.applyUpdate());
    }, A.prototype.showUpdateProgress = function() {
        wx.showLoading({
            title: "正在更新"
        });
    }, A.prototype.updateFail = function() {
        Laya.timer.clearAll(this), wx.hideLoading(), wx.showToast({
            title: "更新失败"
        }), this.invokeCallback();
    }, A.prototype.updateSuccess = function() {
        Laya.timer.clearAll(this), this.invokeCallback();
    }, A.prototype.invokeCallback = function() {
        this.callback && (this.callback.run(), this.callback = null);
    }, A.FailInterval = 3e3, A;
}(), hu.MiniUpdate = eu, Zu = bu || (bu = {}), Ku = function(u) {
    function G() {
        return null !== u && u.apply(this, arguments) || this;
    }
    return R(G, u), G.prototype.setUpOnErrorHandler = function() {
        var G = this;
    }, G.prototype.upload = function(u) {
        this.isInit && Zu.http.GET(this.Server, u);
    }, G.prototype.initDeviceInfo = function() {
        return !0;
    }, G;
}(Zu.Statistics), Zu.MiniStatistics = Ku, (Iu = bu || (bu = {})).initMini = function(u) {
    Iu.device = Iu.MiniDevicer, Iu.shareHelper = Iu.MiniShare, Iu.share = new Iu.YokaShare(Iu.MiniShare, u), Iu.system = new Iu.MiniSystemHelper(), Iu.statistics = new Iu.MiniYokaStat(), Iu.opendata = new Iu.MiniOpenUtils(), Iu.submitter = new Iu.SubmitActionManager(Iu.MiniSubmitAction), Iu.http.request = Iu.http.wxRequest, Iu.login = new Iu.MiniLoginHandler(), Iu.api = new Iu.MiniAPI(), Iu.update = new Iu.MiniUpdate(), Iu.shouldSendStat = !0, Iu.ad.setAdEnable(!0), Iu.stat = new Iu.MiniStatistics(), Iu.stat.init(Iu.appId, Iu.version());
};