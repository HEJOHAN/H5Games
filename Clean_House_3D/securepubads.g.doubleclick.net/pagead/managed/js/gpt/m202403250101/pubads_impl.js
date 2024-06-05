(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, fa, ja, na, pa, ra, ua, ta, va, xa, ya, za, Aa, Da, Ea, Ha, Ia, Ja, Ka, La, Oa, Ya, eb, gb, mb, ob, pb, qb, rb, tb, xb, zb, Fb, Gb, Jb, Lb, Nb, Sb, Ub, Yb, ac, Zb, bc, cc, Vb, gc, hc, ic, lc, mc, oc, pc, qc, sc, tc, wc, yc, zc, Bc, Cc, Hc, Ic, Kc, Mc, Nc, Vc, Xc, Zc, $c, ad, cd, hd, id, jd, kd, fd, qd, ed, dd, rd, sd, td, wd, xd, Ad, zd, Cd, Dd, Fd, Id, Jd, Ld, Qd, Rd, Vd, Xd, Wd, $d, be, ae, de, ce, ee, ge, Kd, le, me, ne, qe, ve, re, te, ue, Fe, Ge, Ie, Je, Ke, Oe, Pe, Qe, se, Re, Se, Te, Ve, We, Xe, Ye, bf, cf, df, $e, lf, af, mf, Cf, Ff, Hf, Lf, Mf, Nf, Rf, Sf, Tf, Vf, Wf, Xf, Yf, Zf, bg, fg, hg, gg, lg, ng, og, rg, Gg, Ig, Jg, Og, Rg, Sg, Ug, Wg, Yg, Zg, bh, ch, dh, fh, hh, gh, jh, kh, lh, nh, oh, ph, qh, rh, sh, vh, xh, Bh, zh, Th, Uh, Vh, Rh, Sh, Wh, Xh, gi, ei, ji, ri, Yh, Ai, Li, Mi, Qi, Ri, Xi, Zi, $i, cj, fj, pj, uj, vj, xj, yj, zj, Aj, Bj, Cj, Dj, Ej, Gj, Jj, Hj, Kj, Ij, Lj, Nj, Uj, Wj, Xj, ak, Yj, dk, ek, fk, jk, kk, qk, rk, Dk, Jk, Hk, Ik, Ok, Sk, Uk, Vk, Wk, Yk, bl, il, el, Zk, ql, ol, pl, sl, tl, wl, Dl, Gl, Hl, L, Il, Ol, Ml, Zl, O, am, bm, cm, em, gm, hm, om, pm, rm, sm, xm, Em, Gm, Im, Jm, Km, Lm, Mm, Pm, Tm, Vm, Xm, Wm, cn, dn, en, fn, Ym, gn, Zm, kn, ln, pn, qn, An, Bn, Cn, En, In, Nn, Pn, Qn, Sn, Tn, Xn, Yn, Zn, co, Wn, fo, go, ho, jo, mo, oo, po, qo, ro, to, uo, wo, yo, zo, xo, Do, Eo, Io, Jo, Lo, Vo, Xo, Zo, bp, ap, $o, lp, op, pp, qp, rp, tp, vp, wp, xp, zp, Ap, Cp, Bp, Ep, Jp, Hp, Kp, Mp, Np, Qp, Rp, Tp, Wp, Vp, Yp, Zp, $p, bq, cq, eq, dq, hq, jq, lq, nq, pq, rq, wq, yq, zq, Cq, Fq, Dq, Eq, Gq, Hq, Kq, Mq, Nq, Oq, Pq, Qq, Rq, Sq, Tq, Vq, Zq, ar, br, cr, fr, pr, ir, ur, vr, wr, yr, Ar, Cr, Fr, Ir, Rr, Gr, Hr, Kr, Lr, Er, Jr, Vr, Zr, as, cs, es, hs, js, qa, ks, ls, ns, ms, os, ps, rs, ts, us, ws, ys, Cs, Ds, zs, Es, Fs, Hs, Js, Ks, Ms, Os, Ps, Xs, Ys, bt, ct, dt, et, lt, nt, pt, qt, rt, ut, It, Lt, lu, mu, bv, ev, mv, iv, jv, pv, tv, wv, yv, xv, Nv, Qv, Rv, Sv, Tv, Vv, Uv, Xv, ew, iw, ow, sw, tw, uw, vw, xw, yw, zw, Aw, Cw, Dw, Ew, Lw, Mw, Nw, wb, Pw, Sw, Qw, Rw, Tw, Uw;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    fa = function(a, b) {
        b = _.da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.ia = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ja = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    na = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ka(e) ? "o" + _.ma(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    pa = function(a, b) {
        a.sort(b || _.oa)
    };
    ra = function(a) {
        for (var b = qa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.oa;
        pa(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    ua = function(a, b) {
        if (!_.sa(a) || !_.sa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ta, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.oa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    ta = function(a, b) {
        return a === b
    };
    va = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    xa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = xa.apply(null, ja(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    ya = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    za = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Aa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Da = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ea = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ha = function(a) {
        return Fa ? Ga ? Ga.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    };
    Ia = function(a) {
        return -1 != Ea().indexOf(a)
    };
    Ja = function() {
        return Fa ? !!Ga && 0 < Ga.brands.length : !1
    };
    Ka = function() {
        return Ia("Firefox") || Ia("FxiOS")
    };
    La = function() {
        return Ja() ? Ha("Chromium") : (Ia("Chrome") || Ia("CriOS")) && !(Ja() ? 0 : Ia("Edge")) || Ia("Silk")
    };
    Oa = function(a) {
        return new Ma(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.Va = function(a) {
        var b = void 0 === b ? Qa : b;
        a: if (b = void 0 === b ? Qa : b, !(a instanceof _.Ra)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof Ma && d.zl(a)) {
                    a = Sa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Ta
    };
    Ya = function(a) {
        for (var b = _.Wa.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return Sa(c.join(""))
    };
    _.$a = function(a) {
        if (Za.test(a)) return a
    };
    _.cb = function(a) {
        return a instanceof _.Ra ? _.ab(a) : _.$a(a)
    };
    eb = function(a) {
        var b = new db;
        b.bj = a;
        return b
    };
    gb = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            ke: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.ib = function(a) {
        var b = _.Wa.apply(1, arguments);
        if (0 === b.length) return hb(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return hb(c)
    };
    _.kb = function(a, b) {
        a = gb(_.jb(a).toString());
        var c = a.ke,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return hb(a.path + c + a.hash)
    };
    mb = function(a) {
        return a ? a.passive && lb() ? a : a.capture || !1 : !1
    };
    _.nb = function(a, b) {
        b = _.cb(b);
        void 0 !== b && (a.href = b)
    };
    ob = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    pb = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    qb = function(a, b) {
        if (b instanceof db) b = b.bj;
        else throw Error("");
        a.textContent = b;
        pb(a)
    };
    rb = function(a, b) {
        a.src = _.jb(b);
        pb(a)
    };
    tb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.u.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            rb(g, a);
            c && "complete" !== b.document.readyState ? _.sb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    xb = function(a) {
        var b, c, d, e, f, g;
        return _.ub(function(h) {
            switch (h.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.Ed, c = void 0, h.l = 2, h.yield(vb(b), 4);
                case 4:
                    c = h.A;
                    h.g = 3;
                    h.l = 0;
                    break;
                case 2:
                    wb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.ae || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.j,
                        hk: c.bg_hash_basename,
                        gk: c.bg_binary,
                        Dl: a.g + "_" + a.A,
                        ae: d,
                        Ed: a.Ed,
                        ef: e,
                        Cf: f,
                        df: g
                    }) : h.return(void 0)
            }
        })
    };
    zb = function(a) {
        var b;
        _.ub(function(c) {
            if (1 == c.g) return c.yield(xb(a), 2);
            if (b = c.A) {
                var d = b,
                    e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window,
                    g = f.GoogleGcLKhOms;
                g && "function" === typeof g.push || (g = f.GoogleGcLKhOms = []);
                var h = {};
                g.push((h._ctx_ = d.context, h._bgv_ = d.hk, h._bgp_ = d.gk, h._li_ = d.Dl, h._jk_ = d.ae, h._st_ = d.Ed, h._rc_ = d.ef, h._dl_ = d.Cf, h._g2_ = d.df, h));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.ib(yb, e);
                tb(e)
            }
            return c.return(b)
        })
    };
    Fb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (Ab) {
            if (b && (Bb ? !a.Al() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (Cb || (Cb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    Gb = function(a) {
        _.t.setTimeout(function() {
            throw a;
        }, 0)
    };
    Jb = function(a) {
        if (!Hb) return Ib(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Lb = function(a) {
        return Kb[a] || ""
    };
    Nb = function(a) {
        return Mb && null != a && a instanceof Uint8Array
    };
    Sb = function(a) {
        if (a !== Ob) throw Error("illegal external caller");
    };
    Ub = function() {
        return "function" === typeof BigInt
    };
    Yb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.x(Vb(c, a)), b = c.next().value, a = c.next().value, c = b);
        Wb = c >>> 0;
        Xb = a >>> 0
    };
    ac = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Ub() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Zb(c) + Zb(a));
        return c
    };
    Zb = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    bc = function() {
        var a = Wb,
            b = Xb;
        b & 2147483648 ? Ub() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.x(Vb(a, b)), a = b.next().value, b = b.next().value, a = "-" + ac(a, b)) : a = ac(a, b);
        return a
    };
    cc = function(a) {
        if (16 > a.length) Yb(Number(a));
        else if (Ub()) a = BigInt(a), Wb = Number(a & BigInt(4294967295)) >>> 0, Xb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Xb = Wb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Xb *= 1E6, Wb = 1E6 * Wb + d, 4294967296 <= Wb && (Xb += _.z(Math, "trunc").call(Math, Wb / 4294967296), Xb >>>= 0, Wb >>>= 0);
            b && (b = _.x(Vb(Wb, Xb)), a = b.next().value, b = b.next().value, Wb = a, Xb = b)
        }
    };
    Vb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    gc = function(a) {
        return Array.prototype.slice.call(a)
    };
    hc = function(a) {
        return "function" === typeof _.u.Symbol && "symbol" === typeof(0, _.u.Symbol)() ? (0, _.u.Symbol)() : a
    };
    ic = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    lc = function(a) {
        jc(a, 34);
        return a
    };
    mc = function(a) {
        jc(a, 32);
        return a
    };
    oc = function(a, b) {
        nc(b, (a | 0) & -14591)
    };
    pc = function(a, b) {
        nc(b, (a | 34) & -14557)
    };
    qc = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    sc = function(a) {
        return !(!a || "object" !== typeof a || a.El !== rc)
    };
    tc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    wc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new uc(a, Ob) : vc();
            else if (a.constructor !== uc)
            if (Nb(a)) a = a.length ? new uc(c ? a : new Uint8Array(a), Ob) : vc();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    yc = function(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = xc(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? _.z(b, "includes").call(b, c) : b.has(c)))) return !1;
        nc(a, d | 1);
        return !0
    };
    zc = function(a) {
        if (a & 2) throw Error();
    };
    Bc = function(a) {
        if (Ac) throw Error("");
        Ac = function(b) {
            _.t.setTimeout(function() {
                a(b)
            }, 0)
        }
    };
    Cc = function(a) {
        if (Ac) try {
            Ac(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    Hc = function() {
        var a = Error();
        Dc(a, "incident");
        Ac ? Cc(a) : Gb(a)
    };
    Ic = function(a) {
        a = Error(a);
        Dc(a, "warning");
        Cc(a);
        return a
    };
    _.Jc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    Kc = function(a) {
        if (null == a || "number" === typeof a) return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    Mc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + Lc(a) + ": " + a);
        return a
    };
    Nc = function(a) {
        if (null == a || "boolean" === typeof a) return a;
        if ("number" === typeof a) return !!a
    };
    Vc = function(a) {
        var b = typeof a;
        return "number" === b ? _.z(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Oc.test(a)
    };
    _.Wc = function(a) {
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ic("enum");
        return a | 0
    };
    Xc = function(a) {
        return null == a ? a : _.Wc(a)
    };
    _.Yc = function(a) {
        return null == a ? a : _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Zc = function(a) {
        if ("number" !== typeof a) throw Ic("int32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ic("int32");
        return a | 0
    };
    $c = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    ad = function(a) {
        if ("number" !== typeof a) throw Ic("uint32");
        if (!_.z(Number, "isFinite").call(Number, a)) throw Ic("uint32");
        return a >>> 0
    };
    _.bd = function(a) {
        return null == a ? a : ad(a)
    };
    cd = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return _.z(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.gd = function(a, b) {
        b = !!b;
        if (!Vc(a)) throw Ic("int64");
        return "string" === typeof a ? dd(a) : b ? ed(a) : fd(a)
    };
    hd = function(a) {
        return null == a ? a : _.gd(a)
    };
    id = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    };
    jd = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    };
    kd = function(a) {
        if (0 > a) {
            Yb(a);
            var b = ac(Wb, Xb);
            a = Number(b);
            return _.z(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (id(String(a))) return a;
        Yb(a);
        return 4294967296 * Xb + (Wb >>> 0)
    };
    fd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (!_.z(Number, "isSafeInteger").call(Number, a)) {
            Yb(a);
            var b = Wb,
                c = Xb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    };
    qd = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        return 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a : kd(a)
    };
    ed = function(a) {
        a = _.z(Math, "trunc").call(Math, a);
        if (_.z(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            jd(b) ? a = b : (Yb(a), a = bc())
        }
        return a
    };
    dd = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        jd(a) || (cc(a), a = bc());
        return a
    };
    rd = function(a) {
        var b = _.z(Math, "trunc").call(Math, Number(a));
        if (_.z(Number, "isSafeInteger").call(Number, b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        id(a) || (cc(a), a = ac(Wb, Xb));
        return a
    };
    sd = function(a) {
        if (null == a) return a;
        if (Vc(a)) {
            var b;
            "number" === typeof a ? b = fd(a) : b = dd(a);
            return b
        }
    };
    td = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a) return a;
        if (Vc(a)) return "string" === typeof a ? dd(a) : b ? ed(a) : fd(a)
    };
    _.ud = function(a) {
        if (null != a) {
            var b = !!b;
            if (!Vc(a)) throw Ic("uint64");
            "string" === typeof a ? a = rd(a) : b ? (a = _.z(Math, "trunc").call(Math, a), 0 <= a && _.z(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), id(b) ? a = b : (Yb(a), a = ac(Wb, Xb)))) : a = qd(a)
        }
        return a
    };
    _.vd = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    wd = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    xd = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    Ad = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Fg === yd) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? zd(b) : new b : void 0;
        var e = c = xc(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && nc(a, e);
        return new b(a)
    };
    zd = function(a) {
        var b = a[Bd];
        if (b) return b;
        b = new a;
        lc(b.F);
        return a[Bd] = b
    };
    Cd = function(a, b, c) {
        if (b) return Mc(a);
        var d;
        return null != (d = Nc(a)) ? d : c ? !1 : void 0
    };
    Dd = function(a, b, c) {
        if (b) return _.vd(a);
        var d;
        return null != (d = xd(a)) ? d : c ? "" : void 0
    };
    Fd = function(a, b) {
        Ed = b;
        a = new a(b);
        Ed = void 0;
        return a
    };
    Id = function(a) {
        switch (typeof a) {
            case "boolean":
                return Gd || (Gd = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Hd || (Hd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = Ed);
        Ed = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = xc(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (tc(c[f])) {
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
        nc(a, d);
        return a
    };
    Jd = function(a) {
        return a
    };
    Ld = function(a, b, c, d, e, f) {
        a = Ad(a, d, c, f);
        e && (a = Kd(a));
        return a
    };
    Qd = function(a) {
        return a
    };
    Rd = function(a) {
        return [a, this.get(a)]
    };
    Vd = function() {
        return Sd || (Sd = new Td(lc([]), void 0, void 0, void 0, Ud))
    };
    Xd = function(a, b) {
        return Wd(b)
    };
    Wd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (yc(a, void 0, 0)) return
                    } else {
                        if (Nb(a)) return Jb(a);
                        if (a instanceof uc) return Yd(a);
                        if (a instanceof Td) return Zd(a)
                    }
        }
        return a
    };
    $d = function(a, b, c) {
        a = gc(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    };
    be = function(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) a = yc(a, void 0, 0) ? void 0 : e && xc(a) & 2 ? a : ae(a, b, c, void 0 !== d, e);
            else if (tc(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = be(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    ae = function(a, b, c, d, e) {
        var f = d || c ? xc(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = gc(a);
        for (var g = 0; g < a.length; g++) a[g] = be(a[g], b, c, d, e);
        c && c(f, a);
        return a
    };
    de = function(a) {
        return be(a, ce, void 0, void 0, !1)
    };
    ce = function(a) {
        return a.Fg === yd ? a.toJSON() : a instanceof Td ? Zd(a, de) : Wd(a)
    };
    ee = function(a, b, c) {
        c = void 0 === c ? pc : c;
        if (null != a) {
            if (Mb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = xc(a);
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? nc(a, (d | 34) & -12293) : ae(a, ee, d & 4 ? pc : c, !0, !0)
            }
            a.Fg === yd ? (c = a.F, d = fe(c), a = d & 2 ? a : Fd(a.constructor, ge(c, d, !0))) : a instanceof Td && !(a.Od & 2) && (c = lc(he(a, ee)), a = new Td(c, a.Jf, a.be, a.uh));
            return a
        }
    };
    _.ie = function(a) {
        var b = a.F;
        return Fd(a.constructor, ge(b, fe(b), !1))
    };
    ge = function(a, b, c) {
        var d = c || b & 2 ? pc : oc,
            e = !!(b & 32);
        a = $d(a, b, function(f) {
            return ee(f, e, d)
        });
        jc(a, 32 | (c ? 2 : 0));
        return a
    };
    Kd = function(a) {
        var b = a.F,
            c = fe(b);
        return c & 2 ? Fd(a.constructor, ge(b, c, !1)) : a
    };
    _.je = function(a) {
        var b = a.F,
            c = fe(b);
        return c & 2 ? a : Fd(a.constructor, ge(b, c, !0))
    };
    le = function(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[ke] = (a.constructor[ke] | 0) + 1) && Hc();
        return 0 === c ? !1 : !(c & b)
    };
    me = function(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c)) return a[b]
    };
    ne = function(a, b, c, d, e) {
        var f = qc(b);
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
            g !== b && nc(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    qe = function(a, b, c, d) {
        var e = b & 2,
            f = oe(a, b, c, d);
        Array.isArray(f) || (f = pe);
        var g = !!(b & 32),
            h = xc(f);
        0 === h && g && !e ? (h |= 33, nc(f, h)) : h & 1 || (h |= 1, nc(f, h));
        if (e) h & 2 || lc(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = gc(f), e = 1, g && (e |= 32), nc(f, e), ne(a, b, c, f, d);
        return f
    };
    ve = function(a, b, c, d, e, f, g) {
        var h = a.F,
            k = fe(h);
        d = 2 & k ? 1 : d;
        f = !!f;
        var l = re(h, k, b, e),
            m = xc(l);
        if (le(a, m, g, f)) {
            if (4 & m || Object.isFrozen(l)) l = gc(l), m = se(m, k, f), k = ne(h, k, b, l, e);
            for (var n = a = 0; a < l.length; a++) {
                var p = c(l[a]);
                null != p && (l[n++] = p)
            }
            n < a && (l.length = n);
            m = te(m, k, f);
            m = ic(m, 20, !0);
            m = ic(m, 4096, !1);
            m = ic(m, 8192, !1);
            g && (m = ic(m, g, !0));
            nc(l, m);
            2 & m && Object.freeze(l)
        }
        ue(m) || (g = m, (c = 1 === d) ? m = ic(m, 2, !0) : f || (m = ic(m, 32, !1)), m !== g && nc(l, m), c && Object.freeze(l));
        2 === d && ue(m) && (l = gc(l), m = se(m, k, f), nc(l, m), ne(h, k, b, l, e));
        return l
    };
    re = function(a, b, c, d) {
        a = oe(a, b, c, d);
        return Array.isArray(a) ? a : pe
    };
    te = function(a, b, c) {
        0 === a && (a = se(a, b, c));
        return a = ic(a, 1, !0)
    };
    ue = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    Fe = function(a) {
        return wc(a, !0, !0)
    };
    Ge = function(a) {
        return wc(a, !0, !1)
    };
    Ie = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Vd();
                    break a
                }
                h = []
            } else if (h.constructor === Td) {
                if (0 == (h.Od & 2) || k) {
                    a = h;
                    break a
                }
                h = he(h)
            } else Array.isArray(h) ? c = !!(xc(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Vd();
                    break a
                }
                c || (c = !0, lc(h))
            } else if (c) {
                c = !1;
                k = gc(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = gc(k[h]);
                    Array.isArray(l[1]) && (l[1] = lc(l[1]))
                }
                h = k
            }
            c || (xc(h) & 64 ? He(h, 32) : 32 & b && mc(h));f = new Td(h, e, Dd, f);ne(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.nk = !0);
        return a
    };
    Je = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Ie(a, d, oe(a, d, b), b, void 0, c)
    };
    Ke = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Ie(a, d, oe(a, d, b), b, c)
    };
    _.Le = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        zc(f);
        if (null == c) return ne(e, f, b), a;
        var g = xc(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            l = !k && !1;
        if (le(a, g))
            for (g = 21, k && (c = gc(c), h = 0, g = se(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = gc(c), h = 0, g = se(g, f, !0));
        g !== h && nc(c, g);
        ne(e, f, b, c);
        return a
    };
    _.Me = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        zc(f);
        ne(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    _.Ne = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        zc(f);
        b = qe(e, f, b);
        e = xc(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    Oe = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != oe(a, b, f) && (0 !== d && (b = ne(a, b, d)), d = f)
        }
        return d
    };
    Pe = function(a, b, c, d) {
        a = a.F;
        var e = fe(a),
            f = oe(a, e, c, d);
        b = Ad(f, b, !1, e);
        b !== f && null != b && ne(a, e, c, b, d);
        return b
    };
    Qe = function(a, b, c, d, e, f) {
        var g = !!(2 & b),
            h = g ? 1 : 2,
            k = 1 === h;
        h = 2 === h;
        e = !!e;
        f && (f = !g);
        g = re(a, b, d);
        var l = xc(g),
            m = !!(4 & l);
        if (!m) {
            l = te(l, b, e);
            var n = g,
                p = b,
                r;
            (r = !!(2 & l)) && (p = ic(p, 2, !0));
            for (var v = !r, w = !0, y = 0, B = 0; y < n.length; y++) {
                var C = Ad(n[y], c, !1, p);
                if (C instanceof c) {
                    if (!r) {
                        var G = !!(xc(C.F) & 2);
                        v && (v = !G);
                        w && (w = G)
                    }
                    n[B++] = C
                }
            }
            B < y && (n.length = B);
            l = ic(l, 4, !0);
            l = ic(l, 16, w);
            l = ic(l, 8, v);
            nc(n, l);
            r && Object.freeze(n)
        }
        c = !!(8 & l) || k && !g.length;
        if (f && !c) {
            ue(l) && (g = gc(g), l = se(l, b, e), b = ne(a, b, d, g));
            f = g;
            c = l;
            for (n = 0; n < f.length; n++) l = f[n], p = Kd(l), l !== p && (f[n] = p);
            c = ic(c, 8, !0);
            c = ic(c, 16, !f.length);
            nc(f, c);
            l = c
        }
        ue(l) || (f = l, k ? l = ic(l, !g.length || 16 & l && (!m || 32 & l) ? 2 : 2048, !0) : e || (l = ic(l, 32, !1)), l !== f && nc(g, l), k && Object.freeze(g));
        h && ue(l) && (g = gc(g), l = se(l, b, e), nc(g, l), ne(a, b, d, g));
        return g
    };
    se = function(a, b, c) {
        a = ic(a, 2, !!(2 & b));
        a = ic(a, 32, !!(32 & b) && c);
        return a = ic(a, 2048, !1)
    };
    Re = function(a, b, c, d) {
        a = a.F;
        var e = fe(a);
        zc(e);
        b = Qe(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        xc(c.F) & 2 ? He(b, 8) : He(b, 16);
        return c
    };
    Se = function(a) {
        return td(a, !0)
    };
    Te = function(a, b) {
        return null != a ? a : b
    };
    Ve = function(a, b, c) {
        var d = Ue ? void 0 : a.constructor.da;
        var e = fe(c ? a.F : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (tc(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g)
                    if (Object.prototype.hasOwnProperty.call(g, l)) {
                        var m = g[l];
                        if (Array.isArray(m)) {
                            var n = m;
                            if (yc(m, d, +l) || sc(m) && 0 === m.size) m = null;
                            m != n && (k = !0)
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
            if (!(null == c || yc(c, d, p) || sc(c) && 0 === c.size)) break;
            var r = !0
        }
        if (!f && !r) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };
    We = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        jc(b, 128);
        return Fd(a, mc(b))
    };
    Xe = function(a, b) {
        if (Array.isArray(b)) {
            var c = xc(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            nc(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Ye = function(a, b, c) {
        a[b] = c
    };
    bf = function(a) {
        var b = a[Ze];
        if (!b) {
            var c = $e(a);
            b = function(d, e) {
                return af(d, e, c)
            };
            a[Ze] = b
        }
        return b
    };
    cf = function(a) {
        return a.g
    };
    df = function(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = $e(b).g), c || (c = bf(b)))
        }
    };
    $e = function(a) {
        var b = a[ef];
        if (b) return b;
        b = a[ef] = {};
        var c = cf,
            d = df;
        var e = void 0 === e ? Ye : e;
        b.g = Id(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Uk = g, g = a[++f], "function" === typeof g && (b.l = g, b.A = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g;) {
            "number" === typeof g && (k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof ff) var m = g;
            else m = gf, f--;
            if (m.Mj) {
                g = a[++f];
                l = a;
                var n = f;
                "function" == typeof g && (g = g(), l[n] = g);
                l = g
            }
            g = a[++f];
            n = k + 1;
            "number" === typeof g && 0 > g && (n -= g, g = a[++f]);
            for (; k < n; k++) {
                var p = h[k];
                e(b, k, l ? d(m, l, p) : c(m, p))
            }
        }
        hf in a && jf in a && ef in a && (a.length = 0);
        return b
    };
    lf = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Uk)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof ff ? c : [kf, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = bf(c),
                        f = $e(c).g;
                    c = (c = a.A) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    af = function(a, b, c) {
        for (var d = fe(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = lf(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = lf(c, d)) && f(b, e, d)))
        }
    };
    mf = function(a) {
        return new ff(a, !1)
    };
    Cf = function(a, b, c) {
        a: if (null != b) {
            if (Vc(b)) {
                if ("string" === typeof b) {
                    b = dd(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = fd(b);
                    break a
                }
            }
            b = void 0
        }null != b && ("string" === typeof b && nf(b), null != b && ( of (a, c, 0), "number" === typeof b ? (a = a.g, Yb(b), pf(a, Wb, Xb)) : (c = nf(b), pf(a.g, c.A, c.g))))
    };
    Ff = function(a, b, c, d, e) {
        b = b instanceof _.D ? b.F : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        null != b && (c = Df(a, c), e(b, a), Ef(a, c))
    };
    Hf = function(a) {
        var b = _.Gf();
        if (!a) throw Error(b && b() || String(a));
    };
    _.Gf = function() {
        var a = If;
        If = void 0;
        return a
    };
    Lf = function(a) {
        return function() {
            var b = new Jf;
            af(this.F, b, $e(a));
            Kf(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    };
    Mf = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Fd(a, mc(b))
            }
            return b
        }
    };
    Nf = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    _.E = function(a) {
        return _.Of(Pf).A(a.g, a.defaultValue)
    };
    _.Qf = function(a) {
        return _.Of(Pf).l(a.g, a.defaultValue)
    };
    Rf = function(a) {
        return _.Of(Pf).j(a.g, a.defaultValue)
    };
    Sf = function(a) {
        return _.Of(Pf).M(a.g, a.defaultValue)
    };
    Tf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    Vf = function(a) {
        return Uf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2), _.z(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    };
    Wf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Xf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Yf = function(a, b) {
        a = Vf(a);
        return a.length < b ? _.z(a, "padEnd").call(a, b, "0") : a
    };
    Zf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.$f = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.ag = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    bg = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.cg = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(bg("domLoading", a) || Infinity, bg("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(bg("responseEnd", a), bg("navigationStart", a)) : b
    };
    fg = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.dg("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && fa(a.google_image_requests, f);
                _.eg(f, "load", g);
                _.eg(f, "error", g)
            };
            _.sb(f, "load", g);
            _.sb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    hg = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.oc] = d.Zb, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Rb
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Rb
            }).map(c)])
        } catch (d) {
            return gg(d, b), ""
        }
    };
    gg = function(a, b) {
        try {
            ig({
                m: _.jg(a instanceof Error ? a : Error(String(a))),
                b: _.kg(b, 1, 0) || null,
                v: _.I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    lg = function(a, b, c, d, e, f) {
        try {
            var g = a.g,
                h = _.dg("SCRIPT", g);
            h.async = !0;
            rb(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? lg(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    };
    ng = function(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        lg(mg(a), b, 0, !1, c, d)
    };
    og = function(a) {
        return a[_.z(_.u.Symbol, "iterator")]()
    };
    rg = function(a) {
        var b = pg(qg(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    };
    Gg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = pg(qg(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    Ig = function(a) {
        var b = qg(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.z(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0]) throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Hg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = qg(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    };
    Jg = function(a) {
        a && "function" == typeof a.ya && a.ya()
    };
    Og = function(a) {
        a = Kg(a.data.__fciReturn);
        return {
            payload: a,
            Wg: _.Ng(a, 1)
        }
    };
    Rg = function() {
        var a = Ea();
        return a ? _.Pg("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.Qg(a, b)
        }) || _.Qg(a, "OMI/") && !_.Qg(a, "XiaoMi/") ? !0 : _.Qg(a, "Presto") && _.Qg(a, "Linux") && !_.Qg(a, "X11") && !_.Qg(a, "Android") && !_.Qg(a, "Mobi") : !1
    };
    Sg = function() {
        return function(a) {
            return 0 === a
        }
    };
    Ug = function() {
        var a = Tg;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Wg = function() {
        var a = Vg;
        return function(b) {
            return b instanceof a
        }
    };
    Yg = function(a) {
        return function(b) {
            if (!Xg(b)) return !1;
            for (var c = _.x(_.z(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.x(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.zo) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        }
    };
    Zg = function() {
        return function(a) {
            return Array.isArray(a)
        }
    };
    bh = function() {
        return function(a) {
            return $g(a) ? a.every(function(b) {
                return ah(b)
            }) : !1
        }
    };
    ch = function(a) {
        return !!a && a.top === a
    };
    dh = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Wg: b.__uspapiReturn.callId
        }
    };
    fh = function(a, b) {
        b = void 0 === b ? window : b;
        if (eh(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    hh = function(a, b, c) {
        return eh(b) ? gh(a, c) : null
    };
    gh = function(a, b) {
        b = "null" !== b.origin ? b.document.cookie : null;
        return null === b ? null : (new ih({
            cookie: b
        })).get(a) || ""
    };
    jh = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Wg: b.__gppReturn.callId
        }
    };
    kh = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    };
    lh = function(a, b, c) {
        return b[a] || c
    };
    nh = function(a) {
        _.Of(mh).l(a)
    };
    oh = function() {
        return _.Of(mh).j()
    };
    ph = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(), _.z(_.H, "includes")).call(_.H, a))
    };
    qh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && ph("run-ad-auction", c))
    };
    rh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && ph("browsing-topics", b))
    };
    sh = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && ph("shared-storage", c))
    };
    vh = function(a) {
        a = void 0 === a ? _.th() : a;
        return function(b) {
            return _.uh(b + " + " + a) % 1E3
        }
    };
    xh = function(a) {
        _.Of(wh).g(a)
    };
    Bh = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.t : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        yh(_.Of(mh), a);
        zh(b);
        Ah(_.Of(wh), b);
        _.Of(Pf).g()
    };
    zh = function(a) {
        var b = _.Of(Pf);
        b.A = function(c, d) {
            return lh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return lh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return lh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.M = function(c, d) {
            return lh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            lh(15, a, function() {})(2)
        }
    };
    Th = function(a, b, c, d) {
        var e = new _.Qh,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.eg(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Rh(a);
        return h ? (_.sb(a, "message", g), f = c(h), e.promise) : (c = Sh(a)) ? (f = String(Math.floor(2147483647 * _.th())), _.sb(a, "message", g), b(c, f), e.promise) : null
    };
    Uh = function(a) {
        return Th(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Vh = function(a) {
        return !!Rh(a) || !!Sh(a)
    };
    Rh = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Sh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Wh = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Xh = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.uh(a))) ? d : 0
    };
    gi = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l, m, n = null != (m = null == (g = f(null != (k = b.ed) ? k : "")) ? void 0 : g.bids) ? m : null == (h = f(null != (l = b.adUnitCode) ? l : "")) ? void 0 : h.bids;
            if (null != n && n.length && (g = n.filter(function(v) {
                    var w = v.adId;
                    return v.auctionId !== c && _.z(Object, "values").call(Object, d).some(function(y) {
                        return _.z(y, "includes").call(y, w)
                    })
                }), g.length)) {
                var p, r;
                f = null == (p = e.adUnits) ? void 0 : null == (r = _.z(p, "find").call(p, function(v) {
                    v = v.code;
                    return v === b.ed || v === b.adUnitCode
                })) ? void 0 : r.mediaTypes;
                p = _.x(g);
                for (r = p.next(); !r.done; r = p.next()) r = r.value, g = Yh(r, d, f), g = Zh(a, $h(ai(bi(ci(new di, r.bidder), 1), 6, !0), g)), ei(r.bidder, e, g), "number" === typeof r.timeToRespond && _.fi(g, 2, Math.round(r.timeToRespond))
            }
        }
    };
    ei = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Le(c, 10, d, _.vd)
    };
    ji = function(a, b, c) {
        null != _.Yc(_.hi(a, 3)) || (c === b.adUnitCode ? _.ii(a, 3, 1) : c === b.ed && _.ii(a, 3, 2))
    };
    ri = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.kg(f, 1, 0)) && _.ki(b, 5, f);
        li(a, mi, 5) || (f ? 1 === _.kg(f, 1, 0) ? ni(a, f) : ni(a, oi(pi(qi(new mi, e), 1), Xh(c, d))) : ni(a, pi(qi(new mi, e), Xh(c, d) ? 2 : 3)))
    };
    Yh = function(a, b, c) {
        var d = a.cpm,
            e = a.originalCpm,
            f = a.currency,
            g = a.originalCurrency,
            h = a.dealId,
            k = a.adserverTargeting,
            l = a.bidder,
            m = a.adId,
            n = a.mediaType,
            p = a.height,
            r = a.width,
            v = new si;
        "number" === typeof d && (_.fi(v, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Ng(v, 2) || _.fi(v, 8, d)));
        "string" === typeof f && ti(v, 3, f);
        (_.H = ["string", "number"], _.z(_.H, "includes")).call(_.H, typeof h) && (f = new ui, h = ti(f, 1, String(h)), _.ki(v, 6, h));
        if ("object" === typeof k)
            for (h = _.x(["", "_" + l]), f = h.next(); !f.done; f = h.next()) {
                d = f.value;
                f = [];
                e = _.x(_.z(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.x(g.value);
                    var w = g.next().value;
                    g = g.next().value;
                    w = (w + d).slice(0, 20);
                    var y = void 0;
                    if (null != (y = b[w]) && y.length)
                        if (b[w][0] === String(g)) f.push(w);
                        else {
                            f = [];
                            break
                        }
                }
                d = vi(v, 4, 2);
                _.Le(v, 4, d.concat(f), _.vd)
            }
        switch (n || "banner") {
            case "banner":
                _.ii(v, 5, 1);
                break;
            case "native":
                _.ii(v, 5, 2);
                break;
            case "video":
                _.ii(v, 5, 3);
                b = new wi;
                var B;
                if ("adpod" === (null == c ? void 0 : null == (B = c.video) ? void 0 : B.context)) {
                    var C, G = null == c ? void 0 : null == (C = c.video) ? void 0 : C.adPodDurationSec;
                    _.fi(b, 1, G)
                } else C = null == c ? void 0 : null == (G = c.video) ? void 0 : G.maxduration, _.fi(b, 1, C);
                var F;
                if ("number" === typeof(null == c ? void 0 : null == (F = c.video) ? void 0 : F.skip)) {
                    var M;
                    c = !!(null == c ? 0 : null == (M = c.video) ? 0 : M.skip);
                    ai(b, 2, c)
                }
                var R;
                a = null == (R = a.meta) ? void 0 : R.adServerCatId;
                R = ti(b, 3, a);
                if ("object" !== typeof k) k = null;
                else {
                    var N, aa;
                    a = String(null != (aa = null != (N = k["hb_pb_cat_dur_" + l]) ? N : k.hb_pb_cat_dur) ? aa : "");
                    var ha, la, ea, Pa;
                    N = String(null != (Pa = null != (ea = null != (la = null != (ha = k["hb_cache_id_" + l]) ? ha : k["hb_uuid_" + l]) ? la : k.hb_cache_id) ? ea : k.hb_uuid) ? Pa : "");
                    k = a && N ? a + "_" + N : N ? N : null
                }
                ti(R, 4, k);
                _.ki(v, 9, b)
        }
        _.z(Number, "isFinite").call(Number, p) && _.z(Number, "isFinite").call(Number, r) && (k = new xi, r = _.yi(k, 1, Math.round(r)), p = _.yi(r, 2, Math.round(p)), _.ki(v, 7, p));
        "string" === typeof m && ti(v, 1, m);
        return v
    };
    Ai = function(a, b) {
        var c = new _.u.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.x(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.zi(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.x(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).qm = f)
            }
        }
        d = new _.u.Map;
        a = _.x(_.z(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.x(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.qm, g && h && d.set(f, {
            latency: h - g,
            Ei: !1
        });
        e = _.x(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ei = !0;
        return d
    };
    Li = function(a, b, c, d, e, f, g) {
        var h = _.Qf(Bi);
        c = void 0 === c ? {} : c;
        d = void 0 === d ? new _.u.Map : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? new _.u.Map : f;
        g = void 0 === g ? new Ci : g;
        h = void 0 === h ? 0 : h;
        var k = new _.u.Map,
            l = (0, a.getEvents)(),
            m = l.filter(function(Ca) {
                var Na = Ca.args;
                return "auctionEnd" === Ca.eventType && Na.auctionId
            }),
            n = new Di,
            p = function(Ca) {
                return Ca === b.ed || Ca === b.adUnitCode
            },
            r, v, w, y = null != (w = Ei.get((null != (r = b.ed) ? r : "") + (null != (v = b.adUnitCode) ? v : ""))) ? w : 0,
            B;
        m = null != (B = m.filter(function(Ca) {
            var Na, Xa, fb;
            return Number(null == (Na = Ca.args) ? void 0 : Na.timestamp) > y && (null == (Xa = Ca.args) ? void 0 : null == (fb = Xa.adUnitCodes) ? void 0 : _.z(fb, "find").call(fb, p))
        })) ? B : [];
        if (!m.length) return null;
        var C;
        if (m = null == (C = m.reduce(function(Ca, Na) {
                return Number(Na.args.timestamp) > Number(Ca.args.timestamp) ? Na : Ca
            })) ? void 0 : C.args) {
            B = void 0 === m.bidderRequests ? [] : m.bidderRequests;
            C = void 0 === m.bidsReceived ? [] : m.bidsReceived;
            var G = m.auctionId;
            m = m.timestamp;
            if (G && null != m && B.length) {
                var F, M;
                Ei.set((null != (F = b.ed) ? F : "") + (null != (M = b.adUnitCode) ? M : ""), m);
                F = Fi(n);
                a.version && Gi.test(a.version) && ti(F, 6, a.version);
                var R, N, aa;
                if (null == (R = a.getConfig) ? 0 : null == (N = R.call(a).cache) ? 0 : null == (aa = N.url) ? 0 : aa.length) {
                    var ha, la;
                    Hi(F, null == (ha = a.getConfig) ? void 0 : null == (la = ha.call(a).cache) ? void 0 : la.url)
                }
                _.ki(F, 9, g);
                g = Ii(function() {
                    return Ai(l, G)
                });
                R = _.x(B);
                aa = R.next();
                for (N = {}; !aa.done; N = {
                        bidderCode: void 0,
                        uj: void 0
                    }, aa = R.next())
                    for (ha = aa.value, N.bidderCode = ha.bidderCode, la = ha.bids, aa = ha.timeout, N.uj = ha.src, ha = ha.auctionStart, la = _.x(la), B = la.next(), M = {}; !B.done; M = {
                            Ae: void 0
                        }, B = la.next())
                        if (w = B.value, M.Ae = w.bidId, v = w.transactionId, B = w.adUnitCode, m = w.getFloor, r = w.mediaTypes, w = w.ortb2Imp, M.Ae && p(B)) {
                            ji(F, b, B);
                            var ea = void 0,
                                Pa = void 0;
                            h && !_.Ji(F, 11) && "string" === typeof(null == (ea = w) ? void 0 : null == (Pa = ea.ext) ? void 0 : Pa.gpid) && ti(F, 11, w.ext.gpid.substring(0, h));
                            v && (_.Ji(F, 4) || ti(F, 4, v), k.has(v) || k.set(v, ha));
                            null == Ki(F, 8) && _.z(Number, "isFinite").call(Number, aa) && _.yi(F, 8, aa);
                            w = _.z(C, "find").call(C, function(Ca) {
                                return function(Na) {
                                    return Na.requestId === Ca.Ae
                                }
                            }(M));
                            v = Zh(F, function(Ca) {
                                return function() {
                                    var Na = ci(new di, Ca.bidderCode);
                                    ei(Ca.bidderCode, a, Na);
                                    switch (Ca.uj) {
                                        case "client":
                                            _.ii(Na, 7, 1);
                                            break;
                                        case "s2s":
                                            _.ii(Na, 7, 2)
                                    }
                                    return Na
                                }
                            }(N)());
                            ri(F, v, B, d, e, f, m);
                            w ? (bi(v, 1), "number" === typeof w.timeToRespond && _.z(Number, "isFinite").call(Number, w.timeToRespond) && _.fi(v, 2, Math.round(w.timeToRespond)), M = Yh(w, c, r), $h(v, M)) : (M = g().get(M.Ae)) && !M.Ei ? (bi(v, 2), _.z(Number, "isFinite").call(Number, M.latency) && _.fi(v, 2, Math.round(M.latency))) : (M = bi(v, 3), _.z(Number, "isFinite").call(Number, aa) && _.fi(M, 2, Math.round(aa)))
                        }
                var wa;
                (null == (wa = a.getConfig) ? 0 : wa.call(a).useBidCache) && gi(F, b, G, c, a);
                return n
            }
        }
    };
    Mi = function(a, b) {
        var c, d;
        return _.ub(function(e) {
            if (1 == e.g) return c = b ? a.filter(function(f) {
                return !f.Nd
            }) : a, e.yield(_.u.Promise.all(c.map(function(f) {
                return f.Wh.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Nd
            });
            return e.yield(_.u.Promise.race([_.u.Promise.all(d.map(function(f) {
                return f.Wh.promise
            })), new _.u.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    _.Ni = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Pi = function(a) {
        var b = _.Oi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Qi = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.Oi(a, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Ri = function(a) {
        return (a = _.Pi(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Si = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Ti = function(a) {
        return _.Si(a).clientHeight
    };
    _.Oi = function(a, b) {
        var c = _.Si(a).clientWidth;
        return (void 0 === b ? 0 : b) ? c * _.Ui(a) : c
    };
    _.Vi = function(a, b) {
        var c = _.Si(a);
        return b ? (a = _.Ti(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.Wi = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Xi = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e;
                b.googletag.queryIds = null != (e = b.googletag.queryIds) ? e : [];
                b.googletag.queryIds.push(c);
                500 < b.googletag.queryIds.length && b.googletag.queryIds.shift()
            }
        } catch (f) {}
    };
    _.Yi = function(a) {
        var b = a.Df,
            c = a.Le,
            d = a.nf,
            e = a.Ef,
            f = a.Me;
        a = a.pf;
        for (var g = [], h = 0; h < a; h++)
            for (var k = 0; k < d; k++) {
                var l = k,
                    m = d - 1,
                    n = h,
                    p = a - 1;
                g.push({
                    x: b + (0 === m ? 0 : l / m) * (c - b),
                    y: e + (0 === p ? 0 : n / p) * (f - e)
                })
            }
        return g
    };
    Zi = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    _.dj = function(a) {
        var b = a.pa,
            c = a.Ig,
            d = a.hf,
            e = a.Hh,
            f = a.wa,
            g = a.pk,
            h = a.cn;
        a = 0;
        try {
            a |= b !== b.top ? 512 : 0;
            var k = Math.min(b.screen.width || 0, b.screen.height || 0);
            a |= k ? 320 > k ? 8192 : 0 : 2048;
            a |= b.navigator && $i(b.navigator.userAgent) ? 1048576 : 0;
            if (c) {
                k = a;
                var l = b.innerHeight;
                var m = ((void 0 === h ? 0 : h) ? _.Ui(b) * l : l) >= c;
                var n = k | (m ? 0 : 1024)
            } else n = a | (_.Ni(b) ? 0 : 8);
            a = n;
            a |= Qi(b, d, h);
            h || (a |= Ri(b))
        } catch (p) {
            a |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.Yi({
                    Df: 0,
                    Le: b.innerWidth,
                    nf: 3,
                    Ef: 0,
                    Me: Math.min(Math.round(b.innerWidth / 320 * 50), aj) + 15,
                    pf: 3
                });
                null != bj(cj(b, c), d) && (a |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, n = Math.min(Math.round(b.innerWidth / 320 * 50), aj) + 15, m = _.Yi({
                    Df: 0,
                    Le: d,
                    nf: 3,
                    Ef: e - n,
                    Me: e,
                    pf: 3
                }), 25 < n && m.push({
                    x: d - 25,
                    y: e - 25
                }), null != bj(cj(b, c), m) && (a |= 16777216)
        }
        g && (f = void 0 === f ? null : f, f = void 0 === f ? null : f, g = b.innerHeight, g = _.Yi({
            Df: 0,
            Le: b.innerWidth,
            nf: 10,
            Ef: g - 66,
            Me: g,
            pf: 10
        }), g = null != bj(cj(b, f), g));
        g && (a |= 16777216);
        return a
    };
    $i = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    cj = function(a, b) {
        return new _.ej(a, {
            ei: fj(a, void 0 === b ? null : b)
        })
    };
    fj = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.gj(c, "ach_evt", {
                    tn: d.tagName,
                    id: null != (g = d.getAttribute("id")) ? g : "",
                    cls: null != (h = d.getAttribute("class")) ? h : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    };
    pj = function(a) {
        var b = _.hj(new _.ij, a.pb);
        b = jj(b, 4, _.kj, hd(a.Jl));
        b = _.lj(b, 11, a.Ea);
        b = _.mj(b, 8, a.pvsid);
        b = _.mj(b, 7, a.Rf);
        b = _.lj(b, 9, a.Hb);
        var c = _.nj(b, _.oj, 5);
        _.Ne(c, 1, _.Wc, a.fb);
        return b
    };
    _.sj = function(a) {
        var b = _.hj(new _.ij, a.pb);
        b = jj(b, 3, _.kj, Xc(a.U));
        b = _.lj(b, 11, a.Ea);
        b = _.mj(b, 8, a.pvsid);
        b = _.mj(b, 7, a.Rf);
        b = _.lj(b, 9, a.Hb);
        var c = _.nj(b, _.oj, 5);
        _.Ne(c, 1, _.Wc, a.fb);
        return b
    };
    uj = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.tj(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    vj = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Pg(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = uj(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    xj = function(a, b) {
        return null !== _.wj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    };
    yj = function(a, b) {
        return _.wj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    };
    zj = function(a) {
        for (var b = [], c = _.x(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    };
    Aj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    };
    Bj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    };
    Cj = function(a) {
        return a.position + "-" + Bj(a.ka) + "x" + Bj(a.sa) + "-" + Bj(a.scrollY + a.td) + "Y"
    };
    Dj = function(a) {
        return "f-" + Cj({
            position: a.position,
            td: a.td,
            scrollY: 0,
            ka: a.ka,
            sa: a.sa
        })
    };
    Ej = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    };
    Gj = function(a, b, c) {
        var d = _.Fj(c.pa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.sa),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.ka),
                    k = .3 * c.ka;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = Dj({
                            position: "left",
                            td: e,
                            ka: c.ka,
                            sa: c.sa
                        });
                        b.set(l, Ej(b.get(l), g))
                    }
                    if (g < c.ka && h > c.ka - k) {
                        l = Dj({
                            position: "right",
                            td: e,
                            ka: c.ka,
                            sa: c.sa
                        });
                        var m = c.ka - h;
                        b.set(l, Ej(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    Jj = function(a, b) {
        var c = b.pa,
            d = b.Jc,
            e = "f-" + Bj(b.ka) + "x" + Bj(b.sa);
        a.has(e) || (a.set(e, 0), e = zj(c), d ? (Hj(a, b, e.filter(function(f) {
            return Aj(c, f)
        })), Ij(c, e.filter(function(f) {
            return !Aj(c, f)
        }))) : Hj(a, b, e))
    };
    Hj = function(a, b, c) {
        var d = b.Cc,
            e = b.pa;
        _.Fj(e).sideRailProcessedFixedElements.clear();
        d = new _.u.Set([].concat(_.zi(_.z(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.zi(d)));
        c = _.x(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, xj(e, d) || Gj(e, a, b)
    };
    Kj = function(a) {
        if (1200 > a.ka || 650 > a.sa) return null;
        var b = _.Fj(a.pa).sideRailAvailableSpace;
        a.Di || Jj(b, {
            pa: a.pa,
            ka: a.ka,
            sa: a.sa,
            Cc: a.Cc,
            Jc: a.Jc
        });
        for (var c = [], d = .9 * a.sa, e = _.Wi(a.pa), f = (a.sa - d) / 2, g = f, h = d / 7, k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                r = b,
                v = {
                    pa: a.pa,
                    ka: a.ka,
                    sa: a.sa,
                    Cc: a.Cc
                },
                w = Dj({
                    position: p,
                    td: n,
                    ka: v.ka,
                    sa: v.sa
                }),
                y = Cj({
                    position: p,
                    td: n,
                    scrollY: e,
                    ka: v.ka,
                    sa: v.sa
                });
            if (!r.has(y)) {
                var B = "left" === p ? 20 : v.ka - 20,
                    C = B;
                p = .3 * v.ka / 5 * ("left" === p ? 1 : -1);
                for (var G = 0; 6 > G; G++) {
                    var F = Zi(v.pa.document, {
                            x: Math.round(C),
                            y: Math.round(n)
                        }),
                        M = xj(F, v.Cc),
                        R = yj(F, v.pa);
                    if (!M && null !== R) {
                        Gj(R, r, v);
                        r.delete(y);
                        break
                    }
                    M || (M = v, "true" === F.getAttribute("google-side-rail-overlap") ? M = !0 : "false" === F.getAttribute("google-side-rail-overlap") ? M = !1 : (R = F.offsetHeight >= .25 * M.sa, M = F.offsetWidth >= .9 * M.ka && R));
                    if (M) r.set(y, Math.round(Math.abs(C - B) + 20));
                    else if (C !== B) C -= p, p /= 2;
                    else {
                        r.set(y, 0);
                        break
                    }
                    C += p
                }
            }
            n = Ej(r.get(w), r.get(y));
            m.call(l, n);
            g += h
        }
        b = a.oj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = _.z(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 === l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = _.z(Array(c.length), "fill").call(Array(c.length), 0);
        for (n = m; 0 <= n; n--) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[n];) l.pop();
            k[n] = 0 === l.length ? m : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (m = 0; m < c.length; m++)
            if (n = {
                    position: e,
                    width: Math.round(c[m]),
                    height: Math.round((k[m] - h[m] + 1) * d),
                    offsetY: f + h[m] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                l = n;
                break
            } else 1 === b && r && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    };
    Ij = function(a, b) {
        var c = _.Fj(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Lj(a);
                    for (var f = _.x(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, g()
                }, 500)
            });
            b = _.x(b);
            for (var e = b.next(); !e.done; e = b.next()) d.observe(e.value, {
                attributes: !0
            });
            c.g = d
        }
    };
    Lj = function(a) {
        a = _.Fj(a).sideRailAvailableSpace;
        var b = _.z(Array, "from").call(Array, _.z(a, "keys").call(a)).filter(function(d) {
            return _.z(d, "startsWith").call(d, "f-")
        });
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.Mj = function(a) {
        if (a.ma) return a.ma.Gb(1228, function() {
            return Kj(a)
        }) || null;
        try {
            return Kj(a)
        } catch (b) {}
        return null
    };
    Nj = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (F) {
                    if (15 == F.code) throw F.styleSheet = k, F;
                }
                h = l
            } catch (F) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = m,
                        r = c;
                    if (!(n = f.call(a, p.selectorText) && r(p))) a: {
                        var v = void 0;p = a;r = f;
                        var w = c,
                            y = e,
                            B = null != (v = m.cssRules) ? v : [];
                        for (v = 0; v < Math.min(B.length, y); v++) {
                            var C = B[v],
                                G = w;
                            if (r.call(p, C.selectorText) && G(C)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (F) {}
        }
        return !1
    };
    Uj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(Oj, "includes").call(Oj, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(Tj, "includes").call(Tj, e.maxHeight) || Nj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(Oj, "includes").call(Oj, g) || !!f && !_.z(Tj, "includes").call(Tj, f)
        }, c, d) ? !1 : !0
    };
    Wj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Vj(a, function(e) {
            return d = Uj(e, b, 10, 10)
        }, c);
        return d
    };
    Xj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    ak = function(a) {
        a = Yj(a);
        return _.Zj(a)
    };
    Yj = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    dk = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = bk.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {}, ig(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(ck(window)), e.em = c, e.lid = b, e.eids = oh().join(), e), d), "esp"))
    };
    ek = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.u.Promise(function(c) {
            var d = function() {
                c(b());
                _.eg(a, "load", d)
            };
            _.sb(a, "load", d)
        })
    };
    fk = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    jk = function(a, b) {
        return _.gk(a, hk, 2).some(function(c) {
            return ik(c, 1) === b && _.Ji(c, 2)
        })
    };
    kk = function(a, b) {
        return _.gk(a, hk, 2).some(function(c) {
            return ik(c, 1) === b && _.Ji(c, 2)
        })
    };
    qk = function(a, b, c, d) {
        if (b)
            for (var e = _.x(fk(b)), f = e.next(), g = {}; !f.done; g = {
                    Ic: void 0
                }, f = e.next())
                if (g.Ic = f.value, (f = lk().get(g.Ic, b).Yc) && !kk(a, g.Ic)) {
                    var h = mk(f);
                    if (2 !== h && 3 !== h) {
                        h = !1;
                        if (c) {
                            var k = /^(\d+)$/.exec(g.Ic);
                            if (k && !(h = _.z(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                            if (!h && !c.split(",").some(function(m) {
                                    return function(n) {
                                        var p;
                                        return null == d ? void 0 : null == (p = d.get(n)) ? void 0 : p.has(m.Ic)
                                    }
                                }(g))) continue
                        }
                        ai(f, 9, h);
                        (h = ik(f, 2)) && 1024 < h.length && (k = {}, dk(55, g.Ic, null, (k.sl = String(h.length), k)), _.nk(f.lb(ok(108)), 2));
                        pk(a, 2, hk, f);
                        f = ik(f, 2);
                        k = h = void 0;
                        var l = {};
                        dk(19, g.Ic, null, (l.hs = f ? "1" : "0", l.sl = String(null != (k = null == (h = f) ? void 0 : h.length) ? k : -1), l))
                    }
                }
    };
    rk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Dk = function(a, b, c, d, e, f) {
        f = void 0 === f ? sk : f;
        var g, h, k, l, m, n, p, r, v, w, y, B, C;
        return _.ub(function(G) {
            return 1 == G.g ? (g = new tk, h = new uk(a, c, e), J(g, h), J(g, new vk(h.o, void 0, d, e)), k = new wk(h.j, e), J(g, k), l = new xk(k.j, e), J(g, l), m = new yk(b, l.j, e), J(g, m), J(g, new vk(m.o, void 0, d, e)), n = new zk(m.j, m.H, f.sh ? 1024 : 300, f.sh ? 1024 : 1E3, e), J(g, n), J(g, new vk(n.j, void 0, d, e)), p = new Ak(e), J(g, p), r = new Bk(p.output, l.o, e), J(g, r), v = new yk(b, r.j, e), J(g, v), w = new vk(v.j, void 0, d, e), J(g, w), Ck(g), C = a, G.yield(n.j.promise, 2)) : G.return({
                id: C,
                collectorGeneratedData: null != (B = null == (y = G.A) ? void 0 : ik(y, 2)) ? B : null
            })
        })
    };
    Jk = function(a, b, c, d) {
        var e = {
            sh: _.E(Ek)
        };
        e = void 0 === e ? sk : e;
        Fk() !== Gk(window) ? dk(16, "") : Hk(a, "encryptedSignalProviders", c) && Hk(a, "secureSignalProviders", c) || (dk(38, ""), Ik(a, "encryptedSignalProviders", b, e, c, d), Ik(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Hk = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Ik = function(a, b, c, d, e, f) {
        var g, h = new Kk(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new Lk(h);
        h.addErrorHandler(e)
    };
    Ok = function(a, b) {
        var c = new tk,
            d = new Ak(b);
        a = new Mk(d.output, a, b);
        Nk(c, [d, a]);
        Ck(c)
    };
    Sk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Pk.has(f)) return null;
        Pk.add(f);
        f = new tk;
        a = new uk(a, c, e);
        var g = new vk(a.o, c, d, e),
            h = new Qk(a.j, e),
            k = new wk(h.j, e);
        b = new Rk(k.j, b, e);
        c = new vk(b.j, c, d, e);
        Nk(f, [a, g, h, k, b, c]);
        Ck(f);
        return f
    };
    Uk = function(a, b, c) {
        c = void 0 === c ? Tk : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.sb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Vk = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Wk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Yk = function(a) {
        if (a === a.top || _.Xk(a.top)) return _.u.Promise.resolve({
            status: 4
        });
        var b = Vk(a);
        if (!b) return _.u.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Wk(a.document.referrer)) return _.u.Promise.resolve({
            status: 3
        });
        var c = new _.Qh;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Mb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    bl = function(a, b) {
        var c = Zk(a);
        return c.messageChannelSendRequestFn ? _.u.Promise.resolve(c.messageChannelSendRequestFn) : new _.u.Promise(function(d) {
            function e(k) {
                return h.g(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.dg("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.jb($k).toString();
            var g = (new URL($k.toString())).origin,
                h = al({
                    destination: a,
                    wb: f,
                    origin: g,
                    Cb: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    il = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.E(cl),
            includeBuyerTopics: _.E(dl)
        };
        e = void 0 === e ? {} : e;
        var f = el(d),
            g = f.Ee,
            h = f.De;
        b = Zk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ua(k, g)));
            else if (Ug()(k)) l || (l = k !== g);
            else return c.Fb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new fl;
                var n = _.fi(m, 2, _.$f());
                k instanceof Uint8Array ? jj(n, 1, gl, wc(k, !1, !1)) : jj(n, 3, gl, Xc(k));
                d.setItem("goog:cached:topics", hl(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.u.Promise.resolve(g) : b.getTopicsPromise
    };
    el = function(a) {
        if (!a) return {
            Ee: null,
            De: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Ee: null,
                De: !0
            };
            var c = jl(b),
                d = kl(c, gl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = ll(ml(c, nl(c, gl, 1)));
                    break;
                case 3:
                    e = _.kg(c, nl(c, gl, 3), 0);
                    break;
                default:
                    ob(d)
            }
            var f = _.Ng(c, 2) + 6048E5 < _.$f();
            return {
                Ee: e,
                De: f
            }
        } catch (g) {
            return {
                Ee: null,
                De: !0
            }
        }
    };
    Zk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    ql = function(a) {
        if (La()) {
            var b = a.document.documentElement.lang;
            ol(a) ? pl(ck(a), !0, "", b) : (new MutationObserver(function(c, d) {
                ol(a) && (pl(ck(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    ol = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    pl = function(a, b, c, d) {
        ig({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    sl = function(a) {
        var b = "";
        rl(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    tl = function() {
        var a = Date.now();
        return _.z(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    wl = function(a) {
        var b = new ul;
        var c = tl();
        b = _.mj(b, 1, c);
        b = _.mj(b, 2, a.pvsid);
        b = _.lj(b, 3, a.Pa);
        c = oh();
        b = _.Le(b, 4, c, Zc);
        b = _.mj(b, 5, a.Ki);
        a = _.lj(b, 12, a.Ea);
        var d;
        if (b = null == (d = _.u.globalThis.performance) ? void 0 : d.memory) {
            d = new vl;
            try {
                _.mj(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.mj(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.mj(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.ki(a, 10, d);
        return a
    };
    Dl = function(a) {
        var b = _.cg();
        if (a.Wc) {
            var c = a.Qa,
                d = c.Vc,
                e = wl(a),
                f = new xl;
            b = _.mj(f, 2, b);
            f = new yl;
            f = _.zl(f, 1, a.Wc);
            f = _.Al(f, 2, a.Ki);
            f = _.zl(f, 3, a.rj);
            f = _.Al(f, 4, a.Ji);
            f = _.zl(f, 5, a.jh);
            a = _.Al(f, 6, a.jg);
            a = _.ki(b, 3, a);
            e = _.Bl(e, 6, Cl, a);
            d.call(c, e)
        }
    };
    Gl = function(a) {
        if (!a.Wc) return function() {};
        var b = tl();
        a.Qa.Vc(El(wl(a)));
        return function() {
            var c = a.Qa,
                d = c.Vc,
                e = wl(a);
            var f = new Fl;
            var g = tl() - b;
            f = _.mj(f, 1, g);
            e = _.Bl(e, 14, Cl, f);
            return void d.call(c, e)
        }
    };
    Hl = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    L = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Wa.apply(0, arguments),
                f = Il(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Wc && a.rj) {
                    var h = a.Qa,
                        k = h.Vc,
                        l = wl(a);
                    var m = _.mj(l, 5, a.Ji);
                    var n = new Jl;
                    var p = _.K(n, 1, b);
                    var r = _.Al(p, 2, g);
                    var v = _.Bl(m, 9, Cl, r);
                    k.call(h, v)
                }
            } catch (w) {}
            return f
        }
    };
    Il = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.Wa.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Of(Kl);
            try {
                var l = _.E(Ll);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Ml.call(this, a, 110, m);
                    else if (Ml.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Nl(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Ol = function(a, b, c, d) {
        return Il(a, b, c, void 0 === d ? !1 : d)()
    };
    Ml = function(a, b, c) {
        if (a.jh) {
            c = _.Pl(c) ? c.error : c;
            var d = new Ql,
                e = new Rl;
            try {
                var f = ck(window);
                _.mj(e, 1, f)
            } catch (p) {}
            try {
                var g = oh();
                _.Le(e, 2, g, Zc)
            } catch (p) {}
            try {
                _.lj(e, 3, window.document.URL)
            } catch (p) {}
            f = _.ki(d, 2, e);
            g = new Sl;
            b = _.K(g, 1, b);
            try {
                var h = ah(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.lj(b, 2, h)
            } catch (p) {}
            try {
                var k = ah(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.lj(b, 3, k)
            } catch (p) {}
            try {
                var l = ah(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Le(b, 4, l.split(/\n\s*/), _.vd)
            } catch (p) {}
            h = _.ki(f, 1, b);
            k = new Tl;
            try {
                _.lj(k, 1, a.Pa)
            } catch (p) {}
            try {
                var m = Ul();
                _.Al(k, 2, m)
            } catch (p) {}
            try {
                var n = [].concat(_.zi(_.z(Vl, "keys").call(Vl)));
                _.Le(k, 3, n, _.vd)
            } catch (p) {}
            _.Bl(h, 4, Wl, k);
            _.mj(h, 5, a.jg);
            a.Qa.wm(h)
        }
    };
    Zl = function(a, b) {
        var c = Xl.get(a);
        c || (b = c = b(), Yl.set(b, a), Xl.set(a, b));
        return c
    };
    O = function(a) {
        return function() {
            return new $l(a, [].concat(_.zi(_.Wa.apply(0, arguments))))
        }
    };
    am = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? am(b) : String(b)
        }).join(", ") + "]"
    };
    bm = function(a, b) {
        b = am(b);
        b = b.substring(1, b.length - 1);
        return new $l(96, [a, b])
    };
    cm = function(a) {
        return (_.H = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.z(_.H, "includes")).call(_.H, a) ? a : null
    };
    em = function(a, b, c) {
        return Zl(c, function() {
            return new dm(a, b, c)
        })
    };
    gm = function(a, b, c) {
        return Zl(c, function() {
            return new fm(a, b, c)
        })
    };
    hm = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : P(d, bm("Slot.setClickUrl", [a]), c)
    };
    om = function(a, b, c, d, e) {
        if ("string" !== typeof a || im(a)) P(e, bm("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.sa(b) ? f = _.z(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.H = jm(d), _.z(_.H, "find")).call(_.H, function(g) {
                return ik(g, 1) === a
            })) ? km(b, f): (b = km(lm(new mm, a), f), pk(d, 9, mm, b));
            e.info(nm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    pm = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.x(_.z(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, om(f, a[f], b, c, d);
        else d.error(bm("Slot.updateTargetingFromMap", [a]), b)
    };
    rm = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, bm("Slot.getTargeting", [a]), b), []) : (b = (_.H = jm(c), _.z(_.H, "find")).call(_.H, function(e) {
            return ik(e, 1) === a
        })) ? qm(b).slice() : []
    };
    sm = function(a) {
        return jm(a).map(function(b) {
            return _.I(b, 1)
        })
    };
    xm = function(a, b, c, d) {
        if (void 0 === a) _.nk(c, 9), d.info(tm(b.getAdUnitPath()), b);
        else {
            var e = jm(c),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return ik(g, 1) === a
                });
            0 > f ? P(d, um(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.vm(c, 9, e), d.info(wm(a, b.getAdUnitPath()), b))
        }
    };
    _.Am = function(a) {
        _.Of(ym).g = !0;
        return zm[a]
    };
    Em = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.z(a, "find").call(a, function(f) {
            f = _.Bm(f, Cm, 1);
            return Dm(f, 1) <= b && Dm(f, 2) <= c
        })) ? void 0 : _.gk(d, Cm, 2)) ? e : null
    };
    Gm = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && _.gk(a, Fm, 6).length ? d = Em(_.gk(a, Fm, 6), b, c) : d = _.gk(a, Cm, 5);
        return d
    };
    Im = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Hm(!1, b), c = Gm(a, b.width, b.height));
        null != c || (c = Gm(a));
        return null == c ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [Dm(d, 1), Dm(d, 2)]
        })
    };
    Jm = function(a) {
        var b = [],
            c = !1;
        a = _.x(Im(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Km = function(a) {
        return 0 !== a && 1 !== a
    };
    Lm = function(a) {
        return Km(a) && !(_.H = [8, 9], _.z(_.H, "includes")).call(_.H, a)
    };
    Mm = function(a) {
        var b = a.document;
        return ch(a) ? b.URL : b.referrer
    };
    Pm = function(a) {
        try {
            return Nm(a, window.top)
        } catch (b) {
            return new _.Om(-12245933, -12245933)
        }
    };
    Tm = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Qm(Rm, a), a = new _.Sm(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Vm = function(a, b) {
        for (var c = {}, d = _.x(_.z(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.ie(b[e]),
                g = _.Of(Um),
                h = g.g.get(e);
            null == h ? h = ++_.Of(Kl).l : g.g.delete(e);
            _.nk(f, 20, _.bd(h));
            c[e] = f
        }
        return {
            ca: _.ie(a),
            T: c
        }
    };
    Xm = function() {
        for (var a = "", b = _.x(Wm()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Wm = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    cn = function(a, b, c, d) {
        var e = Ym(b, a) || Zm(b, a);
        if (!e) return null;
        var f = Pm(e),
            g = e === Zm(b, a),
            h = Ii(function() {
                var p = g ? Zm(b, a) : e;
                return p && $m(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Im(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = an(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = an(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && bn(e) ? f : new _.Om(-12245933, -12245933)
    };
    dn = function(a, b, c, d) {
        var e = Zm(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = cn(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    en = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    fn = function(a) {
        return en(a) + "__container__"
    };
    Ym = function(a, b) {
        var c;
        return (null == (c = Zm(a, b)) ? void 0 : c.querySelector('[id="' + fn(a) + '"]')) || null
    };
    gn = function(a, b) {
        var c, d;
        return null != (d = null == (c = Ym(a, b)) ? void 0 : c.querySelector('iframe[id="' + en(a) + '"]')) ? d : null
    };
    Zm = function(a, b) {
        b = void 0 === b ? document : b;
        return hn().l.get(a) || b.getElementById(a.getDomId())
    };
    kn = function(a, b, c) {
        return Zl(c, function() {
            return new jn(a, b, c, c.g)
        })
    };
    ln = function(a) {
        return _.z(Object, "assign").call(Object, {}, a, _.z(Object, "fromEntries").call(Object, _.z(Object, "entries").call(Object, a).map(function(b) {
            b = _.x(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    pn = function() {
        var a = {},
            b = ln(mn);
        a.OutOfPageFormat = b;
        b = ln(nn);
        a.TrafficSource = b;
        b = ln(on);
        a.Taxonomy = b;
        return a
    };
    qn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    An = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== qn()[a] && "string" === typeof b) {
            var f = (_.H = c.Sa(), _.z(_.H, "find")).call(_.H, function(g) {
                return ik(g, 1) === a
            });
            f ? km(f, [b]) : (f = rn(lm(new mm, a), b), pk(c, 14, mm, f));
            e.info(zn(a, String(b), d))
        } else P(e, bm("PubAdsService.set", [a, b]))
    };
    Bn = function(a, b, c) {
        return "string" !== typeof a ? (P(c, bm("PubAdsService.get", [a])), null) : (b = (b = (_.H = b.Sa(), _.z(_.H, "find")).call(_.H, function(d) {
            return ik(d, 1) === a
        })) && qm(b)) ? b[0] : null
    };
    Cn = function(a) {
        return a.Sa().map(function(b) {
            return _.I(b, 1)
        })
    };
    En = function() {
        for (var a = Rf(Dn) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    In = function() {
        if (Fn) return Fn;
        for (var a = Sf(Gn), b = [], c = 0; c < a.length; c += 2) _.Hn(a[c], a[c + 1], b);
        return Fn = b.join("&")
    };
    Nn = function(a, b) {
        if (!b || !_.ka(b)) return null;
        var c = !1,
            d = new Jn;
        _.Kn(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? ai(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? ai(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? ai(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(Ln("setSafeFrameConfig", Mn(b), f, Mn(e)))
        });
        return c ? null : d
    };
    Pn = function(a) {
        var b = new Jn;
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) {
                if (null != On(c, 1)) {
                    var d = b,
                        e = _.Q(c, 1);
                    ai(d, 1, e)
                }
                null != On(c, 2) && (d = b, e = _.Q(c, 2), ai(d, 2, e));
                null != On(c, 3) && (d = b, c = _.Q(c, 3), ai(d, 3, c))
            }
        return b
    };
    Qn = function(a, b) {
        var c = {};
        b = (c[0] = vh(b.pvsid), c);
        return _.Of(mh).A(a, b)
    };
    Sn = function(a, b) {
        var c;
        return null == (c = _.Rn(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    Tn = function(a, b, c, d) {
        (c = Sn(c, d)) ? (d = {}, b = (d[0] = vh(b.pvsid), d[1] = vh(c), d), _.Of(mh).A(a, b)) : Qn(a, b)
    };
    Xn = function(a) {
        var b = a.key,
            c = a.value,
            d = a.Fa,
            e = a.serviceName,
            f = a.Fm,
            g = a.ib,
            h = a.R;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.sa(c) && (k = _.z(Array, "from").call(Array, c));
        var l = "string" === typeof b && !im(b);
        k = k && xa(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.H = _.gk(d, mm, 2), _.z(_.H, "find")).call(_.H, function(p) {
                return ik(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    P(h, Un(c.join()));
                    return
                }
                if (m) {
                    P(h, Vn(c.join()));
                    return
                }
                c = Wn(c, g, a)
            }
            m ? km(m, c) : (f = km(lm(new mm, b), c), pk(d, 2, mm, f));
            h.info(nm(b, c.join(), e))
        } else P(h, bm("PubAdsService.setTargeting", [b, c]))
    };
    Yn = function(a, b, c) {
        return "string" !== typeof a ? (P(c, bm("PubAdsService.getTargeting", [a])), []) : (b = (_.H = _.gk(b, mm, 2), _.z(_.H, "find")).call(_.H, function(d) {
            return ik(d, 1) === a
        })) ? qm(b).slice() : []
    };
    Zn = function(a) {
        return _.gk(a, mm, 2).map(function(b) {
            return _.I(b, 1)
        })
    };
    co = function(a, b, c, d) {
        if (void 0 === a) _.nk(b, 2), d.info($n(c));
        else if ("gpt-beta" === a) P(d, ao(a));
        else {
            var e = _.gk(b, mm, 2),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return ik(g, 1) === a
                });
            0 > f ? P(d, um(a, c)) : (e.splice(f, 1), _.vm(b, 2, e), d.info(bo(a, c)))
        }
    };
    Wn = function(a, b, c) {
        var d = [];
        a = _.x(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Qn(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    fo = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = eo.exec(null != (b = null == (a = _.Am(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    go = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    ho = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.z(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(Wg())
    };
    jo = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                io();
                return !0
            },
            set: function() {
                io()
            },
            configurable: !0
        })
    };
    mo = function(a, b, c, d, e, f) {
        var g = ko(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Fa;
        if (!f || !g) return P(b, bm("PubAdsService.definePassback", [d, e])), null;
        ai(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Yi: kn(a, b, new lo(a, f, c)),
            Fa: g
        }
    };
    oo = function(a, b, c, d, e) {
        return Zl(c, function() {
            return new no(a, b, c, d, e)
        })
    };
    po = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === qn()[a] ? P(e, bm("Slot.set", [a, b]), c) : (c = (_.H = d.Sa(), _.z(_.H, "find")).call(_.H, function(f) {
            return ik(f, 1) === a
        })) ? km(c, [b]) : (b = rn(lm(new mm, a), b), pk(d, 3, mm, b))
    };
    qo = function(a, b, c, d) {
        return "string" !== typeof a ? (P(d, bm("Slot.get", [a]), b), null) : (b = (b = (_.H = c.Sa(), _.z(_.H, "find")).call(_.H, function(e) {
            return ik(e, 1) === a
        })) && qm(b)) ? b[0] : null
    };
    ro = function(a) {
        return a.Sa().map(function(b) {
            return _.I(b, 1)
        })
    };
    to = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(so) : "fluid" === a
    };
    uo = function(a) {
        return Array.isArray(a) && 2 === a.length && so(a[0]) && so(a[1])
    };
    wo = function(a) {
        if (Array.isArray(a)) {
            var b = new Cm;
            b = _.nk(b, 1, _.bd(a[0]));
            a = _.nk(b, 2, _.bd(a[1]))
        } else a = vo();
        return a
    };
    yo = function(a) {
        var b = [];
        if (xo(a)) b.push(wo(a));
        else if (Array.isArray(a)) {
            a = _.x(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, xo(c) ? b.push(wo(c)) : ua(c, ["fluid"]) && b.push(vo())
        }
        return b
    };
    zo = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return yo(a)
    };
    xo = function(a) {
        return _.E(Ao) ? Array.isArray(a) && 2 === a.length ? a.every(Bo) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    Do = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Co("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!uo(b)) throw new Co("Size must be an array of two non-negative integers");
        var c = new Cm;
        c = _.nk(c, 1, _.bd(b[0]));
        b = _.nk(c, 2, _.bd(b[1]));
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = yo(a[1]), 0 === a.length) throw new Co("At least one slot size must be present");
        c = new Fm;
        b = _.ki(c, 1, b);
        return _.vm(b, 2, a)
    };
    Eo = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Io = function(a, b) {
        _.E(Fo) ? (_.nk(a, 28), null !== b && Xg(b) && _.z(Object, "hasOwn").call(Object, b, "enabled") && (b = b.enabled, Go(b) && (b = Ho(b), _.ki(a, 28, b)))) : void 0 === b || null === b ? _.nk(a, 28) : (b = b.enabled, Go(b) ? (b = Ho(b), _.ki(a, 28, b)) : void 0 !== b && null !== b || _.nk(a, 28))
    };
    Jo = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.x((_.H = Je(b, 26, Dd), _.z(_.H, "values")).call(_.H));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Ml(a, 1023, e)
            }
        }
        return c
    };
    Lo = function(a, b, c) {
        return Zl(c, function() {
            return new Ko(a, b, c)
        })
    };
    Vo = function(a, b, c, d, e, f, g, h) {
        var k = new tk,
            l = new Mo(a, h);
        J(k, l);
        e = new No(a, d, e);
        J(k, e);
        e = new Oo(a, b, d, f, l.nb);
        J(k, e);
        h = new Po(a, b, c, d, h, f, l.nb);
        J(k, h);
        if (_.E(Qo)) {
            b = new Ro(a, b, c, d, f, l.nb);
            J(k, b);
            var m = b.j
        }
        l = new So(a, l.nb, h.j, e.j, m);
        J(k, l);
        _.E(To) && J(k, new Uo(a, g, l.output));
        Ck(k);
        return {
            nb: l.output,
            Ka: k
        }
    };
    Xo = function(a, b) {
        return Zl(b, function() {
            return new Wo(a, b)
        })
    };
    Zo = function(a, b, c) {
        var d = Il(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Yo(c);
                b.cmd = Xo(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.sb(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    bp = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? Ol(a, 94, function() {
            Eo()._pubconsole_disable_ || null !== $o(b) && ap(a, b)
        }) : _.sb(_.t, "load", Il(a, 94, function() {
            Eo()._pubconsole_disable_ || null !== $o(b) && ap(a, b)
        }))
    };
    ap = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!cp) {
            var c = new dp("gpt_pubconsole_loaded");
            ep(c, a);
            fp(c, "param", String($o(b)));
            fp(c, "api", String(gp));
            hp(c);
            _.ip(b.document, jp);
            cp = !0
        }
    };
    $o = function(a) {
        var b = Mm(a),
            c;
        return null != (c = (_.H = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.z(_.H, "find")).call(_.H, function(d) {
            var e = b.search(kp);
            b: {
                var f = 0;
                for (var g = d.length; 0 <= (f = b.indexOf(d, f)) && f < e;) {
                    var h = b.charCodeAt(f - 1);
                    if (38 == h || 63 == h)
                        if (h = b.charCodeAt(f + g), !h || 61 == h || 38 == h || 35 == h) break b;
                    f += g + 1
                }
                f = -1
            }
            if (0 > f) d = null;
            else {
                g = b.indexOf("&", f);
                if (0 > g || g > e) g = e;
                f += d.length + 1;
                d = decodeURIComponent(b.slice(f, -1 !== g ? g : 0).replace(/\+/g, " "))
            }
            return null !== d
        })) ? c : null
    };
    lp = function() {
        Eo()._pubconsole_disable_ = !0
    };
    op = function() {
        mp && (Eo().console.openConsole(np), np = void 0, mp = !1)
    };
    pp = function(a) {
        switch (Number(a)) {
            case 0:
                return "";
            case 1:
                return "Out-of-page creative";
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            case 7:
                return "Game Manual Interstitial";
            case 4:
                return "Rewarded";
            case 8:
            case 9:
                return "Side Rail";
            default:
                return ""
        }
    };
    qp = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(ik(a, 1)), c.push(Jm(a)), c.push(ik(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.uh(c.join(":")).toString() : "0"
    };
    rp = function(a) {
        if (!_.Xk(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    tp = function(a, b, c, d, e) {
        var f = void 0,
            g = Il(a.context, b, e);
        _.sb(c, d, g) && (f = function() {
            return void _.eg(c, d, g)
        }, _.sp(a, f));
        return f
    };
    vp = function(a) {
        a = (_.Xk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!up(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    wp = function(a) {
        return Math.round(Number(an(a)))
    };
    xp = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.z(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.H = ["script", "style"], _.z(_.H, "includes")).call(_.H, c.tagName.toLowerCase())
        })
    };
    zp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.yp(a, c), a = a.parentElement
    };
    Ap = function(a, b, c, d, e) {
        _.yp(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.yp(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.yp(a, f)), !0) : !1
    };
    Cp = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = Jm(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = gn(c, b)) ? n : Zm(c, b);
                m = Bp(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    Bp = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.Qf(Dp);
        return Il(a, 459, function(p, r) {
            (p = null == p ? void 0 : p[0]) && Ep(a, b, c, d, e, f, g, h, k, l, r, m, p, n)
        })
    };
    Ep = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        var v = p.boundingClientRect,
            w = p.intersectionRatio,
            y = window.innerWidth,
            B = v.left,
            C = v.right,
            G = 0 > B + 2,
            F = 0 < C - (y + 2);
        (.98 <= w || G || F) && Fp(k, function(M) {
            m.unobserve(n);
            var R = G || F;
            var N = new Gp;
            Hp(n, R) && N.set(10);
            if (void 0 !== h && xp(n)) {
                var aa, ha = null == (aa = Zm(c, b)) ? void 0 : aa.parentElement,
                    la;
                aa = ha ? null == (la = $m(ha, window)) ? void 0 : la.width : void 0;
                h !== aa && N.set(16)
            }
            R ? (N.set(8), R = Ip(N)) : R = Jp(b, c, w, N);
            la = Kp(c, n, f);
            N = la.vl;
            la = la.yl;
            ep(M, a);
            fp(M, "qid", l);
            fp(M, "iu", c.getAdUnitPath());
            fp(M, "e", String(R));
            G && fp(M, "ofl", String(B));
            F && fp(M, "ofr", String(C - y));
            fp(M, "ret", e + "x" + f);
            fp(M, "req", g);
            fp(M, "bm", String(d));
            fp(M, "efh", Number(N));
            fp(M, "stk", Number(la));
            fp(M, "ifi", Lp(window))
        }, r)
    };
    Jp = function(a, b, c, d) {
        var e = gn(b, a) || Zm(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = Zm(b, a),
                n = $m(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return Ip(d);
            var p = wp(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var r = a.elementsFromPoint(g + p + 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, h + c + p);
            var w = a.elementsFromPoint(b - p - 2, f - c - p);
            var y = a.elementsFromPoint(g + p + 2, f - c - p);
            var B = a.elementsFromPoint(b / 2, f - c - p)
        } catch (G) {
            return d.set(1), Ip(d)
        }
        if (!(r && r.length && v && v.length && w && w.length && y && y.length && B && B.length)) return d.set(7), Ip(d);
        a = function(G, F) {
            for (var M = !1, R = 0; R < G.length; R++) {
                var N = G[R];
                if (M) {
                    var aa = $m(N, window);
                    if ("hidden" !== aa.visibility && !Mp(N) && !C(e, N)) {
                        d.set(F);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else e === N && (M = !0)
            }
        };
        Np(e) && d.set(9);
        var C = function(G, F) {
            return Op(G, F) || Op(F, G)
        };
        g = r[0];
        e === g || C(e, g) || Mp(g) || d.set(2);
        g = v[0];
        e === g || C(e, g) || Mp(g) || d.set(3);
        g = w[0];
        e === g || C(e, g) || Mp(g) || d.set(4);
        g = y[0];
        e === g || C(e, g) || Mp(g) || d.set(5);
        if (Mp(e)) return Ip(d);
        a(r, 12);
        a(v, 13);
        a(w, 14);
        a(y, 15);
        a(B, 6);
        return Ip(d)
    };
    Hp = function(a, b) {
        var c = !1,
            d = !1;
        return Pp(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    Kp = function(a, b, c) {
        var d = (a = Zm(a)) && $m(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Vj(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Uj(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? wp(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(Oj, "includes").call(Oj, l) || (e = !1)
                }
            f || (k = $m(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            vl: e,
            yl: f
        }
    };
    Mp = function(a) {
        return Pp(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Np = function(a) {
        return Pp(a, function(b) {
            var c;
            return (_.H = ["left", "right"], _.z(_.H, "includes")).call(_.H, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Qp = function(a, b, c, d) {
        var e = _.dg("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Rp = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Tp = function(a, b, c) {
        var d = new _.u.Map;
        a = _.x(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = li(f, Sp, 28) ? _.Bm(f, Sp, 28) : _.Bm(c, Sp, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != On(g, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    Wp = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.x(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = Zm(d);
                d = Up((null == k ? void 0 : k.parentElement) && $m(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = Tm(m)) ? e : new _.Sm(0, 0);
                    Vp(l, m, h, 100);
                    e = null != (d = Tm(k)) ? d : new _.Sm(0, 0);
                    Vp(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Ql: f,
            Lm: g
        }
    };
    Vp = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Wj(b, c, d))) {
                a: {
                    do {
                        var f = $m(b, c);
                        if (f && "fixed" == f.position) {
                            var g = !1;
                            break a
                        }
                    } while (b = b.parentElement);g = !0
                }
                e = !g
            }
            e && (a.height = -1)
        } catch (h) {
            a.width = -1, a.height = -1
        }
    };
    Yp = function(a, b, c) {
        var d = 0 !== (0, _.Xp)(),
            e = Hm(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = Hm(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.x(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new Gp;
                var l = Zm(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var r = 0, v = l; v && 100 > r; r++, v = v.parentElement) {
                        var w = $m(v, c);
                        if (w) {
                            var y = w,
                                B = y.display,
                                C = y.overflowX;
                            if ("visible" !== y.overflowY && (d.set(2), (y = Tm(v)) && (k = k ? Math.min(k, y.width) : y.width), d.get(9))) break;
                            Rp(w) && d.set(9);
                            "none" === B && d.set(7);
                            "IFRAME" === v.nodeName && (w = parseInt(w.width, 10), w < e && (d.set(8), k = k ? Math.min(w, k) : w));
                            n || (n = "scroll" === C || "auto" === C);
                            m || (m = "flex" === B);
                            p || (p = "listbox" === v.role)
                        } else d.set(3)
                    }
                    if (!p) {
                        if (m = n && m) l = l.getBoundingClientRect().left, m = l > e || 0 > l;
                        p = m
                    }
                    p && d.set(11)
                } else d.set(1);
                l = _.x(h);
                for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
                f.push(Ip(d));
                g.push(k)
            }
        return {
            al: f,
            Ol: g
        }
    };
    Zp = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.x(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    Xg: void 0
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = Xh(g, b), f.Xg = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.x(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Xb: void 0,
                            xi: void 0
                        }, k = e.next()) k = k.value, h.xi = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Xb = qi(oi(pi(new mi, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.kg(l.Xb, 1, 0) && pi(l.Xb, 1);
                            var p, r = null == (p = l.xi) ? void 0 : p.apply(this, [n]);
                            n = c ? r || {} : {
                                currency: "USD",
                                floor: m.Xg
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.kg(l.Xb, 1, 0) && (n = oi(pi(l.Xb, 6), 1E6 * r.floor), ti(n, 3, r.currency)), r) : (r.floor || 0) > m.Xg ? (1 === _.kg(l.Xb, 1, 0) && oi(pi(l.Xb, 5), 1E6 * r.floor), r) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Xb)
                }
            }
        }
    };
    $p = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Eo().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    bq = function(a, b) {
        return Zl(b, function() {
            return new aq(a, b)
        })
    };
    cq = function(a, b) {
        for (var c = new Gp, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Ip(c)
    };
    eq = function(a, b) {
        return dq(a, b)
    };
    dq = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    hq = function(a, b, c) {
        var d = {
                ic: new fq,
                wc: new fq,
                vc: new fq,
                uc: new fq,
                cd: new fq,
                Pc: new fq,
                vf: new fq,
                wf: new fq,
                Pf: new fq
            },
            e = new tk;
        J(e, new gq(a, b, c, window, d));
        Ck(e);
        return {
            Eh: d,
            Ka: e
        }
    };
    jq = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    mh: new fq
                },
                k = new tk;
            a = new iq(a, b, c, d, e, f, g, h);
            J(k, a);
            Ck(k);
            return {
                ek: h,
                Ka: k
            }
        }
    };
    lq = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new tk;
            J(f, new kq(a, c, d, e, b.ic));
            Ck(f)
        }
    };
    nq = function(a, b) {
        var c;
        return !(null != (c = mq(b, 22)) ? !c : !_.Q(a, 15))
    };
    pq = function(a) {
        var b;
        var c = new oq;
        c = _.mj(c, 2, a.pvsid);
        c = _.lj(c, 3, a.Pa);
        c = _.lj(c, 6, a.Ea);
        var d = null != (b = a.Rf) ? b : _.$f();
        b = _.mj(c, 1, d);
        c = oh();
        b = _.Le(b, 4, c, Zc);
        a.payload && (c = a.payload(), _.ki(b, 7, c));
        a.pb && _.mj(b, 5, a.pb);
        return b
    };
    rq = function(a, b, c, d) {
        for (var e = _.x(_.z(Object, "entries").call(Object, qq)), f = e.next(); !f.done; f = e.next()) {
            var g = _.x(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && P(a, g(String(c), d))
        }
    };
    wq = function(a, b, c) {
        a.ym && a.Qa.pj(pq(_.z(Object, "assign").call(Object, {}, a, {
            pb: a.Nl,
            payload: function() {
                var d = new sq;
                var e = _.tq(d, uq, 1, vq);
                e = _.yi(e, 1, b);
                _.yi(e, 2, c);
                return d
            }
        })))
    };
    yq = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = (c = void 0 === c ? null : c) ? fh(c) : null;
        var d = !0;
        b = void 0 === b ? !0 : b;
        d = void 0 === d ? !1 : d;
        var e = 0;
        try {
            e |= a !== a.top ? 512 : 0;
            var f;
            if (!(f = !a.navigator)) {
                var g = a.navigator;
                f = "brave" in g && "isBrave" in g.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= Qi(a, 2500, d);
            d || (e |= Ri(a));
            !b || c && xq(c) || (e |= 4194304)
        } catch (h) {
            e |= 32
        }
        return e
    };
    zq = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42;
            case 7:
                return 10;
            case 8:
                return 3;
            case 9:
                return 4
        }
    };
    Cq = function(a, b, c) {
        a = zq(a);
        if (!a) return null;
        if (10 === a) return 0;
        var d = 0;
        if (!(_.H = [11, 10], _.z(_.H, "includes")).call(_.H, a)) {
            d |= b !== b.top ? 512 : 0;
            var e = _.Fj(b);
            e = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && e.adCount ? 1 == a || 2 == a ? !(!e.adCount[1] && !e.adCount[2]) : (e = e.adCount[a]) ? 1 <= e : !1 : !1;
            e && (d |= 64);
            if (d) return d
        }
        if (2 === a || 1 === a) {
            var f = {
                pa: b,
                hf: _.Aq,
                Hh: c ? a : void 0,
                cn: !0
            };
            0 === (0, _.Xp)() && (f.hf = 3E3, f.Ig = 650);
            d |= _.dj(f)
        } else if (8 === a) d |= yq(b);
        else if (3 === a || 4 === a) {
            var g = a;
            e = _.E(Bq);
            g = void 0 === g ? null : g;
            c = b !== b.top ? 512 : 0;
            $i(null == (f = b.navigator) ? void 0 : f.userAgent) && (c |= 1048576);
            f = b.innerWidth;
            1200 > f && (c |= 65536);
            var h = b.innerHeight;
            650 > h && (c |= 2097152);
            g && 0 === c && (g = 3 === g ? "left" : "right", (f = _.Mj({
                pa: b,
                Di: !1,
                oj: 1,
                position: g,
                ka: f,
                sa: h,
                Cc: new _.u.Set,
                minWidth: 120,
                minHeight: 500,
                Jc: void 0 === e ? !1 : e
            })) ? _.Fj(b).sideRailPlasParam.set(g, f.width + "x" + f.height + "_" + String(g).charAt(0)) : c |= 16);
            d |= c
        } else 11 !== a && 42 !== a && (d |= 32);
        d || (b = _.Fj(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return d
    };
    Fq = function(a, b, c, d) {
        var e = d.Zh,
            f = d.adUnitPath;
        d = void 0 === d.yb ? !1 : d.yb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Dq(e)) ? Eq(a, b, f, c, {
            Wb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            yb: d
        }) : (b.error(bm("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Dq = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!up(mn, function(b) {
                    return b === a
                })
        }
    };
    Eq = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Wb: e.Wb,
            format: f,
            yb: e.yb
        });
        a = b.slotId;
        b = b.Fa;
        a && b && (_.ii(b, 15, f), _.sp(a, function() {
            var g = window,
                h = zq(f);
            if (h) {
                g = _.Fj(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Gq = function(a, b) {
        var c;
        return !(null != (c = mq(a, 11)) ? !c : !_.Q(b, 10))
    };
    Hq = function(a, b, c, d) {
        if (a = Zm(a, b)) {
            var e;
            if (c = null != (e = mq(c, 24)) ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Kq = function(a, b) {
        var c = b.L,
            d = b.O;
        b = b.aa;
        a = _.x(a.X);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.Iq(c, e)) {
                var f = d,
                    g = f.ca;
                f = f.T[e.getDomId()];
                Gq(f, g) && Hq(e, b, f, g);
                Jq(c, e);
                var h = void 0,
                    k = void 0;
                null != (h = null != (k = mq(f, 10)) ? k : _.Q(g, 11)) && h && Hq(e, b, f, g)
            }
        return {}
    };
    Mq = function(a, b, c) {
        var d = new tk;
        a = new Lq(a, b, c);
        J(d, a);
        Ck(d)
    };
    Nq = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Gh: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Gh: a.length - b.length + 8
        }
    };
    Oq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Pq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Oq(a, b)
    };
    Qq = function(a) {
        var b, c;
        return null != (c = null == (b = _.z(a, "find").call(a, function(d) {
            return "page_url" === ik(d, 1)
        })) ? void 0 : qm(b)[0]) ? c : null
    };
    Rq = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Sq = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        rl(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Tq = function(a, b) {
        var c = b.T;
        return !!Qq(b.ca.Sa()) || a.some(function(d) {
            return null !== Qq(c[d.getDomId()].Sa())
        })
    };
    Vq = function(a, b) {
        var c, d, e, f, g;
        return _.ub(function(h) {
            c = a;
            d = c.ld;
            e = b;
            f = e.pg;
            return (null != (g = d) ? g : f.ld()) ? h.return(Uq(f)) : h.return(null)
        })
    };
    Zq = function(a, b, c) {
        var d = window,
            e = new tk;
        d = new Wq(d);
        _.S(e, d);
        a = new Xq(a, d, c, _.Am(150));
        J(e, a);
        b = new Yq(879, Vq, {
            ld: b ? a.Mc : void 0
        }, {
            pg: d,
            Do: !!b
        }, void 0, e.C.g);
        b = J(e, b).output;
        Ck(e);
        return {
            Mc: a.Mc,
            qg: b,
            Ka: e
        }
    };
    ar = function() {
        var a = void 0 === a ? window : a;
        $q = _.$f(a)
    };
    br = function(a, b) {
        var c = _.dg("DIV");
        c.id = a;
        c.textContent = b;
        _.yp(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    cr = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    fr = function(a, b, c, d, e) {
        var f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        if (!b) return {
            Bg: e
        };
        var g = null != Ki(b, 1) ? null != dr(b) && 0 !== (0, _.Xp)() ? Ki(b, 1) * dr(b) : Ki(b, 1) : null;
        if (null == g) return {
            Bg: e
        };
        b = new tk;
        a = new er(a, d, c, g, e, f);
        J(b, a);
        Ck(b);
        return {
            Bg: a.output,
            Cl: b
        }
    };
    pr = function(a, b, c, d, e) {
        var f = window,
            g = new tk,
            h = J(g, new gr(a, b, hr, function(m) {
                return ir("i-adframe-load", m.detail.data)
            })),
            k = J(g, new gr(a, b, hr, function(m) {
                return ir("i-dismiss", m.detail.data)
            }));
        h = 0 < _.Qf(jr) ? J(g, new kr(a, h.output, void 0)).output : h.output;
        h = J(g, new lr(a, b, c, h));
        J(g, new mr(a, f, d, e, h.output));
        if (f.top === f) var l = J(g, new nr(a, f, h.output)).output;
        J(g, new or(a, b, c, h.output, k.output, l));
        return g
    };
    ir = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    ur = function() {
        var a = {};
        return a[576944485] = new qr, a[578856259] = new rr(function() {
            return _.Qf(sr)
        }), a[607368714] = new tr, a
    };
    vr = function(a, b) {
        a.V.log(576944485, pq, _.z(Object, "assign").call(Object, {}, a, b))
    };
    wr = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    yr = function(a) {
        return (_.H = [4, 5, 7, 1], _.z(_.H, "includes")).call(_.H, xr(a))
    };
    Ar = function(a, b, c) {
        return new zr(c, a, hr, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    Cr = function(a) {
        var b = {
            paw_id: Br(),
            gpa: 0
        };
        a.postMessage(JSON.stringify(b))
    };
    Fr = function(a, b, c) {
        if (_.z(Object, "keys").call(Object, a).some(function(d) {
                return (_.H = _.z(Object, "values").call(Object, Dr), _.z(_.H, "includes")).call(_.H, Number(d))
            })) return !0;
        Er("taxonomies", a, b, c);
        return !1
    };
    Ir = function(a, b, c, d, e) {
        if (null == a) Er("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.H = _.z(Object, "values").call(Object, on), _.z(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (Er("taxonomy", a, d, e), a = !1);
            a && (null == b ? Er("taxonomyData", b, d, e) : Gr(b, d, e) && Hr(f, b, c, d))
        }
    };
    Rr = function(a, b, c, d, e) {
        if (!Jr(a)) Er("taxonomy", a, d, e);
        else if (null == b) Er("taxonomyData", b, d, e);
        else if (Gr(b, d, e) && Kr(_.z(b, "values"), d, b) && (b = Lr(a, _.z(b, "values"), d, b), b.size)) {
            b = [].concat(_.zi(b));
            e = new Mr;
            var f = Nr.get(a);
            e = _.yi(e, 3, f);
            Or(c, Pr(e, b));
            d.info(Qr(Mn(b), Mn(a)))
        }
    };
    Gr = function(a, b, c) {
        if (Xg(a) && a.hasOwnProperty("values")) return !0;
        Er("taxonomyData", a, b, c);
        return !1
    };
    Hr = function(a, b, c, d) {
        if (Kr(_.z(b, "values"), d, b)) {
            var e = Lr(a, _.z(b, "values"), d, b);
            e.size && (b = (_.H = _.gk(c, Mr, 1), _.z(_.H, "find")).call(_.H, function(f) {
                return _.kg(f, 1, 0) === a
            }), e = [].concat(_.zi(e)), b ? Pr(b, e) : Or(c, Pr(Sr(new Mr, a), e)), d.info(Qr(Mn(e), Mn(a))))
        }
    };
    Kr = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        Er("taxonomyData.values", a, b, c);
        return !1
    };
    Lr = function(a, b, c, d) {
        if (!bh()(b)) return Er("taxonomyData.values", b, c, d), new _.u.Set;
        d = new _.u.Set;
        var e = !1;
        b = _.x(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (10 <= d.size) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && P(c, Tr(Mn(a), Mn(10)));
        return d
    };
    Er = function(a, b, c, d) {
        P(c, Ln("googletag.setConfig.pps", Mn(d), a, Mn(b)))
    };
    Jr = function(a) {
        return Nr.has(a)
    };
    Vr = function(a) {
        return Ur.has(a)
    };
    Zr = function(a, b) {
        if (3 === _.Wr(b)) {
            var c = {
                    ge: new Xr
                },
                d = new tk;
            J(d, new Yr(a, b, c.ge));
            Ck(d);
            return {
                Ka: d,
                am: c
            }
        }
    };
    as = function(a, b, c, d, e, f, g) {
        if (b) {
            var h = {
                    Yg: new fq
                },
                k = new tk;
            J(k, new $r(a, b, c, d, h, e, f, g));
            Ck(k);
            return {
                Ka: k,
                xf: h
            }
        }
    };
    cs = function(a) {
        bs = a
    };
    es = function(a, b, c, d) {
        Jk(b, d, function(e, f) {
            Ml(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void P(c, ds())
        })
    };
    hs = function(a, b, c) {
        if (!_.E(fs) && !fo()) {
            var d = {
                    Mg: new fq,
                    Ab: new fq
                },
                e = new tk;
            J(e, new gs(a, b, c, d));
            Ck(e);
            return {
                Cd: d,
                Ka: e
            }
        }
    };
    js = function(a, b, c, d, e) {
        var f = new tk;
        a = new is(a, b, c, d, e);
        J(f, a);
        Ck(f);
        return f
    };
    qa = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.oa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.oa(b.length, a.length)
        }
        return b
    };
    ks = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    ls = function(a) {
        if (ks(a)) return {
            size: [],
            fh: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = ks(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                fh: b
            }
        }
        return {
            size: a,
            fh: !1
        }
    };
    ns = function(a, b) {
        var c = b.T;
        return eq(a, function(d) {
            return ms(c[d.getDomId()]).join("&")
        })
    };
    ms = function(a) {
        a = os(a);
        var b = [];
        _.Kn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    os = function(a) {
        for (var b = {}, c = _.x(jm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.I(d, 1)] = qm(d);
        a = vi(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    ps = function(a) {
        var b = !1,
            c = _.gk(a, mm, 2).map(function(d) {
                var e = _.I(d, 1);
                b = "excl_cat" === e;
                d = qm(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = vi(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    rs = function(a, b, c) {
        var d = window,
            e = !rh(d.isSecureContext, d.document);
        if (sh(d.isSecureContext, d, d.document) || !e) return e = new tk, a = new qs(a, d, b, c), J(e, a), Ck(e), a.j
    };
    ts = function(a, b, c, d, e) {
        if (c) {
            var f = {
                    se: new fq,
                    te: new fq,
                    Fd: new fq
                },
                g = new tk;
            J(g, new ss(a, b, c, d, f, e));
            Ck(g);
            return {
                Ka: g,
                Sm: f
            }
        }
    };
    us = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    ws = function(a, b) {
        return a.filter(function(c) {
            return vs(c, 2) > b
        })
    };
    ys = function(a, b) {
        a = new _.u.Map(a.map(function(e) {
            return [_.I(e, 1), e]
        }));
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.I(c, 1));
            d ? xs(d, Math.max(vs(c, 2), vs(d, 2))) : a.set(_.I(c, 1), c)
        }
        return _.z(Array, "from").call(Array, _.z(a, "values").call(a))
    };
    Cs = function(a, b, c, d) {
        if (zs(b, c, d)) return new _.u.Map;
        c = new _.u.Map(_.z(Object, "entries").call(Object, b).filter(function(k) {
            var l = _.x(k);
            k = l.next().value;
            l = l.next().value;
            return _.z(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.x(k);
            k = l.next().value;
            l = l.next().value;
            return [k, As(l)]
        }));
        d = _.x(c);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = _.x(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = _.gk(f, Bs, 1),
                h = ws(g, a);
            0 === h.length ? (c.delete(e), b.removeItem(e)) : h.length < g.length && (_.vm(f, 1, h), b.setItem(e, hl(f)))
        }
        return c
    };
    Ds = function(a, b) {
        return String(_.uh(b + "-" + _.I(a, 2) + _.I(a, 4) + _.Q(a, 3)))
    };
    zs = function(a, b, c) {
        if (!_.Q(b, 3)) return !1;
        b = Ds(b, c);
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.x(_.z(Object, "keys").call(Object, a).filter(function(e) {
            return _.z(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (var d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    Es = function(a) {
        return null !== a && _.z(Number, "isFinite").call(Number, a) && 0 <= a
    };
    Fs = function(a) {
        return (_.H = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.z(_.H, "includes")).call(_.H, a)
    };
    Hs = function(a, b, c, d, e) {
        if (b) {
            var f = b.ec,
                g = b.mm;
            if (b.qh && 4 === f) {
                b = new fq;
                f = new fq;
                if (!g) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    zj: {
                        gj: b,
                        wi: f
                    }
                };
                g = new tk;
                a = new Gs(a, c, d, e, b, f);
                J(g, a);
                Ck(g);
                return {
                    zj: {
                        gj: b,
                        wi: f
                    },
                    Ym: g
                }
            }
        }
    };
    Js = function(a) {
        var b = a.bg,
            c = a.Bb,
            d = void 0 === a.Kh ? [] : a.Kh,
            e = a.interestGroupBuyers,
            f = a.jl,
            g = a.Vk;
        a = a.gm;
        var h = _.Qf(Is),
            k = {};
        void 0 !== f && (k["https://googleads.g.doubleclick.net"] = f, k["https://td.doubleclick.net"] = f);
        if (g) {
            g = _.x(g);
            for (var l = g.next(); !l.done; l = g.next()) {
                var m = _.x(l.value);
                l = m.next().value;
                m = m.next().value;
                k[l] = m
            }
        }
        e = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != e ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: f,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.g.promise,
            sellerTimeout: h,
            sellerCurrency: "USD",
            perBuyerCurrencies: b.perBuyerCurrencies.promise,
            perBuyerExperimentGroupIds: k,
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise
        };
        a && (e.deprecatedRenderURLReplacements = b.deprecatedRenderURLReplacements.promise);
        e.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        c = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: f,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: h,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [e].concat(_.zi(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    Ks = function(a, b) {
        var c = b.bg;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.z(d, "find").call(d, function(m) {
            return Fs(m.seller)
        });
        var e;
        d = null != (e = null == a ? void 0 : a.perBuyerCumulativeTimeouts) ? e : {};
        b = _.x(b.interestGroupBuyers);
        for (e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var f = void 0,
                g = void 0;
            (null == (f = a) ? 0 : null == (g = f.interestGroupBuyers) ? 0 : _.z(g, "includes").call(g, e)) || (d[e] = 0)
        }
        if (a) {
            c.auctionSignals.resolve(a.auctionSignals);
            c.g.resolve(a.sellerSignals);
            c.perBuyerSignals.resolve(a.perBuyerSignals);
            var h;
            c.perBuyerTimeouts.resolve(null != (h = a.perBuyerTimeouts) ? h : {});
            c.perBuyerCumulativeTimeouts.resolve(d);
            var k;
            c.perBuyerCurrencies.resolve(null != (k = a.perBuyerCurrencies) ? k : {});
            var l;
            c.deprecatedRenderURLReplacements.resolve(null != (l = a.deprecatedRenderURLReplacements) ? l : {})
        } else c.auctionSignals.resolve(void 0), c.g.resolve(void 0), c.perBuyerSignals.resolve({}), c.perBuyerTimeouts.resolve({}), c.perBuyerCumulativeTimeouts.resolve(d), c.perBuyerCurrencies.resolve({}), c.deprecatedRenderURLReplacements.resolve({})
    };
    Ms = function(a, b) {
        if (_.E(Ls) && !Es(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new Bs;
            d = _.lj(e, 1, d);
            return xs(d, c)
        })
    };
    Os = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.Q(c, 18),
            f = _.Q(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.I(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.Q(c, 4) && (d += "&is_plog=1");
        (e = _.I(c, 11)) && (d += "&ecrs=" + e);
        if (null == c ? 0 : _.I(c, 19)) d += "&cid=" + encodeURIComponent(_.I(c, 19));
        (null == c ? 0 : _.Q(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Ns(d)
    };
    Ps = function(a, b, c, d, e) {
        a.Pb.G(e);
        a.Ga.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    };
    Xs = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, r, v, w;
        return _.ub(function(y) {
            if (1 == y.g) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && Qs.deprecatedURNToURL && Qs.deprecatedReplaceInURN ? y.yield(Qs.deprecatedURNToURL(a), 2) : y.return();
            c = y.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Rs)) ? f : []).forEach(function(B) {
                d[B] = e
            });
            g = b.gl || "";
            (null != (h = c.match(Ss)) ? h : []).forEach(function(B) {
                d[B] = g
            });
            k = b.ak || "";
            (null != (l = c.match(Ts)) ? l : []).forEach(function(B) {
                d[B] = k
            });
            m = b.Wj || "";
            (null != (n = c.match(Us)) ? n : []).forEach(function(B) {
                d[B] = m
            });
            p = b.Uj || "";
            (null != (r = c.match(Vs)) ? r : []).forEach(function(B) {
                d[B] = p
            });
            v = b.om || "";
            (null != (w = c.match(Ws)) ? w : []).forEach(function(B) {
                d[B] = v
            });
            return y.yield(Qs.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Ys = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    };
    bt = function(a) {
        var b = a.Nk,
            c = a.ck,
            d = a.km,
            e = a.kl;
        a = a.pb;
        if ("string" === typeof c || Ys(c)) c = 4;
        else switch (c) {
            case null:
                c = 5;
                break;
            case 2:
                c = 1;
                break;
            case 3:
                c = 3;
                break;
            case 1:
                c = 2;
                break;
            case 4:
            case 0:
                c = 0;
                break;
            default:
                c = 0
        }
        var f = new Zs;
        c = _.K(f, 3, c);
        d = _.lj(c, 2, d);
        b = _.Al(d, 1, b);
        void 0 !== e && _.lj(b, 4, e);
        e = new $s;
        void 0 !== a && _.Al(e, 1, a);
        _.Bl(e, 3, at, b);
        return e
    };
    ct = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.I(f, 6);
        Fp("run_ad_auction_stats", function(r) {
            ep(r, a);
            fp(r, "duration_ms", c);
            fp(r, "applied_timeout_ms", d);
            fp(r, "timed_out", l ? 1 : 0);
            fp(r, "error", k ? 1 : 0);
            fp(r, "auction_skipped", m ? 1 : 0);
            fp(r, "auction_winner", h ? 1 : 0);
            fp(r, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            fp(r, "winner_qid", null != n ? n : "");
            fp(r, "xfpQid", null != p ? p : "");
            fp(r, "publisher_tag", "gpt");
            e && fp(r, "parallel", "1");
            0 < g && fp(r, "nc", g)
        }, 1)
    };
    dt = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.I(e, 6);
        Fp("run_ad_auction_complete", function(h) {
            ep(h, a);
            fp(h, "duration_ms", Math.round(d));
            fp(h, "applied_timeout_ms", c);
            fp(h, "auction_has_winner", b);
            f && fp(h, "winner_qid", f);
            g && fp(h, "xfpQid", g)
        }, 1)
    };
    et = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.I(b, 6);
        Fp("pre_run_ad_auction_ping", function(e) {
            ep(e, a);
            fp(e, "winner_qid", null != c ? c : "");
            fp(e, "xfpQid", null != d ? d : "");
            fp(e, "publisher_tag", "gpt")
        }, 1)
    };
    lt = function(a, b, c, d) {
        var e = Zm(a, document);
        e && Xi(e, window, d, !0);
        ft(_.Of(Kl), "5", gt(c.T[a.getDomId()], 20));
        ht(a, jt, 801, {
            Th: null,
            isBackfill: !1
        });
        if (_.Iq(b, a) && !gn(a, document)) {
            b = c.ca;
            c = c.T[a.getDomId()];
            var f;
            (null != (f = mq(c, 10)) ? f : _.Q(b, 11)) && Hq(a, document, c, b)
        }
        ht(a, kt, 825, {
            isEmpty: !0
        })
    };
    nt = function(a) {
        if (!_.E(mt)) return null;
        var b = new _.u.Set;
        a = _.x(_.z(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && _.gk(c, Bs, 1).forEach(function(d) {
            b.add(_.I(d, 1))
        });
        return 0 < b.size ? _.z(Array, "from").call(Array, b) : null
    };
    pt = function(a, b, c, d, e, f, g, h, k) {
        if (b) {
            var l = b.ec;
            if (b.qh && 0 !== l) return b = new tk, a = new ot(a, l, c, d, e, f, g, h, k), J(b, a), Ck(b), {
                Xm: a.j,
                Wm: b
            }
        }
    };
    qt = function() {
        for (var a = _.x(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), b = eb(b.textContent), qb(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    rt = function(a, b) {
        b = _.x(_.z(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.x(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    ut = function(a, b, c) {
        var d = [];
        c = [].concat(_.zi(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return P(a, bm("googletag.destroySlots", [b])), !1;
            na(b);
            d = c.filter(function(e) {
                return _.z(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        st(d);
        tt(d);
        return !0
    };
    It = function(a, b, c, d, e, f, g, h, k, l) {
        var m = Eo(),
            n, p, r = L(a, 74, function(w, y, B) {
                return e.defineSlot(a, b, w, y, B)
            }),
            v = {};
        r = (v._loaded_ = !0, v.cmd = [], v._vars_ = m._vars_, v.evalScripts = function() {
            try {
                qt()
            } catch (B) {
                Ml(a, 297, B);
                var w, y;
                null == (w = window.console) || null == (y = w.error) || y.call(w, B)
            }
        }, v.display = L(a, 95, function(w) {
            vt(c, w, e)
        }), v.defineOutOfPageSlot = L(a, 73, function(w, y) {
            return (w = Fq(a, b, e, {
                Zh: y,
                adUnitPath: w
            })) ? w.g : null
        }), v.getVersion = L(a, 946, function() {
            return a.Ze
        }), v.pubads = L(a, 947, function() {
            return oo(a, b, c, e, h)
        }), v.companionAds = L(a, 816, function() {
            null != n || (n = new wt(a, b, c, f));
            return em(a, b, n)
        }), v.content = L(a, 817, function() {
            null != p || (p = new xt(a, b, g));
            return gm(a, b, p)
        }), v.setAdIframeTitle = L(a, 729, cs), v.getEventLog = L(a, 945, function() {
            return new yt(a, b)
        }), v.sizeMapping = L(a, 90, function() {
            return new zt(a, b)
        }), v.enableServices = L(a, 91, function() {
            for (var w = _.x(At), y = w.next(); !y.done; y = w.next()) y = y.value, y.enabled && b.info(Bt()), Ct(y)
        }), v.destroySlots = L(a, 75, function(w) {
            return ut(b, w, e)
        }), v.enums = pn(), v.defineSlot = r, v.defineUnit = r, v.getWindowsThatCanCommunicateWithHostpageLibrary = L(a, 955, function(w) {
            return Dt(k, w).map(function(y) {
                var B;
                return null == (B = gn(y, document)) ? void 0 : B.contentWindow
            }).filter(function(y) {
                return !!y
            })
        }), v.disablePublisherConsole = L(a, 93, lp), v.onPubConsoleJsLoad = L(a, 731, op), v.openConsole = L(a, 732, function(w) {
            gp = !0;
            var y;
            (null == (y = Eo()) ? 0 : y.console) ? Eo().console.openConsole(w): (w && (np = w), mp = !0, ap(a))
        }), v.setConfig = L(a, 1034, function(w) {
            if (Xg(w)) {
                if (_.z(Object, "hasOwn").call(Object, w, "pps")) {
                    var y = w.pps;
                    if (null === y) {
                        var B = _.nj(d, Et, 33);
                        _.nk(B, 2)
                    } else {
                        B = _.nj(_.nj(d, Et, 33), Ft, 2);
                        _.nk(B, 1);
                        if (Xg(y) && y.hasOwnProperty("taxonomies")) var C = !0;
                        else P(b, bm("googletag.setConfig.pps", [y])), C = !1;
                        if (C)
                            if (C = y.taxonomies, Xg(C) && null !== C) {
                                var G;
                                _.z(Object, "keys").call(Object, C).some(Jr) ? G = Rr : Fr(C, b, y) && (G = Ir);
                                if (G) {
                                    y = _.x(_.z(Object, "entries").call(Object, C));
                                    for (var F = y.next(); !F.done; F = y.next()) {
                                        var M = _.x(F.value);
                                        F = M.next().value;
                                        M = M.next().value;
                                        G(F, M, B, b, C)
                                    }
                                }
                            } else Er("taxonomies", C, b, y)
                    }
                }
                _.z(Object, "hasOwn").call(Object, w, "adExpansion") && (_.nk(d, 34), B = w.adExpansion, null !== B && Xg(B) && _.z(Object, "hasOwn").call(Object, B, "enabled") && (B = B.enabled, Go(B) && (B = Ho(B), _.ki(d, 34, B))));
                if (_.z(Object, "hasOwn").call(Object, w, "privacyTreatments")) {
                    w = w.privacyTreatments;
                    _.nk(d, 36);
                    a: {
                        if (null !== w && Xg(w) && _.z(Object, "hasOwn").call(Object, w, "treatments")) {
                            w = w.treatments;
                            if (Gt(w) && w.every(Vr)) {
                                w = {
                                    treatments: w
                                };
                                break a
                            }
                            P(b, bm("googletag.setConfig", [w]))
                        }
                        w = void 0
                    }
                    B = w;
                    if (void 0 !== B) {
                        w = new _.u.Set;
                        B = _.x(B.treatments);
                        for (G = B.next(); !G.done; G = B.next()) {
                            G = G.value;
                            a: {
                                switch (G) {
                                    case "disablePersonalization":
                                        C = 1;
                                        break a
                                }
                                C = void 0
                            }
                            void 0 === C ? P(b, bm("googletag.setConfig", [G])) : w.add(C)
                        }
                        if (w.size) {
                            B = new Ht;
                            G = B.F;
                            C = xc(G);
                            zc(fe(B.F));
                            G = qe(G, C, 1, !1);
                            C = xc(G);
                            C = !!(4 & C) && !!(4096 & C);
                            if (Array.isArray(w))
                                for (y = 0; y < w.length; y++) G.push(_.Wc(w[y], C));
                            else
                                for (w = _.x(w), y = w.next(); !y.done; y = w.next()) G.push(_.Wc(y.value, C));
                            _.ki(d, 36, B)
                        }
                    }
                }
            } else P(b, bm("googletag.setConfig", [w]))
        }), v.apiReady = !0, v);
        es(a, m, b, l);
        rt(m, r)
    };
    Lt = function(a, b) {
        var c = new tk;
        b = new Jt(a, b);
        J(c, b);
        a = new Kt(a, b.j);
        J(c, a);
        Ck(c);
        return {
            bd: a.bd,
            kd: a.kd,
            fd: a.fd,
            Ob: a.Ob,
            Bd: a.Bd,
            Dd: a.Dd,
            qc: a.qc,
            Nb: a.Nb,
            Zl: c
        }
    };
    lu = function(a, b, c, d, e, f, g, h, k) {
        var l = window,
            m = hn(),
            n = new tk,
            p = new Mt(a, l);
        p = J(n, p).output;
        var r = new tk;
        var v = new Nt(a, l);
        J(r, v);
        Ck(r);
        r = {
            Vl: v.C,
            rc: v.rc
        };
        _.E(Ot) && J(n, new Pt(a, l));
        if (La()) {
            v = {
                aj: new fq
            };
            var w = new tk;
            J(w, new Wt(a, window, v.aj));
            Ck(w)
        } else v = void 0;
        var y = _.E(Xt);
        w = l.navigator;
        l = qh(l.isSecureContext, l.navigator, l.document);
        l = !y && l;
        y = _.Qf(Yt);
        var B = !!w.getInterestGroupAdAuctionData;
        w = _.E(Zt) && !!w.createAuctionNonce;
        l = {
            qh: l,
            ec: y,
            mm: B,
            Yj: w
        };
        if (e)
            if (_.E($t)) {
                var C = Lt(a, e);
                B = C.Bd;
                y = C.fd;
                w = C.kd;
                var G = C.bd;
                var F = C.Ob,
                    M = C.Dd,
                    R = C.qc;
                C = C.Nb;
                var N, aa = new au(a, document, Eo(), b, m, c, null != (N = window.location.hash) ? N : "");
                J(n, aa);
                b = new bu(a, Eo(), null, b, m, c, B);
                J(n, b);
                m = new cu(a, y);
                J(n, m);
                h = new du(a, window, w, h);
                J(n, h);
                if (f = hq(a, f, G)) var ha = f.Eh;
                e = Zq(a, e, h.j);
                N = e.Mc;
                G = e.qg;
                _.S(n, e.Ka);
                e = new eu(a, G);
                J(n, e);
                f = new fu(a, G);
                J(n, f);
                c = Vo(a, c, d, window, N, G, 2).nb;
                if (_.E(gu)) {
                    N = new hu(a, window.navigator, c);
                    var la = N.j;
                    J(n, N)
                }
                N = void 0;
                _.E(iu) && (d = new ju(a, d, window, c), N = d.output, J(n, d));
                if (d = hs(a, F, c)) var ea = d.Cd;
                d = rs(a, p, c);
                js(a, g, k, c, M);
                G = {
                    Qd: ha,
                    Cd: ea,
                    Ti: h.j,
                    Lh: m.output,
                    Eb: b.Eb,
                    Ob: F,
                    gd: e.gd,
                    gi: f.j,
                    qc: R,
                    ue: d,
                    ng: N,
                    Qh: la,
                    Nb: C
                }
            } else {
                a = new ku(a, b, m, c, d, e, f, g);
                g = new tk;
                _.S(a, g);
                m = Lt(a.context, a.g);
                c = m.Bd;
                e = m.fd;
                b = m.kd;
                f = m.bd;
                ha = m.Ob;
                la = m.Dd;
                ea = m.qc;
                d = m.Nb;
                _.S(a, m.Zl);
                m = new au(a.context, document, Eo(), a.j, a.l, a.R, null != (C = window.location.hash) ? C : "");
                J(g, m);
                c = new bu(a.context, Eo(), null, a.j, a.l, a.R, c);
                J(g, c);
                e = new cu(a.context, e);
                J(g, e);
                h = new du(a.context, window, b, h);
                J(g, h);
                if (f = hq(a.context, a.ib, f)) F = f.Eh, _.S(a, f.Ka);
                f = Zq(a.context, a.g, h.j);
                b = f.Mc;
                m = f.qg;
                _.S(g, f.Ka);
                f = new eu(a.context, m);
                J(g, f);
                C = new fu(a.context, m);
                J(g, C);
                m = Vo(a.context, a.R, a.L, window, b, m, 2);
                b = m.nb;
                _.S(a, m.Ka);
                _.E(gu) && (m = new hu(a.context, window.navigator, b), M = m.j, J(g, m));
                m = void 0;
                _.E(iu) && (N = new ju(a.context, a.L, window, b), m = N.output, J(g, N));
                if (N = hs(a.context, ha, b)) R = N.Cd, _.S(a, N.Ka);
                N = rs(a.context, p, b);
                _.S(a, js(a.context, a.D, k, b, la));
                Ck(g);
                G = {
                    Qd: F,
                    Cd: R,
                    Ti: h.j,
                    Lh: e.output,
                    Eb: c.Eb,
                    Ob: ha,
                    gd: f.gd,
                    gi: C.j,
                    qc: ea,
                    ue: N,
                    ng: m,
                    Qh: M,
                    Nb: d
                }
            }
        Ck(n);
        return {
            Ul: r,
            fm: v,
            Zf: p,
            Vm: l,
            He: {
                rd: new _.u.Set
            },
            Lb: G
        }
    };
    mu = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    bv = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G) {
        var F = new tk,
            M = Hm(!0, window),
            R = k.ca,
            N = k.T[e.getDomId()],
            aa = C.Zf,
            ha = C.He.rd,
            la, ea = null == (la = C.Lb) ? void 0 : la.ue,
            Pa = new nu(a, window);
        J(F, Pa);
        var wa = m.height,
            Ca = m.width,
            Na = m.vb,
            Xa = m.Oa,
            fb = m.Md,
            Ua = m.isBackfill,
            dc = m.Jb,
            Ec = m.fl,
            $b = m.gb,
            kc = m.Qf,
            ec = m.th,
            fc = m.zg,
            Pc = m.Ub,
            Qc = m.bf,
            qf = m.Mb,
            we = m.Ra,
            Md = m.ha,
            xe = m.Zg,
            sg = m.tk,
            tg = m.Uf,
            Rc = new fq;
        Rc.G(p);
        var Nd = new ou(a, window.top, Rc);
        J(F, Nd);
        var Od = new pu(a, xr(N), M.height, $b, wa);
        J(F, Od);
        var bb = new qu(a, e, Zm(e, n), e.getDomId(), fn(e), n.documentElement, xr(N), h, f);
        ru(F, bb);
        var Pb = bb.output,
            rf = new su(a, we, fb, Ua, dc);
        J(F, rf);
        var ye = new tu(a, _.Bm(R, uu, 5), N, d);
        J(F, ye);
        var ug = new vu(a, window.location.hash, M, e.getAdUnitPath(), N, f, Od.output, kc, Ca, wa, rf.output, Pb);
        ru(F, ug);
        var ld = ug.K,
            sf = new wu(a, R, N, fb, dc, ld.cf);
        J(F, sf);
        var qj = Nd.output,
            rj = ld.Ga,
            vg = ld.Ja;
        if (qh(window.isSecureContext, window.navigator, window.document) && !_.E(Xt) && g) {
            var Ch = {
                    Qc: new Xr,
                    Ga: new fq,
                    Ja: new fq,
                    nd: new fq
                },
                wg = new tk;
            J(wg, new xu(a, e, qj, N, h, p, f, rj, vg, Pb, r, k, B, Xa, Md, Ch, v, G));
            Ck(wg);
            var Dh = {
                Ka: wg,
                Zm: Ch
            }
        } else Dh = void 0;
        var xg = Dh;
        if (xg) {
            _.S(F, xg.Ka);
            var ze = xg.Zm
        }
        var Eh, Fh, Gh = null != (Fh = null == (Eh = ze) ? void 0 : Eh.Ga) ? Fh : ld.Ga,
            Hh, Ih, Pd = null != (Ih = null == (Hh = ze) ? void 0 : Hh.Ja) ? Ih : ld.Ja,
            Jh, md = null == (Jh = ze) ? void 0 : Jh.Qc,
            Kh, tf = null == (Kh = ze) ? void 0 : Kh.nd,
            Fc = new yu(a, e, R, N, xr(N), n, h, Pb, sf.output, Pd, Na, md);
        J(F, Fc);
        var uf = new zu(a, Fc.output);
        J(F, uf);
        var vf = new Au(a, e, M, h, uf.output, ye.j, md);
        J(F, vf);
        var Sc = new Bu(a, vf.output, Fc.output, ye.j, md);
        J(F, Sc);
        var yg = new Cu(a, window, M, e, N, Pb, Fc.output, Na, Pd, ld.Be, Xa);
        ru(F, yg);
        var zg = new Du(a, R, N, ec, Gh, sf.output);
        J(F, zg);
        var Ag = new Eu(a, window, qf, Pa.output, md);
        J(F, Ag);
        var wf = new Fu(a, xr(N), n);
        J(F, wf);
        var Tc = new Gu(a, y, xr(N), $b, Ec, md);
        J(F, Tc);
        var xf = new Hu(a, fc, tf, Rc, md);
        J(F, xf);
        var Lh = window;
        if (_.E(cl) && ea) {
            var Ae = new tk;
            J(Ae, new Iu(a, Lh, tg, ea));
            Ck(Ae);
            var nd = Ae
        } else nd = void 0;
        var od = nd;
        od && _.S(F, od);
        var Qb = new Ju(a, e, h, k, w, l, Na, Xa, Ua, Pc, Md, window, Gh, sf.output, Sc.output, Pb, Fc.output, Pd, zg.output, yg.Qc, Ag.output, wf.output, Tc.output, aa, md);
        J(F, Qb);
        var yf = new Ku(a, window, e, Qb.o, Rc);
        J(F, yf);
        var Bg = xr(N);
        switch (Bg) {
            case 2:
            case 3:
                _.E(Lu) ? J(F, new Mu(a, h, xr(N), e, window, $b, Qb.j, Pb, Tc.output, Pd)) : J(F, new Nu(a, h, xr(N), e, window, $b, Qb.j, Pb, Tc.output, Pd));
                break;
            case 5:
                J(F, new Ou(a, e, k.Jd, Ec, n, Qb.j, Pb, Nd.output, Tc.output, B));
                break;
            case 4:
                var zf = new Pu(a, e, w, window, Qb.j, Pb);
                _.S(F, zf);
                Ck(zf);
                break;
            case 7:
                ru(F, pr(a, e, w, Qb.j, Pb));
                break;
            case 8:
            case 9:
                var Mh = Qb.j,
                    Nh = Fc.output,
                    Be = window,
                    Uc = new tk,
                    Oh = 8 === Bg ? 3 : 4,
                    Ce = new Qu(a, y);
                J(Uc, Ce);
                J(Uc, new Ru(a, Be, Oh, Ce.output, Mh, Nh, Pd));
                Ck(Uc);
                Uc && _.S(F, Uc)
        }
        var Af = new Su(a, e, Qb.j, n, w);
        J(F, Af);
        var Rb = new Tu(a, e, Uu(h, e), window.top);
        J(F, Rb);
        var Ph = Qb.j,
            Gc = new tk,
            Cg = J(Gc, new gr(a, e, Vu)),
            Bf = J(Gc, new Wu(a, n, Ph, Cg.output));
        J(Gc, new Xu(a, Bf.output, w, e));
        Ck(Gc);
        _.S(F, Gc);
        var Dg = new Yu(a, Uu(h, e), window.top, Qb.j, Pa.output, Rb.output, Rb.j);
        J(F, Dg);
        J(F, new Zu(a, e, Na, fb, Qb.j, Fc.output, Qb.C));
        var Eg = new $u(a, window, Qc, Qb.j, Fc.output, Pb);
        J(F, Eg);
        var Fg = Eo(),
            pd = new tk,
            De = new av(a, n, Fg, R, c, b, d, ha, sg);
        J(pd, De);
        Ck(pd);
        _.S(F, pd);
        var Ee = new fq;
        Ee.G(xe);
        J(F, new bu(a, Eo(), R, b, c, d, Ee));
        return F
    };
    ev = function(a, b, c) {
        var d = null;
        try {
            var e = cv(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.ca,
                    h = c.T[f.getDomId()];
                g = nq(g, h);
                var k;
                f = null == (k = dn(f, h, b.document, g)) ? void 0 : k.y;
                k = Hm(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++dv
            })
        } catch (f) {}
        return d
    };
    mv = function(a) {
        return Ol(a.na.context, 1132, function() {
            if (a.oa.X.length) {
                var b = new _.u.Set(Sf(fv));
                var c = a.na.Z;
                c = _.E(gv) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.x(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.u.Map;
                c = _.x(hv);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (iv(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.x(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.x(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.Ia ? !1 : g.Ia;
                        if (f = "object" !== typeof f ? null == f || !h && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? jv(f, g) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.Qf(kv) || 2 === _.Qf(kv)) b = _.Qf(lv), b = 0 >= b ? "" : (_.H = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b), 2 === _.Qf(kv) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    iv = function(a) {
        var b = a.na.Z,
            c, d;
        a = null != (d = null == (c = nv(a.oa.O.ca)) ? void 0 : _.Q(c, 9)) ? d : !1;
        c = _.E(gv) && _.Q(b, 8);
        return a || c || !eh(b)
    };
    jv = function(a, b) {
        var c = void 0 === b.Ua ? "," : b.Ua,
            d = void 0 === b.Rd ? "" : b.Rd,
            e = void 0 === b.Ia ? !1 : b.Ia,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    pv = function(a, b) {
        var c = a.responseText;
        b = b.R;
        403 === a.status && b.error(ov(c));
        return {}
    };
    tv = function(a, b) {
        try {
            _.Qf(qv);
            var c, d = null != (c = b.No) ? c : rv,
                e = _.x(a.X),
                f = e.next();
            for (a = {}; !f.done; a = {
                    qe: void 0
                }, f = e.next()) {
                a.qe = f.value;
                var g = d.get(a.qe);
                d.set(a.qe, (new Date).getTime());
                g ? b.wa.ac.mc.li.refresh.lm.Rc({
                    Uc: (new Date).getTime() - g,
                    Om: _.Qf(sv)
                }) : _.sp(a.qe, function(h) {
                    return function() {
                        return void d.delete(h.qe)
                    }
                }(a))
            }
        } catch (h) {}
        return {}
    };
    wv = function() {
        var a = _.Qf(uv);
        switch (a) {
            case 0:
                return La() && vv(window.fetch) && vv(window.TextDecoderStream);
            case 1:
                return La() && vv(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return La() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !Ka() && vv(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !Ka() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return vv(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                ob(a)
        }
    };
    yv = function(a, b, c) {
        b = xv(b, c);
        switch (b) {
            case 0:
                a();
                break;
            case 1:
                c.setTimeout(a, 0);
                break;
            case 2:
                c.scheduler.yield().then(a);
                break;
            default:
                ob(b)
        }
    };
    xv = function(a, b) {
        if (0 === a) return 0;
        a = _.Qf(zv);
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 6:
                var c;
                return (null == (c = b.scheduler) ? 0 : c.yield) ? 2 : 1;
            case 5:
                var d;
                return (null == (d = b.scheduler) ? 0 : d.yield) ? 2 : 0;
            default:
                ob(a)
        }
    };
    Nv = function(a, b) {
        a = a.Sg;
        var c = b.Ra,
            d, e;
        b = Av(a, 6);
        var f = Av(a, 7),
            g = !!On(a, 8),
            h = Bv(a, 10),
            k = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.Bm(a, Cv, 43);
        var l = !!On(a, 9),
            m = !!On(a, 12),
            n = _.Bm(a, Dv, nl(a, Ev, 48)),
            p = _.Bm(a, Fv, nl(a, Ev, 39)),
            r = _.Yc(_.hi(a, 36)),
            v = !!On(a, 13),
            w = Bv(a, 49),
            y = _.Bm(a, Gv, 51),
            B = Bv(a, 61);
        if (0 !== c.kind) {
            var C;
            c = {
                kind: 0,
                hb: null != (C = ik(a, 4)) ? C : ""
            }
        }
        C = c;
        c = _.Bm(a, Hv, 58);
        var G = null == (d = _.Bm(a, Iv, 56)) ? void 0 : Bv(d, 1);
        d = _.gk(a, Jv, 62);
        var F = _.gk(a, Kv, 67),
            M = ve(a, 63, td, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: g,
                vb: h,
                Oa: k,
                Md: e,
                isBackfill: l,
                Jb: m,
                fl: n,
                gb: p,
                Qf: r,
                th: v,
                Ub: w,
                bf: y,
                Mb: B,
                Ra: C,
                ha: c,
                gn: G,
                Zg: d,
                tk: F,
                zg: M,
                Uf: !!On(a, 64),
                ig: _.Bm(a, Lv, 68),
                Ak: _.E(Mv) ? Bv(a, 1) : void 0
            }
        }
    };
    Qv = function(a, b) {
        var c = b.R;
        b = b.context;
        var d;
        (null == (d = _.Bm(a.Sg, Ov, 69)) ? 0 : _.Q(d, 1)) && P(c, Pv(b.Pa));
        return {}
    };
    Rv = function(a) {
        var b = a;
        return function() {
            var c = _.Wa.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.zi(c))
            }
        }
    };
    Sv = function(a) {
        var b = null,
            c = 0,
            d = 0;
        return function() {
            var e, f, g, h;
            return _.ub(function(k) {
                if (1 == k.g) return c && clearTimeout(c), c = 0, e = new _.Qh, f = Rv(e.resolve), g = ++d, k.yield(0, 2);
                if (d !== g) return f(!1), k.return(e.promise);
                b ? b(!1) : f(!0);
                h = Rv(function() {
                    b = null;
                    c = 0;
                    f(!0)
                });
                c = setTimeout(h, _.Qf(sv));
                _.sp(a, function() {
                    return void f(!1)
                });
                b = f;
                return k.return(e.promise)
            })
        }
    };
    Tv = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k, l, m;
            return _.ub(function(n) {
                if (1 == n.g) return f = new _.Qh, g = Rv(f.resolve), h = ++e, n.yield(0, 2);
                if (e !== h) return g(!1), n.return(f.promise);
                null == (k = c) || k(!1);
                l = Rv(function() {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    g(!0)
                });
                d && clearTimeout(d);
                m = (new Date).getTime() - b;
                m > _.Qf(sv) ? l() : (d = setTimeout(l, _.Qf(sv) - m), _.sp(a, function() {
                    return void g(!1)
                }), c = g);
                return n.return(f.promise)
            })
        }
    };
    Vv = function(a, b) {
        a = a.X;
        var c = b.L,
            d = b.zb;
        b = b.xl;
        if (!a.length) return {
            me: []
        };
        for (var e = _.x(a), f = e.next(); !f.done; f = e.next()) Jq(c, f.value);
        return b ? {
            me: []
        } : d ? (c = Hl(a[0].getAdUnitPath()), {
            me: Uv(a, c)
        }) : {
            me: a.map(function(g) {
                return {
                    networkCode: Hl(g.getAdUnitPath()),
                    X: [g]
                }
            })
        }
    };
    Uv = function(a, b) {
        var c = [];
        a = va(a, function(f) {
            return Hl(f.getAdUnitPath())
        });
        a = _.x(_.z(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.x(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                networkCode: d,
                X: e
            }) : c.push({
                networkCode: d,
                X: e
            })
        }
        return c
    };
    Xv = function(a, b) {
        a = a.X;
        var c = function(d) {
            return !!Im(b.T[d.getDomId()]).length
        };
        return {
            sj: a.filter(c),
            Cj: a.filter(Wv(c))
        }
    };
    ew = function() {
        var a = new Yv;
        var b = (new Zv).setCorrelator(ck(_.t));
        var c = oh().join();
        b = _.lj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.ki(a, 1, b);
        b = new $v;
        c = _.E(aw);
        b = _.zl(b, 7, c);
        c = _.E(bw);
        b = _.zl(b, 8, c);
        c = _.E(cw);
        b = _.zl(b, 9, c);
        b = _.zl(b, 10, !0);
        c = _.E(dw);
        b = _.zl(b, 13, c);
        b = _.zl(b, 16, !0);
        a = _.ki(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    iw = function() {
        var a = _.E(fw) ? _.ib(gw) : _.ib(hw);
        _.ip(document, a)
    };
    ow = function(a, b) {
        var c = jw() || kw() ? 1 : _.th(),
            d = .001 > c;
        d ? (b.D = !0, nh(31067358)) : .002 > c && nh(31067357);
        Qn(23, a);
        a = 1E-4 > c;
        b = _.Qf(lw);
        var e = 0 < b && c < b,
            f = _.Qf(mw),
            g = 0 < f && c < 1 / f,
            h = _.Qf(qv);
        h = 0 < h && c < 1 / h;
        var k = _.Qf(nw);
        return {
            Wc: d,
            Ki: 1E3,
            rj: a,
            Ji: 1E4,
            jh: d,
            jg: 1E3,
            Am: e,
            hm: b,
            ym: g,
            Nl: f,
            Bm: h,
            Cm: 0 < k && c < 1 / k,
            Rh: c
        }
    };
    sw = function(a, b) {
        var c = _.z(Object, "assign").call(Object, {}, a);
        a = a.Rh;
        c = (delete c.Rh, c);
        var d = window.document.URL,
            e = new pw(4, b.Pa, 1E3);
        a = new qw(e, a);
        return _.z(Object, "assign").call(Object, {}, b, c, {
            Ho: new rw(b)
        }, {
            Qa: e,
            Ea: d,
            xo: 2012,
            V: a
        })
    };
    _.ba = [];
    tw = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    uw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    vw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.ww = vw(this);
    xw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.u = {};
    yw = {};
    _.z = function(a, b, c) {
        if (!c || null != a) {
            c = yw[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    zw = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.u ? f = _.u : f = _.ww;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = xw && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? uw(_.u, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === yw[d] && (a = 1E9 * Math.random() >>> 0, yw[d] = xw ? _.ww.Symbol(d) : "$jscp$" + a + "$" + d), uw(f, yw[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    zw("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            uw(this, "description", {
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
    zw("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.ww[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && uw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Aw(tw(this))
                }
            })
        }
        return a
    }, "es6");
    Aw = function(a) {
        a = {
            next: a
        };
        a[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.Bw = function(a) {
        return a.raw = a
    };
    Cw = function(a, b) {
        a.raw = b;
        return a
    };
    _.x = function(a) {
        var b = "undefined" != typeof _.u.Symbol && _.z(_.u.Symbol, "iterator") && a[_.z(_.u.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: tw(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.zi = function(a) {
        if (!(a instanceof Array)) {
            a = _.x(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Dw = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Ew = xw && "function" == typeof _.z(Object, "assign") ? _.z(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Dw(d, e) && (a[e] = d[e])
        }
        return a
    };
    zw("Object.assign", function(a) {
        return a || Ew
    }, "es6");
    var Fw = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Gw = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (xw && "undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = Fw(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Hw;
    if (xw && "function" == typeof _.z(Object, "setPrototypeOf")) Hw = _.z(Object, "setPrototypeOf");
    else {
        var Iw;
        a: {
            var Jw = {
                    a: !0
                },
                Kw = {};
            try {
                Kw.__proto__ = Jw;
                Iw = Kw.a;
                break a
            } catch (a) {}
            Iw = !1
        }
        Hw = Iw ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Lw = Hw;
    _.T = function(a, b) {
        a.prototype = Fw(b.prototype);
        a.prototype.constructor = a;
        if (Lw) Lw(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Mm = b.prototype
    };
    Mw = function() {
        this.D = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.K = this.l = 0;
        this.M = null
    };
    Nw = function(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    };
    Mw.prototype.I = function(a) {
        this.A = a
    };
    var Ow = function(a, b) {
        a.M = {
            exception: b,
            ul: !0
        };
        a.g = a.l || a.K
    };
    Mw.prototype.return = function(a) {
        this.M = {
            return: a
        };
        this.g = this.K
    };
    Mw.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    };
    wb = function(a) {
        a.l = 0;
        var b = a.M.exception;
        a.M = null;
        return b
    };
    Pw = function(a) {
        this.g = new Mw;
        this.A = a
    };
    Sw = function(a, b) {
        Nw(a.g);
        var c = a.g.j;
        if (c) return Qw(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Rw(a)
    };
    Qw = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.D = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, Ow(a.g, g), Rw(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return Rw(a)
    };
    Rw = function(a) {
        for (; a.g.g;) try {
            var b = a.A(a.g);
            if (b) return a.g.D = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, Ow(a.g, c)
        }
        a.g.D = !1;
        if (a.g.M) {
            b = a.g.M;
            a.g.M = null;
            if (b.ul) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Tw = function(a) {
        this.next = function(b) {
            Nw(a.g);
            a.g.j ? b = Qw(a, a.g.j.next, b, a.g.I) : (a.g.I(b), b = Rw(a));
            return b
        };
        this.throw = function(b) {
            Nw(a.g);
            a.g.j ? b = Qw(a, a.g.j["throw"], b, a.g.I) : (Ow(a.g, b), b = Rw(a));
            return b
        };
        this.return = function(b) {
            return Sw(a, b)
        };
        this[_.z(_.u.Symbol, "iterator")] = function() {
            return this
        }
    };
    Uw = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.u.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : _.u.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.ub = function(a) {
        return Uw(new Tw(new Pw(a)))
    };
    _.Wa = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    zw("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    zw("Reflect.construct", function() {
        return Gw
    }, "es6");
    zw("Reflect.setPrototypeOf", function(a) {
        return a ? a : Lw ? function(b, c) {
            try {
                return Lw(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    zw("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.A = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.M()
                })
            }
            this.g.push(g)
        };
        var d = _.ww.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.M = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        b.prototype.j = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.A = 0;
            this.l = void 0;
            this.g = [];
            this.I = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.M)
            }
        };
        e.prototype.H = function(g) {
            if (g === this) this.M(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.ia(g);
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
                h ? this.Ca(g) : this.D(g)
            }
        };
        e.prototype.Ca = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.M(k);
                return
            }
            "function" == typeof h ? this.P(h, g) : this.D(g)
        };
        e.prototype.M = function(g) {
            this.K(2, g)
        };
        e.prototype.D = function(g) {
            this.K(1, g)
        };
        e.prototype.K = function(g, h) {
            if (0 != this.A) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.A);
            this.A = g;
            this.l = h;
            2 === this.A && this.J();
            this.o()
        };
        e.prototype.J = function() {
            var g = this;
            d(function() {
                if (g.C()) {
                    var h = _.ww.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = _.ww.CustomEvent,
                h = _.ww.Event,
                k = _.ww.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.ww.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.o = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.A(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.ia = function(g) {
            var h = this.j();
            g.Fe(h.resolve, h.reject)
        };
        e.prototype.P = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(v) {
                    try {
                        l(p(v))
                    } catch (w) {
                        m(w)
                    }
                } : r
            }
            var l, m, n = new e(function(p, r) {
                l = p;
                m = r
            });
            this.Fe(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Fe = function(g, h) {
            function k() {
                switch (l.A) {
                    case 1:
                        g(l.l);
                        break;
                    case 2:
                        h(l.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.A);
                }
            }
            var l = this;
            null == this.g ? f.A(k) : this.g.push(k);
            this.I = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.x(g), m = l.next(); !m.done; m = l.next()) c(m.value).Fe(h, k)
            })
        };
        e.all = function(g) {
            var h = _.x(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(v) {
                    return function(w) {
                        p[v] = w;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).Fe(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    zw("Object.setPrototypeOf", function(a) {
        return a || Lw
    }, "es6");
    zw("WeakMap", function(a) {
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
                    g = _.x(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Dw(g, d)) {
                var k = new b;
                uw(g, d, {
                    value: k
                })
            }
            if (!Dw(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Dw(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Dw(g, d) && Dw(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && Dw(g, d) && Dw(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    zw("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.x([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.z(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new _.u.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = _.x(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Za ? l.Za.value = k : (l.Za = {
                next: this[1],
                Sb: this[1].Sb,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Za), this[1].Sb.next = l.Za, this[1].Sb = l.Za, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Za && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Za.Sb.next = h.Za.next, h.Za.next.Sb = h.Za.Sb, h.Za.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Sb = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Za
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Za) && h.value
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
            for (var l = _.z(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.z(_.u.Symbol, "iterator")] = _.z(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && Dw(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            Za: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    Za: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return Aw(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Sb;
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
                return h.Sb = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Vw = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    zw("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Vw(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Ww = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                vi: e,
                Ej: f
            }
        }
        return {
            vi: -1,
            Ej: void 0
        }
    };
    zw("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Ww(this, b, c).Ej
        }
    }, "es6");
    var Xw = function(a, b) {
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
        e[_.z(_.u.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    zw("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Xw(this, function(b) {
                return b
            })
        }
    }, "es6");
    zw("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.x([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.z(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new _.u.Map;
            if (c) {
                c = _.x(c);
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
            return _.z(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return _.z(this.g, "values").call(this.g)
        };
        b.prototype.keys = _.z(b.prototype, "values");
        b.prototype[_.z(_.u.Symbol, "iterator")] = _.z(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    zw("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Xw(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    zw("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    zw("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    zw("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    zw("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    zw("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.z(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    zw("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    zw("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Dw(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    zw("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    zw("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.z(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    zw("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Vw(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    zw("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    zw("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Xw(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    zw("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.u.Symbol && _.z(_.u.Symbol, "iterator") && b[_.z(_.u.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    zw("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var Yw = function(a) {
        return a ? a : _.z(Array.prototype, "fill")
    };
    zw("Int8Array.prototype.fill", Yw, "es6");
    zw("Uint8Array.prototype.fill", Yw, "es6");
    zw("Uint8ClampedArray.prototype.fill", Yw, "es6");
    zw("Int16Array.prototype.fill", Yw, "es6");
    zw("Uint16Array.prototype.fill", Yw, "es6");
    zw("Int32Array.prototype.fill", Yw, "es6");
    zw("Uint32Array.prototype.fill", Yw, "es6");
    zw("Float32Array.prototype.fill", Yw, "es6");
    zw("Float64Array.prototype.fill", Yw, "es6");
    zw("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Dw(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    zw("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Vw(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    zw("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Vw(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    zw("globalThis", function(a) {
        return a || _.ww
    }, "es_2020");
    var Zw = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.z(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    zw("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Vw(this, null, "padStart");
            return Zw(c, b - d.length) + d
        }
    }, "es8");
    zw("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Vw(this, null, "padStart");
            return d + Zw(c, b - d.length)
        }
    }, "es8");
    zw("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.T(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    zw("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.z(Array, "from").call(Array, b);
            return _.u.Promise.all(b.map(function(c) {
                return _.u.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.u.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    zw("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Ww(this, b, c).vi
        }
    }, "es6");
    zw("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.z(_.u.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.z(_.u.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    zw("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    zw("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.u.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.u.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    zw("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.z(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    zw("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    zw("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    zw("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    zw("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    var $w, Lc, ax, bx, cx, dx;
    _.t = this || self;
    $w = function(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = _.t, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    };
    Lc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.sa = function(a) {
        var b = Lc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ka = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.ma = function(a) {
        return Object.prototype.hasOwnProperty.call(a, ax) && a[ax] || (a[ax] = ++bx)
    };
    ax = "closure_uid_" + (1E9 * Math.random() >>> 0);
    bx = 0;
    cx = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    dx = function(a, b, c) {
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
    };
    _.ex = function(a, b, c) {
        _.ex = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? cx : dx;
        return _.ex.apply(null, arguments)
    };
    _.fx = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var gx;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.hx = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.tj = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.ix = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.Pg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var jx = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var mx = function(a, b) {
        this.g = a === kx && b || "";
        this.A = lx
    };
    mx.prototype.toString = function() {
        return this.g
    };
    var nx = function(a) {
            return a instanceof mx && a.constructor === mx && a.A === lx ? a.g : "type_error:Const"
        },
        lx = {},
        kx = {};
    var ux, tx, sx, px, vx, hb, qx;
    _.ox = function(a) {
        this.g = a
    };
    _.ox.prototype.toString = function() {
        return this.g + ""
    };
    _.rx = function(a, b) {
        a = px.exec(_.jb(a).toString());
        var c = a[3] || "";
        return hb(a[1] + qx("?", a[2] || "", b) + qx("#", c))
    };
    _.jb = function(a) {
        return a instanceof _.ox && a.constructor === _.ox ? a.g : "type_error:TrustedResourceUrl"
    };
    ux = function(a, b) {
        var c = nx(a);
        if (!sx.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(tx, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof mx ? nx(d) : encodeURIComponent(String(d))
        });
        return hb(a)
    };
    tx = /%{(\w+)}/g;
    sx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    px = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    vx = {};
    hb = function(a) {
        return new _.ox(a, vx)
    };
    qx = function(a, b, c) {
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
    var wx, xx, yx, Sa, zx;
    _.Ra = function(a) {
        this.g = a
    };
    _.Ra.prototype.toString = function() {
        return this.g.toString()
    };
    _.ab = function(a) {
        return a instanceof _.Ra && a.constructor === _.Ra ? a.g : "type_error:SafeUrl"
    };
    wx = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    xx = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    yx = {};
    Sa = function(a) {
        return new _.Ra(a, yx)
    };
    zx = Sa("about:invalid#zClosurez");
    var Ax, im, Bx, Jx, Dx, Ex, Fx, Gx, Hx, Ix, Cx;
    Ax = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    im = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    Bx = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Jx = function(a) {
        if (!Cx.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Dx, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ex, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Fx, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Gx, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Hx, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ix, "&#0;"));
        return a
    };
    Dx = /&/g;
    Ex = /</g;
    Fx = />/g;
    Gx = /"/g;
    Hx = /'/g;
    Ix = /\x00/g;
    Cx = /[\x00&<>"']/;
    _.Qg = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    var Kx;
    Kx = {};
    _.Lx = function(a) {
        this.g = a
    };
    _.Lx.prototype.toString = function() {
        return this.g.toString()
    };
    _.Mx = function(a) {
        return a instanceof _.Lx && a.constructor === _.Lx ? a.g : "type_error:SafeStyleSheet"
    };
    var Fa = $w(610401301),
        Ue = $w(188588736);
    var Ga, Nx = _.t.navigator;
    Ga = Nx ? Nx.userAgentData || null : null;
    var Ox, Sx, Ux, Vx, Wx, Rx;
    Ox = {};
    _.Px = function(a) {
        this.g = a
    };
    _.Px.prototype.toString = function() {
        return this.g.toString()
    };
    _.Qx = function(a) {
        return a instanceof _.Px && a.constructor === _.Px ? a.g : "type_error:SafeHtml"
    };
    Sx = function(a) {
        var b = Rx;
        b = b instanceof _.Px ? b : _.Zj(Jx(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.Px ? e : _.Zj(Jx(String(e))), c.push(_.Qx(e).toString()))
            };
        a.forEach(d);
        return _.Zj(c.join(_.Qx(b).toString()))
    };
    _.Tx = function(a) {
        return Sx(Array.prototype.slice.call(arguments))
    };
    _.Zj = function(a) {
        return new _.Px(a, Ox)
    };
    Ux = /^[a-zA-Z0-9-]+$/;
    Vx = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Wx = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    Rx = new _.Px(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", Ox);
    _.Xx = _.Zj("<br>");
    _.Ta = Sa("about:invalid#zClosurez");
    var Ma = function(a) {
            this.zl = a
        },
        Qa = [Oa("data"), Oa("http"), Oa("https"), Oa("mailto"), Oa("ftp"), new Ma(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Za = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    var db = function() {};
    db.prototype.toString = function() {
        return this.bj.toString()
    };
    var yb = _.Bw(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        Yx = _.Bw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.ib(Yx);
    var Zx, Wv, Ii;
    Zx = function() {
        return !0
    };
    Wv = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Ii = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.$x = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.ay = function(a, b) {
        var c = 0,
            d = !1,
            e = [],
            f = function() {
                c = 0;
                d && (d = !1, g())
            },
            g = function() {
                c = _.t.setTimeout(f, b);
                var h = e;
                e = [];
                a.apply(void 0, h)
            };
        return function(h) {
            e = arguments;
            c ? d = !0 : g()
        }
    };
    var lb;
    lb = Ii(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.sb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, mb(d)), !0) : !1
    };
    _.eg = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, mb(d)), !0) : !1
    };
    var by = {
            Gn: 0,
            Jn: 1,
            En: 2,
            Fn: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        cy = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + by[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(cy, Error);
    var Dc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var vb = function(a) {
        return new _.u.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Cb, Bb = "function" === typeof String.prototype.Al,
        Ab = "undefined" !== typeof TextEncoder;
    _.dy = function(a) {
        _.dy[" "](a);
        return a
    };
    _.dy[" "] = function() {};
    var ey = function(a, b) {
        try {
            return _.dy(a[b]), !0
        } catch (c) {}
        return !1
    };
    var fy, hy, iy, jy, ky, ly;
    fy = Ja() ? !1 : Ia("Opera");
    _.gy = Ja() ? !1 : Ia("Trident") || Ia("MSIE");
    hy = Ia("Edge");
    iy = Ia("Gecko") && !(_.Qg(Ea(), "WebKit") && !Ia("Edge")) && !(Ia("Trident") || Ia("MSIE")) && !Ia("Edge");
    jy = _.Qg(Ea(), "WebKit") && !Ia("Edge");
    ky = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var my = "",
            ny = function() {
                var a = Ea();
                if (iy) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (hy) return /Edge\/([\d\.]+)/.exec(a);
                if (_.gy) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (jy) return /WebKit\/(\S+)/.exec(a);
                if (fy) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ny && (my = ny ? ny[1] : "");
        if (_.gy) {
            var oy = ky();
            if (null != oy && oy > parseFloat(my)) {
                ly = String(oy);
                break a
            }
        }
        ly = my
    }
    var py = ly,
        qy;
    if (_.t.document && _.gy) {
        var ry = ky();
        qy = ry ? ry : parseInt(py, 10) || void 0
    } else qy = void 0;
    var sy = qy;
    !Ia("Android") || La();
    La();
    Ia("Safari") && (La() || (Ja() ? 0 : Ia("Coast")) || (Ja() ? 0 : Ia("Opera")) || (Ja() ? 0 : Ia("Edge")) || (Ja() ? Ha("Microsoft Edge") : Ia("Edg/")) || Ja() && Ha("Opera"));
    var ty = {},
        uy = null,
        vy = iy || jy || "function" == typeof _.t.btoa,
        Ib = function(a, b) {
            void 0 === b && (b = 0);
            wy();
            b = ty[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
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
            return c.join("")
        },
        xy = function(a, b) {
            if (vy && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Ib(c, b)
            }
            return a
        },
        Uf = function(a) {
            var b = [];
            yy(a, function(c) {
                b.push(c)
            });
            return b
        },
        zy = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            yy(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        yy = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = uy[l];
                    if (null != m) return m;
                    if (!im(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            wy();
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
        wy = function() {
            if (!uy) {
                uy = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    ty[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === uy[f] && (uy[f] = e)
                    }
                }
            }
        };
    var Mb = "undefined" !== typeof Uint8Array,
        Hb = !_.gy && "function" === typeof btoa,
        Ay = /[-_.]/g,
        Kb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        By, Ob = {};
    var Cy, uc = function(a, b) {
            Sb(b);
            this.g = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        vc = function() {
            return Cy || (Cy = new uc(null, Ob))
        },
        Yd = function(a) {
            var b = a.g;
            return null == b ? "" : "string" === typeof b ? b : a.g = Jb(b)
        },
        ll = function(a) {
            Sb(Ob);
            var b = a.g;
            if (null != b && !Nb(b))
                if ("string" === typeof b)
                    if (Hb) {
                        Ay.test(b) && (b = b.replace(Ay, Lb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = zy(b);
            else b = null;
            return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : By || (By = new Uint8Array(0))
        };
    uc.prototype.isEmpty = function() {
        return null == this.g
    };
    var Wb = 0,
        Xb = 0,
        Dy;
    var Ey = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        Gy = function(a) {
            if (!a) return Fy || (Fy = new Ey(0, 0));
            if (!/^\d+$/.test(a)) return null;
            cc(a);
            return new Ey(Wb, Xb)
        },
        Fy, Hy = function(a, b) {
            this.A = a >>> 0;
            this.g = b >>> 0
        },
        nf = function(a) {
            if (!a) return Iy || (Iy = new Hy(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            cc(a);
            return new Hy(Wb, Xb)
        },
        Iy;
    var Jy = function() {
        this.g = []
    };
    Jy.prototype.length = function() {
        return this.g.length
    };
    Jy.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var pf = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        Ky = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        Ly = function(a, b) {
            if (0 <= b) Ky(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var Jf = function() {
            this.l = [];
            this.A = 0;
            this.g = new Jy
        },
        Kf = function(a, b) {
            0 !== b.length && (a.l.push(b), a.A += b.length)
        },
        Df = function(a, b) { of (a, b, 2);
            b = a.g.end();
            Kf(a, b);
            b.push(a.A);
            return b
        },
        Ef = function(a, b) {
            var c = b.pop();
            for (c = a.A + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.A++;
            b.push(c);
            a.A++
        },
        of = function(a, b, c) {
            Ky(a.g, 8 * b + c)
        },
        My = function(a, b, c) { of (a, b, 2);
            Ky(a.g, c.length);
            Kf(a, a.g.end());
            Kf(a, c)
        };
    var ff = function(a, b) {
        this.g = a;
        this.Mj = b
    };
    var Ny = hc(),
        Bd = hc("0di"),
        Oy = hc("2ex"),
        ke = hc("0dg");
    var jc = Ny ? function(a, b) {
            a[Ny] |= b
        } : function(a, b) {
            void 0 !== a.xb ? a.xb |= b : Object.defineProperties(a, {
                xb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        He = Ny ? function(a, b) {
            a[Ny] &= ~b
        } : function(a, b) {
            void 0 !== a.xb && (a.xb &= ~b)
        },
        xc = Ny ? function(a) {
            return a[Ny] | 0
        } : function(a) {
            return a.xb | 0
        },
        fe = Ny ? function(a) {
            return a[Ny]
        } : function(a) {
            return a.xb
        },
        nc = Ny ? function(a, b) {
            a[Ny] = b;
            return a
        } : function(a, b) {
            void 0 !== a.xb ? a.xb = b : Object.defineProperties(a, {
                xb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };
    var yd = {},
        rc = {},
        Py, pe, Qy = [];
    nc(Qy, 55);
    pe = Object.freeze(Qy);
    var Ry = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.A = b;
        this.j = c
    };
    Ry.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.A ? this.A.call(this.j, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Ry.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return new Ry(this.g, this.A, this.j)
    };
    _.Sy = Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Ty, Ac;
    var Oc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var Ed, Gd, Hd;
    var Ud = {},
        Uy = function() {
            try {
                var a = function() {
                    return Gw(_.u.Map, [], this.constructor)
                };
                _.T(a, _.u.Map);
                new a;
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Vy = function() {
            this.g = new _.u.Map
        };
    _.q = Vy.prototype;
    _.q.get = function(a) {
        return this.g.get(a)
    };
    _.q.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    _.q.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    _.q.clear = function() {
        this.g.clear();
        this.size = this.g.size
    };
    _.q.has = function(a) {
        return this.g.has(a)
    };
    _.q.entries = function() {
        return _.z(this.g, "entries").call(this.g)
    };
    _.q.keys = function() {
        return _.z(this.g, "keys").call(this.g)
    };
    _.q.values = function() {
        return _.z(this.g, "values").call(this.g)
    };
    _.q.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Vy.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    var Wy = function() {
            if (Uy) return _.z(Object, "setPrototypeOf").call(Object, Vy.prototype, _.u.Map.prototype), Object.defineProperties(Vy.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), Vy;
            var a = function() {
                return Gw(_.u.Map, [], this.constructor)
            };
            _.T(a, _.u.Map);
            return a
        }(),
        Td = function(a, b, c, d) {
            c = void 0 === c ? Jd : c;
            d = void 0 === d ? Jd : d;
            var e = Wy.call(this) || this;
            var f = xc(a);
            f |= 64;
            nc(a, f);
            e.Od = f;
            e.Jf = b;
            e.be = c;
            e.uh = e.Jf ? Ld : d;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
                Wy.prototype.set.call(e, k, l)
            }
            return e
        };
    _.T(Td, Wy);
    var Xy = function(a) {
            if (a.Od & 2) throw Error("Cannot mutate an immutable Map");
        },
        Zd = function(a, b) {
            b = void 0 === b ? Qd : b;
            if (0 !== a.size) return he(a, b)
        },
        he = function(a, b) {
            b = void 0 === b ? Qd : b;
            var c = [];
            a = _.z(Wy.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = Td.prototype;
    _.q.clear = function() {
        Xy(this);
        Wy.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        Xy(this);
        return Wy.prototype.delete.call(this, this.be(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.z(Array, "from").call(Array, _.z(Wy.prototype, "keys").call(this));
        return new Ry(a, Rd, this)
    };
    _.q.keys = function() {
        return _.z(Wy.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(Wy.prototype, "keys").call(this));
        return new Ry(a, Td.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        Wy.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        Xy(this);
        a = this.be(a, !0, !1);
        return null == a ? this : null == b ? (Wy.prototype.delete.call(this, a), this) : Wy.prototype.set.call(this, a, this.uh(b, !0, !0, this.Jf, !1, this.Od))
    };
    _.q.has = function(a) {
        return Wy.prototype.has.call(this, this.be(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.be(a, !1, !1);
        var b = Wy.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Jf;
            return c ? (c = this.uh(b, !1, !0, c, this.nk, this.Od), c !== b && Wy.prototype.set.call(this, a, c), c) : b
        }
    };
    Td.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    Td.prototype.toJSON = void 0;
    Td.prototype.El = rc;
    var Sd;
    var oe, li, dr, On, ml, jj, nl, kl, Yy, pk, Ki, Dm, Zy, $y, ik, vi, gt, vs, bz, cz, ez, fz, mq, Av, Bv, gz, ai, ti;
    _.hi = function(a, b) {
        a = a.F;
        return oe(a, fe(a), b)
    };
    oe = function(a, b, c, d) {
        if (-1 === c) return null;
        var e = qc(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], null != d)) {
                if (me(a, b, e, c) && null != Oy) {
                    var g;
                    a = null != (g = Ty) ? g : Ty = {};
                    g = a[Oy] || 0;
                    4 <= g || (a[Oy] = g + 1, Hc())
                }
                return d
            }
            return me(a, b, e, c)
        }
    };
    _.nk = function(a, b, c) {
        var d = a.F,
            e = fe(d);
        zc(e);
        ne(d, e, b, c);
        return a
    };
    li = function(a, b, c) {
        return void 0 !== Pe(a, b, c, !1)
    };
    dr = function(a) {
        a = a.F;
        var b = fe(a),
            c = oe(a, b, 3),
            d = Kc(c);
        null != d && d !== c && ne(a, b, 3, d);
        return d
    };
    On = function(a, b) {
        return Nc(_.hi(a, b))
    };
    ml = function(a, b) {
        a = a.F;
        var c = fe(a),
            d = oe(a, c, b),
            e = wc(d, !0, !!(c & 34));
        null != e && e !== d && ne(a, c, b, e);
        return null == e ? vc() : e
    };
    jj = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        zc(f);
        (c = Oe(e, f, c)) && c !== b && null != d && (f = ne(e, f, c));
        ne(e, f, b, d);
        return a
    };
    nl = function(a, b, c) {
        a = a.F;
        return Oe(a, fe(a), b) === c ? c : -1
    };
    kl = function(a, b) {
        a = a.F;
        return Oe(a, fe(a), b)
    };
    _.tq = function(a, b, c, d) {
        var e = a.F,
            f = fe(e);
        d = Oe(e, f, d);
        a = _.nj(a, b, c);
        d && d !== c && ne(e, f, d);
        return a
    };
    _.nj = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        zc(d);
        var e = oe(a, d, c);
        b = Kd(Ad(e, b, !0, d));
        e !== b && ne(a, d, c, b);
        return b
    };
    Yy = function(a, b, c) {
        return (a = Pe(a, b, c, !1)) ? a : zd(b)
    };
    _.Bm = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Pe(a, b, c, d);
        if (null == b) return b;
        a = a.F;
        var e = fe(a);
        if (!(e & 2)) {
            var f = Kd(b);
            f !== b && (b = f, ne(a, e, c, b, d))
        }
        return b
    };
    _.gk = function(a, b, c) {
        a = a.F;
        var d = fe(a);
        return Qe(a, d, b, c, !1, !(2 & d))
    };
    _.ki = function(a, b, c) {
        null == c && (c = void 0);
        return _.nk(a, b, c)
    };
    _.Bl = function(a, b, c, d) {
        null == d && (d = void 0);
        return jj(a, b, c, d)
    };
    _.vm = function(a, b, c) {
        var d = a.F,
            e = fe(d);
        zc(e);
        if (null == c) return ne(d, e, b), a;
        for (var f = xc(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, n = 0; n < c.length; n++) {
            var p = c[n];
            h || (p = !!(xc(p.F) & 2), l && (l = !p), m && (m = p))
        }
        h || (f = ic(f, 5, !0), f = ic(f, 8, l), f = ic(f, 16, m));
        k && f !== g && (c = gc(c), g = 0, f = se(f, e, !0));
        f !== g && nc(c, f);
        ne(d, e, b, c);
        return a
    };
    pk = function(a, b, c, d) {
        Re(a, b, c, d);
        return a
    };
    Ki = function(a, b) {
        return $c(_.hi(a, b))
    };
    Dm = function(a, b) {
        return cd(_.hi(a, b))
    };
    Zy = function(a, b) {
        a = _.hi(a, b);
        var c;
        null == a ? c = a : Vc(a) ? "number" === typeof a ? c = qd(a) : c = rd(a) : c = void 0;
        return c
    };
    $y = function(a, b) {
        return ve(a, b, sd, 2, void 0, void 0, 0)
    };
    ik = function(a, b) {
        return xd(_.hi(a, b))
    };
    vi = function(a, b, c, d, e) {
        return ve(a, b, xd, c, d, e)
    };
    _.Q = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return Te(On(a, b), c)
    };
    _.az = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Te(Ki(a, b), c)
    };
    gt = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Te(Dm(a, b), c)
    };
    _.Ng = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Te(sd(_.hi(a, b)), c)
    };
    vs = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Te(Zy(a, b), c)
    };
    _.I = function(a, b) {
        var c = void 0 === c ? "" : c;
        return Te(ik(a, b), c)
    };
    _.kg = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return Te(_.Yc(_.hi(a, b)), c)
    };
    bz = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return Te(td(_.hi(a, b), !0), c)
    };
    cz = function(a, b, c) {
        a = vi(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    ez = function(a) {
        return _.Ng(a, nl(a, dz, 3))
    };
    fz = function(a, b) {
        return _.I(a, nl(a, b, 2))
    };
    mq = function(a, b) {
        a = On(a, b);
        return null == a ? void 0 : a
    };
    Av = function(a, b) {
        a = Ki(a, b);
        return null == a ? void 0 : a
    };
    Bv = function(a, b) {
        a = ik(a, b);
        return null == a ? void 0 : a
    };
    gz = function(a, b) {
        a = _.Yc(_.hi(a, b));
        return null == a ? void 0 : a
    };
    ai = function(a, b, c) {
        return _.nk(a, b, null == c ? c : Mc(c))
    };
    _.zl = function(a, b, c) {
        return _.Me(a, b, null == c ? c : Mc(c), !1)
    };
    _.yi = function(a, b, c) {
        return _.nk(a, b, null == c ? c : Zc(c))
    };
    _.Al = function(a, b, c) {
        return _.Me(a, b, null == c ? c : Zc(c), 0)
    };
    _.fi = function(a, b, c) {
        return _.nk(a, b, hd(c))
    };
    _.mj = function(a, b, c) {
        return _.Me(a, b, hd(c), "0")
    };
    ti = function(a, b, c) {
        return _.nk(a, b, wd(c))
    };
    _.lj = function(a, b, c) {
        return _.Me(a, b, wd(c), "")
    };
    _.ii = function(a, b, c) {
        return _.nk(a, b, Xc(c))
    };
    _.K = function(a, b, c) {
        return _.Me(a, b, Xc(c), 0)
    };
    _.Ji = function(a, b) {
        return null != ik(a, b)
    };
    _.D = function(a, b, c) {
        this.F = _.A(a, b, c)
    };
    _.D.prototype.toJSON = function() {
        return Py ? Ve(this, this.F, !1) : Ve(this, ae(this.F, ce, void 0, void 0, !1), !0)
    };
    var hl = function(a) {
        Py = !0;
        try {
            return JSON.stringify(a.toJSON(), Xd)
        } finally {
            Py = !1
        }
    };
    _.D.prototype.Fg = yd;
    var jf = (0, _.u.Symbol)(),
        Ze = (0, _.u.Symbol)(),
        ef = (0, _.u.Symbol)(),
        hf = (0, _.u.Symbol)(),
        hz = mf(function(a, b, c) {
            b = Kc(b);
            null != b && ( of (a, c, 5), a = a.g, c = Dy || (Dy = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Xb = 0, b = Wb = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        iz = mf(Cf),
        jz = mf(Cf),
        kz = mf(function(a, b, c) {
            a: if (null != b) {
                if (Vc(b)) {
                    if ("string" === typeof b) {
                        b = rd(b);
                        break a
                    }
                    if ("number" === typeof b) {
                        b = qd(b);
                        break a
                    }
                }
                b = void 0
            }null != b && ("string" === typeof b && Gy(b), null != b && ( of (a, c, 0), "number" === typeof b ? (a = a.g, Yb(b), pf(a, Wb, Xb)) : (c = Gy(b), pf(a.g, c.A, c.g))))
        }),
        lz = mf(function(a, b, c) {
            b = $c(b);
            null != b && null != b && ( of (a, c, 0), Ly(a.g, b))
        }),
        mz = mf(function(a, b, c) {
            b = Nc(b);
            null != b && ( of (a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        nz = mf(function(a, b, c) {
            b = xd(b);
            null != b && My(a, c, Fb(b))
        }),
        oz;
    oz = new ff(function(a, b, c) {
        b = Xe(xd, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                null != g && My(e, f, Fb(g))
            }
    }, !1);
    var kf = new ff(Ff, !0),
        gf = new ff(Ff, !0),
        pz;
    pz = new ff(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ff(a, b[f], c, d, e)
    }, !0);
    var qz = mf(function(a, b, c) {
            b = cd(b);
            null != b && null != b && ( of (a, c, 0), Ky(a.g, b))
        }),
        rz = mf(function(a, b, c) {
            b = $c(b);
            null != b && (b = parseInt(b, 10), of (a, c, 0), Ly(a.g, b))
        }),
        sz;
    sz = new ff(function(a, b, c) {
        b = Xe($c, b);
        if (null != b && b.length) {
            c = Df(a, c);
            for (var d = 0; d < b.length; d++) Ly(a.g, b[d]);
            Ef(a, c)
        }
    }, !1);
    var If = void 0;
    var tz = function(a) {
        this.F = _.A(a)
    };
    _.T(tz, _.D);
    var uz = function(a) {
        this.F = _.A(a)
    };
    _.T(uz, _.D);
    var vz = function(a) {
            this.g = a.A;
            this.A = a.l;
            this.j = a.j;
            this.ae = a.ae;
            this.B = a.B;
            this.Ed = a.Ed;
            this.ef = a.ef;
            this.Cf = a.Cf;
            this.df = a.df;
            this.l = a.g
        },
        wz = function(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c;
            this.B = window;
            this.Ed = "env";
            this.ef = "n";
            this.Cf = "0";
            this.df = "1";
            this.g = !0
        };
    wz.prototype.build = function() {
        return new vz(this)
    };
    var ui = function(a) {
        this.F = _.A(a)
    };
    _.T(ui, _.D);
    ui.prototype.getId = function() {
        return _.I(this, 1)
    };
    var xz = [0, nz];
    var xi = function(a) {
        this.F = _.A(a)
    };
    _.T(xi, _.D);
    xi.prototype.getWidth = function() {
        return _.az(this, 1)
    };
    xi.prototype.getHeight = function() {
        return _.az(this, 2)
    };
    var yz = [0, lz, -1];
    var wi = function(a) {
        this.F = _.A(a)
    };
    _.T(wi, _.D);
    var zz = [0, jz, mz, nz, -1];
    var si = function(a) {
        this.F = _.A(a)
    };
    _.T(si, _.D);
    si.da = [4];
    var Az = [0, nz, jz, nz, oz, rz, xz, yz, jz, zz];
    var mi = function(a) {
        this.F = _.A(a)
    };
    _.T(mi, _.D);
    var pi = function(a, b) {
            return _.ii(a, 1, b)
        },
        qi = function(a, b) {
            return ai(a, 4, b)
        },
        oi = function(a, b) {
            return _.yi(a, 2, b)
        },
        Bz = [0, rz, lz, nz, mz];
    var di = function(a) {
        this.F = _.A(a)
    };
    _.T(di, _.D);
    var ci = function(a, b) {
            return ti(a, 1, b)
        },
        $h = function(a, b) {
            return pk(a, 3, si, b)
        },
        bi = function(a, b) {
            return _.ii(a, 4, b)
        };
    di.prototype.ki = function() {
        return _.kg(this, 7, 0)
    };
    di.da = [10, 3];
    var Cz = [0, nz, jz, pz, Az, rz, Bz, mz, rz, 2, oz];
    var Ci = function(a) {
        this.F = _.A(a)
    };
    _.T(Ci, _.D);
    var Dz = [0, rz, mz, jz];
    var Ez = function(a) {
        this.F = _.A(a)
    };
    _.T(Ez, _.D);
    var Zh = function(a, b) {
            return Re(a, 2, di, b)
        },
        ni = function(a, b) {
            _.ki(a, 5, b)
        },
        Hi = function(a, b) {
            ti(a, 10, b)
        };
    Ez.da = [2];
    var Fz = [0, rz, pz, Cz, rz, nz, Bz, nz, mz, lz, Dz, nz, -1];
    var Di = function(a) {
        this.F = _.A(a)
    };
    _.T(Di, _.D);
    var Fi = function(a) {
        var b = new Ez;
        b = _.ii(b, 1, 1);
        return Re(a, 1, Ez, b)
    };
    Di.da = [1];
    Di.prototype.g = Lf([0, pz, Fz]);
    var Gz = function(a) {
        this.F = _.A(a)
    };
    _.T(Gz, _.D);
    var dz = [2, 3];
    var Hz = function(a) {
        this.F = _.A(a)
    };
    _.T(Hz, _.D);
    Hz.da = [1];
    var Iz = function(a) {
        this.F = _.A(a)
    };
    _.T(Iz, _.D);
    Iz.da = [1];
    var Jz = function(a) {
        this.F = _.A(a)
    };
    _.T(Jz, _.D);
    var Kz = [2, 3];
    var Lz = function(a) {
        this.F = _.A(a)
    };
    _.T(Lz, _.D);
    Lz.da = [2];
    var Mz = function(a) {
        this.F = _.A(a)
    };
    _.T(Mz, _.D);
    Mz.da = [6, 4];
    var Nz = function(a) {
        this.F = _.A(a)
    };
    _.T(Nz, _.D);
    Nz.da = [4, 5];
    var Oz = function(a) {
        this.F = _.A(a)
    };
    _.T(Oz, _.D);
    var Pz = function(a) {
        this.F = _.A(a)
    };
    _.T(Pz, _.D);
    Pz.prototype.ji = function() {
        return Yy(this, Oz, 2)
    };
    Pz.da = [1];
    var Qz = function(a) {
        this.F = _.A(a)
    };
    _.T(Qz, _.D);
    var Rz = function(a) {
        this.F = _.A(a)
    };
    _.T(Rz, _.D);
    Rz.da = [1];
    var Sz = function(a) {
        this.F = _.A(a)
    };
    _.T(Sz, _.D);
    var Tz = [0, rz, jz];
    var Uz = function(a) {
        this.F = _.A(a)
    };
    _.T(Uz, _.D);
    var Vz = [0, iz];
    var Wz = function(a) {
        this.F = _.A(a)
    };
    _.T(Wz, _.D);
    Wz.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 1)
    };
    var Xz = [0, nz, Vz, Tz];
    var Yz = function(a) {
        this.F = _.A(a)
    };
    _.T(Yz, _.D);
    Yz.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    _.Zz = function(a) {
        this.F = _.A(a)
    };
    _.T(_.Zz, _.D);
    _.$z = function(a) {
        this.F = _.A(a)
    };
    _.T(_.$z, _.D);
    _.$z.prototype.We = ca(0);
    _.$z.prototype.Ud = ca(1);
    _.$z.prototype.Ye = ca(2);
    _.$z.da = [15, 24];
    var aA = function(a) {
        this.F = _.A(a)
    };
    _.T(aA, _.D);
    aA.prototype.getAdUnitPath = function() {
        return _.I(this, 2)
    };
    var Jv = function(a) {
        this.F = _.A(a)
    };
    _.T(Jv, _.D);
    var bA = [5, 7, 8, 9];
    var cA = function(a) {
        this.F = _.A(a)
    };
    _.T(cA, _.D);
    var dA = function(a) {
        this.F = _.A(a)
    };
    _.T(dA, _.D);
    dA.da = [4, 5, 6];
    var eA = function(a) {
        this.F = _.A(a)
    };
    _.T(eA, _.D);
    eA.prototype.getValue = function() {
        return _.I(this, 2)
    };
    eA.prototype.rg = function() {
        return _.Ji(this, 2)
    };
    var fA = function(a) {
        this.F = _.A(a)
    };
    _.T(fA, _.D);
    var Fv = function(a) {
        this.F = _.A(a)
    };
    _.T(Fv, _.D);
    Fv.da = [13];
    var Dv = function(a) {
        this.F = _.A(a)
    };
    _.T(Dv, _.D);
    Dv.da = [15, 13];
    var gA = function(a) {
        this.F = _.A(a)
    };
    _.T(gA, _.D);
    var ok = function(a) {
            var b = new gA;
            return _.ii(b, 1, a)
        },
        hA = [0, rz];
    var hk = function(a) {
        this.F = _.A(a)
    };
    _.T(hk, _.D);
    var iA = function(a) {
            var b = new hk;
            return ti(b, 1, a)
        },
        jA = function(a) {
            var b = window.Date.now();
            b = _.z(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.fi(a, 3, b)
        };
    hk.prototype.lb = function(a) {
        return _.ki(this, 10, a)
    };
    var kA = Mf(hk),
        lA = [0, nz, -1, jz, lz, -2, jz, hz, mz, hA, mz];
    var mA = [0, 1, [0, kz, -2], -1, nz, -1, mz, [0, 3, rz, nz], jz, sz, qz];
    var nA = function(a) {
        this.F = _.A(a)
    };
    _.T(nA, _.D);
    nA.da = [1, 2];
    nA.prototype.g = Lf([0, pz, mA, pz, lA]);
    var Iv = function(a) {
        this.F = _.A(a)
    };
    _.T(Iv, _.D);
    var oA = function(a) {
        this.F = _.A(a)
    };
    _.T(oA, _.D);
    oA.prototype.getValue = function() {
        return _.I(this, 1)
    };
    oA.prototype.rg = function() {
        return _.Ji(this, 1)
    };
    oA.prototype.getVersion = function() {
        return _.kg(this, 5, 0)
    };
    var Cv = function(a) {
        this.F = _.A(a)
    };
    _.T(Cv, _.D);
    var Kv = function(a) {
        this.F = _.A(a)
    };
    _.T(Kv, _.D);
    Kv.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    var Lv = function(a) {
        this.F = _.A(a)
    };
    _.T(Lv, _.D);
    var Gv = function(a) {
        this.F = _.A(a)
    };
    _.T(Gv, _.D);
    var Ov = function(a) {
        this.F = _.A(a)
    };
    _.T(Ov, _.D);
    var pA = function(a) {
        this.F = _.A(a)
    };
    _.T(pA, _.D);
    pA.prototype.getContentUrl = function() {
        return _.I(this, 2)
    };
    pA.da = [11];
    var qA = function(a) {
        this.F = _.A(a)
    };
    _.T(qA, _.D);
    qA.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 4)
    };
    qA.da = [2, 23, 29];
    var rA = function(a) {
        this.F = _.A(a)
    };
    _.T(rA, _.D);
    var sA = function(a) {
        this.F = _.A(a)
    };
    _.T(sA, _.D);
    var tA = function(a) {
        this.F = _.A(a)
    };
    _.T(tA, _.D);
    var uA = function(a) {
        this.F = _.A(a)
    };
    _.T(uA, _.D);
    var vA = function(a) {
        this.F = _.A(a)
    };
    _.T(vA, _.D);
    var wA = function(a) {
        this.F = _.A(a)
    };
    _.T(wA, _.D);
    wA.prototype.getEscapedQemQueryId = function() {
        return _.I(this, 2)
    };
    var xA = function(a) {
        this.F = _.A(a)
    };
    _.T(xA, _.D);
    var yA = function(a) {
        this.F = _.A(a)
    };
    _.T(yA, _.D);
    var Hv = function(a) {
        this.F = _.A(a)
    };
    _.T(Hv, _.D);
    var zA = function(a) {
        return Yy(a, wA, 5)
    };
    Hv.prototype.getWidth = function() {
        return _.az(this, 9)
    };
    Hv.prototype.getHeight = function() {
        return _.az(this, 10)
    };
    Hv.da = [3, 7, 27, 11, 32];
    var AA = function(a) {
        this.F = _.A(a)
    };
    _.T(AA, _.D);
    AA.prototype.getHeight = function() {
        return Ki(this, 6)
    };
    AA.prototype.getWidth = function() {
        return Ki(this, 7)
    };
    AA.prototype.getEscapedQemQueryId = function() {
        return ik(this, 34)
    };
    AA.da = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var Ev = [39, 48];
    var BA = function(a) {
        this.F = _.A(a)
    };
    _.T(BA, _.D);
    var CA = Mf(BA);
    BA.da = [1, 2, 3];
    var DA = window;
    var $v = function(a) {
        this.F = _.A(a)
    };
    _.T($v, _.D);
    $v.da = [15];
    var Zv = function(a) {
        this.F = _.A(a)
    };
    _.T(Zv, _.D);
    Zv.prototype.getCorrelator = function() {
        return _.Ng(this, 1)
    };
    Zv.prototype.setCorrelator = function(a) {
        return _.mj(this, 1, a)
    };
    var Yv = function(a) {
        this.F = _.A(a)
    };
    _.T(Yv, _.D);
    var EA, FA, GA;
    _.U = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    EA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    FA = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    };
    GA = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var HA = new _.U(590317302),
        IA = new _.U(1958);
    _.Of = function(a) {
        var b = "Lc";
        if (a.Lc && a.hasOwnProperty(b)) return a.Lc;
        b = new a;
        return a.Lc = b
    };
    var Pf = function() {
        var a = {};
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.M = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function() {}
    };
    var JA = _.gy || jy;
    _.KA = Ii(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Qx(Rx);
        return !b.parentElement
    });
    _.Om = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Om.prototype.equals = function(a) {
        return a instanceof _.Om && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.Om.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Om.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Om.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Sm = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.Sm.prototype;
    _.q.aspectRatio = function() {
        return this.width / this.height
    };
    _.q.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var LA, MA, OA;
    LA = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    MA = 2147483648 * Math.random() | 0;
    _.NA = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    OA = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var mg, SA, RA, VA, XA, bB;
    mg = function(a) {
        return a ? new _.PA(_.QA(a)) : gx || (gx = new _.PA)
    };
    SA = function(a, b) {
        ya(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : RA.hasOwnProperty(d) ? a.setAttribute(RA[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    RA = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.UA = function(a) {
        a = a.document;
        a = _.TA(a) ? a.documentElement : a.body;
        return new _.Sm(a.clientWidth, a.clientHeight)
    };
    VA = function(a) {
        return a.scrollingElement ? a.scrollingElement : !jy && _.TA(a) ? a.documentElement : a.body || a.documentElement
    };
    _.WA = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    XA = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.sa(f) || _.ka(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ka(f)) {
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
                _.hx(g ? _.ia(f) : f, d)
            }
        }
    };
    _.YA = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.TA = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.ZA = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.$A = function(a) {
        var b;
        if (JA && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ka(b) && 1 == b.nodeType ? b : null
    };
    _.aB = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.QA = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    bB = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.WA(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.wj = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.PA = function(a) {
        this.g = a || _.t.document || document
    };
    _.q = _.PA.prototype;
    _.q.hl = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    };
    _.q.ln = _.PA.prototype.hl;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.YA(this.g, a)
    };
    _.q.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        XA(_.QA(a), a, arguments)
    };
    _.q.Tj = _.ZA;
    _.q.contains = _.aB;
    var dB = function() {
            return Fa && Ga ? Ga.mobile : !cB() && (Ia("iPod") || Ia("iPhone") || Ia("Android") || Ia("IEMobile"))
        },
        cB = function() {
            return Fa && Ga ? !Ga.mobile && (Ia("iPad") || Ia("Android") || Ia("Silk")) : Ia("iPad") || Ia("Android") && !Ia("Mobile") || Ia("Silk")
        };
    var fB, kp;
    _.eB = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    fB = function(a) {
        return a ? decodeURI(a) : a
    };
    _.Hn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.Hn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    kp = /#|$/;
    var rl, Fk, gB, Gk, $m, up, kw, jw, iB, jB, an, kB, lB, mB, nB, oB, pB, vv, qB, rB, Op, Vj, Pp, Up, sB, uB, vB, wB, xB, yB, ck, zB, Bo, so, AB, Mn, BB, CB;
    _.Xk = function(a) {
        try {
            return !!a && null != a.location.href && ey(a, "foo")
        } catch (b) {
            return !1
        }
    };
    rl = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? gB(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Xk(c) || !a(c));) c = gB(c)
    };
    Fk = function() {
        var a = window;
        rl(function(b) {
            a = b;
            return !1
        });
        return a
    };
    gB = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Gk = function(a) {
        return _.Xk(a.top) ? a.top : null
    };
    _.ip = function(a, b) {
        var c = _.dg("SCRIPT", a);
        rb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    $m = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.th = function() {
        if (!_.u.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Kn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.hB = function(a) {
        var b = [];
        _.Kn(a, function(c) {
            b.push(c)
        });
        return b
    };
    up = function(a, b) {
        return Aa(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.uh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    kw = Ii(function() {
        return _.Pg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], iB) || 1E-4 > Math.random()
    });
    jw = Ii(function() {
        return iB("MSIE")
    });
    iB = function(a) {
        return -1 != Ea().indexOf(a)
    };
    jB = /^([0-9.]+)px$/;
    an = function(a) {
        return (a = jB.exec(a)) ? +a[1] : null
    };
    kB = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    lB = function() {
        var a = _.t.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    mB = {
        pn: "allow-forms",
        qn: "allow-modals",
        rn: "allow-orientation-lock",
        sn: "allow-pointer-lock",
        un: "allow-popups",
        vn: "allow-popups-to-escape-sandbox",
        wn: "allow-presentation",
        xn: "allow-same-origin",
        yn: "allow-scripts",
        zn: "allow-top-navigation",
        An: "allow-top-navigation-by-user-activation"
    };
    nB = Ii(function() {
        return _.hB(mB)
    });
    oB = function(a) {
        var b = nB();
        return a.length ? _.tj(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    pB = function() {
        var a = _.dg("IFRAME"),
            b = {};
        _.hx(nB(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    vv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    qB = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = gB(a))) break
        }
        return null
    };
    rB = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.dg("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Xp = Ii(function() {
        return dB() ? 2 : cB() ? 1 : 0
    });
    Op = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.yp = function(a, b) {
        _.Kn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Vj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Pp = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = $m(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Up = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.ix(a, parseFloat)
    };
    sB = {};
    _.tB = (sB["http://googleads.g.doubleclick.net"] = !0, sB["http://pagead2.googlesyndication.com"] = !0, sB["https://googleads.g.doubleclick.net"] = !0, sB["https://pagead2.googlesyndication.com"] = !0, sB);
    uB = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    vB = [];
    wB = function() {
        var a = vB;
        vB = [];
        a = _.x(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    xB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    yB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    ck = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: yB(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    zB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (vB.push(b), 1 == vB.length && (_.u.Promise ? _.u.Promise.resolve().then(wB) : window.setImmediate ? setImmediate(wB) : setTimeout(wB, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Bo = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    so = function(a) {
        return 0 === a || Bo(a)
    };
    AB = function(a) {
        return new _.u.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    Mn = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.dg = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    BB = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Xk(a) && (b = a);
        return b
    };
    _.Ui = function(a) {
        return _.E(HA) || La() && dB() ? CB(a, !0) : 1
    };
    CB = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Gk(a) : a;
        if (!c) return 1;
        a = 0 === (0, _.Xp)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d) return 1;
        var e = Math.round(100 * (c / d + _.z(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.z(Number, "EPSILON"))) / 100
    };
    _.DB = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.DB.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.DB.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.EB = function(a) {
        return new _.DB(a.top, a.right, a.bottom, a.left)
    };
    _.DB.prototype.contains = function(a) {
        return this && a ? a instanceof _.DB ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.DB.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.DB.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.DB.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var FB = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        GB = function(a) {
            return new _.DB(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        HB = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new FB(c, e, d - c, a - e)
            }
            return null
        };
    FB.prototype.contains = function(a) {
        return a instanceof _.Om ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    FB.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    FB.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    FB.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var IB = function(a) {
        return (a = void 0 === a ? Tf() : a) ? _.Xk(a.master) ? a.master : null : null
    };
    var LB, NB, Rm, OB, PB, Nm;
    _.KB = function(a, b, c) {
        if ("string" === typeof b)(b = _.JB(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.JB(c, d);
                f && (c.style[f] = e)
            }
    };
    LB = {};
    _.JB = function(a, b) {
        var c = LB[b];
        if (!c) {
            var d = _.NA(b);
            c = d;
            void 0 === a.style[d] && (d = (jy ? "Webkit" : iy ? "Moz" : _.gy ? "ms" : null) + OA(d), void 0 !== a.style[d] && (c = d));
            LB[b] = c
        }
        return c
    };
    _.MB = function(a, b) {
        var c = _.QA(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    NB = function(a, b) {
        return _.MB(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Rm = function(a) {
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
    OB = function(a) {
        if (_.gy && !(8 <= Number(sy))) return a.offsetParent;
        var b = _.QA(a),
            c = NB(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = NB(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    PB = function(a) {
        var b = _.QA(a),
            c = new _.Om(0, 0);
        var d = b ? _.QA(b) : document;
        d = !_.gy || 9 <= Number(sy) || _.TA(mg(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Rm(a);
        d = mg(b).g;
        b = VA(d);
        d = d.parentWindow || d.defaultView;
        b = _.gy && d.pageYOffset != b.scrollTop ? new _.Om(b.scrollLeft, b.scrollTop) : new _.Om(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Nm = function(a, b) {
        var c = new _.Om(0, 0),
            d = _.WA(_.QA(a));
        if (!ey(d, "parent")) return c;
        do {
            var e = d == b ? PB(a) : _.QB(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.QB = function(a) {
        a = Rm(a);
        return new _.Om(a.left, a.top)
    };
    _.RB = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Qm = function(a, b) {
        if ("none" != NB(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.SB = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = jy && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Rm(a), new _.Sm(a.right - a.left, a.bottom - a.top)) : new _.Sm(b, c)
    };
    var Lp;
    _.TB = _.Bw(["//fonts.googleapis.com/css"]);
    Lp = function(a) {
        a = IB(Tf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    _.oj = function(a) {
        this.F = _.A(a)
    };
    _.T(_.oj, _.D);
    _.oj.da = [1];
    var UB = function(a) {
        this.F = _.A(a)
    };
    _.T(UB, _.D);
    var VB = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var WB = function(a) {
        this.F = _.A(a)
    };
    _.T(WB, _.D);
    WB.prototype.getVersion = function() {
        return _.az(this, 2)
    };
    WB.da = [3];
    var XB = function(a) {
        this.F = _.A(a)
    };
    _.T(XB, _.D);
    var YB = function(a) {
        this.F = _.A(a)
    };
    _.T(YB, _.D);
    var ZB = function(a) {
        this.F = _.A(a)
    };
    _.T(ZB, _.D);
    ZB.prototype.getVersion = function() {
        return _.az(this, 1)
    };
    var $B = function(a) {
        this.F = _.A(a)
    };
    _.T($B, _.D);
    var aC = function(a) {
        this.F = _.A(a)
    };
    _.T(aC, _.D);
    var bC = function(a) {
        var b = new aC;
        return _.ki(b, 1, a)
    };
    var cC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        dC = 6 + cC.reduce(function(a, b) {
            return a + b
        });
    var eC = function(a) {
        this.F = _.A(a)
    };
    _.T(eC, _.D);
    var fC = function(a) {
        this.F = _.A(a)
    };
    _.T(fC, _.D);
    fC.prototype.getVersion = function() {
        return _.az(this, 1)
    };
    var gC = function(a) {
        this.F = _.A(a)
    };
    _.T(gC, _.D);
    var hC = function(a) {
        this.F = _.A(a)
    };
    _.T(hC, _.D);
    var iC = function(a) {
        var b = new hC;
        return _.ki(b, 1, a)
    };
    var jC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        kC = 6 + jC.reduce(function(a, b) {
            return a + b
        });
    var lC = function(a) {
        this.F = _.A(a)
    };
    _.T(lC, _.D);
    var mC = function(a) {
        this.F = _.A(a)
    };
    _.T(mC, _.D);
    var nC = function(a) {
        this.F = _.A(a)
    };
    _.T(nC, _.D);
    nC.prototype.getVersion = function() {
        return _.az(this, 1)
    };
    var oC = function(a) {
        this.F = _.A(a)
    };
    _.T(oC, _.D);
    var pC = function(a) {
        this.F = _.A(a)
    };
    _.T(pC, _.D);
    var qC = function(a) {
        var b = new pC;
        return _.ki(b, 1, a)
    };
    var rC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        sC = 6 + rC.reduce(function(a, b) {
            return a + b
        });
    var tC = function(a) {
        this.F = _.A(a)
    };
    _.T(tC, _.D);
    var uC = function(a) {
        this.F = _.A(a)
    };
    _.T(uC, _.D);
    uC.prototype.getVersion = function() {
        return _.az(this, 1)
    };
    var vC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        wC = 6 + vC.reduce(function(a, b) {
            return a + b
        });
    var xC = function(a) {
        this.F = _.A(a)
    };
    _.T(xC, _.D);
    _.Pl = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.yC = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var zC = null,
        AC = function() {
            if (null === zC) {
                zC = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        zC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return zC
        };
    var BC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var CC, DC, EC, FC, GC;
    CC = _.t.performance;
    DC = !!(CC && CC.mark && CC.measure && CC.clearMarks);
    EC = Ii(function() {
        var a;
        if (a = DC) a = AC(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    FC = function(a, b) {
        this.A = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = EC() || (null != c ? c : Math.random() < a)
    };
    _.Nl = function(a) {
        a && CC && EC() && (CC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), CC.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    GC = function(a, b, c, d, e, f) {
        a.g && (b = new BC(b, c, d, void 0 === e ? 0 : e, f), !a.g || 2048 < a.A.length || a.A.push(b))
    };
    FC.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new BC(a, b, _.ag() || _.$f());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        CC && EC() && CC.mark(b);
        return a
    };
    FC.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (_.ag() || _.$f()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            CC && EC() && CC.mark(b);
            !this.g || 2048 < this.A.length || this.A.push(a)
        }
    };
    var ft = function(a, b, c) {
        var d = _.ag();
        d && GC(a, b, 9, d, 0, c)
    };
    var KC, JC, MC, LC;
    _.HC = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    };
    _.IC = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    KC = function(a, b, c, d, e) {
        var f = [];
        _.Kn(a, function(g, h) {
            (g = JC(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    JC = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(JC(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(KC(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    MC = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = LC(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.A[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = KC(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.l;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    };
    LC = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.jg = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var NC = function(a, b, c, d, e) {
            fg(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        ig = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Kn(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Ns(d, c)
        },
        Ns = function(a, b) {
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
            }), c.fetch(a, b)) : NC(c, a, void 0, b, d)
        };
    var OC = function(a, b) {
        var c = new xC;
        a = _.K(c, 1, a);
        b = _.lj(a, 2, b);
        this.j = _.je(b)
    };
    var PC = function(a) {
        this.F = _.A(a)
    };
    _.T(PC, _.D);
    var RC = function(a, b) {
            return jj(a, 1, QC, wd(b))
        },
        SC = function(a, b) {
            return jj(a, 2, QC, hd(b))
        },
        TC = function(a, b) {
            return jj(a, 3, QC, null == b ? b : Mc(b))
        },
        QC = [1, 2, 3];
    var UC = function(a) {
        this.F = _.A(a)
    };
    _.T(UC, _.D);
    var WC = function(a, b) {
            return jj(a, 4, VC, _.Jc(b))
        },
        VC = [2, 4];
    var XC = function(a) {
        this.F = _.A(a)
    };
    _.T(XC, _.D);
    var YC = function(a) {
            var b = new XC;
            return _.lj(b, 1, a)
        },
        ZC = function(a, b) {
            return _.ki(a, 3, b)
        },
        $C = function(a, b) {
            return pk(a, 4, PC, b)
        };
    XC.da = [4];
    var aD = function(a) {
        this.F = _.A(a)
    };
    _.T(aD, _.D);
    var bD = function(a) {
        this.F = _.A(a)
    };
    _.T(bD, _.D);
    var Jl = function(a) {
        this.F = _.A(a)
    };
    _.T(Jl, _.D);
    var yl = function(a) {
        this.F = _.A(a)
    };
    _.T(yl, _.D);
    var xl = function(a) {
        this.F = _.A(a)
    };
    _.T(xl, _.D);
    var vl = function(a) {
        this.F = _.A(a)
    };
    _.T(vl, _.D);
    var Fl = function(a) {
        this.F = _.A(a)
    };
    _.T(Fl, _.D);
    var cD = function(a) {
        this.F = _.A(a)
    };
    _.T(cD, _.D);
    var dD = function(a) {
        this.F = _.A(a)
    };
    _.T(dD, _.D);
    var ul = function(a) {
        this.F = _.A(a)
    };
    _.T(ul, _.D);
    ul.prototype.getTagSessionCorrelator = function() {
        return _.Ng(this, 2)
    };
    var El = function(a) {
        var b = new cD;
        return _.Bl(a, 13, Cl, b)
    };
    ul.da = [4];
    var Cl = [6, 7, 8, 9, 11, 13, 14];
    var eD = function(a) {
        this.F = _.A(a)
    };
    _.T(eD, _.D);
    var fD = function(a) {
        this.F = _.A(a)
    };
    _.T(fD, _.D);
    var uq = function(a) {
        this.F = _.A(a)
    };
    _.T(uq, _.D);
    _.ij = function(a) {
        this.F = _.A(a)
    };
    _.T(_.ij, _.D);
    _.ij.prototype.getTagSessionCorrelator = function() {
        return _.Ng(this, 8)
    };
    _.hj = function(a, b) {
        return _.Al(a, 10, b)
    };
    _.kj = [3, 4, 6];
    var sq = function(a) {
        this.F = _.A(a)
    };
    _.T(sq, _.D);
    var gD = function(a) {
            var b = new sq;
            return _.Bl(b, 2, vq, a)
        },
        vq = [1, 2, 3, 4, 5];
    var oq = function(a) {
        this.F = _.A(a)
    };
    _.T(oq, _.D);
    oq.prototype.getTagSessionCorrelator = function() {
        return _.Ng(this, 2)
    };
    oq.da = [4];
    var Tl = function(a) {
        this.F = _.A(a)
    };
    _.T(Tl, _.D);
    Tl.da = [3];
    var Sl = function(a) {
        this.F = _.A(a)
    };
    _.T(Sl, _.D);
    Sl.da = [4, 5];
    var Rl = function(a) {
        this.F = _.A(a)
    };
    _.T(Rl, _.D);
    Rl.prototype.getTagSessionCorrelator = function() {
        return _.Ng(this, 1)
    };
    Rl.da = [2];
    var Ql = function(a) {
        this.F = _.A(a)
    };
    _.T(Ql, _.D);
    var Wl = [4, 6];
    var hD = function(a) {
        this.F = _.A(a)
    };
    _.T(hD, _.D);
    hD.prototype.getTagSessionCorrelator = function() {
        return _.Ng(this, 1)
    };
    hD.prototype.getMessageId = function() {
        return _.kg(this, 8, 0)
    };
    hD.prototype.getMessageArgs = function(a) {
        return cz(this, 9, a)
    };
    hD.da = [2, 9];
    var Zs = function(a) {
        this.F = _.A(a)
    };
    _.T(Zs, _.D);
    var $s = function(a) {
        this.F = _.A(a)
    };
    _.T($s, _.D);
    var at = [3];
    var jD = function(a) {
            this.mc = new iD(a)
        },
        iD = function(a) {
            this.li = new kD(a);
            this.Gd = new lD(a)
        },
        kD = function(a) {
            this.vk = new mD(a);
            this.refresh = new nD(a)
        },
        mD = function(a) {
            this.wk = new oD(a)
        },
        oD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc,
                    d = b.Tf,
                    e = b.ri,
                    f = b.si;
                b = b.ni;
                a(ZC($C($C($C($C(YC("XVNPAd"), SC(new PC, Math.round(d))), TC(new PC, e)), TC(new PC, f)), TC(new PC, b)), WC(new UC, c)))
            }
        },
        nD = function(a) {
            this.lm = new pD(a)
        },
        pD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc;
                b = b.Om;
                a(ZC($C(YC("e1Ueh"), SC(new PC, Math.round(b))), WC(new UC, c)))
            }
        },
        lD = function(a) {
            this.kh = new qD(a);
            this.dk = new rD(a);
            this.lk = new sD(a);
            this.zk = new tD(a)
        },
        rD = function(a) {
            this.Rc = function(b) {
                b = b.Uc;
                a(ZC(YC("rsv8Kc"), WC(new UC, b)))
            }
        },
        sD = function(a) {
            this.Kc = function(b) {
                var c = b.Xc,
                    d = b.Sf;
                b = b.status;
                d = $C($C(YC("SOomke"), RC(new PC, d)), RC(new PC, b));
                b = new UC;
                c = jj(b, 2, VC, hd(Math.round(c)));
                a(ZC(d, c))
            }
        },
        tD = function(a) {
            this.Rc = function(b) {
                var c = b.Uc;
                b = b.Ll;
                a(ZC($C(YC("zi5kKf"), SC(new PC, Math.round(b))), WC(new UC, c)))
            }
        },
        qD = function(a) {
            this.vh = new uD(a)
        },
        uD = function(a) {
            this.Kc = function(b) {
                var c = b.Xc;
                b = b.status;
                b = $C(YC("TP3y1d"), RC(new PC, b));
                var d = new UC;
                c = jj(d, 2, VC, hd(Math.round(c)));
                a(ZC(b, c))
            }
        },
        vD = function() {
            OC.apply(this, arguments);
            var a = this;
            this.ac = new jD(function(b) {
                return a.vm(b)
            })
        };
    _.T(vD, OC);
    _.wD = function() {
        vD.apply(this, arguments)
    };
    _.T(_.wD, vD);
    _.q = _.wD.prototype;
    _.q.wm = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 2,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.Vc = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 5,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.pj = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 15,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.qj = ca(3);
    _.q.zm = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 17,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.xm = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 19,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.Dm = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !0,
                oc: 21,
                Zb: a.toJSON()
            }
        })))
    };
    _.q.vm = function() {
        this.A.apply(this, _.zi(_.Wa.apply(0, arguments).map(function(a) {
            return {
                Rb: !1,
                oc: 1,
                Zb: a.toJSON()
            }
        })))
    };
    var xD = function(a, b) {
        if (_.u.globalThis.fetch) _.u.globalThis.fetch(a, {
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
    var yD = function(a, b, c, d, e, f, g, h) {
        _.wD.call(this, a, b);
        this.C = c;
        this.o = d;
        this.Ca = e;
        this.I = f;
        this.K = g;
        this.M = h;
        this.g = [];
        this.l = null;
        this.D = !1
    };
    _.T(yD, _.wD);
    var zD = function(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.g.length) {
            var b = hg(a.g, a.j);
            a.o(a.C + "?e=1", b);
            a.g = []
        }
    };
    yD.prototype.A = function() {
        var a = _.Wa.apply(0, arguments),
            b = this;
        try {
            this.K && 65536 <= hg(this.g.concat(a), this.j).length && zD(this), this.M && !this.D && (this.D = !0, this.M.g(function() {
                zD(b)
            })), this.g.push.apply(this.g, _.zi(a)), this.g.length >= this.I && zD(this), this.g.length && null === this.l && (this.l = setTimeout(function() {
                zD(b)
            }, this.Ca))
        } catch (c) {
            gg(c, this.j)
        }
    };
    var pw = function(a, b, c, d, e, f) {
        yD.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", xD, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.u.globalThis.fetch, f)
    };
    _.T(pw, yD);
    var AD = new EA(494575051),
        BD = new GA(489560439),
        CD = new GA(505762507);
    var Mv, Fo, Dp, DD, ED, FD, Bi, GD, HD, ID, lv, kv, zv, JD, mw, KD, LD, MD, To, ND, OD, PD, QD, fs, RD, SD, TD, lw, UD, uv, VD, WD, XD, YD, Qo, dE, gE, sr, hE, Ll, Lu, jE, jr, kE, Bq, lE, mE, nE, oE, $t, gu, pE, qE, rE, sE, tE, sv, uE, qv, vE, Gn, Dn, wE, Ek, fv, yE, zE, AE, Ao, BE, gv, dl, CE, DE, EE, FE, cl, Xt, iu, Yt, GE, nw, HE, IE, JE, KE, LE, Zt, ME, NE, OE, PE, QE, RE, mt, Ls, GF, HF, Is, IF, JF, KF, LF, MF, NF, OF, bw, cw, PF, dw, aw, QF, RF, Ot, fw, SF;
    Mv = new _.U(607106222);
    Fo = new _.U(577939489, !0);
    Dp = new EA(7, .1);
    DD = new _.U(212);
    ED = new _.U(561694963, !0);
    FD = new _.U(609732864);
    Bi = new EA(612427113);
    GD = new EA(462420536);
    HD = new _.U(476475256, !0);
    ID = new EA(438663674);
    lv = new EA(45409629);
    kv = new EA(522348973);
    zv = new EA(550605190);
    JD = new EA(564509649);
    mw = new EA(578655462, 20);
    KD = new _.U(558225291);
    LD = new _.U(591917863);
    MD = new _.U(613699219, !0);
    To = new _.U(45619539);
    ND = new _.U(582386403, !0);
    OD = new _.U(603086552, !0);
    PD = new _.U(577861852);
    QD = new _.U(573236024, !0);
    fs = new _.U(453);
    RD = new _.U(454);
    SD = new EA(377289019, 1E4);
    TD = new EA(529, 20);
    lw = new EA(573282293, .01);
    UD = new FA(10);
    uv = new EA(610770343);
    VD = new _.U(610525552);
    WD = new _.U(45624259);
    XD = new _.U(45622305);
    YD = new _.U(360245597, !0);
    Qo = new _.U(540043576, !0);
    _.ZD = new _.U(479390945);
    _.$D = new _.U(518650310);
    _.aE = new _.U(547020083);
    _.bE = new _.U(561164161, !0);
    _.cE = new EA(550718589, 250);
    dE = new _.U(586382198);
    _.eE = new _.U(600451522, !0);
    _.fE = new EA(609494714);
    gE = new EA(575880738, 10);
    sr = new EA(586681283);
    hE = new _.U(599186119, !0);
    _.iE = new _.U(531615531);
    Ll = new _.U(85);
    Lu = new _.U(524098256);
    jE = new _.U(595824397, !0);
    jr = new EA(532520346, 120);
    kE = new _.U(557870754, !0);
    Bq = new _.U(614048762);
    lE = new GA(466086960);
    mE = new EA(398776877, 6E4);
    nE = new EA(374201269, 6E4);
    oE = new EA(371364213, 6E4);
    $t = new _.U(606310399, !0);
    gu = new _.U(570764855, !0);
    pE = new FA(579921177, "control_1\\.\\d");
    qE = new EA(570764854, 50);
    rE = new _.U(578725095, !0);
    sE = new _.U(453275889);
    tE = new _.U(377936516, !0);
    sv = new EA(599575765, 1E3);
    uE = new _.U(605401295);
    qv = new EA(609715571);
    vE = new EA(24);
    Gn = new GA(1);
    Dn = new FA(2, "1-0-40");
    wE = new _.U(608664189);
    Ek = new _.U(602464517);
    _.xE = new EA(506394061, 100);
    fv = new GA(489);
    yE = new _.U(392065905);
    zE = new EA(360245595, 500);
    AE = new _.U(561985307);
    Ao = new _.U(45397804, !0);
    BE = new _.U(45398607, !0);
    gv = new _.U(424117738);
    dl = new _.U(531493729);
    CE = new _.U(563462360, !0);
    DE = new _.U(555237688);
    EE = new _.U(555237687);
    FE = new _.U(555237686);
    cl = new _.U(507033477, !0);
    Xt = new _.U(399705355);
    iu = new _.U(45420038);
    Yt = new EA(514795754, 2);
    GE = new EA(609173130);
    nw = new EA(613312178);
    HE = new _.U(590730357);
    IE = new _.U(590730358);
    JE = new _.U(590730359);
    KE = new _.U(607425748, !0);
    LE = new GA(603422363);
    Zt = new _.U(590730356);
    ME = new _.U(609118749, !0);
    NE = new _.U(564724551);
    OE = new _.U(567489814, !0);
    PE = new _.U(45415915, !0);
    QE = new _.U(613969547);
    RE = new _.U(609010285);
    mt = new _.U(582338617, !0);
    Ls = new _.U(588117531, !0);
    GF = new _.U(612823209);
    HF = new _.U(582287318, !0);
    Is = new EA(596918936, 500);
    IF = new EA(607730666);
    JF = new _.U(609053740, !0);
    KF = new _.U(612834765);
    LF = new _.U(501);
    MF = new _.U(439828594);
    NF = new _.U(483962503);
    OF = new _.U(506738118);
    bw = new _.U(77);
    cw = new _.U(78);
    PF = new _.U(83);
    dw = new _.U(80);
    aw = new _.U(76);
    QF = new _.U(84);
    RF = new _.U(1958);
    Ot = new _.U(1973);
    fw = new _.U(188);
    SF = new _.U(485990406);
    za({
        Un: 0,
        Tn: 1,
        Qn: 2,
        Ln: 3,
        Rn: 4,
        Mn: 5,
        Sn: 6,
        On: 7,
        Pn: 8,
        Kn: 9,
        Nn: 10,
        Vn: 11
    }).map(function(a) {
        return Number(a)
    });
    za({
        Xn: 0,
        Yn: 1,
        Wn: 2
    }).map(function(a) {
        return Number(a)
    });
    var TF = function(a, b) {
        this.g = og(a);
        this.A = b
    };
    TF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    TF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var UF = function(a, b) {
            return new TF(a, b)
        },
        VF = function(a) {
            this.A = a;
            this.g = 0
        };
    VF.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return this
    };
    VF.prototype.next = function() {
        for (; this.g < this.A.length;) {
            var a = this.A[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var WF = function() {
        return new VF(_.Wa.apply(0, arguments).map(og))
    };
    var XF = _.t.URL,
        YF;
    try {
        new XF("http://example.com"), YF = !0
    } catch (a) {
        YF = !1
    }
    var ZF = YF,
        $F = function(a) {
            this.g = new _.u.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.x(a.split("&"));
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c;
                var d = "";
                c = c.split("=");
                1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
                c = this.g.get(b);
                null == c && (c = [], this.g.set(b, c));
                c.push(d)
            }
        };
    $F.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    $F.prototype.getAll = function(a) {
        return [].concat(_.zi(this.g.get(a) || []))
    };
    $F.prototype.has = function(a) {
        return this.g.has(a)
    };
    $F.prototype[_.z(_.u.Symbol, "iterator")] = function() {
        return WF.apply(null, _.zi(UF(this.g, function(a) {
            var b = a[0];
            return UF(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    $F.prototype.toString = function() {
        return Hg(this)
    };
    var Hg = function(a) {
            var b = function(c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                    return {
                        "!": "%21",
                        "(": "%28",
                        ")": "%29",
                        "%20": "+",
                        "'": "%27",
                        "~": "%7E"
                    }[d]
                })
            };
            return _.z(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        bG = function(a) {
            var b = _.YA(document, "A");
            try {
                _.nb(b, Sa(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!aG.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function() {
                    return d
                }
            };
            aG.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        qg = function(a) {
            if (ZF) {
                try {
                    var b = new XF(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = aG.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                "null" == b.origin && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a);
                return b
            }
            return bG(a)
        },
        aG = new _.u.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        pg = function(a) {
            return ZF && a.searchParams ? a.searchParams : new $F(a.search)
        };
    var cG = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.dg("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var dG = function(a) {
        this.F = _.A(a)
    };
    _.T(dG, _.D);
    dG.da = [1, 2];
    var eG = function(a) {
        this.F = _.A(a)
    };
    _.T(eG, _.D);
    var Kg = Mf(eG);
    _.V = function() {
        this.M = this.M;
        this.Ca = this.Ca
    };
    _.V.prototype.M = !1;
    _.V.prototype.ya = function() {
        this.M || (this.M = !0, this.A())
    };
    _.S = function(a, b) {
        _.sp(a, _.fx(Jg, b))
    };
    _.sp = function(a, b) {
        a.M ? b() : (a.Ca || (a.Ca = []), a.Ca.push(b))
    };
    _.V.prototype.A = function() {
        if (this.Ca)
            for (; this.Ca.length;) this.Ca.shift()()
    };
    var fG = function(a, b, c, d) {
        _.V.call(this);
        this.H = b;
        this.C = c;
        this.o = d;
        this.D = new _.u.Map;
        this.J = 0;
        this.l = new _.u.Map;
        this.K = new _.u.Map;
        this.I = void 0;
        this.j = a
    };
    _.T(fG, _.V);
    fG.prototype.A = function() {
        delete this.g;
        this.D.clear();
        this.l.clear();
        this.K.clear();
        this.I && (_.eg(this.j, "message", this.I), delete this.I);
        delete this.j;
        delete this.o;
        _.V.prototype.A.call(this)
    };
    var gG = function(a) {
            if (a.g) return a.g;
            a.C && a.C(a.j) ? a.g = a.j : a.g = qB(a.j, a.H);
            var b;
            return null != (b = a.g) ? b : null
        },
        iG = function(a, b, c) {
            if (gG(a))
                if (a.g === a.j)(b = a.D.get(b)) && b(a.g, c);
                else {
                    var d = a.l.get(b);
                    if (d && d.od) {
                        hG(a);
                        var e = ++a.J;
                        a.K.set(e, {
                            Oc: d.Oc,
                            Fk: d.de(c),
                            Wl: "addEventListener" === b
                        });
                        a.g.postMessage(d.od(c, e), "*")
                    }
                }
        },
        hG = function(a) {
            a.I || (a.I = function(b) {
                try {
                    var c = a.o ? a.o(b) : void 0;
                    if (c) {
                        var d = c.Wg,
                            e = a.K.get(d);
                        if (e) {
                            e.Wl || a.K.delete(d);
                            var f;
                            null == (f = e.Oc) || f.call(e, e.Fk, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.sb(a.j, "message", a.I))
        };
    var jG = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Kg(d);
                    b.Vb({
                        zc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        kG = {
            de: function(a) {
                return a.Vb
            },
            od: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            Oc: function(a, b) {
                a({
                    zc: b
                })
            }
        },
        Wq = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new fG(a, "googlefcPresent", void 0, Og);
            this.caller.D.set("getDataWithCallback", jG);
            this.caller.l.set("getDataWithCallback", kG)
        };
    _.T(Wq, _.V);
    Wq.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    Wq.prototype.ld = function(a) {
        if (void 0 === a ? 0 : a) return !1;
        this.l || (this.g = !!gG(this.caller), this.l = !0);
        return this.g
    };
    var Uq = function(a) {
            return new _.u.Promise(function(b) {
                a.ld() && iG(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Vb: function(c) {
                        b(c.zc)
                    }
                })
            })
        },
        lG = function(a, b) {
            a.ld() && iG(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: hl(b),
                Vb: function() {}
            })
        };
    var mG = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        nG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.D = {};
            this.o = 0;
            var c;
            this.K = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.I = null != (d = b.fk) ? d : !1;
            this.j = null
        };
    _.T(nG, _.V);
    nG.prototype.A = function() {
        this.D = {};
        this.j && (_.eg(this.l, "message", this.j), delete this.j);
        delete this.D;
        delete this.l;
        delete this.g;
        _.V.prototype.A.call(this)
    };
    var pG = function(a) {
        return "function" === typeof a.l.__tcfapi || null != oG(a)
    };
    nG.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.$x(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.K && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.K));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = mG(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            qG(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    nG.prototype.removeEventListener = function(a) {
        a && a.listenerId && qG(this, "removeEventListener", null, a.listenerId)
    };
    var sG = function(a, b, c) {
            var d = void 0 === d ? "755" : d;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var e = a.publisher.restrictions[b];
                    if (void 0 !== e) {
                        e = e[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            if (0 === e) return !1;
            var f = c;
            2 === c ? (f = 0, 2 === e && (f = 1)) : 3 === c && (f = 1, 1 === e && (f = 0));
            a = 0 === f ? a.purpose && a.vendor ? (c = rG(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && rG(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? rG(a.purpose.legitimateInterests, b) && rG(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return a
        },
        rG = function(a, b) {
            return !(!a || !a[b])
        },
        qG = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (oG(a)) {
                tG(a);
                var e = ++a.o;
                a.D[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        oG = function(a) {
            if (a.g) return a.g;
            a.g = qB(a.l, "__tcfapiLocator");
            return a.g
        },
        tG = function(a) {
            a.j || (a.j = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.sb(a.l, "message", a.j))
        },
        uG = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = mG(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (ig({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        vG = function(a, b, c) {
            return !1 === a.gdprApplies ? !0 : b.every(function(d) {
                return sG(a, d, c)
            })
        };
    var wG = function(a, b, c) {
            this.g = a;
            this.l = b;
            this.A = void 0 === c ? function() {} : c
        },
        xG = function(a, b, c) {
            return new wG(a, b, c)
        };
    wG.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top) try {
            cG(this.g), yG(this, a, b)
        } catch (c) {}
    };
    var yG = function(a, b, c) {
            b = void 0 === b ? !1 : b;
            var d = {};
            try {
                var e = rg(a.g),
                    f = Gg(a.g);
                d.fc = e;
                d.fctype = f
            } catch (h) {}
            try {
                var g = Ig(a.g.location.href)
            } catch (h) {}
            b && g && (d.href = g);
            b = zG(a.l, d);
            ng(a.g, b, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            c && lG(new Wq(a.g), c)
        },
        zG = function(a, b) {
            var c = new mx(kx, "https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.rx(ux(c, {
                id: a
            }), b)
        };
    var AG = _.u.Promise;
    var BG = function(a) {
        this.A = a
    };
    BG.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    };
    BG.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    };
    var CG = function(a) {
        this.data = a
    };
    var DG = function(a) {
        this.A = a
    };
    DG.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        EG(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    };
    DG.prototype.g = function(a, b) {
        var c = this;
        return new AG(function(d) {
            c.send(a, d, b)
        })
    };
    var FG = function(a, b) {
            EG(a, b);
            return new DG(a)
        },
        EG = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new CG(c.data, FG(c.ports[0])))
            })
        };
    var al = function(a) {
            var b = a.wb,
                c = void 0 === a.Cb ? "ZNWN1d" : a.Cb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.qf ? void 0 : a.qf;
            return GG({
                destination: a.destination,
                ki: function() {
                    return b.contentWindow
                },
                Ml: HG(a.origin),
                Cb: c,
                onMessage: d,
                qf: e
            })
        },
        GG = function(a) {
            var b = a.destination,
                c = a.ki,
                d = a.Ml,
                e = void 0 === a.re ? void 0 : a.re,
                f = a.Cb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.qf ? void 0 : a.qf,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new BG(new AG(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(FG(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        HG = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var ah = function(a) {
            return "string" === typeof a
        },
        Go = function(a) {
            return "boolean" === typeof a
        },
        Xg = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a)
        },
        Gt = Zg(),
        $g = Zg();
    var IG = navigator,
        JG = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        KG = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return JG(a.toLowerCase())
        },
        LG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        MG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        NG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Gp = function() {
        this.data = [];
        this.g = -1
    };
    Gp.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.z(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    Gp.prototype.get = function(a) {
        return !!this.data[a]
    };
    var Ip = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var OG = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Vb({
                    zc: null != c ? c : void 0,
                    Oe: d ? void 0 : 2
                })
            })
        },
        PG = {
            de: function(a) {
                return a.Vb
            },
            od: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Oc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    zc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        QG = function(a, b) {
            b = void 0 === b ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new fG(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, dh);
            this.caller.D.set("getDataWithCallback", OG);
            this.caller.l.set("getDataWithCallback", PG)
        };
    _.T(QG, _.V);
    QG.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    var RG = function(a, b) {
        var c = {};
        if (gG(a.caller)) {
            var d = _.$x(function() {
                b(c)
            });
            iG(a.caller, "getDataWithCallback", {
                Vb: function(e) {
                    e.Oe || (c = e.zc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var ih = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        UG = function() {
            var a = SG;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Dg: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            TG(a, "TESTCOOKIESENABLED");
            return !0
        };
    ih.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Jo;
            d = c.tm || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Dg
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    ih.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Bx(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var TG = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Dg: 0,
            path: c,
            domain: d
        })
    };
    ih.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    ih.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Bx(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) TG(this, b[a])
    };
    var SG = new ih("undefined" == typeof document ? null : document);
    var VG = function(a, b) {
        this.g = a;
        this.options = b
    };
    var WG = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        XG = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        YG = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Vb({
                    zc: null != c ? c : void 0,
                    Oe: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        ZG = {
            de: function(a) {
                return a.listener
            },
            od: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Oc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        $G = {
            de: function(a) {
                return a.listener
            },
            od: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Oc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        aH = {
            de: function(a) {
                return a.Vb
            },
            od: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            Oc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    zc: null != (c = b.returnValue) ? c : void 0,
                    Oe: b.success ? void 0 : 2
                })
            }
        },
        bH = function(a, b) {
            var c = void 0 === b ? {} : b;
            b = c.timeoutMs;
            c = c.addListenerRemovalCallback;
            _.V.call(this);
            this.caller = new fG(a, "__gppLocator", function(d) {
                return "function" === typeof d.__gpp
            }, jh);
            this.caller.D.set("addEventListener", WG);
            this.caller.l.set("addEventListener", ZG);
            this.caller.D.set("removeEventListener", XG);
            this.caller.l.set("removeEventListener", $G);
            this.caller.D.set("getDataWithCallback", YG);
            this.caller.l.set("getDataWithCallback", aH);
            this.timeoutMs = null != b ? b : 500;
            this.addListenerRemovalCallback = c
        };
    _.T(bH, _.V);
    bH.prototype.A = function() {
        this.caller.ya();
        _.V.prototype.A.call(this)
    };
    bH.prototype.addEventListener = function(a) {
        var b = this,
            c = _.$x(function() {
                a(cH, !0)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        iG(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else Array.isArray(e.pingData.applicableSections) && 0 !== e.pingData.applicableSections.length ? h = e : (b.removeEventListener(e.listenerId), h = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    });
                    a(h, f)
                } catch (k) {
                    if (null == e ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (l) {
                        a(dH, !0);
                        return
                    }
                    a(eH, !0)
                }
            }
        })
    };
    bH.prototype.removeEventListener = function(a) {
        iG(this.caller, "removeEventListener", {
            listener: this.addListenerRemovalCallback ? function() {} : void 0,
            listenerId: a
        })
    };
    var fH = function(a) {
            if (!a) return !1;
            var b = Vf(a.split("~")[0]),
                c = Wf(b.slice(0, 6)),
                d = Wf(b.slice(6, 12)),
                e = new WB;
            var f = _.Al(e, 1, c);
            var g = _.Al(f, 2, d);
            for (var h = b.slice(12), k = Wf(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Wf(m[0]);
                m = m.slice(1);
                var r = Zf(m, h),
                    v = 0 === l.length ? 0 : l[l.length - 1],
                    w = Xf(r) + v;
                m = m.slice(r.length);
                if (p) l.push(w);
                else {
                    for (var y = Zf(m, h), B = Xf(y), C = 0; C <= B; C++) l.push(w + C);
                    m = m.slice(y.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var G = _.Le(g, 3, l, Zc);
            var F = _.z(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            for (var M = 0; M < ve(G, 3, $c, 2).length; ++M) {
                var R = ve(G, 3, $c, 2)[M],
                    N = F[M];
                switch (R) {
                    case 8:
                        if (0 === N.length) throw Error("Cannot decode empty USCA section string.");
                        var aa = N.split(".");
                        if (2 < aa.length) throw Error("Expected at most 1 sub-section but got " + (aa.length - 1) + " when decoding " + N + ".");
                        var ha = void 0,
                            la = void 0,
                            ea = void 0,
                            Pa = void 0,
                            wa = void 0,
                            Ca = void 0,
                            Na = void 0,
                            Xa = void 0,
                            fb = void 0,
                            Ua = void 0,
                            dc = void 0,
                            Ec = void 0,
                            $b = void 0,
                            kc = void 0,
                            ec = void 0,
                            fc = void 0,
                            Pc = void 0,
                            Qc = void 0,
                            qf = void 0,
                            we = void 0,
                            Md = void 0,
                            xe = void 0,
                            sg = void 0,
                            tg = aa[0];
                        if (0 === tg.length) throw Error("Cannot decode empty core segment string.");
                        var Rc = Yf(tg, dC),
                            Nd = Wf(Rc.slice(0, 6));
                        Rc = Rc.slice(6);
                        if (1 !== Nd) throw Error("Unable to decode unsupported USCA Section specification version " + Nd + " - only version 1 is supported.");
                        for (var Od = 0, bb = [], Pb = 0; Pb < cC.length; Pb++) {
                            var rf = cC[Pb];
                            bb.push(Wf(Rc.slice(Od, Od + rf)));
                            Od += rf
                        }
                        var ye = new ZB;
                        sg = _.Al(ye, 1, Nd);
                        var ug = bb.shift();
                        xe = _.K(sg, 2, ug);
                        var ld = bb.shift();
                        Md = _.K(xe, 3, ld);
                        var sf = bb.shift();
                        we = _.K(Md, 4, sf);
                        var qj = bb.shift();
                        qf = _.K(we, 5, qj);
                        var rj = bb.shift();
                        Qc = _.K(qf, 6, rj);
                        var vg = new YB,
                            Ch = bb.shift();
                        Pc = _.K(vg, 1, Ch);
                        var wg = bb.shift();
                        fc = _.K(Pc, 2, wg);
                        var Dh = bb.shift();
                        ec = _.K(fc, 3, Dh);
                        var xg = bb.shift();
                        kc = _.K(ec, 4, xg);
                        var ze = bb.shift();
                        $b = _.K(kc, 5, ze);
                        var Eh = bb.shift();
                        Ec = _.K($b, 6, Eh);
                        var Fh = bb.shift();
                        dc = _.K(Ec, 7, Fh);
                        var Gh = bb.shift();
                        Ua = _.K(dc, 8, Gh);
                        var Hh = bb.shift();
                        fb = _.K(Ua, 9, Hh);
                        Xa = _.ki(Qc, 7, fb);
                        var Ih = new XB,
                            Pd = bb.shift();
                        Na = _.K(Ih, 1, Pd);
                        var Jh = bb.shift();
                        Ca = _.K(Na, 2, Jh);
                        wa = _.ki(Xa, 8, Ca);
                        var md = bb.shift();
                        Pa = _.K(wa, 9, md);
                        var Kh = bb.shift();
                        ea = _.K(Pa, 10, Kh);
                        var tf = bb.shift();
                        la = _.K(ea, 11, tf);
                        var Fc = bb.shift();
                        var uf = ha = _.K(la, 12, Fc);
                        if (1 === aa.length) var vf = bC(uf);
                        else {
                            var Sc = bC(uf),
                                yg = void 0,
                                zg = void 0,
                                Ag = void 0,
                                wf = aa[1];
                            if (0 === wf.length) throw Error("Cannot decode empty GPC segment string.");
                            var Tc = Yf(wf, 3),
                                xf = Wf(Tc.slice(0, 2));
                            if (0 > xf || 1 < xf) throw Error("Attempting to decode unknown GPC segment subsection type " + xf + ".");
                            Ag = xf + 1;
                            var Lh = Wf(Tc.charAt(2)),
                                Ae = new $B;
                            zg = _.K(Ae, 2, Ag);
                            yg = _.zl(zg, 1, !!Lh);
                            vf = _.ki(Sc, 2, yg)
                        }
                        var nd = _.Bm(vf, ZB, 1);
                        if (1 === _.kg(nd, 5, 0) || 1 === _.kg(nd, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === N.length) throw Error("Cannot decode empty USCO section string.");
                        var od = N.split(".");
                        if (2 < od.length) throw Error("Expected at most 2 segments but got " + od.length + " when decoding " + N + ".");
                        var Qb = void 0,
                            yf = void 0,
                            Bg = void 0,
                            zf = void 0,
                            Mh = void 0,
                            Nh = void 0,
                            Be = void 0,
                            Uc = void 0,
                            Oh = void 0,
                            Ce = void 0,
                            Af = void 0,
                            Rb = void 0,
                            Ph = void 0,
                            Gc = void 0,
                            Cg = void 0,
                            Bf = void 0,
                            Dg = void 0,
                            Eg = void 0,
                            Fg = od[0];
                        if (0 === Fg.length) throw Error("Cannot decode empty core segment string.");
                        var pd = Yf(Fg, kC),
                            De = Wf(pd.slice(0, 6));
                        pd = pd.slice(6);
                        if (1 !== De) throw Error("Unable to decode unsupported USCO Section specification version " + De + " - only version 1 is supported.");
                        for (var Ee = 0, Db = [], Lg = 0; Lg < jC.length; Lg++) {
                            var Pj = jC[Lg];
                            Db.push(Wf(pd.slice(Ee, Ee + Pj)));
                            Ee += Pj
                        }
                        var Qj = new fC;
                        Eg = _.Al(Qj, 1, De);
                        var sn = Db.shift();
                        Dg = _.K(Eg, 2, sn);
                        var Rj = Db.shift();
                        Bf = _.K(Dg, 3, Rj);
                        var tn = Db.shift();
                        Cg = _.K(Bf, 4, tn);
                        var un = Db.shift();
                        Gc = _.K(Cg, 5, un);
                        var Mg = Db.shift();
                        Ph = _.K(Gc, 6, Mg);
                        var AU = new eC,
                            BU = Db.shift();
                        Rb = _.K(AU, 1, BU);
                        var CU = Db.shift();
                        Af = _.K(Rb, 2, CU);
                        var DU = Db.shift();
                        Ce = _.K(Af, 3, DU);
                        var EU = Db.shift();
                        Oh = _.K(Ce, 4, EU);
                        var FU = Db.shift();
                        Uc = _.K(Oh, 5, FU);
                        var GU = Db.shift();
                        Be = _.K(Uc, 6, GU);
                        var HU = Db.shift();
                        Nh = _.K(Be, 7, HU);
                        Mh = _.ki(Ph, 7, Nh);
                        var IU = Db.shift();
                        zf = _.K(Mh, 8, IU);
                        var JU = Db.shift();
                        Bg = _.K(zf, 9, JU);
                        var KU = Db.shift();
                        yf = _.K(Bg, 10, KU);
                        var LU = Db.shift();
                        var SE = Qb = _.K(yf, 11, LU);
                        if (1 === od.length) var TE = iC(SE);
                        else {
                            var MU = iC(SE),
                                UE = void 0,
                                VE = void 0,
                                WE = void 0,
                                XE = od[1];
                            if (0 === XE.length) throw Error("Cannot decode empty GPC segment string.");
                            var YE = Yf(XE, 3),
                                vn = Wf(YE.slice(0, 2));
                            if (0 > vn || 1 < vn) throw Error("Attempting to decode unknown GPC segment subsection type " + vn + ".");
                            WE = vn + 1;
                            var NU = Wf(YE.charAt(2)),
                                OU = new gC;
                            VE = _.K(OU, 2, WE);
                            UE = _.zl(VE, 1, !!NU);
                            TE = _.ki(MU, 2, UE)
                        }
                        var ZE = _.Bm(TE, fC, 1);
                        if (1 === _.kg(ZE, 5, 0) || 1 === _.kg(ZE, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === N.length) throw Error("Cannot decode empty usct section string.");
                        var Sj = N.split(".");
                        if (2 < Sj.length) throw Error("Expected at most 2 segments but got " + Sj.length + " when decoding " + N + ".");
                        var PU = void 0,
                            $E = void 0,
                            aF = void 0,
                            bF = void 0,
                            cF = void 0,
                            dF = void 0,
                            eF = void 0,
                            fF = void 0,
                            gF = void 0,
                            hF = void 0,
                            iF = void 0,
                            jF = void 0,
                            kF = void 0,
                            lF = void 0,
                            mF = void 0,
                            nF = void 0,
                            oF = void 0,
                            pF = void 0,
                            qF = void 0,
                            rF = void 0,
                            sF = void 0,
                            tF = void 0,
                            uF = Sj[0];
                        if (0 === uF.length) throw Error("Cannot decode empty core segment string.");
                        var wn = Yf(uF, sC),
                            Qt = Wf(wn.slice(0, 6));
                        wn = wn.slice(6);
                        if (1 !== Qt) throw Error("Unable to decode unsupported USCT Section specification version " + Qt + " - only version 1 is supported.");
                        for (var Rt = 0, Eb = [], St = 0; St < rC.length; St++) {
                            var vF = rC[St];
                            Eb.push(Wf(wn.slice(Rt, Rt + vF)));
                            Rt += vF
                        }
                        var QU = new nC;
                        tF = _.Al(QU, 1, Qt);
                        var RU = Eb.shift();
                        sF = _.K(tF, 2, RU);
                        var SU = Eb.shift();
                        rF = _.K(sF, 3, SU);
                        var TU = Eb.shift();
                        qF = _.K(rF, 4, TU);
                        var UU = Eb.shift();
                        pF = _.K(qF, 5, UU);
                        var VU = Eb.shift();
                        oF = _.K(pF, 6, VU);
                        var WU = new mC,
                            XU = Eb.shift();
                        nF = _.K(WU, 1, XU);
                        var YU = Eb.shift();
                        mF = _.K(nF, 2, YU);
                        var ZU = Eb.shift();
                        lF = _.K(mF, 3, ZU);
                        var $U = Eb.shift();
                        kF = _.K(lF, 4, $U);
                        var aV = Eb.shift();
                        jF = _.K(kF, 5, aV);
                        var bV = Eb.shift();
                        iF = _.K(jF, 6, bV);
                        var cV = Eb.shift();
                        hF = _.K(iF, 7, cV);
                        var dV = Eb.shift();
                        gF = _.K(hF, 8, dV);
                        fF = _.ki(oF, 7, gF);
                        var eV = new lC,
                            fV = Eb.shift();
                        eF = _.K(eV, 1, fV);
                        var gV = Eb.shift();
                        dF = _.K(eF, 2, gV);
                        var hV = Eb.shift();
                        cF = _.K(dF, 3, hV);
                        bF = _.ki(fF, 8, cF);
                        var iV = Eb.shift();
                        aF = _.K(bF, 9, iV);
                        var jV = Eb.shift();
                        $E = _.K(aF, 10, jV);
                        var kV = Eb.shift();
                        var wF = PU = _.K($E, 11, kV);
                        if (1 === Sj.length) var xF = qC(wF);
                        else {
                            var lV = qC(wF),
                                yF = void 0,
                                zF = void 0,
                                AF = void 0,
                                BF = Sj[1];
                            if (0 === BF.length) throw Error("Cannot decode empty GPC segment string.");
                            var CF = Yf(BF, 3),
                                xn = Wf(CF.slice(0, 2));
                            if (0 > xn || 1 < xn) throw Error("Attempting to decode unknown GPC segment subsection type " + xn + ".");
                            AF = xn + 1;
                            var mV = Wf(CF.charAt(2)),
                                nV = new oC;
                            zF = _.K(nV, 2, AF);
                            yF = _.zl(zF, 1, !!mV);
                            xF = _.ki(lV, 2, yF)
                        }
                        var DF = _.Bm(xF, nC, 1);
                        if (1 === _.kg(DF, 5, 0) || 1 === _.kg(DF, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === N.length) throw Error("Cannot decode empty USVA section string.");
                        var yn = Yf(N, wC),
                            Tt = Wf(yn.slice(0, 6));
                        yn = yn.slice(6);
                        if (1 !== Tt) throw Error("Unable to decode unsupported USVA Section specification version " + Tt + " - only version 1 is supported.");
                        for (var Ut = 0, Tb = [], Vt = 0; Vt < vC.length; Vt++) {
                            var EF = vC[Vt];
                            Tb.push(Wf(yn.slice(Ut, Ut + EF)));
                            Ut += EF
                        }
                        var oV = Tt,
                            pV = new uC,
                            qV = _.Al(pV, 1, oV),
                            rV = Tb.shift(),
                            sV = _.K(qV, 2, rV),
                            tV = Tb.shift(),
                            uV = _.K(sV, 3, tV),
                            vV = Tb.shift(),
                            wV = _.K(uV, 4, vV),
                            xV = Tb.shift(),
                            yV = _.K(wV, 5, xV),
                            zV = Tb.shift();
                        var AV = _.K(yV, 6, zV);
                        var BV = new tC,
                            CV = Tb.shift(),
                            DV = _.K(BV, 1, CV),
                            EV = Tb.shift(),
                            FV = _.K(DV, 2, EV),
                            GV = Tb.shift(),
                            HV = _.K(FV, 3, GV),
                            IV = Tb.shift(),
                            JV = _.K(HV, 4, IV),
                            KV = Tb.shift(),
                            LV = _.K(JV, 5, KV),
                            MV = Tb.shift(),
                            NV = _.K(LV, 6, MV),
                            OV = Tb.shift(),
                            PV = _.K(NV, 7, OV),
                            QV = Tb.shift();
                        var RV = _.K(PV, 8, QV);
                        var SV = _.ki(AV, 7, RV),
                            TV = Tb.shift(),
                            UV = _.K(SV, 8, TV),
                            VV = Tb.shift(),
                            WV = _.K(UV, 9, VV),
                            XV = Tb.shift(),
                            YV = _.K(WV, 10, XV),
                            ZV = Tb.shift(),
                            FF = _.K(YV, 11, ZV);
                        if (1 === _.kg(FF, 5, 0) || 1 === _.kg(FF, 6, 0)) return !0
                }
            }
            return !1
        },
        eH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        cH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        dH = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var Co = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, Co.prototype)
    };
    _.T(Co, Error);
    Co.prototype.name = "PublisherInputError";
    var gH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, gH.prototype)
    };
    _.T(gH, Error);
    gH.prototype.name = "ServerError";
    var hH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, hH.prototype)
    };
    _.T(hH, Error);
    hH.prototype.name = "NetworkError";
    var mh = function() {};
    mh.prototype.g = function() {};
    mh.prototype.l = function() {};
    mh.prototype.A = function() {
        return []
    };
    mh.prototype.j = function() {
        return []
    };
    var yh = function(a, b) {
        a.g = lh(1, b, function() {});
        a.A = function(c, d) {
            return lh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.j = function() {
            return lh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            lh(16, b, function() {})(c, 2)
        }
    };
    var wh = function() {
            this.g = function() {}
        },
        Ah = function(a, b) {
            a.g = lh(14, b, function() {})
        };
    var Hm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Sm(b.innerWidth, b.innerHeight)).round() : _.UA(b || window).round()
            } catch (d) {
                return new _.Sm(-12245933, -12245933)
            }
        },
        iH = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        cv = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || iH(a);
            return new _.Om(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        bn = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var jH = function(a) {
        this.F = _.A(a)
    };
    _.T(jH, _.D);
    jH.prototype.si = function() {
        return _.Ji(this, 1)
    };
    jH.prototype.ri = function() {
        return _.Ji(this, 2)
    };
    var eh = function(a) {
            return _.Q(a, 5)
        },
        kH = function(a, b) {
            ai(a, 13, b)
        },
        lH = function(a, b) {
            ai(a, 12, b)
        },
        mH = function(a, b) {
            return _.Le(a, 10, b, _.gd)
        },
        nH = function(a, b) {
            return ti(a, 11, b)
        };
    jH.prototype.ni = function() {
        return _.Ji(this, 11)
    };
    jH.da = [10];
    var pH, qH, rH;
    _.oH = function(a) {
        this.g = a;
        this.A = 0
    };
    pH = function(a, b) {
        if (0 === a.A) {
            if (_.Rn(a, "__gads", b)) b = !0;
            else {
                var c = a.g;
                eh(b) && "null" !== c.origin && (new ih(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === hh("GoogleAdServingTest", b, a.g)) {
                    var d = a.g;
                    eh(b) && "null" !== d.origin && TG(new ih(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.Rn = function(a, b, c) {
        return c ? hh(b, c, a.g) : null
    };
    qH = function(a, b, c, d) {
        if (d) {
            var e = _.Ng(c, 2) - Date.now() / 1E3;
            e = {
                Dg: Math.max(e, 0),
                path: _.I(c, 3),
                domain: _.I(c, 4),
                tm: !1
            };
            c = c.getValue();
            a = a.g;
            eh(d) && "null" !== a.origin && (new ih(a.document)).set(b, c, e)
        }
    };
    rH = function(a, b, c) {
        if (c && hh(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.x(d);
            for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, eh(c) && "null" !== f.origin && TG(new ih(f.document), e, "/", g)
        }
    };
    var sH = {},
        tH = (sH[3] = hb(nx(new mx(kx, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), sH);
    ({})[3] = hb(nx(new mx(kx, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var uH = function(a) {
            this.g = a;
            this.A = LA()
        },
        vH = function(a) {
            var b = {};
            _.hx(a, function(c) {
                b[c.g] = c.A
            });
            return b
        };
    _.wH = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var xH = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.Cb = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.H = d;
        this.Zd = !!e;
        this.D = Math.random();
        this.I = {};
        this.g = null;
        this.K = (0, _.ex)(this.C, this);
        this.U = f
    };
    _.T(xH, _.V);
    xH.prototype.C = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.Zd && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ka(b) && (a = b.i, b.c === this.Cb && a != this.D)) {
                if (2 !== this.status) try {
                    this.status = 2, yH(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ka(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var yH = function(a) {
        var b = {};
        b.c = a.Cb;
        b.i = a.D;
        a.U && (b.e = a.U);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    xH.prototype.o = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && yH(this)
            } catch (a) {}
            window.setTimeout((0, _.ex)(this.o, this), 50)
        }
    };
    xH.prototype.connect = function(a) {
        a && (this.g = a);
        _.sb(window, "message", this.K);
        this.H && this.o()
    };
    var zH = function(a, b, c) {
        a.I[b] = c
    };
    xH.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Cb;
        c.i = this.D;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    xH.prototype.A = function() {
        this.status = 3;
        _.eg(window, "message", this.K);
        _.V.prototype.A.call(this)
    };
    var AH = new _.u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        BH = new _.u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var CH = function(a) {
        this.F = _.A(a)
    };
    _.T(CH, _.D);
    var DH = Mf(CH);
    var EH = function(a) {
        this.F = _.A(a)
    };
    _.T(EH, _.D);
    var FH = function(a) {
        this.F = _.A(a)
    };
    _.T(FH, _.D);
    var GH, HH, IH, JH;
    _.Wr = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    GH = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    HH = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    IH = function(a, b) {
        if (3 == _.Wr(b)) return !1;
        a();
        return !0
    };
    JH = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!IH(a, b))
            if (c) {
                var d = function() {
                    _.eg(b, "prerenderingchange", d);
                    a()
                };
                _.sb(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = GH(b),
                    g = function() {
                        !e && IH(a, b) && (e = !0, _.eg(b, f, g))
                    };
                f && _.sb(b, f, g)
            }
    };
    _.Qh = function() {
        var a = this;
        this.promise = new _.u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.KH = function() {
        this.g = Math.random()
    };
    _.gj = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.HC) var f = c;
            else f = new _.HC, _.Kn(c, function(h, k) {
                var l = f,
                    m = l.j++;
                h = _.IC(k, h);
                l.g.push(m);
                l.A[m] = h
            });
            var g = MC(f, "/pagead/gen_204?id=" + b + "&");
            g && NC(_.t, g)
        } catch (h) {}
    };
    var Gi = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        Ei = new _.u.Map;
    var LH = function(a) {
        this.F = _.A(a)
    };
    _.T(LH, _.D);
    var MH = function(a) {
        this.F = _.A(a)
    };
    _.T(MH, _.D);
    var NH = function(a, b) {
        return _.Le(a, 1, b, _.vd)
    };
    MH.da = [1];
    var OH = function(a) {
        this.F = _.A(a)
    };
    _.T(OH, _.D);
    var PH = function(a, b) {
        return _.Le(a, 1, b, ad)
    };
    OH.da = [1, 2];
    var QH = function(a) {
        this.F = _.A(a)
    };
    _.T(QH, _.D);
    var RH = function(a) {
        this.F = _.A(a)
    };
    _.T(RH, _.D);
    var SH = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, SH.prototype);
        this.name = "InputError"
    };
    _.T(SH, Error);
    var TH = function() {
            this.jb = !1
        },
        UH = function() {
            TH.apply(this, arguments);
            this.yd = new _.Qh
        };
    _.T(UH, TH);
    var VH = function(a, b) {
        a.jb || (a.jb = !0, a.je = b, a.yd.resolve(b))
    };
    _.ww.Object.defineProperties(UH.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.yd.promise
            }
        },
        Tc: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.jb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ie
            }
        }
    });
    var fq = function() {
        UH.apply(this, arguments)
    };
    _.T(fq, UH);
    _.q = fq.prototype;
    _.q.G = function(a) {
        VH(this, a)
    };
    _.q.Ha = function(a) {
        VH(this, null != a ? a : null)
    };
    _.q.ba = function() {
        VH(this, null)
    };
    _.q.La = function(a) {
        var b = this;
        a.then(function(c) {
            VH(b, c)
        })
    };
    _.q.lb = function(a) {
        this.jb || (this.jb = !0, this.je = null, this.ie = a, this.yd.reject(a))
    };
    var WH = function() {
        UH.apply(this, arguments)
    };
    _.T(WH, UH);
    WH.prototype.G = function(a) {
        VH(this, a)
    };
    WH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void VH(b, c)
        })
    };
    WH.prototype.lb = function(a) {
        this.jb || (this.jb = !0, this.ie = a, this.yd.reject(a))
    };
    var XH = function() {
        WH.apply(this, arguments)
    };
    _.T(XH, WH);
    XH.prototype.Ha = function(a) {
        VH(this, null != a ? a : null)
    };
    XH.prototype.ba = function() {
        VH(this, null)
    };
    XH.prototype.La = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ha(c)
        })
    };
    var YH = function(a) {
        this.jb = !1;
        this.bc = a
    };
    _.T(YH, TH);
    YH.prototype.Tc = function() {
        return this.bc.jb
    };
    YH.prototype.rg = function() {
        return null != this.bc.je
    };
    _.ww.Object.defineProperties(YH.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bc.ie
            }
        }
    });
    var ZH = function(a) {
        YH.call(this, a);
        this.bc = a
    };
    _.T(ZH, YH);
    _.ww.Object.defineProperties(ZH.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bc.je
            }
        }
    });
    var $H = function(a) {
        YH.call(this, a);
        this.bc = a
    };
    _.T($H, YH);
    _.ww.Object.defineProperties($H.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.bc.je) ? a : null
            }
        }
    });
    var aI = function() {
        YH.apply(this, arguments)
    };
    _.T(aI, YH);
    _.ww.Object.defineProperties(aI.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.bc.je) ? a : null
            }
        }
    });
    var Xr = function() {
        UH.apply(this, arguments)
    };
    _.T(Xr, UH);
    Xr.prototype.notify = function() {
        VH(this, null)
    };
    var bI = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        cI = function(a, b) {
            b = void 0 === b ? !1 : b;
            UH.call(this);
            var c = this;
            a = a.map(function(d) {
                return d.promise.then(function(e) {
                    if (b || null != e) return e;
                    throw e;
                }, function(e) {
                    c.jb = !0;
                    c.ie = e;
                    c.yd.reject(e);
                    return null
                })
            });
            _.z(_.u.Promise, "any").call(_.u.Promise, a).then(function(d) {
                c.jb || VH(c, d)
            }, function() {
                c.jb || VH(c, null)
            })
        };
    _.T(cI, UH);
    var dI = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    _.T(dI, _.V);
    var eI = function(a, b, c) {
        a.j.push({
            Nd: void 0 === c ? !1 : c,
            Wh: b
        })
    };
    dI.prototype.A = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        _.V.prototype.A.call(this)
    };
    var fI = function(a, b, c) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.ia = c;
        this.started = !1;
        this.D = new dI;
        _.S(this, this.D)
    };
    _.T(fI, _.V);
    fI.prototype.start = function() {
        var a = this,
            b;
        return _.ub(function(c) {
            if (1 == c.g) {
                if (a.started) return c.return();
                a.started = !0;
                c.l = 2;
                return c.yield(Mi(a.D.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.M) {
                    for (var d = 0, e = _.x(a.D.l), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.rg()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.g()
                }
                c.g = 0;
                c.l = 0
            } else {
                b = wb(c);
                if (a.M) return c.return();
                b instanceof SH ? a.K(b) : b instanceof Error && (a.ia ? a.ia(a.id, b) : a.I(b), a.l(b));
                c.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = void 0 === b ? new fq : b;
            a.D.g.push(b);
            return b
        },
        gI = function(a) {
            var b = void 0 === b ? new XH : b;
            a.D.g.push(b);
            return b
        },
        hI = function(a, b) {
            b = void 0 === b ? new Xr : b;
            a.D.g.push(b);
            return b
        },
        X = function(a, b) {
            eI(a.D, b);
            b = new ZH(b);
            a.D.l.push(b);
            return b
        },
        Y = function(a, b) {
            eI(a.D, b);
            return new $H(b)
        },
        iI = function(a, b) {
            eI(a.D, b, !0);
            return new $H(b)
        },
        jI = function(a, b) {
            eI(a.D, b)
        },
        kI = function(a, b) {
            b = new cI(b);
            eI(a.D, b);
            b = new ZH(b);
            a.D.l.push(b);
            return b
        };
    fI.prototype.K = function() {};
    fI.prototype.l = function(a) {
        if (!this.ia && this.D.g.length) {
            a = new SH(a.message);
            for (var b = _.x(this.D.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Tc) {
                    var d = a;
                    c.jb = !0;
                    c.ie = d;
                    c.yd.reject(d)
                }
        }
    };
    var lI = function(a, b, c, d, e, f) {
        fI.call(this, a, e, f);
        this.f = b;
        this.C = d;
        a = {};
        c = _.x(_.z(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.x(b.value), b = d.next().value, (d = d.next().value) && (a[b] = Y(this, d));
        this.o = a
    };
    _.T(lI, fI);
    lI.prototype.g = function() {
        for (var a = this.f, b = {}, c = _.x(_.z(Object, "entries").call(Object, this.o)), d = c.next(); !d.done; d = c.next()) {
            var e = _.x(d.value);
            d = e.next().value;
            e = e.next().value;
            b[d] = e.value
        }
        a = a.call(this, b, this.C);
        this.j(a)
    };
    lI.prototype.I = function() {};
    var Yq = function(a, b, c, d, e, f) {
        lI.call(this, a, b, c, d, e, f);
        this.output = W(this, new fq)
    };
    _.T(Yq, lI);
    Yq.prototype.j = function(a) {
        this.output.La(a)
    };
    var mI = function(a, b, c, d, e, f, g) {
        lI.call(this, a, b, c, d, f, g);
        this.finished = new Xr;
        a = _.z(Object, "keys").call(Object, e);
        a = _.x(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.T(mI, lI);
    mI.prototype.j = function(a) {
        a = _.x(_.z(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.x(b.value);
            b = c.next().value;
            c = c.next().value;
            VH(this[b], c)
        }
        this.finished.notify()
    };
    var nI = function(a) {
        this.g = void 0 === a ? function() {} : a
    };
    var tk = function(a) {
        a = void 0 === a ? new nI : a;
        _.V.call(this);
        this.C = a;
        this.D = [];
        this.I = [];
        this.H = {};
        this.l = [];
        this.j = new _.Qh;
        this.g = {}
    };
    _.T(tk, _.V);
    var J = function(a, b) {
            _.S(a, b);
            a.D.push(b);
            return b
        },
        Nk = function(a, b) {
            b = _.x(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        oI = function(a, b, c, d, e, f) {
            b = new mI(b, c, d, e, f, void 0, a.C.g);
            return J(a, b)
        },
        ru = function(a, b) {
            a.I.push(b);
            _.S(a, b)
        },
        Ck = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.ub(function(r) {
                switch (r.g) {
                    case 1:
                        if (!a.l.length) {
                            r.g = 2;
                            break
                        }
                        return r.yield(_.u.Promise.all(a.l.map(function(v) {
                            return v.j.promise
                        })), 2);
                    case 2:
                        b = _.x(a.D);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = _.x(a.I);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, Ck(g);
                        if (!a.g) {
                            r.g = 4;
                            break
                        }
                        h = _.z(Object, "keys").call(Object, a.g);
                        if (!h.length) {
                            r.g = 4;
                            break
                        }
                        return r.yield(_.u.Promise.all(_.z(Object, "values").call(Object, a.g).map(function(v) {
                            return v.promise
                        })), 6);
                    case 6:
                        for (k = r.A, l = 0, m = _.x(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.H[p] = k[l++];
                    case 4:
                        return a.j.resolve(a.H), r.return(a.j.promise)
                }
            })
        };
    tk.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.D.length = 0;
        this.I.length = 0;
        this.l.length = 0
    };
    var pI = function(a) {
        this.F = _.A(a)
    };
    _.T(pI, _.D);
    pI.da = [1];
    var qI = [0, pz, Xz];
    var rI = function(a) {
        this.F = _.A(a)
    };
    _.T(rI, _.D);
    rI.da = [1, 2];
    rI.prototype.g = Lf([0, pz, Xz, pz, qI]);
    _.Aq = 728 * 1.38;
    var tI, sI;
    tI = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new sI;
        this.sideRailProcessedFixedElements = new _.u.Set;
        this.sideRailAvailableSpace = new _.u.Map;
        this.sideRailPlasParam = new _.u.Map;
        this.A = [];
        this.g = null
    };
    _.Fj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.u.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.u.Map)) : a.google_reactive_ads_global_state = new tI;
        return a.google_reactive_ads_global_state
    };
    sI = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var xI, zI, vI;
    _.uI = function(a) {
        this.g = _.Fj(a).floatingAdsStacking
    };
    _.wI = function(a, b) {
        return new vI(a, b)
    };
    xI = function(a) {
        a = _.hB(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.yI = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(xI(a))
    };
    zI = function(a) {
        var b = xI(a);
        _.hx(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    vI = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    };
    _.AI = function(a) {
        if (null == a.g) {
            var b = a.A,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            zI(b);
            a.g = d
        }
    };
    _.BI = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            zI(b);
            a.g = null
        }
    };
    var bj, CI;
    _.ej = function(a, b) {
        b = void 0 === b ? {} : b;
        this.pa = a;
        this.Fa = b
    };
    _.DI = function(a, b) {
        var c = Zi(a.pa.document, b);
        if (c) {
            var d;
            if (!(d = CI(a, c, b))) a: {
                d = a.pa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = CI(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    };
    bj = function(a, b) {
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.DI(a, c.value)) return c;
        return null
    };
    CI = function(a, b, c) {
        if ("fixed" !== NB(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Qm(_.SB, b).width && 1 >= _.Qm(_.SB, b).height || a.Fa.Ok && !a.Fa.Ok(b) ? !0 : !1;
        a.Fa.ei && a.Fa.ei(b, c, d);
        return d ? null : b
    };
    var aj = 90 * 1.38;
    var EI, FI, GI;
    EI = _.Bw(["* { pointer-events: none; }"]);
    FI = function(a, b) {
        var c = _.dg("STYLE", a);
        c.textContent = _.Mx(new _.Lx(EI[0], Kx));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.HI = function(a, b, c) {
        if (!a.body) return null;
        var d = new GI;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && FI(b.document, e);
            _.KB(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.M
            });
            b.scrollTo(0, d.A)
        }
    };
    GI = function() {
        this.g = this.M = this.j = this.l = null;
        this.A = 0
    };
    GI.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.M = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Wi(b);
        _.KB(a.body, "top", -this.A + "px")
    };
    var rr = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    rr.prototype.send = function(a, b) {
        var c = a.xm,
            d = this.A++;
        b = _.Al(b, 1, d);
        c.call(a, b)
    };
    _.ww.Object.defineProperties(rr.prototype, {
        ag: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var xq;
    xq = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    _.II = function(a, b) {
        return 0 >= b || null == a || !xq(a) ? null : vj(a, b)
    };
    var Oj = ["auto", "inherit", "100%"],
        Tj = Oj.concat(["none"]);
    var JI = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var KI = function(a, b, c, d, e, f) {
            this.l = _.EB(a);
            this.A = _.EB(b);
            this.j = c;
            this.g = _.EB(d);
            this.M = e;
            this.D = f
        },
        LI = function(a) {
            return JSON.stringify({
                windowCoords_t: a.l.top,
                windowCoords_r: a.l.right,
                windowCoords_b: a.l.bottom,
                windowCoords_l: a.l.left,
                frameCoords_t: a.A.top,
                frameCoords_r: a.A.right,
                frameCoords_b: a.A.bottom,
                frameCoords_l: a.A.left,
                styleZIndex: a.j,
                allowedExpansion_t: a.g.top,
                allowedExpansion_r: a.g.right,
                allowedExpansion_b: a.g.bottom,
                allowedExpansion_l: a.g.left,
                xInView: a.M,
                yInView: a.D
            })
        },
        MI = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.DB(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = PB(a);
            d = _.Qm(_.SB, a);
            var e = new FB(c.x, c.y, d.width, d.height);
            c = GB(e);
            d = String(NB(a, "zIndex"));
            var f = new _.DB(0, Infinity, Infinity, 0);
            for (var g = mg(a), h = g.g.body, k = g.g.documentElement, l = VA(g.g); a = OB(a);)
                if (!(_.gy && 0 == a.clientWidth || jy && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != NB(a, "overflow")) {
                    var m = PB(a),
                        n = new _.Om(a.clientLeft, a.clientTop);
                    m.x += n.x;
                    m.y += n.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.g;
            g = _.UA(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new FB(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? HB(e, f) : null;
            g = a = 0;
            l && !(new _.Sm(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.DB(0, 0, 0, 0);
            if (h = f)(e = HB(e, f)) ? (k = GB(f), m = GB(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.DB(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new KI(b, c, d, l, a, g)
        };
    var NI = function(a) {
        this.M = a;
        this.j = null;
        this.C = this.status = 0;
        this.A = null;
        this.Cb = "sfchannel" + a
    };
    NI.prototype.yg = function() {
        return 2 == this.C
    };
    var OI = function(a) {
        this.g = a
    };
    OI.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    };
    var PI = function(a, b) {
        this.Qe = a;
        this.Re = b;
        this.A = this.g = !1
    };
    var QI = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.Zd = g;
        this.hostpageLibraryTokens = h;
        this.U = ""
    };
    var RI = function(a, b) {
        this.A = a;
        this.U = b
    };
    RI.prototype.g = function(a) {
        this.U && a && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var SI = function(a, b, c) {
        RI.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(SI, RI);
    SI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var TI = function(a, b, c, d) {
        RI.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.T(TI, RI);
    TI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    };
    var UI = function(a, b, c) {
        RI.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(UI, RI);
    UI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var VI = function(a, b, c, d) {
        RI.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.T(VI, RI);
    VI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var WI = function(a, b) {
        RI.call(this, a, void 0 === b ? "" : b)
    };
    _.T(WI, RI);
    WI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A
        })
    };
    var XI = function(a, b, c) {
        RI.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.T(XI, RI);
    XI.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: LI(this.j)
        };
        return RI.prototype.g.call(this, a)
    };
    var YI = function(a, b, c, d, e, f) {
        XI.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.T(YI, XI);
    YI.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: LI(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.U && (a.sentinel = this.U);
        return JSON.stringify(a)
    };
    var ZI = function(a, b, c, d) {
        RI.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(ZI, RI);
    ZI.prototype.g = function() {
        return RI.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var $I = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        rl(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var aJ, dJ, eJ, cJ;
    aJ = function() {
        this.g = []
    };
    _.bJ = function(a) {
        return a + "px"
    };
    dJ = function(a, b, c, d, e) {
        a.g.push(new cJ(b, c, d, e))
    };
    eJ = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.j), c.M)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    };
    cJ = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.M = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var fJ, gJ;
    fJ = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    gJ = function() {
        var a = window,
            b = _.ag(a);
        b && fJ({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.hJ = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.ag(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && fJ(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.ag() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var mJ = function(a) {
        NI.call(this, a.uniqueId);
        var b = this;
        this.I = a.V;
        this.o = 1 === a.size;
        this.P = new PI(a.permissions.Qe && !this.o, a.permissions.Re && !this.o);
        this.D = a.Vg;
        var c;
        this.Ma = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.xa = "file:" == c ? "*" : c + "//" + d;
        this.eb = !!a.Zd;
        this.W = a.lj ? "//" + a.lj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.wb ? "*" : "https:" + this.W;
        this.la = iJ(a);
        this.l = new aJ;
        jJ(this, a.Vg, a.size);
        this.j = this.ga = MI(a.Vg);
        this.J = a.sm || "1-0-40";
        var e;
        this.ra = null != (e = a.mk) ? e : "";
        kJ(this, a);
        this.Ca = _.hJ(412, function() {
            return lJ(b)
        }, a.ub);
        this.H = -1;
        this.K = 0;
        var f = _.hJ(415, function() {
            b.g && (b.g.name = "", a.Ui && a.Ui(), _.eg(b.g, "load", f))
        }, a.ub);
        _.sb(this.g, "load", f);
        this.ug = _.hJ(413, this.ug, a.ub);
        this.ah = _.hJ(417, this.ah, a.ub);
        this.gh = _.hJ(419, this.gh, a.ub);
        this.lg = _.hJ(411, this.lg, a.ub);
        this.Wf = _.hJ(409, this.Wf, a.ub);
        this.ia = _.hJ(410, this.ia, a.ub);
        this.Og = _.hJ(416, this.Og, a.ub);
        this.A = new xH(this.Cb, this.g.contentWindow, this.ua, !1);
        zH(this.A, "init_done", (0, _.ex)(this.ug, this));
        zH(this.A, "register_done", (0, _.ex)(this.ah, this));
        zH(this.A, "report_error", (0, _.ex)(this.gh, this));
        zH(this.A, "expand_request", (0, _.ex)(this.lg, this));
        zH(this.A, "collapse_request", (0, _.ex)(this.Wf, this));
        zH(this.A, "creative_geometry_update", (0, _.ex)(this.ia, this));
        this.A.connect((0, _.ex)(this.Og, this))
    };
    _.T(mJ, NI);
    var jJ = function(a, b, c) {
            a.o ? (b.style.width = _.RB("100%", !0), b.style.height = _.RB("auto", !0)) : (b.style.width = _.RB(c.width, !0), b.style.height = _.RB(c.height, !0))
        },
        kJ = function(a, b) {
            var c = b.wb,
                d = b.content,
                e = b.Xd,
                f = b.size,
                g = void 0 === b.Yd ? "3rd party ad content" : b.Yd,
                h = b.Te;
            b = b.Of;
            var k = {
                shared: {
                    sf_ver: a.J,
                    ck_on: UG() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.J + ";" + d.length + ";" + d;
            k = new QI(a.M, a.xa, a.ga, a.P, new OI(k), a.o, a.eb, a.Ma);
            var l = {};
            l.uid = k.g;
            l.hostPeerName = k.A;
            l.initialGeometry = LI(k.l);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.Qe,
                expandByPush: m.Re,
                readCookie: m.g,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.g), l.reportCreativeGeometry = k.j, l.isDifferentSourceWindow = k.Zd, l.goog_safeframe_hlt = vH(k.hostpageLibraryTokens), l);
            k.U && (l.sentinel = k.U);
            k = JSON.stringify(l);
            l = f.width;
            f = f.height;
            a.o && (f = l = 0);
            m = {};
            e = (m.id = e, m.title = g, m.name = d + k, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(f), m["data-is-safeframe"] = "true", m);
            void 0 === c && (g = a.ra, f = a.W, d = a.J, (k = g) && (k = "?" + k), f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + k), (d = $I(_.WA(_.QA(a.D)))) && (f += (g ? "&" : "?") + "n=" + d), e.src = "https:" + f);
            null !== a.la && (e.sandbox = a.la);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.g = c, SA(a.g, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Da(c, e), h = _.dg("IFRAME"), SA(h, c), a.g = h);
            a.o && (a.g.style.minWidth = "100%");
            a.D.appendChild(a.g)
        };
    _.q = mJ.prototype;
    _.q.Og = function() {
        _.sb(window, "resize", this.Ca);
        _.sb(window, "scroll", this.Ca)
    };
    _.q.ug = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new SI(b.uid, b.version, b.sentinel);
            if (this.M !== c.A || this.J !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.ah = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.M !== (new TI(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.gh = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new UI(b.uid, b.description, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.lg = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new VI(b.uid, new _.DB(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.Re || !c.push && this.P.Qe) {
                var e = c.l,
                    f = c.push,
                    g = this.j = MI(this.g);
                if (e.top <= g.g.top && e.right <= g.g.right && e.bottom <= g.g.bottom && e.left <= g.g.left) {
                    if (!f)
                        for (var h = this.g.parentNode; h && h.style; h = h.parentNode) dJ(this.l, h, "overflowX", "visible", "important"), dJ(this.l, h, "overflowY", "visible", "important");
                    var k = GB(new FB(0, 0, this.j.A.getWidth(), this.j.A.getHeight()));
                    _.ka(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    dJ(this.l, this.D, "position", "relative");
                    dJ(this.l, this.g, "position", "absolute");
                    if (f) {
                        var l = this.l,
                            m = this.D,
                            n = k.getWidth();
                        dJ(l, m, "width", _.bJ(n));
                        var p = this.l,
                            r = this.D,
                            v = k.getHeight();
                        dJ(p, r, "height", _.bJ(v))
                    } else dJ(this.l, this.g, "zIndex", "10000");
                    var w = this.l,
                        y = this.g,
                        B = k.getWidth();
                    dJ(w, y, "width", _.bJ(B));
                    var C = this.l,
                        G = this.g,
                        F = k.getHeight();
                    dJ(C, G, "height", _.bJ(F));
                    dJ(this.l, this.g, "left", _.bJ(k.left));
                    dJ(this.l, this.g, "top", _.bJ(k.top));
                    this.C = 2;
                    this.j = MI(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.A.send("expand_response", (new YI(this.M, a, this.j, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var M;
            null == (M = this.I) || M.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    };
    _.q.Wf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.yg()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.M !== (new WI(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            eJ(this.l);
            this.C = 0;
            this.g && (this.j = MI(this.g));
            this.A.send("collapse_response", (new XI(this.M, this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var lJ = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.K) {
            case 0:
                nJ(a);
                a.H = window.setTimeout((0, _.ex)(a.fa, a), 1E3);
                a.K = 1;
                break;
            case 1:
                a.K = 2;
                break;
            case 2:
                a.K = 2
        }
    };
    mJ.prototype.ia = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !Xj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new ZI(b.uid, b.width, b.height, b.sentinel);
            if (this.M !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.o) d !== this.g.height && (this.g.height = d, lJ(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    mJ.prototype.fa = function() {
        if (1 == this.status || 2 == this.status) switch (this.K) {
            case 1:
                this.K = 0;
                break;
            case 2:
                nJ(this), this.H = window.setTimeout((0, _.ex)(this.fa, this), 1E3), this.K = 1
        }
    };
    var nJ = function(a) {
            a.j = MI(a.g);
            a.A.send("geometry_update", (new XI(a.M, a.j)).g())
        },
        iJ = function(a) {
            var b = null;
            a.nj && (b = a.nj);
            return null == b ? null : b.join(" ")
        },
        oJ = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        pJ = ["allow-top-navigation"],
        qJ = ["allow-same-origin"],
        rJ = oB([].concat(_.zi(oJ), _.zi(pJ)));
    oB([].concat(_.zi(oJ), _.zi(qJ)));
    oB([].concat(_.zi(oJ), _.zi(pJ), _.zi(qJ)));
    var sJ = _.Bw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        tJ = {
            Bl: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Ff) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Ff)) throw new RangeError("Invalid subdomain: " + a.Ff);
                return hb("https://" + a.Ff + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Lo: function(a) {
                return _.ib(sJ, a)
            }
        };
    var uJ = function() {};
    uJ.g = function() {
        throw Error("Must be overridden");
    };
    var bk = function() {
        this.g = 0
    };
    _.T(bk, uJ);
    bk.Lc = void 0;
    bk.g = function() {
        return bk.Lc ? bk.Lc : bk.Lc = new bk
    };
    var vJ = function() {
            this.cache = {}
        },
        lk = function() {
            wJ || (wJ = new vJ);
            return wJ
        },
        mk = function(a) {
            var b = sd(_.hi(a, 3));
            if (!b) return 3;
            if (void 0 === ik(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    vJ.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Yc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            dk(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Yc: null,
                success: !1
            }
        }
        if (!c) return {
            Yc: null,
            success: !0
        };
        try {
            var e = kA(c);
            this.cache[a] = e;
            return {
                Yc: e,
                success: !0
            }
        } catch (g) {
            var f;
            dk(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Yc: null,
                success: !1
            }
        }
    };
    vJ.prototype.set = function(a, b) {
        var c = ik(a, 1),
            d = "_GESPSK-" + c;
        jA(a);
        try {
            b.setItem(d, hl(a))
        } catch (f) {
            var e;
            dk(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var wJ = null;
    var xJ = function(a, b) {
        fI.call(this, a);
        this.id = a;
        this.C = b
    };
    _.T(xJ, fI);
    xJ.prototype.I = function(a) {
        this.C(this.id, a)
    };
    var vk = function(a, b, c, d) {
        xJ.call(this, 1041, d);
        this.j = b;
        this.H = X(this, a);
        c && (this.o = Y(this, c))
    };
    _.T(vk, xJ);
    vk.prototype.g = function() {
        var a = this.H.value,
            b, c, d = null != (c = this.j) ? c : null == (b = this.o) ? void 0 : b.value;
        d && lk().set(a, d) && _.Ji(a, 2) && dk(27, ik(a, 1))
    };
    var xk = function(a, b) {
        xJ.call(this, 1048, b);
        this.j = W(this);
        this.o = W(this);
        this.H = X(this, a)
    };
    _.T(xk, xJ);
    xk.prototype.g = function() {
        var a = this.H.value,
            b = function(c) {
                var d = {};
                dk(c, ik(a, 1), null, (d.tic = String(Math.round((Date.now() - sd(_.hi(a, 3))) / 6E4)), d))
            };
        switch (mk(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.G(a);
                break;
            case 2:
                b(26);
                this.j.G(a);
                break;
            case 3:
                dk(9, ik(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var yJ = function(a, b) {
        xJ.call(this, 1094, b);
        this.j = hI(this);
        this.o = X(this, a)
    };
    _.T(yJ, xJ);
    yJ.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.x(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            wJ = new vJ;
            this.j.notify()
        }
    };
    var Mk = function(a, b, c) {
        xJ.call(this, 1049, c);
        this.j = b;
        jI(this, a)
    };
    _.T(Mk, xJ);
    Mk.prototype.g = function() {
        for (var a = _.x(fk(this.j)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = lk().get(b, this.j).Yc;
            if (c) {
                var d = mk(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = lk(),
                        f = this.j;
                    c = ik(c, 1);
                    try {
                        f.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (g) {
                        dk(8, c, null == (d = g) ? void 0 : d.message)
                    }
                    dk(40, b)
                }
            }
        }
    };
    var uk = function(a, b, c) {
        xJ.call(this, 1027, c);
        this.Ie = a;
        this.H = b;
        this.j = W(this);
        this.o = W(this)
    };
    _.T(uk, xJ);
    uk.prototype.g = function() {
        var a = lk().get(this.Ie, this.H).Yc;
        a || (a = jA(iA(this.Ie)), this.o.G(a.lb(ok(100))));
        this.j.G(a)
    };
    var sk = {
        sh: !1
    };
    var Qk = function(a, b) {
        xJ.call(this, 1036, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(Qk, xJ);
    Qk.prototype.g = function() {
        var a = this.o.value;
        0 !== mk(a) && this.j.G(a)
    };
    var Bk = function(a, b, c) {
        xJ.call(this, 1046, c);
        this.output = hI(this);
        this.j = W(this);
        this.o = X(this, b);
        jI(this, a)
    };
    _.T(Bk, xJ);
    Bk.prototype.g = function() {
        this.j.G(this.o.value)
    };
    var yk = function(a, b, c) {
        xJ.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.o = W(this);
        this.H = W(this);
        this.J = X(this, b)
    };
    _.T(yk, xJ);
    yk.prototype.g = function() {
        var a = this,
            b = this.J.value,
            c = ik(b, 1);
        dk(18, c);
        try {
            var d = _.$f();
            this.collectorFunction().then(function(e) {
                dk(29, c, null, {
                    delta: String(_.$f() - d)
                });
                a.j.G(ti(b, 2, e));
                a.H.Ha(e)
            }).catch(function(e) {
                dk(28, c, rk(e));
                a.o.G(b.lb(ok(106)))
            })
        } catch (e) {
            dk(1, c, rk(e)), this.o.G(b.lb(ok(107)))
        }
    };
    var wk = function(a, b) {
        xJ.call(this, 1028, b);
        this.j = W(this);
        this.o = X(this, a)
    };
    _.T(wk, xJ);
    wk.prototype.g = function() {
        var a = this.o.value,
            b = ik(a, 1);
        null != sd(_.hi(a, 3)) || dk(35, b);
        this.j.G(a)
    };
    var zk = function(a, b, c, d, e) {
        xJ.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = W(this);
        this.o = X(this, a);
        this.P = Y(this, b)
    };
    _.T(zk, xJ);
    zk.prototype.g = function() {
        var a = this.o.value,
            b = ik(a, 1),
            c = this.P.value;
        if (null == c) dk(41, b), a.lb(ok(111)), this.j.G(a);
        else if ("string" !== typeof c) dk(21, b), this.j.G(a.lb(ok(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                dk(12, b, null, (d.sl = String(c.length), d));
                b = a.lb(ok(108));
                _.nk(b, 2)
            } else c.length || dk(20, b), _.nk(a, 10);
            this.j.G(a)
        }
    };
    var Ak = function(a) {
        xJ.call(this, 1046, a);
        this.output = hI(this)
    };
    _.T(Ak, xJ);
    Ak.prototype.g = function() {
        var a = this;
        ek().then(function() {
            a.output.notify()
        })
    };
    var zJ = function(a, b, c, d, e) {
        e = void 0 === e ? sk : e;
        xJ.call(this, 1059, d);
        this.P = b;
        this.J = c;
        this.o = e;
        this.j = W(this);
        this.W = X(this, a);
        this.H = Y(this, c)
    };
    _.T(zJ, xJ);
    zJ.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.W.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            dk(42, b, null, (c.ea = String(Number(this.P)), c));
            this.j.La(Dk(b, d, a, this.J, this.C, this.o))
        }
    };
    var AJ = function(a, b) {
        xJ.call(this, 1057, b);
        this.j = a;
        this.o = W(this);
        this.H = W(this)
    };
    _.T(AJ, xJ);
    AJ.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j) dk(46, "UNKNOWN_COLLECTOR_ID"), BJ(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, dk(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, dk(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), BJ(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (dk(14, a), BJ(this, a, 105)) : (_.H = Sf(CD), _.z(_.H, "includes")).call(_.H, a) ? (dk(22, a), BJ(this, a, 104)) : this.H.G(this.j)
            }
        else dk(39, "UNKNOWN_COLLECTOR_ID"), BJ(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var BJ = function(a, b, c) {
        a.o.G(iA(b).lb(ok(c)))
    };
    var Kk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? sk : e;
        this.g = b;
        this.l = c;
        this.aa = f;
        this.K = d;
        this.I = e;
        this.D = [];
        this.M = [];
        this.j = [];
        this.A = 0;
        a = _.x(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    Kk.prototype.push = function(a) {
        var b = this;
        this.l || this.K();
        var c = function(f, g) {
            return void CJ(b, f, g)
        };
        a = new AJ(a, c);
        var d = new vk(a.o, void 0, this.g, c);
        c = new zJ(a.H, this.l, this.g, c, this.I);
        var e = new tk;
        Nk(e, [a, d, c]);
        Ck(e);
        a = c.j.promise;
        this.D.push(a);
        d = _.x(this.M);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    Kk.prototype.addOnSignalResolveCallback = function(a) {
        this.M.push(a);
        for (var b = _.x(this.D), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    Kk.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    };
    Kk.prototype.clearAllCache = function() {
        var a = this,
            b = this.aa.currentScript instanceof HTMLScriptElement ? this.aa.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            dk(49, "", null, (c.url = b, c))
        } else if (c = String(_.uh(null != b ? b : "")), (_.H = Sf(BD), _.z(_.H, "includes")).call(_.H, c)) c = {}, dk(48, "", null, (c.url = b, c));
        else {
            var d = new tk;
            c = new yJ(this.g, function(e, f) {
                return void CJ(a, e, f)
            });
            J(d, c);
            Ck(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.Qf(AD));
            d = {};
            dk(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    var CJ = function(a, b, c) {
            a = _.x(a.j);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        Lk = function(a) {
            this.push = function(b) {
                a.push(b)
            };
            this.addOnSignalResolveCallback = function(b) {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = function(b) {
                a.addErrorHandler(b)
            };
            this.clearAllCache = function() {
                a.clearAllCache()
            }
        };
    var Rk = function(a, b, c) {
        xJ.call(this, 1035, c);
        this.o = b;
        this.j = W(this);
        this.H = X(this, a)
    };
    _.T(Rk, xJ);
    Rk.prototype.g = function() {
        var a = this,
            b = this.H.value,
            c = ik(b, 1),
            d = this.o.toString(),
            e = {};
        dk(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        rb(f, this.o);
        var g = function() {
            var h = {};
            dk(31, c, null, (h.url = d, h));
            a.j.G(b.lb(ok(109)));
            _.eg(f, "error", g)
        };
        document.head.appendChild(f);
        _.sb(f, "error", g)
    };
    var Pk = new _.u.Set;
    var Tk = function(a, b) {
        try {
            var c = void 0 === _.Q(b, 6) ? !0 : _.Q(b, 6),
                d, e, f = Nf(_.kg(b, 2, 0)),
                g = _.I(b, 3);
            a: switch (_.kg(b, 4, 0)) {
                case 1:
                    var h = "pt";
                    break a;
                case 2:
                    h = "cr";
                    break a;
                default:
                    h = ""
            }
            var k = new wz(f, g, h),
                l = null != (e = null == (d = _.Bm(b, tz, 5)) ? void 0 : _.I(d, 1)) ? e : "";
            k.ae = l;
            k.g = c;
            k.B = a;
            var m = k.build();
            zb(m)
        } catch (n) {}
    };
    var DJ = function(a) {
        this.F = _.A(a)
    };
    _.T(DJ, _.D);
    DJ.prototype.g = Lf([0, jz, -3, mz]);
    var EJ = [.05, .1, .2, .5],
        FJ = [0, .5, 1],
        GJ = function(a) {
            a = Gk(a);
            if (!a) return -1;
            try {
                var b = iH(a.document);
                var c = new _.Sm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Sm(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        HJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : EJ.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        JJ = function(a) {
            this.M = a.B;
            this.j = a.Wb;
            this.I = a.timer;
            this.l = null;
            this.g = a.ub;
            this.A = IJ(this);
            this.D = a.Hm || !1
        },
        KJ = function() {
            var a;
            return !!window.IntersectionObserver && vv(null == (a = window.performance) ? void 0 : a.now)
        };
    JJ.prototype.getSlotId = function() {
        return this.l
    };
    var MJ = function(a, b) {
            if (a.A) {
                if (null != a.l) {
                    try {
                        LJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.A && a.A.unobserve(a.j)
                }
                a.l = b;
                a.A.observe(a.j)
            }
        },
        IJ = function(a) {
            if (!_.t.IntersectionObserver) return null;
            var b = a.j.offsetWidth * a.j.offsetHeight,
                c = GJ(a.M);
            b = [].concat(_.zi(FJ), _.zi(HJ(c, b)));
            na(b);
            return new _.t.IntersectionObserver(function(d) {
                try {
                    for (var e = GJ(a.M), f = _.x(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value,
                            k = Math.round(h.boundingClientRect.width * h.boundingClientRect.height),
                            l = Math.round(h.intersectionRect.width * h.intersectionRect.height),
                            m = Math.round(h.time);
                        if (_.z(Number, "isSafeInteger").call(Number, k) && _.z(Number, "isSafeInteger").call(Number, l) && _.z(Number, "isSafeInteger").call(Number, e) && _.z(Number, "isSafeInteger").call(Number, m)) a.D && LJ(a, m, k, l, e, h.isIntersecting);
                        else {
                            var n = d = void 0;
                            null == (n = (d = a).g) || n.call(d, Error("invalid geometry: " + k + " | " + l + " | " + e + " | " + m))
                        }
                    }
                } catch (p) {
                    a.g && a.g(p)
                }
            }, {
                threshold: b
            })
        },
        LJ = function(a, b, c, d, e, f) {
            if (null == a.l) throw Error("Not Attached.");
            var g = new DJ;
            c = _.fi(g, 1, c);
            d = _.fi(c, 2, d);
            e = _.fi(d, 3, e);
            b = _.fi(e, 4, b);
            f = ai(b, 5, f);
            f = Ib(f.g(), 4);
            GC(a.I, "1", 10, f, void 0, a.l)
        };
    var NJ = function(a, b) {
            this.g = a;
            this.A = b
        },
        OJ = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = rB(a.g);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.A
                })
            }, !1);
            return !0
        };
    var fl = function(a) {
        this.F = _.A(a)
    };
    _.T(fl, _.D);
    var jl = Mf(fl),
        gl = [1, 3];
    var Tg = {
        ro: 0,
        no: 1,
        oo: 9,
        ko: 2,
        lo: 3,
        qo: 5,
        po: 7,
        mo: 10
    };
    var PJ = _.Bw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        $k = _.ib(PJ);
    var dp = function(a) {
            var b = void 0 === b ? ck(_.t) : b;
            this.id = a;
            this.g = .001 > Math.random();
            this.ke = {
                pvsid: String(b)
            }
        },
        QJ = function(a) {
            a = Hl(a);
            var b;
            Vl.set(a, (null != (b = Vl.get(a)) ? b : 0) + 1)
        },
        Ul = function() {
            return [].concat(_.zi(_.z(Vl, "values").call(Vl))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        fp = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.ke[b] = c : delete a.ke[b])
        },
        hp = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (RJ()) b = !0;
            else {
                var c = a.g;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && NC(window, SJ(a) || "", void 0, !0)
        },
        SJ = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Kn(a.ke, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        TJ = function(a) {
            var b = [].concat(_.zi(_.z(Vl, "keys").call(Vl)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? fp(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), fp(a, "nw_id", b.join()))
        },
        ep = function(a, b) {
            fp(a, "vrg", b.Ze);
            TJ(a);
            fp(a, "nslots", Ul().toString());
            b = oh();
            b.length && fp(a, "eid", b.join());
            fp(a, "pub_url", document.URL)
        },
        Fp = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new dp(a), b(a), hp(a))
        },
        Vl = new _.u.Map,
        RJ = Ii(function() {
            return !!lB()
        });
    var Kl = function() {
        FC.call(this, _.E(Ll) || _.E(QF) ? 1 : 0, _.t);
        this.l = 0;
        var a = _.E(Ll) || _.E(QF);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.T(Kl, FC);
    _.UJ = function(a) {
        this.context = a
    };
    _.UJ.prototype.Gb = function(a, b) {
        return Ol(this.context, a, b)
    };
    _.UJ.prototype.Ba = function(a, b) {
        return Il(this.context, a, b)
    };
    _.UJ.prototype.Fb = function(a, b) {
        Ml(this.context, a, b);
        return !1
    };
    _.UJ.prototype.zd = ca(4);
    var VJ = function() {
            this.id = "goog_" + MA++
        },
        WJ = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.u.Map
        };
    _.T(WJ, _.V);
    WJ.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.clear()
    };
    WJ.prototype.listen = function(a, b) {
        var c = this;
        if (this.M) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.u.Set([b]);
        this.l.set(d, g);
        return function() {
            return void XJ(c, a, b)
        }
    };
    var YJ = function(a) {
            var b = Vu;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.u.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        XJ = function(a, b, c) {
            var d;
            return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        ht = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.ub(function(p) {
                e = "string" === typeof b ? b : b.id;
                f = a.l.get(e);
                if (null == (g = f) || !g.size) return p.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: d,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent(e, !0, !0, d);
                    return r
                }();
                k = [];
                l = _.x(f);
                m = l.next();
                for (n = {}; !m.done; n = {
                        Cg: void 0
                    }, m = l.next()) n.Cg = m.value, k.push(new _.u.Promise(function(r) {
                    return function(v) {
                        return _.ub(function(w) {
                            if (1 == w.g) return w.yield(0, 2);
                            Ol(a.context, c, function() {
                                a.l.has(e) && f.has(r.Cg) && (0, r.Cg)(h)
                            }, !0);
                            v();
                            w.g = 0
                        })
                    }
                }(n)));
                return p.yield(_.u.Promise.all(k), 0)
            })
        },
        ZJ = new VJ,
        $J = new VJ,
        jt = new VJ,
        aK = new VJ,
        kt = new VJ,
        bK = new VJ,
        cK = new VJ,
        hr = new VJ,
        Vu = new VJ,
        dK = new VJ;
    var eK = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        fK = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var gK, kK, nK, Uu, oK, jK, iK, hK, Jq;
    gK = function() {
        this.g = new _.u.Map;
        this.D = 0;
        this.A = new _.u.Map;
        this.Mb = null;
        this.j = this.l = this.o = this.I = 0;
        this.Ue = null;
        this.K = new eK;
        this.M = new eK
    };
    kK = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            Sc: !0,
            Tg: "",
            Ld: "",
            ij: 0,
            Pg: [],
            Rg: [],
            Hc: !1,
            Ao: -1
        }), _.sp(b, function() {
            a.g.delete(b);
            hK(a, b)
        }), b.listen($J, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Tg = ik(c, 33) || "";
            d.Hc = !0;
            iK(a, b, function() {
                return void(d.Tg = "")
            });
            jK(a, b, function() {
                return void(d.Hc = !1)
            })
        }))
    };
    _.Iq = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.Sc
    };
    _.lK = function(a, b) {
        if (a = a.g.get(b)) a.Sc = !1
    };
    _.mK = function(a, b) {
        if (a = a.g.get(b)) a.Sc = !0
    };
    nK = function(a, b) {
        if (!b.length) return [];
        var c = Hl(b[0].getAdUnitPath());
        b.every(function(g) {
            return Hl(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.x(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.x(e.value);
            e = f.next().value;
            (f = f.next().value.Tg) && Hl(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Uu = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Ld) ? d : ""
    };
    oK = function(a, b) {
        return (a = a.g.get(b)) ? a.ij - 1 : 0
    };
    jK = function(a, b, c) {
        (a = a.g.get(b)) && a.Pg.push(c)
    };
    iK = function(a, b, c) {
        (a = a.g.get(b)) && a.Rg.push(c)
    };
    hK = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Rg.slice(), a.Rg.length = 0, a = _.x(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    Jq = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Pg.slice(), a.Pg.length = 0, a = _.x(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    gK.prototype.Hc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Hc) ? c : !1
    };
    var pK = function(a, b, c) {
            if (a = a.g.get(b)) a.hj = c
        },
        qK = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                null == (c = a.hj) || c.ya();
                delete a.hj
            }
        };
    var Yl = new _.u.Map,
        Xl = new _.u.Map;
    var $l = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    $l.prototype.getMessageId = function() {
        return this.messageId
    };
    $l.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var rK = O(2),
        sK = O(3),
        tK = O(4),
        uK = O(5),
        vK = O(6),
        wK = O(12),
        xK = O(14),
        yK = O(16),
        tm = O(19),
        zK = O(20),
        AK = O(23),
        BK = O(26),
        CK = O(28),
        DK = O(149),
        EK = O(30),
        FK = O(31),
        GK = O(34),
        HK = O(35),
        zn = O(36),
        Bt = O(38),
        IK = O(40),
        JK = O(48),
        KK = O(50),
        LK = O(60),
        MK = O(63),
        NK = O(64),
        OK = O(66),
        PK = O(68),
        QK = O(69),
        RK = O(70),
        SK = O(71),
        TK = O(78),
        UK = O(80),
        bo = O(82),
        um = O(84),
        VK = O(85),
        WK = O(87),
        nm = O(88),
        XK = O(92),
        YK = O(93),
        ZK = O(99),
        wm = O(103),
        $n = O(104),
        $K = O(105),
        Un = O(106),
        Vn = O(107),
        ao = O(108),
        aL = O(113),
        bL = O(114),
        cL = O(115),
        dL = O(117),
        eL = O(118),
        fL = O(120),
        gL = O(119),
        Ln = O(121),
        hL = O(122),
        iL = O(123),
        jL = O(126),
        kL = O(127),
        lL = O(144),
        Qr = O(129),
        Tr = O(132),
        mL = O(134),
        nL = O(135),
        oL = O(136),
        pL = O(137),
        qL = O(138),
        rL = O(139),
        sL = O(140),
        tL = O(143),
        uL = O(145),
        vL = O(147),
        wL = O(150),
        xL = O(164),
        yL = O(152),
        zL = O(153),
        AL = O(154),
        ds = O(155),
        BL = O(156),
        CL = O(157),
        DL = O(158),
        EL = O(159),
        FL = O(160),
        ov = O(161),
        Pv = O(162);
    var GL = function(a, b, c) {
        var d = this;
        this.addEventListener = L(a, 86, function(e, f) {
            if ("function" !== typeof f) return P(b, bm("Service.addEventListener", [e, f])), d;
            var g = cm(e);
            if (!g) return P(b, YK(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = L(a, 904, function(e, f) {
            var g = cm(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : P(b, bm("Service.removeEventListener", [e, f]))
        });
        this.getSlots = L(a, 573, function() {
            return c.g.map(function(e) {
                return e.g
            })
        });
        this.getSlotIdMap = L(a, 574, function() {
            for (var e = {}, f = _.x(c.g), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.g;
            return e
        });
        this.getName = L(a, 575, function() {
            return c.getName()
        })
    };
    var dm = function(a, b, c) {
        GL.call(this, a, b, c);
        this.setRefreshUnfilledSlots = L(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = L(a, 69, function(d) {
            c.Sc && HL(c, IL(c, d))
        });
        this.refreshAllSlots = L(a, 60, function() {
            c.Sc && HL(c)
        });
        this.setVideoSession = L(a, 61, function(d, e, f) {
            c.I = e;
            c.C = f;
            "number" === typeof d && (e = hn().g, _.nk(e, 29, _.ud(d)))
        });
        this.getDisplayAdsCorrelator = L(a, 62, function() {
            return String(Zy(hn().g, 26))
        });
        this.getVideoStreamCorrelator = L(a, 63, function() {
            var d = hn().g;
            d = vs(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = L(a, 64, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && JL(c, e)
        });
        this.onImplementationLoaded = L(a, 65, function() {
            c.R.info(JK("GPT CompanionAds"))
        });
        this.slotRenderEnded = L(a, 67, function(d, e, f) {
            var g = _.z(c.g, "find").call(c.g, function(h) {
                return h.g === d
            });
            return g && KL(c, g, e, f)
        })
    };
    _.T(dm, GL);
    var fm = function(a, b, c) {
        GL.call(this, a, b, c);
        this.setContent = L(a, 72, function(d) {
            var e = _.z(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(lL(), e)
        })
    };
    _.T(fm, GL);
    var mm = function(a) {
        this.F = _.A(a)
    };
    _.T(mm, _.D);
    var lm = function(a, b) {
            return ti(a, 1, b)
        },
        qm = function(a) {
            return vi(a, 2, 2)
        },
        km = function(a, b) {
            return _.Le(a, 2, b, _.vd)
        },
        rn = function(a, b) {
            return _.Ne(a, 2, _.vd, b)
        };
    mm.da = [2];
    var LL = function(a) {
        this.F = _.A(a)
    };
    _.T(LL, _.D);
    LL.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.ii(this, 5, a)
    };
    LL.prototype.clearTagForChildDirectedTreatment = function() {
        return _.nk(this, 5)
    };
    LL.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.ii(this, 6, a)
    };
    var Sp = function(a) {
        this.F = _.A(a)
    };
    _.T(Sp, _.D);
    var Ho = function(a) {
        var b = new Sp;
        return ai(b, 1, a)
    };
    var uu = function(a) {
        this.F = _.A(a)
    };
    _.T(uu, _.D);
    var Ht = function(a) {
        this.F = _.A(a)
    };
    _.T(Ht, _.D);
    Ht.da = [1];
    var Jn = function(a) {
        this.F = _.A(a)
    };
    _.T(Jn, _.D);
    var Mr = function(a) {
        this.F = _.A(a)
    };
    _.T(Mr, _.D);
    var Sr = function(a, b) {
            return _.ii(a, 1, b)
        },
        Pr = function(a, b) {
            return _.Le(a, 2, b, _.vd)
        };
    Mr.da = [2];
    var Ft = function(a) {
        this.F = _.A(a)
    };
    _.T(Ft, _.D);
    var Or = function(a, b) {
        pk(a, 1, Mr, b)
    };
    Ft.da = [1];
    var Et = function(a) {
        this.F = _.A(a)
    };
    _.T(Et, _.D);
    var ML = function(a) {
        this.F = _.A(a)
    };
    _.T(ML, _.D);
    ML.prototype.getCategoryExclusions = function(a) {
        return cz(this, 3, a)
    };
    ML.prototype.Sa = function() {
        return _.gk(this, mm, 14)
    };
    ML.prototype.Fc = function() {
        return _.Bm(this, Jn, 18)
    };
    var nv = function(a) {
        return _.Bm(a, LL, 25)
    };
    ML.prototype.getCorrelator = function() {
        return vs(this, 26)
    };
    ML.prototype.setCorrelator = function(a) {
        return _.nk(this, 26, _.ud(a))
    };
    ML.prototype.ji = function() {
        return Yy(this, Et, 33)
    };
    ML.da = [2, 3, 14];
    var Um = function() {
        this.g = new _.u.Map
    };
    var NL = {},
        zm = (NL[253] = !1, NL[246] = [], NL[150] = "", NL[221] = !1, NL[36] = /^true$/.test("false"), NL[172] = null, NL[260] = void 0, NL[251] = null, NL),
        ym = function() {
            this.g = !1
        };
    var OL = function() {
            this.A = {};
            this.g = new ML;
            this.l = new _.u.Map;
            this.g.setCorrelator(yB());
            _.Am(36) && ai(this.g, 15, !0)
        },
        PL = function(a) {
            var b = hn(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.Of(Um),
                    e = ++_.Of(Kl).l;
                d.g.set(c, e);
                _.nk(a, 20, _.bd(e));
                b.A[c] = a
            }
        },
        QL = function(a, b) {
            return a.A[b]
        },
        hn = function() {
            return _.Of(OL)
        };
    var RL = {},
        SL = (RL.companion_ads = "companionAds", RL.content = "content", RL.publisher_ads = "pubads", RL);
    var TL = Ii(Xm);
    var jn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = hn().g,
            h = QL(hn(), f.getDomId());
        this.set = L(a, 83, function(k, l) {
            "page_url" === k && l && (k = [km(lm(new mm, k), [String(l)])], _.vm(h, 3, k));
            return e
        });
        this.get = L(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.H = h.Sa(), _.z(_.H, "find")).call(_.H, function(n) {
                return ik(n, 1) === k
            })) ? void 0 : qm(l)[0]) ? m : null
        });
        this.setClickUrl = L(a, 79, function(k) {
            hm(k, h, f, b);
            return e
        });
        this.setTargeting = L(a, 81, function(k, l) {
            om(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = L(a, 85, function(k) {
            pm(k, f, h, b);
            return e
        });
        this.display = L(a, 78, function() {
            var k = Vm(g, hn().A);
            var l = void 0 === l ? document : l;
            var m;
            null != (m = k.T[f.getDomId()]) && ai(m, 19, !0);
            m = f.getDomId();
            m = Jx(m);
            var n = {
                id: m
            };
            var p = void 0 === p ? Rx : p;
            var r = _.z(Object, "assign").call(Object, {}, n);
            m = n.id;
            var v = n.style;
            n = n.data;
            r = (delete r.id, delete r.style, delete r.data, r);
            if (_.z(Object, "keys").call(Object, r).length) throw Error("Invalid attribute(s): " + _.z(Object, "keys").call(Object, r));
            m = {
                id: m,
                style: v ? v : void 0
            };
            if (n)
                for (v = _.x(_.z(n, "entries").call(n)), n = v.next(); !n.done; n = v.next()) r = _.x(n.value), n = r.next().value, r = r.next().value, Hf(JI.test(n)), m[n] = r;
            if (!Ux.test("div")) throw Error("");
            if ("DIV" in Wx) throw Error("");
            v = "";
            if (m)
                for (w in m)
                    if (Object.prototype.hasOwnProperty.call(m, w)) {
                        if (!Ux.test(w)) throw Error("");
                        r = m[w];
                        if (null != r) {
                            n = w;
                            if (r instanceof mx) r = nx(r);
                            else {
                                if ("style" == n.toLowerCase()) throw Error("");
                                if (/^on/i.test(n)) throw Error("");
                                if (n.toLowerCase() in Vx)
                                    if (r instanceof _.ox) r = _.jb(r).toString();
                                    else if (r instanceof _.Ra) r = _.ab(r);
                                else if ("string" === typeof r) r instanceof _.Ra || (r = String(r), xx.test(r) ? r = Sa(r) : (r = String(r), r = r.replace(/(%0A|%0D)/g, ""), r = r.match(wx) ? Sa(r) : null)), r = (r || zx).toString();
                                else throw Error("");
                            }
                            n = n + '="' + Jx(String(r)) + '"';
                            v += " " + n
                        }
                    }
            var w = "<div" + v;
            null == p ? p = [] : Array.isArray(p) || (p = [p]);
            !0 === jx.div ? w += ">" : (m = _.Tx(p), w += ">" + _.Qx(m).toString() + "</div>");
            w = _.Zj(w);
            l.write(_.Qx(w));
            Zm(f, l) && (Ct(d), kK(d.L, f), UL(d, k, f))
        });
        this.setTagForChildDirectedTreatment = L(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = nv(g) || new LL;
                l.setTagForChildDirectedTreatment(k);
                _.ki(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = L(a, 567, function(k) {
            "boolean" === typeof k ? ai(h, 12, k) : P(b, bm("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = L(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = nv(g) || new LL;
                l.setTagForUnderAgeOfConsent(k);
                _.ki(g, 25, l)
            }
            return e
        })
    };
    var Dr = {
        jo: 0,
        fo: 1,
        ho: 2,
        io: 3
    };
    var mn = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        on = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        nn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var VL = "",
        Fn = null;
    var lo = function(a, b, c) {
        WJ.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.T(lo, WJ);
    lo.prototype.getSlotId = function() {
        return this.slotId
    };
    var Vg = function(a, b, c, d) {
        WJ.call(this, a);
        this.adUnitPath = b;
        this.Wb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Vg, WJ);
    _.q = Vg.prototype;
    _.q.getId = function() {
        return this.id
    };
    _.q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _.q.getName = function() {
        return this.adUnitPath
    };
    _.q.toString = function() {
        return this.getId()
    };
    _.q.getDomId = function() {
        return this.Wb
    };
    var WL = function(a, b) {
        a.g = b
    };
    var eo = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var io = _.$x(function() {
            return void uB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        XL = _.$x(function() {
            return void uB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        YL = _.$x(function() {
            return void uB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        no = function(a, b, c, d, e) {
            GL.call(this, a, b, c);
            var f = this,
                g = hn().g,
                h = hn().A,
                k = !1;
            this.setTargeting = L(a, 1, function(l, m) {
                Xn({
                    key: l,
                    value: m,
                    Fa: g,
                    serviceName: c.getName(),
                    Fm: c.enabled,
                    ib: e,
                    R: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = L(a, 2, function(l) {
                co(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = L(a, 38, function(l) {
                return Yn(l, g, b)
            });
            this.getTargetingKeys = L(a, 39, function() {
                return Zn(g)
            });
            this.setCategoryExclusion = L(a, 3, function(l) {
                "string" !== typeof l || im(l) ? P(b, bm("PubAdsService.setCategoryExclusion", [l])) : ((_.H = vi(g, 3, 2), _.z(_.H, "includes")).call(_.H, l) || _.Ne(g, 3, _.vd, l), b.info(VK(l)));
                return f
            });
            this.clearCategoryExclusions = L(a, 4, function() {
                _.nk(g, 3);
                b.info(WK());
                return f
            });
            this.disableInitialLoad = L(a, 5, function() {
                ai(g, 4, !0);
                k || (k = !0, jo())
            });
            this.enableSingleRequest = L(a, 6, function() {
                if (c.enabled && !_.Q(g, 6)) return P(b, LK("PubAdsService.enableSingleRequest")), !1;
                b.info(MK("single request"));
                ai(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = L(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = L(a, 8, function() {
                uB("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = L(a, 485, function(l) {
                var m = new uu;
                m = _.yi(m, 1, 800);
                m = _.yi(m, 2, 400);
                m = _.nk(m, 3, _.Jc(3));
                if (_.ka(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.yi(m, 1, n) : -1 === n && _.nk(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.yi(m, 2, n) : -1 === n && _.nk(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.nk(m, 3, _.Jc(l)) : -1 === l && _.nk(m, 3, _.Jc(1)))
                }
                window.IntersectionObserver || !Ki(m, 1) && !Ki(m, 2) ? _.ki(g, 5, m) : P(b, wL())
            });
            this.setCentering = L(a, 9, function(l) {
                l = !!l;
                b.info(NK("centering", String(l)));
                ai(g, 15, l)
            });
            this.definePassback = L(a, 10, function(l, m) {
                return (l = mo(a, b, c, l, m, d)) && l.Yi
            });
            this.refresh = L(a, 11, function() {
                var l = _.Wa.apply(0, arguments),
                    m = _.x(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.ka(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? P(b, bm("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(yB()), n = n ? ho(n, c) : _.E(wE) ? c.g.filter(function(p) {
                    var r = h[p.getDomId()];
                    return !(!Zm(p) && !Km(xr(r)))
                }) : c.g, c.refresh(Vm(g, h), n) || P(b, bm("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = L(a, 12, function() {
                ai(g, 21, !0);
                ZL(c, g)
            });
            this.setVideoContent = L(a, 13, function(l, m) {
                $L(c, l, m, g)
            });
            this.collapseEmptyDivs = L(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                ai(g, 11, !0);
                l = !!l;
                ai(g, 10, l);
                b.info(TK(String(l)));
                return !!_.Q(g, 11)
            });
            this.clear = L(a, 15, function(l) {
                if (Array.isArray(l)) return aM(c, g, h, ho(l, c));
                if (void 0 === l) return aM(c, g, h, c.g);
                P(b, bm("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = L(a, 16, function(l) {
                "string" !== typeof l ? P(b, bm("PubAdsService.setLocation", [l])) : ti(g, 8, l);
                return f
            });
            this.setCookieOptions = L(a, 17, function() {
                XL();
                return f
            });
            this.setTagForChildDirectedTreatment = L(a, 18, function(l) {
                YL();
                if (1 !== l && 0 !== l) return P(b, hL("PubadsService.setTagForChildDirectedTreatment", Mn(l), "0,1")), f;
                var m = nv(g) || new LL;
                m.setTagForChildDirectedTreatment(l);
                _.ki(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = L(a, 19, function() {
                YL();
                var l = nv(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.ki(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = L(a, 20, function(l) {
                l = String(l);
                b.info(NK("PPID", l));
                ti(g, 16, l);
                return f
            });
            this.set = L(a, 21, function(l, m) {
                An(l, m, g, c.getName(), b);
                return f
            });
            this.get = L(a, 22, function(l) {
                return Bn(l, g, b)
            });
            this.getAttributeKeys = L(a, 23, function() {
                return Cn(g)
            });
            this.display = L(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = L(a, 25, function() {
                uB(go("update"));
                P(b, cL());
                g.setCorrelator(yB());
                return f
            });
            this.defineOutOfPagePassback = L(a, 35, function(l) {
                l = mo(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.ii(l.Fa, 15, 1);
                return l.Yi
            });
            this.setForceSafeFrame = L(a, 36, function(l) {
                "boolean" !== typeof l ? P(b, bm("PubAdsService.setForceSafeFrame", [Mn(l)])) : ai(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = L(a, 37, function(l) {
                var m = Nn(b, l);
                m ? _.ki(g, 18, m) : P(b, bm("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = L(a, 445, function(l) {
                YL();
                if (0 !== l && 1 !== l) return P(b, hL("PubAdsService.setRequestNonPersonalizedAds", Mn(l), "0,1")), f;
                var m = nv(g) || new LL;
                ai(m, 8, !!l);
                _.ki(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = L(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                YL();
                if (2 !== l && 0 !== l && 1 !== l) return P(b, hL("PubadsService.setTagForUnderAgeOfConsent", Mn(l), "2,0,1")), f;
                var m = nv(g) || new LL;
                m.setTagForUnderAgeOfConsent(l);
                _.ki(g, 25, m);
                return f
            });
            this.getCorrelator = L(a, 27, function() {
                return String(Zy(g, 26))
            });
            this.getTagSessionCorrelator = L(a, 631, function() {
                return ck(_.t)
            });
            this.getVideoContent = L(a, 30, function() {
                return bM(c, g)
            });
            this.getVersion = L(a, 568, function() {
                return a.Ze
            });
            this.forceExperiment = L(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = L(a, 28, function(l) {
                uB(go("set"));
                P(b, bL());
                if (ch(window)) return f;
                if (!Bo(l)) return P(b, bm("PubadsService.setCorrelator", [Mn(l)])), f;
                l = g.setCorrelator(l);
                ai(l, 27, !0);
                return f
            });
            this.markAsAmp = L(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = L(a, 571, function() {
                return !!_.Q(g, 6)
            });
            this.setImaContent = L(a, 328, function(l, m) {
                _.Ji(g, 22) ? $L(c, l, m, g) : (ai(g, 21, !0), ZL(c, g), "string" === typeof l && ti(g, 19, l), "string" === typeof m && ti(g, 20, m))
            });
            this.getImaContent = L(a, 329, function() {
                return _.Ji(g, 22) ? bM(c, g) : c.enabled ? {
                    vid: _.I(g, 19) || "",
                    cmsid: _.I(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = L(a, 572, function() {
                return !!_.Q(g, 4)
            });
            this.setPrivacySettings = L(a, 648, function(l) {
                if (!_.ka(l)) return P(b, bm("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    v = l.nonPersonalizedAds,
                    w = l.userOptedOutOfPersonalization,
                    y = l.trafficSource,
                    B, C = null != (B = nv(g)) ? B : new LL;
                "boolean" === typeof v ? ai(C, 8, v) : void 0 !== v && P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "nonPersonalizedAds", Mn(v)));
                "boolean" === typeof w ? ai(C, 13, w) : void 0 !== w && P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "userOptedOutOfPersonalization", Mn(w)));
                "boolean" === typeof m ? ai(C, 1, m) : void 0 !== m && P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "restrictDataProcessing", Mn(m)));
                if ("boolean" === typeof r) {
                    m = fo();
                    if (r && !_.Q(C, 9) && a.Wc) {
                        v = a.Qa;
                        w = v.Vc;
                        B = wl(a);
                        var G = new dD;
                        G = _.zl(G, 1, !0);
                        G = _.zl(G, 2, m);
                        B = _.Bl(B, 11, Cl, G);
                        w.call(v, B)
                    }
                    m ? ai(C, 9, r) : r && P(b, vL())
                } else void 0 !== r && P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "limitedAds", Mn(r)));
                void 0 !== p && (null === p ? C.setTagForUnderAgeOfConsent(2) : !1 === p ? C.setTagForUnderAgeOfConsent(0) : !0 === p ? C.setTagForUnderAgeOfConsent(1) : P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "underAgeOfConsent", Mn(p))));
                void 0 !== n && (null === n ? C.clearTagForChildDirectedTreatment() : !1 === n ? C.setTagForChildDirectedTreatment(0) : !0 === n ? C.setTagForChildDirectedTreatment(1) : P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "childDirectedTreatment", Mn(n))));
                void 0 !== y && (null === y ? _.nk(C, 10) : (_.H = _.z(Object, "values").call(Object, nn), _.z(_.H, "includes")).call(_.H, y) ? _.ii(C, 10, y) : P(b, Ln("PubAdsService.setPrivacySettings", Mn(l), "trafficSource", Mn(y))));
                _.ki(g, 25, C);
                return f
            })
        };
    _.T(no, GL);
    var cM = function(a, b) {
        this.getId = L(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = L(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = L(a, 595, function() {
            return b.getName()
        });
        this.toString = L(a, 596, function() {
            return b.toString()
        });
        this.getDomId = L(a, 597, function() {
            return b.getDomId()
        })
    };
    var dM = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        eM = function(a, b) {
            a.advertiserId = b
        },
        fM = function(a, b) {
            a.campaignId = b
        },
        gM = function(a, b) {
            a.yieldGroupIds = b
        },
        hM = function(a, b) {
            a.companyIds = b
        };
    var Cm = function(a) {
        this.F = _.A(a)
    };
    _.T(Cm, _.D);
    Cm.prototype.getWidth = function() {
        return gt(this, 1)
    };
    Cm.prototype.getHeight = function() {
        return gt(this, 2)
    };
    var vo = function() {
        var a = new Cm;
        return ai(a, 3, !0)
    };
    var Fm = function(a) {
        this.F = _.A(a)
    };
    _.T(Fm, _.D);
    Fm.da = [2];
    var iM = function(a) {
        this.F = _.A(a)
    };
    _.T(iM, _.D);
    var jM = function(a) {
        var b = new iM;
        return _.ii(b, 1, a)
    };
    var kM = function(a) {
        this.F = _.A(a)
    };
    _.T(kM, _.D);
    kM.da = [1];
    var lM = function(a) {
        this.F = _.A(a)
    };
    _.T(lM, _.D);
    var mM = function(a) {
        this.F = _.A(a)
    };
    _.T(mM, _.D);
    mM.prototype.getAdUnitPath = function() {
        return _.I(this, 1)
    };
    mM.prototype.getDomId = function() {
        return _.I(this, 2)
    };
    var nM = function(a, b) {
        ti(a, 2, b)
    };
    mM.prototype.Sa = function() {
        return _.gk(this, mm, 3)
    };
    mM.prototype.getServices = function(a) {
        return cz(this, 4, a)
    };
    var oM = function(a, b) {
        _.vm(a, 5, b)
    };
    mM.prototype.getClickUrl = function() {
        return _.I(this, 7)
    };
    mM.prototype.setClickUrl = function(a) {
        return ti(this, 7, a)
    };
    mM.prototype.getCategoryExclusions = function(a) {
        return cz(this, 8, a)
    };
    var jm = function(a) {
        return _.gk(a, mm, 9)
    };
    mM.prototype.Fc = function() {
        return _.Bm(this, Jn, 13)
    };
    var xr = function(a) {
        return _.kg(a, 15, 0)
    };
    mM.da = [3, 4, 5, 6, 8, 9, 27];
    var pM = function(a, b) {
        this.width = a;
        this.height = b
    };
    pM.prototype.getWidth = function() {
        return this.width
    };
    pM.prototype.getHeight = function() {
        return this.height
    };
    var qM = new _.u.Set(["unhideWindow", "navBar"]);
    var Ko = function(a, b, c) {
        var d = this,
            e = QL(hn(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.sp(c, function() {
            e = new mM;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(jt, function(n) {
            var p = n.detail;
            n = p.Th;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = L(a, 40, function(n, p) {
            po(n, p, c, e, b);
            return d
        });
        this.get = L(a, 41, function(n) {
            return qo(n, c, e, b)
        });
        this.getAttributeKeys = L(a, 42, function() {
            return ro(e)
        });
        this.addService = L(a, 43, function(n) {
            n = Yl.get(n);
            if (!n) return P(b, bm("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.H = vi(e, 4, 2), _.z(_.H, "includes")).call(_.H, p)) return b.info(wK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = L(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Co("Size mapping must be an array");
                var r = n.map(Do);
                _.vm(p, 6, r)
            } catch (v) {
                n = v, Ml(a, 44, n), uB("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = L(a, 45, function(n) {
            hm(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = L(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || im(n) ? P(b, bm("Slot.setCategoryExclusion", [n]), c) : ((_.H = vi(p, 8, 2), _.z(_.H, "includes")).call(_.H, n) || _.Ne(p, 8, _.vd, n), b.info(xK(n), c));
            return d
        });
        this.clearCategoryExclusions = L(a, 47, function() {
            _.nk(e, 8);
            b.info(yK(), c);
            return d
        });
        this.getCategoryExclusions = L(a, 48, function() {
            return vi(e, 8, 2).slice()
        });
        this.setTargeting = L(a, 49, function(n, p) {
            om(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = L(a, 649, function(n) {
            pm(n, c, e, b);
            return d
        });
        this.clearTargeting = L(a, 50, function(n) {
            xm(n, c, e, b);
            return d
        });
        this.getTargeting = L(a, 51, function(n) {
            return rm(n, c, e, b)
        });
        this.getTargetingKeys = L(a, 52, function() {
            return sm(e)
        });
        this.setCollapseEmptyDiv = L(a, 53, function(n, p) {
            var r = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? P(b, bm("Slot.setCollapseEmptyDiv", [n, p]), c) : (r = ai(r, 10, n), ai(r, 11, n && p), p && !n && P(b, zK(c.toString()), c));
            return d
        });
        this.getAdUnitPath = L(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = L(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = L(a, 55, function(n) {
            var p = e;
            "boolean" !== typeof n ? P(b, bm("Slot.setForceSafeFrame", [String(n)]), c) : ai(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = L(a, 56, function(n) {
            var p = e,
                r = Nn(b, n);
            r ? _.ki(p, 13, r) : b.error(bm("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen($J, function(n) {
            n = n.detail;
            if (On(n, 8)) g = null;
            else {
                g = new dM;
                var p = !!On(n, 9);
                g.isBackfill = p;
                var r = $y(n, 15),
                    v = $y(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = $y(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                $y(n, 17).length && eM(g, $y(n, 17)[0]);
                $y(n, 18).length && fM(g, $y(n, 18)[0]);
                $y(n, 19).length && gM(g, $y(n, 19));
                $y(n, 20).length && hM(g, $y(n, 20));
                n = ve(n, 45, fe(n.F) & 34 ? Fe : Ge, 2).map(function(w) {
                    return Yd(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = L(a, 355, function() {
            return g
        });
        this.getName = L(a, 170, function() {
            b.error(tL());
            return c.getAdUnitPath()
        });
        var m = new cM(a, c);
        this.getSlotId = L(a, 579, function() {
            return m
        });
        this.getServices = L(a, 580, function() {
            return vi(e, 4, 2).map(function(n) {
                var p = SL[n];
                if (p) {
                    var r, v, w;
                    n = null != (w = null == (v = (r = Eo())[p]) ? void 0 : v.call(r)) ? w : null
                } else n = null;
                return n
            })
        });
        this.getSizes = L(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = Gm(e, n, p)) ? void 0 : r.map(function(w) {
                return _.Q(w, 3) ? "fluid" : new pM(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = L(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = L(a, 583, function() {
            for (var n = {}, p = _.x(jm(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.I(r, 1) && (n[ik(r, 1)] = qm(r));
            return n
        });
        this.getOutOfPage = L(a, 584, function(n) {
            return "number" === typeof n ? xr(e) === n : 0 !== xr(e)
        });
        this.getCollapseEmptyDiv = L(a, 585, function() {
            var n = e;
            return null != On(n, 10) ? _.Q(n, 10) : null
        });
        this.getDivStartsCollapsed = L(a, 586, function() {
            var n = e;
            return null != On(n, 11) ? _.Q(n, 11) : null
        });
        c.listen(aK, function(n) {
            h = n.detail.yk
        });
        this.getContentUrl = L(a, 587, function() {
            return h()
        });
        this.getFirstLook = L(a, 588, function() {
            uB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen($J, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = L(a, 591, function() {
            return k
        });
        this.getHtml = L(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = L(a, 1022, function(n) {
            var p = e;
            if (Xg(n)) {
                var r = n.componentAuction,
                    v = n.adExpansion,
                    w = n.outstream;
                if (null != r) {
                    var y = {
                        componentAuction: r
                    };
                    if (_.ka(y)) {
                        if (r = Je(p, 26, Dd), void 0 !== y.componentAuction) {
                            y = _.x(y.componentAuction);
                            for (var B = y.next(); !B.done; B = y.next()) {
                                var C = B.value;
                                B = C.configKey;
                                C = C.auctionConfig;
                                "string" !== typeof B || im(B) || (null === C ? r.delete(B) : C && r.set(B, JSON.stringify(C)))
                            }
                        }
                    } else P(b, bm("googletag.Slot.setConfig", [y]))
                }
                if (_.z(Object, "hasOwn").call(Object, n, "interstitial"))
                    if (5 !== xr(p)) P(b, FL("interstitial"), c);
                    else {
                        y = n.interstitial;
                        b.info(BL("interstitial", Mn(y)), c);
                        if (Xg(y))
                            for (r = {}, y = _.x(_.z(Object, "entries").call(Object, y)), B = y.next(); !B.done; B = y.next()) switch (C = _.x(B.value), B = C.next().value, C = C.next().value, B) {
                                case "triggers":
                                    r.triggers = C;
                                    break;
                                default:
                                    P(b, DL("interstitial", B), c)
                            } else P(b, EL("googletag.slot.setConfig", "interstitial", Mn(y)), c), r = null;
                        B = r;
                        r = new kM;
                        y = {};
                        if (B && B.triggers)
                            if (B = B.triggers, Xg(B))
                                for (y.triggers = {}, B = _.x(_.z(Object, "entries").call(Object, B)), C = B.next(); !C.done; C = B.next()) {
                                    var G = _.x(C.value);
                                    C = G.next().value;
                                    G = G.next().value;
                                    var F = C;
                                    C = G;
                                    if (qM.has(F))
                                        if (Go(C)) switch (F) {
                                            case "unhideWindow":
                                                G = jM(2);
                                                G = ai(G, 2, C);
                                                pk(r, 1, iM, G);
                                                y.triggers.Po = C;
                                                break;
                                            case "navBar":
                                                _.E(hE) ? (G = jM(3), G = ai(G, 2, C), pk(r, 1, iM, G), y.triggers.Co = C) : P(b, DL("interstitial.triggers", F), c)
                                        } else P(b, EL("interstitial.triggers", F, Mn(C)), c);
                                        else P(b, DL("interstitial.triggers", F), c)
                                } else P(b, EL("interstitial", "triggers", Mn(B)), c);
                        b.info(CL("interstitial", Mn(y)), c);
                        _.ki(p, 29, r)
                    }
                _.E(Fo) ? _.z(Object, "hasOwn").call(Object, n, "adExpansion") && Io(p, v) : Io(p, v);
                if (_.E(Mv) && _.z(Object, "hasOwn").call(Object, n, "outstream") && (_.nk(p, 31), null !== w))
                    if (Xg(w))
                        if (0 !== xr(p)) P(b, FL("outstream", String(xr(p))), c);
                        else {
                            a: {
                                v = ["exposeVast"];n = new _.u.Map;w = _.x(_.z(Object, "entries").call(Object, w));
                                for (r = w.next(); !r.done; r = w.next()) y = _.x(r.value),
                                r = y.next().value,
                                y = y.next().value,
                                _.z(v, "includes").call(v, r) ? n.set(r, y) : P(b, DL("outstream", r), c);
                                if (0 === n.size) w = null;
                                else
                                    for (w = new lM, n = _.x(n), v = n.next(); !v.done; v = n.next())
                                        if (r = _.x(v.value), v = r.next().value, r = r.next().value, "exposeVast" === v) {
                                            if (!Go(r)) {
                                                P(b, EL("outstream", "exposeVast", Mn(r)), c);
                                                w = null;
                                                break a
                                            }
                                            ai(w, 1, r)
                                        }
                            }
                            w && _.ki(p, 31, w)
                        }
                else P(b, EL("googletag.slot.setConfig", "outstream", Mn(w)), c)
            } else P(b, bm("googletag.slot.setConfig", [n]), c)
        })
    };
    var Z = function(a, b, c) {
        fI.call(this, b, c);
        this.context = a
    };
    _.T(Z, fI);
    Z.prototype.I = function(a) {
        Ml(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var Uo = function(a, b, c, d, e) {
        Z.call(this, a, 1226);
        this.Tf = b;
        this.startTime = _.$f();
        this.j = X(this, c);
        this.wa = null != d ? d : this.context.Qa;
        this.o = null != e ? e : .01
    };
    _.T(Uo, Z);
    Uo.prototype.g = function() {
        _.th() < this.o && this.wa.ac.mc.li.vk.wk.Rc({
            Uc: _.$f() - this.startTime,
            Tf: this.Tf,
            ri: !!_.I(this.j.value, 2),
            si: !!_.I(this.j.value, 1),
            ni: !!_.I(this.j.value, 11)
        })
    };
    Uo.prototype.l = function(a) {
        this.I(a)
    };
    var So = function(a, b, c, d, e) {
        Z.call(this, a, 959);
        this.nb = b;
        this.output = W(this);
        this.j = X(this, b);
        jI(this, c);
        jI(this, d);
        e && jI(this, e)
    };
    _.T(So, Z);
    So.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var Ro = function(a, b, c, d, e, f) {
        Z.call(this, a, 1172);
        this.R = b;
        this.L = c;
        this.B = d;
        this.j = hI(this);
        jI(this, e);
        this.o = X(this, f)
    };
    _.T(Ro, Z);
    Ro.prototype.g = function() {
        var a = this,
            b = new bH(this.B, {
                addListenerRemovalCallback: _.E(MD)
            });
        _.S(this, b);
        if (gG(b.caller)) {
            var c = this.L.M,
                d = c.status,
                e = function(f) {
                    if (f.internalErrorState) nH(a.o.value, f.gppString);
                    else if (kh(f.applicableSections)) lH(mH(a.o.value, f.applicableSections.filter(function(k) {
                        return _.z(Number, "isInteger").call(Number, k)
                    })), !1);
                    else {
                        var g = nH(mH(a.o.value, f.applicableSections.filter(function(k) {
                            return _.z(Number, "isInteger").call(Number, k)
                        })), f.gppString);
                        try {
                            var h = fH(f.gppString)
                        } catch (k) {
                            Ml(a.context, 1182, k), h = !1
                        }
                        lH(g, h)
                    }
                    a.j.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    fK(c);
                    c.g.push(e);
                    this.R.info(fL());
                    b.addEventListener(Il(this.context, 1173, function(f) {
                        if ("ready" === f.pingData.signalStatus || kh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(g) {
                            g(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Po = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.R = b;
        this.L = c;
        this.B = d;
        this.o = e;
        this.j = hI(this);
        jI(this, f);
        this.C = X(this, g)
    };
    _.T(Po, Z);
    Po.prototype.g = function() {
        var a = this,
            b = new nG(this.B, {
                timeoutMs: -1,
                fk: !0
            });
        _.S(this, b);
        if (pG(b)) {
            var c = this.L.K,
                d = c.status,
                e = function(f) {
                    var g = a.C.value,
                        h, k;
                    if (k = !(a.o ? _.Q(a.o, 9) : _.E(PD) && fo())) k = {
                        tg: _.E(OD) && _.Am(221) && !Rg()
                    }, k = void 0 === k ? {} : k, k = uG(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.tg : (k.tg || void 0 !== f.gdprApplies || k.yo) && (k.tg || "string" === typeof f.tcString && f.tcString.length) ? sG(f, "1", 0) : !0 : !1;
                    k = ai(g, 5, k);
                    var l = !vG(f, ["3", "4"], 0);
                    k = ai(k, 9, l);
                    k = ti(k, 2, f.tcString);
                    l = null != (h = f.addtlConsent) ? h : "";
                    h = ti(k, 4, l);
                    _.ii(h, 7, f.internalErrorState);
                    null != f.gdprApplies && ai(g, 3, f.gdprApplies);
                    vG(f, ["2", "7", "9", "10"], 1) || ai(g, 8, !0);
                    a.j.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    fK(c);
                    c.g.push(e);
                    this.R.info(eL());
                    b.addEventListener(function(f) {
                        uG(f) ? ("tcunavailable" === f.tcString ? a.R.info(gL("failed")) : a.R.info(gL("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(g) {
                            g(f)
                        }), c.g = []) : fK(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Oo = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.R = b;
        this.B = c;
        this.j = hI(this);
        jI(this, d);
        this.o = X(this, e)
    };
    _.T(Oo, Z);
    Oo.prototype.g = function() {
        var a = this,
            b = new QG(this.B);
        _.S(this, b);
        if (gG(b.caller)) {
            var c = Il(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (ti(a.o.value, 1, d.uspString), kH(a.o.value, Il(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && VB.hasOwnProperty(f[1]) && VB.hasOwnProperty(f[2]) && VB.hasOwnProperty(f[3]) ? (f = new UB, f = _.Al(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, VB[e[1]]), f = _.K(f, 3, VB[e[2]]), e = _.K(f, 4, VB[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.kg(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.R.info(dL());
            RG(b, c)
        } else this.j.notify()
    };
    var Mo = function(a, b) {
        Z.call(this, a, 958);
        this.j = b;
        this.nb = W(this)
    };
    _.T(Mo, Z);
    Mo.prototype.g = function() {
        var a = new jH,
            b = this.j ? _.Q(this.j, 9) : fo(),
            c = _.E(ND) && _.Am(221) && !Rg();
        ai(a, 5, !b && !c);
        this.nb.G(a)
    };
    var No = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.B = b;
        this.o = d;
        this.j = X(this, c)
    };
    _.T(No, Z);
    No.prototype.g = function() {
        var a = this;
        Ol(this.context, 894, function() {
            return void Fp("cmpMet", function(b) {
                ep(b, a.context);
                var c = new nG(a.B);
                _.S(a, c);
                var d = new QG(a.B);
                _.S(a, d);
                fp(b, "fc", Number(a.j.value));
                fp(b, "tcfv1", Number(!!a.B.__cmp));
                fp(b, "tcfv2", Number(pG(c)));
                fp(b, "usp", Number(!!gG(d.caller)));
                fp(b, "ptt", 17)
            }, a.o)
        })
    };
    var rM = function(a, b, c, d) {
        Z.call(this, a, 1103);
        this.j = b;
        this.Z = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.T(rM, Z);
    rM.prototype.g = function() {
        this.output.G(!!eh(this.Z) && !_.Q(this.Z, 9) && !_.Q(this.Z, 13) && (!_.E(Qo) || !_.Q(this.Z, 12)) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.E(sE) && _.Q(this.j, 13) || 1 === _.kg(this.j, 6, 2) || 1 === _.Yc(_.hi(this.j, 5)) || _.z(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var Yo = function(a) {
        this.R = a;
        this.A = this.g = 0
    };
    Yo.prototype.push = function() {
        for (var a = _.x(_.Wa.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.u.globalThis), this.g++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.R.error(EK(String(c)))
            }
        }
        this.R.info(FK(String(this.g), String(this.A)));
        return this.g
    };
    var Wo = function(a, b) {
        this.push = L(a, 76, b.push.bind(b))
    };
    var sM = ["Debug", "Info", "Warning", "Error", "Fatal"],
        tM = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.q = tM.prototype;
    _.q.getSlot = function() {
        return this.g
    };
    _.q.getLevel = function() {
        return this.level
    };
    _.q.getTimestamp = function() {
        return this.timestamp
    };
    _.q.getMessage = function() {
        return this.message
    };
    _.q.toString = function() {
        return this.timestamp.toTimeString() + ": " + sM[this.level] + ": " + this.message
    };
    var uM = _.Bw(["https://console.googletagservices.com/pubconsole/loader.js"]),
        jp = _.ib(uM),
        np, mp = !1,
        cp = !1,
        gp = !1;
    var yt = function(a, b) {
        this.getAllEvents = L(a, 563, function() {
            return cp ? vM(b).slice() : []
        });
        this.getEventsBySlot = L(a, 565, function(c) {
            return cp ? wM(b, c).slice() : []
        });
        this.getEventsByLevel = L(a, 566, function(c) {
            return cp ? xM(b, c).slice() : []
        })
    };
    var yM = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            151: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return pp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            150: function() {
                return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
            },
            164: function() {
                return "Lazy loading is not supported for Side Rail formats. Invocation will have no effect."
            },
            154: function(a) {
                return "Refresh is disabled for " + pp(a[0]) + " " + a[1] + "."
            },
            152: function() {
                return "Attempted to load GPT multiple times."
            },
            155: function() {
                return "Using deprecated googletag.encryptedSignalProviders. Please use googletag.secureSignalProviders instead."
            },
            158: function(a) {
                return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
            },
            159: function(a) {
                return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
            },
            160: function(a) {
                return "slot.setConfig key " + a[0] + " is not valid for this slot."
            },
            162: function(a) {
                return "GPT script src version " + a[0] + " is deprecated and will soon expire and fail to show ads. https://developers.google.com/publisher-tag/release-notes#2023-06-19"
            }
        },
        zM = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            153: function() {
                return "Attempted to load GPT from both standard and limited ads domains."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            },
            161: function(a) {
                return "403 HTTP Response: " + a[0] + "."
            }
        };
    var AM = function(a) {
            this.context = a;
            this.l = this.g = 0;
            this.j = window;
            this.A = [];
            this.A.length = 1E3
        },
        vM = function(a) {
            return [].concat(_.zi(a.A.slice(a.g)), _.zi(a.A.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        wM = function(a, b) {
            return vM(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        xM = function(a, b) {
            return vM(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    AM.prototype.log = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e, f, g = new tM(a, b, null != (f = null == (e = c) ? void 0 : e.g) ? f : null);
        this.A[this.g] = g;
        this.g = (this.g + 1) % 1E3;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs();
        e = b.getMessageId();
        var k = yM[e] || zM[e];
        e = void 0;
        if (k) {
            e = k(h);
            if (d) throw new Co(e);
            d = this.l < _.Qf(TD) && f && _.t.console;
            if (this.j === top && d || _.z(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse")) {
                d = "[GPT] " + e;
                var l, m, n, p;
                2 === a ? null == (m = (l = _.t.console).warn) || m.call(l, d) : null == (p = (n = _.t.console).error) || p.call(n, d);
                this.l++
            }
        }
        a: if (m = e, l = c, l = void 0 === l ? null : l, this.context.Am) {
            switch (a) {
                case 2:
                    n = 1;
                    break;
                case 3:
                    n = 2;
                    break;
                default:
                    break a
            }
            var r, v, w;
            a = this.context.Qa;
            c = a.zm;
            p = new hD;
            p = _.mj(p, 1, this.context.pvsid);
            d = oh();
            p = _.Le(p, 2, d, Zc);
            p = _.lj(p, 3, this.context.Ea);
            p = _.lj(p, 4, this.context.Pa);
            p = _.mj(p, 5, this.context.hm);
            n = _.K(p, 6, n);
            m = _.lj(n, 7, m);
            n = b.getMessageId();
            m = _.K(m, 8, n);
            b = b.getMessageArgs();
            b = _.Le(m, 9, b, _.vd);
            m = Hl(null != (w = null == (r = l) ? void 0 : r.getAdUnitPath()) ? w : "");
            r = _.lj(b, 10, m);
            w = null == (v = l) ? void 0 : v.getAdUnitPath();
            v = _.lj(r, 11, w);
            c.call(a, v)
        }
        return g
    };
    AM.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var P = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    AM.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var BM = function() {
            var a = {
                    ca: hn().g,
                    wj: new Date(Date.now()),
                    Vh: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.ca ? hn().g : a.ca,
                d = void 0 === a.wj ? new Date(Date.now()) : a.wj,
                e = void 0 === a.Vh ? window.location.href : a.Vh;
            this.g = "";
            this.j = this.A = null;
            this.M = this.D = !1;
            this.l = function() {
                return !1
            };
            a = {};
            var f = {},
                g = {};
            this.I = (g[3] = (a[72] = function(h, k) {
                var l = b.A;
                h = Number(h);
                k = Number(k);
                l = null !== l ? _.uh("w5uHecUBa2S:" + h + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return l
            }, a[13] = function() {
                return _.Wa.apply(0, arguments).some(function(h) {
                    return _.z(b.g, "startsWith").call(b.g, h)
                })
            }, a[12] = function() {
                return !!_.Q(c, 6)
            }, a[15] = function(h) {
                return b.l(h)
            }, a[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (h) {
                    return !1
                }
            }, a[67] = function() {
                return b.D
            }, a[68] = function() {
                return b.M
            }, a[74] = function() {
                return _.z(_.Wa.apply(0, arguments), "includes").call(_.Wa.apply(0, arguments), String(_.uh(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.j || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        CM = function(a, b) {
            if (b && !a.A) {
                b = b.split(":");
                a.A = _.z(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("ID=")
                }) || null;
                var c;
                a.j = (null == (c = _.z(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("T=")
                })) ? void 0 : c.substring(2)) || null
            }
        };
    var Yu = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 863);
        this.o = c;
        this.Ld = Number(b);
        this.j = X(this, d);
        this.H = X(this, e);
        this.J = X(this, f);
        this.C = X(this, g)
    };
    _.T(Yu, Z);
    Yu.prototype.g = function() {
        var a = this.J.value,
            b = this.j.value,
            c = this.C.value,
            d = this.H.value,
            e = this.o;
        var f = rp(e);
        var g = b.getBoundingClientRect();
        e = _.Xk(e) ? Nm(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.DB(e, b + g.right, e + g.bottom, b);
        b = new EH;
        b = _.yi(b, 1, g.top);
        b = _.yi(b, 3, g.bottom);
        b = _.yi(b, 2, g.left);
        g = _.yi(b, 4, g.right);
        b = new FH;
        b = _.nk(b, 1, _.bd(this.Ld));
        d = ai(b, 2, !d);
        d = _.ki(d, 3, g);
        c = _.yi(d, 4, c);
        f = _.yi(c, 5, f);
        f = {
            type: "asmres",
            payload: hl(f)
        };
        a.ports[0].postMessage(f)
    };
    var zr = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.La(new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.sp(e, g)
        }))
    };
    _.T(zr, Z);
    zr.prototype.g = function() {};
    var gr = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Z.call(this, a, 1061);
        var e = this;
        this.output = hI(this);
        bI(this.output, new _.u.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.sp(e, g)
        }))
    };
    _.T(gr, Z);
    gr.prototype.g = function() {};
    var Tu = function(a, b, c, d) {
        zr.call(this, a, b, hr, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && gt(DH(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = W(this)
    };
    _.T(Tu, zr);
    Tu.prototype.g = function() {
        this.j.G(rp(this.o))
    };
    var DM = /(<head(\s+[^>]*)?>)/i,
        su = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.Ra = b;
            this.Md = c;
            this.isBackfill = d;
            this.Jb = e;
            this.output = W(this)
        };
    _.T(su, Z);
    su.prototype.g = function() {
        var a;
        0 !== this.Ra.kind || null == (a = this.Md) || !_.I(a, 1) || this.Jb ? this.output.G(this.Ra) : (a = this.Ra.hb, Ka() || (a = a.replace(DM, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(DM, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            hb: a
        }))
    };
    var EM = function(a, b, c) {
        Z.call(this, a, 1124);
        this.ge = hI(this);
        this.o = X(this, b);
        this.j = X(this, c)
    };
    _.T(EM, Z);
    EM.prototype.g = function() {
        _.KB(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.KB(this.o.value, "min-width", "100%");
        this.ge.notify()
    };
    var FM = function(a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.o = X(this, b);
        this.j = X(this, c);
        jI(this, d);
        jI(this, e)
    };
    _.T(FM, Z);
    FM.prototype.g = function() {
        var a = this.o.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.KB(this.j.value, "visibility", "visible"))
    };
    var Zu = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.vb = c;
        this.Md = d;
        this.o = e;
        this.C = f;
        this.output = W(this);
        this.j = new gr(this.context, this.slotId, Vu);
        this.H = X(this, g)
    };
    _.T(Zu, Z);
    Zu.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Md || "height" !== this.vb || a) this.j.ya(), this.output.G(!1);
        else {
            a = new tk;
            _.S(this, a);
            var b = new EM(this.context, this.o, this.C);
            J(a, b);
            J(a, this.j);
            J(a, new FM(this.context, this.o, this.C, this.j.output, b.ge));
            Ck(a);
            this.output.G(!0)
        }
    };
    var GM = [2, 1];
    var HM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 699);
        this.aa = b;
        this.slotId = c;
        this.j = d;
        this.Jd = e;
        this.vb = f;
        this.Oa = g;
        this.Qc = hI(this);
        this.H = X(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = Y(this, m);
        this.P = X(this, n)
    };
    _.T(HM, Z);
    HM.prototype.g = function() {
        var a = this.H.value,
            b = this.o.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.vb) {
            var c, d = null != (c = this.J.value) ? c : 0;
            c = this.C.value;
            var e = this.P.value,
                f = !1;
            switch (d) {
                case 1:
                case 2:
                case 4:
                case 5:
                    var g = this.context;
                    f = this.aa;
                    var h = this.slotId,
                        k = this.j,
                        l = this.Jd,
                        m = this.Oa,
                        n, p = a.parentElement ? null == (n = $m(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var r = c.height,
                        v = 0;
                    var w = 0;
                    var y = Im(k);
                    y = _.x(y);
                    for (var B = y.next(); !B.done; B = y.next()) {
                        var C = B.value;
                        Array.isArray(C) && (B = C[0], C = C[1], v < B && (v = B), w < C && (w = C))
                    }
                    w = [v, w];
                    v = w[0] < n;
                    r = w[1] < r;
                    if (v || r) {
                        w = n + "px";
                        y = {
                            "max-height": "none",
                            "max-width": w,
                            padding: "0px",
                            width: w
                        };
                        r && (y.height = "auto");
                        zp(b, a, y);
                        b = {};
                        if ((_.H = [2, 5], _.z(_.H, "includes")).call(_.H, d) || v && n > wp(e.width)) b.width = w, b["max-width"] = w;
                        r && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (G in b)
                                if (Object.prototype.hasOwnProperty.call(b, G)) {
                                    var G = !1;
                                    break c
                                }
                            G = !0
                        }
                        G ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.yp(a, b), b = !0)
                    } else b = !1;
                    b: switch (w = c.width, G = f.defaultView || f.parentWindow || _.t, d) {
                        case 2:
                        case 5:
                            a = Ap(a, G, w, e, l);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (l = Tm(e)) {
                                    B = l.width;
                                    l = Zm(h, G.document);
                                    n = $m(l, G);
                                    r = n.position;
                                    C = wp(n.width) || 0;
                                    v = $m(e, G);
                                    y = "rtl" === v.direction ? "Right" : "Left";
                                    l = y.toLowerCase();
                                    G = "absolute" === r ? 0 : wp(v["padding" + y]);
                                    v = wp(v["border" + y + "Width"]);
                                    w = Math.max(Math.round((B - Math.max(C, w)) / 2), 0);
                                    B = {};
                                    C = 0;
                                    var F = Up(n);
                                    F && (C = F[4] * ("Right" === y ? -1 : 1), y = F[3] || 1, 1 !== (F[0] || 1) || 1 !== y) && (F[0] = 1, F[3] = 1, B.transform = "matrix(" + F.join(",") + ")");
                                    y = 0;
                                    switch (r) {
                                        case "fixed":
                                            var M, R = null != (M = Number(an(n.getPropertyValue(l)))) ? M : 0,
                                                N;
                                            M = null != (N = e.getBoundingClientRect().left) ? N : 0;
                                            y = R - M;
                                            break;
                                        case "relative":
                                            y = null != (R = Number(an(n.getPropertyValue(l)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            B[l] = "0"
                                    }
                                    B["margin-" + l] = w - G - v - y - C + "px";
                                    _.yp(a, B);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.z(GM, "includes").call(GM, d) && Cp(g, f, h, k, d, c.width, c.height, p, "gpt_slotexp", m), f = !0) : f = !1;
                    break;
                case 3:
                    d = this.context, N = this.aa, f = this.slotId, h = this.j, p = this.Jd, k = this.Oa, m = a.parentElement ? null == (g = $m(a.parentElement, window)) ? void 0 : g.width : void 0, g = c.width, M = c.height, R = wp(e.height) || 0, M >= R || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? f = !1 : (p = {
                        height: M + "px"
                    }, zp(b, a, p), _.yp(a, p), Cp(d, N, f, h, 3, g, M, m, "gpt_slotred", k), f = !0)
            }!f && _.E(DD) && Cp(this.context, this.aa, this.slotId, this.j, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Oa)
        }
        this.Qc.notify()
    };
    var IM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.J = b;
        this.ka = c;
        this.j = d;
        this.H = e;
        this.C = W(this);
        this.o = W(this);
        this.P = X(this, f)
    };
    _.T(IM, Z);
    IM.prototype.g = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) JM(this);
            else {
                var b = a[1];
                a = KM(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Sm(null != (d = null != a ? a : this.j) ? d : 0, null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else JM(this)
            }
        } else JM(this)
    };
    var KM = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.ka;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Tm(null == (c = a.P.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ka) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        JM = function(a) {
            a.C.ba();
            a.o.G([])
        };
    var LM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.P = c;
        this.H = d;
        this.Qf = e;
        this.j = f;
        this.Ga = W(this);
        this.Ja = W(this);
        this.Be = W(this);
        this.cf = W(this);
        this.fa = Y(this, g);
        this.W = Y(this, h);
        this.o = X(this, k);
        this.C = X(this, l);
        this.J = X(this, m)
    };
    _.T(LM, Z);
    LM.prototype.g = function() {
        var a = MM(this),
            b = this.W.value,
            c;
        if (c = !this.H && a && b) this.o.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value,
                e, f;
            c = null != (f = null == (e = Tm(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            NM(this, !0, e, b, {
                kind: 0,
                hb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.fa.value, this.H) NM(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j) throw new Co("Missing 'width'.");
            if (null == a) throw new Co("Missing 'height'.");
            NM(this, !1, this.j, a, this.C.value)
        }
    };
    var MM = function(a) {
            a = Im(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Sm(a[0], a[1]) : null
        },
        NM = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.Qf : f;
            a.cf.G(b);
            a.Ja.G(new _.Sm(c, d));
            a.Ga.G(e);
            a.Be.Ha(f);
            g && _.KB(g, "opacity", .5)
        };
    var vu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        tk.call(this);
        b = new IM(a, b, c.width, k, l, n);
        J(this, b);
        a = new LM(a, d, e, f, h, k, g, b.C, b.o, m, n);
        J(this, a);
        this.K = {
            Ga: a.Ga,
            Ja: a.Ja,
            Be: a.Be,
            cf: a.cf
        }
    };
    _.T(vu, tk);
    var OM = function(a, b, c) {
        Z.call(this, a, 698);
        this.B = b;
        this.output = W(this);
        this.j = X(this, c)
    };
    _.T(OM, Z);
    OM.prototype.g = function() {
        this.output.Ha($m(this.j.value, this.B))
    };
    var Cu = function(a, b, c, d, e, f, g, h, k, l, m) {
        tk.call(this);
        var n = new OM(a, b, f);
        J(this, n);
        a = new HM(a, b.document, d, e, c, h, m, f, g, k, l, n.output);
        J(this, a);
        this.Qc = a.Qc
    };
    _.T(Cu, tk);
    var PM = function(a, b, c, d, e) {
        Z.call(this, a, 937, _.Qf(mE));
        this.sb = b;
        this.j = W(this);
        this.o = W(this);
        this.C = W(this);
        this.wc = c;
        this.uc = d;
        this.cd = e
    };
    _.T(PM, Z);
    PM.prototype.g = function() {
        var a = {},
            b;
        if (null == (b = _.Bm(this.sb, Oz, 2)) ? 0 : _.Q(b, 2)) a["*"] = {
            kf: !0
        };
        b = new _.u.Set;
        for (var c = _.x(_.gk(this.sb, Nz, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.x([_.I(d, 2), _.I(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                kf: _.Q(d, 3)
            };
            d = _.x(ve(d, 4, $c, 2));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.wc.G(a);
        this.j.G([].concat(_.zi(b)));
        var g, h;
        a = null == (g = _.Bm(this.sb, Oz, 2)) ? void 0 : null == (h = _.Bm(g, Iz, 1)) ? void 0 : _.gk(h, Hz, 1);
        this.o.Ha((null == a ? 0 : a.length) ? a : null);
        var k;
        this.uc.G(!(null == (k = _.Bm(this.sb, Oz, 2)) || !_.Q(k, 4)));
        var l;
        this.cd.G(!(null == (l = _.Bm(this.sb, Oz, 2)) || !_.Q(l, 5)));
        var m, n;
        g = null == (m = _.Bm(this.sb, Oz, 2)) ? void 0 : null == (n = _.Bm(m, Iz, 3)) ? void 0 : _.gk(n, Hz, 1);
        this.C.Ha((null == g ? 0 : g.length) ? g : null)
    };
    PM.prototype.K = function(a) {
        this.l(a)
    };
    PM.prototype.l = function() {
        this.wc.G({});
        this.j.G([]);
        this.o.ba();
        this.uc.G(!1);
        this.cd.G(!1);
        this.C.ba()
    };
    var QM = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.ib = b;
        this.output = new Xr;
        this.j = X(this, c);
        this.o = X(this, d)
    };
    _.T(QM, Z);
    QM.prototype.g = function() {
        (_.H = _.z(Object, "entries").call(Object, this.j.value), _.z(_.H, "find")).call(_.H, function(c) {
            var d = _.x(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.kf)
        }) && (this.ib.M = !0);
        Qn(25, this.context);
        for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next()) nh(b.value);
        this.output.notify()
    };
    var RM = function(a, b, c, d) {
        Z.call(this, a, 931);
        this.j = Y(this, b);
        this.Pc = c;
        this.vc = d
    };
    _.T(RM, Z);
    RM.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        this.Pc.G(new _.u.Map);
        if (a) {
            var c;
            a = _.x(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.gk(d, Gz, 1);
                c = 1 === _.kg(c[0], 1, 0) ? ez(c[0]) : fz(c[0], dz);
                d = _.Ng(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.vc.G(b)
    };
    RM.prototype.l = function() {
        this.Pc.G(new _.u.Map);
        this.vc.G(new _.u.Map)
    };
    var SM = function(a, b, c) {
        Z.call(this, a, 981);
        this.o = W(this);
        this.C = Y(this, b);
        this.j = c
    };
    _.T(SM, Z);
    SM.prototype.g = function() {
        var a = new _.u.Map,
            b, c = _.x(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.gk(b, Gz, 1);
            d = 1 === _.kg(d[0], 1, 0) ? ez(d[0]) : fz(d[0], dz);
            a.set(d, _.Ng(b, 2))
        }
        this.o.G(a);
        this.j.G(new Ci)
    };
    SM.prototype.l = function() {
        this.o.G(new _.u.Map);
        var a = this.j,
            b = a.G;
        var c = new Ci;
        c = _.ii(c, 1, 2);
        b.call(a, c)
    };
    var TM = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        jI(this, b);
        jI(this, c)
    };
    _.T(TM, Z);
    TM.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    };
    var UM = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.o = b;
        this.j = c;
        this.C = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new Xr
    };
    _.T(UM, Z);
    UM.prototype.g = function() {
        Zp(this.pbjs, this.o, this.j, this.C, this.requestBidsConfig);
        this.output.notify()
    };
    UM.prototype.l = function() {
        this.output.notify()
    };
    var VM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new Xr
    };
    _.T(VM, Z);
    VM.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.Qf(ID);
        if (c) this.Nd(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.x(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) {
                    a = g = f = void 0;
                    if (null == (b = this.o)) b = void 0;
                    else {
                        c = b.get;
                        if (_.E(HD)) {
                            var h = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            h = 3 !== (null == h ? void 0 : h.length) ? e : "/" + h[1] + h[2]
                        } else h = e;
                        b = c.call(b, h)
                    }
                    b = null != (f = null != (g = b) ? g : null == (a = this.o) ? void 0 : a.get(_.uh(e))) ? f : 0;
                    this.Nd(b)
                }
        }
        this.output.notify()
    };
    VM.prototype.Nd = function(a) {
        var b;
        null != (b = this.j) && ai(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.ii(c, 1, 1);
            var d;
            null != (d = this.j) && _.fi(d, 3, a);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var e, f, g;
                b = null != (g = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? g : [];
                if (Array.isArray(b))
                    for (e = _.x(b), f = e.next(); !f.done; f = e.next()) f.value.timeout = a;
                else b.timeout = a;
                var h, k;
                null == (k = (h = this.pbjs).setConfig) || k.call(h, {
                    bidderTimeout: a
                })
            }
        }
    };
    VM.prototype.l = function() {
        this.output.notify()
    };
    var WM = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.g = a;
        this.j = b;
        this.l = c;
        this.D = d;
        this.K = e;
        this.I = f;
        this.o = g;
        this.pbjs = h
    };
    _.T(WM, _.V);
    WM.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new tk;
            _.S(this, d);
            var e = new VM(this.g, this.pbjs, this.K, this.I, this.o, a),
                f = new UM(this.g, this.j, this.l, this.D, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new TM(this.g, f.output, e.output, c, b, a));
            Ck(d)
        }
    };
    var aq = function(a, b) {
        this.push = L(a, 932, function(c) {
            b.push(c)
        })
    };
    var XM = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 951);
        this.B = window;
        this.H = X(this, b);
        this.o = Y(this, d);
        this.C = X(this, e);
        this.P = X(this, f);
        this.j = Y(this, g);
        this.W = Y(this, h);
        this.J = X(this, k);
        jI(this, c);
        this.vf = null != l ? l : W(this);
        this.wf = null != m ? m : W(this)
    };
    _.T(XM, Z);
    XM.prototype.g = function() {
        var a = !!Eo().pbjs_hooks;
        this.wf.G(a);
        this.vf.Ha(a ? null : _.$f());
        var b, c = null == (b = this.o.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.Qf(ID);
        d = this.H.value;
        var e, f = null != (e = Eo().pbjs_hooks) ? e : [];
        e = new WM(this.context, this.o.value, this.C.value, this.P.value, this.j.value, this.W.value, this.J.value, d);
        _.S(this, e);
        f = _.x(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Eo().pbjs_hooks = bq(this.context, e);
        !c && !b || a || $p(d, this.B)
    };
    var YM = function(a, b, c) {
        Z.call(this, a, 966);
        this.B = b;
        this.ic = c
    };
    _.T(YM, Z);
    YM.prototype.g = function() {
        var a = this,
            b = Wh(this.B);
        if (b) this.ic.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Wh(a.B)) && a.ic.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    YM.prototype.l = function() {};
    var gq = function(a, b, c, d, e) {
        Z.call(this, a, 1146, _.Qf(mE));
        this.ib = b;
        this.B = d;
        this.j = e;
        this.o = iI(this, c)
    };
    _.T(gq, Z);
    gq.prototype.g = function() {
        var a = this.o.value,
            b = new tk;
        _.S(this, b);
        var c = new YM(this.context, this.B, this.j.ic);
        J(b, c);
        if (a) {
            a = new PM(this.context, a, this.j.wc, this.j.uc, this.j.cd);
            J(b, a);
            var d = new QM(this.context, this.ib, a.wc, a.j);
            J(b, d);
            var e = new RM(this.context, a.o, this.j.Pc, this.j.vc);
            J(b, e);
            var f = new SM(this.context, a.C, this.j.Pf);
            J(b, f);
            c = new XM(this.context, c.ic, d.output, e.vc, this.j.uc, e.Pc, f.o, f.j, a.cd, this.j.vf, this.j.wf);
            J(b, c)
        } else ZM(this);
        Ck(b)
    };
    var ZM = function(a) {
        a.j.wc.G({});
        a.j.vc.G(new _.u.Map);
        a.j.uc.G(!1);
        a.j.Pc.G(new _.u.Map);
        a.j.vf.ba();
        a.j.wf.G(!1);
        a.j.Pf.G(new Ci);
        a.j.cd.G(!1)
    };
    gq.prototype.K = function(a) {
        this.l(a)
    };
    gq.prototype.l = function() {
        ZM(this)
    };
    var $M = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 920);
        this.R = b;
        this.T = c;
        this.pbjs = f;
        this.o = g;
        this.j = W(this);
        this.C = [];
        this.P = X(this, d);
        this.J = Y(this, e.vc);
        this.H = X(this, e.uc);
        this.fa = X(this, e.Pc);
        this.W = Y(this, e.Pf)
    };
    _.T($M, Z);
    $M.prototype.g = function() {
        for (var a = new _.u.Map, b = !1, c = _.x(this.P.value), d = c.next(), e = {}; !d.done; e = {
                nh: void 0
            }, d = c.next()) {
            d = d.value;
            for (var f = {}, g = _.x(jm(this.T[d.getDomId()])), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.I(h, 1)] = qm(h);
            var k = h = g = void 0;
            (f = Li(this.pbjs, {
                ed: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, f, null != (h = this.J.value) ? h : void 0, this.H.value, this.fa.value, null != (k = null == (g = this.W) ? void 0 : g.value) ? k : void 0)) ? (b = !0, a.set(d, f)) : (null === f && this.C.push(d), a.set(d, new Di));
            e.nh = d.getDomId() + d.getAdUnitPath();
            Ei.has(e.nh) || _.sp(d, function(l) {
                return function() {
                    return Ei.delete(l.nh)
                }
            }(e))
        }
        b ? (this.o.Ha(a), this.j.G(this.C)) : (this.o.ba(), this.j.ba())
    };
    $M.prototype.K = function(a) {
        this.l(a)
    };
    $M.prototype.l = function(a) {
        this.R.error(kL(a.message));
        this.o.ba();
        this.j.ba()
    };
    var aN = function(a, b, c, d) {
        Z.call(this, a, 1019);
        this.T = c;
        this.pbjs = d;
        this.j = Y(this, b)
    };
    _.T(aN, Z);
    aN.prototype.g = function() {
        bN(this)
    };
    var bN = function(a) {
        if (!(Math.random() >= _.Qf(GD))) {
            var b = (a.j.value || []).filter(function(k) {
                return jm(a.T[k.getDomId()]).some(function(l) {
                    return "hb_pb" === ik(l, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.zi(new _.u.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                    return k.code
                })))) : _.z(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                c = new dp("haux");
                fp(c, "ius", b.map(function(k) {
                    return k.getAdUnitPath()
                }).join("~"));
                fp(c, "dids", b.map(function(k) {
                    return k.getDomId()
                }).join("~"));
                fp(c, "paucs", h.join("~"));
                ep(c, a.context);
                hp(c)
            }
        }
    };
    var iq = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1153);
        this.R = b;
        this.T = c;
        this.networkCode = d;
        this.H = e;
        this.Qd = f;
        this.j = h;
        this.J = X(this, f.wc);
        this.o = new aI(f.ic);
        g && (this.C = Y(this, g))
    };
    _.T(iq, Z);
    iq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = cN(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.R.error(jL()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new tk;
            var c = new $M(this.context, this.R, this.T, this.H, this.Qd, b, this.j.mh);
            J(a, c);
            J(a, new aN(this.context, c.j, this.T, b));
            Ck(a)
        } else this.j.mh.ba()
    };
    var cN = function(a) {
        var b;
        if (null == (b = a.C) ? 0 : b.value) return !0;
        var c = a.J.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.kf) || a.networkCode.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.kf)
        })
    };
    var dN = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.Jb = b;
        this.Oa = c;
        this.j = d;
        this.uf = e
    };
    _.T(dN, Z);
    dN.prototype.g = function() {
        for (var a = this, b = _.x(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Pe: void 0,
                Qg: void 0
            }, c = b.next()) d.Pe = c.value, d.Qg = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var g = new dp("hbm_brt");
                    ep(g, a.context);
                    fp(g, "et", e.Pe);
                    fp(g, "sf", a.Jb);
                    fp(g, "qqid", a.Oa);
                    var h, k, l;
                    fp(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    hp(g)
                }
            }
        }(d), (0, this.uf.onEvent)(d.Pe, d.Qg), _.sp(this, function(e) {
            return function() {
                return void Ol(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.uf).offEvent) ? void 0 : g.call(f, e.Pe, e.Qg))
                }, !0)
            }
        }(d))
    };
    dN.prototype.l = function() {};
    var kq = function(a, b, c, d, e) {
        Z.call(this, a, 1134);
        this.o = b;
        this.Jb = c;
        this.Oa = d;
        this.j = new aI(e)
    };
    _.T(kq, Z);
    kq.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new tk;
            var b = new dN(this.context, this.Jb, this.Oa, this.o, this.j.value);
            J(a, b);
            Ck(a)
        }
    };
    var hN = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.g = new _.u.Map;
            this.A = new _.u.Map;
            this.timer = _.Of(Kl);
            KJ() && (_.sb(window, "DOMContentLoaded", Il(a, 334, function() {
                for (var f = _.x(e.g), g = f.next(); !g.done; g = f.next()) {
                    var h = _.x(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    eN(e, g, h) && e.g.delete(g)
                }
            })), b.listen(bK, function(f) {
                f = f.detail;
                var g = f.T;
                return void fN(e, gN(d, f.lh), gt(g, 20))
            }), b.listen(cK, function(f) {
                f = f.detail;
                var g = f.T;
                f = gN(d, f.lh);
                g = gt(g, 20);
                var h = e.A.get(f);
                null != h ? MJ(h, g) : fN(e, f, g)
            }))
        },
        fN = function(a, b, c) {
            eN(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.sp(b, function() {
                return a.g.delete(b)
            }))
        },
        eN = function(a, b, c) {
            var d = Zm(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new JJ({
                B: window,
                timer: a.timer,
                Wb: d,
                ub: function(e) {
                    return void Ml(a.context, 336, e)
                },
                Hm: _.E(QF)
            });
            if (!d.A) return !1;
            MJ(d, c);
            a.A.set(b, d);
            jK(a.L, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var iN = function(a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.B = b;
        this.Z = c;
        this.output = hI(this);
        d && (this.j = Y(this, d.Zc));
        jI(this, e)
    };
    _.T(iN, Z);
    iN.prototype.g = function() {
        var a;
        sh(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.E(KD) && eh(this.Z) && (a = this.j.value, a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }));
        this.output.notify()
    };
    var jN = function(a, b, c) {
        Z.call(this, a, 1199);
        this.j = c;
        this.o = Y(this, b)
    };
    _.T(jN, Z);
    jN.prototype.g = function() {
        var a = this.o.value;
        a && (a = QL(this.j, a.getSlotElementId()), ai(a, 30, !0))
    };
    var kN = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1109);
        this.aa = c;
        this.ca = d;
        this.j = e;
        this.C = f;
        this.H = g;
        this.o = h;
        this.output = W(this);
        this.J = Y(this, b)
    };
    _.T(kN, Z);
    kN.prototype.g = function() {
        var a = this,
            b = this.J.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }), zB(this.aa, function() {
            a.H();
            a.C(b);
            _.Q(a.ca, 4) && a.j.refresh([b])
        }))
    };
    var lN = {},
        qq = (lN[64] = mL, lN[134217728] = nL, lN[32768] = oL, lN[536870912] = pL, lN[8] = qL, lN[512] = rL, lN[1048576] = sL, lN[4194304] = uL, lN);
    var mN = function(a) {
        return "22639388115" === Hl(a.getAdUnitPath())
    };
    var nN = function(a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.yb = d;
        this.o = e;
        this.R = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.T(nN, Z);
    nN.prototype.g = function() {
        var a = Fq(this.context, this.R, this.o, {
            Zh: this.format,
            adUnitPath: this.adUnitPath,
            yb: this.yb
        });
        this.j.Ha(a);
        this.output.Ha(a ? a.g : null)
    };
    var oN = function(a, b, c, d) {
        Z.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = Y(this, b)
    };
    _.T(oN, Z);
    oN.prototype.g = function() {
        var a = this.C.value;
        a && (a = QL(this.j, a.getSlotElementId()), pk(a, 27, Wz, this.o))
    };
    var pN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v) {
        tk.call(this);
        this.context = a;
        this.aa = b;
        this.adUnitPath = c;
        this.format = d;
        this.yb = e;
        this.W = f;
        this.ia = g;
        this.P = h;
        this.J = k;
        this.ca = l;
        this.K = m;
        this.fa = n;
        this.R = p;
        this.ga = r;
        this.o = v;
        a = J(this, new nN(this.context, this.adUnitPath, this.format, this.yb, this.fa, this.R));
        this.o && J(this, new oN(this.context, a.output, this.K, this.o));
        this.ga && J(this, new jN(this.context, a.output, this.K));
        J(this, new kN(this.context, a.output, this.aa, this.ca, this.W, this.ia, this.P, this.J));
        this.g = {
            Mo: a.j
        }
    };
    _.T(pN, tk);
    var av = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1198);
        this.aa = b;
        this.googletag = c;
        this.ca = d;
        this.j = e;
        this.o = f;
        this.R = g;
        this.rd = h;
        this.C = k
    };
    _.T(av, Z);
    av.prototype.g = function() {
        for (var a = this, b = _.x(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.kg(d, 2, 0);
            c && d && (this.rd.add(Hl(c)), c = new pN(this.context, this.aa, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.ca, this.j, this.o, this.R, !0), Ck(c), _.S(this, c))
        }
    };
    var Mt = function(a, b) {
        Z.call(this, a, 1110);
        this.B = b;
        this.output = W(this)
    };
    _.T(Mt, Z);
    Mt.prototype.g = function() {
        var a = this.B;
        a = _.E(MF) && void 0 !== a.credentialless && (_.E(NF) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var qN = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.aa = d;
        this.output = hI(this);
        this.j = X(this, e);
        jI(this, f)
    };
    _.T(qN, Z);
    qN.prototype.g = function() {
        var a = this.O,
            b = a.ca;
        a = a.T;
        for (var c = _.x(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var g = this.L,
                h = this.aa;
            Gq(e, f) && !g.Hc(d) && Hq(d, h, e, f)
        }
        this.output.notify()
    };
    var Lq = function(a, b, c) {
        Z.call(this, a, 1208);
        this.j = b;
        this.ig = c;
        this.output = new Xr
    };
    _.T(Lq, Z);
    Lq.prototype.g = function() {
        var a, b = null == (a = this.ig) ? void 0 : _.Bm(a, oA, 1);
        if (b) {
            a = this.j;
            var c = new jH;
            c = ai(c, 5, !0);
            qH(a, "__eoi", b, c)
        }
        this.output.notify()
    };
    var Xq = function(a, b, c, d) {
        Z.call(this, a, 896);
        this.pg = b;
        this.Gc = d;
        this.Mc = W(this);
        c && jI(this, c)
    };
    _.T(Xq, Z);
    Xq.prototype.g = function() {
        this.Mc.G(this.pg.ld(".google.cn" === this.Gc))
    };
    var eu = function(a, b) {
        Z.call(this, a, 1018);
        this.gd = hI(this);
        this.j = Y(this, b)
    };
    _.T(eu, Z);
    eu.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value)) a = void 0;
        else {
            var d;
            null == (b = _.Bm(a, dG, 5)) ? d = void 0 : d = ve(b, 1, $c, 2);
            a = d
        }
        a = _.x(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next()) nh(c.value);
        this.gd.notify()
    };
    var fu = function(a, b) {
        Z.call(this, a, 1070);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(fu, Z);
    fu.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.Bm(a, dG, 5);
        if (b) {
            a = [];
            for (var c = _.x(ve(b, 2, Se, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Wz;
                var f = new Uz;
                e = _.nk(f, 1, hd(e));
                d = _.ki(d, 2, e);
                null != Ki(b, 3) && (e = new Sz, e = _.ii(e, 1, 1), f = _.az(b, 3), e = _.fi(e, 2, f), _.ki(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var rN = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.output = W(this);
        this.o = Y(this, b);
        this.j = Y(this, c);
        this.C = kI(this, [b, d])
    };
    _.T(rN, Z);
    rN.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && sN(this, a) ? this.output.G(a) : this.output.ba()
        } else this.output.ba()
    };
    rN.prototype.K = function(a) {
        this.l(a)
    };
    rN.prototype.l = function() {
        this.output.ba()
    };
    var sN = function(a, b) {
        return _.gk(a.j.value, Qz, 1).some(function(c) {
            return _.I(c, 1) === b
        })
    };
    var tN = function(a, b) {
        Z.call(this, a, 1015);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(tN, Z);
    tN.prototype.g = function() {
        if (this.o.value)
            if (_.gk(this.o.value, Qz, 1).length) {
                var a = _.gk(this.o.value, Qz, 1)[0];
                (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, _.kg(a, 3, 0)) ? this.j.G(_.I(a, 1)) : this.j.ba()
            } else this.j.ba();
        else this.j.ba()
    };
    tN.prototype.K = function(a) {
        this.l(a)
    };
    tN.prototype.l = function() {
        this.j.ba()
    };
    var uN = function(a, b, c) {
        Z.call(this, a, 1017);
        this.B = c;
        this.output = hI(this);
        this.j = Y(this, b)
    };
    _.T(uN, Z);
    uN.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = xG(this.B, this.j.value, function(c) {
                if (!c) {
                    c = mg(b.g);
                    for (var d = _.x(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.Tj(e.value)
                }
                a.output.notify()
            });
            b.start(_.E(VD))
        } else this.output.notify()
    };
    uN.prototype.K = function(a) {
        this.l(a)
    };
    uN.prototype.l = function() {
        this.output.notify()
    };
    var vN = function(a, b) {
        Z.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(vN, Z);
    vN.prototype.g = function() {
        var a = Hl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    vN.prototype.K = function(a) {
        this.l(a)
    };
    vN.prototype.l = function() {
        this.output.ba()
    };
    var du = function(a, b, c, d) {
        Z.call(this, a, 906, _.Qf(nE));
        this.j = hI(this);
        if (b === b.top) {
            var e = new tk;
            _.S(this, e);
            var f = new tN(a, c);
            J(e, f);
            d = new zr(a, d, bK, function(g) {
                return g.detail.T
            });
            J(e, d);
            d = new vN(a, d.output);
            J(e, d);
            a = new rN(a, f.j, c, d.output);
            J(e, a);
            b = new uN(this.context, a.output, b);
            J(e, b);
            eI(this.D, b.output, !0);
            Ck(e)
        } else this.j.notify()
    };
    _.T(du, Z);
    du.prototype.g = function() {
        this.j.notify()
    };
    du.prototype.K = function(a) {
        this.l(a)
    };
    du.prototype.l = function() {
        this.j.notify()
    };
    var Ku = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        jI(this, d);
        this.j = X(this, e)
    };
    _.T(Ku, Z);
    Ku.prototype.g = function() {
        var a = this;
        this.slotId.listen(hr, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.j.value,
                        g = new oA;
                    var h = ti(g, 1, d ? "1" : "0");
                    var k = ti(_.fi(h, 2, 2147483647), 3, "/");
                    var l = ti(k, 4, a.B.location.hostname);
                    var m = new _.oH(a.B);
                    qH(m, "__gpi_opt_out", l, f);
                    if (d || e) rH(m, "__gads", f), rH(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var wN = function(a, b, c) {
        Z.call(this, a, 944);
        this.B = b;
        this.j = new _.oH(this.B);
        this.o = X(this, c)
    };
    _.T(wN, Z);
    wN.prototype.g = function() {
        var a = this.o.value;
        if (pH(this.j, a)) {
            var b = _.Rn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new oA;
                b = ti(c, 1, b);
                b = ti(_.fi(b, 2, 2147483647), 3, "/");
                b = ti(b, 4, this.B.location.hostname);
                qH(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var xN = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.Z = b;
        this.Da = c;
        this.j = X(this, d)
    };
    _.T(xN, Z);
    xN.prototype.g = function() {
        if (eh(this.Z)) {
            var a = new _.u.Set;
            var b = _.gk(this.j.value, oA, 14);
            b = _.x(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = gz(c, 5)) ? d : 1;
                a.has(e) || (qH(this.Da, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        }
    };
    var yN = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        Dt = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.g[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.zi(a))
        };
    var zN = function(a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.ab = c;
        this.j = X(this, d)
    };
    _.T(zN, Z);
    zN.prototype.g = function() {
        var a = ve(this.j.value, 23, _.Yc, 2);
        a = _.x(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.ab;
            if (!_.z(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3], _.z(_.H, "includes")).call(_.H, b)) {
                var d = tH[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.ip(document, d)) d.id = e
                }
                c.A.push(b);
                e = new uH(b);
                c.hostpageLibraryTokens.push(e);
                c = Eo();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.A
            }
            c = void 0;
            e = this.ab;
            d = this.slotId;
            e.g[b] = null != (c = e.g[b]) ? c : new _.u.Set;
            e.g[b].add(d)
        }
    };
    var $q = 0;
    var $u = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.B = b;
        this.bf = c;
        this.o = X(this, d);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T($u, Z);
    $u.prototype.g = function() {
        var a = this,
            b, c, d = null == (b = this.bf) ? void 0 : null == (c = _.I(b, 1)) ? void 0 : c.toUpperCase(),
            e, f;
        b = null == (e = this.bf) ? void 0 : null == (f = _.I(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var g = this.C.value,
                h = g.style.height,
                k = g.style.width,
                l = g.style.display,
                m = g.style.position,
                n = br(e.id + "_top", d),
                p = br(e.id + "_bottom", b);
            _.yp(p, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            g.appendChild(n);
            g.appendChild(p);
            _.yp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.yp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var r;
            _.yp(g, {
                position: "relative",
                display: (null == (r = this.B.screen.orientation) ? 0 : r.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            tp(this, 722, this.B, "orientationchange", function() {
                var v;
                (null == (v = a.B.screen.orientation) ? 0 : v.angle) ? _.yp(g, {
                    display: "none"
                }): _.yp(g, {
                    display: "block"
                })
            });
            _.sp(this, function() {
                _.ZA(n);
                _.ZA(p);
                g.style.position = m;
                g.style.height = h;
                g.style.width = k;
                g.style.display = l
            })
        }
    };
    var AN = _.Bw(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        Hu = function(a, b, c, d, e) {
            Z.call(this, a, 1007);
            this.zg = b;
            this.j = X(this, d);
            c && (this.o = X(this, c));
            e && jI(this, e)
        };
    _.T(Hu, Z);
    Hu.prototype.g = function() {
        if (eh(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.zg;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Ya(AN, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.ox) throw new cy("TrustedResourceUrl", 3);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.cb(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var tu = function(a, b, c, d) {
        Z.call(this, a, 1176);
        this.o = b;
        this.T = c;
        this.R = d;
        this.j = W(this)
    };
    _.T(tu, Z);
    tu.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new uu;
        (a = null != Ki(b, 2) ? null != dr(b) && 0 !== (0, _.Xp)() ? Ki(b, 2) * dr(b) : Ki(b, 2) : null) && _.E(jE) && (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, xr(this.T)) ? (P(this.R, xL()), this.j.ba()) : this.j.Ha(a)
    };
    var Bu = function(a, b, c, d, e, f) {
        f = void 0 === f ? cr : f;
        Z.call(this, a, 666);
        this.o = f;
        this.output = hI(this);
        jI(this, b);
        e && jI(this, e);
        this.j = X(this, c);
        this.C = Y(this, d)
    };
    _.T(Bu, Z);
    Bu.prototype.g = function() {
        var a = this.C.value,
            b = this.j.value;
        null == a || 0 > a || !bn(b) ? this.output.notify() : BN(this, a, b)
    };
    var BN = function(a, b, c) {
        var d = a.o(b, Il(a.context, 291, function(e, f) {
            e = _.x(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.sp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var Au = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Jd = c;
        this.L = d;
        this.output = hI(this);
        this.o = X(this, e);
        this.j = Y(this, f);
        g && jI(this, g)
    };
    _.T(Au, Z);
    Au.prototype.g = function() {
        var a = this,
            b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0, _.Xp)() || 0 < c)
            if (b = GH(document), HH(document) && b && (0 < oK(this.L, this.slotId) || !CN(this)) && b) {
                var d = tp(this, 324, document, b, function() {
                    HH(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var CN = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = cv(b.document, b).y,
                d = c + a.Jd.height,
                e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var zu = function(a, b) {
        Z.call(this, a, 676);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.T(zu, Z);
    zu.prototype.g = function() {
        var a = Pm(this.j.value);
        this.output.G(a)
    };
    var er = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.u.globalThis.IntersectionObserver : f;
        Z.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = hI(this);
        e && jI(this, e)
    };
    _.T(er, Z);
    er.prototype.g = function() {
        this.X.some(function(a) {
            return !bn(Zm(a))
        }) ? this.output.notify() : bI(this.output, DN(this, this.o))
    };
    var DN = function(a, b) {
        return new _.u.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.x(a.X), f = e.next(), g = {}; !f.done; g = {
                        Af: void 0
                    }, f = e.next()) {
                    f = f.value;
                    g.Af = Zm(f);
                    if (!g.Af) return;
                    d.observe(g.Af);
                    jK(a.L, f, function(h) {
                        return function() {
                            return void d.unobserve(h.Af)
                        }
                    }(g))
                }
                _.sp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var EN = [{
            name: "Interstitial",
            format: 1,
            he: 5
        }, {
            name: "TopAnchor",
            format: 2,
            he: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            he: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            he: 8
        }, {
            name: "RightSideRail",
            format: 5,
            he: 9
        }],
        au = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.aa = b;
            this.googletag = c;
            this.o = d;
            this.j = e;
            this.R = f;
            this.C = g;
            this.output = W(this)
        };
    _.T(au, Z);
    au.prototype.g = function() {
        var a = this;
        EN.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.he;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new pN(a.context, a.aa, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.o, a.R, !1);
            _.S(a, c);
            Ck(c)
        })
    };
    var FN = function(a, b, c) {
        Z.call(this, a, 1163);
        _.E(Lu);
        this.j = X(this, b);
        c && jI(this, c)
    };
    _.T(FN, Z);
    FN.prototype.g = function() {
        this.j.value.Sj();
        this.j.value.Ma()
    };
    var Nu = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = W(this);
        this.o = X(this, g);
        this.J = X(this, h);
        this.C = Y(this, k);
        this.H = X(this, l)
    };
    _.T(Nu, Z);
    Nu.prototype.g = function() {
        var a = this,
            b;
        if (null != (b = this.gb) && _.Q(b, 12, !1)) {
            b = this.C.value.Zk;
            var c = _.Iq(this.L, this.slotId),
                d = this.J.value,
                e = this.o.value;
            _.yp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (GN) GN.Qj(e, this.H.value);
            else {
                var f, g;
                GN = new b(this.context, this.format, e, this.B, d, this.L, this.slotId, null != (g = null == (f = this.gb) ? void 0 : _.Bm(f, fA, 16)) ? g : null);
                f = {};
                g = _.x(_.gk(this.gb, eA, 13));
                for (b = g.next(); !b.done; b = g.next()) b = b.value, f[ik(b, 1)] = ik(b, 2);
                GN.Rj(f);
                _.E(Lu) ? (GN.Nj(), this.j.G(GN)) : GN.Ma();
                iK(this.L, this.slotId, function() {
                    GN && (GN.ya(), GN = null);
                    c && _.mK(a.L, a.slotId)
                })
            }
            _.sp(this, function() {
                return _.ZA(e)
            })
        }
    };
    var GN = null;
    var Mu = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1155);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.gb = f;
        this.j = g;
        this.C = h;
        this.o = k;
        this.H = l
    };
    _.T(Mu, Z);
    Mu.prototype.g = function() {
        var a;
        if (null != (a = this.gb) && null != On(a, 12)) {
            a = new tk;
            _.S(this, a);
            var b, c = (null == (b = this.gb) ? 0 : _.Q(b, 15)) ? J(a, new gr(this.context, this.slotId, hr, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new Nu(this.context, this.L, this.format, this.slotId, this.B, this.gb, this.j, this.C, this.o, this.H);
            J(a, b);
            b = new FN(this.context, b.j, c);
            J(a, b);
            Ck(a)
        }
    };
    var nr = function(a, b, c) {
        Z.call(this, a, 1150);
        this.B = b;
        this.output = hI(this);
        jI(this, c)
    };
    _.T(nr, Z);
    nr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.sp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        bI(this.output, new _.u.Promise(function(b) {
            return void tp(a, a.id, a.B, "hashchange", function(c) {
                Ax(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var HN = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        IN = function(a, b) {
            HN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.vast = this.companyIds = this.yieldGroupIds = null
        };
    _.T(IN, HN);
    var JN = function() {
        HN.apply(this, arguments)
    };
    _.T(JN, HN);
    var KN = function(a, b, c) {
        HN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(KN, HN);
    var LN = function() {
        HN.apply(this, arguments)
    };
    _.T(LN, HN);
    var MN = function() {
        HN.apply(this, arguments)
    };
    _.T(MN, HN);
    var NN = function() {
        HN.apply(this, arguments)
    };
    _.T(NN, HN);
    var ON = function() {
        HN.apply(this, arguments)
    };
    _.T(ON, HN);
    var PN = function(a, b, c, d) {
        HN.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(PN, HN);
    var QN = function(a, b, c) {
        HN.call(this, a, b);
        this.payload = c
    };
    _.T(QN, HN);
    var RN = function() {
        HN.apply(this, arguments)
    };
    _.T(RN, HN);
    var SN = function(a, b, c) {
        HN.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(SN, HN);
    var TN = function() {
        HN.apply(this, arguments)
    };
    _.T(TN, HN);
    var or = function(a, b, c, d, e, f) {
        Z.call(this, a, 1151);
        this.slotId = b;
        this.za = c;
        jI(this, d);
        a = [e];
        f && a.push(f);
        f = new cI(a, !0);
        eI(this.D, f)
    };
    _.T(or, Z);
    or.prototype.g = function() {
        ht(this.za, "gameManualInterstitialSlotClosed", 1148, new TN(this.slotId, "publisher_ads"))
    };
    var lr = function(a, b, c, d) {
        Z.call(this, a, 1149);
        this.slotId = b;
        this.za = c;
        this.output = hI(this);
        jI(this, d)
    };
    _.T(lr, Z);
    lr.prototype.g = function() {
        var a = new _.Qh,
            b = a.promise;
        ht(this.za, "gameManualInterstitialSlotReady", 1147, new SN(this.slotId, "publisher_ads", a.resolve));
        bI(this.output, b.then(function() {
            return AB(10)
        }))
    };
    var kr = function(a, b, c) {
        c = void 0 === c ? UN : c;
        Z.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.Qf(jr);
        this.output = hI(this);
        jI(this, b)
    };
    _.T(kr, Z);
    kr.prototype.g = function() {
        var a = this;
        this.j.tf++ ? bI(this.output, AB(this.o * (this.j.tf - 2) + (this.o - (Date.now() - this.j.Ag))).then(function() {
            a.j.Ag = Date.now();
            a.j.tf--
        })) : (this.j.Ag = Date.now(), AB(this.o).then(function() {
            return void a.j.tf--
        }), this.output.notify())
    };
    var UN = {
        tf: 0,
        Ag: Date.now()
    };
    var VN = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        WN = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        mr = function(a, b, c, d, e) {
            Z.call(this, a, 1150);
            this.B = b;
            this.j = X(this, c);
            this.C = X(this, d);
            jI(this, e);
            this.o = new _.uI(this.B)
        };
    _.T(mr, Z);
    mr.prototype.g = function() {
        var a = 0 === (0, _.Xp)() ? "rgba(1,1,1,0.5)" : "white";
        _.yp(this.j.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Xp)() ? WN : VN));
        _.yp(this.C.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, VN));
        _.sp(this, _.HI(this.B.document, this.B));
        a = {};
        bB(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.B === this.B.top) {
            var b = _.wI(this.o, 2147483646);
            _.AI(b);
            _.sp(this, function() {
                return void _.BI(b)
            })
        }
    };
    var qr = function() {
        this.ag = 1E3
    };
    qr.prototype.send = function(a, b) {
        a.pj(b)
    };
    var tr = function() {
        this.ag = _.Qf(IF);
        this.fb = 17
    };
    tr.prototype.send = function(a, b) {
        var c = _.nj(b, _.oj, 2);
        _.Ne(c, 1, _.Wc, this.fb);
        a.Dm(b)
    };
    var XN = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.P = c;
        this.j = d;
        this.o = W(this);
        this.C = X(this, e);
        this.W = X(this, f);
        this.H = Y(this, g);
        this.J = Y(this, h);
        this.context.V.log(578856259, _.sj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 7
        })
    };
    _.T(XN, Z);
    XN.prototype.g = function() {
        var a = this;
        this.context.V.log(578856259, _.sj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 8
        });
        var b = this.W.value,
            c = this.C.value,
            d = this.J.value.tl,
            e = new _.UJ(this.context),
            f = null != Dm(this.j, 14) ? 60 * gt(this.j, 14) : 604800;
        b = new d(this.context, window, c, b, e, this.P, YN(this), new _.u.Set(ve(this.j, 15, _.Yc, 2)), mN(this.slotId), function() {
            return void a.ya()
        }, function() {
            vr(a.context, {
                pb: 1,
                payload: function() {
                    var g = new sq,
                        h = _.tq(g, fD, 5, vq);
                    _.yi(h, 1, _.ag());
                    return g
                }
            });
            a.ya()
        }, f, this.H.value);
        b.ia();
        _.S(this, b);
        this.o.G(b);
        this.context.V.log(578856259, _.sj, {
            pvsid: this.context.pvsid,
            Ea: this.context.Ea,
            fb: 17,
            Hb: this.context.Pa,
            U: 9
        })
    };
    var YN = function(a) {
        var b = {};
        a = _.gk(a.j, eA, 13);
        a = _.x(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[ik(c, 1)] = ik(c, 2);
        return b
    };
    var ZN = function(a, b, c, d) {
        Z.call(this, a, 1210);
        this.action = b;
        this.j = Y(this, c);
        jI(this, d)
    };
    _.T(ZN, Z);
    ZN.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.rb() && this.action()
    };
    var $N = function(a, b, c) {
        Z.call(this, a, 1121);
        this.aa = b;
        this.output = hI(this);
        this.C = !1;
        this.H = X(this, c)
    };
    _.T($N, Z);
    $N.prototype.g = function() {
        var a = this;
        if (this.o = wr(Il(this.context, this.id, function(b) {
                b = _.x(b);
                for (var c = b.next(); !c.done; c = b.next()) c = 100 * c.value.intersectionRatio, _.z(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0, HH(a.aa) || aO(a)) : (a.C = !1, bO(a))
            }))) _.sp(this, function() {
            var b;
            null == (b = a.o) || b.disconnect();
            bO(a)
        }), this.o.observe(this.H.value), this.J = tp(this, this.id, this.aa, "visibilitychange", function() {
            HH(a.aa) ? bO(a) : a.C && !a.j && aO(a)
        })
    };
    var aO = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!HH(a.aa)) {
                    a.output.notify();
                    var b;
                    null == (b = a.o) || b.disconnect();
                    var c;
                    null == (c = a.J) || c.call(a)
                }
            }, 1E3)
        },
        bO = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var Ou = function(a, b, c, d, e, f, g, h, k, l, m) {
        m = void 0 === m ? function() {
            return _.ag()
        } : m;
        Z.call(this, a, 1141);
        this.slotId = b;
        this.J = c;
        this.o = d;
        this.aa = e;
        this.j = f;
        this.P = g;
        this.Ab = h;
        this.H = k;
        this.C = l;
        this.nc = m;
        this.output = W(this)
    };
    _.T(Ou, Z);
    Ou.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new tk;
            _.S(this, b);
            var c = J(b, new XN(this.context, this.slotId, this.J, this.o, this.j, this.P, this.Ab, this.H));
            _.sp(c, function() {
                return void a.ya()
            });
            this.output.La(c.o.promise.then(function() {
                return !0
            }));
            if (_.E(dE) || _.Qf(gE)) {
                var d = J(b, new $N(this.context, this.aa, this.j));
                _.Qf(gE) && J(b, new ZN(this.context, function() {
                    vr(a.context, {
                        pb: _.Qf(gE),
                        payload: function() {
                            var e = new eD,
                                f = a.nc();
                            null !== f && _.yi(e, 1, f);
                            return gD(e)
                        }
                    })
                }, c.o, d.output));
                _.E(dE) && J(b, new ZN(this.context, function() {
                    vr(a.context, {
                        pb: 1,
                        payload: function() {
                            var e = new eD,
                                f = a.nc();
                            null !== f && _.yi(e, 1, f);
                            ai(e, 2, !0);
                            return gD(e)
                        }
                    });
                    a.C()
                }, c.o, d.output))
            }
            Ck(b)
        } else this.output.G(!1)
    };
    var cO = function(a) {
        this.module = a
    };
    cO.prototype.toString = function() {
        return String(this.module)
    };
    _.dO = new cO(2);
    _.eO = new cO(5);
    _.fO = new cO(6);
    var Gu = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.gb = d;
        this.j = e;
        this.output = W(this);
        f && jI(this, f)
    };
    _.T(Gu, Z);
    Gu.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.gb) || !_.Q(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.La(this.o.load(_.dO)) : this.output.ba()
    };
    var gO = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.O = b;
        this.j = c;
        this.output = hI(this);
        this.o = X(this, d);
        jI(this, e)
    };
    _.T(gO, Z);
    gO.prototype.g = function() {
        for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.O.T[b.value.getDomId()]) ? void 0 : xr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.dO);
                return
            }
        }
        this.output.notify()
    };
    var hO = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.za = c;
        jI(this, d);
        kI(this, [e, f])
    };
    _.T(hO, Z);
    hO.prototype.g = function() {
        ht(this.za, "rewardedSlotClosed", 703, new RN(this.slotId, "publisher_ads"))
    };
    var iO = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.za = c;
        jI(this, d);
        this.j = Y(this, e)
    };
    _.T(iO, Z);
    iO.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        ht(this.za, "rewardedSlotGranted", 702, new QN(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var jO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        kO = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.B = b;
            this.H = f;
            this.output = hI(this);
            this.o = X(this, c);
            this.C = X(this, d);
            jI(this, e);
            this.j = new _.uI(this.B)
        };
    _.T(kO, Z);
    kO.prototype.g = function() {
        var a = this;
        if (!this.H.Tc) {
            var b = 0 === (0, _.Xp)() ? "rgba(1,1,1,0.5)" : "white";
            _.yp(this.C.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, jO));
            _.sp(this, _.HI(this.B.document, this.B));
            bB(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.wI(this.j, 2147483646);
                _.AI(c);
                _.sp(this, function() {
                    _.BI(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var lO = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.B = b;
        this.j = X(this, c);
        jI(this, d)
    };
    _.T(lO, Z);
    lO.prototype.g = function() {
        if (this.B === this.B.top) var a = bB(this.j.value),
            b = tp(this, 503, this.B, "hashchange", function(c) {
                Ax(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var mO = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.za = c;
        this.output = hI(this);
        this.j = X(this, d)
    };
    _.T(mO, Z);
    mO.prototype.g = function() {
        var a = this.j.value,
            b = new _.Qh,
            c = b.promise,
            d;
        ht(this.za, "rewardedSlotReady", 701, new PN(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        bI(this.output, c)
    };
    var nO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        oO = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        pO = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.C = W(this);
            this.o = hI(this);
            this.H = X(this, c);
            this.j = kI(this, [d, e])
        };
    _.T(pO, Z);
    pO.prototype.g = function() {
        if ("ha_before_make_visible" === this.j.value.message) this.o.notify();
        else {
            var a = _.E(kE) ? nO : oO;
            _.yp(this.H.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.Xp)() ? a : nO));
            this.C.G(this.j.value)
        }
    };
    var Pu = function(a, b, c, d, e, f) {
        tk.call(this);
        var g = Ar(b, "granted", a);
        J(this, g);
        var h = Ar(b, "prefetched", a);
        J(this, h);
        var k = Ar(b, "closed", a);
        J(this, k);
        var l = Ar(b, "ha_before_make_visible", a);
        J(this, l);
        var m = new pO(a, b, e, h.output, l.output);
        J(this, m);
        h = new mO(a, b, c, m.C);
        J(this, h);
        f = new kO(a, d, e, f, h.output, m.o);
        J(this, f);
        J(this, new lO(a, d, e, f.output));
        J(this, new iO(a, b, c, h.output, g.output));
        J(this, new hO(a, b, c, h.output, k.output, l.output))
    };
    _.T(Pu, tk);
    var Pt = function(a, b) {
        Z.call(this, a, 1031);
        this.B = b
    };
    _.T(Pt, Z);
    Pt.prototype.g = function() {
        this.B === this.B.top && ql(this.B)
    };
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var qO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        Br = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = qO[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var rO = Yg({
            gsppack: Go,
            fpt: ah,
            eids: bh()
        }),
        sO = Yg({
            paw_id: ah,
            signal: ah,
            error: ah,
            eids: bh()
        }),
        tO = function(a, b, c, d, e) {
            b = void 0 === b ? new _.u.Set : b;
            c = void 0 === c ? null : c;
            d = void 0 === d ? null : d;
            e = void 0 === e ? null : e;
            _.V.call(this);
            this.B = a;
            this.ports = b;
            this.l = c;
            this.g = d;
            this.j = e
        };
    _.T(tO, _.V);
    tO.prototype.A = function() {
        _.V.prototype.A.call(this);
        uO(this);
        for (var a = _.x(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var vO = function(a, b, c) {
            b.onmessage = c;
            a.ports.add(b)
        },
        uO = function(a) {
            null !== a.l && (_.eg(a.B, "message", a.l), a.l = null)
        },
        wO = function(a, b) {
            for (var c = _.x(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
            uO(a);
            a.g = b
        },
        xO = function(a, b) {
            vO(a, b, function(c) {
                a: {
                    try {
                        var d = JSON.parse(c.data);
                        if (sO(d)) {
                            var e = d;
                            break a
                        }
                    } catch (k) {}
                    e = void 0
                }
                if (e) {
                    null === a.g && wO(a, b);
                    var f;
                    null == (f = a.j) || f.resolve(e.signal);
                    a.j = null
                } else {
                    a: {
                        try {
                            var g = JSON.parse(c.data);
                            if (rO(g) && g.gsppack) {
                                var h = g;
                                break a
                            }
                        } catch (k) {}
                        h = void 0
                    }
                    h && null === a.g && wO(a, b)
                }
            });
            Cr(b)
        },
        yO = function(a) {
            if (a.j) return a.j.promise;
            if (null !== a.l) throw Error("a poll message listener is already registered");
            a.j = new _.Qh;
            null === a.g ? (a.l = function(b) {
                b = null == b.data || "" === b.data ? b.ports[0] : void 0;
                b && xO(a, b)
            }, _.sb(a.B, "message", a.l)) : Cr(a.g);
            return a.j.promise
        };
    var Nt = function(a, b, c, d) {
        c = void 0 === c ? Uh : c;
        d = void 0 === d ? new tO(b) : d;
        Z.call(this, a, 1063);
        this.B = b;
        this.H = c;
        this.o = d;
        this.C = W(this);
        this.rc = W(this);
        this.j = !1;
        _.S(this, d)
    };
    _.T(Nt, Z);
    Nt.prototype.g = function() {
        var a = this;
        if (_.E(YD)) {
            this.j = Vh(this.B);
            var b = !this.j && _.E(WD) ? yO(this.o) : void 0,
                c = null,
                d = 0,
                e = function() {
                    return _.E(WD) && null !== a.o.g ? b ? b.then(function(h) {
                        b = void 0;
                        return h
                    }) : yO(a.o) : a.H(a.B)
                },
                f = Il(this.context, this.id, function() {
                    var h, k, l;
                    return _.ub(function(m) {
                        switch (m.g) {
                            case 1:
                                return h = "0", m.l = 2, m.yield(e(), 4);
                            case 4:
                                h = null != (k = m.A) ? k : "0";
                                1E4 < h.length && (Ml(a.context, a.id, new Co("ML:" + h.length)), h = "0");
                                m.g = 3;
                                m.l = 0;
                                break;
                            case 2:
                                l = wb(m), Ml(a.context, a.id, l);
                            case 3:
                                c = h, d = _.$f(a.B) + 3E5, m.g = 0
                        }
                    })
                });
            if (!_.E(WD) || this.j) var g = (_.H = f(), _.z(_.H, "finally")).call(_.H, function() {
                g = void 0
            });
            this.C.G(function() {
                var h, k, l;
                return _.ub(function(m) {
                    if (1 == m.g) {
                        h = _.E(WD) && null !== a.o.g;
                        if (!a.j && !h) return m.return("");
                        k = _.$f(a.B) >= d;
                        l = null === c || "0" === c;
                        if (!k && !l) {
                            m.g = 2;
                            return
                        }
                        g || (g = (_.H = f(), _.z(_.H, "finally")).call(_.H, function() {
                            g = void 0
                        }));
                        return m.yield(g, 2)
                    }
                    return m.return(c)
                })
            });
            this.j ? this.rc.G("WEBVIEW_SDK_PAW") : this.rc.G("WEBVIEW_SDK_PACT")
        } else this.C.G(function() {
            return _.u.Promise.resolve("")
        }), this.rc.G("WEBVIEW_SDK_UNKNOWN")
    };
    Nt.prototype.l = function() {
        this.C.G(function() {
            return _.u.Promise.resolve("")
        });
        this.j ? this.rc.G("WEBVIEW_SDK_PAW") : this.rc.G("WEBVIEW_SDK_PACT")
    };
    var zO = function(a, b) {
        Z.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = Y(this, b))
    };
    _.T(zO, Z);
    zO.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.La(this.j.value()) : this.output.G("")
    };
    zO.prototype.l = function() {
        this.output.G("")
    };
    var Nr = new _.u.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Ur = new _.u.Set(["disablePersonalization"]);
    var Yr = function(a, b, c) {
        Z.call(this, a, 1122);
        this.aa = b;
        this.j = c;
        hI(this, c)
    };
    _.T(Yr, Z);
    Yr.prototype.g = function() {
        var a = this,
            b = Gl(this.context);
        bI(this.j, new _.u.Promise(function(c) {
            return void JH(function() {
                c();
                b()
            }, a.aa)
        }))
    };
    var Wt = function(a, b, c) {
        Z.call(this, a, 1107);
        this.B = b;
        this.j = c;
        W(this, c)
    };
    _.T(Wt, Z);
    Wt.prototype.g = function() {
        var a = qh(this.B.isSecureContext, this.B.navigator, this.B.document),
            b = rh(this.B.isSecureContext, this.B.document),
            c = sh(this.B.isSecureContext, this.B, this.B.document),
            d = !(!this.B.isSecureContext || !ph("attribution-reporting", this.B.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Ha(0 === e ? null : e)
    };
    Wt.prototype.l = function() {
        this.j.ba()
    };
    var AO = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1118, _.Qf(qE));
        this.C = b;
        this.J = e;
        this.T = f;
        W(this, e);
        c && (this.P = Y(this, c));
        d && (this.H = Y(this, d));
        g && (this.o = X(this, g));
        h && (this.j = iI(this, h))
    };
    _.T(AO, Z);
    AO.prototype.g = function() {
        var a = new RH;
        a = _.Me(a, 1, _.bd(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.lj(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else this.j.Tc() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = BO(this, null == (c = this.P) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.ki(a, 2, b)
        }
        this.J.G(a)
    };
    var BO = function(a, b, c) {
            switch (_.Qf(Yt)) {
                case 1:
                    var d = 1;
                    break;
                case 2:
                    d = 2;
                    break;
                case 3:
                    d = 3;
                    break;
                default:
                    d = 0
            }
            var e = new QH;
            _.E(KF) || _.K(e, 1, d);
            null == b || b.forEach(function(h, k) {
                if (!_.E(GF) || h.length) {
                    var l = PH(new OH, h),
                        m;
                    null == (m = null == c ? void 0 : c.get(k)) || m.forEach(function(n, p) {
                        var r = new LH;
                        n = _.Me(r, 2, _.bd(n), 0);
                        p = _.Me(n, 1, _.bd(_.uh(p)), 0);
                        pk(l, 2, LH, p)
                    });
                    Ke(e, 2, OH).set(k, l)
                }
            });
            var f;
            if ((null == (f = a.o) ? 0 : f.value) && a.T) {
                var g;
                b = _.x(null == (g = a.o) ? void 0 : g.value);
                for (g = b.next(); !g.done; g = b.next()) g = g.value, (d = CO(a, a.T[g.getDomId()])) && Ke(e, 3, MH).set(g.getAdUnitPath(), d)
            }
            return e
        },
        CO = function(a, b) {
            a = Jo(a.context, b);
            if (0 !== a.length) return NH(new MH, a.map(function(c) {
                return c.seller
            }))
        };
    var $r = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1165);
        this.J = c;
        this.H = d;
        this.xf = e;
        this.T = f;
        this.C = g;
        this.o = h;
        this.j = Y(this, b.aj)
    };
    _.T($r, Z);
    $r.prototype.g = function() {
        if (this.j.value) {
            var a = new tk,
                b = new AO(this.context, this.j.value, this.J, this.H, this.xf.Yg, this.T, this.C, this.o);
            J(a, b);
            Ck(a)
        } else this.xf.Yg.ba()
    };
    var hu = function(a, b, c) {
        Z.call(this, a, 1206);
        this.o = b;
        this.j = W(this);
        this.Z = X(this, c)
    };
    _.T(hu, Z);
    hu.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? eh(this.Z.value) ? this.j.La(this.o.cookieDeprecationLabel.getValue().then(function(b) {
            return {
                status: 1,
                label: b
            }
        }).catch(function(b) {
            a.I(b);
            return {
                status: 2
            }
        })) : this.j.G({
            status: 4
        }) : this.j.G({
            status: 3
        })
    };
    var DO = function(a, b) {
        Z.call(this, a, 1213, _.Qf(qE));
        this.j = W(this);
        b && (this.o = iI(this, b))
    };
    _.T(DO, Z);
    DO.prototype.g = function() {
        var a, b, c;
        (null == (c = null == (a = this.o) ? void 0 : null == (b = a.value) ? void 0 : b.label) ? 0 : c.match(Rf(pE))) ? this.j.G(!0): this.j.G(!1)
    };
    var EO = function(a, b) {
        Z.call(this, a, 1212, _.Qf(qE));
        this.j = W(this);
        this.o = W(this);
        b && (this.C = iI(this, b))
    };
    _.T(EO, Z);
    EO.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0), c.match(Rf(pE)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.o.G(!1))
    };
    var FO = function(a, b, c) {
        Z.call(this, a, 873);
        this.B = b;
        this.j = X(this, c)
    };
    _.T(FO, Z);
    FO.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.B;
        !Eo()._pubconsole_disable_ && (b = hh("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || ap(a, c))
    };
    var GO = function() {
        this.resources = {}
    };
    var bs = "3rd party ad content";
    var HO = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.Ra = b;
        this.l = c;
        a = c.slotId;
        b = c.size;
        this.g = "height" === c.vb ? "fluid" : [b.width, b.height];
        this.Xd = en(a);
        this.Yd = bs
    };
    _.T(HO, _.V);
    HO.prototype.render = function() {
        var a = this.Ra,
            b = this.l,
            c = b.slotId,
            d = b.O.T,
            e = b.size,
            f = b.Oa,
            g = b.isBackfill,
            h = b.Ub;
        Xi(b.tj, _.WA(b.aa), null != f ? f : "", !1);
        ft(_.Of(Kl), "5", gt(d[c.getDomId()], 20));
        ht(c, jt, 801, {
            Th: 0 === a.kind ? a.hb : "",
            isBackfill: g
        });
        a = this.D();
        h && a && a.setAttribute("data-google-container-id", h);
        ht(c, kt, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    HO.prototype.loaded = function(a) {
        var b = this.l,
            c = b.slotId,
            d = b.za;
        b = b.O.T;
        ht(c, Vu, 844);
        a && a.setAttribute("data-load-complete", !0);
        ht(d, "slotOnload", 710, new LN(c, "publisher_ads"));
        ft(_.Of(Kl), "6", gt(b[c.getDomId()], 20))
    };
    var IO = function(a) {
        a = a.Ra;
        a = 0 === a.kind ? a.hb : "";
        var b = "";
        b = void 0 === b ? "" : b;
        if (a) {
            var c = a.toLowerCase();
            a = -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || _.E(IA) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
        }
        return a
    };
    HO.prototype.A = function() {
        _.V.prototype.A.call(this);
        this.l.tj.removeAttribute("data-google-query-id")
    };
    HO.prototype.I = function(a) {
        var b = this,
            c = JO(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.sp(this, function() {
            100 != c.status && (c.yg() && (eJ(c.l), c.C = 0), window.clearTimeout(c.H), c.H = -1, c.K = 3, c.A && (c.A.ya(), c.A = null), _.eg(window, "resize", c.Ca), _.eg(window, "scroll", c.Ca), c.D && c.g && c.D == _.$A(c.g) && c.D.removeChild(c.g), c.g = null, c.D = null, c.status = 100)
        });
        return c
    };
    var JO = function(a, b, c) {
        var d = a.l,
            e = d.mj,
            f = d.isBackfill,
            g = d.Ub,
            h = d.Te,
            k = d.Of,
            l = d.ab,
            m = Array.isArray(a.g) ? new _.Sm(Number(a.g[0]), Number(a.g[1])) : 1;
        return new mJ({
            Vg: d.Mh,
            Xd: a.Xd,
            Yd: a.Yd,
            content: IO(a),
            size: m,
            Ui: b,
            nj: null != e ? e : void 0,
            permissions: {
                Qe: null != On(c, 1) ? !!_.Q(c, 1) : !f,
                Re: null != On(c, 2) ? !!_.Q(c, 2) : !1
            },
            Zd: !!Eo().fifWin,
            sm: VL ? VL : VL = En(),
            mk: In(),
            hostpageLibraryTokens: l.hostpageLibraryTokens,
            ub: function(n, p) {
                return void Ml(a.context, n, p)
            },
            uniqueId: g,
            lj: TL(),
            Te: null != h ? h : void 0,
            wb: void 0,
            Of: null != k ? k : void 0
        })
    };
    var KO = function() {
        HO.apply(this, arguments)
    };
    _.T(KO, HO);
    KO.prototype.D = function() {
        var a = this.l,
            b = a.O,
            c = b.ca;
        a = b.T[a.slotId.getDomId()];
        b = new Jn;
        c = Pn([b, c.Fc(), null == a ? void 0 : a.Fc()]);
        return HO.prototype.I.call(this, c).g
    };
    KO.prototype.j = function() {
        return !1
    };
    var wu = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.ca = b;
        this.T = c;
        this.j = d;
        this.Jb = e;
        this.output = W(this);
        f && (this.o = X(this, f))
    };
    _.T(wu, Z);
    wu.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.I(b, 1)) && (_.Q(this.T, 12) || On(this.ca, 13)) || this.Jb;
            this.output.G(!!a)
        }
    };
    var LO = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.j = b;
        this.B = c;
        this.output = hI(this);
        jI(this, d)
    };
    _.T(LO, Z);
    LO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = TL();
        c = {
            version: VL ? VL : VL = En(),
            Ff: c
        };
        c = tJ.Bl(c);
        var d = $I(b);
        c = d ? _.kb(c, new _.u.Map([
            ["n", String(d)]
        ])) : c;
        d = Sf(Gn);
        for (var e = new _.u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = _.kb(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = Eo()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.dg("IFRAME"), a.src = _.jb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var MO = function(a, b, c) {
        Z.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = W(this)
    };
    _.T(MO, Z);
    MO.prototype.g = function() {
        for (var a = new Lz, b = new _.u.Map, c = new _.u.Set, d = _.x(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Ji(f, 1)) {
                e = new _.u.Set;
                b.set(_.I(f, 1).toString(), e);
                f = _.x(_.gk(f, Jz, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.I(g, 1);
                    e.add(h);
                    c.has(h) || pk(a, 2, Jz, g);
                    c.add(h)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    };
    var NO = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.j = Y(this, c)
    };
    _.T(NO, Z);
    NO.prototype.g = function() {
        var a = this;
        this.j.value && Ok(this.j.value, function(b, c) {
            Ml(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var OO = function(a, b) {
        Z.call(this, a, 1040);
        this.j = W(this);
        this.o = Y(this, b)
    };
    _.T(OO, Z);
    OO.prototype.g = function() {
        var a = this.o.value;
        a ? (a = _.gk(a, Jz, 2), this.j.G(a.map(function(b) {
            var c = fz(b, Kz);
            b = _.I(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? hb(Yj(c)) : void 0;
            return {
                Ie: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var PO = function(a, b, c) {
        Z.call(this, a, 813);
        this.Ab = c;
        this.o = Y(this, b);
        this.j = Y(this, c)
    };
    _.T(PO, Z);
    PO.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = this.j.value;
        if (null != b && b.length && c) {
            b = _.x(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.Ie;
                (e = e.url) && _.S(this, Sk(d, e, c, this.Ab, function(f, g) {
                    Ml(a.context, f, g);
                    var h, k;
                    null == (k = (h = console).error) || k.call(h, g)
                }))
            }
        }
    };
    var QO = function(a, b, c) {
        Z.call(this, a, 1045);
        this.j = b;
        this.Ab = c
    };
    _.T(QO, Z);
    QO.prototype.g = function() {
        var a = new tk;
        _.S(this, a);
        var b = new OO(this.context, this.j);
        J(a, b);
        b = new PO(this.context, b.j, this.Ab);
        J(a, b);
        Ck(a)
    };
    var ou = function(a, b, c, d) {
        Z.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : W(this);
        this.j = X(this, c)
    };
    _.T(ou, Z);
    ou.prototype.g = function() {
        this.output.Ha(fh(this.j.value, this.B))
    };
    var gs = function(a, b, c, d) {
        Z.call(this, a, 1154);
        this.nb = c;
        this.j = d;
        this.o = Y(this, b)
    };
    _.T(gs, Z);
    gs.prototype.g = function() {
        if (this.o.value) {
            var a = new tk;
            _.S(this, a);
            var b = new ou(this.context, window, this.nb, this.j.Ab);
            J(a, b);
            b = new MO(this.context, this.o.value, this.j.Mg);
            J(a, b);
            J(a, new QO(this.context, b.j, this.j.Ab));
            b = new NO(this.context, console, this.j.Ab);
            J(a, b);
            Ck(a)
        } else this.j.Mg.ba(), this.j.Ab.ba()
    };
    var RO = function(a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.B = b;
        this.Z = c;
        this.j = d;
        this.Gc = e;
        this.o = Y(this, f)
    };
    _.T(RO, Z);
    RO.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Xj;
        b && b(this.j, this.Z, this.B, this.Gc, this.context.Qa)
    };
    var SO = function(a, b) {
        Z.call(this, a, 1095);
        this.j = b;
        this.output = W(this)
    };
    _.T(SO, Z);
    SO.prototype.g = function() {
        this.output.La(this.j.load(_.eO))
    };
    var is = function(a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.j = b;
        this.Gc = c;
        this.o = X(this, d);
        this.C = Y(this, e)
    };
    _.T(is, Z);
    is.prototype.g = function() {
        var a = this.C.value,
            b;
        if (a && null != (b = _.Bm(a, _.$z, 1)) && _.gk(b, _.Zz, 15).length) {
            b = new tk;
            _.S(this, b);
            var c = new SO(this.context, this.j);
            J(b, c);
            a = new RO(this.context, window, this.o.value, a, this.Gc, c.output);
            J(b, a);
            Ck(b)
        }
    };
    var Ru = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1205);
        this.B = b;
        this.J = c;
        this.H = X(this, d);
        this.o = X(this, e);
        this.j = X(this, f);
        this.C = X(this, g)
    };
    _.T(Ru, Z);
    Ru.prototype.g = function() {
        var a = this.H.value;
        a = new a.Im(this.o.value, this.B, this.j.value, this.J, this.C.value, new _.UJ(this.context), new a.Yk(this.B));
        _.S(this, a);
        _.S(this, a.ia)
    };
    var Qu = function(a, b) {
        Z.call(this, a, 1204);
        this.j = b;
        this.output = W(this)
    };
    _.T(Qu, Z);
    Qu.prototype.g = function() {
        this.output.La(this.j.load(_.fO))
    };
    var zt = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Il(a, 88, function(f, g) {
            var h;
            if (h = uo(f)) h = g, h = to(h) || Array.isArray(h) && h.every(to);
            if (h) {
                if (_.E(BE)) {
                    var k = ls(g);
                    h = k.size;
                    k.fh && (g = am([f, g]), g = g.substring(1, g.length - 1), P(b, new $l(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), P(b, bm("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = Il(a, 89, function() {
            if (e.length) return P(b, GK(Mn(e))), null;
            ra(d);
            return d
        })
    };
    var TO = function(a, b, c, d, e, f) {
        f = void 0 === f ? Uk : f;
        Z.call(this, a, 939);
        this.o = b;
        this.B = c;
        this.Z = d;
        this.j = f;
        this.output = hI(this);
        jI(this, e)
    };
    _.T(TO, Z);
    TO.prototype.g = function() {
        var a = this.j,
            b = this.B,
            c = new uz;
        var d = new tz;
        d = _.lj(d, 1, String(this.o));
        c = _.ki(c, 5, d);
        c = _.K(c, 4, 1);
        c = _.K(c, 2, 2);
        c = _.lj(c, 3, this.context.Pa);
        d = eh(this.Z);
        c = _.zl(c, 6, d);
        a.call(this, b, c);
        this.output.notify()
    };
    var Eu = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.B = b;
        this.Mb = c;
        this.output = hI(this);
        this.j = X(this, d);
        e && jI(this, e)
    };
    _.T(Eu, Z);
    Eu.prototype.g = function() {
        if (this.Mb && !this.j.value) {
            var a = BB(this.B);
            OJ(new NJ(a, this.Mb)) || this.I(new Co("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var UO = function(a, b) {
        Z.call(this, a, 820);
        this.B = b;
        this.output = W(this)
    };
    _.T(UO, Z);
    UO.prototype.g = function() {
        var a = this;
        this.output.La(Yk(this.B).then(function(b) {
            var c = b.Mb,
                d = b.status;
            Fp("gpt_etu", function(e) {
                ep(e, a.context);
                fp(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var VO = function(a, b, c, d) {
        Z.call(this, a, 979);
        this.B = b;
        this.j = Y(this, d);
        this.output = c
    };
    _.T(VO, Z);
    VO.prototype.g = function() {
        var a = this;
        if (_.E(FE)) this.output.ba();
        else {
            var b;
            bl(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    VO.prototype.l = function() {
        this.output.ba()
    };
    var qs = function(a, b, c, d) {
        Z.call(this, a, 1156);
        this.B = b;
        this.Zf = c;
        this.j = {
            Zc: new fq
        };
        this.o = X(this, d)
    };
    _.T(qs, Z);
    qs.prototype.g = function() {
        if (eh(this.o.value)) {
            var a = new tk;
            _.S(this, a);
            var b = new VO(this.context, this.B, this.j.Zc, this.Zf);
            J(a, b);
            Ck(a)
        } else this.j.Zc.ba()
    };
    var WO = function(a, b, c) {
        Z.call(this, a, 1123);
        this.j = b;
        this.o = c;
        W(this, b);
        W(this, c)
    };
    _.T(WO, Z);
    WO.prototype.g = function() {
        _.E(DE) ? (this.j.G(!1), this.o.ba()) : (this.j.G(!0), this.o.G(10))
    };
    var XO = function(a, b, c, d, e) {
        Z.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        W(this, e);
        this.o = Y(this, d.Zc)
    };
    _.T(XO, Z);
    XO.prototype.g = function() {
        if (_.E(EE)) this.j.ba();
        else if (this.o.value) {
            var a = il(this.o.value, this.B, new _.UJ(this.context), this.C);
            this.j.La(a)
        } else this.j.ba()
    };
    XO.prototype.l = function() {
        this.j.ba()
    };
    var ss = function(a, b, c, d, e, f) {
        Z.call(this, a, 1164);
        this.o = b;
        this.ue = c;
        this.j = e;
        this.C = X(this, d);
        f && (this.H = X(this, f))
    };
    _.T(ss, Z);
    ss.prototype.g = function() {
        var a;
        if (!rh(window.isSecureContext, window.document) || (null == (a = this.H) ? 0 : a.value)) this.j.Fd.ba(), this.j.se.G(!1), this.j.te.ba();
        else if (this.C.value) {
            a = new tk;
            _.S(this, a);
            J(a, new XO(this.context, window, this.o, this.ue, this.j.Fd));
            var b = new WO(this.context, this.j.se, this.j.te);
            J(a, b);
            Ck(a)
        } else this.j.Fd.G(5), this.j.se.G(!1), this.j.te.G(5)
    };
    var YO = function(a, b, c) {
        Z.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.T(YO, Z);
    YO.prototype.g = function() {
        if (!_.E(EE)) {
            var a = this.j,
                b = Zk(this.B);
            b.setTopicsCalled ? _.u.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Iu = function(a, b, c, d) {
        Z.call(this, a, 1180);
        this.B = b;
        this.Uf = c;
        this.j = Y(this, d.Zc)
    };
    _.T(Iu, Z);
    Iu.prototype.g = function() {
        if (this.Uf && this.j.value) {
            var a = new tk;
            _.S(this, a);
            J(a, new YO(this.context, this.B, this.j.value));
            Ck(a)
        }
    };
    var Bs = function(a) {
        this.F = _.A(a)
    };
    _.T(Bs, _.D);
    var xs = function(a, b) {
        return _.Me(a, 2, _.ud(b), "0")
    };
    var ZO = function(a) {
        this.F = _.A(a)
    };
    _.T(ZO, _.D);
    var As = Mf(ZO);
    ZO.da = [1];
    var ju = function(a, b, c, d) {
        Z.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = W(this);
        this.Z = X(this, d)
    };
    _.T(ju, Z);
    ju.prototype.g = function() {
        if (!qh(this.B.isSecureContext, this.B.navigator, this.B.document) || _.E(Xt)) this.output.ba();
        else {
            var a = this.L.Ue;
            if (null !== a) this.output.G(a);
            else {
                var b = _.Rn(new _.oH(this.B), "__gpi", this.Z.value);
                a = this.output;
                var c = a.G;
                b = _.uh(b || String(this.context.pvsid)) % 63001;
                this.L.Ue = b;
                c.call(a, b)
            }
        }
    };
    var $O = function(a, b, c) {
        Z.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.eh = X(this, b)
    };
    _.T($O, Z);
    $O.prototype.g = function() {
        this.j.G(0 === this.eh.value.kind)
    };
    var aP = function(a, b, c) {
        Z.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.o = X(this, b)
    };
    _.T(aP, Z);
    aP.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.Qa.ac.mc.Gd.dk.Rc({
                Uc: a.byteLength
            });
            33792 < a.byteLength ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = Ib(a, 3), a.length ? this.j.G({
                kind: 0,
                signal: a,
                requestId: this.o.value.requestId
            }) : this.j.G({
                kind: 1,
                reason: 5
            }))
        } else this.j.G({
            kind: 1,
            reason: this.o.value
        })
    };
    aP.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var bP = function(a, b) {
        Z.call(this, a, 1159);
        this.output = W(this);
        this.j = b
    };
    _.T(bP, Z);
    bP.prototype.g = function() {
        var a = this;
        this.output.La(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.I(b);
            return 4
        }))
    };
    bP.prototype.l = function() {
        this.output.G(4)
    };
    var Gs = function(a, b, c, d, e, f) {
        Z.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        W(this, e);
        W(this, f);
        this.H = X(this, c);
        d && (this.J = X(this, d))
    };
    _.T(Gs, Z);
    Gs.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.o.G(!1);
            else {
                a = new tk;
                _.S(this, a);
                var b = new bP(this.context, this.C);
                J(a, b);
                b = new aP(this.context, b.output, this.j);
                J(a, b);
                b = new $O(this.context, this.j, this.o);
                J(a, b);
                Ck(a)
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.o.G(!1)
    };
    var cP = function(a, b, c, d, e) {
        Z.call(this, a, 881);
        this.Fa = b;
        this.ha = c;
        this.j = d;
        this.o = e;
        this.output = W(this)
    };
    _.T(cP, Z);
    cP.prototype.g = function() {
        if (4 === _.Qf(Yt)) {
            var a = _.Bm(this.ha, uA, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: vi(this.ha, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: ll(ml(a, 1)),
                    resolveToConfig: !_.Q(this.ha, 14)
                })
            } else this.output.ba()
        } else {
            b = this.output;
            a = b.G;
            var c = this.ha,
                d = Jo(this.context, this.Fa),
                e = this.context.Qa,
                f = _.E(JE) ? void 0 : this.o,
                g = _.E(JF),
                h = _.Qf(GE),
                k = void 0 === h ? 0 : h;
            h = !_.Q(c, 14);
            var l = {};
            var m = _.gk(c, rA, 7);
            m = _.x(m);
            for (var n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var p = {},
                    r = void 0,
                    v = null == (r = e) ? void 0 : r.ac.mc.Gd.lk;
                r = _.I(n, 1);
                if (_.I(n, 2).length) try {
                    if (p = JSON.parse(_.I(n, 2)), 1 > 100 * _.th()) {
                        var w = void 0;
                        null == (w = v) || w.Kc({
                            Sf: r,
                            status: "SUCCESS",
                            Xc: 100
                        })
                    }
                } catch (G) {
                    w = void 0, null == (w = v) || w.Kc({
                        Sf: r,
                        status: "ERROR",
                        Xc: 1
                    })
                } else w = void 0, null == (w = v) || w.Kc({
                    Sf: r,
                    status: "EMPTY",
                    Xc: 1
                });
                l[_.I(n, 1)] = p
            }
            if (e = _.Bm(c, qA, 6)) l["https://googleads.g.doubleclick.net"] = e.toJSON(), l["https://td.doubleclick.net"] = e.toJSON();
            m = {};
            e = _.x(_.gk(c, tA, 11));
            for (n = e.next(); !n.done; n = e.next()) n = n.value, m[_.I(n, 1)] = _.az(n, 2);
            n = {};
            0 !== _.az(c, 21) && (n["*"] = _.az(c, 21));
            if (0 < _.gk(c, sA, 32).length) {
                var y = {};
                e = _.x(_.gk(c, sA, 32));
                for (p = e.next(); !p.done; p = e.next()) p = p.value, y[_.I(p, 1)] = _.az(p, 2)
            }
            p = {};
            null != Dm(c, 18) && (p["https://googleads.g.doubleclick.net"] = gt(c, 18), p["https://td.doubleclick.net"] = gt(c, 18));
            e = _.x(Ke(c, 24, yA));
            for (v = e.next(); !v.done; v = e.next()) r = v.value, gt(r[1], 4) && (v = r[0], r = gt(r[1], 4), p[v] = r);
            e = _.I(c, 1).split("/td/")[0];
            var B;
            v = null == (B = _.Bm(c, wA, 5)) ? void 0 : _.ie(B);
            var C;
            null != v && null != (C = _.Bm(v, vA, 5)) && _.nk(C, 2);
            y = _.z(Object, "assign").call(Object, {}, {
                seller: e,
                decisionLogicUrl: _.I(c, 1),
                trustedScoringSignalsUrl: _.I(c, 2),
                interestGroupBuyers: vi(c, 3, 2),
                sellerExperimentGroupId: gt(c, 17),
                auctionSignals: JSON.parse(_.I(c, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.az(c, 15) || 50,
                perBuyerExperimentGroupIds: p,
                perBuyerSignals: l,
                perBuyerTimeouts: m,
                perBuyerCumulativeTimeouts: n
            }, y ? {
                perBuyerGroupLimits: y
            } : {}, h ? {
                resolveToConfig: h
            } : {});
            if (null == c ? 0 : _.Q(zA(c), 25)) y.sellerCurrency = "USD", y.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, Je(c, 22, Dd));
            _.I(c, 28) && (y.directFromSellerSignalsHeaderAdSlot = _.I(c, 28));
            f && (y.auctionNonce = f, y.additionalBids = _.u.Promise.resolve());
            g && Je(c, 33, Dd).size && (y.deprecatedRenderURLReplacements = _.z(Object, "fromEntries").call(Object, (_.H = Je(c, 33, Dd), _.z(_.H, "entries")).call(_.H)), (f = y.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (y.deprecatedRenderURLReplacements["${RENDER_DATA}"] = f));
            switch (k) {
                case 1:
                    y.allSlotsRequestedSizes = [{
                        width: c.getWidth(),
                        height: c.getHeight()
                    }]
            }
            f = Object;
            g = f.assign;
            k = _.I(c, 1);
            B = gt(c, 17);
            C = new wA;
            li(zA(c), vA, 5) && (l = new vA, m = bz(Yy(zA(c), vA, 5), 2), l = _.Me(l, 2, hd(m), "0"), m = bz(Yy(zA(c), vA, 5), 4), l = _.Me(l, 4, hd(m), "0"), _.ki(C, 5, l));
            zA(c).getEscapedQemQueryId() && (l = zA(c).getEscapedQemQueryId(), _.lj(C, 2, l));
            _.I(zA(c), 6) && (l = _.I(zA(c), 6), _.lj(C, 6, l));
            _.Q(zA(c), 21) && _.zl(C, 21, !0);
            _.Q(zA(c), 4) && _.zl(C, 4, !0);
            _.I(zA(c), 11) && (l = _.I(zA(c), 11), _.lj(C, 11, l));
            C = C.toJSON();
            l = _.az(c, 15) || 50;
            if (_.Q(c, 30)) {
                if (null == d || !d.length) throw Error("top_td_without_component_auction");
            } else d = [y].concat(_.zi(null != d ? d : []));
            d = g.call(f, {}, {
                seller: e,
                decisionLogicUrl: k,
                sellerExperimentGroupId: B,
                sellerSignals: C,
                sellerTimeout: l,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {},
                componentAuctions: d
            }, h ? {
                resolveToConfig: h
            } : {});
            _.I(c, 28) && (d.directFromSellerSignalsHeaderAdSlot = _.I(c, 28));
            a.call(b, d)
        }
    };
    cP.prototype.l = function() {
        this.output.ba()
    };
    var dP = function(a, b, c, d) {
        Z.call(this, a, 1105);
        this.adUnitPath = b;
        this.ha = c;
        this.j = d
    };
    _.T(dP, Z);
    dP.prototype.g = function() {
        var a = Date.now();
        if (!_.E(Ls) || Es(a)) {
            var b = vi(this.ha, 3, 2),
                c = us(this.adUnitPath);
            if (_.Q(this.ha, 20)) {
                if (_.E(HF)) {
                    var d;
                    var e = (null == (d = _.Bm(this.ha, xA, 29)) ? void 0 : gt(d, 2)) || 864E5
                } else e = 864E5;
                a = Ms(b, a + e);
                e = (b = this.j.getItem(c)) ? _.gk(As(b), Bs, 1) : [];
                var f;
                b = new ZO;
                a = ys(e, a);
                a = _.vm(b, 1, a);
                b = !(null == (f = _.Bm(this.ha, xA, 29)) || !_.Q(f, 3));
                f = ai(a, 2, b);
                this.j.setItem(c, hl(f))
            } else _.E(PE) && this.j.removeItem(c)
        }
    };
    Yg({
        google_signals: Yg({
            buyer_reporting_id: ah
        })
    });
    var Qs = navigator,
        Rs = /(\$\{GDPR})/gi,
        Ss = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Ts = /(\$\{ADDTL_CONSENT})/gi,
        Us = /(\$\{AD_WIDTH})/gi,
        Vs = /(\$\{AD_HEIGHT})/gi,
        Ws = /(\$\{RENDER_DATA})/gi;
    var eP = function() {
            var a = this;
            this.promise = new _.u.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        fP = function() {
            this.auctionSignals = new eP;
            this.topLevelSellerSignals = new eP;
            this.g = new eP;
            this.perBuyerSignals = new eP;
            this.perBuyerTimeouts = new eP;
            this.perBuyerCumulativeTimeouts = new eP;
            this.directFromSellerSignals = new eP;
            this.directFromSellerSignalsHeaderAdSlot = new eP;
            this.perBuyerCurrencies = new eP;
            this.resolveToConfig = new eP;
            this.deprecatedRenderURLReplacements = new eP
        },
        gP = function(a, b, c, d) {
            this.g = a;
            this.bg = b;
            this.interestGroupBuyers = c;
            this.Bb = d
        };
    var hP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1201);
        this.ga = b;
        this.Z = c;
        this.ha = d;
        this.la = e;
        this.W = k;
        this.H = l;
        this.J = m;
        this.P = n;
        this.C = p;
        this.j = r;
        this.ra = hI(this);
        this.o = W(this);
        this.xa = Y(this, f);
        this.Ma = X(this, g);
        this.ua = X(this, h);
        this.fa = X(this, w);
        X(this, v);
        W(this, p);
        W(this, n.Pb);
        W(this, n.Ga);
        W(this, n.Ja);
        W(this, this.j)
    };
    _.T(hP, Z);
    hP.prototype.g = function() {
        var a = Math.round(performance.now() - this.Ma.value),
            b = this.ua.value,
            c = this.xa.value,
            d = _.Bm(this.ha, wA, 5),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            g = "string" === typeof c || Ys(c),
            h = 3 !== c && 2 !== c && 1 !== c;
        this.j.G(g && !f);
        h && dt(this.context, g, b, a, d);
        this.context.V.log(607368714, bt, {
            Nk: a,
            ck: c,
            km: d.getEscapedQemQueryId(),
            kl: _.I(d, 6)
        });
        var k, l;
        h = null != (l = null == (k = this.fa.value.componentAuctions) ? void 0 : k.length) ? l : 0;
        ct(this.context, c, a, b, !!this.la, d, h, g);
        if (g)
            if (e) this.ga.deprecatedURNToURL(c, !0), this.C.G(!0), this.o.ba();
            else if (f) {
            _.Q(d, 17) ? Os(0, 0, d) : this.ga.deprecatedURNToURL(c, !0);
            var m;
            Ps(this.P, this.j, this.H, this.J, this.W, null == (m = this.ha) ? void 0 : _.I(m, 25));
            this.C.G(!0);
            this.o.ba()
        } else {
            this.o.G(c);
            this.C.G(!0);
            if (_.E(OE)) {
                b = this.fa.value;
                d = this.ha;
                var n;
                a = 1 === (null == (n = b.componentAuctions) ? void 0 : n.length) && Fs(b.componentAuctions[0].seller) && li(d, pA, 26) ? xy(hl(Yy(d, pA, 26)), 3) : ""
            } else a = void 0;
            n = a;
            bI(this.ra, Xs(c, _.z(Object, "assign").call(Object, {}, {
                gdprApplies: null != On(this.Z, 3) ? _.Q(this.Z, 3) ? "1" : "0" : null,
                gl: ik(this.Z, 2),
                ak: ik(this.Z, 4),
                Wj: this.ha.getWidth().toString(),
                Uj: this.ha.getHeight().toString()
            }, n ? {
                om: n
            } : {})))
        } else {
            Os(a, 2 === c ? b : 0, d);
            if (!e) {
                var p;
                Ps(this.P, this.j, this.H, this.J, this.W, null == (p = this.ha) ? void 0 : _.I(p, 25))
            }
            this.C.G(!0);
            this.o.ba()
        }
    };
    hP.prototype.l = function() {
        var a, b, c = null == (a = this.ha) ? void 0 : _.Bm(a, wA, 5);
        a = this.la;
        var d = this.P,
            e = this.j,
            f = this.H,
            g = this.J,
            h = this.W;
        null == (b = this.ha) || _.I(b, 25);
        c && Os(0, 0, c);
        null == a || a.Bb.abort();
        Ps(d, e, f, g, h)
    };
    var iP = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 1200);
        this.L = b;
        this.ua = c;
        this.o = d;
        this.ha = e;
        this.W = g;
        this.H = h;
        this.J = k;
        this.P = m;
        this.fa = n;
        this.C = gI(this);
        this.ra = W(this);
        this.la = W(this);
        this.ga = W(this);
        this.j = Y(this, f);
        X(this, l);
        W(this, m.Pb);
        W(this, m.Ga);
        W(this, m.Ja);
        W(this, n)
    };
    _.T(iP, Z);
    iP.prototype.g = function() {
        if (this.j.value) {
            var a = zA(this.ha);
            et(this.context, a);
            this.ra.G(performance.now());
            var b = _.az(this.ha, 8) || 1E3;
            this.la.G(b);
            var c = _.az(a, 14) || -1,
                d = _.az(a, 13) || -1;
            d = 0 < d && this.L.j >= d;
            if (0 < c && this.L.l >= c || d) this.C.G(1);
            else if (++this.L.l, ++this.L.j, this.j.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.L.l, this.C.La(new _.u.Promise(function(e) {
                setTimeout(function() {
                    e(1)
                }, 0)
            }));
            else {
                if (this.o && this.j.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.o ? jP(this.j.value, b, this.o) : kP(this, this.j.value);
                --this.L.l;
                this.C.La(a)
            }
        } else null == (a = this.o) || a.Bb.abort(), Ps(this.P, this.fa, this.H, this.J, this.W, _.I(this.ha, 25)), this.ga.G(!1)
    };
    var kP = function(a, b) {
            var c, d;
            return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && "TimeoutError" === e.name) return 2;
                _.E(ME) && e instanceof Error && a.I(e);
                return 3
            })
        },
        jP = function(a, b, c) {
            Ks(a, c);
            setTimeout(function() {
                c.Bb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    iP.prototype.l = function() {
        var a, b = null == (a = this.ha) ? void 0 : _.Bm(a, wA, 5);
        a = this.o;
        var c = this.P,
            d = this.fa,
            e = this.H,
            f = this.J,
            g = this.W;
        _.I(this.ha, 25);
        b && Os(0, 0, b);
        null == a || a.Bb.abort();
        Ps(c, d, e, f, g)
    };
    var lP = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1202);
        this.ha = b;
        this.C = c;
        this.j = d;
        this.o = Y(this, f);
        this.H = X(this, e);
        jI(this, g);
        W(this, d.Pb);
        W(this, d.Ga);
        W(this, d.Ja)
    };
    _.T(lP, Z);
    lP.prototype.g = function() {
        if (this.o.value) {
            Lm(this.C) || (this.H.value.style.display = "");
            var a = this.o.value;
            var b = this.context.Qa;
            var c = _.I(this.ha, 31);
            c ? Ys(a) ? (b.ac.mc.Gd.kh.vh.Kc({
                Xc: 1,
                status: "FAILED_FENCED_FRAME"
            }), b = null) : (a = c.replace("%%srcfledge%%", a), a.length === c.length && a === c ? (b.ac.mc.Gd.kh.vh.Kc({
                Xc: 1,
                status: "FAILED_UNMODIFIED"
            }), b = null) : (b.ac.mc.Gd.kh.vh.Kc({
                Xc: 1,
                status: "OK"
            }), b = a)) : b = null;
            b ? this.j.Ga.G({
                kind: 0,
                hb: b
            }) : this.j.Ga.G({
                kind: 2,
                re: this.o.value
            });
            this.j.Ja.G(new _.Sm(this.ha.getWidth(), this.ha.getHeight()));
            this.j.Pb.G(!1)
        }
    };
    var mP = function(a, b, c) {
        Z.call(this, a, 1054);
        this.j = b;
        this.output = hI(this);
        this.o = X(this, c)
    };
    _.T(mP, Z);
    mP.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    };
    var nP = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.Oa = e;
        this.j = W(this);
        this.o = X(this, f)
    };
    _.T(nP, Z);
    nP.prototype.g = function() {
        this.o.value ? (lt(this.slotId, this.L, this.O, this.Oa), this.j.G(!1)) : this.j.G(!0)
    };
    var oP = function(a, b, c, d) {
        Z.call(this, a, 1055);
        this.j = d;
        jI(this, c);
        this.o = X(this, b);
        hI(this, this.j)
    };
    _.T(oP, Z);
    oP.prototype.g = function() {
        this.o.value && this.j.notify()
    };
    var xu = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
        Z.call(this, a, 1179);
        this.slotId = b;
        this.T = d;
        this.L = e;
        this.Z = f;
        this.C = g;
        this.P = l;
        this.o = m;
        this.O = n;
        this.fa = p;
        this.Oa = r;
        this.ha = v;
        this.j = w;
        this.la = y;
        this.ga = B;
        this.H = X(this, h);
        this.J = X(this, k);
        this.W = Y(this, c)
    };
    _.T(xu, Z);
    xu.prototype.g = function() {
        var a = new tk;
        _.S(this, a);
        var b = W(this);
        if (this.ha) {
            var c = zA(this.ha),
                d = _.Q(c, 10);
            if (this.ha.getWidth() && this.ha.getHeight())
                if (d)
                    if (Ps({
                            Pb: b,
                            Ga: this.j.Ga,
                            Ja: this.j.Ja
                        }, this.j.nd, this.H.value, this.J.value, this.C), _.Q(c, 17)) {
                        Os(0, 0, c);
                        var e;
                        null == (e = this.o) || e.Bb.abort()
                    } else pP(this, a, this.ha);
            else b = pP(this, a, this.ha);
            else {
                Ps({
                    Pb: b,
                    Ga: this.j.Ga,
                    Ja: this.j.Ja
                }, this.j.nd, this.H.value, this.J.value, this.C);
                Os(0, 0, c);
                var f;
                null == (f = this.o) || f.Bb.abort()
            }
        } else Ps({
            Pb: b,
            Ga: this.j.Ga,
            Ja: this.j.Ja
        }, this.j.nd, this.H.value, this.J.value, this.C), _.E(QE) ? null == (c = this.o) || c.Bb.abort(new DOMException("runAdAuction", "ThrottledError")) : null == (d = this.o) || d.Bb.abort();
        e = new nP(this.context, this.slotId, this.O, this.L, this.Oa, b);
        J(a, e);
        b = new mP(this.context, this.fa, b);
        J(a, b);
        b = new oP(this.context, e.j, b.output, this.j.Qc);
        J(a, b);
        Ck(a)
    };
    var pP = function(a, b, c) {
        if (2 === _.Qf(Yt) && a.W.value && _.Q(c, 20) && 0 !== vi(c, 3, 2).length) {
            var d = new dP(a.context, a.slotId.getAdUnitPath(), c, a.W.value);
            J(b, d)
        }
        var e = new cP(a.context, a.T, c, a.la, a.ga);
        J(b, e);
        var f = navigator,
            g = {
                Ga: a.j.Ga,
                Ja: a.j.Ja,
                Pb: new fq
            };
        d = g.Pb;
        var h = new iP(a.context, a.L, f, a.o, c, e.output, a.C, a.H.value, a.J.value, a.P, g, a.j.nd);
        J(b, h);
        e = new hP(a.context, f, a.Z, c, a.o, h.C, h.ra, h.la, a.C, a.H.value, a.J.value, g, h.ga, a.j.nd, a.P, e.output);
        J(b, e);
        c = new lP(a.context, c, xr(a.T), g, a.P, e.o, e.ra);
        J(b, c);
        a = new gr(a.context, a.slotId, kt);
        J(b, a);
        return d
    };
    var qP = function() {
        HO.apply(this, arguments)
    };
    _.T(qP, HO);
    var rP = function(a, b) {
            var c = _.dg(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Xd;
            c.name = a.Xd;
            c.title = a.Yd;
            Array.isArray(a.g) ? null != a.g[0] && null != a.g[1] && (c.width = String(a.g[0]), c.height = String(a.g[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        sP = function(a, b) {
            "string" !== typeof a.g && (b.width = String(a.g[0]), b.height = String(a.g[1]));
            var c = Il(a.context, 774, function() {
                a.loaded(b);
                _.eg(b, "load", c)
            });
            _.sb(b, "load", c);
            _.sp(a, function() {
                return _.eg(b, "load", c)
            });
            a.l.Mh.appendChild(b)
        };
    var tP = function() {
        qP.apply(this, arguments)
    };
    _.T(tP, qP);
    tP.prototype.D = function() {
        var a = rP(this, !this.l.bn);
        if ("string" === typeof this.Ra.re) {
            var b = this.Ra.re;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = hb(b), a.src = _.jb(b).toString())
        } else a.config = this.Ra.re;
        sP(this, a);
        return a
    };
    tP.prototype.j = function() {
        return !1
    };
    var uP = navigator,
        vP = function(a, b, c, d, e, f, g, h) {
            Z.call(this, a, 1089);
            this.ec = b;
            this.X = c;
            this.T = d;
            this.j = f;
            this.o = h;
            W(this, h);
            e && (this.C = Y(this, e));
            g && (this.H = Y(this, g))
        };
    _.T(vP, Z);
    vP.prototype.g = function() {
        var a = {};
        if (1 === this.ec)
            for (var b = _.x(this.X), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = this.T[c.getDomId()];
                a[c.getId()] = wP(this, d, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j)
            } else if (2 === this.ec) {
                b = null == (c = this.C) ? void 0 : c.value;
                if (!b) {
                    this.o.ba();
                    return
                }
                c = null == (d = this.H) ? void 0 : d.value;
                d = _.x(this.X);
                for (var e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = b.get(e.getId()),
                        g = void 0;
                    if (null != (g = f) && g.length) {
                        g = this.T[e.getDomId()];
                        var h = void 0,
                            k = null == (h = c) ? void 0 : h.get(e.getAdUnitPath());
                        a[e.getId()] = wP(this, g, f, this.j, k)
                    }
                }
            }
        this.o.G(a)
    };
    var wP = function(a, b, c, d, e) {
        var f = new fP,
            g = new AbortController;
        b = Js({
            bg: f,
            Bb: g,
            interestGroupBuyers: c,
            Kh: Jo(a.context, b),
            jl: d,
            Vk: e,
            gm: _.E(JF)
        });
        b = uP.runAdAuction(b).catch(function(h) {
            if (h instanceof DOMException && "TimeoutError" === h.name) return 2;
            if (_.E(QE) && h instanceof DOMException && "ThrottledError" === h.name) return 4;
            _.E(ME) && h instanceof Error && a.I(h);
            return 3
        });
        return new gP(b, f, c, g)
    };
    var xP = function(a, b, c, d) {
        Z.call(this, a, 1230);
        this.X = b;
        this.o = d;
        this.j = Y(this, c);
        W(this, d)
    };
    _.T(xP, Z);
    xP.prototype.g = function() {
        var a = this.j.value,
            b = new _.u.Map;
        if (null != a && a.size && !kw()) {
            var c = Sf(LE);
            if (0 !== c.length)
                for (var d = _.x(this.X), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = a.get(e.getId()),
                        g = void 0;
                    if (null != (g = f) && g.length) {
                        g = new _.u.Map;
                        f = _.x(f);
                        for (var h = f.next(); !h.done; h = f.next()) h = h.value, _.z(c, "includes").call(c, _.uh(h).toString()) && g.set(h, Math.floor(63001 * _.th()));
                        g.size && b.set(e.getAdUnitPath(), g)
                    }
                }
        }
        this.o.G(b)
    };
    var yP = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1106);
        this.Z = b;
        this.H = c;
        this.o = d;
        this.X = e;
        this.C = f;
        this.J = g;
        this.j = W(this);
        W(this, g)
    };
    _.T(yP, Z);
    yP.prototype.g = function() {
        for (var a = Cs(this.o, this.H, this.Z, this.C), b = new _.u.Map, c = nt(a), d = new _.u.Map, e = _.x(this.X), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.getAdUnitPath();
            var h = a.get(us(f)),
                k = void 0,
                l = void 0,
                m = void 0,
                n = null != (m = null != (l = c) ? l : null == (k = h) ? void 0 : _.gk(k, Bs, 1).map(function(p) {
                    return _.I(p, 1)
                })) ? m : [];
            b.set(g.getId(), n);
            if (!d.has(f)) {
                g = [];
                n = _.x(n.sort());
                for (h = n.next(); !h.done; h = n.next()) g.push(_.uh(h.value));
                d.set(f, g)
            }
        }
        this.j.G(b);
        this.J.G(d)
    };
    var ot = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1170);
        this.ec = b;
        this.T = c;
        this.Z = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            Ug: W(this)
        };
        2 === b && this.o && (this.j.vg = W(this));
        _.E(RE) && (this.j.Se = W(this));
        this.P = X(this, f);
        this.J = X(this, g);
        h && (this.H = Y(this, h));
        k && (this.W = X(this, k))
    };
    _.T(ot, Z);
    ot.prototype.g = function() {
        var a = this.P.value,
            b;
        if (!this.J.value || !a.length || (null == (b = this.W) ? 0 : b.value) || _.E(Ls) && !Es(this.C)) {
            this.j.Ug.ba();
            var c;
            null == (c = this.j.vg) || c.ba();
            var d;
            null == (d = this.j.Se) || d.ba()
        } else {
            b = new tk;
            _.S(this, b);
            if (2 === this.ec && this.o) {
                var e, f;
                var g = new yP(this.context, this.Z, this.o, this.C, a, null != (f = null == (e = this.H) ? void 0 : e.value) ? f : void 0, this.j.vg);
                J(b, g);
                g = g.j;
                _.E(RE) && (e = new xP(this.context, a, g, this.j.Se), J(b, e))
            }
            var h, k;
            a = new vP(this.context, this.ec, a, this.T, g, null != (k = null == (h = this.H) ? void 0 : h.value) ? k : void 0, this.j.Se, this.j.Ug);
            J(b, a);
            Ck(b)
        }
    };
    var zP = function(a, b, c) {
        Z.call(this, a, 1216);
        this.j = b;
        this.output = gI(this);
        this.o = X(this, c);
        this.wa = this.context.Qa
    };
    _.T(zP, Z);
    zP.prototype.g = function() {
        var a = this,
            b = this.o.value,
            c = new _.u.Map;
        if (!b.length || _.E(HE)) this.output.G(c);
        else {
            var d = this.j,
                e = _.$f(),
                f = b.map(function(g) {
                    return d.createAuctionNonce().then(function(h) {
                        c.set(g, h)
                    }).catch(function(h) {
                        a.I(h)
                    })
                });
            this.output.La(_.u.Promise.all(f).then(function() {
                a.context.Cm && a.wa.ac.mc.Gd.zk.Rc({
                    Uc: _.$f() - e,
                    Ll: b.length
                });
                return c
            }))
        }
    };
    var AP = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1166);
        this.fa = b;
        this.aa = c;
        this.H = d;
        this.j = gI(this);
        this.o = W(this);
        this.C = W(this);
        this.P = X(this, e);
        this.W = X(this, f);
        jI(this, g);
        this.J = X(this, h)
    };
    _.T(AP, Z);
    AP.prototype.g = function() {
        var a = this,
            b = this.P.value;
        if (b) {
            var c = ux(this.W.value, {
                    uuid: this.fa
                }),
                d = this.aa.createElement("script");
            b = {
                source: b,
                credentials: this.J.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            qb(d, eb(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.aa.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.La(BP(c).catch(function(e) {
                e instanceof hH ? a.H(e) : (a.I(e), a.l(e));
                return null
            }))
        } else this.j.ba(), this.o.ba(), this.C.ba()
    };
    var BP = function(a) {
        var b, c;
        return _.ub(function(d) {
            if (1 == d.g) return d.yield(fetch(a.toString()).catch(function() {
                throw new hH("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.g) return b = d.A, d.yield(b.text(), 3);
            c = d.A;
            return d.return(CA(c))
        })
    };
    var CP = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 1167);
        this.aa = b;
        this.Z = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = X(this, g);
        this.P = Y(this, h);
        this.W = Y(this, k);
        this.fa = Y(this, l);
        m && (this.J = Y(this, m))
    };
    _.T(CP, Z);
    CP.prototype.g = function() {
        var a = this.P.value,
            b = this.W.value,
            c = this.fa.value;
        if (a)
            if (b && c) {
                var d = vi(a, 1, 2),
                    e = vi(a, 2, 2);
                a = vi(a, 3, 2);
                if (d.length !== e.length) this.j(new gH("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.zi(d.filter(function(f) {
                        return f
                    })), _.zi(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.dg("SCRIPT"), a.setAttribute("type", "webbundle"), qb(a, eb(JSON.stringify(c).replace(/</g, "\\u003C"))), this.aa.head.removeChild(b), this.aa.head.appendChild(a)) : this.aa.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.H(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.o.value, this.Z, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.Z)
                }
            } else this.j(Error("Lost bundle script"))
    };
    var DP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        tk.call(this);
        e = new AP(a, f, h, c, m, n, p, r);
        J(this, e);
        J(this, new CP(a, h, g, b, c, d, k, e.j, e.o, e.C, l));
        this.g = {
            output: e.j
        }
    };
    _.T(DP, tk);
    var At = new _.u.Set,
        EP = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Co("Reached Limit for addEventListener");
        }, 3E5),
        FP = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.R = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.K = 0;
            this.D = new _.u.Map;
            At.add(this);
            this.R.info(HK(this.getName()))
        };
    _.T(FP, _.V);
    var Ct = function(a) {
        a.enabled || (a.enabled = !0, Qn(6, a.context), a.o())
    };
    FP.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new MN(a, this.getName());
        ht(this.l, "slotAdded", 818, c);
        this.R.info(IK(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.Ne(b, 4, _.vd, a)
    };
    FP.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return fa(b.g, c)
        })
    };
    FP.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.K >= _.Qf(SD) && 0 < _.Qf(SD)) return EP(), !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"], _.z(_.H, "includes")).call(_.H, a)) return P(this.R, wL()), !1;
        var e;
        if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return !1;
        this.D.has(a) || this.D.set(a, new _.u.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.R.error(XK(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.D.get(a).set(b, c);
        this.l.listen(a, c);
        this.K++;
        return !0
    };
    FP.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.D.get(a)) ? void 0 : c.get(b);
        if (!d || !XJ(this.l, a, d)) return !1;
        this.K--;
        return this.D.get(a).delete(b)
    };
    var st = function(a) {
        for (var b = _.x(At), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var wt = function(a, b, c, d) {
        FP.call(this, a, b, d);
        this.j = c;
        this.ads = new _.u.Map;
        this.Sc = !1
    };
    _.T(wt, FP);
    wt.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Sc = a)
    };
    var JL = function(a, b) {
            var c;
            return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Xl)
        },
        KL = function(a, b, c, d) {
            b = new IN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            ht(a.l, "slotRenderEnded", 67, b)
        };
    wt.prototype.getName = function() {
        return "companion_ads"
    };
    wt.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen($J, function(d) {
            On(d.detail, 11) && (GP(c, a).Xl = !0)
        });
        FP.prototype.slotAdded.call(this, a, b)
    };
    wt.prototype.o = function() {};
    var GP = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.sp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        HL = function(a, b) {
            var c = hn().g,
                d = hn().A;
            if (a.j.enabled) {
                var e = {
                    jc: 3
                };
                a.I && (e.Hd = a.I);
                a.C && (e.Id = a.C);
                b = null != b ? b : a.g;
                c = Vm(c, d);
                d = e.Hd;
                var f = e.Id;
                d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.R.error(OK(b[0].getDomId()))
        },
        IL = function(a, b) {
            return a.g.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var xt = function(a, b, c) {
        FP.call(this, a, b, c)
    };
    _.T(xt, FP);
    xt.prototype.getName = function() {
        return "content"
    };
    xt.prototype.o = function() {};
    var qw = function(a, b) {
        this.configuration = ur();
        this.wa = a;
        this.g = b
    };
    qw.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.pb) ? d : this.configuration[a].ag;
        0 === e || 1 / e < this.g || (b = b(_.z(Object, "assign").call(Object, {}, {
            pb: e
        }, c)), this.configuration[a].send(this.wa, b))
    };
    var HP = _.Bw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        IP = _.Bw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        JP = new _.u.Map([
            [2, {
                Kg: "page_level_ads"
            }],
            [5, {
                Kg: "shoppit"
            }],
            [6, {
                Kg: "side_rails"
            }]
        ]),
        KP = function(a) {
            var b = void 0 === b ? JP : b;
            this.context = a;
            this.g = b;
            this.A = new _.u.Map;
            this.loaded = new _.u.Set
        },
        MP;
    KP.prototype.load = function(a) {
        var b = _.LP(this, a),
            c, d = (null != (c = this.g.get(a.module)) ? c : {}).Kg;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.Am(172)) && "pagead2.googlesyndication.com" === fB((c.src || "").match(_.eB)[3] || null) ? _.ib(IP, this.context.Pa, d) : _.ib(HP, this.context.Pa, d);
            c = {};
            var e = _.Qf(vE);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.rx(d, c) : d;
            MP(this, a);
            _.ip(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.LP = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.Qh);
        return a.A.get(b)
    };
    MP = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Il(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.Gk ? [] : f.Gk).map(function(g) {
                    return _.LP(a, g).promise
                });
                _.u.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Eo(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var cu = function(a, b) {
        Z.call(this, a, 980);
        this.output = new Xr;
        this.j = [];
        this.o = X(this, b)
    };
    _.T(cu, Z);
    cu.prototype.g = function() {
        for (var a = _.x((_.H = [this.o.value, this.j.map(function(c) {
                return c.value
            })], _.z(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next()) nh(b.value);
        this.output.notify()
    };
    var Kt = function(a, b) {
        Z.call(this, a, 892, _.Qf(oE));
        this.bd = W(this);
        this.kd = W(this);
        this.fd = W(this);
        this.Ob = W(this);
        this.Bd = W(this);
        this.Dd = W(this);
        this.qc = W(this);
        this.j = iI(this, b);
        this.Nb = W(this)
    };
    _.T(Kt, Z);
    Kt.prototype.g = function() {
        var a = this.j.value;
        if (!a) throw Error("config timeout");
        this.bd.Ha(_.Bm(a, Pz, 3));
        this.kd.Ha(_.Bm(a, Rz, 2));
        var b = this.fd,
            c = b.G;
        var d = ve(a, 4, $c, 2);
        c.call(b, d);
        b = this.Ob;
        c = b.Ha;
        d = _.gk(a, Lz, 6);
        c.call(b, d);
        b = this.Bd;
        c = b.Ha;
        d = _.gk(a, Jv, 5);
        c.call(b, d);
        this.Dd.Ha(_.Bm(a, aA, 7));
        var e;
        b = this.qc;
        c = b.G;
        d = _.u.Set;
        var f;
        null == (e = _.Bm(a, Mz, 1)) ? f = void 0 : f = vi(e, 6, 2);
        c.call(b, new d(f || []));
        this.Nb.Ha(_.Bm(a, cA, 8))
    };
    Kt.prototype.K = function(a) {
        this.l(a)
    };
    Kt.prototype.l = function(a) {
        this.bd.lb(a);
        this.kd.lb(a);
        this.fd.G([]);
        this.Ob.G([]);
        this.Bd.G([]);
        this.Dd.ba();
        this.Nb.ba()
    };
    var Jt = function(a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.j = W(this);
        this.error = void 0;
        var d = W(this);
        this.o = X(this, d);
        b(function(e, f) {
            if (f) c.error = f, d.G([]);
            else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.G(g)
                }
            } catch (h) {} finally {
                d.Tc || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(Jt, Z);
    Jt.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(We(dA, this.o.value))
    };
    var NP = function(a, b) {
        Z.call(this, a, 1081);
        this.Eb = W(this);
        this.j = Y(this, b)
    };
    _.T(NP, Z);
    NP.prototype.g = function() {
        this.j.value ? this.Eb.G(this.j.value) : this.Eb.ba()
    };
    var OP = new _.u.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        PP = function(a, b, c, d, e, f, g, h, k) {
            Z.call(this, a, 1079);
            this.aa = b;
            this.googletag = c;
            this.ca = d;
            this.H = e;
            this.j = f;
            this.R = g;
            this.o = h;
            this.C = k;
            W(this)
        };
    _.T(PP, Z);
    PP.prototype.g = function() {
        var a = this,
            b = this.o.getAdUnitPath(),
            c = OP.get(_.kg(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.ca) ? d : this.j.g;
            b = new pN(this.context, this.aa, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.H, this.R, !1, this.C);
            _.S(this, b);
            Ck(b)
        }
    };
    var bu = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.ca = c;
        this.H = d;
        this.o = e;
        this.R = f;
        this.C = W(this);
        this.j = new NP(this.context, this.C);
        this.Eb = this.j.Eb;
        _.S(this, this.j);
        this.J = X(this, g)
    };
    _.T(bu, Z);
    bu.prototype.g = function() {
        if (_.E(tE)) {
            for (var a = [], b = _.x(this.J.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, kl(c, bA)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.C.Ha(null == d ? void 0 : _.Bm(d, Wz, 4));
            d = new tk;
            _.S(this, d);
            a = _.x(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new PP(this.context, document, this.googletag, null != (c = this.ca) ? c : this.o.g, this.H, this.o, this.R, _.Bm(b, Yz, nl(b, bA, 5)), _.Bm(b, Wz, 4)));
            J(d, this.j);
            Ck(d)
        } else this.Eb.ba()
    };
    var ku = function(a, b, c, d, e, f, g, h) {
        _.V.call(this);
        this.context = a;
        this.j = b;
        this.l = c;
        this.R = d;
        this.L = e;
        this.g = f;
        this.ib = g;
        this.D = h
    };
    _.T(ku, _.V);
    var rw = function(a) {
        nI.call(this, function(b, c) {
            Ml(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.T(rw, nI);
    var QP = function() {
        qP.apply(this, arguments)
    };
    _.T(QP, qP);
    QP.prototype.D = function() {
        var a = this,
            b = this.l,
            c = b.mj;
        b = b.Te;
        var d = rP(this);
        if (null == c ? 0 : c.length)
            if (_.gy) {
                c = _.x(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.zi(c));
        b && (d.allow = b);
        sP(this, d);
        Ol(this.context, 653, function() {
            var f;
            if (f = ak(a.Ra.hb)) {
                var g = f.toString().toLowerCase();
                f = -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") || _.E(RF) ? f : ak("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>")
            }
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ka() && g.open("text/html", "replace");
            g.write(_.Qx(f));
            var l, m, n;
            if (Ax(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    QP.prototype.j = function() {
        return !0
    };
    var Ju = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.O = d;
        this.za = e;
        this.ab = f;
        this.vb = g;
        this.Oa = h;
        this.isBackfill = k;
        this.Ub = l;
        this.ha = m;
        this.B = n;
        this.j = W(this);
        this.C = W(this);
        this.o = hI(this);
        this.J = X(this, p);
        this.la = X(this, r);
        jI(this, v);
        this.W = X(this, w);
        this.H = X(this, y);
        this.P = X(this, B);
        jI(this, G);
        this.ra = Y(this, C);
        jI(this, F);
        this.ga = X(this, M);
        jI(this, R);
        aa && jI(this, aa);
        N && (this.fa = Y(this, N))
    };
    _.T(Ju, Z);
    Ju.prototype.g = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.hb) throw new gH("invalid html");
        var b, c;
        a: {
            var d = this.context,
                e = {
                    aa: document,
                    slotId: this.slotId,
                    L: this.L,
                    O: this.O,
                    za: this.za,
                    size: this.P.value,
                    tj: this.W.value,
                    Mh: this.H.value,
                    Oa: this.Oa,
                    vb: this.vb,
                    mj: this.ra.value,
                    isBackfill: this.isBackfill,
                    Ub: this.Ub,
                    Te: this.ga.value,
                    bn: null == (b = this.ha) ? void 0 : _.Q(b, 14),
                    Of: null == (c = this.fa) ? void 0 : c.value,
                    ab: this.ab
                };b = this.la.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? KO : QP)(d, a, e);
                    break a;
                case 2:
                    a = new tP(d, a, e);
                    break a;
                default:
                    ob(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        RP(this, this.B, d);
        this.B.top && this.B.top !== this.B && _.Xk(this.B.top) && RP(this, this.B.top, d);
        this.o.notify();
        this.j.G(d);
        this.C.G(a.j())
    };
    var RP = function(a, b, c) {
        tp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && ht(a.slotId, hr, 824, d)
        })
    };
    var pu = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.sa = c;
        this.gb = d;
        this.height = e;
        this.output = W(this)
    };
    _.T(pu, Z);
    pu.prototype.g = function() {
        if (null == this.height) this.output.ba();
        else {
            var a = Math.round(.3 * this.sa),
                b;
            2 !== this.format && 3 !== this.format || null == (b = this.gb) || !_.Q(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var yu = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.ca = c;
        this.o = d;
        this.aa = f;
        this.L = g;
        this.vb = m;
        this.output = W(this);
        this.J = 2 === e || 3 === e;
        this.j = X(this, h);
        this.H = X(this, k);
        this.C = Y(this, l);
        n && jI(this, n)
    };
    _.T(yu, Z);
    yu.prototype.g = function() {
        var a = nq(this.ca, this.o),
            b = Ym(this.slotId, this.aa) || Qp(this.j.value, fn(this.slotId), a);
        this.H.value && !a && (b.style.display = "inline-block");
        this.J ? iK(this.L, this.slotId, function() {
            return void _.ZA(b)
        }) : _.sp(this, function() {
            return void _.ZA(b)
        });
        a = SP(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var SP = function(a) {
        var b = a.j.value,
            c, d = null == (c = a.C.value) ? void 0 : c.height;
        if (b && !a.vb && d) {
            c = a.ca;
            var e;
            a = (null != (e = mq(a.o, 23)) ? e : _.Q(c, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else a = 0;
        return a
    };
    var nu = function(a, b) {
        Z.call(this, a, 859);
        this.B = b;
        this.output = W(this)
    };
    _.T(nu, Z);
    nu.prototype.g = function() {
        this.output.G(!_.Xk(this.B.top))
    };
    var Fu = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.aa = c;
        this.output = W(this)
    };
    _.T(Fu, Z);
    Fu.prototype.g = function() {
        var a = [],
            b = this.aa;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.H = c.features(), _.z(_.H, "includes")).call(_.H, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
                _.E(ED) && a.push("autoplay");
                break;
            case 7:
                _.E(FD) && a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var Xu = function(a, b, c, d) {
        Z.call(this, a, 1207);
        this.za = c;
        this.slotId = d;
        jI(this, b)
    };
    _.T(Xu, Z);
    Xu.prototype.g = function() {
        ht(this.za, "impressionViewable", 715, new JN(this.slotId, "publisher_ads"))
    };
    var Wu = function(a, b, c, d) {
        $N.call(this, a, b, c);
        jI(this, d)
    };
    _.T(Wu, $N);
    var Su = function(a, b, c, d, e, f) {
        f = void 0 === f ? mu : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.aa = d;
        this.za = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.ay(function() {
            ht(g.za, "slotVisibilityChanged", 716, new KN(g.slotId, "publisher_ads", g.j))
        }, 200);
        this.H = X(this, c);
        var h = new Xr;
        YJ(this.slotId).then(function() {
            return void h.notify()
        });
        jI(this, h)
    };
    _.T(Su, Z);
    Su.prototype.g = function() {
        var a = this,
            b = this.C(Il(this.context, this.id, function(c) {
                c = _.x(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.o) && TP(a)
            }));
        b && (b.observe(this.H.value), tp(this, this.id, this.aa, "visibilitychange", function() {
            TP(a)
        }), _.sp(this, function() {
            b.disconnect()
        }))
    };
    var TP = function(a) {
        var b = Math.floor(HH(a.aa) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b) a.j = b, a.J()
    };
    var Du = function(a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.ca = b;
        this.o = c;
        this.th = d;
        this.output = W(this);
        this.j = X(this, e);
        this.C = X(this, f)
    };
    _.T(Du, Z);
    Du.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.hb ? this.C.value ? (a = new Jn, a = ai(a, 3, this.th), _.Q(Pn([a, this.ca.Fc(), this.o.Fc()]), 3) ? this.output.G(rJ) : this.output.ba()) : this.output.ba() : this.output.ba();
                break;
            case 2:
                this.output.ba();
                break;
            default:
                ob(a)
        }
    };
    var UP = function(a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.o = c;
        this.documentElement = d;
        this.L = e;
        this.j = f;
        this.output = W(this)
    };
    _.T(UP, Z);
    UP.prototype.g = function() {
        var a = _.dg("INS");
        a.id = this.o;
        Lm(this.j) && _.yp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.ZA(a)
        };
        (_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.j) ? iK(this.L, this.slotId, b) : _.sp(this, b);
        this.output.G(a)
    };
    var VP = function(a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.J = b;
        this.C = c;
        this.o = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.ka(a) || !_.ka(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.H = X(this, this.j)
    };
    _.T(VP, Z);
    VP.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.H) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3], _.z(_.H, "includes")).call(_.H, this.C)) {
            a = _.x(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.J && _.ZA(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    };
    var qu = function(a, b, c, d, e, f, g, h, k) {
        tk.call(this);
        c ? (a = new VP(a, e, g, k, c), J(this, a), a = a.output) : Km(g) ? (a = new UP(a, b, d, f, h, g), J(this, a), a = a.output) : (b = new zr(a, b, ZJ, function(l) {
            return l.detail
        }), J(this, b), a = new VP(a, e, g, k, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.T(qu, tk);
    var WP = function(a, b) {
            var c = hn();
            this.context = a;
            this.L = b;
            this.g = c
        },
        XP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y) {
            var B = document,
                C = window;
            e || f || qK(a.L, d);
            var G = bv(a.context, b, a.g, c, d, e, f, g, h, k, l, B, m, n, p, r, v, function() {
                qK(a.L, d);
                pK(a.L, d, G)
            }, w, y);
            f || pK(a.L, d, G);
            _.sp(d, function() {
                qK(a.L, d)
            });
            C.top !== C && C.addEventListener("pagehide", function(F) {
                F.persisted || qK(a.L, d)
            });
            Ck(G)
        };
    var YP = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.Da = b;
        this.ib = c;
        this.o = W(this);
        this.j = X(this, d)
    };
    _.T(YP, Z);
    YP.prototype.g = function() {
        CM(this.ib, _.Rn(this.Da, "__gads", this.j.value));
        Tn(20, this.context, this.Da, this.j.value);
        Tn(2, this.context, this.Da, this.j.value);
        this.o.G(oh())
    };
    var dv = 0,
        ZP = new _.Om(-9, -9);
    var hv = new _.u.Set([function(a, b) {
        var c = a.oa.O.ca;
        b.set("pvsid", {
            value: a.na.context.pvsid
        }).set("correlator", {
            value: vs(c, 26)
        })
    }, function(a, b) {
        var c = a.oa.O.ca,
            d = a.en;
        a = d.Id;
        d = d.Hd;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? ik(c, 23) : null
        }).set("vid", {
            value: e ? ik(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Zy(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.X,
            e = c.O.T;
        c = a.Zg;
        var f = c.ll,
            g = c.el;
        b.set("eid", {
            value: a.na.mg
        }).set("debug_experiment_id", {
            value: AC().split(",")
        }).set("expflags", {
            value: _.Am(253) ? Rf(UD) || null : null
        }).set("pied", {
            value: function() {
                var h = new rI,
                    k = !1,
                    l = !1;
                f && (k = !0, pk(h, 1, Wz, f));
                var m = d.map(function(p) {
                    var r = new pI,
                        v, w;
                    null == (v = e[p.getDomId()]) ? w = void 0 : w = _.gk(v, Wz, 27);
                    p = w;
                    if (null == p || !p.length) return r;
                    l = k = !0;
                    p = _.x(p);
                    for (v = p.next(); !v.done; v = p.next()) pk(r, 1, Wz, v.value);
                    return r
                });
                l && _.vm(h, 2, m);
                m = _.x(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) pk(h, 1, Wz, n.value), k = !0;
                return k ? Ib(h.g(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.na;
        a = c.context;
        c = c.zb;
        b.set("output", {
            value: "ldjh"
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: a.Ze
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.na.Z;
        a = nv(a.oa.O.ca) || new LL;
        var d = _.kg(a, 6, 2);
        b = b.set("rdp", {
            value: _.Q(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(a, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.E(ND) && _.Am(221) && null == On(c, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: Bv(c, 2)
        }).set("gdpr", {
            value: null != On(c, 3) ? _.Q(c, 3) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("addtl_consent", {
            value: Bv(c, 4)
        }).set("tcfe", {
            value: gz(c, 7)
        }).set("us_privacy", {
            value: Bv(c, 1)
        }).set("npa", {
            value: _.Q(c, 6) || _.Q(a, 8) ? 1 : null
        }).set("puo", {
            value: _.E(sE) && _.Q(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Ia: !0
            }
        }).set("tfcd", {
            value: null != _.Yc(_.hi(a, 5)) ? _.kg(a, 5, 0) : null,
            options: {
                Ia: !0
            }
        }).set("trt", {
            value: null != _.Yc(_.hi(a, 10)) ? _.kg(a, 10, 0) : null,
            options: {
                Ia: !0
            }
        }).set("tad", {
            value: _.E(gv) && null != On(c, 8) ? _.Q(c, 8) ? "1" : "0" : null,
            options: {
                Ia: !0
            }
        }).set("gpp", {
            value: Bv(c, 11)
        });
        a = b.set;
        c = $y(c, 10);
        a.call(b, "gpp_sid", {
            value: c.join(",") || void 0
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.O,
            e = c.X,
            f = c.xg,
            g = a.na.B,
            h = e.map(function(l) {
                return d.T[l.getDomId()]
            }),
            k = [];
        a = e.map(function(l) {
            return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                if (!m) return "";
                var n = _.z(k, "findIndex").call(k, function(p) {
                    return p === m
                });
                return 0 <= n ? n : k.push(m) - 1
            }).join("/")
        });
        b.set("iu_parts", {
            value: k
        }).set("enc_prev_ius", {
            value: a
        }).set("prev_iu_szs", {
            value: h.map(function(l) {
                return Jm(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.H = Im(n), _.z(_.H, "includes")).call(_.H, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = Lp(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = IB(Tf(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.E(yE) ? eq(e, function(l) {
                return _.uh(l.getDomId())
            }) : null,
            options: _.z(Object, "assign").call(Object, {}, {
                Ua: "~"
            }, {
                md: !0
            })
        })
    }, function(a, b) {
        var c = a.oa;
        a = c.X;
        c = c.O;
        var d = c.ca,
            e = c.T;
        b.set("sfv", {
            value: VL ? VL : VL = En()
        }).set("fsfs", {
            value: eq(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : mq(f, 12)) ? g : On(d, 13))
            }),
            options: {
                Ua: ",",
                Rd: 0,
                md: !0
            }
        }).set("fsbs", {
            value: eq(a, function(f) {
                f = e[f.getDomId()].Fc();
                var g = d.Fc(),
                    h;
                return (null != (h = null == f ? void 0 : mq(f, 3)) ? h : null == g ? 0 : _.Q(g, 3)) ? 1 : 0
            }),
            options: {
                Rd: 0,
                md: !0
            }
        })
    }, function(a, b) {
        var c = a.na.L;
        a = a.oa;
        var d = a.xg;
        b.set("rcs", {
            value: eq(a.X, function(e) {
                if (!d) {
                    var f = c.g.get(e);
                    f && f.ij++
                }
                return oK(c, e)
            }),
            options: {
                Rd: 0,
                md: !0
            }
        })
    }, function(a, b) {
        var c = a.oa;
        a = a.na.zb;
        c = c.O.T[c.X[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? ik(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.oa,
            e = d.X,
            f = d.O.T;
        a = a.na;
        var g = a.Z,
            h = a.B;
        c = void 0 === c ? function(n, p) {
            return fh(n, p)
        } : c;
        a = e.map(function(n) {
            return f[n.getDomId()]
        });
        var k, l, m;
        b.set("ists", {
            value: cq(a, yr) || null
        }).set("fas", {
            value: eq(a, function(n) {
                return zq(xr(n))
            }),
            options: {
                Rd: 0,
                md: !0
            }
        }).set("itsi", {
            value: e.some(function(n) {
                var p;
                return !mN(n) && 5 === (null == (p = f[n.getDomId()]) ? void 0 : xr(p))
            }) ? function() {
                var n = c(g, h);
                if (!n) return 1;
                var p;
                n = Math.max.apply(Math, _.zi(null != (p = _.II(n, 604800)) ? p : []));
                return isFinite(n) ? Math.floor(Math.max((Date.now() - n) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: cq(a, function(n) {
                return 5 === xr(n) && _.E(_.aE)
            }) || null
        }).set("ifs", {
            value: null != (m = null == (k = (_.H = _.z(Object, "values").call(Object, f), _.z(_.H, "find")).call(_.H, function(n) {
                return li(n, kM, 29)
            })) ? void 0 : null == (l = _.Bm(k, kM, 29)) ? void 0 : hl(l)) ? m : null
        })
    }, function(a, b) {
        a = a.oa;
        var c = a.O.T;
        a = a.X.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: cq(a, function(d) {
                return 4 === xr(d)
            }) || null
        })
    }, function(a, b) {
        var c = a.oa,
            d = a.na;
        a = d.isSecureContext;
        d = d.B;
        var e = b.set;
        var f = c.X;
        var g = c.O;
        c = c.jc;
        var h = g.ca,
            k = g.T,
            l = new Gp;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.Q(k, 17));
        l.set(2, Tq(f, g));
        l.set(3, _.Q(h, 27) || !1);
        l.set(4, 3 === c);
        f = Ip(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: Oq("google_preview", d)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        a = a.na;
        var c = a.Z,
            d = a.Da,
            e = _.Rn(d, "__gads", c);
        a = "1" === _.Rn(d, "__gpi_opt_out", c) ? "1" : null;
        b = b.set("cookie", {
            value: e,
            options: {
                Ia: !0
            }
        }).set("cookie_enabled", {
            value: !e && pH(d, c) ? "1" : null
        });
        e = b.set;
        c = (c = _.Rn(d, "__gpi", c)) && !_.z(c, "includes").call(c, "&") ? c : null;
        e.call(b, "gpic", {
            value: c
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        var c = a.na.B;
        a = Qq(a.oa.O.ca.Sa());
        var d = c.document,
            e = d.domain;
        b.set("cdm", {
            value: (a || Mm(c)) === d.URL ? "" : e
        })
    }, function(a, b) {
        a = a.na.B;
        b.set("arp", {
            value: vp(a) ? 1 : null
        }).set("abxe", {
            value: _.Xk(a.top) || vv(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.na.B;
        a = Qq(a.oa.O.ca.Sa());
        b.set("dt", {
            value: (new Date).getTime()
        });
        if (!a) {
            try {
                var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {
                value: d
            })
        }
    }, function(a, b) {
        var c = a.oa,
            d = c.O;
        c = c.X;
        a = a.na.B;
        for (var e = Hm(!0, a), f = d.ca, g = a.document, h = d.T, k = [], l = [], m = _.x(c), n = m.next(); !n.done; n = m.next()) {
            var p = n.value,
                r = h[p.getDomId()],
                v = nq(f, r);
            n = void 0;
            p = null != (n = dn(p, r, g, v)) ? n : ZP;
            k.push(Math.round(p.x));
            l.push(Math.round(p.y))
        }
        e && (d.Jd = e);
        f = ch(a) ? null : Hm(!1, a);
        try {
            var w = a.top;
            var y = cv(w.document, w)
        } catch (B) {
            y = new _.Om(-12245933, -12245933)
        }
        b.set("adxs", {
            value: k,
            options: {
                Ia: !0
            }
        }).set("adys", {
            value: l,
            options: {
                Ia: !0
            }
        }).set("biw", {
            value: e ? e.width : null
        }).set("bih", {
            value: e ? e.height : null
        }).set("isw", {
            value: e ? null == f ? void 0 : f.width : null
        }).set("ish", {
            value: e ? null == f ? void 0 : f.height : null
        }).set("scr_x", {
            value: Math.round(y.x),
            options: {
                Ia: !0
            }
        }).set("scr_y", {
            value: Math.round(y.y),
            options: {
                Ia: !0
            }
        }).set("btvi", {
            value: ev(c, a, d),
            options: {
                Ia: !0,
                Ua: "|"
            }
        })
    }, function(a, b) {
        var c = a.na,
            d = c.L,
            e = c.B;
        b.set("ucis", {
            value: a.oa.X.map(function(f) {
                (f = d.g.get(f)) ? (null != f.Ub || (f.Ub = e === e.top ? (++d.o).toString(36) : LA()), f = f.Ub) : f = "";
                return f
            }),
            options: {
                Ua: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.oa;
        var c = a.X,
            d = a.O,
            e = d.T;
        a = new _.u.Map;
        var f = Array(c.length),
            g = !1;
        d = _.x(d.ca.Sa());
        for (var h = d.next(); !h.done; h = d.next())
            if (h = h.value, "tag_origin" === _.I(h, 1)) {
                g = !0;
                for (var k = 0; k < c.length; k++) f[k] = [].concat(_.zi(qm(h)))
            } else a.set(_.I(h, 1), [qm(h)[0]]);
        for (d = 0; d < c.length; d++)
            if (h = e[c[d].getDomId()])
                for (h = _.x(h.Sa()), k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var l = _.I(k, 1);
                    if ("tag_origin" === _.I(k, 1)) {
                        g = !0;
                        var m = l = void 0;
                        (l = f)[m = d] || (l[m] = []);
                        f[d].push.apply(f[d], _.zi(qm(k)))
                    } else m = a.get(l) || [], k = qm(k)[0], 1 === c.length ? m[0] = k : k !== m[0] && (m[d + 1] = k), a.set(l, m)
                }
        c = [];
        e = _.x(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) h = d.value, d = qn()[h], h = a.get(h), d && h && "to" !== d && (1 < h.length ? (h = h.map(function(n) {
            return encodeURIComponent(n || "")
        }).join(), c.push(d + "," + h)) : 1 === h.length && "url" !== d && b.set(d, {
            value: h[0]
        }));
        c.length && b.set("sps", {
            value: c,
            options: {
                Ua: "|"
            }
        });
        b.set("tos", {
            value: g ? f.map(function(n) {
                return _.z(Array, "from").call(Array, new _.u.Set(n)).join("+")
            }) : void 0,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        a = a.na.B;
        var c, d, e, f, g, h, k;
        var l = a;
        l = void 0 === l ? DA : l;
        try {
            var m = l.history.length
        } catch (G) {
            m = 0
        }
        b = b.set("u_his", {
            value: m
        }).set("u_h", {
            value: null == (c = a.screen) ? void 0 : c.height
        }).set("u_w", {
            value: null == (d = a.screen) ? void 0 : d.width
        }).set("u_ah", {
            value: null == (e = a.screen) ? void 0 : e.availHeight
        }).set("u_aw", {
            value: null == (f = a.screen) ? void 0 : f.availWidth
        }).set("u_cd", {
            value: null == (g = a.screen) ? void 0 : g.colorDepth
        });
        c = b.set;
        d = a;
        d = void 0 === d ? _.t : d;
        d = d.devicePixelRatio;
        c = c.call(b, "u_sd", {
            value: "number" === typeof d ? +d.toFixed(3) : null
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        }).set("dmc", {
            value: null != (k = null == (h = a.navigator) ? void 0 : h.deviceMemory) ? k : null
        });
        h = c.set;
        k = a;
        k = void 0 === k ? _.t : k;
        d = new Gp;
        "SVGElement" in k && "createElementNS" in k.document && d.set(0);
        e = pB();
        e["allow-top-navigation-by-user-activation"] && d.set(1);
        e["allow-popups-to-escape-sandbox"] && d.set(2);
        k.crypto && k.crypto.subtle && d.set(3);
        "TextDecoder" in k && "TextEncoder" in k && d.set(4);
        k = Ip(d);
        h = h.call(c, "bc", {
            value: k
        });
        k = h.set;
        a: {
            try {
                var n, p, r = null == (n = a.performance) ? void 0 : null == (p = n.getEntriesByType("navigation")) ? void 0 : p[0];
                if (null == r ? 0 : r.type) {
                    var v;
                    var w = null != (v = AH.get(r.type)) ? v : null;
                    break a
                }
            } catch (G) {}
            var y, B, C;w = null != (C = BH.get(null == (y = a.performance) ? void 0 : null == (B = y.navigation) ? void 0 : B.type)) ? C : null
        }
        w = k.call(h, "nvt", {
            value: w
        });
        n = w.set;
        p = _.Qf(JD);
        p = 0 === p ? null : CB(a, 2 === p);
        w = n.call(w, "bz", {
            value: p
        });
        n = w.set;
        _.E(AE) ? a = La() && ol(a) ? a.document.documentElement.lang : void 0 : a = null;
        n.call(w, "tl", {
            value: a
        })
    }, function(a, b) {
        (a = _.Am(251)) && b.set("uach", {
            value: xy(a, 3)
        })
    }, function(a, b) {
        a = a.na;
        if (!a.Qb) {
            var c;
            if (a = null == (c = a.B.navigator) ? void 0 : c.userActivation) {
                c = 0;
                if (null == a ? 0 : a.hasBeenActive) c |= 1;
                if (null == a ? 0 : a.isActive) c |= 2
            } else c = void 0;
            c && b.set("uas", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.na,
            d = c.B,
            e = c.L;
        c = c.zb;
        a = a.oa;
        var f = a.X;
        a = a.O;
        var g = a.ca,
            h = a.T;
        a = Pq("google_preview", d);
        var k = d.document,
            l = a ? Rq(k.URL) : k.URL;
        k = a ? Rq(k.referrer) : k.referrer;
        a = !1;
        if (c) c = Qq(g.Sa());
        else {
            var m;
            c = null != (m = Qq(h[f[0].getDomId()].Sa())) ? m : Qq(g.Sa())
        }
        if (null != c) {
            var n = l;
            ch(d) || (k = "", a = !0)
        } else c = l;
        m = Sq(d);
        b.set("nhd", {
            value: m || null
        }).set("url", {
            value: c
        }).set("loc", {
            value: null !== n && n !== c ? n : null
        }).set("ref", {
            value: k
        });
        if (m) {
            n = b.set;
            var p, r;
            m = _.Xk(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
            var v;
            p = null == (v = d.location) ? void 0 : v.ancestorOrigins;
            d = sl(d) || "";
            v = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || v) ? a ? fB(d.match(_.eB)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Mb
            })
        }
    }, function(a, b) {
        a = a.na.context.pvsid;
        b.set("rumc", {
            value: _.E(QF) || _.Of(Kl).g ? a : null
        }).set("rume", {
            value: _.E(PF) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.Wr(a.na.B.document)
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.X;
        c = c.O;
        a = a.na.B;
        var e = Tp(d, c.T, c.ca),
            f = Wp(d, e, a);
        c = f.Ql;
        f = f.Lm;
        var g = Yp(d, e, a),
            h = g.al;
        g = g.Ol;
        var k = !1;
        d = d.map(function(m) {
            var n;
            m = null != (n = e.get(m)) ? n : 0;
            if (0 === m) return null;
            k = !0;
            return 2 === m ? "1" : "0"
        });
        var l;
        b.set("aee", {
            value: k ? d : null,
            options: {
                Ua: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                Ua: "|"
            }
        }).set("msz", {
            value: f,
            options: {
                Ua: "|"
            }
        }).set("fws", {
            value: h,
            options: {
                Ia: !0
            }
        }).set("ohw", {
            value: g,
            options: {
                Ia: !0
            }
        }).set("efat", {
            value: "#flexibleAdSlotTest" === (null == (l = a.location) ? void 0 : l.hash) ? "1" : null
        })
    }, function(a, b) {
        b.set("psts", {
            value: nK(a.na.L, a.oa.X)
        })
    }, function(a, b) {
        var c = a.na;
        a = c.Z;
        c = c.B;
        var d = c.document.domain;
        var e = eh(a) ? "null" !== c.origin ? c.document.cookie : null : null;
        var f = null != e ? e : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (Tf()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            d = "undefined" == typeof n ? KG("auto", d) : KG(n, d);
            var p = -1 < f.indexOf("__utma=" + d + "."),
                r = -1 < f.indexOf("__utmb=" + d);
            (e = (IB() || window).gaGlobal) || (e = {}, (IB() || window).gaGlobal = e);
            var v = !1;
            if (p) {
                var w = f.split("__utma=" + d + ".")[1].split(";")[0].split(".");
                r ? e.sid = w[3] : e.sid || (e.sid = m + "");
                e.vid = w[0] + "." + w[1];
                e.from_cookie = !0
            } else {
                e.sid || (e.sid = m + "");
                if (!e.vid) {
                    v = !0;
                    r = Math.round(2147483647 * Math.random());
                    p = IG.appName;
                    var y = IG.version,
                        B = IG.language ? IG.language : IG.browserLanguage,
                        C = IG.platform,
                        G = IG.userAgent;
                    try {
                        w = IG.javaEnabled()
                    } catch (F) {
                        w = !1
                    }
                    w = [p, y, B, C, G, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + f + (k || "");
                    for (k = w.length; 0 < g;) w += g-- ^ k++;
                    e.vid = (r ^ JG(w) & 2147483647) + "." + m
                }
                e.from_cookie || (e.from_cookie = !1)
            }
            if (!e.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                    if (k = LG.exec(f[w]) || MG.exec(f[w]) || NG.exec(f[w])) {
                        h = k[1] || 0;
                        if (h == m) {
                            l = k[2];
                            break b
                        }
                        h < n && (n = h, l = k[2])
                    }v && l && -1 != l.search(/^\d+\.\d+$/) ? (e.vid = l, e.from_cookie = !0) : l != e.vid && (e.cid = l)
            }
            e.dh = d;
            e.hid || (e.hid = Math.round(2147483647 * Math.random()));
            l = e
        }
        f = l;
        l = f.vid;
        d = f.sid;
        e = f.hid;
        v = f.from_cookie;
        f = f.cid;
        v && !eh(a) || b.set("ga_vid", {
            value: l
        }).set("ga_sid", {
            value: d
        }).set("ga_hid", {
            value: e
        }).set("ga_fc", {
            value: v
        }).set("ga_cid", {
            value: f
        }).set("ga_wpids", {
            value: c.google_analytics_uacct
        })
    }, function(a, b) {
        var c = a.oa.X,
            d = a.na.B;
        a = a.an;
        var e = a.eh,
            f = a.Ue,
            g = a.Gm,
            h = a.bk;
        if (!_.E(SF) && !g) {
            qh(d.isSecureContext, d.navigator, d.document) && b.set("td", {
                value: 1
            });
            if (e) switch (e.kind) {
                case 0:
                    b.set("eig", {
                        value: e.signal
                    });
                    break;
                case 1:
                    b.set("eigir", {
                        value: e.reason,
                        options: {
                            Ia: !0
                        }
                    });
                    break;
                default:
                    ob(e)
            }
            void 0 !== f && b.set("egid", {
                value: f,
                options: {
                    Ia: !0
                }
            });
            (null == h ? 0 : h.size) && !_.E(IE) && b.set("tan", {
                value: c.map(function(k) {
                    return h.get(k)
                })
            })
        }
    }, function(a, b) {
        var c = a.na.B,
            d = a.Qm;
        a = d.Tm;
        d = d.Rm;
        rh(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? Ib(a, 3) : a
        }), !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }), d && b.set("htps", {
            value: d
        }))
    }, function(a, b) {
        var c = a.na,
            d = c.B,
            e = c.Z,
            f = a.oa.X;
        a = a.um;
        c = a.uf;
        var g = a.Sk,
            h = a.Il;
        if (!_.E(RD)) {
            a = b.set;
            d = fh(e, d);
            e = Hl(f[0].getAdUnitPath());
            var k = _.E(Ek);
            k = void 0 === k ? !1 : k;
            f = new nA;
            var l = null != g ? g : [];
            g = k ? 1024 : 300;
            if (e && c && l && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids) try {
                    for (var m = _.x(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        "string" === typeof p.source && dk(52, p.source)
                    }
                } catch (w) {
                    var r;
                    dk(45, "", null == (r = w) ? void 0 : r.message)
                }
                m = _.x(l);
                for (n = m.next(); !n.done; n = m.next())
                    if (n = n.value, String(_.I(n, 1)) === e)
                        for (n = _.x(_.gk(n, Jz, 2)), p = n.next(); !p.done; p = n.next())
                            if (p = p.value, _.Q(p, nl(p, Kz, 3)) && (p = _.I(p, 1), !jk(f, p))) {
                                r = null;
                                try {
                                    var v = l = k = void 0;
                                    r = null == (k = c.getUserIdsAsEidBySource(p)) ? void 0 : null == (l = k.uids) ? void 0 : null == (v = l[0]) ? void 0 : v.id
                                } catch (w) {
                                    k = void 0, dk(45, p, null == (k = w) ? void 0 : k.message)
                                }
                                r && (r.length > g ? (k = {}, dk(12, p, null, (k.sl = String(r.length), k.fp = "1", k))) : (k = iA(p), l = ti(k, 2, r), k = f, l = ai(l, 11, !0), pk(k, 2, hk, l), k = {}, dk(19, p, null, (k.fp = "1", k.hs = r ? "1" : "0", k))))
                            }
            }
            qk(f, d, e, h);
            _.gk(f, hk, 2).length ? (c = {}, dk(50, "", null, (c.ns = String(_.gk(f, hk, 2).length), c)), c = Ib(f.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.sb.ze,
            d = a.oa.X;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: eq(a, function(e) {
                return Ib(e.g(), 3)
            }),
            options: _.z(Object, "assign").call(Object, {}, {
                Ua: "~"
            }, {
                md: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.x(_.gk(Yy(a.oa.O.ca.ji(), Ft, 2), Mr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            vi(e, 2, 2).length && (d = null != Ki(e, 3) ? _.az(e, 3) : _.kg(e, 1, 0) + 2, e = vi(e, 2, 2).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        var c = a.Tl;
        a = c.il;
        c = c.fn;
        b.set("scar", {
            value: a
        });
        _.E(XD) && (null == a ? 0 : a.length) && null != c && b.set("wst", {
            value: "0" === a ? "WEBVIEW_SDK_PAW" === c ? (3).toString() : (5).toString() : "WEBVIEW_SDK_PAW" === c ? (2).toString() : (4).toString()
        })
    }, function(a, b) {
        a = a.na.B;
        a = !(!a.isSecureContext || !ph("attribution-reporting", a.document));
        !_.E(OF) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.dm.cm) a = xy(hl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.cg(a.na.B);
        var c = $q;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.oa.O.ca;
        b.set("ppid", {
            value: _.Ji(a, 16) ? _.I(a, 16) : null,
            options: {
                Ia: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = ik(a.oa.O.ca, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + xy('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.oa;
        var c = a.O.ca;
        b.set("prev_scp", {
            value: ns(a.X, a.O),
            options: {
                md: !0,
                Ua: "|"
            }
        }).set("cust_params", {
            value: ps(c),
            options: {
                Ua: "&"
            }
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.O;
        a = a.na;
        var e = a.L,
            f = a.zb;
        b.set("adks", {
            value: c.X.map(function(g) {
                if (f) {
                    var h = d.T[g.getDomId()];
                    h = qp(h);
                    if (g = e.g.get(g)) g.Ld = h;
                    return h
                }
                h = d.ca;
                var k = d.T[g.getDomId()],
                    l;
                if (!(l = Uu(e, g))) {
                    h = qp(k, _.Q(h, 6) || _.Q(k, 17) ? null : Zm(g));
                    if (g = e.g.get(g)) g.Ld = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.na.B;
        var d = BB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (ch(a)) e = !1;
            else {
                var g = a.document,
                    h = g.documentElement;
                if (e && f) {
                    var k = 1,
                        l = 1;
                    a.innerHeight ? (k = a.innerWidth, l = a.innerHeight) : h && h.clientHeight ? (k = h.clientWidth, l = h.clientHeight) : g.body && (k = g.body.clientWidth, l = g.body.clientHeight);
                    if (l > 2 * f || k > 2 * e) {
                        e = !1;
                        break a
                    }
                }
                e = !0
            }
        }
        f = d.location.href;
        d === d.top ? f = !0 : (g = !1, (h = d.document) && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0)), (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1), f = g);
        d = e;
        e = f;
        f = a.top == a ? 0 : _.Xk(a.top) ? 1 : 2;
        g = 4;
        d || 1 !== f ? d || 2 !== f ? d && 1 === f ? g = 7 : d && 2 === f && (g = 8) : g = 6 : g = 5;
        e && (g |= 16);
        d = String(g);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Xk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = Yy(a.oa.O.ca, Ht, 36);
        a = ve(a, 1, _.Yc, 2);
        c.call(b, "ppt", {
            value: a,
            options: {
                Ua: "~"
            }
        })
    }, function(a, b) {
        a = a.na.B;
        try {
            var c, d, e = null == (c = a.external) ? void 0 : null == (d = c.getHostEnvironmentValue) ? void 0 : d.call(c, "os-mode");
            if (e) {
                var f = Number(JSON.parse(e)["os-mode"]);
                0 > f || b.set("wsm", {
                    value: f + 1
                })
            }
        } catch (g) {}
    }, function(a, b) {
        var c = a.oa,
            d = c.networkCode,
            e = c.O.T;
        a = a.uk.rd;
        var f = [],
            g = !1;
        c = _.x(c.X);
        for (var h = c.next(); !h.done; h = c.next()) {
            var k = void 0;
            (null == (k = e[h.value.getDomId()]) ? 0 : _.Q(k, 30)) ? (f.push("1"), g = !0) : f.push("")
        }
        b.set("is_cau", {
            value: g ? f : null
        });
        _.E(LD) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.oa,
            d = c.O.T;
        a = a.na.B;
        var e = [],
            f = !1;
        c = _.x(c.X);
        for (var g = c.next(); !g.done; g = c.next()) g = xr(d[g.value.getDomId()]), (_.H = [8, 9], _.z(_.H, "includes")).call(_.H, g) ? (f = 9 === g ? "right" : "left", e.push(_.Fj(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                Ua: "|"
            }
        })
    }, function(a, b) {
        var c = a.na,
            d = c.B;
        c = c.Z;
        var e = a.oa,
            f = e.O.ca;
        e = e.networkCode;
        a = a.Qk.Rk;
        if (_.E(QD)) {
            var g;
            (g = !a) || (g = !Je(a, 1, Cd).get(e));
            a = g;
            var h;
            f = !(null == (h = nv(f)) || !_.Q(h, 9));
            d = new VG(d, {
                jm: a,
                im: f
            });
            var k = void 0 === k ? !1 : k;
            if (_.Q(c, 8) || (d.options.im || !eh(c)) && d.options.jm) k = void 0;
            else if (k) {
                var l;
                k = null != (l = gh("__eoi", d.g)) ? l : void 0
            } else k = (new ih(d.g.document)).get("__eoi") || "";
            (l = k) && b.set("eo_id_str", {
                value: l
            })
        }
    }, function(a, b) {
        a = a.oa;
        var c = a.X,
            d = a.O.T;
        _.E(Mv) && b.set("eov", {
            value: cq(c, function(e) {
                var f, g;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (g = _.Bm(f, lM, 31)) ? 0 : _.Q(g, 1))
            })
        })
    }]);
    var $P = function(a, b, c) {
        Z.call(this, a, 798);
        this.output = W(this);
        this.j = Y(this, b);
        this.o = X(this, c)
    };
    _.T($P, Z);
    $P.prototype.g = function() {
        var a = this,
            b = new _.u.Map;
        if (this.j.value) {
            var c = this.j.value,
                d = c.na.zb,
                e = c.sb.ze;
            c = _.x(c.oa.X);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? aQ(this, f, h) : function() {
                    return a.o.value
                })
            }
        }
        this.output.G(b)
    };
    var aQ = function(a, b, c) {
        return Ii(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.j.value);
            d.oa.xg = !0;
            d.oa.X = [b];
            c && (d.sb.ze = new _.u.Map, d.sb.ze.set(b, c));
            return Nq(mv(d)).url
        })
    };
    var bQ = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.o = b;
        this.zb = c;
        this.O = d;
        this.R = e;
        this.B = f;
        this.Z = g;
        this.j = W(this)
    };
    _.T(bQ, Z);
    bQ.prototype.g = function() {
        var a = this,
            b = this.o;
        !this.zb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.M) return !1;
            var d = a.O.T[c.getDomId()],
                e;
            if (e = !(Dq(xr(d)) && (_.H = Sf(lE), _.z(_.H, "includes")).call(_.H, String(xr(d))))) e = a.R, Ri(a.B) && 4 === xr(d) ? (P(e, aL("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            if (e) {
                e = a.context;
                var f = a.R,
                    g = a.B,
                    h = a.Z;
                d = xr(d);
                5 !== d ? c = !1 : (e.V.log(578856259, _.sj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    U: 1
                }), (g = yq(g, !mN(c), h)) ? (rq(f, g, d, c.getAdUnitPath()), e.V.log(578856259, pj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    Jl: g
                }), e.V.log(578856259, _.sj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    U: 2
                })) : e.V.log(578856259, _.sj, {
                    pvsid: e.pvsid,
                    Ea: e.Ea,
                    fb: 17,
                    Hb: e.Pa,
                    U: 3
                }), c = !!g);
                e = !c
            }
            return e
        });
        30 < b.length && (P(this.R, $K("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var cQ = function(a, b, c) {
        Z.call(this, a, 919);
        this.j = b;
        this.Z = c;
        this.output = W(this)
    };
    _.T(cQ, Z);
    cQ.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.Q(a, 9)) && !!eh(this.Z);
        this.output.G(b)
    };
    var dQ = function(a, b, c, d, e, f) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = hI(this);
        this.o = X(this, c);
        e && (this.j = X(this, e));
        jI(this, d)
    };
    _.T(dQ, Z);
    var eQ = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    dQ.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.o.value.length,
            d = eQ(this);
        if (a.Wc) {
            var e = a.Qa,
                f = e.Vc;
            a = wl(a);
            var g = new aD;
            b = _.mj(g, 2, b);
            c = _.Al(b, 1, c);
            d = _.zl(c, 3, d);
            d = _.Bl(a, 7, Cl, d);
            f.call(e, d)
        }
        this.output.notify()
    };
    var rv = new _.u.Map;
    var fQ = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.za = b;
        this.O = c;
        this.output = hI(this);
        this.j = X(this, d)
    };
    _.T(fQ, Z);
    fQ.prototype.g = function() {
        for (var a = _.x(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.x(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Dm(this.O.T[b.getDomId()], 20);
            ht(b, aK, 808, {
                yk: c,
                rm: d
            });
            ht(this.za, "slotRequested", 705, new NN(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var gQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa, ha, la, ea, Pa, wa, Ca, Na, Xa, fb, Ua, dc) {
        Z.call(this, a, 785, _.Qf(zE));
        this.zb = b;
        this.L = c;
        this.Da = d;
        this.O = e;
        this.jc = f;
        this.networkCode = g;
        this.Id = h;
        this.Hd = k;
        this.mg = l;
        this.timer = m;
        this.Z = n;
        this.isSecureContext = p;
        this.Qb = r;
        this.B = v;
        this.He = w;
        this.j = W(this);
        this.o = W(this);
        this.P = W(this);
        jI(this, N);
        this.Ma = iI(this, y);
        this.Ec = iI(this, B);
        this.W = iI(this, C);
        this.H = X(this, G);
        M && (this.C = _.E(CE) ? new aI(M.Fd) : iI(this, M.Fd), M.te && (this.Kb = Y(this, M.te)));
        R && (this.J = _.E(CE) ? new aI(R.Zc) : iI(this, R.Zc));
        jI(this, N);
        aa && (this.mb = X(this, aa));
        ha && (this.fa = new aI(ha));
        la && (this.eb = Y(this, la));
        ea && (this.ra = X(this, ea));
        Pa && jI(this, Pa);
        wa && (this.xa = X(this, wa));
        F && (this.ga = Y(this, F));
        Ca && (this.qb = Y(this, Ca.Yg));
        Na && (this.Dc = X(this, Na));
        Xa && (this.ua = Y(this, Xa));
        fb && (this.la = Y(this, fb));
        Ua && (this.rb = X(this, Ua));
        dc && (this.Ac = iI(this, dc))
    };
    _.T(gQ, Z);
    gQ.prototype.g = function() {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.J && !this.J.Tc() ? 9 : this.C.Tc() ? null : 1
            }
            this.W.value && (this.L.Mb = this.W.value);
            var c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B;
            b = {
                na: {
                    B: this.B,
                    context: this.context,
                    L: this.L,
                    Da: this.Da,
                    Z: this.Z,
                    zb: this.zb,
                    mg: this.mg,
                    isSecureContext: this.isSecureContext,
                    Qb: this.Qb
                },
                oa: {
                    networkCode: this.networkCode,
                    X: this.H.value,
                    O: this.O,
                    jc: this.jc,
                    xg: !1
                },
                en: {
                    Id: this.Id,
                    Hd: this.Hd
                },
                Tl: {
                    il: null != (w = this.Ma.value) ? w : "0",
                    fn: null != (y = this.Ec.value) ? y : "WEBVIEW_SDK_PAW"
                },
                sb: {
                    ze: null == (c = this.ga) ? void 0 : c.value
                },
                Qm: {
                    Tm: a,
                    Rm: null == (d = this.Kb) ? void 0 : d.value
                },
                um: {
                    Il: null != (B = null == (e = this.mb) ? void 0 : e.value) ? B : void 0,
                    uf: null == (f = this.fa) ? void 0 : f.value,
                    Sk: null == (g = this.ra) ? void 0 : g.value
                },
                Zg: {
                    ll: null == (h = this.eb) ? void 0 : h.value,
                    el: null == (k = this.xa) ? void 0 : k.value
                },
                dm: {
                    cm: null == (l = this.qb) ? void 0 : l.value
                },
                an: {
                    eh: null == (m = this.Dc) ? void 0 : m.value,
                    Ue: null == (n = this.ua) ? void 0 : n.value,
                    Gm: null == (p = this.rb) ? void 0 : p.value,
                    bk: null == (r = this.Ac) ? void 0 : r.value
                },
                Qk: {
                    Rk: null == (v = this.la) ? void 0 : v.value
                },
                uk: {
                    rd: this.He.rd
                }
            };
            this.o.G(b);
            c = Nq(mv(b));
            d = c.url;
            GC(this.timer, (9).toString(), 9, c.Gh);
            this.j.G(d);
            this.P.G(iv(b) ? new mx(kx, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new mx(kx, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.o.ba()
    };
    var hQ = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.j = b;
        this.aa = c;
        this.O = d;
        this.B = e;
        this.output = hI(this);
        f && jI(this, f)
    };
    _.T(hQ, Z);
    hQ.prototype.g = function() {
        for (var a = _.x(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Zm(b, this.aa);
            if (!Ym(b, this.aa) && c) {
                a: {
                    var d = c;
                    var e = this.O.T[b.getDomId()],
                        f = 0,
                        g = 0;e = _.x(Im(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.x(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Rp($m(d, this.B)) || !d.parentElement || Rp($m(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.O;f = g.ca;g = g.T[b.getDomId()];Qp(c, fn(b), nq(f, g), d)
            }
        }
        this.output.notify()
    };
    var iQ = function(a, b, c, d, e, f, g, h) {
            this.D = a;
            this.K = b;
            this.M = c;
            this.X = d;
            this.Z = e;
            this.C = f;
            this.I = g;
            this.o = h;
            this.j = "";
            this.l = -1;
            this.g = 1;
            this.A = ""
        },
        kQ = function(a, b) {
            if (b)
                if (1 !== a.g && 2 !== a.g) jQ(a, new gH("state err: (" + ([a.g, a.A.length].join() + ")")));
                else {
                    a.A && (b = a.A + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.g) f.j = c, ++f.l, f.g = 2;
                        else {
                            var g = void 0;
                            try {
                                f.D(f.l, f.j, {
                                    kind: 0,
                                    hb: xB(c)
                                }, f.X, f.Z, f.C, f.I, null != (g = f.o) ? g : void 0), f.j = ""
                            } catch (h) {}
                            f.g = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.A = b.substr(c)
                }
        },
        jQ = function(a, b) {
            a.g = 4;
            try {
                a.K(b)
            } catch (c) {}
        },
        lQ = function(a) {
            1 !== a.g || a.A ? jQ(a, new gH("state err (" + ([a.g, a.A.length].join() + ")"))) : (a.g = 3, a.M(a.l, a.X, a.Z))
        };
    var mQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 788);
        this.la = b;
        this.ga = c;
        this.fa = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.H = hI(this);
        this.C = W(this);
        this.o = W(this);
        this.W = 0;
        this.P = !1;
        this.j = null != p ? p : new XMLHttpRequest;
        this.J = X(this, h);
        k && (this.ua = Y(this, k));
        this.xa = X(this, l);
        jI(this, m);
        this.ra = X(this, n)
    };
    _.T(mQ, Z);
    mQ.prototype.g = function() {
        var a = this,
            b = this.xa.value;
        if (b) {
            var c, d = new iQ(this.la, this.ga, this.fa, this.J.value, this.Z, null == (c = this.ua) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.ra.value;
            this.j.onreadystatechange = function() {
                nQ(a, d, !1)
            };
            this.j.onload = function() {
                nQ(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else a.o.G("")
            };
            this.j.onerror = function() {
                jQ(d, new hH("XHR error"));
                a.J.value.forEach(function(e) {
                    lt(e, a.L, a.O, "")
                });
                a.C.G(0);
                a.o.G("")
            };
            this.j.send()
        }
        this.H.notify()
    };
    var nQ = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status) a.P || (jQ(b, new hH("xhr_err-" + a.j.status)), a.P = !0);
                else {
                    var d = a.j.responseText.substr(a.W);
                    d && kQ(b, d);
                    a.W = a.j.responseText.length;
                    c && 4 === a.j.readyState && lQ(b)
                }
        } catch (e) {
            jQ(b, e)
        }
    };
    var oQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
        Z.call(this, a, 1078);
        this.W = b;
        this.P = c;
        this.J = d;
        this.Z = e;
        this.L = f;
        this.O = g;
        this.C = hI(this);
        this.o = W(this);
        this.j = W(this);
        this.H = X(this, h);
        k && (this.ga = Y(this, k));
        l && (this.la = X(this, l));
        this.ra = X(this, m);
        jI(this, n);
        this.fa = X(this, p);
        if (null == r ? 0 : r.se) this.xa = Y(this, r.se);
        v && (this.ua = X(this, v));
        w && (this.Ma = Y(this, w))
    };
    _.T(oQ, Z);
    oQ.prototype.g = function() {
        var a = this,
            b = this.ra.value;
        if (b) {
            var c, d, e, f = new iQ(this.W, this.P, this.J, this.H.value, this.Z, null == (c = this.ga) ? void 0 : c.value, null == (d = this.la) ? void 0 : d.value, null == (e = this.Ma) ? void 0 : e.value);
            c = this.fa.value ? "include" : "omit";
            var g;
            d = null == (g = this.xa) ? void 0 : g.value;
            var h;
            g = null == (h = this.ua) ? void 0 : h.value;
            h = _.z(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, g ? {
                adAuctionHeaders: g
            } : {});
            fetch(b, h).then(function(k) {
                pQ(a, k, f)
            }).catch(function(k) {
                qQ(a, k, f);
                a.H.value.forEach(function(l) {
                    lt(l, a.L, a.O, "")
                })
            })
        }
        this.C.notify()
    };
    var pQ = function(a, b, c) {
            a.o.G(b.status);
            if (300 <= b.status) a.j.La(b.text()), jQ(c, new hH("fetch_status-" + b.status));
            else {
                a.j.G("");
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    rQ(a, f, e, c)
                }).catch(function(f) {
                    qQ(a, f, c)
                }) : jQ(c, new hH("failed_reader"))
            }
        },
        rQ = function(a, b, c, d) {
            var e = b.value;
            b.done ? lQ(d) : (kQ(d, e), c.read().then(function(f) {
                rQ(a, f, c, d)
            }).catch(function(f) {
                qQ(a, f, d)
            }))
        },
        qQ = function(a, b, c) {
            jQ(c, new hH("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.o.G(0);
            a.j.G("")
        };
    var sQ = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = hI(this);
        this.j = X(this, e);
        jI(this, d)
    };
    _.T(sQ, Z);
    sQ.prototype.g = function() {
        var a = this.j.value;
        a.length && ft(this.timer, "3", gt(this.O.T[a[0].getDomId()], 20));
        this.output.notify()
    };
    var tQ = function(a, b, c, d, e) {
        Z.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Da = d;
        this.Z = e;
        this.output = W(this)
    };
    _.T(tQ, Z);
    tQ.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = up(a, Zx);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = We(AA, a);
        b = ve(a, 27, $c, 2);
        b = _.x(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Of(mh).g(c);
        Tn(4, this.context, this.Da, this.Z);
        ht(this.slotId, $J, 800, a);
        this.output.G(a)
    };
    var uQ = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = X(this, d)
    };
    _.T(uQ, Z);
    uQ.prototype.g = function() {
        var a = this;
        On(this.j.value, 11) && (_.lK(this.L, this.slotId), iK(this.L, this.slotId, function() {
            _.mK(a.L, a.slotId)
        }))
    };
    var vQ = function(a, b, c, d) {
        tk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.Z,
            f = d.ab,
            g = d.Da;
        a = d.Ra;
        d = d.R;
        c = new tQ(this.context, c, this.slotId, g, e);
        J(this, c);
        e = new xN(this.context, e, g, c.output);
        J(this, e);
        f = new zN(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new uQ(this.context, this.slotId, b, c.output);
        J(this, b);
        a = oI(this, 1229, Nv, {
            Sg: c.output
        }, {
            Ra: a
        }, {
            output: void 0
        });
        oI(this, 1220, Qv, {
            Sg: c.output
        }, {
            R: d,
            context: this.context
        }, {});
        this.g = {
            Hl: a.output
        }
    };
    _.T(vQ, tk);
    var wQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N) {
        Z.call(this, a, 973);
        this.ra = b;
        this.R = c;
        this.J = d;
        this.W = e;
        this.O = f;
        this.L = g;
        this.Da = h;
        this.ga = k;
        this.P = l;
        this.H = m;
        this.ne = n;
        this.la = p;
        this.networkCode = r;
        this.isSecureContext = v;
        this.Qb = w;
        this.ab = y;
        this.B = B;
        this.aa = C;
        this.j = R;
        this.ua = N;
        this.o = [];
        this.C = Y(this, G);
        this.fa = X(this, F);
        this.xa = X(this, M);
        this.j.Lb && jI(this, this.j.Lb.Lh)
    };
    _.T(wQ, Z);
    wQ.prototype.g = function() {
        var a = this,
            b = new tk;
        _.S(this, b);
        var c = this.fa.value,
            d = nv(this.O.ca);
        this.C.value && this.ua.G(this.C.value);
        var e = Zr(this.context, this.aa);
        e && _.S(b, e.Ka);
        var f = fr(this.context, _.Bm(this.O.ca, uu, 5), this.L, this.J, null == e ? void 0 : e.am.ge);
        e = f.Bg;
        (f = f.Cl) && _.S(b, f);
        f = new hQ(this.context, this.J, this.aa, this.O, this.B, e);
        J(b, f);
        var g = !!_.Q(this.O.ca, 6);
        e = new bQ(this.context, this.J, g, this.O, this.R, this.B, c);
        J(b, e);
        var h, k = new rM(this.context, d, c, (null == (h = _.Bm(this.O.ca, Ht, 36)) ? void 0 : ve(h, 1, _.Yc, 2)) || []);
        J(b, k);
        var l = this.j;
        h = l.Ul;
        var m = l.fm,
            n = l.Vm;
        l = l.He;
        var p, r = null != (p = this.j.Lb) ? p : {},
            v = r.Qd,
            w = r.Cd,
            y = r.Eb,
            B = r.Ob,
            C = r.gd,
            G = r.gi;
        p = r.qc;
        var F = r.ng,
            M = r.Qh;
        r = r.Nb;
        if (_.E(rE)) {
            var R = new DO(this.context, M);
            var N = new EO(this.context, M);
            J(b, R);
            J(b, N);
            var aa = R.j;
            R = N.j;
            N = N.o
        }
        if (F = pt(this.context, n, this.O.T, c, this.C.value, e.j, k.output, F, R)) {
            var ha = F.Xm;
            F = F.Wm;
            var la = ha.Ug;
            var ea = ha.vg;
            ha = ha.Se;
            _.S(b, F)
        }
        if (N = Hs(this.context, n, this.B.navigator, k.output, N)) {
            var Pa = N.zj;
            N = N.Ym;
            var wa = Pa.gj;
            Pa = Pa.wi;
            N && _.S(b, N)
        }
        _.E(NE) && (Pa = W(this), Pa.G(n.qh));
        var Ca = new UO(this.context, this.B);
        J(b, Ca);
        F = (null != v ? v : {}).ic;
        var Na;
        N = null == (Na = this.j.Lb) ? void 0 : Na.ue;
        Na = new zO(this.context, h.Vl);
        J(b, Na);
        if (v = jq(this.context, this.R, this.O.T, this.networkCode, e.j, v, y)) {
            var Xa = v.ek;
            _.S(this, v.Ka)
        }
        if (ea = as(this.context, m, ea, ha, this.O.T, e.j, M)) {
            var fb = ea.xf;
            _.S(this, ea.Ka)
        }
        if (aa = ts(this.context, this.C.value, N, k.output, aa)) {
            var Ua = aa.Sm;
            _.S(this, aa.Ka);
            this.o.push(Ua.Fd.promise)
        }
        if (n.Yj) {
            _.E(Zt);
            var dc = new zP(this.context, this.B.navigator, e.j);
            J(b, dc);
            dc = dc.output
        }
        aa = window.isSecureContext && _.E(LF) ? "wbn" : "ldjh";
        var Ec = ++this.L.I;
        ea = "wbn" === aa ? Br().toLowerCase() : void 0;
        ha = this.ne;
        var $b, kc;
        Xa = new gQ(this.context, g, this.L, this.Da, this.O, ha.jc, this.networkCode, ha.Id, ha.Hd, this.xa.value, _.Of(Kl), c, this.isSecureContext, this.Qb, this.B, l, Na.output, h.rc, Ca.output, e.j, null == ($b = Xa) ? void 0 : $b.mh, Ua, N, f.output, null == w ? void 0 : w.Mg, F, y, B, C, G, fb, wa, null == (kc = this.j.Lb) ? void 0 : kc.ng, r, R, dc);
        J(b, Xa);
        fb = new sQ(this.context, this.O, _.Of(Kl), Xa.j, e.j);
        J(b, fb);
        this.context.Bm && oI(b, 1231, tv, {
            Io: Xa.j,
            X: e.j
        }, {
            wa: this.context.Qa
        }, {});
        d = new cQ(this.context, d, c);
        J(b, d);
        $b = Il(this.context, 646, function(ec, fc, Pc, Qc, qf, we, Md, xe) {
            yv(function() {
                return void xQ(a, qf, ec, fc, Pc, Qc, we, Md, xe)
            }, ec, a.B)
        });
        kc = Il(this.context, 647, function(ec, fc, Pc) {
            yv(function() {
                return void yQ(a, Ec, Pc, fc, ec)
            }, -1, a.B)
        });
        "ldjh" === aa ? (R = zQ(this, 289, "strm_err"), wv() ? (Ua = new oQ(this.context, $b, R, kc, c, this.L, this.O, e.j, la, wa, Xa.j, fb.output, d.output, Ua, Pa, dc), J(b, Ua), la = Ua.C, wa = Ua.o, Ua = Ua.j) : (Ua = new mQ(this.context, $b, R, kc, c, this.L, this.O, e.j, la, Xa.j, fb.output, d.output), J(b, Ua), la = Ua.H, wa = Ua.C, Ua = Ua.o), wa = oI(b, 1221, pv, {
            status: wa,
            responseText: Ua
        }, {
            R: this.R
        }, {}).finished, this.o.push(wa.promise)) : (wa = new DP(this.context, $b, zQ(this, 1042, "Unknown web bundle error."), kc, aa, ea, c, this.aa, e.j, la, Xa.j, Xa.P, fb.output, d.output), ru(b, wa), la = new Xr, bI(la, Ck(wa).then(function() {})));
        p = new dQ(this.context, Ec, e.j, la, p, this.networkCode);
        J(b, p);
        wa = new $P(this.context, Xa.o, Xa.j);
        J(b, wa);
        wa = new fQ(this.context, this.H.za, this.O, wa.output);
        J(b, wa);
        wa = new LO(this.context, this.ga, this.B, wa.output);
        J(b, wa);
        wa = new gO(this.context, this.O, this.P, e.j, wa.output);
        J(b, wa);
        e = new qN(this.context, this.L, this.O, this.aa, e.j, wa.output);
        J(b, e);
        wa = new TO(this.context, ck(this.B), this.B, c, la);
        J(b, wa);
        1 === Ec && (c = new iN(this.context, this.B, c, N, la), J(b, c), this.o.push(c.output.promise));
        this.o.push(p.output.promise, e.output.promise, wa.output.promise);
        Ck(b)
    };
    var xQ = function(a, b, c, d, e, f, g, h, k) {
            var l, m, n, p;
            return _.ub(function(r) {
                l = f[c];
                if (!l) return Ml(a.context, 646, Error("missing slot")), r.return();
                0 === c && (m = gt(a.O.T[l.getDomId()], 20), ft(_.Of(Kl), "4", m));
                return r.yield(AQ(a, l, d, e, b, null == (n = g) ? void 0 : n[l.getId()], h, null == (p = k) ? void 0 : p.get(l)), 0)
            })
        },
        yQ = function(a, b, c, d, e) {
            var f, g, h;
            return _.ub(function(k) {
                if (1 == k.g) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Wc) {
                        var p = l.Qa,
                            r = p.Vc;
                        l = wl(l);
                        var v = new bD;
                        v = _.mj(v, 3, b);
                        m = _.Al(v, 1, m);
                        n = _.Al(m, 2, n);
                        n = _.Bl(l, 8, Cl, n);
                        r.call(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.g) {
                    if (!(f < d.length)) return k.yield(BQ(a), 0);
                    if (!d[f]) {
                        k.g = 3;
                        return
                    }
                    p = new AA;
                    p = ai(p, 8, !0);
                    g = hl(p);
                    h = '{"empty":' + g + "}";
                    return k.yield(xQ(a, c, f, h, {
                        kind: 0,
                        hb: ""
                    }, d), 3)
                }++f;
                k.g = 2
            })
        },
        AQ = function(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, v, w, y, B, C, G, F, M, R, N, aa, ha;
            return _.ub(function(la) {
                if (1 == la.g) return k = {
                    Z: e,
                    ab: a.ab,
                    L: a.L,
                    Da: a.Da,
                    Ra: d,
                    R: a.R
                }, l = new vQ(a.context, b, c, k), la.yield(Ck(l), 2);
                m = la.A;
                p = n = m.Hl;
                r = p.isEmpty;
                v = p.Oa;
                w = p.ha;
                y = p.gn;
                B = p.Jb;
                C = p.ig;
                G = p.Ak;
                F = p.Ra;
                M = p.height;
                R = p.width;
                lq(a.context, null == (N = a.j.Lb) ? void 0 : N.Qd, y, B, v);
                _.E(QD) && Mq(a.context, a.Da, C);
                if (b.M) return la.return();
                aa = !!w || _.E(QE) && !!f;
                _.E(KE) || aa && Fp("gpt_td_init", function(ea) {
                    ep(ea, a.context);
                    fp(ea, "noFill", r ? "1" : "0");
                    fp(ea, "publisher_tag", "gpt");
                    var Pa, wa = null == (Pa = w) ? void 0 : _.Bm(Pa, wA, 5);
                    wa && (fp(ea, "winner_qid", wa.getEscapedQemQueryId()), fp(ea, "xfpQid", _.I(wa, 6)))
                }, 1);
                (ha = Pq("google_norender")) || r && !aa ? lt(b, a.L, a.O, v) : _.E(Mv) && "vast" === G ? (Yg({
                    kind: Sg(),
                    hb: ah
                }), ht(b, kt, 825, {
                    isEmpty: !1,
                    vast: F.hb,
                    size: void 0 === R || void 0 === M ? void 0 : new _.Sm(R, M)
                })) : XP(a.la, a.ra, a.R, b, r || ha, aa, a.L, a.O, a.ab, n, e, f, g, a.H.za, a.P, a.j, h);
                l.ya();
                la.g = 0
            })
        },
        zQ = function(a, b, c) {
            return Il(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Ml(a.context, b, d);
                BQ(a)
            })
        },
        BQ = function(a) {
            return _.ub(function(b) {
                if (1 == b.g) {
                    var c = a.L,
                        d = a.W,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : b.yield(_.u.Promise.all(a.o), 2)
                }
                ht(a.H.mi, dK, 965, a.W);
                b.g = 0
            })
        };
    var CQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B, C, G, F, M, R) {
        Z.call(this, a, 885);
        this.fa = b;
        this.R = c;
        this.O = d;
        this.L = e;
        this.Da = f;
        this.ne = g;
        this.P = h;
        this.H = k;
        this.j = l;
        this.o = m;
        this.W = n;
        this.isSecureContext = p;
        this.ib = r;
        this.J = v;
        this.Qb = w;
        this.ab = y;
        this.B = B;
        this.aa = C;
        this.C = M;
        this.ga = R;
        this.la = X(this, G);
        jI(this, F)
    };
    _.T(CQ, Z);
    CQ.prototype.g = function() {
        var a = this.la.value;
        if (a.length) {
            var b = this.L,
                c = this.j,
                d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.x(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.X;
                c = new tk;
                _.S(this, c);
                var f = Zq(this.context, this.J, null == (e = this.C.Lb) ? void 0 : e.Ti);
                e = f.Mc;
                var g = f.qg;
                _.S(c, f.Ka);
                e = Vo(this.context, this.R, this.L, this.B, e, g, 3, nv(this.O.ca));
                f = e.nb;
                _.S(c, e.Ka);
                e = new FO(this.context, this.B, f);
                J(c, e);
                e = new wN(this.context, this.B, f);
                J(c, e);
                e = new ou(this.context, this.B, f);
                J(c, e);
                g = new YP(this.context, this.Da, this.ib, f);
                J(c, g);
                b = new wQ(this.context, this.fa, this.R, d, this.j, this.O, this.L, this.Da, this.P, this.H, this.o, this.ne, this.W, b, this.isSecureContext, this.Qb, this.ab, this.B, this.aa, e.output, f, g.o, this.C, this.ga);
                J(c, b);
                Ck(c)
            }
        } else ht(this.o.mi, dK, 965, this.j)
    };
    var DQ = new _.u.Map,
        EQ = function(a, b, c, d) {
            d = void 0 === d ? DQ : d;
            Z.call(this, a, 834);
            this.R = b;
            this.X = c;
            this.j = d;
            this.o = W(this);
            this.o.La(_.u.Promise.all(this.X.map(this.C, this)).then(function(e) {
                return e.filter(function(f) {
                    return null != f && !f.M
                })
            }))
        };
    _.T(EQ, Z);
    EQ.prototype.g = function() {};
    EQ.prototype.C = function(a) {
        var b = this,
            c, d;
        return _.ub(function(e) {
            if (1 == e.g) {
                if (a.M) return e.return();
                b.j.has(a) || (b.j.set(a, _.E(uE) ? Tv(a) : Sv(a)), _.sp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.M) return e.return();
            if (d) return e.return(a);
            P(b.R, iL(a.getAdUnitPath()));
            return e.return()
        })
    };
    var FQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, y, B) {
        _.V.call(this);
        var C = this;
        this.context = a;
        this.C = b;
        this.R = c;
        this.L = d;
        this.Da = e;
        this.za = f;
        this.K = g;
        this.j = h;
        this.o = k;
        this.isSecureContext = l;
        this.ib = m;
        this.I = n;
        this.Qb = p;
        this.ab = r;
        this.aa = v;
        this.B = w;
        this.D = y;
        this.H = B;
        this.g = new _.u.Map;
        this.l = new WJ(a);
        _.S(this, this.l);
        this.l.listen(dK, function(G) {
            G = G.detail;
            var F = C.g.get(G);
            F && (C.g.delete(G), F.ya())
        })
    };
    _.T(FQ, _.V);
    var GQ = function(a, b, c, d) {
        var e = ++a.L.D;
        a.g.has(e);
        var f = new tk;
        a.g.set(e, f);
        b = new EQ(a.context, a.R, b);
        J(f, b);
        var g = oI(f, 845, Xv, {
            X: b.o
        }, {
            T: d.T
        }, {
            sj: void 0,
            Cj: void 0
        });
        b = g.Cj;
        g = oI(f, 847, Vv, {
            X: g.sj
        }, {
            L: a.L,
            zb: !!_.Q(d.ca, 6),
            xl: Pq("google_nofetch")
        }, {
            me: void 0
        }).me;
        b = oI(f, 864, Kq, {
            X: b
        }, {
            L: a.L,
            O: d,
            aa: document
        }, {}).finished;
        a = new CQ(a.context, a.C, a.R, d, a.L, a.Da, c, a.K, a.j, e, {
            mi: a.l,
            za: a.za
        }, a.o, a.isSecureContext, a.ib, a.I, a.Qb, a.ab, a.B, a.aa, g, b, a.D, a.H);
        J(f, a);
        Ck(f)
    };
    var HQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        FP.call(this, a, c, h);
        this.context = a;
        this.L = d;
        this.j = new _.u.Set;
        this.I = {};
        this.C = new WP(a, d);
        this.H = new FQ(a, b, c, d, new _.oH(window), this.l, m, e, this.C, f, g, k, l, n, document, window, p, r);
        _.S(this, this.H)
    };
    _.T(HQ, FP);
    HQ.prototype.getName = function() {
        return "publisher_ads"
    };
    HQ.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ka(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        Ct(this);
        var h = ko(c, this.context, this.R, a, b, f),
            k = h.slotId;
        h = h.Fa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            vt(this, null != (l = g) ? l : k.getDomId(), c)
        } else P(this.R, bm("PubAdsService.display", [a, b, d]))
    };
    var vt = function(a, b, c) {
        var d = IQ(b, c);
        c = d.slotId;
        var e = d.Lk;
        d = d.Mk;
        if (c) {
            if (b = hn(), (d = QL(b, c.getDomId())) && !_.Q(d, 19))
                if (e && b.l.set(c, e), Zm(c) || Km(xr(d))) {
                    if (ai(d, 19, !0), e = Vm(b.g, b.A), a.enabled) {
                        Ct(a);
                        a.enabled && kK(a.L, c);
                        a.R.info(KK());
                        b = e.ca;
                        d = e.T;
                        var f = _.Q(b, 6);
                        if (f || !a.L.Hc(c)) f && (f = Zm(c)) && ht(c, ZJ, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], f = a.L, Gq(d, b) && !f.Hc(c) && Hq(c, document, d, b)), UL(a, e, c)
                    }
                } else P(a.R, AK(String(ik(d, 1)), String(ik(d, 2))), c)
        } else d ? a.R.error(BK(d)) : a.R.error(bm("googletag.display", [String(b)]))
    };
    HQ.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && kK(this.L, a);
        ht(this.l, bK, 724, {
            lh: a.getDomId(),
            T: b
        });
        a.listen(kt, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.vast,
                g = new IN(a, "publisher_ads");
            e.isEmpty && (g.isEmpty = !0, g.slotContentChanged = !1);
            f && _.E(Mv) && (g.vast = f);
            e = a.g.getResponseInformation();
            d && e && (g.size = [d.width, d.height], g.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, g.isBackfill = e.isBackfill, g.creativeId = e.creativeId, g.lineItemId = e.lineItemId, g.creativeTemplateId = e.creativeTemplateId, g.advertiserId = e.advertiserId, g.campaignId = e.campaignId, g.yieldGroupIds = e.yieldGroupIds, g.companyIds = e.companyIds);
            ht(c.l, "slotRenderEnded", 708, g)
        });
        a.listen($J, function() {
            ht(c.l, "slotResponseReceived", 709, new ON(a, c.getName()))
        });
        4 === xr(b) && JQ(this, "rewardedSlotClosed", a, b);
        7 === xr(b) && JQ(this, "gameManualInterstitialSlotClosed", a, b);
        FP.prototype.slotAdded.call(this, a, b)
    };
    var JQ = function(a, b, c, d) {
            _.sp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, KQ(a, [c], hn().g, (e[c.getDomId()] = d, e), a.L))
            }))
        },
        UL = function(a, b, c) {
            var d = LQ(a, b, c);
            MQ(a, d, b, {
                jc: 1
            });
            b = c.getAdUnitPath();
            if (c = a.I[b]) {
                c = _.x(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, MQ(a, d.X, d.O, d.ne);
                delete a.I[b]
            }
        },
        LQ = function(a, b, c) {
            var d = b.ca,
                e = b.T[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (null == e ? 0 : _.Q(e, 17)) ? (a.j.add(c), _.sp(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.j.has(f) || _.E(wE) && !Zm(f) && !Km(xr(e))) return !1;
                a.j.add(f);
                _.sp(f, function() {
                    return void a.j.delete(f)
                });
                return !0
            })
        },
        MQ = function(a, b, c, d) {
            a.R.info(RK());
            if (NQ(a, b, d, c) && 1 !== d.jc)
                for (b = _.x(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), ht(a.l, cK, 725, {
                    lh: d,
                    T: c.T[d]
                })
        },
        NQ = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.T[e.getDomId()],
                    g = _.Iq(a.L, e);
                !1 === g && P(a.R, AL(String(xr(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.H = [5, 4, 7], _.z(_.H, "includes")).call(_.H, xr(f)) && _.lK(a.L, e);
                return !0
            });
            if (!b.length) return null;
            GQ(a.H, b, c, d);
            return b
        };
    HQ.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            jc: 2
        } : c;
        b = OQ(this, b);
        if (!b.length) return !1;
        PQ(this, a, b, c);
        return !0
    };
    var OQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.M) return !0;
                P(a.R, UK(String(d)));
                return !1
            })
        },
        PQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.x(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        Bf: void 0
                    }, e = h.next()) f.Bf = e.value, a.j.add(f.Bf), _.sp(f.Bf, function(k) {
                    return function() {
                        return void a.j.delete(k.Bf)
                    }
                }(f));
                MQ(a, c, b, d)
            } else c.length && _.Q(b.ca, 6) ? (P(a.R, QK(g), e), e = e.getAdUnitPath(), f = null != (h = a.I[e]) ? h : [], f.push({
                X: c,
                O: b,
                ne: d
            }), a.I[e] = f) : P(a.R, OK(g), e)
        };
    HQ.prototype.o = function() {
        var a = hn().g;
        if (_.Q(a, 6))
            for (var b = _.x(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && kK(this.L, c.value);
        ZL(this, a);
        a = Eo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    HQ.prototype.destroySlots = function(a) {
        a = FP.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = hn();
            QQ(this, a, b.g, b.A)
        }
        return a
    };
    var aM = function(a, b, c, d) {
            if (!a.enabled) return P(a.R, PK(), d[0]), !1;
            var e = OQ(a, d);
            if (!e.length) return P(a.R, bm("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.R.info(SK());
            QQ(a, e, b, c);
            return !0
        },
        QQ = function(a, b, c, d) {
            for (var e = _.x(b), f = e.next(); !f.done; f = e.next()) hK(a.L, f.value);
            KQ(a, b, c, d, a.L)
        };
    HQ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Of(mh).g(a)
    };
    var KQ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.x(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                qK(a.C.L, g);
                var h = d[g.getDomId()];
                Gq(h, c) && Hq(g, f.document, h, c);
                Jq(e, g)
            }
        },
        $L = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) P(a.R, bm("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = ai(d, 21, !0);
                b = ti(e, 22, b);
                ti(b, 23, c);
                ZL(a, d)
            }
        },
        bM = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.I(b, 22)) ? c : "",
                cmsid: null != (d = _.I(b, 23)) ? d : ""
            }
        },
        ZL = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = yB(), _.nk(b, 29, _.ud(a)))
        },
        IQ = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = gN(b, c);
            else if (_.ka(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = gN(b, c)
            } else b = (_.H = [].concat(_.zi(b.X)), _.z(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                Lk: d,
                Mk: c
            }
        };
    var gw = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        hw = _.Bw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var RQ = Cw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        SQ = _.$x(function() {
            uB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        UQ = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, RQ) : d;
            this.L = a;
            this.A = d;
            this.g = new _.u.Map;
            this.X = new _.u.Set;
            b.l = function(e) {
                return TQ(c, e)
            }
        };
    UQ.prototype.defineSlot = function(a, b, c, d, e) {
        a = ko(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.Ne || b.error(bm("googletag.defineSlot", [c, d, e]));
        return null
    };
    var ko = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Wb: f,
            Xi: void 0 === g ? !1 : g
        }) : {}
    };
    UQ.prototype.add = function(a, b, c, d, e, f) {
        var g = this,
            h = e.Wb,
            k = void 0 === e.format ? 0 : e.format,
            l = void 0 === e.Xi ? !1 : e.Xi;
        e = void 0 === e.yb ? !1 : e.yb;
        f = void 0 === f ? _.t : f;
        try {
            var m = new RegExp(this.A, "u");
            if (m.test("/1") && !m.test(c)) return b.error(DK(c)), {
                Ne: !0
            }
        } catch (p) {}
        f = Cq(k, f, e);
        null !== f && wq(a, f, zq(k));
        if (f) return rq(b, f, k, c), {};
        l && SQ();
        k = this.g.get(c) || Number(l);
        b = VQ(this, a, b, c, k, d, h || "gpt_unit_" + c + "_" + k);
        a = b.Fa;
        var n = b.slotId;
        b = b.Ne;
        if (!n) return {
            Ne: b
        };
        this.g.set(c, k + 1);
        this.X.add(n);
        _.sp(n, function() {
            return void g.X.delete(n)
        });
        QJ(c);
        return {
            slotId: n,
            Fa: a
        }
    };
    var gN = function(a, b) {
            a = _.x(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        tt = function(a) {
            a = _.x(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.ya()
        },
        VQ = function(a, b, c, d, e, f, g) {
            var h = gN(a, g);
            if (h) return c.error(CK(g, d, h.getAdUnitPath())), {
                Ne: !0
            };
            var k = new mM;
            nM(ti(k, 1, d), g);
            oM(k, zo(f));
            PL(k);
            var l = new Vg(b, d, e, g);
            WL(l, Lo(b, c, l));
            _.sp(l, function() {
                var m = hn(),
                    n = l.getDomId();
                delete m.A[n];
                m.l.delete(l);
                m = l.getAdUnitPath();
                m = Hl(m);
                var p;
                n = (null != (p = Vl.get(m)) ? p : 0) - 1;
                0 >= n ? Vl.delete(m) : Vl.set(m, n);
                c.info(ZK(l.toString()), l);
                (p = Xl.get(l)) && Yl.delete(p);
                Xl.delete(l)
            });
            c.info(rK(l.toString()), l);
            l.listen(aK, function(m) {
                m = m.detail.rm;
                c.info(sK(l.getAdUnitPath()), l);
                GC(_.Of(Kl), "7", 9, oK(a.L, l), 0, m)
            });
            l.listen($J, function(m) {
                var n = m.detail;
                c.info(tK(l.getAdUnitPath()), l);
                var p;
                m = _.Of(Kl);
                var r = gt(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.g && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            l.listen(jt, function() {
                return void c.info(uK(l.getAdUnitPath()), l)
            });
            l.listen(kt, function() {
                return void c.info(vK(l.getAdUnitPath()), l)
            });
            return {
                Fa: k,
                slotId: l
            }
        },
        TQ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.zi(a.X)).some(function(d) {
                return c.test(Hl(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: ck(window),
            Pa: "m202403250101",
            Ze: "202403250101",
            Qa: new pw(3, "m202403250101", 0),
            jh: !0,
            jg: 1
        };
        try {
            Bc(function(ea) {
                Ml(c, 1190, ea)
            });
            var d = Eo();
            Hf(!_.Of(ym).g);
            _.z(Object, "assign").call(Object, zm, d._vars_);
            d._vars_ = zm;
            if (d.evalScripts) d.evalScripts();
            else {
                gJ();
                try {
                    Bh()
                } catch (ea) {
                    Ml(c, 408, ea)
                }
                ar();
                var e = new BM;
                try {
                    xh(e.I), Qn(13, c), Qn(3, c)
                } catch (ea) {
                    Ml(c, 408, ea)
                }
                var f = ow(c, e),
                    g = null != a ? a : sw(f, c),
                    h = null != b ? b : new AM(g);
                Dl(g);
                Fp("gpt_fifwin", function(ea) {
                    ep(ea, g)
                }, d.fifWin ? .01 : 0);
                var k = new gK,
                    l = new UQ(k, e),
                    m = new KP(g),
                    n = _.Am(260),
                    p = new WJ(g),
                    r = new WJ(g),
                    v = new WJ(g),
                    w = _.Am(150),
                    y = kB(),
                    B = lu(g, l, h, k, n, e, m, p, w),
                    C = _.Am(221),
                    G = new GO,
                    F = new yN,
                    M, R, N, aa = null != (N = null == (M = B.Lb) ? void 0 : null == (R = M.Cd) ? void 0 : R.Ab) ? N : new fq,
                    ha = new HQ(g, l, h, k, m, y, e, p, n, C, G, F, B, aa);
                _.E(QF) && new hN(g, p, k, l);
                var la = hn().g;
                It(g, h, ha, la, l, r, v, e, F, aa);
                Zo(g, d, h);
                window.setTimeout(function() {
                    for (var ea = window.document.scripts, Pa = 0, wa = 0, Ca = 0; Ca < ea.length; Ca++) ea[Ca].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Pa++ : ea[Ca].src.match("www.googletagservices.com/tag/js/gpt.js") && wa++;
                    1 < Pa && 0 === wa || 1 < wa && 0 === Pa ? P(h, yL()) : 0 < wa && 0 < Pa && h.error(zL())
                }, 1E3);
                qt();
                if (_.E(QF) || _.Of(Kl).g) ew(), iw();
                bp(g)
            }
        } catch (ea) {
            Ml(c, 106, ea)
        }
    })();
    _.WQ = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame;
    _.XQ = !!_.WQ && !/'iPhone'/.test(_.t.navigator.userAgent);
    _.YQ = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.j = a;
        this.g = b;
        this.l = c;
        this.P = null;
        _.sp(this, function() {
            return d.P = null
        })
    };
    _.T(_.YQ, _.V);
}).call(this, {});