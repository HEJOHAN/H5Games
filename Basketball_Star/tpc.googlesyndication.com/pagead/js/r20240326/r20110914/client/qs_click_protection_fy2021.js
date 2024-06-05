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

    function ja(a) {
        q.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ka = aa(610401301),
        la = aa(188588736);
    var t;
    const ma = q.navigator;
    t = ma ? ma.userAgentData || null : null;

    function na(a) {
        return ka ? t ? t.brands.some(({
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
        return ka ? !!t && 0 < t.brands.length : !1
    }

    function oa() {
        return v() ? na("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function w(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !u("Android") || oa();
    oa();
    u("Safari") && (oa() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? na("Microsoft Edge") : u("Edg/")) || v() && na("Opera"));
    var x = Symbol(),
        pa = Symbol();

    function z(a, b, c) {
        return c ? a | b : a & ~b
    }
    var A = (a, b) => {
        a[x] = b;
        return a
    };

    function qa(a, b) {
        A(b, (a | 0) & -14591)
    }

    function ra(a, b) {
        A(b, (a | 34) & -14557)
    }

    function sa(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var B = {},
        ta = {};

    function ua(a) {
        return !(!a || "object" !== typeof a || a.g !== ta)
    }

    function va(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function E(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        A(a, d | 1);
        return !0
    }
    var wa;
    const xa = [];
    A(xa, 55);
    wa = Object.freeze(xa);
    class ya {}
    class Ba {}
    Object.freeze(new ya);
    Object.freeze(new Ba);
    let Ca;

    function Da(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function Ea(a, b, c) {
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
    let F;

    function Fa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (E(a, void 0, 0)) return
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

    function Ga(a, b, c) {
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

    function Ha(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = E(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : Ia(a, b, c, void 0 !== d, e);
            else if (va(a)) {
                const g = {};
                for (let f in a) g[f] = Ha(a[f], b, c, d, e);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Ia(a, b, c, d, e) {
        const g = d || c ? a[x] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Ha(a[f], b, c, d, e);
        c && c(g, a);
        return a
    }

    function Ja(a) {
        return a.G === B ? a.toJSON() : Fa(a)
    };

    function Ka(a, b, c = ra) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? A(a, (d | 34) & -12293) : Ia(a, Ka, d & 4 ? ra : c, !0, !0)
            }
            a.G === B && (c = a.l, d = c[x], a = d & 2 ? a : La(a, c, d, !0));
            return a
        }
    }

    function La(a, b, c, d) {
        a = a.constructor;
        F = b = Ma(b, c, d);
        b = new a(b);
        F = void 0;
        return b
    }

    function Ma(a, b, c) {
        const d = c || b & 2 ? ra : qa,
            e = !!(b & 32);
        a = Ga(a, b, g => Ka(g, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Na(a) {
        const b = a.l,
            c = b[x];
        return c & 2 ? La(a, b, c, !1) : a
    };

    function G(a, b) {
        a = a.l;
        return Oa(a, a[x], b)
    }

    function Pa(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }

    function Oa(a, b, c, d) {
        if (-1 === c) return null;
        const e = sa(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var g = a.length;
            return d && b & 256 && (d = a[g - 1][c], null != d) ? (Pa(a, b, e, c) && null != pa && (a = Ca ? ? (Ca = {}), b = a[pa] || 0, 4 <= b || (a[pa] = b + 1, a = Error(), a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {}), a.__closure__error__context__984382.severity = "incident", ja(a))), d) : Pa(a, b, e, c)
        }
    }

    function H(a, b, c, d) {
        const e = sa(b);
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

    function Qa(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Ra(a) {
        var b = Sa,
            c = a.l,
            d = c[x],
            e = Oa(c, d, 1, !1);
        b = Ea(e, b, d);
        b !== e && null != b && H(c, d, b, !1);
        c = b;
        if (null == c) return c;
        a = a.l;
        d = a[x];
        d & 2 || (e = Na(c), e !== c && (c = e, H(a, d, c, !1)));
        return c
    }

    function Ta(a, b) {
        a = z(a, 2, !!(2 & b));
        a = z(a, 32, !!(32 & b) && !1);
        return a = z(a, 2048, !1)
    }

    function I(a, b) {
        a = G(a, b);
        return (null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function K(a, b) {
        return Da(G(a, b)) ? ? 0
    }

    function L(a) {
        a = G(a, 1);
        return (null == a || "string" === typeof a ? a : void 0) ? ? ""
    }

    function M(a, b) {
        a = G(a, b);
        return (null == a ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 1
    };
    var N = class {
        constructor(a) {
            a: {
                null == a && (a = F);F = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[x] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, va(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                A(a, b)
            }
            this.l = a
        }
        toJSON() {
            return Ua(this, Ia(this.l, Ja, void 0, void 0, !1), !0)
        }
    };
    N.prototype.G = B;
    N.prototype.toString = function() {
        return Ua(this, this.l, !1).toString()
    };

    function Ua(a, b, c) {
        var d = la ? void 0 : a.constructor.N;
        const e = (c ? a.l : b)[x];
        a = b.length;
        if (!a) return b;
        let g, f;
        if (va(c = b[a - 1])) {
            a: {
                var k = c;
                let m = {},
                    p = !1;
                for (var h in k) {
                    let n = k[h];
                    if (Array.isArray(n)) {
                        let C = n;
                        if (E(n, d, +h) || ua(n) && 0 === n.size) n = null;
                        n != C && (p = !0)
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
            if (!(null == c || E(c, d, l) || ua(c) && 0 === c.size)) break;
            f = !0
        }
        if (!g && !f) return b;
        b = Array.prototype.slice.call(b, 0, a);
        k && b.push(k);
        return b
    };
    var Va = class extends N {};

    function Wa(a) {
        a = a.l;
        var b = a[x],
            c = b,
            d = !(2 & b),
            e = !!(2 & c),
            g = e ? 1 : 2;
        b = 1 === g;
        g = 2 === g;
        d && (d = !e);
        e = Oa(a, c, 1);
        e = Array.isArray(e) ? e : wa;
        var f = e[x] | 0;
        const k = !!(4 & f);
        if (!k) {
            var h = f;
            0 === h && (h = Ta(h, c));
            h = z(h, 1, !0);
            f = e;
            var l = c,
                m = !!(2 & h);
            m && (l = z(l, 2, !0));
            let p = !m,
                n = !0,
                C = 0,
                y = 0;
            for (; C < f.length; C++) {
                const J = Ea(f[C], Va, l);
                if (J instanceof Va) {
                    if (!m) {
                        const D = !!((J.l[x] | 0) & 2);
                        p && (p = !D);
                        n && (n = D)
                    }
                    f[y++] = J
                }
            }
            y < C && (f.length = y);
            h = z(h, 4, !0);
            h = z(h, 16, n);
            h = z(h, 8, p);
            A(f, h);
            m && Object.freeze(f);
            f = h
        }
        h = !!(8 & f) || b && !e.length;
        if (d && !h) {
            Qa(f) &&
                (e = Array.prototype.slice.call(e), f = Ta(f, c), c = H(a, c, e));
            d = e;
            for (h = 0; h < d.length; h++) l = d[h], m = Na(l), l !== m && (d[h] = m);
            f = z(f, 8, !0);
            f = z(f, 16, !d.length);
            A(d, f)
        }
        Qa(f) || (d = f, b ? f = z(f, !e.length || 16 & f && (!k || 32 & f) ? 2 : 2048, !0) : f = z(f, 32, !1), f !== d && A(e, f), b && Object.freeze(e));
        g && Qa(f) && (e = Array.prototype.slice.call(e), f = Ta(f, c), A(e, f), H(a, c, e));
        return e
    }
    var Sa = class extends N {};
    Sa.N = [1];
    var Xa = class extends N {};

    function Ya() {}

    function Za(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var $a = {
            capture: !0
        },
        ab = {
            passive: !0
        },
        bb = Za(function() {
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

    function cb(a) {
        return a ? a.passive && bb() ? a : a.capture || !1 : !1
    }

    function O(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, cb(d))
    };
    var P = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g.toString()
            }
        },
        db = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var eb = new P("about:invalid#zClosurez", db);
    class fb {
        constructor(a) {
            this.M = a
        }
    }

    function Q(a) {
        return new fb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const gb = new fb(a => /^[^:]*([/?#]|$)/.test(a));
    var hb = Q("http"),
        ib = Q("https"),
        jb = Q("ftp"),
        kb = Q("mailto");
    const lb = [Q("data"), hb, ib, kb, jb, gb];

    function mb(a = lb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof fb && c.M("#")) return new P("#", db)
        }
    }

    function nb(a = lb) {
        return mb(a) || eb
    }
    var ob = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function pb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) pb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function qb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let R = [];
    const rb = () => {
        const a = R;
        R = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var sb = a => {
        var b = S;
        "complete" === b.readyState || "interactive" === b.readyState ? (R.push(a), 1 == R.length && (window.Promise ? Promise.resolve().then(rb) : window.setImmediate ? setImmediate(rb) : setTimeout(rb, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function tb(a = document) {
        return a.createElement("img")
    };

    function ub(a, b, c = null, d = !1) {
        vb(a, b, c, d)
    }

    function vb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = tb(a.document);
        if (c || d) {
            const g = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    var k = Array.prototype.indexOf.call(f, e, void 0);
                    0 <= k && Array.prototype.splice.call(f, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, cb());
                e.removeEventListener && e.removeEventListener("error", g, cb())
            };
            O(e, "load", g);
            O(e, "error", g)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function wb(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function xb() {
        if (!(.01 < Math.random())) {
            var a = wb(document.currentScript);
            a = a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = wb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : ub(b, a, void 0, !1)
        }
    };
    var S = document,
        T = window;
    var yb = (a = []) => {
        q.google_logging_queue || (q.google_logging_queue = []);
        q.google_logging_queue.push([12, a])
    };
    const zb = [hb, ib, kb, jb, gb, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];
    var Ab = () => {
        var a = `${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) pb(d, b[d], c);
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
    var Bb = () => {
            var a = S;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        Cb = (a, b) => {
            a && qb(b, (c, d) => {
                a.style[d] = c
            })
        },
        Db = a => {
            var b = S.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let Eb = null;

    function Fb() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Gb() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var Hb = class {
        constructor(a, b) {
            var c = Gb() || Fb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const U = q.performance,
        Ib = !!(U && U.mark && U.measure && U.clearMarks),
        V = Za(() => {
            var a;
            if (a = Ib) {
                var b;
                if (null === Eb) {
                    Eb = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Eb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Eb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Jb(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Kb {
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
            a = new Hb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Gb() || Fb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.h || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };

    function Lb(a, b, c, d, e) {
        const g = [];
        qb(a, function(f, k) {
            (f = Mb(f, b, c, d, e)) && g.push(k + "=" + f)
        });
        return g.join(b)
    }

    function Mb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const g = [];
                for (let f = 0; f < a.length; f++) g.push(Mb(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Lb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Nb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Ob(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = Nb(a) - 24;
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
                let l = Lb(k[h], a.i, ",$");
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
    class Pb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.m = 0;
            this.g = []
        }
    };
    class Qb {};

    function Rb() {
        var a = Sb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function Tb(a) {
        if (1 > Sb.g) try {
            let b;
            a instanceof Pb ? b = a : (b = new Pb, qb(a, (d, e) => {
                var g = b;
                const f = g.m++,
                    k = {};
                k[e] = d;
                d = [k];
                g.g.push(f);
                g.h[f] = d
            }));
            const c = Ob(b);
            c && ub(q, c)
        } catch (b) {}
    }
    class Ub {
        constructor() {
            this.g = Math.random()
        }
    };
    let Sb;
    const W = new Kb;
    var Vb = () => {
        window.google_measure_js_timing || (W.h = !1, W.g != W.i.google_js_reporting_queue && (V() && w(W.g, Jb), W.g.length = 0))
    };
    (a => {
        Sb = a ? ? new Ub;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Rb();
        "complete" == window.document.readyState ? Vb() : W.h && O(window, "load", () => {
            Vb()
        })
    })();
    var Wb = a => {
        O(T, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function Xb() {
        this.h = this.h;
        this.i = this.i
    }
    Xb.prototype.h = !1;

    function Yb(a) {
        a.h || (a.h = !0, a.m())
    }
    Xb.prototype.m = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        Xb.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = r(this.A, this)
    }
    ia(X, Xb);
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
    const Zb = {
            display: "inline-block",
            position: "absolute"
        },
        $b = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function ac(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function bc(a, b, c = 2147483647) {
        const d = S.createElement("div");
        Cb(d, { ...Zb,
            "z-index": String(c),
            ...b
        });
        I(a.data, 10) && O(d, "click", Ya);
        return I(a.data, 11) ? (a = S.createElement("a"), b = Ab(), c = nb(zb), c === eb && b("#"), b = c, b instanceof P ? b = b instanceof P && b.constructor === P ? b.g : "type_error:SafeUrl" : b = ob.test(b) ? b : void 0, a.href = void 0 === b ? eb.toString() : b, a.appendChild(d), a) : d
    }

    function cc(a, b) {
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
                Wb(c => {
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

    function dc(a, b) {
        b = ac(b);
        const c = K(a.data, 9);
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
        }].map(d => bc(a, d, 9019))
    }

    function ec(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                g = a.A[M(e, 5)];
            d.u || void 0 === g || (b = Math.max(b, g + K(e, 2)))
        }
        a.o && Yb(a.o);
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
            I(b.j, 9) && (a.K.push(b), ec(a))
        }
    }

    function fc(a, b, c) {
        if (!a.g || !a.v || 300 <= b.timeStamp - a.g.timeStamp) return !1;
        const d = new Map;
        w(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = K(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var hc = class {
        constructor() {
            var a = gc;
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
            yb([a]);
            this.data = new Xa(a);
            a = Ra(this.data);
            w(Wa(a), g => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: g,
                    B: -1
                })
            });
            this.i = Bb();
            let b = !1;
            a = this.i.length;
            for (let g = 0; g < a; ++g) {
                var c = new Sa(JSON.parse(this.i[g].getAttribute("data-ifc") || "[]"));
                w(Wa(c), f => {
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
            let d = I(this.data, 12);
            for (var e of this.s) {
                const g = e.j;
                0 < K(g, 2) && 0 < M(g, 5) ? (!this.h && I(g, 9) && (this.h = bc(this, $b)), cc(this, e)) : L(g) && I(g, 9) && dc(this, L(g));
                L(g) && (a = !0);
                0 < K(g, 11) && (c = !0);
                I(g, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.m);
            S.body && Db(e);
            I(this.data, 13) && sb(() => {
                const g = S.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let k = 0; k < g.length; ++k) {
                    var f = (f = g[k]) ? T.getComputedStyle(f).getPropertyValue("position") : void 0;
                    "absolute" === f && Y(g[k], !1)
                }
            });
            O(S, "click",
                g => {
                    if (this.I) {
                        var f = {
                            cx: g.clientX,
                            cy: g.clientY,
                            et: Date.now(),
                            qid: this.H
                        };
                        var k = Qb;
                        var h = "J";
                        k.J && k.hasOwnProperty(h) || (h = new k, k.J = h);
                        k = [];
                        !f.eid && k.length && (f.eid = k.toString());
                        Tb(f);
                        this.I = !1
                    }
                    if (!1 === g.isTrusted && I(this.data, 15)) g.preventDefault ? g.preventDefault() : g.returnValue = !1, g.stopImmediatePropagation(), xb();
                    else {
                        f = -1;
                        k = [];
                        for (var l of this.s) {
                            h = l.B;
                            var m = -1 !== h;
                            if (!(K(l.j, 3) <= f || l.u || m && !1 === k[h])) {
                                var p = !m || k[h] || this.i[h].contains(g.target);
                                m && p && (k[h] = !0);
                                if (h = p)
                                    if (h = g, m = l.j, 0 < K(m, 2) &&
                                        0 < M(m, 5)) h = this.A[M(m, 5)], h = void 0 !== h && Date.now() < h + K(m, 2);
                                    else if (L(m)) {
                                    {
                                        m = (0 <= l.B ? this.i[l.B] : S.body).getBoundingClientRect();
                                        p = Number;
                                        var n = (n = S.body) ? T.getComputedStyle(n).getPropertyValue("zoom") : void 0;
                                        const D = p(n || "1"),
                                            [lc, mc] = [h.clientX, h.clientY],
                                            [da, ea, za, Aa] = [lc / D - m.left, mc / D - m.top, m.width, m.height];
                                        if (!(0 < za && 0 < Aa) || isNaN(da) || isNaN(ea) || 0 > da || 0 > ea) h = !1;
                                        else {
                                            p = ac(L(l.j));
                                            n = !(da >= p.left && za - da > p.right && ea >= p.top && Aa - ea > p.bottom);
                                            var C = I(l.j, 12);
                                            if (this.g && (I(this.data, 12) || C) && 300 > h.timeStamp -
                                                this.g.timeStamp) {
                                                h = this.g.changedTouches[0];
                                                const [fa, ha] = [h.clientX / D - m.left, h.clientY / D - m.top];
                                                !isNaN(fa) && !isNaN(ha) && 0 <= fa && 0 <= ha && (n = (n = I(this.data, 16) || C ? n : !1) || !(fa >= p.left && za - fa > p.right && ha >= p.top && Aa - ha > p.bottom))
                                            }
                                            h = n
                                        }
                                    }
                                } else h = 0 < K(m, 11) ? fc(this, h, l) : !0;
                                if (h) {
                                    var y = l;
                                    f = K(l.j, 3)
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
                                if (K(f, 8) && y.D >= K(f, 8))
                                    if (y.u = !0, this.h && 0 < K(f, 2)) ec(this);
                                    else if (0 < this.m.length &&
                                    L(f))
                                    for (var J of this.m) Y(J, !1);
                                xb();
                                J = l.toJSON();
                                for (const D of this.C) D(g, J)
                        }
                    }
                }, $a);
            c && O(S, "touchstart", g => {
                this.v = g
            }, ab);
            (a && d || c) && O(S, "touchend", g => {
                this.g = g
            }, ab)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const ic = wb(document.currentScript);
    if (null == ic) throw Error("JSC not found 23");
    var gc;
    const jc = {},
        kc = ic.attributes;
    for (let a = kc.length - 1; 0 <= a; a--) {
        const b = kc[a].name;
        0 === b.indexOf("data-jcp-") && (jc[b.substring(9)] = kc[a].value)
    }
    gc = jc;
    const nc = window;
    nc.googqscp = new hc;
    gc["init-data"] && nc.googqscp.init(JSON.parse(gc["init-data"]));
}).call(this);