(function() {
    'use strict';
    var h = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function aa(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ba = aa(this);

    function ca(a, b) {
        if (b) a: {
            var c = ba;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && h(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ca("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            h(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k = this || self;

    function l(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    }

    function n(a, b) {
        a = a.split(".");
        var c = k;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var p = l(610401301),
        da = l(188588736);
    var q;
    const t = k.navigator;
    q = t ? t.userAgentData || null : null;

    function u(a) {
        return p ? q ? q.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function w(a) {
        var b;
        a: {
            if (b = k.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function x() {
        return p ? !!q && 0 < q.brands.length : !1
    }

    function y() {
        return x() ? u("Chromium") : (w("Chrome") || w("CriOS")) && !(x() ? 0 : w("Edge")) || w("Silk")
    };
    !w("Android") || y();
    y();
    w("Safari") && (y() || (x() ? 0 : w("Coast")) || (x() ? 0 : w("Opera")) || (x() ? 0 : w("Edge")) || (x() ? u("Microsoft Edge") : w("Edg/")) || x() && u("Opera"));
    var z = Symbol(),
        A = Symbol();
    var C = (a, b) => {
        a[z] = b;
        return a
    };

    function ea(a, b) {
        C(b, (a | 0) & -14591)
    }

    function D(a, b) {
        C(b, (a | 34) & -14557)
    }

    function E(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var F = {},
        fa = {};

    function G(a) {
        return !(!a || "object" !== typeof a || a.g !== fa)
    }

    function H(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function I(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[z] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        C(a, d | 1);
        return !0
    }
    class ha {}
    class ia {}
    Object.freeze(new ha);
    Object.freeze(new ia);
    let J;

    function M(a, b) {
        J = b;
        a = new a(b);
        J = void 0;
        return a
    };

    function ja(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (I(a, void 0, 0)) return
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

    function ka(a, b, c) {
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

    function N(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = I(a, void 0, 0) ? void 0 : e && (a[z] | 0) & 2 ? a : O(a, b, c, void 0 !== d, e);
            else if (H(a)) {
                const f = {};
                for (let g in a) f[g] = N(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function O(a, b, c, d, e) {
        const f = d || c ? a[z] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = N(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function la(a) {
        return a.o === F ? a.toJSON() : ja(a)
    };

    function P(a, b, c = D) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[z] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? C(a, (d | 34) & -12293) : O(a, P, d & 4 ? D : c, !0, !0)
            }
            a.o === F && (c = a.j, d = c[z], a = d & 2 ? a : M(a.constructor, Q(c, d, !0)));
            return a
        }
    }

    function Q(a, b, c) {
        const d = c || b & 2 ? D : ea,
            e = !!(b & 32);
        a = ka(a, b, f => P(f, e, d));
        a[z] = a[z] | 32 | (c ? 2 : 0);
        return a
    };

    function R(a, b, c) {
        a = a.j;
        let d = a[z];
        if (d & 2) throw Error();
        if (-1 === c) var e = null;
        else if (e = E(d), c >= e) e = d & 256 ? a[a.length - 1][c] : void 0;
        else {
            var f = c + (+!!(d & 512) - 1);
            e = 0 > f || f >= a.length || f >= e ? void 0 : a[f]
        }
        if (null != e && "object" === typeof e && e.o === F) b = e;
        else if (Array.isArray(e)) {
            var g = f = e[z] | 0;
            0 === g && (g |= d & 32);
            g |= d & 2;
            g !== f && C(e, g);
            b = new b(e)
        } else d & 2 ? (f = b[A]) ? b = f : (f = new b, g = f.j, g[z] |= 34, b = b[A] = f) : b = new b;
        f = b.j;
        g = f[z];
        b = g & 2 ? M(b.constructor, Q(f, g, !1)) : b;
        if (e !== b) a: if (e = E(d), c >= e) {
            g = d;
            if (d & 256) f = a[a.length - 1];
            else {
                if (null ==
                    b) break a;
                f = a[e + (+!!(d & 512) - 1)] = {};
                g |= 256
            }
            f[c] = b;
            c < e && (a[c + (+!!(d & 512) - 1)] = void 0);
            g !== d && C(a, g)
        } else a[c + (+!!(d & 512) - 1)] = b, d & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    var T = class {
        constructor(a) {
            a: {
                null == a && (a = J);J = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[z] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, H(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                C(a, b)
            }
            this.j = a
        }
        toJSON() {
            return S(this, O(this.j, la, void 0, void 0, !1), !0)
        }
    };
    T.prototype.o = F;
    T.prototype.toString = function() {
        return S(this, this.j, !1).toString()
    };

    function S(a, b, c) {
        var d = da ? void 0 : a.constructor.m;
        const e = (c ? a.j : b)[z];
        a = b.length;
        if (!a) return b;
        let f, g;
        if (H(c = b[a - 1])) {
            a: {
                var r = c;
                let K = {},
                    L = !1;
                for (var v in r) {
                    let m = r[v];
                    if (Array.isArray(m)) {
                        let sa = m;
                        if (I(m, d, +v) || G(m) && 0 === m.size) m = null;
                        m != sa && (L = !0)
                    }
                    null != m ? K[v] = m : L = !0
                }
                if (L) {
                    for (var B in K) {
                        r = K;
                        break a
                    }
                    r = null
                }
            }
            r != c && (f = !0);a--
        }
        for (v = +!!(e & 512) - 1; 0 < a; a--) {
            B = a - 1;
            c = b[B];
            B -= v;
            if (!(null == c || I(c, d, B) || G(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        r && b.push(r);
        return b
    };

    function U(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[z] |= 32;
                b = M(a, b)
            }
            return b
        }
    };
    var V = class extends T {};
    V.m = [17];
    var ma = class extends T {};
    ma.m = [76, 27];
    var na = class extends T {};
    na.m = [8];
    var oa = U(class extends T {});
    var pa = class extends T {},
        qa = U(pa);
    pa.m = [1, 2, 3];

    function W(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function X(a, b) {
        a = a.body;
        var c = {
            detail: void 0
        };
        let d;
        "function" === typeof window.CustomEvent ? d = new CustomEvent(b, c) : (d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !!c.bubbles, !!c.cancelable, c.detail));
        a.dispatchEvent(d)
    }
    var ra = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            W(a, "sampling_mod");
            var b = W(a, "namespace");
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
            if (!(0 < this.g.length)) {
                a = W(this.body, "environment");
                for (const d of a.split("|")) d && this.g.push(d)
            }
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function ta(a) {
        if (1 >= a.i.offsetWidth || 1 >= a.i.offsetHeight) return !1;
        a.g.remove();
        X(a.context, "spanReady");
        return !0
    }
    var ua = class {
        constructor(a) {
            this.context = a;
            this.config = {
                A: !1,
                v: 100
            };
            this.i = document.createElement("span");
            this.g = document.createElement("div");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!this.config.A && (X(this.context, "spanStart"), this.context.body.appendChild(this.g), !ta(this))) return new Promise(a => {
                const b = setInterval(() => {
                    ta(this) && (clearInterval(b), a())
                }, this.config.v)
            })
        }
    };
    var va = class {
        constructor(a, b) {
            this.context = a;
            this.config = b;
            this.g = R(b, ma, 1);
            R(b, na, 12);
            R(this.g, V, 10)
        }
    };

    function wa(a) {
        a.l.length = 0;
        a.i = !0
    }

    function xa(a, b) {
        a.g = !0;
        const c = () => {
            a.i = !1;
            const d = a.l.shift();
            return void 0 === d ? (a.g = !1, Promise.resolve()) : xa(a, d())
        };
        return b ? b.then(c, () => {
            if (a.i) return c();
            a.g = !1;
            return Promise.reject()
        }) : c()
    }

    function ya(a, b) {
        for (const c of b) a.l.push(c);
        if (!a.g) return xa(a)
    }
    var za = class {
        constructor() {
            this.i = this.g = !1;
            this.l = []
        }
    };

    function Aa(a) {
        wa(a.l);
        return ya(a.l, [() => {
            if (!a.s) {
                var b = W(a.context.body, "render_config") || "[]";
                b = oa(b);
                b = new va(a.context, b);
                a.s = b
            }
            b = (new ua(a.context)).wait();
            X(a.context, "browserStart");
            X(a.context, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            X(a.context, "browserReady");
            X(a.context, "browserReadyEnd");
            a.g |= 4;
            X(a.context, "overallReady")
        }, () => {
            X(a.context, "browserQuiet");
            X(a.context, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function Ba(a) {
        qa(W(a.context.body, "engine_msg") || "[]");
        return Aa(a) || Promise.resolve()
    }
    var Y = class {
        constructor(a, b) {
            this.l = new za;
            this.g = 0;
            this.context = new ra(b)
        }
        u() {
            return this.g
        }
        i() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.context.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (1 === a) X(this.context, "overallStart"), Ba(this).then(() => {
                    X(this.context, "overallQuiet")
                });
                else {
                    var c = b.clientHeight;
                    b.clientWidth && c && Ba(this)
                }
            })
        }
    };
    let Z;
    n("mys.engine.init", (a, b) => {
        Z = new Y(a, b);
        Z.i()
    });
    n("mys.engine.stage", () => {
        let a;
        return (null == (a = Z) ? void 0 : a.g) || 0
    });
    n("mys.Engine", Y);
    n("mys.Engine.prototype.i", Y.prototype.i);
    n("mys.Engine.prototype.s", Y.prototype.u);
}).call(this);