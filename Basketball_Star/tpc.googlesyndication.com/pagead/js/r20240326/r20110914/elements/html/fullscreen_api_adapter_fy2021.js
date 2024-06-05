(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function aa(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = n, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    };
    var ba = aa(610401301),
        ca = aa(188588736);
    var r;
    const ia = n.navigator;
    r = ia ? ia.userAgentData || null : null;

    function t(a) {
        return ba ? r ? r.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function u(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function w() {
        return ba ? !!r && 0 < r.brands.length : !1
    }

    function A() {
        return w() ? t("Chromium") : (u("Chrome") || u("CriOS")) && !(w() ? 0 : u("Edge")) || u("Silk")
    };

    function B(a) {
        B[" "](a);
        return a
    }
    B[" "] = function() {};
    !u("Android") || A();
    A();
    u("Safari") && (A() || (w() ? 0 : u("Coast")) || (w() ? 0 : u("Opera")) || (w() ? 0 : u("Edge")) || (w() ? t("Microsoft Edge") : u("Edg/")) || w() && t("Opera"));
    var D = Symbol();
    var ja = {},
        ka = {};

    function la(a) {
        return !(!a || "object" !== typeof a || a.g !== ka)
    }

    function E(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function F(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[D] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[D] = d | 1;
        return !0
    }
    class ma {}
    class na {}
    Object.freeze(new ma);
    Object.freeze(new na);
    let G;

    function oa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (F(a, void 0, 0)) return
                    } else if (null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function pa(a, b, c, d, f) {
        if (null != a) {
            if (Array.isArray(a)) a = F(a, void 0, 0) ? void 0 : f && (a[D] | 0) & 2 ? a : qa(a, b, c, void 0 !== d, f);
            else if (E(a)) {
                const e = {};
                for (let g in a) e[g] = pa(a[g], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function qa(a, b, c, d, f) {
        const e = d || c ? a[D] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = pa(a[g], b, c, d, f);
        c && c(e, a);
        return a
    }

    function ra(a) {
        return a.J === ja ? a.toJSON() : oa(a)
    };

    function I(a, b) {
        a = a.g;
        var c = a[D];
        if (-1 === b) b = null;
        else {
            var d = c >> 14 & 1023;
            d = 0 === d ? 536870912 : d;
            b >= d ? b = c & 256 ? a[a.length - 1][b] : void 0 : (b += +!!(c & 512) - 1, b = 0 > b || b >= a.length || b >= d ? void 0 : a[b])
        }
        return b
    }

    function J(a, b) {
        a = I(a, b);
        return (null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function K(a, b) {
        a = I(a, b);
        return (null == a || "string" === typeof a ? a : void 0) ? ? ""
    }

    function L(a, b) {
        a = I(a, b);
        return (null == a ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 0
    };
    var M = class {
        constructor(a) {
            a: {
                null == a && (a = G);G = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[D] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, E(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[D] = b
            }
            this.g = a
        }
        toJSON() {
            return sa(this, qa(this.g, ra, void 0, void 0, !1), !0)
        }
    };
    M.prototype.J = ja;
    M.prototype.toString = function() {
        return sa(this, this.g, !1).toString()
    };

    function sa(a, b, c) {
        var d = ca ? void 0 : a.constructor.K;
        const f = (c ? a.g : b)[D];
        a = b.length;
        if (!a) return b;
        let e, g;
        if (E(c = b[a - 1])) {
            a: {
                var l = c;
                let p = {},
                    q = !1;
                for (var k in l) {
                    let m = l[k];
                    if (Array.isArray(m)) {
                        let v = m;
                        if (F(m, d, +k) || la(m) && 0 === m.size) m = null;
                        m != v && (q = !0)
                    }
                    null != m ? p[k] = m : q = !0
                }
                if (q) {
                    for (var h in p) {
                        l = p;
                        break a
                    }
                    l = null
                }
            }
            l != c && (e = !0);a--
        }
        for (k = +!!(f & 512) - 1; 0 < a; a--) {
            h = a - 1;
            c = b[h];
            h -= k;
            if (!(null == c || F(c, d, h) || la(c) && 0 === c.size)) break;
            g = !0
        }
        if (!e && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        l && b.push(l);
        return b
    };

    function ta(a) {
        var b = ua;
        const c = va;
        va = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
        return a
    }
    let va = void 0;
    const ua = a => null !== a && void 0 !== a;

    function wa(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function xa(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    var ya = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function za(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let N = [];
    const O = () => {
        const a = N;
        N = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Aa = a => {
            N.push(a);
            1 == N.length && (window.Promise ? Promise.resolve().then(O) : window.setImmediate ? setImmediate(O) : setTimeout(O, 0))
        },
        Ba = a => new Promise(b => {
            "complete" === a.readyState || "interactive" === a.readyState ? Aa(b) : a.addEventListener("DOMContentLoaded", b)
        }),
        Ca = a => new Promise(b => {
            "complete" === a.document.readyState ? Aa(b) : a.addEventListener("load", b)
        });

    function Da(a = document) {
        return a.createElement("img")
    };

    function Ea(a) {
        n.google_image_requests || (n.google_image_requests = []);
        const b = Da(n.document);
        b.src = a;
        n.google_image_requests.push(b)
    };
    let Fa = 0;

    function Ga(a) {
        return (a = Ha(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Ha(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    };
    class Ia {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Ja = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Oa = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Pa = class {
            constructor(a, b) {
                this.url = a;
                this.H = !!b;
                this.depth = null
            }
        };
    let P = null;

    function Qa() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ra() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Sa = class {
        constructor(a, b) {
            var c = Ra() || Qa();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const R = n.performance,
        Ta = !!(R && R.mark && R.measure && R.clearMarks),
        S = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Ta) {
                var b;
                if (null === P) {
                    P = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (P = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = P;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ua(a) {
        a && R && S() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Va {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = S() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Sa(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && S() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Ra() || Qa()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && S() && R.mark(b);
                !this.g || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function T(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Wa(a, b, c, d, f) {
        const e = [];
        za(a, function(g, l) {
            (g = Xa(g, b, c, d, f)) && e.push(l + "=" + g)
        });
        return e.join(b)
    }

    function Xa(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(Xa(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Wa(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ya(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Za(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ya(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(e, g) {
            return e - g
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.g.length; e++) {
            const g = a.g[e],
                l = a.h[g];
            for (let k = 0; k < l.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let h = Wa(l[k], a.i, ",$");
                if (h) {
                    h = f + h;
                    if (d >= h.length) {
                        d -= h.length;
                        c += h;
                        f = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = f + "trn=" + b);
        return c + a
    }
    class $a {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function ab(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }

    function bb(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                Ua(f), c = a.m(b, new Ia(e, {
                    message: ab(e)
                }), void 0, void 0)
            } catch (g) {
                a.l(217, g)
            }
            if (c) window.console ? .error ? .(e);
            else throw e;
        }
        return d
    }

    function cb(a, b, c) {
        return (...d) => bb(a, b, () => c.apply(void 0, d))
    }
    var eb = class {
        constructor(a = null) {
            this.j = U;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const x = new $a;
                var g = x;
                g.g.push(1);
                g.h[1] = T("context", a);
                b.error && b.meta && b.id || (b = new Ia(b, {
                    message: ab(b)
                }));
                if (b.msg) {
                    g = x;
                    var l = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = T("msg", l)
                }
                var k = b.meta || {};
                b = k;
                if (this.h) try {
                    this.h(b)
                } catch (y) {}
                if (d) try {
                    d(b)
                } catch (y) {}
                d = x;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = n;
                k = [];
                let Q;
                b = null;
                do {
                    var h = d;
                    try {
                        var p;
                        if (p = !!h && null != h.location.href) b: {
                            try {
                                B(h.foo);
                                p = !0;
                                break b
                            } catch (y) {}
                            p = !1
                        }
                        var q = p
                    } catch {
                        q = !1
                    }
                    q ? (Q = h.location.href, b = h.document && h.document.referrer || null) : (Q = b, b = null);
                    k.push(new Pa(Q || ""));
                    try {
                        d = h.parent
                    } catch (y) {
                        d = null
                    }
                } while (d && h != d);
                for (let y = 0, Ka = k.length - 1; y <= Ka; ++y) k[y].depth = Ka - y;
                h = n;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == k.length - 1)
                    for (q = 1; q < k.length; ++q) {
                        var m = k[q];
                        m.url || (m.url = h.location.ancestorOrigins[q - 1] || "", m.H = !0)
                    }
                var v = k;
                let da = new Pa(n.location.href, !1);
                h = null;
                const ea = v.length - 1;
                for (m =
                    ea; 0 <= m; --m) {
                    var z = v[m];
                    !h && Ja.test(z.url) && (h = z);
                    if (z.url && !z.H) {
                        da = z;
                        break
                    }
                }
                z = null;
                const pb = v.length && v[ea].url;
                0 != da.depth && pb && (z = v[ea]);
                e = new Oa(da, z);
                if (e.h) {
                    v = x;
                    var C = e.h.url || "";
                    v.g.push(4);
                    v.h[4] = T("top", C)
                }
                var fa = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    var ha = e.g.url.match(ya),
                        H = ha[1],
                        La = ha[3],
                        Ma = ha[4];
                    C = "";
                    H && (C += H + ":");
                    La && (C += "//", C += La, Ma && (C += ":" + Ma));
                    var Na = C
                } else Na = "";
                H = x;
                fa = [fa, {
                    url: Na
                }];
                H.g.push(5);
                H.h[5] = fa;
                db(this.j, f, x, this.i, c)
            } catch (x) {
                try {
                    db(this.j, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: ab(x),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (Q) {}
            }
            return !0
        }
    };

    function db(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof $a ? e = c : (e = new $a, za(c, (l, k) => {
                var h = e;
                const p = h.j++;
                l = T(k, l);
                h.g.push(p);
                h.h[p] = l
            }));
            const g = Za(e, "/pagead/gen_204?id=" + b + "&");
            g && Ea(g)
        } catch (e) {}
    }

    function fb() {
        var a = U,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class gb {
        constructor() {
            this.g = Math.random()
        }
    };
    let U, V;
    const W = new Va;
    var hb = () => {
        window.google_measure_js_timing || (W.g = !1, W.h != W.i.google_js_reporting_queue && (S() && Array.prototype.forEach.call(W.h, Ua, void 0), W.h.length = 0))
    };
    (a => {
        U = a ? ? new gb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        fb();
        V = new eb(W);
        V.h = b => {
            const c = Fa;
            0 !== c && (b.jc = String(c), b.shv = Ga(c))
        };
        V.i = !0;
        "complete" == window.document.readyState ? hb() : W.g && wa(window, "load", () => {
            hb()
        })
    })();
    var ib = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[D] |= 32;
                G = b;
                b = new a(b);
                G = void 0
            }
            return b
        }
    }(class extends M {});
    var X = a => {
            a.googMsgType = "fullscreen"
        },
        jb = (a, b) => {
            const c = f => {
                let e;
                try {
                    e = JSON.parse(f.data)
                } catch (g) {
                    return
                }!e || "fullscreen" !== e.googMsgType || b(e, f)
            };
            wa(a, "message", c);
            let d = !1;
            return () => {
                let f = !1;
                d || (d = !0, a.removeEventListener ? (a.removeEventListener("message", c, !1), f = !0) : f = !1);
                return f
            }
        };

    function kb(a, b, c, d) {
        return jb(a, cb(d, 952, (f, e) => {
            if (e.source === b) {
                if (!("eventType" in f)) throw Error(`bad message ${JSON.stringify(f)}`);
                delete f.googMsgType;
                c(f)
            }
        }))
    }

    function lb(a, b) {
        X(b);
        a.postMessage(JSON.stringify(b), "*")
    };
    class mb {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function nb(a) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let b = a[10];
        if (b) return b;
        const {
            promise: c,
            resolve: d
        } = new mb;
        b = {
            promise: c,
            resolve: d
        };
        return a[10] = b
    };

    function ob() {
        this.o = this.o;
        this.j = this.j
    }
    ob.prototype.o = !1;

    function qb(a, b) {
        a.o ? b() : (a.j || (a.j = []), a.j.push(b))
    };

    function rb(a) {
        const b = kb(a.h, a.i, c => {
            if ("visible" === c.eventType) sb(a);
            else if ("backButton" === c.eventType)
                for (const d of a.C) bb(a.s, 1003, d)
        }, a.s);
        qb(a, b);
        tb(a);
        ub(a)
    }

    function Y(a, b) {
        vb(a, "usg_err", {
            error: b,
            stack: Error().stack ? ? ""
        }, .25);
        throw Error(`FullscreenApi usage error: '${b}'. See ApiError in fullscreen/proto/enums.proto for details`);
    }

    function Z(a, b, c) {
        b.includes(a.g) ? a.g = c : (vb(a, "st_err", {
            old_state: a.g,
            new_state: c
        }), J(a.config, 8) && (a.g = 6, a = a.i, b = {
            eventType: "adError"
        }, X(b), a.postMessage(JSON.stringify(b), "*")))
    }

    function vb(a, b, c, d = .01) {
        c.type = b;
        c.version = Ga(105);
        c.slot = L(a.config, 3);
        c.freq = d;
        c.qem = K(a.config, 7);
        db(a.I, "fullscreen_adapter", c, !1, d)
    }

    function tb(a) {
        const b = a.h;
        if (b.IntersectionObserver) {
            var c = new b.IntersectionObserver(cb(a.s, 954, (d, f) => {
                for (const e of d) 0 >= e.intersectionRatio || (sb(a), f.disconnect())
            }), {
                threshold: .1
            });
            c.observe(b.document.documentElement);
            qb(a, () => {
                c.disconnect()
            })
        }
    }
    async function ub(a) {
        let b;
        const c = wb(a),
            d = L(a.config, 5);
        switch (d) {
            case 0:
                throw Error("adReadyTrigger is not set");
            case 1:
                b = Promise.resolve();
                break;
            case 2:
                b = Ba(c ? ta(c.contentDocument) : a.h.document);
                break;
            case 3:
                b = Ca(c ? ta(c.contentWindow) : a.h);
                break;
            default:
                xa(d, void 0)
        }
        try {
            await b.then(() => Promise.all(a.A))
        } catch {
            a.notifyError("rejected adReadyDelay");
            return
        }
        lb(a.i, {
            eventType: "adReady",
            slotType: L(a.config, 3),
            qem: K(a.config, 7)
        });
        a.B = !0;
        Z(a, [1], 2)
    }

    function wb(a) {
        const b = K(a.config, 2);
        return "" === b ? null : a.h.document.getElementById(b)
    }

    function sb(a) {
        a.l = !0;
        Z(a, [2], 3);
        a.F.resolve()
    }
    class xb extends ob {
        constructor(a, b, c, d) {
            super();
            this.config = a;
            this.h = b;
            this.s = c;
            this.I = d;
            this.F = new mb;
            this.D = new mb;
            this.B = this.v = this.l = this.m = !1;
            this.G = void 0;
            this.C = [];
            this.A = [];
            this.g = 1;
            this.i = b.parent;
            this.u = 2 === L(a, 1)
        }
        delayAdReadyEvent(a) {
            if (this.u)(J(this.config, 8) ? 2 === this.g || 3 === this.g || 4 === this.g || 5 === this.g : this.B) && Y(this, 7), this.A.push(a);
            else throw Error("not implemented");
        }
        async waitForOnShow() {
            this.u && !this.m && Y(this, 2);
            return this.F.promise
        }
        enableCustomCloseButton() {
            this.m = !0
        }
        disableCustomCloseButton() {
            this.m = !1
        }
        closeAd() {
            (J(this.config, 8) ? 3 === this.g || 4 === this.g : this.l) || Y(this, 3);
            var a = 1;
            2 === L(this.config, 3) && (a = (J(this.config, 8) ? 4 === this.g : this.v) ? 2 : 3);
            var b = this.G;
            a = {
                status: a
            };
            null != b && (a.payload = b);
            b = this.i;
            a = {
                eventType: "adClosed",
                result: a
            };
            X(a);
            b.postMessage(JSON.stringify(a), "*");
            Z(this, [3, 4, 5], 5)
        }
        grantReward(a) {
            2 !== L(this.config, 3) && Y(this, 4);
            (J(this.config, 8) ? 3 === this.g || 4 === this.g : this.l) || Y(this, 5);
            (J(this.config, 8) ? 4 === this.g : this.v) && Y(this, 6);
            this.v = !0;
            Z(this, [3], 4);
            this.G = a;
            this.D.resolve()
        }
        async waitForGrantReward() {
            return this.D.promise
        }
        listenToBackButton(a) {
            this.C.push(a)
        }
        notifyError(a) {
            vb(this,
                "ntf_err", {
                    error: a
                }, .25);
            a = this.i;
            var b = {
                eventType: "adError"
            };
            X(b);
            a.postMessage(JSON.stringify(b), "*")
        }
    }

    function yb(a, b, c) {
        nb(a).resolve(b);
        c = K(c, 2);
        if ("" !== c) {
            var d = a.document.getElementById(c);
            if (null == d) throw Error(`no creative iframe for id ${c}`);
            a = () => {
                nb(d.contentWindow).resolve(b)
            };
            null == d.contentWindow ? d.addEventListener("load", a) : a()
        }
    };
    var zb;
    zb = cb(V, 953, a => {
        var b = window,
            c = V,
            d = U;
        a = ib(a.config);
        c = new xb(a, b, c, d);
        if (!J(a, 4))
            if (c.u) rb(c);
            else throw Error(`Can't handle environment ${L(c.config,1)}`);
        yb(b, J(a, 4) ? null : c, a)
    });
    Fa = 105;
    const Ab = Ha(105, document.currentScript);
    if (null == Ab) throw Error("JSC not found 105");
    const Bb = {},
        Cb = Ab.attributes;
    for (let a = Cb.length - 1; 0 <= a; a--) {
        const b = Cb[a].name;
        0 === b.indexOf("data-jcp-") && (Bb[b.substring(9)] = Cb[a].value)
    }
    zb(Bb);
}).call(this);