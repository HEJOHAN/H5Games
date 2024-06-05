(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        t = {},
        fa = {},
        u = function(a, b, c) {
            if (!c || null != a) {
                c = fa[b];
                if (null == c) return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b]
            }
        },
        v = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in t ? f = t : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(t, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    v("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[u(t.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = function(a) {
            return a.raw = a
        },
        w = function(a) {
            var b = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && a[u(t.Symbol, "iterator")];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        y = function(a) {
            if (!(a instanceof Array)) {
                a = w(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        z = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ja = ea && "function" == typeof u(Object, "assign") ? u(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) z(d, e) && (a[e] = d[e])
            }
            return a
        };
    v("Object.assign", function(a) {
        return a || ja
    }, "es6");
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if (ea && "function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la,
        A = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ob = b.prototype
        },
        ra = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    v("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    v("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.g = (e += Math.random() + 1).toString();
                if (g) {
                    g = w(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!z(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!z(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && z(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && z(g, d) && z(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && z(g, d) && z(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    v("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = u(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var b = new t.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = w(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.B ? l.B.value = k : (l.B = {
                next: this[1],
                G: this[1].G,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.B), this[1].G.next = l.B, this[1].G = l.B, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.B && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.B.G.next = h.B.next, h.B.next.G = h.B.G, h.B.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].G = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).B
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).B) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = u(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[u(t.Symbol, "iterator")] = u(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && z(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var q = m[h];
                        if (k !== k && q.key !== q.key || k === q.key) return {
                            id: l,
                            list: m,
                            index: h,
                            B: q
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    B: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ha(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.G;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.G = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    v("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    v("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    v("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    v("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isInteger").call(Number, b) && Math.abs(b) <= u(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    v("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) z(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    v("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    v("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || u(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    var sa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== sa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[u(t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    v("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && b[u(t.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    v("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = u(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new t.Map;
            if (c) {
                c = w(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return u(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return u(this.g, "values").call(this.g)
        };
        b.prototype.keys = u(b.prototype, "values");
        b.prototype[u(t.Symbol, "iterator")] = u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    v("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) z(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    v("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    v("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = sa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || da
    }, "es_2020");
    v("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? u(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var B = this || self,
        va = function(a) {
            var b = ua("CLOSURE_FLAGS");
            a = b && b[a];
            return null != a ? a : !1
        },
        ua = function(a) {
            a = a.split(".");
            for (var b = B, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        wa = function(a, b, c) {
            a = a.split(".");
            c = c || B;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var xa = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        za = function(a, b) {
            var c = 0;
            a = xa(String(a)).split(".");
            b = xa(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = ya(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ya(0 == f[2].length, 0 == g[2].length) || ya(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        ya = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Aa = va(610401301),
        Ba = va(188588736);
    var Ca, Da = B.navigator;
    Ca = Da ? Da.userAgentData || null : null;

    function Ea(a) {
        return Aa ? Ca ? Ca.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function C(a) {
        var b;
        a: {
            if (b = B.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Fa() {
        return Aa ? !!Ca && 0 < Ca.brands.length : !1
    }

    function Ga() {
        return Fa() ? Ea("Chromium") : (C("Chrome") || C("CriOS")) && !(Fa() ? 0 : C("Edge")) || C("Silk")
    };
    var Ha = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Ia = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Ja(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    var Ka = function(a) {
        Ka[" "](a);
        return a
    };
    Ka[" "] = function() {};
    var La = Fa() ? !1 : C("Trident") || C("MSIE");
    !C("Android") || Ga();
    Ga();
    C("Safari") && (Ga() || (Fa() ? 0 : C("Coast")) || (Fa() ? 0 : C("Opera")) || (Fa() ? 0 : C("Edge")) || (Fa() ? Ea("Microsoft Edge") : C("Edg/")) || Fa() && Ea("Opera"));
    var Ma = {},
        Na = null,
        Pa = function(a) {
            var b = [];
            Oa(a, function(c) {
                b.push(c)
            });
            return b
        },
        Oa = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Na[l];
                    if (null != m) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Qa();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Qa = function() {
            if (!Na) {
                Na = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ma[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Na[f] && (Na[f] = e)
                    }
                }
            }
        };
    var Ra = "undefined" !== typeof Uint8Array,
        Sa = !La && "function" === typeof btoa;

    function Ta() {
        return "function" === typeof BigInt
    };
    var D = 0,
        Ua = 0;

    function Va(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = w(Wa(c, a)), b = c.next().value, a = c.next().value, c = b);
        D = c >>> 0;
        Ua = a >>> 0
    }

    function Xa(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Ta() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Ya(c) + Ya(a));
        return c
    }

    function Ya(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Za() {
        var a = D,
            b = Ua;
        b & 2147483648 ? Ta() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = w(Wa(a, b)), a = b.next().value, b = b.next().value, a = "-" + Xa(a, b)) : a = Xa(a, b);
        return a
    }

    function Wa(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function $a(a) {
        return Array.prototype.slice.call(a)
    };

    function ab(a) {
        return "function" === typeof t.Symbol && "symbol" === typeof(0, t.Symbol)() ? (0, t.Symbol)() : a
    }
    var bb = ab(),
        cb = ab("0di");
    var db = bb ? function(a, b) {
        a[bb] |= b
    } : function(a, b) {
        void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

    function F(a, b, c) {
        return c ? a | b : a & ~b
    }
    var G = bb ? function(a) {
            return a[bb] | 0
        } : function(a) {
            return a.g | 0
        },
        H = bb ? function(a) {
            return a[bb]
        } : function(a) {
            return a.g
        },
        K = bb ? function(a, b) {
            a[bb] = b;
            return a
        } : function(a, b) {
            void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };

    function eb(a, b) {
        K(b, (a | 0) & -14591)
    }

    function fb(a, b) {
        K(b, (a | 34) & -14557)
    }

    function gb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var hb = {},
        ib = {};

    function jb(a) {
        return !(!a || "object" !== typeof a || a.g !== ib)
    }

    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var lb;

    function mb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = G(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? u(b, "includes").call(b, c) : b.has(c)))) return !1;
        K(a, d | 1);
        return !0
    }
    var nb, ob = [];
    K(ob, 55);
    nb = Object.freeze(ob);

    function pb(a) {
        if (a & 2) throw Error();
    }
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var qb;

    function rb(a) {
        if (qb) throw Error("");
        qb = function(b) {
            B.setTimeout(function() {
                a(b)
            }, 0)
        }
    }

    function sb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        if (qb) try {
            qb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
        return a
    };

    function tb(a) {
        if ("boolean" !== typeof a) {
            var b = typeof a;
            throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
        }
        return a
    }
    var ub = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function vb(a) {
        var b = typeof a;
        return "number" === b ? u(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : ub.test(a)
    }

    function L(a) {
        if (null != a) {
            if (!u(Number, "isFinite").call(Number, a)) throw sb("enum");
            a |= 0
        }
        return a
    }

    function wb(a) {
        if ("number" !== typeof a) throw sb("int32");
        if (!u(Number, "isFinite").call(Number, a)) throw sb("int32");
        return a | 0
    }

    function xb(a) {
        return null == a ? a : wb(a)
    }

    function yb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return u(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }

    function zb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return u(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }

    function Ab(a) {
        if (null != a) {
            var b = !!b;
            if (!vb(a)) throw sb("int64");
            "string" === typeof a ? a = Bb(a) : b ? (a = u(Math, "trunc").call(Math, a), u(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), Cb(b) ? a = b : (Va(a), a = Za()))) : a = Db(a)
        }
        return a
    }

    function Cb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function Db(a) {
        a = u(Math, "trunc").call(Math, a);
        if (!u(Number, "isSafeInteger").call(Number, a)) {
            Va(a);
            var b = D,
                c = Ua;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Bb(a) {
        var b = u(Math, "trunc").call(Math, Number(a));
        if (u(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        if (!Cb(a)) {
            if (16 > a.length) Va(Number(a));
            else if (Ta()) a = BigInt(a), D = Number(a & BigInt(4294967295)) >>> 0, Ua = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                b = +("-" === a[0]);
                Ua = D = 0;
                for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Ua *= 1E6, D = 1E6 * D + d, 4294967296 <= D && (Ua += u(Math, "trunc").call(Math, D / 4294967296), Ua >>>= 0, D >>>= 0);
                b && (b = w(Wa(D, Ua)), a = b.next().value, b = b.next().value, D = a, Ua = b)
            }
            a = Za()
        }
        return a
    }

    function Eb(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function M(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Fb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Gb(a, b, c) {
        if (null != a && "object" === typeof a && a.aa === hb) return a;
        if (Array.isArray(a)) {
            var d = G(a),
                e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && K(a, e);
            return new b(a)
        }
    };
    var Hb;

    function Ib(a, b) {
        Hb = b;
        a = new a(b);
        Hb = void 0;
        return a
    }

    function N(a, b, c) {
        null == a && (a = Hb);
        Hb = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = G(a);
            if (d & 2048) throw Error();
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (kb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b) throw Error();
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b) throw Error();
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        K(a, d);
        return a
    };

    function Jb(a, b) {
        return Kb(b)
    }

    function Kb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (mb(a, void 0, 0)) return
                    } else if (Ra && null != a && a instanceof Uint8Array) {
                    if (Sa) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        Qa();
                        b = Ma[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e],
                                h = a[e + 1],
                                k = a[e + 2],
                                l = b[g >> 2];
                            g = b[(g & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + g + h + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                            case 2:
                                l = a[e + 1], k = b[(l & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Lb(a, b, c) {
        a = $a(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Mb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = mb(a, void 0, 0) ? void 0 : e && G(a) & 2 ? a : Nb(a, b, c, void 0 !== d, e);
            else if (kb(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Mb(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Nb(a, b, c, d, e) {
        var f = d || c ? G(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = $a(a);
        for (var g = 0; g < a.length; g++) a[g] = Mb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Ob(a) {
        return a.aa === hb ? a.toJSON() : Kb(a)
    };

    function Pb(a, b, c) {
        c = void 0 === c ? fb : c;
        if (null != a) {
            if (Ra && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? K(a, (d | 34) & -12293) : Nb(a, Pb, d & 4 ? fb : c, !0, !0)
            }
            a.aa === hb && (c = a.i, d = H(c), a = d & 2 ? a : Ib(a.constructor, Qb(c, d, !0)));
            return a
        }
    }

    function Qb(a, b, c) {
        var d = c || b & 2 ? fb : eb,
            e = !!(b & 32);
        a = Lb(a, b, function(f) {
            return Pb(f, e, d)
        });
        db(a, 32 | (c ? 2 : 0));
        return a
    }

    function Rb(a) {
        var b = a.i,
            c = H(b);
        return c & 2 ? Ib(a.constructor, Qb(b, c, !1)) : a
    };
    var Tb = function(a, b) {
            a = a.i;
            return Sb(a, H(a), b)
        },
        Sb = function(a, b, c, d) {
            if (-1 === c) return null;
            if (c >= gb(b)) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var e = a.length;
                if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
                b = c + (+!!(b & 512) - 1);
                if (b < e) return a[b]
            }
        },
        P = function(a, b, c) {
            var d = a.i,
                e = H(d);
            pb(e);
            O(d, e, b, c);
            return a
        };

    function O(a, b, c, d, e) {
        var f = gb(b);
        if (c >= f || e) {
            var g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && K(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Vb(a, b, c) {
        a = a.i;
        var d = H(a),
            e = 2 & d ? 1 : 2,
            f = Wb(a, d, b),
            g = G(f);
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f)) f = $a(f), g = Xb(g, d, !1), d = O(a, d, b, f);
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = Yb(g, d);
            g = F(g, 20, !0);
            g = F(g, 4096, !1);
            g = F(g, 8192, !1);
            K(f, g);
            2 & g && Object.freeze(f)
        }
        Zb(g) || (c = g, (h = 1 === e) ? g = F(g, 2, !0) : g = F(g, 32, !1), g !== c && K(f, g), h && Object.freeze(f));
        2 === e && Zb(g) && (f = $a(f), g = Xb(g, d, !1), K(f, g), O(a, d, b, f));
        return f
    }

    function Wb(a, b, c) {
        a = Sb(a, b, c);
        return Array.isArray(a) ? a : nb
    }

    function Yb(a, b) {
        var c = !1;
        0 === a && (a = Xb(a, b, c));
        return a = F(a, 1, !0)
    }

    function Zb(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function $b(a, b, c, d) {
        var e = a.i,
            f = H(e);
        pb(f);
        if (null == c) return O(e, f, b), a;
        var g = G(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (!(4 & g))
            for (g = 21, k && (c = $a(c), h = 0, g = Xb(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = $a(c), h = 0, g = Xb(g, f, !0));
        g !== h && K(c, g);
        O(e, f, b, c);
        return a
    }

    function Q(a, b, c, d) {
        var e = a.i,
            f = H(e);
        pb(f);
        O(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    var bc = function(a, b, c, d) {
            var e = a.i,
                f = H(e);
            pb(f);
            (c = ac(e, f, c)) && c !== b && null != d && (f = O(e, f, c));
            O(e, f, b, d);
            return a
        },
        cc = function(a, b, c) {
            a = a.i;
            return ac(a, H(a), b) === c ? c : -1
        },
        dc = function(a, b) {
            a = a.i;
            return ac(a, H(a), b)
        };

    function ac(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != Sb(a, b, f) && (0 !== d && (b = O(a, b, d)), d = f)
        }
        return d
    }

    function ec(a, b, c, d) {
        a = a.i;
        var e = H(a),
            f = Sb(a, e, c, d);
        b = Gb(f, b, e);
        b !== f && null != b && O(a, e, c, b, d);
        return b
    }
    var fc = function(a, b) {
            (a = ec(a, b, 1, !1)) ? b = a: (a = b[cb]) ? b = a : (a = new b, db(a.i, 34), b = b[cb] = a);
            return b
        },
        R = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = ec(a, b, c, d);
            if (null == b) return b;
            a = a.i;
            var e = H(a);
            if (!(e & 2)) {
                var f = Rb(b);
                f !== b && (b = f, O(a, e, c, b, d))
            }
            return b
        },
        S = function(a, b, c) {
            a = a.i;
            var d = H(a),
                e = d,
                f = !(2 & d),
                g = !!(2 & e),
                h = g ? 1 : 2;
            d = 1 === h;
            h = 2 === h;
            f && (f = !g);
            g = Wb(a, e, c);
            var k = G(g),
                l = !!(4 & k);
            if (!l) {
                k = Yb(k, e);
                var m = g,
                    q = e,
                    p = !!(2 & k);
                p && (q = F(q, 2, !0));
                for (var r = !p, J = !0, x = 0, E = 0; x < m.length; x++) {
                    var I = Gb(m[x], b, q);
                    if (I instanceof b) {
                        if (!p) {
                            var qa = !!(G(I.i) & 2);
                            r && (r = !qa);
                            J && (J = qa)
                        }
                        m[E++] = I
                    }
                }
                E < x && (m.length = E);
                k = F(k, 4, !0);
                k = F(k, 16, J);
                k = F(k, 8, r);
                K(m, k);
                p && Object.freeze(m)
            }
            b = !!(8 & k) || d && !g.length;
            if (f && !b) {
                Zb(k) && (g = $a(g), k = Xb(k, e, !1), e = O(a, e, c, g));
                b = g;
                f = k;
                for (m = 0; m < b.length; m++) k = b[m], q = Rb(k), k !== q && (b[m] = q);
                f = F(f, 8, !0);
                f = F(f, 16, !b.length);
                K(b, f);
                k = f
            }
            Zb(k) || (b = k, d ? k = F(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : k = F(k, 32, !1), k !== b && K(g, k), d && Object.freeze(g));
            h && Zb(k) && (g = $a(g), k = Xb(k, e, !1), K(g, k), O(a, e, c, g));
            return g
        },
        gc = function(a, b, c) {
            null == c && (c = void 0);
            return P(a, b, c)
        },
        hc = function(a, b, c, d) {
            null == d && (d = void 0);
            return bc(a, b, c, d)
        },
        ic = function(a, b, c) {
            var d = a.i,
                e = H(d);
            pb(e);
            if (null == c) return O(d, e, b), a;
            for (var f = G(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, q = 0; q < c.length; q++) {
                var p = c[q];
                h || (p = !!(G(p.i) & 2), l && (l = !p), m && (m = p))
            }
            h || (f = F(f, 5, !0), f = F(f, 8, l), f = F(f, 16, m));
            k && f !== g && (c = $a(c), g = 0, f = Xb(f, e, !0));
            f !== g && K(c, f);
            O(d, e, b, c);
            return a
        };

    function Xb(a, b, c) {
        a = F(a, 2, !!(2 & b));
        a = F(a, 32, !!(32 & b) && c);
        return a = F(a, 2048, !1)
    }

    function jc(a, b) {
        return null != a ? a : b
    }
    var kc = function(a, b) {
            a = Tb(a, b);
            return jc(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, !1)
        },
        lc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return jc(yb(Tb(a, b)), c)
        },
        mc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return jc(zb(Tb(a, b)), c)
        },
        nc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            a = Tb(a, b);
            var d;
            null == a ? d = a : vb(a) ? "number" === typeof a ? d = Db(a) : d = Bb(a) : d = void 0;
            return jc(d, c)
        },
        oc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            a = a.i;
            var d = H(a),
                e = Sb(a, d, b);
            var f = null == e || "number" === typeof e ? e : "NaN" === e || "Infinity" === e || "-Infinity" === e ? Number(e) : void 0;
            null != f && f !== e && O(a, d, b, f);
            return jc(f, c)
        },
        T = function(a, b) {
            return jc(Fb(Tb(a, b)), "")
        },
        U = function(a, b) {
            var c = 0;
            c = void 0 === c ? 0 : c;
            a = Tb(a, b);
            a = null == a ? a : u(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
            return jc(a, c)
        };
    var V = function(a, b, c) {
        this.i = N(a, b, c)
    };
    V.prototype.toJSON = function() {
        return lb ? pc(this, this.i, !1) : pc(this, Nb(this.i, Ob, void 0, void 0, !1), !0)
    };
    var qc = function(a) {
        lb = !0;
        try {
            return JSON.stringify(a.toJSON(), Jb)
        } finally {
            lb = !1
        }
    };
    V.prototype.aa = hb;

    function pc(a, b, c) {
        var d = Ba ? void 0 : a.constructor.u;
        var e = H(c ? a.i : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (kb(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g)
                    if (Object.prototype.hasOwnProperty.call(g, l)) {
                        var m = g[l];
                        if (Array.isArray(m)) {
                            var q = m;
                            if (mb(m, d, +l) || jb(m) && 0 === m.size) m = null;
                            m != q && (k = !0)
                        }
                        null != m ? h[l] = m : k = !0
                    }
                if (k) {
                    for (var p in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            p = a - 1;
            c = b[p];
            p -= l;
            if (!(null == c || mb(c, d, p) || jb(c) && 0 === c.size)) break;
            var r = !0
        }
        if (!f && !r) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function rc() {
        var a = !W(sc).g,
            b = tc();
        if (!a) throw Error(b && b() || String(a));
    }
    var uc = void 0;

    function tc() {
        var a = uc;
        uc = void 0;
        return a
    };

    function vc(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                db(b, 32);
                b = Ib(a, b)
            }
            return b
        }
    };
    var wc = function(a) {
        this.i = N(a)
    };
    A(wc, V);
    wc.u = [6, 4];
    var xc = function(a) {
        this.i = N(a)
    };
    A(xc, V);
    var yc = vc(xc);
    xc.u = [4, 5, 6];
    var Bc = function(a, b) {
        this.g = a === zc && b || "";
        this.j = Ac
    };
    Bc.prototype.toString = function() {
        return this.g
    };
    var Ac = {},
        zc = {};
    var Cc = function(a) {
            this.g = a;
            this.defaultValue = !1
        },
        Dc = function(a) {
            this.g = a;
            this.defaultValue = 0
        };
    var Ec = new Cc(203);
    var Fc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Gc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var W = function(a) {
        var b = "X";
        if (a.X && a.hasOwnProperty(b)) return a.X;
        b = new a;
        return a.X = b
    };
    var Hc = function() {
        var a = {};
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function() {}
    };

    function Ic(a) {
        return W(Hc).j(a.g, a.defaultValue)
    }

    function Jc() {
        var a = Kc;
        return W(Hc).l(a.g, a.defaultValue)
    };

    function Lc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Mc = function(a) {
        this.g = a
    };
    Mc.prototype.toString = function() {
        return this.g + ""
    };
    var Nc = function(a) {
            return a instanceof Mc && a.constructor === Mc ? a.g : "type_error:TrustedResourceUrl"
        },
        Oc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Pc = {},
        Qc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var Rc = {},
        Sc = function(a) {
            this.g = a
        };
    Sc.prototype.toString = function() {
        return this.g.toString()
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Tc(a, b) {
        b = void 0 === b ? {} : b;
        a = '<script src="' + Uc(Nc(a).toString()) + '"';
        b.async && (a += " async");
        b.Ea && (a += ' custom-element="' + Uc(b.Ea) + '"');
        b.defer && (a += " defer");
        b.id && (a += ' id="' + Uc(b.id) + '"');
        b.nonce && (a += ' nonce="' + Uc(b.nonce) + '"');
        b.type && (a += ' type="' + Uc(b.type) + '"');
        b.sa && (a += ' crossorigin="' + Uc(b.sa) + '"');
        return new Sc(a + ">\x3c/script>", Rc)
    }

    function Uc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    };

    function Vc(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            Na: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Wc(a) {
        var b = ra.apply(1, arguments);
        if (0 === b.length) return new Mc(a[0], Pc);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return new Mc(c, Pc)
    }

    function Xc(a, b) {
        a = Vc(Nc(a).toString());
        var c = a.Na,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return new Mc(a.path + c + a.hash, Pc)
    };

    function Yc(a) {
        var b, c;
        return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    };

    function Zc(a, b) {
        a.src = Nc(b);
        (b = Yc(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };

    function $c(a, b) {
        a.write(b instanceof Sc && b.constructor === Sc ? b.g : "type_error:SafeHtml")
    };
    var ad = function() {
        return Aa && Ca ? !Ca.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var bd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        cd = function(a) {
            return a ? decodeURI(a) : a
        },
        dd = /#|$/,
        ed = function(a, b) {
            var c = a.search(dd);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    var fd = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Ka(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        gd = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? B : c;
            for (var d = 0; c && 40 > d++ && (!b && !fd(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        hd = function(a) {
            var b = a;
            gd(function(c) {
                b = c;
                return !1
            });
            return b
        },
        id = function(a) {
            return fd(a.top) ? a.top : null
        },
        jd = function() {
            if (!t.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                t.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        kd = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        ld = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        md = /^(-?[0-9.]{1,30})$/,
        nd = Fc(function() {
            return (Aa && Ca ? Ca.mobile : !ad() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))) ? 2 : ad() ? 1 : 0
        });

    function od(a, b) {
        if (a.length && b.head) {
            a = w(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = pd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var qd = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                var b = Object,
                    c = b.defineProperty,
                    d = void 0;
                d = void 0 === d ? Math.random : d;
                var e = Math.floor(d() * Math.pow(2, 52));
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        pd = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var rd = {
        fb: 0,
        eb: 1,
        ab: 2,
        Va: 3,
        bb: 4,
        Wa: 5,
        cb: 6,
        Ya: 7,
        Za: 8,
        Ua: 9,
        Xa: 10,
        gb: 11
    };
    var sd = {
        ib: 0,
        jb: 1,
        hb: 2
    };
    var td = function(a) {
        this.i = N(a)
    };
    A(td, V);
    td.prototype.getVersion = function() {
        return lc(this, 2)
    };
    td.u = [3];

    function ud(a) {
        return Pa(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2), u(n, "padStart")).call(n, 8, "0")
        }).join("")
    }

    function vd(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function wd(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function xd(a) {
        var b = ud(a),
            c = vd(b.slice(0, 6));
        a = vd(b.slice(6, 12));
        var d = new td;
        c = Q(d, 1, xb(c), 0);
        a = Q(c, 2, xb(a), 0);
        b = b.slice(12);
        c = vd(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (0 === e.length) throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = 0 === vd(e[0]);
            e = e.slice(1);
            var h = yd(e, b),
                k = 0 === d.length ? 0 : d[d.length - 1];
            k = wd(h) + k;
            e = e.slice(h.length);
            if (g) d.push(k);
            else {
                g = yd(e, b);
                h = wd(g);
                for (var l = 0; l <= h; l++) d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (0 < e.length) throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return $b(a, 3, d, wb)
    }

    function yd(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var zd = "a".charCodeAt(),
        Ad = Lc(rd),
        Bd = Lc(sd);
    var Cd = function(a) {
        this.i = N(a)
    };
    A(Cd, V);
    var Dd = function() {
            var a = new Cd;
            return Q(a, 1, Ab(0), "0")
        },
        Ed = function(a) {
            var b = nc(a, 1);
            a = lc(a, 2);
            return new Date(1E3 * b + a / 1E6)
        };
    var Fd = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        Id = function(a) {
            var b = X(a, 16);
            return !0 === !!X(a, 1) ? (a = Gd(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : Hd(a, b)
        },
        Gd = function(a) {
            for (var b = X(a, 12), c = []; b--;) {
                var d = !0 === !!X(a, 1),
                    e = X(a, 16);
                if (d)
                    for (d = X(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        Hd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (X(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        X = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    Fd.prototype.skip = function(a) {
        this.g += a
    };
    var Kd = function(a) {
            try {
                var b = Pa(a.split(".")[0]).map(function(d) {
                        return (n = d.toString(2), u(n, "padStart")).call(n, 8, "0")
                    }).join(""),
                    c = new Fd(b);
                b = {};
                b.tcString = a;
                b.gdprApplies = !0;
                c.skip(78);
                b.cmpId = X(c, 12);
                b.cmpVersion = X(c, 12);
                c.skip(30);
                b.tcfPolicyVersion = X(c, 6);
                b.isServiceSpecific = !!X(c, 1);
                b.useNonStandardStacks = !!X(c, 1);
                b.specialFeatureOptins = Jd(Hd(c, 12, Bd), Bd);
                b.purpose = {
                    consents: Jd(Hd(c, 24, Ad), Ad),
                    legitimateInterests: Jd(Hd(c, 24, Ad), Ad)
                };
                b.purposeOneTreatment = !!X(c, 1);
                b.publisherCC = String.fromCharCode(zd + X(c, 6)) + String.fromCharCode(zd + X(c, 6));
                b.vendor = {
                    consents: Jd(Id(c), null),
                    legitimateInterests: Jd(Id(c), null)
                };
                return b
            } catch (d) {
                return null
            }
        },
        Jd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = w(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = w(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var Ld = function(a) {
        this.i = N(a)
    };
    A(Ld, V);
    var Md = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Nd = null;

    function Od(a) {
        a = void 0 === a ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Pd(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = pd("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Gc(e, "load", f);
            Gc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Rd = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            kd(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Qd(d, c)
        },
        Qd = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : Pd(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };

    function Sd(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Ba] = d.xa, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Y
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Y
            }).map(c)])
        } catch (d) {
            return Td(d, b), ""
        }
    }

    function Td(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a)),
                d = c.toString();
            c.name && -1 == d.indexOf(c.name) && (d += ": " + c.name);
            c.message && -1 == d.indexOf(c.message) && (d += ": " + c.message);
            if (c.stack) {
                var e = c.stack;
                a = d;
                try {
                    -1 == e.indexOf(a) && (e = a + "\n" + e);
                    for (var f; e != f;) f = e, e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    d = e.replace(RegExp("\n *", "g"), "\n")
                } catch (g) {
                    d = a
                }
            }
            Rd({
                m: d,
                b: U(b, 1) || null,
                v: T(b, 2) || null
            }, "rcs_internal")
        } catch (g) {}
    }
    var Ud = function(a, b) {
        var c = new Ld;
        a = Q(c, 1, L(a), 0);
        b = Q(a, 2, M(b), "");
        a = b.i;
        c = H(a);
        this.l = c & 2 ? b : Ib(b.constructor, Qb(a, c, !0))
    };
    var Vd = function(a) {
        this.i = N(a)
    };
    A(Vd, V);
    var Wd = function(a) {
        this.i = N(a)
    };
    A(Wd, V);
    var Xd = function(a, b) {
            return Q(a, 1, L(b), 0)
        },
        Yd = function(a, b) {
            return Q(a, 2, L(b), 0)
        };
    var Zd = function(a) {
        this.i = N(a)
    };
    A(Zd, V);
    var $d = [1, 2];
    var ae = function(a) {
        this.i = N(a)
    };
    A(ae, V);
    var be = function(a, b) {
            return gc(a, 1, b)
        },
        ce = function(a, b) {
            return ic(a, 2, b)
        },
        de = function(a, b) {
            return $b(a, 4, b, wb)
        },
        ee = function(a, b) {
            return ic(a, 5, b)
        },
        fe = function(a, b) {
            return Q(a, 6, L(b), 0)
        };
    ae.u = [2, 4, 5];
    var ge = function(a) {
        this.i = N(a)
    };
    A(ge, V);
    ge.u = [5];
    var he = [1, 2, 3, 4];
    var ie = function(a) {
        this.i = N(a)
    };
    A(ie, V);
    ie.u = [2, 3];
    var je = function(a) {
        this.i = N(a)
    };
    A(je, V);
    je.prototype.getTagSessionCorrelator = function() {
        return nc(this, 2)
    };
    var le = function(a) {
            var b = new je;
            return hc(b, 4, ke, a)
        },
        ke = [4, 5, 7, 8];
    var me = function(a) {
        this.i = N(a)
    };
    A(me, V);
    me.u = [3];
    var ne = function(a) {
        this.i = N(a)
    };
    A(ne, V);
    ne.u = [4, 5];
    var oe = function(a) {
        this.i = N(a)
    };
    A(oe, V);
    oe.prototype.getTagSessionCorrelator = function() {
        return nc(this, 1)
    };
    oe.u = [2];
    var pe = function(a) {
        this.i = N(a)
    };
    A(pe, V);
    var qe = [4, 6];
    var re = function() {
        Ud.apply(this, arguments)
    };
    A(re, Ud);
    var se = function() {
        re.apply(this, arguments)
    };
    A(se, re);
    se.prototype.Sa = function() {
        this.I.apply(this, y(ra.apply(0, arguments).map(function(a) {
            return {
                Y: !0,
                Ba: 2,
                xa: a.toJSON()
            }
        })))
    };
    se.prototype.ba = function() {
        this.I.apply(this, y(ra.apply(0, arguments).map(function(a) {
            return {
                Y: !0,
                Ba: 4,
                xa: a.toJSON()
            }
        })))
    };
    var te = function(a, b) {
        if (t.globalThis.fetch) t.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var ue = function(a, b, c, d, e, f, g, h) {
        se.call(this, a, b);
        this.N = c;
        this.M = d;
        this.O = e;
        this.K = f;
        this.L = g;
        this.o = h;
        this.g = [];
        this.j = null;
        this.A = !1
    };
    A(ue, se);
    var ve = function(a) {
        null !== a.j && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Sd(a.g, a.l);
            a.M(a.N + "?e=1", b);
            a.g = []
        }
    };
    ue.prototype.I = function() {
        var a = ra.apply(0, arguments),
            b = this;
        try {
            this.L && 65536 <= Sd(this.g.concat(a), this.l).length && ve(this), this.o && !this.A && (this.A = !0, this.o.g(function() {
                ve(b)
            })), this.g.push.apply(this.g, y(a)), this.g.length >= this.K && ve(this), this.g.length && null === this.j && (this.j = setTimeout(function() {
                ve(b)
            }, this.O))
        } catch (c) {
            Td(c, this.l)
        }
    };
    var we = function(a, b, c, d, e, f) {
        ue.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", te, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!t.globalThis.fetch, f)
    };
    A(we, ue);
    var xe = new Cc(501898423),
        ye = new Cc(610843832),
        ze = new Dc(523264412),
        Ae = new Dc(24),
        Kc = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1934, ["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var Be = function(a) {
        this.i = N(a)
    };
    A(Be, V);
    var Ce = function(a) {
        this.i = N(a)
    };
    A(Ce, V);
    var De = function(a) {
        this.i = N(a)
    };
    A(De, V);
    var Ee = function(a) {
        this.i = N(a)
    };
    A(Ee, V);
    var Fe = vc(Ee);
    Ee.u = [7];
    var Ge = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Ge.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.mb;
            d = c.nb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.La
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    Ge.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = xa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Ge.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Ge.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = xa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            La: 0,
            path: void 0,
            domain: void 0
        })
    };

    function He(a) {
        a = Ie(a);
        try {
            var b = a ? Fe(a) : null
        } catch (c) {
            b = null
        }
        return b ? R(b, De, 4) || null : null
    }

    function Ie(a) {
        a = (new Ge(a)).get("FCCDCF", "");
        if (a)
            if (u(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    var Je = function(a) {
            this.g = a;
            this.j = null
        },
        Le = function(a) {
            a.__uspapiPostMessageReady || Ke(new Je(a))
        },
        Ke = function(a) {
            a.j = function(b) {
                var c = "string" === typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__uspapiCall;
                e && "getUSPData" === e.command && a.g.__uspapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__uspapiReturn = {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                })
            };
            a.g.addEventListener("message", a.j);
            a.g.__uspapiPostMessageReady = !0
        };
    Lc(rd).map(function(a) {
        return Number(a)
    });
    Lc(sd).map(function(a) {
        return Number(a)
    });
    var Ne = function(a) {
            this.g = a;
            this.j = null
        },
        Pe = function(a) {
            a.__tcfapiPostMessageReady || Oe(new Ne(a))
        },
        Oe = function(a) {
            a.j = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.j);
            a.g.__tcfapiPostMessageReady = !0
        };
    var Qe = function(a) {
        this.i = N(a)
    };
    A(Qe, V);
    var Re = function(a) {
        this.i = N(a)
    };
    A(Re, V);
    var Se = vc(Re);
    Re.u = [2];

    function Te(a, b) {
        function c(l) {
            if (10 > l.length) return null;
            var m = f(l.slice(0, 4));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }

        function d(l) {
            if (10 > l.length) return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }

        function e(l) {
            if (12 > l.length) return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(8, 12));
            l = h(l);
            return "1" + m + l + "N"
        }

        function f(l) {
            for (var m = [], q = 0, p = 0; p < l.length / 2; p++) m.push(vd(l.slice(q, q + 2))), q += 2;
            return m
        }

        function g(l) {
            return l.every(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }

        function h(l) {
            return l.some(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }
        if (0 === a.length) return null;
        a = a.split(".");
        if (2 < a.length) return null;
        a = ud(a[0]);
        var k = vd(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== k) return null;
        switch (b) {
            case 8:
                return c(a);
            case 10:
            case 12:
            case 9:
                return d(a);
            case 11:
                return e(a);
            default:
                return null
        }
    };
    var Ue = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = pd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var Xe = function(a) {
            this.g = a;
            var b = Ie(this.g.document);
            try {
                var c = b ? Fe(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = R(b, Ce, 5) || null, b = S(b, Be, 7), b = Ve(null != b ? b : []), c = {
                qa: c,
                ua: b
            }) : c = {
                qa: null,
                ua: null
            };
            b = c;
            c = We(b.ua);
            b = b.qa;
            if (null != b && null != Fb(Tb(b, 2)) && 0 !== T(b, 2).length) {
                var d = void 0 !== ec(b, Cd, 1, !1) ? R(b, Cd, 1) : Dd();
                b = {
                    P: T(b, 2),
                    V: Ed(d)
                }
            } else b = null;
            this.o = b && c ? c.V > b.V ? c.P : b.P : b ? b.P : c ? c.P : null;
            this.j = (c = He(a.document)) && null != Fb(Tb(c, 1)) ? T(c, 1) : null;
            this.l = (a = He(a.document)) && null != Fb(Tb(a, 2)) ? T(a, 2) : null
        },
        $e = function(a) {
            a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new Xe(a), Ye(a), Ze(a))
        },
        Ye = function(a) {
            !a.o || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Ue(a.g, "__uspapiLocator"), wa("__uspapi", function() {
                return a.I.apply(a, y(ra.apply(0, arguments)))
            }, a.g), Le(a.g))
        };
    Xe.prototype.I = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var Ve = function(a) {
            a = u(a, "find").call(a, function(b) {
                return 13 === U(b, 1)
            });
            if (null == a ? 0 : null != Fb(Tb(a, 2))) try {
                return Se(T(a, 2))
            } catch (b) {}
            return null
        },
        We = function(a) {
            if (null == a || null == Fb(Tb(a, 1)) || 0 === T(a, 1).length || 0 == S(a, Qe, 2).length) return null;
            var b = T(a, 1);
            try {
                var c = xd(b.split("~")[0]);
                var d = u(b, "includes").call(b, "~") ? b.split("~").slice(1) : []
            } catch (e) {
                return null
            }
            a = S(a, Qe, 2).reduce(function(e, f) {
                return nc(af(e), 1) > nc(af(f), 1) ? e : f
            });
            c = Vb(c, 3, yb).indexOf(lc(a, 1));
            return -1 === c || c >= d.length ? null : {
                P: Te(d[c], lc(a, 1)),
                V: Ed(af(a))
            }
        },
        af = function(a) {
            return void 0 !== ec(a, Cd, 2, !1) ? R(a, Cd, 2) : Dd()
        },
        Ze = function(a) {
            !a.j || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Ue(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], wa("__tcfapi", function() {
                return a.A.apply(a, y(ra.apply(0, arguments)))
            }, a.g), Pe(a.g))
        };
    Xe.prototype.A = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && (2.2 < b || 1 >= b)) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.2",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c) - 1;
                    this.j ? (d = Kd(this.j), d.addtlConsent = null != this.l ? this.l : void 0, d.cmpStatus = "loaded", d.eventStatus = "tcloaded", null != a && (d.listenerId = a), a = d) : a = null;
                    c(a, !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1);
                    break;
                case "getTCData":
                    c(null, !1)
            }
    };
    var bf = function(a) {
        return "string" === typeof a
    };
    var cf = function(a) {
        this.i = N(a)
    };
    A(cf, V);
    cf.u = [2, 8];
    var df = [3, 4, 5],
        ef = [6, 7];

    function ff(a) {
        return null != a ? !a : a
    }

    function gf(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function hf(a, b) {
        var c = S(a, cf, 2);
        if (!c.length) return jf(a, b);
        a = U(a, 1);
        if (1 === a) return ff(hf(c[0], b));
        c = Ia(c, function(d) {
            return function() {
                return hf(d, b)
            }
        });
        switch (a) {
            case 2:
                return gf(c, !1);
            case 3:
                return gf(c, !0)
        }
    }

    function jf(a, b) {
        var c = dc(a, df);
        a: {
            switch (c) {
                case 3:
                    var d = U(a, cc(a, df, 3));
                    break a;
                case 4:
                    d = U(a, cc(a, df, 4));
                    break a;
                case 5:
                    d = U(a, cc(a, df, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply;
                var f = Vb(a, 8, Fb);
                var g = e.call(b, null, y(f))
            } catch (h) {
                return
            }
            e = U(a, 1);
            if (4 === e) return !!g;
            if (5 === e) return null != g;
            if (12 === e) a = T(a, cc(a, ef, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = oc(a, cc(a, ef, 6));
                        break a;
                    case 5:
                        a = T(a, cc(a, ef, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === e) return g === a;
                if (9 === e) return null != g && 0 === za(String(g), a);
                if (null != g) switch (e) {
                    case 7:
                        return g < a;
                    case 8:
                        return g > a;
                    case 12:
                        return bf(a) && bf(g) && (new RegExp(a)).test(g);
                    case 10:
                        return null != g && -1 === za(String(g), a);
                    case 11:
                        return null != g && 1 === za(String(g), a)
                }
            }
        }
    }

    function kf(a, b) {
        return !a || !(!b || !hf(a, b))
    };
    var lf = function(a) {
        this.i = N(a)
    };
    A(lf, V);
    lf.u = [4];
    var mf = function(a) {
        this.i = N(a)
    };
    A(mf, V);
    mf.prototype.getValue = function() {
        return R(this, lf, 2)
    };
    var nf = function(a) {
        this.i = N(a)
    };
    A(nf, V);
    var of = vc(nf);
    nf.u = [5];
    var pf = [1, 2, 3, 6, 7];
    var qf = function(a, b, c) {
            var d = void 0 === d ? new we(6, "unknown", b) : d;
            this.A = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = 0 < a && jd() < 1 / a
        },
        sf = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = Yd(Xd(new Wd, b), c);
                b = fe(ce(be(ee(de(new ae, d), e), g), a.g.slice()), f);
                b = le(b);
                a.j.ba(rf(a, b));
                if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                        return U(h, 1) === U(g, 1) && U(h, 2) === c
                    })) a.g.push(g), 100 < a.g.length && a.g.shift()
            }
        },
        tf = function(a, b, c, d) {
            if (a.l && a.o) {
                var e = new ie;
                b = ic(e, 2, b);
                c = ic(b, 3, c);
                d && Q(c, 1, xb(d), 0);
                d = new je;
                d = hc(d, 7, ke, c);
                a.j.ba(rf(a, d))
            }
        },
        uf = function(a, b, c, d) {
            if (a.l) {
                var e = new Vd;
                b = P(e, 1, xb(b));
                c = P(b, 2, xb(c));
                d = P(c, 3, L(d));
                c = new je;
                d = hc(c, 8, ke, d);
                a.j.ba(rf(a, d))
            }
        },
        rf = function(a, b) {
            var c = Date.now();
            c = u(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
            b = Q(b, 1, Ab(c), "0");
            c = qd(window);
            b = Q(b, 2, Ab(c), "0");
            return Q(b, 6, Ab(a.A), "0")
        };
    var vf = function() {
        var a = {};
        this.C = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var wf = /^true$/.test("false");

    function xf(a, b) {
        switch (b) {
            case 1:
                return U(a, cc(a, pf, 1));
            case 2:
                return U(a, cc(a, pf, 2));
            case 3:
                return U(a, cc(a, pf, 3));
            case 6:
                return U(a, cc(a, pf, 6));
            default:
                return null
        }
    }

    function yf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return kc(a, 1);
            case 7:
                return T(a, 3);
            case 2:
                return oc(a, 2);
            case 3:
                return T(a, 3);
            case 6:
                return Vb(a, 4, Fb);
            default:
                return null
        }
    }
    var zf = Fc(function() {
        if (!wf) return {};
        try {
            var a;
            var b = void 0 === b ? window : b;
            try {
                var c = b.sessionStorage
            } catch (e) {
                c = null
            }
            var d = null == (a = c) ? void 0 : a.getItem("GGDFSSK");
            if (d) return JSON.parse(d)
        } catch (e) {}
        return {}
    });

    function Af(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        W(Bf).l[e] = null != (g = null == (f = W(Bf).l[e]) ? void 0 : f.add(b)) ? g : (new t.Set).add(b);
        e = zf();
        if (null != e[b]) return e[b];
        b = Cf(d)[b];
        if (!b) return c;
        b = of (JSON.stringify(b));
        b = Df(b);
        a = yf(b, a);
        return null != a ? a : c
    }

    function Df(a) {
        var b = W(vf).C;
        if (b) {
            var c = Ja(S(a, mf, 5), function(f) {
                return kf(R(f, cf, 1), b)
            });
            if (c) {
                var d;
                return null != (d = c.getValue()) ? d : null
            }
        }
        var e;
        return null != (e = R(a, lf, 4)) ? e : null
    }
    var Bf = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new t.Map
    };

    function Ef(a, b, c) {
        return !!Af(1, a, void 0 === b ? !1 : b, c)
    }

    function Ff(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Af(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Gf(a, b, c) {
        b = void 0 === b ? "" : b;
        a = Af(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function Hf(a, b, c) {
        b = void 0 === b ? [] : b;
        a = Af(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Cf(a) {
        return W(Bf).j[a] || (W(Bf).j[a] = {})
    }

    function If(a, b) {
        var c = Cf(b);
        kd(a, function(d, e) {
            return c[e] = d
        })
    }

    function Jf(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ha(b, function(h) {
            var k = Cf(h);
            Ha(a, function(l) {
                var m = dc(l, pf),
                    q = xf(l, m);
                if (q) {
                    var p, r, J;
                    var x = null != (J = null == (p = W(Bf).g.get(h)) ? void 0 : null == (r = p.get(q)) ? void 0 : r.slice(0)) ? J : [];
                    a: {
                        p = new ge;
                        switch (m) {
                            case 1:
                                bc(p, 1, he, L(q));
                                break;
                            case 2:
                                bc(p, 2, he, L(q));
                                break;
                            case 3:
                                bc(p, 3, he, L(q));
                                break;
                            case 6:
                                bc(p, 4, he, L(q));
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        $b(p, 5, x, wb);m = p
                    }
                    if (x = m) {
                        var E;
                        x = !(null == (E = W(Bf).l[h]) || !E.has(q))
                    }
                    x && f.push(m);
                    if (E = m) {
                        var I;
                        E = !(null == (I = W(Bf).g.get(h)) || !I.has(q))
                    }
                    E && g.push(m);
                    e || (I = W(Bf), I.g.has(h) || I.g.set(h, new t.Map), I.g.get(h).has(q) || I.g.get(h).set(q, []), d && I.g.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && tf(c, f, g, null != d ? d : void 0)
    }

    function Kf(a, b) {
        var c = Cf(b);
        Ha(a, function(d) {
            var e = of (JSON.stringify(d)),
                f = dc(e, pf);
            (e = xf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Lf() {
        return Ia(u(Object, "keys").call(Object, W(Bf).j), function(a) {
            return Number(a)
        })
    }

    function Mf(a) {
        var b = W(Bf).o;
        0 <= Array.prototype.indexOf.call(b, a, void 0) || If(Cf(4), a)
    };

    function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Nf(a, b, c) {
        return b[a] || c
    }

    function Of(a) {
        Y(5, Ef, a);
        Y(6, Ff, a);
        Y(7, Gf, a);
        Y(8, Hf, a);
        Y(13, Kf, a);
        Y(15, Mf, a)
    }

    function Pf(a) {
        Y(4, function(b) {
            W(vf).C = b
        }, a);
        Y(9, function(b, c) {
            var d = W(vf);
            null == d.C[3][b] && (d.C[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = W(vf);
            null == d.C[4][b] && (d.C[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = W(vf);
            null == d.C[5][b] && (d.C[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = W(vf), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, u(Object, "assign").call(Object, c.C[e], b[e])
        }, a)
    }

    function Qf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var Rf = function() {};
    Rf.prototype.j = function() {};
    Rf.prototype.g = function() {
        return []
    };
    var Sf = function(a, b, c) {
        a.j = function(d, e) {
            Nf(2, b, function() {
                return []
            })(d, c, e)
        };
        a.g = function() {
            return Nf(3, b, function() {
                return []
            })(c)
        }
    };

    function Tf(a, b) {
        try {
            var c = a.split(".");
            a = B;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var Uf = {},
        Vf = {},
        Wf = {},
        Xf = {},
        Yf = (Xf[3] = (Uf[8] = function(a) {
            try {
                return null != ua(a)
            } catch (b) {}
        }, Uf[9] = function(a) {
            try {
                var b = ua(a)
            } catch (c) {
                return
            }
            if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
            return a
        }, Uf[10] = function() {
            return window === window.top
        }, Uf[6] = function(a) {
            var b = W(Rf).g();
            return 0 <= Array.prototype.indexOf.call(b, Number(a), void 0)
        }, Uf[27] = function(a) {
            a = Tf(a, "boolean");
            return void 0 !== a ? a : void 0
        }, Uf[60] = function(a) {
            try {
                return !!B.document.querySelector(a)
            } catch (b) {}
        }, Uf[69] = function(a) {
            var b = B.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.features(), u(n, "includes")).call(n, a))
        }, Uf[70] = function(a) {
            var b = B.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.allowedFeatures(), u(n, "includes")).call(n, a))
        }, Uf), Xf[4] = (Vf[3] = function() {
            return nd()
        }, Vf[6] = function(a) {
            a = Tf(a, "number");
            return void 0 !== a ? a : void 0
        }, Vf), Xf[5] = (Wf[2] = function() {
            return window.location.href
        }, Wf[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, Wf[4] = function(a) {
            a = Tf(a, "string");
            return void 0 !== a ? a : void 0
        }, Wf), Xf);

    function Zf() {
        var a = void 0 === a ? B : a;
        return a.ggeac || (a.ggeac = {})
    };
    var $f = function(a) {
        this.i = N(a)
    };
    A($f, V);
    $f.prototype.getId = function() {
        return lc(this, 1)
    };
    $f.u = [2];
    var ag = function(a) {
        this.i = N(a)
    };
    A(ag, V);
    ag.u = [2];
    var bg = function(a) {
        this.i = N(a)
    };
    A(bg, V);
    bg.u = [2];
    var cg = function(a) {
        this.i = N(a)
    };
    A(cg, V);
    var dg = function(a) {
        this.i = N(a)
    };
    A(dg, V);
    dg.u = [1, 4, 2, 3];

    function eg(a) {
        var b = {};
        return fg((b[0] = new t.Map, b[1] = new t.Map, b[2] = new t.Map, b), a)
    }

    function fg(a, b) {
        for (var c = new t.Map, d = w(u(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = w(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.Aa + f.ya * f.za)
        }
        b = w(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = S(d, ag, 2), e = w(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, 0 !== S(f, $f, 2).length) {
                    var g = mc(f, 8);
                    if (U(f, 4) && !U(f, 13)) {
                        var h = void 0;
                        g = null != (h = c.get(U(f, 4))) ? h : 0;
                        h = mc(f, 1) * S(f, $f, 2).length;
                        c.set(U(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < S(f, $f, 2).length; k++) {
                        var l = {
                            Aa: g,
                            ya: mc(f, 1),
                            za: S(f, $f, 2).length,
                            Ma: k,
                            ta: U(d, 1),
                            R: f,
                            H: S(f, $f, 2)[k]
                        };
                        h.push(l)
                    }
                    gg(a[2], U(f, 10), h) || gg(a[1], U(f, 4), h) || gg(a[0], S(f, $f, 2)[0].getId(), h)
                }
        return a
    }

    function gg(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, y(c));
        return !0
    };

    function hg(a) {
        a = void 0 === a ? jd() : a;
        return function(b) {
            return ld(b + " + " + a) % 1E3
        }
    };
    var ig = [12, 13, 20],
        jg = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            var e = void 0 === d.W ? !1 : d.W;
            d = void 0 === d.Qa ? [] : d.Qa;
            this.J = a;
            this.D = c;
            this.o = {};
            this.W = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            var f;
            if (null === Nd) {
                Nd = "";
                try {
                    b = "";
                    try {
                        b = B.top.location.hash
                    } catch (g) {
                        b = B.location.hash
                    }
                    b && (Nd = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
                } catch (g) {}
            }
            if (f = Nd)
                for (f = w(f.split(",") || []), b = f.next(); !b.done; b = f.next())(b = Number(b.value)) && (this.j[b] = !0);
            d = w(d);
            for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0
        },
        lg = function(a, b, c, d) {
            var e = [],
                f;
            if (f = 9 !== b) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return sf(a.D, b, c, e, [], 4), e;
            f = u(ig, "includes").call(ig, b);
            for (var g = [], h = W(vf).C, k = [], l = w([0, 1, 2]), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                for (var q = w(u(a.J[m], "entries").call(a.J[m])), p = q.next(); !p.done; p = q.next()) {
                    var r = w(p.value);
                    p = r.next().value;
                    r = r.next().value;
                    var J = p,
                        x = r;
                    p = new Zd;
                    r = x.filter(function(Ub) {
                        return Ub.ta === b && !!a.j[Ub.H.getId()] && kf(R(Ub.R, cf, 3), h) && kf(R(Ub.H, cf, 3), h)
                    });
                    if (r.length)
                        for (p = w(r), r = p.next(); !r.done; r = p.next()) k.push(r.value.H);
                    else if (!a.W) {
                        r = void 0;
                        2 === m ? (r = d[1], bc(p, 2, $d, L(J))) : r = d[0];
                        var E = void 0,
                            I = void 0;
                        r = null != (I = null == (E = r) ? void 0 : E(String(J))) ? I : 2 === m && 1 === U(x[0].R, 11) ? void 0 : d[0](String(J));
                        if (void 0 !== r) {
                            J = w(x);
                            for (x = J.next(); !x.done; x = J.next())
                                if (x = x.value, x.ta === b) {
                                    E = r - x.Aa;
                                    var qa = x;
                                    I = qa.ya;
                                    var Me = qa.za;
                                    qa = qa.Ma;
                                    0 <= E && E < I * Me && E % Me === qa && kf(R(x.R, cf, 3), h) && kf(R(x.H, cf, 3), h) && (E = U(x.R, 13), 0 !== E && void 0 !== E && (I = a.l[String(E)], void 0 !== I && I !== x.H.getId() ? uf(a.D, a.l[String(E)], x.H.getId(), E) : a.l[String(E)] = x.H.getId()), k.push(x.H))
                                }
                            0 !== dc(p, $d) && (Q(p, 3, xb(r), 0), g.push(p))
                        }
                    }
                }
            }
            d = w(k);
            for (k = d.next(); !k.done; k = d.next()) k = k.value, l = k.getId(), e.push(l), kg(a, l, f ? 4 : c), Jf(S(k, nf, 2), f ? Lf() : [c], a.D, l);
            sf(a.D, b, c, e, g, 1);
            return e
        },
        kg = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            u(a, "includes").call(a, b) || a.push(b)
        },
        mg = function(a, b) {
            b = b.map(function(c) {
                return new bg(c)
            }).filter(function(c) {
                return !u(ig, "includes").call(ig, U(c, 1))
            });
            a.J = fg(a.J, b)
        },
        ng = function(a, b) {
            Y(1, function(c) {
                a.j[c] = !0
            }, b);
            Y(2, function(c, d, e) {
                return lg(a, c, d, e)
            }, b);
            Y(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Y(12, function(c) {
                return void mg(a, c)
            }, b);
            Y(16, function(c, d) {
                return void kg(a, c, d)
            }, b)
        };
    var og = function() {
            this.g = function() {}
        },
        pg = function(a, b) {
            a.g = Nf(14, b, function() {})
        };

    function qg(a) {
        W(og).g(a)
    };
    var rg, sg, tg, ug, vg, wg;

    function xg(a) {
        var b = a.Ha,
            c = a.C,
            d = a.config,
            e = void 0 === a.Da ? Zf() : a.Da,
            f = void 0 === a.pa ? 0 : a.pa,
            g = void 0 === a.D ? new qf(null != (ug = null == (rg = R(b, cg, 5)) ? void 0 : nc(rg, 2)) ? ug : 0, null != (vg = null == (sg = R(b, cg, 5)) ? void 0 : nc(sg, 4)) ? vg : 0, null != (wg = null == (tg = R(b, cg, 5)) ? void 0 : kc(tg, 3)) ? wg : !1) : a.D;
        a = void 0 === a.J ? eg(S(b, bg, 2)) : a.J;
        e.hasOwnProperty("init-done") ? (Nf(12, e, function() {})(S(b, bg, 2).map(function(h) {
            return h.toJSON()
        })), Nf(13, e, function() {})(S(b, nf, 1).map(function(h) {
            return h.toJSON()
        }), f), c && Nf(14, e, function() {})(c), yg(f, e)) : (ng(new jg(a, f, g, d), e), Of(e), Pf(e), Qf(e), yg(f, e), Jf(S(b, nf, 1), [f], g, void 0, !0), wf = wf || !(!d || !d.kb), qg(Yf), c && qg(c))
    }

    function yg(a, b) {
        var c = b = void 0 === b ? Zf() : b;
        Sf(W(Rf), c, a);
        zg(b, a);
        a = b;
        pg(W(og), a);
        W(Hc).o()
    }

    function zg(a, b) {
        var c = W(Hc);
        c.j = function(d, e) {
            return Nf(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Nf(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Nf(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Nf(8, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function() {
            Nf(15, a, function() {})(b)
        }
    };
    var Ag = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        Bg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Wc(Ag) : c;
            this.l = a;
            this.j = b;
            this.g = c
        };
    var Cg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Dg = function(a, b) {
            var c = Od(b);
            c && Cg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Eg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Od(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Cg(u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Od() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Fg = function(a, b) {
            return Eg(a, b, function(c, d) {
                var e = new Bg;
                var f = void 0 === f ? e.j : f;
                var g = void 0 === g ? e.l : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Md(d, {
                    context: c,
                    id: g
                })), B.google_js_errors = B.google_js_errors || [], B.google_js_errors.push(d), B.error_rep_loaded || (f = B.document, c = pd("SCRIPT", f), Zc(c, e.g), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), B.error_rep_loaded = !0))
            })
        };

    function Z(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Gg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Hg() {
        var a = new t.Set;
        var b = window.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = w(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Ig(a) {
        a = a.id;
        return null != a && (Hg().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift"))
    }

    function Jg(a, b, c) {
        if (!a.sources) return !1;
        switch (Kg(a)) {
            case 2:
                var d = Lg(a);
                if (d) return c.some(function(f) {
                    return Mg(d, f)
                });
                break;
            case 1:
                var e = Ng(a);
                if (e) return b.some(function(f) {
                    return Mg(e, f)
                })
        }
        return !1
    }

    function Kg(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Ng(a) {
        return Og(a, function(b) {
            return b.currentRect
        })
    }

    function Lg(a) {
        return Og(a, function(b) {
            return b.previousRect
        })
    }

    function Og(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Mg(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var Pg = function() {
            var a = {
                ra: !0
            };
            a = void 0 === a ? {
                ra: !1
            } : a;
            this.l = this.j = this.S = this.N = this.K = 0;
            this.la = this.ia = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.L = {};
            this.fa = 0;
            this.O = Infinity;
            this.da = this.ga = this.ha = this.ja = this.oa = this.A = this.na = this.U = this.o = 0;
            this.ea = !1;
            this.T = this.M = this.I = 0;
            this.D = null;
            this.ka = !1;
            this.ca = function() {};
            var b = document.querySelector("[data-google-query-id]");
            this.ma = b ? b.getAttribute("data-google-query-id") : null;
            this.Ca = a
        },
        Qg, Rg, Ug = function() {
            var a = new Pg;
            if (Ic(Ec)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    a.Ca.ra && b.push("event");
                    b = w(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        var d = {
                            type: c,
                            buffered: !0
                        };
                        "event" === c && (d.durationThreshold = 40);
                        Sg(a).observe(d)
                    }
                    Tg(a)
                }
            }
        },
        Sg = function(a) {
            a.D || (a.D = new PerformanceObserver(Fg(640, function(b) {
                Vg(a, b)
            })));
            return a.D
        },
        Tg = function(a) {
            var b = Fg(641, function() {
                    var d = document;
                    2 === (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Wg(a)
                }),
                c = Fg(641, function() {
                    return void Wg(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.ca = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                Sg(a).disconnect()
            }
        },
        Wg = function(a) {
            if (!a.ka) {
                a.ka = !0;
                Sg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Gg("cls", a.K), b += Gg("mls", a.N), b += Z("nls", a.S), window.LayoutShiftAttribution && (b += Gg("cas", a.A), b += Z("nas", a.ja), b += Gg("was", a.oa)), b += Gg("wls", a.U), b += Gg("tls", a.na));
                window.LargestContentfulPaint && (b += Z("lcp", a.ha), b += Z("lcps", a.ga));
                window.PerformanceEventTiming && a.ea && (b += Z("fid", a.da));
                window.PerformanceLongTaskTiming && (b += Z("cbt", a.I), b += Z("mbt", a.M), b += Z("nlt", a.T));
                for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Ig(e.value) && c++;
                b += Z("nif", c);
                c = window.google_unique_id;
                b += Z("ifi", "number" === typeof c ? c : 0);
                c = W(Rf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (B === B.top ? 1 : 0);
                b += a.ma ? "&qqid=" + encodeURIComponent(a.ma) : Z("pvsid", qd(B));
                window.googletag && (b += "&gpt=1");
                c = Math.min(a.g.length - 1, Math.floor((a.D ? a.fa : performance.interactionCount || 0) / 50));
                0 <= c && (c = a.g[c].latency, 0 <= c && (b += Z("inp", c)));
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.ca()
            }
        },
        Xg = function(a, b, c, d) {
            if (!b.hadRecentInput) {
                a.K += Number(b.value);
                Number(b.value) > a.N && (a.N = Number(b.value));
                a.S += 1;
                if (c = Jg(b, c, d)) a.A += b.value, a.ja++;
                if (5E3 < b.startTime - a.ia || 1E3 < b.startTime - a.la) a.ia = b.startTime, a.j = 0, a.l = 0;
                a.la = b.startTime;
                a.j += b.value;
                c && (a.l += b.value);
                a.j > a.U && (a.U = a.j, a.oa = a.l, a.na = b.startTime + b.duration)
            }
        },
        Vg = function(a, b) {
            var c = Qg !== window.scrollX || Rg !== window.scrollY ? [] : Yg,
                d = Zg();
            b = w(b.getEntries());
            for (var e = b.next(), f = {}; !e.done; f = {
                    F: void 0
                }, e = b.next()) switch (f.F = e.value, e = f.F.entryType, e) {
                case "layout-shift":
                    Xg(a, f.F, c, d);
                    break;
                case "largest-contentful-paint":
                    f = f.F;
                    a.ha = Math.floor(f.renderTime || f.loadTime);
                    a.ga = f.size;
                    break;
                case "first-input":
                    e = f.F;
                    a.da = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ea = !0;
                    a.g.some(function(g) {
                        return function(h) {
                            return u(h, "entries").some(function(k) {
                                return g.F.duration === k.duration && g.F.startTime === k.startTime
                            })
                        }
                    }(f)) || $g(a, f.F);
                    break;
                case "longtask":
                    f = Math.max(0, f.F.duration - 50);
                    a.I += f;
                    a.M = Math.max(a.M, f);
                    a.T += 1;
                    break;
                case "event":
                    $g(a, f.F);
                    break;
                default:
                    throw Error("unexpected value " + e + "!");
            }
        },
        $g = function(a, b) {
            ah(a, b);
            var c = a.g[a.g.length - 1],
                d = a.L[b.interactionId];
            if (d || 10 > a.g.length || b.duration > c.latency) d ? (u(d, "entries").push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            }, a.L[b.id] = b, a.g.push(b)), a.g.sort(function(e, f) {
                return f.latency - e.latency
            }), a.g.splice(10).forEach(function(e) {
                delete a.L[e.id]
            })
        },
        ah = function(a, b) {
            b.interactionId && (a.O = Math.min(a.O, b.interactionId), a.o = Math.max(a.o, b.interactionId), a.fa = a.o ? (a.o - a.O) / 7 + 1 : 0)
        },
        Zg = function() {
            var a = u(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(Ig),
                b = [].concat(y(Hg())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            Qg = window.scrollX;
            Rg = window.scrollY;
            return Yg = [].concat(y(a), y(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Yg = [];
    var bh = function(a) {
        this.i = N(a)
    };
    A(bh, V);
    bh.prototype.getVersion = function() {
        return T(this, 2)
    };
    var ch = function(a) {
        this.i = N(a)
    };
    A(ch, V);
    var dh = function(a, b) {
            return P(a, 2, M(b))
        },
        eh = function(a, b) {
            return P(a, 3, M(b))
        },
        fh = function(a, b) {
            return P(a, 4, M(b))
        },
        gh = function(a, b) {
            return P(a, 5, M(b))
        },
        hh = function(a, b) {
            return P(a, 9, M(b))
        },
        ih = function(a, b) {
            return ic(a, 10, b)
        },
        jh = function(a, b) {
            return P(a, 11, null == b ? b : tb(b))
        },
        kh = function(a, b) {
            return P(a, 1, M(b))
        },
        lh = function(a, b) {
            return P(a, 7, null == b ? b : tb(b))
        };
    ch.u = [10, 6];
    var mh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function nh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function oh(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ph(a) {
        if (!oh(a)) return null;
        var b = nh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(mh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function qh(a) {
        var b;
        return jh(ih(gh(dh(kh(fh(lh(hh(eh(new ch, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new bh;
            d = P(d, 1, M(c.brand));
            return P(d, 2, M(c.version))
        })) || []), a.wow64 || !1)
    }

    function rh(a) {
        var b, c;
        return null != (c = null == (b = ph(a)) ? void 0 : b.then(function(d) {
            return qh(d)
        })) ? c : null
    };

    function sh(a, b) {
        var c = {};
        b = (c[0] = hg(b.Oa), c);
        W(Rf).j(a, b)
    };
    var th = {},
        uh = (th[253] = !1, th[246] = [], th[150] = "", th[221] = !1, th[36] = /^true$/.test("false"), th[172] = null, th[260] = void 0, th[251] = null, th),
        sc = function() {
            this.g = !1
        };

    function vh(a) {
        W(sc).g = !0;
        return uh[a]
    }

    function wh(a, b) {
        W(sc).g = !0;
        uh[a] = b
    };
    var xh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;

    function yh(a) {
        return a ? !xh.test(a.src) : !0
    };

    function zh(a) {
        var b = a.Ka,
            c = a.Ta,
            d = a.Ja,
            e = a.Ga,
            f = a.Ia,
            g = yh(a.va);
        a = {};
        var h = {},
            k = {};
        return k[3] = (a[3] = function() {
            return !g
        }, a[59] = function() {
            var l = ra.apply(0, arguments),
                m = u(l, "includes"),
                q = String,
                p;
            var r = void 0 === r ? window : r;
            var J;
            r = null != (J = null == (p = cd(r.location.href.match(bd)[3] || null)) ? void 0 : p.split(".")) ? J : [];
            p = 2 > r.length ? null : "uk" === r[r.length - 1] ? 3 > r.length ? null : ld(r.splice(r.length - 3).join(".")) : ld(r.splice(r.length - 2).join("."));
            return m.call(l, q(p))
        }, a[61] = function() {
            return d
        }, a[63] = function() {
            return d || ".google.ch" === f
        }, a[73] = function(l) {
            return u(c, "includes").call(c, Number(l))
        }, a), k[4] = (h[1] = function() {
            return e
        }, h[4] = function() {
            if (md.test("0")) {
                var l = Number("0");
                l = isNaN(l) ? null : l
            } else l = null;
            return l || 0
        }, h[13] = function() {
            return b || 0
        }, h), k[5] = {}, k
    };

    function Ah(a, b) {
        var c = new dg(vh(246));
        if (!S(c, nf, 1).length && S(a, nf, 1).length) {
            var d = S(a, nf, 1);
            ic(c, 1, d)
        }!S(c, bg, 2).length && S(a, bg, 2).length && (d = S(a, bg, 2), ic(c, 2, d));
        void 0 === ec(c, cg, 5, !1) && void 0 !== ec(a, cg, 5, !1) && (a = R(a, cg, 5), gc(c, 5, a));
        xg({
            Ha: c,
            C: zh(b),
            pa: 2
        })
    };

    function Bh(a, b, c, d, e) {
        a = a.location.host;
        var f = ed(b.src, "domain");
        b = ed(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            W(Hc).g(ze.g, ze.defaultValue) && (g.ppc_eid = W(Hc).g(ze.g, ze.defaultValue).toString());
            a = g
        } else a = void 0;
        if (a) {
            c = [c ? new Bc(zc, "https://pagead2.googlesyndication.com") : new Bc(zc, "https://securepubads.g.doubleclick.net"), new Bc(zc, "/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++) g = c[b], f += g instanceof Bc && g.constructor === Bc && g.j === Ac ? g.g : "type_error:Const";
            c = new Mc(f, Pc);
            c = Oc.exec(Nc(c).toString());
            f = c[3] || "";
            c = new Mc(c[1] + Qc("?", c[2] || "", a) + Qc("#", f), Pc);
            Ch(c, d, e)
        } else e(new t.globalThis.Error("no provided or inferred data"))
    }

    function Ch(a, b, c) {
        var d = new t.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            300 > d.status ? (Dg("13", window), b(204 === d.status ? "" : d.responseText)) : c(new t.globalThis.Error("resp:" + d.status))
        };
        d.onerror = function() {
            return void c(new t.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        };
        d.send()
    };
    var Dh = function() {
            this.o = [];
            this.l = []
        },
        Gh = function(a, b, c, d, e) {
            if (hd(b) === id(b) && c) {
                Eh(a);
                var f = null == e ? void 0 : T(fc(e, wc), 1);
                f && f.length && u(b.location.hostname, "includes").call(b.location.hostname, f) ? Fh(a, void 0, e) : Bh(b.top, c, d, function(g) {
                    return void Fh(a, g)
                }, function(g) {
                    Fh(a, void 0, void 0, g)
                })
            }
        },
        Eh = function(a) {
            vh(260);
            wh(260, function(b) {
                void 0 !== a.g || a.j ? b(a.g, a.j) : a.o.push(b)
            })
        },
        Fh = function(a, b, c, d) {
            a.g = null != b ? b : null == c ? void 0 : qc(c);
            a.A = c;
            !a.A && a.g && a.l.length && (a.A = yc(a.g));
            a.j = d;
            b = w(a.o);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c(a.g, a.j);
            b = w(a.l);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c(a.A, a.j);
            a.o.length = 0;
            a.l.length = 0
        };
    var Hh = function(a) {
        this.i = N(a)
    };
    A(Hh, V);
    var Ih = vc(Hh);
    Hh.u = [10];
    var Kh = function() {
            return [].concat(y(u(Jh, "values").call(Jh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Jh = new t.Map;

    function Lh(a, b, c) {
        if (a.Ra) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new pe,
                e = new oe;
            try {
                var f = qd(window);
                Q(e, 1, Ab(f), "0")
            } catch (p) {}
            try {
                var g = W(Rf).g();
                $b(e, 2, g, wb)
            } catch (p) {}
            try {
                Q(e, 3, M(window.document.URL), "")
            } catch (p) {}
            f = gc(d, 2, e);
            g = new ne;
            b = Q(g, 1, L(b), 0);
            try {
                var h = bf(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                Q(b, 2, M(h), "")
            } catch (p) {}
            try {
                var k = bf(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                Q(b, 3, M(k), "")
            } catch (p) {}
            try {
                var l = bf(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && $b(b, 4, l.split(/\n\s*/), Eb)
            } catch (p) {}
            h = gc(f, 1, b);
            k = new me;
            try {
                Q(k, 1, M(a.Z || a.wa), "")
            } catch (p) {}
            try {
                var m = Kh();
                Q(k, 2, xb(m), 0)
            } catch (p) {}
            try {
                var q = [].concat(y(u(Jh, "keys").call(Jh)));
                $b(k, 3, q, Eb)
            } catch (p) {}
            hc(h, 4, qe, k);
            Q(h, 5, Ab(a.Fa), "0");
            a.Pa.Sa(h)
        }
    };

    function Mh(a, b) {
        try {
            var c = tc();
            if (!bf(a)) {
                var d = c ? c() + "\n" : "";
                throw Error(d + String(a));
            }
            return Ih(a)
        } catch (e) {
            return Lh(b, 838, e), new Hh
        }
    };

    function Nh() {
        var a;
        return null != (a = B.googletag) ? a : B.googletag = {
            cmd: []
        }
    }

    function Oh(a, b) {
        var c = Nh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Ph = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"]),
        Qh = ia(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", ".js"]),
        Rh = ia(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"]),
        Sh = ia(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", ".js"]);

    function Th() {
        var a = sttc,
            b = Uh();
        rb(function(x) {
            Lh(b, 1189, x)
        });
        var c = Nh();
        a = Mh(a, b);
        rc();
        u(Object, "assign").call(Object, uh, c._vars_);
        c._vars_ = uh;
        a && (kc(a, 3) && wh(36, !0), kc(a, 5) && wh(221, !0), T(a, 6) && wh(150, T(a, 6)));
        var d = fc(a, dg),
            e = {
                Ja: kc(a, 5),
                Ka: lc(a, 2),
                Ta: Vb(a, 10, yb),
                Ga: lc(a, 7),
                Ia: T(a, 6)
            };
        a = R(a, xc, 9);
        var f, g = null != (f = c.fifWin) ? f : window,
            h = g.document;
        f = c.fifWin ? window : g;
        Oh("_loaded_", !0);
        var k = Vh(b);
        Oh("cmd", []);
        var l, m = null != (l = Wh(h)) ? l : Xh(h);
        Yh(d, g, u(Object, "assign").call(Object, {}, {
            va: m
        }, e), k);
        try {
            Ug()
        } catch (x) {}
        Dg("1", g);
        l = Zh(k, m);
        d = !1;
        if (!$h(h)) {
            e = "gpt-impl-" + Math.random();
            try {
                $c(h, Tc(l, {
                    id: e,
                    nonce: Yc(window),
                    sa: Ic(ye) ? "anonymous" : void 0
                }))
            } catch (x) {}
            h.getElementById(e) && (Ic(xe) ? d = !0 : c._loadStarted_ = !0)
        }
        if (Ic(xe) ? !d : !c._loadStarted_) {
            var q = pd("SCRIPT");
            Zc(q, l);
            q.async = !0;
            Ic(ye) && (q.crossOrigin = "anonymous");
            h = c.fifWin ? f.document : h;
            l = h.body;
            d = h.documentElement;
            var p, r, J = null != (r = null != (p = h.head) ? p : l) ? r : d;
            "complete" !== f.document.readyState && c.fifWin ? Gc(f, "load", function() {
                return void J.appendChild(q)
            }) : J.appendChild(q);
            Ic(xe) || (c._loadStarted_ = !0)
        }
        if (f === f.top) try {
            $e(f)
        } catch (x) {
            Lh(k, 1209, x)
        }
        Gh(new Dh, f, m, ai(m), a)
    }

    function Uh() {
        return {
            wa: "1",
            Z: "m202403110101",
            Oa: qd(window),
            Pa: new we(11, "m202403110101"),
            Ra: .01 > jd(),
            Fa: 100
        }
    }

    function Vh(a) {
        var b = a.Z;
        /m\d+/.test(b) ? b = Number(b.substring(1)) : (b && Rd({
            mjsv: b
        }, "gpt_inv_ver"), b = void 0);
        return u(Object, "assign").call(Object, {}, a, {
            lb: b
        })
    }

    function Wh(a) {
        return (a = a.currentScript) ? a : null
    }

    function Xh(a) {
        var b;
        a = w(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, u(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Zh(a, b) {
        var c = a.wa;
        a = a.Z;
        b = ai(b) ? a ? Wc(Ph, a) : Wc(Qh, c) : a ? Wc(Rh, a) : Wc(Sh, c);
        return (c = W(Hc).g(Ae.g, Ae.defaultValue)) ? Xc(b, new t.Map([
            ["cb", c]
        ])) : b
    }

    function Yh(a, b, c, d) {
        wh(172, c.va);
        Ah(a, c);
        sh(12, d);
        sh(5, d);
        (a = rh(b)) && a.then(function(e) {
            return void wh(251, qc(e))
        });
        od(Jc(), b.document)
    }

    function $h(a) {
        var b = Wh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function ai(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === cd(a.src.match(bd)[3] || null)
    };
    try {
        Th()
    } catch (a) {
        try {
            Lh(Uh(), 420, a)
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[577939489,null,null,[1]],[null,7,null,[null,0.1]],[561694963,null,null,[1]],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[null,578655462,null,[null,20]],[571050247,null,null,[1]],[570864697,null,null,[1]],[586621833,null,null,[1]],[577861852,null,null,[]],[573236024,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1916,null,[null,0.001]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[605625700,null,null,[1]],[607352955,null,null,[1]],[579875511,null,null,[1]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[540043576,null,null,[1]],[45401685,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[600451522,null,null,[1]],[null,575880738,null,[null,10]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[1]]]],[595824397,null,null,[1]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[596058628,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,\"1-0-40\"]],[608330569,null,null,[1]],[null,506394061,null,[null,100]],[568353453,null,null,[1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[45397804,null,null,[1]],[45398607,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,514795754,null,[null,2]],[607425748,null,null,[1]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[582338617,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[609053740,null,null,[1]],[597667424,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[10,[[31080344],[31080345],[31080346,[[null,514795754,null,[null,4]]]],[31080407],[31080408,[[null,514795754,null,[null,4]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[12,null,null,null,4,null,\"Chrome\\\\\/115\",[\"navigator.userAgent\"]]]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]]]],59],[1000,[[31080985,null,[4,null,6,null,null,null,null,[\"31080982\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31080986,null,[4,null,6,null,null,null,null,[\"31080983\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31080987,null,[4,null,6,null,null,null,null,[\"31080984\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[10,[[31081559],[31081560]]],[1,[[31081711],[31081712,[[610525552,null,null,[1]]]]]],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[50,[[44807746],[44807747,[[547020083,null,null,[1]]]]],null,105],[10,[[44807748,[[547020083,null,null,[1]]]],[95320512]],null,105],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191],[44776367],[44804780],[44806358]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31079088],[44776366],[44779256]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31079732],[31079733]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[50,[[31079795],[31079796,[[360245597,null,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[50,[[31080982],[31080983,[[582386403,null,null,[1]]]],[31080984,[[582386403,null,null,[1]],[603086552,null,null,[1]]]]]],[50,[[31081517],[31081518,[[602464517,null,null,[1]]]]]],[1,[[31081525],[31081526,[[590730356,null,null,[1]]]]]],[1000,[[31081565,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31081566,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[10,[[31081573],[31081574,[[null,609715571,null,[null,1]]]]]],[10,[[31081683],[31081684,[[608664189,null,null,[1]]]]]],[100,[[31081713],[31081714,[[606310399,null,null,[1]]]]]],[100,[[31081715],[31081716,[[609118749,null,null,[1]]]]]],[1000,[[31081751,[[null,24,null,[null,31081751]]],[6,null,null,13,null,31081751]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081752,[[null,24,null,[null,31081752]]],[6,null,null,13,null,31081752]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081783,[[null,24,null,[null,31081783]]],[6,null,null,13,null,31081783]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081784,[[null,24,null,[null,31081784]]],[6,null,null,13,null,31081784]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[100,[[31081789],[31081790,[[588117531,null,null,[1]]]]]],[1000,[[31081805,[[null,24,null,[null,31081805]]],[6,null,null,13,null,31081805]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081806,[[null,24,null,[null,31081806]]],[6,null,null,13,null,31081806]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[10,[[95326463],[95326464,[[null,610770343,null,[null,1]]]],[95326465,[[null,610770343,null,[null,2]]]],[95326466,[[null,610770343,null,[null,3]]]],[95326467,[[null,610770343,null,[null,4]]]],[95326468,[[null,610770343,null,[null,5]]]],[95326469,[[null,610770343,null,[null,6]]]]],null,59],[10,[[95327078],[95327079]]]]],[2,[[100,[[31081446,[[null,586681283,null,[null,10000]]]],[31081447]],null,null,null,null,null,799,null,102],[10,[[95322895],[95322896]],null,null,null,null,32,null,null,142,1]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],31081784,null,null,null,\".google.com.hk\",632,2021]")