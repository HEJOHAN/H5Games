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
    var ca = aa(610401301),
        ea = aa(188588736);
    var n;
    const fa = m.navigator;
    n = fa ? fa.userAgentData || null : null;

    function ha(a) {
        return ca ? n ? n.brands.some(({
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
        return ca ? !!n && 0 < n.brands.length : !1
    }

    function ia() {
        return r() ? ha("Chromium") : (q("Chrome") || q("CriOS")) && !(r() ? 0 : q("Edge")) || q("Silk")
    };

    function ja(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function ka(a) {
        ka[" "](a);
        return a
    }
    ka[" "] = function() {};
    !q("Android") || ia();
    ia();
    q("Safari") && (ia() || (r() ? 0 : q("Coast")) || (r() ? 0 : q("Opera")) || (r() ? 0 : q("Edge")) || (r() ? ha("Microsoft Edge") : q("Edg/")) || r() && ha("Opera"));
    var v = Symbol();
    var w = (a, b) => {
        a[v] = b;
        return a
    };

    function la(a, b) {
        w(b, (a | 0) & -14591)
    }

    function ma(a, b) {
        w(b, (a | 34) & -14557)
    }

    function na(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var y = {},
        oa = {};

    function pa(a) {
        return !(!a || "object" !== typeof a || a.g !== oa)
    }

    function qa(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ra;

    function z(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[v] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        w(a, d | 1);
        return !0
    }
    class sa {}
    class ta {}
    Object.freeze(new sa);
    Object.freeze(new ta);

    function A(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    };
    let E;

    function F(a, b) {
        E = b;
        a = new a(b);
        E = void 0;
        return a
    };

    function ua(a, b) {
        return va(b)
    }

    function va(a) {
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

    function wa(a, b, c) {
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

    function xa(a, b, c, d, f) {
        if (null != a) {
            if (Array.isArray(a)) a = z(a, void 0, 0) ? void 0 : f && (a[v] | 0) & 2 ? a : ya(a, b, c, void 0 !== d, f);
            else if (qa(a)) {
                const e = {};
                for (let g in a) e[g] = xa(a[g], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function ya(a, b, c, d, f) {
        const e = d || c ? a[v] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = xa(a[g], b, c, d, f);
        c && c(e, a);
        return a
    }

    function za(a) {
        return a.v === y ? a.toJSON() : va(a)
    };

    function Ea(a, b, c = ma) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[v] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? w(a, (d | 34) & -12293) : ya(a, Ea, d & 4 ? ma : c, !0, !0)
            }
            a.v === y && (c = a.l, d = c[v], a = d & 2 ? a : F(a.constructor, Fa(c, d, !0)));
            return a
        }
    }

    function Fa(a, b, c) {
        const d = c || b & 2 ? ma : la,
            f = !!(b & 32);
        a = wa(a, b, e => Ea(e, f, d));
        a[v] = a[v] | 32 | (c ? 2 : 0);
        return a
    };

    function G(a, b) {
        a = a.l;
        return Ga(a, a[v], b)
    }

    function Ga(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= na(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < f) return a[b]
        }
    }

    function Ha(a, b, c, d, f) {
        const e = na(b);
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

    function Ia(a) {
        var b = Ja;
        a = a.l;
        let c = a[v];
        const d = Ga(a, c, 1, !1);
        if (null != d && "object" === typeof d && d.v === y) b = d;
        else if (Array.isArray(d)) {
            const f = d[v] | 0;
            let e = f;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== f && w(d, e);
            b = new b(d)
        } else b = void 0;
        b !== d && null != b && Ha(a, c, 1, b, !1);
        return b
    }

    function Ka(a) {
        let b = Ia(a);
        if (null == b) return b;
        a = a.l;
        let c = a[v];
        if (!(c & 2)) {
            var d = b;
            const f = d.l,
                e = f[v];
            d = e & 2 ? F(d.constructor, Fa(f, e, !1)) : d;
            d !== b && (b = d, Ha(a, c, 1, b, !1))
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
        Ha(a, d, b, c)
    };
    var L = class {
        constructor(a) {
            a: {
                null == a && (a = E);E = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[v] | 0;
                    if (b & 2048) throw Error();
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, qa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                w(a, b)
            }
            this.l = a
        }
        toJSON() {
            return ra ? La(this, this.l, !1) : La(this, ya(this.l, za, void 0, void 0, !1), !0)
        }
    };
    L.prototype.v = y;

    function La(a, b, c) {
        var d = ea ? void 0 : a.constructor.N;
        const f = (c ? a.l : b)[v];
        a = b.length;
        if (!a) return b;
        let e, g;
        if (qa(c = b[a - 1])) {
            a: {
                var h = c;
                let t = {},
                    u = !1;
                for (var l in h) {
                    let p = h[l];
                    if (Array.isArray(p)) {
                        let x = p;
                        if (z(p, d, +l) || pa(p) && 0 === p.size) p = null;
                        p != x && (u = !0)
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
            if (!(null == c || z(c, d, k) || pa(c) && 0 === c.size)) break;
            g = !0
        }
        if (!e && !g) return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    };
    var Ja = class extends L {};
    Ja.N = [28];
    var Ma = class extends L {},
        Na = function(a) {
            return b => {
                if (null == b || "" == b) b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error(void 0);
                    b[v] |= 32;
                    b = F(a, b)
                }
                return b
            }
        }(Ma);
    Ma.N = [21];
    var Oa = class extends L {
        constructor() {
            super()
        }
    };

    function Pa(a = window) {
        return a
    };

    function Qa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ra = {
            passive: !0
        },
        Sa = Qa(function() {
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

    function Ta(a) {
        return a ? a.passive && Sa() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ta(d))
    };
    var Ua;
    var Va = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        Wa = {};

    function N(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function Xa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Ya(b, a)[0] || null);
        return a || null
    }

    function Ya(a, b) {
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
                if (h = "function" == typeof g.split) h = 0 <= ja(g.split(/\s+/), b);
                h && (e[d++] = a)
            }
            e.length = d;
            return e
        }
        return f
    }

    function Za(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var $a = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ab = /#|$/;

    function bb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function cb(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function db(a, b, c = null, d = !1) {
        eb(a, b, c, d)
    }

    function eb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = cb("IMG", a.document);
        if (c || d) {
            const e = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = ja(g, f);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, Ta());
                f.removeEventListener && f.removeEventListener("error", e, Ta())
            };
            M(f, "load", e);
            M(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let fb = 0;

    function gb(a) {
        return (a = hb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function hb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function ib() {
        if (!(.01 < Math.random())) {
            var a = hb(60, document.currentScript);
            a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${gb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : db(b, a, void 0, !1)
        }
    };
    var jb = document,
        O = window;

    function ob(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function pb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : ob(a).match(/\S+/g) || [], b = 0 <= ja(a, b));
        return b
    }

    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!pb(a, b)) {
            var c = ob(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var qb = class {
        constructor(a) {
            this.serializedAttributionData = a.toJSON();
            var b = a.l;
            this.g = F(a.constructor, Fa(b, b[v], !1));
            this.isMutableImpression = void 0 !== Ia(this.g) && !!J(Ka(this.g), 33);
            this.X = !!J(this.g, 11);
            this.hasUserFeedbackData = !!this.g && void 0 !== Ia(this.g);
            this.R = !!J(this.g, 4);
            this.U = !!J(this.g, 6);
            this.P = !!J(this.g, 13);
            A(G(this.g, 8));
            this.creativeIndexSuffix = 1 < (A(G(this.g, 8)) ? ? 0) ? (A(G(this.g, 7)) ? ? 0).toString() : "";
            null != H(this.g, 34) && (this.creativeIndexSuffix = (H(this.g, 34) ? ? "") + "_" + this.creativeIndexSuffix);
            this.Y = !!J(this.g, 17);
            this.W = !!J(this.g, 18);
            this.O = !!J(this.g, 14);
            this.F = !!J(this.g, 15);
            this.Z = !!J(this.g, 31);
            this.V = 1 == J(this.g, 9);
            this.openAttributionInline = 1 == J(this.g, 10);
            this.isMobileDevice = !!J(this.g, 12);
            this.u = null;
            this.T = (a = jb.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.H = 1 < (A(G(this.g, 8)) ? ? 0)) && void 0 === O.goog_multislot_cache && (O.goog_multislot_cache = {});
            if (this.H && !this.T) {
                if (a = O.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    if (b = jb.querySelector("[data-dim]"))
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
            this.C = Xa("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.O && !Xa("goog_delegate_disabled") && !this.F;
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
            this.enableDelegateDismissableMenu = !!this.j && pb(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.U && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!J(this.g, 19);
            this.adbadgeEnabled = !!J(this.g, 24);
            this.enableNativeJakeUi = !!J(this.g, 27)
        }
    };
    var rb = class {
        constructor(a, b) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = b
        }
    };
    var Q = (a, b) => {
        a && bb(b, (c, d) => {
            a.style[d] = c
        })
    };
    class sb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const tb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ub = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        vb = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let wb = null;

    function xb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function yb() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var zb = class {
        constructor(a, b) {
            var c = yb() || xb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const R = m.performance,
        Ab = !!(R && R.mark && R.measure && R.clearMarks),
        T = Qa(() => {
            var a;
            if (a = Ab) {
                var b;
                if (null === wb) {
                    wb = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (wb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = wb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Bb(a) {
        a && R && T() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Cb {
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
            a = new zb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && T() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (yb() || xb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && T() && R.mark(b);
                !this.g || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Db(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Eb(a, b, c, d, f) {
        const e = [];
        bb(a, function(g, h) {
            (g = Fb(g, b, c, d, f)) && e.push(h + "=" + g)
        });
        return e.join(b)
    }

    function Fb(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(Fb(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Eb(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Gb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Hb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Gb(a) - b.length;
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
                let k = Eb(h[l], a.i, ",$");
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
    class Ib {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Jb(a) {
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

    function Kb(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                Bb(f), c = a.m(b, new sb(e, {
                    message: Jb(e)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) window.console ? .error ? .(e);
            else throw e;
        }
        return d
    }

    function Lb(a, b) {
        var c = U;
        return (...d) => Kb(c, a, () => b.apply(void 0, d))
    }
    var Ob = class {
        constructor(a = null) {
            this.pinger = Mb;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const B = new Ib;
                var g = B;
                g.g.push(1);
                g.h[1] = Db("context", a);
                b.error && b.meta && b.id || (b = new sb(b, {
                    message: Jb(b)
                }));
                if (b.msg) {
                    g = B;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Db("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (C) {}
                if (d) try {
                    d(b)
                } catch (C) {}
                d = B;
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
                                ka(k.foo);
                                t = !0;
                                break b
                            } catch (C) {}
                            t = !1
                        }
                        var u = t
                    } catch {
                        u = !1
                    }
                    u ? (da = k.location.href, b = k.document && k.document.referrer || null) : (da = b, b = null);
                    l.push(new vb(da || ""));
                    try {
                        d = k.parent
                    } catch (C) {
                        d = null
                    }
                } while (d && k != d);
                for (let C = 0, kb = l.length - 1; C <= kb; ++C) l[C].depth = kb - C;
                k = m;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (u = 1; u < l.length; ++u) {
                        var p = l[u];
                        p.url || (p.url = k.location.ancestorOrigins[u - 1] || "", p.L = !0)
                    }
                var x = l;
                let Aa = new vb(m.location.href, !1);
                k = null;
                const Ba = x.length - 1;
                for (p = Ba; 0 <= p; --p) {
                    var D = x[p];
                    !k && tb.test(D.url) && (k = D);
                    if (D.url && !D.L) {
                        Aa = D;
                        break
                    }
                }
                D = null;
                const Xb = x.length && x[Ba].url;
                0 != Aa.depth && Xb && (D = x[Ba]);
                e = new ub(Aa, D);
                if (e.h) {
                    x = B;
                    var I = e.h.url || "";
                    x.g.push(4);
                    x.h[4] = Db("top", I)
                }
                var Ca = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    var Da = e.g.url.match($a),
                        S = Da[1],
                        lb = Da[3],
                        mb = Da[4];
                    I = "";
                    S && (I += S + ":");
                    lb && (I += "//", I += lb, mb && (I += ":" + mb));
                    var nb = I
                } else nb = "";
                S = B;
                Ca = [Ca, {
                    url: nb
                }];
                S.g.push(5);
                S.h[5] = Ca;
                Nb(this.pinger, f, B, this.i, c)
            } catch (B) {
                try {
                    Nb(this.pinger, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Jb(B),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (da) {}
            }
            return !0
        }
    };

    function Nb(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof Ib ? e = c : (e = new Ib, bb(c, (h, l) => {
                var k = e;
                const t = k.j++;
                h = Db(l, h);
                k.g.push(t);
                k.h[t] = h
            }));
            const g = Hb(e, "/pagead/gen_204?id=" + b + "&");
            g && db(m, g)
        } catch (e) {}
    }

    function Pb() {
        var a = Mb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class Qb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Mb, U;
    const V = new Cb;
    var Rb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Bb, void 0), V.h.length = 0))
    };
    (a => {
        Mb = a ? ? new Qb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Pb();
        U = new Ob(V);
        U.h = b => {
            const c = fb;
            0 !== c && (b.jc = String(c), b.shv = gb(c))
        };
        U.i = !0;
        "complete" == window.document.readyState ? Rb() : V.g && M(window, "load", () => {
            Rb()
        })
    })();
    var W = (a, b) => Lb(a, b);

    function Sb(a) {
        if (a.g.m && a.g.W) {
            const b = Ka(a.g.g);
            b && null != H(b, 5) && null != H(b, 6) && (a.i = new rb(H(b, 5) ? ? "", H(b, 19) ? ? ""));
            M(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var f = d.search(ab),
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
                            }, c = new Oa, null != d && (null != d.J && K(c, 1, d.J), null != d.aa && K(c, 3, d.aa), null != d.label && K(c, 6, d.label), null != d.M && K(c, 7, d.M), null != d.K && K(c, 8, d.K)), null != (d = Pa(m).fence)) {
                            f = d.reportEvent;
                            a: {
                                ra = !0;
                                try {
                                    var h = JSON.stringify(c.toJSON(), ua);
                                    break a
                                } finally {
                                    ra = !1
                                }
                                h = void 0
                            }
                            f.call(d, {
                                eventType: "interaction",
                                eventData: h,
                                destination: ["buyer"]
                            })
                        }
                    } else h = c.g + "&label=closebutton_whythisad_click", h += "&label_instance=1", c.h && (h += "&cid=" + c.h), db(window, h)
                }
            }))
        }
    }

    function Tb(a) {
        if (a.g.X) M(a.g.i, "click", W(365, b => {
            const c = O.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) M(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (M(a.g.j, "click", () => a.h()), M(a.g.j, "keydown", b => {
                "Enter" !== b.code && "Space" !== b.code || a.h()
            })), a.g.Z && a.g.h && M(a.g.h, "click", () => a.h())), a.g.R) Ub(a);
        else {
            M(a.g.i, "mouseover", W(367, () => Ub(a)));
            M(a.g.i, "mouseout", W(369,
                () => Vb(a, 500)));
            M(a.g.i, "touchstart", W(368, () => Ub(a)), Ra);
            const b = W(370, () => Vb(a, 4E3));
            M(a.g.i, "mouseup", b);
            M(a.g.i, "touchend", b);
            M(a.g.i, "touchcancel", b);
            a.g.m && M(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Ub(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function Vb(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => Wb(a), b)
    }

    function Yb(a) {
        const b = a.g.D;
        void 0 !== b && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            P(b, "abgacfo")
        }))
    }

    function Wb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class Zb {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.Y || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.S ? Sb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (Q(this.g.s, a), Q(this.g.h, a), Q(this.g.B, b), Q(this.g.A, b)) : Q(this.g.A, a)), Tb(this), this.g.enableNativeJakeUi && P(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (P(document.body, "goog_delegate_active"), P(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && Za(this.g.j), setTimeout(() => {
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

    function $b(a) {
        if (!a.g && (a.g = !0, O.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Na(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new qb(a);
            new b(a)
        }
    }
    class ac {
        constructor(a) {
            var b = bc;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            Xa("goog_delegate_deferred") ? void 0 !== O.goog_delegate_deferred_token ? $b(this) : (a = () => {
                $b(this)
            }, O.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : $b(this)
        }
    };
    var cc = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class dc {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function ec() {
        const {
            promise: a,
            resolve: b
        } = new dc;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function fc(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = ec();
        a[5] = c;
        b();
        return c
    }

    function gc(a, b) {
        return fc(a, () => {
            var c = a.document;
            const d = cb("SCRIPT", c);
            d.src = b instanceof Va && b.constructor === Va ? b.g : "type_error:TrustedResourceUrl";
            if (!(void 0) ? .ba) {
                var f;
                (f = (f = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? f.nonce || f.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", f)
            }(c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function hc(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === Ua) {
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
                Ua = b
            } else Ua = b
        }
        a = (b = Ua) ? b.createScriptURL(a) : a;
        return new Va(a, Wa)
    };

    function ic(a) {
        cc([a]);
        new ac(a)
    }

    function jc(a) {
        a.g.u ? a.g.u.expandAttributionCard() : (Kb(U, 373, () => {
            Wb(a.h);
            Yb(a.h)
        }), gc(window, hc(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(H(a.g.g,33)??"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.u = b;
            b.expandAttributionCard()
        }), ib())
    }
    var bc = class {
        constructor(a) {
            this.g = a;
            this.h = new Zb(this.g, W(359, () => jc(this)))
        }
    };
    fb = 60;
    const kc = hb(60, document.currentScript);
    if (null == kc) throw Error("JSC not found 60");
    const lc = {},
        mc = kc.attributes;
    for (let a = mc.length - 1; 0 <= a; a--) {
        const b = mc[a].name;
        0 === b.indexOf("data-jcp-") && (lc[b.substring(9)] = mc[a].value)
    }
    if (lc["attribution-data"]) ic(JSON.parse(lc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ic ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ic
    };
}).call(this);