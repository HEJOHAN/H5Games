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
            this.dh = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.dh
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
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    q("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
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
            a.pj = b.prototype
        },
        ra = function() {
            this.wc = !1;
            this.nb = null;
            this.fc = void 0;
            this.P = 1;
            this.Ma = this.pb = 0;
            this.pe = this.ha = null
        };
    ra.prototype.Va = function() {
        if (this.wc) throw new TypeError("f");
        this.wc = !0
    };
    ra.prototype.Cc = function(a) {
        this.fc = a
    };
    ra.prototype.Mc = function(a) {
        this.ha = {
            Pf: a,
            kg: !0
        };
        this.P = this.pb || this.Ma
    };
    ra.prototype.return = function(a) {
        this.ha = {
            return: a
        };
        this.P = this.Ma
    };
    var sa = function(a, b, c) {
        a.P = c;
        return {
            value: b
        }
    };
    ra.prototype.ub = function(a) {
        this.P = a
    };
    var ta = function(a, b, c, d) {
            d ? a.pe[d] = a.ha : a.pe = [a.ha];
            a.pb = b || 0;
            a.Ma = c || 0
        },
        ua = function(a, b, c) {
            c = a.pe.splice(c || 0)[0];
            (c = a.ha = a.ha || c) ? c.kg ? a.P = a.pb || a.Ma : void 0 != c.ub && a.Ma < c.ub ? (a.P = c.ub, a.ha = null) : a.P = a.Ma: a.P = b
        };
    ra.prototype.forIn = function(a) {
        return new va(a)
    };
    var va = function(a) {
            this.yg = [];
            for (var b in a) this.yg.push(b);
            this.yg.reverse()
        },
        wa = function(a) {
            this.o = new ra;
            this.Xi = a
        };
    wa.prototype.Cc = function(a) {
        this.o.Va();
        if (this.o.nb) return xa(this, this.o.nb.next, a, this.o.Cc);
        this.o.Cc(a);
        return ya(this)
    };
    var za = function(a, b) {
        a.o.Va();
        var c = a.o.nb;
        if (c) return xa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.o.return);
        a.o.return(b);
        return ya(a)
    };
    wa.prototype.Mc = function(a) {
        this.o.Va();
        if (this.o.nb) return xa(this, this.o.nb["throw"], a, this.o.Cc);
        this.o.Mc(a);
        return ya(this)
    };
    var xa = function(a, b, c, d) {
            try {
                var e = b.call(a.o.nb, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.o.wc = !1, e;
                var f = e.value
            } catch (g) {
                return a.o.nb = null, a.o.Mc(g), ya(a)
            }
            a.o.nb = null;
            d.call(a.o, f);
            return ya(a)
        },
        ya = function(a) {
            for (; a.o.P;) try {
                var b = a.Xi(a.o);
                if (b) return a.o.wc = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.o.fc = void 0, a.o.Mc(c)
            }
            a.o.wc = !1;
            if (a.o.ha) {
                b = a.o.ha;
                a.o.ha = null;
                if (b.kg) throw b.Pf;
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
        Aa = function(a) {
            this.next =
                function(b) {
                    return a.Cc(b)
                };
            this.throw = function(b) {
                return a.Mc(b)
            };
            this.return = function(b) {
                return za(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Ba = function(a) {
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
        Ca = function(a) {
            return Ba(new Aa(new wa(a)))
        },
        Da = function(a) {
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
            this.Za = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Cf = function(g) {
            if (null == this.Za) {
                this.Za = [];
                var h = this;
                this.Df(function() {
                    h.Kh()
                })
            }
            this.Za.push(g)
        };
        var d = da.setTimeout;
        b.prototype.Df = function(g) {
            d(g, 0)
        };
        b.prototype.Kh = function() {
            for (; this.Za && this.Za.length;) {
                var g = this.Za;
                this.Za = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.rh(l)
                    }
                }
            }
            this.Za = null
        };
        b.prototype.rh = function(g) {
            this.Df(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.ac = 0;
            this.Jc = void 0;
            this.Ub = [];
            this.ng = !1;
            var h = this.ge();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.ge = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.hj),
                reject: g(this.Ve)
            }
        };
        e.prototype.hj = function(g) {
            if (g === this) this.Ve(new TypeError("g"));
            else if (g instanceof e) this.kj(g);
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
                h ? this.gj(g) : this.Sf(g)
            }
        };
        e.prototype.gj = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Ve(k);
                return
            }
            "function" == typeof h ? this.lj(h, g) : this.Sf(g)
        };
        e.prototype.Ve = function(g) {
            this.Hg(2, g)
        };
        e.prototype.Sf = function(g) {
            this.Hg(1, g)
        };
        e.prototype.Hg = function(g, h) {
            if (0 != this.ac) throw Error("h`" + g + "`" + h + "`" + this.ac);
            this.ac = g;
            this.Jc = h;
            2 === this.ac && this.ij();
            this.Lh()
        };
        e.prototype.ij = function() {
            var g = this;
            d(function() {
                if (g.Gi()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.Jc)
                }
            }, 1)
        };
        e.prototype.Gi = function() {
            if (this.ng) return !1;
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
            g.reason = this.Jc;
            return k(g)
        };
        e.prototype.Lh = function() {
            if (null != this.Ub) {
                for (var g = 0; g < this.Ub.length; ++g) f.Cf(this.Ub[g]);
                this.Ub = null
            }
        };
        var f = new b;
        e.prototype.kj = function(g) {
            var h =
                this.ge();
            g.Zc(h.resolve, h.reject)
        };
        e.prototype.lj = function(g, h) {
            var k = this.ge();
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
            this.Zc(k(g, l), k(h, m));
            return r
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Zc = function(g, h) {
            function k() {
                switch (l.ac) {
                    case 1:
                        g(l.Jc);
                        break;
                    case 2:
                        h(l.Jc);
                        break;
                    default:
                        throw Error("i`" +
                            l.ac);
                }
            }
            var l = this;
            null == this.Ub ? f.Cf(k) : this.Ub.push(k);
            this.ng = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = t(g), m = l.next(); !m.done; m = l.next()) c(m.value).Zc(h, k)
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
                do p.push(void 0), v++, c(k.value).Zc(r(p.length - 1), m), k = h.next(); while (!k.done)
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
                this.tc = (g += Math.random() + 1).toString();
                if (k) {
                    k = t(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("j");
            d(k);
            if (!ja(k, f)) throw Error("k`" + k);
            k[f][this.tc] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ja(k, f) ? k[f][this.tc] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ja(k, f) && ja(k[f], this.tc)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ja(k, f) && ja(k[f], this.tc) ? delete k[f][this.tc] : !1
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
            l.V ? l.V.value = k : (l.V = {
                next: this[1],
                Ta: this[1].Ta,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.V), this[1].Ta.next = l.V, this[1].Ta = l.V, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.V && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.V.Ta.next = h.V.next, h.V.next.Ta = h.V.Ta,
                h.V.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ta = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).V
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).V) && h.value
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
                            V: r
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    V: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ta;
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
                return h.Ta = h.next = h.head = h
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
            this.Ea = new Map;
            if (c) {
                c =
                    t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.Ea.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Ea.set(c, c);
            this.size = this.Ea.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.Ea.delete(c);
            this.size = this.Ea.size;
            return c
        };
        b.prototype.clear = function() {
            this.Ea.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.Ea.has(c)
        };
        b.prototype.entries = function() {
            return this.Ea.entries()
        };
        b.prototype.values = function() {
            return this.Ea.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.Ea.forEach(function(f) {
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
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
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
    var Ia = this || self,
        Ja = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = Ia, e = 0; e < c.length; e++)
                    if (d = d[c[e]], null == d) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return null != a ? a : b
        },
        Ka = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        La = function(a) {
            var b = Ka(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ma = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Na = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.pj = b.prototype;
            a.prototype = new c;
            a.prototype.constructor =
                a;
            a.gk = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        Oa = function(a) {
            return a
        };
    var Ra = function() {
        this.Qg = 0
    };
    Ra.prototype.bc = function(a, b) {
        var c = this;
        return function() {
            var d = x.apply(0, arguments);
            c.Qg = a;
            return b.apply(null, u(d))
        }
    };
    var Sa = function() {
            var a = {};
            this.Ha = (a[3] = [], a[2] = [], a[1] = [], a);
            this.Ge = !1
        },
        Ua = function(a, b, c) {
            var d = Ta(a, c);
            a.Ha[c].push(b);
            d && 1 === a.Ha[c].length && a.flush()
        },
        Ta = function(a, b) {
            return Object.keys(a.Ha).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return 0 === a.Ha[c].length
            })
        };
    Sa.prototype.flush = function() {
        if (!this.Ge) {
            this.Ge = !0;
            try {
                for (; Object.values(this.Ha).some(function(a) {
                        return 0 < a.length
                    });) Va(this, 3), Va(this, 2), Va(this, 1)
            } catch (a) {
                throw Object.values(this.Ha).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.Ge = !1
            }
        }
    };
    var Va = function(a, b) {
        for (; Ta(a, b) && 0 < a.Ha[b].length;) a.Ha[b][0](), a.Ha[b].shift()
    };
    da.Object.defineProperties(Sa.prototype, {
        Dg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.Ha).some(function(a) {
                    return 0 < a.length
                })
            }
        }
    });
    var Wa = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };

    function Xa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Xa);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Na(Xa, Error);
    Xa.prototype.name = "CustomError";
    var Ya;

    function Za(a, b) {
        var c = Xa.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(Xa, this, d + a[e])
    }
    Na(Za, Xa);
    Za.prototype.name = "AssertionError";

    function $a(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Za("" + e, f || []);
    }
    var z = function(a, b, c) {
            a || $a("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        ab = function(a, b, c) {
            null == a && $a("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        bb = function(a, b) {
            throw new Za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        cb = function(a, b, c) {
            "number" !== typeof a && $a("Expected number but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        db = function(a, b, c) {
            "string" !== typeof a && $a("Expected string but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        eb = function(a, b, c) {
            "function" !== typeof a && $a("Expected function but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        fb = function(a, b, c) {
            Ma(a) || $a("Expected object but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        hb = function(a, b, c) {
            Array.isArray(a) || $a("Expected array but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        jb = function(a, b, c, d) {
            a instanceof b || $a("Expected instanceof %s but got %s.", [ib(b), ib(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function ib(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var kb;
    var mb = function(a, b) {
        if (b !== lb) throw Error("n");
        this.xg = a
    };
    mb.prototype.toString = function() {
        return this.xg + ""
    };
    var lb = {},
        nb = function(a) {
            if (void 0 === kb) {
                var b = null;
                var c = Ia.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Oa,
                        createScript: Oa,
                        createScriptURL: Oa
                    })
                } catch (d) {
                    Ia.console && Ia.console.error(d.message)
                }
                kb = b
            }
            a = (b = kb) ? b.createScriptURL(a) : a;
            return new mb(a, lb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var pb = ha([""]),
        qb = ia(["\x00"], ["\\0"]),
        rb = ia(["\n"], ["\\n"]),
        sb = ia(["\x00"], ["\\u0000"]),
        tb = ha([""]),
        ub = ia(["\x00"], ["\\0"]),
        vb = ia(["\n"], ["\\n"]),
        wb = ia(["\x00"], ["\\u0000"]);

    function xb(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function yb(a) {
        return -1 === a.toString().indexOf("`")
    }
    var zb = yb(function(a) {
            return a(pb)
        }) || yb(function(a) {
            return a(qb)
        }) || yb(function(a) {
            return a(rb)
        }) || yb(function(a) {
            return a(sb)
        }),
        Ab = xb(tb) && xb(ub) && xb(vb) && xb(wb);
    var Db = function(a) {
        if (Bb !== Bb) throw Error("p");
        this.Wi = a
    };
    Db.prototype.toString = function() {
        return this.Wi.toString()
    };
    var Bb = {};
    new Db("about:invalid#zClosurez");
    new Db("about:blank");
    new Db("about:blank");
    new Db("about:invalid#zClosurez");
    var Fb = [],
        Gb = function(a) {
            console.warn("q`" + a)
        }; - 1 === Fb.indexOf(Gb) && Fb.push(Gb);
    var Hb = Array.prototype.forEach ? function(a, b) {
            z(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ib = Array.prototype.map ? function(a, b) {
            z(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Jb = Array.prototype.some ? function(a, b) {
            z(null !=
                a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Kb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Lb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Mb(a, b, c) {
        if (!La(a) || !La(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Nb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Nb(a, b) {
        return a === b
    }

    function Ob(a, b) {
        return Kb.apply([], Ib(a, b))
    };
    var Pb = {},
        Qb = function() {
            if (Pb !== Pb) throw Error("r");
            this.Vi = ""
        };
    Qb.prototype.toString = function() {
        return this.Vi.toString()
    };
    new Qb;
    var Rb = {},
        Sb = function() {
            if (Rb !== Rb) throw Error("s");
            this.Ui = ""
        };
    Sb.prototype.toString = function() {
        return this.Ui.toString()
    };
    new Sb;
    var Tb = Ja(1, !0),
        Ub = Ja(610401301, !1);
    Ja(899588437, !1);
    var Vb = Ja(188588736, !0);
    Ja(2147483644, !1);
    Ja(2147483645, !0);
    Ja(2147483646, Tb);
    Ja(2147483647, !0);

    function Wb() {
        var a = Ia.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Xb, Zb = Ia.navigator;
    Xb = Zb ? Zb.userAgentData || null : null;

    function $b(a) {
        return Ub ? Xb ? Xb.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function D(a) {
        return -1 != Wb().indexOf(a)
    };

    function bc() {
        return Ub ? !!Xb && 0 < Xb.brands.length : !1
    }

    function cc() {
        return bc() ? !1 : D("Opera")
    }

    function dc() {
        return bc() ? !1 : D("Trident") || D("MSIE")
    }

    function ec() {
        return D("Firefox") || D("FxiOS")
    }

    function fc() {
        return D("Safari") && !(gc() || (bc() ? 0 : D("Coast")) || cc() || (bc() ? 0 : D("Edge")) || (bc() ? $b("Microsoft Edge") : D("Edg/")) || (bc() ? $b("Opera") : D("OPR")) || ec() || D("Silk") || D("Android"))
    }

    function gc() {
        return bc() ? $b("Chromium") : (D("Chrome") || D("CriOS")) && !(bc() ? 0 : D("Edge")) || D("Silk")
    }

    function hc() {
        return D("Android") && !(gc() || ec() || cc() || D("Silk"))
    }

    function ic() {
        var a = Wb();
        if (dc()) {
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

    function jc() {
        if (bc()) {
            var a = Xb.brands.find(function(b) {
                return "Internet Explorer" === b.brand
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = ic();
            if ("" === a) return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    };
    var kc = {},
        lc = function() {
            var a = Ia.trustedTypes && Ia.trustedTypes.emptyHTML || "";
            if (kc !== kc) throw Error("t");
            this.Ti = a
        };
    lc.prototype.toString = function() {
        return this.Ti.toString()
    };
    new lc;
    var mc = function(a, b) {
        this.name = a;
        this.value = b
    };
    mc.prototype.toString = function() {
        return this.name
    };
    var nc = new mc("OFF", Infinity),
        oc = new mc("WARNING", 900),
        pc = new mc("INFO", 800),
        qc = new mc("CONFIG", 700),
        rc = function() {
            this.ad = 0;
            this.clear()
        },
        sc;
    rc.prototype.clear = function() {
        this.F = Array(this.ad);
        this.If = -1;
        this.lg = !1
    };
    var tc = function(a, b, c) {
        this.reset(a || nc, b, c, void 0, void 0)
    };
    tc.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Ci = b
    };
    tc.prototype.getMessage = function() {
        return this.Ci
    };
    var uc = function(a, b) {
            this.level = null;
            this.Vh = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.ti = {
                Na: function() {
                    return a
                }
            }
        },
        vc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return vc(a.parent);
            bb("Root logger has no level set.");
            return nc
        },
        wc = function(a, b) {
            for (; a;) a.Vh.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        xc = function() {
            this.entries = {};
            var a = new uc("");
            a.level = qc;
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
        Bc = function() {
            yc || (yc = new xc);
            return yc
        },
        Dc = function(a) {
            var b = Cc;
            if (b) {
                var c = a,
                    d = oc;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? vc(zc(Bc(), b.Na())) : nc;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || nc;
                    a = zc(Bc(), b.Na());
                    "function" === typeof c && (c = c());
                    sc || (sc = new rc);
                    e = sc;
                    b = b.Na();
                    if (0 < e.ad) {
                        var f = (e.If + 1) % e.ad;
                        e.If = f;
                        e.lg ? (e = e.F[f], e.reset(d, c, b), b = e) : (e.lg = f == e.ad - 1, b = e.F[f] = new tc(d, c, b))
                    } else b = new tc(d,
                        c, b);
                    wc(a, b)
                }
            }
        };
    var Ec = function() {
        this.names = new Map
    };
    Ec.prototype.Na = function(a) {
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
    var Fc = !1,
        Gc = !1,
        Hc = {
            set cc(a) {
                this.Zi || (a ? console.warn("u`" + Error().stack) : Fc && console.log("v"));
                Fc = a
            },
            get cc() {
                return Fc
            },
            set Tg(a) {
                this.Zi || (a ? console.warn("w`" + Error().stack) : Gc && console.log("x"));
                Gc = a
            },
            get Tg() {
                return Gc
            }
        };

    function Ic(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var Jc = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (Hc.cc) throw a;
            Ic(a)
        },
        complete: function() {}
    };

    function Kc(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        return a.prototype.constructor = a
    };
    var Lc = Kc(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });

    function Mc(a) {
        return "function" === typeof a
    };
    var H = function(a) {
        this.ci = a;
        this.closed = !1;
        this.Ib = this.Hb = this.Xa = null
    };
    n = H.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Xa,
                b;
            if (a) this.Xa = null, a.remove(this);
            else if (b = this.Hb) {
                this.Hb = null;
                for (var c = t(b), d = c.next(); !d.done; d = c.next()) d.value.remove(this)
            }
            c = this.ci;
            if (Mc(c)) try {
                c()
            } catch (g) {
                var e = g instanceof Lc ? g.errors : [g]
            }
            var f = this.Ib;
            this.Ib = null;
            if (f)
                for (c = t(f), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    try {
                        "function" === typeof d ? d() : d.unsubscribe()
                    } catch (g) {
                        d = void 0, e = null != (d = e) ? d : [], g instanceof Lc ? e = [].concat(u(e), u(g.errors)) : e.push(g)
                    }
                }
            if (e) throw new Lc(e);
        }
    };
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed) "function" === typeof a ? a() : a.unsubscribe();
            else {
                if (a instanceof H) {
                    if (a.closed || a.gh(this)) return;
                    a.fh(this)
                }
                var b;
                this.Ib = null != (b = this.Ib) ? b : [];
                this.Ib.push(a)
            }
    };
    n.gh = function(a) {
        var b;
        return this.Xa === a || (null == (b = this.Hb) ? void 0 : b.includes(a)) || !1
    };
    n.fh = function(a) {
        var b = this.Xa,
            c;
        b ? (this.Hb = [b, a], this.Xa = null) : (c = this.Hb) ? c.push(a) : this.Xa = a
    };
    n.hh = function(a) {
        var b = this.Xa,
            c;
        if (b) b === a && (this.Xa = null);
        else if (c = this.Hb) a = c.indexOf(a), 0 <= a && c.splice(a, 1)
    };
    n.remove = function(a) {
        var b = this.Ib;
        if (b) {
            var c = b.indexOf(a);
            0 <= c && b.splice(c, 1)
        }
        a instanceof H && a.hh(this)
    };
    var Nc = new H;
    Nc.closed = !0;
    H.EMPTY = Nc;

    function Oc(a) {
        return a instanceof H || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    };
    var I = function(a, b, c) {
        H.call(this);
        this.df = null;
        this.G = this.Wa = this.cf = !1;
        switch (arguments.length) {
            case 0:
                this.destination = Jc;
                break;
            case 1:
                if (!a) {
                    this.destination = Jc;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof I ? (this.Wa = a.Wa, this.destination = a, a.add(this)) : (this.Wa = !0, this.destination = new Pc(this, a));
                    break
                }
            default:
                this.Wa = !0, this.destination = new Pc(this, a, b, c)
        }
    };
    w(I, H);
    I.EMPTY = H.EMPTY;
    I.create = function(a, b, c) {
        a = new I(a, b, c);
        a.Wa = !1;
        return a
    };
    n = I.prototype;
    n.next = function(a) {
        this.G || this.s(a)
    };
    n.error = function(a) {
        this.G || (this.G = !0, this.X(a))
    };
    n.complete = function() {
        this.G || (this.G = !0, this.D())
    };
    n.unsubscribe = function() {
        this.closed || (this.G = !0, H.prototype.unsubscribe.call(this))
    };
    n.s = function(a) {
        this.destination.next(a)
    };
    n.X = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.D = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var Pc = function(a, b, c, d) {
        I.call(this);
        this.Nd = a;
        if (Mc(b)) var e = b;
        else if (b && (e = b.next, c = b.error, d = b.complete, b !== Jc)) {
            if (Hc.Tg) {
                var f = Object.create(b);
                f.unsubscribe = this.unsubscribe.bind(this)
            } else f = b;
            e = e && e.bind(f);
            c = c && c.bind(f);
            d = d && d.bind(f);
            Oc(b) && b.add(this.unsubscribe.bind(this))
        }
        this.s = e;
        this.X = c;
        this.D = d
    };
    w(Pc, I);
    Pc.EMPTY = I.EMPTY;
    Pc.create = I.create;
    n = Pc.prototype;
    n.next = function(a) {
        if (!this.G && this.s) try {
            this.s(a)
        } catch (b) {
            this.Vc(b)
        }
    };
    n.error = function(a) {
        if (!this.G)
            if (this.X) {
                try {
                    this.X(a)
                } catch (b) {
                    this.Vc(b);
                    return
                }
                this.unsubscribe()
            } else this.Vc(a)
    };
    n.Vc = function(a) {
        this.unsubscribe();
        if (Hc.cc) {
            var b = this.Nd;
            if (null == b ? 0 : b.Wa) b.df = a, b.cf = !0;
            else throw a;
        } else Ic(a)
    };
    n.complete = function() {
        if (!this.G) {
            if (this.D) try {
                this.D()
            } catch (a) {
                this.Vc(a);
                return
            }
            this.unsubscribe()
        }
    };
    n.unsubscribe = function() {
        if (!this.closed) {
            var a = this.Nd;
            this.Nd = null;
            a.unsubscribe();
            I.prototype.unsubscribe.call(this)
        }
    };
    var Qc = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function Rc(a) {
        return a
    };

    function K() {
        return Sc(x.apply(0, arguments))
    }

    function Sc(a) {
        return 0 === a.length ? Rc : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function Tc(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var Uc = function(a) {
        I.call(this);
        this.destination = a
    };
    w(Uc, I);
    Uc.EMPTY = I.EMPTY;
    Uc.create = I.create;
    var L = function(a) {
        a && (this.ga = a)
    };
    n = L.prototype;
    n.Rb = function(a) {
        var b = new L;
        b.source = this;
        b.operator = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof I || Tc(a) && Oc(a)) break a;
                if (Tc(a)) {
                    a = new Uc(a);
                    break a
                }
            }
            a = a || b || c ? new I(a, b, c) : new I(Jc)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || Hc.cc && !a.Wa ? this.ga(a) : this.Td(a));
        if (Hc.cc && a.Wa && (a.Wa = !1, a.cf)) throw a.df;
        return a
    };
    n.Td = function(a) {
        try {
            return this.ga(a)
        } catch (e) {
            if (Hc.cc) a.cf = !0, a.df = e;
            else {
                var b;
                a: {
                    for (b = a; b;) {
                        var c = b.destination,
                            d = b.G;
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
        b = Vc(b);
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
    n.ga = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    L.prototype[Qc] = function() {
        return this
    };
    L.prototype.g = function() {
        var a = x.apply(0, arguments);
        return 0 === a.length ? this : Sc(a)(this)
    };
    L.create = function(a) {
        return new L(a)
    };

    function Vc(a) {
        a || (a = Promise);
        if (!a) throw Error("y");
        return a
    };
    var Wc = function(a, b) {
        H.call(this);
        this.Kg = a;
        this.bf = b;
        this.closed = !1
    };
    w(Wc, H);
    Wc.EMPTY = H.EMPTY;
    Wc.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Kg,
                b = a.Ra;
            this.Kg = null;
            !b || 0 === b.length || a.G || a.closed || (a = b.indexOf(this.bf), -1 !== a && b.splice(a, 1))
        }
    };
    var Xc = Kc(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    var M = function() {
        this.Ra = [];
        this.rc = this.G = this.closed = !1;
        this.Ed = null
    };
    w(M, L);
    n = M.prototype;
    n.Rb = function(a) {
        var b = new Yc(this, this);
        b.operator = a;
        return b
    };
    n.next = function(a) {
        if (this.closed) throw new Xc;
        if (!this.G) {
            var b = this.Ra,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    n.error = function(a) {
        if (this.closed) throw new Xc;
        this.rc = !0;
        this.Ed = a;
        this.G = !0;
        var b = this.Ra,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.Ra.length = 0
    };
    n.complete = function() {
        if (this.closed) throw new Xc;
        this.G = !0;
        var a = this.Ra,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.Ra.length = 0
    };
    n.unsubscribe = function() {
        this.closed = this.G = !0;
        this.Ra = null
    };
    n.Td = function(a) {
        if (this.closed) throw new Xc;
        return L.prototype.Td.call(this, a)
    };
    n.ga = function(a) {
        if (this.closed) throw new Xc;
        if (this.rc) return a.error(this.Ed), H.EMPTY;
        if (this.G) return a.complete(), H.EMPTY;
        this.Ra.push(a);
        return new Wc(this, a)
    };
    n.T = function() {
        var a = new L;
        a.source = this;
        return a
    };
    M.create = function(a, b) {
        return new Yc(a, b)
    };
    var Yc = function(a, b) {
        M.call(this);
        this.destination = a;
        this.source = b
    };
    w(Yc, M);
    Yc.create = M.create;
    Yc.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    Yc.prototype.error = function(a) {
        this.destination && this.destination.error(a)
    };
    Yc.prototype.complete = function() {
        this.destination && this.destination.complete()
    };
    Yc.prototype.ga = function(a) {
        return this.source ? this.source.subscribe(a) : H.EMPTY
    };
    var Zc = function(a) {
        M.call(this);
        this.Ud = a
    };
    w(Zc, M);
    Zc.create = M.create;
    Zc.prototype.ga = function(a) {
        var b = M.prototype.ga.call(this, a);
        b && !b.closed && a.next(this.Ud);
        return b
    };
    Zc.prototype.getValue = function() {
        if (this.rc) throw this.Ed;
        if (this.closed) throw new Xc;
        return this.Ud
    };
    Zc.prototype.next = function(a) {
        M.prototype.next.call(this, this.Ud = a)
    };
    da.Object.defineProperties(Zc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.getValue()
            }
        }
    });
    var $c = new L(function(a) {
        return a.complete()
    });

    function ad(a, b) {
        return new L(function(c) {
            var d = new H,
                e = 0;
            d.add(b.C(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.C()))
            }));
            return d
        })
    };
    var bd = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function cd(a, b) {
        return b ? ad(a, b) : new L(bd(a))
    };

    function dd(a) {
        return a && "function" === typeof a.C
    };

    function N() {
        var a = x.apply(0, arguments),
            b = a[a.length - 1];
        return dd(b) ? (a.pop(), ad(a, b)) : cd(a)
    };

    function ed(a) {
        return new L(function(b) {
            return b.error("function" === typeof a ? a() : a)
        })
    };
    var fd = {
        now: function() {
            return (fd.Eh || Date).now()
        },
        Eh: void 0
    };
    var gd = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? fd : c;
        M.call(this);
        this.tj = c;
        this.Sc = [];
        this.zf = !1;
        this.uf = 1 > a ? 1 : a;
        this.mh = 1 > b ? 1 : b;
        Infinity === b ? (this.zf = !0, this.next = this.Di) : this.next = this.Fi
    };
    w(gd, M);
    gd.create = M.create;
    n = gd.prototype;
    n.Di = function(a) {
        var b = this.Sc;
        b.push(a);
        b.length > this.uf && b.shift();
        M.prototype.next.call(this, a)
    };
    n.Fi = function(a) {
        this.Sc.push({
            time: this.xf(),
            value: a
        });
        this.Af();
        M.prototype.next.call(this, a)
    };
    n.ga = function(a) {
        var b = this.zf,
            c = b ? this.Sc : this.Af(),
            d = c.length;
        if (this.closed) throw new Xc;
        if (this.G || this.rc) var e = H.EMPTY;
        else this.Ra.push(a), e = new Wc(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.rc ? a.error(this.Ed) : this.G && a.complete();
        return e
    };
    n.xf = function() {
        var a = this.tj;
        return a ? a.now() : fd.now()
    };
    n.Af = function() {
        for (var a = this.xf(), b = this.uf, c = this.mh, d = this.Sc, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var id = function(a, b) {
        b = void 0 === b ? hd : b;
        this.eh = a;
        this.now = b
    };
    id.prototype.C = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.eh(this, a)).C(c, b)
    };
    var hd = fd.now;
    var jd = Kc(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });

    function kd(a) {
        return new Promise(function(b, c) {
            var d = new H;
            d.add(a.subscribe({
                next: function(e) {
                    b(e);
                    d.unsubscribe()
                },
                error: c,
                complete: function() {
                    c(new jd)
                }
            }))
        })
    };
    var ld = function(a, b, c, d, e) {
        I.call(this, a);
        this.Oi = e;
        b && (this.s = function(f) {
            try {
                null == b || b(f)
            } catch (g) {
                this.error(g)
            }
        });
        c && (this.X = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        });
        d && (this.D = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        })
    };
    w(ld, I);
    ld.EMPTY = I.EMPTY;
    ld.create = I.create;
    ld.prototype.unsubscribe = function() {
        var a;
        this.closed || null != (a = this.Oi) && a.call(this);
        I.prototype.unsubscribe.call(this)
    };

    function O(a, b) {
        if (a && "function" === typeof a.Rb) return a.Rb(b);
        throw new TypeError("z");
    };

    function md() {
        return function(a) {
            return O(a, function(b) {
                var c = this,
                    d = null;
                b.hc++;
                var e = new ld(c, void 0, void 0, void 0, function() {
                        if (!b || 0 >= b.hc || 0 < --b.hc) d = null;
                        else {
                            var g = b.Gb,
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
    var nd = function(a, b) {
        this.source = a;
        this.Lg = b;
        this.hc = 0;
        this.Tc = !1
    };
    w(nd, L);
    nd.create = L.create;
    nd.prototype.ga = function(a) {
        return this.md().subscribe(a)
    };
    nd.prototype.md = function() {
        var a = this.Uc;
        if (!a || a.G) this.Uc = this.Lg();
        return this.Uc
    };
    nd.prototype.connect = function() {
        var a = this.Gb;
        a || (this.Tc = !1, a = this.Gb = new H, a.add(this.source.subscribe(new od(this.md(), this))), a.closed && (this.Gb = null, a = H.EMPTY));
        return a
    };
    nd.prototype.Ag = function() {
        return md()(this)
    };
    var pd, qd = nd.prototype;
    pd = {
        operator: {
            value: null
        },
        hc: {
            value: 0,
            writable: !0
        },
        Uc: {
            value: null,
            writable: !0
        },
        Gb: {
            value: null,
            writable: !0
        },
        ga: {
            value: qd.ga
        },
        Tc: {
            value: qd.Tc,
            writable: !0
        },
        md: {
            value: qd.md
        },
        connect: {
            value: qd.connect
        },
        Ag: {
            value: qd.Ag
        }
    };
    var od = function(a, b) {
        I.call(this);
        this.destination = a;
        this.de = b
    };
    w(od, I);
    od.EMPTY = I.EMPTY;
    od.create = I.create;
    od.prototype.X = function(a) {
        this.Sd();
        I.prototype.X.call(this, a)
    };
    od.prototype.D = function() {
        this.de.Tc = !0;
        this.Sd();
        I.prototype.D.call(this)
    };
    od.prototype.Sd = function() {
        var a = this.de;
        if (a) {
            this.de = null;
            var b = a.Gb;
            a.hc = 0;
            a.Uc = null;
            a.Gb = null;
            b && b.unsubscribe()
        }
    };
    od.prototype.unsubscribe = function() {
        this.closed || (this.Sd(), I.prototype.unsubscribe.call(this))
    };

    function P(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("A");
            return O(b, new rd(a))
        }
    }
    var rd = function(a) {
        this.R = a;
        this.pa = void 0
    };
    rd.prototype.call = function(a, b) {
        return b.subscribe(new sd(a, this.R, this.pa))
    };
    var sd = function(a, b, c) {
        I.call(this, a);
        this.R = b;
        this.count = 0;
        this.pa = c || this
    };
    w(sd, I);
    sd.EMPTY = I.EMPTY;
    sd.create = I.create;
    sd.prototype.s = function(a) {
        try {
            var b = this.R.call(this.pa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var td = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };
    var ud = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var vd = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function wd(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function xd(a) {
        return function(b) {
            yd(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function yd(a, b) {
        var c, d, e, f, g, h;
        return Ca(function(k) {
            switch (k.P) {
                case 1:
                    k.pb = 2;
                    k.Ma = 3;
                    var l = a[Symbol.asyncIterator];
                    f = void 0 !== l ? l.call(a) : new Da(t(a));
                case 5:
                    return sa(k, f.next(), 8);
                case 8:
                    d = k.fc;
                    if (d.done) {
                        k.ub(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.ub(5);
                    break;
                case 3:
                    ta(k);
                    k.pb = 0;
                    k.Ma = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.ub(9);
                        break
                    }
                    return sa(k, e.call(f), 9);
                case 9:
                    ta(k, 0, 0, 1);
                    if (c) throw c.error;
                    ua(k, 10, 1);
                    break;
                case 10:
                    ua(k, 4);
                    break;
                case 2:
                    k.pb = 0;
                    l = k.ha.Pf;
                    k.ha = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.ub(3);
                    break;
                case 4:
                    b.complete(),
                        k.P = 0
            }
        })
    };
    var zd = function(a) {
        return function(b) {
            var c = a[ud]();
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
    var Ad = function(a) {
        return function(b) {
            var c = a[Qc]();
            if ("function" !== typeof c.subscribe) throw new TypeError("B");
            return c.subscribe(b)
        }
    };
    var Bd = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, Ic);
            return b
        }
    };
    var Cd = function(a) {
        if (a && "function" === typeof a[Qc]) return Ad(a);
        if (vd(a)) return bd(a);
        if (wd(a)) return Bd(a);
        if (a && "function" === typeof a[ud]) return zd(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return xd(a);
        throw new TypeError("C`" + (null !== a && "object" === typeof a ? "an invalid object" : "'" + a + "'"));
    };
    var Dd = function(a) {
        I.call(this);
        this.parent = a
    };
    w(Dd, I);
    Dd.EMPTY = I.EMPTY;
    Dd.create = I.create;
    Dd.prototype.s = function(a) {
        this.parent.Ga(a)
    };
    Dd.prototype.X = function(a) {
        this.parent.jb(a);
        this.unsubscribe()
    };
    Dd.prototype.D = function() {
        this.parent.ba();
        this.unsubscribe()
    };
    var Ed = function(a, b, c) {
        I.call(this);
        this.parent = a;
        this.wg = b;
        this.Si = c
    };
    w(Ed, I);
    Ed.EMPTY = I.EMPTY;
    Ed.create = I.create;
    Ed.prototype.s = function(a) {
        this.parent.Ga(this.wg, a, this.Si, this)
    };
    Ed.prototype.X = function(a) {
        this.parent.jb(a);
        this.unsubscribe()
    };
    Ed.prototype.D = function() {
        this.parent.ba(this);
        this.unsubscribe()
    };
    var Fd = function() {
        I.apply(this, arguments)
    };
    w(Fd, I);
    Fd.EMPTY = I.EMPTY;
    Fd.create = I.create;
    Fd.prototype.Ga = function(a) {
        this.destination.next(a)
    };
    Fd.prototype.jb = function(a) {
        this.destination.error(a)
    };
    Fd.prototype.ba = function() {
        this.destination.complete()
    };
    var Gd = function() {
        I.apply(this, arguments)
    };
    w(Gd, I);
    Gd.EMPTY = I.EMPTY;
    Gd.create = I.create;
    Gd.prototype.Ga = function(a, b) {
        this.destination.next(b)
    };
    Gd.prototype.jb = function(a) {
        this.destination.error(a)
    };
    Gd.prototype.ba = function() {
        this.destination.complete()
    };

    function Hd(a, b) {
        if (!b.closed) return a instanceof L ? a.subscribe(b) : Cd(a)(b)
    };
    var Id = {};

    function Q() {
        var a = x.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        dd(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            td(e) && (a = e);
            null !== e && "object" === typeof e && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return O(cd(a, c), new Jd(b, d))
    }
    var Jd = function(a, b) {
        this.Bd = a;
        this.keys = b
    };
    Jd.prototype.call = function(a, b) {
        return b.subscribe(new Kd(a, this.Bd, this.keys))
    };
    var Kd = function(a, b, c) {
        Gd.call(this, a);
        this.Bd = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.kb = []
    };
    w(Kd, Gd);
    Kd.EMPTY = Gd.EMPTY;
    Kd.create = Gd.create;
    n = Kd.prototype;
    n.s = function(a) {
        this.values.push(Id);
        this.kb.push(a)
    };
    n.D = function() {
        var a = this.kb,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.Cb = this.active = b;
            for (var c = 0; c < b; c++) this.add(Hd(a[c], new Ed(this, null, c)))
        }
    };
    n.ba = function() {
        0 === --this.active && this.destination.complete()
    };
    n.Ga = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.Cb ? e === Id ? --this.Cb : this.Cb : 0;
        d[c] = b;
        0 === e && (this.Bd ? this.jh(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    n.jh = function(a) {
        try {
            var b = this.Bd.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function Ld(a, b) {
        if (!a) throw Error("D");
        return new L(function(c) {
            var d = new H;
            d.add(b.C(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.C(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.C())
                    })
                }))
            }));
            return d
        })
    };

    function Md(a, b) {
        if (!a) throw Error("D");
        return new L(function(c) {
            var d = new H,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.C(function() {
                e = a[ud]();
                d.add(b.C(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (k) {
                            c.error(k);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.C())
                    }
                }))
            }));
            return d
        })
    };

    function Nd(a, b) {
        return new L(function(c) {
            var d = new H;
            d.add(b.C(function() {
                var e = a[Qc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.C(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.C(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.C(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Od(a, b) {
        return new L(function(c) {
            var d = new H;
            d.add(b.C(function() {
                return a.then(function(e) {
                    d.add(b.C(function() {
                        c.next(e);
                        d.add(b.C(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.C(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function Pd(a) {
        var b = Qd;
        if (null != a) {
            if (a && "function" === typeof a[Qc]) return Nd(a, b);
            if (wd(a)) return Od(a, b);
            if (vd(a)) return ad(a, b);
            if (a && "function" === typeof a[ud] || "string" === typeof a) return Md(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return Ld(a, b)
        }
        throw new TypeError("E`" + (null !== a && typeof a || a));
    };

    function Rd(a) {
        return a instanceof L ? a : new L(Cd(a))
    };

    function Sd(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(Sd(function(e, f) {
                return Rd(a(e, f)).g(P(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return O(d, new Td(a, c))
        }
    }
    var Td = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.R = a;
        this.ce = b
    };
    Td.prototype.call = function(a, b) {
        return b.subscribe(new Ud(a, this.R, this.ce))
    };
    var Ud = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        Fd.call(this, a);
        this.destination = a;
        this.R = b;
        this.ce = c;
        this.ag = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    w(Ud, Fd);
    Ud.EMPTY = Fd.EMPTY;
    Ud.create = Fd.create;
    Ud.prototype.s = function(a) {
        if (this.active < this.ce) {
            var b = this.index++;
            try {
                var c = this.R(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new Dd(this);
            this.destination.add(a);
            Hd(c, a)
        } else this.buffer.push(a)
    };
    Ud.prototype.D = function() {
        this.ag = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    Ud.prototype.Ga = function(a) {
        this.destination.next(a)
    };
    Ud.prototype.ba = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.s(a.shift()) : 0 === this.active && this.ag && this.destination.complete()
    };

    function Vd(a) {
        a = void 0 === a ? Infinity : a;
        return Sd(Rc, a)
    };

    function Wd() {
        return Vd(1)(N.apply(null, u(x.apply(0, arguments))))
    };

    function Xd(a, b, c) {
        if (Mc(c)) {
            var d = c;
            c = void 0
        }
        return d ? Xd(a, b, c).g(P(function(e) {
            return td(e) ? d.apply(null, u(e)) : d(e)
        })) : new L(function(e) {
            Yd(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function Yd(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Ji && "function" === typeof a.Ii) a.Ji(b, c), f = function() {
            return a.Ii(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) Yd(a[g], b,
                c, d, e);
        else throw new TypeError("F");
        d.add(f)
    };
    var Zd = function() {
        H.call(this)
    };
    w(Zd, H);
    Zd.EMPTY = H.EMPTY;
    Zd.prototype.C = function() {
        return this
    };
    var $d = function(a, b) {
        return setInterval.apply(null, [a, b].concat(u(x.apply(2, arguments))))
    };
    var ae = function(a, b) {
        H.call(this);
        this.scheduler = a;
        this.Jd = b;
        this.pending = !1
    };
    w(ae, Zd);
    ae.EMPTY = Zd.EMPTY;
    n = ae.prototype;
    n.C = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        null != a && (this.id = this.Gc(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Ic(c, this.id, b);
        return this
    };
    n.Ic = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return $d(a.flush.bind(a, this), c)
    };
    n.Gc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null != c && this.delay === c && !1 === this.pending) return b;
        clearInterval(b)
    };
    n.execute = function(a, b) {
        if (this.closed) return Error("G");
        this.pending = !1;
        if (a = this.vf(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.Gc(this.scheduler, this.id, null))
    };
    n.vf = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.Jd(a)
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
            this.state = this.Jd = null;
            this.pending = !1;
            this.scheduler = null; - 1 !== d && c.splice(d, 1);
            null != a && (this.id = this.Gc(b, a, null));
            this.delay = null;
            Zd.prototype.unsubscribe.call(this)
        }
    };
    var be = function(a, b) {
        b = void 0 === b ? hd : b;
        id.call(this, a, b);
        this.actions = [];
        this.active = !1;
        this.Cd = void 0
    };
    w(be, id);
    be.prototype.flush = function(a) {
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

    function ce() {
        var a = x.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        dd(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof L ? a[0] : Vd(b)(cd(a, c))
    };

    function de() {};
    var ee = new L(de);

    function R(a) {
        return function(b) {
            return O(b, new fe(a))
        }
    }
    var fe = function(a) {
        this.ya = a;
        this.pa = void 0
    };
    fe.prototype.call = function(a, b) {
        return b.subscribe(new ge(a, this.ya, this.pa))
    };
    var ge = function(a, b, c) {
        I.call(this, a);
        this.ya = b;
        this.pa = c;
        this.count = 0
    };
    w(ge, I);
    ge.EMPTY = I.EMPTY;
    ge.create = I.create;
    ge.prototype.s = function(a) {
        try {
            var b = this.ya.call(this.pa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function he() {
        var a = x.apply(0, arguments);
        if (1 === a.length)
            if (td(a[0])) a = a[0];
            else return Rd(a[0]);
        return O(cd(a), new ie)
    }
    var ie = function() {};
    ie.prototype.call = function(a, b) {
        return b.subscribe(new je(a))
    };
    var je = function(a) {
        Gd.call(this, a);
        this.sc = !1;
        this.kb = [];
        this.Lc = []
    };
    w(je, Gd);
    je.EMPTY = Gd.EMPTY;
    je.create = Gd.create;
    n = je.prototype;
    n.s = function(a) {
        this.kb.push(a)
    };
    n.D = function() {
        var a = this.kb,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.sc; c++) {
                var d = Hd(a[c], new Ed(this, null, c));
                this.Lc && this.Lc.push(d);
                this.add(d)
            }
            this.kb = null
        }
    };
    n.Ga = function(a, b, c) {
        if (!this.sc) {
            this.sc = !0;
            for (var d = 0; d < this.Lc.length; d++)
                if (d !== c) {
                    var e = this.Lc[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.Lc = null
        }
        this.destination.next(b)
    };
    n.ba = function(a) {
        this.sc = !0;
        Gd.prototype.ba.call(this, a)
    };
    n.jb = function(a) {
        this.sc = !0;
        Gd.prototype.jb.call(this, a)
    };

    function ke() {
        var a = x.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        return new L(function(c) {
            for (var d = a.map(function() {
                    return []
                }), e = a.map(function() {
                    return !1
                }), f = new H, g = function() {
                    if (d.every(function(m) {
                            return 0 < m.length
                        })) {
                        var l = d.map(function(m) {
                            return m.shift()
                        });
                        if (b) try {
                            l = b.apply(null, u(l))
                        } catch (m) {
                            c.error(m);
                            return
                        }
                        c.next(l);
                        d.some(function(m, r) {
                            return 0 === m.length && e[r]
                        }) && c.complete()
                    }
                }, h = {
                    gb: 0
                }; !c.closed && h.gb < a.length; h = {
                    gb: h.gb
                }, h.gb++) {
                var k = Rd(a[h.gb]);
                f.add(k.subscribe({
                    next: function(l) {
                        return function(m) {
                            d[l.gb].push(m);
                            g()
                        }
                    }(h),
                    error: function(l) {
                        return c.error(l)
                    },
                    complete: function(l) {
                        return function() {
                            e[l.gb] = !0;
                            0 === d[l.gb].length && c.complete()
                        }
                    }(h)
                }))
            }
            return f
        })
    };
    Kc(function(a) {
        return function(b) {
            b = void 0 === b ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var le = 1,
        me, ne = {};

    function oe(a) {
        return a in ne ? (delete ne[a], !0) : !1
    }
    var pe = function(a) {
        var b = le++;
        ne[b] = !0;
        me || (me = Promise.resolve());
        me.then(function() {
            return oe(b) && a()
        });
        return b
    };
    var qe = function() {
        return pe.apply(null, u(x.apply(0, arguments)))
    };
    var re = function(a, b) {
        ae.call(this, a, b);
        this.scheduler = a;
        this.Jd = b
    };
    w(re, ae);
    re.EMPTY = ae.EMPTY;
    re.prototype.Ic = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return ae.prototype.Ic.call(this, a, b, c);
        a.actions.push(this);
        return a.Cd || (a.Cd = qe(a.flush.bind(a, void 0)))
    };
    re.prototype.Gc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null != c && 0 < c || null == c && 0 < this.delay) return ae.prototype.Gc.call(this, a, b, c);
        0 === a.actions.length && (oe(b), a.Cd = void 0)
    };
    var se = function() {
        be.apply(this, arguments)
    };
    w(se, be);
    se.prototype.flush = function(a) {
        this.active = !0;
        this.Cd = void 0;
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
    var ve = new se(re);
    var we = function(a, b) {
        ae.call(this, a, b);
        this.scheduler = a;
        this.Jd = b
    };
    w(we, ae);
    we.EMPTY = ae.EMPTY;
    we.prototype.C = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return ae.prototype.C.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    we.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? ae.prototype.execute.call(this, a, b) : this.vf(a, b)
    };
    we.prototype.Ic = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null != c && 0 < c || null == c && 0 < this.delay ? ae.prototype.Ic.call(this, a, b, c) : a.flush(this)
    };
    var xe = function() {
        be.apply(this, arguments)
    };
    w(xe, be);
    var Qd = new xe(we);
    var ye = Kc(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    Kc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    Kc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    var ze = function() {
        this.B = new Ra;
        this.h = new Sa;
        this.gi = Symbol();
        this.pc = new Ec
    };
    ze.prototype.se = function() {
        return ee
    };
    var Ae = function(a, b) {
        null !== a.Ka && a.Ka.next(b)
    };
    da.Object.defineProperties(ze.prototype, {
        Bb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.gi
            }
        }
    });
    var Be = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = Be.prototype;
        this.name = String(a)
    };
    w(Be, Error);
    var Ce = function(a) {
        Be.call(this, 1E3, 'sfr:"' + a + '"');
        this.xi = a;
        this.__proto__ = Ce.prototype
    };
    w(Ce, Be);
    var De = function() {
        Be.call(this, 1003);
        this.__proto__ = De.prototype
    };
    w(De, Be);
    var Ee = function() {
        Be.call(this, 1009);
        this.__proto__ = Ee.prototype
    };
    w(Ee, Be);
    var Fe = function() {
        Be.call(this, 1011);
        this.__proto__ = Fe.prototype
    };
    w(Fe, Be);
    var Ge = function() {
        Be.call(this, 1007);
        this.__proto__ = De.prototype
    };
    w(Ge, Be);
    var He = function() {
        Be.call(this, 1008);
        this.__proto__ = De.prototype
    };
    w(He, Be);
    var Ie = function() {
        Be.call(this, 1001);
        this.__proto__ = Ie.prototype
    };
    w(Ie, Be);
    var Je = function(a) {
        Be.call(this, 1004, String(a));
        this.di = a;
        this.__proto__ = Je.prototype
    };
    w(Je, Be);
    var Le = function(a) {
        Be.call(this, 1010, a);
        this.__proto__ = Ke.prototype
    };
    w(Le, Be);
    var Ke = function(a) {
        Be.call(this, 1005, a);
        this.__proto__ = Ke.prototype
    };
    w(Ke, Be);
    var Me = function(a) {
        var b = x.apply(1, arguments),
            c = this;
        this.Vb = [];
        this.Vb.push(a);
        b.forEach(function(d) {
            c.Vb.push(d)
        })
    };
    Me.prototype.I = function(a) {
        return this.Vb.some(function(b) {
            return b.I(a)
        })
    };
    Me.prototype.N = function(a, b) {
        for (var c = 0; c < this.Vb.length; c++)
            if (this.Vb[c].I(b)) return this.Vb[c].N(a, b);
        throw new Ee;
    };

    function Ne(a) {
        var b, c, d;
        return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.A) || !d.timestamp) && "function" === typeof a.ka && "function" === typeof a.ma && "function" === typeof a.sa && "function" === typeof a.map && "function" === typeof a.wa
    };
    var Oe = Symbol("time-origin"),
        Pe = Symbol("date"),
        Qe = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        Re = function(a, b) {
            if (b.timeline !== a.timeline) throw new Ge;
        },
        Se = function(a, b) {
            Re(a, b);
            return a.value - b.value
        };
    n = Qe.prototype;
    n.equals = function(a) {
        return 0 === Se(this, a)
    };
    n.maximum = function(a) {
        Re(this, a);
        return this.value >= a.value ? this : a
    };
    n.round = function() {
        return new Qe(Math.round(this.value), this.timeline)
    };
    n.add = function(a) {
        return new Qe(this.value + a, this.timeline)
    };
    n.toString = function() {
        return String(this.value)
    };

    function Te(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function Ue(a) {
        if (Te(a)) return a;
        if (Ne(a)) return {
            A: {
                value: Ue(a.A.value),
                timestamp: Se(a.A.timestamp, new Qe(0, a.A.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };
    var Ve = {
        Dj: "app",
        ck: "web"
    };
    var We = ["sessionStart", "sessionError", "sessionFinish"],
        Xe = function(a, b) {
            this.ea = a;
            this.Id = b;
            this.ready = !1;
            this.xb = [];
            this.Fg = function() {};
            this.Wg = function() {};
            this.Tf = function() {};
            this.dg = function() {};
            this.zd = function() {}
        },
        Ye = function(a, b) {
            a.Fg = b
        },
        Ze = function(a, b) {
            a.Wg = b
        },
        $e = function(a, b) {
            a.Tf = b
        },
        af = function(a, b) {
            a.dg = b
        },
        bf = function(a, b) {
            a.zd = b;
            a.zd(a.xb.length)
        },
        gf = function(a) {
            for (var b = t("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                    c = b.next(); !c.done; c = b.next()) a.ea.addEventListener(c.value, function(d) {
                cf(a, d)
            });
            df(a.ea, function(d) {
                "sessionStart" !== d.type && cf(a, d)
            }, a.Id);
            df(a.ea, function(d) {
                "sessionStart" === d.type && (cf(a, d), ef(a), ff(a))
            }, a.Id)
        },
        cf = function(a, b) {
            a.xb.push(b);
            a.zd(a.xb.length);
            ff(a)
        },
        ff = function(a) {
            if (a.ready)
                for (; 0 < a.xb.length;) {
                    var b = a.xb.pop();
                    void 0 !== b && ("geometryChange" === b.type ? a.Tf(b) : "impression" === b.type ? a.dg(b) : We.includes(b.type) ? a.Fg(b) : a.Wg(b));
                    a.zd(a.xb.length)
                }
        },
        ef = function(a) {
            a.ready || (a.ready = !0, a.xb.sort(function(b, c) {
                return c.timestamp - b.timestamp
            }))
        };

    function hf(a) {
        return function(b) {
            return O(b, function(c) {
                var d = this,
                    e = new H,
                    f = null,
                    g = !1,
                    h;
                f = c.subscribe(new jf(d, function(k) {
                    try {
                        h = Rd(a(k, hf(a)(c)))
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
    var jf = function(a, b) {
        I.call(this, a);
        this.Li = b
    };
    w(jf, I);
    jf.EMPTY = I.EMPTY;
    jf.create = I.create;
    jf.prototype.X = function(a) {
        this.Li(a);
        this.unsubscribe()
    };

    function kf() {
        var a = x.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && td(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = Rd([c].concat(u(a))),
                e = new Jd(b);
            if (c && "function" === typeof c.Rb) c = c.Rb.call(d, e);
            else throw new TypeError("z");
            return c
        }
    }

    function lf() {
        return kf.apply(null, u(x.apply(0, arguments)))
    };

    function mf(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return O(b, new nf(a))
        }
    }
    var nf = function(a) {
        this.defaultValue = a
    };
    nf.prototype.call = function(a, b) {
        return b.subscribe(new of (a, this.defaultValue))
    };
    var of = function(a, b) {
        I.call(this, a);
        this.defaultValue = b;
        this.isEmpty = !0
    };
    w( of , I); of .EMPTY = I.EMPTY; of .create = I.create; of .prototype.s = function(a) {
        this.isEmpty = !1;
        this.destination.next(a)
    }; of .prototype.D = function() {
        this.isEmpty && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function pf(a) {
        return function(b) {
            return O(b, new qf(a))
        }
    }
    var qf = function(a) {
        this.je = a
    };
    qf.prototype.call = function(a, b) {
        return b.subscribe(new rf(a, this.je))
    };
    var rf = function(a, b) {
        Gd.call(this, a);
        this.je = b;
        this.ja = !1;
        this.gd = [];
        this.index = 0
    };
    w(rf, Gd);
    rf.EMPTY = Gd.EMPTY;
    rf.create = Gd.create;
    n = rf.prototype;
    n.Ga = function(a, b, c, d) {
        this.destination.next(a);
        sf(this, d);
        tf(this)
    };
    n.jb = function(a) {
        this.X(a)
    };
    n.ba = function(a) {
        (a = sf(this, a)) && this.destination.next(a);
        tf(this)
    };
    n.s = function(a) {
        var b = this.index++;
        try {
            var c = this.je(a, b);
            if (c) {
                var d = Hd(c, new Ed(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.gd.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    n.D = function() {
        this.ja = !0;
        tf(this);
        this.unsubscribe()
    };
    var sf = function(a, b) {
            b.unsubscribe();
            var c = a.gd.indexOf(b); - 1 !== c && a.gd.splice(c, 1);
            return b.wg
        },
        tf = function(a) {
            a.ja && 0 === a.gd.length && a.destination.complete()
        };

    function uf(a) {
        return function(b) {
            return O(b, new vf(a))
        }
    }
    var vf = function(a) {
        this.ib = a;
        this.Rh = void 0
    };
    vf.prototype.call = function(a, b) {
        return b.subscribe(new wf(a, this.ib, this.Rh))
    };
    var wf = function(a, b, c) {
        Fd.call(this, a);
        this.ib = b;
        this.values = new Set;
        c && this.add(Hd(c, new Dd(this)))
    };
    w(wf, Fd);
    wf.EMPTY = Fd.EMPTY;
    wf.create = Fd.create;
    n = wf.prototype;
    n.Ga = function() {
        this.values.clear()
    };
    n.jb = function(a) {
        this.X(a)
    };
    n.s = function(a) {
        this.ib ? this.kh(a) : this.wf(a, a)
    };
    n.kh = function(a) {
        var b = this.destination;
        try {
            var c = this.ib(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.wf(c, a)
    };
    n.wf = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function S(a) {
        return function(b) {
            return O(b, new xf(a))
        }
    }
    var xf = function(a) {
        this.compare = a;
        this.ib = void 0
    };
    xf.prototype.call = function(a, b) {
        return b.subscribe(new yf(a, this.compare, this.ib))
    };
    var yf = function(a, b, c) {
        I.call(this, a);
        this.ib = c;
        this.bg = !1;
        "function" === typeof b && (this.compare = b)
    };
    w(yf, I);
    yf.EMPTY = I.EMPTY;
    yf.create = I.create;
    yf.prototype.compare = function(a, b) {
        return a === b
    };
    yf.prototype.s = function(a) {
        try {
            var b = this.ib;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.bg) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.bg = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function zf(a) {
        if (isNaN(a)) throw new TypeError("H");
        if (0 > a) throw new ye;
        return function(b) {
            return 0 === a ? $c : O(b, new Af(a))
        }
    }
    var Af = function(a) {
        this.count = a
    };
    Af.prototype.call = function(a, b) {
        return b.subscribe(new Bf(a, this.count))
    };
    var Bf = function(a, b) {
        I.call(this, a);
        this.count = b;
        this.lh = 0
    };
    w(Bf, I);
    Bf.EMPTY = I.EMPTY;
    Bf.create = I.create;
    Bf.prototype.s = function(a) {
        var b = this.count,
            c = ++this.lh;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function Cf(a) {
        a = void 0 === a ? Df : a;
        return function(b) {
            return O(b, new Ef(a))
        }
    }
    var Ef = function(a) {
        this.me = a
    };
    Ef.prototype.call = function(a, b) {
        return b.subscribe(new Ff(a, this.me))
    };
    var Ff = function(a, b) {
        I.call(this, a);
        this.me = b;
        this.cg = !1
    };
    w(Ff, I);
    Ff.EMPTY = I.EMPTY;
    Ff.create = I.create;
    Ff.prototype.s = function(a) {
        this.cg = !0;
        this.destination.next(a)
    };
    Ff.prototype.D = function() {
        if (this.cg) return this.destination.complete();
        try {
            var a = this.me()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function Df() {
        return new jd
    };

    function Gf() {
        var a = x.apply(0, arguments);
        return function(b) {
            return Wd(b, N.apply(null, u(a)))
        }
    };

    function Hf(a) {
        return function(b) {
            return O(b, new If(a, b))
        }
    }
    var If = function(a, b) {
        this.ya = a;
        this.pa = void 0;
        this.source = b
    };
    If.prototype.call = function(a, b) {
        return b.subscribe(new Jf(a, this.ya, this.pa, this.source))
    };
    var Jf = function(a, b, c, d) {
        I.call(this, a);
        this.ya = b;
        this.pa = c;
        this.source = d;
        this.index = 0;
        this.pa = c || this
    };
    w(Jf, I);
    Jf.EMPTY = I.EMPTY;
    Jf.create = I.create;
    Jf.prototype.ba = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    Jf.prototype.s = function(a) {
        var b = !1;
        try {
            b = this.ya.call(this.pa, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.ba(!1)
    };
    Jf.prototype.D = function() {
        this.ba(!0)
    };

    function Kf() {
        return function(a) {
            return O(a, new Lf)
        }
    }
    var Lf = function() {};
    Lf.prototype.call = function(a, b) {
        return b.subscribe(new Mf(a))
    };
    var Mf = function() {
        I.apply(this, arguments)
    };
    w(Mf, I);
    Mf.EMPTY = I.EMPTY;
    Mf.create = I.create;
    Mf.prototype.s = function() {};

    function Nf() {
        if (isNaN(1)) throw new TypeError("H");
        return function(a) {
            return O(a, new Of)
        }
    }
    var Of = function() {
        this.total = 1
    };
    Of.prototype.call = function(a, b) {
        return b.subscribe(new Pf(a, this.total))
    };
    var Pf = function(a, b) {
        I.call(this, a);
        this.total = b;
        this.Cg = [];
        this.count = 0
    };
    w(Pf, I);
    Pf.EMPTY = I.EMPTY;
    Pf.create = I.create;
    Pf.prototype.s = function(a) {
        var b = this.Cg,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    Pf.prototype.D = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.Cg, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function Qf(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.g(a ? R(function(e, f) {
                return a(e, f, d)
            }) : Rc, Nf(), c ? mf(b) : Cf(function() {
                return new jd
            }))
        }
    };

    function Rf(a) {
        return function(b) {
            return O(b, new Sf(a))
        }
    }
    var Sf = function(a) {
        this.value = a
    };
    Sf.prototype.call = function(a, b) {
        return b.subscribe(new Tf(a, this.value))
    };
    var Tf = function(a, b) {
        I.call(this, a);
        this.value = b
    };
    w(Tf, I);
    Tf.EMPTY = I.EMPTY;
    Tf.create = I.create;
    Tf.prototype.s = function() {
        this.destination.next(this.value)
    };

    function Uf(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return O(d, new Vf(a, b, c))
        }
    }
    var Vf = function(a, b, c) {
        this.Vd = a;
        this.seed = b;
        this.Yh = void 0 === c ? !1 : c
    };
    Vf.prototype.call = function(a, b) {
        return b.subscribe(new Wf(a, this.Vd, this.seed, this.Yh))
    };
    var Wf = function(a, b, c, d) {
        I.call(this, a);
        this.Vd = b;
        this.Od = c;
        this.yf = d;
        this.index = 0
    };
    w(Wf, I);
    Wf.EMPTY = I.EMPTY;
    Wf.create = I.create;
    Wf.prototype.s = function(a) {
        var b = this.destination;
        if (this.yf) {
            var c = this.index++;
            try {
                var d = this.Vd(this.Od, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.Od = d;
            b.next(d)
        } else this.Od = a, this.yf = !0, b.next(a)
    };

    function Xf(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, pd);
            d.source = b;
            d.Lg = c;
            return d
        }
    };

    function Yf() {
        var a = x.apply(0, arguments);
        1 === a.length && td(a[0]) && (a = a[0]);
        return function(b) {
            return O(b, new Zf(a))
        }
    }
    var Zf = function(a) {
        this.Oe = a
    };
    Zf.prototype.call = function(a, b) {
        return b.subscribe(new $f(a, this.Oe))
    };
    var $f = function(a, b) {
        Fd.call(this, a);
        this.destination = a;
        this.Oe = b
    };
    w($f, Fd);
    $f.EMPTY = Fd.EMPTY;
    $f.create = Fd.create;
    $f.prototype.jb = function() {
        ag(this)
    };
    $f.prototype.ba = function() {
        ag(this)
    };
    $f.prototype.X = function() {
        ag(this);
        this.unsubscribe()
    };
    $f.prototype.D = function() {
        ag(this);
        this.unsubscribe()
    };
    var ag = function(a) {
        var b = a.Oe.shift();
        if (b) {
            var c = new Dd(a);
            a.destination.add(c);
            Hd(b, c)
        } else a.destination.complete()
    };

    function bg(a) {
        var b = new gd(a, void 0, void 0);
        return function(c) {
            return Xf(function() {
                return b
            })(c)
        }
    };

    function cg() {
        var a = void 0 === a ? Infinity : a;
        return function(b) {
            return 0 >= a ? $c : O(b, function(c) {
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

    function dg() {
        return new M
    }

    function eg() {
        return function(a) {
            return md()(Xf(dg)(a))
        }
    };

    function T() {
        var a = x.apply(0, arguments),
            b = a[a.length - 1];
        return dd(b) ? (a.pop(), function(c) {
            return Wd(a, c, b)
        }) : function(c) {
            return Wd(a, c)
        }
    };
    var fg = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? ve : c;
        this.source = a;
        this.delayTime = b;
        this.scheduler = c;
        0 > b && (this.delayTime = 0);
        dd(c) || (this.scheduler = ve)
    };
    w(fg, L);
    fg.create = L.create;
    fg.Fh = function(a) {
        this.add(a.source.subscribe(a.bf))
    };
    fg.prototype.ga = function(a) {
        return this.scheduler.C(fg.Fh, this.delayTime, {
            source: this.source,
            bf: a
        })
    };

    function gg() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return O(b, new ig(a))
        }
    }
    var ig = function(a) {
        this.scheduler = Qd;
        this.delay = a
    };
    ig.prototype.call = function(a, b) {
        return (new fg(b, this.delay, this.scheduler)).subscribe(a)
    };

    function U(a) {
        return function(b) {
            return O(b, new kg(a))
        }
    }
    var kg = function(a) {
        this.R = a
    };
    kg.prototype.call = function(a, b) {
        return b.subscribe(new lg(a, this.R))
    };
    var lg = function(a, b) {
        Fd.call(this, a);
        this.destination = a;
        this.R = b;
        this.index = 0
    };
    w(lg, Fd);
    lg.EMPTY = Fd.EMPTY;
    lg.create = Fd.create;
    lg.prototype.s = function(a) {
        var b = this.index++;
        try {
            var c = this.R(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.qd) && a.unsubscribe();
        a = new Dd(this);
        this.destination.add(a);
        this.qd = a;
        Hd(c, a)
    };
    lg.prototype.D = function() {
        var a = this.qd;
        a && !a.closed || Fd.prototype.D.call(this);
        this.qd = void 0;
        this.unsubscribe()
    };
    lg.prototype.ba = function() {
        this.qd = void 0;
        this.G && Fd.prototype.D.call(this)
    };
    lg.prototype.Ga = function(a) {
        this.destination.next(a)
    };

    function mg(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return O(c, new ng(a, b))
        }
    }
    var ng = function(a, b) {
        this.ya = a;
        this.Ae = b
    };
    ng.prototype.call = function(a, b) {
        return b.subscribe(new og(a, this.ya, this.Ae))
    };
    var og = function(a, b, c) {
        I.call(this, a);
        this.ya = b;
        this.Ae = c;
        this.index = 0
    };
    w(og, I);
    og.EMPTY = I.EMPTY;
    og.create = I.create;
    og.prototype.s = function(a) {
        var b = this.destination;
        try {
            var c = this.ya(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.Ae && b.next(a), b.complete())
    };

    function pg(a, b, c) {
        return function(d) {
            return O(d, new qg(a, b, c))
        }
    }
    var qg = function(a, b, c) {
        this.Ei = a;
        this.error = b;
        this.complete = c
    };
    qg.prototype.call = function(a, b) {
        return b.subscribe(new rg(a, this.Ei, this.error, this.complete))
    };
    var rg = function(a, b, c, d) {
        I.call(this, a);
        this.Pd = this.Qd = this.Rd = de;
        this.Qd = c || de;
        this.Pd = d || de;
        Mc(b) ? (this.Rc = this, this.Rd = b) : b && (this.Rc = b, this.Rd = b.next || de, this.Qd = b.error || de, this.Pd = b.complete || de)
    };
    w(rg, I);
    rg.EMPTY = I.EMPTY;
    rg.create = I.create;
    rg.prototype.s = function(a) {
        try {
            this.Rd.call(this.Rc, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    rg.prototype.X = function(a) {
        try {
            this.Qd.call(this.Rc, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    rg.prototype.D = function() {
        try {
            this.Pd.call(this.Rc)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function sg() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return O(b, new tg(a, c))
        }
    }
    var tg = function(a, b) {
        this.kb = a;
        this.R = b
    };
    tg.prototype.call = function(a, b) {
        return b.subscribe(new ug(a, this.kb, this.R))
    };
    var ug = function(a, b, c) {
        Gd.call(this, a);
        this.R = c;
        this.Cb = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.Cb.push(c);
        for (c = 0; c < a; c++) this.add(Hd(b[c], new Ed(this, void 0, c)))
    };
    w(ug, Gd);
    ug.EMPTY = Gd.EMPTY;
    ug.create = Gd.create;
    ug.prototype.Ga = function(a, b, c) {
        this.values[c] = b;
        b = this.Cb;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    ug.prototype.ba = function() {};
    ug.prototype.s = function(a) {
        0 === this.Cb.length && (a = [a].concat(u(this.values)), this.R ? this.ih(a) : this.destination.next(a))
    };
    ug.prototype.ih = function(a) {
        try {
            var b = this.R.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var vg = function(a) {
        this.ea = a
    };
    vg.prototype.I = function(a) {
        return (null == a ? 0 : a.ic) ? !0 : "POST" === (null == a ? void 0 : a.qa) || (null == a ? 0 : a.rb) || (null == a ? 0 : a.ed) ? !1 : this.ea.I()
    };
    vg.prototype.ping = function() {
        var a = this,
            b = N.apply(null, u(x.apply(0, arguments))).g(Sd(function(c) {
                return wg(a, c)
            }), Hf(function(c) {
                return c
            }), bg(1));
        b.connect();
        return b
    };
    var wg = function(a, b) {
        var c = new gd(1);
        xg(a.ea, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    vg.prototype.yd = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function yg(a, b) {
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
    var zg = function(a) {
        this.ea = a;
        this.timeline = Pe
    };
    n = zg.prototype;
    n.setTimeout = function(a, b) {
        return Number(this.ea.setTimeout(function() {
            return a()
        }, b))
    };
    n.clearTimeout = function(a) {
        this.ea.clearTimeout(a)
    };
    n.now = function() {
        return new Qe(Date.now(), this.timeline)
    };
    n.interval = function(a, b) {
        var c = this.Pa(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Pa = function(a) {
        return yg(this, a).g(cg(), Uf(function(b) {
            return b + 1
        }, -1))
    };
    n.ia = function() {
        return !0
    };
    var Ag = function(a, b) {
        this.context = a;
        this.Wb = b
    };
    Ag.prototype.I = function(a) {
        return this.Wb.I(a)
    };
    Ag.prototype.N = function(a, b) {
        if (!this.I(b)) throw new Ee;
        return new Bg(this.context, this.Wb, null != b ? b : void 0, a)
    };
    var Bg = function(a, b, c, d) {
        var e = this;
        this.Wb = b;
        this.properties = c;
        this.url = d;
        this.sd = !0;
        this.rb = new Map;
        this.body = void 0;
        var f;
        this.method = null != (f = null == c ? void 0 : c.qa) ? f : "GET";
        this.sh = a.se().subscribe(function() {
            e.sendNow()
        })
    };
    Bg.prototype.deactivate = function() {
        this.sd = !1
    };
    Bg.prototype.sendNow = function() {
        if (this.sd)
            if (this.sh.unsubscribe(), this.Wb.I(this.properties)) try {
                if (0 < this.rb.size || void 0 !== this.body) {
                    var a, b;
                    this.Wb.yd(null != (a = this.properties) ? a : {}, this.rb, null != (b = this.body) ? b : "", this.url)
                } else this.Wb.ping(this.url);
                this.sd = !1
            } catch (c) {} else this.sd = !1
    };
    var Dg = function(a, b, c, d, e, f) {
            this.mode = a;
            this.i = b;
            this.setTime = c;
            this.Hc = d;
            this.sj = e;
            this.xh = f;
            this.ja = !1;
            this.id = 0 === this.mode ? Cg(this) : 0
        },
        Cg = function(a) {
            return a.i.setTimeout(function() {
                Eg(a)
            }, a.Hc)
        },
        Fg = function(a, b) {
            var c = Se(b, a.setTime);
            c >= a.Hc ? Eg(a) : (a.setTime = b, a.Hc -= c)
        },
        Eg = function(a) {
            try {
                a.sj(a.setTime.add(a.Hc))
            } finally {
                a.ja = !0, a.xh()
            }
        };
    Dg.prototype.jf = function(a, b) {
        this.ja || (1 === this.mode && 1 === a ? Fg(this, b) : 1 === this.mode && 0 === a ? (this.mode = a, Fg(this, this.i.now()), this.ja || (this.id = Cg(this))) : 0 === this.mode && 1 === a && (this.mode = a, this.clear(), Fg(this, b)))
    };
    Dg.prototype.clear = function() {
        this.ja || this.i.clearTimeout(this.id)
    };
    var Gg = function(a) {
        this.fd = a;
        this.ei = this.mode = 0;
        this.Pb = {};
        this.timeline = a.timeline;
        this.vb = a.now()
    };
    n = Gg.prototype;
    n.jf = function(a, b) {
        this.mode = a;
        Re(this.vb, b);
        this.vb = b;
        Object.values(this.Pb).forEach(function(c) {
            return void c.jf(a, b)
        })
    };
    n.now = function() {
        return 1 === this.mode ? this.vb : this.fd.now()
    };
    n.setTimeout = function(a, b) {
        var c = this,
            d = ++this.ei,
            e = 1 === this.mode ? this.vb : this.fd.now();
        this.Pb[d] = new Dg(this.mode, this.fd, e, b, function(f) {
            var g = c.vb;
            1 === c.mode && (c.vb = f);
            a();
            c.vb = g
        }, function() {
            delete c.Pb[d]
        });
        return d
    };
    n.clearTimeout = function(a) {
        this.Pb[a] && (this.Pb[a].clear(), delete this.Pb[a])
    };
    n.interval = function() {
        throw Error("I");
    };
    n.Pa = function() {
        throw Error("J");
    };
    n.ia = function() {
        return this.fd.ia()
    };

    function Hg(a, b) {
        var c = new Gg(a);
        a = b.subscribe(function(d) {
            c.jf(d.value ? 1 : 0, d.timestamp)
        });
        return {
            i: c,
            nk: a
        }
    };

    function Ig(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new Qe(a.timestamp, Pe),
            value: b
        }
    };

    function Jg(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function Kg(a) {
        var b = x.apply(1, arguments),
            c = b.length;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !zb && a === a.raw || !(zb && !Ab || xb(a)) || c + 1 !== a.length) throw new TypeError("o");
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
    var Lg = ha(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        Mg = ha(["./reach_worklet.js"]),
        Ng = ha(["./reach_worklet.js"]),
        Og = ha(["./reach_worklet.html"]),
        Pg = ha(["./reach_worklet.js"]),
        Qg = ha(["./reach_worklet.js"]);

    function Rg(a) {
        var b = {};
        return b[0] = Kg(Lg, a), b[1] = Kg(Mg), b[2] = Kg(Ng), b
    }
    Kg(Og);
    Kg(Pg);
    Kg(Qg);
    var Tg = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? Rg("current") : d;
        ze.call(this);
        this.ea = a;
        this.Id = b;
        this.Ka = c;
        this.Jg = d;
        this.lb = null;
        this.Ye = new gd(3);
        this.Ye.g(R(function(e) {
            return "sessionStart" === e.value.type
        }));
        this.jj = this.Ye.g(R(function(e) {
            return "sessionFinish" === e.value.type
        }));
        this.eg = new gd(1);
        this.xj = new gd;
        this.Uf = new gd(10);
        this.J = new Ag(this, new vg(a));
        this.mi = this.ea.I();
        this.i = Sg(this, new zg(this.ea))
    };
    w(Tg, ze);
    var Ug = function(a) {
        null !== a.lb && gf(a.lb)
    };
    Tg.prototype.validate = function() {
        return this.mi
    };
    var Sg = function(a, b) {
        a.lb = new Xe(a.ea, a.Id);
        var c = new gd;
        Ye(a.lb, function(f) {
            f = Ig(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Ye.next(f)
        });
        $e(a.lb, function(f) {
            if (void 0 === f) var g = !1;
            else {
                g = f.data;
                var h;
                (h = void 0 === g) || (h = g.viewport, h = void 0 === h || void 0 !== h && "number" === typeof h.width && "number" === typeof h.height);
                h ? (g = g.adView, g = void 0 !== g && "number" === typeof g.percentageInView && (void 0 === g.geometry || Jg(g.geometry)) && (void 0 === g.onScreenGeometry || Jg(g.onScreenGeometry))) : g = !1
            }
            g ? (f = Ig(f), c.next({
                timestamp: f.timestamp,
                value: !0
            }), a.Uf.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f), a.J.N(f).sendNow())
        });
        Ze(a.lb, function(f) {
            f = Ig(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.xj.next(f)
        });
        af(a.lb, function(f) {
            f = Ig(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.eg.next(f)
        });
        var d = 0;
        bf(a.lb, function(f) {
            d += f;
            0 < d && 0 === f && c.next({
                timestamp: a.i.now(),
                value: !1
            })
        });
        var e = c.g(mg(function(f) {
            return f.value
        }, !0));
        return Hg(b,
            e).i
    };
    da.Object.defineProperties(Tg.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Vg
            }
        }
    });
    var Vg = {};

    function Wg(a, b) {
        if (!b) throw Error("S`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("T`" + a);
        if ("" === b.trim()) throw Error("U`" + a);
    }

    function Xg(a) {
        if (!a) throw Error("X`functionToExecute");
    }

    function Yg(a, b) {
        if (null == b) throw Error("V`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("W`" + a);
        if (0 > b) throw Error("Y`" + a);
    };

    function Zg() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.10-google_20240110")
    }

    function $g() {
        for (var a = ["1", "4", "10"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var ah = function(a, b, c, d) {
            this.Zf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        bh = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        ch = function(a) {
            return new ah(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    ah.prototype.mb = function() {
        var a = {};
        a = (a.omid_message_guid = this.Zf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var dh = function(a) {
        this.Gd = a
    };
    dh.prototype.mb = function() {
        return JSON.stringify(void 0)
    };

    function eh(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    var fh = function(a) {
            return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
                return eh(a, b)
            })
        },
        gh = function(a) {
            for (var b = t(Object.values(Ve)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = {};
                d = (d.app = "omid_v1_present_app", d.web = "omid_v1_present_web", d)[c];
                if (eh(a, d)) return c
            }
            return null
        };

    function hh(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function ih() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function jh() {
        var a = x.apply(0, arguments);
        kh(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(u(a))));
        }, function() {
            return console.error.apply(console, u(a))
        })
    }

    function kh(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var lh = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("Z");
    }();
    var mh = function(a) {
        this.Gd = a;
        this.handleExportedMessage = mh.prototype.Th.bind(this)
    };
    w(mh, dh);
    mh.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Gd : b;
        if (!b) throw Error("$");
        b.handleExportedMessage(a.mb(), this)
    };
    mh.prototype.Th = function(a, b) {
        if (bh(a) && this.onMessage) this.onMessage(ch(a), b)
    };

    function nh(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function oh(a) {
        if (a === lh) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function ph() {
        var a;
        "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
        return nh(a) ? a : lh
    };
    var qh = function(a, b) {
        this.Gd = b = void 0 === b ? lh : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (bh(e) && d.source && c.onMessage) c.onMessage(ch(e), d.source)
            }
        })
    };
    w(qh, dh);
    qh.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Gd : b;
        if (!b) throw Error("$");
        b.postMessage(a.mb(), "*")
    };
    var rh = ["omid", "v1_VerificationServiceCommunication"],
        sh = ["omidVerificationProperties", "serviceWindow"];

    function th(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var uh = function(a) {
        if (!a) {
            a = ph();
            var b = void 0 === b ? fh : b;
            var c = [],
                d = th(a, sh);
            d && c.push(d);
            c.push(nh(a) ? a.top : lh);
            a: {
                c = t(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;e = e.value;
                        var f = b;
                        if (!oh(e)) try {
                            var g = th(e, rh);
                            if (g) {
                                var h = new mh(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new qh(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.nc = a) this.nc.onMessage = this.Uh.bind(this);
        else if (b = (b = lh.omid3p) && "function" === typeof b.registerSessionObserver && "function" === typeof b.addEventListener ? b : null) this.Dc = b;
        this.cj = this.dj =
            0;
        this.Zd = {};
        this.xe = [];
        this.vc = (b = lh.omidVerificationProperties) ? b.injectionId : void 0
    };
    uh.prototype.I = function() {
        var a = ph();
        var b = (b = lh.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return "web" !== (b || gh(a) || gh(nh(a) ? a.top : lh)) || this.vc ? !(!this.nc && !this.Dc) : !1
    };
    var df = function(a, b, c) {
        Xg(b);
        a.Dc ? a.Dc.registerSessionObserver(b, c, a.vc) : a.Zb("addSessionListener", b, c, a.vc)
    };
    uh.prototype.addEventListener = function(a, b) {
        Wg("eventType", a);
        Xg(b);
        this.Dc ? this.Dc.addEventListener(a, b, this.vc) : this.Zb("addEventListener", b, a, this.vc)
    };
    var xg = function(a, b, c, d) {
            Wg("url", b);
            lh.document && lh.document.createElement ? vh(a, b, c, d) : a.Zb("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        vh = function(a, b, c, d) {
            var e = lh.document.createElement("img");
            a.xe.push(e);
            var f = function(g) {
                var h = a.xe.indexOf(e);
                0 <= h && a.xe.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    uh.prototype.setTimeout = function(a, b) {
        Xg(a);
        Yg("timeInMillis", b);
        if (wh()) return lh.setTimeout(a, b);
        var c = this.dj++;
        this.Zb("setTimeout", a, c, b);
        return c
    };
    uh.prototype.clearTimeout = function(a) {
        Yg("timeoutId", a);
        wh() ? lh.clearTimeout(a) : this.Eg("clearTimeout", a)
    };
    uh.prototype.setInterval = function(a, b) {
        Xg(a);
        Yg("timeInMillis", b);
        if (xh()) return lh.setInterval(a, b);
        var c = this.cj++;
        this.Zb("setInterval", a, c, b);
        return c
    };
    uh.prototype.clearInterval = function(a) {
        Yg("intervalId", a);
        xh() ? lh.clearInterval(a) : this.Eg("clearInterval", a)
    };
    var wh = function() {
            return "function" === typeof lh.setTimeout && "function" === typeof lh.clearTimeout
        },
        xh = function() {
            return "function" === typeof lh.setInterval && "function" === typeof lh.clearInterval
        };
    uh.prototype.Uh = function(a) {
        var b = a.method,
            c = a.Zf;
        a = a.args;
        if ("response" === b && this.Zd[c]) {
            var d = Zg() && $g() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.Zd[c].apply(this, d)
        }
        "error" === b && window.console && jh(a)
    };
    uh.prototype.Eg = function(a) {
        this.Zb.apply(this, [a, null].concat(u(x.apply(1, arguments))))
    };
    uh.prototype.Zb = function(a, b) {
        var c = x.apply(2, arguments);
        if (this.nc) {
            var d = ih();
            b && (this.Zd[d] = b);
            var e = "VerificationService." + a;
            c = Zg() && $g() ? c : JSON.stringify(c);
            this.nc.sendMessage(new ah(d, e, "1.4.10-google_20240110", c))
        }
    };
    var yh = void 0;
    if (yh = void 0 === yh ? "undefined" === typeof omidExports ? null : omidExports : yh) {
        var zh = ["OmidVerificationClient"];
        zh.slice(0, zh.length - 1).reduce(hh, yh)[zh[zh.length - 1]] = uh
    };

    function Ah(a, b) {
        return function(c) {
            return new L(function(d) {
                return c.subscribe(function(e) {
                    a.bc(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.bc(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.bc(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var Ch = function() {
        for (var a = t(x.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ia()) {
                this.i = b;
                return
            }
        this.i = new Bh
    };
    n = Ch.prototype;
    n.ia = function() {
        return this.i.ia()
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
        var c = this.Pa(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Pa = function(a) {
        return this.i.Pa(a)
    };
    da.Object.defineProperties(Ch.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.i.timeline
            }
        }
    });
    var Bh = function() {
        this.timeline = Symbol()
    };
    n = Bh.prototype;
    n.ia = function() {
        return !1
    };
    n.now = function() {
        return new Qe(0, this.timeline)
    };
    n.setTimeout = function() {
        return 0
    };
    n.clearTimeout = function() {};
    n.interval = function() {
        return function() {}
    };
    n.Pa = function() {
        return ee
    };
    var Dh = function(a, b) {
        this.M = a;
        this.B = b
    };
    n = Dh.prototype;
    n.setTimeout = function(a, b) {
        return this.M.setTimeout(this.B.bc(734, a), b)
    };
    n.clearTimeout = function(a) {
        this.M.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Pa(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Pa = function(a) {
        var b = this;
        return new L(function(c) {
            var d = 0,
                e = b.M.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.M.clearInterval(e)
            }
        })
    };
    n.ia = function() {
        return !!this.M.clearTimeout && "setTimeout" in this.M && "setInterval" in this.M && !!this.M.clearInterval
    };
    var Eh = function(a, b) {
        Dh.call(this, a, b);
        this.timeline = Pe
    };
    w(Eh, Dh);
    Eh.prototype.now = function() {
        return new Qe(this.M.Date.now(), this.timeline)
    };
    Eh.prototype.ia = function() {
        return !!this.M.Date && !!this.M.Date.now && Dh.prototype.ia.call(this)
    };
    var Fh = function(a, b) {
        Dh.call(this, a, b);
        this.timeline = Oe
    };
    w(Fh, Dh);
    Fh.prototype.now = function() {
        return new Qe(this.M.performance.now(), this.timeline)
    };
    Fh.prototype.ia = function() {
        return !!this.M.performance && !!this.M.performance.now && Dh.prototype.ia.call(this)
    };

    function Gh(a) {
        a = a.global;
        if (a.fetchLater) return a.fetchLater
    }
    var Ih = function(a) {
            this.context = a;
            if (void 0 === Hh) {
                var b, c, d = null == (b = a.global) ? void 0 : null == (c = b.document) ? void 0 : c.createElement("meta");
                try {
                    d && (d.httpEquiv = "origin-trial", d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", a.global.document.head.append(d))
                } catch (e) {}
                Hh = d
            }
        },
        Hh;
    Ih.prototype.I = function(a) {
        return void 0 !== Gh(this.context) && !(null == a || !a.Lf) && !Jh(this.context) && !(null == a ? 0 : a.ic) && !(null == a ? 0 : a.rb) && !(null == a ? 0 : a.ed)
    };
    Ih.prototype.N = function(a, b) {
        if (!this.I(b)) throw new Ee;
        return new Kh(this.context, a, b)
    };
    var Kh = function(a, b, c) {
            this.context = a;
            this.properties = c;
            this.Eb = b;
            var d;
            this.qa = null != (d = null == c ? void 0 : c.qa) ? d : "GET";
            a = Gh(this.context);
            if (void 0 === a) throw Error();
            this.fetchLater = a;
            Lh(this, this.yc())
        },
        Lh = function(a, b) {
            a.ab && a.ab.activated || (a.jc = new AbortController, a.ab = a.fetchLater.call(a.context.global, b, {
                method: a.qa,
                signal: a.jc.signal
            }))
        };
    Kh.prototype.yc = function() {
        var a = this.Eb;
        return ("&" === a.slice(-1)[0] ? a : a + "&") + "flapi=1"
    };
    Kh.prototype.deactivate = function() {
        this.ab && !this.ab.activated && this.jc && (this.jc.abort(), this.ab = void 0)
    };
    Kh.prototype.sendNow = function() {};
    da.Object.defineProperties(Kh.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Eb
            },
            set: function(a) {
                this.Eb = a;
                a = this.yc();
                this.ab && this.ab.activated || !this.jc || (this.jc.abort(), this.ab = void 0);
                Lh(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.qa
            }
        }
    });
    var Mh = function(a) {
        this.context = a
    };
    Mh.prototype.I = function() {
        return !Jh(this.context) && !!this.context.global.fetch
    };
    Mh.prototype.ping = function() {
        var a = this;
        return ce.apply(null, u(x.apply(0, arguments).map(function(b) {
            return Rd(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(P(function(c) {
                return 200 === c.status
            }))
        }))).g(Hf(function(b) {
            return b
        }), Qf())
    };
    Mh.prototype.yd = function(a, b, c) {
        for (var d = x.apply(3, arguments), e = this, f = new Headers, g = t(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = t(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = null != (l = a.keepAlive) ? l : !1;
        ce.apply(null, u(d.map(function(r) {
            return Rd(e.context.global.fetch(r, Object.assign({}, {
                method: String(a.qa),
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
        }))).g(Hf(function(r) {
            return r
        }), Qf())
    };
    var Nh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Oh = function(a) {
        Oh[" "](a);
        return a
    };
    Oh[" "] = function() {};
    var Ph = function(a, b) {
        try {
            return Oh(a[b]), !0
        } catch (c) {}
        return !1
    };

    function Qh() {
        return Ub ? !!Xb && !!Xb.platform : !1
    }

    function Rh() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    }

    function Sh() {
        Rh() || D("iPad") || D("iPod")
    };
    var Th = cc(),
        Uh = dc(),
        Vh = D("Edge"),
        Wh = D("Gecko") && !(Wa(Wb(), "WebKit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        Xh = Wa(Wb(), "WebKit") && !D("Edge");
    Xh && D("Mobile");
    Qh() || D("Macintosh");
    Qh() || D("Windows");
    (Qh() ? "Linux" === Xb.platform : D("Linux")) || Qh() || D("CrOS");
    Qh() || D("Android");
    Rh();
    D("iPad");
    D("iPod");
    Sh();
    Wa(Wb(), "KaiOS");
    var Yh = function() {
            var a = Ia.document;
            return a ? a.documentMode : void 0
        },
        Zh;
    a: {
        var $h = "",
            ai = function() {
                var a = Wb();
                if (Wh) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Vh) return /Edge\/([\d\.]+)/.exec(a);
                if (Uh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Xh) return /WebKit\/(\S+)/.exec(a);
                if (Th) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ai && ($h = ai ? ai[1] : "");
        if (Uh) {
            var bi = Yh();
            if (null != bi && bi > parseFloat($h)) {
                Zh = String(bi);
                break a
            }
        }
        Zh = $h
    }
    var ci = Zh,
        di;
    if (Ia.document && Uh) {
        var ei = Yh();
        di = ei ? ei : parseInt(ci, 10) || void 0
    } else di = void 0;
    var fi = di;
    var gi = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    n = gi.prototype;
    n.clone = function() {
        return new gi(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof gi && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
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
        a instanceof gi ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var hi = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = hi.prototype;
    n.clone = function() {
        return new hi(this.width, this.height)
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
    var ki = function(a) {
            return a ? new ii(ji(a)) : Ya || (Ya = new ii)
        },
        li = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Xh || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Uh && a.pageYOffset != b.scrollTop ? new gi(b.scrollLeft, b.scrollTop) : new gi(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        mi = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!La(f) ||
                    Ma(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ma(f)) {
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
                    Hb(g ? Lb(f) : f, d)
                }
            }
        },
        ji = function(a) {
            z(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ni = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                z("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        ii = function(a) {
            this.Kb = a || Ia.document ||
                document
        };
    n = ii.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.Kb).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.Kb;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.Kb.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        z(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        mi(ji(a), a, arguments)
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
        return Ma(a) && 1 == a.nodeType
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var pi = function() {
            return Ub && Xb ? Xb.mobile : !oi() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
        },
        oi = function() {
            return Ub && Xb ? !Xb.mobile && (D("iPad") || D("Android") || D("Silk")) : D("iPad") || D("Android") && !D("Mobile") || D("Silk")
        };
    var qi = function(a) {
        try {
            return !!a && null != a.location.href && Ph(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var ri = function(a) {
        this.context = a
    };
    ri.prototype.I = function(a) {
        return (null == a ? 0 : a.ic) || "POST" === (null == a ? void 0 : a.qa) || (null == a ? 0 : a.rb) || (null == a ? 0 : a.ed) || (null == a ? 0 : a.keepAlive) ? !1 : !Jh(this.context)
    };
    ri.prototype.ping = function() {
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
    ri.prototype.yd = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function si(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var ti = function(a) {
        this.context = a
    };
    ti.prototype.I = function(a) {
        return ui && !Jh(this.context) && void 0 !== si(this.context) && !(null == a ? 0 : a.ic) && "POST" !== (null == a ? void 0 : a.qa) && !(null == a ? 0 : a.rb) && !(null == a ? 0 : a.ed)
    };
    ti.prototype.N = function(a, b) {
        if (!this.I(b)) throw new Ee;
        return new vi(this.context, a)
    };
    var ui = !1,
        vi = function(a, b) {
            this.context = a;
            this.Eb = b;
            a = si(this.context);
            if (void 0 === a) throw Error();
            this.pf = new a(this.yc(), {})
        };
    vi.prototype.yc = function() {
        var a = this.Eb;
        return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
    };
    vi.prototype.deactivate = function() {
        this.pf.deactivate()
    };
    vi.prototype.sendNow = function() {
        this.pf.sendNow()
    };
    da.Object.defineProperties(vi.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Eb
            },
            set: function(a) {
                this.Eb = a;
                this.pf.setURL(this.yc())
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if ("GET" !== a) throw new Ee;
            }
        }
    });
    var yi = function(a) {
        this.context = a
    };
    yi.prototype.I = function(a) {
        if ((null == a ? 0 : a.ic) || "GET" === (null == a ? void 0 : a.qa) || (null == a ? 0 : a.rb) || (null == a ? 0 : a.ed) || (null == a ? 0 : a.keepAlive)) return !1;
        var b;
        return !Jh(this.context) && void 0 !== (null == (b = this.context.global.navigator) ? void 0 : b.sendBeacon)
    };
    yi.prototype.ping = function() {
        var a = this;
        return N(x.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.context.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    yi.prototype.yd = function(a, b, c) {
        this.ping.apply(this, u(x.apply(3, arguments)))
    };

    function zi(a) {
        return function(b) {
            return b.g(Ai(a, Xf(new M)))
        }
    }

    function V(a, b) {
        return function(c) {
            return c.g(Ai(a, bg(b)))
        }
    }

    function Ai(a, b) {
        function c(d) {
            return new L(function(e) {
                return d.subscribe(function(f) {
                    Ua(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Ua(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Ua(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return K(c, gg(), b, md(), c)
    };
    var Y = function(a) {
        this.value = a
    };
    Y.prototype.T = function(a) {
        return N(this.value).g(V(a, 1))
    };
    var Bi = new Y(!1);
    ec();
    Rh() || D("iPod");
    D("iPad");
    hc();
    gc();
    fc() && Sh();
    var Ci = {},
        Di = null,
        Ei = Wh || Xh || "function" == typeof Ia.btoa,
        Gi = function(a) {
            var b;
            z(La(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            Fi();
            b = Ci[b];
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
        Ii = function(a) {
            var b =
                a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Hi(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Hi = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Di[l];
                    if (null != m) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("ba`" + l);
                }
                return k
            }
            Fi();
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
        Fi = function() {
            if (!Di) {
                Di = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ci[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = Di[f];
                        void 0 === g ? Di[f] = e : z(g === e)
                    }
                }
            }
        };

    function Ji(a) {
        var b = Ki(a);
        return null === b ? new Y(null) : b.g(P(function(c) {
            c = c.mb();
            if (Ei) c = Ia.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (255 < g) throw Error("aa");
                    d[e++] = g
                }
                c = Gi(d)
            }
            return c
        }), zf(1), V(a.h, 1))
    };

    function Li(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Mi = function(a) {
        this.value = a;
        this.We = new M
    };
    Mi.prototype.release = function() {
        this.We.next();
        this.We.complete();
        this.value = void 0
    };
    da.Object.defineProperties(Mi.prototype, {
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
                return this.We
            }
        }
    });
    var Ni = ["FRAME", "IMG", "IFRAME"],
        Oi = /^[01](px)?$/;

    function Pi(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function Qi(a) {
        if (a.readyState) return a.readyState;
        var b, c;
        return null == (b = a.contentWindow) ? void 0 : null == (c = b.document) ? void 0 : c.readyState
    }

    function Ri(a, b) {
        b = void 0 === b ? !1 : b;
        if ("IMG" === a.tagName) {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight)) return !0;
            var c;
            if (b && "none" === (null == (c = a.style) ? void 0 : c.display)) return !0
        }
        var d, e;
        return Oi.test(null != (d = a.getAttribute("width")) ? d : "") && Oi.test(null != (e = a.getAttribute("height")) ? e : "")
    }

    function Si(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        var g = void 0 === g ? !1 : g;
        if (a = Pi(a)) {
            e || (e = function(fa, E, A) {
                fa.addEventListener(E, A)
            });
            for (var h = !1, k = function(fa) {
                    h || (h = !0, b(fa))
                }, l, m = 2, r = 0; r < Ni.length; ++r)
                if (Ni[r] === a.tagName) {
                    m = 3;
                    l = [a];
                    break
                }
            l || (l = a.querySelectorAll(Ni.join(",")));
            var p = 0,
                v = 0,
                y = !g,
                C = a = !1;
            r = {};
            for (var B = 0; B < l.length; r = {
                    td: void 0
                }, B++) {
                var G = l[B];
                if (!Ri(G, g)) {
                    r.td = "IMG" === G.tagName;
                    if ("IMG" === G.tagName) var J = G.naturalWidth && G.naturalHeight ?
                        !0 : !1;
                    else try {
                        J = "complete" === Qi(G)
                    } catch (fa) {
                        J = void 0 === d ? !1 : d
                    }
                    if (J) a = !0, r.td && (y = !0);
                    else {
                        p++;
                        var X = function(fa) {
                            return function(E) {
                                p--;
                                !p && y && k(m);
                                fa.td && (E = E && "error" === E.type, v--, E || (y = !0), !v && C && y && k(m))
                            }
                        }(r);
                        e(G, "load", X);
                        r.td && (v++, e(G, "error", X))
                    }
                }
            }
            0 === v && (y = !0);
            l = null;
            if (0 === p && !a && "complete" === Ia.document.readyState) m = 5;
            else if (p || !a) {
                e(Ia, "load", function() {
                    !f || !v && y ? k(4) : C = !0
                });
                return
            }
            c && k(m)
        }
    };

    function Ti(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Ui(a, b) {
        Ti(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Vi(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Wi(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Xi(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = Wi(a);
            if (c.source && e) {
                var f;
                Ui(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Vi(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Yi(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var Zi = function(a, b) {
        var c = Yi(a);
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
                Ia.addEventListener("message", function(f) {
                    Xi(c, e, f)
                })
            }
    };
    var $i = function(a, b) {
            var c = this;
            this.global = a;
            this.xd = b;
            this.Pi = this.document ? ce(N(!0), Xd(this.document, "visibilitychange")).g(Ah(this.xd.B, 748), P(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), S()) : N("visible");
            this.Ki = this.document ? Xd(this.document, "DOMContentLoaded").g(Ah(this.xd.B, 739), zf(1)) : N(Li("DOMContentLoaded"))
        },
        aj = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        bj = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    $i.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    $i.prototype.querySelectorAll = function(a) {
        return this.document ? Lb(this.document.querySelectorAll(a)) : []
    };
    var cj = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    $i.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !cj(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return null === a ? null : new Mi(a)
    };
    var dj = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (void 0 === b.j || !a.document) return N(b).g(Ah(a.xd.B, 749));
            var d = new gd(1),
                e = function() {
                    d.next(b)
                };
            c || Zi(b.j, e);
            Si(b.j, e);
            return d.g(Ah(a.xd.B, 749), zf(1))
        },
        ej = function(a, b) {
            a.document && (a.document.body && "complete" === aj(a) ? a.document.body.appendChild(b) : a.document.addEventListener("DOMContentLoaded", function() {
                var c, d;
                null == (c = a.document) || null == (d = c.body) || d.appendChild(b)
            }))
        },
        fj = function(a, b, c) {
            var d, e, f;
            return Ca(function(g) {
                if (1 == g.P) {
                    d = a.global.document.createElement("iframe");
                    e = new Promise(function(k) {
                        d.onload = k;
                        d.onerror = k
                    });
                    if (b instanceof mb && b.constructor === mb) var h = b.xg;
                    else bb("expected object of type TrustedResourceUrl, got '%s' of type %s", b, Ka(b)), h = "type_error:TrustedResourceUrl";
                    d.src = h.toString();
                    ej(a, d);
                    d.style.display = "none";
                    return sa(g, e, 2)
                }
                f = d.contentWindow;
                if (!f) return g.return();
                f.postMessage(c, "*");
                return g.return(d)
            })
        };
    da.Object.defineProperties($i.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Ph(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var gj = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function hj(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function ij(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function jj(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var kj = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = kj.prototype;
    n.te = function() {
        return this.right - this.left
    };
    n.re = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new kj(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof kj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        Ma(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
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
        a instanceof gi ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (cb(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
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

    function lj(a, b) {
        if (a) throw Error("ca");
        b.push(65533)
    }

    function mj(a, b) {
        b = String.fromCharCode.apply(null, b);
        return null == a ? b : a + b
    }
    var nj = void 0,
        oj, pj, qj = "undefined" !== typeof TextDecoder,
        rj, sj = "function" === typeof String.prototype.ni,
        tj = "undefined" !== typeof TextEncoder;
    var uj = "undefined" !== typeof Uint8Array,
        vj = !Uh && "function" === typeof btoa;

    function wj(a) {
        if (!vj) return Gi(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var xj = /[-_.]/g,
        yj = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function zj(a) {
        return yj[a] || ""
    }

    function Aj(a) {
        if (!vj) return Ii(a);
        var b = a;
        xj.test(b) && (b = b.replace(xj, zj));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("ea`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var Bj, Cj = {};
    var Dj, Fj = function(a, b) {
        if (b !== Cj) throw Error("fa");
        this.Qc = a;
        if (null != a && 0 === a.length) throw Error("ga");
        this.dontPassByteStringToStructuredClone = Ej
    };
    Fj.prototype.isEmpty = function() {
        return null == this.Qc
    };

    function Ej() {};

    function Gj(a) {
        return Array.prototype.slice.call(a)
    };

    function Hj(a, b) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(a) : b
    }
    var Ij = Hj("INTERNAL_ARRAY_STATE"),
        Jj = Hj("defaultInstance", "0di");
    z(13 === Math.round(Math.log2(Math.max.apply(Math, u(Object.values({
        Tj: 1,
        Rj: 2,
        Qj: 4,
        Xj: 8,
        Wj: 16,
        Vj: 32,
        Ej: 64,
        ak: 128,
        Pj: 256,
        Oj: 512,
        Sj: 1024,
        Ij: 2048,
        Zj: 4096,
        Jj: 8192
    }))))));

    function Kj(a) {
        z((a & 16777215) == a)
    }
    var Lj = Ij ? function(a, b) {
            Kj(b);
            hb(a, "state is only maintained on arrays.");
            a[Ij] |= b
        } : function(a, b) {
            Kj(b);
            hb(a, "state is only maintained on arrays.");
            void 0 !== a.ua ? a.ua |= b : Object.defineProperties(a, {
                ua: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Mj = Ij ? function(a, b) {
            Kj(b);
            hb(a, "state is only maintained on arrays.");
            a[Ij] &= ~b
        } : function(a, b) {
            Kj(b);
            hb(a, "state is only maintained on arrays.");
            void 0 !== a.ua && (a.ua &= ~b)
        };

    function Nj(a, b, c) {
        return c ? a | b : a & ~b
    }
    var Oj = Object.getOwnPropertyDescriptor(Array.prototype, "oi");
    Object.defineProperties(Array.prototype, {
        oi: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Z(this),
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
                var d = Pj(b);
                536870912 !== d && c.push("pivot: " + d);
                d = c.join(",");
                return Oj ? Oj.get.call(this) +
                    "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Z = Ij ? function(a) {
        hb(a, "state is only maintained on arrays.");
        return a[Ij] | 0
    } : function(a) {
        hb(a, "state is only maintained on arrays.");
        return a.ua | 0
    };

    function Qj(a, b) {
        z(b & 64, "state for messages must be constructed");
        z(0 === (b & 5), "state for messages should not contain repeated field state");
        var c = Pj(b),
            d = a.length;
        z(c + Rj(b) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && z("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        z((null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Sj = Ij ? function(a) {
            hb(a, "state is only maintained on arrays.");
            var b = a[Ij];
            Qj(a, b);
            return b
        } : function(a) {
            hb(a, "state is only maintained on arrays.");
            var b = a.ua;
            Qj(a, b);
            return b
        },
        Tj = Ij ? function(a, b) {
            hb(a, "state is only maintained on arrays.");
            Kj(b);
            a[Ij] = b;
            return a
        } : function(a, b) {
            hb(a, "state is only maintained on arrays.");
            Kj(b);
            void 0 !== a.ua ? a.ua = b : Object.defineProperties(a, {
                ua: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };

    function Uj(a) {
        return !!(Z(a) & 2)
    }

    function Vj(a, b) {
        Tj(b, (a | 0) & -14591)
    }

    function Wj(a, b) {
        Tj(b, (a | 34) & -14557)
    }

    function Xj(a, b) {
        cb(b);
        z(0 < b && 1023 >= b || 536870912 === b);
        return a & -16760833 | (b & 1023) << 14
    }

    function Pj(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }

    function Rj(a) {
        return +!!(a & 512) - 1
    };

    function Yj(a) {
        jb(a, Fj);
        if (Cj !== Cj) throw Error("fa");
        var b = a.Qc;
        null == b || uj && null != b && b instanceof Uint8Array || ("string" === typeof b ? b = Aj(b) : (bb("Cannot coerce to Uint8Array: " + Ka(b)), b = null));
        return (null == b ? b : a.Qc = b) || Bj || (Bj = new Uint8Array(0))
    };
    var Zj, ak = {};

    function bk(a) {
        var b = a.zi === ak;
        z(!Zj || b === a instanceof Zj);
        return b
    }
    var ck = {};

    function dk(a) {
        var b = !(!a || "object" !== typeof a || a.lk !== ck);
        z(b === a instanceof Map);
        return b && 0 === jb(a, Map).size
    }

    function ek(a, b) {
        cb(a);
        z(0 < a);
        z(0 === b || -1 === b);
        return a + b
    }

    function fk(a, b) {
        cb(a);
        z(0 <= a);
        z(0 === b || -1 === b);
        return a - b
    }

    function gk(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var hk;

    function ik(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Z(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Tj(a, d | 1);
        return !0
    }
    var jk, kk = [];
    Tj(kk, 55);
    jk = Object.freeze(kk);

    function lk(a) {
        if (a & 2) throw Error("ha");
    }
    var mk = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function nk() {}
    var ok;

    function pk(a, b) {
        hb(a);
        if (b) {
            ok || (ok = Symbol("unknownBinaryFields"));
            var c = a[ok];
            c ? c.push(b) : a[ok] = [b]
        }
    }

    function qk(a, b) {
        hb(a);
        hb(b);
        (b = ok ? hb(b)[ok] : void 0) && (a[ok] = Gj(b))
    }
    var rk;

    function sk(a, b) {
        var c = Z(hb(a));
        b || z(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && bk(g) && (Uj(g.u) ? e = !0 : d = !0)
            });
            f && z(!e && !d);
            c && z(!f && !d);
            b && z(!f && !e)
        }
        tk(a)
    }

    function tk(a) {
        var b = Z(a),
            c = b & 4,
            d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        z(c && 1 >= d || !c && 0 === d, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Z(a))
            for (b = 0; b < a.length; b++) "string" !== typeof a[b] && bb("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var uk = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var vk = "function" === typeof Uint8Array.prototype.slice,
        wk = 0,
        xk = 0,
        yk;

    function zk(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = t(Ak(c, a)), b = c.next().value, a = c.next().value, c = b);
        wk = c >>> 0;
        xk = a >>> 0
    }

    function Bk(a) {
        z(8 >= a);
        return yk || (yk = new DataView(new ArrayBuffer(8)))
    }

    function Ck() {
        var a = wk,
            b = xk;
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else "function" === typeof BigInt ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), z(b), c = b + Dk(c) + Dk(a));
        return c
    }

    function Dk(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Ek(a) {
        z(0 < a.length);
        if (16 > a.length) zk(Number(a));
        else if ("function" === typeof BigInt) a = BigInt(a), wk = Number(a & BigInt(4294967295)) >>> 0, xk = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            z(0 < a.length);
            var b = +("-" === a[0]);
            xk = wk = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), xk *= 1E6, wk = 1E6 * wk + d, 4294967296 <= wk && (xk += Math.trunc(wk / 4294967296), xk >>>= 0, wk >>>= 0);
            b && (b = t(Ak(wk, xk)), a = b.next().value, b = b.next().value, wk = a, xk = b)
        }
    }

    function Ak(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function Fk(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        return a
    };

    function Gk(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    }

    function Hk(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Ik(a) {
        if ("boolean" !== typeof a) throw Error("ia`" + Ka(a) + "`" + a);
        return a
    }

    function Jk(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    }
    var Kk = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Lk(a) {
        var b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Kk.test(a)
    }

    function Mk(a) {
        if (!Number.isFinite(a)) throw a = "Expected enum as finite number but got " + Ka(a) + ": " + a, Fk(a);
        return a | 0
    }

    function Nk(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function Ok(a) {
        return "Expected uint32 as finite number but got " + Ka(a) + ": " + a
    }

    function Pk(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Qk(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }

    function Rk(a) {
        z(0 > a || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        z(Number.isInteger(a));
        if (0 > a) {
            zk(a);
            var b = Ck();
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Qk(String(a))) return a;
        zk(a);
        return 4294967296 * xk + (wk >>> 0)
    }

    function Sk(a) {
        if (null == a) return a;
        if (Lk(a)) {
            if ("string" === typeof a) {
                z(Lk(a));
                z(!0);
                var b = Math.trunc(Number(a));
                Number.isSafeInteger(b) && 0 <= b ? a = String(b) : (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), z(-1 === a.indexOf(".")), Qk(a) || (Ek(a), a = Ck()));
                return a
            }
            if ("number" === typeof a) return z(Lk(a)), z(!0), a = Math.trunc(a), 0 <= a && Number.isSafeInteger(a) ? a : Rk(a)
        }
    }

    function Tk(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Uk(a, b, c) {
        if (null != a && "object" === typeof a && bk(a)) return a;
        if (Array.isArray(a)) {
            var d = Z(a),
                e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && Tj(a, e);
            return new b(a)
        }
    };
    var Vk = function() {
        throw Error("la");
    };
    if (mk) {
        var Wk = function() {
                throw Error("ma");
            },
            Xk = {};
        Object.defineProperties(Vk, (Xk[Symbol.hasInstance] = {
            value: Wk,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, Xk));
        z(Vk[Symbol.hasInstance] === Wk, "defineProperties did not work: was it monkey-patched?")
    };
    var Yk;

    function Zk(a, b) {
        z(!!(Z(b) & 32));
        Yk = b;
        a = new a(b);
        Yk = void 0;
        return a
    }
    var $k, al;

    function bl(a) {
        switch (typeof a) {
            case "boolean":
                return $k || ($k = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? al || (al = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return hb(a), z(2 === a.length || 3 === a.length && !0 === a[2]), z(null == a[0] || "number" === typeof a[0] && 0 <= a[0]), z(null == a[1] || "string" === typeof a[1]), a
        }
    }

    function cl(a, b) {
        hb(b);
        return dl(a, b[0], b[1])
    }

    function dl(a, b, c) {
        null == a && (a = Yk);
        Yk = void 0;
        if (null != a)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && sk(e)
            }
        if (null == a) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = Xj(e, b));
        else {
            if (!Array.isArray(a)) throw Error("na`" + JSON.stringify(a) + "`" + Ka(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("oa");
            e = Z(a);
            if (e & 2048) throw Error("pa");
            if (e & 64) return Qj(a, e), a;
            e |= 64;
            if (c && (e |= 512, c !== a[0])) throw Error("qa`" + c + "`" + JSON.stringify(a[0]) + "`" + Ka(a[0]));
            a: {
                d = a;c = e;
                if (e = d.length) {
                    var f =
                        e - 1;
                    if (gk(d[f])) {
                        c |= 256;
                        b = fk(f, Rj(c));
                        if (1024 <= b) throw Error("ra`" + b);
                        e = Xj(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, fk(e, Rj(c)));
                    if (1024 < b) throw Error("sa`" + e);
                    e = Xj(c, b)
                } else e = c
            }
        }
        Tj(a, e);
        z(e & 64);
        return a
    };

    function el(a, b) {
        return fl(b)
    }

    function fl(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ik(a, void 0, 0)) return
                    } else {
                        if (uj && null != a && a instanceof Uint8Array) return wj(a);
                        if (a instanceof Fj) {
                            var b = a.Qc;
                            return null == b ? "" : "string" === typeof b ? b : a.Qc = wj(b)
                        }
                    }
        }
        return a
    };

    function gl(a, b, c) {
        var d = Gj(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) z(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        qk(d, a);
        return d
    }

    function hl(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = ik(a, void 0, 0) ? void 0 : e && Z(a) & 2 ? a : il(a, b, c, void 0 !== d, e);
            else if (gk(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = hl(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function il(a, b, c, d, e) {
        var f = d || c ? Z(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = Gj(a), h = 0; h < g.length; h++) g[h] = hl(g[h], b, c, d, e);
        c && (qk(g, a), c(f, g));
        return g
    }

    function jl(a) {
        return bk(a) ? a.toJSON() : fl(a)
    };

    function kl(a, b, c) {
        c = void 0 === c ? Wj : c;
        if (null != a) {
            if (uj && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Z(a);
                if (d & 2) return a;
                sk(a);
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Tj(a, (d | 34) & -12293) : il(a, kl, d & 4 ? Wj : c, !0, !0)
            }
            bk(a) && (z(bk(a)), c = a.u, d = Sj(c), a = d & 2 ? a : Zk(a.constructor, ll(c, d, !0)));
            return a
        }
    }

    function ll(a, b, c) {
        var d = c || b & 2 ? Wj : Vj,
            e = !!(b & 32);
        a = gl(a, b, function(f) {
            return kl(f, e, d)
        });
        Lj(a, 32 | (c ? 2 : 0));
        return a
    }

    function ml(a) {
        var b = a.u,
            c = Sj(b);
        return c & 2 ? Zk(a.constructor, ll(b, c, !1)) : a
    };
    var ol = function(a, b) {
        a = a.u;
        return nl(a, Sj(a), b)
    };

    function pl(a, b, c, d) {
        b = ek(d, Rj(b));
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    }
    var nl = function(a, b, c, d) {
            if (-1 === c) return null;
            var e = Pj(b);
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                    if (pl(a, b, e, c)) throw Error("ta`" + c);
                    return d
                }
                return pl(a, b, e, c)
            }
        },
        rl = function(a, b, c) {
            var d = a.u,
                e = Sj(d);
            lk(e);
            ql(d, e, b, c);
            return a
        };

    function ql(a, b, c, d) {
        z(!gk(d), "Invalid object passed to a setter");
        var e = Pj(b);
        if (c >= e) {
            z(536870912 !== e);
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (null == d) return f;
                g = ek(e, Rj(b));
                z(g >= a.length && Number.isInteger(g) && 4294967295 > g, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[ek(c, Rj(b))] = void 0);
            f !== b && Tj(a, f);
            return f
        }
        a[ek(c, Rj(b))] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var tl = function(a, b, c, d) {
        return void 0 !== sl(a, b, c, void 0 === d ? !1 : d)
    };

    function ul(a, b) {
        if (!a) return a;
        z(Uj(b) ? Uj(a.u) : !0);
        return a
    }

    function vl(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        sk(a, c);
        z(!!(Z(a) & 1));
        c || (d || z(Object.isFrozen(a) || !(Z(a) & 32)), z(Uj(b) ? Object.isFrozen(a) : !0));
        return a
    }

    function wl(a, b, c, d, e) {
        z((d & 3) === d);
        var f = b & 2;
        e = nl(a, b, c, e);
        Array.isArray(e) || (e = jk);
        var g = !(d & 2);
        d = !(d & 1);
        var h = !!(b & 32),
            k = Z(e);
        0 !== k || !h || f || g ? k & 1 || (k |= 1, Tj(e, k)) : (k |= 33, Tj(e, k));
        f ? (a = !1, k & 2 || (Lj(e, 34), a = !!(4 & k)), (d || a) && Object.freeze(e)) : (f = !!(2 & k) || !!(2048 & k), d && f ? (e = Gj(e), f = 1, h && !g && (f |= 32), Tj(e, f), ql(a, b, c, e)) : g && k & 32 && !f && Mj(e, 32));
        return e
    }
    var xl = function(a, b) {
        var c = void 0 === c ? !1 : c;
        return vl(wl(a, Sj(a), b, 2, c), a, !1, !0)
    };

    function yl(a, b, c) {
        a = nl(a, b, c);
        return Array.isArray(a) ? a : jk
    }

    function zl(a, b, c) {
        0 === a && (a = Al(a, b, c));
        return a = Nj(a, 1, !0)
    }

    function Bl(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    var Cl = function(a, b, c, d) {
        var e = Sj(a);
        lk(e);
        d = nl(a, e, c, d);
        if (null != d && bk(d)) return b = ml(d), b !== d && ql(a, e, c, b), b.u;
        if (Array.isArray(d)) {
            var f = Z(d);
            f = f & 2 ? ll(d, f, !1) : d;
            f = cl(f, b)
        } else f = cl(void 0, b);
        f !== d && ql(a, e, c, f);
        return f
    };

    function sl(a, b, c, d) {
        a = a.u;
        var e = Sj(a);
        d = nl(a, e, c, d);
        b = Uk(d, b, e);
        b !== d && null != b && ql(a, e, c, b);
        return ul(b, a)
    }
    var El = function(a) {
            var b = Dl;
            (a = sl(a, b, 2, !1)) ? b = a: (a = b[Jj]) ? b = a : (a = new b, Lj(a.u, 34), b = b[Jj] = a);
            return b
        },
        Fl = function(a, b, c) {
            b = sl(a, b, c, !1);
            if (null == b) return b;
            a = a.u;
            var d = Sj(a);
            if (!(d & 2)) {
                var e = ml(b);
                e !== b && (b = e, ql(a, d, c, b))
            }
            return ul(b, a)
        },
        Hl = function(a) {
            var b = Gl;
            a = a.u;
            var c = Sj(a),
                d;
            var e = !!e;
            d && (d = !(2 & c));
            var f = yl(a, c, 10),
                g = Z(f),
                h = !!(4 & g);
            if (!h) {
                g = zl(g, c, e);
                var k = f,
                    l = c,
                    m;
                (m = !!(2 & g)) && (l = Nj(l, 2, !0));
                for (var r = !m, p = !0, v = 0, y = 0; v < k.length; v++) {
                    var C = Uk(k[v], b, l);
                    if (C instanceof b) {
                        if (!m) {
                            var B = Uj(C.u);
                            r && (r = !B);
                            p && (p = B)
                        }
                        k[y++] = C
                    }
                }
                y < v && (k.length = y);
                g = Nj(g, 4, !0);
                g = Nj(g, 16, p);
                g = Nj(g, 8, r);
                Tj(k, g);
                m && Object.freeze(k)
            }
            b = !!(8 & g) || !f.length;
            if (d && !b) {
                Bl(g) && (f = Gj(f), g = Al(g, c, e), ql(a, c, 10, f));
                d = f;
                b = g;
                for (c = 0; c < d.length; c++) k = d[c], g = ml(k), k !== g && (d[c] = g);
                b = Nj(b, 8, !0);
                b = Nj(b, 16, !d.length);
                Tj(d, b);
                g = b
            }
            Bl(g) || (d = g, g = Nj(g, !f.length || 16 & g && (!h || 32 & g) ? 2 : 2048, !0), g !== d && Tj(f, g), Object.freeze(f));
            if (e) a = f;
            else {
                e = f;
                f = !1;
                f = void 0 === f ? !1 : f;
                h = Uj(a);
                d = Uj(e);
                b = Object.isFrozen(e) && d;
                vl(e, a, f);
                if (h || d) f ? z(d) : z(b);
                z(!!(Z(e) &
                    4));
                if (d && e.length)
                    for (f = 0; 1 > f; f++) ul(e[f], a);
                a = e
            }
            return a
        };

    function Al(a, b, c) {
        a = Nj(a, 2, !!(2 & b));
        a = Nj(a, 32, !!(32 & b) && c);
        return a = Nj(a, 2048, !1)
    }
    var Il = function(a, b) {
        var c = void 0;
        a = a.u;
        var d = Sj(a),
            e = 2 & d ? 1 : 2;
        c = !!c;
        var f = yl(a, d, b),
            g = Z(f);
        tk(f);
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f)) f = Gj(f), g = Al(g, d, c), d = ql(a, d, b, f);
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = Nk(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = zl(g, d, c);
            g = Nj(g, 20, !0);
            g = Nj(g, 4096, !1);
            g = Nj(g, 8192, !1);
            Tj(f, g);
            2 & g && Object.freeze(f)
        }
        Bl(g) || (h = g, (k = 1 === e) ? g = Nj(g, 2, !0) : c || (g = Nj(g, 32, !1)), g !== h && Tj(f, g), k && Object.freeze(f));
        2 === e && Bl(g) && (f = Gj(f), g = Al(g, d, c), Tj(f, g), ql(a, d, b, f));
        tk(f);
        return c ?
            f : vl(f, a, !1, c)
    };

    function Jl(a, b) {
        return null != a ? a : b
    }
    var Kl = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            return Jl(Jk(ol(a, b)), c)
        },
        Ll = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return Jl(Nk(ol(a, b)), c)
        },
        Ml = function(a) {
            var b = void 0 === b ? "" : b;
            return Jl(Tk(ol(a, 2)), b)
        },
        Nl = function(a) {
            a = Jk(ol(a, 5));
            return null == a ? void 0 : a
        },
        Ol = function(a, b) {
            a = Tk(ol(a, b));
            return null == a ? void 0 : a
        },
        Pl = function(a, b) {
            if (null != b) {
                if ("number" !== typeof b) throw Fk(Ok(b));
                if (!Number.isFinite(b)) throw Fk(Ok(b));
                b >>>= 0
            }
            rl(a, 1, b)
        },
        Ql = function(a, b, c) {
            if (null != c && "string" !== typeof c) throw Error("ja`" + c + "`" +
                Ka(c));
            return rl(a, b, c)
        };
    if ("undefined" !== typeof Proxy) {
        var Sl = Rl;
        new Proxy({}, {
            getPrototypeOf: Sl,
            setPrototypeOf: Sl,
            isExtensible: Sl,
            preventExtensions: Sl,
            getOwnPropertyDescriptor: Sl,
            defineProperty: Sl,
            has: Sl,
            get: Sl,
            set: Sl,
            deleteProperty: Sl,
            apply: Sl,
            construct: Sl
        })
    }

    function Rl() {
        throw Error("ua");
        throw Error();
    };
    var Tl = function(a, b, c) {
        jb(this, Tl, "The message constructor should only be used by subclasses");
        z(this.constructor !== Tl, "Message is an abstract class and cannot be directly constructed");
        this.u = dl(a, b, c);
        this.preventPassingToStructuredClone = nk
    };
    n = Tl.prototype;
    n.toJSON = function() {
        if (hk) var a = Ul(this, this.u, !1);
        else a = this.u, hb(a), a = il(a, jl, void 0, void 0, !1), a = Ul(this, a, !0);
        return a
    };
    n.mb = function() {
        hk = !0;
        try {
            return JSON.stringify(this.toJSON(), el)
        } finally {
            hk = !1
        }
    };
    n.getExtension = function(a) {
        jb(this, a.Nh);
        var b = jb(this, Tl);
        b = a.Jb ? a.He ? a.qc(b, a.Jb, a.Lb, void 0 !== uk ? 1 : 2, !0) : a.qc(b, a.Jb, a.Lb, !0) : a.He ? a.qc(b, a.Lb, void 0 !== uk ? 1 : 2, !0) : a.qc(b, a.Lb, a.defaultValue, !0);
        return a.kk && null == b ? a.defaultValue : b
    };
    n.hasExtension = function(a) {
        z(!a.He, "repeated extensions don't support hasExtension");
        if (a.Jb) a = tl(this, a.Jb, a.Lb, !0);
        else {
            z(!a.He, "repeated extensions don't support getExtensionOrUndefined");
            jb(this, a.Nh);
            var b = jb(this, Tl);
            a = a.Jb ? a.qc(b, a.Jb, a.Lb, !0) : a.qc(b, a.Lb, null, !0);
            a = void 0 !== (null === a ? void 0 : a)
        }
        return a
    };
    n.clone = function() {
        var a = jb(this, Tl);
        z(bk(a));
        var b = a.u,
            c = Sj(b);
        return Zk(a.constructor, ll(b, c, !1))
    };
    n.sb = function() {
        return Uj(this.u)
    };
    Zj = Tl;
    Tl.prototype.zi = ak;
    Tl.prototype.toString = function() {
        return Ul(this, this.u, !1).toString()
    };

    function Ul(a, b, c) {
        var d = Vb ? void 0 : a.constructor.Ad;
        var e = Sj(c ? a.u : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (gk(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g) {
                    var m = g[l];
                    if (Array.isArray(m)) {
                        var r = m;
                        if (ik(m, d, +l) || dk(m)) m = null;
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
        for (l = Rj(e); 0 < a; a--) {
            p = a - 1;
            c = b[p];
            p = fk(p, l);
            if (null != c && !ik(c, d, p) && !dk(c)) break;
            var v = !0
        }
        if (!f && !v) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function Vl(a) {
        if ("string" === typeof a) return {
            buffer: Aj(a),
            sb: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            sb: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            sb: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            sb: !1
        };
        if (a.constructor === Fj) return {
            buffer: Yj(a),
            sb: !0
        };
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            sb: !1
        };
        throw Error("Fa");
    };
    var Wl = function(a, b) {
        this.Ba = null;
        this.Yd = !1;
        this.K = this.Ca = this.Va = 0;
        this.uc(a, void 0, void 0, b)
    };
    n = Wl.prototype;
    n.uc = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        this.Yc = void 0 === d.Yc ? !1 : d.Yc;
        a && (a = Vl(a), this.Ba = a.buffer, this.Yd = a.sb, this.Va = b || 0, this.Ca = void 0 !== c ? this.Va + c : this.Ba.length, this.K = this.Va)
    };
    n.Rf = function() {
        this.clear();
        100 > Xl.length && Xl.push(this)
    };
    n.clear = function() {
        this.Ba = null;
        this.Yd = !1;
        this.K = this.Ca = this.Va = 0;
        this.Yc = !1
    };
    n.setEnd = function(a) {
        this.Ca = a
    };
    n.reset = function() {
        this.K = this.Va
    };
    n.Z = function() {
        return this.K
    };
    n.advance = function(a) {
        Yl(this, this.K + a)
    };
    var Zl = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = a.Ba,
                f = a.K;
            do {
                var g = e[f++];
                b |= (g & 127) << d;
                d += 7
            } while (32 > d && g & 128);
            32 < d && (c |= (g & 127) >> 4);
            for (d = 3; 32 > d && g & 128; d += 7) g = e[f++], c |= (g & 127) << d;
            Yl(a, f);
            if (128 > g) return 4294967296 * (c >>> 0) + (b >>> 0 >>> 0);
            throw Error("Ca");
        },
        Yl = function(a, b) {
            a.K = b;
            if (b > a.Ca) throw Error("Da`" + b + "`" + a.Ca);
        },
        $l = function(a) {
            var b = a.Ba,
                c = a.K,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 &&
                    b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("Ca");
            Yl(a, c);
            return e
        },
        am = function(a) {
            return $l(a) >>> 0
        },
        bm = function(a) {
            return Zl(a)
        },
        cm = function(a) {
            var b = a.Ba,
                c = a.K,
                d = b[c + 0],
                e = b[c + 1],
                f = b[c + 2];
            b = b[c + 3];
            a.advance(4);
            return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
        },
        dm = function(a) {
            for (var b = 0, c = a.K, d = c + 10, e = a.Ba; c < d;) {
                var f = e[c++];
                b |= f;
                if (0 === (f & 128)) return Yl(a, c), !!(b & 127)
            }
            throw Error("Ca");
        },
        em = function(a) {
            return $l(a)
        },
        fm = function(a, b) {
            if (0 > b) throw Error("Ea`" + b);
            var c = a.K,
                d = c + b;
            if (d > a.Ca) throw Error("Da`" +
                (a.Ca - c) + "`" + b);
            a.K = d;
            return c
        };
    Wl.prototype.zg = function(a, b) {
        var c = fm(this, a),
            d = z(this.Ba);
        if (qj) {
            var e;
            b ? (e = oj) || (e = oj = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = pj) || (e = pj = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = 0 === c && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (m) {
                if (b) {
                    if (void 0 === nj) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (r) {}
                        try {
                            e.decode(new Uint8Array([97])), nj = !0
                        } catch (r) {
                            nj = !1
                        }
                    }
                    b = !nj
                }
                b && (oj = void 0);
                throw m;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], 128 > k ? g.push(k) : 224 > k ? c >= a ? lj(b, g) : (l =
                d[c++], 194 > k || 128 !== (l & 192) ? (c--, lj(b, g)) : (k = (k & 31) << 6 | l & 63, z(128 <= k && 2047 >= k), g.push(k))) : 240 > k ? c >= a - 1 ? lj(b, g) : (l = d[c++], 128 !== (l & 192) || 224 === k && 160 > l || 237 === k && 160 <= l || 128 !== ((e = d[c++]) & 192) ? (c--, lj(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, z(2048 <= k && 65535 >= k), z(55296 > k || 57343 < k), g.push(k))) : 244 >= k ? c >= a - 2 ? lj(b, g) : (l = d[c++], 128 !== (l & 192) || 0 !== (k << 28) + (l - 144) >> 30 || 128 !== ((e = d[c++]) & 192) || 128 !== ((f = d[c++]) & 192) ? (c--, lj(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, z(65536 <= k && 1114111 >= k), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : lj(b, g), 8192 <= g.length && (h = mj(h, g), g.length = 0);
            z(c === a, "expected " + c + " === " + a);
            g = mj(h, g)
        }
        return g
    };
    Wl.prototype.Te = function(a) {
        if (0 == a) return Dj || (Dj = new Fj(null, Cj));
        var b = fm(this, a);
        if (this.Yc && this.Yd) b = this.Ba.subarray(b, b + a);
        else {
            var c = z(this.Ba);
            a = b + a;
            b = b === a ? Bj || (Bj = new Uint8Array(0)) : vk ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        jb(b, Uint8Array);
        return 0 == b.length ? Dj || (Dj = new Fj(null, Cj)) : new Fj(b, Cj)
    };
    var Xl = [];
    z(!0);
    var hm = function(a, b) {
            if (Xl.length) {
                var c = Xl.pop();
                c.uc(a, void 0, void 0, b);
                a = c
            } else a = new Wl(a, b);
            this.l = a;
            this.La = this.l.Z();
            this.m = this.Fa = this.Tb = -1;
            gm(this, b)
        },
        gm = function(a, b) {
            b = void 0 === b ? {} : b;
            a.ke = void 0 === b.ke ? !1 : b.ke
        };
    hm.prototype.Rf = function() {
        this.l.clear();
        this.m = this.Tb = this.Fa = -1;
        100 > im.length && im.push(this)
    };
    hm.prototype.Z = function() {
        return this.l.Z()
    };
    hm.prototype.reset = function() {
        this.l.reset();
        this.La = this.l.Z();
        this.m = this.Tb = this.Fa = -1
    };
    hm.prototype.advance = function(a) {
        this.l.advance(a)
    };
    var jm = function(a) {
            var b = a.l;
            if (b.K == b.Ca) return !1; - 1 !== a.Fa && (b = a.l.Z(), a.l.K = a.La, am(a.l), 4 === a.m || 3 === a.m ? z(b === a.l.Z(), "Expected to not advance the cursor.  Group tags do not have values.") : z(b > a.l.Z(), "Expected to read the field, did you forget to call a read or skip method?"), a.l.K = b);
            a.La = a.l.Z();
            b = am(a.l);
            var c = b >>> 3,
                d = b & 7;
            if (!(0 <= d && 5 >= d)) throw Error("xa`" + d + "`" + a.La);
            if (1 > c) throw Error("ya`" + c + "`" + a.La);
            a.Fa = b;
            a.Tb = c;
            a.m = d;
            return !0
        },
        lm = function(a) {
            if (2 != a.m) bb("Invalid wire type for skipDelimitedField"),
                km(a);
            else {
                var b = am(a.l);
                a.l.advance(b)
            }
        },
        km = function(a) {
            switch (a.m) {
                case 0:
                    0 != a.m ? (bb("Invalid wire type for skipVarintField"), km(a)) : dm(a.l);
                    break;
                case 1:
                    z(1 === a.m);
                    a.l.advance(8);
                    break;
                case 2:
                    lm(a);
                    break;
                case 5:
                    z(5 === a.m);
                    a.l.advance(4);
                    break;
                case 3:
                    var b = a.Tb;
                    do {
                        if (!jm(a)) throw Error("Aa");
                        if (4 == a.m) {
                            if (a.Tb != b) throw Error("Ba");
                            break
                        }
                        km(a)
                    } while (1);
                    break;
                default:
                    throw Error("xa`" + a.m + "`" + a.La);
            }
        },
        nm = function(a) {
            var b = a.La;
            km(a);
            return mm(a, b)
        },
        mm = function(a, b) {
            if (!a.ke) {
                var c = a.l.Z();
                a.l.K = b;
                b = a.l.Te(c - b);
                z(c == a.l.Z());
                return b
            }
        },
        om = function(a, b, c) {
            z(2 == a.m);
            var d = a.l.Ca,
                e = am(a.l),
                f = a.l.Z() + e,
                g = f - d;
            0 >= g && (a.l.setEnd(f), c(b, a, void 0, void 0, void 0), g = f - a.l.Z());
            if (g) throw Error("wa`" + e + "`" + (e - g));
            a.l.K = f;
            a.l.setEnd(d)
        },
        qm = function(a, b) {
            z(11 === a.Fa);
            for (var c = 0, d = 0; jm(a) && 4 != a.m;) 16 !== a.Fa || c ? 26 !== a.Fa || d ? km(a) : c ? (d = -1, om(a, c, b)) : (d = a.La, lm(a)) : (c = pm(a), d && (z(0 < d), a.Fa = -1, a.m = -1, a.l.K = d, d = 0));
            if (12 !== a.Fa || !d || !c) throw Error("za");
        },
        rm = function(a) {
            z(0 == a.m);
            return $l(a.l)
        },
        pm = function(a) {
            z(0 ==
                a.m);
            return am(a.l)
        },
        sm = function(a) {
            z(0 == a.m);
            return Zl(a.l)
        },
        tm = function(a) {
            z(0 == a.m);
            return $l(a.l)
        };
    hm.prototype.zg = function() {
        return um(this)
    };
    var um = function(a) {
        z(2 == a.m);
        var b = am(a.l);
        return a.l.zg(b, !0)
    };
    hm.prototype.Te = function() {
        z(2 == this.m);
        var a = am(this.l);
        return this.l.Te(a)
    };
    var vm = function(a, b, c) {
            z(2 == a.m);
            var d = am(a.l);
            for (d = a.l.Z() + d; a.l.Z() < d;) c.push(b(a.l))
        },
        im = [];
    var wm = function(a, b) {
            this.pi = a >>> 0;
            this.Zh = b >>> 0
        },
        ym = function(a) {
            if (!a) return xm || (xm = new wm(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Ek(a);
            return new wm(wk, xk)
        },
        xm;
    var zm = function() {
        this.F = []
    };
    zm.prototype.length = function() {
        return this.F.length
    };
    zm.prototype.end = function() {
        var a = this.F;
        this.F = [];
        return a
    };
    zm.prototype.Kd = function(a, b) {
        z(a == Math.floor(a));
        z(b == Math.floor(b));
        z(0 <= a && 4294967296 > a);
        for (z(0 <= b && 4294967296 > b); 0 < b || 127 < a;) this.F.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
        this.F.push(a)
    };
    var Am = function(a, b) {
            z(b == Math.floor(b));
            for (z(0 <= b && 4294967296 > b); 127 < b;) a.F.push(b & 127 | 128), b >>>= 7;
            a.F.push(b)
        },
        Bm = function(a, b) {
            z(b == Math.floor(b));
            z(-2147483648 <= b && 2147483648 > b);
            if (0 <= b) Am(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.F.push(b & 127 | 128), b >>= 7;
                a.F.push(1)
            }
        };
    n = zm.prototype;
    n.Fb = function(a) {
        z(a == Math.floor(a));
        z(0 <= a && 4294967296 > a);
        this.F.push(a >>> 0 & 255);
        this.F.push(a >>> 8 & 255);
        this.F.push(a >>> 16 & 255);
        this.F.push(a >>> 24 & 255)
    };
    n.Zg = function(a) {
        z(a == Math.floor(a));
        z(0 <= a && 1.8446744073709552E19 > a);
        var b = a >>> 0;
        a = Math.floor((a - b) / 4294967296) >>> 0;
        wk = b;
        xk = a;
        this.Fb(wk);
        this.Fb(xk)
    };
    n.Yg = function(a) {
        z(a == Math.floor(a));
        z(-2147483648 <= a && 2147483648 > a);
        this.F.push(a >>> 0 & 255);
        this.F.push(a >>> 8 & 255);
        this.F.push(a >>> 16 & 255);
        this.F.push(a >>> 24 & 255)
    };
    n.tf = function(a) {
        z(Infinity == a || -Infinity == a || isNaN(a) || "number" === typeof a && -3.4028234663852886E38 <= a && 3.4028234663852886E38 >= a);
        var b = Bk(4);
        b.setFloat32(0, +a, !0);
        xk = 0;
        wk = b.getUint32(0, !0);
        this.Fb(wk)
    };
    n.rf = function(a) {
        z("number" === typeof a || "Infinity" === a || "-Infinity" === a || "NaN" === a);
        var b = Bk(8);
        b.setFloat64(0, +a, !0);
        wk = b.getUint32(0, !0);
        xk = b.getUint32(4, !0);
        this.Fb(wk);
        this.Fb(xk)
    };
    n.qf = function(a) {
        z("boolean" === typeof a || "number" === typeof a);
        this.F.push(a ? 1 : 0)
    };
    n.sf = function(a) {
        z(a == Math.floor(a));
        z(-2147483648 <= a && 2147483648 > a);
        Bm(this, a)
    };
    var Cm = function() {
            this.Xd = [];
            this.Db = 0;
            this.L = new zm
        },
        Dm = function(a, b) {
            0 !== b.length && (a.Xd.push(b), a.Db += b.length)
        },
        Fm = function(a, b) {
            Em(a, b, 2);
            b = a.L.end();
            Dm(a, b);
            b.push(a.Db);
            return b
        },
        Gm = function(a, b) {
            var c = b.pop();
            c = a.Db + a.L.length() - c;
            for (z(0 <= c); 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.Db++;
            b.push(c);
            a.Db++
        },
        Em = function(a, b, c) {
            z(1 <= b && b == Math.floor(b));
            Am(a.L, 8 * b + c)
        },
        Hm = function(a, b, c) {
            null != c && (Em(a, b, 0), "number" === typeof c ? (a = a.L, z(c == Math.floor(c)), z(0 <= c && 1.8446744073709552E19 > c), zk(c), a.Kd(wk,
                xk)) : (c = ym(c), a.L.Kd(c.pi, c.Zh)))
        };
    n = Cm.prototype;
    n.Yg = function(a, b) {
        null != b && (Im(a, b, -2147483648 <= b && 2147483648 > b), null != b && (Jm(a, b), Em(this, a, 0), Bm(this.L, b)))
    };
    n.Fb = function(a, b) {
        null != b && (Im(a, b, 0 <= b && 4294967296 > b), null != b && (Em(this, a, 0), Am(this.L, b)))
    };
    n.Zg = function(a, b) {
        null != b && (Im(a, b, "string" === typeof b && ym(b) || "number" === typeof b && 0 <= b && 1.8446744073709552E19 > b), Hm(this, a, b))
    };
    n.tf = function(a, b) {
        null != b && (Em(this, a, 5), this.L.tf(b))
    };
    n.rf = function(a, b) {
        null != b && (Em(this, a, 1), this.L.rf(b))
    };
    n.qf = function(a, b) {
        null != b && (Im(a, b, "boolean" === typeof b || "number" === typeof b), Em(this, a, 0), this.L.qf(b))
    };
    n.sf = function(a, b) {
        null != b && (b = parseInt(b, 10), Jm(a, b), Em(this, a, 0), Bm(this.L, b))
    };
    n.Kd = function(a, b) {
        Em(this, a, 0);
        this.L.Kd(b)
    };

    function Jm(a, b) {
        Im(a, b, b === Math.floor(b));
        Im(a, b, -2147483648 <= b && 2147483648 > b)
    }

    function Im(a, b, c) {
        c || bb("for [" + b + "] at [" + a + "]")
    };
    var Km = function(a, b, c, d) {
        this.Ld = a;
        this.Md = b;
        this.bh = c;
        this.ah = d
    };

    function Lm(a) {
        return Array.isArray(a) ? a[0] instanceof Km ? (z(2 === a.length), Mm(a[1]), a) : [Nm, Mm(a)] : [jb(a, Km), void 0]
    }
    var Qm = function(a, b, c) {
            hb(a);
            for (var d = c.jd, e = {}; jm(b) && 4 != b.m; e = {
                    hf: void 0
                })
                if (11 === b.Fa) {
                    var f = b.La;
                    e.hf = !1;
                    qm(b, function(g) {
                        return function(h, k) {
                            var l = c[h];
                            if (!l) {
                                var m = d[h];
                                if (m) {
                                    l = Mm(m);
                                    var r = Om(l),
                                        p = Pm(l).wb;
                                    l = c[h] = function(v, y, C) {
                                        return r(Cl(y, p, C, !0), v)
                                    }
                                }
                            }
                            l ? l(k, a, h) : (g.hf = !0, k.l.K = k.l.Ca)
                        }
                    }(e));
                    e.hf && pk(a, mm(b, f))
                } else pk(a, nm(b))
        },
        Sm = function(a, b) {
            return function(c, d, e) {
                d = Rm(d, a);
                null != d && (Em(c, 1, 3), Em(c, 2, 0), Bm(c.L, e), e = Fm(c, 3), b(d, c), Gm(c, e), Em(c, 1, 4))
            }
        };

    function Tm(a, b, c) {
        if (Array.isArray(b)) {
            var d = Z(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                null != g && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Tj(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
            return b
        }
    }

    function Rm(a, b) {
        return a instanceof Tl ? a.u : Array.isArray(a) ? cl(a, b) : void 0
    }
    var Um = Symbol("deserializeBinaryFromReaderCache");

    function Om(a) {
        var b = a[Um];
        if (!b) {
            var c = Vm(a),
                d = Pm(a),
                e = d.Jf;
            b = e ? function(f, g) {
                return e(f, g, d)
            } : function(f, g) {
                for (; jm(g) && 4 != g.m;) {
                    var h = g.Tb,
                        k = d[h];
                    if (!k) {
                        var l = d.jd;
                        l && (l = l[h]) && (k = d[h] = Ym(l))
                    }
                    k && k(g, f, h) || pk(f, nm(g))
                }
                c === Zm || c === $m || c.Qi || (f[rk || (rk = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c)
            };
            a[Um] = b
        }
        return b
    }

    function Ym(a) {
        a = Lm(a);
        var b = jb(a[0], Km).Ld;
        if (a = a[1]) {
            Mm(a);
            var c = Om(a),
                d = Pm(z(a)).wb;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    var an = function() {},
        Zm, $m, bn = Symbol("comparisonTypeInfoCache");

    function cn(a, b, c) {
        var d = c[1];
        if (d) {
            var e = d[bn];
            var f = e ? e.wb : z(bl(d[0]));
            a[b] = null != e ? e : d
        }
        f && f === $k ? (a = a.qg || (a.qg = new Set), jb(a, Set).add(b)) : c[0] && (a = a.Bg || (a.Bg = new Set), jb(a, Set).add(b))
    }

    function dn(a, b) {
        return [a.bh, !b || 0 < b[0] ? void 0 : b]
    }

    function Vm(a) {
        var b = a[bn];
        if (b) return b;
        b = en(a, a[bn] = new an, dn, dn, cn);
        if (!b.jd && !b.Bg && !b.qg) {
            var c = !0,
                d;
            for (d in b) isNaN(d) || (c = !1);
            c ? (z(bl(a[0])) === $k ? $m ? b = $m : (b = new an, b.wb = hb(bl(!0)), b = $m = b) : b = Zm || (Zm = new an), b = a[bn] = b) : b.Qi = !0
        }
        return b
    }

    function Mm(a) {
        hb(a);
        var b;
        if (!(b = fn in a || gn in a) && (b = 0 < a.length)) {
            b = a[0];
            var c = bl(b);
            null != c && c !== b && (a[0] = c);
            b = null != c
        }
        z(b);
        return a
    }

    function hn(a, b, c) {
        a[b] = c
    }

    function jn(a) {
        return Array.isArray(a) && "number" === typeof a[0] && 0 < a[0]
    }

    function en(a, b, c, d, e) {
        e = void 0 === e ? hn : e;
        b.wb = z(bl(a[0]));
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.jd = g, g = a[++f], "function" === typeof g && (b.Jf = g, b.pg = eb(a[++f]), z(b.Jf === Qm), z(b.pg === Sm), g = a[++f]));
        for (var h = {}; jn(g);) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (z(0 < g), k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof Km) var m = g;
            else m = kn, f--;
            if (m.ah) {
                g = a[++f];
                l = a;
                var r = f;
                "function" == typeof g && (z(0 === g.length), g = g(), l[r] = g);
                Mm(g);
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
    var ln = Symbol("serializeBinaryToWriterCache");

    function mn(a) {
        var b = a[ln];
        if (!b) {
            var c = nn(a);
            b = function(d, e) {
                return on(d, e, c)
            };
            a[ln] = b
        }
        return b
    }
    var gn = Symbol("serializerFnCache");

    function pn(a) {
        return a.Md
    }

    function qn(a, b) {
        var c, d, e = a.Md;
        return function(f, g, h) {
            return e(f, g, h, d || (d = nn(b).wb), c || (c = mn(b)))
        }
    }

    function nn(a) {
        var b = a[gn];
        if (b) return b;
        b = en(a, a[gn] = {}, pn, qn);
        rn(a);
        return b
    }
    var fn = Symbol("deserializerFnCache");

    function sn(a, b) {
        var c = a.Ld;
        return b ? function(d, e, f) {
            return c(d, e, f, b)
        } : c
    }

    function tn(a, b, c) {
        var d = a.Ld,
            e, f;
        return function(g, h, k) {
            return d(g, h, k, f || (f = Pm(b).wb), e || (e = Om(b)), c)
        }
    }

    function Pm(a) {
        var b = a[fn];
        if (b) return b;
        Vm(a);
        b = en(a, a[fn] = {}, sn, tn);
        rn(a);
        return b
    }

    function rn(a) {
        fn in a && bn in a && gn in a && (a.length = 0)
    }

    function un(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.jd)
            if (c = c[b]) {
                c = Lm(c);
                var d = jb(c[0], Km).Md;
                if (c = c[1]) {
                    Mm(c);
                    var e = mn(c),
                        f = nn(c).wb;
                    c = (c = a.pg) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    }

    function on(a, b, c) {
        for (var d = Sj(a), e = Rj(d), f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = fk(h, e),
                    m = un(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            d = a[f - 1];
            for (var r in d) e = +r, Number.isNaN(e) || (f = d[r], null != f && (g = un(c, e)) && g(b, f, e))
        }
        if (a = ok ? hb(a)[ok] : void 0)
            for (Dm(b, b.L.end()), c = 0; c < a.length; c++) Dm(b, Yj(a[c]))
    }

    function vn(a, b) {
        return new Km(a, b, !1, !1)
    }

    function wn(a, b) {
        return new Km(a, b, !0, !1)
    }

    function xn(a, b, c) {
        ql(a, Sj(a), b, c)
    }

    function yn(a, b, c, d, e) {
        b = Rm(b, d);
        null != b && (c = Fm(a, c), e(b, a), Gm(a, c))
    }
    var zn = vn(function(a, b, c) {
            if (1 !== a.m) return !1;
            z(1 == a.m);
            var d = a.l;
            a = cm(d);
            var e = cm(d);
            d = 2 * (e >> 31) + 1;
            var f = e >>> 20 & 2047;
            a = 4294967296 * (e & 1048575) + a;
            xn(b, c, 2047 == f ? a ? NaN : Infinity * d : 0 == f ? d * Math.pow(2, -1074) * a : d * Math.pow(2, f - 1075) * (a + 4503599627370496));
            return !0
        }, function(a, b, c) {
            a.rf(c, Gk(b))
        }),
        An = vn(function(a, b, c) {
                if (5 !== a.m) return !1;
                z(5 == a.m);
                var d = cm(a.l);
                a = 2 * (d >> 31) + 1;
                var e = d >>> 23 & 255;
                d &= 8388607;
                xn(b, c, 255 == e ? d ? NaN : Infinity * a : 0 == e ? a * Math.pow(2, -149) * d : a * Math.pow(2, e - 150) * (d + Math.pow(2, 23)));
                return !0
            },
            function(a, b, c) {
                a.tf(c, Gk(b))
            }),
        Bn = vn(function(a, b, c) {
            if (0 !== a.m) return !1;
            xn(b, c, sm(a));
            return !0
        }, function(a, b, c) {
            a.Zg(c, Sk(b))
        }),
        Cn = wn(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = xl(b, c);
            2 == a.m ? vm(a, bm, b) : b.push(sm(a));
            return !0
        }, function(a, b, c) {
            b = Tm(Sk, b, !1);
            if (null != b)
                for (var d = 0; d < b.length; d++) Hm(a, c, b[d])
        }),
        Dn = vn(function(a, b, c) {
            if (0 !== a.m) return !1;
            xn(b, c, rm(a));
            return !0
        }, function(a, b, c) {
            a.Yg(c, Nk(b))
        }),
        En = wn(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = xl(b, c);
            2 == a.m ? vm(a, $l, b) : b.push(rm(a));
            return !0
        }, function(a, b, c) {
            b = Tm(Nk, b, !0);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    null != g && (Jm(f, g), Em(e, f, 0), Bm(e.L, g))
                }
        }),
        Fn = vn(function(a, b, c) {
            if (0 !== a.m) return !1;
            z(0 == a.m);
            a = dm(a.l);
            xn(b, c, a);
            return !0
        }, function(a, b, c) {
            a.qf(c, Jk(b))
        }),
        Gn = vn(function(a, b, c) {
            if (2 !== a.m) return !1;
            xn(b, c, um(a));
            return !0
        }, function(a, b, c) {
            b = Tk(b);
            if (null != b) {
                var d = !0;
                d = void 0 === d ? !1 : d;
                db(b);
                if (tj) {
                    if (d && (sj ? !b.ni() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("da");
                    b = (rj || (rj = new TextEncoder)).encode(b)
                } else {
                    for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                        var h = b.charCodeAt(g);
                        if (128 > h) f[e++] = h;
                        else {
                            if (2048 > h) f[e++] = h >> 6 | 192;
                            else {
                                z(65536 > h);
                                if (55296 <= h && 57343 >= h) {
                                    if (56319 >= h && g < b.length) {
                                        var k = b.charCodeAt(++g);
                                        if (56320 <= k && 57343 >= k) {
                                            h = 1024 * (h - 55296) + k - 56320 + 65536;
                                            f[e++] = h >> 18 | 240;
                                            f[e++] = h >> 12 & 63 | 128;
                                            f[e++] = h >> 6 & 63 | 128;
                                            f[e++] = h & 63 | 128;
                                            continue
                                        } else g--
                                    }
                                    if (d) throw Error("da");
                                    h = 65533
                                }
                                f[e++] = h >> 12 | 224;
                                f[e++] = h >> 6 & 63 | 128
                            }
                            f[e++] = h & 63 | 128
                        }
                    }
                    b = e === f.length ?
                        f : f.subarray(0, e)
                }
                Em(a, c, 2);
                Am(a.L, b.length);
                Dm(a, a.L.end());
                Dm(a, b)
            }
        }),
        Nm = new Km(function(a, b, c, d, e) {
            if (2 !== a.m) return !1;
            om(a, Cl(b, d, c, !0), e);
            return !0
        }, yn, !1, !0),
        kn = new Km(function(a, b, c, d, e) {
            if (2 !== a.m) return !1;
            om(a, Cl(b, d, c), e);
            return !0
        }, yn, !1, !0),
        Hn;
    Hn = new Km(function(a, b, c, d, e) {
        if (2 !== a.m) return !1;
        d = cl(void 0, d);
        var f = Sj(b);
        lk(f);
        var g = wl(b, f, c, 3);
        f = Sj(b);
        if (Z(g) & 4) {
            g = Gj(g);
            var h = Z(g);
            Tj(g, (h | 1) & -2079);
            ql(b, f, c, g)
        }
        g.push(d);
        om(a, d, e);
        return !0
    }, function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) yn(a, b[f], c, d, e)
    }, !0, !0);
    var In = vn(function(a, b, c) {
            if (0 !== a.m) return !1;
            xn(b, c, pm(a));
            return !0
        }, function(a, b, c) {
            a.Fb(c, Pk(b))
        }),
        Jn = wn(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = xl(b, c);
            2 == a.m ? vm(a, am, b) : b.push(pm(a));
            return !0
        }, function(a, b, c) {
            b = Tm(Pk, b, !0);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    null != g && (Em(e, f, 0), Am(e.L, g))
                }
        }),
        Kn = vn(function(a, b, c) {
            if (0 !== a.m) return !1;
            xn(b, c, tm(a));
            return !0
        }, function(a, b, c) {
            a.sf(c, Nk(b))
        }),
        Ln = wn(function(a, b, c) {
            if (0 !== a.m && 2 !== a.m) return !1;
            b = xl(b, c);
            2 == a.m ? vm(a, em,
                b) : b.push(tm(a));
            return !0
        }, function(a, b, c) {
            b = Tm(Nk, b, !0);
            if (null != b)
                for (var d = 0; d < b.length; d++) a.sf(c, b[d])
        });

    function Mn(a) {
        if (a instanceof Tl) return a.constructor.va
    };

    function Nn(a, b) {
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
                                return Nn(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = On(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = t(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Nn(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = On(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + On(a);
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

    function On(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };

    function Pn(a, b) {
        a.Yf = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }

    function Qn(a, b, c) {
        var d = a(b, c);
        d || Rn(c, function() {
            var e = "";
            0 < e.length && (e += ": ");
            return e + "Expected " + a.Yf().trim() + ", got " + Nn(b)
        });
        return d
    }

    function Rn(a, b) {
        null == a || a.push(("function" === typeof b ? b() : b).trim())
    }
    var Sn = void 0;

    function Tn() {
        throw Error(x.apply(0, arguments).map(function(a) {
            return "function" === typeof a ? a() : a
        }).filter(function(a) {
            return a
        }).join("\n").trim().replace(/:$/, ""));
    };
    (function() {
        var a = Ia.jspbGetTypeName;
        Ia.jspbGetTypeName = a ? function(b) {
            return a(b) || Mn(b)
        } : Mn
    })();
    var Un = Tl;

    function Vn(a) {
        return function() {
            var b = new Cm;
            on(jb(this, Tl).u, b, nn(a));
            Dm(b, b.L.end());
            for (var c = new Uint8Array(b.Db), d = b.Xd, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            z(f == c.length);
            b.Xd = [c];
            return c
        }
    };
    var Gl = function(a) {
        Un.call(this, a)
    };
    w(Gl, Un);
    Gl.prototype.Xf = function() {
        return Ml(this)
    };
    Gl.va = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var Wn = [0, Gn, -1];
    Gl.prototype.za = Vn(Wn);
    var Xn = function(a) {
        Un.call(this, a)
    };
    w(Xn, Un);
    var Yn = function(a, b) {
            return Ql(a, 2, b)
        },
        Zn = function(a, b) {
            return Ql(a, 3, b)
        },
        $n = function(a, b) {
            return Ql(a, 4, b)
        },
        ao = function(a, b) {
            return Ql(a, 5, b)
        },
        bo = function(a, b) {
            return Ql(a, 9, b)
        },
        co = function(a, b) {
            var c = Gl,
                d = a.u,
                e = Sj(d);
            lk(e);
            if (null == b) ql(d, e, 10);
            else {
                var f = b;
                if (!Array.isArray(f)) throw a = "Expected array but got " + Ka(f) + ": " + f, Fk(a);
                var g = f = Z(b),
                    h = !!(2 & f) || !!(2048 & f);
                z(!h || Object.isFrozen(b));
                var k = h || Object.isFrozen(b),
                    l;
                if (l = !k) l = !1;
                for (var m = !0, r = !0, p = 0; p < b.length; p++) {
                    var v = b[p],
                        y = v,
                        C = ab(c);
                    if (!(y instanceof C)) throw Error("ka`" + Hk(C) + "`" + (y && Hk(y.constructor)));
                    h || (v = Uj(v.u), m && (m = !v), r && (r = v))
                }
                h || (f = Nj(f, 5, !0), f = Nj(f, 8, m), f = Nj(f, 16, r));
                if (l || k && f !== g) b = Gj(b), g = 0, f = Al(f, e, !0);
                f !== g && Tj(b, f);
                sk(b);
                ql(d, e, 10, b)
            }
            return a
        },
        eo = function(a, b) {
            return rl(a, 11, null == b ? b : Ik(b))
        },
        fo = function(a, b) {
            return Ql(a, 1, b)
        },
        go = function(a, b) {
            return rl(a, 7, null == b ? b : Ik(b))
        };
    Xn.va = "wireless.mdl.UserAgentClientHints";
    Xn.Ad = [10, 6];
    Xn.prototype.za = Vn([0, Gn, -4, Hn, Wn, Fn, Kn, Gn, Hn, Wn, Fn]);
    var ho = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function io(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function jo(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ko(a) {
        if (!jo(a)) return null;
        var b = io(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ho).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function lo(a) {
        var b;
        return eo(co(ao(Yn(fo($n(go(bo(Zn(new Xn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Gl;
            d = Ql(d, 1, c.brand);
            return Ql(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function mo(a) {
        var b, c;
        return null != (c = null == (b = ko(a)) ? void 0 : b.then(function(d) {
            return lo(d)
        })) ? c : null
    };
    var no = function(a, b, c, d) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? new Ra : c;
        d = void 0 === d ? Rg("current") : d;
        ze.call(this);
        this.global = a;
        this.Ka = b;
        this.B = c;
        this.Jg = d;
        this.Mi = Xd(this.global, "pagehide").g(Ah(this.B, 941));
        this.vg = Xd(this.global, "load").g(Ah(this.B, 738), zf(1));
        this.Ni = Xd(this.global, "resize").g(Ah(this.B, 741));
        this.onMessage = Xd(this.global, "message").g(Ah(this.B, 740));
        this.document = new $i(this.global, this);
        this.i = new Ch(new Fh(this.M, this.B), new Eh(this.M, this.B));
        this.J = new Me(new Ih(this),
            new ti(this), new Ag(this, new Mh(this)), new Ag(this, new yi(this)), new Ag(this, new ri(this)))
    };
    w(no, ze);
    var Jh = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent
    };
    no.prototype.Xb = function(a) {
        Jh(this) && this.global.fence.reportEvent(a)
    };
    no.prototype.se = function() {
        return this.Mi.g(Ah(this.B, 942), V(this.h, 1), P(function() {}))
    };
    var oo = function(a) {
            var b = new no(a.global.top, a.Ka);
            b.J = a.J;
            return b
        },
        po = function(a, b) {
            b.start();
            return Xd(b, "message").g(Ah(a.B, 740))
        };
    no.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    no.prototype.te = function() {
        return qi(this.global) ? this.global.width : 0
    };
    no.prototype.re = function() {
        return qi(this.global) ? this.global.height : 0
    };
    var qo = function(a, b) {
        try {
            var c = a.global,
                d = oi() || pi();
            try {
                b && (c = c.top);
                a = c;
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new hi(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new hi(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (y) {
                    h = new hi(-12245933, -12245933)
                }
                b = h;
                var k = b.height,
                    l = b.width;
                if (-12245933 === l) var m = new kj(l, l, l, l);
                else {
                    var r = li(ki(c.document).Kb),
                        p = r.x,
                        v = r.y;
                    m = new kj(v, p + l, v + k, p)
                }
            } catch (y) {
                m =
                    new kj(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: m.left,
                top: m.top,
                width: m.te(),
                height: m.re()
            }
        } catch (y) {
            return gj
        }
    };
    no.prototype.validate = function() {
        var a = this.J.I() || Jh(this);
        return this.global && this.i.ia() && a
    };
    var Ki = function(a) {
        return (a = mo(a.global)) ? Rd(a) : null
    };
    da.Object.defineProperties(no.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        M: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Ob: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !qi(this.global.top)
            }
        },
        ze: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ob || this.global.top !== this.global
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
                return this.M.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.M.ResizeObserver
            }
        },
        ki: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                z(!0, "Major version must be an integer");
                return 8 <= jc()
            }
        },
        vh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var ro = !Uh && !fc(),
        so = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (ro && a.dataset) {
                if (hc() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var to = {},
        uo = (to["data-google-av-cxn"] = "_avicxn_", to["data-google-av-cpmav"] = "_cvu_", to["data-google-av-metadata"] = "_avm_", to["data-google-av-adk"] = "_adk_", to["data-google-av-btr"] = void 0, to["data-google-av-override"] = void 0, to["data-google-av-dm"] = void 0, to["data-google-av-immediate"] = void 0, to["data-google-av-aid"] = void 0, to["data-google-av-naid"] = void 0, to["data-google-av-inapp"] = void 0, to["data-google-av-slift"] = void 0, to["data-google-av-itpl"] = void 0, to["data-google-av-ext-cxn"] = void 0, to["data-google-av-rs"] =
            void 0, to["data-google-av-flags"] = void 0, to["data-google-av-turtlex"] = void 0, to["data-google-av-ufs-integrator-metadata"] = void 0, to["data-google-av-vattr"] = void 0, to["data-google-av-vrus"] = void 0, to),
        vo = {},
        wo = (vo["data-google-av-adk"] = "googleAvAdk", vo["data-google-av-btr"] = "googleAvBtr", vo["data-google-av-cpmav"] = "googleAvCpmav", vo["data-google-av-dm"] = "googleAvDm", vo["data-google-av-ext-cxn"] = "googleAvExtCxn", vo["data-google-av-immediate"] = "googleAvImmediate", vo["data-google-av-inapp"] = "googleAvInapp",
            vo["data-google-av-itpl"] = "googleAvItpl", vo["data-google-av-metadata"] = "googleAvMetadata", vo["data-google-av-naid"] = "googleAvNaid", vo["data-google-av-override"] = "googleAvOverride", vo["data-google-av-rs"] = "googleAvRs", vo["data-google-av-slift"] = "googleAvSlift", vo["data-google-av-cxn"] = "googleAvCxn", vo["data-google-av-aid"] = void 0, vo["data-google-av-flags"] = "googleAvFlags", vo["data-google-av-turtlex"] = "googleAvTurtlex", vo["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", vo["data-google-av-vattr"] =
            "googleAvVattr", vo["data-google-av-vrus"] = "googleAvVurs", vo);

    function xo(a, b) {
        if (void 0 === a.j) return null;
        try {
            var c;
            var d = null != (c = a.j.getAttribute(b)) ? c : null;
            if (null !== d) return d
        } catch (g) {}
        try {
            var e = uo[b];
            if (e && (d = a.j[e], void 0 !== d)) return d
        } catch (g) {}
        try {
            var f = wo[b];
            if (f) return so(a.j, f)
        } catch (g) {}
        return null
    }

    function yo(a) {
        return P(function(b) {
            return xo(b, a)
        })
    };
    var zo = K(function(a) {
        return P(function(b) {
            return a.map(function(c) {
                return xo(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), P(function(a) {
        var b = t(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (null !== b) return [];
            throw new Ie;
        }
        return a.split("|")
    }));
    var Ao = function() {
        return K(Sd(function(a) {
            return a.element.g(zo, hf(function() {
                return N([""])
            })).g(P(function(b) {
                return {
                    Ia: b,
                    cd: a
                }
            }))
        }), uf(function(a) {
            return a.Ia.sort().join(";")
        }), P(function(a) {
            return a.cd
        }))
    };
    var Co = function() {
            return Sd(function(a) {
                return Rd(Bo(a)).g(zi(a.h))
            })
        },
        Bo = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new Mi(b)
            })
        };

    function Do(a) {
        var b = a.vg,
            c = a.document.Ki;
        return ce(N({}), c, b).g(P(function() {
            return a
        }))
    };
    var Fo = P(Eo);

    function Eo(a) {
        var b = Number(xo(a, "data-google-av-rs"));
        if (!isNaN(b) && 0 !== b) return b;
        var c;
        return (a = null == (c = a.j) ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Go() {
        return K(R(function(a) {
            return void 0 !== a
        }), P(function(a) {
            return a
        }))
    };

    function Ho() {
        return function(a) {
            var b = [];
            return a.g(R(function(c) {
                if (void 0 === c.j || b.some(function(d) {
                        return d.j === c.j
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Io(a, b) {
        b = void 0 === b ? $c : b;
        return ce(Do(a), b).g(Co(), Ho(), Go(), V(a.h, 1))
    };

    function Jo(a, b) {
        return new L(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(r, p) {
                    a.Dg ? (e[p] = r, f.add(p), d || (d = !0, Ua(a, function() {
                        d = !1;
                        c.next(Lb(e))
                    }, 1))) : c.error(new Je(p))
                },
                k = function(r, p) {
                    g.add(p);
                    f.add(p);
                    Ua(a, function() {
                        c.error(r)
                    }, 1)
                },
                l = function(r) {
                    g.add(r);
                    Ua(a, function() {
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

    function Ko(a, b, c) {
        function d() {
            if (b.Ka) {
                var B = b.Ka,
                    G = B.next;
                var J = {
                    creativeId: b.pc.Na(c),
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
                    timestamp: Se(b.i.now(), new Qe(0, b.i.timeline)),
                    instanceId: b.pc.Na(b.Bb),
                    creativeState: J
                };
                G.call(B, J)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, r = [], p = [], v = t(e), y = v.next(), C = {}; !y.done; C = {
                na: void 0
            }, y = v.next()) C.na = y.value, y = a[C.na], y instanceof
        Y ? (l[C.na] = y.value, m.add(C.na), b.Ka && (f[String(C.na)] = Ue(y.value))) : (y = y.g(S(function(B, G) {
                return Ne(B) || Ne(G) ? !1 : B === G
            }), P(function(B) {
                return function(G) {
                    b.Ka && (f[String(B.na)] = Ue(G), d());
                    var J = {};
                    return J[B.na] = G, J
                }
            }(C)), hf(function(B) {
                return function(G) {
                    if (G instanceof Je) throw new Le(String(B.na));
                    throw G;
                }
            }(C)), pg(function(B) {
                return function() {
                    m.add(B.na)
                }
            }(C), function(B) {
                return function(G) {
                    k = String(B.na);
                    h = String(G);
                    d()
                }
            }(C), function(B) {
                return function() {
                    m.has(B.na) || (g = !0, d())
                }
            }(C))), p.push(C.na),
            r.push(y));
        (a = 0 < Object.keys(f).length) && d();
        v = Jo(b.h, r).g(hf(function(B) {
            if (B instanceof Je) throw new Ke(String(p[B.di]));
            throw B;
        }), P(function(B) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(u(B))))
        }));
        return (r = 0 < r.length) && a ? ce(N(Object.freeze(l)), v) : r ? v : N(Object.freeze(l))
    };

    function Lo(a, b, c, d) {
        var e = Mo(No(Oo(), Po), Qo, Ro);
        return a.B.bc.bind(a.B)(733, function() {
            var f = {};
            try {
                return b.g(hf(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return $c
                }), Sd(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), $c
                    }
                    var k = {};
                    return Ko(h, a, g.Bb).g(pg(function(l) {
                        k = l
                    }), bg(1), md()).g(e, hf(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return $c
                    }), Gf(void 0), P(function() {
                        return !0
                    }))
                })).g(Uf(function(g) {
                    return g + 1
                }, 0), hf(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return $c
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), $c
            }
        })()
    };

    function So(a, b) {
        return K(U(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new L(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        ob: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : ee
        }), R(function(c) {
            return c.ob
        }))
    };
    var Qo = K(R(function(a) {
        var b = a.J,
            c = a.lc,
            d = a.dc,
            e = a.Xb,
            f = a.tb,
            g = a.kc;
        return void 0 !== a.eb && void 0 !== g && void 0 !== b && void 0 !== c && void 0 !== d && (!f || void 0 !== e)
    }), mg(function(a) {
        return !(!1 === a.jg && void 0 !== a.Mf)
    }, !1), R(function(a) {
        var b = a.we,
            c = a.lc;
        return a.yj ? !!b && void 0 !== c && 0 < (null == c ? void 0 : c.length) : !!a.jg
    }), So(function(a) {
        return a.kc
    }, function(a) {
        return a.eb
    }), P(function(a) {
        a.tb || a.dc(a.lc, a).forEach(function(b) {
            a.J.N(b).sendNow()
        })
    }), zf(1), Kf());

    function To(a) {
        var b = new Map;
        if ("object" !== typeof a || null === a) return b;
        Object.values(a).forEach(function(c) {
            c && "function" === typeof c.ma && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function Uo(a, b) {
        var c = Vo,
            d = Wo,
            e = Xo;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                Nf: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Hh: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                Gh: String(a.B.Qg)
            }), d(Object.assign({}, f, {
                xa: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                Ia: [c]
            }), To(f)).forEach(function(g) {
                a.J.N(g).sendNow()
            }))
        }
    };
    var Ro = K(P(function(a) {
        var b = a.J,
            c = a.Oh;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.Mf) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.N("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), mg(function(a) {
        return !a
    }), Kf());
    var Xo = function(a) {
        return {
            id: a.Re,
            mcvt: a.Ac,
            p: a.dd,
            asp: a.dk,
            mtos: a.Bc,
            tos: a.Nc,
            v: a.uh,
            bin: a.th,
            avms: a.tg,
            bs: a.Ef,
            mc: a.rg,
            "if": a.Bh,
            vu: a.Dh,
            app: a.hb,
            mse: a.Me,
            mtop: a.Ne,
            itpl: a.Be,
            adk: a.Wd,
            exk: a.fk,
            rs: a.Ua,
            la: a.mg,
            cr: a.Fe,
            uach: a.Pc,
            vs: a.kf,
            r: a.Ue,
            pay: a.Wh,
            co: a.wh,
            rst: a.oh,
            rpt: a.nh,
            isd: a.bi,
            lsd: a.si,
            context: a.Gh,
            msg: a.errorMessage,
            stack: a.Nf,
            name: a.Hh,
            ec: a.Xh,
            sfr: a.af,
            met: a.oc,
            wmsd: a.nf,
            pv: a.Bk,
            epv: a.hk,
            pbe: a.ig,
            vae: a.ai,
            spb: a.Ng,
            sfl: a.Mg,
            ffslot: a.ji,
            reach: a.mj,
            io2: a.Hd,
            rxdbg: a.Fk,
            omida: a.qk,
            omidp: a.xk,
            omidpv: a.yk,
            omidir: a.vk,
            omidv: a.Ak,
            omids: a.zk,
            omidam: a.pk,
            omidct: a.rk,
            omidia: a.uk,
            omiddc: a.sk,
            omidlat: a.wk,
            omiddit: a.tk
        }
    };

    function Mo() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c = b.g(bg(1), md());
            b = a.map(function(d) {
                return c.g(d, Gf(!0))
            });
            return Q(b).g(zf(1), Kf())
        }
    };

    function No() {
        var a = x.apply(0, arguments);
        return function(b) {
            var c = b.g(bg(1), md());
            b = a.map(function(d) {
                return c.g(d, Gf(!0))
            });
            return ce.apply(null, u(b)).g(zf(1), Kf())
        }
    };

    function Oo() {
        var a = Yo,
            b = Zo;
        return function(c) {
            var d = c.g(bg(1), md());
            c = d.g(a, Gf(!0));
            d = d.g(K(b, bg(), md()), Gf(!0));
            c = Q([c, d]);
            return he(c, d).g(zf(1), Kf())
        }
    };
    var Zo = function(a) {
        var b = [];
        return a.g(P(function(c) {
            var d = c.J,
                e = c.Ph,
                f = c.Nc,
                g = c.rj,
                h = c.xa,
                k = c.qj,
                l = c.Og,
                m = c.Oc,
                r = c.lf,
                p = c.we,
                v = c.ig,
                y = c.Ng,
                C = c.Mg,
                B = c.gf;
            if (!c.Vf || !p || void 0 === c.Bc || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === m || void 0 === d) return !1;
            if (c.tb) {
                if (void 0 === l) return !1;
                g = c.Xb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: null != B ? B : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(v || C || l)) return !1;
            B = To(c);
            var G;
            r = null != (G = null == r ? void 0 : r.ta(B).value) ? G : !1;
            c = m(Object.assign({},
                c, {
                    Re: k,
                    kf: r ? 4 : 3,
                    Ue: null != l ? l : "u",
                    xa: h,
                    Ia: g
                }), B);
            if (v) {
                for (; b.length > g.length;) v = void 0, null == (v = b.shift()) || v.deactivate();
                c.forEach(function(J, X) {
                    X >= b.length ? b.push(d.N(J)) : b[X].url = J
                });
                return y && e && void 0 !== l ? (c.forEach(function(J) {
                    e.N(J).sendNow()
                }), !0) : void 0 !== l
            }
            if (y && e && void 0 !== l) return c.forEach(function(J) {
                e.N(J).sendNow()
            }), !0;
            if (C && e) {
                for (; b.length > g.length;) y = void 0, null == (y = b.shift()) || y.deactivate();
                c.forEach(function(J, X) {
                    X >= b.length ? b.push(d.N("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos", {
                        Lf: !0
                    })) : b[X].url = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"
                });
                return void 0 !== l ? (c.forEach(function(J) {
                    e.N(J).sendNow()
                }), !0) : void 0 !== l
            }
            return void 0 !== l ? (c.forEach(function(J) {
                d.N(J).sendNow()
            }), !0) : !1
        }), mg(function(c) {
            return !c
        }), Kf())
    };

    function $o(a) {
        return function(b) {
            return b.g(P(function(c) {
                a.Dg || bb("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function ap(a) {
        return function(b) {
            return new L(function(c) {
                var d = !1,
                    e = b.g($o(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Ua(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function bp(a, b) {
        return function(c) {
            return c.g(U(function(d) {
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
    var cp = {
        bk: 0,
        Fj: 1,
        Hj: 2,
        Gj: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function dp(a, b) {
        var c = b.g(bp(a, {
            attributes: !0
        }), V(a.h, 1));
        return Q([b, c.g(V(a.h, 1), ap(a.h))]).g(P(function(d) {
            return t(d).next().value
        }), yo("data-google-av-dm"), P(ep))
    }

    function ep(a) {
        return a && a in cp ? Number(a) : 2
    };

    function fp(a) {
        if (3 === a.wi) return null;
        if (void 0 !== a.Og) {
            var b = !1 === a.Ah ? "n" : null;
            if (null !== b) return b
        }
        return a.kd instanceof Ce ? "msf" : a.ee instanceof De ? "c" : !1 === a.yh ? "pv" : a.kd || a.ee ? "x" : null
    }
    var Po = K(R(function(a) {
        return void 0 !== a.od && void 0 !== a.xa && void 0 !== a.Oc && void 0 !== a.pd && void 0 !== a.J
    }), R(function(a) {
        return null !== fp(a)
    }), So(function(a) {
        return a.Wc
    }, function(a) {
        return a.eb
    }), P(function(a) {
        if (a.tb) {
            var b = a.Xb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: null != (c = a.gf) ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = fp(a);
            if ("x" === d) {
                var e, f = null != (e = a.kd) ? e : a.ee;
                f && (b = f.stack, c = f.message)
            }
            a.Oc(Object.assign({}, a, {
                Ia: a.od,
                xa: a.xa,
                Re: a.pd,
                kf: 2,
                Ue: d,
                errorMessage: c,
                Nf: b
            }), To(a)).forEach(function(g) {
                a.J.N(g).sendNow()
            })
        }
    }), zf(1), Kf());
    var gp = function() {
            this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
            this.Xe = 0
        },
        hp = function(a) {
            var b = a.Xe.toString(10).padStart(2, "0");
            b = "" + a.startTime + b;
            99 > a.Xe && a.Xe++;
            return b
        };

    function ip(a, b) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return ip(c, b)
        }).join(",") : a instanceof Qe ? a.toString() : a && "function" === typeof a.ma ? ip(a.ta(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : a instanceof gp ? hp(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function jp(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            d = ip(d, b);
            return null === d ? "" : c + "=" + d
        }).filter(function(c) {
            return "" !== c
        });
        return a.length ? a.join("&") : ""
    };
    var kp = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        Cc = zc(Bc(), "google3.javascript.ads.common.url_macros_substitutor", pc).ti;

    function lp(a, b) {
        return a.replace(kp, function(c, d) {
            try {
                var e = null !== b && d in b ? b[d] : void 0;
                if (null == e) return Dc("No value supplied for unsupported macro: " + d), c;
                if (null == e.toString()) return Dc("The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                Dc("Null value supplied for macro: " + d)
            } catch (f) {
                Dc("Failed to set macro: " + d)
            }
            return c
        })
    };

    function mp(a, b) {
        var c = Object.assign({}, a),
            d = a.Pc;
        c = (delete c.Pc, c);
        c = a.xa(c);
        var e = jp(c, b);
        return Ib(a.Ia, function(f) {
            var g = "";
            "string" === typeof d && (g = "&" + jp({
                uach: d
            }, b));
            var h = {};
            return lp(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function Wo(a, b) {
        var c = a.xa(a),
            d = jp(c, b);
        return d ? Ib(a.Ia, function(e) {
            e = 0 <= e.indexOf("?") ? e : e + "?";
            e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
            return e + d
        }) : a.Ia
    };

    function np(a, b) {
        return Ib(a, function(c) {
            if ("string" === typeof b.Pc) {
                var d = "&" + jp({
                    uach: b.Pc
                }, new Map);
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var Yo = K(R(function(a) {
        return void 0 !== a.xa && void 0 !== a.od && void 0 !== a.Oc && void 0 !== a.pd && void 0 !== a.J
    }), P(function(a) {
        return Object.assign({}, a, {
            Rg: To(a)
        })
    }), R(function(a) {
        var b = a.lf,
            c = a.Rg,
            d;
        return !!a.we && (null != (d = null == b ? void 0 : b.ta(c).value) ? d : !1)
    }), So(function(a) {
        return a.Xc
    }, function(a) {
        return a.eb
    }), P(function(a) {
        var b = a.J,
            c = a.gf;
        if (a.tb) {
            var d = a.Xb;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: null != c ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.Oc(Object.assign({}, a, {
            Ia: a.od,
            xa: a.xa,
            Re: a.pd,
            kf: 4,
            Ue: "v"
        }), a.Rg);
        (d = a.fe) && 0 < d.length && a.dc && a.dc(d, a).forEach(function(e) {
            b.N(e).sendNow()
        });
        (d = a.mf) && 0 < d.length && a.dc && a.dc(d, a).forEach(function(e) {
            b.N(e).sendNow()
        });
        c.forEach(function(e) {
            b.N(e, {
                ic: a.Je
            }).sendNow()
        });
        return !0
    }), mg(function(a) {
        return !a
    }), Kf());

    function op(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function pp(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Y && h instanceof Y && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (0 <= f.indexOf(k)) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(U(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof L || "function" === typeof m.Rb && "function" === typeof m.subscribe) ? m : m.T(a)
            })), l))
        }, g)
    };

    function qp(a) {
        return K(P(function() {
            return !0
        }), T(!1), V(a, 1))
    };

    function rp(a) {
        return 0 >= a.length ? $c : Q(a.map(function(b) {
            var c = 0;
            return b.g(P(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(R(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), P(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function sp(a, b) {
        a.Ja && (a.yb = a.Ja);
        a.Ja = b;
        a.yb && a.yb.value ? (b = Math.max(0, Se(b.timestamp, a.yb.timestamp)), a.totalTime += b, a.ra += b) : a.ra = 0;
        return a
    }

    function tp() {
        return K(Uf(sp, {
            totalTime: 0,
            ra: 0
        }), P(function(a) {
            return a.totalTime
        }))
    }

    function up() {
        return K(Uf(sp, {
            totalTime: 0,
            ra: 0
        }), P(function(a) {
            return a.ra
        }))
    };

    function vp(a, b) {
        return K(yo("data-google-av-metadata"), P(function(c) {
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
    var wp = {
        Bj: "asmreq",
        Cj: "asmres"
    };
    var xp = function(a) {
        Un.call(this, a)
    };
    w(xp, Un);
    xp.prototype.Gg = function(a) {
        Pl(this, a)
    };
    xp.va = "tagging.common.osd.AdSpeedMetricsRequest";
    xp.prototype.za = Vn([0, In]);
    var yp = function(a) {
        Un.call(this, a)
    };
    w(yp, Un);
    yp.va = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var zp = [0, Dn, -3];
    yp.prototype.za = Vn(zp);
    var Ap = function(a) {
        Un.call(this, a)
    };
    w(Ap, Un);
    Ap.prototype.Gg = function(a) {
        Pl(this, a)
    };
    var Bp = function(a) {
        return function(b) {
            eb(a);
            if (null == b || "" == b) b = jb(new a, Tl);
            else {
                db(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("va`" + Ka(b) + "`" + b);
                Lj(b, 32);
                b = Zk(a, b)
            }
            return b
        }
    }(Ap);
    Ap.va = "tagging.common.osd.AdSpeedMetricsResponse";
    Ap.prototype.za = Vn([0, In, Fn, zp, Dn, -1]);

    function Cp(a, b) {
        var c = void 0 === c ? oo(a) : c;
        var d = new MessageChannel;
        b = b.g(P(function(f) {
            return Number(f)
        }), R(function(f) {
            return !isNaN(f) && 0 !== f
        }), pg(function(f) {
            var g = new xp;
            g.Gg(f);
            f = {
                type: "asmreq",
                payload: g.mb()
            };
            c.postMessage(f, "*", [d.port2])
        }), zf(1));
        var e = po(a, d.port1).g(R(function(f) {
                return "object" === typeof f.data
            }), P(function(f) {
                var g = f.data,
                    h = Object.values(wp).includes(g.type);
                g = "string" === typeof g.payload;
                if (!h || !g || "asmres" !== f.data.type) return null;
                try {
                    return Bp(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            R(function(f) {
                return null !== f
            }), P(function(f) {
                return f
            }));
        return b.g(U(function(f) {
            return N(f).g(lf(e))
        }), R(function(f) {
            var g = t(f);
            f = g.next().value;
            g = g.next().value;
            if (null != Pk(ol(g, 1))) {
                var h = void 0 === h ? 0 : h;
                h = Jl(Pk(ol(g, 1)), h) === f
            } else h = !1;
            return h
        }), P(function(f) {
            f = t(f);
            f.next();
            return f.next().value
        }), zi(a.h))
    };

    function Dp(a, b, c) {
        var d = b.xc.g(zf(1), U(function() {
            return Cp(a, c)
        }), R(function(f) {
            return Kl(f, 2) && tl(f, yp, 3) && null != Nk(ol(f, 4)) && null != Nk(ol(f, 5))
        }), zf(1), zi(a.h));
        b = d.g(P(function(f) {
            return {
                x: Ll(Fl(f, yp, 3), 2),
                y: Ll(Fl(f, yp, 3), 1)
            }
        }), S(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), V(a.h, 1));
        var e = d.g(P(function(f) {
            return Ll(f, 4)
        }), V(a.h, 1));
        d = d.g(P(function(f) {
            return Ll(f, 5)
        }), V(a.h, 1));
        return {
            bi: e,
            qh: b,
            si: d
        }
    };

    function Ep(a, b) {
        return b.xc.g(zf(1), P(function() {
            return a.i.now().round()
        }))
    };
    var Fp = P(function(a) {
        return [a.value.S.width, a.value.S.height]
    });

    function Gp(a, b) {
        return function(c) {
            return rp(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Hp() {
        var a;
        return K(pg(function(b) {
            return void(a = b.timestamp)
        }), up(), P(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Ip = function(a, b) {
            this.Ff = a;
            this.options = b;
            this.De = this.Ce = null
        },
        Jp = function(a, b) {
            b ? a.De || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.De = new IntersectionObserver(a.Ff, b)) : a.Ce || (a.Ce = new IntersectionObserver(a.Ff, a.options))
        },
        Kp = function(a, b) {
            a = b ? a.De : a.Ce;
            if (!a) throw new Fe;
            return a
        };
    Ip.prototype.observe = function(a, b) {
        Kp(this, a).observe(b)
    };
    Ip.prototype.unobserve = function(a, b) {
        Kp(this, a).unobserve(b)
    };
    Ip.prototype.disconnect = function(a) {
        Kp(this, a).disconnect()
    };
    Ip.prototype.takeRecords = function(a) {
        return Kp(this, a).takeRecords()
    };
    var Lp = {
        ca: "ns",
        da: gj,
        S: gj,
        aa: new M,
        U: "ns",
        H: gj,
        W: gj,
        fa: {
            x: 0,
            y: 0
        }
    };

    function Mp(a, b) {
        return hj(a.S, b.S) && hj(a.H, b.H) && hj(a.da, b.da) && hj(a.W, b.W) && a.U === b.U && a.aa === b.aa && a.ca === b.ca && a.fa.x === b.fa.x && a.fa.y === b.fa.y
    };
    var Np = function(a) {
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

    function Op(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(Xf(new M), md());
                d = c.element.g(S());
                e = e.g(P(function(f) {
                    return f.value
                }));
                return Q([d, e, b]).g(P(function(f) {
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
                            r = new gi(0, 0);
                        var p = (p = ji(l)) ? p.parentWindow || p.defaultView : window;
                        if (Ph(p, "parent")) {
                            do {
                                if (p == m) {
                                    var v = l,
                                        y = ji(v);
                                    fb(v, "Parameter is required");
                                    var C = new gi(0,
                                        0);
                                    var B = y ? ji(y) : document;
                                    B = !Uh || 9 <= Number(fi) || "CSS1Compat" == ki(B).Kb.compatMode ? B.documentElement : B.body;
                                    v != B && (v = Np(v), y = li(ki(y).Kb), C.x = v.left + y.x, C.y = v.top + y.y)
                                } else C = z(l), C = Np(C), C = new gi(C.left, C.top);
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
                    k = jj(k, h.fa);
                    m = ij(k, h.da);
                    r = a.i.now();
                    p = Object;
                    l = p.assign;
                    if (2 !== g || a.Ob || 0 >= m.width || 0 >= m.height) var G = !1;
                    else try {
                        var J = a.document.elementFromPoint(m.left + m.width /
                            2, m.top + m.height / 2);
                        G = J ? !Pp(J, f) : !1
                    } catch (X) {
                        G = !1
                    }
                    return {
                        timestamp: r,
                        value: l.call(p, {}, h, {
                            U: "geo",
                            W: G ? Lp.W : m,
                            H: k
                        })
                    }
                }), zi(a.h))
            }
        }
    }

    function Pp(a, b, c) {
        c = void 0 === c ? 0 : c;
        return void 0 === a.j || void 0 === b.j ? !1 : a.j === b.j || ni(b.j, function(d) {
            return d === a.j
        }) ? !0 : b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView === b.j.ownerDocument.defaultView.top ? !1 : 10 > c && b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView.frameElement ? Pp(a, new Mi(b.j.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function Qp(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? Rp(a) : Sp(a), bg(1), md())
        }
    }

    function Rp(a) {
        return function(b) {
            return b.g(U(function(c) {
                var d = a.ResizeObserver;
                if (!d || void 0 === c.j) return N(Lp.H);
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
                })).g(Ah(a.B, 736), P(function(f) {
                    return f.contentRect
                }));
                return ce(N(c.j.getBoundingClientRect()), e)
            }), S(hj))
        }
    }

    function Sp(a) {
        return function(b) {
            var c = b.g(bp(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Ni;
            c = ce(b.g(P(function() {
                return Li("resize")
            })), c, d);
            return Q(b, c).g(Ah(a.B, 737), P(function(e) {
                e = t(e).next().value;
                return void 0 === e.j ? void 0 : e.j.getBoundingClientRect()
            }), Go(), S(hj))
        }
    };

    function Tp(a, b) {
        var c = Up(a, b).g(bg(1), md());
        return function(d) {
            return function(e) {
                e = e.g(U(function(f) {
                    return f.element
                }), S());
                return Q([c, e]).g(U(function(f) {
                    var g = t(f);
                    f = g.next().value;
                    g = g.next().value;
                    return Vp(a, f.hi, Qp(a), f.Hi, d, f.Qh, g)
                }), zi(a.h))
            }
        }
    }

    function Wp(a, b, c) {
        var d = Tp(a, c)(b);
        return function(e) {
            var f = d(N(e));
            return function(g) {
                return Q([g, f]).g(P(function(h) {
                    var k = t(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = jj(k.value.H, h.value.fa),
                        m = ij(jj(k.value.W, h.value.fa), h.value.da);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            U: "nio",
                            W: m,
                            H: l
                        })
                    }
                }))
            }
        }
    }

    function Xp(a) {
        return P(function(b) {
            return "nio" !== b.value.ca ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    da: qo(a, !0),
                    S: qo(a, !0)
                })
            })
        })
    }

    function Yp(a, b) {
        return N(b).g(a, P(function() {
            return b
        }))
    }

    function Up(a, b) {
        return a.i.timeline !== Oe ? ed(new Ce(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? ed(new Ce(0)) : (new L(function(c) {
            var d = new M,
                e = new Ip(d.next.bind(d), {
                    threshold: [].concat(u(b))
                });
            c.next({
                Hi: d.g(Ah(a.B, 735)),
                hi: e,
                Qh: function(f) {
                    f = e.takeRecords(f);
                    0 < f.length && d.next(f)
                }
            })
        })).g(zf(1), bg(1), md()) : ed(new Ce(1))
    }

    function Zp(a) {
        return Pd(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function Vp(a, b, c, d, e, f, g) {
        return new L(function(h) {
            function k() {
                y || (y = !0, void 0 !== g.j && b.unobserve(e, g.j), m.unsubscribe(), v.unsubscribe(), p.unsubscribe(), C.unsubscribe())
            }
            if (void 0 !== g.j) {
                Jp(b, e);
                b.observe(e, g.j);
                var l = new Zc({
                        timestamp: a.i.now(),
                        value: Object.assign({}, Lp, {
                            ca: "nio",
                            U: "nio"
                        })
                    }),
                    m = d.g(Sd(function(B) {
                        return Zp(B)
                    }), R(function(B) {
                        return B.target === g.j
                    }), P(function(B) {
                        return {
                            timestamp: new Qe(B.time, Oe),
                            value: {
                                ca: "nio",
                                da: B.rootBounds || gj,
                                S: B.rootBounds || qo(a, !0),
                                aa: r,
                                U: "nio",
                                W: B.intersectionRect,
                                H: B.boundingClientRect,
                                fa: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: B.isIntersecting,
                                og: B.isVisible
                            }
                        }
                    }), Xf(l), md()).subscribe(h),
                    r = new M,
                    p = r.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.i.now(),
                            value: l.value.value
                        });
                        void 0 !== g.j && (b.unobserve(e, g.j), b.observe(e, g.j))
                    }),
                    v = Yp(c, g).subscribe(function() {
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

    function $p(a, b) {
        var c = a.se().g(P(function() {
            return "b"
        }));
        return he(b, c).g(zf(1), V(a.h, 1))
    };

    function aq(a) {
        return function(b) {
            var c;
            return b.g(pg(function(d) {
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
    var bq = function(a) {
            return a.W.width * a.W.height / (a.H.width * a.H.height)
        },
        cq = aq(K(P(function(a) {
            var b;
            return null != (b = a.hd) ? b : bq(a)
        }), P(function(a) {
            return isFinite(a) ? a : 0
        }))),
        dq = aq(K(P(function(a) {
            var b;
            return null != (b = a.hd) ? b : bq(a)
        }), P(function(a) {
            return isFinite(a) ? a : -1
        })));
    var eq = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    eq.prototype.ka = function(a) {
        return a instanceof eq ? this.a.ka(a.a) && this.b.ka(a.b) : !1
    };
    eq.prototype.sa = function(a) {
        var b = this.a.sa(a).value,
            c = this.b.sa(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(eq.prototype, {
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
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.A.timestamp.maximum(this.b.A.timestamp),
                    b = this.a.A.timestamp.equals(a) ? this.a.A.value : this.a.sa(a).value,
                    c = this.b.A.timestamp.equals(a) ? this.b.A.value : this.b.sa(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var fq = function(a, b) {
        this.input = a;
        this.vd = b;
        this.A = {
            timestamp: this.input.A.timestamp,
            value: this.vd(this.input.A.value)
        }
    };
    fq.prototype.ka = function(a) {
        return a instanceof fq ? this.input.ka(a.input) && this.vd === a.vd : !1
    };
    fq.prototype.sa = function(a) {
        a = this.input.sa(a);
        return {
            timestamp: a.timestamp,
            value: this.vd(a.value)
        }
    };
    da.Object.defineProperties(fq.prototype, {
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

    function gq(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var hq = function(a, b, c) {
        this.clock = a;
        this.A = b;
        this.active = c
    };
    hq.prototype.ka = function(a) {
        return a instanceof hq ? this.active === a.active && this.clock.timeline === a.clock.timeline && gq(this.A, a.A) : !1
    };
    hq.prototype.sa = function(a) {
        return {
            timestamp: a,
            value: this.A.value + (this.active ? Math.max(0, Se(a, this.A.timestamp)) : 0)
        }
    };
    var iq = function() {};
    iq.prototype.ma = function() {
        return this.sa(this.clock.now())
    };
    iq.prototype.ta = function(a) {
        var b = this.clock.timeline,
            c, d = null != (c = a.get(b)) ? c : this.clock.now();
        a.set(b, d);
        return this.sa(d)
    };
    iq.prototype.map = function(a) {
        return new jq(this, a)
    };
    iq.prototype.wa = function(a) {
        return new kq(this, a)
    };
    var kq = function() {
        eq.apply(this, arguments);
        this.map = iq.prototype.map;
        this.wa = iq.prototype.wa;
        this.ma = iq.prototype.ma;
        this.ta = iq.prototype.ta
    };
    w(kq, eq);
    var lq = function() {
        hq.apply(this, arguments);
        this.map = iq.prototype.map;
        this.wa = iq.prototype.wa;
        this.ma = iq.prototype.ma;
        this.ta = iq.prototype.ta
    };
    w(lq, hq);
    var jq = function() {
        fq.apply(this, arguments);
        this.map = iq.prototype.map;
        this.wa = iq.prototype.wa;
        this.ma = iq.prototype.ma;
        this.ta = iq.prototype.ta
    };
    w(jq, fq);

    function mq(a, b) {
        a.Ja && (a.yb = a.Ja);
        a.Ja = b;
        a.yb && a.yb.value ? (b = Math.max(0, Se(b.timestamp, a.yb.timestamp)), a.totalTime += b, a.ra += b) : a.ra = 0;
        return a
    }

    function nq(a) {
        return K(Uf(mq, {
            totalTime: 0,
            ra: 0
        }), P(function(b) {
            return new lq(a, {
                timestamp: b.Ja.timestamp,
                value: b.totalTime
            }, b.Ja.value)
        }))
    }

    function oq(a) {
        return K(Uf(mq, {
            totalTime: 0,
            ra: 0
        }), P(function(b) {
            return new lq(a, {
                timestamp: b.Ja.timestamp,
                value: b.ra
            }, b.Ja.value)
        }))
    };

    function pq(a) {
        return K(oq(a), P(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var qq = function(a, b) {
        this.A = b;
        this.ma = iq.prototype.ma;
        this.ta = iq.prototype.ta;
        this.map = iq.prototype.map;
        this.wa = iq.prototype.wa;
        this.clock = a
    };
    qq.prototype.ka = function(a) {
        return a.active
    };
    qq.prototype.sa = function() {
        return this.A
    };
    da.Object.defineProperties(qq.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function rq(a, b) {
        return b.g(P(function(c) {
            return new qq(a.i, {
                timestamp: a.i.now(),
                value: c
            })
        }))
    };

    function sq(a, b) {
        return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
    };

    function tq(a) {
        return function(b) {
            return b.g(sg(a), P(function(c) {
                var d = t(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: sq(c.value, d)
                }
            }))
        }
    };
    var uq = P(function(a) {
        if ("omid" === a.value.ca) {
            if ("nio" === a.value.U) return "omio";
            if ("geo" === a.value.U) return "omgeo"
        }
        return "geo" === a.value.U || "nio" === a.value.U ? a.value.ca : a.value.U
    });

    function vq() {
        return K(R(function(a, b) {
            return 0 < b
        }), wq, T(-1), S())
    }
    var wq = K(R(function(a) {
        return !isNaN(a)
    }), Uf(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), S());
    var xq = aq(K(P(function(a) {
        return a.W.width * a.W.height / (a.da.width * a.da.height)
    }), P(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function yq(a, b, c) {
        return a ? Q([b, c]).g(R(function(d) {
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

    function zq(a) {
        return function(b) {
            var c = b.g(cq),
                d = b.g(xq);
            return a instanceof L ? a.g(U(function(e) {
                return yq(e, c, d)
            })) : yq(a.value, c, d)
        }
    };
    var Aq = K(aq(P(function(a) {
        a = a.hd ? a.hd * a.H.width * a.H.height / (a.S.width * a.S.height) : a.W.width * a.W.height / (a.S.width * a.S.height);
        return isFinite(a) ? a : 0
    })));

    function Bq(a, b, c, d) {
        var e = d.ld,
            f = d.ne,
            g = d.Xg,
            h = d.Bf,
            k = d.Ke,
            l = d.sg,
            m = d.nd;
        d = d.Ug;
        b = Cq(a, c, b);
        c = Dq(a, c);
        d = Eq(b, d);
        var r = Fq(a, e, l, b),
            p = r.g(P(function(A) {
                return A.value
            }), S(), V(a, 1), Uf(function(A, W) {
                return Math.max(A, W)
            }, 0)),
            v = r.g(P(function(A) {
                return A.value
            }), vq(), V(a, 1)),
            y = b.g(dq, P(function(A) {
                return A.value
            }), zf(2), S(), V(a, 1));
        g = Gq(a, b, g, h);
        var C = g.g(T(!1), S(), P(function(A) {
            return A ? k : f
        }));
        h = r.g(tq(C), S(), V(a, 1));
        var B = Q([h, b]).g(R(function(A) {
                var W = t(A);
                A = W.next().value;
                W = W.next().value;
                return A.timestamp.equals(W.timestamp)
            }),
            P(function(A) {
                var W = t(A);
                A = W.next().value;
                W = W.next().value;
                return {
                    visible: A.value,
                    geometry: W.value.H
                }
            }), Uf(function(A, W) {
                return !W.visible && A.visible ? A : W
            }, {
                visible: !1,
                geometry: gj
            }), P(function(A) {
                return A.geometry
            }), T(gj), V(a, 1), S(hj));
        l = l instanceof L ? l.g(S(), Rf()) : ee;
        C = Q([l, C]).g(Rf());
        var G = b.g(R(function(A) {
                return "ns" !== A.value.ca && "ns" !== A.value.U
            }), Uf(function(A) {
                return A + 1
            }, 0), T(0), V(a, 1)),
            J = c.g(Rf(!0), T(!1), V(a, 1));
        J = Q([m, J]).g(P(function(A) {
            var W = t(A);
            A = W.next().value;
            W = W.next().value;
            return A &&
                !W
        }), V(a, 1));
        var X = b.g(Aq, S()),
            fa = X.g(P(function(A) {
                return A.value
            }), Uf(function(A, W) {
                return Math.max(A, W)
            }, 0), S(), V(a, 1)),
            E = X.g(P(function(A) {
                return A.value
            }), vq(), V(a, 1));
        return {
            Ze: l,
            Kc: C,
            Da: {
                aj: b,
                tg: b.g(uq),
                dd: B.g(S(hj)),
                visible: h.g(S(gq)),
                ef: r.g(S(gq)),
                rg: p,
                Bi: v,
                Ef: b.g(Fp, S(Mb)),
                uj: X,
                ui: fa,
                Ai: E,
                kd: c,
                aa: (new Y(new M)).T(a),
                mg: g,
                ld: e,
                nd: m,
                Vf: J,
                vj: G,
                ri: y,
                Hd: d
            }
        }
    }

    function Dq(a, b) {
        return b.g(R(function() {
            return !1
        }), P(function(c) {
            return c
        }), hf(function(c) {
            return (new Y(c)).T(a)
        }))
    }

    function Eq(a, b) {
        a = Q([a, b]).g(P(function(e) {
            e = t(e);
            var f = e.next().value;
            if (e.next().value && f.value.isIntersecting) return f.value.og
        }), S());
        var c = a.g(P(function(e) {
                return void 0 === e ? !0 : e
            }), Uf(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(Uf(function(e, f) {
                return void 0 === f ? e : f ? !1 : null != e ? e : !0
            }, void 0), P(function(e) {
                return !!e
            }));
        return Q([b, ke(a, c, d)]).g(P(function(e) {
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

    function Cq(a, b, c) {
        return b.g(Yf(ee), V(a, 1)).g(S(function(d, e) {
            return gq(d, e, Mp)
        }), T({
            timestamp: c.now(),
            value: Lp
        }), V(a, 1))
    }

    function Fq(a, b, c, d) {
        c = d.g(zq(c), aq(P(function(e) {
            return op(e)
        })), V(a, 1));
        return b instanceof Y ? c : Q([c, b]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(gq), V(a, 10))
    }

    function Gq(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.H.width * e.value.H.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = Q(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), V(a, 1)) : (new Y(!1)).T(a)
    };
    var Hq = function(a) {
            this.i = a;
            this.Fd = null;
            this.timeout = new M
        },
        Jq = function(a, b) {
            Iq(a);
            a.Fd = a.i.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Iq = function(a) {
            null !== a.Fd && (a.i.clearTimeout(a.Fd), a.Fd = null)
        };

    function Kq(a, b, c, d) {
        var e = Lq.Pg,
            f = new Hq(b);
        c = c.g(T(void 0), U(function() {
            Iq(f);
            return d
        })).g(P(function(g) {
            Iq(f);
            var h = g.A,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, Se(k, h.timestamp)), Jq(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return Q([c, ce(f.timeout, N(void 0))]).g(P(function(g) {
            return t(g).next().value
        }), mg(function(g) {
            return !g.ma().value
        }, !0), V(a, 1))
    };

    function Mq(a) {
        var b = new lq(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return K(oq(a), Uf(function(c, d) {
            return c.A.value > d.A.value ? new lq(a, c.A, !1) : d
        }, b), P(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Nq(a) {
        return function(b) {
            return K(tq(N(b)), Mq(a))
        }
    };

    function Oq(a) {
        return function(b) {
            return K(aq(P(function(c) {
                return sq(c, b)
            })), nq(a), P(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Pq(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.wa(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Qq(a, b) {
        return a.wa(b).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Rq(a, b, c, d, e, f) {
        var g = Sq;
        if (1 < g.length)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(T(void 0), U(function() {
            return d.g(pq(a))
        }), S(function(k, l) {
            return k.ka(l)
        }), V(b, 1));
        f = f.g(T(void 0), U(function() {
            return d.g(Mq(a))
        }), S(function(k, l) {
            return k.ka(l)
        }), V(b, 1));
        return {
            Bc: e.g(T(void 0), U(function() {
                return c.g(Gp(Nq(a), g))
            }), P(Pq), S(function(k, l) {
                return k.ka(l)
            }), V(b, 1)),
            Nc: e.g(T(void 0), U(function() {
                return c.g(Gp(Oq(a), g), P(function(k) {
                    return k.map(function(l, m) {
                        return 0 < m ?
                            Qq(l, k[m - 1]) : l
                    })
                }))
            }), P(Pq), S(function(k, l) {
                return k.ka(l)
            }), V(b, 1)),
            Ac: f,
            qb: h.g(S(function(k, l) {
                return k.ka(l)
            }), V(b, 1))
        }
    };

    function Tq(a) {
        var b;
        if (b = Uq(a)) b = !Vq(a, "abgcp") && !Vq(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !Vq(a, "cbb");
        return b
    }

    function Vq(a, b) {
        return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ")
    }

    function Uq(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function Wq(a, b) {
        if (void 0 === a.j || !a.j.children) return a;
        for (var c = Lb(a.j.children); c.length;) {
            var d = b ? c.filter(Tq) : c.filter(Uq);
            if (1 === d.length) return new Mi(d[0]);
            if (1 < d.length) break;
            c = Ob(c, function(e) {
                return Lb(e.children)
            })
        }
        return a
    }

    function Xq(a, b, c, d, e) {
        if (c) return {
            cd: b,
            zb: N(null)
        };
        c = b.element.g(P(function(f) {
            a: if (void 0 === f.j || Uq(f.j)) f = {
                    wd: f,
                    zb: "mue"
                };
                else {
                    var g = Wq(f, e);
                    if (void 0 !== g.j && Uq(g.j)) f = {
                        wd: g,
                        zb: "ie"
                    };
                    else {
                        if (d || a.ze)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    wd: new Mi(g),
                                    zb: "ce"
                                };
                                break a
                            }
                        f = {
                            wd: f,
                            zb: "mue"
                        }
                    }
                }return f
        }), eg());
        return {
            cd: {
                Bb: b.Bb,
                element: c.g(P(function(f) {
                    return f.wd
                }))
            },
            zb: c.g(P(function(f) {
                return f.zb
            }))
        }
    };

    function Yq(a, b, c, d) {
        var e = d.ld,
            f = d.ne,
            g = d.Xg,
            h = d.Bf,
            k = d.Ke,
            l = d.sg,
            m = d.nd;
        d = d.Ug;
        b = Zq(a, c, b);
        c = $q(a, c);
        d = ar(b, d);
        var r = br(a, e, l, b),
            p = r.g(P(function(E) {
                return E.value
            }), S(), V(a, 1), Uf(function(E, A) {
                return Math.max(E, A)
            }, 0)),
            v = r.g(P(function(E) {
                return E.value
            }), vq(), V(a, 1)),
            y = b.g(dq, P(function(E) {
                return E.value
            }), zf(2), S(), V(a, 1));
        g = cr(a, b, g, h);
        var C = g.g(T(!1), S(), P(function(E) {
            return E ? k : f
        }));
        h = r.g(tq(C), S(), V(a, 1));
        var B = Q([h, b]).g(R(function(E) {
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
                    geometry: A.value.H
                }
            }), Uf(function(E, A) {
                return !A.visible && E.visible ? E : A
            }, {
                visible: !1,
                geometry: gj
            }), P(function(E) {
                return E.geometry
            }), T(gj), V(a, 1), S(hj));
        l = l instanceof L ? l.g(S(), Rf()) : ee;
        C = Q([l, C]).g(Rf());
        var G = b.g(R(function(E) {
                return "ns" !== E.value.ca && "ns" !== E.value.U
            }), Uf(function(E) {
                return E + 1
            }, 0), T(0), V(a, 1)),
            J = c.g(Rf(!0), T(!1), V(a, 1));
        J = Q([m, J]).g(P(function(E) {
            var A = t(E);
            E = A.next().value;
            A = A.next().value;
            return E &&
                !A
        }), V(a, 1));
        var X = b.g(Aq, S()),
            fa = X.g(P(function(E) {
                return E.value
            }), Uf(function(E, A) {
                return Math.max(E, A)
            }, 0), S(), V(a, 1));
        a = X.g(P(function(E) {
            return E.value
        }), vq(), V(a, 1));
        return {
            Ze: l,
            Kc: C,
            Da: {
                aj: b,
                tg: b.g(uq),
                dd: B.g(S(hj)),
                visible: h.g(S(gq)),
                ef: r.g(S(gq)),
                rg: p,
                Bi: v,
                Ef: b.g(Fp, S(Mb)),
                uj: X,
                ui: fa,
                Ai: a,
                kd: c,
                aa: b.g(P(function(E) {
                    return E.value.aa
                })),
                mg: g,
                ld: e,
                nd: m,
                Vf: J,
                vj: G,
                ri: y,
                Hd: d
            }
        }
    }

    function $q(a, b) {
        return b.g(R(function() {
            return !1
        }), P(function(c) {
            return c
        }), hf(function(c) {
            return (new Y(c)).T(a)
        }))
    }

    function Zq(a, b, c) {
        return b.g(Yf(ee), V(a, 1)).g(S(function(d, e) {
            return gq(d, e, Mp)
        }), T({
            timestamp: c.now(),
            value: Lp
        }), V(a, 1))
    }

    function br(a, b, c, d) {
        c = d.g(zq(c), aq(P(function(e) {
            return op(e)
        })), V(a, 1));
        return b instanceof Y ? c : Q([c, b]).g(P(function(e) {
            var f = t(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(gq), V(a, 1))
    }

    function cr(a, b, c, d) {
        b = [b.g(P(function(e) {
            return 242500 <= e.value.H.width * e.value.H.height
        }))];
        c instanceof L && b.push(c.g(P(function(e) {
            return !!e
        })));
        c = Q(b);
        return d ? c.g(P(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), V(a, 1)) : (new Y(!1)).T(a)
    }

    function ar(a, b) {
        a = Q([a, b]).g(P(function(e) {
            e = t(e);
            var f = e.next().value;
            if (e.next().value && f.value.isIntersecting) return f.value.og
        }), S());
        var c = a.g(P(function(e) {
                return void 0 === e ? !0 : e
            }), Uf(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(Uf(function(e, f) {
                return void 0 === f ? e : f ? !1 : null != e ? e : !0
            }, void 0), P(function(e) {
                return !!e
            }));
        return Q([b, ke(a, c, d)]).g(P(function(e) {
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
    var dr = K(yo("data-google-av-itpl"), P(function(a) {
        return Number(a)
    }), P(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var er = {
            Aj: "addEventListener",
            Kj: "getMaxSize",
            Lj: "getScreenSize",
            Mj: "getState",
            Nj: "getVersion",
            Yj: "removeEventListener",
            Uj: "isViewable"
        },
        fr = function(a, b) {
            this.Aa = null;
            this.fi = new M;
            b = b || this.wj;
            var c = a.ze,
                d = !a.Ob;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.bd = b(e);
                    this.Aa = e;
                    this.Ab = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.bd = b(a), this.Aa = a, this.Ab = c ? d ? 2 : 1 : 0) : (this.Ab = -1, this.bd = 2)
        };
    fr.prototype.addEventListener = function(a, b) {
        return this.Yb("addEventListener", a, b)
    };
    fr.prototype.removeEventListener = function(a, b) {
        return this.Yb("removeEventListener", a, b)
    };
    fr.prototype.Xf = function() {
        var a = this.Yb("getVersion");
        return "string" === typeof a ? a : ""
    };
    fr.prototype.getState = function() {
        var a = this.Yb("getState");
        return "string" === typeof a ? a : ""
    };
    var gr = function(a) {
            a = a.Yb("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        hr = function(a) {
            if (a.Aa) return a = a.Aa.AFMA_LIDAR, "string" === typeof a ? a : void 0
        };
    fr.prototype.wj = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(er).every(function(b) {
            return "function" === typeof a[b]
        }) ? 0 : 1 : 2 : 1
    };
    fr.prototype.Yb = function(a) {
        var b = x.apply(1, arguments);
        if (this.Aa) try {
            return this.Aa[a].apply(this.Aa, u(b))
        } catch (c) {
            this.fi.next(a)
        }
    };
    da.Object.defineProperties(fr.prototype, {
        Kf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.Aa) {
                    var a = this.Aa.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.Aa && (this.Aa.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function ir(a, b) {
        return -1 !== (new fr(a)).Ab ? (new Y(!0)).T(a.h) : b.g(yo("data-google-av-inapp"), P(function(c) {
            return null !== c
        }), V(a.h, 1))
    };
    var kr = function(a, b) {
            var c = this;
            this.i = a;
            this.Le = this.ud = null;
            this.ej = b.g(S()).subscribe(function(d) {
                jr(c);
                c.Le = d
            })
        },
        lr = function(a, b) {
            jr(a);
            a.ud = a.i.setTimeout(function() {
                var c;
                return void(null == (c = a.Le) ? void 0 : c.next())
            }, b)
        },
        jr = function(a) {
            null !== a.ud && a.i.clearTimeout(a.ud);
            a.ud = null
        };
    kr.prototype.Y = function() {
        jr(this);
        this.ej.unsubscribe();
        this.Le = null
    };

    function mr(a, b, c, d, e) {
        var f = Lq.Pg;
        var g = void 0 === g ? new kr(b, d) : g;
        return (new L(function(h) {
            var k = c.g(T(void 0), U(function() {
                return nr(e)
            })).g(P(function(l) {
                var m = l.value;
                l = l.timestamp;
                var r = m.visible;
                m = m.qb;
                var p = m >= f;
                p || !r ? jr(g) : (l = Math.max(0, Se(b.now(), l)), lr(g, Math.max(0, f - m - l)));
                return p
            }), Uf(function(l, m) {
                return m || l
            }, !1), S()).subscribe(h);
            return function() {
                g.Y();
                k.unsubscribe()
            }
        })).g(mg(function(h) {
            return !h
        }, !0), V(a, 1))
    }

    function nr(a) {
        return rp([a, a.g(Hp())]).g(P(function(b) {
            var c = t(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    qb: c.value
                }
            }
        }), S(function(b, c) {
            return gq(b, c, function(d, e) {
                return d.qb === e.qb && d.visible === e.visible
            })
        }))
    };

    function or(a, b) {
        return {
            Wd: b.g(yo("data-google-av-adk")),
            lc: b.g(yo("data-google-av-btr"), S(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            fe: b.g(yo("data-google-av-cpmav"), S(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            mf: b.g(yo("data-google-av-vrus"), S(), P(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Ch: dp(a, b),
            flags: b.g(yo("data-google-av-flags"), S()),
            hb: ir(a, b),
            Fe: b.g(vp("cr", function(c) {
                return "1" ===
                    c
            }), S()),
            li: b.g(vp("omid", function(c) {
                return "1" === c
            }), S()),
            Be: b.g(dr),
            metadata: b.g(yo("data-google-av-metadata")),
            Ua: b.g(Fo),
            Ia: b.g(zo),
            zj: b.g(vp("la", function(c) {
                return "1" === c
            }), S()),
            tb: b.g(yo("data-google-av-turtlex"), P(function(c) {
                return null !== c
            }), S()),
            Je: b.g(yo("data-google-av-vattr"), P(function(c) {
                return null !== c
            }), S())
        }
    };

    function pr() {
        return K(up(), Uf(function(a, b) {
            return Math.max(a, b)
        }, 0), P(function(a) {
            return Math.round(a)
        }))
    };

    function qr(a) {
        return K(tq(N(a)), pr())
    };

    function rr(a, b, c, d, e) {
        c = c.g(P(function() {
            return !1
        }));
        d = Q([e, d]).g(U(function(f) {
            f = t(f).next().value;
            return sr(b, f)
        }));
        return ce(N(!1), c, d).g(S(), V(a.h, 1))
    }

    function sr(a, b) {
        return a.g(P(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var tr = [33, 32],
        ur = K(dr, P(function(a) {
            return 0 <= tr.indexOf(a)
        }), S());

    function vr(a, b, c, d, e, f) {
        var g = c.g(P(function(k) {
                return 9 === k
            })),
            h = b.element.g(ur);
        c = e.g(R(function(k) {
            return k
        }), U(function() {
            return Q([g, h])
        }), P(function(k) {
            k = t(k);
            var l = k.next().value;
            return !k.next().value || l
        }), S());
        f = Q([c, d.g(S()), f]).g(P(function(k) {
            var l = t(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return Xq(a, b, !k, m, l)
        }), bg(1), md());
        d = f.g(P(function(k) {
            return k.cd
        }));
        f = f.g(U(function(k) {
            return k.zb
        }), T(null), S(), V(a.h, 1));
        return {
            Qa: d,
            oc: f
        }
    };

    function wr(a) {
        var b = void 0 === b ? !1 : b;
        return K(U(function(c) {
            return dj(a.document, c, b)
        }), V(a.h, 1))
    };
    var xr = function(a, b, c, d, e, f) {
        this.xc = b.element.g(wr(a), V(a.h, 1));
        this.Ig = rr(a, c, b.element, this.xc, d);
        c = vr(a, b, e, d, this.Ig, f);
        d = c.oc;
        this.Qa = c.Qa;
        this.oc = d;
        this.nf = ce((new Y(1)).T(a.h), b.element.g(zf(1), P(function() {
            return 2
        }), V(a.h, 1)), this.xc.g(zf(1), P(function() {
            return 3
        }), V(a.h, 1)), this.Ig.g(R(Boolean), zf(1), P(function() {
            return 0
        }), V(a.h, 1))).g(mg(function(g) {
            return 0 !== g
        }, !0), V(a.h, 0))
    };

    function yr(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function zr(a, b, c) {
        return b instanceof L ? b.g(U(function(d) {
            return (d = yr(d, c)) ? ed(new Ce(d)) : a
        })) : (b = yr(b.value, c)) ? ed(new Ce(b)) : a
    };

    function Ar(a) {
        var b = new Ce(13);
        if (1 > a.length) return {
            chain: $c,
            ae: $c
        };
        var c = new M,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(hf(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(hf(function(e) {
                c.next(e);
                return ed(b)
            }), Xf(new M), md()),
            ae: c
        }
    };
    var Br = function() {};
    var Cr = function(a, b) {
        this.context = a;
        this.oj = b
    };
    w(Cr, Br);
    Cr.prototype.bb = function(a, b) {
        var c = this.oj.map(function(f) {
                return f.bb(a, b)
            }),
            d = Ar(c.map(function(f) {
                return f.fb
            })),
            e = d.ae.g(Dr());
        return {
            fb: d.chain.g(V(this.context.h, 1)),
            Ya: Object.assign.apply(Object, [{
                af: e,
                Hk: d.ae
            }].concat(u(c.map(function(f) {
                return f.Ya
            }))))
        }
    };
    var Dr = function() {
        return Uf(function(a, b) {
            b instanceof Ce ? a.push(b.xi) : a.push(-1);
            return a
        }, [])
    };

    function Er(a, b) {
        var c = a.g(Xf(new M), md());
        return U(function(d) {
            return c.g(b(d))
        })
    };

    function Fr(a, b) {
        var c = void 0 === c ? function() {
            var f = (qi(a.global) ? a.global.innerWidth : 0) || a.te() || 0,
                g = (qi(a.global) ? a.global.innerHeight : 0) || a.re() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Ob ? cj(a.document) ? a.ki ? null : ed(new Ce(5)) : ed(new Ce(4)) : ed(new Ce(3));
        if (d) return d;
        var e = new M;
        return ce(N({}), b, e).g(P(function() {
            var f = Gr(a, c);
            return {
                timestamp: a.i.now(),
                value: {
                    ca: "iem",
                    da: f,
                    S: f,
                    aa: e,
                    fa: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), V(a.h, 1))
    }

    function Gr(a, b) {
        b = b();
        var c = li(document),
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
        if (b) h = Hr(f, h, function(p) {
            return d(e, p)
        }), g = Hr(e, g, function(p) {
            return d(p, f)
        });
        else if (k) h = Hr(f, h, function(p) {
            return d(g, p)
        }), e = Hr(g, e, function(p) {
            return d(p, f)
        });
        else if (l) f = Hr(h, f, function(p) {
            return d(e,
                p)
        }), g = Hr(e, g, function(p) {
            return d(p, h)
        });
        else if (c) f = Hr(h, f, function(p) {
            return d(g, p)
        }), e = Hr(g, e, function(p) {
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
            f = Hr(r, f, function(p) {
                return d(m, p)
            });
            h = Hr(r, h, function(p) {
                return d(m, p)
            });
            e = Hr(m, e, function(p) {
                return d(p, r)
            });
            g = Hr(m, g, function(p) {
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

    function Hr(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Ir = function(a, b) {
        this.context = a;
        this.Sa = b
    };
    w(Ir, Br);
    Ir.prototype.bb = function(a, b) {
        var c = Er(Fr(this.context, this.Sa), Op(this.context, b.Ua));
        return {
            fb: zr(a.Qa.g(c), b.hb, 0),
            Ya: {}
        }
    };

    function Jr(a, b) {
        if (a.Ob) return ed(new Ce(6));
        var c = new M;
        return ce(N({}), b, c).g(P(function() {
            return {
                timestamp: a.i.now(),
                value: {
                    ca: "geo",
                    da: Kr(a),
                    S: qo(a, !0),
                    aa: c,
                    fa: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), zi(a.h))
    }

    function Kr(a) {
        var b = qo(a, !1);
        if (!a.ze || !qi(a.global.parent) || a.global.parent === a.global) return b;
        var c = new no(a.global.parent, a.Ka);
        c.J = a.J;
        c = Kr(c);
        a = a.global.frameElement.getBoundingClientRect();
        return ij(jj(ij(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Lr = function(a, b) {
        this.context = a;
        this.Sa = b
    };
    w(Lr, Br);
    Lr.prototype.bb = function(a, b) {
        var c = Er(Jr(this.context, this.Sa), Op(this.context, b.Ua));
        return {
            fb: zr(a.Qa.g(c), b.hb, 0),
            Ya: {}
        }
    };
    var Mr = function(a, b, c) {
        c = void 0 === c ? Tp(a, b) : c;
        this.context = a;
        this.ii = c
    };
    w(Mr, Br);
    Mr.prototype.bb = function(a, b) {
        var c = this.ii(b.Vg);
        return {
            fb: zr(a.Qa.g(c, Xp(this.context)), b.hb, 0),
            Ya: {}
        }
    };

    function Nr(a, b, c, d, e) {
        var f = void 0 === f ? new fr(a) : f;
        var g = void 0 === g ? yg(a.i, 500) : g;
        var h = void 0 === h ? yg(a.i, 100) : h;
        e = N(f).g(Or(c), pg(function(k) {
            d.next(k.Ab)
        }), Pr(a, h), Qr(a), Rr(a, e), bg(1), md());
        f = new M;
        b = ce(N({}), b, f);
        return e.g(Sr(a, f, b, g, c), V(a.h, 1))
    }

    function Rr(a, b) {
        return K(function(c) {
            return Q([c, b])
        }, pf(function(c) {
            c = t(c);
            var d = c.next().value;
            return 9 !== c.next().value || gr(d) ? N(!0) : Tr(a, d, "viewableChange").g(R(function(e) {
                return t(e).next().value
            }), zf(1))
        }), P(function(c) {
            return t(c).next().value
        }))
    }

    function Or(a) {
        return U(function(b) {
            if (-1 === b.Ab) return a.next("if"), ed(new Ce(7));
            if (0 !== b.bd) switch (b.bd) {
                case 1:
                    return a.next("mm"), ed(new Ce(18));
                case 2:
                    return a.next("ng"), ed(new Ce(17));
                default:
                    return a.next("i"), ed(new Ce(8))
            }
            return N(b)
        })
    }

    function Pr(a, b) {
        return pf(function() {
            var c = a.vg;
            return "complete" === aj(a.document) ? N(!0) : c.g(pf(function() {
                return b
            }))
        })
    }
    var Qr = function(a) {
        return U(function(b) {
            return "loading" !== b.getState() ? N(b) : Tr(a, b, "ready").g(P(function() {
                return b
            }))
        })
    };

    function Sr(a, b, c, d, e) {
        return U(function(f) {
            var g = hr(f);
            if ("string" !== typeof g) return e.next("nc"), ed(new Ce(9));
            void 0 !== f.Kf && (f.Kf = !0);
            g = Tr(a, f, g, Ur);
            var h = {
                version: f.Xf(),
                Ab: f.Ab
            };
            g = g.g(P(function(l) {
                return Vr.apply(null, [a, b, f, h].concat(u(l)))
            }));
            var k = d.g(pg(function() {
                e.next("mt")
            }), U(function() {
                return ed(new Ce(10))
            }));
            g = he(g, k);
            return Q([g, c]).g(P(function(l) {
                l = t(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.i.now()
                })
            }))
        })
    }

    function Ur(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function Vr(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : gj;
        c = c.Yb("getMaxSize");
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
                da: e,
                S: c,
                ca: "mraid",
                aa: b,
                fa: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.i.now()
        };
        return Object.assign({}, a, d, {
            ek: f
        })
    }

    function Tr(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new L(function(e) {
            var f = a.B.bc(745, function() {
                e.next(x.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(R(function(e) {
            return d.apply(null, u(e))
        }))
    };
    var Wr = function(a, b) {
        this.context = a;
        this.Sa = b
    };
    w(Wr, Br);
    Wr.prototype.bb = function(a, b) {
        var c = new gd(1),
            d = new gd(1),
            e = Er(Nr(this.context, this.Sa, c, d, b.Ua), Op(this.context, b.Ua));
        return {
            fb: zr(a.Qa.g(e), b.hb, 1),
            Ya: {
                Me: c.g(V(this.context.h, 1)),
                Ne: d.g(V(this.context.h, 1))
            }
        }
    };

    function Xr(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function Yr() {
        var a = Error;
        return Pn(function(b) {
            return b instanceof a
        }, function() {
            return On(a)
        })
    };

    function Zr(a, b) {
        var c = void 0 === c ? null : c;
        var d = new M,
            e = void 0,
            f = a.Uf,
            g = d.g(P(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.i.now()
                }) : null
            }), R(function(k) {
                return null !== k
            }), P(function(k) {
                return k
            }));
        b = Q([ce(f, g), b]);
        var h = c;
        return b.g(R(function(k) {
            k = t(k).next().value;
            null === h && (h = k.value.ph);
            return k.value.ph === h
        }), pg(function(k) {
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
                            Ck: p ? p.width * p.height : 0
                        }),
                    B = $r(C),
                    G = m.adView,
                    J = G.measuringElement && G.containerGeometry ? $r(G.containerGeometry) : $r(G.geometry),
                    X = $r(G.geometry),
                    fa = G.reasons.some(Xr),
                    E = fa ? gj : $r(G.onScreenGeometry),
                    A;
                l && (A = G.percentageInView / 100);
                l && fa && (A = 0);
                return {
                    timestamp: r,
                    value: {
                        ca: "omid",
                        da: J,
                        S: B,
                        aa: d,
                        U: "omid",
                        H: X,
                        fa: {
                            x: J.left,
                            y: J.top
                        },
                        W: E,
                        hd: A
                    }
                }
            } catch (Yb) {
                m = Yb;
                r = Yr();
                p = Sn;
                Sn = void 0;
                v = [];
                Qn(r, m, v) || Tn.apply(null, [void 0, p, "Guard " + r.Yf().trim() + " failed:"].concat(u(v.reverse())));
                var W, Cb;
                m = null != (Cb = null == (W = Yb) ? void 0 : W.message) ? Cb : "An unknown error occurred";
                W = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(W);
            }
        }), bg(1), md())
    }

    function $r(a) {
        var b, c, d, e;
        return {
            left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
            top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
            width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
            height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0)
        }
    };

    function as(a, b, c, d) {
        c = void 0 === c ? ee : c;
        var e = a.h;
        if (null === b) return ed(new Ce(20));
        if (!b.validate()) return ed(new Ce(21));
        var f;
        d = bs(e, b, d).g(P(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.i,
                l = a.i;
            if (k.timeline !== g.timeline) throw new He;
            g = new Qe(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return ce(d, c.g(P(function() {
            return f
        }))).g(R(function(g) {
            return void 0 !== g
        }), P(function(g) {
            return g
        }), V(a.h, 1))
    }

    function bs(a, b, c) {
        return Zr(b, c).g(V(a, 1), P(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    fa: {
                        x: d.value.H.left,
                        y: d.value.H.top
                    },
                    da: d.value.W,
                    S: d.value.S,
                    ca: d.value.U,
                    aa: d.value.aa
                }
            }
        }))
    };
    var cs = function(a, b, c) {
        this.oa = a;
        this.O = b;
        this.Sa = c
    };
    w(cs, Br);
    cs.prototype.bb = function(a, b) {
        var c = b.Ua;
        b = as(this.O, this.oa, this.Sa, b.ug);
        c = Er(b, Op(this.O, c));
        return {
            fb: a.Qa.g(c),
            Ya: {}
        }
    };
    var ds = function(a, b, c) {
        this.oa = a;
        this.O = b;
        this.Mh = c
    };
    w(ds, Br);
    ds.prototype.bb = function(a, b) {
        var c = as(this.O, this.oa, void 0, b.ug);
        b = Wp(this.O, b.Vg, this.Mh);
        c = Er(c, b);
        return {
            fb: a.Qa.g(c),
            Ya: {}
        }
    };
    var es = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        fs = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };

    function gs(a) {
        return a.document.Pi.g(P(function(b) {
            return "visible" === b
        }), S(), V(a.h, 1))
    };
    var hs;
    hs = ["2024032501"].slice(-1)[0].substring(0, 8);

    function is(a, b, c) {
        var d;
        return b.g(S(), U(function(e) {
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
        }), T(!1), V(a.h, 1))
    };

    function js(a) {
        return K(aq(P(function(b) {
            return sq(b, a)
        })), tp(), P(function(b) {
            return Math.round(b)
        }))
    };

    function ks(a, b, c, d, e) {
        var f = Sq;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(T(void 0), U(function() {
            return c.g(Hp())
        }), S(), V(a, 1));
        e = e.g(T(void 0), U(function() {
            return c.g(pr())
        }), S(), V(a, 1));
        return {
            Bc: d.g(T(void 0), U(function() {
                return b.g(Gp(qr, f))
            }), S(Mb), V(a, 1)),
            Nc: d.g(T(void 0), U(function() {
                return b.g(Gp(js, f), P(function(h) {
                    return h.map(function(k, l) {
                        return 0 < l ? k - h[l - 1] : k
                    })
                }))
            }), S(Mb), V(a, 1)),
            Ac: e,
            qb: g.g(S(gq), V(a, 1))
        }
    };

    function ls(a, b, c) {
        var d = c.g(P(function(e) {
            return {
                value: e,
                timestamp: a.i.now()
            }
        }), S(gq));
        return b instanceof L ? b.g(S(), U(function(e) {
            return e ? (new Y({
                value: !1,
                timestamp: a.i.now()
            })).T(a.h) : d
        })) : !1 === b.value ? d : new Y(!1)
    }

    function ms(a, b, c, d, e, f, g) {
        var h = Lq;
        b = b instanceof L ? b.g(T(!1), S()) : b;
        var k = !(oi() || pi());
        c = ls(a, c, d);
        a = g.Qa.g(qp(a.h));
        return Object.assign({}, h, {
            ld: c,
            Xg: e,
            Bf: k,
            sg: b,
            nd: a,
            Ug: f
        })
    };

    function ns(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function os(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return $c;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new M;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(Ah(a.B, 743))
    };
    var ps = function(a) {
            var b = this;
            this.Ie = !1;
            this.Qe = [];
            this.Pe = [];
            a(function(c) {
                b.Ie = !0;
                b.fj = c;
                b.evaluate()
            }, function(c) {
                b.bj = c;
                b.evaluate()
            })
        },
        qs = function(a) {
            return new ps(function(b, c) {
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
    ps.prototype.evaluate = function() {
        var a = this.fj,
            b = this.bj;
        if (void 0 !== b || this.Ie) this.Ie && this.Qe.forEach(function(c) {
            return void c(a)
        }), void 0 !== b && this.Pe.forEach(function(c) {
            return void c(b)
        }), this.Qe = [], this.Pe = []
    };
    ps.prototype.then = function(a) {
        this.Qe.push(a);
        this.evaluate();
        return this
    };
    ps.prototype.catch = function(a) {
        this.Pe.push(a);
        this.evaluate();
        return this
    };
    var rs = function(a) {
        this.children = a;
        this.Ee = !1;
        this.be = []
    };
    rs.prototype.complete = function() {
        var a = this;
        this.Ee = !0;
        this.be.forEach(function(b) {
            return void b(a)
        });
        this.be.splice(0)
    };
    rs.prototype.onComplete = function(a) {
        this.Ee ? a(this) : this.be.push(a)
    };
    rs.prototype.ob = function(a) {
        var b = this.children.map(function(c) {
            return c.ob(a)
        });
        return void 0 === b.find(function(c) {
            return 2 !== c
        }) ? 2 : this.ja ? 0 : b.some(function(c) {
            return 1 === c
        }) ? 1 : 0
    };
    da.Object.defineProperties(rs.prototype, {
        ja: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ee
            }
        }
    });
    var ss = function() {
        var a = x.apply(0, arguments);
        rs.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            d.onComplete(function() {
                0 === --c && b.complete()
            })
        })
    };
    w(ss, rs);
    ss.prototype.clone = function() {
        return new(Function.prototype.bind.apply(ss, [null].concat(u(this.events.map(function(a) {
            return a.clone()
        })))))
    };
    ss.prototype.ff = function(a, b) {
        var c = this;
        if (!this.ja) {
            var d = this.events.find(function(e) {
                return 1 === e.ob(a)
            });
            void 0 !== d && d.ff(a, function() {
                c.ja || b()
            })
        }
    };
    var ts = function(a, b) {
        rs.call(this, []);
        this.le = a;
        this.rd = Symbol(b);
        this.Ri = a
    };
    w(ts, rs);
    ts.prototype.clone = function() {
        var a = new ts(this.Ri, this.rd.description);
        a.rd = this.rd;
        return a
    };
    ts.prototype.ob = function(a) {
        return a !== this.event ? 2 : this.ja || 0 === this.le ? 0 : 1
    };
    ts.prototype.ff = function(a, b) {
        1 === this.ob(a) && (this.le--, b(), 0 === this.le && this.complete())
    };
    da.Object.defineProperties(ts.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.rd
            }
        }
    });
    var us = function(a) {
        ts.call(this, 1, a)
    };
    w(us, ts);
    var vs = function(a, b, c) {
        var d = x.apply(3, arguments);
        this.cb = a;
        this.Jh = b;
        this.he = c;
        this.zc = new Set;
        this.Sb = d;
        if (this.cb.O) this.context = this.cb.O;
        else if (this.cb.oa) this.context = this.cb.oa;
        else throw Error("Ga");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = t(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
                Of: void 0
            }, f = e.next()) {
            g.Of = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return 0 <= k.controlledEvents.indexOf(h.Of)
                }
            }(g));
            if (0 ===
                f.length) throw Error("Ha");
            if (1 < f.length) throw Error("Ia");
        }
    };
    vs.prototype.start = function() {
        var a = this;
        this.Sb.forEach(function(b) {
            return void b.start(a.cb)
        });
        this.he.start(this.cb, this.Sh.bind(this), this.Mb.bind(this), function() {})
    };
    vs.prototype.Y = function() {
        var a = this;
        this.he.Y();
        this.zc.forEach(function(b) {
            return void a.Mb(b)
        });
        this.Sb.forEach(function(b) {
            return void b.Y()
        })
    };
    var ws = function(a, b) {
            b = {
                measuringCreativeIds: [].concat(u(a.zc.values())).map(function(c) {
                    return a.context.pc.Na(c)
                }),
                hasCreativeSourceCompleted: !!a.he.Dd,
                colleagues: a.Sb.map(function(c) {
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
                instanceId: a.context.pc.Na(a.context.Bb),
                timestamp: Se(a.context.i.now(), new Qe(0, a.context.i.timeline)),
                mediatorState: b
            };
            Ae(a.context, b)
        },
        xs = function(a, b, c, d, e) {
            var f = {};
            ws(a, (f[b] = {
                events: [{
                    timestamp: c,
                    description: d,
                    status: e
                }]
            }, f))
        };
    vs.prototype.Sh = function(a, b, c) {
        var d = this;
        if (!this.zc.has(a)) {
            var e = this.Jh.clone();
            this.zc.add(a);
            ws(this, {});
            var f = !1,
                g = [];
            this.Sb.forEach(function(h) {
                var k = function(l, m, r) {
                    var p = d.context.pc.Na(a),
                        v = Se(d.context.i.now(), new Qe(0, d.context.i.timeline)),
                        y, C = null != (y = l.description) ? y : "n/a";
                    if (0 > h.controlledEvents.indexOf(l) || 1 !== e.ob(l)) return r(!1), xs(d, p, v, C, 1), new ps(function(G) {
                        return void G()
                    });
                    var B = new ps(function(G) {
                        e.ff(l, function() {
                            d.Sb.filter(function(J) {
                                return 0 <= J.subscribedEvents.indexOf(l)
                            }).forEach(function(J) {
                                return void J.handleEvent(a,
                                    l, m)
                            });
                            G()
                        })
                    });
                    return new ps(function(G) {
                        B.then(function() {
                            r(!0);
                            xs(d, p, v, C, 2);
                            G()
                        })
                    })
                };
                h.ve(a, b, c, function(l, m, r) {
                    return f ? k(l, m, r) : new ps(function(p) {
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
    vs.prototype.Mb = function(a) {
        this.zc.delete(a);
        this.Sb.forEach(function(b) {
            b.Mb(a)
        });
        ws(this, {})
    };
    var ys = function(a, b) {
            this.key = a;
            this.defaultValue = void 0 === b ? !1 : b;
            this.valueType = "boolean"
        },
        zs = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var As = new ys("45430027"),
        Bs = new ys("100006"),
        Cs = new zs("45362137"),
        Ds = new ys("45377435"),
        Es = new ys("45618478"),
        Fs = new ys("45372163"),
        Gs = new ys("45407241"),
        Hs = new ys("45382077"),
        Is = new ys("45407239"),
        Js = new ys("45407240", !0),
        Ks = new ys("45430682"),
        Ls = new ys("45427308");
    var Ms = new zs("45389692");
    var Dl = function(a) {
        Un.call(this, a)
    };
    w(Dl, Un);
    Dl.prototype.qe = function() {
        return Kl(this, 4, !0)
    };
    Dl.va = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var Ns = [0, Gn, -2, Fn, -1];
    Dl.prototype.za = Vn(Ns);
    var Os = [0, Dn, -3];
    var Ps = [0, Bn, Dn, -1, Kn, An, Bn];
    var Qs = function(a) {
        Un.call(this, a)
    };
    w(Qs, Un);
    Qs.prototype.getType = function() {
        var a = 0;
        a = void 0 === a ? 0 : a;
        var b = ol(this, 6);
        b = null == b ? b : Number.isFinite(b) ? b | 0 : void 0;
        return Jl(b, a)
    };
    Qs.va = "ads.geo.GeoTargetMessage";
    Qs.Ad = [17, 18];
    var Rs = [0, In, -4, Kn, Fn, Dn, An, In, An, In, Dn, In, -1, Os, Jn, Cn, In, Bn, -1, Dn, -1, Bn, An, Ps, zn, In];
    Qs.prototype.za = Vn(Rs);
    var Ss = function(a) {
        Un.call(this, a)
    };
    w(Ss, Un);
    Ss.prototype.qe = function() {
        return Kl(this, 3, !0)
    };
    Ss.prototype.Wf = function() {
        return Fl(this, Qs, 4)
    };
    Ss.va = "ads.branding.measurement.client.serving.integrations.reach.ReachMetadata";
    Ss.Ad = [5, 6];
    var Ts = [0, Gn, -1, Fn, Rs, En, -1];
    Ss.prototype.za = Vn(Ts);
    var Us = function(a) {
        Un.call(this, a)
    };
    w(Us, Un);
    Us.va = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var Vs = [0, Ts, Ns],
        Ws = function(a, b) {
            return function(c, d) {
                a: {
                    if (im.length) {
                        var e = im.pop();
                        gm(e, d);
                        e.l.uc(c, void 0, void 0, d);
                        c = e
                    } else c = new hm(c, d);
                    try {
                        var f = new a,
                            g = f.u;
                        Om(b)(g, c);
                        var h = f;
                        break a
                    } finally {
                        c.Rf()
                    }
                    h = void 0
                }
                return h
            }
        }(Us, Vs);
    Us.prototype.za = Vn(Vs);
    var Xs = function() {
            this.Qf = {}
        },
        Ys = function(a, b) {
            a = a.Qf[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var Zs = function() {
        this.Hf = new Map
    };
    Zs.prototype.start = function(a, b, c, d) {
        var e = this;
        if (void 0 === this.Dd && a.O) {
            var f = a.O;
            this.Gf = d;
            c = ns(f);
            d = os(f);
            d = Io(f, d);
            this.Dd = (c ? $c : d.g(P(function(g) {
                var h = void 0 === h ? Symbol() : h;
                return Object.freeze({
                    Bb: h,
                    element: (new Y(g)).T(f.h)
                })
            }), Ao())).subscribe(function(g) {
                var h = g.Bb;
                e.Hf.set(h, g);
                g.element.g(zf(1)).subscribe(function(k) {
                    var l = xo(k, "data-google-av-flags"),
                        m = new Xs;
                    if (null !== l) try {
                        var r = JSON.parse(l)[0];
                        l = "";
                        for (var p = 0; p < r.length; p++) l += String.fromCharCode(r.charCodeAt(p) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(p %
                            10));
                        m.Qf = JSON.parse(l)
                    } catch (hg) {}
                    var v, y, C, B, G, J, X, fa, E, A, W, Cb, Yb;
                    r = {
                        considerOmidZOrderOcclusions: null != (v = null == m ? void 0 : Ys(m, Bs)) ? v : !1,
                        extraPings: null != (y = null == m ? void 0 : Ys(m, Cs)) ? y : 0,
                        extrapolators: null != (C = null == m ? void 0 : Ys(m, Ds)) ? C : !1,
                        rxlidarStatefulBeacons: null != (B = null == m ? void 0 : Ys(m, Fs)) ? B : !1,
                        shouldIgnoreAdChoicesIcon: null != (G = null == m ? void 0 : Ys(m, Hs)) ? G : !1,
                        dedicatedViewableAttributionPing: null != (J = null == m ? void 0 : Ys(m, Ms)) ? J : 0,
                        useReachIntegrationPolyfill: null != (X = null == m ? void 0 : Ys(m, Is)) ?
                            X : !1,
                        useReachIntegrationSharedStorage: null != (fa = null == m ? void 0 : Ys(m, Js)) ? fa : !0,
                        sendBrowserIdInsteadOfVPID: null != (E = null == m ? void 0 : Ys(m, Gs)) ? E : !1,
                        waitForVideoPlaybackToAccumulateState: null != (A = null == m ? void 0 : Ys(m, Ls)) ? A : !1,
                        considerOmidBufferingEvents: null != (W = null == m ? void 0 : Ys(m, As)) ? W : !1,
                        waitForImpressionColleague: null != (Cb = null == m ? void 0 : Ys(m, Ks)) ? Cb : !1,
                        fetchLaterBeacons: null != (Yb = null == m ? void 0 : Ys(m, Es)) ? Yb : !1
                    };
                    k = xo(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (null !== k) try {
                            var Ha = Ws(k);
                            break a
                        } catch (hg) {}
                        Ha =
                        new Us
                    }
                    b(h, Ha, r)
                })
            });
            c && this.Y();
            a.oa && Ug(a.oa)
        }
    };
    Zs.prototype.Y = function() {
        var a, b;
        null == (a = this.Dd) || null == (b = a.unsubscribe) || b.call(a);
        this.Dd = void 0;
        var c;
        null == (c = this.Gf) || c.call(this);
        this.Gf = void 0
    };
    var $s = function(a) {
        Un.call(this, a)
    };
    w($s, Un);
    var at = function(a, b) {
        return Ql(a, 1, b)
    };
    $s.va = "contentads.bow.rendering.client.TurtleDoveReportingData";
    $s.prototype.za = Vn([0, Gn, Dn, Gn, -5, Kn, Gn]);

    function bt() {
        var a = Wb();
        return a ? Jb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Wa(a, b)
        }) || Wa(a, "OMI/") && !Wa(a, "XiaoMi/") ? !0 : Wa(a, "Presto") && Wa(a, "Linux") && !Wa(a, "X11") && !Wa(a, "Android") && !Wa(a, "Mobi") : !1
    };
    var Lq = Object.freeze({
            Pg: 1E3,
            ne: .5,
            Ke: .3
        }),
        Sq = Object.freeze([1, .75, Lq.ne, Lq.Ke, 0]),
        Vo = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + hs,
        ct = function(a, b, c, d, e, f) {
            this.Yi = a;
            this.Qb = b;
            this.Nb = c;
            this.kc = d;
            this.Wc = e;
            this.Xc = f;
            this.name = "rxlidar";
            this.vi = new gd;
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.ie = new gd;
            this.Oa = new gd;
            this.controlledEvents.push(this.kc, this.Wc, this.Xc);
            this.subscribedEvents.push(this.Nb)
        };
    n = ct.prototype;
    n.start = function(a) {
        if (void 0 === this.ue && a.O) {
            var b;
            if (null != (b = this.Qb)) var c = b;
            else {
                b = a.O;
                var d = null != (c = a.oa) ? c : null;
                c = {
                    Ih: .01,
                    yi: yg(b.i, 36E5),
                    Sa: b.i.Pa(100).g(V(b.h, 1)),
                    oa: d
                }
            }
            this.Qb = c;
            a = a.O;
            this.ue = dt(a, this.ie.g(V(a.h, 1)), this.Qb.Ih, this.Qb.yi, this.Qb.Sa, this.Qb.oa, this.Oa.g(T(!1), V(a.h, 1)), this.kc, this.Wc, this.Xc).subscribe(this.vi)
        }
    };
    n.Y = function() {
        this.ie.complete();
        this.Oa.complete();
        var a;
        null == (a = this.ue) || a.unsubscribe();
        this.ue = void 0
    };
    n.ve = function(a, b, c, d) {
        tl(b, Dl, 2) && !Fl(b, Dl, 2).qe() || this.ie.next(Object.assign({}, this.Yi.Hf.get(a), {
            metadata: b,
            experimentState: c,
            Ik: a,
            eb: d
        }))
    };
    n.Mb = function() {};
    n.handleEvent = function(a, b) {
        b === this.Nb && (this.Oa.next(!0), this.Oa.complete())
    };

    function dt(a, b, c, d, e, f, g, h, k, l) {
        var m = gs(a).g(P(function(p) {
                return !p
            })),
            r = new Cr(a, [new Mr(a, Sq), new Lr(a, e), new Ir(a, e), new ds(f, a, Sq), new cs(f, a, e), new Wr(a, e)]);
        return Lo(a, b, function(p, v) {
            var y = or(p, v.element),
                C = y.Wd,
                B = y.lc,
                G = y.fe,
                J = y.mf,
                X = y.Ch,
                fa = y.hb,
                E = y.li,
                A = y.Be,
                W = y.Fe,
                Cb = y.Ua,
                Yb = y.Ia,
                Ha = y.zj,
                hg = y.tb;
            y = y.Je;
            var jg, gb = null != (jg = Ol(El(v.metadata), 3)) ? jg : "";
            jg = at(new $s, atob(gb)).mb();
            gb = (new Y(v.experimentState)).T(p.h);
            var te = gb.g(P(function(F) {
                    return F.shouldIgnoreAdChoicesIcon
                })),
                Pa = fa.g(lf(E),
                    P(function(F) {
                        var Eb = t(F);
                        F = Eb.next().value;
                        Eb = Eb.next().value;
                        (F = F || Eb) || ((F = Wa(Wb(), "CrKey") || Wa(Wb(), "PlayStation") || Wa(Wb(), "Roku") || bt() || Wa(Wb(), "Xbox")) || (F = Wb(), F = Wa(F, "AppleTV") || Wa(F, "Apple TV") || Wa(F, "CFNetwork") || Wa(F, "tvOS")), F || (F = Wb(), F = Wa(F, "sdk_google_atv_x86") || Wa(F, "Android TV")));
                        return F
                    }));
            E = new xr(p, v, X, fa, Cb, te);
            te = gb.g(P(function(F) {
                return F.considerOmidZOrderOcclusions
            }));
            var Ac, ob = null != (Ac = Nl(El(v.metadata))) ? Ac : !1;
            Ac = r.bb(E, {
                hb: fa,
                Vg: ob,
                Ua: Cb,
                ug: te
            });
            var Qa = Ac.fb,
                ue = Ac.Ya;
            Ac = ue.Me;
            te = ue.Ne;
            ue = ue.af;
            ob = (new Y(ob)).T(p.h);
            var ac = ms(p, W, Pa, m, Ha, ob, E);
            Ha = Yq(p.h, p.i, Qa, ac);
            Pa = ks(p.h, Ha.Da.ef, Ha.Da.visible, Ha.Ze, Ha.Kc);
            ob = mr(p.h, p.i, Ha.Kc, Ha.Da.aa, Ha.Da.visible);
            Qa = Bq(p.h, p.i, Qa, ac);
            ac = Rq(p.i, p.h, Qa.Da.ef, Qa.Da.visible, Qa.Ze, Qa.Kc);
            var wi = {
                    lf: Kq(p.h, p.i, Qa.Kc, ac.Ac)
                },
                xi = gb.g(P(function(F) {
                    return F.extrapolators
                }), T(!1));
            Qa = pp(p.h, xi, Object.assign({}, Qa.Da, ac, wi), Object.assign({}, Ha.Da, {
                lf: rq(p, ob),
                Bc: rq(p, Pa.Bc),
                Nc: rq(p, Pa.Nc),
                Ac: rq(p, Pa.Ac),
                qb: Pa.qb.g(P(function(F) {
                    return new qq(p.i,
                        F)
                }))
            }));
            Pa = $p(p, d.g(Rf("t")));
            ob = (null !== f && f.validate() ? f.jj : ee).g(V(p.h, 1), Rf("u"));
            Pa = he(Pa, ob);
            ob = is(p, Qa.aa, Pa.g(R(function(F) {
                return null !== F
            })));
            ac = et(p, E, C);
            wi = ft(p, Pa, v.element);
            xi = ac.qh.g(T({
                x: 0,
                y: 0
            }));
            var pt = gb.g(P(function(F) {
                    return F.rxlidarStatefulBeacons
                }), T(!1), S(), pg(function(F) {
                    ui = F
                }), V(p.h, 1)),
                Wm = gb.g(P(function(F) {
                    return F.fetchLaterBeacons
                }), T(!1), S(), V(p.h, 1)),
                qt = Wm.g(P(function(F) {
                    return F && (new Ih(p)).I({
                        Lf: !0
                    })
                })),
                Xm = A.g(P(function(F) {
                    return 40 === F || 41 === F
                })),
                rt = gb.g(P(function(F) {
                        return F.waitForImpressionColleague
                    }),
                    T(!1), S(), V(p.h, 1));
            return Object.assign({}, {
                J: new Y(p.J),
                pd: new Y("lidar2"),
                qj: new Y("lidartos"),
                uh: new Y(hs),
                th: new Y(7),
                ee: new Y(p.validate() ? null : new De),
                yh: new Y(bj(p.document)),
                xa: new Y(Xo),
                Mf: Pa,
                Og: Pa,
                Ek: ob,
                we: g,
                yj: rt,
                eb: new Y(v.eb),
                kc: new Y(h),
                Wc: new Y(k),
                Xc: new Y(l),
                Bh: new Y(p.Ob ? 1 : void 0),
                Dh: new Y(p.vh ? 1 : void 0),
                hb: fa,
                tb: hg,
                gf: new Y(jg),
                Xb: hg.g(R(function(F) {
                    return F
                }), P(function() {
                    return p.Xb.bind(p)
                })),
                Me: Ac.g(V(p.h, 1)),
                Ne: te.g(V(p.h, 1)),
                Oh: gb.g(P(function(F) {
                    return F.extraPings
                })),
                ig: pt,
                jk: Wm,
                Mg: qt,
                Je: y,
                ji: Xm,
                ai: gb.g(P(function(F) {
                    return F.dedicatedViewableAttributionPing
                })),
                Ph: new Y(new Ag(p, new Mh(p))),
                Ng: new Y(ui && (new ti(p)).I({
                    qa: "GET"
                })),
                mj: new Y(Number(v.experimentState.useReachIntegrationSharedStorage) << 0 + Number(v.experimentState.useReachIntegrationPolyfill) << 1 + Number(v.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                Ah: v.element.g(P(function(F) {
                    return null !== F
                })),
                od: Yb,
                rj: Yb,
                fe: G.g(T([])),
                mf: J.g(T([])),
                Wh: G.g(P(function(F) {
                    return 0 < F.length ? !0 : null
                }), T(null), S()),
                lc: B.g(T([]),
                    V(p.h, 1)),
                mk: gb,
                Wd: C,
                oc: E.oc,
                Be: A.g(T(0), V(p.h, 1)),
                wi: X,
                Ua: Cb.g(T(0), V(p.h, 1)),
                Oc: Xm.g(P(function(F) {
                    return F ? mp : Wo
                })),
                dc: new Y(np),
                Fe: W,
                jg: E.xc.g(qp(p.h)),
                nf: E.nf
            }, Qa, {
                dd: Q([Qa.dd, xi]).g(P(function(F) {
                    var Eb = t(F);
                    F = Eb.next().value;
                    Eb = Eb.next().value;
                    return jj(F, Eb)
                }), S(hj))
            }, ac, {
                Pc: Ji(p),
                Xh: wi,
                af: ue,
                Hd: Ha.Da.Hd,
                wh: new Y(new gp)
            })
        }, Uo(a, c))
    }

    function et(a, b, c) {
        var d = void 0 === d ? Ia : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            oh: new Y(d),
            nh: Ep(a, b)
        }, Dp(a, b, c))
    }

    function ft(a, b, c) {
        return b.g(R(function(d) {
            return null !== d
        }), U(function() {
            return c
        }), P(function(d) {
            var e = Bo(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), P(function(d) {
            return !d
        }))
    };
    var gt = function(a) {
        var b = void 0 === b ? [] : b;
        var c = void 0 === c ? [a] : c;
        this.Nb = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.ye = new Map
    };
    n = gt.prototype;
    n.start = function(a) {
        this.cb = a
    };
    n.Y = function() {
        this.ye.clear()
    };
    n.ve = function(a, b, c, d) {
        if (b = this.cb) c = new ht(b, c, this.Nb, d), this.ye.set(a, c)
    };
    n.Mb = function(a) {
        this.ye.delete(a)
    };
    n.handleEvent = function() {};
    var ht = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.Nb = c;
        this.Sg = function() {};
        this.hg = [];
        this.fg = "&avradf=1";
        this.gg = qs([]);
        this.Oa = new gd;
        c = a.oa;
        var f = null !== c && (null == c ? void 0 : c.validate()),
            g, h = null == (g = a.O) ? void 0 : g.h;
        this.Oa.g(T(!b.waitForImpressionColleague), V(h, 1));
        this.nj = f ? null == c ? void 0 : c.eg.g(zf(1), Rf(!0), T(!1)) : (new Y(!0)).T(h);
        this.Sg = function(k, l) {
            e.Oa.next(!0);
            e.Oa.complete();
            Q([e.Oa, e.nj]).subscribe(function(m) {
                var r = t(m);
                m = r.next().value;
                r = r.next().value;
                if (!r) return ee;
                m && r &&
                    d(e.Nb, k, l);
                return !0
            })
        };
        this.uc(a.O)
    };
    ht.prototype.uc = function(a) {
        var b = this;
        this.Ec = a.global.document;
        this.hg.push(jt(this));
        var c = {};
        this.gg = qs(this.hg);
        this.gg.then(function() {
            b.fg = "&vis=" + es(b.Ec) + "&uach=0&ms=0";
            c.paramString = b.fg;
            c.view_type = "DELAYED_IMPRESSION";
            b.Sg(c, function() {})
        })
    };
    var jt = function(a) {
        return new ps(function(b) {
            var c = fs(a.Ec);
            if (c)
                if (3 === es(a.Ec)) {
                    var d = function() {
                        var e = a.Ec;
                        e.removeEventListener && e.removeEventListener(c, d, !1);
                        b(!0)
                    };
                    Nh(a.Ec, c, d)
                } else b(!0)
        })
    };

    function kt(a) {
        var b = Ki(a);
        return b ? b.g(P(function(c) {
            var d;
            c = null == (d = Hl(c).find(function(f) {
                return "Google Chrome" === Ol(f, 1)
            })) ? void 0 : Ol(d, 2);
            if (!c) return !1;
            var e;
            return 121 <= (null != (e = t(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) ? e : 0)
        })) : Bi.T(a.h)
    };
    var lt = function(a) {
        Un.call(this, a)
    };
    w(lt, Un);
    lt.prototype.Wf = function() {
        return Fl(this, Qs, 11)
    };
    lt.va = "ads.branding.measurement.client.frontend.integrations.reach.ReachStatusMessage";
    lt.Ad = [12];
    lt.prototype.za = Vn([0, Kn, Gn, -1, Kn, -2, Gn, -1, Dn, Gn, Rs, Ln, Dn]);
    var mt = function(a) {
            this.context = a;
            this.points = []
        },
        nt = function(a, b) {
            Ca(function(c) {
                if (1 == c.P) return c.pb = 0, c.Ma = 2, sa(c, b(), 4);
                if (2 != c.P) return c.return(c.fc);
                ta(c);
                a.flush();
                return ua(c, 0)
            })
        };
    mt.prototype.flush = function() {
        if (!(0 >= this.points.length)) {
            var a = new lt;
            var b = Mk(9);
            rl(a, 1, b);
            if (!Number.isFinite(3)) throw a = "Expected int32 as finite number but got " + Ka(3) + ": 3", Fk(a);
            rl(a, 13, 3);
            b = this.points;
            var c = a.u,
                d = Z(c);
            lk(Sj(a.u));
            c = wl(c, d, 12, 2, !1);
            Z(c);
            if (Array.isArray(b))
                for (d = 0; d < b.length; d++) c.push(Mk(b[d]));
            else
                for (b = t(b), d = b.next(); !d.done; d = b.next()) c.push(Mk(d.value));
            tk(c);
            this.points.splice(0);
            b = this.context;
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=reach&proto=" +
                encodeURIComponent(Gi(a.za()));
            b.J.N(a, {
                qa: "GET"
            }).sendNow()
        }
    };
    var ot = function(a) {
        var b = void 0 === b ? [] : b;
        var c = void 0 === c ? [a] : c;
        this.Se = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.Fc = new Map
    };
    n = ot.prototype;
    n.start = function(a) {
        a.O && (this.context = a.O)
    };
    n.Y = function() {
        this.Fc.forEach(function(a) {
            return void a.Y()
        });
        this.Fc.clear()
    };
    n.ve = function(a, b, c, d) {
        var e = this,
            f = this.context;
        if (f) {
            var g = new mt(f);
            nt(g, function() {
                var h, k;
                return Ca(function(l) {
                    if (1 == l.P) {
                        g.points.push(1);
                        if (tl(b, Ss, 1) && !Fl(b, Ss, 1).qe()) return l.return();
                        g.points.push(2);
                        try {
                            var m = !!f.global.sharedStorage
                        } catch (r) {
                            m = r
                        }
                        return m ? sa(l, kd(kt(f)), 2) : l.return()
                    }
                    h = l.fc;
                    if (!h) return l.return();
                    g.points.push(3);
                    k = new st(f, b, e.Se, c, d, g);
                    e.Fc.set(a, k);
                    return sa(l, k.run(), 0)
                })
            })
        }
    };
    n.Mb = function(a) {
        var b;
        null == (b = this.Fc.get(a)) || b.Y();
        this.Fc.delete(a)
    };
    n.handleEvent = function() {};
    var st = function(a, b, c, d, e, f) {
        this.context = a;
        this.metadata = b;
        this.Se = c;
        this.experimentState = d;
        this.eb = e;
        this.zh = f
    };
    st.prototype.run = function() {
        var a = this,
            b, c;
        return Ca(function(d) {
            if (1 == d.P) return b = {}, sa(d, new Promise(function(e) {
                a.eb(a.Se, b, e)
            }), 2);
            c = d.fc;
            if (!c) return d.return();
            a.zh.points.push(4);
            return sa(d, tt(a), 0)
        })
    };
    var tt = function(a) {
        var b, c, d, e, f, g, h, k, l, m, r, p, v;
        return Ca(function(y) {
            var C = a.experimentState,
                B = null != (h = null == (b = Fl(a.metadata, Ss, 1)) ? void 0 : Ml(b)) ? h : "",
                G = null == (c = Fl(a.metadata, Ss, 1)) ? void 0 : Ol(c, 1),
                J = null != (k = null == (d = Fl(a.metadata, Ss, 1)) ? void 0 : null == (e = d.Wf()) ? void 0 : e.mb()) ? k : void 0,
                X = null != (l = null == (f = Fl(a.metadata, Ss, 1)) ? void 0 : Il(f, 5)) ? l : void 0;
            var fa = null == (g = Fl(a.metadata, Ss, 1)) ? void 0 : Il(g, 6);
            r = {
                experimentState: C,
                escapedQueryId: B,
                clientsideModelFilename: G,
                geoTargetMessage: J,
                productionFilterIds: X,
                testFilterIds: null != (m = fa) ? m : void 0
            };
            p = btoa(JSON.stringify(r));
            v = a.context.Jg[0];
            return sa(y, fj(a.context.document, v, p), 0)
        })
    };
    st.prototype.Y = function() {};
    var ut = Rg(null !== "m202403250101".match(/^m\d{10}$/g) ? "m202403250101" : "current"),
        vt;
    a: {
        try {
            var wt = new uh;
            vt = new Tg(wt, "doubleclickbygoogle.com-omid", void 0, ut);
            break a
        } catch (a) {}
        vt = void 0
    }
    var xt = vt;
    (function(a, b) {
        var c = new us("impression"),
            d = new us("begin to render"),
            e = new us("unmeasurable"),
            f = new us("viewable"),
            g = new us("reach vpid"),
            h = new ss(c, g, d, f, e),
            k = new Zs,
            l = new gt(c.event);
        b = new ct(k, b, c.event, d.event, e.event, f.event);
        g = new ot(g.event);
        var m = new vs(a, h, k, l, b, g);
        m.start();
        return {
            Y: function() {
                return void m.Y()
            },
            colleagues: {
                ik: l,
                Gk: b,
                Dk: g
            }
        }
    })({
        O: new no(void 0, void 0, void 0, ut),
        oa: xt
    });
}).call(this);