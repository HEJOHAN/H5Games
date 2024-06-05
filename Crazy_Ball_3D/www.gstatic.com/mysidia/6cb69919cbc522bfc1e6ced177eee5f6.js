(function() {
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

    function ba(a) {
        a = a.o;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ca(a, b) {
        return a.g ? a.l.slice(0, a.g.index) + b + a.l.slice(a.g.index) : a.l + b
    }

    function da(a) {
        let b = "&act=1&ri=1";
        a.h && a.o && (b += ba(a));
        return ca(a, b)
    }

    function ea(a, b) {
        return a.h && a.i || a.m ? 1 == b ? a.h ? a.i : ca(a, "&dct=1") : 2 == b ? ca(a, "&ri=2") : ca(a, "&ri=16") : a.l
    }
    var fa = class {
        constructor({
            url: a,
            X: b
        }) {
            this.l = a;
            this.o = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.m = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };

    function ha(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };

    function ia(a) {
        let b = 0;
        for (const c in a) b++
    };
    var r = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g.toString()
            }
        },
        ka = {};
    var la = aa(610401301),
        ma = aa(188588736);
    var na;
    const oa = n.navigator;
    na = oa ? oa.userAgentData || null : null;

    function qa(a) {
        return la ? na ? na.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function u() {
        return la ? !!na && 0 < na.brands.length : !1
    }

    function ra() {
        return u() ? qa("Chromium") : (t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge")) || t("Silk")
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var sa = new r("about:invalid#zClosurez", ka);
    class ta {
        constructor(a) {
            this.ga = a
        }
    }

    function v(a) {
        return new ta(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ua = new ta(a => /^[^:]*([/?#]|$)/.test(a));
    var va = v("http"),
        wa = v("https"),
        xa = v("ftp"),
        ya = v("mailto"),
        za = v("intent"),
        Aa = v("market"),
        Ba = v("itms"),
        Ca = v("itms-appss");
    const Da = [v("data"), va, wa, ya, xa, ua];

    function Ea(a, b = Da) {
        if (a instanceof r) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof ta && d.ga(a)) return new r(a, ka)
        }
    }

    function Fa(a, b = Da) {
        return Ea(a, b) || sa
    }
    var Ha = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function Ia(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Ja(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };

    function Ka() {
        return t("iPhone") && !t("iPod") && !t("iPad")
    };

    function La(a) {
        La[" "](a);
        return a
    }
    La[" "] = function() {};
    var Ma = Ka(),
        Na = t("iPad");
    var Oa = Ka() || t("iPod"),
        Pa = t("iPad");
    !t("Android") || ra();
    ra();
    t("Safari") && (ra() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? qa("Microsoft Edge") : t("Edg/")) || u() && qa("Opera"));
    var Qa = {},
        Ra = null;

    function w(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Sa = Symbol(),
        Ta = Symbol();

    function y(a, b, c) {
        return c ? a | b : a & ~b
    }
    var z = (a, b) => {
        a[x] = b;
        return a
    };

    function B(a) {
        a[x] |= 34;
        return a
    }

    function Ua(a, b) {
        z(b, (a | 0) & -14591)
    }

    function Va(a, b) {
        z(b, (a | 34) & -14557)
    }

    function Wa(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Xa = {},
        Ya = {};

    function Za(a) {
        return !(!a || "object" !== typeof a || a.ia !== Ya)
    }

    function $a(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ab;

    function bb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        z(a, d | 1);
        return !0
    }
    var cb;
    const db = [];
    z(db, 55);
    cb = Object.freeze(db);

    function eb(a) {
        if (a & 2) throw Error();
    }
    class fb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new fb(this.g, this.h, this.l)
        }
    }
    class gb {}
    class ib {}
    Object.freeze(new gb);
    Object.freeze(new ib);
    let jb;

    function kb(a) {
        a = Error(a);
        Ia(a, "warning");
        return a
    };

    function lb(a) {
        if (!Number.isFinite(a)) throw kb("enum");
        return a | 0
    }

    function nb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function D(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function ob(a, b, c, d) {
        if (null != a && "object" === typeof a && a.C === Xa) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[Sa]) ? b = a : (a = new b, B(a.j), b = b[Sa] = a) : b = new b : b = void 0, b;
        let e = c = a[x] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && z(a, e);
        return new b(a)
    }

    function sb(a, b, c) {
        if (b) {
            if ("string" !== typeof a) throw Error();
            return a
        }
        let d;
        return null != (d = D(a)) ? d : c ? "" : void 0
    };
    let tb;
    const ub = {},
        vb = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function wb(a) {
        return a
    }

    function xb(a) {
        if (a.s & 2) throw Error("Cannot mutate an immutable Map");
    }
    var F = class extends vb {
        constructor(a, b, c = wb, d = wb) {
            super();
            let e = a[x] | 0;
            e |= 64;
            z(a, e);
            this.s = e;
            this.B = b;
            this.v = c;
            this.J = this.B ? yb : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        W(a = zb) {
            if (0 !== this.size) return this.G(a)
        }
        G(a = zb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            xb(this);
            super.clear()
        }
        delete(a) {
            xb(this);
            return super.delete(this.v(a, !0, !1))
        }
        entries() {
            var a = this.U();
            return new fb(a, Ab, this)
        }
        keys() {
            return this.ha()
        }
        values() {
            var a = this.U();
            return new fb(a, F.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            xb(this);
            a = this.v(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.J(b, !0, !0, this.B, !1, this.s))
        }
        has(a) {
            return super.has(this.v(a, !1, !1))
        }
        get(a) {
            a = this.v(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.B;
                return c ? (c = this.J(b, !1, !0, c, this.fa, this.s),
                    c !== b && super.set(a, c), c) : b
            }
        }
        U() {
            return Array.from(super.keys())
        }
        ha() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    F.prototype.toJSON = void 0;
    F.prototype.ia = Ya;

    function yb(a, b, c, d, e, f) {
        a = ob(a, d, c, f);
        e && (a = Bb(a));
        return a
    }

    function zb(a) {
        return a
    }

    function Ab(a) {
        return [a, this.get(a)]
    }
    let Cb;

    function Db() {
        return Cb || (Cb = new F(B([]), void 0, void 0, void 0, ub))
    };

    function Eb(a, b) {
        return Fb(b)
    }

    function Fb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (bb(a, void 0, 0)) return
                    } else {
                        if (null != a && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof F) return a.W()
                    }
        }
        return a
    };

    function Gb(a, b, c) {
        a = w(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function Hb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = bb(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : Ib(a, b, c, void 0 !== d, e);
            else if ($a(a)) {
                const f = {};
                for (let g in a) f[g] = Hb(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Ib(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = w(a);
        for (let g = 0; g < a.length; g++) a[g] = Hb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Jb(a) {
        return Hb(a, Kb, void 0, void 0, !1)
    }

    function Kb(a) {
        return a.C === Xa ? a.toJSON() : a instanceof F ? a.W(Jb) : Fb(a)
    };

    function Lb(a, b, c = Va) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? z(a, (d | 34) & -12293) : Ib(a, Lb, d & 4 ? Va : c, !0, !0)
            }
            a.C === Xa ? (c = a.j, d = c[x], a = d & 2 ? a : Mb(a, c, d, !0)) : a instanceof F && !(a.s & 2) && (c = B(a.G(Lb)), a = new F(c, a.B, a.v, a.J));
            return a
        }
    }

    function Nb(a) {
        const b = a.j;
        return Mb(a, b, b[x], !1)
    }

    function Mb(a, b, c, d) {
        a = a.constructor;
        tb = b = Ob(b, c, d);
        b = new a(b);
        tb = void 0;
        return b
    }

    function Ob(a, b, c) {
        const d = c || b & 2 ? Va : Ua,
            e = !!(b & 32);
        a = Gb(a, b, f => Lb(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Bb(a) {
        const b = a.j,
            c = b[x];
        return c & 2 ? Mb(a, b, c, !1) : a
    };

    function G(a, b) {
        a = a.j;
        return H(a, a[x], b)
    }

    function Pb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }

    function H(a, b, c, d) {
        if (-1 === c) return null;
        const e = Wa(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (Pb(a, b, e, c) && null != Ta) {
                    var g;
                    a = null != (g = jb) ? g : jb = {};
                    g = a[Ta] || 0;
                    4 <= g || (a[Ta] = g + 1, g = Error(), Ia(g, "incident"), Ja(g))
                }
                return d
            }
            return Pb(a, b, e, c)
        }
    }

    function I(a, b, c) {
        const d = a.j;
        let e = d[x];
        eb(e);
        J(d, e, b, c);
        return a
    }

    function J(a, b, c, d, e) {
        const f = Wa(b);
        if (c >= f || e) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && z(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Qb(a, b, c) {
        a = H(a, b, c);
        return Array.isArray(a) ? a : cb
    }

    function Rb(a, b) {
        0 === a && (a = K(a, b, !1));
        return a = y(a, 1, !0)
    }

    function Sb(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Tb(a, b, c, d, e, f) {
        const g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Db();
                    break a
                }
                h = []
            } else if (h.constructor === F) {
                if (0 == (h.s & 2) || k) {
                    a = h;
                    break a
                }
                h = h.G()
            } else Array.isArray(h) ? c = !!((h[x] | 0) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Db();
                    break a
                }
                c || (c = !0, B(h))
            } else if (c) {
                c = !1;
                k = w(h);
                for (h = 0; h < k.length; h++) {
                    const l = k[h] = w(k[h]);
                    Array.isArray(l[1]) && (l[1] = B(l[1]))
                }
                h = k
            }
            c || ((h[x] | 0) & 64 ? h[x] &= -33 : 32 & b && (h[x] |= 32));f = new F(h, e, sb, f);J(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.fa = !0);
        return a
    }

    function Ub(a, b) {
        a = a.j;
        const c = a[x];
        return Tb(a, c, H(a, c, b), b, void 0, sb)
    }

    function M(a, b, c) {
        a = a.j;
        let d = a[x];
        const e = H(a, d, c, !1);
        b = ob(e, b, !1, d);
        b !== e && null != b && J(a, d, c, b, !1);
        return b
    }

    function O(a, b, c) {
        b = M(a, b, c);
        if (null == b) return b;
        a = a.j;
        let d = a[x];
        if (!(d & 2)) {
            const e = Bb(b);
            e !== b && (b = e, J(a, d, c, b, !1))
        }
        return b
    }

    function K(a, b, c) {
        a = y(a, 2, !!(2 & b));
        a = y(a, 32, !!(32 & b) && c);
        return a = y(a, 2048, !1)
    }

    function Vb(a, b) {
        a = a.j;
        let c = a[x];
        const d = 2 & c ? 1 : 2;
        let e = Qb(a, c, b);
        var f = e[x] | 0;
        if (!(4 & f)) {
            if (4 & f || Object.isFrozen(e)) e = w(e), f = K(f, c, !1), c = J(a, c, b, e);
            for (var g = 0, h = 0; g < e.length; g++) {
                const k = D(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f = Rb(f, c);
            f = y(f, 20, !0);
            f = y(f, 4096, !1);
            f = y(f, 8192, !1);
            z(e, f);
            2 & f && Object.freeze(e)
        }
        Sb(f) || (g = f, (h = 1 === d) ? f = y(f, 2, !0) : f = y(f, 32, !1), f !== g && z(e, f), h && Object.freeze(e));
        2 === d && Sb(f) && (e = w(e), f = K(f, c, !1), z(e, f), J(a, c, b, e));
        return e
    }

    function Wb(a, b) {
        a = G(a, b);
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function P(a, b) {
        return null != a ? a : b
    }

    function Q(a, b, c = !1) {
        a = G(a, b);
        return P(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, c)
    }

    function R(a, b) {
        return P(D(G(a, b)), "")
    }

    function S(a, b, c = 0) {
        return P(Wb(a, b), c)
    }

    function Xb(a, b, c) {
        if (null != c && "boolean" !== typeof c) throw a = typeof c, Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return I(a, b, c)
    }

    function Yb(a, b, c) {
        if (null != c) {
            if ("number" !== typeof c) throw kb("int32");
            if (!Number.isFinite(c)) throw kb("int32");
            c |= 0
        }
        I(a, b, c)
    }

    function T(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        return I(a, b, c)
    };

    function Zb(a) {
        ab = !0;
        try {
            return JSON.stringify(a.toJSON(), Eb)
        } finally {
            ab = !1
        }
    }
    var U = class {
        constructor(a) {
            a: {
                null == a && (a = tb);tb = void 0;
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
                    if (d && (--d, $a(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                z(a, b)
            }
            this.j = a
        }
        toJSON() {
            return ab ? $b(this, this.j, !1) : $b(this, Ib(this.j, Kb, void 0, void 0, !1), !0)
        }
    };
    U.prototype.C = Xa;
    U.prototype.toString = function() {
        return $b(this, this.j, !1).toString()
    };

    function $b(a, b, c) {
        var d = ma ? void 0 : a.constructor.A;
        const e = (c ? a.j : b)[x];
        a = b.length;
        if (!a) return b;
        let f, g;
        if ($a(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {},
                    p = !1;
                for (var k in h) {
                    let q = h[k];
                    if (Array.isArray(q)) {
                        let A = q;
                        if (bb(q, d, +k) || Za(q) && 0 === q.size) q = null;
                        q != A && (p = !0)
                    }
                    null != q ? m[k] = q : p = !0
                }
                if (p) {
                    for (var l in m) {
                        h = m;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            l = a - 1;
            c = b[l];
            l -= k;
            if (!(null == c || bb(c, d, l) || Za(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    };
    var ac = class extends U {
        constructor() {
            super()
        }
    };
    var bc = class extends U {};
    var cc = class extends U {};
    var dc = class extends U {
        u() {
            return R(this, 3)
        }
        V(a) {
            Xb(this, 5, a)
        }
    };
    var V = class extends U {
        u() {
            return R(this, 1)
        }
        V(a) {
            Xb(this, 2, a)
        }
    };
    var ec = class extends U {};

    function fc(a) {
        a = a.j;
        var b = a[x],
            c = b,
            d = !(2 & b),
            e = !!(2 & c),
            f = e ? 1 : 2;
        b = 1 === f;
        f = 2 === f;
        d && (d = !e);
        e = Qb(a, c, 7);
        var g = e[x] | 0;
        const h = !!(4 & g);
        if (!h) {
            g = Rb(g, c);
            var k = e,
                l = c,
                m = !!(2 & g);
            m && (l = y(l, 2, !0));
            let p = !m,
                q = !0,
                A = 0,
                C = 0;
            for (; A < k.length; A++) {
                const E = ob(k[A], dc, !1, l);
                if (E instanceof dc) {
                    if (!m) {
                        const Z = !!((E.j[x] | 0) & 2);
                        p && (p = !Z);
                        q && (q = Z)
                    }
                    k[C++] = E
                }
            }
            C < A && (k.length = C);
            g = y(g, 4, !0);
            g = y(g, 16, q);
            g = y(g, 8, p);
            z(k, g);
            m && Object.freeze(k)
        }
        k = !!(8 & g) || b && !e.length;
        if (d && !k) {
            Sb(g) && (e = w(e), g = K(g, c, !1), c = J(a, c, 7, e));
            d = e;
            k = g;
            for (g =
                0; g < d.length; g++) l = d[g], m = Bb(l), l !== m && (d[g] = m);
            k = y(k, 8, !0);
            k = y(k, 16, !d.length);
            z(d, k);
            g = k
        }
        Sb(g) || (d = g, b ? g = y(g, !e.length || 16 & g && (!h || 32 & g) ? 2 : 2048, !0) : g = y(g, 32, !1), g !== d && z(e, g), b && Object.freeze(e));
        f && Sb(g) && (e = w(e), g = K(g, c, !1), z(e, g), J(a, c, 7, e));
        return e
    }
    var gc = class extends U {};
    gc.A = [6, 7];

    function hc(a) {
        a = a.j;
        const b = a[x];
        return Tb(a, b, H(a, b, 1), 1, gc)
    }
    var ic = class extends U {};
    ic.A = [17];
    var jc = class extends U {};
    var kc = class extends U {
        constructor() {
            super()
        }
    };

    function lc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var mc = {
            capture: !0
        },
        nc = {
            passive: !0
        },
        oc = lc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function pc(a) {
        return a ? a.passive && oc() ? a : a.capture || !1 : !1
    }

    function qc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, pc(d))
    };

    function rc(a, b) {
        b instanceof r ? b = b instanceof r && b.constructor === r ? b.g : "type_error:SafeUrl" : b = Ha.test(b) ? b : void 0;
        a.href = void 0 === b ? sa.toString() : b
    };
    var sc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function tc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) tc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function uc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var vc = /#|$/;

    function wc(a, b) {
        var c = a.search(vc),
            d = uc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var xc = /[?&]($|#)/;

    function yc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var zc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let Ac = [];
    const Bc = () => {
        const a = Ac;
        Ac = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Cc = a => {
            Ac.push(a);
            1 == Ac.length && (window.Promise ? Promise.resolve().then(Bc) : window.setImmediate ? setImmediate(Bc) : setTimeout(Bc, 0))
        },
        Dc = a => {
            var b = W;
            "complete" === b.readyState || "interactive" === b.readyState ? Cc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        Ec = a => {
            var b = window;
            "complete" === b.document.readyState ? Cc(a) : b.addEventListener("load", a)
        };

    function Jc(a = document) {
        return a.createElement("img")
    };

    function Kc(a, b, c = null, d = !1) {
        Lc(a, b, c, d)
    }

    function Lc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Jc(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, pc());
                e.removeEventListener && e.removeEventListener("error", f, pc())
            };
            qc(e, "load", f);
            qc(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Mc(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Kc(a, b, void 0, !1)
    };
    let Nc = 0;

    function Oc(a) {
        return (a = Pc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Pc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Qc(a) {
        if (!(.01 < Math.random())) {
            const b = Pc(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Oc(a)}&sample=${.01}`;
            Mc(window, a)
        }
    };
    var W = document,
        Rc = window;
    const Sc = [va, wa, ya, xa, ua, Aa, Ba, za, Ca];

    function Tc(a, b) {
        if (a instanceof r) return a;
        const c = Fa(a, Sc);
        c === sa && b(a);
        return c
    }
    var Uc = a => {
        var b = `${"http:"===Rc.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) tc(e, c[e], d);
            var e = d.join("&");
            if (e) {
                c = b.indexOf("#");
                0 > c && (c = b.length);
                d = b.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var f = ""
                } else f = b.substring(d + 1, c);
                c = [b.slice(0, d), f, b.slice(c)];
                d = c[1];
                c[1] = e ? d ? d + "&" + e : e : d;
                e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else e = b;
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };
    var Vc = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Wc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Xc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Yc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Zc = class {
            constructor(a, b) {
                this.url = a;
                this.T = !!b;
                this.depth = null
            }
        };
    let $c = null;

    function ad() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function bd() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var cd = class {
        constructor(a, b) {
            var c = bd() || ad();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const X = n.performance,
        dd = !!(X && X.mark && X.measure && X.clearMarks),
        ed = lc(() => {
            var a;
            if (a = dd) {
                var b;
                if (null === $c) {
                    $c = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && ($c = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = $c;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function fd(a) {
        a && X && ed() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class gd {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = ed() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new cd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && ed() && X.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (bd() || ad()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && ed() && X.mark(b);
                !this.g ||
                    2048 < this.h.length || this.h.push(a)
            }
        }
    };

    function hd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function id(a, b, c, d, e) {
        const f = [];
        yc(a, function(g, h) {
            (g = jd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function jd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(jd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(id(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function kd(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function ld(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = kd(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = id(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class md {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function nd(a) {
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

    function od(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                fd(e), c = a.m(b, new Wc(f, {
                    message: nd(f)
                }), void 0, void 0)
            } catch (g) {
                a.l(217, g)
            }
            if (c) {
                let g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, f)
            } else throw f;
        }
        return d
    }

    function pd(a, b) {
        var c = qd;
        return (...d) => od(c, a, () => b.apply(void 0, d))
    }
    var td = class {
        constructor(a = null) {
            this.pinger = rd;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const N = new md;
                var g = N;
                g.g.push(1);
                g.h[1] = hd("context", a);
                b.error && b.meta && b.id || (b = new Wc(b, {
                    message: nd(b)
                }));
                if (b.msg) {
                    g = N;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = hd("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.h) try {
                    this.h(b)
                } catch (L) {}
                if (d) try {
                    d(b)
                } catch (L) {}
                d = N;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = n;
                k = [];
                let Ga;
                b = null;
                do {
                    var l = d;
                    try {
                        var m;
                        if (m = !!l && null != l.location.href) b: {
                            try {
                                La(l.foo);
                                m = !0;
                                break b
                            } catch (L) {}
                            m = !1
                        }
                        var p = m
                    } catch (L) {
                        p = !1
                    }
                    p ? (Ga = l.location.href, b = l.document && l.document.referrer || null) : (Ga = b, b = null);
                    k.push(new Zc(Ga || ""));
                    try {
                        d = l.parent
                    } catch (L) {
                        d = null
                    }
                } while (d && l != d);
                for (let L = 0, Fc = k.length - 1; L <= Fc; ++L) k[L].depth = Fc - L;
                l = n;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (p = 1; p < k.length; ++p) {
                        var q = k[p];
                        q.url || (q.url = l.location.ancestorOrigins[p - 1] || "", q.T = !0)
                    }
                var A = k;
                let pb = new Zc(n.location.href, !1);
                l = null;
                const qb = A.length -
                    1;
                for (q = qb; 0 <= q; --q) {
                    var C = A[q];
                    !l && Xc.test(C.url) && (l = C);
                    if (C.url && !C.T) {
                        pb = C;
                        break
                    }
                }
                C = null;
                const Sd = A.length && A[qb].url;
                0 != pb.depth && Sd && (C = A[qb]);
                f = new Yc(pb, C);
                if (f.h) {
                    A = N;
                    var E = f.h.url || "";
                    A.g.push(4);
                    A.h[4] = hd("top", E)
                }
                var Z = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var rb = f.g.url.match(sc),
                        pa = rb[1],
                        Gc = rb[3],
                        Hc = rb[4];
                    E = "";
                    pa && (E += pa + ":");
                    Gc && (E += "//", E += Gc, Hc && (E += ":" + Hc));
                    var Ic = E
                } else Ic = "";
                pa = N;
                Z = [Z, {
                    url: Ic
                }];
                pa.g.push(5);
                pa.h[5] = Z;
                sd(this.pinger, e, N, this.i, c)
            } catch (N) {
                try {
                    sd(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: nd(N),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Ga) {}
            }
            return !0
        }
    };
    class ud {};

    function sd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof md ? f = c : (f = new md, yc(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = hd(k, h);
                l.g.push(m);
                l.h[m] = h
            }));
            const g = ld(f, "/pagead/gen_204?id=" + b + "&");
            g && Kc(n, g)
        } catch (f) {}
    }

    function vd() {
        var a = rd,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class wd {
        constructor() {
            this.g = Math.random()
        }
    };
    let rd, qd;
    const Y = new gd;
    var xd = () => {
        window.google_measure_js_timing || (Y.g = !1, Y.h != Y.i.google_js_reporting_queue && (ed() && Array.prototype.forEach.call(Y.h, fd, void 0), Y.h.length = 0))
    };
    (a => {
        rd = null != a ? a : new wd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        vd();
        qd = new td(Y);
        qd.h = b => {
            const c = Nc;
            0 !== c && (b.jc = String(c), b.shv = Oc(c))
        };
        qd.i = !0;
        "complete" == window.document.readyState ? xd() : Y.g && qc(window, "load", () => {
            xd()
        })
    })();
    var yd = (a, b) => pd(a, b),
        zd = a => {
            var b = ud;
            var c = "S";
            b.S && b.hasOwnProperty(c) || (c = new b, b.S = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            sd(rd, "gdn-asoch", a, !0)
        };

    function Ad(a = window) {
        return a
    };
    ia({
        ua: 0,
        ta: 1,
        qa: 2,
        la: 3,
        ra: 4,
        ma: 5,
        sa: 6,
        oa: 7,
        pa: 8,
        ka: 9,
        na: 10,
        va: 11
    });
    ia({
        xa: 0,
        ya: 1,
        wa: 2
    });

    function Bd(a) {
        var b = new Cd,
            c = b.j;
        const d = c[x] | 0;
        eb(b.j[x]);
        var e = d & 2;
        b = H(c, d, 1, !1);
        Array.isArray(b) || (b = cb);
        const f = !!(d & 32);
        let g = b[x] | 0;
        0 === g && f && !e ? (g |= 33, z(b, g)) : g & 1 || (g |= 1, z(b, g));
        if (e) g & 2 || B(b), Object.freeze(b);
        else if (2 & g || 2048 & g) b = w(b), e = 1, f && (e |= 32), z(b, e), J(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) c.push(lb(a[h]));
        else
            for (h of a) c.push(lb(h))
    }
    var Cd = class extends U {
        constructor() {
            super()
        }
    };
    Cd.A = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    Bd([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    Bd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    Bd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new Cd;
    var Dd = (a, b) => {
            b = R(a, 2) || b;
            if (!b) return "";
            if (Q(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Ub(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Ed = (a, b = []) => {
            b = 0 < b.length ? b : Vc("data-asoch-targets");
            a = hc(a);
            const c = [];
            for (let h = 0; h < b.length; ++h) {
                var d = b[h].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let k of e)
                    if (!a.has(k)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f = a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var g = a.get(e[d]);
                        f = Nb(f).toJSON();
                        g = g.toJSON();
                        const k = Math.max(f.length, g.length);
                        for (let l = 0; l < k; ++l) null == f[l] && (f[l] = g[l]);
                        f = new gc(f)
                    }
                    e = Ub(f, 4);
                    null != Wb(f, 5) && e.set("nb", S(f, 5, 0).toString());
                    c.push({
                        element: b[h],
                        data: f
                    })
                } else zd({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        Hd = (a, b, c, d) => {
            c = Dd(b, c);
            if (0 !== c.length) {
                if ("2" === wc(c, "ase") && 1087 !== d) {
                    const f = 609 === d;
                    var e;
                    const g = !(null == (e = W.featurePolicy) || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : g ? 6 : 5;
                    let h = "";
                    f || g &&
                        !Fd(c) ? (c = Gd(c, "nis", e.toString()), a.setAttribute("attributionsrc", h)) : g && Fd(c) && (h = Gd(da(new fa({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", h))
                }
                rc(a, Tc(c, Uc(d)));
                a.target || (a.target = null != D(G(b, 11)) ? R(b, 11) : "_top")
            }
        },
        Id = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !Q(a, 1)) {
                    const c = b.element;
                    Hd(c, a, c.href, 609)
                }
        },
        Jd = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const e = c.exec(a);
            b = b + "=" + d;
            return e ? a.replace(c, e[0].charAt(0) +
                b) : a.replace("?", "?" + b + "&")
        },
        Fd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        Kd = a => {
            const b = n.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== M(a, ec, 8)) {
                        const d = R(O(a, ec, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, R(O(a, ec, 8), 6));
                            break
                        }
                    }
        },
        Ld = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && void 0 !== M(a, V, 12) && (d.push(O(a, V, 12)), c.push(O(a, V, 12).u()));
            e = (f, g) => {
                if (g)
                    for (const h of d) g[h.u()] && h.V(!0)
            };
            a = n.oneAfmaInstance;
            for (const f of c) {
                let g;
                null == (g = a) || g.canOpenAndroidApp(f,
                    e, () => {}, b)
            }
        },
        Nd = (a, b, c, d, e) => {
            if (!b || void 0 === M(b, ec, 8)) return !1;
            const f = O(b, ec, 8);
            let g = R(f, 2);
            Ub(b, 10).forEach((l, m) => {
                g = Jd(g, m, l)
            });
            Md(b) && Q(b, 15) && !/[?&]label=/.test(c) && (c = Gd(c, "label", "deep_link_fallback"));
            const h = l => d.openStoreOverlay(l, void 0, R(f, 6)),
                k = l => Mc(Rc, l);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: R(f, 3),
                finalUrl: g,
                pingFunc: Q(b, 13) ? d.httpTrack : e ? k : d.click,
                openFunc: (null == a ? 0 : Q(a, 1)) ? h : d.openIntentOrNativeApp,
                isExternalClickUrl: Q(b, 13)
            })
        },
        Od = (a, b, c, d) => {
            c && c.startsWith("intent:") ?
                d.openIntentOrNativeApp(c) : a ? b ? d.openBrowser(c) : d.openChromeCustomTab(c) : d.openSystemBrowser(c, {
                    useFirstPackage: !0,
                    useRunningProcess: !0
                })
        },
        Qd = (a, b, c, d, e, f, g, h = !1, k = !1) => {
            const l = Q(e, 15);
            if (l && null != D(G(e, 22))) Od(c, d, R(e, 22), g);
            else {
                var m = Fd(f);
                if (a && b && (!l || !m) && (f = h ? Pd(f) : Pd(f, g.click), k && (null == e ? 0 : Q(e, 21, !1)))) return;
                Od(c, d, f, g)
            }
        },
        Pd = (a, b = null) => {
            if (null !== b) {
                const c = new fa({
                    url: a
                });
                if (c.h && c.i || c.m) return b(da(c)), ea(c, 1)
            } else return {
                    X: b
                } = {}, b = new fa({
                    url: a,
                    X: b
                }), b.h && b.i || b.m ? navigator.sendBeacon ?
                navigator.sendBeacon(da(b), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : a;
            return a
        },
        Rd = (a, b = !0) => {
            b && Rc.fetch ? Rc.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Kc(Rc, a)
            }) : Kc(Rc, a)
        },
        Gd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Md = a => {
            for (const b of fc(a))
                if (3 === S(b, 1, 0) && R(b, 2)) return !0;
            return !1
        };
    var Td = (a, b) => a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
    var Ud = class extends U {
        constructor() {
            super()
        }
    };

    function Vd(a, b) {
        return T(a, 2, b)
    }

    function Wd(a, b) {
        return T(a, 3, b)
    }

    function Xd(a, b) {
        return T(a, 4, b)
    }

    function Yd(a, b) {
        return T(a, 5, b)
    }

    function Zd(a, b) {
        return T(a, 9, b)
    }

    function $d(a, b) {
        {
            const m = a.j;
            let p = m[x];
            eb(p);
            if (null == b) J(m, p, 10);
            else {
                var c = b[x] | 0,
                    d = c,
                    e = !!(2 & c) || !!(2048 & c),
                    f = e || Object.isFrozen(b),
                    g;
                if (g = !f) g = !1;
                var h = !0,
                    k = !0;
                for (let q = 0; q < b.length; q++) {
                    var l = b[q];
                    e || (l = !!((l.j[x] | 0) & 2), h && (h = !l), k && (k = l))
                }
                e || (c = y(c, 5, !0), c = y(c, 8, h), c = y(c, 16, k));
                if (g || f && c !== d) b = w(b), d = 0, c = K(c, p, !0);
                c !== d && z(b, c);
                J(m, p, 10, b)
            }
        }
        return a
    }

    function ae(a, b) {
        return Xb(a, 11, b)
    }

    function be(a, b) {
        return T(a, 1, b)
    }

    function ce(a, b) {
        return Xb(a, 7, b)
    }
    var de = class extends U {
        constructor() {
            super()
        }
    };
    de.A = [10, 6];
    const ee = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function fe(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ge(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function he() {
        var a = window;
        if (!ge(a)) return null;
        const b = fe(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ee).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function ie(a) {
        let b;
        return ae($d(Yd(Vd(be(Xd(ce(Zd(Wd(new de, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Ud;
            d = T(d, 1, c.brand);
            return T(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function je() {
        let a, b;
        return null != (b = null == (a = he()) ? void 0 : a.then(c => ie(c))) ? b : null
    };

    function ke(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == D(G(c, 2)) && T(c, 2, a.href)
            }
    }

    function le(a, b) {
        return ha(a, c => c.element === b)
    }

    function me(a) {
        Dc(yd(556, () => {
            new ne(a || {})
        }))
    }

    function oe(a, b) {
        if (!b.defaultPrevented || a.F === b) {
            for (var c, d, e = b.target;
                (!c || !d) && e;) {
                d || "A" != e.tagName || (d = e);
                var f = e.hasAttribute("data-asoch-targets"),
                    g = e.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (g) c = new gc(JSON.parse(e.getAttribute("data-asoch-fixed-value")) || []);
                    else if ("A" == e.tagName || f)
                    if (f = f && "true" === e.getAttribute("data-asoch-is-dynamic") ? Ed(a.h, [e]) : a.g, f = le(f, e)) c = f.data;
                e = e.parentElement
            }
            e = c && !Q(c, 1);
            if (a.I && a.l && b.defaultPrevented) pe(a, b, d, e ? c : a.l);
            else {
                if (e) {
                    if (!a.I && b.defaultPrevented) {
                        pe(a,
                            b, d, c);
                        return
                    }
                    f = c;
                    for (var h of Vb(f, 6)) Rd(h)
                }
                a.K && e && Q(c, 21, !1) && (zc(b), (h = c) && R(h, 2) && (f = Jd(R(h, 2), "ae", "1"), T(h, 2, f)));
                if (d && e) {
                    c = e ? c : null;
                    (h = le(a.g, d)) ? h = h.data: (h = new gc, T(h, 2, d.href), T(h, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: h
                    }));
                    Hd(d, c || h, R(h, 2), 557);
                    qe(a, b, d, c);
                    for (var k of Vb(a.h, 17)) h = W.body, e = {}, "function" === typeof window.CustomEvent ? f = new CustomEvent(k, e) : (f = document.createEvent("CustomEvent"), f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)), h.dispatchEvent(f);
                    if (null ==
                        c ? 0 : null != D(G(c, 19))) {
                        h = k = new ac;
                        e = S(c, 5, 0);
                        I(h, 1, null == e ? e : lb(e));
                        h = Td(d.href, "nx");
                        "" != h && Yb(k, 2, +h);
                        h = Td(d.href, "ny");
                        "" != h && Yb(k, 3, +h);
                        h = Td(d.href, "bg");
                        "" != h && T(k, 4, h);
                        h = Td(d.href, "nm");
                        "" != h && Yb(k, 5, +h);
                        h = Td(d.href, "mb");
                        "" != h && Yb(k, 6, +h);
                        h = d.href;
                        e = h.search(vc);
                        f = 0;
                        for (var l = []; 0 <= (g = uc(h, f, "bg", e));) l.push(h.substring(f, g)), f = Math.min(h.indexOf("&", g) + 1 || e, e);
                        l.push(h.slice(f));
                        h = l.join("").replace(xc, "$1");
                        rc(d, Tc(h, Uc(1211)));
                        f = R(c, 19);
                        h = null != nb(G(c, 20)) ? P(nb(G(c, 20)), 0) : null;
                        g = Zb(k);
                        k =
                            a.o;
                        e = Ad(n);
                        l = new kc;
                        f = T(l, 1, f);
                        f = T(f, 4, g);
                        f = T(f, 10, Date.now().toString());
                        null !== h && Yb(f, 2, h);
                        null !== k && T(f, 3, k);
                        I(f, 9, lb(7));
                        var m;
                        null == e || null == (m = e.fence) || m.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation_start",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        });
                        var p;
                        null == e || null == (p = e.fence) || p.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        })
                    }
                    Q(a.h, 16) || a.M ? re(a, b, d, c) : (m = "", (p = n.oneAfmaInstance) && (m = p.appendClickSignals(d.href)), se(a, b,
                        d, c, m))
                }
            }
        }
    }

    function pe(a, b, c, d) {
        if (a.F === b && a.H) {
            const f = new cc(a.H),
                g = R(d, 9);
            var e = "";
            switch (S(f, 4, 1)) {
                case 2:
                    if (P(nb(G(f, 2)), 0)) e = "blocked_fast_click";
                    else if (R(f, 1) || R(f, 7)) e = "blocked_border_click";
                    break;
                case 3:
                    e = W;
                    e = e.getElementById ? e.getElementById("common_15click_anchor") : null;
                    const h = window;
                    if ("function" === typeof h.copfcChm && e) {
                        d = Nb(d);
                        I(d, 5, lb(12));
                        Ub(d, 4).set("nb", (12).toString());
                        const k = le(a.g, e);
                        k ? k.data = d : a.g.push({
                            element: e,
                            data: d
                        });
                        !a.R && c && (qe(a, b, c, d), T(d, 2, c.href));
                        h.copfcChm(b, Dd(d, e.href),
                            null, void 0 !== M(f, bc, 10) ? Zb(O(f, bc, 10)) : null);
                        a.R && qe(a, b, e, d)
                    }
                    e = "onepointfiveclick_first_click"
            }
            g && e && Rd(g + "&label=" + e, !1);
            Qc(a.N)
        }
    }

    function qe(a, b, c, d) {
        if (!Q(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (rc(c, Tc(e[0], Uc(557))); !c.id;)
                if (f = "asoch-id-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, W.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" ===
            typeof window.ja && window.ja(f, d ? S(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(c);
            a.i && "function" === typeof window.ss && (a.P ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
            0 < e.length && (a = 0 < a.o.length && (null == d || null == D(G(d, 19))) ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1] : c.href + e[1], rc(c, Tc(a, Uc(557))))
        }
    }
    async function re(a, b, c, d) {
        let e = "";
        var f = n.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.M)) {
            if (a.aa) return;
            if (f = await f.getNativeClickMeta()) {
                if (f.customClickGestureEligible) return;
                e = Gd(e, "nas", f.encodedNas)
            }
        }
        se(a, b, c, d, e)
    }

    function se(a, b, c, d, e) {
        const f = Q(a.h, 2),
            g = f && 300 < Date.now() - a.O,
            h = n.oneAfmaInstance;
        h ? (zc(b), (() => {
            var k = Q(d, 13) ? e : h.logScionEventAndAddParam(e);
            if (!a.D && d && void 0 !== M(d, V, 12)) {
                var l = O(d, V, 12).u();
                var m = "";
                if (0 < fc(d).length)
                    for (const p of fc(d)) m += R(p, 2) + " " + p.u() + " ";
                Q(O(d, V, 12), 2) ? (h.click(k), h.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Nd(a.m, d, k, h, a.ba) || Qd(f, g, a.da, a.D, d, k, h, a.ca, a.K)
        })()) : (b = window, a.Z && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : g && (b = null != c.getAttribute("attributionsrc") &&
            "6" === wc(c.getAttribute("attributionsrc"), "nis") ? Pd(c.href, () => {}) : Pd(c.href), b !== c.href && rc(c, Tc(b, Uc(599)))));
        g && (a.O = Date.now());
        Qc(a.N)
    }
    var ne = class {
        constructor(a) {
            this.D = Oa || Ma || Pa || Na;
            var b = Vc("data-asoch-meta");
            if (1 !== b.length) zd({
                type: 2,
                data: b.length
            });
            else {
                this.N = 70;
                this.h = new ic(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.L = a["extra-meta"] ? new ic(JSON.parse(a["extra-meta"])) : null;
                this.M = "true" === a["is-fsn"];
                this.aa = "true" === a["is-tap-disabled-for-fsn"];
                this.m = a["ios-store-overlay-config"] ? new jc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.da = "true" === a["use-cct-over-browser"];
                this.ba = "true" === a["send-ac-click-ping-by-js"];
                this.R = "true" === a["correct-redirect-url-for-och-15-click"];
                this.ca = "true" === a["send-click-ping-by-js-in-och"];
                this.Y = "true" === a["middle-clicks-in-och"];
                this.I = "true" === a["default-msg-in-och"];
                this.Z = "true" === a["enable-paw"];
                this.K = "true" === a["allow-redirection-muted-in-och"];
                this.o = "";
                b = je();
                null != b && b.then(d => {
                    var e = Zb(d);
                    d = [];
                    for (var f = 0, g = 0; g < e.length; g++) {
                        var h = e.charCodeAt(g);
                        255 < h && (d[f++] = h & 255, h >>= 8);
                        d[f++] = h
                    }
                    e = 3;
                    void 0 === e && (e = 0);
                    if (!Ra)
                        for (Ra = {}, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                            g = ["+/=", "+/", "-_=", "-_.", "-_"], h = 0; 5 > h; h++) {
                            var k = f.concat(g[h].split(""));
                            Qa[h] = k;
                            for (var l = 0; l < k.length; l++) {
                                var m = k[l];
                                void 0 === Ra[m] && (Ra[m] = l)
                            }
                        }
                    e = Qa[e];
                    f = Array(Math.floor(d.length / 3));
                    g = e[64] || "";
                    for (h = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            q = d[k + 1];
                        m = d[k + 2];
                        l = e[p >> 2];
                        p = e[(p & 3) << 4 | q >> 4];
                        q = e[(q & 15) << 2 | m >> 6];
                        m = e[m & 63];
                        f[h++] = l + p + q + m
                    }
                    l = 0;
                    m = g;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], m = e[(l & 15) << 2] || g;
                        case 1:
                            d = d[k], f[h] = e[d >> 2] + e[(d & 3) << 4 | l >> 4] + m + g
                    }
                    this.o = f.join("")
                });
                this.g = Ed(this.h);
                this.I && (this.l = null,
                    hc(this.h).forEach(d => {
                        null != this.l || null == D(G(d, 2)) || null == D(G(d, 9)) || Q(d, 13) || (this.l = d)
                    }));
                this.ea = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.O = -Infinity;
                this.i = R(this.h, 5) || "";
                this.P = Q(this.h, 11);
                this.L && (this.P = Q(this.L, 11));
                this.H = this.F = null;
                Q(this.h, 3) || (Id(this.g), Xb(this.h, 3, !0));
                ke(this.g);
                a = n.oneAfmaInstance;
                !this.D && a && Ld(this.g, this.ea);
                var c;
                if (a && (null == (c = this.m) ? 0 : Q(c, 2))) switch (c = () => {
                        const d = P(nb(G(this.m, 4)), 0);
                        0 < d ? n.setTimeout(() => {
                            Kd(this.g)
                        }, d) : Kd(this.g)
                    },
                    S(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        Ec(c);
                        break;
                    default:
                        Kd(this.g)
                }
                qc(W, "click", yd(557, d => {
                    oe(this, d)
                }), mc);
                this.Y && qc(W, "auxclick", yd(557, d => {
                    1 === d.button && oe(this, d)
                }), mc);
                this.i && "function" === typeof window.ss && qc(W.body, "mouseover", yd(626, () => {
                    window.ss(this.i, 0)
                }), nc);
                "function" === typeof window.ivti && window.ivti(W.body);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, e) => {
                    this.F = d;
                    this.H = e
                })
            }
        }
    };
    var te = yd(555, a => me(a));
    Nc = 70;
    const ue = Pc(70, document.currentScript);
    if (null == ue) throw Error("JSC not found 70");
    const ve = {},
        we = ue.attributes;
    for (let a = we.length - 1; 0 <= a; a--) {
        const b = we[a].name;
        0 === b.indexOf("data-jcp-") && (ve[b.substring(9)] = we[a].value)
    }
    te(ve);
}).call(this);