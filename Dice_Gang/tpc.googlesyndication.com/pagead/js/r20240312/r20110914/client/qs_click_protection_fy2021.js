(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var q = this || self;

    function aa(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = q, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    }

    function ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ca(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function r(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
        return r.apply(null, arguments)
    }

    function ia(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.P = function(d, e, g) {
            for (var f = Array(arguments.length - 2), k = 2; k < arguments.length; k++) f[k - 2] = arguments[k];
            return b.prototype[e].apply(d, f)
        }
    };
    var ja = aa(610401301),
        ka = aa(188588736);
    var t;
    const la = q.navigator;
    t = la ? la.userAgentData || null : null;

    function ma(a) {
        return ja ? t ? t.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function u(a) {
        var b;
        a: {
            if (b = q.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function v() {
        return ja ? !!t && 0 < t.brands.length : !1
    }

    function na() {
        return v() ? ma("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function w(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !u("Android") || na();
    na();
    u("Safari") && (na() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? ma("Microsoft Edge") : u("Edg/")) || v() && ma("Opera"));
    var x = Symbol();

    function z(a, b, c) {
        return c ? a | b : a & ~b
    }
    var A = (a, b) => {
        a[x] = b;
        return a
    };

    function oa(a, b) {
        A(b, (a | 0) & -14591)
    }

    function pa(a, b) {
        A(b, (a | 34) & -14557)
    }

    function qa(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var B = {},
        ra = {};

    function sa(a) {
        return !(!a || "object" !== typeof a || a.g !== ra)
    }

    function ta(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function C(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        A(a, d | 1);
        return !0
    }
    var ua;
    const va = [];
    A(va, 55);
    ua = Object.freeze(va);
    class wa {}
    class xa {}
    Object.freeze(new wa);
    Object.freeze(new xa);

    function Aa(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function F(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Ba(a, b, c) {
        if (null != a && "object" === typeof a && a.G === B) return a;
        if (Array.isArray(a)) {
            var d = a[x] | 0,
                e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && A(a, e);
            return new b(a)
        }
    };
    let G;

    function Ca(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (C(a, void 0, 0)) return
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

    function Da(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const g in e) b[g] = c(e[g])
        }
        return a
    }

    function Ea(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = C(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : Fa(a, b, c, void 0 !== d, e);
            else if (ta(a)) {
                const g = {};
                for (let f in a) g[f] = Ea(a[f], b, c, d, e);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Fa(a, b, c, d, e) {
        const g = d || c ? a[x] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Ea(a[f], b, c, d, e);
        c && c(g, a);
        return a
    }

    function Ga(a) {
        return a.G === B ? a.toJSON() : Ca(a)
    };

    function Ha(a, b, c = pa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? A(a, (d | 34) & -12293) : Fa(a, Ha, d & 4 ? pa : c, !0, !0)
            }
            a.G === B && (c = a.l, d = c[x], a = d & 2 ? a : Ia(a, c, d, !0));
            return a
        }
    }

    function Ia(a, b, c, d) {
        a = a.constructor;
        G = b = Ja(b, c, d);
        b = new a(b);
        G = void 0;
        return b
    }

    function Ja(a, b, c) {
        const d = c || b & 2 ? pa : oa,
            e = !!(b & 32);
        a = Da(a, b, g => Ha(g, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Ka(a) {
        const b = a.l,
            c = b[x];
        return c & 2 ? Ia(a, b, c, !1) : a
    };

    function H(a, b) {
        a = a.l;
        return La(a, a[x], b)
    }

    function La(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= qa(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function I(a, b, c, d) {
        const e = qa(b);
        if (1 >= e || d) {
            let g = b;
            if (b & 256) d = a[a.length - 1];
            else {
                if (null == c) return g;
                d = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            d[1] = c;
            1 < e && (a[1 + (+!!(b & 512) - 1)] = void 0);
            g !== b && A(a, g);
            return g
        }
        a[1 + (+!!(b & 512) - 1)] = c;
        b & 256 && (a = a[a.length - 1], 1 in a && delete a[1]);
        return b
    }

    function Ma(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Na(a) {
        var b = a.l,
            c = b[x],
            d = La(b, c, 1, !1);
        const e = Ba(d, Oa, c);
        e !== d && null != e && I(b, c, e, !1);
        b = e;
        if (null == b) return b;
        a = a.l;
        c = a[x];
        c & 2 || (d = Ka(b), d !== b && (b = d, I(a, c, b, !1)));
        return b
    }

    function Pa(a, b) {
        a = z(a, 2, !!(2 & b));
        a = z(a, 32, !!(32 & b) && !1);
        return a = z(a, 2048, !1)
    }

    function J(a, b) {
        a = H(a, b);
        return (null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function L(a, b) {
        return Aa(H(a, b)) ? ? 0
    }

    function M(a, b) {
        a = H(a, b);
        return (null == a ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 1
    };
    var N = class {
        constructor(a) {
            a: {
                null == a && (a = G);G = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[x] | 0;
                    if (b & 2048) throw Error();
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, ta(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                A(a, b)
            }
            this.l = a
        }
        toJSON() {
            return Qa(this, Fa(this.l, Ga, void 0, void 0, !1), !0)
        }
    };
    N.prototype.G = B;
    N.prototype.toString = function() {
        return Qa(this, this.l, !1).toString()
    };

    function Qa(a, b, c) {
        var d = ka ? void 0 : a.constructor.N;
        const e = (c ? a.l : b)[x];
        a = b.length;
        if (!a) return b;
        let g, f;
        if (ta(c = b[a - 1])) {
            a: {
                var k = c;
                let m = {},
                    p = !1;
                for (var h in k) {
                    let n = k[h];
                    if (Array.isArray(n)) {
                        let D = n;
                        if (C(n, d, +h) || sa(n) && 0 === n.size) n = null;
                        n != D && (p = !0)
                    }
                    null != n ? m[h] = n : p = !0
                }
                if (p) {
                    for (var l in m) {
                        k = m;
                        break a
                    }
                    k = null
                }
            }
            k != c && (g = !0);a--
        }
        for (h = +!!(e & 512) - 1; 0 < a; a--) {
            l = a - 1;
            c = b[l];
            l -= h;
            if (!(null == c || C(c, d, l) || sa(c) && 0 === c.size)) break;
            f = !0
        }
        if (!g && !f) return b;
        b = Array.prototype.slice.call(b, 0, a);
        k && b.push(k);
        return b
    };
    var Ra = class extends N {};

    function Sa(a) {
        a = a.l;
        var b = a[x],
            c = b,
            d = !(2 & b),
            e = !!(2 & c),
            g = e ? 1 : 2;
        b = 1 === g;
        g = 2 === g;
        d && (d = !e);
        e = La(a, c, 1);
        e = Array.isArray(e) ? e : ua;
        var f = e[x] | 0;
        const k = !!(4 & f);
        if (!k) {
            var h = f;
            0 === h && (h = Pa(h, c));
            h = z(h, 1, !0);
            f = e;
            var l = c,
                m = !!(2 & h);
            m && (l = z(l, 2, !0));
            let p = !m,
                n = !0,
                D = 0,
                y = 0;
            for (; D < f.length; D++) {
                const K = Ba(f[D], Ra, l);
                if (K instanceof Ra) {
                    if (!m) {
                        const E = !!((K.l[x] | 0) & 2);
                        p && (p = !E);
                        n && (n = E)
                    }
                    f[y++] = K
                }
            }
            y < D && (f.length = y);
            h = z(h, 4, !0);
            h = z(h, 16, n);
            h = z(h, 8, p);
            A(f, h);
            m && Object.freeze(f);
            f = h
        }
        h = !!(8 & f) || b && !e.length;
        if (d && !h) {
            Ma(f) &&
                (e = Array.prototype.slice.call(e), f = Pa(f, c), c = I(a, c, e));
            d = e;
            for (h = 0; h < d.length; h++) l = d[h], m = Ka(l), l !== m && (d[h] = m);
            f = z(f, 8, !0);
            f = z(f, 16, !d.length);
            A(d, f)
        }
        Ma(f) || (d = f, b ? f = z(f, !e.length || 16 & f && (!k || 32 & f) ? 2 : 2048, !0) : f = z(f, 32, !1), f !== d && A(e, f), b && Object.freeze(e));
        g && Ma(f) && (e = Array.prototype.slice.call(e), f = Pa(f, c), A(e, f), I(a, c, e));
        return e
    }
    var Oa = class extends N {};
    Oa.N = [1];
    var Ta = class extends N {};

    function Ua() {}

    function Va(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Wa = {
            capture: !0
        },
        Xa = {
            passive: !0
        },
        Ya = Va(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                q.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Za(a) {
        return a ? a.passive && Ya() ? a : a.capture || !1 : !1
    }

    function O(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Za(d))
    };
    var P = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g.toString()
            }
        },
        $a = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ab = new P("about:invalid#zClosurez", $a);
    class bb {
        constructor(a) {
            this.M = a
        }
    }

    function Q(a) {
        return new bb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const cb = new bb(a => /^[^:]*([/?#]|$)/.test(a));
    var db = Q("http"),
        eb = Q("https"),
        fb = Q("ftp"),
        gb = Q("mailto");
    const hb = [Q("data"), db, eb, gb, fb, cb];

    function ib(a = hb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof bb && c.M("#")) return new P("#", $a)
        }
    }

    function jb(a = hb) {
        return ib(a) || ab
    }
    var kb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function lb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) lb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function mb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let R = [];
    const nb = () => {
        const a = R;
        R = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var ob = a => {
        var b = S;
        "complete" === b.readyState || "interactive" === b.readyState ? (R.push(a), 1 == R.length && (window.Promise ? Promise.resolve().then(nb) : window.setImmediate ? setImmediate(nb) : setTimeout(nb, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function pb(a = document) {
        return a.createElement("img")
    };

    function qb(a, b, c = null, d = !1) {
        rb(a, b, c, d)
    }

    function rb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = pb(a.document);
        if (c || d) {
            const g = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    var k = Array.prototype.indexOf.call(f, e, void 0);
                    0 <= k && Array.prototype.splice.call(f, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, Za());
                e.removeEventListener && e.removeEventListener("error", g, Za())
            };
            O(e, "load", g);
            O(e, "error", g)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function sb(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function tb() {
        if (!(.01 < Math.random())) {
            var a = sb(document.currentScript);
            a = a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = sb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : qb(b, a, void 0, !1)
        }
    };
    var S = document,
        T = window;
    var ub = (a = []) => {
        q.google_logging_queue || (q.google_logging_queue = []);
        q.google_logging_queue.push([12, a])
    };
    const vb = [db, eb, gb, fb, cb, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];
    var wb = () => {
        var a = `${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) lb(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var xb = () => {
            var a = S;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        yb = (a, b) => {
            a && mb(b, (c, d) => {
                a.style[d] = c
            })
        },
        zb = a => {
            var b = S.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let Ab = null;

    function Bb() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Cb() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var Db = class {
        constructor(a, b) {
            var c = Cb() || Bb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const U = q.performance,
        Eb = !!(U && U.mark && U.measure && U.clearMarks),
        V = Va(() => {
            var a;
            if (a = Eb) {
                var b;
                if (null === Ab) {
                    Ab = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Ab = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ab;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Fb(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Gb {
        constructor() {
            var a = window;
            this.g = [];
            this.i = a || q;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Db(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Cb() || Bb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.h || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };

    function Hb(a, b, c, d, e) {
        const g = [];
        mb(a, function(f, k) {
            (f = Ib(f, b, c, d, e)) && g.push(k + "=" + f)
        });
        return g.join(b)
    }

    function Ib(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const g = [];
                for (let f = 0; f < a.length; f++) g.push(Ib(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Hb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Jb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Kb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = Jb(a) - 24;
        if (0 > c) return "";
        a.g.sort(function(g, f) {
            return g - f
        });
        let d = null,
            e = "";
        for (let g = 0; g < a.g.length; g++) {
            const f = a.g[g],
                k = a.h[f];
            for (let h = 0; h < k.length; h++) {
                if (!c) {
                    d = null == d ? f : d;
                    break
                }
                let l = Hb(k[h], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (c >= l.length) {
                        c -= l.length;
                        b += l;
                        e = a.i;
                        break
                    }
                    d = null == d ? f : d
                }
            }
        }
        a = "";
        null != d && (a = e + "trn=" + d);
        return b + a
    }
    class Lb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.m = 0;
            this.g = []
        }
    };
    class Mb {};

    function Nb() {
        var a = Ob,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function Pb(a) {
        if (1 > Ob.g) try {
            let b;
            a instanceof Lb ? b = a : (b = new Lb, mb(a, (d, e) => {
                var g = b;
                const f = g.m++,
                    k = {};
                k[e] = d;
                d = [k];
                g.g.push(f);
                g.h[f] = d
            }));
            const c = Kb(b);
            c && qb(q, c)
        } catch (b) {}
    }
    class Qb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Ob;
    const W = new Gb;
    var Rb = () => {
        window.google_measure_js_timing || (W.h = !1, W.g != W.i.google_js_reporting_queue && (V() && w(W.g, Fb), W.g.length = 0))
    };
    (a => {
        Ob = a ? ? new Qb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Nb();
        "complete" == window.document.readyState ? Rb() : W.h && O(window, "load", () => {
            Rb()
        })
    })();
    var Sb = a => {
        O(T, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function Tb() {
        this.h = this.h;
        this.i = this.i
    }
    Tb.prototype.h = !1;

    function Ub(a) {
        a.h || (a.h = !0, a.m())
    }
    Tb.prototype.m = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        Tb.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = r(this.A, this)
    }
    ia(X, Tb);
    X.prototype.g = 0;
    X.prototype.m = function() {
        X.O.m.call(this);
        this.isActive() && q.clearTimeout(this.g);
        this.g = 0;
        delete this.o;
        delete this.s
    };
    X.prototype.start = function(a) {
        this.isActive() && q.clearTimeout(this.g);
        this.g = 0;
        var b = this.v;
        a = void 0 !== a ? a : this.C;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = r(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = 2147483647 < Number(a) ? -1 : q.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return 0 != this.g
    };
    X.prototype.A = function() {
        this.g = 0;
        this.o && this.o.call(this.s)
    };
    const Vb = {
            display: "inline-block",
            position: "absolute"
        },
        Wb = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function Xb(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function Yb(a, b, c = 2147483647) {
        const d = S.createElement("div");
        yb(d, { ...Vb,
            "z-index": String(c),
            ...b
        });
        J(a.data, 10) && O(d, "click", Ua);
        return J(a.data, 11) ? (a = S.createElement("a"), b = wb(), c = jb(vb), c === ab && b("#"), b = c, b instanceof P ? b = b instanceof P && b.constructor === P ? b.g : "type_error:SafeUrl" : b = kb.test(b) ? b : void 0, a.href = void 0 === b ? ab.toString() : b, a.appendChild(d), a) : d
    }

    function Zb(a, b) {
        switch (M(b.j, 5)) {
            case 2:
                T.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                O(T, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                O(S, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                Sb(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in T) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (0 < e.intersectionRatio) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(S.body);
                    a.L.push(c)
                }
                break;
            case 11:
                T.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function $b(a, b) {
        b = Xb(b);
        const c = L(a.data, 9);
        a.m = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => Yb(a, d, 9019))
    }

    function ac(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                g = a.A[M(e, 5)];
            d.u || void 0 === g || (b = Math.max(b, g + L(e, 2)))
        }
        a.o && Ub(a.o);
        b -= Date.now();
        const c = a.h;
        0 < b ? (Y(c, !0), a.o = new X(() => {
            Y(c, !1)
        }, b), a.o.start()) : Y(c, !1)
    }

    function Z(a, b) {
        if (!b.u) {
            var c = M(b.j, 5);
            a.A[c] = Date.now();
            J(b.j, 9) && (a.K.push(b), ac(a))
        }
    }

    function bc(a, b, c) {
        if (!a.g || !a.v || 300 <= b.timeStamp - a.g.timeStamp) return !1;
        const d = new Map;
        w(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = L(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var dc = class {
        constructor() {
            var a = cc;
            this.m = [];
            this.o = this.h = null;
            this.K = [];
            this.data = null;
            this.C = [];
            this.i = [];
            this.s = [];
            this.A = {};
            this.L = [];
            this.v = this.g = null;
            this.H = "";
            this.I = "true" === a["send-fccs"];
            this.H = a.qid || ""
        }
        init(a) {
            ub([a]);
            this.data = new Ta(a);
            a = Na(this.data);
            w(Sa(a), g => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: g,
                    B: -1
                })
            });
            this.i = xb();
            let b = !1;
            a = this.i.length;
            for (let g = 0; g < a; ++g) {
                var c = new Oa(JSON.parse(this.i[g].getAttribute("data-ifc") || "[]"));
                w(Sa(c), f => {
                    this.s.push({
                        D: 0,
                        u: !1,
                        F: 0,
                        j: f,
                        B: g
                    });
                    1 === M(f,
                        4) && (b = !0)
                })
            }
            c = a = !1;
            let d = J(this.data, 12);
            for (var e of this.s) {
                const g = e.j;
                0 < L(g, 2) && 0 < M(g, 5) ? (!this.h && J(g, 9) && (this.h = Yb(this, Wb)), Zb(this, e)) : (F(H(g, 1)) ? ? "") && J(g, 9) && $b(this, F(H(g, 1)) ? ? "");
                (F(H(g, 1)) ? ? "") && (a = !0);
                0 < L(g, 11) && (c = !0);
                J(g, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.m);
            S.body && zb(e);
            J(this.data, 13) && ob(() => {
                const g = S.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let k = 0; k < g.length; ++k) {
                    var f = (f = g[k]) ? T.getComputedStyle(f).getPropertyValue("position") : void 0;
                    "absolute" ===
                    f && Y(g[k], !1)
                }
            });
            O(S, "click", g => {
                if (this.I) {
                    var f = {
                        cx: g.clientX,
                        cy: g.clientY,
                        et: Date.now(),
                        qid: this.H
                    };
                    var k = Mb;
                    var h = "J";
                    k.J && k.hasOwnProperty(h) || (h = new k, k.J = h);
                    k = [];
                    !f.eid && k.length && (f.eid = k.toString());
                    Pb(f);
                    this.I = !1
                }
                if (!1 === g.isTrusted && J(this.data, 15)) g.preventDefault ? g.preventDefault() : g.returnValue = !1, g.stopImmediatePropagation(), tb();
                else {
                    f = -1;
                    k = [];
                    for (var l of this.s) {
                        h = l.B;
                        var m = -1 !== h;
                        if (!(L(l.j, 3) <= f || l.u || m && !1 === k[h])) {
                            var p = !m || k[h] || this.i[h].contains(g.target);
                            m && p && (k[h] = !0);
                            if (h = p)
                                if (h = g, m = l.j, 0 < L(m, 2) && 0 < M(m, 5)) h = this.A[M(m, 5)], h = void 0 !== h && Date.now() < h + L(m, 2);
                                else if (F(H(m, 1)) ? ? "") {
                                {
                                    m = (0 <= l.B ? this.i[l.B] : S.body).getBoundingClientRect();
                                    p = Number;
                                    var n = (n = S.body) ? T.getComputedStyle(n).getPropertyValue("zoom") : void 0;
                                    const E = p(n || "1"),
                                        [hc, ic] = [h.clientX, h.clientY],
                                        [da, ea, ya, za] = [hc / E - m.left, ic / E - m.top, m.width, m.height];
                                    if (!(0 < ya && 0 < za) || isNaN(da) || isNaN(ea) || 0 > da || 0 > ea) h = !1;
                                    else {
                                        p = Xb(F(H(l.j, 1)) ? ? "");
                                        n = !(da >= p.left && ya - da > p.right && ea >= p.top && za - ea > p.bottom);
                                        var D = J(l.j,
                                            12);
                                        if (this.g && (J(this.data, 12) || D) && 300 > h.timeStamp - this.g.timeStamp) {
                                            h = this.g.changedTouches[0];
                                            const [fa, ha] = [h.clientX / E - m.left, h.clientY / E - m.top];
                                            !isNaN(fa) && !isNaN(ha) && 0 <= fa && 0 <= ha && (n = (n = J(this.data, 16) || D ? n : !1) || !(fa >= p.left && ya - fa > p.right && ha >= p.top && za - ha > p.bottom))
                                        }
                                        h = n
                                    }
                                }
                            } else h = 0 < L(m, 11) ? bc(this, h, l) : !0;
                            if (h) {
                                var y = l;
                                f = L(l.j, 3)
                            }
                        }
                    }
                    if (y) switch (l = y.j, M(l, 4)) {
                        case 2:
                        case 3:
                            g.preventDefault ? g.preventDefault() : g.returnValue = !1;
                            f = Date.now();
                            500 < f - y.F && (y.F = f, ++y.D);
                            f = y.j;
                            if (L(f, 8) && y.D >= L(f,
                                    8))
                                if (y.u = !0, this.h && 0 < L(f, 2)) ac(this);
                                else if (0 < this.m.length && (F(H(f, 1)) ? ? ""))
                                for (var K of this.m) Y(K, !1);
                            tb();
                            K = l.toJSON();
                            for (const E of this.C) E(g, K)
                    }
                }
            }, Wa);
            c && O(S, "touchstart", g => {
                this.v = g
            }, Xa);
            (a && d || c) && O(S, "touchend", g => {
                this.g = g
            }, Xa)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const ec = sb(document.currentScript);
    if (null == ec) throw Error("JSC not found 23");
    var cc;
    const fc = {},
        gc = ec.attributes;
    for (let a = gc.length - 1; 0 <= a; a--) {
        const b = gc[a].name;
        0 === b.indexOf("data-jcp-") && (fc[b.substring(9)] = gc[a].value)
    }
    cc = fc;
    const jc = window;
    jc.googqscp = new dc;
    cc["init-data"] && jc.googqscp.init(JSON.parse(cc["init-data"]));
}).call(this);