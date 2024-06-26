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
    const pa = n.navigator;
    na = pa ? pa.userAgentData || null : null;

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

    function Ia() {
        return t("iPhone") && !t("iPod") && !t("iPad")
    };

    function Ja(a) {
        Ja[" "](a);
        return a
    }
    Ja[" "] = function() {};
    var Ka = Ia(),
        La = t("iPad");
    var Ma = Ia() || t("iPod"),
        Na = t("iPad");
    !t("Android") || ra();
    ra();
    t("Safari") && (ra() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? qa("Microsoft Edge") : t("Edg/")) || u() && qa("Opera"));
    var Oa = {},
        Pa = null;

    function w(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Qa = Symbol();

    function z(a, b, c) {
        return c ? a | b : a & ~b
    }
    var A = (a, b) => {
        a[x] = b;
        return a
    };

    function B(a) {
        a[x] |= 34;
        return a
    }

    function Ra(a, b) {
        A(b, (a | 0) & -14591)
    }

    function Sa(a, b) {
        A(b, (a | 34) & -14557)
    }

    function Ta(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Ua = {},
        Va = {};

    function Wa(a) {
        return !(!a || "object" !== typeof a || a.ia !== Va)
    }

    function Xa(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Ya;

    function Za(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        A(a, d | 1);
        return !0
    }
    var $a;
    const ab = [];
    A(ab, 55);
    $a = Object.freeze(ab);

    function bb(a) {
        if (a & 2) throw Error();
    }
    class cb {
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
            return new cb(this.g, this.h, this.l)
        }
    }
    class db {}
    class eb {}
    Object.freeze(new db);
    Object.freeze(new eb);

    function fb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        return a
    };

    function gb(a) {
        if (!Number.isFinite(a)) throw fb("enum");
        return a | 0
    }

    function ib(a) {
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

    function jb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.C === Ua) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[Qa]) ? b = a : (a = new b, B(a.j), b = b[Qa] = a) : b = new b : b = void 0, b;
        let e = c = a[x] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && A(a, e);
        return new b(a)
    }

    function kb(a, b, c) {
        if (b) {
            if ("string" !== typeof a) throw Error();
            return a
        }
        let d;
        return null != (d = D(a)) ? d : c ? "" : void 0
    };
    let lb;
    const nb = {},
        ob = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function sb(a) {
        return a
    }

    function tb(a) {
        if (a.s & 2) throw Error("Cannot mutate an immutable Map");
    }
    var F = class extends ob {
        constructor(a, b, c = sb, d = sb) {
            super();
            let e = a[x] | 0;
            e |= 64;
            A(a, e);
            this.s = e;
            this.B = b;
            this.u = c;
            this.J = this.B ? ub : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        W(a = vb) {
            if (0 !== this.size) return this.G(a)
        }
        G(a = vb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            tb(this);
            super.clear()
        }
        delete(a) {
            tb(this);
            return super.delete(this.u(a, !0, !1))
        }
        entries() {
            var a = this.U();
            return new cb(a, wb, this)
        }
        keys() {
            return this.ha()
        }
        values() {
            var a = this.U();
            return new cb(a, F.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            tb(this);
            a = this.u(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.J(b, !0, !0, this.B, !1, this.s))
        }
        has(a) {
            return super.has(this.u(a, !1, !1))
        }
        get(a) {
            a = this.u(a, !1, !1);
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
    F.prototype.ia = Va;

    function ub(a, b, c, d, e, f) {
        a = jb(a, d, c, f);
        e && (a = xb(a));
        return a
    }

    function vb(a) {
        return a
    }

    function wb(a) {
        return [a, this.get(a)]
    }
    let yb;

    function zb() {
        return yb || (yb = new F(B([]), void 0, void 0, void 0, nb))
    };

    function Ab(a, b) {
        return Bb(b)
    }

    function Bb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Za(a, void 0, 0)) return
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

    function Cb(a, b, c) {
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

    function Db(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = Za(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : Eb(a, b, c, void 0 !== d, e);
            else if (Xa(a)) {
                const f = {};
                for (let g in a) f[g] = Db(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Eb(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = w(a);
        for (let g = 0; g < a.length; g++) a[g] = Db(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Fb(a) {
        return Db(a, Gb, void 0, void 0, !1)
    }

    function Gb(a) {
        return a.C === Ua ? a.toJSON() : a instanceof F ? a.W(Fb) : Bb(a)
    };

    function Hb(a, b, c = Sa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? A(a, (d | 34) & -12293) : Eb(a, Hb, d & 4 ? Sa : c, !0, !0)
            }
            a.C === Ua ? (c = a.j, d = c[x], a = d & 2 ? a : Ib(a, c, d, !0)) : a instanceof F && !(a.s & 2) && (c = B(a.G(Hb)), a = new F(c, a.B, a.u, a.J));
            return a
        }
    }

    function Jb(a) {
        const b = a.j;
        return Ib(a, b, b[x], !1)
    }

    function Ib(a, b, c, d) {
        a = a.constructor;
        lb = b = Kb(b, c, d);
        b = new a(b);
        lb = void 0;
        return b
    }

    function Kb(a, b, c) {
        const d = c || b & 2 ? Sa : Ra,
            e = !!(b & 32);
        a = Cb(a, b, f => Hb(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function xb(a) {
        const b = a.j,
            c = b[x];
        return c & 2 ? Ib(a, b, c, !1) : a
    };

    function G(a, b) {
        a = a.j;
        return H(a, a[x], b)
    }

    function H(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= Ta(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Lb(a, b, c) {
        const d = a.j;
        let e = d[x];
        bb(e);
        I(d, e, b, c);
        return a
    }

    function I(a, b, c, d, e) {
        const f = Ta(b);
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
            g !== b && A(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Mb(a, b, c) {
        a = H(a, b, c);
        return Array.isArray(a) ? a : $a
    }

    function Nb(a, b) {
        0 === a && (a = J(a, b, !1));
        return a = z(a, 1, !0)
    }

    function Ob(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Pb(a, b, c, d, e, f) {
        const g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = zb();
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
                    a = zb();
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
            c || ((h[x] | 0) & 64 ? h[x] &= -33 : 32 & b && (h[x] |= 32));f = new F(h, e, kb, f);I(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.fa = !0);
        return a
    }

    function Qb(a, b) {
        a = a.j;
        const c = a[x];
        return Pb(a, c, H(a, c, b), b, void 0, kb)
    }

    function K(a, b, c) {
        a = a.j;
        let d = a[x];
        const e = H(a, d, c, !1);
        b = jb(e, b, !1, d);
        b !== e && null != b && I(a, d, c, b, !1);
        return b
    }

    function M(a, b, c) {
        b = K(a, b, c);
        if (null == b) return b;
        a = a.j;
        let d = a[x];
        if (!(d & 2)) {
            const e = xb(b);
            e !== b && (b = e, I(a, d, c, b, !1))
        }
        return b
    }

    function J(a, b, c) {
        a = z(a, 2, !!(2 & b));
        a = z(a, 32, !!(32 & b) && c);
        return a = z(a, 2048, !1)
    }

    function Rb(a, b) {
        a = a.j;
        let c = a[x];
        const d = 2 & c ? 1 : 2;
        let e = Mb(a, c, b);
        var f = e[x] | 0;
        if (!(4 & f)) {
            if (4 & f || Object.isFrozen(e)) e = w(e), f = J(f, c, !1), c = I(a, c, b, e);
            for (var g = 0, h = 0; g < e.length; g++) {
                const k = D(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f = Nb(f, c);
            f = z(f, 20, !0);
            f = z(f, 4096, !1);
            f = z(f, 8192, !1);
            A(e, f);
            2 & f && Object.freeze(e)
        }
        Ob(f) || (g = f, (h = 1 === d) ? f = z(f, 2, !0) : f = z(f, 32, !1), f !== g && A(e, f), h && Object.freeze(e));
        2 === d && Ob(f) && (e = w(e), f = J(f, c, !1), A(e, f), I(a, c, b, e));
        return e
    }

    function Sb(a, b) {
        a = G(a, b);
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function O(a, b) {
        return null != a ? a : b
    }

    function P(a, b, c = !1) {
        a = G(a, b);
        return O(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, c)
    }

    function Q(a, b) {
        return O(D(G(a, b)), "")
    }

    function R(a, b, c = 0) {
        return O(Sb(a, b), c)
    }

    function Tb(a, b, c) {
        if (null != c && "boolean" !== typeof c) throw a = typeof c, Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return Lb(a, b, c)
    }

    function Ub(a, b, c) {
        if (null != c) {
            if ("number" !== typeof c) throw fb("int32");
            if (!Number.isFinite(c)) throw fb("int32");
            c |= 0
        }
        Lb(a, b, c)
    }

    function S(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        return Lb(a, b, c)
    }

    function Vb(a, b, c) {
        Lb(a, b, null == c ? c : gb(c))
    };

    function Wb(a) {
        Ya = !0;
        try {
            return JSON.stringify(a.toJSON(), Ab)
        } finally {
            Ya = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                null == a && (a = lb);lb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[x] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Xa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                A(a, b)
            }
            this.j = a
        }
        toJSON() {
            return Ya ? Xb(this, this.j, !1) : Xb(this, Eb(this.j, Gb, void 0, void 0, !1), !0)
        }
    };
    T.prototype.C = Ua;
    T.prototype.toString = function() {
        return Xb(this, this.j, !1).toString()
    };

    function Xb(a, b, c) {
        var d = ma ? void 0 : a.constructor.A;
        const e = (c ? a.j : b)[x];
        a = b.length;
        if (!a) return b;
        let f, g;
        if (Xa(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {},
                    q = !1;
                for (var k in h) {
                    let p = h[k];
                    if (Array.isArray(p)) {
                        let y = p;
                        if (Za(p, d, +k) || Wa(p) && 0 === p.size) p = null;
                        p != y && (q = !0)
                    }
                    null != p ? m[k] = p : q = !0
                }
                if (q) {
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
            if (!(null == c || Za(c, d, l) || Wa(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    };
    var Yb = class extends T {
        constructor() {
            super()
        }
    };
    var Zb = class extends T {};
    var $b = class extends T {};
    var ac = class extends T {
        v() {
            return Q(this, 3)
        }
        V(a) {
            Tb(this, 5, a)
        }
    };
    var U = class extends T {
        v() {
            return Q(this, 1)
        }
        V(a) {
            Tb(this, 2, a)
        }
    };
    var bc = class extends T {};

    function cc(a) {
        a = a.j;
        var b = a[x],
            c = b,
            d = !(2 & b),
            e = !!(2 & c),
            f = e ? 1 : 2;
        b = 1 === f;
        f = 2 === f;
        d && (d = !e);
        e = Mb(a, c, 7);
        var g = e[x] | 0;
        const h = !!(4 & g);
        if (!h) {
            g = Nb(g, c);
            var k = e,
                l = c,
                m = !!(2 & g);
            m && (l = z(l, 2, !0));
            let q = !m,
                p = !0,
                y = 0,
                C = 0;
            for (; y < k.length; y++) {
                const E = jb(k[y], ac, !1, l);
                if (E instanceof ac) {
                    if (!m) {
                        const Y = !!((E.j[x] | 0) & 2);
                        q && (q = !Y);
                        p && (p = Y)
                    }
                    k[C++] = E
                }
            }
            C < y && (k.length = C);
            g = z(g, 4, !0);
            g = z(g, 16, p);
            g = z(g, 8, q);
            A(k, g);
            m && Object.freeze(k)
        }
        k = !!(8 & g) || b && !e.length;
        if (d && !k) {
            Ob(g) && (e = w(e), g = J(g, c, !1), c = I(a, c, 7, e));
            d = e;
            k = g;
            for (g =
                0; g < d.length; g++) l = d[g], m = xb(l), l !== m && (d[g] = m);
            k = z(k, 8, !0);
            k = z(k, 16, !d.length);
            A(d, k);
            g = k
        }
        Ob(g) || (d = g, b ? g = z(g, !e.length || 16 & g && (!h || 32 & g) ? 2 : 2048, !0) : g = z(g, 32, !1), g !== d && A(e, g), b && Object.freeze(e));
        f && Ob(g) && (e = w(e), g = J(g, c, !1), A(e, g), I(a, c, 7, e));
        return e
    }
    var dc = class extends T {};
    dc.A = [6, 7];

    function ec(a) {
        a = a.j;
        const b = a[x];
        return Pb(a, b, H(a, b, 1), 1, dc)
    }
    var fc = class extends T {};
    fc.A = [17];
    var gc = class extends T {};
    var hc = class extends T {
        constructor() {
            super()
        }
    };

    function ic(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var jc = {
            capture: !0
        },
        kc = {
            passive: !0
        },
        lc = ic(function() {
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

    function mc(a) {
        return a ? a.passive && lc() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, mc(d))
    };

    function nc(a, b) {
        b instanceof r ? b = b instanceof r && b.constructor === r ? b.g : "type_error:SafeUrl" : b = Ha.test(b) ? b : void 0;
        a.href = void 0 === b ? sa.toString() : b
    };
    var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function pc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) pc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function qc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var rc = /#|$/;

    function sc(a, b) {
        var c = a.search(rc),
            d = qc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var tc = /[?&]($|#)/;

    function uc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var vc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let wc = [];
    const xc = () => {
        const a = wc;
        wc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var yc = a => {
            wc.push(a);
            1 == wc.length && (window.Promise ? Promise.resolve().then(xc) : window.setImmediate ? setImmediate(xc) : setTimeout(xc, 0))
        },
        zc = a => {
            var b = W;
            "complete" === b.readyState || "interactive" === b.readyState ? yc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        Ac = a => {
            var b = window;
            "complete" === b.document.readyState ? yc(a) : b.addEventListener("load", a)
        };

    function Bc(a = document) {
        return a.createElement("img")
    };

    function Gc(a, b, c = null, d = !1) {
        Hc(a, b, c, d)
    }

    function Hc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Bc(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, mc());
                e.removeEventListener && e.removeEventListener("error", f, mc())
            };
            V(e, "load", f);
            V(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Ic(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Gc(a, b, void 0, !1)
    };
    let Jc = 0;

    function Kc(a) {
        return (a = Lc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Lc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Mc(a) {
        if (!(.01 < Math.random())) {
            const b = Lc(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Kc(a)}&sample=${.01}`;
            Ic(window, a)
        }
    };
    var W = document,
        Nc = window;
    const Oc = [va, wa, ya, xa, ua, Aa, Ba, za, Ca];

    function Pc(a, b) {
        if (a instanceof r) return a;
        const c = Fa(a, Oc);
        c === sa && b(a);
        return c
    }
    var Qc = a => {
        var b = `${"http:"===Nc.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) pc(e, c[e], d);
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
    var Rc = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Sc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Tc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Uc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Vc = class {
            constructor(a, b) {
                this.url = a;
                this.T = !!b;
                this.depth = null
            }
        };
    let Wc = null;

    function Xc() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Yc() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Zc = class {
        constructor(a, b) {
            var c = Yc() || Xc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const X = n.performance,
        $c = !!(X && X.mark && X.measure && X.clearMarks),
        ad = ic(() => {
            var a;
            if (a = $c) {
                var b;
                if (null === Wc) {
                    Wc = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Wc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Wc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function bd(a) {
        a && X && ad() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class cd {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = ad() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Zc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && ad() && X.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Yc() || Xc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && ad() && X.mark(b);
                !this.g ||
                    2048 < this.h.length || this.h.push(a)
            }
        }
    };

    function dd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function ed(a, b, c, d, e) {
        const f = [];
        uc(a, function(g, h) {
            (g = fd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function fd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(fd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ed(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function gd(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function hd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = gd(a) - b.length;
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
                let l = ed(h[k], a.i, ",$");
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
    class id {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function jd(a) {
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

    function kd(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                bd(e), c = a.m(b, new Sc(f, {
                    message: jd(f)
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

    function ld(a, b) {
        var c = md;
        return (...d) => kd(c, a, () => b.apply(void 0, d))
    }
    var pd = class {
        constructor(a = null) {
            this.pinger = nd;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const N = new id;
                var g = N;
                g.g.push(1);
                g.h[1] = dd("context", a);
                b.error && b.meta && b.id || (b = new Sc(b, {
                    message: jd(b)
                }));
                if (b.msg) {
                    g = N;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = dd("msg", h)
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
                                Ja(l.foo);
                                m = !0;
                                break b
                            } catch (L) {}
                            m = !1
                        }
                        var q = m
                    } catch (L) {
                        q = !1
                    }
                    q ? (Ga = l.location.href, b = l.document && l.document.referrer || null) : (Ga = b, b = null);
                    k.push(new Vc(Ga || ""));
                    try {
                        d = l.parent
                    } catch (L) {
                        d = null
                    }
                } while (d && l != d);
                for (let L = 0, Cc = k.length - 1; L <= Cc; ++L) k[L].depth = Cc - L;
                l = n;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (q = 1; q < k.length; ++q) {
                        var p = k[q];
                        p.url || (p.url = l.location.ancestorOrigins[q - 1] || "", p.T = !0)
                    }
                var y = k;
                let pb = new Vc(n.location.href, !1);
                l = null;
                const qb = y.length -
                    1;
                for (p = qb; 0 <= p; --p) {
                    var C = y[p];
                    !l && Tc.test(C.url) && (l = C);
                    if (C.url && !C.T) {
                        pb = C;
                        break
                    }
                }
                C = null;
                const Od = y.length && y[qb].url;
                0 != pb.depth && Od && (C = y[qb]);
                f = new Uc(pb, C);
                if (f.h) {
                    y = N;
                    var E = f.h.url || "";
                    y.g.push(4);
                    y.h[4] = dd("top", E)
                }
                var Y = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var rb = f.g.url.match(oc),
                        oa = rb[1],
                        Dc = rb[3],
                        Ec = rb[4];
                    E = "";
                    oa && (E += oa + ":");
                    Dc && (E += "//", E += Dc, Ec && (E += ":" + Ec));
                    var Fc = E
                } else Fc = "";
                oa = N;
                Y = [Y, {
                    url: Fc
                }];
                oa.g.push(5);
                oa.h[5] = Y;
                od(this.pinger, e, N, this.i, c)
            } catch (N) {
                try {
                    od(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: jd(N),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Ga) {}
            }
            return !0
        }
    };
    class qd {};

    function od(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof id ? f = c : (f = new id, uc(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = dd(k, h);
                l.g.push(m);
                l.h[m] = h
            }));
            const g = hd(f, "/pagead/gen_204?id=" + b + "&");
            g && Gc(n, g)
        } catch (f) {}
    }

    function rd() {
        var a = nd,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class sd {
        constructor() {
            this.g = Math.random()
        }
    };
    let nd, md;
    const Z = new cd;
    var td = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (ad() && Array.prototype.forEach.call(Z.h, bd, void 0), Z.h.length = 0))
    };
    (a => {
        nd = null != a ? a : new sd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        rd();
        md = new pd(Z);
        md.h = b => {
            const c = Jc;
            0 !== c && (b.jc = String(c), b.shv = Kc(c))
        };
        md.i = !0;
        "complete" == window.document.readyState ? td() : Z.g && V(window, "load", () => {
            td()
        })
    })();
    var ud = (a, b) => ld(a, b),
        vd = a => {
            var b = qd;
            var c = "S";
            b.S && b.hasOwnProperty(c) || (c = new b, b.S = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            od(nd, "gdn-asoch", a, !0)
        };

    function wd(a = window) {
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

    function xd(a) {
        var b = new yd,
            c = b.j;
        const d = c[x] | 0;
        bb(b.j[x]);
        var e = d & 2;
        b = H(c, d, 1, !1);
        Array.isArray(b) || (b = $a);
        const f = !!(d & 32);
        let g = b[x] | 0;
        0 === g && f && !e ? (g |= 33, A(b, g)) : g & 1 || (g |= 1, A(b, g));
        if (e) g & 2 || B(b), Object.freeze(b);
        else if (2 & g || 2048 & g) b = w(b), e = 1, f && (e |= 32), A(b, e), I(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) c.push(gb(a[h]));
        else
            for (h of a) c.push(gb(h))
    }
    var yd = class extends T {
        constructor() {
            super()
        }
    };
    yd.A = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    xd([1, 8, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    xd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    xd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new yd;
    var zd = (a, b) => {
            b = Q(a, 2) || b;
            if (!b) return "";
            if (P(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Qb(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Ad = (a, b = []) => {
            b = 0 < b.length ? b : Rc("data-asoch-targets");
            a = ec(a);
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
                        f = Jb(f).toJSON();
                        g = g.toJSON();
                        const k = Math.max(f.length, g.length);
                        for (let l = 0; l < k; ++l) null == f[l] && (f[l] = g[l]);
                        f = new dc(f)
                    }
                    e = Qb(f, 4);
                    null != Sb(f, 5) && e.set("nb", R(f, 5, 0).toString());
                    c.push({
                        element: b[h],
                        data: f
                    })
                } else vd({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        Dd = (a, b, c, d) => {
            c = zd(b, c);
            if (0 !== c.length) {
                if ("2" === sc(c, "ase") && 1087 !== d) {
                    const f = 609 === d;
                    var e;
                    const g = !(null == (e = W.featurePolicy) || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : g ? 6 : 5;
                    let h = "";
                    f || g &&
                        !Bd(c) ? (c = Cd(c, "nis", e.toString()), a.setAttribute("attributionsrc", h)) : g && Bd(c) && (h = Cd(da(new fa({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", h))
                }
                nc(a, Pc(c, Qc(d)));
                a.target || (a.target = null != D(G(b, 11)) ? Q(b, 11) : "_top")
            }
        },
        Ed = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !P(a, 1)) {
                    const c = b.element;
                    Dd(c, a, c.href, 609)
                }
        },
        Fd = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const e = c.exec(a);
            b = b + "=" + d;
            return e ? a.replace(c, e[0].charAt(0) +
                b) : a.replace("?", "?" + b + "&")
        },
        Bd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        Gd = a => {
            const b = n.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== K(a, bc, 8)) {
                        const d = Q(M(a, bc, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, Q(M(a, bc, 8), 6));
                            break
                        }
                    }
        },
        Hd = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && void 0 !== K(a, U, 12) && (d.push(M(a, U, 12)), c.push(M(a, U, 12).v()));
            e = (f, g) => {
                if (g)
                    for (const h of d) g[h.v()] && h.V(!0)
            };
            a = n.oneAfmaInstance;
            for (const f of c) {
                let g;
                null == (g = a) || g.canOpenAndroidApp(f,
                    e, () => {}, b)
            }
        },
        Jd = (a, b, c, d, e) => {
            if (!b || void 0 === K(b, bc, 8)) return !1;
            const f = M(b, bc, 8);
            let g = Q(f, 2);
            Qb(b, 10).forEach((l, m) => {
                g = Fd(g, m, l)
            });
            Id(b) && P(b, 15) && !/[?&]label=/.test(c) && (c = Cd(c, "label", "deep_link_fallback"));
            const h = l => d.openStoreOverlay(l, void 0, Q(f, 6)),
                k = l => Ic(Nc, l);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: Q(f, 3),
                finalUrl: g,
                pingFunc: P(b, 13) ? d.httpTrack : e ? k : d.click,
                openFunc: (null == a ? 0 : P(a, 1)) ? h : d.openIntentOrNativeApp,
                isExternalClickUrl: P(b, 13)
            })
        },
        Kd = (a, b, c, d) => {
            c && c.startsWith("intent:") ?
                d.openIntentOrNativeApp(c) : a ? b ? d.openBrowser(c) : d.openChromeCustomTab(c) : d.openSystemBrowser(c, {
                    useFirstPackage: !0,
                    useRunningProcess: !0
                })
        },
        Md = (a, b, c, d, e, f, g, h = !1, k = !1) => {
            const l = P(e, 15);
            if (l && null != D(G(e, 22))) Kd(c, d, Q(e, 22), g);
            else {
                var m = Bd(f);
                if (a && b && (!l || !m) && (f = h ? Ld(f) : Ld(f, g.click), k && (null == e ? 0 : P(e, 21, !1)))) return;
                Kd(c, d, f, g)
            }
        },
        Ld = (a, b = null) => {
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
        Nd = (a, b = !0) => {
            b && Nc.fetch ? Nc.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Gc(Nc, a)
            }) : Gc(Nc, a)
        },
        Cd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Id = a => {
            for (const b of cc(a))
                if (3 === R(b, 1, 0) && Q(b, 2)) return !0;
            return !1
        };
    var Pd = (a, b) => a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
    var Qd = class extends T {
        constructor() {
            super()
        }
    };

    function Rd(a, b) {
        return S(a, 2, b)
    }

    function Sd(a, b) {
        return S(a, 3, b)
    }

    function Td(a, b) {
        return S(a, 4, b)
    }

    function Ud(a, b) {
        return S(a, 5, b)
    }

    function Vd(a, b) {
        return S(a, 9, b)
    }

    function Wd(a, b) {
        {
            const m = a.j;
            let q = m[x];
            bb(q);
            if (null == b) I(m, q, 10);
            else {
                var c = b[x] | 0,
                    d = c,
                    e = !!(2 & c) || !!(2048 & c),
                    f = e || Object.isFrozen(b),
                    g;
                if (g = !f) g = !1;
                var h = !0,
                    k = !0;
                for (let p = 0; p < b.length; p++) {
                    var l = b[p];
                    e || (l = !!((l.j[x] | 0) & 2), h && (h = !l), k && (k = l))
                }
                e || (c = z(c, 5, !0), c = z(c, 8, h), c = z(c, 16, k));
                if (g || f && c !== d) b = w(b), d = 0, c = J(c, q, !0);
                c !== d && A(b, c);
                I(m, q, 10, b)
            }
        }
        return a
    }

    function Xd(a, b) {
        return Tb(a, 11, b)
    }

    function Yd(a, b) {
        return S(a, 1, b)
    }

    function Zd(a, b) {
        return Tb(a, 7, b)
    }
    var $d = class extends T {
        constructor() {
            super()
        }
    };
    $d.A = [10, 6];
    const ae = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function be(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ce(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function de() {
        var a = window;
        if (!ce(a)) return null;
        const b = be(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ae).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function ee(a) {
        let b;
        return Xd(Wd(Ud(Rd(Yd(Td(Zd(Vd(Sd(new $d, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Qd;
            d = S(d, 1, c.brand);
            return S(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function fe() {
        let a, b;
        return null != (b = null == (a = de()) ? void 0 : a.then(c => ee(c))) ? b : null
    };

    function ge(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == D(G(c, 2)) && S(c, 2, a.href)
            }
    }

    function he(a, b) {
        return ha(a, c => c.element === b)
    }

    function ie(a) {
        zc(ud(556, () => {
            new je(a || {})
        }))
    }

    function ke(a, b) {
        if (!b.defaultPrevented || a.F === b) {
            for (var c, d, e = b.target;
                (!c || !d) && e;) {
                d || "A" != e.tagName || (d = e);
                var f = e.hasAttribute("data-asoch-targets"),
                    g = e.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (g) c = new dc(JSON.parse(e.getAttribute("data-asoch-fixed-value")) || []);
                    else if ("A" == e.tagName || f)
                    if (f = f && "true" === e.getAttribute("data-asoch-is-dynamic") ? Ad(a.h, [e]) : a.g, f = he(f, e)) c = f.data;
                e = e.parentElement
            }
            e = c && !P(c, 1);
            if (a.I && a.l && b.defaultPrevented) le(a, b, d, e ? c : a.l);
            else {
                if (e) {
                    if (!a.I && b.defaultPrevented) {
                        le(a,
                            b, d, c);
                        return
                    }
                    f = c;
                    for (var h of Rb(f, 6)) Nd(h)
                }
                a.K && e && P(c, 21, !1) && (vc(b), (h = c) && Q(h, 2) && (f = Fd(Q(h, 2), "ae", "1"), S(h, 2, f)));
                if (d && e) {
                    c = e ? c : null;
                    (h = he(a.g, d)) ? h = h.data: (h = new dc, S(h, 2, d.href), S(h, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: h
                    }));
                    Dd(d, c || h, Q(h, 2), 557);
                    me(a, b, d, c);
                    for (var k of Rb(a.h, 17)) h = W.body, e = {}, "function" === typeof window.CustomEvent ? f = new CustomEvent(k, e) : (f = document.createEvent("CustomEvent"), f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)), h.dispatchEvent(f);
                    if (null ==
                        c ? 0 : null != D(G(c, 19))) {
                        h = k = new Yb;
                        e = R(c, 5, 0);
                        Vb(h, 1, e);
                        h = Pd(d.href, "nx");
                        "" != h && Ub(k, 2, +h);
                        h = Pd(d.href, "ny");
                        "" != h && Ub(k, 3, +h);
                        h = Pd(d.href, "bg");
                        "" != h && S(k, 4, h);
                        h = Pd(d.href, "nm");
                        "" != h && Ub(k, 5, +h);
                        h = Pd(d.href, "mb");
                        "" != h && Ub(k, 6, +h);
                        h = d.href;
                        e = h.search(rc);
                        f = 0;
                        for (var l = []; 0 <= (g = qc(h, f, "bg", e));) l.push(h.substring(f, g)), f = Math.min(h.indexOf("&", g) + 1 || e, e);
                        l.push(h.slice(f));
                        h = l.join("").replace(tc, "$1");
                        nc(d, Pc(h, Qc(1211)));
                        f = Q(c, 19);
                        h = null != ib(G(c, 20)) ? O(ib(G(c, 20)), 0) : null;
                        g = Wb(k);
                        k = a.o;
                        e = wd(n);
                        l = new hc;
                        f = S(l, 1, f);
                        f = S(f, 4, g);
                        f = S(f, 10, Date.now().toString());
                        null !== h && Ub(f, 2, h);
                        null !== k && S(f, 3, k);
                        Vb(f, 9, 4);
                        var m;
                        null == e || null == (m = e.fence) || m.reportEvent({
                            eventType: "click",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"]
                        });
                        var q;
                        null == e || null == (q = e.fence) || q.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        });
                        Vb(f, 9, 5);
                        let p;
                        null == e || null == (p = e.fence) || p.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        });
                        Vb(f, 9, 7);
                        let y;
                        null == e || null == (y = e.fence) || y.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation_start",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        })
                    }
                    P(a.h, 16) || a.M ? ne(a, b, d, c) : (m = "", (q = n.oneAfmaInstance) && (m = q.appendClickSignals(d.href)), oe(a, b, d, c, m))
                }
            }
        }
    }

    function le(a, b, c, d) {
        if (a.F === b && a.H) {
            const f = new $b(a.H),
                g = Q(d, 9);
            var e = "";
            switch (R(f, 4, 1)) {
                case 2:
                    if (O(ib(G(f, 2)), 0)) e = "blocked_fast_click";
                    else if (Q(f, 1) || Q(f, 7)) e = "blocked_border_click";
                    break;
                case 3:
                    e = W;
                    e = e.getElementById ? e.getElementById("common_15click_anchor") : null;
                    const h = window;
                    if ("function" === typeof h.copfcChm && e) {
                        d = Jb(d);
                        Vb(d, 5, 12);
                        Qb(d, 4).set("nb", (12).toString());
                        const k = he(a.g, e);
                        k ? k.data = d : a.g.push({
                            element: e,
                            data: d
                        });
                        !a.R && c && (me(a, b, c, d), S(d, 2, c.href));
                        h.copfcChm(b, zd(d, e.href), null,
                            void 0 !== K(f, Zb, 10) ? Wb(M(f, Zb, 10)) : null);
                        a.R && me(a, b, e, d)
                    }
                    e = "onepointfiveclick_first_click"
            }
            g && e && Nd(g + "&label=" + e, !1);
            Mc(a.N)
        }
    }

    function me(a, b, c, d) {
        if (!P(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (nc(c, Pc(e[0], Qc(557))); !c.id;)
                if (f = "asoch-id-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, W.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" ===
            typeof window.ja && window.ja(f, d ? R(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(c);
            a.i && "function" === typeof window.ss && (a.P ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
            0 < e.length && (a = 0 < a.o.length && (null == d || null == D(G(d, 19))) ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1] : c.href + e[1], nc(c, Pc(a, Qc(557))))
        }
    }
    async function ne(a, b, c, d) {
        let e = "";
        var f = n.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.M)) {
            if (a.aa) return;
            if (f = await f.getNativeClickMeta()) {
                if (f.customClickGestureEligible) return;
                e = Cd(e, "nas", f.encodedNas)
            }
        }
        oe(a, b, c, d, e)
    }

    function oe(a, b, c, d, e) {
        const f = P(a.h, 2),
            g = f && 300 < Date.now() - a.O,
            h = n.oneAfmaInstance;
        h ? (vc(b), (() => {
            let k = P(d, 13) ? e : h.logScionEventAndAddParam(e);
            if (!a.D && d && void 0 !== K(d, U, 12)) {
                var l = M(d, U, 12).v();
                if (0 < cc(d).length)
                    for (const m of cc(d));
                P(M(d, U, 12), 2) ? (h.click(k), h.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Jd(a.m, d, k, h, a.ba) || Md(f, g, a.da, a.D, d, k, h, a.ca, a.K)
        })()) : (b = window, a.Z && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : g && (b = null != c.getAttribute("attributionsrc") && "6" === sc(c.getAttribute("attributionsrc"),
            "nis") ? Ld(c.href, () => {}) : Ld(c.href), b !== c.href && nc(c, Pc(b, Qc(599)))));
        g && (a.O = Date.now());
        Mc(a.N)
    }
    var je = class {
        constructor(a) {
            this.D = Ma || Ka || Na || La;
            var b = Rc("data-asoch-meta");
            if (1 !== b.length) vd({
                type: 2,
                data: b.length
            });
            else {
                this.N = 70;
                this.h = new fc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.L = a["extra-meta"] ? new fc(JSON.parse(a["extra-meta"])) : null;
                this.M = "true" === a["is-fsn"];
                this.aa = "true" === a["is-tap-disabled-for-fsn"];
                this.m = a["ios-store-overlay-config"] ? new gc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.da = "true" === a["use-cct-over-browser"];
                this.ba = "true" === a["send-ac-click-ping-by-js"];
                this.R = "true" === a["correct-redirect-url-for-och-15-click"];
                this.ca = "true" === a["send-click-ping-by-js-in-och"];
                this.Y = "true" === a["middle-clicks-in-och"];
                this.I = "true" === a["default-msg-in-och"];
                this.Z = "true" === a["enable-paw"];
                this.K = "true" === a["allow-redirection-muted-in-och"];
                this.o = "";
                b = fe();
                null != b && b.then(d => {
                    var e = Wb(d);
                    d = [];
                    for (var f = 0, g = 0; g < e.length; g++) {
                        var h = e.charCodeAt(g);
                        255 < h && (d[f++] = h & 255, h >>= 8);
                        d[f++] = h
                    }
                    e = 3;
                    void 0 === e && (e = 0);
                    if (!Pa)
                        for (Pa = {}, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                            g = ["+/=", "+/", "-_=", "-_.", "-_"], h = 0; 5 > h; h++) {
                            var k = f.concat(g[h].split(""));
                            Oa[h] = k;
                            for (var l = 0; l < k.length; l++) {
                                var m = k[l];
                                void 0 === Pa[m] && (Pa[m] = l)
                            }
                        }
                    e = Oa[e];
                    f = Array(Math.floor(d.length / 3));
                    g = e[64] || "";
                    for (h = k = 0; k < d.length - 2; k += 3) {
                        var q = d[k],
                            p = d[k + 1];
                        m = d[k + 2];
                        l = e[q >> 2];
                        q = e[(q & 3) << 4 | p >> 4];
                        p = e[(p & 15) << 2 | m >> 6];
                        m = e[m & 63];
                        f[h++] = l + q + p + m
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
                this.g = Ad(this.h);
                this.I && (this.l = null,
                    ec(this.h).forEach(d => {
                        null != this.l || null == D(G(d, 2)) || null == D(G(d, 9)) || P(d, 13) || (this.l = d)
                    }));
                this.ea = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.O = -Infinity;
                this.i = Q(this.h, 5) || "";
                this.P = P(this.h, 11);
                this.L && (this.P = P(this.L, 11));
                this.H = this.F = null;
                P(this.h, 3) || (Ed(this.g), Tb(this.h, 3, !0));
                ge(this.g);
                a = n.oneAfmaInstance;
                !this.D && a && Hd(this.g, this.ea);
                var c;
                if (a && (null == (c = this.m) ? 0 : P(c, 2))) switch (c = () => {
                        const d = O(ib(G(this.m, 4)), 0);
                        0 < d ? n.setTimeout(() => {
                            Gd(this.g)
                        }, d) : Gd(this.g)
                    },
                    R(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        Ac(c);
                        break;
                    default:
                        Gd(this.g)
                }
                V(W, "click", ud(557, d => {
                    ke(this, d)
                }), jc);
                this.Y && V(W, "auxclick", ud(557, d => {
                    1 === d.button && ke(this, d)
                }), jc);
                this.i && "function" === typeof window.ss && V(W.body, "mouseover", ud(626, () => {
                    window.ss(this.i, 0)
                }), kc);
                "function" === typeof window.ivti && window.ivti(W.body);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, e) => {
                    this.F = d;
                    this.H = e
                })
            }
        }
    };
    var pe = ud(555, a => ie(a));
    Jc = 70;
    const qe = Lc(70, document.currentScript);
    if (null == qe) throw Error("JSC not found 70");
    const re = {},
        se = qe.attributes;
    for (let a = se.length - 1; 0 <= a; a--) {
        const b = se[a].name;
        0 === b.indexOf("data-jcp-") && (re[b.substring(9)] = se[a].value)
    }
    pe(re);
}).call(this);