(function() {
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
            throw Error("a");
        },
        da =
        ca(this),
        q = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    q("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.Og = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.Og
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    q("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    q("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ha = function(a) {
            return a.raw = a
        },
        ia = function(a, b) {
            a.raw = b;
            return a
        },
        t = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error("c`" + String(a));
        },
        u = function(a) {
            if (!(a instanceof Array)) {
                a = t(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ja = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ja(d, e) && (a[e] = d[e])
            }
            return a
        };
    q("Object.assign", function(a) {
        return a || ka
    });
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
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
            if (a.__proto__ !== b) throw new TypeError("d`" + a);
            return a
        } : null
    }
    var qa = ma,
        w = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.bj = b.prototype
        },
        ra = function() {
            this.sc = !1;
            this.jb = null;
            this.jf = void 0;
            this.ka = 1;
            this.Ia = this.lb = 0;
            this.he = this.ea = null
        };
    ra.prototype.Sa = function() {
        if (this.sc) throw new TypeError("f");
        this.sc = !0
    };
    ra.prototype.zc = function(a) {
        this.jf = a
    };
    ra.prototype.Jc = function(a) {
        this.ea = {
            Hf: a,
            Zf: !0
        };
        this.ka = this.lb || this.Ia
    };
    ra.prototype.return = function(a) {
        this.ea = {
            return: a
        };
        this.ka = this.Ia
    };
    var sa = function(a, b, c) {
        a.ka = c;
        return {
            value: b
        }
    };
    ra.prototype.sb = function(a) {
        this.ka = a
    };
    var ta = function(a, b, c) {
        c = a.he.splice(c || 0)[0];
        (c = a.ea = a.ea || c) ? c.Zf ? a.ka = a.lb || a.Ia : void 0 != c.sb && a.Ia < c.sb ? (a.ka = c.sb, a.ea = null) : a.ka = a.Ia: a.ka = b
    };
    ra.prototype.forIn = function(a) {
        return new ua(a)
    };
    var ua = function(a) {
            this.mg = [];
            for (var b in a) this.mg.push(b);
            this.mg.reverse()
        },
        va = function(a) {
            this.s = new ra;
            this.Hi = a
        };
    va.prototype.zc = function(a) {
        this.s.Sa();
        if (this.s.jb) return wa(this, this.s.jb.next, a, this.s.zc);
        this.s.zc(a);
        return xa(this)
    };
    var ya = function(a, b) {
        a.s.Sa();
        var c = a.s.jb;
        if (c) return wa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.s.return);
        a.s.return(b);
        return xa(a)
    };
    va.prototype.Jc = function(a) {
        this.s.Sa();
        if (this.s.jb) return wa(this, this.s.jb["throw"], a, this.s.zc);
        this.s.Jc(a);
        return xa(this)
    };
    var wa = function(a, b, c, d) {
            try {
                var e = b.call(a.s.jb, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.s.sc = !1, e;
                var f = e.value
            } catch (g) {
                return a.s.jb = null, a.s.Jc(g), xa(a)
            }
            a.s.jb = null;
            d.call(a.s, f);
            return xa(a)
        },
        xa = function(a) {
            for (; a.s.ka;) try {
                var b = a.Hi(a.s);
                if (b) return a.s.sc = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.s.jf = void 0, a.s.Jc(c)
            }
            a.s.sc = !1;
            if (a.s.ea) {
                b = a.s.ea;
                a.s.ea = null;
                if (b.Zf) throw b.Hf;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        za = function(a) {
            this.next =
                function(b) {
                    return a.zc(b)
                };
            this.throw = function(b) {
                return a.Jc(b)
            };
            this.return = function(b) {
                return ya(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Aa = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ba = function(a) {
            return Aa(new za(new va(a)))
        },
        Ca = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            void 0 !== a["throw"] && (this["throw"] = function(b) {
                return Promise.resolve(a["throw"](b))
            });
            void 0 !== a["return"] && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        x = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    q("Promise", function(a) {
        function b() {
            this.Wa = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.tf = function(g) {
            if (null == this.Wa) {
                this.Wa = [];
                var h = this;
                this.uf(function() {
                    h.wh()
                })
            }
            this.Wa.push(g)
        };
        var d = da.setTimeout;
        b.prototype.uf = function(g) {
            d(g, 0)
        };
        b.prototype.wh = function() {
            for (; this.Wa && this.Wa.length;) {
                var g = this.Wa;
                this.Wa = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.eh(l)
                    }
                }
            }
            this.Wa = null
        };
        b.prototype.eh = function(g) {
            this.uf(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Xb = 0;
            this.Gc = void 0;
            this.Rb = [];
            this.cg = !1;
            var h = this.Yd();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.Yd = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Si),
                reject: g(this.Oe)
            }
        };
        e.prototype.Si = function(g) {
            if (g === this) this.Oe(new TypeError("g"));
            else if (g instanceof e) this.Vi(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Ri(g) : this.Kf(g)
            }
        };
        e.prototype.Ri = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Oe(k);
                return
            }
            "function" == typeof h ? this.Wi(h, g) : this.Kf(g)
        };
        e.prototype.Oe = function(g) {
            this.vg(2, g)
        };
        e.prototype.Kf = function(g) {
            this.vg(1, g)
        };
        e.prototype.vg = function(g, h) {
            if (0 != this.Xb) throw Error("h`" + g + "`" + h + "`" + this.Xb);
            this.Xb = g;
            this.Gc = h;
            2 === this.Xb && this.Ti();
            this.xh()
        };
        e.prototype.Ti = function() {
            var g = this;
            d(function() {
                if (g.pi()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.Gc)
                }
            }, 1)
        };
        e.prototype.pi = function() {
            if (this.cg) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Gc;
            return k(g)
        };
        e.prototype.xh = function() {
            if (null != this.Rb) {
                for (var g = 0; g < this.Rb.length; ++g) f.tf(this.Rb[g]);
                this.Rb = null
            }
        };
        var f = new b;
        e.prototype.Vi = function(g) {
            var h =
                this.Yd();
            g.Wc(h.resolve, h.reject)
        };
        e.prototype.Wi = function(g, h) {
            var k = this.Yd();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, v) {
                return "function" == typeof p ? function(y) {
                    try {
                        l(p(y))
                    } catch (C) {
                        m(C)
                    }
                } : v
            }
            var l, m, r = new e(function(p, v) {
                l = p;
                m = v
            });
            this.Wc(k(g, l), k(h, m));
            return r
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Wc = function(g, h) {
            function k() {
                switch (l.Xb) {
                    case 1:
                        g(l.Gc);
                        break;
                    case 2:
                        h(l.Gc);
                        break;
                    default:
                        throw Error("i`" +
                            l.Xb);
                }
            }
            var l = this;
            null == this.Rb ? f.tf(k) : this.Rb.push(k);
            this.cg = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = t(g), m = l.next(); !m.done; m = l.next()) c(m.value).Wc(h, k)
            })
        };
        e.all = function(g) {
            var h = t(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function r(y) {
                    return function(C) {
                        p[y] = C;
                        v--;
                        0 == v && l(p)
                    }
                }
                var p = [],
                    v = 0;
                do p.push(void 0), v++, c(k.value).Wc(r(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    q("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ea = function(a, b) {
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
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ea(this, function(b) {
                return b
            })
        }
    });
    q("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function d(k) {
            if (!ja(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (r) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.pc = (g += Math.random() + 1).toString();
                if (k) {
                    k = t(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("j");
            d(k);
            if (!ja(k, f)) throw Error("k`" + k);
            k[f][this.pc] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ja(k, f) ? k[f][this.pc] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ja(k, f) && ja(k[f], this.pc)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ja(k, f) && ja(k[f], this.pc) ? delete k[f][this.pc] : !1
        };
        return h
    });
    q("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(t([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = t(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.S ? l.S.value = k : (l.S = {
                next: this[1],
                Pa: this[1].Pa,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.S), this[1].Pa.next = l.S, this[1].Pa = l.S, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.S && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.S.Pa.next = h.S.next, h.S.next.Pa = h.S.Pa,
                h.S.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Pa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).S
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).S) && h.value
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
            for (var l = this.entries(),
                    m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && ja(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var r = m[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: m,
                            index: h,
                            S: r
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    S: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return fa(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Pa;
                        for (; l.next != l.head;) return l =
                            l.next, {
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
                return h.Pa = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Fa = function(a, b, c) {
        if (null == a) throw new TypeError("l`" + c);
        if (b instanceof RegExp) throw new TypeError("m`" + c);
        return a + ""
    };
    q("Array.prototype.find", function(a) {
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
    });
    q("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return [b, c]
            })
        }
    });
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    q("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Fa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Fa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return c
            })
        }
    });
    q("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(t([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.Ba = new Map;
            if (c) {
                c =
                    t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.Ba.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Ba.set(c, c);
            this.size = this.Ba.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.Ba.delete(c);
            this.size = this.Ba.size;
            return c
        };
        b.prototype.clear = function() {
            this.Ba.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.Ba.has(c)
        };
        b.prototype.entries = function() {
            return this.Ba.entries()
        };
        b.prototype.values = function() {
            return this.Ba.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.Ba.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    q("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    q("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    q("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    q("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    q("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    q("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    q("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ga = function(a) {
        return a ? a : Array.prototype.fill
    };
    q("Int8Array.prototype.fill", Ga);
    q("Uint8Array.prototype.fill", Ga);
    q("Uint8ClampedArray.prototype.fill", Ga);
    q("Int16Array.prototype.fill", Ga);
    q("Uint16Array.prototype.fill", Ga);
    q("Int32Array.prototype.fill", Ga);
    q("Uint32Array.prototype.fill", Ga);
    q("Float32Array.prototype.fill", Ga);
    q("Float64Array.prototype.fill", Ga);
    q("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    q("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ha = this || self,
        Ia = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = Ha, e = 0; e < c.length; e++)
                    if (d = d[c[e]], null == d) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return null != a ? a : b
        },
        Ja = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ma = function(a) {
            var b = Ja(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Na = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Oa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.bj = b.prototype;
            a.prototype = new c;
            a.prototype.constructor =
                a;
            a.Sj = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        Pa = function(a) {
            return a
        };
    var Qa = function() {
        this.Eg = 0
    };
    Qa.prototype.Yb = function(a, b) {
        var c = this;
        return function() {
            var d = x.apply(0, arguments);
            c.Eg = a;
            return b.apply(null, u(d))
        }
    };
    var Ra = function() {
            var a = {};
            this.Da = (a[3] = [], a[2] = [], a[1] = [], a);
            this.ye = !1
        },
        Ta = function(a, b, c) {
            var d = Sa(a, c);
            a.Da[c].push(b);
            d && 1 === a.Da[c].length && a.flush()
        },
        Sa = function(a, b) {
            return Object.keys(a.Da).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return 0 === a.Da[c].length
            })
        };
    Ra.prototype.flush = function() {
        if (!this.ye) {
            this.ye = !0;
            try {
                for (; Object.values(this.Da).some(function(a) {
                        return 0 < a.length
                    });) Ua(this, 3), Ua(this, 2), Ua(this, 1)
            } catch (a) {
                throw Object.values(this.Da).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.ye = !1
            }
        }
    };
    var Ua = function(a, b) {
        for (; Sa(a, b) && 0 < a.Da[b].length;) a.Da[b][0](), a.Da[b].shift()
    };
    da.Object.defineProperties(Ra.prototype, {
        rg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.Da).some(function(a) {
                    return 0 < a.length
                })
            }
        }
    });
    var Va = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };

    function Wa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Oa(Wa, Error);
    Wa.prototype.name = "CustomError";
    var Xa;

    function Ya(a, b) {
        var c = Wa.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(Wa, this, d + a[e])
    }
    Oa(Ya, Wa);
    Ya.prototype.name = "AssertionError";

    function Za(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Ya("" + e, f || []);
    }
    var z = function(a, b, c) {
            a || Za("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        $a = function(a, b, c) {
            null == a && Za("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        ab = function(a, b) {
            throw new Ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        cb = function(a, b, c) {
            "number" !== typeof a && Za("Expected number but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        db = function(a, b, c) {
            "string" !== typeof a && Za("Expected string but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        eb = function(a, b, c) {
            "function" !== typeof a && Za("Expected function but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        fb = function(a, b, c) {
            Na(a) || Za("Expected object but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        gb = function(a, b, c) {
            Array.isArray(a) || Za("Expected array but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        jb = function(a, b, c, d) {
            a instanceof b || Za("Expected instanceof %s but got %s.", [hb(b), hb(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function hb(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var kb;
    var mb = function(a, b) {
        if (b !== lb) throw Error("n");
        this.lg = a
    };
    mb.prototype.toString = function() {
        return this.lg + ""
    };
    var lb = {},
        nb = function(a) {
            if (void 0 === kb) {
                var b = null;
                var c = Ha.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Pa,
                        createScript: Pa,
                        createScriptURL: Pa
                    })
                } catch (d) {
                    Ha.console && Ha.console.error(d.message)
                }
                kb = b
            }
            a = (b = kb) ? b.createScriptURL(a) : a;
            return new mb(a, lb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ob = ha([""]),
        pb = ia(["\x00"], ["\\0"]),
        qb = ia(["\n"], ["\\n"]),
        rb = ia(["\x00"], ["\\u0000"]),
        sb = ha([""]),
        ub = ia(["\x00"], ["\\0"]),
        wb = ia(["\n"], ["\\n"]),
        xb = ia(["\x00"], ["\\u0000"]);

    function yb(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function zb(a) {
        return -1 === a.toString().indexOf("`")
    }
    var Ab = zb(function(a) {
            return a(ob)
        }) || zb(function(a) {
            return a(pb)
        }) || zb(function(a) {
            return a(qb)
        }) || zb(function(a) {
            return a(rb)
        }),
        Bb = yb(sb) && yb(ub) && yb(wb) && yb(xb);
    var Db = function(a) {
        if (Cb !== Cb) throw Error("p");
        this.Gi = a
    };
    Db.prototype.toString = function() {
        return this.Gi.toString()
    };
    var Cb = {};
    new Db("about:invalid#zClosurez");
    new Db("about:blank");
    new Db("about:blank");
    new Db("about:invalid#zClosurez");
    var Eb = [],
        Fb = function(a) {
            console.warn("q`" + a)
        }; - 1 === Eb.indexOf(Fb) && Eb.push(Fb);
    var Gb = Array.prototype.forEach ? function(a, b) {
            z(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Hb = Array.prototype.map ? function(a, b) {
            z(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ib = Array.prototype.some ? function(a, b) {
            z(null !=
                a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Jb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Kb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Lb(a, b, c) {
        if (!Ma(a) || !Ma(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Mb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Mb(a, b) {
        return a === b
    }

    function Nb(a, b) {
        return Jb.apply([], Hb(a, b))
    };
    var Ob = {},
        Qb = function() {
            if (Ob !== Ob) throw Error("r");
            this.Fi = ""
        };
    Qb.prototype.toString = function() {
        return this.Fi.toString()
    };
    new Qb;
    var Rb = {},
        Tb = function() {
            if (Rb !== Rb) throw Error("s");
            this.Ei = ""
        };
    Tb.prototype.toString = function() {
        return this.Ei.toString()
    };
    new Tb;
    var Ub = Ia(1, !0),
        Vb = Ia(610401301, !1);
    Ia(899588437, !1);
    var Wb = Ia(188588736, !0);
    Ia(2147483644, !1);
    Ia(2147483645, !0);
    Ia(2147483646, Ub);
    Ia(2147483647, !0);

    function Xb() {
        var a = Ha.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Yb, Zb = Ha.navigator;
    Yb = Zb ? Zb.userAgentData || null : null;

    function $b(a) {
        return Vb ? Yb ? Yb.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function D(a) {
        return -1 != Xb().indexOf(a)
    };

    function ac() {
        return Vb ? !!Yb && 0 < Yb.brands.length : !1
    }

    function bc() {
        return ac() ? !1 : D("Opera")
    }

    function cc() {
        return ac() ? !1 : D("Trident") || D("MSIE")
    }

    function dc() {
        return D("Firefox") || D("FxiOS")
    }

    function ec() {
        return D("Safari") && !(fc() || (ac() ? 0 : D("Coast")) || bc() || (ac() ? 0 : D("Edge")) || (ac() ? $b("Microsoft Edge") : D("Edg/")) || (ac() ? $b("Opera") : D("OPR")) || dc() || D("Silk") || D("Android"))
    }

    function fc() {
        return ac() ? $b("Chromium") : (D("Chrome") || D("CriOS")) && !(ac() ? 0 : D("Edge")) || D("Silk")
    }

    function gc() {
        return D("Android") && !(fc() || dc() || bc() || D("Silk"))
    }

    function hc() {
        var a = Xb();
        if (cc()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
        } else a = "";
        return a
    }

    function ic() {
        if (ac()) {
            var a = Yb.brands.find(function(b) {
                return "Internet Explorer" === b.brand
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = hc();
            if ("" === a) return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    };
    var jc = {},
        kc = function() {
            var a = Ha.trustedTypes && Ha.trustedTypes.emptyHTML || "";
            if (jc !== jc) throw Error("t");
            this.Di = a
        };
    kc.prototype.toString = function() {
        return this.Di.toString()
    };
    new kc;
    var lc = function(a, b) {
        this.name = a;
        this.value = b
    };
    lc.prototype.toString = function() {
        return this.name
    };
    var mc = new lc("OFF", Infinity),
        nc = new lc("WARNING", 900),
        oc = new lc("INFO", 800),
        pc = new lc("CONFIG", 700),
        qc = function() {
            this.Xc = 0;
            this.clear()
        },
        sc;
    qc.prototype.clear = function() {
        this.wf = Array(this.Xc);
        this.Af = -1;
        this.ag = !1
    };
    var tc = function(a, b, c) {
        this.reset(a || mc, b, c, void 0, void 0)
    };
    tc.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.li = b
    };
    tc.prototype.getMessage = function() {
        return this.li
    };
    var uc = function(a, b) {
            this.level = null;
            this.Hh = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.bi = {
                Ja: function() {
                    return a
                }
            }
        },
        vc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return vc(a.parent);
            ab("Root logger has no level set.");
            return mc
        },
        wc = function(a, b) {
            for (; a;) a.Hh.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        xc = function() {
            this.entries = {};
            var a = new uc("");
            a.level = pc;
            this.entries[""] = a
        },
        yc, zc = function(a, b, c) {
            var d = a.entries[b];
            if (d) return void 0 !== c && (d.level = c), d;
            d = b.lastIndexOf(".");
            d = b.slice(0, Math.max(d, 0));
            d = zc(a, d);
            var e = new uc(b, d);
            a.entries[b] = e;
            d.children.push(e);
            void 0 !== c && (e.level = c);
            return e
        },
        Ac = function() {
            yc || (yc = new xc);
            return yc
        },
        Cc = function(a) {
            var b = Bc;
            if (b) {
                var c = a,
                    d = nc;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? vc(zc(Ac(), b.Ja())) : mc;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || mc;
                    a = zc(Ac(), b.Ja());
                    "function" === typeof c && (c = c());
                    sc || (sc = new qc);
                    e = sc;
                    b = b.Ja();
                    if (0 < e.Xc) {
                        var f = (e.Af + 1) % e.Xc;
                        e.Af = f;
                        e.ag ? (e = e.wf[f], e.reset(d, c, b), b = e) : (e.ag = f == e.Xc - 1, b = e.wf[f] = new tc(d, c, b))
                    } else b = new tc(d,
                        c, b);
                    wc(a, b)
                }
            }
        };
    var Dc = function() {
        this.names = new Map
    };
    Dc.prototype.Ja = function(a) {
        var b = this.names.get(a);
        if (b) return b;
        var c;
        b = null != (c = a.description) ? c : Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
        this.names.set(a, b);
        return b
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Ec = !1,
        Fc = !1,
        Gc = {
            set Zb(a) {
                this.Ji || (a ? console.warn("u`" + Error().stack) : Ec && console.log("v"));
                Ec = a
            },
            get Zb() {
                return Ec
            },
            set Hg(a) {
                this.Ji || (a ? console.warn("w`" + Error().stack) : Fc && console.log("x"));
                Fc = a
            },
            get Hg() {
                return Fc
            }
        };

    function Hc(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var Ic = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (Gc.Zb) throw a;
            Hc(a)
        },
        complete: function() {}
    };
    var Jc = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function Kc(a) {
        return "function" === typeof a
    };
    var H = function(a) {
        this.Nh = a;
        this.closed = !1;
        this.Db = this.Cb = this.Ua = null
    };
    n = H.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Ua,
                b;
            if (a) this.Ua = null, a.remove(this);
            else if (b = this.Cb) {
                this.Cb = null;
                for (var c = t(b), d = c.next(); !d.done; d = c.next()) d.value.remove(this)
            }
            c = this.Nh;
            if (Kc(c)) try {
                c()
            } catch (g) {
                var e = g instanceof Jc ? g.errors : [g]
            }
            var f = this.Db;
            this.Db = null;
            if (f)
                for (c = t(f), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    try {
                        "function" === typeof d ? d() : d.unsubscribe()
                    } catch (g) {
                        d = void 0, e = null != (d = e) ? d : [], g instanceof Jc ? e = [].concat(u(e), u(g.errors)) : e.push(g)
                    }
                }
            if (e) throw new Jc(e);
        }
    };
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed) "function" === typeof a ? a() : a.unsubscribe();
            else {
                if (a instanceof H) {
                    if (a.closed || a.Rg(this)) return;
                    a.Qg(this)
                }
                var b;
                this.Db = null != (b = this.Db) ? b : [];
                this.Db.push(a)
            }
    };
    n.Rg = function(a) {
        var b;
        return this.Ua === a || (null == (b = this.Cb) ? void 0 : b.includes(a)) || !1
    };
    n.Qg = function(a) {
        var b = this.Ua,
            c;
        b ? (this.Cb = [b, a], this.Ua = null) : (c = this.Cb) ? c.push(a) : this.Ua = a
    };
    n.Sg = function(a) {
        var b = this.Ua,
            c;
        if (b) b === a && (this.Ua = null);
        else if (c = this.Cb) a = c.indexOf(a), 0 <= a && c.splice(a, 1)
    };
    n.remove = function(a) {
        var b = this.Db;
        if (b) {
            var c = b.indexOf(a);
            0 <= c && b.splice(c, 1)
        }
        a instanceof H && a.Sg(this)
    };
    var Lc = new H;
    Lc.closed = !0;
    H.EMPTY = Lc;

    function Mc(a) {
        return a instanceof H || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    };
    var I = function(a, b, c) {
        H.call(this);
        this.Xe = null;
        this.F = this.Ta = this.We = !1;
        switch (arguments.length) {
            case 0:
                this.destination = Ic;
                break;
            case 1:
                if (!a) {
                    this.destination = Ic;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof I ? (this.Ta = a.Ta, this.destination = a, a.add(this)) : (this.Ta = !0, this.destination = new Nc(this, a));
                    break
                }
            default:
                this.Ta = !0, this.destination = new Nc(this, a, b, c)
        }
    };
    w(I, H);
    I.EMPTY = H.EMPTY;
    I.create = function(a, b, c) {
        a = new I(a, b, c);
        a.Ta = !1;
        return a
    };
    n = I.prototype;
    n.next = function(a) {
        this.F || this.o(a)
    };
    n.error = function(a) {
        this.F || (this.F = !0, this.V(a))
    };
    n.complete = function() {
        this.F || (this.F = !0, this.A())
    };
    n.unsubscribe = function() {
        this.closed || (this.F = !0, H.prototype.unsubscribe.call(this))
    };
    n.o = function(a) {
        this.destination.next(a)
    };
    n.V = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.A = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var Nc = function(a, b, c, d) {
        I.call(this);
        this.Fd = a;
        if (Kc(b)) var e = b;
        else if (b && (e = b.next, c = b.error, d = b.complete, b !== Ic)) {
            if (Gc.Hg) {
                var f = Object.create(b);
                f.unsubscribe = this.unsubscribe.bind(this)
            } else f = b;
            e = e && e.bind(f);
            c = c && c.bind(f);
            d = d && d.bind(f);
            Mc(b) && b.add(this.unsubscribe.bind(this))
        }
        this.o = e;
        this.V = c;
        this.A = d
    };
    w(Nc, I);
    Nc.EMPTY = I.EMPTY;
    Nc.create = I.create;
    n = Nc.prototype;
    n.next = function(a) {
        if (!this.F && this.o) try {
            this.o(a)
        } catch (b) {
            this.Sc(b)
        }
    };
    n.error = function(a) {
        if (!this.F)
            if (this.V) {
                try {
                    this.V(a)
                } catch (b) {
                    this.Sc(b);
                    return
                }
                this.unsubscribe()
            } else this.Sc(a)
    };
    n.Sc = function(a) {
        this.unsubscribe();
        if (Gc.Zb) {
            var b = this.Fd;
            if (null == b ? 0 : b.Ta) b.Xe = a, b.We = !0;
            else throw a;
        } else Hc(a)
    };
    n.complete = function() {
        if (!this.F) {
            if (this.A) try {
                this.A()
            } catch (a) {
                this.Sc(a);
                return
            }
            this.unsubscribe()
        }
    };
    n.unsubscribe = function() {
        if (!this.closed) {
            var a = this.Fd;
            this.Fd = null;
            a.unsubscribe();
            I.prototype.unsubscribe.call(this)
        }
    };
    var Oc = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function Pc(a) {
        return a
    };

    function K() {
        return Qc(x.apply(0, arguments))
    }

    function Qc(a) {
        return 0 === a.length ? Pc : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function Rc(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var Sc = function(a) {
        I.call(this);
        this.destination = a
    };
    w(Sc, I);
    Sc.EMPTY = I.EMPTY;
    Sc.create = I.create;
    var L = function(a) {
        a && (this.da = a)
    };
    n = L.prototype;
    n.Ob = function(a) {
        var b = new L;
        b.source = this;
        b.operator = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof I || Rc(a) && Mc(a)) break a;
                if (Rc(a)) {
                    a = new Sc(a);
                    break a
                }
            }
            a = a || b || c ? new I(a, b, c) : new I(Ic)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || Gc.Zb && !a.Ta ? this.da(a) : this.Ld(a));
        if (Gc.Zb && a.Ta && (a.Ta = !1, a.We)) throw a.Xe;
        return a
    };
    n.Ld = function(a) {
        try {
            return this.da(a)
        } catch (e) {
            if (Gc.Zb) a.We = !0, a.Xe = e;
            else {
                var b;
                a: {
                    for (b = a; b;) {
                        var c = b.destination,
                            d = b.F;
                        if (b.closed || d) {
                            b = !1;
                            break a
                        }
                        b = c && c instanceof I ? c : null
                    }
                    b = !0
                }
                b ? a.error(e) : console.warn(e)
            }
        }
    };
    n.forEach = function(a, b) {
        var c = this;
        b = Tc(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    n.da = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    L.prototype[Oc] = function() {
        return this
    };
    L.prototype.g = function() {
        var a = x.apply(0, arguments);
        return 0 === a.length ? this : Qc(a)(this)
    };
    L.create = function(a) {
        return new L(a)
    };

    function Tc(a) {
        a || (a = Promise);
        if (!a) throw Error("y");
        return a
    };
    var Uc = function(a, b) {
        H.call(this);
        this.yg = a;
        this.Ve = b;
        this.closed = !1
    };
    w(Uc, H);
    Uc.EMPTY = H.EMPTY;
    Uc.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.yg,
                b = a.Na;
            this.yg = null;
            !b || 0 === b.length || a.F || a.closed || (a = b.indexOf(this.Ve), -1 !== a && b.splice(a, 1))
        }
    };
    var Vc = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var M = function() {
        this.Na = [];
        this.nc = this.F = this.closed = !1;
        this.yd = null
    };
    w(M, L);
    n = M.prototype;
    n.Ob = function(a) {
        var b = new Wc(this, this);
        b.operator = a;
        return b
    };
    n.next = function(a) {
        if (this.closed) throw new Vc;
        if (!this.F) {
            var b = this.Na,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    n.error = function(a) {
        if (this.closed) throw new Vc;
        this.nc = !0;
        this.yd = a;
        this.F = !0;
        var b = this.Na,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.Na.length = 0
    };
    n.complete = function() {
        if (this.closed) throw new Vc;
        this.F = !0;
        var a = this.Na,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.Na.length = 0
    };
    n.unsubscribe = function() {
        this.closed = this.F = !0;
        this.Na = null
    };
    n.Ld = function(a) {
        if (this.closed) throw new Vc;
        return L.prototype.Ld.call(this, a)
    };
    n.da = function(a) {
        if (this.closed) throw new Vc;
        if (this.nc) return a.error(this.yd), H.EMPTY;
        if (this.F) return a.complete(), H.EMPTY;
        this.Na.push(a);
        return new Uc(this, a)
    };
    n.P = function() {
        var a = new L;
        a.source = this;
        return a
    };
    M.create = function(a, b) {
        return new Wc(a, b)
    };
    var Wc = function(a, b) {
        M.call(this);
        this.destination = a;
        this.source = b
    };
    w(Wc, M);
    Wc.create = M.create;
    Wc.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    Wc.prototype.error = function(a) {
        this.destination && this.destination.error(a)
    };
    Wc.prototype.complete = function() {
        this.destination && this.destination.complete()
    };
    Wc.prototype.da = function(a) {
        return this.source ? this.source.subscribe(a) : H.EMPTY
    };
    var Xc = function(a) {
        M.call(this);
        this.Md = a
    };
    w(Xc, M);
    Xc.create = M.create;
    Xc.prototype.da = function(a) {
        var b = M.prototype.da.call(this, a);
        b && !b.closed && a.next(this.Md);
        return b
    };
    Xc.prototype.getValue = function() {
        if (this.nc) throw this.yd;
        if (this.closed) throw new Vc;
        return this.Md
    };
    Xc.prototype.next = function(a) {
        M.prototype.next.call(this, this.Md = a)
    };
    da.Object.defineProperties(Xc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.getValue()
            }
        }
    });
    var Yc = new L(function(a) {
        return a.complete()
    });

    function Zc(a, b) {
        return new L(function(c) {
            var d = new H,
                e = 0;
            d.add(b.D(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.D()))
            }));
            return d
        })
    };
    var $c = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function ad(a, b) {
        return b ? Zc(a, b) : new L($c(a))
    };

    function bd(a) {
        return a && "function" === typeof a.D
    };

    function N() {
        var a = x.apply(0, arguments),
            b = a[a.length - 1];
        return bd(b) ? (a.pop(), Zc(a, b)) : ad(a)
    };

    function cd(a) {
        return new L(function(b) {
            return b.error("function" === typeof a ? a() : a)
        })
    };
    var dd = {
        now: function() {
            return (dd.qh || Date).now()
        },
        qh: void 0
    };
    var ed = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? dd : c;
        M.call(this);
        this.fj = c;
        this.Pc = [];
        this.qf = !1;
        this.kf = 1 > a ? 1 : a;
        this.Yg = 1 > b ? 1 : b;
        Infinity === b ? (this.qf = !0, this.next = this.mi) : this.next = this.oi
    };
    w(ed, M);
    ed.create = M.create;
    n = ed.prototype;
    n.mi = function(a) {
        var b = this.Pc;
        b.push(a);
        b.length > this.kf && b.shift();
        M.prototype.next.call(this, a)
    };
    n.oi = function(a) {
        this.Pc.push({
            time: this.nf(),
            value: a
        });
        this.rf();
        M.prototype.next.call(this, a)
    };
    n.da = function(a) {
        var b = this.qf,
            c = b ? this.Pc : this.rf(),
            d = c.length;
        if (this.closed) throw new Vc;
        if (this.F || this.nc) var e = H.EMPTY;
        else this.Na.push(a), e = new Uc(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.nc ? a.error(this.yd) : this.F && a.complete();
        return e
    };
    n.nf = function() {
        var a = this.fj;
        return a ? a.now() : dd.now()
    };
    n.rf = function() {
        for (var a = this.nf(), b = this.kf, c = this.Yg, d = this.Pc, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var gd = function(a, b) {
        b = void 0 === b ? fd : b;
        this.Pg = a;
        this.now = b
    };
    gd.prototype.D = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.Pg(this, a)).D(c, b)
    };
    var fd = dd.now;
    var hd = function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var id = function(a, b, c, d, e) {
        I.call(this, a);
        this.yi = e;
        b && (this.o = function(f) {
            try {
                null == b || b(f)
            } catch (g) {
                this.error(g)
            }
        });
        c && (this.V = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        });
        d && (this.A = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        })
    };
    w(id, I);
    id.EMPTY = I.EMPTY;
    id.create = I.create;
    id.prototype.unsubscribe = function() {
        var a;
        this.closed || null != (a = this.yi) && a.call(this);
        I.prototype.unsubscribe.call(this)
    };

    function O(a, b) {
        if (a && "function" === typeof a.Ob) return a.Ob(b);
        throw new TypeError("z");
    };

    function jd() {
        return function(a) {
            return O(a, function(b) {
                var c = this,
                    d = null;
                b.bc++;
                var e = new id(c, void 0, void 0, void 0, function() {
                        if (!b || 0 >= b.bc || 0 < --b.bc) d = null;
                        else {
                            var g = b.Bb,
                                h = d;
                            d = null;
                            !g || h && g !== h || g.unsubscribe();
                            c.unsubscribe()
                        }
                    }),
                    f = b.subscribe(e);
                e.closed || (d = b.connect());
                return f
            })
        }
    };
    var kd = function(a, b) {
        this.source = a;
        this.zg = b;
        this.bc = 0;
        this.Qc = !1
    };
    w(kd, L);
    kd.create = L.create;
    kd.prototype.da = function(a) {
        return this.hd().subscribe(a)
    };
    kd.prototype.hd = function() {
        var a = this.Rc;
        if (!a || a.F) this.Rc = this.zg();
        return this.Rc
    };
    kd.prototype.connect = function() {
        var a = this.Bb;
        a || (this.Qc = !1, a = this.Bb = new H, a.add(this.source.subscribe(new ld(this.hd(), this))), a.closed && (this.Bb = null, a = H.EMPTY));
        return a
    };
    kd.prototype.og = function() {
        return jd()(this)
    };
    var md, nd = kd.prototype;
    md = {
        operator: {
            value: null
        },
        bc: {
            value: 0,
            writable: !0
        },
        Rc: {
            value: null,
            writable: !0
        },
        Bb: {
            value: null,
            writable: !0
        },
        da: {
            value: nd.da
        },
        Qc: {
            value: nd.Qc,
            writable: !0
        },
        hd: {
            value: nd.hd
        },
        connect: {
            value: nd.connect
        },
        og: {
            value: nd.og
        }
    };
    var ld = function(a, b) {
        I.call(this);
        this.destination = a;
        this.Vd = b
    };
    w(ld, I);
    ld.EMPTY = I.EMPTY;
    ld.create = I.create;
    ld.prototype.V = function(a) {
        this.Kd();
        I.prototype.V.call(this, a)
    };
    ld.prototype.A = function() {
        this.Vd.Qc = !0;
        this.Kd();
        I.prototype.A.call(this)
    };
    ld.prototype.Kd = function() {
        var a = this.Vd;
        if (a) {
            this.Vd = null;
            var b = a.Bb;
            a.bc = 0;
            a.Rc = null;
            a.Bb = null;
            b && b.unsubscribe()
        }
    };
    ld.prototype.unsubscribe = function() {
        this.closed || (this.Kd(), I.prototype.unsubscribe.call(this))
    };

    function P(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("A");
            return O(b, new od(a))
        }
    }
    var od = function(a) {
        this.N = a;
        this.na = void 0
    };
    od.prototype.call = function(a, b) {
        return b.subscribe(new pd(a, this.N, this.na))
    };
    var pd = function(a, b, c) {
        I.call(this, a);
        this.N = b;
        this.count = 0;
        this.na = c || this
    };
    w(pd, I);
    pd.EMPTY = I.EMPTY;
    pd.create = I.create;
    pd.prototype.o = function(a) {
        try {
            var b = this.N.call(this.na, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var qd = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };
    var rd = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var sd = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function td(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function ud(a) {
        return function(b) {
            vd(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function vd(a, b) {
        var c, d, e, f, g, h;
        return Ba(function(k) {
            switch (k.ka) {
                case 1:
                    k.lb = 2;
                    k.Ia = 3;
                    var l = a[Symbol.asyncIterator];
                    f = void 0 !== l ? l.call(a) : new Ca(t(a));
                case 5:
                    return sa(k, f.next(), 8);
                case 8:
                    d = k.jf;
                    if (d.done) {
                        k.sb(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.sb(5);
                    break;
                case 3:
                    k.he = [k.ea];
                    k.lb = 0;
                    k.Ia = 0;
                    k.lb = 0;
                    k.Ia = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.sb(9);
                        break
                    }
                    return sa(k, e.call(f), 9);
                case 9:
                    k.he[1] = k.ea;
                    k.lb = 0;
                    k.Ia = 0;
                    if (c) throw c.error;
                    ta(k, 10, 1);
                    break;
                case 10:
                    ta(k, 4);
                    break;
                case 2:
                    k.lb = 0;
                    l = k.ea.Hf;
                    k.ea = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.sb(3);
                    break;
                case 4:
                    b.complete(), k.ka = 0
            }
        })
    };
    var wd = function(a) {
        return function(b) {
            var c = a[rd]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var xd = function(a) {
        return function(b) {
            var c = a[Oc]();
            if ("function" !== typeof c.subscribe) throw new TypeError("B");
            return c.subscribe(b)
        }
    };
    var yd = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, Hc);
            return b
        }
    };
    var zd = function(a) {
        if (a && "function" === typeof a[Oc]) return xd(a);
        if (sd(a)) return $c(a);
        if (td(a)) return yd(a);
        if (a && "function" === typeof a[rd]) return wd(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return ud(a);
        throw new TypeError("C`" + (null !== a && "object" === typeof a ? "an invalid object" : "'" + a + "'"));
    };
    var Ad = function(a) {
        I.call(this);
        this.parent = a
    };
    w(Ad, I);
    Ad.EMPTY = I.EMPTY;
    Ad.create = I.create;
    Ad.prototype.o = function(a) {
        this.parent.sa(a)
    };
    Ad.prototype.V = function(a) {
        this.parent.fb(a);
        this.unsubscribe()
    };
    Ad.prototype.A = function() {
        this.parent.U();
        this.unsubscribe()
    };
    var Bd = function(a, b, c) {
        I.call(this);
        this.parent = a;
        this.kg = b;
        this.Ci = c
    };
    w(Bd, I);
    Bd.EMPTY = I.EMPTY;
    Bd.create = I.create;
    Bd.prototype.o = function(a) {
        this.parent.sa(this.kg, a, this.Ci, this)
    };
    Bd.prototype.V = function(a) {
        this.parent.fb(a);
        this.unsubscribe()
    };
    Bd.prototype.A = function() {
        this.parent.U(this);
        this.unsubscribe()
    };
    var Q = function() {
        I.apply(this, arguments)
    };
    w(Q, I);
    Q.EMPTY = I.EMPTY;
    Q.create = I.create;
    Q.prototype.sa = function(a) {
        this.destination.next(a)
    };
    Q.prototype.fb = function(a) {
        this.destination.error(a)
    };
    Q.prototype.U = function() {
        this.destination.complete()
    };
    var Cd = function() {
        I.apply(this, arguments)
    };
    w(Cd, I);
    Cd.EMPTY = I.EMPTY;
    Cd.create = I.create;
    Cd.prototype.sa = function(a, b) {
        this.destination.next(b)
    };
    Cd.prototype.fb = function(a) {
        this.destination.error(a)
    };
    Cd.prototype.U = function() {
        this.destination.complete()
    };

    function Dd(a, b) {
        if (!b.closed) return a instanceof L ? a.subscribe(b) : zd(a)(b)
    };
    var Ed = {};

    function R() {
        var a = x.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        bd(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            qd(e) && (a = e);
            null !== e && "object" === typeof e && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return O(ad(a, c), new Fd(b, d))
    }
    var Fd = function(a, b) {
        this.Ra = a;
        this.keys = b
    };
    Fd.prototype.call = function(a, b) {
        return b.subscribe(new Gd(a, this.Ra, this.keys))
    };
    var Gd = function(a, b, c) {
        Cd.call(this, a);
        this.Ra = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.gb = []
    };
    w(Gd, Cd);
    Gd.EMPTY = Cd.EMPTY;
    Gd.create = Cd.create;
    n = Gd.prototype;
    n.o = function(a) {
        this.values.push(Ed);
        this.gb.push(a)
    };
    n.A = function() {
        var a = this.gb,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.zb = this.active = b;
            for (var c = 0; c < b; c++) this.add(Dd(a[c], new Bd(this, null, c)))
        }
    };
    n.U = function() {
        0 === --this.active && this.destination.complete()
    };
    n.sa = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.zb ? e === Ed ? --this.zb : this.zb : 0;
        d[c] = b;
        0 === e && (this.Ra ? this.Ug(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    n.Ug = function(a) {
        try {
            var b = this.Ra.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function Hd(a, b) {
        if (!a) throw Error("D");
        return new L(function(c) {
            var d = new H;
            d.add(b.D(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.D(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.D())
                    })
                }))
            }));
            return d
        })
    };

    function Id(a, b) {
        if (!a) throw Error("D");
        return new L(function(c) {
            var d = new H,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.D(function() {
                e = a[rd]();
                d.add(b.D(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (k) {
                            c.error(k);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.D())
                    }
                }))
            }));
            return d
        })
    };

    function Jd(a, b) {
        return new L(function(c) {
            var d = new H;
            d.add(b.D(function() {
                var e = a[Oc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.D(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.D(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.D(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Kd(a, b) {
        return new L(function(c) {
            var d = new H;
            d.add(b.D(function() {
                return a.then(function(e) {
                    d.add(b.D(function() {
                        c.next(e);
                        d.add(b.D(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.D(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function Ld(a) {
        var b = Md;
        if (null != a) {
            if (a && "function" === typeof a[Oc]) return Jd(a, b);
            if (td(a)) return Kd(a, b);
            if (sd(a)) return Zc(a, b);
            if (a && "function" === typeof a[rd] || "string" === typeof a) return Id(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return Hd(a, b)
        }
        throw new TypeError("E`" + (null !== a && typeof a || a));
    };

    function Nd(a) {
        return a instanceof L ? a : new L(zd(a))
    };

    function Od(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(Od(function(e, f) {
                return Nd(a(e, f)).g(P(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return O(d, new Pd(a, c))
        }
    }
    var Pd = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.N = a;
        this.Ud = b
    };
    Pd.prototype.call = function(a, b) {
        return b.subscribe(new Qd(a, this.N, this.Ud))
    };
    var Qd = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        Q.call(this, a);
        this.destination = a;
        this.N = b;
        this.Ud = c;
        this.Jb = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    w(Qd, Q);
    Qd.EMPTY = Q.EMPTY;
    Qd.create = Q.create;
    Qd.prototype.o = function(a) {
        if (this.active < this.Ud) {
            var b = this.index++;
            try {
                var c = this.N(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new Ad(this);
            this.destination.add(a);
            Dd(c, a)
        } else this.buffer.push(a)
    };
    Qd.prototype.A = function() {
        this.Jb = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    Qd.prototype.sa = function(a) {
        this.destination.next(a)
    };
    Qd.prototype.U = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.o(a.shift()) : 0 === this.active && this.Jb && this.destination.complete()
    };

    function Rd(a) {
        a = void 0 === a ? Infinity : a;
        return Od(Pc, a)
    };

    function Sd() {
        return Rd(1)(N.apply(null, u(x.apply(0, arguments))))
    };

    function Td(a, b, c) {
        if (Kc(c)) {
            var d = c;
            c = void 0
        }
        return d ? Td(a, b, c).g(P(function(e) {
            return qd(e) ? d.apply(null, u(e)) : d(e)
        })) : new L(function(e) {
            Ud(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function Ud(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.ti && "function" === typeof a.si) a.ti(b, c), f = function() {
            return a.si(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) Ud(a[g], b,
                c, d, e);
        else throw new TypeError("F");
        d.add(f)
    };
    var Vd = function() {
        H.call(this)
    };
    w(Vd, H);
    Vd.EMPTY = H.EMPTY;
    Vd.prototype.D = function() {
        return this
    };
    var Wd = function(a, b) {
        return setInterval.apply(null, [a, b].concat(u(x.apply(2, arguments))))
    };
    var Xd = function(a, b) {
        H.call(this);
        this.scheduler = a;
        this.Dd = b;
        this.pending = !1
    };
    w(Xd, Vd);
    Xd.EMPTY = Vd.EMPTY;
    n = Xd.prototype;
    n.D = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        null != a && (this.id = this.Dc(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Fc(c, this.id, b);
        return this
    };
    n.Fc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Wd(a.flush.bind(a, this), c)
    };
    n.Dc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null != c && this.delay === c && !1 === this.pending) return b;
        clearInterval(b)
    };
    n.execute = function(a, b) {
        if (this.closed) return Error("G");
        this.pending = !1;
        if (a = this.lf(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.Dc(this.scheduler, this.id, null))
    };
    n.lf = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.Dd(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    n.unsubscribe = function() {
        if (!this.closed) {
            var a = this.id,
                b = this.scheduler,
                c = b.actions,
                d = c.indexOf(this);
            this.state = this.Dd = null;
            this.pending = !1;
            this.scheduler = null; - 1 !== d && c.splice(d, 1);
            null != a && (this.id = this.Dc(b, a, null));
            this.delay = null;
            Vd.prototype.unsubscribe.call(this)
        }
    };
    var Yd = function(a, b) {
        b = void 0 === b ? fd : b;
        gd.call(this, a, b);
        this.actions = [];
        this.active = !1;
        this.wd = void 0
    };
    w(Yd, gd);
    Yd.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Zd() {
        var a = x.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        bd(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof L ? a[0] : Rd(b)(ad(a, c))
    };

    function $d() {};
    var ce = new L($d);

    function S(a) {
        return function(b) {
            return O(b, new de(a))
        }
    }
    var de = function(a) {
        this.ua = a;
        this.na = void 0
    };
    de.prototype.call = function(a, b) {
        return b.subscribe(new ee(a, this.ua, this.na))
    };
    var ee = function(a, b, c) {
        I.call(this, a);
        this.ua = b;
        this.na = c;
        this.count = 0
    };
    w(ee, I);
    ee.EMPTY = I.EMPTY;
    ee.create = I.create;
    ee.prototype.o = function(a) {
        try {
            var b = this.ua.call(this.na, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function fe() {
        var a = x.apply(0, arguments);
        if (1 === a.length)
            if (qd(a[0])) a = a[0];
            else return Nd(a[0]);
        return O(ad(a), new ge)
    }
    var ge = function() {};
    ge.prototype.call = function(a, b) {
        return b.subscribe(new he(a))
    };
    var he = function(a) {
        Cd.call(this, a);
        this.oc = !1;
        this.gb = [];
        this.Ic = []
    };
    w(he, Cd);
    he.EMPTY = Cd.EMPTY;
    he.create = Cd.create;
    n = he.prototype;
    n.o = function(a) {
        this.gb.push(a)
    };
    n.A = function() {
        var a = this.gb,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.oc; c++) {
                var d = Dd(a[c], new Bd(this, null, c));
                this.Ic && this.Ic.push(d);
                this.add(d)
            }
            this.gb = null
        }
    };
    n.sa = function(a, b, c) {
        if (!this.oc) {
            this.oc = !0;
            for (var d = 0; d < this.Ic.length; d++)
                if (d !== c) {
                    var e = this.Ic[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.Ic = null
        }
        this.destination.next(b)
    };
    n.U = function(a) {
        this.oc = !0;
        Cd.prototype.U.call(this, a)
    };
    n.fb = function(a) {
        this.oc = !0;
        Cd.prototype.fb.call(this, a)
    };

    function ie() {
        var a = x.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        return O(ad(a), new je(b))
    }
    var je = function(a) {
        this.Ra = a
    };
    je.prototype.call = function(a, b) {
        return b.subscribe(new ke(a, this.Ra))
    };
    var ke = function(a, b, c) {
        void 0 === c && Object.create(null);
        I.call(this, a);
        this.Ce = [];
        this.active = 0;
        this.Ra = b
    };
    w(ke, I);
    ke.EMPTY = I.EMPTY;
    ke.create = I.create;
    ke.prototype.o = function(a) {
        var b = this.Ce;
        qd(a) ? b.push(new le(a)) : "function" === typeof a[rd] ? b.push(new me(a[rd]())) : b.push(new ne(this.destination, this, a))
    };
    ke.prototype.A = function() {
        var a = this.Ce,
            b = a.length;
        this.unsubscribe();
        if (0 === b) this.destination.complete();
        else {
            this.active = b;
            for (var c = 0; c < b; c++) {
                var d = a[c];
                d.Zi ? this.destination.add(d.subscribe()) : this.active--
            }
        }
    };
    ke.prototype.Vg = function(a) {
        try {
            var b = this.Ra.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var me = function(a) {
        this.iterator = a;
        this.He = a.next()
    };
    me.prototype.ob = function() {
        return !0
    };
    me.prototype.next = function() {
        var a = this.He;
        this.He = this.iterator.next();
        return a
    };
    me.prototype.Jb = function() {
        var a = this.He;
        return a && !!a.done
    };
    var le = function(a) {
        this.Pd = a;
        this.length = this.index = 0;
        this.length = a.length
    };
    le.prototype[rd] = function() {
        return this
    };
    le.prototype.next = function() {
        var a = this.index++,
            b = this.Pd;
        return a < this.length ? {
            value: b[a],
            done: !1
        } : {
            value: null,
            done: !0
        }
    };
    le.prototype.ob = function() {
        return this.Pd.length > this.index
    };
    le.prototype.Jb = function() {
        return this.Pd.length === this.index
    };
    var ne = function(a, b, c) {
        Q.call(this, a);
        this.parent = b;
        this.observable = c;
        this.Zi = !0;
        this.buffer = [];
        this.pb = !1
    };
    w(ne, Q);
    ne.EMPTY = Q.EMPTY;
    ne.create = Q.create;
    ne.prototype[rd] = function() {
        return this
    };
    n = ne.prototype;
    n.next = function() {
        var a = this.buffer;
        return 0 === a.length && this.pb ? {
            value: null,
            done: !0
        } : {
            value: a.shift(),
            done: !1
        }
    };
    n.ob = function() {
        return 0 < this.buffer.length
    };
    n.Jb = function() {
        return 0 === this.buffer.length && this.pb
    };
    n.U = function() {
        if (0 < this.buffer.length) {
            this.pb = !0;
            var a = this.parent;
            a.active--;
            0 === a.active && a.destination.complete()
        } else this.destination.complete()
    };
    n.sa = function(a) {
        this.buffer.push(a);
        a: {
            a = this.parent;
            for (var b = a.Ce, c = b.length, d = a.destination, e = 0; e < c; e++) {
                var f = b[e];
                if ("function" === typeof f.ob && !f.ob()) break a
            }
            e = !1;f = [];
            for (var g = 0; g < c; g++) {
                var h = b[g],
                    k = h.next();
                h.Jb() && (e = !0);
                if (k.done) {
                    d.complete();
                    break a
                }
                f.push(k.value)
            }
            a.Ra ? a.Vg(f) : d.next(f);e && d.complete()
        }
    };
    n.subscribe = function() {
        return Dd(this.observable, new Ad(this))
    };
    (function() {
        function a(b) {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = void 0 === b ? null : b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var oe = 1,
        pe, qe = {};

    function re(a) {
        return a in qe ? (delete qe[a], !0) : !1
    }
    var se = function(a) {
        var b = oe++;
        qe[b] = !0;
        pe || (pe = Promise.resolve());
        pe.then(function() {
            return re(b) && a()
        });
        return b
    };
    var te = function() {
        return se.apply(null, u(x.apply(0, arguments)))
    };
    var ue = function(a, b) {
        Xd.call(this, a, b);
        this.scheduler = a;
        this.Dd = b
    };
    w(ue, Xd);
    ue.EMPTY = Xd.EMPTY;
    ue.prototype.Fc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return Xd.prototype.Fc.call(this, a, b, c);
        a.actions.push(this);
        return a.wd || (a.wd = te(a.flush.bind(a, void 0)))
    };
    ue.prototype.Dc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null != c && 0 < c || null == c && 0 < this.delay) return Xd.prototype.Dc.call(this, a, b, c);
        0 === a.actions.length && (re(b), a.wd = void 0)
    };
    var ve = function() {
        Yd.apply(this, arguments)
    };
    w(ve, Yd);
    ve.prototype.flush = function(a) {
        this.active = !0;
        this.wd = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var we = new ve(ue);
    var xe = function(a, b) {
        Xd.call(this, a, b);
        this.scheduler = a;
        this.Dd = b
    };
    w(xe, Xd);
    xe.EMPTY = Xd.EMPTY;
    xe.prototype.D = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return Xd.prototype.D.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    xe.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? Xd.prototype.execute.call(this, a, b) : this.lf(a, b)
    };
    xe.prototype.Fc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null != c && 0 < c || null == c && 0 < this.delay ? Xd.prototype.Fc.call(this, a, b, c) : a.flush(this)
    };
    var ye = function() {
        Yd.apply(this, arguments)
    };
    w(ye, Yd);
    var Md = new ye(xe);
    var ze = function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var Ae = function() {
        this.C = new Qa;
        this.h = new Ra;
        this.Rh = Symbol();
        this.kc = new Dc
    };
    Ae.prototype.ke = function() {
        return ce
    };
    var Be = function(a, b) {
        null !== a.Ga && a.Ga.next(b)
    };
    da.Object.defineProperties(Ae.prototype, {
        yb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Rh
            }
        }
    });
    var Ce = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = Ce.prototype;
        this.name = String(a)
    };
    w(Ce, Error);
    var De = function(a) {
        Ce.call(this, 1E3, 'sfr:"' + a + '"');
        this.gi = a;
        this.__proto__ = De.prototype
    };
    w(De, Ce);
    var Ee = function() {
        Ce.call(this, 1003);
        this.__proto__ = Ee.prototype
    };
    w(Ee, Ce);
    var Fe = function() {
        Ce.call(this, 1009);
        this.__proto__ = Fe.prototype
    };
    w(Fe, Ce);
    var Ge = function() {
        Ce.call(this, 1011);
        this.__proto__ = Ge.prototype
    };
    w(Ge, Ce);
    var He = function() {
        Ce.call(this, 1007);
        this.__proto__ = Ee.prototype
    };
    w(He, Ce);
    var Ie = function() {
        Ce.call(this, 1008);
        this.__proto__ = Ee.prototype
    };
    w(Ie, Ce);
    var Je = function() {
        Ce.call(this, 1001);
        this.__proto__ = Je.prototype
    };
    w(Je, Ce);
    var Ke = function(a) {
        Ce.call(this, 1004, String(a));
        this.Oh = a;
        this.__proto__ = Ke.prototype
    };
    w(Ke, Ce);
    var Me = function(a) {
        Ce.call(this, 1010, a);
        this.__proto__ = Le.prototype
    };
    w(Me, Ce);
    var Le = function(a) {
        Ce.call(this, 1005, a);
        this.__proto__ = Le.prototype
    };
    w(Le, Ce);
    var Ne = function(a) {
        var b = x.apply(1, arguments),
            c = this;
        this.Sb = [];
        this.Sb.push(a);
        b.forEach(function(d) {
            c.Sb.push(d)
        })
    };
    Ne.prototype.H = function(a) {
        return this.Sb.some(function(b) {
            return b.H(a)
        })
    };
    Ne.prototype.L = function(a, b) {
        for (var c = 0; c < this.Sb.length; c++)
            if (this.Sb[c].H(b)) return this.Sb[c].L(a, b);
        throw new Fe;
    };

    function Oe(a) {
        var b, c, d;
        return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.u) || !d.timestamp) && "function" === typeof a.ha && "function" === typeof a.ia && "function" === typeof a.pa && "function" === typeof a.map && "function" === typeof a.ra
    };
    var Pe = Symbol("time-origin"),
        Qe = Symbol("date"),
        Re = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        Se = function(a, b) {
            if (b.timeline !== a.timeline) throw new He;
        },
        Te = function(a, b) {
            Se(a, b);
            return a.value - b.value
        };
    n = Re.prototype;
    n.equals = function(a) {
        return 0 === Te(this, a)
    };
    n.maximum = function(a) {
        Se(this, a);
        return this.value >= a.value ? this : a
    };
    n.round = function() {
        return new Re(Math.round(this.value), this.timeline)
    };
    n.add = function(a) {
        return new Re(this.value + a, this.timeline)
    };
    n.toString = function() {
        return String(this.value)
    };

    function Ue(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function Ve(a) {
        if (Ue(a)) return a;
        if (Oe(a)) return {
            u: {
                value: Ve(a.u.value),
                timestamp: Te(a.u.timestamp, new Re(0, a.u.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };
    var We = {
        pj: "app",
        Oj: "web"
    };
    var Xe = ["sessionStart", "sessionError", "sessionFinish"],
        Ye = function(a, b) {
            this.ba = a;
            this.Cd = b;
            this.ready = !1;
            this.ub = [];
            this.tg = function() {};
            this.Kg = function() {};
            this.Lf = function() {};
            this.Sf = function() {};
            this.vd = function() {}
        },
        Ze = function(a, b) {
            a.tg = b
        },
        $e = function(a, b) {
            a.Kg = b
        },
        af = function(a, b) {
            a.Lf = b
        },
        bf = function(a, b) {
            a.Sf = b
        },
        cf = function(a, b) {
            a.vd = b;
            a.vd(a.ub.length)
        },
        hf = function(a) {
            for (var b = t("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                    c = b.next(); !c.done; c = b.next()) a.ba.addEventListener(c.value, function(d) {
                df(a, d)
            });
            ef(a.ba, function(d) {
                "sessionStart" !== d.type && df(a, d)
            }, a.Cd);
            ef(a.ba, function(d) {
                "sessionStart" === d.type && (df(a, d), ff(a), gf(a))
            }, a.Cd)
        },
        df = function(a, b) {
            a.ub.push(b);
            a.vd(a.ub.length);
            gf(a)
        },
        gf = function(a) {
            if (a.ready)
                for (; 0 < a.ub.length;) {
                    var b = a.ub.pop();
                    void 0 !== b && ("geometryChange" === b.type ? a.Lf(b) : "impression" === b.type ? a.Sf(b) : Xe.includes(b.type) ? a.tg(b) : a.Kg(b));
                    a.vd(a.ub.length)
                }
        },
        ff = function(a) {
            a.ready || (a.ready = !0, a.ub.sort(function(b, c) {
                return c.timestamp - b.timestamp
            }))
        };

    function jf(a) {
        return function(b) {
            return O(b, function(c) {
                var d = this,
                    e = new H,
                    f = null,
                    g = !1,
                    h;
                f = c.subscribe(new kf(d, function(k) {
                    try {
                        h = Nd(a(k, jf(a)(c)))
                    } catch (l) {
                        d.error(l)
                    }
                    h && (f ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : g = !0)
                }));
                g ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : e.add(f);
                return e
            })
        }
    }
    var kf = function(a, b) {
        I.call(this, a);
        this.vi = b
    };
    w(kf, I);
    kf.EMPTY = I.EMPTY;
    kf.create = I.create;
    kf.prototype.V = function(a) {
        this.vi(a);
        this.unsubscribe()
    };

    function lf() {
        var a = x.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && qd(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = Nd([c].concat(u(a))),
                e = new Fd(b);
            if (c && "function" === typeof c.Ob) c = c.Ob.call(d, e);
            else throw new TypeError("z");
            return c
        }
    }

    function mf() {
        return lf.apply(null, u(x.apply(0, arguments)))
    };

    function nf(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return O(b, new of (a))
        }
    }
    var of = function(a) {
        this.defaultValue = a
    }; of .prototype.call = function(a, b) {
        return b.subscribe(new pf(a, this.defaultValue))
    };
    var pf = function(a, b) {
        I.call(this, a);
        this.defaultValue = b;
        this.isEmpty = !0
    };
    w(pf, I);
    pf.EMPTY = I.EMPTY;
    pf.create = I.create;
    pf.prototype.o = function(a) {
        this.isEmpty = !1;
        this.destination.next(a)
    };
    pf.prototype.A = function() {
        this.isEmpty && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function qf(a) {
        return function(b) {
            return O(b, new rf(a))
        }
    }
    var rf = function(a) {
        this.be = a
    };
    rf.prototype.call = function(a, b) {
        return b.subscribe(new sf(a, this.be))
    };
    var sf = function(a, b) {
        Cd.call(this, a);
        this.be = b;
        this.ga = !1;
        this.dd = [];
        this.index = 0
    };
    w(sf, Cd);
    sf.EMPTY = Cd.EMPTY;
    sf.create = Cd.create;
    n = sf.prototype;
    n.sa = function(a, b, c, d) {
        this.destination.next(a);
        tf(this, d);
        uf(this)
    };
    n.fb = function(a) {
        this.V(a)
    };
    n.U = function(a) {
        (a = tf(this, a)) && this.destination.next(a);
        uf(this)
    };
    n.o = function(a) {
        var b = this.index++;
        try {
            var c = this.be(a, b);
            if (c) {
                var d = Dd(c, new Bd(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.dd.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    n.A = function() {
        this.ga = !0;
        uf(this);
        this.unsubscribe()
    };
    var tf = function(a, b) {
            b.unsubscribe();
            var c = a.dd.indexOf(b); - 1 !== c && a.dd.splice(c, 1);
            return b.kg
        },
        uf = function(a) {
            a.ga && 0 === a.dd.length && a.destination.complete()
        };

    function vf(a) {
        return function(b) {
            return O(b, new wf(a))
        }
    }
    var wf = function(a) {
        this.eb = a;
        this.Dh = void 0
    };
    wf.prototype.call = function(a, b) {
        return b.subscribe(new xf(a, this.eb, this.Dh))
    };
    var xf = function(a, b, c) {
        Q.call(this, a);
        this.eb = b;
        this.values = new Set;
        c && this.add(Dd(c, new Ad(this)))
    };
    w(xf, Q);
    xf.EMPTY = Q.EMPTY;
    xf.create = Q.create;
    n = xf.prototype;
    n.sa = function() {
        this.values.clear()
    };
    n.fb = function(a) {
        this.V(a)
    };
    n.o = function(a) {
        this.eb ? this.Wg(a) : this.mf(a, a)
    };
    n.Wg = function(a) {
        var b = this.destination;
        try {
            var c = this.eb(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.mf(c, a)
    };
    n.mf = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function T(a) {
        return function(b) {
            return O(b, new yf(a))
        }
    }
    var yf = function(a) {
        this.compare = a;
        this.eb = void 0
    };
    yf.prototype.call = function(a, b) {
        return b.subscribe(new zf(a, this.compare, this.eb))
    };
    var zf = function(a, b, c) {
        I.call(this, a);
        this.eb = c;
        this.Rf = !1;
        "function" === typeof b && (this.compare = b)
    };
    w(zf, I);
    zf.EMPTY = I.EMPTY;
    zf.create = I.create;
    zf.prototype.compare = function(a, b) {
        return a === b
    };
    zf.prototype.o = function(a) {
        try {
            var b = this.eb;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.Rf) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.Rf = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function Af(a) {
        if (isNaN(a)) throw new TypeError("H");
        if (0 > a) throw new ze;
        return function(b) {
            return 0 === a ? Yc : O(b, new Bf(a))
        }
    }
    var Bf = function(a) {
        this.count = a
    };
    Bf.prototype.call = function(a, b) {
        return b.subscribe(new Cf(a, this.count))
    };
    var Cf = function(a, b) {
        I.call(this, a);
        this.count = b;
        this.Xg = 0
    };
    w(Cf, I);
    Cf.EMPTY = I.EMPTY;
    Cf.create = I.create;
    Cf.prototype.o = function(a) {
        var b = this.count,
            c = ++this.Xg;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function Df(a) {
        a = void 0 === a ? Ef : a;
        return function(b) {
            return O(b, new Ff(a))
        }
    }
    var Ff = function(a) {
        this.ee = a
    };
    Ff.prototype.call = function(a, b) {
        return b.subscribe(new Gf(a, this.ee))
    };
    var Gf = function(a, b) {
        I.call(this, a);
        this.ee = b;
        this.ob = !1
    };
    w(Gf, I);
    Gf.EMPTY = I.EMPTY;
    Gf.create = I.create;
    Gf.prototype.o = function(a) {
        this.ob = !0;
        this.destination.next(a)
    };
    Gf.prototype.A = function() {
        if (this.ob) return this.destination.complete();
        try {
            var a = this.ee()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function Ef() {
        return new hd
    };

    function Hf() {
        var a = x.apply(0, arguments);
        return function(b) {
            return Sd(b, N.apply(null, u(a)))
        }
    };

    function If(a) {
        return function(b) {
            return O(b, new Jf(a, b))
        }
    }
    var Jf = function(a, b) {
        this.ua = a;
        this.na = void 0;
        this.source = b
    };
    Jf.prototype.call = function(a, b) {
        return b.subscribe(new Kf(a, this.ua, this.na, this.source))
    };
    var Kf = function(a, b, c, d) {
        I.call(this, a);
        this.ua = b;
        this.na = c;
        this.source = d;
        this.index = 0;
        this.na = c || this
    };
    w(Kf, I);
    Kf.EMPTY = I.EMPTY;
    Kf.create = I.create;
    Kf.prototype.U = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    Kf.prototype.o = function(a) {
        var b = !1;
        try {
            b = this.ua.call(this.na, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.U(!1)
    };
    Kf.prototype.A = function() {
        this.U(!0)
    };

    function Nf() {
        return function(a) {
            return O(a, new Of)
        }
    }
    var Of = function() {};
    Of.prototype.call = function(a, b) {
        return b.subscribe(new Pf(a))
    };
    var Pf = function() {
        I.apply(this, arguments)
    };
    w(Pf, I);
    Pf.EMPTY = I.EMPTY;
    Pf.create = I.create;
    Pf.prototype.o = function() {};

    function Qf() {
        if (isNaN(1)) throw new TypeError("H");
        return function(a) {
            return O(a, new Rf)
        }
    }
    var Rf = function() {
        this.total = 1
    };
    Rf.prototype.call = function(a, b) {
        return b.subscribe(new Sf(a, this.total))
    };
    var Sf = function(a, b) {
        I.call(this, a);
        this.total = b;
        this.qg = [];
        this.count = 0
    };
    w(Sf, I);
    Sf.EMPTY = I.EMPTY;
    Sf.create = I.create;
    Sf.prototype.o = function(a) {
        var b = this.qg,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    Sf.prototype.A = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.qg, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function Tf(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.g(a ? S(function(e, f) {
                return a(e, f, d)
            }) : Pc, Qf(), c ? nf(b) : Df(function() {
                return new hd
            }))
        }
    };

    function Uf(a) {
        return function(b) {
            return O(b, new Vf(a))
        }
    }
    var Vf = function(a) {
        this.value = a
    };
    Vf.prototype.call = function(a, b) {
        return b.subscribe(new Wf(a, this.value))
    };
    var Wf = function(a, b) {
        I.call(this, a);
        this.value = b
    };
    w(Wf, I);
    Wf.EMPTY = I.EMPTY;
    Wf.create = I.create;
    Wf.prototype.o = function() {
        this.destination.next(this.value)
    };

    function Xf(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return O(d, new Yf(a, b, c))
        }
    }
    var Yf = function(a, b, c) {
        this.Nd = a;
        this.seed = b;
        this.Kh = void 0 === c ? !1 : c
    };
    Yf.prototype.call = function(a, b) {
        return b.subscribe(new Zf(a, this.Nd, this.seed, this.Kh))
    };
    var Zf = function(a, b, c, d) {
        I.call(this, a);
        this.Nd = b;
        this.Gd = c;
        this.pf = d;
        this.index = 0
    };
    w(Zf, I);
    Zf.EMPTY = I.EMPTY;
    Zf.create = I.create;
    Zf.prototype.o = function(a) {
        var b = this.destination;
        if (this.pf) {
            var c = this.index++;
            try {
                var d = this.Nd(this.Gd, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.Gd = d;
            b.next(d)
        } else this.Gd = a, this.pf = !0, b.next(a)
    };

    function $f(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, md);
            d.source = b;
            d.zg = c;
            return d
        }
    };

    function ag() {
        var a = x.apply(0, arguments);
        1 === a.length && qd(a[0]) && (a = a[0]);
        return function(b) {
            return O(b, new bg(a))
        }
    }
    var bg = function(a) {
        this.Ie = a
    };
    bg.prototype.call = function(a, b) {
        return b.subscribe(new cg(a, this.Ie))
    };
    var cg = function(a, b) {
        Q.call(this, a);
        this.destination = a;
        this.Ie = b
    };
    w(cg, Q);
    cg.EMPTY = Q.EMPTY;
    cg.create = Q.create;
    cg.prototype.fb = function() {
        dg(this)
    };
    cg.prototype.U = function() {
        dg(this)
    };
    cg.prototype.V = function() {
        dg(this);
        this.unsubscribe()
    };
    cg.prototype.A = function() {
        dg(this);
        this.unsubscribe()
    };
    var dg = function(a) {
        var b = a.Ie.shift();
        if (b) {
            var c = new Ad(a);
            a.destination.add(c);
            Dd(b, c)
        } else a.destination.complete()
    };

    function eg(a) {
        var b = new ed(a, void 0, void 0);
        return function(c) {
            return $f(function() {
                return b
            })(c)
        }
    };

    function fg() {
        var a = void 0 === a ? Infinity : a;
        return function(b) {
            return 0 >= a ? Yc : O(b, function(c) {
                var d = this,
                    e = 0,
                    f = new H,
                    g, h = function() {
                        var k = !1;
                        g = c.subscribe({
                            next: function(l) {
                                return d.next(l)
                            },
                            error: function(l) {
                                return d.error(l)
                            },
                            complete: function() {
                                ++e < a ? g ? (g.unsubscribe(), g = null, h()) : k = !0 : d.complete()
                            }
                        });
                        k ? (g.unsubscribe(), g = null, h()) : f.add(g)
                    };
                h();
                return f
            })
        }
    };

    function gg() {
        return new M
    }

    function hg() {
        return function(a) {
            return jd()($f(gg)(a))
        }
    };

    function V() {
        var a = x.apply(0, arguments),
            b = a[a.length - 1];
        return bd(b) ? (a.pop(), function(c) {
            return Sd(a, c, b)
        }) : function(c) {
            return Sd(a, c)
        }
    };
    var ig = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? we : c;
        this.source = a;
        this.delayTime = b;
        this.scheduler = c;
        0 > b && (this.delayTime = 0);
        bd(c) || (this.scheduler = we)
    };
    w(ig, L);
    ig.create = L.create;
    ig.rh = function(a) {
        this.add(a.source.subscribe(a.Ve))
    };
    ig.prototype.da = function(a) {
        return this.scheduler.D(ig.rh, this.delayTime, {
            source: this.source,
            Ve: a
        })
    };

    function jg() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return O(b, new kg(a))
        }
    }
    var kg = function(a) {
        this.scheduler = Md;
        this.delay = a
    };
    kg.prototype.call = function(a, b) {
        return (new ig(b, this.delay, this.scheduler)).subscribe(a)
    };

    function W(a) {
        return function(b) {
            return O(b, new lg(a))
        }
    }
    var lg = function(a) {
        this.N = a
    };
    lg.prototype.call = function(a, b) {
        return b.subscribe(new mg(a, this.N))
    };
    var mg = function(a, b) {
        Q.call(this, a);
        this.destination = a;
        this.N = b;
        this.index = 0
    };
    w(mg, Q);
    mg.EMPTY = Q.EMPTY;
    mg.create = Q.create;
    mg.prototype.o = function(a) {
        var b = this.index++;
        try {
            var c = this.N(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.md) && a.unsubscribe();
        a = new Ad(this);
        this.destination.add(a);
        this.md = a;
        Dd(c, a)
    };
    mg.prototype.A = function() {
        var a = this.md;
        a && !a.closed || Q.prototype.A.call(this);
        this.md = void 0;
        this.unsubscribe()
    };
    mg.prototype.U = function() {
        this.md = void 0;
        this.F && Q.prototype.A.call(this)
    };
    mg.prototype.sa = function(a) {
        this.destination.next(a)
    };

    function ng(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return O(c, new og(a, b))
        }
    }
    var og = function(a, b) {
        this.ua = a;
        this.te = b
    };
    og.prototype.call = function(a, b) {
        return b.subscribe(new pg(a, this.ua, this.te))
    };
    var pg = function(a, b, c) {
        I.call(this, a);
        this.ua = b;
        this.te = c;
        this.index = 0
    };
    w(pg, I);
    pg.EMPTY = I.EMPTY;
    pg.create = I.create;
    pg.prototype.o = function(a) {
        var b = this.destination;
        try {
            var c = this.ua(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.te && b.next(a), b.complete())
    };

    function qg(a, b, c) {
        return function(d) {
            return O(d, new rg(a, b, c))
        }
    }
    var rg = function(a, b, c) {
        this.ni = a;
        this.error = b;
        this.complete = c
    };
    rg.prototype.call = function(a, b) {
        return b.subscribe(new sg(a, this.ni, this.error, this.complete))
    };
    var sg = function(a, b, c, d) {
        I.call(this, a);
        this.Hd = this.Id = this.Jd = $d;
        this.Id = c || $d;
        this.Hd = d || $d;
        Kc(b) ? (this.Oc = this, this.Jd = b) : b && (this.Oc = b, this.Jd = b.next || $d, this.Id = b.error || $d, this.Hd = b.complete || $d)
    };
    w(sg, I);
    sg.EMPTY = I.EMPTY;
    sg.create = I.create;
    sg.prototype.o = function(a) {
        try {
            this.Jd.call(this.Oc, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    sg.prototype.V = function(a) {
        try {
            this.Id.call(this.Oc, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    sg.prototype.A = function() {
        try {
            this.Hd.call(this.Oc)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function tg() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return O(b, new ug(a, c))
        }
    }
    var ug = function(a, b) {
        this.gb = a;
        this.N = b
    };
    ug.prototype.call = function(a, b) {
        return b.subscribe(new vg(a, this.gb, this.N))
    };
    var vg = function(a, b, c) {
        Cd.call(this, a);
        this.N = c;
        this.zb = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.zb.push(c);
        for (c = 0; c < a; c++) this.add(Dd(b[c], new Bd(this, void 0, c)))
    };
    w(vg, Cd);
    vg.EMPTY = Cd.EMPTY;
    vg.create = Cd.create;
    vg.prototype.sa = function(a, b, c) {
        this.values[c] = b;
        b = this.zb;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    vg.prototype.U = function() {};
    vg.prototype.o = function(a) {
        0 === this.zb.length && (a = [a].concat(u(this.values)), this.N ? this.Tg(a) : this.destination.next(a))
    };
    vg.prototype.Tg = function(a) {
        try {
            var b = this.N.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var wg = function(a) {
        this.ba = a
    };
    wg.prototype.H = function(a) {
        return (null == a ? 0 : a.cc) ? !0 : "POST" === (null == a ? void 0 : a.wa) || (null == a ? 0 : a.nb) || (null == a ? 0 : a.bd) ? !1 : this.ba.H()
    };
    wg.prototype.ping = function() {
        var a = this,
            b = N.apply(null, u(x.apply(0, arguments))).g(Od(function(c) {
                return xg(a, c)
            }), If(function(c) {
                return c
            }), eg(1));
        b.connect();
        return b
    };
    var xg = function(a, b) {
        var c = new ed(1);
        yg(a.ba, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    wg.prototype.ud = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function zg(a, b) {
        var c = !1;
        return new L(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var Ag = function(a) {
        this.ba = a;
        this.timeline = Qe
    };
    n = Ag.prototype;
    n.setTimeout = function(a, b) {
        return Number(this.ba.setTimeout(function() {
            return a()
        }, b))
    };
    n.clearTimeout = function(a) {
        this.ba.clearTimeout(a)
    };
    n.now = function() {
        return new Re(Date.now(), this.timeline)
    };
    n.interval = function(a, b) {
        var c = this.La(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.La = function(a) {
        return zg(this, a).g(fg(), Xf(function(b) {
            return b + 1
        }, -1))
    };
    n.fa = function() {
        return !0
    };
    var Bg = function(a, b) {
        this.context = a;
        this.Tb = b
    };
    Bg.prototype.H = function(a) {
        return this.Tb.H(a)
    };
    Bg.prototype.L = function(a, b) {
        if (!this.H(b)) throw new Fe;
        return new Cg(this.context, this.Tb, null != b ? b : void 0, a)
    };
    var Cg = function(a, b, c, d) {
        var e = this;
        this.Tb = b;
        this.properties = c;
        this.url = d;
        this.od = !0;
        this.nb = new Map;
        this.body = void 0;
        var f;
        this.method = null != (f = null == c ? void 0 : c.wa) ? f : "GET";
        this.fh = a.ke().subscribe(function() {
            e.sendNow()
        })
    };
    Cg.prototype.deactivate = function() {
        this.od = !1
    };
    Cg.prototype.sendNow = function() {
        if (this.od)
            if (this.fh.unsubscribe(), this.Tb.H(this.properties)) try {
                if (0 < this.nb.size || void 0 !== this.body) {
                    var a, b;
                    this.Tb.ud(null != (a = this.properties) ? a : {}, this.nb, null != (b = this.body) ? b : "", this.url)
                } else this.Tb.ping(this.url);
                this.od = !1
            } catch (c) {} else this.od = !1
    };
    var Eg = function(a, b, c, d, e, f) {
            this.mode = a;
            this.i = b;
            this.setTime = c;
            this.Ec = d;
            this.ej = e;
            this.kh = f;
            this.ga = !1;
            this.id = 0 === this.mode ? Dg(this) : 0
        },
        Dg = function(a) {
            return a.i.setTimeout(function() {
                Fg(a)
            }, a.Ec)
        },
        Gg = function(a, b) {
            var c = Te(b, a.setTime);
            c >= a.Ec ? Fg(a) : (a.setTime = b, a.Ec -= c)
        },
        Fg = function(a) {
            try {
                a.ej(a.setTime.add(a.Ec))
            } finally {
                a.ga = !0, a.kh()
            }
        };
    Eg.prototype.cf = function(a, b) {
        this.ga || (1 === this.mode && 1 === a ? Gg(this, b) : 1 === this.mode && 0 === a ? (this.mode = a, Gg(this, this.i.now()), this.ga || (this.id = Dg(this))) : 0 === this.mode && 1 === a && (this.mode = a, this.clear(), Gg(this, b)))
    };
    Eg.prototype.clear = function() {
        this.ga || this.i.clearTimeout(this.id)
    };
    var Hg = function(a) {
        this.cd = a;
        this.Ph = this.mode = 0;
        this.Mb = {};
        this.timeline = a.timeline;
        this.tb = a.now()
    };
    n = Hg.prototype;
    n.cf = function(a, b) {
        this.mode = a;
        Se(this.tb, b);
        this.tb = b;
        Object.values(this.Mb).forEach(function(c) {
            return void c.cf(a, b)
        })
    };
    n.now = function() {
        return 1 === this.mode ? this.tb : this.cd.now()
    };
    n.setTimeout = function(a, b) {
        var c = this,
            d = ++this.Ph,
            e = 1 === this.mode ? this.tb : this.cd.now();
        this.Mb[d] = new Eg(this.mode, this.cd, e, b, function(f) {
            var g = c.tb;
            1 === c.mode && (c.tb = f);
            a();
            c.tb = g
        }, function() {
            delete c.Mb[d]
        });
        return d
    };
    n.clearTimeout = function(a) {
        this.Mb[a] && (this.Mb[a].clear(), delete this.Mb[a])
    };
    n.interval = function() {
        throw Error("I");
    };
    n.La = function() {
        throw Error("J");
    };
    n.fa = function() {
        return this.cd.fa()
    };

    function Ig(a, b) {
        var c = new Hg(a);
        a = b.subscribe(function(d) {
            c.cf(d.value ? 1 : 0, d.timestamp)
        });
        return {
            i: c,
            Zj: a
        }
    };

    function Jg(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new Re(a.timestamp, Qe),
            value: b
        }
    };

    function Kg(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function Lg(a) {
        var b = x.apply(1, arguments),
            c = b.length;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Ab && a === a.raw || !(Ab && !Bb || yb(a)) || c + 1 !== a.length) throw new TypeError("o");
        if (0 === b.length) return nb(a[0]);
        c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("Q");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("K");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("L");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("M");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("N");
            d = !0
        } else d = !1;
        if (!d)
            if (/^\//.test(c))
                if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
                else throw Error("P");
        else d = !1;
        if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
            if (/^about:blank/.test(c)) {
                if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("O");
                d = !0
            } else d = !1;
        if (!d) throw Error("R");
        c = a[0];
        for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return nb(c)
    };
    var Mg = ha(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        Ng = ha(["./reach_worklet.js"]),
        Og = ha(["./reach_worklet.js"]),
        Pg = ha(["./reach_worklet.html"]),
        Qg = ha(["./reach_worklet.js"]),
        Rg = ha(["./reach_worklet.js"]);

    function Sg(a) {
        var b = {};
        return b[0] = Lg(Mg, a), b[1] = Lg(Ng), b[2] = Lg(Og), b
    }
    Lg(Pg);
    Lg(Qg);
    Lg(Rg);
    var Ug = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? Sg("current") : d;
        Ae.call(this);
        this.ba = a;
        this.Cd = b;
        this.Ga = c;
        this.xg = d;
        this.hb = null;
        this.Se = new ed(3);
        this.Se.g(S(function(e) {
            return "sessionStart" === e.value.type
        }));
        this.Ui = this.Se.g(S(function(e) {
            return "sessionFinish" === e.value.type
        }));
        this.Tf = new ed(1);
        this.jj = new ed;
        this.Mf = new ed(10);
        this.K = new Bg(this, new wg(a));
        this.Xh = this.ba.H();
        this.i = Tg(this, new Ag(this.ba))
    };
    w(Ug, Ae);
    var Vg = function(a) {
        null !== a.hb && hf(a.hb)
    };
    Ug.prototype.validate = function() {
        return this.Xh
    };
    var Tg = function(a, b) {
        a.hb = new Ye(a.ba, a.Cd);
        var c = new ed;
        Ze(a.hb, function(f) {
            f = Jg(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Se.next(f)
        });
        af(a.hb, function(f) {
            if (void 0 === f) var g = !1;
            else {
                g = f.data;
                var h;
                (h = void 0 === g) || (h = g.viewport, h = void 0 === h || void 0 !== h && "number" === typeof h.width && "number" === typeof h.height);
                h ? (g = g.adView, g = void 0 !== g && "number" === typeof g.percentageInView && (void 0 === g.geometry || Kg(g.geometry)) && (void 0 === g.onScreenGeometry || Kg(g.onScreenGeometry))) : g = !1
            }
            g ? (f = Jg(f), c.next({
                timestamp: f.timestamp,
                value: !0
            }), a.Mf.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f), a.K.L(f).sendNow())
        });
        $e(a.hb, function(f) {
            f = Jg(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.jj.next(f)
        });
        bf(a.hb, function(f) {
            f = Jg(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Tf.next(f)
        });
        var d = 0;
        cf(a.hb, function(f) {
            d += f;
            0 < d && 0 === f && c.next({
                timestamp: a.i.now(),
                value: !1
            })
        });
        var e = c.g(ng(function(f) {
            return f.value
        }, !0));
        return Ig(b,
            e).i
    };
    da.Object.defineProperties(Ug.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Wg
            }
        }
    });
    var Wg = {};

    function Xg(a, b) {
        if (!b) throw Error("S`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("T`" + a);
        if ("" === b.trim()) throw Error("U`" + a);
    }

    function Yg(a) {
        if (!a) throw Error("X`functionToExecute");
    }

    function Zg(a, b) {
        if (null == b) throw Error("V`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("W`" + a);
        if (0 > b) throw Error("Y`" + a);
    };

    function $g() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.10-google_20240110")
    }

    function ah() {
        for (var a = ["1", "4", "10"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var bh = function(a, b, c, d) {
            this.Qf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        ch = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        dh = function(a) {
            return new bh(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    bh.prototype.ib = function() {
        var a = {};
        a = (a.omid_message_guid = this.Qf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var eh = function(a) {
        this.Ad = a
    };
    eh.prototype.ib = function() {
        return JSON.stringify(void 0)
    };

    function fh(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    var gh = function(a) {
            return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
                return fh(a, b)
            })
        },
        hh = function(a) {
            for (var b = t(Object.values(We)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = {};
                d = (d.app = "omid_v1_present_app", d.web = "omid_v1_present_web", d)[c];
                if (fh(a, d)) return c
            }
            return null
        };

    function ih(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function jh() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function kh() {
        var a = x.apply(0, arguments);
        lh(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(u(a))));
        }, function() {
            return console.error.apply(console, u(a))
        })
    }

    function lh(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var mh = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("Z");
    }();
    var nh = function(a) {
        this.Ad = a;
        this.handleExportedMessage = nh.prototype.Fh.bind(this)
    };
    w(nh, eh);
    nh.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Ad : b;
        if (!b) throw Error("$");
        b.handleExportedMessage(a.ib(), this)
    };
    nh.prototype.Fh = function(a, b) {
        if (ch(a) && this.onMessage) this.onMessage(dh(a), b)
    };

    function oh(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function ph(a) {
        if (a === mh) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function qh() {
        var a;
        "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
        return oh(a) ? a : mh
    };
    var rh = function(a, b) {
        this.Ad = b = void 0 === b ? mh : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (ch(e) && d.source && c.onMessage) c.onMessage(dh(e), d.source)
            }
        })
    };
    w(rh, eh);
    rh.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Ad : b;
        if (!b) throw Error("$");
        b.postMessage(a.ib(), "*")
    };
    var sh = ["omid", "v1_VerificationServiceCommunication"],
        th = ["omidVerificationProperties", "serviceWindow"];

    function uh(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var vh = function(a) {
        if (!a) {
            a = qh();
            var b = void 0 === b ? gh : b;
            var c = [],
                d = uh(a, th);
            d && c.push(d);
            c.push(oh(a) ? a.top : mh);
            a: {
                c = t(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;e = e.value;
                        var f = b;
                        if (!ph(e)) try {
                            var g = uh(e, sh);
                            if (g) {
                                var h = new nh(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new rh(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.ic = a) this.ic.onMessage = this.Gh.bind(this);
        else if (b = (b = mh.omid3p) && "function" === typeof b.registerSessionObserver && "function" === typeof b.addEventListener ? b : null) this.Ac = b;
        this.Ni = this.Oi =
            0;
        this.Rd = {};
        this.qe = [];
        this.rc = (b = mh.omidVerificationProperties) ? b.injectionId : void 0
    };
    vh.prototype.H = function() {
        var a = qh();
        var b = (b = mh.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return "web" !== (b || hh(a) || hh(oh(a) ? a.top : mh)) || this.rc ? !(!this.ic && !this.Ac) : !1
    };
    var ef = function(a, b, c) {
        Yg(b);
        a.Ac ? a.Ac.registerSessionObserver(b, c, a.rc) : a.Wb("addSessionListener", b, c, a.rc)
    };
    vh.prototype.addEventListener = function(a, b) {
        Xg("eventType", a);
        Yg(b);
        this.Ac ? this.Ac.addEventListener(a, b, this.rc) : this.Wb("addEventListener", b, a, this.rc)
    };
    var yg = function(a, b, c, d) {
            Xg("url", b);
            mh.document && mh.document.createElement ? wh(a, b, c, d) : a.Wb("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        wh = function(a, b, c, d) {
            var e = mh.document.createElement("img");
            a.qe.push(e);
            var f = function(g) {
                var h = a.qe.indexOf(e);
                0 <= h && a.qe.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    vh.prototype.setTimeout = function(a, b) {
        Yg(a);
        Zg("timeInMillis", b);
        if (xh()) return mh.setTimeout(a, b);
        var c = this.Oi++;
        this.Wb("setTimeout", a, c, b);
        return c
    };
    vh.prototype.clearTimeout = function(a) {
        Zg("timeoutId", a);
        xh() ? mh.clearTimeout(a) : this.sg("clearTimeout", a)
    };
    vh.prototype.setInterval = function(a, b) {
        Yg(a);
        Zg("timeInMillis", b);
        if (yh()) return mh.setInterval(a, b);
        var c = this.Ni++;
        this.Wb("setInterval", a, c, b);
        return c
    };
    vh.prototype.clearInterval = function(a) {
        Zg("intervalId", a);
        yh() ? mh.clearInterval(a) : this.sg("clearInterval", a)
    };
    var xh = function() {
            return "function" === typeof mh.setTimeout && "function" === typeof mh.clearTimeout
        },
        yh = function() {
            return "function" === typeof mh.setInterval && "function" === typeof mh.clearInterval
        };
    vh.prototype.Gh = function(a) {
        var b = a.method,
            c = a.Qf;
        a = a.args;
        if ("response" === b && this.Rd[c]) {
            var d = $g() && ah() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.Rd[c].apply(this, d)
        }
        "error" === b && window.console && kh(a)
    };
    vh.prototype.sg = function(a) {
        this.Wb.apply(this, [a, null].concat(u(x.apply(1, arguments))))
    };
    vh.prototype.Wb = function(a, b) {
        var c = x.apply(2, arguments);
        if (this.ic) {
            var d = jh();
            b && (this.Rd[d] = b);
            var e = "VerificationService." + a;
            c = $g() && ah() ? c : JSON.stringify(c);
            this.ic.sendMessage(new bh(d, e, "1.4.10-google_20240110", c))
        }
    };
    var zh = void 0;
    if (zh = void 0 === zh ? "undefined" === typeof omidExports ? null : omidExports : zh) {
        var Ah = ["OmidVerificationClient"];
        Ah.slice(0, Ah.length - 1).reduce(ih, zh)[Ah[Ah.length - 1]] = vh
    };

    function Bh(a, b) {
        return function(c) {
            return new L(function(d) {
                return c.subscribe(function(e) {
                    a.Yb(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Yb(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Yb(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var Dh = function() {
        for (var a = t(x.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.fa()) {
                this.i = b;
                return
            }
        this.i = new Ch
    };
    n = Dh.prototype;
    n.fa = function() {
        return this.i.fa()
    };
    n.now = function() {
        return this.i.now()
    };
    n.setTimeout = function(a, b) {
        return this.i.setTimeout(a, b)
    };
    n.clearTimeout = function(a) {
        this.i.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.La(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.La = function(a) {
        return this.i.La(a)
    };
    da.Object.defineProperties(Dh.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.i.timeline
            }
        }
    });
    var Ch = function() {
        this.timeline = Symbol()
    };
    n = Ch.prototype;
    n.fa = function() {
        return !1
    };
    n.now = function() {
        return new Re(0, this.timeline)
    };
    n.setTimeout = function() {
        return 0
    };
    n.clearTimeout = function() {};
    n.interval = function() {
        return function() {}
    };
    n.La = function() {
        return ce
    };
    var Eh = function(a, b) {
        this.J = a;
        this.C = b
    };
    n = Eh.prototype;
    n.setTimeout = function(a, b) {
        return this.J.setTimeout(this.C.Yb(734, a), b)
    };
    n.clearTimeout = function(a) {
        this.J.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.La(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.La = function(a) {
        var b = this;
        return new L(function(c) {
            var d = 0,
                e = b.J.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.J.clearInterval(e)
            }
        })
    };
    n.fa = function() {
        return !!this.J.clearTimeout && "setTimeout" in this.J && "setInterval" in this.J && !!this.J.clearInterval
    };
    var Fh = function(a, b) {
        Eh.call(this, a, b);
        this.timeline = Qe
    };
    w(Fh, Eh);
    Fh.prototype.now = function() {
        return new Re(this.J.Date.now(), this.timeline)
    };
    Fh.prototype.fa = function() {
        return !!this.J.Date && !!this.J.Date.now && Eh.prototype.fa.call(this)
    };
    var Gh = function(a, b) {
        Eh.call(this, a, b);
        this.timeline = Pe
    };
    w(Gh, Eh);
    Gh.prototype.now = function() {
        return new Re(this.J.performance.now(), this.timeline)
    };
    Gh.prototype.fa = function() {
        return !!this.J.performance && !!this.J.performance.now && Eh.prototype.fa.call(this)
    };

    function Hh(a) {
        a = a.global;
        if (a.fetchLater) return a.fetchLater
    }
    var Jh = function(a) {
            this.context = a;
            if (void 0 === Ih) {
                var b, c, d = null == (b = a.global) ? void 0 : null == (c = b.document) ? void 0 : c.createElement("meta");
                try {
                    d && (d.httpEquiv = "origin-trial", d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", a.global.document.head.append(d))
                } catch (e) {}
                Ih = d
            }
        },
        Ih;
    Jh.prototype.H = function(a) {
        return void 0 !== Hh(this.context) && !(null == a || !a.Df) && !Kh(this.context) && !(null == a ? 0 : a.cc) && !(null == a ? 0 : a.nb) && !(null == a ? 0 : a.bd)
    };
    Jh.prototype.L = function(a, b) {
        if (!this.H(b)) throw new Fe;
        return new Lh(this.context, a, b)
    };
    var Lh = function(a, b, c) {
            this.context = a;
            this.properties = c;
            this.Ab = b;
            var d;
            this.wa = null != (d = null == c ? void 0 : c.wa) ? d : "GET";
            a = Hh(this.context);
            if (void 0 === a) throw Error();
            this.fetchLater = a;
            Mh(this, this.uc())
        },
        Mh = function(a, b) {
            a.Xa && a.Xa.activated || (a.dc = new AbortController, a.Xa = a.fetchLater.call(a.context.global, b, {
                method: a.wa,
                signal: a.dc.signal
            }))
        };
    Lh.prototype.uc = function() {
        var a = this.Ab;
        return ("&" === a.slice(-1)[0] ? a : a + "&") + "flapi=1"
    };
    Lh.prototype.deactivate = function() {
        this.Xa && !this.Xa.activated && this.dc && (this.dc.abort(), this.Xa = void 0)
    };
    Lh.prototype.sendNow = function() {};
    da.Object.defineProperties(Lh.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ab
            },
            set: function(a) {
                this.Ab = a;
                a = this.uc();
                this.Xa && this.Xa.activated || !this.dc || (this.dc.abort(), this.Xa = void 0);
                Mh(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.wa
            }
        }
    });
    var Nh = function(a) {
        this.context = a
    };
    Nh.prototype.H = function() {
        return !Kh(this.context) && !!this.context.global.fetch
    };
    Nh.prototype.ping = function() {
        var a = this;
        return Zd.apply(null, u(x.apply(0, arguments).map(function(b) {
            return Nd(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(P(function(c) {
                return 200 === c.status
            }))
        }))).g(If(function(b) {
            return b
        }), Tf())
    };
    Nh.prototype.ud = function(a, b, c) {
        for (var d = x.apply(3, arguments), e = this, f = new Headers, g = t(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = t(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = null != (l = a.keepAlive) ? l : !1;
        Zd.apply(null, u(d.map(function(r) {
            return Nd(e.context.global.fetch(r, Object.assign({}, {
                method: String(a.wa),
                cache: "no-cache"
            }, m ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).g(P(function(p) {
                return 200 === p.status
            }))
        }))).g(If(function(r) {
            return r
        }), Tf())
    };
    var Oh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Ph = function(a) {
        Ph[" "](a);
        return a
    };
    Ph[" "] = function() {};
    var Qh = function(a, b) {
        try {
            return Ph(a[b]), !0
        } catch (c) {}
        return !1
    };

    function Rh() {
        return Vb ? !!Yb && !!Yb.platform : !1
    }

    function Sh() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    }

    function Th() {
        Sh() || D("iPad") || D("iPod")
    };
    var Uh = bc(),
        Vh = cc(),
        Wh = D("Edge"),
        Xh = D("Gecko") && !(Va(Xb(), "WebKit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        Yh = Va(Xb(), "WebKit") && !D("Edge");
    Yh && D("Mobile");
    Rh() || D("Macintosh");
    Rh() || D("Windows");
    (Rh() ? "Linux" === Yb.platform : D("Linux")) || Rh() || D("CrOS");
    Rh() || D("Android");
    Sh();
    D("iPad");
    D("iPod");
    Th();
    Va(Xb(), "KaiOS");
    var Zh = function() {
            var a = Ha.document;
            return a ? a.documentMode : void 0
        },
        $h;
    a: {
        var ci = "",
            di = function() {
                var a = Xb();
                if (Xh) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Wh) return /Edge\/([\d\.]+)/.exec(a);
                if (Vh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Yh) return /WebKit\/(\S+)/.exec(a);
                if (Uh) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();di && (ci = di ? di[1] : "");
        if (Vh) {
            var ei = Zh();
            if (null != ei && ei > parseFloat(ci)) {
                $h = String(ei);
                break a
            }
        }
        $h = ci
    }
    var fi = $h,
        gi;
    if (Ha.document && Vh) {
        var hi = Zh();
        gi = hi ? hi : parseInt(fi, 10) || void 0
    } else gi = void 0;
    var ii = gi;
    var ji = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    n = ji.prototype;
    n.clone = function() {
        return new ji(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof ji && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof ji ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var ki = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = ki.prototype;
    n.clone = function() {
        return new ki(this.width, this.height)
    };
    n.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.isEmpty = function() {
        return !(this.width * this.height)
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var ni = function(a) {
            return a ? new li(mi(a)) : Xa || (Xa = new li)
        },
        oi = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Yh || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Vh && a.pageYOffset != b.scrollTop ? new ji(b.scrollLeft, b.scrollTop) : new ji(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        pi = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ma(f) ||
                    Na(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Na(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Gb(g ? Kb(f) : f, d)
                }
            }
        },
        mi = function(a) {
            z(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        qi = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                z("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        li = function(a) {
            this.Fb = a || Ha.document ||
                document
        };
    n = li.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.Fb).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.Fb;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.Fb.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        z(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        pi(mi(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    n.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    n.isElement = function(a) {
        return Na(a) && 1 == a.nodeType
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var si = function() {
            return Vb && Yb ? Yb.mobile : !ri() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
        },
        ri = function() {
            return Vb && Yb ? !Yb.mobile && (D("iPad") || D("Android") || D("Silk")) : D("iPad") || D("Android") && !D("Mobile") || D("Silk")
        };
    var ti = function(a) {
        try {
            return !!a && null != a.location.href && Qh(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var ui = function(a) {
        this.context = a
    };
    ui.prototype.H = function(a) {
        return (null == a ? 0 : a.cc) || "POST" === (null == a ? void 0 : a.wa) || (null == a ? 0 : a.nb) || (null == a ? 0 : a.bd) || (null == a ? 0 : a.keepAlive) ? !1 : !Kh(this.context)
    };
    ui.prototype.ping = function() {
        var a = this;
        return N(x.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = void 0 === d ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    ui.prototype.ud = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function vi(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var wi = function(a) {
        this.context = a
    };
    wi.prototype.H = function(a) {
        return xi && !Kh(this.context) && void 0 !== vi(this.context) && !(null == a ? 0 : a.cc) && "POST" !== (null == a ? void 0 : a.wa) && !(null == a ? 0 : a.nb) && !(null == a ? 0 : a.bd)
    };
    wi.prototype.L = function(a, b) {
        if (!this.H(b)) throw new Fe;
        return new yi(this.context, a)
    };
    var xi = !1,
        yi = function(a, b) {
            this.context = a;
            this.Ab = b;
            a = vi(this.context);
            if (void 0 === a) throw Error();
            this.hf = new a(this.uc(), {})
        };
    yi.prototype.uc = function() {
        var a = this.Ab;
        return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
    };
    yi.prototype.deactivate = function() {
        this.hf.deactivate()
    };
    yi.prototype.sendNow = function() {
        this.hf.sendNow()
    };
    da.Object.defineProperties(yi.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ab
            },
            set: function(a) {
                this.Ab = a;
                this.hf.setURL(this.uc())
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if ("GET" !== a) throw new Fe;
            }
        }
    });
    var zi = function(a) {
        this.context = a
    };
    zi.prototype.H = function(a) {
        if ((null == a ? 0 : a.cc) || "GET" === (null == a ? void 0 : a.wa) || (null == a ? 0 : a.nb) || (null == a ? 0 : a.bd) || (null == a ? 0 : a.keepAlive)) return !1;
        var b;
        return !Kh(this.context) && void 0 !== (null == (b = this.context.global.navigator) ? void 0 : b.sendBeacon)
    };
    zi.prototype.ping = function() {
        var a = this;
        return N(x.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.context.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    zi.prototype.ud = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function Ai(a) {
        return function(b) {
            return b.g(Bi(a, $f(new M)))
        }
    }

    function X(a, b) {
        return function(c) {
            return c.g(Bi(a, eg(b)))
        }
    }

    function Bi(a, b) {
        function c(d) {
            return new L(function(e) {
                return d.subscribe(function(f) {
                    Ta(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Ta(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Ta(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return K(c, jg(), b, jd(), c)
    };
    var Z = function(a) {
        this.value = a
    };
    Z.prototype.P = function(a) {
        return N(this.value).g(X(a, 1))
    };
    var Ci = new Z(!1);
    dc();
    Sh() || D("iPod");
    D("iPad");
    gc();
    fc();
    ec() && Th();
    var Di = {},
        Ei = null,
        Fi = Xh || Yh || "function" == typeof Ha.btoa,
        Hi = function(a) {
            var b;
            z(Ma(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            Gi();
            b = Di[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Ji = function(a) {
            var b =
                a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Ii(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Ii = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Ei[l];
                    if (null != m) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("ba`" + l);
                }
                return k
            }
            Gi();
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
        Gi = function() {
            if (!Ei) {
                Ei = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Di[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = Ei[f];
                        void 0 === g ? Ei[f] = e : z(g === e)
                    }
                }
            }
        };

    function Ki(a) {
        var b = Li(a);
        return null === b ? new Z(null) : b.g(P(function(c) {
            c = c.ib();
            if (Fi) c = Ha.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (255 < g) throw Error("aa");
                    d[e++] = g
                }
                c = Hi(d)
            }
            return c
        }), Af(1), X(a.h, 1))
    };

    function Mi(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Ni = function(a) {
        this.value = a;
        this.Pe = new M
    };
    Ni.prototype.release = function() {
        this.Pe.next();
        this.Pe.complete();
        this.value = void 0
    };
    da.Object.defineProperties(Ni.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Pe
            }
        }
    });
    var Oi = ["FRAME", "IMG", "IFRAME"],
        Pi = /^[01](px)?$/;

    function Qi(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function Ri(a) {
        if (a.readyState) return a.readyState;
        var b, c;
        return null == (b = a.contentWindow) ? void 0 : null == (c = b.document) ? void 0 : c.readyState
    }

    function Si(a, b) {
        b = void 0 === b ? !1 : b;
        if ("IMG" === a.tagName) {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight)) return !0;
            var c;
            if (b && "none" === (null == (c = a.style) ? void 0 : c.display)) return !0
        }
        var d, e;
        return Pi.test(null != (d = a.getAttribute("width")) ? d : "") && Pi.test(null != (e = a.getAttribute("height")) ? e : "")
    }

    function Ti(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        var g = void 0 === g ? !1 : g;
        if (a = Qi(a)) {
            e || (e = function(ea, E, A) {
                ea.addEventListener(E, A)
            });
            for (var h = !1, k = function(ea) {
                    h || (h = !0, b(ea))
                }, l, m = 2, r = 0; r < Oi.length; ++r)
                if (Oi[r] === a.tagName) {
                    m = 3;
                    l = [a];
                    break
                }
            l || (l = a.querySelectorAll(Oi.join(",")));
            var p = 0,
                v = 0,
                y = !g,
                C = a = !1;
            r = {};
            for (var B = 0; B < l.length; r = {
                    pd: void 0
                }, B++) {
                var G = l[B];
                if (!Si(G, g)) {
                    r.pd = "IMG" === G.tagName;
                    if ("IMG" === G.tagName) var J = G.naturalWidth && G.naturalHeight ?
                        !0 : !1;
                    else try {
                        J = "complete" === Ri(G)
                    } catch (ea) {
                        J = void 0 === d ? !1 : d
                    }
                    if (J) a = !0, r.pd && (y = !0);
                    else {
                        p++;
                        var Y = function(ea) {
                            return function(E) {
                                p--;
                                !p && y && k(m);
                                ea.pd && (E = E && "error" === E.type, v--, E || (y = !0), !v && C && y && k(m))
                            }
                        }(r);
                        e(G, "load", Y);
                        r.pd && (v++, e(G, "error", Y))
                    }
                }
            }
            0 === v && (y = !0);
            l = null;
            if (0 === p && !a && "complete" === Ha.document.readyState) m = 5;
            else if (p || !a) {
                e(Ha, "load", function() {
                    !f || !v && y ? k(4) : C = !0
                });
                return
            }
            c && k(m)
        }
    };

    function Ui(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Vi(a, b) {
        Ui(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Wi(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Xi(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Yi(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = Xi(a);
            if (c.source && e) {
                var f;
                Vi(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Wi(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Zi(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var $i = function(a, b) {
        var c = Zi(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ha.addEventListener("message", function(f) {
                    Yi(c, e, f)
                })
            }
    };
    var aj = function(a, b) {
            var c = this;
            this.global = a;
            this.td = b;
            this.zi = this.document ? Zd(N(!0), Td(this.document, "visibilitychange")).g(Bh(this.td.C, 748), P(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), T()) : N("visible");
            this.ui = this.document ? Td(this.document, "DOMContentLoaded").g(Bh(this.td.C, 739), Af(1)) : N(Mi("DOMContentLoaded"))
        },
        bj = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        cj = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    aj.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    aj.prototype.querySelectorAll = function(a) {
        return this.document ? Kb(this.document.querySelectorAll(a)) : []
    };
    var dj = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    aj.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !dj(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return null === a ? null : new Ni(a)
    };
    var ej = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (void 0 === b.j || !a.document) return N(b).g(Bh(a.td.C, 749));
            var d = new ed(1),
                e = function() {
                    d.next(b)
                };
            c || $i(b.j, e);
            Ti(b.j, e);
            return d.g(Bh(a.td.C, 749), Af(1))
        },
        fj = function(a, b) {
            a.document && (a.document.body && "complete" === bj(a) ? a.document.body.appendChild(b) : a.document.addEventListener("DOMContentLoaded", function() {
                var c, d;
                null == (c = a.document) || null == (d = c.body) || d.appendChild(b)
            }))
        },
        gj = function(a, b, c) {
            var d, e, f;
            return Ba(function(g) {
                if (1 == g.ka) {
                    d = a.global.document.createElement("iframe");
                    e = new Promise(function(k) {
                        d.onload = k;
                        d.onerror = k
                    });
                    if (b instanceof mb && b.constructor === mb) var h = b.lg;
                    else ab("expected object of type TrustedResourceUrl, got '%s' of type %s", b, Ja(b)), h = "type_error:TrustedResourceUrl";
                    d.src = h.toString();
                    fj(a, d);
                    d.style.display = "none";
                    return sa(g, e, 2)
                }
                f = d.contentWindow;
                if (!f) return g.return();
                f.postMessage(c, "*");
                return g.return(d)
            })
        };
    da.Object.defineProperties(aj.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Qh(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var hj = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function ij(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function jj(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function kj(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var lj = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = lj.prototype;
    n.le = function() {
        return this.right - this.left
    };
    n.je = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new lj(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof lj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        Na(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof ji ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (cb(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function mj(a, b) {
        if (a) throw Error("ca");
        b.push(65533)
    }

    function nj(a, b) {
        b = String.fromCharCode.apply(null, b);
        return null == a ? b : a + b
    }
    var oj = void 0,
        pj, qj, rj = "undefined" !== typeof TextDecoder;
    var sj = "undefined" !== typeof Uint8Array,
        tj = !Vh && "function" === typeof btoa;

    function uj(a) {
        if (!tj) return Hi(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var vj = /[-_.]/g,
        wj = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function xj(a) {
        return wj[a] || ""
    }

    function yj(a) {
        if (!tj) return Ji(a);
        var b = a;
        vj.test(b) && (b = b.replace(vj, xj));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("da`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var zj, Aj = {};
    var Bj, Dj = function(a, b) {
        if (b !== Aj) throw Error("ea");
        this.Nc = a;
        if (null != a && 0 === a.length) throw Error("fa");
        this.dontPassByteStringToStructuredClone = Cj
    };
    Dj.prototype.isEmpty = function() {
        return null == this.Nc
    };

    function Cj() {};

    function Ej(a) {
        return Array.prototype.slice.call(a)
    };

    function Fj(a, b) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(a) : b
    }
    var Gj = Fj("INTERNAL_ARRAY_STATE"),
        Hj = Fj("defaultInstance", "0di");
    z(13 === Math.round(Math.log2(Math.max.apply(Math, u(Object.values({
        Fj: 1,
        Dj: 2,
        Cj: 4,
        Jj: 8,
        Ij: 16,
        Hj: 32,
        qj: 64,
        Mj: 128,
        Bj: 256,
        Aj: 512,
        Ej: 1024,
        uj: 2048,
        Lj: 4096,
        vj: 8192
    }))))));

    function Ij(a) {
        z((a & 16777215) == a)
    }
    var Jj = Gj ? function(a, b) {
        Ij(b);
        gb(a, "state is only maintained on arrays.");
        a[Gj] |= b
    } : function(a, b) {
        Ij(b);
        gb(a, "state is only maintained on arrays.");
        void 0 !== a.cb ? a.cb |= b : Object.defineProperties(a, {
            cb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

    function Kj(a, b, c) {
        return c ? a | b : a & ~b
    }
    var Lj = Object.getOwnPropertyDescriptor(Array.prototype, "Yh");
    Object.defineProperties(Array.prototype, {
        Yh: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Mj(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(4096, "STRING_FORMATTED");
                a(8192, "GBIGINT_FORMATTED");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                a(2048, "FROZEN_ARRAY");
                var d = Nj(b);
                536870912 !== d && c.push("pivot: " + d);
                d = c.join(",");
                return Lj ? Lj.get.call(this) +
                    "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Mj = Gj ? function(a) {
        gb(a, "state is only maintained on arrays.");
        return a[Gj] | 0
    } : function(a) {
        gb(a, "state is only maintained on arrays.");
        return a.cb | 0
    };

    function Oj(a, b) {
        z(b & 64, "state for messages must be constructed");
        z(0 === (b & 5), "state for messages should not contain repeated field state");
        var c = Nj(b),
            d = a.length;
        z(c + (+!!(b & 512) - 1) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && z("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        z((null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Pj = Gj ? function(a) {
            gb(a, "state is only maintained on arrays.");
            var b = a[Gj];
            Oj(a, b);
            return b
        } : function(a) {
            gb(a, "state is only maintained on arrays.");
            var b = a.cb;
            Oj(a, b);
            return b
        },
        Qj = Gj ? function(a, b) {
            gb(a, "state is only maintained on arrays.");
            Ij(b);
            a[Gj] = b;
            return a
        } : function(a, b) {
            gb(a, "state is only maintained on arrays.");
            Ij(b);
            void 0 !== a.cb ? a.cb = b : Object.defineProperties(a, {
                cb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };

    function Rj(a) {
        return !!(Mj(a) & 2)
    }

    function Sj(a, b) {
        Qj(b, (a | 0) & -14591)
    }

    function Tj(a, b) {
        Qj(b, (a | 34) & -14557)
    }

    function Uj(a, b) {
        cb(b);
        z(0 < b && 1023 >= b || 536870912 === b);
        return a & -16760833 | (b & 1023) << 14
    }

    function Nj(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Vj, Wj = {};

    function Xj(a) {
        var b = a.ii === Wj;
        z(!Vj || b === a instanceof Vj);
        return b
    }
    var Yj = {};

    function Zj(a) {
        var b = !(!a || "object" !== typeof a || a.Xj !== Yj);
        z(b === a instanceof Map);
        return b && 0 === jb(a, Map).size
    }

    function ak(a, b) {
        cb(a);
        z(0 < a);
        z(0 === b || -1 === b);
        return a + b
    }

    function bk(a, b) {
        cb(a);
        z(0 <= a);
        z(0 === b || -1 === b);
        return a - b
    }

    function ck(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var dk;

    function ek(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Mj(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Qj(a, d | 1);
        return !0
    }
    var fk, gk = [];
    Qj(gk, 55);
    fk = Object.freeze(gk);

    function hk(a) {
        if (a & 2) throw Error("ga");
    }
    var ik = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function jk() {}
    var kk;

    function lk(a, b) {
        gb(a);
        if (b) {
            kk || (kk = Symbol("unknownBinaryFields"));
            var c = a[kk];
            c ? c.push(b) : a[kk] = [b]
        }
    }

    function mk(a, b) {
        gb(a);
        gb(b);
        (b = kk ? gb(b)[kk] : void 0) && (a[kk] = Ej(b))
    }
    var nk;

    function ok(a, b) {
        var c = Mj(gb(a));
        b || z(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && Xj(g) && (Rj(g.B) ? e = !0 : d = !0)
            });
            f && z(!e && !d);
            c && z(!f && !d);
            b && z(!f && !e)
        }
        pk(a)
    }

    function pk(a) {
        var b = Mj(a),
            c = b & 4,
            d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        z(c && 1 >= d || !c && 0 === d, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Mj(a))
            for (b = 0; b < a.length; b++) "string" !== typeof a[b] && ab("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var qk = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var rk = "function" === typeof Uint8Array.prototype.slice,
        sk = 0,
        tk = 0;

    function uk(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = t(vk(c, a)), b = c.next().value, a = c.next().value, c = b);
        sk = c >>> 0;
        tk = a >>> 0
    }

    function wk() {
        var a = sk,
            b = tk;
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else "function" === typeof BigInt ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), z(b), c = b + xk(c) + xk(a));
        return c
    }

    function xk(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function vk(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function yk(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        return a
    };

    function zk(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    }

    function Ak(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Bk(a) {
        if ("boolean" !== typeof a) throw Error("ha`" + Ja(a) + "`" + a);
        return a
    }

    function Ck(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    }
    var Dk = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Ek(a) {
        var b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Dk.test(a)
    }

    function Fk(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function Gk(a) {
        return "Expected uint32 as finite number but got " + Ja(a) + ": " + a
    }

    function Hk(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Ik(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }

    function Jk(a) {
        z(0 > a || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        z(Number.isInteger(a));
        if (0 > a) {
            uk(a);
            var b = wk();
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Ik(String(a))) return a;
        uk(a);
        return 4294967296 * tk + (sk >>> 0)
    }

    function Kk(a) {
        if (null == a) return a;
        if (Ek(a)) {
            if ("string" === typeof a) {
                z(Ek(a));
                z(!0);
                var b = Math.trunc(Number(a));
                if (Number.isSafeInteger(b) && 0 <= b) a = String(b);
                else if (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), z(-1 === a.indexOf(".")), !Ik(a)) {
                    z(0 < a.length);
                    if (16 > a.length) uk(Number(a));
                    else if ("function" === typeof BigInt) a = BigInt(a), sk = Number(a & BigInt(4294967295)) >>> 0, tk = Number(a >> BigInt(32) & BigInt(4294967295));
                    else {
                        z(0 < a.length);
                        b = +("-" === a[0]);
                        tk = sk = 0;
                        for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
                            e += 6) d = Number(a.slice(d, e)), tk *= 1E6, sk = 1E6 * sk + d, 4294967296 <= sk && (tk += Math.trunc(sk / 4294967296), tk >>>= 0, sk >>>= 0);
                        b && (b = t(vk(sk, tk)), a = b.next().value, b = b.next().value, sk = a, tk = b)
                    }
                    a = wk()
                }
                return a
            }
            if ("number" === typeof a) return z(Ek(a)), z(!0), a = Math.trunc(a), 0 <= a && Number.isSafeInteger(a) ? a : Jk(a)
        }
    }

    function Lk(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Mk(a, b, c) {
        if (null != a && "object" === typeof a && Xj(a)) return a;
        if (Array.isArray(a)) {
            var d = Mj(a),
                e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && Qj(a, e);
            return new b(a)
        }
    };
    var Nk = function() {
        throw Error("ka");
    };
    if (ik) {
        var Ok = function() {
                throw Error("la");
            },
            Pk = {};
        Object.defineProperties(Nk, (Pk[Symbol.hasInstance] = {
            value: Ok,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, Pk));
        z(Nk[Symbol.hasInstance] === Ok, "defineProperties did not work: was it monkey-patched?")
    };
    var Qk;

    function Rk(a, b) {
        z(!!(Mj(b) & 32));
        Qk = b;
        a = new a(b);
        Qk = void 0;
        return a
    }
    var Sk, Tk;

    function Uk(a) {
        switch (typeof a) {
            case "boolean":
                return Sk || (Sk = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Tk || (Tk = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return gb(a), z(2 === a.length || 3 === a.length && !0 === a[2]), z(null == a[0] || "number" === typeof a[0] && 0 <= a[0]), z(null == a[1] || "string" === typeof a[1]), a
        }
    }

    function Vk(a, b) {
        gb(b);
        return Wk(a, b[0], b[1])
    }

    function Wk(a, b, c) {
        null == a && (a = Qk);
        Qk = void 0;
        if (null != a)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && ok(e)
            }
        if (null == a) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = Uj(e, b));
        else {
            if (!Array.isArray(a)) throw Error("ma`" + JSON.stringify(a) + "`" + Ja(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("na");
            e = Mj(a);
            if (e & 2048) throw Error();
            if (e & 64) return Oj(a, e), a;
            e |= 64;
            if (c && (e |= 512, c !== a[0])) throw Error("oa`" + c + "`" + JSON.stringify(a[0]) + "`" + Ja(a[0]));
            a: {
                d = a;c = e;
                if (e = d.length) {
                    var f =
                        e - 1;
                    if (ck(d[f])) {
                        c |= 256;
                        b = bk(f, +!!(c & 512) - 1);
                        if (1024 <= b) throw Error("pa`" + b);
                        e = Uj(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, bk(e, +!!(c & 512) - 1));
                    if (1024 < b) throw Error("qa`" + e);
                    e = Uj(c, b)
                } else e = c
            }
        }
        Qj(a, e);
        z(e & 64);
        return a
    };

    function Xk(a, b) {
        return Yk(b)
    }

    function Yk(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ek(a, void 0, 0)) return
                    } else {
                        if (sj && null != a && a instanceof Uint8Array) return uj(a);
                        if (a instanceof Dj) {
                            var b = a.Nc;
                            return null == b ? "" : "string" === typeof b ? b : a.Nc = uj(b)
                        }
                    }
        }
        return a
    };

    function Zk(a, b, c) {
        var d = Ej(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) z(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        mk(d, a);
        return d
    }

    function $k(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = ek(a, void 0, 0) ? void 0 : e && Mj(a) & 2 ? a : al(a, b, c, void 0 !== d, e);
            else if (ck(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = $k(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function al(a, b, c, d, e) {
        var f = d || c ? Mj(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = Ej(a), h = 0; h < g.length; h++) g[h] = $k(g[h], b, c, d, e);
        c && (mk(g, a), c(f, g));
        return g
    }

    function bl(a) {
        return Xj(a) ? a.toJSON() : Yk(a)
    };

    function cl(a, b, c) {
        c = void 0 === c ? Tj : c;
        if (null != a) {
            if (sj && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Mj(a);
                if (d & 2) return a;
                ok(a);
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Qj(a, (d | 34) & -12293) : al(a, cl, d & 4 ? Tj : c, !0, !0)
            }
            Xj(a) && (z(Xj(a)), c = a.B, d = Pj(c), a = d & 2 ? a : Rk(a.constructor, dl(c, d, !0)));
            return a
        }
    }

    function dl(a, b, c) {
        var d = c || b & 2 ? Tj : Sj,
            e = !!(b & 32);
        a = Zk(a, b, function(f) {
            return cl(f, e, d)
        });
        Jj(a, 32 | (c ? 2 : 0));
        return a
    }

    function el(a) {
        var b = a.B,
            c = Pj(b);
        return c & 2 ? Rk(a.constructor, dl(b, c, !1)) : a
    };
    var gl = function(a, b) {
            a = a.B;
            return fl(a, Pj(a), b)
        },
        fl = function(a, b, c, d) {
            if (-1 === c) return null;
            if (c >= Nj(b)) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var e = a.length;
                if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
                b = ak(c, +!!(b & 512) - 1);
                if (b < e) return a[b]
            }
        },
        il = function(a, b, c) {
            var d = a.B,
                e = Pj(d);
            hk(e);
            hl(d, e, b, c);
            return a
        };

    function hl(a, b, c, d) {
        z(!ck(d), "Invalid object passed to a setter");
        var e = Nj(b);
        if (c >= e) {
            z(536870912 !== e);
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (null == d) return f;
                g = ak(e, +!!(b & 512) - 1);
                z(g >= a.length && Number.isInteger(g) && 4294967295 > g, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[ak(c, +!!(b & 512) - 1)] = void 0);
            f !== b && Qj(a, f);
            return f
        }
        a[ak(c, +!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var kl = function(a, b, c, d) {
        return void 0 !== jl(a, b, c, void 0 === d ? !1 : d)
    };

    function ll(a, b) {
        if (!a) return a;
        z(Rj(b) ? Rj(a.B) : !0);
        return a
    }

    function ml(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        ok(a, c);
        z(!!(Mj(a) & 1));
        c || (d || z(Object.isFrozen(a) || !(Mj(a) & 32)), z(Rj(b) ? Object.isFrozen(a) : !0));
        return a
    }
    var nl = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = Pj(a);
        z(!0);
        var e = d & 2;
        c = fl(a, d, b, c);
        Array.isArray(c) || (c = fk);
        var f = !!(d & 32),
            g = Mj(c);
        0 === g && f && !e ? (g |= 33, Qj(c, g)) : g & 1 || (g |= 1, Qj(c, g));
        if (e) g & 2 || Jj(c, 34), Object.freeze(c);
        else if (2 & g || 2048 & g) c = Ej(c), e = 1, f && (e |= 32), Qj(c, e), hl(a, d, b, c);
        return ml(c, a, !1, !0)
    };

    function ol(a, b, c) {
        a = fl(a, b, c);
        return Array.isArray(a) ? a : fk
    }

    function pl(a, b, c) {
        0 === a && (a = ql(a, b, c));
        return a = Kj(a, 1, !0)
    }

    function rl(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    var sl = function(a, b, c, d) {
        var e = Pj(a);
        hk(e);
        d = fl(a, e, c, d);
        if (null != d && Xj(d)) return b = el(d), b !== d && hl(a, e, c, b), b.B;
        if (Array.isArray(d)) {
            var f = Mj(d);
            f = f & 2 ? dl(d, f, !1) : d;
            f = Vk(f, b)
        } else f = Vk(void 0, b);
        f !== d && hl(a, e, c, f);
        return f
    };

    function jl(a, b, c, d) {
        a = a.B;
        var e = Pj(a);
        d = fl(a, e, c, d);
        b = Mk(d, b, e);
        b !== d && null != b && hl(a, e, c, b);
        return ll(b, a)
    }
    var ul = function(a) {
            var b = tl;
            (a = jl(a, b, 2, !1)) ? b = a: (a = b[Hj]) ? b = a : (a = new b, Jj(a.B, 34), b = b[Hj] = a);
            return b
        },
        vl = function(a, b, c) {
            b = jl(a, b, c, !1);
            if (null == b) return b;
            a = a.B;
            var d = Pj(a);
            if (!(d & 2)) {
                var e = el(b);
                e !== b && (b = e, hl(a, d, c, b))
            }
            return ll(b, a)
        },
        xl = function(a) {
            var b = wl;
            a = a.B;
            var c = Pj(a),
                d;
            var e = !!e;
            d && (d = !(2 & c));
            var f = ol(a, c, 10),
                g = Mj(f),
                h = !!(4 & g);
            if (!h) {
                g = pl(g, c, e);
                var k = f,
                    l = c,
                    m;
                (m = !!(2 & g)) && (l = Kj(l, 2, !0));
                for (var r = !m, p = !0, v = 0, y = 0; v < k.length; v++) {
                    var C = Mk(k[v], b, l);
                    if (C instanceof b) {
                        if (!m) {
                            var B = Rj(C.B);
                            r && (r = !B);
                            p && (p = B)
                        }
                        k[y++] = C
                    }
                }
                y < v && (k.length = y);
                g = Kj(g, 4, !0);
                g = Kj(g, 16, p);
                g = Kj(g, 8, r);
                Qj(k, g);
                m && Object.freeze(k)
            }
            b = !!(8 & g) || !f.length;
            if (d && !b) {
                rl(g) && (f = Ej(f), g = ql(g, c, e), hl(a, c, 10, f));
                d = f;
                b = g;
                for (c = 0; c < d.length; c++) k = d[c], g = el(k), k !== g && (d[c] = g);
                b = Kj(b, 8, !0);
                b = Kj(b, 16, !d.length);
                Qj(d, b);
                g = b
            }
            rl(g) || (d = g, g = Kj(g, !f.length || 16 & g && (!h || 32 & g) ? 2 : 2048, !0), g !== d && Qj(f, g), Object.freeze(f));
            if (e) a = f;
            else {
                e = f;
                f = !1;
                f = void 0 === f ? !1 : f;
                h = Rj(a);
                d = Rj(e);
                b = Object.isFrozen(e) && d;
                ml(e, a, f);
                if (h || d) f ? z(d) : z(b);
                z(!!(Mj(e) &
                    4));
                if (d && e.length)
                    for (f = 0; 1 > f; f++) ll(e[f], a);
                a = e
            }
            return a
        };

    function ql(a, b, c) {
        a = Kj(a, 2, !!(2 & b));
        a = Kj(a, 32, !!(32 & b) && c);
        return a = Kj(a, 2048, !1)
    }
    var yl = function(a, b) {
        var c = void 0;
        a = a.B;
        var d = Pj(a),
            e = 2 & d ? 1 : 2;
        c = !!c;
        var f = ol(a, d, b),
            g = Mj(f);
        pk(f);
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f)) f = Ej(f), g = ql(g, d, c), d = hl(a, d, b, f);
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = Fk(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = pl(g, d, c);
            g = Kj(g, 20, !0);
            g = Kj(g, 4096, !1);
            g = Kj(g, 8192, !1);
            Qj(f, g);
            2 & g && Object.freeze(f)
        }
        rl(g) || (h = g, (k = 1 === e) ? g = Kj(g, 2, !0) : c || (g = Kj(g, 32, !1)), g !== h && Qj(f, g), k && Object.freeze(f));
        2 === e && rl(g) && (f = Ej(f), g = ql(g, d, c), Qj(f, g), hl(a, d, b, f));
        pk(f);
        return c ?
            f : ml(f, a, !1, c)
    };

    function zl(a, b) {
        return null != a ? a : b
    }
    var Al = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            return zl(Ck(gl(a, b)), c)
        },
        Bl = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return zl(Fk(gl(a, b)), c)
        },
        Cl = function(a) {
            var b = void 0 === b ? "" : b;
            return zl(Lk(gl(a, 2)), b)
        },
        Dl = function(a) {
            a = Ck(gl(a, 5));
            return null == a ? void 0 : a
        },
        El = function(a, b) {
            a = Lk(gl(a, b));
            return null == a ? void 0 : a
        },
        Fl = function(a, b) {
            if (null != b) {
                if ("number" !== typeof b) throw yk(Gk(b));
                if (!Number.isFinite(b)) throw yk(Gk(b));
                b >>>= 0
            }
            il(a, 1, b)
        },
        Gl = function(a, b, c) {
            if (null != c && "string" !== typeof c) throw Error("ia`" + c + "`" +
                Ja(c));
            return il(a, b, c)
        };
    if ("undefined" !== typeof Proxy) {
        var Il = Hl;
        new Proxy({}, {
            getPrototypeOf: Il,
            setPrototypeOf: Il,
            isExtensible: Il,
            preventExtensions: Il,
            getOwnPropertyDescriptor: Il,
            defineProperty: Il,
            has: Il,
            get: Il,
            set: Il,
            deleteProperty: Il,
            apply: Il,
            construct: Il
        })
    }

    function Hl() {
        throw Error("ra");
        throw Error();
    };
    var Jl = function(a, b, c) {
        jb(this, Jl, "The message constructor should only be used by subclasses");
        z(this.constructor !== Jl, "Message is an abstract class and cannot be directly constructed");
        this.B = Wk(a, b, c);
        this.preventPassingToStructuredClone = jk
    };
    n = Jl.prototype;
    n.toJSON = function() {
        if (dk) var a = Kl(this, this.B, !1);
        else a = this.B, gb(a), a = al(a, bl, void 0, void 0, !1), a = Kl(this, a, !0);
        return a
    };
    n.ib = function() {
        dk = !0;
        try {
            return JSON.stringify(this.toJSON(), Xk)
        } finally {
            dk = !1
        }
    };
    n.getExtension = function(a) {
        jb(this, a.zh);
        var b = jb(this, Jl);
        b = a.Eb ? a.ze ? a.lc(b, a.Eb, a.Hb, void 0 !== qk ? 1 : 2, !0) : a.lc(b, a.Eb, a.Hb, !0) : a.ze ? a.lc(b, a.Hb, void 0 !== qk ? 1 : 2, !0) : a.lc(b, a.Hb, a.defaultValue, !0);
        return a.Wj && null == b ? a.defaultValue : b
    };
    n.hasExtension = function(a) {
        z(!a.ze, "repeated extensions don't support hasExtension");
        if (a.Eb) a = kl(this, a.Eb, a.Hb, !0);
        else {
            z(!a.ze, "repeated extensions don't support getExtensionOrUndefined");
            jb(this, a.zh);
            var b = jb(this, Jl);
            a = a.Eb ? a.lc(b, a.Eb, a.Hb, !0) : a.lc(b, a.Hb, null, !0);
            a = void 0 !== (null === a ? void 0 : a)
        }
        return a
    };
    n.clone = function() {
        var a = jb(this, Jl);
        z(Xj(a));
        var b = a.B,
            c = Pj(b);
        return Rk(a.constructor, dl(b, c, !1))
    };
    n.qb = function() {
        return Rj(this.B)
    };
    Vj = Jl;
    Jl.prototype.ii = Wj;
    Jl.prototype.toString = function() {
        return Kl(this, this.B, !1).toString()
    };

    function Kl(a, b, c) {
        var d = Wb ? void 0 : a.constructor.Qe;
        var e = Pj(c ? a.B : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (ck(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g) {
                    var m = g[l];
                    if (Array.isArray(m)) {
                        var r = m;
                        if (ek(m, d, +l) || Zj(m)) m = null;
                        m != r && (k = !0)
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
            p = bk(p, l);
            if (null != c && !ek(c, d, p) && !Zj(c)) break;
            var v = !0
        }
        if (!f && !v) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function Ll(a) {
        if ("string" === typeof a) return {
            buffer: yj(a),
            qb: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            qb: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            qb: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            qb: !1
        };
        if (a.constructor === Dj) {
            jb(a, Dj);
            if (Aj !== Aj) throw Error("ea");
            var b = a.Nc;
            null == b || sj && null != b && b instanceof Uint8Array || ("string" === typeof b ? b = yj(b) : (ab("Cannot coerce to Uint8Array: " + Ja(b)), b = null));
            return {
                buffer: (null == b ? b : a.Nc = b) || zj || (zj = new Uint8Array(0)),
                qb: !0
            }
        }
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            qb: !1
        };
        throw Error("Ca");
    };
    var Ml = function(a, b) {
        this.xa = null;
        this.Qd = !1;
        this.I = this.ya = this.Sa = 0;
        this.qc(a, void 0, void 0, b)
    };
    n = Ml.prototype;
    n.qc = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        this.Vc = void 0 === d.Vc ? !1 : d.Vc;
        a && (a = Ll(a), this.xa = a.buffer, this.Qd = a.qb, this.Sa = b || 0, this.ya = void 0 !== c ? this.Sa + c : this.xa.length, this.I = this.Sa)
    };
    n.Jf = function() {
        this.clear();
        100 > Nl.length && Nl.push(this)
    };
    n.clear = function() {
        this.xa = null;
        this.Qd = !1;
        this.I = this.ya = this.Sa = 0;
        this.Vc = !1
    };
    n.setEnd = function(a) {
        this.ya = a
    };
    n.reset = function() {
        this.I = this.Sa
    };
    n.X = function() {
        return this.I
    };
    n.advance = function(a) {
        Ol(this, this.I + a)
    };
    var Pl = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = a.xa,
                f = a.I;
            do {
                var g = e[f++];
                b |= (g & 127) << d;
                d += 7
            } while (32 > d && g & 128);
            32 < d && (c |= (g & 127) >> 4);
            for (d = 3; 32 > d && g & 128; d += 7) g = e[f++], c |= (g & 127) << d;
            Ol(a, f);
            if (128 > g) return 4294967296 * (c >>> 0) + (b >>> 0 >>> 0);
            throw Error("za");
        },
        Ol = function(a, b) {
            a.I = b;
            if (b > a.ya) throw Error("Aa`" + b + "`" + a.ya);
        },
        Ql = function(a) {
            var b = a.xa,
                c = a.I,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 &&
                    b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("za");
            Ol(a, c);
            return e
        },
        Rl = function(a) {
            return Ql(a) >>> 0
        },
        Sl = function(a) {
            return Pl(a)
        },
        Tl = function(a) {
            var b = a.xa,
                c = a.I,
                d = b[c + 0],
                e = b[c + 1],
                f = b[c + 2];
            b = b[c + 3];
            a.advance(4);
            return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
        },
        Ul = function(a) {
            for (var b = 0, c = a.I, d = c + 10, e = a.xa; c < d;) {
                var f = e[c++];
                b |= f;
                if (0 === (f & 128)) return Ol(a, c), !!(b & 127)
            }
            throw Error("za");
        },
        Vl = function(a, b) {
            if (0 > b) throw Error("Ba`" + b);
            var c = a.I,
                d = c + b;
            if (d > a.ya) throw Error("Aa`" + (a.ya - c) + "`" + b);
            a.I = d;
            return c
        };
    Ml.prototype.ng = function(a, b) {
        var c = Vl(this, a),
            d = z(this.xa);
        if (rj) {
            var e;
            b ? (e = pj) || (e = pj = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = qj) || (e = qj = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = 0 === c && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (m) {
                if (b) {
                    if (void 0 === oj) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (r) {}
                        try {
                            e.decode(new Uint8Array([97])), oj = !0
                        } catch (r) {
                            oj = !1
                        }
                    }
                    b = !oj
                }
                b && (pj = void 0);
                throw m;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], 128 > k ? g.push(k) : 224 > k ? c >= a ? mj(b, g) : (l =
                d[c++], 194 > k || 128 !== (l & 192) ? (c--, mj(b, g)) : (k = (k & 31) << 6 | l & 63, z(128 <= k && 2047 >= k), g.push(k))) : 240 > k ? c >= a - 1 ? mj(b, g) : (l = d[c++], 128 !== (l & 192) || 224 === k && 160 > l || 237 === k && 160 <= l || 128 !== ((e = d[c++]) & 192) ? (c--, mj(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, z(2048 <= k && 65535 >= k), z(55296 > k || 57343 < k), g.push(k))) : 244 >= k ? c >= a - 2 ? mj(b, g) : (l = d[c++], 128 !== (l & 192) || 0 !== (k << 28) + (l - 144) >> 30 || 128 !== ((e = d[c++]) & 192) || 128 !== ((f = d[c++]) & 192) ? (c--, mj(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, z(65536 <= k && 1114111 >= k), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : mj(b, g), 8192 <= g.length && (h = nj(h, g), g.length = 0);
            z(c === a, "expected " + c + " === " + a);
            g = nj(h, g)
        }
        return g
    };
    Ml.prototype.Me = function(a) {
        if (0 == a) return Bj || (Bj = new Dj(null, Aj));
        var b = Vl(this, a);
        if (this.Vc && this.Qd) b = this.xa.subarray(b, b + a);
        else {
            var c = z(this.xa);
            a = b + a;
            b = b === a ? zj || (zj = new Uint8Array(0)) : rk ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        jb(b, Uint8Array);
        return 0 == b.length ? Bj || (Bj = new Dj(null, Aj)) : new Dj(b, Aj)
    };
    var Nl = [];
    z(!0);
    var Xl = function(a, b) {
            if (Nl.length) {
                var c = Nl.pop();
                c.qc(a, void 0, void 0, b);
                a = c
            } else a = new Ml(a, b);
            this.l = a;
            this.Ha = this.l.X();
            this.m = this.Ca = this.Qb = -1;
            Wl(this, b)
        },
        Wl = function(a, b) {
            b = void 0 === b ? {} : b;
            a.ce = void 0 === b.ce ? !1 : b.ce
        };
    Xl.prototype.Jf = function() {
        this.l.clear();
        this.m = this.Qb = this.Ca = -1;
        100 > Yl.length && Yl.push(this)
    };
    Xl.prototype.X = function() {
        return this.l.X()
    };
    Xl.prototype.reset = function() {
        this.l.reset();
        this.Ha = this.l.X();
        this.m = this.Qb = this.Ca = -1
    };
    Xl.prototype.advance = function(a) {
        this.l.advance(a)
    };
    var Zl = function(a) {
            var b = a.l;
            if (b.I == b.ya) return !1; - 1 !== a.Ca && (b = a.l.X(), a.l.I = a.Ha, Rl(a.l), 4 === a.m || 3 === a.m ? z(b === a.l.X(), "Expected to not advance the cursor.  Group tags do not have values.") : z(b > a.l.X(), "Expected to read the field, did you forget to call a read or skip method?"), a.l.I = b);
            a.Ha = a.l.X();
            b = Rl(a.l);
            var c = b >>> 3,
                d = b & 7;
            if (!(0 <= d && 5 >= d)) throw Error("ua`" + d + "`" + a.Ha);
            if (1 > c) throw Error("va`" + c + "`" + a.Ha);
            a.Ca = b;
            a.Qb = c;
            a.m = d;
            return !0
        },
        am = function(a) {
            if (2 != a.m) ab("Invalid wire type for skipDelimitedField"),
                $l(a);
            else {
                var b = Rl(a.l);
                a.l.advance(b)
            }
        },
        $l = function(a) {
            switch (a.m) {
                case 0:
                    0 != a.m ? (ab("Invalid wire type for skipVarintField"), $l(a)) : Ul(a.l);
                    break;
                case 1:
                    z(1 === a.m);
                    a.l.advance(8);
                    break;
                case 2:
                    am(a);
                    break;
                case 5:
                    z(5 === a.m);
                    a.l.advance(4);
                    break;
                case 3:
                    var b = a.Qb;
                    do {
                        if (!Zl(a)) throw Error("xa");
                        if (4 == a.m) {
                            if (a.Qb != b) throw Error("ya");
                            break
                        }
                        $l(a)
                    } while (1);
                    break;
                default:
                    throw Error("ua`" + a.m + "`" + a.Ha);
            }
        },
        cm = function(a) {
            var b = a.Ha;
            $l(a);
            return bm(a, b)
        },
        bm = function(a, b) {
            if (!a.ce) {
                var c = a.l.X();
                a.l.I = b;
                b = a.l.Me(c - b);
                z(c == a.l.X());
                return b
            }
        },
        dm = function(a, b, c) {
            z(2 == a.m);
            var d = a.l.ya,
                e = Rl(a.l),
                f = a.l.X() + e,
                g = f - d;
            0 >= g && (a.l.setEnd(f), c(b, a, void 0, void 0, void 0), g = f - a.l.X());
            if (g) throw Error("ta`" + e + "`" + (e - g));
            a.l.I = f;
            a.l.setEnd(d)
        },
        fm = function(a, b) {
            z(11 === a.Ca);
            for (var c = 0, d = 0; Zl(a) && 4 != a.m;) 16 !== a.Ca || c ? 26 !== a.Ca || d ? $l(a) : c ? (d = -1, dm(a, c, b)) : (d = a.Ha, am(a)) : (c = em(a), d && (z(0 < d), a.Ca = -1, a.m = -1, a.l.I = d, d = 0));
            if (12 !== a.Ca || !d || !c) throw Error("wa");
        },
        gm = function(a) {
            z(0 == a.m);
            return Ql(a.l)
        },
        em = function(a) {
            z(0 ==
                a.m);
            return Rl(a.l)
        },
        hm = function(a) {
            z(0 == a.m);
            return Pl(a.l)
        };
    Xl.prototype.ng = function() {
        return im(this)
    };
    var im = function(a) {
        z(2 == a.m);
        var b = Rl(a.l);
        return a.l.ng(b, !0)
    };
    Xl.prototype.Me = function() {
        z(2 == this.m);
        var a = Rl(this.l);
        return this.l.Me(a)
    };
    var lm = function(a, b, c) {
            z(2 == a.m);
            var d = Rl(a.l);
            for (d = a.l.X() + d; a.l.X() < d;) c.push(b(a.l))
        },
        Yl = [];
    var mm = function(a, b, c, d) {
        this.Ed = a;
        this.Ng = c;
        this.Mg = d
    };

    function nm(a) {
        return Array.isArray(a) ? a[0] instanceof mm ? (z(2 === a.length), om(a[1]), a) : [pm, om(a)] : [jb(a, mm), void 0]
    }
    var sm = function(a, b, c) {
            gb(a);
            for (var d = c.ge, e = {}; Zl(b) && 4 != b.m; e = {
                    bf: void 0
                })
                if (11 === b.Ca) {
                    var f = b.Ha;
                    e.bf = !1;
                    fm(b, function(g) {
                        return function(h, k) {
                            var l = c[h];
                            if (!l) {
                                var m = d[h];
                                if (m) {
                                    l = om(m);
                                    var r = qm(l),
                                        p = rm(l).yc;
                                    l = c[h] = function(v, y, C) {
                                        return r(sl(y, p, C, !0), v)
                                    }
                                }
                            }
                            l ? l(k, a, h) : (g.bf = !0, k.l.I = k.l.ya)
                        }
                    }(e));
                    e.bf && lk(a, bm(b, f))
                } else lk(a, cm(b))
        },
        um = function(a, b) {
            return function(c, d, e) {
                return c.Bk(e, tm(d, a), b)
            }
        };

    function vm(a, b, c) {
        if (Array.isArray(b)) {
            var d = Mj(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                null != g && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Qj(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
            return b
        }
    }

    function tm(a, b) {
        return a instanceof Jl ? a.B : Array.isArray(a) ? Vk(a, b) : void 0
    }
    var wm = Symbol("deserializeBinaryFromReaderCache");

    function qm(a) {
        var b = a[wm];
        if (!b) {
            var c = xm(a),
                d = rm(a),
                e = d.Bf;
            b = e ? function(f, g) {
                return e(f, g, d)
            } : function(f, g) {
                for (; Zl(g) && 4 != g.m;) {
                    var h = g.Qb,
                        k = d[h];
                    if (!k) {
                        var l = d.ge;
                        l && (l = l[h]) && (k = d[h] = ym(l))
                    }
                    k && k(g, f, h) || lk(f, cm(g))
                }
                c === zm || c === Am || c.Ai || (f[nk || (nk = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c)
            };
            a[wm] = b
        }
        return b
    }

    function ym(a) {
        a = nm(a);
        var b = jb(a[0], mm).Ed;
        if (a = a[1]) {
            om(a);
            var c = qm(a),
                d = rm(z(a)).yc;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    var Bm = function() {},
        zm, Am, Cm = Symbol("comparisonTypeInfoCache");

    function Dm(a, b, c) {
        var d = c[1];
        if (d) {
            var e = d[Cm];
            var f = e ? e.yc : z(Uk(d[0]));
            a[b] = null != e ? e : d
        }
        f && f === Sk ? (a = a.eg || (a.eg = new Set), jb(a, Set).add(b)) : c[0] && (a = a.pg || (a.pg = new Set), jb(a, Set).add(b))
    }

    function Em(a, b) {
        return [a.Ng, !b || 0 < b[0] ? void 0 : b]
    }

    function xm(a) {
        var b = a[Cm];
        if (b) return b;
        b = Fm(a, a[Cm] = new Bm, Em, Em, Dm);
        if (!b.ge && !b.pg && !b.eg) {
            var c = !0,
                d;
            for (d in b) isNaN(d) || (c = !1);
            c ? (z(Uk(a[0])) === Sk ? Am ? b = Am : (b = new Bm, b.yc = gb(Uk(!0)), b = Am = b) : b = zm || (zm = new Bm), b = a[Cm] = b) : b.Ai = !0
        }
        return b
    }

    function om(a) {
        gb(a);
        var b;
        if (!(b = Gm in a || Hm in a) && (b = 0 < a.length)) {
            b = a[0];
            var c = Uk(b);
            null != c && c !== b && (a[0] = c);
            b = null != c
        }
        z(b);
        return a
    }

    function Im(a, b, c) {
        a[b] = c
    }

    function Jm(a) {
        return Array.isArray(a) && "number" === typeof a[0] && 0 < a[0]
    }

    function Fm(a, b, c, d, e) {
        e = void 0 === e ? Im : e;
        b.yc = z(Uk(a[0]));
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.ge = g, g = a[++f], "function" === typeof g && (b.Bf = g, b.ci = eb(a[++f]), z(b.Bf === sm), z(b.ci === um), g = a[++f]));
        for (var h = {}; Jm(g);) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (z(0 < g), k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof mm) var m = g;
            else m = Km, f--;
            if (m.Mg) {
                g = a[++f];
                l = a;
                var r = f;
                "function" == typeof g && (z(0 === g.length), g = g(), l[r] = g);
                om(g);
                l = g
            }
            g = a[++f];
            r = k + 1;
            "number" ===
            typeof g && 0 > g && (r -= g, g = a[++f]);
            for (; k < r; k++) {
                var p = h[k];
                e(b, k, l ? d(m, l, p) : c(m, p))
            }
        }
        return b
    }
    var Hm = Symbol("serializerFnCache"),
        Gm = Symbol("deserializerFnCache");

    function Lm(a, b) {
        var c = a.Ed;
        return b ? function(d, e, f) {
            return c(d, e, f, b)
        } : c
    }

    function Mm(a, b, c) {
        var d = a.Ed,
            e, f;
        return function(g, h, k) {
            return d(g, h, k, f || (f = rm(b).yc), e || (e = qm(b)), c)
        }
    }

    function rm(a) {
        var b = a[Gm];
        if (b) return b;
        xm(a);
        b = Fm(a, a[Gm] = {}, Lm, Mm);
        Gm in a && Cm in a && Hm in a && (a.length = 0);
        return b
    }

    function Nm(a, b) {
        return new mm(a, b, !1, !1)
    }

    function Om(a, b) {
        return new mm(a, b, !0, !1)
    }

    function Pm(a, b, c) {
        hl(a, Pj(a), b, c)
    }

    function Qm(a, b, c, d, e) {
        a.Ak(c, tm(b, d), e)
    }
    var Rm = Nm(function(a, b, c) {
            if (1 !== a.m) return !1;
            z(1 == a.m);
            var d = a.l;
            a = Tl(d);
            var e = Tl(d);
            d = 2 * (e >> 31) + 1;
            var f = e >>> 20 & 2047;
            a = 4294967296 * (e & 1048575) + a;
            Pm(b, c, 2047 == f ? a ? NaN : Infinity * d : 0 == f ? d * Math.pow(2, -1074) * a : d * Math.pow(2, f - 1075) * (a + 4503599627370496));
            return !0
        }, function(a, b, c) {
            a.wk(c, zk(b))
        }),
        Sm = Nm(function(a, b, c) {
                if (5 !== a.m) return !1;
                z(5 == a.m);
                var d = Tl(a.l);
                a = 2 * (d >> 31) + 1;
                var e = d >>> 23 & 255;
                d &= 8388607;
                Pm(b, c, 255 == e ? d ? NaN : Infinity * a : 0 == e ? a * Math.pow(2, -149) * d : a * Math.pow(2, e - 150) * (d + Math.pow(2, 23)));
                return !0
            },
            function(a, b, c) {
                a.yk(c, zk(b))
            }),
        Tm = Nm(function(a, b, c) {
            if (0 !== a.m) return !1;
            Pm(b, c, hm(a));
            return !0
        }, function(a, b, c) {
            a.Hk(c, Kk(b))
        }),
        Um = Om(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = nl(b, c);
            2 == a.m ? lm(a, Sl, b) : b.push(hm(a));
            return !0
        }, function(a, b, c) {
            a.Ek(c, vm(Kk, b, !1))
        }),
        Vm = Nm(function(a, b, c) {
            if (0 !== a.m) return !1;
            Pm(b, c, gm(a));
            return !0
        }, function(a, b, c) {
            a.zk(c, Fk(b))
        }),
        Wm = Om(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = nl(b, c);
            2 == a.m ? lm(a, Ql, b) : b.push(gm(a));
            return !0
        }, function(a, b, c) {
            a.Ck(c, vm(Fk,
                b, !0))
        }),
        Xm = Nm(function(a, b, c) {
            if (0 !== a.m) return !1;
            z(0 == a.m);
            a = Ul(a.l);
            Pm(b, c, a);
            return !0
        }, function(a, b, c) {
            a.vk(c, Ck(b))
        }),
        Ym = Nm(function(a, b, c) {
            if (2 !== a.m) return !1;
            Pm(b, c, im(a));
            return !0
        }, function(a, b, c) {
            a.Fk(c, Lk(b))
        }),
        pm = new mm(function(a, b, c, d, e) {
            if (2 !== a.m) return !1;
            dm(a, sl(b, d, c, !0), e);
            return !0
        }, Qm, !1, !0),
        Km = new mm(function(a, b, c, d, e) {
            if (2 !== a.m) return !1;
            dm(a, sl(b, d, c), e);
            return !0
        }, Qm, !1, !0),
        Zm = Nm(function(a, b, c) {
            if (0 !== a.m) return !1;
            Pm(b, c, em(a));
            return !0
        }, function(a, b, c) {
            a.Gk(c, Hk(b))
        }),
        $m =
        Om(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = nl(b, c);
            2 == a.m ? lm(a, Rl, b) : b.push(em(a));
            return !0
        }, function(a, b, c) {
            a.Dk(c, vm(Hk, b, !0))
        }),
        an = Nm(function(a, b, c) {
            if (0 !== a.m) return !1;
            z(0 == a.m);
            a = Ql(a.l);
            Pm(b, c, a);
            return !0
        }, function(a, b, c) {
            a.xk(c, Fk(b))
        });

    function bn(a) {
        if (a instanceof Jl) return a.constructor.Aa
    };

    function cn(a, b) {
        b = void 0 === b ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return cn(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = dn(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = t(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + cn(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = dn(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + dn(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function dn(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };

    function en(a, b) {
        a.Pf = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }

    function fn(a, b, c) {
        var d = a(b, c);
        d || gn(c, function() {
            var e = "";
            0 < e.length && (e += ": ");
            return e + "Expected " + a.Pf().trim() + ", got " + cn(b)
        });
        return d
    }

    function gn(a, b) {
        null == a || a.push(("function" === typeof b ? b() : b).trim())
    }
    var hn = void 0;

    function jn() {
        throw Error(x.apply(0, arguments).map(function(a) {
            return "function" === typeof a ? a() : a
        }).filter(function(a) {
            return a
        }).join("\n").trim().replace(/:$/, ""));
    };
    (function() {
        var a = Ha.jspbGetTypeName;
        Ha.jspbGetTypeName = a ? function(b) {
            return a(b) || bn(b)
        } : bn
    })();
    var kn = Jl;
    var wl = function(a) {
        kn.call(this, a)
    };
    w(wl, kn);
    wl.prototype.Of = function() {
        return Cl(this)
    };
    wl.Aa = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var ln = function(a) {
        kn.call(this, a)
    };
    w(ln, kn);
    var mn = function(a, b) {
            return Gl(a, 2, b)
        },
        nn = function(a, b) {
            return Gl(a, 3, b)
        },
        on = function(a, b) {
            return Gl(a, 4, b)
        },
        pn = function(a, b) {
            return Gl(a, 5, b)
        },
        qn = function(a, b) {
            return Gl(a, 9, b)
        },
        rn = function(a, b) {
            var c = wl,
                d = a.B,
                e = Pj(d);
            hk(e);
            if (null == b) hl(d, e, 10);
            else {
                var f = b;
                if (!Array.isArray(f)) throw a = "Expected array but got " + Ja(f) + ": " + f, yk(a);
                var g = f = Mj(b),
                    h = !!(2 & f) || !!(2048 & f);
                z(!h || Object.isFrozen(b));
                var k = h || Object.isFrozen(b),
                    l;
                if (l = !k) l = !1;
                for (var m = !0, r = !0, p = 0; p < b.length; p++) {
                    var v = b[p],
                        y = v,
                        C = $a(c);
                    if (!(y instanceof C)) throw Error("ja`" + Ak(C) + "`" + (y && Ak(y.constructor)));
                    h || (v = Rj(v.B), m && (m = !v), r && (r = v))
                }
                h || (f = Kj(f, 5, !0), f = Kj(f, 8, m), f = Kj(f, 16, r));
                if (l || k && f !== g) b = Ej(b), g = 0, f = ql(f, e, !0);
                f !== g && Qj(b, f);
                ok(b);
                hl(d, e, 10, b)
            }
            return a
        },
        sn = function(a, b) {
            return il(a, 11, null == b ? b : Bk(b))
        },
        tn = function(a, b) {
            return Gl(a, 1, b)
        },
        un = function(a, b) {
            return il(a, 7, null == b ? b : Bk(b))
        };
    ln.Aa = "wireless.mdl.UserAgentClientHints";
    ln.Qe = [10, 6];
    var vn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function wn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function xn(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function yn(a) {
        if (!xn(a)) return null;
        var b = wn(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(vn).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function zn(a) {
        var b;
        return sn(rn(pn(mn(tn(on(un(qn(nn(new ln, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new wl;
            d = Gl(d, 1, c.brand);
            return Gl(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function An(a) {
        var b, c;
        return null != (c = null == (b = yn(a)) ? void 0 : b.then(function(d) {
            return zn(d)
        })) ? c : null
    };
    var Bn = function(a, b, c, d) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? new Qa : c;
        d = void 0 === d ? Sg("current") : d;
        Ae.call(this);
        this.global = a;
        this.Ga = b;
        this.C = c;
        this.xg = d;
        this.wi = Td(this.global, "pagehide").g(Bh(this.C, 941));
        this.jg = Td(this.global, "load").g(Bh(this.C, 738), Af(1));
        this.xi = Td(this.global, "resize").g(Bh(this.C, 741));
        this.onMessage = Td(this.global, "message").g(Bh(this.C, 740));
        this.document = new aj(this.global, this);
        this.i = new Dh(new Gh(this.J, this.C), new Fh(this.J, this.C));
        this.K = new Ne(new Jh(this),
            new wi(this), new Bg(this, new Nh(this)), new Bg(this, new zi(this)), new Bg(this, new ui(this)))
    };
    w(Bn, Ae);
    var Kh = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent
    };
    Bn.prototype.Ub = function(a) {
        Kh(this) && this.global.fence.reportEvent(a)
    };
    Bn.prototype.ke = function() {
        return this.wi.g(Bh(this.C, 942), X(this.h, 1), P(function() {}))
    };
    var Cn = function(a) {
            var b = new Bn(a.global.top, a.Ga);
            b.K = a.K;
            return b
        },
        Dn = function(a, b) {
            b.start();
            return Td(b, "message").g(Bh(a.C, 740))
        };
    Bn.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    Bn.prototype.le = function() {
        return ti(this.global) ? this.global.width : 0
    };
    Bn.prototype.je = function() {
        return ti(this.global) ? this.global.height : 0
    };
    var En = function(a, b) {
        try {
            var c = a.global,
                d = ri() || si();
            try {
                b && (c = c.top);
                a = c;
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new ki(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new ki(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (y) {
                    h = new ki(-12245933, -12245933)
                }
                b = h;
                var k = b.height,
                    l = b.width;
                if (-12245933 === l) var m = new lj(l, l, l, l);
                else {
                    var r = oi(ni(c.document).Fb),
                        p = r.x,
                        v = r.y;
                    m = new lj(v, p + l, v + k, p)
                }
            } catch (y) {
                m =
                    new lj(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: m.left,
                top: m.top,
                width: m.le(),
                height: m.je()
            }
        } catch (y) {
            return hj
        }
    };
    Bn.prototype.validate = function() {
        var a = this.K.H() || Kh(this);
        return this.global && this.i.fa() && a
    };
    var Li = function(a) {
        return (a = An(a.global)) ? Nd(a) : null
    };
    da.Object.defineProperties(Bn.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        J: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Lb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !ti(this.global.top)
            }
        },
        se: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Lb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.J.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.J.ResizeObserver
            }
        },
        Vh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                z(!0, "Major version must be an integer");
                return 8 <= ic()
            }
        },
        ih: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var Fn = !Vh && !ec(),
        Gn = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (Fn && a.dataset) {
                if (gc() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var Hn = {},
        In = (Hn["data-google-av-cxn"] = "_avicxn_", Hn["data-google-av-cpmav"] = "_cvu_", Hn["data-google-av-metadata"] = "_avm_", Hn["data-google-av-adk"] = "_adk_", Hn["data-google-av-btr"] = void 0, Hn["data-google-av-override"] = void 0, Hn["data-google-av-dm"] = void 0, Hn["data-google-av-immediate"] = void 0, Hn["data-google-av-aid"] = void 0, Hn["data-google-av-naid"] = void 0, Hn["data-google-av-inapp"] = void 0, Hn["data-google-av-slift"] = void 0, Hn["data-google-av-itpl"] = void 0, Hn["data-google-av-ext-cxn"] = void 0, Hn["data-google-av-rs"] =
            void 0, Hn["data-google-av-flags"] = void 0, Hn["data-google-av-turtlex"] = void 0, Hn["data-google-av-ufs-integrator-metadata"] = void 0, Hn["data-google-av-vattr"] = void 0, Hn["data-google-av-vrus"] = void 0, Hn),
        Jn = {},
        Kn = (Jn["data-google-av-adk"] = "googleAvAdk", Jn["data-google-av-btr"] = "googleAvBtr", Jn["data-google-av-cpmav"] = "googleAvCpmav", Jn["data-google-av-dm"] = "googleAvDm", Jn["data-google-av-ext-cxn"] = "googleAvExtCxn", Jn["data-google-av-immediate"] = "googleAvImmediate", Jn["data-google-av-inapp"] = "googleAvInapp",
            Jn["data-google-av-itpl"] = "googleAvItpl", Jn["data-google-av-metadata"] = "googleAvMetadata", Jn["data-google-av-naid"] = "googleAvNaid", Jn["data-google-av-override"] = "googleAvOverride", Jn["data-google-av-rs"] = "googleAvRs", Jn["data-google-av-slift"] = "googleAvSlift", Jn["data-google-av-cxn"] = "googleAvCxn", Jn["data-google-av-aid"] = void 0, Jn["data-google-av-flags"] = "googleAvFlags", Jn["data-google-av-turtlex"] = "googleAvTurtlex", Jn["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", Jn["data-google-av-vattr"] =
            "googleAvVattr", Jn["data-google-av-vrus"] = "googleAvVurs", Jn);

    function Ln(a, b) {
        if (void 0 === a.j) return null;
        try {
            var c;
            var d = null != (c = a.j.getAttribute(b)) ? c : null;
            if (null !== d) return d
        } catch (g) {}
        try {
            var e = In[b];
            if (e && (d = a.j[e], void 0 !== d)) return d
        } catch (g) {}
        try {
            var f = Kn[b];
            if (f) return Gn(a.j, f)
        } catch (g) {}
        return null
    }

    function Mn(a) {
        return P(function(b) {
            return Ln(b, a)
        })
    };
    var Nn = K(function(a) {
        return P(function(b) {
            return a.map(function(c) {
                return Ln(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), P(function(a) {
        var b = t(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (null !== b) return [];
            throw new Je;
        }
        return a.split("|")
    }));
    var On = function() {
        return K(Od(function(a) {
            return a.element.g(Nn, jf(function() {
                return N([""])
            })).g(P(function(b) {
                return {
                    Ea: b,
                    Zc: a
                }
            }))
        }), vf(function(a) {
            return a.Ea.sort().join(";")
        }), P(function(a) {
            return a.Zc
        }))
    };
    var Qn = function() {
            return Od(function(a) {
                return Nd(Pn(a)).g(Ai(a.h))
            })
        },
        Pn = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new Ni(b)
            })
        };

    function Rn(a) {
        var b = a.jg,
            c = a.document.ui;
        return Zd(N({}), c, b).g(P(function() {
            return a
        }))
    };
    var Tn = P(Sn);

    function Sn(a) {
        var b = Number(Ln(a, "data-google-av-rs"));
        if (!isNaN(b) && 0 !== b) return b;
        var c;
        return (a = null == (c = a.j) ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Un() {
        return K(S(function(a) {
            return void 0 !== a
        }), P(function(a) {
            return a
        }))
    };

    function Vn() {
        return function(a) {
            var b = [];
            return a.g(S(function(c) {
                if (void 0 === c.j || b.some(function(d) {
                        return d.j === c.j
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Wn(a, b) {
        b = void 0 === b ? Yc : b;
        return Zd(Rn(a), b).g(Qn(), Vn(), Un(), X(a.h, 1))
    };

    function Xn(a, b) {
        return new L(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(r, p) {
                    a.rg ? (e[p] = r, f.add(p), d || (d = !0, Ta(a, function() {
                        d = !1;
                        c.next(Kb(e))
                    }, 1))) : c.error(new Ke(p))
                },
                k = function(r, p) {
                    g.add(p);
                    f.add(p);
                    Ta(a, function() {
                        c.error(r)
                    }, 1)
                },
                l = function(r) {
                    g.add(r);
                    Ta(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                m = b.map(function(r, p) {
                    return r.subscribe(function(v) {
                        return void h(v, p)
                    }, function(v) {
                        return void k(v, p)
                    }, function() {
                        return void l(p)
                    })
                });
            return function() {
                m.forEach(function(r) {
                    return void r.unsubscribe()
                })
            }
        })
    };

    function Yn(a, b, c) {
        function d() {
            if (b.Ga) {
                var B = b.Ga,
                    G = B.next;
                var J = {
                    creativeId: b.kc.Ja(c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                J = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: Te(b.i.now(), new Re(0, b.i.timeline)),
                    instanceId: b.kc.Ja(b.yb),
                    creativeState: J
                };
                G.call(B, J)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, r = [], p = [], v = t(e), y = v.next(), C = {}; !y.done; C = {
                ja: void 0
            }, y = v.next()) C.ja = y.value, y = a[C.ja], y instanceof
        Z ? (l[C.ja] = y.value, m.add(C.ja), b.Ga && (f[String(C.ja)] = Ve(y.value))) : (y = y.g(T(function(B, G) {
                return Oe(B) || Oe(G) ? !1 : B === G
            }), P(function(B) {
                return function(G) {
                    b.Ga && (f[String(B.ja)] = Ve(G), d());
                    var J = {};
                    return J[B.ja] = G, J
                }
            }(C)), jf(function(B) {
                return function(G) {
                    if (G instanceof Ke) throw new Me(String(B.ja));
                    throw G;
                }
            }(C)), qg(function(B) {
                return function() {
                    m.add(B.ja)
                }
            }(C), function(B) {
                return function(G) {
                    k = String(B.ja);
                    h = String(G);
                    d()
                }
            }(C), function(B) {
                return function() {
                    m.has(B.ja) || (g = !0, d())
                }
            }(C))), p.push(C.ja),
            r.push(y));
        (a = 0 < Object.keys(f).length) && d();
        v = Xn(b.h, r).g(jf(function(B) {
            if (B instanceof Ke) throw new Le(String(p[B.Oh]));
            throw B;
        }), P(function(B) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(u(B))))
        }));
        return (r = 0 < r.length) && a ? Zd(N(Object.freeze(l)), v) : r ? v : N(Object.freeze(l))
    };

    function Zn(a, b, c, d) {
        var e = $n(ao(bo(), co), eo, fo);
        return a.C.Yb.bind(a.C)(733, function() {
            var f = {};
            try {
                return b.g(jf(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Yc
                }), Od(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), Yc
                    }
                    var k = {};
                    return Yn(h, a, g.yb).g(qg(function(l) {
                        k = l
                    }), eg(1), jd()).g(e, jf(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return Yc
                    }), Hf(void 0), P(function() {
                        return !0
                    }))
                })).g(Xf(function(g) {
                    return g + 1
                }, 0), jf(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return Yc
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), Yc
            }
        })()
    };

    function go(a, b) {
        return K(W(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new L(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        kb: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : ce
        }), S(function(c) {
            return c.kb
        }))
    };
    var eo = K(S(function(a) {
        var b = a.K,
            c = a.hc,
            d = a.ac,
            e = a.Ub,
            f = a.rb,
            g = a.fc;
        return void 0 !== a.Gb && void 0 !== g && void 0 !== b && void 0 !== c && void 0 !== d && (!f || void 0 !== e)
    }), ng(function(a) {
        return !(!1 === a.Yf && void 0 !== a.Ef)
    }, !1), S(function(a) {
        var b = a.pe,
            c = a.hc;
        return a.kj ? !!b && void 0 !== c && 0 < (null == c ? void 0 : c.length) : !!a.Yf
    }), go(function(a) {
        return a.fc
    }, function(a) {
        return a.Gb
    }), P(function(a) {
        a.rb || a.ac(a.hc, a).forEach(function(b) {
            a.K.L(b).sendNow()
        })
    }), Af(1), Nf());

    function ho(a) {
        var b = new Map;
        if ("object" !== typeof a || null === a) return b;
        Object.values(a).forEach(function(c) {
            c && "function" === typeof c.ia && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function io(a, b) {
        var c = jo,
            d = ko,
            e = lo;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                Ff: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                th: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                sh: String(a.C.Eg)
            }), d(Object.assign({}, f, {
                ta: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                Ea: [c]
            }), ho(f)).forEach(function(g) {
                a.K.L(g).sendNow()
            }))
        }
    };
    var fo = K(P(function(a) {
        var b = a.K,
            c = a.Ah;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.Ef) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.L("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), ng(function(a) {
        return !a
    }), Nf());
    var lo = function(a) {
        return {
            id: a.Le,
            mcvt: a.wc,
            p: a.ad,
            asp: a.Pj,
            mtos: a.xc,
            tos: a.Kc,
            v: a.hh,
            bin: a.gh,
            avms: a.hg,
            bs: a.vf,
            mc: a.fg,
            "if": a.nh,
            vu: a.ph,
            app: a.bb,
            mse: a.Fe,
            mtop: a.Ge,
            itpl: a.ue,
            adk: a.Od,
            exk: a.Rj,
            rs: a.Qa,
            la: a.bg,
            cr: a.xe,
            uach: a.Mc,
            vs: a.df,
            r: a.Ne,
            pay: a.Ih,
            co: a.jh,
            rst: a.ah,
            rpt: a.Zg,
            isd: a.Mh,
            lsd: a.ai,
            context: a.sh,
            msg: a.errorMessage,
            stack: a.Ff,
            name: a.th,
            ec: a.Jh,
            sfr: a.Ue,
            met: a.jc,
            wmsd: a.gf,
            pv: a.mk,
            epv: a.Tj,
            pbe: a.Xf,
            vae: a.Lh,
            spb: a.Bg,
            sfl: a.Ag,
            ffslot: a.Uh,
            reach: a.Xi,
            io2: a.Bd,
            rxdbg: a.rk,
            omida: a.bk,
            omidp: a.ik,
            omidpv: a.jk,
            omidir: a.gk,
            omidv: a.lk,
            omids: a.kk,
            omidam: a.ak,
            omidct: a.ck,
            omidia: a.fk,
            omiddc: a.dk,
            omidlat: a.hk,
            omiddit: a.ek
        }
    };

    function $n() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c = b.g(eg(1), jd());
            b = a.map(function(d) {
                return c.g(d, Hf(!0))
            });
            return R(b).g(Af(1), Nf())
        }
    };

    function ao() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c = b.g(eg(1), jd());
            b = a.map(function(d) {
                return c.g(d, Hf(!0))
            });
            return Zd.apply(null, u(b)).g(Af(1), Nf())
        }
    };

    function bo() {
        var a = mo,
            b = no;
        return function(c) {
            var d = c.g(eg(1), jd());
            c = d.g(a, Hf(!0));
            d = d.g(K(b, eg(), jd()), Hf(!0));
            c = R([c, d]);
            return fe(c, d).g(Af(1), Nf())
        }
    };
    var no = function(a) {
        var b = [];
        return a.g(P(function(c) {
            var d = c.K,
                e = c.Bh,
                f = c.Kc,
                g = c.dj,
                h = c.ta,
                k = c.cj,
                l = c.Cg,
                m = c.Lc,
                r = c.ef,
                p = c.pe,
                v = c.Xf,
                y = c.Bg,
                C = c.Ag,
                B = c.af;
            if (!c.Nf || !p || void 0 === c.xc || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === m || void 0 === d) return !1;
            if (c.rb) {
                if (void 0 === l) return !1;
                g = c.Ub;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: null != B ? B : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(v || C || l)) return !1;
            B = ho(c);
            var G;
            r = null != (G = null == r ? void 0 : r.qa(B).value) ? G : !1;
            c = m(Object.assign({},
                c, {
                    Le: k,
                    df: r ? 4 : 3,
                    Ne: null != l ? l : "u",
                    ta: h,
                    Ea: g
                }), B);
            if (v) {
                for (; b.length > g.length;) v = void 0, null == (v = b.shift()) || v.deactivate();
                c.forEach(function(J, Y) {
                    Y >= b.length ? b.push(d.L(J)) : b[Y].url = J
                });
                return y && e && void 0 !== l ? (c.forEach(function(J) {
                    e.L(J).sendNow()
                }), !0) : void 0 !== l
            }
            if (y && e && void 0 !== l) return c.forEach(function(J) {
                e.L(J).sendNow()
            }), !0;
            if (C && e) {
                for (; b.length > g.length;) y = void 0, null == (y = b.shift()) || y.deactivate();
                c.forEach(function(J, Y) {
                    Y >= b.length ? b.push(d.L("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos", {
                        Df: !0
                    })) : b[Y].url = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"
                });
                return void 0 !== l ? (c.forEach(function(J) {
                    e.L(J).sendNow()
                }), !0) : void 0 !== l
            }
            return void 0 !== l ? (c.forEach(function(J) {
                d.L(J).sendNow()
            }), !0) : !1
        }), ng(function(c) {
            return !c
        }), Nf())
    };

    function oo(a) {
        return function(b) {
            return b.g(P(function(c) {
                a.rg || ab("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function po(a) {
        return function(b) {
            return new L(function(c) {
                var d = !1,
                    e = b.g(oo(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Ta(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function qo(a, b) {
        return function(c) {
            return c.g(W(function(d) {
                return new L(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && void 0 !== d.j) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.j, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var ro = {
        Nj: 0,
        rj: 1,
        tj: 2,
        sj: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function so(a, b) {
        var c = b.g(qo(a, {
            attributes: !0
        }), X(a.h, 1));
        return R([b, c.g(X(a.h, 1), po(a.h))]).g(P(function(d) {
            return t(d).next().value
        }), Mn("data-google-av-dm"), P(to))
    }

    function to(a) {
        return a && a in ro ? Number(a) : 2
    };

    function uo(a) {
        if (3 === a.fi) return null;
        if (void 0 !== a.Cg) {
            var b = !1 === a.mh ? "n" : null;
            if (null !== b) return b
        }
        return a.fd instanceof De ? "msf" : a.Wd instanceof Ee ? "c" : !1 === a.lh ? "pv" : a.fd || a.Wd ? "x" : null
    }
    var co = K(S(function(a) {
        return void 0 !== a.kd && void 0 !== a.ta && void 0 !== a.Lc && void 0 !== a.ld && void 0 !== a.K
    }), S(function(a) {
        return null !== uo(a)
    }), go(function(a) {
        return a.Tc
    }, function(a) {
        return a.Gb
    }), P(function(a) {
        if (a.rb) {
            var b = a.Ub;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: null != (c = a.af) ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = uo(a);
            if ("x" === d) {
                var e, f = null != (e = a.fd) ? e : a.Wd;
                f && (b = f.stack, c = f.message)
            }
            a.Lc(Object.assign({}, a, {
                Ea: a.kd,
                ta: a.ta,
                Le: a.ld,
                df: 2,
                Ne: d,
                errorMessage: c,
                Ff: b
            }), ho(a)).forEach(function(g) {
                a.K.L(g).sendNow()
            })
        }
    }), Af(1), Nf());
    var vo = function() {
            this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
            this.Re = 0
        },
        wo = function(a) {
            var b = a.Re.toString(10).padStart(2, "0");
            b = "" + a.startTime + b;
            99 > a.Re && a.Re++;
            return b
        };

    function xo(a, b) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return xo(c, b)
        }).join(",") : a instanceof Re ? a.toString() : a && "function" === typeof a.ia ? xo(a.qa(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : a instanceof vo ? wo(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function yo(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            d = xo(d, b);
            return null === d ? "" : c + "=" + d
        }).filter(function(c) {
            return "" !== c
        });
        return a.length ? a.join("&") : ""
    };
    var zo = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        Bc = zc(Ac(), "google3.javascript.ads.common.url_macros_substitutor", oc).bi;

    function Ao(a, b) {
        return a.replace(zo, function(c, d) {
            try {
                var e = null !== b && d in b ? b[d] : void 0;
                if (null == e) return Cc("No value supplied for unsupported macro: " + d), c;
                if (null == e.toString()) return Cc("The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                Cc("Null value supplied for macro: " + d)
            } catch (f) {
                Cc("Failed to set macro: " + d)
            }
            return c
        })
    };

    function Bo(a, b) {
        var c = Object.assign({}, a),
            d = a.Mc;
        c = (delete c.Mc, c);
        c = a.ta(c);
        var e = yo(c, b);
        return Hb(a.Ea, function(f) {
            var g = "";
            "string" === typeof d && (g = "&" + yo({
                uach: d
            }, b));
            var h = {};
            return Ao(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function ko(a, b) {
        var c = a.ta(a),
            d = yo(c, b);
        return d ? Hb(a.Ea, function(e) {
            e = 0 <= e.indexOf("?") ? e : e + "?";
            e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
            return e + d
        }) : a.Ea
    };

    function Co(a, b) {
        return Hb(a, function(c) {
            if ("string" === typeof b.Mc) {
                var d = "&" + yo({
                    uach: b.Mc
                }, new Map);
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var mo = K(S(function(a) {
        return void 0 !== a.ta && void 0 !== a.kd && void 0 !== a.Lc && void 0 !== a.ld && void 0 !== a.K
    }), P(function(a) {
        return Object.assign({}, a, {
            Fg: ho(a)
        })
    }), S(function(a) {
        var b = a.ef,
            c = a.Fg,
            d;
        return !!a.pe && (null != (d = null == b ? void 0 : b.qa(c).value) ? d : !1)
    }), go(function(a) {
        return a.Uc
    }, function(a) {
        return a.Gb
    }), P(function(a) {
        var b = a.K,
            c = a.af;
        if (a.rb) {
            var d = a.Ub;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: null != c ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.Lc(Object.assign({}, a, {
            Ea: a.kd,
            ta: a.ta,
            Le: a.ld,
            df: 4,
            Ne: "v"
        }), a.Fg);
        (d = a.Xd) && 0 < d.length && a.ac && a.ac(d, a).forEach(function(e) {
            b.L(e).sendNow()
        });
        (d = a.ff) && 0 < d.length && a.ac && a.ac(d, a).forEach(function(e) {
            b.L(e).sendNow()
        });
        c.forEach(function(e) {
            b.L(e, {
                cc: a.Be
            }).sendNow()
        });
        return !0
    }), ng(function(a) {
        return !a
    }), Nf());

    function Do(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function Eo(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Z && h instanceof Z && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (0 <= f.indexOf(k)) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(W(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof L || "function" === typeof m.Ob && "function" === typeof m.subscribe) ? m : m.P(a)
            })), l))
        }, g)
    };

    function Fo(a) {
        return K(P(function() {
            return !0
        }), V(!1), X(a, 1))
    };

    function Go(a) {
        return 0 >= a.length ? Yc : R(a.map(function(b) {
            var c = 0;
            return b.g(P(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(S(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), P(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function Ho(a, b) {
        a.Fa && (a.vb = a.Fa);
        a.Fa = b;
        a.vb && a.vb.value ? (b = Math.max(0, Te(b.timestamp, a.vb.timestamp)), a.totalTime += b, a.oa += b) : a.oa = 0;
        return a
    }

    function Io() {
        return K(Xf(Ho, {
            totalTime: 0,
            oa: 0
        }), P(function(a) {
            return a.totalTime
        }))
    }

    function Jo() {
        return K(Xf(Ho, {
            totalTime: 0,
            oa: 0
        }), P(function(a) {
            return a.oa
        }))
    };

    function Ko(a, b) {
        return K(Mn("data-google-av-metadata"), P(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (0 === c.length) return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    };
    var Lo = {
        nj: "asmreq",
        oj: "asmres"
    };
    var Mo = function(a) {
        kn.call(this, a)
    };
    w(Mo, kn);
    Mo.prototype.ug = function(a) {
        Fl(this, a)
    };
    Mo.Aa = "tagging.common.osd.AdSpeedMetricsRequest";
    var No = function(a) {
        kn.call(this, a)
    };
    w(No, kn);
    No.Aa = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var Oo = function(a) {
        kn.call(this, a)
    };
    w(Oo, kn);
    Oo.prototype.ug = function(a) {
        Fl(this, a)
    };
    var Po = function(a) {
        return function(b) {
            eb(a);
            if (null == b || "" == b) b = jb(new a, Jl);
            else {
                db(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("sa`" + Ja(b) + "`" + b);
                Jj(b, 32);
                b = Rk(a, b)
            }
            return b
        }
    }(Oo);
    Oo.Aa = "tagging.common.osd.AdSpeedMetricsResponse";

    function Qo(a, b) {
        var c = void 0 === c ? Cn(a) : c;
        var d = new MessageChannel;
        b = b.g(P(function(f) {
            return Number(f)
        }), S(function(f) {
            return !isNaN(f) && 0 !== f
        }), qg(function(f) {
            var g = new Mo;
            g.ug(f);
            f = {
                type: "asmreq",
                payload: g.ib()
            };
            c.postMessage(f, "*", [d.port2])
        }), Af(1));
        var e = Dn(a, d.port1).g(S(function(f) {
                return "object" === typeof f.data
            }), P(function(f) {
                var g = f.data,
                    h = Object.values(Lo).includes(g.type);
                g = "string" === typeof g.payload;
                if (!h || !g || "asmres" !== f.data.type) return null;
                try {
                    return Po(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            S(function(f) {
                return null !== f
            }), P(function(f) {
                return f
            }));
        return b.g(W(function(f) {
            return N(f).g(mf(e))
        }), S(function(f) {
            var g = t(f);
            f = g.next().value;
            g = g.next().value;
            if (null != Hk(gl(g, 1))) {
                var h = void 0 === h ? 0 : h;
                h = zl(Hk(gl(g, 1)), h) === f
            } else h = !1;
            return h
        }), P(function(f) {
            f = t(f);
            f.next();
            return f.next().value
        }), Ai(a.h))
    };

    function Ro(a, b, c) {
        var d = b.tc.g(Af(1), W(function() {
            return Qo(a, c)
        }), S(function(f) {
            return Al(f, 2) && kl(f, No, 3) && null != Fk(gl(f, 4)) && null != Fk(gl(f, 5))
        }), Af(1), Ai(a.h));
        b = d.g(P(function(f) {
            return {
                x: Bl(vl(f, No, 3), 2),
                y: Bl(vl(f, No, 3), 1)
            }
        }), T(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), X(a.h, 1));
        var e = d.g(P(function(f) {
            return Bl(f, 4)
        }), X(a.h, 1));
        d = d.g(P(function(f) {
            return Bl(f, 5)
        }), X(a.h, 1));
        return {
            Mh: e,
            dh: b,
            ai: d
        }
    };

    function So(a, b) {
        return b.tc.g(Af(1), P(function() {
            return a.i.now().round()
        }))
    };
    var To = P(function(a) {
        return [a.value.O.width, a.value.O.height]
    });

    function Uo(a, b) {
        return function(c) {
            return Go(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Vo() {
        var a;
        return K(qg(function(b) {
            return void(a = b.timestamp)
        }), Jo(), P(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Wo = function(a, b) {
            this.xf = a;
            this.options = b;
            this.we = this.ve = null
        },
        Xo = function(a, b) {
            b ? a.we || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.we = new IntersectionObserver(a.xf, b)) : a.ve || (a.ve = new IntersectionObserver(a.xf, a.options))
        },
        Yo = function(a, b) {
            a = b ? a.we : a.ve;
            if (!a) throw new Ge;
            return a
        };
    Wo.prototype.observe = function(a, b) {
        Yo(this, a).observe(b)
    };
    Wo.prototype.unobserve = function(a, b) {
        Yo(this, a).unobserve(b)
    };
    Wo.prototype.disconnect = function(a) {
        Yo(this, a).disconnect()
    };
    Wo.prototype.takeRecords = function(a) {
        return Yo(this, a).takeRecords()
    };
    var Zo = {
        Z: "ns",
        aa: hj,
        O: hj,
        Y: new M,
        R: "ns",
        G: hj,
        T: hj,
        ca: {
            x: 0,
            y: 0
        }
    };

    function $o(a, b) {
        return ij(a.O, b.O) && ij(a.G, b.G) && ij(a.aa, b.aa) && ij(a.T, b.T) && a.R === b.R && a.Y === b.Y && a.Z === b.Z && a.ca.x === b.ca.x && a.ca.y === b.ca.y
    };
    var ap = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };

    function bp(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g($f(new M), jd());
                d = c.element.g(T());
                e = e.g(P(function(f) {
                    return f.value
                }));
                return R([d, e, b]).g(P(function(f) {
                    var g = t(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (void 0 === f.j) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.j.getBoundingClientRect();
                        var l = f.j,
                            m = a.global,
                            r = new ji(0, 0);
                        var p = (p = mi(l)) ? p.parentWindow || p.defaultView : window;
                        if (Qh(p, "parent")) {
                            do {
                                if (p == m) {
                                    var v = l,
                                        y = mi(v);
                                    fb(v, "Parameter is required");
                                    var C = new ji(0,
                                        0);
                                    var B = y ? mi(y) : document;
                                    B = !Vh || 9 <= Number(ii) || "CSS1Compat" == ni(B).Fb.compatMode ? B.documentElement : B.body;
                                    v != B && (v = ap(v), y = oi(ni(y).Fb), C.x = v.left + y.x, C.y = v.top + y.y)
                                } else C = z(l), C = ap(C), C = new ji(C.left, C.top);
                                r.x += C.x;
                                r.y += C.y
                            } while (p && p != m && p != p.parent && (l = p.frameElement) && (p = p.parent))
                        }
                        k = {
                            top: r.y,
                            left: r.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = kj(k, h.ca);
                    m = jj(k, h.aa);
                    r = a.i.now();
                    p = Object;
                    l = p.assign;
                    if (2 !== g || a.Lb || 0 >= m.width || 0 >= m.height) var G = !1;
                    else try {
                        var J = a.document.elementFromPoint(m.left + m.width /
                            2, m.top + m.height / 2);
                        G = J ? !cp(J, f) : !1
                    } catch (Y) {
                        G = !1
                    }
                    return {
                        timestamp: r,
                        value: l.call(p, {}, h, {
                            R: "geo",
                            T: G ? Zo.T : m,
                            G: k
                        })
                    }
                }), Ai(a.h))
            }
        }
    }

    function cp(a, b, c) {
        c = void 0 === c ? 0 : c;
        return void 0 === a.j || void 0 === b.j ? !1 : a.j === b.j || qi(b.j, function(d) {
            return d === a.j
        }) ? !0 : b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView === b.j.ownerDocument.defaultView.top ? !1 : 10 > c && b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView.frameElement ? cp(a, new Ni(b.j.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function dp(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? ep(a) : fp(a), eg(1), jd())
        }
    }

    function ep(a) {
        return function(b) {
            return b.g(W(function(c) {
                var d = a.ResizeObserver;
                if (!d || void 0 === c.j) return N(Zo.G);
                var e = (new L(function(f) {
                    function g() {
                        void 0 !== c.j && h.unobserve(c.j);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (void 0 === c.j) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(m) {
                            f.next(m)
                        })
                    });
                    h.observe(c.j);
                    var k = c.released.subscribe(g);
                    return g
                })).g(Bh(a.C, 736), P(function(f) {
                    return f.contentRect
                }));
                return Zd(N(c.j.getBoundingClientRect()), e)
            }), T(ij))
        }
    }

    function fp(a) {
        return function(b) {
            var c = b.g(qo(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.xi;
            c = Zd(b.g(P(function() {
                return Mi("resize")
            })), c, d);
            return R(b, c).g(Bh(a.C, 737), P(function(e) {
                e = t(e).next().value;
                return void 0 === e.j ? void 0 : e.j.getBoundingClientRect()
            }), Un(), T(ij))
        }
    };

    function gp(a, b) {
        var c = hp(a, b).g(eg(1), jd());
        return function(d) {
            return function(e) {
                e = e.g(W(function(f) {
                    return f.element
                }), T());
                return R([c, e]).g(W(function(f) {
                    var g = t(f);
                    f = g.next().value;
                    g = g.next().value;
                    return ip(a, f.Sh, dp(a), f.ri, d, f.Ch, g)
                }), Ai(a.h))
            }
        }
    }

    function jp(a, b, c) {
        var d = gp(a, c)(b);
        return function(e) {
            var f = d(N(e));
            return function(g) {
                return R([g, f]).g(P(function(h) {
                    var k = t(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = kj(k.value.G, h.value.ca),
                        m = jj(kj(k.value.T, h.value.ca), h.value.aa);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            R: "nio",
                            T: m,
                            G: l
                        })
                    }
                }))
            }
        }
    }

    function kp(a) {
        return P(function(b) {
            return "nio" !== b.value.Z ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    aa: En(a, !0),
                    O: En(a, !0)
                })
            })
        })
    }

    function lp(a, b) {
        return N(b).g(a, P(function() {
            return b
        }))
    }

    function hp(a, b) {
        return a.i.timeline !== Pe ? cd(new De(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? cd(new De(0)) : (new L(function(c) {
            var d = new M,
                e = new Wo(d.next.bind(d), {
                    threshold: [].concat(u(b))
                });
            c.next({
                ri: d.g(Bh(a.C, 735)),
                Sh: e,
                Ch: function(f) {
                    f = e.takeRecords(f);
                    0 < f.length && d.next(f)
                }
            })
        })).g(Af(1), eg(1), jd()) : cd(new De(1))
    }

    function mp(a) {
        return Ld(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function ip(a, b, c, d, e, f, g) {
        return new L(function(h) {
            function k() {
                y || (y = !0, void 0 !== g.j && b.unobserve(e, g.j), m.unsubscribe(), v.unsubscribe(), p.unsubscribe(), C.unsubscribe())
            }
            if (void 0 !== g.j) {
                Xo(b, e);
                b.observe(e, g.j);
                var l = new Xc({
                        timestamp: a.i.now(),
                        value: Object.assign({}, Zo, {
                            Z: "nio",
                            R: "nio"
                        })
                    }),
                    m = d.g(Od(function(B) {
                        return mp(B)
                    }), S(function(B) {
                        return B.target === g.j
                    }), P(function(B) {
                        return {
                            timestamp: new Re(B.time, Pe),
                            value: {
                                Z: "nio",
                                aa: B.rootBounds || hj,
                                O: B.rootBounds || En(a, !0),
                                Y: r,
                                R: "nio",
                                T: B.intersectionRect,
                                G: B.boundingClientRect,
                                ca: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: B.isIntersecting,
                                dg: B.isVisible
                            }
                        }
                    }), $f(l), jd()).subscribe(h),
                    r = new M,
                    p = r.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.i.now(),
                            value: l.value.value
                        });
                        void 0 !== g.j && (b.unobserve(e, g.j), b.observe(e, g.j))
                    }),
                    v = lp(c, g).subscribe(function() {
                        r.next()
                    }),
                    y = !1,
                    C = g.released.subscribe(function() {
                        return k()
                    });
                return k
            }
        })
    };

    function np(a, b) {
        var c = a.ke().g(P(function() {
            return "b"
        }));
        return fe(b, c).g(Af(1), X(a.h, 1))
    };

    function op(a) {
        return function(b) {
            var c;
            return b.g(qg(function(d) {
                return void(c = d.timestamp)
            }), P(function(d) {
                return d.value
            }), a, P(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var pp = function(a) {
            return a.T.width * a.T.height / (a.G.width * a.G.height)
        },
        qp = op(K(P(function(a) {
            var b;
            return null != (b = a.ed) ? b : pp(a)
        }), P(function(a) {
            return isFinite(a) ? a : 0
        }))),
        rp = op(K(P(function(a) {
            var b;
            return null != (b = a.ed) ? b : pp(a)
        }), P(function(a) {
            return isFinite(a) ? a : -1
        })));
    var sp = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    sp.prototype.ha = function(a) {
        return a instanceof sp ? this.a.ha(a.a) && this.b.ha(a.b) : !1
    };
    sp.prototype.pa = function(a) {
        var b = this.a.pa(a).value,
            c = this.b.pa(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(sp.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        u: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.u.timestamp.maximum(this.b.u.timestamp),
                    b = this.a.u.timestamp.equals(a) ? this.a.u.value : this.a.pa(a).value,
                    c = this.b.u.timestamp.equals(a) ? this.b.u.value : this.b.pa(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var tp = function(a, b) {
        this.input = a;
        this.rd = b;
        this.u = {
            timestamp: this.input.u.timestamp,
            value: this.rd(this.input.u.value)
        }
    };
    tp.prototype.ha = function(a) {
        return a instanceof tp ? this.input.ha(a.input) && this.rd === a.rd : !1
    };
    tp.prototype.pa = function(a) {
        a = this.input.pa(a);
        return {
            timestamp: a.timestamp,
            value: this.rd(a.value)
        }
    };
    da.Object.defineProperties(tp.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function up(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var vp = function(a, b, c) {
        this.clock = a;
        this.u = b;
        this.active = c
    };
    vp.prototype.ha = function(a) {
        return a instanceof vp ? this.active === a.active && this.clock.timeline === a.clock.timeline && up(this.u, a.u) : !1
    };
    vp.prototype.pa = function(a) {
        return {
            timestamp: a,
            value: this.u.value + (this.active ? Math.max(0, Te(a, this.u.timestamp)) : 0)
        }
    };
    var wp = function() {};
    wp.prototype.ia = function() {
        return this.pa(this.clock.now())
    };
    wp.prototype.qa = function(a) {
        var b = this.clock.timeline,
            c, d = null != (c = a.get(b)) ? c : this.clock.now();
        a.set(b, d);
        return this.pa(d)
    };
    wp.prototype.map = function(a) {
        return new xp(this, a)
    };
    wp.prototype.ra = function(a) {
        return new yp(this, a)
    };
    var yp = function() {
        sp.apply(this, arguments);
        this.map = wp.prototype.map;
        this.ra = wp.prototype.ra;
        this.ia = wp.prototype.ia;
        this.qa = wp.prototype.qa
    };
    w(yp, sp);
    var zp = function() {
        vp.apply(this, arguments);
        this.map = wp.prototype.map;
        this.ra = wp.prototype.ra;
        this.ia = wp.prototype.ia;
        this.qa = wp.prototype.qa
    };
    w(zp, vp);
    var xp = function() {
        tp.apply(this, arguments);
        this.map = wp.prototype.map;
        this.ra = wp.prototype.ra;
        this.ia = wp.prototype.ia;
        this.qa = wp.prototype.qa
    };
    w(xp, tp);

    function Ap(a, b) {
        a.Fa && (a.vb = a.Fa);
        a.Fa = b;
        a.vb && a.vb.value ? (b = Math.max(0, Te(b.timestamp, a.vb.timestamp)), a.totalTime += b, a.oa += b) : a.oa = 0;
        return a
    }

    function Bp(a) {
        return K(Xf(Ap, {
            totalTime: 0,
            oa: 0
        }), P(function(b) {
            return new zp(a, {
                timestamp: b.Fa.timestamp,
                value: b.totalTime
            }, b.Fa.value)
        }))
    }

    function Cp(a) {
        return K(Xf(Ap, {
            totalTime: 0,
            oa: 0
        }), P(function(b) {
            return new zp(a, {
                timestamp: b.Fa.timestamp,
                value: b.oa
            }, b.Fa.value)
        }))
    };

    function Dp(a) {
        return K(Cp(a), P(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var Ep = function(a, b) {
        this.u = b;
        this.ia = wp.prototype.ia;
        this.qa = wp.prototype.qa;
        this.map = wp.prototype.map;
        this.ra = wp.prototype.ra;
        this.clock = a
    };
    Ep.prototype.ha = function(a) {
        return a.active
    };
    Ep.prototype.pa = function() {
        return this.u
    };
    da.Object.defineProperties(Ep.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function Fp(a, b) {
        return b.g(P(function(c) {
            return new Ep(a.i, {
                timestamp: a.i.now(),
                value: c
            })
        }))
    };

    function Gp(a, b) {
        return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
    };

    function Hp(a) {
        return function(b) {
            return b.g(tg(a), P(function(c) {
                var d = t(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: Gp(c.value, d)
                }
            }))
        }
    };
    var Ip = P(function(a) {
        if ("omid" === a.value.Z) {
            if ("nio" === a.value.R) return "omio";
            if ("geo" === a.value.R) return "omgeo"
        }
        return "geo" === a.value.R || "nio" === a.value.R ? a.value.Z : a.value.R
    });

    function Jp() {
        return K(S(function(a, b) {
            return 0 < b
        }), Kp, V(-1), T())
    }
    var Kp = K(S(function(a) {
        return !isNaN(a)
    }), Xf(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), T());
    var Lp = op(K(P(function(a) {
        return a.T.width * a.T.height / (a.aa.width * a.aa.height)
    }), P(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function Mp(a, b, c) {
        return a ? R([b, c]).g(S(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), P(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Np(a) {
        return function(b) {
            var c = b.g(qp),
                d = b.g(Lp);
            return a instanceof L ? a.g(W(function(e) {
                return Mp(e, c, d)
            })) : Mp(a.value, c, d)
        }
    };
    var Op = K(op(P(function(a) {
        a = a.ed ? a.ed * a.G.width * a.G.height / (a.O.width * a.O.height) : a.T.width * a.T.height / (a.O.width * a.O.height);
        return isFinite(a) ? a : 0
    })));

    function Pp(a, b, c, d) {
        var e = d.gd,
            f = d.fe,
            g = d.Lg,
            h = d.sf,
            k = d.De,
            l = d.gg,
            m = d.jd;
        d = d.Ig;
        b = Qp(a, c, b);
        c = Rp(a, c);
        d = Sp(b, d);
        var r = Tp(a, e, l, b),
            p = r.g(P(function(A) {
                return A.value
            }), T(), X(a, 1), Xf(function(A, U) {
                return Math.max(A, U)
            }, 0)),
            v = r.g(P(function(A) {
                return A.value
            }), Jp(), X(a, 1)),
            y = b.g(rp, P(function(A) {
                return A.value
            }), Af(2), T(), X(a, 1));
        g = Up(a, b, g, h);
        var C = g.g(V(!1), T(), P(function(A) {
            return A ? k : f
        }));
        h = r.g(Hp(C), T(), X(a, 1));
        var B = R([h, b]).g(S(function(A) {
                var U = t(A);
                A = U.next().value;
                U = U.next().value;
                return A.timestamp.equals(U.timestamp)
            }),
            P(function(A) {
                var U = t(A);
                A = U.next().value;
                U = U.next().value;
                return {
                    visible: A.value,
                    geometry: U.value.G
                }
            }), Xf(function(A, U) {
                return !U.visible && A.visible ? A : U
            }, {
                visible: !1,
                geometry: hj
            }), P(function(A) {
                return A.geometry
            }), V(hj), X(a, 1), T(ij));
        l = l instanceof L ? l.g(T(), Uf()) : ce;
        C = R([l, C]).g(Uf());
        var G = b.g(S(function(A) {
                return "ns" !== A.value.Z && "ns" !== A.value.R
            }), Xf(function(A) {
                return A + 1
            }, 0), V(0), X(a, 1)),
            J = c.g(Uf(!0), V(!1), X(a, 1));
        J = R([m, J]).g(P(function(A) {
            var U = t(A);
            A = U.next().value;
            U = U.next().value;
            return A &&
                !U
        }), X(a, 1));
        var Y = b.g(Op, T()),
            ea = Y.g(P(function(A) {
                return A.value
            }), Xf(function(A, U) {
                return Math.max(A, U)
            }, 0), T(), X(a, 1)),
            E = Y.g(P(function(A) {
                return A.value
            }), Jp(), X(a, 1));
        return {
            Te: l,
            Hc: C,
            za: {
                Li: b,
                hg: b.g(Ip),
                ad: B.g(T(ij)),
                visible: h.g(T(up)),
                Ye: r.g(T(up)),
                fg: p,
                ki: v,
                vf: b.g(To, T(Lb)),
                gj: Y,
                di: ea,
                ji: E,
                fd: c,
                Y: (new Z(new M)).P(a),
                bg: g,
                gd: e,
                jd: m,
                Nf: J,
                hj: G,
                Zh: y,
                Bd: d
            }
        }
    }

    function Rp(a, b) {
        return b.g(S(function() {
            return !1
        }), P(function(c) {
            return c
        }), jf(function(c) {
            return (new Z(c)).P(a)
        }))
    }

    function Sp(a, b) {
        a = R([a, b]).g(P(function(e) {
            e = t(e);
            var f = e.next().value;
            if (e.next().value && f.value.isIntersecting) return f.value.dg
        }), T());
        var c = a.g(P(function(e) {
                return void 0 === e ? !0 : e
            }), Xf(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(Xf(function(e, f) {
                return void 0 === f ? e : f ? !1 : null != e ? e : !0
            }, void 0), P(function(e) {
                return !!e
            }));
        return R([b, ie(a, c, d)]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            var g = t(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (void 0 ===
                f) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }

    function Qp(a, b, c) {
        return b.g(ag(ce), X(a, 1)).g(T(function(d, e) {
            return up(d, e, $o)
        }), V({
            timestamp: c.now(),
            value: Zo
        }), X(a, 1))
    }

    function Tp(a, b, c, d) {
        c = d.g(Np(c), op(P(function(e) {
            return Do(e)
        })), X(a, 1));
        return b instanceof Z ? c : R([c, b]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), T(up), X(a, 10))
    }

    function Up(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.G.width * e.value.G.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = R(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), V(!1), T(), X(a, 1)) : (new Z(!1)).P(a)
    };
    var Vp = function(a) {
            this.i = a;
            this.zd = null;
            this.timeout = new M
        },
        Xp = function(a, b) {
            Wp(a);
            a.zd = a.i.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Wp = function(a) {
            null !== a.zd && (a.i.clearTimeout(a.zd), a.zd = null)
        };

    function Yp(a, b, c, d) {
        var e = Zp.Dg,
            f = new Vp(b);
        c = c.g(V(void 0), W(function() {
            Wp(f);
            return d
        })).g(P(function(g) {
            Wp(f);
            var h = g.u,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, Te(k, h.timestamp)), Xp(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return R([c, Zd(f.timeout, N(void 0))]).g(P(function(g) {
            return t(g).next().value
        }), ng(function(g) {
            return !g.ia().value
        }, !0), X(a, 1))
    };

    function $p(a) {
        var b = new zp(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return K(Cp(a), Xf(function(c, d) {
            return c.u.value > d.u.value ? new zp(a, c.u, !1) : d
        }, b), P(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function aq(a) {
        return function(b) {
            return K(Hp(N(b)), $p(a))
        }
    };

    function bq(a) {
        return function(b) {
            return K(op(P(function(c) {
                return Gp(c, b)
            })), Bp(a), P(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function cq(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.ra(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function dq(a, b) {
        return a.ra(b).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function eq(a, b, c, d, e, f) {
        var g = fq;
        if (1 < g.length)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(V(void 0), W(function() {
            return d.g(Dp(a))
        }), T(function(k, l) {
            return k.ha(l)
        }), X(b, 1));
        f = f.g(V(void 0), W(function() {
            return d.g($p(a))
        }), T(function(k, l) {
            return k.ha(l)
        }), X(b, 1));
        return {
            xc: e.g(V(void 0), W(function() {
                return c.g(Uo(aq(a), g))
            }), P(cq), T(function(k, l) {
                return k.ha(l)
            }), X(b, 1)),
            Kc: e.g(V(void 0), W(function() {
                return c.g(Uo(bq(a), g), P(function(k) {
                    return k.map(function(l, m) {
                        return 0 < m ?
                            dq(l, k[m - 1]) : l
                    })
                }))
            }), P(cq), T(function(k, l) {
                return k.ha(l)
            }), X(b, 1)),
            wc: f,
            mb: h.g(T(function(k, l) {
                return k.ha(l)
            }), X(b, 1))
        }
    };

    function gq(a) {
        var b;
        if (b = hq(a)) b = !iq(a, "abgcp") && !iq(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !iq(a, "cbb");
        return b
    }

    function iq(a, b) {
        return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ")
    }

    function hq(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function jq(a, b) {
        if (void 0 === a.j || !a.j.children) return a;
        for (var c = Kb(a.j.children); c.length;) {
            var d = b ? c.filter(gq) : c.filter(hq);
            if (1 === d.length) return new Ni(d[0]);
            if (1 < d.length) break;
            c = Nb(c, function(e) {
                return Kb(e.children)
            })
        }
        return a
    }

    function kq(a, b, c, d, e) {
        if (c) return {
            Zc: b,
            wb: N(null)
        };
        c = b.element.g(P(function(f) {
            a: if (void 0 === f.j || hq(f.j)) f = {
                    sd: f,
                    wb: "mue"
                };
                else {
                    var g = jq(f, e);
                    if (void 0 !== g.j && hq(g.j)) f = {
                        sd: g,
                        wb: "ie"
                    };
                    else {
                        if (d || a.se)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    sd: new Ni(g),
                                    wb: "ce"
                                };
                                break a
                            }
                        f = {
                            sd: f,
                            wb: "mue"
                        }
                    }
                }return f
        }), hg());
        return {
            Zc: {
                yb: b.yb,
                element: c.g(P(function(f) {
                    return f.sd
                }))
            },
            wb: c.g(P(function(f) {
                return f.wb
            }))
        }
    };

    function lq(a, b, c, d) {
        var e = d.gd,
            f = d.fe,
            g = d.Lg,
            h = d.sf,
            k = d.De,
            l = d.gg,
            m = d.jd;
        d = d.Ig;
        b = mq(a, c, b);
        c = nq(a, c);
        d = oq(b, d);
        var r = pq(a, e, l, b),
            p = r.g(P(function(E) {
                return E.value
            }), T(), X(a, 1), Xf(function(E, A) {
                return Math.max(E, A)
            }, 0)),
            v = r.g(P(function(E) {
                return E.value
            }), Jp(), X(a, 1)),
            y = b.g(rp, P(function(E) {
                return E.value
            }), Af(2), T(), X(a, 1));
        g = qq(a, b, g, h);
        var C = g.g(V(!1), T(), P(function(E) {
            return E ? k : f
        }));
        h = r.g(Hp(C), T(), X(a, 1));
        var B = R([h, b]).g(S(function(E) {
                var A = t(E);
                E = A.next().value;
                A = A.next().value;
                return E.timestamp.equals(A.timestamp)
            }),
            P(function(E) {
                var A = t(E);
                E = A.next().value;
                A = A.next().value;
                return {
                    visible: E.value,
                    geometry: A.value.G
                }
            }), Xf(function(E, A) {
                return !A.visible && E.visible ? E : A
            }, {
                visible: !1,
                geometry: hj
            }), P(function(E) {
                return E.geometry
            }), V(hj), X(a, 1), T(ij));
        l = l instanceof L ? l.g(T(), Uf()) : ce;
        C = R([l, C]).g(Uf());
        var G = b.g(S(function(E) {
                return "ns" !== E.value.Z && "ns" !== E.value.R
            }), Xf(function(E) {
                return E + 1
            }, 0), V(0), X(a, 1)),
            J = c.g(Uf(!0), V(!1), X(a, 1));
        J = R([m, J]).g(P(function(E) {
            var A = t(E);
            E = A.next().value;
            A = A.next().value;
            return E &&
                !A
        }), X(a, 1));
        var Y = b.g(Op, T()),
            ea = Y.g(P(function(E) {
                return E.value
            }), Xf(function(E, A) {
                return Math.max(E, A)
            }, 0), T(), X(a, 1));
        a = Y.g(P(function(E) {
            return E.value
        }), Jp(), X(a, 1));
        return {
            Te: l,
            Hc: C,
            za: {
                Li: b,
                hg: b.g(Ip),
                ad: B.g(T(ij)),
                visible: h.g(T(up)),
                Ye: r.g(T(up)),
                fg: p,
                ki: v,
                vf: b.g(To, T(Lb)),
                gj: Y,
                di: ea,
                ji: a,
                fd: c,
                Y: b.g(P(function(E) {
                    return E.value.Y
                })),
                bg: g,
                gd: e,
                jd: m,
                Nf: J,
                hj: G,
                Zh: y,
                Bd: d
            }
        }
    }

    function nq(a, b) {
        return b.g(S(function() {
            return !1
        }), P(function(c) {
            return c
        }), jf(function(c) {
            return (new Z(c)).P(a)
        }))
    }

    function mq(a, b, c) {
        return b.g(ag(ce), X(a, 1)).g(T(function(d, e) {
            return up(d, e, $o)
        }), V({
            timestamp: c.now(),
            value: Zo
        }), X(a, 1))
    }

    function pq(a, b, c, d) {
        c = d.g(Np(c), op(P(function(e) {
            return Do(e)
        })), X(a, 1));
        return b instanceof Z ? c : R([c, b]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), T(up), X(a, 1))
    }

    function qq(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.G.width * e.value.G.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = R(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), V(!1), T(), X(a, 1)) : (new Z(!1)).P(a)
    }

    function oq(a, b) {
        a = R([a, b]).g(P(function(e) {
            e = t(e);
            var f = e.next().value;
            if (e.next().value && f.value.isIntersecting) return f.value.dg
        }), T());
        var c = a.g(P(function(e) {
                return void 0 === e ? !0 : e
            }), Xf(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(Xf(function(e, f) {
                return void 0 === f ? e : f ? !1 : null != e ? e : !0
            }, void 0), P(function(e) {
                return !!e
            }));
        return R([b, ie(a, c, d)]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            var g = t(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (void 0 ===
                f) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    };
    var rq = K(Mn("data-google-av-itpl"), P(function(a) {
        return Number(a)
    }), P(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var sq = {
            mj: "addEventListener",
            wj: "getMaxSize",
            xj: "getScreenSize",
            yj: "getState",
            zj: "getVersion",
            Kj: "removeEventListener",
            Gj: "isViewable"
        },
        tq = function(a, b) {
            this.va = null;
            this.Qh = new M;
            b = b || this.ij;
            var c = a.se,
                d = !a.Lb;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Yc = b(e);
                    this.va = e;
                    this.xb = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Yc = b(a), this.va = a, this.xb = c ? d ? 2 : 1 : 0) : (this.xb = -1, this.Yc = 2)
        };
    tq.prototype.addEventListener = function(a, b) {
        return this.Vb("addEventListener", a, b)
    };
    tq.prototype.removeEventListener = function(a, b) {
        return this.Vb("removeEventListener", a, b)
    };
    tq.prototype.Of = function() {
        var a = this.Vb("getVersion");
        return "string" === typeof a ? a : ""
    };
    tq.prototype.getState = function() {
        var a = this.Vb("getState");
        return "string" === typeof a ? a : ""
    };
    var uq = function(a) {
            a = a.Vb("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        vq = function(a) {
            if (a.va) return a = a.va.AFMA_LIDAR, "string" === typeof a ? a : void 0
        };
    tq.prototype.ij = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(sq).every(function(b) {
            return "function" === typeof a[b]
        }) ? 0 : 1 : 2 : 1
    };
    tq.prototype.Vb = function(a) {
        var b = x.apply(1, arguments);
        if (this.va) try {
            return this.va[a].apply(this.va, u(b))
        } catch (c) {
            this.Qh.next(a)
        }
    };
    da.Object.defineProperties(tq.prototype, {
        Cf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.va) {
                    var a = this.va.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.va && (this.va.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function wq(a, b) {
        return -1 !== (new tq(a)).xb ? (new Z(!0)).P(a.h) : b.g(Mn("data-google-av-inapp"), P(function(c) {
            return null !== c
        }), X(a.h, 1))
    };
    var yq = function(a, b) {
            var c = this;
            this.i = a;
            this.Ee = this.qd = null;
            this.Pi = b.g(T()).subscribe(function(d) {
                xq(c);
                c.Ee = d
            })
        },
        zq = function(a, b) {
            xq(a);
            a.qd = a.i.setTimeout(function() {
                var c;
                return void(null == (c = a.Ee) ? void 0 : c.next())
            }, b)
        },
        xq = function(a) {
            null !== a.qd && a.i.clearTimeout(a.qd);
            a.qd = null
        };
    yq.prototype.W = function() {
        xq(this);
        this.Pi.unsubscribe();
        this.Ee = null
    };

    function Aq(a, b, c, d, e) {
        var f = Zp.Dg;
        var g = void 0 === g ? new yq(b, d) : g;
        return (new L(function(h) {
            var k = c.g(V(void 0), W(function() {
                return Bq(e)
            })).g(P(function(l) {
                var m = l.value;
                l = l.timestamp;
                var r = m.visible;
                m = m.mb;
                var p = m >= f;
                p || !r ? xq(g) : (l = Math.max(0, Te(b.now(), l)), zq(g, Math.max(0, f - m - l)));
                return p
            }), Xf(function(l, m) {
                return m || l
            }, !1), T()).subscribe(h);
            return function() {
                g.W();
                k.unsubscribe()
            }
        })).g(ng(function(h) {
            return !h
        }, !0), X(a, 1))
    }

    function Bq(a) {
        return Go([a, a.g(Vo())]).g(P(function(b) {
            var c = t(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    mb: c.value
                }
            }
        }), T(function(b, c) {
            return up(b, c, function(d, e) {
                return d.mb === e.mb && d.visible === e.visible
            })
        }))
    };

    function Cq(a, b) {
        return {
            Od: b.g(Mn("data-google-av-adk")),
            hc: b.g(Mn("data-google-av-btr"), T(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Xd: b.g(Mn("data-google-av-cpmav"), T(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            ff: b.g(Mn("data-google-av-vrus"), T(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            oh: so(a, b),
            flags: b.g(Mn("data-google-av-flags"), T()),
            bb: wq(a, b),
            xe: b.g(Ko("cr", function(c) {
                return "1" ===
                    c
            }), T()),
            Wh: b.g(Ko("omid", function(c) {
                return "1" === c
            }), T()),
            ue: b.g(rq),
            metadata: b.g(Mn("data-google-av-metadata")),
            Qa: b.g(Tn),
            Ea: b.g(Nn),
            lj: b.g(Ko("la", function(c) {
                return "1" === c
            }), T()),
            rb: b.g(Mn("data-google-av-turtlex"), P(function(c) {
                return null !== c
            }), T()),
            Be: b.g(Mn("data-google-av-vattr"), P(function(c) {
                return null !== c
            }), T())
        }
    };

    function Dq() {
        return K(Jo(), Xf(function(a, b) {
            return Math.max(a, b)
        }, 0), P(function(a) {
            return Math.round(a)
        }))
    };

    function Eq(a) {
        return K(Hp(N(a)), Dq())
    };

    function Fq(a, b, c, d, e) {
        c = c.g(P(function() {
            return !1
        }));
        d = R([e, d]).g(W(function(f) {
            f = t(f).next().value;
            return Gq(b, f)
        }));
        return Zd(N(!1), c, d).g(T(), X(a.h, 1))
    }

    function Gq(a, b) {
        return a.g(P(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var Hq = [33, 32],
        Iq = K(rq, P(function(a) {
            return 0 <= Hq.indexOf(a)
        }), T());

    function Jq(a, b, c, d, e, f) {
        var g = c.g(P(function(k) {
                return 9 === k
            })),
            h = b.element.g(Iq);
        c = e.g(S(function(k) {
            return k
        }), W(function() {
            return R([g, h])
        }), P(function(k) {
            k = t(k);
            var l = k.next().value;
            return !k.next().value || l
        }), T());
        f = R([c, d.g(T()), f]).g(P(function(k) {
            var l = t(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return kq(a, b, !k, m, l)
        }), eg(1), jd());
        d = f.g(P(function(k) {
            return k.Zc
        }));
        f = f.g(W(function(k) {
            return k.wb
        }), V(null), T(), X(a.h, 1));
        return {
            Ma: d,
            jc: f
        }
    };

    function Kq(a) {
        var b = void 0 === b ? !1 : b;
        return K(W(function(c) {
            return ej(a.document, c, b)
        }), X(a.h, 1))
    };
    var Lq = function(a, b, c, d, e, f) {
        this.tc = b.element.g(Kq(a), X(a.h, 1));
        this.wg = Fq(a, c, b.element, this.tc, d);
        c = Jq(a, b, e, d, this.wg, f);
        d = c.jc;
        this.Ma = c.Ma;
        this.jc = d;
        this.gf = Zd((new Z(1)).P(a.h), b.element.g(Af(1), P(function() {
            return 2
        }), X(a.h, 1)), this.tc.g(Af(1), P(function() {
            return 3
        }), X(a.h, 1)), this.wg.g(S(Boolean), Af(1), P(function() {
            return 0
        }), X(a.h, 1))).g(ng(function(g) {
            return 0 !== g
        }, !0), X(a.h, 0))
    };

    function Mq(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function Nq(a, b, c) {
        return b instanceof L ? b.g(W(function(d) {
            return (d = Mq(d, c)) ? cd(new De(d)) : a
        })) : (b = Mq(b.value, c)) ? cd(new De(b)) : a
    };

    function Oq(a) {
        var b = new De(13);
        if (1 > a.length) return {
            chain: Yc,
            Sd: Yc
        };
        var c = new M,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(jf(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(jf(function(e) {
                c.next(e);
                return cd(b)
            }), $f(new M), jd()),
            Sd: c
        }
    };
    var Pq = function() {};
    var Qq = function(a, b) {
        this.context = a;
        this.aj = b
    };
    w(Qq, Pq);
    Qq.prototype.Ya = function(a, b) {
        var c = this.aj.map(function(f) {
                return f.Ya(a, b)
            }),
            d = Oq(c.map(function(f) {
                return f.ab
            })),
            e = d.Sd.g(Rq());
        return {
            ab: d.chain.g(X(this.context.h, 1)),
            Va: Object.assign.apply(Object, [{
                Ue: e,
                tk: d.Sd
            }].concat(u(c.map(function(f) {
                return f.Va
            }))))
        }
    };
    var Rq = function() {
        return Xf(function(a, b) {
            b instanceof De ? a.push(b.gi) : a.push(-1);
            return a
        }, [])
    };

    function Sq(a, b) {
        var c = a.g($f(new M), jd());
        return W(function(d) {
            return c.g(b(d))
        })
    };

    function Tq(a, b) {
        var c = void 0 === c ? function() {
            var f = (ti(a.global) ? a.global.innerWidth : 0) || a.le() || 0,
                g = (ti(a.global) ? a.global.innerHeight : 0) || a.je() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Lb ? dj(a.document) ? a.Vh ? null : cd(new De(5)) : cd(new De(4)) : cd(new De(3));
        if (d) return d;
        var e = new M;
        return Zd(N({}), b, e).g(P(function() {
            var f = Uq(a, c);
            return {
                timestamp: a.i.now(),
                value: {
                    Z: "iem",
                    aa: f,
                    O: f,
                    Y: e,
                    ca: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), X(a.h, 1))
    }

    function Uq(a, b) {
        b = b();
        var c = oi(document),
            d = function(p, v) {
                return !!a.document.elementFromPoint(p, v)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Vq(f, h, function(p) {
            return d(e, p)
        }), g = Vq(e, g, function(p) {
            return d(p, f)
        });
        else if (k) h = Vq(f, h, function(p) {
            return d(g, p)
        }), e = Vq(g, e, function(p) {
            return d(p, f)
        });
        else if (l) f = Vq(h, f, function(p) {
            return d(e,
                p)
        }), g = Vq(e, g, function(p) {
            return d(p, h)
        });
        else if (c) f = Vq(h, f, function(p) {
            return d(g, p)
        }), e = Vq(g, e, function(p) {
            return d(p, h)
        });
        else {
            var m = Math.floor((e + g) / 2),
                r = Math.floor((f + h) / 2);
            if (!d(m, r)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Vq(r, f, function(p) {
                return d(m, p)
            });
            h = Vq(r, h, function(p) {
                return d(m, p)
            });
            e = Vq(m, e, function(p) {
                return d(p, r)
            });
            g = Vq(m, g, function(p) {
                return d(p, r)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Vq(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Wq = function(a, b) {
        this.context = a;
        this.Oa = b
    };
    w(Wq, Pq);
    Wq.prototype.Ya = function(a, b) {
        var c = Sq(Tq(this.context, this.Oa), bp(this.context, b.Qa));
        return {
            ab: Nq(a.Ma.g(c), b.bb, 0),
            Va: {}
        }
    };

    function Xq(a, b) {
        if (a.Lb) return cd(new De(6));
        var c = new M;
        return Zd(N({}), b, c).g(P(function() {
            return {
                timestamp: a.i.now(),
                value: {
                    Z: "geo",
                    aa: Yq(a),
                    O: En(a, !0),
                    Y: c,
                    ca: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Ai(a.h))
    }

    function Yq(a) {
        var b = En(a, !1);
        if (!a.se || !ti(a.global.parent) || a.global.parent === a.global) return b;
        var c = new Bn(a.global.parent, a.Ga);
        c.K = a.K;
        c = Yq(c);
        a = a.global.frameElement.getBoundingClientRect();
        return jj(kj(jj(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Zq = function(a, b) {
        this.context = a;
        this.Oa = b
    };
    w(Zq, Pq);
    Zq.prototype.Ya = function(a, b) {
        var c = Sq(Xq(this.context, this.Oa), bp(this.context, b.Qa));
        return {
            ab: Nq(a.Ma.g(c), b.bb, 0),
            Va: {}
        }
    };
    var $q = function(a, b, c) {
        c = void 0 === c ? gp(a, b) : c;
        this.context = a;
        this.Th = c
    };
    w($q, Pq);
    $q.prototype.Ya = function(a, b) {
        var c = this.Th(b.Jg);
        return {
            ab: Nq(a.Ma.g(c, kp(this.context)), b.bb, 0),
            Va: {}
        }
    };

    function ar(a, b, c, d, e) {
        var f = void 0 === f ? new tq(a) : f;
        var g = void 0 === g ? zg(a.i, 500) : g;
        var h = void 0 === h ? zg(a.i, 100) : h;
        e = N(f).g(br(c), qg(function(k) {
            d.next(k.xb)
        }), cr(a, h), dr(a), er(a, e), eg(1), jd());
        f = new M;
        b = Zd(N({}), b, f);
        return e.g(fr(a, f, b, g, c), X(a.h, 1))
    }

    function er(a, b) {
        return K(function(c) {
            return R([c, b])
        }, qf(function(c) {
            c = t(c);
            var d = c.next().value;
            return 9 !== c.next().value || uq(d) ? N(!0) : gr(a, d, "viewableChange").g(S(function(e) {
                return t(e).next().value
            }), Af(1))
        }), P(function(c) {
            return t(c).next().value
        }))
    }

    function br(a) {
        return W(function(b) {
            if (-1 === b.xb) return a.next("if"), cd(new De(7));
            if (0 !== b.Yc) switch (b.Yc) {
                case 1:
                    return a.next("mm"), cd(new De(18));
                case 2:
                    return a.next("ng"), cd(new De(17));
                default:
                    return a.next("i"), cd(new De(8))
            }
            return N(b)
        })
    }

    function cr(a, b) {
        return qf(function() {
            var c = a.jg;
            return "complete" === bj(a.document) ? N(!0) : c.g(qf(function() {
                return b
            }))
        })
    }
    var dr = function(a) {
        return W(function(b) {
            return "loading" !== b.getState() ? N(b) : gr(a, b, "ready").g(P(function() {
                return b
            }))
        })
    };

    function fr(a, b, c, d, e) {
        return W(function(f) {
            var g = vq(f);
            if ("string" !== typeof g) return e.next("nc"), cd(new De(9));
            void 0 !== f.Cf && (f.Cf = !0);
            g = gr(a, f, g, hr);
            var h = {
                version: f.Of(),
                xb: f.xb
            };
            g = g.g(P(function(l) {
                return ir.apply(null, [a, b, f, h].concat(u(l)))
            }));
            var k = d.g(qg(function() {
                e.next("mt")
            }), W(function() {
                return cd(new De(10))
            }));
            g = fe(g, k);
            return R([g, c]).g(P(function(l) {
                l = t(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.i.now()
                })
            }))
        })
    }

    function hr(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function ir(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : hj;
        c = c.Vb("getMaxSize");
        var g = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                aa: e,
                O: c,
                Z: "mraid",
                Y: b,
                ca: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.i.now()
        };
        return Object.assign({}, a, d, {
            Qj: f
        })
    }

    function gr(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new L(function(e) {
            var f = a.C.Yb(745, function() {
                e.next(x.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(S(function(e) {
            return d.apply(null, u(e))
        }))
    };
    var jr = function(a, b) {
        this.context = a;
        this.Oa = b
    };
    w(jr, Pq);
    jr.prototype.Ya = function(a, b) {
        var c = new ed(1),
            d = new ed(1),
            e = Sq(ar(this.context, this.Oa, c, d, b.Qa), bp(this.context, b.Qa));
        return {
            ab: Nq(a.Ma.g(e), b.bb, 1),
            Va: {
                Fe: c.g(X(this.context.h, 1)),
                Ge: d.g(X(this.context.h, 1))
            }
        }
    };

    function kr(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function lr() {
        var a = Error;
        return en(function(b) {
            return b instanceof a
        }, function() {
            return dn(a)
        })
    };

    function mr(a, b) {
        var c = void 0 === c ? null : c;
        var d = new M,
            e = void 0,
            f = a.Mf,
            g = d.g(P(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.i.now()
                }) : null
            }), S(function(k) {
                return null !== k
            }), P(function(k) {
                return k
            }));
        b = R([Zd(f, g), b]);
        var h = c;
        return b.g(S(function(k) {
            k = t(k).next().value;
            null === h && (h = k.value.bh);
            return k.value.bh === h
        }), qg(function(k) {
            return void(e = t(k).next().value)
        }), P(function(k) {
            var l = t(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var m = k.value.data,
                    r = k.timestamp,
                    p = m.viewport,
                    v, y, C = Object.assign({},
                        p, {
                            width: null != (v = null == p ? void 0 : p.width) ? v : 0,
                            height: null != (y = null == p ? void 0 : p.height) ? y : 0,
                            x: 0,
                            y: 0,
                            nk: p ? p.width * p.height : 0
                        }),
                    B = nr(C),
                    G = m.adView,
                    J = G.measuringElement && G.containerGeometry ? nr(G.containerGeometry) : nr(G.geometry),
                    Y = nr(G.geometry),
                    ea = G.reasons.some(kr),
                    E = ea ? hj : nr(G.onScreenGeometry),
                    A;
                l && (A = G.percentageInView / 100);
                l && ea && (A = 0);
                return {
                    timestamp: r,
                    value: {
                        Z: "omid",
                        aa: J,
                        O: B,
                        Y: d,
                        R: "omid",
                        G: Y,
                        ca: {
                            x: J.left,
                            y: J.top
                        },
                        T: E,
                        ed: A
                    }
                }
            } catch (Pb) {
                m = Pb;
                r = lr();
                p = hn;
                hn = void 0;
                v = [];
                fn(r, m, v) || jn.apply(null, [void 0, p, "Guard " + r.Pf().trim() + " failed:"].concat(u(v.reverse())));
                var U, tb;
                m = null != (tb = null == (U = Pb) ? void 0 : U.message) ? tb : "An unknown error occurred";
                U = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(U);
            }
        }), eg(1), jd())
    }

    function nr(a) {
        var b, c, d, e;
        return {
            left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
            top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
            width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
            height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0)
        }
    };

    function or(a, b, c, d) {
        c = void 0 === c ? ce : c;
        var e = a.h;
        if (null === b) return cd(new De(20));
        if (!b.validate()) return cd(new De(21));
        var f;
        d = pr(e, b, d).g(P(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.i,
                l = a.i;
            if (k.timeline !== g.timeline) throw new Ie;
            g = new Re(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Zd(d, c.g(P(function() {
            return f
        }))).g(S(function(g) {
            return void 0 !== g
        }), P(function(g) {
            return g
        }), X(a.h, 1))
    }

    function pr(a, b, c) {
        return mr(b, c).g(X(a, 1), P(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    ca: {
                        x: d.value.G.left,
                        y: d.value.G.top
                    },
                    aa: d.value.T,
                    O: d.value.O,
                    Z: d.value.R,
                    Y: d.value.Y
                }
            }
        }))
    };
    var qr = function(a, b, c) {
        this.ma = a;
        this.M = b;
        this.Oa = c
    };
    w(qr, Pq);
    qr.prototype.Ya = function(a, b) {
        var c = b.Qa;
        b = or(this.M, this.ma, this.Oa, b.ig);
        c = Sq(b, bp(this.M, c));
        return {
            ab: a.Ma.g(c),
            Va: {}
        }
    };
    var rr = function(a, b, c) {
        this.ma = a;
        this.M = b;
        this.yh = c
    };
    w(rr, Pq);
    rr.prototype.Ya = function(a, b) {
        var c = or(this.M, this.ma, void 0, b.ig);
        b = jp(this.M, b.Jg, this.yh);
        c = Sq(c, b);
        return {
            ab: a.Ma.g(c),
            Va: {}
        }
    };
    var sr = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        tr = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };

    function ur(a) {
        return a.document.zi.g(P(function(b) {
            return "visible" === b
        }), T(), X(a.h, 1))
    };
    var vr;
    vr = ["2024031301"].slice(-1)[0].substring(0, 8);

    function wr(a, b, c) {
        var d;
        return b.g(T(), W(function(e) {
            return c.g(P(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), V(!1), X(a.h, 1))
    };

    function xr(a) {
        return K(op(P(function(b) {
            return Gp(b, a)
        })), Io(), P(function(b) {
            return Math.round(b)
        }))
    };

    function yr(a, b, c, d, e) {
        var f = fq;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(V(void 0), W(function() {
            return c.g(Vo())
        }), T(), X(a, 1));
        e = e.g(V(void 0), W(function() {
            return c.g(Dq())
        }), T(), X(a, 1));
        return {
            xc: d.g(V(void 0), W(function() {
                return b.g(Uo(Eq, f))
            }), T(Lb), X(a, 1)),
            Kc: d.g(V(void 0), W(function() {
                return b.g(Uo(xr, f), P(function(h) {
                    return h.map(function(k, l) {
                        return 0 < l ? k - h[l - 1] : k
                    })
                }))
            }), T(Lb), X(a, 1)),
            wc: e,
            mb: g.g(T(up), X(a, 1))
        }
    };

    function zr(a, b, c) {
        var d = c.g(P(function(e) {
            return {
                value: e,
                timestamp: a.i.now()
            }
        }), T(up));
        return b instanceof L ? b.g(T(), W(function(e) {
            return e ? (new Z({
                value: !1,
                timestamp: a.i.now()
            })).P(a.h) : d
        })) : !1 === b.value ? d : new Z(!1)
    }

    function Ar(a, b, c, d, e, f, g) {
        var h = Zp;
        b = b instanceof L ? b.g(V(!1), T()) : b;
        var k = !(ri() || si());
        c = zr(a, c, d);
        a = g.Ma.g(Fo(a.h));
        return Object.assign({}, h, {
            gd: c,
            Lg: e,
            sf: k,
            gg: b,
            jd: a,
            Ig: f
        })
    };

    function Br(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function Cr(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return Yc;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new M;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(Bh(a.C, 743))
    };
    var Dr = function(a) {
            var b = this;
            this.Ae = !1;
            this.Ke = [];
            this.Je = [];
            a(function(c) {
                b.Ae = !0;
                b.Qi = c;
                b.evaluate()
            }, function(c) {
                b.Mi = c;
                b.evaluate()
            })
        },
        Er = function(a) {
            return new Dr(function(b, c) {
                var d = [],
                    e = 0;
                a.forEach(function(f, g) {
                    f.then(function(h) {
                        d[g] = h;
                        ++e === a.length && b(d)
                    }).catch(function(h) {
                        c(h)
                    })
                })
            })
        };
    Dr.prototype.evaluate = function() {
        var a = this.Qi,
            b = this.Mi;
        if (void 0 !== b || this.Ae) this.Ae && this.Ke.forEach(function(c) {
            return void c(a)
        }), void 0 !== b && this.Je.forEach(function(c) {
            return void c(b)
        }), this.Ke = [], this.Je = []
    };
    Dr.prototype.then = function(a) {
        this.Ke.push(a);
        this.evaluate();
        return this
    };
    Dr.prototype.catch = function(a) {
        this.Je.push(a);
        this.evaluate();
        return this
    };
    var Fr = function(a) {
        this.children = a;
        this.pb = !1;
        this.Td = []
    };
    Fr.prototype.complete = function() {
        var a = this;
        this.pb = !0;
        this.Td.forEach(function(b) {
            return void b(a)
        });
        this.Td.splice(0)
    };
    Fr.prototype.onComplete = function(a) {
        this.pb ? a(this) : this.Td.push(a)
    };
    Fr.prototype.kb = function(a) {
        var b = this.children.map(function(c) {
            return c.kb(a)
        });
        return void 0 === b.find(function(c) {
            return 2 !== c
        }) ? 2 : this.ga ? 0 : b.some(function(c) {
            return 1 === c
        }) ? 1 : 0
    };
    da.Object.defineProperties(Fr.prototype, {
        ga: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.pb
            }
        }
    });
    var Gr = function() {
        var a = x.apply(0, arguments);
        Fr.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            d.onComplete(function() {
                0 === --c && b.complete()
            })
        })
    };
    w(Gr, Fr);
    Gr.prototype.clone = function() {
        return new(Function.prototype.bind.apply(Gr, [null].concat(u(this.events.map(function(a) {
            return a.clone()
        })))))
    };
    Gr.prototype.Ze = function(a, b) {
        var c = this;
        if (!this.ga) {
            var d = this.events.find(function(e) {
                return 1 === e.kb(a)
            });
            void 0 !== d && d.Ze(a, function() {
                c.ga || b()
            })
        }
    };
    var Hr = function(a, b) {
        Fr.call(this, []);
        this.de = a;
        this.nd = Symbol(b);
        this.Bi = a
    };
    w(Hr, Fr);
    Hr.prototype.clone = function() {
        var a = new Hr(this.Bi, this.nd.description);
        a.nd = this.nd;
        return a
    };
    Hr.prototype.kb = function(a) {
        return a !== this.event ? 2 : this.ga || 0 === this.de ? 0 : 1
    };
    Hr.prototype.Ze = function(a, b) {
        1 === this.kb(a) && (this.de--, b(), 0 === this.de && this.complete())
    };
    da.Object.defineProperties(Hr.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.nd
            }
        }
    });
    var Ir = function(a) {
        Hr.call(this, 1, a)
    };
    w(Ir, Hr);
    var Jr = function(a, b, c) {
        var d = x.apply(3, arguments);
        this.Za = a;
        this.vh = b;
        this.Zd = c;
        this.vc = new Set;
        this.Pb = d;
        if (this.Za.M) this.context = this.Za.M;
        else if (this.Za.ma) this.context = this.Za.ma;
        else throw Error("Da");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = t(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
                Gf: void 0
            }, f = e.next()) {
            g.Gf = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return 0 <= k.controlledEvents.indexOf(h.Gf)
                }
            }(g));
            if (0 ===
                f.length) throw Error("Ea");
            if (1 < f.length) throw Error("Fa");
        }
    };
    Jr.prototype.start = function() {
        var a = this;
        this.Pb.forEach(function(b) {
            return void b.start(a.Za)
        });
        this.Zd.start(this.Za, this.Eh.bind(this), this.Ib.bind(this), function() {})
    };
    Jr.prototype.W = function() {
        var a = this;
        this.Zd.W();
        this.vc.forEach(function(b) {
            return void a.Ib(b)
        });
        this.Pb.forEach(function(b) {
            return void b.W()
        })
    };
    var Kr = function(a, b) {
            b = {
                measuringCreativeIds: [].concat(u(a.vc.values())).map(function(c) {
                    return a.context.kc.Ja(c)
                }),
                hasCreativeSourceCompleted: !!a.Zd.xd,
                colleagues: a.Pb.map(function(c) {
                    return {
                        name: c.name,
                        controlledEvents: c.controlledEvents.map(function(d) {
                            var e;
                            return null != (e = d.description) ? e : "n/a"
                        }),
                        subscribedEvents: c.subscribedEvents.map(function(d) {
                            var e;
                            return null != (e = d.description) ? e : "n/a"
                        })
                    }
                }),
                ephemeralCreativeStateChanges: b
            };
            b = {
                specMajor: 2,
                specMinor: 0,
                specPatch: 0,
                instanceId: a.context.kc.Ja(a.context.yb),
                timestamp: Te(a.context.i.now(), new Re(0, a.context.i.timeline)),
                mediatorState: b
            };
            Be(a.context, b)
        },
        Lr = function(a, b, c, d, e) {
            var f = {};
            Kr(a, (f[b] = {
                events: [{
                    timestamp: c,
                    description: d,
                    status: e
                }]
            }, f))
        };
    Jr.prototype.Eh = function(a, b, c) {
        var d = this;
        if (!this.vc.has(a)) {
            var e = this.vh.clone();
            this.vc.add(a);
            Kr(this, {});
            var f = !1,
                g = [];
            this.Pb.forEach(function(h) {
                var k = function(l, m, r) {
                    var p = d.context.kc.Ja(a),
                        v = Te(d.context.i.now(), new Re(0, d.context.i.timeline)),
                        y, C = null != (y = l.description) ? y : "n/a";
                    if (0 > h.controlledEvents.indexOf(l) || 1 !== e.kb(l)) return r(!1), Lr(d, p, v, C, 1), new Dr(function(G) {
                        return void G()
                    });
                    var B = new Dr(function(G) {
                        e.Ze(l, function() {
                            d.Pb.filter(function(J) {
                                return 0 <= J.subscribedEvents.indexOf(l)
                            }).forEach(function(J) {
                                return void J.handleEvent(a,
                                    l, m)
                            });
                            G()
                        })
                    });
                    return new Dr(function(G) {
                        B.then(function() {
                            r(!0);
                            Lr(d, p, v, C, 2);
                            G()
                        })
                    })
                };
                h.ne(a, b, c, function(l, m, r) {
                    return f ? k(l, m, r) : new Dr(function(p) {
                        g.push(function() {
                            k(l, m, r).then(function() {
                                p()
                            })
                        })
                    })
                })
            });
            f = !0;
            g.forEach(function(h) {
                return void h()
            })
        }
    };
    Jr.prototype.Ib = function(a) {
        this.vc.delete(a);
        this.Pb.forEach(function(b) {
            b.Ib(a)
        });
        Kr(this, {})
    };
    var Mr = function(a, b) {
            this.key = a;
            this.defaultValue = void 0 === b ? !1 : b;
            this.valueType = "boolean"
        },
        Nr = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var Or = new Mr("45430027"),
        Pr = new Mr("100006"),
        Qr = new Nr("45362137"),
        Rr = new Mr("45377435"),
        Sr = new Mr("45618478"),
        Tr = new Mr("45372163"),
        Ur = new Mr("45407241"),
        Vr = new Mr("45382077"),
        Wr = new Mr("45407239"),
        Xr = new Mr("45407240", !0),
        Yr = new Mr("45430682"),
        Zr = new Mr("45427308");
    var $r = new Nr("45389692");
    var tl = function(a) {
        kn.call(this, a)
    };
    w(tl, kn);
    tl.prototype.ie = function() {
        return Al(this, 4, !0)
    };
    tl.Aa = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var as = [0, Ym, -2, Xm, -1];
    var bs = [0, Vm, -3];
    var cs = [0, Tm, Vm, -1, an, Sm, Tm];
    var ds = function(a) {
        kn.call(this, a)
    };
    w(ds, kn);
    ds.prototype.getType = function() {
        var a = 0;
        a = void 0 === a ? 0 : a;
        var b = gl(this, 6);
        b = null == b ? b : Number.isFinite(b) ? b | 0 : void 0;
        return zl(b, a)
    };
    ds.Aa = "ads.geo.GeoTargetMessage";
    ds.Qe = [17, 18];
    var es = [0, Zm, -4, an, Xm, Vm, Sm, Zm, Sm, Zm, Vm, Zm, -1, bs, $m, Um, Zm, Tm, -1, Vm, -1, Tm, Sm, cs, Rm, Zm];
    var fs = function(a) {
        kn.call(this, a)
    };
    w(fs, kn);
    fs.prototype.ie = function() {
        return Al(this, 3, !0)
    };
    fs.Aa = "ads.branding.measurement.client.serving.integrations.reach.ReachMetadata";
    fs.Qe = [5, 6];
    var gs = [0, Ym, -1, Xm, es, Wm, -1];
    var hs = function(a) {
        kn.call(this, a)
    };
    w(hs, kn);
    hs.Aa = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var is = function(a, b) {
        return function(c, d) {
            a: {
                if (Yl.length) {
                    var e = Yl.pop();
                    Wl(e, d);
                    e.l.qc(c, void 0, void 0, d);
                    c = e
                } else c = new Xl(c, d);
                try {
                    var f = new a,
                        g = f.B;
                    qm(b)(g, c);
                    var h = f;
                    break a
                } finally {
                    c.Jf()
                }
                h = void 0
            }
            return h
        }
    }(hs, [0, gs, as]);
    var js = function() {
            this.If = {}
        },
        ks = function(a, b) {
            a = a.If[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var ls = function() {
        this.zf = new Map
    };
    ls.prototype.start = function(a, b, c, d) {
        var e = this;
        if (void 0 === this.xd && a.M) {
            var f = a.M;
            this.yf = d;
            c = Br(f);
            d = Cr(f);
            d = Wn(f, d);
            this.xd = (c ? Yc : d.g(P(function(g) {
                var h = void 0 === h ? Symbol() : h;
                return Object.freeze({
                    yb: h,
                    element: (new Z(g)).P(f.h)
                })
            }), On())).subscribe(function(g) {
                var h = g.yb;
                e.zf.set(h, g);
                g.element.g(Af(1)).subscribe(function(k) {
                    var l = Ln(k, "data-google-av-flags"),
                        m = new js;
                    if (null !== l) try {
                        var r = JSON.parse(l)[0];
                        l = "";
                        for (var p = 0; p < r.length; p++) l += String.fromCharCode(r.charCodeAt(p) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(p %
                            10));
                        m.If = JSON.parse(l)
                    } catch (Lf) {}
                    var v, y, C, B, G, J, Y, ea, E, A, U, tb, Pb;
                    r = {
                        considerOmidZOrderOcclusions: null != (v = null == m ? void 0 : ks(m, Pr)) ? v : !1,
                        extraPings: null != (y = null == m ? void 0 : ks(m, Qr)) ? y : 0,
                        extrapolators: null != (C = null == m ? void 0 : ks(m, Rr)) ? C : !1,
                        rxlidarStatefulBeacons: null != (B = null == m ? void 0 : ks(m, Tr)) ? B : !1,
                        shouldIgnoreAdChoicesIcon: null != (G = null == m ? void 0 : ks(m, Vr)) ? G : !1,
                        dedicatedViewableAttributionPing: null != (J = null == m ? void 0 : ks(m, $r)) ? J : 0,
                        useReachIntegrationPolyfill: null != (Y = null == m ? void 0 : ks(m, Wr)) ?
                            Y : !1,
                        useReachIntegrationSharedStorage: null != (ea = null == m ? void 0 : ks(m, Xr)) ? ea : !0,
                        sendBrowserIdInsteadOfVPID: null != (E = null == m ? void 0 : ks(m, Ur)) ? E : !1,
                        waitForVideoPlaybackToAccumulateState: null != (A = null == m ? void 0 : ks(m, Zr)) ? A : !1,
                        considerOmidBufferingEvents: null != (U = null == m ? void 0 : ks(m, Or)) ? U : !1,
                        waitForImpressionColleague: null != (tb = null == m ? void 0 : ks(m, Yr)) ? tb : !1,
                        fetchLaterBeacons: null != (Pb = null == m ? void 0 : ks(m, Sr)) ? Pb : !1
                    };
                    k = Ln(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (null !== k) try {
                            var Da = is(k);
                            break a
                        } catch (Lf) {}
                        Da =
                        new hs
                    }
                    b(h, Da, r)
                })
            });
            c && this.W();
            a.ma && Vg(a.ma)
        }
    };
    ls.prototype.W = function() {
        var a, b;
        null == (a = this.xd) || null == (b = a.unsubscribe) || b.call(a);
        this.xd = void 0;
        var c;
        null == (c = this.yf) || c.call(this);
        this.yf = void 0
    };
    var ms = function(a) {
        kn.call(this, a)
    };
    w(ms, kn);
    var ns = function(a, b) {
        return Gl(a, 1, b)
    };
    ms.Aa = "contentads.bow.rendering.client.TurtleDoveReportingData";

    function os() {
        var a = Xb();
        return a ? Ib("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Va(a, b)
        }) || Va(a, "OMI/") && !Va(a, "XiaoMi/") ? !0 : Va(a, "Presto") && Va(a, "Linux") && !Va(a, "X11") && !Va(a, "Android") && !Va(a, "Mobi") : !1
    };
    var Zp = Object.freeze({
            Dg: 1E3,
            fe: .5,
            De: .3
        }),
        fq = Object.freeze([1, .75, Zp.fe, Zp.De, 0]),
        jo = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + vr,
        ps = function(a, b, c, d, e, f) {
            this.Ii = a;
            this.Nb = b;
            this.Kb = c;
            this.fc = d;
            this.Tc = e;
            this.Uc = f;
            this.name = "rxlidar";
            this.ei = new ed;
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.ae = new ed;
            this.Ka = new ed;
            this.controlledEvents.push(this.fc, this.Tc, this.Uc);
            this.subscribedEvents.push(this.Kb)
        };
    n = ps.prototype;
    n.start = function(a) {
        if (void 0 === this.me && a.M) {
            var b;
            if (null != (b = this.Nb)) var c = b;
            else {
                b = a.M;
                var d = null != (c = a.ma) ? c : null;
                c = {
                    uh: .01,
                    hi: zg(b.i, 36E5),
                    Oa: b.i.La(100).g(X(b.h, 1)),
                    ma: d
                }
            }
            this.Nb = c;
            a = a.M;
            this.me = qs(a, this.ae.g(X(a.h, 1)), this.Nb.uh, this.Nb.hi, this.Nb.Oa, this.Nb.ma, this.Ka.g(V(!1), X(a.h, 1)), this.fc, this.Tc, this.Uc).subscribe(this.ei)
        }
    };
    n.W = function() {
        this.ae.complete();
        this.Ka.complete();
        var a;
        null == (a = this.me) || a.unsubscribe();
        this.me = void 0
    };
    n.ne = function(a, b, c, d) {
        kl(b, tl, 2) && !vl(b, tl, 2).ie() || this.ae.next(Object.assign({}, this.Ii.zf.get(a), {
            metadata: b,
            experimentState: c,
            uk: a,
            Gb: d
        }))
    };
    n.Ib = function() {};
    n.handleEvent = function(a, b) {
        b === this.Kb && (this.Ka.next(!0), this.Ka.complete())
    };

    function qs(a, b, c, d, e, f, g, h, k, l) {
        var m = ur(a).g(P(function(p) {
                return !p
            })),
            r = new Qq(a, [new $q(a, fq), new Zq(a, e), new Wq(a, e), new rr(f, a, fq), new qr(f, a, e), new jr(a, e)]);
        return Zn(a, b, function(p, v) {
            var y = Cq(p, v.element),
                C = y.Od,
                B = y.hc,
                G = y.Xd,
                J = y.ff,
                Y = y.oh,
                ea = y.bb,
                E = y.Wh,
                A = y.ue,
                U = y.xe,
                tb = y.Qa,
                Pb = y.Ea,
                Da = y.lj,
                Lf = y.rb;
            y = y.Be;
            var Mf, bb = null != (Mf = El(ul(v.metadata), 3)) ? Mf : "";
            Mf = ns(new ms, atob(bb)).ib();
            bb = (new Z(v.experimentState)).P(p.h);
            var ae = bb.g(P(function(F) {
                    return F.shouldIgnoreAdChoicesIcon
                })),
                Ka = ea.g(mf(E),
                    P(function(F) {
                        var vb = t(F);
                        F = vb.next().value;
                        vb = vb.next().value;
                        (F = F || vb) || ((F = Va(Xb(), "CrKey") || Va(Xb(), "PlayStation") || Va(Xb(), "Roku") || os() || Va(Xb(), "Xbox")) || (F = Xb(), F = Va(F, "AppleTV") || Va(F, "Apple TV") || Va(F, "CFNetwork") || Va(F, "tvOS")), F || (F = Xb(), F = Va(F, "sdk_google_atv_x86") || Va(F, "Android TV")));
                        return F
                    }));
            E = new Lq(p, v, Y, ea, tb, ae);
            ae = bb.g(P(function(F) {
                return F.considerOmidZOrderOcclusions
            }));
            var rc, ib = null != (rc = Dl(ul(v.metadata))) ? rc : !1;
            rc = r.Ya(E, {
                bb: ea,
                Jg: ib,
                Qa: tb,
                ig: ae
            });
            var La = rc.ab,
                be = rc.Va;
            rc = be.Fe;
            ae = be.Ge;
            be = be.Ue;
            ib = (new Z(ib)).P(p.h);
            var Sb = Ar(p, U, Ka, m, Da, ib, E);
            Da = lq(p.h, p.i, La, Sb);
            Ka = yr(p.h, Da.za.Ye, Da.za.visible, Da.Te, Da.Hc);
            ib = Aq(p.h, p.i, Da.Hc, Da.za.Y, Da.za.visible);
            La = Pp(p.h, p.i, La, Sb);
            Sb = eq(p.i, p.h, La.za.Ye, La.za.visible, La.Te, La.Hc);
            var ai = {
                    ef: Yp(p.h, p.i, La.Hc, Sb.wc)
                },
                bi = bb.g(P(function(F) {
                    return F.extrapolators
                }), V(!1));
            La = Eo(p.h, bi, Object.assign({}, La.za, Sb, ai), Object.assign({}, Da.za, {
                ef: Fp(p, ib),
                xc: Fp(p, Ka.xc),
                Kc: Fp(p, Ka.Kc),
                wc: Fp(p, Ka.wc),
                mb: Ka.mb.g(P(function(F) {
                    return new Ep(p.i,
                        F)
                }))
            }));
            Ka = np(p, d.g(Uf("t")));
            ib = (null !== f && f.validate() ? f.Ui : ce).g(X(p.h, 1), Uf("u"));
            Ka = fe(Ka, ib);
            ib = wr(p, La.Y, Ka.g(S(function(F) {
                return null !== F
            })));
            Sb = rs(p, E, C);
            ai = ss(p, Ka, v.element);
            bi = Sb.dh.g(V({
                x: 0,
                y: 0
            }));
            var zs = bb.g(P(function(F) {
                    return F.rxlidarStatefulBeacons
                }), V(!1), T(), qg(function(F) {
                    xi = F
                }), X(p.h, 1)),
                jm = bb.g(P(function(F) {
                    return F.fetchLaterBeacons
                }), V(!1), T(), X(p.h, 1)),
                As = jm.g(P(function(F) {
                    return F && (new Jh(p)).H({
                        Df: !0
                    })
                })),
                km = A.g(P(function(F) {
                    return 40 === F || 41 === F
                })),
                Bs = bb.g(P(function(F) {
                        return F.waitForImpressionColleague
                    }),
                    V(!1), T(), X(p.h, 1));
            return Object.assign({}, {
                K: new Z(p.K),
                ld: new Z("lidar2"),
                cj: new Z("lidartos"),
                hh: new Z(vr),
                gh: new Z(7),
                Wd: new Z(p.validate() ? null : new Ee),
                lh: new Z(cj(p.document)),
                ta: new Z(lo),
                Ef: Ka,
                Cg: Ka,
                qk: ib,
                pe: g,
                kj: Bs,
                Gb: new Z(v.Gb),
                fc: new Z(h),
                Tc: new Z(k),
                Uc: new Z(l),
                nh: new Z(p.Lb ? 1 : void 0),
                ph: new Z(p.ih ? 1 : void 0),
                bb: ea,
                rb: Lf,
                af: new Z(Mf),
                Ub: Lf.g(S(function(F) {
                    return F
                }), P(function() {
                    return p.Ub.bind(p)
                })),
                Fe: rc.g(X(p.h, 1)),
                Ge: ae.g(X(p.h, 1)),
                Ah: bb.g(P(function(F) {
                    return F.extraPings
                })),
                Xf: zs,
                Vj: jm,
                Ag: As,
                Be: y,
                Uh: km,
                Lh: bb.g(P(function(F) {
                    return F.dedicatedViewableAttributionPing
                })),
                Bh: new Z(new Bg(p, new Nh(p))),
                Bg: new Z(xi && (new wi(p)).H({
                    wa: "GET"
                })),
                Xi: new Z(Number(v.experimentState.useReachIntegrationSharedStorage) << 0 + Number(v.experimentState.useReachIntegrationPolyfill) << 1 + Number(v.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                mh: v.element.g(P(function(F) {
                    return null !== F
                })),
                kd: Pb,
                dj: Pb,
                Xd: G.g(V([])),
                ff: J.g(V([])),
                Ih: G.g(P(function(F) {
                    return 0 < F.length ? !0 : null
                }), V(null), T()),
                hc: B.g(V([]),
                    X(p.h, 1)),
                Yj: bb,
                Od: C,
                jc: E.jc,
                ue: A.g(V(0), X(p.h, 1)),
                fi: Y,
                Qa: tb.g(V(0), X(p.h, 1)),
                Lc: km.g(P(function(F) {
                    return F ? Bo : ko
                })),
                ac: new Z(Co),
                xe: U,
                Yf: E.tc.g(Fo(p.h)),
                gf: E.gf
            }, La, {
                ad: R([La.ad, bi]).g(P(function(F) {
                    var vb = t(F);
                    F = vb.next().value;
                    vb = vb.next().value;
                    return kj(F, vb)
                }), T(ij))
            }, Sb, {
                Mc: Ki(p),
                Jh: ai,
                Ue: be,
                Bd: Da.za.Bd,
                jh: new Z(new vo)
            })
        }, io(a, c))
    }

    function rs(a, b, c) {
        var d = void 0 === d ? Ha : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            ah: new Z(d),
            Zg: So(a, b)
        }, Ro(a, b, c))
    }

    function ss(a, b, c) {
        return b.g(S(function(d) {
            return null !== d
        }), W(function() {
            return c
        }), P(function(d) {
            var e = Pn(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), P(function(d) {
            return !d
        }))
    };
    var ts = function(a) {
        var b = void 0 === b ? [] : b;
        var c = void 0 === c ? [a] : c;
        this.Kb = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.re = new Map
    };
    n = ts.prototype;
    n.start = function(a) {
        this.Za = a
    };
    n.W = function() {
        this.re.clear()
    };
    n.ne = function(a, b, c, d) {
        if (b = this.Za) c = new us(b, c, this.Kb, d), this.re.set(a, c)
    };
    n.Ib = function(a) {
        this.re.delete(a)
    };
    n.handleEvent = function() {};
    var us = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.Kb = c;
        this.Gg = function() {};
        this.Wf = [];
        this.Uf = "&avradf=1";
        this.Vf = Er([]);
        this.Ka = new ed;
        c = a.ma;
        var f = null !== c && (null == c ? void 0 : c.validate()),
            g, h = null == (g = a.M) ? void 0 : g.h;
        this.Ka.g(V(!b.waitForImpressionColleague), X(h, 1));
        this.Yi = f ? null == c ? void 0 : c.Tf.g(Af(1), Uf(!0), V(!1)) : (new Z(!0)).P(h);
        this.Gg = function(k, l) {
            e.Ka.next(!0);
            e.Ka.complete();
            R([e.Ka, e.Yi]).subscribe(function(m) {
                var r = t(m);
                m = r.next().value;
                r = r.next().value;
                if (!r) return ce;
                m && r &&
                    d(e.Kb, k, l);
                return !0
            })
        };
        this.qc(a.M)
    };
    us.prototype.qc = function(a) {
        var b = this;
        this.Bc = a.global.document;
        this.Wf.push(vs(this));
        var c = {};
        this.Vf = Er(this.Wf);
        this.Vf.then(function() {
            b.Uf = "&vis=" + sr(b.Bc) + "&uach=0&ms=0";
            c.paramString = b.Uf;
            c.view_type = "DELAYED_IMPRESSION";
            b.Gg(c, function() {})
        })
    };
    var vs = function(a) {
        return new Dr(function(b) {
            var c = tr(a.Bc);
            if (c)
                if (3 === sr(a.Bc)) {
                    var d = function() {
                        var e = a.Bc;
                        e.removeEventListener && e.removeEventListener(c, d, !1);
                        b(!0)
                    };
                    Oh(a.Bc, c, d)
                } else b(!0)
        })
    };

    function ws(a) {
        var b = Li(a);
        return b ? b.g(P(function(c) {
            var d;
            c = null == (d = xl(c).find(function(f) {
                return "Google Chrome" === El(f, 1)
            })) ? void 0 : El(d, 2);
            if (!c) return !1;
            var e;
            return 121 <= (null != (e = t(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) ? e : 0)
        })) : Ci.P(a.h)
    };
    var xs = function(a) {
        var b = void 0 === b ? [] : b;
        var c = void 0 === c ? [a] : c;
        this.Ki = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.Cc = new Map
    };
    n = xs.prototype;
    n.start = function(a) {
        a.M && (this.context = a.M)
    };
    n.W = function() {
        this.Cc.forEach(function(a) {
            return void a.W()
        });
        this.Cc.clear()
    };
    n.ne = function(a, b, c, d) {
        var e = this;
        if (!kl(b, fs, 1) || vl(b, fs, 1).ie()) {
            var f = this.context;
            if (f) {
                try {
                    var g = !!f.global.sharedStorage
                } catch (h) {
                    g = h
                }
                g && ws(f).g(Af(1)).subscribe(function(h) {
                    h && (h = new ys(f, b, e.Ki, c, d), e.Cc.set(a, h))
                })
            }
        }
    };
    n.Ib = function(a) {
        var b;
        null == (b = this.Cc.get(a)) || b.W();
        this.Cc.delete(a)
    };
    n.handleEvent = function() {};
    var ys = function(a, b, c, d, e) {
            var f = this;
            this.context = a;
            this.metadata = b;
            this.experimentState = d;
            e(c, {}, function(g) {
                g && Cs(f)
            })
        },
        Cs = function(a) {
            var b, c, d, e, f, g, h, k, l, m, r, p, v;
            Ba(function(y) {
                var C = a.experimentState,
                    B = null != (h = null == (b = vl(a.metadata, fs, 1)) ? void 0 : Cl(b)) ? h : "",
                    G = null == (c = vl(a.metadata, fs, 1)) ? void 0 : El(c, 1),
                    J = null != (k = null == (d = vl(a.metadata, fs, 1)) ? void 0 : null == (e = vl(d, ds, 4)) ? void 0 : e.ib()) ? k : void 0,
                    Y = null != (l = null == (f = vl(a.metadata, fs, 1)) ? void 0 : yl(f, 5)) ? l : void 0;
                var ea = null == (g = vl(a.metadata,
                    fs, 1)) ? void 0 : yl(g, 6);
                r = {
                    experimentState: C,
                    escapedQueryId: B,
                    clientsideModelFilename: G,
                    geoTargetMessage: J,
                    productionFilterIds: Y,
                    testFilterIds: null != (m = ea) ? m : void 0
                };
                p = btoa(JSON.stringify(r));
                v = a.context.xg[0];
                return sa(y, gj(a.context.document, v, p), 0)
            })
        };
    ys.prototype.W = function() {};
    var Ds = Sg(null !== "m202403130102".match(/^m\d{10}$/g) ? "m202403130102" : "current"),
        Es;
    a: {
        try {
            var Fs = new vh;
            Es = new Ug(Fs, "doubleclickbygoogle.com-omid", void 0, Ds);
            break a
        } catch (a) {}
        Es = void 0
    }
    var Gs = Es;
    (function(a, b) {
        var c = new Ir("impression"),
            d = new Ir("begin to render"),
            e = new Ir("unmeasurable"),
            f = new Ir("viewable"),
            g = new Ir("reach vpid"),
            h = new Gr(c, g, d, f, e),
            k = new ls,
            l = new ts(c.event);
        b = new ps(k, b, c.event, d.event, e.event, f.event);
        g = new xs(g.event);
        var m = new Jr(a, h, k, l, b, g);
        m.start();
        return {
            W: function() {
                return void m.W()
            },
            colleagues: {
                Uj: l,
                sk: b,
                pk: g
            }
        }
    })({
        M: new Bn(void 0, void 0, void 0, Ds),
        ma: Gs
    });
}).call(this);