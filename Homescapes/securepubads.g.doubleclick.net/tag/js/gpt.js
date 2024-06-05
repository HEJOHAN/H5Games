(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    var n, ba = function(a) {
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
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        t = {},
        ha = {},
        u = function(a, b, c) {
            if (!c || null != a) {
                c = ha[b];
                if (null == c) return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b]
            }
        },
        v = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in t ? f = t : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(t, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
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
            ca(this, "description", {
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
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");
    var ia = function(a) {
            a = {
                next: a
            };
            a[u(t.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ja = function(a) {
            return a.raw = a
        },
        w = function(a) {
            var b = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && a[u(t.Symbol, "iterator")];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        x = function(a) {
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
        ka = fa && "function" == typeof u(Object, "assign") ? u(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) z(d, e) && (a[e] = d[e])
            }
            return a
        };
    v("Object.assign", function(a) {
        return a || ka
    }, "es6");
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if (fa && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = ma,
        B = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.nb = b.prototype
        },
        sa = function() {
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
                ca(g, d, {
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
                } catch (r) {
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
                        var r = m[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: m,
                            index: h,
                            B: r
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
                return ia(function() {
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
    var ta = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ta(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var ua = function(a, b) {
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
            return ua(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    }, "es6");
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
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
            var d = ta(this, b, "startsWith"),
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
            var c = ta(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    v("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ta(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? u(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var D = this || self,
        wa = function(a) {
            var b = va("CLOSURE_FLAGS");
            a = b && b[a];
            return null != a ? a : !1
        },
        va = function(a) {
            a = a.split(".");
            for (var b = D, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        xa = function(a, b, c) {
            a = a.split(".");
            c = c || D;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };

    function ya(a) {
        D.setTimeout(function() {
            throw a;
        }, 0)
    };
    var za = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ba = function(a, b) {
            var c = 0;
            a = za(String(a)).split(".");
            b = za(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Aa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Aa(0 == f[2].length, 0 == g[2].length) || Aa(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Aa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ca = wa(610401301),
        Da = wa(188588736);
    var Ea, Fa = D.navigator;
    Ea = Fa ? Fa.userAgentData || null : null;

    function Ga(a) {
        return Ca ? Ea ? Ea.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function E(a) {
        var b;
        a: {
            if (b = D.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Ha() {
        return Ca ? !!Ea && 0 < Ea.brands.length : !1
    }

    function Ia() {
        return Ha() ? Ga("Chromium") : (E("Chrome") || E("CriOS")) && !(Ha() ? 0 : E("Edge")) || E("Silk")
    };
    var Ja = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };

    function Ka(a, b) {
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
    var La = function(a) {
        La[" "](a);
        return a
    };
    La[" "] = function() {};
    var Ma = Ha() ? !1 : E("Trident") || E("MSIE");
    !E("Android") || Ia();
    Ia();
    E("Safari") && (Ia() || (Ha() ? 0 : E("Coast")) || (Ha() ? 0 : E("Opera")) || (Ha() ? 0 : E("Edge")) || (Ha() ? Ga("Microsoft Edge") : E("Edg/")) || Ha() && Ga("Opera"));
    var Na = {},
        Oa = null,
        Qa = function(a) {
            var b = [];
            Pa(a, function(c) {
                b.push(c)
            });
            return b
        },
        Pa = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Oa[l];
                    if (null != m) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Ra();
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
        Ra = function() {
            if (!Oa) {
                Oa = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Na[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Oa[f] && (Oa[f] = e)
                    }
                }
            }
        };
    var Sa = "undefined" !== typeof Uint8Array,
        Ta = !Ma && "function" === typeof btoa;

    function Ua() {
        return "function" === typeof BigInt
    };
    var F = 0,
        Va = 0;

    function Wa(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = w(Xa(c, a)), b = c.next().value, a = c.next().value, c = b);
        F = c >>> 0;
        Va = a >>> 0
    }

    function Ya(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Ua() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Za(c) + Za(a));
        return c
    }

    function Za(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function $a() {
        var a = F,
            b = Va;
        b & 2147483648 ? Ua() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = w(Xa(a, b)), a = b.next().value, b = b.next().value, a = "-" + Ya(a, b)) : a = Ya(a, b);
        return a
    }

    function Xa(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function ab(a) {
        return Array.prototype.slice.call(a)
    };

    function bb(a) {
        return "function" === typeof t.Symbol && "symbol" === typeof(0, t.Symbol)() ? (0, t.Symbol)() : a
    }
    var cb = bb(),
        db = bb("0di"),
        eb = bb("2ex"),
        fb = bb("0dg");
    var gb = cb ? function(a, b) {
        a[cb] |= b
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

    function G(a, b, c) {
        return c ? a | b : a & ~b
    }
    var H = cb ? function(a) {
            return a[cb] | 0
        } : function(a) {
            return a.g | 0
        },
        I = cb ? function(a) {
            return a[cb]
        } : function(a) {
            return a.g
        },
        J = cb ? function(a, b) {
            a[cb] = b;
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

    function hb(a, b) {
        J(b, (a | 0) & -14591)
    }

    function ib(a, b) {
        J(b, (a | 34) & -14557)
    }

    function jb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var kb = {},
        lb = {};

    function mb(a) {
        return !(!a || "object" !== typeof a || a.g !== lb)
    }

    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ob;

    function pb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = H(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? u(b, "includes").call(b, c) : b.has(c)))) return !1;
        J(a, d | 1);
        return !0
    }
    var qb, rb = [];
    J(rb, 55);
    qb = Object.freeze(rb);

    function sb(a) {
        if (a & 2) throw Error();
    }
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var tb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var ub, vb;

    function wb(a) {
        if (vb) throw Error("");
        vb = function(b) {
            D.setTimeout(function() {
                a(b)
            }, 0)
        }
    }

    function xb(a) {
        if (vb) try {
            vb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function yb() {
        var a = Error();
        tb(a, "incident");
        vb ? xb(a) : ya(a)
    }

    function zb(a) {
        a = Error(a);
        tb(a, "warning");
        xb(a);
        return a
    };

    function Ab(a) {
        if ("boolean" !== typeof a) {
            var b = typeof a;
            throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
        }
        return a
    }
    var Bb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Cb(a) {
        var b = typeof a;
        return "number" === b ? u(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Bb.test(a)
    }

    function K(a) {
        if (null != a) {
            if (!u(Number, "isFinite").call(Number, a)) throw zb("enum");
            a |= 0
        }
        return a
    }

    function Db(a) {
        if ("number" !== typeof a) throw zb("int32");
        if (!u(Number, "isFinite").call(Number, a)) throw zb("int32");
        return a | 0
    }

    function Eb(a) {
        return null == a ? a : Db(a)
    }

    function Fb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return u(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }

    function Gb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return u(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }

    function Hb(a) {
        if (null != a) {
            var b = !!b;
            if (!Cb(a)) throw zb("int64");
            a = "string" === typeof a ? Ib(a) : b ? Jb(a) : Kb(a)
        }
        return a
    }

    function Lb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function Kb(a) {
        a = u(Math, "trunc").call(Math, a);
        if (!u(Number, "isSafeInteger").call(Number, a)) {
            Wa(a);
            var b = F,
                c = Va;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Jb(a) {
        a = u(Math, "trunc").call(Math, a);
        if (u(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            Lb(b) ? a = b : (Wa(a), a = $a())
        }
        return a
    }

    function Ib(a) {
        var b = u(Math, "trunc").call(Math, Number(a));
        if (u(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        if (!Lb(a)) {
            if (16 > a.length) Wa(Number(a));
            else if (Ua()) a = BigInt(a), F = Number(a & BigInt(4294967295)) >>> 0, Va = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                b = +("-" === a[0]);
                Va = F = 0;
                for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Va *= 1E6, F = 1E6 * F + d, 4294967296 <= F && (Va += u(Math, "trunc").call(Math, F / 4294967296), Va >>>= 0, F >>>= 0);
                b && (b = w(Xa(F, Va)), a = b.next().value, b = b.next().value, F = a, Va = b)
            }
            a = $a()
        }
        return a
    }

    function Mb(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function L(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Nb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Ob(a, b, c) {
        if (null != a && "object" === typeof a && a.Z === kb) return a;
        if (Array.isArray(a)) {
            var d = H(a),
                e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && J(a, e);
            return new b(a)
        }
    };
    var Pb;

    function Qb(a, b) {
        Pb = b;
        a = new a(b);
        Pb = void 0;
        return a
    }

    function M(a, b, c) {
        null == a && (a = Pb);
        Pb = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = H(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (nb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        J(a, d);
        return a
    };

    function Rb(a, b) {
        return Sb(b)
    }

    function Sb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (pb(a, void 0, 0)) return
                    } else if (Sa && null != a && a instanceof Uint8Array) {
                    if (Ta) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        Ra();
                        b = Na[b];
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

    function Ub(a, b, c) {
        a = ab(a);
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

    function Vb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = pb(a, void 0, 0) ? void 0 : e && H(a) & 2 ? a : Wb(a, b, c, void 0 !== d, e);
            else if (nb(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Vb(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Wb(a, b, c, d, e) {
        var f = d || c ? H(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = ab(a);
        for (var g = 0; g < a.length; g++) a[g] = Vb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Xb(a) {
        return a.Z === kb ? a.toJSON() : Sb(a)
    };

    function Yb(a, b, c) {
        c = void 0 === c ? ib : c;
        if (null != a) {
            if (Sa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = H(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? J(a, (d | 34) & -12293) : Wb(a, Yb, d & 4 ? ib : c, !0, !0)
            }
            a.Z === kb && (c = a.i, d = I(c), a = d & 2 ? a : Qb(a.constructor, Zb(c, d, !0)));
            return a
        }
    }

    function Zb(a, b, c) {
        var d = c || b & 2 ? ib : hb,
            e = !!(b & 32);
        a = Ub(a, b, function(f) {
            return Yb(f, e, d)
        });
        gb(a, 32 | (c ? 2 : 0));
        return a
    }

    function $b(a) {
        var b = a.i,
            c = I(b);
        return c & 2 ? Qb(a.constructor, Zb(b, c, !1)) : a
    };

    function ac(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[fb] = (a.constructor[fb] | 0) + 1) && yb();
        return 0 === c ? !1 : !(c & b)
    }
    var N = function(a, b) {
        a = a.i;
        return bc(a, I(a), b)
    };

    function cc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }
    var bc = function(a, b, c, d) {
            if (-1 === c) return null;
            var e = jb(b);
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                    if (cc(a, b, e, c) && null != eb) {
                        var g;
                        a = null != (g = ub) ? g : ub = {};
                        g = a[eb] || 0;
                        4 <= g || (a[eb] = g + 1, yb())
                    }
                    return d
                }
                return cc(a, b, e, c)
            }
        },
        P = function(a, b, c) {
            var d = a.i,
                e = I(d);
            sb(e);
            O(d, e, b, c);
            return a
        };

    function O(a, b, c, d, e) {
        var f = jb(b);
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
            g !== b && J(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function dc(a, b, c) {
        var d = a.i,
            e = I(d),
            f = 2 & e ? 1 : 2,
            g = ec(d, e, b),
            h = H(g);
        if (ac(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g)) g = ab(g), h = fc(h, e, !1), e = O(d, e, b, g);
            for (var k = a = 0; a < g.length; a++) {
                var l = c(g[a]);
                null != l && (g[k++] = l)
            }
            k < a && (g.length = k);
            h = gc(h, e);
            h = G(h, 20, !0);
            h = G(h, 4096, !1);
            h = G(h, 8192, !1);
            J(g, h);
            2 & h && Object.freeze(g)
        }
        hc(h) || (c = h, (a = 1 === f) ? h = G(h, 2, !0) : h = G(h, 32, !1), h !== c && J(g, h), a && Object.freeze(g));
        2 === f && hc(h) && (g = ab(g), h = fc(h, e, !1), J(g, h), O(d, e, b, g));
        return g
    }

    function ec(a, b, c) {
        a = bc(a, b, c);
        return Array.isArray(a) ? a : qb
    }

    function gc(a, b) {
        var c = !1;
        0 === a && (a = fc(a, b, c));
        return a = G(a, 1, !0)
    }

    function hc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ic(a, b, c, d) {
        var e = a.i,
            f = I(e);
        sb(f);
        if (null == c) return O(e, f, b), a;
        var g = H(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (ac(a, g))
            for (g = 21, k && (c = ab(c), h = 0, g = fc(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = ab(c), h = 0, g = fc(g, f, !0));
        g !== h && J(c, g);
        O(e, f, b, c);
        return a
    }

    function Q(a, b, c, d) {
        var e = a.i,
            f = I(e);
        sb(f);
        O(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    var kc = function(a, b, c, d) {
            var e = a.i,
                f = I(e);
            sb(f);
            (c = jc(e, f, c)) && c !== b && null != d && (f = O(e, f, c));
            O(e, f, b, d);
            return a
        },
        lc = function(a, b, c) {
            a = a.i;
            return jc(a, I(a), b) === c ? c : -1
        },
        mc = function(a, b) {
            a = a.i;
            return jc(a, I(a), b)
        };

    function jc(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != bc(a, b, f) && (0 !== d && (b = O(a, b, d)), d = f)
        }
        return d
    }

    function nc(a, b, c, d) {
        a = a.i;
        var e = I(a),
            f = bc(a, e, c, d);
        b = Ob(f, b, e);
        b !== f && null != b && O(a, e, c, b, d);
        return b
    }
    var oc = function(a, b) {
            (a = nc(a, b, 1, !1)) ? b = a: (a = b[db]) ? b = a : (a = new b, gb(a.i, 34), b = b[db] = a);
            return b
        },
        R = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = nc(a, b, c, d);
            if (null == b) return b;
            a = a.i;
            var e = I(a);
            if (!(e & 2)) {
                var f = $b(b);
                f !== b && (b = f, O(a, e, c, b, d))
            }
            return b
        },
        S = function(a, b, c) {
            a = a.i;
            var d = I(a),
                e = d,
                f = !(2 & d),
                g = !!(2 & e),
                h = g ? 1 : 2;
            d = 1 === h;
            h = 2 === h;
            f && (f = !g);
            g = ec(a, e, c);
            var k = H(g),
                l = !!(4 & k);
            if (!l) {
                k = gc(k, e);
                var m = g,
                    r = e,
                    q = !!(2 & k);
                q && (r = G(r, 2, !0));
                for (var p = !q, y = !0, C = 0, A = 0; C < m.length; C++) {
                    var aa = Ob(m[C], b, r);
                    if (aa instanceof b) {
                        if (!q) {
                            var qa = !!(H(aa.i) & 2);
                            p && (p = !qa);
                            y && (y = qa)
                        }
                        m[A++] = aa
                    }
                }
                A < C && (m.length = A);
                k = G(k, 4, !0);
                k = G(k, 16, y);
                k = G(k, 8, p);
                J(m, k);
                q && Object.freeze(m)
            }
            b = !!(8 & k) || d && !g.length;
            if (f && !b) {
                hc(k) && (g = ab(g), k = fc(k, e, !1), e = O(a, e, c, g));
                b = g;
                f = k;
                for (m = 0; m < b.length; m++) k = b[m], r = $b(k), k !== r && (b[m] = r);
                f = G(f, 8, !0);
                f = G(f, 16, !b.length);
                J(b, f);
                k = f
            }
            hc(k) || (b = k, d ? k = G(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : k = G(k, 32, !1), k !== b && J(g, k), d && Object.freeze(g));
            h && hc(k) && (g = ab(g), k = fc(k, e, !1), J(g, k), O(a, e, c, g));
            return g
        },
        pc = function(a, b, c) {
            null == c && (c = void 0);
            return P(a, b, c)
        },
        qc = function(a, b, c, d) {
            null == d && (d = void 0);
            return kc(a, b, c, d)
        },
        rc = function(a, b, c) {
            var d = a.i,
                e = I(d);
            sb(e);
            if (null == c) return O(d, e, b), a;
            for (var f = H(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, r = 0; r < c.length; r++) {
                var q = c[r];
                h || (q = !!(H(q.i) & 2), l && (l = !q), m && (m = q))
            }
            h || (f = G(f, 5, !0), f = G(f, 8, l), f = G(f, 16, m));
            k && f !== g && (c = ab(c), g = 0, f = fc(f, e, !0));
            f !== g && J(c, f);
            O(d, e, b, c);
            return a
        };

    function fc(a, b, c) {
        a = G(a, 2, !!(2 & b));
        a = G(a, 32, !!(32 & b) && c);
        return a = G(a, 2048, !1)
    }

    function sc(a, b) {
        return null != a ? a : b
    }
    var tc = function(a, b) {
            var c = void 0 === c ? !1 : c;
            a = N(a, b);
            return sc(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, c)
        },
        uc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return sc(Fb(N(a, b)), c)
        },
        vc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return sc(Gb(N(a, b)), c)
        },
        wc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            a = N(a, b);
            a = null == a ? a : Cb(a) ? "number" === typeof a ? Kb(a) : Ib(a) : void 0;
            return sc(a, c)
        },
        xc = function(a, b) {
            var c = void 0 === c ? 0 : c;
            a = a.i;
            var d = I(a),
                e = bc(a, d, b);
            var f = null == e || "number" === typeof e ? e : "NaN" === e || "Infinity" === e || "-Infinity" === e ? Number(e) : void 0;
            null != f && f !== e && O(a, d, b, f);
            return sc(f, c)
        },
        T = function(a, b) {
            var c = void 0 === c ? "" : c;
            return sc(Nb(N(a, b)), c)
        },
        U = function(a, b) {
            var c = 0;
            c = void 0 === c ? 0 : c;
            a = N(a, b);
            a = null == a ? a : u(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
            return sc(a, c)
        };
    var V = function(a, b, c) {
        this.i = M(a, b, c)
    };
    V.prototype.toJSON = function() {
        return ob ? yc(this, this.i, !1) : yc(this, Wb(this.i, Xb, void 0, void 0, !1), !0)
    };
    var zc = function(a) {
        ob = !0;
        try {
            return JSON.stringify(a.toJSON(), Rb)
        } finally {
            ob = !1
        }
    };
    V.prototype.Z = kb;

    function yc(a, b, c) {
        var d = Da ? void 0 : a.constructor.u;
        var e = I(c ? a.i : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (nb(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g)
                    if (Object.prototype.hasOwnProperty.call(g, l)) {
                        var m = g[l];
                        if (Array.isArray(m)) {
                            var r = m;
                            if (pb(m, d, +l) || mb(m) && 0 === m.size) m = null;
                            m != r && (k = !0)
                        }
                        null != m ? h[l] = m : k = !0
                    }
                if (k) {
                    for (var q in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            q = a - 1;
            c = b[q];
            q -= l;
            if (!(null == c || pb(c, d, q) || mb(c) && 0 === c.size)) break;
            var p = !0
        }
        if (!f && !p) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function Ac() {
        var a = !W(Bc).g,
            b = Cc();
        if (!a) throw Error(b && b() || String(a));
    }
    var Dc = void 0;

    function Cc() {
        var a = Dc;
        Dc = void 0;
        return a
    };

    function Ec(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                gb(b, 32);
                b = Qb(a, b)
            }
            return b
        }
    };
    var Fc = function(a) {
        this.i = M(a)
    };
    B(Fc, V);
    Fc.u = [6, 4];
    var Gc = function(a) {
        this.i = M(a)
    };
    B(Gc, V);
    var Hc = Ec(Gc);
    Gc.u = [4, 5, 6];
    var Kc = function(a, b) {
        this.g = a === Ic && b || "";
        this.j = Jc
    };
    Kc.prototype.toString = function() {
        return this.g
    };
    var Jc = {},
        Ic = {};
    var Lc = function(a) {
            this.g = a;
            this.defaultValue = !1
        },
        Mc = function(a) {
            this.g = a;
            this.defaultValue = 0
        };
    var Nc = new Lc(203);
    var Oc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Pc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var W = function(a) {
        var b = "X";
        if (a.X && a.hasOwnProperty(b)) return a.X;
        b = new a;
        return a.X = b
    };
    var Qc = function() {
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

    function Rc(a) {
        return W(Qc).j(a.g, a.defaultValue)
    }

    function Sc() {
        var a = Tc;
        return W(Qc).l(a.g, a.defaultValue)
    };

    function Uc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Vc = function(a) {
        this.g = a
    };
    Vc.prototype.toString = function() {
        return this.g + ""
    };
    var Wc = function(a) {
            return a instanceof Vc && a.constructor === Vc ? a.g : "type_error:TrustedResourceUrl"
        },
        Xc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Yc = {},
        Zc = function(a, b, c) {
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
    var $c = {},
        ad = function(a) {
            this.g = a
        };
    ad.prototype.toString = function() {
        return this.g.toString()
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function bd(a, b) {
        b = void 0 === b ? {} : b;
        a = '<script src="' + cd(Wc(a).toString()) + '"';
        b.async && (a += " async");
        b.Da && (a += ' custom-element="' + cd(b.Da) + '"');
        b.defer && (a += " defer");
        b.id && (a += ' id="' + cd(b.id) + '"');
        b.nonce && (a += ' nonce="' + cd(b.nonce) + '"');
        b.type && (a += ' type="' + cd(b.type) + '"');
        b.ra && (a += ' crossorigin="' + cd(b.ra) + '"');
        return new ad(a + ">\x3c/script>", $c)
    }

    function cd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    };

    function dd(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            Ma: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function ed(a) {
        var b = sa.apply(1, arguments);
        if (0 === b.length) return new Vc(a[0], Yc);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return new Vc(c, Yc)
    }

    function fd(a, b) {
        a = dd(Wc(a).toString());
        var c = a.Ma,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return new Vc(a.path + c + a.hash, Yc)
    };

    function gd(a) {
        var b, c;
        return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    };

    function hd(a, b) {
        a.src = Wc(b);
        (b = gd(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };

    function id(a, b) {
        a.write(b instanceof ad && b.constructor === ad ? b.g : "type_error:SafeHtml")
    };
    var jd = function() {
        return Ca && Ea ? !Ea.mobile && (E("iPad") || E("Android") || E("Silk")) : E("iPad") || E("Android") && !E("Mobile") || E("Silk")
    };
    var kd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ld = function(a) {
            return a ? decodeURI(a) : a
        },
        md = /#|$/,
        nd = function(a, b) {
            var c = a.search(md);
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
    var od = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        La(a.foo);
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
        pd = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? D : c;
            for (var d = 0; c && 40 > d++ && (!b && !od(c) || !a(c));) a: {
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
        qd = function(a) {
            var b = a;
            pd(function(c) {
                b = c;
                return !1
            });
            return b
        },
        rd = function(a) {
            return od(a.top) ? a.top : null
        },
        sd = function() {
            if (!t.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                t.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        td = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        ud = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        vd = Oc(function() {
            return (Ca && Ea ? Ea.mobile : !jd() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))) ? 2 : jd() ? 1 : 0
        });

    function wd(a, b) {
        if (a.length && b.head) {
            a = w(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = xd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var yd = function(a) {
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
        xd = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var zd = {
        eb: 0,
        cb: 1,
        Za: 2,
        Ua: 3,
        ab: 4,
        Va: 5,
        bb: 6,
        Xa: 7,
        Ya: 8,
        Ta: 9,
        Wa: 10,
        fb: 11
    };
    var Ad = {
        hb: 0,
        ib: 1,
        gb: 2
    };
    var Bd = function(a) {
        this.i = M(a)
    };
    B(Bd, V);
    Bd.prototype.getVersion = function() {
        return uc(this, 2)
    };
    Bd.u = [3];

    function Cd(a) {
        return Qa(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2), u(n, "padStart")).call(n, 8, "0")
        }).join("")
    }

    function Dd(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function Ed(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Fd(a) {
        var b = Cd(a),
            c = Dd(b.slice(0, 6));
        a = Dd(b.slice(6, 12));
        var d = new Bd;
        c = Q(d, 1, Eb(c), 0);
        a = Q(c, 2, Eb(a), 0);
        b = b.slice(12);
        c = Dd(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (0 === e.length) throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = 0 === Dd(e[0]);
            e = e.slice(1);
            var h = Gd(e, b),
                k = 0 === d.length ? 0 : d[d.length - 1];
            k = Ed(h) + k;
            e = e.slice(h.length);
            if (g) d.push(k);
            else {
                g = Gd(e, b);
                h = Ed(g);
                for (var l = 0; l <= h; l++) d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (0 < e.length) throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return ic(a, 3, d, Db)
    }

    function Gd(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var Hd = "a".charCodeAt(),
        Id = Uc(zd),
        Jd = Uc(Ad);
    var Kd = function(a) {
        this.i = M(a)
    };
    B(Kd, V);
    var Ld = function() {
            var a = new Kd;
            return Q(a, 1, Hb(0), "0")
        },
        Md = function(a) {
            var b = Number;
            var c = void 0 === c ? "0" : c;
            var d = N(a, 1);
            var e = !0;
            e = void 0 === e ? !1 : e;
            d = null == d ? d : Cb(d) ? "string" === typeof d ? Ib(d) : e ? Jb(d) : Kb(d) : void 0;
            b = b(sc(d, c));
            a = uc(a, 2);
            return new Date(1E3 * b + a / 1E6)
        };
    var Nd = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        Qd = function(a) {
            var b = X(a, 16);
            return !0 === !!X(a, 1) ? (a = Od(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : Pd(a, b)
        },
        Od = function(a) {
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
        Pd = function(a, b, c) {
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
    Nd.prototype.skip = function(a) {
        this.g += a
    };
    var Sd = function(a) {
            try {
                var b = Qa(a.split(".")[0]).map(function(d) {
                        return (n = d.toString(2), u(n, "padStart")).call(n, 8, "0")
                    }).join(""),
                    c = new Nd(b);
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
                b.specialFeatureOptins = Rd(Pd(c, 12, Jd), Jd);
                b.purpose = {
                    consents: Rd(Pd(c, 24, Id), Id),
                    legitimateInterests: Rd(Pd(c, 24, Id), Id)
                };
                b.purposeOneTreatment = !!X(c, 1);
                b.publisherCC = String.fromCharCode(Hd + X(c, 6)) + String.fromCharCode(Hd + X(c, 6));
                b.vendor = {
                    consents: Rd(Qd(c), null),
                    legitimateInterests: Rd(Qd(c), null)
                };
                return b
            } catch (d) {
                return null
            }
        },
        Rd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = w(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = w(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var Td = function(a) {
        this.i = M(a)
    };
    B(Td, V);
    var Ud = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Vd = null;

    function Wd(a) {
        a = void 0 === a ? D : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Xd(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = xd("IMG", a.document);
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
            Pc(e, "load", f);
            Pc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Zd = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            td(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Yd(c, b)
        },
        Yd = function(a, b) {
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
            }), c.fetch(a, b)) : Xd(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };

    function $d(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Aa] = d.wa, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Y
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Y
            }).map(c)])
        } catch (d) {
            return ae(d, b), ""
        }
    }

    function ae(a, b) {
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
            Zd({
                m: d,
                b: U(b, 1) || null,
                v: T(b, 2) || null
            })
        } catch (g) {}
    }
    var be = function(a, b) {
        var c = new Td;
        a = Q(c, 1, K(a), 0);
        b = Q(a, 2, L(b), "");
        a = b.i;
        c = I(a);
        this.l = c & 2 ? b : Qb(b.constructor, Zb(a, c, !0))
    };
    var ce = function(a) {
        this.i = M(a)
    };
    B(ce, V);
    var de = function(a) {
        this.i = M(a)
    };
    B(de, V);
    var ee = function(a, b) {
            return Q(a, 1, K(b), 0)
        },
        fe = function(a, b) {
            return Q(a, 2, K(b), 0)
        };
    var ge = function(a) {
        this.i = M(a)
    };
    B(ge, V);
    var he = [1, 2];
    var ie = function(a) {
        this.i = M(a)
    };
    B(ie, V);
    var je = function(a, b) {
            return pc(a, 1, b)
        },
        ke = function(a, b) {
            return rc(a, 2, b)
        },
        le = function(a, b) {
            return ic(a, 4, b, Db)
        },
        me = function(a, b) {
            return rc(a, 5, b)
        },
        ne = function(a, b) {
            return Q(a, 6, K(b), 0)
        };
    ie.u = [2, 4, 5];
    var oe = function(a) {
        this.i = M(a)
    };
    B(oe, V);
    oe.u = [5];
    var pe = [1, 2, 3, 4, 6];
    var qe = function(a) {
        this.i = M(a)
    };
    B(qe, V);
    qe.u = [2, 3];
    var re = function(a) {
        this.i = M(a)
    };
    B(re, V);
    re.prototype.getTagSessionCorrelator = function() {
        return wc(this, 2)
    };
    var te = function(a) {
            var b = new re;
            return qc(b, 4, se, a)
        },
        se = [4, 5, 7, 8];
    var ue = function(a) {
        this.i = M(a)
    };
    B(ue, V);
    ue.u = [3];
    var ve = function(a) {
        this.i = M(a)
    };
    B(ve, V);
    ve.u = [4, 5];
    var we = function(a) {
        this.i = M(a)
    };
    B(we, V);
    we.prototype.getTagSessionCorrelator = function() {
        return wc(this, 1)
    };
    we.u = [2];
    var xe = function(a) {
        this.i = M(a)
    };
    B(xe, V);
    var ye = [4, 6];
    var ze = function() {
        be.apply(this, arguments)
    };
    B(ze, be);
    var Ae = function() {
        ze.apply(this, arguments)
    };
    B(Ae, ze);
    Ae.prototype.Ra = function() {
        this.I.apply(this, x(sa.apply(0, arguments).map(function(a) {
            return {
                Y: !0,
                Aa: 2,
                wa: a.toJSON()
            }
        })))
    };
    Ae.prototype.aa = function() {
        this.I.apply(this, x(sa.apply(0, arguments).map(function(a) {
            return {
                Y: !0,
                Aa: 4,
                wa: a.toJSON()
            }
        })))
    };
    var Be = function(a, b) {
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
    var Ce = function(a, b, c, d, e, f, g, h) {
        Ae.call(this, a, b);
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
    B(Ce, Ae);
    var De = function(a) {
        null !== a.j && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = $d(a.g, a.l);
            a.M(a.N + "?e=1", b);
            a.g = []
        }
    };
    Ce.prototype.I = function() {
        var a = sa.apply(0, arguments),
            b = this;
        try {
            this.L && 65536 <= $d(this.g.concat(a), this.l).length && De(this), this.o && !this.A && (this.A = !0, this.o.g(function() {
                De(b)
            })), this.g.push.apply(this.g, x(a)), this.g.length >= this.K && De(this), this.g.length && null === this.j && (this.j = setTimeout(function() {
                De(b)
            }, this.O))
        } catch (c) {
            ae(c, this.l)
        }
    };
    var Ee = function(a, b, c, d, e, f) {
        Ce.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Be, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!t.globalThis.fetch, f)
    };
    B(Ee, Ce);
    var Fe = new Lc(501898423),
        Ge = new Lc(610843832),
        He = new Mc(523264412),
        Ie = new Mc(24),
        Tc = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1934, ["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var Je = function(a) {
        this.i = M(a)
    };
    B(Je, V);
    var Ke = function(a) {
        this.i = M(a)
    };
    B(Ke, V);
    var Le = function(a) {
        this.i = M(a)
    };
    B(Le, V);
    var Me = function(a) {
        this.i = M(a)
    };
    B(Me, V);
    var Ne = Ec(Me);
    Me.u = [7];
    var Oe = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Oe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.lb;
            d = c.mb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ka
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    Oe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = za(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Oe.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Oe.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            Ka: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Pe(a) {
        a = Qe(a);
        try {
            var b = a ? Ne(a) : null
        } catch (c) {
            b = null
        }
        return b ? R(b, Le, 4) || null : null
    }

    function Qe(a) {
        a = (new Oe(a)).get("FCCDCF", "");
        if (a)
            if (u(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    var Re = function(a) {
            this.g = a;
            this.j = null
        },
        Ue = function(a) {
            a.__uspapiPostMessageReady || Te(new Re(a))
        },
        Te = function(a) {
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
    Uc(zd).map(function(a) {
        return Number(a)
    });
    Uc(Ad).map(function(a) {
        return Number(a)
    });
    var Ve = function(a) {
            this.g = a;
            this.j = null
        },
        Xe = function(a) {
            a.__tcfapiPostMessageReady || We(new Ve(a))
        },
        We = function(a) {
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
    var Ye = function(a) {
        this.i = M(a)
    };
    B(Ye, V);
    var Ze = function(a) {
        this.i = M(a)
    };
    B(Ze, V);
    var $e = Ec(Ze);
    Ze.u = [2];

    function af(a, b) {
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
            for (var m = [], r = 0, q = 0; q < l.length / 2; q++) m.push(Dd(l.slice(r, r + 2))), r += 2;
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
        a = Cd(a[0]);
        var k = Dd(a.slice(0, 6));
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
    var bf = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = xd("IFRAME", c);
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
    var ef = function(a) {
            this.g = a;
            var b = Qe(this.g.document);
            try {
                var c = b ? Ne(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = R(b, Ke, 5) || null, b = S(b, Je, 7), b = cf(null != b ? b : []), c = {
                pa: c,
                ta: b
            }) : c = {
                pa: null,
                ta: null
            };
            b = c;
            c = df(b.ta);
            b = b.pa;
            if (null != b && null != Nb(N(b, 2)) && 0 !== T(b, 2).length) {
                var d = void 0 !== nc(b, Kd, 1, !1) ? R(b, Kd, 1) : Ld();
                b = {
                    P: T(b, 2),
                    V: Md(d)
                }
            } else b = null;
            this.o = b && c ? c.V > b.V ? c.P : b.P : b ? b.P : c ? c.P : null;
            this.j = (c = Pe(a.document)) && null != Nb(N(c, 1)) ? T(c, 1) : null;
            this.l = (a = Pe(a.document)) && null != Nb(N(a, 2)) ? T(a, 2) : null
        },
        hf = function(a) {
            a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new ef(a), ff(a), gf(a))
        },
        ff = function(a) {
            !a.o || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", bf(a.g, "__uspapiLocator"), xa("__uspapi", function() {
                return a.I.apply(a, x(sa.apply(0, arguments)))
            }, a.g), Ue(a.g))
        };
    ef.prototype.I = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var cf = function(a) {
            a = u(a, "find").call(a, function(b) {
                return 13 === U(b, 1)
            });
            if (null == a ? 0 : null != Nb(N(a, 2))) try {
                return $e(T(a, 2))
            } catch (b) {}
            return null
        },
        df = function(a) {
            if (null == a || null == Nb(N(a, 1)) || 0 === T(a, 1).length || 0 == S(a, Ye, 2).length) return null;
            var b = T(a, 1);
            try {
                var c = Fd(b.split("~")[0]);
                var d = u(b, "includes").call(b, "~") ? b.split("~").slice(1) : []
            } catch (e) {
                return null
            }
            a = S(a, Ye, 2).reduce(function(e, f) {
                return wc(jf(e), 1) > wc(jf(f), 1) ? e : f
            });
            c = dc(c, 3, Fb).indexOf(uc(a, 1));
            return -1 === c || c >= d.length ? null : {
                P: af(d[c], uc(a, 1)),
                V: Md(jf(a))
            }
        },
        jf = function(a) {
            return void 0 !== nc(a, Kd, 2, !1) ? R(a, Kd, 2) : Ld()
        },
        gf = function(a) {
            !a.j || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", bf(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], xa("__tcfapi", function() {
                return a.A.apply(a, x(sa.apply(0, arguments)))
            }, a.g), Xe(a.g))
        };
    ef.prototype.A = function(a, b, c, d) {
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
                    this.j ? (d = Sd(this.j), d.addtlConsent = null != this.l ? this.l : void 0, d.cmpStatus = "loaded", d.eventStatus = "tcloaded", null != a && (d.listenerId = a), a = d) : a = null;
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
    var kf = function(a) {
        return "string" === typeof a
    };
    var lf = function(a) {
        this.i = M(a)
    };
    B(lf, V);
    lf.u = [2, 8];
    var mf = [3, 4, 5],
        nf = [6, 7];

    function of (a) {
        return null != a ? !a : a
    }

    function pf(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function qf(a, b) {
        var c = S(a, lf, 2);
        if (!c.length) return rf(a, b);
        a = U(a, 1);
        if (1 === a) return of(qf(c[0], b));
        c = Ja(c, function(d) {
            return function() {
                return qf(d, b)
            }
        });
        switch (a) {
            case 2:
                return pf(c, !1);
            case 3:
                return pf(c, !0)
        }
    }

    function rf(a, b) {
        var c = mc(a, mf);
        a: {
            switch (c) {
                case 3:
                    var d = U(a, lc(a, mf, 3));
                    break a;
                case 4:
                    d = U(a, lc(a, mf, 4));
                    break a;
                case 5:
                    d = U(a, lc(a, mf, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply;
                var f = dc(a, 8, Nb);
                var g = e.call(b, null, x(f))
            } catch (h) {
                return
            }
            e = U(a, 1);
            if (4 === e) return !!g;
            if (5 === e) return null != g;
            if (12 === e) a = T(a, lc(a, nf, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = xc(a, lc(a, nf, 6));
                        break a;
                    case 5:
                        a = T(a, lc(a, nf, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === e) return g === a;
                if (9 === e) return null != g && 0 === Ba(String(g), a);
                if (null != g) switch (e) {
                    case 7:
                        return g < a;
                    case 8:
                        return g > a;
                    case 12:
                        return kf(a) && kf(g) && (new RegExp(a)).test(g);
                    case 10:
                        return null != g && -1 === Ba(String(g), a);
                    case 11:
                        return null != g && 1 === Ba(String(g), a)
                }
            }
        }
    }

    function sf(a, b) {
        return !a || !(!b || !qf(a, b))
    };
    var tf = function(a) {
        this.i = M(a)
    };
    B(tf, V);
    tf.u = [4];
    var uf = function(a) {
        this.i = M(a)
    };
    B(uf, V);
    uf.prototype.getValue = function() {
        return R(this, tf, 2)
    };
    var vf = function(a) {
        this.i = M(a)
    };
    B(vf, V);
    var wf = Ec(vf);
    vf.u = [5];
    var xf = [1, 2, 3, 6, 7, 8];
    var yf = function(a, b, c) {
            var d = void 0 === d ? new Ee(6, "unknown", b) : d;
            this.A = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = 0 < a && sd() < 1 / a
        },
        Af = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = fe(ee(new de, b), c);
                b = ne(ke(je(me(le(new ie, d), e), g), a.g.slice()), f);
                b = te(b);
                a.j.aa(zf(a, b));
                if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                        return U(h, 1) === U(g, 1) && U(h, 2) === c
                    })) a.g.push(g), 100 < a.g.length && a.g.shift()
            }
        },
        Bf = function(a, b, c, d) {
            if (a.l) {
                var e = new ce;
                b = P(e, 1, Eb(b));
                c = P(b, 2, Eb(c));
                d = P(c, 3, K(d));
                c = new re;
                d = qc(c, 8, se, d);
                a.j.aa(zf(a, d))
            }
        },
        zf = function(a, b) {
            var c = Date.now();
            c = u(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
            b = Q(b, 1, Hb(c), "0");
            c = yd(window);
            b = Q(b, 2, Hb(c), "0");
            return Q(b, 6, Hb(a.A), "0")
        };
    var Cf = function() {
        var a = {};
        this.C = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var Df = /^true$/.test("false");

    function Ef(a, b) {
        switch (b) {
            case 1:
                return U(a, lc(a, xf, 1));
            case 2:
                return U(a, lc(a, xf, 2));
            case 3:
                return U(a, lc(a, xf, 3));
            case 6:
                return U(a, lc(a, xf, 6));
            default:
                return null
        }
    }

    function Ff(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return tc(a, 1);
            case 7:
                return T(a, 3);
            case 2:
                return xc(a, 2);
            case 3:
                return T(a, 3);
            case 6:
                return dc(a, 4, Nb);
            default:
                return null
        }
    }
    var Gf = Oc(function() {
        if (!Df) return {};
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

    function Hf(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        W(If).l[e] = null != (g = null == (f = W(If).l[e]) ? void 0 : f.add(b)) ? g : (new t.Set).add(b);
        e = Gf();
        if (null != e[b]) return e[b];
        b = Jf(d)[b];
        if (!b) return c;
        b = wf(JSON.stringify(b));
        b = Kf(b);
        a = Ff(b, a);
        return null != a ? a : c
    }

    function Kf(a) {
        var b = W(Cf).C;
        if (b) {
            var c = Ka(S(a, uf, 5), function(f) {
                return sf(R(f, lf, 1), b)
            });
            if (c) {
                var d;
                return null != (d = c.getValue()) ? d : null
            }
        }
        var e;
        return null != (e = R(a, tf, 4)) ? e : null
    }
    var If = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new t.Map
    };

    function Lf(a, b, c) {
        return !!Hf(1, a, void 0 === b ? !1 : b, c)
    }

    function Mf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Hf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Nf(a, b, c) {
        b = void 0 === b ? "" : b;
        a = Hf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function Of(a, b, c) {
        b = void 0 === b ? [] : b;
        a = Hf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Jf(a) {
        return W(If).j[a] || (W(If).j[a] = {})
    }

    function Pf(a, b) {
        var c = Jf(b);
        td(a, function(d, e) {
            return c[e] = d
        })
    }

    function Qf(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        b = w(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = Jf(h), l = w(a), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                var r = mc(m, xf),
                    q = Ef(m, r);
                if (q) {
                    var p = void 0,
                        y = void 0,
                        C = void 0;
                    var A = null != (p = null == (C = W(If).g.get(h)) ? void 0 : null == (y = C.get(q)) ? void 0 : y.slice(0)) ? p : [];
                    a: {
                        p = q;y = new oe;
                        switch (r) {
                            case 1:
                                kc(y, 1, pe, K(p));
                                break;
                            case 2:
                                kc(y, 2, pe, K(p));
                                break;
                            case 3:
                                kc(y, 3, pe, K(p));
                                break;
                            case 6:
                                kc(y, 4, pe, K(p));
                                break;
                            default:
                                A = void 0;
                                break a
                        }
                        ic(y, 5, A, Db);A = y
                    }
                    if (r = A) p = void 0, r = !(null == (p = W(If).l[h]) || !p.has(q));
                    r && f.push(A);
                    if (r = A) p = void 0, r = !(null == (p = W(If).g.get(h)) || !p.has(q));
                    r && g.push(A);
                    e || (A = q, r = h, p = d, y = W(If), y.g.has(r) || y.g.set(r, new t.Map), y.g.get(r).has(A) || y.g.get(r).set(A, []), p && y.g.get(r).get(A).push(p));
                    k[q] = m.toJSON()
                }
            }
        }
        if (f.length || g.length) a = null != d ? d : void 0, c.l && c.o && (d = new qe, f = rc(d, 2, f), g = rc(f, 3, g), a && Q(g, 1, Eb(a), 0), f = new re, g = qc(f, 7, se, g), c.j.aa(zf(c, g)))
    }

    function Rf(a, b) {
        b = Jf(b);
        a = w(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = wf(JSON.stringify(c)),
                e = mc(d, xf);
            (d = Ef(d, e)) && (b[d] || (b[d] = c))
        }
    }

    function Sf() {
        return u(Object, "keys").call(Object, W(If).j).map(function(a) {
            return Number(a)
        })
    }

    function Tf(a) {
        (n = W(If).o, u(n, "includes")).call(n, a) || Pf(Jf(4), a)
    };

    function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Uf(a, b, c) {
        return b[a] || c
    }

    function Vf(a) {
        Y(5, Lf, a);
        Y(6, Mf, a);
        Y(7, Nf, a);
        Y(8, Of, a);
        Y(13, Rf, a);
        Y(15, Tf, a)
    }

    function Wf(a) {
        Y(4, function(b) {
            W(Cf).C = b
        }, a);
        Y(9, function(b, c) {
            var d = W(Cf);
            null == d.C[3][b] && (d.C[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = W(Cf);
            null == d.C[4][b] && (d.C[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = W(Cf);
            null == d.C[5][b] && (d.C[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = W(Cf), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, u(Object, "assign").call(Object, c.C[e], b[e])
        }, a)
    }

    function Xf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var Yf = function() {};
    Yf.prototype.j = function() {};
    Yf.prototype.g = function() {
        return []
    };
    var Zf = function(a, b, c) {
        a.j = function(d, e) {
            Uf(2, b, function() {
                return []
            })(d, c, e)
        };
        a.g = function() {
            return Uf(3, b, function() {
                return []
            })(c)
        }
    };

    function $f(a, b) {
        try {
            var c = a.split(".");
            a = D;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var ag = {},
        bg = {},
        cg = {},
        dg = {},
        eg = (dg[3] = (ag[8] = function(a) {
            try {
                return null != va(a)
            } catch (b) {}
        }, ag[9] = function(a) {
            try {
                var b = va(a)
            } catch (c) {
                return
            }
            if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
            return a
        }, ag[10] = function() {
            return window === window.top
        }, ag[6] = function(a) {
            var b = W(Yf).g();
            return 0 <= Array.prototype.indexOf.call(b, Number(a), void 0)
        }, ag[27] = function(a) {
            a = $f(a, "boolean");
            return void 0 !== a ? a : void 0
        }, ag[60] = function(a) {
            try {
                return !!D.document.querySelector(a)
            } catch (b) {}
        }, ag[69] = function(a) {
            var b = D.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.features(), u(n, "includes")).call(n, a))
        }, ag[70] = function(a) {
            var b = D.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.allowedFeatures(), u(n, "includes")).call(n, a))
        }, ag), dg[4] = (bg[3] = function() {
            return vd()
        }, bg[6] = function(a) {
            a = $f(a, "number");
            return void 0 !== a ? a : void 0
        }, bg), dg[5] = (cg[2] = function() {
            return window.location.href
        }, cg[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, cg[4] = function(a) {
            a = $f(a, "string");
            return void 0 !== a ? a : void 0
        }, cg), dg);

    function fg() {
        var a = void 0 === a ? D : a;
        return a.ggeac || (a.ggeac = {})
    };
    var gg = function(a) {
        this.i = M(a)
    };
    B(gg, V);
    gg.prototype.getId = function() {
        return uc(this, 1)
    };
    gg.u = [2];
    var hg = function(a) {
        this.i = M(a)
    };
    B(hg, V);
    hg.u = [2];
    var ig = function(a) {
        this.i = M(a)
    };
    B(ig, V);
    ig.u = [2];
    var jg = function(a) {
        this.i = M(a)
    };
    B(jg, V);
    var kg = function(a) {
        this.i = M(a)
    };
    B(kg, V);
    kg.u = [1, 4, 2, 3];

    function lg(a) {
        var b = {};
        return mg((b[0] = new t.Map, b[1] = new t.Map, b[2] = new t.Map, b), a)
    }

    function mg(a, b) {
        for (var c = new t.Map, d = w(u(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = w(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.za + f.xa * f.ya)
        }
        b = w(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = S(d, hg, 2), e = w(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, 0 !== S(f, gg, 2).length) {
                    var g = vc(f, 8);
                    if (U(f, 4) && !U(f, 13)) {
                        var h = void 0;
                        g = null != (h = c.get(U(f, 4))) ? h : 0;
                        h = vc(f, 1) * S(f, gg, 2).length;
                        c.set(U(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < S(f, gg, 2).length; k++) {
                        var l = {
                            za: g,
                            xa: vc(f, 1),
                            ya: S(f, gg, 2).length,
                            La: k,
                            sa: U(d, 1),
                            R: f,
                            H: S(f, gg, 2)[k]
                        };
                        h.push(l)
                    }
                    ng(a[2], U(f, 10), h) || ng(a[1], U(f, 4), h) || ng(a[0], S(f, gg, 2)[0].getId(), h)
                }
        return a
    }

    function ng(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, x(c));
        return !0
    };

    function og(a) {
        a = void 0 === a ? sd() : a;
        return function(b) {
            return ud(b + " + " + a) % 1E3
        }
    };
    var pg = [12, 13, 20],
        qg = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            var e = void 0 === d.W ? !1 : d.W;
            d = void 0 === d.Pa ? [] : d.Pa;
            this.J = a;
            this.D = c;
            this.o = {};
            this.W = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            var f;
            if (null === Vd) {
                Vd = "";
                try {
                    b = "";
                    try {
                        b = D.top.location.hash
                    } catch (g) {
                        b = D.location.hash
                    }
                    b && (Vd = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
                } catch (g) {}
            }
            if (f = Vd)
                for (f = w(f.split(",") || []), b = f.next(); !b.done; b = f.next())(b = Number(b.value)) && (this.j[b] = !0);
            d = w(d);
            for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0
        },
        sg = function(a, b, c, d) {
            var e = [],
                f;
            if (f = 9 !== b) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return Af(a.D, b, c, e, [], 4), e;
            f = u(pg, "includes").call(pg, b);
            for (var g = [], h = W(Cf).C, k = [], l = w([0, 1, 2]), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                for (var r = w(u(a.J[m], "entries").call(a.J[m])), q = r.next(); !q.done; q = r.next()) {
                    var p = w(q.value);
                    q = p.next().value;
                    p = p.next().value;
                    var y = q,
                        C = p;
                    q = new ge;
                    p = C.filter(function(Tb) {
                        return Tb.sa === b && !!a.j[Tb.H.getId()] && sf(R(Tb.R, lf, 3), h) && sf(R(Tb.H, lf, 3), h)
                    });
                    if (p.length)
                        for (q = w(p), p = q.next(); !p.done; p = q.next()) k.push(p.value.H);
                    else if (!a.W) {
                        p = void 0;
                        2 === m ? (p = d[1], kc(q, 2, he, K(y))) : p = d[0];
                        var A = void 0,
                            aa = void 0;
                        p = null != (aa = null == (A = p) ? void 0 : A(String(y))) ? aa : 2 === m && 1 === U(C[0].R, 11) ? void 0 : d[0](String(y));
                        if (void 0 !== p) {
                            y = w(C);
                            for (C = y.next(); !C.done; C = y.next())
                                if (C = C.value, C.sa === b) {
                                    A = p - C.za;
                                    var qa = C;
                                    aa = qa.xa;
                                    var Se = qa.ya;
                                    qa = qa.La;
                                    0 <= A && A < aa * Se && A % Se === qa && sf(R(C.R, lf, 3), h) && sf(R(C.H, lf, 3), h) && (A = U(C.R, 13), 0 !== A && void 0 !== A && (aa = a.l[String(A)], void 0 !== aa && aa !== C.H.getId() ? Bf(a.D, a.l[String(A)], C.H.getId(), A) : a.l[String(A)] = C.H.getId()), k.push(C.H))
                                }
                            0 !== mc(q, he) && (Q(q, 3, Eb(p), 0), g.push(q))
                        }
                    }
                }
            }
            d = w(k);
            for (k = d.next(); !k.done; k = d.next()) k = k.value, l = k.getId(), e.push(l), rg(a, l, f ? 4 : c), Qf(S(k, vf, 2), f ? Sf() : [c], a.D, l);
            Af(a.D, b, c, e, g, 1);
            return e
        },
        rg = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            u(a, "includes").call(a, b) || a.push(b)
        },
        tg = function(a, b) {
            b = b.map(function(c) {
                return new ig(c)
            }).filter(function(c) {
                return !u(pg, "includes").call(pg, U(c, 1))
            });
            a.J = mg(a.J, b)
        },
        ug = function(a, b) {
            Y(1, function(c) {
                a.j[c] = !0
            }, b);
            Y(2, function(c, d, e) {
                return sg(a, c, d, e)
            }, b);
            Y(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Y(12, function(c) {
                return void tg(a, c)
            }, b);
            Y(16, function(c, d) {
                return void rg(a, c, d)
            }, b)
        };
    var vg = function() {
            this.g = function() {}
        },
        wg = function(a, b) {
            a.g = Uf(14, b, function() {})
        };

    function xg(a) {
        W(vg).g(a)
    };
    var yg, zg, Ag, Bg, Cg, Dg;

    function Eg(a) {
        var b = a.Ga,
            c = a.C,
            d = a.config,
            e = void 0 === a.Ca ? fg() : a.Ca,
            f = void 0 === a.oa ? 0 : a.oa,
            g = void 0 === a.D ? new yf(null != (Bg = null == (yg = R(b, jg, 5)) ? void 0 : wc(yg, 2)) ? Bg : 0, null != (Cg = null == (zg = R(b, jg, 5)) ? void 0 : wc(zg, 4)) ? Cg : 0, null != (Dg = null == (Ag = R(b, jg, 5)) ? void 0 : tc(Ag, 3)) ? Dg : !1) : a.D;
        a = void 0 === a.J ? lg(S(b, ig, 2)) : a.J;
        e.hasOwnProperty("init-done") ? (Uf(12, e, function() {})(S(b, ig, 2).map(function(h) {
            return h.toJSON()
        })), Uf(13, e, function() {})(S(b, vf, 1).map(function(h) {
            return h.toJSON()
        }), f), c && Uf(14, e, function() {})(c), Fg(f, e)) : (ug(new qg(a, f, g, d), e), Vf(e), Wf(e), Xf(e), Fg(f, e), Qf(S(b, vf, 1), [f], g, void 0, !0), Df = Df || !(!d || !d.kb), xg(eg), c && xg(c))
    }

    function Fg(a, b) {
        var c = b = void 0 === b ? fg() : b;
        Zf(W(Yf), c, a);
        Gg(b, a);
        a = b;
        wg(W(vg), a);
        W(Qc).o()
    }

    function Gg(a, b) {
        var c = W(Qc);
        c.j = function(d, e) {
            return Uf(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Uf(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Uf(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Uf(8, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function() {
            Uf(15, a, function() {})(b)
        }
    };
    var Hg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        Ig = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? ed(Hg) : c;
            this.l = a;
            this.j = b;
            this.g = c
        };
    var Jg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Kg = function(a, b) {
            var c = Wd(b);
            c && Jg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Lg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Wd(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Jg(u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Wd() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Mg = function(a, b) {
            return Lg(a, b, function(c, d) {
                var e = new Ig;
                var f = void 0 === f ? e.j : f;
                var g = void 0 === g ? e.l : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Ud(d, {
                    context: c,
                    id: g
                })), D.google_js_errors = D.google_js_errors || [], D.google_js_errors.push(d), D.error_rep_loaded || (f = D.document, c = xd("SCRIPT", f), hd(c, e.g), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), D.error_rep_loaded = !0))
            })
        };

    function Z(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Ng(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Og() {
        var a = new t.Set;
        var b = window.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = w(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Pg(a) {
        a = a.id;
        return null != a && (Og().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift"))
    }

    function Qg(a, b, c) {
        if (!a.sources) return !1;
        switch (Rg(a)) {
            case 2:
                var d = Sg(a);
                if (d) return c.some(function(f) {
                    return Tg(d, f)
                });
                break;
            case 1:
                var e = Ug(a);
                if (e) return b.some(function(f) {
                    return Tg(e, f)
                })
        }
        return !1
    }

    function Rg(a) {
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

    function Ug(a) {
        return Vg(a, function(b) {
            return b.currentRect
        })
    }

    function Sg(a) {
        return Vg(a, function(b) {
            return b.previousRect
        })
    }

    function Vg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Tg(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var Wg = function() {
            var a = {
                qa: !0
            };
            a = void 0 === a ? {
                qa: !1
            } : a;
            this.l = this.j = this.S = this.N = this.K = 0;
            this.ka = this.ha = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.L = {};
            this.ea = 0;
            this.O = Infinity;
            this.ca = this.fa = this.ga = this.ia = this.na = this.A = this.ma = this.U = this.o = 0;
            this.da = !1;
            this.T = this.M = this.I = 0;
            this.D = null;
            this.ja = !1;
            this.ba = function() {};
            var b = document.querySelector("[data-google-query-id]");
            this.la = b ? b.getAttribute("data-google-query-id") : null;
            this.Ba = a
        },
        Xg, Yg, ah = function() {
            var a = new Wg;
            if (Rc(Nc)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    a.Ba.qa && b.push("event");
                    b = w(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        var d = {
                            type: c,
                            buffered: !0
                        };
                        "event" === c && (d.durationThreshold = 40);
                        Zg(a).observe(d)
                    }
                    $g(a)
                }
            }
        },
        Zg = function(a) {
            a.D || (a.D = new PerformanceObserver(Mg(640, function(b) {
                bh(a, b)
            })));
            return a.D
        },
        $g = function(a) {
            var b = Mg(641, function() {
                    var d = document;
                    2 === (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && ch(a)
                }),
                c = Mg(641, function() {
                    return void ch(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.ba = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                Zg(a).disconnect()
            }
        },
        ch = function(a) {
            if (!a.ja) {
                a.ja = !0;
                Zg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Ng("cls", a.K), b += Ng("mls", a.N), b += Z("nls", a.S), window.LayoutShiftAttribution && (b += Ng("cas", a.A), b += Z("nas", a.ia), b += Ng("was", a.na)), b += Ng("wls", a.U), b += Ng("tls", a.ma));
                window.LargestContentfulPaint && (b += Z("lcp", a.ga), b += Z("lcps", a.fa));
                window.PerformanceEventTiming && a.da && (b += Z("fid", a.ca));
                window.PerformanceLongTaskTiming && (b += Z("cbt", a.I), b += Z("mbt", a.M), b += Z("nlt", a.T));
                for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Pg(e.value) && c++;
                b += Z("nif", c);
                c = window.google_unique_id;
                b += Z("ifi", "number" === typeof c ? c : 0);
                c = W(Yf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (D === D.top ? 1 : 0);
                b += a.la ? "&qqid=" + encodeURIComponent(a.la) : Z("pvsid", yd(D));
                window.googletag && (b += "&gpt=1");
                c = Math.min(a.g.length - 1, Math.floor((a.D ? a.ea : performance.interactionCount || 0) / 50));
                0 <= c && (c = a.g[c].latency, 0 <= c && (b += Z("inp", c)));
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.ba()
            }
        },
        dh = function(a, b, c, d) {
            if (!b.hadRecentInput) {
                a.K += Number(b.value);
                Number(b.value) > a.N && (a.N = Number(b.value));
                a.S += 1;
                if (c = Qg(b, c, d)) a.A += b.value, a.ia++;
                if (5E3 < b.startTime - a.ha || 1E3 < b.startTime - a.ka) a.ha = b.startTime, a.j = 0, a.l = 0;
                a.ka = b.startTime;
                a.j += b.value;
                c && (a.l += b.value);
                a.j > a.U && (a.U = a.j, a.na = a.l, a.ma = b.startTime + b.duration)
            }
        },
        bh = function(a, b) {
            var c = Xg !== window.scrollX || Yg !== window.scrollY ? [] : eh,
                d = fh();
            b = w(b.getEntries());
            for (var e = b.next(), f = {}; !e.done; f = {
                    F: void 0
                }, e = b.next()) switch (f.F = e.value, e = f.F.entryType, e) {
                case "layout-shift":
                    dh(a, f.F, c, d);
                    break;
                case "largest-contentful-paint":
                    f = f.F;
                    a.ga = Math.floor(f.renderTime || f.loadTime);
                    a.fa = f.size;
                    break;
                case "first-input":
                    e = f.F;
                    a.ca = Number((e.processingStart - e.startTime).toFixed(3));
                    a.da = !0;
                    a.g.some(function(g) {
                        return function(h) {
                            return u(h, "entries").some(function(k) {
                                return g.F.duration === k.duration && g.F.startTime === k.startTime
                            })
                        }
                    }(f)) || gh(a, f.F);
                    break;
                case "longtask":
                    f = Math.max(0, f.F.duration - 50);
                    a.I += f;
                    a.M = Math.max(a.M, f);
                    a.T += 1;
                    break;
                case "event":
                    gh(a, f.F);
                    break;
                default:
                    throw Error("unexpected value " + e + "!");
            }
        },
        gh = function(a, b) {
            hh(a, b);
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
        hh = function(a, b) {
            b.interactionId && (a.O = Math.min(a.O, b.interactionId), a.o = Math.max(a.o, b.interactionId), a.ea = a.o ? (a.o - a.O) / 7 + 1 : 0)
        },
        fh = function() {
            var a = u(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(Pg),
                b = [].concat(x(Og())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            Xg = window.scrollX;
            Yg = window.scrollY;
            return eh = [].concat(x(a), x(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        eh = [];
    var ih = function(a) {
        this.i = M(a)
    };
    B(ih, V);
    ih.prototype.getVersion = function() {
        return T(this, 2)
    };
    var jh = function(a) {
        this.i = M(a)
    };
    B(jh, V);
    var kh = function(a, b) {
            return P(a, 2, L(b))
        },
        lh = function(a, b) {
            return P(a, 3, L(b))
        },
        mh = function(a, b) {
            return P(a, 4, L(b))
        },
        nh = function(a, b) {
            return P(a, 5, L(b))
        },
        oh = function(a, b) {
            return P(a, 9, L(b))
        },
        ph = function(a, b) {
            return rc(a, 10, b)
        },
        qh = function(a, b) {
            return P(a, 11, null == b ? b : Ab(b))
        },
        rh = function(a, b) {
            return P(a, 1, L(b))
        },
        sh = function(a, b) {
            return P(a, 7, null == b ? b : Ab(b))
        };
    jh.u = [10, 6];
    var th = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function uh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function vh(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function wh(a) {
        if (!vh(a)) return null;
        var b = uh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(th).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function xh(a) {
        var b;
        return qh(ph(nh(kh(rh(mh(sh(oh(lh(new jh, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new ih;
            d = P(d, 1, L(c.brand));
            return P(d, 2, L(c.version))
        })) || []), a.wow64 || !1)
    }

    function yh(a) {
        var b, c;
        return null != (c = null == (b = wh(a)) ? void 0 : b.then(function(d) {
            return xh(d)
        })) ? c : null
    };

    function zh(a, b) {
        var c = {};
        b = (c[0] = og(b.Na), c);
        W(Yf).j(a, b)
    };
    var Ah = {},
        Bh = (Ah[253] = !1, Ah[246] = [], Ah[150] = "", Ah[221] = !1, Ah[36] = /^true$/.test("false"), Ah[172] = null, Ah[260] = void 0, Ah[251] = null, Ah),
        Bc = function() {
            this.g = !1
        };

    function Ch(a) {
        W(Bc).g = !0;
        return Bh[a]
    }

    function Dh(a, b) {
        W(Bc).g = !0;
        Bh[a] = b
    };
    var Eh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;

    function Fh(a) {
        return a ? !Eh.test(a.src) : !0
    };

    function Gh(a) {
        var b = a.Ja,
            c = a.Sa,
            d = a.Ia,
            e = a.Fa,
            f = a.Ha,
            g = Fh(a.ua);
        a = {};
        var h = {},
            k = {};
        return k[3] = (a[3] = function() {
            return !g
        }, a[59] = function() {
            var l = sa.apply(0, arguments),
                m = u(l, "includes"),
                r = String,
                q;
            var p = void 0 === p ? window : p;
            var y;
            p = null != (y = null == (q = ld(p.location.href.match(kd)[3] || null)) ? void 0 : q.split(".")) ? y : [];
            q = 2 > p.length ? null : "uk" === p[p.length - 1] ? 3 > p.length ? null : ud(p.splice(p.length - 3).join(".")) : ud(p.splice(p.length - 2).join("."));
            return m.call(l, r(q))
        }, a[61] = function() {
            return d
        }, a[63] = function() {
            return d || ".google.ch" === f
        }, a[73] = function(l) {
            return u(c, "includes").call(c, Number(l))
        }, a), k[4] = (h[1] = function() {
            return e
        }, h[13] = function() {
            return b || 0
        }, h), k[5] = {}, k
    };

    function Hh(a, b) {
        var c = new kg(Ch(246));
        if (!S(c, vf, 1).length && S(a, vf, 1).length) {
            var d = S(a, vf, 1);
            rc(c, 1, d)
        }!S(c, ig, 2).length && S(a, ig, 2).length && (d = S(a, ig, 2), rc(c, 2, d));
        void 0 === nc(c, jg, 5, !1) && void 0 !== nc(a, jg, 5, !1) && (a = R(a, jg, 5), pc(c, 5, a));
        Eg({
            Ga: c,
            C: Gh(b),
            oa: 2
        })
    };

    function Ih(a, b, c, d, e) {
        a = a.location.host;
        var f = nd(b.src, "domain");
        b = nd(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            W(Qc).g(He.g, He.defaultValue) && (g.ppc_eid = W(Qc).g(He.g, He.defaultValue).toString());
            a = g
        } else a = void 0;
        if (a) {
            c = [c ? new Kc(Ic, "https://pagead2.googlesyndication.com") : new Kc(Ic, "https://securepubads.g.doubleclick.net"), new Kc(Ic, "/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++) g = c[b], f += g instanceof Kc && g.constructor === Kc && g.j === Jc ? g.g : "type_error:Const";
            c = new Vc(f, Yc);
            c = Xc.exec(Wc(c).toString());
            f = c[3] || "";
            c = new Vc(c[1] + Zc("?", c[2] || "", a) + Zc("#", f), Yc);
            Jh(c, d, e)
        } else e(new t.globalThis.Error("no provided or inferred data"))
    }

    function Jh(a, b, c) {
        var d = new t.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            300 > d.status ? (Kg("13", window), b(204 === d.status ? "" : d.responseText)) : c(new t.globalThis.Error("resp:" + d.status))
        };
        d.onerror = function() {
            return void c(new t.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        };
        d.send()
    };
    var Kh = function() {
            this.o = [];
            this.l = []
        },
        Nh = function(a, b, c, d, e) {
            if (qd(b) === rd(b) && c) {
                Lh(a);
                var f = null == e ? void 0 : T(oc(e, Fc), 1);
                f && f.length && u(b.location.hostname, "includes").call(b.location.hostname, f) ? Mh(a, void 0, e) : Ih(b.top, c, d, function(g) {
                    return void Mh(a, g)
                }, function(g) {
                    Mh(a, void 0, void 0, g)
                })
            }
        },
        Lh = function(a) {
            Ch(260);
            Dh(260, function(b) {
                void 0 !== a.g || a.j ? b(a.g, a.j) : a.o.push(b)
            })
        },
        Mh = function(a, b, c, d) {
            a.g = null != b ? b : null == c ? void 0 : zc(c);
            a.A = c;
            !a.A && a.g && a.l.length && (a.A = Hc(a.g));
            a.j = d;
            b = w(a.o);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c(a.g, a.j);
            b = w(a.l);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c(a.A, a.j);
            a.o.length = 0;
            a.l.length = 0
        };
    var Oh = function(a) {
        this.i = M(a)
    };
    B(Oh, V);
    var Ph = Ec(Oh);
    Oh.u = [10];
    var Rh = function() {
            return [].concat(x(u(Qh, "values").call(Qh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Qh = new t.Map;

    function Sh(a, b, c) {
        if (a.Qa) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new xe,
                e = new we;
            try {
                var f = yd(window);
                Q(e, 1, Hb(f), "0")
            } catch (q) {}
            try {
                var g = W(Yf).g();
                ic(e, 2, g, Db)
            } catch (q) {}
            try {
                Q(e, 3, L(window.document.URL), "")
            } catch (q) {}
            f = pc(d, 2, e);
            g = new ve;
            b = Q(g, 1, K(b), 0);
            try {
                var h = kf(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                Q(b, 2, L(h), "")
            } catch (q) {}
            try {
                var k = kf(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                Q(b, 3, L(k), "")
            } catch (q) {}
            try {
                var l = kf(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && ic(b, 4, l.split(/\n\s*/), Mb)
            } catch (q) {}
            h = pc(f, 1, b);
            k = new ue;
            try {
                Q(k, 1, L(a.va), "")
            } catch (q) {}
            try {
                var m = Rh();
                Q(k, 2, Eb(m), 0)
            } catch (q) {}
            try {
                var r = [].concat(x(u(Qh, "keys").call(Qh)));
                ic(k, 3, r, Mb)
            } catch (q) {}
            qc(h, 4, ye, k);
            Q(h, 5, Hb(a.Ea), "0");
            a.Oa.Ra(h)
        }
    };

    function Th(a, b) {
        try {
            var c = Cc();
            if (!kf(a)) {
                var d = c ? c() + "\n" : "";
                throw Error(d + String(a));
            }
            return Ph(a)
        } catch (e) {
            return Sh(b, 838, e), new Oh
        }
    };

    function Uh() {
        var a;
        return null != (a = D.googletag) ? a : D.googletag = {
            cmd: []
        }
    }

    function Vh(a, b) {
        var c = Uh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Wh = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"]),
        Xh = ja(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"]);

    function Yh() {
        var a = sttc,
            b = Zh();
        wb(function(y) {
            Sh(b, 1189, y)
        });
        var c = Uh();
        a = Th(a, b);
        Ac();
        u(Object, "assign").call(Object, Bh, c._vars_);
        c._vars_ = Bh;
        a && (tc(a, 3) && Dh(36, !0), tc(a, 5) && Dh(221, !0), T(a, 6) && Dh(150, T(a, 6)));
        var d = oc(a, kg),
            e = {
                Ia: tc(a, 5),
                Ja: uc(a, 2),
                Sa: dc(a, 10, Fb),
                Fa: uc(a, 7),
                Ha: T(a, 6)
            };
        a = R(a, Gc, 9);
        var f, g = null != (f = c.fifWin) ? f : window,
            h = g.document;
        f = c.fifWin ? window : g;
        Vh("_loaded_", !0);
        Vh("cmd", []);
        var k, l = null != (k = $h(h)) ? k : ai(h);
        bi(d, g, u(Object, "assign").call(Object, {}, {
            ua: l
        }, e), b);
        try {
            ah()
        } catch (y) {}
        Kg("1", g);
        k = ci(b, l);
        d = !1;
        if (!di(h)) {
            e = "gpt-impl-" + Math.random();
            try {
                id(h, bd(k, {
                    id: e,
                    nonce: gd(window),
                    ra: Rc(Ge) ? "anonymous" : void 0
                }))
            } catch (y) {}
            h.getElementById(e) && (Rc(Fe) ? d = !0 : c._loadStarted_ = !0)
        }
        if (Rc(Fe) ? !d : !c._loadStarted_) {
            var m = xd("SCRIPT");
            hd(m, k);
            m.async = !0;
            Rc(Ge) && (m.crossOrigin = "anonymous");
            h = c.fifWin ? f.document : h;
            k = h.body;
            d = h.documentElement;
            var r, q, p = null != (q = null != (r = h.head) ? r : k) ? q : d;
            "complete" !== f.document.readyState && c.fifWin ? Pc(f, "load", function() {
                return void p.appendChild(m)
            }) : p.appendChild(m);
            Rc(Fe) || (c._loadStarted_ = !0)
        }
        if (f === f.top) try {
            hf(f)
        } catch (y) {
            Sh(b, 1209, y)
        }
        Nh(new Kh, f, l, ei(l), a)
    }

    function Zh() {
        return {
            va: "m202403270101",
            jb: "202403270101",
            Na: yd(window),
            Oa: new Ee(11, "m202403270101"),
            Qa: .01 > sd(),
            Ea: 100
        }
    }

    function $h(a) {
        return (a = a.currentScript) ? a : null
    }

    function ai(a) {
        var b;
        a = w(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, u(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function ci(a, b) {
        a = a.va;
        b = ei(b) ? ed(Wh, a) : ed(Xh, a);
        return (a = W(Qc).g(Ie.g, Ie.defaultValue)) ? fd(b, new t.Map([
            ["cb", a]
        ])) : b
    }

    function bi(a, b, c, d) {
        Dh(172, c.ua);
        Hh(a, c);
        zh(12, d);
        zh(5, d);
        (a = yh(b)) && a.then(function(e) {
            return void Dh(251, zc(e))
        });
        wd(Sc(), b.document)
    }

    function di(a) {
        var b = $h(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function ei(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === ld(a.src.match(kd)[3] || null)
    };
    try {
        Yh()
    } catch (a) {
        try {
            Sh(Zh(), 420, a)
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[607106222,null,null,[1]],[577939489,null,null,[1]],[null,7,null,[null,0.1]],[561694963,null,null,[1]],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[null,578655462,null,[null,20]],[591917863,null,null,[1]],[613699219,null,null,[1]],[582386403,null,null,[1]],[603086552,null,null,[1]],[577861852,null,null,[]],[573236024,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1916,null,[null,0.001]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[579875511,null,null,[1]],[45624259,null,null,[]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[540043576,null,null,[1]],[45401685,null,null,[1]],[547020083,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[600451522,null,null,[1]],[null,575880738,null,[null,10]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[1]]]],[595824397,null,null,[1]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[614048762,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[606310399,null,null,[1]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,\"1-0-40\"]],[null,506394061,null,[null,100]],[568353453,null,null,[1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[45397804,null,null,[1]],[45398607,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,514795754,null,[null,2]],[609118749,null,null,[1]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[582338617,null,null,[1]],[588117531,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[609053740,null,null,[1]],[612834765,null,null,[1]],[597667424,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[10,[[31080344],[95328403],[95328404,[[null,514795754,null,[null,4]]]],[95328405],[95328406,[[null,514795754,null,[null,4]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[12,null,null,null,4,null,\"Chrome\\\\\/115\",[\"navigator.userAgent\"]]]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]]]],59],[10,[[31081559],[31081560]]],[10,[[31081711],[31081712,[[610525552,null,null,[1]]]]]],[10,[[31082203],[31082204,[[null,45409629,null,[null,1]],[null,522348973,null,[null,1]]]],[31082205,[[null,45409629,null,[null,10000]],[null,522348973,null,[null,1]]]]],null,112],[1,[[31082206],[31082207,[[null,45409629,null,[null,1]],[null,522348973,null,[null,2]]]],[31082208,[[null,45409629,null,[null,10000]],[null,522348973,null,[null,2]]]]],null,112],[1,[[31082334],[31082335,[[616896918,null,null,[1]]]]],null,59],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[50,[[44807746],[44807747,[[547020083,null,null,[1]]]]],null,105],[10,[[44807748,[[547020083,null,null,[1]]]],[95320512]],null,105],[10,[[95327818,[[null,514795754,null,[]]]],[95327819,[[null,514795754,null,[]],[null,609173130,null,[null,1]]]]],null,59],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191],[44776367],[44804780],[44806358]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31079088],[44776366],[44779256]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31079732],[31079733]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[50,[[31079795],[31079796,[[360245597,null,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[50,[[31081517],[31081518,[[602464517,null,null,[1]]]]]],[1000,[[31081565,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31081566,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[10,[[31081573],[31081574,[[null,609715571,null,[null,1]]]]]],[10,[[31081653,null,[1,[[3,[[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]],[4,null,3]]]]]]]]],null,109,null,null,null,null,null,null,null,null,19],[10,[[31081654,[[610843832,null,null,[1]]],[1,[[3,[[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]],[4,null,3]]]]]]]]],null,109,null,null,null,100,null,null,null,null,19],[10,[[31081683],[31081684,[[608664189,null,null,[1]]]]]],[10,[[31081974],[31081975,[[605401295,null,null,[1]]]]]],[100,[[31081976],[31081977,[[613969547,null,null,[1]]]]]],[100,[[31081978],[31081979,[[612823209,null,null,[1]]]]]],[10,[[31081984],[31081985,[[45401686,null,null,[1]]]]]],[1000,[[31081986,null,[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]],[4,null,3]]]]],null,109,null,null,null,null,null,null,null,null,19],[1000,[[31081987,[[610843832,null,null,[1]]],[2,[[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]],[4,null,3]]]]],null,109,null,null,null,null,null,null,null,null,19],[100,[[31082255],[31082256,[[609010285,null,null,[1]]]]]],[1000,[[31082316,[[null,24,null,[null,31082316]]],[6,null,null,13,null,31082316]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31082317,[[null,24,null,[null,31082317]]],[6,null,null,13,null,31082317]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31082378,[[null,24,null,[null,31082378]]],[6,null,null,13,null,31082378]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31082379,[[null,24,null,[null,31082379]]],[6,null,null,13,null,31082379]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[10,[[95326463],[95326465,[[null,610770343,null,[null,2]]]],[95326467,[[null,610770343,null,[null,4]]]],[95326469,[[null,610770343,null,[null,6]]]]],null,59],[10,[[95327078],[95327079]]],[50,[[95327799],[95327800,[[609732864,null,null,[1]]]]]],[100,[[95327886],[95327887,[[null,610770343,null,[null,1]]]],[95327888,[[null,610770343,null,[null,3]]]],[95327889,[[null,610770343,null,[null,5]]]]],null,59],[10,[[95328479],[95328480,[[45624259,null,null,[1]]]]],null,114]]],[2,[[50,[[31082102],[31082103,[[null,586681283,null,[null,10000]]]]],null,null,null,null,null,50,null,102],[10,[[31082137],[31082138,[[null,609494714,null,[null,1]]]]],null,null,null,null,null,null,null,102],[10,[[31082251],[31082252]],null,null,null,null,32,null,null,142,1]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,null,null,223,2021]")