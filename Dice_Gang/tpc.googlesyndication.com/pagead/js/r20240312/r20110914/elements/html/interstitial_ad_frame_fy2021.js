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
    };
    var da = aa(610401301),
        ea = aa(188588736);
    var t;
    const fa = n.navigator;
    t = fa ? fa.userAgentData || null : null;

    function ha(a) {
        return da ? t ? t.brands.some(({
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

    function v() {
        return da ? !!t && 0 < t.brands.length : !1
    }

    function ia() {
        return v() ? ha("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function ja(a) {
        ja[" "](a);
        return a
    }
    ja[" "] = function() {};
    !u("Android") || ia();
    ia();
    u("Safari") && (ia() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? ha("Microsoft Edge") : u("Edg/")) || v() && ha("Opera"));
    let w = 0,
        y = 0;

    function ka(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d, e] = [b, c];
            a = e;
            c = d
        }
        w = c >>> 0;
        y = a >>> 0
    };
    var z = Symbol();

    function la(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var ma = {},
        ra = {};

    function sa(a) {
        return !(!a || "object" !== typeof a || a.g !== ra)
    }

    function ta(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }

    function A(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[z] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[z] = d | 1;
        return !0
    }
    class ua {}
    class va {}
    Object.freeze(new ua);
    Object.freeze(new va);
    const wa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function D(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function xa(a) {
        if (null == a) return a;
        var b = typeof a;
        if ("number" === b ? Number.isFinite(a) : "string" !== b ? 0 : wa.test(a)) {
            if ("number" === typeof a) {
                var c = Math.trunc(a);
                if (!Number.isSafeInteger(c)) {
                    ka(c);
                    a = w;
                    b = y;
                    if (c = b & 2147483648) a = ~a + 1 >>> 0, b = ~b >>> 0, 0 == a && (b = b + 1 >>> 0);
                    a = 4294967296 * b + (a >>> 0);
                    c = c ? -a : a
                }
            } else b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? c = String(b) : (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), ("-" === a[0] ? 20 > a.length || 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length || 19 === a.length &&
                922337 > Number(a.substring(0, 6))) ? c = a : (16 > a.length ? ka(Number(a)) : (a = BigInt(a), w = Number(a & BigInt(4294967295)) >>> 0, y = Number(a >> BigInt(32) & BigInt(4294967295))), a = w, b = y, b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b >>>= 0, a >>>= 0, 2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a)))));
            return c
        }
    };
    let E;

    function ya(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (A(a, void 0, 0)) return
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

    function za(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = A(a, void 0, 0) ? void 0 : e && (a[z] | 0) & 2 ? a : Aa(a, b, c, void 0 !== d, e);
            else if (ta(a)) {
                const f = {};
                for (let g in a) f[g] = za(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Aa(a, b, c, d, e) {
        const f = d || c ? a[z] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = za(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Ba(a) {
        return a.Z === ma ? a.toJSON() : ya(a)
    };

    function G(a, b) {
        a = a.g;
        return Ca(a, a[z], b)
    }

    function Ca(a, b, c) {
        if (-1 === c) return null;
        if (c >= la(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else if (b = c + (+!!(b & 512) - 1), b < a.length) return a[b]
    }

    function Da(a) {
        var b = a.g;
        let c = b[z];
        var d = Ca(b, c, 13);
        a = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        if (null != a && a !== d) a: if (d = la(c), 13 >= d) {
            let e, f = c;
            if (c & 256) e = b[b.length - 1];
            else {
                if (null == a) break a;
                e = b[d + (+!!(c & 512) - 1)] = {};
                f |= 256
            }
            e[13] = a;
            13 < d && (b[13 + (+!!(c & 512) - 1)] = void 0);
            f !== c && (b[z] = f)
        } else b[13 + (+!!(c & 512) - 1)] = a, c & 256 && (b = b[b.length - 1], 13 in b && delete b[13]);
        return a
    }

    function H(a) {
        return a ? ? 0
    }

    function I(a, b) {
        a = G(a, b);
        return (null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function J(a, b) {
        a = G(a, b);
        return (null == a || "string" === typeof a ? a : void 0) ? ? ""
    };
    var Fa = class {
        constructor(a) {
            a: {
                null == a && (a = E);E = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[z] | 0;
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
                a[z] = b
            }
            this.g = a
        }
        toJSON() {
            return Ea(this, Aa(this.g, Ba, void 0, void 0, !1), !0)
        }
    };
    Fa.prototype.Z = ma;
    Fa.prototype.toString = function() {
        return Ea(this, this.g, !1).toString()
    };

    function Ea(a, b, c) {
        var d = ea ? void 0 : a.constructor.aa;
        const e = (c ? a.g : b)[z];
        a = b.length;
        if (!a) return b;
        let f, g;
        if (ta(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {},
                    q = !1;
                for (var l in h) {
                    let p = h[l];
                    if (Array.isArray(p)) {
                        let x = p;
                        if (A(p, d, +l) || sa(p) && 0 === p.size) p = null;
                        p != x && (q = !0)
                    }
                    null != p ? m[l] = p : q = !0
                }
                if (q) {
                    for (var k in m) {
                        h = m;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            k = a - 1;
            c = b[k];
            k -= l;
            if (!(null == c || A(c, d, k) || sa(c) && 0 === c.size)) break;
            g = !0
        }
        if (!f && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    };
    var Ga = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[z] |= 32;
                E = b;
                b = new a(b);
                E = void 0
            }
            return b
        }
    }(class extends Fa {});

    function Ha(a = window) {
        return a
    };

    function K(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function L(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    var Ia = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ja(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let M = [];
    const Ka = () => {
        const a = M;
        M = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var La = (a, b) => {
        "complete" === a.readyState || "interactive" === a.readyState ? (M.push(b), 1 == M.length && (window.Promise ? Promise.resolve().then(Ka) : window.setImmediate ? setImmediate(Ka) : setTimeout(Ka, 0))) : a.addEventListener("DOMContentLoaded", b)
    };

    function Ma(a = document) {
        return a.createElement("img")
    };

    function Na(a, b, c = null, d = !1) {
        Oa(a, b, c, d)
    }

    function Oa(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Ma(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                L(e, "load", f);
                L(e, "error", f)
            };
            K(e, "load", f);
            K(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Ta(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Na(a, b, void 0, !1)
    };
    let Ua = 0;

    function Va(a) {
        return (a = Wa(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Wa(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    };
    var Xa = window;
    class Ya {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Za = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var $a = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        ab = class {
            constructor(a, b) {
                this.url = a;
                this.W = !!b;
                this.depth = null
            }
        };
    let N = null;

    function P() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function bb() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var cb = class {
        constructor(a, b) {
            var c = bb() || P();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Q = n.performance,
        db = !!(Q && Q.mark && Q.measure && Q.clearMarks),
        R = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = db) {
                var b;
                if (null === N) {
                    N = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (N = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = N;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function eb(a) {
        a && Q && R() && (Q.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Q.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class fb {
        constructor() {
            var a = window;
            this.i = [];
            this.j = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = R() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new cb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Q && R() && Q.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (bb() || P()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Q && R() && Q.mark(b);
                !this.g || 2048 <
                    this.i.length || this.i.push(a)
            }
        }
    };

    function S(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function gb(a, b, c, d, e) {
        const f = [];
        Ja(a, function(g, h) {
            (g = hb(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function hb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(hb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(gb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ib(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function jb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ib(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = gb(h[l], a.j, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.j;
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
    class kb {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function lb(a) {
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

    function mb(a, b, c) {
        let d, e;
        try {
            a.i && a.i.g ? (e = a.i.start(b.toString(), 3), d = c(), a.i.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                eb(e), c = a.l(b, new Ya(f, {
                    message: lb(f)
                }), void 0, void 0)
            } catch (g) {
                a.A(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function nb(a, b) {
        var c = T;
        return (...d) => mb(c, a, () => b.apply(void 0, d))
    }

    function ob(a) {
        var b = T;
        a.catch(c => {
            c = c ? c : "unknown rejection";
            b.A(967, c instanceof Error ? c : Error(c), void 0, b.g || void 0)
        })
    }
    var qb = class {
        constructor(a = null) {
            this.pinger = U;
            this.i = a;
            this.g = null;
            this.j = !1;
            this.l = this.A
        }
        A(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const B = new kb;
                var g = B;
                g.g.push(1);
                g.i[1] = S("context", a);
                b.error && b.meta && b.id || (b = new Ya(b, {
                    message: lb(b)
                }));
                if (b.msg) {
                    g = B;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = S("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.g) try {
                    this.g(b)
                } catch (C) {}
                if (d) try {
                    d(b)
                } catch (C) {}
                d = B;
                l = [l];
                d.g.push(3);
                d.i[3] = l;
                b = n;
                l = [];
                let Z;
                h = null;
                do {
                    var k = b;
                    d = void 0;
                    try {
                        if (d = !!k && null != k.location.href) b: {
                            try {
                                ja(k.foo);
                                d = !0;
                                break b
                            } catch (C) {}
                            d = !1
                        }
                        var m = d
                    } catch {
                        m = !1
                    }
                    m ? (Z = k.location.href, h = k.document && k.document.referrer || null) : (Z = h, h = null);
                    l.push(new ab(Z || ""));
                    try {
                        b = k.parent
                    } catch (C) {
                        b = null
                    }
                } while (b && k != b);
                for (let C = 0, Pa = l.length - 1; C <= Pa; ++C) l[C].depth = Pa - C;
                k = n;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var q = l[m];
                        q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.W = !0)
                    }
                var p = l;
                let na = new ab(n.location.href, !1);
                k = null;
                const oa = p.length - 1;
                for (q =
                    oa; 0 <= q; --q) {
                    var x = p[q];
                    !k && Za.test(x.url) && (k = x);
                    if (x.url && !x.W) {
                        na = x;
                        break
                    }
                }
                x = null;
                const Ib = p.length && p[oa].url;
                0 != na.depth && Ib && (x = p[oa]);
                f = new $a(na, x);
                if (f.i) {
                    p = B;
                    var F = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = S("top", F)
                }
                var pa = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var qa = f.g.url.match(Ia),
                        O = qa[1],
                        Qa = qa[3],
                        Ra = qa[4];
                    F = "";
                    O && (F += O + ":");
                    Qa && (F += "//", F += Qa, Ra && (F += ":" + Ra));
                    var Sa = F
                } else Sa = "";
                O = B;
                pa = [pa, {
                    url: Sa
                }];
                O.g.push(5);
                O.i[5] = pa;
                pb(this.pinger, e, B, this.j, c)
            } catch (B) {
                try {
                    pb(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: lb(B),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Z) {}
            }
            return !0
        }
    };
    class rb {};

    function pb(a, b, c, d = !1, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let g;
            c instanceof kb ? g = c : (g = new kb, Ja(c, (l, k) => {
                var m = g;
                const q = m.l++;
                l = S(k, l);
                m.g.push(q);
                m.i[q] = l
            }));
            const h = jb(g, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Na(n, h, f) : a.i ? Ta(n, h) : Na(n, h))
        } catch (g) {}
    }

    function sb() {
        var a = U,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class tb {
        constructor(a = !1) {
            this.i = a;
            this.g = Math.random()
        }
    };
    let U, T;
    const V = new fb;
    var ub = () => {
        window.google_measure_js_timing || (V.g = !1, V.i != V.j.google_js_reporting_queue && (R() && Array.prototype.forEach.call(V.i, eb, void 0), V.i.length = 0))
    };
    (a => {
        U = a ? ? new tb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        sb();
        T = new qb(V);
        T.g = b => {
            const c = Ua;
            0 !== c && (b.jc = String(c), b.shv = Va(c))
        };
        T.j = !0;
        "complete" == window.document.readyState ? ub() : V.g && K(window, "load", () => {
            ub()
        })
    })();
    var W = (a, b) => nb(a, b),
        vb = (a, b, c) => {
            var d = rb;
            var e = "V";
            d.V && d.hasOwnProperty(e) || (e = new d, d.V = e);
            d = [];
            !b.eid && d.length && (b.eid = d.toString());
            pb(U, a, b, !0, c, void 0)
        };
    class wb {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function xb(a, b) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let c = b[a];
        if (c) return c;
        const {
            promise: d,
            resolve: e
        } = new wb;
        c = {
            promise: d,
            resolve: e
        };
        return b[a] = c
    };
    async function yb() {
        return xb(10, n).promise
    };

    function zb() {
        this.i = this.i;
        this.g = this.g
    }
    zb.prototype.i = !1;

    function Ab(a, b) {
        a.i ? b() : (a.g || (a.g = []), a.g.push(b))
    };
    var Bb = class extends zb {
        constructor(a) {
            super();
            this.j = a;
            Ab(this, () => {
                this.j.close()
            })
        }
        l() {
            this.j.postMessage([])
        }
    };

    function X(a, b, c = {}) {
        c.msg_type = b;
        c.googMsgType = "sth";
        b = JSON.stringify(c);
        a.parent.postMessage(b, "*")
    }

    function Cb(a) {
        if (a.D || I(a.config, 2)) return !0;
        let b = !0;
        const c = Db(a);
        c && (b = 36E5 <= c);
        if (b) try {
            a.g.localStorage.removeItem("LAST_INTERSTITIAL_TIME")
        } catch (d) {}
        return b
    }

    function Y(a, b, c) {
        J(a.config, 3) && (b.qid = J(a.config, 3));
        J(a.config, 10) && (b.eid = J(a.config, 10));
        b.rtype = H(D(G(a.config, 12)));
        b.req = a.g.location.href;
        if (I(a.config, 28)) {
            var d = pb;
            a.K || (a.K = new tb(!0));
            d(a.K, a.F(), b, !0, c ? ? .01)
        } else vb(a.F(), b, c)
    }

    function Db(a) {
        try {
            const b = +a.g.localStorage.getItem("LAST_INTERSTITIAL_TIME"),
                c = Date.now();
            if (b && b < c) return c - b
        } catch (b) {}
        return null
    }

    function Eb(a) {
        if (!I(a.config, 27)) {
            var b = H(xa(G(a.config, 26))),
                c = () => {
                    for (const d of a.l.document.getElementsByClassName("GoogleActiveViewElement")) d.removeAttribute("data-google-av-dm")
                };
            0 < b ? setTimeout(() => c(), b) : c();
            Y(a, {
                isfsapi: !!a.i,
                avp: P() - a.X
            }, .01)
        }
    }
    var Fb = class {
        constructor(a, b, c, d) {
            this.g = a;
            this.l = b;
            this.s = !1;
            this.B = null;
            this.m = 0;
            this.config = c;
            this.X = P();
            this.K = null;
            I(c, 29) ? (a = a.parent, b = new MessageChannel, a.postMessage(JSON.stringify({
                googMsgType: "sth",
                msg_type: "i-hai-aux"
            }), "*", [b.port2]), a = new Bb(b.port1)) : a = null;
            this.Y = a;
            this.D = I(this.config, 11) || 10 === H(D(G(this.config, 12))) || 11 === H(D(G(this.config, 12)));
            this.i = d;
            d ? .enableCustomCloseButton()
        }
        F() {}
        I() {
            (this.s = Cb(this)) ? (this.J(), J(this.config, 1) && this.g.parent.postMessage(J(this.config, 1),
                "*")) : this.i ? .notifyError("freq_cap")
        }
        u() {
            if (!this.m) {
                this.B && L(this.g, "storage", this.B);
                this.m = Date.now();
                if (!I(this.config, 2) && !this.D) try {
                    this.g.localStorage.setItem("LAST_INTERSTITIAL_TIME", "" + this.m)
                } catch (b) {}
                this.U();
                if (this.l) {
                    var a = this.g.document.createEvent("Event");
                    a.initEvent("i-creative-view", !0, !1);
                    this.l.dispatchEvent(a);
                    a = this.g.document.createEvent("Event");
                    a.initEvent("onshow", !0, !1);
                    this.g.dispatchEvent(a)
                }
            }
        }
        G() {}
        J() {
            let a = !1;
            if (this.i) {
                const b = this.i.waitForOnShow().then(() => {
                    this.u();
                    Eb(this)
                });
                ob(b);
                this.i.listenToBackButton(() => {
                    this.G()
                })
            } else this.g.IntersectionObserver && .01 < H(Da(this.config)) && (a = !0, (new this.g.IntersectionObserver((b, c) => {
                b.forEach(d => {
                    0 >= d.intersectionRatio || (this.u(), Eb(this), c.disconnect())
                })
            }, {
                threshold: H(Da(this.config))
            })).observe(this.g.document.documentElement));
            K(this.g, "message", W(262, b => {
                a: {
                    var c = a;
                    if (b && (this.g.parent == b.source || this.g.parent.parent == b.source)) {
                        var d = {};
                        try {
                            d = this.g.JSON.parse(b.data)
                        } catch (e) {
                            b = void 0;
                            break a
                        }
                        switch (d ? .msg_type) {
                            case "i-view":
                                this.s &&
                                    !c && this.u();
                                Y(this, {
                                    type: "viewmsg",
                                    has_iobs: !!this.g.IntersectionObserver
                                });
                                break;
                            case "r-back-button":
                                null == this.i && this.G()
                        }
                    }
                    b = void 0
                }
                return b
            }));
            this.D || (this.B = W(263, () => {
                this.s = Cb(this);
                if (!this.s) {
                    var b = {
                        i_tslv: Db(this)
                    };
                    X(this.g, "i-no", b)
                }
            }), K(this.g, "storage", this.B));
            this.i || X(this.g, "i-adframe-load")
        }
        U(a) {
            let b;
            try {
                const c = Ha(this.l);
                c.vv ? c.vv() : b = !0
            } catch (c) {
                T.A(533, c, void 0, void 0);
                return
            }
            a = a || 1;
            b ? (Y(this, {
                vf: a
            }), 3 <= a || this.g.setTimeout(r(Fb.prototype.U, this, a + 1), 3E3)) : 1 < a && Y(this, {
                vs: a
            })
        }
    };

    function Gb(a) {
        window.parent.postMessage(JSON.stringify({
            type: "rewarded",
            message: a
        }), "*")
    };

    function Hb(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };

    function Jb(a, b, c) {
        a = {
            context: "iaf::itf",
            req: Xa.location.href,
            db: a ? 1 : 0,
            ls: b ? 1 : 0,
            eid: J(c, 10),
            qid: J(c, 3),
            rtype: H(D(G(c, 12)))
        };
        vb("jserror", a)
    }

    function Kb(a, b) {
        Lb(a, b) && (a.j.style.background = "rgba(192,192,192, .3)", n.setTimeout(() => {
            a.j.style.background = "transparent";
            a.dismiss(2)
        }, 750))
    }

    function Mb(a, b) {
        b.some(c => "intervention" === c.type && "HeavyAdIntervention" === c.body ? .id) && (Y(a, {
            hai: "1"
        }, 1), a.Y ? .l(), a.m ? a.dismiss(8) : a.i ? a.i.notifyError("heavy_ads") : X(a.g, "i_iif"))
    }

    function Nb(a) {
        const b = W(259, r(function() {
            X(this.g, "i-blur");
            L(this.g, "blur", b)
        }, a));
        K(a.g, "blur", b)
    }

    function Ob(a) {
        a.o || 0 === a.m || (a.j.setAttribute("aria-label", J(a.config, 7)), a.j.setAttribute("role", "button"), a.j.setAttribute("tabindex", "0"), a.j.focus())
    }

    function Pb(a, b) {
        I(a.config, 15) ? (Gb("canceled"), Gb("closed")) : a.i ? a.i.closeAd() : X(a.g, b)
    }

    function Qb(a, b) {
        const c = a.g.document.getElementById("creative");
        a.g.goog_vignette_survey && (a.g.goog_vignette_survey.display(c, () => {
            a.dismiss(3)
        }, () => {}, 1), b && b.stopPropagation())
    }

    function Rb(a) {
        !1 === a.o && a.enableDismissListeners();
        a.T && K(a.T, "click", W(261, c => Qb(a, c)));
        const b = a.g.document.getElementById("card");
        b && b.addEventListener("click", W(909, c => {
            c ? .stopPropagation()
        }))
    }

    function Sb(a) {
        K(a.g, "resize", () => {
            var b = a.g;
            b = b.innerHeight >= b.innerWidth ? 1 : 2;
            a.H ? (a.H = !1, a.M = 2 === b) : (a.M ? 1 === b : 2 === b) && a.dismiss(4)
        })
    }

    function Tb(a) {
        a.g.addEventListener("message", b => {
            if (b.source === a.l) try {
                const c = JSON.parse(b.data);
                "rewarded" === c.type && "closed" === c.message && a.dismiss(11 === H(D(G(a.config, 12))) ? 6 : 1)
            } catch (c) {}
        })
    }

    function Lb(a, b) {
        if (!b) return !0;
        if ((b.preventDefault ? b.defaultPrevented : !1 === b.returnValue) || b.target && b.target.ownerDocument == a.l.document) return !1;
        for (a = b.target; a;) {
            if ("creative" == a.id) return !1;
            a = a.parentElement
        }
        return !0
    }
    var Ub = class extends Fb {
        constructor(a, b, c, d, e, f) {
            super(a, b, e, f);
            this.j = c;
            this.T = d;
            this.N = 0;
            this.R = W(260, g => {
                this.dismiss(1);
                g && g.stopPropagation()
            });
            this.P = g => Kb(this, g);
            this.L = [];
            this.C = [];
            this.o = !1;
            this.O = () => {};
            this.H = this.M = !1;
            this.v = null
        }
        I() {
            super.I();
            (this.v = this.g.ReportingObserver ? new this.g.ReportingObserver((a, b) => {
                Mb(this, a) && b.disconnect()
            }, {
                buffered: !0
            }) : null) && K(this.g, "pagehide", () => {
                Mb(this, this.v.takeRecords());
                this.v.disconnect()
            })
        }
        F() {
            return "ia_evt"
        }
        G() {
            this.o ? this.O() : this.dismiss(9)
        }
        addViewListener(a) {
            a =
                nb(483, a);
            this.m ? a() : this.L.push(a)
        }
        addDismissListener(a) {
            this.C.push(nb(484, a))
        }
        disableDismissListeners(a) {
            this.o = !0;
            this.O = a;
            L(this.j, "click", this.R);
            L(this.g.document, "click", this.P)
        }
        enableDismissListeners() {
            this.o = !1;
            K(this.j, "click", this.R);
            K(this.g.document, "click", this.P);
            Ob(this)
        }
        dismiss(a) {
            document.body.setAttribute("aria-hidden", "true");
            Y(this, {
                ttd: Date.now() - this.m,
                req: Xa.location.href,
                pda: this.N,
                ds: a,
                idrw: I(this.config, 15) ? 1 : 0
            });
            this.N++ || Nb(this);
            let b = 0;
            for (let d = 0; d < this.C.length; d++) b =
                Math.max(b, this.C[d]());
            b = Math.min(b, 1E3);
            let c = "i-dismiss";
            6 === a ? c = "r-dismiss-before-reward" : 7 === a && (c = "r-dismiss-after-reward");
            0 === b ? Pb(this, c) : n.setTimeout(() => Pb(this, c), b)
        }
        J() {
            super.J();
            Rb(this)
        }
        u() {
            super.u();
            var a = this.g;
            this.M = 2 === (a.innerHeight >= a.innerWidth ? 1 : 2);
            this.H = 0 === this.g.innerWidth && 0 === this.g.innerHeight;
            Sb(this);
            Ob(this);
            var b = this.j.getBoundingClientRect(),
                c = b.bottom,
                d = b.right;
            a = Hb(this.g).clientHeight;
            var e = Hb(this.g).clientWidth;
            const f = Math.floor(c - a),
                g = Math.floor(d - e);
            if (0 <=
                f || 5 < g) c -= b.top, d -= b.left, b = this.g, Y(this, {
                dhb: f >= c ? 1 : 0,
                dhr: g >= d ? 1 : 0,
                h: a,
                w: e,
                bh: c,
                bw: d,
                opb: f,
                opr: g,
                pt: b.innerHeight >= b.innerWidth ? 1 : 0,
                req: this.g.location.href
            });
            this.l.postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            for (a = 0; a < this.L.length; a++) this.L[a]();
            Tb(this);
            .01 < Math.random() || (a = Wa(24, document.currentScript), a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${24}&version=${Va(24)}&sample=${.01}`,
                Ta(window, a));
            a = this.g.navigator ? !0 === this.g.navigator.standalone : !1;
            e = window.matchMedia("(display-mode: standalone)").matches;
            Y(this, {
                wapp: a || e
            })
        }
    };
    Ua = 24;
    const Vb = Wa(24, document.currentScript);
    if (null == Vb) throw Error("JSC not found 24");
    const Wb = {},
        Xb = Vb.attributes;
    for (let a = Xb.length - 1; 0 <= a; a--) {
        const b = Xb[a].name;
        0 === b.indexOf("data-jcp-") && (Wb[b.substring(9)] = Xb[a].value)
    }
    (async function(a) {
        var b = window;
        const c = Ga(a.config),
            d = W(258, async () => {
                var e = null;
                I(c, 25) && (e = await yb()); {
                    var f = b.document.getElementById("ad_iframe").contentWindow;
                    var g = b.document;
                    const l = f.document;
                    var h = G(c, 5);
                    const k = (null == h ? h : Number.isFinite(h) ? h | 0 : void 0) ? ? 0;
                    h = 0 === k || 2 === k ? l.getElementById(J(c, 6)) : g.getElementById(J(c, 6));
                    g = 0 === k ? l.getElementById(J(c, 8)) : g.getElementById(J(c, 8));
                    let m;
                    try {
                        m = !!b.localStorage
                    } catch (q) {}
                    h ? (m || Jb(h, m, c), f = new Ub(b, f, h, g, c, e), f.I()) : (Jb(h, m, c), e ? e.notifyError("no_dismiss_button") :
                        X(b, "i_iif"), f = null)
                }
                b.interstitialAdFrame = f;
                xb(9, b).resolve(f)
            });
        a = b.document.getElementById("ad_iframe");
        null != a.contentDocument && La(a.contentDocument, () => void d())
    })(Wb);
}).call(this);