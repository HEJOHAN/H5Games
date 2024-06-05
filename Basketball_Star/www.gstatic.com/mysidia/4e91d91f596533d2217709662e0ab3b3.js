(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h = this || self;

    function l(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = h, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    };

    function aa(a) {
        h.setTimeout(() => {
            throw a;
        }, 0)
    };
    var m = l(610401301),
        ba = l(188588736);
    var n;
    const p = h.navigator;
    n = p ? p.userAgentData || null : null;

    function r(a) {
        return m ? n ? n.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = h.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function u() {
        return m ? !!n && 0 < n.brands.length : !1
    }

    function v() {
        return u() ? r("Chromium") : (t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge")) || t("Silk")
    };
    !t("Android") || v();
    v();
    t("Safari") && (v() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? r("Microsoft Edge") : t("Edg/")) || u() && r("Opera"));
    var x = Symbol(),
        y = Symbol();
    var z = (a, b) => {
        a[x] = b;
        return a
    };

    function ca(a, b) {
        z(b, (a | 0) & -14591)
    }

    function A(a, b) {
        z(b, (a | 34) & -14557)
    }

    function B(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var D = {},
        da = {};

    function E(a) {
        return !(!a || "object" !== typeof a || a.g !== da)
    }

    function F(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function G(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        z(a, d | 1);
        return !0
    }
    var H;
    const I = [];
    z(I, 55);
    H = Object.freeze(I);
    class ea {}
    class fa {}
    Object.freeze(new ea);
    Object.freeze(new fa);

    function ha(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let ia;

    function ja(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    }

    function ka(a) {
        if (!Number.isFinite(a)) throw a = Error("enum"), ha(a, "warning"), a;
        return a | 0
    };
    let J;

    function K(a, b) {
        J = b;
        a = new a(b);
        J = void 0;
        return a
    };

    function la(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (G(a, void 0, 0)) return
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

    function ma(a, b, c) {
        a = Array.prototype.slice.call(a);
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

    function na(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = G(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : L(a, b, c, void 0 !== d, e);
            else if (F(a)) {
                const f = {};
                for (let g in a) f[g] = na(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function L(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = na(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function oa(a) {
        return a.o === D ? a.toJSON() : la(a)
    };

    function pa(a, b, c = A) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? z(a, (d | 34) & -12293) : L(a, pa, d & 4 ? A : c, !0, !0)
            }
            a.o === D && (c = a.l, d = c[x], a = d & 2 ? a : K(a.constructor, qa(c, d, !0)));
            return a
        }
    }

    function qa(a, b, c) {
        const d = c || b & 2 ? A : ca,
            e = !!(b & 32);
        a = ma(a, b, f => pa(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    };

    function ra(a) {
        a = a.l;
        return M(a, a[x], 16)
    }

    function sa(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }

    function M(a, b, c, d) {
        if (-1 === c) return null;
        const e = B(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (sa(a, b, e, c) && null != y) {
                    var g;
                    a = null != (g = ia) ? g : ia = {};
                    g = a[y] || 0;
                    4 <= g || (a[y] = g + 1, g = Error(), ha(g, "incident"), aa(g))
                }
                return d
            }
            return sa(a, b, e, c)
        }
    }

    function N(a, b, c, d) {
        const e = B(b);
        if (c >= e) {
            let f, g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && z(a, g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function ta(a, b, c) {
        var d = a.l,
            e = d[x],
            f = M(d, e, c, !1);
        if (null != f && "object" === typeof f && f.o === D) b = f;
        else if (Array.isArray(f)) {
            var g = f[x] | 0;
            let k = g;
            0 === k && (k |= e & 32);
            k |= e & 2;
            k !== g && z(f, k);
            b = new b(f)
        } else b = void 0;
        b !== f && null != b && N(d, e, c, b);
        d = b;
        if (null == d) return d;
        a = a.l;
        e = a[x];
        e & 2 || (f = d, b = f.l, g = b[x], f = g & 2 ? K(f.constructor, qa(b, g, !1)) : f, f !== d && (d = f, N(a, e, c, d)));
        return d
    }

    function ua(a) {
        return null != a ? a : !1
    };
    var Q = class {
        constructor(a) {
            a: {
                null == a && (a = J);J = void 0;
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
                    if (d && (--d, F(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                z(a, b)
            }
            this.l = a
        }
        toJSON() {
            return va(this, L(this.l, oa, void 0, void 0, !1), !0)
        }
    };
    Q.prototype.o = D;
    Q.prototype.toString = function() {
        return va(this, this.l, !1).toString()
    };

    function va(a, b, c) {
        var d = ba ? void 0 : a.constructor.u;
        const e = (c ? a.l : b)[x];
        a = b.length;
        if (!a) return b;
        let f, g;
        if (F(c = b[a - 1])) {
            a: {
                var k = c;
                let O = {},
                    P = !1;
                for (var w in k) {
                    let q = k[w];
                    if (Array.isArray(q)) {
                        let Ja = q;
                        if (G(q, d, +w) || E(q) && 0 === q.size) q = null;
                        q != Ja && (P = !0)
                    }
                    null != q ? O[w] = q : P = !0
                }
                if (P) {
                    for (var C in O) {
                        k = O;
                        break a
                    }
                    k = null
                }
            }
            k != c && (f = !0);a--
        }
        for (w = +!!(e & 512) - 1; 0 < a; a--) {
            C = a - 1;
            c = b[C];
            C -= w;
            if (!(null == c || G(c, d, C) || E(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        k && b.push(k);
        return b
    };

    function wa(a) {
        let b = 0;
        for (const c in a) b++
    };
    var xa = class extends Q {};
    xa.u = [17];
    var ya = class extends Q {};
    ya.u = [76, 27];
    var za = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[x] |= 32;
                b = K(a, b)
            }
            return b
        }
    }(class extends Q {});
    let R = null;

    function Aa() {
        const a = h.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ba() {
        const a = h.performance;
        return a && a.now ? a.now() : null
    };
    var Ca = class {
        constructor(a, b) {
            var c = Ba() || Aa();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = h.performance,
        Da = !!(S && S.mark && S.measure && S.clearMarks),
        T = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Da) {
                var b;
                if (null === R) {
                    R = "";
                    try {
                        a = "";
                        try {
                            a = h.top.location.hash
                        } catch (c) {
                            a = h.location.hash
                        }
                        a && (R = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = R;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ea(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Fa {
        constructor() {
            var a = window;
            this.g = [];
            this.m = a || h;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Ca(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Ba() || Aa()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.j || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };
    const U = new Fa;
    var Ga = () => {
        window.google_measure_js_timing || (U.j = !1, U.g != U.m.google_js_reporting_queue && (T() && Array.prototype.forEach.call(U.g, Ea, void 0), U.g.length = 0))
    };
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    if ("complete" == window.document.readyState) Ga();
    else if (U.j) {
        var Ha = () => {
                Ga()
            },
            V = window;
        V.addEventListener && V.addEventListener.call(V, "load", Ha, !1)
    };
    wa({
        N: 0,
        M: 1,
        J: 2,
        D: 3,
        K: 4,
        F: 5,
        L: 6,
        H: 7,
        I: 8,
        C: 9,
        G: 10,
        O: 11
    });
    wa({
        R: 0,
        S: 1,
        P: 2
    });

    function W(a) {
        var b = new X,
            c = b.l;
        const d = c[x] | 0;
        if (b.l[x] & 2) throw Error();
        var e = d & 2;
        b = M(c, d, 1, !1);
        Array.isArray(b) || (b = H);
        const f = !!(d & 32);
        let g = b[x] | 0;
        0 === g && f && !e ? (g |= 33, z(b, g)) : g & 1 || (g |= 1, z(b, g));
        if (e) g & 2 || (b[x] |= 34), Object.freeze(b);
        else if (2 & g || 2048 & g) b = Array.prototype.slice.call(b), e = 1, f && (e |= 32), z(b, e), N(c, d, 1, b);
        c = b;
        if (Array.isArray(a))
            for (var k = 0; k < a.length; k++) c.push(ka(a[k]));
        else
            for (k of a) c.push(ka(k))
    }
    var X = class extends Q {
        constructor() {
            super()
        }
    };
    X.u = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    W([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    W([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    W([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new X;

    function Ia() {
        const a = Ka;
        return a && "visible" === a.visibilityState
    }

    function La() {
        const a = Ma;
        return a && 0 < a.innerWidth && 0 < a.innerHeight
    }

    function Na(a) {
        const b = a.g && a.m && a.v;
        if (a.j === b) return !1;
        a.j = b;
        return !0
    }

    function Y(a) {
        if (Na(a))
            for (const b of a.A) b(a.j)
    }

    function Oa(a) {
        var b = Pa || (Pa = new Qa);
        a(b.j);
        b.A.add(a)
    }
    var Qa = class {
            constructor() {
                this.A = new Set;
                this.m = Ia();
                this.v = La();
                this.j = this.g = !1;
                var a = h.oneAfmaInstance;
                this.g = a ? a.visibilityState : !0;
                Na(this);
                a = window.AFMA_Communicator;
                null == a || a.addEventListener("onshow", () => {
                    this.g = !0;
                    Y(this)
                });
                null == a || a.addEventListener("onhide", () => {
                    this.g = !1;
                    Y(this)
                });
                let b;
                null == (b = Ka) || b.addEventListener("visibilitychange", () => {
                    this.m = Ia();
                    Y(this)
                });
                let c;
                null == (c = Ma) || c.addEventListener("resize", () => {
                    this.v = La();
                    Y(this)
                })
            }
        },
        Ka = document,
        Ma = window;
    let Pa;

    function Z(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function Ra(a) {
        if (!(0 < a.g.length)) {
            var b = Z(a.body, "environment");
            for (const c of b.split("|")) c && a.g.push(c)
        }
    }
    var Sa = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            Z(a, "sampling_mod");
            var b = Z(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if ("namespace" === c[d].getAttribute("name") && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a = document.createElement("META");
                    a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            Ra(this)
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function Ta({
        threshold: a,
        target: b,
        B: c,
        T: d
    }) {
        if (window.IntersectionObserver) {
            var e = !1;
            (new IntersectionObserver(f => {
                0 !== f.length && f[0].isIntersecting && (!e && c && c(), e = !0, d && d())
            }, {
                threshold: a
            })).observe(b)
        }
    };
    var Ua = class {
        constructor() {
            this.channel = 1;
            (this.g = !(!window.mys || !window.mys.pingback)) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, this.channel)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
        tick(a, b) {
            this.g && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b))
        }
    };
    var Va = class {
        constructor(a) {
            this.context = a;
            this.j = {};
            this.pingback = new Ua
        }
        get runtime() {
            return this.j
        }
        g() {}
    };
    var Wa = class extends Va {
        g() {
            Oa(a => {
                if (a) {
                    a: if (a = this.context.body.getElementsByClassName("x-layout"), "function" !== typeof window.getComputedStyle) var b = a ? a[0] : null;
                        else {
                            for (b of a)
                                if ((a = b.parentElement) && "none" !== window.getComputedStyle(a).display) break a;
                            b = null
                        }b && (b = b.querySelector(".root")) && (b.classList.remove("hide_frame"), b.classList.add("show_frame"))
                }
            })
        }
    };
    var Xa = class extends Wa {
        constructor(a) {
            super(a)
        }
        g() {
            Ta({
                threshold: .9,
                target: document.querySelector(".x-layout"),
                B: () => {
                    const a = document.querySelector(".x-layout");
                    a && a.classList.add("web-on-show")
                }
            })
        }
    };
    (function(a) {
        const b = document.getElementById("mys-content");
        if (b) {
            var c = new Sa(b),
                d = new a(c);
            if (a = Z(b, "runtime_data")) a = JSON.parse(a), Object.assign(d.runtime, a);
            a = za(Z(c.body, "render_config") || "[]");
            var e;
            Ra(c);
            0 <= c.g.indexOf("amp") || (null == (e = ta(ta(a, ya, 1), xa, 10)) ? 0 : ua(ja(ra(e)))) || (e = mys.engine ? mys.engine.stage() : 0, 0 === (e & 1) && c.addEventListener("overallStart", () => {}), 0 !== (e & 4) && d.g(), c.addEventListener("browserStart", () => {}), c.addEventListener("browserReady", () => {
                d.g()
            }), c.addEventListener("browserQuiet",
                () => {}))
        }
    })(class extends Xa {});
}).call(this);