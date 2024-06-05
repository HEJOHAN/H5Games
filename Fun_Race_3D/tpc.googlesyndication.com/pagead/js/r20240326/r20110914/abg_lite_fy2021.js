(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = this || self;

    function aa(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = m, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    }

    function ba(a) {
        return a
    };

    function ca(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ea = aa(610401301),
        fa = aa(188588736);
    var n;
    const ha = m.navigator;
    n = ha ? ha.userAgentData || null : null;

    function ia(a) {
        return ea ? n ? n.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function q(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function r() {
        return ea ? !!n && 0 < n.brands.length : !1
    }

    function ja() {
        return r() ? ia("Chromium") : (q("Chrome") || q("CriOS")) && !(r() ? 0 : q("Edge")) || q("Silk")
    };

    function ka(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function la(a) {
        la[" "](a);
        return a
    }
    la[" "] = function() {};
    !q("Android") || ja();
    ja();
    q("Safari") && (ja() || (r() ? 0 : q("Coast")) || (r() ? 0 : q("Opera")) || (r() ? 0 : q("Edge")) || (r() ? ia("Microsoft Edge") : q("Edg/")) || r() && ia("Opera"));
    var v = Symbol(),
        ma = Symbol();
    var w = (a, b) => {
        a[v] = b;
        return a
    };

    function na(a, b) {
        w(b, (a | 0) & -14591)
    }

    function oa(a, b) {
        w(b, (a | 34) & -14557)
    }

    function pa(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var x = {},
        qa = {};

    function ra(a) {
        return !(!a || "object" !== typeof a || a.g !== qa)
    }

    function sa(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ta;

    function z(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[v] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        w(a, d | 1);
        return !0
    }
    class ua {}
    class va {}
    Object.freeze(new ua);
    Object.freeze(new va);
    let wa;

    function A(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    };
    let B;

    function F(a, b) {
        B = b;
        a = new a(b);
        B = void 0;
        return a
    };

    function xa(a, b) {
        return ya(b)
    }

    function ya(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (z(a, void 0, 0)) return
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

    function za(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const f = b & 256 ? a[d - 1] : void 0;
        d += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (f) {
            b = a[b] = {};
            for (const e in f) b[e] = c(f[e])
        }
        return a
    }

    function Aa(a, b, c, d, f) {
        if (null != a) {
            if (Array.isArray(a)) a = z(a, void 0, 0) ? void 0 : f && (a[v] | 0) & 2 ? a : Fa(a, b, c, void 0 !== d, f);
            else if (sa(a)) {
                const e = {};
                for (let g in a) e[g] = Aa(a[g], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Fa(a, b, c, d, f) {
        const e = d || c ? a[v] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = Aa(a[g], b, c, d, f);
        c && c(e, a);
        return a
    }

    function Ga(a) {
        return a.v === x ? a.toJSON() : ya(a)
    };

    function Ha(a, b, c = oa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[v] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? w(a, (d | 34) & -12293) : Fa(a, Ha, d & 4 ? oa : c, !0, !0)
            }
            a.v === x && (c = a.l, d = c[v], a = d & 2 ? a : F(a.constructor, Ia(c, d, !0)));
            return a
        }
    }

    function Ia(a, b, c) {
        const d = c || b & 2 ? oa : na,
            f = !!(b & 32);
        a = za(a, b, e => Ha(e, f, d));
        a[v] = a[v] | 32 | (c ? 2 : 0);
        return a
    };

    function G(a, b) {
        a = a.l;
        return Ja(a, a[v], b)
    }

    function Ka(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }

    function Ja(a, b, c, d) {
        if (-1 === c) return null;
        const f = pa(b);
        if (c >= f) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            return d && b & 256 && (d = a[e - 1][c], null != d) ? (Ka(a, b, f, c) && null != ma && (a = wa ? ? (wa = {}), b = a[ma] || 0, 4 <= b || (a[ma] = b + 1, a = Error(), a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {}), a.__closure__error__context__984382.severity = "incident", ca(a))), d) : Ka(a, b, f, c)
        }
    }

    function La(a, b, c, d, f) {
        const e = pa(b);
        if (c >= e || f) {
            let g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && w(a, g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Ma(a) {
        var b = Na;
        a = a.l;
        let c = a[v];
        const d = Ja(a, c, 1, !1);
        if (null != d && "object" === typeof d && d.v === x) b = d;
        else if (Array.isArray(d)) {
            const f = d[v] | 0;
            let e = f;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== f && w(d, e);
            b = new b(d)
        } else b = void 0;
        b !== d && null != b && La(a, c, 1, b, !1);
        return b
    }

    function Oa(a) {
        let b = Ma(a);
        if (null == b) return b;
        a = a.l;
        let c = a[v];
        if (!(c & 2)) {
            var d = b;
            const f = d.l,
                e = f[v];
            d = e & 2 ? F(d.constructor, Ia(f, e, !1)) : d;
            d !== b && (b = d, La(a, c, 1, b, !1))
        }
        return b
    }

    function H(a, b) {
        a = G(a, b);
        return null == a || "string" === typeof a ? a : void 0
    }

    function J(a, b) {
        a = G(a, b);
        return (null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function K(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        a = a.l;
        let d = a[v];
        if (d & 2) throw Error();
        La(a, d, b, c)
    };
    var L = class {
        constructor(a) {
            a: {
                null == a && (a = B);B = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[v] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, sa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                w(a, b)
            }
            this.l = a
        }
        toJSON() {
            return ta ? Pa(this, this.l, !1) : Pa(this, Fa(this.l, Ga, void 0, void 0, !1), !0)
        }
    };
    L.prototype.v = x;

    function Pa(a, b, c) {
        var d = fa ? void 0 : a.constructor.N;
        const f = (c ? a.l : b)[v];
        a = b.length;
        if (!a) return b;
        let e, g;
        if (sa(c = b[a - 1])) {
            a: {
                var h = c;
                let t = {},
                    u = !1;
                for (var l in h) {
                    let p = h[l];
                    if (Array.isArray(p)) {
                        let y = p;
                        if (z(p, d, +l) || ra(p) && 0 === p.size) p = null;
                        p != y && (u = !0)
                    }
                    null != p ? t[l] = p : u = !0
                }
                if (u) {
                    for (var k in t) {
                        h = t;
                        break a
                    }
                    h = null
                }
            }
            h != c && (e = !0);a--
        }
        for (l = +!!(f & 512) - 1; 0 < a; a--) {
            k = a - 1;
            c = b[k];
            k -= l;
            if (!(null == c || z(c, d, k) || ra(c) && 0 === c.size)) break;
            g = !0
        }
        if (!e && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    };
    var Na = class extends L {};
    Na.N = [28];
    var Qa = class extends L {},
        Ra = function(a) {
            return b => {
                if (null == b || "" == b) b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error("dnarr");
                    b[v] |= 32;
                    b = F(a, b)
                }
                return b
            }
        }(Qa);
    Qa.N = [21];
    var Sa = class extends L {
        constructor() {
            super()
        }
    };

    function Ta(a = window) {
        return a
    };

    function Ua(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Va = {
            passive: !0
        },
        Wa = Ua(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Xa(a) {
        return a ? a.passive && Wa() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Xa(d))
    };
    var Ya;
    var Za = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        $a = {};

    function N(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function ab(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : bb(b, a)[0] || null);
        return a || null
    }

    function bb(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var f = a.getElementsByClassName(b);
            return f
        }
        f = a.getElementsByTagName("*");
        if (b) {
            var e = {};
            for (c = d = 0; a = f[c]; c++) {
                var g = a.className,
                    h;
                if (h = "function" == typeof g.split) h = 0 <= ka(g.split(/\s+/), b);
                h && (e[d++] = a)
            }
            e.length = d;
            return e
        }
        return f
    }

    function cb(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var db = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        eb = /#|$/;

    function fb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function gb(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function hb(a, b, c = null, d = !1) {
        ib(a, b, c, d)
    }

    function ib(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = gb("IMG", a.document);
        if (c || d) {
            const e = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = ka(g, f);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, Xa());
                f.removeEventListener && f.removeEventListener("error", e, Xa())
            };
            M(f, "load", e);
            M(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let jb = 0;

    function kb(a) {
        return (a = lb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function lb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function mb() {
        if (!(.01 < Math.random())) {
            var a = lb(60, document.currentScript);
            a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${kb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : hb(b, a, void 0, !1)
        }
    };
    var rb = document,
        O = window;

    function sb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function tb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : sb(a).match(/\S+/g) || [], b = 0 <= ka(a, b));
        return b
    }

    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!tb(a, b)) {
            var c = sb(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var ub = class {
        constructor(a) {
            this.serializedAttributionData = a.toJSON();
            var b = a.l;
            this.g = F(a.constructor, Ia(b, b[v], !1));
            this.isMutableImpression = void 0 !== Ma(this.g) && !!J(Oa(this.g), 33);
            H(this.g, 30);
            this.X = !!J(this.g, 11);
            this.hasUserFeedbackData = !!this.g && void 0 !== Ma(this.g);
            this.R = !!J(this.g, 4);
            this.U = !!J(this.g, 6);
            this.P = !!J(this.g, 13);
            A(G(this.g, 8));
            this.creativeIndexSuffix = 1 < (A(G(this.g, 8)) ? ? 0) ? (A(G(this.g, 7)) ? ? 0).toString() : "";
            null != H(this.g, 34) && (this.creativeIndexSuffix = (H(this.g, 34) ? ? "") + "_" +
                this.creativeIndexSuffix);
            this.Y = !!J(this.g, 17);
            this.W = !!J(this.g, 18);
            this.O = !!J(this.g, 14);
            this.F = !!J(this.g, 15);
            this.Z = !!J(this.g, 31);
            this.V = 1 == J(this.g, 9);
            this.openAttributionInline = 1 == J(this.g, 10);
            this.isMobileDevice = !!J(this.g, 12);
            this.u = null;
            this.T = (a = rb.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.H = 1 < (A(G(this.g, 8)) ? ? 0)) && void 0 === O.goog_multislot_cache && (O.goog_multislot_cache = {});
            if (this.H && !this.T) {
                if (a = O.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    if (b = rb.querySelector("[data-dim]"))
                        if (b =
                            b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom - b.top) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.G = a;
            this.B = N("abgcp" + this.creativeIndexSuffix);
            this.A = N("abgc" + this.creativeIndexSuffix);
            this.h = N("abgs" + this.creativeIndexSuffix);
            N("abgl" + this.creativeIndexSuffix);
            this.s = N("abgb" + this.creativeIndexSuffix);
            this.D = N("abgac" +
                this.creativeIndexSuffix);
            N("mute_panel" + this.creativeIndexSuffix);
            this.C = ab("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.O && !ab("goog_delegate_disabled") && !this.F;
            if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if ("undefined" != typeof d.tagName && "A" == d.tagName.toUpperCase()) {
                    a = d;
                    break a
                }
            } else a = null;
            this.m = a;
            this.j = this.isDelegateAttributionActive ? this.C : N("cbb" + this.creativeIndexSuffix);
            this.S = this.G ? "0" === this.creativeIndexSuffix :
                !0;
            this.enableDelegateDismissableMenu = !!this.j && tb(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.U && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!J(this.g, 19);
            this.adbadgeEnabled = !!J(this.g, 24);
            this.enableNativeJakeUi = !!J(this.g, 27);
            H(this.g, 33)
        }
    };
    var vb = class {
        constructor(a, b, c) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = c
        }
    };
    var Q = (a, b) => {
        a && fb(b, (c, d) => {
            a.style[d] = c
        })
    };
    class wb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const xb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var yb = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        zb = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let Ab = null;

    function Bb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Cb() {
        const a = m.performance;
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
    const R = m.performance,
        Eb = !!(R && R.mark && R.measure && R.clearMarks),
        T = Ua(() => {
            var a;
            if (a = Eb) {
                var b;
                if (null === Ab) {
                    Ab = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
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
        a && R && T() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Gb {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Db(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && T() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Cb() || Bb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && T() && R.mark(b);
                !this.g || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Hb(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ib(a, b, c, d, f) {
        const e = [];
        fb(a, function(g, h) {
            (g = Jb(g, b, c, d, f)) && e.push(h + "=" + g)
        });
        return e.join(b)
    }

    function Jb(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(Jb(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Ib(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Kb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Lb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Kb(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(e, g) {
            return e - g
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.g.length; e++) {
            const g = a.g[e],
                h = a.h[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Ib(h[l], a.i, ",$");
                if (k) {
                    k = f + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
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
    class Mb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Nb(a) {
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

    function Ob(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                Fb(f), c = a.m(b, new wb(e, {
                    message: Nb(e)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) window.console ? .error ? .(e);
            else throw e;
        }
        return d
    }

    function Pb(a, b) {
        var c = U;
        return (...d) => Ob(c, a, () => b.apply(void 0, d))
    }
    var Sb = class {
        constructor(a = null) {
            this.pinger = Qb;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const C = new Mb;
                var g = C;
                g.g.push(1);
                g.h[1] = Hb("context", a);
                b.error && b.meta && b.id || (b = new wb(b, {
                    message: Nb(b)
                }));
                if (b.msg) {
                    g = C;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Hb("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (D) {}
                if (d) try {
                    d(b)
                } catch (D) {}
                d = C;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = m;
                l = [];
                let da;
                b = null;
                do {
                    var k = d;
                    try {
                        var t;
                        if (t = !!k && null != k.location.href) b: {
                            try {
                                la(k.foo);
                                t = !0;
                                break b
                            } catch (D) {}
                            t = !1
                        }
                        var u = t
                    } catch {
                        u = !1
                    }
                    u ? (da = k.location.href, b = k.document && k.document.referrer || null) : (da = b, b = null);
                    l.push(new zb(da || ""));
                    try {
                        d = k.parent
                    } catch (D) {
                        d = null
                    }
                } while (d && k != d);
                for (let D = 0, nb = l.length - 1; D <= nb; ++D) l[D].depth = nb - D;
                k = m;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (u = 1; u < l.length; ++u) {
                        var p = l[u];
                        p.url || (p.url = k.location.ancestorOrigins[u - 1] || "", p.L = !0)
                    }
                var y = l;
                let Ba = new zb(m.location.href, !1);
                k = null;
                const Ca = y.length - 1;
                for (p = Ca; 0 <= p; --p) {
                    var E = y[p];
                    !k && xb.test(E.url) && (k = E);
                    if (E.url && !E.L) {
                        Ba = E;
                        break
                    }
                }
                E = null;
                const ac = y.length && y[Ca].url;
                0 != Ba.depth && ac && (E = y[Ca]);
                e = new yb(Ba, E);
                if (e.h) {
                    y = C;
                    var I = e.h.url || "";
                    y.g.push(4);
                    y.h[4] = Hb("top", I)
                }
                var Da = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    var Ea = e.g.url.match(db),
                        S = Ea[1],
                        ob = Ea[3],
                        pb = Ea[4];
                    I = "";
                    S && (I += S + ":");
                    ob && (I += "//", I += ob, pb && (I += ":" + pb));
                    var qb = I
                } else qb = "";
                S = C;
                Da = [Da, {
                    url: qb
                }];
                S.g.push(5);
                S.h[5] = Da;
                Rb(this.pinger, f, C, this.i, c)
            } catch (C) {
                try {
                    Rb(this.pinger, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Nb(C),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (da) {}
            }
            return !0
        }
    };

    function Rb(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof Mb ? e = c : (e = new Mb, fb(c, (h, l) => {
                var k = e;
                const t = k.j++;
                h = Hb(l, h);
                k.g.push(t);
                k.h[t] = h
            }));
            const g = Lb(e, "/pagead/gen_204?id=" + b + "&");
            g && hb(m, g)
        } catch (e) {}
    }

    function Tb() {
        var a = Qb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class Ub {
        constructor() {
            this.g = Math.random()
        }
    };
    let Qb, U;
    const V = new Gb;
    var Vb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Fb, void 0), V.h.length = 0))
    };
    (a => {
        Qb = a ? ? new Ub;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Tb();
        U = new Sb(V);
        U.h = b => {
            const c = jb;
            0 !== c && (b.jc = String(c), b.shv = kb(c))
        };
        U.i = !0;
        "complete" == window.document.readyState ? Vb() : V.g && M(window, "load", () => {
            Vb()
        })
    })();
    var W = (a, b) => Pb(a, b);

    function Wb(a) {
        if (a.g.m && a.g.W) {
            const b = Oa(a.g.g);
            b && null != H(b, 5) && null != H(b, 6) && (a.i = new vb(H(b, 5) ? ? "", H(b, 6) ? ? "", H(b, 19) ? ? ""));
            M(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var f = d.search(eb),
                        e;
                    b: {
                        for (e = 0; 0 <= (e = d.indexOf("ad_signals", e)) && e < f;) {
                            var g = d.charCodeAt(e - 1);
                            if (38 == g || 63 == g)
                                if (g = d.charCodeAt(e + 10), !g || 61 == g || 38 == g || 35 == g) break b;
                            e += 11
                        }
                        e = -1
                    }
                    if (0 > e) d = null;
                    else {
                        g = d.indexOf("&", e);
                        if (0 > g || g > f) g = f;
                        d = decodeURIComponent(d.slice(e + 11, -1 !== g ? g : 0).replace(/\+/g, " "))
                    }
                    if (d) {
                        if (d = {
                                J: d,
                                label: "closebutton_whythisad_click",
                                M: "1",
                                K: ""
                            }, c = new Sa, null != d && (null != d.J && K(c, 1, d.J), null != d.aa && K(c, 3, d.aa), null != d.label && K(c, 6, d.label), null != d.M && K(c, 7, d.M), null != d.K && K(c, 8, d.K)), null != (d = Ta(m).fence)) {
                            f = d.reportEvent;
                            a: {
                                ta = !0;
                                try {
                                    var h = JSON.stringify(c.toJSON(), xa);
                                    break a
                                } finally {
                                    ta = !1
                                }
                                h = void 0
                            }
                            f.call(d, {
                                eventType: "interaction",
                                eventData: h,
                                destination: ["buyer"]
                            })
                        }
                    } else h = c.g + "&label=closebutton_whythisad_click", h += "&label_instance=1", c.h && (h += "&cid=" + c.h), hb(window, h)
                }
            }))
        }
    }

    function Xb(a) {
        if (a.g.X) M(a.g.i, "click", W(365, b => {
            const c = O.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) M(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (M(a.g.j, "click", () => a.h()), M(a.g.j, "keydown", b => {
                "Enter" !== b.code && "Space" !== b.code || a.h()
            })), a.g.Z && a.g.h && M(a.g.h, "click", () => a.h())), a.g.R) Yb(a);
        else {
            M(a.g.i, "mouseover", W(367, () => Yb(a)));
            M(a.g.i, "mouseout", W(369,
                () => Zb(a, 500)));
            M(a.g.i, "touchstart", W(368, () => Yb(a)), Va);
            const b = W(370, () => Zb(a, 4E3));
            M(a.g.i, "mouseup", b);
            M(a.g.i, "touchend", b);
            M(a.g.i, "touchcancel", b);
            a.g.m && M(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Yb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function Zb(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => $b(a), b)
    }

    function bc(a) {
        const b = a.g.D;
        void 0 !== b && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            P(b, "abgacfo")
        }))
    }

    function $b(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class cc {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.Y || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.S ? Wb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (Q(this.g.s, a), Q(this.g.h, a), Q(this.g.B, b), Q(this.g.A, b)) : Q(this.g.A, a)), Xb(this), this.g.enableNativeJakeUi && P(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (P(document.body, "goog_delegate_active"), P(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && cb(this.g.j), setTimeout(() => {
                P(document.body,
                    "jar")
            }, this.g.P ? 750 : 100)), this.g.F && P(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && O.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.I) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.V && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function dc(a) {
        if (!a.g && (a.g = !0, O.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Ra(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new ub(a);
            new b(a)
        }
    }
    class ec {
        constructor(a) {
            var b = fc;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            ab("goog_delegate_deferred") ? void 0 !== O.goog_delegate_deferred_token ? dc(this) : (a = () => {
                dc(this)
            }, O.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : dc(this)
        }
    };
    var gc = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class hc {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function ic() {
        const {
            promise: a,
            resolve: b
        } = new hc;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function jc(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = ic();
        a[5] = c;
        b();
        return c
    }

    function kc(a, b) {
        return jc(a, () => {
            var c = a.document;
            const d = gb("SCRIPT", c);
            d.src = b instanceof Za && b.constructor === Za ? b.g : "type_error:TrustedResourceUrl";
            if (!(void 0) ? .ba) {
                var f;
                (f = (f = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? f.nonce || f.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", f)
            }(c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function lc(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === Ya) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ba,
                        createScript: ba,
                        createScriptURL: ba
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                Ya = b
            } else Ya = b
        }
        a = (b = Ya) ? b.createScriptURL(a) : a;
        return new Za(a, $a)
    };

    function mc(a) {
        gc([a]);
        new ec(a)
    }

    function nc(a) {
        a.g.u ? a.g.u.expandAttributionCard() : (Ob(U, 373, () => {
            $b(a.h);
            bc(a.h)
        }), kc(window, lc(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(H(a.g.g,33)??"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.u = b;
            b.expandAttributionCard()
        }), mb())
    }
    var fc = class {
        constructor(a) {
            this.g = a;
            this.h = new cc(this.g, W(359, () => nc(this)))
        }
    };
    jb = 60;
    const oc = lb(60, document.currentScript);
    if (null == oc) throw Error("JSC not found 60");
    const pc = {},
        qc = oc.attributes;
    for (let a = qc.length - 1; 0 <= a; a--) {
        const b = qc[a].name;
        0 === b.indexOf("data-jcp-") && (pc[b.substring(9)] = qc[a].value)
    }
    if (pc["attribution-data"]) mc(JSON.parse(pc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || void 0 === mc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = mc
    };
}).call(this);