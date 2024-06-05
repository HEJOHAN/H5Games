! function() {
    function e(e) {
        var t = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e, n) {
            t["[object " + e + "]"] = e.toLowerCase();
        }), null == e ? e : "object" == typeof e || "function" == typeof e ? t[function(e) {
            return Object.prototype.toString.call(e);
        }.call(e)] || "object" : typeof e;
    }

    function t(e, t) {
        h++, e.as = v, e.at = m, e.rq_c = h, e.ifo = i, e.ak = o.app_key, e.uu = c, e.v = r, e.st = Date.now(), e.ev = t, e.wsr = g, "" !== function(e) {
            if (void 0 === e || "" === e) return "";
            var t = {};
            for (var n in e) "rawData" != n && "errMsg" != n && (t[n] = e[n]);
            return t;
        }(e.ufo) && (e.ufo = e.ufo), e.ec = f
    }

    function n(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
    }

    function a(e) {
        for (var t = "", n = 0; n < e.length; n++) e[n].length > t.length && (t = e[n]);
        return t;
    }
    var r = "2.0.0",
        s = "glog",
        o = {
            "app_key": "3b56585d5a0f3a4e96255ad1570e174a",
            "getLocation": !1,
            "useOpen": !0
        }
    "" === o.app_key && console.error("请在配置文件中填写您的app_key"), o.app_key = o.app_key.replace(/\s/g, "")
    var i = "",
        c = function() {
            var e = "";
            e = "uuid_getstoragesync";
            if (e) i = !1;
            else {
                e = function() {
                    function e() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                    }
                    return e() + e() + e() + e() + e() + e() + e() + e();
                }(), i = !0;
            }
            return e;
        }(),
        u = {},
        d = "",
        l = "",
        f = 0,
        h = "",
        p = Date.now(),
        m = "" + Date.now() + Math.floor(1e7 * Math.random()),
        v = "" + Date.now() + Math.floor(1e7 * Math.random()),
        w = 0,
        _ = "",
        y = "",
        S = !0,
        x = !1,
        q = ["aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent"],
        I = ["payStart", "paySuccess", "payFail", "die", "revive", "tools", "award"],
        b = ["complete", "fail"];
    var M = {
        aldSendEvent: function(e, a) {
            var r = n(u);
            "" !== e && "string" == typeof e && e.length <= 255 ? (r.tp = e, "string" == typeof a && a.length <= 255 ? (r.ct = String(a), t(r, "event")) : "object" == typeof a ? (JSON.stringify(a).length >= 255 && console.error("自定义事件参数不能超过255个字符"), r.ct = JSON.stringify(a), t(r, "event")) : void 0 === a || "" === a ? t(r, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
        },
        aldOnShareAppMessage: function(a) {},
        aldShareAppMessage: function(a) {
            x = !0;
            var r = a,
                s = "";
            s = void 0 !== g.query.ald_share_src ? void 0 !== r.query ? (g.query.ald_share_src.indexOf(c), r.query + "&ald_share_src=" + g.query.ald_share_src + "," + c) : (g.query.ald_share_src.indexOf(c), "ald_share_src=" + g.query.ald_share_src + "," + c) : void 0 !== r.query ? r.query + "&ald_share_src=" + c : "ald_share_src=" + c;
            var o = n(u);
            "undefined" != e(r.ald_desc) && (s += "&ald_desc=" + r.ald_desc), r.query = s, o.ct = r, o.tp = "ald_share_chain", t(o, "event");
        },
        aldSendSession: function(e) {
            if ("" !== e && e) {
                var a = n(u);
                a.tp = "session", a.ct = "session", d = e, "" === _ ? null : (a.ufo = _, "" !== _ && (a.gid = ""), t(a, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        aldSendOpenid: function(e) {
            if ("" !== e && e) {
                l = e;
                var a = n(u);
                a.tp = "openid", a.ct = "openid", t(a, "event");
            } else console.error("openID不能为空");
        }
    };
    for (var k = 0; k < q.length; k++) ! function(e, t) {}(q[k], M[q[k]]);
}();